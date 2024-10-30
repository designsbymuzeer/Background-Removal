import axios from 'axios';

const DEEP_AI_API_KEY = 'c1cce5b9-863a-47ec-a519-54ea3df9f36f'; // Replace with your actual API key

export const removeBackgroundDeepAI = async (imageFile: File) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await axios.post('https://api.deepai.org/api/remove-bg', formData, {
        headers: {
            'api-key': DEEP_AI_API_KEY,
        },
    });

    return response.data;
};
