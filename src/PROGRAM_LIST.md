# 데스크탑 컨트롤러 서버 프로그램 구조 및 파일 목록

## 프로젝트 구조

```
desktop-contrller-server/
├── src/
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
│   │   │   └── StatusCard.css
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
│   │   │   ├── Modal.css
│   │   │   └── Modal.js          # 모달 컴포넌트
│   │   └── users/            # 사용자 관리 관련 컴포넌트
│   │       ├── UserForm.css
│   │       ├── UserForm.js       # 사용자 폼 컴포넌트
│   │       ├── UserTable.css
│   │       └── UserTable.js      # 사용자 테이블 컴포넌트
│   ├── design/               # 디자인 시스템 문서 디렉토리
│   │   ├── color_typography.md   # 색상 및 타이포그래피 가이드
│   │   ├── component_system.md   # 컴포넌트 디자인 시스템
│   │   ├── design_requirements.md # 디자인 요구사항 및 컨셉
│   │   ├── icons_graphics.md     # 아이콘 및 그래픽 가이드
│   │   ├── responsive_guidelines.md # 반응형 디자인 가이드
│   │   └── screen_mockups.md     # 화면 목업 및 프로토타입
│   ├── pages/                # 페이지 컴포넌트 디렉토리
│   │   ├── Dashboard.css
│   │   ├── Dashboard.js         # 대시보드 페이지
│   │   ├── Settings.css
│   │   ├── Settings.js          # 설정 페이지
│   │   ├── UserManagement.css
│   │   └── UserManagement.js    # 사용자 관리 페이지
│   ├── styles/               # 글로벌 스타일 디렉토리
│   │   ├── global.css           # 글로벌 스타일
│   │   └── variables.css        # CSS 변수 및 테마 설정
│   ├── App.js                # 앱 루트 컴포넌트
│   ├── index.js              # 앱 진입점
│   └── PROGRAM_LIST.md       # 프로그램 구조 및 파일 목록 문서
└── public/                  # 정적 파일 디렉토리
    ├── index.html           # HTML 템플릿
    └── favicon.ico          # 파비콘
```

## 주요 파일 설명

### 앱 핵심 파일

- **src/index.js**: 앱의 진입점. React 앱을 DOM에 렌더링합니다.
- **src/App.js**: 앱의 루트 컴포넌트. 라우팅 및 전체 앱 구조를 정의합니다.

### 스타일 파일

- **src/styles/variables.css**: 색상, 간격, 타이포그래피 등의 디자인 변수를 정의합니다.
- **src/styles/global.css**: 전역 스타일을 정의합니다.

### 레이아웃 컴포넌트

- **src/components/layout/AppLayout.js**: 앱의 기본 레이아웃 구조를 제공하는 컴포넌트입니다.
- **src/components/layout/Sidebar.js**: 사이드바 내비게이션 컴포넌트입니다.
- **src/components/layout/Header.js**: 앱 헤더 컴포넌트입니다.

### UI 컴포넌트

- **src/components/ui/Button.js**: 다양한 스타일과 크기의 버튼 컴포넌트입니다.
- **src/components/ui/Card.js**: 콘텐츠를 그룹화하는 카드 컴포넌트입니다.
- **src/components/ui/Badge.js**: 상태 표시를 위한 배지 컴포넌트입니다.
- **src/components/ui/Modal.js**: 모달 다이얼로그 컴포넌트입니다.

### 대시보드 컴포넌트

- **src/components/dashboard/StatusCard.js**: 상태 정보를 표시하는 카드 컴포넌트입니다.
- **src/components/dashboard/ServerStatus.js**: 서버 상태 정보를 표시하는 컴포넌트입니다.
- **src/components/dashboard/ConnectionInfo.js**: 연결 정보를 표시하는 컴포넌트입니다.
- **src/components/dashboard/CommandStats.js**: 명령 통계를 표시하는 컴포넌트입니다.
- **src/components/dashboard/ClientList.js**: 연결된 클라이언트 목록을 표시하는 컴포넌트입니다.
- **src/components/dashboard/ActivityLog.js**: 서버 활동 로그를 표시하는 컴포넌트입니다.

### 사용자 관리 컴포넌트

- **src/components/users/UserTable.js**: 사용자 목록을 테이블 형식으로 표시하는 컴포넌트입니다.
- **src/components/users/UserForm.js**: 사용자 추가/편집 폼 컴포넌트입니다.

### 설정 컴포넌트

- **src/components/settings/SettingsTabs.js**: 설정 탭 내비게이션 컴포넌트입니다.
- **src/components/settings/ServerSettings.js**: 서버 설정 폼 컴포넌트입니다.
- **src/components/settings/CaptureSettings.js**: 캡처 설정 폼 컴포넌트입니다.
- **src/components/settings/ClaudeSettings.js**: 클로드 앱 설정 폼 컴포넌트입니다.

### 페이지 컴포넌트

- **src/pages/Dashboard.js**: 대시보드 페이지 컴포넌트입니다.
- **src/pages/UserManagement.js**: 사용자 관리 페이지 컴포넌트입니다.
- **src/pages/Settings.js**: 설정 페이지 컴포넌트입니다.
