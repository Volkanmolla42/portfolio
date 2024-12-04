import React from "react";

const SealIcon = () => {
  return (
    <svg viewBox="0 0 100 100" className={`w-full h-full`}>
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.3" />
        </filter>
        <filter id="inner-shadow">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur stdDeviation="1" result="offset-blur" />
          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />
          <feFlood floodColor="#fff" floodOpacity="0.3" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
        <linearGradient id="waxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7f1d1d" />
          <stop offset="50%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
      </defs>

      {/* Mühür arka planı */}
      <circle cx="50" cy="50" r="48" fill="#7f1d1d" filter="url(#shadow)" />

      {/* Mühür kenarı */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        opacity="0.9"
        filter="url(#inner-shadow)"
      />

      {/* Dış dişli desen */}
      <path
        d="M50,2
       A48,48 0 0,1 98,50
       A48,48 0 0,1 50,98
       A48,48 0 0,1 2,50
       A48,48 0 0,1 50,2
       Z"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        strokeDasharray="3,3"
        opacity="0.8"
      />

      {/* İç daireler */}

      <circle
        cx="50"
        cy="50"
        r="32"
        fill="none"
        stroke="#fff"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* Seal logo */}
      <text
        x="50"
        y="55"
        fontSize="20"
        fill="#fff"
        textAnchor="middle"
        fontWeight="bold"
        className="font-old-english"
      >
        Seal
      </text>

      {/* Mühür yazısı */}
      <path id="topArc" d="M15,50 A35,35 0 0,1 85,50" fill="none" />
      <path id="bottomArc" d="M85,50 A35,35 0 0,1 15,50" fill="none" />
      <text fontSize="8" fill="#fff" opacity="0.9" className="font-old-english">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          &lt; VOLKAN MOLLA /&gt;
        </textPath>
      </text>
      <text fontSize="8" fill="#fff" opacity="0.9" className="font-old-english">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          &lt; VOLKAN MOLLA /&gt;
        </textPath>
      </text>
    </svg>
  );
};

export default SealIcon;
