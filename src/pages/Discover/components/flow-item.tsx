import React, { useEffect } from "react";
import { Image, Avatar } from '@nutui/nutui-react';
import { Location, Follow } from '@nutui/icons-react';
interface FlowItemProps {
    data: any;
}
const FlowItem: React.FC<FlowItemProps> = (data) => {
    const { src, title, views, city, avatar} = data.data;
    const randomNum = Math.floor(Math.random() * (300 - 200 + 1)) + 200;
    useEffect(() => {
        console.log(data)
    })
    return (
        <div className="bg-white rounded mb-2">
            <Image src={src + '/' + randomNum} lazy={true} radius={6} />
            <h3 className="line-clamp-2 font-bold text-[13px] mt-1">{title}</h3>
            <div className="flex items-center justify-between p-2">
                <div className="flex items-center justify-between gap">
                    <Avatar className="w-6 h-6" src={avatar} />
                    <div className="flex items-center ml-1">
                        <Location width={12} />
                        <span className="text-[10px] ml-1">{city}</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <Follow width={12} />
                    <span className="text-[10px] ml-1">{views}</span>
                </div>
            </div>
        </div>
    )
}

export default FlowItem