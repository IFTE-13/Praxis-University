"use client"

import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { UserRole } from '@/lib/types';

interface RoleContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

interface RoleProviderProps {
  children: ReactNode;
  initialRole?: UserRole;
}

export function RoleProvider({ children, initialRole = 'admin' }: RoleProviderProps) {
  // Initialize state from localStorage if available, otherwise use initialRole
  const [userRole, setUserRole] = React.useState<UserRole>(() => {
    // We need to check if window is available due to Next.js SSR
    if (typeof window !== 'undefined') {
      const savedRole = localStorage.getItem('userRole') as UserRole;
      return savedRole || initialRole;
    }
    return initialRole;
  });

  // Update localStorage whenever role changes
  useEffect(() => {
    localStorage.setItem('userRole', userRole);
  }, [userRole]);

  const updateRole = (role: UserRole) => {
    setUserRole(role);
  };

  return (
    <RoleContext.Provider value={{ userRole, setUserRole: updateRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}