import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import { LightTooltip } from "./CustomTooltip";
import { useRouter } from "next/router";

const bull = (
   <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
   >
      •
   </Box>
);

export default function CategoryCard(props) {
   const { category, width } = props;
   const router = useRouter();

   const tooltipTitle = () => (
      <div>
         <Typography
            variant="h6"
            gutterBottom
         >
            {category.Name}
         </Typography>
         <Typography variant="body2">{category.description}</Typography>
         <ul>
            {category.components != undefined &&
               category.components.split(",").map((item, index) => (
                  <li key={index}>
                     <Typography variant="body2">
                        {item.toString().trim()}
                     </Typography>
                  </li>
               ))}
         </ul>
      </div>
   );

   const handleDetaiClick = (linkTitle) => (event) => {
      router.push(`/products/${linkTitle}`);
   };

   return (
      <Card
         sx={{
            maxWidth: "100%",
            minHeight: 250,
            pl: 1,
            pr: 1,
         }}
      >
         <CardHeader
            title={<Typography variant="h6">{category.Name}</Typography>}
            sx={{ p: 1 }}
            action={
               <LightTooltip
                  title={tooltipTitle()}
                  placement="top-start"
                  enterTouchDelay={100}
                  arrow
               >
                  <IconButton color="secondary">
                     <InfoIcon />
                  </IconButton>
               </LightTooltip>
            }
         />
         <CardContent sx={{ p: 1, minHeight: 150 }}>
            <Typography
               variant="body2"
               sx={{
                  display: "webkit-flex",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
               }}
            >
               {category.description}
            </Typography>
         </CardContent>
         <CardActions>
            <Button
               size="small"
               variant="contained"
               color="secondary"
               onClick={handleDetaiClick(category.link)}
            >
               Click for details
            </Button>
         </CardActions>
      </Card>
   );
}
