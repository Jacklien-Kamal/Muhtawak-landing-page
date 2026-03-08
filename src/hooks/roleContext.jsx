import React, { createContext, useContext, useState } from 'react';
import { ROLE_CONTENT } from '../utils/dummy';



// ─── Context ──────────────────────────────────────────────────────────────────
const RoleContext = createContext(null);

export function RoleProvider({ children }) {
  const [role, setRole] = useState('Creator'); // 'Creator' | 'Agency'

  const content = ROLE_CONTENT[role];

  return (
    <RoleContext.Provider value={{ role, setRole, content }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used inside <RoleProvider>');
  return ctx;
}