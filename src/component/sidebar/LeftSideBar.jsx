import './leftSideBar.css';
import { Link } from 'react-router-dom';

export default function LeftSideBar() {
  return (
    <nav className='sideBarMenu'>
      <div className="sideBarMenuItem">
        <Link to="/" className='sideBarMenuLink'>
          <span>
            <img src="/images/dashboard.svg" alt="Dashboard icon" className='sideBarMenuIcon' />
          </span>
          <span className="sideBarMenuLabel">
            Dashboard
          </span>
        </Link>
      </div>
      <div className="sideBarMenuItem">
        <Link to="/allExams" className='sideBarMenuLink'>
          <span>
            <img src="/images/exams.svg" alt="Exam icon" className='sideBarMenuIcon' />
          </span>
          <span className="sideBarMenuLabel">
            Exams
          </span>
        </Link>
      </div>
      {/* <div className="sideBarMenuItem">
        <Link to="/leader-board" className='sideBarMenuLink'>
          <span>
            <img src="/images/leaderboard.svg" alt="Dashboard icon" className='sideBarMenuIcon' />
          </span>
          <span className="sideBarMenuLabel">
            Leader Board
          </span>
          
        </Link>
      </div> */}
      <div className="sideBarMenuItem">
        <Link to="/my-performance" className='sideBarMenuLink'>
          <span>
            <img src="/images/performance.svg" alt="Dashboard icon" className='sideBarMenuIcon' />
          </span>
          <span className="sideBarMenuLabel">
            My Performance
          </span>
          
        </Link>
      </div>
    </nav>
  )
}
