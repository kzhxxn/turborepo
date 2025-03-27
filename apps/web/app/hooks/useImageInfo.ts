import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useImageInfo = () => {
  const router = useRouter();

  const query = useQuery({
    queryKey: ['image-info'],
    queryFn: async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_IMAGE_INFO_API!);
      return res.json();
    },
    enabled: false,
  });

  const handleImageSearch = async () => {
    const { data } = await query.refetch();

    if (!data) return;

    router.push(`/result?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  return {
    ...query,
    handleImageSearch,
  };
};
