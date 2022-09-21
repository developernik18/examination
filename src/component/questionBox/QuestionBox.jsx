import "./questionBox.css";
import OptionBox from "../optionBox/OptionBox";

export default function QuestionBox({
  activeQuestion,
  handleQuestionSelection,
  questionAnswer,
  setQuestionAnswer
}) {

  const handleAnswerSelection = (activeQuestion, option) => {
    setQuestionAnswer(prev => {
      return prev.map(p => {
        if(p.id === activeQuestion.id) {
          if(p.answerId === option.id) {
            return {...p, answerId: null, reviewLater: false, leaveQuestion: false};
          }
          return {...p, answerId: option.id, reviewLater: false, leaveQuestion: false};
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

  const handleMarkingForReview = (activeQuestion) => {
    setQuestionAnswer(prev => {
      return prev.map(p => {
        if(activeQuestion.id === p.id) {
          if(p.reviewLater) {
            return {...p, "reviewLater": false};
          }
          return {...p, "reviewLater": true};
        }
        return p;        
      })
    })
  }

  const handleQuestionsToLeave = (activeQuestion) => {
    setQuestionAnswer(prev => {
      return prev.map(p => {
        if(activeQuestion.id === p.id) {
          if(p.leaveQuestion) {
            return {...p, "leaveQuestion": false};
          }
          return {...p, "leaveQuestion": true};
        }
        return p;        
      })
    })
  }

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
        {activeQuestion.answerId &&
          (<button
            className="button reviewMarkingButton"
            onClick={() => handleMarkingForReview(activeQuestion)}
          >
            Review Later
          </button>)
        }
        {!activeQuestion.answerId &&
          (<button
            className="button leaveQuestionButton"
            onClick={() => handleQuestionsToLeave(activeQuestion)}
          >
            Don't Know
          </button>)
        }
        {activeQuestion.previousId && (
          <button
            className="button previousButton"
            onClick={() => handlePreviousButton(activeQuestion)}
          >
            Previous
          </button>
        )}
        {activeQuestion.nextId && (
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
