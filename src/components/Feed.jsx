import { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { BorderRight } from "@mui/icons-material";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar />
        <Typography className="copyright" variant="body2" sx={{mt:1.5, color: "#fff"}}> 
          Copyright 2022 MetaCafe.
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
