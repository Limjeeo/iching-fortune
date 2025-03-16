'use client';

import { useState } from 'react';

interface Hexagram {
  name: string;
  description: string;
  lines: boolean[];
  interpretation: {
    overall: string;
    career: string;
    love: string;
    health: string;
    wealth: string;
    action: string;
  };
}

interface DivinationProps {
  question: string;
  onClose: () => void;
}

const HEXAGRAMS: Record<string, Hexagram> = {
  '111111': {
    name: '乾卦',
    description: '天行健，君子以自强不息',
    lines: [true, true, true, true, true, true],
    interpretation: {
      overall: '乾卦代表纯阳之象，象征天道运行，暗示事物发展强健有力，充满向上动力。当前形势大好，适合主动进取。',
      career: '事业发展正值上升期，可以大胆开拓，推行新计划。领导力得到体现，团队合作顺畅。建议保持进取心，抓住机会施展才能。',
      love: '感情方面展现活力，单身者有机会遇到志同道合的伴侣。已有伴侣的要注意平衡事业与感情，给予对方更多关注。',
      health: '体魄强健，精力充沛，但要注意不要过度劳累。建议坚持运动，保持规律作息，注意劳逸结合。',
      wealth: '财运昌隆，有望获得可观收益。投资机会显现，但需谨慎评估风险，不可贪心冒进。',
      action: '此时宜：\n1. 开展新项目\n2. 扩大事业版图\n3. 建立新的人际关系\n4. 进行适度投资\n\n此时忌：\n1. 过于急进\n2. 忽视他人感受\n3. 过度自信',
    },
  },
  '000000': {
    name: '坤卦',
    description: '地势坤，君子以厚德载物',
    lines: [false, false, false, false, false, false],
    interpretation: {
      overall: '坤卦代表纯阴之象，象征大地包容，暗示当前应当保持谦逊，稳扎稳打。适合沉淀积累，厚积薄发。',
      career: '事业发展需要耐心积累，不宜冒进。团队协作中应当多付出，默默耕耘。当前更适合完善自己，提升能力。',
      love: '感情发展趋于平稳，需要以包容和耐心维系。单身者可以多参与社交活动，保持开放心态。已有伴侣的要互相体谅，共同成长。',
      health: '身体状况平稳，但需要注意休息，不要透支。建议多亲近大自然，保持心态平和，适当运动。',
      wealth: '财运平稳，适合稳健理财。不适合冒险投资，应当注重积累和开源节流。理财要有长远眼光。',
      action: '此时宜：\n1. 稳固现有基础\n2. 提升专业技能\n3. 维护人际关系\n4. 稳健理财\n\n此时忌：\n1. 贸然冒进\n2. 投机取巧\n3. 好高骛远',
    },
  },
  '101101': {
    name: '大有卦',
    description: '火在天上，大有；君子以遏恶扬善，顺天休命',
    lines: [true, false, true, true, false, true],
    interpretation: {
      overall: '大有卦象征丰盛和光明，暗示当前形势大好，各方面都充满机遇。但需要懂得节制，合理利用资源。',
      career: '事业发展迎来黄金期，各项计划都能得到支持。团队关系融洽，创新想法易被接受。要把握机会，同时注意可持续发展。',
      love: '感情生活充满活力，彼此理解加深。单身者容易遇到心仪对象，已有伴侣的感情更加稳固。注意分享和沟通。',
      health: '精力充沛，状态良好。但要注意不要过度消耗，保持规律作息，适度运动，注意饮食均衡。',
      wealth: '财运亨通，收入可观。投资机会多，但要注意风险控制，不可过于贪心。适合开源节流，合理规划。',
      action: '此时宜：\n1. 扩大规模\n2. 把握机遇\n3. 慈善公益\n4. 团队合作\n\n此时忌：\n1. 骄傲自满\n2. 铺张浪费\n3. 独断专行',
    },
  },
  '001111': {
    name: '泰卦',
    description: '天地交泰，通达吉祥',
    lines: [false, false, true, true, true, true],
    interpretation: {
      overall: '泰卦象征天地交泰，阴阳调和，是最吉利的卦象之一。当前各方面都在向好发展，人际关系融洽，事业顺遂。',
      career: '事业发展顺利，各项工作都能得心应手。上下级关系和谐，同事配合默契。适合推进重要项目，开展新的计划。',
      love: '感情和谐美满，单身者容易遇到良缘。已有伴侣的感情更加甜蜜，是考虑进一步发展的好时机。',
      health: '身心状态良好，充满活力。但仍要注意保持良好的作息和饮食习惯，适度运动有助于保持健康。',
      wealth: '财运亨通，收入稳定增长。投资有望获得不错回报，但要注意适度，不可过于贪心。',
      action: '此时宜：\n1. 开展重要项目\n2. 扩展人际关系\n3. 表达真诚感情\n4. 规划长远发展\n\n此时忌：\n1. 固步自封\n2. 急于求成\n3. 忽视细节',
    },
  },
  '111100': {
    name: '否卦',
    description: '天地不交，万物闭塞',
    lines: [true, true, true, true, false, false],
    interpretation: {
      overall: '否卦象征闭塞不通，当前各方面可能遇到阻碍。需要沉着冷静，耐心等待时机，切勿强求。',
      career: '事业发展遇到瓶颈，计划推进较为困难。建议暂时蛰伏，积累实力，等待更好的机会。注意维护好人际关系。',
      love: '感情方面可能遇到波折，沟通不畅。需要保持耐心和理解，给彼此一些空间。单身者暂时难遇良缘。',
      health: '身体状况需要特别关注，容易感到疲惫。应当注意休息，保持良好的作息习惯，适当放松心情。',
      wealth: '财运受阻，收入可能不太稳定。投资需要特别谨慎，不适合冒险。建议节约开支，量入为出。',
      action: '此时宜：\n1. 沉淀自我\n2. 总结经验\n3. 修养身心\n4. 稳固根基\n\n此时忌：\n1. 贸然行动\n2. 强行推进\n3. 铤而走险',
    },
  },
  '110111': {
    name: '大壮卦',
    description: '雷在天上，大壮；君子以遏恶扬善',
    lines: [true, true, false, true, true, true],
    interpretation: {
      overall: '大壮卦象征刚强盛大，充满力量和活力。当前正值壮大发展时期，但要注意适可而止，不可过于刚强。',
      career: '事业蒸蒸日上，威信和影响力不断提升。团队力量强大，但要注意平衡各方关系，避免过于强势。',
      love: '感情充满激情活力，但要注意控制情绪，避免过于强势。要学会倾听和体谅对方，保持适度的浪漫。',
      health: '体魄强健，精力充沛，但要注意不要过度透支。建议适度运动，注意劳逸结合。',
      wealth: '财运强劲，收入可观。投资机会多，但要注意控制风险，不可过于激进。',
      action: '此时宜：\n1. 开拓进取\n2. 树立威信\n3. 展现才能\n4. 适度竞争\n\n此时忌：\n1. 盲目自大\n2. 强势压人\n3. 冒进冒险',
    },
  },
  '010101': {
    name: '中孚卦',
    description: '兑上巽下，中孚；君子以议狱缓死',
    lines: [false, true, false, true, false, true],
    interpretation: {
      overall: '中孚卦象征诚信和中正，当前适合以诚待人，保持中庸之道。重视信用和承诺，可获得他人信任。',
      career: '工作中要以诚信为本，与人为善。适合建立长期合作关系，注重团队和谐。创新想法易获认可。',
      love: '感情发展需要以真诚相待，不要有所隐瞒。适合表达真实感受，增进彼此了解和信任。',
      health: '身心状态平稳，但要注意保持内心平和。适合进行冥想或瑜伽等修身养性的活动。',
      wealth: '财运平稳，适合稳健理财。投资要注重诚信和长期价值，避免投机取巧。',
      action: '此时宜：\n1. 以诚待人\n2. 建立信任\n3. 保持中正\n4. 谋求长远\n\n此时忌：\n1. 投机取巧\n2. 言而无信\n3. 过于极端',
    },
  },
  '001010': {
    name: '履卦',
    description: '上天下泽，履；君子以辨上下，定民志',
    lines: [false, false, true, false, true, false],
    interpretation: {
      overall: '履卦象征循序渐进，脚踏实地。当前要注意把握分寸，谨慎行事，一步一个脚印地前进。',
      career: '事业发展需要脚踏实地，不可好高骛远。注意遵守规则，尊重秩序，循序渐进地实现目标。',
      love: '感情需要循序渐进，不可操之过急。要注意维护感情的纯净，以真诚和耐心对待对方。',
      health: '身体状况稳定，但要注意循序渐进地锻炼，不可过度。保持规律的生活习惯很重要。',
      wealth: '财运平稳，收入逐步提升。投资要稳扎稳打，不要期望一夜暴富。',
      action: '此时宜：\n1. 循序渐进\n2. 谨慎行事\n3. 遵守规则\n4. 稳步前进\n\n此时忌：\n1. 急于求成\n2. 违背规则\n3. 行为轻浮',
    },
  }
};

export default function Divination({ question, onClose }: DivinationProps) {
  const [hexagram, setHexagram] = useState<Hexagram | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'overall' | 'career' | 'love' | 'health' | 'wealth' | 'action'>('overall');

  const generateHexagram = () => {
    setIsLoading(true);
    
    // 基于当前时间生成卦象
    const now = new Date();
    const timeString = now.getHours().toString() + 
                      now.getMinutes().toString() + 
                      now.getSeconds().toString() + 
                      now.getMilliseconds().toString();
    
    // 生成6个爻
    const lines: boolean[] = Array(6).fill(false).map((_, i) => {
      const seed = parseInt(timeString.slice(i, i + 2) || '0');
      return seed % 2 === 0;
    });

    // 转换为卦象key
    const key = lines.map(line => line ? '1' : '0').join('');
    
    // 模拟延迟以增加仪式感
    setTimeout(() => {
      setHexagram(HEXAGRAMS[key] || HEXAGRAMS['111111']);
      setIsLoading(false);
    }, 1500);
  };

  const tabClasses = (tab: typeof activeTab) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      activeTab === tab
        ? 'bg-purple-500 text-white'
        : 'text-gray-400 hover:text-white hover:bg-zinc-800'
    }`;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-8 rounded-2xl max-w-4xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">寻求指引</h2>
          <p className="text-gray-400 mb-4">
            您的问题：{question}
          </p>
        </div>

        {!isLoading && !hexagram && (
          <button
            onClick={generateHexagram}
            className="w-full bg-white text-black py-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            开始起卦
          </button>
        )}

        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-gray-400">正在演算卦象...</p>
          </div>
        )}

        {!isLoading && hexagram && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{hexagram.name}</h3>
              <p className="text-gray-400">{hexagram.description}</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 my-8">
              {hexagram.lines.map((line, index) => (
                <div
                  key={index}
                  className={`w-32 h-2 ${
                    line ? 'bg-white' : 'flex gap-2'
                  }`}
                >
                  {!line && (
                    <>
                      <div className="flex-1 h-full bg-white"></div>
                      <div className="flex-1 h-full bg-white"></div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <button onClick={() => setActiveTab('overall')} className={tabClasses('overall')}>整体寓意</button>
              <button onClick={() => setActiveTab('career')} className={tabClasses('career')}>事业建议</button>
              <button onClick={() => setActiveTab('love')} className={tabClasses('love')}>感情指引</button>
              <button onClick={() => setActiveTab('health')} className={tabClasses('health')}>健康提醒</button>
              <button onClick={() => setActiveTab('wealth')} className={tabClasses('wealth')}>财运预测</button>
              <button onClick={() => setActiveTab('action')} className={tabClasses('action')}>行动建议</button>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 whitespace-pre-line">
                  {hexagram.interpretation[activeTab]}
                </p>
              </div>
            </div>

            <button
              onClick={generateHexagram}
              className="w-full bg-zinc-800 text-white py-4 rounded-full font-semibold hover:bg-zinc-700 transition duration-300"
            >
              重新起卦
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 