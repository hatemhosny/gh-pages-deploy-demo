function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { c as _c } from "react/compiler-runtime";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Counter(props) {
  var $ = _c(4);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var t0;
  var t1;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx("h1", {
      children: "Demo for GH Pages!"
    });
    t1 = /*#__PURE__*/_jsx("img", {
      className: "logo",
      alt: "logo",
      src: "https://livecodes.io/livecodes/assets/templates/react.svg"
    });
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  var t2;
  if ($[2] !== count) {
    t2 = /*#__PURE__*/_jsxs("div", {
      className: "container",
      children: [t0, t1, /*#__PURE__*/_jsxs("p", {
        children: ["You clicked ", count, " times."]
      }), /*#__PURE__*/_jsx("button", {
        onClick: function onClick() {
          return setCount(count + 1);
        },
        children: "Click me"
      })]
    });
    $[2] = count;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  return t2;
}
export default function App() {
  var $ = _c(1);
  var t0;
  if ($[0] === Symbol["for"]("react.memo_cache_sentinel")) {
    t0 = /*#__PURE__*/_jsx(Counter, {
      name: "React"
    });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}