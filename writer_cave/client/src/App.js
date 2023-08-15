import Header from "./components/Header";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import MyWriting from "./pages/MyWriting";
import FreeWriting from "./pages/FreeWriting";

import Test from "./components/Test";
import { Routes, Route } from 'react-router-dom';

function App() {
  document.body.style.backgroundColor = "#708dee";
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mywriting" element={<MyWriting />} />
        <Route path="/inspo" element={<Inspiration />} />
        <Route path="/freewrite" element={<FreeWriting />} />
      </Routes>
    </>
  );
}

export default App;
