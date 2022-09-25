import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { LightTooltip } from "./CustomTooltip";

const ComponentCard = (props) => {
   const { width, subCategory } = props;

   const tooltipTitle = () => (
      <div>
         <Typography variant="h5">{subCategory.name}</Typography>
         <Typography
            variant="body2"
            gutterBottom
         >
            BRAND: {subCategory.brand.toString().toUpperCase()}{" "}
         </Typography>
         <Typography variant="body2">{subCategory.description}</Typography>
         {/* <ul>
            {category.components.split(",").map((item, index) => (
               <li key={index}>
                  <Typography variant="body2">
                     {item.toString().trim()}
                  </Typography>
               </li>
            ))}
         </ul> */}
      </div>
   );

   return (
      <Card sx={{ maxWidth: "100%", minHeight: 350, pl: 1, pr: 1 }}>
         <CardHeader
            title={
               <Typography
                  variant="h6"
                  sx={{ lineHeight: 1 }}
               >
                  {subCategory.name}
               </Typography>
            }
            subheader={
               <Typography
                  variant="caption"
                  sx={{ color: "#808080", fontSize: 9 }}
               >
                  BRAND: {subCategory.brand.toString().toUpperCase()}
               </Typography>
            }
            sx={{ p: 1 }}
            action={
               <LightTooltip
                  title={tooltipTitle()}
                  placement="right-start"
                  enterTouchDelay={10}
                  arrow
               >
                  <IconButton color="secondary">
                     <InfoIcon />
                  </IconButton>
               </LightTooltip>
            }
         />
         <CardMedia
            component="img"
            height="130"
            image={subCategory.image}
            alt="green iguana"
            sx={{ objectFit: "contain", p: 1 }}
         />
         <CardContent>
            <Typography
               variant="body2"
               color="text.secondary"
               sx={
                  width == "xs"
                     ? {
                          fontSize: 11,
                          display: "webkit-flex",
                          WebkitLineClamp: 6,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                       }
                     : {
                          fontSize: 14,
                          display: "webkit-flex",
                          WebkitLineClamp: 6,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                       }
               }
            >
               {subCategory.description}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default ComponentCard;
