import React from 'react';
import './SettingsTabs.css';

/**
 * 설정 탭 컴포넌트
 * 각 설정 섹션 간 전환을 위한 탭 메뉴를 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.activeTab - 현재 활성 탭
 * @param {function} props.onChange - 탭 변경 핸들러
 */
const SettingsTabs = ({ activeTab, onChange }) => {
  const tabs = [
    { id: 'server', label: '서버' },
    { id: 'capture', label: '캡처' },
    { id: 'claude', label: '클로드 앱' }
  ];
  
  return (
    <div className="settings-tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs;