import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import './UserTable.css';

/**
 * 사용자 테이블 컴포넌트
 * 사용자 목록을 테이블 형식으로 표시합니다.
 * 
 * @param {Object} props - 컴포넌트 속성
 * @param {Array} props.users - 사용자 목록 데이터
 * @param {function} props.onEditUser - 사용자 편집 핸들러
 * @param {function} props.onDeleteUser - 사용자 삭제 핸들러
 */
const UserTable = ({ 
  users = [], 
  onEditUser,
  onDeleteUser
}) => {
  // 사용자 상태에 따른 배지 변형
  const getStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <Badge variant="success">활성</Badge>;
      case 'inactive':
        return <Badge variant="neutral">비활성</Badge>;
      default:
        return <Badge variant="neutral">{status}</Badge>;
    }
  };
  
  // 샘플 데이터 (실제 구현에서는 props로 전달)
  const demoUsers = [
    { id: 1, username: 'user1', status: 'active', lastLogin: '2023-05-11 10:25:30' },
    { id: 2, username: 'user2', status: 'active', lastLogin: '2023-05-10 15:43:22' },
    { id: 3, username: 'user3', status: 'inactive', lastLogin: '2023-05-05 09:11:15' },
  ];
  
  const usersToShow = users.length > 0 ? users : demoUsers;
  
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>사용자명</th>
            <th>상태</th>
            <th>마지막 로그인</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {usersToShow.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{getStatusBadge(user.status)}</td>
              <td>{user.lastLogin}</td>
              <td className="user-actions">
                <Button 
                  variant="text" 
                  size="small" 
                  icon="✏️"
                  onClick={() => onEditUser && onEditUser(user)}
                >
                  편집
                </Button>
                <Button 
                  variant="text" 
                  size="small" 
                  icon="🗑️"
                  onClick={() => onDeleteUser && onDeleteUser(user)}
                >
                  삭제
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {usersToShow.length === 0 && (
        <div className="user-table-empty">
          <p>등록된 사용자가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default UserTable;