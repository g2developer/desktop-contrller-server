import React from 'react';
import Card from '../ui/Card';
import './StatusCard.css';

/**
 * 상태 카드 컴포넌트
 * 서버 상태, 연결 정보, 명령 통계 등을 표시하는 카드입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.title - 카드 제목
 * @param {string} props.icon - 상태 아이콘
 * @param {React.ReactNode} props.children - 카드 내용
 * @param {string} props.status - 상태 (success, warning, error, neutral)
 * @param {React.ReactNode} props.action - 카드 헤더에 표시될 액션 버튼/요소 (선택적)
 */
const StatusCard = ({ title, icon, children, status = 'neutral', action }) => {
  const statusVariant = status !== 'neutral' ? `status-${status}` : 'standard';
  
  return (
    <Card 
      title={
        <div className="status-card-title">
          <span className={`status-icon status-${status}`}>{icon}</span>
          <span>{title}</span>
        </div>
      }
      variant={statusVariant}
      action={action}
      className="status-card"
    >
      <div className="status-card-content">
        {children}
      </div>
    </Card>
  );
};

export default StatusCard;