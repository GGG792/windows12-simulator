import { useState, useEffect } from 'react';
import { useWindowsStore } from '@/store/useWindowsStore';
import { Folder, Globe, Settings, Trash2, Search, Wifi, Volume2, Battery, Menu } from 'lucide-react';
import Window from './Window';
import FileExplorer from './apps/FileExplorer';
import Browser from './apps/Browser';
import SettingsApp from './apps/Settings';

const Desktop = () => {
  const { windows, openWindow, startMenuOpen, toggleStartMenu, focusWindow } = useWindowsStore();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const desktopIcons = [
    { name: '此电脑', icon: <Folder className="w-10 h-10 text-yellow-500" />, app: 'fileExplorer', title: '文件资源管理器' },
    { name: 'Edge', icon: <Globe className="w-10 h-10 text-blue-500" />, app: 'browser', title: 'Microsoft Edge' },
    { name: '回收站', icon: <Trash2 className="w-10 h-10 text-gray-500" />, app: 'trash', title: '回收站' },
    { name: '设置', icon: <Settings className="w-10 h-10 text-gray-600" />, app: 'settings', title: '设置' },
  ];

  const taskbarApps = [
    { icon: <Search className="w-5 h-5" />, app: 'search', title: '搜索' },
    { icon: <Folder className="w-5 h-5 text-yellow-500" />, app: 'fileExplorer', title: '文件资源管理器' },
    { icon: <Globe className="w-5 h-5 text-blue-500" />, app: 'browser', title: 'Microsoft Edge' },
    { icon: <Settings className="w-5 h-5" />, app: 'settings', title: '设置' },
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
            <p className="text-gray-500">应用程序: {app}</p>
          </div>
        );
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  return (
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=1080&fit=crop)'
      }}
    >
      <div className="p-4">
        <div className="flex flex-col gap-4">
          {desktopIcons.map((icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-20 p-2 rounded hover:bg-white/20 cursor-pointer"
              onDoubleClick={() => openWindow(icon.app, icon.title)}
            >
              {icon.icon}
              <span className="text-white text-xs text-center mt-1 drop-shadow">{icon.name}</span>
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
        <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden z-50">
          <div className="p-6 h-full flex flex-col">
            <div className="mb-6">
              <input
                type="text"
                placeholder="搜索应用、设置和文档"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <h3 className="text-sm font-medium text-gray-600 mb-3">已固定</h3>
            <div className="grid grid-cols-6 gap-2 mb-6">
              {taskbarApps.map((app, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                  onClick={() => {
                    openWindow(app.app, app.title);
                    toggleStartMenu();
                  }}
                >
                  {app.icon}
                  <span className="text-xs mt-1">{app.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  U
                </div>
                <span className="text-sm">用户</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded">
                <div className="w-5 h-5">⏻</div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 h-12 bg-white/80 backdrop-blur-lg border-t flex items-center justify-center px-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleStartMenu}
            className="p-2 hover:bg-gray-200 rounded"
          >
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <Menu className="w-4 h-4 text-white" />
            </div>
          </button>

          <div className="flex items-center space-x-1">
            {taskbarApps.map((app, index) => (
              <button
                key={index}
                onClick={() => openWindow(app.app, app.title)}
                className={`p-2 hover:bg-gray-200 rounded ${
                  windows.some(w => w.app === app.app) ? 'bg-gray-100' : ''
                }`}
              >
                {app.icon}
              </button>
            ))}
          </div>

          {windows.length > 0 && (
            <div className="h-6 w-px bg-gray-300 mx-2" />
          )}

          {windows.map((window) => (
            <button
              key={window.id}
              onClick={() => focusWindow(window.id)}
              className={`px-3 py-1 rounded text-sm flex items-center space-x-2 ${
                window.zIndex === Math.max(...windows.map(w => w.zIndex))
                  ? 'bg-gray-200'
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className="truncate max-w-32">{window.title}</span>
            </button>
          ))}
        </div>

        <div className="absolute right-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Wifi className="w-4 h-4 text-gray-600" />
            <Volume2 className="w-4 h-4 text-gray-600" />
            <Battery className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-xs text-gray-700 text-right">
            <div>{formatTime(currentTime)}</div>
            <div>{formatDate(currentTime)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
