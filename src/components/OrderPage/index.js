import React from 'react';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const OrderPage = (props) => {
  console.log('props', props);
  const { CssClasses } = props.sitecoreContext.route.fields;
  return (
    <div className={CssClasses.value}>
      <div className='pt-5'>
      <p>OrderPage</p>
      </div>
    </div>
  );
};

export default withSitecoreContext()(OrderPage);
