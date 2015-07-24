'use strict';

var Dimensions = require('Dimensions');

class Device {
  constructor() {
    this.width = this._width();
    this.height = this._height();
    this.kind = this._kind();
    this.sizeIt = this._sizeIt;
    this.is4 = this._is4();
    this.is5 = this._is5();
    this.is6 = this._is6();
  }

  isIpad() {
    return this.kind.indexOf("iPad") === 0;
  }

  isIphone() {
    return this.kind.indexOf("iPhone") === 0;
  }

  _kind() {
    var iPad = [768, 1024];
    var iPhone4 = [320, 480];
    var iPhone5 = [320, 568];
    var iPhone6 = [375, 667];
    var iPhone6plus = [414, 736];

    if (iPad.indexOf(this.width) > -1 && iPad.indexOf(this.height) > -1) {
      return "iPad";
    }

    if (iPhone4.indexOf(this.width) > -1 && iPhone4.indexOf(this.height) > -1) {
      return "iPhone4";
    }

    if (iPhone5.indexOf(this.width) > -1 && iPhone5.indexOf(this.height) > -1) {
      return "iPhone5";
    }

    if (iPhone6.indexOf(this.width) > -1 && iPhone6.indexOf(this.height) > -1) {
      return "iPhone6";
    }

    if (iPhone6plus.indexOf(this.width) > -1 && iPhone6plus.indexOf(this.height) > -1) {
      return "iPhone6plus";
    }
  }

  _width() {
    return Dimensions.get("window").width;
  }

  _height() {
    return Dimensions.get("window").height;
  }

  _sizeIt( /* iPhone4, 5, 6, 6+ */ ) {
    var args = arguments;

    switch (args.length) {
      case 0:
        throw new Error('At least 1 argument is required');
      break;
      case 1:
        return args[0];
      break;
      case 2:
        return this.is4? args[0] : args[1];
      break;
      case 3:
        return this.is4? args[0] : this.is5? args[1] : args[2];
      break;
      case 4:
        return this.is4? args[0] : this.is5? args[1] : this.is6? args[2] : args[3];
      break;
      default:
        throw new Error('Something went wrong');
    }
  }

  _is4() {
    return this.kind === 'iPhone4';
  }

  _is5() {
    return this.kind === 'iPhone5';
  }

  _is6() {
    return this.kind === 'iPhone6';
  }
}

module.exports = new Device();

