'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {

    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {

      setUser({ token });
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    try {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('accessToken', data.accessToken);
      setUser({ token: data.accessToken });
      return { success: true, data };
    } else {
      return { success: false, error: data.error };
    }
  } catch (error) {
    console.error('Login error:', error); 
    return { success: false, error: 'Network error. Please try again.' };
  }
};

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
    router.push('/login');
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
  };
};