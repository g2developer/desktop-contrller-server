import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import UserTable from '../components/users/UserTable';
import UserForm from '../components/users/UserForm';
import './UserManagement.css';

/**
 * 사용자 관리 페이지 컴포넌트
 * 사용자 목록, 추가, 편집, 삭제 기능을 제공합니다.
 */
const UserManagement = () => {
  // 사용자 목록 상태 (실제 구현에서는 API 호출)
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', status: 'active', lastLogin: '2023-05-11 10:25:30' },
    { id: 2, username: 'user2', status: 'active', lastLogin: '2023-05-10 15:43:22' },
    { id: 3, username: 'user3', status: 'inactive', lastLogin: '2023-05-05 09:11:15' },
  ]);
  
  // 검색어 상태
  const [searchTerm, setSearchTerm] = useState('');
  
  // 필터 상태
  const [statusFilter, setStatusFilter] = useState('all');
  
  // 모달 상태
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'add', 'edit', 'delete'
    user: null
  });
  
  // 검색 필터링된 사용자 목록
  const filteredUsers = users.filter(user => {
    // 검색어 필터링
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase());
    
    // 상태 필터링
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // 모달 열기 핸들러
  const openModal = (type, user = null) => {
    setModalState({
      isOpen: true,
      type,
      user
    });
  };
  
  // 모달 닫기 핸들러
  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      user: null
    });
  };
  
  // 사용자 추가 핸들러
  const handleAddUser = (userData) => {
    // 실제 구현에서는 API 호출
    const newUser = {
      id: users.length + 1,
      username: userData.username,
      status: userData.status,
      lastLogin: '-'
    };
    
    setUsers([...users, newUser]);
    closeModal();
  };
  
  // 사용자 편집 핸들러
  const handleEditUser = (userData) => {
    // 실제 구현에서는 API 호출
    const updatedUsers = users.map(user => {
      if (user.id === modalState.user.id) {
        return {
          ...user,
          username: userData.username,
          status: userData.status
        };
      }
      return user;
    });
    
    setUsers(updatedUsers);
    closeModal();
  };
  
  // 사용자 삭제 핸들러
  const handleDeleteUser = () => {
    // 실제 구현에서는 API 호출
    const updatedUsers = users.filter(user => user.id !== modalState.user.id);
    setUsers(updatedUsers);
    closeModal();
  };
  
  return (
    <div className="user-management-container">
      <div className="user-management-header">
        <h1>사용자 관리</h1>
        <p className="user-management-subtitle">
          데스크탑 컨트롤러 서버에 접근할 수 있는 사용자를 관리합니다.
        </p>
      </div>
      
      <Card>
        <div className="user-management-toolbar">
          <div className="toolbar-left">
            <div className="search-box">
              <input
                type="text"
                placeholder="사용자 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <div className="filter-box">
              <label className="filter-label">상태:</label>
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">전체</option>
                <option value="active">활성</option>
                <option value="inactive">비활성</option>
              </select>
            </div>
          </div>
          
          <div className="toolbar-right">
            <Button 
              variant="primary"
              icon="➕"
              onClick={() => openModal('add')}
            >
              사용자 추가
            </Button>
          </div>
        </div>
        
        <UserTable 
          users={filteredUsers}
          onEditUser={(user) => openModal('edit', user)}
          onDeleteUser={(user) => openModal('delete', user)}
        />
        
        {filteredUsers.length > 0 && (
          <div className="user-management-footer">
            <div className="user-count">
              전체 {users.length}명 중 {filteredUsers.length}명 표시
            </div>
          </div>
        )}
      </Card>
      
      {/* 사용자 추가/편집 모달 */}
      <Modal
        isOpen={modalState.isOpen && (modalState.type === 'add' || modalState.type === 'edit')}
        onClose={closeModal}
        title={modalState.type === 'add' ? '사용자 추가' : '사용자 편집'}
      >
        <UserForm
          user={modalState.user}
          isEdit={modalState.type === 'edit'}
          onSave={modalState.type === 'add' ? handleAddUser : handleEditUser}
          onCancel={closeModal}
        />
      </Modal>
      
      {/* 사용자 삭제 확인 모달 */}
      <Modal
        isOpen={modalState.isOpen && modalState.type === 'delete'}
        onClose={closeModal}
        title="사용자 삭제"
        size="small"
      >
        <div className="delete-confirmation">
          <p>
            정말로 <strong>{modalState.user?.username}</strong> 사용자를 삭제하시겠습니까?
          </p>
          <p className="delete-warning">
            이 작업은 취소할 수 없습니다.
          </p>
          
          <div className="delete-actions">
            <Button variant="secondary" onClick={closeModal}>
              취소
            </Button>
            <Button variant="danger" onClick={handleDeleteUser}>
              삭제
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserManagement;