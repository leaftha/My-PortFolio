import Contact from "./contact";
import style from "../style/Footer.module.css";

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.contactWrapper}>
        <Contact />
      </div>
    </div>
  );
}

export default Footer;
