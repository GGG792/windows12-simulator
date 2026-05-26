import { useState, useEffect } from 'react';
import { useWindowsStore } from '../store/useWindowsStore';
import { Folder, Globe, Settings, Menu } from 'lucide-react';
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
    { name: '文件', icon: <Folder className="w-6 h-6" />, app: 'fileExplorer', title: '文件' },
    { name: '浏览器', icon: <Globe className="w-6 h-6" />, app: 'browser', title: '浏览器' },
    { name: '设置', icon: <Settings className="w-6 h-6" />, app: 'settings', title: '设置' },
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
            <p className="text-gray-500">{app}</p>
          </div>
        );
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className="fixed inset-0 bg-cover bg-center select-none"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=1080&fit=crop)'
      }}
    >
      <div className="p-2">
        <div className="flex flex-wrap gap-3">
          {desktopIcons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 rounded-lg hover:bg-white/10 active:bg-white/20 cursor-pointer min-w-[60px]"
              onClick={() => openWindow(icon.app, icon.title)}
            >
              {icon.icon}
              <span className="text-white text-xs mt-1 drop-shadow">{icon.name}</span>
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
          className="fixed inset-0 z-50 flex flex-col justify-end"
          onClick={toggleStartMenu}
        >
          <div 
            className="bg-black/95 backdrop-blur-xl rounded-t-3xl p-4 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-4" />
            
            <div className="flex justify-around">
              {desktopIcons.map((app, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3"
                  onClick={() => {
                    openWindow(app.app, app.title);
                    toggleStartMenu();
                  }}
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
                    {app.icon}
                  </div>
                  <span className="text-white text-xs">{app.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between text-white text-xs px-4">
              <div className="flex items-center space-x-2">
                <span>👤</span>
                <span>用户</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>📶</span>
                <span>🔋</span>
                <span>{formatTime(currentTime)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black/90 backdrop-blur-lg flex items-center justify-center">
        <button
          onClick={toggleStartMenu}
          className="w-10 h-10 flex items-center justify-center"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
        
        {windows.length > 0 && (
          <div className="h-8 w-px bg-gray-700 mx-2" />
        )}
        
        {windows.slice(-3).map((window) => (
          <button
            key={window.id}
            onClick={() => focusWindow(window.id)}
            className="px-3 py-1 mx-1"
          >
            <span className="text-white text-xs truncate max-w-20 block">{window.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Desktop;
