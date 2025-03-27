'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui/Button';
import { Header } from '@repo/ui/Header';

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 font-pretendard">
      <Header name="강지훈" color="text-gray-800" />
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-[28px] leading-[140%] tracking-[-0.02em] font-semibold mb-4">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="text-gray-500 text-base mb-6">
          2초 후 메인 페이지로 이동합니다.
        </p>
        <Button
          onClick={() => router.push('/')}
          className="h-12 rounded-[12px] px-4 bg-black text-white hover:bg-neutral-800 w-full max-w-xs text-[16px] leading-[148%] tracking-[-0.02em] font-semibold"
        >
          홈으로 이동
        </Button>
      </div>
    </main>
  );
}