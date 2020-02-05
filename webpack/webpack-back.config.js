const path = require('path');
const CURRENT_WORKING_DIR = process.cwd();
const PATHS = {
  app: path.resolve(CURRENT_WORKING_DIR, 'src'),
  dist: path.resolve(CURRENT_WORKING_DIR, ''),
};
module.exports = {
  entry: PATHS.app,
  output: {
    path: path.resolve(PATHS.dist, ''),
    filename: 'index.js',
    libraryExport: 'default',
    libraryTarget: 'commonjs2',
  },
  module: {
    
  },
  resolve: {
    extensions: ['.js']
  }
};