// components/AnimatedPage.tsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // 页面进入时的初始状态
      animate={{ opacity: 1, x: 0 }}   // 页面进入后的动画状态
      exit={{ opacity: 0, x: -100 }}   // 页面退出时的动画状态
      transition={{ duration: 0.5 }}   // 动画持续时间
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
