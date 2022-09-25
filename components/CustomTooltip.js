import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const BootstrapTooltip = styled(({ className, ...props }) => (
   <Tooltip
      {...props}
      arrow
      classes={{ popper: className }}
   />
))(({ theme }) => ({
   [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
   },
   [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
   },
}));

export const LightTooltip = styled(({ className, ...props }) => (
   <Tooltip
      {...props}
      classes={{ popper: className }}
   />
))(({ theme }) => ({
   [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.primary.main,
   },
   [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary.main,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
   },
}));
