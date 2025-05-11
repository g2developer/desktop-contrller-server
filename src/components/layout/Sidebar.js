import React from 'react';
import './Sidebar.css';

/**
 * 애플리케이션 사이드바 내비게이션 컴포넌트
 * 주요 섹션으로 이동할 수 있는 내비게이션 메뉴를 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {boolean} props.collapsed - 사이드바 축소 여부
 * @param {boolean} props.mobileOpen - 모바일 사이드바 열림 여부
 * @param {function} props.onToggleCollapse - 사이드바 축소/확장 토글 핸들러
 * @param {function} props.onCloseMobile - 모바일 사이드바 닫기 핸들러
 * @param {string} props.currentPage - 현재 활성 페이지
 * @param {function} props.onNavigate - 내비게이션 핸들러
 */
const Sidebar = ({ 
  collapsed, 
  mobileOpen, 
  onToggleCollapse, 
  onCloseMobile,
  currentPage = 'dashboard',
  onNavigate
}) => {
  const sidebarClass = `sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`;

  // 네비게이션 항목 정의
  const navItems = [
    { icon: '📊', label: '대시보드', path: 'dashboard', id: 'dashboard' },
    { icon: '👥', label: '사용자 관리', path: 'users', id: 'users' },
    { icon: '🔄', label: '연결 관리', path: 'connections', id: 'connections' },
    { icon: '🤖', label: '명령 모니터링', path: 'commands', id: 'commands' },
    { icon: '⚙️', label: '설정', path: 'settings', id: 'settings' },
  ];
  
  // 네비게이션 핸들러
  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate && onNavigate(page);
  };

  return (
    <>
      {/* 모바일 오버레이 */}
      {mobileOpen && <div className="sidebar-overlay" onClick={onCloseMobile}></div>}
      
      <aside className={sidebarClass}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🎮</span>
            {!collapsed && <span className="logo-text">Desktop Controller</span>}
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <a 
                  href="#" 
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!collapsed && <span className="nav-label">{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button 
            className="collapse-button" 
            onClick={onToggleCollapse}
            aria-label={collapsed ? "확장" : "축소"}
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;