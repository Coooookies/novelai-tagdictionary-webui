/*
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-09-13 20:52:10
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-29 14:57:35
 * @FilePath: \novelai-tagdictionary-webui\src\components\select\types.ts
 * @Description:
 */
export type iSelectItem = {
  type: "item";
  key: string;
  value: string;
};

export type iSelectSpace = {
  type: "line";
};

export type iSelectItems = iSelectSpace | iSelectItem;
