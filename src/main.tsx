import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import './styles/base.less';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import translationJA from './locales/ja.json';
import translationZH from './locales/zh.json';

// 初始化 i18next
i18n.init({
  resources: {
    ja: { translation: translationJA },
    zh: { translation: translationZH },
  },
  lng: 'ja', // 默认语言
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false, // React 已经安全处理了
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
