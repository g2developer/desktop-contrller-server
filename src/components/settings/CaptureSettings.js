import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './SettingsPanel.css';

/**
 * 캡처 설정 패널 컴포넌트
 * 캡처 영역, 캡처 품질, 자동 캡처 설정 등을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {Object} props.settings - 현재 설정 값
 * @param {function} props.onSave - 설정 저장 핸들러
 */
const CaptureSettings = ({ settings = {}, onSave }) => {
  // 기본 설정 값
  const defaultSettings = {
    captureArea: { x: 0, y: 0, width: 800, height: 600 },
    captureQuality: 75,
    autoCapture: false,
    captureOnChange: false,
    captureInterval: 3
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
      [name]: type === 'checkbox' ? checked : 
               type === 'range' ? parseInt(value, 10) : value
    }));
  };
  
  // 영역 선택 핸들러
  const handleSelectArea = () => {
    // 실제 구현에서는 화면 영역 선택 도구 호출
    alert('캡처 영역 선택 기능은 실제 구현 시 추가될 예정입니다.');
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
  
  // 캡처 영역 문자열 표시
  const captureAreaString = `X: ${formData.captureArea.x}, Y: ${formData.captureArea.y}, 
                            너비: ${formData.captureArea.width}, 높이: ${formData.captureArea.height}`;
  
  return (
    <Card title="캡처 설정">
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="settings-section">
          <div className="settings-item">
            <label className="settings-label">캡처 영역</label>
            <div className="capture-area-preview">
              <div className="capture-area-info">
                {captureAreaString}
              </div>
              <Button 
                variant="secondary" 
                size="small" 
                onClick={handleSelectArea}
              >
                영역 선택
              </Button>
            </div>
            <div className="settings-help">
              클로드 앱의 AI 응답 영역만 선택하세요.
            </div>
          </div>
          
          <div className="settings-item">
            <label className="settings-label">캡처 품질</label>
            <div className="settings-slider">
              <span className="slider-min-label">낮음</span>
              <input
                type="range"
                name="captureQuality"
                min="1"
                max="100"
                value={formData.captureQuality}
                onChange={handleChange}
              />
              <span className="slider-max-label">높음</span>
              <span className="slider-value">{formData.captureQuality}%</span>
            </div>
            <div className="settings-help">
              높은 품질일수록 이미지 크기가 커집니다.
            </div>
          </div>
          
          <div className="settings-item">
            <label className="settings-label">자동 캡처</label>
            <div className="settings-toggle">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="autoCapture"
                  checked={formData.autoCapture}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                명령 실행 후 자동 캡처
              </span>
            </div>
          </div>
          
          <div className="settings-item">
            <div className="settings-toggle">
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="captureOnChange"
                  checked={formData.captureOnChange}
                  onChange={handleChange}
                />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">
                변경 감지 시 자동 캡처
              </span>
            </div>
          </div>
          
          <div className={`settings-item ${!formData.autoCapture && !formData.captureOnChange ? 'settings-item-disabled' : ''}`}>
            <label htmlFor="captureInterval" className="settings-label">캡처 간격 (초)</label>
            <input
              type="number"
              id="captureInterval"
              name="captureInterval"
              className="settings-input settings-input-small"
              value={formData.captureInterval}
              onChange={handleChange}
              min="1"
              max="30"
              disabled={!formData.autoCapture && !formData.captureOnChange}
            />
            <div className="settings-help">
              자동 캡처 활성화 시 캡처 사이의 대기 시간
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

export default CaptureSettings;