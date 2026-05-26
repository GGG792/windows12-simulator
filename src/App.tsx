import { useWindowsStore } from '@/store/useWindowsStore';
import InstallWizard from '@/components/InstallWizard';
import BootScreen from '@/components/BootScreen';
import LoginScreen from '@/components/LoginScreen';
import Desktop from '@/components/Desktop';

export default function App() {
  const { phase } = useWindowsStore();

  return (
    <div className="w-screen h-screen overflow-hidden">
      {phase === 'install' && <InstallWizard />}
      {phase === 'boot' && <BootScreen />}
      {phase === 'login' && <LoginScreen />}
      {phase === 'desktop' && <Desktop />}
    </div>
  );
}
