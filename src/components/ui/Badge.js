import React from 'react';
import './Badge.css';

/**
 * 배지 컴포넌트
 * 상태, 카운트 등을 표시하는 작은 UI 요소입니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.variant - 배지 변형 (success, warning, error, info, neutral)
 * @param {React.ReactNode} props.children - 배지 내용
 * @param {string} props.className - 추가 CSS 클래스 (선택적)
 */
const Badge = ({ variant = 'neutral', children, className = '' }) => {
  const badgeClasses = `badge badge-${variant} ${className}`;
  
  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

export default Badge;