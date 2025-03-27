export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { ResultContent } from './result-content';

export default function ResultPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ResultContent />
    </Suspense>
  );
}
