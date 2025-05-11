import React, { useState } from 'react';
import SettingsTabs from '../components/settings/SettingsTabs';
import ServerSettings from '../components/settings/ServerSettings';
import CaptureSettings from '../components/settings/CaptureSettings';
import ClaudeSettings from '../components/settings/ClaudeSettings';
import './Settings.css';

/**
 * 설정 페이지 컴포넌트
 * 서버, 캡처, 클로드 앱 설정 관리를 제공합니다.
 */
const Settings = () => {
  // 활성 탭 상태
  const [activeTab, setActiveTab] = useState('server');
  
  // 설정 상태 (실제 구현에서는 API 호출로 초기 데이터 로드)
  const [settings, setSettings] = useState({
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
  
  // 설정 저장 핸들러
  const handleSaveServerSettings = (serverSettings) => {
    setSettings(prev => ({
      ...prev,
      server: serverSettings
    }));
    // 실제 구현에서는 API 호출로 설정 저장
    alert('서버 설정이 저장되었습니다.');
  };
  
  const handleSaveCaptureSettings = (captureSettings) => {
    setSettings(prev => ({
      ...prev,
      capture: captureSettings
    }));
    // 실제 구현에서는 API 호출로 설정 저장
    alert('캡처 설정이 저장되었습니다.');
  };
  
  const handleSaveClaudeSettings = (claudeSettings) => {
    setSettings(prev => ({
      ...prev,
      claude: claudeSettings
    }));
    // 실제 구현에서는 API 호출로 설정 저장
    alert('클로드 앱 설정이 저장되었습니다.');
  };
  
  // 활성 탭 변경 핸들러
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // 현재 활성 탭에 따른 설정 패널 렌더링
  const renderSettingsPanel = () => {
    switch (activeTab) {
      case 'server':
        return (
          <ServerSettings 
            settings={settings.server} 
            onSave={handleSaveServerSettings} 
          />
        );
      case 'capture':
        return (
          <CaptureSettings 
            settings={settings.capture} 
            onSave={handleSaveCaptureSettings} 
          />
        );
      case 'claude':
        return (
          <ClaudeSettings 
            settings={settings.claude} 
            onSave={handleSaveClaudeSettings} 
          />
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>설정</h1>
        <p className="settings-subtitle">
          데스크탑 컨트롤러 서버의 동작을 설정합니다.
        </p>
      </div>
      
      <div className="settings-content">
        <SettingsTabs 
          activeTab={activeTab} 
          onChange={handleTabChange} 
        />
        
        <div className="settings-panel">
          {renderSettingsPanel()}
        </div>
      </div>
    </div>
  );
};

export default Settings;