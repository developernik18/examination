import './questionBox.css';
import { questionBank } from '../../data';
import OptionBox from '../optionBox/OptionBox';

export default function QuestionBox({activeQuestion}) {
  console.log(activeQuestion)
  return (
    <div className='questionBox'>
      <div className="questionCard">
        <div className="questionSection">
          <div className="questionCountSection">
            <span className='currentNumber'> Question {activeQuestion.quesNo} </span>  
            of&nbsp;{activeQuestion.totalQues}
          </div>
          {activeQuestion.question}
        </div>
        <div className="optionSection">
          {activeQuestion.options.map((option) => {
            return <OptionBox key={option.id} option={option}/>
          })}
        </div>
      </div>


{/*     
      {questionBank.map((q, index) => {
        return (
          <div key={q.id}>
            <div className="question">
              <span>Question {index + 1} :</span>
              <span> {q.question} </span>
            </div>
            {q.options.map((o) => {
              return <OptionBox key={o.id} option={o}/>
            })}
          </div>
        )
      })} */}
    </div>
  )
}
