export const isImageFile = (file: File) => {
    return file && file['type'].startsWith('image/');
};

export const getImageSize = (file: File) => {
    return file.size; // Size in bytes
};
