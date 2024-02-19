import React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
interface TabPanelProps {
  // index: number;
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  labels: string[];
  orientation?: "media" | "horizontal" | "vertical";
}

export default function TabButton({
  value,
  onChange,
  labels,
  orientation,
}: TabPanelProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const fontSize = isMobile ? "16px" : "20px";
  const location = useLocation();
  orientation = location.pathname.startsWith("/detailProduct")
    ? "horizontal"
    : isMobile
    ? "horizontal"
    : "vertical";
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: orientation === "vertical" ? 0 : 2,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={onChange}
          aria-label="basic tabs"
          orientation={orientation}
        >
          {labels.map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                fontSize: { fontSize },
                flexBasis: "25%",
                borderBottom:
                  value === index && orientation === undefined
                    ? "6px solid currentColor"
                    : "none",
                wordBreak: "keep-all",
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
