// pages/AboutPage.tsx
import React from 'react';
import SearchFrom from './components/searchFrom';
import CheckInServer from './components/checkInServer';
import CouponPlung from './components/couponPlung';
import Recomdation from './components/recomdation';
import SpecialRoom from './components/specialRoom';

const HomeIndex: React.FC = () => {
  return (
    <div className="h-[61vh] overflow-y-auto">
      <SearchFrom></SearchFrom>
      <CheckInServer></CheckInServer>
      <CouponPlung></CouponPlung>
      <Recomdation></Recomdation>
      <SpecialRoom></SpecialRoom>
    </div>
  );
};

export default HomeIndex;
