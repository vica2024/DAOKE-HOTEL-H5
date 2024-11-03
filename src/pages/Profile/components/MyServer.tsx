// pages/orderComponents.tsx
import React from 'react';

const serverList = [
    {
        title: '常用信息',
        value: '1',
        icon: '#icon-xinxi'
    },
    {
        title: '我的评价',
        value: '2',
        icon: '#icon-yuangongfankui'
    },
    {
        title: '信用免押',
        value: '3',
        icon: '#icon-xinyongqia-'
    },
    {
        title: '开具发票',
        value: '4',
        icon: '#icon-fapiaoguanlixitong'
    },
    {
        title: '意见反馈',
        value: '4',
        icon: '#icon-fankui'
    }
];
const myServerComponents: React.FC = () => {
    return (
        <div className='p-4'>
            <div className=' bg-white pb-1 rounded-lg '>
                <h3 className='text-sm font-bold pl-4 pt-3 pb-3'>我的服务</h3>
                <div className="grid grid-cols-4 gap-2">
                    {serverList.map((item: any) => (
                        <div className='mb-3 text-center'>
                            <svg className="icon w-[28px] h-[28px] m-auto" aria-hidden="true">
                                <use xlinkHref={item.icon} />
                            </svg>
                            <div className='text-[12px]'>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default myServerComponents;
