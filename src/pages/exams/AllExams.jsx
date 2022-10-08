import './allExams.css'
import Header from '../../component/header/Header'
import LeftSideBar from '../../component/sidebar/LeftSideBar'
import { Link } from 'react-router-dom'

export default function AllExams() {
  return (
    <div>
      <Header timerRequired={false}/>
      <LeftSideBar />
      <div className="pageBodyContainer">
        <h2 className='pageTitle'> All Exams <span className='totalExams'> - 8 exams </span></h2> 
        <div className="row examCards">
          <div className="card">
            <h4 className="cardTitle">JavaScript Exam</h4>
            <hr className='cardDivider'/>
            <div className="cardBody">
              <div className="examTiming cardRow">
                Exam Duration : 2 hours
              </div>
              <div className="numberOfQuestions cardRow">
                Total Questions : 60 Questions
              </div>
            </div>
            <Link to="/exams" className="button examStartButton primaryButton">
              Start Exam
            </Link>
          </div>
          <div className="card">
            <div className="cardTitle">JavaScript Exam</div>
            <hr className='cardDivider'/>
            <div className="cardBody">
              <div className="examTiming cardRow">
                Exam Duration : 2 hours
              </div>
              <div className="numberOfQuestions cardRow">
                Total Questions : 60 Questions
              </div>
            </div>
            <button className='button examStartButton primaryButton'>Start Exam</button>
          </div>
          <div className="card">
            <div className="cardTitle">JavaScript Exam</div>
            <hr className='cardDivider'/>
            <div className="cardBody">
              <div className="examTiming cardRow">
                Exam Duration : 2 hours
              </div>
              <div className="numberOfQuestions cardRow">
                Total Questions : 60 Questions
              </div>
            </div>
            <button className='button examStartButton primaryButton'>Start Exam</button>
          </div>
        </div>
      </div>
    </div>
  )
}
