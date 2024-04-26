import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the types for the authentication context
interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create the context with a default value that is undefined initially
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook to use the authentication context safely within the app
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

// Provider component with implementation of login and logout functionalities
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem('token');
      } catch (e) {
        console.error('Failed to load token:', e);
      }
      setIsLoggedIn(!!token);
    };

    bootstrapAsync();
  }, []);

  const login = async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
      setIsLoggedIn(true);
    } catch (e) {
      console.error('Failed to save token:', e);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
    } catch (e) {
      console.error('Failed to delete token:', e);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
