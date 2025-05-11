const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

// 서버 설정 로드 (실제 구현에서는 electron-store에서 로드)
const config = {
  port: process.env.PORT || 8003,
  maxConnections: 10
};

// Express 앱 생성
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// 연결된 클라이언트 관리
const clients = new Map();

// 소켓 연결 처리
io.on('connection', (socket) => {
  console.log(`클라이언트 연결됨: ${socket.id}`);
  
  // 인증 처리
  socket.on('authenticate', (userData) => {
    // 실제 구현에서는 사용자 데이터 검증
    if (userData && userData.username) {
      // 성공적으로 인증됨
      clients.set(socket.id, {
        id: socket.id,
        username: userData.username,
        ip: socket.handshake.address,
        connected: new Date(),
        status: 'connected'
      });
      
      socket.emit('authenticated', { success: true });
      
      // 모든 클라이언트에 업데이트된 클라이언트 목록 전송
      io.emit('client-list', Array.from(clients.values()));
      
      // 활동 로그에 추가
      const logEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type: 'info',
        message: `사용자 ${userData.username}이(가) 연결되었습니다.`
      };
      io.emit('log-entry', logEntry);
    } else {
      // 인증 실패
      socket.emit('authenticated', { 
        success: false, 
        error: '사용자 이름이 필요합니다.' 
      });
    }
  });
  
  // 명령 수신 처리
  socket.on('command', (commandData) => {
    console.log(`명령 수신: ${JSON.stringify(commandData)}`);
    
    // 실제 구현에서는 명령을 처리하고 결과 반환
    const client = clients.get(socket.id);
    if (client) {
      // 활동 로그에 추가
      const logEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type: 'info',
        message: `${client.username}이(가) 명령을 실행했습니다: "${commandData.text}"`
      };
      io.emit('log-entry', logEntry);
      
      // 명령 처리 결과 전송 (실제 구현에서는 실제 명령 처리 후 전송)
      setTimeout(() => {
        socket.emit('command-result', {
          success: true,
          commandId: commandData.id,
          result: {
            message: '명령이 성공적으로 실행되었습니다.'
          }
        });
      }, 1000);
    }
  });
  
  // 연결 해제 처리
  socket.on('disconnect', () => {
    console.log(`클라이언트 연결 해제: ${socket.id}`);
    
    const client = clients.get(socket.id);
    if (client) {
      // 활동 로그에 추가
      const logEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        type: 'info',
        message: `사용자 ${client.username}의 연결이 해제되었습니다.`
      };
      io.emit('log-entry', logEntry);
      
      // 클라이언트 목록에서 제거
      clients.delete(socket.id);
      
      // 모든 클라이언트에 업데이트된 클라이언트 목록 전송
      io.emit('client-list', Array.from(clients.values()));
    }
  });
});

// 서버 시작
server.listen(config.port, () => {
  console.log(`서버가 포트 ${config.port}에서 실행 중입니다.`);
});

// 서버 상태 내보내기
module.exports = {
  getStatus: () => ({
    running: true,
    port: config.port,
    clients: clients.size,
    maxConnections: config.maxConnections,
    uptime: process.uptime()
  }),
  stop: () => {
    server.close();
    return { running: false };
  }
};
