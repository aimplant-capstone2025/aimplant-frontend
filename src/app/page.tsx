'use client'
import { useState } from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UploadImage from "@/components/UploadImage";
import ProcessImage from '@/components/ProcessImage';
import UploadImageNoStore from '@/components/UploadImageNoStore';

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>(
    ''
  )
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  return (
    <main className='space-y-12'>
      <div className='text-center'>
        <h1 className='h1 font-bold'>AImplant</h1>
      </div>
      <h4 className='h4'>Upload an image to try yolov8-pose keypoint detection</h4>
      
      <div className='flex items-center mt-8 mb-8 space-x-4'>
        <Button variant="default" className="w-full">Implant</Button>
        <Button variant="purple" className="w-full">Bone loss</Button>
        <Button variant="green" className="w-full">Healthy</Button>
        <Button variant="orange" className="w-full">Mucositis</Button>
        <Button variant="red" className="w-full">Peri-implantitis</Button>
      </div>

      <UploadImage setImageUrl={setImageUrl} />

      <h3 className="h3 font-bold">Upload Image (not store)</h3>
        <UploadImageNoStore onImageUpload={setImage} />
        {image && <ProcessImage image={image} />}

    </main>
  );
}
