import React from "react";
import  Tab  from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs'
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={onChange} aria-label="basic tabs" orientation={orientation}>
                    {labels.map((label, index) => (  
                        <Tab key={index} label={label} sx={{ flexBasis: '25%' }}/>
                    ))}
                </Tabs>
            </Box>
        </Box>
    );
}
