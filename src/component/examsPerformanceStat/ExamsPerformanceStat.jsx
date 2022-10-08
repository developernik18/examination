import './examsPerformanceStat.css'

const pO = 25;
const aO = 40;

export default function ExamsPerformanceStat() {
  const background1 = `linear-gradient(to right, rgba(255, 99, 132, 1) ${pO}%, rgb(244, 244, 244) 0%)`;
  const background2 = `linear-gradient(to right, rgba(54, 162, 235, 1) ${aO}%, rgb(244, 244, 244) 0%)`;

  return (
    <div className='examsPerformanceStatContainer'>
      <div className="epstatsContainer">
        <section className="epStats">
          <h4 className='performanceTitle'>
            Performance overall:
          </h4>
          <div className="performanceOverallBox">
            <div className="performanceOverallProgressBar" 
              style={{background: background1}}></div>
            <div className="performanceOverallValue"> {pO} % </div>
          </div>
        </section>
        <section className="epStats">
          <h4 className='performanceTitle'>
            Accuracy overall:
          </h4>
          <div className="performanceOverallBox">
            <div className="performanceOverallProgressBar" 
              style={{background: background2}}></div>
            <div className="performanceOverallValue"> {aO} % </div>
          </div>
        </section>
      </div>
    </div>
  )
}

