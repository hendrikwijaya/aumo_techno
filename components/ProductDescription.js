import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const ProductDescription = (props) => {
   const { selectedCategory } = props;

   return (
      <Paper
         elevation={12}
         sx={{ m: 2 }}
      >
         <Box
            sx={{
               height: 100,
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <Typography
               variant="h4"
               sx={{ color: "text.secondary" }}
            >
               {selectedCategory.Name}
            </Typography>
         </Box>
         <Divider />
         <Box
            sx={{
               px: 2,
               pt: 2,
               width: "100%",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
            }}
         >
            <Typography
               variant="body1"
               sx={{ color: "text.secondary" }}
            >
               {selectedCategory.description}
            </Typography>
         </Box>
         <Box sx={{ display: "block", pb: 2 }}>
            <ul>
               {selectedCategory.components != undefined &&
                  selectedCategory.components.split(",").map((item, index) => (
                     <li key={index}>
                        <Typography variant="body2">
                           {item.toString().trim()}
                        </Typography>
                     </li>
                  ))}
            </ul>
         </Box>
      </Paper>
   );
};

export default ProductDescription;
