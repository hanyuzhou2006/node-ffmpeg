const assert = require('assert');
const path = require('path');
const ffmpeg = require('../');
describe('ffmpeg', function () {
  describe('resolution', function () {
    it('should return {w:3,h:3}', async function () {
      const image = await new ffmpeg(path.resolve(__dirname, '超小图片.gif'));
      assert.deepEqual(image.metadata.video.resolution, { w: 3, h: 3 });
    });
  });
});