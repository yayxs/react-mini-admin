/*
 * @Author: yayxs
 * @Date:
 * @Description: 封装本地存储
 */
const localStore = window.localStorage;
class ComLocalStorage {
  // 设置数据 如果value是obj 调用JSON.stringify转换为字符串
  static set(key, value) {
    if (!localStore) {
      return;
    }
    let v = value;
    try {
      if (typeof value === "object") {
        v = JSON.stringify(v);
      }
      localStore.setItem(key, v);
    } catch (error) {
      // error
    }
  }
  // 直接读取
  static get(key) {
    if (!localStore) {
      return;
    }
    return localStore.getItem(key);
  }
  // 读取转Obj
  static get2Json(key) {
    if (!localStore) {
      return;
    }
    const data = localStore.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        // todo error
      }
    }

    return null;
  }
  // 直接移除
  static remove(key) {
    if (!localStore) {
      return;
    }
    try {
      localStore.removeItem(key);
    } catch (error) {
      // todo error
    }
  }
}
export default ComLocalStorage;
