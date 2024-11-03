import React, { useState, useEffect } from 'react';
import '@/assets/js/iconfont.js';
import Layout from '@/components/layout/Mobile';
import AnimatedPage from '@/components/layout/AnimatedPage'; // 动画页面组件
import HomePage from '@/pages/Home/Index'; // 主页
import DiscoverPage from '@/pages/Discover/index'; // 发现
import ProfilePage from '@/pages/Profile/index'; // 个人
import { AnimatePresence } from 'framer-motion'; // 动画管理

interface AppConfigProps {
  index: number;
  height: number;
}

const App: React.FC = () => {
  const [appConfig, setAppConfig] = useState<AppConfigProps>({ index: 0, height: 0 });
  const pages: any = {
    0: <HomePage data={appConfig} />,
    1: <DiscoverPage data={appConfig} />,
    2: <ProfilePage data={appConfig} />
  };

  const renderPage = () => pages[appConfig.index];

  const activePage = (params: AppConfigProps) => {
    setAppConfig(params);
  };

  useEffect(() => {
   // console.log(appConfig);
  }, [appConfig]); // 监测 appConfig 的变化

  return (
    <Layout onRenderPage={activePage}>
      {/* 使用 AnimatePresence 包裹页面切换 */}
      <AnimatePresence mode='wait'>
        {/* 用页面的 `page` 状态作为 `key` 确保每次切换页面时动画生效 */}
        <AnimatedPage key={appConfig.index}>
          {renderPage()}
        </AnimatedPage>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
