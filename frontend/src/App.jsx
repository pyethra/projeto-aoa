import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/screens/Home";
import ViewAlbum from "./modules/screens/viewAlbum";

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
