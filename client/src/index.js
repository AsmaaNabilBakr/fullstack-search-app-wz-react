import { Container } from "@mui/material";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import styles from "./pages/pageStyles.module.scss";
import SearchPage from "./pages/SearchPage";
import SearchResults from "./pages/SearchResults";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/search-results/:query",
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
