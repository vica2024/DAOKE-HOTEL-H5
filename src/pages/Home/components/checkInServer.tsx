// pages/AboutPage.tsx
import React from 'react';
interface ServerItem {
    id: number;
    lable: string;
    subTitle: string;
    icon: string;
}

const checkInServer: React.FC = () => {
    const serverItems: ServerItem[] = [
        {
            id: 1,
            lable: '信用免押',
            subTitle: '芝麻/小白',
            icon: '#icon-shenhesousuo'
        },
        {
            id: 2,
            lable: '入住无忧',
            subTitle: '送出行险',
            icon: '#icon-ruzhu'
        },
        {
            id: 3,
            lable: '人工审核',
            subTitle: '安心入住',
            icon: '#icon-shenhe'
        },
        {
            id: 4,
            lable: '信用免押',
            subTitle: '安全可靠',
            icon: '#icon-xinyongkadianji'
        },
    ];
    return (
        <div className='p-4'>
            <div className="grid grid-cols-4 gap-3 text-center">
                {serverItems.map((serverItem) => (
                    <div key={serverItem.id}>
                        <div className='w-[40px] h-[40px] m-auto overflow-hidden'>
                            <svg className="icon w-[40px] h-[40px]" aria-hidden="true">
                               <use xlinkHref={serverItem.icon} />
                            </svg>
                        </div>
                        <div className='text-[12px] mb-[0px] mt-1'>{serverItem.lable}</div>
                        <div className='text-[11px] text-gray-500'>{serverItem.subTitle}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default checkInServer;
