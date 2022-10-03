import FigContact from "../contact/FigContact";

import FigQuantityProps from "../../interfaces/FigQuantityProps";

import styles from "./FigQuantity.module.css";

export default function FigQuantity(props: FigQuantityProps): JSX.Element {
  return (
    <div className={ styles[ "fig-qnt-info" ] }>
      <div className={ styles[ "fig-qnt" ] }>Quantidade disponível:</div>
      <div className={ styles[ "fig-available" ] }>
        { props.figQntAvailable }
        <FigContact figNumber={ props.figNumber } />
      </div>
    </div>
  );
}
