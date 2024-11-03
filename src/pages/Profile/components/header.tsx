// pages/AboutPage.tsx
import React from 'react';
import { Avatar } from '@nutui/nutui-react';
const HeaderComponents: React.FC = () => {
    return (
        <div className='profile-header p-4 h-[130px] text-white '>
            <div className='flex items-center'>
                <div className='relative'>
                    <Avatar className='h-[45px] w-[45px] border-2' src='https://picsum.photos/200' />
                    <svg className="icon w-[16px] h-[16px] absolute bottom-0 right-0 left-0 m-auto" aria-hidden="true">
                        <use xlinkHref="#icon-huiyuan1" />
                    </svg>
                </div>
                <div className='ml-2'>
                    <h3 className='text-md'>Hi, 稻客</h3>
                    <p className='text-[11px]'>已经是会员</p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-2 mt-5 text-center'>
                <div className=''>
                    <div className=''>2</div>
                    <div className='text-[10px]'>优惠券</div>
                </div>
                <div className=''>
                    <div className=''>21.03</div>
                    <div className='text-[10px]'>余额</div>
                </div>
                <div className=''>
                    <div className=''>20</div>
                    <div className='text-[10px]'>积分</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponents;
