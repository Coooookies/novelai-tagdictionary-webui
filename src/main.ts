/*
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-27 00:46:18
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-28 22:44:56
 * @FilePath: \novelai-tagdictionary-webui\src\main.ts
 * @Description: 
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import { FastClick as fastclick } from "fastclick";

import App from "./App.vue";
import router from "./router";

import "./style/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
fastclick.attach(document.body);
