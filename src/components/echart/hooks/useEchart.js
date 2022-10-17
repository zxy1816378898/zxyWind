import * as echarts from 'echarts';

export default function (el) {
  const echartsInstance = echarts.init(el);
  echartsInstance.clear();
  const setOptions = (options) => {
    echartsInstance.setOption(options, true);
  };

  const updateSize = () => {
    nextTick(() => {
      echartsInstance.resize();
    });
  };

  window.addEventListener('resize', () => {
    echartsInstance.resize();
  });

  return {
    echartsInstance,
    setOptions,
    updateSize,
  };
}
