import './App.css';
import { useState } from 'react';
import Results from './components/Results';
import Tabs from './components/Tabs';

function App() {
  const tabsArray = [
    {label: 'Home', content: "Here's some landing page content!"},
    {label: 'About', content: 'About us content!'},
    {label: 'Inventory', content: 'Take a look at our inventory!'},
    {label: 'Contact', content: 'Get in touch with us!'},
  ];
  const [tabs, setTabs] = useState(tabsArray)
  const [currentTabIdx, setCurrentTabIdx] = useState(0)
  return (
    <div className="App">
      <Tabs tabs={tabs} currentTabIdx={currentTabIdx} setCurrentTabIdx={setCurrentTabIdx}/>
      <Results tabs={tabs} currentTabIdx={currentTabIdx}/>
    </div>
  );
}

export default App;
