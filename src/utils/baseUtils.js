//length必须为正整数

//从40开始的插入片段投入量
function getInsertPay(length) {
  return length > 5 ? 200 : length * 40;
}

//从20开始的多个插入片段投入量
function getMuitlInsertPay(length) {
  return length > 10 ? 200 : length * 20
}
//插入片段投入量计算直接调用现成函数即可

//从50开始的载体投入量 上限为 200 （突变载体上限为400）
function getLoadPay(load, max = 200) {
  let step = 20;
  return load <= 2 ? 50 : (load > max / step ? max : 20 * load);
}
export  {getLoadPay,getInsertPay,getMuitlInsertPay};