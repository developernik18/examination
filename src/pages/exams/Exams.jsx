import Header from "../../component/header/Header";
import NavigationBox from "../../component/navigationBox/NavigationBox";
import QuestionBox from "../../component/questionBox/QuestionBox";
import { questionBank } from "../../data";
import { useState } from "react";
import LeftSideBar from "../../component/sidebar/LeftSideBar";
import './exams.css';

export default function Exams() {
  const [questionAnswer, setQuestionAnswer] = useState(questionBank);
  const activeQuestion = questionAnswer.filter(qA => qA.active)[0];

  const handleQuestionSelection = (ques, quesNo, totalQues, previous, next) => {
    let newQues = {...ques};
    newQues.quesNo = quesNo;
    newQues.totalQues = totalQues;
    newQues.previousId = previous?.id;
    newQues.nextId = next?.id;
    newQues.active = true;
    setQuestionAnswer(prev => {
      return prev.map(p => {
        if(p.id === newQues.id) {
          return newQues;
        } else {
          return {...p, active: false};
        }
      })
    })
  };

  return (
    <div>
      <Header timerRequired={true}/>
      <LeftSideBar />
      <div className="pageBodyContainer">
        <div className="bodyContainer">
          {activeQuestion && (
            <QuestionBox
              activeQuestion={activeQuestion}
              handleQuestionSelection={handleQuestionSelection}
              questionAnswer={questionAnswer}
              setQuestionAnswer={setQuestionAnswer}
            />
          )}
          <NavigationBox
            handleQuestionSelection={handleQuestionSelection}
            questionAnswer={questionAnswer}
          />
        </div>

      </div>
      
    </div>
  );
}
