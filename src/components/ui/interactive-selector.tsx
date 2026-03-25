import React, { useState, useEffect } from 'react';
import { FaUserMd, FaCalendarCheck, FaLaptopMedical, FaFileAlt, FaCreditCard, FaNetworkWired } from 'react-icons/fa';

interface SelectorOption {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const InteractiveSelector = ({ options }: { options: SelectorOption[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Options Container */}
      <div className="flex gap-2 md:gap-3 h-[420px] md:h-[480px]">
        {options.map((option, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
              index === activeIndex ? 'flex-[4]' : 'flex-1'
            }`}
            style={{
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              transition: 'flex 0.7s ease-in-out, opacity 0.5s ease-out, transform 0.5s ease-out',
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow overlay */}
            <div
              className={`absolute inset-0 transition-all duration-700 ${
                index === activeIndex
                  ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'
                  : 'bg-gradient-to-t from-black/80 via-black/40 to-black/20'
              }`}
            />

            {/* Background image */}
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Label */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-all duration-500 ${
                index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary shrink-0">
                  {option.icon}
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    index === activeIndex ? 'max-w-[400px] opacity-100' : 'max-w-0 opacity-0'
                  }`}
                >
                  <h3 className="text-white font-semibold text-sm md:text-base whitespace-nowrap">
                    {option.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm whitespace-nowrap">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
