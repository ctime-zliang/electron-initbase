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
const Main_1 = __webpack_require__(/*! ../../Main */ "./src/Main.ts");
const RUN_PROFILE = {
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
const RIPPLE_PROFILE = {
    maxRadius: 0,
    radius: 0,
    duration: 2000,
    speed: 0,
};
function drawClock(webCanvas, layerItemId, timeStamp) {
    RUN_PROFILE.nowTimeStamp = timeStamp;
    RUN_PROFILE.distTimeStamp = RUN_PROFILE.nowTimeStamp - RUN_PROFILE.lastTimeStamp;
    RUN_PROFILE.lastTimeStamp = RUN_PROFILE.nowTimeStamp;
    const drawLayerController = webCanvas.drawLayerController;
    const elementControl = webCanvas.elementController;
    drawLayerController.deleteDrawLayerElements(layerItemId);
    const houPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.55, 1]);
    const minPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.75, 1]);
    const secPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength, 1]);
    const htPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.2 * 0.55, 1]);
    const mtPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.2 * 0.75, 1]);
    const stPostionMatrix = new Main_1.Matrix3([0, 0, 1, 0, RUN_PROFILE.baseLength * 0.2, 1]);
    const nowHours = new Date().getHours();
    const nowMinutes = new Date().getMinutes();
    const nowSeconds = new Date().getSeconds();
    const nowMilliseconds = new Date().getMilliseconds();
    const totalMillsecOfHou = (nowHours % 12) * 60 * 60 * 1000 + nowMinutes * 60 * 1000 + nowSeconds * 1000 + nowMilliseconds * 1;
    const totalMillsecOfMin = nowMinutes * 60 * 1000 + nowSeconds * 1000 + nowMilliseconds * 1;
    const totalMillsecOfSec = nowSeconds * 1000 + nowMilliseconds * 1;
    const rotationOfHou = totalMillsecOfHou * -RUN_PROFILE.radianHouOfEachMillsec;
    const rotationOfMin = totalMillsecOfMin * -RUN_PROFILE.radianMinOfEachMillsec;
    const rotationOfSec = totalMillsecOfSec * -RUN_PROFILE.radianSecOfEachMillsec;
    const houPostionMatrixNew = houPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfHou));
    const minPostionMatrixNew = minPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfMin));
    const secPostionMatrixNew = secPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfSec));
    const htPostionMatrixNew = htPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfHou + Math.PI));
    const mtPostionMatrixNew = mtPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfMin + Math.PI));
    const stPostionMatrixNew = stPostionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(rotationOfSec + Math.PI));
    /**
     * 绘制波纹圆
     */
    RIPPLE_PROFILE.radius += RUN_PROFILE.distTimeStamp * RIPPLE_PROFILE.speed;
    if (RIPPLE_PROFILE.radius > RIPPLE_PROFILE.maxRadius) {
        RIPPLE_PROFILE.radius = 0;
    }
    const rippleRadiusDist = RIPPLE_PROFILE.maxRadius - RIPPLE_PROFILE.radius;
    const setRippleCircleFillColorAlpha = 0.25 * (rippleRadiusDist / RIPPLE_PROFILE.maxRadius);
    const setRippleCircleStrokeColorAlpha = 0.25 * (rippleRadiusDist / RIPPLE_PROFILE.maxRadius);
    const rippleCircleElementId = elementControl.createCircleShapeItem(layerItemId, 0, 0, RIPPLE_PROFILE.radius, 0.3);
    elementControl.setElementItemStrokeColor(rippleCircleElementId, new Main_1.Color(Main_1.Color.GOLDEN.red, Main_1.Color.GOLDEN.green, Main_1.Color.GOLDEN.blue, setRippleCircleStrokeColorAlpha));
    elementControl.setElementItemFillColor(rippleCircleElementId, new Main_1.Color(Main_1.Color.GOLDEN.red, Main_1.Color.GOLDEN.green, Main_1.Color.GOLDEN.blue, setRippleCircleFillColorAlpha));
    elementControl.setElementItemName(rippleCircleElementId, `波纹圆`);
    /**
     * 绘制外层大圆
     */
    const outCircleElementId = elementControl.createCircleShapeItem(layerItemId, 0, 0, RUN_PROFILE.outCircleRadius, 0.5);
    elementControl.setElementItemStrokeColor(outCircleElementId, Main_1.Color.createByAlpha(0.5, Main_1.Color.GOLDEN));
    elementControl.setElementItemFillColor(outCircleElementId, Main_1.Color.createByAlpha(0.025, Main_1.Color.GOLDEN));
    elementControl.setElementItemName(outCircleElementId, `外层大圆`);
    /**
     * 绘制时钟刻度线
     */
    for (let i = 1; i <= 12; i++) {
        const linePositionMatrix = new Main_1.Matrix3([0, RUN_PROFILE.outCircleRadius - 10, 1, 0, RUN_PROFILE.outCircleRadius - 2, 1]);
        const linePositionMatrixNew = linePositionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(-Main_1.Angles.degreeToRadian(30 * i)));
        const lineElementId = elementControl.createLineShapeItem(layerItemId, linePositionMatrixNew.data[0], linePositionMatrixNew.data[1], linePositionMatrixNew.data[3], linePositionMatrixNew.data[4], 1);
        let setColor = Main_1.Color.GOLDEN;
        if ((nowSeconds === i * 5 - 1 && nowMilliseconds >= 900) || (nowSeconds === i * 5 && nowMilliseconds <= 150)) {
            setColor = Main_1.Color.ORANGE;
        }
        elementControl.setElementItemStrokeColor(lineElementId, setColor);
        elementControl.setElementItemLineCap(lineElementId, 'square');
        elementControl.setElementItemName(lineElementId, `时钟刻度 ${i}`);
    }
    /**
     * 绘制分钟刻度线
     */
    for (let i = 1; i <= 60; i++) {
        if (i % 5 === 0) {
            continue;
        }
        const linePositionMatrix = new Main_1.Matrix3([0, RUN_PROFILE.outCircleRadius - 6, 1, 0, RUN_PROFILE.outCircleRadius - 2, 1]);
        const linePositionMatrixNew = linePositionMatrix.multiply3(Main_1.Matrix3.createRotateZMatrix3ByRadian(-Main_1.Angles.degreeToRadian(6 * i)));
        const lineElementId = elementControl.createLineShapeItem(layerItemId, linePositionMatrixNew.data[0], linePositionMatrixNew.data[1], linePositionMatrixNew.data[3], linePositionMatrixNew.data[4], 0.5);
        let setColor = Main_1.Color.GOLDEN;
        if ((nowSeconds === i - 1 && nowMilliseconds >= 900) || (nowSeconds === i && nowMilliseconds <= 150)) {
            setColor = Main_1.Color.ORANGE;
        }
        elementControl.setElementItemStrokeColor(lineElementId, setColor);
        elementControl.setElementItemLineCap(lineElementId, 'square');
        elementControl.setElementItemName(lineElementId, `分钟刻度 ${i}`);
    }
    /**
     * 绘制三针
     */
    const houLineElementId = elementControl.createLineShapeItem(layerItemId, houPostionMatrixNew.data[0], houPostionMatrixNew.data[1], houPostionMatrixNew.data[3], houPostionMatrixNew.data[4], 2);
    const htLineElementId = elementControl.createLineShapeItem(layerItemId, htPostionMatrixNew.data[0], htPostionMatrixNew.data[1], htPostionMatrixNew.data[3], htPostionMatrixNew.data[4], 2);
    const minLineElementId = elementControl.createLineShapeItem(layerItemId, minPostionMatrixNew.data[0], minPostionMatrixNew.data[1], minPostionMatrixNew.data[3], minPostionMatrixNew.data[4], 2);
    const mtLineElementId = elementControl.createLineShapeItem(layerItemId, mtPostionMatrixNew.data[0], mtPostionMatrixNew.data[1], mtPostionMatrixNew.data[3], mtPostionMatrixNew.data[4], 2);
    const secLineElementId = elementControl.createLineShapeItem(layerItemId, secPostionMatrixNew.data[0], secPostionMatrixNew.data[1], secPostionMatrixNew.data[3], secPostionMatrixNew.data[4], 1);
    const stLineElementId = elementControl.createLineShapeItem(layerItemId, stPostionMatrixNew.data[0], stPostionMatrixNew.data[1], stPostionMatrixNew.data[3], stPostionMatrixNew.data[4], 1);
    elementControl.setElementItemStrokeColor(houLineElementId, Main_1.Color.RED);
    elementControl.setElementItemName(houLineElementId, `时针头`);
    elementControl.setElementItemStrokeColor(htLineElementId, Main_1.Color.RED);
    elementControl.setElementItemName(htLineElementId, `时针尾`);
    elementControl.setElementItemStrokeColor(minLineElementId, Main_1.Color.GREEN);
    elementControl.setElementItemName(minLineElementId, `分针头`);
    elementControl.setElementItemStrokeColor(mtLineElementId, Main_1.Color.GREEN);
    elementControl.setElementItemName(mtLineElementId, `分针尾`);
    elementControl.setElementItemStrokeColor(secLineElementId, Main_1.Color.YELLOW);
    elementControl.setElementItemName(secLineElementId, `秒针头`);
    elementControl.setElementItemStrokeColor(stLineElementId, Main_1.Color.YELLOW);
    elementControl.setElementItemName(stLineElementId, `秒针尾`);
    /**
     * 绘制中心实心圆
     */
    const centerCircleElementItem1 = elementControl.createCircleShapeItem(layerItemId, 0, 0, 3.5, 0.5);
    elementControl.setElementItemStrokeColor(centerCircleElementItem1, Main_1.Color.SILVER);
    elementControl.setElementItemFillColor(centerCircleElementItem1, Main_1.Color.SILVER);
    elementControl.setElementItemName(centerCircleElementItem1, `中心外圆`);
    const centerCircleElementItem2 = elementControl.createCircleShapeItem(layerItemId, 0, 0, 2, 0.5);
    elementControl.setElementItemStrokeColor(centerCircleElementItem2, Main_1.Color.GOLDEN);
    elementControl.setElementItemFillColor(centerCircleElementItem2, Main_1.Color.GOLDEN);
    elementControl.setElementItemName(centerCircleElementItem2, `中心内圆`);
    window.requestAnimationFrame((timeStamp) => {
        drawClock(webCanvas, layerItemId, timeStamp);
    });
}
function drawClockInit(webCanvas) {
    const { elementController, drawLayerController } = webCanvas;
    const clockLayerItemId = drawLayerController.createDrawLayerShapeItem(`Layer Clock`);
    drawLayerController.clearAllSelectedDrawLayers();
    const DPI = webCanvas.getDPI();
    const canvasRect = webCanvas.getCanvasRect();
    const isWidthLess = canvasRect.width < canvasRect.height;
    const shorterSideSize = isWidthLess ? canvasRect.width : canvasRect.height;
    const shorterSideSizePhysics = (0, Main_1.px2mm)(+shorterSideSize, isWidthLess ? DPI[0] : DPI[1]);
    RUN_PROFILE.baseLength = (shorterSideSizePhysics / 2) * 0.7;
    RUN_PROFILE.outCircleRadius = RUN_PROFILE.baseLength + 5;
    RIPPLE_PROFILE.maxRadius = RUN_PROFILE.outCircleRadius;
    RIPPLE_PROFILE.speed = RIPPLE_PROFILE.maxRadius / RIPPLE_PROFILE.duration;
    window.requestAnimationFrame((timeStamp) => {
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
const panelPublicStyle = `
	margin: 5px 0; 
	padding: 0 10px; 
	font-size: 12px;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); 
	background: rgba(25, 25, 25, 0.75); 
	border: 1px solid #666666; 
	border-radius: 3px;
`;
function appendFloatContainerWindow(container, position = 'RT') {
    const positionStyle = {
        LT: 'left: 0; top: 0;',
        RT: 'right: 0; top: 0;',
        LB: 'left: 0; bottom: 0;',
        RB: 'right: 0; bottom: 0;',
    }[position];
    const elementId = `floatWindow${Math.random()}`;
    const wrapperHTML = `
		<section id="${elementId}" style="
			position: fixed; 
			${positionStyle} 
			z-index: 9999; 
			user-select: none;
			padding: 5px 10px;
		">
		</section>
	`;
    container.append(document.createRange().createContextualFragment(wrapperHTML));
    return document.getElementById(elementId);
}
exports.appendFloatContainerWindow = appendFloatContainerWindow;
exports.iputsPanelControl = {
    appendTo(container) {
        const wrapperHTML = `
			<main style="${panelPublicStyle}">
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>鼠标实时原生坐标(像素)(X/Y):&nbsp;&nbsp;</div>
					<div id="infoMouseMoveNativeAbsPos" style="min-width: 75px;">-/-</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>鼠标实时场景坐标(像素)(X/Y):&nbsp;&nbsp;</div>
					<div id="infoMouseMoveSceneTruthPos" style="min-width: 75px;">-/-</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>鼠标实时物理坐标(毫米)(X/Y):&nbsp;&nbsp;</div>
					<div id="infoMouseMovePhysicsPos" style="min-width: 75px;">-/-</div>
				</div>
			</main>
		`;
        container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update(data) {
        //@ts-ignore
        document.getElementById('infoMouseMoveNativeAbsPos').innerHTML = `${data.moveSourcePixelX}/${data.moveSourcePixelY}`;
        //@ts-ignore
        document.getElementById('infoMouseMoveSceneTruthPos').innerHTML = `${parseInt(data.moveTransPixelX)}/${parseInt(data.moveTransPixelY)}`;
        //@ts-ignore
        document.getElementById('infoMouseMovePhysicsPos').innerHTML = `${parseInt(data.movePhysicsX)}/${parseInt(data.movePhysicsY)}`;
    },
};
exports.canvasPanelControl = {
    appendTo(container) {
        const wrapperHTML = `
			<main style="${panelPublicStyle}">
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>画布缩放比例:&nbsp;&nbsp;</div>
					<div id="canvasZoomRatio" style="min-width: 75px;">-%</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>画布尺寸:&nbsp;&nbsp;</div>
					<div id="canvasBoundingRect" style="min-width: 75px;">-%</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>DPI:&nbsp;&nbsp;</div>
					<div id="viewDPI" style="min-width: 75px;">-%</div>
				</div>
			</main>
		`;
        container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update(data) {
        //@ts-ignore
        document.getElementById('canvasZoomRatio').innerHTML = `${Number((data.zoomRatio * 100).toString().match(/^\d+(?:\.\d{0,2})?/)) + '%'}`;
        //@ts-ignore
        document.getElementById('canvasBoundingRect').innerHTML = `${data.canvasWidth} x ${data.canvasHeight}`;
        //@ts-ignore
        document.getElementById('viewDPI').innerHTML = `${data.DPI[0]} * ${data.DPI[1]}`;
    },
};
exports.resourceControl = {
    appendTo(container) {
        const wrapperHTML = `
			<main style="${panelPublicStyle}">
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>渲染帧率(rAF 执行频率):&nbsp;&nbsp;</div>
					<div id="perfRenderSpeed" style="min-width: 75px;">-</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>核心引擎类型:&nbsp;&nbsp;</div>
					<div id="coreEngineType" style="min-width: 75px;">-</div>
				</div>
			</main>
		`;
        container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    update(data) {
        data.fps = parseInt(String(data.fps));
        //@ts-ignore
        document.getElementById('perfRenderSpeed').innerHTML = `${data.fps}`;
        //@ts-ignore
        document.getElementById('coreEngineType').innerHTML = `${data.coreEngineType}`;
    },
};
exports.profileControl = {
    containerDomId: 'profileControl',
    appendTo(container) {
        const wrapperHTML = `
			<main id="${this.containerDomId}" style="${panelPublicStyle}">
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>帧率统计:&nbsp;&nbsp;</div>
					<div style="min-width: 75px; display: flex;">
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>开启</span>
							<input type="radio" value="1" name="enableFPSCount" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>关闭</span>
							<input type="radio" value="0" name="enableFPSCount" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
					</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>画布网点:&nbsp;&nbsp;</div>
					<div style="min-width: 75px; display: flex;">
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>显示</span>
							<input type="radio" value="1" name="enableGrid" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>隐藏</span>
							<input type="radio" value="0" name="enableGrid" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
					</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>画布直角坐标轴:&nbsp;&nbsp;</div>
					<div style="min-width: 75px; display: flex;">
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>显示</span>
							<input type="radio" value="1" name="enableAxis" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>隐藏</span>
							<input type="radio" value="0" name="enableAxis" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
					</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>画布缩放:&nbsp;&nbsp;</div>
					<div style="min-width: 75px; display: flex;">
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>允许缩放</span>
							<input type="radio" value="1" name="enableCanvasZoomChange" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>禁止缩放</span>
							<input type="radio" value="0" name="enableCanvasZoomChange" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
					</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div>画布平移:&nbsp;&nbsp;</div>
					<div style="min-width: 75px; display: flex;">
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>允许平移</span>
							<input type="radio" value="1" name="enableCanvasTranslate" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
						<label style="cursor: pointer; margin: 0 10px 0 0; display: flex; flex-wrap: nowrap;">
							<span>禁止平移</span>
							<input type="radio" value="0" name="enableCanvasTranslate" style="cursor: pointer; display: block; margin: 0 5px;" />
						</label>
					</div>
				</div>
				<div style="padding: 2px 0; display: flex; justify-content: flex-start; align-items: center; align-content: center; color: #efefef;">
					<div style="min-width: 75px; display: flex;">
						<button 
							data-btn="resetCanvasView" 
							style="
								background-color: #ffffff;
								padding: 3px 5px;
								border: 1px solid #dcdcdc;
								border-radius: 3px;
								cursor: pointer;
							">重置画布视图
						</button>
					</div>
				</div>
			</main>
		`;
        container.append(document.createRange().createContextualFragment(wrapperHTML));
    },
    bindEvent(callback) {
        const containerElement = document.getElementById(this.containerDomId);
        const allInputElements = Array.from(containerElement.querySelectorAll(`input`));
        for (let i = 0; i < allInputElements.length; i++) {
            allInputElements[i].addEventListener('change', function (e) {
                const value = this.value;
                const setValue = Boolean(+value);
                const name = this.getAttribute('name');
                callback && callback('inputInput', name, setValue);
            });
        }
        /* ... */
        const resetCanvasViewBtnElement = containerElement.querySelector(`[data-btn="resetCanvasView"]`);
        resetCanvasViewBtnElement.addEventListener('click', function (e) {
            callback && callback('resetCanvasView');
        });
    },
    update(data) {
        const enableFPSCountElements = Array.from(document.querySelectorAll(`[name="enableFPSCount"]`));
        for (let i = 0; i < enableFPSCountElements.length; i++) {
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
        const enableGridElements = Array.from(document.querySelectorAll(`[name="enableGrid"]`));
        for (let i = 0; i < enableGridElements.length; i++) {
            if (enableGridElements[i].value === String(Number(data.enableGrid))) {
                enableGridElements[i].checked = true;
                continue;
            }
            enableGridElements[i].checked = false;
        }
        /* ... */
        const enableAxisElements = Array.from(document.querySelectorAll(`[name="enableAxis"]`));
        for (let i = 0; i < enableAxisElements.length; i++) {
            if (enableAxisElements[i].value === String(Number(data.enableAxis))) {
                enableAxisElements[i].checked = true;
                continue;
            }
            enableAxisElements[i].checked = false;
        }
        /* ... */
        const enableCanvasZoomChangeElements = Array.from(document.querySelectorAll(`[name="enableCanvasZoomChange"]`));
        for (let i = 0; i < enableCanvasZoomChangeElements.length; i++) {
            if (enableCanvasZoomChangeElements[i].value === String(Number(data.enableCanvasZoomChange))) {
                enableCanvasZoomChangeElements[i].checked = true;
                continue;
            }
            enableCanvasZoomChangeElements[i].checked = false;
        }
        /* ... */
        const enableCanvasTranslateElements = Array.from(document.querySelectorAll(`[name="enableCanvasTranslate"]`));
        for (let i = 0; i < enableCanvasTranslateElements.length; i++) {
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
exports.dropDragTool = exports.adsorption = exports.handlerControl = exports.service = exports.environment = exports.modifyController = exports.selectManager = exports.filterManager = exports.canvasController = exports.drawLayerController = exports.elementController = exports.operationController = exports.historyManager = exports.rtree = exports.globalIdenManager = exports.messageTool = void 0;
const GlobalIdenManager_1 = __webpack_require__(/*! ./tool/GlobalIdenManager */ "./src/tool/GlobalIdenManager.ts");
const ElementController_1 = __webpack_require__(/*! ./controller/ElementController */ "./src/controller/ElementController.ts");
const DrawLayerController_1 = __webpack_require__(/*! ./controller/DrawLayerController */ "./src/controller/DrawLayerController.ts");
const ModifyController_1 = __webpack_require__(/*! ./presenter/ModifyController */ "./src/presenter/ModifyController.ts");
const Environment_1 = __webpack_require__(/*! ./controller/Environment */ "./src/controller/Environment.ts");
const Rtree_1 = __webpack_require__(/*! ./geometry/rtree/Rtree */ "./src/geometry/rtree/Rtree.ts");
const DropDragTool_1 = __webpack_require__(/*! ./tool/common/DropDragTool */ "./src/tool/common/DropDragTool.ts");
const SelectManage_1 = __webpack_require__(/*! ./controller/SelectManage */ "./src/controller/SelectManage.ts");
const FilterManager_1 = __webpack_require__(/*! ./controller/FilterManager */ "./src/controller/FilterManager.ts");
const HandlerControl_1 = __webpack_require__(/*! ./tool/selection/HandlerControl */ "./src/tool/selection/HandlerControl.ts");
const Service_1 = __webpack_require__(/*! ./service/Service */ "./src/service/Service.ts");
const Adsorption_1 = __webpack_require__(/*! ./tool/Adsorption */ "./src/tool/Adsorption.ts");
const CanvasController_1 = __webpack_require__(/*! ./controller/CanvasController */ "./src/controller/CanvasController.ts");
const MessageTool_1 = __webpack_require__(/*! ./tool/MessageTool */ "./src/tool/MessageTool.ts");
const HistoryManager_1 = __webpack_require__(/*! ./tool/history/HistoryManager */ "./src/tool/history/HistoryManager.ts");
const OperationController_1 = __webpack_require__(/*! ./controller/OperationController */ "./src/controller/OperationController.ts");
exports.messageTool = new MessageTool_1.MessageTool();
exports.globalIdenManager = new GlobalIdenManager_1.GlobalIdenManager();
exports.rtree = new Rtree_1.RTree(20);
exports.historyManager = new HistoryManager_1.HistoryManager(Number.MAX_SAFE_INTEGER);
/* ... */
exports.operationController = new OperationController_1.OperationController();
exports.elementController = new ElementController_1.ElementController();
exports.drawLayerController = new DrawLayerController_1.DrawLayerController();
exports.canvasController = new CanvasController_1.CanvasController();
exports.filterManager = new FilterManager_1.FilterManager();
exports.selectManager = new SelectManage_1.SelectManager();
exports.modifyController = new ModifyController_1.ModifyController();
exports.environment = new Environment_1.Environment();
exports.service = new Service_1.Service();
exports.handlerControl = new HandlerControl_1.HandlerControl();
exports.adsorption = new Adsorption_1.Adsorption();
exports.dropDragTool = new DropDragTool_1.DropDragTool();


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCanvasElement = exports.WebCanvas = exports.HistroyCommandAction = exports.OPERATION_ACRION = exports.DRAW_TOOL_COMMAND = exports.IS_DESKTOP = exports.messageTool = exports.calcRealPhysicsPosition = exports.getHashIden = exports.mm2px = exports.px2mm = void 0;
const Constant_1 = __webpack_require__(/*! ./Constant */ "./src/Constant.ts");
const ViewInit_1 = __webpack_require__(/*! ./view/ViewInit */ "./src/view/ViewInit.ts");
const Command_1 = __webpack_require__(/*! ./config/Command */ "./src/config/Command.ts");
const OperationProfile_1 = __webpack_require__(/*! ./config/OperationProfile */ "./src/config/OperationProfile.ts");
const Starter_1 = __webpack_require__(/*! ./Starter */ "./src/Starter.ts");
const Utils_1 = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");
const Config_1 = __webpack_require__(/*! ./config/Config */ "./src/config/Config.ts");
const SystemConfig_1 = __webpack_require__(/*! ./controller/SystemConfig */ "./src/controller/SystemConfig.ts");
const CreateCanvasProfile_1 = __webpack_require__(/*! ./utils/CreateCanvasProfile */ "./src/utils/CreateCanvasProfile.ts");
const MainEncode_1 = __webpack_require__(/*! ./file/encode/MainEncode */ "./src/file/encode/MainEncode.ts");
const MainDecode_1 = __webpack_require__(/*! ./file/decode/MainDecode */ "./src/file/decode/MainDecode.ts");
const Config_2 = __webpack_require__(/*! ./tool/history/command/Config */ "./src/tool/history/command/Config.ts");
const CalcRealPhysicsPosition_1 = __webpack_require__(/*! ./utils/CalcRealPhysicsPosition */ "./src/utils/CalcRealPhysicsPosition.ts");
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
exports.mm2px = Utils_1.mm2px;
exports.getHashIden = Utils_1.getHashIden;
exports.calcRealPhysicsPosition = CalcRealPhysicsPosition_1.calcRealPhysicsPosition;
exports.messageTool = Constant_1.messageTool;
exports.IS_DESKTOP = Config_1.IS_DESKTOP;
exports.DRAW_TOOL_COMMAND = Object.assign({}, Command_1.EDrawToolCommand);
exports.OPERATION_ACRION = Object.assign({}, OperationProfile_1.EOperationAction);
exports.HistroyCommandAction = Object.assign({}, Config_2.ECommandAction);
class WebCanvas {
    constructor(canvasElement) {
        Constant_1.environment.canvasElement = canvasElement;
        this._canvasElement = canvasElement;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, Starter_1.coreInit)();
            yield (0, ViewInit_1.viewInit)();
            yield (0, Starter_1.envirInit)(this._canvasElement);
            (0, Starter_1.layerInit)();
            const { eventsLoader, frameTool, drawToolManager } = (0, Starter_1.toolInit)(this._canvasElement);
            this._drawToolManager = drawToolManager;
            this._canvasElement.focus();
            window.focus();
            return true;
        });
    }
    get drawLayerController() {
        return Constant_1.drawLayerController;
    }
    get elementController() {
        return Constant_1.elementController;
    }
    get canvasController() {
        return Constant_1.canvasController;
    }
    get operationController() {
        return Constant_1.operationController;
    }
    getCanvasRect() {
        return this._canvasElement.getBoundingClientRect().toJSON();
    }
    getDPI() {
        return Constant_1.environment.DPI;
    }
    getSystemConfig() {
        return SystemConfig_1.SystemConfig.getInstance().toJSON();
    }
    getCanvasProfileData() {
        return (0, CreateCanvasProfile_1.createCanvasProfileChangedData)({});
    }
    applySystemConfig(key, value) {
        SystemConfig_1.SystemConfig.getInstance().update(key, value);
        exports.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
    }
    setDrawToolCommand(type) {
        this._drawToolManager.update({ type });
    }
    forceRender() {
        exports.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
    }
    createExportFileData() {
        const dataStr = new MainEncode_1.MainEncode(Constant_1.environment.sysVersion).createSourceDataStr();
        return {
            dataStr,
        };
    }
    refreshByImportFileData(fileData) {
        new MainDecode_1.MainDecode().parseData(fileData.dataStr);
    }
    addInputsChangedListener(callback) {
        exports.messageTool.messageBus.subscribe(Command_1.EOutEventCommand.INPUTS_CHANGED, callback);
    }
    addResourceChangedListener(callback) {
        exports.messageTool.messageBus.subscribe(Command_1.EOutEventCommand.RESOURCE_CHANGED, callback);
    }
    addCanvasProfileChangedListener(callback) {
        exports.messageTool.messageBus.subscribe(Command_1.EOutEventCommand.CANVASPROFILE_CHANGED, callback);
    }
    addSystemProfileListener(callback) {
        exports.messageTool.messageBus.subscribe(Command_1.EOutEventCommand.PROFILE_CHANGED, callback);
    }
    addOperationProfileListener(callback) {
        exports.messageTool.messageBus.subscribe(Command_1.EOutEventCommand.OPERATION_CHANGED, callback);
    }
}
exports.WebCanvas = WebCanvas;
function createCanvasElement(containerElement) {
    if (containerElement.childNodes.length) {
        throw new Error(`you must provide a container that does not contain any child nodes.`);
    }
    const containerClientRect = containerElement.getBoundingClientRect();
    const canvasElement = document.createElement('canvas');
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetCanvasContent = exports.Starter = exports.envirInit = exports.coreInit = exports.toolInit = exports.layerInit = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ./config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Command_1 = __webpack_require__(/*! ./config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ./Constant */ "./src/Constant.ts");
const SystemConfig_1 = __webpack_require__(/*! ./controller/SystemConfig */ "./src/controller/SystemConfig.ts");
const Camera_1 = __webpack_require__(/*! ./engine/common/Camera */ "./src/engine/common/Camera.ts");
const createScene_1 = __webpack_require__(/*! ./engine/common/createScene */ "./src/engine/common/createScene.ts");
const Matrix4_1 = __webpack_require__(/*! ./geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ./objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
const ElementPresenter_1 = __webpack_require__(/*! ./presenter/ElementPresenter */ "./src/presenter/ElementPresenter.ts");
const LayerPresenter_1 = __webpack_require__(/*! ./presenter/LayerPresenter */ "./src/presenter/LayerPresenter.ts");
const DrawToolManager_1 = __webpack_require__(/*! ./tool/draw/DrawToolManager */ "./src/tool/draw/DrawToolManager.ts");
const EventsLoader_1 = __webpack_require__(/*! ./tool/EventsLoader */ "./src/tool/EventsLoader.ts");
const FrameTool_1 = __webpack_require__(/*! ./tool/FrameTool */ "./src/tool/FrameTool.ts");
const CreateResouceProfile_1 = __webpack_require__(/*! ./utils/CreateResouceProfile */ "./src/utils/CreateResouceProfile.ts");
const Device_1 = __webpack_require__(/*! ./utils/Device */ "./src/utils/Device.ts");
const FPSCount_1 = __webpack_require__(/*! ./utils/FPSCount */ "./src/utils/FPSCount.ts");
const SyncCanvasRect_1 = __webpack_require__(/*! ./utils/SyncCanvasRect */ "./src/utils/SyncCanvasRect.ts");
const CfgProfile_1 = __webpack_require__(/*! ./config/CfgProfile */ "./src/config/CfgProfile.ts");
const Utils_1 = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");
function layerInit() {
    DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().createControlShapeItem(DrawLayerProfile_1.EDrawLayerCode.MaskLayer);
}
exports.layerInit = layerInit;
function toolInit(canvasElement) {
    const eventsLoader = new EventsLoader_1.EventsLoader(canvasElement);
    eventsLoader.init();
    const frameTool = new FrameTool_1.FrameTool();
    frameTool.init();
    eventsLoader.nextTool = frameTool;
    const drawToolManager = new DrawToolManager_1.DrawToolManager(frameTool);
    return {
        eventsLoader,
        frameTool,
        drawToolManager,
    };
}
exports.toolInit = toolInit;
function coreInit() {
    return __awaiter(this, void 0, void 0, function* () {
        const systemConfig = SystemConfig_1.SystemConfig.getInstance();
        if (typeof systemConfig.forceUseCoreEngineType !== 'undefined') {
            Constant_1.environment.coreEngineType = systemConfig.forceUseCoreEngineType;
        }
        else {
            const isSupportWebGPUResult = yield (0, Utils_1.isSupportWebGPU)();
            // environment.coreEngineType = isSupportWebGPUResult ? ECoreEngineType.WEBGPU : ECoreEngineType.WEBCPU
            Constant_1.environment.coreEngineType = CfgProfile_1.ECoreEngineType.WEBCPU;
        }
    });
}
exports.coreInit = coreInit;
function envirInit(canvasElement) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, SyncCanvasRect_1.syncCanvasRectByWindow)(canvasElement);
        /* ... */
        const camera = Camera_1.Camera.getInstance();
        const canvasRect = canvasElement.getBoundingClientRect().toJSON();
        Constant_1.environment.updateCanvasRectSize(canvasRect.width, canvasRect.height, canvasRect.left, canvasRect.top);
        Constant_1.environment.updateCanvasTheme(SystemConfig_1.SystemConfig.getInstance().isDarkTheme);
        camera.matrix4 = Matrix4_1.Matrix4.ORIGIN.multiply4(Matrix4_1.Matrix4.createScaleMatrix4ByCoordinate(1, 1, 1));
        camera.isNeedUpdate = true;
    });
}
exports.envirInit = envirInit;
class Starter {
    constructor(canvasElement) {
        this._canvasElement = canvasElement;
        this.fpsCount = new FPSCount_1.FPSCount();
        this._isShouldUpdateCanvasView = false;
        this._isShouldHandleElementsFirst = false;
        Constant_1.environment.DPI = Device_1.Device.getAbsoluteDPI();
        Constant_1.messageTool.messageBus.subscribe(Command_1.EFrameCommand.RENDER_FRAME, (params) => {
            this._isShouldHandleElementsFirst = !params ? false : !!params.elementPriority;
            this._isShouldUpdateCanvasView = true;
        });
        Constant_1.messageTool.messageBus.subscribe(Command_1.EFrameCommand.UPDATE_CANVAS_ORIGIN, (originData) => {
            this._scene.setCanvasOrigin(originData);
            Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        });
        Constant_1.messageTool.messageBus.subscribe(Command_1.EFrameCommand.UPDATE_CANVAS_RECT, () => {
            this._scene.renderer.autoResize();
            Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this._scene = yield (0, createScene_1.createScene)(Constant_1.environment.coreEngineType, this._canvasElement);
            this._layerPresenter = new LayerPresenter_1.LayerPresenter(this._scene);
            this._elementPresenter = new ElementPresenter_1.ElementPresenter(this._scene);
            Constant_1.modifyController.setLayerPresenter(this._layerPresenter);
            Constant_1.modifyController.setElementPresenter(this._elementPresenter);
        });
    }
    get scene() {
        return this._scene;
    }
    renderFrame(timeStamp) {
        if (this._isShouldUpdateCanvasView) {
            this._isShouldUpdateCanvasView = false;
            Constant_1.modifyController.notify(this._isShouldHandleElementsFirst);
            this.scene.render(timeStamp);
            this._isShouldHandleElementsFirst = false;
        }
        if (SystemConfig_1.SystemConfig.getInstance().enableFPSCount) {
            this.fpsCount.calcFps();
            this.fpsCount.overInterval &&
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.RESOURCE_CHANGED, (0, CreateResouceProfile_1.createResouceProfileChangedData)({ fps: this.fpsCount.fps }));
        }
    }
}
exports.Starter = Starter;
function resetCanvasContent() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((_) => {
            Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.SWITCH_DRAW_TOOL, { type: Command_1.EDrawToolCommand.BLANK_DROP });
            Constant_1.selectManager.clearAllSelectItems();
            Constant_1.drawLayerController.clearAllSelectedDrawLayers();
            const allDrawLayers = Constant_1.drawLayerController.getAllDrawLayerResults();
            allDrawLayers.forEach((item) => {
                Constant_1.drawLayerController.deleteDrawLayerShapeItem(item.layerItemId);
            });
            Constant_1.globalIdenManager.reset();
            Constant_1.historyManager.clear();
            Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, { elementPriority: true });
            window.requestAnimationFrame(() => {
                _();
            });
        });
    });
}
exports.resetCanvasContent = resetCanvasContent;


/***/ }),

/***/ "./src/config/CfgProfile.ts":
/*!**********************************!*\
  !*** ./src/config/CfgProfile.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECoreEngineType = void 0;
var ECoreEngineType;
(function (ECoreEngineType) {
    ECoreEngineType["WEBCPU"] = "WEBCPU";
    ECoreEngineType["WEBGL"] = "WEBGL";
    ECoreEngineType["WEBGPU"] = "WEBGPU";
})(ECoreEngineType = exports.ECoreEngineType || (exports.ECoreEngineType = {}));


/***/ }),

/***/ "./src/config/Command.ts":
/*!*******************************!*\
  !*** ./src/config/Command.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EOutEventCommand = exports.EDrawToolCommand = exports.EFrameCommand = void 0;
var EFrameCommand;
(function (EFrameCommand) {
    EFrameCommand["RENDER_FRAME"] = "RENDER_FRAME";
    EFrameCommand["UPDATE_CANVAS_ORIGIN"] = "UPDATE_CANVAS_ORIGIN";
    EFrameCommand["UPDATE_CANVAS_RECT"] = "UPDATE_CANVAS_RECT";
    EFrameCommand["SWITCH_DRAW_TOOL"] = "SWITCH_DRAW_TOOL";
    EFrameCommand["REFRESH_RTREE"] = "REFRESH_RTREE";
    EFrameCommand["CLEAR_ALL_SELECTS"] = "CLEAR_ALL_SELECTS";
})(EFrameCommand = exports.EFrameCommand || (exports.EFrameCommand = {}));
var EDrawToolCommand;
(function (EDrawToolCommand) {
    EDrawToolCommand["BLANK_DROP"] = "BLANK_DROP";
    EDrawToolCommand["LINE"] = "LINE";
    EDrawToolCommand["CIRCLE"] = "CIRCLE";
})(EDrawToolCommand = exports.EDrawToolCommand || (exports.EDrawToolCommand = {}));
var EOutEventCommand;
(function (EOutEventCommand) {
    EOutEventCommand["INPUTS_CHANGED"] = "INPUTS_CHANGED";
    EOutEventCommand["CANVASPROFILE_CHANGED"] = "CANVASPROFILE_CHANGED";
    EOutEventCommand["RESOURCE_CHANGED"] = "RESOURCE_CHANGED";
    EOutEventCommand["PROFILE_CHANGED"] = "PROFILE_CHANGED";
    EOutEventCommand["DRAWLAYER_CHANGED"] = "DRAWLAYER_CHANGED";
    EOutEventCommand["OPERATION_CHANGED"] = "OPERATION_CHANGED";
})(EOutEventCommand = exports.EOutEventCommand || (exports.EOutEventCommand = {}));


/***/ }),

/***/ "./src/config/Config.ts":
/*!******************************!*\
  !*** ./src/config/Config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IS_DESKTOP = exports.ENABLE_RTREE = exports.MAX_ZOOM_RATIO = exports.MIN_ZOOM_RATIO = exports.DIRECTION_KEY_MOVE_STEP = exports.MOUSE_WHEEL_SCROLL_DIST = exports.MOUSE_WHEEL_ZOOM_RATIO = void 0;
exports.MOUSE_WHEEL_ZOOM_RATIO = 1.15;
exports.MOUSE_WHEEL_SCROLL_DIST = 25;
exports.DIRECTION_KEY_MOVE_STEP = 5;
exports.MIN_ZOOM_RATIO = 0.05;
exports.MAX_ZOOM_RATIO = 100;
exports.ENABLE_RTREE = true;
exports.IS_DESKTOP = window.IS_DESKTOP;


/***/ }),

/***/ "./src/config/DrawLayerProfile.ts":
/*!****************************************!*\
  !*** ./src/config/DrawLayerProfile.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EDrawLayerCode = exports.EDrawLayerType = exports.EDrawLayerStatus = exports.DRAWLAYER_INIT_STATUS = void 0;
exports.DRAWLAYER_INIT_STATUS = 0b0001;
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

/***/ "./src/config/ElementProfile.ts":
/*!**************************************!*\
  !*** ./src/config/ElementProfile.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EBaseFileType = exports.EElementFileType = exports.EElementType = exports.EElementStatus = exports.ELEMENT_INIT_STATUS = void 0;
exports.ELEMENT_INIT_STATUS = 0b0001;
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
var EElementFileType;
(function (EElementFileType) {
    EElementFileType["LINE"] = "LINE";
    EElementFileType["CIRCLE"] = "CIRCLE";
})(EElementFileType = exports.EElementFileType || (exports.EElementFileType = {}));
var EBaseFileType;
(function (EBaseFileType) {
    EBaseFileType["DOCUMENT"] = "DOCUMENT";
    EBaseFileType["CANVAS"] = "CANVAS";
    EBaseFileType["DRAWLAYER"] = "DRAWLAYER";
})(EBaseFileType = exports.EBaseFileType || (exports.EBaseFileType = {}));


/***/ }),

/***/ "./src/config/NativeProfile.ts":
/*!*************************************!*\
  !*** ./src/config/NativeProfile.ts ***!
  \*************************************/
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

/***/ "./src/config/OperationProfile.ts":
/*!****************************************!*\
  !*** ./src/config/OperationProfile.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EOperationAction = void 0;
var EOperationAction;
(function (EOperationAction) {
    EOperationAction["HISTORY_UNDO"] = "HISTORY_UNDO";
    EOperationAction["HISTORY_REDO"] = "HISTORY_REDO";
    EOperationAction["CREATE_ELEMENT"] = "CREATE_ELEMENT";
    EOperationAction["MODIFY_ELEMENT"] = "MODIFY_ELEMENT";
    EOperationAction["DELETE_ELEMENT"] = "DELETE_ELEMENT";
    EOperationAction["REFRESH_DRAWLAYER"] = "REFRESH_DRAWLAYER";
    EOperationAction["CREATED_DRAWLAYER"] = "CREATED_DRAWLAYER";
    EOperationAction["DELETED_DRAWLAYER"] = "DELETED_DRAWLAYER";
    EOperationAction["SWITCH_ACTIVE_DRAWLAYER"] = "SWITCH_ACTIVE_DRAWLAYER";
    EOperationAction["CLEAR_ALL_ACTIVE_DRAWLAYER"] = "CLEAR_ALL_ACTIVE_DRAWLAYER";
    EOperationAction["CLEAR_ALL_DRAWLAYER_ELEMENTS"] = "CLEAR_ALL_DRAWLAYER_ELEMENTS";
    EOperationAction["IMPORT_DATASTR_START"] = "IMPORT_DATASTR_START";
    EOperationAction["IMPORT_DATASTR_COMPLETE"] = "IMPORT_DATASTR_COMPLETE";
    EOperationAction["EXPORT_DATASTR_START"] = "IMPORT_DATASTR_START";
    EOperationAction["EXPORT_DATASTR_COMPLETE"] = "IMPORT_DATASTR_COMPLETE";
})(EOperationAction = exports.EOperationAction || (exports.EOperationAction = {}));


/***/ }),

/***/ "./src/controller/CanvasController.ts":
/*!********************************************!*\
  !*** ./src/controller/CanvasController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasController = void 0;
const Config_1 = __webpack_require__(/*! ../config/Config */ "./src/config/Config.ts");
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
const Matrix4_1 = __webpack_require__(/*! ../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
const Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
const CreateCanvasProfile_1 = __webpack_require__(/*! ../utils/CreateCanvasProfile */ "./src/utils/CreateCanvasProfile.ts");
class CanvasController {
    constructor() {
        this._camera = Camera_1.Camera.getInstance();
    }
    /**
     * 按指定中心点缩放画布
     */
    zoomCanvas(ratio, zoomCenterVector3 = new Vector3_1.Vector3(0, 0, 0)) {
        if (this._camera.getZoomRatio() === ratio) {
            return;
        }
        const currentScale = this._camera.getZoomRatio();
        let scale = ratio / currentScale;
        if (!isNaN(currentScale) && currentScale !== 0) {
            if (ratio <= Config_1.MIN_ZOOM_RATIO) {
                scale = Config_1.MIN_ZOOM_RATIO / currentScale;
            }
            if (ratio >= Config_1.MAX_ZOOM_RATIO) {
                scale = Config_1.MAX_ZOOM_RATIO / currentScale;
            }
            const newMatrix4 = Matrix4_1.Matrix4.createScaleMatrix4ByCoordinate(scale, scale, 1).setOriginByVector3(zoomCenterVector3);
            this._camera.matrix4 = this._camera.matrix4.multiply4(newMatrix4);
            this._camera.isNeedUpdate = true;
        }
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.CANVASPROFILE_CHANGED, (0, CreateCanvasProfile_1.createCanvasProfileChangedData)({}));
    }
}
exports.CanvasController = CanvasController;


/***/ }),

/***/ "./src/controller/DrawLayerController.ts":
/*!***********************************************!*\
  !*** ./src/controller/DrawLayerController.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerController = void 0;
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
const DrawLayerProfile_1 = __webpack_require__(/*! ../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Helper_1 = __webpack_require__(/*! ../utils/Helper */ "./src/utils/Helper.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const OperationProfile_1 = __webpack_require__(/*! ../config/OperationProfile */ "./src/config/OperationProfile.ts");
class DrawLayerController {
    constructor() {
        /* ... */
    }
    /**
     * 获取所有绘制图层结果
     */
    getAllDrawLayerResults() {
        const allDrawLayers = Array.from(DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().items.values());
        return allDrawLayers
            .filter((layerItem) => {
            return layerItem.model.layerItemType === DrawLayerProfile_1.EDrawLayerType.ContentDrawLayer;
        })
            .map((layerItem) => {
            return {
                layerItemId: layerItem.model.layerItemId,
                layerItemName: layerItem.model.layerItemName,
                layerItemStatus: layerItem.status,
                layerItemType: layerItem.model.layerItemType,
                layerItemOpacity: layerItem.model.layerItemOpacity,
            };
        });
    }
    /**
     * 创建单个绘制图层
     */
    createDrawLayerShapeItem(layerItemName = 'Untitled Layer') {
        const drawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().createContentShapeItem(layerItemName);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.CREATED_DRAWLAYER, {
                targetItemId: drawLayerShapeItem.model.layerItemId,
            }));
        }
        return drawLayerShapeItem.model.layerItemId;
    }
    /**
     * 删除单个绘制图层
     */
    deleteDrawLayerShapeItem(layerItemId) {
        DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().deleteContentShapeItem(layerItemId);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, { elementPriority: true });
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.DELETED_DRAWLAYER, {
                targetItemId: layerItemId,
            }));
        }
    }
    /**
     * 获取第一个被选中的绘制图层的图层 ID
     */
    getActiveDrawLayerShapeItemId() {
        return DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem().layerItemId;
    }
    /**
     * 设置指定图层 ID 对应的图层为选中状态
     */
    setActiveDrawLayerShapeItem(layerItemId) {
        DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().setActiveItem(layerItemId);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.SWITCH_ACTIVE_DRAWLAYER, {
                targetItemId: layerItemId,
            }));
        }
    }
    /**
     * 清除所有选中的绘制图层的选中状态
     */
    clearAllSelectedDrawLayers() {
        DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().selectedLayersId = new Set([]);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.CLEAR_ALL_ACTIVE_DRAWLAYER, {
                targetItemId: undefined,
            }));
        }
    }
    /**
     * 删除指定图层 ID 对应的绘制图层中的所有图元
     */
    deleteDrawLayerElements(layerItemId) {
        const allElementShapes = Helper_1.Helper.getAllElementShapes();
        for (let i = 0; i < allElementShapes.length; i++) {
            if (allElementShapes[i].model.layerItemId !== layerItemId) {
                continue;
            }
            Helper_1.Helper.deleteElementItem(allElementShapes[i]);
            Constant_1.selectManager.clearSelectItemById(allElementShapes[i].elementItemId);
        }
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.CLEAR_ALL_DRAWLAYER_ELEMENTS, {
                targetItemId: layerItemId,
            }));
        }
    }
}
exports.DrawLayerController = DrawLayerController;


/***/ }),

/***/ "./src/controller/ElementController.ts":
/*!*********************************************!*\
  !*** ./src/controller/ElementController.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementController = void 0;
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const LineShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
const Vector2_1 = __webpack_require__(/*! ../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const Helper_1 = __webpack_require__(/*! ../utils/Helper */ "./src/utils/Helper.ts");
const Color_1 = __webpack_require__(/*! ../utils/Color */ "./src/utils/Color.ts");
const CircleShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const OperationProfile_1 = __webpack_require__(/*! ../config/OperationProfile */ "./src/config/OperationProfile.ts");
class ElementController {
    constructor() {
        /* ... */
    }
    /**
     * 获取画布内所有图元结果
     */
    getAllElementResults() {
        return Helper_1.Helper.getAllElementShapes().map((elementItem) => {
            return elementItem.toJSON();
        });
    }
    /**
     * 获取画布内所有被选中的图元结果
     */
    getAllSelectedElementResults() {
        return Constant_1.selectManager.getAllSelectItems().map((elementItem) => {
            return elementItem.toJSON();
        });
    }
    /**
     * 创建 Line-Shape
     */
    createLineShapeItem(layerItemId, startX, startY, endX, endY, strokeWidth = 1, strokeColor = Color_1.Color.BLACK) {
        const startPoint = new Vector2_1.Vector2(startX, startY);
        const endPoint = new Vector2_1.Vector2(endX, endY);
        const checkResult = Helper_1.Helper.checkDrawLayer(layerItemId);
        if (!checkResult.check) {
            console.error(`error: target layer does not exist or has been deleted.`);
            return null;
        }
        const elementItemId = Constant_1.globalIdenManager.getElementIden();
        const targetShapeItem = LineShapeManager_1.LineShapeManager.getInstance().createShapeItem(elementItemId, layerItemId, startPoint, endPoint, strokeWidth, strokeColor);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.CREATE_ELEMENT, {}));
        }
        return targetShapeItem.model.elementItemId;
    }
    /**
     * 创建 Circle-Shape
     */
    createCircleShapeItem(layerItemId, centerX, centerY, radius, strokeWidth, strokeColor = new Color_1.Color(1, 0, 0, 1), fillColor = new Color_1.Color(0, 0, 0, 0)) {
        const centerPoint = new Vector2_1.Vector2(centerX, centerY);
        const checkResult = Helper_1.Helper.checkDrawLayer(layerItemId);
        if (!checkResult.check) {
            console.error(`error: target layer does not exist or has been deleted.`);
            return null;
        }
        const elementItemId = Constant_1.globalIdenManager.getElementIden();
        const targetShapeItem = CircleShapeManager_1.CircleShapeManager.getInstance().createShapeItem(elementItemId, layerItemId, centerPoint, radius, strokeWidth, strokeColor, fillColor);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.CREATE_ELEMENT, {}));
        }
        return targetShapeItem.model.elementItemId;
    }
    /**
     * 设置图元结构线线宽颜色
     */
    setElementItemStrokeColor(elementItemId, color) {
        const targetElement = Helper_1.Helper.getAllElementShapes().filter((elementItem) => {
            return elementItem.model.elementItemId === elementItemId;
        })[0];
        if (!targetElement) {
            return;
        }
        if (typeof targetElement.strokeColor !== 'undefined') {
            ;
            targetElement.strokeColor = color;
            if (Constant_1.environment.enbaleOperationMessagesEmit) {
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.MODIFY_ELEMENT, {}));
            }
        }
    }
    /**
     * 设置图元填充颜色
     */
    setElementItemFillColor(elementItemId, color) {
        const targetElement = Helper_1.Helper.getAllElementShapes().filter((elementItem) => {
            return elementItem.model.elementItemId === elementItemId;
        })[0];
        if (!targetElement) {
            return;
        }
        if (typeof targetElement.fillColor !== 'undefined') {
            ;
            targetElement.fillColor = color;
            if (Constant_1.environment.enbaleOperationMessagesEmit) {
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.MODIFY_ELEMENT, {}));
            }
        }
    }
    /**
     * 设置图元结构线端点圆角样式
     */
    setElementItemLineCap(elementItemId, lineCap) {
        const targetElement = Helper_1.Helper.getAllElementShapes().filter((elementItem) => {
            return elementItem.model.elementItemId === elementItemId;
        })[0];
        if (!targetElement) {
            return;
        }
        if (typeof targetElement.lineCap !== 'undefined') {
            ;
            targetElement.lineCap = lineCap;
            if (Constant_1.environment.enbaleOperationMessagesEmit) {
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.MODIFY_ELEMENT, {}));
            }
        }
    }
    /**
     * 设置图元名称
     */
    setElementItemName(elementItemId, elementItemName) {
        const targetElement = Helper_1.Helper.getAllElementShapes().filter((elementItem) => {
            return elementItem.model.elementItemId === elementItemId;
        })[0];
        if (!targetElement) {
            return;
        }
        ;
        targetElement.elementItemName = elementItemName;
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.MODIFY_ELEMENT, {}));
        }
    }
    /**
     * 删除指定图元 ID 对应的图元
     */
    deleteShapeItemById(elementItemId) {
        const targetElement = Helper_1.Helper.getElementShapeItemById(elementItemId);
        if (!targetElement) {
            return;
        }
        Helper_1.Helper.deleteElementItem(targetElement);
        Constant_1.selectManager.clearSelectItemById(targetElement.elementItemId);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.DELETE_ELEMENT, {}));
        }
    }
}
exports.ElementController = ElementController;


/***/ }),

/***/ "./src/controller/Environment.ts":
/*!***************************************!*\
  !*** ./src/controller/Environment.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Environment = void 0;
const CfgProfile_1 = __webpack_require__(/*! ../config/CfgProfile */ "./src/config/CfgProfile.ts");
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
const Common_1 = __webpack_require__(/*! ../file/config/Common */ "./src/file/config/Common.ts");
const Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
const Color_1 = __webpack_require__(/*! ../utils/Color */ "./src/utils/Color.ts");
const CreateCanvasProfile_1 = __webpack_require__(/*! ../utils/CreateCanvasProfile */ "./src/utils/CreateCanvasProfile.ts");
class Environment {
    constructor() {
        this._DPI = [96, 96];
        this._coreEngineType = CfgProfile_1.ECoreEngineType.WEBCPU;
        this._sysVersion = Common_1.EFileVsersion.wc1;
        this._canvasElement = null;
        this._origin = new Vector3_1.Vector3(0, 0, 1);
        this._canvasHeight = 0;
        this._canvasWidth = 0;
        this._canvasLeft = 0;
        this._canvasTop = 0;
        this._enbaleOperationMessagesEmit = false;
    }
    get DPI() {
        return this._DPI;
    }
    set DPI(value) {
        this._DPI = value;
    }
    get sysVersion() {
        return this._sysVersion;
    }
    set sysVersion(value) {
        this._sysVersion = value;
    }
    get coreEngineType() {
        return this._coreEngineType;
    }
    set coreEngineType(value) {
        this._coreEngineType = value;
    }
    get canvasElement() {
        return this._canvasElement;
    }
    set canvasElement(value) {
        this._canvasElement = value;
    }
    get origin() {
        return this._origin;
    }
    set origin(value) {
        this._origin = value;
    }
    get canvasWidth() {
        return this._canvasWidth;
    }
    set canvasWidth(value) {
        this._canvasWidth = value;
        Camera_1.Camera.getInstance().width = value;
    }
    get canvasHeight() {
        return this._canvasHeight;
    }
    set canvasHeight(value) {
        this._canvasHeight = value;
        Camera_1.Camera.getInstance().height = value;
    }
    get canvasLeft() {
        return this._canvasLeft;
    }
    set canvasLeft(value) {
        this._canvasLeft = value;
    }
    get canvasTop() {
        return this._canvasTop;
    }
    set canvasTop(value) {
        this._canvasTop = value;
    }
    get enbaleOperationMessagesEmit() {
        return this._enbaleOperationMessagesEmit;
    }
    updateCanvasTheme(isDarkTheme) {
        this._canvasElement.style.backgroundColor = isDarkTheme ? Color_1.Color.BLACK.toRGBAString() : Color_1.Color.WHITE.toRGBAString();
    }
    updateCanvasRectSize(canvasWidth, canvasHeight, canvasLeft, canvasTop) {
        this._canvasElement.width = canvasWidth;
        this._canvasElement.height = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.canvasLeft = canvasLeft;
        this.canvasTop = canvasTop;
        this.origin = new Vector3_1.Vector3(canvasWidth / 2, -canvasHeight / 2, 0);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.UPDATE_CANVAS_ORIGIN, this.origin.toJSON());
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.CANVASPROFILE_CHANGED, (0, CreateCanvasProfile_1.createCanvasProfileChangedData)({}));
    }
    getCanvasBoundingRect() {
        return {
            startX: -Math.abs(this.origin.x),
            startY: this.canvasElement.height - Math.abs(this.origin.y),
            width: this.canvasElement.width,
            height: -this.canvasElement.height,
        };
    }
    updateCanvasMouseCursor(cursor) {
        this.canvasElement.style.cursor = cursor;
    }
}
exports.Environment = Environment;


/***/ }),

/***/ "./src/controller/FilterManager.ts":
/*!*****************************************!*\
  !*** ./src/controller/FilterManager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterManager = void 0;
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
class FilterManager {
    constructor() { }
    /**
     * 获取点选图元集合
     */
    pointSelectBeforeFilter(x, y) {
        const selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
        const results = new Set();
        if (!selectedDrawLayerShapeItem) {
            return results;
        }
        const rtreeResults = Constant_1.rtree.search({ sx: x, sy: y, w: 0, h: 0 }, false);
        for (let i = 0; i < rtreeResults.length; i++) {
            const rtreeResultItem = rtreeResults[i];
            const rtreeItem = rtreeResultItem.leaf;
            const elementItem = rtreeItem.target;
            if (elementItem.isSelect(x, y) && elementItem.model.layerItemId === selectedDrawLayerShapeItem.layerItemId) {
                results.add(elementItem);
            }
        }
        return results;
    }
    /**
     * 获取框选图元集合
     */
    boxSelectBeforeFilter(bbox2) {
        const selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
        const results = new Set();
        if (!selectedDrawLayerShapeItem) {
            return results;
        }
        const rtreeResults = Constant_1.rtree.search({ sx: bbox2.minX, sy: bbox2.minY, w: bbox2.width, h: bbox2.height }, false);
        for (let i = 0; i < rtreeResults.length; i++) {
            const rtreeResultItem = rtreeResults[i];
            const rtreeItem = rtreeResultItem.leaf;
            const elementItem = rtreeItem.target;
            const elementItemBBox2 = elementItem.model.bbox2;
            if (elementItemBBox2.isBeWrappedByBBox2(bbox2) && elementItem.model.layerItemId === selectedDrawLayerShapeItem.layerItemId) {
                results.add(elementItem);
            }
        }
        return results;
    }
}
exports.FilterManager = FilterManager;


/***/ }),

/***/ "./src/controller/OperationController.ts":
/*!***********************************************!*\
  !*** ./src/controller/OperationController.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperationController = void 0;
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const OperationProfile_1 = __webpack_require__(/*! ../config/OperationProfile */ "./src/config/OperationProfile.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
const Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
const Starter_1 = __webpack_require__(/*! ../Starter */ "./src/Starter.ts");
const CommandProxy_1 = __webpack_require__(/*! ../tool/history/command/CommandProxy */ "./src/tool/history/command/CommandProxy.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
class OperationController {
    constructor() {
        /* ... */
    }
    addHistroyRecord(elementItemId, action, groupId = String(performance.now())) {
        const commandItem = CommandProxy_1.CommandProxy.getCommandInstance(elementItemId, action, groupId);
        Constant_1.historyManager.add(commandItem);
    }
    undo() {
        Constant_1.historyManager.undo();
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.CLEAR_ALL_SELECTS, null);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.HISTORY_UNDO, {}));
        }
    }
    redo() {
        Constant_1.historyManager.redo();
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.CLEAR_ALL_SELECTS, null);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.HISTORY_REDO, {}));
        }
    }
    hasHistoryUndoRecord() {
        return Constant_1.historyManager.hasUndo();
    }
    hasHistoryRedoRecord() {
        return Constant_1.historyManager.hasRedo();
    }
    resetCanvasContent() {
        return (0, Starter_1.resetCanvasContent)();
    }
    resetCanvasView() {
        const camera = Camera_1.Camera.getInstance();
        const cameraOrigin = camera.getOrigin();
        camera.matrix4 = camera.matrix4.translateByVector3(new Vector3_1.Vector3(-cameraOrigin.x, -cameraOrigin.y, 0));
        camera.isNeedUpdate = true;
        Constant_1.canvasController.zoomCanvas(1);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
    }
}
exports.OperationController = OperationController;


/***/ }),

/***/ "./src/controller/SelectManage.ts":
/*!****************************************!*\
  !*** ./src/controller/SelectManage.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectManager = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const BBox2_1 = __webpack_require__(/*! ../geometry/BBox2 */ "./src/geometry/BBox2.ts");
const Vector2_1 = __webpack_require__(/*! ../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const AssistLineShape_1 = __webpack_require__(/*! ../objects/assist/AssistLineShape */ "./src/objects/assist/AssistLineShape.ts");
const Manage_1 = __webpack_require__(/*! ../objects/base/Manage */ "./src/objects/base/Manage.ts");
const SystemConfig_1 = __webpack_require__(/*! ./SystemConfig */ "./src/controller/SystemConfig.ts");
const Color_1 = __webpack_require__(/*! ../utils/Color */ "./src/utils/Color.ts");
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
class SelectManager extends Manage_1.Manager {
    constructor() {
        super();
        this._selectionBoxLines = [];
        this._isBoxSelection = false;
        this._leftDownRealPhysicsX = 0;
        this._leftDownRealPhysicsY = 0;
        Constant_1.messageTool.messageBus.subscribe(Command_1.EFrameCommand.CLEAR_ALL_SELECTS, this.clearAllSelectItems.bind(this));
    }
    /**
     * 获取所有被选中的图元
     */
    getAllSelectItems() {
        const selects = [];
        for (let [key, item] of this.items) {
            selects.push(item);
        }
        return selects;
    }
    /**
     * 清除所有选中图元的记录
     */
    clearAllSelectItems() {
        this.setSelectStatus(new Set([]));
        Constant_1.handlerControl.clearProcessor();
    }
    /**
     * 在所有选中图元记录中删除指定图元 ID 对应的图元
     */
    clearSelectItemById(elementItemId) {
        if (this.items.has(elementItemId)) {
            const elementItem = this.items.get(elementItemId);
            this.items.delete(elementItem.elementItemId);
            elementItem.setUnSelect();
            Constant_1.handlerControl.clearProcessor();
        }
    }
    keyDownHandler(inputInfo) {
        Constant_1.handlerControl.keyDownHandler(inputInfo);
    }
    keyUpHandler(inputInfo) {
        Constant_1.handlerControl.keyUpHandler(inputInfo);
    }
    mouseLeftDownHandler(inputInfo) {
        this._isBoxSelection = false;
        this._leftDownRealPhysicsX = inputInfo.leftDownRealPhysicsX;
        this._leftDownRealPhysicsY = inputInfo.leftDownRealPhysicsY;
        const clickSelect = Constant_1.handlerControl.mouseLeftDownSelect(inputInfo);
        const selectResults = this.pointSelect(inputInfo);
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
            let hit = false;
            for (let [key, item] of this.items) {
                if (selectResults.has(item)) {
                    hit = true;
                    break;
                }
            }
            if (!hit) {
                this.setSelectStatus(selectResults);
            }
        }
        Constant_1.handlerControl.updateProcessor(inputInfo, clickSelect);
    }
    mouseMiddleDownHandler(inputInfo) {
        this.destorySelectionBox();
    }
    mouseRightDownHandler(inputInfo) {
        this.destorySelectionBox();
    }
    mouseLeftUpHandler(inputInfo) {
        this.destorySelectionBox();
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.REFRESH_RTREE, null);
        Constant_1.handlerControl.mouseLeftUpHandler(inputInfo);
        if (this._isBoxSelection) {
            const selectResults = this.boxSelect(inputInfo);
            this.setSelectStatus(selectResults);
        }
        this._leftDownRealPhysicsX = -Number.MAX_SAFE_INTEGER;
        this._leftDownRealPhysicsY = -Number.MAX_SAFE_INTEGER;
        Constant_1.handlerControl.updateProcessor(inputInfo, null);
    }
    mouseMoveHandler(inputInfo) {
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
    }
    /**
     * 获取点选图元集合(已过滤)
     */
    pointSelect(inputInfo) {
        const sourceResults = Constant_1.filterManager.pointSelectBeforeFilter(inputInfo.leftDownRealPhysicsX, inputInfo.leftDownRealPhysicsY);
        return sourceResults;
    }
    /**
     * 获取框选图元集合(已过滤)
     */
    boxSelect(inputInfo) {
        const rangeBBox2 = new BBox2_1.BBox2(this._leftDownRealPhysicsX, this._leftDownRealPhysicsY, inputInfo.moveRealPhysicsX, inputInfo.moveRealPhysicsY);
        const sourceResults = Constant_1.filterManager.boxSelectBeforeFilter(rangeBBox2);
        return sourceResults;
    }
    /**
     * 设置图元的选中样式
     * 		添加进选中图元集合
     * 		设置图元的选中样式
     */
    setSelectStatus(selectedItems) {
        for (let [key, item] of this.items) {
            item.setUnSelect();
        }
        this.items.clear();
        for (let selectedItem of selectedItems) {
            selectedItem.setSelect();
            this.items.set(selectedItem.elementItemId, selectedItem);
        }
    }
    /**
     * 创建或更新框选辅助虚线框
     */
    updateSelectionBox(inputInfo) {
        if (this._selectionBoxLines.length <= 0) {
            const line1 = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerProfile_1.EDrawLayerCode.MaskLayer, new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.leftDownRealPhysicsY), new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.leftDownRealPhysicsY), false);
            const line2 = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerProfile_1.EDrawLayerCode.MaskLayer, new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.leftDownRealPhysicsY), new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.moveRealPhysicsY), false);
            const line3 = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerProfile_1.EDrawLayerCode.MaskLayer, new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.moveRealPhysicsY), new Vector2_1.Vector2(inputInfo.moveRealPhysicsX, inputInfo.moveRealPhysicsY), false);
            const line4 = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerProfile_1.EDrawLayerCode.MaskLayer, new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.leftDownRealPhysicsY), new Vector2_1.Vector2(inputInfo.leftDownRealPhysicsX, inputInfo.moveRealPhysicsY), false);
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
    }
    /**
     * 销毁框选辅助虚线框
     */
    destorySelectionBox() {
        for (let i = 0; i < this._selectionBoxLines.length; i++) {
            this._selectionBoxLines[i].setDelete();
        }
        this._selectionBoxLines.length = 0;
    }
}
exports.SelectManager = SelectManager;


/***/ }),

/***/ "./src/controller/SystemConfig.ts":
/*!****************************************!*\
  !*** ./src/controller/SystemConfig.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemConfig = void 0;
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const IGNORE_KEYS = [`forceUseCoreEngineType`];
class SystemConfig {
    static getInstance() {
        if (SystemConfig.thisInstance === undefined) {
            SystemConfig.thisInstance = new SystemConfig();
        }
        return SystemConfig.thisInstance;
    }
    constructor() {
        this._forceUseCoreEngineType = undefined;
        // this._forceUseCoreEngineType = ECoreEngineType.WEBGL
        this._isDarkTheme = true;
        this._alignGrid = true;
        this._enableGrid = true;
        this._enableAxis = true;
        this._enableFPSCount = true;
        this._enableCanvasZoomChange = false;
        this._enableCanvasTranslate = false;
    }
    get forceUseCoreEngineType() {
        return this._forceUseCoreEngineType;
    }
    set isDarkTheme(value) {
        this._isDarkTheme = value;
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON());
    }
    get isDarkTheme() {
        return this._isDarkTheme;
    }
    set alignGrid(value) {
        this._alignGrid = value;
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON());
    }
    get alignGrid() {
        return this._alignGrid;
    }
    set enableGrid(value) {
        this._enableGrid = value;
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON());
    }
    get enableGrid() {
        return this._enableGrid;
    }
    set enableAxis(value) {
        this._enableAxis = value;
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON());
    }
    get enableAxis() {
        return this._enableAxis;
    }
    set enableFPSCount(value) {
        this._enableFPSCount = value;
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.PROFILE_CHANGED, this.toJSON());
    }
    get enableFPSCount() {
        return this._enableFPSCount;
    }
    set enableCanvasZoomChange(value) {
        this._enableCanvasZoomChange = value;
    }
    get enableCanvasZoomChange() {
        return this._enableCanvasZoomChange;
    }
    set enableCanvasTranslate(value) {
        this._enableCanvasTranslate = value;
    }
    get enableCanvasTranslate() {
        return this._enableCanvasTranslate;
    }
    toJSON() {
        return {
            isDarkTheme: this.isDarkTheme,
            alignGrid: this.alignGrid,
            enableGrid: this.enableGrid,
            enableAxis: this.enableAxis,
            enableFPSCount: this.enableFPSCount,
            enableCanvasZoomChange: this.enableCanvasZoomChange,
            enableCanvasTranslate: this.enableCanvasTranslate,
        };
    }
    update(key, value) {
        if (!IGNORE_KEYS.includes(key) && typeof this[key] !== 'undefined') {
            //@ts-ignore
            this[key] = value;
        }
    }
}
exports.SystemConfig = SystemConfig;


/***/ }),

/***/ "./src/engine/canvas/SceneCanvas.ts":
/*!******************************************!*\
  !*** ./src/engine/canvas/SceneCanvas.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SceneCanvas = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Vector3_1 = __webpack_require__(/*! ../../geometry/Vector3 */ "./src/geometry/Vector3.ts");
const Camera_1 = __webpack_require__(/*! ../common/Camera */ "./src/engine/common/Camera.ts");
const Scene_1 = __webpack_require__(/*! ../common/Scene */ "./src/engine/common/Scene.ts");
const GridCanvas_1 = __webpack_require__(/*! ./canvas/GridCanvas */ "./src/engine/canvas/canvas/GridCanvas.ts");
const RendererCanvas_1 = __webpack_require__(/*! ./core/RendererCanvas */ "./src/engine/canvas/core/RendererCanvas.ts");
const PlaneCanvas_1 = __webpack_require__(/*! ./plane/PlaneCanvas */ "./src/engine/canvas/plane/PlaneCanvas.ts");
class SceneCanvas extends Scene_1.Scene {
    constructor(canvasElement) {
        super();
        const camera = Camera_1.Camera.getInstance();
        this.renderer = new RendererCanvas_1.RendererCanvas(canvasElement);
        this._gridCanvas = new GridCanvas_1.GridCanvas();
        this._contentPlanes = new Map();
        this._controlPlanes = new Map();
        camera.width = this.renderer.width;
        camera.height = this.renderer.height;
    }
    setCanvasOrigin(originData) {
        this.renderer.origin = new Vector3_1.Vector3(originData.x, originData.y, originData.z);
        this.renderer.ctx.translate(originData.x, -originData.y);
        this.renderer.ctx.scale(1, -1);
    }
    addPlaneItem(planeId) {
        let planesHanlder = this._contentPlanes;
        if ([DrawLayerProfile_1.EDrawLayerCode.MaskLayer].indexOf(planeId) >= 0) {
            planesHanlder = this._controlPlanes;
        }
        if (planesHanlder.has(planeId)) {
            return planesHanlder.get(planeId);
        }
        const planeItem = new PlaneCanvas_1.PlaneCanvas(this, planeId);
        planesHanlder.set(planeId, planeItem);
        return planeItem;
    }
    deletePlaneItem(planeId) {
        const planesHanlder = this._contentPlanes;
        if ([DrawLayerProfile_1.EDrawLayerCode.MaskLayer].indexOf(planeId) >= 0) {
            return;
        }
        if (planesHanlder.has(planeId)) {
            planesHanlder.delete(planeId);
            return;
        }
    }
    render(timeStamp) {
        this.renderer.clearCanvas();
        this._gridCanvas.render(this.renderer.ctx);
        const allContentPlanes = Array.from(this._contentPlanes.values());
        this.renderer.ctx.save();
        for (let i = 0; i < allContentPlanes.length; i++) {
            const planeItem = allContentPlanes[i];
            planeItem.render(this.renderer.ctx);
        }
        const allControlPlanes = Array.from(this._controlPlanes.values());
        for (let i = 0; i < allControlPlanes.length; i++) {
            const planeItem = allControlPlanes[i];
            planeItem.render(this.renderer.ctx);
        }
        this.renderer.ctx.restore();
    }
}
exports.SceneCanvas = SceneCanvas;


/***/ }),

/***/ "./src/engine/canvas/canvas/GridCanvas.ts":
/*!************************************************!*\
  !*** ./src/engine/canvas/canvas/GridCanvas.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GridCanvas = void 0;
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const SystemConfig_1 = __webpack_require__(/*! ../../../controller/SystemConfig */ "./src/controller/SystemConfig.ts");
const Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
const Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
const Grid_1 = __webpack_require__(/*! ../../common/Grid */ "./src/engine/common/Grid.ts");
const GridSetting_1 = __webpack_require__(/*! ../../common/GridSetting */ "./src/engine/common/GridSetting.ts");
class GridCanvas extends Grid_1.Gird {
    constructor() {
        super();
        this._systemConfig = SystemConfig_1.SystemConfig.getInstance();
    }
    render(ctx) {
        const camera = Camera_1.Camera.getInstance();
        const gridSetting = GridSetting_1.GridSetting.getInstance();
        const viewBoundingRect = Constant_1.environment.getCanvasBoundingRect();
        const axisPosition = this.calcAxisPostion(viewBoundingRect, camera);
        if (this._systemConfig.enableAxis) {
            this.renderAxis(ctx, axisPosition, gridSetting);
        }
        if (this._systemConfig.enableGrid) {
            this.renderGrid(ctx, viewBoundingRect, camera, axisPosition, gridSetting);
        }
    }
    calcAxisPostion(viewBoundingRect, camera) {
        const { startX, startY, width, height } = viewBoundingRect;
        const transformMatrix4 = camera.getSourceMatrix();
        const xStart = [startX, 0];
        const xEnd = [width - Math.abs(startX), 0];
        const yStart = [0, startY];
        const yEnd = [0, -(Math.abs(height) - startY)];
        const xAxisMatrixResult = new Matrix_1.Matrix(2, 4, [0, xStart[1], 0, 1, 0, xEnd[1], 0, 1]).multiply(transformMatrix4).data;
        const yAxisMatrixResult = new Matrix_1.Matrix(2, 4, [yStart[0], 0, 0, 1, yEnd[0], 0, 0, 1]).multiply(transformMatrix4).data;
        xAxisMatrixResult[0] = xStart[0];
        xAxisMatrixResult[4] = xEnd[0];
        yAxisMatrixResult[1] = yStart[1];
        yAxisMatrixResult[5] = yEnd[1];
        return {
            xAxis: xAxisMatrixResult,
            yAxis: yAxisMatrixResult,
        };
    }
    renderAxis(ctx, axisPosition, gridSetting) {
        const { xAxis, yAxis } = axisPosition;
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
    }
    renderGrid(ctx, viewBoundingRect, camera, axisPosition, gridSetting) {
        const { xAxis, yAxis } = axisPosition;
        const { startX, startY, width, height } = viewBoundingRect;
        const endX = startX + width;
        const endY = startY + height;
        const pointArr = [];
        const zoomCanvas = camera.getZoomRatio();
        const transformMatrix4 = camera.getSourceMatrix();
        const DPI = Constant_1.environment.DPI;
        /**
         * 单位网点间距所占据的真实像素长度
         */
        const xPxDist = (DPI[0] / 25.4) * gridSetting.stepX;
        const yPxDist = (DPI[1] / 25.4) * gridSetting.stepY;
        const rightDist = (endX - yAxis[0]) / zoomCanvas;
        const leftDist = (yAxis[0] - startX) / zoomCanvas;
        const topDist = -(xAxis[1] - startY) / zoomCanvas;
        const bottomDist = -(endY - xAxis[1]) / zoomCanvas;
        const stepSize = this.getSamplingStepSize(zoomCanvas);
        // console.log(
        // 	`leftDist=${leftDist}`,
        // 	`rightDist=${rightDist}`,
        // 	`topDist=${topDist}`,
        // 	`bottomDist=${bottomDist}`,
        // 	`startX=${startX}`,
        // 	`startY=${startY}`
        // )
        for (let i = 0; i < rightDist + xPxDist; i += xPxDist * stepSize) {
            const as = [i, 0, 0, 1, i, topDist, 0, 1];
            const an = new Matrix_1.Matrix(2, 4, as).multiply(transformMatrix4).data;
            if (an[0] >= startX && an[0] <= endX) {
                pointArr.push(an);
            }
            const bs = [i, 0, 0, 1, i, -bottomDist, 0, 1];
            const bn = new Matrix_1.Matrix(2, 4, bs).multiply(transformMatrix4).data;
            if (bn[0] >= startX && bn[0] <= endX) {
                pointArr.push(bn);
            }
        }
        for (let i = 0; i < leftDist; i += xPxDist * stepSize) {
            const as = [-i, 0, 0, 1, -i, topDist, 0, 1];
            const an = new Matrix_1.Matrix(2, 4, as).multiply(transformMatrix4).data;
            if (an[0] >= startX && an[0] <= endX) {
                pointArr.push(an);
            }
            const bs = [-i, 0, 0, 1, -i, -bottomDist, 0, 1];
            const bn = new Matrix_1.Matrix(2, 4, bs).multiply(transformMatrix4).data;
            if (bn[0] >= startX && bn[0] <= endX) {
                pointArr.push(bn);
            }
        }
        /* ... */
        ctx.setLineDash([1, yPxDist * zoomCanvas * stepSize]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = gridSetting.gridColor.toRGBAString();
        for (let i = 0; i < pointArr.length; i++) {
            ctx.beginPath();
            ctx.moveTo(pointArr[i][0], pointArr[i][1]);
            ctx.lineTo(pointArr[i][4], pointArr[i][5]);
            ctx.stroke();
        }
    }
    getSamplingStepSize(zoomCanvas) {
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
    }
}
exports.GridCanvas = GridCanvas;


/***/ }),

/***/ "./src/engine/canvas/core/RendererCanvas.ts":
/*!**************************************************!*\
  !*** ./src/engine/canvas/core/RendererCanvas.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RendererCanvas = void 0;
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const Renderer_1 = __webpack_require__(/*! ../../common/Renderer */ "./src/engine/common/Renderer.ts");
class RendererCanvas extends Renderer_1.Renderer {
    constructor(canvasElement) {
        super(canvasElement);
        this.ctx = canvasElement.getContext('2d');
        this.autoResize();
    }
    clearCanvas() {
        const { startX, startY, width, height } = Constant_1.environment.getCanvasBoundingRect();
        this.ctx.clearRect(startX, startY, width, height);
        this.ctx.strokeStyle = null;
    }
    autoResize(ratio = window.devicePixelRatio) {
        const _ratio = ratio > 1 ? ratio : 1;
        const canvasWidth = this.canvasElement.clientWidth * _ratio;
        const canvasHeight = this.canvasElement.clientHeight * _ratio;
        if (canvasWidth !== 0 && canvasHeight !== 0) {
            this.canvasElement.width = canvasWidth;
            this.canvasElement.height = canvasHeight;
            return;
        }
        this.canvasElement.width = 0;
        this.canvasElement.height = 0;
    }
}
exports.RendererCanvas = RendererCanvas;


/***/ }),

/***/ "./src/engine/canvas/plane/PlaneCanvas.ts":
/*!************************************************!*\
  !*** ./src/engine/canvas/plane/PlaneCanvas.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlaneCanvas = void 0;
const Plane_1 = __webpack_require__(/*! ../../common/Plane */ "./src/engine/common/Plane.ts");
const Line_1 = __webpack_require__(/*! ../primitives/Line */ "./src/engine/canvas/primitives/Line.ts");
const Utils_1 = __webpack_require__(/*! ../../../utils/Utils */ "./src/utils/Utils.ts");
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const AssistLine_1 = __webpack_require__(/*! ../primitives/AssistLine */ "./src/engine/canvas/primitives/AssistLine.ts");
const Circle_1 = __webpack_require__(/*! ../primitives/Circle */ "./src/engine/canvas/primitives/Circle.ts");
const AssistCircle_1 = __webpack_require__(/*! ../primitives/AssistCircle */ "./src/engine/canvas/primitives/AssistCircle.ts");
class PlaneCanvas extends Plane_1.Plane {
    constructor(scene, planeId) {
        super(scene, planeId);
        this._linesProfile = new Map();
        this._circlesProfile = new Map();
        this._assistLinesProfile = new Map();
        this._assistCirclesProfile = new Map();
    }
    get linesProfile() {
        return this._linesProfile;
    }
    get circlesProfile() {
        return this._circlesProfile;
    }
    get assistLinesProfile() {
        return this._assistLinesProfile;
    }
    get assistCirclesProfile() {
        return this._assistCirclesProfile;
    }
    addLineItems(targetSet) {
        const DPI = Constant_1.environment.DPI;
        for (let [key, value] of targetSet) {
            const strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
            this.linesProfile.set(key, new Line_1.Line((0, Utils_1.mm2px)(value.startPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.startPoint.y, DPI[1]), (0, Utils_1.mm2px)(value.endPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.endPoint.y, DPI[1]), (0, Utils_1.mm2px)(value.strokeWidth, DPI[0]), strokeColor, value.lineCap));
        }
    }
    updateLineItems(targetSet) {
        const DPI = Constant_1.environment.DPI;
        for (let [key, value] of targetSet) {
            if (!this.linesProfile.has(key)) {
                continue;
            }
            const primitiveItem = this.linesProfile.get(key);
            primitiveItem.startX = (0, Utils_1.mm2px)(value.startPoint.x, DPI[0]);
            primitiveItem.startY = (0, Utils_1.mm2px)(value.startPoint.y, DPI[1]);
            primitiveItem.endX = (0, Utils_1.mm2px)(value.endPoint.x, DPI[0]);
            primitiveItem.endY = (0, Utils_1.mm2px)(value.endPoint.y, DPI[1]);
            primitiveItem.strokeWidth = (0, Utils_1.mm2px)(value.strokeWidth, DPI[0]);
            primitiveItem.strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
            primitiveItem.lineCap = value.lineCap;
        }
    }
    deleteLineItems(targetIds) {
        const arrTargetIds = Array.from(targetIds);
        for (let i = 0; i < arrTargetIds.length; i++) {
            if (!this.linesProfile.has(arrTargetIds[i])) {
                continue;
            }
            this.linesProfile.delete(arrTargetIds[i]);
        }
    }
    addCircleItems(targetSet) {
        const DPI = Constant_1.environment.DPI;
        for (let [key, value] of targetSet) {
            const strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
            const fillColor = `rgba(${value.fillColor.red * 255}, ${value.fillColor.green * 255}, ${value.fillColor.blue * 255}, ${value.fillColor.alpha})`;
            this.circlesProfile.set(key, new Circle_1.Circle((0, Utils_1.mm2px)(value.centerPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.centerPoint.y, DPI[1]), (0, Utils_1.mm2px)(value.radius, DPI[0]), (0, Utils_1.mm2px)(value.strokeWidth, DPI[1]), strokeColor, fillColor, value.lineCap));
        }
    }
    updateCircleItems(targetSet) {
        const DPI = Constant_1.environment.DPI;
        for (let [key, value] of targetSet) {
            if (!this.circlesProfile.has(key)) {
                continue;
            }
            const primitiveItem = this.circlesProfile.get(key);
            primitiveItem.centerX = (0, Utils_1.mm2px)(value.centerPoint.x, DPI[0]);
            primitiveItem.centerY = (0, Utils_1.mm2px)(value.centerPoint.y, DPI[1]);
            primitiveItem.radius = (0, Utils_1.mm2px)(value.radius, DPI[0]);
            primitiveItem.strokeWidth = (0, Utils_1.mm2px)(value.strokeWidth, DPI[1]);
            primitiveItem.strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
            primitiveItem.fillColor = `rgba(${value.fillColor.red * 255}, ${value.fillColor.green * 255}, ${value.fillColor.blue * 255}, ${value.fillColor.alpha})`;
            primitiveItem.lineCap = value.lineCap;
        }
    }
    deleteCircleItems(targetIds) {
        const arrTargetIds = Array.from(targetIds);
        for (let i = 0; i < arrTargetIds.length; i++) {
            if (!this.circlesProfile.has(arrTargetIds[i])) {
                continue;
            }
            this.circlesProfile.delete(arrTargetIds[i]);
        }
    }
    addAssistLineItems(targetPrimitives) {
        const DPI = Constant_1.environment.DPI;
        for (let [key, value] of targetPrimitives) {
            const strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
            this.assistLinesProfile.set(key, new AssistLine_1.AssistLine((0, Utils_1.mm2px)(value.startPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.startPoint.y, DPI[1]), (0, Utils_1.mm2px)(value.endPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.endPoint.y, DPI[1]), strokeColor, value.isSolid, value.fixedPixelWidth));
        }
    }
    updateAssistLineItems(targetPrimitives) {
        const DPI = Constant_1.environment.DPI;
        for (let [key, value] of targetPrimitives) {
            if (!this.assistLinesProfile.has(key)) {
                continue;
            }
            const primitiveItem = this.assistLinesProfile.get(key);
            primitiveItem.startX = (0, Utils_1.mm2px)(value.startPoint.x, DPI[0]);
            primitiveItem.startY = (0, Utils_1.mm2px)(value.startPoint.y, DPI[0]);
            primitiveItem.endX = (0, Utils_1.mm2px)(value.endPoint.x, DPI[0]);
            primitiveItem.endY = (0, Utils_1.mm2px)(value.endPoint.y, DPI[0]);
            primitiveItem.fixedPixelWidth = value.fixedPixelWidth;
            primitiveItem.strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
        }
    }
    deleteAssistLineItems(targetIds) {
        const arrTargetIds = Array.from(targetIds);
        for (let i = 0; i < arrTargetIds.length; i++) {
            if (!this.assistLinesProfile.has(arrTargetIds[i])) {
                continue;
            }
            this.assistLinesProfile.delete(arrTargetIds[i]);
        }
    }
    addAssistCircleItems(targetPrimitives) {
        const DPI = Constant_1.environment.DPI;
        for (let [key, value] of targetPrimitives) {
            const strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
            const fillColor = `rgba(${value.fillColor.red * 255}, ${value.fillColor.green * 255}, ${value.fillColor.blue * 255}, ${value.fillColor.alpha})`;
            this.assistCirclesProfile.set(key, new AssistCircle_1.AssistCircle((0, Utils_1.mm2px)(value.centerPoint.x, DPI[0]), (0, Utils_1.mm2px)(value.centerPoint.y, DPI[1]), strokeColor, (0, Utils_1.mm2px)(value.strokeWidth, DPI[1]), fillColor, undefined, (0, Utils_1.mm2px)(value.radius, DPI[1])));
        }
    }
    updateAssistCircleItems(targetPrimitives) {
        const DPI = Constant_1.environment.DPI;
        for (let [key, value] of targetPrimitives) {
            if (!this.assistCirclesProfile.has(key)) {
                continue;
            }
            const primitiveItem = this.assistCirclesProfile.get(key);
            const strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
            const fillColor = `rgba(${value.fillColor.red * 255}, ${value.fillColor.green * 255}, ${value.fillColor.blue * 255}, ${value.fillColor.alpha})`;
            primitiveItem.centerX = (0, Utils_1.mm2px)(value.centerPoint.x, DPI[0]);
            primitiveItem.centerY = (0, Utils_1.mm2px)(value.centerPoint.y, DPI[0]);
            primitiveItem.strokeColor = strokeColor;
            primitiveItem.strokeWidth = (0, Utils_1.mm2px)(value.strokeWidth, DPI[0]);
            primitiveItem.fillColor = fillColor;
            primitiveItem.strokeColor = `rgba(${value.strokeColor.red * 255}, ${value.strokeColor.green * 255}, ${value.strokeColor.blue * 255}, ${value.strokeColor.alpha})`;
            primitiveItem.radius = (0, Utils_1.mm2px)(value.radius, DPI[0]);
        }
    }
    deleteAssistCircleItems(targetIds) {
        const arrTargetIds = Array.from(targetIds);
        for (let i = 0; i < arrTargetIds.length; i++) {
            if (!this.assistCirclesProfile.has(arrTargetIds[i])) {
                continue;
            }
            this.assistCirclesProfile.delete(arrTargetIds[i]);
        }
    }
    render(ctx) {
        const targetProfile = [...this.linesProfile.values(), ...this.circlesProfile.values()];
        const assistProfile = [...this.assistLinesProfile.values(), ...this.assistCirclesProfile.values()];
        for (let i = 0; i < targetProfile.length; i++) {
            const targetProfileItem = targetProfile[i];
            targetProfileItem.render(ctx, this.scene);
        }
        for (let i = 0; i < assistProfile.length; i++) {
            const assistProfileItem = assistProfile[i];
            assistProfileItem.render(ctx, this.scene);
        }
    }
}
exports.PlaneCanvas = PlaneCanvas;


/***/ }),

/***/ "./src/engine/canvas/primitives/AssistCircle.ts":
/*!******************************************************!*\
  !*** ./src/engine/canvas/primitives/AssistCircle.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssistCircle = void 0;
const Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
const Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
class AssistCircle {
    constructor(centerX, centerY, strokeColor = `rgba(0, 0, 0, 1)`, strokeWidth = 1, fillColor = `rgba(0, 0, 0, 0)`, lineCap = 'round', radius = 1) {
        this._centerX = centerX;
        this._centerY = centerY;
        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._fillColor = fillColor;
        this._lineCap = lineCap;
        this._radius = radius;
    }
    get centerX() {
        return this._centerX;
    }
    set centerX(value) {
        this._centerX = value;
    }
    get centerY() {
        return this._centerY;
    }
    set centerY(value) {
        this._centerY = value;
    }
    get strokeWidth() {
        return this._strokeWidth;
    }
    set strokeWidth(value) {
        this._strokeWidth = value;
    }
    get strokeColor() {
        return this._strokeColor;
    }
    set strokeColor(value) {
        this._strokeColor = value;
    }
    get fillColor() {
        return this._fillColor;
    }
    set fillColor(value) {
        this._fillColor = value;
    }
    get lineCap() {
        return this._lineCap;
    }
    set lineCap(value) {
        this._lineCap = value;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    render(ctx, scene) {
        const camera = Camera_1.Camera.getInstance();
        const pointMatrix = new Matrix_1.Matrix(1, 4, [this.centerX, this.centerY, 0, 1]);
        const transformMatrix4 = camera.getSourceMatrix();
        const matrixResult = pointMatrix.multiply(transformMatrix4).data;
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
    }
}
exports.AssistCircle = AssistCircle;


/***/ }),

/***/ "./src/engine/canvas/primitives/AssistLine.ts":
/*!****************************************************!*\
  !*** ./src/engine/canvas/primitives/AssistLine.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssistLine = void 0;
const Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
const Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
class AssistLine {
    constructor(startX, startY, endX, endY, strokeColor = `rgba(0, 0, 0, 1)`, isSolid, fixedPixelWidth = 1) {
        this._startX = startX;
        this._startY = startY;
        this._endX = endX;
        this._endY = endY;
        this._isSolid = isSolid;
        this._fixedPixelWidth = fixedPixelWidth;
        this._strokeColor = strokeColor;
    }
    get startX() {
        return this._startX;
    }
    set startX(value) {
        this._startX = value;
    }
    get startY() {
        return this._startY;
    }
    set startY(value) {
        this._startY = value;
    }
    get endX() {
        return this._endX;
    }
    set endX(value) {
        this._endX = value;
    }
    get endY() {
        return this._endY;
    }
    set endY(value) {
        this._endY = value;
    }
    get fixedPixelWidth() {
        return this._fixedPixelWidth;
    }
    set fixedPixelWidth(value) {
        this._fixedPixelWidth = value;
    }
    get strokeColor() {
        return this._strokeColor;
    }
    set strokeColor(value) {
        this._strokeColor = value;
    }
    get isSolid() {
        return this._isSolid;
    }
    set isSolid(value) {
        this._isSolid = value;
    }
    render(ctx, scene) {
        const camera = Camera_1.Camera.getInstance();
        const pointMatrix = new Matrix_1.Matrix(2, 4, [this.startX, this.startY, 0, 1, this.endX, this.endY, 0, 1]);
        const transformMatrix4 = camera.getSourceMatrix();
        const matrixResult = pointMatrix.multiply(transformMatrix4).data;
        ctx.setLineDash(this.isSolid ? [] : [5, 5]);
        ctx.beginPath();
        ctx.lineCap = `round`;
        ctx.lineWidth = this.fixedPixelWidth;
        ctx.strokeStyle = this.strokeColor;
        ctx.moveTo(matrixResult[0] - 0.5, matrixResult[1] - 0.5);
        ctx.lineTo(matrixResult[4] - 0.5, matrixResult[5] - 0.5);
        ctx.stroke();
        ctx.closePath();
    }
}
exports.AssistLine = AssistLine;


/***/ }),

/***/ "./src/engine/canvas/primitives/Circle.ts":
/*!************************************************!*\
  !*** ./src/engine/canvas/primitives/Circle.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Circle = void 0;
const Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
const Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
class Circle {
    constructor(centerX, centerY, radius, strokeWidth, strokeColor = `rgba(0, 0, 0, 1)`, fillColor = `rgba(0, 0, 0, 0)`, lineCap = 'round') {
        this._centerX = centerX;
        this._centerY = centerY;
        this._radius = radius;
        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._fillColor = fillColor;
        this._lineCap = lineCap;
    }
    get centerX() {
        return this._centerX;
    }
    set centerX(value) {
        this._centerX = value;
    }
    get centerY() {
        return this._centerY;
    }
    set centerY(value) {
        this._centerY = value;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get strokeWidth() {
        return this._strokeWidth;
    }
    set strokeWidth(value) {
        this._strokeWidth = value;
    }
    get strokeColor() {
        return this._strokeColor;
    }
    set strokeColor(value) {
        this._strokeColor = value;
    }
    get fillColor() {
        return this._fillColor;
    }
    set fillColor(value) {
        this._fillColor = value;
    }
    get lineCap() {
        return this._lineCap;
    }
    set lineCap(value) {
        this._lineCap = value;
    }
    render(ctx, scene) {
        const camera = Camera_1.Camera.getInstance();
        const pointMatrix = new Matrix_1.Matrix(1, 4, [this.centerX, this.centerY, this.radius, 1]);
        const transformMatrix4 = camera.getSourceMatrix();
        const matrixResult = pointMatrix.multiply(transformMatrix4).data;
        const zoomCanvas = camera.getZoomRatio();
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
    }
}
exports.Circle = Circle;


/***/ }),

/***/ "./src/engine/canvas/primitives/Line.ts":
/*!**********************************************!*\
  !*** ./src/engine/canvas/primitives/Line.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Line = void 0;
const Matrix_1 = __webpack_require__(/*! ../../../geometry/Matrix */ "./src/geometry/Matrix.ts");
const Camera_1 = __webpack_require__(/*! ../../common/Camera */ "./src/engine/common/Camera.ts");
class Line {
    constructor(startX, startY, endX, endY, strokeWidth, strokeColor = `rgba(0, 0, 0, 1)`, lineCap = 'round') {
        this._startX = startX;
        this._startY = startY;
        this._endX = endX;
        this._endY = endY;
        this._strokeWidth = strokeWidth;
        this._strokeColor = strokeColor;
        this._lineCap = lineCap;
    }
    get startX() {
        return this._startX;
    }
    set startX(value) {
        this._startX = value;
    }
    get startY() {
        return this._startY;
    }
    set startY(value) {
        this._startY = value;
    }
    get endX() {
        return this._endX;
    }
    set endX(value) {
        this._endX = value;
    }
    get endY() {
        return this._endY;
    }
    set endY(value) {
        this._endY = value;
    }
    get strokeWidth() {
        return this._strokeWidth;
    }
    set strokeWidth(value) {
        this._strokeWidth = value;
    }
    get strokeColor() {
        return this._strokeColor;
    }
    set strokeColor(value) {
        this._strokeColor = value;
    }
    get lineCap() {
        return this._lineCap;
    }
    set lineCap(value) {
        this._lineCap = value;
    }
    render(ctx, scene) {
        const camera = Camera_1.Camera.getInstance();
        const pointMatrix = new Matrix_1.Matrix(2, 4, [this.startX, this.startY, 0, 1, this.endX, this.endY, 0, 1]);
        const transformMatrix4 = camera.getSourceMatrix();
        const matrixResult = pointMatrix.multiply(transformMatrix4).data;
        const zoomCanvas = camera.getZoomRatio();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.lineCap = this.lineCap;
        ctx.lineWidth = this.strokeWidth * zoomCanvas;
        ctx.strokeStyle = this.strokeColor;
        ctx.moveTo(matrixResult[0] - 0.5, matrixResult[1] - 0.5);
        ctx.lineTo(matrixResult[4] - 0.5, matrixResult[5] - 0.5);
        ctx.stroke();
        ctx.closePath();
    }
}
exports.Line = Line;


/***/ }),

/***/ "./src/engine/common/Camera.ts":
/*!*************************************!*\
  !*** ./src/engine/common/Camera.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Camera = void 0;
const Matrix4_1 = __webpack_require__(/*! ../../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
const Vector3_1 = __webpack_require__(/*! ../../geometry/Vector3 */ "./src/geometry/Vector3.ts");
class Camera {
    static getInstance() {
        if (Camera.thisInstance === undefined) {
            Camera.thisInstance = new Camera(1920, 1080);
        }
        return Camera.thisInstance;
    }
    constructor(width = 1920, height = 1080) {
        this._width = width;
        this._height = height;
        this._isNeedUpdate = false;
        this._matrix4 = Matrix4_1.Matrix4.ORIGIN;
        this._renderMatrix4 = Matrix4_1.Matrix4.ORIGIN;
        this._projection = Matrix4_1.Matrix4.ORIGIN;
        this._pxRatio = 0;
        this._origin = Vector3_1.Vector3.ORIGIN;
    }
    set width(value) {
        this._width = value;
    }
    get width() {
        return this._width;
    }
    set height(value) {
        this._height = value;
    }
    get height() {
        return this._height;
    }
    set isNeedUpdate(value) {
        this._isNeedUpdate = value;
    }
    get isNeedUpdate() {
        return this._isNeedUpdate;
    }
    set matrix4(value) {
        this._matrix4 = value;
    }
    get matrix4() {
        return this._matrix4;
    }
    set renderMatrix4(value) {
        this._renderMatrix4 = value;
    }
    get renderMatrix4() {
        return this._renderMatrix4;
    }
    set projection(value) {
        this._projection = value;
    }
    get projection() {
        return this._projection;
    }
    set pxRatio(value) {
        this._pxRatio = value;
    }
    get pxRatio() {
        return this._pxRatio;
    }
    set origin(value) {
        this._origin = value;
    }
    get origin() {
        return this._origin;
    }
    refreshByVector3(vector3) {
        this.matrix4 = this.matrix4.translateByVector3(vector3);
        this._isNeedUpdate = true;
    }
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
    getSourceMatrix() {
        this.updateViewMatrix();
        return this.matrix4;
    }
    getZoomRatio() {
        return Math.sqrt(this.matrix4.data[0] * this.matrix4.data[0] + this.matrix4.data[1] * this.matrix4.data[1]);
    }
    getOrigin() {
        return new Vector3_1.Vector3(this.matrix4.data[12], this.matrix4.data[13], 0);
    }
    // public getViewRenderMatrixData(): Array<ReadonlyArray<number>> {
    // 	this.updateViewMatrix()
    // 	const datas: Array<ReadonlyArray<number>> = []
    // 	datas.push(this.renderMatrix4.data)
    // 	return datas
    // }
    updateViewMatrix() {
        if (this.isNeedUpdate) {
            const near = -1;
            const far = 1000;
            const dist = near - far;
            this.projection = new Matrix4_1.Matrix4([5 / this.width, 0, 0, 0, 0, 5 / this.height, 0, 0, 0, 0, 5 / dist, 0, 0, 0, 0, 1]);
            this.renderMatrix4 = this.matrix4.multiply4(this.projection);
            const origin = Vector3_1.Vector3.ORIGIN.multiplyMatrix4(this.renderMatrix4);
            if (this.width > this.height) {
                const vert = new Vector3_1.Vector3(0, 1, 0).multiplyMatrix4(this.renderMatrix4);
                this.pxRatio = 2 / this.height / origin.sub(vert).length;
            }
            else {
                const hori = new Vector3_1.Vector3(1, 0, 0).multiplyMatrix4(this.renderMatrix4);
                this.pxRatio = 2 / this.width / origin.sub(hori).length;
            }
            this.isNeedUpdate = false;
        }
    }
}
exports.Camera = Camera;


/***/ }),

/***/ "./src/engine/common/Grid.ts":
/*!***********************************!*\
  !*** ./src/engine/common/Grid.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gird = void 0;
class Gird {
    constructor() { }
}
exports.Gird = Gird;


/***/ }),

/***/ "./src/engine/common/GridSetting.ts":
/*!******************************************!*\
  !*** ./src/engine/common/GridSetting.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GridSetting = void 0;
const SystemConfig_1 = __webpack_require__(/*! ../../controller/SystemConfig */ "./src/controller/SystemConfig.ts");
const Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
class GridSetting {
    static getInstance() {
        if (GridSetting.thisInstance === undefined) {
            GridSetting.thisInstance = new GridSetting();
        }
        return GridSetting.thisInstance;
    }
    constructor() {
        this._gridColor = SystemConfig_1.SystemConfig.getInstance().isDarkTheme ? Color_1.Color.WHITE : Color_1.Color.BLACK;
        this._gridTransparency = 0.5;
        this._axisColor = SystemConfig_1.SystemConfig.getInstance().isDarkTheme ? Color_1.Color.WHITE : Color_1.Color.BLACK;
        this._axisTransparency = 0.5;
        this._stepX = 0.5;
        this._stepY = 0.5;
    }
    set gridColor(value) {
        this._gridColor = value;
    }
    get gridColor() {
        return this._gridColor;
    }
    set gridTransparency(value) {
        this._gridTransparency = value;
    }
    get gridTransparency() {
        return this._gridTransparency;
    }
    set axisColor(value) {
        this._axisColor = value;
    }
    get axisColor() {
        return this._axisColor;
    }
    set axisTransparency(value) {
        this._axisTransparency = value;
    }
    get axisTransparency() {
        return this._axisTransparency;
    }
    set stepX(value) {
        this._stepX = value;
    }
    get stepX() {
        return this._stepX;
    }
    set stepY(value) {
        this._stepY = value;
    }
    get stepY() {
        return this._stepY;
    }
}
exports.GridSetting = GridSetting;


/***/ }),

/***/ "./src/engine/common/Plane.ts":
/*!************************************!*\
  !*** ./src/engine/common/Plane.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plane = void 0;
class Plane {
    constructor(sceneInstance, planeId) {
        this._scene = sceneInstance;
        this._planeId = planeId;
    }
    get scene() {
        return this._scene;
    }
    get planeId() {
        return this._planeId;
    }
}
exports.Plane = Plane;


/***/ }),

/***/ "./src/engine/common/Renderer.ts":
/*!***************************************!*\
  !*** ./src/engine/common/Renderer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Renderer = void 0;
const Vector3_1 = __webpack_require__(/*! ../../geometry/Vector3 */ "./src/geometry/Vector3.ts");
class Renderer {
    constructor(canvasElement) {
        this._canvasElement = canvasElement;
        this._origin = new Vector3_1.Vector3(0, 0, 0);
        this._config = {};
    }
    get canvasElement() {
        return this._canvasElement;
    }
    get ctx() {
        return this._ctx;
    }
    set ctx(value) {
        this._ctx = value;
    }
    get origin() {
        return this._origin;
    }
    set origin(value) {
        this._origin = value;
    }
    get width() {
        return this.canvasElement.width;
    }
    get height() {
        return this.canvasElement.height;
    }
}
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/engine/common/Scene.ts":
/*!************************************!*\
  !*** ./src/engine/common/Scene.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
const Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
class Scene {
    constructor() {
        /* ... */
        this._canvasBgColor = new Color_1.Color(0, 0, 0, 1);
    }
    get renderer() {
        return this._renderer;
    }
    set renderer(value) {
        this._renderer = value;
    }
    get canvasBgColor() {
        return this._canvasBgColor;
    }
    set canvasBgColor(value) {
        this._canvasBgColor = value;
    }
}
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createScene = void 0;
const CfgProfile_1 = __webpack_require__(/*! ../../config/CfgProfile */ "./src/config/CfgProfile.ts");
const SceneCanvas_1 = __webpack_require__(/*! ../canvas/SceneCanvas */ "./src/engine/canvas/SceneCanvas.ts");
const Camera_1 = __webpack_require__(/*! ./Camera */ "./src/engine/common/Camera.ts");
const GridSetting_1 = __webpack_require__(/*! ./GridSetting */ "./src/engine/common/GridSetting.ts");
function createScene(engineType, canvasElement) {
    return __awaiter(this, void 0, void 0, function* () {
        Camera_1.Camera.getInstance();
        GridSetting_1.GridSetting.getInstance();
        if (engineType === CfgProfile_1.ECoreEngineType.WEBCPU) {
            return new SceneCanvas_1.SceneCanvas(canvasElement);
        }
        return null;
    });
}
exports.createScene = createScene;


/***/ }),

/***/ "./src/file/FormatConfig.ts":
/*!**********************************!*\
  !*** ./src/file/FormatConfig.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormatConfig = void 0;
const CodeEnum_1 = __webpack_require__(/*! ./config/CodeEnum */ "./src/file/config/CodeEnum.ts");
class FormatConfig {
    static createProfile() {
        return {
            DOCUMENT: FormatConfig.createDocumentCodeProfile(),
            CANVAS: FormatConfig.createCanvasCodeProfile(),
            DRAWLAYER: FormatConfig.createDrawLayerCodeProfile(),
            LINE: FormatConfig.createLineCodeProfile(),
            CIRCLE: FormatConfig.createCircleCodeProfile(),
        };
    }
    static createDocumentCodeProfile() {
        return [CodeEnum_1.EDocumentCodeIndex.TAG_NAME, CodeEnum_1.EDocumentCodeIndex.VERSION];
    }
    static createCanvasCodeProfile() {
        return [CodeEnum_1.ECanvasCodeIndex.TAG_NAME, CodeEnum_1.ECanvasCodeIndex.VERSION];
    }
    static createDrawLayerCodeProfile() {
        return [CodeEnum_1.EDrawLayerCodeIndex.TAG_NAME, CodeEnum_1.EDrawLayerCodeIndex.ID, CodeEnum_1.EDrawLayerCodeIndex.NAME, CodeEnum_1.EDrawLayerCodeIndex.OPACITY];
    }
    static createLineCodeProfile() {
        return [
            CodeEnum_1.ELineCodeIndex.TAG_NAME,
            CodeEnum_1.ELineCodeIndex.ID,
            CodeEnum_1.ELineCodeIndex.NAME,
            CodeEnum_1.ELineCodeIndex.DRAWLAYER_ID,
            CodeEnum_1.ELineCodeIndex.SX,
            CodeEnum_1.ELineCodeIndex.SY,
            CodeEnum_1.ELineCodeIndex.EX,
            CodeEnum_1.ELineCodeIndex.EY,
            CodeEnum_1.ELineCodeIndex.STROKE_COLOR_R,
            CodeEnum_1.ELineCodeIndex.STROKE_COLOR_G,
            CodeEnum_1.ELineCodeIndex.STROKE_COLOR_B,
            CodeEnum_1.ELineCodeIndex.STROKE_COLOR_A,
            CodeEnum_1.ELineCodeIndex.STROKE_WIDTH,
            CodeEnum_1.ELineCodeIndex.LINE_CAP,
            CodeEnum_1.ELineCodeIndex.SOLID,
        ];
    }
    static createCircleCodeProfile() {
        return [
            CodeEnum_1.ECircleCodeIndex.TAG_NAME,
            CodeEnum_1.ECircleCodeIndex.ID,
            CodeEnum_1.ECircleCodeIndex.NAME,
            CodeEnum_1.ECircleCodeIndex.DRAWLAYER_ID,
            CodeEnum_1.ECircleCodeIndex.CENTER_X,
            CodeEnum_1.ECircleCodeIndex.CENTER_Y,
            CodeEnum_1.ECircleCodeIndex.R,
            CodeEnum_1.ECircleCodeIndex.CCW,
            CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_R,
            CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_G,
            CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_B,
            CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_A,
            CodeEnum_1.ECircleCodeIndex.STROKE_WIDTH,
            CodeEnum_1.ECircleCodeIndex.FILL_COLOR_R,
            CodeEnum_1.ECircleCodeIndex.FILL_COLOR_G,
            CodeEnum_1.ECircleCodeIndex.FILL_COLOR_B,
            CodeEnum_1.ECircleCodeIndex.FILL_COLOR_A,
            CodeEnum_1.ECircleCodeIndex.LINE_CAP,
            CodeEnum_1.ECircleCodeIndex.SOLID,
        ];
    }
}
exports.FormatConfig = FormatConfig;


/***/ }),

/***/ "./src/file/Utils/mapLineCap.ts":
/*!**************************************!*\
  !*** ./src/file/Utils/mapLineCap.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapNumber2LineCap = exports.mapLineCap2Number = void 0;
function mapLineCap2Number(v) {
    return ({
        butt: 0,
        round: 1,
        square: 2,
    }[v] || -1);
}
exports.mapLineCap2Number = mapLineCap2Number;
function mapNumber2LineCap(n) {
    return ({
        0: 'butt',
        1: 'round',
        2: 'square',
    }[n] || 'round');
}
exports.mapNumber2LineCap = mapNumber2LineCap;


/***/ }),

/***/ "./src/file/config/CodeEnum.ts":
/*!*************************************!*\
  !*** ./src/file/config/CodeEnum.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECircleCodeIndex = exports.ELineCodeIndex = exports.EDrawLayerCodeIndex = exports.ECanvasCodeIndex = exports.EDocumentCodeIndex = void 0;
var EDocumentCodeIndex;
(function (EDocumentCodeIndex) {
    EDocumentCodeIndex[EDocumentCodeIndex["TAG_NAME"] = 0] = "TAG_NAME";
    EDocumentCodeIndex[EDocumentCodeIndex["VERSION"] = 1] = "VERSION";
})(EDocumentCodeIndex = exports.EDocumentCodeIndex || (exports.EDocumentCodeIndex = {}));
var ECanvasCodeIndex;
(function (ECanvasCodeIndex) {
    ECanvasCodeIndex[ECanvasCodeIndex["TAG_NAME"] = 0] = "TAG_NAME";
    ECanvasCodeIndex[ECanvasCodeIndex["VERSION"] = 1] = "VERSION";
})(ECanvasCodeIndex = exports.ECanvasCodeIndex || (exports.ECanvasCodeIndex = {}));
var EDrawLayerCodeIndex;
(function (EDrawLayerCodeIndex) {
    EDrawLayerCodeIndex[EDrawLayerCodeIndex["TAG_NAME"] = 0] = "TAG_NAME";
    EDrawLayerCodeIndex[EDrawLayerCodeIndex["ID"] = 1] = "ID";
    EDrawLayerCodeIndex[EDrawLayerCodeIndex["NAME"] = 2] = "NAME";
    EDrawLayerCodeIndex[EDrawLayerCodeIndex["OPACITY"] = 3] = "OPACITY";
})(EDrawLayerCodeIndex = exports.EDrawLayerCodeIndex || (exports.EDrawLayerCodeIndex = {}));
var ELineCodeIndex;
(function (ELineCodeIndex) {
    ELineCodeIndex[ELineCodeIndex["TAG_NAME"] = 0] = "TAG_NAME";
    ELineCodeIndex[ELineCodeIndex["ID"] = 1] = "ID";
    ELineCodeIndex[ELineCodeIndex["NAME"] = 2] = "NAME";
    ELineCodeIndex[ELineCodeIndex["DRAWLAYER_ID"] = 3] = "DRAWLAYER_ID";
    ELineCodeIndex[ELineCodeIndex["SX"] = 4] = "SX";
    ELineCodeIndex[ELineCodeIndex["SY"] = 5] = "SY";
    ELineCodeIndex[ELineCodeIndex["EX"] = 6] = "EX";
    ELineCodeIndex[ELineCodeIndex["EY"] = 7] = "EY";
    ELineCodeIndex[ELineCodeIndex["STROKE_COLOR_R"] = 8] = "STROKE_COLOR_R";
    ELineCodeIndex[ELineCodeIndex["STROKE_COLOR_G"] = 9] = "STROKE_COLOR_G";
    ELineCodeIndex[ELineCodeIndex["STROKE_COLOR_B"] = 10] = "STROKE_COLOR_B";
    ELineCodeIndex[ELineCodeIndex["STROKE_COLOR_A"] = 11] = "STROKE_COLOR_A";
    ELineCodeIndex[ELineCodeIndex["STROKE_WIDTH"] = 12] = "STROKE_WIDTH";
    ELineCodeIndex[ELineCodeIndex["LINE_CAP"] = 13] = "LINE_CAP";
    ELineCodeIndex[ELineCodeIndex["SOLID"] = 14] = "SOLID";
})(ELineCodeIndex = exports.ELineCodeIndex || (exports.ELineCodeIndex = {}));
var ECircleCodeIndex;
(function (ECircleCodeIndex) {
    ECircleCodeIndex[ECircleCodeIndex["TAG_NAME"] = 0] = "TAG_NAME";
    ECircleCodeIndex[ECircleCodeIndex["ID"] = 1] = "ID";
    ECircleCodeIndex[ECircleCodeIndex["NAME"] = 2] = "NAME";
    ECircleCodeIndex[ECircleCodeIndex["DRAWLAYER_ID"] = 3] = "DRAWLAYER_ID";
    ECircleCodeIndex[ECircleCodeIndex["CENTER_X"] = 4] = "CENTER_X";
    ECircleCodeIndex[ECircleCodeIndex["CENTER_Y"] = 5] = "CENTER_Y";
    ECircleCodeIndex[ECircleCodeIndex["R"] = 6] = "R";
    ECircleCodeIndex[ECircleCodeIndex["CCW"] = 7] = "CCW";
    ECircleCodeIndex[ECircleCodeIndex["STROKE_COLOR_R"] = 8] = "STROKE_COLOR_R";
    ECircleCodeIndex[ECircleCodeIndex["STROKE_COLOR_G"] = 9] = "STROKE_COLOR_G";
    ECircleCodeIndex[ECircleCodeIndex["STROKE_COLOR_B"] = 10] = "STROKE_COLOR_B";
    ECircleCodeIndex[ECircleCodeIndex["STROKE_COLOR_A"] = 11] = "STROKE_COLOR_A";
    ECircleCodeIndex[ECircleCodeIndex["STROKE_WIDTH"] = 12] = "STROKE_WIDTH";
    ECircleCodeIndex[ECircleCodeIndex["FILL_COLOR_R"] = 13] = "FILL_COLOR_R";
    ECircleCodeIndex[ECircleCodeIndex["FILL_COLOR_G"] = 14] = "FILL_COLOR_G";
    ECircleCodeIndex[ECircleCodeIndex["FILL_COLOR_B"] = 15] = "FILL_COLOR_B";
    ECircleCodeIndex[ECircleCodeIndex["FILL_COLOR_A"] = 16] = "FILL_COLOR_A";
    ECircleCodeIndex[ECircleCodeIndex["LINE_CAP"] = 17] = "LINE_CAP";
    ECircleCodeIndex[ECircleCodeIndex["SOLID"] = 18] = "SOLID";
})(ECircleCodeIndex = exports.ECircleCodeIndex || (exports.ECircleCodeIndex = {}));


/***/ }),

/***/ "./src/file/config/Common.ts":
/*!***********************************!*\
  !*** ./src/file/config/Common.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EFileVsersion = void 0;
var EFileVsersion;
(function (EFileVsersion) {
    EFileVsersion["wc1"] = "1.0.1";
})(EFileVsersion = exports.EFileVsersion || (exports.EFileVsersion = {}));


/***/ }),

/***/ "./src/file/decode/CanvasDecode.ts":
/*!*****************************************!*\
  !*** ./src/file/decode/CanvasDecode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasDecode = void 0;
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const Decode_1 = __webpack_require__(/*! ./Decode */ "./src/file/decode/Decode.ts");
class CanvasDecode extends Decode_1.Decode {
    constructor() {
        super();
    }
    parseLineData(format, lineData) {
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.ECanvasCodeIndex.TAG_NAME: {
                    continue;
                }
                case CodeEnum_1.ECanvasCodeIndex.VERSION: {
                    continue;
                }
                default:
            }
        }
    }
    finish() {
        if (!this.check()) {
            throw new Error(`[CanvasDecode] an exception occurred while decoding the raw data of the graphic.`);
        }
    }
    check() {
        return true;
    }
}
exports.CanvasDecode = CanvasDecode;


/***/ }),

/***/ "./src/file/decode/CircleDecode.ts":
/*!*****************************************!*\
  !*** ./src/file/decode/CircleDecode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleDecode = void 0;
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const CircleShapeManager_1 = __webpack_require__(/*! ../../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
const Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const mapLineCap_1 = __webpack_require__(/*! ../Utils/mapLineCap */ "./src/file/Utils/mapLineCap.ts");
const Decode_1 = __webpack_require__(/*! ./Decode */ "./src/file/decode/Decode.ts");
class CircleDecode extends Decode_1.Decode {
    constructor() {
        super();
        this._tempPrimitiveItems = [];
    }
    parseLineData(format, lineData) {
        const primitiveItem = {
            elementItemId: '',
            elementItemName: '',
            layerItemId: '',
            centerX: 0,
            centerY: 0,
            radius: 0,
            isCCW: false,
            strokeColorR: 0,
            strokeColorG: 0,
            strokeColorB: 0,
            strokeColorA: 0,
            fillColorR: 0,
            fillColorG: 0,
            fillColorB: 0,
            fillColorA: 0,
            lineCap: 'round',
            strokeWidth: 0,
            isSolid: true,
        };
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.ECircleCodeIndex.TAG_NAME: {
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.ID: {
                    primitiveItem.elementItemId = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.NAME: {
                    primitiveItem.elementItemName = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.DRAWLAYER_ID: {
                    primitiveItem.layerItemId = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.CENTER_X: {
                    primitiveItem.centerX = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.CENTER_Y: {
                    primitiveItem.centerY = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.R: {
                    primitiveItem.radius = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.CCW: {
                    primitiveItem.isCCW = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_R: {
                    primitiveItem.strokeColorR = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_G: {
                    primitiveItem.strokeColorG = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_B: {
                    primitiveItem.strokeColorB = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_A: {
                    primitiveItem.strokeColorA = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_WIDTH: {
                    primitiveItem.strokeWidth = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.FILL_COLOR_R: {
                    primitiveItem.fillColorR = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.FILL_COLOR_G: {
                    primitiveItem.fillColorG = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.FILL_COLOR_B: {
                    primitiveItem.fillColorB = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.FILL_COLOR_A: {
                    primitiveItem.fillColorA = lineData[i];
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.LINE_CAP: {
                    primitiveItem.lineCap = (0, mapLineCap_1.mapNumber2LineCap)(lineData[i]);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.SOLID: {
                    primitiveItem.isSolid = lineData[i];
                    continue;
                }
                default:
            }
        }
        this._tempPrimitiveItems.push(primitiveItem);
    }
    finish(layerItemIdsMap) {
        if (!this.check()) {
            throw new Error(`[CircleDecode] an exception occurred while decoding the raw data of the graphic.`);
        }
        for (let i = 0; i < this._tempPrimitiveItems.length; i++) {
            const tempPrimitiveItem = this._tempPrimitiveItems[i];
            const gotLayerItemId = layerItemIdsMap[tempPrimitiveItem.layerItemId];
            const primitiveShapeItemId = Constant_1.elementController.createCircleShapeItem(gotLayerItemId, tempPrimitiveItem.centerX, tempPrimitiveItem.centerY, tempPrimitiveItem.radius, tempPrimitiveItem.strokeWidth, new Color_1.Color(tempPrimitiveItem.strokeColorR, tempPrimitiveItem.strokeColorG, tempPrimitiveItem.strokeColorB, tempPrimitiveItem.strokeColorA), new Color_1.Color(tempPrimitiveItem.fillColorR, tempPrimitiveItem.fillColorG, tempPrimitiveItem.fillColorB, tempPrimitiveItem.fillColorA));
            const primitiveShapeItem = CircleShapeManager_1.CircleShapeManager.getInstance().items.get(primitiveShapeItemId);
            if (primitiveShapeItem) {
                primitiveShapeItem.elementItemName = tempPrimitiveItem.elementItemName;
                primitiveShapeItem.solid = tempPrimitiveItem.isSolid;
                primitiveShapeItem.lineCap = tempPrimitiveItem.lineCap;
            }
            Constant_1.globalIdenManager.updateUsedElementIdenCounts(tempPrimitiveItem.elementItemId);
        }
    }
    check() {
        return true;
    }
}
exports.CircleDecode = CircleDecode;


/***/ }),

/***/ "./src/file/decode/Decode.ts":
/*!***********************************!*\
  !*** ./src/file/decode/Decode.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Decode = void 0;
class Decode {
}
exports.Decode = Decode;


/***/ }),

/***/ "./src/file/decode/DocumentDecode.ts":
/*!*******************************************!*\
  !*** ./src/file/decode/DocumentDecode.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentDecode = void 0;
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const Decode_1 = __webpack_require__(/*! ./Decode */ "./src/file/decode/Decode.ts");
class DocumentDecode extends Decode_1.Decode {
    constructor() {
        super();
    }
    parseLineData(format, lineData) {
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.EDocumentCodeIndex.TAG_NAME: {
                    continue;
                }
                case CodeEnum_1.EDocumentCodeIndex.VERSION: {
                    Constant_1.environment.sysVersion = lineData[i];
                    continue;
                }
                default:
            }
        }
    }
    finish() {
        if (!this.check()) {
            throw new Error(`[DocumentDecode] an exception occurred while decoding the raw data of the graphic.`);
        }
    }
    check() {
        return true;
    }
}
exports.DocumentDecode = DocumentDecode;


/***/ }),

/***/ "./src/file/decode/DrawLayerDecode.ts":
/*!********************************************!*\
  !*** ./src/file/decode/DrawLayerDecode.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerDecode = void 0;
const Command_1 = __webpack_require__(/*! ../../config/Command */ "./src/config/Command.ts");
const OperationProfile_1 = __webpack_require__(/*! ../../config/OperationProfile */ "./src/config/OperationProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ../../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const Decode_1 = __webpack_require__(/*! ./Decode */ "./src/file/decode/Decode.ts");
class DrawLayerDecode extends Decode_1.Decode {
    constructor() {
        super();
        this._tempPrimitiveItems = [];
    }
    parseLineData(format, lineData) {
        const primitiveItem = {
            layerItemId: '',
            layerItemName: '',
            layerItemOpacity: 1,
        };
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.EDrawLayerCodeIndex.TAG_NAME: {
                    continue;
                }
                case CodeEnum_1.EDrawLayerCodeIndex.ID: {
                    primitiveItem.layerItemId = lineData[i];
                    continue;
                }
                case CodeEnum_1.EDrawLayerCodeIndex.NAME: {
                    primitiveItem.layerItemName = lineData[i];
                    continue;
                }
                case CodeEnum_1.EDrawLayerCodeIndex.OPACITY: {
                    primitiveItem.layerItemOpacity = lineData[i];
                    continue;
                }
                default:
            }
        }
        this._tempPrimitiveItems.push(primitiveItem);
    }
    finish() {
        if (!this.check()) {
            throw new Error(`[DrawLayerDecode] an exception occurred while decoding the raw data of the graphic.`);
        }
        const layerItemIdsMap = {};
        for (let i = 0; i < this._tempPrimitiveItems.length; i++) {
            const tempPrimitiveItem = this._tempPrimitiveItems[i];
            const primitiveShapeItemId = Constant_1.drawLayerController.createDrawLayerShapeItem(tempPrimitiveItem.layerItemName);
            const primitiveShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getContentShapeItem(primitiveShapeItemId);
            if (primitiveShapeItem) {
                primitiveShapeItem.layerItemOpacity = tempPrimitiveItem.layerItemOpacity;
                layerItemIdsMap[tempPrimitiveItem.layerItemId] = primitiveShapeItem.layerItemId;
            }
        }
        if (Constant_1.environment.enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.REFRESH_DRAWLAYER, {
                targetItemId: undefined,
            }));
        }
        return layerItemIdsMap;
    }
    check() {
        return true;
    }
}
exports.DrawLayerDecode = DrawLayerDecode;


/***/ }),

/***/ "./src/file/decode/LineDecode.ts":
/*!***************************************!*\
  !*** ./src/file/decode/LineDecode.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineDecode = void 0;
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const Main_1 = __webpack_require__(/*! ../../Main */ "./src/Main.ts");
const LineShapeManager_1 = __webpack_require__(/*! ../../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const mapLineCap_1 = __webpack_require__(/*! ../Utils/mapLineCap */ "./src/file/Utils/mapLineCap.ts");
const Decode_1 = __webpack_require__(/*! ./Decode */ "./src/file/decode/Decode.ts");
class LineDecode extends Decode_1.Decode {
    constructor() {
        super();
        this._tempPrimitiveItems = [];
    }
    parseLineData(format, lineData) {
        const primitiveItem = {
            elementItemId: '',
            elementItemName: '',
            layerItemId: '',
            startPointX: 0,
            startPointY: 0,
            endPointX: 0,
            endPointY: 0,
            strokeColorR: 0,
            strokeColorG: 0,
            strokeColorB: 0,
            strokeColorA: 0,
            lineCap: 'round',
            strokeWidth: 0,
            isSolid: true,
        };
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.ELineCodeIndex.TAG_NAME: {
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.ID: {
                    primitiveItem.elementItemId = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.NAME: {
                    primitiveItem.elementItemName = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.DRAWLAYER_ID: {
                    primitiveItem.layerItemId = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.SX: {
                    primitiveItem.startPointX = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.SY: {
                    primitiveItem.startPointY = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.EX: {
                    primitiveItem.endPointX = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.EY: {
                    primitiveItem.endPointY = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_COLOR_R: {
                    primitiveItem.strokeColorR = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_COLOR_G: {
                    primitiveItem.strokeColorG = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_COLOR_B: {
                    primitiveItem.strokeColorB = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_COLOR_A: {
                    primitiveItem.strokeColorA = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_WIDTH: {
                    primitiveItem.strokeWidth = lineData[i];
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.LINE_CAP: {
                    primitiveItem.lineCap = (0, mapLineCap_1.mapNumber2LineCap)(lineData[i]);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.SOLID: {
                    primitiveItem.isSolid = lineData[i] === 1 ? true : false;
                    continue;
                }
                default:
            }
        }
        this._tempPrimitiveItems.push(primitiveItem);
    }
    finish(layerItemIdsMap) {
        if (!this.check()) {
            throw new Error(`[LineDecode] an exception occurred while decoding the raw data of the graphic.`);
        }
        for (let i = 0; i < this._tempPrimitiveItems.length; i++) {
            const tempPrimitiveItem = this._tempPrimitiveItems[i];
            const gotLayerItemId = layerItemIdsMap[tempPrimitiveItem.layerItemId];
            const primitiveShapeItemId = Constant_1.elementController.createLineShapeItem(gotLayerItemId, tempPrimitiveItem.startPointX, tempPrimitiveItem.startPointY, tempPrimitiveItem.endPointX, tempPrimitiveItem.endPointY, tempPrimitiveItem.strokeWidth, new Main_1.Color(tempPrimitiveItem.strokeColorR, tempPrimitiveItem.strokeColorG, tempPrimitiveItem.strokeColorB, tempPrimitiveItem.strokeColorA));
            const primitiveShapeItem = LineShapeManager_1.LineShapeManager.getInstance().items.get(primitiveShapeItemId);
            if (primitiveShapeItem) {
                primitiveShapeItem.elementItemName = tempPrimitiveItem.elementItemName;
                primitiveShapeItem.solid = tempPrimitiveItem.isSolid;
                primitiveShapeItem.lineCap = tempPrimitiveItem.lineCap;
            }
            Constant_1.globalIdenManager.updateUsedElementIdenCounts(tempPrimitiveItem.elementItemId);
        }
    }
    check() {
        return true;
    }
}
exports.LineDecode = LineDecode;


/***/ }),

/***/ "./src/file/decode/MainDecode.ts":
/*!***************************************!*\
  !*** ./src/file/decode/MainDecode.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainDecode = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const Command_1 = __webpack_require__(/*! ../../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const Starter_1 = __webpack_require__(/*! ../../Starter */ "./src/Starter.ts");
const Utils_1 = __webpack_require__(/*! ../../utils/Utils */ "./src/utils/Utils.ts");
const FormatConfig_1 = __webpack_require__(/*! ../FormatConfig */ "./src/file/FormatConfig.ts");
const CanvasDecode_1 = __webpack_require__(/*! ./CanvasDecode */ "./src/file/decode/CanvasDecode.ts");
const CircleDecode_1 = __webpack_require__(/*! ./CircleDecode */ "./src/file/decode/CircleDecode.ts");
const DocumentDecode_1 = __webpack_require__(/*! ./DocumentDecode */ "./src/file/decode/DocumentDecode.ts");
const DrawLayerDecode_1 = __webpack_require__(/*! ./DrawLayerDecode */ "./src/file/decode/DrawLayerDecode.ts");
const LineDecode_1 = __webpack_require__(/*! ./LineDecode */ "./src/file/decode/LineDecode.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const OperationProfile_1 = __webpack_require__(/*! ../../config/OperationProfile */ "./src/config/OperationProfile.ts");
class MainDecode {
    constructor() {
        this._formatProfile = FormatConfig_1.FormatConfig.createProfile();
        this._documentDecode = new DocumentDecode_1.DocumentDecode();
        this._canvasDecode = new CanvasDecode_1.CanvasDecode();
        this._drawLayerDecode = new DrawLayerDecode_1.DrawLayerDecode();
        this._lineDecode = new LineDecode_1.LineDecode();
        this._circleDecode = new CircleDecode_1.CircleDecode();
    }
    parseData(fileDataString) {
        (0, Starter_1.resetCanvasContent)().then(() => {
            (0, Utils_1.nextTick)(() => {
                console.time(`ParseSourceDataStr`);
                try {
                    const enbaleOperationMessagesEmit = Constant_1.environment.enbaleOperationMessagesEmit;
                    if (enbaleOperationMessagesEmit) {
                        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.IMPORT_DATASTR_START, {}));
                    }
                    const allLineDatas = fileDataString.split(`\r\n`);
                    for (let i = 0; i < allLineDatas.length; i++) {
                        const lineData = JSON.parse(allLineDatas[i]);
                        this.parseFileTypeDatas(lineData[0], lineData);
                    }
                    this.finish();
                    if (enbaleOperationMessagesEmit) {
                        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.IMPORT_DATASTR_COMPLETE, {}));
                    }
                }
                catch (e) {
                    console.error(`an exception occurred while decoding the input file.`, e);
                }
                console.timeEnd(`ParseSourceDataStr`);
            }).then(() => {
                (0, Utils_1.nextTick)(() => {
                    Constant_1.drawLayerController.clearAllSelectedDrawLayers();
                });
                Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
            });
        });
    }
    parseFileTypeDatas(fileType, lineData) {
        const format = this._formatProfile[fileType];
        switch (fileType) {
            case ElementProfile_1.EBaseFileType.DOCUMENT: {
                this._documentDecode.parseLineData(format, lineData);
                break;
            }
            case ElementProfile_1.EBaseFileType.CANVAS: {
                this._canvasDecode.parseLineData(format, lineData);
                break;
            }
            case ElementProfile_1.EBaseFileType.DRAWLAYER: {
                this._drawLayerDecode.parseLineData(format, lineData);
                break;
            }
            case ElementProfile_1.EElementFileType.LINE: {
                this._lineDecode.parseLineData(format, lineData);
                break;
            }
            case ElementProfile_1.EElementFileType.CIRCLE: {
                this._circleDecode.parseLineData(format, lineData);
                break;
            }
            default:
                throw new Error(`an unknown primitive type was encountered while parsing the file source code: [${fileType}]`);
        }
    }
    finish() {
        this._documentDecode.finish();
        this._canvasDecode.finish();
        const layerItemIdsMap = this._drawLayerDecode.finish();
        this._lineDecode.finish(layerItemIdsMap);
        this._circleDecode.finish(layerItemIdsMap);
    }
}
exports.MainDecode = MainDecode;


/***/ }),

/***/ "./src/file/encode/CanvasEncode.ts":
/*!*****************************************!*\
  !*** ./src/file/encode/CanvasEncode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasEncode = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const Encode_1 = __webpack_require__(/*! ./Encode */ "./src/file/encode/Encode.ts");
class CanvasEncode extends Encode_1.Encode {
    constructor() {
        super();
    }
    createLineData(format, data) {
        const lineData = [];
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.ECanvasCodeIndex.TAG_NAME: {
                    lineData.push(ElementProfile_1.EBaseFileType.CANVAS);
                    continue;
                }
                case CodeEnum_1.ECanvasCodeIndex.VERSION: {
                    lineData.push(data.version);
                    continue;
                }
                default:
            }
        }
        return lineData;
    }
}
exports.CanvasEncode = CanvasEncode;


/***/ }),

/***/ "./src/file/encode/CircleEncode.ts":
/*!*****************************************!*\
  !*** ./src/file/encode/CircleEncode.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleEncode = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const mapLineCap_1 = __webpack_require__(/*! ../Utils/mapLineCap */ "./src/file/Utils/mapLineCap.ts");
const Encode_1 = __webpack_require__(/*! ./Encode */ "./src/file/encode/Encode.ts");
class CircleEncode extends Encode_1.Encode {
    constructor() {
        super();
    }
    createLineData(format, data) {
        const lineData = [];
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.ECircleCodeIndex.TAG_NAME: {
                    lineData.push(ElementProfile_1.EElementFileType.CIRCLE);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.ID: {
                    lineData.push(data.elementItemId);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.NAME: {
                    lineData.push(data.elementItemName);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.DRAWLAYER_ID: {
                    lineData.push(data.layerItemId);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.CENTER_X: {
                    lineData.push(data.centerPoint.x);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.CENTER_Y: {
                    lineData.push(data.centerPoint.y);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.R: {
                    lineData.push(data.radius);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.CCW: {
                    lineData.push(0);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_R: {
                    lineData.push(data.strokeColor.red);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_G: {
                    lineData.push(data.strokeColor.green);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_B: {
                    lineData.push(data.strokeColor.blue);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_COLOR_A: {
                    lineData.push(data.strokeColor.alpha);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.STROKE_WIDTH: {
                    lineData.push(data.strokeWidth);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.FILL_COLOR_R: {
                    lineData.push(data.fillColor.red);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.FILL_COLOR_G: {
                    lineData.push(data.fillColor.green);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.FILL_COLOR_B: {
                    lineData.push(data.fillColor.blue);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.FILL_COLOR_A: {
                    lineData.push(data.fillColor.alpha);
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.LINE_CAP: {
                    lineData.push((0, mapLineCap_1.mapLineCap2Number)(data.lineCap));
                    continue;
                }
                case CodeEnum_1.ECircleCodeIndex.SOLID: {
                    lineData.push(data.isSolid ? 1 : 0);
                    continue;
                }
                default:
            }
        }
        return lineData;
    }
}
exports.CircleEncode = CircleEncode;


/***/ }),

/***/ "./src/file/encode/DocumentEncode.ts":
/*!*******************************************!*\
  !*** ./src/file/encode/DocumentEncode.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentEncode = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const Encode_1 = __webpack_require__(/*! ./Encode */ "./src/file/encode/Encode.ts");
class DocumentEncode extends Encode_1.Encode {
    constructor() {
        super();
    }
    createLineData(format, data) {
        const lineData = [];
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.EDocumentCodeIndex.TAG_NAME: {
                    lineData.push(ElementProfile_1.EBaseFileType.DOCUMENT);
                    continue;
                }
                case CodeEnum_1.EDocumentCodeIndex.VERSION: {
                    lineData.push(data.version);
                    continue;
                }
                default:
            }
        }
        return lineData;
    }
}
exports.DocumentEncode = DocumentEncode;


/***/ }),

/***/ "./src/file/encode/DrawLayerEncode.ts":
/*!********************************************!*\
  !*** ./src/file/encode/DrawLayerEncode.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerEncode = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const Encode_1 = __webpack_require__(/*! ./Encode */ "./src/file/encode/Encode.ts");
class DrawLayerEncode extends Encode_1.Encode {
    constructor() {
        super();
    }
    createLineData(format, data) {
        const lineData = [];
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.EDrawLayerCodeIndex.TAG_NAME: {
                    lineData.push(ElementProfile_1.EBaseFileType.DRAWLAYER);
                    continue;
                }
                case CodeEnum_1.EDrawLayerCodeIndex.ID: {
                    lineData.push(data.layerItemId);
                    continue;
                }
                case CodeEnum_1.EDrawLayerCodeIndex.NAME: {
                    lineData.push(data.layerItemName);
                    continue;
                }
                case CodeEnum_1.EDrawLayerCodeIndex.OPACITY: {
                    lineData.push(data.layerItemOpacity);
                    continue;
                }
                default:
            }
        }
        return lineData;
    }
}
exports.DrawLayerEncode = DrawLayerEncode;


/***/ }),

/***/ "./src/file/encode/Encode.ts":
/*!***********************************!*\
  !*** ./src/file/encode/Encode.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Encode = void 0;
class Encode {
}
exports.Encode = Encode;


/***/ }),

/***/ "./src/file/encode/LineEncode.ts":
/*!***************************************!*\
  !*** ./src/file/encode/LineEncode.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineEncode = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const CodeEnum_1 = __webpack_require__(/*! ../config/CodeEnum */ "./src/file/config/CodeEnum.ts");
const mapLineCap_1 = __webpack_require__(/*! ../Utils/mapLineCap */ "./src/file/Utils/mapLineCap.ts");
const Encode_1 = __webpack_require__(/*! ./Encode */ "./src/file/encode/Encode.ts");
class LineEncode extends Encode_1.Encode {
    constructor() {
        super();
    }
    createLineData(format, data) {
        const lineData = [];
        for (let i = 0; i < format.length; i++) {
            switch (format[i]) {
                case CodeEnum_1.ELineCodeIndex.TAG_NAME: {
                    lineData.push(ElementProfile_1.EElementFileType.LINE);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.ID: {
                    lineData.push(data.elementItemId);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.NAME: {
                    lineData.push(data.elementItemName);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.DRAWLAYER_ID: {
                    lineData.push(data.layerItemId);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.SX: {
                    lineData.push(data.startPoint.x);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.SY: {
                    lineData.push(data.startPoint.y);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.EX: {
                    lineData.push(data.endPoint.x);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.EY: {
                    lineData.push(data.endPoint.y);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_COLOR_R: {
                    lineData.push(data.strokeColor.red);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_COLOR_G: {
                    lineData.push(data.strokeColor.green);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_COLOR_B: {
                    lineData.push(data.strokeColor.blue);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_COLOR_A: {
                    lineData.push(data.strokeColor.alpha);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.STROKE_WIDTH: {
                    lineData.push(data.strokeWidth);
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.LINE_CAP: {
                    lineData.push((0, mapLineCap_1.mapLineCap2Number)(data.lineCap));
                    continue;
                }
                case CodeEnum_1.ELineCodeIndex.SOLID: {
                    lineData.push(data.isSolid ? 1 : 0);
                    continue;
                }
                default:
            }
        }
        return lineData;
    }
}
exports.LineEncode = LineEncode;


/***/ }),

/***/ "./src/file/encode/MainEncode.ts":
/*!***************************************!*\
  !*** ./src/file/encode/MainEncode.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainEncode = void 0;
const Command_1 = __webpack_require__(/*! ../../config/Command */ "./src/config/Command.ts");
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const OperationProfile_1 = __webpack_require__(/*! ../../config/OperationProfile */ "./src/config/OperationProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const CircleShapeManager_1 = __webpack_require__(/*! ../../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ../../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
const LineShapeManager_1 = __webpack_require__(/*! ../../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const FormatConfig_1 = __webpack_require__(/*! ../FormatConfig */ "./src/file/FormatConfig.ts");
const CanvasEncode_1 = __webpack_require__(/*! ./CanvasEncode */ "./src/file/encode/CanvasEncode.ts");
const CircleEncode_1 = __webpack_require__(/*! ./CircleEncode */ "./src/file/encode/CircleEncode.ts");
const DocumentEncode_1 = __webpack_require__(/*! ./DocumentEncode */ "./src/file/encode/DocumentEncode.ts");
const DrawLayerEncode_1 = __webpack_require__(/*! ./DrawLayerEncode */ "./src/file/encode/DrawLayerEncode.ts");
const LineEncode_1 = __webpack_require__(/*! ./LineEncode */ "./src/file/encode/LineEncode.ts");
class MainEncode {
    constructor(version) {
        this._version = version;
        this._formatProfile = FormatConfig_1.FormatConfig.createProfile();
        this._documentEncode = new DocumentEncode_1.DocumentEncode();
        this._canvasEncode = new CanvasEncode_1.CanvasEncode();
        this._drawLayerEncode = new DrawLayerEncode_1.DrawLayerEncode();
        this._lineEncode = new LineEncode_1.LineEncode();
        this._circleEncode = new CircleEncode_1.CircleEncode();
    }
    createSourceDataStr() {
        console.time(`CreateSourceDataStr`);
        const enbaleOperationMessagesEmit = Constant_1.environment.enbaleOperationMessagesEmit;
        if (enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.EXPORT_DATASTR_START, {}));
        }
        let datas = [];
        const formatKeys = Object.keys(this._formatProfile);
        for (let i = 0; i < formatKeys.length; i++) {
            const fileTypeDatas = this.createFileTypeDatas(formatKeys[i]);
            datas = [...datas, ...fileTypeDatas];
        }
        const dataStr = datas
            .map((item) => {
            return JSON.stringify(item);
        })
            .join('\r\n');
        if (enbaleOperationMessagesEmit) {
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.EXPORT_DATASTR_COMPLETE, {}));
        }
        console.timeEnd(`CreateSourceDataStr`);
        return dataStr;
    }
    createFileTypeDatas(fileType) {
        const fileTypeDatas = [];
        const format = this._formatProfile[fileType];
        switch (fileType) {
            case ElementProfile_1.EBaseFileType.DOCUMENT: {
                fileTypeDatas.push(this._documentEncode.createLineData(format, { version: this._version }));
                return fileTypeDatas;
            }
            case ElementProfile_1.EBaseFileType.CANVAS: {
                fileTypeDatas.push(this._canvasEncode.createLineData(format, { version: this._version }));
                return fileTypeDatas;
            }
            case ElementProfile_1.EBaseFileType.DRAWLAYER: {
                const allContentShapeItems = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getAllContentShapeItems();
                for (let i = 0; i < allContentShapeItems.length; i++) {
                    fileTypeDatas.push(this._drawLayerEncode.createLineData(format, allContentShapeItems[i].toJSON()));
                }
                return fileTypeDatas;
            }
            case ElementProfile_1.EElementFileType.LINE: {
                const allItems = Array.from(LineShapeManager_1.LineShapeManager.getInstance().items);
                for (let i = 0; i < allItems.length; i++) {
                    const item = allItems[i][1];
                    fileTypeDatas.push(this._lineEncode.createLineData(format, item.toJSON()));
                }
                return fileTypeDatas;
            }
            case ElementProfile_1.EElementFileType.CIRCLE: {
                const allItems = Array.from(CircleShapeManager_1.CircleShapeManager.getInstance().items);
                for (let i = 0; i < allItems.length; i++) {
                    const item = allItems[i][1];
                    fileTypeDatas.push(this._circleEncode.createLineData(format, item.toJSON()));
                }
                return fileTypeDatas;
            }
            default:
        }
        return fileTypeDatas;
    }
}
exports.MainEncode = MainEncode;


/***/ }),

/***/ "./src/geometry/Angles.ts":
/*!********************************!*\
  !*** ./src/geometry/Angles.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Angles = void 0;
class Angles {
    static radianToDegree(radian) {
        return (radian * 180) / Math.PI;
    }
    static degreeToRadian(degree) {
        return (degree / 180) * Math.PI;
    }
}
exports.Angles = Angles;
Angles.PI_2 = Math.PI / 2;
Angles.PI_4 = Math.PI / 4;


/***/ }),

/***/ "./src/geometry/BBox2.ts":
/*!*******************************!*\
  !*** ./src/geometry/BBox2.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BBox2 = void 0;
const Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./src/geometry/Vector2.ts");
class BBox2 {
    static isValid(bbox2) {
        return Number.isFinite(bbox2.minX) && Number.isFinite(bbox2.minY) && Number.isFinite(bbox2.maxX) && Number.isFinite(bbox2.maxY);
    }
    constructor(minX, minY, maxX, maxY) {
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
    get minX() {
        return this._minX;
    }
    set minX(value) {
        this._minX = value;
    }
    get minY() {
        return this._minY;
    }
    set minY(value) {
        this._minX = value;
    }
    get maxX() {
        return this._maxX;
    }
    set maxX(value) {
        this._maxX = value;
    }
    get maxY() {
        return this._maxY;
    }
    set maxY(value) {
        this._maxY = value;
    }
    get width() {
        return this.maxX - this.minX;
    }
    get height() {
        return this.maxY - this.minY;
    }
    get UpperLeftPoint() {
        return new Vector2_1.Vector2(this.minX, this.minY);
    }
    get UpperRightPoint() {
        return new Vector2_1.Vector2(this.maxX, this.minY);
    }
    get LowerLeftPoint() {
        return new Vector2_1.Vector2(this.minX, this.maxY);
    }
    get LowerRightPoint() {
        return new Vector2_1.Vector2(this.maxX, this.maxY);
    }
    get CenterPoint() {
        return new Vector2_1.Vector2(this.maxX - (this.maxX - this.minX) / 2, this.maxY - (this.maxY - this.minY) / 2);
    }
    get data() {
        this._data[0] = this.minX;
        this._data[1] = this.minY;
        this._data[2] = this.maxX;
        this._data[3] = this.maxY;
        return this._data;
    }
    /**
     * 判断当前 BBox2 实例是否包裹了传入的 vector2
     */
    isContainsPoint(vector2) {
        return this.isContainsX(vector2.x) && this.isContainsY(vector2.y);
    }
    /**
     * 判断当前 BBox2 实例是否包裹了传入的 bbox2
     */
    isConatinsBBox2(bbox2) {
        return this.maxX >= bbox2.maxX && this.minX <= bbox2.minX && this.maxY >= bbox2.maxY && this.minY <= bbox2.minY;
    }
    /**
     * 判断传入的 bbox2 是否包裹了当前 BBox2 实例
     */
    isBeWrappedByBBox2(bbox2) {
        return this.minX >= bbox2.minX && this.maxX <= bbox2.maxX && this.minY >= bbox2.minY && this.maxY <= bbox2.maxY;
    }
    /**
     * 判断当前 BBox2 实例与传入的 bbox2 边界范围是否相等
     */
    equals(bbox2) {
        if (this.minX === bbox2.minX && this.minY === bbox2.minY && this.maxX === bbox2.maxX && this.maxY === bbox2.maxY) {
            return true;
        }
        return false;
    }
    /**
     * 判断当前 BBox2 实例与传入的 bbox2 边界范围是否交叉
     */
    isIntersect(bbox2) {
        const _minX = Math.max(this.minX, bbox2.minX);
        const _maxX = Math.max(this.maxX, bbox2.maxX);
        if (_minX > _maxX) {
            return false;
        }
        const _minY = Math.max(this.minY, bbox2.minY);
        const _maxY = Math.max(this.maxY, bbox2.maxY);
        if (_minY > _maxY) {
            return false;
        }
        return true;
    }
    reset() {
        this.minX = Number.POSITIVE_INFINITY;
        this.maxX = Number.NEGATIVE_INFINITY;
        this.minY = Number.POSITIVE_INFINITY;
        this.maxY = Number.NEGATIVE_INFINITY;
    }
    toString() {
        return `BBox2 (${this.minX}, ${this.maxX}, ${this.minY}, ${this.maxY})`;
    }
    isContainsX(x) {
        return x >= this.minX && x <= this.maxX;
    }
    isContainsY(y) {
        return y >= this.minY && y <= this.maxY;
    }
}
exports.BBox2 = BBox2;


/***/ }),

/***/ "./src/geometry/Decimals.ts":
/*!**********************************!*\
  !*** ./src/geometry/Decimals.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Decimals = void 0;
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
class Decimals {
    static equalsFloat(num1, num2, places = 0) {
        const delta = Math.abs(num1 - num2);
        if (places > 5 && delta > 1e-5) {
            return false;
        }
        if (isNaN(places) && delta > 1e-8) {
            return false;
        }
        if (delta < 1e-13) {
            return true;
        }
        let min = Math.min(Decimals.getDecimalPlaces(num1), Decimals.getDecimalPlaces(num2));
        if (min < 10) {
            min = 10;
        }
        if (!isNaN(places)) {
            min = Math.min(min, places);
        }
        return (0, Utils_1.toFixed)(num1, min) === (0, Utils_1.toFixed)(num2, min);
    }
    static getDecimalPlaces(num) {
        let di = 0;
        let dl = 0;
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
    }
}
exports.Decimals = Decimals;


/***/ }),

/***/ "./src/geometry/DoubleKit.ts":
/*!***********************************!*\
  !*** ./src/geometry/DoubleKit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DoubleKit = void 0;
class DoubleKit {
    static regular(dis = 0) {
        return Math.round(dis * this.precision) / this.precision;
    }
    static eq(a, b) {
        return Math.abs(a - b) <= this.eps;
    }
    static neq(a, b) {
        return Math.abs(a - b) > this.eps;
    }
    static less(a, b) {
        return a - b < -this.eps;
    }
    static lesseq(a, b) {
        return a - b < this.eps;
    }
    static greater(a, b) {
        return a - b > this.eps;
    }
    static greatereq(a, b) {
        return a - b > -this.eps;
    }
    static sqrt(dis) {
        if (Math.abs(dis) <= 1e-10) {
            return 0;
        }
        return Math.sqrt(dis);
    }
    static sortAsc(a, b) {
        return a - b;
    }
    static sortDesc(a, b) {
        return b - a;
    }
}
exports.DoubleKit = DoubleKit;
DoubleKit.eps = 1e-8;
DoubleKit.precision = 1e8;


/***/ }),

/***/ "./src/geometry/Doublekit.ts":
/*!***********************************!*\
  !*** ./src/geometry/Doublekit.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DoubleKit = void 0;
class DoubleKit {
    static regular(dis = 0) {
        return Math.round(dis * this.precision) / this.precision;
    }
    static eq(a, b) {
        return Math.abs(a - b) <= this.eps;
    }
    static neq(a, b) {
        return Math.abs(a - b) > this.eps;
    }
    static less(a, b) {
        return a - b < -this.eps;
    }
    static lesseq(a, b) {
        return a - b < this.eps;
    }
    static greater(a, b) {
        return a - b > this.eps;
    }
    static greatereq(a, b) {
        return a - b > -this.eps;
    }
    static sqrt(dis) {
        if (Math.abs(dis) <= 1e-10) {
            return 0;
        }
        return Math.sqrt(dis);
    }
    static sortAsc(a, b) {
        return a - b;
    }
    static sortDesc(a, b) {
        return b - a;
    }
}
exports.DoubleKit = DoubleKit;
DoubleKit.eps = 1e-8;
DoubleKit.precision = 1e8;


/***/ }),

/***/ "./src/geometry/LinearPrimitive.ts":
/*!*****************************************!*\
  !*** ./src/geometry/LinearPrimitive.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinearPrimitive = void 0;
class LinearPrimitive {
}
exports.LinearPrimitive = LinearPrimitive;


/***/ }),

/***/ "./src/geometry/Matrix.ts":
/*!********************************!*\
  !*** ./src/geometry/Matrix.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix = void 0;
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
class Matrix {
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
    static matrixMul(mA, nA, mB, nB, A, B) {
        if (nA !== mB) {
            throw new Error('does not satisfy the condition of matrix multiplication: nA === mB');
        }
        const result = new Array(mA * nB);
        let ri = 0;
        let ai = 0;
        /**
         * 遍历矩阵 A 的行
         */
        for (let riA = 0; riA < mA; riA++) {
            /**
             * 遍历矩阵 B 的列
             */
            for (let ciB = 0; ciB < nB; ciB++) {
                let bi = ciB;
                let sum = 0;
                /**
                 * 遍历矩阵 A 的列
                 */
                for (let ciA = 0; ciA < nA; ciA++) {
                    sum += A[ai + ciA] * B[bi];
                    bi += nB;
                }
                result[ri++] = sum;
            }
            ai += nA;
        }
        return result;
    }
    /**
     * 依据某个数值在矩阵中的"坐标"参数, 获取其在数组中的真实索引
     *      例如
     *          A =
     * 			    1  2  3
     *    		    4  5  6
     *      需要获取矩阵 A 中第 2 行第 2 列的项(item = 5)在数组中的索引
     *      即 index = Matrix.matrixAt(3, 1, 1)
     */
    static matrixAt(colLen, rowIndex, columnIndex) {
        return colLen * rowIndex + columnIndex;
    }
    static getMatrixRank(matrixArr, rowLen, colLen) {
        const copyMatrixArr = matrixArr.slice(0);
        let rank = Math.min(rowLen, colLen);
        for (let ri = 0; ri < rowLen; ri++) {
            if (copyMatrixArr[Matrix.matrixAt(colLen, ri, ri)] === 0) {
                let tmp = new Array(colLen);
                let ci = 0;
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
            for (let rii = 0; rii < rowLen; rii++) {
                if (rii === ri) {
                    continue;
                }
                let multiplier = copyMatrixArr[Matrix.matrixAt(colLen, rii, ri)] / copyMatrixArr[Matrix.matrixAt(colLen, ri, ri)];
                for (let cii = 0; cii < colLen; cii++) {
                    copyMatrixArr[Matrix.matrixAt(colLen, rii, cii)] -= copyMatrixArr[Matrix.matrixAt(colLen, ri, cii)] * multiplier;
                }
            }
        }
        return {
            rank,
            updatedMatrixArr: copyMatrixArr,
        };
    }
    constructor(m, n, data) {
        /**
         * 矩阵行数
         */
        this._m = m;
        /**
         * 矩阵列数
         */
        this._n = n;
        const cnt = this._m * this._n;
        this._data = data;
    }
    get m() {
        return this._m;
    }
    get n() {
        return this._n;
    }
    get data() {
        return this._data;
    }
    /**
     * 将当前矩阵与矩阵 B 相乘
     */
    multiply(B) {
        const resultMatrixArr = Matrix.matrixMul(this.m, this.n, B.m, B.n, this.data, B.data);
        return new Matrix(this.m, B.n, resultMatrixArr);
    }
    /**
     * 计算当前矩阵的秩
     */
    getMatrixRank() {
        return Matrix.getMatrixRank(this.data, this.m, this.n).rank;
    }
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix() {
        const matrixArr = this.data.slice(0);
        if (this.m !== this.n) {
            throw new Error(`getInverseMatrix error: this.m !== this.n`);
        }
        const expandColLen = this.n * 2;
        const newMatrixArr = new Array(this.m * this.n).fill(0);
        let expandMatrixArr = this.initExpandMatrix(matrixArr);
        const { rank, updatedMatrixArr } = Matrix.getMatrixRank(expandMatrixArr, this.m, expandColLen);
        expandMatrixArr = updatedMatrixArr;
        if (rank !== this.m) {
            throw new Error(`getInverseMatrix error: rank !== this.m`);
        }
        expandMatrixArr = this.inverseMatrix(expandMatrixArr, this.m, expandColLen);
        for (let ri = 0; ri < this.m; ri++) {
            for (let ci = this.n; ci < expandColLen; ci++) {
                newMatrixArr[Matrix.matrixAt(this.n, ri, ci - this.n)] = expandMatrixArr[Matrix.matrixAt(expandColLen, ri, ci)];
            }
        }
        return new Matrix(this.m, this.n, newMatrixArr.slice(0));
    }
    hashCode() {
        let sum = 0;
        for (let num of this.data) {
            sum += num;
        }
        return sum;
    }
    /**
     * 以平铺模式生成矩阵字符串值
     */
    toString() {
        let b = [];
        b.push(`Matrix (`);
        for (let i = 0; i < this.data.length; i++) {
            b.push(String(this.data[i]));
            if (i >= this.data.length - 1) {
                continue;
            }
            b.push(', ');
        }
        b.push(`)`);
        return b.join('');
    }
    /**
     * 以格式化模式生成矩阵字符串值
     */
    toStringFormat() {
        let b = [];
        b.push(`Matrix (`);
        b.push(String(this.m));
        b.push(` x `);
        b.push(String(this.n));
        b.push(`)`);
        let idx = 0;
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                let d = String(this.data[idx++]);
                if (j === 0) {
                    b.push(`\n`);
                    b.push(`\t`);
                    b.push(d);
                    continue;
                }
                b.push(', ');
                b.push(d);
            }
        }
        return b.join('');
    }
    /**
     * 矩阵转置
     */
    transpose() {
        const colLen = this.n;
        const rowLen = this.m;
        const transposeArr = [];
        for (let ci = 0; ci <= colLen - 1; ci++) {
            for (let ri = 0; ri <= rowLen - 1; ri++) {
                const index = ci + ri * colLen;
                transposeArr.push(this.data[index]);
            }
        }
        return new Matrix(this.n, this.m, transposeArr);
    }
    initExpandMatrix(matrixArr) {
        const rowLen = this.m;
        const colLen = this.n;
        const expandColLen = this.n * 2;
        const expandMatrixArr = new Array(rowLen * expandColLen);
        for (let ri = 0; ri < rowLen; ri++) {
            for (let ci = 0; ci < expandColLen; ci++) {
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
    }
    inverseMatrix(expandMatrixArr, rowLen, colLen) {
        const copyExpandMatrixArr = expandMatrixArr.slice(0);
        for (let ri = 0; ri < rowLen; ri++) {
            let firstItem = copyExpandMatrixArr[Matrix.matrixAt(colLen, ri, ri)];
            for (let ci = 0; ci < colLen; ci++) {
                copyExpandMatrixArr[Matrix.matrixAt(colLen, ri, ci)] /= firstItem;
            }
        }
        return copyExpandMatrixArr;
    }
}
exports.Matrix = Matrix;


/***/ }),

/***/ "./src/geometry/Matrix3.ts":
/*!*********************************!*\
  !*** ./src/geometry/Matrix3.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix3 = void 0;
const Matrix_1 = __webpack_require__(/*! ./Matrix */ "./src/geometry/Matrix.ts");
const MATRIX3_ORIGIN_DATA = [1, 0, 0, 0, 1, 0, 0, 0, 1];
class Matrix3 extends Matrix_1.Matrix {
    /**
     * 平移矩阵(坐标)
     */
    static createTranslateMatrix3ByCoordinate(x, y) {
        /**
         * 转置前
         * 		[1, 0, x, 0, 1, y, 0, 0, 1]
         */
        return new Matrix3([1, 0, 0, 0, 1, 0, x, y, 1]);
    }
    /**
     * 旋转矩阵(弧度)
     */
    static createRotateZMatrix3ByRadian(radian) {
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        /**
         * 转置前
         * 		[cos, -sin, 0, sin, cos, 0, 0, 0, 1]
         */
        return new Matrix3([cos, sin, 0, -sin, cos, 0, 0, 0, 1]);
    }
    /**
     * 缩放矩阵(比例)
     */
    static createScaleMatrix3ByRatio(ratio) {
        /**
         * 转置前
         * 		[ratio, 0, 0, 0, ratio, 0, 0, 0, 1]
         */
        return new Matrix3([ratio, 0, 0, 0, ratio, 0, 0, 0, 1]);
    }
    /**
     * 缩放矩阵(坐标)
     */
    static createScaleMatrix3ByCoordinate(x, y) {
        /**
         * 转置前
         * 		[x, 0, 0, 0, y, 0, 0, 0, 1]
         */
        return new Matrix3([x, 0, 0, 0, y, 0, 0, 0, 1]);
    }
    constructor(data = MATRIX3_ORIGIN_DATA) {
        super(3, 3, data);
        const a = this.data[0];
        const b = this.data[3];
        const d = this.data[1];
        const e = this.data[4];
        this._iScale = Math.sqrt(a * a + d * d);
        this._jScale = Math.sqrt(b * b + e * e);
    }
    get iScale() {
        return this._iScale;
    }
    get jScale() {
        return this._jScale;
    }
    multiply3(matrix3) {
        return new Matrix3(Matrix_1.Matrix.matrixMul(3, 3, 3, 3, this.data, matrix3.data));
    }
    /**
     * 平移变换
     */
    translateByVector2(vector2) {
        return this.multiply3(Matrix3.createTranslateMatrix3ByCoordinate(vector2.x, vector2.y));
    }
    /**
     * 绕轴旋转变换
     */
    rotateZByRadian(radian) {
        return this.multiply3(Matrix3.createRotateZMatrix3ByRadian(radian));
    }
    /**
     * 缩放变换
     */
    scaleByRatio(ratio) {
        return this.multiply3(Matrix3.createScaleMatrix3ByRatio(ratio));
    }
    scaleByVector2(vector2) {
        return this.multiply3(Matrix3.createScaleMatrix3ByCoordinate(vector2.x, vector2.y));
    }
    det() {
        return this.data[0] * this.data[4] - this.data[3] * this.data[1];
    }
    isMirrored() {
        return this.det() < 0;
    }
    /**
     * 矩阵转置
     */
    transpose() {
        return new Matrix3(super.transpose().data);
    }
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix() {
        return new Matrix3(super.getInverseMatrix().data);
    }
}
exports.Matrix3 = Matrix3;
Matrix3.ORIGIN = new Matrix3();


/***/ }),

/***/ "./src/geometry/Matrix4.ts":
/*!*********************************!*\
  !*** ./src/geometry/Matrix4.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix4 = void 0;
const Matrix_1 = __webpack_require__(/*! ./Matrix */ "./src/geometry/Matrix.ts");
const Matrix3_1 = __webpack_require__(/*! ./Matrix3 */ "./src/geometry/Matrix3.ts");
const Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./src/geometry/Vector2.ts");
const Vector3_1 = __webpack_require__(/*! ./Vector3 */ "./src/geometry/Vector3.ts");
const MATRIX4_ORIGIN_DATA = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
class Matrix4 extends Matrix_1.Matrix {
    /**
     * 平移矩阵(坐标)
     */
    static createTranslateMatrix4ByCoordinate(x, y, z) {
        /**
         * 转置前
         * 		[1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1]
         */
        return new Matrix4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1]);
    }
    /**
     * 旋转矩阵(弧度)
     */
    static createRotateXMatrix4ByRadian(radian) {
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        /**
         * 转置前
         * 		[1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1]
         */
        return new Matrix4([1, 0, 0, 0, 0, cos, sin, 0, 0, -sin, cos, 0, 0, 0, 1]);
    }
    static createRotateYMatrix4ByRadian(radian) {
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        /**
         * 转置前
         * 		[cos, 0, sin, 0, 0, 1, 0, 0, -sin, 0, cos, 0, 0, 0, 0, 1]
         */
        return new Matrix4([cos, 0, -sin, 0, 0, 1, 0, 0, sin, 0, cos, 0, 0, 0, 0, 1]);
    }
    static createRotateZMatrix4ByRadian(radian) {
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        /**
         * 转置前
         * 		[cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
         */
        return new Matrix4([cos, sin, 0, 0, -sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    /**
     * 缩放矩阵(坐标)
     */
    static createScaleMatrix4ByCoordinate(x, y, z) {
        /**
         * 转置前
         * 		[x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]
         */
        return new Matrix4([x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1]);
    }
    /**
     * 翻转矩阵
     */
    static createFlipXMatrix4() {
        /**
         * 转置前
         * 		[1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
         */
        return new Matrix4([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static createFlipYMatrix4() {
        /**
         * 转置前
         * 		[-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
         */
        return new Matrix4([-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static matrix4RotateZByRadianForPoint(radian, centerPoint) {
        if (centerPoint.equalsWithPoint(Vector2_1.Vector2.ORIGIN)) {
            return Matrix4.createRotateZMatrix4ByRadian(radian);
        }
        return Matrix4.createTranslateMatrix4ByCoordinate(-centerPoint.x, -centerPoint.y, 0)
            .rotateZByRadian(radian)
            .translateByVector3(new Vector3_1.Vector3(centerPoint.x, centerPoint.y, 0));
    }
    static getMatrix4(startTranslate, endTranslate, radian, scaleX) {
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        const x = scaleX * (startTranslate.x * cos - startTranslate.y * sin) + endTranslate.x;
        const y = startTranslate.x * sin + startTranslate.y * cos + endTranslate.y;
        const data = [scaleX * cos, sin, 0, 0, -sin * scaleX, cos, 0, 0, 0, 0, 1, 0, x, y, 0, 1];
        return new Matrix4(data);
    }
    constructor(data = MATRIX4_ORIGIN_DATA) {
        super(4, 4, data);
    }
    multiply4(matrix4) {
        return new Matrix4(Matrix_1.Matrix.matrixMul(4, 4, 4, 4, this.data, matrix4.data));
    }
    /**
     * 平移变换
     */
    translateByVector3(vector3) {
        return this.multiply4(Matrix4.createTranslateMatrix4ByCoordinate(vector3.x, vector3.y, vector3.z));
    }
    /**
     * 绕轴旋转变换
     */
    rotateXByRadian(radian) {
        return this.multiply4(Matrix4.createRotateXMatrix4ByRadian(radian));
    }
    rotateYByRadian(radian) {
        return this.multiply4(Matrix4.createRotateYMatrix4ByRadian(radian));
    }
    rotateZByRadian(radian) {
        return this.multiply4(Matrix4.createRotateZMatrix4ByRadian(radian));
    }
    /**
     * 缩放变换
     */
    scaleByVector3(vector3) {
        return this.multiply4(Matrix4.createScaleMatrix4ByCoordinate(vector3.x, vector3.y, vector3.z));
    }
    setOriginByVector3(vector3) {
        return Matrix4.createTranslateMatrix4ByCoordinate(-vector3.x, -vector3.y, -vector3.z)
            .multiply4(this)
            .multiply4(Matrix4.createTranslateMatrix4ByCoordinate(vector3.x, vector3.y, vector3.z));
    }
    toMatrix3() {
        return new Matrix3_1.Matrix3([this.data[0], this.data[1], 0, this.data[4], this.data[5], 0, this.data[12], this.data[13], 1]);
    }
    /**
     * 矩阵转置
     */
    transpose() {
        return new Matrix4(super.transpose().data);
    }
    /**
     * 计算当前矩阵(满足条件时)的逆矩阵
     */
    getInverseMatrix() {
        return new Matrix4(super.getInverseMatrix().data);
    }
}
exports.Matrix4 = Matrix4;
Matrix4.ORIGIN = new Matrix4();


/***/ }),

/***/ "./src/geometry/RtreeItem.ts":
/*!***********************************!*\
  !*** ./src/geometry/RtreeItem.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RtreeItem = void 0;
const BBox2_1 = __webpack_require__(/*! ./BBox2 */ "./src/geometry/BBox2.ts");
class RtreeItem {
    static getSimpleRectFromBbox2(bbox2) {
        return {
            sx: bbox2.minX,
            sy: bbox2.minY,
            w: Math.abs(bbox2.maxX - bbox2.minX),
            h: Math.abs(bbox2.maxY - bbox2.minY),
        };
    }
    static getSimpleRectFromModelBbox2(item) {
        const bbox2 = item.model.bbox2;
        return {
            sx: bbox2.minX,
            sy: bbox2.minY,
            w: Math.abs(bbox2.maxX - bbox2.minX),
            h: Math.abs(bbox2.maxY - bbox2.minY),
        };
    }
    constructor(target) {
        this._target = target;
        this._bbox2 = target.model.bbox2;
    }
    get target() {
        return this._target;
    }
    get targetId() {
        return this._target.elementItemId;
    }
    getBBox2() {
        return this._bbox2;
    }
    updateBBox2(bbox2) {
        this._bbox2 = new BBox2_1.BBox2(bbox2.minX, bbox2.minY, bbox2.maxX, bbox2.maxY);
    }
}
exports.RtreeItem = RtreeItem;


/***/ }),

/***/ "./src/geometry/StructLine.ts":
/*!************************************!*\
  !*** ./src/geometry/StructLine.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StructLine = void 0;
const BBox2_1 = __webpack_require__(/*! ./BBox2 */ "./src/geometry/BBox2.ts");
const LinearPrimitive_1 = __webpack_require__(/*! ./LinearPrimitive */ "./src/geometry/LinearPrimitive.ts");
class StructLine extends LinearPrimitive_1.LinearPrimitive {
    constructor(startPoint, endPoint) {
        super();
        this._startPoint = startPoint;
        this._endPoint = endPoint;
    }
    get startPoint() {
        return this._startPoint;
    }
    set startPoint(value) {
        this._startPoint = value;
    }
    get endPoint() {
        return this._endPoint;
    }
    set endPoint(value) {
        this._endPoint = value;
    }
    start() {
        return this.startPoint;
    }
    end() {
        return this.endPoint;
    }
    bbox2() {
        const minX = Math.min(this.startPoint.x, this.endPoint.x);
        const maxX = Math.max(this.startPoint.x, this.endPoint.x);
        const minY = Math.min(this.startPoint.y, this.endPoint.y);
        const maxY = Math.max(this.startPoint.y, this.endPoint.y);
        return new BBox2_1.BBox2(minX, minY, maxX, maxY);
    }
    toString() {
        return `StructLine (${this.startPoint.x}, ${this.startPoint.y}, ${this.endPoint.x}, ${this.endPoint.y})`;
    }
}
exports.StructLine = StructLine;


/***/ }),

/***/ "./src/geometry/Vector.ts":
/*!********************************!*\
  !*** ./src/geometry/Vector.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector = void 0;
class Vector {
    static hypot(deltaX, deltaY) {
        let xs = Math.abs(deltaX);
        let ys = Math.abs(deltaY);
        if (ys > xs) {
            const swap = ys;
            ys = xs;
            xs = swap;
        }
        if (xs === 0) {
            return ys;
        }
        const t = ys / xs;
        return xs * Math.sqrt(1 + t * t);
    }
    static distance(x1, y1, x2, y2) {
        return this.hypot(x2 - x1, y2 - y1);
    }
    constructor() {
        /* ... */
    }
}
exports.Vector = Vector;


/***/ }),

/***/ "./src/geometry/Vector2.ts":
/*!*********************************!*\
  !*** ./src/geometry/Vector2.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
const BBox2_1 = __webpack_require__(/*! ./BBox2 */ "./src/geometry/BBox2.ts");
const Decimals_1 = __webpack_require__(/*! ./Decimals */ "./src/geometry/Decimals.ts");
const Doublekit_1 = __webpack_require__(/*! ./Doublekit */ "./src/geometry/Doublekit.ts");
const Vector_1 = __webpack_require__(/*! ./Vector */ "./src/geometry/Vector.ts");
const VECTOR2_ORIGIN_DATA = [0, 0];
class Vector2 extends Vector_1.Vector {
    /**
     * 计算某个初始弧度在经过特定矩阵变换后的弧度
     */
    static caculateAngle(radian, matrix4) {
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        const x = cos * matrix4.data[0] + sin * matrix4.data[4];
        const y = cos * matrix4.data[1] + sin * matrix4.data[5];
        const vector2 = new Vector2(x, y).normalize();
        return Math.atan2(vector2.x, vector2.y);
    }
    /**
     * 计算某个弧度的单位向量
     */
    static getInitVector2ByRadian(radian) {
        return new Vector2(Math.cos(radian), Math.sin(radian));
    }
    constructor(x = VECTOR2_ORIGIN_DATA[0], y = VECTOR2_ORIGIN_DATA[1]) {
        super();
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    /**
     * 向量长度
     */
    get length() {
        return Math.hypot(this.x, this.y);
    }
    /**
     * 向量弧度方向
     */
    get dir() {
        return Math.atan2(this.y, this.x);
    }
    /**
     * 向量角度方向
     */
    get dirDeg() {
        return Math.atan2(this.y, this.x) * (180 / Math.PI);
    }
    /**
     * 向量副本
     */
    copy() {
        return new Vector2(this.x, this.y);
    }
    /**
     * 向量与向量相加
     */
    add(vector2) {
        return new Vector2(this.x + vector2.x, this.y + vector2.y);
    }
    /**
     * 向量与标量相加
     */
    addScalar(x, y) {
        return new Vector2(this.x + x, this.y + y);
    }
    /**
     * 向量与向量相减
     */
    sub(vector2) {
        return new Vector2(this.x - vector2.x, this.y - vector2.y);
    }
    /**
     * 向量与标量相减
     */
    subScalar(x, y) {
        return new Vector2(this.x - x, this.y - y);
    }
    /**
     * 向量缩放
     */
    scale(x = 0, y = 0) {
        const _y = typeof y !== 'undefined' ? y : x;
        return new Vector2(this.x * x, this.y * _y);
    }
    /**
     * 向量与标量的乘积
     */
    mul(x = 0, y = 0) {
        return this.scale(x, y);
    }
    /**
     * 向量与向量叉乘
     */
    cross(vector2) {
        return this.x * vector2.y - vector2.x * this.y;
    }
    /**
     * 向量与向量点乘
     */
    dot(vector2) {
        return this.x * vector2.x + this.y * vector2.y;
    }
    /**
     * 向量 sin 值
     */
    getSin() {
        return this.y / this.length;
    }
    /**
     * 向量 cos 值
     */
    getCos() {
        return this.x / this.length;
    }
    /**
     * 该向量的终点的 bbox2
     */
    getEndDotBbbox2() {
        return new BBox2_1.BBox2(this.x, this.x, this.y, this.y);
    }
    /**
     * 设当前向量为 B, 输入向量 A, 计算 AB 向量的弧度
     */
    agnleOfTowVector(vector2) {
        return Math.atan2(this.y - vector2.y, this.x - vector2.x);
    }
    /**
     * 设当前向量为 B, 输入向量 A, 计算 AB 向量与 X 轴正向的弧度
     */
    agnleXOfTowVector(vector2) {
        let radian = this.agnleOfTowVector(vector2);
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        return radian;
    }
    /**
     * 向量旋转 - 绕起点旋转 radian(弧度) 后的结果向量
     * 		将向量 v0(x0, y0) 旋转 θ 角度后
     * 			x = x0 * cos(θ) - y0 * sin(θ)
     * 			y = x0 * sin(θ) + x0 * cos(θ)
     */
    rotate(radian) {
        const c = Math.cos(radian);
        const s = Math.sin(radian);
        const [x, y] = [this.x, this.y];
        return new Vector2(x * c + y * -s, x * s + y * c);
    }
    /**
     * 向量旋转 - 绕向量外定点旋转 radian(弧度) 后的结果向量
     */
    rotateSurround(center2, radian) {
        const cos = Math.cos(radian);
        const sin = Math.sin(radian);
        const dx = this.x - center2.x;
        const dy = this.y - center2.y;
        return new Vector2(dx * cos + dy * -sin, dx * sin + dy * cos);
    }
    /**
     * 向量关于 origin2 坐标点的中心对称向量
     */
    mirrorSurround(origin2 = Vector2.ORIGIN) {
        return new Vector2(2 * origin2.x, 2 * origin2.y - this.y);
    }
    /**
     * 向量关于 origin2 坐标点的 x 坐标值的 X 轴镜像
     */
    mirrorSurroundX(origin2 = Vector2.ORIGIN) {
        return new Vector2(this.x, 2 * origin2.y - this.y);
    }
    /**
     * 向量关于 origin2 坐标点的 y 坐标值的 Y 轴镜像
     */
    mirrorSurroundY(origin2 = Vector2.ORIGIN) {
        return new Vector2(2 * origin2.x - this.x, this.y);
    }
    /**
     * 应用 matrix3
     */
    multiplyMatrix3(matrix3) {
        const x = this.x * matrix3.data[0] + this.y * matrix3.data[3] + matrix3.data[6];
        const y = this.x * matrix3.data[1] + this.y * matrix3.data[4] + matrix3.data[7];
        return new Vector2(x, y);
    }
    /**
     * 应用 matrix4
     */
    multiplyMatrix4(matrix4) {
        const x = this.x * matrix4.data[0] + this.y * matrix4.data[4] + matrix4.data[12];
        const y = this.x * matrix4.data[1] + this.y * matrix4.data[5] + matrix4.data[13];
        return new Vector2(x, y);
    }
    toString() {
        return `Vector2 (${this.x}, ${this.y})`;
    }
    toJSON() {
        return {
            x: this._x,
            y: this._y,
        };
    }
    /**
     * 向量的单位向量
     */
    normalize() {
        if (this.x === 0 && this.y === 0) {
            return new Vector2(0, 0);
        }
        const sx = this.x / this.length;
        const sy = this.y / this.length;
        return new Vector2(sx, sy);
    }
    /**
     * 判断当前向量与输入向量是否相等
     */
    equalsWithVector2(vector2, place = 0) {
        if (vector2 instanceof Vector2) {
            return Decimals_1.Decimals.equalsFloat(vector2.x, this.x, place) && Decimals_1.Decimals.equalsFloat(vector2.y, this.y, place);
        }
        return false;
    }
    /**
     * 判断当前坐标点与输入坐标点是否相等
     */
    equalsWithPoint(p) {
        return Doublekit_1.DoubleKit.eq(this.x, p.x) && Doublekit_1.DoubleKit.eq(this.y, p.y);
    }
    /**
     * 计算当前点与输入点 P(vector2) 的距离
     * 		向量与向量 vector2 的距离
     */
    distance(vector2) {
        const deltaX = vector2.x - this._x;
        const deltaY = vector2.y - this._y;
        return Vector_1.Vector.hypot(deltaX, deltaY);
    }
}
exports.Vector2 = Vector2;
Vector2.ORIGIN = new Vector2();
Vector2.X_INIT_UNIT_VERCTOR2 = new Vector2(1, 0);
Vector2.Y_INIT_UNIT_VERCTOR2 = new Vector2(0, 1);


/***/ }),

/***/ "./src/geometry/Vector3.ts":
/*!*********************************!*\
  !*** ./src/geometry/Vector3.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
const Vector_1 = __webpack_require__(/*! ./Vector */ "./src/geometry/Vector.ts");
const VECTOR3_ORIGIN_DATA = [0, 0, 0];
class Vector3 extends Vector_1.Vector {
    constructor(x = VECTOR3_ORIGIN_DATA[0], y = VECTOR3_ORIGIN_DATA[1], z = VECTOR3_ORIGIN_DATA[2]) {
        super();
        this._x = x;
        this._y = y;
        this._z = z;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
    }
    /**
     * 向量长度
     */
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * 向量副本
     */
    copy() {
        return new Vector3(this.x, this.y, this.z);
    }
    /**
     * 向量与向量相加
     */
    add(vector3) {
        return new Vector3(this.x + vector3.x, this.y + vector3.y, this.z + vector3.z);
    }
    /**
     * 向量与标量相加
     */
    addScalar(x, y, z) {
        return new Vector3(this.x + x, this.y + y, this.z + z);
    }
    /**
     * 向量与向量相减
     */
    sub(vector3) {
        return new Vector3(this.x - vector3.x, this.y - vector3.y, this.z - vector3.z);
    }
    /**
     * 向量与标量相减
     */
    subScalar(x, y, z) {
        return new Vector3(this.x - x, this.y - y, this.z - z);
    }
    /**
     * 向量缩放
     */
    scale(x = 0, y = 0, z = 0) {
        const _y = typeof y !== 'undefined' ? y : x;
        const _z = typeof z !== 'undefined' ? z : x;
        return new Vector3(this.x * x, this.y * _y, this.z * _z);
    }
    /**
     * 向量与标量的乘积
     */
    mul(x = 0, y = 0, z = 0) {
        return this.scale(x, y, z);
    }
    /**
     * 向量与向量叉乘
     */
    cross(vector3) {
        const x = this.y * vector3.z - this.z * vector3.y;
        const y = this.z * vector3.x - this.x * vector3.z;
        const z = this.x * vector3.y - this.y * vector3.x;
        return new Vector3(x, y, z);
    }
    /**
     * 向量与向量点乘
     */
    dot(vector3) {
        return this.x * vector3.x + this.y * vector3.y + this.z * vector3.z;
    }
    /**
     * 应用 matrix4
     */
    multiplyMatrix4(matrix4) {
        const x = this.x * matrix4.data[0] + this.y * matrix4.data[4] + this.z * matrix4.data[8] + matrix4.data[12];
        const y = this.x * matrix4.data[1] + this.y * matrix4.data[5] + this.z * matrix4.data[9] + matrix4.data[13];
        const z = this.x * matrix4.data[2] + this.y * matrix4.data[6] + this.z * matrix4.data[10] + matrix4.data[14];
        const w = this.x * matrix4.data[3] + this.y * matrix4.data[7] + this.z * matrix4.data[11] + matrix4.data[15];
        return new Vector3(x / w, y / w, z / w);
    }
    toString() {
        return `Vector3 (${this.x}, ${this.y}, ${this.z})`;
    }
    toJSON() {
        return {
            x: this._x,
            y: this._y,
            z: this._z,
        };
    }
    /**
     * 向量的单位向量
     */
    normalize() {
        if (this.x === 0 && this.y === 0 && this.z === 0) {
            return new Vector3(0, 0, 0);
        }
        const sx = this.x / this.length;
        const sy = this.y / this.length;
        const sz = this.z / this.length;
        return new Vector3(sx, sy, sz);
    }
    distance(v) {
        throw new Error('Method not implemented.');
    }
}
exports.Vector3 = Vector3;
Vector3.ORIGIN = new Vector3();
Vector3.X_INIT_UNIT_VERCTOR2 = new Vector3(1, 0, 0);
Vector3.Y_INIT_UNIT_VERCTOR2 = new Vector3(0, 1, 0);
Vector3.Z_INIT_UNIT_VERCTOR2 = new Vector3(0, 0, 1);


/***/ }),

/***/ "./src/geometry/rtree/Rectangle.ts":
/*!*****************************************!*\
  !*** ./src/geometry/rtree/Rectangle.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
class Rectangle {
    static overlapRectangle(rectA, rectB) {
        if ((rectA.h === 0 && rectA.w === 0) || (rectB.h === 0 && rectB.w === 0)) {
            return (rectA.sx <= rectB.sx + rectB.w && rectA.sx + rectA.w >= rectB.sx && rectA.sy <= rectB.sy + rectB.h && rectA.sy + rectA.h >= rectB.sy);
        }
        return rectA.sx < rectB.sx + rectB.w && rectA.sx + rectA.w > rectB.sx && rectA.sy < rectB.sy + rectB.h && rectA.sy + rectA.h > rectB.sy;
    }
    static containsRectangle(rectA, rectB) {
        return rectA.sx + rectA.w <= rectB.sx + rectB.w && rectA.sx >= rectB.sx && rectA.sy + rectA.h <= rectB.sy + rectB.h && rectA.sy >= rectB.sy;
    }
    static expandRectangle(expandRect, referenceRect) {
        let nx = 0;
        let ny = 0;
        let axw = expandRect.sx + expandRect.w;
        let bxw = referenceRect.sx + referenceRect.w;
        let ayh = expandRect.sy + expandRect.h;
        let byh = referenceRect.sy + referenceRect.h;
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
    }
    static makeMBR(expandRect, nodes) {
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
        for (let i = 1; i < nodes.length; i++) {
            Rectangle.expandRectangle(expandRect, nodes[i]);
        }
        return expandRect;
    }
    static squarifiedRatio(l, w, fill) {
        // const lperi: number = (l + w) / 2
        // const larea: number = l * w
        // const lgeo: number = larea / (lperi * lperi)
        // return (larea * fill) / lgeo
        const a = (l + w) / 2;
        return a * a * fill;
    }
    constructor(sx, sy, w, h) {
        this._sx = 0;
        this._sy = 0;
        this._w = 0;
        this._h = 0;
        this._ex = 0;
        this._ey = 0;
        this._p = false;
        this.reset(sx, sy, w, h);
    }
    get sx() {
        return this._sx;
    }
    set sx(value) {
        this._sx = value;
    }
    get sy() {
        return this._sy;
    }
    set sy(value) {
        this._sy = value;
    }
    get ex() {
        return this._ex;
    }
    set ex(value) {
        this._ex = value;
    }
    get ey() {
        return this._ey;
    }
    set ey(value) {
        this._ey = value;
    }
    get p() {
        return this._p;
    }
    set p(value) {
        this._p = value;
    }
    get w() {
        return this._w;
    }
    set w(value) {
        this._w = value;
    }
    get h() {
        return this._h;
    }
    set h(value) {
        this._h = value;
    }
    reset(sx, sy, w, h) {
        this._sx = sx;
        this._sy = sy;
        this._w = w;
        this._h = h;
        this._ex = this._sx + this._w;
        this._ey = this._sy + this._h;
        this._p = this._w + this._h ? false : true;
    }
    overlap(rect) {
        if (this.p || rect.p) {
            return this.sx <= rect.ex && this.ex >= rect.sx && this.sy <= rect.ey && this.ey >= rect.sy;
        }
        return this.sx < rect.ex && this.ex > rect.sx && this.sy < rect.ey && this.ey > rect.sy;
    }
    expand(rect) {
        let nx = 0;
        let ny = 0;
        let sx = 0;
        let sy = 0;
        let w = 0;
        let h = 0;
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
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./src/geometry/rtree/Rtree.ts":
/*!*************************************!*\
  !*** ./src/geometry/rtree/Rtree.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RTree = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/geometry/rtree/Utils.ts");
class RTree {
    constructor(width = 10) {
        this._getWidth = width;
        this._root = null;
        this._minWidth = 10;
        this._maxWidth = 20;
        this.refresh();
    }
    refresh() {
        let minWidth = this._minWidth;
        let maxWidth = this._maxWidth;
        if (!isNaN(this._getWidth)) {
            minWidth = Math.floor(this._getWidth / 2.0);
            maxWidth = this._getWidth;
        }
        this._allItems = new Set();
        const rootTree = {
            sx: 0,
            sy: 0,
            w: 0,
            h: 0,
            nodes: [],
            id: `root`,
        };
        this._root = rootTree;
        this._minWidth = minWidth;
        this._maxWidth = maxWidth;
    }
    insertSubtree(handleNode, targetRoot) {
        targetRoot = targetRoot || this._root;
        (0, Utils_1.insertSubtree)(handleNode, targetRoot, this._minWidth, this._maxWidth);
    }
    insertItemData(rect, data) {
        this._allItems.add(data);
        (0, Utils_1.insertSubtree)({
            sx: rect.sx,
            sy: rect.sy,
            w: rect.w,
            h: rect.h,
            leaf: data,
        }, this._root, this._minWidth, this._maxWidth);
    }
    search(rect, isGetNodeDataOnly) {
        return (0, Utils_1.searchSubtree)(rect, this._root, isGetNodeDataOnly);
    }
    removeArea(rect, balanceChildrenOnDeleting = false) {
        let result = (0, Utils_1.removeArea)(rect, this._root, this._minWidth, this._maxWidth, balanceChildrenOnDeleting);
        for (let i = 0; i < result.length; i++) {
            if (this._allItems.has(result[i].leaf)) {
                this._allItems.delete(result[i].leaf);
            }
        }
        return result;
    }
    removeTarget(rect, targetOnLeaf, balanceChildrenOnDeleting = false) {
        let result = [];
        if (targetOnLeaf === false) {
            result = (0, Utils_1.removeArea)(rect, this._root, this._minWidth, this._maxWidth, balanceChildrenOnDeleting);
        }
        result = (0, Utils_1.removeObj)(rect, targetOnLeaf, this._root, this._minWidth, this._maxWidth, balanceChildrenOnDeleting);
        for (let i = 0; i < result.length; i++) {
            if (this._allItems.has(result[i].leaf)) {
                this._allItems.delete(result[i].leaf);
            }
        }
        return result;
    }
    getTree() {
        return this._root;
    }
    setTree(newTree, targetRoot) {
        if (!targetRoot) {
            targetRoot = this._root;
        }
        return (0, Utils_1.attachData)(newTree, targetRoot);
    }
    getAllItems() {
        return this._allItems;
    }
    clearAllItems() {
        this.refresh();
    }
}
exports.RTree = RTree;


/***/ }),

/***/ "./src/geometry/rtree/Utils.ts":
/*!*************************************!*\
  !*** ./src/geometry/rtree/Utils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.attachData = exports.removeSubtree = exports.removeObj = exports.removeArea = exports.getFlattenLeafs = exports.searchSubtree = exports.pickNext = exports.pickLinear = exports.linearSplit = exports.chooseLeafSubtree = exports.insertSubtree = void 0;
const Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "./src/geometry/rtree/Rectangle.ts");
function insertSubtree(leafItem, root, minWidth, maxWidth) {
    if (root.nodes.length === 0) {
        root.sx = leafItem.sx;
        root.sy = leafItem.sy;
        root.w = leafItem.w;
        root.h = leafItem.h;
        root.nodes.push(leafItem);
        return;
    }
    let nodePath = chooseLeafSubtree(leafItem, root);
    let handleItem = leafItem;
    let bc = undefined;
    let expandRect = null;
    let splitRes = [];
    while (nodePath.length > 0) {
        if (bc && bc.nodes && bc.nodes.length <= 0) {
            let cache = bc;
            bc = nodePath.pop();
            for (let n = 0; n < bc.nodes.length; n++) {
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
                for (let i = 0; i < splitRes.length; i++) {
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
                let a = linearSplit(bc.nodes, minWidth);
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
    const bestChoiceStack = [root];
    let bestChoiceIndex = -1;
    let bestChoiceArea = 0;
    let nodes = root.nodes;
    do {
        if (bestChoiceIndex !== -1) {
            bestChoiceStack.push(nodes[bestChoiceIndex]);
            nodes = nodes[bestChoiceIndex].nodes;
            bestChoiceIndex = -1;
        }
        for (let i = nodes.length - 1; i >= 0; i--) {
            const childItem = nodes[i];
            if (childItem.leaf) {
                bestChoiceIndex = -1;
                break;
            }
            const sx = Math.min(childItem.sx, itemData.sx);
            const sy = Math.min(childItem.sy, itemData.sy);
            const ex = Math.max(childItem.sx + childItem.w, itemData.sx + itemData.w);
            const ey = Math.max(childItem.sy + childItem.h, itemData.sy + itemData.h);
            const newW = ex - sx;
            const newH = ey - sy;
            const oldChildItemRatio = Rectangle_1.Rectangle.squarifiedRatio(childItem.w, childItem.h, childItem.nodes.length + 1);
            const newChildItemRatio = Rectangle_1.Rectangle.squarifiedRatio(newW, newH, childItem.nodes.length + 2);
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
    const n = pickLinear(nodes);
    while (nodes.length > 0) {
        pickNext(nodes, n[0], n[1], minWidth);
    }
    return n;
}
exports.linearSplit = linearSplit;
function pickLinear(nodes) {
    let indexLowestEndX = nodes.length - 1;
    let indexHighestStartX = 0;
    let indexLowestEndY = nodes.length - 1;
    let indexHighestStartY = 0;
    for (let i = nodes.length - 2; i >= 0; i--) {
        const childItem = nodes[i];
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
    const lowestEndX = nodes[indexLowestEndX].sx + nodes[indexLowestEndX].w;
    const lowestEndY = nodes[indexLowestEndY].sy + nodes[indexLowestEndY].h;
    const highestStartX = nodes[indexHighestStartX].sx;
    const highestStartY = nodes[indexHighestStartY].sy;
    const dx = Math.abs(lowestEndX - highestStartX);
    const dy = Math.abs(lowestEndY - highestStartY);
    let itemLowestEnd;
    let itemHighestStart;
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
    const areaA = Rectangle_1.Rectangle.squarifiedRatio(a.w, a.h, a.nodes.length + 1);
    const areaB = Rectangle_1.Rectangle.squarifiedRatio(b.w, b.h, b.nodes.length + 1);
    let highAreaDelta = undefined;
    let lowestGrowthGroup = null;
    let highAreaNodeIndex = -1;
    for (let i = nodes.length - 1; i >= 0; i--) {
        const item = nodes[i];
        const tempItemA = { sx: 0, sy: 0, ex: 0, ey: 0, w: 0, h: 0 };
        tempItemA.sx = Math.min(a.sx, item.sx);
        tempItemA.sy = Math.min(a.sy, item.sy);
        tempItemA.ex = Math.max(a.sx + a.w, item.sx + item.w);
        tempItemA.ey = Math.max(a.sy + a.h, item.sy + item.h);
        tempItemA.w = tempItemA.ex - tempItemA.sx;
        tempItemA.h = tempItemA.ey - tempItemA.sy;
        const tempItemAreaA = Rectangle_1.Rectangle.squarifiedRatio(tempItemA.w, tempItemA.h, a.nodes.length + 2);
        const changeTempAreaA = Math.abs(tempItemAreaA - areaA);
        /* ... */
        const tempItemB = { sx: 0, sy: 0, ex: 0, ey: 0, w: 0, h: 0 };
        tempItemB.sx = Math.min(b.sx, item.sx);
        tempItemB.sy = Math.min(b.sy, item.sy);
        tempItemB.ex = Math.max(b.sx + b.w, item.sx + item.w);
        tempItemB.ey = Math.max(b.sy + b.h, item.sy + item.h);
        tempItemB.w = tempItemB.ex - tempItemB.sx;
        tempItemB.h = tempItemB.ey - tempItemB.sy;
        const tempItemAreaB = Rectangle_1.Rectangle.squarifiedRatio(tempItemB.w, tempItemB.h, b.nodes.length + 2);
        const changeTempAreaB = Math.abs(tempItemAreaB - areaB);
        if (highAreaNodeIndex === -1 || typeof highAreaDelta === 'undefined' || Math.abs(changeTempAreaB - changeTempAreaA) <= highAreaDelta) {
            highAreaNodeIndex = i;
            highAreaDelta = Math.abs(changeTempAreaB - changeTempAreaA);
            lowestGrowthGroup = changeTempAreaB < changeTempAreaA ? b : a;
        }
    }
    const nodesInitLength = nodes.length;
    const dist = minWidth - nodesInitLength;
    const tempNode = nodes.splice(highAreaNodeIndex, 1)[0];
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
function searchSubtree(rect, root, isGetNodeDataOnly = true) {
    const result = [];
    if (!Rectangle_1.Rectangle.overlapRectangle(rect, root)) {
        return result;
    }
    const hitStack = [root.nodes];
    while (hitStack.length > 0) {
        const nodes = hitStack.pop();
        for (let i = nodes.length - 1; i >= 0; i--) {
            const itemTree = nodes[i];
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
    const result = [];
    let treesCopy = trees.slice();
    while (treesCopy.length) {
        const current = treesCopy.pop();
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
    let countDeleted = 0;
    let result = [];
    do {
        countDeleted = result.length;
        const removeResult = removeSubtree(rect, false, rootTree, minWidth, maxWidth, balanceChildOnDeleting);
        result = result.concat(removeResult);
    } while (countDeleted !== result.length);
    return result;
}
exports.removeArea = removeArea;
function removeObj(rect, targetOnLeaf, rootTree, minWidth, maxWidth, balanceChildOnDeleting) {
    const result = removeSubtree(rect, targetOnLeaf, rootTree, minWidth, maxWidth, balanceChildOnDeleting);
    return result;
}
exports.removeObj = removeObj;
function removeSubtree(rect, targetOnLeaf, root, minWidth, maxWidth, balanceChildOnDeleting) {
    let result = [];
    if (!rect || !Rectangle_1.Rectangle.overlapRectangle(rect, root)) {
        return result;
    }
    let handleItem = {
        sx: rect.sx,
        sy: rect.sy,
        w: rect.w,
        h: rect.h,
        target: targetOnLeaf,
    };
    let currentDepth = 1;
    let lastItemIndex = -1;
    let chooseStack = [root];
    let chooseChildIndexStack = [root.nodes.length - 1];
    let tree = null;
    let itemTree = null;
    while (chooseStack.length > 0) {
        tree = chooseStack.pop();
        lastItemIndex = chooseChildIndexStack.pop();
        if (handleItem.hasOwnProperty('target')) {
            while (lastItemIndex >= 0) {
                itemTree = tree.nodes[lastItemIndex];
                if (Rectangle_1.Rectangle.overlapRectangle(handleItem, itemTree)) {
                    const isConfirm = handleItem.target !== false
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
            for (let k = 0; k < handleItem.nodes.length; k++) {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_BLANK_DRALAYER_ID = void 0;
const Main_1 = __webpack_require__(/*! ./Main */ "./src/Main.ts");
const clock_1 = __webpack_require__(/*! ./$instance-case/modules/clock */ "./src/$instance-case/modules/clock.ts");
const floatWindow_1 = __webpack_require__(/*! ./$instance-case/utils/floatWindow */ "./src/$instance-case/utils/floatWindow.ts");
exports.DEFAULT_BLANK_DRALAYER_ID = '$0';
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const canvasContainer = document.getElementById('canvasContainer');
        const canvasElement = (0, Main_1.createCanvasElement)(canvasContainer);
        const floatWindowElement0 = (0, floatWindow_1.appendFloatContainerWindow)(document.body);
        floatWindow_1.iputsPanelControl.appendTo(floatWindowElement0);
        floatWindow_1.canvasPanelControl.appendTo(floatWindowElement0);
        floatWindow_1.resourceControl.appendTo(floatWindowElement0);
        floatWindow_1.profileControl.appendTo(floatWindowElement0);
        /* ... */
        const webCanvas = new Main_1.WebCanvas(canvasElement);
        yield webCanvas.init();
        return webCanvas;
    });
}
function mainHandle(webCanvas) {
    return __awaiter(this, void 0, void 0, function* () {
        const systemConfig = webCanvas.getSystemConfig();
        floatWindow_1.profileControl.update(systemConfig);
        /* ... */
        floatWindow_1.canvasPanelControl.update(webCanvas.getCanvasProfileData());
    });
}
function eventHandle(webCanvas) {
    const { canvasController, operationController } = webCanvas;
    webCanvas.addInputsChangedListener((data) => {
        floatWindow_1.iputsPanelControl.update(data);
    });
    webCanvas.addResourceChangedListener((data) => {
        floatWindow_1.resourceControl.update(data);
    });
    webCanvas.addCanvasProfileChangedListener((data) => {
        floatWindow_1.canvasPanelControl.update(data);
    });
    webCanvas.addSystemProfileListener((data) => {
        floatWindow_1.profileControl.update(data);
    });
    /* ... */
    floatWindow_1.profileControl.bindEvent((action, key, value) => {
        if (action === 'inputInput') {
            webCanvas.applySystemConfig(key, value);
            return;
        }
        if (action === 'resetCanvasView') {
            operationController.resetCanvasView();
            // messageTest01()
            // canvasController.zoomCanvas(5)
            return;
        }
    });
}
function messageHandle(webCanvas) {
    return __awaiter(this, void 0, void 0, function* () {
        const { drawLayerController, elementController, operationController } = webCanvas;
        Main_1.messageTool.messageBus.subscribe('toggleDrawMode', (params) => {
            const { cmd } = params;
            switch (cmd) {
                case 'DRAW_LINE': {
                    webCanvas.setDrawToolCommand(Main_1.DRAW_TOOL_COMMAND.LINE);
                    break;
                }
                case 'DRWA_CIRCLE': {
                    webCanvas.setDrawToolCommand(Main_1.DRAW_TOOL_COMMAND.CIRCLE);
                    break;
                }
                default:
            }
        });
        Main_1.messageTool.messageBus.subscribe('toggleActionMode', (params) => __awaiter(this, void 0, void 0, function* () {
            const { cmd, content, targetItemId } = params;
            switch (cmd) {
                case 'SET_SELECTION': {
                    webCanvas.setDrawToolCommand(Main_1.DRAW_TOOL_COMMAND.BLANK_DROP);
                    break;
                }
                case 'DO_COPY': {
                    console.log(`暂未支持此操作.`);
                    break;
                }
                case 'DO_UNDO': {
                    operationController.undo();
                    break;
                }
                case 'DO_REDO': {
                    operationController.redo();
                    break;
                }
                case 'EXPORT': {
                    const canvasFileData = webCanvas.createExportFileData();
                    yield Main_1.messageTool.windowMessageBridge.asyncRequest(`createCanvasFileData`, { canvasFileData }, window.top);
                    break;
                }
                case 'IMPORT': {
                    webCanvas.refreshByImportFileData({ dataStr: content });
                    break;
                }
                case 'DO_DELETE': {
                    const allSelectedElementIds = elementController
                        .getAllSelectedElementResults()
                        .map((item) => {
                        return item.elementItemId;
                    });
                    const commandGroupId = String(performance.now());
                    allSelectedElementIds.forEach((idItem) => {
                        operationController.addHistroyRecord(idItem, Main_1.HistroyCommandAction.DELETE, commandGroupId);
                        elementController.deleteShapeItemById(idItem);
                    });
                    allSelectedElementIds.length = 0;
                    break;
                }
                case 'CLEAR_DRAWLAYER_ELEMENTS': {
                    drawLayerController.deleteDrawLayerElements(targetItemId);
                    break;
                }
                case 'CLEAR_CANVAS_ELEMENTS': {
                    const allDrawLayers = drawLayerController.getAllDrawLayerResults();
                    allDrawLayers.forEach((item) => {
                        drawLayerController.deleteDrawLayerElements(item.layerItemId);
                    });
                    break;
                }
                case 'RESET_CANVAS': {
                    operationController.resetCanvasContent().then(() => {
                        console.log(`已清除画布所有内容.`);
                    });
                    break;
                }
                default:
            }
        }));
        Main_1.messageTool.messageBus.subscribe('toggleDrawLayerMode', (params) => {
            const { cmd, targetItemId } = params;
            switch (cmd) {
                case 'CREATE_DRAWLAYER_ITEM': {
                    drawLayerController.createDrawLayerShapeItem(`drawlayer-${(0, Main_1.getHashIden)(5)}`);
                    break;
                }
                case 'DELETE_DRAWLAYER_ITEM': {
                    if (targetItemId) {
                        drawLayerController.deleteDrawLayerShapeItem(targetItemId);
                    }
                    break;
                }
                case 'SWITCH_ACTIVE_DRAWLAYER_ITEM': {
                    if (targetItemId === exports.DEFAULT_BLANK_DRALAYER_ID) {
                        drawLayerController.clearAllSelectedDrawLayers();
                    }
                    else {
                        drawLayerController.setActiveDrawLayerShapeItem(targetItemId);
                    }
                    break;
                }
                default:
            }
        });
        /* ... */
        webCanvas.addOperationProfileListener((params) => __awaiter(this, void 0, void 0, function* () {
            const { action, allDrawLayers, targetItemId } = params;
            const disabledItems = [];
            if (!operationController.hasHistoryUndoRecord()) {
                disabledItems.push('DO_UNDO');
            }
            if (!operationController.hasHistoryRedoRecord()) {
                disabledItems.push('DO_REDO');
            }
            yield Main_1.messageTool.windowMessageBridge.asyncRequest(`updateOperationPlaneItemStatus`, {
                disabledItems,
            }, window.top);
            switch (action) {
                case Main_1.OPERATION_ACRION.CREATED_DRAWLAYER: {
                    yield Main_1.messageTool.windowMessageBridge.asyncRequest(`updateDrawLayerListOptions`, {
                        allDrawLayers,
                        selectedDrawLayerItemId: typeof targetItemId === 'undefined' ? exports.DEFAULT_BLANK_DRALAYER_ID : targetItemId,
                    }, window.top);
                    break;
                }
                case Main_1.OPERATION_ACRION.REFRESH_DRAWLAYER: {
                    const allDrawLayers = drawLayerController.getAllDrawLayerResults();
                    yield Main_1.messageTool.windowMessageBridge.asyncRequest(`updateDrawLayerListOptions`, {
                        allDrawLayers,
                        selectedDrawLayerItemId: typeof targetItemId === 'undefined' ? exports.DEFAULT_BLANK_DRALAYER_ID : targetItemId,
                    }, window.top);
                    break;
                }
                case Main_1.OPERATION_ACRION.DELETED_DRAWLAYER: {
                    yield Main_1.messageTool.windowMessageBridge.asyncRequest(`updateDrawLayerListOptions`, {
                        allDrawLayers,
                        selectedDrawLayerItemId: typeof targetItemId === 'undefined' ? exports.DEFAULT_BLANK_DRALAYER_ID : targetItemId,
                    }, window.top);
                    break;
                }
                case Main_1.OPERATION_ACRION.SWITCH_ACTIVE_DRAWLAYER: {
                    const allDrawLayers = drawLayerController.getAllDrawLayerResults();
                    yield Main_1.messageTool.windowMessageBridge.asyncRequest(`updateDrawLayerListOptions`, {
                        allDrawLayers,
                        selectedDrawLayerItemId: typeof targetItemId === 'undefined' ? exports.DEFAULT_BLANK_DRALAYER_ID : targetItemId,
                    }, window.top);
                    break;
                }
                case Main_1.OPERATION_ACRION.CLEAR_ALL_ACTIVE_DRAWLAYER: {
                    const allDrawLayers = drawLayerController.getAllDrawLayerResults();
                    yield Main_1.messageTool.windowMessageBridge.asyncRequest(`updateDrawLayerListOptions`, {
                        allDrawLayers,
                        selectedDrawLayerItemId: exports.DEFAULT_BLANK_DRALAYER_ID,
                    }, window.top);
                    break;
                }
                case Main_1.OPERATION_ACRION.CLEAR_ALL_DRAWLAYER_ELEMENTS: {
                    break;
                }
                default:
            }
        }));
    });
}
window.addEventListener('DOMContentLoaded', () => {
    init().then((webCanvas) => __awaiter(void 0, void 0, void 0, function* () {
        eventHandle(webCanvas);
        messageHandle(webCanvas);
        mainHandle(webCanvas);
        yield Main_1.messageTool.windowMessageBridge.asyncRequest(`CANVAS_READY`, { ready: true }, window.top);
        (0, clock_1.drawClockInit)(webCanvas);
        // drawTestLine(webCanvas)
        // drawTestCircle(webCanvas)
        console.log(webCanvas);
    }));
});


/***/ }),

/***/ "./src/objects/assist/AssistLineShape.ts":
/*!***********************************************!*\
  !*** ./src/objects/assist/AssistLineShape.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssistLineShape = exports.buildAssistLineShape = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const LineModel_1 = __webpack_require__(/*! ../models/items/LineModel */ "./src/objects/models/items/LineModel.ts");
const LineShape_1 = __webpack_require__(/*! ../shapes/items/LineShape */ "./src/objects/shapes/items/LineShape.ts");
function buildAssistLineShape(layerItemId, startPoint, endPoint, isSolid = true, parent = null) {
    const lineModelItem = (0, LineModel_1.buildLineModel)(layerItemId, startPoint, endPoint, 1);
    const assistLineShapeItem = new AssistLineShape(lineModelItem, isSolid, parent);
    return assistLineShapeItem;
}
exports.buildAssistLineShape = buildAssistLineShape;
class AssistLineShape extends LineShape_1.LineShape {
    constructor(model, isSolid = true, parent = null) {
        super(model);
        this._fixedPixelWidth = 1;
        this.solid = isSolid;
        this._parent = parent;
        this.refreshRender();
    }
    get fixedPixelWidth() {
        return this._fixedPixelWidth;
    }
    set fixedPixelWidth(value) {
        this._fixedPixelWidth = value;
        this.refreshRender();
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this.parent = value;
    }
    getType() {
        return ElementProfile_1.EElementType.AssistLine;
    }
    getStatus() {
        return this.status;
    }
    toJSON() {
        const itemModel = this.model;
        return {
            type: this.getType(),
            modelType: this.model.modelType,
            status: this.status,
            layerItemId: itemModel.layerItemId,
            elementItemId: itemModel.elementItemId,
            elementItemName: itemModel.elementItemName,
            startPoint: itemModel.startPoint.toJSON(),
            endPoint: itemModel.endPoint.toJSON(),
            strokeWidth: itemModel.strokeWidth,
            strokeColor: itemModel.strokeColor.toRGBAJSON(),
            lineCap: itemModel.lineCap,
            isSolid: itemModel.solid,
            fixedPixelWidth: this.fixedPixelWidth,
        };
    }
}
exports.AssistLineShape = AssistLineShape;


/***/ }),

/***/ "./src/objects/assist/AssistPointShape.ts":
/*!************************************************!*\
  !*** ./src/objects/assist/AssistPointShape.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssistPointShape = exports.buildAssistPointShape = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const Vector2_1 = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
const CircleModel_1 = __webpack_require__(/*! ../models/items/CircleModel */ "./src/objects/models/items/CircleModel.ts");
const CircleShape_1 = __webpack_require__(/*! ../shapes/items/CircleShape */ "./src/objects/shapes/items/CircleShape.ts");
function buildAssistPointShape(layerItemId, centerPoint, parent = null) {
    const lineModelItem = (0, CircleModel_1.buildCircleModel)(layerItemId, centerPoint, 1);
    const assistLineShapeItem = new AssistPointShape(lineModelItem, parent);
    return assistLineShapeItem;
}
exports.buildAssistPointShape = buildAssistPointShape;
class AssistPointShape extends CircleShape_1.CircleShape {
    constructor(model, parent = null) {
        super(model);
        this.strokeColor = Color_1.Color.GREEN;
        this.fillColor = Color_1.Color.GREEN;
        this.strokeWidth = 0.5;
        this.solid = true;
        this._parent = parent;
        this.refreshRender();
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this.parent = value;
    }
    isSelect(x, y) {
        const point = new Vector2_1.Vector2(x, y);
        const centerPoint = this.centerPoint;
        const distOfClickPointAndCenterPoint = point.sub(centerPoint).length;
        if (distOfClickPointAndCenterPoint <= this.radius + this.strokeWidth / 2) {
            return true;
        }
        return false;
    }
    getType() {
        return ElementProfile_1.EElementType.AssistCircle;
    }
    getStatus() {
        return this.status;
    }
    toJSON() {
        const itemModel = this.model;
        return {
            type: this.getType(),
            modelType: this.model.modelType,
            status: this.status,
            layerItemId: itemModel.layerItemId,
            elementItemId: itemModel.elementItemId,
            elementItemName: itemModel.elementItemName,
            centerPoint: itemModel.centerPoint.toJSON(),
            strokeWidth: itemModel.strokeWidth,
            strokeColor: itemModel.strokeColor.toRGBAJSON(),
            fillColor: itemModel.fillColor.toRGBAJSON(),
            lineCap: itemModel.lineCap,
            isSolid: itemModel.solid,
            radius: itemModel.radius,
        };
    }
}
exports.AssistPointShape = AssistPointShape;


/***/ }),

/***/ "./src/objects/base/Manage.ts":
/*!************************************!*\
  !*** ./src/objects/base/Manage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Manager = void 0;
class Manager {
    constructor() {
        this._items = new Map();
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    getAllItems() {
        const allItems = new Array(this.items.size);
        const items = this.items.values();
        let i = 0;
        for (let item of items) {
            allItems[i++] = item;
        }
        return allItems;
    }
    getItemById(gId) {
        return this.items.get(gId);
    }
}
exports.Manager = Manager;


/***/ }),

/***/ "./src/objects/models/items/CircleModel.ts":
/*!*************************************************!*\
  !*** ./src/objects/models/items/CircleModel.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleModel = exports.buildCircleModel = exports.ECircleModelBufferOffset = void 0;
const Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const ElementModelItemBase_1 = __webpack_require__(/*! ./elementBase/ElementModelItemBase */ "./src/objects/models/items/elementBase/ElementModelItemBase.ts");
const ElementProfile_1 = __webpack_require__(/*! ../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
const StructLine_1 = __webpack_require__(/*! ../../../geometry/StructLine */ "./src/geometry/StructLine.ts");
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const Circle_Utils_1 = __webpack_require__(/*! ../../../utils/geometry/Circle.Utils */ "./src/utils/geometry/Circle.Utils.ts");
const Utils_1 = __webpack_require__(/*! ../../../utils/Utils */ "./src/utils/Utils.ts");
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
function buildCircleModel(layerItemId, centerPoint, radius, strokeWidth = 1, strokeColor = Color_1.Color.BLACK, fillColor = Color_1.Color.createByAlpha(0)) {
    const elementItemId = Constant_1.globalIdenManager.getElementIden();
    const elementModelItem = new CircleModel(elementItemId, layerItemId, centerPoint.x, centerPoint.y, radius, strokeWidth, strokeColor, fillColor);
    return elementModelItem;
}
exports.buildCircleModel = buildCircleModel;
class CircleModel extends ElementModelItemBase_1.ElementModelItemBase {
    constructor(elementItemId, layerItemId, centerX, centerY, radius, strokeWidth, strokeColor = new Color_1.Color(0, 0, 0, 1), fillColor = new Color_1.Color(0, 0, 0, 0), lineCap = 'round', isSolid = true, bbox2) {
        super(elementItemId, layerItemId);
        this.modelType = ElementProfile_1.EElementType.Circle;
        this.buffer = new Float64Array(ECircleModelBufferOffset.$end + 4);
        this.buffer[ECircleModelBufferOffset.CENTER_X] = centerX;
        this.buffer[ECircleModelBufferOffset.CENTER_Y] = centerY;
        this.buffer[ECircleModelBufferOffset.RADIUS] = radius;
        this.buffer[ECircleModelBufferOffset.SKROKE_WIDTH] = strokeWidth;
        this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_R] = strokeColor.red;
        this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_G] = strokeColor.green;
        this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_B] = strokeColor.blue;
        this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_A] = strokeColor.alpha;
        this.buffer[ECircleModelBufferOffset.FILL_COLOR_R] = fillColor.red;
        this.buffer[ECircleModelBufferOffset.FILL_COLOR_G] = fillColor.green;
        this.buffer[ECircleModelBufferOffset.FILL_COLOR_B] = fillColor.blue;
        this.buffer[ECircleModelBufferOffset.FILL_COLOR_A] = fillColor.alpha;
        this.buffer[ECircleModelBufferOffset.LINE_CAP] = (0, Utils_1.setLineCap2Code)(lineCap);
        this.buffer[ECircleModelBufferOffset.SOLID] = isSolid ? 1 : 0;
        if (!bbox2) {
            this.bbox2 = (0, Circle_Utils_1.createCircleBbox2)(new Vector2_1.Vector2(centerX, centerY), radius, strokeWidth);
        }
    }
    get centerPoint() {
        return new Vector2_1.Vector2(this.buffer[ECircleModelBufferOffset.CENTER_X], this.buffer[ECircleModelBufferOffset.CENTER_Y]);
    }
    set centerPoint(value) {
        this.buffer[ECircleModelBufferOffset.CENTER_X] = value.x;
        this.buffer[ECircleModelBufferOffset.CENTER_Y] = value.y;
    }
    get radius() {
        return this.buffer[ECircleModelBufferOffset.RADIUS];
    }
    set radius(value) {
        this.buffer[ECircleModelBufferOffset.RADIUS] = value;
    }
    get strokeWidth() {
        return this.buffer[ECircleModelBufferOffset.SKROKE_WIDTH];
    }
    set strokeWidth(value) {
        this.buffer[ECircleModelBufferOffset.SKROKE_WIDTH] = value;
    }
    get strokeColor() {
        const red = this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_R];
        const green = this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_G];
        const blue = this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_B];
        const alpha = this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_A];
        return new Color_1.Color(red, green, blue, alpha);
    }
    set strokeColor(value) {
        this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_R] = value.red;
        this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_G] = value.green;
        this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_B] = value.blue;
        this.buffer[ECircleModelBufferOffset.SKROKE_COLOR_A] = value.alpha;
    }
    get fillColor() {
        const red = this.buffer[ECircleModelBufferOffset.FILL_COLOR_R];
        const green = this.buffer[ECircleModelBufferOffset.FILL_COLOR_G];
        const blue = this.buffer[ECircleModelBufferOffset.FILL_COLOR_B];
        const alpha = this.buffer[ECircleModelBufferOffset.FILL_COLOR_A];
        return new Color_1.Color(red, green, blue, alpha);
    }
    set fillColor(value) {
        this.buffer[ECircleModelBufferOffset.FILL_COLOR_R] = value.red;
        this.buffer[ECircleModelBufferOffset.FILL_COLOR_G] = value.green;
        this.buffer[ECircleModelBufferOffset.FILL_COLOR_B] = value.blue;
        this.buffer[ECircleModelBufferOffset.FILL_COLOR_A] = value.alpha;
    }
    get lineCap() {
        return (0, Utils_1.setCodeCap2LineCap)(this.buffer[ECircleModelBufferOffset.LINE_CAP]);
    }
    set lineCap(value) {
        this.buffer[ECircleModelBufferOffset.LINE_CAP] = (0, Utils_1.setLineCap2Code)(value);
    }
    get solid() {
        return this.buffer[ECircleModelBufferOffset.SOLID] === 1;
    }
    set solid(value) {
        this.buffer[ECircleModelBufferOffset.SOLID] = value ? 1 : 0;
    }
    get element() {
        return new StructLine_1.StructLine(new Vector2_1.Vector2(0, 0), new Vector2_1.Vector2(0, 0));
    }
    getBBox2() {
        return this.bbox2;
    }
    updateBBox2() {
        this.bbox2 = (0, Circle_Utils_1.createCircleBbox2)(this.centerPoint, this.radius, this.strokeWidth);
        return this.bbox2;
    }
    isInGraphical(x, y) {
        const clickPointVector2 = new Vector2_1.Vector2(x, y);
        const centerPoint = this.centerPoint;
        const distOfClickPointAndCenterPoint = clickPointVector2.sub(centerPoint).length;
        if (this.isFill()) {
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
    }
    isFill() {
        return this.fillColor.alpha > 0;
    }
}
exports.CircleModel = CircleModel;


/***/ }),

/***/ "./src/objects/models/items/DrawLayerModel.ts":
/*!****************************************************!*\
  !*** ./src/objects/models/items/DrawLayerModel.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerModel = void 0;
const DrawLayerBaseItemModel_1 = __webpack_require__(/*! ./drawLayerBase/DrawLayerBaseItemModel */ "./src/objects/models/items/drawLayerBase/DrawLayerBaseItemModel.ts");
class DrawLayerModel extends DrawLayerBaseItemModel_1.DrawLayerBaseItemModel {
    constructor(layerItemId, layerItemName, layerItemType) {
        super(layerItemId, layerItemName, layerItemType);
    }
}
exports.DrawLayerModel = DrawLayerModel;


/***/ }),

/***/ "./src/objects/models/items/LineModel.ts":
/*!***********************************************!*\
  !*** ./src/objects/models/items/LineModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineModel = exports.buildLineModel = exports.ELineModelBufferOffset = void 0;
const Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const ElementModelItemBase_1 = __webpack_require__(/*! ./elementBase/ElementModelItemBase */ "./src/objects/models/items/elementBase/ElementModelItemBase.ts");
const ElementProfile_1 = __webpack_require__(/*! ../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
const StructLine_1 = __webpack_require__(/*! ../../../geometry/StructLine */ "./src/geometry/StructLine.ts");
const Line_Utils_1 = __webpack_require__(/*! ../../../utils/geometry/Line.Utils */ "./src/utils/geometry/Line.Utils.ts");
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const Utils_1 = __webpack_require__(/*! ../../../utils/Utils */ "./src/utils/Utils.ts");
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
function buildLineModel(layerItemId, startPoint, endPoint, strokeWidth = 1, strokeColor = Color_1.Color.BLACK) {
    const elementItemId = Constant_1.globalIdenManager.getElementIden();
    const elementModelItem = new LineModel(elementItemId, layerItemId, startPoint.x, startPoint.y, endPoint.x, endPoint.y, strokeWidth, strokeColor);
    return elementModelItem;
}
exports.buildLineModel = buildLineModel;
class LineModel extends ElementModelItemBase_1.ElementModelItemBase {
    constructor(elementItemId, layerItemId, startX, startY, endX, endY, strokeWidth = 1, strokeColor = new Color_1.Color(0, 0, 0, 1), lineCap = 'round', isSolid = true, bbox2) {
        super(elementItemId, layerItemId);
        this.modelType = ElementProfile_1.EElementType.Line;
        this.buffer = new Float64Array(ELineModelBufferOffset.$end + 4);
        this.buffer[ELineModelBufferOffset.START_X] = startX;
        this.buffer[ELineModelBufferOffset.START_Y] = startY;
        this.buffer[ELineModelBufferOffset.END_X] = endX;
        this.buffer[ELineModelBufferOffset.END_Y] = endY;
        this.buffer[ELineModelBufferOffset.STROKE_WIDTH] = strokeWidth;
        this.buffer[ELineModelBufferOffset.STROKE_COLOR_R] = strokeColor.red;
        this.buffer[ELineModelBufferOffset.STROKE_COLOR_G] = strokeColor.green;
        this.buffer[ELineModelBufferOffset.STROKE_COLOR_B] = strokeColor.blue;
        this.buffer[ELineModelBufferOffset.STROKE_COLOR_A] = strokeColor.alpha;
        this.buffer[ELineModelBufferOffset.LINE_CAP] = (0, Utils_1.setLineCap2Code)(lineCap);
        this.buffer[ELineModelBufferOffset.SOLID] = isSolid ? 1 : 0;
        if (!bbox2) {
            this.bbox2 = (0, Line_Utils_1.createLineBbox2)(new Vector2_1.Vector2(startX, startY), new Vector2_1.Vector2(endX, endY), strokeWidth);
        }
    }
    get startPoint() {
        return new Vector2_1.Vector2(this.buffer[ELineModelBufferOffset.START_X], this.buffer[ELineModelBufferOffset.START_Y]);
    }
    set startPoint(value) {
        this.buffer[ELineModelBufferOffset.START_X] = value.x;
        this.buffer[ELineModelBufferOffset.START_Y] = value.y;
    }
    get endPoint() {
        return new Vector2_1.Vector2(this.buffer[ELineModelBufferOffset.END_X], this.buffer[ELineModelBufferOffset.END_Y]);
    }
    set endPoint(value) {
        this.buffer[ELineModelBufferOffset.END_X] = value.x;
        this.buffer[ELineModelBufferOffset.END_Y] = value.y;
    }
    get strokeWidth() {
        return this.buffer[ELineModelBufferOffset.STROKE_WIDTH];
    }
    set strokeWidth(value) {
        this.buffer[ELineModelBufferOffset.STROKE_WIDTH] = value;
    }
    get length() {
        return this.startPoint.distance(this.endPoint);
    }
    set length(value) {
        const direct = this.endPoint.sub(this.startPoint).normalize();
        const endPoint = this.startPoint.add(direct.mul(value));
        this.endPoint = endPoint;
    }
    get direct() {
        return this.endPoint.sub(this.startPoint).normalize();
    }
    get strokeColor() {
        const red = this.buffer[ELineModelBufferOffset.STROKE_COLOR_R];
        const green = this.buffer[ELineModelBufferOffset.STROKE_COLOR_G];
        const blue = this.buffer[ELineModelBufferOffset.STROKE_COLOR_B];
        const alpha = this.buffer[ELineModelBufferOffset.STROKE_COLOR_A];
        return new Color_1.Color(red, green, blue, alpha);
    }
    set strokeColor(value) {
        this.buffer[ELineModelBufferOffset.STROKE_COLOR_R] = value.red;
        this.buffer[ELineModelBufferOffset.STROKE_COLOR_G] = value.green;
        this.buffer[ELineModelBufferOffset.STROKE_COLOR_B] = value.blue;
        this.buffer[ELineModelBufferOffset.STROKE_COLOR_A] = value.alpha;
    }
    get centerPoint() {
        const startPoint = this.startPoint;
        const endPoint = this.endPoint;
        return new Vector2_1.Vector2((endPoint.x - startPoint.x) / 2, (endPoint.y - startPoint.y) / 2);
    }
    get lineCap() {
        return (0, Utils_1.setCodeCap2LineCap)(this.buffer[ELineModelBufferOffset.LINE_CAP]);
    }
    set lineCap(value) {
        this.buffer[ELineModelBufferOffset.LINE_CAP] = (0, Utils_1.setLineCap2Code)(value);
    }
    get solid() {
        return this.buffer[ELineModelBufferOffset.SOLID] === 1;
    }
    set solid(value) {
        this.buffer[ELineModelBufferOffset.SOLID] = value ? 1 : 0;
    }
    get element() {
        return new StructLine_1.StructLine(this.startPoint, this.endPoint);
    }
    getBBox2() {
        return this.bbox2;
    }
    updateBBox2() {
        this.bbox2 = (0, Line_Utils_1.createLineBbox2)(this.startPoint, this.endPoint, this.buffer[ELineModelBufferOffset.STROKE_WIDTH]);
        return this.bbox2;
    }
    isInGraphical(x, y) {
        const strokeWidth = this.strokeWidth;
        const dStartPointx = x - this.startPoint.x;
        const dStartPointy = y - this.startPoint.y;
        const dEndPointx = x - this.endPoint.x;
        const dEndPointy = y - this.endPoint.y;
        const dWidth = this.endPoint.x - this.startPoint.x;
        const dHeight = this.endPoint.y - this.startPoint.y;
        const vertical = new Vector2_1.Vector2(-dHeight, dWidth).normalize();
        const limitX = dWidth + (vertical.x * strokeWidth) / 2;
        const limitY = dHeight + (vertical.y * strokeWidth) / 2;
        const limit = limitX * limitX + limitY * limitY;
        const sumSquStart = dStartPointx * dStartPointx + dStartPointy * dStartPointy;
        const sumSquEnd = dEndPointx * dEndPointx + dEndPointy * dEndPointy;
        const area = Math.abs(dStartPointx * dHeight - dStartPointy * dWidth) / 2;
        const length = Math.sqrt(dWidth * dWidth + dHeight * dHeight);
        const areaContent = (length * strokeWidth) / 4;
        if (area <= areaContent && sumSquStart <= limit && sumSquEnd <= limit) {
            return true;
        }
        const r = strokeWidth / 2;
        if (sumSquStart <= r * r) {
            return true;
        }
        if (sumSquEnd <= r * r) {
            return true;
        }
        return false;
    }
}
exports.LineModel = LineModel;


/***/ }),

/***/ "./src/objects/models/items/drawLayerBase/DrawLayerBaseItemModel.ts":
/*!**************************************************************************!*\
  !*** ./src/objects/models/items/drawLayerBase/DrawLayerBaseItemModel.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerBaseItemModel = void 0;
class DrawLayerBaseItemModel {
    constructor(layerItemId, layerItemName, layerItemType) {
        this._layerItemType = undefined;
        this._layerItemName = layerItemName;
        this._layerItemOpacity = 1;
        this._groupId = undefined;
        this._layerItemId = layerItemId;
        this._layerItemType = layerItemType;
    }
    get layerItemType() {
        return this._layerItemType;
    }
    set layerItemType(value) {
        this._layerItemType = value;
    }
    get layerItemName() {
        return this._layerItemName;
    }
    set layerItemName(value) {
        this._layerItemName = value;
    }
    get layerItemOpacity() {
        return this._layerItemOpacity;
    }
    set layerItemOpacity(value) {
        this._layerItemOpacity = value;
    }
    get groupId() {
        return this._groupId;
    }
    set groupId(value) {
        this._groupId = value;
    }
    get layerItemId() {
        return this._layerItemId;
    }
    set layerItemId(value) {
        this._layerItemId = value;
    }
}
exports.DrawLayerBaseItemModel = DrawLayerBaseItemModel;


/***/ }),

/***/ "./src/objects/models/items/elementBase/ElementModelBase.ts":
/*!******************************************************************!*\
  !*** ./src/objects/models/items/elementBase/ElementModelBase.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementModelBase = void 0;
class ElementModelBase {
    constructor() { }
}
exports.ElementModelBase = ElementModelBase;


/***/ }),

/***/ "./src/objects/models/items/elementBase/ElementModelItemBase.ts":
/*!**********************************************************************!*\
  !*** ./src/objects/models/items/elementBase/ElementModelItemBase.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementModelItemBase = void 0;
const ElementModelBase_1 = __webpack_require__(/*! ./ElementModelBase */ "./src/objects/models/items/elementBase/ElementModelBase.ts");
class ElementModelItemBase extends ElementModelBase_1.ElementModelBase {
    constructor(elementItemId, layerItemId) {
        super();
        this._elementItemId = elementItemId;
        this._elementItemName = '';
        this._groupId = undefined;
        this._parent = null;
        this._buffer = undefined;
        this._visible = true;
        this._layerItemId = layerItemId;
        this._bbox2 = null;
    }
    get elementItemName() {
        return this._elementItemName;
    }
    set elementItemName(value) {
        this._elementItemName = value;
    }
    get elementItemId() {
        return this._elementItemId;
    }
    set elementItemId(value) {
        this._elementItemId = value;
    }
    get groupId() {
        return this._groupId;
    }
    set groupId(value) {
        this._groupId = value;
    }
    get parent() {
        return this._parent;
    }
    set parent(value) {
        this._parent = value;
    }
    get buffer() {
        return this._buffer;
    }
    set buffer(value) {
        this._buffer = value;
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
    }
    get modelType() {
        return this._modelType;
    }
    set modelType(value) {
        this._modelType = value;
    }
    get layerItemId() {
        return this._layerItemId;
    }
    set layerItemId(value) {
        this._layerItemId = value;
    }
    get bbox2() {
        return this._bbox2;
    }
    set bbox2(value) {
        this._bbox2 = value;
    }
    updateBuffer(offset, data) {
        if (this.buffer) {
            this.buffer.set(data, offset);
        }
    }
}
exports.ElementModelItemBase = ElementModelItemBase;


/***/ }),

/***/ "./src/objects/models/manager/CircleModelManager.ts":
/*!**********************************************************!*\
  !*** ./src/objects/models/manager/CircleModelManager.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleModelManager = void 0;
const Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
const CircleModel_1 = __webpack_require__(/*! ../items/CircleModel */ "./src/objects/models/items/CircleModel.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
class CircleModelManager extends Manage_1.Manager {
    static getInstance() {
        if (CircleModelManager.thisInstance === undefined) {
            CircleModelManager.thisInstance = new CircleModelManager();
        }
        return CircleModelManager.thisInstance;
    }
    constructor() {
        super();
    }
    createModelItem(elementItemId, layerItemId, centerPoint, radius, strokeWidth = 1, strokeColor = Color_1.Color.BLACK, fillColor = Color_1.Color.createByAlpha(0)) {
        const elementModelItem = new CircleModel_1.CircleModel(elementItemId, layerItemId, centerPoint.x, centerPoint.y, radius, strokeWidth, strokeColor, fillColor);
        this.items.set(elementModelItem.elementItemId, elementModelItem);
        return elementModelItem;
    }
    deleteModelItem(elementItemId) {
        const elementModelItem = this.items.get(elementItemId);
        if (!elementModelItem) {
            return;
        }
        this.items.delete(elementModelItem.elementItemId);
    }
}
exports.CircleModelManager = CircleModelManager;


/***/ }),

/***/ "./src/objects/models/manager/DrawLayerModelManager.ts":
/*!*************************************************************!*\
  !*** ./src/objects/models/manager/DrawLayerModelManager.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerModelManager = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../../../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
const DrawLayerModel_1 = __webpack_require__(/*! ../items/DrawLayerModel */ "./src/objects/models/items/DrawLayerModel.ts");
class DrawLayerModelManager extends Manage_1.Manager {
    static getInstance() {
        if (DrawLayerModelManager.thisInstance === undefined) {
            DrawLayerModelManager.thisInstance = new DrawLayerModelManager();
        }
        return DrawLayerModelManager.thisInstance;
    }
    constructor() {
        super();
    }
    createControlItem(layerItemName) {
        const newLayerModelItem = new DrawLayerModel_1.DrawLayerModel(DrawLayerProfile_1.EDrawLayerCode.MaskLayer, layerItemName, DrawLayerProfile_1.EDrawLayerType.ControlDrawLayer);
        this.items.set(newLayerModelItem.layerItemId, newLayerModelItem);
        return newLayerModelItem;
    }
    createContentItem(layerItemName) {
        const newLayerModelItem = new DrawLayerModel_1.DrawLayerModel(Constant_1.globalIdenManager.getHashIden(), layerItemName, DrawLayerProfile_1.EDrawLayerType.ContentDrawLayer);
        this.items.set(newLayerModelItem.layerItemId, newLayerModelItem);
        return newLayerModelItem;
    }
}
exports.DrawLayerModelManager = DrawLayerModelManager;


/***/ }),

/***/ "./src/objects/models/manager/LineModelManager.ts":
/*!********************************************************!*\
  !*** ./src/objects/models/manager/LineModelManager.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineModelManager = void 0;
const Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
const LineModel_1 = __webpack_require__(/*! ../items/LineModel */ "./src/objects/models/items/LineModel.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
class LineModelManager extends Manage_1.Manager {
    static getInstance() {
        if (LineModelManager.thisInstance === undefined) {
            LineModelManager.thisInstance = new LineModelManager();
        }
        return LineModelManager.thisInstance;
    }
    constructor() {
        super();
    }
    createModelItem(elementItemId, layerItemId, startPoint, endPoint, strokeWidth = 1, strokeColor = Color_1.Color.BLACK) {
        const elementModelItem = new LineModel_1.LineModel(elementItemId, layerItemId, startPoint.x, startPoint.y, endPoint.x, endPoint.y, strokeWidth, strokeColor);
        this.items.set(elementModelItem.elementItemId, elementModelItem);
        return elementModelItem;
    }
    deleteModelItem(elementItemId) {
        const elementModelItem = this.items.get(elementItemId);
        if (!elementModelItem) {
            return;
        }
        this.items.delete(elementModelItem.elementItemId);
    }
}
exports.LineModelManager = LineModelManager;


/***/ }),

/***/ "./src/objects/shapes/items/CircleShape.ts":
/*!*************************************************!*\
  !*** ./src/objects/shapes/items/CircleShape.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShape = exports.buildCircleShape = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
const ElementShapeItemBase_1 = __webpack_require__(/*! ./elementBase/ElementShapeItemBase */ "./src/objects/shapes/items/elementBase/ElementShapeItemBase.ts");
const CircleModel_1 = __webpack_require__(/*! ../../models/items/CircleModel */ "./src/objects/models/items/CircleModel.ts");
function buildCircleShape(layerItemId, centerPoint, radius, strokeWidth = 1, strokeColor = Color_1.Color.BLACK, fillColor = Color_1.Color.createByAlpha(0)) {
    const elementModelItem = (0, CircleModel_1.buildCircleModel)(layerItemId, centerPoint, radius, strokeWidth, strokeColor, fillColor);
    const elementShapeItem = new CircleShape(elementModelItem);
    return elementShapeItem;
}
exports.buildCircleShape = buildCircleShape;
class CircleShape extends ElementShapeItemBase_1.ElementShapeItemBase {
    constructor(model) {
        super();
        this.model = model;
        this.refreshRender();
    }
    get elementItemName() {
        return this.model.elementItemName;
    }
    set elementItemName(value) {
        ;
        this.model.elementItemName = value;
        this.refreshRender();
    }
    get centerPoint() {
        return this.model.centerPoint;
    }
    set centerPoint(value) {
        ;
        this.model.centerPoint = value;
        this.refreshRender();
    }
    get radius() {
        return this.model.radius;
    }
    set radius(value) {
        if (value < 0) {
            value = -value;
        }
        ;
        this.model.radius = value;
        this.refreshRender();
    }
    get strokeWidth() {
        return this.model.strokeWidth;
    }
    set strokeWidth(value) {
        ;
        this.model.strokeWidth = value;
        this.refreshRender();
    }
    get strokeColor() {
        return this.model.strokeColor;
    }
    set strokeColor(value) {
        ;
        this.model.strokeColor = value;
        this.refreshRender();
    }
    get fillColor() {
        return this.model.fillColor;
    }
    set fillColor(value) {
        ;
        this.model.fillColor = value;
        this.refreshRender();
    }
    get lineCap() {
        return this.model.lineCap;
    }
    set lineCap(value) {
        ;
        this.model.lineCap = value;
        this.refreshRender();
    }
    get solid() {
        return this.model.solid;
    }
    set solid(value) {
        ;
        this.model.solid = value;
        this.refreshRender();
    }
    isSelect(x, y) {
        return this.model.isInGraphical(x, y);
    }
    transform(value) {
        const centerPoint = this.centerPoint.multiplyMatrix4(value);
        this.centerPoint = centerPoint;
        this.refreshRender();
    }
    updateRadius(x, y) {
        const point = new Vector2_1.Vector2(x, y);
        const centerPoint = this.centerPoint;
        const distOfClickPointAndCenterPoint = point.sub(centerPoint).length;
        this.radius = distOfClickPointAndCenterPoint;
    }
    removeFill() {
        this.fillColor = Color_1.Color.createByAlpha(0, this.fillColor);
    }
    getType() {
        return ElementProfile_1.EElementType.Circle;
    }
    getStatus() {
        return this.status;
    }
    toJSON() {
        const itemModel = this.model;
        return {
            type: this.getType(),
            modelType: this.model.modelType,
            status: this.status,
            layerItemId: itemModel.layerItemId,
            elementItemId: itemModel.elementItemId,
            elementItemName: itemModel.elementItemName,
            centerPoint: itemModel.centerPoint.toJSON(),
            radius: itemModel.radius,
            strokeWidth: itemModel.strokeWidth,
            strokeColor: itemModel.strokeColor.toRGBAJSON(),
            fillColor: itemModel.fillColor.toRGBAJSON(),
            lineCap: itemModel.lineCap,
            isSolid: itemModel.solid,
        };
    }
}
exports.CircleShape = CircleShape;


/***/ }),

/***/ "./src/objects/shapes/items/DrawLayerShape.ts":
/*!****************************************************!*\
  !*** ./src/objects/shapes/items/DrawLayerShape.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerShape = void 0;
const DrawLayerShapeItemBase_1 = __webpack_require__(/*! ./drawLayerBase/DrawLayerShapeItemBase */ "./src/objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase.ts");
class DrawLayerShape extends DrawLayerShapeItemBase_1.DrawLayerShapeItemBase {
    constructor(model) {
        super();
        this.model = model;
        this.refreshRender();
    }
    get layerItemName() {
        return this.model.layerItemName;
    }
    set layerItemName(value) {
        ;
        this.model.layerItemName = value;
        this.refreshRender();
    }
    get layerItemOpacity() {
        return this.model.layerItemOpacity;
    }
    set layerItemOpacity(value) {
        ;
        this.model.layerItemOpacity = value;
        this.refreshRender();
    }
    get groupId() {
        return this.model.groupId;
    }
    set groupId(value) {
        ;
        this.model.groupId = value;
        this.refreshRender();
    }
    getType() {
        return this.model.layerItemType;
    }
    getStatus() {
        return this.status;
    }
    toJSON() {
        const itemModel = this.model;
        return {
            status: this.status,
            layerItemId: itemModel.layerItemId,
            layerItemName: itemModel.layerItemName,
            layerItemOpacity: itemModel.layerItemOpacity,
            groupId: itemModel.groupId,
        };
    }
}
exports.DrawLayerShape = DrawLayerShape;


/***/ }),

/***/ "./src/objects/shapes/items/LineShape.ts":
/*!***********************************************!*\
  !*** ./src/objects/shapes/items/LineShape.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineShape = exports.buildLineShape = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const LineModel_1 = __webpack_require__(/*! ../../models/items/LineModel */ "./src/objects/models/items/LineModel.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
const ElementShapeItemBase_1 = __webpack_require__(/*! ./elementBase/ElementShapeItemBase */ "./src/objects/shapes/items/elementBase/ElementShapeItemBase.ts");
function buildLineShape(layerItemId, startPoint, endPoint, strokeWidth = 1, strokeColor = Color_1.Color.BLACK) {
    const elementModelItem = (0, LineModel_1.buildLineModel)(layerItemId, startPoint, endPoint, strokeWidth, strokeColor);
    const elementShapeItem = new LineShape(elementModelItem);
    return elementShapeItem;
}
exports.buildLineShape = buildLineShape;
class LineShape extends ElementShapeItemBase_1.ElementShapeItemBase {
    constructor(model) {
        super();
        this.model = model;
        this.refreshRender();
    }
    get elementItemName() {
        return this.model.elementItemName;
    }
    set elementItemName(value) {
        ;
        this.model.elementItemName = value;
        this.refreshRender();
    }
    get startPoint() {
        return this.model.startPoint;
    }
    set startPoint(value) {
        ;
        this.model.startPoint = value;
        this.refreshRender();
    }
    get endPoint() {
        return this.model.endPoint;
    }
    set endPoint(value) {
        ;
        this.model.endPoint = value;
        this.refreshRender();
    }
    get strokeWidth() {
        return this.model.strokeWidth;
    }
    set strokeWidth(value) {
        ;
        this.model.strokeWidth = value;
        this.refreshRender();
    }
    get length() {
        return this.model.length;
    }
    set length(value) {
        ;
        this.model.length = value;
        this.refreshRender();
    }
    get strokeColor() {
        return this.model.strokeColor;
    }
    set strokeColor(value) {
        ;
        this.model.strokeColor = value;
        this.refreshRender();
    }
    get lineCap() {
        return this.model.lineCap;
    }
    set lineCap(value) {
        ;
        this.model.lineCap = value;
        this.refreshRender();
    }
    get solid() {
        return this.model.solid;
    }
    set solid(value) {
        ;
        this.model.solid = value;
        this.refreshRender();
    }
    get centerPoint() {
        return this.model.centerPoint;
    }
    isSelect(x, y) {
        return this.model.isInGraphical(x, y);
    }
    transform(value) {
        const startPoint = this.startPoint.multiplyMatrix4(value);
        const endPoint = this.endPoint.multiplyMatrix4(value);
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.refreshRender();
    }
    getType() {
        return ElementProfile_1.EElementType.Line;
    }
    getStatus() {
        return this.status;
    }
    toJSON() {
        const itemModel = this.model;
        return {
            type: this.getType(),
            modelType: this.model.modelType,
            status: this.status,
            layerItemId: itemModel.layerItemId,
            elementItemId: itemModel.elementItemId,
            elementItemName: itemModel.elementItemName,
            startPoint: itemModel.startPoint.toJSON(),
            endPoint: itemModel.endPoint.toJSON(),
            strokeWidth: itemModel.strokeWidth,
            lineCap: itemModel.lineCap,
            isSolid: itemModel.solid,
            strokeColor: itemModel.strokeColor.toRGBAJSON(),
        };
    }
}
exports.LineShape = LineShape;


/***/ }),

/***/ "./src/objects/shapes/items/drawLayerBase/DrawLayerShapeBase.ts":
/*!**********************************************************************!*\
  !*** ./src/objects/shapes/items/drawLayerBase/DrawLayerShapeBase.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerShapeBase = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../../../../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Context_1 = __webpack_require__(/*! ../../../../utils/Context */ "./src/utils/Context.ts");
class DrawLayerShapeBase extends Context_1.Context {
    constructor() {
        super(DrawLayerProfile_1.DRAWLAYER_INIT_STATUS);
    }
}
exports.DrawLayerShapeBase = DrawLayerShapeBase;


/***/ }),

/***/ "./src/objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase.ts":
/*!**************************************************************************!*\
  !*** ./src/objects/shapes/items/drawLayerBase/DrawLayerShapeItemBase.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerShapeItemBase = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../../../../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../../../Constant */ "./src/Constant.ts");
const DrawLayerShapeBase_1 = __webpack_require__(/*! ./DrawLayerShapeBase */ "./src/objects/shapes/items/drawLayerBase/DrawLayerShapeBase.ts");
class DrawLayerShapeItemBase extends DrawLayerShapeBase_1.DrawLayerShapeBase {
    constructor() {
        super();
        this._model = null;
    }
    get layerItemId() {
        return this._model.layerItemId;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    refreshRender() {
        Constant_1.modifyController.attachLayer(this);
    }
    get visible() {
        return this.isStatusMatch(DrawLayerProfile_1.EDrawLayerStatus.VISIBLE);
    }
    set visible(value) {
        this.setStatusMatch(DrawLayerProfile_1.EDrawLayerStatus.VISIBLE, value);
        this.refreshRender();
    }
    get locked() {
        return this.isStatusMatch(DrawLayerProfile_1.EDrawLayerStatus.LOCKED);
    }
    set locked(value) {
        this.setStatusMatch(DrawLayerProfile_1.EDrawLayerStatus.LOCKED, value);
        this.refreshRender();
    }
    get killed() {
        return this.isStatusMatch(DrawLayerProfile_1.EDrawLayerStatus.KILLED);
    }
    set killed(value) {
        this.setStatusMatch(DrawLayerProfile_1.EDrawLayerStatus.KILLED, value);
        this.refreshRender();
    }
    setSelect() { }
    setUnSelect() { }
    setDelete() {
        this.killed = true;
    }
}
exports.DrawLayerShapeItemBase = DrawLayerShapeItemBase;


/***/ }),

/***/ "./src/objects/shapes/items/elementBase/ElementShapeBase.ts":
/*!******************************************************************!*\
  !*** ./src/objects/shapes/items/elementBase/ElementShapeBase.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementShapeBase = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const Context_1 = __webpack_require__(/*! ../../../../utils/Context */ "./src/utils/Context.ts");
class ElementShapeBase extends Context_1.Context {
    constructor() {
        super(ElementProfile_1.ELEMENT_INIT_STATUS);
    }
}
exports.ElementShapeBase = ElementShapeBase;


/***/ }),

/***/ "./src/objects/shapes/items/elementBase/ElementShapeItemBase.ts":
/*!**********************************************************************!*\
  !*** ./src/objects/shapes/items/elementBase/ElementShapeItemBase.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementShapeItemBase = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../../../Constant */ "./src/Constant.ts");
const ElementShapeBase_1 = __webpack_require__(/*! ./ElementShapeBase */ "./src/objects/shapes/items/elementBase/ElementShapeBase.ts");
class ElementShapeItemBase extends ElementShapeBase_1.ElementShapeBase {
    constructor() {
        super();
        this._model = null;
    }
    get elementItemId() {
        return this._model.elementItemId;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    refreshRender() {
        Constant_1.modifyController.attachElement(this);
    }
    get visible() {
        return this.isStatusMatch(ElementProfile_1.EElementStatus.VISIBLE);
    }
    set visible(value) {
        this.setStatusMatch(ElementProfile_1.EElementStatus.VISIBLE, value);
        this.refreshRender();
    }
    get hightlight() {
        return this.isStatusMatch(ElementProfile_1.EElementStatus.HIGHTLIGHT);
    }
    set hightlight(value) {
        this.setStatusMatch(ElementProfile_1.EElementStatus.HIGHTLIGHT, value);
        this.refreshRender();
    }
    get locked() {
        return this.isStatusMatch(ElementProfile_1.EElementStatus.LOCKED);
    }
    set locked(value) {
        this.setStatusMatch(ElementProfile_1.EElementStatus.LOCKED, value);
        this.refreshRender();
    }
    get killed() {
        return this.isStatusMatch(ElementProfile_1.EElementStatus.KILLED);
    }
    set killed(value) {
        this.setStatusMatch(ElementProfile_1.EElementStatus.KILLED, value);
        this.refreshRender();
    }
    setSelect() {
        this.visible = true;
        this.hightlight = true;
    }
    setUnSelect() {
        this.visible = true;
        this.hightlight = false;
    }
    setDelete() {
        this.killed = true;
    }
}
exports.ElementShapeItemBase = ElementShapeItemBase;


/***/ }),

/***/ "./src/objects/shapes/manager/CircleShapeManager.ts":
/*!**********************************************************!*\
  !*** ./src/objects/shapes/manager/CircleShapeManager.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShapeManager = void 0;
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const RtreeItem_1 = __webpack_require__(/*! ../../../geometry/RtreeItem */ "./src/geometry/RtreeItem.ts");
const Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
const CircleShape_1 = __webpack_require__(/*! ../items/CircleShape */ "./src/objects/shapes/items/CircleShape.ts");
const CircleModelManager_1 = __webpack_require__(/*! ../../models/manager/CircleModelManager */ "./src/objects/models/manager/CircleModelManager.ts");
const Config_1 = __webpack_require__(/*! ../../../config/Config */ "./src/config/Config.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
class CircleShapeManager extends Manage_1.Manager {
    static getInstance() {
        if (CircleShapeManager.thisInstance === undefined) {
            CircleShapeManager.thisInstance = new CircleShapeManager();
        }
        return CircleShapeManager.thisInstance;
    }
    constructor() {
        super();
        this._rteeItems = new Map();
    }
    createShapeItem(elementItemId, layerItemId, centerPoint, radius, strokeWidth = 1, strokeColor = Color_1.Color.BLACK, fillColor = Color_1.Color.createByAlpha(0)) {
        const elementModelItem = CircleModelManager_1.CircleModelManager.getInstance().createModelItem(elementItemId, layerItemId, centerPoint, radius, strokeWidth, strokeColor, fillColor);
        const elementShapeItem = new CircleShape_1.CircleShape(elementModelItem);
        const op = this.addCache(elementShapeItem);
        return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
        const elementShapeItem = this.items.get(elementItemId);
        if (!elementShapeItem) {
            return;
        }
        const op = this.deleteCache(elementItemId);
        if (op === false) {
            return;
        }
        CircleModelManager_1.CircleModelManager.getInstance().deleteModelItem(elementItemId);
        elementShapeItem.setDelete();
    }
    addCache(circleShapeItem) {
        this.items.set(circleShapeItem.model.elementItemId, circleShapeItem);
        const rtreeItem = new RtreeItem_1.RtreeItem(circleShapeItem);
        this._rteeItems.set(circleShapeItem.model.elementItemId, rtreeItem);
        Config_1.ENABLE_RTREE && Constant_1.rtree.insertItemData(RtreeItem_1.RtreeItem.getSimpleRectFromModelBbox2(circleShapeItem), rtreeItem);
        return true;
    }
    deleteCache(elementItemId) {
        const targetShapeItem = this.items.get(elementItemId);
        if (!targetShapeItem) {
            return false;
        }
        const rtreeItem = this._rteeItems.get(elementItemId);
        const deleteResults = !Config_1.ENABLE_RTREE
            ? []
            : Constant_1.rtree.removeTarget(RtreeItem_1.RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
        if (Config_1.ENABLE_RTREE && !deleteResults.length) {
            return false;
        }
        this.items.delete(elementItemId);
        this._rteeItems.delete(elementItemId);
        return true;
    }
}
exports.CircleShapeManager = CircleShapeManager;


/***/ }),

/***/ "./src/objects/shapes/manager/DrawLayerShapeManager.ts":
/*!*************************************************************!*\
  !*** ./src/objects/shapes/manager/DrawLayerShapeManager.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerShapeManager = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../../../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Command_1 = __webpack_require__(/*! ../../../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const Helper_1 = __webpack_require__(/*! ../../../utils/Helper */ "./src/utils/Helper.ts");
const Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
const DrawLayerModelManager_1 = __webpack_require__(/*! ../../models/manager/DrawLayerModelManager */ "./src/objects/models/manager/DrawLayerModelManager.ts");
const DrawLayerShape_1 = __webpack_require__(/*! ../items/DrawLayerShape */ "./src/objects/shapes/items/DrawLayerShape.ts");
class DrawLayerShapeManager extends Manage_1.Manager {
    static getInstance() {
        if (DrawLayerShapeManager.thisInstance === undefined) {
            DrawLayerShapeManager.thisInstance = new DrawLayerShapeManager();
        }
        return DrawLayerShapeManager.thisInstance;
    }
    constructor() {
        super();
    }
    get selectedLayersId() {
        return this._selectedLayersId;
    }
    set selectedLayersId(value) {
        this._selectedLayersId = value;
    }
    createControlShapeItem(layerItemName) {
        const layerModelItem = DrawLayerModelManager_1.DrawLayerModelManager.getInstance().createControlItem(layerItemName);
        const drawLayerShapeItem = new DrawLayerShape_1.DrawLayerShape(layerModelItem);
        this.addCache(drawLayerShapeItem);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.SWITCH_DRAW_TOOL, { type: Command_1.EDrawToolCommand.BLANK_DROP });
        return drawLayerShapeItem;
    }
    createContentShapeItem(layerItemName) {
        const layerModelItem = DrawLayerModelManager_1.DrawLayerModelManager.getInstance().createContentItem(layerItemName);
        const drawLayerShapeItem = new DrawLayerShape_1.DrawLayerShape(layerModelItem);
        this.addCache(drawLayerShapeItem);
        this.selectedLayersId = new Set([drawLayerShapeItem.model.layerItemId]);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.SWITCH_DRAW_TOOL, { type: Command_1.EDrawToolCommand.BLANK_DROP });
        return drawLayerShapeItem;
    }
    deleteContentShapeItem(layerItemId) {
        const drawLayerShapeItem = this.items.get(layerItemId);
        if (!drawLayerShapeItem) {
            return;
        }
        const allElementShapes = Helper_1.Helper.getAllElementShapes();
        for (let i = 0; i < allElementShapes.length; i++) {
            if (allElementShapes[i].model.layerItemId !== layerItemId) {
                continue;
            }
            Helper_1.Helper.deleteElementItem(allElementShapes[i]);
        }
        drawLayerShapeItem.setDelete();
        this.deleteCache(layerItemId);
    }
    getAllContentShapeItems() {
        const allItems = this.items;
        const results = [];
        allItems.forEach((item) => {
            if ([String(DrawLayerProfile_1.EDrawLayerCode.MaskLayer)].indexOf(item.layerItemId) <= -1) {
                results.push(item);
            }
        });
        return results;
    }
    getContentShapeItem(layerItemId) {
        const allItems = this.items;
        let targetItem = null;
        allItems.forEach((item) => {
            if (item.layerItemId === layerItemId) {
                targetItem = item;
            }
        });
        return targetItem;
    }
    getActiveItem() {
        return this.items.get(Array.from(this.selectedLayersId)[0]);
    }
    setActiveItem(layerItemId) {
        if (!this.items.has(layerItemId)) {
            return;
        }
        this.selectedLayersId = new Set([layerItemId]);
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.SWITCH_DRAW_TOOL, { type: Command_1.EDrawToolCommand.BLANK_DROP });
    }
    addCache(drawLayerShapeItem) {
        this.items.set(drawLayerShapeItem.model.layerItemId, drawLayerShapeItem);
    }
    deleteCache(drawLayerShapeId) {
        this.items.delete(drawLayerShapeId);
        if (this.selectedLayersId.has(drawLayerShapeId)) {
            this.selectedLayersId.delete(drawLayerShapeId);
        }
    }
}
exports.DrawLayerShapeManager = DrawLayerShapeManager;


/***/ }),

/***/ "./src/objects/shapes/manager/LineShapeManager.ts":
/*!********************************************************!*\
  !*** ./src/objects/shapes/manager/LineShapeManager.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineShapeManager = void 0;
const LineModelManager_1 = __webpack_require__(/*! ../../models/manager/LineModelManager */ "./src/objects/models/manager/LineModelManager.ts");
const LineShape_1 = __webpack_require__(/*! ../items/LineShape */ "./src/objects/shapes/items/LineShape.ts");
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const RtreeItem_1 = __webpack_require__(/*! ../../../geometry/RtreeItem */ "./src/geometry/RtreeItem.ts");
const Manage_1 = __webpack_require__(/*! ../../base/Manage */ "./src/objects/base/Manage.ts");
const Config_1 = __webpack_require__(/*! ../../../config/Config */ "./src/config/Config.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
class LineShapeManager extends Manage_1.Manager {
    static getInstance() {
        if (LineShapeManager.thisInstance === undefined) {
            LineShapeManager.thisInstance = new LineShapeManager();
        }
        return LineShapeManager.thisInstance;
    }
    constructor() {
        super();
        this._rteeItems = new Map();
    }
    createShapeItem(elementItemId, layerItemId, startPoint, endPoint, strokeWidth = 1, strokeColor = Color_1.Color.BLACK) {
        const elementModelItem = LineModelManager_1.LineModelManager.getInstance().createModelItem(elementItemId, layerItemId, startPoint, endPoint, strokeWidth, strokeColor);
        const elementShapeItem = new LineShape_1.LineShape(elementModelItem);
        const op = this.addCache(elementShapeItem);
        return elementShapeItem;
    }
    deleteShapeItem(elementItemId) {
        const elementShapeItem = this.items.get(elementItemId);
        if (!elementShapeItem) {
            return;
        }
        const op = this.deleteCache(elementItemId);
        if (op === false) {
            return;
        }
        LineModelManager_1.LineModelManager.getInstance().deleteModelItem(elementItemId);
        elementShapeItem.setDelete();
    }
    addCache(lineShapeItem) {
        this.items.set(lineShapeItem.model.elementItemId, lineShapeItem);
        const rtreeItem = new RtreeItem_1.RtreeItem(lineShapeItem);
        this._rteeItems.set(lineShapeItem.model.elementItemId, rtreeItem);
        Config_1.ENABLE_RTREE && Constant_1.rtree.insertItemData(RtreeItem_1.RtreeItem.getSimpleRectFromModelBbox2(lineShapeItem), rtreeItem);
        return true;
    }
    deleteCache(elementItemId) {
        const targetShapeItem = this.items.get(elementItemId);
        if (!targetShapeItem) {
            return false;
        }
        const rtreeItem = this._rteeItems.get(elementItemId);
        const deleteResults = !Config_1.ENABLE_RTREE
            ? []
            : Constant_1.rtree.removeTarget(RtreeItem_1.RtreeItem.getSimpleRectFromModelBbox2(targetShapeItem), rtreeItem);
        if (Config_1.ENABLE_RTREE && !deleteResults.length) {
            return false;
        }
        this.items.delete(elementItemId);
        this._rteeItems.delete(elementItemId);
        return true;
    }
}
exports.LineShapeManager = LineShapeManager;


/***/ }),

/***/ "./src/presenter/ElementPresenter.ts":
/*!*******************************************!*\
  !*** ./src/presenter/ElementPresenter.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementPresenter = void 0;
const DrawLayerViewManager_1 = __webpack_require__(/*! ../view/manager/DrawLayerViewManager */ "./src/view/manager/DrawLayerViewManager.ts");
const ShapeViewManager_1 = __webpack_require__(/*! ../view/manager/ShapeViewManager */ "./src/view/manager/ShapeViewManager.ts");
const Presenter_1 = __webpack_require__(/*! ./Presenter */ "./src/presenter/Presenter.ts");
class ElementPresenter extends Presenter_1.Presenter {
    constructor(scene) {
        super();
        this._scene = scene;
    }
    notify(elements) {
        ShapeViewManager_1.ShapeViewManager.getInstance().handleModify(this._scene, elements);
        DrawLayerViewManager_1.DrawLayerViewManager.getInstance().handleRefreshView(this._scene);
    }
}
exports.ElementPresenter = ElementPresenter;


/***/ }),

/***/ "./src/presenter/LayerPresenter.ts":
/*!*****************************************!*\
  !*** ./src/presenter/LayerPresenter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayerPresenter = void 0;
const DrawLayerViewManager_1 = __webpack_require__(/*! ../view/manager/DrawLayerViewManager */ "./src/view/manager/DrawLayerViewManager.ts");
const Presenter_1 = __webpack_require__(/*! ./Presenter */ "./src/presenter/Presenter.ts");
class LayerPresenter extends Presenter_1.Presenter {
    constructor(scene) {
        super();
        this._scene = scene;
    }
    notify(layers) {
        DrawLayerViewManager_1.DrawLayerViewManager.getInstance().handleModify(this._scene, layers);
    }
}
exports.LayerPresenter = LayerPresenter;


/***/ }),

/***/ "./src/presenter/ModifyController.ts":
/*!*******************************************!*\
  !*** ./src/presenter/ModifyController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModifyController = void 0;
class ModifyController {
    constructor() {
        this._layers = new Set([]);
        this._elements = new Set([]);
        this._layerPresenter = null;
        this._elementPresenter = null;
    }
    setLayerPresenter(layerPresenter) {
        this._layerPresenter = layerPresenter;
    }
    setElementPresenter(elementPresenter) {
        this._elementPresenter = elementPresenter;
    }
    attachLayer(layerItem) {
        this._layers.add(layerItem);
    }
    attachElement(elementItem) {
        this._elements.add(elementItem);
    }
    notify(isShouldHandleElementsFirst = false) {
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
    }
}
exports.ModifyController = ModifyController;


/***/ }),

/***/ "./src/presenter/Presenter.ts":
/*!************************************!*\
  !*** ./src/presenter/Presenter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Presenter = void 0;
class Presenter {
}
exports.Presenter = Presenter;


/***/ }),

/***/ "./src/service/Service.ts":
/*!********************************!*\
  !*** ./src/service/Service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Service = void 0;
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
class Service {
    constructor() {
        Constant_1.messageTool.messageBus.subscribe(Command_1.EFrameCommand.REFRESH_RTREE, this.refreshRtree.bind(this));
    }
    refreshRtree() {
        const updatedRtreeItems = [];
        const allRtreeItems = Constant_1.rtree.getAllItems();
        allRtreeItems.forEach((rtreeItem) => {
            const newBBox2 = rtreeItem.target.model.updateBBox2();
            const oldBBox2 = rtreeItem.getBBox2();
            if (newBBox2 && oldBBox2 && !newBBox2.equals(oldBBox2)) {
                updatedRtreeItems.push(rtreeItem);
            }
        });
        for (let i = 0; i < updatedRtreeItems.length; i++) {
            const rtreeItem = updatedRtreeItems[i];
            const oldBBox2 = rtreeItem.getBBox2();
            const r = Constant_1.rtree.removeTarget({ sx: oldBBox2.minX, sy: oldBBox2.minY, w: oldBBox2.width, h: oldBBox2.height }, rtreeItem);
        }
        for (let i = 0; i < updatedRtreeItems.length; i++) {
            const rtreeItem = updatedRtreeItems[i];
            const newBBox2 = rtreeItem.target.model.updateBBox2();
            rtreeItem.updateBBox2(newBBox2);
            Constant_1.rtree.insertItemData({ sx: newBBox2.minX, sy: newBBox2.minY, w: newBBox2.width, h: newBBox2.height }, rtreeItem);
        }
    }
}
exports.Service = Service;


/***/ }),

/***/ "./src/tool/Adsorption.ts":
/*!********************************!*\
  !*** ./src/tool/Adsorption.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Adsorption = void 0;
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const GridSetting_1 = __webpack_require__(/*! ../engine/common/GridSetting */ "./src/engine/common/GridSetting.ts");
const Vector2_1 = __webpack_require__(/*! ../geometry/Vector2 */ "./src/geometry/Vector2.ts");
class Adsorption {
    adsorpGrid(position) {
        const snapX = GridSetting_1.GridSetting.getInstance().stepX;
        const snapY = GridSetting_1.GridSetting.getInstance().stepY;
        const origin = Constant_1.environment.origin;
        const resultX = (position.x - origin.x) / snapX;
        const resultY = (position.y - origin.y) / snapY;
        const dx = Math.abs(Math.floor(resultX) - resultX);
        const dy = Math.abs(Math.floor(resultY) - resultY);
        let setX = Math.floor(resultX);
        let setY = Math.floor(resultY);
        if (dx > 0.5) {
            setX = Math.ceil(resultX);
        }
        if (dy > 0.5) {
            setY = Math.ceil(resultY);
        }
        return new Vector2_1.Vector2(setX * snapX + origin.x, setY * snapY + origin.y);
    }
}
exports.Adsorption = Adsorption;


/***/ }),

/***/ "./src/tool/EventsLoader.ts":
/*!**********************************!*\
  !*** ./src/tool/EventsLoader.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsLoader = void 0;
const InputInfo_1 = __webpack_require__(/*! ./InputInfo */ "./src/tool/InputInfo.ts");
const ToolChain_1 = __webpack_require__(/*! ./ToolChain */ "./src/tool/ToolChain.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const SystemConfig_1 = __webpack_require__(/*! ../controller/SystemConfig */ "./src/controller/SystemConfig.ts");
const Vector2_1 = __webpack_require__(/*! ../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const SyncCanvasRect_1 = __webpack_require__(/*! ../utils/SyncCanvasRect */ "./src/utils/SyncCanvasRect.ts");
const CalcRealPhysicsPosition_1 = __webpack_require__(/*! ../utils/CalcRealPhysicsPosition */ "./src/utils/CalcRealPhysicsPosition.ts");
const MOUSE_LEFT_BUTTONS = 1;
const MOUSE_RIGHT_BUTTONS = 2;
const MOUSE_MIDDLE_BUTTONS = 4;
class EventsLoader extends ToolChain_1.ToolChain {
    constructor(canvasElement) {
        super();
        this._canvasElement = canvasElement;
        this._inputInfo = new InputInfo_1.InputInfo();
        this._systemConfig = SystemConfig_1.SystemConfig.getInstance();
    }
    init() {
        this.bindEvent();
    }
    get inputInfo() {
        return this._inputInfo;
    }
    get canvasElement() {
        return this._canvasElement;
    }
    getWindowRatio(ratio = window.devicePixelRatio) {
        return ratio > 1 ? ratio : 1;
    }
    bindEvent() {
        const canvasElement = this.canvasElement;
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
    }
    viewResizeHandler() {
        (0, SyncCanvasRect_1.syncCanvasRectByWindow)(this.canvasElement);
        const canvasRect = this.canvasElement.getBoundingClientRect().toJSON();
        const prevWidth = Constant_1.environment.canvasWidth;
        const prevHeight = Constant_1.environment.canvasHeight;
        Constant_1.environment.updateCanvasRectSize(canvasRect.width, canvasRect.height, canvasRect.left, canvasRect.top);
        const offset = { distX: canvasRect.width - prevWidth, distY: canvasRect.height - prevHeight };
        const handlerAction = (nextTool) => {
            nextTool.viewResizeHandler(this.inputInfo, offset);
        };
        this.handler(handlerAction);
    }
    prepareSystemEventInputInfo(e) {
        e.preventDefault();
        const sourceOffsetX = e.offsetX * this.getWindowRatio();
        const sourceOffsetY = e.offsetY * this.getWindowRatio();
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
    }
    prepareKeyboardEventInputInfo(e) {
        e.preventDefault();
        this.inputInfo.type = e.type;
        this.inputInfo.keyCode = e.keyCode;
        this.inputInfo.ctrlKey = !!e.ctrlKey;
        this.inputInfo.altKey = !!e.altKey;
        this.inputInfo.shiftKey = !!e.shiftKey;
        this.inputInfo.metaKey = !!e.metaKey;
        this.calcTransPixelInputInfo();
    }
    keyDownHandler(e) {
        this.prepareKeyboardEventInputInfo(e);
        const handlerAction = (nextTool) => {
            nextTool.keyDownHandler(this.inputInfo);
        };
        this.handler(handlerAction);
    }
    keyUpHandler(e) {
        this.prepareKeyboardEventInputInfo(e);
        const handlerAction = (nextTool) => {
            nextTool.keyUpHandler(this.inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseDownHandler(e) {
        this._canvasElement.focus();
        window.focus();
        this.prepareSystemEventInputInfo(e);
        let handlerAction;
        if (e.button === 0) {
            handlerAction = (nextTool) => {
                nextTool.mouseLeftDownHandler(this.inputInfo);
            };
        }
        else if (e.button === 1) {
            handlerAction = (nextTool) => {
                nextTool.mouseMiddleDownHandler(this.inputInfo);
            };
        }
        else if (e.button === 2) {
            handlerAction = (nextTool) => {
                nextTool.mouseRightDownHandler(this.inputInfo);
            };
        }
        handlerAction && this.handler(handlerAction);
    }
    mouseMoveHandler(e) {
        this.prepareSystemEventInputInfo(e);
        const handlerAction = (nextTool) => {
            nextTool.mouseMoveHandler(this.inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseUpHandler(e) {
        this.prepareSystemEventInputInfo(e);
        let handlerAction;
        if (e.button === 0) {
            handlerAction = (nextTool) => {
                nextTool.mouseLeftUpHandler(this.inputInfo);
            };
        }
        else if (e.button === 1) {
            handlerAction = (nextTool) => {
                nextTool.mouseMiddleUpHandler(this.inputInfo);
            };
        }
        else if (e.button === 2) {
            handlerAction = (nextTool) => {
                nextTool.mouseRightUpHandler(this.inputInfo);
            };
        }
        handlerAction && this.handler(handlerAction);
    }
    mouseWheelHandler(e) {
        this.prepareSystemEventInputInfo(e);
        const handlerAction = (nextTool) => {
            nextTool.mouseWheelHandler(this.inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseLeaveHandler(e) {
        this.prepareSystemEventInputInfo(e);
        const handlerAction = (nextTool) => {
            nextTool.mouseLeaveHandler(this.inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseEnterHandler(e) {
        this.prepareSystemEventInputInfo(e);
        const handlerAction = (nextTool) => {
            nextTool.mouseEnterHandler(this.inputInfo);
        };
        this.handler(handlerAction);
    }
    contextmenuHandler(e) {
        e.preventDefault();
    }
    calcTransPixelInputInfo() {
        const DPI = Constant_1.environment.DPI;
        const offsetOfCanvasViewPosition = (0, CalcRealPhysicsPosition_1.calcRealPixelPosition)(this.inputInfo.moveSourcePixelX, -this.inputInfo.moveSourcePixelY);
        this.inputInfo.moveTransPixelX = offsetOfCanvasViewPosition[0];
        this.inputInfo.moveTransPixelY = offsetOfCanvasViewPosition[1];
        this.inputInfo.moveRealPhysicsX = this.inputInfo.movePhysicsX = (0, Utils_1.px2mm)(this.inputInfo.moveTransPixelX, DPI[0]);
        this.inputInfo.moveRealPhysicsY = this.inputInfo.movePhysicsY = (0, Utils_1.px2mm)(this.inputInfo.moveTransPixelY, DPI[1]);
        if (this._systemConfig.alignGrid) {
            const position = new Vector2_1.Vector2(this.inputInfo.movePhysicsX, this.inputInfo.movePhysicsY);
            const offset = Constant_1.adsorption.adsorpGrid(position);
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
    }
}
exports.EventsLoader = EventsLoader;


/***/ }),

/***/ "./src/tool/FrameTool.ts":
/*!*******************************!*\
  !*** ./src/tool/FrameTool.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrameTool = void 0;
const Tool_1 = __webpack_require__(/*! ./Tool */ "./src/tool/Tool.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
const Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
const Config_1 = __webpack_require__(/*! ../config/Config */ "./src/config/Config.ts");
const SystemConfig_1 = __webpack_require__(/*! ../controller/SystemConfig */ "./src/controller/SystemConfig.ts");
const NativeProfile_1 = __webpack_require__(/*! ../config/NativeProfile */ "./src/config/NativeProfile.ts");
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const CreateCanvasProfile_1 = __webpack_require__(/*! ../utils/CreateCanvasProfile */ "./src/utils/CreateCanvasProfile.ts");
class FrameTool extends Tool_1.Tool {
    constructor() {
        super();
        this._camera = Camera_1.Camera.getInstance();
        this._systemConfig = SystemConfig_1.SystemConfig.getInstance();
        this._mouseRightPrevSourcePixelX = 0;
        this._mouseRightPrevSourcePixelY = 0;
        this._isMouseRightDwon = false;
        this._auxiliaryTool = null;
    }
    init() {
        this.nextTool = Constant_1.dropDragTool;
    }
    get auxiliaryTool() {
        return this._auxiliaryTool;
    }
    set auxiliaryTool(value) {
        this._auxiliaryTool = value;
    }
    get mouseRightPrevSourcePixelX() {
        return this._mouseRightPrevSourcePixelX;
    }
    set mouseRightPrevSourcePixelX(value) {
        this._mouseRightPrevSourcePixelX = value;
    }
    get mouseRightPrevSourcePixelY() {
        return this._mouseRightPrevSourcePixelY;
    }
    set mouseRightPrevSourcePixelY(value) {
        this._mouseRightPrevSourcePixelY = value;
    }
    viewResizeHandler(inputInfo, offset) {
        this.prepare(inputInfo);
        const offsetVector3 = new Vector3_1.Vector3(-offset.distX / 2, offset.distY / 2, 0);
        this._camera.refreshByVector3(offsetVector3);
        this.emitInputsChanged(inputInfo);
    }
    keyDownHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
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
                case NativeProfile_1.EDIRECTION_KEY.LEFT: {
                    if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate && Constant_1.selectManager.items.size <= 0) {
                        this._camera.refreshByVector3(new Vector3_1.Vector3(-Config_1.DIRECTION_KEY_MOVE_STEP, 0, 0));
                    }
                    break;
                }
                case NativeProfile_1.EDIRECTION_KEY.UP: {
                    if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate && Constant_1.selectManager.items.size <= 0) {
                        this._camera.refreshByVector3(new Vector3_1.Vector3(0, Config_1.DIRECTION_KEY_MOVE_STEP, 0));
                    }
                    break;
                }
                case NativeProfile_1.EDIRECTION_KEY.RIGHT: {
                    if (SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate && Constant_1.selectManager.items.size <= 0) {
                        this._camera.refreshByVector3(new Vector3_1.Vector3(Config_1.DIRECTION_KEY_MOVE_STEP, 0, 0));
                    }
                    break;
                }
                case NativeProfile_1.EDIRECTION_KEY.DOWN: {
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
    }
    keyUpHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.keyUpHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.mouseLeftDownHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.mouseMiddleDownHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
        this.prepare(inputInfo);
        this.mouseRightPrevSourcePixelX = inputInfo.moveSourcePixelX;
        this.mouseRightPrevSourcePixelY = inputInfo.moveSourcePixelY;
        const handlerAction = (nextTool) => {
            nextTool.mouseRightDownHandler(inputInfo);
        };
        this._isMouseRightDwon = true;
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.mouseMoveHandler(inputInfo);
        };
        if (this._isMouseRightDwon && SystemConfig_1.SystemConfig.getInstance().enableCanvasTranslate) {
            const offsetX = inputInfo.moveSourcePixelX - this.mouseRightPrevSourcePixelX;
            const offsetY = inputInfo.moveSourcePixelY - this.mouseRightPrevSourcePixelY;
            this._camera.refreshByVector3(new Vector3_1.Vector3(offsetX, -offsetY, 0));
            this.mouseRightPrevSourcePixelX = inputInfo.moveSourcePixelX;
            this.mouseRightPrevSourcePixelY = inputInfo.moveSourcePixelY;
            Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.CANVASPROFILE_CHANGED, (0, CreateCanvasProfile_1.createCanvasProfileChangedData)({}));
        }
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.mouseLeftUpHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.mouseMiddleUpHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.mouseRightUpHandler(inputInfo);
        };
        this._isMouseRightDwon = false;
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
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
        const handlerAction = (nextTool) => {
            nextTool.mouseWheelHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.mouseLeaveHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
        this.prepare(inputInfo);
        const handlerAction = (nextTool) => {
            nextTool.mouseEnterHandler(inputInfo);
        };
        this.emitInputsChanged(inputInfo);
        this.handler(handlerAction);
    }
    zoomCanvas(inputInfo, setDelta) {
        const mousePositionVector3 = new Vector3_1.Vector3(inputInfo.moveSourcePixelX, -inputInfo.moveSourcePixelY, 0);
        const canvasCenterVector3 = new Vector3_1.Vector3(Constant_1.environment.canvasWidth / 2, -Constant_1.environment.canvasHeight / 2, 0);
        const zoomCenterVector3 = mousePositionVector3.sub(canvasCenterVector3);
        const delta = setDelta || inputInfo.deltaSourcePixelY;
        let scale = 1;
        if (delta < 0) {
            scale = Config_1.MOUSE_WHEEL_ZOOM_RATIO;
        }
        else {
            scale = 1 / Config_1.MOUSE_WHEEL_ZOOM_RATIO;
        }
        const currentScale = this._camera.getZoomRatio();
        Constant_1.canvasController.zoomCanvas(scale * currentScale, zoomCenterVector3);
    }
    verticalScrollCanvas(inputInfo) {
        const delta = inputInfo.deltaSourcePixelY;
        let scrollDist = 1;
        if (delta < 0) {
            scrollDist = Config_1.MOUSE_WHEEL_SCROLL_DIST;
        }
        else {
            scrollDist = -Config_1.MOUSE_WHEEL_SCROLL_DIST;
        }
        this._camera.refreshByVector3(new Vector3_1.Vector3(0, -scrollDist, 0));
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.CANVASPROFILE_CHANGED, (0, CreateCanvasProfile_1.createCanvasProfileChangedData)({}));
    }
    horizontalScrollCanvas(inputInfo) {
        const delta = inputInfo.deltaSourcePixelY;
        let scrollDist = 1;
        if (delta < 0) {
            scrollDist = Config_1.MOUSE_WHEEL_SCROLL_DIST;
        }
        else {
            scrollDist = -Config_1.MOUSE_WHEEL_SCROLL_DIST;
        }
        this._camera.refreshByVector3(new Vector3_1.Vector3(scrollDist, 0, 0));
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.CANVASPROFILE_CHANGED, (0, CreateCanvasProfile_1.createCanvasProfileChangedData)({}));
    }
    emitInputsChanged(inputInfo) {
        const data = inputInfo.toJSON();
        data.canvasZoom = this._camera.getZoomRatio();
        Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.INPUTS_CHANGED, data);
    }
    prepare(inputInfo) { }
}
exports.FrameTool = FrameTool;


/***/ }),

/***/ "./src/tool/GlobalIdenManager.ts":
/*!***************************************!*\
  !*** ./src/tool/GlobalIdenManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalIdenManager = void 0;
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
const INIT_IDEN_NUMBER = 0;
class GlobalIdenManager {
    constructor() {
        this._usedElementIdenCounts = [];
        this._elementIden = INIT_IDEN_NUMBER;
        this._elementPrefix = INIT_IDEN_NUMBER + 1 + 'e';
        this._componentIden = INIT_IDEN_NUMBER;
        this._componentPrefix = INIT_IDEN_NUMBER + 1 + 'c';
    }
    get usedElementIdenCounts() {
        return this._usedElementIdenCounts;
    }
    set usedElementIdenCounts(value) {
        const usedMaxValue = Math.max(...value);
        this._elementIden = usedMaxValue >= this._elementIden ? usedMaxValue : this._elementIden;
        this._usedElementIdenCounts = value;
    }
    genElementIdenCount() {
        let newIdenCount = ++this._elementIden;
        while (this.usedElementIdenCounts.includes(newIdenCount)) {
            newIdenCount = ++this._elementIden;
        }
        return newIdenCount;
    }
    getElementIden() {
        if (this._elementIden >= Number.MAX_SAFE_INTEGER) {
            this._elementIden = 1;
            this._elementPrefix = this._elementIden + 'c';
        }
        return this._elementPrefix + this.genElementIdenCount();
    }
    getComponentIden() {
        if (this._componentIden >= Number.MAX_SAFE_INTEGER) {
            this._componentIden = 1;
            this._componentPrefix = this._componentIden + 'c';
        }
        return this._componentPrefix + ++this._componentIden + this.getHashIden(3);
    }
    getHashIden(length = 18) {
        return (0, Utils_1.getHashIden)(length);
    }
    updateUsedElementIdenCounts(fullElementItemId) {
        const execResults = /.*(\d+)$/.exec(fullElementItemId);
        if (execResults && execResults[1]) {
            this.usedElementIdenCounts = [...this.usedElementIdenCounts, +execResults[1]];
        }
    }
    reset() {
        this._usedElementIdenCounts = [];
        this._elementIden = INIT_IDEN_NUMBER;
        this._elementPrefix = INIT_IDEN_NUMBER + 1 + 'e';
        this._componentIden = INIT_IDEN_NUMBER;
        this._componentPrefix = INIT_IDEN_NUMBER + 1 + 'c';
    }
}
exports.GlobalIdenManager = GlobalIdenManager;


/***/ }),

/***/ "./src/tool/InputInfo.ts":
/*!*******************************!*\
  !*** ./src/tool/InputInfo.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputInfo = exports.InputContext = void 0;
class InputContext {
    constructor() {
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
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get keyCode() {
        return this._keyCode;
    }
    set keyCode(value) {
        this._keyCode = value;
    }
    /************************************************************/
    /************************************************************/
    get leftDownSourcePixelX() {
        return this._leftDownSourcePixelX;
    }
    set leftDownSourcePixelX(value) {
        this._leftDownSourcePixelX = value;
    }
    get leftDownSourcePixelY() {
        return this._leftDownSourcePixelY;
    }
    set leftDownSourcePixelY(value) {
        this._leftDownSourcePixelY = value;
    }
    get middleDownSourcePixelX() {
        return this._middleDownSourcePixelX;
    }
    set middleDownSourcePixelX(value) {
        this._middleDownSourcePixelX = value;
    }
    get middleDownSourcePixelY() {
        return this._middleDownSourcePixelY;
    }
    set middleDownSourcePixelY(value) {
        this._middleDownSourcePixelY = value;
    }
    get rightDownSourcePixelX() {
        return this._rightDownSourcePixelX;
    }
    set rightDownSourcePixelX(value) {
        this._rightDownSourcePixelX = value;
    }
    get rightDownSourcePixelY() {
        return this._rightDownSourcePixelY;
    }
    set rightDownSourcePixelY(value) {
        this._rightDownSourcePixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get moveSourcePixelX() {
        return this._moveSourcePixelX;
    }
    set moveSourcePixelX(value) {
        this._moveSourcePixelX = value;
    }
    get moveSourcePixelY() {
        return this._moveSourcePixelY;
    }
    set moveSourcePixelY(value) {
        this._moveSourcePixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get deltaSourcePixelX() {
        return this._deltaSourcePixelX;
    }
    set deltaSourcePixelX(value) {
        this._deltaSourcePixelX = value;
    }
    get deltaSourcePixelY() {
        return this._deltaSourcePixelY;
    }
    set deltaSourcePixelY(value) {
        this._deltaSourcePixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get leftDownTransPixelX() {
        return this._leftDownTransPixelX;
    }
    set leftDownTransPixelX(value) {
        this._leftDownTransPixelX = value;
    }
    get leftDownTransPixelY() {
        return this._leftDownTransPixelY;
    }
    set leftDownTransPixelY(value) {
        this._leftDownTransPixelY = value;
    }
    get middleDownTransPixelX() {
        return this._middleDownTransPixelX;
    }
    set middleDownTransPixelX(value) {
        this._middleDownTransPixelX = value;
    }
    get middleDownTransPixelY() {
        return this._middleDownTransPixelY;
    }
    set middleDownTransPixelY(value) {
        this._middleDownTransPixelY = value;
    }
    get rightDownTransPixelX() {
        return this._rightDownTransPixelX;
    }
    set rightDownTransPixelX(value) {
        this._rightDownTransPixelX = value;
    }
    get rightDownTransPixelY() {
        return this._rightDownTransPixelY;
    }
    set rightDownTransPixelY(value) {
        this._rightDownTransPixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get moveTransPixelX() {
        return this._moveTransPixelX;
    }
    set moveTransPixelX(value) {
        this._moveTransPixelX = value;
    }
    get moveTransPixelY() {
        return this._moveTransPixelY;
    }
    set moveTransPixelY(value) {
        this._moveTransPixelY = value;
    }
    /************************************************************/
    /************************************************************/
    get leftDownPhysicsX() {
        return this._leftDownPhysicsX;
    }
    set leftDownPhysicsX(value) {
        this._leftDownPhysicsX = value;
    }
    get leftDownPhysicsY() {
        return this._leftDownPhysicsY;
    }
    set leftDownPhysicsY(value) {
        this._leftDownPhysicsY = value;
    }
    get middleDownPhysicsX() {
        return this._middleDownPhysicsX;
    }
    set middleDownPhysicsX(value) {
        this._middleDownPhysicsX = value;
    }
    get middleDownPhysicsY() {
        return this._middleDownPhysicsY;
    }
    set middleDownPhysicsY(value) {
        this._middleDownPhysicsY = value;
    }
    get rightDownPhysicsX() {
        return this._rightDownPhysicsX;
    }
    set rightDownPhysicsX(value) {
        this._rightDownPhysicsX = value;
    }
    get rightDownPhysicsY() {
        return this._rightDownPhysicsY;
    }
    set rightDownPhysicsY(value) {
        this._rightDownPhysicsY = value;
    }
    /************************************************************/
    /************************************************************/
    get movePhysicsX() {
        return this._movePhysicsX;
    }
    set movePhysicsX(value) {
        this._movePhysicsX = value;
    }
    /************************************************************/
    /************************************************************/
    get leftDownRealPhysicsX() {
        return this._leftDownRealPhysicsX;
    }
    set leftDownRealPhysicsX(value) {
        this._leftDownRealPhysicsX = value;
    }
    get leftDownRealPhysicsY() {
        return this._leftDownRealPhysicsY;
    }
    set leftDownRealPhysicsY(value) {
        this._leftDownRealPhysicsY = value;
    }
    get middleDownRealPhysicsX() {
        return this._middleDownRealPhysicsX;
    }
    set middleDownRealPhysicsX(value) {
        this._middleDownRealPhysicsX = value;
    }
    get middleDownRealPhysicsY() {
        return this._middleDownRealPhysicsY;
    }
    set middleDownRealPhysicsY(value) {
        this._middleDownRealPhysicsY = value;
    }
    get rightDownRealPhysicsX() {
        return this._rightDownRealPhysicsX;
    }
    set rightDownRealPhysicsX(value) {
        this._rightDownRealPhysicsX = value;
    }
    get rightDownRealPhysicsY() {
        return this._rightDownRealPhysicsY;
    }
    set rightDownRealPhysicsY(value) {
        this._rightDownRealPhysicsY = value;
    }
    /************************************************************/
    /************************************************************/
    get movePhysicsY() {
        return this._movePhysicsY;
    }
    set movePhysicsY(value) {
        this._movePhysicsY = value;
    }
    get moveRealPhysicsX() {
        return this._moveRealPhysicsX;
    }
    set moveRealPhysicsX(value) {
        this._moveRealPhysicsX = value;
    }
    get moveRealPhysicsY() {
        return this._moveRealPhysicsY;
    }
    set moveRealPhysicsY(value) {
        this._moveRealPhysicsY = value;
    }
    /************************************************************/
    /************************************************************/
    get shiftKey() {
        return this._shiftKey;
    }
    set shiftKey(value) {
        this._shiftKey = value;
    }
    get ctrlKey() {
        return this._ctrlKey;
    }
    set ctrlKey(value) {
        this._ctrlKey = value;
    }
    get altKey() {
        return this._altKey;
    }
    set altKey(value) {
        this._altKey = value;
    }
    get metaKey() {
        return this._metaKey;
    }
    set metaKey(value) {
        this._metaKey = value;
    }
    /************************************************************/
    /************************************************************/
    get rightMouseDown() {
        return this._rightMouseDown;
    }
    set rightMouseDown(value) {
        this._rightMouseDown = value;
    }
    get middleMouseDown() {
        return this._middleMouseDown;
    }
    set middleMouseDown(value) {
        this._middleMouseDown = value;
    }
    get leftMouseDown() {
        return this._leftMouseDown;
    }
    set leftMouseDown(value) {
        this._leftMouseDown = value;
    }
    /************************************************************/
    /************************************************************/
    get mouseTimeStamp() {
        return this._mouseTimeStamp;
    }
    set mouseTimeStamp(value) {
        this._mouseTimeStamp = value;
    }
}
exports.InputContext = InputContext;
class InputInfo extends InputContext {
    constructor() {
        super();
        this._pointer = [];
    }
    get pointer() {
        return this._pointer;
    }
    set pointer(value) {
        this._pointer = value;
    }
    toJSON() {
        const data = {
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
    }
}
exports.InputInfo = InputInfo;


/***/ }),

/***/ "./src/tool/MessageTool.ts":
/*!*********************************!*\
  !*** ./src/tool/MessageTool.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageTool = void 0;
const MessageBus_1 = __webpack_require__(/*! ../../../utils-section/messageBus/MessageBus */ "../utils-section/messageBus/MessageBus.ts");
const WindowMessageBridge_1 = __webpack_require__(/*! ../../../utils-section/messageBus/WindowMessageBridge */ "../utils-section/messageBus/WindowMessageBridge.ts");
class MessageTool {
    constructor() {
        this._messageBus = new MessageBus_1.MessageBus();
        this._windowMessageBridge = new WindowMessageBridge_1.WindowMessageBridge(this._messageBus);
    }
    get messageBus() {
        return this._messageBus;
    }
    get windowMessageBridge() {
        return this._windowMessageBridge;
    }
}
exports.MessageTool = MessageTool;


/***/ }),

/***/ "./src/tool/Tool.ts":
/*!**************************!*\
  !*** ./src/tool/Tool.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tool = void 0;
const Command_1 = __webpack_require__(/*! ../config/Command */ "./src/config/Command.ts");
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const ToolChain_1 = __webpack_require__(/*! ./ToolChain */ "./src/tool/ToolChain.ts");
class Tool extends ToolChain_1.ToolChain {
    constructor() {
        super();
        this._drawing = false;
    }
    get drawing() {
        return this._drawing;
    }
    set drawing(value) {
        this._drawing = value;
    }
    handler(process) {
        if (this.nextTool) {
            process(this.nextTool);
        }
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
    }
    viewResizeHandler(inputInfo, offset) { }
}
exports.Tool = Tool;


/***/ }),

/***/ "./src/tool/ToolChain.ts":
/*!*******************************!*\
  !*** ./src/tool/ToolChain.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToolChain = void 0;
class ToolChain {
    constructor() {
        this._nextTool = null;
    }
    get nextTool() {
        return this._nextTool;
    }
    set nextTool(value) {
        this._nextTool = value;
    }
    handler(process) {
        if (this.nextTool !== null) {
            process(this.nextTool);
        }
    }
}
exports.ToolChain = ToolChain;


/***/ }),

/***/ "./src/tool/auxiliary/BaseAuxiliary.ts":
/*!*********************************************!*\
  !*** ./src/tool/auxiliary/BaseAuxiliary.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseAuxiliary = void 0;
class BaseAuxiliary {
    constructor() {
        /* ... */
    }
}
exports.BaseAuxiliary = BaseAuxiliary;


/***/ }),

/***/ "./src/tool/auxiliary/CrossAssist.ts":
/*!*******************************************!*\
  !*** ./src/tool/auxiliary/CrossAssist.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CrossAssist = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const Camera_1 = __webpack_require__(/*! ../../engine/common/Camera */ "./src/engine/common/Camera.ts");
const Vector2_1 = __webpack_require__(/*! ../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const AssistLineShape_1 = __webpack_require__(/*! ../../objects/assist/AssistLineShape */ "./src/objects/assist/AssistLineShape.ts");
const Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
const BaseAuxiliary_1 = __webpack_require__(/*! ./BaseAuxiliary */ "./src/tool/auxiliary/BaseAuxiliary.ts");
class CrossAssist extends BaseAuxiliary_1.BaseAuxiliary {
    constructor() {
        super();
        this._xLineShape = null;
        this._yLineShape = null;
    }
    hasInstance() {
        return this._xLineShape !== null && this._yLineShape !== null;
    }
    create() {
        const xLineShapeStartPoint = new Vector2_1.Vector2((-1 * Constant_1.environment.canvasElement.width) / 2, 0);
        const xLineShapeEndPoint = new Vector2_1.Vector2(Constant_1.environment.canvasElement.width / 2, 0);
        const yLineShapeStartPoint = new Vector2_1.Vector2(0, (-1 * Constant_1.environment.canvasElement.height) / 2);
        const yLineShapeEndPoint = new Vector2_1.Vector2(0, Constant_1.environment.canvasElement.height / 2);
        this._xLineShape = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerProfile_1.EDrawLayerCode.MaskLayer, xLineShapeStartPoint, xLineShapeEndPoint, false);
        this._yLineShape = (0, AssistLineShape_1.buildAssistLineShape)(DrawLayerProfile_1.EDrawLayerCode.MaskLayer, yLineShapeStartPoint, yLineShapeEndPoint, false);
        this._xLineShape.strokeColor = new Color_1.Color(255, 0, 0, 1);
        this._yLineShape.strokeColor = new Color_1.Color(255, 0, 0, 1);
    }
    update(inputInfo) {
        const camera = Camera_1.Camera.getInstance();
        const zoomCanvas = camera.getZoomRatio();
        this._xLineShape.startPoint = new Vector2_1.Vector2((-1 * Constant_1.environment.canvasElement.width) / 2 / zoomCanvas, inputInfo.movePhysicsY);
        this._xLineShape.endPoint = new Vector2_1.Vector2(Constant_1.environment.canvasElement.width / 2 / zoomCanvas, inputInfo.movePhysicsY);
        this._yLineShape.startPoint = new Vector2_1.Vector2(inputInfo.movePhysicsX, (-1 * Constant_1.environment.canvasElement.height) / 2 / zoomCanvas);
        this._yLineShape.endPoint = new Vector2_1.Vector2(inputInfo.movePhysicsX, Constant_1.environment.canvasElement.height / 2 / zoomCanvas);
    }
    destory() {
        this._xLineShape && this._xLineShape.setDelete();
        this._yLineShape && this._yLineShape.setDelete();
        this._xLineShape = null;
        this._yLineShape = null;
    }
}
exports.CrossAssist = CrossAssist;


/***/ }),

/***/ "./src/tool/common/DropDragTool.ts":
/*!*****************************************!*\
  !*** ./src/tool/common/DropDragTool.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DropDragTool = void 0;
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const Tool_1 = __webpack_require__(/*! ../Tool */ "./src/tool/Tool.ts");
class DropDragTool extends Tool_1.Tool {
    constructor() {
        super();
    }
    keyDownHandler(inputInfo) {
        // console.log(`DropDragTool: KeyDownHandler`)
        Constant_1.selectManager.keyDownHandler(inputInfo);
    }
    keyUpHandler(inputInfo) {
        // console.log(`DropDragTool: KeyUpHandler`)
        Constant_1.selectManager.keyUpHandler(inputInfo);
    }
    mouseLeftDownHandler(inputInfo) {
        // console.log(`DropDragTool: MouseLeftDown`, inputInfo)
        Constant_1.selectManager.mouseLeftDownHandler(inputInfo);
    }
    mouseMiddleDownHandler(inputInfo) {
        // console.log(`DropDragTool: MouseMiddleDown`)
        Constant_1.selectManager.mouseMiddleDownHandler(inputInfo);
    }
    mouseRightDownHandler(inputInfo) {
        // console.log(`DropDragTool: MouseRightDown`)
        Constant_1.selectManager.mouseRightDownHandler(inputInfo);
    }
    mouseMoveHandler(inputInfo) {
        // console.log(`DropDragTool: MouseMove`)
        Constant_1.selectManager.mouseMoveHandler(inputInfo);
    }
    mouseLeftUpHandler(inputInfo) {
        // console.log(`DropDragTool: MouseLeftUp`, inputInfo)
        Constant_1.selectManager.mouseLeftUpHandler(inputInfo);
    }
    mouseMiddleUpHandler(inputInfo) {
        // console.log(`DropDragTool: MouseMiddleUp`)
    }
    mouseRightUpHandler(inputInfo) {
        // console.log(`DropDragTool: MouseRightUp`)
    }
    mouseWheelHandler(inputInfo) {
        // console.log(`DropDragTool: MouseWheel`)
    }
    mouseLeaveHandler(inputInfo) {
        // console.log(`DropDragTool: MouseLeave`)
    }
    mouseEnterHandler(inputInfo) {
        // console.log(`DropDragTool: MouseEnter`)
    }
}
exports.DropDragTool = DropDragTool;


/***/ }),

/***/ "./src/tool/draw/DrawToolManager.ts":
/*!******************************************!*\
  !*** ./src/tool/draw/DrawToolManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawToolManager = void 0;
const DrawLineShapeTool_1 = __webpack_require__(/*! ./drawLineShape/DrawLineShapeTool */ "./src/tool/draw/drawLineShape/DrawLineShapeTool.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const Command_1 = __webpack_require__(/*! ../../config/Command */ "./src/config/Command.ts");
const DrawCircleShapeTool_1 = __webpack_require__(/*! ./drawCircleShape/DrawCircleShapeTool */ "./src/tool/draw/drawCircleShape/DrawCircleShapeTool.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ../../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
class DrawToolManager {
    constructor(frameToolHandler) {
        this._frameToolHandler = frameToolHandler;
        Constant_1.messageTool.messageBus.subscribe(Command_1.EFrameCommand.SWITCH_DRAW_TOOL, this.update.bind(this));
    }
    get frameToolHandler() {
        return this._frameToolHandler;
    }
    set frameToolHandler(value) {
        this._frameToolHandler = value;
    }
    update(data) {
        const { type, params } = data;
        switch (type) {
            case Command_1.EDrawToolCommand.BLANK_DROP: {
                const selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
                if (!selectedDrawLayerShapeItem) {
                    console.warn(`[${type}] please activate a draw-layer first.`);
                    break;
                }
                console.warn(`进入选择模式.`);
                Constant_1.selectManager.clearAllSelectItems();
                this.frameToolHandler.nextTool = Constant_1.dropDragTool;
                this.frameToolHandler.nextTool.drawing = false;
                if (this.frameToolHandler.auxiliaryTool) {
                    this.frameToolHandler.auxiliaryTool.destory();
                    this.frameToolHandler.auxiliaryTool = null;
                }
                break;
            }
            case Command_1.EDrawToolCommand.LINE: {
                const selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
                if (!selectedDrawLayerShapeItem) {
                    console.warn(`[${type}] please activate a draw-layer first.`);
                    break;
                }
                console.warn(`进入绘制模式: 绘制 ${Command_1.EDrawToolCommand.LINE}.`);
                Constant_1.selectManager.clearAllSelectItems();
                if (!(this.frameToolHandler.nextTool instanceof DrawLineShapeTool_1.DrawLineShapeTool)) {
                    if (this.frameToolHandler.auxiliaryTool) {
                        this.frameToolHandler.auxiliaryTool.destory();
                    }
                    const newNextTool = new DrawLineShapeTool_1.DrawLineShapeTool();
                    this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
                    this.frameToolHandler.nextTool = newNextTool;
                    this.frameToolHandler.nextTool.drawing = true;
                }
                break;
            }
            case Command_1.EDrawToolCommand.CIRCLE: {
                const selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
                if (!selectedDrawLayerShapeItem) {
                    console.warn(`[${type}] please activate a draw-layer first.`);
                    break;
                }
                console.warn(`进入绘制模式: 绘制 ${Command_1.EDrawToolCommand.CIRCLE}.`);
                Constant_1.selectManager.clearAllSelectItems();
                if (!(this.frameToolHandler.nextTool instanceof DrawCircleShapeTool_1.DrawCircleShapeTool)) {
                    if (this.frameToolHandler.auxiliaryTool) {
                        this.frameToolHandler.auxiliaryTool.destory();
                    }
                    const newNextTool = new DrawCircleShapeTool_1.DrawCircleShapeTool();
                    this.frameToolHandler.auxiliaryTool = newNextTool.initAuxiliaryTools();
                    this.frameToolHandler.nextTool = newNextTool;
                    this.frameToolHandler.nextTool.drawing = true;
                }
                break;
            }
            default:
        }
        Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.RENDER_FRAME, null);
    }
}
exports.DrawToolManager = DrawToolManager;


/***/ }),

/***/ "./src/tool/draw/drawCircleShape/DrawCircleShape.ts":
/*!**********************************************************!*\
  !*** ./src/tool/draw/drawCircleShape/DrawCircleShape.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawCircleShape = void 0;
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const CircleShape_1 = __webpack_require__(/*! ../../../objects/shapes/items/CircleShape */ "./src/objects/shapes/items/CircleShape.ts");
const CircleShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
class DrawCircleShape {
    constructor() {
        this._shapeInstances = [];
        this._selectedDrawLayerShapeItem = null;
    }
    get shapeInstances() {
        return this._shapeInstances;
    }
    set shapeInstances(value) {
        this._shapeInstances = value;
    }
    get selectedDrawLayerShapeItem() {
        return this._selectedDrawLayerShapeItem;
    }
    set selectedDrawLayerShapeItem(value) {
        this._selectedDrawLayerShapeItem = value;
    }
    completeDraw() {
        const drawedItems = [];
        if (this.shapeInstances.length) {
            for (let i = 0; i < this.shapeInstances.length; i++) {
                const targetShapeItem = this.shapeInstances[i];
                const elementItemId = Constant_1.globalIdenManager.getElementIden();
                const newTargetShapeItem = CircleShapeManager_1.CircleShapeManager.getInstance().createShapeItem(elementItemId, this.selectedDrawLayerShapeItem.model.layerItemId, targetShapeItem.centerPoint, targetShapeItem.radius, targetShapeItem.strokeWidth);
                newTargetShapeItem.strokeColor = targetShapeItem.strokeColor;
                drawedItems.push(newTargetShapeItem);
                targetShapeItem.setDelete();
            }
            this.shapeInstances = [];
        }
        return drawedItems;
    }
    cancelDraw() {
        this.destoryShapes();
    }
    updateShapes(inputInfo) {
        const len = this.shapeInstances.length;
        if (len <= 0) {
            return;
        }
        const centerPoint = this.shapeInstances[len - 1].centerPoint;
        const nowPoint = new Vector2_1.Vector2(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
        this.shapeInstances[len - 1].radius = nowPoint.sub(centerPoint).length;
    }
    createShapes(x, y) {
        this.selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
        if (!this.selectedDrawLayerShapeItem) {
            console.warn(`[draw circle] please activate a draw-layer first.`);
            return;
        }
        const centerPoint = new Vector2_1.Vector2(x, y);
        const targetShapeItem = (0, CircleShape_1.buildCircleShape)(this.selectedDrawLayerShapeItem.model.layerItemId, centerPoint, 0, 1, new Color_1.Color(1, 0, 0, 1), new Color_1.Color(0, 0, 0, 0));
        this.shapeInstances.push(targetShapeItem);
    }
    destoryShapes() {
        for (let i = 0; i < this.shapeInstances.length; i++) {
            this.shapeInstances[i].setDelete();
        }
        this.shapeInstances = [];
    }
}
exports.DrawCircleShape = DrawCircleShape;


/***/ }),

/***/ "./src/tool/draw/drawCircleShape/DrawCircleShapeTool.ts":
/*!**************************************************************!*\
  !*** ./src/tool/draw/drawCircleShape/DrawCircleShapeTool.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawCircleShapeTool = void 0;
const Command_1 = __webpack_require__(/*! ../../../config/Command */ "./src/config/Command.ts");
const OperationProfile_1 = __webpack_require__(/*! ../../../config/OperationProfile */ "./src/config/OperationProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../../../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const CrossAssist_1 = __webpack_require__(/*! ../../auxiliary/CrossAssist */ "./src/tool/auxiliary/CrossAssist.ts");
const Config_1 = __webpack_require__(/*! ../../history/command/Config */ "./src/tool/history/command/Config.ts");
const Tool_1 = __webpack_require__(/*! ../../Tool */ "./src/tool/Tool.ts");
const DrawCircleShape_1 = __webpack_require__(/*! ./DrawCircleShape */ "./src/tool/draw/drawCircleShape/DrawCircleShape.ts");
class DrawCircleShapeTool extends Tool_1.Tool {
    constructor() {
        super();
        this._drawTargetShape = new DrawCircleShape_1.DrawCircleShape();
        this._isDrawing = false;
        this._hasMoveWhenAfterRightDown = false;
    }
    initAuxiliaryTools() {
        this._crossAssist = new CrossAssist_1.CrossAssist();
        this._crossAssist.create();
        return this._crossAssist;
    }
    keyDownHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.keyDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.keyUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseLeftDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseMiddleDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseRightDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
        if (this._crossAssist) {
            this._crossAssist.update(inputInfo);
        }
        if (inputInfo.rightMouseDown) {
            this._hasMoveWhenAfterRightDown = true;
        }
        if (this._isDrawing) {
            this._drawTargetShape.updateShapes(inputInfo);
        }
        const handlerAction = (nextTool) => {
            nextTool.mouseMoveHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
        if (!this._isDrawing) {
            this._isDrawing = true;
            this._drawTargetShape.createShapes(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
        }
        else {
            this._isDrawing = false;
            const items = this._drawTargetShape.completeDraw();
            for (let i = 0; i < items.length; i++) {
                Constant_1.operationController.addHistroyRecord(items[i].elementItemId, Config_1.ECommandAction.ADD);
            }
            if (Constant_1.environment.enbaleOperationMessagesEmit) {
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.CREATE_ELEMENT, {}));
            }
        }
        const handlerAction = (nextTool) => {
            nextTool.mouseLeftUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseMiddleUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
        if (!this._hasMoveWhenAfterRightDown) {
            this._isDrawing = false;
            this._drawTargetShape.cancelDraw();
            Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.SWITCH_DRAW_TOOL, { type: Command_1.EDrawToolCommand.BLANK_DROP });
        }
        this._hasMoveWhenAfterRightDown = false;
        const handlerAction = (nextTool) => {
            nextTool.mouseRightUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseWheelHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseLeaveHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseEnterHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
}
exports.DrawCircleShapeTool = DrawCircleShapeTool;


/***/ }),

/***/ "./src/tool/draw/drawLineShape/DrawLineShape.ts":
/*!******************************************************!*\
  !*** ./src/tool/draw/drawLineShape/DrawLineShape.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLineShape = void 0;
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const LineShape_1 = __webpack_require__(/*! ../../../objects/shapes/items/LineShape */ "./src/objects/shapes/items/LineShape.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
const LineShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
const Color_1 = __webpack_require__(/*! ../../../utils/Color */ "./src/utils/Color.ts");
class DrawLineShape {
    constructor() {
        this._shapeInstances = [];
        this._selectedDrawLayerShapeItem = null;
    }
    get shapeInstances() {
        return this._shapeInstances;
    }
    set shapeInstances(value) {
        this._shapeInstances = value;
    }
    get selectedDrawLayerShapeItem() {
        return this._selectedDrawLayerShapeItem;
    }
    set selectedDrawLayerShapeItem(value) {
        this._selectedDrawLayerShapeItem = value;
    }
    completeDraw() {
        const drawedItems = [];
        if (this.shapeInstances.length) {
            for (let i = 0; i < this.shapeInstances.length; i++) {
                const targetShapeItem = this.shapeInstances[i];
                const elementItemId = Constant_1.globalIdenManager.getElementIden();
                const newTargetShapeItem = LineShapeManager_1.LineShapeManager.getInstance().createShapeItem(elementItemId, this.selectedDrawLayerShapeItem.model.layerItemId, targetShapeItem.startPoint, targetShapeItem.endPoint, targetShapeItem.strokeWidth);
                newTargetShapeItem.strokeColor = targetShapeItem.strokeColor;
                drawedItems.push(newTargetShapeItem);
                targetShapeItem.setDelete();
            }
            this.shapeInstances = [];
        }
        return drawedItems;
    }
    cancelDraw() {
        this.destoryShapes();
    }
    updateShapes(inputInfo) {
        const len = this.shapeInstances.length;
        if (len <= 0) {
            return;
        }
        this.shapeInstances[len - 1].endPoint = new Vector2_1.Vector2(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
    }
    createShapes(x, y) {
        this.selectedDrawLayerShapeItem = DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().getActiveItem();
        if (!this.selectedDrawLayerShapeItem) {
            console.warn(`[draw line] please activate a draw-layer first.`);
            return;
        }
        const startPoint = new Vector2_1.Vector2(x, y);
        const endPoint = new Vector2_1.Vector2(x, y);
        const targetShapeItem = (0, LineShape_1.buildLineShape)(this.selectedDrawLayerShapeItem.model.layerItemId, startPoint, endPoint, 1, Color_1.Color.GRAY);
        this.shapeInstances.push(targetShapeItem);
    }
    destoryShapes() {
        for (let i = 0; i < this.shapeInstances.length; i++) {
            this.shapeInstances[i].setDelete();
        }
        this.shapeInstances = [];
    }
}
exports.DrawLineShape = DrawLineShape;


/***/ }),

/***/ "./src/tool/draw/drawLineShape/DrawLineShapeTool.ts":
/*!**********************************************************!*\
  !*** ./src/tool/draw/drawLineShape/DrawLineShapeTool.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLineShapeTool = void 0;
const Command_1 = __webpack_require__(/*! ../../../config/Command */ "./src/config/Command.ts");
const OperationProfile_1 = __webpack_require__(/*! ../../../config/OperationProfile */ "./src/config/OperationProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../../../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const CrossAssist_1 = __webpack_require__(/*! ../../auxiliary/CrossAssist */ "./src/tool/auxiliary/CrossAssist.ts");
const Config_1 = __webpack_require__(/*! ../../history/command/Config */ "./src/tool/history/command/Config.ts");
const Tool_1 = __webpack_require__(/*! ../../Tool */ "./src/tool/Tool.ts");
const DrawLineShape_1 = __webpack_require__(/*! ./DrawLineShape */ "./src/tool/draw/drawLineShape/DrawLineShape.ts");
class DrawLineShapeTool extends Tool_1.Tool {
    constructor() {
        super();
        this._drawTargetShape = new DrawLineShape_1.DrawLineShape();
        this._isDrawing = false;
        this._hasMoveWhenAfterRightDown = false;
    }
    initAuxiliaryTools() {
        this._crossAssist = new CrossAssist_1.CrossAssist();
        this._crossAssist.create();
        return this._crossAssist;
    }
    keyDownHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.keyDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    keyUpHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.keyUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseLeftDownHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseLeftDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseMiddleDownHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseMiddleDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseRightDownHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseRightDownHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseMoveHandler(inputInfo) {
        if (this._crossAssist) {
            this._crossAssist.update(inputInfo);
        }
        if (inputInfo.rightMouseDown) {
            this._hasMoveWhenAfterRightDown = true;
        }
        if (this._isDrawing) {
            this._drawTargetShape.updateShapes(inputInfo);
        }
        const handlerAction = (nextTool) => {
            nextTool.mouseMoveHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseLeftUpHandler(inputInfo) {
        if (!this._isDrawing) {
            this._isDrawing = true;
            this._drawTargetShape.createShapes(inputInfo.movePhysicsX, inputInfo.movePhysicsY);
        }
        else {
            this._isDrawing = false;
            const items = this._drawTargetShape.completeDraw();
            for (let i = 0; i < items.length; i++) {
                Constant_1.operationController.addHistroyRecord(items[i].elementItemId, Config_1.ECommandAction.ADD);
            }
            if (Constant_1.environment.enbaleOperationMessagesEmit) {
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.CREATE_ELEMENT, {}));
            }
        }
        const handlerAction = (nextTool) => {
            nextTool.mouseLeftUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseMiddleUpHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseMiddleUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseRightUpHandler(inputInfo) {
        if (!this._hasMoveWhenAfterRightDown) {
            this._isDrawing = false;
            this._drawTargetShape.cancelDraw();
            Constant_1.messageTool.messageBus.publish(Command_1.EFrameCommand.SWITCH_DRAW_TOOL, { type: Command_1.EDrawToolCommand.BLANK_DROP });
        }
        this._hasMoveWhenAfterRightDown = false;
        const handlerAction = (nextTool) => {
            nextTool.mouseRightUpHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseWheelHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseWheelHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseLeaveHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseLeaveHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
    mouseEnterHandler(inputInfo) {
        const handlerAction = (nextTool) => {
            nextTool.mouseEnterHandler(inputInfo);
        };
        this.handler(handlerAction);
    }
}
exports.DrawLineShapeTool = DrawLineShapeTool;


/***/ }),

/***/ "./src/tool/history/HistoryManager.ts":
/*!********************************************!*\
  !*** ./src/tool/history/HistoryManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HistoryManager = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/tool/history/Utils.ts");
class HistoryManager {
    constructor(limit = 20) {
        this._commands = [];
        this._index = 0;
        this._limit = limit;
        this._callback = null;
    }
    get index() {
        return this._index;
    }
    set index(value) {
        this._index = value;
    }
    get isExecuting() {
        return this._isExecuting;
    }
    execute(command, action) {
        if (!command || typeof command[action] !== 'function') {
            throw new Error(`[history-manager][excute] parameter error.`);
        }
        this._isExecuting = true;
        command[action]();
        this._isExecuting = false;
    }
    add(command) {
        if (this._isExecuting) {
            return this;
        }
        this._commands.splice(this.index + 1, this._commands.length - this.index);
        this._commands.push(command);
        if (this._limit && this._commands.length > this._limit) {
            (0, Utils_1.removeFromTo)(this._commands, 0, -(this._limit + 1));
        }
        this.index = this._commands.length - 1;
        this._callback && this._callback();
        return this;
    }
    setCallback(callback) {
        this._callback = callback;
        return this;
    }
    undo() {
        let command = this._commands[this.index];
        if (!command) {
            return this;
        }
        const groupId = command.groupId;
        while (command.groupId === groupId) {
            this.execute(command, 'undo');
            this.index -= 1;
            command = this._commands[this.index];
            if (!command || !command.groupId) {
                break;
            }
        }
        this._callback && this._callback();
        return this;
    }
    redo() {
        let command = this._commands[this.index + 1];
        if (!command) {
            return this;
        }
        const groupId = command.groupId;
        while (command.groupId === groupId) {
            this.execute(command, 'redo');
            this.index += 1;
            command = this._commands[this.index + 1];
            if (!command || !command.groupId) {
                break;
            }
        }
        this._callback && this._callback();
        return this;
    }
    clear() {
        let prevSize = this._commands.length;
        this._commands = [];
        this.index = -1;
        if (this._callback && prevSize > 0) {
            this._callback();
        }
    }
    hasUndo() {
        return this.index !== -1 && this._commands.length >= 1;
    }
    hasRedo() {
        return this.index < this._commands.length - 1;
    }
    getCommands(groupId) {
        return groupId
            ? this._commands.filter((cItem) => {
                return cItem.groupId === groupId;
            })
            : this._commands;
    }
}
exports.HistoryManager = HistoryManager;


/***/ }),

/***/ "./src/tool/history/Utils.ts":
/*!***********************************!*\
  !*** ./src/tool/history/Utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeFromTo = void 0;
function removeFromTo(array, from, to) {
    //@ts-ignore
    array.splice(from, !to || 1 + to - from + (!((to < 0) ^ (from >= 0)) && (to < 0 || -1) * array.length));
    return array.length;
}
exports.removeFromTo = removeFromTo;


/***/ }),

/***/ "./src/tool/history/command/CircleShapeCommand.ts":
/*!********************************************************!*\
  !*** ./src/tool/history/command/CircleShapeCommand.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShapeCommand = void 0;
const Main_1 = __webpack_require__(/*! ../../../Main */ "./src/Main.ts");
const CircleShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
const ElementCommand_1 = __webpack_require__(/*! ./ElementCommand */ "./src/tool/history/command/ElementCommand.ts");
class CircleShapeCommand extends ElementCommand_1.ElementCommand {
    constructor(elementItem, groupId, action) {
        super(groupId, action);
        this.itemData = JSON.stringify(elementItem);
        this._elementItemId = elementItem.elementItemId;
    }
    modify() {
        const { type, status, modelType, layerItemId, elementItemId, elementItemName, centerPoint, radius, strokeWidth, strokeColor, fillColor, lineCap, isSolid, } = JSON.parse(this.itemData);
        const elementItem = CircleShapeManager_1.CircleShapeManager.getInstance().getItemById(elementItemId);
        const elementItemNowData = JSON.stringify(elementItem);
        if (elementItem.centerPoint.x !== centerPoint.x || elementItem.centerPoint.y !== centerPoint.y) {
            elementItem.centerPoint = new Main_1.Vector2(centerPoint.x, centerPoint.y);
        }
        if (elementItem.radius !== radius) {
            elementItem.radius = radius;
        }
        if (elementItem.strokeWidth !== strokeWidth) {
            elementItem.strokeWidth = strokeWidth;
        }
        if (elementItem.strokeColor !== strokeColor) {
            elementItem.strokeColor = strokeColor;
        }
        if (elementItem.fillColor !== fillColor) {
            elementItem.fillColor = fillColor;
        }
        if (elementItem.elementItemName !== elementItemName) {
            elementItem.elementItemName = elementItemName;
        }
        if (elementItem.lineCap !== lineCap) {
            elementItem.lineCap = lineCap;
        }
        if (elementItem.solid !== isSolid) {
            elementItem.solid = isSolid;
        }
        this.itemData = elementItemNowData;
    }
    rebuild() {
        const { type, status, modelType, layerItemId, elementItemId, elementItemName, centerPoint, radius, strokeWidth, strokeColor, fillColor, lineCap, isSolid, } = JSON.parse(this.itemData);
        const targetShapeItem = CircleShapeManager_1.CircleShapeManager.getInstance().createShapeItem(elementItemId, layerItemId, centerPoint, radius, strokeWidth, strokeColor, fillColor);
        targetShapeItem.elementItemName = elementItemName;
        targetShapeItem.lineCap = lineCap;
        targetShapeItem.solid = isSolid;
    }
    delete() {
        const { type, status, modelType, layerItemId, elementItemId, elementItemName, centerPoint, radius, strokeWidth, strokeColor, fillColor, lineCap, isSolid, } = JSON.parse(this.itemData);
        CircleShapeManager_1.CircleShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
}
exports.CircleShapeCommand = CircleShapeCommand;


/***/ }),

/***/ "./src/tool/history/command/Command.ts":
/*!*********************************************!*\
  !*** ./src/tool/history/command/Command.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Command = void 0;
class Command {
    constructor(groupId) {
        this._groupId = groupId;
    }
    get groupId() {
        return this._groupId;
    }
    set groupId(value) {
        this.groupId = value;
    }
}
exports.Command = Command;


/***/ }),

/***/ "./src/tool/history/command/CommandProxy.ts":
/*!**************************************************!*\
  !*** ./src/tool/history/command/CommandProxy.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommandProxy = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const CircleShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
const LineShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
const CircleShapeCommand_1 = __webpack_require__(/*! ./CircleShapeCommand */ "./src/tool/history/command/CircleShapeCommand.ts");
const LineShapeCommand_1 = __webpack_require__(/*! ./LineShapeCommand */ "./src/tool/history/command/LineShapeCommand.ts");
const Helper_1 = __webpack_require__(/*! ../../../utils/Helper */ "./src/utils/Helper.ts");
class CommandProxy {
    static getCommandInstance(elementItemId, action, groupId = String(performance.now())) {
        const elementItem = Helper_1.Helper.getElementShapeItemById(elementItemId);
        if (!elementItem) {
            throw new Error(`error in determining the type of occurrence in instantiating entity history records.`);
        }
        const elementItemModelType = elementItem.model.modelType;
        const setGroupId = groupId || String(performance.now());
        if (elementItemModelType === ElementProfile_1.EElementType.Line) {
            return new LineShapeCommand_1.LineShapeCommand(LineShapeManager_1.LineShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
        }
        if (elementItemModelType === ElementProfile_1.EElementType.Circle) {
            return new CircleShapeCommand_1.CircleShapeCommand(CircleShapeManager_1.CircleShapeManager.getInstance().getItemById(elementItemId), setGroupId, action);
        }
        throw new Error(`error in determining the type of occurrence in instantiating entity history records.`);
    }
}
exports.CommandProxy = CommandProxy;


/***/ }),

/***/ "./src/tool/history/command/Config.ts":
/*!********************************************!*\
  !*** ./src/tool/history/command/Config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECommandAction = void 0;
var ECommandAction;
(function (ECommandAction) {
    ECommandAction["MODIFY"] = "MODIFY";
    ECommandAction["ADD"] = "ADD";
    ECommandAction["DELETE"] = "DELETE";
})(ECommandAction = exports.ECommandAction || (exports.ECommandAction = {}));


/***/ }),

/***/ "./src/tool/history/command/ElementCommand.ts":
/*!****************************************************!*\
  !*** ./src/tool/history/command/ElementCommand.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementCommand = void 0;
const Command_1 = __webpack_require__(/*! ./Command */ "./src/tool/history/command/Command.ts");
const Config_1 = __webpack_require__(/*! ./Config */ "./src/tool/history/command/Config.ts");
class ElementCommand extends Command_1.Command {
    constructor(groupId, action) {
        super(groupId);
        this._action = action;
        this._itemData = undefined;
    }
    get action() {
        return this._action;
    }
    set action(value) {
        this.action = value;
    }
    get itemData() {
        return this._itemData;
    }
    set itemData(value) {
        this._itemData = value;
    }
    undo() {
        if (this.action === Config_1.ECommandAction.MODIFY) {
            this.modify();
            return;
        }
        if (this.action === Config_1.ECommandAction.ADD) {
            this.delete();
            return;
        }
        if (this.action === Config_1.ECommandAction.DELETE) {
            this.rebuild();
            return;
        }
    }
    redo() {
        if (this.action === Config_1.ECommandAction.MODIFY) {
            this.modify();
            return;
        }
        if (this.action === Config_1.ECommandAction.ADD) {
            this.rebuild();
            return;
        }
        if (this.action === Config_1.ECommandAction.DELETE) {
            this.delete();
            return;
        }
    }
}
exports.ElementCommand = ElementCommand;


/***/ }),

/***/ "./src/tool/history/command/LineShapeCommand.ts":
/*!******************************************************!*\
  !*** ./src/tool/history/command/LineShapeCommand.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineShapeCommand = void 0;
const Main_1 = __webpack_require__(/*! ../../../Main */ "./src/Main.ts");
const LineShapeManager_1 = __webpack_require__(/*! ../../../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
const ElementCommand_1 = __webpack_require__(/*! ./ElementCommand */ "./src/tool/history/command/ElementCommand.ts");
class LineShapeCommand extends ElementCommand_1.ElementCommand {
    constructor(elementItem, groupId, action) {
        super(groupId, action);
        this.itemData = JSON.stringify(elementItem);
        this._elementItemId = elementItem.elementItemId;
    }
    modify() {
        const { type, modelType, status, layerItemId, elementItemId, elementItemName, startPoint, endPoint, strokeWidth, lineCap, isSolid, strokeColor, } = JSON.parse(this.itemData);
        const elementItem = LineShapeManager_1.LineShapeManager.getInstance().getItemById(elementItemId);
        const elementItemNowData = JSON.stringify(elementItem);
        if (elementItem.startPoint.x !== startPoint.x || elementItem.startPoint.y !== startPoint.y) {
            elementItem.startPoint = new Main_1.Vector2(startPoint.x, startPoint.y);
        }
        if (elementItem.endPoint.x !== endPoint.x || elementItem.endPoint.y !== endPoint.y) {
            elementItem.endPoint = new Main_1.Vector2(endPoint.x, endPoint.y);
        }
        if (elementItem.strokeWidth !== strokeWidth) {
            elementItem.strokeWidth = strokeWidth;
        }
        if (elementItem.strokeColor !== strokeColor) {
            elementItem.strokeColor = strokeColor;
        }
        if (elementItem.elementItemName !== elementItemName) {
            elementItem.elementItemName = elementItemName;
        }
        if (elementItem.lineCap !== lineCap) {
            elementItem.lineCap = lineCap;
        }
        if (elementItem.solid !== isSolid) {
            elementItem.solid = isSolid;
        }
        this.itemData = elementItemNowData;
    }
    rebuild() {
        const { type, modelType, status, layerItemId, elementItemId, elementItemName, startPoint, endPoint, strokeWidth, lineCap, isSolid, strokeColor, } = JSON.parse(this.itemData);
        const targetShapeItem = LineShapeManager_1.LineShapeManager.getInstance().createShapeItem(elementItemId, layerItemId, startPoint, endPoint, strokeWidth, strokeColor);
        targetShapeItem.elementItemName = elementItemName;
        targetShapeItem.lineCap = lineCap;
        targetShapeItem.solid = isSolid;
    }
    delete() {
        const { type, modelType, status, layerItemId, elementItemId, elementItemName, startPoint, endPoint, strokeWidth, lineCap, isSolid, strokeColor, } = JSON.parse(this.itemData);
        LineShapeManager_1.LineShapeManager.getInstance().deleteShapeItem(elementItemId);
    }
}
exports.LineShapeCommand = LineShapeCommand;


/***/ }),

/***/ "./src/tool/selection/CircleShapeSelectionTool.ts":
/*!********************************************************!*\
  !*** ./src/tool/selection/CircleShapeSelectionTool.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleShapeSelectionTool = void 0;
const Command_1 = __webpack_require__(/*! ../../config/Command */ "./src/config/Command.ts");
const Config_1 = __webpack_require__(/*! ../../config/Config */ "./src/config/Config.ts");
const NativeProfile_1 = __webpack_require__(/*! ../../config/NativeProfile */ "./src/config/NativeProfile.ts");
const OperationProfile_1 = __webpack_require__(/*! ../../config/OperationProfile */ "./src/config/OperationProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const Matrix4_1 = __webpack_require__(/*! ../../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
const Main_1 = __webpack_require__(/*! ../../Main */ "./src/Main.ts");
const AssistPointShape_1 = __webpack_require__(/*! ../../objects/assist/AssistPointShape */ "./src/objects/assist/AssistPointShape.ts");
const CheckPrimitiveModified_1 = __webpack_require__(/*! ../../utils/CheckPrimitiveModified */ "./src/utils/CheckPrimitiveModified.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const CommandProxy_1 = __webpack_require__(/*! ../history/command/CommandProxy */ "./src/tool/history/command/CommandProxy.ts");
const Config_2 = __webpack_require__(/*! ../history/command/Config */ "./src/tool/history/command/Config.ts");
const SelectionTool_1 = __webpack_require__(/*! ./base/SelectionTool */ "./src/tool/selection/base/SelectionTool.ts");
class CircleShapeSelectionTool extends SelectionTool_1.SelectionTool {
    constructor(selectedItem) {
        super();
        this._commandGroupId = '';
        this._shapeItemCommand = null;
        this._isCreatedCommand = false;
        this._selectedItem = selectedItem;
        this._initSelectedItemJSONData = null;
        this._movePhysicsX = 0;
        this._movePhysicsY = 0;
        this._isSelectedPoint1 = false;
        this._isSelectedPoint2 = false;
        this._isSelectedPoint3 = false;
        this._isSelectedPoint4 = false;
        this._isSelectedPoint5 = false;
        this.initPointsPosition(this._selectedItem.model.layerItemId, this._selectedItem.centerPoint, this._selectedItem.radius);
    }
    mouseLeftDownSelect(inputInfo) {
        const allControlAssistPoints = [this._point1, this._point2, this._point3, this._point4, this._point5];
        let hitItem = null;
        for (let i = 0; i < allControlAssistPoints.length; i++) {
            if (allControlAssistPoints[i].isSelect(inputInfo.movePhysicsX, inputInfo.movePhysicsY)) {
                hitItem = allControlAssistPoints[i];
                break;
            }
        }
        return hitItem ? hitItem.parent : null;
    }
    keyDownHandler(inputInfo) {
        switch (inputInfo.keyCode) {
            case NativeProfile_1.EDIRECTION_KEY.LEFT: {
                this.moveSelectedItem(-Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.UP: {
                this.moveSelectedItem(0, Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.RIGHT: {
                this.moveSelectedItem(Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.DOWN: {
                this.moveSelectedItem(0, -Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            default:
        }
    }
    keyUpHandler(inputInfo) { }
    mouseLeftDownHandler(inputInfo) {
        this._movePhysicsX = inputInfo.leftDownPhysicsX;
        this._movePhysicsY = inputInfo.leftDownPhysicsY;
        this._initSelectedItemJSONData = this._selectedItem.toJSON();
        if (!this._isCreatedCommand) {
            this._commandGroupId = String(performance.now());
            this._shapeItemCommand = CommandProxy_1.CommandProxy.getCommandInstance(this._selectedItem.elementItemId, Config_2.ECommandAction.MODIFY, this._commandGroupId);
            this._isCreatedCommand = true;
        }
        this._isSelectedPoint1 = this._point1.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedPoint2 = this._point2.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedPoint3 = this._point3.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedPoint4 = this._point4.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedPoint5 = this._point5.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
    }
    mouseLeftUpHandler(inputInfo) {
        if (this._selectedItem && (0, CheckPrimitiveModified_1.checkPrimitiveModified)(this._selectedItem, this._initSelectedItemJSONData, this._selectedItem.toJSON())) {
            console.log(`has modified.`);
            this._selectedItem.model.updateBBox2();
            Constant_1.historyManager.add(this._shapeItemCommand);
            this._isCreatedCommand = false;
            if (Constant_1.environment.enbaleOperationMessagesEmit) {
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.MODIFY_ELEMENT, {}));
            }
        }
        this._initSelectedItemJSONData = null;
    }
    mouseMoveHandler(inputInfo) {
        const diffX = inputInfo.movePhysicsX - this._movePhysicsX;
        const diffY = inputInfo.movePhysicsY - this._movePhysicsY;
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
    }
    mouseUpMoveHandler(inputInfo) {
        const allControlAssistPoints = [this._point1, this._point2, this._point3, this._point4, this._point5];
        let hit = false;
        for (let i = 0; i < allControlAssistPoints.length; i++) {
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
    }
    clear() {
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
    }
    initPointsPosition(layerItemId, circleCenterPoint, circleRadius) {
        this._point1 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y + circleRadius), this._selectedItem);
        this._point2 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x + circleRadius, circleCenterPoint.y), this._selectedItem);
        this._point3 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y - circleRadius), this._selectedItem);
        this._point4 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x - circleRadius, circleCenterPoint.y), this._selectedItem);
        this._point5 = (0, AssistPointShape_1.buildAssistPointShape)(layerItemId, new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y), this._selectedItem);
    }
    updatePointsPosition(circleCenterPoint, circleRadius) {
        this._point1.centerPoint = new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y + circleRadius);
        this._point2.centerPoint = new Main_1.Vector2(circleCenterPoint.x + circleRadius, circleCenterPoint.y);
        this._point3.centerPoint = new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y - circleRadius);
        this._point4.centerPoint = new Main_1.Vector2(circleCenterPoint.x - circleRadius, circleCenterPoint.y);
        this._point5.centerPoint = new Main_1.Vector2(circleCenterPoint.x, circleCenterPoint.y);
    }
    moveSelectedItem(diffX, diffY) {
        const translateMatrix4 = Matrix4_1.Matrix4.createTranslateMatrix4ByCoordinate(diffX, diffY, 0);
        this._selectedItem.transform(translateMatrix4);
        this._point1.transform(translateMatrix4);
        this._point2.transform(translateMatrix4);
        this._point3.transform(translateMatrix4);
        this._point4.transform(translateMatrix4);
        this._point5.transform(translateMatrix4);
    }
}
exports.CircleShapeSelectionTool = CircleShapeSelectionTool;


/***/ }),

/***/ "./src/tool/selection/HandlerControl.ts":
/*!**********************************************!*\
  !*** ./src/tool/selection/HandlerControl.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandlerControl = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const LineShapeSelectionTool_1 = __webpack_require__(/*! ./LineShapeSelectionTool */ "./src/tool/selection/LineShapeSelectionTool.ts");
const CircleShapeSelectionTool_1 = __webpack_require__(/*! ./CircleShapeSelectionTool */ "./src/tool/selection/CircleShapeSelectionTool.ts");
const MoveOperSelectionTool_1 = __webpack_require__(/*! ./MoveOperSelectionTool */ "./src/tool/selection/MoveOperSelectionTool.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
class HandlerControl {
    constructor() {
        this._processor = null;
    }
    mouseLeftDownSelect(inputInfo) {
        if (!this.hasProcessor()) {
            return null;
        }
        return this._processor.mouseLeftDownSelect(inputInfo);
    }
    hasProcessor() {
        return this._processor !== null;
    }
    clearProcessor() {
        this._processor && this._processor.clear();
        this._processor = null;
    }
    updateProcessor(inputInfo, clickSelect) {
        const selectedItems = Constant_1.selectManager.getAllItems();
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
        const selectItem = selectedItems[0];
        if (selectItem.getType() === ElementProfile_1.EElementType.Line) {
            this._processor = new LineShapeSelectionTool_1.LineShapeSelectionTool(selectItem);
            this._processor.mouseLeftDownHandler(inputInfo);
            return;
        }
        if (selectItem.getType() === ElementProfile_1.EElementType.Circle) {
            this._processor = new CircleShapeSelectionTool_1.CircleShapeSelectionTool(selectItem);
            this._processor.mouseLeftDownHandler(inputInfo);
            return;
        }
    }
    keyDownHandler(inputInfo) {
        this._processor && this._processor.keyDownHandler(inputInfo);
    }
    keyUpHandler(inputInfo) {
        this._processor && this._processor.keyUpHandler(inputInfo);
    }
    mouseLeftDownHandler(inputInfo) {
        this._processor && this._processor.mouseLeftDownHandler(inputInfo);
    }
    mouseLeftUpHandler(inputInfo) {
        this._processor && this._processor.mouseLeftUpHandler(inputInfo);
    }
    mouseMoveHandler(inputInfo) {
        this._processor && this._processor.mouseMoveHandler(inputInfo);
    }
    mouseUpMoveHandler(inputInfo) {
        this._processor && this._processor.mouseUpMoveHandler(inputInfo);
    }
}
exports.HandlerControl = HandlerControl;


/***/ }),

/***/ "./src/tool/selection/LineShapeSelectionTool.ts":
/*!******************************************************!*\
  !*** ./src/tool/selection/LineShapeSelectionTool.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineShapeSelectionTool = void 0;
const Command_1 = __webpack_require__(/*! ../../config/Command */ "./src/config/Command.ts");
const Config_1 = __webpack_require__(/*! ../../config/Config */ "./src/config/Config.ts");
const NativeProfile_1 = __webpack_require__(/*! ../../config/NativeProfile */ "./src/config/NativeProfile.ts");
const OperationProfile_1 = __webpack_require__(/*! ../../config/OperationProfile */ "./src/config/OperationProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const Matrix4_1 = __webpack_require__(/*! ../../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
const AssistPointShape_1 = __webpack_require__(/*! ../../objects/assist/AssistPointShape */ "./src/objects/assist/AssistPointShape.ts");
const CheckPrimitiveModified_1 = __webpack_require__(/*! ../../utils/CheckPrimitiveModified */ "./src/utils/CheckPrimitiveModified.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const CommandProxy_1 = __webpack_require__(/*! ../history/command/CommandProxy */ "./src/tool/history/command/CommandProxy.ts");
const Config_2 = __webpack_require__(/*! ../history/command/Config */ "./src/tool/history/command/Config.ts");
const SelectionTool_1 = __webpack_require__(/*! ./base/SelectionTool */ "./src/tool/selection/base/SelectionTool.ts");
class LineShapeSelectionTool extends SelectionTool_1.SelectionTool {
    constructor(selectedItem) {
        super();
        this._commandGroupId = '';
        this._shapeItemCommand = null;
        this._isCreatedCommand = false;
        this._selectedItem = selectedItem;
        this._initSelectedItemJSONData = null;
        this._movePhysicsX = 0;
        this._movePhysicsY = 0;
        this._lineStartPoint = (0, AssistPointShape_1.buildAssistPointShape)(this._selectedItem.model.layerItemId, this._selectedItem.startPoint, this._selectedItem);
        this._lineEndPoint = (0, AssistPointShape_1.buildAssistPointShape)(this._selectedItem.model.layerItemId, this._selectedItem.endPoint, this._selectedItem);
        this._isSelectedStartPoint = false;
        this._isSelectedEndPoint = false;
    }
    mouseLeftDownSelect(inputInfo) {
        const allControlAssistPoints = [this._lineStartPoint, this._lineEndPoint];
        let hitItem = null;
        for (let i = 0; i < allControlAssistPoints.length; i++) {
            if (allControlAssistPoints[i].isSelect(inputInfo.movePhysicsX, inputInfo.movePhysicsY)) {
                hitItem = allControlAssistPoints[i];
                break;
            }
        }
        return hitItem ? hitItem.parent : null;
    }
    keyDownHandler(inputInfo) {
        switch (inputInfo.keyCode) {
            case NativeProfile_1.EDIRECTION_KEY.LEFT: {
                this.moveSelectedItem(-Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.UP: {
                this.moveSelectedItem(0, Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.RIGHT: {
                this.moveSelectedItem(Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.DOWN: {
                this.moveSelectedItem(0, -Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            default:
        }
    }
    keyUpHandler(inputInfo) { }
    mouseLeftDownHandler(inputInfo) {
        this._movePhysicsX = inputInfo.leftDownPhysicsX;
        this._movePhysicsY = inputInfo.leftDownPhysicsY;
        this._initSelectedItemJSONData = this._selectedItem.toJSON();
        if (!this._isCreatedCommand && this._selectedItem) {
            this._commandGroupId = String(performance.now());
            this._shapeItemCommand = CommandProxy_1.CommandProxy.getCommandInstance(this._selectedItem.elementItemId, Config_2.ECommandAction.MODIFY, this._commandGroupId);
            this._isCreatedCommand = true;
        }
        this._isSelectedStartPoint = this._lineStartPoint.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
        this._isSelectedEndPoint = this._lineEndPoint.isSelect(inputInfo.leftDownPhysicsX, inputInfo.leftDownPhysicsY);
    }
    mouseLeftUpHandler(inputInfo) {
        if (this._selectedItem && (0, CheckPrimitiveModified_1.checkPrimitiveModified)(this._selectedItem, this._initSelectedItemJSONData, this._selectedItem.toJSON())) {
            console.log(`has modified.`);
            this._selectedItem.model.updateBBox2();
            Constant_1.historyManager.add(this._shapeItemCommand);
            this._isCreatedCommand = false;
            if (Constant_1.environment.enbaleOperationMessagesEmit) {
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.MODIFY_ELEMENT, {}));
            }
        }
    }
    mouseMoveHandler(inputInfo) {
        const diffX = inputInfo.movePhysicsX - this._movePhysicsX;
        const diffY = inputInfo.movePhysicsY - this._movePhysicsY;
        const translateMatrix4 = Matrix4_1.Matrix4.createTranslateMatrix4ByCoordinate(diffX, diffY, 0);
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
    }
    mouseUpMoveHandler(inputInfo) {
        const allControlAssistPoints = [this._lineStartPoint, this._lineEndPoint];
        let hit = false;
        for (let i = 0; i < allControlAssistPoints.length; i++) {
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
    }
    clear() {
        this._selectedItem = null;
        this._lineStartPoint.setDelete();
        this._lineEndPoint.setDelete();
        this._lineStartPoint = null;
        this._lineEndPoint = null;
        this._isSelectedStartPoint = false;
        this._isSelectedEndPoint = false;
    }
    moveSelectedItem(diffX, diffY) {
        const translateMatrix4 = Matrix4_1.Matrix4.createTranslateMatrix4ByCoordinate(diffX, diffY, 0);
        this._selectedItem.transform(translateMatrix4);
        this._lineStartPoint.transform(translateMatrix4);
        this._lineEndPoint.transform(translateMatrix4);
    }
}
exports.LineShapeSelectionTool = LineShapeSelectionTool;


/***/ }),

/***/ "./src/tool/selection/MoveOperSelectionTool.ts":
/*!*****************************************************!*\
  !*** ./src/tool/selection/MoveOperSelectionTool.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MoveOperSelectionTool = void 0;
const Command_1 = __webpack_require__(/*! ../../config/Command */ "./src/config/Command.ts");
const Config_1 = __webpack_require__(/*! ../../config/Config */ "./src/config/Config.ts");
const NativeProfile_1 = __webpack_require__(/*! ../../config/NativeProfile */ "./src/config/NativeProfile.ts");
const OperationProfile_1 = __webpack_require__(/*! ../../config/OperationProfile */ "./src/config/OperationProfile.ts");
const Constant_1 = __webpack_require__(/*! ../../Constant */ "./src/Constant.ts");
const Matrix4_1 = __webpack_require__(/*! ../../geometry/Matrix4 */ "./src/geometry/Matrix4.ts");
const CheckPrimitiveModified_1 = __webpack_require__(/*! ../../utils/CheckPrimitiveModified */ "./src/utils/CheckPrimitiveModified.ts");
const CreateOperationProfile_1 = __webpack_require__(/*! ../../utils/CreateOperationProfile */ "./src/utils/CreateOperationProfile.ts");
const CommandProxy_1 = __webpack_require__(/*! ../history/command/CommandProxy */ "./src/tool/history/command/CommandProxy.ts");
const Config_2 = __webpack_require__(/*! ../history/command/Config */ "./src/tool/history/command/Config.ts");
const SelectionTool_1 = __webpack_require__(/*! ./base/SelectionTool */ "./src/tool/selection/base/SelectionTool.ts");
class MoveOperSelectionTool extends SelectionTool_1.SelectionTool {
    constructor() {
        super();
        this._commandGroupId = '';
        this._shapeItemCommands = new Map();
        this._isCreatedCommand = false;
        this._initSelectedItemJSONDatas = [];
        this._movePhysicsX = 0;
        this._movePhysicsY = 0;
    }
    mouseLeftDownSelect(inputInfo) {
        return null;
    }
    keyDownHandler(inputInfo) {
        switch (inputInfo.keyCode) {
            case NativeProfile_1.EDIRECTION_KEY.LEFT: {
                this.moveSelectedItems(-Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.UP: {
                this.moveSelectedItems(0, Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.RIGHT: {
                this.moveSelectedItems(Config_1.DIRECTION_KEY_MOVE_STEP, 0);
                break;
            }
            case NativeProfile_1.EDIRECTION_KEY.DOWN: {
                this.moveSelectedItems(0, -Config_1.DIRECTION_KEY_MOVE_STEP);
                break;
            }
            default:
        }
    }
    keyUpHandler(inputInfo) { }
    mouseLeftDownHandler(inputInfo) {
        this._movePhysicsX = inputInfo.leftDownPhysicsX;
        this._movePhysicsY = inputInfo.leftDownPhysicsY;
        const allSelectItems = Constant_1.selectManager.getAllSelectItems();
        if (!this._isCreatedCommand && allSelectItems.length) {
            this._commandGroupId = String(performance.now());
            for (let i = 0; i < allSelectItems.length; i++) {
                this._initSelectedItemJSONDatas.push(allSelectItems[i].toJSON());
                const shapeItemCommand = CommandProxy_1.CommandProxy.getCommandInstance(allSelectItems[i].elementItemId, Config_2.ECommandAction.MODIFY, this._commandGroupId);
                this._shapeItemCommands.set(allSelectItems[i].elementItemId, shapeItemCommand);
            }
            this._isCreatedCommand = true;
        }
    }
    mouseLeftUpHandler(inputInfo) {
        const allSelectItems = Constant_1.selectManager.getAllSelectItems();
        let hasModified = false;
        for (let i = 0; i < allSelectItems.length; i++) {
            const item = allSelectItems[i];
            if ((0, CheckPrimitiveModified_1.checkPrimitiveModified)(item, this._initSelectedItemJSONDatas[i], item.toJSON())) {
                hasModified = true;
            }
            item.model.updateBBox2();
        }
        if (hasModified) {
            console.log(`has modified.`);
            for (let commandItem of this._shapeItemCommands) {
                Constant_1.historyManager.add(commandItem[1]);
            }
            if (Constant_1.environment.enbaleOperationMessagesEmit) {
                Constant_1.messageTool.messageBus.publish(Command_1.EOutEventCommand.OPERATION_CHANGED, (0, CreateOperationProfile_1.createOperationProfileChangedData)(OperationProfile_1.EOperationAction.MODIFY_ELEMENT, {}));
            }
        }
        this._shapeItemCommands.clear();
        this._isCreatedCommand = false;
    }
    mouseMoveHandler(inputInfo) {
        const diffX = inputInfo.movePhysicsX - this._movePhysicsX;
        const diffY = inputInfo.movePhysicsY - this._movePhysicsY;
        this.moveSelectedItems(diffX, diffY);
        this._movePhysicsX = inputInfo.movePhysicsX;
        this._movePhysicsY = inputInfo.movePhysicsY;
    }
    mouseUpMoveHandler(inputInfo) { }
    clear() { }
    moveSelectedItems(diffX, diffY) {
        const allSelectItems = Constant_1.selectManager.getAllSelectItems();
        const translateMatrix4 = Matrix4_1.Matrix4.createTranslateMatrix4ByCoordinate(diffX, diffY, 0);
        for (let i = 0; i < allSelectItems.length; i++) {
            const item = allSelectItems[i];
            item.transform(translateMatrix4);
        }
    }
}
exports.MoveOperSelectionTool = MoveOperSelectionTool;


/***/ }),

/***/ "./src/tool/selection/base/SelectionTool.ts":
/*!**************************************************!*\
  !*** ./src/tool/selection/base/SelectionTool.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectionTool = void 0;
class SelectionTool {
    constructor() {
        this._moveStartPosition = null;
        this._lastPosition = null;
    }
    set selectedItems(value) {
        this._selectedItems = value;
    }
    get selectedItems() {
        return this._selectedItems;
    }
    set moveStartPosition(value) {
        this._moveStartPosition = value;
    }
    get moveStartPosition() {
        return this._moveStartPosition;
    }
    set lastPosition(value) {
        this._lastPosition = value;
    }
    get lastPosition() {
        return this._lastPosition;
    }
}
exports.SelectionTool = SelectionTool;


/***/ }),

/***/ "./src/utils/CalcRealPhysicsPosition.ts":
/*!**********************************************!*\
  !*** ./src/utils/CalcRealPhysicsPosition.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calcRealPhysicsPosition = exports.calcRealPixelPosition = void 0;
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
const Vector3_1 = __webpack_require__(/*! ../geometry/Vector3 */ "./src/geometry/Vector3.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
function calcRealPixelPosition(sourcePixelX, sourcePixelY) {
    /**
     * 指定坐标点相对于 <canvas /> 元素所占区域的左上角的坐标(像素)
     */
    const mouseSourcePixelPositionVector3 = new Vector3_1.Vector3(sourcePixelX, sourcePixelY, 0);
    /**
     * <canvas /> 元素所占区域的中心点相当于自身左上角的坐标(像素)
     */
    const canvasSourcePixelCenterPointVector3 = new Vector3_1.Vector3(Constant_1.environment.canvasWidth / 2, -Constant_1.environment.canvasHeight / 2, 0);
    /**
     * 指定坐标点相当于 <canvas /> 元素所占区域的中心点的坐标(像素)
     */
    const offsetOfCanvasElementCenter = mouseSourcePixelPositionVector3.sub(canvasSourcePixelCenterPointVector3);
    /**
     * 指定坐标点相当于<画布视图原点>的坐标(像素)
     */
    const offsetOfCanvasViewOrigin = offsetOfCanvasElementCenter.multiplyMatrix4(Camera_1.Camera.getInstance().matrix4.getInverseMatrix());
    return [offsetOfCanvasViewOrigin.x, offsetOfCanvasViewOrigin.y];
}
exports.calcRealPixelPosition = calcRealPixelPosition;
function calcRealPhysicsPosition(sourcePixelX, sourcePixelY) {
    const DPI = Constant_1.environment.DPI;
    return calcRealPixelPosition(sourcePixelX, sourcePixelY).map((item, index) => {
        return (0, Utils_1.px2mm)(item, DPI[index]);
    });
}
exports.calcRealPhysicsPosition = calcRealPhysicsPosition;


/***/ }),

/***/ "./src/utils/CheckPrimitiveModified.ts":
/*!*********************************************!*\
  !*** ./src/utils/CheckPrimitiveModified.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkPrimitiveModified = void 0;
const CircleShape_1 = __webpack_require__(/*! ../objects/shapes/items/CircleShape */ "./src/objects/shapes/items/CircleShape.ts");
const LineShape_1 = __webpack_require__(/*! ../objects/shapes/items/LineShape */ "./src/objects/shapes/items/LineShape.ts");
function checkPrimitiveModified(item, oldElementItemJSONData, newElementItemJSONData) {
    if (item instanceof LineShape_1.LineShape) {
        return checkLineShapeModified(oldElementItemJSONData, newElementItemJSONData);
    }
    if (item instanceof CircleShape_1.CircleShape) {
        return checkCircleShapeModified(oldElementItemJSONData, newElementItemJSONData);
    }
    return true;
}
exports.checkPrimitiveModified = checkPrimitiveModified;
function checkLineShapeModified(oldElementItemJSONData, newElementItemJSONData) {
    if (oldElementItemJSONData.startPoint.x !== newElementItemJSONData.startPoint.x ||
        oldElementItemJSONData.startPoint.y !== newElementItemJSONData.startPoint.y) {
        return true;
    }
    if (oldElementItemJSONData.endPoint.x !== newElementItemJSONData.endPoint.x ||
        oldElementItemJSONData.endPoint.y !== newElementItemJSONData.endPoint.y) {
        return true;
    }
    if (oldElementItemJSONData.strokeColor.red !== newElementItemJSONData.strokeColor.red ||
        oldElementItemJSONData.strokeColor.green !== newElementItemJSONData.strokeColor.green ||
        oldElementItemJSONData.strokeColor.blue !== newElementItemJSONData.strokeColor.blue ||
        oldElementItemJSONData.strokeColor.alpha !== newElementItemJSONData.strokeColor.alpha) {
        return true;
    }
    if (oldElementItemJSONData.strokeWidth !== newElementItemJSONData.strokeWidth) {
        return true;
    }
    return false;
}
function checkCircleShapeModified(oldElementItemJSONData, newElementItemJSONData) {
    if (oldElementItemJSONData.centerPoint.x !== newElementItemJSONData.centerPoint.x ||
        oldElementItemJSONData.centerPoint.y !== newElementItemJSONData.centerPoint.y) {
        return true;
    }
    if (oldElementItemJSONData.radius !== newElementItemJSONData.radius) {
        return true;
    }
    if (oldElementItemJSONData.strokeColor.red !== newElementItemJSONData.strokeColor.red ||
        oldElementItemJSONData.strokeColor.green !== newElementItemJSONData.strokeColor.green ||
        oldElementItemJSONData.strokeColor.blue !== newElementItemJSONData.strokeColor.blue ||
        oldElementItemJSONData.strokeColor.alpha !== newElementItemJSONData.strokeColor.alpha) {
        return true;
    }
    if (oldElementItemJSONData.strokeWidth !== newElementItemJSONData.strokeWidth) {
        return true;
    }
    if (oldElementItemJSONData.fillColor.red !== newElementItemJSONData.fillColor.red ||
        oldElementItemJSONData.fillColor.green !== newElementItemJSONData.fillColor.green ||
        oldElementItemJSONData.fillColor.blue !== newElementItemJSONData.fillColor.blue ||
        oldElementItemJSONData.fillColor.alpha !== newElementItemJSONData.fillColor.alpha) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "./src/utils/Color.ts":
/*!****************************!*\
  !*** ./src/utils/Color.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
class Color {
    static createByHex(hex) {
        const rgbaResult = Color.hex2Rgba(hex);
        return new Color(rgbaResult.r / 255, rgbaResult.g / 255, rgbaResult.b / 255, rgbaResult.a);
    }
    static createByValue(r, g, b, a) {
        return new Color(r, g, b, a);
    }
    static createByAlpha(aplah, color = Color.WHITE) {
        aplah = aplah <= 0 ? 0 : aplah;
        aplah = aplah >= 1 ? 1 : aplah;
        return new Color(color.red, color.green, color.blue, aplah);
    }
    /**
     * RGBA 转 HEX
     *
     * { r: 255, g: 165, b: 1, a: 255 } => 'ffa501'
     */
    static rgba2Hex(rgb) {
        return ((rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).padStart(6, '0');
    }
    /**
     * HEX 转 RGBA
     *
     * '#27ae60ff' => { r: 29, g: 174, b: 96, a: 255 }
     * '#27ae60' => { r: 29, g: 174, b: 96, a: 255 }
     */
    static hex2Rgba(hex) {
        const result = { r: 0, g: 0, b: 0, a: 0 };
        let alpha = false;
        let h = hex.slice(hex.startsWith('#') ? 1 : 0);
        if (h.length === 3) {
            h = [...h]
                .map((x) => {
                return x + x;
            })
                .join('');
        }
        else if (h.length === 8) {
            alpha = true;
        }
        const n = parseInt(h, 16);
        result.r = n >>> (alpha ? 24 : 16);
        result.g = (n & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8);
        result.b = (n & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0);
        result.a = alpha ? n & 0x000000ff : 1;
        return result;
    }
    /**
     * RGBA 转 HSB
     */
    static rgba2Hsb(rgba) {
        const result = { h: 0, s: 0, b: 0 };
        const { r, g, b, a } = rgba;
        const nr = r / 255;
        const ng = g / 255;
        const nb = b / 255;
        const v = Math.max(r, g, b);
        const n = v - Math.min(r, g, b);
        const h = n === 0 ? 0 : n && v === nr ? (ng - b) / n : v === ng ? 2 + (nb - nr) / n : 4 + (nr - ng) / n;
        result.h = 60 * (h < 0 ? h + 6 : h);
        result.s = v && (n / v) * 100;
        result.b = v * 100;
        return result;
    }
    /**
     * HSB 转 RGBA
     */
    static hsb2Rgba(hsb) {
        const result = { r: 0, g: 0, b: 0, a: 0 };
        const { h, s, b } = hsb;
        const nh = h;
        const ns = s / 100;
        const nb = b / 100;
        const k = (n) => {
            return (n + nh / 60) % 6;
        };
        const f = (n) => {
            return nb * (1 - ns * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
        };
        result.r = 255 * f(5);
        result.r = 255 * f(3);
        result.r = 255 * f(1);
        result.a = 1;
        return result;
    }
    static rgba2Hsl(rgba) {
        const result = { h: 0, s: 0, l: 0 };
        const { r, g, b, a } = rgba;
        const nr = r / 255;
        const ng = g / 255;
        const nb = b / 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(nr, ng, nb);
        const h = s ? (l === nr ? (g - nb) / s : l === ng ? 2 + (nb - nr) / s : 4 + (nr - ng) / s) : 0;
        result.h = 60 * h < 0 ? 60 * h + 360 : 60 * h;
        result.s = 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0);
        result.l = (100 * (2 * l - s)) / 2;
        return result;
    }
    static hsl2Rgba(hsl) {
        const result = { r: 0, g: 0, b: 0, a: 0 };
        const { h, s, l } = hsl;
        const ns = s / 100;
        const nl = l / 100;
        const k = (n) => {
            return (n + h / 30) % 12;
        };
        const a = ns * Math.min(nl, 1 - nl);
        const f = (n) => {
            return nl - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        };
        result.r = 255 * f(0);
        result.g = 255 * f(8);
        result.b = 255 * f(4);
        result.a = 1;
        return result;
    }
    constructor(r, g, b, a = 1) {
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a;
    }
    get red() {
        return this._r;
    }
    set red(value) {
        this._r = value;
    }
    get green() {
        return this._g;
    }
    set green(value) {
        this._g = value;
    }
    get blue() {
        return this._b;
    }
    set blue(value) {
        this._b = value;
    }
    get alpha() {
        return typeof this._a === 'undefined' ? 1 : this._a;
    }
    set alpha(value) {
        this._a = value;
    }
    toRGBAString() {
        let result = `rgba(`;
        result += String(this.red * 255) + ', ';
        result += String(this.green * 255) + ', ';
        result += String(this.blue * 255) + ', ';
        result += String(this.alpha * 255) + ')';
        return result;
    }
    toRGBAJSON() {
        return {
            red: this.red,
            blue: this.blue,
            green: this.green,
            alpha: this.alpha,
        };
    }
}
exports.Color = Color;
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


/***/ }),

/***/ "./src/utils/Context.ts":
/*!******************************!*\
  !*** ./src/utils/Context.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
class Context {
    constructor(status) {
        this._status = status;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    isStatusMatch(bitIndex) {
        return (this._status & bitIndex) === bitIndex;
    }
    setStatusMatch(bitIndex, status) {
        const _v = !!status;
        let statusResult = this._status;
        if (_v) {
            statusResult = statusResult | bitIndex;
            this._status = statusResult;
            return statusResult;
        }
        statusResult = statusResult & ~bitIndex;
        this._status = statusResult;
        return statusResult;
    }
}
exports.Context = Context;


/***/ }),

/***/ "./src/utils/CreateCanvasProfile.ts":
/*!******************************************!*\
  !*** ./src/utils/CreateCanvasProfile.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCanvasProfileChangedData = void 0;
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const Camera_1 = __webpack_require__(/*! ../engine/common/Camera */ "./src/engine/common/Camera.ts");
function createCanvasProfileChangedData(params = {}) {
    return {
        zoomRatio: Camera_1.Camera.getInstance().getZoomRatio(),
        canvasWidth: Camera_1.Camera.getInstance().width,
        canvasHeight: Camera_1.Camera.getInstance().height,
        DPI: Constant_1.environment.DPI,
    };
}
exports.createCanvasProfileChangedData = createCanvasProfileChangedData;


/***/ }),

/***/ "./src/utils/CreateOperationProfile.ts":
/*!*********************************************!*\
  !*** ./src/utils/CreateOperationProfile.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createOperationProfileChangedData = void 0;
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
function createOperationProfileChangedData(action, params = {}) {
    return Object.assign({ action, allDrawLayers: Constant_1.drawLayerController.getAllDrawLayerResults() }, params);
}
exports.createOperationProfileChangedData = createOperationProfileChangedData;


/***/ }),

/***/ "./src/utils/CreateResouceProfile.ts":
/*!*******************************************!*\
  !*** ./src/utils/CreateResouceProfile.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createResouceProfileChangedData = void 0;
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
function createResouceProfileChangedData(params = {}) {
    return {
        fps: params.fps || 0,
        coreEngineType: Constant_1.environment.coreEngineType,
    };
}
exports.createResouceProfileChangedData = createResouceProfileChangedData;


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
class Device {
    static getDPR() {
        return window.devicePixelRatio || 1;
    }
    static getAbsoluteDPI() {
        const DPI = new Array(2).fill(0);
        const tmpNode = document.createElement('div');
        tmpNode.style.cssText = `height: 1in; width: 1in; left: -100%; top: -100%; position: absolute;`;
        document.body.appendChild(tmpNode);
        DPI[0] = parseInt(tmpNode.offsetWidth);
        DPI[1] = parseInt(tmpNode.offsetHeight);
        const parentNode = tmpNode.parentNode;
        parentNode.removeChild(tmpNode);
        return DPI;
    }
}
exports.Device = Device;


/***/ }),

/***/ "./src/utils/FPSCount.ts":
/*!*******************************!*\
  !*** ./src/utils/FPSCount.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FPSCount = void 0;
class FPSCount {
    constructor() {
        this._timeAnchor = 0;
        this._countByInterval = 0;
        this._consumByInterval = 0;
        this._interval = 200;
        this._overInterval = false;
        this._fps = 0;
    }
    get overInterval() {
        return this._overInterval;
    }
    get fps() {
        return this._fps;
    }
    calcFps() {
        const nowTimeStamp = performance.now();
        const consuming = nowTimeStamp - this._timeAnchor;
        this._countByInterval++;
        this._consumByInterval += consuming;
        this._overInterval = this._consumByInterval >= this._interval;
        if (this._overInterval) {
            const timeRatio = this._consumByInterval / 1000;
            this._fps = this._countByInterval / timeRatio;
            this._countByInterval = 0;
            this._consumByInterval = 0;
        }
        this._timeAnchor = nowTimeStamp;
    }
}
exports.FPSCount = FPSCount;


/***/ }),

/***/ "./src/utils/Helper.ts":
/*!*****************************!*\
  !*** ./src/utils/Helper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Helper = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const ElementProfile_1 = __webpack_require__(/*! ../config/ElementProfile */ "./src/config/ElementProfile.ts");
const CircleShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/CircleShapeManager */ "./src/objects/shapes/manager/CircleShapeManager.ts");
const DrawLayerShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/DrawLayerShapeManager */ "./src/objects/shapes/manager/DrawLayerShapeManager.ts");
const LineShapeManager_1 = __webpack_require__(/*! ../objects/shapes/manager/LineShapeManager */ "./src/objects/shapes/manager/LineShapeManager.ts");
class Helper {
    /**
     * 获取画布内所有图元
     */
    static getAllElementShapes() {
        const targetShapes = [
            ...LineShapeManager_1.LineShapeManager.getInstance().items.values(),
            ...CircleShapeManager_1.CircleShapeManager.getInstance().items.values(),
        ];
        return targetShapes;
    }
    /**
     * 获取画布内指定图元 ID 对应的图元
     */
    static getElementShapeItemById(elementItemId) {
        const allElementShapes = Helper.getAllElementShapes();
        for (let i = 0; i < allElementShapes.length; i++) {
            if (allElementShapes[i].elementItemId === elementItemId) {
                return allElementShapes[i];
            }
        }
        return null;
    }
    /**
     * 获取画布内所有绘制图层
     */
    static getAllDrawLayerShapes() {
        const allDrawLayers = Array.from(DrawLayerShapeManager_1.DrawLayerShapeManager.getInstance().items.values());
        return allDrawLayers.filter((item) => {
            return item.model.layerItemType === DrawLayerProfile_1.EDrawLayerType.ContentDrawLayer;
        });
    }
    /**
     * 删除画布内指定图元
     */
    static deleteElementItem(elementItem) {
        if (elementItem.getType() === ElementProfile_1.EElementType.Line) {
            LineShapeManager_1.LineShapeManager.getInstance().deleteShapeItem(elementItem.model.elementItemId);
            return;
        }
        if (elementItem.getType() === ElementProfile_1.EElementType.Circle) {
            CircleShapeManager_1.CircleShapeManager.getInstance().deleteShapeItem(elementItem.model.elementItemId);
            return;
        }
    }
    /**
     * 检测传入的图元 ID 是否合法
     */
    static checkDrawLayer(drawLayerItemId) {
        const allDrawLayers = Helper.getAllDrawLayerShapes();
        const checkResult = { check: true, title: undefined };
        for (let i = 0; i < allDrawLayers.length; i++) {
            if (allDrawLayers[i].model.layerItemId === drawLayerItemId) {
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
    }
}
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
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    canvasElement.width = windowInnerWidth;
    canvasElement.height = windowInnerHeight;
}
exports.syncCanvasRectByWindow = syncCanvasRectByWindow;


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSupportWebGPU = exports.nextTick = exports.setCodeCap2LineCap = exports.setLineCap2Code = exports.throttle2 = exports.throttle1 = exports.arrayCopy = exports.toFixed = exports.isEqualOfArray = exports.getLimitRange = exports.mm2px = exports.px2mm = exports.getHashIden = exports.getRandomInArea = void 0;
function getRandomInArea(min = 0, max = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getRandomInArea = getRandomInArea;
function getHashIden(length = 36) {
    const s = [];
    const HEX_DIGITS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++) {
        s[i] = HEX_DIGITS.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] && (s[14] = String(getRandomInArea(1, 9)));
    s[19] && (s[19] = HEX_DIGITS.substr((+s[19] & 0x3) | 0x8, 1));
    s[8] && (s[8] = String(getRandomInArea(1, 9)));
    s[13] && (s[13] = String(getRandomInArea(1, 9)));
    s[18] && (s[18] = String(getRandomInArea(1, 9)));
    s[23] && (s[23] = String(getRandomInArea(1, 9)));
    return s.join('');
}
exports.getHashIden = getHashIden;
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
function getLimitRange(inputNumber, min = 0.01, max = Number.MAX_SAFE_INTEGER) {
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
    const len1 = a1.length;
    const len2 = a2.length;
    if (len1 !== len2) {
        return false;
    }
    for (let k1 = 0; k1 < len1; k1++) {
        for (let k2 = 0; k2 < len2; k2++) {
            if (a1[k1] !== a2[k2]) {
                return false;
            }
        }
    }
    return true;
}
exports.isEqualOfArray = isEqualOfArray;
function toFixed(number, digit = 2, fixedDecimal = true) {
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
    const p = [1, 10, 100, 1000, 10000][digit] || Math.pow(10, digit) || 10;
    if (fixedDecimal) {
        const sign = number < 0 ? '-' : '';
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
function throttle1(fn, delay = 500) {
    let previous = 0;
    return function () {
        let now = +new Date();
        if (now - previous > delay) {
            //@ts-ignore
            fn.apply(this, arguments);
            previous = now;
        }
    };
}
exports.throttle1 = throttle1;
function throttle2(fn, delay = 500) {
    let timer = null;
    return function () {
        if (!timer) {
            timer = window.setTimeout(() => {
                timer = null;
                //@ts-ignore
                fn.apply(this, arguments);
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
        0: `butt`,
        1: `round`,
        2: `square`,
    }[code];
}
exports.setCodeCap2LineCap = setCodeCap2LineCap;
function nextTick(callback, delay = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((_) => {
            window.requestAnimationFrame(() => {
                window.setTimeout(() => {
                    callback && callback();
                    _();
                }, delay);
            });
        });
    });
}
exports.nextTick = nextTick;
function isSupportWebGPU() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!navigator.gpu) {
                throw new Error(`navigator.gpu is undefined.`);
            }
            const adapter = yield navigator.gpu.requestAdapter();
            const device = yield adapter.requestDevice();
            if (device) {
                return true;
            }
        }
        catch (e) {
            console.error(`The current environment does not support WebGPU: ${e}`);
        }
        return false;
    });
}
exports.isSupportWebGPU = isSupportWebGPU;


/***/ }),

/***/ "./src/utils/geometry/Circle.Utils.ts":
/*!********************************************!*\
  !*** ./src/utils/geometry/Circle.Utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCircleBbox2 = void 0;
const BBox2_1 = __webpack_require__(/*! ../../geometry/BBox2 */ "./src/geometry/BBox2.ts");
function createCircleBbox2(centerPoint, radius, skrokeWidth) {
    const halfWidth = radius + skrokeWidth * 0.5;
    const minX = centerPoint.x - halfWidth;
    const minY = centerPoint.y - halfWidth;
    const maxX = centerPoint.x + halfWidth;
    const maxY = centerPoint.y + halfWidth;
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
const BBox2_1 = __webpack_require__(/*! ../../geometry/BBox2 */ "./src/geometry/BBox2.ts");
function createLineBbox2(startPoint, endPoint, strokeWidth) {
    const halfWidth = strokeWidth * 0.5;
    const minX = Math.min(startPoint.x, endPoint.x) - halfWidth;
    const minY = Math.min(startPoint.y, endPoint.y) - halfWidth;
    const maxX = Math.max(startPoint.x, endPoint.x) + halfWidth;
    const maxY = Math.max(startPoint.y, endPoint.y) + halfWidth;
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.viewInit = void 0;
const Constant_1 = __webpack_require__(/*! ../Constant */ "./src/Constant.ts");
const Starter_1 = __webpack_require__(/*! ../Starter */ "./src/Starter.ts");
function viewInit() {
    return __awaiter(this, void 0, void 0, function* () {
        const starter = new Starter_1.Starter(Constant_1.environment.canvasElement);
        yield starter.init();
        window.setTimeout(() => {
            render(performance.now());
        });
        function render(timestamp) {
            starter.renderFrame(timestamp);
            window.requestAnimationFrame(render);
        }
    });
}
exports.viewInit = viewInit;


/***/ }),

/***/ "./src/view/manager/DrawLayerViewManager.ts":
/*!**************************************************!*\
  !*** ./src/view/manager/DrawLayerViewManager.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerViewManager = void 0;
const DrawLayerView_1 = __webpack_require__(/*! ../views/shapes/DrawLayerView */ "./src/view/views/shapes/DrawLayerView.ts");
class DrawLayerViewManager {
    static getInstance() {
        if (DrawLayerViewManager.thisInstance === undefined) {
            DrawLayerViewManager.thisInstance = new DrawLayerViewManager();
        }
        return DrawLayerViewManager.thisInstance;
    }
    constructor() {
        this._items = new Map();
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    handleModify(scene, layers) {
        for (let layer of layers) {
            if (layer.killed) {
                this.deleteItem(layer.model.layerItemId);
                continue;
            }
            const layerItemType = layer.getType();
            const layerStatus = layer.getStatus();
            const layerItemData = layer.toJSON();
            this.modifyItem(scene, layer.model.layerItemId, layerItemType, layerStatus, layerItemData);
        }
    }
    handleRefreshView(scene) {
        this.items.forEach((item) => {
            item.notify(scene);
        });
    }
    modifyItem(scene, layerItemId, layerItemType, layerStatus, layerItemData) {
        const layerItem = this.items.get(layerItemId);
        if (!layerItem) {
            const layerViewItem = new DrawLayerView_1.DrawLayerView(scene, layerItemId, layerItemData.layerItemName, layerItemData.layerItemOpacity, layerItemData.groupId);
            this.items.set(layerViewItem.layerItemId, layerViewItem);
            return;
        }
        layerItem.modify(layerItemData);
    }
    deleteItem(layerItemId) {
        const drawLayerViewItem = this.items.get(layerItemId);
        if (!drawLayerViewItem) {
            return;
        }
        drawLayerViewItem.delete();
        this.items.delete(layerItemId);
    }
}
exports.DrawLayerViewManager = DrawLayerViewManager;


/***/ }),

/***/ "./src/view/manager/ShapeViewManager.ts":
/*!**********************************************!*\
  !*** ./src/view/manager/ShapeViewManager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeViewManager = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const LineView_1 = __webpack_require__(/*! ../views/shapes/LineView */ "./src/view/views/shapes/LineView.ts");
const CircleView_1 = __webpack_require__(/*! ../views/shapes/CircleView */ "./src/view/views/shapes/CircleView.ts");
class ShapeViewManager {
    static getInstance() {
        if (ShapeViewManager.thisInstance === undefined) {
            ShapeViewManager.thisInstance = new ShapeViewManager();
        }
        return ShapeViewManager.thisInstance;
    }
    constructor() {
        this._items = new Map();
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    handleModify(scene, elements) {
        for (let element of elements) {
            if (element.killed) {
                this.deleteItem(element.elementItemId);
                continue;
            }
            const elementType = element.getType();
            const elementStatus = element.getStatus();
            const elementItemData = element.toJSON();
            this.modifyItem(element.elementItemId, elementType, elementStatus, elementItemData);
        }
    }
    modifyItem(elementItemId, elementType, elementStatus, elementItemData) {
        let elementItem = this.items.get(elementItemId);
        if (!elementItem) {
            let newElementItem = null;
            switch (elementType) {
                case ElementProfile_1.EElementType.AssistLine: {
                    const data = elementItemData;
                    newElementItem = new LineView_1.LineView(data.elementItemId, data.layerItemId, data.type);
                    break;
                }
                case ElementProfile_1.EElementType.Line: {
                    const data = elementItemData;
                    newElementItem = new LineView_1.LineView(data.elementItemId, data.layerItemId, data.type);
                    break;
                }
                case ElementProfile_1.EElementType.AssistCircle: {
                    const data = elementItemData;
                    newElementItem = new CircleView_1.CircleView(data.elementItemId, data.layerItemId, data.type);
                    break;
                }
                case ElementProfile_1.EElementType.Circle: {
                    const data = elementItemData;
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
    }
    deleteItem(elementItemId) {
        const elementItem = this.items.get(elementItemId);
        if (!elementItem) {
            return;
        }
        elementItem.delete();
        this.items.delete(elementItemId);
    }
}
exports.ShapeViewManager = ShapeViewManager;


/***/ }),

/***/ "./src/view/utils/createMaskColor.ts":
/*!*******************************************!*\
  !*** ./src/view/utils/createMaskColor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createFillMaskColor = exports.createStrokeMaskColor = void 0;
const Color_1 = __webpack_require__(/*! ../../utils/Color */ "./src/utils/Color.ts");
function createStrokeMaskColor() {
    return new Color_1.Color(255, 255, 255, 0.75);
}
exports.createStrokeMaskColor = createStrokeMaskColor;
function createFillMaskColor(fillColor) {
    return new Color_1.Color(255, 255, 255, fillColor.alpha > 0 ? 0.75 : 0);
}
exports.createFillMaskColor = createFillMaskColor;


/***/ }),

/***/ "./src/view/views/primitives/BaseAssisCircle.ts":
/*!******************************************************!*\
  !*** ./src/view/views/primitives/BaseAssisCircle.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseAssisCircle = void 0;
const PrimitiveItemBase_1 = __webpack_require__(/*! ./base/PrimitiveItemBase */ "./src/view/views/primitives/base/PrimitiveItemBase.ts");
class BaseAssisCircle extends PrimitiveItemBase_1.PrimitiveItemBase {
    constructor(layerItemId, parent) {
        super(layerItemId);
        this.parent = parent;
    }
    modify(status, data) {
        const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        if (this.belongId === null) {
            this.belongId = drawLayerViewItem.layerPayloads.addAssistCircleProfileItem(data);
        }
        else {
            drawLayerViewItem.layerPayloads.updateAssistCircleProfileItem(this.belongId, data);
        }
    }
    delete() {
        const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        drawLayerViewItem.layerPayloads.deletedAssistCircleProfileItem(this.belongId);
    }
}
exports.BaseAssisCircle = BaseAssisCircle;


/***/ }),

/***/ "./src/view/views/primitives/BaseAssistLine.ts":
/*!*****************************************************!*\
  !*** ./src/view/views/primitives/BaseAssistLine.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseAssistLine = void 0;
const PrimitiveItemBase_1 = __webpack_require__(/*! ./base/PrimitiveItemBase */ "./src/view/views/primitives/base/PrimitiveItemBase.ts");
class BaseAssistLine extends PrimitiveItemBase_1.PrimitiveItemBase {
    constructor(layerItemId, parent) {
        super(layerItemId);
        this.parent = parent;
    }
    modify(status, data) {
        const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        if (this.belongId === null) {
            this.belongId = drawLayerViewItem.layerPayloads.addAssistLineProfileItem(data);
        }
        else {
            drawLayerViewItem.layerPayloads.updateAssistLineProfileItem(this.belongId, data);
        }
    }
    delete() {
        const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        drawLayerViewItem.layerPayloads.deletedAssistLineProfileItem(this.belongId);
    }
}
exports.BaseAssistLine = BaseAssistLine;


/***/ }),

/***/ "./src/view/views/primitives/BaseCircle.ts":
/*!*************************************************!*\
  !*** ./src/view/views/primitives/BaseCircle.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseCircle = void 0;
const PrimitiveItemBase_1 = __webpack_require__(/*! ./base/PrimitiveItemBase */ "./src/view/views/primitives/base/PrimitiveItemBase.ts");
class BaseCircle extends PrimitiveItemBase_1.PrimitiveItemBase {
    constructor(layerItemId, parent) {
        super(layerItemId);
        this.parent = parent;
    }
    modify(status, data) {
        const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        if (this.belongId === null) {
            this.belongId = drawLayerViewItem.layerPayloads.addCircleProfileItem(data);
        }
        else {
            drawLayerViewItem.layerPayloads.updateCircleProfileItem(this.belongId, data);
        }
    }
    delete() {
        const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        drawLayerViewItem.layerPayloads.deletedCircleProfileItem(this.belongId);
    }
}
exports.BaseCircle = BaseCircle;


/***/ }),

/***/ "./src/view/views/primitives/BaseLine.ts":
/*!***********************************************!*\
  !*** ./src/view/views/primitives/BaseLine.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseLine = void 0;
const PrimitiveItemBase_1 = __webpack_require__(/*! ./base/PrimitiveItemBase */ "./src/view/views/primitives/base/PrimitiveItemBase.ts");
class BaseLine extends PrimitiveItemBase_1.PrimitiveItemBase {
    constructor(layerItemId, parent) {
        super(layerItemId);
        this.parent = parent;
    }
    modify(status, data) {
        const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        if (this.belongId === null) {
            this.belongId = drawLayerViewItem.layerPayloads.addLineProfileItem(data);
        }
        else {
            drawLayerViewItem.layerPayloads.updateLineProfileItem(this.belongId, data);
        }
    }
    delete() {
        const drawLayerViewItem = this.getDrawLayerViewItem(this.layerItemId);
        drawLayerViewItem.layerPayloads.deletedLineProfileItem(this.belongId);
    }
}
exports.BaseLine = BaseLine;


/***/ }),

/***/ "./src/view/views/primitives/base/PrimitiveBase.ts":
/*!*********************************************************!*\
  !*** ./src/view/views/primitives/base/PrimitiveBase.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrimitiveBase = void 0;
class PrimitiveBase {
    constructor() { }
}
exports.PrimitiveBase = PrimitiveBase;


/***/ }),

/***/ "./src/view/views/primitives/base/PrimitiveItemBase.ts":
/*!*************************************************************!*\
  !*** ./src/view/views/primitives/base/PrimitiveItemBase.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrimitiveItemBase = void 0;
const DrawLayerViewManager_1 = __webpack_require__(/*! ../../../manager/DrawLayerViewManager */ "./src/view/manager/DrawLayerViewManager.ts");
const PrimitiveBase_1 = __webpack_require__(/*! ./PrimitiveBase */ "./src/view/views/primitives/base/PrimitiveBase.ts");
class PrimitiveItemBase extends PrimitiveBase_1.PrimitiveBase {
    constructor(layerItemId) {
        super();
        this._primitiveItemId = null;
        this._layerItemId = layerItemId;
        this._belongId = null;
    }
    get primitiveItemId() {
        return this._primitiveItemId;
    }
    set primitiveItemId(value) {
        this._primitiveItemId = value;
    }
    get belongId() {
        return this._belongId;
    }
    set belongId(value) {
        this._belongId = value;
    }
    get layerItemId() {
        return this._layerItemId;
    }
    set layerItemId(value) {
        this._layerItemId = value;
    }
    getDrawLayerViewItem(layerItemId) {
        return DrawLayerViewManager_1.DrawLayerViewManager.getInstance().items.get(layerItemId);
    }
}
exports.PrimitiveItemBase = PrimitiveItemBase;


/***/ }),

/***/ "./src/view/views/shapes/CircleView.ts":
/*!*********************************************!*\
  !*** ./src/view/views/shapes/CircleView.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircleView = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const ShapeElementViewBase_1 = __webpack_require__(/*! ./base/ShapeElementViewBase */ "./src/view/views/shapes/base/ShapeElementViewBase.ts");
const Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const BaseCircle_1 = __webpack_require__(/*! ../primitives/BaseCircle */ "./src/view/views/primitives/BaseCircle.ts");
const createMaskColor_1 = __webpack_require__(/*! ../../utils/createMaskColor */ "./src/view/utils/createMaskColor.ts");
const BaseAssisCircle_1 = __webpack_require__(/*! ../primitives/BaseAssisCircle */ "./src/view/views/primitives/BaseAssisCircle.ts");
class CircleView extends ShapeElementViewBase_1.ShapeElementViewBase {
    constructor(id, layerItemId, type) {
        super(id);
        this._type = type;
        this._layerItemId = layerItemId;
        this._centerPoint = null;
        this._radius = 0;
        this._strokeWidth = 0;
        this._mainPrimitive = null;
        this._maskPrimitive = null;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get layerItemId() {
        return this._layerItemId;
    }
    set layerItemId(value) {
        this._layerItemId = value;
    }
    get centerPoint() {
        return this._centerPoint;
    }
    set centerPoint(value) {
        this._centerPoint = value;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get strokeWidth() {
        return this._strokeWidth;
    }
    set strokeWidth(value) {
        this._strokeWidth = value;
    }
    modify(elementStatus, elementItemData) {
        const { layerItemId, status, centerPoint, radius, strokeWidth, elementItemId, type, strokeColor, fillColor } = elementItemData;
        this.layerItemId = layerItemId;
        this.status = status;
        this.centerPoint = new Vector2_1.Vector2(centerPoint.x, centerPoint.y);
        this.radius = radius;
        this.strokeWidth = strokeWidth;
        if (!this._mainPrimitive) {
            this.delete();
            switch (type) {
                case ElementProfile_1.EElementType.Circle: {
                    this._mainPrimitive = new BaseCircle_1.BaseCircle(layerItemId, this);
                    break;
                }
                case ElementProfile_1.EElementType.AssistCircle: {
                    this._mainPrimitive = new BaseAssisCircle_1.BaseAssisCircle(layerItemId, this);
                    break;
                }
            }
        }
        this._mainPrimitive.primitiveItemId = elementItemId;
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
            const maskElementItemData = Object.assign(Object.assign({}, elementItemData), { strokeColor: (0, createMaskColor_1.createStrokeMaskColor)(), fillColor: (0, createMaskColor_1.createFillMaskColor)(fillColor) });
            this._maskPrimitive.modify(elementStatus, maskElementItemData);
        }
    }
    delete() {
        this._mainPrimitive && this._mainPrimitive.delete();
        this._maskPrimitive && this._maskPrimitive.delete();
    }
    normalview() {
        this._maskPrimitive && this._maskPrimitive.delete();
        this._maskPrimitive = null;
    }
    hightlighting(layerItemId) {
        this._maskPrimitive && this._maskPrimitive.delete();
        this._maskPrimitive = new BaseCircle_1.BaseCircle(layerItemId, this);
    }
}
exports.CircleView = CircleView;


/***/ }),

/***/ "./src/view/views/shapes/DrawLayerView.ts":
/*!************************************************!*\
  !*** ./src/view/views/shapes/DrawLayerView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerView = void 0;
const DrawLayerProfile_1 = __webpack_require__(/*! ../../../config/DrawLayerProfile */ "./src/config/DrawLayerProfile.ts");
const DrawLayerViewPayloads_1 = __webpack_require__(/*! ./DrawLayerViewPayloads */ "./src/view/views/shapes/DrawLayerViewPayloads.ts");
const Context_1 = __webpack_require__(/*! ../../../utils/Context */ "./src/utils/Context.ts");
class DrawLayerView extends Context_1.Context {
    constructor(scene, layerItemId, layerItemName, layerItemOpacity, groupId) {
        super(DrawLayerProfile_1.DRAWLAYER_INIT_STATUS);
        this._scene = scene;
        this._plane = scene.addPlaneItem(layerItemId);
        this._type = undefined;
        this._layerItemId = layerItemId;
        this._layerItemName = layerItemName;
        this._layerItemOpacity = layerItemOpacity;
        this._groupId = groupId;
        this._layerPayloads = new DrawLayerViewPayloads_1.DrawLayerViewPayloads(this);
    }
    get plane() {
        return this._plane;
    }
    get scene() {
        return this._scene;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get layerItemName() {
        return this._layerItemName;
    }
    set layerItemName(value) {
        this._layerItemName = value;
    }
    get layerItemOpacity() {
        return this._layerItemOpacity;
    }
    set layerItemOpacity(value) {
        this._layerItemOpacity = value;
    }
    get groupId() {
        return this._groupId;
    }
    set groupId(value) {
        this._groupId = value;
    }
    get layerItemId() {
        return this._layerItemId;
    }
    set layerItemId(value) {
        this._layerItemId = value;
    }
    get layerPayloads() {
        return this._layerPayloads;
    }
    set layerPayloads(value) {
        this._layerPayloads = value;
    }
    modify(layerItemData) {
        this.layerItemName = layerItemData.layerItemName;
        this.layerItemOpacity = layerItemData.layerItemOpacity;
        this.groupId = layerItemData.groupId;
    }
    delete() {
        this._scene.deletePlaneItem(this.plane.planeId);
    }
    notify(scene) {
        this.layerPayloads.notify();
    }
}
exports.DrawLayerView = DrawLayerView;


/***/ }),

/***/ "./src/view/views/shapes/DrawLayerViewPayloads.ts":
/*!********************************************************!*\
  !*** ./src/view/views/shapes/DrawLayerViewPayloads.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawLayerViewPayloads = void 0;
const Constant_1 = __webpack_require__(/*! ../../../Constant */ "./src/Constant.ts");
class DrawLayerViewPayloads {
    constructor(parent) {
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
    get parent() {
        return this._parent;
    }
    addLineProfileItem(data) {
        const id = Constant_1.globalIdenManager.getComponentIden();
        this._linesProfileCreated.set(id, data);
        return id;
    }
    updateLineProfileItem(id, data) {
        this._linesProfileUpdated.set(id, data);
    }
    deletedLineProfileItem(id) {
        this._linesProfileDeleted.add(id);
    }
    addCircleProfileItem(data) {
        const id = Constant_1.globalIdenManager.getComponentIden();
        this._circlesProfileCreated.set(id, data);
        return id;
    }
    updateCircleProfileItem(id, data) {
        this._circlesProfileUpdated.set(id, data);
    }
    deletedCircleProfileItem(id) {
        this._circlesProfileDeleted.add(id);
    }
    addAssistLineProfileItem(data) {
        const id = Constant_1.globalIdenManager.getComponentIden();
        this._assistLinesProfileCreated.set(id, data);
        return id;
    }
    updateAssistLineProfileItem(id, data) {
        this._assistLinesProfileUpdated.set(id, data);
    }
    deletedAssistLineProfileItem(id) {
        this._assistLinesProfileDeleted.add(id);
    }
    addAssistCircleProfileItem(data) {
        const id = Constant_1.globalIdenManager.getComponentIden();
        this._assistCirclesProfileCreated.set(id, data);
        return id;
    }
    updateAssistCircleProfileItem(id, data) {
        this._assistCirclesProfileUpdated.set(id, data);
    }
    deletedAssistCircleProfileItem(id) {
        this._assistCirclesProfileDeleted.add(id);
    }
    notify() {
        const plane = this.parent.plane;
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
    }
}
exports.DrawLayerViewPayloads = DrawLayerViewPayloads;


/***/ }),

/***/ "./src/view/views/shapes/LineView.ts":
/*!*******************************************!*\
  !*** ./src/view/views/shapes/LineView.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LineView = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const ShapeElementViewBase_1 = __webpack_require__(/*! ./base/ShapeElementViewBase */ "./src/view/views/shapes/base/ShapeElementViewBase.ts");
const BaseAssistLine_1 = __webpack_require__(/*! ../primitives/BaseAssistLine */ "./src/view/views/primitives/BaseAssistLine.ts");
const BaseLine_1 = __webpack_require__(/*! ../primitives/BaseLine */ "./src/view/views/primitives/BaseLine.ts");
const Vector2_1 = __webpack_require__(/*! ../../../geometry/Vector2 */ "./src/geometry/Vector2.ts");
const createMaskColor_1 = __webpack_require__(/*! ../../utils/createMaskColor */ "./src/view/utils/createMaskColor.ts");
class LineView extends ShapeElementViewBase_1.ShapeElementViewBase {
    constructor(id, layerItemId, type) {
        super(id);
        this._type = type;
        this._layerItemId = layerItemId;
        this._startPoint = null;
        this._endPoint = null;
        this._mainPrimitive = null;
        this._maskPrimitive = null;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get layerItemId() {
        return this._layerItemId;
    }
    set layerItemId(value) {
        this._layerItemId = value;
    }
    get startPoint() {
        return this._startPoint;
    }
    set startPoint(value) {
        this._startPoint = value;
    }
    get endPoint() {
        return this._endPoint;
    }
    set endPoint(value) {
        this._endPoint = value;
    }
    modify(elementStatus, elementItemData) {
        const { layerItemId, status, startPoint, endPoint, elementItemId, type } = elementItemData;
        this.layerItemId = layerItemId;
        this.status = status;
        this.startPoint = new Vector2_1.Vector2(startPoint.x, startPoint.y);
        this.endPoint = new Vector2_1.Vector2(endPoint.x, endPoint.y);
        if (!this._mainPrimitive) {
            this.delete();
            switch (type) {
                case ElementProfile_1.EElementType.Line: {
                    this._mainPrimitive = new BaseLine_1.BaseLine(layerItemId, this);
                    break;
                }
                case ElementProfile_1.EElementType.AssistLine: {
                    this._mainPrimitive = new BaseAssistLine_1.BaseAssistLine(layerItemId, this);
                    break;
                }
            }
        }
        this._mainPrimitive.primitiveItemId = elementItemId;
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
            const maskElementItemData = Object.assign(Object.assign({}, elementItemData), { strokeColor: (0, createMaskColor_1.createStrokeMaskColor)() });
            this._maskPrimitive.modify(elementStatus, maskElementItemData);
        }
    }
    delete() {
        this._mainPrimitive && this._mainPrimitive.delete();
        this._maskPrimitive && this._maskPrimitive.delete();
    }
    normalview() {
        this._maskPrimitive && this._maskPrimitive.delete();
        this._maskPrimitive = null;
    }
    hightlighting(layerItemId) {
        this._maskPrimitive && this._maskPrimitive.delete();
        this._maskPrimitive = new BaseLine_1.BaseLine(layerItemId, this);
    }
}
exports.LineView = LineView;


/***/ }),

/***/ "./src/view/views/shapes/base/ShapeElementViewBase.ts":
/*!************************************************************!*\
  !*** ./src/view/views/shapes/base/ShapeElementViewBase.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeElementViewBase = void 0;
const ElementProfile_1 = __webpack_require__(/*! ../../../../config/ElementProfile */ "./src/config/ElementProfile.ts");
const Context_1 = __webpack_require__(/*! ../../../../utils/Context */ "./src/utils/Context.ts");
const DrawLayerViewManager_1 = __webpack_require__(/*! ../../../manager/DrawLayerViewManager */ "./src/view/manager/DrawLayerViewManager.ts");
class ShapeElementViewBase extends Context_1.Context {
    constructor(id) {
        super(ElementProfile_1.ELEMENT_INIT_STATUS);
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    getDrawLayerViewItem(layerItemId) {
        return DrawLayerViewManager_1.DrawLayerViewManager.getInstance().items.get(layerItemId);
    }
    get visible() {
        return this.isStatusMatch(ElementProfile_1.EElementStatus.VISIBLE);
    }
    set visible(value) {
        this.setStatusMatch(ElementProfile_1.EElementStatus.VISIBLE, value);
    }
    get hightlight() {
        return this.isStatusMatch(ElementProfile_1.EElementStatus.HIGHTLIGHT);
    }
    set hightlight(value) {
        this.setStatusMatch(ElementProfile_1.EElementStatus.HIGHTLIGHT, value);
    }
    get locked() {
        return this.isStatusMatch(ElementProfile_1.EElementStatus.LOCKED);
    }
    set locked(value) {
        this.setStatusMatch(ElementProfile_1.EElementStatus.LOCKED, value);
    }
    get killed() {
        return this.isStatusMatch(ElementProfile_1.EElementStatus.KILLED);
    }
    set killed(value) {
        this.setStatusMatch(ElementProfile_1.EElementStatus.KILLED, value);
    }
}
exports.ShapeElementViewBase = ShapeElementViewBase;


/***/ }),

/***/ "../utils-section/messageBus/BaseMessageBridge.ts":
/*!********************************************************!*\
  !*** ../utils-section/messageBus/BaseMessageBridge.ts ***!
  \********************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseMessageBridge = void 0;
const Config_1 = __webpack_require__(/*! ./Config */ "../utils-section/messageBus/Config.ts");
class BaseMessageBridge {
    constructor(bus) {
        this._bus = bus;
    }
    processRemoteMessage(messageItem, source) {
        const { topic, type, data } = messageItem;
        switch (type) {
            case Config_1.EMessageType.PULL: {
                this._bus.pull(topic, (data) => {
                    this.push(topic, data, source);
                });
                break;
            }
            case Config_1.EMessageType.SUBSCRIBE: {
                this._bus.subscribe(topic, (data) => {
                    this.publish(topic, data, source);
                });
                break;
            }
            case Config_1.EMessageType.PUBLISH: {
                this._bus.publish(topic, data, this, source);
                break;
            }
            case Config_1.EMessageType.PUSH: {
                this._bus.push(topic, data, this, source);
                break;
            }
        }
    }
    asyncRequest(topic, data, target) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((_) => {
                const reply = this._bus.uniqueRpcTopic(topic);
                this.publish(topic, { data, reply }, target);
                this._bus.pull(reply, (data, bridge, source) => {
                    _({ data, bridge, source });
                });
            });
        });
    }
}
exports.BaseMessageBridge = BaseMessageBridge;


/***/ }),

/***/ "../utils-section/messageBus/Config.ts":
/*!*********************************************!*\
  !*** ../utils-section/messageBus/Config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RPC_RDM_PREFIX = exports.EMessageType = void 0;
var EMessageType;
(function (EMessageType) {
    EMessageType["PUBLISH"] = "PUBLISH";
    EMessageType["SUBSCRIBE"] = "SUBSCRIBE";
    EMessageType["PUSH"] = "PUSH";
    EMessageType["PULL"] = "PULL";
})(EMessageType = exports.EMessageType || (exports.EMessageType = {}));
exports.RPC_RDM_PREFIX = `__RPC_RDM_PREFIX__`;


/***/ }),

/***/ "../utils-section/messageBus/MessageBus.ts":
/*!*************************************************!*\
  !*** ../utils-section/messageBus/MessageBus.ts ***!
  \*************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageBus = void 0;
const Config_1 = __webpack_require__(/*! ./Config */ "../utils-section/messageBus/Config.ts");
const MessageBusTask_1 = __webpack_require__(/*! ./MessageBusTask */ "../utils-section/messageBus/MessageBusTask.ts");
const Utils_1 = __webpack_require__(/*! ./Utils */ "../utils-section/messageBus/Utils.ts");
class MessageBus {
    constructor() {
        this._subscribedTasks = {};
        this._pulledTasks = {};
        this._pushedMessages = {};
        this._rpcTicket = 0;
    }
    rpcReply(data, topic, bridge, source) {
        if (bridge) {
            bridge.push(topic, data, source);
            return;
        }
        this.push(topic, data);
    }
    uniqueRpcTopic(topic) {
        return topic + Config_1.RPC_RDM_PREFIX + ++this._rpcTicket;
    }
    publish(topic, data, bridge, source) {
        const tasks = this._subscribedTasks[topic];
        if (tasks instanceof Array) {
            let removedTasks = [];
            for (let i = 0; i < tasks.length; i++) {
                const taskItem = tasks[i];
                if (taskItem.isRunning) {
                    taskItem.execute(data, bridge, source);
                    continue;
                }
                removedTasks.push(taskItem);
            }
            if (removedTasks.length) {
                for (let i = 0; i < removedTasks.length; i++) {
                    const taskItem = removedTasks[i];
                    this._subscribedTasks[topic] = (0, Utils_1.remove)(this._subscribedTasks[topic], taskItem);
                }
            }
        }
    }
    subscribe(topic, callback) {
        const taskItem = new MessageBusTask_1.MessageBusTask(callback);
        (0, Utils_1.getOrInitArr)(this._subscribedTasks, topic).push(taskItem);
        return taskItem;
    }
    push(topic, data, bridge, source) {
        let consumed = false;
        const tasks = this._pulledTasks[topic];
        if (tasks instanceof Array) {
            while (tasks.length) {
                const taskItem = tasks.shift();
                if (taskItem && taskItem.isRunning) {
                    taskItem.execute(data, bridge, source);
                    consumed = true;
                    break;
                }
            }
        }
        if (consumed) {
            (0, Utils_1.getOrInitArr)(this._pushedMessages, topic).push({ data, bridge, source });
        }
    }
    pull(topic, callback) {
        const newTaskItem = new MessageBusTask_1.MessageBusTask(callback);
        const messageList = this._pushedMessages[topic];
        if (messageList instanceof Array) {
            const messageItem = messageList.shift();
            if (messageItem) {
                newTaskItem.execute(messageItem.data, messageItem.bridge, messageItem.source);
                if (messageList.length <= 0) {
                    delete this._pushedMessages[topic];
                }
            }
            return newTaskItem;
        }
        (0, Utils_1.getOrInitArr)(this._pulledTasks, topic).push(newTaskItem);
        return newTaskItem;
    }
    registeAsyncService(topic, callback) {
        this.subscribe(topic, (rpcData, bridge, source) => {
            const { data, reply } = rpcData;
            const returnal = callback(data);
            if (returnal instanceof Promise) {
                returnal
                    .then((result) => {
                    this.rpcReply(result, reply, bridge, source);
                })
                    .catch((error) => {
                    console.error(error);
                });
                return;
            }
            this.rpcReply(returnal, reply, bridge, source);
        });
    }
    asyncRequest(topic, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((_) => {
                const reply = this.uniqueRpcTopic(topic);
                this.publish(topic, { data, reply });
                this.pull(reply, (data, bridge, source) => {
                    _({ data, bridge, source });
                });
            });
        });
    }
}
exports.MessageBus = MessageBus;


/***/ }),

/***/ "../utils-section/messageBus/MessageBusTask.ts":
/*!*****************************************************!*\
  !*** ../utils-section/messageBus/MessageBusTask.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageBusTask = void 0;
const Utils_1 = __webpack_require__(/*! ./Utils */ "../utils-section/messageBus/Utils.ts");
class MessageBusTask {
    constructor(callback) {
        this._callback = callback;
        this._isRunning = true;
    }
    get isRunning() {
        return this._isRunning;
    }
    // public setCancel(): void {
    // 	this._isRunning = false
    // }
    execute(data, bridge, source) {
        try {
            const copyData = (0, Utils_1.deepClone)(data);
            this._callback(copyData, bridge, source);
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.MessageBusTask = MessageBusTask;


/***/ }),

/***/ "../utils-section/messageBus/Utils.ts":
/*!********************************************!*\
  !*** ../utils-section/messageBus/Utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOrInitArr = exports.getOrInit = exports.deepClone = exports.remove = void 0;
function remove(list, item) {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] !== item) {
            newList.push(list[i]);
        }
    }
    return newList;
}
exports.remove = remove;
function deepClone(data) {
    return traverse(data);
    function traverse(data) {
        if (typeof data !== 'object' ||
            data === null ||
            data instanceof Date ||
            data instanceof ArrayBuffer ||
            data instanceof Uint8ClampedArray ||
            data instanceof Uint8Array ||
            data instanceof Uint16Array ||
            data instanceof Uint32Array) {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map(traverse);
        }
        const obj = {};
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                obj[key] = traverse(data[key]);
            }
        }
        return obj;
    }
}
exports.deepClone = deepClone;
function getOrInit(obj, key, initializer = (key) => null) {
    let value = obj[key];
    if (typeof value !== 'undefined') {
        return value;
    }
    value = initializer(key);
    obj[key] = value;
    return value;
}
exports.getOrInit = getOrInit;
function getOrInitArr(obj, key) {
    return getOrInit(obj, key, () => {
        return [];
    });
}
exports.getOrInitArr = getOrInitArr;


/***/ }),

/***/ "../utils-section/messageBus/WindowMessageBridge.ts":
/*!**********************************************************!*\
  !*** ../utils-section/messageBus/WindowMessageBridge.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WindowMessageBridge = void 0;
const BaseMessageBridge_1 = __webpack_require__(/*! ./BaseMessageBridge */ "../utils-section/messageBus/BaseMessageBridge.ts");
const Config_1 = __webpack_require__(/*! ./Config */ "../utils-section/messageBus/Config.ts");
class WindowMessageBridge extends BaseMessageBridge_1.BaseMessageBridge {
    constructor(bus) {
        super(bus);
        window.addEventListener('message', (e) => {
            this.processRemoteMessage(e.data, e.source);
        }, false);
    }
    postMessage(topic, type, data, target) {
        const messageItem = {
            topic,
            type,
            data,
        };
        target && target.postMessage(messageItem, '*');
    }
    publish(topic, message, target) {
        this.postMessage(topic, Config_1.EMessageType.PUBLISH, message, target);
    }
    subscribe(topic, target) {
        if (target === window) {
            throw new Error(`regist remote subscribe from current window is premittied.`);
        }
        this.postMessage(topic, Config_1.EMessageType.SUBSCRIBE, null, target);
    }
    push(topic, message, target) {
        this.postMessage(topic, Config_1.EMessageType.PUSH, message, target);
    }
    pull(topic, target) {
        if (target === window) {
            throw new Error(`regist remote pull from current window is premittied.`);
        }
        this.postMessage(topic, Config_1.EMessageType.PULL, null, target);
    }
}
exports.WindowMessageBridge = WindowMessageBridge;


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