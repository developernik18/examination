import Timer from '../timer/Timer';
import './header.css';

export default function Header() {
  return (
    <div className='headerContainer'>
      <div className="container headerItemsContainer">
        <div className="logo">
          Exam Time
        </div>
        <div className="timer">
          <Timer />
        </div>
      </div>
    </div>
  )
}
