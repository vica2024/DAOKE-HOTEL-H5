// pages/AboutPage.tsx
import React, { useState } from 'react';
import { Button } from '@nutui/nutui-react'

const SearchFrom: React.FC = () => {
    const [active, setActive] = useState(1); // 用于跟踪当前页面

    return (
        <div>
            <div className='banner-bg p-4 mb-[40px]'>
                <div className="rounded-xl shadow-lg bg-white overflow-hidden mt-[150px]">
                    <div className="h-[40px] flex text-base cursor-pointer">
                        <div className={`flex-1 text-center bg-[#f0f0f0] ${active == 0 ? '' : 'rounded-br-[24px]'}`} onClick={() => setActive(0)}>
                            <div className={`h-full leading-[40px] ${active == 0 ? ' bg-white rounded-tl-xl rounded-tr-[24px]' : 'text-gray-400'}`}>
                                日租房
                            </div>
                        </div>
                        <div className={`flex-1 text-center bg-[#f0f0f0] ${active == 1 ? '' : 'rounded-bl-[24px]'}`} onClick={() => setActive(1)}>
                            <div className={`h-full leading-[40px] ${active == 1 ? 'bg-white rounded-tr-xl rounded-tl-[24px]' : 'text-gray-400'}`}>
                                时租房
                            </div>
                        </div>
                    </div>
                    <div className='p-4 text-center'>
                        <div className="bg-white font-normal">
                            <div className='flex justify-between items-center text-[13px]'>
                                <div className='text-center'>
                                    <span className='text-[11px] text-gray-500'>入住时间</span>
                                    <p className='mt-1'>2月7号</p>
                                </div>
                                <span className='text-[11px] border border-gray-500 pt-[2px] pb-[2px] pl-[8px] pr-[8px] rounded-[15px]'>2晚</span>
                                <div>
                                    <span className='text-[11px] text-gray-500'>离店时间</span>
                                    <p className='mt-1'>2月9号</p>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" className='mt-3 w-[90%]'>
                            <span className='text-[12px]'>开始预定</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFrom;
