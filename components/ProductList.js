import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { withContext } from "../context";

const ProductList = (props) => {
   const { useWidth } = props;
   const width = useWidth();

   return (
      <Paper
         elevation={12}
         sx={{ m: 2 }}
      >
         <Box
            sx={{
               width: "100%",
               height: 450,
               overflowY: "scroll",
               p: 1,
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
               <Grid
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
               >
                  <Card sx={{ maxWidth: "100%", maxHeight: 300 }}>
                     <CardActionArea>
                        <CardMedia
                           component="img"
                           height="100"
                           image="/product_images/Hattersley.png"
                           alt="green iguana"
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant={width == "xs" ? "h6" : "h5"}
                              component="div"
                           >
                              Lizard
                           </Typography>
                           <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={
                                 width == "xs"
                                    ? { fontSize: 11 }
                                    : { fontSize: 14 }
                              }
                           >
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
               <Grid
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
               >
                  <Card sx={{ maxWidth: "100%", maxHeight: 300 }}>
                     <CardActionArea>
                        <CardMedia
                           component="img"
                           height="100"
                           image="/product_images/Hattersley.png"
                           alt="green iguana"
                        />
                        <CardContent>
                           <Typography
                              gutterBottom
                              variant={width == "xs" ? "h6" : "h5"}
                              component="div"
                           >
                              Lizard
                           </Typography>
                           <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={
                                 width == "xs"
                                    ? { fontSize: 11 }
                                    : { fontSize: 14 }
                              }
                           >
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                  </Card>
               </Grid>
            </Grid>
         </Box>
      </Paper>
   );
};

export default withContext(ProductList);
