import './examsActivities.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Correct', "Incorrect", "Not Attempted"],
  datasets: [
    {
      label: 'Examination till date',
      data: [12, 19, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 255, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(155, 155, 155, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function ExamsActivities() {
  return (
    <div className='examsActivitiesContainer'>
      <h4 className='sectionTitle'> Exam Activity </h4>
      <div className="doughnutContainer">
        <Doughnut data={data} />
      </div>
    </div>
  )
}
