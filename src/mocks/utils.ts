import * as jose from "jose";

import { privateKey } from "./server/browser";

export async function createJwt(): Promise<string> {
  console.log({ privateKey });
  return new jose.SignJWT({ "urn:example:claim": true })
    .setProtectedHeader({ alg: "ES256" })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2h")
    .sign(privateKey);
}
