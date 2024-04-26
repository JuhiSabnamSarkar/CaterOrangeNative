// CustomDrawerContent.js or within your navigation setup file
import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useAuth } from '../hooks/AuthContext';  // Assuming you have an authentication context

const CustomDrawerContent = (props) => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {isLoggedIn ? (
        <DrawerItem label="Logout" onPress={logout} />
      ) : (
        <>
          <DrawerItem label="Login" onPress={() => props.navigation.navigate('Login')} />
          <DrawerItem label="Sign Up" onPress={() => props.navigation.navigate('Signup')} />
        </>
      )}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
