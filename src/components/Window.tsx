import { useState, useRef, useEffect } from 'react';
import { useWindowsStore, WindowState } from '@/store/useWindowsStore';
import { Minus, Square, X } from 'lucide-react';

interface WindowProps {
  windowState: WindowState;
  children: React.ReactNode;
}

const Window = ({ windowState, children }: WindowProps) => {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, moveWindow } = useWindowsStore();
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowState.maximized) return;
    focusWindow(windowState.id);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - windowState.x,
      y: e.clientY - windowState.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        moveWindow(windowState.id, e.clientX - dragOffset.x, e.clientY - dragOffset.y);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, windowState.id, moveWindow]);

  if (windowState.minimized) return null;

  const windowStyle = windowState.maximized
    ? {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 48,
        width: '100vw',
        height: 'calc(100vh - 48px)',
        zIndex: windowState.zIndex
      }
    : {
        position: 'fixed' as const,
        left: windowState.x,
        top: windowState.y,
        width: windowState.width,
        height: windowState.height,
        zIndex: windowState.zIndex
      };

  return (
    <div
      ref={windowRef}
      style={windowStyle}
      className={`bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col ${
        isDragging ? 'cursor-grabbing' : ''
      }`}
      onClick={() => focusWindow(windowState.id)}
    >
      <div
        className="h-12 bg-gray-100 flex items-center justify-between px-4 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">{windowState.title}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => { e.stopPropagation(); minimizeWindow(windowState.id); }}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <Minus className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); maximizeWindow(windowState.id); }}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <Square className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); closeWindow(windowState.id); }}
            className="p-1 hover:bg-red-500 rounded transition-colors group"
          >
            <X className="w-4 h-4 text-gray-600 group-hover:text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Window;
