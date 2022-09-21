import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import NavigationBox from "./component/navigationBox/NavigationBox";
import QuestionBox from "./component/questionBox/QuestionBox";
import { questionBank } from "./data";

function App() {
  // const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionAnswer, setQuestionAnswer] = useState(questionBank);
  const activeQuestion = questionAnswer.filter(qA => qA.active)[0];

  const handleQuestionSelection = (ques, quesNo, totalQues, previous, next) => {
    let newQues = {...ques};
    newQues.quesNo = quesNo;
    newQues.totalQues = totalQues;
    newQues.previousId = previous?.id;
    newQues.nextId = next?.id;
    newQues.active = true;
    // setActiveQuestion(newQues);
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
    <div className="App">
      <Header />
      <div className="bodyContainer container">
        <NavigationBox
          handleQuestionSelection={handleQuestionSelection}
          questionAnswer={questionAnswer}
        />
        {activeQuestion && (
          <QuestionBox
            activeQuestion={activeQuestion}
            handleQuestionSelection={handleQuestionSelection}
            questionAnswer={questionAnswer}
            setQuestionAnswer={setQuestionAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
