import React, { useState } from 'react';
import { Image } from '@nutui/nutui-react';
import { ArrowRight } from '@nutui/icons-react';

interface ServerItem {
    id: number;
    lable: string;
    imageUrl: string;
}

const Recomdation: React.FC = () => {
    // 使用 useState 来管理当前选择的服务器项
    const [currentItem, setCurrentItem] = useState<ServerItem>({
        id: 1,
        lable: '信用免押',
        imageUrl: 'https://a0.muscache.com/im/pictures/2f6f4eea-cdf6-496b-9736-5c3479ebf62d.jpg?im_w=720&im_format=avif'
    });

    const serverItems: ServerItem[] = [
        {
            id: 1,
            lable: '信用免押',
            imageUrl: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-933772241114752725/original/2795a39b-194a-48f3-bbcc-f87164e6de00.jpeg?im_w=1200&im_format=avif'
        },
        {
            id: 2,
            lable: '入住无忧',
            imageUrl: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-933772241114752725/original/2795a39b-194a-48f3-bbcc-f87164e6de00.jpeg?im_w=1200&im_format=avif'
        },
        {
            id: 3,
            lable: '人工审核',
            imageUrl: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/hosting/Hosting-933772241114752725/original/2795a39b-194a-48f3-bbcc-f87164e6de00.jpeg?im_w=1200&im_format=avif'
        },
        {
            id: 4,
            lable: '信用免押',
            imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-933772241114752725/original/553d06b8-fdfc-4333-bc89-a88b1272e30b.jpeg?im_w=1200&im_format=avif'
        },
    ];

    return (
        <div className="p-4 pb-0">
            <div className='flex justify-between items-center mb-2'>
                <span className='text-sm font-bold'>网红民宿</span>
                <span className='text-xs flex items-center text-gray-500'>更多<ArrowRight width={13} /></span>
            </div>
            <div className='rounded-lg overflow-hidden mb-2'>
                <Image src={currentItem.imageUrl} />
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
                {serverItems.map((serverItem) => (
                    <div key={serverItem.id} className='rounded-md overflow-hidden' onClick={() => setCurrentItem(serverItem)}>
                        <Image src={serverItem.imageUrl} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recomdation;
