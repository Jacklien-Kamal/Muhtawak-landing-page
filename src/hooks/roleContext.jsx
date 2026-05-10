import React, { createContext, useContext, useState } from 'react';
import { useI18n } from './i18nContext';

// ─── Context ──────────────────────────────────────────────────────────────────
const RoleContext = createContext(null);

export function RoleProvider({ children }) {
  const [role, setRole] = useState('Agency'); // 'Creator' | 'Agency'
  const { locale } = useI18n();

  // Content is always sourced from the active locale → auto-updates on lang switch
  const content = locale.roles[role];

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