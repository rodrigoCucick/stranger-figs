import React from "react";

import JSXElements from "../../interfaces/JSXElements";

import styles from "./CenteredDiv.module.css";

export default function CenteredDiv(props: JSXElements): JSX.Element {
  return (
    <div className={ styles[ "centered-div" ] } key={ Math.random() }>
      { props.elements.map(element => React.cloneElement(element, { key: Math.random() })) }
    </div>
  );
}
