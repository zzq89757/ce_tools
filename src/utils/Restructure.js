
import {getLoadPay,getInsertPay,getMuitlInsertPay} from "./baseUtils";

//快速克隆
function simpleClone(insert) {
    return getInsertPay(insert);
}

//单片段克隆
function singleClone(load, insert) {
    return { loadPay: getLoadPay(load), insertpay: getInsertPay(insert) };
}
console.log(singleClone(12, 12));

//多片段克隆
function multiFragment(load, ...inserts) {
    let ary = [];
    for (let arg of inserts) {
        ary.push(getMuitlInsertPay(arg));
    }
    return { loadpay: getLoadPay(load), insertpay: ary }
}

console.log(multiFragment(10, 10, 10));

//单点突变
function singlePoint(mutload) {
    return getLoadPay(mutload, 400);
}
console.log(singlePoint(12));
//双位点突变
function doublePoint(point1, point2) {
    return { point1: getMuitlInsertPay(point1), point2: getInsertPay(point2) };
}
console.log(doublePoint(1, 1));
//多点突变
//插入片段数目不确定 使用不定参数
function muitlPoint(...args) {
    let obj = {};
    for (let i = 0; i < args.length; i++) {
        let key = "insert" + (i + 1);
        obj[key] = getMuitlInsertPay(args[i])
    }
    return obj;
}
console.log(muitlPoint(1, 2, 3));
export {simpleClone,singleClone,singlePoint,muitlPoint,multiFragment,doublePoint}