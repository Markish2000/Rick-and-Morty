import FooterP from './FooterP';
import style from './style/Footer.module.css';

const Footer = () => {
  return (
    <footer
      className={`footer footer-center p-4 bg-base-300 text-base-content ${style.footer__bg}`}
    >
      <FooterP />
    </footer>
  );
};
export default Footer;
