'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LessonProgress {
  lessonId: string;
  completed: boolean;
  stars: number; // 0-3
  attempts: number;
}

interface UserProgress {
  totalStars: number;
  dragonEggs: number;
  lessonsCompleted: LessonProgress[];
  currentLesson: string | null;
}

interface UserProgressContextType {
  progress: UserProgress;
  completeLesson: (lessonId: string, stars: number) => void;
  addDragonEggs: (amount: number) => void;
  isLessonUnlocked: (requiredStars: number) => boolean;
  getLessonProgress: (lessonId: string) => LessonProgress | undefined;
  setCurrentLesson: (lessonId: string | null) => void;
}

const defaultProgress: UserProgress = {
  totalStars: 0,
  dragonEggs: 0,
  lessonsCompleted: [],
  currentLesson: null,
};

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export function UserProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('dragonEggsProgress');
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dragonEggsProgress', JSON.stringify(progress));
  }, [progress]);

  const completeLesson = (lessonId: string, stars: number) => {
    setProgress((prev) => {
      const existingLesson = prev.lessonsCompleted.find((l) => l.lessonId === lessonId);

      if (existingLesson) {
        // Update existing lesson if new stars are higher
        const starDifference = Math.max(0, stars - existingLesson.stars);
        return {
          ...prev,
          totalStars: prev.totalStars + starDifference,
          lessonsCompleted: prev.lessonsCompleted.map((l) =>
            l.lessonId === lessonId
              ? { ...l, stars: Math.max(l.stars, stars), attempts: l.attempts + 1 }
              : l
          ),
        };
      } else {
        // New lesson completion
        return {
          ...prev,
          totalStars: prev.totalStars + stars,
          lessonsCompleted: [
            ...prev.lessonsCompleted,
            { lessonId, completed: true, stars, attempts: 1 },
          ],
        };
      }
    });
  };

  const addDragonEggs = (amount: number) => {
    setProgress((prev) => ({
      ...prev,
      dragonEggs: prev.dragonEggs + amount,
    }));
  };

  const isLessonUnlocked = (requiredStars: number): boolean => {
    return progress.totalStars >= requiredStars;
  };

  const getLessonProgress = (lessonId: string): LessonProgress | undefined => {
    return progress.lessonsCompleted.find((l) => l.lessonId === lessonId);
  };

  const setCurrentLesson = (lessonId: string | null) => {
    setProgress((prev) => ({
      ...prev,
      currentLesson: lessonId,
    }));
  };

  return (
    <UserProgressContext.Provider
      value={{
        progress,
        completeLesson,
        addDragonEggs,
        isLessonUnlocked,
        getLessonProgress,
        setCurrentLesson,
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (context === undefined) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
}
