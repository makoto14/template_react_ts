import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTestNum, setTestNum } from "../store/testStore";

const Main: React.VFC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const testNum: number = useSelector(getTestNum);

  const hundleSub = () => {
    navigate("/sub");
  };

  const add = () => {
    dispatch(setTestNum(testNum + 2));
  };

  return (
    <Box>
      <Button variant="text" color="primary" onClick={hundleSub}>
        to Sub page
      </Button>

      <Button variant="text" color="primary" onClick={add}>
        add
      </Button>

      {testNum}
    </Box>
  );
};

export default Main;
