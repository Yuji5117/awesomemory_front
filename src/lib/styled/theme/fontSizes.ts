type Font = {
  family: { [key: string]: string };
  size: { [key: string]: string };
  weight: { [key: string]: number };
};

export const font: Font = {
  family: { sans: '"Open Sans", sans-serif' },
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xl2: "1.5rem",
    xl3: "1.875rem",
    xl4: "2.25rem",
    xl5: "3rem",
    xl6: "3.75rem",
    xl7: "4.5rem",
  },
  weight: {
    thin: 100,
    extralight: 200,
    regular: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};
