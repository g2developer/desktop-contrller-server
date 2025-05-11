import React from 'react';
import StatusCard from './StatusCard';
import Button from '../ui/Button';
import './ConnectionInfo.css';

/**
 * 연결 정보 컴포넌트
 * 현재 연결된 클라이언트 수, QR 코드 연결 정보, URL 주소 등을 표시합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.connectedClients - 연결된 클라이언트 수
 * @param {string} props.connectionUrl - 연결 URL
 * @param {number} props.maxClients - 최대 연결 가능 클라이언트 수
 */
const ConnectionInfo = ({ 
  connectedClients = 2, 
  connectionUrl = 'http://192.168.1.100:8003', 
  maxClients = 10
}) => {
  // 연결 상태에 따른 아이콘 및 상태 결정
  let statusType = 'success';
  let statusIcon = '🔌';
  
  if (connectedClients === 0) {
    statusType = 'neutral';
  } else if (connectedClients >= maxClients) {
    statusType = 'warning';
  }
  
  // URL 복사 핸들러
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(connectionUrl)
      .then(() => alert('URL이 클립보드에 복사되었습니다.'))
      .catch(err => console.error('복사 실패:', err));
  };
  
  return (
    <StatusCard 
      title="연결 정보"
      icon={statusIcon}
      status={statusType}
    >
      <div className="connection-info-content">
        <div className="status-metric">
          {connectedClients} / {maxClients}
        </div>
        <div className="status-label">
          연결된 클라이언트
        </div>
        
        <div className="connection-url-container">
          <div className="connection-url-label">연결 URL:</div>
          <div className="connection-url">
            <span className="connection-url-text">{connectionUrl}</span>
            <Button 
              variant="text" 
              size="small" 
              icon="📋"
              onClick={handleCopyUrl}
            >
              복사
            </Button>
          </div>
        </div>
        
        <div className="connection-qr-placeholder">
          <div className="qr-code-area">
            QR 코드
          </div>
          <Button 
            variant="secondary" 
            size="small"
          >
            QR 코드 표시
          </Button>
        </div>
      </div>
    </StatusCard>
  );
};

export default ConnectionInfo;