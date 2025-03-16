'use client';

import { useState } from 'react';
import Divination from '@/components/Divination';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import QuestionInput from '@/components/QuestionInput';

export default function Home() {
  const [showDivination, setShowDivination] = useState(false);
  const [question, setQuestion] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleStartDivination = () => {
    setShowInput(true);
  };

  const handleQuestionSubmit = (inputQuestion: string) => {
    setQuestion(inputQuestion);
    setShowInput(false);
    setShowDivination(true);
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundAnimation />
      
      {/* Hero Section - 减小高度 */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in">
            寻求古老智慧的指引
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            通过传统易经智慧，为现代生活找寻答案
          </p>
          {!showInput ? (
            <button 
              onClick={handleStartDivination}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 animate-bounce"
            >
              开始算卦
            </button>
          ) : (
            <div className="animate-fade-in-up">
              <QuestionInput onSubmit={handleQuestionSubmit} />
            </div>
          )}
        </div>
      </section>

      {/* Features Section - 添加视觉效果 */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-black/50 to-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            探索智慧之道
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">即时起卦</h3>
                <p className="text-gray-400">根据当下时间，立即获得卦象指引</p>
              </div>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">专业解读</h3>
                <p className="text-gray-400">详细的卦象分析与现代生活的关联</p>
              </div>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition duration-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">智慧指引</h3>
                <p className="text-gray-400">结合传统智慧，指引现代生活方向</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showDivination && <Divination question={question} onClose={() => setShowDivination(false)} />}
    </main>
  );
}
