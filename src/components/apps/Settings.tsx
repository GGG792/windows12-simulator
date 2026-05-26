import { useState } from 'react';
import { Monitor, Wifi, Bluetooth, Palette, Bell, Shield, Info, ChevronRight, Moon, Volume2, Mic, Battery, Globe, Keyboard, Mouse, Sun, Volume, Music, Mic2, Eye, Fingerprint, MapPin, Camera, HardDrive, RefreshCw } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('system');
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [volume, setVolume] = useState(75);
  const [brightness, setBrightness] = useState(80);
  const [notifications, setNotifications] = useState(true);
  const [locationAccess, setLocationAccess] = useState(false);
  const [cameraAccess, setCameraAccess] = useState(false);
  const [microphoneAccess, setMicrophoneAccess] = useState(false);
  const [nightLight, setNightLight] = useState(false);

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

  const handleCheckUpdates = () => {
    alert('已是最新版本！');
  };

  const Toggle = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded-full transition-colors relative ${enabled ? 'bg-blue-500' : 'bg-gray-300'}`}
    >
      <div className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform ${enabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
    </button>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'system':
        return (
          <div className="p-4 space-y-3">
            {[
              { icon: <Monitor className="w-5 h-5" />, name: '显示', sub: '亮度、夜间模式', tab: 'display' },
              { icon: <Volume2 className="w-5 h-5" />, name: '声音', sub: '音量调节', tab: 'sound' },
              { icon: <Battery className="w-5 h-5" />, name: '电源', sub: '电池、节电模式' },
              { icon: <Keyboard className="w-5 h-5" />, name: '键盘', sub: '输入法' },
              { icon: <Mouse className="w-5 h-5" />, name: '鼠标', sub: '指针速度' },
            ].map((item, i) => (
              <div 
                key={i}
                className="p-3 bg-gray-50 rounded-lg flex items-center justify-between"
                onClick={() => item.tab && setActiveTab(item.tab)}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500">{item.icon}</div>
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        );

      case 'network':
        return (
          <div className="p-4 space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Wifi className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium text-sm">WiFi</div>
                  <div className="text-xs text-gray-500">{wifiEnabled ? '已开启' : '已关闭'}</div>
                </div>
              </div>
              <Toggle enabled={wifiEnabled} onToggle={() => setWifiEnabled(!wifiEnabled)} />
            </div>
            {wifiEnabled && (
              <div className="p-3 bg-blue-50 rounded-lg text-sm">📶 Home-WiFi</div>
            )}
            <div className="p-3 bg-gray-50 rounded-lg flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-500" />
              <span className="text-sm">飞行模式</span>
            </div>
          </div>
        );

      case 'bluetooth':
        return (
          <div className="p-4 space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bluetooth className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-medium text-sm">蓝牙</div>
                  <div className="text-xs text-gray-500">{bluetoothEnabled ? '已开启' : '已关闭'}</div>
                </div>
              </div>
              <Toggle enabled={bluetoothEnabled} onToggle={() => setBluetoothEnabled(!bluetoothEnabled)} />
            </div>
          </div>
        );

      case 'display':
        return (
          <div className="p-4 space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Moon className="w-5 h-5 text-blue-500" />
                <span className="text-sm">深色模式</span>
              </div>
              <Toggle enabled={darkMode} onToggle={() => setDarkMode(!darkMode)} />
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm">亮度</span>
                </div>
                <span className="text-xs text-gray-500">{brightness}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Moon className="w-5 h-5 text-orange-500" />
                <span className="text-sm">夜间模式</span>
              </div>
              <Toggle enabled={nightLight} onToggle={() => setNightLight(!nightLight)} />
            </div>
          </div>
        );

      case 'sound':
        return (
          <div className="p-4 space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Volume className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">音量</span>
                </div>
                <span className="text-xs text-gray-500">{volume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Music className="w-5 h-5 text-green-500" />
                <span className="text-sm">输出设备</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="p-4 space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
              <Bell className="w-5 h-5 text-blue-500" />
              <div className="flex-1 mx-3">
                <div className="text-sm">通知</div>
                <div className="text-xs text-gray-500">允许发送通知</div>
              </div>
              <Toggle enabled={notifications} onToggle={() => setNotifications(!notifications)} />
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="p-4 space-y-3">
            {[
              { icon: <MapPin className="w-5 h-5" />, name: '位置', value: locationAccess, toggle: () => setLocationAccess(!locationAccess) },
              { icon: <Camera className="w-5 h-5" />, name: '相机', value: cameraAccess, toggle: () => setCameraAccess(!cameraAccess) },
              { icon: <Mic2 className="w-5 h-5" />, name: '麦克风', value: microphoneAccess, toggle: () => setMicrophoneAccess(!microphoneAccess) },
            ].map((item, i) => (
              <div key={i} className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500">{item.icon}</div>
                  <span className="text-sm">{item.name}</span>
                </div>
                <Toggle enabled={item.value} onToggle={item.toggle} />
              </div>
            ))}
          </div>
        );

      case 'about':
        return (
          <div className="p-4 space-y-4">
            <div className="bg-blue-500 rounded-xl p-6 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold">12</span>
              </div>
              <div className="font-bold">Windows 12</div>
              <div className="text-sm opacity-90">网页模拟器</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">版本</span>
                <span>24H2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">系统</span>
                <span>64位</span>
              </div>
            </div>

            <button 
              onClick={handleCheckUpdates}
              className="w-full py-2 bg-blue-500 text-white rounded-lg text-sm"
            >
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
      <div className="w-20 bg-gray-50 border-r overflow-y-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full p-3 flex flex-col items-center transition-all ${
              activeTab === tab.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
            }`}
          >
            {tab.icon}
            <span className="text-xs mt-1">{tab.name}</span>
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
