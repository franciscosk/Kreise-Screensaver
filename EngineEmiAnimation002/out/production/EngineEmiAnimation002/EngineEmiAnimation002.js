if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'EngineEmiAnimation002'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'EngineEmiAnimation002'.");
}
var EngineEmiAnimation002 = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var throwCCE = Kotlin.throwCCE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Math_0 = Math;
  var math = Kotlin.kotlin.math;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  Kreis.prototype = Object.create(CanvasElement.prototype);
  Kreis.prototype.constructor = Kreis;
  AnimierterKreis.prototype = Object.create(Kreis.prototype);
  AnimierterKreis.prototype.constructor = AnimierterKreis;
  Bild.prototype = Object.create(CanvasElement.prototype);
  Bild.prototype.constructor = Bild;
  FontType.prototype = Object.create(Enum.prototype);
  FontType.prototype.constructor = FontType;
  Gerade.prototype = Object.create(CanvasElement.prototype);
  Gerade.prototype.constructor = Gerade;
  Rechteck.prototype = Object.create(CanvasElement.prototype);
  Rechteck.prototype.constructor = Rechteck;
  Text.prototype = Object.create(CanvasElement.prototype);
  Text.prototype.constructor = Text;
  function AnimierterKreis(radius, posX, posY, fillStyle) {
    Kreis.call(this, radius, posX, posY, fillStyle, void 0, void 0, void 0, void 0, void 0, Engine_getInstance().context);
    this.deltaY = this.radius / 20;
  }
  AnimierterKreis.prototype.animate = function () {
    Kreis.prototype.animate.call(this);
    this.posY = this.posY + this.deltaY;
    var bottom = Engine_getInstance().canvas.height;
    if (this.posY + this.height > bottom)
      this.posY = 0.0;
  };
  AnimierterKreis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimierterKreis',
    interfaces: [Kreis]
  };
  function Animations() {
    Animations_instance = this;
  }
  Animations.prototype.run = function () {
    var $receiver = Engine_getInstance().canvasElements;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      item.animate();
      tmp$_0.call(destination, Unit);
    }
  };
  Animations.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Animations',
    interfaces: []
  };
  var Animations_instance = null;
  function Animations_getInstance() {
    if (Animations_instance === null) {
      new Animations();
    }
    return Animations_instance;
  }
  function Canvas() {
  }
  Canvas.prototype.init = function () {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    ensureNotNull(document.body).appendChild(canvas);
    return canvas;
  };
  Canvas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Canvas',
    interfaces: []
  };
  function Bild(src, posX, posY, context) {
    if (src === void 0)
      src = '';
    if (posX === void 0)
      posX = 0.0;
    if (posY === void 0)
      posY = 0.0;
    if (context === void 0)
      context = null;
    CanvasElement.call(this, posX, posY, void 0, void 0, void 0, void 0, void 0, void 0, context);
    this.src = src;
  }
  Object.defineProperty(Bild.prototype, 'height', {
    get: function () {
      return 100.0;
    }
  });
  Object.defineProperty(Bild.prototype, 'width', {
    get: function () {
      return 100.0;
    }
  });
  Bild.prototype.callConcreteDrawMethod = function () {
    var tmp$;
    var image = new Image();
    image.src = this.src;
    (tmp$ = this.context) != null ? (tmp$.drawImage(image, this.posX, this.posY), Unit) : null;
  };
  Bild.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bild',
    interfaces: [CanvasElement]
  };
  function CanvasElement(posX, posY, fillStyle, strokeStyle, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, context) {
    if (posX === void 0)
      posX = 0.0;
    if (posY === void 0)
      posY = 0.0;
    if (fillStyle === void 0)
      fillStyle = '';
    if (strokeStyle === void 0)
      strokeStyle = '';
    if (shadowColor === void 0)
      shadowColor = '';
    if (shadowBlur === void 0)
      shadowBlur = '';
    if (shadowOffsetX === void 0)
      shadowOffsetX = 0.0;
    if (shadowOffsetY === void 0)
      shadowOffsetY = 0.0;
    if (context === void 0)
      context = null;
    this.posX = posX;
    this.posY = posY;
    this.fillStyle = fillStyle;
    this.strokeStyle = strokeStyle;
    this.shadowColor = shadowColor;
    this.shadowBlur = shadowBlur;
    this.shadowOffsetX = shadowOffsetX;
    this.shadowOffsetY = shadowOffsetY;
    this.context = context;
  }
  CanvasElement.prototype.drawOnCanvasContext = function () {
    var tmp$;
    (tmp$ = this.context) != null ? (tmp$.beginPath(), Unit) : null;
  };
  CanvasElement.prototype.prepareContext = function () {
    var tmp$;
    (tmp$ = this.context) != null ? (tmp$.beginPath(), Unit) : null;
  };
  CanvasElement.prototype.finishDrawingOn = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    (tmp$ = this.context) != null ? (tmp$.fillStyle = this.fillStyle) : null;
    (tmp$_0 = this.context) != null ? (tmp$_0.strokeStyle = this.strokeStyle) : null;
    (tmp$_1 = this.context) != null ? (tmp$_1.shadowColor = this.shadowColor) : null;
    (tmp$_2 = this.context) != null ? (tmp$_2.save(), Unit) : null;
    (tmp$_3 = this.context) != null ? (tmp$_3.stroke(), Unit) : null;
    (tmp$_4 = this.context) != null ? (tmp$_4.fill(), Unit) : null;
  };
  CanvasElement.prototype.drawOnContext = function () {
    this.prepareContext();
    this.callConcreteDrawMethod();
    this.finishDrawingOn();
  };
  CanvasElement.prototype.animate = function () {
  };
  CanvasElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasElement',
    interfaces: []
  };
  function CanvasElement_init(posX, posY, $this) {
    $this = $this || Object.create(CanvasElement.prototype);
    CanvasElement.call($this);
    $this.posX = posX;
    $this.posY = posY;
    return $this;
  }
  function FontType(name, ordinal, type) {
    Enum.call(this);
    this.type = type;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FontType_initFields() {
    FontType_initFields = function () {
    };
    FontType$caption_instance = new FontType('caption', 0, 'caption');
    FontType$icon_instance = new FontType('icon', 1, 'icon');
    FontType$menu_instance = new FontType('menu', 2, 'menu');
    FontType$messageBox_instance = new FontType('messageBox', 3, 'message-box');
    FontType$smallCaption_instance = new FontType('smallCaption', 4, 'small-caption');
    FontType$statusBar_instance = new FontType('statusBar', 5, 'status-bar');
    FontType$noFontType_instance = new FontType('noFontType', 6, '');
  }
  var FontType$caption_instance;
  function FontType$caption_getInstance() {
    FontType_initFields();
    return FontType$caption_instance;
  }
  var FontType$icon_instance;
  function FontType$icon_getInstance() {
    FontType_initFields();
    return FontType$icon_instance;
  }
  var FontType$menu_instance;
  function FontType$menu_getInstance() {
    FontType_initFields();
    return FontType$menu_instance;
  }
  var FontType$messageBox_instance;
  function FontType$messageBox_getInstance() {
    FontType_initFields();
    return FontType$messageBox_instance;
  }
  var FontType$smallCaption_instance;
  function FontType$smallCaption_getInstance() {
    FontType_initFields();
    return FontType$smallCaption_instance;
  }
  var FontType$statusBar_instance;
  function FontType$statusBar_getInstance() {
    FontType_initFields();
    return FontType$statusBar_instance;
  }
  var FontType$noFontType_instance;
  function FontType$noFontType_getInstance() {
    FontType_initFields();
    return FontType$noFontType_instance;
  }
  FontType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FontType',
    interfaces: [Enum]
  };
  function FontType$values() {
    return [FontType$caption_getInstance(), FontType$icon_getInstance(), FontType$menu_getInstance(), FontType$messageBox_getInstance(), FontType$smallCaption_getInstance(), FontType$statusBar_getInstance(), FontType$noFontType_getInstance()];
  }
  FontType.values = FontType$values;
  function FontType$valueOf(name) {
    switch (name) {
      case 'caption':
        return FontType$caption_getInstance();
      case 'icon':
        return FontType$icon_getInstance();
      case 'menu':
        return FontType$menu_getInstance();
      case 'messageBox':
        return FontType$messageBox_getInstance();
      case 'smallCaption':
        return FontType$smallCaption_getInstance();
      case 'statusBar':
        return FontType$statusBar_getInstance();
      case 'noFontType':
        return FontType$noFontType_getInstance();
      default:throwISE('No enum constant engineEmi.CanvasElements.FontType.' + name);
    }
  }
  FontType.valueOf_61zpoe$ = FontType$valueOf;
  function Gerade(toX, toY, posX, posY, fillStyle, strokeStyle, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, context) {
    if (toX === void 0)
      toX = 0.0;
    if (toY === void 0)
      toY = 0.0;
    if (posX === void 0)
      posX = 0.0;
    if (posY === void 0)
      posY = 0.0;
    if (fillStyle === void 0)
      fillStyle = '';
    if (strokeStyle === void 0)
      strokeStyle = '';
    if (shadowColor === void 0)
      shadowColor = '';
    if (shadowBlur === void 0)
      shadowBlur = '';
    if (shadowOffsetX === void 0)
      shadowOffsetX = 0.0;
    if (shadowOffsetY === void 0)
      shadowOffsetY = 0.0;
    if (context === void 0)
      context = null;
    CanvasElement.call(this, posX, posY, fillStyle, strokeStyle, shadowColor, void 0, shadowOffsetX, shadowOffsetY, context);
    this.toX = toX;
    this.toY = toY;
  }
  Object.defineProperty(Gerade.prototype, 'height', {
    get: function () {
      var x = this.posY - this.toY;
      return Math_0.abs(x);
    }
  });
  Object.defineProperty(Gerade.prototype, 'width', {
    get: function () {
      var x = this.posX - this.toX;
      return Math_0.abs(x);
    }
  });
  Gerade.prototype.callConcreteDrawMethod = function () {
    var tmp$, tmp$_0;
    (tmp$ = this.context) != null ? (tmp$.moveTo(this.posX, this.posY), Unit) : null;
    (tmp$_0 = this.context) != null ? (tmp$_0.lineTo(this.toX, this.toY), Unit) : null;
  };
  Gerade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gerade',
    interfaces: [CanvasElement]
  };
  function Kreis(radius, posX, posY, fillStyle, strokeStyle, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, context) {
    if (radius === void 0)
      radius = 0.0;
    if (posX === void 0)
      posX = 0.0;
    if (posY === void 0)
      posY = 0.0;
    if (fillStyle === void 0)
      fillStyle = '';
    if (strokeStyle === void 0)
      strokeStyle = '';
    if (shadowColor === void 0)
      shadowColor = '';
    if (shadowBlur === void 0)
      shadowBlur = '';
    if (shadowOffsetX === void 0)
      shadowOffsetX = 0.0;
    if (shadowOffsetY === void 0)
      shadowOffsetY = 0.0;
    if (context === void 0)
      context = null;
    CanvasElement.call(this, posX, posY, fillStyle, strokeStyle, shadowColor, void 0, shadowOffsetX, shadowOffsetY, context);
    this.radius = radius;
  }
  Object.defineProperty(Kreis.prototype, 'height', {
    get: function () {
      return this.radius;
    }
  });
  Object.defineProperty(Kreis.prototype, 'width', {
    get: function () {
      return this.radius;
    }
  });
  Kreis.prototype.callConcreteDrawMethod = function () {
    var tmp$;
    (tmp$ = this.context) != null ? (tmp$.arc(this.posX, this.posY, this.radius, 0.0, 2 * math.PI), Unit) : null;
  };
  Kreis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kreis',
    interfaces: [CanvasElement]
  };
  function Rechteck(height, width, posX, posY, fillStyle, strokeStyle, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, context) {
    if (height === void 0)
      height = 0.0;
    if (width === void 0)
      width = 0.0;
    if (posX === void 0)
      posX = 0.0;
    if (posY === void 0)
      posY = 0.0;
    if (fillStyle === void 0)
      fillStyle = '';
    if (strokeStyle === void 0)
      strokeStyle = '';
    if (shadowColor === void 0)
      shadowColor = '';
    if (shadowBlur === void 0)
      shadowBlur = '';
    if (shadowOffsetX === void 0)
      shadowOffsetX = 0.0;
    if (shadowOffsetY === void 0)
      shadowOffsetY = 0.0;
    if (context === void 0)
      context = null;
    CanvasElement.call(this, posX, posY, fillStyle, strokeStyle, shadowColor, void 0, shadowOffsetX, shadowOffsetY, context);
    this.height_k7x75n$_0 = height;
    this.width_ddrwiq$_0 = width;
  }
  Object.defineProperty(Rechteck.prototype, 'height', {
    get: function () {
      return this.height_k7x75n$_0;
    },
    set: function (height) {
      this.height_k7x75n$_0 = height;
    }
  });
  Object.defineProperty(Rechteck.prototype, 'width', {
    get: function () {
      return this.width_ddrwiq$_0;
    },
    set: function (width) {
      this.width_ddrwiq$_0 = width;
    }
  });
  Rechteck.prototype.callConcreteDrawMethod = function () {
    var tmp$;
    (tmp$ = this.context) != null ? (tmp$.rect(this.posX, this.posY, this.height, this.width), Unit) : null;
  };
  Rechteck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rechteck',
    interfaces: [CanvasElement]
  };
  function Text(text, fontStyle, fontVariant, fontWeight, fontSize, fontFamily, fontType, posX, posY, fillStyle, strokeStyle, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, context) {
    if (text === void 0)
      text = '';
    if (fontStyle === void 0)
      fontStyle = 'normal';
    if (fontVariant === void 0)
      fontVariant = 'normal';
    if (fontWeight === void 0)
      fontWeight = 'normal';
    if (fontSize === void 0)
      fontSize = 30;
    if (fontFamily === void 0)
      fontFamily = 'Arial';
    if (fontType === void 0)
      fontType = FontType$noFontType_getInstance();
    if (posX === void 0)
      posX = 0.0;
    if (posY === void 0)
      posY = 0.0;
    if (fillStyle === void 0)
      fillStyle = '';
    if (strokeStyle === void 0)
      strokeStyle = '';
    if (shadowColor === void 0)
      shadowColor = '';
    if (shadowBlur === void 0)
      shadowBlur = '';
    if (shadowOffsetX === void 0)
      shadowOffsetX = 0.0;
    if (shadowOffsetY === void 0)
      shadowOffsetY = 0.0;
    if (context === void 0)
      context = null;
    CanvasElement.call(this, posX, posY, fillStyle, strokeStyle, shadowColor, void 0, shadowOffsetX, shadowOffsetY, context);
    this.text = text;
    this.fontStyle = fontStyle;
    this.fontVariant = fontVariant;
    this.fontWeight = fontWeight;
    this.fontSize = fontSize;
    this.fontFamily = fontFamily;
    this.fontType = fontType;
  }
  Object.defineProperty(Text.prototype, 'height', {
    get: function () {
      return 100.0;
    }
  });
  Object.defineProperty(Text.prototype, 'width', {
    get: function () {
      return 100.0;
    }
  });
  Text.prototype.callConcreteDrawMethod = function () {
    var tmp$, tmp$_0;
    (tmp$ = this.context) != null ? (tmp$.font = this.fontStyle + ' ' + this.fontSize + 'px ' + this.fontFamily) : null;
    (tmp$_0 = this.context) != null ? (tmp$_0.fillText(this.text, this.posX, this.posY), Unit) : null;
  };
  Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [CanvasElement]
  };
  function Engine() {
    Engine_instance = this;
    this.canvas = (new Canvas()).init();
    var tmp$;
    this.context = Kotlin.isType(tmp$ = this.canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.canvasElements = ArrayList_init_0();
  }
  function Engine$main$lambda$lambda(this$Engine) {
    return function (it) {
      this$Engine.draw();
      return Unit;
    };
  }
  function Engine$main$lambda(this$Engine) {
    return function () {
      return window.requestAnimationFrame(Engine$main$lambda$lambda(this$Engine));
    };
  }
  Engine.prototype.main = function () {
    $('document').ready(Engine$main$lambda(this));
  };
  function Engine$draw$lambda(this$Engine) {
    return function (it) {
      this$Engine.draw();
      return Unit;
    };
  }
  Engine.prototype.draw = function () {
    this.clearContext();
    this.drawAllCanvasElements();
    Animations_getInstance().run();
    this.context.restore();
    window.requestAnimationFrame(Engine$draw$lambda(this));
  };
  Engine.prototype.registerCanvasElement_49j93p$ = function (canvasElement) {
    this.canvasElements.add_11rb$(canvasElement);
  };
  Engine.prototype.drawAllCanvasElements = function () {
    var $receiver = this.canvasElements;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      item.drawOnContext();
      tmp$_0.call(destination, Unit);
    }
  };
  Engine.prototype.clearContext = function () {
    this.context.clearRect(0.0, 0.0, this.width, this.height);
  };
  Engine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Engine',
    interfaces: []
  };
  var Engine_instance = null;
  function Engine_getInstance() {
    if (Engine_instance === null) {
      new Engine();
    }
    return Engine_instance;
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function main$lambda(it) {
    return it.radius;
  }
  function main() {
    var tmp$;
    var color = ['AliceBlue', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'];
    var kreis001 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis002 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis003 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis004 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis005 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis006 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis007 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis008 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis009 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis010 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis011 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis012 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis013 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis014 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis015 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis016 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis017 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis018 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis019 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis020 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis021 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis022 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis023 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis024 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis025 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis026 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis027 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis028 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis029 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis030 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis031 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis032 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis033 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis034 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis035 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis036 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis037 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis038 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis039 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis040 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis041 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis042 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis043 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis044 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis045 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis046 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis047 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis048 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis049 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis050 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis051 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis052 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis053 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis054 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis055 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis056 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis057 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis058 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis059 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis060 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis061 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis062 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis063 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var kreis064 = new AnimierterKreis(random(new IntRange(50, 300), Random.Default), random(new IntRange(300, Engine_getInstance().canvas.width - 300 | 0), Random.Default), 300.0, color[random(new IntRange(0, 147), Random.Default)]);
    var list = ArrayList_init_0();
    list.add_11rb$(kreis001);
    list.add_11rb$(kreis002);
    list.add_11rb$(kreis003);
    list.add_11rb$(kreis004);
    list.add_11rb$(kreis005);
    list.add_11rb$(kreis006);
    list.add_11rb$(kreis007);
    list.add_11rb$(kreis008);
    list.add_11rb$(kreis009);
    list.add_11rb$(kreis010);
    list.add_11rb$(kreis011);
    list.add_11rb$(kreis012);
    list.add_11rb$(kreis013);
    list.add_11rb$(kreis014);
    list.add_11rb$(kreis015);
    list.add_11rb$(kreis016);
    list.add_11rb$(kreis017);
    list.add_11rb$(kreis018);
    list.add_11rb$(kreis019);
    list.add_11rb$(kreis020);
    list.add_11rb$(kreis021);
    list.add_11rb$(kreis022);
    list.add_11rb$(kreis023);
    list.add_11rb$(kreis024);
    list.add_11rb$(kreis025);
    list.add_11rb$(kreis026);
    list.add_11rb$(kreis027);
    list.add_11rb$(kreis028);
    list.add_11rb$(kreis029);
    list.add_11rb$(kreis030);
    list.add_11rb$(kreis031);
    list.add_11rb$(kreis032);
    list.add_11rb$(kreis033);
    list.add_11rb$(kreis034);
    list.add_11rb$(kreis035);
    list.add_11rb$(kreis036);
    list.add_11rb$(kreis037);
    list.add_11rb$(kreis038);
    list.add_11rb$(kreis039);
    list.add_11rb$(kreis040);
    list.add_11rb$(kreis041);
    list.add_11rb$(kreis042);
    list.add_11rb$(kreis043);
    list.add_11rb$(kreis044);
    list.add_11rb$(kreis045);
    list.add_11rb$(kreis046);
    list.add_11rb$(kreis047);
    list.add_11rb$(kreis048);
    list.add_11rb$(kreis049);
    list.add_11rb$(kreis050);
    list.add_11rb$(kreis051);
    list.add_11rb$(kreis052);
    list.add_11rb$(kreis053);
    list.add_11rb$(kreis054);
    list.add_11rb$(kreis055);
    list.add_11rb$(kreis056);
    list.add_11rb$(kreis057);
    list.add_11rb$(kreis058);
    list.add_11rb$(kreis059);
    list.add_11rb$(kreis060);
    list.add_11rb$(kreis061);
    list.add_11rb$(kreis062);
    list.add_11rb$(kreis063);
    list.add_11rb$(kreis064);
    var sortedList = sortedWith(list, new Comparator$ObjectLiteral(compareBy$lambda(main$lambda)));
    tmp$ = sortedList.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      Engine_getInstance().registerCanvasElement_49j93p$(i);
    }
    Engine_getInstance().main();
  }
  _.AnimierterKreis = AnimierterKreis;
  var package$engineEmi = _.engineEmi || (_.engineEmi = {});
  Object.defineProperty(package$engineEmi, 'Animations', {
    get: Animations_getInstance
  });
  package$engineEmi.Canvas = Canvas;
  var package$CanvasElements = package$engineEmi.CanvasElements || (package$engineEmi.CanvasElements = {});
  package$CanvasElements.Bild = Bild;
  package$engineEmi.CanvasElement_init_lu1900$ = CanvasElement_init;
  package$engineEmi.CanvasElement = CanvasElement;
  Object.defineProperty(FontType, 'caption', {
    get: FontType$caption_getInstance
  });
  Object.defineProperty(FontType, 'icon', {
    get: FontType$icon_getInstance
  });
  Object.defineProperty(FontType, 'menu', {
    get: FontType$menu_getInstance
  });
  Object.defineProperty(FontType, 'messageBox', {
    get: FontType$messageBox_getInstance
  });
  Object.defineProperty(FontType, 'smallCaption', {
    get: FontType$smallCaption_getInstance
  });
  Object.defineProperty(FontType, 'statusBar', {
    get: FontType$statusBar_getInstance
  });
  Object.defineProperty(FontType, 'noFontType', {
    get: FontType$noFontType_getInstance
  });
  package$CanvasElements.FontType = FontType;
  package$CanvasElements.Gerade = Gerade;
  package$engineEmi.Kreis = Kreis;
  package$engineEmi.Rechteck = Rechteck;
  package$CanvasElements.Text = Text;
  Object.defineProperty(package$engineEmi, 'Engine', {
    get: Engine_getInstance
  });
  _.main = main;
  main();
  Kotlin.defineModule('EngineEmiAnimation002', _);
  return _;
}(typeof EngineEmiAnimation002 === 'undefined' ? {} : EngineEmiAnimation002, kotlin);
