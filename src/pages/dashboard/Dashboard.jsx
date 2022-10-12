import './dashboard.css'
import Header from '../../component/header/Header'
import LeftSideBar from '../../component/sidebar/LeftSideBar'
import PerformanceChart from '../../component/charts/lineCharts/PerformanceChart'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  const user = useSelector(state => state.user);
  const examRecords = useSelector(state => state.examRecord)

  return (
    <div>
      <Header timerRequired={false}/>
      <LeftSideBar />
      <div className="pageBodyContainer">
        <h2 className='pageTitle'> Dashboard </h2>
        <div className="row">
          <div className="welcomeBox">
            <div className="greetings">
              Hello, {user.username}
            </div>
            <div className="profileSummary">
              You have completed {examRecords.Completed} exams of the 
              {examRecords.Attempted} attempted exams. 
              Your progress is satisfactory.
            </div>
            {/* <button className='button primaryButton'>
              Continue Exams
            </button> */}
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
                {examRecords.Attempted}
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
        <div className="row">
          <PerformanceChart />
          <div className="showIndividualResult">
            <h5>Your Results</h5>
            <div className="row spaceBetween resultRow">
              <div className="resultlabel">
                Exam 1
              </div>
              <div className="resultPercentage">
                56%
              </div>
            </div>
            <div className="row spaceBetween resultRow">
              <div className="resultlabel">
                Exam 2
              </div>
              <div className="resultPercentage">
                59%
              </div>
            </div>
            <div className="row spaceBetween resultRow">
              <div className="resultlabel">
                Exam 3
              </div>
              <div className="resultPercentage">
                65%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
