export type Album = {
  id: number;
  title: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  registeredAt: Date;
};
