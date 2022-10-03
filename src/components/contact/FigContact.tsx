import FigContactProps from "../../interfaces/FigContactProps";

import styles from "./FigContact.module.css";

export default function FigContact(props: FigContactProps): JSX.Element {
  const contactUrl: string = `https://wa.me/5511950446044?text=Gostaria%20de%20trocar%20minha(s)%20figurinhas(s)%20por%20sua%20figurinha%20de%20número%20${props.figNumber}.`
  const imgClasses = [ styles[ "whats-img" ], styles[ "z-index-2" ], styles.absolute].join(' ');
  
  return (
    <a href={ contactUrl } target="_blank" rel="noreferrer noopener">
        <img
          src="./res/whatsappLogoSmall.png"
          alt="What's App logo."
          title="Fale comigo no What's App! Abrirá em uma nova aba."
          className={ imgClasses }
        />
    </a>
  );
}
