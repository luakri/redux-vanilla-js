export const isExampleActive = (store) => {
    return store.getState().example.isActive;
};

export const isExampleConnecting = (store) => {
    return store.getState().example.connecting;
};

export const isExampleSuccess = (store) => {
    return store.getState().example.success;
};

export const isExampleError = (store) => {
    return store.getState().example.error;
};

export const getExampleData = (store) => {
    return store.getState().example.data;
};
