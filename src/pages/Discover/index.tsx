// pages/AboutPage.tsx
import React, { useEffect,useState } from 'react';
import FlowComponents from './components/flow';
import { Tabs } from '@nutui/nutui-react';

const tabMenus: any = [
  {
    title: '猜你喜欢',
    value: '0'
  },
  {
    title: '网红民宿',
    value: '1'
  },
  {
    title: '体验分享',
    value: '2'
  }
]

const DiscoverPage: React.FC<any> = (data) => {
  const height = data.data?.height || 0
  const [tabvalue, setTabvalue] = useState<string | number>('0');

  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <div>
      <h2 className='p-3'>发现更多小美好</h2>
      <Tabs
        className='bg-white'
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
        activeType="smile"
      >
        {tabMenus.map((item: any) => (
          <Tabs.TabPane className='bg-white' title={item.title} key={item.value} />
        ))}
      </Tabs>
      <div style={{ height: (height - 85) + 'px' }} className="overflow-y-auto">
        <FlowComponents />
      </div>
    </div>
  );
};

export default DiscoverPage;
