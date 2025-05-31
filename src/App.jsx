import React from 'react';
import Mainrouter from './routes/Mainrouter';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <Navbar />
      <Mainrouter />
    </div>
  );
};

export default App;
