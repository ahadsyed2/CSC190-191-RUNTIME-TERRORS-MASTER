// UserProfileComponent.js
import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

function UserProfileComponent() {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>User Profile</h1>
      {user && (
        <div>
          <p>Welcome, {user.email}!</p>
          {/* Other user profile information */}
        </div>
      )}
    </div>
  );
}

export default UserProfileComponent;