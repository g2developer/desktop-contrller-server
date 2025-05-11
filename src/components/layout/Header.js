import React from 'react';
import './Header.css';

/**
 * 애플리케이션 헤더 컴포넌트
 * 현재 페이지 제목, 검색, 사용자 메뉴 등을 포함합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {boolean} props.sidebarCollapsed - 사이드바 축소 여부
 * @param {function} props.onToggleSidebar - 사이드바 토글 핸들러
 * @param {function} props.onToggleMobileMenu - 모바일 메뉴 토글 핸들러
 * @param {string} props.pageTitle - 현재 페이지 제목
 */
const Header = ({ 
  sidebarCollapsed, 
  onToggleSidebar, 
  onToggleMobileMenu,
  pageTitle = 'dashboard'
}) => {
  // 페이지 제목 포맷팅
  const formatPageTitle = (title) => {
    switch (title) {
      case 'dashboard':
        return '대시보드';
      case 'users':
        return '사용자 관리';
      case 'connections':
        return '연결 관리';
      case 'commands':
        return '명령 모니터링';
      case 'settings':
        return '설정';
      default:
        return '데스크탑 컨트롤러';
    }
  };
  
  return (
    <header className="app-header">
      <div className="header-left">
        <button 
          className="mobile-menu-toggle hidden-desktop hidden-tablet"
          onClick={onToggleMobileMenu}
          aria-label="메뉴 토글"
        >
          ☰
        </button>
        
        <button 
          className="sidebar-toggle hidden-mobile"
          onClick={onToggleSidebar}
          aria-label={sidebarCollapsed ? "사이드바 확장" : "사이드바 축소"}
        >
          {sidebarCollapsed ? '→' : '←'}
        </button>
        
        <h1 className="page-title">{formatPageTitle(pageTitle)}</h1>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="검색..." />
          <button className="search-button" aria-label="검색">🔍</button>
        </div>
      </div>
      
      <div className="header-right">
        <div className="header-actions">
          <button className="action-button" aria-label="알림">
            🔔
          </button>
          <button className="action-button" aria-label="도움말">
            ?
          </button>
        </div>
        
        <div className="user-menu">
          <button className="user-menu-button">
            <span className="user-avatar">👤</span>
            <span className="user-name hidden-mobile">관리자</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;