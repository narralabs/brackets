# Brackets

## Introduction

Brackets is a template for creating chrome extensions. It uses webpack to
support frontend frameworks and other libraries. It also uses Tailwind CSS 3
(through webpack/postcss) for its CSS framework and works out of the box.

## Requirements

- Node.js (Check .node-version for version)

## Getting Started

All the work will be done in the `src` folder. The `src` folder will then be
compiled to the `extensions` folder.

1. Install packages: `npm install`
2. Run the build: `npm run-script dev`. This will watch the `src` folder for changes and compile into `extensions`
3. In chrome://extensions, click "Load unpacked" and select the `extensions` folder

## Releasing Your Extension

1. Make sure to uncomment `purge: true` in `tailwind.config.js`
2. Zip the extensions folder
3. Upload chrome extension store
