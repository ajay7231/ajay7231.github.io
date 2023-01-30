import React from "react";
import { Typography, Box } from "@mui/material";
import CodeBlock from "./CodeBlock";
import data from "../constants/data";
import Avatar from "./Avatar";
function Introduction() {
  return (
    <Box my={4}>
      <Typography
        variant="h4"
        className="md:text-2xl text-base"
        align="center"
        sx={{ fontFamily: "monospace" }}
      >
        Hello, I'm Ajax
      </Typography>
      <Typography
        className="m-6 md:text-base text-xs "
        variant="subtitle1"
        align="center"
        sx={{ fontFamily: "monospace" }}
      >
        I'm a Software developer with experience building dynamic, responsive
        websites , web applications and Machine Learning.
      </Typography>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Avatar />
      </div>
      <CodeBlock>{data}</CodeBlock>
    </Box>
  );
}

const Content = () => {
  return (
    <div>
      <Introduction />
      {/* <AboutMe /> */}
    </div>
  );
};

export default Content;
