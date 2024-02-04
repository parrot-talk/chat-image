import React, { useState } from 'react';

function DragAndDrop() {
  const [dragging, setDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div
      className={`box ${dragging ? 'dragging' : ''} w-64 h-64 border-2 border-gray-400 rounded-md flex items-center justify-center`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {selectedFile ? (
        <p>Selected File: {selectedFile.name}</p>
      ) : (
        <p>Drag and drop files here</p>
      )}
    </div>
  );
}

export default DragAndDrop;
