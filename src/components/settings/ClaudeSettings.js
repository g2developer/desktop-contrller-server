import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './SettingsPanel.css';

/**
 * 클로드 앱 설정 패널 컴포넌트
 * 클로드 앱 경로, 명령 전송 설정, 응답 감지 설정 등을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {Object} props.settings - 현재 설정 값
 * @param {function} props.onSave - 설정 저장 핸들러
 */
const ClaudeSettings = ({ settings = {}, onSave }) => {
  // 기본 설정 값
  const defaultSettings = {
    appPath: 'C:\\Program Files\\Claude\\Claude.exe',
    autoEnter: true,
    autoScroll: true,
    autoClickButtons: false,
    detectResponse: true,
    waitTime: 5
  };
  
  // 현재 설정 상태
  const [formData, setFormData] = useState({
    ...defaultSettings,
    ...settings
  });
  
  // 설정 변경 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  // 앱 경로 찾기 핸들러
  const handleBrowseAppPath = () => {
    // 실제 구현에서는 파일 선택 다이얼로그 호출
    alert('파일 선택 다이얼로그는 실제 구현 시 추가될 예정입니다.');
  };
  
  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave && onSave(formData);
  };
  
  // 설정 초기화 핸들러
  const handleReset = () => {
    setFormData(defaultSettings);
  };
  
  return (
    <Card title="클로드 앱 설정">
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="settings-section">
          <div className="settings-item">
            <label htmlFor="appPath" className="settings-label">클로드 앱 경로</label>
            <div className="settings-file-input">
              <input
                type="text"
                id="appPath"
                name="appPath"
                className="settings-input"
                value={formData.appPath}
                onChange={handleChange}
              />
              <Button 
                variant="secondary" 
                size="small" 
                onClick={handleBrowseAppPath}
              >
                찾아보기
              </Button>
            </div>
            <div className="settings-help">
              클로드 데스크탑 앱의 실행 파일 경로
            </div>
          </div>
          
          <div className="settings-item">
            <label className="settings-label">명령 전송 설정</label>
            <div className="settings-toggle">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="autoEnter"
                  checked={formData.autoEnter}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                명령 입력 후 자동 엔터
              </span>
            </div>
          </div>
          
          <div className="settings-item">
            <div className="settings-toggle">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="autoScroll"
                  checked={formData.autoScroll}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                자동 스크롤
              </span>
            </div>
          </div>
          
          <div className="settings-item">
            <div className="settings-toggle">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="autoClickButtons"
                  checked={formData.autoClickButtons}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                버튼 자동 클릭
              </span>
            </div>
            <div className="settings-help">
              '계속', '권한 허용' 등의 버튼 자동 클릭
            </div>
          </div>
          
          <div className="settings-item">
            <label className="settings-label">응답 감지</label>
            <div className="settings-toggle">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="detectResponse"
                  checked={formData.detectResponse}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                응답 완료 인식
              </span>
            </div>
          </div>
          
          <div className={`settings-item ${!formData.detectResponse ? 'settings-item-disabled' : ''}`}>
            <label htmlFor="waitTime" className="settings-label">완료 대기 시간 (초)</label>
            <input
              type="number"
              id="waitTime"
              name="waitTime"
              className="settings-input settings-input-small"
              value={formData.waitTime}
              onChange={handleChange}
              min="1"
              max="60"
              disabled={!formData.detectResponse}
            />
            <div className="settings-help">
              응답 완료 인식 후 추가 대기 시간
            </div>
          </div>
        </div>
        
        <div className="settings-actions">
          <Button variant="secondary" type="button" onClick={handleReset}>
            기본값 복원
          </Button>
          <Button variant="primary" type="submit">
            저장
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ClaudeSettings;