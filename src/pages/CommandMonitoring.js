import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import './CommandMonitoring.css';

/**
 * 명령 모니터링 페이지 컴포넌트
 * 클로드 앱 명령 실행 상태를 모니터링합니다.
 */
const CommandMonitoring = () => {
  // 현재 명령 상태 (실제 구현에서는 서버에서 데이터 로드)
  const [currentCommand, setCurrentCommand] = useState({
    client: {
      username: 'user2',
      ip: '192.168.1.102'
    },
    command: '현재 비트코인 가격을 알려줘',
    status: 'running',
    elapsedTime: '00:00:15'
  });
  
  // 명령 필터
  const [statusFilter, setStatusFilter] = useState('all');
  
  // 명령 이력 (실제 구현에서는 서버에서 데이터 로드)
  const [commandHistory, setCommandHistory] = useState([
    { id: 1, timestamp: '10:15', client: 'user1', command: '비트코인 가격', status: 'completed', duration: '3s' },
    { id: 2, timestamp: '10:10', client: 'user2', command: '날씨 정보', status: 'completed', duration: '5s' },
    { id: 3, timestamp: '10:05', client: 'user1', command: '주식 시세', status: 'error', duration: '2s' },
    { id: 4, timestamp: '09:55', client: 'user2', command: '번역해줘', status: 'completed', duration: '8s' }
  ]);
  
  // 명령 상태에 따른 배지 변형
  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">완료</Badge>;
      case 'running':
        return <Badge variant="info">실행 중</Badge>;
      case 'queued':
        return <Badge variant="warning">대기 중</Badge>;
      case 'error':
        return <Badge variant="error">오류</Badge>;
      case 'cancelled':
        return <Badge variant="neutral">취소됨</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };
  
  // 필터링된 명령 이력
  const filteredCommands = commandHistory.filter(cmd => {
    return statusFilter === 'all' || cmd.status === statusFilter;
  });
  
  // 명령 취소 핸들러
  const handleCancelCommand = () => {
    // 실제 구현에서는 서버에 명령 취소 요청
    alert('명령 취소 요청');
  };
  
  // 캡처 실행 핸들러
  const handleCaptureNow = () => {
    // 실제 구현에서는 서버에 즉시 캡처 요청
    alert('즉시 캡처 요청');
  };
  
  // 명령 전송 핸들러
  const handleSendCommand = () => {
    // 실제 구현에서는 명령 전송 모달 표시
    alert('명령 전송 기능');
  };
  
  // 명령 상세 보기 핸들러
  const handleViewCommandDetails = (commandId) => {
    // 실제 구현에서는 명령 상세 정보 모달 표시
    alert(`명령 ID ${commandId} 상세 정보`);
  };
  
  return (
    <div className="command-monitoring-container">
      <div className="command-monitoring-header">
        <h1>명령 모니터링</h1>
        <p className="command-monitoring-subtitle">
          클로드 앱 명령 실행 상태를 모니터링합니다.
        </p>
      </div>
      
      <Card title="현재 명령 실행 상태" className="current-command-card">
        <div className="current-command-content">
          <div className="command-info">
            <div className="command-info-item">
              <span className="command-info-label">클라이언트:</span>
              <span className="command-info-value">{currentCommand.client.username} ({currentCommand.client.ip})</span>
            </div>
            <div className="command-info-item">
              <span className="command-info-label">명령:</span>
              <span className="command-info-value command-text">"{currentCommand.command}"</span>
            </div>
            <div className="command-info-item">
              <span className="command-info-label">상태:</span>
              <span className="command-info-value command-status">
                {getStatusBadge(currentCommand.status)} {currentCommand.status === 'running' && <span className="running-indicator">⚙️</span>}
              </span>
            </div>
            <div className="command-info-item">
              <span className="command-info-label">경과 시간:</span>
              <span className="command-info-value">{currentCommand.elapsedTime}</span>
            </div>
          </div>
          
          <div className="command-preview">
            <div className="command-preview-placeholder">
              [실행 중... 클로드 앱 응답 대기 중]
            </div>
          </div>
          
          <div className="command-actions">
            <Button 
              variant="danger" 
              size="small"
              onClick={handleCancelCommand}
            >
              명령 취소
            </Button>
            <Button 
              variant="secondary" 
              size="small"
              onClick={handleCaptureNow}
            >
              캡처 실행
            </Button>
            <Button 
              variant="primary" 
              size="small"
              onClick={handleSendCommand}
            >
              명령 전송
            </Button>
          </div>
        </div>
      </Card>
      
      <Card title="명령 실행 이력" className="command-history-card">
        <div className="command-table-header">
          <div className="filter-options">
            <Button 
              variant={statusFilter === 'all' ? 'primary' : 'text'} 
              size="small"
              onClick={() => setStatusFilter('all')}
            >
              전체
            </Button>
            <Button 
              variant={statusFilter === 'completed' ? 'primary' : 'text'} 
              size="small"
              onClick={() => setStatusFilter('completed')}
            >
              완료
            </Button>
            <Button 
              variant={statusFilter === 'error' ? 'primary' : 'text'} 
              size="small"
              onClick={() => setStatusFilter('error')}
            >
              오류
            </Button>
            <Button 
              variant={statusFilter === 'cancelled' ? 'primary' : 'text'} 
              size="small"
              onClick={() => setStatusFilter('cancelled')}
            >
              취소됨
            </Button>
          </div>
          
          <Button 
            variant="secondary" 
            size="small" 
            icon="🔄"
          >
            새로고침
          </Button>
        </div>
        
        <div className="command-table-container">
          <table className="command-table">
            <thead>
              <tr>
                <th>시간</th>
                <th>클라이언트</th>
                <th>명령</th>
                <th>상태</th>
                <th>소요시간</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {filteredCommands.map(cmd => (
                <tr key={cmd.id}>
                  <td>{cmd.timestamp}</td>
                  <td>{cmd.client}</td>
                  <td className="command-cell">{cmd.command}</td>
                  <td>{getStatusBadge(cmd.status)}</td>
                  <td>{cmd.duration}</td>
                  <td className="command-actions">
                    <Button 
                      variant="text" 
                      size="mini" 
                      icon="🔍"
                      onClick={() => handleViewCommandDetails(cmd.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredCommands.length === 0 && (
          <div className="command-empty-state">
            <p>표시할 명령 내역이 없습니다.</p>
          </div>
        )}
        
        <div className="command-history-footer">
          <Button variant="text" size="small">명령 내역 내보내기</Button>
          <Button variant="text" size="small">전체 내역 보기</Button>
        </div>
      </Card>
      
      <Card title="명령 통계" className="command-stats-card">
        <div className="stats-grid">
          <div className="stats-item">
            <div className="stats-value">157</div>
            <div className="stats-label">총 명령 수</div>
          </div>
          
          <div className="stats-item">
            <div className="stats-value">15s</div>
            <div className="stats-label">평균 소요 시간</div>
          </div>
          
          <div className="stats-item">
            <div className="stats-value">92%</div>
            <div className="stats-label">성공률</div>
          </div>
          
          <div className="stats-item">
            <div className="stats-value">4.8/5</div>
            <div className="stats-label">평균 응답 품질</div>
          </div>
        </div>
        
        <div className="command-types">
          <h4>명령 유형 분포</h4>
          <div className="command-type-bars">
            <div className="command-type-item">
              <div className="command-type">텍스트</div>
              <div className="type-bar-container">
                <div className="type-bar type-bar-text" style={{ width: '50%' }}></div>
              </div>
              <div className="type-count">78</div>
            </div>
            
            <div className="command-type-item">
              <div className="command-type">이미지</div>
              <div className="type-bar-container">
                <div className="type-bar type-bar-image" style={{ width: '30%' }}></div>
              </div>
              <div className="type-count">45</div>
            </div>
            
            <div className="command-type-item">
              <div className="command-type">데이터</div>
              <div className="type-bar-container">
                <div className="type-bar type-bar-data" style={{ width: '20%' }}></div>
              </div>
              <div className="type-count">34</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CommandMonitoring;