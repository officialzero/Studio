# Inserview Studio

Inserview Studio 공식 웹사이트 - "Insert my view"의 언어 유희로, 나만의 시선으로 세상을 해석하고 그것을 UX, 기획, 콘텐츠로 풀어내는 스튜디오입니다.

## 프로젝트 소개

이 웹사이트는 방문자들의 의견과 피드백을 받는 포트폴리오 사이트로, Inserview Studio의 철학과 세계관을 보여줍니다.

### 주요 섹션

- **Home**: 스튜디오 소개
- **Services**: Web Development, Mobile Development, UI/UX Design, Utility Tools, Playful Interaction, Visual Experiments
- **About**: 스튜디오의 철학과 세계관
- **Portfolio**: 프로젝트 포트폴리오
- **API**: API 문서
- **Contact**: 피드백 및 문의

## 기술 스택

- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 환경 변수 설정 (선택사항)

EmailJS를 사용하여 컨택트 폼을 활성화하려면 다음 환경 변수를 설정하세요:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECIPIENT_EMAIL=your-email@gmail.com
```

## 라이선스 및 크레딧

### UI 컴포넌트
이 프로젝트는 [shadcn/ui](https://ui.shadcn.com/)의 컴포넌트를 사용하며, [MIT 라이선스](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)에 따라 사용됩니다.

### 이미지
일부 이미지는 [Unsplash](https://unsplash.com)에서 가져왔으며, [Unsplash 라이선스](https://unsplash.com/license)에 따라 사용되었습니다.

## 연락처

더 많은 정보는 [Inserview Studio](https://inserview.studio)를 방문해주세요.



## 📂 프로젝트 구조

```
inserview-studio/
├──📁 .github/             
│           └── 📁 workflows/             
│             └── 📄 deploy.yml
├── 📁 src/
├── 📁 dist/  
│       │ └── 📁 assets/             
│       │      ├── 📄 index-Ba8qNYhd.js
│       │      ├── 📄 index-CTVxPm67.css
│       │      ├── 📄 index-D_80V065.css
│       │      ├── 📄 index-D_B0_HRi.js
│       │      ├── 📄 index-D_bhMzkC.css
│       │      └── 📄 index-hWywju2J.js
│       └── 📄 index.html
│
├── 📁 node_modules
│            └── 📄 여기도 무수히 많은 파일이 있지만 작성 힘들어서 생략 
├── 📁 src/
│   ├── 📁 components/             # React 컴포넌트
│   │           │  ├── 📁 fi/             
│   │           │  │      └── 📄 ImageWithFallback.tsx                
│   │           │  └── 📁 ui/ 
│   │           │       ├── 📄 accordion.tsx            # 아코디언
│   │           │       ├── 📄 alert-dialog.tsx         # 알럿 다이얼로그
│   │           │       ├── 📄 alert.tsx                # 알럿 메시지
│   │           │       ├── 📄 aspect-ratio.tsx         # 비율 유지 컨테이너
│   │           │       ├── 📄 avatar.tsx               # 아바타 이미지
│   │           │       ├── 📄 badge.tsx                # 뱃지
│   │           │       ├── 📄 breadcrumb.tsx           # 브레드크럼
│   │           │       ├── 📄 button.tsx               # 버튼
│   │           │       ├── 📄 calendar.tsx             # 캘린더
│   │           │       ├── 📄 card.tsx                 # 카드
│   │           │       ├── 📄 carousel.tsx             # 캐러셀
│   │           │       ├── 📄 chart.tsx                # 차트
│   │           │       ├── 📄 checkbox.tsx             # 체크박스
│   │           │       ├── 📄 collapsible.tsx          # 접기/펼치기
│   │           │       ├── 📄 command.tsx              # 커맨드 메뉴
│   │           │       ├── 📄 context-menu.tsx         # 컨텍스트 메뉴
│   │           │       ├── 📄 dialog.tsx               # 다이얼로그
│   │           │       ├── 📄 drawer.tsx               # 드로어 (슬라이드 패널)
│   │           │       ├── 📄 dropdown-menu.tsx        # 드롭다운 메뉴
│   │           │       ├── 📄 form.tsx                 # 폼
│   │           │       ├── 📄 hover-card.tsx           # 호버 카드
│   │           │       ├── 📄 input-otp.tsx            # OTP 입력
│   │           │       ├── 📄 input.tsx                # 인풋
│   │           │       ├── 📄 label.tsx                # 레이블
│   │           │       ├── 📄 menubar.tsx              # 메뉴바
│   │           │       ├── 📄 navigation-menu.tsx      # 네비게이션 메뉴
│   │           │       ├── 📄 pagination.tsx           # 페이지네이션
│   │           │       ├── 📄 popover.tsx              # 팝오버
│   │           │       ├── 📄 progress.tsx             # 프로그레스바
│   │           │       ├── 📄 radio-group.tsx          # 라디오 그룹
│   │           │       ├── 📄 resizable.tsx            # 리사이즈 가능 패널
│   │           │       ├── 📄 scroll-area.tsx          # 스크롤 영역
│   │           │       ├── 📄 select.tsx               # 셀렉트
│   │           │       ├── 📄 separator.tsx            # 구분선
│   │           │       ├── 📄 sheet.tsx                # 시트
│   │           │       ├── 📄 sidebar.tsx              # 사이드바
│   │           │       ├── 📄 skeleton.tsx             # 스켈레톤 로더
│   │           │       ├── 📄 slider.tsx               # 슬라이더
│   │           │       ├── 📄 sonner.tsx               # 토스트 알림
│   │           │       ├── 📄 switch.tsx               # 스위치
│   │           │       ├── 📄 table.tsx                # 테이블
│   │           │       ├── 📄 tabs.tsx                 # 탭
│   │           │       ├── 📄 textarea.tsx             # 텍스트영역
│   │           │       ├── 📄 toggle-group.tsx         # 토글 그룹
│   │           │       ├── 📄 toggle.tsx               # 토글
│   │           │       ├── 📄 tooltip.tsx              # 툴팁
│   │           │       ├── 📄 use-mobile.ts            # 모바일 감지 Hook
│   │           │       └── 📄 utils.ts 
│   │           │  
│   │           ├── AboutSection.tsx 
│   │           ├── APISection.tsx                 
│   │           ├── ContactSection.tsx
│   │           ├── Footer.tsx
│   │           ├── HeroSection.tsx
│   │           ├── Navigation.tsx
│   │           ├── PortfolioSection.tsx
│   │           ├── PrivacyPolicy.tsx
│   │           ├── ServicesSection.tsx
│   │           └── TermsOfService.tsx
│   ├── App.tsx 
│   └── main.tsx                  # 메인 앱 컴포넌트
├── styles/
│   └── globals.css  
├── .env
├── .gitignore
├── .nojekyll
├── Attributions.md
├── components.json
├── index.html
├── package-lok.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.js


