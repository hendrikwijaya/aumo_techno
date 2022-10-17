import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import dynamic from "next/dynamic";
import { useInterval } from "./useInterval";
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer1 = (props) => {
   // const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), {
   //    ssr: true,
   // });
   const {
      interval,
      caption,
      customSegmentLabels,
      segments,
      ringWidth,
      maxValue,
      minValue,
      needleHeightRatio,
      needleColor,
      startColor,
      endColor,
      needleTransitionDuration,
      segmentColors,
   } = props;

   const [speedoValue, setSpeedoValue] = useState(10);

   const cInterval =
      interval == undefined || interval == null ? 1000 : interval;

   const cCaption =
      caption == undefined || interval == null
         ? "Gauge Meter : ${value}"
         : caption;

   const cCustomSegmentLabels =
      customSegmentLabels == undefined || customSegmentLabels == null
         ? []
         : customSegmentLabels;

   const cSegments = segments == undefined || segments == null ? 3 : segments;
   const cMaxValue = maxValue == undefined || maxValue == null ? 120 : maxValue;
   const cMinValue = minValue == undefined || minValue == null ? 0 : minValue;
   const cSegmentColor =
      segmentColors == undefined || segmentColors == null ? [] : segmentColors;
   const cNeedleColor =
      needleColor == undefined || needleColor == null ? "#455a64" : needleColor;
   const cStartColor =
      startColor == undefined || startColor == null ? "#ff1744" : startColor;
   const cEndColor =
      endColor == undefined || endColor == null ? "#00e676" : endColor;
   const cNeedleTransitionDuration =
      needleTransitionDuration == undefined || needleTransitionDuration == null
         ? 500
         : needleTransitionDuration;
   const cNeedleHeightRatio =
      needleHeightRatio == undefined || needleHeightRatio == null
         ? 0.7
         : needleHeightRatio;
   const cRingWidth =
      ringWidth == undefined || ringWidth == null ? 50 : ringWidth;

   useInterval(() => {
      if (speedoValue < 120) {
         setSpeedoValue((value) => value + 10);
      } else {
         setSpeedoValue(0);
      }
   }, cInterval);

   return (
      <Fragment>
         <ReactSpeedometer
            maxValue={cMaxValue}
            minValue={cMinValue}
            value={speedoValue}
            needleColor={cNeedleColor}
            startColor={cStartColor}
            endColor={cEndColor}
            segments={cSegments}
            needleTransition="easeCircleInOut"
            needleTransitionDuration={cNeedleTransitionDuration}
            needleHeightRatio={cNeedleHeightRatio}
            fluidWidth={true}
            currentValueText={cCaption}
            customSegmentLabels={cCustomSegmentLabels}
            ringWidth={cRingWidth}
            segmentColors={cSegmentColor}
         />
      </Fragment>
   );
};

export default Speedometer1;
