import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import './UserForm.css';

/**
 * 사용자 추가/편집 폼 컴포넌트
 * 사용자 정보를 입력받고 저장하는 폼을 제공합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {Object} props.user - 편집 시 기존 사용자 정보
 * @param {boolean} props.isEdit - 편집 모드 여부
 * @param {function} props.onSave - 저장 핸들러
 * @param {function} props.onCancel - 취소 핸들러
 */
const UserForm = ({ 
  user = null,
  isEdit = false,
  onSave,
  onCancel
}) => {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    status: 'active'
  });
  
  // 에러 상태 관리
  const [errors, setErrors] = useState({});
  
  // 편집 모드일 경우 초기 데이터 설정
  useEffect(() => {
    if (isEdit && user) {
      setFormData({
        username: user.username || '',
        password: '', // 보안상 비밀번호는 빈 값으로 설정
        status: user.status || 'active'
      });
    }
  }, [isEdit, user]);
  
  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 유효성 검사 에러 클리어
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 유효성 검사
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = '사용자 이름은 필수입니다.';
    }
    
    if (!isEdit && !formData.password) {
      newErrors.password = '비밀번호는 필수입니다.';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // 저장 처리
    onSave && onSave(formData);
  };
  
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username" className="form-label">사용자 이름</label>
        <input
          type="text"
          id="username"
          name="username"
          className={`form-input ${errors.username ? 'form-input-error' : ''}`}
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div className="form-error">{errors.username}</div>}
      </div>
      
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          비밀번호 {isEdit && <span className="optional-label">(변경 시에만 입력)</span>}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={`form-input ${errors.password ? 'form-input-error' : ''}`}
          value={formData.password}
          onChange={handleChange}
          placeholder={isEdit ? '변경하지 않으려면 비워두세요' : ''}
        />
        {errors.password && <div className="form-error">{errors.password}</div>}
      </div>
      
      <div className="form-group">
        <label className="form-label">상태</label>
        <div className="form-radio-group">
          <label className="form-radio">
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === 'active'}
              onChange={handleChange}
            />
            <span className="radio-label">활성</span>
          </label>
          <label className="form-radio">
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={formData.status === 'inactive'}
              onChange={handleChange}
            />
            <span className="radio-label">비활성</span>
          </label>
        </div>
      </div>
      
      <div className="form-actions">
        <Button variant="text" type="button" onClick={onCancel}>
          취소
        </Button>
        <Button variant="primary" type="submit">
          {isEdit ? '저장' : '추가'}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;