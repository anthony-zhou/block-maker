# Block Maker

An add-on that brings template-block functionality to Google Docs.

https://user-images.githubusercontent.com/37421108/171941233-3e0b46ba-aa7c-4de5-9b04-014551cc67a0.mp4

## How it Works

When initialized, Block Maker creates a sidebar menu containing options for each kind of block. Clicking an option will create an empty block (e.g., a heading or a callout) at the current cursor position, and move your cursor to the first editable text in the newly created block. 

## Trying it out

Since the add-on is not published to the Google Workspace Marketplace, it can only be added to individual documents using the built-in Google App Scripts editor. Navigate to `Extensions > Apps Script` and copy the source code (in this repository's `code` folder) into a new Apps Script project. Save the code (Ctrl+S) and reload the Google Doc to start using the extension. 

## Design Principles

The original goal (still a rough model to follow) was to implement blocks from the [Block Protocol](https://blockprotocol.org/hub). Unfortunately, Google Docs has yet to support arbitrary HTML embeds, much less React/Typescript components. As a result, I've kept the blocks simple. My current idea for a workaround would be to make a browser extension that manually inserts custom HTML within each document (e.g. for a file embed) -- this solution feels technically feasible but also heavyweight and brittle. I would love to know if there are other ways to implement video embeds, file embeds, buttons, and other interactive components.

## Future Work

This add-on is only a proof-of-concept. I don't plan to make any updates for the forseeable future. 
