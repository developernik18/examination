import "./navigationBox.css";
import { questionBank } from "../../data";
import { useEffect } from "react";

export default function NavigationBox({activeQuestion, handleQuestionSelection}) {
  useEffect(() => {
    if(questionBank.length && activeQuestion === null) {
      const quesNo = 1;
      handleQuestionSelection(questionBank[0], quesNo, questionBank.length)
    }
  }, [handleQuestionSelection, activeQuestion]);

  return (
    <div className="navigationContainer">
      <div className="navigationHeader">
        <span>Question Index</span>
        <button> &lt;&lt; </button>
      </div>
      <div className="navigationBody">
        {questionBank.map((q, index, qArray) => {
          let count = index + 1;
          return (
            <div
              className="questionNavigation"
              key={q.id}
              onClick={() => handleQuestionSelection(q, count, qArray.length)}
            >
              <div className="questinNumberDisplay">{count}</div>
              <div className="answerState"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
