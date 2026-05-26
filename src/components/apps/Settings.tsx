import { Monitor, Palette, Bell, Shield, Wifi, Bluetooth, Info } from 'lucide-react';

const Settings = () => {
  const menuItems = [
    { icon: <Monitor className="w-5 h-5" />, name: '系统' },
    { icon: <Bluetooth className="w-5 h-5" />, name: '蓝牙和设备' },
    { icon: <Wifi className="w-5 h-5" />, name: '网络和Internet' },
    { icon: <Palette className="w-5 h-5" />, name: '个性化' },
    { icon: <Bell className="w-5 h-5" />, name: '通知' },
    { icon: <Shield className="w-5 h-5" />, name: '隐私和安全性' },
    { icon: <Info className="w-5 h-5" />, name: '关于' },
  ];

  return (
    <div className="h-full flex">
      <div className="w-64 bg-gray-50 border-r p-4">
        <h2 className="text-lg font-semibold mb-6">设置</h2>
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                index === 0 ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-8">系统</h1>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Monitor className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">显示</h3>
                  <p className="text-sm text-gray-500">亮度、夜间模式、显示配置</p>
                </div>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </div>

          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center text-gray-600">🔊</div>
                <div>
                  <h3 className="font-medium">声音</h3>
                  <p className="text-sm text-gray-500">音量、输出、输入</p>
                </div>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </div>

          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center text-gray-600">🔋</div>
                <div>
                  <h3 className="font-medium">电源</h3>
                  <p className="text-sm text-gray-500">睡眠、电池使用情况</p>
                </div>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </div>

          <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center text-gray-600">💾</div>
                <div>
                  <h3 className="font-medium">存储</h3>
                  <p className="text-sm text-gray-500">存储空间、清理建议</p>
                </div>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
