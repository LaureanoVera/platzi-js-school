interface Rectangle {
  width: number,
  height: number
}

let rect: Rectangle = {
  width: 200,
  height: 320
}

function area(r: Rectangle) {
  return r.width * r.height
}

const areaRect = area(rect)
console.log(areaRect);
