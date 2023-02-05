export const colorBackgroundCard = (typeColor: any, colorObject: any) => {
  const colorsArray = Object.entries(colorObject);

  const color = colorsArray.filter(([key]) => {
    return key === typeColor;
  });

  return color[0]?.toString().split(",").pop();
};
