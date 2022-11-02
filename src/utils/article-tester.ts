/*
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-02 20:02:56
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 20:23:23
 * @FilePath: \novelai-tagdictionary-webui\src\utils\article-tester.ts
 * @Description:
 */
import { v4 as uuidv4 } from "uuid";
import type { iGridItem } from "@/components/grid";

export function createFakeArticle(count: number) {
  return Array(count).fill(0).map(fakeArticleBuilder);
}

export function fakeArticleBuilder(): iGridItem {
  const images = [
    "/images/demo/1.png",
    "/images/demo/2.png",
    "/images/demo/3.png",
    "/images/demo/4.png",
    "/images/demo/5.png",
    "/images/demo/6.png",
    "/images/demo/7.png",
    "/images/demo/8.png",
    "/images/demo/9.png",
    "/images/demo/10.png",
    "/images/demo/11.png",
    "/images/demo/12.png",
    "/images/demo/13.png",
    "/images/demo/14.png",
    "/images/demo/15.png",
    "/images/demo/16.png",
    "/images/demo/17.png",
    "/images/demo/18.png",
    "/images/demo/19.png",
    "/images/demo/20.png",
    "/images/demo/21.png",
    "/images/demo/22.png",
    "/images/demo/23.png",
    "/images/demo/24.png",
    "/images/demo/25.png",
    "/images/demo/26.png",
  ];

  const titles = [
    "龙娘、金发与长龙角",
    "金发、猫娘",
    "白毛、猫娘、翅膀与海边",
    "龙娘、金发与长龙角",
    "白毛、云与崩坏三",
    "猫娘、lolita与萝莉",
    "龙娘、森林与魔幻",
    "龙娘、冰",
  ];

  const authors = [
    "ButterCookies",
    "KiritaniIwako",
    "Suzuran",
    "BC",
    "NickName",
  ];

  return {
    id: uuidv4(),
    image: images[Math.round(Math.random() * (images.length - 1))],
    title: titles[Math.round(Math.random() * (titles.length - 1))],
    author: authors[Math.round(Math.random() * (authors.length - 1))],
    authorUrl: "https://www.baidu.com/",
    likes: Math.round(Math.random() * 5000),
    views: Math.round(Math.random() * 5000),
    imagecount: Math.round(Math.random() * 9) + 1,
    r18: Math.round(Math.random()) === 1,
  };
}
