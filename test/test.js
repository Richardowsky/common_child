const {assert} = require('chai');
const {performance} = require('perf_hooks');
const {commonChild} = require('../src/index');

describe('Test', function () {
    let start, end, result

    it('HARRY, SALLY should return 2', function () {
        start = performance.now()
        result = commonChild("HARRY", "SALLY")
        end = performance.now()
        console.log(end - start)
        assert.equal(result, 2);
    });

    it('AA, BB should return 0', function () {
        start = performance.now()
        result = commonChild("AA", "BB")
        end = performance.now()
        console.log(end - start)
        assert.equal(result, 0);
    });

    it('SHINCHAN, NOHARAAA should return 3', function () {
        start = performance.now()
        result = commonChild("SHINCHAN", "NOHARAAA")
        end = performance.now()
        console.log(end - start)
        assert.equal(result, 3);
    });

    it('ABCDEF, FBDAMN should return 2', function () {
        start = performance.now()
        result = commonChild("ABCDEF", "FBDAMN")
        end = performance.now()
        console.log(end - start)
        assert.equal(result, 2);
    });
});


