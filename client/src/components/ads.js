import React from 'react'
import '../style.css';
const  Ads= ({ theme }) => {
    return (
      <div className={`Page ${theme} bprimary border-b border-btertiary` }>
        <div className='mx-auto max-w-7xl'>
        {/* <h1 className="primary">Primary</h1>
        <h2 className="secondary">Secondary</h2>
        <p className="tertiary">Tertiary</p> */}
        
  <div className="ad-container h-64" >
    {/* Insert your ad code here */}
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="YOUR_AD_CLIENT_ID"
      data-ad-slot="YOUR_AD_SLOT_ID"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </div>
 
      </div>
      
      </div>
    );
  };

export default Ads;