const { Model, DataTypes } = require('sequelize');
const { gzipSync, gunzipSync } = require('zlib');
const sequelize = require('../sequelize');

class Post extends Model {}

Post.init(
  {
    content: {
      type: DataTypes.STRING,
      get() {
        const storedValue = this.getDataValue('content');
        const gzippedBuffer = Buffer.from(storedValue, 'base64');
        const unzippedBuffer = gunzipSync(gzippedBuffer);
        return unzippedBuffer.toString();
      },
      set(value) {
        const gzipBuffer = gzipSync(value);
        this.setDataValue('content', gzipBuffer.toString('base64'));
      }
    }
  },
  {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  }
);

module.exports = Post;
