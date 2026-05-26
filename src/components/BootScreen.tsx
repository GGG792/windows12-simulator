import { useState, useEffect } from 'react';
import { useWindowsStore } from '@/store/useWindowsStore';

const BootScreen = () => {
  const { setPhase } = useWindowsStore();
  const [dots, setDots] = useState('');

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    const timer = setTimeout(() => {
      setPhase('login');
    }, 3500);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timer);
    };
  }, [setPhase]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <div className="animate-pulse">
        <div className="w-32 h-32 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/50">
          <span className="text-white text-5xl font-bold">12</span>
        </div>
      </div>

      <div className="text-white text-lg font-light tracking-wide">
        Windows 12{dots}
      </div>

      <div className="mt-12">
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-[loading_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(0); }
          50% { width: 60%; transform: translateX(0); }
          100% { width: 0%; transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default BootScreen;
