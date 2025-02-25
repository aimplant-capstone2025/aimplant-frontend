import React, { useState } from "react";
import { Button } from "./ui/button";
type ImageUploadProps = {
  onImageUpload: (imageData: string) => void;
};

const UploadImageNoStore: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreview(e.target.result as string);
          onImageUpload(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='space-y-6'>
      <input type="file" id='file-upload' accept="image/*" onChange={handleImageChange} style={{ display: "none" }}/>
      <div className='flex flex-row space-x-6'>
        <label htmlFor="file-upload" style={buttonStyle}>
          Choose File
        </label>
        {fileName && <div style={{ marginTop: "10px" }}>{fileName}</div>}
      </div>
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: "100%" }} />}
    </div>
  );
};

// Custom button styles
const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#DEE8FF", 
  color: '#5A8CFF',
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  textAlign: "center",
  fontSize: "16px",
};


export default UploadImageNoStore;
