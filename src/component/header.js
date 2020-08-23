import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ViewIcon from "@material-ui/icons/ViewList";
import NewIcon from "@material-ui/icons/Star";
import LikeIcon from "@material-ui/icons/ThumbUp";
import UnlikeIcon from "@material-ui/icons/ThumbDown";
import { styled } from "@material-ui/core/styles";

const CustomButton = styled(Button)({
  margin: ".5vw",
});

function Header() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CRUD Application</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <CustomButton
            variant="contained"
            color="primary"
            startIcon={<ViewIcon />}
          >
            View Post
          </CustomButton>
        </Link>
        <Link to="/create">
          <CustomButton
            variant="contained"
            color="primary"
            startIcon={<NewIcon />}
          >
            Create Post
          </CustomButton>
        </Link>
        <Link to="/liked">
          <CustomButton
            variant="contained"
            color="primary"
            startIcon={<LikeIcon />}
          >
            Liked Post
          </CustomButton>
        </Link>
        <Link to="/disliked">
          <CustomButton
            variant="contained"
            color="primary"
            startIcon={<UnlikeIcon />}
          >
            Disliked Post
          </CustomButton>
        </Link>
      </div>
    </div>
  );
}

export default Header;
