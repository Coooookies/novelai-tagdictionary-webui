/*
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-02 08:40:00
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 08:49:21
 * @FilePath: \novelai-tagdictionary-webui\src\utils\vibration.ts
 * @Description:
 */
export function vibration(durations: number) {
  if (navigator.vibrate) navigator.vibrate(durations);
}
