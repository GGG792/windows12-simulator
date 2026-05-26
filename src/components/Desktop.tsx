import { useState, useEffect } from 'react';
import { useWindowsStore } from '@/store/useWindowsStore';
import { Folder, Globe, Settings, Wifi, Volume2, Battery, Menu } from 'lucide-react';
import Window from './Window';
import FileExplorer from './apps/FileExplorer';
import Browser from './apps/Browser';
import SettingsApp from './apps/Settings';

const Desktop = () => {
  const { windows, openWindow, startMenuOpen, toggleStartMenu, focusWindow } = useWindowsStore();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopIcons = [
    { name: '文件', icon: <Folder className="w-8 h-8 text-yellow-500" />, app: 'fileExplorer', title: '文件资源管理器' },
    { name: '浏览器', icon: <Globe className="w-8 h-8 text-blue-500" />, app: 'browser', title: '浏览器' },
    { name: '设置', icon: <Settings className="w-8 h-8 text-gray-600" />, app: 'settings', title: '设置' },
  ];

  const renderAppContent = (app: string) => {
    switch (app) {
      case 'fileExplorer':
        return <FileExplorer />;
      case 'browser':
        return <Browser />;
      case 'settings':
        return <SettingsApp />;
      default:
        return (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500">应用: {app}</p>
          </div>
        );
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' });
  };

  return (
    <div
      className="fixed inset-0 bg-cover bg-center select-none"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=1080&fit=crop)'
      }}
    >
      <div className="p-3">
        <div className="flex flex-wrap gap-4">
          {desktopIcons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors cursor-pointer"
              onClick={() => openWindow(icon.app, icon.title)}
              onDoubleClick={() => openWindow(icon.app, icon.title)}
            >
              {icon.icon}
              <span className="text-white text-xs mt-1 drop-shadow-md">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>

      {windows.map((window) => (
        <Window key={window.id} windowState={window}>
          {renderAppContent(window.app)}
        </Window>
      ))}

      {startMenuOpen && (
        <div 
          className="fixed bottom-14 left-1/2 -translate-x-1/2 w-80 max-h-[70vh] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            <input
              type="text"
              placeholder="搜索..."
              className="w-full px-3 py-2 bg-gray-100 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2 p-4">
            {desktopIcons.map((app, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-xl cursor-pointer"
                onClick={() => {
                  openWindow(app.app, app.title);
                  toggleStartMenu();
                }}
              >
                {app.icon}
                <span className="text-xs mt-1">{app.name}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-4 py-3 border-t">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">U</div>
              <span className="text-sm">用户</span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">⏻</button>
          </div>
        </div>
      )}

      <div 
        className="fixed bottom-0 left-0 right-0 h-10 bg-white/90 backdrop-blur-lg border-t flex items-center justify-center px-2"
        onClick={() => startMenuOpen && toggleStartMenu()}
      >
        <div className="flex items-center space-x-1">
          <button
            onClick={(e) => { e.stopPropagation(); toggleStartMenu(); }}
            className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="w-px h-6 bg-gray-300 mx-1" />
          
          {windows.map((window) => (
            <button
              key={window.id}
              onClick={(e) => { e.stopPropagation(); focusWindow(window.id); }}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                window.zIndex === Math.max(...windows.map(w => w.zIndex))
                  ? 'bg-gray-200'
                  : 'hover:bg-gray-100'
              }`}
            >
              {window.title}
            </button>
          ))}
        </div>

        <div className="absolute right-2 flex items-center space-x-2 text-xs">
          <Wifi className="w-3.5 h-3.5" />
          <Volume2 className="w-3.5 h-3.5" />
          <Battery className="w-3.5 h-3.5" />
          <span>{formatTime(currentTime)}</span>
        </div>
      </div>

      {startMenuOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={toggleStartMenu}
        />
      )}
    </div>
  );
};

export default Desktop;
