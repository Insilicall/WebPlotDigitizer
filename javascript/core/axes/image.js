/*
	WebPlotDigitizer - http://arohatgi.info/WebPlotdigitizer

	Copyright 2010-2014 Ankit Rohatgi <ankitrohatgi@hotmail.com>

	This file is part of WebPlotDigitizer.

    WebPlotDIgitizer is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    WebPlotDigitizer is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with WebPlotDigitizer.  If not, see <http://www.gnu.org/licenses/>.


*/

var wpd = wpd || {};

wpd.ImageAxes = (function () {
    var AxesObj = function () {
        var isCalibrated = false,
            processCalibration = function(cal) {  
                return true;
            };

        this.isCalibrated = function() {
            return isCalibrated;
        };

        this.calibrate = function (calib) {
            isCalibrated = processCalibration(calib);
            return isCalibrated;
        };

        this.pixelToData = function(pxi, pyi) {
            var data = [pxi, pyi];
            return data;
        };

        this.dataToPixel = function(x, y) {
            return {
                x: x,
                y: y
            };
        };
    };

    AxesObj.prototype.numCalibrationPointsRequired = function() {
        return 0;
    };

    AxesObj.prototype.getDimensions = function() {
        return 2;
    };

    return AxesObj;
})();



