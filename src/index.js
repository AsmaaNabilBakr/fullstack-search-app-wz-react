import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SearchPage from "./pages/SearchPage";
import SearchResults from "./pages/SearchResults";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import styles from "./pages/pageStyles.module.scss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/search-results",
    element: <SearchResults />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Container maxWidth="xl" className={styles.appContent}>
      <RouterProvider router={router} />
    </Container>
    <Footer />
  </React.StrictMode>
);
