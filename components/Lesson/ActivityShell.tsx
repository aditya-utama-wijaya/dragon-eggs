'use client';

import React from 'react';
import ProgressBar from '@/components/UI/ProgressBar';
import Button from '@/components/UI/Button';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './ActivityShell.module.css';

interface ActivityShellProps {
  children: React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onBack?: () => void;
  showNext?: boolean;
  nextDisabled?: boolean;
  nextLabel?: string;
}

export default function ActivityShell({
  children,
  currentStep,
  totalSteps,
  onNext,
  onBack,
  showNext = true,
  nextDisabled = false,
  nextLabel = 'Continue',
}: ActivityShellProps) {
  const router = useRouter();

  return (
    <div className={styles.shell}>
      <div className={styles.header}>
        <button className={styles.closeButton} onClick={() => router.push('/')}>
          <X size={24} />
        </button>
        <div className={styles.progressContainer}>
          <ProgressBar current={currentStep} total={totalSteps} height={12} />
        </div>
      </div>

      <div className={styles.content}>{children}</div>

      <div className={styles.footer}>
        {onBack && currentStep > 1 && (
          <Button variant="secondary" onClick={onBack}>
            Back
          </Button>
        )}
        <div style={{ flex: 1 }} />
        {showNext && onNext && (
          <Button onClick={onNext} disabled={nextDisabled} size="large">
            {nextLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
