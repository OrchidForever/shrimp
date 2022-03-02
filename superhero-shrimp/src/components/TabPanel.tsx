import * as React from 'react';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.defaultProps = {
  children: null,
};
