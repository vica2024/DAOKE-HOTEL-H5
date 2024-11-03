import React from 'react';
import { Image, Rate } from '@nutui/nutui-react';
import { ArrowRight ,Agenda,Follow,Location} from '@nutui/icons-react';

interface ServerItem {
    id: number;
    title: string;
    imageUrl: string;
    address: string;

}

const SpecialRoom: React.FC = () => {

    const serverItems: ServerItem[] = [
        {
            id: 1,
            title: '金沙湾/世界之窗，海景房',
            imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1242882738614253597/original/e01a9085-4bb7-4bc7-b6ba-03c5d6b60b85.jpeg?im_w=960&im_format=avif',
            address: '深圳.巽寮湾'
        },
    ];

    return (
        <div className="mb-8 p-4">
            <div className='flex justify-between items-center pt-4 pb-4'>
                <span className='text-sm font-bold'>稻客精选</span>
                <span className='text-xs flex items-center text-gray-500'>更多<ArrowRight width={13} /></span>
            </div>
            {serverItems.map((serverItem) => (
                <div key={serverItem.id} className='bg-white rounded-md shadow-md p-2'>
                    <div className="flex gap-2">
                        <div className="w-2/3">
                            <div className='rounded-md overflow-hidden'>
                                <Image height='130' fit="cover" src={serverItem.imageUrl} />
                            </div>
                        </div>
                        <div className="w-1/3 flex gap-2 flex-col">
                            <div className="flex-1">
                                <div key={serverItem.id} className='rounded-md overflow-hidden'>
                                    <Image height='61' fit="cover" src={serverItem.imageUrl} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div key={serverItem.id} className='rounded-md overflow-hidden'>
                                    <Image height='61' fit="cover" src={serverItem.imageUrl} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between text-xs mb-1 mt-[5px]'>
                        <span>整套.1居室.可住4人</span>
                        <div className='flex start-custom'>
                            <span><Rate allowHalf defaultValue={5.0} /></span>
                            <span>5.0评分</span>
                        </div>
                    </div>
                    <h3 className='font-bold'>{serverItem.title}</h3>
                    <div className='flex justify-between text-xs text-gray-400 mt-1'>
                        <span className='flex items-center'><Location width={13} /> 深圳.巽寮湾</span>
                        <div className='flex'>
                            <span className='flex items-center mr-1'><Follow width={13} />2000</span>
                            <span className='flex items-center'><Agenda  width={13} />3000</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SpecialRoom;
