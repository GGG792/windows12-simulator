import { create } from 'zustand';

export type AppPhase = 'install' | 'boot' | 'login' | 'desktop';

export interface WindowState {
  id: string;
  title: string;
  app: string;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface WindowsState {
  phase: AppPhase;
  installStep: number;
  username: string;
  password: string;
  windows: WindowState[];
  nextZIndex: number;
  startMenuOpen: boolean;
  setPhase: (phase: AppPhase) => void;
  setInstallStep: (step: number) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  openWindow: (app: string, title: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  toggleStartMenu: () => void;
  reset: () => void;
}

export const useWindowsStore = create<WindowsState>((set, get) => ({
  phase: 'install',
  installStep: 0,
  username: 'User',
  password: '',
  windows: [],
  nextZIndex: 100,
  startMenuOpen: false,

  setPhase: (phase) => set({ phase }),
  setInstallStep: (step) => set({ installStep: step }),
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),

  openWindow: (app, title) => {
    const { windows, nextZIndex } = get();
    const existingWindow = windows.find(w => w.app === app);
    
    if (existingWindow) {
      set({
        windows: windows.map(w => 
          w.id === existingWindow.id 
            ? { ...w, minimized: false, zIndex: nextZIndex }
            : w
        ),
        nextZIndex: nextZIndex + 1
      });
    } else {
      const newWindow: WindowState = {
        id: `window-${Date.now()}`,
        title,
        app,
        minimized: false,
        maximized: false,
        zIndex: nextZIndex,
        x: 100 + Math.random() * 100,
        y: 50 + Math.random() * 50,
        width: 800,
        height: 500,
      };
      
      set({
        windows: [...windows, newWindow],
        nextZIndex: nextZIndex + 1
      });
    }
  },

  closeWindow: (id) => set({
    windows: get().windows.filter(w => w.id !== id)
  }),

  minimizeWindow: (id) => set({
    windows: get().windows.map(w =>
      w.id === id ? { ...w, minimized: true } : w
    )
  }),

  maximizeWindow: (id) => set({
    windows: get().windows.map(w =>
      w.id === id ? { ...w, maximized: !w.maximized } : w
    )
  }),

  focusWindow: (id) => {
    const { windows, nextZIndex } = get();
    set({
      windows: windows.map(w =>
        w.id === id ? { ...w, minimized: false, zIndex: nextZIndex } : w
      ),
      nextZIndex: nextZIndex + 1
    });
  },

  moveWindow: (id, x, y) => set({
    windows: get().windows.map(w =>
      w.id === id ? { ...w, x, y } : w
    )
  }),

  toggleStartMenu: () => set({ startMenuOpen: !get().startMenuOpen }),

  reset: () => set({
    phase: 'install',
    installStep: 0,
    windows: [],
    startMenuOpen: false
  })
}));
