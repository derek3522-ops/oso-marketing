'use client';

import { useEffect } from 'react';

export default function ATMs() {
  useEffect(() => {
    window.location.href = 'https://shop.osoatm.com/atms';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-oso-dark">
      <p className="text-gray-400">Redirecting to shop...</p>
    </div>
  );
}
