import React from 'react';

const OkIcon = ({ size = 14, color = '#333', className }) => {
  return (
    <svg className={className} width={size} viewBox="0 0 11 18">
      <g fill={color} fillRule="evenodd">
        <path d="M5.391 9.331a4.666 4.666 0 1 0 0-9.331 4.666 4.666 0 0 0 0 9.331zm0-7.178a2.512 2.512 0 1 1 0 5.025 2.512 2.512 0 0 1 0-5.025z" fillRule="nonzero" />
        <path d="M9.961 11.542c.508-.334.813-.9.814-1.507a1.302 1.302 0 0 0-.73-1.188 1.364 1.364 0 0 0-1.436.135 5.462 5.462 0 0 1-6.435 0A1.371 1.371 0 0 0 .74 8.847a1.303 1.303 0 0 0-.73 1.187A1.81 1.81 0 0 0 .82 11.54c.65.433 1.359.77 2.103 1.005.127.04.257.076.392.11l-2.17 2.12a1.436 1.436 0 1 0 2.035 2.026l2.21-2.289 2.216 2.293a1.436 1.436 0 1 0 2.027-2.033l-2.166-2.119c.134-.034.265-.07.393-.11a8.255 8.255 0 0 0 2.1-1.002z" />
      </g>
    </svg>
  );
};

export default OkIcon;