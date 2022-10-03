import CenteredDiv from "../containers/CenteredDiv";

import styles from "./pageFooter.module.css";

export default function pageFooter(): JSX.Element {
  return (
    <CenteredDiv elements={[
      <footer>
        <hr/>
        <div>
          <a href="https://github.com/rodrigoCucick/stranger-figs">
            <img className={ styles[ "footer-img" ] } src="./res/githubLogoLight.png" alt="" title={ `Free, as in free speech.` } />
          </a>
        </div>
        <p>Rodrigo M. Cucick, 2022.</p>
      </footer>
    ]}/>
  );
}
