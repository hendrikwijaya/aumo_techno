import { useState, Fragment, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text, Circle, Line, Image } from "react-konva";
import useImage from "use-image";

const IndustrialProcessChart = () => {
   const lineRef = useRef(null);

   const ChillerImage = () => {
      const [image] = useImage("/industrial_process_images/cooling_tower.png");
      return (
         <Fragment>
            <Image
               image={image}
               alt="chiller"
               x={30}
               y={30}
               width={100}
               height={100}
            />
            <Rect
               x={20}
               y={20}
               width={120}
               height={120}
               stroke="green"
               lineJoin="round"
               lineCap="round"
            />
         </Fragment>
      );
   };

   const animate = (shape) => {
      // let line1X = 0;
      // let line2X = 0;
      // let line2Y = 0;
      // let line3X = 0;
      // let line3Y = 0;
      let dashOffset = -1;
      let dashOffsetTime = 10; //in seconds

      var anim = new Konva.Animation((frame) => {
         let dashOffsetLimit = -(dashOffsetTime * frame.frameRate);
         // if (line1X < 100) {
         //    shape.points([0, 0, line1X, 0]);
         //    line1X++;
         // } else if (line1X >= 100 && line2Y < 200) {
         //    line2X = line1X;
         //    shape.points([0, 0, line1X, 0, line2X, line2Y]);
         //    line2X++;
         //    line2Y++;
         // } else if (line2Y >= 201) {
         //    console.log(shape.points());
         //    anim.stop();
         // }

         if (dashOffset > dashOffsetLimit) {
            shape.dashOffset(dashOffset);
            dashOffset--;
         } else if (dashOffset <= dashOffsetLimit) {
            anim.stop();
         }
      });

      anim.start();
   };

   const handleClick = () => {
      const shapeLine = lineRef.current;
      // shapeLine.to({
      //    x: 100,
      //    duration: 2,
      // });
      animate(shapeLine);
   };

   return (
      <Fragment>
         <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onClick={(event) => {
               console.log(`x : ${event.evt.layerX}, y: ${event.evt.layerY}`);
            }}
         >
            <Layer>
               <Line
                  x={0}
                  y={0}
                  points={[30, 260, 330, 260, 330, 470, 580, 470]}
                  lineJoin="round"
                  stroke="grey"
                  strokeWidth={10}
                  onClick={handleClick}
               />

               {/* <Line
                  ref={lineRef}
                  x={20}
                  y={50}
                  lineCap="round"
                  lineJoin="round"
                  stroke="lightBlue"
                  strokeWidth={10}
                  onClick={handleClick}
               /> */}

               <Line
                  ref={lineRef}
                  x={0}
                  y={0}
                  points={[30, 260, 330, 260, 330, 470, 580, 470]}
                  stroke="lightGreen"
                  strokeWidth={4}
                  dash={[30, 30]}
                  dashOffset={0}
                  onClick={handleClick}
               />
               <ChillerImage />
            </Layer>
         </Stage>
      </Fragment>
   );
};

export default IndustrialProcessChart;
