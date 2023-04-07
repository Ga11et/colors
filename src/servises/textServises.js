export const textServises = {
  fixedLength(str) {
    return str.length >= 50 ? str.slice(0, 47) + "..." : str;
  },
};
