import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 1800);
      return () => clearTimeout(timer);
    }
  }, [visible, message]);

  return (
    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-3 rounded-xl text-sm font-medium z-[60] transition-opacity duration-300 pointer-events-none ${
      show ? 'opacity-100' : 'opacity-0'
    }`}>
      {message}
    </div>
  );
}
