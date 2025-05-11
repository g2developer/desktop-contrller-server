import React from 'react';
import './Button.css';

/**
 * 버튼 컴포넌트
 * 사용자 상호작용을 위한 다양한 스타일의 버튼을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.variant - 버튼 변형 (primary, secondary, text, danger, success)
 * @param {string} props.size - 버튼 크기 (large, medium, small, mini)
 * @param {boolean} props.disabled - 비활성화 여부
 * @param {boolean} props.loading - 로딩 상태 여부
 * @param {function} props.onClick - 클릭 이벤트 핸들러
 * @param {React.ReactNode} props.children - 버튼 내용
 * @param {React.ReactNode} props.icon - 버튼 아이콘 (선택적)
 * @param {string} props.className - 추가 CSS 클래스 (선택적)
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  children,
  icon,
  className = '',
  ...rest
}) => {
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    loading ? 'btn-loading' : '',
    icon && !children ? 'btn-icon' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading && <span className="btn-spinner"></span>}
      {icon && <span className="btn-icon">{icon}</span>}
      {children && <span className="btn-text">{children}</span>}
    </button>
  );
};

export default Button;