import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import './ConnectionManagement.css';

/**
 * 연결 관리 페이지 컴포넌트
 * 클라이언트 연결 상태를 실시간으로 모니터링하고 관리합니다.
 */
const ConnectionManagement = () => {
  // 연결 상태 필터
  const [statusFilter, setStatusFilter] = useState('all');
  
  // 연결 통계 상태 (실제 구현에서는 서버에서 데이터 로드)
  const [stats, setStats] = useState({
    totalConnections: 48,
    activeConnections: 3,
    peakConnections: 12,
    averageConnectionTime: '15분 23초'
  });
  
  // 연결 목록 (실제 구현에서는 서버에서 데이터 로드)
  const [connections, setConnections] = useState([
    { id: 1, username: 'user1', ip: '192.168.1.101', status: 'connected', connected: '2023-05-11 15:30:45', lastActivity: '2분 전' },
    { id: 2, username: 'user2', ip: '192.168.1.102', status: 'active', connected: '2023-05-11 15:45:12', lastActivity: '10초 전' },
    { id: 3, username: 'user3', ip: '192.168.1.103', status: 'idle', connected: '2023-05-11 16:05:33', lastActivity: '5분 전' }
  ]);
  
  // 연결 상태에 따른 배지 변형
  const getStatusBadge = (status) => {
    switch (status) {
      case 'connected':
        return <Badge variant="success">연결됨</Badge>;
      case 'active':
        return <Badge variant="info">활성</Badge>;
      case 'idle':
        return <Badge variant="warning">유휴</Badge>;
      case 'disconnected':
        return <Badge variant="neutral">연결 해제</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };
  
  // 필터링된 연결 목록
  const filteredConnections = connections.filter(conn => {
    return statusFilter === 'all' || conn.status === statusFilter;
  });
  
  // 연결 해제 핸들러
  const handleDisconnect = (connectionId) => {
    // 실제 구현에서는 서버에 연결 해제 요청
    alert(`연결 ID ${connectionId} 해제 요청`);
  };
  
  // 메시지 전송 핸들러
  const handleSendMessage = (connectionId) => {
    // 실제 구현에서는 메시지 전송 모달 표시
    alert(`연결 ID ${connectionId}에 메시지 전송`);
  };
  
  return (
    <div className="connection-management-container">
      <div className="connection-management-header">
        <h1>연결 관리</h1>
        <p className="connection-management-subtitle">
          클라이언트 연결 상태를 실시간으로 모니터링하고 관리합니다.
        </p>
      </div>
      
      <div className="connection-stats-cards">
        <Card className="stats-card">
          <div className="stats-content">
            <h3 className="stats-title">총 연결 수</h3>
            <div className="stats-value">{stats.totalConnections}</div>
            <div className="stats-label">누적 연결 세션</div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="stats-content">
            <h3 className="stats-title">현재 활성 연결</h3>
            <div className="stats-value">{stats.activeConnections}</div>
            <div className="stats-label">현재 연결된 클라이언트</div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="stats-content">
            <h3 className="stats-title">최대 동시 연결</h3>
            <div className="stats-value">{stats.peakConnections}</div>
            <div className="stats-label">최대 동시 연결 수</div>
          </div>
        </Card>
        
        <Card className="stats-card">
          <div className="stats-content">
            <h3 className="stats-title">평균 연결 시간</h3>
            <div className="stats-value">{stats.averageConnectionTime}</div>
            <div className="stats-label">세션 당 평균 연결 시간</div>
          </div>
        </Card>
      </div>
      
      <Card>
        <div className="connection-table-header">
          <div className="filter-options">
            <Button 
              variant={statusFilter === 'all' ? 'primary' : 'text'} 
              size="small"
              onClick={() => setStatusFilter('all')}
            >
              전체
            </Button>
            <Button 
              variant={statusFilter === 'connected' ? 'primary' : 'text'} 
              size="small"
              onClick={() => setStatusFilter('connected')}
            >
              연결됨
            </Button>
            <Button 
              variant={statusFilter === 'active' ? 'primary' : 'text'} 
              size="small"
              onClick={() => setStatusFilter('active')}
            >
              활성
            </Button>
            <Button 
              variant={statusFilter === 'idle' ? 'primary' : 'text'} 
              size="small"
              onClick={() => setStatusFilter('idle')}
            >
              유휴
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
        
        <div className="connection-table-container">
          <table className="connection-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>사용자</th>
                <th>IP 주소</th>
                <th>상태</th>
                <th>연결 시간</th>
                <th>마지막 활동</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {filteredConnections.map(conn => (
                <tr key={conn.id}>
                  <td>{conn.id}</td>
                  <td>{conn.username}</td>
                  <td>{conn.ip}</td>
                  <td>{getStatusBadge(conn.status)}</td>
                  <td>{conn.connected}</td>
                  <td>{conn.lastActivity}</td>
                  <td className="connection-actions">
                    <Button 
                      variant="text" 
                      size="mini" 
                      icon="📝"
                      onClick={() => handleSendMessage(conn.id)}
                    >
                      메시지
                    </Button>
                    <Button 
                      variant="text" 
                      size="mini" 
                      icon="🔌"
                      onClick={() => handleDisconnect(conn.id)}
                    >
                      연결 해제
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredConnections.length === 0 && (
          <div className="connection-empty-state">
            <p>표시할 연결이 없습니다.</p>
          </div>
        )}
      </Card>
      
      <Card title="네트워크 모니터링" className="network-monitoring-card">
        <div className="network-stats">
          <div className="network-stat-item">
            <div className="network-stat-label">현재 네트워크 상태</div>
            <div className="network-stat-value">
              <span className="status-indicator status-success"></span> 정상
            </div>
          </div>
          
          <div className="network-stat-item">
            <div className="network-stat-label">수신 데이터</div>
            <div className="network-stat-value">2.3 MB</div>
          </div>
          
          <div className="network-stat-item">
            <div className="network-stat-label">송신 데이터</div>
            <div className="network-stat-value">1.7 MB</div>
          </div>
          
          <div className="network-stat-item">
            <div className="network-stat-label">평균 지연 시간</div>
            <div className="network-stat-value">35ms</div>
          </div>
        </div>
        
        <div className="network-chart-placeholder">
          <div className="chart-message">네트워크 트래픽 차트가 여기에 표시됩니다.</div>
        </div>
      </Card>
    </div>
  );
};

export default ConnectionManagement;