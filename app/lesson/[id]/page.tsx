'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ActivityShell from '@/components/Lesson/ActivityShell';
import Flashcard from '@/components/Lesson/Flashcard';
import Quiz from '@/components/Lesson/Quiz';
import ToneTracer from '@/components/Lesson/ToneTracer';
import SentenceBuilder from '@/components/Lesson/SentenceBuilder';
import { useUserProgress } from '@/context/UserProgressContext';
import lessonsData from '@/data/lessons.json';
import styles from './page.module.css';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const { completeLesson, addDragonEggs } = useUserProgress();

  const lessonId = params.id as string;
  const lesson = lessonsData.lessons.find((l) => l.id === lessonId);

  const [currentStep, setCurrentStep] = useState(0);
  const [canProceed, setCanProceed] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    if (!lesson) {
      router.push('/');
    }
  }, [lesson, router]);

  // For flashcards and tone-tracer, allow proceeding immediately
  useEffect(() => {
    if (lesson && lesson.activities[currentStep]) {
      const currentActivity = lesson.activities[currentStep];
      if (currentActivity.type === 'flashcard' || currentActivity.type === 'tone-tracer') {
        setCanProceed(true);
      }
    }
  }, [lesson, currentStep]);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  const currentActivity = lesson.activities[currentStep];
  const totalSteps = lesson.activities.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setCanProceed(false);
    } else {
      handleLessonComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setCanProceed(false);
    }
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
      addDragonEggs(10);
    }
    setCanProceed(true);
  };

  const handleLessonComplete = () => {
    const accuracy = correctAnswers / totalSteps;
    let stars = 1;
    if (accuracy >= 0.9) stars = 3;
    else if (accuracy >= 0.7) stars = 2;

    const eggsEarned = stars * 20;
    completeLesson(lessonId, stars);
    addDragonEggs(eggsEarned);

    setShowCompletion(true);
  };

  const handleContinueToMap = () => {
    router.push('/');
  };

  if (showCompletion) {
    const accuracy = correctAnswers / totalSteps;
    let stars = 1;
    if (accuracy >= 0.9) stars = 3;
    else if (accuracy >= 0.7) stars = 2;

    return (
      <div className={styles.completionScreen}>
        <div className={styles.completionCard}>
          <div className={styles.completionIcon}>🎉</div>
          <h1 className={styles.completionTitle}>Lesson Complete!</h1>
          <div className={styles.completionStats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>{correctAnswers}/{totalSteps}</div>
              <div className={styles.statLabel}>Correct</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>{'⭐'.repeat(stars)}</div>
              <div className={styles.statLabel}>Stars Earned</div>
            </div>
          </div>
          <button className={styles.continueButton} onClick={handleContinueToMap}>
            Continue to Map
          </button>
        </div>
      </div>
    );
  }

  const renderActivity = () => {
    switch (currentActivity.type) {
      case 'flashcard':
        const flashcardData = currentActivity as any;
        return (
          <Flashcard
            character={flashcardData.content.character}
            pinyin={flashcardData.content.pinyin}
            meaning={flashcardData.content.meaning}
            tone={flashcardData.content.tone}
            audio={flashcardData.content.audio}
          />
        );

      case 'quiz':
        const quizData = currentActivity as any;
        return (
          <Quiz
            question={quizData.question}
            options={quizData.options}
            onAnswer={handleAnswer}
          />
        );

      case 'tone-tracer':
        const toneData = currentActivity as any;
        return (
          <ToneTracer
            character={toneData.character}
            pinyin={toneData.pinyin}
            meaning={toneData.meaning}
            tone={toneData.tone}
            audio={toneData.audio}
          />
        );

      case 'sentence-builder':
        const sentenceData = currentActivity as any;
        return (
          <SentenceBuilder
            prompt={sentenceData.prompt}
            correctOrder={sentenceData.correctOrder}
            words={sentenceData.words}
            onAnswer={handleAnswer}
          />
        );

      default:
        return <div>Unknown activity type</div>;
    }
  };

  return (
    <ActivityShell
      currentStep={currentStep + 1}
      totalSteps={totalSteps}
      onNext={handleNext}
      onBack={handleBack}
      nextDisabled={!canProceed}
      nextLabel={currentStep === totalSteps - 1 ? 'Finish' : 'Continue'}
    >
      {renderActivity()}
    </ActivityShell>
  );
}
