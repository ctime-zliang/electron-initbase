(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/$instance-case/modules/clock.ts":
/*!*********************************************!*\
  !*** ./src/$instance-case/modules/clock.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drawClockInit = void 0;
var Main_1 = __webpack_require__(/*! ../../Main */ "./src/Main.ts");
var RUN_PROFILE = {
    baseLength: 0,
    outCircleRadius: 0,
    /* ... */
    radianHouOfEachMillsec: Main_1.Angles.degreeToRadian(360 / 12 / 60 / 60 / 1000),
    radianMinOfEachMillsec: Main_1.Angles.degreeToRadian(360 / 60 / 60 / 1000),
    radianSecOfEachMillsec: Main_1.Angles.degreeToRadian(360 / 60 / 1000),
    /* ... */
    nowTimeStamp: 0,
    lastTimeStamp: 0,
    distTimeStamp: 0,
};
var RIPPLE_PROFILE = {
    maxRadius: 0,
    radius: 0,
    duration: 2000,
    speed: 0,
};
function drawClock(webCanvas, layerItemId, timeStamp) {
    RUN_PROFILE.nowTimeStamp = timeStamp;
    RUN_PROFILE.distTimeStamp = RUN_PROFILE.nowTimeStamp - RUN_PROFILE.lastTimeStamp;
    RUN_PROFILE.lastTimeStamp = RUN_PROFILE.nowTimeStamp;
    var drawLayerController = webCanvas.drawLayerController;
    var elementControl = webCanvas.elementController;
    drawLayerController.deleteDrawLayerElements(layerItemId);
    var houPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.55, 1]);
    var minPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.75, 1]);
    var secPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength, 1]);
    var htPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.2 * 0.55, 1]);
    var mtPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.2 * 0.75, 1]);
    var stPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.2, 1]);
    var nowHours = new Date().getHours();
    var nowMinutes = new Date().getMinutes();
    var nowSeconds = new Date().getSeconds();
    var nowMilliseconds = new Date().getMilliseconds();
    var totalMillsecOfHou = (nowHours % 12) * 60 * 60 * 1000 + nowMinutes * 60 * 1000 + nowSeconds * 1000 + nowMilliseconds * 1;
    var totalMillsecOfMin = nowMinutes * 60 * 1000 + nowSeconds * 1000 + nowMilliseconds * 1;
    var totalMillsecOfSec = nowSeconds * 1000 + nowMilliseconds * 1;
    var rotationOfHou = totalMillsecOfHou * -RUN_PROFILE.radianHouOfEachMillsec;
    var rotationOfMin = totalMillsecOfMin * -RUN_PROFILE.radianMinOfEachMillsec;
    var rotationOfSec = totalMillsecOfSec * -RUN_PROFILE.radianSecOfEachMillsec;
    var houPostionMatrixNew = houPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfHou));
    var minPostionMatrixNew = minPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfMin));
    var secPostionMatrixNew = secPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfSec));
    var htPostionMatrixNew = htPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfHou + Math.PI));
    var mtPostionMatrixNew = mtPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfMin + Math.PI));
    var stPostionMatrixNew = stPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfSec + Math.PI));
    /**
     * 绘制波纹圆
     */
    RIPPLE_PROFILE.radius += RUN_PROFILE.distTimeStamp * RIPPLE_PROFILE.speed;
    if (RIPPLE_PROFILE.radius > RIPPLE_PROFILE.maxRadius) {
        RIPPLE_PROFILE.radius = 0;
    }
    var rippleRadiusDist = RIPPLE_PROFILE.maxRadius - RIPPLE_PROFILE.radius;
    var setRippleCircleFillColorAlpha = 0.25 * (rippleRadiusDist / RIPPLE_PROFILE.maxRadius);
    var setRippleCircleStrokeColorAlpha = 0.25 * (rippleRadiusDist / RIPPLE_PROFILE.maxRadius);
    var rippleCircleElementId = elementControl.createCircleShapeItem(layerItemId, 0, 0, RIPPLE_PROFILE.radius, 0.3);
    elementControl.setElementItemStrokeColor(rippleCircleElementId, new Main_1.Color(Main_1.Color.GOLDEN.red, Main_1.Color.GOLDEN.green, Main_1.Color.GOLDEN.blue, setRippleCircleStrokeColorAlpha));
    elementControl.setElementItemFillColor(rippleCircleElementId, new Main_1.Color(Main_1.Color.GOLDEN.red, Main_1.Color.GOLDEN.green, Main_1.Color.GOLDEN.blue, setRippleCircleFillColorAlpha));
    elementControl.setElementItemName(rippleCircleElementId, "\u6CE2\u7EB9\u5706");
    /**
     * 绘制外层大圆
     */
    var outCircleElementId = elementControl.createCircleShapeItem(layerItemId, 0, 0, RUN_PROFILE.outCircleRadius, 0.5);
    elementControl.setElementItemStrokeColor(outCircleElementId, new Main_1.Color(Main_1.Color.GOLDEN.red, Main_1.Color.GOLDEN.green, Main_1.Color.GOLDEN.blue, 0.5));
    elementControl.setElementItemFillColor(outCircleElementId, new Main_1.Color(Main_1.Color.GOLDEN.red, Main_1.Color.GOLDEN.green, Main_1.Color.GOLDEN.blue, 0.025));
    elementControl.setElementItemName(outCircleElementId, "\u5916\u5C42\u5927\u5706");
    /**
     * 绘制时钟刻度线
     */
    for (var i = 1; i <= 12; i++) {
        var linePositionMatrix = new Main_1.Matrix3([0, RUN_PROFILE.outCircleRadius - 10, 1, 0, RUN_PROFILE.outCircleRadius - 2, 1]);
        var linePositionMatrixNew = linePositionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(-Main_1.Angles.degreeToRadian(30 * i)));
        var lineElementId = elementControl.createLineShapeItem(layerItemId, linePositionMatrixNew.data[0], linePositionMatrixNew.data[1], linePositionMatrixNew.data[3], linePositionMatrixNew.data[4], 1);
        var setColor = Main_1.Color.GOLDEN;
        if ((nowSeconds === i * 5 - 1 && nowMilliseconds >= 900) || (nowSeconds === i * 5 && nowMilliseconds <= 150)) {
            setColor = Main_1.Color.ORANGE;
        }
        elementControl.setElementItemStrokeColor(lineElementId, setColor);
        elementControl.setElementItemLineCap(lineElementId, 'square');
        elementControl.setElementItemName(lineElementId, "\u65F6\u949F\u523B\u5EA6 ".concat(i));
    }
    /**
     * 绘制分钟刻度线
     */
    for (var i = 1; i <= 60; i++) {
        if (i % 5 === 0) {
            continue;
        }
        var linePositionMatrix = new Main_1.Matrix3([0, RUN_PROFILE.outCircleRadius - 6, 1, 0, RUN_PROFILE.outCircleRadius - 2, 1]);
        var linePositionMatrixNew = linePositionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(-Main_1.Angles.degreeToRadian(6 * i)));
        var lineElementId = elementControl.createLineShapeItem(layerItemId, linePositionMatrixNew.data[0], linePositionMatrixNew.data[1], linePositionMatrixNew.data[3], linePositionMatrixNew.data[4], 0.5);
        var setColor = Main_1.Color.GOLDEN;
        if ((nowSeconds === i - 1 && nowMilliseconds >= 900) || (nowSeconds === i && nowMilliseconds <= 150)) {
            setColor = Main_1.Color.ORANGE;
        }
        elementControl.setElementItemStrokeColor(lineElementId, setColor);
        elementControl.setElementItemLineCap(lineElementId, 'square');
        elementControl.setElementItemName(lineElementId, "\u5206\u949F\u523B\u5EA6 ".concat(i));
    }
    /**
     * 绘制三针
     */
    var houLineElementId = elementControl.createLineShapeItem(layerItemId, houPostionMatrixNew.data[0], houPostionMatrixNew.data[1], houPostionMatrixNew.data[3], houPostionMatrixNew.data[4], 2);
    var htLineElementId = elementControl.createLineShapeItem(layerItemId, htPostionMatrixNew.data[0], htPostionMatrixNew.data[1], htPostionMatrixNew.data[3], htPostionMatrixNew.data[4], 2);
    var minLineElementId = elementControl.createLineShapeItem(layerItemId, minPostionMatrixNew.data[0], minPostionMatrixNew.data[1], minPostionMatrixNew.data[3], minPostionMatrixNew.data[4], 2);
    var mtLineElementId = elementControl.createLineShapeItem(layerItemId, mtPostionMatrixNew.data[0], mtPostionMatrixNew.data[1], mtPostionMatrixNew.data[3], mtPostionMatrixNew.data[4], 2);
    var secLineElementId = elementControl.createLineShapeItem(layerItemId, secPostionMatrixNew.data[0], secPostionMatrixNew.data[1], secPostionMatrixNew.data[3], secPostionMatrixNew.data[4], 1);
    var stLineElementId = elementControl.createLineShapeItem(layerItemId, stPostionMatrixNew.data[0], stPostionMatrixNew.data[1], stPostionMatrixNew.data[3], stPostionMatrixNew.data[4], 1);
    elementControl.setElementItemStrokeColor(houLineElementId, Main_1.Color.RED);
    elementControl.setElementItemName(houLineElementId, "\u65F6\u9488\u5934");
    elementControl.setElementItemStrokeColor(htLineElementId, Main_1.Color.RED);
    elementControl.setElementItemName(htLineElementId, "\u65F6\u9488\u5C3E");
    elementControl.setElementItemStrokeColor(minLineElementId, Main_1.Color.GREEN);
    elementControl.setElementItemName(minLineElementId, "\u5206\u9488\u5934");
    elementControl.setElementItemStrokeColor(mtLineElementId, Main_1.Color.GREEN);
    elementControl.setElementItemName(mtLineElementId, "\u5206\u9488\u5C3E");
    elementControl.setElementItemStrokeColor(secLineElementId, Main_1.Color.YELLOW);
    elementControl.setElementItemName(secLineElementId, "\u79D2\u9488\u5934");
    elementControl.setElementItemStrokeColor(stLineElementId, Main_1.Color.YELLOW);
    elementControl.setElementItemName(stLineElementId, "\u79D2\u9488\u5C3E");
    /**
     * 绘制中心实心圆
     */
    var centerCircleElementItem1 = elementControl.createCircleShapeItem(layerItemId, 0, 0, 3.5, 0.5);
    elementControl.setElementItemStrokeColor(centerCircleElementItem1, Main_1.Color.SILVER);
    elementControl.setElementItemFillColor(centerCircleElementItem1, Main_1.Color.SILVER);
    elementControl.setElementItemName(centerCircleElementItem1, "\u4E2D\u5FC3\u5916\u5706");
    var centerCircleElementItem2 = elementControl.createCircleShapeItem(layerItemId, 0, 0, 2, 0.5);
    elementControl.setElementItemStrokeColor(centerCircleElementItem2, Main_1.Color.GOLDEN);
    elementControl.setElementItemFillColor(centerCircleElementItem2, Main_1.Color.GOLDEN);
    elementControl.setElementItemName(centerCircleElementItem2, "\u4E2D\u5FC3\u5185\u5706");
    window.requestAnimationFrame(function (timeStamp) {
        drawClock(webCanvas, layerItemId, timeStamp);
    });
}
function drawClockInit(webCanvas) {
    var drawLayerController = webCanvas.drawLayerController;
    var elementControl = webCanvas.elementController;
    var clockLayerItemId = drawLayerController.createLayerShapeItem("Layer Clock");
    var DPI = webCanvas.getDPI();
    var canvasRect = webCanvas.getCanvasRect();
    var isWidthLess = canvasRect.width < canvasRect.height;
    var shorterSideSize = isWidthLess ? canvasRect.width : canvasRect.height;
    var shorterSideSizePhysics = (0, Main_1.px2mm)(+shorterSideSize, isWidthLess ? DPI[0] : DPI[1]);
    RUN_PROFILE.baseLength = (shorterSideSizePhysics / 2) * 0.7;
    RUN_PROFILE.outCircleRadius = RUN_PROFILE.baseLength + 5;
    RIPPLE_PROFILE.maxRadius = RUN_PROFILE.outCircleRadius;
    RIPPLE_PROFILE.speed = RIPPLE_PROFILE.maxRadius / RIPPLE_PROFILE.duration;
    window.requestAnimationFrame(function (timeStamp) {
        RUN_PROFILE.lastTimeStamp = timeStamp;
        drawClock(webCanvas, clockLayerItemId, timeStamp);
    });
}
exports.drawClockInit = drawClockInit;


/***/ }),

/***/ "./src/$instance-case/utils/floatWindow.ts":
/*!*************************************************!*\
  !*** ./src/$instance-case/utils/floatWindow.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.profileControl = exports.resourceControl = exports.canvasPanelControl = exports.iputsPanelControl = exports.appendFloatContainerWindow = void 0;
var panelPublicStyle = "\n\tmargin: 5px 0; \n\tpadding: 0 10px; \n\tfont-size: 12px;\n\tbox-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); \n\tbackground: rgba(25, 25, 25, 0.75); \n\tborder: 1px solid #666666; \n\tborder-radius: 3px;\n";
function appendFloatContainerWindow(container, position) {
    if (position === void 0) { position = 'RT'; }
    var positionStyle = {
        LT: 'left: 0; top: 0;',
        RT: 'right: 0; top: 0;',
        LB: 'left: 0; bottom: 0;',
        RB: 'right: 0; bottom: 0;',
    }[position];
    var elementId = "floatWindow".concat(Math.random());
    var wrapperHTML = "\n\t\t<section id=\"".concat(elementId, "\" style=\"\n\t\t\tposition: fixed; \n\t\t\t").concat(positionStyle, " \n\t\t\tz-index: 9999; \n\t\t\tuser-select: none;\n\t\t\tpadding: 5px 10px;\n\t\t\">\n\t\t</section>\n\t");
    container.append(document.createRange().createContextualFragment(wrapperHTML));
    return document.getElementById(elementId);
}
exports.appendFloatContainerWindow = appendFloatContainerWindow;
exports.iputsPanelControl = {
    appendTo: function (container) {
        var wrapperHTML = "\n\t\t\t<main style=\"".concat(panelPublicStyle, "\">\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u9F20\u6807\u5B9E\u65F6\u539F\u751F\u5750\u6807(\u50CF\u7D20)(X/Y):&nbsp;&nbsp;</div>\n\t\t\t\t\t<div id=\"infoMouseMoveNativeAbsPos\" style=\"min-width: 75px;\">-/-</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u9F20\u6807\u5B9E\u65F6\u573A\u666F\u5750\u6807(\u50CF\u7D20)(X/Y):&nbsp;&nbsp;</div>\n\t\t\t\t\t<div id=\"infoMouseMoveSceneTruthPos\" style=\"min-width: 75px;\">-/-</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u9F20\u6807\u5B9E\u65F6\u7269\u7406\u5750\u6807(\u6BEB\u7C73)(X/Y):&nbsp;&nbsp;</div>\n\t\t\t\t\t<div id=\"infoMouseMovePhysicsPos\" style=\"min-width: 75px;\">-/-</div>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t");
        container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update: function (data) {
        //@ts-ignore
        document.getElementById('infoMouseMoveNativeAbsPos').innerHTML = "".concat(data.moveSourcePixelX, "/").concat(data.moveSourcePixelY);
        //@ts-ignore
        document.getElementById('infoMouseMoveSceneTruthPos').innerHTML = "".concat(parseInt(data.moveTransPixelX), "/").concat(parseInt(data.moveTransPixelY));
        //@ts-ignore
        document.getElementById('infoMouseMovePhysicsPos').innerHTML = "".concat(parseInt(data.movePhysicsX), "/").concat(parseInt(data.movePhysicsY));
    },
};
exports.canvasPanelControl = {
    appendTo: function (container) {
        var wrapperHTML = "\n\t\t\t<main style=\"".concat(panelPublicStyle, "\">\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u753B\u5E03\u7F29\u653E\u6BD4\u4F8B:&nbsp;&nbsp;</div>\n\t\t\t\t\t<div id=\"infoCanvasZoomRatio\" style=\"min-width: 75px;\">-%</div>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t");
        container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update: function (data) {
        //@ts-ignore
        document.getElementById('infoCanvasZoomRatio').innerHTML = "".concat(Number((data.zoomRatio * 100).toString().match(/^\d+(?:\.\d{0,2})?/)) + '%');
    },
};
exports.resourceControl = {
    appendTo: function (container) {
        var wrapperHTML = "\n\t\t\t<main style=\"".concat(panelPublicStyle, "\">\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u6E32\u67D3\u5E27\u7387(rAF \u6267\u884C\u9891\u7387):&nbsp;&nbsp;</div>\n\t\t\t\t\t<div id=\"perfRenderSpeed\" style=\"min-width: 75px;\">-</div>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t");
        container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update: function (data) {
        data.fps = parseInt(String(data.fps));
        //@ts-ignore
        document.getElementById('perfRenderSpeed').innerHTML = "".concat(data.fps);
    },
};
exports.profileControl = {
    containerDomId: 'profileControl',
    appendTo: function (container) {
        var wrapperHTML = "\n\t\t\t<main id=\"".concat(this.containerDomId, "\" style=\"").concat(panelPublicStyle, "\">\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u5E27\u7387\u7EDF\u8BA1:&nbsp;&nbsp;</div>\n\t\t\t\t\t<div style=\"min-width: 75px; display: flex;\">\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u5F00\u542F</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"1\" name=\"enableFPSCount\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u5173\u95ED</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"0\" name=\"enableFPSCount\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u5BF9\u9F50\u7F51\u70B9:&nbsp;&nbsp;</div>\n\t\t\t\t\t<div style=\"min-width: 75px; display: flex;\">\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u5F00\u542F</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"1\" name=\"alignGrid\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u5173\u95ED</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"0\" name=\"alignGrid\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u753B\u5E03\u7F51\u70B9:&nbsp;&nbsp;</div>\n\t\t\t\t\t<div style=\"min-width: 75px; display: flex;\">\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u663E\u793A</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"1\" name=\"enableGrid\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u9690\u85CF</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"0\" name=\"enableGrid\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u753B\u5E03\u76F4\u89D2\u5750\u6807\u8F74:&nbsp;&nbsp;</div>\n\t\t\t\t\t<div style=\"min-width: 75px; display: flex;\">\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u663E\u793A</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"1\" name=\"enableAxis\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u9690\u85CF</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"0\" name=\"enableAxis\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u753B\u5E03\u7F29\u653E:&nbsp;&nbsp;</div>\n\t\t\t\t\t<div style=\"min-width: 75px; display: flex;\">\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u5141\u8BB8\u7F29\u653E</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"1\" name=\"enableCanvasZoomChange\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u7981\u6B62\u7F29\u653E</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"0\" name=\"enableCanvasZoomChange\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div>\u753B\u5E03\u5E73\u79FB:&nbsp;&nbsp;</div>\n\t\t\t\t\t<div style=\"min-width: 75px; display: flex;\">\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u5141\u8BB8\u5E73\u79FB</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"1\" name=\"enableCanvasTranslate\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<label style=\"cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;\">\n\t\t\t\t\t\t\t<span>\u7981\u6B62\u5E73\u79FB</span>\n\t\t\t\t\t\t\t<input type=\"radio\" value=\"0\" name=\"enableCanvasTranslate\" style=\"cursor: pointer; display: block; margin: 0 5px;\" />\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;\">\n\t\t\t\t\t<div style=\"min-width: 75px; display: flex;\">\n\t\t\t\t\t\t<button \n\t\t\t\t\t\t\tdata-btn=\"resetCanvasView\" \n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tbackground-color: #ffffff;\n\t\t\t\t\t\t\t\tpadding: 3px 5px;\n\t\t\t\t\t\t\t\tborder: 1px solid #dcdcdc;\n\t\t\t\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t\t\">\u91CD\u7F6E\u753B\u5E03\u89C6\u56FE\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t");
        container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    bindEvent: function (callback) {
        var containerElement = document.getElementById(this.containerDomId);
        var allInputElements = Array.from(containerElement.querySelectorAll("input"));
        for (var i = 0; i < allInputElements.length; i++) {
            allInputElements[i].addEventListener('change', function (e) {
                var value = this.value;
                var setValue = Boolean(+value);
                var name = this.getAttribute('name');
                callback && callback('inputInput', name, setValue);
            });
        }
        /* ... */
        var resetCanvasViewBtnElement = containerElement.querySelector("[data-btn=\"resetCanvasView\"]");
        resetCanvasViewBtnElement.addEventListener('click', function (e) {
            callback && callback('resetCanvasView');
        });
    },
    update: function (data) {
        var enableFPSCountElements = Array.from(document.querySelectorAll("[name=\"enableFPSCount\"]"));
        for (var i = 0; i < enableFPSCountElements.length; i++) {
            if (enableFPSCountElements[i].value === String(Number(data.enableFPSCount))) {
                enableFPSCountElements[i].checked = true;
                continue;
            }
            enableFPSCountElements[i].checked = false;
        }
        if (!data.enableFPSCount) {
            //@ts-ignore
            document.getElementById('perfRenderSpeed').innerHTML = '-';
        }
        /* ... */
        var alignGridElements = Array.from(document.querySelectorAll("[name=\"alignGrid\"]"));
        for (var i = 0; i < alignGridElements.length; i++) {
            if (alignGridElements[i].value === String(Number(data.alignGrid))) {
                alignGridElements[i].checked = true;
                continue;
            }
            alignGridElements[i].checked = false;
        }
        /* ... */
        var enableGridElements = Array.from(document.querySelectorAll("[name=\"enableGrid\"]"));
        for (var i = 0; i < enableGridElements.length; i++) {
            if (enableGridElements[i].value === String(Number(data.enableGrid))) {
                enableGridElements[i].checked = true;
                continue;
            }
            enableGridElements[i].checked = false;
        }
        /* ... */
        var enableAxisElements = Array.from(document.querySelectorAll("[name=\"enableAxis\"]"));
        for (var i = 0; i < enableAxisElements.length; i++) {
            if (enableAxisElements[i].value === String(Number(data.enableAxis))) {
                enableAxisElements[i].checked = true;
                continue;
            }
            enableAxisElements[i].checked = false;
        }
        /* ... */
        var enableCanvasZoomChangeElements = Array.from(document.querySelectorAll("[name=\"enableCanvasZoomChange\"]"));
        for (var i = 0; i < enableCanvasZoomChangeElements.length; i++) {
            if (enableCanvasZoomChangeElements[i].value === String(Number(data.enableCanvasZoomChange))) {
                enableCanvasZoomChangeElements[i].checked = true;
                continue;
            }
            enableCanvasZoomChangeElements[i].checked = false;
        }
        /* ... */
        var enableCanvasTranslateElements = Array.from(document.querySelectorAll("[name=\"enableCanvasTranslate\"]"));
        for (var i = 0; i < enableCanvasTranslateElements.length; i++) {
            if (enableCanvasTranslateElements[i].value === String(Number(data.enableCanvasTranslate))) {
                enableCanvasTranslateElements[i].checked = true;
                continue;
            }
            enableCanvasTranslateElements[i].checked = false;
        }
    },
};


/***/ }),

/***/ "./src/Constant.ts":
/*!*************************!*\
  !*** ./src/Constant.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dropDragTool = exports.adsorption = exports.rtree = exports.handlerControl = exports.service = exports.environment = exports.modifyController = exports.selectManager = exports.filterManager = exports.canvasController = exports.drawLayerController = exports.elementController = exports.eventBus = exports.globalIdenManager = void 0;
var GlobalIdenManager_1 = __webpack_require__(/*! ./tool/GlobalIdenManager */ "./src/tool/GlobalIdenManager.ts");
var EventBus_1 = __webpack_require__(/*! ./utils/EventBus */ "./src/utils/EventBus.ts");
var ElementController_1 = __webpack_require__(/*! ./controller/ElementController */ "./src/controller/ElementController.ts");
var DrawLayerController_1 = __webpack_require__(/*! ./controller/DrawLayerController */ "./src/controller/DrawLayerController.ts");
var ModifyController_1 = __webpack_require__(/*! ./presenter/ModifyController */ "./src/presenter/ModifyController.ts");
var Environment_1 = __webpack_require__(/*! ./controller/Environment */ "./src/controller/Environment.ts");
var Rtree_1 = __webpack_require__(/*! ./geometry/rtree/Rtree */ "./src/geometry/rtree/Rtree.ts");
var DropDragTool_1 = __webpack_require__(/*! ./tool/common/DropDragTool */ "./src/tool/common/DropDragTool.ts");
var SelectManage_1 = __webpack_require__(/*! ./controller/SelectManage */ "./src/controller/SelectManage.ts");
var FilterManager_1 = __webpack_require__(/*! ./controller/FilterManager */ "./src/controller/FilterManager.ts");
var HandlerControl_1 = __webpack_require__(/*! ./tool/selection/HandlerControl */ "./src/tool/selection/HandlerControl.ts");
var Service_1 = __webpack_require__(/*! ./service/Service */ "./src/service/Service.ts");
var Adsorption_1 = __webpack_require__(/*! ./tool/Adsorption */ "./src/tool/Adsorption.ts");
var CanvasController_1 = __webpack_require__(/*! ./controller/CanvasController */ "./src/controller/CanvasController.ts");
exports.globalIdenManager = new GlobalIdenManager_1.GlobalIdenManager();
exports.eventBus = new EventBus_1.EventBus();
exports.elementController = new ElementController_1.ElementController();
exports.drawLayerController = new DrawLayerController_1.DrawLayerController();
exports.canvasController = new CanvasController_1.CanvasController();
exports.filterManager = new FilterManager_1.FilterManager();
exports.selectManager = new SelectManage_1.SelectManager();
exports.modifyController = new ModifyController_1.ModifyController();
exports.environment = new Environment_1.Environment();
exports.service = new Service_1.Service();
exports.handlerControl = new HandlerControl_1.HandlerControl();
exports.rtree = new Rtree_1.RTree(20);
exports.adsorption = new Adsorption_1.Adsorption();
exports.dropDragTool = new DropDragTool_1.DropDragTool();


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCanvasElement = exports.WebCanvas = exports.DRAW_TOOL_COMMAND = exports.px2mm = void 0;
var DrawToolCommand_1 = __webpack_require__(/*! ./config/DrawToolCommand */ "./src/config/DrawToolCommand.ts");
var Constant_1 = __webpack_require__(/*! ./Constant */ "./src/Constant.ts");
var ViewInit_1 = __webpack_require__(/*! ./view/ViewInit */ "./src/view/ViewInit.ts");
var FrameCommand_1 = __webpack_require__(/*! ./config/FrameCommand */ "./src/config/FrameCommand.ts");
var Starter_1 = __webpack_require__(/*! ./Starter */ "./src/Starter.ts");
var EventConfig_1 = __webpack_require__(/*! ./config/EventConfig */ "./src/config/EventConfig.ts");
var Utils_1 = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");
var SystemConfig_1 = __webpack_require__(/*! ./controller/SystemConfig */ "./src/controller/SystemConfig.ts");
var Camera_1 = __webpack_require__(/*! ./engine/common/Camera */ "./src/engine/common/Camera.ts");
var Vector3_1 = __webpack_require__(/*! ./geometry/Vector3 */ "./src/geometry/Vector3.ts");
__exportStar(__webpack_require__(/*! ./utils/Color */ "./src/utils/Color.ts"), exports);
__exportStar(__webpack_require__(/*! ./geometry/Decimals */ "./src/geometry/Decimals.ts"), exports);
__exportStar(__webpack_require__(/*! ./geometry/DoubleKit */ "./src/geometry/DoubleKit.ts"), exports);
__exportStar(__webpack_require__(/*! ./geometry/Angles */ "./src/geometry/Angles.ts"), exports);
__exportStar(__webpack_require__(/*! ./geometry/Vector2 */ "./src/geometry/Vector2.ts"), exports);
__exportStar(__webpack_require__(/*! ./geometry/Vector3 */ "./src/geometry/Vector3.ts"), exports);
__exportStar(__webpack_require__(/*! ./geometry/Matrix */ "./src/geometry/Matrix.ts"), exports);
__exportStar(__webpack_require__(/*! ./geometry/Matrix3 */ "./src/geometry/Matrix3.ts"), exports);
__exportStar(__webpack_require__(/*! ./geometry/Matrix4 */ "./src/geometry/Matrix4.ts"), exports);
exports.px2mm = Utils_1.px2mm;
exports.DRAW_TOOL_COMMAND = __assign({}, DrawToolCommand_1.EDrawToolCommand);
var WebCanvas = /** @class */ (function () {
    function WebCanvas(canvasElement) {
        Constant_1.environment.canvasElement = canvasElement;
        this._canvasElement = canvasElement;
    }
    WebCanvas.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, eventsLoader, frameTool, drawToolManager;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, ViewInit_1.viewInit)()];
                    case 1:
                        _b.sent();
                        (0, Starter_1.envirInit)(this._canvasElement);
                        (0, Starter_1.layerInit)();
                        _a = (0, Starter_1.toolInit)(this._canvasElement), eventsLoader = _a.eventsLoader, frameTool = _a.frameTool, drawToolManager = _a.drawToolManager;
                        this._drawToolManager = drawToolManager;
                        this._canvasElement.focus();
                        window.focus();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Object.defineProperty(WebCanvas.prototype, "drawLayerController", {
        get: function () {
            return Constant_1.drawLayerController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebCanvas.prototype, "elementController", {
        get: function () {
            return Constant_1.elementController;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebCanvas.prototype, "canvasController", {
        get: function () {
            return Constant_1.canvasController;
        },
        enumerable: false,
        configurable: true
    });
    WebCanvas.prototype.getCanvasRect = function () {
        return this._canvasElement.getBoundingClientRect().toJSON();
    };
    WebCanvas.prototype.getDPI = function () {
        return Constant_1.environment.DPI;
    };
    WebCanvas.prototype.getCanvasZoomRatio = function () {
        return Camera_1.Camera.getInstance().getZoomRatio();
    };
    WebCanvas.prototype.getSystemConfig = function () {
        return SystemConfig_1.SystemConfig.getInstance().toJSON();
    };
    WebCanvas.prototype.applySystemConfig = function (key, value) {
        SystemConfig_1.SystemConfig.getInstance().update(key, value);
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
    };
    WebCanvas.prototype.setDrawToolCommand = function (type) {
        this._drawToolManager.update(type);
    };
    WebCanvas.prototype.forceRender = function () {
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
    };
    WebCanvas.prototype.resetCanvasView = function () {
        var camera = Camera_1.Camera.getInstance();
        var cameraOrigin = camera.getOrigin();
        camera.matrix4 = camera.matrix4.translateByVector3(new Vector3_1.Vector3(-cameraOrigin.x, -cameraOrigin.y, 0));
        camera.isNeedUpdate = true;
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
        Constant_1.canvasController.zoomCanvas(1);
    };
    WebCanvas.prototype.addInputsChangedListener = function (callback) {
        Constant_1.eventBus.on(EventConfig_1.EOutEventCommand.INPUTS_CHANGED, callback, EventConfig_1.OUT_EVENT_NS);
    };
    WebCanvas.prototype.addResourceChangedListener = function (callback) {
        Constant_1.eventBus.on(EventConfig_1.EOutEventCommand.RESOURCE_CHANGED, callback, EventConfig_1.OUT_EVENT_NS);
    };
    WebCanvas.prototype.addCanvasChangedListener = function (callback) {
        Constant_1.eventBus.on(EventConfig_1.EOutEventCommand.CANVAS_CHANGED, callback, EventConfig_1.OUT_EVENT_NS);
    };
    WebCanvas.prototype.addProfileListener = function (callback) {
        Constant_1.eventBus.on(EventConfig_1.EOutEventCommand.PROFILE_CHANGED, callback, EventConfig_1.OUT_EVENT_NS);
    };
    return WebCanvas;
}());
exports.WebCanvas = WebCanvas;
function createCanvasElement(containerElement) {
    if (containerElement.childNodes.length) {
        throw new Error("you must provide a container that does not contain any child nodes.");
    }
    var containerClientRect = containerElement.getBoundingClientRect();
    var canvasElement = document.createElement('canvas');
    canvasElement.width = containerClientRect.width;
    canvasElement.height = containerClientRect.height;
    canvasElement.style.position = 'absolute';
    containerElement.appendChild(canvasElement);
    return canvasElement;
}
exports.createCanvasElement = createCanvasElement;


/***/ }),

/***/ "./src/Starter.ts":
/*!************************!*\
  !*** ./src/Starter.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Starter = exports.envirInit = exports.toolInit = exports.layerInit = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ./config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var EventConfig_1 = __webpack_require__(/*! ./config/EventConfig */ "./src/config/EventConfig.ts");
var FrameCommand_1 = __webpack_require__(/*! ./config/FrameCommand */ "./src/config/FrameCommand.ts");
var Constant_1 = __webpack_require__(/*! ./Constant */ "./src/Constant.ts");
var SystemConfig_1 = __webpack_require__(/*! ./controller/SystemConfig */ "./src/controller/SystemConfig.ts");
var Camera_1 = __webpack_require__(/*! ./engine/common/Camera */ "./src/engine/common/Camera.ts");
var createScene_1 = __webpack_require__(/*! ./engine/common/createScene */ "./src/engine/common/createScene.ts");
var Matrix4_1 = __webpack_require__(/*! ./geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
var DrawLayerShapeManager_1 = __webpack_require__(/*! ./objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
var ElementPresenter_1 = __webpack_require__(/*! ./presenter/ElementPresenter */ "./src/presenter/ElementPresenter.ts");
var LayerPresenter_1 = __webpack_require__(/*! ./presenter/LayerPresenter */ "./src/presenter/LayerPresenter.ts");
var DrawToolManager_1 = __webpack_require__(/*! ./tool/draw/DrawToolManager */ "./src/tool/draw/DrawToolManager.ts");
var EventsLoader_1 = __webpack_require__(/*! ./tool/EventsLoader */ "./src/tool/EventsLoader.ts");
var FrameTool_1 = __webpack_require__(/*! ./tool/FrameTool */ "./src/tool/FrameTool.ts");
var CreateResouceData_1 = __webpack_require__(/*! ./utils/CreateResouceData */ "./src/utils/CreateResouceData.ts");
var Device_1 = __webpack_require__(/*! ./utils/Device */ "./src/utils/Device.ts");
var FPSCount_1 = __webpack_require__(/*! ./utils/FPSCount */ "./src/utils/FPSCount.ts");
var SyncCanvasRect_1 = __webpack_require__(/*! ./utils/SyncCanvasRect */ "./src/utils/SyncCanvasRect.ts");
function layerInit() {
    DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().createControlShapeItem(DrawLayerConfig_1.EDrawLayerCode.MaskLayer);
}
exports.layerInit = layerInit;
function toolInit(canvasElement) {
    var eventsLoader = new EventsLoader_1.EventsLoader(canvasElement);
    eventsLoader.init();
    var frameTool = new FrameTool_1.FrameTool();
    frameTool.init();
    eventsLoader.nextTool = frameTool;
    var drawToolManager = new DrawToolManager_1.DrawToolManager(frameTool);
    return {
        eventsLoader: eventsLoader,
        frameTool: frameTool,
        drawToolManager: drawToolManager,
    };
}
exports.toolInit = toolInit;
function envirInit(canvasElement) {
    var camera = Camera_1.Camera.getInstance();
    (0, SyncCanvasRect_1.syncCanvasRectByWindow)(canvasElement);
    var canvasRect = canvasElement.getBoundingClientRect().toJSON();
    Constant_1.environment.updateCanvasRectSize(canvasRect.width, canvasRect.height, canvasRect.left, canvasRect.top);
    Constant_1.environment.updateCanvasTheme(SystemConfig_1.SystemConfig.getInstance().isDarkTheme);
    camera.matrix4 = Matrix4_1.Matrix4.ORIGIN.multiply4(Matrix4_1.Matrix4.createScaleMatrix4ByCoordinate(1, 1, 1));
    camera.isNeedUpdate = true;
}
exports.envirInit = envirInit;
var Starter = /** @class */ (function () {
    function Starter(canvasElement) {
        var _this = this;
        this._canvasElement = canvasElement;
        this.fpsCount = new FPSCount_1.FPSCount();
        this._isShouldUpdateCanvasView = false;
        this._isShouldHandleElementsFirst = false;
        Constant_1.environment.DPI = Device_1.Device.getAbsoluteDPI();
        Constant_1.eventBus.on(FrameCommand_1.EFrameCommand.RENDER_FRAME, function (tag) {
            _this._isShouldHandleElementsFirst = !!tag;
            _this._isShouldUpdateCanvasView = true;
        });
        Constant_1.eventBus.on(FrameCommand_1.EFrameCommand.UPDATE_CANVAS_ORIGIN, function (origin) {
            _this._scene.setCanvasOrigin(origin);
            Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
        });
        Constant_1.eventBus.on(FrameCommand_1.EFrameCommand.UPDATE_CANVAS_RECT, function () {
            _this._scene.renderer.autoResize();
            Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
        });
    }
    Starter.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, (0, createScene_1.createScene)(createScene_1.EEngineType.CANVAS, this._canvasElement)];
                    case 1:
                        _a._scene = _b.sent();
                        this._layerPresenter = new LayerPresenter_1.LayerPresenter(this._scene);
                        this._elementPresenter = new ElementPresenter_1.ElementPresenter(this._scene);
                        Constant_1.modifyController.setLayerPresenter(this._layerPresenter);
                        Constant_1.modifyController.setElementPresenter(this._elementPresenter);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Starter.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: false,
        configurable: true
    });
    Starter.prototype.renderFrame = function (timestamp) {
        if (this._isShouldUpdateCanvasView) {
            this._isShouldUpdateCanvasView = false;
            Constant_1.modifyController.notify(this._isShouldHandleElementsFirst);
            this.scene.render(timestamp);
            this._isShouldHandleElementsFirst = false;
        }
        if (SystemConfig_1.SystemConfig.getInstance().enableFPSCount) {
            this.fpsCount.calcFps();
            this.fpsCount.overInterval &&
                Constant_1.eventBus.emit(EventConfig_1.EOutEventCommand.RESOURCE_CHANGED, (0, CreateResouceData_1.createResouceData)({ fps: this.fpsCount.fps }), EventConfig_1.OUT_EVENT_NS);
        }
    };
    return Starter;
}());
exports.Starter = Starter;


/***/ }),

/***/ "./src/config/Config.ts":
/*!******************************!*\
  !*** ./src/config/Config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAX_ZOOM_RATIO = exports.MIN_ZOOM_RATIO = exports.DIRECTION_KEY_MOVE_STEP = exports.MOUSE_WHEEL_SCROLL_DIST = exports.MOUSE_WHEEL_ZOOM_RATIO = void 0;
exports.MOUSE_WHEEL_ZOOM_RATIO = 1.15;
exports.MOUSE_WHEEL_SCROLL_DIST = 25;
exports.DIRECTION_KEY_MOVE_STEP = 5;
exports.MIN_ZOOM_RATIO = 0.05;
exports.MAX_ZOOM_RATIO = 100;


/***/ }),

/***/ "./src/config/DrawLayerConfig.ts":
/*!***************************************!*\
  !*** ./src/config/DrawLayerConfig.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EDrawLayerCode = exports.EDrawLayerType = exports.EDrawLayerStatus = exports.DRAWLAYER_INIT_STATUS = void 0;
exports.DRAWLAYER_INIT_STATUS = 1;
var EDrawLayerStatus;
(function (EDrawLayerStatus) {
    EDrawLayerStatus[EDrawLayerStatus["VISIBLE"] = 1] = "VISIBLE";
    EDrawLayerStatus[EDrawLayerStatus["HIGHTLIGHT"] = 2] = "HIGHTLIGHT";
    EDrawLayerStatus[EDrawLayerStatus["LOCKED"] = 4] = "LOCKED";
    EDrawLayerStatus[EDrawLayerStatus["KILLED"] = 8] = "KILLED";
})(EDrawLayerStatus = exports.EDrawLayerStatus || (exports.EDrawLayerStatus = {}));
var EDrawLayerType;
(function (EDrawLayerType) {
    EDrawLayerType[EDrawLayerType["ControlDrawLayer"] = 1] = "ControlDrawLayer";
    EDrawLayerType[EDrawLayerType["ContentDrawLayer"] = 2] = "ContentDrawLayer";
})(EDrawLayerType = exports.EDrawLayerType || (exports.EDrawLayerType = {}));
var EDrawLayerCode;
(function (EDrawLayerCode) {
    EDrawLayerCode["MaskLayer"] = "dl_1000001";
})(EDrawLayerCode = exports.EDrawLayerCode || (exports.EDrawLayerCode = {}));


/***/ }),

/***/ "./src/config/DrawToolCommand.ts":
/*!***************************************!*\
  !*** ./src/config/DrawToolCommand.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EDrawToolCommand = void 0;
var EDrawToolCommand;
(function (EDrawToolCommand) {
    EDrawToolCommand["BLANK_DROP"] = "BLANK_DROP";
    EDrawToolCommand["LINE"] = "LINE";
    EDrawToolCommand["CIRCLE"] = "CIRCLE";
})(EDrawToolCommand = exports.EDrawToolCommand || (exports.EDrawToolCommand = {}));


/***/ }),

/***/ "./src/config/ElementConfig.ts":
/*!*************************************!*\
  !*** ./src/config/ElementConfig.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EElementType = exports.EElementStatus = exports.ELEMENT_INIT_STATUS = void 0;
exports.ELEMENT_INIT_STATUS = 1;
var EElementStatus;
(function (EElementStatus) {
    EElementStatus[EElementStatus["VISIBLE"] = 1] = "VISIBLE";
    EElementStatus[EElementStatus["HIGHTLIGHT"] = 2] = "HIGHTLIGHT";
    EElementStatus[EElementStatus["LOCKED"] = 4] = "LOCKED";
    EElementStatus[EElementStatus["KILLED"] = 8] = "KILLED";
})(EElementStatus = exports.EElementStatus || (exports.EElementStatus = {}));
var EElementType;
(function (EElementType) {
    EElementType["AssistLine"] = "AssistLine";
    EElementType["Line"] = "Line";
    EElementType["AssistCircle"] = "AssistCircle";
    EElementType["Circle"] = "Circle";
})(EElementType = exports.EElementType || (exports.EElementType = {}));


/***/ }),

/***/ "./src/config/EventConfig.ts":
/*!***********************************!*\
  !*** ./src/config/EventConfig.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EOutEventCommand = exports.OUT_EVENT_NS = void 0;
exports.OUT_EVENT_NS = 'OUT_EVENT_NS';
var EOutEventCommand;
(function (EOutEventCommand) {
    EOutEventCommand["INPUTS_CHANGED"] = "INPUTS_CHANGED";
    EOutEventCommand["CANVAS_CHANGED"] = "CANVAS_CHANGED";
    EOutEventCommand["RESOURCE_CHANGED"] = "RESOURCE_CHANGED";
    EOutEventCommand["PROFILE_CHANGED"] = "PROFILE_CHANGED";
})(EOutEventCommand = exports.EOutEventCommand || (exports.EOutEventCommand = {}));


/***/ }),

/***/ "./src/config/FrameCommand.ts":
/*!************************************!*\
  !*** ./src/config/FrameCommand.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EFrameCommand = void 0;
var EFrameCommand;
(function (EFrameCommand) {
    EFrameCommand["RENDER_FRAME"] = "RENDER_FRAME";
    EFrameCommand["UPDATE_CANVAS_ORIGIN"] = "UPDATE_CANVAS_ORIGIN";
    EFrameCommand["UPDATE_CANVAS_RECT"] = "UPDATE_CANVAS_RECT";
    EFrameCommand["SWITCH_DRAW_TOOL"] = "SWITCH_DRAW_TOOL";
    EFrameCommand["REFRESH_RTREE"] = "REFRESH_RTREE";
})(EFrameCommand = exports.EFrameCommand || (exports.EFrameCommand = {}));


/***/ }),

/***/ "./src/config/Profile.ts":
/*!*******************************!*\
  !*** ./src/config/Profile.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EDIRECTION_KEY = void 0;
var EDIRECTION_KEY;
(function (EDIRECTION_KEY) {
    EDIRECTION_KEY[EDIRECTION_KEY["LEFT"] = 37] = "LEFT";
    EDIRECTION_KEY[EDIRECTION_KEY["UP"] = 38] = "UP";
    EDIRECTION_KEY[EDIRECTION_KEY["RIGHT"] = 39] = "RIGHT";
    EDIRECTION_KEY[EDIRECTION_KEY["DOWN"] = 40] = "DOWN";
})(EDIRECTION_KEY = exports.EDIRECTION_KEY || (exports.EDIRECTION_KEY = {}));


/***/ }),

/***/ "./src/controller/CanvasController.ts":
/*!********************************************!*\
  !*** ./src/controller/CanvasController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasController = void 0;
var Config_1 = __webpack_require__(/*! ../config/Config */ "./src/config/Config.ts");
var EventConfig_1 = __webpack_require__(/*! ../config/EventConfig */ "./src/config/EventConfig.ts");
var FrameCommand_1 = __webpack_require__(/*! ../config/FrameCommand */ "./src/config/FrameCommand.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
var Matrix4_1 = __webpack_require__(/*! ../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
var Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
var CreateCanvasData_1 = __webpack_require__(/*! ../utils/CreateCanvasData */ "./src/utils/CreateCanvasData.ts");
var CanvasController = /** @class */ (function () {
    function CanvasController() {
        this._camera = Camera_1.Camera.getInstance();
    }
    CanvasController.prototype.zoomCanvas = function (ratio, zoomCenterVector3) {
        if (zoomCenterVector3 === void 0) { zoomCenterVector3 = new Vector3_1.Vector3(0, 0, 0); }
        if (this._camera.getZoomRatio() === ratio) {
            return;
        }
        var currentScale = this._camera.getZoomRatio();
        var scale = ratio / currentScale;
        if (!isNaN(currentScale) && currentScale !== 0) {
            if (ratio <= Config_1.MIN_ZOOM_RATIO) {
                scale = Config_1.MIN_ZOOM_RATIO / currentScale;
            }
            if (ratio >= Config_1.MAX_ZOOM_RATIO) {
                scale = Config_1.MAX_ZOOM_RATIO / currentScale;
            }
            var newMatrix4 = Matrix4_1.Matrix4.createScaleMatrix4ByCoordinate(scale, scale, 1).setOriginByVector3(zoomCenterVector3);
            this._camera.matrix4 = this._camera.matrix4.multiply4(newMatrix4);
            this._camera.isNeedUpdate = true;
        }
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
        Constant_1.eventBus.emit(EventConfig_1.EOutEventCommand.CANVAS_CHANGED, (0, CreateCanvasData_1.createCanvasData)({ zoomRatio: this._camera.getZoomRatio() }), EventConfig_1.OUT_EVENT_NS);
    };
    return CanvasController;
}());
exports.CanvasController = CanvasController;


/***/ }),

/***/ "./src/controller/DrawLayerController.ts":
/*!***********************************************!*\
  !*** ./src/controller/DrawLayerController.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerController = void 0;
var FrameCommand_1 = __webpack_require__(/*! ../config/FrameCommand */ "./src/config/FrameCommand.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var DrawLayerShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
var DrawLayerConfig_1 = __webpack_require__(/*! ../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var Helper_1 = __webpack_require__(/*! ../utils/Helper */ "./src/utils/Helper.ts");
var DrawLayerController = /** @class */ (function () {
    function DrawLayerController() {
        /* ... */
    }
    DrawLayerController.prototype.getAllDrawLayerResults = function () {
        var allDrawLayers = Array.from(DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().items.values());
        return allDrawLayers
            .filter(function (layerItem) {
            return layerItem.model.layerItemType === DrawLayerConfig_1.EDrawLayerType.ContentDrawLayer;
        })
            .map(function (layerItem) {
            return {
                layerItemId: layerItem.model.layerItemId,
                layerItemName: layerItem.model.layerItemName,
                layerItemStatus: layerItem.status,
                layerItemType: layerItem.model.layerItemType,
                layerItemOpacity: layerItem.model.layerItemOpacity,
            };
        });
    };
    DrawLayerController.prototype.createLayerShapeItem = function (layerItemName) {
        if (layerItemName === void 0) { layerItemName = 'Untitled Layer'; }
        var drawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().createContentShapeItem(layerItemName);
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
        return drawLayerShapeItem.model.layerItemId;
    };
    DrawLayerController.prototype.deleteLayerShapeItem = function (layerItemId) {
        DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().deleteContentShapeItem(layerItemId);
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME, true);
    };
    DrawLayerController.prototype.getActiveLayerShapeItem = function () {
        return DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
    };
    DrawLayerController.prototype.setActiveLayerShapeItem = function (layerItemId) {
        DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().setActiveItem(layerItemId);
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
    };
    DrawLayerController.prototype.deleteDrawLayerElements = function (layerItemId) {
        var allElementShapes = Helper_1.Helper.getAllElementShapes();
        for (var i = 0; i < allElementShapes.length; i++) {
            if (allElementShapes[i].model.layerItemId !== layerItemId) {
                continue;
            }
            Helper_1.Helper.deleteElementItem(allElementShapes[i]);
        }
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
    };
    return DrawLayerController;
}());
exports.DrawLayerController = DrawLayerController;


/***/ }),

/***/ "./src/controller/ElementController.ts":
/*!*********************************************!*\
  !*** ./src/controller/ElementController.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementController = void 0;
var FrameCommand_1 = __webpack_require__(/*! ../config/FrameCommand */ "./src/config/FrameCommand.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var LineShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
var Vector2_1 = __webpack_require__(/*! ../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var Helper_1 = __webpack_require__(/*! ../utils/Helper */ "./src/utils/Helper.ts");
var Color_1 = __webpack_require__(/*! ../utils/Color */ "./src/utils/Color.ts");
var CircleShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
var ElementController = /** @class */ (function () {
    function ElementController() {
        /* ... */
    }
    ElementController.prototype.getAllElementResults = function () {
        return Helper_1.Helper.getAllElementShapes().map(function (elementItem) {
            return {
                elementItemId: elementItem.model.elementItemId,
                elementItemModelType: elementItem.model.modelType,
            };
        });
    };
    ElementController.prototype.createLineShapeItem = function (layerItemId, startX, startY, endX, endY, width) {
        if (width === void 0) { width = 1; }
        var startPoint = new Vector2_1.Vector2(startX, startY);
        var endPoint = new Vector2_1.Vector2(endX, endY);
        var checkResult = Helper_1.Helper.checkDrawLayer(layerItemId);
        if (!checkResult.check) {
            console.error("error: target layer does not exist or has been deleted.");
            return null;
        }
        var targetShapeItem = LineShapeManager_1.LineShapeManager.getInstance().createShapeItem(layerItemId, startPoint, endPoint, width);
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
        return targetShapeItem.model.elementItemId;
    };
    ElementController.prototype.deleteLineShapeItem = function (elementItemId) {
        LineShapeManager_1.LineShapeManager.getInstance().deleteShapeItem(elementItemId);
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
    };
    ElementController.prototype.createCircleShapeItem = function (layerItemId, centerX, centerY, radius, strokeWidth, strokeColor, fillColor) {
        if (strokeColor === void 0) { strokeColor = new Color_1.Color(1, 0, 0, 1); }
        if (fillColor === void 0) { fillColor = new Color_1.Color(0, 0, 0, 0); }
        var centerPoint = new Vector2_1.Vector2(centerX, centerY);
        var checkResult = Helper_1.Helper.checkDrawLayer(layerItemId);
        if (!checkResult.check) {
            console.error("error: target layer does not exist or has been deleted.");
            return null;
        }
        var targetShapeItem = CircleShapeManager_1.CircleShapeManager.getInstance().createShapeItem(layerItemId, centerPoint, radius, strokeWidth);
        targetShapeItem.strokeColor = strokeColor;
        targetShapeItem.fillColor = fillColor;
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
        return targetShapeItem.model.elementItemId;
    };
    ElementController.prototype.deleteCircleShapeItem = function (elementItemId) {
        CircleShapeManager_1.CircleShapeManager.getInstance().deleteShapeItem(elementItemId);
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
    };
    ElementController.prototype.setElementItemStrokeColor = function (elementItemId, color) {
        var targetElement = Helper_1.Helper.getAllElementShapes().filter(function (elementItem) {
            return elementItem.model.elementItemId === elementItemId;
        })[0];
        if (!targetElement) {
            return;
        }
        if (typeof targetElement.strokeColor !== 'undefined') {
            ;
            targetElement.strokeColor = color;
        }
    };
    ElementController.prototype.setElementItemFillColor = function (elementItemId, color) {
        var targetElement = Helper_1.Helper.getAllElementShapes().filter(function (elementItem) {
            return elementItem.model.elementItemId === elementItemId;
        })[0];
        if (!targetElement) {
            return;
        }
        if (typeof targetElement.fillColor !== 'undefined') {
            ;
            targetElement.fillColor = color;
        }
    };
    ElementController.prototype.setElementItemLineCap = function (elementItemId, lineCap) {
        var targetElement = Helper_1.Helper.getAllElementShapes().filter(function (elementItem) {
            return elementItem.model.elementItemId === elementItemId;
        })[0];
        if (!targetElement) {
            return;
        }
        if (typeof targetElement.lineCap !== 'undefined') {
            ;
            targetElement.lineCap = lineCap;
        }
    };
    ElementController.prototype.setElementItemName = function (elementItemId, elementItemName) {
        var targetElement = Helper_1.Helper.getAllElementShapes().filter(function (elementItem) {
            return elementItem.model.elementItemId === elementItemId;
        })[0];
        if (!targetElement) {
            return;
        }
        ;
        targetElement.elementItemName = elementItemName;
    };
    return ElementController;
}());
exports.ElementController = ElementController;


/***/ }),

/***/ "./src/controller/Environment.ts":
/*!***************************************!*\
  !*** ./src/controller/Environment.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Environment = void 0;
var FrameCommand_1 = __webpack_require__(/*! ../config/FrameCommand */ "./src/config/FrameCommand.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
var Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
var Color_1 = __webpack_require__(/*! ../utils/Color */ "./src/utils/Color.ts");
var Environment = /** @class */ (function () {
    function Environment() {
        this._DPI = [96, 96];
        this._canvasElement = null;
        this._origin = new Vector3_1.Vector3(0, 0, 1);
        this._canvasHeight = 0;
        this._canvasWidth = 0;
        this._canvasLeft = 0;
        this._canvasTop = 0;
    }
    Object.defineProperty(Environment.prototype, "DPI", {
        get: function () {
            return this._DPI;
        },
        set: function (value) {
            this._DPI = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "canvasElement", {
        get: function () {
            return this._canvasElement;
        },
        set: function (value) {
            this._canvasElement = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        set: function (value) {
            this._origin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "canvasWidth", {
        get: function () {
            return this._canvasWidth;
        },
        set: function (value) {
            this._canvasWidth = value;
            Camera_1.Camera.getInstance().width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "canvasHeight", {
        get: function () {
            return this._canvasHeight;
        },
        set: function (value) {
            this._canvasHeight = value;
            Camera_1.Camera.getInstance().height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "canvasLeft", {
        get: function () {
            return this._canvasLeft;
        },
        set: function (value) {
            this._canvasLeft = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Environment.prototype, "canvasTop", {
        get: function () {
            return this._canvasTop;
        },
        set: function (value) {
            this._canvasTop = value;
        },
        enumerable: false,
        configurable: true
    });
    Environment.prototype.updateCanvasTheme = function (isDarkTheme) {
        this._canvasElement.style.backgroundColor = isDarkTheme ? Color_1.Color.BLACK.toRGBAString() : Color_1.Color.WHITE.toRGBAString();
    };
    Environment.prototype.updateCanvasRectSize = function (canvasWidth, canvasHeight, canvasLeft, canvasTop) {
        this._canvasElement.width = canvasWidth;
        this._canvasElement.height = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvasLeft = canvasLeft;
        this.canvasTop = canvasTop;
        this.origin = new Vector3_1.Vector3(canvasWidth / 2, -canvasHeight / 2, 0);
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.UPDATE_CANVAS_ORIGIN, this.origin);
    };
    Environment.prototype.getCanvasBoundingRect = function () {
        return {
            startX: -Math.abs(this.origin.x),
            startY: this.canvasElement.height - Math.abs(this.origin.y),
            width: this.canvasElement.width,
            height: -this.canvasElement.height,
        };
    };
    Environment.prototype.updateCanvasMouseCursor = function (cursor) {
        this.canvasElement.style.cursor = cursor;
    };
    return Environment;
}());
exports.Environment = Environment;


/***/ }),

/***/ "./src/controller/FilterManager.ts":
/*!*****************************************!*\
  !*** ./src/controller/FilterManager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterManager = void 0;
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var DrawLayerShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
var FilterManager = /** @class */ (function () {
    function FilterManager() {
    }
    FilterManager.prototype.pointSelectBeforeFilter = function (x, y) {
        var selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
        var results = new Set();
        if (!selectedDrawLayerShapeItem) {
            return results;
        }
        var rtreeResults = Constant_1.rtree.search({ sx: x, sy: y, w: 0, h: 0 }, false);
        for (var i = 0; i < rtreeResults.length; i++) {
            var rtreeResultItem = rtreeResults[i];
            var rtreeItem = rtreeResultItem.leaf;
            var elementItem = rtreeItem.target;
            if (elementItem.isSelect(x, y) && elementItem.model.layerItemId === selectedDrawLayerShapeItem.layerItemId) {
                results.add(elementItem);
            }
        }
        return results;
    };
    FilterManager.prototype.boxSelectBeforeFilter = function (bbox2) {
        var selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
        var results = new Set();
        if (!selectedDrawLayerShapeItem) {
            return results;
        }
        var rtreeResults = Constant_1.rtree.search({ sx: bbox2.minX, sy: bbox2.minY, w: bbox2.width, h: bbox2.height }, false);
        for (var i = 0; i < rtreeResults.length; i++) {
            var rtreeResultItem = rtreeResults[i];
            var rtreeItem = rtreeResultItem.leaf;
            var elementItem = rtreeItem.target;
            var elementItemBBox2 = elementItem.model.createBBox2();
            if (elementItemBBox2.isBeWrappedByBBox2(bbox2) && elementItem.model.layerItemId === selectedDrawLayerShapeItem.layerItemId) {
                results.add(elementItem);
            }
        }
        return results;
    };
    return FilterManager;
}());
exports.FilterManager = FilterManager;


/***/ }),

/***/ "./src/controller/SelectManage.ts":
/*!****************************************!*\
  !*** ./src/controller/SelectManage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectManager = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var BBox2_1 = __webpack_require__(/*! ../geometry/BBox2 */ "./src/geometry/BBox2.ts");
var Vector2_1 = __webpack_require__(/*! ../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var AssistLineShape_1 = __webpack_require__(/*! ../objects/assist/AssistLineShape */ "./src/objects/assist/AssistLineShape.ts");
var Manage_1 = __webpack_require__(/*! ../objects/base/Manage */ "./src/objects/base/Manage.ts");
var SystemConfig_1 = __webpack_require__(/*! ./SystemConfig */ "./src/controller/SystemConfig.ts");
var Color_1 = __webpack_require__(/*! ../utils/Color */ "./src/utils/Color.ts");
var FrameCommand_1 = __webpack_require__(/*! ../config/FrameCommand */ "./src/config/FrameCommand.ts");
var SelectManager = /** @class */ (function (_super) {
    __extends(SelectManager, _super);
    function SelectManager() {
        var _this = _super.call(this) || this;
        _this._selectionBoxLines = [];
        _this._isBoxSelection = false;
        _this._leftDownRealPhysicsX = 0;
        _this._leftDownRealPhysicsY = 0;
        return _this;
    }
    SelectManager.prototype.getAllSelectItems = function () {
        var e_1, _a;
        var selects = [];
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], item = _d[1];
                selects.push(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return selects;
    };
    SelectManager.prototype.keyDownHandler = function (inputInfo) {
        Constant_1.handlerControl.keyDownHandler(inputInfo);
    };
    SelectManager.prototype.keyUpHandler = function (inputInfo) {
        Constant_1.handlerControl.keyUpHandler(inputInfo);
    };
    SelectManager.prototype.mouseLeftDownHandler = function (inputInfo) {
        var e_2, _a;
        this._isBoxSelection = false;
        this._leftDownRealPhysicsX = inputInfo.leftDownRealPhysicsX;
        this._leftDownRealPhysicsY = inputInfo.leftDownRealPhysicsY;
        var clickSelect = Constant_1.handlerControl.mouseLeftDownSelect(inputInfo);
        var selectResults = this.pointSelect(inputInfo);
        if (clickSelect) {
            selectResults.add(clickSelect);
        }
        else {
            Constant_1.handlerControl.clearProcessor();
        }
        if (this.items.size <= 0) {
            this.setSelectStatus(selectResults);
        }
        else {
            var hit = false;
            try {
                for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), key = _d[0], item = _d[1];
                    if (selectResults.has(item)) {
                        hit = true;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (!hit) {
                this.setSelectStatus(selectResults);
            }
        }
        Constant_1.handlerControl.updateProcessor(inputInfo, clickSelect);
    };
    SelectManager.prototype.mouseMiddleDownHandler = function (inputInfo) {
        this.destorySelectionBox();
    };
    SelectManager.prototype.mouseRightDownHandler = function (inputInfo) {
        this.destorySelectionBox();
    };
    SelectManager.prototype.mouseLeftUpHandler = function (inputInfo) {
        this.destorySelectionBox();
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.REFRESH_RTREE);
        Constant_1.handlerControl.mouseLeftUpHandler(inputInfo);
        if (this._isBoxSelection) {
            var selectResults = this.boxSelect(inputInfo);
            this.setSelectStatus(selectResults);
        }
        this._leftDownRealPhysicsX = -Number.MAX_SAFE_INTEGER;
        this._leftDownRealPhysicsY = -Number.MAX_SAFE_INTEGER;
        Constant_1.handlerControl.updateProcessor(inputInfo, null);
    };
    SelectManager.prototype.mouseMoveHandler = function (inputInfo) {
        if (inputInfo.leftMouseDown) {
            if (this.items.size <= 0) {
                if (!inputInfo.middleMouseDown && !inputInfo.rightMouseDown) {
                    this._isBoxSelection = true;
                    this.updateSelectionBox(inputInfo);
                }
                else {
                    this._isBoxSelection = false;
                    this.destorySelectionBox();
                }
            }
            else {
                this._isBoxSelection = false;
                this.destorySelectionBox();
                Constant_1.handlerControl.mouseMoveHandler(inputInfo);
            }
        }
        else {
            Constant_1.handlerControl.mouseUpMoveHandler(inputInfo);
        }
    };
    SelectManager.prototype.pointSelect = function (inputInfo) {
        var sourceResults = Constant_1.filterManager.pointSelectBeforeFilter(inputInfo.leftDownRealPhysicsX, inputInfo.leftDownRealPhysicsY);
        return sourceResults;
    };
    SelectManager.prototype.boxSelect = function (inputInfo) {
        var rangeBBox2 = new BBox2_1.BBox2(this._leftDownRealPhysicsX, this._leftDownRealPhysicsY, inputInfo.moveRealPhysicsX, inputInfo.moveRealPhysicsY);
        var sourceResults = Constant_1.filterManager.boxSelectBeforeFilter(rangeBBox2);
        return sourceResults;
    };
    SelectManager.prototype.setSelectStatus = function (selectedItems) {
        var e_3, _a, e_4, _b;
        try {
            for (var _c = __values(this.items), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), key = _e[0], item = _e[1];
                item.setUnSelect();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.items.clear();
        try {
            for (var selectedItems_1 = __values(selectedItems), selectedItems_1_1 = selectedItems_1.next(); !selectedItems_1_1.done; selectedItems_1_1 = selectedItems_1.next()) {
                var selectedItem = selectedItems_1_1.value;
                selectedItem.setSelect();
                this.items.set(selectedItem.elementItemId, selectedItem);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (selectedItems_1_1 && !selectedItems_1_1.done && (_b = selectedItems_1.return)) _b.call(selectedItems_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    SelectManager.prototype.updateSelectionBox = function (inputInfo) {
        if (this._selectionBoxLines.length <= 0) {
            var line1 = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerConfig_1.EDrawLayerCode.MaskLayer, new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.leftDownRealPhysicsY), new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.leftDownRealPhysicsY), false);
            var line2 = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerConfig_1.EDrawLayerCode.MaskLayer, new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.leftDownRealPhysicsY), new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.moveRealPhysicsY), false);
            var line3 = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerConfig_1.EDrawLayerCode.MaskLayer, new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.moveRealPhysicsY), new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.moveRealPhysicsY), false);
            var line4 = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerConfig_1.EDrawLayerCode.MaskLayer, new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.leftDownRealPhysicsY), new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.moveRealPhysicsY), false);
            line1.strokeColor =
                line2.strokeColor =
                    line3.strokeColor =
                        line4.strokeColor =
                            SystemConfig_1.SystemConfig.getInstance().isDarkTheme ? Color_1.Color.WHITE : Color_1.Color.BLACK;
            this._selectionBoxLines.push(line1);
            this._selectionBoxLines.push(line2);
            this._selectionBoxLines.push(line3);
            this._selectionBoxLines.push(line4);
        }
        else {
            this._selectionBoxLines[0].endPoint = new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.leftDownRealPhysicsY);
            this._selectionBoxLines[1].startPoint = new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.leftDownRealPhysicsY);
            this._selectionBoxLines[1].endPoint = new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.moveRealPhysicsY);
            this._selectionBoxLines[2].startPoint = new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.moveRealPhysicsY);
            this._selectionBoxLines[2].endPoint = new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.moveRealPhysicsY);
            this._selectionBoxLines[3].endPoint = new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.moveRealPhysicsY);
        }
    };
    SelectManager.prototype.destorySelectionBox = function () {
        for (var i = 0; i < this._selectionBoxLines.length; i++) {
            this._selectionBoxLines[i].setDelete();
        }
        this._selectionBoxLines.length = 0;
    };
    return SelectManager;
}(Manage_1.Manager));
exports.SelectManager = SelectManager;


/***/ }),

/***/ "./src/controller/SystemConfig.ts":
/*!****************************************!*\
  !*** ./src/controller/SystemConfig.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemConfig = void 0;
var EventConfig_1 = __webpack_require__(/*! ../config/EventConfig */ "./src/config/EventConfig.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var SystemConfig = /** @class */ (function () {
    function SystemConfig() {
        this._isDarkTheme = true;
        this._alignGrid = true;
        this._enableGrid = true;
        this._enableAxis = true;
        this._enableFPSCount = true;
        this._enableCanvasZoomChange = false;
        this._enableCanvasTranslate = false;
    }
    SystemConfig.getInstance = function () {
        if (SystemConfig.thisInstance === undefined) {
            SystemConfig.thisInstance = new SystemConfig();
        }
        return SystemConfig.thisInstance;
    };
    Object.defineProperty(SystemConfig.prototype, "isDarkTheme", {
        get: function () {
            return this._isDarkTheme;
        },
        set: function (value) {
            this._isDarkTheme = value;
            Constant_1.eventBus.emit(EventConfig_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON(), EventConfig_1.OUT_EVENT_NS);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemConfig.prototype, "alignGrid", {
        get: function () {
            return this._alignGrid;
        },
        set: function (value) {
            this._alignGrid = value;
            Constant_1.eventBus.emit(EventConfig_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON(), EventConfig_1.OUT_EVENT_NS);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemConfig.prototype, "enableGrid", {
        get: function () {
            return this._enableGrid;
        },
        set: function (value) {
            this._enableGrid = value;
            Constant_1.eventBus.emit(EventConfig_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON(), EventConfig_1.OUT_EVENT_NS);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemConfig.prototype, "enableAxis", {
        get: function () {
            return this._enableAxis;
        },
        set: function (value) {
            this._enableAxis = value;
            Constant_1.eventBus.emit(EventConfig_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON(), EventConfig_1.OUT_EVENT_NS);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemConfig.prototype, "enableFPSCount", {
        get: function () {
            return this._enableFPSCount;
        },
        set: function (value) {
            this._enableFPSCount = value;
            Constant_1.eventBus.emit(EventConfig_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON(), EventConfig_1.OUT_EVENT_NS);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemConfig.prototype, "enableCanvasZoomChange", {
        get: function () {
            return this._enableCanvasZoomChange;
        },
        set: function (value) {
            this._enableCanvasZoomChange = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemConfig.prototype, "enableCanvasTranslate", {
        get: function () {
            return this._enableCanvasTranslate;
        },
        set: function (value) {
            this._enableCanvasTranslate = value;
        },
        enumerable: false,
        configurable: true
    });
    SystemConfig.prototype.toJSON = function () {
        return {
            isDarkTheme: this.isDarkTheme,
            alignGrid: this.alignGrid,
            enableGrid: this.enableGrid,
            enableAxis: this.enableAxis,
            enableFPSCount: this.enableFPSCount,
            enableCanvasZoomChange: this.enableCanvasZoomChange,
            enableCanvasTranslate: this.enableCanvasTranslate,
        };
    };
    SystemConfig.prototype.update = function (key, value) {
        if (typeof this[key] !== 'undefined') {
            this[key] = value;
        }
    };
    return SystemConfig;
}());
exports.SystemConfig = SystemConfig;


/***/ }),

/***/ "./src/engine/canvas/SceneCanvas.ts":
/*!******************************************!*\
  !*** ./src/engine/canvas/SceneCanvas.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneCanvas = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ../../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var Camera_1 = __webpack_require__(/*! ../common/Camera */ "./src/engine/common/Camera.ts");
var Scene_1 = __webpack_require__(/*! ../common/Scene */ "./src/engine/common/Scene.ts");
var GridCanvas_1 = __webpack_require__(/*! ./canvas/GridCanvas */ "./src/engine/canvas/canvas/GridCanvas.ts");
var RendererCanvas_1 = __webpack_require__(/*! ./core/RendererCanvas */ "./src/engine/canvas/core/RendererCanvas.ts");
var PlaneCanvas_1 = __webpack_require__(/*! ./plane/PlaneCanvas */ "./src/engine/canvas/plane/PlaneCanvas.ts");
var SceneCanvas = /** @class */ (function (_super) {
    __extends(SceneCanvas, _super);
    function SceneCanvas(canvasElement) {
        var _this = _super.call(this) || this;
        var camera = Camera_1.Camera.getInstance();
        _this.renderer = new RendererCanvas_1.RendererCanvas(canvasElement);
        _this._gridCanvas = new GridCanvas_1.GridCanvas();
        _this._contentPlanes = new Map();
        _this._controlPlanes = new Map();
        camera.width = _this.renderer.width;
        camera.height = _this.renderer.height;
        return _this;
    }
    SceneCanvas.prototype.setCanvasOrigin = function (origin) {
        this.renderer.origin = origin;
        this.renderer.ctx.translate(origin.x, -origin.y);
        this.renderer.ctx.scale(1, -1);
    };
    SceneCanvas.prototype.addPlaneItem = function (planeId) {
        var planesHanlder = this._contentPlanes;
        if ([DrawLayerConfig_1.EDrawLayerCode.MaskLayer].indexOf(planeId) >= 0) {
            planesHanlder = this._controlPlanes;
        }
        if (planesHanlder.has(planeId)) {
            return planesHanlder.get(planeId);
        }
        var planeItem = new PlaneCanvas_1.PlaneCanvas(this, planeId);
        planesHanlder.set(planeId, planeItem);
        return planeItem;
    };
    SceneCanvas.prototype.deletePlaneItem = function (planeId) {
        var planesHanlder = this._contentPlanes;
        if ([DrawLayerConfig_1.EDrawLayerCode.MaskLayer].indexOf(planeId) >= 0) {
            return;
        }
        if (planesHanlder.has(planeId)) {
            planesHanlder.delete(planeId);
            return;
        }
    };
    SceneCanvas.prototype.render = function (timestamp) {
        this.renderer.clearCanvas();
        this._gridCanvas.render(this.renderer.ctx);
        var allContentPlanes = Array.from(this._contentPlanes.values());
        this.renderer.ctx.save();
        for (var i = 0; i < allContentPlanes.length; i++) {
            var planeItem = allContentPlanes[i];
            planeItem.render(this.renderer.ctx);
        }
        var allControlPlanes = Array.from(this._controlPlanes.values());
        for (var i = 0; i < allControlPlanes.length; i++) {
            var planeItem = allControlPlanes[i];
            planeItem.render(this.renderer.ctx);
        }
        this.renderer.ctx.restore();
    };
    return SceneCanvas;
}(Scene_1.Scene));
exports.SceneCanvas = SceneCanvas;


/***/ }),

/***/ "./src/engine/canvas/canvas/GridCanvas.ts":
/*!************************************************!*\
  !*** ./src/engine/canvas/canvas/GridCanvas.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GridCanvas = void 0;
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var SystemConfig_1 = __webpack_require__(/*! ../../../controller/SystemConfig */ "./src/controller/SystemConfig.ts");
var Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
var Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
var Grid_1 = __webpack_require__(/*! ../../common/Grid */ "./src/engine/common/Grid.ts");
var GridSetting_1 = __webpack_require__(/*! ../../common/GridSetting */ "./src/engine/common/GridSetting.ts");
var GridCanvas = /** @class */ (function (_super) {
    __extends(GridCanvas, _super);
    function GridCanvas() {
        var _this = _super.call(this) || this;
        _this._systemConfig = SystemConfig_1.SystemConfig.getInstance();
        return _this;
    }
    GridCanvas.prototype.render = function (ctx) {
        var camera = Camera_1.Camera.getInstance();
        var gridSetting = GridSetting_1.GridSetting.getInstance();
        var viewBoundingRect = Constant_1.environment.getCanvasBoundingRect();
        var axisPosition = this.calcAxisPostion(viewBoundingRect, camera);
        if (this._systemConfig.enableAxis) {
            this.renderAxis(ctx, axisPosition, gridSetting);
        }
        if (this._systemConfig.enableGrid) {
            this.renderGrid(ctx, viewBoundingRect, camera, axisPosition, gridSetting);
        }
    };
    GridCanvas.prototype.calcAxisPostion = function (viewBoundingRect, camera) {
        var startX = viewBoundingRect.startX, startY = viewBoundingRect.startY, width = viewBoundingRect.width, height = viewBoundingRect.height;
        var transformMatrix4 = camera.getSourceMatrix();
        var xStart = [startX, 0];
        var xEnd = [width - Math.abs(startX), 0];
        var yStart = [0, startY];
        var yEnd = [0, -(Math.abs(height) - startY)];
        var xAxisMatrixResult = new Matrix_1.Matrix(2, 4, [0, xStart[1], 0, 1, 0, xEnd[1], 0, 1]).multiply(transformMatrix4).data;
        var yAxisMatrixResult = new Matrix_1.Matrix(2, 4, [yStart[0], 0, 0, 1, yEnd[0], 0, 0, 1]).multiply(transformMatrix4).data;
        xAxisMatrixResult[0] = xStart[0];
        xAxisMatrixResult[4] = xEnd[0];
        yAxisMatrixResult[1] = yStart[1];
        yAxisMatrixResult[5] = yEnd[1];
        return {
            xAxis: xAxisMatrixResult,
            yAxis: yAxisMatrixResult,
        };
    };
    GridCanvas.prototype.renderAxis = function (ctx, axisPosition, gridSetting) {
        var xAxis = axisPosition.xAxis, yAxis = axisPosition.yAxis;
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = gridSetting.axisColor.toRGBAString();
        ctx.beginPath();
        ctx.moveTo(xAxis[0] - 0.5, xAxis[1] - 0.5);
        ctx.lineTo(xAxis[4] - 0.5, xAxis[5] - 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(yAxis[0] - 0.5, yAxis[1] - 0.5);
        ctx.lineTo(yAxis[4] - 0.5, yAxis[5] - 0.5);
        ctx.stroke();
    };
    GridCanvas.prototype.renderGrid = function (ctx, viewBoundingRect, camera, axisPosition, gridSetting) {
        var xAxis = axisPosition.xAxis, yAxis = axisPosition.yAxis;
        var startX = viewBoundingRect.startX, startY = viewBoundingRect.startY, width = viewBoundingRect.width, height = viewBoundingRect.height;
        var endX = startX + width;
        var endY = startY + height;
        var pointArr = [];
        var zoomCanvas = camera.getZoomRatio();
        var transformMatrix4 = camera.getSourceMatrix();
        var DPI = Constant_1.environment.DPI;
        /**
         * 单位网点间距所占据的真实像素长度
         */
        var xPxDist = (DPI[0] / 25.4) * gridSetting.stepX;
        var yPxDist = (DPI[1] / 25.4) * gridSetting.stepY;
        var rightDist = (endX - yAxis[0]) / zoomCanvas;
        var leftDist = (yAxis[0] - startX) / zoomCanvas;
        var topDist = -(xAxis[1] - startY) / zoomCanvas;
        var bottomDist = -(endY - xAxis[1]) / zoomCanvas;
        var stepSize = this.getSamplingStepSize(zoomCanvas);
        // console.log(
        // 	`leftDist=${leftDist}`,
        // 	`rightDist=${rightDist}`,
        // 	`topDist=${topDist}`,
        // 	`bottomDist=${bottomDist}`,
        // 	`startX=${startX}`,
        // 	`startY=${startY}`
        // )
        for (var i = 0; i < rightDist + xPxDist; i += xPxDist * stepSize) {
            var as = [i, 0, 0, 1, i, topDist, 0, 1];
            var an = new Matrix_1.Matrix(2, 4, as).multiply(transformMatrix4).data;
            if (an[0] >= startX && an[0] <= endX) {
                pointArr.push(an);
            }
            var bs = [i, 0, 0, 1, i, -bottomDist, 0, 1];
            var bn = new Matrix_1.Matrix(2, 4, bs).multiply(transformMatrix4).data;
            if (bn[0] >= startX && bn[0] <= endX) {
                pointArr.push(bn);
            }
        }
        for (var i = 0; i < leftDist; i += xPxDist * stepSize) {
            var as = [-i, 0, 0, 1, -i, topDist, 0, 1];
            var an = new Matrix_1.Matrix(2, 4, as).multiply(transformMatrix4).data;
            if (an[0] >= startX && an[0] <= endX) {
                pointArr.push(an);
            }
            var bs = [-i, 0, 0, 1, -i, -bottomDist, 0, 1];
            var bn = new Matrix_1.Matrix(2, 4, bs).multiply(transformMatrix4).data;
            if (bn[0] >= startX && bn[0] <= endX) {
                pointArr.push(bn);
            }
        }
        /* ... */
        ctx.setLineDash([1, yPxDist * zoomCanvas * stepSize]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = gridSetting.gridColor.toRGBAString();
        for (var i = 0; i < pointArr.length; i++) {
            ctx.beginPath();
            ctx.moveTo(pointArr[i][0], pointArr[i][1]);
            ctx.lineTo(pointArr[i][4], pointArr[i][5]);
            ctx.stroke();
        }
    };
    GridCanvas.prototype.getSamplingStepSize = function (zoomCanvas) {
        if (zoomCanvas < 0.075) {
            return 250;
        }
        if (zoomCanvas < 0.1) {
            return 200;
        }
        if (zoomCanvas < 0.2) {
            return 100;
        }
        if (zoomCanvas < 0.4) {
            return 60;
        }
        if (zoomCanvas < 0.6) {
            return 40;
        }
        if (zoomCanvas < 0.8) {
            return 20;
        }
        if (zoomCanvas < 1) {
            return 15;
        }
        if (zoomCanvas > 10) {
            return 1;
        }
        if (zoomCanvas > 5) {
            return 3;
        }
        if (zoomCanvas > 2) {
            return 5;
        }
        return 10;
    };
    return GridCanvas;
}(Grid_1.Gird));
exports.GridCanvas = GridCanvas;


/***/ }),

/***/ "./src/engine/canvas/core/RendererCanvas.ts":
/*!**************************************************!*\
  !*** ./src/engine/canvas/core/RendererCanvas.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RendererCanvas = void 0;
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var Renderer_1 = __webpack_require__(/*! ../../common/Renderer */ "./src/engine/common/Renderer.ts");
var RendererCanvas = /** @class */ (function (_super) {
    __extends(RendererCanvas, _super);
    function RendererCanvas(canvasElement) {
        var _this = _super.call(this, canvasElement) || this;
        _this.ctx = canvasElement.getContext('2d');
        _this.autoResize();
        return _this;
    }
    RendererCanvas.prototype.clearCanvas = function () {
        var _a = Constant_1.environment.getCanvasBoundingRect(), startX = _a.startX, startY = _a.startY, width = _a.width, height = _a.height;
        this.ctx.clearRect(startX, startY, width, height);
        this.ctx.strokeStyle = null;
    };
    RendererCanvas.prototype.autoResize = function (ratio) {
        if (ratio === void 0) { ratio = window.devicePixelRatio; }
        var _ratio = ratio > 1 ? ratio : 1;
        var canvasWidth = this.canvasElement.clientWidth * _ratio;
        var canvasHeight = this.canvasElement.clientHeight * _ratio;
        if (canvasWidth !== 0 && canvasHeight !== 0) {
            this.canvasElement.width = canvasWidth;
            this.canvasElement.height = canvasHeight;
            return;
        }
        this.canvasElement.width = 0;
        this.canvasElement.height = 0;
    };
    return RendererCanvas;
}(Renderer_1.Renderer));
exports.RendererCanvas = RendererCanvas;


/***/ }),

/***/ "./src/engine/canvas/plane/PlaneCanvas.ts":
/*!************************************************!*\
  !*** ./src/engine/canvas/plane/PlaneCanvas.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlaneCanvas = void 0;
var Plane_1 = __webpack_require__(/*! ../../common/Plane */ "./src/engine/common/Plane.ts");
var Line_1 = __webpack_require__(/*! ../primitives/Line */ "./src/engine/canvas/primitives/Line.ts");
var Utils_1 = __webpack_require__(/*! ../../../utils/Utils */ "./src/utils/Utils.ts");
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var AssistLine_1 = __webpack_require__(/*! ../primitives/AssistLine */ "./src/engine/canvas/primitives/AssistLine.ts");
var Circle_1 = __webpack_require__(/*! ../primitives/Circle */ "./src/engine/canvas/primitives/Circle.ts");
var AssistCircle_1 = __webpack_require__(/*! ../primitives/AssistCircle */ "./src/engine/canvas/primitives/AssistCircle.ts");
var PlaneCanvas = /** @class */ (function (_super) {
    __extends(PlaneCanvas, _super);
    function PlaneCanvas(scene, planeId) {
        var _this = _super.call(this, scene, planeId) || this;
        _this._linesProfile = new Map();
        _this._circlesProfile = new Map();
        _this._assistLinesProfile = new Map();
        _this._assistCirclesProfile = new Map();
        return _this;
    }
    Object.defineProperty(PlaneCanvas.prototype, "linesProfile", {
        get: function () {
            return this._linesProfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlaneCanvas.prototype, "circlesProfile", {
        get: function () {
            return this._circlesProfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlaneCanvas.prototype, "assistLinesProfile", {
        get: function () {
            return this._assistLinesProfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlaneCanvas.prototype, "assistCirclesProfile", {
        get: function () {
            return this._assistCirclesProfile;
        },
        enumerable: false,
        configurable: true
    });
    PlaneCanvas.prototype.addLineItems = function (targetSet) {
        var e_1, _a;
        var DPI = Constant_1.environment.DPI;
        try {
            for (var targetSet_1 = __values(targetSet), targetSet_1_1 = targetSet_1.next(); !targetSet_1_1.done; targetSet_1_1 = targetSet_1.next()) {
                var _b = __read(targetSet_1_1.value, 2), key = _b[0], value = _b[1];
                var strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
                this.linesProfile.set(key, new Line_1.Line((0, Utils_1.mm2px)(value.startPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.startPoint.y, DPI[1]), (0, Utils_1.mm2px)(value.endPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.endPoint.y, DPI[1]), (0, Utils_1.mm2px)(value.strokeWidth, DPI[0]), strokeColor, value.lineCap));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (targetSet_1_1 && !targetSet_1_1.done && (_a = targetSet_1.return)) _a.call(targetSet_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    PlaneCanvas.prototype.updateLineItems = function (targetSet) {
        var e_2, _a;
        var DPI = Constant_1.environment.DPI;
        try {
            for (var targetSet_2 = __values(targetSet), targetSet_2_1 = targetSet_2.next(); !targetSet_2_1.done; targetSet_2_1 = targetSet_2.next()) {
                var _b = __read(targetSet_2_1.value, 2), key = _b[0], value = _b[1];
                if (!this.linesProfile.has(key)) {
                    continue;
                }
                var primitiveItem = this.linesProfile.get(key);
                primitiveItem.startX = (0, Utils_1.mm2px)(value.startPoint.x, DPI[0]);
                primitiveItem.startY = (0, Utils_1.mm2px)(value.startPoint.y, DPI[1]);
                primitiveItem.endX = (0, Utils_1.mm2px)(value.endPoint.x, DPI[0]);
                primitiveItem.endY = (0, Utils_1.mm2px)(value.endPoint.y, DPI[1]);
                primitiveItem.strokeWidth = (0, Utils_1.mm2px)(value.strokeWidth, DPI[0]);
                primitiveItem.strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
                primitiveItem.lineCap = value.lineCap;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (targetSet_2_1 && !targetSet_2_1.done && (_a = targetSet_2.return)) _a.call(targetSet_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    PlaneCanvas.prototype.deleteLineItems = function (targetIds) {
        var arrTargetIds = Array.from(targetIds);
        for (var i = 0; i < arrTargetIds.length; i++) {
            if (!this.linesProfile.has(arrTargetIds[i])) {
                continue;
            }
            this.linesProfile.delete(arrTargetIds[i]);
        }
    };
    PlaneCanvas.prototype.addCircleItems = function (targetSet) {
        var e_3, _a;
        var DPI = Constant_1.environment.DPI;
        try {
            for (var targetSet_3 = __values(targetSet), targetSet_3_1 = targetSet_3.next(); !targetSet_3_1.done; targetSet_3_1 = targetSet_3.next()) {
                var _b = __read(targetSet_3_1.value, 2), key = _b[0], value = _b[1];
                var strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
                var fillColor = "rgba(".concat(value.fillColor.red * 255, ", ").concat(value.fillColor.green * 255, ", ").concat(value.fillColor.blue * 255, ", ").concat(value.fillColor.alpha, ")");
                this.circlesProfile.set(key, new Circle_1.Circle((0, Utils_1.mm2px)(value.centerPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.centerPoint.y, DPI[1]), (0, Utils_1.mm2px)(value.radius, DPI[0]), (0, Utils_1.mm2px)(value.strokeWidth, DPI[1]), strokeColor, fillColor, value.lineCap));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (targetSet_3_1 && !targetSet_3_1.done && (_a = targetSet_3.return)) _a.call(targetSet_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    PlaneCanvas.prototype.updateCircleItems = function (targetSet) {
        var e_4, _a;
        var DPI = Constant_1.environment.DPI;
        try {
            for (var targetSet_4 = __values(targetSet), targetSet_4_1 = targetSet_4.next(); !targetSet_4_1.done; targetSet_4_1 = targetSet_4.next()) {
                var _b = __read(targetSet_4_1.value, 2), key = _b[0], value = _b[1];
                if (!this.circlesProfile.has(key)) {
                    continue;
                }
                var primitiveItem = this.circlesProfile.get(key);
                primitiveItem.centerX = (0, Utils_1.mm2px)(value.centerPoint.x, DPI[0]);
                primitiveItem.centerY = (0, Utils_1.mm2px)(value.centerPoint.y, DPI[1]);
                primitiveItem.radius = (0, Utils_1.mm2px)(value.radius, DPI[0]);
                primitiveItem.strokeWidth = (0, Utils_1.mm2px)(value.strokeWidth, DPI[1]);
                primitiveItem.strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
                primitiveItem.fillColor = "rgba(".concat(value.fillColor.red * 255, ", ").concat(value.fillColor.green * 255, ", ").concat(value.fillColor.blue * 255, ", ").concat(value.fillColor.alpha, ")");
                primitiveItem.lineCap = value.lineCap;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (targetSet_4_1 && !targetSet_4_1.done && (_a = targetSet_4.return)) _a.call(targetSet_4);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    PlaneCanvas.prototype.deleteCircleItems = function (targetIds) {
        var arrTargetIds = Array.from(targetIds);
        for (var i = 0; i < arrTargetIds.length; i++) {
            if (!this.circlesProfile.has(arrTargetIds[i])) {
                continue;
            }
            this.circlesProfile.delete(arrTargetIds[i]);
        }
    };
    PlaneCanvas.prototype.addAssistLineItems = function (targetPrimitives) {
        var e_5, _a;
        var DPI = Constant_1.environment.DPI;
        try {
            for (var targetPrimitives_1 = __values(targetPrimitives), targetPrimitives_1_1 = targetPrimitives_1.next(); !targetPrimitives_1_1.done; targetPrimitives_1_1 = targetPrimitives_1.next()) {
                var _b = __read(targetPrimitives_1_1.value, 2), key = _b[0], value = _b[1];
                var strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
                this.assistLinesProfile.set(key, new AssistLine_1.AssistLine((0, Utils_1.mm2px)(value.startPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.startPoint.y, DPI[1]), (0, Utils_1.mm2px)(value.endPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.endPoint.y, DPI[1]), strokeColor, value.isSolid, value.fixedPixelWidth));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (targetPrimitives_1_1 && !targetPrimitives_1_1.done && (_a = targetPrimitives_1.return)) _a.call(targetPrimitives_1);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    PlaneCanvas.prototype.updateAssistLineItems = function (targetPrimitives) {
        var e_6, _a;
        var DPI = Constant_1.environment.DPI;
        try {
            for (var targetPrimitives_2 = __values(targetPrimitives), targetPrimitives_2_1 = targetPrimitives_2.next(); !targetPrimitives_2_1.done; targetPrimitives_2_1 = targetPrimitives_2.next()) {
                var _b = __read(targetPrimitives_2_1.value, 2), key = _b[0], value = _b[1];
                if (!this.assistLinesProfile.has(key)) {
                    continue;
                }
                var primitiveItem = this.assistLinesProfile.get(key);
                primitiveItem.startX = (0, Utils_1.mm2px)(value.startPoint.x, DPI[0]);
                primitiveItem.startY = (0, Utils_1.mm2px)(value.startPoint.y, DPI[0]);
                primitiveItem.endX = (0, Utils_1.mm2px)(value.endPoint.x, DPI[0]);
                primitiveItem.endY = (0, Utils_1.mm2px)(value.endPoint.y, DPI[0]);
                primitiveItem.fixedPixelWidth = value.fixedPixelWidth;
                primitiveItem.strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (targetPrimitives_2_1 && !targetPrimitives_2_1.done && (_a = targetPrimitives_2.return)) _a.call(targetPrimitives_2);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    PlaneCanvas.prototype.deleteAssistLineItems = function (targetIds) {
        var arrTargetIds = Array.from(targetIds);
        for (var i = 0; i < arrTargetIds.length; i++) {
            if (!this.assistLinesProfile.has(arrTargetIds[i])) {
                continue;
            }
            this.assistLinesProfile.delete(arrTargetIds[i]);
        }
    };
    PlaneCanvas.prototype.addAssistCircleItems = function (targetPrimitives) {
        var e_7, _a;
        var DPI = Constant_1.environment.DPI;
        try {
            for (var targetPrimitives_3 = __values(targetPrimitives), targetPrimitives_3_1 = targetPrimitives_3.next(); !targetPrimitives_3_1.done; targetPrimitives_3_1 = targetPrimitives_3.next()) {
                var _b = __read(targetPrimitives_3_1.value, 2), key = _b[0], value = _b[1];
                var strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
                var fillColor = "rgba(".concat(value.fillColor.red * 255, ", ").concat(value.fillColor.green * 255, ", ").concat(value.fillColor.blue * 255, ", ").concat(value.fillColor.alpha, ")");
                this.assistCirclesProfile.set(key, new AssistCircle_1.AssistCircle((0, Utils_1.mm2px)(value.centerPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.centerPoint.y, DPI[1]), strokeColor, (0, Utils_1.mm2px)(value.strokeWidth, DPI[1]), fillColor, undefined, (0, Utils_1.mm2px)(value.radius, DPI[1])));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (targetPrimitives_3_1 && !targetPrimitives_3_1.done && (_a = targetPrimitives_3.return)) _a.call(targetPrimitives_3);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    PlaneCanvas.prototype.updateAssistCircleItems = function (targetPrimitives) {
        var e_8, _a;
        var DPI = Constant_1.environment.DPI;
        try {
            for (var targetPrimitives_4 = __values(targetPrimitives), targetPrimitives_4_1 = targetPrimitives_4.next(); !targetPrimitives_4_1.done; targetPrimitives_4_1 = targetPrimitives_4.next()) {
                var _b = __read(targetPrimitives_4_1.value, 2), key = _b[0], value = _b[1];
                if (!this.assistCirclesProfile.has(key)) {
                    continue;
                }
                var primitiveItem = this.assistCirclesProfile.get(key);
                var strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
                var fillColor = "rgba(".concat(value.fillColor.red * 255, ", ").concat(value.fillColor.green * 255, ", ").concat(value.fillColor.blue * 255, ", ").concat(value.fillColor.alpha, ")");
                primitiveItem.centerX = (0, Utils_1.mm2px)(value.centerPoint.x, DPI[0]);
                primitiveItem.centerY = (0, Utils_1.mm2px)(value.centerPoint.y, DPI[0]);
                primitiveItem.strokeColor = strokeColor;
                primitiveItem.strokeWidth = (0, Utils_1.mm2px)(value.strokeWidth, DPI[0]);
                primitiveItem.fillColor = fillColor;
                primitiveItem.strokeColor = "rgba(".concat(value.strokeColor.red * 255, ", ").concat(value.strokeColor.green * 255, ", ").concat(value.strokeColor.blue * 255, ", ").concat(value.strokeColor.alpha, ")");
                primitiveItem.radius = (0, Utils_1.mm2px)(value.radius, DPI[0]);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (targetPrimitives_4_1 && !targetPrimitives_4_1.done && (_a = targetPrimitives_4.return)) _a.call(targetPrimitives_4);
            }
            finally { if (e_8) throw e_8.error; }
        }
    };
    PlaneCanvas.prototype.deleteAssistCircleItems = function (targetIds) {
        var arrTargetIds = Array.from(targetIds);
        for (var i = 0; i < arrTargetIds.length; i++) {
            if (!this.assistCirclesProfile.has(arrTargetIds[i])) {
                continue;
            }
            this.assistCirclesProfile.delete(arrTargetIds[i]);
        }
    };
    PlaneCanvas.prototype.render = function (ctx) {
        var targetProfile = __spreadArray(__spreadArray([], __read(this.linesProfile.values()), false), __read(this.circlesProfile.values()), false);
        var assistProfile = __spreadArray(__spreadArray([], __read(this.assistLinesProfile.values()), false), __read(this.assistCirclesProfile.values()), false);
        for (var i = 0; i < targetProfile.length; i++) {
            var targetProfileItem = targetProfile[i];
            targetProfileItem.render(ctx, this.scene);
        }
        for (var i = 0; i < assistProfile.length; i++) {
            var assistProfileItem = assistProfile[i];
            assistProfileItem.render(ctx, this.scene);
        }
    };
    return PlaneCanvas;
}(Plane_1.Plane));
exports.PlaneCanvas = PlaneCanvas;


/***/ }),

/***/ "./src/engine/canvas/primitives/AssistCircle.ts":
/*!******************************************************!*\
  !*** ./src/engine/canvas/primitives/AssistCircle.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssistCircle = void 0;
var Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
var Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
var AssistCircle = /** @class */ (function () {
    function AssistCircle(centerX, centerY, strokeColor, strokeWidth, fillColor, lineCap, radius) {
        if (strokeColor === void 0) { strokeColor = "rgba(0, 0, 0, 1)"; }
        if (strokeWidth === void 0) { strokeWidth = 1; }
        if (fillColor === void 0) { fillColor = "rgba(0, 0, 0, 0)"; }
        if (lineCap === void 0) { lineCap = 'round'; }
        if (radius === void 0) { radius = 1; }
        this._centerX = centerX;
        this._centerY = centerY;
        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._fillColor = fillColor;
        this._lineCap = lineCap;
        this._radius = radius;
    }
    Object.defineProperty(AssistCircle.prototype, "centerX", {
        get: function () {
            return this._centerX;
        },
        set: function (value) {
            this._centerX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistCircle.prototype, "centerY", {
        get: function () {
            return this._centerY;
        },
        set: function (value) {
            this._centerY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistCircle.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            this._strokeWidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistCircle.prototype, "strokeColor", {
        get: function () {
            return this._strokeColor;
        },
        set: function (value) {
            this._strokeColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistCircle.prototype, "fillColor", {
        get: function () {
            return this._fillColor;
        },
        set: function (value) {
            this._fillColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistCircle.prototype, "lineCap", {
        get: function () {
            return this._lineCap;
        },
        set: function (value) {
            this._lineCap = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistCircle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    AssistCircle.prototype.render = function (ctx, scene) {
        var camera = Camera_1.Camera.getInstance();
        var pointMatrix = new Matrix_1.Matrix(1, 4, [this.centerX, this.centerY, 0, 1]);
        var transformMatrix4 = camera.getSourceMatrix();
        var matrixResult = pointMatrix.multiply(transformMatrix4).data;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.lineCap = this.lineCap;
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.strokeColor;
        ctx.arc(matrixResult[0], matrixResult[1], this.radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.closePath();
    };
    return AssistCircle;
}());
exports.AssistCircle = AssistCircle;


/***/ }),

/***/ "./src/engine/canvas/primitives/AssistLine.ts":
/*!****************************************************!*\
  !*** ./src/engine/canvas/primitives/AssistLine.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssistLine = void 0;
var Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
var Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
var AssistLine = /** @class */ (function () {
    function AssistLine(startX, startY, endX, endY, strokeColor, isSolid, fixedPixelWidth) {
        if (strokeColor === void 0) { strokeColor = "rgba(0, 0, 0, 1)"; }
        if (fixedPixelWidth === void 0) { fixedPixelWidth = 1; }
        this._startX = startX;
        this._startY = startY;
        this._endX = endX;
        this._endY = endY;
        this._isSolid = isSolid;
        this._fixedPixelWidth = fixedPixelWidth;
        this._strokeColor = strokeColor;
    }
    Object.defineProperty(AssistLine.prototype, "startX", {
        get: function () {
            return this._startX;
        },
        set: function (value) {
            this._startX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistLine.prototype, "startY", {
        get: function () {
            return this._startY;
        },
        set: function (value) {
            this._startY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistLine.prototype, "endX", {
        get: function () {
            return this._endX;
        },
        set: function (value) {
            this._endX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistLine.prototype, "endY", {
        get: function () {
            return this._endY;
        },
        set: function (value) {
            this._endY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistLine.prototype, "fixedPixelWidth", {
        get: function () {
            return this._fixedPixelWidth;
        },
        set: function (value) {
            this._fixedPixelWidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistLine.prototype, "strokeColor", {
        get: function () {
            return this._strokeColor;
        },
        set: function (value) {
            this._strokeColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistLine.prototype, "isSolid", {
        get: function () {
            return this._isSolid;
        },
        set: function (value) {
            this._isSolid = value;
        },
        enumerable: false,
        configurable: true
    });
    AssistLine.prototype.render = function (ctx, scene) {
        var camera = Camera_1.Camera.getInstance();
        var pointMatrix = new Matrix_1.Matrix(2, 4, [this.startX, this.startY, 0, 1, this.endX, this.endY, 0, 1]);
        var transformMatrix4 = camera.getSourceMatrix();
        var matrixResult = pointMatrix.multiply(transformMatrix4).data;
        ctx.setLineDash(this.isSolid ? [] : [5, 5]);
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.lineWidth = this.fixedPixelWidth;
        ctx.strokeStyle = this.strokeColor;
        ctx.moveTo(matrixResult[0] - 0.5, matrixResult[1] - 0.5);
        ctx.lineTo(matrixResult[4] - 0.5, matrixResult[5] - 0.5);
        ctx.stroke();
        ctx.closePath();
    };
    return AssistLine;
}());
exports.AssistLine = AssistLine;


/***/ }),

/***/ "./src/engine/canvas/primitives/Circle.ts":
/*!************************************************!*\
  !*** ./src/engine/canvas/primitives/Circle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Circle = void 0;
var Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
var Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
var Circle = /** @class */ (function () {
    function Circle(centerX, centerY, radius, strokeWidth, strokeColor, fillColor, lineCap) {
        if (strokeColor === void 0) { strokeColor = "rgba(0, 0, 0, 1)"; }
        if (fillColor === void 0) { fillColor = "rgba(0, 0, 0, 0)"; }
        if (lineCap === void 0) { lineCap = 'round'; }
        this._centerX = centerX;
        this._centerY = centerY;
        this._radius = radius;
        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._fillColor = fillColor;
        this._lineCap = lineCap;
    }
    Object.defineProperty(Circle.prototype, "centerX", {
        get: function () {
            return this._centerX;
        },
        set: function (value) {
            this._centerX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "centerY", {
        get: function () {
            return this._centerY;
        },
        set: function (value) {
            this._centerY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            this._strokeWidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "strokeColor", {
        get: function () {
            return this._strokeColor;
        },
        set: function (value) {
            this._strokeColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "fillColor", {
        get: function () {
            return this._fillColor;
        },
        set: function (value) {
            this._fillColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "lineCap", {
        get: function () {
            return this._lineCap;
        },
        set: function (value) {
            this._lineCap = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.render = function (ctx, scene) {
        var camera = Camera_1.Camera.getInstance();
        var pointMatrix = new Matrix_1.Matrix(1, 4, [this.centerX, this.centerY, this.radius, 1]);
        var transformMatrix4 = camera.getSourceMatrix();
        var matrixResult = pointMatrix.multiply(transformMatrix4).data;
        var zoomCanvas = camera.getZoomRatio();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.lineCap = this.lineCap;
        ctx.lineWidth = this.strokeWidth * zoomCanvas;
        ctx.strokeStyle = this.strokeColor;
        ctx.arc(matrixResult[0], matrixResult[1], this.radius * zoomCanvas, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.closePath();
    };
    return Circle;
}());
exports.Circle = Circle;


/***/ }),

/***/ "./src/engine/canvas/primitives/Line.ts":
/*!**********************************************!*\
  !*** ./src/engine/canvas/primitives/Line.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Line = void 0;
var Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
var Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
var Line = /** @class */ (function () {
    function Line(startX, startY, endX, endY, strokeWidth, strokeColor, lineCap) {
        if (strokeColor === void 0) { strokeColor = "rgba(0, 0, 0, 1)"; }
        if (lineCap === void 0) { lineCap = 'round'; }
        this._startX = startX;
        this._startY = startY;
        this._endX = endX;
        this._endY = endY;
        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._lineCap = lineCap;
    }
    Object.defineProperty(Line.prototype, "startX", {
        get: function () {
            return this._startX;
        },
        set: function (value) {
            this._startX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "startY", {
        get: function () {
            return this._startY;
        },
        set: function (value) {
            this._startY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "endX", {
        get: function () {
            return this._endX;
        },
        set: function (value) {
            this._endX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "endY", {
        get: function () {
            return this._endY;
        },
        set: function (value) {
            this._endY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            this._strokeWidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "strokeColor", {
        get: function () {
            return this._strokeColor;
        },
        set: function (value) {
            this._strokeColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "lineCap", {
        get: function () {
            return this._lineCap;
        },
        set: function (value) {
            this._lineCap = value;
        },
        enumerable: false,
        configurable: true
    });
    Line.prototype.render = function (ctx, scene) {
        var camera = Camera_1.Camera.getInstance();
        var pointMatrix = new Matrix_1.Matrix(2, 4, [this.startX, this.startY, 0, 1, this.endX, this.endY, 0, 1]);
        var transformMatrix4 = camera.getSourceMatrix();
        var matrixResult = pointMatrix.multiply(transformMatrix4).data;
        var zoomCanvas = camera.getZoomRatio();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.lineCap = this.lineCap;
        ctx.lineWidth = this.strokeWidth * zoomCanvas;
        ctx.strokeStyle = this.strokeColor;
        ctx.moveTo(matrixResult[0] - 0.5, matrixResult[1] - 0.5);
        ctx.lineTo(matrixResult[4] - 0.5, matrixResult[5] - 0.5);
        ctx.stroke();
        ctx.closePath();
    };
    return Line;
}());
exports.Line = Line;


/***/ }),

/***/ "./src/engine/common/Camera.ts":
/*!*************************************!*\
  !*** ./src/engine/common/Camera.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Camera = void 0;
var Matrix4_1 = __webpack_require__(/*! ../../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
var Vector3_1 = __webpack_require__(/*! ../../geometry/Vector3 */ "./src/geometry/Vector3.ts");
var Camera = /** @class */ (function () {
    function Camera(width, height) {
        if (width === void 0) { width = 1920; }
        if (height === void 0) { height = 1080; }
        this._width = width;
        this._height = height;
        this._isNeedUpdate = false;
        this._matrix4 = Matrix4_1.Matrix4.ORIGIN;
        this._renderMatrix4 = Matrix4_1.Matrix4.ORIGIN;
        this._projection = Matrix4_1.Matrix4.ORIGIN;
        this._pxRatio = 0;
        this._origin = Vector3_1.Vector3.ORIGIN;
    }
    Camera.getInstance = function () {
        if (Camera.thisInstance === undefined) {
            Camera.thisInstance = new Camera(1920, 1080);
        }
        return Camera.thisInstance;
    };
    Object.defineProperty(Camera.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "isNeedUpdate", {
        get: function () {
            return this._isNeedUpdate;
        },
        set: function (value) {
            this._isNeedUpdate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "matrix4", {
        get: function () {
            return this._matrix4;
        },
        set: function (value) {
            this._matrix4 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "renderMatrix4", {
        get: function () {
            return this._renderMatrix4;
        },
        set: function (value) {
            this._renderMatrix4 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "projection", {
        get: function () {
            return this._projection;
        },
        set: function (value) {
            this._projection = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "pxRatio", {
        get: function () {
            return this._pxRatio;
        },
        set: function (value) {
            this._pxRatio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        set: function (value) {
            this._origin = value;
        },
        enumerable: false,
        configurable: true
    });
    Camera.prototype.refreshByVector3 = function (vector3) {
        this.matrix4 = this.matrix4.translateByVector3(vector3);
        this._isNeedUpdate = true;
    };
    // public getRenderMatrix(): Matrix4 {
    // 	this.updateViewMatrix()
    // 	return this.renderMatrix4
    // }
    // public getPxRatio(): number {
    // 	this.updateViewMatrix()
    // 	return this.pxRatio
    // }
    // public getProjection(): Matrix4 {
    // 	this.updateViewMatrix()
    // 	return this.projection
    // }
    Camera.prototype.getSourceMatrix = function () {
        this.updateViewMatrix();
        return this.matrix4;
    };
    Camera.prototype.getZoomRatio = function () {
        return Math.sqrt(this.matrix4.data[0] * this.matrix4.data[0] + this.matrix4.data[1] * this.matrix4.data[1]);
    };
    Camera.prototype.getOrigin = function () {
        return new Vector3_1.Vector3(this.matrix4.data[12], this.matrix4.data[13], 0);
    };
    // public getViewRenderMatrixData(): Array<ReadonlyArray<number>> {
    // 	this.updateViewMatrix()
    // 	const datas: Array<ReadonlyArray<number>> = []
    // 	datas.push(this.renderMatrix4.data)
    // 	return datas
    // }
    Camera.prototype.updateViewMatrix = function () {
        if (this.isNeedUpdate) {
            var near = -1;
            var far = 1000;
            var dist = near - far;
            this.projection = new Matrix4_1.Matrix4([5 / this.width, 0, 0, 0, 0, 5 / this.height, 0, 0, 0, 0, 5 / dist, 0, 0, 0, 0, 1]);
            this.renderMatrix4 = this.matrix4.multiply4(this.projection);
            var origin_1 = Vector3_1.Vector3.ORIGIN.multiplyMatrix4(this.renderMatrix4);
            if (this.width > this.height) {
                var vert = new Vector3_1.Vector3(0, 1, 0).multiplyMatrix4(this.renderMatrix4);
                this.pxRatio = 2 / this.height / origin_1.sub(vert).length;
            }
            else {
                var hori = new Vector3_1.Vector3(1, 0, 0).multiplyMatrix4(this.renderMatrix4);
                this.pxRatio = 2 / this.width / origin_1.sub(hori).length;
            }
            this.isNeedUpdate = false;
        }
    };
    return Camera;
}());
exports.Camera = Camera;


/***/ }),

/***/ "./src/engine/common/Grid.ts":
/*!***********************************!*\
  !*** ./src/engine/common/Grid.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gird = void 0;
var Gird = /** @class */ (function () {
    function Gird() {
    }
    return Gird;
}());
exports.Gird = Gird;


/***/ }),

/***/ "./src/engine/common/GridSetting.ts":
/*!******************************************!*\
  !*** ./src/engine/common/GridSetting.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GridSetting = void 0;
var SystemConfig_1 = __webpack_require__(/*! ../../controller/SystemConfig */ "./src/controller/SystemConfig.ts");
var Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
var GridSetting = /** @class */ (function () {
    function GridSetting() {
        this._gridColor = SystemConfig_1.SystemConfig.getInstance().isDarkTheme ? Color_1.Color.WHITE : Color_1.Color.BLACK;
        this._gridTransparency = 0.5;
        this._axisColor = SystemConfig_1.SystemConfig.getInstance().isDarkTheme ? Color_1.Color.WHITE : Color_1.Color.BLACK;
        this._axisTransparency = 0.5;
        this._stepX = 0.5;
        this._stepY = 0.5;
    }
    GridSetting.getInstance = function () {
        if (GridSetting.thisInstance === undefined) {
            GridSetting.thisInstance = new GridSetting();
        }
        return GridSetting.thisInstance;
    };
    Object.defineProperty(GridSetting.prototype, "gridColor", {
        get: function () {
            return this._gridColor;
        },
        set: function (value) {
            this._gridColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridSetting.prototype, "gridTransparency", {
        get: function () {
            return this._gridTransparency;
        },
        set: function (value) {
            this._gridTransparency = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridSetting.prototype, "axisColor", {
        get: function () {
            return this._axisColor;
        },
        set: function (value) {
            this._axisColor = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridSetting.prototype, "axisTransparency", {
        get: function () {
            return this._axisTransparency;
        },
        set: function (value) {
            this._axisTransparency = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridSetting.prototype, "stepX", {
        get: function () {
            return this._stepX;
        },
        set: function (value) {
            this._stepX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GridSetting.prototype, "stepY", {
        get: function () {
            return this._stepY;
        },
        set: function (value) {
            this._stepY = value;
        },
        enumerable: false,
        configurable: true
    });
    return GridSetting;
}());
exports.GridSetting = GridSetting;


/***/ }),

/***/ "./src/engine/common/Plane.ts":
/*!************************************!*\
  !*** ./src/engine/common/Plane.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plane = void 0;
var Plane = /** @class */ (function () {
    function Plane(sceneInstance, planeId) {
        this._scene = sceneInstance;
        this._planeId = planeId;
    }
    Object.defineProperty(Plane.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "planeId", {
        get: function () {
            return this._planeId;
        },
        enumerable: false,
        configurable: true
    });
    return Plane;
}());
exports.Plane = Plane;


/***/ }),

/***/ "./src/engine/common/Renderer.ts":
/*!***************************************!*\
  !*** ./src/engine/common/Renderer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
var Vector3_1 = __webpack_require__(/*! ../../geometry/Vector3 */ "./src/geometry/Vector3.ts");
var Renderer = /** @class */ (function () {
    function Renderer(canvasElement) {
        this._canvasElement = canvasElement;
        this._origin = new Vector3_1.Vector3(0, 0, 0);
        this._config = {};
    }
    Object.defineProperty(Renderer.prototype, "canvasElement", {
        get: function () {
            return this._canvasElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "ctx", {
        get: function () {
            return this._ctx;
        },
        set: function (value) {
            this._ctx = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        set: function (value) {
            this._origin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "width", {
        get: function () {
            return this.canvasElement.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "height", {
        get: function () {
            return this.canvasElement.height;
        },
        enumerable: false,
        configurable: true
    });
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/engine/common/Scene.ts":
/*!************************************!*\
  !*** ./src/engine/common/Scene.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
var Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
var Scene = /** @class */ (function () {
    function Scene() {
        /* ... */
        this._canvasBgColor = new Color_1.Color(0, 0, 0, 1);
    }
    Object.defineProperty(Scene.prototype, "renderer", {
        get: function () {
            return this._renderer;
        },
        set: function (value) {
            this._renderer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "canvasBgColor", {
        get: function () {
            return this._canvasBgColor;
        },
        set: function (value) {
            this._canvasBgColor = value;
        },
        enumerable: false,
        configurable: true
    });
    return Scene;
}());
exports.Scene = Scene;


/***/ }),

/***/ "./src/engine/common/createScene.ts":
/*!******************************************!*\
  !*** ./src/engine/common/createScene.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createScene = exports.EEngineType = void 0;
var SceneCanvas_1 = __webpack_require__(/*! ../canvas/SceneCanvas */ "./src/engine/canvas/SceneCanvas.ts");
var Camera_1 = __webpack_require__(/*! ./Camera */ "./src/engine/common/Camera.ts");
var GridSetting_1 = __webpack_require__(/*! ./GridSetting */ "./src/engine/common/GridSetting.ts");
var EEngineType;
(function (EEngineType) {
    EEngineType["CANVAS"] = "CANVAS";
})(EEngineType = exports.EEngineType || (exports.EEngineType = {}));
function createScene(type, canvasElement) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Camera_1.Camera.getInstance();
            GridSetting_1.GridSetting.getInstance();
            if (type === EEngineType.CANVAS) {
                return [2 /*return*/, new SceneCanvas_1.SceneCanvas(canvasElement)];
            }
            return [2 /*return*/, null];
        });
    });
}
exports.createScene = createScene;


/***/ }),

/***/ "./src/geometry/Angles.ts":
/*!********************************!*\
  !*** ./src/geometry/Angles.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Angles = void 0;
var Angles = /** @class */ (function () {
    function Angles() {
    }
    Angles.radianToDegree = function (radian) {
        return (radian * 180) / Math.PI;
    };
    Angles.degreeToRadian = function (degree) {
        return (degree / 180) * Math.PI;
    };
    Angles.PI_2 = Math.PI / 2;
    Angles.PI_4 = Math.PI / 4;
    return Angles;
}());
exports.Angles = Angles;


/***/ }),

/***/ "./src/geometry/BBox2.ts":
/*!*******************************!*\
  !*** ./src/geometry/BBox2.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BBox2 = void 0;
var Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./src/geometry/Vector2.ts");
var BBox2 = /** @class */ (function () {
    function BBox2(minX, minY, maxX, maxY) {
        this._data = new Float64Array(4);
        if (minX > maxX) {
            minX = [maxX, (maxX = minX)][0];
        }
        if (minY > maxY) {
            minY = [maxY, (maxY = minY)][0];
        }
        this._minX = minX;
        this._minY = minY;
        this._maxX = maxX;
        this._maxY = maxY;
    }
    BBox2.isValid = function (bbox2) {
        return Number.isFinite(bbox2.minX) && Number.isFinite(bbox2.minY) && Number.isFinite(bbox2.maxX) && Number.isFinite(bbox2.maxY);
    };
    Object.defineProperty(BBox2.prototype, "minX", {
        get: function () {
            return this._minX;
        },
        set: function (value) {
            this._minX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "minY", {
        get: function () {
            return this._minY;
        },
        set: function (value) {
            this._minX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "maxX", {
        get: function () {
            return this._maxX;
        },
        set: function (value) {
            this._maxX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "maxY", {
        get: function () {
            return this._maxY;
        },
        set: function (value) {
            this._maxY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "width", {
        get: function () {
            return this.maxX - this.minX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "height", {
        get: function () {
            return this.maxY - this.minY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "UpperLeftPoint", {
        get: function () {
            return new Vector2_1.Vector2(this.minX, this.minY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "UpperRightPoint", {
        get: function () {
            return new Vector2_1.Vector2(this.maxX, this.minY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "LowerLeftPoint", {
        get: function () {
            return new Vector2_1.Vector2(this.minX, this.maxY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "LowerRightPoint", {
        get: function () {
            return new Vector2_1.Vector2(this.maxX, this.maxY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "CenterPoint", {
        get: function () {
            return new Vector2_1.Vector2(this.maxX - (this.maxX - this.minX) / 2, this.maxY - (this.maxY - this.minY) / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BBox2.prototype, "data", {
        get: function () {
            this._data[0] = this.minX;
            this._data[1] = this.minY;
            this._data[2] = this.maxX;
            this._data[3] = this.maxY;
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 判断当前 BBox2 实例是否包裹了传入的 vector2
     */
    BBox2.prototype.isContainsPoint = function (vector2) {
        return this.isContainsX(vector2.x) && this.isContainsY(vector2.y);
    };
    /**
     * 判断当前 BBox2 实例是否包裹了传入的 bbox2
     */
    BBox2.prototype.isConatinsBBox2 = function (bbox2) {
        return this.maxX >= bbox2.maxX && this.minX <= bbox2.minX && this.maxY >= bbox2.maxY && this.minY <= bbox2.minY;
    };
    /**
     * 判断传入的 bbox2 是否包裹了当前 BBox2 实例
     */
    BBox2.prototype.isBeWrappedByBBox2 = function (bbox2) {
        return this.minX >= bbox2.minX && this.maxX <= bbox2.maxX && this.minY >= bbox2.minY && this.maxY <= bbox2.maxY;
    };
    /**
     * 判断当前 BBox2 实例与传入的 bbox2 边界范围是否相等
     */
    BBox2.prototype.equals = function (bbox2) {
        if (this.minX === bbox2.minX && this.minY === bbox2.minY && this.maxX === bbox2.maxX && this.maxY === bbox2.maxY) {
            return true;
        }
        return false;
    };
    /**
     * 判断当前 BBox2 实例与传入的 bbox2 边界范围是否交叉
     */
    BBox2.prototype.isIntersect = function (bbox2) {
        var _minX = Math.max(this.minX, bbox2.minX);
        var _maxX = Math.max(this.maxX, bbox2.maxX);
        if (_minX > _maxX) {
            return false;
        }
        var _minY = Math.max(this.minY, bbox2.minY);
        var _maxY = Math.max(this.maxY, bbox2.maxY);
        if (_minY > _maxY) {
            return false;
        }
        return true;
    };
    BBox2.prototype.reset = function () {
        this.minX = Number.POSITIVE_INFINITY;
        this.maxX = Number.NEGATIVE_INFINITY;
        this.minY = Number.POSITIVE_INFINITY;
        this.maxY = Number.NEGATIVE_INFINITY;
    };
    BBox2.prototype.toString = function () {
        return "BBox2 (".concat(this.minX, ", ").concat(this.maxX, ", ").concat(this.minY, ", ").concat(this.maxY, ")");
    };
    BBox2.prototype.isContainsX = function (x) {
        return x >= this.minX && x <= this.maxX;
    };
    BBox2.prototype.isContainsY = function (y) {
        return y >= this.minY && y <= this.maxY;
    };
    return BBox2;
}());
exports.BBox2 = BBox2;


/***/ }),

/***/ "./src/geometry/Decimals.ts":
/*!**********************************!*\
  !*** ./src/geometry/Decimals.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Decimals = void 0;
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var Decimals = /** @class */ (function () {
    function Decimals() {
    }
    Decimals.equalsFloat = function (num1, num2, places) {
        if (places === void 0) { places = 0; }
        var delta = Math.abs(num1 - num2);
        if (places > 5 && delta > 1e-5) {
            return false;
        }
        if (isNaN(places) && delta > 1e-8) {
            return false;
        }
        if (delta < 1e-13) {
            return true;
        }
        var min = Math.min(Decimals.getDecimalPlaces(num1), Decimals.getDecimalPlaces(num2));
        if (min < 10) {
            min = 10;
        }
        if (!isNaN(places)) {
            min = Math.min(min, places);
        }
        return (0, Utils_1.toFixed)(num1, min) === (0, Utils_1.toFixed)(num2, min);
    };
    Decimals.getDecimalPlaces = function (num) {
        var di = 0;
        var dl = 0;
        if (num > 0) {
            di = num - Math.floor(num);
        }
        else {
            di = num - Math.ceil(num);
        }
        dl = String(di).length;
        if (dl > 2) {
            return dl - 2;
        }
        return 0;
    };
    return Decimals;
}());
exports.Decimals = Decimals;


/***/ }),

/***/ "./src/geometry/DoubleKit.ts":
/*!***********************************!*\
  !*** ./src/geometry/DoubleKit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DoubleKit = void 0;
var DoubleKit = /** @class */ (function () {
    function DoubleKit() {
    }
    DoubleKit.regular = function (dis) {
        if (dis === void 0) { dis = 0; }
        return Math.round(dis * this.precision) / this.precision;
    };
    DoubleKit.eq = function (a, b) {
        return Math.abs(a - b) <= this.eps;
    };
    DoubleKit.neq = function (a, b) {
        return Math.abs(a - b) > this.eps;
    };
    DoubleKit.less = function (a, b) {
        return a - b < -this.eps;
    };
    DoubleKit.lesseq = function (a, b) {
        return a - b < this.eps;
    };
    DoubleKit.greater = function (a, b) {
        return a - b > this.eps;
    };
    DoubleKit.greatereq = function (a, b) {
        return a - b > -this.eps;
    };
    DoubleKit.sqrt = function (dis) {
        if (Math.abs(dis) <= 1e-10) {
            return 0;
        }
        return Math.sqrt(dis);
    };
    DoubleKit.sortAsc = function (a, b) {
        return a - b;
    };
    DoubleKit.sortDesc = function (a, b) {
        return b - a;
    };
    DoubleKit.eps = 1e-8;
    DoubleKit.precision = 1e8;
    return DoubleKit;
}());
exports.DoubleKit = DoubleKit;


/***/ }),

/***/ "./src/geometry/Doublekit.ts":
/*!***********************************!*\
  !*** ./src/geometry/Doublekit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DoubleKit = void 0;
var DoubleKit = /** @class */ (function () {
    function DoubleKit() {
    }
    DoubleKit.regular = function (dis) {
        if (dis === void 0) { dis = 0; }
        return Math.round(dis * this.precision) / this.precision;
    };
    DoubleKit.eq = function (a, b) {
        return Math.abs(a - b) <= this.eps;
    };
    DoubleKit.neq = function (a, b) {
        return Math.abs(a - b) > this.eps;
    };
    DoubleKit.less = function (a, b) {
        return a - b < -this.eps;
    };
    DoubleKit.lesseq = function (a, b) {
        return a - b < this.eps;
    };
    DoubleKit.greater = function (a, b) {
        return a - b > this.eps;
    };
    DoubleKit.greatereq = function (a, b) {
        return a - b > -this.eps;
    };
    DoubleKit.sqrt = function (dis) {
        if (Math.abs(dis) <= 1e-10) {
            return 0;
        }
        return Math.sqrt(dis);
    };
    DoubleKit.sortAsc = function (a, b) {
        return a - b;
    };
    DoubleKit.sortDesc = function (a, b) {
        return b - a;
    };
    DoubleKit.eps = 1e-8;
    DoubleKit.precision = 1e8;
    return DoubleKit;
}());
exports.DoubleKit = DoubleKit;


/***/ }),

/***/ "./src/geometry/LinearPrimitive.ts":
/*!*****************************************!*\
  !*** ./src/geometry/LinearPrimitive.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinearPrimitive = void 0;
var LinearPrimitive = /** @class */ (function () {
    function LinearPrimitive() {
    }
    return LinearPrimitive;
}());
exports.LinearPrimitive = LinearPrimitive;


/***/ }),

/***/ "./src/geometry/Matrix.ts":
/*!********************************!*\
  !*** ./src/geometry/Matrix.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix = void 0;
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var Matrix = /** @class */ (function () {
    function Matrix(m, n, data) {
        /**
         * 矩阵行数
         */
        this._m = m;
        /**
         * 矩阵列数
         */
        this._n = n;
        var cnt = this._m * this._n;
        this._data = data;
    }
    /**
     * 矩阵乘法运算
     * 		当矩阵 A 的列数 (colLen) 于矩阵 B 的行数 (rowLen) 时相同时, A 与 B 可以相乘
     *          [A列等于B行可相乘]
     * 		矩阵 C 的行数等于矩阵 A 的行数, C 的列数等于 B 的列数
     * 		A =
     * 			1  2  3
     *    		4  5  6
     * 		B =
     * 			8  5
     * 			4  2
     * 			2  6
     * 		相乘得
     * 		C = A*B =
     * 			1 * 8 + 2 * 4 + 3 * 2 = 22    1 * 5 + 2 * 2 + 3 * 6 = 27
     * 			4 * 8 + 5 * 4 + 6 * 2 = 64    4 * 5 + 5 * 2 + 6 * 6 = 66
     */
    /**
     * 计算矩阵 A 与矩阵 B 的乘积
     * 		mA - 矩阵 A 的行数
     * 		nA - 矩阵 A 的列数
     * 		mB - 矩阵 B 的行数
     * 		nB - 矩阵 B 的列数
     */
    Matrix.matrixMul = function (mA, nA, mB, nB, A, B) {
        if (nA !== mB) {
            throw new Error('does not satisfy the condition of matrix multiplication: nA === mB');
        }
        var result = new Array(mA * nB);
        var ri = 0;
        var ai = 0;
        /**
         * 遍历矩阵 A 的行
         */
        for (var riA = 0; riA < mA; riA++) {
            /**
             * 遍历矩阵 B 的列
             */
            for (var ciB = 0; ciB < nB; ciB++) {
                var bi = ciB;
                var sum = 0;
                /**
                 * 遍历矩阵 A 的列
                 */
                for (var ciA = 0; ciA < nA; ciA++) {
                    sum += A[ai + ciA] * B[bi];
                    bi += nB;
                }
                result[ri++] = sum;
            }
            ai += nA;
        }
        return result;
    };
    /**
     * 依据某个数值在矩阵中的"坐标"参数, 获取其在数组中的真实索引
     *      例如
     *          A =
     * 			    1  2  3
     *    		    4  5  6
     *      需要获取矩阵 A 中第 2 行第 2 列的项(item = 5)在数组中的索引
     *      即 index = Matrix.matrixAt(3, 1, 1)
     */
    Matrix.matrixAt = function (colLen, rowIndex, columnIndex) {
        return colLen * rowIndex + columnIndex;
    };
    Matrix.getMatrixRank = function (matrixArr, rowLen, colLen) {
        var copyMatrixArr = matrixArr.slice(0);
        var rank = Math.min(rowLen, colLen);
        for (var ri = 0; ri < rowLen; ri++) {
            if (copyMatrixArr[Matrix.matrixAt(colLen, ri, ri)] === 0) {
                var tmp = new Array(colLen);
                var ci = 0;
                for (ci = ri; ci < rowLen; ci++) {
                    if (copyMatrixArr[Matrix.matrixAt(colLen, ci, ri)] !== 0) {
                        (0, Utils_1.arrayCopy)(copyMatrixArr, Matrix.matrixAt(colLen, ci, 0), tmp, 0, colLen);
                        (0, Utils_1.arrayCopy)(copyMatrixArr, Matrix.matrixAt(colLen, ri, 0), copyMatrixArr, Matrix.matrixAt(colLen, ci, 0), colLen);
                        (0, Utils_1.arrayCopy)(tmp, 0, copyMatrixArr, Matrix.matrixAt(colLen, ri, 0), colLen);
                        break;
                    }
                }
                if (ci >= rowLen) {
                    rank -= 1;
                }
            }
            if (rank < rowLen) {
                continue;
            }
            for (var rii = 0; rii < rowLen; rii++) {
                if (rii === ri) {
                    continue;
                }
                var multiplier = copyMatrixArr[Matrix.matrixAt(colLen, rii, ri)] / copyMatrixArr[Matrix.matrixAt(colLen, ri, ri)];
                for (var cii = 0; cii < colLen; cii++) {
                    copyMatrixArr[Matrix.matrixAt(colLen, rii, cii)] -= copyMatrixArr[Matrix.matrixAt(colLen, ri, cii)] * multiplier;
                }
            }
        }
        return {
            rank: rank,
            updatedMatrixArr: copyMatrixArr,
        };
    };
    Object.defineProperty(Matrix.prototype, "m", {
        get: function () {
            return this._m;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "n", {
        get: function () {
            return this._n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 将当前矩阵与矩阵 B 相乘
     */
    Matrix.prototype.multiply = function (B) {
        var resultMatrixArr = Matrix.matrixMul(this.m, this.n, B.m, B.n, this.data, B.data);
        return new Matrix(this.m, B.n, resultMatrixArr);
    };
    /**
     * 计算当前矩阵的秩
     */
    Matrix.prototype.getMatrixRank = function () {
        return Matrix.getMatrixRank(this.data, this.m, this.n).rank;
    };
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    Matrix.prototype.getInverseMatrix = function () {
        var matrixArr = this.data.slice(0);
        if (this.m !== this.n) {
            throw new Error("getInverseMatrix error: this.m !== this.n");
        }
        var expandColLen = this.n * 2;
        var newMatrixArr = new Array(this.m * this.n).fill(0);
        var expandMatrixArr = this.initExpandMatrix(matrixArr);
        var _a = Matrix.getMatrixRank(expandMatrixArr, this.m, expandColLen), rank = _a.rank, updatedMatrixArr = _a.updatedMatrixArr;
        expandMatrixArr = updatedMatrixArr;
        if (rank !== this.m) {
            throw new Error("getInverseMatrix error: rank !== this.m");
        }
        expandMatrixArr = this.inverseMatrix(expandMatrixArr, this.m, expandColLen);
        for (var ri = 0; ri < this.m; ri++) {
            for (var ci = this.n; ci < expandColLen; ci++) {
                newMatrixArr[Matrix.matrixAt(this.n, ri, ci - this.n)] = expandMatrixArr[Matrix.matrixAt(expandColLen, ri, ci)];
            }
        }
        return new Matrix(this.m, this.n, newMatrixArr.slice(0));
    };
    Matrix.prototype.hashCode = function () {
        var e_1, _a;
        var sum = 0;
        try {
            for (var _b = __values(this.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                var num = _c.value;
                sum += num;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return sum;
    };
    /**
     * 以平铺模式生成矩阵字符串值
     */
    Matrix.prototype.toString = function () {
        var b = [];
        b.push("Matrix (");
        for (var i = 0; i < this.data.length; i++) {
            b.push(String(this.data[i]));
            if (i >= this.data.length - 1) {
                continue;
            }
            b.push(', ');
        }
        b.push(")");
        return b.join('');
    };
    /**
     * 以格式化模式生成矩阵字符串值
     */
    Matrix.prototype.toStringFormat = function () {
        var b = [];
        b.push("Matrix (");
        b.push(String(this.m));
        b.push(" x ");
        b.push(String(this.n));
        b.push(")");
        var idx = 0;
        for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
                var d = String(this.data[idx++]);
                if (j === 0) {
                    b.push("\n");
                    b.push("\t");
                    b.push(d);
                    continue;
                }
                b.push(', ');
                b.push(d);
            }
        }
        return b.join('');
    };
    /**
     * 矩阵转置
     */
    Matrix.prototype.transpose = function () {
        var colLen = this.n;
        var rowLen = this.m;
        var transposeArr = [];
        for (var ci = 0; ci <= colLen - 1; ci++) {
            for (var ri = 0; ri <= rowLen - 1; ri++) {
                var index = ci + ri * colLen;
                transposeArr.push(this.data[index]);
            }
        }
        return new Matrix(this.n, this.m, transposeArr);
    };
    Matrix.prototype.initExpandMatrix = function (matrixArr) {
        var rowLen = this.m;
        var colLen = this.n;
        var expandColLen = this.n * 2;
        var expandMatrixArr = new Array(rowLen * expandColLen);
        for (var ri = 0; ri < rowLen; ri++) {
            for (var ci = 0; ci < expandColLen; ci++) {
                if (ci < colLen) {
                    expandMatrixArr[Matrix.matrixAt(expandColLen, ri, ci)] = matrixArr[Matrix.matrixAt(colLen, ri, ci)];
                    continue;
                }
                if (ci === rowLen + ri) {
                    expandMatrixArr[Matrix.matrixAt(expandColLen, ri, ci)] = 1;
                    continue;
                }
                expandMatrixArr[Matrix.matrixAt(expandColLen, ri, ci)] = 0;
            }
        }
        return expandMatrixArr;
    };
    Matrix.prototype.inverseMatrix = function (expandMatrixArr, rowLen, colLen) {
        var copyExpandMatrixArr = expandMatrixArr.slice(0);
        for (var ri = 0; ri < rowLen; ri++) {
            var firstItem = copyExpandMatrixArr[Matrix.matrixAt(colLen, ri, ri)];
            for (var ci = 0; ci < colLen; ci++) {
                copyExpandMatrixArr[Matrix.matrixAt(colLen, ri, ci)] /= firstItem;
            }
        }
        return copyExpandMatrixArr;
    };
    return Matrix;
}());
exports.Matrix = Matrix;


/***/ }),

/***/ "./src/geometry/Matrix3.ts":
/*!*********************************!*\
  !*** ./src/geometry/Matrix3.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix3 = void 0;
var Matrix_1 = __webpack_require__(/*! ./Matrix */ "./src/geometry/Matrix.ts");
var MATRIX3_ORIGIN_DATA = [1, 0, 0, 0, 1, 0, 0, 0, 1];
var Matrix3 = /** @class */ (function (_super) {
    __extends(Matrix3, _super);
    function Matrix3(data) {
        if (data === void 0) { data = MATRIX3_ORIGIN_DATA; }
        var _this = _super.call(this, 3, 3, data) || this;
        var a = _this.data[0];
        var b = _this.data[3];
        var d = _this.data[1];
        var e = _this.data[4];
        _this._iScale = Math.sqrt(a * a + d * d);
        _this._jScale = Math.sqrt(b * b + e * e);
        return _this;
    }
    /**
     * 平移矩阵(坐标)
     */
    Matrix3.createTranslateMatrix3ByCoordinate = function (x, y) {
        /**
         * 转置前
         * 		[1, 0, x, 0, 1, y, 0, 0, 1]
         */
        return new Matrix3([1, 0, 0, 0, 1, 0, x, y, 1]);
    };
    /**
     * 旋转矩阵(弧度)
     */
    Matrix3.createRotateZMatrix3ByRadian = function (radian) {
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        /**
         * 转置前
         * 		[cos, -sin, 0, sin, cos, 0, 0, 0, 1]
         */
        return new Matrix3([cos, sin, 0, -sin, cos, 0, 0, 0, 1]);
    };
    /**
     * 缩放矩阵(比例)
     */
    Matrix3.createScaleMatrix3ByRatio = function (ratio) {
        /**
         * 转置前
         * 		[ratio, 0, 0, 0, ratio, 0, 0, 0, 1]
         */
        return new Matrix3([ratio, 0, 0, 0, ratio, 0, 0, 0, 1]);
    };
    /**
     * 缩放矩阵(坐标)
     */
    Matrix3.createScaleMatrix3ByCoordinate = function (x, y) {
        /**
         * 转置前
         * 		[x, 0, 0, 0, y, 0, 0, 0, 1]
         */
        return new Matrix3([x, 0, 0, 0, y, 0, 0, 0, 1]);
    };
    Object.defineProperty(Matrix3.prototype, "iScale", {
        get: function () {
            return this._iScale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix3.prototype, "jScale", {
        get: function () {
            return this._jScale;
        },
        enumerable: false,
        configurable: true
    });
    Matrix3.prototype.multiply3 = function (matrix3) {
        return new Matrix3(Matrix_1.Matrix.matrixMul(3, 3, 3, 3, this.data, matrix3.data));
    };
    /**
     * 平移变换
     */
    Matrix3.prototype.translateByVector2 = function (vector2) {
        return this.multiply3(Matrix3.createTranslateMatrix3ByCoordinate(vector2.x, vector2.y));
    };
    /**
     * 绕轴旋转变换
     */
    Matrix3.prototype.rotateZByRadian = function (radian) {
        return this.multiply3(Matrix3.createRotateZMatrix3ByRadian(radian));
    };
    /**
     * 缩放变换
     */
    Matrix3.prototype.scaleByRatio = function (ratio) {
        return this.multiply3(Matrix3.createScaleMatrix3ByRatio(ratio));
    };
    Matrix3.prototype.scaleByVector2 = function (vector2) {
        return this.multiply3(Matrix3.createScaleMatrix3ByCoordinate(vector2.x, vector2.y));
    };
    Matrix3.prototype.det = function () {
        return this.data[0] * this.data[4] - this.data[3] * this.data[1];
    };
    Matrix3.prototype.isMirrored = function () {
        return this.det() < 0;
    };
    /**
     * 矩阵转置
     */
    Matrix3.prototype.transpose = function () {
        return new Matrix3(_super.prototype.transpose.call(this).data);
    };
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    Matrix3.prototype.getInverseMatrix = function () {
        return new Matrix3(_super.prototype.getInverseMatrix.call(this).data);
    };
    Matrix3.ORIGIN = new Matrix3();
    return Matrix3;
}(Matrix_1.Matrix));
exports.Matrix3 = Matrix3;


/***/ }),

/***/ "./src/geometry/Matrix4.ts":
/*!*********************************!*\
  !*** ./src/geometry/Matrix4.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix4 = void 0;
var Matrix_1 = __webpack_require__(/*! ./Matrix */ "./src/geometry/Matrix.ts");
var Matrix3_1 = __webpack_require__(/*! ./Matrix3 */ "./src/geometry/Matrix3.ts");
var Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./src/geometry/Vector2.ts");
var Vector3_1 = __webpack_require__(/*! ./Vector3 */ "./src/geometry/Vector3.ts");
var MATRIX4_ORIGIN_DATA = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var Matrix4 = /** @class */ (function (_super) {
    __extends(Matrix4, _super);
    function Matrix4(data) {
        if (data === void 0) { data = MATRIX4_ORIGIN_DATA; }
        return _super.call(this, 4, 4, data) || this;
    }
    /**
     * 平移矩阵(坐标)
     */
    Matrix4.createTranslateMatrix4ByCoordinate = function (x, y, z) {
        /**
         * 转置前
         * 		[1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1]
         */
        return new Matrix4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
    };
    /**
     * 旋转矩阵(弧度)
     */
    Matrix4.createRotateXMatrix4ByRadian = function (radian) {
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        /**
         * 转置前
         * 		[1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1]
         */
        return new Matrix4([1, 0, 0, 0, 0, cos, sin, 0, 0, -sin, cos, 0, 0, 0, 1]);
    };
    Matrix4.createRotateYMatrix4ByRadian = function (radian) {
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        /**
         * 转置前
         * 		[cos, 0, sin, 0, 0, 1, 0, 0, -sin, 0, cos, 0, 0, 0, 0, 1]
         */
        return new Matrix4([cos, 0, -sin, 0, 0, 1, 0, 0, sin, 0, cos, 0, 0, 0, 0, 1]);
    };
    Matrix4.createRotateZMatrix4ByRadian = function (radian) {
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        /**
         * 转置前
         * 		[cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
         */
        return new Matrix4([cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    };
    /**
     * 缩放矩阵(坐标)
     */
    Matrix4.createScaleMatrix4ByCoordinate = function (x, y, z) {
        /**
         * 转置前
         * 		[x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]
         */
        return new Matrix4([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
    };
    /**
     * 翻转矩阵
     */
    Matrix4.createFlipXMatrix4 = function () {
        /**
         * 转置前
         * 		[1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
         */
        return new Matrix4([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    };
    Matrix4.createFlipYMatrix4 = function () {
        /**
         * 转置前
         * 		[-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
         */
        return new Matrix4([-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    };
    Matrix4.matrix4RotateZByRadianForPoint = function (radian, centerPoint) {
        if (centerPoint.equalsWithPoint(Vector2_1.Vector2.ORIGIN)) {
            return Matrix4.createRotateZMatrix4ByRadian(radian);
        }
        return Matrix4.createTranslateMatrix4ByCoordinate(-centerPoint.x, -centerPoint.y, 0)
            .rotateZByRadian(radian)
            .translateByVector3(new Vector3_1.Vector3(centerPoint.x, centerPoint.y, 0));
    };
    Matrix4.getMatrix4 = function (startTranslate, endTranslate, radian, scaleX) {
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        var x = scaleX * (startTranslate.x * cos - startTranslate.y * sin) + endTranslate.x;
        var y = startTranslate.x * sin + startTranslate.y * cos + endTranslate.y;
        var data = [scaleX * cos, sin, 0, 0, -sin * scaleX, cos, 0, 0, 0, 0, 1, 0, x, y, 0, 1];
        return new Matrix4(data);
    };
    Matrix4.prototype.multiply4 = function (matrix4) {
        return new Matrix4(Matrix_1.Matrix.matrixMul(4, 4, 4, 4, this.data, matrix4.data));
    };
    /**
     * 平移变换
     */
    Matrix4.prototype.translateByVector3 = function (vector3) {
        return this.multiply4(Matrix4.createTranslateMatrix4ByCoordinate(vector3.x, vector3.y, vector3.z));
    };
    /**
     * 绕轴旋转变换
     */
    Matrix4.prototype.rotateXByRadian = function (radian) {
        return this.multiply4(Matrix4.createRotateXMatrix4ByRadian(radian));
    };
    Matrix4.prototype.rotateYByRadian = function (radian) {
        return this.multiply4(Matrix4.createRotateYMatrix4ByRadian(radian));
    };
    Matrix4.prototype.rotateZByRadian = function (radian) {
        return this.multiply4(Matrix4.createRotateZMatrix4ByRadian(radian));
    };
    /**
     * 缩放变换
     */
    Matrix4.prototype.scaleByVector3 = function (vector3) {
        return this.multiply4(Matrix4.createScaleMatrix4ByCoordinate(vector3.x, vector3.y, vector3.z));
    };
    Matrix4.prototype.setOriginByVector3 = function (vector3) {
        return Matrix4.createTranslateMatrix4ByCoordinate(-vector3.x, -vector3.y, -vector3.z)
            .multiply4(this)
            .multiply4(Matrix4.createTranslateMatrix4ByCoordinate(vector3.x, vector3.y, vector3.z));
    };
    Matrix4.prototype.toMatrix3 = function () {
        return new Matrix3_1.Matrix3([this.data[0], this.data[1], 0, this.data[4], this.data[5], 0, this.data[12], this.data[13], 1]);
    };
    /**
     * 矩阵转置
     */
    Matrix4.prototype.transpose = function () {
        return new Matrix4(_super.prototype.transpose.call(this).data);
    };
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    Matrix4.prototype.getInverseMatrix = function () {
        return new Matrix4(_super.prototype.getInverseMatrix.call(this).data);
    };
    Matrix4.ORIGIN = new Matrix4();
    return Matrix4;
}(Matrix_1.Matrix));
exports.Matrix4 = Matrix4;


/***/ }),

/***/ "./src/geometry/RtreeItem.ts":
/*!***********************************!*\
  !*** ./src/geometry/RtreeItem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RtreeItem = void 0;
var RtreeItem = /** @class */ (function () {
    function RtreeItem(target) {
        this._target = target;
        this._bbox2 = target.model.createBBox2();
    }
    RtreeItem.getSimpleRectFromBbox2 = function (bbox2) {
        return {
            sx: bbox2.minX,
            sy: bbox2.minY,
            w: Math.abs(bbox2.maxX - bbox2.minX),
            h: Math.abs(bbox2.maxY - bbox2.minY),
        };
    };
    RtreeItem.getSimpleRectFromModelBbox2 = function (item) {
        var bbox2 = item.model.bbox2;
        return {
            sx: bbox2.minX,
            sy: bbox2.minY,
            w: Math.abs(bbox2.maxX - bbox2.minX),
            h: Math.abs(bbox2.maxY - bbox2.minY),
        };
    };
    Object.defineProperty(RtreeItem.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RtreeItem.prototype, "targetId", {
        get: function () {
            return this._target.elementItemId;
        },
        enumerable: false,
        configurable: true
    });
    RtreeItem.prototype.getBBox2 = function () {
        return this._bbox2;
    };
    return RtreeItem;
}());
exports.RtreeItem = RtreeItem;


/***/ }),

/***/ "./src/geometry/StructLine.ts":
/*!************************************!*\
  !*** ./src/geometry/StructLine.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StructLine = void 0;
var BBox2_1 = __webpack_require__(/*! ./BBox2 */ "./src/geometry/BBox2.ts");
var LinearPrimitive_1 = __webpack_require__(/*! ./LinearPrimitive */ "./src/geometry/LinearPrimitive.ts");
var StructLine = /** @class */ (function (_super) {
    __extends(StructLine, _super);
    function StructLine(startPoint, endPoint) {
        var _this = _super.call(this) || this;
        _this._startPoint = startPoint;
        _this._endPoint = endPoint;
        return _this;
    }
    Object.defineProperty(StructLine.prototype, "startPoint", {
        get: function () {
            return this._startPoint;
        },
        set: function (value) {
            this._startPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StructLine.prototype, "endPoint", {
        get: function () {
            return this._endPoint;
        },
        set: function (value) {
            this._endPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    StructLine.prototype.start = function () {
        return this.startPoint;
    };
    StructLine.prototype.end = function () {
        return this.endPoint;
    };
    StructLine.prototype.bbox2 = function () {
        var minX = Math.min(this.startPoint.x, this.endPoint.x);
        var maxX = Math.max(this.startPoint.x, this.endPoint.x);
        var minY = Math.min(this.startPoint.y, this.endPoint.y);
        var maxY = Math.max(this.startPoint.y, this.endPoint.y);
        return new BBox2_1.BBox2(minX, minY, maxX, maxY);
    };
    StructLine.prototype.toString = function () {
        return "StructLine (".concat(this.startPoint.x, ", ").concat(this.startPoint.y, ", ").concat(this.endPoint.x, ", ").concat(this.endPoint.y, ")");
    };
    return StructLine;
}(LinearPrimitive_1.LinearPrimitive));
exports.StructLine = StructLine;


/***/ }),

/***/ "./src/geometry/Vector.ts":
/*!********************************!*\
  !*** ./src/geometry/Vector.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector() {
        /* ... */
    }
    Vector.hypot = function (deltaX, deltaY) {
        var xs = Math.abs(deltaX);
        var ys = Math.abs(deltaY);
        if (ys > xs) {
            var swap = ys;
            ys = xs;
            xs = swap;
        }
        if (xs === 0) {
            return ys;
        }
        var t = ys / xs;
        return xs * Math.sqrt(1 + t * t);
    };
    Vector.distance = function (x1, y1, x2, y2) {
        return this.hypot(x2 - x1, y2 - y1);
    };
    return Vector;
}());
exports.Vector = Vector;


/***/ }),

/***/ "./src/geometry/Vector2.ts":
/*!*********************************!*\
  !*** ./src/geometry/Vector2.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
var BBox2_1 = __webpack_require__(/*! ./BBox2 */ "./src/geometry/BBox2.ts");
var Decimals_1 = __webpack_require__(/*! ./Decimals */ "./src/geometry/Decimals.ts");
var Doublekit_1 = __webpack_require__(/*! ./Doublekit */ "./src/geometry/Doublekit.ts");
var Vector_1 = __webpack_require__(/*! ./Vector */ "./src/geometry/Vector.ts");
var VECTOR2_ORIGIN_DATA = [0, 0];
var Vector2 = /** @class */ (function (_super) {
    __extends(Vector2, _super);
    function Vector2(x, y) {
        if (x === void 0) { x = VECTOR2_ORIGIN_DATA[0]; }
        if (y === void 0) { y = VECTOR2_ORIGIN_DATA[1]; }
        var _this = _super.call(this) || this;
        _this._x = x;
        _this._y = y;
        return _this;
    }
    /**
     * 计算某个初始弧度在经过特定矩阵变换后的弧度
     */
    Vector2.caculateAngle = function (radian, matrix4) {
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        var x = cos * matrix4.data[0] + sin * matrix4.data[4];
        var y = cos * matrix4.data[1] + sin * matrix4.data[5];
        var vector2 = new Vector2(x, y).normalize();
        return Math.atan2(vector2.x, vector2.y);
    };
    /**
     * 计算某个弧度的单位向量
     */
    Vector2.getInitVector2ByRadian = function (radian) {
        return new Vector2(Math.cos(radian), Math.sin(radian));
    };
    Object.defineProperty(Vector2.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "length", {
        /**
         * 向量长度
         */
        get: function () {
            return Math.hypot(this.x, this.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "dir", {
        /**
         * 向量弧度方向
         */
        get: function () {
            return Math.atan2(this.y, this.x);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "dirDeg", {
        /**
         * 向量角度方向
         */
        get: function () {
            return Math.atan2(this.y, this.x) * (180 / Math.PI);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 向量副本
     */
    Vector2.prototype.copy = function () {
        return new Vector2(this.x, this.y);
    };
    /**
     * 向量与向量相加
     */
    Vector2.prototype.add = function (vector2) {
        return new Vector2(this.x + vector2.x, this.y + vector2.y);
    };
    /**
     * 向量与标量相加
     */
    Vector2.prototype.addScalar = function (x, y) {
        return new Vector2(this.x + x, this.y + y);
    };
    /**
     * 向量与向量相减
     */
    Vector2.prototype.sub = function (vector2) {
        return new Vector2(this.x - vector2.x, this.y - vector2.y);
    };
    /**
     * 向量与标量相减
     */
    Vector2.prototype.subScalar = function (x, y) {
        return new Vector2(this.x - x, this.y - y);
    };
    /**
     * 向量缩放
     */
    Vector2.prototype.scale = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _y = typeof y !== 'undefined' ? y : x;
        return new Vector2(this.x * x, this.y * _y);
    };
    /**
     * 向量与标量的乘积
     */
    Vector2.prototype.mul = function (x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return this.scale(x, y);
    };
    /**
     * 向量与向量叉乘
     */
    Vector2.prototype.cross = function (vector2) {
        return this.x * vector2.y - vector2.x * this.y;
    };
    /**
     * 向量与向量点乘
     */
    Vector2.prototype.dot = function (vector2) {
        return this.x * vector2.x + this.y * vector2.y;
    };
    /**
     * 向量 sin 值
     */
    Vector2.prototype.getSin = function () {
        return this.y / this.length;
    };
    /**
     * 向量 cos 值
     */
    Vector2.prototype.getCos = function () {
        return this.x / this.length;
    };
    /**
     * 该向量的终点的 bbox2
     */
    Vector2.prototype.getEndDotBbbox2 = function () {
        return new BBox2_1.BBox2(this.x, this.x, this.y, this.y);
    };
    /**
     * 设当前向量为 B, 输入向量 A, 计算 AB 向量的弧度
     */
    Vector2.prototype.agnleOfTowVector = function (vector2) {
        return Math.atan2(this.y - vector2.y, this.x - vector2.x);
    };
    /**
     * 设当前向量为 B, 输入向量 A, 计算 AB 向量与 X 轴正向的弧度
     */
    Vector2.prototype.agnleXOfTowVector = function (vector2) {
        var radian = this.agnleOfTowVector(vector2);
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        return radian;
    };
    /**
     * 向量旋转 - 绕起点旋转 radian(弧度) 后的结果向量
     * 		将向量 v0(x0, y0) 旋转 θ 角度后
     * 			x = x0 * cos(θ) - y0 * sin(θ)
     * 			y = x0 * sin(θ) + x0 * cos(θ)
     */
    Vector2.prototype.rotate = function (radian) {
        var c = Math.cos(radian);
        var s = Math.sin(radian);
        var _a = __read([this.x, this.y], 2), x = _a[0], y = _a[1];
        return new Vector2(x * c + y * -s, x * s + y * c);
    };
    /**
     * 向量旋转 - 绕向量外定点旋转 radian(弧度) 后的结果向量
     */
    Vector2.prototype.rotateSurround = function (center2, radian) {
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        var dx = this.x - center2.x;
        var dy = this.y - center2.y;
        return new Vector2(dx * cos + dy * -sin, dx * sin + dy * cos);
    };
    /**
     * 向量关于 origin2 坐标点的中心对称向量
     */
    Vector2.prototype.mirrorSurround = function (origin2) {
        if (origin2 === void 0) { origin2 = Vector2.ORIGIN; }
        return new Vector2(2 * origin2.x, 2 * origin2.y - this.y);
    };
    /**
     * 向量关于 origin2 坐标点的 x 坐标值的 X 轴镜像
     */
    Vector2.prototype.mirrorSurroundX = function (origin2) {
        if (origin2 === void 0) { origin2 = Vector2.ORIGIN; }
        return new Vector2(this.x, 2 * origin2.y - this.y);
    };
    /**
     * 向量关于 origin2 坐标点的 y 坐标值的 Y 轴镜像
     */
    Vector2.prototype.mirrorSurroundY = function (origin2) {
        if (origin2 === void 0) { origin2 = Vector2.ORIGIN; }
        return new Vector2(2 * origin2.x - this.x, this.y);
    };
    /**
     * 应用 matrix3
     */
    Vector2.prototype.multiplyMatrix3 = function (matrix3) {
        var x = this.x * matrix3.data[0] + this.y * matrix3.data[3] + matrix3.data[6];
        var y = this.x * matrix3.data[1] + this.y * matrix3.data[4] + matrix3.data[7];
        return new Vector2(x, y);
    };
    /**
     * 应用 matrix4
     */
    Vector2.prototype.multiplyMatrix4 = function (matrix4) {
        var x = this.x * matrix4.data[0] + this.y * matrix4.data[4] + matrix4.data[12];
        var y = this.x * matrix4.data[1] + this.y * matrix4.data[5] + matrix4.data[13];
        return new Vector2(x, y);
    };
    Vector2.prototype.toString = function () {
        return "Vector2 (".concat(this.x, ", ").concat(this.y, ")");
    };
    /**
     * 向量的单位向量
     */
    Vector2.prototype.normalize = function () {
        if (this.x === 0 && this.y === 0) {
            return new Vector2(0, 0);
        }
        var sx = this.x / this.length;
        var sy = this.y / this.length;
        return new Vector2(sx, sy);
    };
    /**
     * 判断当前向量与输入向量是否相等
     */
    Vector2.prototype.equalsWithVector2 = function (vector2, place) {
        if (place === void 0) { place = 0; }
        if (vector2 instanceof Vector2) {
            return Decimals_1.Decimals.equalsFloat(vector2.x, this.x, place) && Decimals_1.Decimals.equalsFloat(vector2.y, this.y, place);
        }
        return false;
    };
    /**
     * 判断当前坐标点与输入坐标点是否相等
     */
    Vector2.prototype.equalsWithPoint = function (p) {
        return Doublekit_1.DoubleKit.eq(this.x, p.x) && Doublekit_1.DoubleKit.eq(this.y, p.y);
    };
    /**
     * 计算当前点与输入点 P(vector2) 的距离
     * 		向量与向量 vector2 的距离
     */
    Vector2.prototype.distance = function (vector2) {
        var deltaX = vector2.x - this._x;
        var deltaY = vector2.y - this._y;
        return Vector_1.Vector.hypot(deltaX, deltaY);
    };
    Vector2.ORIGIN = new Vector2();
    Vector2.X_INIT_UNIT_VERCTOR2 = new Vector2(1, 0);
    Vector2.Y_INIT_UNIT_VERCTOR2 = new Vector2(0, 1);
    return Vector2;
}(Vector_1.Vector));
exports.Vector2 = Vector2;


/***/ }),

/***/ "./src/geometry/Vector3.ts":
/*!*********************************!*\
  !*** ./src/geometry/Vector3.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
var Vector_1 = __webpack_require__(/*! ./Vector */ "./src/geometry/Vector.ts");
var VECTOR3_ORIGIN_DATA = [0, 0, 0];
var Vector3 = /** @class */ (function (_super) {
    __extends(Vector3, _super);
    function Vector3(x, y, z) {
        if (x === void 0) { x = VECTOR3_ORIGIN_DATA[0]; }
        if (y === void 0) { y = VECTOR3_ORIGIN_DATA[1]; }
        if (z === void 0) { z = VECTOR3_ORIGIN_DATA[2]; }
        var _this = _super.call(this) || this;
        _this._x = x;
        _this._y = y;
        _this._z = z;
        return _this;
    }
    Object.defineProperty(Vector3.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (value) {
            this._z = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3.prototype, "length", {
        /**
         * 向量长度
         */
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 向量副本
     */
    Vector3.prototype.copy = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    /**
     * 向量与向量相加
     */
    Vector3.prototype.add = function (vector3) {
        return new Vector3(this.x + vector3.x, this.y + vector3.y, this.z + vector3.z);
    };
    /**
     * 向量与标量相加
     */
    Vector3.prototype.addScalar = function (x, y, z) {
        return new Vector3(this.x + x, this.y + y, this.z + z);
    };
    /**
     * 向量与向量相减
     */
    Vector3.prototype.sub = function (vector3) {
        return new Vector3(this.x - vector3.x, this.y - vector3.y, this.z - vector3.z);
    };
    /**
     * 向量与标量相减
     */
    Vector3.prototype.subScalar = function (x, y, z) {
        return new Vector3(this.x - x, this.y - y, this.z - z);
    };
    /**
     * 向量缩放
     */
    Vector3.prototype.scale = function (x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        var _y = typeof y !== 'undefined' ? y : x;
        var _z = typeof z !== 'undefined' ? z : x;
        return new Vector3(this.x * x, this.y * _y, this.z * _z);
    };
    /**
     * 向量与标量的乘积
     */
    Vector3.prototype.mul = function (x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        return this.scale(x, y, z);
    };
    /**
     * 向量与向量叉乘
     */
    Vector3.prototype.cross = function (vector3) {
        var x = this.y * vector3.z - this.z * vector3.y;
        var y = this.z * vector3.x - this.x * vector3.z;
        var z = this.x * vector3.y - this.y * vector3.x;
        return new Vector3(x, y, z);
    };
    /**
     * 向量与向量点乘
     */
    Vector3.prototype.dot = function (vector3) {
        return this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
    };
    /**
     * 应用 matrix4
     */
    Vector3.prototype.multiplyMatrix4 = function (matrix4) {
        var x = this.x * matrix4.data[0] + this.y * matrix4.data[4] + this.z * matrix4.data[8] + matrix4.data[12];
        var y = this.x * matrix4.data[1] + this.y * matrix4.data[5] + this.z * matrix4.data[9] + matrix4.data[13];
        var z = this.x * matrix4.data[2] + this.y * matrix4.data[6] + this.z * matrix4.data[10] + matrix4.data[14];
        var w = this.x * matrix4.data[3] + this.y * matrix4.data[7] + this.z * matrix4.data[11] + matrix4.data[15];
        return new Vector3(x / w, y / w, z / w);
    };
    Vector3.prototype.toString = function () {
        return "Vector3 (".concat(this.x, ", ").concat(this.y, ", ").concat(this.z, ")");
    };
    /**
     * 向量的单位向量
     */
    Vector3.prototype.normalize = function () {
        if (this.x === 0 && this.y === 0 && this.z === 0) {
            return new Vector3(0, 0, 0);
        }
        var sx = this.x / this.length;
        var sy = this.y / this.length;
        var sz = this.z / this.length;
        return new Vector3(sx, sy, sz);
    };
    Vector3.prototype.distance = function (v) {
        throw new Error('Method not implemented.');
    };
    Vector3.ORIGIN = new Vector3();
    Vector3.X_INIT_UNIT_VERCTOR2 = new Vector3(1, 0, 0);
    Vector3.Y_INIT_UNIT_VERCTOR2 = new Vector3(0, 1, 0);
    Vector3.Z_INIT_UNIT_VERCTOR2 = new Vector3(0, 0, 1);
    return Vector3;
}(Vector_1.Vector));
exports.Vector3 = Vector3;


/***/ }),

/***/ "./src/geometry/rtree/Rectangle.ts":
/*!*****************************************!*\
  !*** ./src/geometry/rtree/Rectangle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(sx, sy, w, h) {
        this._sx = 0;
        this._sy = 0;
        this._w = 0;
        this._h = 0;
        this._ex = 0;
        this._ey = 0;
        this._p = false;
        this.reset(sx, sy, w, h);
    }
    Rectangle.overlapRectangle = function (rectA, rectB) {
        if ((rectA.h === 0 && rectA.w === 0) || (rectB.h === 0 && rectB.w === 0)) {
            return (rectA.sx <= rectB.sx + rectB.w && rectA.sx + rectA.w >= rectB.sx && rectA.sy <= rectB.sy + rectB.h && rectA.sy + rectA.h >= rectB.sy);
        }
        return rectA.sx < rectB.sx + rectB.w && rectA.sx + rectA.w > rectB.sx && rectA.sy < rectB.sy + rectB.h && rectA.sy + rectA.h > rectB.sy;
    };
    Rectangle.containsRectangle = function (rectA, rectB) {
        return rectA.sx + rectA.w <= rectB.sx + rectB.w && rectA.sx >= rectB.sx && rectA.sy + rectA.h <= rectB.sy + rectB.h && rectA.sy >= rectB.sy;
    };
    Rectangle.expandRectangle = function (expandRect, referenceRect) {
        var nx = 0;
        var ny = 0;
        var axw = expandRect.sx + expandRect.w;
        var bxw = referenceRect.sx + referenceRect.w;
        var ayh = expandRect.sy + expandRect.h;
        var byh = referenceRect.sy + referenceRect.h;
        if (expandRect.sx > referenceRect.sx) {
            nx = referenceRect.sx;
        }
        else {
            nx = expandRect.sx;
        }
        if (expandRect.sy > referenceRect.sy) {
            ny = referenceRect.sy;
        }
        else {
            ny = expandRect.sy;
        }
        if (axw > bxw) {
            expandRect.w = axw - nx;
        }
        else {
            expandRect.w = bxw - nx;
        }
        if (ayh > byh) {
            expandRect.h = ayh - ny;
        }
        else {
            expandRect.h = byh - ny;
        }
        expandRect.sx = nx;
        expandRect.sy = ny;
        return expandRect;
    };
    Rectangle.makeMBR = function (expandRect, nodes) {
        if (!nodes.length || !expandRect) {
            return {
                sx: 0,
                sy: 0,
                w: 0,
                h: 0,
                nodes: [],
            };
        }
        expandRect.sx = nodes[0].sx;
        expandRect.sy = nodes[0].sy;
        expandRect.w = nodes[0].w;
        expandRect.h = nodes[0].h;
        for (var i = 1; i < nodes.length; i++) {
            Rectangle.expandRectangle(expandRect, nodes[i]);
        }
        return expandRect;
    };
    Rectangle.squarifiedRatio = function (l, w, fill) {
        // const lperi: number = (l + w) / 2
        // const larea: number = l * w
        // const lgeo: number = larea / (lperi * lperi)
        // return (larea * fill) / lgeo
        var a = (l + w) / 2;
        return a * a * fill;
    };
    Object.defineProperty(Rectangle.prototype, "sx", {
        get: function () {
            return this._sx;
        },
        set: function (value) {
            this._sx = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "sy", {
        get: function () {
            return this._sy;
        },
        set: function (value) {
            this._sy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "ex", {
        get: function () {
            return this._ex;
        },
        set: function (value) {
            this._ex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "ey", {
        get: function () {
            return this._ey;
        },
        set: function (value) {
            this._ey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "p", {
        get: function () {
            return this._p;
        },
        set: function (value) {
            this._p = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "w", {
        get: function () {
            return this._w;
        },
        set: function (value) {
            this._w = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "h", {
        get: function () {
            return this._h;
        },
        set: function (value) {
            this._h = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.reset = function (sx, sy, w, h) {
        this._sx = sx;
        this._sy = sy;
        this._w = w;
        this._h = h;
        this._ex = this._sx + this._w;
        this._ey = this._sy + this._h;
        this._p = this._w + this._h ? false : true;
    };
    Rectangle.prototype.overlap = function (rect) {
        if (this.p || rect.p) {
            return this.sx <= rect.ex && this.ex >= rect.sx && this.sy <= rect.ey && this.ey >= rect.sy;
        }
        return this.sx < rect.ex && this.ex > rect.sx && this.sy < rect.ey && this.ey > rect.sy;
    };
    Rectangle.prototype.expand = function (rect) {
        var nx = 0;
        var ny = 0;
        var sx = 0;
        var sy = 0;
        var w = 0;
        var h = 0;
        if (this.sx > rect.sx) {
            nx = rect.sx;
        }
        else {
            nx = this.sx;
        }
        if (this.sy > rect.sy) {
            ny = rect.sy;
        }
        else {
            ny = this.sy;
        }
        if (this.ex > rect.ex) {
            w = this.ex - nx;
        }
        else {
            w = rect.ex - nx;
        }
        if (this.ey > rect.ey) {
            h = this.ey - ny;
        }
        else {
            h = rect.ey - ny;
        }
        sx = nx;
        sx = ny;
        this.reset(sx, sy, w, h);
        return this;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./src/geometry/rtree/Rtree.ts":
/*!*************************************!*\
  !*** ./src/geometry/rtree/Rtree.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RTree = void 0;
var Utils_1 = __webpack_require__(/*! ./Utils */ "./src/geometry/rtree/Utils.ts");
var RTree = /** @class */ (function () {
    function RTree(width) {
        if (width === void 0) { width = 10; }
        this._getWidth = width;
        this._root = null;
        this._minWidth = 10;
        this._maxWidth = 20;
        this.refresh();
    }
    RTree.prototype.refresh = function () {
        var minWidth = this._minWidth;
        var maxWidth = this._maxWidth;
        if (!isNaN(this._getWidth)) {
            minWidth = Math.floor(this._getWidth / 2.0);
            maxWidth = this._getWidth;
        }
        this._allItems = new Set();
        var rootTree = {
            sx: 0,
            sy: 0,
            w: 0,
            h: 0,
            nodes: [],
            id: "root",
        };
        this._root = rootTree;
        this._minWidth = minWidth;
        this._maxWidth = maxWidth;
    };
    RTree.prototype.insertSubtree = function (handleNode, targetRoot) {
        targetRoot = targetRoot || this._root;
        (0, Utils_1.insertSubtree)(handleNode, targetRoot, this._minWidth, this._maxWidth);
    };
    RTree.prototype.insertItemData = function (rect, data) {
        this._allItems.add(data);
        (0, Utils_1.insertSubtree)({
            sx: rect.sx,
            sy: rect.sy,
            w: rect.w,
            h: rect.h,
            leaf: data,
        }, this._root, this._minWidth, this._maxWidth);
    };
    RTree.prototype.search = function (rect, isGetNodeDataOnly) {
        return (0, Utils_1.searchSubtree)(rect, this._root, isGetNodeDataOnly);
    };
    RTree.prototype.removeArea = function (rect, balanceChildrenOnDeleting) {
        if (balanceChildrenOnDeleting === void 0) { balanceChildrenOnDeleting = false; }
        var result = (0, Utils_1.removeArea)(rect, this._root, this._minWidth, this._maxWidth, balanceChildrenOnDeleting);
        for (var i = 0; i < result.length; i++) {
            if (this._allItems.has(result[i].leaf)) {
                this._allItems.delete(result[i].leaf);
            }
        }
        return result;
    };
    RTree.prototype.removeTarget = function (rect, targetOnLeaf, balanceChildrenOnDeleting) {
        if (balanceChildrenOnDeleting === void 0) { balanceChildrenOnDeleting = false; }
        var result = [];
        if (targetOnLeaf === false) {
            result = (0, Utils_1.removeArea)(rect, this._root, this._minWidth, this._maxWidth, balanceChildrenOnDeleting);
        }
        result = (0, Utils_1.removeObj)(rect, targetOnLeaf, this._root, this._minWidth, this._maxWidth, balanceChildrenOnDeleting);
        for (var i = 0; i < result.length; i++) {
            if (this._allItems.has(result[i].leaf)) {
                this._allItems.delete(result[i].leaf);
            }
        }
        return result;
    };
    RTree.prototype.getTree = function () {
        return this._root;
    };
    RTree.prototype.setTree = function (newTree, targetRoot) {
        if (!targetRoot) {
            targetRoot = this._root;
        }
        return (0, Utils_1.attachData)(newTree, targetRoot);
    };
    RTree.prototype.getAllItems = function () {
        return this._allItems;
    };
    RTree.prototype.clearAllItems = function () {
        this.refresh();
    };
    return RTree;
}());
exports.RTree = RTree;


/***/ }),

/***/ "./src/geometry/rtree/Utils.ts":
/*!*************************************!*\
  !*** ./src/geometry/rtree/Utils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.attachData = exports.removeSubtree = exports.removeObj = exports.removeArea = exports.getFlattenLeafs = exports.searchSubtree = exports.pickNext = exports.pickLinear = exports.linearSplit = exports.chooseLeafSubtree = exports.insertSubtree = void 0;
var Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./src/geometry/rtree/Rectangle.ts");
function insertSubtree(leafItem, root, minWidth, maxWidth) {
    if (root.nodes.length === 0) {
        root.sx = leafItem.sx;
        root.sy = leafItem.sy;
        root.w = leafItem.w;
        root.h = leafItem.h;
        root.nodes.push(leafItem);
        return;
    }
    var nodePath = chooseLeafSubtree(leafItem, root);
    var handleItem = leafItem;
    var bc = undefined;
    var expandRect = null;
    var splitRes = [];
    while (nodePath.length > 0) {
        if (bc && bc.nodes && bc.nodes.length <= 0) {
            var cache = bc;
            bc = nodePath.pop();
            for (var n = 0; n < bc.nodes.length; n++) {
                if (bc.nodes[n] === cache || bc.nodes[n].nodes.length <= 0) {
                    bc.nodes.splice(n, 1);
                    break;
                }
            }
        }
        else {
            bc = nodePath.pop();
        }
        if (expandRect) {
            Rectangle_1.Rectangle.expandRectangle(bc, expandRect);
            expandRect = {
                sx: bc.sx,
                sy: bc.sy,
                w: bc.w,
                h: bc.h,
            };
        }
        else {
            if (splitRes.length) {
                for (var i = 0; i < splitRes.length; i++) {
                    Rectangle_1.Rectangle.expandRectangle(bc, splitRes[i]);
                }
                bc.nodes = bc.nodes.concat(splitRes);
                splitRes.length = 0;
            }
            else {
                Rectangle_1.Rectangle.expandRectangle(bc, handleItem);
                bc.nodes.push(handleItem);
            }
            if (bc.nodes.length <= maxWidth) {
                expandRect = {
                    sx: bc.sx,
                    sy: bc.sy,
                    w: bc.w,
                    h: bc.h,
                };
            }
            else {
                var a = linearSplit(bc.nodes, minWidth);
                if (nodePath.length <= 0) {
                    bc.nodes.push(a[0]);
                    nodePath.push(bc);
                    handleItem = a[1];
                }
                else {
                    splitRes = a;
                }
                expandRect = null;
            }
        }
    }
}
exports.insertSubtree = insertSubtree;
function chooseLeafSubtree(itemData, root) {
    var bestChoiceStack = [root];
    var bestChoiceIndex = -1;
    var bestChoiceArea = 0;
    var nodes = root.nodes;
    do {
        if (bestChoiceIndex !== -1) {
            bestChoiceStack.push(nodes[bestChoiceIndex]);
            nodes = nodes[bestChoiceIndex].nodes;
            bestChoiceIndex = -1;
        }
        for (var i = nodes.length - 1; i >= 0; i--) {
            var childItem = nodes[i];
            if (childItem.leaf) {
                bestChoiceIndex = -1;
                break;
            }
            var sx = Math.min(childItem.sx, itemData.sx);
            var sy = Math.min(childItem.sy, itemData.sy);
            var ex = Math.max(childItem.sx + childItem.w, itemData.sx + itemData.w);
            var ey = Math.max(childItem.sy + childItem.h, itemData.sy + itemData.h);
            var newW = ex - sx;
            var newH = ey - sy;
            var oldChildItemRatio = Rectangle_1.Rectangle.squarifiedRatio(childItem.w, childItem.h, childItem.nodes.length + 1);
            var newChildItemRatio = Rectangle_1.Rectangle.squarifiedRatio(newW, newH, childItem.nodes.length + 2);
            if (bestChoiceIndex < 0 || Math.abs(newChildItemRatio - oldChildItemRatio) < bestChoiceArea) {
                bestChoiceArea = Math.abs(newChildItemRatio - oldChildItemRatio);
                bestChoiceIndex = i;
            }
        }
    } while (bestChoiceIndex !== -1);
    return bestChoiceStack;
}
exports.chooseLeafSubtree = chooseLeafSubtree;
function linearSplit(nodes, minWidth) {
    var n = pickLinear(nodes);
    while (nodes.length > 0) {
        pickNext(nodes, n[0], n[1], minWidth);
    }
    return n;
}
exports.linearSplit = linearSplit;
function pickLinear(nodes) {
    var indexLowestEndX = nodes.length - 1;
    var indexHighestStartX = 0;
    var indexLowestEndY = nodes.length - 1;
    var indexHighestStartY = 0;
    for (var i = nodes.length - 2; i >= 0; i--) {
        var childItem = nodes[i];
        if (childItem.sx > nodes[indexHighestStartX].sx) {
            indexHighestStartX = i;
        }
        else if (childItem.sx + childItem.w < nodes[indexLowestEndX].sx + nodes[indexLowestEndX].w) {
            indexLowestEndX = i;
        }
        if (childItem.sy > nodes[indexHighestStartY].sy) {
            indexHighestStartY = i;
        }
        else if (childItem.sy + childItem.h < nodes[indexLowestEndY].sy + nodes[indexLowestEndY].h) {
            indexLowestEndY = i;
        }
    }
    var lowestEndX = nodes[indexLowestEndX].sx + nodes[indexLowestEndX].w;
    var lowestEndY = nodes[indexLowestEndY].sy + nodes[indexLowestEndY].h;
    var highestStartX = nodes[indexHighestStartX].sx;
    var highestStartY = nodes[indexHighestStartY].sy;
    var dx = Math.abs(lowestEndX - highestStartX);
    var dy = Math.abs(lowestEndY - highestStartY);
    var itemLowestEnd;
    var itemHighestStart;
    if (dx > dy) {
        if (indexLowestEndX > indexHighestStartX) {
            itemLowestEnd = nodes.splice(indexLowestEndX, 1)[0];
            itemHighestStart = nodes.splice(indexHighestStartX, 1)[0];
        }
        else {
            itemHighestStart = nodes.splice(indexHighestStartX, 1)[0];
            itemLowestEnd = nodes.splice(indexLowestEndX, 1)[0];
        }
    }
    else {
        if (indexLowestEndY > indexHighestStartY) {
            itemLowestEnd = nodes.splice(indexLowestEndY, 1)[0];
            itemHighestStart = nodes.splice(indexHighestStartY, 1)[0];
        }
        else {
            itemHighestStart = nodes.splice(indexHighestStartY, 1)[0];
            itemLowestEnd = nodes.splice(indexLowestEndY, 1)[0];
        }
    }
    return [
        {
            sx: itemLowestEnd.sx,
            sy: itemLowestEnd.sy,
            w: itemLowestEnd.w,
            h: itemLowestEnd.h,
            nodes: [itemLowestEnd],
        },
        {
            sx: itemHighestStart.sx,
            sy: itemHighestStart.sy,
            w: itemHighestStart.w,
            h: itemHighestStart.h,
            nodes: [itemHighestStart],
        },
    ];
}
exports.pickLinear = pickLinear;
function pickNext(nodes, a, b, minWidth) {
    var areaA = Rectangle_1.Rectangle.squarifiedRatio(a.w, a.h, a.nodes.length + 1);
    var areaB = Rectangle_1.Rectangle.squarifiedRatio(b.w, b.h, b.nodes.length + 1);
    var highAreaDelta = undefined;
    var lowestGrowthGroup = null;
    var highAreaNodeIndex = -1;
    for (var i = nodes.length - 1; i >= 0; i--) {
        var item = nodes[i];
        var tempItemA = { sx: 0, sy: 0, ex: 0, ey: 0, w: 0, h: 0 };
        tempItemA.sx = Math.min(a.sx, item.sx);
        tempItemA.sy = Math.min(a.sy, item.sy);
        tempItemA.ex = Math.max(a.sx + a.w, item.sx + item.w);
        tempItemA.ey = Math.max(a.sy + a.h, item.sy + item.h);
        tempItemA.w = tempItemA.ex - tempItemA.sx;
        tempItemA.h = tempItemA.ey - tempItemA.sy;
        var tempItemAreaA = Rectangle_1.Rectangle.squarifiedRatio(tempItemA.w, tempItemA.h, a.nodes.length + 2);
        var changeTempAreaA = Math.abs(tempItemAreaA - areaA);
        /* ... */
        var tempItemB = { sx: 0, sy: 0, ex: 0, ey: 0, w: 0, h: 0 };
        tempItemB.sx = Math.min(b.sx, item.sx);
        tempItemB.sy = Math.min(b.sy, item.sy);
        tempItemB.ex = Math.max(b.sx + b.w, item.sx + item.w);
        tempItemB.ey = Math.max(b.sy + b.h, item.sy + item.h);
        tempItemB.w = tempItemB.ex - tempItemB.sx;
        tempItemB.h = tempItemB.ey - tempItemB.sy;
        var tempItemAreaB = Rectangle_1.Rectangle.squarifiedRatio(tempItemB.w, tempItemB.h, b.nodes.length + 2);
        var changeTempAreaB = Math.abs(tempItemAreaB - areaB);
        if (highAreaNodeIndex === -1 || typeof highAreaDelta === 'undefined' || Math.abs(changeTempAreaB - changeTempAreaA) <= highAreaDelta) {
            highAreaNodeIndex = i;
            highAreaDelta = Math.abs(changeTempAreaB - changeTempAreaA);
            lowestGrowthGroup = changeTempAreaB < changeTempAreaA ? b : a;
        }
    }
    var nodesInitLength = nodes.length;
    var dist = minWidth - nodesInitLength;
    var tempNode = nodes.splice(highAreaNodeIndex, 1)[0];
    if (a.nodes.length <= dist) {
        a.nodes.push(tempNode);
        Rectangle_1.Rectangle.expandRectangle(a, tempNode);
        return;
    }
    if (b.nodes.length <= dist) {
        b.nodes.push(tempNode);
        Rectangle_1.Rectangle.expandRectangle(b, tempNode);
        return;
    }
    lowestGrowthGroup.nodes.push(tempNode);
    Rectangle_1.Rectangle.expandRectangle(lowestGrowthGroup, tempNode);
}
exports.pickNext = pickNext;
function searchSubtree(rect, root, isGetNodeDataOnly) {
    if (isGetNodeDataOnly === void 0) { isGetNodeDataOnly = true; }
    var result = [];
    if (!Rectangle_1.Rectangle.overlapRectangle(rect, root)) {
        return result;
    }
    var hitStack = [root.nodes];
    while (hitStack.length > 0) {
        var nodes = hitStack.pop();
        for (var i = nodes.length - 1; i >= 0; i--) {
            var itemTree = nodes[i];
            if (Rectangle_1.Rectangle.overlapRectangle(rect, itemTree)) {
                if (itemTree.nodes) {
                    hitStack.push(itemTree.nodes);
                    continue;
                }
                if (itemTree.leaf) {
                    if (isGetNodeDataOnly) {
                        result.push(itemTree.leaf);
                        continue;
                    }
                    result.push(itemTree);
                }
            }
        }
    }
    return result;
}
exports.searchSubtree = searchSubtree;
function getFlattenLeafs(trees) {
    var result = [];
    var treesCopy = trees.slice();
    while (treesCopy.length) {
        var current = treesCopy.pop();
        if (current.nodes) {
            treesCopy = treesCopy.concat(current.nodes);
            continue;
        }
        if (current.leaf) {
            result.push(current);
            continue;
        }
    }
    return result;
}
exports.getFlattenLeafs = getFlattenLeafs;
function removeArea(rect, rootTree, minWidth, maxWidth, balanceChildOnDeleting) {
    var countDeleted = 0;
    var result = [];
    do {
        countDeleted = result.length;
        var removeResult = removeSubtree(rect, false, rootTree, minWidth, maxWidth, balanceChildOnDeleting);
        result = result.concat(removeResult);
    } while (countDeleted !== result.length);
    return result;
}
exports.removeArea = removeArea;
function removeObj(rect, targetOnLeaf, rootTree, minWidth, maxWidth, balanceChildOnDeleting) {
    var result = removeSubtree(rect, targetOnLeaf, rootTree, minWidth, maxWidth, balanceChildOnDeleting);
    return result;
}
exports.removeObj = removeObj;
function removeSubtree(rect, targetOnLeaf, root, minWidth, maxWidth, balanceChildOnDeleting) {
    var result = [];
    if (!rect || !Rectangle_1.Rectangle.overlapRectangle(rect, root)) {
        return result;
    }
    var handleItem = {
        sx: rect.sx,
        sy: rect.sy,
        w: rect.w,
        h: rect.h,
        target: targetOnLeaf,
    };
    var currentDepth = 1;
    var lastItemIndex = -1;
    var chooseStack = [root];
    var chooseChildIndexStack = [root.nodes.length - 1];
    var tree = null;
    var itemTree = null;
    while (chooseStack.length > 0) {
        tree = chooseStack.pop();
        lastItemIndex = chooseChildIndexStack.pop();
        if (handleItem.hasOwnProperty('target')) {
            while (lastItemIndex >= 0) {
                itemTree = tree.nodes[lastItemIndex];
                if (Rectangle_1.Rectangle.overlapRectangle(handleItem, itemTree)) {
                    var isConfirm = handleItem.target !== false
                        ? itemTree.leaf === handleItem.target
                        : itemTree.hasOwnProperty('leaf') || Rectangle_1.Rectangle.containsRectangle(itemTree, handleItem);
                    if (isConfirm) {
                        if (itemTree.hasOwnProperty('nodes')) {
                            result = getFlattenLeafs([itemTree]);
                            tree.nodes.splice(lastItemIndex, 1);
                        }
                        else {
                            result = tree.nodes.splice(lastItemIndex, 1);
                        }
                        Rectangle_1.Rectangle.makeMBR(tree, tree.nodes);
                        delete handleItem.target;
                        if (balanceChildOnDeleting && tree.nodes.length < minWidth) {
                            handleItem.nodes = searchSubtree({ sx: tree.sx, sy: tree.sy, w: tree.w, h: tree.h }, tree, false);
                        }
                        break;
                    }
                    if (itemTree.hasOwnProperty('nodes') && itemTree.nodes.length) {
                        currentDepth += 1;
                        chooseStack.push(tree);
                        chooseChildIndexStack.push(lastItemIndex);
                        tree = itemTree;
                        lastItemIndex = itemTree.nodes.length - 1;
                        continue;
                    }
                }
                lastItemIndex--;
                if (lastItemIndex < 0 && chooseChildIndexStack.length) {
                    --chooseChildIndexStack[chooseChildIndexStack.length - 1];
                }
            }
            continue;
        }
        if (handleItem.hasOwnProperty('nodes')) {
            tree.nodes.splice(lastItemIndex, 1);
            Rectangle_1.Rectangle.makeMBR(tree, tree.nodes);
            for (var k = 0; k < handleItem.nodes.length; k++) {
                insertSubtree(handleItem.nodes[k], tree, minWidth, maxWidth);
            }
            handleItem.nodes = [];
            if (chooseStack.length === 0 && tree.nodes.length <= 1) {
                handleItem.nodes = searchSubtree({ sx: tree.sx, sy: tree.sy, w: tree.w, h: tree.h }, tree, false);
                tree.nodes = [];
                chooseStack.push(tree);
                chooseChildIndexStack.push(0);
                currentDepth -= 1;
                continue;
            }
            if (chooseStack.length > 0 && tree.nodes.length < minWidth) {
                handleItem.nodes = searchSubtree({ sx: tree.sx, sy: tree.sy, w: tree.w, h: tree.h }, tree, false);
                tree.nodes = [];
                currentDepth -= 1;
                continue;
            }
            delete handleItem.nodes;
            currentDepth -= 1;
            continue;
        }
        Rectangle_1.Rectangle.makeMBR(tree, tree.nodes);
        currentDepth -= 1;
    }
    return result;
}
exports.removeSubtree = removeSubtree;
function attachData(newTree, root) {
    root.nodes = newTree.nodes;
    root.sx = newTree.sx;
    root.sy = newTree.sy;
    root.w = newTree.w;
    root.h = newTree.h;
    return root;
}
exports.attachData = attachData;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Main_1 = __webpack_require__(/*! ./Main */ "./src/Main.ts");
var clock_1 = __webpack_require__(/*! ./$instance-case/modules/clock */ "./src/$instance-case/modules/clock.ts");
var floatWindow_1 = __webpack_require__(/*! ./$instance-case/utils/floatWindow */ "./src/$instance-case/utils/floatWindow.ts");
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var canvasContainer, canvasElement, floatWindowElement0, webCanvas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvasContainer = document.getElementById('canvasContainer');
                    canvasElement = (0, Main_1.createCanvasElement)(canvasContainer);
                    floatWindowElement0 = (0, floatWindow_1.appendFloatContainerWindow)(document.body);
                    floatWindow_1.iputsPanelControl.appendTo(floatWindowElement0);
                    floatWindow_1.canvasPanelControl.appendTo(floatWindowElement0);
                    floatWindow_1.resourceControl.appendTo(floatWindowElement0);
                    floatWindow_1.profileControl.appendTo(floatWindowElement0);
                    webCanvas = new Main_1.WebCanvas(canvasElement);
                    return [4 /*yield*/, webCanvas.init()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, webCanvas];
            }
        });
    });
}
function mainHandle(webCanvas) {
    var systemConfig = webCanvas.getSystemConfig();
    floatWindow_1.profileControl.update(systemConfig);
    /* ... */
    floatWindow_1.canvasPanelControl.update({ zoomRatio: webCanvas.getCanvasZoomRatio() });
}
function eventHandle(webCanvas) {
    webCanvas.addInputsChangedListener(function (data) {
        floatWindow_1.iputsPanelControl.update(data);
    });
    webCanvas.addResourceChangedListener(function (data) {
        floatWindow_1.resourceControl.update(data);
    });
    webCanvas.addCanvasChangedListener(function (data) {
        floatWindow_1.canvasPanelControl.update(data);
    });
    webCanvas.addProfileListener(function (data) {
        floatWindow_1.profileControl.update(data);
    });
    /* ... */
    floatWindow_1.profileControl.bindEvent(function (action, key, value) {
        if (action === 'inputInput') {
            webCanvas.applySystemConfig(key, value);
            return;
        }
        if (action === 'resetCanvasView') {
            webCanvas.resetCanvasView();
            // webCanvas.canvasController.zoomCanvas(5)
            return;
        }
    });
}
window.addEventListener('DOMContentLoaded', function () {
    init().then(function (webCanvas) {
        eventHandle(webCanvas);
        mainHandle(webCanvas);
        /* ... */
        (0, clock_1.drawClockInit)(webCanvas);
        // const layerItemAId: string = drawLayerController.createLayerShapeItem(`Layer A`)
        // drawTestLine(webCanvas, layerItemAId)
        // drawTestCircle(webCanvas, layerItemAId)
        console.log(webCanvas);
    });
});


/***/ }),

/***/ "./src/objects/assist/AssistLineShape.ts":
/*!***********************************************!*\
  !*** ./src/objects/assist/AssistLineShape.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssistLineShape = exports.buildAssistLineShape = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var LineModel_1 = __webpack_require__(/*! ../models/items/LineModel */ "./src/objects/models/items/LineModel.ts");
var LineShape_1 = __webpack_require__(/*! ../shapes/items/LineShape */ "./src/objects/shapes/items/LineShape.ts");
function buildAssistLineShape(layerItemId, startPoint, endPoint, isSolid, parent) {
    if (isSolid === void 0) { isSolid = true; }
    if (parent === void 0) { parent = null; }
    var lineModelItem = (0, LineModel_1.buildLineModel)(layerItemId, startPoint, endPoint, 1);
    var assistLineShapeItem = new AssistLineShape(lineModelItem, isSolid, parent);
    return assistLineShapeItem;
}
exports.buildAssistLineShape = buildAssistLineShape;
var AssistLineShape = /** @class */ (function (_super) {
    __extends(AssistLineShape, _super);
    function AssistLineShape(model, isSolid, parent) {
        if (isSolid === void 0) { isSolid = true; }
        if (parent === void 0) { parent = null; }
        var _this = _super.call(this, model) || this;
        _this._fixedPixelWidth = 1;
        _this.solid = isSolid;
        _this._parent = parent;
        _this.refreshRender();
        return _this;
    }
    Object.defineProperty(AssistLineShape.prototype, "fixedPixelWidth", {
        get: function () {
            return this._fixedPixelWidth;
        },
        set: function (value) {
            this._fixedPixelWidth = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssistLineShape.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (value) {
            this.parent = value;
        },
        enumerable: false,
        configurable: true
    });
    AssistLineShape.prototype.getType = function () {
        return ElementConfig_1.EElementType.AssistLine;
    };
    AssistLineShape.prototype.getStatus = function () {
        return this.status;
    };
    AssistLineShape.prototype.getRenderData = function () {
        var itemModel = this.model;
        return {
            type: this.getType(),
            modelType: this.model.modelType,
            status: this.status,
            layerItemId: itemModel.layerItemId,
            elementItemId: itemModel.elementItemId,
            startPoint: itemModel.startPoint,
            endPoint: itemModel.endPoint,
            strokeWidth: itemModel.strokeWidth,
            length: itemModel.length,
            strokeColor: itemModel.strokeColor.toRGBAJSON(),
            lineCap: itemModel.lineCap,
            isSolid: itemModel.solid,
            fixedPixelWidth: this.fixedPixelWidth,
        };
    };
    return AssistLineShape;
}(LineShape_1.LineShape));
exports.AssistLineShape = AssistLineShape;


/***/ }),

/***/ "./src/objects/assist/AssistPointShape.ts":
/*!************************************************!*\
  !*** ./src/objects/assist/AssistPointShape.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssistPointShape = exports.buildAssistPointShape = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var Vector2_1 = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
var CircleModel_1 = __webpack_require__(/*! ../models/items/CircleModel */ "./src/objects/models/items/CircleModel.ts");
var CircleShape_1 = __webpack_require__(/*! ../shapes/items/CircleShape */ "./src/objects/shapes/items/CircleShape.ts");
function buildAssistPointShape(layerItemId, centerPoint, parent) {
    if (parent === void 0) { parent = null; }
    var lineModelItem = (0, CircleModel_1.buildCircleModel)(layerItemId, centerPoint, 1);
    var assistLineShapeItem = new AssistPointShape(lineModelItem, parent);
    return assistLineShapeItem;
}
exports.buildAssistPointShape = buildAssistPointShape;
var AssistPointShape = /** @class */ (function (_super) {
    __extends(AssistPointShape, _super);
    function AssistPointShape(model, parent) {
        if (parent === void 0) { parent = null; }
        var _this = _super.call(this, model) || this;
        _this.strokeColor = Color_1.Color.GREEN;
        _this.fillColor = Color_1.Color.GREEN;
        _this.strokeWidth = 0.5;
        _this.solid = true;
        _this._parent = parent;
        _this.refreshRender();
        return _this;
    }
    Object.defineProperty(AssistPointShape.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (value) {
            this.parent = value;
        },
        enumerable: false,
        configurable: true
    });
    AssistPointShape.prototype.isSelect = function (x, y) {
        var point = new Vector2_1.Vector2(x, y);
        var centerPoint = this.centerPoint;
        var distOfClickPointAndCenterPoint = point.sub(centerPoint).length;
        if (distOfClickPointAndCenterPoint <= this.radius + this.strokeWidth / 2) {
            return true;
        }
        return false;
    };
    AssistPointShape.prototype.getType = function () {
        return ElementConfig_1.EElementType.AssistCircle;
    };
    AssistPointShape.prototype.getStatus = function () {
        return this.status;
    };
    AssistPointShape.prototype.getRenderData = function () {
        var itemModel = this.model;
        return {
            type: this.getType(),
            modelType: this.model.modelType,
            status: this.status,
            layerItemId: itemModel.layerItemId,
            elementItemId: itemModel.elementItemId,
            centerPoint: itemModel.centerPoint,
            strokeWidth: itemModel.strokeWidth,
            strokeColor: itemModel.strokeColor.toRGBAJSON(),
            fillColor: itemModel.fillColor.toRGBAJSON(),
            lineCap: itemModel.lineCap,
            isSolid: itemModel.solid,
            radius: itemModel.radius,
        };
    };
    return AssistPointShape;
}(CircleShape_1.CircleShape));
exports.AssistPointShape = AssistPointShape;


/***/ }),

/***/ "./src/objects/base/Manage.ts":
/*!************************************!*\
  !*** ./src/objects/base/Manage.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this._items = new Map();
    }
    Object.defineProperty(Manager.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    Manager.prototype.getAllItems = function () {
        var e_1, _a;
        var allItems = new Array(this.items.size);
        var items = this.items.values();
        var i = 0;
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                allItems[i++] = item;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return allItems;
    };
    Manager.prototype.getItemById = function (gId) {
        return this.items.get(gId);
    };
    return Manager;
}());
exports.Manager = Manager;


/***/ }),

/***/ "./src/objects/models/items/CircleModel.ts":
/*!*************************************************!*\
  !*** ./src/objects/models/items/CircleModel.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleModel = exports.buildCircleModel = exports.ECircleModelBufferOffset = void 0;
var Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var ElementModelItemBase_1 = __webpack_require__(/*! ./elementBase/ElementModelItemBase */ "./src/objects/models/items/elementBase/ElementModelItemBase.ts");
var ElementConfig_1 = __webpack_require__(/*! ../../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
var StructLine_1 = __webpack_require__(/*! ../../../geometry/StructLine */ "./src/geometry/StructLine.ts");
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var Circle_Utils_1 = __webpack_require__(/*! ../../../utils/geometry/Circle.Utils */ "./src/utils/geometry/Circle.Utils.ts");
var Utils_1 = __webpack_require__(/*! ../../../utils/Utils */ "./src/utils/Utils.ts");
var ECircleModelBufferOffset;
(function (ECircleModelBufferOffset) {
    ECircleModelBufferOffset[ECircleModelBufferOffset["CENTER_X"] = 0] = "CENTER_X";
    ECircleModelBufferOffset[ECircleModelBufferOffset["CENTER_Y"] = 1] = "CENTER_Y";
    ECircleModelBufferOffset[ECircleModelBufferOffset["RADIUS"] = 2] = "RADIUS";
    ECircleModelBufferOffset[ECircleModelBufferOffset["SKROKE_WIDTH"] = 3] = "SKROKE_WIDTH";
    ECircleModelBufferOffset[ECircleModelBufferOffset["SKROKE_COLOR_R"] = 4] = "SKROKE_COLOR_R";
    ECircleModelBufferOffset[ECircleModelBufferOffset["SKROKE_COLOR_G"] = 5] = "SKROKE_COLOR_G";
    ECircleModelBufferOffset[ECircleModelBufferOffset["SKROKE_COLOR_B"] = 6] = "SKROKE_COLOR_B";
    ECircleModelBufferOffset[ECircleModelBufferOffset["SKROKE_COLOR_A"] = 7] = "SKROKE_COLOR_A";
    ECircleModelBufferOffset[ECircleModelBufferOffset["FILL_COLOR_R"] = 8] = "FILL_COLOR_R";
    ECircleModelBufferOffset[ECircleModelBufferOffset["FILL_COLOR_G"] = 9] = "FILL_COLOR_G";
    ECircleModelBufferOffset[ECircleModelBufferOffset["FILL_COLOR_B"] = 10] = "FILL_COLOR_B";
    ECircleModelBufferOffset[ECircleModelBufferOffset["FILL_COLOR_A"] = 11] = "FILL_COLOR_A";
    ECircleModelBufferOffset[ECircleModelBufferOffset["LINE_CAP"] = 12] = "LINE_CAP";
    ECircleModelBufferOffset[ECircleModelBufferOffset["SOLID"] = 13] = "SOLID";
    ECircleModelBufferOffset[ECircleModelBufferOffset["$end"] = 14] = "$end";
})(ECircleModelBufferOffset = exports.ECircleModelBufferOffset || (exports.ECircleModelBufferOffset = {}));
function buildCircleModel(layerItemId, centerPoint, radius, strokeWidth) {
    if (strokeWidth === void 0) { strokeWidth = 1; }
    var elementItemId = Constant_1.globalIdenManager.getElementIden();
    var lineModelItem = new CircleModel(elementItemId, layerItemId, centerPoint.x, centerPoint.y, radius, strokeWidth);
    return lineModelItem;
}
exports.buildCircleModel = buildCircleModel;
var CircleModel = /** @class */ (function (_super) {
    __extends(CircleModel, _super);
    function CircleModel(elementItemId, layerItemId, centerX, centerY, radius, strokeWidth, strokeColor, fillColor, lineCap, isSolid, bbox2) {
        if (strokeColor === void 0) { strokeColor = new Color_1.Color(0, 0, 0, 1); }
        if (fillColor === void 0) { fillColor = new Color_1.Color(0, 0, 0, 0); }
        if (lineCap === void 0) { lineCap = 'round'; }
        if (isSolid === void 0) { isSolid = true; }
        var _this = _super.call(this, elementItemId, layerItemId) || this;
        _this.modelType = ElementConfig_1.EElementType.Circle;
        _this.buffer = new Float64Array(ECircleModelBufferOffset.$end + 4);
        _this.buffer[ECircleModelBufferOffset.CENTER_X] = centerX;
        _this.buffer[ECircleModelBufferOffset.CENTER_Y] = centerY;
        _this.buffer[ECircleModelBufferOffset.RADIUS] = radius;
        _this.buffer[ECircleModelBufferOffset.SKROKE_WIDTH] = strokeWidth;
        _this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_R] = strokeColor.red;
        _this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_G] = strokeColor.green;
        _this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_B] = strokeColor.blue;
        _this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_A] = strokeColor.alpha;
        _this.buffer[ECircleModelBufferOffset.FILL_COLOR_R] = fillColor.red;
        _this.buffer[ECircleModelBufferOffset.FILL_COLOR_G] = fillColor.green;
        _this.buffer[ECircleModelBufferOffset.FILL_COLOR_B] = fillColor.blue;
        _this.buffer[ECircleModelBufferOffset.FILL_COLOR_A] = fillColor.alpha;
        _this.buffer[ECircleModelBufferOffset.LINE_CAP] = (0, Utils_1.setLineCap2Code)(lineCap);
        _this.buffer[ECircleModelBufferOffset.SOLID] = isSolid ? 1 : 0;
        if (!bbox2) {
            _this.bbox2 = (0, Circle_Utils_1.createCircleBbox2)(new Vector2_1.Vector2(centerX, centerY), radius, strokeWidth);
        }
        return _this;
    }
    Object.defineProperty(CircleModel.prototype, "centerPoint", {
        get: function () {
            return new Vector2_1.Vector2(this.buffer[ECircleModelBufferOffset.CENTER_X], this.buffer[ECircleModelBufferOffset.CENTER_Y]);
        },
        set: function (value) {
            this.buffer[ECircleModelBufferOffset.CENTER_X] = value.x;
            this.buffer[ECircleModelBufferOffset.CENTER_Y] = value.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleModel.prototype, "radius", {
        get: function () {
            return this.buffer[ECircleModelBufferOffset.RADIUS];
        },
        set: function (value) {
            this.buffer[ECircleModelBufferOffset.RADIUS] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleModel.prototype, "strokeWidth", {
        get: function () {
            return this.buffer[ECircleModelBufferOffset.SKROKE_WIDTH];
        },
        set: function (value) {
            this.buffer[ECircleModelBufferOffset.SKROKE_WIDTH] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleModel.prototype, "strokeColor", {
        get: function () {
            var red = this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_R];
            var green = this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_G];
            var blue = this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_B];
            var alpha = this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_A];
            return new Color_1.Color(red, green, blue, alpha);
        },
        set: function (value) {
            this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_R] = value.red;
            this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_G] = value.green;
            this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_B] = value.blue;
            this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_A] = value.alpha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleModel.prototype, "fillColor", {
        get: function () {
            var red = this.buffer[ECircleModelBufferOffset.FILL_COLOR_R];
            var green = this.buffer[ECircleModelBufferOffset.FILL_COLOR_G];
            var blue = this.buffer[ECircleModelBufferOffset.FILL_COLOR_B];
            var alpha = this.buffer[ECircleModelBufferOffset.FILL_COLOR_A];
            return new Color_1.Color(red, green, blue, alpha);
        },
        set: function (value) {
            this.buffer[ECircleModelBufferOffset.FILL_COLOR_R] = value.red;
            this.buffer[ECircleModelBufferOffset.FILL_COLOR_G] = value.green;
            this.buffer[ECircleModelBufferOffset.FILL_COLOR_B] = value.blue;
            this.buffer[ECircleModelBufferOffset.FILL_COLOR_A] = value.alpha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleModel.prototype, "lineCap", {
        get: function () {
            return (0, Utils_1.setCodeCap2LineCap)(this.buffer[ECircleModelBufferOffset.LINE_CAP]);
        },
        set: function (value) {
            this.buffer[ECircleModelBufferOffset.LINE_CAP] = (0, Utils_1.setLineCap2Code)(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleModel.prototype, "solid", {
        get: function () {
            return this.buffer[ECircleModelBufferOffset.SOLID] === 1;
        },
        set: function (value) {
            this.buffer[ECircleModelBufferOffset.SOLID] = value ? 1 : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleModel.prototype, "primitive", {
        get: function () {
            return new StructLine_1.StructLine(new Vector2_1.Vector2(0, 0), new Vector2_1.Vector2(0, 0));
        },
        enumerable: false,
        configurable: true
    });
    CircleModel.prototype.getBBox2 = function () {
        return this.bbox2;
    };
    CircleModel.prototype.createBBox2 = function () {
        var bbox2 = (0, Circle_Utils_1.createCircleBbox2)(this.centerPoint, this.radius, this.strokeWidth);
        return bbox2;
    };
    CircleModel.prototype.updateBBox2 = function () {
        this.bbox2 = this.createBBox2();
        return this.bbox2;
    };
    CircleModel.prototype.isInGraphical = function (x, y) {
        var isFill = this.fillColor.alpha > 0;
        var clickPointVector2 = new Vector2_1.Vector2(x, y);
        var centerPoint = this.centerPoint;
        var distOfClickPointAndCenterPoint = clickPointVector2.sub(centerPoint).length;
        if (isFill) {
            if (distOfClickPointAndCenterPoint <= this.radius + this.strokeWidth / 2) {
                return true;
            }
            return false;
        }
        if (distOfClickPointAndCenterPoint >= this.radius - this.strokeWidth / 2 &&
            distOfClickPointAndCenterPoint <= this.radius + this.strokeWidth / 2) {
            return true;
        }
        return false;
    };
    return CircleModel;
}(ElementModelItemBase_1.ElementModelItemBase));
exports.CircleModel = CircleModel;


/***/ }),

/***/ "./src/objects/models/items/DrawLayerModel.ts":
/*!****************************************************!*\
  !*** ./src/objects/models/items/DrawLayerModel.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerModel = void 0;
var DrawLayerBaseItemModel_1 = __webpack_require__(/*! ./drawLayerBase/DrawLayerBaseItemModel */ "./src/objects/models/items/drawLayerBase/DrawLayerBaseItemModel.ts");
var DrawLayerModel = /** @class */ (function (_super) {
    __extends(DrawLayerModel, _super);
    function DrawLayerModel(layerItemId, layerItemName, layerItemType) {
        return _super.call(this, layerItemId, layerItemName, layerItemType) || this;
    }
    return DrawLayerModel;
}(DrawLayerBaseItemModel_1.DrawLayerBaseItemModel));
exports.DrawLayerModel = DrawLayerModel;


/***/ }),

/***/ "./src/objects/models/items/LineModel.ts":
/*!***********************************************!*\
  !*** ./src/objects/models/items/LineModel.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineModel = exports.buildLineModel = exports.ELineModelBufferOffset = void 0;
var Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var ElementModelItemBase_1 = __webpack_require__(/*! ./elementBase/ElementModelItemBase */ "./src/objects/models/items/elementBase/ElementModelItemBase.ts");
var ElementConfig_1 = __webpack_require__(/*! ../../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
var StructLine_1 = __webpack_require__(/*! ../../../geometry/StructLine */ "./src/geometry/StructLine.ts");
var Line_Utils_1 = __webpack_require__(/*! ../../../utils/geometry/Line.Utils */ "./src/utils/geometry/Line.Utils.ts");
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var Utils_1 = __webpack_require__(/*! ../../../utils/Utils */ "./src/utils/Utils.ts");
var ELineModelBufferOffset;
(function (ELineModelBufferOffset) {
    ELineModelBufferOffset[ELineModelBufferOffset["START_X"] = 0] = "START_X";
    ELineModelBufferOffset[ELineModelBufferOffset["START_Y"] = 1] = "START_Y";
    ELineModelBufferOffset[ELineModelBufferOffset["END_X"] = 2] = "END_X";
    ELineModelBufferOffset[ELineModelBufferOffset["END_Y"] = 3] = "END_Y";
    ELineModelBufferOffset[ELineModelBufferOffset["STROKE_WIDTH"] = 4] = "STROKE_WIDTH";
    ELineModelBufferOffset[ELineModelBufferOffset["STROKE_COLOR_R"] = 5] = "STROKE_COLOR_R";
    ELineModelBufferOffset[ELineModelBufferOffset["STROKE_COLOR_G"] = 6] = "STROKE_COLOR_G";
    ELineModelBufferOffset[ELineModelBufferOffset["STROKE_COLOR_B"] = 7] = "STROKE_COLOR_B";
    ELineModelBufferOffset[ELineModelBufferOffset["STROKE_COLOR_A"] = 8] = "STROKE_COLOR_A";
    ELineModelBufferOffset[ELineModelBufferOffset["LINE_CAP"] = 9] = "LINE_CAP";
    ELineModelBufferOffset[ELineModelBufferOffset["SOLID"] = 10] = "SOLID";
    ELineModelBufferOffset[ELineModelBufferOffset["$end"] = 11] = "$end";
})(ELineModelBufferOffset = exports.ELineModelBufferOffset || (exports.ELineModelBufferOffset = {}));
function buildLineModel(layerItemId, startPoint, endPoint, strokeWidth) {
    if (strokeWidth === void 0) { strokeWidth = 1; }
    var elementItemId = Constant_1.globalIdenManager.getElementIden();
    var lineModelItem = new LineModel(elementItemId, layerItemId, startPoint.x, startPoint.y, endPoint.x, endPoint.y, strokeWidth);
    return lineModelItem;
}
exports.buildLineModel = buildLineModel;
var LineModel = /** @class */ (function (_super) {
    __extends(LineModel, _super);
    function LineModel(elementItemId, layerItemId, startX, startY, endX, endY, strokeWidth, strokeColor, lineCap, isSolid, bbox2) {
        if (strokeWidth === void 0) { strokeWidth = 1; }
        if (strokeColor === void 0) { strokeColor = new Color_1.Color(0, 0, 0, 1); }
        if (lineCap === void 0) { lineCap = 'round'; }
        if (isSolid === void 0) { isSolid = true; }
        var _this = _super.call(this, elementItemId, layerItemId) || this;
        _this.modelType = ElementConfig_1.EElementType.Line;
        _this.buffer = new Float64Array(ELineModelBufferOffset.$end + 4);
        _this.buffer[ELineModelBufferOffset.START_X] = startX;
        _this.buffer[ELineModelBufferOffset.START_Y] = startY;
        _this.buffer[ELineModelBufferOffset.END_X] = endX;
        _this.buffer[ELineModelBufferOffset.END_Y] = endY;
        _this.buffer[ELineModelBufferOffset.STROKE_WIDTH] = strokeWidth;
        _this.buffer[ELineModelBufferOffset.STROKE_COLOR_R] = strokeColor.red;
        _this.buffer[ELineModelBufferOffset.STROKE_COLOR_G] = strokeColor.green;
        _this.buffer[ELineModelBufferOffset.STROKE_COLOR_B] = strokeColor.blue;
        _this.buffer[ELineModelBufferOffset.STROKE_COLOR_A] = strokeColor.alpha;
        _this.buffer[ELineModelBufferOffset.LINE_CAP] = (0, Utils_1.setLineCap2Code)(lineCap);
        _this.buffer[ELineModelBufferOffset.SOLID] = isSolid ? 1 : 0;
        if (!bbox2) {
            _this.bbox2 = (0, Line_Utils_1.createLineBbox2)(new Vector2_1.Vector2(startX, startY), new Vector2_1.Vector2(endX, endY), strokeWidth);
        }
        return _this;
    }
    Object.defineProperty(LineModel.prototype, "startPoint", {
        get: function () {
            return new Vector2_1.Vector2(this.buffer[ELineModelBufferOffset.START_X], this.buffer[ELineModelBufferOffset.START_Y]);
        },
        set: function (value) {
            this.buffer[ELineModelBufferOffset.START_X] = value.x;
            this.buffer[ELineModelBufferOffset.START_Y] = value.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "endPoint", {
        get: function () {
            return new Vector2_1.Vector2(this.buffer[ELineModelBufferOffset.END_X], this.buffer[ELineModelBufferOffset.END_Y]);
        },
        set: function (value) {
            this.buffer[ELineModelBufferOffset.END_X] = value.x;
            this.buffer[ELineModelBufferOffset.END_Y] = value.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "strokeWidth", {
        get: function () {
            return this.buffer[ELineModelBufferOffset.STROKE_WIDTH];
        },
        set: function (value) {
            this.buffer[ELineModelBufferOffset.STROKE_WIDTH] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "length", {
        get: function () {
            return this.startPoint.distance(this.endPoint);
        },
        set: function (value) {
            var direct = this.endPoint.sub(this.startPoint).normalize();
            var endPoint = this.startPoint.add(direct.mul(value));
            this.endPoint = endPoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "direct", {
        get: function () {
            return this.endPoint.sub(this.startPoint).normalize();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "strokeColor", {
        get: function () {
            var red = this.buffer[ELineModelBufferOffset.STROKE_COLOR_R];
            var green = this.buffer[ELineModelBufferOffset.STROKE_COLOR_G];
            var blue = this.buffer[ELineModelBufferOffset.STROKE_COLOR_B];
            var alpha = this.buffer[ELineModelBufferOffset.STROKE_COLOR_A];
            return new Color_1.Color(red, green, blue, alpha);
        },
        set: function (value) {
            this.buffer[ELineModelBufferOffset.STROKE_COLOR_R] = value.red;
            this.buffer[ELineModelBufferOffset.STROKE_COLOR_G] = value.green;
            this.buffer[ELineModelBufferOffset.STROKE_COLOR_B] = value.blue;
            this.buffer[ELineModelBufferOffset.STROKE_COLOR_A] = value.alpha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "centerPoint", {
        get: function () {
            var startPoint = this.startPoint;
            var endPoint = this.endPoint;
            return new Vector2_1.Vector2((endPoint.x - startPoint.x) / 2, (endPoint.y - startPoint.y) / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "lineCap", {
        get: function () {
            return (0, Utils_1.setCodeCap2LineCap)(this.buffer[ELineModelBufferOffset.LINE_CAP]);
        },
        set: function (value) {
            this.buffer[ELineModelBufferOffset.LINE_CAP] = (0, Utils_1.setLineCap2Code)(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "solid", {
        get: function () {
            return this.buffer[ELineModelBufferOffset.SOLID] === 1;
        },
        set: function (value) {
            this.buffer[ELineModelBufferOffset.SOLID] = value ? 1 : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineModel.prototype, "primitive", {
        get: function () {
            return new StructLine_1.StructLine(this.startPoint, this.endPoint);
        },
        enumerable: false,
        configurable: true
    });
    LineModel.prototype.getBBox2 = function () {
        return this.bbox2;
    };
    LineModel.prototype.createBBox2 = function () {
        var bbox2 = (0, Line_Utils_1.createLineBbox2)(this.startPoint, this.endPoint, this.buffer[ELineModelBufferOffset.STROKE_WIDTH]);
        return bbox2;
    };
    LineModel.prototype.updateBBox2 = function () {
        this.bbox2 = this.createBBox2();
        return this.bbox2;
    };
    LineModel.prototype.isInGraphical = function (x, y) {
        var strokeWidth = this.strokeWidth;
        var dStartPointx = x - this.startPoint.x;
        var dStartPointy = y - this.startPoint.y;
        var dEndPointx = x - this.endPoint.x;
        var dEndPointy = y - this.endPoint.y;
        var dWidth = this.endPoint.x - this.startPoint.x;
        var dHeight = this.endPoint.y - this.startPoint.y;
        var vertical = new Vector2_1.Vector2(-dHeight, dWidth).normalize();
        var limitX = dWidth + (vertical.x * strokeWidth) / 2;
        var limitY = dHeight + (vertical.y * strokeWidth) / 2;
        var limit = limitX * limitX + limitY * limitY;
        var sumSquStart = dStartPointx * dStartPointx + dStartPointy * dStartPointy;
        var sumSquEnd = dEndPointx * dEndPointx + dEndPointy * dEndPointy;
        var area = Math.abs(dStartPointx * dHeight - dStartPointy * dWidth) / 2;
        var length = Math.sqrt(dWidth * dWidth + dHeight * dHeight);
        var areaContent = (length * strokeWidth) / 4;
        if (area <= areaContent && sumSquStart <= limit && sumSquEnd <= limit) {
            return true;
        }
        var r = strokeWidth / 2;
        if (sumSquStart <= r * r) {
            return true;
        }
        if (sumSquEnd <= r * r) {
            return true;
        }
        return false;
    };
    return LineModel;
}(ElementModelItemBase_1.ElementModelItemBase));
exports.LineModel = LineModel;


/***/ }),

/***/ "./src/objects/models/items/drawLayerBase/DrawLayerBaseItemModel.ts":
/*!**************************************************************************!*\
  !*** ./src/objects/models/items/drawLayerBase/DrawLayerBaseItemModel.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerBaseItemModel = void 0;
var DrawLayerBaseItemModel = /** @class */ (function () {
    function DrawLayerBaseItemModel(layerItemId, layerItemName, layerItemType) {
        this._layerItemType = undefined;
        this._layerItemName = layerItemName;
        this._layerItemOpacity = 1;
        this._groupId = undefined;
        this._layerItemId = layerItemId;
        this._layerItemType = layerItemType;
    }
    Object.defineProperty(DrawLayerBaseItemModel.prototype, "layerItemType", {
        get: function () {
            return this._layerItemType;
        },
        set: function (value) {
            this._layerItemType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerBaseItemModel.prototype, "layerItemName", {
        get: function () {
            return this._layerItemName;
        },
        set: function (value) {
            this._layerItemName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerBaseItemModel.prototype, "layerItemOpacity", {
        get: function () {
            return this._layerItemOpacity;
        },
        set: function (value) {
            this._layerItemOpacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerBaseItemModel.prototype, "groupId", {
        get: function () {
            return this._groupId;
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerBaseItemModel.prototype, "layerItemId", {
        get: function () {
            return this._layerItemId;
        },
        set: function (value) {
            this._layerItemId = value;
        },
        enumerable: false,
        configurable: true
    });
    return DrawLayerBaseItemModel;
}());
exports.DrawLayerBaseItemModel = DrawLayerBaseItemModel;


/***/ }),

/***/ "./src/objects/models/items/elementBase/ElementModelBase.ts":
/*!******************************************************************!*\
  !*** ./src/objects/models/items/elementBase/ElementModelBase.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementModelBase = void 0;
var ElementModelBase = /** @class */ (function () {
    function ElementModelBase() {
    }
    return ElementModelBase;
}());
exports.ElementModelBase = ElementModelBase;


/***/ }),

/***/ "./src/objects/models/items/elementBase/ElementModelItemBase.ts":
/*!**********************************************************************!*\
  !*** ./src/objects/models/items/elementBase/ElementModelItemBase.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementModelItemBase = void 0;
var ElementModelBase_1 = __webpack_require__(/*! ./ElementModelBase */ "./src/objects/models/items/elementBase/ElementModelBase.ts");
var ElementModelItemBase = /** @class */ (function (_super) {
    __extends(ElementModelItemBase, _super);
    function ElementModelItemBase(elementItemId, layerItemId) {
        var _this = _super.call(this) || this;
        _this._elementItemId = elementItemId;
        _this._elementItemName = '';
        _this._groupId = undefined;
        _this._parent = null;
        _this._buffer = undefined;
        _this._visible = true;
        _this._layerItemId = layerItemId;
        _this._bbox2 = null;
        return _this;
    }
    Object.defineProperty(ElementModelItemBase.prototype, "elementItemName", {
        get: function () {
            return this._elementItemName;
        },
        set: function (value) {
            this._elementItemName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementModelItemBase.prototype, "elementItemId", {
        get: function () {
            return this._elementItemId;
        },
        set: function (value) {
            this._elementItemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementModelItemBase.prototype, "groupId", {
        get: function () {
            return this._groupId;
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementModelItemBase.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (value) {
            this._parent = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementModelItemBase.prototype, "buffer", {
        get: function () {
            return this._buffer;
        },
        set: function (value) {
            this._buffer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementModelItemBase.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            this._visible = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementModelItemBase.prototype, "modelType", {
        get: function () {
            return this._modelType;
        },
        set: function (value) {
            this._modelType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementModelItemBase.prototype, "layerItemId", {
        get: function () {
            return this._layerItemId;
        },
        set: function (value) {
            this._layerItemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementModelItemBase.prototype, "bbox2", {
        get: function () {
            return this._bbox2;
        },
        set: function (value) {
            this._bbox2 = value;
        },
        enumerable: false,
        configurable: true
    });
    ElementModelItemBase.prototype.updateBuffer = function (offset, data) {
        if (this.buffer) {
            this.buffer.set(data, offset);
        }
    };
    return ElementModelItemBase;
}(ElementModelBase_1.ElementModelBase));
exports.ElementModelItemBase = ElementModelItemBase;


/***/ }),

/***/ "./src/objects/models/manager/CircleModelManager.ts":
/*!**********************************************************!*\
  !*** ./src/objects/models/manager/CircleModelManager.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleModelManager = void 0;
var Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
var CircleModel_1 = __webpack_require__(/*! ../items/CircleModel */ "./src/objects/models/items/CircleModel.ts");
var CircleModelManager = /** @class */ (function (_super) {
    __extends(CircleModelManager, _super);
    function CircleModelManager() {
        return _super.call(this) || this;
    }
    CircleModelManager.getInstance = function () {
        if (CircleModelManager.thisInstance === undefined) {
            CircleModelManager.thisInstance = new CircleModelManager();
        }
        return CircleModelManager.thisInstance;
    };
    CircleModelManager.prototype.createModelItem = function (layerItemId, centerPoint, radius, strokeWidth) {
        if (strokeWidth === void 0) { strokeWidth = 1; }
        var circleModelItem = (0, CircleModel_1.buildCircleModel)(layerItemId, centerPoint, radius, strokeWidth);
        this.items.set(circleModelItem.elementItemId, circleModelItem);
        return circleModelItem;
    };
    CircleModelManager.prototype.deleteModelItem = function (elementItemId) {
        var lineModelItem = this.items.get(elementItemId);
        if (!lineModelItem) {
            return;
        }
        this.items.delete(lineModelItem.elementItemId);
    };
    return CircleModelManager;
}(Manage_1.Manager));
exports.CircleModelManager = CircleModelManager;


/***/ }),

/***/ "./src/objects/models/manager/DrawLayerModelManager.ts":
/*!*************************************************************!*\
  !*** ./src/objects/models/manager/DrawLayerModelManager.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerModelManager = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ../../../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
var DrawLayerModel_1 = __webpack_require__(/*! ../items/DrawLayerModel */ "./src/objects/models/items/DrawLayerModel.ts");
var DrawLayerModelManager = /** @class */ (function (_super) {
    __extends(DrawLayerModelManager, _super);
    function DrawLayerModelManager() {
        return _super.call(this) || this;
    }
    DrawLayerModelManager.getInstance = function () {
        if (DrawLayerModelManager.thisInstance === undefined) {
            DrawLayerModelManager.thisInstance = new DrawLayerModelManager();
        }
        return DrawLayerModelManager.thisInstance;
    };
    DrawLayerModelManager.prototype.createControlItem = function (layerItemName) {
        var newLayerModelItem = new DrawLayerModel_1.DrawLayerModel(DrawLayerConfig_1.EDrawLayerCode.MaskLayer, layerItemName, DrawLayerConfig_1.EDrawLayerType.ControlDrawLayer);
        this.items.set(newLayerModelItem.layerItemId, newLayerModelItem);
        return newLayerModelItem;
    };
    DrawLayerModelManager.prototype.createContentItem = function (layerItemName) {
        var newLayerModelItem = new DrawLayerModel_1.DrawLayerModel(Constant_1.globalIdenManager.getHashIden(), layerItemName, DrawLayerConfig_1.EDrawLayerType.ContentDrawLayer);
        this.items.set(newLayerModelItem.layerItemId, newLayerModelItem);
        return newLayerModelItem;
    };
    return DrawLayerModelManager;
}(Manage_1.Manager));
exports.DrawLayerModelManager = DrawLayerModelManager;


/***/ }),

/***/ "./src/objects/models/manager/LineModelManager.ts":
/*!********************************************************!*\
  !*** ./src/objects/models/manager/LineModelManager.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineModelManager = void 0;
var Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
var LineModel_1 = __webpack_require__(/*! ../items/LineModel */ "./src/objects/models/items/LineModel.ts");
var LineModelManager = /** @class */ (function (_super) {
    __extends(LineModelManager, _super);
    function LineModelManager() {
        return _super.call(this) || this;
    }
    LineModelManager.getInstance = function () {
        if (LineModelManager.thisInstance === undefined) {
            LineModelManager.thisInstance = new LineModelManager();
        }
        return LineModelManager.thisInstance;
    };
    LineModelManager.prototype.createModelItem = function (layerItemId, startPoint, endPoint, strokeWidth) {
        if (strokeWidth === void 0) { strokeWidth = 1; }
        var lineModelItem = (0, LineModel_1.buildLineModel)(layerItemId, startPoint, endPoint, strokeWidth);
        this.items.set(lineModelItem.elementItemId, lineModelItem);
        return lineModelItem;
    };
    LineModelManager.prototype.deleteModelItem = function (elementItemId) {
        var lineModelItem = this.items.get(elementItemId);
        if (!lineModelItem) {
            return;
        }
        this.items.delete(lineModelItem.elementItemId);
    };
    return LineModelManager;
}(Manage_1.Manager));
exports.LineModelManager = LineModelManager;


/***/ }),

/***/ "./src/objects/shapes/items/CircleShape.ts":
/*!*************************************************!*\
  !*** ./src/objects/shapes/items/CircleShape.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShape = exports.buildCircleShape = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
var ElementShapeItemBase_1 = __webpack_require__(/*! ./elementBase/ElementShapeItemBase */ "./src/objects/shapes/items/elementBase/ElementShapeItemBase.ts");
var CircleModel_1 = __webpack_require__(/*! ../../models/items/CircleModel */ "./src/objects/models/items/CircleModel.ts");
function buildCircleShape(layerItemId, centerPoint, radius, strokeWidth, strokeColor, fillColor) {
    if (strokeWidth === void 0) { strokeWidth = 1; }
    if (strokeColor === void 0) { strokeColor = Color_1.Color.BLACK; }
    if (fillColor === void 0) { fillColor = new Color_1.Color(0, 0, 0, 0); }
    var circleModelItem = (0, CircleModel_1.buildCircleModel)(layerItemId, centerPoint, radius, strokeWidth);
    var circleShapeItem = new CircleShape(circleModelItem);
    circleShapeItem.strokeColor = strokeColor;
    circleShapeItem.fillColor = fillColor;
    return circleShapeItem;
}
exports.buildCircleShape = buildCircleShape;
var CircleShape = /** @class */ (function (_super) {
    __extends(CircleShape, _super);
    function CircleShape(model) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.refreshRender();
        return _this;
    }
    Object.defineProperty(CircleShape.prototype, "elementItemName", {
        get: function () {
            return this.model.elementItemName;
        },
        set: function (value) {
            ;
            this.model.elementItemName = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "centerPoint", {
        get: function () {
            return this.model.centerPoint;
        },
        set: function (value) {
            ;
            this.model.centerPoint = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "radius", {
        get: function () {
            return this.model.radius;
        },
        set: function (value) {
            if (value < 0) {
                value = -value;
            }
            ;
            this.model.radius = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "strokeWidth", {
        get: function () {
            return this.model.strokeWidth;
        },
        set: function (value) {
            ;
            this.model.strokeWidth = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "strokeColor", {
        get: function () {
            return this.model.strokeColor;
        },
        set: function (value) {
            ;
            this.model.strokeColor = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "fillColor", {
        get: function () {
            return this.model.fillColor;
        },
        set: function (value) {
            ;
            this.model.fillColor = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "lineCap", {
        get: function () {
            return this.model.lineCap;
        },
        set: function (value) {
            ;
            this.model.lineCap = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleShape.prototype, "solid", {
        get: function () {
            return this.model.solid;
        },
        set: function (value) {
            ;
            this.model.solid = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    CircleShape.prototype.isSelect = function (x, y) {
        return this.model.isInGraphical(x, y);
    };
    CircleShape.prototype.transform = function (value) {
        var centerPoint = this.centerPoint.multiplyMatrix4(value);
        this.centerPoint = centerPoint;
        this.refreshRender();
    };
    CircleShape.prototype.updateRadius = function (x, y) {
        var point = new Vector2_1.Vector2(x, y);
        var centerPoint = this.centerPoint;
        var distOfClickPointAndCenterPoint = point.sub(centerPoint).length;
        this.radius = distOfClickPointAndCenterPoint;
    };
    CircleShape.prototype.getType = function () {
        return ElementConfig_1.EElementType.Circle;
    };
    CircleShape.prototype.getStatus = function () {
        return this.status;
    };
    CircleShape.prototype.getRenderData = function () {
        var itemModel = this.model;
        return {
            type: this.getType(),
            modelType: this.model.modelType,
            status: this.status,
            layerItemId: itemModel.layerItemId,
            elementItemId: itemModel.elementItemId,
            centerPoint: itemModel.centerPoint,
            radius: itemModel.radius,
            strokeWidth: itemModel.strokeWidth,
            strokeColor: itemModel.strokeColor.toRGBAJSON(),
            fillColor: itemModel.fillColor.toRGBAJSON(),
            lineCap: itemModel.lineCap,
            isSolid: itemModel.solid,
        };
    };
    return CircleShape;
}(ElementShapeItemBase_1.ElementShapeItemBase));
exports.CircleShape = CircleShape;


/***/ }),

/***/ "./src/objects/shapes/items/DrawLayerShape.ts":
/*!****************************************************!*\
  !*** ./src/objects/shapes/items/DrawLayerShape.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerShape = void 0;
var DrawLayerShapeItemBase_1 = __webpack_require__(/*! ./drawLayerBase/DrawLayerShapeItemBase */ "./src/objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase.ts");
var DrawLayerShape = /** @class */ (function (_super) {
    __extends(DrawLayerShape, _super);
    function DrawLayerShape(model) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.refreshRender();
        return _this;
    }
    DrawLayerShape.prototype.getType = function () {
        return this.model.layerItemType;
    };
    DrawLayerShape.prototype.getStatus = function () {
        return this.status;
    };
    DrawLayerShape.prototype.getRenderData = function () {
        var itemModel = this.model;
        return {
            status: this.status,
            layerItemId: itemModel.layerItemId,
            layerItemName: itemModel.layerItemName,
            layerItemOpacity: itemModel.layerItemOpacity,
            groupId: itemModel.groupId,
        };
    };
    return DrawLayerShape;
}(DrawLayerShapeItemBase_1.DrawLayerShapeItemBase));
exports.DrawLayerShape = DrawLayerShape;


/***/ }),

/***/ "./src/objects/shapes/items/LineShape.ts":
/*!***********************************************!*\
  !*** ./src/objects/shapes/items/LineShape.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineShape = exports.buildLineShape = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var LineModel_1 = __webpack_require__(/*! ../../models/items/LineModel */ "./src/objects/models/items/LineModel.ts");
var Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
var ElementShapeItemBase_1 = __webpack_require__(/*! ./elementBase/ElementShapeItemBase */ "./src/objects/shapes/items/elementBase/ElementShapeItemBase.ts");
function buildLineShape(layerItemId, startPoint, endPoint, strokeWidth, strokeColor) {
    if (strokeWidth === void 0) { strokeWidth = 1; }
    if (strokeColor === void 0) { strokeColor = Color_1.Color.BLACK; }
    var lineModelItem = (0, LineModel_1.buildLineModel)(layerItemId, startPoint, endPoint, strokeWidth);
    var lineShapeItem = new LineShape(lineModelItem);
    lineShapeItem.strokeColor = strokeColor;
    return lineShapeItem;
}
exports.buildLineShape = buildLineShape;
var LineShape = /** @class */ (function (_super) {
    __extends(LineShape, _super);
    function LineShape(model) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.refreshRender();
        return _this;
    }
    Object.defineProperty(LineShape.prototype, "elementItemName", {
        get: function () {
            return this.model.elementItemName;
        },
        set: function (value) {
            ;
            this.model.elementItemName = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "startPoint", {
        get: function () {
            return this.model.startPoint;
        },
        set: function (value) {
            ;
            this.model.startPoint = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "endPoint", {
        get: function () {
            return this.model.endPoint;
        },
        set: function (value) {
            ;
            this.model.endPoint = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "strokeWidth", {
        get: function () {
            return this.model.strokeWidth;
        },
        set: function (value) {
            ;
            this.model.strokeWidth = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "length", {
        get: function () {
            return this.model.length;
        },
        set: function (value) {
            ;
            this.model.length = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "strokeColor", {
        get: function () {
            return this.model.strokeColor;
        },
        set: function (value) {
            ;
            this.model.strokeColor = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "lineCap", {
        get: function () {
            return this.model.lineCap;
        },
        set: function (value) {
            ;
            this.model.lineCap = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "solid", {
        get: function () {
            return this.model.solid;
        },
        set: function (value) {
            ;
            this.model.solid = value;
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineShape.prototype, "centerPoint", {
        get: function () {
            return this.model.centerPoint;
        },
        enumerable: false,
        configurable: true
    });
    LineShape.prototype.isSelect = function (x, y) {
        return this.model.isInGraphical(x, y);
    };
    LineShape.prototype.transform = function (value) {
        var startPoint = this.startPoint.multiplyMatrix4(value);
        var endPoint = this.endPoint.multiplyMatrix4(value);
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.refreshRender();
    };
    LineShape.prototype.getType = function () {
        return ElementConfig_1.EElementType.Line;
    };
    LineShape.prototype.getStatus = function () {
        return this.status;
    };
    LineShape.prototype.getRenderData = function () {
        var itemModel = this.model;
        return {
            type: this.getType(),
            modelType: this.model.modelType,
            status: this.status,
            layerItemId: itemModel.layerItemId,
            elementItemId: itemModel.elementItemId,
            startPoint: itemModel.startPoint,
            endPoint: itemModel.endPoint,
            strokeWidth: itemModel.strokeWidth,
            length: itemModel.length,
            lineCap: itemModel.lineCap,
            isSolid: itemModel.solid,
            strokeColor: itemModel.strokeColor.toRGBAJSON(),
        };
    };
    return LineShape;
}(ElementShapeItemBase_1.ElementShapeItemBase));
exports.LineShape = LineShape;


/***/ }),

/***/ "./src/objects/shapes/items/drawLayerBase/DrawLayerShapeBase.ts":
/*!**********************************************************************!*\
  !*** ./src/objects/shapes/items/drawLayerBase/DrawLayerShapeBase.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerShapeBase = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ../../../../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var Context_1 = __webpack_require__(/*! ../../../../utils/Context */ "./src/utils/Context.ts");
var DrawLayerShapeBase = /** @class */ (function (_super) {
    __extends(DrawLayerShapeBase, _super);
    function DrawLayerShapeBase() {
        return _super.call(this, DrawLayerConfig_1.DRAWLAYER_INIT_STATUS) || this;
    }
    return DrawLayerShapeBase;
}(Context_1.Context));
exports.DrawLayerShapeBase = DrawLayerShapeBase;


/***/ }),

/***/ "./src/objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase.ts":
/*!**************************************************************************!*\
  !*** ./src/objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerShapeItemBase = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ../../../../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var Constant_1 = __webpack_require__(/*! ../../../../Constant */ "./src/Constant.ts");
var DrawLayerShapeBase_1 = __webpack_require__(/*! ./DrawLayerShapeBase */ "./src/objects/shapes/items/drawLayerBase/DrawLayerShapeBase.ts");
var DrawLayerShapeItemBase = /** @class */ (function (_super) {
    __extends(DrawLayerShapeItemBase, _super);
    function DrawLayerShapeItemBase() {
        var _this = _super.call(this) || this;
        _this._model = null;
        return _this;
    }
    Object.defineProperty(DrawLayerShapeItemBase.prototype, "layerItemId", {
        get: function () {
            return this._model.layerItemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerShapeItemBase.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    DrawLayerShapeItemBase.prototype.refreshRender = function () {
        Constant_1.modifyController.attachLayer(this);
    };
    Object.defineProperty(DrawLayerShapeItemBase.prototype, "visible", {
        get: function () {
            return this.isStatusMatch(DrawLayerConfig_1.EDrawLayerStatus.VISIBLE);
        },
        set: function (value) {
            this.setStatusMatch(DrawLayerConfig_1.EDrawLayerStatus.VISIBLE, value);
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerShapeItemBase.prototype, "locked", {
        get: function () {
            return this.isStatusMatch(DrawLayerConfig_1.EDrawLayerStatus.LOCKED);
        },
        set: function (value) {
            this.setStatusMatch(DrawLayerConfig_1.EDrawLayerStatus.LOCKED, value);
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerShapeItemBase.prototype, "killed", {
        get: function () {
            return this.isStatusMatch(DrawLayerConfig_1.EDrawLayerStatus.KILLED);
        },
        set: function (value) {
            this.setStatusMatch(DrawLayerConfig_1.EDrawLayerStatus.KILLED, value);
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    DrawLayerShapeItemBase.prototype.setSelect = function () { };
    DrawLayerShapeItemBase.prototype.setUnSelect = function () { };
    DrawLayerShapeItemBase.prototype.setDelete = function () {
        this.killed = true;
    };
    return DrawLayerShapeItemBase;
}(DrawLayerShapeBase_1.DrawLayerShapeBase));
exports.DrawLayerShapeItemBase = DrawLayerShapeItemBase;


/***/ }),

/***/ "./src/objects/shapes/items/elementBase/ElementShapeBase.ts":
/*!******************************************************************!*\
  !*** ./src/objects/shapes/items/elementBase/ElementShapeBase.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementShapeBase = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var Context_1 = __webpack_require__(/*! ../../../../utils/Context */ "./src/utils/Context.ts");
var ElementShapeBase = /** @class */ (function (_super) {
    __extends(ElementShapeBase, _super);
    function ElementShapeBase() {
        return _super.call(this, ElementConfig_1.ELEMENT_INIT_STATUS) || this;
    }
    return ElementShapeBase;
}(Context_1.Context));
exports.ElementShapeBase = ElementShapeBase;


/***/ }),

/***/ "./src/objects/shapes/items/elementBase/ElementShapeItemBase.ts":
/*!**********************************************************************!*\
  !*** ./src/objects/shapes/items/elementBase/ElementShapeItemBase.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementShapeItemBase = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var Constant_1 = __webpack_require__(/*! ../../../../Constant */ "./src/Constant.ts");
var ElementShapeBase_1 = __webpack_require__(/*! ./ElementShapeBase */ "./src/objects/shapes/items/elementBase/ElementShapeBase.ts");
var ElementShapeItemBase = /** @class */ (function (_super) {
    __extends(ElementShapeItemBase, _super);
    function ElementShapeItemBase() {
        var _this = _super.call(this) || this;
        _this._model = null;
        return _this;
    }
    Object.defineProperty(ElementShapeItemBase.prototype, "elementItemId", {
        get: function () {
            return this._model.elementItemId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementShapeItemBase.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    ElementShapeItemBase.prototype.refreshRender = function () {
        Constant_1.modifyController.attachElement(this);
    };
    Object.defineProperty(ElementShapeItemBase.prototype, "visible", {
        get: function () {
            return this.isStatusMatch(ElementConfig_1.EElementStatus.VISIBLE);
        },
        set: function (value) {
            this.setStatusMatch(ElementConfig_1.EElementStatus.VISIBLE, value);
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementShapeItemBase.prototype, "hightlight", {
        get: function () {
            return this.isStatusMatch(ElementConfig_1.EElementStatus.HIGHTLIGHT);
        },
        set: function (value) {
            this.setStatusMatch(ElementConfig_1.EElementStatus.HIGHTLIGHT, value);
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementShapeItemBase.prototype, "locked", {
        get: function () {
            return this.isStatusMatch(ElementConfig_1.EElementStatus.LOCKED);
        },
        set: function (value) {
            this.setStatusMatch(ElementConfig_1.EElementStatus.LOCKED, value);
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementShapeItemBase.prototype, "killed", {
        get: function () {
            return this.isStatusMatch(ElementConfig_1.EElementStatus.KILLED);
        },
        set: function (value) {
            this.setStatusMatch(ElementConfig_1.EElementStatus.KILLED, value);
            this.refreshRender();
        },
        enumerable: false,
        configurable: true
    });
    ElementShapeItemBase.prototype.setSelect = function () {
        this.visible = true;
        this.hightlight = true;
    };
    ElementShapeItemBase.prototype.setUnSelect = function () {
        this.visible = true;
        this.hightlight = false;
    };
    ElementShapeItemBase.prototype.setDelete = function () {
        this.killed = true;
    };
    return ElementShapeItemBase;
}(ElementShapeBase_1.ElementShapeBase));
exports.ElementShapeItemBase = ElementShapeItemBase;


/***/ }),

/***/ "./src/objects/shapes/manager/CircleShapeManager.ts":
/*!**********************************************************!*\
  !*** ./src/objects/shapes/manager/CircleShapeManager.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShapeManager = void 0;
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var RtreeItem_1 = __webpack_require__(/*! ../../../geometry/RtreeItem */ "./src/geometry/RtreeItem.ts");
var Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
var CircleShape_1 = __webpack_require__(/*! ../items/CircleShape */ "./src/objects/shapes/items/CircleShape.ts");
var CircleModelManager_1 = __webpack_require__(/*! ../../models/manager/CircleModelManager */ "./src/objects/models/manager/CircleModelManager.ts");
var CircleShapeManager = /** @class */ (function (_super) {
    __extends(CircleShapeManager, _super);
    function CircleShapeManager() {
        var _this = _super.call(this) || this;
        _this._rteeItems = new Map();
        return _this;
    }
    CircleShapeManager.getInstance = function () {
        if (CircleShapeManager.thisInstance === undefined) {
            CircleShapeManager.thisInstance = new CircleShapeManager();
        }
        return CircleShapeManager.thisInstance;
    };
    CircleShapeManager.prototype.createShapeItem = function (layerItemId, centerPoint, radius, strokeWidth) {
        if (strokeWidth === void 0) { strokeWidth = 1; }
        var circleShapeItem = (0, CircleShape_1.buildCircleShape)(layerItemId, centerPoint, radius, strokeWidth);
        var op = this.addCache(circleShapeItem);
        return circleShapeItem;
    };
    CircleShapeManager.prototype.deleteShapeItem = function (elementItemId) {
        var circleShapeItem = this.items.get(elementItemId);
        if (!circleShapeItem) {
            return;
        }
        var op = this.deleteCache(elementItemId);
        if (op === false) {
            return;
        }
        CircleModelManager_1.CircleModelManager.getInstance().deleteModelItem(elementItemId);
        circleShapeItem.setDelete();
        CircleModelManager_1.CircleModelManager.getInstance().deleteModelItem(elementItemId);
    };
    CircleShapeManager.prototype.addCache = function (circleShapeItem) {
        this.items.set(circleShapeItem.model.elementItemId, circleShapeItem);
        var rtreeItem = new RtreeItem_1.RtreeItem(circleShapeItem);
        this._rteeItems.set(circleShapeItem.model.elementItemId, rtreeItem);
        Constant_1.rtree.insertItemData(RtreeItem_1.RtreeItem.getSimpleRectFromModelBbox2(circleShapeItem), rtreeItem);
        return true;
    };
    CircleShapeManager.prototype.deleteCache = function (elementItemId) {
        var targetShapeItem = this.items.get(elementItemId);
        if (!targetShapeItem) {
            return false;
        }
        var rtreeItem = this._rteeItems.get(elementItemId);
        var deleteResults = Constant_1.rtree.removeTarget(RtreeItem_1.RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
        if (!deleteResults.length) {
            return false;
        }
        this.items.delete(elementItemId);
        this._rteeItems.delete(elementItemId);
        return true;
    };
    return CircleShapeManager;
}(Manage_1.Manager));
exports.CircleShapeManager = CircleShapeManager;


/***/ }),

/***/ "./src/objects/shapes/manager/DrawLayerShapeManager.ts":
/*!*************************************************************!*\
  !*** ./src/objects/shapes/manager/DrawLayerShapeManager.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerShapeManager = void 0;
var Helper_1 = __webpack_require__(/*! ../../../utils/Helper */ "./src/utils/Helper.ts");
var Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
var DrawLayerModelManager_1 = __webpack_require__(/*! ../../models/manager/DrawLayerModelManager */ "./src/objects/models/manager/DrawLayerModelManager.ts");
var DrawLayerShape_1 = __webpack_require__(/*! ../items/DrawLayerShape */ "./src/objects/shapes/items/DrawLayerShape.ts");
var DrawLayerShapeManager = /** @class */ (function (_super) {
    __extends(DrawLayerShapeManager, _super);
    function DrawLayerShapeManager() {
        return _super.call(this) || this;
    }
    DrawLayerShapeManager.getInstance = function () {
        if (DrawLayerShapeManager.thisInstance === undefined) {
            DrawLayerShapeManager.thisInstance = new DrawLayerShapeManager();
        }
        return DrawLayerShapeManager.thisInstance;
    };
    Object.defineProperty(DrawLayerShapeManager.prototype, "selectedLayersId", {
        get: function () {
            return this._selectedLayersId;
        },
        set: function (value) {
            this._selectedLayersId = value;
        },
        enumerable: false,
        configurable: true
    });
    DrawLayerShapeManager.prototype.createControlShapeItem = function (layerItemName) {
        var layerModelItem = DrawLayerModelManager_1.DrawLayerModelManager.getInstance().createControlItem(layerItemName);
        var drawLayerShapeItem = new DrawLayerShape_1.DrawLayerShape(layerModelItem);
        this.addCache(drawLayerShapeItem);
        return drawLayerShapeItem;
    };
    DrawLayerShapeManager.prototype.createContentShapeItem = function (layerItemName) {
        var layerModelItem = DrawLayerModelManager_1.DrawLayerModelManager.getInstance().createContentItem(layerItemName);
        var drawLayerShapeItem = new DrawLayerShape_1.DrawLayerShape(layerModelItem);
        this.addCache(drawLayerShapeItem);
        this.selectedLayersId = new Set([drawLayerShapeItem.model.layerItemId]);
        return drawLayerShapeItem;
    };
    DrawLayerShapeManager.prototype.deleteContentShapeItem = function (layerItemId) {
        var drawLayerShapeItem = this.items.get(layerItemId);
        if (!drawLayerShapeItem) {
            return;
        }
        var allElementShapes = Helper_1.Helper.getAllElementShapes();
        for (var i = 0; i < allElementShapes.length; i++) {
            if (allElementShapes[i].model.layerItemId !== layerItemId) {
                continue;
            }
            Helper_1.Helper.deleteElementItem(allElementShapes[i]);
        }
        drawLayerShapeItem.setDelete();
        this.deleteCache(layerItemId);
    };
    DrawLayerShapeManager.prototype.getActiveItem = function () {
        return this.items.get(Array.from(this.selectedLayersId)[0]);
    };
    DrawLayerShapeManager.prototype.setActiveItem = function (layerItemId) {
        if (!this.items.has(layerItemId)) {
            return;
        }
        this.selectedLayersId = new Set([layerItemId]);
    };
    DrawLayerShapeManager.prototype.addCache = function (drawLayerShapeItem) {
        this.items.set(drawLayerShapeItem.model.layerItemId, drawLayerShapeItem);
    };
    DrawLayerShapeManager.prototype.deleteCache = function (drawLayerShapeId) {
        this.items.delete(drawLayerShapeId);
        if (this.selectedLayersId.has(drawLayerShapeId)) {
            this.selectedLayersId.delete(drawLayerShapeId);
        }
    };
    return DrawLayerShapeManager;
}(Manage_1.Manager));
exports.DrawLayerShapeManager = DrawLayerShapeManager;


/***/ }),

/***/ "./src/objects/shapes/manager/LineShapeManager.ts":
/*!********************************************************!*\
  !*** ./src/objects/shapes/manager/LineShapeManager.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineShapeManager = void 0;
var LineModelManager_1 = __webpack_require__(/*! ../../models/manager/LineModelManager */ "./src/objects/models/manager/LineModelManager.ts");
var LineShape_1 = __webpack_require__(/*! ../items/LineShape */ "./src/objects/shapes/items/LineShape.ts");
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var RtreeItem_1 = __webpack_require__(/*! ../../../geometry/RtreeItem */ "./src/geometry/RtreeItem.ts");
var Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
var LineShapeManager = /** @class */ (function (_super) {
    __extends(LineShapeManager, _super);
    function LineShapeManager() {
        var _this = _super.call(this) || this;
        _this._rteeItems = new Map();
        return _this;
    }
    LineShapeManager.getInstance = function () {
        if (LineShapeManager.thisInstance === undefined) {
            LineShapeManager.thisInstance = new LineShapeManager();
        }
        return LineShapeManager.thisInstance;
    };
    LineShapeManager.prototype.createShapeItem = function (layerItemId, startPoint, endPoint, width) {
        if (width === void 0) { width = 1; }
        var lineShapeItem = (0, LineShape_1.buildLineShape)(layerItemId, startPoint, endPoint, width);
        var op = this.addCache(lineShapeItem);
        return lineShapeItem;
    };
    LineShapeManager.prototype.deleteShapeItem = function (elementItemId) {
        var lineShapeItem = this.items.get(elementItemId);
        if (!lineShapeItem) {
            return;
        }
        var op = this.deleteCache(elementItemId);
        if (op === false) {
            return;
        }
        LineModelManager_1.LineModelManager.getInstance().deleteModelItem(elementItemId);
        lineShapeItem.setDelete();
    };
    LineShapeManager.prototype.addCache = function (lineShapeItem) {
        this.items.set(lineShapeItem.model.elementItemId, lineShapeItem);
        var rtreeItem = new RtreeItem_1.RtreeItem(lineShapeItem);
        this._rteeItems.set(lineShapeItem.model.elementItemId, rtreeItem);
        Constant_1.rtree.insertItemData(RtreeItem_1.RtreeItem.getSimpleRectFromModelBbox2(lineShapeItem), rtreeItem);
        return true;
    };
    LineShapeManager.prototype.deleteCache = function (elementItemId) {
        var targetShapeItem = this.items.get(elementItemId);
        if (!targetShapeItem) {
            return false;
        }
        var rtreeItem = this._rteeItems.get(elementItemId);
        var deleteResults = Constant_1.rtree.removeTarget(RtreeItem_1.RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
        if (!deleteResults.length) {
            return false;
        }
        this.items.delete(elementItemId);
        this._rteeItems.delete(elementItemId);
        return true;
    };
    return LineShapeManager;
}(Manage_1.Manager));
exports.LineShapeManager = LineShapeManager;


/***/ }),

/***/ "./src/presenter/ElementPresenter.ts":
/*!*******************************************!*\
  !*** ./src/presenter/ElementPresenter.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementPresenter = void 0;
var DrawLayerViewManager_1 = __webpack_require__(/*! ../view/manager/DrawLayerViewManager */ "./src/view/manager/DrawLayerViewManager.ts");
var ElementViewManager_1 = __webpack_require__(/*! ../view/manager/ElementViewManager */ "./src/view/manager/ElementViewManager.ts");
var Presenter_1 = __webpack_require__(/*! ./Presenter */ "./src/presenter/Presenter.ts");
var ElementPresenter = /** @class */ (function (_super) {
    __extends(ElementPresenter, _super);
    function ElementPresenter(scene) {
        var _this = _super.call(this) || this;
        _this._scene = scene;
        return _this;
    }
    ElementPresenter.prototype.notify = function (elements) {
        ElementViewManager_1.ElementViewManager.getInstance().handleModify(this._scene, elements);
        DrawLayerViewManager_1.DrawLayerViewManager.getInstance().handleRefreshView(this._scene);
    };
    return ElementPresenter;
}(Presenter_1.Presenter));
exports.ElementPresenter = ElementPresenter;


/***/ }),

/***/ "./src/presenter/LayerPresenter.ts":
/*!*****************************************!*\
  !*** ./src/presenter/LayerPresenter.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayerPresenter = void 0;
var DrawLayerViewManager_1 = __webpack_require__(/*! ../view/manager/DrawLayerViewManager */ "./src/view/manager/DrawLayerViewManager.ts");
var Presenter_1 = __webpack_require__(/*! ./Presenter */ "./src/presenter/Presenter.ts");
var LayerPresenter = /** @class */ (function (_super) {
    __extends(LayerPresenter, _super);
    function LayerPresenter(scene) {
        var _this = _super.call(this) || this;
        _this._scene = scene;
        return _this;
    }
    LayerPresenter.prototype.notify = function (layers) {
        DrawLayerViewManager_1.DrawLayerViewManager.getInstance().handleModify(this._scene, layers);
    };
    return LayerPresenter;
}(Presenter_1.Presenter));
exports.LayerPresenter = LayerPresenter;


/***/ }),

/***/ "./src/presenter/ModifyController.ts":
/*!*******************************************!*\
  !*** ./src/presenter/ModifyController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModifyController = void 0;
var ModifyController = /** @class */ (function () {
    function ModifyController() {
        this._layers = new Set([]);
        this._elements = new Set([]);
        this._layerPresenter = null;
        this._elementPresenter = null;
    }
    ModifyController.prototype.setLayerPresenter = function (layerPresenter) {
        this._layerPresenter = layerPresenter;
    };
    ModifyController.prototype.setElementPresenter = function (elementPresenter) {
        this._elementPresenter = elementPresenter;
    };
    ModifyController.prototype.attachLayer = function (layerItem) {
        this._layers.add(layerItem);
    };
    ModifyController.prototype.attachElement = function (elementItem) {
        this._elements.add(elementItem);
    };
    ModifyController.prototype.notify = function (isShouldHandleElementsFirst) {
        if (isShouldHandleElementsFirst === void 0) { isShouldHandleElementsFirst = false; }
        if (isShouldHandleElementsFirst) {
            if (this._elementPresenter) {
                this._elementPresenter.notify(this._elements);
            }
            this._elements.clear();
            if (this._layerPresenter) {
                this._layerPresenter.notify(this._layers);
            }
            this._layers.clear();
            return;
        }
        if (this._layerPresenter) {
            this._layerPresenter.notify(this._layers);
        }
        this._layers.clear();
        if (this._elementPresenter) {
            this._elementPresenter.notify(this._elements);
        }
        this._elements.clear();
    };
    return ModifyController;
}());
exports.ModifyController = ModifyController;


/***/ }),

/***/ "./src/presenter/Presenter.ts":
/*!************************************!*\
  !*** ./src/presenter/Presenter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Presenter = void 0;
var Presenter = /** @class */ (function () {
    function Presenter() {
    }
    return Presenter;
}());
exports.Presenter = Presenter;


/***/ }),

/***/ "./src/service/Service.ts":
/*!********************************!*\
  !*** ./src/service/Service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Service = void 0;
var FrameCommand_1 = __webpack_require__(/*! ../config/FrameCommand */ "./src/config/FrameCommand.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var Service = /** @class */ (function () {
    function Service() {
        var _this = this;
        Constant_1.eventBus.on(FrameCommand_1.EFrameCommand.REFRESH_RTREE, function () {
            _this.refreshRtree();
        });
    }
    Service.prototype.refreshRtree = function () {
        var updateds = [];
        Constant_1.rtree.getAllItems().forEach(function (item) {
            var newBBox2 = item.target.model.createBBox2();
            var oldBBox2 = item.getBBox2();
            if (newBBox2 && oldBBox2 && !newBBox2.equals(oldBBox2)) {
                updateds.push(item);
            }
        });
        for (var i = 0; i < updateds.length; i++) {
            var item = updateds[i];
            var oldBBox2 = item.getBBox2();
            Constant_1.rtree.removeTarget({ sx: oldBBox2.minX, sy: oldBBox2.minY, w: oldBBox2.width, h: oldBBox2.height }, item);
        }
        for (var i = 0; i < updateds.length; i++) {
            var item = updateds[i];
            var newBBox2 = item.target.model.createBBox2();
            Constant_1.rtree.insertItemData({ sx: newBBox2.minX, sy: newBBox2.minY, w: newBBox2.width, h: newBBox2.height }, item);
        }
    };
    return Service;
}());
exports.Service = Service;


/***/ }),

/***/ "./src/tool/Adsorption.ts":
/*!********************************!*\
  !*** ./src/tool/Adsorption.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Adsorption = void 0;
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var GridSetting_1 = __webpack_require__(/*! ../engine/common/GridSetting */ "./src/engine/common/GridSetting.ts");
var Vector2_1 = __webpack_require__(/*! ../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var Adsorption = /** @class */ (function () {
    function Adsorption() {
    }
    Adsorption.prototype.adsorpGrid = function (position) {
        var snapX = GridSetting_1.GridSetting.getInstance().stepX;
        var snapY = GridSetting_1.GridSetting.getInstance().stepY;
        var origin = Constant_1.environment.origin;
        var resultX = (position.x - origin.x) / snapX;
        var resultY = (position.y - origin.y) / snapY;
        var dx = Math.abs(Math.floor(resultX) - resultX);
        var dy = Math.abs(Math.floor(resultY) - resultY);
        var setX = Math.floor(resultX);
        var setY = Math.floor(resultY);
        if (dx > 0.5) {
            setX = Math.ceil(resultX);
        }
        if (dy > 0.5) {
            setY = Math.ceil(resultY);
        }
        return new Vector2_1.Vector2(setX * snapX + origin.x, setY * snapY + origin.y);
    };
    return Adsorption;
}());
exports.Adsorption = Adsorption;


/***/ }),

/***/ "./src/tool/EventsLoader.ts":
/*!**********************************!*\
  !*** ./src/tool/EventsLoader.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsLoader = void 0;
var InputInfo_1 = __webpack_require__(/*! ./InputInfo */ "./src/tool/InputInfo.ts");
var ToolChain_1 = __webpack_require__(/*! ./ToolChain */ "./src/tool/ToolChain.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
var Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
var SystemConfig_1 = __webpack_require__(/*! ../controller/SystemConfig */ "./src/controller/SystemConfig.ts");
var Vector2_1 = __webpack_require__(/*! ../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var SyncCanvasRect_1 = __webpack_require__(/*! ../utils/SyncCanvasRect */ "./src/utils/SyncCanvasRect.ts");
var MOUSE_LEFT_BUTTONS = 1;
var MOUSE_RIGHT_BUTTONS = 2;
var MOUSE_MIDDLE_BUTTONS = 4;
var EventsLoader = /** @class */ (function (_super) {
    __extends(EventsLoader, _super);
    function EventsLoader(canvasElement) {
        var _this = _super.call(this) || this;
        _this._canvasElement = canvasElement;
        _this._inputInfo = new InputInfo_1.InputInfo();
        _this._systemConfig = SystemConfig_1.SystemConfig.getInstance();
        return _this;
    }
    EventsLoader.prototype.init = function () {
        this.bindEvent();
    };
    Object.defineProperty(EventsLoader.prototype, "inputInfo", {
        get: function () {
            return this._inputInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventsLoader.prototype, "canvasElement", {
        get: function () {
            return this._canvasElement;
        },
        enumerable: false,
        configurable: true
    });
    EventsLoader.prototype.getWindowRatio = function (ratio) {
        if (ratio === void 0) { ratio = window.devicePixelRatio; }
        return ratio > 1 ? ratio : 1;
    };
    EventsLoader.prototype.bindEvent = function () {
        var canvasElement = this.canvasElement;
        window.addEventListener('resize', this.viewResizeHandler.bind(this));
        window.addEventListener('keydown', this.keyDownHandler.bind(this));
        window.addEventListener('keyup', this.keyUpHandler.bind(this));
        canvasElement.addEventListener('mousedown', this.mouseDownHandler.bind(this), false);
        canvasElement.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
        canvasElement.addEventListener('mouseup', this.mouseUpHandler.bind(this), false);
        canvasElement.addEventListener('contextmenu', this.contextmenuHandler.bind(this), false);
        canvasElement.addEventListener('wheel', this.mouseWheelHandler.bind(this), false);
        canvasElement.addEventListener('mouseleave', this.mouseLeaveHandler.bind(this), false);
        canvasElement.addEventListener('mouseenter', this.mouseEnterHandler.bind(this), false);
    };
    EventsLoader.prototype.viewResizeHandler = function () {
        var _this = this;
        (0, SyncCanvasRect_1.syncCanvasRectByWindow)(this.canvasElement);
        var canvasRect = this.canvasElement.getBoundingClientRect().toJSON();
        var prevWidth = Constant_1.environment.canvasWidth;
        var prevHeight = Constant_1.environment.canvasHeight;
        Constant_1.environment.updateCanvasRectSize(canvasRect.width, canvasRect.height, canvasRect.left, canvasRect.top);
        var offset = { distX: canvasRect.width - prevWidth, distY: canvasRect.height - prevHeight };
        var handlerAction = function (nextTool) {
            nextTool.viewResizeHandler(_this.inputInfo, offset);
        };
        this.handler(handlerAction);
    };
    EventsLoader.prototype.prepareSystemEventInputInfo = function (e) {
        e.preventDefault();
        var sourceOffsetX = e.offsetX * this.getWindowRatio();
        var sourceOffsetY = e.offsetY * this.getWindowRatio();
        this.inputInfo.mouseTimeStamp = e.timeStamp;
        this.inputInfo.type = e.type;
        this.inputInfo.moveSourcePixelX = sourceOffsetX - Constant_1.environment.canvasLeft;
        this.inputInfo.moveSourcePixelY = sourceOffsetY - Constant_1.environment.canvasTop;
        this.inputInfo.ctrlKey = !!e.ctrlKey;
        this.inputInfo.altKey = !!e.altKey;
        this.inputInfo.shiftKey = !!e.shiftKey;
        this.inputInfo.metaKey = !!e.metaKey;
        this.inputInfo.deltaSourcePixelX = e.deltaX || 0;
        this.inputInfo.deltaSourcePixelY = e.deltaY || 0;
        if (e.type === 'mousedown') {
            if (this.inputInfo.leftMouseDown === false) {
                this.inputInfo.leftDownSourcePixelX = sourceOffsetX;
                this.inputInfo.leftDownSourcePixelY = sourceOffsetY;
            }
            if (this.inputInfo.middleMouseDown === false) {
                this.inputInfo.middleDownSourcePixelX = sourceOffsetX;
                this.inputInfo.middleDownSourcePixelY = sourceOffsetY;
            }
            if (this.inputInfo.leftMouseDown === false) {
                this.inputInfo.rightDownSourcePixelX = sourceOffsetX;
                this.inputInfo.rightDownSourcePixelY = sourceOffsetY;
            }
            this.inputInfo.leftMouseDown = (e.buttons & MOUSE_LEFT_BUTTONS) > 0;
            this.inputInfo.rightMouseDown = (e.buttons & MOUSE_RIGHT_BUTTONS) > 0;
            this.inputInfo.middleMouseDown = (e.buttons & MOUSE_MIDDLE_BUTTONS) > 0;
        }
        if (e.type === 'mouseup') {
            this.inputInfo.leftMouseDown = (e.buttons & MOUSE_LEFT_BUTTONS) > 0;
            this.inputInfo.rightMouseDown = (e.buttons & MOUSE_RIGHT_BUTTONS) > 0;
            this.inputInfo.middleMouseDown = (e.buttons & MOUSE_MIDDLE_BUTTONS) > 0;
            if (this.inputInfo.leftMouseDown === false) {
                this.inputInfo.leftDownSourcePixelX = NaN;
                this.inputInfo.leftDownSourcePixelY = NaN;
            }
            if (this.inputInfo.middleMouseDown === false) {
                this.inputInfo.middleDownSourcePixelX = NaN;
                this.inputInfo.middleDownSourcePixelY = NaN;
            }
            if (this.inputInfo.leftMouseDown === false) {
                this.inputInfo.rightDownSourcePixelX = NaN;
                this.inputInfo.rightDownSourcePixelY = NaN;
            }
        }
        this.calcTransPixelInputInfo();
    };
    EventsLoader.prototype.prepareKeyboardEventInputInfo = function (e) {
        e.preventDefault();
        this.inputInfo.type = e.type;
        this.inputInfo.keyCode = e.keyCode;
        this.inputInfo.ctrlKey = !!e.ctrlKey;
        this.inputInfo.altKey = !!e.altKey;
        this.inputInfo.shiftKey = !!e.shiftKey;
        this.inputInfo.metaKey = !!e.metaKey;
        this.calcTransPixelInputInfo();
    };
    EventsLoader.prototype.keyDownHandler = function (e) {
        var _this = this;
        this.prepareKeyboardEventInputInfo(e);
        var handlerAction = function (nextTool) {
            nextTool.keyDownHandler(_this.inputInfo);
        };
        this.handler(handlerAction);
    };
    EventsLoader.prototype.keyUpHandler = function (e) {
        var _this = this;
        this.prepareKeyboardEventInputInfo(e);
        var handlerAction = function (nextTool) {
            nextTool.keyUpHandler(_this.inputInfo);
        };
        this.handler(handlerAction);
    };
    EventsLoader.prototype.mouseDownHandler = function (e) {
        var _this = this;
        this.prepareSystemEventInputInfo(e);
        var handlerAction;
        if (e.button === 0) {
            handlerAction = function (nextTool) {
                nextTool.mouseLeftDownHandler(_this.inputInfo);
            };
        }
        else if (e.button === 1) {
            handlerAction = function (nextTool) {
                nextTool.mouseMiddleDownHandler(_this.inputInfo);
            };
        }
        else if (e.button === 2) {
            handlerAction = function (nextTool) {
                nextTool.mouseRightDownHandler(_this.inputInfo);
            };
        }
        handlerAction && this.handler(handlerAction);
    };
    EventsLoader.prototype.mouseMoveHandler = function (e) {
        var _this = this;
        this.prepareSystemEventInputInfo(e);
        var handlerAction = function (nextTool) {
            nextTool.mouseMoveHandler(_this.inputInfo);
        };
        this.handler(handlerAction);
    };
    EventsLoader.prototype.mouseUpHandler = function (e) {
        var _this = this;
        this.prepareSystemEventInputInfo(e);
        var handlerAction;
        if (e.button === 0) {
            handlerAction = function (nextTool) {
                nextTool.mouseLeftUpHandler(_this.inputInfo);
            };
        }
        else if (e.button === 1) {
            handlerAction = function (nextTool) {
                nextTool.mouseMiddleUpHandler(_this.inputInfo);
            };
        }
        else if (e.button === 2) {
            handlerAction = function (nextTool) {
                nextTool.mouseRightUpHandler(_this.inputInfo);
            };
        }
        handlerAction && this.handler(handlerAction);
    };
    EventsLoader.prototype.mouseWheelHandler = function (e) {
        var _this = this;
        this.prepareSystemEventInputInfo(e);
        var handlerAction = function (nextTool) {
            nextTool.mouseWheelHandler(_this.inputInfo);
        };
        this.handler(handlerAction);
    };
    EventsLoader.prototype.mouseLeaveHandler = function (e) {
        var _this = this;
        this.prepareSystemEventInputInfo(e);
        var handlerAction = function (nextTool) {
            nextTool.mouseLeaveHandler(_this.inputInfo);
        };
        this.handler(handlerAction);
    };
    EventsLoader.prototype.mouseEnterHandler = function (e) {
        var _this = this;
        this.prepareSystemEventInputInfo(e);
        var handlerAction = function (nextTool) {
            nextTool.mouseEnterHandler(_this.inputInfo);
        };
        this.handler(handlerAction);
    };
    EventsLoader.prototype.contextmenuHandler = function (e) {
        e.preventDefault();
    };
    EventsLoader.prototype.calcTransPixelInputInfo = function () {
        var DPI = Constant_1.environment.DPI;
        /**
         * 鼠标当前位置相对于 <canvas /> 元素所占区域的左上角的坐标
         */
        var mouseSourcePixelPositionVector3 = new Vector3_1.Vector3(this.inputInfo.moveSourcePixelX, -this.inputInfo.moveSourcePixelY, 0);
        /**
         * <canvas /> 元素所占区域的中心点相当于自身左上角的坐标
         */
        var canvasSourcePixelCenterPointVector3 = new Vector3_1.Vector3(Constant_1.environment.canvasWidth / 2, -Constant_1.environment.canvasHeight / 2, 0);
        /**
         * 鼠标当前位置相当于 <canvas /> 元素所占区域的中心点的坐标
         */
        var offsetOfCanvasElementCenter = mouseSourcePixelPositionVector3.sub(canvasSourcePixelCenterPointVector3);
        /**
         * 鼠标当前位置相当于<画布视图原点>的坐标
         */
        var offsetOfCanvasViewOrigin = offsetOfCanvasElementCenter.multiplyMatrix4(Camera_1.Camera.getInstance().matrix4.getInverseMatrix());
        this.inputInfo.moveTransPixelX = offsetOfCanvasViewOrigin.x;
        this.inputInfo.moveTransPixelY = offsetOfCanvasViewOrigin.y;
        this.inputInfo.moveRealPhysicsX = this.inputInfo.movePhysicsX = (0, Utils_1.px2mm)(this.inputInfo.moveTransPixelX, DPI[0]);
        this.inputInfo.moveRealPhysicsY = this.inputInfo.movePhysicsY = (0, Utils_1.px2mm)(this.inputInfo.moveTransPixelY, DPI[1]);
        if (this._systemConfig.alignGrid) {
            var position = new Vector2_1.Vector2(this.inputInfo.movePhysicsX, this.inputInfo.movePhysicsY);
            var offset = Constant_1.adsorption.adsorpGrid(position);
            this.inputInfo.movePhysicsX = offset.x;
            this.inputInfo.movePhysicsY = offset.y;
        }
        if (this.inputInfo.type === 'mousedown') {
            if (this.inputInfo.leftMouseDown) {
                this.inputInfo.leftDownTransPixelX = this.inputInfo.moveTransPixelX;
                this.inputInfo.leftDownTransPixelY = this.inputInfo.moveTransPixelY;
                this.inputInfo.leftDownPhysicsX = this.inputInfo.movePhysicsX;
                this.inputInfo.leftDownPhysicsY = this.inputInfo.movePhysicsY;
                this.inputInfo.leftDownRealPhysicsX = this.inputInfo.moveRealPhysicsX;
                this.inputInfo.leftDownRealPhysicsY = this.inputInfo.moveRealPhysicsY;
            }
            if (this.inputInfo.middleMouseDown) {
                this.inputInfo.middleDownTransPixelX = this.inputInfo.moveTransPixelX;
                this.inputInfo.middleDownTransPixelY = this.inputInfo.moveTransPixelY;
                this.inputInfo.middleDownPhysicsX = this.inputInfo.movePhysicsX;
                this.inputInfo.middleDownPhysicsY = this.inputInfo.movePhysicsY;
                this.inputInfo.middleDownRealPhysicsX = this.inputInfo.moveRealPhysicsX;
                this.inputInfo.middleDownRealPhysicsY = this.inputInfo.moveRealPhysicsY;
            }
            if (this.inputInfo.rightMouseDown) {
                this.inputInfo.rightDownTransPixelX = this.inputInfo.moveTransPixelX;
                this.inputInfo.rightDownTransPixelY = this.inputInfo.moveTransPixelY;
                this.inputInfo.rightDownPhysicsX = this.inputInfo.movePhysicsX;
                this.inputInfo.rightDownPhysicsY = this.inputInfo.movePhysicsY;
                this.inputInfo.rightDownRealPhysicsX = this.inputInfo.moveRealPhysicsX;
                this.inputInfo.rightDownRealPhysicsY = this.inputInfo.moveRealPhysicsY;
            }
        }
        if (this.inputInfo.type === 'mouseup') {
            this.inputInfo.leftDownTransPixelX = NaN;
            this.inputInfo.leftDownTransPixelY = NaN;
            this.inputInfo.middleDownTransPixelX = NaN;
            this.inputInfo.middleDownTransPixelY = NaN;
            this.inputInfo.rightDownTransPixelX = NaN;
            this.inputInfo.rightDownTransPixelY = NaN;
            this.inputInfo.leftDownPhysicsX = NaN;
            this.inputInfo.leftDownPhysicsY = NaN;
            this.inputInfo.middleDownPhysicsX = NaN;
            this.inputInfo.middleDownPhysicsY = NaN;
            this.inputInfo.rightDownPhysicsX = NaN;
            this.inputInfo.rightDownPhysicsY = NaN;
            this.inputInfo.leftDownRealPhysicsX = NaN;
            this.inputInfo.leftDownRealPhysicsY = NaN;
            this.inputInfo.middleDownRealPhysicsX = NaN;
            this.inputInfo.middleDownRealPhysicsY = NaN;
            this.inputInfo.rightDownRealPhysicsX = NaN;
            this.inputInfo.rightDownRealPhysicsY = NaN;
        }
    };
    return EventsLoader;
}(ToolChain_1.ToolChain));
exports.EventsLoader = EventsLoader;


/***/ }),

/***/ "./src/tool/FrameTool.ts":
/*!*******************************!*\
  !*** ./src/tool/FrameTool.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrameTool = void 0;
var Tool_1 = __webpack_require__(/*! ./Tool */ "./src/tool/Tool.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
var Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
var Config_1 = __webpack_require__(/*! ../config/Config */ "./src/config/Config.ts");
var EventConfig_1 = __webpack_require__(/*! ../config/EventConfig */ "./src/config/EventConfig.ts");
var SystemConfig_1 = __webpack_require__(/*! ../controller/SystemConfig */ "./src/controller/SystemConfig.ts");
var Profile_1 = __webpack_require__(/*! ../config/Profile */ "./src/config/Profile.ts");
var FrameTool = /** @class */ (function (_super) {
    __extends(FrameTool, _super);
    function FrameTool() {
        var _this = _super.call(this) || this;
        _this._camera = Camera_1.Camera.getInstance();
        _this._systemConfig = SystemConfig_1.SystemConfig.getInstance();
        _this._mouseRightPrevSourcePixelX = 0;
        _this._mouseRightPrevSourcePixelY = 0;
        _this._isMouseRightDwon = false;
        _this._auxiliaryTool = null;
        return _this;
    }
    FrameTool.prototype.init = function () {
        this.nextTool = Constant_1.dropDragTool;
    };
    Object.defineProperty(FrameTool.prototype, "auxiliaryTool", {
        get: function () {
            return this._auxiliaryTool;
        },
        set: function (value) {
            this._auxiliaryTool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FrameTool.prototype, "mouseRightPrevSourcePixelX", {
        get: function () {
            return this._mouseRightPrevSourcePixelX;
        },
        set: function (value) {
            this._mouseRightPrevSourcePixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FrameTool.prototype, "mouseRightPrevSourcePixelY", {
        get: function () {
            return this._mouseRightPrevSourcePixelY;
        },
        set: function (value) {
            this._mouseRightPrevSourcePixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    FrameTool.prototype.viewResizeHandler = function (inputInfo, offset) {
        this.prepare(inputInfo);
        var offsetVector3 = new Vector3_1.Vector3(-offset.distX / 2, offset.distY / 2, 0);
        this._camera.refreshByVector3(offsetVector3);
        this.emitInputsChanged(inputInfo);
    };
    FrameTool.prototype.keyDownHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.keyDownHandler(inputInfo);
        };
        if (inputInfo.ctrlKey) {
            if (inputInfo.keyCode === 187) {
                this.zoomCanvas(inputInfo, -100);
            }
            else if (inputInfo.keyCode === 189) {
                this.zoomCanvas(inputInfo, 100);
            }
        }
        else {
            switch (inputInfo.keyCode) {
                case Profile_1.EDIRECTION_KEY.LEFT: {
                    if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate && Constant_1.selectManager.items.size <= 0) {
                        this._camera.refreshByVector3(new Vector3_1.Vector3(-Config_1.DIRECTION_KEY_MOVE_STEP, 0, 0));
                    }
                    break;
                }
                case Profile_1.EDIRECTION_KEY.UP: {
                    if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate && Constant_1.selectManager.items.size <= 0) {
                        this._camera.refreshByVector3(new Vector3_1.Vector3(0, Config_1.DIRECTION_KEY_MOVE_STEP, 0));
                    }
                    break;
                }
                case Profile_1.EDIRECTION_KEY.RIGHT: {
                    if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate && Constant_1.selectManager.items.size <= 0) {
                        this._camera.refreshByVector3(new Vector3_1.Vector3(Config_1.DIRECTION_KEY_MOVE_STEP, 0, 0));
                    }
                    break;
                }
                case Profile_1.EDIRECTION_KEY.DOWN: {
                    if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate && Constant_1.selectManager.items.size <= 0) {
                        this._camera.refreshByVector3(new Vector3_1.Vector3(0, -Config_1.DIRECTION_KEY_MOVE_STEP, 0));
                    }
                    break;
                }
                default:
            }
        }
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.keyUpHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.keyUpHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseLeftDownHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.mouseLeftDownHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseMiddleDownHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.mouseMiddleDownHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseRightDownHandler = function (inputInfo) {
        this.prepare(inputInfo);
        this.mouseRightPrevSourcePixelX = inputInfo.moveSourcePixelX;
        this.mouseRightPrevSourcePixelY = inputInfo.moveSourcePixelY;
        var handlerAction = function (nextTool) {
            nextTool.mouseRightDownHandler(inputInfo);
        };
        this._isMouseRightDwon = true;
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseMoveHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.mouseMoveHandler(inputInfo);
        };
        if (this._isMouseRightDwon && SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate) {
            var offsetX = inputInfo.moveSourcePixelX - this.mouseRightPrevSourcePixelX;
            var offsetY = inputInfo.moveSourcePixelY - this.mouseRightPrevSourcePixelY;
            this._camera.refreshByVector3(new Vector3_1.Vector3(offsetX, -offsetY, 0));
            this.mouseRightPrevSourcePixelX = inputInfo.moveSourcePixelX;
            this.mouseRightPrevSourcePixelY = inputInfo.moveSourcePixelY;
        }
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseLeftUpHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.mouseLeftUpHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseMiddleUpHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.mouseMiddleUpHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseRightUpHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.mouseRightUpHandler(inputInfo);
        };
        this._isMouseRightDwon = false;
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseWheelHandler = function (inputInfo) {
        this.prepare(inputInfo);
        if (inputInfo.ctrlKey) {
            if (SystemConfig_1.SystemConfig.getInstance().enableCanvasZoomChange) {
                this.zoomCanvas(inputInfo);
            }
        }
        else if (inputInfo.altKey) {
            if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate) {
                this.horizontalScrollCanvas(inputInfo);
            }
        }
        else {
            if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate) {
                this.verticalScrollCanvas(inputInfo);
            }
        }
        var handlerAction = function (nextTool) {
            nextTool.mouseWheelHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseLeaveHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.mouseLeaveHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.mouseEnterHandler = function (inputInfo) {
        this.prepare(inputInfo);
        var handlerAction = function (nextTool) {
            nextTool.mouseEnterHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    };
    FrameTool.prototype.zoomCanvas = function (inputInfo, setDelta) {
        var mousePositionVector3 = new Vector3_1.Vector3(inputInfo.moveSourcePixelX, -inputInfo.moveSourcePixelY, 0);
        var canvasCenterVector3 = new Vector3_1.Vector3(Constant_1.environment.canvasWidth / 2, -Constant_1.environment.canvasHeight / 2, 0);
        var zoomCenterVector3 = mousePositionVector3.sub(canvasCenterVector3);
        var delta = setDelta || inputInfo.deltaSourcePixelY;
        var scale = 1;
        if (delta < 0) {
            scale = Config_1.MOUSE_WHEEL_ZOOM_RATIO;
        }
        else {
            scale = 1 / Config_1.MOUSE_WHEEL_ZOOM_RATIO;
        }
        var currentScale = this._camera.getZoomRatio();
        Constant_1.canvasController.zoomCanvas(scale * currentScale, zoomCenterVector3);
    };
    FrameTool.prototype.verticalScrollCanvas = function (inputInfo) {
        var delta = inputInfo.deltaSourcePixelY;
        var scrollDist = 1;
        if (delta < 0) {
            scrollDist = Config_1.MOUSE_WHEEL_SCROLL_DIST;
        }
        else {
            scrollDist = -Config_1.MOUSE_WHEEL_SCROLL_DIST;
        }
        this._camera.refreshByVector3(new Vector3_1.Vector3(0, -scrollDist, 0));
    };
    FrameTool.prototype.horizontalScrollCanvas = function (inputInfo) {
        var delta = inputInfo.deltaSourcePixelY;
        var scrollDist = 1;
        if (delta < 0) {
            scrollDist = Config_1.MOUSE_WHEEL_SCROLL_DIST;
        }
        else {
            scrollDist = -Config_1.MOUSE_WHEEL_SCROLL_DIST;
        }
        this._camera.refreshByVector3(new Vector3_1.Vector3(scrollDist, 0, 0));
    };
    FrameTool.prototype.emitInputsChanged = function (inputInfo) {
        var data = inputInfo.toJSON();
        data.canvasZoom = this._camera.getZoomRatio();
        Constant_1.eventBus.emit(EventConfig_1.EOutEventCommand.INPUTS_CHANGED, data, EventConfig_1.OUT_EVENT_NS);
    };
    FrameTool.prototype.prepare = function (inputInfo) { };
    return FrameTool;
}(Tool_1.Tool));
exports.FrameTool = FrameTool;


/***/ }),

/***/ "./src/tool/GlobalIdenManager.ts":
/*!***************************************!*\
  !*** ./src/tool/GlobalIdenManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalIdenManager = void 0;
var Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
var INIT_IDEN_NUMBER = 1;
var GlobalIdenManager = /** @class */ (function () {
    function GlobalIdenManager() {
        this._elementIden = INIT_IDEN_NUMBER;
        this._elementPrefix = INIT_IDEN_NUMBER + 'e';
        this._componentIden = INIT_IDEN_NUMBER;
        this._componentPrefix = INIT_IDEN_NUMBER + 'c';
    }
    GlobalIdenManager.prototype.getElementIden = function () {
        if (this._elementIden >= Number.MAX_SAFE_INTEGER) {
            this._elementIden = 1;
            this._elementPrefix = this._elementIden + 'c';
        }
        return this._elementPrefix + this._elementIden++;
    };
    GlobalIdenManager.prototype.getComponentIden = function () {
        if (this._componentIden >= Number.MAX_SAFE_INTEGER) {
            this._componentIden = 1;
            this._componentPrefix = this._componentIden + 'c';
        }
        return this._componentPrefix + this._componentIden++ + this.getHashIden(3);
    };
    GlobalIdenManager.prototype.getHashIden = function (length) {
        if (length === void 0) { length = 36; }
        var s = [];
        var HEX_DIGITS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = 0; i < length; i++) {
            s[i] = HEX_DIGITS.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = String((0, Utils_1.getRandomInArea)(1, 9));
        s[19] = HEX_DIGITS.substr((+s[19] & 0x3) | 0x8, 1);
        s[8] = String((0, Utils_1.getRandomInArea)(1, 9));
        s[13] = String((0, Utils_1.getRandomInArea)(1, 9));
        s[18] = String((0, Utils_1.getRandomInArea)(1, 9));
        s[23] = String((0, Utils_1.getRandomInArea)(1, 9));
        return s.join('');
    };
    return GlobalIdenManager;
}());
exports.GlobalIdenManager = GlobalIdenManager;


/***/ }),

/***/ "./src/tool/InputInfo.ts":
/*!*******************************!*\
  !*** ./src/tool/InputInfo.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputInfo = exports.InputContext = void 0;
var InputContext = /** @class */ (function () {
    function InputContext() {
        this._type = '';
        this._keyCode = -1;
        /* ... */
        this._leftDownSourcePixelX = 0;
        this._leftDownSourcePixelY = 0;
        this._middleDownSourcePixelX = 0;
        this._middleDownSourcePixelY = 0;
        this._rightDownSourcePixelX = 0;
        this._rightDownSourcePixelY = 0;
        /* ... */
        this._moveSourcePixelX = 0;
        this._moveSourcePixelY = 0;
        /* ... */
        this._deltaSourcePixelX = 0;
        this._deltaSourcePixelY = 0;
        /* ... */
        this._leftDownTransPixelX = 0;
        this._leftDownTransPixelY = 0;
        this._middleDownTransPixelX = 0;
        this._middleDownTransPixelY = 0;
        this._rightDownTransPixelX = 0;
        this._rightDownTransPixelY = 0;
        /* ... */
        this._moveTransPixelX = 0;
        this._moveTransPixelY = 0;
        /* ... */
        this._leftDownPhysicsX = 0;
        this._leftDownPhysicsY = 0;
        this._middleDownPhysicsX = 0;
        this._middleDownPhysicsY = 0;
        this._rightDownPhysicsX = 0;
        this._rightDownPhysicsY = 0;
        /* ... */
        this._movePhysicsX = 0;
        this._movePhysicsY = 0;
        /* ... */
        this._leftDownRealPhysicsX = 0;
        this._leftDownRealPhysicsY = 0;
        this._middleDownRealPhysicsX = 0;
        this._middleDownRealPhysicsY = 0;
        this._rightDownRealPhysicsX = 0;
        this._rightDownRealPhysicsY = 0;
        /* ... */
        this._moveRealPhysicsX = 0;
        this._moveRealPhysicsY = 0;
        /* ... */
        this._shiftKey = false;
        this._ctrlKey = false;
        this._altKey = false;
        this._metaKey = false;
        /* ... */
        this._rightMouseDown = false;
        this._middleMouseDown = false;
        this._leftMouseDown = false;
        /* ... */
        this._mouseTimeStamp = 0;
    }
    Object.defineProperty(InputContext.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "keyCode", {
        get: function () {
            return this._keyCode;
        },
        set: function (value) {
            this._keyCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftDownSourcePixelX", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._leftDownSourcePixelX;
        },
        set: function (value) {
            this._leftDownSourcePixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftDownSourcePixelY", {
        get: function () {
            return this._leftDownSourcePixelY;
        },
        set: function (value) {
            this._leftDownSourcePixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleDownSourcePixelX", {
        get: function () {
            return this._middleDownSourcePixelX;
        },
        set: function (value) {
            this._middleDownSourcePixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleDownSourcePixelY", {
        get: function () {
            return this._middleDownSourcePixelY;
        },
        set: function (value) {
            this._middleDownSourcePixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightDownSourcePixelX", {
        get: function () {
            return this._rightDownSourcePixelX;
        },
        set: function (value) {
            this._rightDownSourcePixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightDownSourcePixelY", {
        get: function () {
            return this._rightDownSourcePixelY;
        },
        set: function (value) {
            this._rightDownSourcePixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "moveSourcePixelX", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._moveSourcePixelX;
        },
        set: function (value) {
            this._moveSourcePixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "moveSourcePixelY", {
        get: function () {
            return this._moveSourcePixelY;
        },
        set: function (value) {
            this._moveSourcePixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "deltaSourcePixelX", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._deltaSourcePixelX;
        },
        set: function (value) {
            this._deltaSourcePixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "deltaSourcePixelY", {
        get: function () {
            return this._deltaSourcePixelY;
        },
        set: function (value) {
            this._deltaSourcePixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftDownTransPixelX", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._leftDownTransPixelX;
        },
        set: function (value) {
            this._leftDownTransPixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftDownTransPixelY", {
        get: function () {
            return this._leftDownTransPixelY;
        },
        set: function (value) {
            this._leftDownTransPixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleDownTransPixelX", {
        get: function () {
            return this._middleDownTransPixelX;
        },
        set: function (value) {
            this._middleDownTransPixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleDownTransPixelY", {
        get: function () {
            return this._middleDownTransPixelY;
        },
        set: function (value) {
            this._middleDownTransPixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightDownTransPixelX", {
        get: function () {
            return this._rightDownTransPixelX;
        },
        set: function (value) {
            this._rightDownTransPixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightDownTransPixelY", {
        get: function () {
            return this._rightDownTransPixelY;
        },
        set: function (value) {
            this._rightDownTransPixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "moveTransPixelX", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._moveTransPixelX;
        },
        set: function (value) {
            this._moveTransPixelX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "moveTransPixelY", {
        get: function () {
            return this._moveTransPixelY;
        },
        set: function (value) {
            this._moveTransPixelY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftDownPhysicsX", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._leftDownPhysicsX;
        },
        set: function (value) {
            this._leftDownPhysicsX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftDownPhysicsY", {
        get: function () {
            return this._leftDownPhysicsY;
        },
        set: function (value) {
            this._leftDownPhysicsY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleDownPhysicsX", {
        get: function () {
            return this._middleDownPhysicsX;
        },
        set: function (value) {
            this._middleDownPhysicsX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleDownPhysicsY", {
        get: function () {
            return this._middleDownPhysicsY;
        },
        set: function (value) {
            this._middleDownPhysicsY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightDownPhysicsX", {
        get: function () {
            return this._rightDownPhysicsX;
        },
        set: function (value) {
            this._rightDownPhysicsX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightDownPhysicsY", {
        get: function () {
            return this._rightDownPhysicsY;
        },
        set: function (value) {
            this._rightDownPhysicsY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "movePhysicsX", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._movePhysicsX;
        },
        set: function (value) {
            this._movePhysicsX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftDownRealPhysicsX", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._leftDownRealPhysicsX;
        },
        set: function (value) {
            this._leftDownRealPhysicsX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftDownRealPhysicsY", {
        get: function () {
            return this._leftDownRealPhysicsY;
        },
        set: function (value) {
            this._leftDownRealPhysicsY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleDownRealPhysicsX", {
        get: function () {
            return this._middleDownRealPhysicsX;
        },
        set: function (value) {
            this._middleDownRealPhysicsX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleDownRealPhysicsY", {
        get: function () {
            return this._middleDownRealPhysicsY;
        },
        set: function (value) {
            this._middleDownRealPhysicsY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightDownRealPhysicsX", {
        get: function () {
            return this._rightDownRealPhysicsX;
        },
        set: function (value) {
            this._rightDownRealPhysicsX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightDownRealPhysicsY", {
        get: function () {
            return this._rightDownRealPhysicsY;
        },
        set: function (value) {
            this._rightDownRealPhysicsY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "movePhysicsY", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._movePhysicsY;
        },
        set: function (value) {
            this._movePhysicsY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "moveRealPhysicsX", {
        get: function () {
            return this._moveRealPhysicsX;
        },
        set: function (value) {
            this._moveRealPhysicsX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "moveRealPhysicsY", {
        get: function () {
            return this._moveRealPhysicsY;
        },
        set: function (value) {
            this._moveRealPhysicsY = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "shiftKey", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._shiftKey;
        },
        set: function (value) {
            this._shiftKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "ctrlKey", {
        get: function () {
            return this._ctrlKey;
        },
        set: function (value) {
            this._ctrlKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "altKey", {
        get: function () {
            return this._altKey;
        },
        set: function (value) {
            this._altKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "metaKey", {
        get: function () {
            return this._metaKey;
        },
        set: function (value) {
            this._metaKey = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "rightMouseDown", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._rightMouseDown;
        },
        set: function (value) {
            this._rightMouseDown = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "middleMouseDown", {
        get: function () {
            return this._middleMouseDown;
        },
        set: function (value) {
            this._middleMouseDown = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "leftMouseDown", {
        get: function () {
            return this._leftMouseDown;
        },
        set: function (value) {
            this._leftMouseDown = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InputContext.prototype, "mouseTimeStamp", {
        /************************************************************/
        /************************************************************/
        get: function () {
            return this._mouseTimeStamp;
        },
        set: function (value) {
            this._mouseTimeStamp = value;
        },
        enumerable: false,
        configurable: true
    });
    return InputContext;
}());
exports.InputContext = InputContext;
var InputInfo = /** @class */ (function (_super) {
    __extends(InputInfo, _super);
    function InputInfo() {
        var _this = _super.call(this) || this;
        _this._pointer = [];
        return _this;
    }
    Object.defineProperty(InputInfo.prototype, "pointer", {
        get: function () {
            return this._pointer;
        },
        set: function (value) {
            this._pointer = value;
        },
        enumerable: false,
        configurable: true
    });
    InputInfo.prototype.toJSON = function () {
        var data = {
            type: this.type,
            keyCode: this.keyCode,
            /* ... */
            leftDownSourcePixelX: this.leftDownSourcePixelX,
            leftDownSourcePixelY: this.leftDownSourcePixelY,
            middleDownSourcePixelX: this.middleDownSourcePixelX,
            middleDownSourcePixelY: this.middleDownSourcePixelY,
            rightDownSourcePixelX: this.rightDownSourcePixelX,
            rightDownSourcePixelY: this.rightDownSourcePixelY,
            /* ... */
            moveSourcePixelX: this.moveSourcePixelX,
            moveSourcePixelY: this.moveSourcePixelY,
            /* ... */
            deltaSourcePixelX: this.deltaSourcePixelX,
            deltaSourcePixelY: this.deltaSourcePixelY,
            /* ... */
            leftDownTransPixelX: this.leftDownTransPixelX,
            leftDownTransPixelY: this.leftDownTransPixelY,
            middleDownTransPixelX: this.middleDownTransPixelX,
            middleDownTransPixelY: this.middleDownTransPixelY,
            rightDownTransPixelX: this.rightDownTransPixelX,
            rightDownTransPixelY: this.rightDownTransPixelY,
            /* ... */
            moveTransPixelX: this.moveTransPixelX,
            moveTransPixelY: this.moveTransPixelY,
            /* ... */
            leftDownPhysicsX: this.leftDownPhysicsX,
            leftDownPhysicsY: this.leftDownPhysicsY,
            middleDownPhysicsX: this.middleDownPhysicsX,
            middleDownPhysicsY: this.middleDownPhysicsY,
            rightDownPhysicsX: this.rightDownPhysicsX,
            rightDownPhysicsY: this.rightDownPhysicsY,
            /* ... */
            movePhysicsX: this.movePhysicsX,
            movePhysicsY: this.movePhysicsY,
            /* ... */
            leftDownRealPhysicsX: this.leftDownRealPhysicsX,
            leftDownRealPhysicsY: this.leftDownRealPhysicsY,
            middleDownRealPhysicsX: this.middleDownRealPhysicsX,
            middleDownRealPhysicsY: this.middleDownRealPhysicsY,
            rightDownRealPhysicsX: this.rightDownRealPhysicsX,
            rightDownRealPhysicsY: this.rightDownRealPhysicsY,
            /* ... */
            moveRealPhysicsX: this.moveRealPhysicsX,
            moveRealPhysicsY: this.moveRealPhysicsY,
            /* ... */
            shiftKey: this.shiftKey,
            ctrlKey: this.ctrlKey,
            altKey: this.altKey,
            metaKey: this.metaKey,
            rightMouseDown: this.rightMouseDown,
            middleMouseDown: this.middleMouseDown,
            leftMouseDown: this.leftMouseDown,
            mouseTimeStamp: this.mouseTimeStamp,
        };
        return data;
    };
    return InputInfo;
}(InputContext));
exports.InputInfo = InputInfo;


/***/ }),

/***/ "./src/tool/Tool.ts":
/*!**************************!*\
  !*** ./src/tool/Tool.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tool = void 0;
var FrameCommand_1 = __webpack_require__(/*! ../config/FrameCommand */ "./src/config/FrameCommand.ts");
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var ToolChain_1 = __webpack_require__(/*! ./ToolChain */ "./src/tool/ToolChain.ts");
var Tool = /** @class */ (function (_super) {
    __extends(Tool, _super);
    function Tool() {
        var _this = _super.call(this) || this;
        _this._drawing = false;
        return _this;
    }
    Object.defineProperty(Tool.prototype, "drawing", {
        get: function () {
            return this._drawing;
        },
        set: function (value) {
            this._drawing = value;
        },
        enumerable: false,
        configurable: true
    });
    Tool.prototype.handler = function (process) {
        if (this.nextTool) {
            process(this.nextTool);
        }
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
    };
    Tool.prototype.viewResizeHandler = function (inputInfo, offset) { };
    return Tool;
}(ToolChain_1.ToolChain));
exports.Tool = Tool;


/***/ }),

/***/ "./src/tool/ToolChain.ts":
/*!*******************************!*\
  !*** ./src/tool/ToolChain.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToolChain = void 0;
var ToolChain = /** @class */ (function () {
    function ToolChain() {
        this._nextTool = null;
    }
    Object.defineProperty(ToolChain.prototype, "nextTool", {
        get: function () {
            return this._nextTool;
        },
        set: function (value) {
            this._nextTool = value;
        },
        enumerable: false,
        configurable: true
    });
    ToolChain.prototype.handler = function (process) {
        if (this.nextTool !== null) {
            process(this.nextTool);
        }
    };
    return ToolChain;
}());
exports.ToolChain = ToolChain;


/***/ }),

/***/ "./src/tool/auxiliary/BaseAuxiliary.ts":
/*!*********************************************!*\
  !*** ./src/tool/auxiliary/BaseAuxiliary.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseAuxiliary = void 0;
var BaseAuxiliary = /** @class */ (function () {
    function BaseAuxiliary() {
        /* ... */
    }
    return BaseAuxiliary;
}());
exports.BaseAuxiliary = BaseAuxiliary;


/***/ }),

/***/ "./src/tool/auxiliary/CrossAssist.ts":
/*!*******************************************!*\
  !*** ./src/tool/auxiliary/CrossAssist.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrossAssist = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ../../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
var Camera_1 = __webpack_require__(/*! ../../engine/common/Camera */ "./src/engine/common/Camera.ts");
var Vector2_1 = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var AssistLineShape_1 = __webpack_require__(/*! ../../objects/assist/AssistLineShape */ "./src/objects/assist/AssistLineShape.ts");
var Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
var BaseAuxiliary_1 = __webpack_require__(/*! ./BaseAuxiliary */ "./src/tool/auxiliary/BaseAuxiliary.ts");
var CrossAssist = /** @class */ (function (_super) {
    __extends(CrossAssist, _super);
    function CrossAssist() {
        var _this = _super.call(this) || this;
        _this._xLineShape = null;
        _this._yLineShape = null;
        return _this;
    }
    CrossAssist.prototype.hasInstance = function () {
        return this._xLineShape !== null && this._yLineShape !== null;
    };
    CrossAssist.prototype.create = function () {
        var xLineShapeStartPoint = new Vector2_1.Vector2((-1 * Constant_1.environment.canvasElement.width) / 2, 0);
        var xLineShapeEndPoint = new Vector2_1.Vector2(Constant_1.environment.canvasElement.width / 2, 0);
        var yLineShapeStartPoint = new Vector2_1.Vector2(0, (-1 * Constant_1.environment.canvasElement.height) / 2);
        var yLineShapeEndPoint = new Vector2_1.Vector2(0, Constant_1.environment.canvasElement.height / 2);
        this._xLineShape = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerConfig_1.EDrawLayerCode.MaskLayer, xLineShapeStartPoint, xLineShapeEndPoint, false);
        this._yLineShape = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerConfig_1.EDrawLayerCode.MaskLayer, yLineShapeStartPoint, yLineShapeEndPoint, false);
        this._xLineShape.strokeColor = new Color_1.Color(255, 0, 0, 1);
        this._yLineShape.strokeColor = new Color_1.Color(255, 0, 0, 1);
    };
    CrossAssist.prototype.update = function (inputInfo) {
        var camera = Camera_1.Camera.getInstance();
        var zoomCanvas = camera.getZoomRatio();
        this._xLineShape.startPoint = new Vector2_1.Vector2((-1 * Constant_1.environment.canvasElement.width) / 2 / zoomCanvas, inputInfo.movePhysicsY);
        this._xLineShape.endPoint = new Vector2_1.Vector2(Constant_1.environment.canvasElement.width / 2 / zoomCanvas, inputInfo.movePhysicsY);
        this._yLineShape.startPoint = new Vector2_1.Vector2(inputInfo.movePhysicsX, (-1 * Constant_1.environment.canvasElement.height) / 2 / zoomCanvas);
        this._yLineShape.endPoint = new Vector2_1.Vector2(inputInfo.movePhysicsX, Constant_1.environment.canvasElement.height / 2 / zoomCanvas);
    };
    CrossAssist.prototype.destory = function () {
        this._xLineShape.setDelete();
        this._yLineShape.setDelete();
        this._xLineShape = null;
        this._yLineShape = null;
    };
    return CrossAssist;
}(BaseAuxiliary_1.BaseAuxiliary));
exports.CrossAssist = CrossAssist;


/***/ }),

/***/ "./src/tool/common/DropDragTool.ts":
/*!*****************************************!*\
  !*** ./src/tool/common/DropDragTool.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropDragTool = void 0;
var Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
var Tool_1 = __webpack_require__(/*! ../Tool */ "./src/tool/Tool.ts");
var DropDragTool = /** @class */ (function (_super) {
    __extends(DropDragTool, _super);
    function DropDragTool() {
        return _super.call(this) || this;
    }
    DropDragTool.prototype.keyDownHandler = function (inputInfo) {
        // console.log(`DropDragTool: KeyDownHandler`)
        Constant_1.selectManager.keyDownHandler(inputInfo);
    };
    DropDragTool.prototype.keyUpHandler = function (inputInfo) {
        // console.log(`DropDragTool: KeyUpHandler`)
        Constant_1.selectManager.keyUpHandler(inputInfo);
    };
    DropDragTool.prototype.mouseLeftDownHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseLeftDown`, inputInfo)
        Constant_1.selectManager.mouseLeftDownHandler(inputInfo);
    };
    DropDragTool.prototype.mouseMiddleDownHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseMiddleDown`)
        Constant_1.selectManager.mouseMiddleDownHandler(inputInfo);
    };
    DropDragTool.prototype.mouseRightDownHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseRightDown`)
        Constant_1.selectManager.mouseRightDownHandler(inputInfo);
    };
    DropDragTool.prototype.mouseMoveHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseMove`)
        Constant_1.selectManager.mouseMoveHandler(inputInfo);
    };
    DropDragTool.prototype.mouseLeftUpHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseLeftUp`, inputInfo)
        Constant_1.selectManager.mouseLeftUpHandler(inputInfo);
    };
    DropDragTool.prototype.mouseMiddleUpHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseMiddleUp`)
    };
    DropDragTool.prototype.mouseRightUpHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseRightUp`)
    };
    DropDragTool.prototype.mouseWheelHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseWheel`)
    };
    DropDragTool.prototype.mouseLeaveHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseLeave`)
    };
    DropDragTool.prototype.mouseEnterHandler = function (inputInfo) {
        // console.log(`DropDragTool: MouseEnter`)
    };
    return DropDragTool;
}(Tool_1.Tool));
exports.DropDragTool = DropDragTool;


/***/ }),

/***/ "./src/tool/draw/DrawToolManager.ts":
/*!******************************************!*\
  !*** ./src/tool/draw/DrawToolManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawToolManager = void 0;
var DrawToolCommand_1 = __webpack_require__(/*! ../../config/DrawToolCommand */ "./src/config/DrawToolCommand.ts");
var DrawLineShapeTool_1 = __webpack_require__(/*! ./drawLineShape/DrawLineShapeTool */ "./src/tool/draw/drawLineShape/DrawLineShapeTool.ts");
var Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
var FrameCommand_1 = __webpack_require__(/*! ../../config/FrameCommand */ "./src/config/FrameCommand.ts");
var DrawToolManager = /** @class */ (function () {
    function DrawToolManager(frameToolHandler) {
        this._frameToolHandler = frameToolHandler;
        Constant_1.eventBus.on(FrameCommand_1.EFrameCommand.SWITCH_DRAW_TOOL, this.update.bind(this));
    }
    Object.defineProperty(DrawToolManager.prototype, "frameToolHandler", {
        get: function () {
            return this._frameToolHandler;
        },
        set: function (value) {
            this._frameToolHandler = value;
        },
        enumerable: false,
        configurable: true
    });
    DrawToolManager.prototype.update = function (type, params) {
        if (params === void 0) { params = []; }
        switch (type) {
            case DrawToolCommand_1.EDrawToolCommand.BLANK_DROP: {
                console.warn("\u8FDB\u5165\u9009\u62E9\u6A21\u5F0F.");
                this.frameToolHandler.nextTool = Constant_1.dropDragTool;
                this.frameToolHandler.nextTool.drawing = false;
                if (this.frameToolHandler.auxiliaryTool) {
                    this.frameToolHandler.auxiliaryTool.destory();
                }
                break;
            }
            case DrawToolCommand_1.EDrawToolCommand.LINE: {
                console.warn("\u8FDB\u5165\u7ED8\u5236\u6A21\u5F0F: \u7ED8\u5236 ".concat(DrawToolCommand_1.EDrawToolCommand.LINE, "."));
                var newNextTool = new DrawLineShapeTool_1.DrawLineShapeTool();
                this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
                this.frameToolHandler.nextTool = newNextTool;
                this.frameToolHandler.nextTool.drawing = true;
                break;
            }
            default:
        }
        Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.RENDER_FRAME);
    };
    return DrawToolManager;
}());
exports.DrawToolManager = DrawToolManager;


/***/ }),

/***/ "./src/tool/draw/drawLineShape/DrawLineShape.ts":
/*!******************************************************!*\
  !*** ./src/tool/draw/drawLineShape/DrawLineShape.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLineShape = void 0;
var Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
var LineShape_1 = __webpack_require__(/*! ../../../objects/shapes/items/LineShape */ "./src/objects/shapes/items/LineShape.ts");
var DrawLayerShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
var LineShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
var Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
var DrawLineShape = /** @class */ (function () {
    function DrawLineShape() {
        this._shapeInstances = [];
        this._selectedDrawLayerShapeItem = null;
    }
    Object.defineProperty(DrawLineShape.prototype, "shapeInstances", {
        get: function () {
            return this._shapeInstances;
        },
        set: function (value) {
            this._shapeInstances = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLineShape.prototype, "selectedDrawLayerShapeItem", {
        get: function () {
            return this._selectedDrawLayerShapeItem;
        },
        set: function (value) {
            this._selectedDrawLayerShapeItem = value;
        },
        enumerable: false,
        configurable: true
    });
    DrawLineShape.prototype.completeDraw = function () {
        if (this.shapeInstances.length) {
            for (var i = 0; i < this.shapeInstances.length; i++) {
                var targetShapeItem = this.shapeInstances[i];
                var newTargetShapeItem = LineShapeManager_1.LineShapeManager.getInstance().createShapeItem(this.selectedDrawLayerShapeItem.model.layerItemId, targetShapeItem.startPoint, targetShapeItem.endPoint, targetShapeItem.strokeWidth);
                newTargetShapeItem.strokeColor = targetShapeItem.strokeColor;
                targetShapeItem.setDelete();
            }
            this.shapeInstances = [];
        }
    };
    DrawLineShape.prototype.cancelDraw = function () {
        this.destoryShapes();
    };
    DrawLineShape.prototype.updateShapes = function (inputInfo) {
        var len = this.shapeInstances.length;
        this.shapeInstances[len - 1].endPoint = new Vector2_1.Vector2(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
    };
    DrawLineShape.prototype.createShapes = function (x, y) {
        this.selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
        if (!this.selectedDrawLayerShapeItem) {
            return;
        }
        var startPoint = new Vector2_1.Vector2(x, y);
        var endPoint = new Vector2_1.Vector2(x, y);
        var targetShapeItem = (0, LineShape_1.buildLineShape)(this.selectedDrawLayerShapeItem.model.layerItemId, startPoint, endPoint, 1, Color_1.Color.GRAY);
        this.shapeInstances.push(targetShapeItem);
    };
    DrawLineShape.prototype.destoryShapes = function () {
        for (var i = 0; i < this.shapeInstances.length; i++) {
            this.shapeInstances[i].setDelete();
        }
        this.shapeInstances = [];
    };
    return DrawLineShape;
}());
exports.DrawLineShape = DrawLineShape;


/***/ }),

/***/ "./src/tool/draw/drawLineShape/DrawLineShapeTool.ts":
/*!**********************************************************!*\
  !*** ./src/tool/draw/drawLineShape/DrawLineShapeTool.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLineShapeTool = void 0;
var DrawToolCommand_1 = __webpack_require__(/*! ../../../config/DrawToolCommand */ "./src/config/DrawToolCommand.ts");
var FrameCommand_1 = __webpack_require__(/*! ../../../config/FrameCommand */ "./src/config/FrameCommand.ts");
var Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
var CrossAssist_1 = __webpack_require__(/*! ../../auxiliary/CrossAssist */ "./src/tool/auxiliary/CrossAssist.ts");
var Tool_1 = __webpack_require__(/*! ../../Tool */ "./src/tool/Tool.ts");
var DrawLineShape_1 = __webpack_require__(/*! ./DrawLineShape */ "./src/tool/draw/drawLineShape/DrawLineShape.ts");
var DrawLineShapeTool = /** @class */ (function (_super) {
    __extends(DrawLineShapeTool, _super);
    function DrawLineShapeTool() {
        var _this = _super.call(this) || this;
        _this._drawTargetShape = new DrawLineShape_1.DrawLineShape();
        _this._isDrawing = false;
        _this._hasMoveWhenAfterRightDown = false;
        _this._crossAssist = new CrossAssist_1.CrossAssist();
        return _this;
    }
    DrawLineShapeTool.prototype.initAuxiliaryTools = function () {
        this._crossAssist.create();
        return this._crossAssist;
    };
    DrawLineShapeTool.prototype.keyDownHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.keyDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.keyUpHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.keyUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseLeftDownHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.mouseLeftDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseMiddleDownHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.mouseMiddleDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseRightDownHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.mouseRightDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseMoveHandler = function (inputInfo) {
        if (this._crossAssist) {
            this._crossAssist.update(inputInfo);
        }
        if (inputInfo.rightMouseDown) {
            this._hasMoveWhenAfterRightDown = true;
        }
        if (this._isDrawing) {
            this._drawTargetShape.updateShapes(inputInfo);
        }
        var handlerAction = function (nextTool) {
            nextTool.mouseMoveHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseLeftUpHandler = function (inputInfo) {
        if (!this._isDrawing) {
            this._isDrawing = true;
            this._drawTargetShape.createShapes(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
        }
        else {
            this._isDrawing = false;
            this._drawTargetShape.completeDraw();
        }
        var handlerAction = function (nextTool) {
            nextTool.mouseLeftUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseMiddleUpHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.mouseMiddleUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseRightUpHandler = function (inputInfo) {
        if (!this._hasMoveWhenAfterRightDown) {
            this._isDrawing = false;
            this._drawTargetShape.cancelDraw();
            Constant_1.eventBus.emit(FrameCommand_1.EFrameCommand.SWITCH_DRAW_TOOL, DrawToolCommand_1.EDrawToolCommand.BLANK_DROP);
        }
        this._hasMoveWhenAfterRightDown = false;
        var handlerAction = function (nextTool) {
            nextTool.mouseRightUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseWheelHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.mouseWheelHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseLeaveHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.mouseLeaveHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    DrawLineShapeTool.prototype.mouseEnterHandler = function (inputInfo) {
        var handlerAction = function (nextTool) {
            nextTool.mouseEnterHandler(inputInfo);
        };
        this.handler(handlerAction);
    };
    return DrawLineShapeTool;
}(Tool_1.Tool));
exports.DrawLineShapeTool = DrawLineShapeTool;


/***/ }),

/***/ "./src/tool/selection/CircleShapeSelectionTool.ts":
/*!********************************************************!*\
  !*** ./src/tool/selection/CircleShapeSelectionTool.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShapeSelectionTool = void 0;
var Config_1 = __webpack_require__(/*! ../../config/Config */ "./src/config/Config.ts");
var Profile_1 = __webpack_require__(/*! ../../config/Profile */ "./src/config/Profile.ts");
var Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
var Matrix4_1 = __webpack_require__(/*! ../../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
var Main_1 = __webpack_require__(/*! ../../Main */ "./src/Main.ts");
var AssistPointShape_1 = __webpack_require__(/*! ../../objects/assist/AssistPointShape */ "./src/objects/assist/AssistPointShape.ts");
var SelectionTool_1 = __webpack_require__(/*! ./base/SelectionTool */ "./src/tool/selection/base/SelectionTool.ts");
var CircleShapeSelectionTool = /** @class */ (function (_super) {
    __extends(CircleShapeSelectionTool, _super);
    function CircleShapeSelectionTool(selectedItem) {
        var _this = _super.call(this) || this;
        _this._selectedItem = selectedItem;
        _this._movePhysicsX = 0;
        _this._movePhysicsY = 0;
        _this._isSelectedPoint1 = false;
        _this._isSelectedPoint2 = false;
        _this._isSelectedPoint3 = false;
        _this._isSelectedPoint4 = false;
        _this._isSelectedPoint5 = false;
        _this.initPointsPosition(_this._selectedItem.model.layerItemId, _this._selectedItem.centerPoint, _this._selectedItem.radius);
        return _this;
    }
    CircleShapeSelectionTool.prototype.mouseLeftDownSelect = function (inputInfo) {
        var allControlAssistPoints = [this._point1, this._point2, this._point3, this._point4, this._point5];
        var hitItem = null;
        for (var i = 0; i < allControlAssistPoints.length; i++) {
            if (allControlAssistPoints[i].isSelect(inputInfo.movePhysicsX, inputInfo.movePhysicsY)) {
                hitItem = allControlAssistPoints[i];
                break;
            }
        }
        return hitItem ? hitItem.parent : null;
    };
    CircleShapeSelectionTool.prototype.keyDownHandler = function (inputInfo) {
        switch (inputInfo.keyCode) {
            case Profile_1.EDIRECTION_KEY.LEFT: {
                this.moveSelectedItem(-Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case Profile_1.EDIRECTION_KEY.UP: {
                this.moveSelectedItem(0, Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            case Profile_1.EDIRECTION_KEY.RIGHT: {
                this.moveSelectedItem(Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case Profile_1.EDIRECTION_KEY.DOWN: {
                this.moveSelectedItem(0, -Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            default:
        }
    };
    CircleShapeSelectionTool.prototype.keyUpHandler = function (inputInfo) { };
    CircleShapeSelectionTool.prototype.mouseLeftDownHandler = function (inputInfo) {
        this._movePhysicsX = inputInfo.leftDownPhysicsX;
        this._movePhysicsY = inputInfo.leftDownPhysicsY;
        this._isSelectedPoint1 = this._point1.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedPoint2 = this._point2.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedPoint3 = this._point3.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedPoint4 = this._point4.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedPoint5 = this._point5.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
    };
    CircleShapeSelectionTool.prototype.mouseLeftUpHandler = function (inputInfo) { };
    CircleShapeSelectionTool.prototype.mouseMoveHandler = function (inputInfo) {
        var diffX = inputInfo.movePhysicsX - this._movePhysicsX;
        var diffY = inputInfo.movePhysicsY - this._movePhysicsY;
        if (this._isSelectedPoint1) {
            this._selectedItem.updateRadius(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
            this.updatePointsPosition(this._selectedItem.centerPoint, this._selectedItem.radius);
        }
        else if (this._isSelectedPoint2) {
            this._selectedItem.updateRadius(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
            this.updatePointsPosition(this._selectedItem.centerPoint, this._selectedItem.radius);
        }
        else if (this._isSelectedPoint3) {
            this._selectedItem.updateRadius(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
            this.updatePointsPosition(this._selectedItem.centerPoint, this._selectedItem.radius);
        }
        else if (this._isSelectedPoint4) {
            this._selectedItem.updateRadius(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
            this.updatePointsPosition(this._selectedItem.centerPoint, this._selectedItem.radius);
        }
        else if (this._isSelectedPoint5) {
            this.moveSelectedItem(diffX, diffY);
        }
        else {
            this.moveSelectedItem(diffX, diffY);
        }
        this._movePhysicsX = inputInfo.movePhysicsX;
        this._movePhysicsY = inputInfo.movePhysicsY;
    };
    CircleShapeSelectionTool.prototype.mouseUpMoveHandler = function (inputInfo) {
        var allControlAssistPoints = [this._point1, this._point2, this._point3, this._point4, this._point5];
        var hit = false;
        for (var i = 0; i < allControlAssistPoints.length; i++) {
            if (allControlAssistPoints[i].isSelect(inputInfo.movePhysicsX, inputInfo.movePhysicsY)) {
                hit = true;
                break;
            }
        }
        if (hit) {
            Constant_1.environment.updateCanvasMouseCursor('pointer');
        }
        else {
            Constant_1.environment.updateCanvasMouseCursor('default');
        }
    };
    CircleShapeSelectionTool.prototype.clear = function () {
        this._selectedItem = null;
        this._point1.setDelete();
        this._point2.setDelete();
        this._point3.setDelete();
        this._point4.setDelete();
        this._point5.setDelete();
        this._point1 = null;
        this._point2 = null;
        this._point3 = null;
        this._point4 = null;
        this._point5 = null;
        this._isSelectedPoint1 = false;
        this._isSelectedPoint2 = false;
        this._isSelectedPoint3 = false;
        this._isSelectedPoint4 = false;
        this._isSelectedPoint5 = false;
    };
    CircleShapeSelectionTool.prototype.initPointsPosition = function (layerItemId, circleCenterPoint, circleRadius) {
        this._point1 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y + circleRadius), this._selectedItem);
        this._point2 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x + circleRadius, circleCenterPoint.y), this._selectedItem);
        this._point3 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y - circleRadius), this._selectedItem);
        this._point4 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x - circleRadius, circleCenterPoint.y), this._selectedItem);
        this._point5 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y), this._selectedItem);
    };
    CircleShapeSelectionTool.prototype.updatePointsPosition = function (circleCenterPoint, circleRadius) {
        this._point1.centerPoint = new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y + circleRadius);
        this._point2.centerPoint = new Main_1.Vector2(circleCenterPoint.x + circleRadius, circleCenterPoint.y);
        this._point3.centerPoint = new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y - circleRadius);
        this._point4.centerPoint = new Main_1.Vector2(circleCenterPoint.x - circleRadius, circleCenterPoint.y);
        this._point5.centerPoint = new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y);
    };
    CircleShapeSelectionTool.prototype.moveSelectedItem = function (diffX, diffY) {
        var translateMatrix4 = Matrix4_1.Matrix4.createTranslateMatrix4ByCoordinate(diffX, diffY, 0);
        this._selectedItem.transform(translateMatrix4);
        this._point1.transform(translateMatrix4);
        this._point2.transform(translateMatrix4);
        this._point3.transform(translateMatrix4);
        this._point4.transform(translateMatrix4);
        this._point5.transform(translateMatrix4);
    };
    return CircleShapeSelectionTool;
}(SelectionTool_1.SelectionTool));
exports.CircleShapeSelectionTool = CircleShapeSelectionTool;


/***/ }),

/***/ "./src/tool/selection/HandlerControl.ts":
/*!**********************************************!*\
  !*** ./src/tool/selection/HandlerControl.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandlerControl = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var LineShapeSelectionTool_1 = __webpack_require__(/*! ./LineShapeSelectionTool */ "./src/tool/selection/LineShapeSelectionTool.ts");
var CircleShapeSelectionTool_1 = __webpack_require__(/*! ./CircleShapeSelectionTool */ "./src/tool/selection/CircleShapeSelectionTool.ts");
var MoveOperSelectionTool_1 = __webpack_require__(/*! ./MoveOperSelectionTool */ "./src/tool/selection/MoveOperSelectionTool.ts");
var Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
var HandlerControl = /** @class */ (function () {
    function HandlerControl() {
        this._processor = null;
    }
    HandlerControl.prototype.mouseLeftDownSelect = function (inputInfo) {
        if (!this.hasProcessor()) {
            return null;
        }
        return this._processor.mouseLeftDownSelect(inputInfo);
    };
    HandlerControl.prototype.hasProcessor = function () {
        return this._processor !== null;
    };
    HandlerControl.prototype.clearProcessor = function () {
        this._processor && this._processor.clear();
        this._processor = null;
    };
    HandlerControl.prototype.updateProcessor = function (inputInfo, clickSelect) {
        var selectedItems = Constant_1.selectManager.getAllItems();
        if (selectedItems.length <= 0 && !clickSelect) {
            this.clearProcessor();
            return;
        }
        if (this._processor) {
            this._processor.mouseLeftDownHandler(inputInfo);
            return;
        }
        if (selectedItems.length >= 2) {
            this._processor = new MoveOperSelectionTool_1.MoveOperSelectionTool();
            this._processor.mouseLeftDownHandler(inputInfo);
            return;
        }
        var selectItem = selectedItems[0];
        if (selectItem.getType() === ElementConfig_1.EElementType.Line) {
            this._processor = new LineShapeSelectionTool_1.LineShapeSelectionTool(selectItem);
            this._processor.mouseLeftDownHandler(inputInfo);
            return;
        }
        if (selectItem.getType() === ElementConfig_1.EElementType.Circle) {
            this._processor = new CircleShapeSelectionTool_1.CircleShapeSelectionTool(selectItem);
            this._processor.mouseLeftDownHandler(inputInfo);
            return;
        }
    };
    HandlerControl.prototype.keyDownHandler = function (inputInfo) {
        this._processor && this._processor.keyDownHandler(inputInfo);
    };
    HandlerControl.prototype.keyUpHandler = function (inputInfo) {
        this._processor && this._processor.keyUpHandler(inputInfo);
    };
    HandlerControl.prototype.mouseLeftDownHandler = function (inputInfo) {
        this._processor && this._processor.mouseLeftDownHandler(inputInfo);
    };
    HandlerControl.prototype.mouseLeftUpHandler = function (inputInfo) {
        this._processor && this._processor.mouseLeftUpHandler(inputInfo);
    };
    HandlerControl.prototype.mouseMoveHandler = function (inputInfo) {
        this._processor && this._processor.mouseMoveHandler(inputInfo);
    };
    HandlerControl.prototype.mouseUpMoveHandler = function (inputInfo) {
        this._processor && this._processor.mouseUpMoveHandler(inputInfo);
    };
    return HandlerControl;
}());
exports.HandlerControl = HandlerControl;


/***/ }),

/***/ "./src/tool/selection/LineShapeSelectionTool.ts":
/*!******************************************************!*\
  !*** ./src/tool/selection/LineShapeSelectionTool.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineShapeSelectionTool = void 0;
var Config_1 = __webpack_require__(/*! ../../config/Config */ "./src/config/Config.ts");
var Profile_1 = __webpack_require__(/*! ../../config/Profile */ "./src/config/Profile.ts");
var Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
var Matrix4_1 = __webpack_require__(/*! ../../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
var AssistPointShape_1 = __webpack_require__(/*! ../../objects/assist/AssistPointShape */ "./src/objects/assist/AssistPointShape.ts");
var SelectionTool_1 = __webpack_require__(/*! ./base/SelectionTool */ "./src/tool/selection/base/SelectionTool.ts");
var LineShapeSelectionTool = /** @class */ (function (_super) {
    __extends(LineShapeSelectionTool, _super);
    function LineShapeSelectionTool(selectedItem) {
        var _this = _super.call(this) || this;
        _this._selectedItem = selectedItem;
        _this._movePhysicsX = 0;
        _this._movePhysicsY = 0;
        _this._lineStartPoint = (0, AssistPointShape_1.buildAssistPointShape)(_this._selectedItem.model.layerItemId, _this._selectedItem.startPoint, _this._selectedItem);
        _this._lineEndPoint = (0, AssistPointShape_1.buildAssistPointShape)(_this._selectedItem.model.layerItemId, _this._selectedItem.endPoint, _this._selectedItem);
        _this._isSelectedStartPoint = false;
        _this._isSelectedEndPoint = false;
        return _this;
    }
    LineShapeSelectionTool.prototype.mouseLeftDownSelect = function (inputInfo) {
        var allControlAssistPoints = [this._lineStartPoint, this._lineEndPoint];
        var hitItem = null;
        for (var i = 0; i < allControlAssistPoints.length; i++) {
            if (allControlAssistPoints[i].isSelect(inputInfo.movePhysicsX, inputInfo.movePhysicsY)) {
                hitItem = allControlAssistPoints[i];
                break;
            }
        }
        return hitItem ? hitItem.parent : null;
    };
    LineShapeSelectionTool.prototype.keyDownHandler = function (inputInfo) {
        switch (inputInfo.keyCode) {
            case Profile_1.EDIRECTION_KEY.LEFT: {
                this.moveSelectedItem(-Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case Profile_1.EDIRECTION_KEY.UP: {
                this.moveSelectedItem(0, Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            case Profile_1.EDIRECTION_KEY.RIGHT: {
                this.moveSelectedItem(Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case Profile_1.EDIRECTION_KEY.DOWN: {
                this.moveSelectedItem(0, -Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            default:
        }
    };
    LineShapeSelectionTool.prototype.keyUpHandler = function (inputInfo) { };
    LineShapeSelectionTool.prototype.mouseLeftDownHandler = function (inputInfo) {
        this._movePhysicsX = inputInfo.leftDownPhysicsX;
        this._movePhysicsY = inputInfo.leftDownPhysicsY;
        this._isSelectedStartPoint = this._lineStartPoint.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedEndPoint = this._lineEndPoint.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
    };
    LineShapeSelectionTool.prototype.mouseLeftUpHandler = function (inputInfo) { };
    LineShapeSelectionTool.prototype.mouseMoveHandler = function (inputInfo) {
        var diffX = inputInfo.movePhysicsX - this._movePhysicsX;
        var diffY = inputInfo.movePhysicsY - this._movePhysicsY;
        var translateMatrix4 = Matrix4_1.Matrix4.createTranslateMatrix4ByCoordinate(diffX, diffY, 0);
        if (this._isSelectedStartPoint) {
            this._selectedItem.startPoint = this._selectedItem.startPoint.multiplyMatrix4(translateMatrix4);
            this._lineStartPoint.transform(translateMatrix4);
        }
        else if (this._isSelectedEndPoint) {
            this._selectedItem.endPoint = this._selectedItem.endPoint.multiplyMatrix4(translateMatrix4);
            this._lineEndPoint.transform(translateMatrix4);
        }
        else {
            this.moveSelectedItem(diffX, diffY);
        }
        this._movePhysicsX = inputInfo.movePhysicsX;
        this._movePhysicsY = inputInfo.movePhysicsY;
    };
    LineShapeSelectionTool.prototype.mouseUpMoveHandler = function (inputInfo) {
        var allControlAssistPoints = [this._lineStartPoint, this._lineEndPoint];
        var hit = false;
        for (var i = 0; i < allControlAssistPoints.length; i++) {
            if (allControlAssistPoints[i].isSelect(inputInfo.movePhysicsX, inputInfo.movePhysicsY)) {
                hit = true;
                break;
            }
        }
        if (hit) {
            Constant_1.environment.updateCanvasMouseCursor('pointer');
        }
        else {
            Constant_1.environment.updateCanvasMouseCursor('default');
        }
    };
    LineShapeSelectionTool.prototype.clear = function () {
        this._selectedItem = null;
        this._lineStartPoint.setDelete();
        this._lineEndPoint.setDelete();
        this._lineStartPoint = null;
        this._lineEndPoint = null;
        this._isSelectedStartPoint = false;
        this._isSelectedEndPoint = false;
    };
    LineShapeSelectionTool.prototype.moveSelectedItem = function (diffX, diffY) {
        var translateMatrix4 = Matrix4_1.Matrix4.createTranslateMatrix4ByCoordinate(diffX, diffY, 0);
        this._selectedItem.transform(translateMatrix4);
        this._lineStartPoint.transform(translateMatrix4);
        this._lineEndPoint.transform(translateMatrix4);
    };
    return LineShapeSelectionTool;
}(SelectionTool_1.SelectionTool));
exports.LineShapeSelectionTool = LineShapeSelectionTool;


/***/ }),

/***/ "./src/tool/selection/MoveOperSelectionTool.ts":
/*!*****************************************************!*\
  !*** ./src/tool/selection/MoveOperSelectionTool.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveOperSelectionTool = void 0;
var Config_1 = __webpack_require__(/*! ../../config/Config */ "./src/config/Config.ts");
var Profile_1 = __webpack_require__(/*! ../../config/Profile */ "./src/config/Profile.ts");
var Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
var Matrix4_1 = __webpack_require__(/*! ../../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
var SelectionTool_1 = __webpack_require__(/*! ./base/SelectionTool */ "./src/tool/selection/base/SelectionTool.ts");
var MoveOperSelectionTool = /** @class */ (function (_super) {
    __extends(MoveOperSelectionTool, _super);
    function MoveOperSelectionTool() {
        var _this = _super.call(this) || this;
        _this._movePhysicsX = 0;
        _this._movePhysicsY = 0;
        return _this;
    }
    MoveOperSelectionTool.prototype.mouseLeftDownSelect = function (inputInfo) {
        return null;
    };
    MoveOperSelectionTool.prototype.keyDownHandler = function (inputInfo) {
        switch (inputInfo.keyCode) {
            case Profile_1.EDIRECTION_KEY.LEFT: {
                this.moveSelectedItems(-Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case Profile_1.EDIRECTION_KEY.UP: {
                this.moveSelectedItems(0, Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            case Profile_1.EDIRECTION_KEY.RIGHT: {
                this.moveSelectedItems(Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case Profile_1.EDIRECTION_KEY.DOWN: {
                this.moveSelectedItems(0, -Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            default:
        }
    };
    MoveOperSelectionTool.prototype.keyUpHandler = function (inputInfo) { };
    MoveOperSelectionTool.prototype.mouseLeftDownHandler = function (inputInfo) {
        this._movePhysicsX = inputInfo.leftDownPhysicsX;
        this._movePhysicsY = inputInfo.leftDownPhysicsY;
    };
    MoveOperSelectionTool.prototype.mouseLeftUpHandler = function (inputInfo) { };
    MoveOperSelectionTool.prototype.mouseMoveHandler = function (inputInfo) {
        var diffX = inputInfo.movePhysicsX - this._movePhysicsX;
        var diffY = inputInfo.movePhysicsY - this._movePhysicsY;
        this.moveSelectedItems(diffX, diffY);
        this._movePhysicsX = inputInfo.movePhysicsX;
        this._movePhysicsY = inputInfo.movePhysicsY;
    };
    MoveOperSelectionTool.prototype.mouseUpMoveHandler = function (inputInfo) { };
    MoveOperSelectionTool.prototype.clear = function () { };
    MoveOperSelectionTool.prototype.moveSelectedItems = function (diffX, diffY) {
        var allSelectItems = Constant_1.selectManager.getAllSelectItems();
        var translateMatrix4 = Matrix4_1.Matrix4.createTranslateMatrix4ByCoordinate(diffX, diffY, 0);
        for (var i = 0; i < allSelectItems.length; i++) {
            var item = allSelectItems[i];
            item.transform(translateMatrix4);
        }
    };
    return MoveOperSelectionTool;
}(SelectionTool_1.SelectionTool));
exports.MoveOperSelectionTool = MoveOperSelectionTool;


/***/ }),

/***/ "./src/tool/selection/base/SelectionTool.ts":
/*!**************************************************!*\
  !*** ./src/tool/selection/base/SelectionTool.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectionTool = void 0;
var SelectionTool = /** @class */ (function () {
    function SelectionTool() {
        this._moveStartPosition = null;
        this._lastPosition = null;
    }
    Object.defineProperty(SelectionTool.prototype, "selectedItems", {
        get: function () {
            return this._selectedItems;
        },
        set: function (value) {
            this._selectedItems = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectionTool.prototype, "moveStartPosition", {
        get: function () {
            return this._moveStartPosition;
        },
        set: function (value) {
            this._moveStartPosition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectionTool.prototype, "lastPosition", {
        get: function () {
            return this._lastPosition;
        },
        set: function (value) {
            this._lastPosition = value;
        },
        enumerable: false,
        configurable: true
    });
    return SelectionTool;
}());
exports.SelectionTool = SelectionTool;


/***/ }),

/***/ "./src/utils/Color.ts":
/*!****************************!*\
  !*** ./src/utils/Color.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
var Color = /** @class */ (function () {
    function Color(r, g, b, a) {
        if (a === void 0) { a = 1; }
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a;
    }
    Color.createByHex = function (hex) {
        var rgbaResult = Color.hex2Rgba(hex);
        return new Color(rgbaResult.r / 255, rgbaResult.g / 255, rgbaResult.b / 255, rgbaResult.a);
    };
    Color.createByValue = function (r, g, b, a) {
        return new Color(r, g, b, a);
    };
    /**
     * RGBA 转 HEX
     *
     * { r: 255, g: 165, b: 1, a: 255 } => 'ffa501'
     */
    Color.rgba2Hex = function (rgb) {
        return ((rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).padStart(6, '0');
    };
    /**
     * HEX 转 RGBA
     *
     * '#27ae60ff' => { r: 29, g: 174, b: 96, a: 255 }
     * '#27ae60' => { r: 29, g: 174, b: 96, a: 255 }
     */
    Color.hex2Rgba = function (hex) {
        var result = { r: 0, g: 0, b: 0, a: 0 };
        var alpha = false;
        var h = hex.slice(hex.startsWith('#') ? 1 : 0);
        if (h.length === 3) {
            h = __spreadArray([], __read(h), false).map(function (x) {
                return x + x;
            })
                .join('');
        }
        else if (h.length === 8) {
            alpha = true;
        }
        var n = parseInt(h, 16);
        result.r = n >>> (alpha ? 24 : 16);
        result.g = (n & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8);
        result.b = (n & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0);
        result.a = alpha ? n & 0x000000ff : 1;
        return result;
    };
    /**
     * RGBA 转 HSB
     */
    Color.rgba2Hsb = function (rgba) {
        var result = { h: 0, s: 0, b: 0 };
        var r = rgba.r, g = rgba.g, b = rgba.b, a = rgba.a;
        var nr = r / 255;
        var ng = g / 255;
        var nb = b / 255;
        var v = Math.max(r, g, b);
        var n = v - Math.min(r, g, b);
        var h = n === 0 ? 0 : n && v === nr ? (ng - b) / n : v === ng ? 2 + (nb - nr) / n : 4 + (nr - ng) / n;
        result.h = 60 * (h < 0 ? h + 6 : h);
        result.s = v && (n / v) * 100;
        result.b = v * 100;
        return result;
    };
    /**
     * HSB 转 RGBA
     */
    Color.hsb2Rgba = function (hsb) {
        var result = { r: 0, g: 0, b: 0, a: 0 };
        var h = hsb.h, s = hsb.s, b = hsb.b;
        var nh = h;
        var ns = s / 100;
        var nb = b / 100;
        var k = function (n) {
            return (n + nh / 60) % 6;
        };
        var f = function (n) {
            return nb * (1 - ns * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
        };
        result.r = 255 * f(5);
        result.r = 255 * f(3);
        result.r = 255 * f(1);
        result.a = 1;
        return result;
    };
    Color.rgba2Hsl = function (rgba) {
        var result = { h: 0, s: 0, l: 0 };
        var r = rgba.r, g = rgba.g, b = rgba.b, a = rgba.a;
        var nr = r / 255;
        var ng = g / 255;
        var nb = b / 255;
        var l = Math.max(r, g, b);
        var s = l - Math.min(nr, ng, nb);
        var h = s ? (l === nr ? (g - nb) / s : l === ng ? 2 + (nb - nr) / s : 4 + (nr - ng) / s) : 0;
        result.h = 60 * h < 0 ? 60 * h + 360 : 60 * h;
        result.s = 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0);
        result.l = (100 * (2 * l - s)) / 2;
        return result;
    };
    Color.hsl2Rgba = function (hsl) {
        var result = { r: 0, g: 0, b: 0, a: 0 };
        var h = hsl.h, s = hsl.s, l = hsl.l;
        var ns = s / 100;
        var nl = l / 100;
        var k = function (n) {
            return (n + h / 30) % 12;
        };
        var a = ns * Math.min(nl, 1 - nl);
        var f = function (n) {
            return nl - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        };
        result.r = 255 * f(0);
        result.g = 255 * f(8);
        result.b = 255 * f(4);
        result.a = 1;
        return result;
    };
    Object.defineProperty(Color.prototype, "red", {
        get: function () {
            return this._r;
        },
        set: function (value) {
            this._r = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "green", {
        get: function () {
            return this._g;
        },
        set: function (value) {
            this._g = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "blue", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "alpha", {
        get: function () {
            return typeof this._a === 'undefined' ? 1 : this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.toRGBAString = function () {
        var result = "rgba(";
        result += String(this.red * 255) + ', ';
        result += String(this.green * 255) + ', ';
        result += String(this.blue * 255) + ', ';
        result += String(this.alpha * 255) + ')';
        return result;
    };
    Color.prototype.toRGBAJSON = function () {
        return {
            red: this.red,
            blue: this.blue,
            green: this.green,
            alpha: this.alpha,
        };
    };
    Color.WHITE = new Color(1, 1, 1, 1);
    Color.BLACK = new Color(0, 0, 0, 1);
    Color.RED = new Color(1, 0, 0, 1);
    Color.GREEN = new Color(0, 1, 0, 1);
    Color.BLUE = new Color(0, 0, 1, 1);
    Color.GRAY = Color.createByHex('#9966ff');
    Color.SILVER = Color.createByHex('#d2d2d2');
    Color.GOLDEN = Color.createByHex('#dcaa14');
    Color.ORANGE = Color.createByHex('#ff6600');
    Color.YELLOW = Color.createByHex('#ffff00');
    return Color;
}());
exports.Color = Color;


/***/ }),

/***/ "./src/utils/Context.ts":
/*!******************************!*\
  !*** ./src/utils/Context.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
var Context = /** @class */ (function () {
    function Context(status) {
        this._status = status;
    }
    Object.defineProperty(Context.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    Context.prototype.isStatusMatch = function (bitIndex) {
        return (this._status & bitIndex) === bitIndex;
    };
    Context.prototype.setStatusMatch = function (bitIndex, status) {
        var _v = !!status;
        var statusResult = this._status;
        if (_v) {
            statusResult = statusResult | bitIndex;
            this._status = statusResult;
            return statusResult;
        }
        statusResult = statusResult & ~bitIndex;
        this._status = statusResult;
        return statusResult;
    };
    return Context;
}());
exports.Context = Context;


/***/ }),

/***/ "./src/utils/CreateCanvasData.ts":
/*!***************************************!*\
  !*** ./src/utils/CreateCanvasData.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCanvasData = void 0;
function createCanvasData(params) {
    if (params === void 0) { params = {}; }
    return {
        zoomRatio: params.zoomRatio || 0,
    };
}
exports.createCanvasData = createCanvasData;


/***/ }),

/***/ "./src/utils/CreateResouceData.ts":
/*!****************************************!*\
  !*** ./src/utils/CreateResouceData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createResouceData = void 0;
function createResouceData(params) {
    if (params === void 0) { params = {}; }
    return {
        fps: params.fps || 0,
    };
}
exports.createResouceData = createResouceData;


/***/ }),

/***/ "./src/utils/Device.ts":
/*!*****************************!*\
  !*** ./src/utils/Device.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * 像素转毫米
 * 		width = xpx * 25.4 / DPI
 * 		height = ypx * 25.4 / DPI
 * 毫米转像素
 * 		xpx = width * DPI / 25.4
 * 		ypx = height * DPI / 25.4
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Device = void 0;
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.getDPR = function () {
        return window.devicePixelRatio || 1;
    };
    Device.getAbsoluteDPI = function () {
        var DPI = new Array(2).fill(0);
        var tmpNode = document.createElement('div');
        tmpNode.style.cssText = "height: 1in; width: 1in; left: -100%; top: -100%; position: absolute;";
        document.body.appendChild(tmpNode);
        DPI[0] = parseInt(tmpNode.offsetWidth);
        DPI[1] = parseInt(tmpNode.offsetHeight);
        var parentNode = tmpNode.parentNode;
        parentNode.removeChild(tmpNode);
        return DPI;
    };
    return Device;
}());
exports.Device = Device;


/***/ }),

/***/ "./src/utils/EventBus.ts":
/*!*******************************!*\
  !*** ./src/utils/EventBus.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventBus = void 0;
var DEFAULT_NS = "stname";
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.handlers = {};
        this.handlers = {};
    }
    EventBus.prototype.on = function (eventName, callback, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        var handlers = this.handlers;
        var sn = spaceName || DEFAULT_NS;
        if (!eventName || typeof eventName !== 'string' || typeof callback !== 'function') {
            return;
        }
        if (!handlers[sn]) {
            handlers[sn] = {};
        }
        if (!handlers[sn][eventName] || !handlers[sn][eventName].length) {
            handlers[sn][eventName] = [];
        }
        handlers[sn][eventName].push(callback);
    };
    EventBus.prototype.emit = function (eventName, params, spaceName) {
        if (params === void 0) { params = null; }
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        return __awaiter(this, void 0, void 0, function () {
            var handlers, sn, length, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handlers = this.handlers;
                        sn = spaceName || DEFAULT_NS;
                        if (!eventName || typeof eventName !== 'string' || !handlers[sn]) {
                            return [2 /*return*/];
                        }
                        length = (handlers[sn][eventName] || []).length;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, handlers[sn][eventName][i](params)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EventBus.prototype.subscribe = function (eventName, callback, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        var handlers = this.handlers;
        var sn = spaceName || DEFAULT_NS;
        if (!eventName || typeof eventName !== 'string' || typeof callback !== 'function') {
            return;
        }
        if (!handlers[sn]) {
            handlers[sn] = {};
        }
        handlers[sn][eventName] = callback;
    };
    EventBus.prototype.exec = function (eventName, params, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        return __awaiter(this, void 0, void 0, function () {
            var handlers, sn;
            var _this = this;
            return __generator(this, function (_a) {
                handlers = this.handlers;
                sn = spaceName || DEFAULT_NS;
                return [2 /*return*/, new Promise(function (_) { return __awaiter(_this, void 0, void 0, function () {
                        var errorMsg, fn, res, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    errorMsg = null;
                                    if (!eventName || typeof eventName !== 'string') {
                                        errorMsg = new Error("Illegal parameter");
                                    }
                                    if (!handlers[sn]) {
                                        errorMsg = new Error("Unknown namespace");
                                    }
                                    if (!handlers[sn][eventName] || typeof handlers[sn][eventName] !== 'function') {
                                        errorMsg = new Error("Unknown listening function");
                                    }
                                    if (errorMsg) {
                                        _({ error: errorMsg, data: null, __arguments: { eventName: eventName, params: params, spaceName: sn } });
                                        return [2 /*return*/];
                                    }
                                    fn = handlers[sn][eventName];
                                    return [4 /*yield*/, fn(params)];
                                case 1:
                                    res = _a.sent();
                                    _({ error: null, data: res, __arguments: { eventName: eventName, params: params, spaceName: sn } });
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    _({ error: e_1, data: null, __arguments: { eventName: eventName, params: params, spaceName: sn } });
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    EventBus.prototype.clearEvent = function (eventName, spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        var handlers = this.handlers;
        var sn = spaceName || DEFAULT_NS;
        if (!eventName || typeof eventName !== 'string' || !handlers[sn]) {
            return;
        }
        delete handlers[sn][eventName];
    };
    EventBus.prototype.clearNameSpace = function (spaceName) {
        if (spaceName === void 0) { spaceName = DEFAULT_NS; }
        var handlers = this.handlers;
        var sn = spaceName || DEFAULT_NS;
        if (!handlers[sn]) {
            return;
        }
        handlers[sn] = {};
    };
    return EventBus;
}());
exports.EventBus = EventBus;


/***/ }),

/***/ "./src/utils/FPSCount.ts":
/*!*******************************!*\
  !*** ./src/utils/FPSCount.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FPSCount = void 0;
var FPSCount = /** @class */ (function () {
    function FPSCount() {
        this._timeAnchor = 0;
        this._countByInterval = 0;
        this._consumByInterval = 0;
        this._interval = 200;
        this._overInterval = false;
        this._fps = 0;
    }
    Object.defineProperty(FPSCount.prototype, "overInterval", {
        get: function () {
            return this._overInterval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FPSCount.prototype, "fps", {
        get: function () {
            return this._fps;
        },
        enumerable: false,
        configurable: true
    });
    FPSCount.prototype.calcFps = function () {
        var nowTimeStamp = performance.now();
        var consuming = nowTimeStamp - this._timeAnchor;
        this._countByInterval++;
        this._consumByInterval += consuming;
        this._overInterval = this._consumByInterval >= this._interval;
        if (this._overInterval) {
            var timeRatio = this._consumByInterval / 1000;
            this._fps = this._countByInterval / timeRatio;
            this._countByInterval = 0;
            this._consumByInterval = 0;
        }
        this._timeAnchor = nowTimeStamp;
    };
    return FPSCount;
}());
exports.FPSCount = FPSCount;


/***/ }),

/***/ "./src/utils/Helper.ts":
/*!*****************************!*\
  !*** ./src/utils/Helper.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Helper = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var ElementConfig_1 = __webpack_require__(/*! ../config/ElementConfig */ "./src/config/ElementConfig.ts");
var CircleShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
var DrawLayerShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
var LineShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.getAllElementShapes = function () {
        var targetShapes = __spreadArray(__spreadArray([], __read(LineShapeManager_1.LineShapeManager.getInstance().items.values()), false), __read(CircleShapeManager_1.CircleShapeManager.getInstance().items.values()), false);
        return __spreadArray([], __read(targetShapes), false);
    };
    Helper.getAllDrawLayerShapes = function () {
        var allDrawLayers = Array.from(DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().items.values());
        return allDrawLayers.filter(function (item) {
            return item.model.layerItemType === DrawLayerConfig_1.EDrawLayerType.ContentDrawLayer;
        });
    };
    Helper.deleteElementItem = function (elementItem) {
        if (elementItem.getType() === ElementConfig_1.EElementType.Line) {
            LineShapeManager_1.LineShapeManager.getInstance().deleteShapeItem(elementItem.model.elementItemId);
            return;
        }
        if (elementItem.getType() === ElementConfig_1.EElementType.Circle) {
            CircleShapeManager_1.CircleShapeManager.getInstance().deleteShapeItem(elementItem.model.elementItemId);
            return;
        }
    };
    Helper.checkDrawLayer = function (layerItemId) {
        var allDrawLayers = Helper.getAllDrawLayerShapes();
        var checkResult = { check: true, title: undefined };
        for (var i = 0; i < allDrawLayers.length; i++) {
            if (allDrawLayers[i].model.layerItemId === layerItemId) {
                checkResult.title = allDrawLayers[i].model.layerItemName;
                if (allDrawLayers[i].killed) {
                    checkResult.check = false;
                    return checkResult;
                }
                return checkResult;
            }
        }
        checkResult.check = false;
        return checkResult;
    };
    return Helper;
}());
exports.Helper = Helper;


/***/ }),

/***/ "./src/utils/SyncCanvasRect.ts":
/*!*************************************!*\
  !*** ./src/utils/SyncCanvasRect.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.syncCanvasRectByWindow = void 0;
function syncCanvasRectByWindow(canvasElement) {
    var windowInnerWidth = window.innerWidth;
    var windowInnerHeight = window.innerHeight;
    canvasElement.width = windowInnerWidth;
    canvasElement.height = windowInnerHeight;
}
exports.syncCanvasRectByWindow = syncCanvasRectByWindow;


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setCodeCap2LineCap = exports.setLineCap2Code = exports.throttle2 = exports.throttle1 = exports.arrayCopy = exports.toFixed = exports.isEqualOfArray = exports.getLimitRange = exports.mm2px = exports.px2mm = exports.getRandomInArea = void 0;
function getRandomInArea(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = Number.MAX_SAFE_INTEGER; }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomInArea = getRandomInArea;
function px2mm(pxValue, DPI) {
    if (typeof pxValue === 'undefined' || isNaN(pxValue)) {
        return 0;
    }
    return (pxValue * 25.4) / DPI;
}
exports.px2mm = px2mm;
function mm2px(mmValue, DPI) {
    if (typeof mmValue === 'undefined' || isNaN(mmValue)) {
        return 0;
    }
    return (mmValue * DPI) / 25.4;
}
exports.mm2px = mm2px;
function getLimitRange(inputNumber, min, max) {
    if (min === void 0) { min = 0.01; }
    if (max === void 0) { max = Number.MAX_SAFE_INTEGER; }
    if (inputNumber >= max) {
        return max;
    }
    if (inputNumber <= min) {
        return min;
    }
    return inputNumber;
}
exports.getLimitRange = getLimitRange;
function isEqualOfArray(a1, a2) {
    var len1 = a1.length;
    var len2 = a2.length;
    if (len1 !== len2) {
        return false;
    }
    for (var k1 = 0; k1 < len1; k1++) {
        for (var k2 = 0; k2 < len2; k2++) {
            if (a1[k1] !== a2[k2]) {
                return false;
            }
        }
    }
    return true;
}
exports.isEqualOfArray = isEqualOfArray;
function toFixed(number, digit, fixedDecimal) {
    if (digit === void 0) { digit = 2; }
    if (fixedDecimal === void 0) { fixedDecimal = true; }
    if (typeof number !== 'number') {
        number = +number;
    }
    if (isNaN(number)) {
        throw new Error('nedd number or <number>string');
    }
    digit = digit | 0;
    if (digit <= 0 || (!number && !fixedDecimal)) {
        return String(Math.round(number));
    }
    var p = [1, 10, 100, 1000, 10000][digit] || Math.pow(10, digit) || 10;
    if (fixedDecimal) {
        var sign = number < 0 ? '-' : '';
        number = number < 0 ? -number : number;
        number = Math.round(number * p) + '';
        while (number.length <= digit) {
            number = '0' + number;
        }
        number = number.slice(0, -digit) + '.' + number.slice(-digit);
        return sign + number;
    }
    return String(Math.round(number * p + 1e-10) / p);
}
exports.toFixed = toFixed;
function arrayCopy(sourceArray, sourceIndex, resultArray, resultIndex, copyLength) {
    if (sourceArray.length >= sourceIndex + copyLength && resultArray.length >= resultIndex + copyLength) {
        while (copyLength-- > 0) {
            resultArray[resultIndex++] = sourceArray[sourceIndex++];
        }
        return;
    }
    throw new Error('cannot read array out of range.');
}
exports.arrayCopy = arrayCopy;
function throttle1(fn, delay) {
    if (delay === void 0) { delay = 500; }
    var previous = 0;
    return function () {
        var now = +new Date();
        if (now - previous > delay) {
            //@ts-ignore
            fn.apply(this, arguments);
            previous = now;
        }
    };
}
exports.throttle1 = throttle1;
function throttle2(fn, delay) {
    if (delay === void 0) { delay = 500; }
    var timer = null;
    return function () {
        var _this = this;
        if (!timer) {
            timer = window.setTimeout(function () {
                timer = null;
                //@ts-ignore
                fn.apply(_this, arguments);
            }, delay);
        }
    };
}
exports.throttle2 = throttle2;
function setLineCap2Code(lineCap) {
    return {
        butt: 0,
        round: 1,
        square: 2,
    }[lineCap];
}
exports.setLineCap2Code = setLineCap2Code;
function setCodeCap2LineCap(code) {
    return {
        0: "butt",
        1: "round",
        2: "square",
    }[code];
}
exports.setCodeCap2LineCap = setCodeCap2LineCap;


/***/ }),

/***/ "./src/utils/geometry/Circle.Utils.ts":
/*!********************************************!*\
  !*** ./src/utils/geometry/Circle.Utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCircleBbox2 = void 0;
var BBox2_1 = __webpack_require__(/*! ../../geometry/BBox2 */ "./src/geometry/BBox2.ts");
function createCircleBbox2(centerPoint, radius, skrokeWidth) {
    var halfWidth = radius + skrokeWidth * 0.5;
    var minX = centerPoint.x - halfWidth;
    var minY = centerPoint.y - halfWidth;
    var maxX = centerPoint.x + halfWidth;
    var maxY = centerPoint.y + halfWidth;
    return new BBox2_1.BBox2(minX, minY, maxX, maxY);
}
exports.createCircleBbox2 = createCircleBbox2;


/***/ }),

/***/ "./src/utils/geometry/Line.Utils.ts":
/*!******************************************!*\
  !*** ./src/utils/geometry/Line.Utils.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createLineBbox2 = void 0;
var BBox2_1 = __webpack_require__(/*! ../../geometry/BBox2 */ "./src/geometry/BBox2.ts");
function createLineBbox2(startPoint, endPoint, strokeWidth) {
    var halfWidth = strokeWidth * 0.5;
    var minX = Math.min(startPoint.x, endPoint.x) - halfWidth;
    var minY = Math.min(startPoint.y, endPoint.y) - halfWidth;
    var maxX = Math.max(startPoint.x, endPoint.x) + halfWidth;
    var maxY = Math.max(startPoint.y, endPoint.y) + halfWidth;
    return new BBox2_1.BBox2(minX, minY, maxX, maxY);
}
exports.createLineBbox2 = createLineBbox2;


/***/ }),

/***/ "./src/view/ViewInit.ts":
/*!******************************!*\
  !*** ./src/view/ViewInit.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.viewInit = void 0;
var Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
var Starter_1 = __webpack_require__(/*! ../Starter */ "./src/Starter.ts");
function viewInit() {
    return __awaiter(this, void 0, void 0, function () {
        function render(timestamp) {
            starter.renderFrame(timestamp);
            window.requestAnimationFrame(render);
        }
        var starter;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    starter = new Starter_1.Starter(Constant_1.environment.canvasElement);
                    return [4 /*yield*/, starter.init()];
                case 1:
                    _a.sent();
                    window.setTimeout(function () {
                        render(performance.now());
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.viewInit = viewInit;


/***/ }),

/***/ "./src/view/manager/DrawLayerViewManager.ts":
/*!**************************************************!*\
  !*** ./src/view/manager/DrawLayerViewManager.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerViewManager = void 0;
var DrawLayerView_1 = __webpack_require__(/*! ../views/DrawLayerView */ "./src/view/views/DrawLayerView.ts");
var DrawLayerViewManager = /** @class */ (function () {
    function DrawLayerViewManager() {
        this._items = new Map();
    }
    DrawLayerViewManager.getInstance = function () {
        if (DrawLayerViewManager.thisInstance === undefined) {
            DrawLayerViewManager.thisInstance = new DrawLayerViewManager();
        }
        return DrawLayerViewManager.thisInstance;
    };
    Object.defineProperty(DrawLayerViewManager.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    DrawLayerViewManager.prototype.handleModify = function (scene, layers) {
        var e_1, _a;
        try {
            for (var layers_1 = __values(layers), layers_1_1 = layers_1.next(); !layers_1_1.done; layers_1_1 = layers_1.next()) {
                var layer = layers_1_1.value;
                if (layer.killed) {
                    this.deleteItem(layer.model.layerItemId);
                    continue;
                }
                var layerItemType = layer.getType();
                var layerStatus = layer.getStatus();
                var layerItemData = layer.getRenderData();
                this.modifyItem(scene, layer.model.layerItemId, layerItemType, layerStatus, layerItemData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (layers_1_1 && !layers_1_1.done && (_a = layers_1.return)) _a.call(layers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    DrawLayerViewManager.prototype.handleRefreshView = function (scene) {
        this.items.forEach(function (item) {
            item.notify(scene);
        });
    };
    DrawLayerViewManager.prototype.modifyItem = function (scene, layerItemId, layerItemType, layerStatus, layerItemData) {
        var layerItem = this.items.get(layerItemId);
        if (!layerItem) {
            var layerViewItem = new DrawLayerView_1.DrawLayerView(scene, layerItemId, layerItemData.layerItemName, layerItemData.layerItemOpacity, layerItemData.groupId);
            this.items.set(layerViewItem.layerItemId, layerViewItem);
            return;
        }
        layerItem.modify(layerItemData);
    };
    DrawLayerViewManager.prototype.deleteItem = function (layerItemId) {
        var drawLayerViewItem = this.items.get(layerItemId);
        if (!drawLayerViewItem) {
            return;
        }
        drawLayerViewItem.delete();
        this.items.delete(layerItemId);
    };
    return DrawLayerViewManager;
}());
exports.DrawLayerViewManager = DrawLayerViewManager;


/***/ }),

/***/ "./src/view/manager/ElementViewManager.ts":
/*!************************************************!*\
  !*** ./src/view/manager/ElementViewManager.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementViewManager = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var LineView_1 = __webpack_require__(/*! ../views/LineView */ "./src/view/views/LineView.ts");
var CircleView_1 = __webpack_require__(/*! ../views/CircleView */ "./src/view/views/CircleView.ts");
var ElementViewManager = /** @class */ (function () {
    function ElementViewManager() {
        this._items = new Map();
    }
    ElementViewManager.getInstance = function () {
        if (ElementViewManager.thisInstance === undefined) {
            ElementViewManager.thisInstance = new ElementViewManager();
        }
        return ElementViewManager.thisInstance;
    };
    Object.defineProperty(ElementViewManager.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    ElementViewManager.prototype.handleModify = function (scene, elements) {
        var e_1, _a;
        try {
            for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                var element = elements_1_1.value;
                if (element.killed) {
                    this.deleteItem(element.elementItemId);
                    continue;
                }
                var elementType = element.getType();
                var elementStatus = element.getStatus();
                var elementItemData = element.getRenderData();
                this.modifyItem(element.elementItemId, elementType, elementStatus, elementItemData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ElementViewManager.prototype.modifyItem = function (elementItemId, elementType, elementStatus, elementItemData) {
        var elementItem = this.items.get(elementItemId);
        if (!elementItem) {
            var newElementItem = null;
            switch (elementType) {
                case ElementConfig_1.EElementType.AssistLine: {
                    var data = elementItemData;
                    newElementItem = new LineView_1.LineView(data.elementItemId, data.layerItemId, data.type);
                    break;
                }
                case ElementConfig_1.EElementType.Line: {
                    var data = elementItemData;
                    newElementItem = new LineView_1.LineView(data.elementItemId, data.layerItemId, data.type);
                    break;
                }
                case ElementConfig_1.EElementType.AssistCircle: {
                    var data = elementItemData;
                    newElementItem = new CircleView_1.CircleView(data.elementItemId, data.layerItemId, data.type);
                    break;
                }
                case ElementConfig_1.EElementType.Circle: {
                    var data = elementItemData;
                    newElementItem = new CircleView_1.CircleView(data.elementItemId, data.layerItemId, data.type);
                    break;
                }
            }
            if (newElementItem) {
                this.items.set(newElementItem.id, newElementItem);
                elementItem = newElementItem;
            }
        }
        if (elementItem) {
            elementItem.modify(elementStatus, elementItemData);
        }
    };
    ElementViewManager.prototype.deleteItem = function (elementItemId) {
        var elementItem = this.items.get(elementItemId);
        if (!elementItem) {
            return;
        }
        elementItem.delete();
        this.items.delete(elementItemId);
    };
    return ElementViewManager;
}());
exports.ElementViewManager = ElementViewManager;


/***/ }),

/***/ "./src/view/utils/createMaskColor.ts":
/*!*******************************************!*\
  !*** ./src/view/utils/createMaskColor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFillMaskColor = exports.createStrokeMaskColor = void 0;
var Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
function createStrokeMaskColor() {
    return new Color_1.Color(255, 255, 255, 0.75);
}
exports.createStrokeMaskColor = createStrokeMaskColor;
function createFillMaskColor(fillColor) {
    return new Color_1.Color(255, 255, 255, fillColor.alpha > 0 ? 0.75 : 0);
}
exports.createFillMaskColor = createFillMaskColor;


/***/ }),

/***/ "./src/view/views/CircleView.ts":
/*!**************************************!*\
  !*** ./src/view/views/CircleView.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleView = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var ShapeElementViewBase_1 = __webpack_require__(/*! ./ShapeElementViewBase */ "./src/view/views/ShapeElementViewBase.ts");
var BaseCircle_1 = __webpack_require__(/*! ./elements/BaseCircle */ "./src/view/views/elements/BaseCircle.ts");
var createMaskColor_1 = __webpack_require__(/*! ../utils/createMaskColor */ "./src/view/utils/createMaskColor.ts");
var BaseAssisCircle_1 = __webpack_require__(/*! ./elements/BaseAssisCircle */ "./src/view/views/elements/BaseAssisCircle.ts");
var CircleView = /** @class */ (function (_super) {
    __extends(CircleView, _super);
    function CircleView(id, layerItemId, type) {
        var _this = _super.call(this, id) || this;
        _this._type = type;
        _this._layerItemId = layerItemId;
        _this._centerPoint = null;
        _this._radius = 0;
        _this._strokeWidth = 0;
        _this._mainPrimitive = null;
        _this._maskPrimitive = null;
        return _this;
    }
    Object.defineProperty(CircleView.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleView.prototype, "layerItemId", {
        get: function () {
            return this._layerItemId;
        },
        set: function (value) {
            this._layerItemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleView.prototype, "centerPoint", {
        get: function () {
            return this._centerPoint;
        },
        set: function (value) {
            this._centerPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleView.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CircleView.prototype, "strokeWidth", {
        get: function () {
            return this._strokeWidth;
        },
        set: function (value) {
            this._strokeWidth = value;
        },
        enumerable: false,
        configurable: true
    });
    CircleView.prototype.modify = function (elementStatus, elementItemData) {
        var layerItemId = elementItemData.layerItemId, status = elementItemData.status, centerPoint = elementItemData.centerPoint, radius = elementItemData.radius, strokeWidth = elementItemData.strokeWidth, elementItemId = elementItemData.elementItemId, type = elementItemData.type, strokeColor = elementItemData.strokeColor, fillColor = elementItemData.fillColor;
        this.layerItemId = layerItemId;
        this.status = status;
        this.centerPoint = centerPoint;
        this.radius = radius;
        this.strokeWidth = strokeWidth;
        if (!this._mainPrimitive) {
            this.delete();
            switch (type) {
                case ElementConfig_1.EElementType.Circle: {
                    this._mainPrimitive = new BaseCircle_1.BaseCircle(layerItemId, this);
                    break;
                }
                case ElementConfig_1.EElementType.AssistCircle: {
                    this._mainPrimitive = new BaseAssisCircle_1.BaseAssisCircle(layerItemId, this);
                    break;
                }
            }
        }
        // if (this.visible) {
        // 	console.log(`CircleView ${this.id} 可见.`)
        // } else {
        // 	console.log(`CircleView ${this.id} 非可见.`)
        // }
        if (this.hightlight) {
            this.hightlighting(layerItemId);
        }
        else {
            this.normalview();
        }
        // if (this.locked) {
        // 	console.log(`CircleView ${this.id} 锁定.`)
        // } else {
        // 	console.log(`CircleView ${this.id} 非锁定.`)
        // }
        if (this._mainPrimitive) {
            this._mainPrimitive.modify(elementStatus, elementItemData);
        }
        if (this._maskPrimitive) {
            var maskElementItemData = __assign(__assign({}, elementItemData), { strokeColor: (0, createMaskColor_1.createStrokeMaskColor)(), fillColor: (0, createMaskColor_1.createFillMaskColor)(fillColor) });
            this._maskPrimitive.modify(elementStatus, maskElementItemData);
        }
    };
    CircleView.prototype.delete = function () {
        this._mainPrimitive && this._mainPrimitive.delete();
        this._maskPrimitive && this._maskPrimitive.delete();
    };
    CircleView.prototype.normalview = function () {
        this._maskPrimitive && this._maskPrimitive.delete();
        this._maskPrimitive = null;
    };
    CircleView.prototype.hightlighting = function (layerItemId) {
        this._maskPrimitive && this._maskPrimitive.delete();
        this._maskPrimitive = new BaseCircle_1.BaseCircle(layerItemId, this);
    };
    return CircleView;
}(ShapeElementViewBase_1.ShapeElementViewBase));
exports.CircleView = CircleView;


/***/ }),

/***/ "./src/view/views/DrawLayerView.ts":
/*!*****************************************!*\
  !*** ./src/view/views/DrawLayerView.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerView = void 0;
var DrawLayerConfig_1 = __webpack_require__(/*! ../../config/DrawLayerConfig */ "./src/config/DrawLayerConfig.ts");
var DrawLayerViewPayloads_1 = __webpack_require__(/*! ./DrawLayerViewPayloads */ "./src/view/views/DrawLayerViewPayloads.ts");
var Context_1 = __webpack_require__(/*! ../../utils/Context */ "./src/utils/Context.ts");
var DrawLayerView = /** @class */ (function (_super) {
    __extends(DrawLayerView, _super);
    function DrawLayerView(scene, layerItemId, layerItemName, layerItemOpacity, groupId) {
        var _this = _super.call(this, DrawLayerConfig_1.DRAWLAYER_INIT_STATUS) || this;
        _this._scene = scene;
        _this._plane = scene.addPlaneItem(layerItemId);
        _this._type = undefined;
        _this._layerItemId = layerItemId;
        _this._layerItemName = layerItemName;
        _this._layerItemOpacity = layerItemOpacity;
        _this._groupId = groupId;
        _this._layerPayloads = new DrawLayerViewPayloads_1.DrawLayerViewPayloads(_this);
        return _this;
    }
    Object.defineProperty(DrawLayerView.prototype, "plane", {
        get: function () {
            return this._plane;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerView.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerView.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerView.prototype, "layerItemName", {
        get: function () {
            return this._layerItemName;
        },
        set: function (value) {
            this._layerItemName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerView.prototype, "layerItemOpacity", {
        get: function () {
            return this._layerItemOpacity;
        },
        set: function (value) {
            this._layerItemOpacity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerView.prototype, "groupId", {
        get: function () {
            return this._groupId;
        },
        set: function (value) {
            this._groupId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerView.prototype, "layerItemId", {
        get: function () {
            return this._layerItemId;
        },
        set: function (value) {
            this._layerItemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DrawLayerView.prototype, "layerPayloads", {
        get: function () {
            return this._layerPayloads;
        },
        set: function (value) {
            this._layerPayloads = value;
        },
        enumerable: false,
        configurable: true
    });
    DrawLayerView.prototype.modify = function (layerItemData) {
        this.layerItemName = layerItemData.layerItemName;
        this.layerItemOpacity = layerItemData.layerItemOpacity;
        this.groupId = layerItemData.groupId;
    };
    DrawLayerView.prototype.delete = function () {
        this._scene.deletePlaneItem(this.plane.planeId);
    };
    DrawLayerView.prototype.notify = function (scene) {
        this.layerPayloads.notify();
    };
    return DrawLayerView;
}(Context_1.Context));
exports.DrawLayerView = DrawLayerView;


/***/ }),

/***/ "./src/view/views/DrawLayerViewPayloads.ts":
/*!*************************************************!*\
  !*** ./src/view/views/DrawLayerViewPayloads.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerViewPayloads = void 0;
var Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
var DrawLayerViewPayloads = /** @class */ (function () {
    function DrawLayerViewPayloads(parent) {
        this._parent = parent;
        this._linesProfileCreated = new Map();
        this._linesProfileUpdated = new Map();
        this._linesProfileDeleted = new Set();
        this._circlesProfileCreated = new Map();
        this._circlesProfileUpdated = new Map();
        this._circlesProfileDeleted = new Set();
        this._assistLinesProfileCreated = new Map();
        this._assistLinesProfileUpdated = new Map();
        this._assistLinesProfileDeleted = new Set();
        this._assistCirclesProfileCreated = new Map();
        this._assistCirclesProfileUpdated = new Map();
        this._assistCirclesProfileDeleted = new Set();
    }
    Object.defineProperty(DrawLayerViewPayloads.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: false,
        configurable: true
    });
    DrawLayerViewPayloads.prototype.addLineProfileItem = function (data) {
        var id = Constant_1.globalIdenManager.getComponentIden();
        this._linesProfileCreated.set(id, data);
        return id;
    };
    DrawLayerViewPayloads.prototype.updateLineProfileItem = function (id, data) {
        this._linesProfileUpdated.set(id, data);
    };
    DrawLayerViewPayloads.prototype.deletedLineProfileItem = function (id) {
        this._linesProfileDeleted.add(id);
    };
    DrawLayerViewPayloads.prototype.addCircleProfileItem = function (data) {
        var id = Constant_1.globalIdenManager.getComponentIden();
        this._circlesProfileCreated.set(id, data);
        return id;
    };
    DrawLayerViewPayloads.prototype.updateCircleProfileItem = function (id, data) {
        this._circlesProfileUpdated.set(id, data);
    };
    DrawLayerViewPayloads.prototype.deletedCircleProfileItem = function (id) {
        this._circlesProfileDeleted.add(id);
    };
    DrawLayerViewPayloads.prototype.addAssistLineProfileItem = function (data) {
        var id = Constant_1.globalIdenManager.getComponentIden();
        this._assistLinesProfileCreated.set(id, data);
        return id;
    };
    DrawLayerViewPayloads.prototype.updateAssistLineProfileItem = function (id, data) {
        this._assistLinesProfileUpdated.set(id, data);
    };
    DrawLayerViewPayloads.prototype.deletedAssistLineProfileItem = function (id) {
        this._assistLinesProfileDeleted.add(id);
    };
    DrawLayerViewPayloads.prototype.addAssistCircleProfileItem = function (data) {
        var id = Constant_1.globalIdenManager.getComponentIden();
        this._assistCirclesProfileCreated.set(id, data);
        return id;
    };
    DrawLayerViewPayloads.prototype.updateAssistCircleProfileItem = function (id, data) {
        this._assistCirclesProfileUpdated.set(id, data);
    };
    DrawLayerViewPayloads.prototype.deletedAssistCircleProfileItem = function (id) {
        this._assistCirclesProfileDeleted.add(id);
    };
    DrawLayerViewPayloads.prototype.notify = function () {
        var plane = this.parent.plane;
        if (this._linesProfileCreated.size > 0) {
            plane.addLineItems(this._linesProfileCreated);
        }
        if (this._linesProfileUpdated.size > 0) {
            plane.updateLineItems(this._linesProfileUpdated);
        }
        if (this._linesProfileDeleted.size > 0) {
            plane.deleteLineItems(this._linesProfileDeleted);
        }
        if (this._circlesProfileCreated.size > 0) {
            plane.addCircleItems(this._circlesProfileCreated);
        }
        if (this._circlesProfileUpdated.size > 0) {
            plane.updateCircleItems(this._circlesProfileUpdated);
        }
        if (this._circlesProfileDeleted.size > 0) {
            plane.deleteCircleItems(this._circlesProfileDeleted);
        }
        if (this._assistLinesProfileCreated.size > 0) {
            plane.addAssistLineItems(this._assistLinesProfileCreated);
        }
        if (this._assistLinesProfileUpdated.size > 0) {
            plane.updateAssistLineItems(this._assistLinesProfileUpdated);
        }
        if (this._assistLinesProfileDeleted.size > 0) {
            plane.deleteAssistLineItems(this._assistLinesProfileDeleted);
        }
        if (this._assistCirclesProfileCreated.size > 0) {
            plane.addAssistCircleItems(this._assistCirclesProfileCreated);
        }
        if (this._assistCirclesProfileUpdated.size > 0) {
            plane.updateAssistCircleItems(this._assistCirclesProfileUpdated);
        }
        if (this._assistCirclesProfileDeleted.size > 0) {
            plane.deleteAssistCircleItems(this._assistCirclesProfileDeleted);
        }
        this._linesProfileCreated.clear();
        this._linesProfileUpdated.clear();
        this._linesProfileDeleted.clear();
        this._circlesProfileCreated.clear();
        this._circlesProfileUpdated.clear();
        this._circlesProfileDeleted.clear();
        this._assistLinesProfileCreated.clear();
        this._assistLinesProfileUpdated.clear();
        this._assistLinesProfileDeleted.clear();
        this._assistCirclesProfileCreated.clear();
        this._assistCirclesProfileUpdated.clear();
        this._assistCirclesProfileDeleted.clear();
    };
    return DrawLayerViewPayloads;
}());
exports.DrawLayerViewPayloads = DrawLayerViewPayloads;


/***/ }),

/***/ "./src/view/views/LineView.ts":
/*!************************************!*\
  !*** ./src/view/views/LineView.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineView = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var ShapeElementViewBase_1 = __webpack_require__(/*! ./ShapeElementViewBase */ "./src/view/views/ShapeElementViewBase.ts");
var BaseAssistLine_1 = __webpack_require__(/*! ./elements/BaseAssistLine */ "./src/view/views/elements/BaseAssistLine.ts");
var BaseLine_1 = __webpack_require__(/*! ./elements/BaseLine */ "./src/view/views/elements/BaseLine.ts");
var createMaskColor_1 = __webpack_require__(/*! ../utils/createMaskColor */ "./src/view/utils/createMaskColor.ts");
var LineView = /** @class */ (function (_super) {
    __extends(LineView, _super);
    function LineView(id, layerItemId, type) {
        var _this = _super.call(this, id) || this;
        _this._type = type;
        _this._layerItemId = layerItemId;
        _this._startPoint = null;
        _this._endPoint = null;
        _this._mainPrimitive = null;
        _this._maskPrimitive = null;
        return _this;
    }
    Object.defineProperty(LineView.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineView.prototype, "layerItemId", {
        get: function () {
            return this._layerItemId;
        },
        set: function (value) {
            this._layerItemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineView.prototype, "startPoint", {
        get: function () {
            return this._startPoint;
        },
        set: function (value) {
            this._startPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LineView.prototype, "endPoint", {
        get: function () {
            return this._endPoint;
        },
        set: function (value) {
            this._endPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    LineView.prototype.modify = function (elementStatus, elementItemData) {
        var layerItemId = elementItemData.layerItemId, status = elementItemData.status, startPoint = elementItemData.startPoint, endPoint = elementItemData.endPoint, elementItemId = elementItemData.elementItemId, type = elementItemData.type;
        this.layerItemId = layerItemId;
        this.status = status;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        if (!this._mainPrimitive) {
            this.delete();
            switch (type) {
                case ElementConfig_1.EElementType.Line: {
                    this._mainPrimitive = new BaseLine_1.BaseLine(layerItemId, this);
                    break;
                }
                case ElementConfig_1.EElementType.AssistLine: {
                    this._mainPrimitive = new BaseAssistLine_1.BaseAssistLine(layerItemId, this);
                    break;
                }
            }
        }
        // if (this.visible) {
        // 	console.log(`LineView ${this.id} 可见.`)
        // } else {
        // 	console.log(`LineView ${this.id} 非可见.`)
        // }
        if (this.hightlight) {
            this.hightlighting(layerItemId);
        }
        else {
            this.normalview();
        }
        // if (this.locked) {
        // 	console.log(`LineView ${this.id} 锁定.`)
        // } else {
        // 	console.log(`LineView ${this.id} 非锁定.`)
        // }
        if (this._mainPrimitive) {
            this._mainPrimitive.modify(elementStatus, elementItemData);
        }
        if (this._maskPrimitive) {
            var maskElementItemData = __assign(__assign({}, elementItemData), { strokeColor: (0, createMaskColor_1.createStrokeMaskColor)() });
            this._maskPrimitive.modify(elementStatus, maskElementItemData);
        }
    };
    LineView.prototype.delete = function () {
        this._mainPrimitive && this._mainPrimitive.delete();
        this._maskPrimitive && this._maskPrimitive.delete();
    };
    LineView.prototype.normalview = function () {
        this._maskPrimitive && this._maskPrimitive.delete();
        this._maskPrimitive = null;
    };
    LineView.prototype.hightlighting = function (layerItemId) {
        this._maskPrimitive && this._maskPrimitive.delete();
        this._maskPrimitive = new BaseLine_1.BaseLine(layerItemId, this);
    };
    return LineView;
}(ShapeElementViewBase_1.ShapeElementViewBase));
exports.LineView = LineView;


/***/ }),

/***/ "./src/view/views/ShapeElementViewBase.ts":
/*!************************************************!*\
  !*** ./src/view/views/ShapeElementViewBase.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeElementViewBase = void 0;
var ElementConfig_1 = __webpack_require__(/*! ../../config/ElementConfig */ "./src/config/ElementConfig.ts");
var Context_1 = __webpack_require__(/*! ../../utils/Context */ "./src/utils/Context.ts");
var DrawLayerViewManager_1 = __webpack_require__(/*! ../manager/DrawLayerViewManager */ "./src/view/manager/DrawLayerViewManager.ts");
var ShapeElementViewBase = /** @class */ (function (_super) {
    __extends(ShapeElementViewBase, _super);
    function ShapeElementViewBase(id) {
        var _this = _super.call(this, ElementConfig_1.ELEMENT_INIT_STATUS) || this;
        _this._id = id;
        return _this;
    }
    Object.defineProperty(ShapeElementViewBase.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    ShapeElementViewBase.prototype.getDrawLayerViewItem = function (layerItemId) {
        return DrawLayerViewManager_1.DrawLayerViewManager.getInstance().items.get(layerItemId);
    };
    Object.defineProperty(ShapeElementViewBase.prototype, "visible", {
        get: function () {
            return this.isStatusMatch(ElementConfig_1.EElementStatus.VISIBLE);
        },
        set: function (value) {
            this.setStatusMatch(ElementConfig_1.EElementStatus.VISIBLE, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShapeElementViewBase.prototype, "hightlight", {
        get: function () {
            return this.isStatusMatch(ElementConfig_1.EElementStatus.HIGHTLIGHT);
        },
        set: function (value) {
            this.setStatusMatch(ElementConfig_1.EElementStatus.HIGHTLIGHT, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShapeElementViewBase.prototype, "locked", {
        get: function () {
            return this.isStatusMatch(ElementConfig_1.EElementStatus.LOCKED);
        },
        set: function (value) {
            this.setStatusMatch(ElementConfig_1.EElementStatus.LOCKED, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShapeElementViewBase.prototype, "killed", {
        get: function () {
            return this.isStatusMatch(ElementConfig_1.EElementStatus.KILLED);
        },
        set: function (value) {
            this.setStatusMatch(ElementConfig_1.EElementStatus.KILLED, value);
        },
        enumerable: false,
        configurable: true
    });
    return ShapeElementViewBase;
}(Context_1.Context));
exports.ShapeElementViewBase = ShapeElementViewBase;


/***/ }),

/***/ "./src/view/views/elements/BaseAssisCircle.ts":
/*!****************************************************!*\
  !*** ./src/view/views/elements/BaseAssisCircle.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseAssisCircle = void 0;
var ElementItemBase_1 = __webpack_require__(/*! ./base/ElementItemBase */ "./src/view/views/elements/base/ElementItemBase.ts");
var BaseAssisCircle = /** @class */ (function (_super) {
    __extends(BaseAssisCircle, _super);
    function BaseAssisCircle(layerItemId, parent) {
        var _this = _super.call(this, layerItemId) || this;
        _this.parent = parent;
        return _this;
    }
    BaseAssisCircle.prototype.modify = function (status, data) {
        var drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        if (this.belongId === null) {
            this.belongId = drawLayerViewItem.layerPayloads.addAssistCircleProfileItem(data);
        }
        else {
            drawLayerViewItem.layerPayloads.updateAssistCircleProfileItem(this.belongId, data);
        }
    };
    BaseAssisCircle.prototype.delete = function () {
        var drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        drawLayerViewItem.layerPayloads.deletedAssistCircleProfileItem(this.belongId);
    };
    return BaseAssisCircle;
}(ElementItemBase_1.ElementItemBase));
exports.BaseAssisCircle = BaseAssisCircle;


/***/ }),

/***/ "./src/view/views/elements/BaseAssistLine.ts":
/*!***************************************************!*\
  !*** ./src/view/views/elements/BaseAssistLine.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseAssistLine = void 0;
var ElementItemBase_1 = __webpack_require__(/*! ./base/ElementItemBase */ "./src/view/views/elements/base/ElementItemBase.ts");
var BaseAssistLine = /** @class */ (function (_super) {
    __extends(BaseAssistLine, _super);
    function BaseAssistLine(layerItemId, parent) {
        var _this = _super.call(this, layerItemId) || this;
        _this.parent = parent;
        return _this;
    }
    BaseAssistLine.prototype.modify = function (status, data) {
        var drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        if (this.belongId === null) {
            this.belongId = drawLayerViewItem.layerPayloads.addAssistLineProfileItem(data);
        }
        else {
            drawLayerViewItem.layerPayloads.updateAssistLineProfileItem(this.belongId, data);
        }
    };
    BaseAssistLine.prototype.delete = function () {
        var drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        drawLayerViewItem.layerPayloads.deletedAssistLineProfileItem(this.belongId);
    };
    return BaseAssistLine;
}(ElementItemBase_1.ElementItemBase));
exports.BaseAssistLine = BaseAssistLine;


/***/ }),

/***/ "./src/view/views/elements/BaseCircle.ts":
/*!***********************************************!*\
  !*** ./src/view/views/elements/BaseCircle.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseCircle = void 0;
var ElementItemBase_1 = __webpack_require__(/*! ./base/ElementItemBase */ "./src/view/views/elements/base/ElementItemBase.ts");
var BaseCircle = /** @class */ (function (_super) {
    __extends(BaseCircle, _super);
    function BaseCircle(layerItemId, parent) {
        var _this = _super.call(this, layerItemId) || this;
        _this.parent = parent;
        return _this;
    }
    BaseCircle.prototype.modify = function (status, data) {
        var drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        if (this.belongId === null) {
            this.belongId = drawLayerViewItem.layerPayloads.addCircleProfileItem(data);
        }
        else {
            drawLayerViewItem.layerPayloads.updateCircleProfileItem(this.belongId, data);
        }
    };
    BaseCircle.prototype.delete = function () {
        var drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        drawLayerViewItem.layerPayloads.deletedCircleProfileItem(this.belongId);
    };
    return BaseCircle;
}(ElementItemBase_1.ElementItemBase));
exports.BaseCircle = BaseCircle;


/***/ }),

/***/ "./src/view/views/elements/BaseLine.ts":
/*!*********************************************!*\
  !*** ./src/view/views/elements/BaseLine.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseLine = void 0;
var ElementItemBase_1 = __webpack_require__(/*! ./base/ElementItemBase */ "./src/view/views/elements/base/ElementItemBase.ts");
var BaseLine = /** @class */ (function (_super) {
    __extends(BaseLine, _super);
    function BaseLine(layerItemId, parent) {
        var _this = _super.call(this, layerItemId) || this;
        _this.parent = parent;
        return _this;
    }
    BaseLine.prototype.modify = function (status, data) {
        var drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        if (this.belongId === null) {
            this.belongId = drawLayerViewItem.layerPayloads.addLineProfileItem(data);
        }
        else {
            drawLayerViewItem.layerPayloads.updateLineProfileItem(this.belongId, data);
        }
    };
    BaseLine.prototype.delete = function () {
        var drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        drawLayerViewItem.layerPayloads.deletedLineProfileItem(this.belongId);
    };
    return BaseLine;
}(ElementItemBase_1.ElementItemBase));
exports.BaseLine = BaseLine;


/***/ }),

/***/ "./src/view/views/elements/base/ElementBase.ts":
/*!*****************************************************!*\
  !*** ./src/view/views/elements/base/ElementBase.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementBase = void 0;
var ElementBase = /** @class */ (function () {
    function ElementBase() {
    }
    return ElementBase;
}());
exports.ElementBase = ElementBase;


/***/ }),

/***/ "./src/view/views/elements/base/ElementItemBase.ts":
/*!*********************************************************!*\
  !*** ./src/view/views/elements/base/ElementItemBase.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementItemBase = void 0;
var DrawLayerViewManager_1 = __webpack_require__(/*! ../../../manager/DrawLayerViewManager */ "./src/view/manager/DrawLayerViewManager.ts");
var ElementBase_1 = __webpack_require__(/*! ./ElementBase */ "./src/view/views/elements/base/ElementBase.ts");
var ElementItemBase = /** @class */ (function (_super) {
    __extends(ElementItemBase, _super);
    function ElementItemBase(layerItemId) {
        var _this = _super.call(this) || this;
        _this._elementItemId = null;
        _this._layerItemId = layerItemId;
        _this._belongId = null;
        return _this;
    }
    Object.defineProperty(ElementItemBase.prototype, "elementItemId", {
        get: function () {
            return this._elementItemId;
        },
        set: function (value) {
            this._elementItemId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementItemBase.prototype, "belongId", {
        get: function () {
            return this._belongId;
        },
        set: function (value) {
            this._belongId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ElementItemBase.prototype, "layerItemId", {
        get: function () {
            return this._layerItemId;
        },
        set: function (value) {
            this._layerItemId = value;
        },
        enumerable: false,
        configurable: true
    });
    ElementItemBase.prototype.getDrawLayerViewItem = function (layerItemId) {
        return DrawLayerViewManager_1.DrawLayerViewManager.getInstance().items.get(layerItemId);
    };
    return ElementItemBase;
}(ElementBase_1.ElementBase));
exports.ElementItemBase = ElementItemBase;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=canvas.js.map