import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./pageStyles.module.scss";
function SearchResults() {
  const navigate = useNavigate();
  const { query } = useParams();
  const [resultsToShow, setResultsToShow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://search-app-server.vercel.app/search?q=${query}`
        );
        const data = await response.json();
        setResultsToShow(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);
  return (
    <div className={styles.searchResultsPage}>
      <Button onClick={() => navigate("/")}>
        <KeyboardBackspaceIcon />
        Back
      </Button>
      <h1>Search Results:</h1>
      {resultsToShow.length > 0 ? (
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {resultsToShow.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
              <Card className={styles.card}>
                <div className={styles.cardImg}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="green iguana"
                  />
                </div>
                <CardContent>
                  <h2 variant="h5" component="div">
                    {item.title}
                  </h2>
                  <p variant="body2" color="text.secondary">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <h3>No Data to show, back and search again.</h3>
      )}
    </div>
  );
}

export default SearchResults;
