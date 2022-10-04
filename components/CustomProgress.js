import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CustomProgress = (props) => {
   const { parentHeight } = props;

   return (
      <Box
         sx={{
            width: "100%",
            height: `${parentHeight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <CircularProgress color="secondary" />
      </Box>
   );
};

export default CustomProgress;
