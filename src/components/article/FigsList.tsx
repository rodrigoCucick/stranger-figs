import FigHeader from "../header/FigHeader";
import FigImg from "../img/FigImg";
import FigQuantity from "../quantity/FigQuantity";
import FigTags from "../tag/FigTags";

import FigListProps from "../../interfaces/FigListProps";

import styles from "./FigsList.module.css";

export default function FigsList(props: FigListProps): JSX.Element {
  return (
    <section className={ styles[ "fig-section" ] }> {
      props.figData.map(fig => {
        return (
          <article className={ styles[ "fig-article" ] } key={ Math.random()} >
            <FigImg figImgUrl={ fig.figImgUrl } />
            <FigHeader figNumber={ fig.figNumber } />
            <FigQuantity figNumber={ fig.figNumber } figQntAvailable={ fig.figQntAvailable } />
            <FigTags figNumber={ fig.figNumber } figTags={ fig.figTags } />
          </article>
        );
      })
    }
    </section>
  );
}
