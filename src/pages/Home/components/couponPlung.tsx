// pages/AboutPage.tsx
import React from 'react';
import { Button } from '@nutui/nutui-react'

const CouponPlung: React.FC = () => {
    return (
        <div className='p-4'>
            <div className="rounded-lg flex items-center justify-between bg-white p-4 bg-gradient-to-l from-[#fedfc9] to-[#fee2cb]">
                <div className="text-md text-[#844321]">
                    新用户领取优惠券
                </div>
                <Button size="small" type="primary">
                    立即领取
                </Button>
            </div>
        </div>
    );
};

export default CouponPlung;
