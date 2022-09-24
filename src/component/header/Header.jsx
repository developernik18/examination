import Timer from '../timer/Timer';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header({timerRequired}) {
  return (
    <div className='headerContainer'>
      <div className="container headerItemsContainer">
        <Link to="/" className="logo">
            Exam Time
        </Link>
        {timerRequired && (
          <div className="timer">
            <Timer />
          </div>
        )}

      </div>
    </div>
  )
}
