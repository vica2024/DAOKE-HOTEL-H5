// pages/AboutPage.tsx
import React from 'react';

const BeVip: React.FC = () => {
    return (
        <div className='p-4'>
            <div className="rounded-lg border-[#f0924a] border-2 flex items-center justify-between shadow-lg bg-white p-3 bg-gradient-to-r from-[#ff6e50] to-[#fe9448]">
                <div className="text-[12px] text-white">
                    <div className='font-bold'>开通VIP会员</div>
                    <span className='text-[10px]'>点亮会员标识，获得更多特权</span>
                </div>
                <div className='rounded-full bg-white w-[63px] text-center leading-5'>
                    <span className='text-[#856541] text-[11px] font-bold'>开通会员</span>
                </div>
            </div>
        </div>
    );
};

export default BeVip;
