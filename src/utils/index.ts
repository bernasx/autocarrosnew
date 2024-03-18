export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getLineColor(line:string): string {
  const colorMap = {
    blue: [200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 300, 301, 302, 303, 304, 305, 400, 401, 402, 403, 404, 107],
    yellow: [500, 501, 502, 503, 504, 505, 506, 507, 508],
    green: [600, 601, 602, 603, 604],
    red: [700, 701, 702, 703, 704, 705, 706, 707],
    purple: [800, 801, 803, 804, 805, 806],
    orange: [900, 901, 902, 903, 904, 905, 906, 907, 106]
  };

  if(colorMap.blue.includes(parseInt(line))){
    return "sky-500"
  }
  if(colorMap.yellow.includes(parseInt(line))){
    return "amber-400"
  }
  if(colorMap.green.includes(parseInt(line))){
    return "green-600"
  }
  if(colorMap.red.includes(parseInt(line))){
    return "red-500"
  }
  if(colorMap.purple.includes(parseInt(line))){
    return "purple-500"
  }
  if(colorMap.orange.includes(parseInt(line))){
    return "orange-400"
  } else {
    return "neutral-400"
  }

}