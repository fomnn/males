const tailwindColor = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
];

export default () => {
  return tailwindColor[Math.floor(Math.random() * tailwindColor.length)];
};
