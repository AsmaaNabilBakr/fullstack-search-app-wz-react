import React from "react";
import Logo from "../assets/logo.svg";
import Styles from "./styles.module.scss";
function Footer() {
  return (
    <div className={Styles.footer}>
      <img src={Logo} alt="Flydubai" />
    </div>
  );
}

export default Footer;
