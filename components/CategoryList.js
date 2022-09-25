import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Unstable_Grid2";
import { withContext } from "../context";
import ComponentCard from "./ComponentCard";
import ComponentCard2 from "./ComponentCard2";
import CategoryCard from "./CategoryCard";

const CategoryList = (props) => {
   const { useWidth, categoryData } = props;
   const width = useWidth();

   return (
      <Paper
         elevation={12}
         sx={{ m: 2 }}
      >
         <Divider sx={{ pt: 1 }}>
            <Chip
               size="medium"
               variant="filled"
               color="primary"
               label="OUR PRODUCTS"
            />
         </Divider>
         <Box
            sx={{
               width: "100%",
               minHeight: 450,
               overflowY: "auto",
               p: 2,
               "&::-webkit-scrollbar": {
                  width: "10px",
               },
               "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
               },
               "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderRadius: "10px",
               },
               "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
               },
            }}
         >
            <Grid
               container
               spacing={1}
            >
               {/* <Grid xs={12}>
                  <ComponentCard />
               </Grid>
               <Grid xs={12}>
                  <ComponentCard />
               </Grid> */}
               {categoryData.map((category, index) => (
                  <Grid
                     xs={6}
                     sm={4}
                     md={3}
                     lg={3}
                     key={index}
                  >
                     <CategoryCard
                        width={width}
                        category={category}
                     />
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Paper>
   );
};

export default withContext(CategoryList);
