function copyToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementsByClassName("response")[0]);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function enterDream(){
var encoded = document.getElementsByClassName("response")[0]);
console.log(encoded);
window.open("https://enterdream.xyz/index.html?id=" + Math.floor((Math.random() * 9909 ) + 1) + "&dream=" + btoa();
}

const RGBToHSL = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s ?
    l === r ?
    (g - b) / s :
    l === g ?
    2 + (b - r) / s :
    4 + (r - g) / s :
    0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ];
};
var myImg = new Image();

function generate() {
  const pixelSet = [];
  const encodedSet = [];

  const context = document.createElement('canvas').getContext('2d');
  context.drawImage(myImg, 0, 0);
  for (let y = 0; y < 32; y++) {
    for (let i = 0; i < 32; i++) {
      const {
        data
      } = context.getImageData(i, y, 1, 1);
      var red = data[0]
      var green = data[1]
      var blue = data[2]
      var hexOutput = RGBToHSL(red, green, blue)
      if (pixelSet.includes(hexOutput[2]) == false) {
        pixelSet.push(hexOutput[2]);
      } else {}
      if (hexOutput[2] >= 80) {
        encodedSet.push(document.getElementsByClassName('form-control')[8].value);
      } else if (hexOutput[2] < 80 && hexOutput[2] >= 70) {
        encodedSet.push(document.getElementsByClassName('form-control')[7].value);
      } else if (hexOutput[2] < 70 && hexOutput[2] >= 60) {
        encodedSet.push(document.getElementsByClassName('form-control')[6].value);
      } else if (hexOutput[2] < 60 && hexOutput[2] >= 50) {
        encodedSet.push(document.getElementsByClassName('form-control')[5].value);
      } else if (hexOutput[2] < 50 && hexOutput[2] >= 40) {
        encodedSet.push(document.getElementsByClassName('form-control')[4].value);
      } else if (hexOutput[2] < 40 && hexOutput[2] >= 30) {
        encodedSet.push(document.getElementsByClassName('form-control')[3].value);
      } else if (hexOutput[2] < 30 && hexOutput[2] >= 20) {
        encodedSet.push(document.getElementsByClassName('form-control')[2].value);
      } else if (hexOutput[2] < 20 && hexOutput[2] >= 10) {
        encodedSet.push(document.getElementsByClassName('form-control')[1].value);
      } else if (hexOutput[2] < 10 && hexOutput[2] >= 0) {
        encodedSet.push(document.getElementsByClassName('form-control')[0].value);
      }
    }
  }

  var _outputSet = encodedSet.toString();
  var outputSet = _outputSet.replace(/,/g, '')
  var u = 0;
  document.getElementsByClassName('response')[0].innerHTML = '';
  for (u; u < outputSet.length; u++) {
       document.getElementsByClassName('response')[0].innerHTML += "<span class='s" + outputSet[u] + "'>" + outputSet[u] + "</span>";
  }

}

let imgInput = document.getElementById('images');
imgInput.addEventListener('change',
  function uploadImage(e) {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        var img = document.createElement("img");
        img.onload = function(event) {
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, 32, 32);
          var dataurl = canvas.toDataURL(imageFile.type);
          console.log(dataurl);
        }
        myImg.src = e.target.result;
      }
      reader.readAsDataURL(imageFile);
    }
  });


