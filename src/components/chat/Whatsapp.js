import React from 'react';

import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Whatsapp = () => {
  return(
    <div className="whatsapp">
        <WhatsAppWidget phoneNumber='+94778374845' companyName="International Institute of Theravada"/>
    </div>
  );
}

export default Whatsapp;