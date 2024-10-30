"use client"; // Add this line to make the component a client component
import React, { useState } from 'react';
import DragAndDropArea from './components/drag-and-drop-area';
import FeedbackMessage from './components/feedback-message';
// import LoadingSpinner from './components/loading-spinner';
import ImagePreview from './components/image-preview';
import DownloadButton from './components/download-button';
import { removeBackground } from './services/removeBgService';
import { validateImageFile } from './utils/validationUtils';
import '../styles/globals.css';

const HomePage: React.FC = () => {
    const [feedback, setFeedback] = useState('');
    
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);

    const handleDrop = async (file: File) => {
        const error = validateImageFile(file);
        if (error) {
            setFeedback(error);
            return;
        }

        const url = URL.createObjectURL(file);
        setImageUrl(url);
        
        setFeedback('');

        try {
            const resultBlob = await removeBackground(file);
            const imageUrl = URL.createObjectURL(resultBlob);
            setProcessedImageUrl(imageUrl);
            setFeedback('Background removed successfully!');
        } catch (err) {
            console.error('Error removing background:', err);
            setFeedback('Error removing background.');
        } finally {
            
        }
    };

    const handleRemoveImage = () => {
        setImageUrl(null);
        setProcessedImageUrl(null);
        setFeedback('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
            <h1 className="text-5xl font-bold mb-4 text-center text-gray-800">Remove Image Background</h1>
            <p className="text-xl mb-8 text-center text-gray-600">100% Automatically and Free</p>
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-xl">
                <div className="flex-1 p-6 flex flex-col items-center">
                    <DragAndDropArea onDrop={handleDrop} />
                    {imageUrl && (
                        <div className="mt-4 flex flex-col space-y-4 items-center">
                            <div className="flex flex-col items-center">
                                <h2 className="text-lg font-semibold text-blue-600">Before</h2>
                                <ImagePreview imageUrl={imageUrl} onRemove={handleRemoveImage} />
                            </div>
                            {processedImageUrl && (
                                <div className="flex flex-col items-center">
                                    <h2 className="text-lg font-semibold text-green-600">After</h2>
                                    <img src={processedImageUrl} alt="Processed" className="w-64 h-64 object-cover rounded-lg shadow-md" />
                                </div>
                            )}
                        </div>
                    )}
                    {processedImageUrl && (
                        <div className="flex flex-col items-center mt-4">
                            <DownloadButton url={processedImageUrl} />
                            {feedback && <FeedbackMessage message={feedback} />}
                        </div>
                    )}
                </div>
                
            </div>
           
            <p className="mt-4 text-sm text-gray-500 text-center">By uploading an image or URL you agree to Abdul Muzeer. just kidding! Enjoy the tool</p>
        </div>
    );
};

export default HomePage;
