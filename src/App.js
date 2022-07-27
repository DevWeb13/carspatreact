import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Cars from './pages/Cars/Cars';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home active={active} />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
