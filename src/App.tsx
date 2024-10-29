import React, { useState } from 'react';
import Layout from '@/components/layout/Mobile';
import AnimatedPage from '@/components/layout/AnimatedPage'; // 动画页面组件
import HomePage from '@/pages/Home/Index'; // 主页
import DiscoverPage from '@/pages/DiscoverPage'; //发现
import ProfilePage from '@/pages/ProfilePage'; // 个人
import { AnimatePresence } from 'framer-motion'; // 动画管理

const App: React.FC = () => {
  const [page, setPage] = useState('home'); // 用于跟踪当前页面

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'discover':
        return <DiscoverPage />;
      case 'profile':
      default:
        return <ProfilePage />;
    }
  };

  const activePage = (index: number) => {
    const pageMatch = [
      { page: 'home' },
      { page: 'discover' },
      { page: 'profile' }
    ];
    setPage(pageMatch[index].page);
  }

  return (
    <Layout onRenderPage={activePage}>
      {/* 使用 AnimatePresence 包裹页面切换 */}
      <AnimatePresence mode='wait'>
        {/* 用页面的 `page` 状态作为 `key` 确保每次切换页面时动画生效 */}
        <AnimatedPage key={page}>
          {renderPage()}
        </AnimatedPage>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
