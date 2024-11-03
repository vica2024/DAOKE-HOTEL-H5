// pages/AboutPage.tsx
import React, { useEffect, useState } from 'react';
import FlowItem from './flow-item';

const items = [
  { 
    id: 1, 
    title: '海边日出房，海浪轻声伴', 
    description: '享受清晨的阳光，窗外是无边的海景，伴随海浪声入眠。', 
    views: 1500, 
    city: '三亚', 
    avatar: 'https://picsum.photos/50?random=1', 
    src: 'https://picsum.photos/200' 
  },
  { 
    id: 2, 
    title: '森林小屋，亲近自然的家', 
    description: '隐匿于森林，享受自然的气息，适合家庭聚会。', 
    views: 1200, 
    city: '张家界', 
    avatar: 'https://picsum.photos/50?random=2', 
    src: 'https://picsum.photos/200' 
  },
  { 
    id: 3, 
    title: '湖边静谧房，享受宁静时光', 
    description: '靠近宁静湖泊，夜晚听水波轻拍岸边，放松身心。', 
    views: 2000, 
    city: '杭州', 
    avatar: 'https://picsum.photos/50?random=3', 
    src: 'https://picsum.photos/200' 
  },
  { 
    id: 4, 
    title: '山顶观景房，尽览壮丽风光', 
    description: '坐落于高山之巅，四周环绕壮丽山脉，尽享美景。', 
    views: 1800, 
    city: '丽江', 
    avatar: 'https://picsum.photos/50?random=4', 
    src: 'https://picsum.photos/200' 
  },
  { 
    id: 5, 
    title: '乡村田园房，体验田园生活', 
    description: '体验乡村生活，享受新鲜农产品和田园风光。', 
    views: 1600, 
    city: '桂林', 
    avatar: 'https://picsum.photos/50?random=5', 
    src: 'https://picsum.photos/200' 
  },
  { 
    id: 6, 
    title: '艺术家工作室，灵感源源不断', 
    description: '灵感不断的创作空间，墙上挂满艺术作品。', 
    views: 1400, 
    city: '北京', 
    avatar: 'https://picsum.photos/50?random=6', 
    src: 'https://picsum.photos/200' 
  },
  { 
    id: 7, 
    title: '古堡风情房，穿越历史的梦', 
    description: '历史感的古堡风格房间，仿佛穿越回古代。', 
    views: 1300, 
    city: '西安', 
    avatar: 'https://picsum.photos/50?random=7', 
    src: 'https://picsum.photos/200' 
  },
];

interface ItemProps {
  id: number;
  title: string;
  description: string;
  views: number;
  city: string;
  avatar: string;
  src: string;
}

const FlowComponents: React.FC = () => {
  const [columns, setColumns] = useState<ItemProps[][]>([[], []]);

  useEffect(() => {
    const newColumns: ItemProps[][] = [[], []];
    items.forEach(item => {
      const colIndex = newColumns[0].length <= newColumns[1].length ? 0 : 1;
      newColumns[colIndex].push(item);
    });
    setColumns(newColumns);
  }, []);

  return (
    <div className="flex space-x-2 p-3">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col flex-1">
          {column.map(item => (
            <FlowItem key={item.id} data={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FlowComponents;
