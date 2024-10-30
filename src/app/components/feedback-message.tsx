import React from 'react';

interface FeedbackMessageProps {
    message: string;
    isError?: boolean;
}

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ message, isError }) => {
    return (
        <div className={`p-4 mt-4 rounded-lg ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
        </div>
    );
};

export default FeedbackMessage;
