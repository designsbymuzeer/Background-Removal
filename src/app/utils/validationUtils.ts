export const validateImageFile = (file: File) => {
    const maxSize = 5 * 1024 * 1024; // 5 MB
    if (!file.type.startsWith('image/')) {
        return 'File must be an image.';
    }
    if (file.size > maxSize) {
        return 'File size must be less than 5 MB.';
    }
    return null; // No errors
};
