import { create } from 'zustand';
import { OnboardingData, WellnessGoal, TimeWindow } from '@/types';

interface OnboardingState {
  currentStep: number;
  data: OnboardingData;
  isComplete: boolean;
  
  // Actions
  setStep: (step: number) => void;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
}

const initialData: OnboardingData = {
  step: 0,
};

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
  currentStep: 0,
  data: initialData,
  isComplete: false,
  
  setStep: (step) => set({ currentStep: step }),
  
  updateData: (newData) => set((state) => ({
    data: { ...state.data, ...newData }
  })),
  
  nextStep: () => set((state) => ({
    currentStep: Math.min(state.currentStep + 1, 5)
  })),
  
  prevStep: () => set((state) => ({
    currentStep: Math.max(state.currentStep - 1, 0)
  })),
  
  completeOnboarding: () => set({
    isComplete: true,
    currentStep: 5
  }),
  
  resetOnboarding: () => set({
    currentStep: 0,
    data: initialData,
    isComplete: false
  }),
}));
