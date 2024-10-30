import axios from 'axios';

const apiKey = 'cB7mnME2AphnvyzZHjcDTA74';

console.log('API Key:', process.env.REMOVE_BG_API_KEY);

export const removeBackground = async (imageFile: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('image_file', imageFile);
    
    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'multipart/form-data',
        },
        responseType: 'blob', // Set response type to blob
    });

    return response.data as Blob; // This will be a Blob
};
