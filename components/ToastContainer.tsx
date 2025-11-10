
import React from 'react';
import Toast from './Toast';
import { ToastMessage } from '../App';

interface ToastContainerProps {
  toasts: ToastMessage[];
  removeToast: (id: number) => void;
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-50 space-y-2">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-enter">
          <Toast toast={toast} removeToast={removeToast} />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
