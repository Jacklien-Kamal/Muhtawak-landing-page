import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header   from './components/Header';
import Footer   from './components/Footer';
import Home     from '../Home';

import { I18nProvider } from './hooks/i18nContext';
import { RoleProvider } from './hooks/roleContext';
import BlogDetails from './BlogDetails/BlogDetails';

function App() {
  return (
    <I18nProvider>
      <RoleProvider>
        <BrowserRouter>
          <div className="font-poppins text-bingle-gray">
            <Header />

            <Routes>
              <Route path="/"              element={<Home />} />
              <Route path="/blog/:id"      element={<BlogDetails />} />
              {/* fallback → home */}
              <Route path="*"              element={<Home />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </RoleProvider>
    </I18nProvider>
  );
}

export default App;