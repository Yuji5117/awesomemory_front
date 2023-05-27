import { factory, primaryKey } from "@mswjs/data";

const models = {
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    registeredAt: Number,
  },
};

export const db = factory(models);

db.user.create({
  id: "user-1",
  firstName: "yuji",
  lastName: "nakamura",
  email: "ny5117@icloud.com",
  password: "65235117",
  registeredAt: Date.now(),
});
