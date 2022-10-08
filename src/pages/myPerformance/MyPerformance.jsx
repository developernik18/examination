import './myPerformance.css'
import Header from '../../component/header/Header'
import LeftSideBar from '../../component/sidebar/LeftSideBar'
import ExamsActivities from '../../component/charts/pieCharts/ExamsActivities'
import ExamsPerformanceStat from '../../component/examsPerformanceStat/ExamsPerformanceStat'
import VerticalBarCharts from '../../component/charts/verticalBarCharts/VerticalBarCharts'

export default function MyPerformance() {
  return (
    <div>
      <Header timerRequired={false}/>
      <LeftSideBar />
      <div className="pageBodyContainer">
        <h2 className='pageTitle'> My Performance </h2> 
        <div className="examStatsRow">
          <ExamsActivities />
          <ExamsPerformanceStat />
        </div>
        <VerticalBarCharts />
      </div>
    </div>
  )
}
