'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useImageStore } from '../store/useImageStore';
import { Button } from '@repo/ui/Button';
import { Header } from '@repo/ui/Header';

function CardBox({
  children,
  flex = false,
}: {
  children: React.ReactNode;
  flex?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-[20px] px-6 py-4 ${flex ? 'md:flex justify-between gap-4' : ''}`}
    >
      {children}
    </div>
  );
}

type InfoBoxProps = {
  label: string;
  value: string | number;
  isLink?: boolean;
};

function InfoBox({ label, value, isLink }: InfoBoxProps) {
  const content = isLink ? (
    <a
      href={String(value)}
      target='_blank'
      rel='noopener noreferrer'
      className='text-gray-400 underline block truncate'
    >
      {value}
    </a>
  ) : (
    <div className='text-gray-400 text-base font-normal'>{value}</div>
  );

  return (
    <div className='flex-1'>
      <div className='text-base font-semibold mb-1'>{label}</div>
      {content}
    </div>
  );
}

export function ResultContent() {
  const router = useRouter();
  const image = useImageStore((state) => state.image);

  useEffect(() => {
    if (!image) {
      const timeout = setTimeout(() => {
        router.push('/');
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [image, router]);

  if (!image) return null;

  return (
    <main
      className='flex flex-col min-h-screen font-pretendard bg-black/30 bg-blend-overlay'
      style={{
        backgroundImage: `
        linear-gradient(to bottom, #797979, #ffffff),
        url('/masklayer.jpg')
      `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />

      <section className='flex-1 flex flex-col 2xl:flex-row items-center justify-center gap-6 p-4'>
        <img
          src={image.download_url}
          alt={image.author}
          className='w-full md:w-[768px] rounded-[20px]'
        />
        <div className='flex flex-col md:w-[768px] h-[504px] md:h-[388px] gap-4 text-black text-left w-full'>
          <CardBox flex>
            <InfoBox label='id' value={image.id} />
            <InfoBox label='author' value={image.author} />
          </CardBox>
          <CardBox flex>
            <InfoBox label='width' value={image.width.toLocaleString()} />
            <InfoBox label='height' value={image.height.toLocaleString()} />
          </CardBox>
          <CardBox>
            <InfoBox label='url' value={image.url} isLink />
            <InfoBox label='download_url' value={image.download_url} isLink />
          </CardBox>

          <div className='w-full flex justify-center '>
            <Button
              className='h-12 rounded-[12px] px-4 bg-black text-white w-full max-w-md text-[16px] leading-[148%] tracking-[-0.02em] font-semibold'
              onClick={() => router.push('/')}
            >
              이전
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
