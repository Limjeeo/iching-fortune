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
    <div className="relative min-h-screen overflow-hidden bg-black">
      <BackgroundAnimation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-black/30 backdrop-blur-sm"></div>
          <div className="relative z-20 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              寻求古老智慧的指引
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              通过传统易经智慧，为现代生活找寻答案
            </p>
            <div className="relative z-30">
              {!showInput ? (
                <button 
                  onClick={handleStartDivination}
                  className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
                >
                  开始算卦
                </button>
              ) : (
                <div className="w-full max-w-xl mx-auto">
                  <QuestionInput onSubmit={handleQuestionSubmit} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-20 py-16 px-4 bg-black/30 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              探索智慧之道
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">即时起卦</h3>
                  <p className="text-gray-300">根据当下时间，立即获得卦象指引</p>
                </div>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">专业解读</h3>
                  <p className="text-gray-300">详细的卦象分析与现代生活的关联</p>
                </div>
              </div>
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl transform hover:scale-105 transition duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">智慧指引</h3>
                  <p className="text-gray-300">结合传统智慧，指引现代生活方向</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showDivination && (
        <div className="fixed inset-0 z-50">
          <Divination question={question} onClose={() => setShowDivination(false)} />
        </div>
      )}
    </div>
  );
}
