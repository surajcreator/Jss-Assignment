import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const TwoColumnLayout = ({ rendering }) => {
  console.log('rendering', rendering);
  return (
    <div className="row">
      <Placeholder name="jss-left-column" rendering={rendering} />
      <Placeholder name="jss-right-column" rendering={rendering} />
    </div>
  );
};

export default TwoColumnLayout;
