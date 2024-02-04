import React, { useRef, useState } from 'react';

function UploadFile() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [asciiOutput, setAsciiOutput] = useState('');

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleImageUpload = async () => {
    if (!selectedFile) {
      return; // Only proceed if a file is selected
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    const width = document.querySelector('#width').value;
    formData.append('width', width); // Send the selected width value as part of the form data

    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Error generating ASCII art');
      }
      const data = await response.json();
      setAsciiOutput(data.ascii_output);
    } catch (error) {
      console.error('Error generating ASCII art:', error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    fileInputRef.current.value = ''; // Clear the file input value to allow selecting the same file again
    handleFileSelect(file);
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  return (
    <div className='mx-auto max-w-7xl bprimary'>
      <div
        className="box   h-64 border-4 border-bsecondary rounded-md flex items-center justify-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center">
          <button
            className="mb-2 px-4 py-2 border rounded-md btertiary option"
            onClick={() => fileInputRef.current.click()}
          >
            Choose File
          </button>
          <p className='secondary'>{selectedFile ? selectedFile.name : 'Drag and drop file here'}</p>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        onClick={(e) => (e.target.value = null)}
        style={{ display: 'none' }}
      />
      <div className='flex justify-center items-center mt-8'>
      <label htmlFor="width" className='ml-8 secondary'>Width:</label>
      <select id="width" name="width" className='mr-8 bprimary'>
        <option className='secondary' value="10">10</option>
        <option className='secondary' value="20">20</option>
        <option className='secondary' value="40">40</option>
        <option className='secondary' value="50">50</option>
        <option className='secondary' value="100">100</option>
        <option className='secondary' value="150">150</option>
        <option className='secondary' value="250">250</option>
        <option className='secondary' value="500">500</option>
        <option className='secondary' value="1000">1000</option>
      </select>
      <button
        className={`${
          selectedFile ? 'btertiary' : 'bdtertiary'
        } px-4 py-2 rounded-md option justify-center`}
        onClick={handleImageUpload}
        disabled={!selectedFile}
      >
        Generate ASCII Art
      </button></div>
      <div className="mt-4 border-4 rounded-md p-4 max-h-screen overflow-auto">
        <button
          className="mb-2 px-4 py-2   rounded-md btertiary option"
          onClick={() => navigator.clipboard.writeText(asciiOutput)}
        >
          Copy Picture
        </button>
        
        <pre className="box min-h-64 max-h-screen h-3/5  max-w-7xl   whitespace-pre-wrap">{asciiOutput}</pre>
      </div>
    </div>
  );
}

export default UploadFile;
