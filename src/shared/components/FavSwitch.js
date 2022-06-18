import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const FavSwitch = ({ isFav }) => {
  return (
    <>
      {isFav ? (
        <StarBorderIcon
          style={{
            color: "#001EB9",
          }}
        />
      ) : (
        <StarIcon
          style={{
            color: "#001EB9",
          }}
        />
      )}
    </>
  );
};

export default FavSwitch;
