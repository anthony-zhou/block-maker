const DocIDs = {
  // Callout block reads from a public google doc. 
  callout: '1jRJQez2NUDFlHZXZQuEFzrByAOQm2iKOHvmc6_8l8og',
}

const getDocVariables = () => {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();

  // Traverse upwards to the top-level child of the document body. 
  let cursorElement = doc.getCursor().getElement();
  while (cursorElement.getParent().getType() !== DocumentApp.ElementType.BODY_SECTION) {
    cursorElement = cursorElement.getParent();
  }
  
  const cursorPos = doc.getBody().getChildIndex(cursorElement) + 1;
  return {doc, body, cursorPos};
}

/**
 * Insert a callout in the document body, at the current cursor
 */
const createCallout = ({icon}) => {
  const {doc, body, cursorPos} = getDocVariables();

  const calloutTable = DocumentApp.openById(DocIDs.callout).getBody().getTables()[0].copy();
  calloutTable.getCell(0, 0).setText(icon);
  calloutTable.getCell(0, 1).setText('');
  const p = calloutTable.getCell(0, 1).getChild(0);
  body.insertTable(cursorPos, calloutTable);
  doc.setCursor(doc.newPosition(p, 0));
}

const createHeading = (level) => {
  const {doc, body, cursorPos, cursor} = getDocVariables();
  const levelMap = {
    'h1': DocumentApp.ParagraphHeading.HEADING1,
    'h2': DocumentApp.ParagraphHeading.HEADING2,
    'h3': DocumentApp.ParagraphHeading.HEADING3,
  }

  const heading = doc.insertParagraph(cursorPos , '');
  heading.setHeading(levelMap[level]);
  doc.setCursor(doc.newPosition(heading, 0))
}

const Blocks = {
  createCallout,
  createHeading
};


