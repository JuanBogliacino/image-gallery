import { Link } from "react-router-dom"

const HomeAlbum = ({ albumes }) => {
  return (
    <>
    <h1>Álbumes</h1>
    <div className="album-container">
    {
        albumes.map(album => (
            <div key={album.id} className="album-sections">
            <Link to={`/album/${album.id}`}>
            <div className="album-img-container">
            <img src={album.images[0].url} alt="album" />
            </div>
            </Link>
            <p>{album.title}</p>
            </div>
        ))
    }
    </div>
    </>
  )
}

export default HomeAlbum