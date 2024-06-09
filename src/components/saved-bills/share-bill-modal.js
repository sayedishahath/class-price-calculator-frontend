import { useState } from 'react';

export default function ShareBillModal(){
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    // ...
  ]);

  const handleSelectUser = (userId) => {
    const isSelected = selectedUsers.includes(userId);
    if (isSelected) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleShareBill = () => {
    // Call API to share bill with selected users
    console.log('Sharing bill with:', selectedUsers);
  };

  return (
    <div className="modal">
      <h2>Share Bill</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <input
              type="checkbox"
              checked={selectedUsers.includes(user.id)}
              onChange={() => handleSelectUser(user.id)}
            />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleShareBill}>Share Bill</button>
    </div>
  );
};
