require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"OrientationEvents":[function(require,module,exports){

/*

Based with values documented in:

deviceorientation -> https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation
devicemotion - > https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
 */
var _motion, _orientation, filteredAlpha, filteredBeta, filteredGamma, filteredGravX, filteredGravY, filteredGravZ, filteredX, filteredY, filteredZ;

exports.orientation = null;

exports.motion = null;

exports.smoothOrientation = 1;

exports.smoothMotion = 1;

filteredAlpha = 0;

filteredBeta = 0;

filteredGamma = 0;

filteredX = 0;

filteredY = 0;

filteredZ = 0;

filteredGravX = 0;

filteredGravY = 0;

filteredGravZ = 0;

exports.OrientationEvents = function() {
  var events;
  return events = (function() {
    switch (false) {
      case !(window.DeviceOrientationEvent && !window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return print("Device motion events are not support on this device.");
      case !(window.DeviceMotionEvent && !window.DeviceOrientationEvent):
        return print("Device orientation events are not suported on this device");
      case !(window.DeviceOrientationEvent && window.DeviceMotionEvent):
        return window.addEventListener("deviceorientation", _orientation);
      default:
        return print("Device orientation and motion events are not support on this device.");
    }
  })();
};

_motion = function(event) {
  var motion;
  filteredX = (event.acceleration.x * exports.smoothMotion) + (filteredX * (1 - exports.smoothMotion));
  filteredY = (event.acceleration.y * exports.smoothMotion) + (filteredY * (1 - exports.smoothMotion));
  filteredZ = (event.acceleration.z * exports.smoothMotion) + (filteredZ * (1 - exports.smoothMotion));
  filteredGravX = (event.accelerationIncludingGravity.x * exports.smoothMotion) + (filteredGravX * (1 - exports.smoothMotion));
  filteredGravY = (event.accelerationIncludingGravity.y * exports.smoothMotion) + (filteredGravY * (1 - exports.smoothMotion));
  filteredGravZ = (event.accelerationIncludingGravity.Z * exports.smoothMotion) + (filteredGravZ * (1 - exports.smoothMotion));
  return motion = {
    x: filteredX,
    y: filteredY,
    z: filteredZ,
    gravX: filteredGravX,
    gravY: filteredGravY,
    gravZ: filteredGravZ,
    rotationRate: event.rotationRate,
    interval: event.interval
  };
};

_orientation = function(event) {
  filteredAlpha = (event.alpha * exports.smoothOrientation) + (filteredAlpha * (1 - exports.smoothOrientation));
  filteredBeta = (event.beta * exports.smoothOrientation) + (filteredBeta * (1 - exports.smoothOrientation));
  filteredGamma = (event.gamma * exports.smoothOrientation) + (filteredGamma * (1 - exports.smoothOrientation));
  exports.orientation = {
    alpha: filteredAlpha,
    beta: filteredBeta,
    gamma: filteredGamma
  };
  return orientation;
};



},{}],"OrientationEvents":[function(require,module,exports){
// Generated by CoffeeScript 1.9.1

/*

Based with values documented in:

deviceorientation -> https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation
devicemotion - > https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
 */
var _motion, _orientation, filteredAlpha, filteredBeta, filteredGamma, filteredGravX, filteredGravY, filteredGravZ, filteredX, filteredY, filteredZ;

exports.orientation = null;

exports.motion = null;

exports.smoothOrientation = 1;

exports.smoothMotion = 1;

filteredAlpha = 0;

filteredBeta = 0;

filteredGamma = 0;

filteredX = 0;

filteredY = 0;

filteredZ = 0;

filteredGravX = 0;

filteredGravY = 0;

filteredGravZ = 0;

exports.OrientationEvents = function() {
  var events;
  return events = (function() {
    switch (false) {
      case !(window.DeviceOrientationEvent && !window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return print("Device motion events are not support on this device.");
      case !(window.DeviceMotionEvent && !window.DeviceOrientationEvent):
        return print("Device orientation events are not suported on this device");
      case !(window.DeviceOrientationEvent && window.DeviceMotionEvent):
        return window.addEventListener("deviceorientation", _orientation);
      default:
        return print("Device orientation and motion events are not support on this device.");
    }
  })();
};

_motion = function(event) {
  var motion;
  filteredX = (event.acceleration.x * exports.smoothMotion) + (filteredX * (1 - exports.smoothMotion));
  filteredY = (event.acceleration.y * exports.smoothMotion) + (filteredY * (1 - exports.smoothMotion));
  filteredZ = (event.acceleration.z * exports.smoothMotion) + (filteredZ * (1 - exports.smoothMotion));
  filteredGravX = (event.accelerationIncludingGravity.x * exports.smoothMotion) + (filteredGravX * (1 - exports.smoothMotion));
  filteredGravY = (event.accelerationIncludingGravity.y * exports.smoothMotion) + (filteredGravY * (1 - exports.smoothMotion));
  filteredGravZ = (event.accelerationIncludingGravity.Z * exports.smoothMotion) + (filteredGravZ * (1 - exports.smoothMotion));
  return motion = {
    x: filteredX,
    y: filteredY,
    z: filteredZ,
    gravX: filteredGravX,
    gravY: filteredGravY,
    gravZ: filteredGravZ,
    rotationRate: event.rotationRate,
    interval: event.interval
  };
};

_orientation = function(event) {
  filteredAlpha = (event.alpha * exports.smoothOrientation) + (filteredAlpha * (1 - exports.smoothOrientation));
  filteredBeta = (event.beta * exports.smoothOrientation) + (filteredBeta * (1 - exports.smoothOrientation));
  filteredGamma = (event.gamma * exports.smoothOrientation) + (filteredGamma * (1 - exports.smoothOrientation));
  exports.orientation = {
    alpha: filteredAlpha,
    beta: filteredBeta,
    gamma: filteredGamma
  };
  return orientation;
};

},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9zaG10dWNrZXIvRG9jdW1lbnRzL0ZyYW1lci9Qcm9qZWN0cy9EZXZpY2VPcmllbnRhdGlvbkV2ZW50cy5mcmFtZXIvbW9kdWxlcy9PcmllbnRhdGlvbkV2ZW50cy5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9qb3NobXR1Y2tlci9Eb2N1bWVudHMvRnJhbWVyL1Byb2plY3RzL0RldmljZU9yaWVudGF0aW9uRXZlbnRzLmZyYW1lci9tb2R1bGVzL09yaWVudGF0aW9uRXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFBQTs7Ozs7O0dBQUE7QUFBQSxJQUFBLCtJQUFBOztBQUFBLE9BWU8sQ0FBQyxXQUFSLEdBQXNCLElBWnRCLENBQUE7O0FBQUEsT0FlTyxDQUFDLE1BQVIsR0FBaUIsSUFmakIsQ0FBQTs7QUFBQSxPQWtCTyxDQUFDLGlCQUFSLEdBQTRCLENBbEI1QixDQUFBOztBQUFBLE9BbUJPLENBQUMsWUFBUixHQUF1QixDQW5CdkIsQ0FBQTs7QUFBQSxhQXNCQSxHQUFnQixDQXRCaEIsQ0FBQTs7QUFBQSxZQXVCQSxHQUFlLENBdkJmLENBQUE7O0FBQUEsYUF3QkEsR0FBZ0IsQ0F4QmhCLENBQUE7O0FBQUEsU0EyQkEsR0FBWSxDQTNCWixDQUFBOztBQUFBLFNBNEJBLEdBQVksQ0E1QlosQ0FBQTs7QUFBQSxTQTZCQSxHQUFZLENBN0JaLENBQUE7O0FBQUEsYUE4QkEsR0FBZ0IsQ0E5QmhCLENBQUE7O0FBQUEsYUErQkEsR0FBZ0IsQ0EvQmhCLENBQUE7O0FBQUEsYUFnQ0EsR0FBZ0IsQ0FoQ2hCLENBQUE7O0FBQUEsT0FvQ08sQ0FBQyxpQkFBUixHQUE0QixTQUFBLEdBQUE7QUFDM0IsTUFBQSxNQUFBO1NBQUEsTUFBQTtBQUFTLFlBQUEsS0FBQTtBQUFBLGFBQ0gsTUFBTSxD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QyxZQUFBLEdBQWUsQ0FBQyxDQUFBLEdBQUcsT0FBTyxDQUFDLGlCQUFaLENBQWhCLENBRDFELENBQUE7QUFBQSxFQUVBLGFBQUEsR0FBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBTixHQUFjLE9BQU8sQ0FBQyxpQkFBdkIsQ0FBQSxHQUE0QyxDQUFDLGFBQUEsR0FBZ0IsQ0FBQyxDQUFBLEdBQUcsT0FBTyxDQUFDLGlCQUFaLENBQWpCLENBRjVELENBQUE7QUFBQSxFQUlBLE9BQU8sQ0FBQyxXQUFSLEdBQ0M7QUFBQSxJQUFBLEtBQUEsRUFBTyxhQUFQO0FBQUEsSUFDQSxJQUFBLEVBQU0sWUFETjtBQUFBLElBRUEsS0FBQSxFQUFPLGFBRlA7R0FMRCxDQUFBO0FBVUEsU0FBTyxXQUFQLENBWGM7QUFBQSxDQTFFZixDQUFBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjXG5cbkJhc2VkIHdpdGggdmFsdWVzIGRvY3VtZW50ZWQgaW46XG5cbmRldmljZW9yaWVudGF0aW9uIC0+IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9kZXZpY2VvcmllbnRhdGlvblxuZGV2aWNlbW90aW9uIC0gPiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvZGV2aWNlbW90aW9uXG5cbiMjI1xuXG4jIOKAk+KAk+KAk+KAkyBWQVJJQUJMRVNcblxuIyBPcmllbnRhdGlvbiB2YWx1ZXNcbmV4cG9ydHMub3JpZW50YXRpb24gPSBudWxsXG5cbiMgTW90aW9uIFZhbHVlc1xuZXhwb3J0cy5tb3Rpb24gPSBudWxsXG5cbiMgVXNlZCBmb3Igc21vb3RoaW5nIG91dCBkYXRhIHZhbHVlc1xuZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbiA9IDFcbmV4cG9ydHMuc21vb3RoTW90aW9uID0gMVxuXG4jIEZpbHRlcmVkIHZhcmlhYmxlcyBmb3Igb3JpZW50YXRpb25cbmZpbHRlcmVkQWxwaGEgPSAwXG5maWx0ZXJlZEJldGEgPSAwXG5maWx0ZXJlZEdhbW1hID0gMFxuXG4jIEZpbHRlcmVkIHZhcmlhYmxlcyBmb3IgbW90aW9uXG5maWx0ZXJlZFggPSAwXG5maWx0ZXJlZFkgPSAwXG5maWx0ZXJlZFogPSAwXG5maWx0ZXJlZEdyYXZYID0gMFxuZmlsdGVyZWRHcmF2WSA9IDBcbmZpbHRlcmVkR3JhdlogPSAwXG5cbiMg4oCT4oCT4oCT4oCTIFBVQkxJQ1xuXG5leHBvcnRzLk9yaWVudGF0aW9uRXZlbnRzID0gLT5cblx0ZXZlbnRzID0gc3dpdGNoXG5cdFx0d2hlbiB3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCAmJiAhKHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudClcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFwiZGV2aWNlb3JpZW50YXRpb25cIiwgX29yaWVudGF0aW9uXG5cblx0XHRcdHByaW50IFwiRGV2aWNlIG1vdGlvbiBldmVudHMgYXJlIG5vdCBzdXBwb3J0IG9uIHRoaXMgZGV2aWNlLlwiXG5cdFx0d2hlbiB3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgJiYgISh3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudClcblx0XHRcdCN3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcImRldmljZW1vdGlvblwiLCBfY2FsY3VsYXRlTW90aW9uXG5cblx0XHRcdHByaW50IFwiRGV2aWNlIG9yaWVudGF0aW9uIGV2ZW50cyBhcmUgbm90IHN1cG9ydGVkIG9uIHRoaXMgZGV2aWNlXCJcblx0XHR3aGVuIHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmIHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudFxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgXCJkZXZpY2VvcmllbnRhdGlvblwiLCBfb3JpZW50YXRpb25cblx0XHRcdCN3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcImRldmljZW1vdGlvblwiLCBfY2FsY3VsYXRlTW90aW9uXG5cdFx0ZWxzZSBcblx0XHRcdHByaW50IFwiRGV2aWNlIG9yaWVudGF0aW9uIGFuZCBtb3Rpb24gZXZlbnRzIGFyZSBub3Qgc3VwcG9ydCBvbiB0aGlzIGRldmljZS5cIlxuXG4jIOKAk+KAk+KAk+KAkyBQUklWQVRFXG5cbl9tb3Rpb24gPSAoZXZlbnQpIC0+XG5cdGZpbHRlcmVkWCA9IChldmVudC5hY2NlbGVyYXRpb24ueCAqIGV4cG9ydHMuc21vb3RoTW90aW9uKSArIChmaWx0ZXJlZFggKiAoMS0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXHRmaWx0ZXJlZFkgPSAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRZICogKDEtIGV4cG9ydHMuc21vb3RoTW90aW9uKSlcblx0ZmlsdGVyZWRaID0gKGV2ZW50LmFjY2VsZXJhdGlvbi56ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWiAqICgxLSBleHBvcnRzLnNtb290aE1vdGlvbikpXG5cblx0ZmlsdGVyZWRHcmF2WCA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnggKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WCAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblx0ZmlsdGVyZWRHcmF2WSA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnkgKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WSAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblx0ZmlsdGVyZWRHcmF2WiA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LlogKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WiAqICgxLWV4cG9ydHMuc21vb3RoTW90aW9uKSlcblxuXG5cdG1vdGlvbiA9IFxuXHRcdHg6IGZpbHRlcmVkWFxuXHRcdHk6IGZpbHRlcmVkWVxuXHRcdHo6IGZpbHRlcmVkWlxuXHRcdGdyYXZYOiBmaWx0ZXJlZEdyYXZYXG5cdFx0Z3Jhdlk6IGZpbHRlcmVkR3Jhdllcblx0XHRncmF2WjogZmlsdGVyZWRHcmF2WlxuXHRcdHJvdGF0aW9uUmF0ZTogZXZlbnQucm90YXRpb25SYXRlXG5cdFx0aW50ZXJ2YWw6IGV2ZW50LmludGVydmFsXG5cbl9vcmllbnRhdGlvbiA9IChldmVudCkgLT5cblx0ZmlsdGVyZWRBbHBoYSA9IChldmVudC5hbHBoYSAqIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pICsgKGZpbHRlcmVkQWxwaGEgKiAoMS0gZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikpXG5cdGZpbHRlcmVkQmV0YSA9IChldmVudC5iZXRhICogZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikgKyAoZmlsdGVyZWRCZXRhICogKDEtIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pKVxuXHRmaWx0ZXJlZEdhbW1hID0gKGV2ZW50LmdhbW1hICogZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikgKyAoZmlsdGVyZWRHYW1tYSAqICgxLSBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSlcblxuXHRleHBvcnRzLm9yaWVudGF0aW9uID0gXG5cdFx0YWxwaGE6IGZpbHRlcmVkQWxwaGFcblx0XHRiZXRhOiBmaWx0ZXJlZEJldGFcblx0XHRnYW1tYTogZmlsdGVyZWRHYW1tYVxuXG5cblx0cmV0dXJuIG9yaWVudGF0aW9uXG5cbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjFcblxuLypcblxuQmFzZWQgd2l0aCB2YWx1ZXMgZG9jdW1lbnRlZCBpbjpcblxuZGV2aWNlb3JpZW50YXRpb24gLT4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2RldmljZW9yaWVudGF0aW9uXG5kZXZpY2Vtb3Rpb24gLSA+IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9kZXZpY2Vtb3Rpb25cbiAqL1xudmFyIF9tb3Rpb24sIF9vcmllbnRhdGlvbiwgZmlsdGVyZWRBbHBoYSwgZmlsdGVyZWRCZXRhLCBmaWx0ZXJlZEdhbW1hLCBmaWx0ZXJlZEdyYXZYLCBmaWx0ZXJlZEdyYXZZLCBmaWx0ZXJlZEdyYXZaLCBmaWx0ZXJlZFgsIGZpbHRlcmVkWSwgZmlsdGVyZWRaO1xuXG5leHBvcnRzLm9yaWVudGF0aW9uID0gbnVsbDtcblxuZXhwb3J0cy5tb3Rpb24gPSBudWxsO1xuXG5leHBvcnRzLnNtb290aE9yaWVudGF0aW9uID0gMTtcblxuZXhwb3J0cy5zbW9vdGhNb3Rpb24gPSAxO1xuXG5maWx0ZXJlZEFscGhhID0gMDtcblxuZmlsdGVyZWRCZXRhID0gMDtcblxuZmlsdGVyZWRHYW1tYSA9IDA7XG5cbmZpbHRlcmVkWCA9IDA7XG5cbmZpbHRlcmVkWSA9IDA7XG5cbmZpbHRlcmVkWiA9IDA7XG5cbmZpbHRlcmVkR3JhdlggPSAwO1xuXG5maWx0ZXJlZEdyYXZZID0gMDtcblxuZmlsdGVyZWRHcmF2WiA9IDA7XG5cbmV4cG9ydHMuT3JpZW50YXRpb25FdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGV2ZW50cztcbiAgcmV0dXJuIGV2ZW50cyA9IChmdW5jdGlvbigpIHtcbiAgICBzd2l0Y2ggKGZhbHNlKSB7XG4gICAgICBjYXNlICEod2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgIXdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCk6XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlb3JpZW50YXRpb25cIiwgX29yaWVudGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHByaW50KFwiRGV2aWNlIG1vdGlvbiBldmVudHMgYXJlIG5vdCBzdXBwb3J0IG9uIHRoaXMgZGV2aWNlLlwiKTtcbiAgICAgIGNhc2UgISh3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgJiYgIXdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50KTpcbiAgICAgICAgcmV0dXJuIHByaW50KFwiRGV2aWNlIG9yaWVudGF0aW9uIGV2ZW50cyBhcmUgbm90IHN1cG9ydGVkIG9uIHRoaXMgZGV2aWNlXCIpO1xuICAgICAgY2FzZSAhKHdpbmRvdy5EZXZpY2VPcmllbnRhdGlvbkV2ZW50ICYmIHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudCk6XG4gICAgICAgIHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZW9yaWVudGF0aW9uXCIsIF9vcmllbnRhdGlvbik7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcHJpbnQoXCJEZXZpY2Ugb3JpZW50YXRpb24gYW5kIG1vdGlvbiBldmVudHMgYXJlIG5vdCBzdXBwb3J0IG9uIHRoaXMgZGV2aWNlLlwiKTtcbiAgICB9XG4gIH0pKCk7XG59O1xuXG5fbW90aW9uID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgdmFyIG1vdGlvbjtcbiAgZmlsdGVyZWRYID0gKGV2ZW50LmFjY2VsZXJhdGlvbi54ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWCAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRZID0gKGV2ZW50LmFjY2VsZXJhdGlvbi55ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWSAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRaID0gKGV2ZW50LmFjY2VsZXJhdGlvbi56ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkWiAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRHcmF2WCA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnggKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WCAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRHcmF2WSA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnkgKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WSAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgZmlsdGVyZWRHcmF2WiA9IChldmVudC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LlogKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRHcmF2WiAqICgxIC0gZXhwb3J0cy5zbW9vdGhNb3Rpb24pKTtcbiAgcmV0dXJuIG1vdGlvbiA9IHtcbiAgICB4OiBmaWx0ZXJlZFgsXG4gICAgeTogZmlsdGVyZWRZLFxuICAgIHo6IGZpbHRlcmVkWixcbiAgICBncmF2WDogZmlsdGVyZWRHcmF2WCxcbiAgICBncmF2WTogZmlsdGVyZWRHcmF2WSxcbiAgICBncmF2WjogZmlsdGVyZWRHcmF2WixcbiAgICByb3RhdGlvblJhdGU6IGV2ZW50LnJvdGF0aW9uUmF0ZSxcbiAgICBpbnRlcnZhbDogZXZlbnQuaW50ZXJ2YWxcbiAgfTtcbn07XG5cbl9vcmllbnRhdGlvbiA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGZpbHRlcmVkQWxwaGEgPSAoZXZlbnQuYWxwaGEgKiBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSArIChmaWx0ZXJlZEFscGhhICogKDEgLSBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSk7XG4gIGZpbHRlcmVkQmV0YSA9IChldmVudC5iZXRhICogZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikgKyAoZmlsdGVyZWRCZXRhICogKDEgLSBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSk7XG4gIGZpbHRlcmVkR2FtbWEgPSAoZXZlbnQuZ2FtbWEgKiBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSArIChmaWx0ZXJlZEdhbW1hICogKDEgLSBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSk7XG4gIGV4cG9ydHMub3JpZW50YXRpb24gPSB7XG4gICAgYWxwaGE6IGZpbHRlcmVkQWxwaGEsXG4gICAgYmV0YTogZmlsdGVyZWRCZXRhLFxuICAgIGdhbW1hOiBmaWx0ZXJlZEdhbW1hXG4gIH07XG4gIHJldHVybiBvcmllbnRhdGlvbjtcbn07XG4iXX0=
