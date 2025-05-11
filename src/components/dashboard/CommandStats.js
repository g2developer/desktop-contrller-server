import React from 'react';
import StatusCard from './StatusCard';
import './CommandStats.css';

/**
 * 명령 통계 컴포넌트
 * 총 처리된 명령 수, 현재 실행 중인 명령, 마지막 명령 실행 시간 등을 표시합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {number} props.totalCommands - 총 처리된 명령 수
 * @param {number} props.activeCommands - 현재 실행 중인 명령 수
 * @param {string} props.lastCommandTime - 마지막 명령 실행 시간
 * @param {Object} props.commandDistribution - 명령 유형별 분포
 */
const CommandStats = ({ 
  totalCommands = 157, 
  activeCommands = 0, 
  lastCommandTime = '10:15:23',
  commandDistribution = {
    text: 78,
    image: 45,
    data: 34
  }
}) => {
  // 명령 상태에 따른 아이콘 및 상태 결정
  let statusType = 'neutral';
  let statusIcon = '📊';
  
  if (activeCommands > 0) {
    statusType = 'info';
    statusIcon = '⚙️';
  }
  
  return (
    <StatusCard 
      title="명령 통계"
      icon={statusIcon}
      status={statusType}
    >
      <div className="command-stats-content">
        <div className="status-metric">
          {totalCommands}
        </div>
        <div className="status-label">
          총 처리된 명령
        </div>
        
        <div className="status-details">
          <div className="status-detail">
            <span className="status-detail-label">실행 중:</span>
            <span className="status-detail-value">{activeCommands}</span>
          </div>
          <div className="status-detail">
            <span className="status-detail-label">마지막 실행:</span>
            <span className="status-detail-value">{lastCommandTime}</span>
          </div>
        </div>
        
        <div className="command-distribution">
          <div className="distribution-label">명령 유형 분포:</div>
          <div className="distribution-bars">
            {Object.entries(commandDistribution).map(([type, count]) => {
              const percentage = Math.round((count / totalCommands) * 100);
              return (
                <div key={type} className="distribution-item">
                  <div className="distribution-type">{type}</div>
                  <div className="distribution-bar-container">
                    <div 
                      className={`distribution-bar distribution-bar-${type}`} 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="distribution-count">{count}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StatusCard>
  );
};

export default CommandStats;