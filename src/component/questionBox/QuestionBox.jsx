import "./questionBox.css";
import OptionBox from "../optionBox/OptionBox";

export default function QuestionBox({
  activeQuestion,
  handleQuestionSelection,
  questionAnswer,
  setQuestionAnswer
}) {

  const handleAnswerSelection = (activeQuestion, option) => {
    activeQuestion.answerId = option.id;
    
    setQuestionAnswer(prev => {
      return prev.map(p => {
        if(p.id === activeQuestion.id) {
          return {...p, answerId: option.id}
        }
        return p;
      })
    })    
  };

  const handleNextButton = (activeQuestion) => {
    questionAnswer.forEach((q, index, qBank) => {
      if (q.id === activeQuestion.id) {
        const quesNo = index + 2;
        const previous = q;
        const next = qBank[index + 2];
        handleQuestionSelection(
          qBank[index + 1],
          quesNo,
          questionAnswer.length,
          previous,
          next
        );
      }
    });
  };

  const handlePreviousButton = (activeQuestion) => {
    questionAnswer.forEach((q, index, qBank) => {
      if (q.id === activeQuestion.id) {
        const quesNo = index;
        const previous = qBank[index - 2];
        const next = qBank[index];
        handleQuestionSelection(
          qBank[index - 1],
          quesNo,
          questionAnswer.length,
          previous,
          next
        );
      }
    });
  };

  return (
    <div className="questionBox">
      <div className="questionCard">
        <div className="questionSection">
          <div className="questionCountSection">
            <span className="currentNumber">
              Question {activeQuestion.quesNo}
            </span>
            &nbsp;of&nbsp;{activeQuestion.totalQues}
          </div>
          {activeQuestion.question}
        </div>
        <div className="optionSection">
          {activeQuestion.options.map((option) => {
            return (
              <OptionBox
                key={option.id}
                option={option}
                handleAnswerSelection={handleAnswerSelection}
                activeQuestion={activeQuestion}
              />
            );
          })}
        </div>
      </div>
      <div className="buttonGroup">
        {activeQuestion.previous && (
          <button
            className="button previousButton"
            onClick={() => handlePreviousButton(activeQuestion)}
          >
            Previous
          </button>
        )}
        {activeQuestion.next && (
          <button
            className="button nextButton"
            onClick={() => handleNextButton(activeQuestion)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
