import React from 'react';
import './Card.css';

/**
 * 카드 컴포넌트
 * 정보를 시각적으로 분리된 컨테이너에 표시합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.title - 카드 제목 (선택적)
 * @param {React.ReactNode} props.children - 카드 내용
 * @param {string} props.className - 추가 CSS 클래스 (선택적)
 * @param {React.ReactNode} props.action - 카드 헤더에 표시될 액션 버튼/요소 (선택적)
 * @param {React.ReactNode} props.footer - 카드 푸터 내용 (선택적)
 * @param {string} props.variant - 카드 변형 (standard, flat, elevated, status-success, status-warning, status-error)
 */
const Card = ({ 
  title, 
  children, 
  className = '', 
  action, 
  footer,
  variant = 'standard'
}) => {
  const cardClasses = `card card-${variant} ${className}`;
  
  return (
    <div className={cardClasses}>
      {(title || action) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {action && <div className="card-action">{action}</div>}
        </div>
      )}
      
      <div className="card-body">
        {children}
      </div>
      
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;