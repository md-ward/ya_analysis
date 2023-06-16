import {create} from 'zustand';

const themeStore = create((set) => {
  const storedTheme = localStorage.getItem('theme');
  return {
    theme: storedTheme || 'light',
    toggleTheme: () => set(state => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    })
  };
});

export default themeStore;