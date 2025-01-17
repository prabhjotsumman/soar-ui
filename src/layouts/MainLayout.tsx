import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-white p-4">Header Placeholder</header>
      <main className="flex">{children}</main>
      <footer className="bg-secondary text-white p-4">Footer Placeholder</footer>
    </div>
  );
};

export default MainLayout;
