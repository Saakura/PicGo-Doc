(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{252:function(a,t,s){"use strict";s.r(t);var e=s(28),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"advanced-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-usage"}},[a._v("#")]),a._v(" Advanced Usage")]),a._v(" "),s("h2",{attrs:{id:"upload-using-command-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-using-command-line"}},[a._v("#")]),a._v(" Upload using Command Line "),s("Badge",{attrs:{text:"2.1.0+"}})],1),a._v(" "),s("p",[a._v("PicGo started supporting to use command line to call to PicGo clients for uploading since version 2.1.0.")]),a._v(" "),s("p",[a._v("You can use "),s("code",[a._v("upload")]),a._v(" to upload the image on your clipboard and use "),s("code",[a._v("upload xxx.jpg")]),a._v(" to upload the image in the specific path.")]),a._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),s("p",[a._v("For Windows users, you can upload your image using "),s("code",[a._v("PATH\\PicGo.exe upload")]),a._v(", where 'PATH' is your PicGo path.")]),a._v(" "),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" macOS")]),a._v(" "),s("p",[a._v("For MacOS users, you can upload your image using "),s("code",[a._v("/Applications/PicGo.app/Contents/MacOS/PicGo upload")]),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),s("p",[a._v("For Linux users, you can upload your image using "),s("code",[a._v("PATH/PicGo.AppImage upload")]),a._v(", where 'PATH' is your PicGo path.")]),a._v(" "),s("h2",{attrs:{id:"picgo-server-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#picgo-server-usage"}},[a._v("#")]),a._v(" PicGo-Server Usage "),s("Badge",{attrs:{text:"2.2.0+"}})],1),a._v(" "),s("p",[a._v("PicGo has a small built-in server that receives HTTP requests from other applications to upload images since "),s("code",[a._v("2.2.0")]),a._v(".")]),a._v(" "),s("p",[a._v("Default listening address: "),s("code",[a._v("127.0.0.1")]),a._v(". Default listening port: "),s("code",[a._v("36677")])]),a._v(" "),s("h3",{attrs:{id:"upload-the-image-on-clipboard-by-calling-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-the-image-on-clipboard-by-calling-http"}},[a._v("#")]),a._v(" Upload the image on clipboard by calling HTTP")]),a._v(" "),s("ul",[s("li",[a._v("method: "),s("code",[a._v("POST")])]),a._v(" "),s("li",[a._v("url: "),s("code",[a._v("http://127.0.0.1:36677/upload")]),a._v(" (use the default setting as an example)")])]),a._v(" "),s("p",[a._v("Then, you can upload your image.")]),a._v(" "),s("p",[a._v("Returned data:")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// or false")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Molunerfinn/test/PicGo/picgo-server-upload-clipboard-file.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"upload-the-specific-image-by-calling-http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upload-the-specific-image-by-calling-http"}},[a._v("#")]),a._v(" Upload the specific image by calling HTTP")]),a._v(" "),s("ul",[s("li",[a._v("method: "),s("code",[a._v("POST")])]),a._v(" "),s("li",[a._v("url: "),s("code",[a._v("http://127.0.0.1:36677/upload")]),a._v(" (use the default setting as an example)")]),a._v(" "),s("li",[a._v("request body: "),s("code",[a._v("{list: ['xxx.jpg']}")]),a._v(" must be JSON-formatted")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/12621342/71626614-1b359880-2c29-11ea-8efe-330f15116268.png",alt:""}})]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// or false")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);