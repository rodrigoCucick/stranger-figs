import GenericString from "../../interfaces/GenericString";

export default function HeadingTwo(props: GenericString): JSX.Element {
  return (
    <h2>{ props.str }</h2>
  );
}
