import './optionBox.css';

export default function OptionBox({option}) {
  return (
    // <label className="radioField">
    //   <input type="radio" id={`option`} name="question1" value="a" />
    //   {option.desc}
    // </label>
    <div className="optionBox">
      {option.desc}
    </div>
  )
}
