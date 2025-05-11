# 반응형 디자인 가이드라인

## 1. 개요

데스크탑 컨트롤러 서버 애플리케이션은 다양한 화면 크기와 해상도에서 최적의 사용자 경험을 제공하기 위해 반응형 디자인 원칙을 따릅니다. 이 문서는 애플리케이션의 반응형 동작에 대한 가이드라인을 제공합니다.

### 디자인 원칙

1. **콘텐츠 우선**: 가장 중요한 콘텐츠와 기능을 우선적으로 표시
2. **유연한 레이아웃**: 화면 크기에 따라 자연스럽게 조정되는 그리드 시스템
3. **점진적 향상**: 작은 화면에서도 핵심 기능 완전 지원, 큰 화면에서 추가 기능 제공
4. **일관된 경험**: 모든 화면 크기에서 일관된 디자인 언어와 사용자 경험 제공
5. **사용 맥락 고려**: 데스크탑이 주 사용 환경이지만 다양한 디스플레이 크기 지원

## 2. 브레이크포인트 정의

애플리케이션은 다음과 같은 주요 브레이크포인트를 사용합니다:

| 이름 | 크기 범위 | 대상 기기 유형 | CSS 미디어 쿼리 |
|------|----------|--------------|----------------|
| 소형(S) | < 768px | 작은 디스플레이, 분할 화면 | `@media (max-width: 767px)` |
| 중형(M) | 768px - 1199px | 노트북, 소형 모니터 | `@media (min-width: 768px) and (max-width: 1199px)` |
| 대형(L) | 1200px - 1599px | 데스크탑 모니터 | `@media (min-width: 1200px) and (max-width: 1599px)` |
| 초대형(XL) | ≥ 1600px | 대형 모니터, 고해상도 디스플레이 | `@media (min-width: 1600px)` |

### 브레이크포인트 적용 예시

```css
/* 기본 스타일 (모든 크기에 적용) */
.container {
  padding: 16px;
}

/* 소형 디스플레이 */
@media (max-width: 767px) {
  .container {
    padding: 8px;
  }
}

/* 중형 디스플레이 */
@media (min-width: 768px) and (max-width: 1199px) {
  .container {
    padding: 16px;
    max-width: 960px;
  }
}

/* 대형 디스플레이 */
@media (min-width: 1200px) and (max-width: 1599px) {
  .container {
    padding: 24px;
    max-width: 1140px;
  }
}

/* 초대형 디스플레이 */
@media (min-width: 1600px) {
  .container {
    padding: 32px;
    max-width: 1320px;
  }
}
```

## 3. 레이아웃 그리드 시스템

애플리케이션은 12열 그리드 시스템을 사용하여 일관된 레이아웃을 제공합니다.

### 그리드 구성

- **컨테이너**: 콘텐츠의 최대 너비 제한 및 페이지 중앙 정렬
- **행(Row)**: 가로 방향 그룹, 열(Column)을 포함
- **열(Column)**: 12개의 균등한 단위로 나뉜 콘텐츠 영역
- **거터(Gutter)**: 열 사이의 간격 (기본 16px)

### 반응형 그리드 동작

각 디스플레이 크기에 따라 그리드 동작이 조정됩니다:

| 브레이크포인트 | 컨테이너 최대 너비 | 열 동작 | 거터 폭 |
|-------------|-----------------|----------|---------|
| 소형(S) | 100% | 대부분 전체 너비(12열), 필요 시 6:6 분할 | 8px |
| 중형(M) | 960px | 다양한 열 조합 (6:6, 8:4, 4:4:4 등) | 16px |
| 대형(L) | 1140px | 다양한 열 조합, 더 복잡한 레이아웃 가능 | 24px |
| 초대형(XL) | 1320px | 다양한 열 조합, 정보 밀도 최적화 | 32px |

### 그리드 클래스 구성

```css
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, 
.col-7, .col-8, .col-9, .col-10, .col-11, .col-12,
.col-sm-1, .col-sm-2, ... .col-sm-12,
.col-md-1, .col-md-2, ... .col-md-12,
.col-lg-1, .col-lg-2, ... .col-lg-12,
.col-xl-1, .col-xl-2, ... .col-xl-12 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

/* 기본 (모든 크기) */
.col-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
.col-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
/* ... 나머지 열 ... */
.col-12 { flex: 0 0 100%; max-width: 100%; }

/* 소형(S) 화면 */
@media (min-width: 576px) {
  .col-sm-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
  /* ... 나머지 열 ... */
}

/* 중형(M) 화면 */
@media (min-width: 768px) {
  .col-md-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
  /* ... 나머지 열 ... */
}

/* 대형(L) 화면 */
@media (min-width: 1200px) {
  .col-lg-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
  /* ... 나머지 열 ... */
}

/* 초대형(XL) 화면 */
@media (min-width: 1600px) {
  .col-xl-1 { flex: 0 0 8.333333%; max-width: 8.333333%; }
  /* ... 나머지 열 ... */
}
```

### 사용 예시

```html
<div class="container">
  <div class="row">
    <!-- 소형: 전체 너비, 중형: 8열, 대형: 6열 -->
    <div class="col-12 col-md-8 col-lg-6">
      콘텐츠 영역 1
    </div>
    
    <!-- 소형: 전체 너비, 중형: 4열, 대형: 6열 -->
    <div class="col-12 col-md-4 col-lg-6">
      콘텐츠 영역 2
    </div>
  </div>
  
  <div class="row">
    <!-- 모든 화면에서 균등 분할 (3등분) -->
    <div class="col-4">
      콘텐츠 영역 3
    </div>
    <div class="col-4">
      콘텐츠 영역 4
    </div>
    <div class="col-4">
      콘텐츠 영역 5
    </div>
  </div>
</div>
```

## 4. 레이아웃 패턴

### 주요 페이지 레이아웃 변화

각 화면 크기에 따라 페이지 레이아웃이 조정됩니다:

#### 글로벌 레이아웃

| 브레이크포인트 | 사이드바 | 헤더 | 콘텐츠 영역 |
|-------------|---------|------|-----------|
| 소형(S) | 숨김 (햄버거 메뉴로 토글) | 간소화, 제목과 필수 액션만 | 단일 컬럼, 수직 스크롤 |
| 중형(M) | 축소 버전 (아이콘만) 또는 토글 가능 | 전체 기능 | 주로 1-2 컬럼 레이아웃 |
| 대형(L) | 완전 펼침 상태 (기본) | 전체 기능 | 다중 컬럼 레이아웃 |
| 초대형(XL) | 완전 펼침 상태 (고정) | 전체 기능 + 추가 정보 | 복잡한 다중 컬럼, 더 많은 정보 밀도 |

#### 숨겨진/토글형 사이드바 예시 (소형 화면)
```
┌────────────────────────────┐     ┌────────────────────────────┐
│ ☰ 제목               작업  │  →  │ ← 메뉴                    │
├────────────────────────────┤     ├────────────────────────────┤
│                            │     │ 🏠 대시보드                 │
│                            │     │ 👥 사용자                  │
│        콘텐츠 영역          │     │ ⚙️ 설정                   │
│                            │     │ 📊 모니터링                 │
│                            │     │ 🤖 명령                    │
└────────────────────────────┘     └────────────────────────────┘
```

#### 축소형 사이드바 (중형 화면)
```
┌───┬────────────────────────┐
│ 🏠 │ 제목               작업  │
│ 👥 ├────────────────────────┤
│ ⚙️ │                        │
│ 📊 │                        │
│ 🤖 │        콘텐츠 영역      │
│    │                        │
│    │                        │
└───┴────────────────────────┘
```

#### 전체 사이드바 (대형 화면)
```
┌─────────────┬──────────────────────┐
│ 🏠 대시보드   │ 제목             작업  │
│ 👥 사용자    ├──────────────────────┤
│ ⚙️ 설정      │                      │
│ 📊 모니터링   │                      │
│ 🤖 명령      │      콘텐츠 영역      │
│             │                      │
│             │                      │
└─────────────┴──────────────────────┘
```

### 콘텐츠 영역 레이아웃 변화

#### 카드 그리드 레이아웃

| 브레이크포인트 | 카드 배열 | 카드 크기 |
|-------------|----------|----------|
| 소형(S) | 단일 컬럼 (1x) | 전체 너비 |
| 중형(M) | 2열 그리드 (2x) | 중간 크기 |
| 대형(L) | 3열 그리드 (3x) | 중간 크기 |
| 초대형(XL) | 4열 그리드 (4x) 또는 3열 넓은 카드 | 최적화된 크기 |

```
소형(S):         중형(M):         대형(L):        초대형(XL):
┌────────┐      ┌────┐┌────┐    ┌──┐┌──┐┌──┐    ┌──┐┌──┐┌──┐┌──┐
│  카드1  │      │카드1││카드2│    │카││카││카│    │카││카││카││카│
└────────┘      └────┘└────┘    │드││드││드│    │드││드││드││드│
┌────────┐      ┌────┐┌────┐    │1 ││2 ││3 │    │1 ││2 ││3 ││4 │
│  카드2  │      │카드3││카드4│    └──┘└──┘└──┘    └──┘└──┘└──┘└──┘
└────────┘      └────┘└────┘    ┌──┐┌──┐┌──┐    ┌──┐┌──┐┌──┐┌──┐
┌────────┐                      │카││카││카│    │카││카││카││카│
│  카드3  │                      │드││드││드│    │드││드││드││드│
└────────┘                      │4 ││5 ││6 │    │5 ││6 ││7 ││8 │
                                └──┘└──┘└──┘    └──┘└──┘└──┘└──┘
```

#### 테이블 레이아웃

| 브레이크포인트 | 테이블 동작 | 세부 사항 |
|-------------|------------|-----------|
| 소형(S) | 카드 뷰로 변환 | 각 행이 카드로 변환, 레이블:값 형식 |
| 중형(M) | 스크롤 가능한 테이블, 중요 컬럼만 | 수평 스크롤 또는 컬럼 축소/숨김 |
| 대형(L) | 전체 테이블 | 모든 컬럼 표시 |
| 초대형(XL) | 전체 테이블 + 추가 정보 | 모든 컬럼 + 추가 상세 정보 |

#### 소형 화면에서의 테이블 → 카드 변환 예시:

```
테이블 형식:                카드 형식:
┌─────┬──────┬──────┐      ┌────────────────────┐
│ ID  │ 이름  │ 상태 │      │ ID: 1              │
├─────┼──────┼──────┤      │ 이름: 홍길동         │
│ 1   │홍길동 │ 활성 │  →   │ 상태: 활성          │
├─────┼──────┼──────┤      └────────────────────┘
│ 2   │김철수 │ 대기 │      ┌────────────────────┐
└─────┴──────┴──────┘      │ ID: 2              │
                           │ 이름: 김철수         │
                           │ 상태: 대기          │
                           └────────────────────┘
```

## 5. 주요 UI 컴포넌트의 반응형 동작

### 1. 내비게이션 컴포넌트

#### 사이드바 내비게이션

| 브레이크포인트 | 동작 | 특징 |
|-------------|-----|------|
| 소형(S) | 햄버거 메뉴로 토글 | 오버레이 형태, 화면 전체 또는 부분 차지 |
| 중형(M) | 축소형 사이드바 | 아이콘만 표시, 호버 시 레이블 표시 |
| 대형(L) 이상 | 전체 사이드바 | 아이콘과 레이블 함께 표시 |

```css
.sidebar {
  height: 100vh;
  transition: all 0.3s ease;
}

/* 소형(S) 화면 */
@media (max-width: 767px) {
  .sidebar {
    position: fixed;
    left: -250px;
    width: 250px;
    z-index: 1000;
  }
  
  .sidebar.open {
    left: 0;
  }
  
  .sidebar-overlay {
    display: block;
  }
}

/* 중형(M) 화면 */
@media (min-width: 768px) and (max-width: 1199px) {
  .sidebar {
    width: 60px;
  }
  
  .sidebar-text {
    display: none;
  }
  
  .sidebar:hover {
    width: 250px;
  }
  
  .sidebar:hover .sidebar-text {
    display: inline;
  }
}

/* 대형(L) 이상 화면 */
@media (min-width: 1200px) {
  .sidebar {
    width: 250px;
  }
  
  .sidebar-text {
    display: inline;
  }
}
```

#### 탭 내비게이션

| 브레이크포인트 | 동작 | 특징 |
|-------------|-----|------|
| 소형(S) | 스크롤 가능한 탭 또는 드롭다운 | 화면 너비에 맞게 탭 스크롤 또는 드롭다운으로 변환 |
| 중형(M) 이상 | 일반 탭 | 전체 탭 표시 |

```css
.tabs {
  display: flex;
  border-bottom: 1px solid var(--border-dark);
}

.tab {
  padding: 12px 16px;
  white-space: nowrap;
}

/* 소형(S) 화면 */
@media (max-width: 767px) {
  .tabs {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  /* 또는 드롭다운 변환 */
  .tabs.dropdown {
    display: none;
  }
  
  .tabs-dropdown-toggle {
    display: block;
  }
}
```

### 2. 카드 및 패널

| 브레이크포인트 | 동작 | 특징 |
|-------------|-----|------|
| 소형(S) | 전체 너비, 세로 스택 | 간소화된 콘텐츠, 접을 수 있는 섹션 |
| 중형(M) | 2-열 그리드 또는 분할 | 기본 콘텐츠 |
| 대형(L) 이상 | 다중 열 그리드 | 풍부한 콘텐츠, 추가 세부 정보 |

```css
.card {
  border-radius: 8px;
  background-color: var(--surface-dark);
  margin-bottom: 16px;
}

/* 소형(S) 화면 */
@media (max-width: 767px) {
  .card-secondary-content {
    display: none;
  }
  
  .card-toggle {
    display: block;
  }
}

/* 중형(M) 이상 화면 */
@media (min-width: 768px) {
  .card-secondary-content {
    display: block;
  }
  
  .card-toggle {
    display: none;
  }
}
```

### 3. 데이터 테이블

| 브레이크포인트 | 동작 | 특징 |
|-------------|-----|------|
| 소형(S) | 카드 뷰 또는 스택 레이아웃 | 각 행을 카드로 변환, 주요 정보만 표시 |
| 중형(M) | 반응형 테이블 | 수평 스크롤 또는 컬럼 우선순위 |
| 대형(L) 이상 | 전체 테이블 | 모든 컬럼 표시, 페이지네이션 |

```css
/* 소형(S) 화면 - 카드 변환 */
@media (max-width: 767px) {
  .table, .table-header, .table-row {
    display: block;
  }
  
  .table-header {
    display: none;
  }
  
  .table-row {
    margin-bottom: 16px;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--surface-dark);
  }
  
  .table-cell {
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid var(--border-dark);
  }
  
  .table-cell:before {
    content: attr(data-label);
    flex: 1;
    font-weight: 600;
  }
  
  .table-cell-content {
    flex: 2;
    text-align: right;
  }
}

/* 중형(M) 화면 - 수평 스크롤 */
@media (min-width: 768px) and (max-width: 1199px) {
  .table-container {
    overflow-x: auto;
  }
  
  .table {
    min-width: 600px;
  }
  
  /* 또는 특정 컬럼 숨김 */
  .table-cell.priority-low {
    display: none;
  }
}
```

### 4. 폼 및 입력 요소

| 브레이크포인트 | 동작 | 특징 |
|-------------|-----|------|
| 소형(S) | 스택 레이아웃, 큰 터치 타겟 | 한 줄에 하나의 입력 필드, 더 큰 버튼 |
| 중형(M) | 2-열 폼 레이아웃 | 일부 필드 인라인 배치 |
| 대형(L) 이상 | 복잡한 폼 레이아웃 | 다중 컬럼 폼, 고급 입력 컨트롤 |

```css
.form-group {
  margin-bottom: 16px;
}

.form-control {
  display: block;
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
}

/* 소형(S) 화면 */
@media (max-width: 767px) {
  .form-control {
    padding: 12px 16px; /* 더 큰 터치 타겟 */
  }
  
  .form-group-inline {
    flex-direction: column;
  }
}

/* 중형(M) 이상 화면 */
@media (min-width: 768px) {
  .form-group-inline {
    display: flex;
    gap: 16px;
  }
  
  .form-group-inline .form-group {
    flex: 1;
  }
}
```

### 5. 모달 및 다이얼로그

| 브레이크포인트 | 동작 | 특징 |
|-------------|-----|------|
| 소형(S) | 전체 화면 또는 대부분 차지 | 간소화된 콘텐츠, 큰 버튼 |
| 중형(M) | 중간 크기 모달 | 표준 모달 디자인 |
| 대형(L) 이상 | 최적 크기 모달 | 더 풍부한 콘텐츠, 복잡한 레이아웃 |

```css
.modal {
  background-color: var(--surface-dark-elevated);
  border-radius: 8px;
  box-shadow: var(--shadow-high);
}

/* 소형(S) 화면 */
@media (max-width: 767px) {
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
  }
  
  .modal-content {
    flex: 1;
    overflow-y: auto;
  }
  
  .modal-footer .btn {
    height: 48px; /* 더 큰 버튼 */
  }
}

/* 중형(M) 화면 */
@media (min-width: 768px) and (max-width: 1199px) {
  .modal {
    width: 600px;
    max-width: 90%;
    max-height: 80vh;
  }
}

/* 대형(L) 이상 화면 */
@media (min-width: 1200px) {
  .modal {
    width: 800px;
    max-width: 80%;
    max-height: 80vh;
  }
  
  .modal-lg {
    width: 1000px;
  }
}
```

## 6. 이미지 및 미디어 처리

### 반응형 이미지

모든 이미지는 다양한 화면 크기에 맞게 적절하게 조정되어야 합니다:

```css
img {
  max-width: 100%;
  height: auto;
}

.responsive-image {
  width: 100%;
  height: auto;
}

/* 큰 화면에서 이미지 최대 크기 제한 */
@media (min-width: 1200px) {
  .responsive-image {
    max-width: 800px;
  }
}
```

### 화면 캡처 이미지 처리

클로드 앱의 응답 화면 캡처 이미지는 다음과 같이 처리됩니다:

```css
.capture-image-container {
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background-color: var(--surface-dark);
}

.capture-image {
  width: 100%;
  height: auto;
}

/* 소형(S) 화면 */
@media (max-width: 767px) {
  .capture-controls {
    position: sticky;
    bottom: 0;
    padding: 8px;
    background-color: var(--surface-dark);
    display: flex;
    justify-content: center;
    gap: 8px;
  }
}

/* 중형(M) 이상 화면 */
@media (min-width: 768px) {
  .capture-controls {
    position: absolute;
    right: 16px;
    top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
```

## 7. 타이포그래피 조정

화면 크기에 따라 폰트 크기와 여백을 조정하여 가독성과 미관을 최적화합니다:

```css
:root {
  --font-h1: 24px;
  --font-h2: 20px;
  --font-h3: 18px;
  --font-body: 14px;
  --space-unit: 8px;
}

h1 { font-size: var(--font-h1); }
h2 { font-size: var(--font-h2); }
h3 { font-size: var(--font-h3); }
body { font-size: var(--font-body); }

/* 소형(S) 화면 */
@media (max-width: 767px) {
  :root {
    --font-h1: 20px;
    --font-h2: 18px;
    --font-h3: 16px;
    --font-body: 14px;
    --space-unit: 6px;
  }
}

/* 중형(M) 화면 */
@media (min-width: 768px) and (max-width: 1199px) {
  :root {
    --font-h1: 22px;
    --font-h2: 19px;
    --font-h3: 17px;
    --font-body: 14px;
    --space-unit: 8px;
  }
}

/* 대형(L) 화면 */
@media (min-width: 1200px) {
  :root {
    --font-h1: 24px;
    --font-h2: 20px;
    --font-h3: 18px;
    --font-body: 14px;
    --space-unit: 8px;
  }
}

/* 초대형(XL) 화면 */
@media (min-width: 1600px) {
  :root {
    --font-h1: 28px;
    --font-h2: 22px;
    --font-h3: 20px;
    --font-body: 15px;
    --space-unit: 10px;
  }
}
```

## 8. 스페이싱 시스템

화면 크기에 따라 여백과 간격을 조정하여 일관된 리듬과 공간 활용을 제공합니다:

```css
:root {
  --spacing-xs: calc(var(--space-unit) * 0.5);  /* 4px */
  --spacing-s: var(--space-unit);               /* 8px */
  --spacing-m: calc(var(--space-unit) * 2);     /* 16px */
  --spacing-l: calc(var(--space-unit) * 3);     /* 24px */
  --spacing-xl: calc(var(--space-unit) * 4);    /* 32px */
  --spacing-xxl: calc(var(--space-unit) * 6);   /* 48px */
}

.mt-xs { margin-top: var(--spacing-xs); }
.mt-s { margin-top: var(--spacing-s); }
.mt-m { margin-top: var(--spacing-m); }
.mt-l { margin-top: var(--spacing-l); }
.mt-xl { margin-top: var(--spacing-xl); }
.mt-xxl { margin-top: var(--spacing-xxl); }

/* 동일한 패턴으로 margin-bottom, padding 등 다른 간격 클래스 */
```

## 9. 터치 및 입력 최적화

모바일 환경과 데스크탑 환경의 입력 방식 차이를 고려한 최적화를 제공합니다:

### 터치 타겟 크기

```css
/* 기본 크기 */
.btn, .form-control, .nav-link {
  min-height: 40px;
}

/* 소형(S) 화면 - 터치 타겟 확대 */
@media (max-width: 767px) {
  .btn, .form-control, .nav-link {
    min-height: 48px;
  }
  
  .btn-icon {
    min-width: 48px;
    min-height: 48px;
  }
  
  /* 터치 대상 간 간격 확대 */
  .btn + .btn,
  .nav-link + .nav-link {
    margin-left: 8px;
  }
}
```

### 호버 상태 처리

```css
/* 기본적으로 모든 화면에서 활성화된 호버 효과 */
.btn:hover, .card:hover {
  transform: translateY(-1px);
}

/* 터치 기반 기기에서는 호버 효과 비활성화 */
@media (hover: none) {
  .btn:hover, .card:hover {
    transform: none;
  }
  
  /* 대신 활성 상태에만 변화 적용 */
  .btn:active, .card:active {
    transform: translateY(1px);
  }
}
```

## 10. 성능 최적화

반응형 디자인을 구현할 때 성능에 미치는 영향을 고려합니다:

### CSS 최적화

- 미디어 쿼리를 크기별로 그룹화하여 관리
- 중복 코드를 최소화하고 CSS 변수 활용
- 복잡한 선택자와 과도한 중첩 피하기

### 이미지 및 미디어 최적화

- 화면 크기별 최적화된 이미지 제공 (srcset 활용)
- lazy loading 적용
- 작은 화면에서는 더 작은 이미지 제공

### 레이아웃 최적화

- 레이아웃 시프트 최소화
- 화면 크기 변화 시 애니메이션 부드럽게 처리
- 주요 콘텐츠를 우선 로드하고 화면에 표시

## 11. 접근성 고려사항

반응형 디자인을 구현할 때 접근성 확보를 위한 추가 고려사항:

### 키보드 접근성

모든 터치 또는 마우스 상호작용이 키보드로도 가능해야 합니다:

```css
/* 키보드 포커스 표시 스타일 */
:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* 마우스 사용자를 위한 포커스 숨김 */
:focus:not(:focus-visible) {
  outline: none;
}

/* 키보드 포커스 표시 */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 텍스트 크기 조정

사용자의 텍스트 크기 설정을 존중합니다:

```css
/* rem 단위 사용 */
:root {
  font-size: 16px; /* 기본 크기 */
}

body {
  font-size: 1rem;
}

h1 { font-size: 1.5rem; }
h2 { font-size: 1.25rem; }

/* 미디어 쿼리는 em 또는 px 단위로 */
@media (max-width: 767px) {
  :root {
    font-size: 15px; /* 소형 화면에서 약간 작게 */
  }
}

@media (min-width: 1600px) {
  :root {
    font-size: 18px; /* 초대형 화면에서 약간 크게 */
  }
}
```

## 12. 테스트 및 품질 보증

반응형 디자인의 품질을 확보하기 위한 테스트 방법:

### 브레이크포인트 테스트

- 각 브레이크포인트의 중간 지점에서 테스트 (예: 600px, 992px, 1400px, 1800px)
- 브레이크포인트 경계(예: 767px → 768px)에서 레이아웃 변화 확인

### 브라우저 및 디바이스 테스트

- Chrome, Firefox, Safari, Edge 등 주요 브라우저 테스트
- 실제 디바이스(노트북, 데스크탑) 및 다양한 모니터 크기에서 테스트

### 접근성 테스트

- 키보드 탐색 테스트
- 화면 확대/축소 테스트 (200% 확대 시 사용성)
- 고대비 모드 및 다크 모드 테스트

## 13. 구현 가이드라인

반응형 디자인을 구현할 때 따라야 할 기본 원칙:

1. **모바일 우선(Mobile First)** 또는 **기본 우선(Default First)** 접근 방식 선택:
   - 모바일 우선: 모바일 레이아웃을 기본으로 하고 더 큰 화면을 위한 미디어 쿼리 작성
   - 기본 우선: 가장 일반적인 화면 크기(예: 중형)를 기본으로 하고 다른 크기를 위한 미디어 쿼리 작성

2. **컨텐츠를 중심으로 디자인**:
   - 컨텐츠와 기능의 우선순위를 정의하고 이에 맞게 레이아웃 조정
   - 화면 크기에 관계없이 핵심 기능은 항상 접근 가능하게 유지

3. **일관된 디자인 언어 유지**:
   - 화면 크기가 달라도 동일한 디자인 언어와 시각적 스타일 유지
   - 컴포넌트의 모양이 급격하게 변하지 않도록 설계

4. **점진적인 기능 향상**:
   - 작은 화면에서는 핵심 기능만 제공하고, 큰 화면에서 추가 기능 제공
   - 기본 경험은 모든 화면 크기에서 일관되게 유지

## 14. 결론

데스크탑 컨트롤러 서버 애플리케이션의 반응형 디자인은 다양한 화면 크기와 해상도에서 일관된 사용자 경험을 제공하기 위한 것입니다. 이 가이드라인을 따름으로써 애플리케이션은 다양한 환경에서 효과적으로 작동하고 사용자에게 최적의 경험을 제공할 수 있습니다.

주요 브레이크포인트, 레이아웃 패턴, 컴포넌트 동작 및 성능 최적화를 고려하여 반응형 디자인을 구현함으로써 모든 사용자가 필요한 기능에 쉽게 접근하고 효율적으로 사용할 수 있는 애플리케이션을 제공합니다.
