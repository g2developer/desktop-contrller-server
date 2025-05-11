import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import './ActivityLog.css';

/**
 * 활동 로그 컴포넌트
 * 서버 활동 및 이벤트를 시간순으로 표시합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {Array} props.logs - 활동 로그 데이터
 */
const ActivityLog = ({ logs = [] }) => {
  // 로그 타입에 따른 배지 변형
  const getLogTypeBadge = (type) => {
    switch (type) {
      case 'info':
        return <Badge variant="info">정보</Badge>;
      case 'warning':
        return <Badge variant="warning">경고</Badge>;
      case 'error':
        return <Badge variant="error">오류</Badge>;
      case 'success':
        return <Badge variant="success">성공</Badge>;
      default:
        return <Badge variant="neutral">{type}</Badge>;
    }
  };
  
  // 샘플 데이터 (실제 구현에서는 props로 전달)
  const demoLogs = [
    { id: 1, timestamp: '2023-05-11 15:30:45', type: 'info', message: '서버가 시작되었습니다.' },
    { id: 2, timestamp: '2023-05-11 15:31:20', type: 'success', message: 'user1(192.168.1.101)이 연결되었습니다.' },
    { id: 3, timestamp: '2023-05-11 15:35:10', type: 'info', message: 'user1이 명령을 실행했습니다: "현재 날씨 알려줘"' },
    { id: 4, timestamp: '2023-05-11 15:40:22', type: 'warning', message: 'user2 연결 시도 실패: 인증 오류' },
    { id: 5, timestamp: '2023-05-11 15:41:05', type: 'success', message: 'user2(192.168.1.102)이 연결되었습니다.' },
  ];
  
  const logsToShow = logs.length > 0 ? logs : demoLogs;
  
  // 타임스탬프에서 시간 부분만 추출
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const parts = timestamp.split(' ');
    return parts.length > 1 ? parts[1] : timestamp;
  };
  
  return (
    <Card 
      title="활동 로그" 
      action={
        <Button 
          variant="text" 
          size="small" 
          icon="🔄"
        >
          새로고침
        </Button>
      }
    >
      <div className="activity-log-container">
        {logsToShow.map(log => (
          <div key={log.id} className="log-item">
            <div className="log-time">{formatTime(log.timestamp)}</div>
            <div className="log-type">{getLogTypeBadge(log.type)}</div>
            <div className="log-message">{log.message}</div>
          </div>
        ))}
      </div>
      
      {logsToShow.length === 0 && (
        <div className="log-empty">
          <p>활동 로그가 없습니다.</p>
        </div>
      )}
      
      <div className="activity-log-footer">
        <Button variant="text" size="small">로그 내보내기</Button>
        <Button variant="text" size="small">전체 로그 보기</Button>
      </div>
    </Card>
  );
};

export default ActivityLog;