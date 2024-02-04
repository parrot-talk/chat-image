import React, { useState } from 'react';
import Modal from './modals';
import logo from '../image/cocc.png';
const Footer = ({ theme }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContactClick = () => {
        setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
  

  return (
    <>
    <div  className={`Page ${theme} ` }>
      <div className="bg-linear-pink-invert bprimary pb-12 mx-auto max-w-7xl ">
        <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
          <div>
          <img
            className="w-10 h-10"
            src={logo}
            alt="Company Logo"
          /> 
                         
          </div>
          <div className="text-black flex flex-col items-center f-f-l pt-3">
            <h1 className="text-2xl secondary font-black">Copy. Paste.</h1>
            <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
              <h2 className="md:mr-6 pb-4 secondary md:py-0 cursor-pointer">Donate</h2>
              <h2 className="cursor-pointer secondary" onClick={handleContactClick}>
                Contact
              </h2>
            </div>
            <div className='secondary mt-5'>Highest Donor:Alan Turing $0.0</div>
            <div className="text-sm text-color mb-10 f-f-l mt-10 secondary">
            <p>No copyright infringement intended; if you find any issues, please let me know, and I will promptly address them.</p>
            
            </div>
            <div className="text-sm text-color mb-10 f-f-l mt-10 secondary">
               <p className='justify-center'>© 2023 CHATIMAZE. All rights reserved</p>
            </div>
          </div>
          <div className="w-9/12 h-0.5 bg-gray-100 rounded-full" />
        </div>
      </div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      </div>
    </>
  );
};

export default Footer;


  
 
 


  