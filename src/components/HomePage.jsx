import { useState } from 'react';
import Home from './NavTabs';
import About from './pages/Home';
import Portfolio from './pages/About';
import Contact from './pages/Blog';
// import Resume from './pages/';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {

    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
     
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}