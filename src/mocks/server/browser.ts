import * as jose from "jose";
import { setupWorker } from "msw";

import { handlers } from "./handlers";

export const { publicKey, privateKey } = await jose.generateKeyPair("ES256");

export const worker = setupWorker(...handlers);
