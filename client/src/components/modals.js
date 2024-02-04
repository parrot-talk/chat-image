import React, { useState } from 'react';

const Modal = ({ onClose, theme }) => {
  const [email, setEmail] = useState('');
  const [thoughts, setThoughts] = useState('');
  const [satisfaction, setSatisfaction] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleThoughtsChange = (e) => {
    setThoughts(e.target.value);
  };

  const handleSatisfactionChange = (e) => {
    setSatisfaction(e.target.value);
  };

  const handleSubmit = () => {
    // Validate form values
    if (!email) {
      alert('Please enter an email address');
      return;
    }
    if (!thoughts) {
      alert('Please enter your thoughts');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Handle form submission here
    console.log('Email:', email);
    console.log('Thoughts:', thoughts);
    console.log('Satisfaction:', satisfaction);

    // Reset form values
    setEmail('');
    setThoughts('');
    setSatisfaction('');
    onClose();
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="modal-content bprimary w-96 p-6 rounded text-1xl md:text-2xl">
          <span className="modal-close cursor-pointer " onClick={onClose}>
            ×
          </span>

          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-1 secondary">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-3 py-2 secondary rounded"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="thoughts" className="block font-bold secondary mb-1">
              Thoughts:
            </label>
            <textarea
              id="thoughts"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              value={thoughts}
              onChange={handleThoughtsChange}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block font-bold secondary mb-1">Satisfaction Level:</label>
            <div>
              <label className="mr-4 secondary">
                <input
                  type="radio"
                  value="satisfied"
                  checked={satisfaction === 'satisfied'}
                  onChange={handleSatisfactionChange}
                />
                Satisfied
              </label>
              <label className="mr-4 secondary">
                <input
                  type="radio"
                  value="unsatisfied"
                  checked={satisfaction === 'unsatisfied'}
                  onChange={handleSatisfactionChange}
                />
                Unsatisfied
              </label>
            </div>
          </div>

          <button
            className="btertiary hover:bdtertiary text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
