import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import HealthBar from './components/HealthBar/health-bar.component';
import BossName from './components/BossName/boss-name.component';
import InputHealth from './components/InputHealth/input-health.component';
import CreateBoss from './components/CreateBoss/create-boss.component';
import GetBosses from './components/GetBosses/get-bosses.component';

function App() {
  const [totalBossHealth, setTotalBossHealth] = useState(0);
  const [bossName, setBossName] = useState('');

  const sendHealthToParent = (index) => { 
    console.log(index);
    setTotalBossHealth(index);
  };

  const BossActive = () => {
    if (totalBossHealth !== 0) {
      return <HealthBar totalBossHealth={totalBossHealth} />    
    } else {
      return <InputHealth sendHealthToParent={sendHealthToParent}/>
    }
  }

  useEffect(() => {
      setBossName('The Homie, Claimer of Ass');
  }, [])

  return (
    <div className='App'>
      <CreateBoss/>
      <GetBosses/>
      <BossName bossName={bossName}/>
      <BossActive/>
    </div>
  )
}

export default App;
