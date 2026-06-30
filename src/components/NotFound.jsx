import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="notfound-box">
      <h2>404</h2>
      <p>Siz qidirgan sahifa topilmadi</p>
      <Link to="/">Bosh sahifaga qaytish</Link>
    </div>
  )
}

export default NotFound
