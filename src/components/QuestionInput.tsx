'use client';

import { useState } from 'react';

interface QuestionInputProps {
  onSubmit: (question: string) => void;
}

export default function QuestionInput({ onSubmit }: QuestionInputProps) {
  const [question, setQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onFocus={() => setIsTyping(true)}
            onBlur={() => setIsTyping(false)}
            placeholder="请输入您想要解答的问题..."
            className={`w-full px-6 py-4 bg-zinc-900/50 backdrop-blur-lg rounded-xl text-white placeholder-gray-400 resize-none transition-all duration-300 ${
              isTyping ? 'h-32 border border-purple-500' : 'h-16 border border-transparent'
            }`}
          />
          <div className="absolute bottom-4 right-4 text-gray-400 text-sm">
            {question.length}/200
          </div>
        </div>
        <button
          type="submit"
          disabled={!question.trim()}
          className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
            question.trim()
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90'
              : 'bg-zinc-800 text-gray-400 cursor-not-allowed'
          }`}
        >
          寻求指引
        </button>
      </form>
    </div>
  );
} 