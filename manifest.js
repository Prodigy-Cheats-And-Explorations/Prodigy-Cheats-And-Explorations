{
   "name": "Prodigy-Cheats-and-Explorations",
   "version": "1.0.0",
   "description": "Giving Prodigy players a better experience on the platform.",
   "permissions": [
     "WebRequest",
     "WebRequestBlocking",
     "*://*.prodigygame.com/*"
  ],
  "icons": {
   "16": "",
   "48": "",
   "128": ""
  },
  "background": {
    "scripts": ["background.js"],
    "persisitent: true
  },
  "content_scripts": [{
    "matches":["https://play.prodigygame.com/*"],
    "js":[""]
  }],
  "manifest_version": 1
}
