import { Route, Routes } from "react-router-dom";
import albumes from './data-images'
import HomeAlbum from "./pages/HomeAlbum";
import ImagesAlbumSelected from "./pages/ImagesAlbumSelected";

function App() {

  return (
    <Routes>
      <Route index element={<HomeAlbum albumes={albumes} />} />
      <Route path="/album/:id" element={<ImagesAlbumSelected albumes={albumes} />} />
    </Routes>
  )
}

export default App