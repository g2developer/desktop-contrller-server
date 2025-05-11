import React, { useState } from 'react';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import ConnectionManagement from './pages/ConnectionManagement';
import CommandMonitoring from './pages/CommandMonitoring';
import Settings from './pages/Settings';
import './styles/global.css';

/**
 * 애플리케이션 루트 컴포넌트
 * 레이아웃 및 라우팅을 관리합니다.
 */
function App() {
  // 간단한 라우팅 구현 (실제 앱에서는 react-router 사용 권장)
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  // 페이지 컴포넌트 매핑
  const pages = {
    dashboard: <Dashboard />,
    users: <UserManagement />,
    connections: <ConnectionManagement />,
    commands: <CommandMonitoring />,
    settings: <Settings />
  };
  
  // 네비게이션 핸들러
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <AppLayout onNavigate={handleNavigation}>
      {pages[currentPage] || pages.dashboard}
    </AppLayout>
  );
}

export default App;