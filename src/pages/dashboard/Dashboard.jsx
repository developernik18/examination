import './dashboard.css'
import Header from '../../component/header/Header'
import LeftSideBar from '../../component/sidebar/LeftSideBar'

export default function Dashboard() {
  return (
    <div>
      <Header timerRequired={false}/>
        <LeftSideBar />
        <div className="dashboardBodyContainer">
          <h2 className='pageTitle'> Dashboard </h2>
          <div className="row">
            <div className="welcomeBox">
              <div className="greetings">
                Hello, John Doe
              </div>
              <div className="profileSummary">
                You have completed 4 tests. You have Attempted 8 tests. 
                Your progress is satisfactory.
              </div>
              <button className='button primaryButton'>
                Continue Exams
              </button>
            </div>
            <div className="statsOverview">
              <div className="statsBox rightBottomShadow">
                <div className="statLabel">
                  Overall Score
                </div>
                <div className="statValue">
                  57
                </div>
              </div>
              <div className="statsBox leftBottomShadow">
                <div className="statLabel">
                  Accuracy 
                </div>
                <div className="statValue">
                  57 %
                </div>
              </div>
              <div className="statsBox rightTopShadow">
                <div className="statLabel">
                  Attempted exams
                </div>
                <div className="statValue">
                  4 
                </div>
              </div>
              <div className="statsBox leftTopShadow">
                <div className="statLabel">
                  Percentage 
                </div>
                <div className="statValue">
                  50 %
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}