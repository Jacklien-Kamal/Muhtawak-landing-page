import React from 'react';
import Header from './components/Header';
import Home  from '../Home';
import Footer from './components/Footer';
import { I18nProvider } from './hooks/i18nContext';
import { RoleProvider } from './hooks/roleContext';

function App() {
  return (
    <I18nProvider>
      <RoleProvider>
        <div className="font-poppins text-bingle-gray">
          <Header />
          <Home />
          <Footer />
        </div>
      </RoleProvider>
    </I18nProvider>
  );
}

export default App;