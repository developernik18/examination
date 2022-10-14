import Header from "../../component/header/Header";
import NavigationBox from "../../component/navigationBox/NavigationBox";
import QuestionBox from "../../component/questionBox/QuestionBox";
import { getExamQuestions } from "../../data/examQuestions";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './exams.css';

export default function Exams() {
  let params = useParams();
  const [questionAnswer, setQuestionAnswer] = useState(getExamQuestions(params.id));
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
      <div className="pageBodyContainer marginLeft0">
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
