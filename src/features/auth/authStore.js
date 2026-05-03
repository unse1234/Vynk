import { create } from 'zustand';

const useAuthStore = create((set) => ({
  // State
  currentUser: null,
  isLoggedIn: false,

  // Actions
  login: (user) => set({ currentUser: user, isLoggedIn: true }),
  logout: () => set({ currentUser: null, isLoggedIn: false }),
}));

export default useAuthStore;
