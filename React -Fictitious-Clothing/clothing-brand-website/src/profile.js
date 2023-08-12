import React from 'react';

const ProfilePage = () => {
  const handleLogout = () => {
    alert('User has logged out');
  };

  return (
    <div>
      <h1>User Profile Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
