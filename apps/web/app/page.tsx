'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@repo/ui/Button';
import { Header } from '@repo/ui/Header';

const applicantName = '강지훈';

export default function Page() {
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch('https://picsum.photos/id/0/info');
    const data = await res.json();
    router.push(`/result?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  return (
    <main className='flex flex-col min-h-screen bg-white font-pretendard'>
      {/* 헤더 섹션 (고정 높이 52px) */}
      <Header name={applicantName} color='text-gray-800' />

      {/* 가운데 섹션 (유동 영역) */}
      <section className='flex-1 flex items-center justify-center'>
        <h1 className='text-[28px] leading-[140%] tracking-[-0.02em] font-semibold text-center'>
          안녕하세요
          <br />
          {applicantName}입니다.
        </h1>
      </section>

      {/* 버튼 섹션 (고정 높이 128px) */}
      <section className='h-[128px] flex items-center justify-center px-4'>
        <Button
          onClick={handleSubmit}
          className='h-12 rounded-[12px] px-4 bg-black text-white hover:bg-neutral-800 w-full max-w-md text-[16px] leading-[148%] tracking-[-0.02em] font-semibold'
        >
          다음
        </Button>
      </section>
    </main>
  );
}
