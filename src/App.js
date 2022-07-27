import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "pages/Home/Home";
import About from "pages/About/About";
import Cars from "pages/Cars/Cars";
import Error from "pages/Error/Error";
import Header from "components/Header/Header";
import Nav from "components/Nav/Nav";

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Header active={active} setActive={setActive} />
        <Nav active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Home active={active} />}></Route>
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
