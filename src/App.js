import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import NavigationBox from "./component/navigationBox/NavigationBox";
import QuestionBox from "./component/questionBox/QuestionBox";
import { questionBank } from "./data";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [questionAnswer, setQuestionAnswer] = useState(questionBank);

  const handleQuestionSelection = (ques, quesNo, totalQues, previous, next) => {
    ques.quesNo = quesNo;
    ques.totalQues = totalQues;
    ques.previous = previous;
    ques.next = next;
    setActiveQuestion(ques);
  };

  return (
    <div className="App">
      <Header />
      <div className="bodyContainer container">
        <NavigationBox
          handleQuestionSelection={handleQuestionSelection}
          activeQuestion={activeQuestion}
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
