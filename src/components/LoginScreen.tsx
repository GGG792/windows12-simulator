import { useState } from 'react';
import { useWindowsStore } from '../store/useWindowsStore';
import { Power, User } from 'lucide-react';

const LoginScreen = () => {
  const { setPhase, username, setPassword, password } = useWindowsStore();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setPhase('desktop');
  };

  return (
    <div 
      className="fixed inset-0 bg-cover bg-center flex items-center justify-center"
      style={{ 
        backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&h=1080&fit=crop)'
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center">
        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto border border-white/30">
          <User className="w-20 h-20 text-white" />
        </div>

        <h2 className="text-white text-2xl font-medium mb-8">{username}</h2>

        <form onSubmit={handleLogin} className="max-w-sm mx-auto">
          <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PIN 或密码"
              className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white hover:bg-white/30 transition-colors"
          >
            登录
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center space-x-4">
          <button className="p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-colors">
            <Power className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6 text-white/80 text-sm">
        <button className="hover:text-white transition-colors">辅助功能</button>
        <button className="hover:text-white transition-colors">网络</button>
        <button className="hover:text-white transition-colors">电源</button>
      </div>
    </div>
  );
};

export default LoginScreen;
