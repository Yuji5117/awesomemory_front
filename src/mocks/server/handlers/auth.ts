import { rest } from "msw";

import { db } from "../db";

type LoginBody = {
  email: string;
  password: string;
};

export const authHandlers = [
  rest.post<LoginBody>("/auth/login", (req, res, ctx) => {
    const credentials = req.body;

    const user = db.user.findFirst({
      where: {
        email: {
          equals: credentials.email,
        },
      },
    });

    if (user?.password === credentials.password) {
      return res(ctx.status(200), ctx.json({ user }));
    }

    const error = new Error("Invalid username or password");
    throw error;
  }),

  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    return res(ctx.status(200), ctx.json({ username: "yuji" }));
  }),
];
