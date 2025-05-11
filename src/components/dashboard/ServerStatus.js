import React from 'react';
import StatusCard from './StatusCard';
import Button from '../ui/Button';
import './ServerStatus.css';

/**
 * 서버 상태 컴포넌트
 * 현재 서버 실행 상태, 실행 시간, 포트 정보 등을 표시합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {boolean} props.isRunning - 서버 실행 상태
 * @param {string} props.uptime - 서버 실행 시간
 * @param {string} props.port - 서버 포트
 * @param {string} props.ipAddress - 서버 IP 주소
 * @param {function} props.onStartServer - 서버 시작 핸들러
 * @param {function} props.onStopServer - 서버 중지 핸들러
 */
const ServerStatus = ({ 
  isRunning = true, 
  uptime = '2시간 45분', 
  port = '8003', 
  ipAddress = '192.168.1.100',
  onStartServer,
  onStopServer
}) => {
  const statusType = isRunning ? 'success' : 'error';
  const statusIcon = isRunning ? '🟢' : '🔴';
  const statusTitle = '서버 상태';
  
  // 서버 시작/중지 버튼 핸들러
  const handleToggleServer = () => {
    if (isRunning) {
      onStopServer && onStopServer();
    } else {
      onStartServer && onStartServer();
    }
  };
  
  return (
    <StatusCard 
      title={statusTitle}
      icon={statusIcon}
      status={statusType}
      action={
        <Button
          variant={isRunning ? 'danger' : 'success'}
          size="small"
          onClick={handleToggleServer}
        >
          {isRunning ? '중지' : '시작'}
        </Button>
      }
    >
      <div className="server-status-content">
        <div className="status-metric">
          {isRunning ? '실행 중' : '중지됨'}
        </div>
        <div className="status-label">
          현재 서버 상태
        </div>
        
        <div className="status-details">
          <div className="status-detail">
            <span className="status-detail-label">실행 시간:</span>
            <span className="status-detail-value">{uptime}</span>
          </div>
          <div className="status-detail">
            <span className="status-detail-label">포트:</span>
            <span className="status-detail-value">{port}</span>
          </div>
          <div className="status-detail">
            <span className="status-detail-label">IP 주소:</span>
            <span className="status-detail-value">{ipAddress}</span>
          </div>
        </div>
      </div>
    </StatusCard>
  );
};

export default ServerStatus;