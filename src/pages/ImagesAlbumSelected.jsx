import { Link, useParams } from "react-router-dom"
import ImageGallery from "../components/ImageGallery";

const ImagesAlbumSelected = ({ albumes }) => {
    const { id } = useParams()

  return (
    <>
    <Link className='link' to='/'>
    <h1>Álbumes</h1>
    </Link>
    <ImageGallery albumeTitle={albumes[(id - 1)].title} images={albumes[(id - 1)].images} />
    </>
  )
}

export default ImagesAlbumSelected