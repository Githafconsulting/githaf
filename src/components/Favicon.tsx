
import React from 'react';
import { Helmet } from 'react-helmet';

const Favicon = () => {
  return (
    <Helmet>
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    </Helmet>
  );
};

export default Favicon;
