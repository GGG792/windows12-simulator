import { useState, useEffect } from 'react';
import { useWindowsStore } from '../store/useWindowsStore';
import { Check, ChevronRight, Globe, Shield, Monitor, HardDrive } from 'lucide-react';

const InstallWizard = () => {
  const { setInstallStep, installStep, setPhase, setUsername, username } = useWindowsStore();
  const [installProgress, setInstallProgress] = useState(0);

  const installSteps = [
    { title: '欢迎', icon: <Globe className="w-16 h-16" /> },
    { title: '许可协议', icon: <Shield className="w-16 h-16" /> },
    { title: '用户信息', icon: <Monitor className="w-16 h-16" /> },
    { title: '正在安装', icon: <HardDrive className="w-16 h-16" /> }
  ];

  useEffect(() => {
    if (installStep === 3) {
      const interval = setInterval(() => {
        setInstallProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setPhase('boot'), 1000);
            return 100;
          }
          return prev + Math.random() * 5;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [installStep, setPhase]);

  const nextStep = () => {
    if (installStep < 3) {
      setInstallStep(installStep + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">12</span>
            </div>
            <h1 className="text-3xl font-light text-gray-800">Windows 12</h1>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          {installSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                index < installStep
                  ? 'bg-blue-500 text-white'
                  : index === installStep
                  ? 'bg-blue-500 text-white scale-110'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {index < installStep ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              {index < installSteps.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${index < installStep ? 'bg-blue-500' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <div className="text-blue-500 mb-4">
            {installSteps[installStep].icon}
          </div>
          <h2 className="text-2xl font-medium text-gray-800 mb-2">
            {installSteps[installStep].title}
          </h2>
        </div>

        <div className="min-h-[200px] flex flex-col items-center justify-center">
          {installStep === 0 && (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                欢迎使用 Windows 12 安装程序
              </p>
              <p className="text-gray-500 text-sm mb-6">
                点击"下一步"开始安装过程
              </p>
            </div>
          )}

          {installStep === 1 && (
            <div className="text-center max-w-md">
              <p className="text-gray-600 mb-4">
                请阅读并接受许可协议
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-left text-sm text-gray-500 max-h-40 overflow-y-auto mb-4">
                <p>Microsoft 软件许可条款</p>
                <p className="mt-2">这些许可条款适用于 Windows 12 操作系统。</p>
                <p className="mt-2">通过使用此软件，您同意这些条款。</p>
              </div>
            </div>
          )}

          {installStep === 2 && (
            <div className="w-full max-w-sm">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                用户名
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入用户名"
              />
            </div>
          )}

          {installStep === 3 && (
            <div className="w-full max-w-md">
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(installProgress, 100)}%` }}
                />
              </div>
              <p className="text-gray-600">
                正在安装 Windows 12... {Math.round(installProgress)}%
              </p>
              <p className="text-gray-500 text-sm mt-2">
                请勿关闭您的电脑
              </p>
            </div>
          )}
        </div>

        {installStep < 3 && (
          <div className="flex justify-end mt-8">
            <button
              onClick={nextStep}
              className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {installStep === 2 ? '安装' : '下一步'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallWizard;
