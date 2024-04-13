import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Bio from "./page/Bio";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

