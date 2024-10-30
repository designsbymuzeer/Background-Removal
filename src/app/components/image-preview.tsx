import React from 'react';

interface ImagePreviewProps {
    imageUrl: string;
    onRemove: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, onRemove }) => {
    return (
        <div className="relative mt-4">
            <img src={imageUrl} alt="Preview" className="w-full h-auto rounded-lg shadow-md" />
            <button onClick={onRemove} className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition duration-200">
                X
            </button>
        </div>
    );
};

export default ImagePreview;
