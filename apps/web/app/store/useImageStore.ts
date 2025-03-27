'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ImageInfo = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

interface ImageStore {
  image: ImageInfo | null;
  setImage: (image: ImageInfo) => void;
}

export const useImageStore = create<ImageStore>()(
  persist(
    (set) => ({
      image: null,
      setImage: (image) => set({ image }),
    }),
    {
      name: 'image-store', // 로컬스토리지 키 이름
    }
  )
);
