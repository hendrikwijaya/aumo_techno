import React from "react";
import Box from "@mui/material/Box";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";

const SpecificLocation = ({ text }) => <RoomIcon />;

const GoogleMapLocation = () => {
   const cCenter = {
      lat: -6.182530666148096,
      lng: 106.82429109719703,
   };
   const cZoom = 17;

   return (
      <Box sx={{ width: "100%", height: 300 }}>
         <GoogleMapReact
            bootstrapURLKeys={{
               key: "AIzaSyCkTf-Kcpsd6KxSZRLeg3JlnCP3tMX-gnU",
            }}
            defaultCenter={cCenter}
            defaultZoom={cZoom}
         >
            <SpecificLocation
               lat={-6.182530666148096}
               lng={106.82429109719703}
            />
         </GoogleMapReact>
      </Box>
   );
};

export default GoogleMapLocation;
