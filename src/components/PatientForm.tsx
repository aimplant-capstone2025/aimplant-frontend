import React, { FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PatientData, ImplantResult } from '@/app/types';
import FormField from './FormField';
import ImageUploader from './ImageUploader';
import LoadingButton from './LoadingButton';
import { predictBoneLoss } from '@/app/api/mockApi';
import UploadImageNoStore from './UploadImageNoStore';
import UploadImage from './UploadImage';
import ProcessImage from '@/components/ProcessImage';

interface PatientFormProps {
  onResultsReady: (results: {
    totalImplants: number;
    implantResults: ImplantResult[];
    processedImageUrl: string | null;
  }) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ onResultsReady }) => {
  // State for patient data
  const [patientData, setPatientData] = useState<PatientData>({
    age: '',
    gender: 'male',
    location: '',
    image: null,
  });
  
  // State for image preview
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  // State for loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle field changes
  const handleFieldChange = (name: string, value: string) => {
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  // Handle image selection
  const handleImageSelected = (file: File, preview: string) => {
    setPatientData({
      ...patientData,
      image: file,
    });
    setImagePreview(preview);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!patientData.image) {
      alert('Please upload a panoramic X-ray image');
      return;
    }
    
    // Show loading state
    setIsLoading(true);
    
    try {
      // Call the mock API service
      const results = await predictBoneLoss(patientData.image);
      
      // Pass results to parent component
      onResultsReady({
        totalImplants: results.length,
        implantResults: results,
        processedImageUrl: imagePreview, // In a real app, this would be the processed image from the backend
      });
    } catch (error) {
      console.error('Error predicting bone loss:', error);
      alert('An error occurred while processing the image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        id="age"
        name="age"
        label="Age"
        value={patientData.age}
        type="number"
        onChange={handleFieldChange}
        required
      />
      
      <FormField
        id="gender"
        name="gender"
        label="Gender"
        value={patientData.gender}
        type="select"
        options={genderOptions}
        onChange={handleFieldChange}
        required
      />
      
      <FormField
        id="location"
        name="location"
        label="Implant Location"
        value={patientData.location}
        onChange={handleFieldChange}
        required
      />
      
      <ImageUploader
        imagePreview={imagePreview}
        onImageSelected={handleImageSelected}
        required
      />
      <UploadImage setImageUrl={setImagePreview} />
      
      <h3 className="h3 font-bold">Upload Image (not store)</h3>
        <UploadImageNoStore  
        imagePreview={imagePreview}
        onImageSelected={handleImageSelected}
        required />
         {image && <ProcessImage image={imagePreview} />}

      


      <LoadingButton isLoading={isLoading}>
        <>
          Detect
          <ArrowRight className="w-5 h-5 ml-2" />
        </>
      </LoadingButton>
    </form>
  );
};

export default PatientForm;