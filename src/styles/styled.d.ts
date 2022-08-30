import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      green: string;
      gray: string;
      red: string;
      blue: string;
    };
  }
}
