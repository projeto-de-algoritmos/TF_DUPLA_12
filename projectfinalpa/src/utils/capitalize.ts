export const capitalize = (value: any) => {
  return value.replace(/(^\w{1})|(\s+\w{1})/g, (letter: any) => {
    return letter.toUpperCase();
  });
};

export const zeroPad = (num: any) => {
  return `#${String(num).padStart(3, "0")}`;
};
