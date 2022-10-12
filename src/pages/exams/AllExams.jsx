import './allExams.css'
import Header from '../../component/header/Header'
import LeftSideBar from '../../component/sidebar/LeftSideBar'
import { Link } from 'react-router-dom'
import { allExamsData } from '../../data/allExamData'

export default function AllExams() {
  return (
    <div>
      <Header timerRequired={false}/>
      <LeftSideBar />
      <div className="pageBodyContainer">
        <h2 className='pageTitle'> All Exams <span className='totalExams'> - 8 exams </span></h2> 
        <div className="row examCards">
          {allExamsData.map((exam) => {
            return (
              <div className="card">
                <h4 className="cardTitle"> {exam.Name} </h4>
                <hr className='cardDivider'/>
                <div className="cardBody">
                  <div className="examTiming cardRow">
                    Exam Duration : {exam.Duration} hours
                  </div>
                  <div className="numberOfQuestions cardRow">
                    Total Questions : {exam.Questions} Questions
                  </div>
                </div>
                <Link to={`/exams/${exam.id}`} className='button examStartButton primaryButton'>
                  Start Exam
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  )
}
