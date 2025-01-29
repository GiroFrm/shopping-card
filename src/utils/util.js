

export default function approxTotal(price) {
    let factor = Math.pow(10, 2); // 2 decimal places
    let rounded = Math.round(price * factor) / factor;
       return rounded;
  }