import { create } from "zustand";

export const useAuth = create((set) => ({
  user: null,
  isAuthenticated: false,

  login: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
    }),

  logout: async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (error) {
      console.error("Logout error:", error);
    }
    set({ user: null, isAuthenticated: false });
  },

  checkAuth: async () => {
    try {
      const response = await fetch("/api/auth/profile");
      // const test = await response.json();
      // console.log("🚀 ~ checkAuth: ~ test:", test);
      if (response.ok) {
        const userData = await response.json();
        set({ user: userData, isAuthenticated: true });
      } else {
        set({ user: null, isAuthenticated: false });
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      set({ user: null, isAuthenticated: false });
    }
  },
}));
