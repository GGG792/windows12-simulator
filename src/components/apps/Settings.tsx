import { useState } from 'react';
import { Monitor, Wifi, Bluetooth, Palette, Bell, Shield, Info, ChevronRight, Moon, Volume2, Mic, Battery, Globe, Keyboard, Mouse, Clock } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('system');
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [volume, setVolume] = useState(75);
  const [brightness, setBrightness] = useState(80);
  const [notifications, setNotifications] = useState(true);

  const tabs = [
    { id: 'system', icon: <Monitor className="w-5 h-5" />, name: '系统' },
    { id: 'network', icon: <Wifi className="w-5 h-5" />, name: '网络' },
    { id: 'bluetooth', icon: <Bluetooth className="w-5 h-5" />, name: '蓝牙' },
    { id: 'display', icon: <Palette className="w-5 h-5" />, name: '显示' },
    { id: 'sound', icon: <Volume2 className="w-5 h-5" />, name: '声音' },
    { id: 'notifications', icon: <Bell className="w-5 h-5" />, name: '通知' },
    { id: 'privacy', icon: <Shield className="w-5 h-5" />, name: '隐私' },
    { id: 'about', icon: <Info className="w-5 h-5" />, name: '关于' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'system':
        return (
          <div className="p-4 space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">显示</div>
                    <div className="text-xs text-gray-500">亮度、夜间模式</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" onClick={() => setActiveTab('display')} />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">声音</div>
                    <div className="text-xs text-gray-500">音量、输出设备</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" onClick={() => setActiveTab('sound')} />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Battery className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">电源</div>
                    <div className="text-xs text-gray-500">睡眠、节电模式</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Keyboard className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">键盘</div>
                    <div className="text-xs text-gray-500">快捷键、输入法</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mouse className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">鼠标和触摸板</div>
                    <div className="text-xs text-gray-500">指针速度、滚动</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="p-4 space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">WiFi</div>
                    <div className="text-xs text-gray-500">{wifiEnabled ? '已连接' : '已关闭'}</div>
                  </div>
                </div>
                <button
                  onClick={() => setWifiEnabled(!wifiEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors ${wifiEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${wifiEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>
              
              {wifiEnabled && (
                <div className="space-y-2 mt-3">
                  <div className="p-2 bg-blue-50 rounded text-sm">📶 Home-WiFi (已连接)</div>
                  <div className="p-2 hover:bg-gray-100 rounded text-sm cursor-pointer">📶 Office-Network</div>
                  <div className="p-2 hover:bg-gray-100 rounded text-sm cursor-pointer">📶 Public-WiFi</div>
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium">飞行模式</div>
                  <div className="text-xs text-gray-500">关闭所有无线连接</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'bluetooth':
        return (
          <div className="p-4 space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Bluetooth className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">蓝牙</div>
                    <div className="text-xs text-gray-500">{bluetoothEnabled ? '已开启' : '已关闭'}</div>
                  </div>
                </div>
                <button
                  onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
                  className={`w-12 h-6 rounded-full transition-colors ${bluetoothEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${bluetoothEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>
              
              {bluetoothEnabled && (
                <div className="space-y-2 mt-3">
                  <div className="p-2 hover:bg-gray-100 rounded text-sm cursor-pointer">🎧 AirPods Pro</div>
                  <div className="p-2 hover:bg-gray-100 rounded text-sm cursor-pointer">⌨️ 蓝牙键盘</div>
                  <div className="p-2 hover:bg-gray-100 rounded text-sm cursor-pointer">🖱️ 无线鼠标</div>
                </div>
              )}
            </div>
          </div>
        );

      case 'display':
        return (
          <div className="p-4 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Moon className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">深色模式</div>
                    <div className="text-xs text-gray-500">减少眼睛疲劳</div>
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 rounded-full transition-colors ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="mb-2">
                <div className="font-medium mb-2">亮度</div>
                <div className="text-xs text-gray-500 mb-2">{brightness}%</div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="font-medium mb-2">夜间模式</div>
              <div className="text-xs text-gray-500 mb-2">过滤蓝光，减少眼睛疲劳</div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                立即开启
              </button>
            </div>
          </div>
        );

      case 'sound':
        return (
          <div className="p-4 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="mb-3">
                <div className="font-medium mb-2">主音量</div>
                <div className="text-xs text-gray-500 mb-2">{volume}%</div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">输出设备</div>
                    <div className="text-xs text-gray-500">扬声器 (Realtek)</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mic className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">输入设备</div>
                    <div className="text-xs text-gray-500">麦克风 (Built-in)</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="p-4 space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">通知</div>
                    <div className="text-xs text-gray-500">允许应用发送通知</div>
                  </div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-12 h-6 rounded-full transition-colors ${notifications ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${notifications ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="font-medium mb-1">专注模式</div>
              <div className="text-xs text-gray-500">减少干扰</div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="font-medium mb-1">通知历史</div>
              <div className="text-xs text-gray-500">查看最近的通知</div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="p-4 space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="font-medium mb-1">位置服务</div>
              <div className="text-xs text-gray-500">允许应用访问位置</div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="font-medium mb-1">相机</div>
              <div className="text-xs text-gray-500">允许应用访问相机</div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="font-medium mb-1">麦克风</div>
              <div className="text-xs text-gray-500">允许应用访问麦克风</div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="font-medium mb-1">存储</div>
              <div className="text-xs text-gray-500">管理文件和文件夹访问权限</div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="p-4 space-y-4">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">12</span>
              </div>
              <div className="font-bold text-lg">Windows 12</div>
              <div className="text-sm text-gray-500">网页模拟器</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">版本</span>
                <span>24H2 (OS Build 26100.1)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">系统类型</span>
                <span>64位操作系统</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">处理器</span>
                <span>Web Browser Engine</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">内存</span>
                <span>8.00 GB 可用</span>
              </div>
            </div>

            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              检查更新
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full flex bg-white">
      <div className="w-56 bg-gray-50 border-r p-2 overflow-y-auto">
        <div className="text-sm font-semibold text-gray-500 px-3 py-2">设置</div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
              activeTab === tab.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
            }`}
          >
            {tab.icon}
            <span className="text-sm">{tab.name}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;
