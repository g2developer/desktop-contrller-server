# 데스크탑 컨트롤러 서버 프로그램 구조 및 기능 목록

## 프로젝트 구조

```
desktop-contrller-server/
├── .env.example              # 환경 변수 예시 파일
├── .gitignore                # Git 무시 파일 목록
├── README.md                 # 프로젝트 설명 문서
├── package.json              # 프로젝트 의존성 및 스크립트 정의
├── scripts/                  # 스크립트 파일 디렉토리
│   ├── example_prd.txt       # PRD 예시 파일
│   └── prd.txt               # 제품 요구사항 문서
├── public/                   # 정적 파일 디렉토리
│   ├── index.html            # HTML 템플릿
│   ├── favicon.ico           # 파비콘
│   └── images/               # 정적 이미지 파일 디렉토리
├── src/                      # 소스 코드 디렉토리
│   ├── assets/               # 애셋 파일 디렉토리
│   │   ├── css/              # CSS 파일 디렉토리
│   │   └── images/           # 이미지 파일 디렉토리
│   ├── components/           # React 컴포넌트 디렉토리
│   │   ├── dashboard/        # 대시보드 관련 컴포넌트
│   │   │   ├── ActivityLog.css
│   │   │   ├── ActivityLog.js    # 활동 로그 컴포넌트
│   │   │   ├── ClientList.css
│   │   │   ├── ClientList.js     # 클라이언트 목록 컴포넌트
│   │   │   ├── CommandStats.css
│   │   │   ├── CommandStats.js   # 명령 통계 컴포넌트
│   │   │   ├── ConnectionInfo.css
│   │   │   ├── ConnectionInfo.js # 연결 정보 컴포넌트
│   │   │   ├── ServerStatus.css
│   │   │   ├── ServerStatus.js   # 서버 상태 컴포넌트
│   │   │   ├── StatusCard.css
│   │   │   └── StatusCard.js     # 상태 카드 컴포넌트
│   │   ├── layout/           # 레이아웃 관련 컴포넌트
│   │   │   ├── AppLayout.css
│   │   │   ├── AppLayout.js      # 앱 레이아웃 컴포넌트
│   │   │   ├── Header.css
│   │   │   ├── Header.js         # 헤더 컴포넌트
│   │   │   ├── Sidebar.css
│   │   │   └── Sidebar.js        # 사이드바 컴포넌트
│   │   ├── settings/         # 설정 관련 컴포넌트
│   │   │   ├── CaptureSettings.js    # 캡처 설정 컴포넌트
│   │   │   ├── ClaudeSettings.js     # 클로드 앱 설정 컴포넌트
│   │   │   ├── ServerSettings.js     # 서버 설정 컴포넌트
│   │   │   ├── SettingsPanel.css     # 설정 패널 공통 스타일
│   │   │   ├── SettingsTabs.css
│   │   │   └── SettingsTabs.js       # 설정 탭 컴포넌트
│   │   ├── ui/               # UI 공통 컴포넌트
│   │   │   ├── Badge.css
│   │   │   ├── Badge.js          # 배지 컴포넌트
│   │   │   ├── Button.css
│   │   │   ├── Button.js         # 버튼 컴포넌트
│   │   │   ├── Card.css
│   │   │   ├── Card.js           # 카드 컴포넌트
│   │   │   ├── DropdownMenu.css
│   │   │   ├── DropdownMenu.js    # 드롭다운 메뉴 컴포넌트
│   │   │   ├── Modal.css
│   │   │   ├── Modal.js          # 모달 컴포넌트
│   │   │   ├── Notification.css
│   │   │   ├── Notification.js   # 알림 컴포넌트
│   │   │   ├── Spinner.css
│   │   │   ├── Spinner.js        # 로딩 스피너 컴포넌트
│   │   │   ├── Switch.css
│   │   │   ├── Switch.js         # 토글 스위치 컴포넌트
│   │   │   ├── Tabs.css
│   │   │   └── Tabs.js           # 탭 컨테이너 컴포넌트
│   │   ├── users/            # 사용자 관리 관련 컴포넌트
│   │   │   ├── UserForm.css
│   │   │   ├── UserForm.js       # 사용자 폼 컴포넌트
│   │   │   ├── UserTable.css
│   │   │   └── UserTable.js      # 사용자 테이블 컴포넌트
│   │   ├── capture/          # 화면 캡처 관련 컴포넌트
│   │   │   ├── CaptureArea.css
│   │   │   ├── CaptureArea.js    # 캡처 영역 선택 컴포넌트
│   │   │   ├── ImagePreview.css
│   │   │   └── ImagePreview.js   # 이미지 미리보기 컴포넌트
│   │   └── automation/       # 자동화 관련 컴포넌트
│   │       ├── CommandPresets.css
│   │       ├── CommandPresets.js  # 명령 프리셋 컴포넌트
│   │       ├── AutoResponder.css
│   │       └── AutoResponder.js   # 자동 응답 설정 컴포넌트
│   ├── contexts/             # React 컨텍스트 디렉토리
│   │   ├── AuthContext.js       # 인증 컨텍스트
│   │   ├── SocketContext.js     # 소켓 통신 컨텍스트
│   │   ├── ThemeContext.js      # 테마 컨텍스트
│   │   └── NotificationContext.js # 알림 컨텍스트
│   ├── design/               # 디자인 시스템 문서 디렉토리
│   │   ├── design_requirements.md       # 디자인 요구사항 및 컨셉 문서
│   │   ├── color_typography.md          # 색상 시스템 및 타이포그래피 가이드
│   │   ├── icons_graphics.md            # 아이콘 및 그래픽 요소 디자인 가이드
│   │   ├── component_system.md          # 컴포넌트 디자인 시스템 문서
│   │   ├── screen_mockups.md            # 주요 화면 목업 및 프로토타입 설계 문서
│   │   └── responsive_guidelines.md     # 반응형 디자인 가이드라인 문서
│   ├── hooks/                # 커스텀 React 훅 디렉토리
│   │   ├── useSocket.js         # 소켓 통신 훅
│   │   ├── useAuth.js           # 인증 관련 훅
│   │   ├── useLocalStorage.js   # 로컬 스토리지 접근 훅
│   │   └── useDebounce.js       # 디바운스 함수 훅
│   ├── pages/                # 페이지 컴포넌트 디렉토리
│   │   ├── Dashboard.css
│   │   ├── Dashboard.js         # 대시보드 페이지
│   │   ├── Settings.css
│   │   ├── Settings.js          # 설정 페이지
│   │   ├── UserManagement.css
│   │   ├── UserManagement.js    # 사용자 관리 페이지
│   │   ├── CaptureSettings.css
│   │   └── CaptureSettings.js   # 캡처 설정 페이지
│   ├── services/             # 서비스 디렉토리
│   │   ├── api.js               # API 요청 서비스
│   │   ├── auth.js              # 인증 서비스
│   │   ├── socket.js            # 소켓 통신 서비스
│   │   ├── captureService.js    # 화면 캡처 서비스
│   │   ├── automationService.js # 자동화 서비스
│   │   ├── userService.js       # 사용자 관리 서비스
│   │   └── logService.js        # 로깅 서비스
│   ├── utils/                # 유틸리티 함수 디렉토리
│   │   ├── format.js            # 데이터 포맷팅 유틸리티
│   │   ├── validation.js        # 유효성 검사 유틸리티
│   │   ├── imageProcessing.js   # 이미지 처리 유틸리티
│   │   ├── storage.js           # 스토리지 유틸리티
│   │   └── keyboard.js          # 키보드 이벤트 유틸리티
│   ├── styles/               # 글로벌 스타일 디렉토리
│   │   ├── global.css           # 글로벌 스타일
│   │   ├── theme.css            # 테마 스타일
│   │   ├── animations.css       # 애니메이션 스타일
│   │   └── variables.css        # CSS 변수 및 테마 설정
│   ├── App.js                # 앱 루트 컴포넌트
│   ├── index.js              # 앱 진입점
│   └── PROGRAM_LIST.md       # 프로그램 구조 및 파일 목록 문서
├── config/                   # 설정 파일 디렉토리
│   ├── default.js            # 기본 설정
│   └── production.js         # 배포 환경 설정
├── server/                   # 서버 코드 디렉토리
│   ├── index.js              # 서버 진입점
│   ├── routes/               # API 라우트 디렉토리
│   ├── controllers/          # 컨트롤러 디렉토리
│   ├── middleware/           # 미들웨어 디렉토리
│   └── services/             # 서버 측 서비스 디렉토리
└── tasks/                    # Task Master 작업 디렉토리
    ├── tasks.json            # 작업 목록 파일
    └── task_*.txt            # 개별 작업 상세 파일
```

## 디자인 시스템 문서

### 1. 디자인 요구사항 및 컨셉 문서 (design_requirements.md)
- 프로젝트 목표 및 요구사항 분석
- 사용자 분석 및 요구사항
- 디자인 트렌드 및 참조 스타일 분석
- "Mission Control" 컨셉 정의
- 디자인 방향성 수립

### 2. 색상 시스템 및 타이포그래피 가이드 (color_typography.md)
- 색상 시스템 정의
  - 주요 색상 및 상태 색상 정의
  - 중립 색상 및 배경색 정의
  - 컴포넌트별 색상 적용 가이드
- 타이포그래피 시스템 정의
  - 글꼴 패밀리 및 스타일 정의
  - 텍스트 크기 및 행간 체계
  - 텍스트 색상 및 변형 정의
  - 반응형 타이포그래피 가이드

### 3. 아이콘 및 그래픽 요소 디자인 가이드 (icons_graphics.md)
- 아이콘 시스템 정의
  - 아이콘 디자인 원칙 및 스타일 가이드
  - 크기 체계 및 핵심 아이콘 세트
  - 상태 변화 및 SVG 구현 가이드
- 그래픽 요소 디자인
  - 일러스트레이션 스타일 및 사용 맥락
  - 데이터 시각화 요소 디자인
  - 애니메이션 및 전환 효과 정의
  - 배경 및 음영 처리 가이드

### 4. 컴포넌트 디자인 시스템 (component_system.md)
- 핵심 UI 컴포넌트 정의
  - 버튼, 입력 필드, 카드, 모달, 내비게이션 등
  - 각 컴포넌트별 변형, 상태, 사용 사례 정의
  - HTML/CSS 구현 예시
- 레이아웃 시스템 및 그리드 정의
- 패턴 및 가이드라인 제공
- 구현 가이드 및 유지 관리 전략

### 5. 주요 화면 목업 및 프로토타입 설계 (screen_mockups.md)
- 글로벌 레이아웃 정의
- 주요 화면별 목업 디자인
  - 대시보드, 사용자 관리, 설정, 모니터링 화면 등
  - 각 화면의 주요 컴포넌트 및 레이아웃 설명
  - 상호작용 및 동작 정의
- 프로토타입 구현 계획

### 6. 반응형 디자인 가이드라인 (responsive_guidelines.md)
- 브레이크포인트 정의 및 적용 방법
- 레이아웃 그리드 시스템 및 반응형 조정
- 주요 UI 컴포넌트의 반응형 동작 정의
- 이미지, 타이포그래피, 간격 등의 반응형 처리
- 터치 최적화 및 성능 고려사항

## 주요 기능 및 서비스

### 서버 핵심 기능
- **소켓 서버**: 클라이언트와의 실시간 통신을 관리
- **사용자 인증 및 관리**: 사용자 계정 및 권한 관리
- **화면 캡처 시스템**: AI 응답 영역의 캡처 및 전송
- **자동화 엔진**: 클로드 앱 제어 및 명령 실행
- **설정 관리**: 앱 설정의 저장 및 로드

### 클라이언트 연결 관리
- 클라이언트 인증 및 연결 상태 추적
- 다중 클라이언트 동시 지원
- 연결 이벤트(연결, 연결 해제, 재연결) 처리
- 클라이언트별 설정 및 권한 관리

### 자동화 기능
- 키보드 및 마우스 제어 자동화
- UI 요소 인식 및 상호작용
- 명령 실행 및 결과 모니터링
- 자동 스크롤 및 페이지 내비게이션

### 화면 캡처 및 이미지 처리
- 지정된 화면 영역 캡처
- 이미지 최적화 및 압축
- 실시간 이미지 전송
- 이미지 캐시 및 관리

### 데이터 저장 및 로깅
- 사용자 정보 저장 및 관리
- 명령 이력 및 통계 로깅
- 오류 및 디버그 로깅
- 설정 데이터 저장

### 보안 기능
- 사용자 인증 및 권한 검증
- 소켓 통신 보안
- 민감한 데이터 암호화
- 비밀번호 해싱 및 안전한 저장

## 확장 및 통합 기능
- 플러그인 아키텍처 지원
- 외부 서비스 API 통합
- 테마 및 스타일 커스터마이징
- 다국어 지원 프레임워크