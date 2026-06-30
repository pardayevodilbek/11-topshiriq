import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="page-box home-box">
      <h2>11-topshiriq</h2>
      <Link to="/Movies" className="btn-link">Kinolarni korish</Link>
      <br />
      <Link to="/bunday-sahifa-yoq" className="broken-link">404 havola</Link>
    </div>
  )
}

export default Home
