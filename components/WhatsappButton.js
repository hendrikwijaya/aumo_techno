import { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const actions = [
   { icon: <WhatsappIcon />, name: "Budhi", waNo: "6281211069246" },
];

export default function WhatsappButton() {
   const [backdropOpen, setBackdropOpen] = useState(false);

   const toggleBackdrop = (type, waNo) => (event) => {
      if (type == "open") {
         setBackdropOpen(true);
      }

      if (type == "close") {
         setBackdropOpen(false);
      }

      if (type == "clickClose") {
         setBackdropOpen(false);

         window.open(`https://wa.me/${waNo}`, "_blank");
      }
   };
   return (
      <Fragment>
         <Backdrop open={backdropOpen} />
         <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ position: "fixed", bottom: 16, right: 16 }}
            icon={
               <SpeedDialIcon
                  icon={<WhatsappIcon />}
                  openIcon={<KeyboardDoubleArrowUpIcon />}
               />
            }
            direction="up"
            onOpen={toggleBackdrop("open")}
            onClose={toggleBackdrop("close")}
            open={backdropOpen}
         >
            {actions.map((action) => (
               <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                  onClick={toggleBackdrop("clickClose", action.waNo)}
               />
            ))}
         </SpeedDial>
      </Fragment>
   );
}
