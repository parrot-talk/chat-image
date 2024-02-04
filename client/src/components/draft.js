import React, { useRef, useState, useEffect } from 'react';

function UploadFile() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [asciiOutput, setAsciiOutput] = useState('');
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

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
    <div className='mx-auto max-w-7xl'>
      <div
        className="box w-64 h-64 border-4 border-gray-400 rounded-md flex items-center justify-center overflow-auto"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ minHeight: 64 }}
      >
        <div className="flex flex-col items-center">
          <button
            className="mb-2 px-4 py-2 border rounded-md bg-blue-500 text-white"
            onClick={() => fileInputRef.current.click()}
          >
            Choose File
          </button>
          <p>{selectedFile ? selectedFile.name : 'Drag and drop file here'}</p>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleInputChange}
        onClick={(e) => (e.target.value = null)}
        style={{ display: 'none' }}
      />
      <label htmlFor="width" className='ml-8 '>Width:</label>
      <select id="width" name="width" className='mr-8'>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="150">150</option>
        <option value="250">250</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
      <button
        className={`${
          selectedFile ? 'bg-blue-500' : 'bg-blue-800'
        } px-4 py-2 rounded-md text-white justify-center`}
        onClick={handleImageUpload}
        disabled={!selectedFile}
      >
        Generate ASCII Art
      </button>
      <div className="box mt-4   border-4 rounded-md p-4 max-h-screen"   >
        <button
          className="mb-2 px-4 py-2 bg-blue-500 rounded-md text-white"
          onClick={() => navigator.clipboard.writeText(asciiOutput)}
        >
          Copy Picture
        </button>
        
        <pre className="  overflow-x-auto" style={{ maxHeight: windowHeight - 250 }}>
  {asciiOutput}
</pre>

      </div>
    </div>
  );
}

export default UploadFile;
