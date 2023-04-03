/**
 * Checks if global variable 'window' is available. If it's available,
 * code runs in browser environment
 */
import {getLogger} from "./log"

export function isWindowAvailable(warnMsg = undefined) {
  //here we check not only of window object is globally available, but also if it's not a fake one
  //react-native do have a window object, but it's not a real one: https://stackoverflow.com/questions/49911424/what-does-the-variable-window-represent-in-react-native
  const windowAvailable = !!globalThis.window && !!globalThis.window.document && !!globalThis.window.location
  if (!windowAvailable && warnMsg) {
    getLogger().warn(warnMsg);
  }
  return windowAvailable;
}


/**
 * @param msg
 * @return {Window}
 */
export function requireWindow(msg = undefined) {
  if (!isWindowAvailable()) {
    throw new Error(msg || "window' is not available. Seems like this code runs outside browser environment. It shouldn't happen")
  }
  return window;
}

export const isThisServiceWorker = () => typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;

export const isThisBrowser = () => isWindowAvailable() || isThisServiceWorker();

