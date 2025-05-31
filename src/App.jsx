import React from 'react';
import Mainrouter from './routes/Mainrouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className=" relative min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <Navbar />
      <Mainrouter />
      {/* <Footer/> */}
    </div>
  );
};

export default App;
