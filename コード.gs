function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function insertImageRandom(ms) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var images = [
    'https://raw.githubusercontent.com/kerdy0725/AXIS-Shock/refs/heads/main/gm3.png',
    'https://raw.githubusercontent.com/kerdy0725/AXIS-Shock/refs/heads/main/%E3%82%B8%E3%82%A7%E3%82%AC%E3%83%B3.png',
    'https://raw.githubusercontent.com/kerdy0725/AXIS-Shock/refs/heads/main/gira.png'
  ];

  var imageUrl = images[ms];
  var numRows = 30;
  var numCols = 18;

  // ランダムな位置を生成
  var randomRow = Math.floor(Math.random() * numRows) + 1;
  var randomCol = Math.floor(Math.random() * numCols) + 1;

  // ランダムな位置に画像を挿入
  sheet.insertImage(imageUrl, randomCol, randomRow);

  var cell = sheet.getRange(5, 24);  // セルを取得
  var value = cell.getValue();      // セルの値を取得  

  // 推進力の追加
  value=value+500;
  cell.setValue(value);   
}
