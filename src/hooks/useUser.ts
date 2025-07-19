import { create } from 'zustand';
import { User, DailyTask } from '@/types';

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  todaysTasks: DailyTask[];
  
  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  updateUser: (data: Partial<User>) => void;
  setTodaysTasks: (tasks: DailyTask[]) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  user: null,
  isLoading: false,
  error: null,
  todaysTasks: [],
  
  setUser: (user) => set({ user, error: null }),
  
  setLoading: (isLoading) => set({ isLoading }),
  
  setError: (error) => set({ error, isLoading: false }),
  
  updateUser: (data) => set((state) => ({
    user: state.user ? { ...state.user, ...data } : null
  })),
  
  setTodaysTasks: (todaysTasks) => set({ todaysTasks }),
  
  clearUser: () => set({ 
    user: null, 
    error: null, 
    todaysTasks: [] 
  }),
}));
