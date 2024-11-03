// pages/AboutPage.tsx
import React from 'react';
import HeaderComponents from './components/header';
import BeVip from './components/beVip';
import OrderComponents from './components/order';
import MyServerComponents from './components/MyServer';

const AboutPage: React.FC<any> = (data) => {
  const height = data.data?.height || 0
  return (
    <div style={{ height: (height - 85) + 'px' }} className='bg-gradient-to-b from-[#f49150] to-[#fff] relative'>
      <HeaderComponents />
      <BeVip />
      <OrderComponents />
      <MyServerComponents />
    </div>
  );
};

export default AboutPage;
