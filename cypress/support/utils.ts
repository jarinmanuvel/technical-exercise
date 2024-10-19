export const generateRandomEmail = (): string => {
    const timestamp = Date.now();
    return `user${timestamp}@gmail.com`;
};
