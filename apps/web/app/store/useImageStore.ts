'use client';

import { create } from 'zustand';

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

export const useImageStore = create<ImageStore>((set) => ({
  image: null,
  setImage: (image) => set({ image }),
}));
