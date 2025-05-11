import React, { useState, useEffect } from 'react';
import ServerStatus from '../components/dashboard/ServerStatus';
import ConnectionInfo from '../components/dashboard/ConnectionInfo';
import CommandStats from '../components/dashboard/CommandStats';
import ClientList from '../components/dashboard/ClientList';
import ActivityLog from '../components/dashboard/ActivityLog';
import './Dashboard.css';

/**
 * 대시보드 페이지 컴포넌트
 * 서버 상태, 연결 정보, 명령 통계, 클라이언트 목록, 활동 로그를 표시합니다.
 */
const Dashboard = () => {
  // 서버 상태 관련 상태
  const [serverStatus, setServerStatus] = useState({
    isRunning: true,
    uptime: '2시간 45분',
    port: '8003',
    ipAddress: '192.168.1.100'
  });
  
  // 연결 정보 관련 상태
  const [connectionInfo, setConnectionInfo] = useState({
    connectedClients: 2,
    connectionUrl: 'http://192.168.1.100:8003',
    maxClients: 10
  });
  
  // 명령 통계 관련 상태
  const [commandStats, setCommandStats] = useState({
    totalCommands: 157,
    activeCommands: 0,
    lastCommandTime: '10:15:23',
    commandDistribution: {
      text: 78,
      image: 45,
      data: 34
    }
  });
  
  // 클라이언트 목록 (실제 구현에서는 실시간 업데이트)
  const [clients, setClients] = useState([]);
  
  // 활동 로그 (실제 구현에서는 실시간 업데이트)
  const [logs, setLogs] = useState([]);
  
  // 서버 시작/중지 핸들러
  const handleStartServer = () => {
    // 실제 구현에서는 서버 시작 로직 추가
    setServerStatus(prev => ({
      ...prev,
      isRunning: true
    }));
  };
  
  const handleStopServer = () => {
    // 실제 구현에서는 서버 중지 로직 추가
    setServerStatus(prev => ({
      ...prev,
      isRunning: false
    }));
  };
  
  // 실제 구현에서는 웹소켓 등을 통해 실시간 데이터 업데이트 로직 추가
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>대시보드</h1>
        <p className="dashboard-subtitle">데스크탑 컨트롤러 서버의 상태 및 연결 정보를 확인합니다.</p>
      </div>
      
      <div className="dashboard-status-cards">
        <div className="status-card-item">
          <ServerStatus 
            isRunning={serverStatus.isRunning}
            uptime={serverStatus.uptime}
            port={serverStatus.port}
            ipAddress={serverStatus.ipAddress}
            onStartServer={handleStartServer}
            onStopServer={handleStopServer}
          />
        </div>
        
        <div className="status-card-item">
          <ConnectionInfo 
            connectedClients={connectionInfo.connectedClients}
            connectionUrl={connectionInfo.connectionUrl}
            maxClients={connectionInfo.maxClients}
          />
        </div>
        
        <div className="status-card-item">
          <CommandStats 
            totalCommands={commandStats.totalCommands}
            activeCommands={commandStats.activeCommands}
            lastCommandTime={commandStats.lastCommandTime}
            commandDistribution={commandStats.commandDistribution}
          />
        </div>
      </div>
      
      <div className="dashboard-main-content">
        <div className="dashboard-clients">
          <ClientList clients={clients} />
        </div>
        
        <div className="dashboard-logs">
          <ActivityLog logs={logs} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;