/*
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-02 19:50:33
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 19:55:57
 * @FilePath: \novelai-tagdictionary-webui\src\components\grid\types.ts
 * @Description:
 */
export type iGridItem = {
  id: string;
  title: string;
  author: string;
  authorUrl: string;
  likes: number;
  views: number;
  image: string;
  imagecount: number;
  r18: boolean;
};
