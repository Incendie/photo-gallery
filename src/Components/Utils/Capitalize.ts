// Capitalize the first letter of a string
export const Capitalize = (str: string | null) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
