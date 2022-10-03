import GenericString from "../../interfaces/GenericString";

export default function HeadingOne(props: GenericString): JSX.Element {
  return (
    <h1>{ props.str }</h1>
  );
}
