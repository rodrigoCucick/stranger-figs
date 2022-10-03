import FigImgProps from "../../interfaces/FigImgProps";

import styles from "./FigImg.module.css";

export default function FigImg(props: FigImgProps): JSX.Element {
  return (
    <div>
      <img src={ props.figImgUrl } alt={ props.figImgUrl } className={ styles[ "fig-img" ] } />
    </div>
  );
}
