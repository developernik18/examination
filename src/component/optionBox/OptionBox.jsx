import "./optionBox.css";

export default function OptionBox({
  option,
  handleAnswerSelection,
  activeQuestion,
}) {
  return (
    <div
      className={
        activeQuestion.answerId === option.id
          ? activeQuestion.reviewLater
            ? "optionBox reviewLater"
            : "optionBox selected"
          : "optionBox"
      }
      onClick={() => handleAnswerSelection(activeQuestion, option)}
    >
      {option.desc}
    </div>
  );
}
