// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/controller/base');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    base: ExportBase;
    user: ExportUser;
  }
}
