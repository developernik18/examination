import "./navigationBox.css";
import { useEffect } from "react";

export default function NavigationBox({
  handleQuestionSelection,
  questionAnswer,
  handleAnswers
}) {
  useEffect(() => {
    if (questionAnswer.filter((qA) => qA.active).length < 1) {
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
  }, [handleQuestionSelection, questionAnswer]);


  return (
    <div className="navigationContainer">
      <div className="navigationHeader">
        <span>Question Index</span>
      </div>
      <div className="navigationBody">
        {questionAnswer.map((q, index, qArray) => {
          let count = index + 1;
          let answerStateClass = q.answerId
            ? q.reviewLater
              ? "answerState markedForReview"
              : "answerState questionAnswered"
            : q.leaveQuestion
            ? "answerState leaveQuestion"
            : "answerState";
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
              <div className={answerStateClass}></div>
            </div>
          );
        })}
      </div>
      <div className="submitButtonContainer">
        <button
          className="button submitButton"
          onClick={() => handleAnswers(questionAnswer)}
        >
          Submit Answers
        </button>
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
          <div className="answerStateLabel"> Question Skipped </div>
        </div>
        <div className="answerStateContainer">
          <div className="answerState yetToAnswer"></div>
          <div className="answerStateLabel"> Yet to Answer </div>
        </div>
      </div>
    </div>
  );
}
