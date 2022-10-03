import FigHeaderProps from "../../interfaces/FigHeaderProps";

import styles from "./FigHeader.module.css";

export default function FigHeader(props: FigHeaderProps): JSX.Element {
  return (
    <header className={ styles[ "fig-header" ] }>
      <h2>{ props.figNumber }</h2>
    </header>
  );
}
