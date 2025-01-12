import React, { FC } from 'react';

interface IProps {
  color?: string;
  size?: number;
}

const FbIcon: FC<IProps> = ({ size = 20, color = '#333' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <path d="M13.843 0H2.157C.967 0 0 .966 0 2.157v11.686C0 15.033.966 16 2.157 16H7.92l.008-5.72H6.444a.348.348 0 0 1-.35-.348l-.006-1.84c0-.193.154-.354.352-.354h1.48v-1.78c0-2.064 1.263-3.193 3.104-3.193h1.514c.193 0 .352.158.352.354v1.55a.354.354 0 0 1-.352.354h-.927c-1.004 0-1.197.476-1.197 1.175v1.54h2.204c.207 0 .37.185.346.393l-.217 1.844a.348.348 0 0 1-.35.304h-1.972L10.414 16h3.43c1.19 0 2.156-.966 2.156-2.157V2.157C16 .967 15.034 0 13.843 0" fill={color} fillRule="evenodd" />
    </svg>
  );
};

export default FbIcon;
