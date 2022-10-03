import Chart from "chart.js/auto";
import { ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

import CenteredDiv from "../containers/CenteredDiv";

import FigsCollectionController from "../../controllers/FigsCollectionController";

export default function FigsCollectionChart(): JSX.Element {
  Chart.register(ArcElement);

  return (
    <CenteredDiv elements={[
      <Pie data={ generateChartData() } options={ generateChartOptions() } />
    ]}/>
  );
}

function generateChartData() {
  const figsCollectionController: FigsCollectionController = new FigsCollectionController();
  let totalCollected: number = 0;
  let totalNotCollected: number = 0;

  figsCollectionController.obtainFigsCollection().figs.forEach(fig => {
    fig.figIsCollected ? totalCollected++ : totalNotCollected++;
  });

  return {
    labels: [ "Coletadas", "Não Coletadas" ],
    datasets: [{
      data: [ totalCollected, totalNotCollected ],
      backgroundColor: [
        "rgba(75, 192, 80, 0.5)",
        "rgba(255, 99, 100, 0.5)"
      ],
      borderColor: [
        "rgba(75, 192, 80, 1)",
        "rgba(255, 99, 100, 1)"
      ],
      borderWidth: 1
    }]
  };
}

function generateChartOptions() {
  return {
    maintainAspectRatio: true,
    responsive: true    
  }
}
