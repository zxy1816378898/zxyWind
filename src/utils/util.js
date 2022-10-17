/**
 * 转换图表数据格式
 * @param {*} value
 * @param {*} arr
 * @param {*} params
 * @param {*} key
 * @returns
 */
export const getValue = (value, arr, params = 'params', key = 'key') => {
  const option = arr.find((r) => r[key] === value) || {};
  return option[params];
};

/**
 * 数组求和
 * @param {*} arr
 * @returns
 */
export const getSum = (arr) => {
  return eval(arr.join('+'));
};
