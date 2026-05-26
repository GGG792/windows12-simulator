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
    e.preventDefault();
    focusWindow(windowState.id);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - windowState.x,
      y: e.clientY - windowState.y
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (windowState.maximized) return;
    e.preventDefault();
    const touch = e.touches[0];
    focusWindow(windowState.id);
    setIsDragging(true);
    setDragOffset({
      x: touch.clientX - windowState.x,
      y: touch.clientY - windowState.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        moveWindow(windowState.id, e.clientX - dragOffset.x, e.clientY - dragOffset.y);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        moveWindow(windowState.id, touch.clientX - dragOffset.x, touch.clientY - dragOffset.y);
      }
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragOffset, windowState.id, moveWindow]);

  if (windowState.minimized) return null;

  const windowStyle = windowState.maximized
    ? {
        position: 'fixed' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 40,
        width: '100vw',
        height: 'calc(100vh - 40px)',
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
      className={`bg-white rounded-lg shadow-xl overflow-hidden flex flex-col ${isDragging ? 'cursor-grabbing' : ''}`}
      onClick={() => focusWindow(windowState.id)}
    >
      <div
        className="h-8 bg-gray-50 flex items-center justify-between px-2 cursor-grab active:cursor-grabbing select-none touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <span className="text-xs font-medium text-gray-700 truncate">{windowState.title}</span>
        <div className="flex items-center space-x-1">
          <button
            onClick={(e) => { e.stopPropagation(); minimizeWindow(windowState.id); }}
            className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); maximizeWindow(windowState.id); }}
            className="w-6 h-6 flex items-center justify-center hover:bg-gray-200 rounded transition-colors"
          >
            <Square className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); closeWindow(windowState.id); }}
            className="w-6 h-6 flex items-center justify-center hover:bg-red-500 rounded transition-colors group"
          >
            <X className="w-3 h-3 group-hover:text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Window;
