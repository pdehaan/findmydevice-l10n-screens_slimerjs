# findmydevice-l10n-screens_slimerjs

Screenshots for [FindMyDevice](https://github.com/mozilla-services/FindMyDevice) (using SlimerJS)

## Installation

1. Clone this repo; `git clone git@github.com:pdehaan/findmydevice-l10n-screens_slimerjs.git`
2. Download and install [SlimerJS](http://slimerjs.org/download.html)

## How Do I Even?

1. Once you have this repo cloned and SlimerJS installed, run `npm start` to run `slimerjs index.js` which loops over each of the supported languages and viewports from the <config.json> file and generates screenshots in the [output/images/](output/) directory.
2. Browse the _/output/**{{lang}}.md**_ files for the specific locales that you want to verify.
