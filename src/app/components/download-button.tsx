import React from 'react';

interface DownloadButtonProps {
    url: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ url }) => {
    return (
        <a href={url} download="processed-image.png" className="mt-4 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200">
            Download Processed Image
        </a>
    );
};

export default DownloadButton;

