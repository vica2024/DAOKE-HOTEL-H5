import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Tabbar } from '@nutui/nutui-react';
import { Find, Home, User } from '@nutui/icons-react';
import { useTranslation } from 'react-i18next';

const Layout: React.FC<{ children: React.ReactNode, onRenderPage: (params:any) => void }> = ({ children, onRenderPage }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = true; // window.innerWidth <= 768; // 设备检测
    const elementRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);
    const { t } = useTranslation();
    useEffect(() => {
        const updateHeight = () => {
            if (elementRef.current) {
                setHeight(elementRef.current.clientHeight);
                onRenderPage({index:0,height:elementRef.current.clientHeight});
            }
        };

        updateHeight(); // 初始设置高度
        window.addEventListener('resize', updateHeight); // 监听窗口大小变化
        return () => {
            window.removeEventListener('resize', updateHeight); // 清理事件监听
        };
    }, []);

    const handleSwitch = useCallback((value: number) => {
        setActiveIndex(value);
        onRenderPage({index:value,height:height});
    }, [onRenderPage]);

    return (
        <div className={isMobile ? 'mobile-container' : 'desktop-container'}>
            {isMobile ? (
                <div ref={elementRef} className="mobile-frame relative h-90">
                    {children}
                    <Tabbar
                        className="absolute bottom-0"
                        defaultValue={0}
                        value={activeIndex}
                        onSwitch={handleSwitch}
                    >
                        <Tabbar.Item title={t('home')} icon={<Home width={20} height={20} />} />
                        <Tabbar.Item title={t('discover')} icon={<Find width={20} height={20} />} />
                        <Tabbar.Item title={t('profiles')} icon={<User width={20} height={20} />} />
                    </Tabbar>
                </div>
            ) : (
                children // 桌面模式直接显示内容
            )}
        </div>
    );
};

export default Layout;
