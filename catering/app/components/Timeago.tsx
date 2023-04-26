'use client'

import { useEffect, useState } from 'react';

type TimeagoProps = {
  date: string;
};

const Timeago: React.FC<TimeagoProps> = ({ date }) => {
  const [timeago, setTimeago] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const then = new Date(date);
      const seconds = Math.round((now.getTime() - then.getTime()) / 1000);

      if (seconds < 60) {
        setTimeago(`${seconds} second${seconds !== 1 ? 's' : ''} ago`);
      } else if (seconds < 60 * 60) {
        const minutes = Math.floor(seconds / 60);
        setTimeago(`${minutes} minute${minutes !== 1 ? 's' : ''} ago`);
      } else if (seconds < 60 * 60 * 24) {
        const hours = Math.floor(seconds / (60 * 60));
        setTimeago(`${hours} hour${hours !== 1 ? 's' : ''} ago`);
      } else {
        const days = Math.floor(seconds / (60 * 60 * 24));
        setTimeago(`${days} day${days !== 1 ? 's' : ''} ago`);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [date]);

  return <span>{timeago}</span>;
};

export default Timeago;