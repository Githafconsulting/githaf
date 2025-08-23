import React from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  title,
  className = '',
  loading = 'lazy',
  width,
  height
}) => {
  return (
    <img
      src={src}
      alt={alt}
      title={title || alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      itemProp="image"
    />
  );
};

export default SEOImage;