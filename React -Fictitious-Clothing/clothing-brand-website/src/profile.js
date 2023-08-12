import React from 'react';

const ProfilePage = () => {
  const handleLogout = () => {
    alert('User has logged out');
  };

  return (
    <div>
      <h3>User Profile Page</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
