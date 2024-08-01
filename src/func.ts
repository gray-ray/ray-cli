const {v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');


export const uuid = (v = '1') => {
  const mp = {
    1: uuidv1,
    3: uuidv3,
    4: uuidv4,
    5: uuidv5,
  }
  return  mp[v]?.();
}

// 柯里化函数
export function  currying(fn, ...args1){
  return function (...args2) {
    return fn(...args1, ...args2)
  }
}