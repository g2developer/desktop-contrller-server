# 색상 시스템 및 타이포그래피 가이드

## 1. 색상 시스템

### 기본 팔레트

#### 주요 색상 (Primary Colors)

| 색상명 | HEX 코드 | RGB | 용도 |
|--------|----------|-----|------|
| Primary | `#00B9AE` | rgb(0, 185, 174) | 주요 브랜드 색상, 주요 액션 버튼, 강조 요소 |
| Primary Light | `#33CABE` | rgb(51, 202, 190) | 호버 상태, 보조 강조 요소 |
| Primary Dark | `#008F87` | rgb(0, 143, 135) | 클릭 상태, 강조 텍스트 |

#### 중립 색상 (Neutral Colors) - 다크 테마

| 색상명 | HEX 코드 | RGB | 용도 |
|--------|----------|-----|------|
| Background Dark | `#121212` | rgb(18, 18, 18) | 배경 색상 |
| Surface Dark | `#1E1E1E` | rgb(30, 30, 30) | 카드, 컨테이너 배경 |
| Surface Dark Elevated | `#2C2C2C` | rgb(44, 44, 44) | 상승된 요소 (모달, 메뉴 등) |
| Border Dark | `#333333` | rgb(51, 51, 51) | 경계선, 구분선 |
| Text Primary | `#FFFFFF` | rgb(255, 255, 255) | 주요 텍스트 |
| Text Secondary | `#AAAAAA` | rgb(170, 170, 170) | 보조 텍스트 |
| Text Disabled | `#666666` | rgb(102, 102, 102) | 비활성화된 텍스트 |

#### 중립 색상 (Neutral Colors) - 라이트 테마

| 색상명 | HEX 코드 | RGB | 용도 |
|--------|----------|-----|------|
| Background Light | `#F8F9FA` | rgb(248, 249, 250) | 배경 색상 |
| Surface Light | `#FFFFFF` | rgb(255, 255, 255) | 카드, 컨테이너 배경 |
| Surface Light Elevated | `#FFFFFF` | rgb(255, 255, 255) | 상승된 요소 (그림자로 구분) |
| Border Light | `#EEEEEE` | rgb(238, 238, 238) | 경계선, 구분선 |
| Text Primary Light | `#212121` | rgb(33, 33, 33) | 주요 텍스트 |
| Text Secondary Light | `#666666` | rgb(102, 102, 102) | 보조 텍스트 |
| Text Disabled Light | `#AAAAAA` | rgb(170, 170, 170) | 비활성화된 텍스트 |

#### 상태 색상 (Status Colors)

| 색상명 | HEX 코드 | RGB | 용도 |
|--------|----------|-----|------|
| Success | `#00C896` | rgb(0, 200, 150) | 성공, 연결됨, 정상 상태 |
| Warning | `#FFB800` | rgb(255, 184, 0) | 경고, 주의 필요 상태 |
| Error | `#FF4D4D` | rgb(255, 77, 77) | 오류, 실패, 위험 상태 |
| Info | `#0088FF` | rgb(0, 136, 255) | 정보, 알림 |
| Offline | `#888888` | rgb(136, 136, 136) | 오프라인, 비활성화 상태 |

#### 상태 색상 변형 (Variations)

각 상태 색상은 아래와 같은 변형을 가집니다:

| 변형 | 설명 | 적용 방식 |
|------|------|-----------|
| Base | 기본 상태 색상 | 원래 HEX 값 사용 |
| Light | 배경 및 엑센트용 밝은 버전 | 알파 15% 또는 배경색과 혼합 |
| Dark | 클릭 또는 강조용 어두운 버전 | 원래 색상에서 20% 어둡게 |

### 컴포넌트별 색상 적용

#### 버튼 (Buttons)

| 버튼 타입 | 배경 | 텍스트 | 호버 | 클릭 | 비활성화 |
|-----------|------|--------|------|------|----------|
| Primary | Primary | White | Primary Light | Primary Dark | Primary + 60% 투명도 |
| Secondary | 투명 | Primary | Surface Dark Elevated | Primary Dark | Text Disabled |
| Danger | Error | White | Error Light | Error Dark | Error + 60% 투명도 |
| Success | Success | White | Success Light | Success Dark | Success + 60% 투명도 |

#### 입력 필드 (Input Fields)

| 상태 | 배경 | 테두리 | 텍스트 | 레이블 |
|------|------|--------|--------|--------|
| 기본 | Surface Dark | Border Dark | Text Primary | Text Secondary |
| 포커스 | Surface Dark | Primary | Text Primary | Primary |
| 비활성화 | Surface Dark | Border Dark + 50% 투명도 | Text Disabled | Text Disabled |
| 오류 | Surface Dark | Error | Text Primary | Error |

#### 카드 및 컨테이너 (Cards & Containers)

| 요소 | 배경 | 테두리 | 그림자 |
|------|------|--------|--------|
| 카드 | Surface Dark | Border Dark (옵션) | 0 4px 6px rgba(0, 0, 0, 0.1) |
| 모달 | Surface Dark Elevated | Border Dark (옵션) | 0 10px 25px rgba(0, 0, 0, 0.2) |
| 팝오버 | Surface Dark Elevated | Border Dark | 0 2px 10px rgba(0, 0, 0, 0.1) |
| 메뉴 | Surface Dark Elevated | Border Dark | 0 6px 12px rgba(0, 0, 0, 0.15) |

#### 상태 표시 (Status Indicators)

| 상태 | 아이콘 색상 | 텍스트 색상 | 배경 (선택적) |
|------|-------------|-------------|---------------|
| 연결됨 | Success | Success | Success Light |
| 연결 중 | Warning | Warning | Warning Light |
| 오프라인 | Offline | Text Secondary | 투명 |
| 오류 | Error | Error | Error Light |

### 접근성 고려사항

- 모든 텍스트 색상은 배경에 대해 WCAG AA 표준을 충족하는 대비를 유지합니다 (최소 4.5:1).
- 주요 정보 표시에는 색상 외에도 아이콘, 텍스트 또는 패턴과 같은 추가 시각적 신호를 제공합니다.
- 색맹 사용자를 위해 색상만으로 정보를 구분하지 않습니다.

## 2. 타이포그래피 시스템

### 글꼴 패밀리 (Font Families)

| 용도 | 폰트 | 대체 폰트 |
|------|------|-----------|
| 헤딩 및 UI | Inter | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif |
| 본문 | Inter | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif |
| 코드/기술 정보 | Fira Code | 'JetBrains Mono', 'Roboto Mono', 'Source Code Pro', monospace |

### 텍스트 크기 및 행간 (Text Sizes & Line Heights)

#### 헤딩 (Headings)

| 요소 | 크기 | 행간 | 두께 | 용도 |
|------|------|------|------|------|
| h1 | 24px | 1.2 | 700 | 주요 화면 제목 |
| h2 | 20px | 1.25 | 700 | 섹션 제목 |
| h3 | 18px | 1.3 | 600 | 카드 또는 컴포넌트 제목 |
| h4 | 16px | 1.4 | 600 | 부제목, 강조 텍스트 |
| h5 | 14px | 1.4 | 600 | 작은 제목, 그룹 레이블 |

#### 본문 (Body)

| 요소 | 크기 | 행간 | 두께 | 용도 |
|------|------|------|------|------|
| body-large | 16px | 1.5 | 400 | 주요 본문 텍스트 |
| body | 14px | 1.5 | 400 | 표준 본문 텍스트 |
| body-small | 13px | 1.5 | 400 | 보조 텍스트, 캡션 |
| caption | 12px | 1.4 | 400 | 작은 레이블, 도움말 텍스트 |

#### 특수 텍스트 (Specialized Text)

| 요소 | 크기 | 행간 | 두께 | 용도 |
|------|------|------|------|------|
| code | 14px | 1.5 | 400 | 코드, 기술 정보 |
| data | 14px | 1.4 | 500 | 데이터 값, 메트릭 |
| button | 14px | 1 | 500 | 버튼 텍스트 |
| label | 13px | 1.2 | 500 | 폼 레이블, 필드 레이블 |

### 텍스트 색상 (Text Colors)

#### 다크 테마 텍스트 색상

| 용도 | 색상 | HEX 코드 |
|------|------|----------|
| 기본 텍스트 | Text Primary | #FFFFFF |
| 보조 텍스트 | Text Secondary | #AAAAAA |
| 비활성 텍스트 | Text Disabled | #666666 |
| 링크 텍스트 | Primary | #00B9AE |
| 오류 텍스트 | Error | #FF4D4D |
| 성공 텍스트 | Success | #00C896 |
| 경고 텍스트 | Warning | #FFB800 |

#### 라이트 테마 텍스트 색상

| 용도 | 색상 | HEX 코드 |
|------|------|----------|
| 기본 텍스트 | Text Primary Light | #212121 |
| 보조 텍스트 | Text Secondary Light | #666666 |
| 비활성 텍스트 | Text Disabled Light | #AAAAAA |
| 링크 텍스트 | Primary | #00B9AE |
| 오류 텍스트 | Error | #E62E2E |
| 성공 텍스트 | Success | #00A67B |
| 경고 텍스트 | Warning | #CF9700 |

### 타이포그래피 변형 (Typography Variants)

| 변형 | 설명 | 적용 방식 |
|------|------|-----------|
| Regular | 기본 텍스트 스타일 | 원래 값 사용 |
| Bold | 굵은 텍스트 | font-weight: 700 |
| Semi-bold | 중간 굵기 텍스트 | font-weight: 600 |
| Italic | 기울임꼴 텍스트 | font-style: italic |
| Underline | 밑줄 텍스트 | text-decoration: underline |
| Truncate | 말줄임표로 잘림 | overflow: hidden; text-overflow: ellipsis; white-space: nowrap; |

### 응답형 타이포그래피 (Responsive Typography)

| 브레이크포인트 | h1 | h2 | h3 | body | 적용 방식 |
|---------------|----|----|----|----|-----------|
| 기본 (모바일) | 20px | 18px | 16px | 14px | 기본값 |
| >= 768px (태블릿) | 22px | 19px | 17px | 14px | 미디어 쿼리 |
| >= 1200px (데스크탑) | 24px | 20px | 18px | 14px | 미디어 쿼리 |

### 타이포그래피 가이드라인

1. **일관성 유지**
   - 정의된 크기 체계를 엄격히 따라 일관된 시각적 계층 구조 유지
   - 지정된 폰트 패밀리만 사용

2. **가독성 최적화**
   - 긴 텍스트 블록은 body 또는 body-large 사용
   - 줄 길이는 이상적으로 45-75자 유지
   - 중요 정보는 굵게 처리하여 강조

3. **계층 구조 확립**
   - 헤딩 레벨을 순차적으로 사용하여 명확한 정보 계층 구조 확립
   - 중요도에 따라 텍스트 크기 및 두께 차별화

4. **국제화 고려**
   - 텍스트 확장을 고려한 여유 공간 확보 (번역 시 일부 언어는 최대 40% 확장될 수 있음)
   - 다양한 언어 지원을 위한 유니코드 호환 폰트 사용

### CSS 구현 예시

```css
/* 폰트 가져오기 */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

/* 기본 타이포그래피 설정 */
:root {
  /* 다크 테마 색상 */
  --text-primary: #FFFFFF;
  --text-secondary: #AAAAAA;
  --text-disabled: #666666;
  
  /* 라이트 테마 색상 */
  --text-primary-light: #212121;
  --text-secondary-light: #666666;
  --text-disabled-light: #AAAAAA;
  
  /* 기능 색상 */
  --text-link: #00B9AE;
  --text-error: #FF4D4D;
  --text-success: #00C896;
  --text-warning: #FFB800;
  
  /* 폰트 크기 */
  --font-h1: 24px;
  --font-h2: 20px;
  --font-h3: 18px;
  --font-h4: 16px;
  --font-h5: 14px;
  --font-body-large: 16px;
  --font-body: 14px;
  --font-body-small: 13px;
  --font-caption: 12px;
  
  /* 행간 */
  --line-height-heading: 1.2;
  --line-height-body: 1.5;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: var(--font-body);
  line-height: var(--line-height-body);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 헤딩 스타일 */
h1, .h1 {
  font-size: var(--font-h1);
  font-weight: 700;
  line-height: var(--line-height-heading);
  margin-bottom: 0.5em;
}

h2, .h2 {
  font-size: var(--font-h2);
  font-weight: 700;
  line-height: var(--line-height-heading);
  margin-bottom: 0.5em;
}

h3, .h3 {
  font-size: var(--font-h3);
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.5em;
}

h4, .h4 {
  font-size: var(--font-h4);
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.5em;
}

h5, .h5 {
  font-size: var(--font-h5);
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.5em;
}

/* 본문 스타일 */
.body-large {
  font-size: var(--font-body-large);
  line-height: var(--line-height-body);
}

.body-small {
  font-size: var(--font-body-small);
  line-height: var(--line-height-body);
}

.caption {
  font-size: var(--font-caption);
  line-height: 1.4;
}

/* 특수 텍스트 스타일 */
code, .code {
  font-family: 'Fira Code', 'JetBrains Mono', 'Roboto Mono', 'Source Code Pro', monospace;
  font-size: var(--font-body);
  line-height: var(--line-height-body);
}

.data {
  font-size: var(--font-body);
  font-weight: 500;
  line-height: 1.4;
}

.button-text {
  font-size: var(--font-body);
  font-weight: 500;
  line-height: 1;
}

.label {
  font-size: var(--font-body-small);
  font-weight: 500;
  line-height: 1.2;
}

/* 텍스트 변형 */
.text-secondary {
  color: var(--text-secondary);
}

.text-disabled {
  color: var(--text-disabled);
}

.text-link {
  color: var(--text-link);
  text-decoration: none;
}

.text-link:hover {
  text-decoration: underline;
}

.text-error {
  color: var(--text-error);
}

.text-success {
  color: var(--text-success);
}

.text-warning {
  color: var(--text-warning);
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 반응형 타이포그래피 */
@media (max-width: 767px) {
  :root {
    --font-h1: 20px;
    --font-h2: 18px;
    --font-h3: 16px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  :root {
    --font-h1: 22px;
    --font-h2: 19px;
    --font-h3: 17px;
  }
}

/* 라이트 테마 설정 */
.light-theme {
  color: var(--text-primary-light);
}

.light-theme .text-secondary {
  color: var(--text-secondary-light);
}

.light-theme .text-disabled {
  color: var(--text-disabled-light);
}
```
