
import React, { useEffect } from 'react';
import { ToastMessage } from '../App';

interface ToastProps {
  toast: ToastMessage;
  removeToast: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ toast, removeToast }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [toast.id, removeToast]);

  return (
    <div
      className="bg-[var(--c-content)] text-[var(--c-bg)] px-6 py-3 rounded-full shadow-lg text-center"
    >
      {toast.message}
    </div>
  );
};

export default Toast;
