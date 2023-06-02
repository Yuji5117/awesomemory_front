import { rest } from "msw";

import { db } from "../db";

import { createJwt } from "@/mocks/utils";

type LoginBody = {
  email: string;
  password: string;
};

export const authHandlers = [
  rest.post<LoginBody>(`/auth/login`, async (req, res, ctx) => {
    const credentials = req.body;

    const user = db.user.findFirst({
      where: {
        email: {
          equals: credentials.email,
        },
      },
    });

    if (user?.password !== credentials.password) {
      const error = new Error("Invalid username or password");
      throw error;
    }

    const encodedToken = await createJwt();
    return res(ctx.status(200), ctx.json({ user, jwt: encodedToken }));
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
