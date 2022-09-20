import "./navigationBox.css";
import { useEffect } from "react";

export default function NavigationBox({
  activeQuestion,
  handleQuestionSelection,
  questionAnswer
}) {

  useEffect(() => {
    if (questionAnswer.length && activeQuestion === null) {
      const quesNo = 1;
      const previous = null;
      const next = questionAnswer[1];
      handleQuestionSelection(
        questionAnswer[0],
        quesNo,
        questionAnswer.length,
        previous,
        next
      );
    }
  }, [handleQuestionSelection, activeQuestion, questionAnswer]);

  return (
    <div className="navigationContainer">
      <div className="navigationHeader">
        <span>Question Index</span>
        <button className="collapseButton"> &lt;&lt; </button>
      </div>
      <div className="navigationBody">
        {questionAnswer.map((q, index, qArray) => {
          let count = index + 1;
          return (
            <div
              className="questionNavigation"
              key={q.id}
              onClick={() =>
                handleQuestionSelection(
                  q,
                  count,
                  qArray.length,
                  qArray[index - 1],
                  qArray[index + 1]
                )
              }
            >
              <div className="questinNumberDisplay">{count}</div>
              <div className="answerState"></div>
            </div>
          );
        })}
      </div>
      <div className="markForAnswers">
        <div className="answerStateContainer">
          <div className="answerState questionAnswered"></div> 
          <div className="answerStateLabel"> Question Answered </div> 
        </div>
        <div className="answerStateContainer">
          <div className="answerState markedForReview"></div>
          <div className="answerStateLabel"> Marked for Review </div>
        </div>
        <div className="answerStateContainer">
          <div className="answerState leaveQuestion"></div>
          <div className="answerStateLabel"> Leave Question </div> 
        </div>
        <div className="answerStateContainer">
          <div className="answerState yetToAnswer"></div>
          <div className="answerStateLabel"> Yet to Answer </div>
        </div>
      </div>
    </div>
  );
}
