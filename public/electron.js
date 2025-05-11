const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const Store = require('electron-store');

// 설정 저장을 위한 저장소 초기화
const store = new Store();

// 메인 윈도우 객체를 전역 참조로 유지
// 그렇지 않으면 JavaScript 가비지 컬렉션이 실행될 때 창이 자동으로 닫힐 수 있습니다.
let mainWindow;

// 윈도우 생성 함수
function createWindow() {
  // 기본 윈도우 설정 로드
  const windowConfig = store.get('windowConfig', {
    width: 1280,
    height: 720,
    x: undefined,
    y: undefined
  });

  // 브라우저 윈도우 생성
  mainWindow = new BrowserWindow({
    width: windowConfig.width,
    height: windowConfig.height,
    x: windowConfig.x,
    y: windowConfig.y,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    icon: path.join(__dirname, isDev ? '../public/favicon.ico' : 'favicon.ico'),
    show: false
  });

  // 로드할 URL 설정 (개발 모드 또는 프로덕션 모드)
  const startUrl = isDev
    ? 'http://localhost:3001'  // 포트 3001로 변경
    : `file://${path.join(__dirname, '../build/index.html')}`;

  // URL 로드
  mainWindow.loadURL(startUrl);

  // 개발자 도구 열기 (개발 모드인 경우에만)
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // 윈도우가 준비되면 표시
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // 윈도우가 닫힐 때 윈도우 설정 저장
  mainWindow.on('close', () => {
    const { width, height } = mainWindow.getBounds();
    store.set('windowConfig', {
      width,
      height,
      x: mainWindow.getPosition()[0],
      y: mainWindow.getPosition()[1]
    });
  });

  // 윈도우가 닫힐 때 null로 설정
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Electron이 초기화되고 준비되면 윈도우 생성
app.whenReady().then(createWindow);

// 모든 윈도우가 닫히면 앱 종료 (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// macOS에서는 dock 아이콘 클릭 시 열린 윈도우가 없으면 새로 생성
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// 서버 상태 및 설정과 관련된 IPC 이벤트 처리
ipcMain.on('start-server', (event) => {
  // 서버 시작 로직 구현 (추후 개발)
  event.reply('server-status', { running: true });
});

ipcMain.on('stop-server', (event) => {
  // 서버 중지 로직 구현 (추후 개발)
  event.reply('server-status', { running: false });
});

ipcMain.on('get-settings', (event) => {
  // 설정 불러오기
  const settings = store.get('settings', {
    server: {
      port: '8003',
      autoStart: false,
      maxConnections: 10,
      logLevel: 'medium'
    },
    capture: {
      captureArea: { x: 100, y: 200, width: 800, height: 600 },
      captureQuality: 75,
      autoCapture: true,
      captureOnChange: false,
      captureInterval: 3
    },
    claude: {
      appPath: 'C:\\Program Files\\Claude\\Claude.exe',
      autoEnter: true,
      autoScroll: true,
      autoClickButtons: false,
      detectResponse: true,
      waitTime: 5
    }
  });
  
  event.reply('settings', settings);
});

ipcMain.on('save-settings', (event, settingsData) => {
  // 설정 저장
  store.set('settings', settingsData);
  event.reply('settings-saved', true);
});