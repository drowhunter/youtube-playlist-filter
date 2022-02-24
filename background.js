// TODO: add "script.js" to web_accessible_resources in manifest.json
let backgroundScr = [
    'script.js'
];

backgroundScr.forEach(scr => addScript(scr));


// for (let i = 0; i < backgroundScr.length; i++) {
//     addScript(backgroundScr[i]);
// }

// for (const scr of backgroundScr) {
//     addScript(scr);
// }

// chrome.runtime.getURL('assets/downloading.png')
// document.body.setAttribute('data-leechIco', 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIgdmVyc2lvbj0iMS4xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMTAyOC40KSI+CiAgPHBhdGggZD0ibTUgMTAzMS40Yy0xLjEwNDYgMC0yIDAuOS0yIDJ2MTRjMCAxLjEgMC44OTU0IDIgMiAyaDEzIDFjMS4xMDUgMCAyLTAuOSAyLTJ2LTEzbC0zLTNoLTEzeiIgZmlsbD0iIzM0OThkYiIvPgogIDxwYXRoIGQ9Im03IDEwMzEuNHYxIDVjMCAwLjUgMC40NDc3IDEgMSAxaDhjMC41NTIgMCAxLTAuNSAxLTF2LTUtMWgtMTB6IiBmaWxsPSIjMjk4MGI5Ii8+CiAgPHBhdGggZD0ibTcgM3Y1YzAgMC41NTIzIDAuNDQ3NyAxIDEgMWg4YzAuNTUyIDAgMS0wLjQ0NzcgMS0xdi01aC0xMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAyOC40KSIgZmlsbD0iI2VjZjBmMSIvPgogIDxwYXRoIGQ9Im02IDEwNDAuNGMtMC41NTIzIDAtMSAwLjQtMSAxdjMgMiAzaDQgNiA0di0zLTItM2MwLTAuNi0wLjQ0OC0xLTEtMWgtNC00LTR6IiBmaWxsPSIjZWNmMGYxIi8+CiAgPGcgZmlsbD0iI2JkYzNjNyI+CiAgIDxyZWN0IGhlaWdodD0iMSIgd2lkdGg9IjE0IiB5PSIxMDQ4LjQiIHg9IjUiLz4KICAgPHJlY3QgaGVpZ2h0PSIxIiB3aWR0aD0iMTAiIHk9IjEwNDIuNCIgeD0iNyIvPgogICA8cmVjdCBoZWlnaHQ9IjEiIHdpZHRoPSIxMCIgeT0iMTA0NC40IiB4PSI3Ii8+CiAgPC9nPgogIDxyZWN0IGhlaWdodD0iNCIgd2lkdGg9IjMiIHk9IjEwMzIuNCIgeD0iMTMiIGZpbGw9IiMzNDk4ZGIiLz4KICA8cmVjdCBoZWlnaHQ9Ii45OTk5OCIgd2lkdGg9IjMiIHk9IjEwMzIuNCIgeD0iMTMiIGZpbGw9IiMyOTgwYjkiLz4KIDwvZz4KPC9zdmc+Cg==');


function addScript(filename){
    let r = document.createElement('script');
    
    r.src = chrome.runtime.getURL('scripts/'+filename);
    r.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(r);
}