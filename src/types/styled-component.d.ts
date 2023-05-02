import { theme } from "@/lib/styled";
import "styled-components";

type Theme = typeof theme;

/* eslint-disable */
declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
/* eslint-enable */
