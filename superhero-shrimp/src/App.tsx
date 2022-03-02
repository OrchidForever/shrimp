import * as React from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './components/TabPanel';
import HeroList from './views/HeroList';
import { Hero } from './interfaces/hero';
import HeroGrid from './views/HeroGrid';

export default function App() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://tppublic.blob.core.windows.net/test-data/super-heroes.json').then((response) => setData(response.data));
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        centered
      >
        <Tab value={1} label="Superhero List View" />
        <Tab value={2} label="Superhero Grid View" />
      </Tabs>
      <TabPanel value={value} index={1}>
        <HeroList
          data={data as Hero[]}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HeroGrid
          data={data as Hero[]}
        />
      </TabPanel>
    </Box>
  );
}
