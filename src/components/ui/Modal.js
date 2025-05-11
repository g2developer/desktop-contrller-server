import React, { useEffect } from 'react';
import './Modal.css';

/**
 * 모달 컴포넌트
 * 오버레이와 모달 창을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {boolean} props.isOpen - 모달 표시 여부
 * @param {function} props.onClose - 닫기 핸들러
 * @param {string} props.title - 모달 제목
 * @param {React.ReactNode} props.children - 모달 내용
 * @param {string} props.size - 모달 크기 (small, standard, large, fullscreen)
 */
const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = 'standard'
}) => {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);
  
  // 모달 외부 클릭 시 닫기
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className={`modal modal-${size}`} role="dialog" aria-modal="true">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="닫기">
            ×
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;