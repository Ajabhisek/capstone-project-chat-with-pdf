import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './FileUpload.css';

const FileUpload = ({ onFileSelected }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
      onFileSelected(acceptedFiles[0]);
    }
  }, [onFileSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.pdf',
    multiple: false
  });

  return (
    <div className="file-upload" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the file here ...</p> :
          <p>Drag 'n' drop a PDF file here, or click to select a file</p>
      }
      {selectedFile && <p className="file-label">Selected file: {selectedFile.name}</p>}
      {!selectedFile && <button className="select-button">Select File</button>}
    </div>
  );
};

export default FileUpload;
