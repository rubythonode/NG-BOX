global.PACKER=function(){"use strict";var n=require("fs"),R=require("path"),E=__dirname,S=process.argv[2],e="",r="",t="",i=function(n){console.log("PACKER: "+n)},O=function(R){var S=R.path,e=R.name;return n.statSync(E+"/"+S).isDirectory()===!0&&"."!==e[0]&&"node_modules"!==e&&"not_load"!==e&&"deprecated"!==e&&"_"!==e[0]},c=function(R,E){n.statSync(R).isDirectory()===!0?(n.mkdirSync(E),n.readdirSync(R).forEach(function(n){"."!==n[0]&&c(R+"/"+n,E+"/"+n)})):n.createReadStream(R).pipe(n.createWriteStream(E))},o=function(R,E){n.writeFileSync(R,E)},a=function(R,S){var e,r;if(n.existsSync(R)===!0)for(e=[],n.readdirSync(R).forEach(function(r){var t=R+"/"+r;O({path:t,name:r})===!0?e.push(t):n.statSync(E+"/"+t).isDirectory()!==!0&&S(t)}),r=0;r<e.length;r+=1)a(e[r],S)},s=function(R){n.readdirSync(S).forEach(function(n){"."!==n[0]&&"BROWSER"!==n&&"COMMON"!==n&&"SERVER"!==n&&R(S+"/"+n)})},_=function(S){var r=E+"/"+S,t=R.extname(S),i=n.readFileSync(r);".js"===t&&(e+=i+"\n")},A=function(S){var e=E+"/"+S,t=R.extname(S),i=n.readFileSync(e);".js"===t&&(r+=i+"\n")},C=function(S){var e=E+"/"+S,r=R.extname(S),i=n.readFileSync(e);".js"===r&&(t+=i+"\n")},d=function(){var n=require(E+"/UPPERSITE/SERVER/node_modules/uglify-js");e=n.parse(e).print_to_string(),r=n.parse(r).print_to_string(),t=n.parse(t).print_to_string()};i("PACKING BOX ["+S+"]..."),i("CREATING FOLDER..."),n.mkdirSync("__PACK/"+S),i("CREATED FOLDER!"),i("LOADING BOX..."),i("LOADING FOR BROWSER..."),a(S+"/BROWSER",_),i("LOADED FOR BROWSER!"),i("LOADING FOR COMMON..."),a(S+"/COMMON",A),i("LOADED FOR COMMON!"),i("LOADING FOR SERVER..."),a(S+"/SERVER",C),i("LOADED FOR SERVER!"),i("LOADED BOX!"),i("MINIFYING..."),d(),i("MINIFYED!"),i("SAVING BOX..."),s(function(n){c(n,"__PACK/"+S+"/"+n.substring(S.length+1))}),""!==e&&(i("SAVING BROWSER SCRIPT..."),n.mkdirSync("__PACK/"+S+"/BROWSER"),o("__PACK/"+S+"/BROWSER/BROWSER.js",e),i("SAVED BROWSER SCRIPT!")),""!==r&&(i("SAVING COMMON SCRIPT..."),n.mkdirSync("__PACK/"+S+"/COMMON"),o("__PACK/"+S+"/COMMON/COMMON.js",r),i("SAVED COMMON SCRIPT!")),""!==t&&(i("SAVING SERVER SCRIPT..."),n.mkdirSync("__PACK/"+S+"/SERVER"),o("__PACK/"+S+"/SERVER/SERVER.js",t),i("SAVED SERVER SCRIPT!")),n.existsSync(S+"/SERVER/node_modules")===!0&&(i("SAVING NODE MODULES..."),n.existsSync("__PACK/"+S+"/SERVER")===!1&&n.mkdirSync("__PACK/"+S+"/SERVER"),c(S+"/SERVER/node_modules","__PACK/"+S+"/SERVER/node_modules"),i("SAVED NODE MODULES!")),i("SAVED BOX!"),i("PACKED BOX ["+S+"]!")},PACKER();