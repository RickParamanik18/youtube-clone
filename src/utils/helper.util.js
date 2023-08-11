export const formatStats = (val) => {
    if (val < 999) return val;
    else return Math.floor(val / 1000) + "K";
};
