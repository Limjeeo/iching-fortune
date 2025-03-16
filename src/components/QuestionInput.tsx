'use client';

import React, { useState } from 'react';

interface QuestionInputProps {
  onSubmit: (question: string) => void;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      setError('请输入您的问题');
      return;
    }

    if (question.length < 4) {
      setError('问题太短了，请详细描述您的困惑');
      return;
    }

    setError('');
    onSubmit(question);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block text-lg font-medium text-gray-300 mb-2">
            请描述您的问题
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-32 px-4 py-3 bg-black/30 text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
            placeholder="例如：我最近在事业上遇到了一些困惑..."
          />
          {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition duration-300"
          >
            寻求指引
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionInput; 