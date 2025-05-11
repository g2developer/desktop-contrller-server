import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './SettingsPanel.css';

/**
 * 서버 설정 패널 컴포넌트
 * 서버 포트, 자동 시작, 연결 제한, 로그 수준 등의 설정을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {Object} props.settings - 현재 설정 값
 * @param {function} props.onSave - 설정 저장 핸들러
 */
const ServerSettings = ({ settings = {}, onSave }) => {
  // 기본 설정 값
  const defaultSettings = {
    port: '8003',
    autoStart: false,
    maxConnections: 10,
    logLevel: 'medium'
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
    <Card title="서버 설정">
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="settings-section">
          <div className="settings-item">
            <label htmlFor="port" className="settings-label">포트 번호</label>
            <input
              type="number"
              id="port"
              name="port"
              className="settings-input settings-input-small"
              value={formData.port}
              onChange={handleChange}
              min="1024"
              max="65535"
            />
            <div className="settings-help">
              서버가 사용할 포트 번호 (1024-65535)
            </div>
          </div>
          
          <div className="settings-item">
            <label className="settings-label">자동 시작</label>
            <div className="settings-toggle">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="autoStart"
                  checked={formData.autoStart}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                애플리케이션 시작 시 서버 자동 실행
              </span>
            </div>
          </div>
          
          <div className="settings-item">
            <label htmlFor="maxConnections" className="settings-label">연결 제한</label>
            <input
              type="number"
              id="maxConnections"
              name="maxConnections"
              className="settings-input settings-input-small"
              value={formData.maxConnections}
              onChange={handleChange}
              min="1"
              max="100"
            />
            <div className="settings-help">
              최대 연결 클라이언트 수 (1-100)
            </div>
          </div>
          
          <div className="settings-item">
            <label className="settings-label">로그 수준</label>
            <div className="settings-radio-group">
              <label className="settings-radio">
                <input
                  type="radio"
                  name="logLevel"
                  value="low"
                  checked={formData.logLevel === 'low'}
                  onChange={handleChange}
                />
                <span className="radio-label">낮음</span>
              </label>
              <label className="settings-radio">
                <input
                  type="radio"
                  name="logLevel"
                  value="medium"
                  checked={formData.logLevel === 'medium'}
                  onChange={handleChange}
                />
                <span className="radio-label">중간</span>
              </label>
              <label className="settings-radio">
                <input
                  type="radio"
                  name="logLevel"
                  value="high"
                  checked={formData.logLevel === 'high'}
                  onChange={handleChange}
                />
                <span className="radio-label">높음</span>
              </label>
              <label className="settings-radio">
                <input
                  type="radio"
                  name="logLevel"
                  value="debug"
                  checked={formData.logLevel === 'debug'}
                  onChange={handleChange}
                />
                <span className="radio-label">디버그</span>
              </label>
            </div>
            <div className="settings-help">
              로그 상세 수준 (높을수록 더 많은 정보 기록)
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

export default ServerSettings;