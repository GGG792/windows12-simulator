import { useState } from 'react';
import { Monitor, Wifi, Bluetooth, Palette, Bell, Shield, Info, ChevronRight, Moon, Volume2, Mic, Battery, Globe, Keyboard, Mouse, Sun, Volume, Music, Mic2, Eye, Fingerprint, MapPin, Camera, HardDrive, RefreshCw, Download } from 'lucide-react';

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
  const [focusMode, setFocusMode] = useState(false);

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
    alert('正在检查更新...\n\n已是最新版本！');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'system':
        return (
          <div className="p-4 space-y-3">
            <div 
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors flex items-center justify-between"
              onClick={() => setActiveTab('display')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">显示</div>
                  <div className="text-xs text-gray-500">亮度、夜间模式、分辨率</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div 
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors flex items-center justify-between"
              onClick={() => setActiveTab('sound')}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">声音</div>
                  <div className="text-xs text-gray-500">音量、输出设备、输入设备</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Battery className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="font-medium">电源</div>
                  <div className="text-xs text-gray-500">睡眠、节电模式、电池</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Keyboard className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">键盘</div>
                  <div className="text-xs text-gray-500">快捷键、输入法、语音输入</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Mouse className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="font-medium">鼠标和触摸板</div>
                  <div className="text-xs text-gray-500">指针速度、滚动、手势</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <div className="font-medium">时间和语言</div>
                  <div className="text-xs text-gray-500">时区、语言、地区</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="p-4 space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">WiFi</div>
                    <div className="text-xs text-gray-500">{wifiEnabled ? '已开启' : '已关闭'}</div>
                  </div>
                </div>
                <button
                  onClick={() => setWifiEnabled(!wifiEnabled)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${wifiEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${wifiEnabled ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
              
              {wifiEnabled && (
                <div className="space-y-2 mt-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-sm flex items-center justify-between cursor-pointer hover:bg-blue-100 transition-colors">
                    <div className="flex items-center space-x-2">
                      <span>📶</span>
                      <span className="font-medium">Home-WiFi</span>
                    </div>
                    <span className="text-xs text-blue-600">已连接</span>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg text-sm cursor-pointer transition-colors">
                    <span>📶 Office-5G</span>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg text-sm cursor-pointer transition-colors">
                    <span>📶 Starbucks_WiFi</span>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg text-sm cursor-pointer transition-colors">
                    <span>📶 ChinaNet</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium">飞行模式</div>
                  <div className="text-xs text-gray-500">关闭所有无线连接</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-medium">移动网络</div>
                  <div className="text-xs text-gray-500">SIM卡、流量使用</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'bluetooth':
        return (
          <div className="p-4 space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bluetooth className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">蓝牙</div>
                    <div className="text-xs text-gray-500">{bluetoothEnabled ? '正在搜索设备...' : '已关闭'}</div>
                  </div>
                </div>
                <button
                  onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${bluetoothEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${bluetoothEnabled ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
              
              {bluetoothEnabled && (
                <div className="space-y-2 mt-4">
                  <div className="p-3 hover:bg-gray-100 rounded-lg text-sm cursor-pointer transition-colors flex items-center space-x-2">
                    <span>🎧</span>
                    <span>AirPods Pro</span>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg text-sm cursor-pointer transition-colors flex items-center space-x-2">
                    <span>⌨️</span>
                    <span>蓝牙键盘</span>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg text-sm cursor-pointer transition-colors flex items-center space-x-2">
                    <span>🖱️</span>
                    <span>无线鼠标</span>
                  </div>
                  <div className="p-3 hover:bg-gray-100 rounded-lg text-sm cursor-pointer transition-colors flex items-center space-x-2">
                    <span>📱</span>
                    <span>iPhone</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'display':
        return (
          <div className="p-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Moon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-medium">深色模式</div>
                    <div className="text-xs text-gray-500">减少眼睛疲劳</div>
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${darkMode ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Sun className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium">亮度</div>
                    <div className="text-xs text-gray-500">调整屏幕亮度</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-xs text-gray-500 mt-1 text-right">{brightness}%</div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Moon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium">夜间模式</div>
                    <div className="text-xs text-gray-500">过滤蓝光</div>
                  </div>
                </div>
                <button
                  onClick={() => setNightLight(!nightLight)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${nightLight ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${nightLight ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">夜间模式时间</div>
                  <div className="text-xs text-gray-500">日落到日出</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        );

      case 'sound':
        return (
          <div className="p-4 space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Volume className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">主音量</div>
                    <div className="text-xs text-gray-500">系统音量</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-xs text-gray-500 mt-1 text-right">{volume}%</div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Music className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">输出设备</div>
                    <div className="text-xs text-gray-500">扬声器 (Realtek High Definition Audio)</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mic className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium">输入设备</div>
                    <div className="text-xs text-gray-500">麦克风 (Built-in Microphone)</div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">声音方案</div>
                  <div className="text-xs text-gray-500">默认声音</div>
                </div>
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
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">通知</div>
                    <div className="text-xs text-gray-500">允许应用发送通知</div>
                  </div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${notifications ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${notifications ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium">专注模式</div>
                    <div className="text-xs text-gray-500">减少干扰</div>
                  </div>
                </div>
                <button
                  onClick={() => setFocusMode(!focusMode)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${focusMode ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${focusMode ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-medium">通知历史</div>
                  <div className="text-xs text-gray-500">查看最近的通知</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">应用通知</div>
                  <div className="text-xs text-gray-500">管理每个应用的通知</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="p-4 space-y-3">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">位置服务</div>
                    <div className="text-xs text-gray-500">允许应用访问位置</div>
                  </div>
                </div>
                <button
                  onClick={() => setLocationAccess(!locationAccess)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${locationAccess ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${locationAccess ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Camera className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">相机</div>
                    <div className="text-xs text-gray-500">允许应用访问相机</div>
                  </div>
                </div>
                <button
                  onClick={() => setCameraAccess(!cameraAccess)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${cameraAccess ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${cameraAccess ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Mic2 className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium">麦克风</div>
                    <div className="text-xs text-gray-500">允许应用访问麦克风</div>
                  </div>
                </div>
                <button
                  onClick={() => setMicrophoneAccess(!microphoneAccess)}
                  className={`w-14 h-7 rounded-full transition-colors relative ${microphoneAccess ? 'bg-blue-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow absolute top-0.5 transition-transform ${microphoneAccess ? 'translate-x-7' : 'translate-x-0.5'}`} />
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <HardDrive className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="font-medium">存储</div>
                  <div className="text-xs text-gray-500">管理文件和文件夹访问权限</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">诊断和反馈</div>
                  <div className="text-xs text-gray-500">发送诊断数据</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Fingerprint className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <div className="font-medium">安全和隐私</div>
                  <div className="text-xs text-gray-500">密码、指纹、面部识别</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="p-4 space-y-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">12</span>
              </div>
              <div className="font-bold text-xl mb-1">Windows 12</div>
              <div className="text-sm opacity-90">网页模拟器</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">版本</span>
                <span className="font-medium">24H2 (OS Build 26100.1)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">系统类型</span>
                <span className="font-medium">64位操作系统</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">处理器</span>
                <span className="font-medium">Web Browser Engine</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">内存</span>
                <span className="font-medium">8.00 GB 可用</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">产品ID</span>
                <span className="font-medium">12345-67890-ABCDE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">激活状态</span>
                <span className="font-medium text-green-600">已激活</span>
              </div>
            </div>

            <button 
              onClick={handleCheckUpdates}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>检查更新</span>
            </button>

            <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Windows 会员中心</span>
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full flex bg-white">
      <div className="w-56 bg-gray-50 border-r p-3 overflow-y-auto">
        <div className="text-sm font-bold text-gray-700 px-3 py-2 mb-2">⚙️ 设置</div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all ${
              activeTab === tab.id 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            {tab.icon}
            <span className="text-sm font-medium">{tab.name}</span>
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
