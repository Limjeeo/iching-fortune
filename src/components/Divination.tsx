'use client';

import React from 'react';
import { hexagrams } from '@/data/hexagrams';

interface DivinationProps {
  question: string;
  onClose: () => void;
}

const Divination: React.FC<DivinationProps> = ({ question, onClose }) => {
  // 根据当前时间随机选择一个卦象
  const getRandomHexagram = () => {
    const now = new Date();
    const seed = now.getTime();
    const index = Math.floor(Math.abs(Math.sin(seed)) * hexagrams.length);
    return hexagrams[index];
  };

  const selectedHexagram = getRandomHexagram();

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-900/90 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">卜卦结果</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-800/50 rounded-xl p-4">
            <h3 className="text-lg font-medium text-gray-300 mb-2">你的问题：</h3>
            <p className="text-white">{question}</p>
          </div>

          <div className="bg-zinc-800/50 rounded-xl p-4">
            <h3 className="text-lg font-medium text-gray-300 mb-2">所得卦象：</h3>
            <p className="text-2xl font-bold text-white mb-2">{selectedHexagram.name}</p>
            <p className="text-gray-300">{selectedHexagram.description}</p>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-800/50 rounded-xl p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">卦象解读</h3>
              <p className="text-white">{selectedHexagram.interpretation}</p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">事业方面</h3>
              <p className="text-white">{selectedHexagram.career}</p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">感情方面</h3>
              <p className="text-white">{selectedHexagram.love}</p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">健康方面</h3>
              <p className="text-white">{selectedHexagram.health}</p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">财运方面</h3>
              <p className="text-white">{selectedHexagram.wealth}</p>
            </div>

            <div className="bg-zinc-800/50 rounded-xl p-4">
              <h3 className="text-lg font-medium text-gray-300 mb-2">行动建议</h3>
              <div className="space-y-2">
                <p className="text-green-400">宜：{selectedHexagram.dos}</p>
                <p className="text-red-400">忌：{selectedHexagram.donts}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300"
          >
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default Divination; 