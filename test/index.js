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
 *      - Description: the main entrance for tests
 *      - Create Time: Oct 9th, 2016
 *      - Update Time: Oct 9th, 2016
 *
 *
 **********************************************************************/

const resources = require('./../lib');

/**
 * [should: test framework module]
 * @type {Object}
 */
const should = require('chai').should();

describe('tests', function () {
    it('test case 1', function () {
        resources.test({}, '<a href="https://www.gitbook.com/read/book/aleen42/javascript" target="_blank"><img src="./../xx/xxx/cover_read.png"></a>').should.to.equal('<a href="https://www.gitbook.com/read/book/aleen42/javascript" target="_blank"><img src="./../xx/xxx/cover_read.png"></a>');
    });

    it('test case 2', function () {
        resources.test({
            type: 'github',
            repo: 'aleen42/test',
            branch: 'dev'
        }, '<a href="https://www.gitbook.com/read/book/aleen42/javascript" target="_blank"><img src="https://raw.githubusercontent.com/aleen42/test/dev/../xx/xxx/cover_read.png"></a>');
    });
});
