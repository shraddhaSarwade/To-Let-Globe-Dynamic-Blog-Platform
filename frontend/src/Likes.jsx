import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Likes({ likes }) {
  return (
    <>
      <span id="visIcon">
        <FavoriteBorderIcon style={{ color: "#9da2af", fontSize: "medium" }} />
      </span>
      <span> </span>
      <span style={{ color: "#9da2af" }}>{likes}</span>
    </>
  );
}

export default Likes;
