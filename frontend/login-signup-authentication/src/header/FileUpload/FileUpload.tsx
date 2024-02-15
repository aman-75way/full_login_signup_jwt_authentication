import { useState } from "react";
import axios from "axios";
import './fileUpload.style.css';


export const FileUpload = ()=>{
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
          setSelectedFile(file);
        }
  };

  const handleUpload = async (event : React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('images', selectedFile);

    try {
      const response = await axios.post('http://localhost:4000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful', response);
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return (
    <div>
      <div className="outerImageContainer">
        <div className="imageContainer">
            <form onSubmit={handleUpload}>
              <input  type="file" name="images" onChange={handleFileChange}  />     
              <button className='submit-btn' type="submit" onClick={handleUpload}>
                Upload
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};


