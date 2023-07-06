import React from "react";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({data,bodyPart,setBodyPart , isBodyPart}) => {
  
  
  return (
    <>
    <div
      style={{ display: "flex", overflowY: "scroll", whiteSpace: "nowrap" }}
    >
      <Typography className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>

      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          tittle={item.id || item}
          m="0 40px"
        >
          {isBodyPart ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
      <Typography className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    </div>
  </>
  )
}

export default HorizontalScrollBar;
// LeftArrow={LeftArrow} RightArrow={RightArrow}