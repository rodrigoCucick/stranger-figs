import CenteredDiv from "./components/containers/CenteredDiv";
import FigsCollectionChart from "./components/chart/FigsCollectionChart";
import FigsCollectionTable from "./components/table/FigsCollectionTable";
import FigsList from "./components/article/FigsList";
import HeadingOne from "./components/heading/HeadingOne";
import HeadingTwo from "./components/heading/HeadingTwo";
import PageFooter from "./components/footer/pageFooter";

import FigsCollectionController from "./controllers/FigsCollectionController";
import FigsListController from "./controllers/FigsListController";

export default function App(): JSX.Element {
  const figsCollectionController: FigsCollectionController = new FigsCollectionController();
  const figsListController: FigsListController = new FigsListController();

  return (
    <>
      <CenteredDiv elements={[
        <HeadingOne str={ "Figurinhas Repetidas - Álbum Stranger Things" } />,
        <HeadingTwo str={ "Season 1" } />
      ]}/>
      <FigsList figData={ figsListController.createSeasonOneFigs() } />

      <CenteredDiv elements={ [<HeadingTwo str={ "Season 2" } />] }/>
      <FigsList figData={ figsListController.createSeasonTwoFigs() } />

      <CenteredDiv elements={ [<HeadingTwo str={ "Season 3" } />] }/>
      <FigsList figData={ figsListController.createSeasonThreeFigs() } />

      <CenteredDiv elements={ [<HeadingTwo str={ "Season 4" } />] }/>
      <FigsList figData={ figsListController.createSeasonFourFigs() } />

      <CenteredDiv elements={ [<HeadingOne str={ "Status Geral da Coleção" } />] }/>

      <CenteredDiv elements={[
        <FigsCollectionTable figsCollection={ figsCollectionController.obtainFigsCollection() } />
      ]}/>

      <FigsCollectionChart />

      <PageFooter/>
    </>
  );
}
