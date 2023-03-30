import { load } from '@fingerprintjs/botd';

declare global {
  interface Window {
    botd: any;
    botdPromise: Promise<any>;
  }
}
window.botdPromise = load().then((botd) => {
  const detection = botd.detect();
  window.botd = botd;
  return detection;
});
