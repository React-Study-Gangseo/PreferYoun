import React from "react";
import  Tab  from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Box } from "@mui/material";

interface TabPanelProps {
    // index: number;
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void; 
    labels: string[];  
    orientation?: "vertical" | undefined;
}

export default function TabButton({value, onChange, labels, orientation}: TabPanelProps) {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: (orientation === "vertical") ? 0 : 2, borderColor: 'divider'}}>
                <Tabs value={value} onChange={onChange} aria-label="basic tabs" orientation={orientation}>
                    {labels.map((label, index) => (  
                        <Tab key={index} label={label} sx={{ fontSize: "20px", flexBasis: '25%', borderBottom: (value === index && orientation === undefined) ? '6px solid currentColor' : 'none'}}/>
                    ))}
                </Tabs>
            </Box>
        </Box>
    );
}
