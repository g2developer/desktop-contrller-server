import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './AppLayout.css';

/**
 * 애플리케이션의 기본 레이아웃 컴포넌트
 * 사이드바, 헤더, 콘텐츠 영역을 포함합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {React.ReactNode} props.children - 콘텐츠 영역에 표시될 내용
 * @param {function} props.onNavigate - 내비게이션 핸들러
 */
const AppLayout = ({ children, onNavigate }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 현재 페이지 제목 (실제 구현에서는 상태 또는 prop으로 관리)
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // 네비게이션 핸들러
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false); // 모바일 메뉴 닫기
    onNavigate && onNavigate(page);
  };

  return (
    <div className="app-layout">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        mobileOpen={mobileMenuOpen}
        onToggleCollapse={toggleSidebar}
        onCloseMobile={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigation}
      />
      <div className="app-main">
        <Header 
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={toggleSidebar}
          onToggleMobileMenu={toggleMobileMenu}
          pageTitle={currentPage}
        />
        <main className="app-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;