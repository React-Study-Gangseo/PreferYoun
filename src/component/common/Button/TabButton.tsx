import React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface TabPanelProps {
  // index: number;
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  labels: string[];
  orientation?: "vertical" | undefined;
}

export default function TabButton({ value, onChange, labels }: TabPanelProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const orientation = isMobile ? "horizontal" : "vertical";
  const fontSize = isMobile ? "16px" : "20px";

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
