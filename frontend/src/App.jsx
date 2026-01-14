import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/Home.jsx";
import ViewAlbum from "./modules/viewAlbum.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<ViewAlbum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
