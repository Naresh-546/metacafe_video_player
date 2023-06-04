import { useState, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Sidebar, Videos } from "./index";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [video, setVideo] = useState([]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{mt:1.5, color: "#fff"}}> 
          Copyright 2022 MetaCafe.
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: "auto", height: "95vh", flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}> 
         {selectedCategory}  <span style={{ color: "#F31503"}}>Videos</span>
        </Typography>
        <Videos Videos={video}/>
      </Box>
    </Stack>
  );
};

export default Feed;
