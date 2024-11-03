// pages/AboutPage.tsx
import React ,{useEffect} from 'react';
import SearchFrom from './components/searchFrom';
import CheckInServer from './components/checkInServer';
import CouponPlung from './components/couponPlung';
import Recomdation from './components/recomdation';
import SpecialRoom from './components/specialRoom';

const HomeIndex: React.FC <any> = (data)=> {
  const height = data.data?.height || 0;
  useEffect(() => {
      console.log(data);
  },[data])
  
  return (
    <div style={{ height: (height-20)+'px' }} className="overflow-y-auto">
      <SearchFrom></SearchFrom>
      <CheckInServer></CheckInServer>
      <CouponPlung></CouponPlung>
      <Recomdation></Recomdation>
      <SpecialRoom></SpecialRoom>
    </div>
  );
};

export default HomeIndex;
