import FigTagsProps from "../../interfaces/FigTagsProps";

import styles from "./FigTags.module.css";

export default function FigTags(props: FigTagsProps): JSX.Element {
  return (
    <div className={styles.tags}> {
      props.figTags.map(figTag => {
        return (
          <a href={ `#${props.figNumber}` } key={ Math.random() }>{ figTag }</a>
        );
      })
    }
    </div>
  );
}
