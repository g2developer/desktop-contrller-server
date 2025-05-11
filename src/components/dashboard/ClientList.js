import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import './ClientList.css';

/**
 * 클라이언트 목록 컴포넌트
 * 연결된 클라이언트 정보를 테이블 형식으로 표시합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {Array} props.clients - 클라이언트 목록 데이터
 */
const ClientList = ({ clients = [] }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  // 필터링된 클라이언트 목록 (실제 구현에서는 클라이언트 상태에 따라 필터링)
  const filteredClients = clients;
  
  // 클라이언트 상태에 따른 배지 변형
  const getStatusBadge = (status) => {
    switch (status) {
      case 'connected':
        return <Badge variant="success">연결됨</Badge>;
      case 'disconnected':
        return <Badge variant="neutral">연결 해제</Badge>;
      case 'active':
        return <Badge variant="info">활성</Badge>;
      case 'idle':
        return <Badge variant="warning">유휴</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };
  
  // 샘플 데이터 (실제 구현에서는 props로 전달)
  const demoClients = [
    { id: 1, username: 'user1', ip: '192.168.1.101', status: 'connected', lastActive: '2분 전' },
    { id: 2, username: 'user2', ip: '192.168.1.102', status: 'active', lastActive: '방금 전' },
    { id: 3, username: 'user3', ip: '192.168.1.103', status: 'idle', lastActive: '15분 전' },
  ];
  
  const clientsToShow = filteredClients.length > 0 ? filteredClients : demoClients;
  
  return (
    <Card 
      title="클라이언트 목록" 
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
      <div className="client-list-tabs">
        <button 
          className={`client-list-tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          전체
        </button>
        <button
          className={`client-list-tab ${activeTab === 'connected' ? 'active' : ''}`}
          onClick={() => setActiveTab('connected')}
        >
          연결됨
        </button>
        <button
          className={`client-list-tab ${activeTab === 'disconnected' ? 'active' : ''}`}
          onClick={() => setActiveTab('disconnected')}
        >
          연결 해제
        </button>
      </div>
      
      <div className="client-list-table-container">
        <table className="client-list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>사용자</th>
              <th>IP 주소</th>
              <th>상태</th>
              <th>마지막 활동</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {clientsToShow.map(client => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.username}</td>
                <td>{client.ip}</td>
                <td>{getStatusBadge(client.status)}</td>
                <td>{client.lastActive}</td>
                <td className="client-actions">
                  <Button variant="text" size="mini" icon="📝">메시지</Button>
                  <Button variant="text" size="mini" icon="🔌">연결 해제</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {clientsToShow.length === 0 && (
        <div className="client-list-empty">
          <p>연결된 클라이언트가 없습니다.</p>
        </div>
      )}
    </Card>
  );
};

export default ClientList;