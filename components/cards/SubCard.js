"use client";
import PropTypes from "prop-types";
import { forwardRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

const headerSX = {
  "& .MuiCardHeader-action": { mr: 0 },
};
// ==============================|| CUSTOM MAIN CARD ||============================== //

const SubCard = forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass = "",
      contentSX = {},
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...others
    },
    ref
  ) => {
    const titleStyle = {
      fontSize: "1.1rem",
      color: "#0033cc",
      fontFamily: "Poppins",
      lineHeight: 1.3,
      fontWeight: 550,
    };
    return (
      <Card
        ref={ref}
        {...others}
        sx={{
          boxShadow: "none",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "rgb(238, 220, 238)",
        }}
      >
        {/* card header and action */}
        {title && (
          <CardHeader
            sx={headerSX}
            title={
              // Apply custom style to the title
              <Typography variant="h4" sx={titleStyle}>
                {title}
              </Typography>
            }
          />
        )}
        {/* content & header divider */}
        {title && <Divider />}

        {/* card content */}
        {content && <CardContent>{children}</CardContent>}
        {!content && children}
      </Card>
    );
  }
);

SubCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default SubCard;
