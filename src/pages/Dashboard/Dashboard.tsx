import React from 'react';
import Menu from '../../components/Menu/Menu';
import reactLogo from '../../assets/react-logo.png';
import cerbosLogo from '../../assets/cerbos-logo.png';
import plusLogo from '../../assets/plus.png';

export default function Dashboard(): JSX.Element {
  return (
    <>
      <Menu></Menu>
      <div className='container'>
        <h2>Dashboard</h2>
        <div className='logos'>
          <label className='welcome'>Welcome to</label>
          <br></br>
          <img src={reactLogo} alt='React Logo' />
          <img src={plusLogo} className='plus' alt='Plus Logo' />
          <img src={cerbosLogo} alt='Cerbos Logo' />
        </div>
      </div>
    </>
  );
}

