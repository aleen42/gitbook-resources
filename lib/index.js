/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_|
 *
 *      ================================================================
 *                 More than a coder, More than a designer
 *      ================================================================
 *
 *
 *      - Document: index.js
 *      - Author: aleen42
 *      - Description: the main entrance for resources
 *      - Create Time: Oct 9th, 2016
 *      - Update Time: Oct 9th, 2016
 *
 *
 **********************************************************************/

/**
 * [main module]
 * @type {Object}
 */
const resources = module.exports = {
	/** Map of new style */
	book: {},

    /** Map of hooks */
    hooks: {
    	'page:before': function (page) {
            if (this.output.name !== 'website') {
                return page;
            }

    		/**
    		 * [defaultOption: default option]
    		 * @type {Object}
    		 */
    		const defaultOption = {
                'type': 'local',
                'repo': 'aleen42/PersonalWiki',
                'branch': 'master'
            };

    		/** if users have its option, and then combine it with default options */
			if (this.config.get('pluginsConfig')['resources']) {
			// @deprecated
			// if (this.options.pluginsConfig['page-treeview']) {
				for (var item in defaultOption) {
    				/** special for copyright */
					// @deprecated
					// defaultOption[item] = this.options.pluginsConfig['page-treeview'][item] || defaultOption[item];
					defaultOption[item] = this.config.get('pluginsConfig')['resources'][item] || defaultOption[item];
    			}
    		}

            var prefix = './';
            var path = page.path;
            path = path.match(/[^\\\/]*[\\\/]+/g) ? path.match(/[^\\\/]*[\\\/]+/g).join('') : '';

            switch (defaultOption['type']) {
            case 'local':
                prefix = './';
                break;
            case 'github':
                prefix = 'https://raw.githubusercontent.com/' + defaultOption['repo'] + '/' + defaultOption['branch'] + '/' + path;
                break;
            default:
                break;
            }

            page.content = page.content.replace(/([^.])\.\/([\S]+)\.png/g, '$1' + prefix + '$2.png');
            page.content = page.content.replace(/([^.])\.\/([\S]+)\.gif/g, '$1' + prefix + '$2.gif');
            page.content = page.content.replace(/([^.])\.\/([\S]+)\.jpg/g, '$1' + prefix + '$2.jpg');
            page.content = page.content.replace(/([^.])\.\/([\S]+)\.jpeg/g, '$1' + prefix + '$2.jpeg');
            
            // console.log('');
            // console.log('');
            // console.log('');
            // console.log('');
            // console.log('================ resources ============');
            // console.log();
            // console.log('=======================================');
            // console.log('');
            // console.log('');
            // console.log('');

    		return page;
    	}
    },

    /** Map of new blocks */
    blocks: {},

    /** Map of new filters */
    filters: {},

    /**
     * [test: tests function]
     * @param  {[type]} configs  [simulated configs]
     * @param  {[type]} contents [simulated contents]
     * @return {[type]}          [description]
     */
    test: function (configs, contents) {
        configs = configs || null;
        contents = contents || '';

    	/**
         * [defaultOption: default option]
         * @type {Object}
         */
        const defaultOption = {
            'type': 'local',
            'repo': 'aleen42/PersonalWiki',
            'branch': 'master'
        };

        /** if users have its option, and then combine it with default options */
        if (configs) {
        // @deprecated
        // if (this.options.pluginsConfig['page-treeview']) {
            for (var item in defaultOption) {
                /** special for copyright */
                // @deprecated
                // defaultOption[item] = this.options.pluginsConfig['page-treeview'][item] || defaultOption[item];
                defaultOption[item] = configs[item] || defaultOption[item];
            }
        }

        var prefix = './';

        switch (defaultOption['type']) {
        case 'local':
            prefix = './';
            break;
        case 'github':
            prefix = 'https://raw.githubusercontent.com/' + defaultOption['repo'] + '/' + defaultOption['branch'] + '/';
            break;
        default:
            break;
        }

        contents = contents.replace(/\.\/([\s\S]+)\.png/g, prefix + '$1.png');
        contents = contents.replace(/\.\/([\s\S]+)\.gif/g, prefix + '$1.gif');
        contents = contents.replace(/\.\/([\s\S]+)\.jpg/g, prefix + '$1.jpg');
        contents = contents.replace(/\.\/([\s\S]+)\.jpeg/g, prefix + '$1.jpeg');

        return contents;
    }
};
