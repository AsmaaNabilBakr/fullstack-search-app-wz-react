import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./pageStyles.module.scss";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  return (
    <div className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, You Need to add a Search Query First.</p>
      <Button onClick={() => navigate("/")}>
        <KeyboardBackspaceIcon />
        Search Again
      </Button>
    </div>
  );
}
