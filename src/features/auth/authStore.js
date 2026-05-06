import { pre } from 'framer-motion/client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      currentUser: null,
  isLoggedIn: false,

  // Actions
  login: (user) => set({ currentUser: user, isLoggedIn: true }),
  logout: () => set({ currentUser: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
export default useAuthStore;
