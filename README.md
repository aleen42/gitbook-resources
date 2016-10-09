## resources

[![Pay](https://img.shields.io/badge/%24-free-%23a10000.svg)](#) [![GitHub issues](https://img.shields.io/github/issues/aleen42/gitbook-resources.svg)](https://github.com/aleen42/gitbook-resources/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/gitbook-resources/master/LICENSE) [![Gitter](https://badges.gitter.im/aleen42/gitbook-resources.svg)](https://gitter.im/aleen42/gitbook-resources?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![npm](https://img.shields.io/npm/v/gitbook-plugin-resources.svg)](https://www.npmjs.com/package/gitbook-plugin-resources) [![Build Status](https://travis-ci.org/aleen42/gitbook-resources.svg?branch=master)](https://travis-ci.org/aleen42/gitbook-resources) [![devDependency Status](https://david-dm.org/aleen42/gitbook-resources/dev-status.svg)](https://david-dm.org/aleen42/gitbook-resources#info=devDependencies) [![npm](https://img.shields.io/npm/dt/gitbook-plugin-resources.svg)](https://www.npmjs.com/package/gitbook-plugin-resources)

a gitbook plugin optional resources loading of gitbook

#### Installation

add the following plugins to your `book.json` and run `gitbook install`

```json
{
    "plugins": ["resources"]
}
```

#### Usage

just find plugin on gitbook and install it on your gitbook project.

configuration option can be set as an obj like, and of course you can use a default value shown as followed:

```json
{
	"plugins": [
		"resources"
	],
	"pluginsConfig": {
		"resources": {
			"type": "local",
			"repo": "aleen42/PersonalWiki",
            "branch": "master"
		}
	}
}
```

#### Release History

* ==================== **1.0.0 Initial release** ====================
	* 1.0.6 fix bugs
	* 1.0.7 update readme
	* 1.0.8 update
	* 1.0.9 test cases
	* 1.1.2 fix bugs

#### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

#### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42
