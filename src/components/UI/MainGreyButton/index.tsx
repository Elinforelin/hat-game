import React, { FC } from "react";
import Button from "@mui/material/Button";

type MainGreyButtonProps = {
  onClick: () => void;
  title: string;
};

const MainGreyButton: FC<MainGreyButtonProps> = ({ onClick, title }) => {
  return (
    <Button
      // classes={{ root: styles.root }}
      onClick={onClick}
      variant="contained"
    >
      {title}
    </Button>
  );
};

export default MainGreyButton;
