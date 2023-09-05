import Header from "./components/Header";
import Home from "./pages/Home";
import Inspiration from "./pages/Inspiration";
import MyWriting from "./pages/MyWriting";
import FreeWriting from "./pages/FreeWriting";
import Login from "./pages/Login";
import Test from "./components/Test";

import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  document.body.style.backgroundColor = "#708dee";
  const theme = createTheme({
    typography: {
      fontFamily: ["Chilanka", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme = {theme}>
      <Login/>
      {/* <Header /> */}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/mywriting" element={<MyWriting />} />
        <Route path="/inspo" element={<Inspiration />} />
        <Route path="/freewrite" element={<FreeWriting />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
