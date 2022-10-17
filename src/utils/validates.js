/**
 * 校验是否为百分数
 * 可以有小数
 * @param {*} value
 * @returns
 */
export const isPercentage = (value) => {
  return /^(100|[1-9]?\d(\.\d\d?)?)%$/.test(value);
};
