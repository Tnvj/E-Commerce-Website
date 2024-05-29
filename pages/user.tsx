// pages/user.tsx

import React from 'react';
import { GetServerSideProps } from 'next';

interface UserData {
  name: string;
  email: string;
  // Add other user data properties here
}

interface UserPageProps {
  userData: UserData;
}

const UserPage: React.FC<UserPageProps> = ({ userData }) => {
  // Render user data here
  return (
    <div>
      <h1>User Page</h1>
      <p>User Name: {userData.name}</p>
      <p>User Email: {userData.email}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (context) => {
  // Fetch user data from API or database
  const userData: UserData = {
    name: 'John Doe',
    email: 'john@example.com',
    // Add other user data here
  };

  return {
    props: {
      userData,
    },
  };
};

export default UserPage;
