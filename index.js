'use strict';

var fs = require('fs');

var webpage = require('webpage');

var CONFIG = fs.read('./config.json');
CONFIG = JSON.parse(CONFIG);

scrapePages(CONFIG.LANGUAGES, CONFIG.VIEWPORTS);


function scrapePages(languages, viewports) {
  languages.forEach(function (lang) {
    var mdOutput = '# ' + lang + '\n\n| IMAGE | WIDTH |\n|-------|:-----:|\n';
    viewports.forEach(function (viewport) {
      var resolution = viewport.width + 'x' + viewport.height;
      var filename = 'images/fmd_' + lang + '_' + resolution + '.jpg';
      mdOutput += '| ![' + resolution + '](' + filename + ') | ' + viewport.width + ' |\n';
      scrapePage('https://find.dev.mozaws.net', lang, viewport, false, filename);
    });
    fs.write('output/' + lang + '.md', mdOutput);
  });
  slimer.exit();
}


function scrapePage(url, lang, viewport, onlyViewport, filename) {
  lang = lang || 'en';
  viewport.width = viewport.width || 640;
  viewport.height = viewport.height || 480;
  onlyViewport = onlyViewport || false;

  var page = webpage.create();
  page.customHeaders = {
    'Accept-Language': lang
  };
  page.open(url, {}, function (status) {
    if (status === 'success') {
      page.viewportSize = viewport;
      page.render('output/' + filename, {
        format: 'jpg',
        quality: 0.8,
        onlyViewport: onlyViewport
      });
    }
    page.close();
  });
}


// var page = require('webpage').create();

// page.customHeaders = {
//   'Accept-Language': 'hu'
// };
// page.open('https://find.dev.mozaws.net', {}, function (status) {
//   console.log(status);
//   page.viewportSize = { width:768, height:768 };
//   page.render('screenshot.jpg', {
//     format: 'jpg',
//     quality: 0.6,
//     onlyViewport: false
//   });
//   slimer.exit();
// });
