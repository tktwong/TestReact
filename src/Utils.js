export const ConsoleTime = ({ children }) => {
    console.time(`${children} elapse time`);
    return false;
};

export const ConsoleTimeEnd = ({ children }) => {
    console.timeEnd(`${children} elapse time`);
    return false;
};