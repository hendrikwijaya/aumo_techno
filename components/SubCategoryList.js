import { Fragment } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import { withContext } from "../context";
import ComponentCard from "./ComponentCard";
import ComponentCard2 from "./ComponentCard2";
import ProductDescription from "./ProductDescription";
import CustomProgress from "./CustomProgress";

const SubCategoryList = (props) => {
   const { useWidth, subCategoryData, selectedCategory, isLoading } = props;
   const width = useWidth();

   return (
      <Fragment>
         <ProductDescription
            selectedCategory={selectedCategory}
            isLoading={isLoading}
         />
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
               {isLoading == true ? (
                  <CustomProgress parentHeight="450px" />
               ) : (
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
                     {subCategoryData != undefined &&
                        subCategoryData.map((subCategory, index) => (
                           <Grid
                              xs={12}
                              sm={4}
                              md={3}
                              lg={3}
                              key={index}
                           >
                              <ComponentCard2
                                 width={width}
                                 subCategory={subCategory}
                              />
                           </Grid>
                        ))}
                  </Grid>
               )}
            </Box>
         </Paper>
      </Fragment>
   );
};

export default withContext(SubCategoryList);
