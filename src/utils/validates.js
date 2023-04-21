/**
 * 计算百分比
 * @param   {number} num   分子
 * @param   {number} total 分母
 * @returns {number} 返回数百分比
 */
 export function Percentage(num, total) {
  if (num == 0 || total == 0) {
    return 0;
  }
  return Math.round(Math.round((num / total) * 10000) / 100); // 小数点后两位百分比
}

/**
 * 校验是否为百分数
 * 可以有小数
 * @param {*} value
 * @returns
 */
export const isPercentage = (value) => {
  return /^(100|[1-9]?\d(\.\d\d?)?)%$/.test(value);
};

/**
 * 将hex颜色转成rgb
 * @param {*} hex
 * @param {*} opacity
 * @returns
 */
export function hexToRgba(hex, opacity) {
  let RGBA =
    'rgba(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ',' +
    opacity +
    ')';
  return {
    red: parseInt('0x' + hex.slice(1, 3)),
    green: parseInt('0x' + hex.slice(3, 5)),
    blue: parseInt('0x' + hex.slice(5, 7)),
    rgba: RGBA,
  };
}

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

/** 根据区划代码返回对应的区划名称 */
export const getQhmcByDm = (qhdm) => {
  let qhmc = '';
  if (qhdm == '080000') {
    qhmc = '淮安市';
  } else if (qhdm == '080300') {
    qhmc = '淮安区';
  } else if (qhdm == '089100') {
    qhmc = '清江浦区';
  } else if (qhdm == '080400') {
    qhmc = '淮阴区';
  } else if (qhdm == '080600') {
    qhmc = '开发区';
  } else if (qhdm == '080700') {
    qhmc = '工业园区';
  } else if (qhdm == '080800') {
    qhmc = '生态文旅区';
  } else if (qhdm == '082600') {
    qhmc = '涟水县';
  } else if (qhdm == '082600') {
    qhmc = '涟水县';
  } else if (qhdm == '082900') {
    qhmc = '洪泽区';
  } else if (qhdm == '083000') {
    qhmc = '盱眙县';
  } else if (qhdm == '083100') {
    qhmc = '金湖县';
  }

  return qhmc;
};

//默认查询开始时间 当年的1.1
export function getYearFirstDay() {
  let yy = new Date().getFullYear();
  let fistDayTime = yy + '-' + '01-01';
  return fistDayTime;
}

//获取当前日
export function getCurrentDay() {
  let yy = new Date().getFullYear();
  let mm = new Date().getMonth() + 1;
  let dd = new Date().getDate();
  let currentDay = yy + '-' + mm + '-' + dd;
  return currentDay;
}

//获取上个月的年份和月份
export function getPreYearAndMonth() {
  let yy = new Date().getFullYear();
  let mm = new Date().getMonth();
  if (mm == 0) {
    yy = yy - 1;
    mm = 12;
  }
  if (mm < 10) {
    mm = "0" + mm
  }
  return [yy, mm];
}

/**
 * 去除字符串所有空格
 * @param {*} str 
 * @returns 
 */
export const removeTrim = (str) => {
  return str.replace(/\s*/g, '');
}

/**
 * 求百分比
 * @param {*} sumArr 
 * @param {*} v 
 * @param {*} e 
 * @returns 
 */
export const getPercentage = (sumArr, v, e = 2) => {
  let sum = Array.isArray(sumArr) ? eval(sumArr.join('+')) : sumArr;
  return sum == 0 ? 0 : ((v / sum) * 100).toFixed(e)
}

/**
 * echarts 字体自适应
 * @param {*} res 
 * @returns 
 */
export const eFontSize = (res) => {
  let clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = 100 * (clientWidth / 1920);
  return (res / 100) * fontSize;
}
