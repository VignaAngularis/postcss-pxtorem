import { AcceptedPlugin, Input } from "postcss";

declare function rootValue(options: Input): number;

type RootValue = number | typeof rootValue;
interface Options {
  rootValue?: RootValue;
  unitPrecision?: number;
  propList?: string[];
  selectorBlackList?: string[];
  replace?: boolean;
  mediaQuery?: boolean;
  minPixelValue?: number;
  exclude?: string;

  /**
   * @deprecated use `rootValue` instead
   */
  root_value?: RootValue;
  /**
   * @deprecated use `unitPrecision` instead
   */
  unit_precision?: number;
  /**
   * @deprecated use `selectorBlackList` instead
   */
  selector_black_list?: string[];
  /**
   * @deprecated use `propList` instead
   */
  prop_white_list?: string[];
  /**
   * @deprecated use `mediaQuery` instead
   */
  media_query?: boolean;
  /**
   * @deprecated use `propList` instead
   */
  propWhiteList?: string[];
}

declare function moduleFunction(options?: Options): AcceptedPlugin;

declare namespace moduleFunction {
  const postcss: true;
}

export = moduleFunction;
