// pages/orderComponents.tsx
import React from 'react';
import { Badge } from '@nutui/nutui-react';
const orderStates = [
    {
        title: '全部',
        value: '1',
        icon: '#icon-quanbu'
    },
    {
        title: '待付款',
        value: '2',
        icon: '#icon-daifukuan'
    },
    {
        title: '待入住',
        value: '3',
        icon: '#icon-dairuzhu'
    },
    {
        title: '取消/退款',
        value: '4',
        icon: '#icon-tuikuan'
    }
];
const orderComponents: React.FC = () => {
    return (
        <div className='pl-4 pr-4'>
            <div className=' bg-white pb-1 rounded-lg '>
            <h3 className='text-sm font-bold pl-4 pt-3 pb-3'>我的订单</h3>
            <div className="grid grid-cols-4 gap-2">
                {orderStates.map((item: any) => (
                    <div className='mb-3 text-center'>
                        <Badge value={item.value}>
                            <svg className="icon w-[28px] h-[28px]" aria-hidden="true">
                                <use xlinkHref={item.icon} />
                            </svg>
                        </Badge>
                        <div className='text-[12px]'>{item.title}</div>

                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default orderComponents;
