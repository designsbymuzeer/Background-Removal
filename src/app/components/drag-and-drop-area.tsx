import React, { useCallback, useState } from 'react';

interface DragAndDropAreaProps {
    onDrop: (file: File) => void;
}

const DragAndDropArea: React.FC<DragAndDropAreaProps> = ({ onDrop }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            onDrop(files[0]);
        }
    }, [onDrop]);

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleClick = () => {
        document.getElementById('fileInput')?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            onDrop(files[0]);
        }
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleClick}
            className={`border-dashed border-4 p-8 text-center rounded-lg transition duration-200 
                ${isDragging ? 'border-blue-600 bg-blue-50' : 'border-blue-500'}`}
        >
            <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
            />
            <p className="text-gray-700 text-lg font-semibold">Upload Image</p>
            <p className="text-gray-500">or drop a file, paste image or URL</p>
        </div>
    );
};

export default DragAndDropArea;
