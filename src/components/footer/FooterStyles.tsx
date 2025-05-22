
import React from 'react';

const FooterStyles: React.FC = () => {
  return (
    <style>
      {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: rgba(255, 255, 255, 0.05);
        }
      `}
    </style>
  );
};

export default FooterStyles;
