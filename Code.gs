var SHEET_NAME = {
  PLAYERS: 'Players',
  DATA: 'Records'
};

function doGet(e) {
   var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME.PLAYERS);
  var data = sheet.getDataRange().getValues();
  var players = data.map((row) => row[0]);
  return ContentService.createTextOutput(JSON.stringify(players)).setMimeType(ContentService.MimeType.JSON);
}


function doPost(e) {  
  let action = 'data';
  if (e.parameter && e.parameter.action) action = e.parameter.action;
  var sheetName = action === 'data' ? SHEET_NAME.DATA : SHEET_NAME.PLAYERS;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow(data);
  return ContentService.createTextOutput(JSON.stringify({success: true})).setMimeType(ContentService.MimeType.JSON);
}
