import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import NavigationBox from "./component/navigationBox/NavigationBox";
import QuestionBox from "./component/questionBox/QuestionBox";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionSelection = (ques, quesNo, totalQues) => {
    ques.quesNo = quesNo;
    ques.totalQues = totalQues;
    setActiveQuestion(ques);
  }

  return (
    <div className="App">
      <Header />
      <div className="bodyContainer container">
        <NavigationBox
          handleQuestionSelection={handleQuestionSelection}
          activeQuestion={activeQuestion}
        />
        {activeQuestion && <QuestionBox activeQuestion={activeQuestion} />}
      </div>
    </div>
  );
}

export default App;
