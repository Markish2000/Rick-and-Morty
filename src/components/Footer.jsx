/** @format */

import style from "../style/Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`footer footer-center p-4 bg-base-300 text-base-content ${style.footer__bg}`}>
      <div>
        <p className={style.p__color}>
          <b>Copyright © 2022 - All right reserved by Marcos Hernan Parella</b>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
