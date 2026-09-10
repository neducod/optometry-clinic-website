import React from 'react';

const InfoBar = () => {
  const infoItems = [
    {
      icon: '🏥',
      title: '24/7 Care',
      subtitle: 'Always available for you',
    },
    {
      icon: '👨‍⚕️',
      title: 'Experienced Doctors',
      subtitle: 'Board-certified specialists',
    },
    {
      icon: '🕐',
      title: 'Mon–Sun',
      subtitle: 'Open 7 days a week',
    },
    {
      icon: '🚑',
      title: 'Emergency Services',
      subtitle: 'Rapid response team',
    },
  ];

  return (
    <section className="w-full bg-[#5B6FB4]/10 border-y border-[#5B6FB4]/20 py-4 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#5B6FB4] mb-3">
          Quick Information
        </p>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-white/60 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Emoji Badge Icon */}
              <div className="flex shrink-0 items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#5B6FB4]/10 text-xl sm:text-2xl">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-500 truncate font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBar;