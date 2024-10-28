// Mobile.tsx
import React, { useState } from 'react';
import { Tabbar } from '@nutui/nutui-react';
import { Find, Home, User } from '@nutui/icons-react';
const Layout: React.FC<{ children: React.ReactNode, onRenderPage: (menuIndex: number) => void }> = ({ children, onRenderPage }) => {
    
    const [activeIndex, setActiveIndex] = useState(2)
    const isMobile = true;//window.innerWidth <= 768; // 设备检测
    return (
        <div className={isMobile ? 'mobile-container' : 'desktop-container'}>
            {isMobile ? (
                <div className="mobile-frame relative">
                    {children}
                    <Tabbar
                        className="absolute bottom-0"
                        defaultValue={0}
                        value={activeIndex}
                        onSwitch={(value) => {
                            onRenderPage(value);
                            setActiveIndex(value)
                        }}
                    >
                        <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
                        <Tabbar.Item title="发现" icon={<Find width={20} height={20} />} />
                        <Tabbar.Item title="我的" icon={<User width={20} height={20} />} />
                    </Tabbar>
                </div>
            ) : (
                children // 桌面模式直接显示内容
            )}
        </div>
    );
};

export default Layout;
