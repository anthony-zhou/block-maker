/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 */
function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Start', 'showSidebar')
      .addToUi();
}

/**
 * Runs when the add-on is installed.
 */
function onInstall(e) {
  onOpen(e);
}

function showSidebar() {
  const ui = HtmlService.createHtmlOutputFromFile('sidebar')
      .setTitle('Insert Blocks');
  DocumentApp.getUi().showSidebar(ui);
}

function insertBlock(blockId) {
  if (blockId === "callout") {
    Blocks.createCallout({icon: '💡'});
  } else if (['h1', 'h2', 'h3'].includes(blockId)) {
    Blocks.createHeading(blockId);
  }
}
