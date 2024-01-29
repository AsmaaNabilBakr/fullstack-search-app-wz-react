import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import styles from "./pageStyles.module.scss";
function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.SearchPage}>
      <Box sx={{ width: { xs: "80%", md: "40%" } }}>
        <OutlinedInput
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className={styles.searchInput}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            <a href={`/search-results/${query}`}>
              <ArrowForwardIcon />
            </a>
          }
        />
      </Box>
    </div>
  );
}

export default SearchPage;
