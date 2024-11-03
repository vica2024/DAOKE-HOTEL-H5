// pages/SearchFrom.tsx
import React, { useState } from 'react';
import { Button } from '@nutui/nutui-react'
import { useTranslation } from 'react-i18next';
const SearchFrom: React.FC = () => {
    const [active, setActive] = useState(1); // 用于跟踪当前页面
    const { t } = useTranslation();
    return (
        <div>
            <div className='banner-bg p-4 mb-[40px]'>
                <div className="rounded-xl shadow-lg bg-white overflow-hidden mt-[150px]">
                    <div className="h-[40px] flex text-base cursor-pointer">
                        <div className={`flex-1 text-center bg-[#f0f0f0] ${active == 0 ? '' : 'rounded-br-[24px]'}`} onClick={() => setActive(0)}>
                            <div className={`h-full leading-[40px] ${active == 0 ? ' bg-white rounded-tl-xl rounded-tr-[24px]' : 'text-gray-300'}`}>
                                {t('night_rental')}
                            </div>
                        </div>
                        <div className={`flex-1 text-center bg-[#f0f0f0] ${active == 1 ? '' : 'rounded-bl-[24px]'}`} onClick={() => setActive(1)}>
                            <div className={`h-full leading-[40px] ${active == 1 ? 'bg-white rounded-tr-xl rounded-tl-[24px]' : 'text-gray-300 font'}`}>
                                {t('hour_rental')}
                            </div>
                        </div>
                    </div>
                    <div className='p-4 text-center'>
                        <div className="bg-white font-normal">
                            <div className='flex justify-between items-center text-[13px]'>
                                <div className='text-center'>
                                    <span className='text-[11px] text-gray-500'>{t('check_in_time')}</span>
                                    <p className='mt-1'>2月7号</p>
                                </div>
                                <span className='text-[11px] border border-gray-500 pt-[2px] pb-[2px] pl-[8px] pr-[8px] rounded-[15px]'>2{t('nights')}</span>
                                <div>
                                    <span className='text-[11px] text-gray-500'>{t('check_out_time')}</span>
                                    <p className='mt-1'>2月9号</p>
                                </div>
                            </div>
                        </div>
                        <Button type="primary" className='mt-3 w-[90%]'>
                            <span className='text-[12px]'>{t('start_booking')}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFrom;
