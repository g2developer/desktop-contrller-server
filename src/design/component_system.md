# 컴포넌트 디자인 시스템

## 1. 개요

데스크탑 컨트롤러 서버 애플리케이션의 컴포넌트 디자인 시스템은 일관된 사용자 경험을 제공하고 개발 효율성을 높이기 위한 재사용 가능한 UI 구성 요소의 모음입니다. 본 문서는 주요 UI 컴포넌트의 디자인 사양과 사용 지침을 제공합니다.

### 디자인 원칙

1. **일관성 (Consistency)**: 모든 컴포넌트는 정의된 디자인 언어를 따릅니다.
2. **모듈성 (Modularity)**: 컴포넌트는 독립적으로 기능하면서도 함께 작동합니다.
3. **접근성 (Accessibility)**: 모든 사용자가 접근할 수 있도록 디자인합니다.
4. **효율성 (Efficiency)**: 최소한의 클릭과 상호작용으로 작업을 완료할 수 있습니다.
5. **직관성 (Intuitiveness)**: 사용자가 학습 없이도 이해할 수 있는 UI를 제공합니다.

## 2. 핵심 컴포넌트

### 2.1 버튼 (Buttons)

버튼은 사용자 액션을 유도하는 대화형 요소입니다.

#### 변형

| 변형 | 용도 | 시각적 특징 |
|------|------|------------|
| Primary | 주요 액션, 긍정적 응답 | 강조 색상 배경, 흰색 텍스트 |
| Secondary | 보조 액션, 대안 | 테두리만 있는 투명 배경 |
| Text | 덜 중요한 액션 | 배경 없음, 텍스트만 표시 |
| Danger | 파괴적/위험 액션 | 오류 색상 배경 |
| Success | 성공/확인 액션 | 성공 색상 배경 |
| Icon | 공간 절약, 직관적 기능 | 아이콘만 표시 |

#### 크기

| 크기 | 높이 | 패딩 | 폰트 크기 | 용도 |
|------|------|------|-----------|------|
| Large | 48px | 24px | 16px | 주요 CTA, 강조 액션 |
| Medium | 40px | 16px | 14px | 일반적인 액션 |
| Small | 32px | 12px | 14px | 조밀한 UI, 인라인 액션 |
| Mini | 24px | 8px | 12px | 테이블 내 버튼, 툴바 |

#### 상태

| 상태 | 시각적 변화 |
|------|------------|
| Default | 기본 디자인 |
| Hover | 배경 색상 약간 밝게, 커서 포인터 |
| Active | 배경 색상 약간 어둡게, 약간 내려감 |
| Focus | 키보드 포커스 표시기 (아웃라인) |
| Disabled | 50% 불투명도, 클릭 불가 |
| Loading | 스피너 아이콘 표시, 텍스트 유지 |

#### HTML/CSS 예시 (Primary 버튼)

```html
<button class="btn btn-primary btn-medium">
  <span class="btn-text">버튼 텍스트</span>
</button>
```

```css
.btn {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--color-primary-light);
}

.btn-primary:active {
  background-color: var(--color-primary-dark);
  transform: translateY(1px);
}

.btn-medium {
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### 2.2 입력 필드 (Input Fields)

사용자로부터 텍스트 입력을 받는 컴포넌트입니다.

#### 변형

| 변형 | 용도 | 시각적 특징 |
|------|------|------------|
| Text | 일반 텍스트 입력 | 단일 라인 텍스트 입력 |
| Password | 비밀번호 입력 | 마스킹된 텍스트, 표시/숨김 토글 |
| Number | 숫자 입력 | 숫자 키패드, 스피너 화살표 |
| Textarea | 여러 줄 텍스트 | 확장 가능한 여러 줄 입력 영역 |
| Search | 검색 쿼리 | 돋보기 아이콘, 지우기 버튼 |
| Select | 옵션 선택 | 드롭다운 메뉴, 화살표 아이콘 |

#### 크기

| 크기 | 높이 | 패딩 | 폰트 크기 | 용도 |
|------|------|------|-----------|------|
| Large | 48px | 16px | 16px | 주요 폼, 강조 입력 |
| Medium | 40px | 12px | 14px | 일반적인 폼 |
| Small | 32px | 8px | 14px | 조밀한 UI, 인라인 폼 |

#### 상태

| 상태 | 시각적 변화 |
|------|------------|
| Default | 기본 디자인, 테두리 색상 Border Dark |
| Focus | Primary 색상 테두리, 약간의 그림자 |
| Hover | 약간 더 어두운 테두리 색상 |
| Filled | 텍스트 포함, 기본 상태와 유사 |
| Error | 오류 색상 테두리, 오류 메시지 |
| Success | 성공 색상 테두리, 성공 메시지 |
| Disabled | 배경 색상 어둡게, 입력 불가 |

#### HTML/CSS 예시 (Text Input)

```html
<div class="input-group">
  <label for="username" class="input-label">사용자 이름</label>
  <input type="text" id="username" class="input-field input-medium" placeholder="사용자 이름 입력">
  <div class="input-message">사용자 이름은 3자 이상이어야 합니다.</div>
</div>
```

```css
.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.input-label {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: var(--text-secondary);
}

.input-field {
  font-family: 'Inter', sans-serif;
  border-radius: 6px;
  border: 1px solid var(--border-dark);
  background-color: var(--surface-dark);
  color: var(--text-primary);
  transition: all 0.2s ease-in-out;
}

.input-medium {
  height: 40px;
  padding: 0 12px;
  font-size: 14px;
}

.input-field:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(0, 185, 174, 0.2);
}

.input-field.error {
  border-color: var(--color-error);
}

.input-message {
  font-size: 12px;
  margin-top: 4px;
  color: var(--text-secondary);
}

.input-message.error {
  color: var(--color-error);
}
```

### 2.3 카드 (Cards)

정보를 그룹화하고 시각적으로 분리하는 컨테이너 컴포넌트입니다.

#### 변형

| 변형 | 용도 | 시각적 특징 |
|------|------|------------|
| Standard | 일반적인 정보 그룹화 | 기본 패딩, 그림자 |
| Flat | 깔끔한 UI, 모듈 구분 | 그림자 없음, 테두리만 |
| Interactive | 클릭 가능한 카드 | 호버 효과, 포인터 커서 |
| Elevated | 강조된 정보 | 더 강한 그림자, 약간 올라가 보임 |
| Status | 상태 표시 | 좌측/상단 컬러 바 |

#### 구성 요소

| 요소 | 용도 | 스타일 |
|------|------|--------|
| Header | 카드 제목, 액션 | 더 강한 배경색, 하단 경계선 |
| Body | 주요 콘텐츠 | 기본 패딩, 유연한 콘텐츠 영역 |
| Footer | 추가 액션, 메타 정보 | 상단 경계선, 작은 텍스트 |
| Divider | 콘텐츠 섹션 구분 | 가는 구분선 |

#### HTML/CSS 예시 (Standard Card)

```html
<div class="card card-standard">
  <div class="card-header">
    <h3 class="card-title">카드 제목</h3>
    <button class="btn btn-icon">
      <i class="icon icon-more"></i>
    </button>
  </div>
  <div class="card-body">
    <p>카드 콘텐츠가 이곳에 위치합니다.</p>
  </div>
  <div class="card-footer">
    <span class="card-meta">마지막 업데이트: 2분 전</span>
    <button class="btn btn-text btn-small">더 보기</button>
  </div>
</div>
```

```css
.card {
  border-radius: 8px;
  background-color: var(--surface-dark);
  overflow: hidden;
}

.card-standard {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-dark);
}

.card-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.card-body {
  padding: 16px;
}

.card-footer {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-dark);
}

.card-meta {
  font-size: 12px;
  color: var(--text-secondary);
}
```

### 2.4 모달 및 다이얼로그 (Modals & Dialogs)

사용자의 주의를 끌거나 추가 정보 및 작업을 위한 오버레이 컴포넌트입니다.

#### 변형

| 변형 | 용도 | 시각적 특징 |
|------|------|------------|
| Standard | 일반적인 정보/액션 | 중간 크기, 표준 패딩 |
| Small | 간단한 확인/알림 | 작은 크기, 중앙 정렬 |
| Large | 복잡한 폼/정보 | 확장된 크기, 스크롤 가능 |
| Fullscreen | 몰입형 경험 | 전체 화면, 모달 헤더 고정 |
| Side Panel | 보조 작업/정보 | 측면에서 슬라이드인, 고정 가능 |

#### 구성 요소

| 요소 | 용도 | 스타일 |
|------|------|--------|
| Overlay | 배경 흐림, 포커스 | 반투명 검정(50-75% 불투명도) |
| Container | 콘텐츠 영역 | 높은 그림자, 둥근 모서리 |
| Header | 제목, 닫기 버튼 | 굵은 제목, 우측 X 아이콘 |
| Body | 주요 콘텐츠 | 유연한 콘텐츠 영역, 스크롤 가능 |
| Footer | 주요 액션 버튼 | 우측 정렬된 버튼(들) |

#### HTML/CSS 예시 (Standard Modal)

```html
<div class="modal-overlay">
  <div class="modal modal-standard" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal-header">
      <h2 class="modal-title" id="modal-title">모달 제목</h2>
      <button class="btn btn-icon btn-close" aria-label="닫기">
        <i class="icon icon-close"></i>
      </button>
    </div>
    <div class="modal-body">
      <p>모달 콘텐츠가 이곳에 위치합니다.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-text btn-medium">취소</button>
      <button class="btn btn-primary btn-medium">확인</button>
    </div>
  </div>
</div>
```

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: var(--surface-dark-elevated);
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-standard {
  width: 480px;
}

.modal-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-dark);
}

.modal-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.modal-body {
  padding: 16px;
  overflow-y: auto;
}

.modal-footer {
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  border-top: 1px solid var(--border-dark);
}

.btn-close {
  color: var(--text-secondary);
}
```

### 2.5 내비게이션 (Navigation)

앱 내 다양한 영역을 탐색하기 위한 컴포넌트입니다.

#### 변형

| 변형 | 용도 | 시각적 특징 |
|------|------|------------|
| Sidebar | 주요 앱 내비게이션 | 수직 목록, 아이콘+레이블 |
| Tabs | 관련 콘텐츠 그룹 전환 | 수평 탭, 밑줄 또는 배경 구분 |
| Breadcrumbs | 계층적 위치 표시 | 경로 구분자로 연결된 링크 |
| Dropdown | 옵션 선택, 하위 메뉴 | 확장 가능한 드롭다운 목록 |
| Steps | 단계별 진행 표시 | 번호 매겨진 스텝, 진행 상태 |

#### 사이드바 내비게이션 예시

```html
<nav class="sidebar">
  <div class="sidebar-header">
    <img src="/logo.svg" alt="로고" class="sidebar-logo">
  </div>
  <ul class="sidebar-nav">
    <li class="sidebar-item active">
      <a href="#dashboard" class="sidebar-link">
        <i class="icon icon-dashboard"></i>
        <span>대시보드</span>
      </a>
    </li>
    <li class="sidebar-item">
      <a href="#users" class="sidebar-link">
        <i class="icon icon-users"></i>
        <span>사용자 관리</span>
      </a>
    </li>
    <li class="sidebar-item">
      <a href="#settings" class="sidebar-link">
        <i class="icon icon-settings"></i>
        <span>설정</span>
      </a>
    </li>
  </ul>
  <div class="sidebar-footer">
    <button class="sidebar-collapse-btn">
      <i class="icon icon-collapse"></i>
    </button>
  </div>
</nav>
```

```css
.sidebar {
  width: 240px;
  height: 100vh;
  background-color: var(--surface-dark);
  border-right: 1px solid var(--border-dark);
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-dark);
}

.sidebar-logo {
  height: 32px;
}

.sidebar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  overflow-y: auto;
}

.sidebar-item {
  margin: 4px 0;
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 6px;
  margin: 0 8px;
  transition: all 0.2s ease-in-out;
}

.sidebar-link:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.sidebar-item.active .sidebar-link {
  background-color: rgba(0, 185, 174, 0.1);
  color: var(--color-primary);
}

.sidebar-link i {
  margin-right: 12px;
  font-size: 20px;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid var(--border-dark);
  display: flex;
  justify-content: center;
}
```

### 2.6 테이블 (Tables)

데이터를 행과 열로 구성하여 표시하는 컴포넌트입니다.

#### 변형

| 변형 | 용도 | 시각적 특징 |
|------|------|------------|
| Standard | 기본 데이터 표시 | 기본 그리드 레이아웃 |
| Dense | 많은 데이터 표시 | 좁은 패딩, 작은 폰트 |
| Striped | 행 구분 강화 | 얼터네이팅 행 배경색 |
| Hoverable | 행 상호작용 | 호버 시 행 배경색 변경 |
| Bordered | 셀 구분 강화 | 모든 셀에 테두리 적용 |

#### 구성 요소

| 요소 | 용도 | 스타일 |
|------|------|--------|
| Header | 열 제목 | 굵은 폰트, 배경색 구분 |
| Row | 데이터 행 | 호버 효과, 선택 강조 |
| Cell | 개별 데이터 셀 | 정렬(텍스트 좌측, 숫자 우측) |
| Footer | 요약, 페이징 | 상단 경계선, 요약 정보 |
| Empty State | 데이터 없음 표시 | 안내 메시지, 일러스트레이션 |

#### HTML/CSS 예시 (Standard Table)

```html
<div class="table-container">
  <table class="table table-standard">
    <thead>
      <tr>
        <th>이름</th>
        <th>이메일</th>
        <th>상태</th>
        <th>마지막 로그인</th>
        <th>액션</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>홍길동</td>
        <td>hong@example.com</td>
        <td><span class="badge badge-success">활성</span></td>
        <td>2023-05-11 14:30</td>
        <td>
          <button class="btn btn-icon btn-small">
            <i class="icon icon-edit"></i>
          </button>
          <button class="btn btn-icon btn-small">
            <i class="icon icon-delete"></i>
          </button>
        </td>
      </tr>
      <tr>
        <td>김철수</td>
        <td>kim@example.com</td>
        <td><span class="badge badge-warning">대기</span></td>
        <td>2023-05-10 09:15</td>
        <td>
          <button class="btn btn-icon btn-small">
            <i class="icon icon-edit"></i>
          </button>
          <button class="btn btn-icon btn-small">
            <i class="icon icon-delete"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

```css
.table-container {
  width: 100%;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table thead {
  background-color: var(--surface-dark-elevated);
}

.table th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--border-dark);
}

.table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-dark);
}

.table tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.03);
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.badge-success {
  background-color: rgba(0, 200, 150, 0.15);
  color: var(--color-success);
}

.badge-warning {
  background-color: rgba(255, 184, 0, 0.15);
  color: var(--color-warning);
}
```

### 2.7 알림 및 메시지 (Notifications & Messages)

사용자에게 정보, 피드백, 경고를 제공하는 컴포넌트입니다.

#### 변형

| 변형 | 용도 | 시각적 특징 |
|------|------|------------|
| Toast | 일시적 알림 | 일정 시간 후 사라짐, 모서리 위치 |
| Alert | 중요한 정보/경고 | 페이지 내 인라인, 구분된 배경 |
| Banner | 전체 앱 알림 | 페이지 상단 전체 너비, 고정 가능 |
| Snackbar | 작업 결과 알림 | 화면 하단 중앙, 간결한 메시지 |
| Tooltip | 요소 설명 | 호버/포커스 시 표시, 작은 팁 |

#### 상태 유형

| 상태 | 용도 | 시각적 특징 |
|------|------|------------|
| Info | 일반 정보 제공 | Info 색상, 정보 아이콘 |
| Success | 성공 확인 | Success 색상, 체크 아이콘 |
| Warning | 주의 필요 | Warning 색상, 느낌표 아이콘 |
| Error | 오류/실패 | Error 색상, X 아이콘 |

#### HTML/CSS 예시 (Alert)

```html
<div class="alert alert-warning">
  <div class="alert-icon">
    <i class="icon icon-warning"></i>
  </div>
  <div class="alert-content">
    <div class="alert-title">주의</div>
    <div class="alert-message">서버에 연결되지 않았습니다. 네트워크 상태를 확인하세요.</div>
  </div>
  <button class="alert-close" aria-label="닫기">
    <i class="icon icon-close"></i>
  </button>
</div>
```

```css
.alert {
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 16px;
}

.alert-warning {
  background-color: rgba(255, 184, 0, 0.1);
  border-left: 4px solid var(--color-warning);
}

.alert-icon {
  margin-right: 12px;
  color: var(--color-warning);
  flex-shrink: 0;
}

.alert-content {
  flex-grow: 1;
}

.alert-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.alert-message {
  color: var(--text-secondary);
}

.alert-close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  flex-shrink: 0;
  margin-left: 12px;
}
```

### 2.8 폼 요소 (Form Elements)

입력 필드 외에 다양한 사용자 입력을 받는 컴포넌트입니다.

#### 체크박스 (Checkbox)

```html
<label class="checkbox">
  <input type="checkbox" class="checkbox-input">
  <span class="checkbox-icon"></span>
  <span class="checkbox-label">옵션 텍스트</span>
</label>
```

```css
.checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-icon {
  height: 18px;
  width: 18px;
  background-color: var(--surface-dark);
  border: 1px solid var(--border-dark);
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
}

.checkbox-input:checked ~ .checkbox-icon {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox-input:checked ~ .checkbox-icon:after {
  content: '';
  position: absolute;
  left: 6px;
  top: 3px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-label {
  user-select: none;
}
```

#### 라디오 버튼 (Radio Button)

```html
<label class="radio">
  <input type="radio" name="option" class="radio-input">
  <span class="radio-icon"></span>
  <span class="radio-label">옵션 1</span>
</label>
```

```css
.radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-icon {
  height: 18px;
  width: 18px;
  background-color: var(--surface-dark);
  border: 1px solid var(--border-dark);
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
}

.radio-input:checked ~ .radio-icon {
  border-color: var(--color-primary);
}

.radio-input:checked ~ .radio-icon:after {
  content: '';
  position: absolute;
  left: 4px;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-primary);
}

.radio-label {
  user-select: none;
}
```

#### 토글 스위치 (Toggle Switch)

```html
<label class="switch">
  <input type="checkbox" class="switch-input">
  <span class="switch-slider"></span>
  <span class="switch-label">알림 활성화</span>
</label>
```

```css
.switch {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.switch-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.switch-slider {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  background-color: var(--surface-dark);
  border-radius: 11px;
  margin-right: 8px;
  transition: 0.2s;
}

.switch-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  border-radius: 50%;
  transition: 0.2s;
}

.switch-input:checked ~ .switch-slider {
  background-color: var(--color-primary);
}

.switch-input:checked ~ .switch-slider:before {
  transform: translateX(18px);
}

.switch-label {
  user-select: none;
}
```

## 3. 레이아웃 시스템

### 3.1 그리드 시스템

12 컬럼 그리드 시스템을 사용하여 콘텐츠를 정렬하고 배치합니다.

```html
<div class="container">
  <div class="row">
    <div class="col-4">4 컬럼 영역</div>
    <div class="col-8">8 컬럼 영역</div>
  </div>
  <div class="row">
    <div class="col-6">6 컬럼 영역</div>
    <div class="col-6">6 컬럼 영역</div>
  </div>
</div>
```

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, 
.col-7, .col-8, .col-9, .col-10, .col-11, .col-12 {
  padding: 0 8px;
  box-sizing: border-box;
}

.col-1 { width: 8.33%; }
.col-2 { width: 16.66%; }
.col-3 { width: 25%; }
.col-4 { width: 33.33%; }
.col-5 { width: 41.66%; }
.col-6 { width: 50%; }
.col-7 { width: 58.33%; }
.col-8 { width: 66.66%; }
.col-9 { width: 75%; }
.col-10 { width: 83.33%; }
.col-11 { width: 91.66%; }
.col-12 { width: 100%; }
```

### 3.2 유연한 레이아웃 (Flexible Layouts)

다양한 화면 크기와 기기에 적응하는 유연한 레이아웃 컴포넌트입니다.

#### 반응형 분할 패널 (Responsive Split Panels)

```html
<div class="split-layout">
  <div class="split-primary">
    <div class="panel">주요 콘텐츠</div>
  </div>
  <div class="split-secondary">
    <div class="panel">보조 콘텐츠</div>
  </div>
</div>
```

```css
.split-layout {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
  height: 100%;
}

.split-primary, .split-secondary {
  padding: 0 8px;
  box-sizing: border-box;
}

.split-primary {
  flex: 3;
  min-width: 300px;
}

.split-secondary {
  flex: 1;
  min-width: 250px;
}

.panel {
  background-color: var(--surface-dark);
  border-radius: 8px;
  height: 100%;
  padding: 16px;
}

@media (max-width: 768px) {
  .split-layout {
    flex-direction: column;
  }
  
  .split-primary, .split-secondary {
    width: 100%;
    flex: auto;
  }
  
  .split-secondary {
    margin-top: 16px;
  }
}
```

### 3.3 앱 레이아웃 (App Layout)

전체 애플리케이션 레이아웃 구조를 정의합니다.

```html
<div class="app-layout">
  <nav class="app-sidebar">사이드바 내비게이션</nav>
  <div class="app-main">
    <header class="app-header">
      <h1 class="app-title">페이지 제목</h1>
      <div class="app-actions">헤더 액션</div>
    </header>
    <main class="app-content">
      <div class="container">메인 콘텐츠</div>
    </main>
    <footer class="app-footer">
      <div class="container">푸터 콘텐츠</div>
    </footer>
  </div>
</div>
```

```css
.app-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.app-sidebar {
  width: 240px;
  height: 100%;
  flex-shrink: 0;
  overflow-y: auto;
}

.app-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-header {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid var(--border-dark);
  background-color: var(--surface-dark);
}

.app-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.app-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 24px 0;
}

.app-footer {
  height: 48px;
  border-top: 1px solid var(--border-dark);
  display: flex;
  align-items: center;
  background-color: var(--surface-dark);
}

@media (max-width: 768px) {
  .app-sidebar {
    position: fixed;
    left: -240px;
    z-index: 1000;
    transition: left 0.3s ease-in-out;
  }
  
  .app-sidebar.open {
    left: 0;
  }
}
```

## 4. 패턴 및 가이드라인

### 4.1 반응형 디자인 패턴

다양한 화면 크기에서 일관된 사용자 경험을 제공하기 위한 패턴입니다.

#### 브레이크포인트

| 이름 | 크기 | 대상 기기 |
|------|------|-----------|
| xs | < 576px | 작은 모바일 |
| sm | >= 576px | 모바일 |
| md | >= 768px | 태블릿 |
| lg | >= 992px | 노트북 |
| xl | >= 1200px | 데스크탑 |
| xxl | >= 1400px | 대형 디스플레이 |

#### 반응형 조정 패턴

1. **컬럼 재배치**: 화면 크기에 따라 그리드 컬럼 구조 변경
2. **스택 변환**: 수평 레이아웃을 수직 스택으로 변환
3. **요소 크기 조정**: 화면 크기에 비례하여 요소 크기 조정
4. **콘텐츠 우선순위**: 작은 화면에서 중요한 콘텐츠만 표시

### 4.2 상태 관리 패턴

다양한 컴포넌트 상태를 관리하는 일관된 패턴을 제공합니다.

1. **로딩 상태**: 스켈레톤 로더 또는 스피너 표시
2. **빈 상태**: 빈 데이터에 대한 친숙한 메시지와 안내
3. **오류 상태**: 명확한 오류 메시지와 복구 옵션 제공
4. **성공 상태**: 작업 완료 확인 및 다음 단계 안내

### 4.3 접근성 가이드라인

모든 사용자가 애플리케이션을 사용할 수 있도록 하는 가이드라인입니다.

1. **키보드 접근성**: 모든 상호작용 요소는 키보드로 접근 및 조작 가능
2. **스크린 리더 호환성**: 적절한 ARIA 속성과 의미 있는 텍스트 제공
3. **색상 대비**: WCAG AA 표준(최소 4.5:1 대비)을 충족하는 색상 사용
4. **텍스트 크기**: 가독성을 위한 적절한 텍스트 크기 및 행간 유지
5. **포커스 표시기**: 키보드 포커스 위치를 명확하게 표시

## 5. 구현 가이드

### 5.1 CSS 변수 시스템

디자인 토큰을 CSS 변수로 구현하여 일관성과 유지보수성을 높입니다.

```css
:root {
  /* 색상 */
  --color-primary: #00B9AE;
  --color-primary-light: #33CABE;
  --color-primary-dark: #008F87;
  
  --color-success: #00C896;
  --color-warning: #FFB800;
  --color-error: #FF4D4D;
  --color-info: #0088FF;
  
  /* 배경색 */
  --background-dark: #121212;
  --surface-dark: #1E1E1E;
  --surface-dark-elevated: #2C2C2C;
  --border-dark: #333333;
  
  /* 텍스트 색상 */
  --text-primary: #FFFFFF;
  --text-secondary: #AAAAAA;
  --text-disabled: #666666;
  
  /* 타이포그래피 */
  --font-h1: 24px;
  --font-h2: 20px;
  --font-h3: 18px;
  --font-h4: 16px;
  --font-body: 14px;
  --font-small: 12px;
  
  /* 스페이싱 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* 그림자 */
  --shadow-low: 0 2px 4px rgba(0, 0, 0, 0.1);
  --shadow-medium: 0 4px 8px rgba(0, 0, 0, 0.15);
  --shadow-high: 0 10px 20px rgba(0, 0, 0, 0.2);
  
  /* 애니메이션 */
  --transition-fast: 100ms ease-out;
  --transition-normal: 200ms ease-in-out;
  --transition-slow: 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
  
  /* 레이아웃 */
  --sidebar-width: 240px;
  --header-height: 64px;
  --footer-height: 48px;
  --border-radius: 6px;
}
```

### 5.2 컴포넌트 변환

디자인 시스템을 React 컴포넌트로 구현하는 예시입니다.

#### 버튼 컴포넌트 예시

```jsx
import React from 'react';
import './Button.css';

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  icon,
  disabled = false,
  loading = false,
  onClick,
  ...props
}) => {
  const classNames = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    loading ? 'btn-loading' : '',
    icon && !children ? 'btn-icon' : ''
  ].filter(Boolean).join(' ');
  
  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="btn-spinner"></span>}
      {icon && <span className="btn-icon">{icon}</span>}
      {children && <span className="btn-text">{children}</span>}
    </button>
  );
};

export default Button;
```

### 5.3 테스트 및 검증

디자인 시스템 컴포넌트의 테스트 및 검증 방법입니다.

1. **접근성 테스트**: axe, WAVE와 같은 도구로 접근성 검증
2. **반응형 테스트**: 다양한 화면 크기에서 컴포넌트 렌더링 검증
3. **크로스 브라우저 테스트**: 주요 브라우저에서 일관된 렌더링 확인
4. **사용성 테스트**: 실제 사용자와 함께 사용성 테스트 수행

## 6. 유지 관리 및 확장

### 6.1 문서화 가이드라인

1. **목적과 사용 사례**: 각 컴포넌트의 목적과 사용 사례 설명
2. **변형 및 옵션**: 지원되는 모든 변형과 속성 나열
3. **코드 예시**: 다양한 구성의 사용 예시 제공
4. **접근성 고려사항**: 컴포넌트별 접근성 요구사항 설명
5. **최신 상태 유지**: 컴포넌트 변경시 문서 함께 업데이트

### 6.2 확장 전략

1. **모듈화**: 컴포넌트를 독립적인 모듈로 유지하여 재사용성 높이기
2. **템플릿 패턴**: 공통 컴포넌트 조합을 템플릿으로 패턴화
3. **버전 관리**: 디자인 시스템의 체계적인 버전 관리
4. **피드백 루프**: 사용자 피드백을 수집하여 시스템 개선에 활용

## 7. 결론

데스크탑 컨트롤러 서버 애플리케이션의 컴포넌트 디자인 시스템은 일관된 사용자 경험과 개발 효율성을 제공합니다. 이 문서에 정의된 컴포넌트와 패턴을 통해 시각적으로 통일되고 사용하기 쉬운 인터페이스를 구현할 수 있습니다.

컴포넌트 디자인 시스템은 계속해서 발전하는 문서로, 애플리케이션의 요구사항과 사용자 피드백에 따라 정기적으로 업데이트되어야 합니다. 모든 팀 구성원은 이 가이드라인을 따르고 개선 사항을 제안하는 것이 권장됩니다.
