# 🧩 프로젝트 소개

Next.js 기반의 Turborepo 구조를 활용한 과제형 UI 구현입니다.  
사진 조회 → 결과 페이지로의 라우팅, 공통 컴포넌트 분리, Storybook 구성 등을 포함합니다.

---

## 📁 프로젝트 구조

```bash
turborepo/
├── apps/
│   ├── web/              # Next.js App Router 기반 메인 웹
│   └── storybook/        # Storybook (Vite 기반)
├── packages/
│   ├── ui/               # 공통 컴포넌트(Button, Header 등)
│   ├── tailwind-config/  # 공통 Tailwind 설정
│   └── eslint-config/    # 공통 ESLint 설정
└── turbo.json            # 터보레포 구성
```

---

## ✅ 기본 구현 사항

- [x] Turborepo 셋업 (pnpm 기반)
- [x] `apps/web`와 `apps/storybook` 워크스페이스 생성
- [x] `packages/ui`에 Button 컴포넌트 구현
- [x] `packages/ui`의 Button을 Storybook에 상태별로 구현 (Default / Hover / Pressed)
- [x] 해당 Button을 `web`에서 import하여 사용
- [x] TailwindCSS 적용 (공통 설정 + 개별 적용)
- [x] Pretendard 로컬 폰트 적용
- [x] Figma 기반 메인 페이지 (`/`) 구현
- [x] API 호출 후 결과 페이지(`/result`) 구현
- [x] Vercel을 통한 배포
- [x] GitHub 퍼블릭 저장소 업로드

---

## 🧪 추가 구현 요소 (선택 사항 / 리팩토링 대상)

- [x] 상태 관리: tanstack-query, zustand 적용
- [ ] debounce/throttle 적용
- [ ] 로딩 애니메이션 (lottie or CSS)
- [ ] 조회 이력 캐싱 및 `/result` 자동 리다이렉트
- [ ] skeleton UI
- [ ] 직접 조회 없이 접근 시 1초 뒤 홈 리다이렉트
- [x] `/result` 배경 이미지 반영
- [x] 404 페이지
- [x] README 업데이트
- [ ] ESLint/Prettier 세부 규칙 확립
- [ ] 테스트 환경 구성 (vitest / playwright 등)

---

## 🚀 배포 주소 및 저장소

- **Vercel**: https://{your-vercel-url}.vercel.app
- **GitHub**: https://github.com/{your-username}/{repo-name}
