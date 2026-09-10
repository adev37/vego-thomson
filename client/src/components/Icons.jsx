import React from "react";

// All icons use currentColor so they inherit color via CSS (gold on splash/bottom bar).

export const LogoMark = ({ color = "#ffffff", size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="42" r="34" stroke={color} strokeWidth="4" />
    <path d="M30 58 L50 30 L70 58" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const InfraIcon = ({ size = 54 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18" width="30" height="38" rx="1" />
    <rect x="40" y="30" width="14" height="26" rx="1" />
    <line x1="16" y1="26" x2="34" y2="26" />
    <rect x="16" y="30" width="4" height="4" />
    <rect x="24" y="30" width="4" height="4" />
    <rect x="32" y="30" width="4" height="4" />
    <rect x="16" y="38" width="4" height="4" />
    <rect x="24" y="38" width="4" height="4" />
    <rect x="32" y="38" width="4" height="4" />
    <rect x="21" y="47" width="8" height="9" />
    <rect x="44" y="36" width="6" height="5" />
  </svg>
);

export const HealthcareIcon = ({ size = 54 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 30c0-6 5-10 10-10 4 0 6 2 8 4" strokeLinecap="round" />
    <path d="M18 20 L26 28 L18 36" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M34 24c3-3 8-4 11-1 3 3 3 8-1 12l-10 10-10-10c-4-4-4-9-1-12 3-3 8-2 11 1z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M56 30c0-6-5-10-10-10-4 0-6 2-8 4" strokeLinecap="round" />
  </svg>
);

export const TechnologyIcon = ({ size = 54 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 44h16" strokeLinecap="round" />
    <path d="M27 50h10" strokeLinecap="round" />
    <path
      d="M32 10c-9 0-15 7-15 15 0 6 3 10 6 13 2 2 3 3 3 6h12c0-3 1-4 3-6 3-3 6-7 6-13 0-8-6-15-15-15z"
    />
    <circle cx="46" cy="16" r="1.6" fill="currentColor" />
    <circle cx="50" cy="22" r="1.6" fill="currentColor" />
    <circle cx="51" cy="29" r="1.6" fill="currentColor" />
    <circle cx="18" cy="16" r="1.6" fill="currentColor" />
    <circle cx="14" cy="22" r="1.6" fill="currentColor" />
  </svg>
);

export const AgroIcon = ({ size = 54 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="38" r="9" />
    <circle cx="44" cy="42" r="6" />
    <rect x="24" y="20" width="14" height="12" rx="1" />
    <path d="M38 24h8l4 8h-12z" />
    <line x1="20" y1="29" x2="20" y2="20" strokeLinecap="round" />
    <line x1="10" y1="20" x2="20" y2="20" strokeLinecap="round" />
  </svg>
);

export const MouseScrollIcon = ({ size = 28, color = "#ffffff" }) => (
  <svg width={size} height={size * 1.7} viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="24" height="42" rx="12" stroke={color} strokeWidth="2" />
    <line x1="14" y1="12" x2="14" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ChevronUp = ({ size = 18, color = "#ffffff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15l8-8 8 8" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowLeft = ({ size = 18, color = "#ffffff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5l-8 7 8 7" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight = ({ size = 18, color = "#ffffff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5l8 7-8 7" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const categoryIcon = (key, size) => {
  switch (key) {
    case "infrastructure":
      return <InfraIcon size={size} />;
    case "healthcare":
      return <HealthcareIcon size={size} />;
    case "technology":
      return <TechnologyIcon size={size} />;
    case "agro":
      return <AgroIcon size={size} />;
    default:
      return null;
  }
};

// Icons.jsx (existing file ke andar add karein)

export const VTLogo = ({ size = 60, color = "#6d1c39" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle - bada kiya taaki andar space mile */}
      <path
        d="M50 8 L94 90 L6 90 Z"
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />

      {/* VT Text - chota aur center mein */}
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill={color}
        letterSpacing="1"
      >
        VT
      </text>
    </svg>
  );
};