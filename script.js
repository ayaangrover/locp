
(() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __esm = (fn, res) => function __init() {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
    var __commonJS = (cb, mod2) => function __require() {
      return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
    };
    var __export = (target, all) => {
      for (var name2 in all)
        __defProp(target, name2, { get: all[name2], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key2 of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key2) && key2 !== except)
            __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
      mod2
    ));
    var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);
  
    // shared/render/plugins/BaseSiteModules/tram-min.js
    var require_tram_min = __commonJS({
      "shared/render/plugins/BaseSiteModules/tram-min.js"() {
        window.tram = function(a) {
          function b(a2, b2) {
            var c2 = new M.Bare();
            return c2.init(a2, b2);
          }
          function c(a2) {
            return a2.replace(/[A-Z]/g, function(a3) {
              return "-" + a3.toLowerCase();
            });
          }
          function d(a2) {
            var b2 = parseInt(a2.slice(1), 16), c2 = b2 >> 16 & 255, d2 = b2 >> 8 & 255, e2 = 255 & b2;
            return [c2, d2, e2];
          }
          function e(a2, b2, c2) {
            return "#" + (1 << 24 | a2 << 16 | b2 << 8 | c2).toString(16).slice(1);
          }
          function f() {
          }
          function g(a2, b2) {
            j("Type warning: Expected: [" + a2 + "] Got: [" + typeof b2 + "] " + b2);
          }
          function h(a2, b2, c2) {
            j("Units do not match [" + a2 + "]: " + b2 + ", " + c2);
          }
          function i(a2, b2, c2) {
            if (void 0 !== b2 && (c2 = b2), void 0 === a2)
              return c2;
            var d2 = c2;
            return $.test(a2) || !_.test(a2) ? d2 = parseInt(a2, 10) : _.test(a2) && (d2 = 1e3 * parseFloat(a2)), 0 > d2 && (d2 = 0), d2 === d2 ? d2 : c2;
          }
          function j(a2) {
            U.debug && window && window.console.warn(a2);
          }
          function k(a2) {
            for (var b2 = -1, c2 = a2 ? a2.length : 0, d2 = []; ++b2 < c2; ) {
              var e2 = a2[b2];
              e2 && d2.push(e2);
            }
            return d2;
          }
          var l = function(a2, b2, c2) {
            function d2(a3) {
              return "object" == typeof a3;
            }
            function e2(a3) {
              return "function" == typeof a3;
            }
            function f2() {
            }
            function g2(h2, i2) {
              function j2() {
                var a3 = new k2();
                return e2(a3.init) && a3.init.apply(a3, arguments), a3;
              }
              function k2() {
              }
              i2 === c2 && (i2 = h2, h2 = Object), j2.Bare = k2;
              var l2, m2 = f2[a2] = h2[a2], n2 = k2[a2] = j2[a2] = new f2();
              return n2.constructor = j2, j2.mixin = function(b3) {
                return k2[a2] = j2[a2] = g2(j2, b3)[a2], j2;
              }, j2.open = function(a3) {
                if (l2 = {}, e2(a3) ? l2 = a3.call(j2, n2, m2, j2, h2) : d2(a3) && (l2 = a3), d2(l2))
                  for (var c3 in l2)
                    b2.call(l2, c3) && (n2[c3] = l2[c3]);
                return e2(n2.init) || (n2.init = h2), j2;
              }, j2.open(i2);
            }
            return g2;
          }("prototype", {}.hasOwnProperty), m = {
            ease: ["ease", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-2.75 * f2 * e2 + 11 * e2 * e2 + -15.5 * f2 + 8 * e2 + 0.25 * a2);
            }],
            "ease-in": ["ease-in", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (-1 * f2 * e2 + 3 * e2 * e2 + -3 * f2 + 2 * e2);
            }],
            "ease-out": ["ease-out", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (0.3 * f2 * e2 + -1.6 * e2 * e2 + 2.2 * f2 + -1.8 * e2 + 1.9 * a2);
            }],
            "ease-in-out": ["ease-in-out", function(a2, b2, c2, d2) {
              var e2 = (a2 /= d2) * a2, f2 = e2 * a2;
              return b2 + c2 * (2 * f2 * e2 + -5 * e2 * e2 + 2 * f2 + 2 * e2);
            }],
            linear: ["linear", function(a2, b2, c2, d2) {
              return c2 * a2 / d2 + b2;
            }],
            "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 + b2;
            }],
            "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(a2, b2, c2, d2) {
              return -c2 * (a2 /= d2) * (a2 - 2) + b2;
            }],
            "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 + b2 : -c2 / 2 * (--a2 * (a2 - 2) - 1) + b2;
            }],
            "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 + b2;
            }],
            "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 + 1) + b2;
            }],
            "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 + 2) + b2;
            }],
            "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 + b2;
            }],
            "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(a2, b2, c2, d2) {
              return -c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 - 1) + b2;
            }],
            "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 + b2 : -c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 - 2) + b2;
            }],
            "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(a2, b2, c2, d2) {
              return c2 * (a2 /= d2) * a2 * a2 * a2 * a2 + b2;
            }],
            "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(a2, b2, c2, d2) {
              return c2 * ((a2 = a2 / d2 - 1) * a2 * a2 * a2 * a2 + 1) + b2;
            }],
            "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * a2 * a2 * a2 + b2 : c2 / 2 * ((a2 -= 2) * a2 * a2 * a2 * a2 + 2) + b2;
            }],
            "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(a2, b2, c2, d2) {
              return -c2 * Math.cos(a2 / d2 * (Math.PI / 2)) + c2 + b2;
            }],
            "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(a2, b2, c2, d2) {
              return c2 * Math.sin(a2 / d2 * (Math.PI / 2)) + b2;
            }],
            "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(a2, b2, c2, d2) {
              return -c2 / 2 * (Math.cos(Math.PI * a2 / d2) - 1) + b2;
            }],
            "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : c2 * Math.pow(2, 10 * (a2 / d2 - 1)) + b2;
            }],
            "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(a2, b2, c2, d2) {
              return a2 === d2 ? b2 + c2 : c2 * (-Math.pow(2, -10 * a2 / d2) + 1) + b2;
            }],
            "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(a2, b2, c2, d2) {
              return 0 === a2 ? b2 : a2 === d2 ? b2 + c2 : (a2 /= d2 / 2) < 1 ? c2 / 2 * Math.pow(2, 10 * (a2 - 1)) + b2 : c2 / 2 * (-Math.pow(2, -10 * --a2) + 2) + b2;
            }],
            "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(a2, b2, c2, d2) {
              return -c2 * (Math.sqrt(1 - (a2 /= d2) * a2) - 1) + b2;
            }],
            "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(a2, b2, c2, d2) {
              return c2 * Math.sqrt(1 - (a2 = a2 / d2 - 1) * a2) + b2;
            }],
            "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(a2, b2, c2, d2) {
              return (a2 /= d2 / 2) < 1 ? -c2 / 2 * (Math.sqrt(1 - a2 * a2) - 1) + b2 : c2 / 2 * (Math.sqrt(1 - (a2 -= 2) * a2) + 1) + b2;
            }],
            "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * (a2 /= d2) * a2 * ((e2 + 1) * a2 - e2) + b2;
            }],
            "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), c2 * ((a2 = a2 / d2 - 1) * a2 * ((e2 + 1) * a2 + e2) + 1) + b2;
            }],
            "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(a2, b2, c2, d2, e2) {
              return void 0 === e2 && (e2 = 1.70158), (a2 /= d2 / 2) < 1 ? c2 / 2 * a2 * a2 * (((e2 *= 1.525) + 1) * a2 - e2) + b2 : c2 / 2 * ((a2 -= 2) * a2 * (((e2 *= 1.525) + 1) * a2 + e2) + 2) + b2;
            }]
          }, n = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          }, o = document, p = window, q = "bkwld-tram", r = /[\-\.0-9]/g, s = /[A-Z]/, t = "number", u = /^(rgb|#)/, v = /(em|cm|mm|in|pt|pc|px)$/, w = /(em|cm|mm|in|pt|pc|px|%)$/, x = /(deg|rad|turn)$/, y = "unitless", z = /(all|none) 0s ease 0s/, A = /^(width|height)$/, B = " ", C = o.createElement("a"), D = ["Webkit", "Moz", "O", "ms"], E = ["-webkit-", "-moz-", "-o-", "-ms-"], F2 = function(a2) {
            if (a2 in C.style)
              return {
                dom: a2,
                css: a2
              };
            var b2, c2, d2 = "", e2 = a2.split("-");
            for (b2 = 0; b2 < e2.length; b2++)
              d2 += e2[b2].charAt(0).toUpperCase() + e2[b2].slice(1);
            for (b2 = 0; b2 < D.length; b2++)
              if (c2 = D[b2] + d2, c2 in C.style)
                return {
                  dom: c2,
                  css: E[b2] + a2
                };
          }, G = b.support = {
            bind: Function.prototype.bind,
            transform: F2("transform"),
            transition: F2("transition"),
            backface: F2("backface-visibility"),
            timing: F2("transition-timing-function")
          };
          if (G.transition) {
            var H = G.timing.dom;
            if (C.style[H] = m["ease-in-back"][0], !C.style[H])
              for (var I in n)
                m[I][0] = n[I];
          }
          var J = b.frame = function() {
            var a2 = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
            return a2 && G.bind ? a2.bind(p) : function(a3) {
              p.setTimeout(a3, 16);
            };
          }(), K = b.now = function() {
            var a2 = p.performance, b2 = a2 && (a2.now || a2.webkitNow || a2.msNow || a2.mozNow);
            return b2 && G.bind ? b2.bind(a2) : Date.now || function() {
              return +/* @__PURE__ */ new Date();
            };
          }(), L = l(function(b2) {
            function d2(a2, b3) {
              var c2 = k(("" + a2).split(B)), d3 = c2[0];
              b3 = b3 || {};
              var e3 = Y[d3];
              if (!e3)
                return j("Unsupported property: " + d3);
              if (!b3.weak || !this.props[d3]) {
                var f3 = e3[0], g3 = this.props[d3];
                return g3 || (g3 = this.props[d3] = new f3.Bare()), g3.init(this.$el, c2, e3, b3), g3;
              }
            }
            function e2(a2, b3, c2) {
              if (a2) {
                var e3 = typeof a2;
                if (b3 || (this.timer && this.timer.destroy(), this.queue = [], this.active = false), "number" == e3 && b3)
                  return this.timer = new S({
                    duration: a2,
                    context: this,
                    complete: h2
                  }), void (this.active = true);
                if ("string" == e3 && b3) {
                  switch (a2) {
                    case "hide":
                      o2.call(this);
                      break;
                    case "stop":
                      l2.call(this);
                      break;
                    case "redraw":
                      p2.call(this);
                      break;
                    default:
                      d2.call(this, a2, c2 && c2[1]);
                  }
                  return h2.call(this);
                }
                if ("function" == e3)
                  return void a2.call(this, this);
                if ("object" == e3) {
                  var f3 = 0;
                  u2.call(this, a2, function(a3, b4) {
                    a3.span > f3 && (f3 = a3.span), a3.stop(), a3.animate(b4);
                  }, function(a3) {
                    "wait" in a3 && (f3 = i(a3.wait, 0));
                  }), t2.call(this), f3 > 0 && (this.timer = new S({
                    duration: f3,
                    context: this
                  }), this.active = true, b3 && (this.timer.complete = h2));
                  var g3 = this, j2 = false, k2 = {};
                  J(function() {
                    u2.call(g3, a2, function(a3) {
                      a3.active && (j2 = true, k2[a3.name] = a3.nextStyle);
                    }), j2 && g3.$el.css(k2);
                  });
                }
              }
            }
            function f2(a2) {
              a2 = i(a2, 0), this.active ? this.queue.push({
                options: a2
              }) : (this.timer = new S({
                duration: a2,
                context: this,
                complete: h2
              }), this.active = true);
            }
            function g2(a2) {
              return this.active ? (this.queue.push({
                options: a2,
                args: arguments
              }), void (this.timer.complete = h2)) : j("No active transition timer. Use start() or wait() before then().");
            }
            function h2() {
              if (this.timer && this.timer.destroy(), this.active = false, this.queue.length) {
                var a2 = this.queue.shift();
                e2.call(this, a2.options, true, a2.args);
              }
            }
            function l2(a2) {
              this.timer && this.timer.destroy(), this.queue = [], this.active = false;
              var b3;
              "string" == typeof a2 ? (b3 = {}, b3[a2] = 1) : b3 = "object" == typeof a2 && null != a2 ? a2 : this.props, u2.call(this, b3, v2), t2.call(this);
            }
            function m2(a2) {
              l2.call(this, a2), u2.call(this, a2, w2, x2);
            }
            function n2(a2) {
              "string" != typeof a2 && (a2 = "block"), this.el.style.display = a2;
            }
            function o2() {
              l2.call(this), this.el.style.display = "none";
            }
            function p2() {
              this.el.offsetHeight;
            }
            function r2() {
              l2.call(this), a.removeData(this.el, q), this.$el = this.el = null;
            }
            function t2() {
              var a2, b3, c2 = [];
              this.upstream && c2.push(this.upstream);
              for (a2 in this.props)
                b3 = this.props[a2], b3.active && c2.push(b3.string);
              c2 = c2.join(","), this.style !== c2 && (this.style = c2, this.el.style[G.transition.dom] = c2);
            }
            function u2(a2, b3, e3) {
              var f3, g3, h3, i2, j2 = b3 !== v2, k2 = {};
              for (f3 in a2)
                h3 = a2[f3], f3 in Z ? (k2.transform || (k2.transform = {}), k2.transform[f3] = h3) : (s.test(f3) && (f3 = c(f3)), f3 in Y ? k2[f3] = h3 : (i2 || (i2 = {}), i2[f3] = h3));
              for (f3 in k2) {
                if (h3 = k2[f3], g3 = this.props[f3], !g3) {
                  if (!j2)
                    continue;
                  g3 = d2.call(this, f3);
                }
                b3.call(this, g3, h3);
              }
              e3 && i2 && e3.call(this, i2);
            }
            function v2(a2) {
              a2.stop();
            }
            function w2(a2, b3) {
              a2.set(b3);
            }
            function x2(a2) {
              this.$el.css(a2);
            }
            function y2(a2, c2) {
              b2[a2] = function() {
                return this.children ? A2.call(this, c2, arguments) : (this.el && c2.apply(this, arguments), this);
              };
            }
            function A2(a2, b3) {
              var c2, d3 = this.children.length;
              for (c2 = 0; d3 > c2; c2++)
                a2.apply(this.children[c2], b3);
              return this;
            }
            b2.init = function(b3) {
              if (this.$el = a(b3), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = false, U.keepInherited && !U.fallback) {
                var c2 = W(this.el, "transition");
                c2 && !z.test(c2) && (this.upstream = c2);
              }
              G.backface && U.hideBackface && V(this.el, G.backface.css, "hidden");
            }, y2("add", d2), y2("start", e2), y2("wait", f2), y2("then", g2), y2("next", h2), y2("stop", l2), y2("set", m2), y2("show", n2), y2("hide", o2), y2("redraw", p2), y2("destroy", r2);
          }), M = l(L, function(b2) {
            function c2(b3, c3) {
              var d2 = a.data(b3, q) || a.data(b3, q, new L.Bare());
              return d2.el || d2.init(b3), c3 ? d2.start(c3) : d2;
            }
            b2.init = function(b3, d2) {
              var e2 = a(b3);
              if (!e2.length)
                return this;
              if (1 === e2.length)
                return c2(e2[0], d2);
              var f2 = [];
              return e2.each(function(a2, b4) {
                f2.push(c2(b4, d2));
              }), this.children = f2, this;
            };
          }), N = l(function(a2) {
            function b2() {
              var a3 = this.get();
              this.update("auto");
              var b3 = this.get();
              return this.update(a3), b3;
            }
            function c2(a3, b3, c3) {
              return void 0 !== b3 && (c3 = b3), a3 in m ? a3 : c3;
            }
            function d2(a3) {
              var b3 = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(a3);
              return (b3 ? e(b3[1], b3[2], b3[3]) : a3).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
            }
            var f2 = {
              duration: 500,
              ease: "ease",
              delay: 0
            };
            a2.init = function(a3, b3, d3, e2) {
              this.$el = a3, this.el = a3[0];
              var g2 = b3[0];
              d3[2] && (g2 = d3[2]), X[g2] && (g2 = X[g2]), this.name = g2, this.type = d3[1], this.duration = i(b3[1], this.duration, f2.duration), this.ease = c2(b3[2], this.ease, f2.ease), this.delay = i(b3[3], this.delay, f2.delay), this.span = this.duration + this.delay, this.active = false, this.nextStyle = null, this.auto = A.test(this.name), this.unit = e2.unit || this.unit || U.defaultUnit, this.angle = e2.angle || this.angle || U.defaultAngle, U.fallback || e2.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + B + this.duration + "ms" + ("ease" != this.ease ? B + m[this.ease][0] : "") + (this.delay ? B + this.delay + "ms" : ""));
            }, a2.set = function(a3) {
              a3 = this.convert(a3, this.type), this.update(a3), this.redraw();
            }, a2.transition = function(a3) {
              this.active = true, a3 = this.convert(a3, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == a3 && (a3 = b2.call(this))), this.nextStyle = a3;
            }, a2.fallback = function(a3) {
              var c3 = this.el.style[this.name] || this.convert(this.get(), this.type);
              a3 = this.convert(a3, this.type), this.auto && ("auto" == c3 && (c3 = this.convert(this.get(), this.type)), "auto" == a3 && (a3 = b2.call(this))), this.tween = new R({
                from: c3,
                to: a3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              });
            }, a2.get = function() {
              return W(this.el, this.name);
            }, a2.update = function(a3) {
              V(this.el, this.name, a3);
            }, a2.stop = function() {
              (this.active || this.nextStyle) && (this.active = false, this.nextStyle = null, V(this.el, this.name, this.get()));
              var a3 = this.tween;
              a3 && a3.context && a3.destroy();
            }, a2.convert = function(a3, b3) {
              if ("auto" == a3 && this.auto)
                return a3;
              var c3, e2 = "number" == typeof a3, f3 = "string" == typeof a3;
              switch (b3) {
                case t:
                  if (e2)
                    return a3;
                  if (f3 && "" === a3.replace(r, ""))
                    return +a3;
                  c3 = "number(unitless)";
                  break;
                case u:
                  if (f3) {
                    if ("" === a3 && this.original)
                      return this.original;
                    if (b3.test(a3))
                      return "#" == a3.charAt(0) && 7 == a3.length ? a3 : d2(a3);
                  }
                  c3 = "hex or rgb string";
                  break;
                case v:
                  if (e2)
                    return a3 + this.unit;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(px) or string(unit)";
                  break;
                case w:
                  if (e2)
                    return a3 + this.unit;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(px) or string(unit or %)";
                  break;
                case x:
                  if (e2)
                    return a3 + this.angle;
                  if (f3 && b3.test(a3))
                    return a3;
                  c3 = "number(deg) or string(angle)";
                  break;
                case y:
                  if (e2)
                    return a3;
                  if (f3 && w.test(a3))
                    return a3;
                  c3 = "number(unitless) or string(unit or %)";
              }
              return g(c3, a3), a3;
            }, a2.redraw = function() {
              this.el.offsetHeight;
            };
          }), O = l(N, function(a2, b2) {
            a2.init = function() {
              b2.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), u));
            };
          }), P = l(N, function(a2, b2) {
            a2.init = function() {
              b2.init.apply(this, arguments), this.animate = this.fallback;
            }, a2.get = function() {
              return this.$el[this.name]();
            }, a2.update = function(a3) {
              this.$el[this.name](a3);
            };
          }), Q = l(N, function(a2, b2) {
            function c2(a3, b3) {
              var c3, d2, e2, f2, g2;
              for (c3 in a3)
                f2 = Z[c3], e2 = f2[0], d2 = f2[1] || c3, g2 = this.convert(a3[c3], e2), b3.call(this, d2, g2, e2);
            }
            a2.init = function() {
              b2.init.apply(this, arguments), this.current || (this.current = {}, Z.perspective && U.perspective && (this.current.perspective = U.perspective, V(this.el, this.name, this.style(this.current)), this.redraw()));
            }, a2.set = function(a3) {
              c2.call(this, a3, function(a4, b3) {
                this.current[a4] = b3;
              }), V(this.el, this.name, this.style(this.current)), this.redraw();
            }, a2.transition = function(a3) {
              var b3 = this.values(a3);
              this.tween = new T({
                current: this.current,
                values: b3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
              });
              var c3, d2 = {};
              for (c3 in this.current)
                d2[c3] = c3 in b3 ? b3[c3] : this.current[c3];
              this.active = true, this.nextStyle = this.style(d2);
            }, a2.fallback = function(a3) {
              var b3 = this.values(a3);
              this.tween = new T({
                current: this.current,
                values: b3,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              });
            }, a2.update = function() {
              V(this.el, this.name, this.style(this.current));
            }, a2.style = function(a3) {
              var b3, c3 = "";
              for (b3 in a3)
                c3 += b3 + "(" + a3[b3] + ") ";
              return c3;
            }, a2.values = function(a3) {
              var b3, d2 = {};
              return c2.call(this, a3, function(a4, c3, e2) {
                d2[a4] = c3, void 0 === this.current[a4] && (b3 = 0, ~a4.indexOf("scale") && (b3 = 1), this.current[a4] = this.convert(b3, e2));
              }), d2;
            };
          }), R = l(function(b2) {
            function c2(a2) {
              1 === n2.push(a2) && J(g2);
            }
            function g2() {
              var a2, b3, c3, d2 = n2.length;
              if (d2)
                for (J(g2), b3 = K(), a2 = d2; a2--; )
                  c3 = n2[a2], c3 && c3.render(b3);
            }
            function i2(b3) {
              var c3, d2 = a.inArray(b3, n2);
              d2 >= 0 && (c3 = n2.slice(d2 + 1), n2.length = d2, c3.length && (n2 = n2.concat(c3)));
            }
            function j2(a2) {
              return Math.round(a2 * o2) / o2;
            }
            function k2(a2, b3, c3) {
              return e(a2[0] + c3 * (b3[0] - a2[0]), a2[1] + c3 * (b3[1] - a2[1]), a2[2] + c3 * (b3[2] - a2[2]));
            }
            var l2 = {
              ease: m.ease[1],
              from: 0,
              to: 1
            };
            b2.init = function(a2) {
              this.duration = a2.duration || 0, this.delay = a2.delay || 0;
              var b3 = a2.ease || l2.ease;
              m[b3] && (b3 = m[b3][1]), "function" != typeof b3 && (b3 = l2.ease), this.ease = b3, this.update = a2.update || f, this.complete = a2.complete || f, this.context = a2.context || this, this.name = a2.name;
              var c3 = a2.from, d2 = a2.to;
              void 0 === c3 && (c3 = l2.from), void 0 === d2 && (d2 = l2.to), this.unit = a2.unit || "", "number" == typeof c3 && "number" == typeof d2 ? (this.begin = c3, this.change = d2 - c3) : this.format(d2, c3), this.value = this.begin + this.unit, this.start = K(), a2.autoplay !== false && this.play();
            }, b2.play = function() {
              this.active || (this.start || (this.start = K()), this.active = true, c2(this));
            }, b2.stop = function() {
              this.active && (this.active = false, i2(this));
            }, b2.render = function(a2) {
              var b3, c3 = a2 - this.start;
              if (this.delay) {
                if (c3 <= this.delay)
                  return;
                c3 -= this.delay;
              }
              if (c3 < this.duration) {
                var d2 = this.ease(c3, 0, 1, this.duration);
                return b3 = this.startRGB ? k2(this.startRGB, this.endRGB, d2) : j2(this.begin + d2 * this.change), this.value = b3 + this.unit, void this.update.call(this.context, this.value);
              }
              b3 = this.endHex || this.begin + this.change, this.value = b3 + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
            }, b2.format = function(a2, b3) {
              if (b3 += "", a2 += "", "#" == a2.charAt(0))
                return this.startRGB = d(b3), this.endRGB = d(a2), this.endHex = a2, this.begin = 0, void (this.change = 1);
              if (!this.unit) {
                var c3 = b3.replace(r, ""), e2 = a2.replace(r, "");
                c3 !== e2 && h("tween", b3, a2), this.unit = c3;
              }
              b3 = parseFloat(b3), a2 = parseFloat(a2), this.begin = this.value = b3, this.change = a2 - b3;
            }, b2.destroy = function() {
              this.stop(), this.context = null, this.ease = this.update = this.complete = f;
            };
            var n2 = [], o2 = 1e3;
          }), S = l(R, function(a2) {
            a2.init = function(a3) {
              this.duration = a3.duration || 0, this.complete = a3.complete || f, this.context = a3.context, this.play();
            }, a2.render = function(a3) {
              var b2 = a3 - this.start;
              b2 < this.duration || (this.complete.call(this.context), this.destroy());
            };
          }), T = l(R, function(a2, b2) {
            a2.init = function(a3) {
              this.context = a3.context, this.update = a3.update, this.tweens = [], this.current = a3.current;
              var b3, c2;
              for (b3 in a3.values)
                c2 = a3.values[b3], this.current[b3] !== c2 && this.tweens.push(new R({
                  name: b3,
                  from: this.current[b3],
                  to: c2,
                  duration: a3.duration,
                  delay: a3.delay,
                  ease: a3.ease,
                  autoplay: false
                }));
              this.play();
            }, a2.render = function(a3) {
              var b3, c2, d2 = this.tweens.length, e2 = false;
              for (b3 = d2; b3--; )
                c2 = this.tweens[b3], c2.context && (c2.render(a3), this.current[c2.name] = c2.value, e2 = true);
              return e2 ? void (this.update && this.update.call(this.context)) : this.destroy();
            }, a2.destroy = function() {
              if (b2.destroy.call(this), this.tweens) {
                var a3, c2 = this.tweens.length;
                for (a3 = c2; a3--; )
                  this.tweens[a3].destroy();
                this.tweens = null, this.current = null;
              }
            };
          }), U = b.config = {
            debug: false,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: false,
            hideBackface: false,
            perspective: "",
            fallback: !G.transition,
            agentTests: []
          };
          b.fallback = function(a2) {
            if (!G.transition)
              return U.fallback = true;
            U.agentTests.push("(" + a2 + ")");
            var b2 = new RegExp(U.agentTests.join("|"), "i");
            U.fallback = b2.test(navigator.userAgent);
          }, b.fallback("6.0.[2-5] Safari"), b.tween = function(a2) {
            return new R(a2);
          }, b.delay = function(a2, b2, c2) {
            return new S({
              complete: b2,
              duration: a2,
              context: c2
            });
          }, a.fn.tram = function(a2) {
            return b.call(null, this, a2);
          };
          var V = a.style, W = a.css, X = {
            transform: G.transform && G.transform.css
          }, Y = {
            color: [O, u],
            background: [O, u, "background-color"],
            "outline-color": [O, u],
            "border-color": [O, u],
            "border-top-color": [O, u],
            "border-right-color": [O, u],
            "border-bottom-color": [O, u],
            "border-left-color": [O, u],
            "border-width": [N, v],
            "border-top-width": [N, v],
            "border-right-width": [N, v],
            "border-bottom-width": [N, v],
            "border-left-width": [N, v],
            "border-spacing": [N, v],
            "letter-spacing": [N, v],
            margin: [N, v],
            "margin-top": [N, v],
            "margin-right": [N, v],
            "margin-bottom": [N, v],
            "margin-left": [N, v],
            padding: [N, v],
            "padding-top": [N, v],
            "padding-right": [N, v],
            "padding-bottom": [N, v],
            "padding-left": [N, v],
            "outline-width": [N, v],
            opacity: [N, t],
            top: [N, w],
            right: [N, w],
            bottom: [N, w],
            left: [N, w],
            "font-size": [N, w],
            "text-indent": [N, w],
            "word-spacing": [N, w],
            width: [N, w],
            "min-width": [N, w],
            "max-width": [N, w],
            height: [N, w],
            "min-height": [N, w],
            "max-height": [N, w],
            "line-height": [N, y],
            "scroll-top": [P, t, "scrollTop"],
            "scroll-left": [P, t, "scrollLeft"]
          }, Z = {};
          G.transform && (Y.transform = [Q], Z = {
            x: [w, "translateX"],
            y: [w, "translateY"],
            rotate: [x],
            rotateX: [x],
            rotateY: [x],
            scale: [t],
            scaleX: [t],
            scaleY: [t],
            skew: [x],
            skewX: [x],
            skewY: [x]
          }), G.transform && G.backface && (Z.z = [w, "translateZ"], Z.rotateZ = [x], Z.scaleZ = [t], Z.perspective = [v]);
          var $ = /ms/, _ = /s|\./;
          return a.tram = b;
        }(window.jQuery);
      }
    });
  
    // shared/render/plugins/BaseSiteModules/underscore-custom.js
    var require_underscore_custom = __commonJS({
      "shared/render/plugins/BaseSiteModules/underscore-custom.js"(exports2, module2) {
        var $ = window.$;
        var tram = require_tram_min() && $.tram;
        module2.exports = function() {
          var _ = {};
          _.VERSION = "1.6.0-Webflow";
          var breaker = {};
          var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
          var push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
          var nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind;
          var each = _.each = _.forEach = function(obj, iterator, context) {
            if (obj == null)
              return obj;
            if (nativeForEach && obj.forEach === nativeForEach) {
              obj.forEach(iterator, context);
            } else if (obj.length === +obj.length) {
              for (var i = 0, length2 = obj.length; i < length2; i++) {
                if (iterator.call(context, obj[i], i, obj) === breaker)
                  return;
              }
            } else {
              var keys = _.keys(obj);
              for (var i = 0, length2 = keys.length; i < length2; i++) {
                if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker)
                  return;
              }
            }
            return obj;
          };
          _.map = _.collect = function(obj, iterator, context) {
            var results = [];
            if (obj == null)
              return results;
            if (nativeMap && obj.map === nativeMap)
              return obj.map(iterator, context);
            each(obj, function(value2, index2, list) {
              results.push(iterator.call(context, value2, index2, list));
            });
            return results;
          };
          _.find = _.detect = function(obj, predicate, context) {
            var result;
            any(obj, function(value2, index2, list) {
              if (predicate.call(context, value2, index2, list)) {
                result = value2;
                return true;
              }
            });
            return result;
          };
          _.filter = _.select = function(obj, predicate, context) {
            var results = [];
            if (obj == null)
              return results;
            if (nativeFilter && obj.filter === nativeFilter)
              return obj.filter(predicate, context);
            each(obj, function(value2, index2, list) {
              if (predicate.call(context, value2, index2, list))
                results.push(value2);
            });
            return results;
          };
          var any = _.some = _.any = function(obj, predicate, context) {
            predicate || (predicate = _.identity);
            var result = false;
            if (obj == null)
              return result;
            if (nativeSome && obj.some === nativeSome)
              return obj.some(predicate, context);
            each(obj, function(value2, index2, list) {
              if (result || (result = predicate.call(context, value2, index2, list)))
                return breaker;
            });
            return !!result;
          };
          _.contains = _.include = function(obj, target) {
            if (obj == null)
              return false;
            if (nativeIndexOf && obj.indexOf === nativeIndexOf)
              return obj.indexOf(target) != -1;
            return any(obj, function(value2) {
              return value2 === target;
            });
          };
          _.delay = function(func, wait) {
            var args = slice.call(arguments, 2);
            return setTimeout(function() {
              return func.apply(null, args);
            }, wait);
          };
          _.defer = function(func) {
            return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
          };
          _.throttle = function(func) {
            var wait, args, context;
            return function() {
              if (wait)
                return;
              wait = true;
              args = arguments;
              context = this;
              tram.frame(function() {
                wait = false;
                func.apply(context, args);
              });
            };
          };
          _.debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result;
            var later = function() {
              var last = _.now() - timestamp;
              if (last < wait) {
                timeout = setTimeout(later, wait - last);
              } else {
                timeout = null;
                if (!immediate) {
                  result = func.apply(context, args);
                  context = args = null;
                }
              }
            };
            return function() {
              context = this;
              args = arguments;
              timestamp = _.now();
              var callNow = immediate && !timeout;
              if (!timeout) {
                timeout = setTimeout(later, wait);
              }
              if (callNow) {
                result = func.apply(context, args);
                context = args = null;
              }
              return result;
            };
          };
          _.defaults = function(obj) {
            if (!_.isObject(obj))
              return obj;
            for (var i = 1, length2 = arguments.length; i < length2; i++) {
              var source = arguments[i];
              for (var prop in source) {
                if (obj[prop] === void 0)
                  obj[prop] = source[prop];
              }
            }
            return obj;
          };
          _.keys = function(obj) {
            if (!_.isObject(obj))
              return [];
            if (nativeKeys)
              return nativeKeys(obj);
            var keys = [];
            for (var key2 in obj)
              if (_.has(obj, key2))
                keys.push(key2);
            return keys;
          };
          _.has = function(obj, key2) {
            return hasOwnProperty.call(obj, key2);
          };
          _.isObject = function(obj) {
            return obj === Object(obj);
          };
          _.now = Date.now || function() {
            return (/* @__PURE__ */ new Date()).getTime();
          };
          _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
          };
          var noMatch = /(.)^/;
          var escapes = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
          };
          var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
          var escapeChar = function(match) {
            return "\\" + escapes[match];
          };
          var bareIdentifier = /^\s*(\w|\$)+\s*$/;
          _.template = function(text2, settings, oldSettings) {
            if (!settings && oldSettings)
              settings = oldSettings;
            settings = _.defaults({}, settings, _.templateSettings);
            var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g");
            var index2 = 0;
            var source = "__p+='";
            text2.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
              source += text2.slice(index2, offset).replace(escapeRegExp, escapeChar);
              index2 = offset + match.length;
              if (escape) {
                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
              } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
              } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
              }
              return match;
            });
            source += "';\n";
            var argument = settings.variable;
            if (argument) {
              if (!bareIdentifier.test(argument))
                throw new Error("variable is not a bare identifier: " + argument);
            } else {
              source = "with(obj||{}){\n" + source + "}\n";
              argument = "obj";
            }
            source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
            var render;
            try {
              render = new Function(settings.variable || "obj", "_", source);
            } catch (e) {
              e.source = source;
              throw e;
            }
            var template = function(data2) {
              return render.call(this, data2, _);
            };
            template.source = "function(" + argument + "){\n" + source + "}";
            return template;
          };
          return _;
        }();
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-lib.js
    var require_webflow_lib = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-lib.js"(exports2, module2) {
        var Webflow = {};
        var modules = {};
        var primary = [];
        var secondary = window.Webflow || [];
        var $ = window.jQuery;
        var $win = $(window);
        var $doc = $(document);
        var isFunction = $.isFunction;
        var _ = Webflow._ = require_underscore_custom();
        var tram = Webflow.tram = require_tram_min() && $.tram;
        var domready = false;
        var destroyed = false;
        tram.config.hideBackface = false;
        tram.config.keepInherited = true;
        Webflow.define = function(name2, factory, options) {
          if (modules[name2]) {
            unbindModule(modules[name2]);
          }
          var instance = modules[name2] = factory($, _, options) || {};
          bindModule(instance);
          return instance;
        };
        Webflow.require = function(name2) {
          return modules[name2];
        };
        function bindModule(module3) {
          if (Webflow.env()) {
            isFunction(module3.design) && $win.on("__wf_design", module3.design);
            isFunction(module3.preview) && $win.on("__wf_preview", module3.preview);
          }
          isFunction(module3.destroy) && $win.on("__wf_destroy", module3.destroy);
          if (module3.ready && isFunction(module3.ready)) {
            addReady(module3);
          }
        }
        function addReady(module3) {
          if (domready) {
            module3.ready();
            return;
          }
          if (_.contains(primary, module3.ready)) {
            return;
          }
          primary.push(module3.ready);
        }
        function unbindModule(module3) {
          isFunction(module3.design) && $win.off("__wf_design", module3.design);
          isFunction(module3.preview) && $win.off("__wf_preview", module3.preview);
          isFunction(module3.destroy) && $win.off("__wf_destroy", module3.destroy);
          if (module3.ready && isFunction(module3.ready)) {
            removeReady(module3);
          }
        }
        function removeReady(module3) {
          primary = _.filter(primary, function(readyFn) {
            return readyFn !== module3.ready;
          });
        }
        Webflow.push = function(ready) {
          if (domready) {
            isFunction(ready) && ready();
            return;
          }
          secondary.push(ready);
        };
        Webflow.env = function(mode) {
          var designFlag = window.__wf_design;
          var inApp = typeof designFlag !== "undefined";
          if (!mode) {
            return inApp;
          }
          if (mode === "design") {
            return inApp && designFlag;
          }
          if (mode === "preview") {
            return inApp && !designFlag;
          }
          if (mode === "slug") {
            return inApp && window.__wf_slug;
          }
          if (mode === "editor") {
            return window.WebflowEditor;
          }
          if (mode === "test") {
            return window.__wf_test;
          }
          if (mode === "frame") {
            return window !== window.top;
          }
        };
        var userAgent = navigator.userAgent.toLowerCase();
        var touch = Webflow.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
        var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
        var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
        Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;
        var touchTarget;
        touch && $doc.on("touchstart mousedown", function(evt) {
          touchTarget = evt.target;
        });
        Webflow.validClick = touch ? function(clickTarget) {
          return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
        } : function() {
          return true;
        };
        var resizeEvents = "resize.webflow orientationchange.webflow load.webflow";
        var scrollEvents = "scroll.webflow " + resizeEvents;
        Webflow.resize = eventProxy($win, resizeEvents);
        Webflow.scroll = eventProxy($win, scrollEvents);
        Webflow.redraw = eventProxy();
        function eventProxy(target, types) {
          var handlers = [];
          var proxy = {};
          proxy.up = _.throttle(function(evt) {
            _.each(handlers, function(h) {
              h(evt);
            });
          });
          if (target && types) {
            target.on(types, proxy.up);
          }
          proxy.on = function(handler) {
            if (typeof handler !== "function") {
              return;
            }
            if (_.contains(handlers, handler)) {
              return;
            }
            handlers.push(handler);
          };
          proxy.off = function(handler) {
            if (!arguments.length) {
              handlers = [];
              return;
            }
            handlers = _.filter(handlers, function(h) {
              return h !== handler;
            });
          };
          return proxy;
        }
        Webflow.location = function(url) {
          window.location = url;
        };
        if (Webflow.env()) {
          Webflow.location = function() {
          };
        }
        Webflow.ready = function() {
          domready = true;
          if (destroyed) {
            restoreModules();
          } else {
            _.each(primary, callReady);
          }
          _.each(secondary, callReady);
          Webflow.resize.up();
        };
        function callReady(readyFn) {
          isFunction(readyFn) && readyFn();
        }
        function restoreModules() {
          destroyed = false;
          _.each(modules, bindModule);
        }
        var deferLoad;
        Webflow.load = function(handler) {
          deferLoad.then(handler);
        };
        function bindLoad() {
          if (deferLoad) {
            deferLoad.reject();
            $win.off("load", deferLoad.resolve);
          }
          deferLoad = new $.Deferred();
          $win.on("load", deferLoad.resolve);
        }
        Webflow.destroy = function(options) {
          options = options || {};
          destroyed = true;
          $win.triggerHandler("__wf_destroy");
          if (options.domready != null) {
            domready = options.domready;
          }
          _.each(modules, unbindModule);
          Webflow.resize.off();
          Webflow.scroll.off();
          Webflow.redraw.off();
          primary = [];
          secondary = [];
          if (deferLoad.state() === "pending") {
            bindLoad();
          }
        };
        $(Webflow.ready);
        bindLoad();
        module2.exports = window.Webflow = Webflow;
      }
    });
  
    // node_modules/@babel/runtime/helpers/interopRequireDefault.js
    var require_interopRequireDefault = __commonJS({
      "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports2, module2) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        module2.exports = _interopRequireDefault, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
      }
    });
  
    // node_modules/@babel/runtime/helpers/extends.js
    var require_extends = __commonJS({
      "node_modules/@babel/runtime/helpers/extends.js"(exports2, module2) {
        function _extends() {
          module2.exports = _extends = Object.assign ? Object.assign.bind() : function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key2 in source) {
                if (Object.prototype.hasOwnProperty.call(source, key2)) {
                  target[key2] = source[key2];
                }
              }
            }
            return target;
          }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
          return _extends.apply(this, arguments);
        }
        module2.exports = _extends, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
      }
    });
  
    // node_modules/@babel/runtime/helpers/defineProperty.js
    var require_defineProperty = __commonJS({
      "node_modules/@babel/runtime/helpers/defineProperty.js"(exports2, module2) {
        function _defineProperty(obj, key2, value2) {
          if (key2 in obj) {
            Object.defineProperty(obj, key2, {
              value: value2,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key2] = value2;
          }
          return obj;
        }
        module2.exports = _defineProperty, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
      }
    });
  
    // node_modules/lodash/_baseFindIndex.js
    var require_baseFindIndex = __commonJS({
      "node_modules/lodash/_baseFindIndex.js"(exports2, module2) {
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length2 = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index2-- : ++index2 < length2) {
            if (predicate(array[index2], index2, array)) {
              return index2;
            }
          }
          return -1;
        }
        module2.exports = baseFindIndex;
      }
    });
  
    // node_modules/lodash/_listCacheClear.js
    var require_listCacheClear = __commonJS({
      "node_modules/lodash/_listCacheClear.js"(exports2, module2) {
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        module2.exports = listCacheClear;
      }
    });
  
    // node_modules/lodash/eq.js
    var require_eq = __commonJS({
      "node_modules/lodash/eq.js"(exports2, module2) {
        function eq(value2, other) {
          return value2 === other || value2 !== value2 && other !== other;
        }
        module2.exports = eq;
      }
    });
  
    // node_modules/lodash/_assocIndexOf.js
    var require_assocIndexOf = __commonJS({
      "node_modules/lodash/_assocIndexOf.js"(exports2, module2) {
        var eq = require_eq();
        function assocIndexOf(array, key2) {
          var length2 = array.length;
          while (length2--) {
            if (eq(array[length2][0], key2)) {
              return length2;
            }
          }
          return -1;
        }
        module2.exports = assocIndexOf;
      }
    });
  
    // node_modules/lodash/_listCacheDelete.js
    var require_listCacheDelete = __commonJS({
      "node_modules/lodash/_listCacheDelete.js"(exports2, module2) {
        var assocIndexOf = require_assocIndexOf();
        var arrayProto = Array.prototype;
        var splice = arrayProto.splice;
        function listCacheDelete(key2) {
          var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
          if (index2 < 0) {
            return false;
          }
          var lastIndex = data2.length - 1;
          if (index2 == lastIndex) {
            data2.pop();
          } else {
            splice.call(data2, index2, 1);
          }
          --this.size;
          return true;
        }
        module2.exports = listCacheDelete;
      }
    });
  
    // node_modules/lodash/_listCacheGet.js
    var require_listCacheGet = __commonJS({
      "node_modules/lodash/_listCacheGet.js"(exports2, module2) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheGet(key2) {
          var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
          return index2 < 0 ? void 0 : data2[index2][1];
        }
        module2.exports = listCacheGet;
      }
    });
  
    // node_modules/lodash/_listCacheHas.js
    var require_listCacheHas = __commonJS({
      "node_modules/lodash/_listCacheHas.js"(exports2, module2) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheHas(key2) {
          return assocIndexOf(this.__data__, key2) > -1;
        }
        module2.exports = listCacheHas;
      }
    });
  
    // node_modules/lodash/_listCacheSet.js
    var require_listCacheSet = __commonJS({
      "node_modules/lodash/_listCacheSet.js"(exports2, module2) {
        var assocIndexOf = require_assocIndexOf();
        function listCacheSet(key2, value2) {
          var data2 = this.__data__, index2 = assocIndexOf(data2, key2);
          if (index2 < 0) {
            ++this.size;
            data2.push([key2, value2]);
          } else {
            data2[index2][1] = value2;
          }
          return this;
        }
        module2.exports = listCacheSet;
      }
    });
  
    // node_modules/lodash/_ListCache.js
    var require_ListCache = __commonJS({
      "node_modules/lodash/_ListCache.js"(exports2, module2) {
        var listCacheClear = require_listCacheClear();
        var listCacheDelete = require_listCacheDelete();
        var listCacheGet = require_listCacheGet();
        var listCacheHas = require_listCacheHas();
        var listCacheSet = require_listCacheSet();
        function ListCache(entries) {
          var index2 = -1, length2 = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length2) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        module2.exports = ListCache;
      }
    });
  
    // node_modules/lodash/_stackClear.js
    var require_stackClear = __commonJS({
      "node_modules/lodash/_stackClear.js"(exports2, module2) {
        var ListCache = require_ListCache();
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        module2.exports = stackClear;
      }
    });
  
    // node_modules/lodash/_stackDelete.js
    var require_stackDelete = __commonJS({
      "node_modules/lodash/_stackDelete.js"(exports2, module2) {
        function stackDelete(key2) {
          var data2 = this.__data__, result = data2["delete"](key2);
          this.size = data2.size;
          return result;
        }
        module2.exports = stackDelete;
      }
    });
  
    // node_modules/lodash/_stackGet.js
    var require_stackGet = __commonJS({
      "node_modules/lodash/_stackGet.js"(exports2, module2) {
        function stackGet(key2) {
          return this.__data__.get(key2);
        }
        module2.exports = stackGet;
      }
    });
  
    // node_modules/lodash/_stackHas.js
    var require_stackHas = __commonJS({
      "node_modules/lodash/_stackHas.js"(exports2, module2) {
        function stackHas(key2) {
          return this.__data__.has(key2);
        }
        module2.exports = stackHas;
      }
    });
  
    // node_modules/lodash/_freeGlobal.js
    var require_freeGlobal = __commonJS({
      "node_modules/lodash/_freeGlobal.js"(exports2, module2) {
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        module2.exports = freeGlobal;
      }
    });
  
    // node_modules/lodash/_root.js
    var require_root = __commonJS({
      "node_modules/lodash/_root.js"(exports2, module2) {
        var freeGlobal = require_freeGlobal();
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        module2.exports = root;
      }
    });
  
    // node_modules/lodash/_Symbol.js
    var require_Symbol = __commonJS({
      "node_modules/lodash/_Symbol.js"(exports2, module2) {
        var root = require_root();
        var Symbol2 = root.Symbol;
        module2.exports = Symbol2;
      }
    });
  
    // node_modules/lodash/_getRawTag.js
    var require_getRawTag = __commonJS({
      "node_modules/lodash/_getRawTag.js"(exports2, module2) {
        var Symbol2 = require_Symbol();
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var nativeObjectToString = objectProto.toString;
        var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
        function getRawTag(value2) {
          var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
          try {
            value2[symToStringTag] = void 0;
            var unmasked = true;
          } catch (e) {
          }
          var result = nativeObjectToString.call(value2);
          if (unmasked) {
            if (isOwn) {
              value2[symToStringTag] = tag;
            } else {
              delete value2[symToStringTag];
            }
          }
          return result;
        }
        module2.exports = getRawTag;
      }
    });
  
    // node_modules/lodash/_objectToString.js
    var require_objectToString = __commonJS({
      "node_modules/lodash/_objectToString.js"(exports2, module2) {
        var objectProto = Object.prototype;
        var nativeObjectToString = objectProto.toString;
        function objectToString(value2) {
          return nativeObjectToString.call(value2);
        }
        module2.exports = objectToString;
      }
    });
  
    // node_modules/lodash/_baseGetTag.js
    var require_baseGetTag = __commonJS({
      "node_modules/lodash/_baseGetTag.js"(exports2, module2) {
        var Symbol2 = require_Symbol();
        var getRawTag = require_getRawTag();
        var objectToString = require_objectToString();
        var nullTag = "[object Null]";
        var undefinedTag = "[object Undefined]";
        var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
        function baseGetTag(value2) {
          if (value2 == null) {
            return value2 === void 0 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object(value2) ? getRawTag(value2) : objectToString(value2);
        }
        module2.exports = baseGetTag;
      }
    });
  
    // node_modules/lodash/isObject.js
    var require_isObject = __commonJS({
      "node_modules/lodash/isObject.js"(exports2, module2) {
        function isObject(value2) {
          var type = typeof value2;
          return value2 != null && (type == "object" || type == "function");
        }
        module2.exports = isObject;
      }
    });
  
    // node_modules/lodash/isFunction.js
    var require_isFunction = __commonJS({
      "node_modules/lodash/isFunction.js"(exports2, module2) {
        var baseGetTag = require_baseGetTag();
        var isObject = require_isObject();
        var asyncTag = "[object AsyncFunction]";
        var funcTag = "[object Function]";
        var genTag = "[object GeneratorFunction]";
        var proxyTag = "[object Proxy]";
        function isFunction(value2) {
          if (!isObject(value2)) {
            return false;
          }
          var tag = baseGetTag(value2);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        module2.exports = isFunction;
      }
    });
  
    // node_modules/lodash/_coreJsData.js
    var require_coreJsData = __commonJS({
      "node_modules/lodash/_coreJsData.js"(exports2, module2) {
        var root = require_root();
        var coreJsData = root["__core-js_shared__"];
        module2.exports = coreJsData;
      }
    });
  
    // node_modules/lodash/_isMasked.js
    var require_isMasked = __commonJS({
      "node_modules/lodash/_isMasked.js"(exports2, module2) {
        var coreJsData = require_coreJsData();
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        module2.exports = isMasked;
      }
    });
  
    // node_modules/lodash/_toSource.js
    var require_toSource = __commonJS({
      "node_modules/lodash/_toSource.js"(exports2, module2) {
        var funcProto = Function.prototype;
        var funcToString = funcProto.toString;
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        module2.exports = toSource;
      }
    });
  
    // node_modules/lodash/_baseIsNative.js
    var require_baseIsNative = __commonJS({
      "node_modules/lodash/_baseIsNative.js"(exports2, module2) {
        var isFunction = require_isFunction();
        var isMasked = require_isMasked();
        var isObject = require_isObject();
        var toSource = require_toSource();
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var funcProto = Function.prototype;
        var objectProto = Object.prototype;
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var reIsNative = RegExp(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        function baseIsNative(value2) {
          if (!isObject(value2) || isMasked(value2)) {
            return false;
          }
          var pattern = isFunction(value2) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value2));
        }
        module2.exports = baseIsNative;
      }
    });
  
    // node_modules/lodash/_getValue.js
    var require_getValue = __commonJS({
      "node_modules/lodash/_getValue.js"(exports2, module2) {
        function getValue(object, key2) {
          return object == null ? void 0 : object[key2];
        }
        module2.exports = getValue;
      }
    });
  
    // node_modules/lodash/_getNative.js
    var require_getNative = __commonJS({
      "node_modules/lodash/_getNative.js"(exports2, module2) {
        var baseIsNative = require_baseIsNative();
        var getValue = require_getValue();
        function getNative(object, key2) {
          var value2 = getValue(object, key2);
          return baseIsNative(value2) ? value2 : void 0;
        }
        module2.exports = getNative;
      }
    });
  
    // node_modules/lodash/_Map.js
    var require_Map = __commonJS({
      "node_modules/lodash/_Map.js"(exports2, module2) {
        var getNative = require_getNative();
        var root = require_root();
        var Map = getNative(root, "Map");
        module2.exports = Map;
      }
    });
  
    // node_modules/lodash/_nativeCreate.js
    var require_nativeCreate = __commonJS({
      "node_modules/lodash/_nativeCreate.js"(exports2, module2) {
        var getNative = require_getNative();
        var nativeCreate = getNative(Object, "create");
        module2.exports = nativeCreate;
      }
    });
  
    // node_modules/lodash/_hashClear.js
    var require_hashClear = __commonJS({
      "node_modules/lodash/_hashClear.js"(exports2, module2) {
        var nativeCreate = require_nativeCreate();
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        module2.exports = hashClear;
      }
    });
  
    // node_modules/lodash/_hashDelete.js
    var require_hashDelete = __commonJS({
      "node_modules/lodash/_hashDelete.js"(exports2, module2) {
        function hashDelete(key2) {
          var result = this.has(key2) && delete this.__data__[key2];
          this.size -= result ? 1 : 0;
          return result;
        }
        module2.exports = hashDelete;
      }
    });
  
    // node_modules/lodash/_hashGet.js
    var require_hashGet = __commonJS({
      "node_modules/lodash/_hashGet.js"(exports2, module2) {
        var nativeCreate = require_nativeCreate();
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function hashGet(key2) {
          var data2 = this.__data__;
          if (nativeCreate) {
            var result = data2[key2];
            return result === HASH_UNDEFINED ? void 0 : result;
          }
          return hasOwnProperty.call(data2, key2) ? data2[key2] : void 0;
        }
        module2.exports = hashGet;
      }
    });
  
    // node_modules/lodash/_hashHas.js
    var require_hashHas = __commonJS({
      "node_modules/lodash/_hashHas.js"(exports2, module2) {
        var nativeCreate = require_nativeCreate();
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function hashHas(key2) {
          var data2 = this.__data__;
          return nativeCreate ? data2[key2] !== void 0 : hasOwnProperty.call(data2, key2);
        }
        module2.exports = hashHas;
      }
    });
  
    // node_modules/lodash/_hashSet.js
    var require_hashSet = __commonJS({
      "node_modules/lodash/_hashSet.js"(exports2, module2) {
        var nativeCreate = require_nativeCreate();
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        function hashSet(key2, value2) {
          var data2 = this.__data__;
          this.size += this.has(key2) ? 0 : 1;
          data2[key2] = nativeCreate && value2 === void 0 ? HASH_UNDEFINED : value2;
          return this;
        }
        module2.exports = hashSet;
      }
    });
  
    // node_modules/lodash/_Hash.js
    var require_Hash = __commonJS({
      "node_modules/lodash/_Hash.js"(exports2, module2) {
        var hashClear = require_hashClear();
        var hashDelete = require_hashDelete();
        var hashGet = require_hashGet();
        var hashHas = require_hashHas();
        var hashSet = require_hashSet();
        function Hash(entries) {
          var index2 = -1, length2 = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length2) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        module2.exports = Hash;
      }
    });
  
    // node_modules/lodash/_mapCacheClear.js
    var require_mapCacheClear = __commonJS({
      "node_modules/lodash/_mapCacheClear.js"(exports2, module2) {
        var Hash = require_Hash();
        var ListCache = require_ListCache();
        var Map = require_Map();
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map || ListCache)(),
            "string": new Hash()
          };
        }
        module2.exports = mapCacheClear;
      }
    });
  
    // node_modules/lodash/_isKeyable.js
    var require_isKeyable = __commonJS({
      "node_modules/lodash/_isKeyable.js"(exports2, module2) {
        function isKeyable(value2) {
          var type = typeof value2;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
        }
        module2.exports = isKeyable;
      }
    });
  
    // node_modules/lodash/_getMapData.js
    var require_getMapData = __commonJS({
      "node_modules/lodash/_getMapData.js"(exports2, module2) {
        var isKeyable = require_isKeyable();
        function getMapData(map, key2) {
          var data2 = map.__data__;
          return isKeyable(key2) ? data2[typeof key2 == "string" ? "string" : "hash"] : data2.map;
        }
        module2.exports = getMapData;
      }
    });
  
    // node_modules/lodash/_mapCacheDelete.js
    var require_mapCacheDelete = __commonJS({
      "node_modules/lodash/_mapCacheDelete.js"(exports2, module2) {
        var getMapData = require_getMapData();
        function mapCacheDelete(key2) {
          var result = getMapData(this, key2)["delete"](key2);
          this.size -= result ? 1 : 0;
          return result;
        }
        module2.exports = mapCacheDelete;
      }
    });
  
    // node_modules/lodash/_mapCacheGet.js
    var require_mapCacheGet = __commonJS({
      "node_modules/lodash/_mapCacheGet.js"(exports2, module2) {
        var getMapData = require_getMapData();
        function mapCacheGet(key2) {
          return getMapData(this, key2).get(key2);
        }
        module2.exports = mapCacheGet;
      }
    });
  
    // node_modules/lodash/_mapCacheHas.js
    var require_mapCacheHas = __commonJS({
      "node_modules/lodash/_mapCacheHas.js"(exports2, module2) {
        var getMapData = require_getMapData();
        function mapCacheHas(key2) {
          return getMapData(this, key2).has(key2);
        }
        module2.exports = mapCacheHas;
      }
    });
  
    // node_modules/lodash/_mapCacheSet.js
    var require_mapCacheSet = __commonJS({
      "node_modules/lodash/_mapCacheSet.js"(exports2, module2) {
        var getMapData = require_getMapData();
        function mapCacheSet(key2, value2) {
          var data2 = getMapData(this, key2), size = data2.size;
          data2.set(key2, value2);
          this.size += data2.size == size ? 0 : 1;
          return this;
        }
        module2.exports = mapCacheSet;
      }
    });
  
    // node_modules/lodash/_MapCache.js
    var require_MapCache = __commonJS({
      "node_modules/lodash/_MapCache.js"(exports2, module2) {
        var mapCacheClear = require_mapCacheClear();
        var mapCacheDelete = require_mapCacheDelete();
        var mapCacheGet = require_mapCacheGet();
        var mapCacheHas = require_mapCacheHas();
        var mapCacheSet = require_mapCacheSet();
        function MapCache(entries) {
          var index2 = -1, length2 = entries == null ? 0 : entries.length;
          this.clear();
          while (++index2 < length2) {
            var entry = entries[index2];
            this.set(entry[0], entry[1]);
          }
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        module2.exports = MapCache;
      }
    });
  
    // node_modules/lodash/_stackSet.js
    var require_stackSet = __commonJS({
      "node_modules/lodash/_stackSet.js"(exports2, module2) {
        var ListCache = require_ListCache();
        var Map = require_Map();
        var MapCache = require_MapCache();
        var LARGE_ARRAY_SIZE = 200;
        function stackSet(key2, value2) {
          var data2 = this.__data__;
          if (data2 instanceof ListCache) {
            var pairs = data2.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key2, value2]);
              this.size = ++data2.size;
              return this;
            }
            data2 = this.__data__ = new MapCache(pairs);
          }
          data2.set(key2, value2);
          this.size = data2.size;
          return this;
        }
        module2.exports = stackSet;
      }
    });
  
    // node_modules/lodash/_Stack.js
    var require_Stack = __commonJS({
      "node_modules/lodash/_Stack.js"(exports2, module2) {
        var ListCache = require_ListCache();
        var stackClear = require_stackClear();
        var stackDelete = require_stackDelete();
        var stackGet = require_stackGet();
        var stackHas = require_stackHas();
        var stackSet = require_stackSet();
        function Stack(entries) {
          var data2 = this.__data__ = new ListCache(entries);
          this.size = data2.size;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        module2.exports = Stack;
      }
    });
  
    // node_modules/lodash/_setCacheAdd.js
    var require_setCacheAdd = __commonJS({
      "node_modules/lodash/_setCacheAdd.js"(exports2, module2) {
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        function setCacheAdd(value2) {
          this.__data__.set(value2, HASH_UNDEFINED);
          return this;
        }
        module2.exports = setCacheAdd;
      }
    });
  
    // node_modules/lodash/_setCacheHas.js
    var require_setCacheHas = __commonJS({
      "node_modules/lodash/_setCacheHas.js"(exports2, module2) {
        function setCacheHas(value2) {
          return this.__data__.has(value2);
        }
        module2.exports = setCacheHas;
      }
    });
  
    // node_modules/lodash/_SetCache.js
    var require_SetCache = __commonJS({
      "node_modules/lodash/_SetCache.js"(exports2, module2) {
        var MapCache = require_MapCache();
        var setCacheAdd = require_setCacheAdd();
        var setCacheHas = require_setCacheHas();
        function SetCache(values) {
          var index2 = -1, length2 = values == null ? 0 : values.length;
          this.__data__ = new MapCache();
          while (++index2 < length2) {
            this.add(values[index2]);
          }
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        module2.exports = SetCache;
      }
    });
  
    // node_modules/lodash/_arraySome.js
    var require_arraySome = __commonJS({
      "node_modules/lodash/_arraySome.js"(exports2, module2) {
        function arraySome(array, predicate) {
          var index2 = -1, length2 = array == null ? 0 : array.length;
          while (++index2 < length2) {
            if (predicate(array[index2], index2, array)) {
              return true;
            }
          }
          return false;
        }
        module2.exports = arraySome;
      }
    });
  
    // node_modules/lodash/_cacheHas.js
    var require_cacheHas = __commonJS({
      "node_modules/lodash/_cacheHas.js"(exports2, module2) {
        function cacheHas(cache, key2) {
          return cache.has(key2);
        }
        module2.exports = cacheHas;
      }
    });
  
    // node_modules/lodash/_equalArrays.js
    var require_equalArrays = __commonJS({
      "node_modules/lodash/_equalArrays.js"(exports2, module2) {
        var SetCache = require_SetCache();
        var arraySome = require_arraySome();
        var cacheHas = require_cacheHas();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
          stack.set(array, other);
          stack.set(other, array);
          while (++index2 < arrLength) {
            var arrValue = array[index2], othValue = other[index2];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
            }
            if (compared !== void 0) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result;
        }
        module2.exports = equalArrays;
      }
    });
  
    // node_modules/lodash/_Uint8Array.js
    var require_Uint8Array = __commonJS({
      "node_modules/lodash/_Uint8Array.js"(exports2, module2) {
        var root = require_root();
        var Uint8Array2 = root.Uint8Array;
        module2.exports = Uint8Array2;
      }
    });
  
    // node_modules/lodash/_mapToArray.js
    var require_mapToArray = __commonJS({
      "node_modules/lodash/_mapToArray.js"(exports2, module2) {
        function mapToArray(map) {
          var index2 = -1, result = Array(map.size);
          map.forEach(function(value2, key2) {
            result[++index2] = [key2, value2];
          });
          return result;
        }
        module2.exports = mapToArray;
      }
    });
  
    // node_modules/lodash/_setToArray.js
    var require_setToArray = __commonJS({
      "node_modules/lodash/_setToArray.js"(exports2, module2) {
        function setToArray(set) {
          var index2 = -1, result = Array(set.size);
          set.forEach(function(value2) {
            result[++index2] = value2;
          });
          return result;
        }
        module2.exports = setToArray;
      }
    });
  
    // node_modules/lodash/_equalByTag.js
    var require_equalByTag = __commonJS({
      "node_modules/lodash/_equalByTag.js"(exports2, module2) {
        var Symbol2 = require_Symbol();
        var Uint8Array2 = require_Uint8Array();
        var eq = require_eq();
        var equalArrays = require_equalArrays();
        var mapToArray = require_mapToArray();
        var setToArray = require_setToArray();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        var boolTag = "[object Boolean]";
        var dateTag = "[object Date]";
        var errorTag = "[object Error]";
        var mapTag = "[object Map]";
        var numberTag = "[object Number]";
        var regexpTag = "[object RegExp]";
        var setTag = "[object Set]";
        var stringTag = "[object String]";
        var symbolTag = "[object Symbol]";
        var arrayBufferTag = "[object ArrayBuffer]";
        var dataViewTag = "[object DataView]";
        var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
        var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        module2.exports = equalByTag;
      }
    });
  
    // node_modules/lodash/_arrayPush.js
    var require_arrayPush = __commonJS({
      "node_modules/lodash/_arrayPush.js"(exports2, module2) {
        function arrayPush(array, values) {
          var index2 = -1, length2 = values.length, offset = array.length;
          while (++index2 < length2) {
            array[offset + index2] = values[index2];
          }
          return array;
        }
        module2.exports = arrayPush;
      }
    });
  
    // node_modules/lodash/isArray.js
    var require_isArray = __commonJS({
      "node_modules/lodash/isArray.js"(exports2, module2) {
        var isArray = Array.isArray;
        module2.exports = isArray;
      }
    });
  
    // node_modules/lodash/_baseGetAllKeys.js
    var require_baseGetAllKeys = __commonJS({
      "node_modules/lodash/_baseGetAllKeys.js"(exports2, module2) {
        var arrayPush = require_arrayPush();
        var isArray = require_isArray();
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        module2.exports = baseGetAllKeys;
      }
    });
  
    // node_modules/lodash/_arrayFilter.js
    var require_arrayFilter = __commonJS({
      "node_modules/lodash/_arrayFilter.js"(exports2, module2) {
        function arrayFilter(array, predicate) {
          var index2 = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index2 < length2) {
            var value2 = array[index2];
            if (predicate(value2, index2, array)) {
              result[resIndex++] = value2;
            }
          }
          return result;
        }
        module2.exports = arrayFilter;
      }
    });
  
    // node_modules/lodash/stubArray.js
    var require_stubArray = __commonJS({
      "node_modules/lodash/stubArray.js"(exports2, module2) {
        function stubArray() {
          return [];
        }
        module2.exports = stubArray;
      }
    });
  
    // node_modules/lodash/_getSymbols.js
    var require_getSymbols = __commonJS({
      "node_modules/lodash/_getSymbols.js"(exports2, module2) {
        var arrayFilter = require_arrayFilter();
        var stubArray = require_stubArray();
        var objectProto = Object.prototype;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        var nativeGetSymbols = Object.getOwnPropertySymbols;
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        module2.exports = getSymbols;
      }
    });
  
    // node_modules/lodash/_baseTimes.js
    var require_baseTimes = __commonJS({
      "node_modules/lodash/_baseTimes.js"(exports2, module2) {
        function baseTimes(n, iteratee) {
          var index2 = -1, result = Array(n);
          while (++index2 < n) {
            result[index2] = iteratee(index2);
          }
          return result;
        }
        module2.exports = baseTimes;
      }
    });
  
    // node_modules/lodash/isObjectLike.js
    var require_isObjectLike = __commonJS({
      "node_modules/lodash/isObjectLike.js"(exports2, module2) {
        function isObjectLike(value2) {
          return value2 != null && typeof value2 == "object";
        }
        module2.exports = isObjectLike;
      }
    });
  
    // node_modules/lodash/_baseIsArguments.js
    var require_baseIsArguments = __commonJS({
      "node_modules/lodash/_baseIsArguments.js"(exports2, module2) {
        var baseGetTag = require_baseGetTag();
        var isObjectLike = require_isObjectLike();
        var argsTag = "[object Arguments]";
        function baseIsArguments(value2) {
          return isObjectLike(value2) && baseGetTag(value2) == argsTag;
        }
        module2.exports = baseIsArguments;
      }
    });
  
    // node_modules/lodash/isArguments.js
    var require_isArguments = __commonJS({
      "node_modules/lodash/isArguments.js"(exports2, module2) {
        var baseIsArguments = require_baseIsArguments();
        var isObjectLike = require_isObjectLike();
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value2) {
          return isObjectLike(value2) && hasOwnProperty.call(value2, "callee") && !propertyIsEnumerable.call(value2, "callee");
        };
        module2.exports = isArguments;
      }
    });
  
    // node_modules/lodash/stubFalse.js
    var require_stubFalse = __commonJS({
      "node_modules/lodash/stubFalse.js"(exports2, module2) {
        function stubFalse() {
          return false;
        }
        module2.exports = stubFalse;
      }
    });
  
    // node_modules/lodash/isBuffer.js
    var require_isBuffer = __commonJS({
      "node_modules/lodash/isBuffer.js"(exports2, module2) {
        var root = require_root();
        var stubFalse = require_stubFalse();
        var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
        var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var Buffer2 = moduleExports ? root.Buffer : void 0;
        var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
        var isBuffer = nativeIsBuffer || stubFalse;
        module2.exports = isBuffer;
      }
    });
  
    // node_modules/lodash/_isIndex.js
    var require_isIndex = __commonJS({
      "node_modules/lodash/_isIndex.js"(exports2, module2) {
        var MAX_SAFE_INTEGER = 9007199254740991;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        function isIndex(value2, length2) {
          var type = typeof value2;
          length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
          return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length2);
        }
        module2.exports = isIndex;
      }
    });
  
    // node_modules/lodash/isLength.js
    var require_isLength = __commonJS({
      "node_modules/lodash/isLength.js"(exports2, module2) {
        var MAX_SAFE_INTEGER = 9007199254740991;
        function isLength(value2) {
          return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
        }
        module2.exports = isLength;
      }
    });
  
    // node_modules/lodash/_baseIsTypedArray.js
    var require_baseIsTypedArray = __commonJS({
      "node_modules/lodash/_baseIsTypedArray.js"(exports2, module2) {
        var baseGetTag = require_baseGetTag();
        var isLength = require_isLength();
        var isObjectLike = require_isObjectLike();
        var argsTag = "[object Arguments]";
        var arrayTag = "[object Array]";
        var boolTag = "[object Boolean]";
        var dateTag = "[object Date]";
        var errorTag = "[object Error]";
        var funcTag = "[object Function]";
        var mapTag = "[object Map]";
        var numberTag = "[object Number]";
        var objectTag = "[object Object]";
        var regexpTag = "[object RegExp]";
        var setTag = "[object Set]";
        var stringTag = "[object String]";
        var weakMapTag = "[object WeakMap]";
        var arrayBufferTag = "[object ArrayBuffer]";
        var dataViewTag = "[object DataView]";
        var float32Tag = "[object Float32Array]";
        var float64Tag = "[object Float64Array]";
        var int8Tag = "[object Int8Array]";
        var int16Tag = "[object Int16Array]";
        var int32Tag = "[object Int32Array]";
        var uint8Tag = "[object Uint8Array]";
        var uint8ClampedTag = "[object Uint8ClampedArray]";
        var uint16Tag = "[object Uint16Array]";
        var uint32Tag = "[object Uint32Array]";
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        function baseIsTypedArray(value2) {
          return isObjectLike(value2) && isLength(value2.length) && !!typedArrayTags[baseGetTag(value2)];
        }
        module2.exports = baseIsTypedArray;
      }
    });
  
    // node_modules/lodash/_baseUnary.js
    var require_baseUnary = __commonJS({
      "node_modules/lodash/_baseUnary.js"(exports2, module2) {
        function baseUnary(func) {
          return function(value2) {
            return func(value2);
          };
        }
        module2.exports = baseUnary;
      }
    });
  
    // node_modules/lodash/_nodeUtil.js
    var require_nodeUtil = __commonJS({
      "node_modules/lodash/_nodeUtil.js"(exports2, module2) {
        var freeGlobal = require_freeGlobal();
        var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
        var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        module2.exports = nodeUtil;
      }
    });
  
    // node_modules/lodash/isTypedArray.js
    var require_isTypedArray = __commonJS({
      "node_modules/lodash/isTypedArray.js"(exports2, module2) {
        var baseIsTypedArray = require_baseIsTypedArray();
        var baseUnary = require_baseUnary();
        var nodeUtil = require_nodeUtil();
        var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        module2.exports = isTypedArray;
      }
    });
  
    // node_modules/lodash/_arrayLikeKeys.js
    var require_arrayLikeKeys = __commonJS({
      "node_modules/lodash/_arrayLikeKeys.js"(exports2, module2) {
        var baseTimes = require_baseTimes();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var isBuffer = require_isBuffer();
        var isIndex = require_isIndex();
        var isTypedArray = require_isTypedArray();
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function arrayLikeKeys(value2, inherited) {
          var isArr = isArray(value2), isArg = !isArr && isArguments(value2), isBuff = !isArr && !isArg && isBuffer(value2), isType = !isArr && !isArg && !isBuff && isTypedArray(value2), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value2.length, String) : [], length2 = result.length;
          for (var key2 in value2) {
            if ((inherited || hasOwnProperty.call(value2, key2)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key2 == "offset" || key2 == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || // Skip index properties.
            isIndex(key2, length2)))) {
              result.push(key2);
            }
          }
          return result;
        }
        module2.exports = arrayLikeKeys;
      }
    });
  
    // node_modules/lodash/_isPrototype.js
    var require_isPrototype = __commonJS({
      "node_modules/lodash/_isPrototype.js"(exports2, module2) {
        var objectProto = Object.prototype;
        function isPrototype(value2) {
          var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value2 === proto;
        }
        module2.exports = isPrototype;
      }
    });
  
    // node_modules/lodash/_overArg.js
    var require_overArg = __commonJS({
      "node_modules/lodash/_overArg.js"(exports2, module2) {
        function overArg(func, transform2) {
          return function(arg) {
            return func(transform2(arg));
          };
        }
        module2.exports = overArg;
      }
    });
  
    // node_modules/lodash/_nativeKeys.js
    var require_nativeKeys = __commonJS({
      "node_modules/lodash/_nativeKeys.js"(exports2, module2) {
        var overArg = require_overArg();
        var nativeKeys = overArg(Object.keys, Object);
        module2.exports = nativeKeys;
      }
    });
  
    // node_modules/lodash/_baseKeys.js
    var require_baseKeys = __commonJS({
      "node_modules/lodash/_baseKeys.js"(exports2, module2) {
        var isPrototype = require_isPrototype();
        var nativeKeys = require_nativeKeys();
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result = [];
          for (var key2 in Object(object)) {
            if (hasOwnProperty.call(object, key2) && key2 != "constructor") {
              result.push(key2);
            }
          }
          return result;
        }
        module2.exports = baseKeys;
      }
    });
  
    // node_modules/lodash/isArrayLike.js
    var require_isArrayLike = __commonJS({
      "node_modules/lodash/isArrayLike.js"(exports2, module2) {
        var isFunction = require_isFunction();
        var isLength = require_isLength();
        function isArrayLike(value2) {
          return value2 != null && isLength(value2.length) && !isFunction(value2);
        }
        module2.exports = isArrayLike;
      }
    });
  
    // node_modules/lodash/keys.js
    var require_keys = __commonJS({
      "node_modules/lodash/keys.js"(exports2, module2) {
        var arrayLikeKeys = require_arrayLikeKeys();
        var baseKeys = require_baseKeys();
        var isArrayLike = require_isArrayLike();
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        module2.exports = keys;
      }
    });
  
    // node_modules/lodash/_getAllKeys.js
    var require_getAllKeys = __commonJS({
      "node_modules/lodash/_getAllKeys.js"(exports2, module2) {
        var baseGetAllKeys = require_baseGetAllKeys();
        var getSymbols = require_getSymbols();
        var keys = require_keys();
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        module2.exports = getAllKeys;
      }
    });
  
    // node_modules/lodash/_equalObjects.js
    var require_equalObjects = __commonJS({
      "node_modules/lodash/_equalObjects.js"(exports2, module2) {
        var getAllKeys = require_getAllKeys();
        var COMPARE_PARTIAL_FLAG = 1;
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index2 = objLength;
          while (index2--) {
            var key2 = objProps[index2];
            if (!(isPartial ? key2 in other : hasOwnProperty.call(other, key2))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index2 < objLength) {
            key2 = objProps[index2];
            var objValue = object[key2], othValue = other[key2];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
            }
            if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key2 == "constructor");
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result;
        }
        module2.exports = equalObjects;
      }
    });
  
    // node_modules/lodash/_DataView.js
    var require_DataView = __commonJS({
      "node_modules/lodash/_DataView.js"(exports2, module2) {
        var getNative = require_getNative();
        var root = require_root();
        var DataView = getNative(root, "DataView");
        module2.exports = DataView;
      }
    });
  
    // node_modules/lodash/_Promise.js
    var require_Promise = __commonJS({
      "node_modules/lodash/_Promise.js"(exports2, module2) {
        var getNative = require_getNative();
        var root = require_root();
        var Promise2 = getNative(root, "Promise");
        module2.exports = Promise2;
      }
    });
  
    // node_modules/lodash/_Set.js
    var require_Set = __commonJS({
      "node_modules/lodash/_Set.js"(exports2, module2) {
        var getNative = require_getNative();
        var root = require_root();
        var Set = getNative(root, "Set");
        module2.exports = Set;
      }
    });
  
    // node_modules/lodash/_WeakMap.js
    var require_WeakMap = __commonJS({
      "node_modules/lodash/_WeakMap.js"(exports2, module2) {
        var getNative = require_getNative();
        var root = require_root();
        var WeakMap = getNative(root, "WeakMap");
        module2.exports = WeakMap;
      }
    });
  
    // node_modules/lodash/_getTag.js
    var require_getTag = __commonJS({
      "node_modules/lodash/_getTag.js"(exports2, module2) {
        var DataView = require_DataView();
        var Map = require_Map();
        var Promise2 = require_Promise();
        var Set = require_Set();
        var WeakMap = require_WeakMap();
        var baseGetTag = require_baseGetTag();
        var toSource = require_toSource();
        var mapTag = "[object Map]";
        var objectTag = "[object Object]";
        var promiseTag = "[object Promise]";
        var setTag = "[object Set]";
        var weakMapTag = "[object WeakMap]";
        var dataViewTag = "[object DataView]";
        var dataViewCtorString = toSource(DataView);
        var mapCtorString = toSource(Map);
        var promiseCtorString = toSource(Promise2);
        var setCtorString = toSource(Set);
        var weakMapCtorString = toSource(WeakMap);
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value2) {
            var result = baseGetTag(value2), Ctor = result == objectTag ? value2.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }
        module2.exports = getTag;
      }
    });
  
    // node_modules/lodash/_baseIsEqualDeep.js
    var require_baseIsEqualDeep = __commonJS({
      "node_modules/lodash/_baseIsEqualDeep.js"(exports2, module2) {
        var Stack = require_Stack();
        var equalArrays = require_equalArrays();
        var equalByTag = require_equalByTag();
        var equalObjects = require_equalObjects();
        var getTag = require_getTag();
        var isArray = require_isArray();
        var isBuffer = require_isBuffer();
        var isTypedArray = require_isTypedArray();
        var COMPARE_PARTIAL_FLAG = 1;
        var argsTag = "[object Arguments]";
        var arrayTag = "[object Array]";
        var objectTag = "[object Object]";
        var objectProto = Object.prototype;
        var hasOwnProperty = objectProto.hasOwnProperty;
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        module2.exports = baseIsEqualDeep;
      }
    });
  
    // node_modules/lodash/_baseIsEqual.js
    var require_baseIsEqual = __commonJS({
      "node_modules/lodash/_baseIsEqual.js"(exports2, module2) {
        var baseIsEqualDeep = require_baseIsEqualDeep();
        var isObjectLike = require_isObjectLike();
        function baseIsEqual(value2, other, bitmask, customizer, stack) {
          if (value2 === other) {
            return true;
          }
          if (value2 == null || other == null || !isObjectLike(value2) && !isObjectLike(other)) {
            return value2 !== value2 && other !== other;
          }
          return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
        }
        module2.exports = baseIsEqual;
      }
    });
  
    // node_modules/lodash/_baseIsMatch.js
    var require_baseIsMatch = __commonJS({
      "node_modules/lodash/_baseIsMatch.js"(exports2, module2) {
        var Stack = require_Stack();
        var baseIsEqual = require_baseIsEqual();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function baseIsMatch(object, source, matchData, customizer) {
          var index2 = matchData.length, length2 = index2, noCustomizer = !customizer;
          if (object == null) {
            return !length2;
          }
          object = Object(object);
          while (index2--) {
            var data2 = matchData[index2];
            if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
              return false;
            }
          }
          while (++index2 < length2) {
            data2 = matchData[index2];
            var key2 = data2[0], objValue = object[key2], srcValue = data2[1];
            if (noCustomizer && data2[2]) {
              if (objValue === void 0 && !(key2 in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result = customizer(objValue, srcValue, key2, object, source, stack);
              }
              if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
                return false;
              }
            }
          }
          return true;
        }
        module2.exports = baseIsMatch;
      }
    });
  
    // node_modules/lodash/_isStrictComparable.js
    var require_isStrictComparable = __commonJS({
      "node_modules/lodash/_isStrictComparable.js"(exports2, module2) {
        var isObject = require_isObject();
        function isStrictComparable(value2) {
          return value2 === value2 && !isObject(value2);
        }
        module2.exports = isStrictComparable;
      }
    });
  
    // node_modules/lodash/_getMatchData.js
    var require_getMatchData = __commonJS({
      "node_modules/lodash/_getMatchData.js"(exports2, module2) {
        var isStrictComparable = require_isStrictComparable();
        var keys = require_keys();
        function getMatchData(object) {
          var result = keys(object), length2 = result.length;
          while (length2--) {
            var key2 = result[length2], value2 = object[key2];
            result[length2] = [key2, value2, isStrictComparable(value2)];
          }
          return result;
        }
        module2.exports = getMatchData;
      }
    });
  
    // node_modules/lodash/_matchesStrictComparable.js
    var require_matchesStrictComparable = __commonJS({
      "node_modules/lodash/_matchesStrictComparable.js"(exports2, module2) {
        function matchesStrictComparable(key2, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key2] === srcValue && (srcValue !== void 0 || key2 in Object(object));
          };
        }
        module2.exports = matchesStrictComparable;
      }
    });
  
    // node_modules/lodash/_baseMatches.js
    var require_baseMatches = __commonJS({
      "node_modules/lodash/_baseMatches.js"(exports2, module2) {
        var baseIsMatch = require_baseIsMatch();
        var getMatchData = require_getMatchData();
        var matchesStrictComparable = require_matchesStrictComparable();
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        module2.exports = baseMatches;
      }
    });
  
    // node_modules/lodash/isSymbol.js
    var require_isSymbol = __commonJS({
      "node_modules/lodash/isSymbol.js"(exports2, module2) {
        var baseGetTag = require_baseGetTag();
        var isObjectLike = require_isObjectLike();
        var symbolTag = "[object Symbol]";
        function isSymbol(value2) {
          return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag(value2) == symbolTag;
        }
        module2.exports = isSymbol;
      }
    });
  
    // node_modules/lodash/_isKey.js
    var require_isKey = __commonJS({
      "node_modules/lodash/_isKey.js"(exports2, module2) {
        var isArray = require_isArray();
        var isSymbol = require_isSymbol();
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
        var reIsPlainProp = /^\w*$/;
        function isKey(value2, object) {
          if (isArray(value2)) {
            return false;
          }
          var type = typeof value2;
          if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol(value2)) {
            return true;
          }
          return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object(object);
        }
        module2.exports = isKey;
      }
    });
  
    // node_modules/lodash/memoize.js
    var require_memoize = __commonJS({
      "node_modules/lodash/memoize.js"(exports2, module2) {
        var MapCache = require_MapCache();
        var FUNC_ERROR_TEXT = "Expected a function";
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key2)) {
              return cache.get(key2);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key2, result) || cache;
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        module2.exports = memoize;
      }
    });
  
    // node_modules/lodash/_memoizeCapped.js
    var require_memoizeCapped = __commonJS({
      "node_modules/lodash/_memoizeCapped.js"(exports2, module2) {
        var memoize = require_memoize();
        var MAX_MEMOIZE_SIZE = 500;
        function memoizeCapped(func) {
          var result = memoize(func, function(key2) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key2;
          });
          var cache = result.cache;
          return result;
        }
        module2.exports = memoizeCapped;
      }
    });
  
    // node_modules/lodash/_stringToPath.js
    var require_stringToPath = __commonJS({
      "node_modules/lodash/_stringToPath.js"(exports2, module2) {
        var memoizeCapped = require_memoizeCapped();
        var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = memoizeCapped(function(string) {
          var result = [];
          if (string.charCodeAt(0) === 46) {
            result.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result;
        });
        module2.exports = stringToPath;
      }
    });
  
    // node_modules/lodash/_arrayMap.js
    var require_arrayMap = __commonJS({
      "node_modules/lodash/_arrayMap.js"(exports2, module2) {
        function arrayMap(array, iteratee) {
          var index2 = -1, length2 = array == null ? 0 : array.length, result = Array(length2);
          while (++index2 < length2) {
            result[index2] = iteratee(array[index2], index2, array);
          }
          return result;
        }
        module2.exports = arrayMap;
      }
    });
  
    // node_modules/lodash/_baseToString.js
    var require_baseToString = __commonJS({
      "node_modules/lodash/_baseToString.js"(exports2, module2) {
        var Symbol2 = require_Symbol();
        var arrayMap = require_arrayMap();
        var isArray = require_isArray();
        var isSymbol = require_isSymbol();
        var INFINITY = 1 / 0;
        var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
        var symbolToString = symbolProto ? symbolProto.toString : void 0;
        function baseToString(value2) {
          if (typeof value2 == "string") {
            return value2;
          }
          if (isArray(value2)) {
            return arrayMap(value2, baseToString) + "";
          }
          if (isSymbol(value2)) {
            return symbolToString ? symbolToString.call(value2) : "";
          }
          var result = value2 + "";
          return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
        }
        module2.exports = baseToString;
      }
    });
  
    // node_modules/lodash/toString.js
    var require_toString = __commonJS({
      "node_modules/lodash/toString.js"(exports2, module2) {
        var baseToString = require_baseToString();
        function toString(value2) {
          return value2 == null ? "" : baseToString(value2);
        }
        module2.exports = toString;
      }
    });
  
    // node_modules/lodash/_castPath.js
    var require_castPath = __commonJS({
      "node_modules/lodash/_castPath.js"(exports2, module2) {
        var isArray = require_isArray();
        var isKey = require_isKey();
        var stringToPath = require_stringToPath();
        var toString = require_toString();
        function castPath(value2, object) {
          if (isArray(value2)) {
            return value2;
          }
          return isKey(value2, object) ? [value2] : stringToPath(toString(value2));
        }
        module2.exports = castPath;
      }
    });
  
    // node_modules/lodash/_toKey.js
    var require_toKey = __commonJS({
      "node_modules/lodash/_toKey.js"(exports2, module2) {
        var isSymbol = require_isSymbol();
        var INFINITY = 1 / 0;
        function toKey(value2) {
          if (typeof value2 == "string" || isSymbol(value2)) {
            return value2;
          }
          var result = value2 + "";
          return result == "0" && 1 / value2 == -INFINITY ? "-0" : result;
        }
        module2.exports = toKey;
      }
    });
  
    // node_modules/lodash/_baseGet.js
    var require_baseGet = __commonJS({
      "node_modules/lodash/_baseGet.js"(exports2, module2) {
        var castPath = require_castPath();
        var toKey = require_toKey();
        function baseGet(object, path) {
          path = castPath(path, object);
          var index2 = 0, length2 = path.length;
          while (object != null && index2 < length2) {
            object = object[toKey(path[index2++])];
          }
          return index2 && index2 == length2 ? object : void 0;
        }
        module2.exports = baseGet;
      }
    });
  
    // node_modules/lodash/get.js
    var require_get = __commonJS({
      "node_modules/lodash/get.js"(exports2, module2) {
        var baseGet = require_baseGet();
        function get(object, path, defaultValue) {
          var result = object == null ? void 0 : baseGet(object, path);
          return result === void 0 ? defaultValue : result;
        }
        module2.exports = get;
      }
    });
  
    // node_modules/lodash/_baseHasIn.js
    var require_baseHasIn = __commonJS({
      "node_modules/lodash/_baseHasIn.js"(exports2, module2) {
        function baseHasIn(object, key2) {
          return object != null && key2 in Object(object);
        }
        module2.exports = baseHasIn;
      }
    });
  
    // node_modules/lodash/_hasPath.js
    var require_hasPath = __commonJS({
      "node_modules/lodash/_hasPath.js"(exports2, module2) {
        var castPath = require_castPath();
        var isArguments = require_isArguments();
        var isArray = require_isArray();
        var isIndex = require_isIndex();
        var isLength = require_isLength();
        var toKey = require_toKey();
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index2 = -1, length2 = path.length, result = false;
          while (++index2 < length2) {
            var key2 = toKey(path[index2]);
            if (!(result = object != null && hasFunc(object, key2))) {
              break;
            }
            object = object[key2];
          }
          if (result || ++index2 != length2) {
            return result;
          }
          length2 = object == null ? 0 : object.length;
          return !!length2 && isLength(length2) && isIndex(key2, length2) && (isArray(object) || isArguments(object));
        }
        module2.exports = hasPath;
      }
    });
  
    // node_modules/lodash/hasIn.js
    var require_hasIn = __commonJS({
      "node_modules/lodash/hasIn.js"(exports2, module2) {
        var baseHasIn = require_baseHasIn();
        var hasPath = require_hasPath();
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        module2.exports = hasIn;
      }
    });
  
    // node_modules/lodash/_baseMatchesProperty.js
    var require_baseMatchesProperty = __commonJS({
      "node_modules/lodash/_baseMatchesProperty.js"(exports2, module2) {
        var baseIsEqual = require_baseIsEqual();
        var get = require_get();
        var hasIn = require_hasIn();
        var isKey = require_isKey();
        var isStrictComparable = require_isStrictComparable();
        var matchesStrictComparable = require_matchesStrictComparable();
        var toKey = require_toKey();
        var COMPARE_PARTIAL_FLAG = 1;
        var COMPARE_UNORDERED_FLAG = 2;
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        module2.exports = baseMatchesProperty;
      }
    });
  
    // node_modules/lodash/identity.js
    var require_identity = __commonJS({
      "node_modules/lodash/identity.js"(exports2, module2) {
        function identity(value2) {
          return value2;
        }
        module2.exports = identity;
      }
    });
  
    // node_modules/lodash/_baseProperty.js
    var require_baseProperty = __commonJS({
      "node_modules/lodash/_baseProperty.js"(exports2, module2) {
        function baseProperty(key2) {
          return function(object) {
            return object == null ? void 0 : object[key2];
          };
        }
        module2.exports = baseProperty;
      }
    });
  
    // node_modules/lodash/_basePropertyDeep.js
    var require_basePropertyDeep = __commonJS({
      "node_modules/lodash/_basePropertyDeep.js"(exports2, module2) {
        var baseGet = require_baseGet();
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        module2.exports = basePropertyDeep;
      }
    });
  
    // node_modules/lodash/property.js
    var require_property = __commonJS({
      "node_modules/lodash/property.js"(exports2, module2) {
        var baseProperty = require_baseProperty();
        var basePropertyDeep = require_basePropertyDeep();
        var isKey = require_isKey();
        var toKey = require_toKey();
        function property2(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        module2.exports = property2;
      }
    });
  
    // node_modules/lodash/_baseIteratee.js
    var require_baseIteratee = __commonJS({
      "node_modules/lodash/_baseIteratee.js"(exports2, module2) {
        var baseMatches = require_baseMatches();
        var baseMatchesProperty = require_baseMatchesProperty();
        var identity = require_identity();
        var isArray = require_isArray();
        var property2 = require_property();
        function baseIteratee(value2) {
          if (typeof value2 == "function") {
            return value2;
          }
          if (value2 == null) {
            return identity;
          }
          if (typeof value2 == "object") {
            return isArray(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
          }
          return property2(value2);
        }
        module2.exports = baseIteratee;
      }
    });
  
    // node_modules/lodash/_trimmedEndIndex.js
    var require_trimmedEndIndex = __commonJS({
      "node_modules/lodash/_trimmedEndIndex.js"(exports2, module2) {
        var reWhitespace = /\s/;
        function trimmedEndIndex(string) {
          var index2 = string.length;
          while (index2-- && reWhitespace.test(string.charAt(index2))) {
          }
          return index2;
        }
        module2.exports = trimmedEndIndex;
      }
    });
  
    // node_modules/lodash/_baseTrim.js
    var require_baseTrim = __commonJS({
      "node_modules/lodash/_baseTrim.js"(exports2, module2) {
        var trimmedEndIndex = require_trimmedEndIndex();
        var reTrimStart = /^\s+/;
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        module2.exports = baseTrim;
      }
    });
  
    // node_modules/lodash/toNumber.js
    var require_toNumber = __commonJS({
      "node_modules/lodash/toNumber.js"(exports2, module2) {
        var baseTrim = require_baseTrim();
        var isObject = require_isObject();
        var isSymbol = require_isSymbol();
        var NAN = 0 / 0;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsOctal = /^0o[0-7]+$/i;
        var freeParseInt = parseInt;
        function toNumber(value2) {
          if (typeof value2 == "number") {
            return value2;
          }
          if (isSymbol(value2)) {
            return NAN;
          }
          if (isObject(value2)) {
            var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
            value2 = isObject(other) ? other + "" : other;
          }
          if (typeof value2 != "string") {
            return value2 === 0 ? value2 : +value2;
          }
          value2 = baseTrim(value2);
          var isBinary = reIsBinary.test(value2);
          return isBinary || reIsOctal.test(value2) ? freeParseInt(value2.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value2) ? NAN : +value2;
        }
        module2.exports = toNumber;
      }
    });
  
    // node_modules/lodash/toFinite.js
    var require_toFinite = __commonJS({
      "node_modules/lodash/toFinite.js"(exports2, module2) {
        var toNumber = require_toNumber();
        var INFINITY = 1 / 0;
        var MAX_INTEGER = 17976931348623157e292;
        function toFinite(value2) {
          if (!value2) {
            return value2 === 0 ? value2 : 0;
          }
          value2 = toNumber(value2);
          if (value2 === INFINITY || value2 === -INFINITY) {
            var sign = value2 < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value2 === value2 ? value2 : 0;
        }
        module2.exports = toFinite;
      }
    });
  
    // node_modules/lodash/toInteger.js
    var require_toInteger = __commonJS({
      "node_modules/lodash/toInteger.js"(exports2, module2) {
        var toFinite = require_toFinite();
        function toInteger(value2) {
          var result = toFinite(value2), remainder = result % 1;
          return result === result ? remainder ? result - remainder : result : 0;
        }
        module2.exports = toInteger;
      }
    });
  
    // node_modules/lodash/findIndex.js
    var require_findIndex = __commonJS({
      "node_modules/lodash/findIndex.js"(exports2, module2) {
        var baseFindIndex = require_baseFindIndex();
        var baseIteratee = require_baseIteratee();
        var toInteger = require_toInteger();
        var nativeMax = Math.max;
        function findIndex(array, predicate, fromIndex) {
          var length2 = array == null ? 0 : array.length;
          if (!length2) {
            return -1;
          }
          var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index2 < 0) {
            index2 = nativeMax(length2 + index2, 0);
          }
          return baseFindIndex(array, baseIteratee(predicate, 3), index2);
        }
        module2.exports = findIndex;
      }
    });
  
    // node_modules/core-js/internals/global.js
    var require_global = __commonJS({
      "node_modules/core-js/internals/global.js"(exports2, module2) {
        var check = function(it) {
          return it && it.Math == Math && it;
        };
        module2.exports = // eslint-disable-next-line es/no-global-this -- safe
        check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
        check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
        function() {
          return this;
        }() || Function("return this")();
      }
    });
  
    // node_modules/core-js/internals/fails.js
    var require_fails = __commonJS({
      "node_modules/core-js/internals/fails.js"(exports2, module2) {
        module2.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      }
    });
  
    // node_modules/core-js/internals/descriptors.js
    var require_descriptors = __commonJS({
      "node_modules/core-js/internals/descriptors.js"(exports2, module2) {
        var fails = require_fails();
        module2.exports = !fails(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      }
    });
  
    // node_modules/core-js/internals/function-call.js
    var require_function_call = __commonJS({
      "node_modules/core-js/internals/function-call.js"(exports2, module2) {
        var call = Function.prototype.call;
        module2.exports = call.bind ? call.bind(call) : function() {
          return call.apply(call, arguments);
        };
      }
    });
  
    // node_modules/core-js/internals/object-property-is-enumerable.js
    var require_object_property_is_enumerable = __commonJS({
      "node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
        "use strict";
        var $propertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
        exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : $propertyIsEnumerable;
      }
    });
  
    // node_modules/core-js/internals/create-property-descriptor.js
    var require_create_property_descriptor = __commonJS({
      "node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
        module2.exports = function(bitmap, value2) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value2
          };
        };
      }
    });
  
    // node_modules/core-js/internals/function-uncurry-this.js
    var require_function_uncurry_this = __commonJS({
      "node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
        var FunctionPrototype = Function.prototype;
        var bind = FunctionPrototype.bind;
        var call = FunctionPrototype.call;
        var callBind = bind && bind.bind(call);
        module2.exports = bind ? function(fn) {
          return fn && callBind(call, fn);
        } : function(fn) {
          return fn && function() {
            return call.apply(fn, arguments);
          };
        };
      }
    });
  
    // node_modules/core-js/internals/classof-raw.js
    var require_classof_raw = __commonJS({
      "node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis("".slice);
        module2.exports = function(it) {
          return stringSlice(toString(it), 8, -1);
        };
      }
    });
  
    // node_modules/core-js/internals/indexed-object.js
    var require_indexed_object = __commonJS({
      "node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
        var global2 = require_global();
        var uncurryThis = require_function_uncurry_this();
        var fails = require_fails();
        var classof = require_classof_raw();
        var Object2 = global2.Object;
        var split = uncurryThis("".split);
        module2.exports = fails(function() {
          return !Object2("z").propertyIsEnumerable(0);
        }) ? function(it) {
          return classof(it) == "String" ? split(it, "") : Object2(it);
        } : Object2;
      }
    });
  
    // node_modules/core-js/internals/require-object-coercible.js
    var require_require_object_coercible = __commonJS({
      "node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
        var global2 = require_global();
        var TypeError2 = global2.TypeError;
        module2.exports = function(it) {
          if (it == void 0)
            throw TypeError2("Can't call method on " + it);
          return it;
        };
      }
    });
  
    // node_modules/core-js/internals/to-indexed-object.js
    var require_to_indexed_object = __commonJS({
      "node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
        var IndexedObject = require_indexed_object();
        var requireObjectCoercible = require_require_object_coercible();
        module2.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };
      }
    });
  
    // node_modules/core-js/internals/is-callable.js
    var require_is_callable = __commonJS({
      "node_modules/core-js/internals/is-callable.js"(exports2, module2) {
        module2.exports = function(argument) {
          return typeof argument == "function";
        };
      }
    });
  
    // node_modules/core-js/internals/is-object.js
    var require_is_object = __commonJS({
      "node_modules/core-js/internals/is-object.js"(exports2, module2) {
        var isCallable = require_is_callable();
        module2.exports = function(it) {
          return typeof it == "object" ? it !== null : isCallable(it);
        };
      }
    });
  
    // node_modules/core-js/internals/get-built-in.js
    var require_get_built_in = __commonJS({
      "node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var aFunction = function(argument) {
          return isCallable(argument) ? argument : void 0;
        };
        module2.exports = function(namespace, method) {
          return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
        };
      }
    });
  
    // node_modules/core-js/internals/object-is-prototype-of.js
    var require_object_is_prototype_of = __commonJS({
      "node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        module2.exports = uncurryThis({}.isPrototypeOf);
      }
    });
  
    // node_modules/core-js/internals/engine-user-agent.js
    var require_engine_user_agent = __commonJS({
      "node_modules/core-js/internals/engine-user-agent.js"(exports2, module2) {
        var getBuiltIn = require_get_built_in();
        module2.exports = getBuiltIn("navigator", "userAgent") || "";
      }
    });
  
    // node_modules/core-js/internals/engine-v8-version.js
    var require_engine_v8_version = __commonJS({
      "node_modules/core-js/internals/engine-v8-version.js"(exports2, module2) {
        var global2 = require_global();
        var userAgent = require_engine_user_agent();
        var process = global2.process;
        var Deno = global2.Deno;
        var versions = process && process.versions || Deno && Deno.version;
        var v8 = versions && versions.v8;
        var match;
        var version;
        if (v8) {
          match = v8.split(".");
          version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }
        if (!version && userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match)
              version = +match[1];
          }
        }
        module2.exports = version;
      }
    });
  
    // node_modules/core-js/internals/native-symbol.js
    var require_native_symbol = __commonJS({
      "node_modules/core-js/internals/native-symbol.js"(exports2, module2) {
        var V8_VERSION = require_engine_v8_version();
        var fails = require_fails();
        module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
          var symbol = Symbol();
          return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
          !Symbol.sham && V8_VERSION && V8_VERSION < 41;
        });
      }
    });
  
    // node_modules/core-js/internals/use-symbol-as-uid.js
    var require_use_symbol_as_uid = __commonJS({
      "node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
        var NATIVE_SYMBOL = require_native_symbol();
        module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    });
  
    // node_modules/core-js/internals/is-symbol.js
    var require_is_symbol = __commonJS({
      "node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
        var global2 = require_global();
        var getBuiltIn = require_get_built_in();
        var isCallable = require_is_callable();
        var isPrototypeOf = require_object_is_prototype_of();
        var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
        var Object2 = global2.Object;
        module2.exports = USE_SYMBOL_AS_UID ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          var $Symbol = getBuiltIn("Symbol");
          return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object2(it));
        };
      }
    });
  
    // node_modules/core-js/internals/try-to-string.js
    var require_try_to_string = __commonJS({
      "node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
        var global2 = require_global();
        var String2 = global2.String;
        module2.exports = function(argument) {
          try {
            return String2(argument);
          } catch (error) {
            return "Object";
          }
        };
      }
    });
  
    // node_modules/core-js/internals/a-callable.js
    var require_a_callable = __commonJS({
      "node_modules/core-js/internals/a-callable.js"(exports2, module2) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var tryToString = require_try_to_string();
        var TypeError2 = global2.TypeError;
        module2.exports = function(argument) {
          if (isCallable(argument))
            return argument;
          throw TypeError2(tryToString(argument) + " is not a function");
        };
      }
    });
  
    // node_modules/core-js/internals/get-method.js
    var require_get_method = __commonJS({
      "node_modules/core-js/internals/get-method.js"(exports2, module2) {
        var aCallable = require_a_callable();
        module2.exports = function(V, P) {
          var func = V[P];
          return func == null ? void 0 : aCallable(func);
        };
      }
    });
  
    // node_modules/core-js/internals/ordinary-to-primitive.js
    var require_ordinary_to_primitive = __commonJS({
      "node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
        var global2 = require_global();
        var call = require_function_call();
        var isCallable = require_is_callable();
        var isObject = require_is_object();
        var TypeError2 = global2.TypeError;
        module2.exports = function(input, pref) {
          var fn, val2;
          if (pref === "string" && isCallable(fn = input.toString) && !isObject(val2 = call(fn, input)))
            return val2;
          if (isCallable(fn = input.valueOf) && !isObject(val2 = call(fn, input)))
            return val2;
          if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val2 = call(fn, input)))
            return val2;
          throw TypeError2("Can't convert object to primitive value");
        };
      }
    });
  
    // node_modules/core-js/internals/is-pure.js
    var require_is_pure = __commonJS({
      "node_modules/core-js/internals/is-pure.js"(exports2, module2) {
        module2.exports = false;
      }
    });
  
    // node_modules/core-js/internals/set-global.js
    var require_set_global = __commonJS({
      "node_modules/core-js/internals/set-global.js"(exports2, module2) {
        var global2 = require_global();
        var defineProperty = Object.defineProperty;
        module2.exports = function(key2, value2) {
          try {
            defineProperty(global2, key2, { value: value2, configurable: true, writable: true });
          } catch (error) {
            global2[key2] = value2;
          }
          return value2;
        };
      }
    });
  
    // node_modules/core-js/internals/shared-store.js
    var require_shared_store = __commonJS({
      "node_modules/core-js/internals/shared-store.js"(exports2, module2) {
        var global2 = require_global();
        var setGlobal = require_set_global();
        var SHARED = "__core-js_shared__";
        var store = global2[SHARED] || setGlobal(SHARED, {});
        module2.exports = store;
      }
    });
  
    // node_modules/core-js/internals/shared.js
    var require_shared = __commonJS({
      "node_modules/core-js/internals/shared.js"(exports2, module2) {
        var IS_PURE = require_is_pure();
        var store = require_shared_store();
        (module2.exports = function(key2, value2) {
          return store[key2] || (store[key2] = value2 !== void 0 ? value2 : {});
        })("versions", []).push({
          version: "3.19.0",
          mode: IS_PURE ? "pure" : "global",
          copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        });
      }
    });
  
    // node_modules/core-js/internals/to-object.js
    var require_to_object = __commonJS({
      "node_modules/core-js/internals/to-object.js"(exports2, module2) {
        var global2 = require_global();
        var requireObjectCoercible = require_require_object_coercible();
        var Object2 = global2.Object;
        module2.exports = function(argument) {
          return Object2(requireObjectCoercible(argument));
        };
      }
    });
  
    // node_modules/core-js/internals/has-own-property.js
    var require_has_own_property = __commonJS({
      "node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var toObject = require_to_object();
        var hasOwnProperty = uncurryThis({}.hasOwnProperty);
        module2.exports = Object.hasOwn || function hasOwn(it, key2) {
          return hasOwnProperty(toObject(it), key2);
        };
      }
    });
  
    // node_modules/core-js/internals/uid.js
    var require_uid = __commonJS({
      "node_modules/core-js/internals/uid.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis(1 .toString);
        module2.exports = function(key2) {
          return "Symbol(" + (key2 === void 0 ? "" : key2) + ")_" + toString(++id + postfix, 36);
        };
      }
    });
  
    // node_modules/core-js/internals/well-known-symbol.js
    var require_well_known_symbol = __commonJS({
      "node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
        var global2 = require_global();
        var shared = require_shared();
        var hasOwn = require_has_own_property();
        var uid = require_uid();
        var NATIVE_SYMBOL = require_native_symbol();
        var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
        var WellKnownSymbolsStore = shared("wks");
        var Symbol2 = global2.Symbol;
        var symbolFor = Symbol2 && Symbol2["for"];
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
        module2.exports = function(name2) {
          if (!hasOwn(WellKnownSymbolsStore, name2) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name2] == "string")) {
            var description = "Symbol." + name2;
            if (NATIVE_SYMBOL && hasOwn(Symbol2, name2)) {
              WellKnownSymbolsStore[name2] = Symbol2[name2];
            } else if (USE_SYMBOL_AS_UID && symbolFor) {
              WellKnownSymbolsStore[name2] = symbolFor(description);
            } else {
              WellKnownSymbolsStore[name2] = createWellKnownSymbol(description);
            }
          }
          return WellKnownSymbolsStore[name2];
        };
      }
    });
  
    // node_modules/core-js/internals/to-primitive.js
    var require_to_primitive = __commonJS({
      "node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
        var global2 = require_global();
        var call = require_function_call();
        var isObject = require_is_object();
        var isSymbol = require_is_symbol();
        var getMethod = require_get_method();
        var ordinaryToPrimitive = require_ordinary_to_primitive();
        var wellKnownSymbol = require_well_known_symbol();
        var TypeError2 = global2.TypeError;
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        module2.exports = function(input, pref) {
          if (!isObject(input) || isSymbol(input))
            return input;
          var exoticToPrim = getMethod(input, TO_PRIMITIVE);
          var result;
          if (exoticToPrim) {
            if (pref === void 0)
              pref = "default";
            result = call(exoticToPrim, input, pref);
            if (!isObject(result) || isSymbol(result))
              return result;
            throw TypeError2("Can't convert object to primitive value");
          }
          if (pref === void 0)
            pref = "number";
          return ordinaryToPrimitive(input, pref);
        };
      }
    });
  
    // node_modules/core-js/internals/to-property-key.js
    var require_to_property_key = __commonJS({
      "node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
        var toPrimitive = require_to_primitive();
        var isSymbol = require_is_symbol();
        module2.exports = function(argument) {
          var key2 = toPrimitive(argument, "string");
          return isSymbol(key2) ? key2 : key2 + "";
        };
      }
    });
  
    // node_modules/core-js/internals/document-create-element.js
    var require_document_create_element = __commonJS({
      "node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
        var global2 = require_global();
        var isObject = require_is_object();
        var document2 = global2.document;
        var EXISTS = isObject(document2) && isObject(document2.createElement);
        module2.exports = function(it) {
          return EXISTS ? document2.createElement(it) : {};
        };
      }
    });
  
    // node_modules/core-js/internals/ie8-dom-define.js
    var require_ie8_dom_define = __commonJS({
      "node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
        var DESCRIPTORS = require_descriptors();
        var fails = require_fails();
        var createElement = require_document_create_element();
        module2.exports = !DESCRIPTORS && !fails(function() {
          return Object.defineProperty(createElement("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-descriptor.js
    var require_object_get_own_property_descriptor = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
        var DESCRIPTORS = require_descriptors();
        var call = require_function_call();
        var propertyIsEnumerableModule = require_object_property_is_enumerable();
        var createPropertyDescriptor = require_create_property_descriptor();
        var toIndexedObject = require_to_indexed_object();
        var toPropertyKey = require_to_property_key();
        var hasOwn = require_has_own_property();
        var IE8_DOM_DEFINE = require_ie8_dom_define();
        var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports2.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPropertyKey(P);
          if (IE8_DOM_DEFINE)
            try {
              return $getOwnPropertyDescriptor(O, P);
            } catch (error) {
            }
          if (hasOwn(O, P))
            return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
        };
      }
    });
  
    // node_modules/core-js/internals/an-object.js
    var require_an_object = __commonJS({
      "node_modules/core-js/internals/an-object.js"(exports2, module2) {
        var global2 = require_global();
        var isObject = require_is_object();
        var String2 = global2.String;
        var TypeError2 = global2.TypeError;
        module2.exports = function(argument) {
          if (isObject(argument))
            return argument;
          throw TypeError2(String2(argument) + " is not an object");
        };
      }
    });
  
    // node_modules/core-js/internals/object-define-property.js
    var require_object_define_property = __commonJS({
      "node_modules/core-js/internals/object-define-property.js"(exports2) {
        var global2 = require_global();
        var DESCRIPTORS = require_descriptors();
        var IE8_DOM_DEFINE = require_ie8_dom_define();
        var anObject = require_an_object();
        var toPropertyKey = require_to_property_key();
        var TypeError2 = global2.TypeError;
        var $defineProperty = Object.defineProperty;
        exports2.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPropertyKey(P);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return $defineProperty(O, P, Attributes);
            } catch (error) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw TypeError2("Accessors not supported");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      }
    });
  
    // node_modules/core-js/internals/create-non-enumerable-property.js
    var require_create_non_enumerable_property = __commonJS({
      "node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
        var DESCRIPTORS = require_descriptors();
        var definePropertyModule = require_object_define_property();
        var createPropertyDescriptor = require_create_property_descriptor();
        module2.exports = DESCRIPTORS ? function(object, key2, value2) {
          return definePropertyModule.f(object, key2, createPropertyDescriptor(1, value2));
        } : function(object, key2, value2) {
          object[key2] = value2;
          return object;
        };
      }
    });
  
    // node_modules/core-js/internals/inspect-source.js
    var require_inspect_source = __commonJS({
      "node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var isCallable = require_is_callable();
        var store = require_shared_store();
        var functionToString = uncurryThis(Function.toString);
        if (!isCallable(store.inspectSource)) {
          store.inspectSource = function(it) {
            return functionToString(it);
          };
        }
        module2.exports = store.inspectSource;
      }
    });
  
    // node_modules/core-js/internals/native-weak-map.js
    var require_native_weak_map = __commonJS({
      "node_modules/core-js/internals/native-weak-map.js"(exports2, module2) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var inspectSource = require_inspect_source();
        var WeakMap = global2.WeakMap;
        module2.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));
      }
    });
  
    // node_modules/core-js/internals/shared-key.js
    var require_shared_key = __commonJS({
      "node_modules/core-js/internals/shared-key.js"(exports2, module2) {
        var shared = require_shared();
        var uid = require_uid();
        var keys = shared("keys");
        module2.exports = function(key2) {
          return keys[key2] || (keys[key2] = uid(key2));
        };
      }
    });
  
    // node_modules/core-js/internals/hidden-keys.js
    var require_hidden_keys = __commonJS({
      "node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
        module2.exports = {};
      }
    });
  
    // node_modules/core-js/internals/internal-state.js
    var require_internal_state = __commonJS({
      "node_modules/core-js/internals/internal-state.js"(exports2, module2) {
        var NATIVE_WEAK_MAP = require_native_weak_map();
        var global2 = require_global();
        var uncurryThis = require_function_uncurry_this();
        var isObject = require_is_object();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var hasOwn = require_has_own_property();
        var shared = require_shared_store();
        var sharedKey = require_shared_key();
        var hiddenKeys = require_hidden_keys();
        var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
        var TypeError2 = global2.TypeError;
        var WeakMap = global2.WeakMap;
        var set;
        var get;
        var has;
        var enforce = function(it) {
          return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function(TYPE) {
          return function(it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError2("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };
        if (NATIVE_WEAK_MAP || shared.state) {
          store = shared.state || (shared.state = new WeakMap());
          wmget = uncurryThis(store.get);
          wmhas = uncurryThis(store.has);
          wmset = uncurryThis(store.set);
          set = function(it, metadata) {
            if (wmhas(store, it))
              throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            wmset(store, it, metadata);
            return metadata;
          };
          get = function(it) {
            return wmget(store, it) || {};
          };
          has = function(it) {
            return wmhas(store, it);
          };
        } else {
          STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function(it, metadata) {
            if (hasOwn(it, STATE))
              throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function(it) {
            return hasOwn(it, STATE) ? it[STATE] : {};
          };
          has = function(it) {
            return hasOwn(it, STATE);
          };
        }
        var store;
        var wmget;
        var wmhas;
        var wmset;
        var STATE;
        module2.exports = {
          set,
          get,
          has,
          enforce,
          getterFor
        };
      }
    });
  
    // node_modules/core-js/internals/function-name.js
    var require_function_name = __commonJS({
      "node_modules/core-js/internals/function-name.js"(exports2, module2) {
        var DESCRIPTORS = require_descriptors();
        var hasOwn = require_has_own_property();
        var FunctionPrototype = Function.prototype;
        var getDescriptor2 = DESCRIPTORS && Object.getOwnPropertyDescriptor;
        var EXISTS = hasOwn(FunctionPrototype, "name");
        var PROPER = EXISTS && function something() {
        }.name === "something";
        var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor2(FunctionPrototype, "name").configurable);
        module2.exports = {
          EXISTS,
          PROPER,
          CONFIGURABLE
        };
      }
    });
  
    // node_modules/core-js/internals/redefine.js
    var require_redefine = __commonJS({
      "node_modules/core-js/internals/redefine.js"(exports2, module2) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var hasOwn = require_has_own_property();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var setGlobal = require_set_global();
        var inspectSource = require_inspect_source();
        var InternalStateModule = require_internal_state();
        var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split("String");
        (module2.exports = function(O, key2, value2, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          var name2 = options && options.name !== void 0 ? options.name : key2;
          var state;
          if (isCallable(value2)) {
            if (String(name2).slice(0, 7) === "Symbol(") {
              name2 = "[" + String(name2).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
            }
            if (!hasOwn(value2, "name") || CONFIGURABLE_FUNCTION_NAME && value2.name !== name2) {
              createNonEnumerableProperty(value2, "name", name2);
            }
            state = enforceInternalState(value2);
            if (!state.source) {
              state.source = TEMPLATE.join(typeof name2 == "string" ? name2 : "");
            }
          }
          if (O === global2) {
            if (simple)
              O[key2] = value2;
            else
              setGlobal(key2, value2);
            return;
          } else if (!unsafe) {
            delete O[key2];
          } else if (!noTargetGet && O[key2]) {
            simple = true;
          }
          if (simple)
            O[key2] = value2;
          else
            createNonEnumerableProperty(O, key2, value2);
        })(Function.prototype, "toString", function toString() {
          return isCallable(this) && getInternalState(this).source || inspectSource(this);
        });
      }
    });
  
    // node_modules/core-js/internals/to-integer-or-infinity.js
    var require_to_integer_or_infinity = __commonJS({
      "node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module2.exports = function(argument) {
          var number = +argument;
          return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
        };
      }
    });
  
    // node_modules/core-js/internals/to-absolute-index.js
    var require_to_absolute_index = __commonJS({
      "node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var max = Math.max;
        var min = Math.min;
        module2.exports = function(index2, length2) {
          var integer = toIntegerOrInfinity(index2);
          return integer < 0 ? max(integer + length2, 0) : min(integer, length2);
        };
      }
    });
  
    // node_modules/core-js/internals/to-length.js
    var require_to_length = __commonJS({
      "node_modules/core-js/internals/to-length.js"(exports2, module2) {
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var min = Math.min;
        module2.exports = function(argument) {
          return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
        };
      }
    });
  
    // node_modules/core-js/internals/length-of-array-like.js
    var require_length_of_array_like = __commonJS({
      "node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
        var toLength = require_to_length();
        module2.exports = function(obj) {
          return toLength(obj.length);
        };
      }
    });
  
    // node_modules/core-js/internals/array-includes.js
    var require_array_includes = __commonJS({
      "node_modules/core-js/internals/array-includes.js"(exports2, module2) {
        var toIndexedObject = require_to_indexed_object();
        var toAbsoluteIndex = require_to_absolute_index();
        var lengthOfArrayLike = require_length_of_array_like();
        var createMethod = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length2 = lengthOfArrayLike(O);
            var index2 = toAbsoluteIndex(fromIndex, length2);
            var value2;
            if (IS_INCLUDES && el != el)
              while (length2 > index2) {
                value2 = O[index2++];
                if (value2 != value2)
                  return true;
              }
            else
              for (; length2 > index2; index2++) {
                if ((IS_INCLUDES || index2 in O) && O[index2] === el)
                  return IS_INCLUDES || index2 || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };
        module2.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false)
        };
      }
    });
  
    // node_modules/core-js/internals/object-keys-internal.js
    var require_object_keys_internal = __commonJS({
      "node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var hasOwn = require_has_own_property();
        var toIndexedObject = require_to_indexed_object();
        var indexOf = require_array_includes().indexOf;
        var hiddenKeys = require_hidden_keys();
        var push = uncurryThis([].push);
        module2.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key2;
          for (key2 in O)
            !hasOwn(hiddenKeys, key2) && hasOwn(O, key2) && push(result, key2);
          while (names.length > i)
            if (hasOwn(O, key2 = names[i++])) {
              ~indexOf(result, key2) || push(result, key2);
            }
          return result;
        };
      }
    });
  
    // node_modules/core-js/internals/enum-bug-keys.js
    var require_enum_bug_keys = __commonJS({
      "node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
        module2.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-names.js
    var require_object_get_own_property_names = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
        var internalObjectKeys = require_object_keys_internal();
        var enumBugKeys = require_enum_bug_keys();
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-symbols.js
    var require_object_get_own_property_symbols = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
        exports2.f = Object.getOwnPropertySymbols;
      }
    });
  
    // node_modules/core-js/internals/own-keys.js
    var require_own_keys = __commonJS({
      "node_modules/core-js/internals/own-keys.js"(exports2, module2) {
        var getBuiltIn = require_get_built_in();
        var uncurryThis = require_function_uncurry_this();
        var getOwnPropertyNamesModule = require_object_get_own_property_names();
        var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
        var anObject = require_an_object();
        var concat = uncurryThis([].concat);
        module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
          var keys = getOwnPropertyNamesModule.f(anObject(it));
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
        };
      }
    });
  
    // node_modules/core-js/internals/copy-constructor-properties.js
    var require_copy_constructor_properties = __commonJS({
      "node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
        var hasOwn = require_has_own_property();
        var ownKeys = require_own_keys();
        var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
        var definePropertyModule = require_object_define_property();
        module2.exports = function(target, source) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key2 = keys[i];
            if (!hasOwn(target, key2))
              defineProperty(target, key2, getOwnPropertyDescriptor(source, key2));
          }
        };
      }
    });
  
    // node_modules/core-js/internals/is-forced.js
    var require_is_forced = __commonJS({
      "node_modules/core-js/internals/is-forced.js"(exports2, module2) {
        var fails = require_fails();
        var isCallable = require_is_callable();
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
          var value2 = data2[normalize2(feature)];
          return value2 == POLYFILL ? true : value2 == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
        };
        var normalize2 = isForced.normalize = function(string) {
          return String(string).replace(replacement, ".").toLowerCase();
        };
        var data2 = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module2.exports = isForced;
      }
    });
  
    // node_modules/core-js/internals/export.js
    var require_export = __commonJS({
      "node_modules/core-js/internals/export.js"(exports2, module2) {
        var global2 = require_global();
        var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var redefine = require_redefine();
        var setGlobal = require_set_global();
        var copyConstructorProperties = require_copy_constructor_properties();
        var isForced = require_is_forced();
        module2.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key2, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global2;
          } else if (STATIC) {
            target = global2[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global2[TARGET] || {}).prototype;
          }
          if (target)
            for (key2 in source) {
              sourceProperty = source[key2];
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key2);
                targetProperty = descriptor && descriptor.value;
              } else
                targetProperty = target[key2];
              FORCED = isForced(GLOBAL ? key2 : TARGET + (STATIC ? "." : "#") + key2, options.forced);
              if (!FORCED && targetProperty !== void 0) {
                if (typeof sourceProperty == typeof targetProperty)
                  continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              if (options.sham || targetProperty && targetProperty.sham) {
                createNonEnumerableProperty(sourceProperty, "sham", true);
              }
              redefine(target, key2, sourceProperty, options);
            }
        };
      }
    });
  
    // node_modules/core-js/internals/function-bind-context.js
    var require_function_bind_context = __commonJS({
      "node_modules/core-js/internals/function-bind-context.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var aCallable = require_a_callable();
        var bind = uncurryThis(uncurryThis.bind);
        module2.exports = function(fn, that) {
          aCallable(fn);
          return that === void 0 ? fn : bind ? bind(fn, that) : function() {
            return fn.apply(that, arguments);
          };
        };
      }
    });
  
    // node_modules/core-js/internals/iterator-close.js
    var require_iterator_close = __commonJS({
      "node_modules/core-js/internals/iterator-close.js"(exports2, module2) {
        var call = require_function_call();
        var anObject = require_an_object();
        var getMethod = require_get_method();
        module2.exports = function(iterator, kind, value2) {
          var innerResult, innerError;
          anObject(iterator);
          try {
            innerResult = getMethod(iterator, "return");
            if (!innerResult) {
              if (kind === "throw")
                throw value2;
              return value2;
            }
            innerResult = call(innerResult, iterator);
          } catch (error) {
            innerError = true;
            innerResult = error;
          }
          if (kind === "throw")
            throw value2;
          if (innerError)
            throw innerResult;
          anObject(innerResult);
          return value2;
        };
      }
    });
  
    // node_modules/core-js/internals/call-with-safe-iteration-closing.js
    var require_call_with_safe_iteration_closing = __commonJS({
      "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports2, module2) {
        var anObject = require_an_object();
        var iteratorClose = require_iterator_close();
        module2.exports = function(iterator, fn, value2, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value2)[0], value2[1]) : fn(value2);
          } catch (error) {
            iteratorClose(iterator, "throw", error);
          }
        };
      }
    });
  
    // node_modules/core-js/internals/iterators.js
    var require_iterators = __commonJS({
      "node_modules/core-js/internals/iterators.js"(exports2, module2) {
        module2.exports = {};
      }
    });
  
    // node_modules/core-js/internals/is-array-iterator-method.js
    var require_is_array_iterator_method = __commonJS({
      "node_modules/core-js/internals/is-array-iterator-method.js"(exports2, module2) {
        var wellKnownSymbol = require_well_known_symbol();
        var Iterators = require_iterators();
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
      }
    });
  
    // node_modules/core-js/internals/to-string-tag-support.js
    var require_to_string_tag_support = __commonJS({
      "node_modules/core-js/internals/to-string-tag-support.js"(exports2, module2) {
        var wellKnownSymbol = require_well_known_symbol();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};
        test[TO_STRING_TAG] = "z";
        module2.exports = String(test) === "[object z]";
      }
    });
  
    // node_modules/core-js/internals/classof.js
    var require_classof = __commonJS({
      "node_modules/core-js/internals/classof.js"(exports2, module2) {
        var global2 = require_global();
        var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
        var isCallable = require_is_callable();
        var classofRaw = require_classof_raw();
        var wellKnownSymbol = require_well_known_symbol();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var Object2 = global2.Object;
        var CORRECT_ARGUMENTS = classofRaw(function() {
          return arguments;
        }()) == "Arguments";
        var tryGet = function(it, key2) {
          try {
            return it[key2];
          } catch (error) {
          }
        };
        module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
          var O, tag, result;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object2(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
        };
      }
    });
  
    // node_modules/core-js/internals/is-constructor.js
    var require_is_constructor = __commonJS({
      "node_modules/core-js/internals/is-constructor.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var fails = require_fails();
        var isCallable = require_is_callable();
        var classof = require_classof();
        var getBuiltIn = require_get_built_in();
        var inspectSource = require_inspect_source();
        var noop = function() {
        };
        var empty = [];
        var construct = getBuiltIn("Reflect", "construct");
        var constructorRegExp = /^\s*(?:class|function)\b/;
        var exec = uncurryThis(constructorRegExp.exec);
        var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
        var isConstructorModern = function(argument) {
          if (!isCallable(argument))
            return false;
          try {
            construct(noop, empty, argument);
            return true;
          } catch (error) {
            return false;
          }
        };
        var isConstructorLegacy = function(argument) {
          if (!isCallable(argument))
            return false;
          switch (classof(argument)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
        };
        module2.exports = !construct || fails(function() {
          var called;
          return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
            called = true;
          }) || called;
        }) ? isConstructorLegacy : isConstructorModern;
      }
    });
  
    // node_modules/core-js/internals/create-property.js
    var require_create_property = __commonJS({
      "node_modules/core-js/internals/create-property.js"(exports2, module2) {
        "use strict";
        var toPropertyKey = require_to_property_key();
        var definePropertyModule = require_object_define_property();
        var createPropertyDescriptor = require_create_property_descriptor();
        module2.exports = function(object, key2, value2) {
          var propertyKey = toPropertyKey(key2);
          if (propertyKey in object)
            definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value2));
          else
            object[propertyKey] = value2;
        };
      }
    });
  
    // node_modules/core-js/internals/get-iterator-method.js
    var require_get_iterator_method = __commonJS({
      "node_modules/core-js/internals/get-iterator-method.js"(exports2, module2) {
        var classof = require_classof();
        var getMethod = require_get_method();
        var Iterators = require_iterators();
        var wellKnownSymbol = require_well_known_symbol();
        var ITERATOR = wellKnownSymbol("iterator");
        module2.exports = function(it) {
          if (it != void 0)
            return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
        };
      }
    });
  
    // node_modules/core-js/internals/get-iterator.js
    var require_get_iterator = __commonJS({
      "node_modules/core-js/internals/get-iterator.js"(exports2, module2) {
        var global2 = require_global();
        var call = require_function_call();
        var aCallable = require_a_callable();
        var anObject = require_an_object();
        var tryToString = require_try_to_string();
        var getIteratorMethod = require_get_iterator_method();
        var TypeError2 = global2.TypeError;
        module2.exports = function(argument, usingIterator) {
          var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
          if (aCallable(iteratorMethod))
            return anObject(call(iteratorMethod, argument));
          throw TypeError2(tryToString(argument) + " is not iterable");
        };
      }
    });
  
    // node_modules/core-js/internals/array-from.js
    var require_array_from = __commonJS({
      "node_modules/core-js/internals/array-from.js"(exports2, module2) {
        "use strict";
        var global2 = require_global();
        var bind = require_function_bind_context();
        var call = require_function_call();
        var toObject = require_to_object();
        var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
        var isArrayIteratorMethod = require_is_array_iterator_method();
        var isConstructor = require_is_constructor();
        var lengthOfArrayLike = require_length_of_array_like();
        var createProperty = require_create_property();
        var getIterator = require_get_iterator();
        var getIteratorMethod = require_get_iterator_method();
        var Array2 = global2.Array;
        module2.exports = function from(arrayLike) {
          var O = toObject(arrayLike);
          var IS_CONSTRUCTOR = isConstructor(this);
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
          var mapping = mapfn !== void 0;
          if (mapping)
            mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
          var iteratorMethod = getIteratorMethod(O);
          var index2 = 0;
          var length2, result, step, iterator, next, value2;
          if (iteratorMethod && !(this == Array2 && isArrayIteratorMethod(iteratorMethod))) {
            iterator = getIterator(O, iteratorMethod);
            next = iterator.next;
            result = IS_CONSTRUCTOR ? new this() : [];
            for (; !(step = call(next, iterator)).done; index2++) {
              value2 = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value;
              createProperty(result, index2, value2);
            }
          } else {
            length2 = lengthOfArrayLike(O);
            result = IS_CONSTRUCTOR ? new this(length2) : Array2(length2);
            for (; length2 > index2; index2++) {
              value2 = mapping ? mapfn(O[index2], index2) : O[index2];
              createProperty(result, index2, value2);
            }
          }
          result.length = index2;
          return result;
        };
      }
    });
  
    // node_modules/core-js/internals/check-correctness-of-iteration.js
    var require_check_correctness_of_iteration = __commonJS({
      "node_modules/core-js/internals/check-correctness-of-iteration.js"(exports2, module2) {
        var wellKnownSymbol = require_well_known_symbol();
        var ITERATOR = wellKnownSymbol("iterator");
        var SAFE_CLOSING = false;
        try {
          called = 0;
          iteratorWithReturn = {
            next: function() {
              return { done: !!called++ };
            },
            "return": function() {
              SAFE_CLOSING = true;
            }
          };
          iteratorWithReturn[ITERATOR] = function() {
            return this;
          };
          Array.from(iteratorWithReturn, function() {
            throw 2;
          });
        } catch (error) {
        }
        var called;
        var iteratorWithReturn;
        module2.exports = function(exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING)
            return false;
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function() {
              return {
                next: function() {
                  return { done: ITERATION_SUPPORT = true };
                }
              };
            };
            exec(object);
          } catch (error) {
          }
          return ITERATION_SUPPORT;
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.from.js
    var require_es_array_from = __commonJS({
      "node_modules/core-js/modules/es.array.from.js"() {
        var $ = require_export();
        var from = require_array_from();
        var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
        var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
          Array.from(iterable);
        });
        $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
          from
        });
      }
    });
  
    // node_modules/core-js/internals/is-array.js
    var require_is_array = __commonJS({
      "node_modules/core-js/internals/is-array.js"(exports2, module2) {
        var classof = require_classof_raw();
        module2.exports = Array.isArray || function isArray(argument) {
          return classof(argument) == "Array";
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.is-array.js
    var require_es_array_is_array = __commonJS({
      "node_modules/core-js/modules/es.array.is-array.js"() {
        var $ = require_export();
        var isArray = require_is_array();
        $({ target: "Array", stat: true }, {
          isArray
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.of.js
    var require_es_array_of = __commonJS({
      "node_modules/core-js/modules/es.array.of.js"() {
        "use strict";
        var $ = require_export();
        var global2 = require_global();
        var fails = require_fails();
        var isConstructor = require_is_constructor();
        var createProperty = require_create_property();
        var Array2 = global2.Array;
        var ISNT_GENERIC = fails(function() {
          function F2() {
          }
          return !(Array2.of.call(F2) instanceof F2);
        });
        $({ target: "Array", stat: true, forced: ISNT_GENERIC }, {
          of: function of() {
            var index2 = 0;
            var argumentsLength = arguments.length;
            var result = new (isConstructor(this) ? this : Array2)(argumentsLength);
            while (argumentsLength > index2)
              createProperty(result, index2, arguments[index2++]);
            result.length = argumentsLength;
            return result;
          }
        });
      }
    });
  
    // node_modules/core-js/internals/object-keys.js
    var require_object_keys = __commonJS({
      "node_modules/core-js/internals/object-keys.js"(exports2, module2) {
        var internalObjectKeys = require_object_keys_internal();
        var enumBugKeys = require_enum_bug_keys();
        module2.exports = Object.keys || function keys(O) {
          return internalObjectKeys(O, enumBugKeys);
        };
      }
    });
  
    // node_modules/core-js/internals/object-define-properties.js
    var require_object_define_properties = __commonJS({
      "node_modules/core-js/internals/object-define-properties.js"(exports2, module2) {
        var DESCRIPTORS = require_descriptors();
        var definePropertyModule = require_object_define_property();
        var anObject = require_an_object();
        var toIndexedObject = require_to_indexed_object();
        var objectKeys = require_object_keys();
        module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var props = toIndexedObject(Properties);
          var keys = objectKeys(Properties);
          var length2 = keys.length;
          var index2 = 0;
          var key2;
          while (length2 > index2)
            definePropertyModule.f(O, key2 = keys[index2++], props[key2]);
          return O;
        };
      }
    });
  
    // node_modules/core-js/internals/html.js
    var require_html = __commonJS({
      "node_modules/core-js/internals/html.js"(exports2, module2) {
        var getBuiltIn = require_get_built_in();
        module2.exports = getBuiltIn("document", "documentElement");
      }
    });
  
    // node_modules/core-js/internals/object-create.js
    var require_object_create = __commonJS({
      "node_modules/core-js/internals/object-create.js"(exports2, module2) {
        var anObject = require_an_object();
        var defineProperties = require_object_define_properties();
        var enumBugKeys = require_enum_bug_keys();
        var hiddenKeys = require_hidden_keys();
        var html = require_html();
        var documentCreateElement = require_document_create_element();
        var sharedKey = require_shared_key();
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {
        };
        var scriptTag = function(content2) {
          return LT + SCRIPT + GT + content2 + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument2) {
          activeXDocument2.write(scriptTag(""));
          activeXDocument2.close();
          var temp = activeXDocument2.parentWindow.Object;
          activeXDocument2 = null;
          return temp;
        };
        var NullProtoObjectViaIFrame = function() {
          var iframe = documentCreateElement("iframe");
          var JS = "java" + SCRIPT + ":";
          var iframeDocument;
          iframe.style.display = "none";
          html.appendChild(iframe);
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          return iframeDocument.F;
        };
        var activeXDocument;
        var NullProtoObject = function() {
          try {
            activeXDocument = new ActiveXObject("htmlfile");
          } catch (error) {
          }
          NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
          var length2 = enumBugKeys.length;
          while (length2--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length2]];
          return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module2.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = NullProtoObject();
          return Properties === void 0 ? result : defineProperties(result, Properties);
        };
      }
    });
  
    // node_modules/core-js/internals/add-to-unscopables.js
    var require_add_to_unscopables = __commonJS({
      "node_modules/core-js/internals/add-to-unscopables.js"(exports2, module2) {
        var wellKnownSymbol = require_well_known_symbol();
        var create = require_object_create();
        var definePropertyModule = require_object_define_property();
        var UNSCOPABLES = wellKnownSymbol("unscopables");
        var ArrayPrototype = Array.prototype;
        if (ArrayPrototype[UNSCOPABLES] == void 0) {
          definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
            configurable: true,
            value: create(null)
          });
        }
        module2.exports = function(key2) {
          ArrayPrototype[UNSCOPABLES][key2] = true;
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.at.js
    var require_es_array_at = __commonJS({
      "node_modules/core-js/modules/es.array.at.js"() {
        "use strict";
        var $ = require_export();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          at: function at(index2) {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            var relativeIndex = toIntegerOrInfinity(index2);
            var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
            return k < 0 || k >= len ? void 0 : O[k];
          }
        });
        addToUnscopables("at");
      }
    });
  
    // node_modules/core-js/internals/array-species-constructor.js
    var require_array_species_constructor = __commonJS({
      "node_modules/core-js/internals/array-species-constructor.js"(exports2, module2) {
        var global2 = require_global();
        var isArray = require_is_array();
        var isConstructor = require_is_constructor();
        var isObject = require_is_object();
        var wellKnownSymbol = require_well_known_symbol();
        var SPECIES = wellKnownSymbol("species");
        var Array2 = global2.Array;
        module2.exports = function(originalArray) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            if (isConstructor(C) && (C === Array2 || isArray(C.prototype)))
              C = void 0;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null)
                C = void 0;
            }
          }
          return C === void 0 ? Array2 : C;
        };
      }
    });
  
    // node_modules/core-js/internals/array-species-create.js
    var require_array_species_create = __commonJS({
      "node_modules/core-js/internals/array-species-create.js"(exports2, module2) {
        var arraySpeciesConstructor = require_array_species_constructor();
        module2.exports = function(originalArray, length2) {
          return new (arraySpeciesConstructor(originalArray))(length2 === 0 ? 0 : length2);
        };
      }
    });
  
    // node_modules/core-js/internals/array-method-has-species-support.js
    var require_array_method_has_species_support = __commonJS({
      "node_modules/core-js/internals/array-method-has-species-support.js"(exports2, module2) {
        var fails = require_fails();
        var wellKnownSymbol = require_well_known_symbol();
        var V8_VERSION = require_engine_v8_version();
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(METHOD_NAME) {
          return V8_VERSION >= 51 || !fails(function() {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES] = function() {
              return { foo: 1 };
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
          });
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.concat.js
    var require_es_array_concat = __commonJS({
      "node_modules/core-js/modules/es.array.concat.js"() {
        "use strict";
        var $ = require_export();
        var global2 = require_global();
        var fails = require_fails();
        var isArray = require_is_array();
        var isObject = require_is_object();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var createProperty = require_create_property();
        var arraySpeciesCreate = require_array_species_create();
        var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
        var wellKnownSymbol = require_well_known_symbol();
        var V8_VERSION = require_engine_v8_version();
        var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
        var TypeError2 = global2.TypeError;
        var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
          var array = [];
          array[IS_CONCAT_SPREADABLE] = false;
          return array.concat()[0] !== array;
        });
        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
        var isConcatSpreadable = function(O) {
          if (!isObject(O))
            return false;
          var spreadable = O[IS_CONCAT_SPREADABLE];
          return spreadable !== void 0 ? !!spreadable : isArray(O);
        };
        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
        $({ target: "Array", proto: true, forced: FORCED }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          concat: function concat(arg) {
            var O = toObject(this);
            var A = arraySpeciesCreate(O, 0);
            var n = 0;
            var i, k, length2, len, E;
            for (i = -1, length2 = arguments.length; i < length2; i++) {
              E = i === -1 ? O : arguments[i];
              if (isConcatSpreadable(E)) {
                len = lengthOfArrayLike(E);
                if (n + len > MAX_SAFE_INTEGER)
                  throw TypeError2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for (k = 0; k < len; k++, n++)
                  if (k in E)
                    createProperty(A, n, E[k]);
              } else {
                if (n >= MAX_SAFE_INTEGER)
                  throw TypeError2(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E);
              }
            }
            A.length = n;
            return A;
          }
        });
      }
    });
  
    // node_modules/core-js/internals/array-copy-within.js
    var require_array_copy_within = __commonJS({
      "node_modules/core-js/internals/array-copy-within.js"(exports2, module2) {
        "use strict";
        var toObject = require_to_object();
        var toAbsoluteIndex = require_to_absolute_index();
        var lengthOfArrayLike = require_length_of_array_like();
        var min = Math.min;
        module2.exports = [].copyWithin || function copyWithin(target, start) {
          var O = toObject(this);
          var len = lengthOfArrayLike(O);
          var to = toAbsoluteIndex(target, len);
          var from = toAbsoluteIndex(start, len);
          var end = arguments.length > 2 ? arguments[2] : void 0;
          var count = min((end === void 0 ? len : toAbsoluteIndex(end, len)) - from, len - to);
          var inc = 1;
          if (from < to && to < from + count) {
            inc = -1;
            from += count - 1;
            to += count - 1;
          }
          while (count-- > 0) {
            if (from in O)
              O[to] = O[from];
            else
              delete O[to];
            to += inc;
            from += inc;
          }
          return O;
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.copy-within.js
    var require_es_array_copy_within = __commonJS({
      "node_modules/core-js/modules/es.array.copy-within.js"() {
        var $ = require_export();
        var copyWithin = require_array_copy_within();
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          copyWithin
        });
        addToUnscopables("copyWithin");
      }
    });
  
    // node_modules/core-js/internals/array-iteration.js
    var require_array_iteration = __commonJS({
      "node_modules/core-js/internals/array-iteration.js"(exports2, module2) {
        var bind = require_function_bind_context();
        var uncurryThis = require_function_uncurry_this();
        var IndexedObject = require_indexed_object();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var arraySpeciesCreate = require_array_species_create();
        var push = uncurryThis([].push);
        var createMethod = function(TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var IS_FILTER_REJECT = TYPE == 7;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self2 = IndexedObject(O);
            var boundFunction = bind(callbackfn, that);
            var length2 = lengthOfArrayLike(self2);
            var index2 = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length2) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
            var value2, result;
            for (; length2 > index2; index2++)
              if (NO_HOLES || index2 in self2) {
                value2 = self2[index2];
                result = boundFunction(value2, index2, O);
                if (TYPE) {
                  if (IS_MAP)
                    target[index2] = result;
                  else if (result)
                    switch (TYPE) {
                      case 3:
                        return true;
                      case 5:
                        return value2;
                      case 6:
                        return index2;
                      case 2:
                        push(target, value2);
                    }
                  else
                    switch (TYPE) {
                      case 4:
                        return false;
                      case 7:
                        push(target, value2);
                    }
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };
        module2.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          forEach: createMethod(0),
          // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          map: createMethod(1),
          // `Array.prototype.filter` method
          // https://tc39.es/ecma262/#sec-array.prototype.filter
          filter: createMethod(2),
          // `Array.prototype.some` method
          // https://tc39.es/ecma262/#sec-array.prototype.some
          some: createMethod(3),
          // `Array.prototype.every` method
          // https://tc39.es/ecma262/#sec-array.prototype.every
          every: createMethod(4),
          // `Array.prototype.find` method
          // https://tc39.es/ecma262/#sec-array.prototype.find
          find: createMethod(5),
          // `Array.prototype.findIndex` method
          // https://tc39.es/ecma262/#sec-array.prototype.findIndex
          findIndex: createMethod(6),
          // `Array.prototype.filterReject` method
          // https://github.com/tc39/proposal-array-filtering
          filterReject: createMethod(7)
        };
      }
    });
  
    // node_modules/core-js/internals/array-method-is-strict.js
    var require_array_method_is_strict = __commonJS({
      "node_modules/core-js/internals/array-method-is-strict.js"(exports2, module2) {
        "use strict";
        var fails = require_fails();
        module2.exports = function(METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return !!method && fails(function() {
            method.call(null, argument || function() {
              throw 1;
            }, 1);
          });
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.every.js
    var require_es_array_every = __commonJS({
      "node_modules/core-js/modules/es.array.every.js"() {
        "use strict";
        var $ = require_export();
        var $every = require_array_iteration().every;
        var arrayMethodIsStrict = require_array_method_is_strict();
        var STRICT_METHOD = arrayMethodIsStrict("every");
        $({ target: "Array", proto: true, forced: !STRICT_METHOD }, {
          every: function every(callbackfn) {
            return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    });
  
    // node_modules/core-js/internals/array-fill.js
    var require_array_fill = __commonJS({
      "node_modules/core-js/internals/array-fill.js"(exports2, module2) {
        "use strict";
        var toObject = require_to_object();
        var toAbsoluteIndex = require_to_absolute_index();
        var lengthOfArrayLike = require_length_of_array_like();
        module2.exports = function fill(value2) {
          var O = toObject(this);
          var length2 = lengthOfArrayLike(O);
          var argumentsLength = arguments.length;
          var index2 = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : void 0, length2);
          var end = argumentsLength > 2 ? arguments[2] : void 0;
          var endPos = end === void 0 ? length2 : toAbsoluteIndex(end, length2);
          while (endPos > index2)
            O[index2++] = value2;
          return O;
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.fill.js
    var require_es_array_fill = __commonJS({
      "node_modules/core-js/modules/es.array.fill.js"() {
        var $ = require_export();
        var fill = require_array_fill();
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          fill
        });
        addToUnscopables("fill");
      }
    });
  
    // node_modules/core-js/modules/es.array.filter.js
    var require_es_array_filter = __commonJS({
      "node_modules/core-js/modules/es.array.filter.js"() {
        "use strict";
        var $ = require_export();
        var $filter = require_array_iteration().filter;
        var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
          filter: function filter(callbackfn) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.find.js
    var require_es_array_find = __commonJS({
      "node_modules/core-js/modules/es.array.find.js"() {
        "use strict";
        var $ = require_export();
        var $find = require_array_iteration().find;
        var addToUnscopables = require_add_to_unscopables();
        var FIND = "find";
        var SKIPS_HOLES = true;
        if (FIND in [])
          Array(1)[FIND](function() {
            SKIPS_HOLES = false;
          });
        $({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
          find: function find(callbackfn) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables(FIND);
      }
    });
  
    // node_modules/core-js/modules/es.array.find-index.js
    var require_es_array_find_index = __commonJS({
      "node_modules/core-js/modules/es.array.find-index.js"() {
        "use strict";
        var $ = require_export();
        var $findIndex = require_array_iteration().findIndex;
        var addToUnscopables = require_add_to_unscopables();
        var FIND_INDEX = "findIndex";
        var SKIPS_HOLES = true;
        if (FIND_INDEX in [])
          Array(1)[FIND_INDEX](function() {
            SKIPS_HOLES = false;
          });
        $({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
          findIndex: function findIndex(callbackfn) {
            return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables(FIND_INDEX);
      }
    });
  
    // node_modules/core-js/internals/flatten-into-array.js
    var require_flatten_into_array = __commonJS({
      "node_modules/core-js/internals/flatten-into-array.js"(exports2, module2) {
        "use strict";
        var global2 = require_global();
        var isArray = require_is_array();
        var lengthOfArrayLike = require_length_of_array_like();
        var bind = require_function_bind_context();
        var TypeError2 = global2.TypeError;
        var flattenIntoArray = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
          var targetIndex = start;
          var sourceIndex = 0;
          var mapFn = mapper ? bind(mapper, thisArg) : false;
          var element, elementLen;
          while (sourceIndex < sourceLen) {
            if (sourceIndex in source) {
              element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
              if (depth > 0 && isArray(element)) {
                elementLen = lengthOfArrayLike(element);
                targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
              } else {
                if (targetIndex >= 9007199254740991)
                  throw TypeError2("Exceed the acceptable array length");
                target[targetIndex] = element;
              }
              targetIndex++;
            }
            sourceIndex++;
          }
          return targetIndex;
        };
        module2.exports = flattenIntoArray;
      }
    });
  
    // node_modules/core-js/modules/es.array.flat.js
    var require_es_array_flat = __commonJS({
      "node_modules/core-js/modules/es.array.flat.js"() {
        "use strict";
        var $ = require_export();
        var flattenIntoArray = require_flatten_into_array();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var arraySpeciesCreate = require_array_species_create();
        $({ target: "Array", proto: true }, {
          flat: function flat() {
            var depthArg = arguments.length ? arguments[0] : void 0;
            var O = toObject(this);
            var sourceLen = lengthOfArrayLike(O);
            var A = arraySpeciesCreate(O, 0);
            A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === void 0 ? 1 : toIntegerOrInfinity(depthArg));
            return A;
          }
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.flat-map.js
    var require_es_array_flat_map = __commonJS({
      "node_modules/core-js/modules/es.array.flat-map.js"() {
        "use strict";
        var $ = require_export();
        var flattenIntoArray = require_flatten_into_array();
        var aCallable = require_a_callable();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var arraySpeciesCreate = require_array_species_create();
        $({ target: "Array", proto: true }, {
          flatMap: function flatMap(callbackfn) {
            var O = toObject(this);
            var sourceLen = lengthOfArrayLike(O);
            var A;
            aCallable(callbackfn);
            A = arraySpeciesCreate(O, 0);
            A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            return A;
          }
        });
      }
    });
  
    // node_modules/core-js/internals/array-for-each.js
    var require_array_for_each = __commonJS({
      "node_modules/core-js/internals/array-for-each.js"(exports2, module2) {
        "use strict";
        var $forEach = require_array_iteration().forEach;
        var arrayMethodIsStrict = require_array_method_is_strict();
        var STRICT_METHOD = arrayMethodIsStrict("forEach");
        module2.exports = !STRICT_METHOD ? function forEach(callbackfn) {
          return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      }
    });
  
    // node_modules/core-js/modules/es.array.for-each.js
    var require_es_array_for_each = __commonJS({
      "node_modules/core-js/modules/es.array.for-each.js"() {
        "use strict";
        var $ = require_export();
        var forEach = require_array_for_each();
        $({ target: "Array", proto: true, forced: [].forEach != forEach }, {
          forEach
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.includes.js
    var require_es_array_includes = __commonJS({
      "node_modules/core-js/modules/es.array.includes.js"() {
        "use strict";
        var $ = require_export();
        var $includes = require_array_includes().includes;
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          includes: function includes(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("includes");
      }
    });
  
    // node_modules/core-js/modules/es.array.index-of.js
    var require_es_array_index_of = __commonJS({
      "node_modules/core-js/modules/es.array.index-of.js"() {
        "use strict";
        var $ = require_export();
        var uncurryThis = require_function_uncurry_this();
        var $IndexOf = require_array_includes().indexOf;
        var arrayMethodIsStrict = require_array_method_is_strict();
        var un$IndexOf = uncurryThis([].indexOf);
        var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict("indexOf");
        $({ target: "Array", proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
          indexOf: function indexOf(searchElement) {
            var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
            return NEGATIVE_ZERO ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
          }
        });
      }
    });
  
    // node_modules/core-js/internals/correct-prototype-getter.js
    var require_correct_prototype_getter = __commonJS({
      "node_modules/core-js/internals/correct-prototype-getter.js"(exports2, module2) {
        var fails = require_fails();
        module2.exports = !fails(function() {
          function F2() {
          }
          F2.prototype.constructor = null;
          return Object.getPrototypeOf(new F2()) !== F2.prototype;
        });
      }
    });
  
    // node_modules/core-js/internals/object-get-prototype-of.js
    var require_object_get_prototype_of = __commonJS({
      "node_modules/core-js/internals/object-get-prototype-of.js"(exports2, module2) {
        var global2 = require_global();
        var hasOwn = require_has_own_property();
        var isCallable = require_is_callable();
        var toObject = require_to_object();
        var sharedKey = require_shared_key();
        var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
        var IE_PROTO = sharedKey("IE_PROTO");
        var Object2 = global2.Object;
        var ObjectPrototype = Object2.prototype;
        module2.exports = CORRECT_PROTOTYPE_GETTER ? Object2.getPrototypeOf : function(O) {
          var object = toObject(O);
          if (hasOwn(object, IE_PROTO))
            return object[IE_PROTO];
          var constructor = object.constructor;
          if (isCallable(constructor) && object instanceof constructor) {
            return constructor.prototype;
          }
          return object instanceof Object2 ? ObjectPrototype : null;
        };
      }
    });
  
    // node_modules/core-js/internals/iterators-core.js
    var require_iterators_core = __commonJS({
      "node_modules/core-js/internals/iterators-core.js"(exports2, module2) {
        "use strict";
        var fails = require_fails();
        var isCallable = require_is_callable();
        var create = require_object_create();
        var getPrototypeOf = require_object_get_prototype_of();
        var redefine = require_redefine();
        var wellKnownSymbol = require_well_known_symbol();
        var IS_PURE = require_is_pure();
        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;
        var IteratorPrototype;
        var PrototypeOfArrayIteratorPrototype;
        var arrayIterator;
        if ([].keys) {
          arrayIterator = [].keys();
          if (!("next" in arrayIterator))
            BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }
        var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == void 0 || fails(function() {
          var test = {};
          return IteratorPrototype[ITERATOR].call(test) !== test;
        });
        if (NEW_ITERATOR_PROTOTYPE)
          IteratorPrototype = {};
        else if (IS_PURE)
          IteratorPrototype = create(IteratorPrototype);
        if (!isCallable(IteratorPrototype[ITERATOR])) {
          redefine(IteratorPrototype, ITERATOR, function() {
            return this;
          });
        }
        module2.exports = {
          IteratorPrototype,
          BUGGY_SAFARI_ITERATORS
        };
      }
    });
  
    // node_modules/core-js/internals/set-to-string-tag.js
    var require_set_to_string_tag = __commonJS({
      "node_modules/core-js/internals/set-to-string-tag.js"(exports2, module2) {
        var defineProperty = require_object_define_property().f;
        var hasOwn = require_has_own_property();
        var wellKnownSymbol = require_well_known_symbol();
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        module2.exports = function(it, TAG, STATIC) {
          if (it && !hasOwn(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
            defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
          }
        };
      }
    });
  
    // node_modules/core-js/internals/create-iterator-constructor.js
    var require_create_iterator_constructor = __commonJS({
      "node_modules/core-js/internals/create-iterator-constructor.js"(exports2, module2) {
        "use strict";
        var IteratorPrototype = require_iterators_core().IteratorPrototype;
        var create = require_object_create();
        var createPropertyDescriptor = require_create_property_descriptor();
        var setToStringTag = require_set_to_string_tag();
        var Iterators = require_iterators();
        var returnThis = function() {
          return this;
        };
        module2.exports = function(IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + " Iterator";
          IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };
      }
    });
  
    // node_modules/core-js/internals/a-possible-prototype.js
    var require_a_possible_prototype = __commonJS({
      "node_modules/core-js/internals/a-possible-prototype.js"(exports2, module2) {
        var global2 = require_global();
        var isCallable = require_is_callable();
        var String2 = global2.String;
        var TypeError2 = global2.TypeError;
        module2.exports = function(argument) {
          if (typeof argument == "object" || isCallable(argument))
            return argument;
          throw TypeError2("Can't set " + String2(argument) + " as a prototype");
        };
      }
    });
  
    // node_modules/core-js/internals/object-set-prototype-of.js
    var require_object_set_prototype_of = __commonJS({
      "node_modules/core-js/internals/object-set-prototype-of.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var anObject = require_an_object();
        var aPossiblePrototype = require_a_possible_prototype();
        module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
            setter(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {
          }
          return function setPrototypeOf(O, proto) {
            anObject(O);
            aPossiblePrototype(proto);
            if (CORRECT_SETTER)
              setter(O, proto);
            else
              O.__proto__ = proto;
            return O;
          };
        }() : void 0);
      }
    });
  
    // node_modules/core-js/internals/define-iterator.js
    var require_define_iterator = __commonJS({
      "node_modules/core-js/internals/define-iterator.js"(exports2, module2) {
        "use strict";
        var $ = require_export();
        var call = require_function_call();
        var IS_PURE = require_is_pure();
        var FunctionName = require_function_name();
        var isCallable = require_is_callable();
        var createIteratorConstructor = require_create_iterator_constructor();
        var getPrototypeOf = require_object_get_prototype_of();
        var setPrototypeOf = require_object_set_prototype_of();
        var setToStringTag = require_set_to_string_tag();
        var createNonEnumerableProperty = require_create_non_enumerable_property();
        var redefine = require_redefine();
        var wellKnownSymbol = require_well_known_symbol();
        var Iterators = require_iterators();
        var IteratorsCore = require_iterators_core();
        var PROPER_FUNCTION_NAME = FunctionName.PROPER;
        var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol("iterator");
        var KEYS = "keys";
        var VALUES = "values";
        var ENTRIES = "entries";
        var returnThis = function() {
          return this;
        };
        module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
          createIteratorConstructor(IteratorConstructor, NAME, next);
          var getIterationMethod = function(KIND) {
            if (KIND === DEFAULT && defaultIterator)
              return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
              return IterablePrototype[KIND];
            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };
              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };
              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }
            return function() {
              return new IteratorConstructor(this);
            };
          };
          var TO_STRING_TAG = NAME + " Iterator";
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
          var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
          var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY;
          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
            if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
              if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                  redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
                }
              }
              setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
              if (IS_PURE)
                Iterators[TO_STRING_TAG] = returnThis;
            }
          }
          if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
              createNonEnumerableProperty(IterablePrototype, "name", VALUES);
            } else {
              INCORRECT_VALUES_NAME = true;
              defaultIterator = function values() {
                return call(nativeIterator, this);
              };
            }
          }
          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES)
            };
            if (FORCED)
              for (KEY in methods) {
                if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
          }
          if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
            redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
          }
          Iterators[NAME] = defaultIterator;
          return methods;
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.iterator.js
    var require_es_array_iterator = __commonJS({
      "node_modules/core-js/modules/es.array.iterator.js"(exports2, module2) {
        "use strict";
        var toIndexedObject = require_to_indexed_object();
        var addToUnscopables = require_add_to_unscopables();
        var Iterators = require_iterators();
        var InternalStateModule = require_internal_state();
        var defineIterator = require_define_iterator();
        var ARRAY_ITERATOR = "Array Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
        module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
          setInternalState(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject(iterated),
            // target
            index: 0,
            // next index
            kind
            // kind
          });
        }, function() {
          var state = getInternalState(this);
          var target = state.target;
          var kind = state.kind;
          var index2 = state.index++;
          if (!target || index2 >= target.length) {
            state.target = void 0;
            return { value: void 0, done: true };
          }
          if (kind == "keys")
            return { value: index2, done: false };
          if (kind == "values")
            return { value: target[index2], done: false };
          return { value: [index2, target[index2]], done: false };
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
      }
    });
  
    // node_modules/core-js/modules/es.array.join.js
    var require_es_array_join = __commonJS({
      "node_modules/core-js/modules/es.array.join.js"() {
        "use strict";
        var $ = require_export();
        var uncurryThis = require_function_uncurry_this();
        var IndexedObject = require_indexed_object();
        var toIndexedObject = require_to_indexed_object();
        var arrayMethodIsStrict = require_array_method_is_strict();
        var un$Join = uncurryThis([].join);
        var ES3_STRINGS = IndexedObject != Object;
        var STRICT_METHOD = arrayMethodIsStrict("join", ",");
        $({ target: "Array", proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
          join: function join(separator) {
            return un$Join(toIndexedObject(this), separator === void 0 ? "," : separator);
          }
        });
      }
    });
  
    // node_modules/core-js/internals/function-apply.js
    var require_function_apply = __commonJS({
      "node_modules/core-js/internals/function-apply.js"(exports2, module2) {
        var FunctionPrototype = Function.prototype;
        var apply = FunctionPrototype.apply;
        var bind = FunctionPrototype.bind;
        var call = FunctionPrototype.call;
        module2.exports = typeof Reflect == "object" && Reflect.apply || (bind ? call.bind(apply) : function() {
          return call.apply(apply, arguments);
        });
      }
    });
  
    // node_modules/core-js/internals/array-last-index-of.js
    var require_array_last_index_of = __commonJS({
      "node_modules/core-js/internals/array-last-index-of.js"(exports2, module2) {
        "use strict";
        var apply = require_function_apply();
        var toIndexedObject = require_to_indexed_object();
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var lengthOfArrayLike = require_length_of_array_like();
        var arrayMethodIsStrict = require_array_method_is_strict();
        var min = Math.min;
        var $lastIndexOf = [].lastIndexOf;
        var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict("lastIndexOf");
        var FORCED = NEGATIVE_ZERO || !STRICT_METHOD;
        module2.exports = FORCED ? function lastIndexOf(searchElement) {
          if (NEGATIVE_ZERO)
            return apply($lastIndexOf, this, arguments) || 0;
          var O = toIndexedObject(this);
          var length2 = lengthOfArrayLike(O);
          var index2 = length2 - 1;
          if (arguments.length > 1)
            index2 = min(index2, toIntegerOrInfinity(arguments[1]));
          if (index2 < 0)
            index2 = length2 + index2;
          for (; index2 >= 0; index2--)
            if (index2 in O && O[index2] === searchElement)
              return index2 || 0;
          return -1;
        } : $lastIndexOf;
      }
    });
  
    // node_modules/core-js/modules/es.array.last-index-of.js
    var require_es_array_last_index_of = __commonJS({
      "node_modules/core-js/modules/es.array.last-index-of.js"() {
        var $ = require_export();
        var lastIndexOf = require_array_last_index_of();
        $({ target: "Array", proto: true, forced: lastIndexOf !== [].lastIndexOf }, {
          lastIndexOf
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.map.js
    var require_es_array_map = __commonJS({
      "node_modules/core-js/modules/es.array.map.js"() {
        "use strict";
        var $ = require_export();
        var $map = require_array_iteration().map;
        var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
          map: function map(callbackfn) {
            return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    });
  
    // node_modules/core-js/internals/array-reduce.js
    var require_array_reduce = __commonJS({
      "node_modules/core-js/internals/array-reduce.js"(exports2, module2) {
        var global2 = require_global();
        var aCallable = require_a_callable();
        var toObject = require_to_object();
        var IndexedObject = require_indexed_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var TypeError2 = global2.TypeError;
        var createMethod = function(IS_RIGHT) {
          return function(that, callbackfn, argumentsLength, memo) {
            aCallable(callbackfn);
            var O = toObject(that);
            var self2 = IndexedObject(O);
            var length2 = lengthOfArrayLike(O);
            var index2 = IS_RIGHT ? length2 - 1 : 0;
            var i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2)
              while (true) {
                if (index2 in self2) {
                  memo = self2[index2];
                  index2 += i;
                  break;
                }
                index2 += i;
                if (IS_RIGHT ? index2 < 0 : length2 <= index2) {
                  throw TypeError2("Reduce of empty array with no initial value");
                }
              }
            for (; IS_RIGHT ? index2 >= 0 : length2 > index2; index2 += i)
              if (index2 in self2) {
                memo = callbackfn(memo, self2[index2], index2, O);
              }
            return memo;
          };
        };
        module2.exports = {
          // `Array.prototype.reduce` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduce
          left: createMethod(false),
          // `Array.prototype.reduceRight` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduceright
          right: createMethod(true)
        };
      }
    });
  
    // node_modules/core-js/internals/engine-is-node.js
    var require_engine_is_node = __commonJS({
      "node_modules/core-js/internals/engine-is-node.js"(exports2, module2) {
        var classof = require_classof_raw();
        var global2 = require_global();
        module2.exports = classof(global2.process) == "process";
      }
    });
  
    // node_modules/core-js/modules/es.array.reduce.js
    var require_es_array_reduce = __commonJS({
      "node_modules/core-js/modules/es.array.reduce.js"() {
        "use strict";
        var $ = require_export();
        var $reduce = require_array_reduce().left;
        var arrayMethodIsStrict = require_array_method_is_strict();
        var CHROME_VERSION = require_engine_v8_version();
        var IS_NODE = require_engine_is_node();
        var STRICT_METHOD = arrayMethodIsStrict("reduce");
        var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
        $({ target: "Array", proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
          reduce: function reduce(callbackfn) {
            var length2 = arguments.length;
            return $reduce(this, callbackfn, length2, length2 > 1 ? arguments[1] : void 0);
          }
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.reduce-right.js
    var require_es_array_reduce_right = __commonJS({
      "node_modules/core-js/modules/es.array.reduce-right.js"() {
        "use strict";
        var $ = require_export();
        var $reduceRight = require_array_reduce().right;
        var arrayMethodIsStrict = require_array_method_is_strict();
        var CHROME_VERSION = require_engine_v8_version();
        var IS_NODE = require_engine_is_node();
        var STRICT_METHOD = arrayMethodIsStrict("reduceRight");
        var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
        $({ target: "Array", proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
          reduceRight: function reduceRight(callbackfn) {
            return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.reverse.js
    var require_es_array_reverse = __commonJS({
      "node_modules/core-js/modules/es.array.reverse.js"() {
        "use strict";
        var $ = require_export();
        var uncurryThis = require_function_uncurry_this();
        var isArray = require_is_array();
        var un$Reverse = uncurryThis([].reverse);
        var test = [1, 2];
        $({ target: "Array", proto: true, forced: String(test) === String(test.reverse()) }, {
          reverse: function reverse() {
            if (isArray(this))
              this.length = this.length;
            return un$Reverse(this);
          }
        });
      }
    });
  
    // node_modules/core-js/internals/array-slice.js
    var require_array_slice = __commonJS({
      "node_modules/core-js/internals/array-slice.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        module2.exports = uncurryThis([].slice);
      }
    });
  
    // node_modules/core-js/modules/es.array.slice.js
    var require_es_array_slice = __commonJS({
      "node_modules/core-js/modules/es.array.slice.js"() {
        "use strict";
        var $ = require_export();
        var global2 = require_global();
        var isArray = require_is_array();
        var isConstructor = require_is_constructor();
        var isObject = require_is_object();
        var toAbsoluteIndex = require_to_absolute_index();
        var lengthOfArrayLike = require_length_of_array_like();
        var toIndexedObject = require_to_indexed_object();
        var createProperty = require_create_property();
        var wellKnownSymbol = require_well_known_symbol();
        var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
        var un$Slice = require_array_slice();
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
        var SPECIES = wellKnownSymbol("species");
        var Array2 = global2.Array;
        var max = Math.max;
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
          slice: function slice(start, end) {
            var O = toIndexedObject(this);
            var length2 = lengthOfArrayLike(O);
            var k = toAbsoluteIndex(start, length2);
            var fin = toAbsoluteIndex(end === void 0 ? length2 : end, length2);
            var Constructor, result, n;
            if (isArray(O)) {
              Constructor = O.constructor;
              if (isConstructor(Constructor) && (Constructor === Array2 || isArray(Constructor.prototype))) {
                Constructor = void 0;
              } else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null)
                  Constructor = void 0;
              }
              if (Constructor === Array2 || Constructor === void 0) {
                return un$Slice(O, k, fin);
              }
            }
            result = new (Constructor === void 0 ? Array2 : Constructor)(max(fin - k, 0));
            for (n = 0; k < fin; k++, n++)
              if (k in O)
                createProperty(result, n, O[k]);
            result.length = n;
            return result;
          }
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.some.js
    var require_es_array_some = __commonJS({
      "node_modules/core-js/modules/es.array.some.js"() {
        "use strict";
        var $ = require_export();
        var $some = require_array_iteration().some;
        var arrayMethodIsStrict = require_array_method_is_strict();
        var STRICT_METHOD = arrayMethodIsStrict("some");
        $({ target: "Array", proto: true, forced: !STRICT_METHOD }, {
          some: function some(callbackfn) {
            return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    });
  
    // node_modules/core-js/internals/to-string.js
    var require_to_string = __commonJS({
      "node_modules/core-js/internals/to-string.js"(exports2, module2) {
        var global2 = require_global();
        var classof = require_classof();
        var String2 = global2.String;
        module2.exports = function(argument) {
          if (classof(argument) === "Symbol")
            throw TypeError("Cannot convert a Symbol value to a string");
          return String2(argument);
        };
      }
    });
  
    // node_modules/core-js/internals/array-sort.js
    var require_array_sort = __commonJS({
      "node_modules/core-js/internals/array-sort.js"(exports2, module2) {
        var arraySlice = require_array_slice();
        var floor = Math.floor;
        var mergeSort = function(array, comparefn) {
          var length2 = array.length;
          var middle = floor(length2 / 2);
          return length2 < 8 ? insertionSort(array, comparefn) : merge(
            array,
            mergeSort(arraySlice(array, 0, middle), comparefn),
            mergeSort(arraySlice(array, middle), comparefn),
            comparefn
          );
        };
        var insertionSort = function(array, comparefn) {
          var length2 = array.length;
          var i = 1;
          var element, j;
          while (i < length2) {
            j = i;
            element = array[i];
            while (j && comparefn(array[j - 1], element) > 0) {
              array[j] = array[--j];
            }
            if (j !== i++)
              array[j] = element;
          }
          return array;
        };
        var merge = function(array, left, right, comparefn) {
          var llength = left.length;
          var rlength = right.length;
          var lindex = 0;
          var rindex = 0;
          while (lindex < llength || rindex < rlength) {
            array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
          }
          return array;
        };
        module2.exports = mergeSort;
      }
    });
  
    // node_modules/core-js/internals/engine-ff-version.js
    var require_engine_ff_version = __commonJS({
      "node_modules/core-js/internals/engine-ff-version.js"(exports2, module2) {
        var userAgent = require_engine_user_agent();
        var firefox = userAgent.match(/firefox\/(\d+)/i);
        module2.exports = !!firefox && +firefox[1];
      }
    });
  
    // node_modules/core-js/internals/engine-is-ie-or-edge.js
    var require_engine_is_ie_or_edge = __commonJS({
      "node_modules/core-js/internals/engine-is-ie-or-edge.js"(exports2, module2) {
        var UA = require_engine_user_agent();
        module2.exports = /MSIE|Trident/.test(UA);
      }
    });
  
    // node_modules/core-js/internals/engine-webkit-version.js
    var require_engine_webkit_version = __commonJS({
      "node_modules/core-js/internals/engine-webkit-version.js"(exports2, module2) {
        var userAgent = require_engine_user_agent();
        var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
        module2.exports = !!webkit && +webkit[1];
      }
    });
  
    // node_modules/core-js/modules/es.array.sort.js
    var require_es_array_sort = __commonJS({
      "node_modules/core-js/modules/es.array.sort.js"() {
        "use strict";
        var $ = require_export();
        var uncurryThis = require_function_uncurry_this();
        var aCallable = require_a_callable();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var toString = require_to_string();
        var fails = require_fails();
        var internalSort = require_array_sort();
        var arrayMethodIsStrict = require_array_method_is_strict();
        var FF = require_engine_ff_version();
        var IE_OR_EDGE = require_engine_is_ie_or_edge();
        var V8 = require_engine_v8_version();
        var WEBKIT = require_engine_webkit_version();
        var test = [];
        var un$Sort = uncurryThis(test.sort);
        var push = uncurryThis(test.push);
        var FAILS_ON_UNDEFINED = fails(function() {
          test.sort(void 0);
        });
        var FAILS_ON_NULL = fails(function() {
          test.sort(null);
        });
        var STRICT_METHOD = arrayMethodIsStrict("sort");
        var STABLE_SORT = !fails(function() {
          if (V8)
            return V8 < 70;
          if (FF && FF > 3)
            return;
          if (IE_OR_EDGE)
            return true;
          if (WEBKIT)
            return WEBKIT < 603;
          var result = "";
          var code, chr, value2, index2;
          for (code = 65; code < 76; code++) {
            chr = String.fromCharCode(code);
            switch (code) {
              case 66:
              case 69:
              case 70:
              case 72:
                value2 = 3;
                break;
              case 68:
              case 71:
                value2 = 4;
                break;
              default:
                value2 = 2;
            }
            for (index2 = 0; index2 < 47; index2++) {
              test.push({ k: chr + index2, v: value2 });
            }
          }
          test.sort(function(a, b) {
            return b.v - a.v;
          });
          for (index2 = 0; index2 < test.length; index2++) {
            chr = test[index2].k.charAt(0);
            if (result.charAt(result.length - 1) !== chr)
              result += chr;
          }
          return result !== "DGBEFHACIJK";
        });
        var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
        var getSortCompare = function(comparefn) {
          return function(x, y) {
            if (y === void 0)
              return -1;
            if (x === void 0)
              return 1;
            if (comparefn !== void 0)
              return +comparefn(x, y) || 0;
            return toString(x) > toString(y) ? 1 : -1;
          };
        };
        $({ target: "Array", proto: true, forced: FORCED }, {
          sort: function sort(comparefn) {
            if (comparefn !== void 0)
              aCallable(comparefn);
            var array = toObject(this);
            if (STABLE_SORT)
              return comparefn === void 0 ? un$Sort(array) : un$Sort(array, comparefn);
            var items = [];
            var arrayLength = lengthOfArrayLike(array);
            var itemsLength, index2;
            for (index2 = 0; index2 < arrayLength; index2++) {
              if (index2 in array)
                push(items, array[index2]);
            }
            internalSort(items, getSortCompare(comparefn));
            itemsLength = items.length;
            index2 = 0;
            while (index2 < itemsLength)
              array[index2] = items[index2++];
            while (index2 < arrayLength)
              delete array[index2++];
            return array;
          }
        });
      }
    });
  
    // node_modules/core-js/internals/set-species.js
    var require_set_species = __commonJS({
      "node_modules/core-js/internals/set-species.js"(exports2, module2) {
        "use strict";
        var getBuiltIn = require_get_built_in();
        var definePropertyModule = require_object_define_property();
        var wellKnownSymbol = require_well_known_symbol();
        var DESCRIPTORS = require_descriptors();
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
          var defineProperty = definePropertyModule.f;
          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineProperty(Constructor, SPECIES, {
              configurable: true,
              get: function() {
                return this;
              }
            });
          }
        };
      }
    });
  
    // node_modules/core-js/modules/es.array.species.js
    var require_es_array_species = __commonJS({
      "node_modules/core-js/modules/es.array.species.js"() {
        var setSpecies = require_set_species();
        setSpecies("Array");
      }
    });
  
    // node_modules/core-js/modules/es.array.splice.js
    var require_es_array_splice = __commonJS({
      "node_modules/core-js/modules/es.array.splice.js"() {
        "use strict";
        var $ = require_export();
        var global2 = require_global();
        var toAbsoluteIndex = require_to_absolute_index();
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var lengthOfArrayLike = require_length_of_array_like();
        var toObject = require_to_object();
        var arraySpeciesCreate = require_array_species_create();
        var createProperty = require_create_property();
        var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
        var TypeError2 = global2.TypeError;
        var max = Math.max;
        var min = Math.min;
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
          splice: function splice(start, deleteCount) {
            var O = toObject(this);
            var len = lengthOfArrayLike(O);
            var actualStart = toAbsoluteIndex(start, len);
            var argumentsLength = arguments.length;
            var insertCount, actualDeleteCount, A, k, from, to;
            if (argumentsLength === 0) {
              insertCount = actualDeleteCount = 0;
            } else if (argumentsLength === 1) {
              insertCount = 0;
              actualDeleteCount = len - actualStart;
            } else {
              insertCount = argumentsLength - 2;
              actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
            }
            if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
              throw TypeError2(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
            }
            A = arraySpeciesCreate(O, actualDeleteCount);
            for (k = 0; k < actualDeleteCount; k++) {
              from = actualStart + k;
              if (from in O)
                createProperty(A, k, O[from]);
            }
            A.length = actualDeleteCount;
            if (insertCount < actualDeleteCount) {
              for (k = actualStart; k < len - actualDeleteCount; k++) {
                from = k + actualDeleteCount;
                to = k + insertCount;
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
              }
              for (k = len; k > len - actualDeleteCount + insertCount; k--)
                delete O[k - 1];
            } else if (insertCount > actualDeleteCount) {
              for (k = len - actualDeleteCount; k > actualStart; k--) {
                from = k + actualDeleteCount - 1;
                to = k + insertCount - 1;
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
              }
            }
            for (k = 0; k < insertCount; k++) {
              O[k + actualStart] = arguments[k + 2];
            }
            O.length = len - actualDeleteCount + insertCount;
            return A;
          }
        });
      }
    });
  
    // node_modules/core-js/modules/es.array.unscopables.flat.js
    var require_es_array_unscopables_flat = __commonJS({
      "node_modules/core-js/modules/es.array.unscopables.flat.js"() {
        var addToUnscopables = require_add_to_unscopables();
        addToUnscopables("flat");
      }
    });
  
    // node_modules/core-js/modules/es.array.unscopables.flat-map.js
    var require_es_array_unscopables_flat_map = __commonJS({
      "node_modules/core-js/modules/es.array.unscopables.flat-map.js"() {
        var addToUnscopables = require_add_to_unscopables();
        addToUnscopables("flatMap");
      }
    });
  
    // node_modules/core-js/internals/object-to-string.js
    var require_object_to_string = __commonJS({
      "node_modules/core-js/internals/object-to-string.js"(exports2, module2) {
        "use strict";
        var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
        var classof = require_classof();
        module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
          return "[object " + classof(this) + "]";
        };
      }
    });
  
    // node_modules/core-js/modules/es.object.to-string.js
    var require_es_object_to_string = __commonJS({
      "node_modules/core-js/modules/es.object.to-string.js"() {
        var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
        var redefine = require_redefine();
        var toString = require_object_to_string();
        if (!TO_STRING_TAG_SUPPORT) {
          redefine(Object.prototype, "toString", toString, { unsafe: true });
        }
      }
    });
  
    // node_modules/core-js/internals/string-multibyte.js
    var require_string_multibyte = __commonJS({
      "node_modules/core-js/internals/string-multibyte.js"(exports2, module2) {
        var uncurryThis = require_function_uncurry_this();
        var toIntegerOrInfinity = require_to_integer_or_infinity();
        var toString = require_to_string();
        var requireObjectCoercible = require_require_object_coercible();
        var charAt = uncurryThis("".charAt);
        var charCodeAt = uncurryThis("".charCodeAt);
        var stringSlice = uncurryThis("".slice);
        var createMethod = function(CONVERT_TO_STRING) {
          return function($this, pos) {
            var S = toString(requireObjectCoercible($this));
            var position2 = toIntegerOrInfinity(pos);
            var size = S.length;
            var first, second;
            if (position2 < 0 || position2 >= size)
              return CONVERT_TO_STRING ? "" : void 0;
            first = charCodeAt(S, position2);
            return first < 55296 || first > 56319 || position2 + 1 === size || (second = charCodeAt(S, position2 + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position2) : first : CONVERT_TO_STRING ? stringSlice(S, position2, position2 + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
          };
        };
        module2.exports = {
          // `String.prototype.codePointAt` method
          // https://tc39.es/ecma262/#sec-string.prototype.codepointat
          codeAt: createMethod(false),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: createMethod(true)
        };
      }
    });
  
    // node_modules/core-js/modules/es.string.iterator.js
    var require_es_string_iterator = __commonJS({
      "node_modules/core-js/modules/es.string.iterator.js"() {
        "use strict";
        var charAt = require_string_multibyte().charAt;
        var toString = require_to_string();
        var InternalStateModule = require_internal_state();
        var defineIterator = require_define_iterator();
        var STRING_ITERATOR = "String Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
        defineIterator(String, "String", function(iterated) {
          setInternalState(this, {
            type: STRING_ITERATOR,
            string: toString(iterated),
            index: 0
          });
        }, function next() {
          var state = getInternalState(this);
          var string = state.string;
          var index2 = state.index;
          var point;
          if (index2 >= string.length)
            return { value: void 0, done: true };
          point = charAt(string, index2);
          state.index += point.length;
          return { value: point, done: false };
        });
      }
    });
  
    // node_modules/core-js/internals/path.js
    var require_path = __commonJS({
      "node_modules/core-js/internals/path.js"(exports2, module2) {
        var global2 = require_global();
        module2.exports = global2;
      }
    });
  
    // node_modules/core-js/es/array/index.js
    var require_array = __commonJS({
      "node_modules/core-js/es/array/index.js"(exports2, module2) {
        require_es_array_from();
        require_es_array_is_array();
        require_es_array_of();
        require_es_array_at();
        require_es_array_concat();
        require_es_array_copy_within();
        require_es_array_every();
        require_es_array_fill();
        require_es_array_filter();
        require_es_array_find();
        require_es_array_find_index();
        require_es_array_flat();
        require_es_array_flat_map();
        require_es_array_for_each();
        require_es_array_includes();
        require_es_array_index_of();
        require_es_array_iterator();
        require_es_array_join();
        require_es_array_last_index_of();
        require_es_array_map();
        require_es_array_reduce();
        require_es_array_reduce_right();
        require_es_array_reverse();
        require_es_array_slice();
        require_es_array_some();
        require_es_array_sort();
        require_es_array_species();
        require_es_array_splice();
        require_es_array_unscopables_flat();
        require_es_array_unscopables_flat_map();
        require_es_object_to_string();
        require_es_string_iterator();
        var path = require_path();
        module2.exports = path.Array;
      }
    });
  
    // node_modules/core-js/stable/array/index.js
    var require_array2 = __commonJS({
      "node_modules/core-js/stable/array/index.js"(exports2, module2) {
        var parent2 = require_array();
        module2.exports = parent2;
      }
    });
  
    // node_modules/core-js/internals/object-get-own-property-names-external.js
    var require_object_get_own_property_names_external = __commonJS({
      "node_modules/core-js/internals/object-get-own-property-names-external.js"(exports2, module2) {
        var classof = require_classof_raw();
        var toIndexedObject = require_to_indexed_object();
        var $getOwnPropertyNames = require_object_get_own_property_names().f;
        var arraySlice = require_array_slice();
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
          try {
            return $getOwnPropertyNames(it);
          } catch (error) {
            return arraySlice(windowNames);
          }
        };
        module2.exports.f = function getOwnPropertyNames(it) {
          return windowNames && classof(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
        };
      }
    });
  
    // node_modules/core-js/internals/freezing.js
    var require_freezing = __commonJS({
      "node_modules/core-js/internals/freezing.js"(exports2, module2) {
        var fails = require_fails();
        module2.exports = !fails(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      }
    });
  
    // node_modules/core-js/internals/internal-metadata.js
    var require_internal_metadata = __commonJS({
      "node_modules/core-js/internals/internal-metadata.js"(exports2, module2) {
        var $ = require_export();
        var uncurryThis = require_function_uncurry_this();
        var hiddenKeys = require_hidden_keys();
        var isObject = require_is_object();
        var hasOwn = require_has_own_property();
        var defineProperty = require_object_define_property().f;
        var getOwnPropertyNamesModule = require_object_get_own_property_names();
        var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
        var uid = require_uid();
        var FREEZING = require_freezing();
        var REQUIRED = false;
        var METADATA = uid("meta");
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
          return true;
        };
        var setMetadata = function(it) {
          defineProperty(it, METADATA, { value: {
            objectID: "O" + id++,
            // object ID
            weakData: {}
            // weak collections IDs
          } });
        };
        var fastKey = function(it, create) {
          if (!isObject(it))
            return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
          if (!hasOwn(it, METADATA)) {
            if (!isExtensible(it))
              return "F";
            if (!create)
              return "E";
            setMetadata(it);
          }
          return it[METADATA].objectID;
        };
        var getWeakData = function(it, create) {
          if (!hasOwn(it, METADATA)) {
            if (!isExtensible(it))
              return true;
            if (!create)
              return false;
            setMetadata(it);
          }
          return it[METADATA].weakData;
        };
        var onFreeze = function(it) {
          if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA))
            setMetadata(it);
          return it;
        };
        var enable = function() {
          meta.enable = function() {
          };
          REQUIRED = true;
          var getOwnPropertyNames = getOwnPropertyNamesModule.f;
          var splice = uncurryThis([].splice);
          var test = {};
          test[METADATA] = 1;
          if (getOwnPropertyNames(test).length) {
            getOwnPropertyNamesModule.f = function(it) {
              var result = getOwnPropertyNames(it);
              for (var i = 0, length2 = result.length; i < length2; i++) {
                if (result[i] === METADATA) {
                  splice(result, i, 1);
                  break;
                }
              }
              return result;
            };
            $({ target: "Object", stat: true, forced: true }, {
              getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
            });
          }
        };
        var meta = module2.exports = {
          enable,
          fastKey,
          getWeakData,
          onFreeze
        };
        hiddenKeys[METADATA] = true;
      }
    });
  
    // node_modules/core-js/internals/iterate.js
    var require_iterate = __commonJS({
      "node_modules/core-js/internals/iterate.js"(exports2, module2) {
        var global2 = require_global();
        var bind = require_function_bind_context();
        var call = require_function_call();
        var anObject = require_an_object();
        var tryToString = require_try_to_string();
        var isArrayIteratorMethod = require_is_array_iterator_method();
        var lengthOfArrayLike = require_length_of_array_like();
        var isPrototypeOf = require_object_is_prototype_of();
        var getIterator = require_get_iterator();
        var getIteratorMethod = require_get_iterator_method();
        var iteratorClose = require_iterator_close();
        var TypeError2 = global2.TypeError;
        var Result = function(stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };
        var ResultPrototype = Result.prototype;
        module2.exports = function(iterable, unboundFunction, options) {
          var that = options && options.that;
          var AS_ENTRIES = !!(options && options.AS_ENTRIES);
          var IS_ITERATOR = !!(options && options.IS_ITERATOR);
          var INTERRUPTED = !!(options && options.INTERRUPTED);
          var fn = bind(unboundFunction, that);
          var iterator, iterFn, index2, length2, result, next, step;
          var stop = function(condition) {
            if (iterator)
              iteratorClose(iterator, "normal", condition);
            return new Result(true, condition);
          };
          var callFn = function(value2) {
            if (AS_ENTRIES) {
              anObject(value2);
              return INTERRUPTED ? fn(value2[0], value2[1], stop) : fn(value2[0], value2[1]);
            }
            return INTERRUPTED ? fn(value2, stop) : fn(value2);
          };
          if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (!iterFn)
              throw TypeError2(tryToString(iterable) + " is not iterable");
            if (isArrayIteratorMethod(iterFn)) {
              for (index2 = 0, length2 = lengthOfArrayLike(iterable); length2 > index2; index2++) {
                result = callFn(iterable[index2]);
                if (result && isPrototypeOf(ResultPrototype, result))
                  return result;
              }
              return new Result(false);
            }
            iterator = getIterator(iterable, iterFn);
          }
          next = iterator.next;
          while (!(step = call(next, iterator)).done) {
            try {
              result = callFn(step.value);
            } catch (error) {
              iteratorClose(iterator, "throw", error);
            }
            if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
              return result;
          }
          return new Result(false);
        };
      }
    });
  
    // node_modules/core-js/internals/an-instance.js
    var require_an_instance = __commonJS({
      "node_modules/core-js/internals/an-instance.js"(exports2, module2) {
        var global2 = require_global();
        var isPrototypeOf = require_object_is_prototype_of();
        var TypeError2 = global2.TypeError;
        module2.exports = function(it, Prototype) {
          if (isPrototypeOf(Prototype, it))
            return it;
          throw TypeError2("Incorrect invocation");
        };
      }
    });
  
    // node_modules/core-js/internals/inherit-if-required.js
    var require_inherit_if_required = __commonJS({
      "node_modules/core-js/internals/inherit-if-required.js"(exports2, module2) {
        var isCallable = require_is_callable();
        var isObject = require_is_object();
        var setPrototypeOf = require_object_set_prototype_of();
        module2.exports = function($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (
            // it can work only with native `setPrototypeOf`
            setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
          )
            setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };
      }
    });
  
    // node_modules/core-js/internals/collection.js
    var require_collection = __commonJS({
      "node_modules/core-js/internals/collection.js"(exports2, module2) {
        "use strict";
        var $ = require_export();
        var global2 = require_global();
        var uncurryThis = require_function_uncurry_this();
        var isForced = require_is_forced();
        var redefine = require_redefine();
        var InternalMetadataModule = require_internal_metadata();
        var iterate = require_iterate();
        var anInstance = require_an_instance();
        var isCallable = require_is_callable();
        var isObject = require_is_object();
        var fails = require_fails();
        var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
        var setToStringTag = require_set_to_string_tag();
        var inheritIfRequired = require_inherit_if_required();
        module2.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
          var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
          var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
          var ADDER = IS_MAP ? "set" : "add";
          var NativeConstructor = global2[CONSTRUCTOR_NAME];
          var NativePrototype = NativeConstructor && NativeConstructor.prototype;
          var Constructor = NativeConstructor;
          var exported = {};
          var fixMethod = function(KEY) {
            var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
            redefine(
              NativePrototype,
              KEY,
              KEY == "add" ? function add2(value2) {
                uncurriedNativeMethod(this, value2 === 0 ? 0 : value2);
                return this;
              } : KEY == "delete" ? function(key2) {
                return IS_WEAK && !isObject(key2) ? false : uncurriedNativeMethod(this, key2 === 0 ? 0 : key2);
              } : KEY == "get" ? function get(key2) {
                return IS_WEAK && !isObject(key2) ? void 0 : uncurriedNativeMethod(this, key2 === 0 ? 0 : key2);
              } : KEY == "has" ? function has(key2) {
                return IS_WEAK && !isObject(key2) ? false : uncurriedNativeMethod(this, key2 === 0 ? 0 : key2);
              } : function set(key2, value2) {
                uncurriedNativeMethod(this, key2 === 0 ? 0 : key2, value2);
                return this;
              }
            );
          };
          var REPLACE = isForced(
            CONSTRUCTOR_NAME,
            !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
              new NativeConstructor().entries().next();
            }))
          );
          if (REPLACE) {
            Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
            InternalMetadataModule.enable();
          } else if (isForced(CONSTRUCTOR_NAME, true)) {
            var instance = new Constructor();
            var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
            var THROWS_ON_PRIMITIVES = fails(function() {
              instance.has(1);
            });
            var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
              new NativeConstructor(iterable);
            });
            var BUGGY_ZERO = !IS_WEAK && fails(function() {
              var $instance = new NativeConstructor();
              var index2 = 5;
              while (index2--)
                $instance[ADDER](index2, index2);
              return !$instance.has(-0);
            });
            if (!ACCEPT_ITERABLES) {
              Constructor = wrapper(function(dummy, iterable) {
                anInstance(dummy, NativePrototype);
                var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
                if (iterable != void 0)
                  iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
                return that;
              });
              Constructor.prototype = NativePrototype;
              NativePrototype.constructor = Constructor;
            }
            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
              fixMethod("delete");
              fixMethod("has");
              IS_MAP && fixMethod("get");
            }
            if (BUGGY_ZERO || HASNT_CHAINING)
              fixMethod(ADDER);
            if (IS_WEAK && NativePrototype.clear)
              delete NativePrototype.clear;
          }
          exported[CONSTRUCTOR_NAME] = Constructor;
          $({ global: true, forced: Constructor != NativeConstructor }, exported);
          setToStringTag(Constructor, CONSTRUCTOR_NAME);
          if (!IS_WEAK)
            common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
          return Constructor;
        };
      }
    });
  
    // node_modules/core-js/internals/redefine-all.js
    var require_redefine_all = __commonJS({
      "node_modules/core-js/internals/redefine-all.js"(exports2, module2) {
        var redefine = require_redefine();
        module2.exports = function(target, src, options) {
          for (var key2 in src)
            redefine(target, key2, src[key2], options);
          return target;
        };
      }
    });
  
    // node_modules/core-js/internals/collection-strong.js
    var require_collection_strong = __commonJS({
      "node_modules/core-js/internals/collection-strong.js"(exports2, module2) {
        "use strict";
        var defineProperty = require_object_define_property().f;
        var create = require_object_create();
        var redefineAll = require_redefine_all();
        var bind = require_function_bind_context();
        var anInstance = require_an_instance();
        var iterate = require_iterate();
        var defineIterator = require_define_iterator();
        var setSpecies = require_set_species();
        var DESCRIPTORS = require_descriptors();
        var fastKey = require_internal_metadata().fastKey;
        var InternalStateModule = require_internal_state();
        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        module2.exports = {
          getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var Constructor = wrapper(function(that, iterable) {
              anInstance(that, Prototype);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: void 0,
                last: void 0,
                size: 0
              });
              if (!DESCRIPTORS)
                that.size = 0;
              if (iterable != void 0)
                iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
            });
            var Prototype = Constructor.prototype;
            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var define2 = function(that, key2, value2) {
              var state = getInternalState(that);
              var entry = getEntry(that, key2);
              var previous, index2;
              if (entry) {
                entry.value = value2;
              } else {
                state.last = entry = {
                  index: index2 = fastKey(key2, true),
                  key: key2,
                  value: value2,
                  previous: previous = state.last,
                  next: void 0,
                  removed: false
                };
                if (!state.first)
                  state.first = entry;
                if (previous)
                  previous.next = entry;
                if (DESCRIPTORS)
                  state.size++;
                else
                  that.size++;
                if (index2 !== "F")
                  state.index[index2] = entry;
              }
              return that;
            };
            var getEntry = function(that, key2) {
              var state = getInternalState(that);
              var index2 = fastKey(key2);
              var entry;
              if (index2 !== "F")
                return state.index[index2];
              for (entry = state.first; entry; entry = entry.next) {
                if (entry.key == key2)
                  return entry;
              }
            };
            redefineAll(Prototype, {
              // `{ Map, Set }.prototype.clear()` methods
              // https://tc39.es/ecma262/#sec-map.prototype.clear
              // https://tc39.es/ecma262/#sec-set.prototype.clear
              clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data2 = state.index;
                var entry = state.first;
                while (entry) {
                  entry.removed = true;
                  if (entry.previous)
                    entry.previous = entry.previous.next = void 0;
                  delete data2[entry.index];
                  entry = entry.next;
                }
                state.first = state.last = void 0;
                if (DESCRIPTORS)
                  state.size = 0;
                else
                  that.size = 0;
              },
              // `{ Map, Set }.prototype.delete(key)` methods
              // https://tc39.es/ecma262/#sec-map.prototype.delete
              // https://tc39.es/ecma262/#sec-set.prototype.delete
              "delete": function(key2) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key2);
                if (entry) {
                  var next = entry.next;
                  var prev = entry.previous;
                  delete state.index[entry.index];
                  entry.removed = true;
                  if (prev)
                    prev.next = next;
                  if (next)
                    next.previous = prev;
                  if (state.first == entry)
                    state.first = next;
                  if (state.last == entry)
                    state.last = prev;
                  if (DESCRIPTORS)
                    state.size--;
                  else
                    that.size--;
                }
                return !!entry;
              },
              // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
              // https://tc39.es/ecma262/#sec-map.prototype.foreach
              // https://tc39.es/ecma262/#sec-set.prototype.foreach
              forEach: function forEach(callbackfn) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
                var entry;
                while (entry = entry ? entry.next : state.first) {
                  boundFunction(entry.value, entry.key, this);
                  while (entry && entry.removed)
                    entry = entry.previous;
                }
              },
              // `{ Map, Set}.prototype.has(key)` methods
              // https://tc39.es/ecma262/#sec-map.prototype.has
              // https://tc39.es/ecma262/#sec-set.prototype.has
              has: function has(key2) {
                return !!getEntry(this, key2);
              }
            });
            redefineAll(Prototype, IS_MAP ? {
              // `Map.prototype.get(key)` method
              // https://tc39.es/ecma262/#sec-map.prototype.get
              get: function get(key2) {
                var entry = getEntry(this, key2);
                return entry && entry.value;
              },
              // `Map.prototype.set(key, value)` method
              // https://tc39.es/ecma262/#sec-map.prototype.set
              set: function set(key2, value2) {
                return define2(this, key2 === 0 ? 0 : key2, value2);
              }
            } : {
              // `Set.prototype.add(value)` method
              // https://tc39.es/ecma262/#sec-set.prototype.add
              add: function add2(value2) {
                return define2(this, value2 = value2 === 0 ? 0 : value2, value2);
              }
            });
            if (DESCRIPTORS)
              defineProperty(Prototype, "size", {
                get: function() {
                  return getInternalState(this).size;
                }
              });
            return Constructor;
          },
          setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
            var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
            var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
            defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
              setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind,
                last: void 0
              });
            }, function() {
              var state = getInternalIteratorState(this);
              var kind = state.kind;
              var entry = state.last;
              while (entry && entry.removed)
                entry = entry.previous;
              if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                state.target = void 0;
                return { value: void 0, done: true };
              }
              if (kind == "keys")
                return { value: entry.key, done: false };
              if (kind == "values")
                return { value: entry.value, done: false };
              return { value: [entry.key, entry.value], done: false };
            }, IS_MAP ? "entries" : "values", !IS_MAP, true);
            setSpecies(CONSTRUCTOR_NAME);
          }
        };
      }
    });
  
    // node_modules/core-js/modules/es.map.js
    var require_es_map = __commonJS({
      "node_modules/core-js/modules/es.map.js"() {
        "use strict";
        var collection = require_collection();
        var collectionStrong = require_collection_strong();
        collection("Map", function(init) {
          return function Map() {
            return init(this, arguments.length ? arguments[0] : void 0);
          };
        }, collectionStrong);
      }
    });
  
    // node_modules/core-js/internals/native-promise-constructor.js
    var require_native_promise_constructor = __commonJS({
      "node_modules/core-js/internals/native-promise-constructor.js"(exports2, module2) {
        var global2 = require_global();
        module2.exports = global2.Promise;
      }
    });
  
    // node_modules/core-js/internals/a-constructor.js
    var require_a_constructor = __commonJS({
      "node_modules/core-js/internals/a-constructor.js"(exports2, module2) {
        var global2 = require_global();
        var isConstructor = require_is_constructor();
        var tryToString = require_try_to_string();
        var TypeError2 = global2.TypeError;
        module2.exports = function(argument) {
          if (isConstructor(argument))
            return argument;
          throw TypeError2(tryToString(argument) + " is not a constructor");
        };
      }
    });
  
    // node_modules/core-js/internals/species-constructor.js
    var require_species_constructor = __commonJS({
      "node_modules/core-js/internals/species-constructor.js"(exports2, module2) {
        var anObject = require_an_object();
        var aConstructor = require_a_constructor();
        var wellKnownSymbol = require_well_known_symbol();
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(O, defaultConstructor) {
          var C = anObject(O).constructor;
          var S;
          return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? defaultConstructor : aConstructor(S);
        };
      }
    });
  
    // node_modules/core-js/internals/engine-is-ios.js
    var require_engine_is_ios = __commonJS({
      "node_modules/core-js/internals/engine-is-ios.js"(exports2, module2) {
        var userAgent = require_engine_user_agent();
        module2.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
      }
    });
  
    // node_modules/core-js/internals/task.js
    var require_task = __commonJS({
      "node_modules/core-js/internals/task.js"(exports2, module2) {
        var global2 = require_global();
        var apply = require_function_apply();
        var bind = require_function_bind_context();
        var isCallable = require_is_callable();
        var hasOwn = require_has_own_property();
        var fails = require_fails();
        var html = require_html();
        var arraySlice = require_array_slice();
        var createElement = require_document_create_element();
        var IS_IOS = require_engine_is_ios();
        var IS_NODE = require_engine_is_node();
        var set = global2.setImmediate;
        var clear = global2.clearImmediate;
        var process = global2.process;
        var Dispatch = global2.Dispatch;
        var Function2 = global2.Function;
        var MessageChannel = global2.MessageChannel;
        var String2 = global2.String;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var location;
        var defer;
        var channel;
        var port;
        try {
          location = global2.location;
        } catch (error) {
        }
        var run = function(id) {
          if (hasOwn(queue, id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var runner = function(id) {
          return function() {
            run(id);
          };
        };
        var listener = function(event) {
          run(event.data);
        };
        var post = function(id) {
          global2.postMessage(String2(id), location.protocol + "//" + location.host);
        };
        if (!set || !clear) {
          set = function setImmediate(fn) {
            var args = arraySlice(arguments, 1);
            queue[++counter] = function() {
              apply(isCallable(fn) ? fn : Function2(fn), void 0, args);
            };
            defer(counter);
            return counter;
          };
          clear = function clearImmediate(id) {
            delete queue[id];
          };
          if (IS_NODE) {
            defer = function(id) {
              process.nextTick(runner(id));
            };
          } else if (Dispatch && Dispatch.now) {
            defer = function(id) {
              Dispatch.now(runner(id));
            };
          } else if (MessageChannel && !IS_IOS) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = bind(port.postMessage, port);
          } else if (global2.addEventListener && isCallable(global2.postMessage) && !global2.importScripts && location && location.protocol !== "file:" && !fails(post)) {
            defer = post;
            global2.addEventListener("message", listener, false);
          } else if (ONREADYSTATECHANGE in createElement("script")) {
            defer = function(id) {
              html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this);
                run(id);
              };
            };
          } else {
            defer = function(id) {
              setTimeout(runner(id), 0);
            };
          }
        }
        module2.exports = {
          set,
          clear
        };
      }
    });
  
    // node_modules/core-js/internals/engine-is-ios-pebble.js
    var require_engine_is_ios_pebble = __commonJS({
      "node_modules/core-js/internals/engine-is-ios-pebble.js"(exports2, module2) {
        var userAgent = require_engine_user_agent();
        var global2 = require_global();
        module2.exports = /ipad|iphone|ipod/i.test(userAgent) && global2.Pebble !== void 0;
      }
    });
  
    // node_modules/core-js/internals/engine-is-webos-webkit.js
    var require_engine_is_webos_webkit = __commonJS({
      "node_modules/core-js/internals/engine-is-webos-webkit.js"(exports2, module2) {
        var userAgent = require_engine_user_agent();
        module2.exports = /web0s(?!.*chrome)/i.test(userAgent);
      }
    });
  
    // node_modules/core-js/internals/microtask.js
    var require_microtask = __commonJS({
      "node_modules/core-js/internals/microtask.js"(exports2, module2) {
        var global2 = require_global();
        var bind = require_function_bind_context();
        var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
        var macrotask = require_task().set;
        var IS_IOS = require_engine_is_ios();
        var IS_IOS_PEBBLE = require_engine_is_ios_pebble();
        var IS_WEBOS_WEBKIT = require_engine_is_webos_webkit();
        var IS_NODE = require_engine_is_node();
        var MutationObserver = global2.MutationObserver || global2.WebKitMutationObserver;
        var document2 = global2.document;
        var process = global2.process;
        var Promise2 = global2.Promise;
        var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global2, "queueMicrotask");
        var queueMicrotask2 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
        var flush;
        var head;
        var last;
        var notify;
        var toggle;
        var node;
        var promise;
        var then;
        if (!queueMicrotask2) {
          flush = function() {
            var parent2, fn;
            if (IS_NODE && (parent2 = process.domain))
              parent2.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (error) {
                if (head)
                  notify();
                else
                  last = void 0;
                throw error;
              }
            }
            last = void 0;
            if (parent2)
              parent2.enter();
          };
          if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document2) {
            toggle = true;
            node = document2.createTextNode("");
            new MutationObserver(flush).observe(node, { characterData: true });
            notify = function() {
              node.data = toggle = !toggle;
            };
          } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
            promise = Promise2.resolve(void 0);
            promise.constructor = Promise2;
            then = bind(promise.then, promise);
            notify = function() {
              then(flush);
            };
          } else if (IS_NODE) {
            notify = function() {
              process.nextTick(flush);
            };
          } else {
            macrotask = bind(macrotask, global2);
            notify = function() {
              macrotask(flush);
            };
          }
        }
        module2.exports = queueMicrotask2 || function(fn) {
          var task = { fn, next: void 0 };
          if (last)
            last.next = task;
          if (!head) {
            head = task;
            notify();
          }
          last = task;
        };
      }
    });
  
    // node_modules/core-js/internals/new-promise-capability.js
    var require_new_promise_capability = __commonJS({
      "node_modules/core-js/internals/new-promise-capability.js"(exports2, module2) {
        "use strict";
        var aCallable = require_a_callable();
        var PromiseCapability = function(C) {
          var resolve, reject;
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== void 0 || reject !== void 0)
              throw TypeError("Bad Promise constructor");
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aCallable(resolve);
          this.reject = aCallable(reject);
        };
        module2.exports.f = function(C) {
          return new PromiseCapability(C);
        };
      }
    });
  
    // node_modules/core-js/internals/promise-resolve.js
    var require_promise_resolve = __commonJS({
      "node_modules/core-js/internals/promise-resolve.js"(exports2, module2) {
        var anObject = require_an_object();
        var isObject = require_is_object();
        var newPromiseCapability = require_new_promise_capability();
        module2.exports = function(C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C)
            return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };
      }
    });
  
    // node_modules/core-js/internals/host-report-errors.js
    var require_host_report_errors = __commonJS({
      "node_modules/core-js/internals/host-report-errors.js"(exports2, module2) {
        var global2 = require_global();
        module2.exports = function(a, b) {
          var console2 = global2.console;
          if (console2 && console2.error) {
            arguments.length == 1 ? console2.error(a) : console2.error(a, b);
          }
        };
      }
    });
  
    // node_modules/core-js/internals/perform.js
    var require_perform = __commonJS({
      "node_modules/core-js/internals/perform.js"(exports2, module2) {
        module2.exports = function(exec) {
          try {
            return { error: false, value: exec() };
          } catch (error) {
            return { error: true, value: error };
          }
        };
      }
    });
  
    // node_modules/core-js/internals/engine-is-browser.js
    var require_engine_is_browser = __commonJS({
      "node_modules/core-js/internals/engine-is-browser.js"(exports2, module2) {
        module2.exports = typeof window == "object";
      }
    });
  
    // node_modules/core-js/modules/es.promise.js
    var require_es_promise = __commonJS({
      "node_modules/core-js/modules/es.promise.js"() {
        "use strict";
        var $ = require_export();
        var IS_PURE = require_is_pure();
        var global2 = require_global();
        var getBuiltIn = require_get_built_in();
        var call = require_function_call();
        var NativePromise = require_native_promise_constructor();
        var redefine = require_redefine();
        var redefineAll = require_redefine_all();
        var setPrototypeOf = require_object_set_prototype_of();
        var setToStringTag = require_set_to_string_tag();
        var setSpecies = require_set_species();
        var aCallable = require_a_callable();
        var isCallable = require_is_callable();
        var isObject = require_is_object();
        var anInstance = require_an_instance();
        var inspectSource = require_inspect_source();
        var iterate = require_iterate();
        var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
        var speciesConstructor = require_species_constructor();
        var task = require_task().set;
        var microtask = require_microtask();
        var promiseResolve = require_promise_resolve();
        var hostReportErrors = require_host_report_errors();
        var newPromiseCapabilityModule = require_new_promise_capability();
        var perform = require_perform();
        var InternalStateModule = require_internal_state();
        var isForced = require_is_forced();
        var wellKnownSymbol = require_well_known_symbol();
        var IS_BROWSER = require_engine_is_browser();
        var IS_NODE = require_engine_is_node();
        var V8_VERSION = require_engine_v8_version();
        var SPECIES = wellKnownSymbol("species");
        var PROMISE = "Promise";
        var getInternalState = InternalStateModule.get;
        var setInternalState = InternalStateModule.set;
        var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
        var NativePromisePrototype = NativePromise && NativePromise.prototype;
        var PromiseConstructor = NativePromise;
        var PromisePrototype = NativePromisePrototype;
        var TypeError2 = global2.TypeError;
        var document2 = global2.document;
        var process = global2.process;
        var newPromiseCapability = newPromiseCapabilityModule.f;
        var newGenericPromiseCapability = newPromiseCapability;
        var DISPATCH_EVENT = !!(document2 && document2.createEvent && global2.dispatchEvent);
        var NATIVE_REJECTION_EVENT = isCallable(global2.PromiseRejectionEvent);
        var UNHANDLED_REJECTION = "unhandledrejection";
        var REJECTION_HANDLED = "rejectionhandled";
        var PENDING = 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        var HANDLED = 1;
        var UNHANDLED = 2;
        var SUBCLASSING = false;
        var Internal;
        var OwnPromiseCapability;
        var PromiseWrapper;
        var nativeThen;
        var FORCED = isForced(PROMISE, function() {
          var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
          var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
          if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
            return true;
          if (IS_PURE && !PromisePrototype["finally"])
            return true;
          if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE))
            return false;
          var promise = new PromiseConstructor(function(resolve) {
            resolve(1);
          });
          var FakePromise = function(exec) {
            exec(function() {
            }, function() {
            });
          };
          var constructor = promise.constructor = {};
          constructor[SPECIES] = FakePromise;
          SUBCLASSING = promise.then(function() {
          }) instanceof FakePromise;
          if (!SUBCLASSING)
            return true;
          return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
        });
        var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
          PromiseConstructor.all(iterable)["catch"](function() {
          });
        });
        var isThenable = function(it) {
          var then;
          return isObject(it) && isCallable(then = it.then) ? then : false;
        };
        var notify = function(state, isReject) {
          if (state.notified)
            return;
          state.notified = true;
          var chain = state.reactions;
          microtask(function() {
            var value2 = state.value;
            var ok = state.state == FULFILLED;
            var index2 = 0;
            while (chain.length > index2) {
              var reaction = chain[index2++];
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (state.rejection === UNHANDLED)
                      onHandleUnhandled(state);
                    state.rejection = HANDLED;
                  }
                  if (handler === true)
                    result = value2;
                  else {
                    if (domain)
                      domain.enter();
                    result = handler(value2);
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError2("Promise-chain cycle"));
                  } else if (then = isThenable(result)) {
                    call(then, result, resolve, reject);
                  } else
                    resolve(result);
                } else
                  reject(value2);
              } catch (error) {
                if (domain && !exited)
                  domain.exit();
                reject(error);
              }
            }
            state.reactions = [];
            state.notified = false;
            if (isReject && !state.rejection)
              onUnhandled(state);
          });
        };
        var dispatchEvent = function(name2, promise, reason) {
          var event, handler;
          if (DISPATCH_EVENT) {
            event = document2.createEvent("Event");
            event.promise = promise;
            event.reason = reason;
            event.initEvent(name2, false, true);
            global2.dispatchEvent(event);
          } else
            event = { promise, reason };
          if (!NATIVE_REJECTION_EVENT && (handler = global2["on" + name2]))
            handler(event);
          else if (name2 === UNHANDLED_REJECTION)
            hostReportErrors("Unhandled promise rejection", reason);
        };
        var onUnhandled = function(state) {
          call(task, global2, function() {
            var promise = state.facade;
            var value2 = state.value;
            var IS_UNHANDLED = isUnhandled(state);
            var result;
            if (IS_UNHANDLED) {
              result = perform(function() {
                if (IS_NODE) {
                  process.emit("unhandledRejection", value2, promise);
                } else
                  dispatchEvent(UNHANDLED_REJECTION, promise, value2);
              });
              state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
              if (result.error)
                throw result.value;
            }
          });
        };
        var isUnhandled = function(state) {
          return state.rejection !== HANDLED && !state.parent;
        };
        var onHandleUnhandled = function(state) {
          call(task, global2, function() {
            var promise = state.facade;
            if (IS_NODE) {
              process.emit("rejectionHandled", promise);
            } else
              dispatchEvent(REJECTION_HANDLED, promise, state.value);
          });
        };
        var bind = function(fn, state, unwrap) {
          return function(value2) {
            fn(state, value2, unwrap);
          };
        };
        var internalReject = function(state, value2, unwrap) {
          if (state.done)
            return;
          state.done = true;
          if (unwrap)
            state = unwrap;
          state.value = value2;
          state.state = REJECTED;
          notify(state, true);
        };
        var internalResolve = function(state, value2, unwrap) {
          if (state.done)
            return;
          state.done = true;
          if (unwrap)
            state = unwrap;
          try {
            if (state.facade === value2)
              throw TypeError2("Promise can't be resolved itself");
            var then = isThenable(value2);
            if (then) {
              microtask(function() {
                var wrapper = { done: false };
                try {
                  call(
                    then,
                    value2,
                    bind(internalResolve, wrapper, state),
                    bind(internalReject, wrapper, state)
                  );
                } catch (error) {
                  internalReject(wrapper, error, state);
                }
              });
            } else {
              state.value = value2;
              state.state = FULFILLED;
              notify(state, false);
            }
          } catch (error) {
            internalReject({ done: false }, error, state);
          }
        };
        if (FORCED) {
          PromiseConstructor = function Promise2(executor) {
            anInstance(this, PromisePrototype);
            aCallable(executor);
            call(Internal, this);
            var state = getInternalState(this);
            try {
              executor(bind(internalResolve, state), bind(internalReject, state));
            } catch (error) {
              internalReject(state, error);
            }
          };
          PromisePrototype = PromiseConstructor.prototype;
          Internal = function Promise2(executor) {
            setInternalState(this, {
              type: PROMISE,
              done: false,
              notified: false,
              parent: false,
              reactions: [],
              rejection: false,
              state: PENDING,
              value: void 0
            });
          };
          Internal.prototype = redefineAll(PromisePrototype, {
            // `Promise.prototype.then` method
            // https://tc39.es/ecma262/#sec-promise.prototype.then
            then: function then(onFulfilled, onRejected) {
              var state = getInternalPromiseState(this);
              var reactions = state.reactions;
              var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
              reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
              reaction.fail = isCallable(onRejected) && onRejected;
              reaction.domain = IS_NODE ? process.domain : void 0;
              state.parent = true;
              reactions[reactions.length] = reaction;
              if (state.state != PENDING)
                notify(state, false);
              return reaction.promise;
            },
            // `Promise.prototype.catch` method
            // https://tc39.es/ecma262/#sec-promise.prototype.catch
            "catch": function(onRejected) {
              return this.then(void 0, onRejected);
            }
          });
          OwnPromiseCapability = function() {
            var promise = new Internal();
            var state = getInternalState(promise);
            this.promise = promise;
            this.resolve = bind(internalResolve, state);
            this.reject = bind(internalReject, state);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
            return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
          };
          if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
            nativeThen = NativePromisePrototype.then;
            if (!SUBCLASSING) {
              redefine(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
                var that = this;
                return new PromiseConstructor(function(resolve, reject) {
                  call(nativeThen, that, resolve, reject);
                }).then(onFulfilled, onRejected);
              }, { unsafe: true });
              redefine(NativePromisePrototype, "catch", PromisePrototype["catch"], { unsafe: true });
            }
            try {
              delete NativePromisePrototype.constructor;
            } catch (error) {
            }
            if (setPrototypeOf) {
              setPrototypeOf(NativePromisePrototype, PromisePrototype);
            }
          }
        }
        $({ global: true, wrap: true, forced: FORCED }, {
          Promise: PromiseConstructor
        });
        setToStringTag(PromiseConstructor, PROMISE, false, true);
        setSpecies(PROMISE);
        PromiseWrapper = getBuiltIn(PROMISE);
        $({ target: PROMISE, stat: true, forced: FORCED }, {
          // `Promise.reject` method
          // https://tc39.es/ecma262/#sec-promise.reject
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            call(capability.reject, void 0, r);
            return capability.promise;
          }
        });
        $({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
          // `Promise.resolve` method
          // https://tc39.es/ecma262/#sec-promise.resolve
          resolve: function resolve(x) {
            return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
          }
        });
        $({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
          // `Promise.all` method
          // https://tc39.es/ecma262/#sec-promise.all
          all: function all(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function() {
              var $promiseResolve = aCallable(C.resolve);
              var values = [];
              var counter = 0;
              var remaining = 1;
              iterate(iterable, function(promise) {
                var index2 = counter++;
                var alreadyCalled = false;
                remaining++;
                call($promiseResolve, C, promise).then(function(value2) {
                  if (alreadyCalled)
                    return;
                  alreadyCalled = true;
                  values[index2] = value2;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (result.error)
              reject(result.value);
            return capability.promise;
          },
          // `Promise.race` method
          // https://tc39.es/ecma262/#sec-promise.race
          race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var reject = capability.reject;
            var result = perform(function() {
              var $promiseResolve = aCallable(C.resolve);
              iterate(iterable, function(promise) {
                call($promiseResolve, C, promise).then(capability.resolve, reject);
              });
            });
            if (result.error)
              reject(result.value);
            return capability.promise;
          }
        });
      }
    });
  
    // node_modules/core-js/internals/async-iterator-prototype.js
    var require_async_iterator_prototype = __commonJS({
      "node_modules/core-js/internals/async-iterator-prototype.js"(exports2, module2) {
        var global2 = require_global();
        var shared = require_shared_store();
        var isCallable = require_is_callable();
        var create = require_object_create();
        var getPrototypeOf = require_object_get_prototype_of();
        var redefine = require_redefine();
        var wellKnownSymbol = require_well_known_symbol();
        var IS_PURE = require_is_pure();
        var USE_FUNCTION_CONSTRUCTOR = "USE_FUNCTION_CONSTRUCTOR";
        var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
        var AsyncIterator = global2.AsyncIterator;
        var PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
        var AsyncIteratorPrototype;
        var prototype;
        if (PassedAsyncIteratorPrototype) {
          AsyncIteratorPrototype = PassedAsyncIteratorPrototype;
        } else if (isCallable(AsyncIterator)) {
          AsyncIteratorPrototype = AsyncIterator.prototype;
        } else if (shared[USE_FUNCTION_CONSTRUCTOR] || global2[USE_FUNCTION_CONSTRUCTOR]) {
          try {
            prototype = getPrototypeOf(getPrototypeOf(getPrototypeOf(Function("return async function*(){}()")())));
            if (getPrototypeOf(prototype) === Object.prototype)
              AsyncIteratorPrototype = prototype;
          } catch (error) {
          }
        }
        if (!AsyncIteratorPrototype)
          AsyncIteratorPrototype = {};
        else if (IS_PURE)
          AsyncIteratorPrototype = create(AsyncIteratorPrototype);
        if (!isCallable(AsyncIteratorPrototype[ASYNC_ITERATOR])) {
          redefine(AsyncIteratorPrototype, ASYNC_ITERATOR, function() {
            return this;
          });
        }
        module2.exports = AsyncIteratorPrototype;
      }
    });
  
    // node_modules/core-js/internals/async-from-sync-iterator.js
    var require_async_from_sync_iterator = __commonJS({
      "node_modules/core-js/internals/async-from-sync-iterator.js"(exports2, module2) {
        "use strict";
        var apply = require_function_apply();
        var anObject = require_an_object();
        var create = require_object_create();
        var getMethod = require_get_method();
        var redefineAll = require_redefine_all();
        var InternalStateModule = require_internal_state();
        var getBuiltIn = require_get_built_in();
        var AsyncIteratorPrototype = require_async_iterator_prototype();
        var Promise2 = getBuiltIn("Promise");
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.get;
        var asyncFromSyncIteratorContinuation = function(result, resolve, reject) {
          var done = result.done;
          Promise2.resolve(result.value).then(function(value2) {
            resolve({ done, value: value2 });
          }, reject);
        };
        var AsyncFromSyncIterator = function AsyncIterator(iterator) {
          setInternalState(this, {
            iterator: anObject(iterator),
            next: iterator.next
          });
        };
        AsyncFromSyncIterator.prototype = redefineAll(create(AsyncIteratorPrototype), {
          next: function next(arg) {
            var state = getInternalState(this);
            var hasArg = !!arguments.length;
            return new Promise2(function(resolve, reject) {
              var result = anObject(apply(state.next, state.iterator, hasArg ? [arg] : []));
              asyncFromSyncIteratorContinuation(result, resolve, reject);
            });
          },
          "return": function(arg) {
            var iterator = getInternalState(this).iterator;
            var hasArg = !!arguments.length;
            return new Promise2(function(resolve, reject) {
              var $return = getMethod(iterator, "return");
              if ($return === void 0)
                return resolve({ done: true, value: arg });
              var result = anObject(apply($return, iterator, hasArg ? [arg] : []));
              asyncFromSyncIteratorContinuation(result, resolve, reject);
            });
          },
          "throw": function(arg) {
            var iterator = getInternalState(this).iterator;
            var hasArg = !!arguments.length;
            return new Promise2(function(resolve, reject) {
              var $throw = getMethod(iterator, "throw");
              if ($throw === void 0)
                return reject(arg);
              var result = anObject(apply($throw, iterator, hasArg ? [arg] : []));
              asyncFromSyncIteratorContinuation(result, resolve, reject);
            });
          }
        });
        module2.exports = AsyncFromSyncIterator;
      }
    });
  
    // node_modules/core-js/internals/get-async-iterator.js
    var require_get_async_iterator = __commonJS({
      "node_modules/core-js/internals/get-async-iterator.js"(exports2, module2) {
        var call = require_function_call();
        var AsyncFromSyncIterator = require_async_from_sync_iterator();
        var anObject = require_an_object();
        var getIterator = require_get_iterator();
        var getMethod = require_get_method();
        var wellKnownSymbol = require_well_known_symbol();
        var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
        module2.exports = function(it, usingIterator) {
          var method = arguments.length < 2 ? getMethod(it, ASYNC_ITERATOR) : usingIterator;
          return method ? anObject(call(method, it)) : new AsyncFromSyncIterator(getIterator(it));
        };
      }
    });
  
    // node_modules/core-js/internals/entry-virtual.js
    var require_entry_virtual = __commonJS({
      "node_modules/core-js/internals/entry-virtual.js"(exports2, module2) {
        var global2 = require_global();
        module2.exports = function(CONSTRUCTOR) {
          return global2[CONSTRUCTOR].prototype;
        };
      }
    });
  
    // node_modules/core-js/internals/async-iterator-iteration.js
    var require_async_iterator_iteration = __commonJS({
      "node_modules/core-js/internals/async-iterator-iteration.js"(exports2, module2) {
        "use strict";
        var global2 = require_global();
        var call = require_function_call();
        var aCallable = require_a_callable();
        var anObject = require_an_object();
        var getBuiltIn = require_get_built_in();
        var getMethod = require_get_method();
        var MAX_SAFE_INTEGER = 9007199254740991;
        var TypeError2 = global2.TypeError;
        var createMethod = function(TYPE) {
          var IS_TO_ARRAY = TYPE == 0;
          var IS_FOR_EACH = TYPE == 1;
          var IS_EVERY = TYPE == 2;
          var IS_SOME = TYPE == 3;
          return function(iterator, fn, target) {
            anObject(iterator);
            var Promise2 = getBuiltIn("Promise");
            var next = aCallable(iterator.next);
            var index2 = 0;
            var MAPPING = fn !== void 0;
            if (MAPPING || !IS_TO_ARRAY)
              aCallable(fn);
            return new Promise2(function(resolve, reject) {
              var closeIteration = function(method, argument) {
                try {
                  var returnMethod = getMethod(iterator, "return");
                  if (returnMethod) {
                    return Promise2.resolve(call(returnMethod, iterator)).then(function() {
                      method(argument);
                    }, function(error) {
                      reject(error);
                    });
                  }
                } catch (error2) {
                  return reject(error2);
                }
                method(argument);
              };
              var onError = function(error) {
                closeIteration(reject, error);
              };
              var loop = function() {
                try {
                  if (IS_TO_ARRAY && index2 > MAX_SAFE_INTEGER && MAPPING) {
                    throw TypeError2("The allowed number of iterations has been exceeded");
                  }
                  Promise2.resolve(anObject(call(next, iterator))).then(function(step) {
                    try {
                      if (anObject(step).done) {
                        if (IS_TO_ARRAY) {
                          target.length = index2;
                          resolve(target);
                        } else
                          resolve(IS_SOME ? false : IS_EVERY || void 0);
                      } else {
                        var value2 = step.value;
                        if (MAPPING) {
                          Promise2.resolve(IS_TO_ARRAY ? fn(value2, index2) : fn(value2)).then(function(result) {
                            if (IS_FOR_EACH) {
                              loop();
                            } else if (IS_EVERY) {
                              result ? loop() : closeIteration(resolve, false);
                            } else if (IS_TO_ARRAY) {
                              target[index2++] = result;
                              loop();
                            } else {
                              result ? closeIteration(resolve, IS_SOME || value2) : loop();
                            }
                          }, onError);
                        } else {
                          target[index2++] = value2;
                          loop();
                        }
                      }
                    } catch (error) {
                      onError(error);
                    }
                  }, onError);
                } catch (error2) {
                  onError(error2);
                }
              };
              loop();
            });
          };
        };
        module2.exports = {
          toArray: createMethod(0),
          forEach: createMethod(1),
          every: createMethod(2),
          some: createMethod(3),
          find: createMethod(4)
        };
      }
    });
  
    // node_modules/core-js/internals/array-from-async.js
    var require_array_from_async = __commonJS({
      "node_modules/core-js/internals/array-from-async.js"(exports2, module2) {
        "use strict";
        var bind = require_function_bind_context();
        var toObject = require_to_object();
        var isConstructor = require_is_constructor();
        var getAsyncIterator = require_get_async_iterator();
        var getIterator = require_get_iterator();
        var getIteratorMethod = require_get_iterator_method();
        var getMethod = require_get_method();
        var getVirtual = require_entry_virtual();
        var getBuiltIn = require_get_built_in();
        var wellKnownSymbol = require_well_known_symbol();
        var AsyncFromSyncIterator = require_async_from_sync_iterator();
        var toArray = require_async_iterator_iteration().toArray;
        var ASYNC_ITERATOR = wellKnownSymbol("asyncIterator");
        var arrayIterator = getVirtual("Array").values;
        module2.exports = function fromAsync(asyncItems) {
          var C = this;
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
          var thisArg = argumentsLength > 2 ? arguments[2] : void 0;
          return new (getBuiltIn("Promise"))(function(resolve) {
            var O = toObject(asyncItems);
            if (mapfn !== void 0)
              mapfn = bind(mapfn, thisArg);
            var usingAsyncIterator = getMethod(O, ASYNC_ITERATOR);
            var usingSyncIterator = usingAsyncIterator ? void 0 : getIteratorMethod(O) || arrayIterator;
            var A = isConstructor(C) ? new C() : [];
            var iterator = usingAsyncIterator ? getAsyncIterator(O, usingAsyncIterator) : new AsyncFromSyncIterator(getIterator(O, usingSyncIterator));
            resolve(toArray(iterator, mapfn, A));
          });
        };
      }
    });
  
    // node_modules/core-js/modules/esnext.array.from-async.js
    var require_esnext_array_from_async = __commonJS({
      "node_modules/core-js/modules/esnext.array.from-async.js"() {
        var $ = require_export();
        var fromAsync = require_array_from_async();
        $({ target: "Array", stat: true }, {
          fromAsync
        });
      }
    });
  
    // node_modules/core-js/modules/esnext.array.at.js
    var require_esnext_array_at = __commonJS({
      "node_modules/core-js/modules/esnext.array.at.js"() {
        require_es_array_at();
      }
    });
  
    // node_modules/core-js/modules/esnext.array.filter-out.js
    var require_esnext_array_filter_out = __commonJS({
      "node_modules/core-js/modules/esnext.array.filter-out.js"() {
        "use strict";
        var $ = require_export();
        var $filterReject = require_array_iteration().filterReject;
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          filterOut: function filterOut(callbackfn) {
            return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("filterOut");
      }
    });
  
    // node_modules/core-js/modules/esnext.array.filter-reject.js
    var require_esnext_array_filter_reject = __commonJS({
      "node_modules/core-js/modules/esnext.array.filter-reject.js"() {
        "use strict";
        var $ = require_export();
        var $filterReject = require_array_iteration().filterReject;
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          filterReject: function filterReject(callbackfn) {
            return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("filterReject");
      }
    });
  
    // node_modules/core-js/internals/array-iteration-from-last.js
    var require_array_iteration_from_last = __commonJS({
      "node_modules/core-js/internals/array-iteration-from-last.js"(exports2, module2) {
        var bind = require_function_bind_context();
        var IndexedObject = require_indexed_object();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var createMethod = function(TYPE) {
          var IS_FIND_LAST_INDEX = TYPE == 1;
          return function($this, callbackfn, that) {
            var O = toObject($this);
            var self2 = IndexedObject(O);
            var boundFunction = bind(callbackfn, that);
            var index2 = lengthOfArrayLike(self2);
            var value2, result;
            while (index2-- > 0) {
              value2 = self2[index2];
              result = boundFunction(value2, index2, O);
              if (result)
                switch (TYPE) {
                  case 0:
                    return value2;
                  case 1:
                    return index2;
                }
            }
            return IS_FIND_LAST_INDEX ? -1 : void 0;
          };
        };
        module2.exports = {
          // `Array.prototype.findLast` method
          // https://github.com/tc39/proposal-array-find-from-last
          findLast: createMethod(0),
          // `Array.prototype.findLastIndex` method
          // https://github.com/tc39/proposal-array-find-from-last
          findLastIndex: createMethod(1)
        };
      }
    });
  
    // node_modules/core-js/modules/esnext.array.find-last.js
    var require_esnext_array_find_last = __commonJS({
      "node_modules/core-js/modules/esnext.array.find-last.js"() {
        "use strict";
        var $ = require_export();
        var $findLast = require_array_iteration_from_last().findLast;
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          findLast: function findLast(callbackfn) {
            return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("findLast");
      }
    });
  
    // node_modules/core-js/modules/esnext.array.find-last-index.js
    var require_esnext_array_find_last_index = __commonJS({
      "node_modules/core-js/modules/esnext.array.find-last-index.js"() {
        "use strict";
        var $ = require_export();
        var $findLastIndex = require_array_iteration_from_last().findLastIndex;
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          findLastIndex: function findLastIndex(callbackfn) {
            return $findLastIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("findLastIndex");
      }
    });
  
    // node_modules/core-js/internals/array-from-constructor-and-list.js
    var require_array_from_constructor_and_list = __commonJS({
      "node_modules/core-js/internals/array-from-constructor-and-list.js"(exports2, module2) {
        module2.exports = function(Constructor, list) {
          var index2 = 0;
          var length2 = list.length;
          var result = new Constructor(length2);
          while (length2 > index2)
            result[index2] = list[index2++];
          return result;
        };
      }
    });
  
    // node_modules/core-js/internals/array-group-by.js
    var require_array_group_by = __commonJS({
      "node_modules/core-js/internals/array-group-by.js"(exports2, module2) {
        var global2 = require_global();
        var bind = require_function_bind_context();
        var uncurryThis = require_function_uncurry_this();
        var IndexedObject = require_indexed_object();
        var toObject = require_to_object();
        var toPropertyKey = require_to_property_key();
        var lengthOfArrayLike = require_length_of_array_like();
        var objectCreate = require_object_create();
        var arrayFromConstructorAndList = require_array_from_constructor_and_list();
        var Array2 = global2.Array;
        var push = uncurryThis([].push);
        module2.exports = function($this, callbackfn, that, specificConstructor) {
          var O = toObject($this);
          var self2 = IndexedObject(O);
          var boundFunction = bind(callbackfn, that);
          var target = objectCreate(null);
          var length2 = lengthOfArrayLike(self2);
          var index2 = 0;
          var Constructor, key2, value2;
          for (; length2 > index2; index2++) {
            value2 = self2[index2];
            key2 = toPropertyKey(boundFunction(value2, index2, O));
            if (key2 in target)
              push(target[key2], value2);
            else
              target[key2] = [value2];
          }
          if (specificConstructor) {
            Constructor = specificConstructor(O);
            if (Constructor !== Array2) {
              for (key2 in target)
                target[key2] = arrayFromConstructorAndList(Constructor, target[key2]);
            }
          }
          return target;
        };
      }
    });
  
    // node_modules/core-js/modules/esnext.array.group-by.js
    var require_esnext_array_group_by = __commonJS({
      "node_modules/core-js/modules/esnext.array.group-by.js"() {
        "use strict";
        var $ = require_export();
        var $groupBy = require_array_group_by();
        var arraySpeciesConstructor = require_array_species_constructor();
        var addToUnscopables = require_add_to_unscopables();
        $({ target: "Array", proto: true }, {
          groupBy: function groupBy(callbackfn) {
            var thisArg = arguments.length > 1 ? arguments[1] : void 0;
            return $groupBy(this, callbackfn, thisArg, arraySpeciesConstructor);
          }
        });
        addToUnscopables("groupBy");
      }
    });
  
    // node_modules/core-js/modules/esnext.array.is-template-object.js
    var require_esnext_array_is_template_object = __commonJS({
      "node_modules/core-js/modules/esnext.array.is-template-object.js"() {
        var $ = require_export();
        var isArray = require_is_array();
        var isFrozen = Object.isFrozen;
        var isFrozenStringArray = function(array, allowUndefined) {
          if (!isFrozen || !isArray(array) || !isFrozen(array))
            return false;
          var index2 = 0;
          var length2 = array.length;
          var element;
          while (index2 < length2) {
            element = array[index2++];
            if (!(typeof element == "string" || allowUndefined && typeof element == "undefined")) {
              return false;
            }
          }
          return length2 !== 0;
        };
        $({ target: "Array", stat: true }, {
          isTemplateObject: function isTemplateObject(value2) {
            if (!isFrozenStringArray(value2, true))
              return false;
            var raw = value2.raw;
            if (raw.length !== value2.length || !isFrozenStringArray(raw, false))
              return false;
            return true;
          }
        });
      }
    });
  
    // node_modules/core-js/modules/esnext.array.last-item.js
    var require_esnext_array_last_item = __commonJS({
      "node_modules/core-js/modules/esnext.array.last-item.js"() {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var addToUnscopables = require_add_to_unscopables();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var defineProperty = require_object_define_property().f;
        if (DESCRIPTORS && !("lastItem" in [])) {
          defineProperty(Array.prototype, "lastItem", {
            configurable: true,
            get: function lastItem() {
              var O = toObject(this);
              var len = lengthOfArrayLike(O);
              return len == 0 ? void 0 : O[len - 1];
            },
            set: function lastItem(value2) {
              var O = toObject(this);
              var len = lengthOfArrayLike(O);
              return O[len == 0 ? 0 : len - 1] = value2;
            }
          });
          addToUnscopables("lastItem");
        }
      }
    });
  
    // node_modules/core-js/modules/esnext.array.last-index.js
    var require_esnext_array_last_index = __commonJS({
      "node_modules/core-js/modules/esnext.array.last-index.js"() {
        "use strict";
        var DESCRIPTORS = require_descriptors();
        var addToUnscopables = require_add_to_unscopables();
        var toObject = require_to_object();
        var lengthOfArrayLike = require_length_of_array_like();
        var defineProperty = require_object_define_property().f;
        if (DESCRIPTORS && !("lastIndex" in [])) {
          defineProperty(Array.prototype, "lastIndex", {
            configurable: true,
            get: function lastIndex() {
              var O = toObject(this);
              var len = lengthOfArrayLike(O);
              return len == 0 ? 0 : len - 1;
            }
          });
          addToUnscopables("lastIndex");
        }
      }
    });
  
    // node_modules/core-js/internals/array-unique-by.js
    var require_array_unique_by = __commonJS({
      "node_modules/core-js/internals/array-unique-by.js"(exports2, module2) {
        "use strict";
        var getBuiltIn = require_get_built_in();
        var uncurryThis = require_function_uncurry_this();
        var aCallable = require_a_callable();
        var lengthOfArrayLike = require_length_of_array_like();
        var toObject = require_to_object();
        var arraySpeciesCreate = require_array_species_create();
        var Map = getBuiltIn("Map");
        var MapPrototype = Map.prototype;
        var mapForEach = uncurryThis(MapPrototype.forEach);
        var mapHas = uncurryThis(MapPrototype.has);
        var mapSet = uncurryThis(MapPrototype.set);
        var push = uncurryThis([].push);
        module2.exports = function uniqueBy(resolver) {
          var that = toObject(this);
          var length2 = lengthOfArrayLike(that);
          var result = arraySpeciesCreate(that, 0);
          var map = new Map();
          var resolverFunction = resolver != null ? aCallable(resolver) : function(value2) {
            return value2;
          };
          var index2, item, key2;
          for (index2 = 0; index2 < length2; index2++) {
            item = that[index2];
            key2 = resolverFunction(item);
            if (!mapHas(map, key2))
              mapSet(map, key2, item);
          }
          mapForEach(map, function(value2) {
            push(result, value2);
          });
          return result;
        };
      }
    });
  
    // node_modules/core-js/modules/esnext.array.unique-by.js
    var require_esnext_array_unique_by = __commonJS({
      "node_modules/core-js/modules/esnext.array.unique-by.js"() {
        "use strict";
        var $ = require_export();
        var addToUnscopables = require_add_to_unscopables();
        var uniqueBy = require_array_unique_by();
        $({ target: "Array", proto: true }, {
          uniqueBy
        });
        addToUnscopables("uniqueBy");
      }
    });
  
    // node_modules/core-js/features/array/index.js
    var require_array3 = __commonJS({
      "node_modules/core-js/features/array/index.js"(exports2, module2) {
        var parent2 = require_array2();
        require_es_map();
        require_es_promise();
        require_esnext_array_from_async();
        require_esnext_array_at();
        require_esnext_array_filter_out();
        require_esnext_array_filter_reject();
        require_esnext_array_find_last();
        require_esnext_array_find_last_index();
        require_esnext_array_group_by();
        require_esnext_array_is_template_object();
        require_esnext_array_last_item();
        require_esnext_array_last_index();
        require_esnext_array_unique_by();
        module2.exports = parent2;
      }
    });
  
    // packages/systems/core/utils/LottieFetchUtils/fflate.min.js
    var require_fflate_min = __commonJS({
      "packages/systems/core/utils/LottieFetchUtils/fflate.min.js"(exports2) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.strFromU8 = strFromU82;
        exports2.unzip = unzip2;
        var ch2 = {};
        var wk = function(c, id, msg, transfer, cb) {
          const w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
            type: "text/javascript"
          }))));
          return w.onmessage = function(e) {
            const d = e.data, ed = d.$e$;
            if (ed) {
              const err2 = new Error(ed[0]);
              err2.code = ed[1], err2.stack = ed[2], cb(err2, null);
            } else
              cb(null, d);
          }, w.postMessage(msg, transfer), w;
        };
        var u8 = Uint8Array;
        var u16 = Uint16Array;
        var u32 = Uint32Array;
        var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
        var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
        var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
        var freb = function(eb, start) {
          const b = new u16(31);
          for (var i2 = 0; i2 < 31; ++i2)
            b[i2] = start += 1 << eb[i2 - 1];
          const r = new u32(b[30]);
          for (i2 = 1; i2 < 30; ++i2)
            for (let j = b[i2]; j < b[i2 + 1]; ++j)
              r[j] = j - b[i2] << 5 | i2;
          return [b, r];
        };
        var _a = freb(fleb, 2);
        var fl = _a[0];
        var revfl = _a[1];
        fl[28] = 258, revfl[258] = 28;
        var _b = freb(fdeb, 0);
        var fd = _b[0];
        var rev = new u16(32768);
        for (i = 0; i < 32768; ++i) {
          let x = (43690 & i) >>> 1 | (21845 & i) << 1;
          x = (52428 & x) >>> 2 | (13107 & x) << 2, x = (61680 & x) >>> 4 | (3855 & x) << 4, rev[i] = ((65280 & x) >>> 8 | (255 & x) << 8) >>> 1;
        }
        var i;
        var hMap = function(cd, mb, r) {
          const s = cd.length;
          let i2 = 0;
          const l = new u16(mb);
          for (; i2 < s; ++i2)
            cd[i2] && ++l[cd[i2] - 1];
          const le = new u16(mb);
          for (i2 = 0; i2 < mb; ++i2)
            le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
          let co;
          if (r) {
            co = new u16(1 << mb);
            const rvb = 15 - mb;
            for (i2 = 0; i2 < s; ++i2)
              if (cd[i2]) {
                const sv = i2 << 4 | cd[i2], r_1 = mb - cd[i2];
                let v = le[cd[i2] - 1]++ << r_1;
                for (let m = v | (1 << r_1) - 1; v <= m; ++v)
                  co[rev[v] >>> rvb] = sv;
              }
          } else
            for (co = new u16(s), i2 = 0; i2 < s; ++i2)
              cd[i2] && (co[i2] = rev[le[cd[i2] - 1]++] >>> 15 - cd[i2]);
          return co;
        };
        var flt = new u8(288);
        for (i = 0; i < 144; ++i)
          flt[i] = 8;
        for (i = 144; i < 256; ++i)
          flt[i] = 9;
        for (i = 256; i < 280; ++i)
          flt[i] = 7;
        for (i = 280; i < 288; ++i)
          flt[i] = 8;
        var fdt = new u8(32);
        for (i = 0; i < 32; ++i)
          fdt[i] = 5;
        var flrm = hMap(flt, 9, 1);
        var fdrm = hMap(fdt, 5, 1);
        var max = function(a) {
          let m = a[0];
          for (let i2 = 1; i2 < a.length; ++i2)
            a[i2] > m && (m = a[i2]);
          return m;
        };
        var bits = function(d, p, m) {
          const o = p / 8 | 0;
          return (d[o] | d[o + 1] << 8) >> (7 & p) & m;
        };
        var bits16 = function(d, p) {
          const o = p / 8 | 0;
          return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (7 & p);
        };
        var shft = function(p) {
          return (p + 7) / 8 | 0;
        };
        var slc = function(v, s, e) {
          (null == s || s < 0) && (s = 0), (null == e || e > v.length) && (e = v.length);
          const n = new (2 === v.BYTES_PER_ELEMENT ? u16 : 4 === v.BYTES_PER_ELEMENT ? u32 : u8)(e - s);
          return n.set(v.subarray(s, e)), n;
        };
        var ec = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"];
        var err = function(ind, msg, nt) {
          const e = new Error(msg || ec[ind]);
          if (e.code = ind, Error.captureStackTrace && Error.captureStackTrace(e, err), !nt)
            throw e;
          return e;
        };
        var inflt = function(dat, buf, st) {
          const sl = dat.length;
          if (!sl || st && st.f && !st.l)
            return buf || new u8(0);
          const noBuf = !buf || st, noSt = !st || st.i;
          st || (st = {}), buf || (buf = new u8(3 * sl));
          const cbuf = function(l) {
            const bl = buf.length;
            if (l > bl) {
              const nbuf = new u8(Math.max(2 * bl, l));
              nbuf.set(buf), buf = nbuf;
            }
          };
          let final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
          const tbts = 8 * sl;
          do {
            if (!lm) {
              final = bits(dat, pos, 1);
              const type = bits(dat, pos + 1, 3);
              if (pos += 3, !type) {
                const l = dat[(s = shft(pos) + 4) - 4] | dat[s - 3] << 8, t = s + l;
                if (t > sl) {
                  noSt && err(0);
                  break;
                }
                noBuf && cbuf(bt + l), buf.set(dat.subarray(s, t), bt), st.b = bt += l, st.p = pos = 8 * t, st.f = final;
                continue;
              }
              if (1 === type)
                lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
              else if (2 === type) {
                const hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4, tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                const ldt = new u8(tl), clt = new u8(19);
                for (var i2 = 0; i2 < hcLen; ++i2)
                  clt[clim[i2]] = bits(dat, pos + 3 * i2, 7);
                pos += 3 * hcLen;
                const clb = max(clt), clbmsk = (1 << clb) - 1, clm = hMap(clt, clb, 1);
                for (i2 = 0; i2 < tl; ) {
                  const r = clm[bits(dat, pos, clbmsk)];
                  var s;
                  if (pos += 15 & r, (s = r >>> 4) < 16)
                    ldt[i2++] = s;
                  else {
                    var c = 0;
                    let n = 0;
                    for (16 === s ? (n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1]) : 17 === s ? (n = 3 + bits(dat, pos, 7), pos += 3) : 18 === s && (n = 11 + bits(dat, pos, 127), pos += 7); n--; )
                      ldt[i2++] = c;
                  }
                }
                const lt = ldt.subarray(0, hLit);
                var dt = ldt.subarray(hLit);
                lbt = max(lt), dbt = max(dt), lm = hMap(lt, lbt, 1), dm = hMap(dt, dbt, 1);
              } else
                err(1);
              if (pos > tbts) {
                noSt && err(0);
                break;
              }
            }
            noBuf && cbuf(bt + 131072);
            const lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
            let lpos = pos;
            for (; ; lpos = pos) {
              const sym = (c = lm[bits16(dat, pos) & lms]) >>> 4;
              if (pos += 15 & c, pos > tbts) {
                noSt && err(0);
                break;
              }
              if (c || err(2), sym < 256)
                buf[bt++] = sym;
              else {
                if (256 === sym) {
                  lpos = pos, lm = null;
                  break;
                }
                {
                  let add2 = sym - 254;
                  if (sym > 264) {
                    var b = fleb[i2 = sym - 257];
                    add2 = bits(dat, pos, (1 << b) - 1) + fl[i2], pos += b;
                  }
                  const d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                  d || err(3), pos += 15 & d;
                  dt = fd[dsym];
                  if (dsym > 3) {
                    b = fdeb[dsym];
                    dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
                  }
                  if (pos > tbts) {
                    noSt && err(0);
                    break;
                  }
                  noBuf && cbuf(bt + 131072);
                  const end = bt + add2;
                  for (; bt < end; bt += 4)
                    buf[bt] = buf[bt - dt], buf[bt + 1] = buf[bt + 1 - dt], buf[bt + 2] = buf[bt + 2 - dt], buf[bt + 3] = buf[bt + 3 - dt];
                  bt = end;
                }
              }
            }
            st.l = lm, st.p = lpos, st.b = bt, st.f = final, lm && (final = 1, st.m = lbt, st.d = dm, st.n = dbt);
          } while (!final);
          return bt === buf.length ? buf : slc(buf, 0, bt);
        };
        var mrg = function(a, b) {
          const o = {};
          for (var k in a)
            o[k] = a[k];
          for (var k in b)
            o[k] = b[k];
          return o;
        };
        var wcln = function(fn, fnStr, td2) {
          const dt = fn(), st = fn.toString(), ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
          for (let i2 = 0; i2 < dt.length; ++i2) {
            const v = dt[i2], k = ks[i2];
            if ("function" == typeof v) {
              fnStr += ";" + k + "=";
              const st_1 = v.toString();
              if (v.prototype) {
                if (-1 !== st_1.indexOf("[native code]")) {
                  const spInd = st_1.indexOf(" ", 8) + 1;
                  fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
                } else {
                  fnStr += st_1;
                  for (const t in v.prototype)
                    fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
                }
              } else
                fnStr += st_1;
            } else
              td2[k] = v;
          }
          return [fnStr, td2];
        };
        var ch = [];
        var cbfs = function(v) {
          const tl = [];
          for (const k in v)
            v[k].buffer && tl.push((v[k] = new v[k].constructor(v[k])).buffer);
          return tl;
        };
        var wrkr = function(fns, init, id, cb) {
          let _a2;
          if (!ch[id]) {
            let fnStr = "", td_1 = {};
            const m = fns.length - 1;
            for (let i2 = 0; i2 < m; ++i2)
              _a2 = wcln(fns[i2], fnStr, td_1), fnStr = _a2[0], td_1 = _a2[1];
            ch[id] = wcln(fns[m], fnStr, td_1);
          }
          const td2 = mrg({}, ch[id][1]);
          return wk(ch[id][0] + ";onmessage=function(e){for(var kz in e.data)self[kz]=e.data[kz];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
        };
        var bInflt = function() {
          return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gu8];
        };
        var pbf = function(msg) {
          return postMessage(msg, [msg.buffer]);
        };
        var gu8 = function(o) {
          return o && o.size && new u8(o.size);
        };
        var cbify = function(dat, opts, fns, init, id, cb) {
          var w = wrkr(fns, init, id, function(err2, dat2) {
            w.terminate(), cb(err2, dat2);
          });
          return w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []), function() {
            w.terminate();
          };
        };
        var b2 = function(d, b) {
          return d[b] | d[b + 1] << 8;
        };
        var b4 = function(d, b) {
          return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
        };
        function inflate(data2, opts, cb) {
          return cb || (cb = opts, opts = {}), "function" != typeof cb && err(7), cbify(data2, opts, [bInflt], function(ev) {
            return pbf(inflateSync(ev.data[0], gu8(ev.data[1])));
          }, 1, cb);
        }
        function inflateSync(data2, out) {
          return inflt(data2, out);
        }
        var td = "undefined" != typeof TextDecoder && new TextDecoder();
        var dutf8 = function(d) {
          for (let r = "", i2 = 0; ; ) {
            let c = d[i2++];
            const eb = (c > 127) + (c > 223) + (c > 239);
            if (i2 + eb > d.length)
              return [r, slc(d, i2 - 1)];
            eb ? 3 === eb ? (c = ((15 & c) << 18 | (63 & d[i2++]) << 12 | (63 & d[i2++]) << 6 | 63 & d[i2++]) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)) : r += 1 & eb ? String.fromCharCode((31 & c) << 6 | 63 & d[i2++]) : String.fromCharCode((15 & c) << 12 | (63 & d[i2++]) << 6 | 63 & d[i2++]) : r += String.fromCharCode(c);
          }
        };
        function strFromU82(dat, latin1) {
          if (latin1) {
            let r = "";
            for (let i2 = 0; i2 < dat.length; i2 += 16384)
              r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
            return r;
          }
          if (td)
            return td.decode(dat);
          {
            const _a2 = dutf8(dat), out = _a2[0];
            return _a2[1].length && err(8), out;
          }
        }
        var slzh = function(d, b) {
          return b + 30 + b2(d, b + 26) + b2(d, b + 28);
        };
        var zh = function(d, b, z) {
          const fnl = b2(d, b + 28), fn = strFromU82(d.subarray(b + 46, b + 46 + fnl), !(2048 & b2(d, b + 8))), es = b + 46 + fnl, bs = b4(d, b + 20), _a2 = z && 4294967295 === bs ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
          return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
        };
        var mt = "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout ? setTimeout : function(fn) {
          fn();
        };
        function unzip2(data2, opts, cb) {
          cb || (cb = opts, opts = {}), "function" != typeof cb && err(7);
          const term = [], tAll = function() {
            for (let i2 = 0; i2 < term.length; ++i2)
              term[i2]();
          }, files = {};
          let cbd = function(a, b) {
            mt(function() {
              cb(a, b);
            });
          };
          mt(function() {
            cbd = cb;
          });
          let e = data2.length - 22;
          for (; 101010256 !== b4(data2, e); --e)
            if (!e || data2.length - e > 65558)
              return cbd(err(13, 0, 1), null), tAll;
          let lft = b2(data2, e + 8);
          if (lft) {
            let c = lft, o = b4(data2, e + 16), z = 4294967295 === o || 65535 === c;
            if (z) {
              const ze = b4(data2, e - 12);
              z = 101075792 === b4(data2, ze), z && (c = lft = b4(data2, ze + 32), o = b4(data2, ze + 48));
            }
            const fltr = opts && opts.filter, _loop_3 = function() {
              const _a2 = zh(data2, o, z), c_1 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data2, off);
              o = no;
              const cbl = function(e2, d) {
                e2 ? (tAll(), cbd(e2, null)) : (d && (files[fn] = d), --lft || cbd(null, files));
              };
              if (!fltr || fltr({
                name: fn,
                size: sc,
                originalSize: su,
                compression: c_1
              })) {
                if (c_1) {
                  if (8 === c_1) {
                    const infl = data2.subarray(b, b + sc);
                    if (sc < 32e4)
                      try {
                        cbl(null, inflateSync(infl, new u8(su)));
                      } catch (e2) {
                        cbl(e2, null);
                      }
                    else
                      term.push(inflate(infl, {
                        size: su
                      }, cbl));
                  } else
                    cbl(err(14, "unknown compression type " + c_1, 1), null);
                } else
                  cbl(null, slc(data2, b, b + sc));
              } else
                cbl(null, null);
            };
            for (let i2 = 0; i2 < c; ++i2)
              _loop_3(i2);
          } else
            cbd(null, {});
          return tAll;
        }
      }
    });
  
    // packages/systems/core/utils/LottieFetchUtils/index.ts
    var LottieFetchUtils_exports = {};
    __export(LottieFetchUtils_exports, {
      fetchLottie: () => fetchLottie,
      unZipDotLottie: () => unZipDotLottie
    });
    function parseManifest(data2) {
      const manifest = JSON.parse(data2);
      if (!("animations" in manifest)) {
        throw new Error("Manifest not found");
      }
      if (manifest.animations.length === 0) {
        throw new Error("No animations listed in the manifest");
      }
      return manifest;
    }
    function isBytesZip(bytes) {
      const b = new Uint8Array(bytes, 0, 32);
      return b[0] === 80 && b[1] === 75 && b[2] === 3 && b[3] === 4;
    }
    async function fetchRequest(url) {
      return await fetch(new URL(url).href).then((r) => r.arrayBuffer());
    }
    async function base64fromU8(data2) {
      const base64url = await new Promise(
        (resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(new Blob([data2]));
          reader.onload = () => resolve(reader.result);
        }
      );
      return base64url.split(",", 2)[1];
    }
    async function unZip(buffer) {
      const file = new Uint8Array(buffer);
      const lottieFile = await new Promise(
        (resolve, reject) => {
          (0, import_fflate.unzip)(
            file,
            (err, unzipped) => err ? reject(err) : resolve(unzipped)
          );
        }
      );
      return {
        // @ts-expect-error - TS2322 - Type 'string | Uint8Array | Uint16Array | Uint32Array' is not assignable to type 'string'.
        read: (path) => (0, import_fflate.strFromU8)(lottieFile[path]),
        readB64: async (path) => await base64fromU8(lottieFile[path])
      };
    }
    async function prepareLottieAssets(lottieJson, dotLottie) {
      if (!("assets" in lottieJson)) {
        return lottieJson;
      }
      async function parseAsset(asset) {
        const { p } = asset;
        if (p == null)
          return asset;
        if (dotLottie.read(`images/${p}`) == null)
          return asset;
        const ext = p.split(".").pop();
        const assetB64 = await dotLottie.readB64(`images/${p}`);
        if (ext?.startsWith("data:")) {
          asset.p = ext;
          asset.e = 1;
          return asset;
        }
        switch (ext) {
          case "svg":
          case "svg+xml":
            asset.p = `data:image/svg+xml;base64,${assetB64}`;
            break;
          case "png":
          case "jpg":
          case "jpeg":
          case "gif":
          case "webp":
            asset.p = `data:image/${ext};base64,${assetB64}`;
            break;
          default:
            asset.p = `data:;base64,${assetB64}`;
        }
        asset.e = 1;
        return asset;
      }
      const result = await Promise.all(lottieJson.assets.map(parseAsset));
      result.map((asset, i) => {
        lottieJson.assets[i] = asset;
      });
      return lottieJson;
    }
    async function unZipDotLottie(response) {
      const dotLottie = await unZip(response);
      const manifest = parseManifest(dotLottie.read("manifest.json"));
      const animations = await Promise.all(
        manifest.animations.map((a) => {
          const lottieJson = JSON.parse(dotLottie.read(`animations/${a.id}.json`));
          return prepareLottieAssets(lottieJson, dotLottie);
        })
      );
      return animations[0];
    }
    async function fetchLottie(url) {
      const response = await fetchRequest(url);
      if (isBytesZip(response)) {
        return await unZipDotLottie(response);
      }
      const lottieJson = JSON.parse(
        new TextDecoder().decode(response)
      );
      return lottieJson;
    }
    var import_fflate;
    var init_LottieFetchUtils = __esm({
      "packages/systems/core/utils/LottieFetchUtils/index.ts"() {
        import_fflate = __toESM(require_fflate_min());
      }
    });
  
    // shared/render/plugins/Animation/modules/LottieSiteModule.js
    var require_LottieSiteModule = __commonJS({
      "shared/render/plugins/Animation/modules/LottieSiteModule.js"(exports2) {
        "use strict";
        var _interopRequireDefault = require_interopRequireDefault().default;
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.ready = exports2.init = exports2.destroy = exports2.createInstance = exports2.cleanupElement = void 0;
        var _extends2 = _interopRequireDefault(require_extends());
        var _defineProperty2 = _interopRequireDefault(require_defineProperty());
        var _findIndex = _interopRequireDefault(require_findIndex());
        require_array3();
        var _LottieFetchUtils = (init_LottieFetchUtils(), __toCommonJS(LottieFetchUtils_exports));
        var getLottieLibrary = () => window.Webflow.require("lottie").lottie;
        var isInDesigner = () => Boolean(window.Webflow.env("design") || window.Webflow.env("preview"));
        var PlayerState = {
          Playing: "playing",
          Stopped: "stopped"
        };
        var Cache = class {
          constructor() {
            (0, _defineProperty2.default)(this, "_cache", []);
          }
          set(container, instance) {
            const index2 = (0, _findIndex.default)(this._cache, ({
              wrapper
            }) => wrapper === container);
            if (index2 !== -1)
              this._cache.splice(index2, 1);
            this._cache.push({
              wrapper: container,
              instance
            });
          }
          delete(container) {
            const index2 = (0, _findIndex.default)(this._cache, ({
              wrapper
            }) => wrapper === container);
            if (index2 !== -1)
              this._cache.splice(index2, 1);
          }
          get(container) {
            const index2 = (0, _findIndex.default)(this._cache, ({
              wrapper
            }) => wrapper === container);
            return index2 !== -1 ? this._cache[index2].instance : null;
          }
        };
        var cache = new Cache();
        var emptyObject = {};
        var LottieInstance = class {
          constructor() {
            (0, _defineProperty2.default)(this, "config", null);
            (0, _defineProperty2.default)(this, "currentState", PlayerState.Stopped);
            (0, _defineProperty2.default)(this, "handlers", {
              enterFrame: [],
              complete: [],
              loop: [],
              dataReady: [],
              destroy: [],
              error: []
            });
          }
          load(container) {
            const dataset = container.dataset || emptyObject;
            const src = dataset.src || "";
            if (src.endsWith(".lottie")) {
              (0, _LottieFetchUtils.fetchLottie)(src).then((animationData2) => {
                this._loadAnimation(container, animationData2);
              });
            } else {
              this._loadAnimation(container, void 0);
            }
            cache.set(container, this);
            this.container = container;
          }
          _loadAnimation(container, animationData2) {
            const dataset = container.dataset || emptyObject;
            const src = dataset.src || "";
            const preserveAspectRatio = dataset.preserveAspectRatio || "xMidYMid meet";
            const renderer2 = dataset.renderer || "svg";
            const loop = parseFloat(dataset.loop) === 1;
            const direction = parseFloat(dataset.direction) || 1;
            const autoplay = parseFloat(dataset.autoplay) === 1;
            const duration = parseFloat(dataset.duration) || 0;
            const hasIx2 = parseFloat(dataset.isIx2Target) === 1;
            let ix2InitialValue = parseFloat(dataset.ix2InitialState);
            if (isNaN(ix2InitialValue)) {
              ix2InitialValue = null;
            }
            const config = {
              src,
              loop,
              autoplay,
              renderer: renderer2,
              direction,
              duration,
              hasIx2,
              ix2InitialValue,
              preserveAspectRatio
            };
            if (this.animationItem && this.config && this.config.src === src && renderer2 === this.config.renderer && preserveAspectRatio === this.config.preserveAspectRatio) {
              if (loop !== this.config.loop) {
                this.setLooping(loop);
              }
              if (!hasIx2) {
                if (direction !== this.config.direction) {
                  this.setDirection(direction);
                }
                if (duration !== this.config.duration) {
                  if (duration > 0 && duration !== this.duration) {
                    this.setSpeed(this.duration / duration);
                  } else {
                    this.setSpeed(1);
                  }
                }
              }
              if (autoplay) {
                this.play();
              }
              if (ix2InitialValue && ix2InitialValue !== this.config.ix2InitialValue) {
                const percent = ix2InitialValue / 100;
                this.goToFrame(this.frames * percent);
              }
              this.config = config;
              return;
            }
            const options = {
              container,
              loop,
              autoplay,
              renderer: renderer2,
              rendererSettings: {
                preserveAspectRatio,
                progressiveLoad: true,
                hideOnTransparent: true
              }
            };
            try {
              if (this.animationItem) {
                this.destroy();
              }
              this.animationItem = getLottieLibrary().loadAnimation((0, _extends2.default)({}, options, animationData2 ? {
                animationData: animationData2
              } : {
                path: src
              }));
            } catch (err) {
              this.handlers.error.forEach((cb) => cb(err));
              return;
            }
            if (!this.animationItem)
              return;
            if (isInDesigner()) {
              this.animationItem.addEventListener("enterFrame", () => {
                if (!this.isPlaying)
                  return;
                const {
                  currentFrame,
                  totalFrames,
                  playDirection
                } = this.animationItem;
                const toPercent = currentFrame / totalFrames * 100;
                const percentage = Math.round(playDirection === 1 ? toPercent : 100 - toPercent);
                this.handlers.enterFrame.forEach((cb) => cb(percentage, currentFrame));
              });
              this.animationItem.addEventListener("complete", () => {
                if (this.currentState !== PlayerState.Playing) {
                  this.handlers.complete.forEach((cb) => cb());
                  return;
                }
                if (!this.animationItem.loop) {
                  this.handlers.complete.forEach((cb) => cb());
                  return;
                }
                this.currentState = PlayerState.Stopped;
              });
              this.animationItem.addEventListener("loopComplete", (loopComplete) => {
                this.handlers.loop.forEach((cb) => cb(loopComplete));
              });
              this.animationItem.addEventListener("data_failed", (err) => {
                this.handlers.error.forEach((cb) => cb(err));
              });
              this.animationItem.addEventListener("error", (err) => {
                this.handlers.error.forEach((cb) => cb(err));
              });
            }
            if (this.isLoaded) {
              this.handlers.dataReady.forEach((cb) => cb());
              if (autoplay) {
                this.play();
              }
            } else {
              this.animationItem.addEventListener("data_ready", () => {
                this.handlers.dataReady.forEach((cb) => cb());
                if (!hasIx2) {
                  this.setDirection(direction);
                  if (duration > 0 && duration !== this.duration) {
                    this.setSpeed(this.duration / duration);
                  }
                  if (autoplay) {
                    this.play();
                  }
                }
                if (ix2InitialValue) {
                  const percent = ix2InitialValue / 100;
                  this.goToFrame(this.frames * percent);
                }
              });
            }
            this.config = config;
          }
          onFrameChange(cb) {
            if (this.handlers.enterFrame.indexOf(cb) === -1) {
              this.handlers.enterFrame.push(cb);
            }
          }
          onPlaybackComplete(cb) {
            if (this.handlers.complete.indexOf(cb) === -1) {
              this.handlers.complete.push(cb);
            }
          }
          onLoopComplete(cb) {
            if (this.handlers.loop.indexOf(cb) === -1) {
              this.handlers.loop.push(cb);
            }
          }
          onDestroy(cb) {
            if (this.handlers.destroy.indexOf(cb) === -1) {
              this.handlers.destroy.push(cb);
            }
          }
          onDataReady(cb) {
            if (this.handlers.dataReady.indexOf(cb) === -1) {
              this.handlers.dataReady.push(cb);
            }
          }
          onError(cb) {
            if (this.handlers.error.indexOf(cb) === -1) {
              this.handlers.error.push(cb);
            }
          }
          play() {
            if (!this.animationItem)
              return;
            const frame = this.animationItem.playDirection === 1 ? 0 : this.frames;
            this.animationItem.goToAndPlay(frame, true);
            this.currentState = PlayerState.Playing;
          }
          stop() {
            if (!this.animationItem)
              return;
            if (this.isPlaying) {
              const {
                playDirection
              } = this.animationItem;
              const frame = playDirection === 1 ? 0 : this.frames;
              this.animationItem.goToAndStop(frame, true);
            }
            this.currentState = PlayerState.Stopped;
          }
          destroy() {
            if (!this.animationItem)
              return;
            if (this.isPlaying)
              this.stop();
            this.handlers.destroy.forEach((cb) => cb());
            if (this.container) {
              cache.delete(this.container);
            }
            this.animationItem.destroy();
            Object.keys(this.handlers).forEach((key2) => this.handlers[key2].length = 0);
            this.animationItem = null;
            this.container = null;
            this.config = null;
          }
          get isPlaying() {
            if (!this.animationItem)
              return false;
            return !this.animationItem.isPaused;
          }
          get isPaused() {
            if (!this.animationItem)
              return false;
            return this.animationItem.isPaused;
          }
          get duration() {
            if (!this.animationItem)
              return 0;
            return this.animationItem.getDuration();
          }
          get frames() {
            if (!this.animationItem)
              return 0;
            return this.animationItem.totalFrames;
          }
          get direction() {
            if (!this.animationItem)
              return 1;
            return this.animationItem.playDirection;
          }
          get isLoaded() {
            if (!this.animationItem)
              false;
            return this.animationItem.isLoaded;
          }
          get ix2InitialValue() {
            return this.config ? this.config.ix2InitialValue : null;
          }
          goToFrame(value2) {
            if (!this.animationItem)
              return;
            this.animationItem.setCurrentRawFrameValue(value2);
          }
          setSubframe(value2) {
            if (!this.animationItem)
              return;
            this.animationItem.setSubframe(value2);
          }
          setSpeed(value2 = 1) {
            if (!this.animationItem)
              return;
            if (this.isPlaying)
              this.stop();
            this.animationItem.setSpeed(value2);
          }
          setLooping(value2) {
            if (!this.animationItem)
              return;
            if (this.isPlaying)
              this.stop();
            this.animationItem.loop = value2;
          }
          setDirection(value2) {
            if (!this.animationItem)
              return;
            if (this.isPlaying)
              this.stop();
            this.animationItem.setDirection(value2);
            this.goToFrame(value2 === 1 ? 0 : this.frames);
          }
        };
        var getLottieElements = () => Array.from(document.querySelectorAll('[data-animation-type="lottie"]'));
        var createInstance = (container) => {
          let lottieInstance = cache.get(container);
          if (lottieInstance == null) {
            lottieInstance = new LottieInstance();
          }
          lottieInstance.load(container);
          return lottieInstance;
        };
        exports2.createInstance = createInstance;
        var cleanupElement = (element) => {
          const lottieInstance = cache.get(element);
          if (lottieInstance) {
            lottieInstance.destroy();
          }
        };
        exports2.cleanupElement = cleanupElement;
        var init = () => {
          getLottieElements().forEach((element) => {
            const hasIx2 = parseFloat(element.getAttribute("data-is-ix2-target")) === 1;
            if (!hasIx2) {
              cleanupElement(element);
            }
            createInstance(element);
          });
        };
        exports2.init = init;
        var destroy = () => {
          getLottieElements().forEach(cleanupElement);
        };
        exports2.destroy = destroy;
        var ready = init;
        exports2.ready = ready;
      }
    });
  
    // node_modules/lottie-web/build/player/lottie.min.js
    var require_lottie_min = __commonJS({
      "node_modules/lottie-web/build/player/lottie.min.js"(exports, module) {
        typeof navigator !== "undefined" && function(root, factory) {
          if (typeof define === "function" && define.amd) {
            define(function() {
              return factory(root);
            });
          } else if (typeof module === "object" && module.exports) {
            module.exports = factory(root);
          } else {
            root.lottie = factory(root);
            root.bodymovin = root.lottie;
          }
        }(window || {}, function(window) {
          "use strict";
          var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = true, idPrefix = "", expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bmRnd, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
          function ProjectInterface() {
            return {};
          }
          !function() {
            var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], r = e.length;
            for (t = 0; t < r; t += 1)
              BMMath[e[t]] = Math[e[t]];
          }(), BMMath.random = Math.random, BMMath.abs = function(t) {
            if ("object" === typeof t && t.length) {
              var e, r = createSizedArray(t.length), i = t.length;
              for (e = 0; e < i; e += 1)
                r[e] = Math.abs(t[e]);
              return r;
            }
            return Math.abs(t);
          };
          var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
          function roundValues(t) {
            bmRnd = t ? Math.round : function(t2) {
              return t2;
            };
          }
          function styleDiv(t) {
            t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
          }
          function BMEnterFrameEvent(t, e, r, i) {
            this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
          }
          function BMCompleteEvent(t, e) {
            this.type = t, this.direction = e < 0 ? -1 : 1;
          }
          function BMCompleteLoopEvent(t, e, r, i) {
            this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
          }
          function BMSegmentStartEvent(t, e, r) {
            this.type = t, this.firstFrame = e, this.totalFrames = r;
          }
          function BMDestroyEvent(t, e) {
            this.type = t, this.target = e;
          }
          function BMRenderFrameErrorEvent(t, e) {
            this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
          }
          function BMConfigErrorEvent(t) {
            this.type = "configError", this.nativeError = t;
          }
          function BMAnimationConfigErrorEvent(t, e) {
            this.type = t, this.nativeError = e;
          }
          roundValues(false);
          var createElementID = (F = 0, function() {
            return idPrefix + "__lottie_element_" + (F += 1);
          }), F;
          function HSVtoRGB(t, e, r) {
            var i, s, a, n, o, h, l, p;
            switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) {
              case 0:
                i = r, s = p, a = h;
                break;
              case 1:
                i = l, s = r, a = h;
                break;
              case 2:
                i = h, s = r, a = p;
                break;
              case 3:
                i = h, s = l, a = r;
                break;
              case 4:
                i = p, s = h, a = r;
                break;
              case 5:
                i = r, s = h, a = l;
            }
            return [i, s, a];
          }
          function RGBtoHSV(t, e, r) {
            var i, s = Math.max(t, e, r), a = Math.min(t, e, r), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255;
            switch (s) {
              case a:
                i = 0;
                break;
              case t:
                i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
                break;
              case e:
                i = r - t + 2 * n, i /= 6 * n;
                break;
              case r:
                i = t - e + 4 * n, i /= 6 * n;
            }
            return [i, o, h];
          }
          function addSaturationToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[1] += e, 1 < r[1] ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
          }
          function addBrightnessToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[2] += e, 1 < r[2] ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
          }
          function addHueToRGB(t, e) {
            var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
            return r[0] += e / 360, 1 < r[0] ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
          }
          var rgbToHex = function() {
            var t, e, i = [];
            for (t = 0; t < 256; t += 1)
              e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
            return function(t2, e2, r) {
              return t2 < 0 && (t2 = 0), e2 < 0 && (e2 = 0), r < 0 && (r = 0), "#" + i[t2] + i[e2] + i[r];
            };
          }();
          function BaseEvent() {
          }
          BaseEvent.prototype = { triggerEvent: function(t, e) {
            if (this._cbs[t])
              for (var r = this._cbs[t], i = 0; i < r.length; i += 1)
                r[i](e);
          }, addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function() {
              this.removeEventListener(t, e);
            }.bind(this);
          }, removeEventListener: function(t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, i = this._cbs[t].length; r < i; )
                  this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                this._cbs[t].length || (this._cbs[t] = null);
              }
            } else
              this._cbs[t] = null;
          } };
          var createTypedArray = function() {
            function r(t, e) {
              var r2, i = 0, s = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  r2 = 1;
                  break;
                default:
                  r2 = 1.1;
              }
              for (i = 0; i < e; i += 1)
                s.push(r2);
              return s;
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) {
              return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : r(t, e);
            } : r;
          }();
          function createSizedArray(t) {
            return Array.apply(null, { length: t });
          }
          function createNS(t) {
            return document.createElementNS(svgNS, t);
          }
          function createTag(t) {
            return document.createElement(t);
          }
          function DynamicPropertyContainer() {
          }
          DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = true);
          }, iterateDynamicProperties: function() {
            var t;
            this._mdf = false;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1)
              this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = true);
          }, initDynamicPropertyContainer: function(t) {
            this.container = t, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
          } };
          var getBlendMode = (Oa = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) {
            return Oa[t] || "";
          }), Oa, lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" }, Matrix = function() {
            var s = Math.cos, a = Math.sin, n = Math.tan, i = Math.round;
            function t() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function e(t2) {
              if (0 === t2)
                return this;
              var e2 = s(t2), r2 = a(t2);
              return this._t(e2, -r2, 0, 0, r2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function r(t2) {
              if (0 === t2)
                return this;
              var e2 = s(t2), r2 = a(t2);
              return this._t(1, 0, 0, 0, 0, e2, -r2, 0, 0, r2, e2, 0, 0, 0, 0, 1);
            }
            function o(t2) {
              if (0 === t2)
                return this;
              var e2 = s(t2), r2 = a(t2);
              return this._t(e2, 0, r2, 0, 0, 1, 0, 0, -r2, 0, e2, 0, 0, 0, 0, 1);
            }
            function h(t2) {
              if (0 === t2)
                return this;
              var e2 = s(t2), r2 = a(t2);
              return this._t(e2, -r2, 0, 0, r2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function l(t2, e2) {
              return this._t(1, e2, t2, 1, 0, 0);
            }
            function p(t2, e2) {
              return this.shear(n(t2), n(e2));
            }
            function m(t2, e2) {
              var r2 = s(e2), i2 = a(e2);
              return this._t(r2, i2, 0, 0, -i2, r2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(t2), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r2, -i2, 0, 0, i2, r2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function f(t2, e2, r2) {
              return r2 || 0 === r2 || (r2 = 1), 1 === t2 && 1 === e2 && 1 === r2 ? this : this._t(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, r2, 0, 0, 0, 0, 1);
            }
            function c(t2, e2, r2, i2, s2, a2, n2, o2, h2, l2, p2, m2, f2, c2, d2, u2) {
              return this.props[0] = t2, this.props[1] = e2, this.props[2] = r2, this.props[3] = i2, this.props[4] = s2, this.props[5] = a2, this.props[6] = n2, this.props[7] = o2, this.props[8] = h2, this.props[9] = l2, this.props[10] = p2, this.props[11] = m2, this.props[12] = f2, this.props[13] = c2, this.props[14] = d2, this.props[15] = u2, this;
            }
            function d(t2, e2, r2) {
              return r2 = r2 || 0, 0 !== t2 || 0 !== e2 || 0 !== r2 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, e2, r2, 1) : this;
            }
            function u(t2, e2, r2, i2, s2, a2, n2, o2, h2, l2, p2, m2, f2, c2, d2, u2) {
              var y2 = this.props;
              if (1 === t2 && 0 === e2 && 0 === r2 && 0 === i2 && 0 === s2 && 1 === a2 && 0 === n2 && 0 === o2 && 0 === h2 && 0 === l2 && 1 === p2 && 0 === m2)
                return y2[12] = y2[12] * t2 + y2[15] * f2, y2[13] = y2[13] * a2 + y2[15] * c2, y2[14] = y2[14] * p2 + y2[15] * d2, y2[15] *= u2, this._identityCalculated = false, this;
              var g2 = y2[0], v2 = y2[1], b2 = y2[2], P2 = y2[3], E2 = y2[4], x2 = y2[5], S2 = y2[6], A2 = y2[7], C2 = y2[8], T2 = y2[9], _2 = y2[10], k2 = y2[11], D2 = y2[12], M2 = y2[13], F3 = y2[14], w2 = y2[15];
              return y2[0] = g2 * t2 + v2 * s2 + b2 * h2 + P2 * f2, y2[1] = g2 * e2 + v2 * a2 + b2 * l2 + P2 * c2, y2[2] = g2 * r2 + v2 * n2 + b2 * p2 + P2 * d2, y2[3] = g2 * i2 + v2 * o2 + b2 * m2 + P2 * u2, y2[4] = E2 * t2 + x2 * s2 + S2 * h2 + A2 * f2, y2[5] = E2 * e2 + x2 * a2 + S2 * l2 + A2 * c2, y2[6] = E2 * r2 + x2 * n2 + S2 * p2 + A2 * d2, y2[7] = E2 * i2 + x2 * o2 + S2 * m2 + A2 * u2, y2[8] = C2 * t2 + T2 * s2 + _2 * h2 + k2 * f2, y2[9] = C2 * e2 + T2 * a2 + _2 * l2 + k2 * c2, y2[10] = C2 * r2 + T2 * n2 + _2 * p2 + k2 * d2, y2[11] = C2 * i2 + T2 * o2 + _2 * m2 + k2 * u2, y2[12] = D2 * t2 + M2 * s2 + F3 * h2 + w2 * f2, y2[13] = D2 * e2 + M2 * a2 + F3 * l2 + w2 * c2, y2[14] = D2 * r2 + M2 * n2 + F3 * p2 + w2 * d2, y2[15] = D2 * i2 + M2 * o2 + F3 * m2 + w2 * u2, this._identityCalculated = false, this;
            }
            function y() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = true), this._identity;
            }
            function g(t2) {
              for (var e2 = 0; e2 < 16; ) {
                if (t2.props[e2] !== this.props[e2])
                  return false;
                e2 += 1;
              }
              return true;
            }
            function v(t2) {
              var e2;
              for (e2 = 0; e2 < 16; e2 += 1)
                t2.props[e2] = this.props[e2];
              return t2;
            }
            function b(t2) {
              var e2;
              for (e2 = 0; e2 < 16; e2 += 1)
                this.props[e2] = t2[e2];
            }
            function P(t2, e2, r2) {
              return { x: t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12], y: t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13], z: t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14] };
            }
            function E(t2, e2, r2) {
              return t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12];
            }
            function x(t2, e2, r2) {
              return t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13];
            }
            function S(t2, e2, r2) {
              return t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14];
            }
            function A() {
              var t2 = this.props[0] * this.props[5] - this.props[1] * this.props[4], e2 = this.props[5] / t2, r2 = -this.props[1] / t2, i2 = -this.props[4] / t2, s2 = this.props[0] / t2, a2 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t2, n2 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t2, o2 = new Matrix();
              return o2.props[0] = e2, o2.props[1] = r2, o2.props[4] = i2, o2.props[5] = s2, o2.props[12] = a2, o2.props[13] = n2, o2;
            }
            function C(t2) {
              return this.getInverseMatrix().applyToPointArray(t2[0], t2[1], t2[2] || 0);
            }
            function T(t2) {
              var e2, r2 = t2.length, i2 = [];
              for (e2 = 0; e2 < r2; e2 += 1)
                i2[e2] = C(t2[e2]);
              return i2;
            }
            function _(t2, e2, r2) {
              var i2 = createTypedArray("float32", 6);
              if (this.isIdentity())
                i2[0] = t2[0], i2[1] = t2[1], i2[2] = e2[0], i2[3] = e2[1], i2[4] = r2[0], i2[5] = r2[1];
              else {
                var s2 = this.props[0], a2 = this.props[1], n2 = this.props[4], o2 = this.props[5], h2 = this.props[12], l2 = this.props[13];
                i2[0] = t2[0] * s2 + t2[1] * n2 + h2, i2[1] = t2[0] * a2 + t2[1] * o2 + l2, i2[2] = e2[0] * s2 + e2[1] * n2 + h2, i2[3] = e2[0] * a2 + e2[1] * o2 + l2, i2[4] = r2[0] * s2 + r2[1] * n2 + h2, i2[5] = r2[0] * a2 + r2[1] * o2 + l2;
              }
              return i2;
            }
            function k(t2, e2, r2) {
              return this.isIdentity() ? [t2, e2, r2] : [t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12], t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13], t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14]];
            }
            function D(t2, e2) {
              if (this.isIdentity())
                return t2 + "," + e2;
              var r2 = this.props;
              return Math.round(100 * (t2 * r2[0] + e2 * r2[4] + r2[12])) / 100 + "," + Math.round(100 * (t2 * r2[1] + e2 * r2[5] + r2[13])) / 100;
            }
            function M() {
              for (var t2 = 0, e2 = this.props, r2 = "matrix3d("; t2 < 16; )
                r2 += i(1e4 * e2[t2]) / 1e4, r2 += 15 === t2 ? ")" : ",", t2 += 1;
              return r2;
            }
            function F2(t2) {
              return t2 < 1e-6 && 0 < t2 || -1e-6 < t2 && t2 < 0 ? i(1e4 * t2) / 1e4 : t2;
            }
            function w() {
              var t2 = this.props;
              return "matrix(" + F2(t2[0]) + "," + F2(t2[1]) + "," + F2(t2[4]) + "," + F2(t2[5]) + "," + F2(t2[12]) + "," + F2(t2[13]) + ")";
            }
            return function() {
              this.reset = t, this.rotate = e, this.rotateX = r, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = m, this.shear = l, this.scale = f, this.setTransform = c, this.translate = d, this.transform = u, this.applyToPoint = P, this.applyToX = E, this.applyToY = x, this.applyToZ = S, this.applyToPointArray = k, this.applyToTriplePoints = _, this.applyToPointStringified = D, this.toCSS = M, this.to2dCSS = w, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = T, this.inversePoint = C, this.getInverseMatrix = A, this._t = this.transform, this.isIdentity = y, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
            };
          }();
          !function(o, h) {
            var l, p = this, m = 256, f = 6, c = "random", d = h.pow(m, f), u = h.pow(2, 52), y = 2 * u, g = m - 1;
            function v(t) {
              var e, r = t.length, n = this, i = 0, s = n.i = n.j = 0, a = n.S = [];
              for (r || (t = [r++]); i < m; )
                a[i] = i++;
              for (i = 0; i < m; i++)
                a[i] = a[s = g & s + t[i % r] + (e = a[i])], a[s] = e;
              n.g = function(t2) {
                for (var e2, r2 = 0, i2 = n.i, s2 = n.j, a2 = n.S; t2--; )
                  e2 = a2[i2 = g & i2 + 1], r2 = r2 * m + a2[g & (a2[i2] = a2[s2 = g & s2 + e2]) + (a2[s2] = e2)];
                return n.i = i2, n.j = s2, r2;
              };
            }
            function b(t, e) {
              return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e;
            }
            function P(t, e) {
              for (var r, i = t + "", s = 0; s < i.length; )
                e[g & s] = g & (r ^= 19 * e[g & s]) + i.charCodeAt(s++);
              return E(e);
            }
            function E(t) {
              return String.fromCharCode.apply(0, t);
            }
            h["seed" + c] = function(t, e, r) {
              var i = [], s = P(function t2(e2, r2) {
                var i2, s2 = [], a2 = typeof e2;
                if (r2 && "object" == a2)
                  for (i2 in e2)
                    try {
                      s2.push(t2(e2[i2], r2 - 1));
                    } catch (t3) {
                    }
                return s2.length ? s2 : "string" == a2 ? e2 : e2 + "\0";
              }((e = true === e ? { entropy: true } : e || {}).entropy ? [t, E(o)] : null === t ? function() {
                try {
                  if (l)
                    return E(l.randomBytes(m));
                  var t2 = new Uint8Array(m);
                  return (p.crypto || p.msCrypto).getRandomValues(t2), E(t2);
                } catch (t3) {
                  var e2 = p.navigator, r2 = e2 && e2.plugins;
                  return [+/* @__PURE__ */ new Date(), p, r2, p.screen, E(o)];
                }
              }() : t, 3), i), a = new v(i), n = function() {
                for (var t2 = a.g(f), e2 = d, r2 = 0; t2 < u; )
                  t2 = (t2 + r2) * m, e2 *= m, r2 = a.g(1);
                for (; y <= t2; )
                  t2 /= 2, e2 /= 2, r2 >>>= 1;
                return (t2 + r2) / e2;
              };
              return n.int32 = function() {
                return 0 | a.g(4);
              }, n.quick = function() {
                return a.g(4) / 4294967296;
              }, n.double = n, P(E(a.S), o), (e.pass || r || function(t2, e2, r2, i2) {
                return i2 && (i2.S && b(i2, a), t2.state = function() {
                  return b(a, {});
                }), r2 ? (h[c] = t2, e2) : t2;
              })(n, s, "global" in e ? e.global : this == h, e.state);
            }, P(h.random(), o);
          }([], BMMath);
          var BezierFactory = function() {
            var t = { getBezierEasing: function(t2, e2, r, i2, s2) {
              var a2 = s2 || ("bez_" + t2 + "_" + e2 + "_" + r + "_" + i2).replace(/\./g, "p");
              if (o[a2])
                return o[a2];
              var n = new h([t2, e2, r, i2]);
              return o[a2] = n;
            } }, o = {};
            var l = 11, p = 1 / (l - 1), e = "function" == typeof Float32Array;
            function i(t2, e2) {
              return 1 - 3 * e2 + 3 * t2;
            }
            function s(t2, e2) {
              return 3 * e2 - 6 * t2;
            }
            function a(t2) {
              return 3 * t2;
            }
            function m(t2, e2, r) {
              return ((i(e2, r) * t2 + s(e2, r)) * t2 + a(e2)) * t2;
            }
            function f(t2, e2, r) {
              return 3 * i(e2, r) * t2 * t2 + 2 * s(e2, r) * t2 + a(e2);
            }
            function h(t2) {
              this._p = t2, this._mSampleValues = e ? new Float32Array(l) : new Array(l), this._precomputed = false, this.get = this.get.bind(this);
            }
            return h.prototype = { get: function(t2) {
              var e2 = this._p[0], r = this._p[1], i2 = this._p[2], s2 = this._p[3];
              return this._precomputed || this._precompute(), e2 === r && i2 === s2 ? t2 : 0 === t2 ? 0 : 1 === t2 ? 1 : m(this._getTForX(t2), r, s2);
            }, _precompute: function() {
              var t2 = this._p[0], e2 = this._p[1], r = this._p[2], i2 = this._p[3];
              this._precomputed = true, t2 === e2 && r === i2 || this._calcSampleValues();
            }, _calcSampleValues: function() {
              for (var t2 = this._p[0], e2 = this._p[2], r = 0; r < l; ++r)
                this._mSampleValues[r] = m(r * p, t2, e2);
            }, _getTForX: function(t2) {
              for (var e2 = this._p[0], r = this._p[2], i2 = this._mSampleValues, s2 = 0, a2 = 1, n = l - 1; a2 !== n && i2[a2] <= t2; ++a2)
                s2 += p;
              var o2 = s2 + (t2 - i2[--a2]) / (i2[a2 + 1] - i2[a2]) * p, h2 = f(o2, e2, r);
              return 1e-3 <= h2 ? function(t3, e3, r2, i3) {
                for (var s3 = 0; s3 < 4; ++s3) {
                  var a3 = f(e3, r2, i3);
                  if (0 === a3)
                    return e3;
                  e3 -= (m(e3, r2, i3) - t3) / a3;
                }
                return e3;
              }(t2, o2, e2, r) : 0 === h2 ? o2 : function(t3, e3, r2, i3, s3) {
                for (var a3, n2, o3 = 0; 0 < (a3 = m(n2 = e3 + (r2 - e3) / 2, i3, s3) - t3) ? r2 = n2 : e3 = n2, 1e-7 < Math.abs(a3) && ++o3 < 10; )
                  ;
                return n2;
              }(t2, s2, s2 + p, e2, r);
            } }, t;
          }();
          function extendPrototype(t, e) {
            var r, i, s = t.length;
            for (r = 0; r < s; r += 1)
              for (var a in i = t[r].prototype)
                Object.prototype.hasOwnProperty.call(i, a) && (e.prototype[a] = i[a]);
          }
          function getDescriptor(t, e) {
            return Object.getOwnPropertyDescriptor(t, e);
          }
          function createProxyFunction(t) {
            function e() {
            }
            return e.prototype = t, e;
          }
          function bezFunction() {
            var D = Math;
            function y(t2, e, r, i, s, a) {
              var n = t2 * i + e * s + r * a - s * i - a * t2 - r * e;
              return -1e-3 < n && n < 1e-3;
            }
            var p = function(t2, e, r, i) {
              var s, a, n, o, h, l, p2 = defaultCurveSegments, m = 0, f = [], c = [], d = bezierLengthPool.newElement();
              for (n = r.length, s = 0; s < p2; s += 1) {
                for (h = s / (p2 - 1), a = l = 0; a < n; a += 1)
                  o = bmPow(1 - h, 3) * t2[a] + 3 * bmPow(1 - h, 2) * h * r[a] + 3 * (1 - h) * bmPow(h, 2) * i[a] + bmPow(h, 3) * e[a], f[a] = o, null !== c[a] && (l += bmPow(f[a] - c[a], 2)), c[a] = f[a];
                l && (m += l = bmSqrt(l)), d.percents[s] = h, d.lengths[s] = m;
              }
              return d.addedLength = m, d;
            };
            function g(t2) {
              this.segmentLength = 0, this.points = new Array(t2);
            }
            function v(t2, e) {
              this.partialLength = t2, this.point = e;
            }
            var b, t = (b = {}, function(t2, e, r, i) {
              var s = (t2[0] + "_" + t2[1] + "_" + e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + i[0] + "_" + i[1]).replace(/\./g, "p");
              if (!b[s]) {
                var a, n, o, h, l, p2, m, f = defaultCurveSegments, c = 0, d = null;
                2 === t2.length && (t2[0] !== e[0] || t2[1] !== e[1]) && y(t2[0], t2[1], e[0], e[1], t2[0] + r[0], t2[1] + r[1]) && y(t2[0], t2[1], e[0], e[1], e[0] + i[0], e[1] + i[1]) && (f = 2);
                var u = new g(f);
                for (o = r.length, a = 0; a < f; a += 1) {
                  for (m = createSizedArray(o), l = a / (f - 1), n = p2 = 0; n < o; n += 1)
                    h = bmPow(1 - l, 3) * t2[n] + 3 * bmPow(1 - l, 2) * l * (t2[n] + r[n]) + 3 * (1 - l) * bmPow(l, 2) * (e[n] + i[n]) + bmPow(l, 3) * e[n], m[n] = h, null !== d && (p2 += bmPow(m[n] - d[n], 2));
                  c += p2 = bmSqrt(p2), u.points[a] = new v(p2, m), d = m;
                }
                u.segmentLength = c, b[s] = u;
              }
              return b[s];
            });
            function M(t2, e) {
              var r = e.percents, i = e.lengths, s = r.length, a = bmFloor((s - 1) * t2), n = t2 * e.addedLength, o = 0;
              if (a === s - 1 || 0 === a || n === i[a])
                return r[a];
              for (var h = i[a] > n ? -1 : 1, l = true; l; )
                if (i[a] <= n && i[a + 1] > n ? (o = (n - i[a]) / (i[a + 1] - i[a]), l = false) : a += h, a < 0 || s - 1 <= a) {
                  if (a === s - 1)
                    return r[a];
                  l = false;
                }
              return r[a] + (r[a + 1] - r[a]) * o;
            }
            var F2 = createTypedArray("float32", 8);
            return { getSegmentsLength: function(t2) {
              var e, r = segmentsLengthPool.newElement(), i = t2.c, s = t2.v, a = t2.o, n = t2.i, o = t2._length, h = r.lengths, l = 0;
              for (e = 0; e < o - 1; e += 1)
                h[e] = p(s[e], s[e + 1], a[e], n[e + 1]), l += h[e].addedLength;
              return i && o && (h[e] = p(s[e], s[0], a[e], n[0]), l += h[e].addedLength), r.totalLength = l, r;
            }, getNewSegment: function(t2, e, r, i, s, a, n) {
              s < 0 ? s = 0 : 1 < s && (s = 1);
              var o, h = M(s, n), l = M(a = 1 < a ? 1 : a, n), p2 = t2.length, m = 1 - h, f = 1 - l, c = m * m * m, d = h * m * m * 3, u = h * h * m * 3, y2 = h * h * h, g2 = m * m * f, v2 = h * m * f + m * h * f + m * m * l, b2 = h * h * f + m * h * l + h * m * l, P = h * h * l, E = m * f * f, x = h * f * f + m * l * f + m * f * l, S = h * l * f + m * l * l + h * f * l, A = h * l * l, C = f * f * f, T = l * f * f + f * l * f + f * f * l, _ = l * l * f + f * l * l + l * f * l, k = l * l * l;
              for (o = 0; o < p2; o += 1)
                F2[4 * o] = D.round(1e3 * (c * t2[o] + d * r[o] + u * i[o] + y2 * e[o])) / 1e3, F2[4 * o + 1] = D.round(1e3 * (g2 * t2[o] + v2 * r[o] + b2 * i[o] + P * e[o])) / 1e3, F2[4 * o + 2] = D.round(1e3 * (E * t2[o] + x * r[o] + S * i[o] + A * e[o])) / 1e3, F2[4 * o + 3] = D.round(1e3 * (C * t2[o] + T * r[o] + _ * i[o] + k * e[o])) / 1e3;
              return F2;
            }, getPointInSegment: function(t2, e, r, i, s, a) {
              var n = M(s, a), o = 1 - n;
              return [D.round(1e3 * (o * o * o * t2[0] + (n * o * o + o * n * o + o * o * n) * r[0] + (n * n * o + o * n * n + n * o * n) * i[0] + n * n * n * e[0])) / 1e3, D.round(1e3 * (o * o * o * t2[1] + (n * o * o + o * n * o + o * o * n) * r[1] + (n * n * o + o * n * n + n * o * n) * i[1] + n * n * n * e[1])) / 1e3];
            }, buildBezierData: t, pointOnLine2D: y, pointOnLine3D: function(t2, e, r, i, s, a, n, o, h) {
              if (0 === r && 0 === a && 0 === h)
                return y(t2, e, i, s, n, o);
              var l, p2 = D.sqrt(D.pow(i - t2, 2) + D.pow(s - e, 2) + D.pow(a - r, 2)), m = D.sqrt(D.pow(n - t2, 2) + D.pow(o - e, 2) + D.pow(h - r, 2)), f = D.sqrt(D.pow(n - i, 2) + D.pow(o - s, 2) + D.pow(h - a, 2));
              return -1e-4 < (l = m < p2 ? f < p2 ? p2 - m - f : f - m - p2 : m < f ? f - m - p2 : m - p2 - f) && l < 1e-4;
            } };
          }
          !function() {
            for (var s = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)
              window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(t2) {
              var e2 = (/* @__PURE__ */ new Date()).getTime(), r = Math.max(0, 16 - (e2 - s)), i = setTimeout(function() {
                t2(e2 + r);
              }, r);
              return s = e2 + r, i;
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t2) {
              clearTimeout(t2);
            });
          }();
          var bez = bezFunction();
          function dataFunctionManager() {
            function m(t2, e, r2) {
              var i2, s2, a2, n, o2, h2, l = t2.length;
              for (s2 = 0; s2 < l; s2 += 1)
                if ("ks" in (i2 = t2[s2]) && !i2.completed) {
                  if (i2.completed = true, i2.tt && (t2[s2 - 1].td = i2.tt), i2.hasMask) {
                    var p = i2.masksProperties;
                    for (n = p.length, a2 = 0; a2 < n; a2 += 1)
                      if (p[a2].pt.k.i)
                        d(p[a2].pt.k);
                      else
                        for (h2 = p[a2].pt.k.length, o2 = 0; o2 < h2; o2 += 1)
                          p[a2].pt.k[o2].s && d(p[a2].pt.k[o2].s[0]), p[a2].pt.k[o2].e && d(p[a2].pt.k[o2].e[0]);
                  }
                  0 === i2.ty ? (i2.layers = f(i2.refId, e), m(i2.layers, e, r2)) : 4 === i2.ty ? c(i2.shapes) : 5 === i2.ty && u(i2);
                }
            }
            function f(t2, e) {
              for (var r2 = 0, i2 = e.length; r2 < i2; ) {
                if (e[r2].id === t2)
                  return e[r2].layers.__used ? JSON.parse(JSON.stringify(e[r2].layers)) : (e[r2].layers.__used = true, e[r2].layers);
                r2 += 1;
              }
              return null;
            }
            function c(t2) {
              var e, r2, i2;
              for (e = t2.length - 1; 0 <= e; e -= 1)
                if ("sh" === t2[e].ty)
                  if (t2[e].ks.k.i)
                    d(t2[e].ks.k);
                  else
                    for (i2 = t2[e].ks.k.length, r2 = 0; r2 < i2; r2 += 1)
                      t2[e].ks.k[r2].s && d(t2[e].ks.k[r2].s[0]), t2[e].ks.k[r2].e && d(t2[e].ks.k[r2].e[0]);
                else
                  "gr" === t2[e].ty && c(t2[e].it);
            }
            function d(t2) {
              var e, r2 = t2.i.length;
              for (e = 0; e < r2; e += 1)
                t2.i[e][0] += t2.v[e][0], t2.i[e][1] += t2.v[e][1], t2.o[e][0] += t2.v[e][0], t2.o[e][1] += t2.v[e][1];
            }
            function o(t2, e) {
              var r2 = e ? e.split(".") : [100, 100, 100];
              return t2[0] > r2[0] || !(r2[0] > t2[0]) && (t2[1] > r2[1] || !(r2[1] > t2[1]) && (t2[2] > r2[2] || !(r2[2] > t2[2]) && null));
            }
            var h, r = function() {
              var i2 = [4, 4, 14];
              function s2(t2) {
                var e, r2, i3, s3 = t2.length;
                for (e = 0; e < s3; e += 1)
                  5 === t2[e].ty && (r2 = t2[e], void 0, i3 = r2.t.d, r2.t.d = { k: [{ s: i3, t: 0 }] });
              }
              return function(t2) {
                if (o(i2, t2.v) && (s2(t2.layers), t2.assets)) {
                  var e, r2 = t2.assets.length;
                  for (e = 0; e < r2; e += 1)
                    t2.assets[e].layers && s2(t2.assets[e].layers);
                }
              };
            }(), i = (h = [4, 7, 99], function(t2) {
              if (t2.chars && !o(h, t2.v)) {
                var e, r2, i2, s2, a2, n = t2.chars.length;
                for (e = 0; e < n; e += 1)
                  if (t2.chars[e].data && t2.chars[e].data.shapes)
                    for (i2 = (a2 = t2.chars[e].data.shapes[0].it).length, r2 = 0; r2 < i2; r2 += 1)
                      (s2 = a2[r2].ks.k).__converted || (d(a2[r2].ks.k), s2.__converted = true);
              }
            }), s = function() {
              var i2 = [4, 1, 9];
              function a2(t2) {
                var e, r2, i3, s3 = t2.length;
                for (e = 0; e < s3; e += 1)
                  if ("gr" === t2[e].ty)
                    a2(t2[e].it);
                  else if ("fl" === t2[e].ty || "st" === t2[e].ty)
                    if (t2[e].c.k && t2[e].c.k[0].i)
                      for (i3 = t2[e].c.k.length, r2 = 0; r2 < i3; r2 += 1)
                        t2[e].c.k[r2].s && (t2[e].c.k[r2].s[0] /= 255, t2[e].c.k[r2].s[1] /= 255, t2[e].c.k[r2].s[2] /= 255, t2[e].c.k[r2].s[3] /= 255), t2[e].c.k[r2].e && (t2[e].c.k[r2].e[0] /= 255, t2[e].c.k[r2].e[1] /= 255, t2[e].c.k[r2].e[2] /= 255, t2[e].c.k[r2].e[3] /= 255);
                    else
                      t2[e].c.k[0] /= 255, t2[e].c.k[1] /= 255, t2[e].c.k[2] /= 255, t2[e].c.k[3] /= 255;
              }
              function s2(t2) {
                var e, r2 = t2.length;
                for (e = 0; e < r2; e += 1)
                  4 === t2[e].ty && a2(t2[e].shapes);
              }
              return function(t2) {
                if (o(i2, t2.v) && (s2(t2.layers), t2.assets)) {
                  var e, r2 = t2.assets.length;
                  for (e = 0; e < r2; e += 1)
                    t2.assets[e].layers && s2(t2.assets[e].layers);
                }
              };
            }(), a = function() {
              var i2 = [4, 4, 18];
              function l(t2) {
                var e, r2, i3;
                for (e = t2.length - 1; 0 <= e; e -= 1)
                  if ("sh" === t2[e].ty)
                    if (t2[e].ks.k.i)
                      t2[e].ks.k.c = t2[e].closed;
                    else
                      for (i3 = t2[e].ks.k.length, r2 = 0; r2 < i3; r2 += 1)
                        t2[e].ks.k[r2].s && (t2[e].ks.k[r2].s[0].c = t2[e].closed), t2[e].ks.k[r2].e && (t2[e].ks.k[r2].e[0].c = t2[e].closed);
                  else
                    "gr" === t2[e].ty && l(t2[e].it);
              }
              function s2(t2) {
                var e, r2, i3, s3, a2, n, o2 = t2.length;
                for (r2 = 0; r2 < o2; r2 += 1) {
                  if ((e = t2[r2]).hasMask) {
                    var h2 = e.masksProperties;
                    for (s3 = h2.length, i3 = 0; i3 < s3; i3 += 1)
                      if (h2[i3].pt.k.i)
                        h2[i3].pt.k.c = h2[i3].cl;
                      else
                        for (n = h2[i3].pt.k.length, a2 = 0; a2 < n; a2 += 1)
                          h2[i3].pt.k[a2].s && (h2[i3].pt.k[a2].s[0].c = h2[i3].cl), h2[i3].pt.k[a2].e && (h2[i3].pt.k[a2].e[0].c = h2[i3].cl);
                  }
                  4 === e.ty && l(e.shapes);
                }
              }
              return function(t2) {
                if (o(i2, t2.v) && (s2(t2.layers), t2.assets)) {
                  var e, r2 = t2.assets.length;
                  for (e = 0; e < r2; e += 1)
                    t2.assets[e].layers && s2(t2.assets[e].layers);
                }
              };
            }();
            function u(t2) {
              0 !== t2.t.a.length || "m" in t2.t.p || (t2.singleShape = true);
            }
            var t = { completeData: function(t2, e) {
              t2.__complete || (s(t2), r(t2), i(t2), a(t2), m(t2.layers, t2.assets, e), t2.__complete = true);
            } };
            return t.checkColors = s, t.checkChars = i, t.checkShapes = a, t.completeLayers = m, t;
          }
          var dataManager = dataFunctionManager();
          function getFontProperties(t) {
            for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a = 0; a < s; a += 1)
              switch (e[a].toLowerCase()) {
                case "italic":
                  i = "italic";
                  break;
                case "bold":
                  r = "700";
                  break;
                case "black":
                  r = "900";
                  break;
                case "medium":
                  r = "500";
                  break;
                case "regular":
                case "normal":
                  r = "400";
                  break;
                case "light":
                case "thin":
                  r = "200";
              }
            return { style: i, weight: t.fWeight || r };
          }
          var FontManager = function() {
            var a = { w: 0, size: 0, shapes: [] }, e = [];
            e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"], r = [65039, 8205];
            function f(t2, e2) {
              var r2 = createTag("span");
              r2.setAttribute("aria-hidden", true), r2.style.fontFamily = e2;
              var i2 = createTag("span");
              i2.innerText = "giItT1WQy@!-/#", r2.style.position = "absolute", r2.style.left = "-10000px", r2.style.top = "-10000px", r2.style.fontSize = "300px", r2.style.fontVariant = "normal", r2.style.fontStyle = "normal", r2.style.fontWeight = "normal", r2.style.letterSpacing = "0", r2.appendChild(i2), document.body.appendChild(r2);
              var s = i2.offsetWidth;
              return i2.style.fontFamily = function(t3) {
                var e3, r3 = t3.split(","), i3 = r3.length, s2 = [];
                for (e3 = 0; e3 < i3; e3 += 1)
                  "sans-serif" !== r3[e3] && "monospace" !== r3[e3] && s2.push(r3[e3]);
                return s2.join(",");
              }(t2) + ", " + e2, { node: i2, w: s, parent: r2 };
            }
            function c(t2, e2) {
              var r2 = createNS("text");
              r2.style.fontSize = "100px";
              var i2 = getFontProperties(e2);
              return r2.setAttribute("font-family", e2.fFamily), r2.setAttribute("font-style", i2.style), r2.setAttribute("font-weight", i2.weight), r2.textContent = "1", e2.fClass ? (r2.style.fontFamily = "inherit", r2.setAttribute("class", e2.fClass)) : r2.style.fontFamily = e2.fFamily, t2.appendChild(r2), createTag("canvas").getContext("2d").font = e2.fWeight + " " + e2.fStyle + " 100px " + e2.fFamily, r2;
            }
            var t = function() {
              this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            return t.isModifier = function(t2, e2) {
              var r2 = t2.toString(16) + e2.toString(16);
              return -1 !== i.indexOf(r2);
            }, t.isZeroWidthJoiner = function(t2, e2) {
              return e2 ? t2 === r[0] && e2 === r[1] : t2 === r[1];
            }, t.isCombinedCharacter = function(t2) {
              return -1 !== e.indexOf(t2);
            }, t.prototype = { addChars: function(t2) {
              if (t2) {
                var e2;
                this.chars || (this.chars = []);
                var r2, i2, s = t2.length, a2 = this.chars.length;
                for (e2 = 0; e2 < s; e2 += 1) {
                  for (r2 = 0, i2 = false; r2 < a2; )
                    this.chars[r2].style === t2[e2].style && this.chars[r2].fFamily === t2[e2].fFamily && this.chars[r2].ch === t2[e2].ch && (i2 = true), r2 += 1;
                  i2 || (this.chars.push(t2[e2]), a2 += 1);
                }
              }
            }, addFonts: function(t2, e2) {
              if (t2) {
                if (this.chars)
                  return this.isLoaded = true, void (this.fonts = t2.list);
                var r2, i2 = t2.list, s = i2.length, a2 = s;
                for (r2 = 0; r2 < s; r2 += 1) {
                  var n, o, h = true;
                  if (i2[r2].loaded = false, i2[r2].monoCase = f(i2[r2].fFamily, "monospace"), i2[r2].sansCase = f(i2[r2].fFamily, "sans-serif"), i2[r2].fPath) {
                    if ("p" === i2[r2].fOrigin || 3 === i2[r2].origin) {
                      if (0 < (n = document.querySelectorAll('style[f-forigin="p"][f-family="' + i2[r2].fFamily + '"], style[f-origin="3"][f-family="' + i2[r2].fFamily + '"]')).length && (h = false), h) {
                        var l = createTag("style");
                        l.setAttribute("f-forigin", i2[r2].fOrigin), l.setAttribute("f-origin", i2[r2].origin), l.setAttribute("f-family", i2[r2].fFamily), l.type = "text/css", l.innerText = "@font-face {font-family: " + i2[r2].fFamily + "; font-style: normal; src: url('" + i2[r2].fPath + "');}", e2.appendChild(l);
                      }
                    } else if ("g" === i2[r2].fOrigin || 1 === i2[r2].origin) {
                      for (n = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), o = 0; o < n.length; o += 1)
                        -1 !== n[o].href.indexOf(i2[r2].fPath) && (h = false);
                      if (h) {
                        var p = createTag("link");
                        p.setAttribute("f-forigin", i2[r2].fOrigin), p.setAttribute("f-origin", i2[r2].origin), p.type = "text/css", p.rel = "stylesheet", p.href = i2[r2].fPath, document.body.appendChild(p);
                      }
                    } else if ("t" === i2[r2].fOrigin || 2 === i2[r2].origin) {
                      for (n = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), o = 0; o < n.length; o += 1)
                        i2[r2].fPath === n[o].src && (h = false);
                      if (h) {
                        var m = createTag("link");
                        m.setAttribute("f-forigin", i2[r2].fOrigin), m.setAttribute("f-origin", i2[r2].origin), m.setAttribute("rel", "stylesheet"), m.setAttribute("href", i2[r2].fPath), e2.appendChild(m);
                      }
                    }
                  } else
                    i2[r2].loaded = true, a2 -= 1;
                  i2[r2].helper = c(e2, i2[r2]), i2[r2].cache = {}, this.fonts.push(i2[r2]);
                }
                0 === a2 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
              } else
                this.isLoaded = true;
            }, getCharData: function(t2, e2, r2) {
              for (var i2 = 0, s = this.chars.length; i2 < s; ) {
                if (this.chars[i2].ch === t2 && this.chars[i2].style === e2 && this.chars[i2].fFamily === r2)
                  return this.chars[i2];
                i2 += 1;
              }
              return ("string" == typeof t2 && 13 !== t2.charCodeAt(0) || !t2) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", t2, e2, r2)), a;
            }, getFontByName: function(t2) {
              for (var e2 = 0, r2 = this.fonts.length; e2 < r2; ) {
                if (this.fonts[e2].fName === t2)
                  return this.fonts[e2];
                e2 += 1;
              }
              return this.fonts[0];
            }, measureText: function(t2, e2, r2) {
              var i2 = this.getFontByName(e2), s = t2.charCodeAt(0);
              if (!i2.cache[s + 1]) {
                var a2 = i2.helper;
                if (" " === t2) {
                  a2.textContent = "|" + t2 + "|";
                  var n = a2.getComputedTextLength();
                  a2.textContent = "||";
                  var o = a2.getComputedTextLength();
                  i2.cache[s + 1] = (n - o) / 100;
                } else
                  a2.textContent = t2, i2.cache[s + 1] = a2.getComputedTextLength() / 100;
              }
              return i2.cache[s + 1] * r2;
            }, checkLoadedFonts: function() {
              var t2, e2, r2, i2 = this.fonts.length, s = i2;
              for (t2 = 0; t2 < i2; t2 += 1)
                this.fonts[t2].loaded ? s -= 1 : "n" === this.fonts[t2].fOrigin || 0 === this.fonts[t2].origin ? this.fonts[t2].loaded = true : (e2 = this.fonts[t2].monoCase.node, r2 = this.fonts[t2].monoCase.w, e2.offsetWidth !== r2 ? (s -= 1, this.fonts[t2].loaded = true) : (e2 = this.fonts[t2].sansCase.node, r2 = this.fonts[t2].sansCase.w, e2.offsetWidth !== r2 && (s -= 1, this.fonts[t2].loaded = true)), this.fonts[t2].loaded && (this.fonts[t2].sansCase.parent.parentNode.removeChild(this.fonts[t2].sansCase.parent), this.fonts[t2].monoCase.parent.parentNode.removeChild(this.fonts[t2].monoCase.parent)));
              0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }, setIsLoaded: function() {
              this.isLoaded = true;
            } }, t;
          }(), PropertyFactory = function() {
            var m = initialDefaultFrame, s = Math.abs;
            function f(t, e) {
              var r, i = this.offsetTime;
              "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
              for (var s2, a, n2, o2, h2, l2, p, m2, f2 = e.lastIndex, c2 = f2, d2 = this.keyframes.length - 1, u2 = true; u2; ) {
                if (s2 = this.keyframes[c2], a = this.keyframes[c2 + 1], c2 === d2 - 1 && t >= a.t - i) {
                  s2.h && (s2 = a), f2 = 0;
                  break;
                }
                if (a.t - i > t) {
                  f2 = c2;
                  break;
                }
                c2 < d2 - 1 ? c2 += 1 : (f2 = 0, u2 = false);
              }
              var y2, g, v, b, P, E, x, S, A, C, T = a.t - i, _ = s2.t - i;
              if (s2.to) {
                s2.bezierData || (s2.bezierData = bez.buildBezierData(s2.s, a.s || s2.e, s2.to, s2.ti));
                var k = s2.bezierData;
                if (T <= t || t < _) {
                  var D = T <= t ? k.points.length - 1 : 0;
                  for (o2 = k.points[D].point.length, n2 = 0; n2 < o2; n2 += 1)
                    r[n2] = k.points[D].point[n2];
                } else {
                  s2.__fnct ? m2 = s2.__fnct : (m2 = BezierFactory.getBezierEasing(s2.o.x, s2.o.y, s2.i.x, s2.i.y, s2.n).get, s2.__fnct = m2), h2 = m2((t - _) / (T - _));
                  var M, F2 = k.segmentLength * h2, w = e.lastFrame < t && e._lastKeyframeIndex === c2 ? e._lastAddedLength : 0;
                  for (p = e.lastFrame < t && e._lastKeyframeIndex === c2 ? e._lastPoint : 0, u2 = true, l2 = k.points.length; u2; ) {
                    if (w += k.points[p].partialLength, 0 === F2 || 0 === h2 || p === k.points.length - 1) {
                      for (o2 = k.points[p].point.length, n2 = 0; n2 < o2; n2 += 1)
                        r[n2] = k.points[p].point[n2];
                      break;
                    }
                    if (w <= F2 && F2 < w + k.points[p + 1].partialLength) {
                      for (M = (F2 - w) / k.points[p + 1].partialLength, o2 = k.points[p].point.length, n2 = 0; n2 < o2; n2 += 1)
                        r[n2] = k.points[p].point[n2] + (k.points[p + 1].point[n2] - k.points[p].point[n2]) * M;
                      break;
                    }
                    p < l2 - 1 ? p += 1 : u2 = false;
                  }
                  e._lastPoint = p, e._lastAddedLength = w - k.points[p].partialLength, e._lastKeyframeIndex = c2;
                }
              } else {
                var I, V, B, R, L;
                if (d2 = s2.s.length, y2 = a.s || s2.e, this.sh && 1 !== s2.h)
                  if (T <= t)
                    r[0] = y2[0], r[1] = y2[1], r[2] = y2[2];
                  else if (t <= _)
                    r[0] = s2.s[0], r[1] = s2.s[1], r[2] = s2.s[2];
                  else {
                    var G = N(s2.s), z = N(y2);
                    g = r, v = function(t2, e2, r2) {
                      var i2, s3, a2, n3, o3, h3 = [], l3 = t2[0], p2 = t2[1], m3 = t2[2], f3 = t2[3], c3 = e2[0], d3 = e2[1], u3 = e2[2], y3 = e2[3];
                      (s3 = l3 * c3 + p2 * d3 + m3 * u3 + f3 * y3) < 0 && (s3 = -s3, c3 = -c3, d3 = -d3, u3 = -u3, y3 = -y3);
                      o3 = 1e-6 < 1 - s3 ? (i2 = Math.acos(s3), a2 = Math.sin(i2), n3 = Math.sin((1 - r2) * i2) / a2, Math.sin(r2 * i2) / a2) : (n3 = 1 - r2, r2);
                      return h3[0] = n3 * l3 + o3 * c3, h3[1] = n3 * p2 + o3 * d3, h3[2] = n3 * m3 + o3 * u3, h3[3] = n3 * f3 + o3 * y3, h3;
                    }(G, z, (t - _) / (T - _)), b = v[0], P = v[1], E = v[2], x = v[3], S = Math.atan2(2 * P * x - 2 * b * E, 1 - 2 * P * P - 2 * E * E), A = Math.asin(2 * b * P + 2 * E * x), C = Math.atan2(2 * b * x - 2 * P * E, 1 - 2 * b * b - 2 * E * E), g[0] = S / degToRads, g[1] = A / degToRads, g[2] = C / degToRads;
                  }
                else
                  for (c2 = 0; c2 < d2; c2 += 1)
                    1 !== s2.h && (h2 = T <= t ? 1 : t < _ ? 0 : (s2.o.x.constructor === Array ? (s2.__fnct || (s2.__fnct = []), s2.__fnct[c2] ? m2 = s2.__fnct[c2] : (I = void 0 === s2.o.x[c2] ? s2.o.x[0] : s2.o.x[c2], V = void 0 === s2.o.y[c2] ? s2.o.y[0] : s2.o.y[c2], B = void 0 === s2.i.x[c2] ? s2.i.x[0] : s2.i.x[c2], R = void 0 === s2.i.y[c2] ? s2.i.y[0] : s2.i.y[c2], m2 = BezierFactory.getBezierEasing(I, V, B, R).get, s2.__fnct[c2] = m2)) : s2.__fnct ? m2 = s2.__fnct : (I = s2.o.x, V = s2.o.y, B = s2.i.x, R = s2.i.y, m2 = BezierFactory.getBezierEasing(I, V, B, R).get, s2.__fnct = m2), m2((t - _) / (T - _)))), y2 = a.s || s2.e, L = 1 === s2.h ? s2.s[c2] : s2.s[c2] + (y2[c2] - s2.s[c2]) * h2, "multidimensional" === this.propType ? r[c2] = L : r = L;
              }
              return e.lastIndex = f2, r;
            }
            function N(t) {
              var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s2 = Math.cos(e / 2), a = Math.cos(r / 2), n2 = Math.cos(i / 2), o2 = Math.sin(e / 2), h2 = Math.sin(r / 2), l2 = Math.sin(i / 2);
              return [o2 * h2 * n2 + s2 * a * l2, o2 * a * n2 + s2 * h2 * l2, s2 * h2 * n2 - o2 * a * l2, s2 * a * n2 - o2 * h2 * l2];
            }
            function c() {
              var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
              if (!(t === this._caching.lastFrame || this._caching.lastFrame !== m && (this._caching.lastFrame >= r && r <= t || this._caching.lastFrame < e && t < e))) {
                this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                var i = this.interpolateValue(t, this._caching);
                this.pv = i;
              }
              return this._caching.lastFrame = t, this.pv;
            }
            function d(t) {
              var e;
              if ("unidimensional" === this.propType)
                e = t * this.mult, 1e-5 < s(this.v - e) && (this.v = e, this._mdf = true);
              else
                for (var r = 0, i = this.v.length; r < i; )
                  e = t[r] * this.mult, 1e-5 < s(this.v[r] - e) && (this.v[r] = e, this._mdf = true), r += 1;
            }
            function u() {
              if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                if (this.lock)
                  this.setVValue(this.pv);
                else {
                  var t;
                  this.lock = true, this._mdf = this._isFirstFrame;
                  var e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
                  for (t = 0; t < e; t += 1)
                    r = this.effectsSequence[t](r);
                  this.setVValue(r), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
                }
            }
            function y(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this);
            }
            function n(t, e, r, i) {
              this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = i, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = u, this.setVValue = d, this.addEffect = y;
            }
            function o(t, e, r, i) {
              var s2;
              this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = false, this.elem = t, this.container = i, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
              var a = e.k.length;
              for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s2 = 0; s2 < a; s2 += 1)
                this.v[s2] = e.k[s2] * this.mult, this.pv[s2] = e.k[s2];
              this._isFirstFrame = true, this.effectsSequence = [], this.getValue = u, this.setVValue = d, this.addEffect = y;
            }
            function h(t, e, r, i) {
              this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: m, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = m, this.pv = m, this._isFirstFrame = true, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.effectsSequence = [c.bind(this)], this.addEffect = y;
            }
            function l(t, e, r, i) {
              var s2;
              this.propType = "multidimensional";
              var a, n2, o2, h2, l2 = e.k.length;
              for (s2 = 0; s2 < l2 - 1; s2 += 1)
                e.k[s2].to && e.k[s2].s && e.k[s2 + 1] && e.k[s2 + 1].s && (a = e.k[s2].s, n2 = e.k[s2 + 1].s, o2 = e.k[s2].to, h2 = e.k[s2].ti, (2 === a.length && (a[0] !== n2[0] || a[1] !== n2[1]) && bez.pointOnLine2D(a[0], a[1], n2[0], n2[1], a[0] + o2[0], a[1] + o2[1]) && bez.pointOnLine2D(a[0], a[1], n2[0], n2[1], n2[0] + h2[0], n2[1] + h2[1]) || 3 === a.length && (a[0] !== n2[0] || a[1] !== n2[1] || a[2] !== n2[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n2[0], n2[1], n2[2], a[0] + o2[0], a[1] + o2[1], a[2] + o2[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n2[0], n2[1], n2[2], n2[0] + h2[0], n2[1] + h2[1], n2[2] + h2[2])) && (e.k[s2].to = null, e.k[s2].ti = null), a[0] === n2[0] && a[1] === n2[1] && 0 === o2[0] && 0 === o2[1] && 0 === h2[0] && 0 === h2[1] && (2 === a.length || a[2] === n2[2] && 0 === o2[2] && 0 === h2[2]) && (e.k[s2].to = null, e.k[s2].ti = null));
              this.effectsSequence = [c.bind(this)], this.data = e, this.keyframes = e.k, this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.frameId = -1;
              var p = e.k[0].s.length;
              for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s2 = 0; s2 < p; s2 += 1)
                this.v[s2] = m, this.pv[s2] = m;
              this._caching = { lastFrame: m, lastIndex: 0, value: createTypedArray("float32", p) }, this.addEffect = y;
            }
            return { getProp: function(t, e, r, i, s2) {
              var a;
              if (e.k.length)
                if ("number" == typeof e.k[0])
                  a = new o(t, e, i, s2);
                else
                  switch (r) {
                    case 0:
                      a = new h(t, e, i, s2);
                      break;
                    case 1:
                      a = new l(t, e, i, s2);
                  }
              else
                a = new n(t, e, i, s2);
              return a.effectsSequence.length && s2.addDynamicProperty(a), a;
            } };
          }(), TransformPropertyFactory = function() {
            var n = [0, 0];
            function i(t, e, r) {
              if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this), e.rx) {
                if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                  var i2, s = e.or.k.length;
                  for (i2 = 0; i2 < s; i2 += 1)
                    e.or.k[i2].to = null, e.or.k[i2].ti = null;
                }
                this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = true;
              } else
                this.r = PropertyFactory.getProp(t, e.r || { k: 0 }, 0, degToRads, this);
              e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || { k: [100, 100, 100] }, 1, 0.01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
            }
            return i.prototype = { applyToMatrix: function(t) {
              var e = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }, getValue: function(t) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || t) {
                  var e;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var r, i2;
                    if (e = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                      i2 = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / e, 0), this.p.getValueAtTime(this.p.keyframes[0].t / e, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / e, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / e, 0)) : (r = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / e, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      r = [], i2 = [];
                      var s = this.px, a = this.py;
                      s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (r[0] = s.getValueAtTime((s.keyframes[0].t + 0.01) / e, 0), r[1] = a.getValueAtTime((a.keyframes[0].t + 0.01) / e, 0), i2[0] = s.getValueAtTime(s.keyframes[0].t / e, 0), i2[1] = a.getValueAtTime(a.keyframes[0].t / e, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (r[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / e, 0), r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / e, 0), i2[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - 0.01) / e, 0), i2[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - 0.01) / e, 0)) : (r = [s.pv, a.pv], i2[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - 0.01) / e, s.offsetTime), i2[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - 0.01) / e, a.offsetTime));
                    } else
                      r = i2 = n;
                    this.v.rotate(-Math.atan2(r[1] - i2[1], r[0] - i2[0]));
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                }
                this.frameId = this.elem.globalData.frameId;
              }
            }, precalculateMatrix: function() {
              if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                    return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
              }
            }, autoOrient: function() {
            } }, extendPrototype([DynamicPropertyContainer], i), i.prototype.addDynamicProperty = function(t) {
              this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = true;
            }, i.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(t, e, r) {
              return new i(t, e, r);
            } };
          }();
          function ShapePath() {
            this.c = false, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
          }
          ShapePath.prototype.setPathData = function(t, e) {
            this.c = t, this.setLength(e);
            for (var r = 0; r < e; )
              this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
          }, ShapePath.prototype.setLength = function(t) {
            for (; this._maxLength < t; )
              this.doubleArrayLength();
            this._length = t;
          }, ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
          }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
            var a;
            switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
              case "v":
                a = this.v;
                break;
              case "i":
                a = this.i;
                break;
              case "o":
                a = this.o;
                break;
              default:
                a = [];
            }
            (!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e;
          }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, o) {
            this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(s, a, "i", n, o);
          }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath();
            t.setPathData(this.c, this._length);
            var e = this.v, r = this.o, i = this.i, s = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, false), s = 1);
            var a, n = this._length - 1, o = this._length;
            for (a = s; a < o; a += 1)
              t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], a, false), n -= 1;
            return t;
          };
          var ShapePropertyFactory = function() {
            var s = -999999;
            function t(t2, e2, r2) {
              var i2, s2, a2, n2, o2, h2, l2, p2, m2, f = r2.lastIndex, c = this.keyframes;
              if (t2 < c[0].t - this.offsetTime)
                i2 = c[0].s[0], a2 = true, f = 0;
              else if (t2 >= c[c.length - 1].t - this.offsetTime)
                i2 = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a2 = true;
              else {
                for (var d, u, y = f, g = c.length - 1, v = true; v && (d = c[y], !((u = c[y + 1]).t - this.offsetTime > t2)); )
                  y < g - 1 ? y += 1 : v = false;
                if (f = y, !(a2 = 1 === d.h)) {
                  if (t2 >= u.t - this.offsetTime)
                    p2 = 1;
                  else if (t2 < d.t - this.offsetTime)
                    p2 = 0;
                  else {
                    var b;
                    d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), p2 = b((t2 - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)));
                  }
                  s2 = u.s ? u.s[0] : d.e[0];
                }
                i2 = d.s[0];
              }
              for (h2 = e2._length, l2 = i2.i[0].length, r2.lastIndex = f, n2 = 0; n2 < h2; n2 += 1)
                for (o2 = 0; o2 < l2; o2 += 1)
                  m2 = a2 ? i2.i[n2][o2] : i2.i[n2][o2] + (s2.i[n2][o2] - i2.i[n2][o2]) * p2, e2.i[n2][o2] = m2, m2 = a2 ? i2.o[n2][o2] : i2.o[n2][o2] + (s2.o[n2][o2] - i2.o[n2][o2]) * p2, e2.o[n2][o2] = m2, m2 = a2 ? i2.v[n2][o2] : i2.v[n2][o2] + (s2.v[n2][o2] - i2.v[n2][o2]) * p2, e2.v[n2][o2] = m2;
            }
            function a() {
              this.paths = this.localShapeCollection;
            }
            function e(t2) {
              (function(t3, e2) {
                if (t3._length !== e2._length || t3.c !== e2.c)
                  return false;
                var r2, i2 = t3._length;
                for (r2 = 0; r2 < i2; r2 += 1)
                  if (t3.v[r2][0] !== e2.v[r2][0] || t3.v[r2][1] !== e2.v[r2][1] || t3.o[r2][0] !== e2.o[r2][0] || t3.o[r2][1] !== e2.o[r2][1] || t3.i[r2][0] !== e2.i[r2][0] || t3.i[r2][1] !== e2.i[r2][1])
                    return false;
                return true;
              })(this.v, t2) || (this.v = shapePool.clone(t2), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
            }
            function r() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock)
                    this.setVValue(this.pv);
                  else {
                    var t2, e2;
                    this.lock = true, this._mdf = false, t2 = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var r2 = this.effectsSequence.length;
                    for (e2 = 0; e2 < r2; e2 += 1)
                      t2 = this.effectsSequence[e2](t2);
                    this.setVValue(t2), this.lock = false, this.frameId = this.elem.globalData.frameId;
                  }
                else
                  this._mdf = false;
            }
            function n(t2, e2, r2) {
              this.propType = "shape", this.comp = t2.comp, this.container = t2, this.elem = t2, this.data = e2, this.k = false, this.kf = false, this._mdf = false;
              var i2 = 3 === r2 ? e2.pt.k : e2.ks.k;
              this.v = shapePool.clone(i2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = a, this.effectsSequence = [];
            }
            function i(t2) {
              this.effectsSequence.push(t2), this.container.addDynamicProperty(this);
            }
            function o(t2, e2, r2) {
              this.propType = "shape", this.comp = t2.comp, this.elem = t2, this.container = t2, this.offsetTime = t2.data.st, this.keyframes = 3 === r2 ? e2.pt.k : e2.ks.k, this.k = true, this.kf = true;
              var i2 = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, i2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = s, this.reset = a, this._caching = { lastFrame: s, lastIndex: 0 }, this.effectsSequence = [function() {
                var t3 = this.comp.renderedFrame - this.offsetTime, e3 = this.keyframes[0].t - this.offsetTime, r3 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, i3 = this._caching.lastFrame;
                return i3 !== s && (i3 < e3 && t3 < e3 || r3 < i3 && r3 < t3) || (this._caching.lastIndex = i3 < t3 ? this._caching.lastIndex : 0, this.interpolateShape(t3, this.pv, this._caching)), this._caching.lastFrame = t3, this.pv;
              }.bind(this)];
            }
            n.prototype.interpolateShape = t, n.prototype.getValue = r, n.prototype.setVValue = e, n.prototype.addEffect = i, o.prototype.getValue = r, o.prototype.interpolateShape = t, o.prototype.setVValue = e, o.prototype.addEffect = i;
            var h = function() {
              var n2 = roundCorner;
              function t2(t3, e2) {
                this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e2.d, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e2.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
              }
              return t2.prototype = { reset: a, getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
              }, convertEllToPath: function() {
                var t3 = this.p.v[0], e2 = this.p.v[1], r2 = this.s.v[0] / 2, i2 = this.s.v[1] / 2, s2 = 3 !== this.d, a2 = this.v;
                a2.v[0][0] = t3, a2.v[0][1] = e2 - i2, a2.v[1][0] = s2 ? t3 + r2 : t3 - r2, a2.v[1][1] = e2, a2.v[2][0] = t3, a2.v[2][1] = e2 + i2, a2.v[3][0] = s2 ? t3 - r2 : t3 + r2, a2.v[3][1] = e2, a2.i[0][0] = s2 ? t3 - r2 * n2 : t3 + r2 * n2, a2.i[0][1] = e2 - i2, a2.i[1][0] = s2 ? t3 + r2 : t3 - r2, a2.i[1][1] = e2 - i2 * n2, a2.i[2][0] = s2 ? t3 + r2 * n2 : t3 - r2 * n2, a2.i[2][1] = e2 + i2, a2.i[3][0] = s2 ? t3 - r2 : t3 + r2, a2.i[3][1] = e2 + i2 * n2, a2.o[0][0] = s2 ? t3 + r2 * n2 : t3 - r2 * n2, a2.o[0][1] = e2 - i2, a2.o[1][0] = s2 ? t3 + r2 : t3 - r2, a2.o[1][1] = e2 + i2 * n2, a2.o[2][0] = s2 ? t3 - r2 * n2 : t3 + r2 * n2, a2.o[2][1] = e2 + i2, a2.o[3][0] = s2 ? t3 - r2 : t3 + r2, a2.o[3][1] = e2 - i2 * n2;
              } }, extendPrototype([DynamicPropertyContainer], t2), t2;
            }(), l = function() {
              function t2(t3, e2) {
                this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = t3, this.comp = t3.comp, this.data = e2, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), 1 === e2.sy ? (this.ir = PropertyFactory.getProp(t3, e2.ir, 0, 0, this), this.is = PropertyFactory.getProp(t3, e2.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t3, e2.pt, 0, 0, this), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t3, e2.or, 0, 0, this), this.os = PropertyFactory.getProp(t3, e2.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
              }
              return t2.prototype = { reset: a, getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
              }, convertStarToPath: function() {
                var t3, e2, r2, i2, s2 = 2 * Math.floor(this.pt.v), a2 = 2 * Math.PI / s2, n2 = true, o2 = this.or.v, h2 = this.ir.v, l2 = this.os.v, p2 = this.is.v, m2 = 2 * Math.PI * o2 / (2 * s2), f = 2 * Math.PI * h2 / (2 * s2), c = -Math.PI / 2;
                c += this.r.v;
                var d = 3 === this.data.d ? -1 : 1;
                for (t3 = this.v._length = 0; t3 < s2; t3 += 1) {
                  r2 = n2 ? l2 : p2, i2 = n2 ? m2 : f;
                  var u = (e2 = n2 ? o2 : h2) * Math.cos(c), y = e2 * Math.sin(c), g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y), v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                  u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * i2 * r2 * d, y - v * i2 * r2 * d, u + g * i2 * r2 * d, y + v * i2 * r2 * d, t3, true), n2 = !n2, c += a2 * d;
                }
              }, convertPolygonToPath: function() {
                var t3, e2 = Math.floor(this.pt.v), r2 = 2 * Math.PI / e2, i2 = this.or.v, s2 = this.os.v, a2 = 2 * Math.PI * i2 / (4 * e2), n2 = 0.5 * -Math.PI, o2 = 3 === this.data.d ? -1 : 1;
                for (n2 += this.r.v, t3 = this.v._length = 0; t3 < e2; t3 += 1) {
                  var h2 = i2 * Math.cos(n2), l2 = i2 * Math.sin(n2), p2 = 0 === h2 && 0 === l2 ? 0 : l2 / Math.sqrt(h2 * h2 + l2 * l2), m2 = 0 === h2 && 0 === l2 ? 0 : -h2 / Math.sqrt(h2 * h2 + l2 * l2);
                  h2 += +this.p.v[0], l2 += +this.p.v[1], this.v.setTripleAt(h2, l2, h2 - p2 * a2 * s2 * o2, l2 - m2 * a2 * s2 * o2, h2 + p2 * a2 * s2 * o2, l2 + m2 * a2 * s2 * o2, t3, true), n2 += r2 * o2;
                }
                this.paths.length = 0, this.paths[0] = this.v;
              } }, extendPrototype([DynamicPropertyContainer], t2), t2;
            }(), p = function() {
              function t2(t3, e2) {
                this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e2.s, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
              }
              return t2.prototype = { convertRectToPath: function() {
                var t3 = this.p.v[0], e2 = this.p.v[1], r2 = this.s.v[0] / 2, i2 = this.s.v[1] / 2, s2 = bmMin(r2, i2, this.r.v), a2 = s2 * (1 - roundCorner);
                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t3 + r2, e2 - i2 + s2, t3 + r2, e2 - i2 + s2, t3 + r2, e2 - i2 + a2, 0, true), this.v.setTripleAt(t3 + r2, e2 + i2 - s2, t3 + r2, e2 + i2 - a2, t3 + r2, e2 + i2 - s2, 1, true), 0 !== s2 ? (this.v.setTripleAt(t3 + r2 - s2, e2 + i2, t3 + r2 - s2, e2 + i2, t3 + r2 - a2, e2 + i2, 2, true), this.v.setTripleAt(t3 - r2 + s2, e2 + i2, t3 - r2 + a2, e2 + i2, t3 - r2 + s2, e2 + i2, 3, true), this.v.setTripleAt(t3 - r2, e2 + i2 - s2, t3 - r2, e2 + i2 - s2, t3 - r2, e2 + i2 - a2, 4, true), this.v.setTripleAt(t3 - r2, e2 - i2 + s2, t3 - r2, e2 - i2 + a2, t3 - r2, e2 - i2 + s2, 5, true), this.v.setTripleAt(t3 - r2 + s2, e2 - i2, t3 - r2 + s2, e2 - i2, t3 - r2 + a2, e2 - i2, 6, true), this.v.setTripleAt(t3 + r2 - s2, e2 - i2, t3 + r2 - a2, e2 - i2, t3 + r2 - s2, e2 - i2, 7, true)) : (this.v.setTripleAt(t3 - r2, e2 + i2, t3 - r2 + a2, e2 + i2, t3 - r2, e2 + i2, 2), this.v.setTripleAt(t3 - r2, e2 - i2, t3 - r2, e2 - i2 + a2, t3 - r2, e2 - i2, 3))) : (this.v.setTripleAt(t3 + r2, e2 - i2 + s2, t3 + r2, e2 - i2 + a2, t3 + r2, e2 - i2 + s2, 0, true), 0 !== s2 ? (this.v.setTripleAt(t3 + r2 - s2, e2 - i2, t3 + r2 - s2, e2 - i2, t3 + r2 - a2, e2 - i2, 1, true), this.v.setTripleAt(t3 - r2 + s2, e2 - i2, t3 - r2 + a2, e2 - i2, t3 - r2 + s2, e2 - i2, 2, true), this.v.setTripleAt(t3 - r2, e2 - i2 + s2, t3 - r2, e2 - i2 + s2, t3 - r2, e2 - i2 + a2, 3, true), this.v.setTripleAt(t3 - r2, e2 + i2 - s2, t3 - r2, e2 + i2 - a2, t3 - r2, e2 + i2 - s2, 4, true), this.v.setTripleAt(t3 - r2 + s2, e2 + i2, t3 - r2 + s2, e2 + i2, t3 - r2 + a2, e2 + i2, 5, true), this.v.setTripleAt(t3 + r2 - s2, e2 + i2, t3 + r2 - a2, e2 + i2, t3 + r2 - s2, e2 + i2, 6, true), this.v.setTripleAt(t3 + r2, e2 + i2 - s2, t3 + r2, e2 + i2 - s2, t3 + r2, e2 + i2 - a2, 7, true)) : (this.v.setTripleAt(t3 - r2, e2 - i2, t3 - r2 + a2, e2 - i2, t3 - r2, e2 - i2, 1, true), this.v.setTripleAt(t3 - r2, e2 + i2, t3 - r2, e2 + i2 - a2, t3 - r2, e2 + i2, 2, true), this.v.setTripleAt(t3 + r2, e2 + i2, t3 + r2 - a2, e2 + i2, t3 + r2, e2 + i2, 3, true)));
              }, getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
              }, reset: a }, extendPrototype([DynamicPropertyContainer], t2), t2;
            }();
            var m = { getShapeProp: function(t2, e2, r2) {
              var i2;
              return 3 === r2 || 4 === r2 ? i2 = (3 === r2 ? e2.pt : e2.ks).k.length ? new o(t2, e2, r2) : new n(t2, e2, r2) : 5 === r2 ? i2 = new p(t2, e2) : 6 === r2 ? i2 = new h(t2, e2) : 7 === r2 && (i2 = new l(t2, e2)), i2.k && t2.addDynamicProperty(i2), i2;
            }, getConstructorFunction: function() {
              return n;
            }, getKeyframedConstructorFunction: function() {
              return o;
            } };
            return m;
          }(), ShapeModifiers = (gs = {}, hs = {}, gs.registerModifier = function(t, e) {
            hs[t] || (hs[t] = e);
          }, gs.getModifier = function(t, e, r) {
            return new hs[t](e, r);
          }, gs), gs, hs;
          function ShapeModifier() {
          }
          function TrimModifier() {
          }
          function RoundCornersModifier() {
          }
          function PuckerAndBloatModifier() {
          }
          function RepeaterModifier() {
          }
          function ShapeCollection() {
            this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
          }
          function DashProperty(t, e, r, i) {
            var s;
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = false, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
            var a, n = e.length || 0;
            for (s = 0; s < n; s += 1)
              a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = { n: e[s].n, p: a };
            this.k || this.getValue(true), this._isAnimated = this.k;
          }
          function GradientProperty(t, e, r) {
            this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
            var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", i), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
          }
          ShapeModifier.prototype.initModifierProperties = function() {
          }, ShapeModifier.prototype.addShapeToModifier = function() {
          }, ShapeModifier.prototype.addShape = function(t) {
            if (!this.closed) {
              t.sh.container.addDynamicProperty(t.sh);
              var e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() };
              this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
            }
          }, ShapeModifier.prototype.init = function(t, e) {
            this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
          }, ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
          }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
            this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
          }, TrimModifier.prototype.addShapeToModifier = function(t) {
            t.pathsData = [];
          }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
            var a = [];
            e <= 1 ? a.push({ s: t, e }) : 1 <= t ? a.push({ s: t - 1, e: e - 1 }) : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
            var n, o, h = [], l = a.length;
            for (n = 0; n < l; n += 1) {
              var p, m;
              if (!((o = a[n]).e * s < i || o.s * s > i + r))
                p = o.s * s <= i ? 0 : (o.s * s - i) / r, m = o.e * s >= i + r ? 1 : (o.e * s - i) / r, h.push([p, m]);
            }
            return h.length || h.push([0, 0]), h;
          }, TrimModifier.prototype.releasePathsData = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
              segmentsLengthPool.release(t[e]);
            return t.length = 0, t;
          }, TrimModifier.prototype.processShapes = function(t) {
            var e, r, i, s;
            if (this._mdf || t) {
              var a = this.o.v % 360 / 360;
              if (a < 0 && (a += 1), e = 1 < this.s.v ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a, (r = 1 < this.e.v ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a) < e) {
                var n = e;
                e = r, r = n;
              }
              e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r;
            } else
              e = this.sValue, r = this.eValue;
            var o, h, l, p, m, f = this.shapes.length, c = 0;
            if (r === e)
              for (s = 0; s < f; s += 1)
                this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = true, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
            else if (1 === r && 0 === e || 0 === r && 1 === e) {
              if (this._mdf)
                for (s = 0; s < f; s += 1)
                  this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = true;
            } else {
              var d, u, y = [];
              for (s = 0; s < f; s += 1)
                if ((d = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                  if (h = (i = d.shape.paths)._length, m = 0, !d.shape._mdf && d.pathsData.length)
                    m = d.totalShapeLength;
                  else {
                    for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1)
                      p = bez.getSegmentsLength(i.shapes[o]), l.push(p), m += p.totalLength;
                    d.totalShapeLength = m, d.pathsData = l;
                  }
                  c += m, d.shape._mdf = true;
                } else
                  d.shape.paths = d.localShapeCollection;
              var g, v = e, b = r, P = 0;
              for (s = f - 1; 0 <= s; s -= 1)
                if ((d = this.shapes[s]).shape._mdf) {
                  for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && 1 < f ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, P, c), P += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) {
                    v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength * b }) : 1 <= v ? y.push({ s: d.totalShapeLength * (v - 1), e: d.totalShapeLength * (b - 1) }) : (y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength }), y.push({ s: 0, e: d.totalShapeLength * (b - 1) }));
                    var E = this.addShapes(d, y[0]);
                    if (y[0].s !== y[0].e) {
                      if (1 < y.length)
                        if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                          var x = E.pop();
                          this.addPaths(E, u), E = this.addShapes(d, y[1], x);
                        } else
                          this.addPaths(E, u), E = this.addShapes(d, y[1]);
                      this.addPaths(E, u);
                    }
                  }
                  d.shape.paths = u;
                }
            }
          }, TrimModifier.prototype.addPaths = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
              e.addShape(t[r]);
          }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
            s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1);
          }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
            e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
          }, TrimModifier.prototype.addShapes = function(t, e, r) {
            var i, s, a, n, o, h, l, p, m = t.pathsData, f = t.shape.paths.shapes, c = t.shape.paths._length, d = 0, u = [], y = true;
            for (p = r ? (o = r._length, r._length) : (r = shapePool.newElement(), o = 0), u.push(r), i = 0; i < c; i += 1) {
              for (h = m[i].lengths, r.c = f[i].c, a = f[i].c ? h.length : h.length + 1, s = 1; s < a; s += 1)
                if (d + (n = h[s - 1]).addedLength < e.s)
                  d += n.addedLength, r.c = false;
                else {
                  if (d > e.e) {
                    r.c = false;
                    break;
                  }
                  e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r, o, y), y = false) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, r, o, y), y = false, r.c = false), d += n.addedLength, o += 1;
                }
              if (f[i].c && h.length) {
                if (n = h[s - 1], d <= e.e) {
                  var g = h[s - 1].addedLength;
                  e.s <= d && e.e >= d + g ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r, o, y), y = false) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), this.addSegmentFromArray(l, r, o, y), y = false, r.c = false);
                } else
                  r.c = false;
                d += n.addedLength, o += 1;
              }
              if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e)
                break;
              i < c - 1 && (r = shapePool.newElement(), y = true, u.push(r), o = 0);
            }
            return u;
          }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
          }, RoundCornersModifier.prototype.processPath = function(t, e) {
            var r, i = shapePool.newElement();
            i.c = t.c;
            var s, a, n, o, h, l, p, m, f, c, d, u, y = t._length, g = 0;
            for (r = 0; r < y; r += 1)
              s = t.v[r], n = t.o[r], a = t.i[r], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, m = u = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, c = m - (m - s[1]) * roundCorner, i.setTripleAt(p, m, f, c, d, u, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, m = c = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = m - (m - s[1]) * roundCorner, i.setTripleAt(p, m, f, c, d, u, g)) : i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g) : i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1;
            return i;
          }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, r, i, s, a, n, o = this.shapes.length, h = this.rd.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                  for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)
                    n.addShape(this.processPath(e[i], h));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = false);
          }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
          }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
            var r = e / 100, i = [0, 0], s = t._length, a = 0;
            for (a = 0; a < s; a += 1)
              i[0] += t.v[a][0], i[1] += t.v[a][1];
            i[0] /= s, i[1] /= s;
            var n, o, h, l, p, m, f = shapePool.newElement();
            for (f.c = t.c, a = 0; a < s; a += 1)
              n = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, h = t.o[a][0] + (i[0] - t.o[a][0]) * -r, l = t.o[a][1] + (i[1] - t.o[a][1]) * -r, p = t.i[a][0] + (i[0] - t.i[a][0]) * -r, m = t.i[a][1] + (i[1] - t.i[a][1]) * -r, f.setTripleAt(n, o, h, l, p, m, a);
            return f;
          }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, r, i, s, a, n, o = this.shapes.length, h = this.amount.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                  for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)
                    n.addShape(this.processPath(e[i], h));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = false);
          }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
          }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
            var n = a ? -1 : 1, o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
            t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
          }, RepeaterModifier.prototype.init = function(t, e, r, i) {
            for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); 0 < r; )
              r -= 1, this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = true : this.getValue(true);
          }, RepeaterModifier.prototype.resetElements = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
              t[e]._processed = false, "gr" === t[e].ty && this.resetElements(t[e].it);
          }, RepeaterModifier.prototype.cloneElements = function(t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
          }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
              t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
          }, RepeaterModifier.prototype.processShapes = function(t) {
            var e, r, i, s, a, n = false;
            if (this._mdf || t) {
              var o, h = Math.ceil(this.c.v);
              if (this._groups.length < h) {
                for (; this._groups.length < h; ) {
                  var l = { it: this.cloneElements(this._elements), ty: "gr" };
                  l.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1;
                }
                this.elem.reloadShapes(), n = true;
              }
              for (i = a = 0; i <= this._groups.length - 1; i += 1) {
                if (o = a < h, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                  var p = this.elemsData[i].it, m = p[p.length - 1];
                  0 !== m.transform.op.v ? (m.transform.op._mdf = true, m.transform.op.v = 0) : m.transform.op._mdf = false;
                }
                a += 1;
              }
              this._currentCopies = h;
              var f = this.o.v, c = f % 1, d = 0 < f ? Math.floor(f) : Math.ceil(f), u = this.pMatrix.props, y = this.rMatrix.props, g = this.sMatrix.props;
              this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
              var v, b, P = 0;
              if (0 < f) {
                for (; P < d; )
                  this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), P += 1;
                c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, false), P += c);
              } else if (f < 0) {
                for (; d < P; )
                  this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), P -= 1;
                c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, true), P -= c);
              }
              for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a; ) {
                if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== P) {
                  for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < b; v += 1)
                    r[v] = this.matrix.props[v];
                  this.matrix.reset();
                } else
                  for (this.matrix.reset(), v = 0; v < b; v += 1)
                    r[v] = this.matrix.props[v];
                P += 1, a -= 1, i += s;
              }
            } else
              for (a = this._currentCopies, i = 0, s = 1; a; )
                r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, a -= 1, i += s;
            return n;
          }, RepeaterModifier.prototype.addShape = function() {
          }, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
          }, ShapeCollection.prototype.releaseShapes = function() {
            var t;
            for (t = 0; t < this._length; t += 1)
              shapePool.release(this.shapes[t]);
            this._length = 0;
          }, DashProperty.prototype.getValue = function(t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
              var e = 0, r = this.dataProps.length;
              for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1)
                "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
            }
          }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
            for (var r = 0, i = this.o.length / 2; r < i; ) {
              if (0.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r]))
                return false;
              r += 1;
            }
            return true;
          }, GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 != this.c.length / 4)
              return false;
            if (this.data.k.k[0].s)
              for (var t = 0, e = this.data.k.k.length; t < e; ) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                  return false;
                t += 1;
              }
            else if (!this.comparePoints(this.data.k.k, this.data.p))
              return false;
            return true;
          }, GradientProperty.prototype.getValue = function(t) {
            if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
              var e, r, i, s = 4 * this.data.p;
              for (e = 0; e < s; e += 1)
                r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
              if (this.o.length)
                for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1)
                  r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
              this._mdf = !t;
            }
          }, extendPrototype([DynamicPropertyContainer], GradientProperty);
          var buildShapeString = function(t, e, r, i) {
            if (0 === e)
              return "";
            var s, a = t.o, n = t.i, o = t.v, h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (s = 1; s < e; s += 1)
              h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]);
            return r && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
          }, audioControllerFactory = function() {
            function t(t2) {
              this.audios = [], this.audioFactory = t2, this._volume = 1, this._isMuted = false;
            }
            return t.prototype = { addAudio: function(t2) {
              this.audios.push(t2);
            }, pause: function() {
              var t2, e = this.audios.length;
              for (t2 = 0; t2 < e; t2 += 1)
                this.audios[t2].pause();
            }, resume: function() {
              var t2, e = this.audios.length;
              for (t2 = 0; t2 < e; t2 += 1)
                this.audios[t2].resume();
            }, setRate: function(t2) {
              var e, r = this.audios.length;
              for (e = 0; e < r; e += 1)
                this.audios[e].setRate(t2);
            }, createAudio: function(t2) {
              return this.audioFactory ? this.audioFactory(t2) : Howl ? new Howl({ src: [t2] }) : { isPlaying: false, play: function() {
                this.isPlaying = true;
              }, seek: function() {
                this.isPlaying = false;
              }, playing: function() {
              }, rate: function() {
              }, setVolume: function() {
              } };
            }, setAudioFactory: function(t2) {
              this.audioFactory = t2;
            }, setVolume: function(t2) {
              this._volume = t2, this._updateVolume();
            }, mute: function() {
              this._isMuted = true, this._updateVolume();
            }, unmute: function() {
              this._isMuted = false, this._updateVolume();
            }, getVolume: function() {
              return this._volume;
            }, _updateVolume: function() {
              var t2, e = this.audios.length;
              for (t2 = 0; t2 < e; t2 += 1)
                this.audios[t2].volume(this._volume * (this._isMuted ? 0 : 1));
            } }, function() {
              return new t();
            };
          }(), ImagePreloader = function() {
            var s = function() {
              var t2 = createTag("canvas");
              t2.width = 1, t2.height = 1;
              var e2 = t2.getContext("2d");
              return e2.fillStyle = "rgba(0,0,0,0)", e2.fillRect(0, 0, 1, 1), t2;
            }();
            function t() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function e() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function a(t2, e2, r2) {
              var i = "";
              if (t2.e)
                i = t2.p;
              else if (e2) {
                var s2 = t2.p;
                -1 !== s2.indexOf("images/") && (s2 = s2.split("/")[1]), i = e2 + s2;
              } else
                i = r2, i += t2.u ? t2.u : "", i += t2.p;
              return i;
            }
            function r() {
              this._imageLoaded = t.bind(this), this._footageLoaded = e.bind(this), this.testImageLoaded = function(t2) {
                var e2 = 0, r2 = setInterval(function() {
                  (t2.getBBox().width || 500 < e2) && (this._imageLoaded(), clearInterval(r2)), e2 += 1;
                }.bind(this), 50);
              }.bind(this), this.createFootageData = function(t2) {
                var e2 = { assetData: t2 }, r2 = a(t2, this.assetsPath, this.path);
                return assetLoader.load(r2, function(t3) {
                  e2.img = t3, this._footageLoaded();
                }.bind(this), function() {
                  e2.img = {}, this._footageLoaded();
                }.bind(this)), e2;
              }.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return r.prototype = { loadAssets: function(t2, e2) {
              var r2;
              this.imagesLoadedCb = e2;
              var i = t2.length;
              for (r2 = 0; r2 < i; r2 += 1)
                t2[r2].layers || (t2[r2].t && "seq" !== t2[r2].t ? 3 === t2[r2].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t2[r2]))) : (this.totalImages += 1, this.images.push(this._createImageData(t2[r2]))));
            }, setAssetsPath: function(t2) {
              this.assetsPath = t2 || "";
            }, setPath: function(t2) {
              this.path = t2 || "";
            }, loadedImages: function() {
              return this.totalImages === this.loadedAssets;
            }, loadedFootages: function() {
              return this.totalFootages === this.loadedFootagesCount;
            }, destroy: function() {
              this.imagesLoadedCb = null, this.images.length = 0;
            }, getAsset: function(t2) {
              for (var e2 = 0, r2 = this.images.length; e2 < r2; ) {
                if (this.images[e2].assetData === t2)
                  return this.images[e2].img;
                e2 += 1;
              }
              return null;
            }, createImgData: function(t2) {
              var e2 = a(t2, this.assetsPath, this.path), r2 = createTag("img");
              r2.crossOrigin = "anonymous", r2.addEventListener("load", this._imageLoaded, false), r2.addEventListener("error", function() {
                i.img = s, this._imageLoaded();
              }.bind(this), false), r2.src = e2;
              var i = { img: r2, assetData: t2 };
              return i;
            }, createImageData: function(t2) {
              var e2 = a(t2, this.assetsPath, this.path), r2 = createNS("image");
              isSafari ? this.testImageLoaded(r2) : r2.addEventListener("load", this._imageLoaded, false), r2.addEventListener("error", function() {
                i.img = s, this._imageLoaded();
              }.bind(this), false), r2.setAttributeNS("http://www.w3.org/1999/xlink", "href", e2), this._elementHelper.append ? this._elementHelper.append(r2) : this._elementHelper.appendChild(r2);
              var i = { img: r2, assetData: t2 };
              return i;
            }, imageLoaded: t, footageLoaded: e, setCacheType: function(t2, e2) {
              this._createImageData = "svg" === t2 ? (this._elementHelper = e2, this.createImageData.bind(this)) : this.createImgData.bind(this);
            } }, r;
          }(), featureSupport = (zx = { maskType: true }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (zx.maskType = false), zx), zx, filtersFactory = (Ax = {}, Ax.createFilter = function(t, e) {
            var r = createNS("filter");
            return r.setAttribute("id", t), true !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r;
          }, Ax.createAlphaToLuminanceFilter = function() {
            var t = createNS("feColorMatrix");
            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t;
          }, Ax), Ax, assetLoader = function() {
            function a(t) {
              return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null;
            }
            return { load: function(t, e, r) {
              var i, s = new XMLHttpRequest();
              try {
                s.responseType = "json";
              } catch (t2) {
              }
              s.onreadystatechange = function() {
                if (4 === s.readyState)
                  if (200 === s.status)
                    i = a(s), e(i);
                  else
                    try {
                      i = a(s), e(i);
                    } catch (t2) {
                      r && r(t2);
                    }
              }, s.open("GET", t, true), s.send();
            } };
          }();
          function TextAnimatorProperty(t, e, r) {
            this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(r);
          }
          function TextAnimatorDataProperty(t, e, r) {
            var i = { propType: false }, s = PropertyFactory.getProp, a = e.a;
            this.a = { r: a.r ? s(t, a.r, 0, degToRads, r) : i, rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i, ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i, sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i, sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i, s: a.s ? s(t, a.s, 1, 0.01, r) : i, a: a.a ? s(t, a.a, 1, 0, r) : i, o: a.o ? s(t, a.o, 0, 0.01, r) : i, p: a.p ? s(t, a.p, 1, 0, r) : i, sw: a.sw ? s(t, a.sw, 0, 0, r) : i, sc: a.sc ? s(t, a.sc, 1, 0, r) : i, fc: a.fc ? s(t, a.fc, 1, 0, r) : i, fh: a.fh ? s(t, a.fh, 0, 0, r) : i, fs: a.fs ? s(t, a.fs, 0, 0.01, r) : i, fb: a.fb ? s(t, a.fb, 0, 0.01, r) : i, t: a.t ? s(t, a.t, 0, 0, r) : i }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
          }
          function LetterProps(t, e, r, i, s, a) {
            this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = { o: true, sw: !!e, sc: !!r, fc: !!i, m: true, p: true };
          }
          function TextProperty(t, e) {
            this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
          }
          TextAnimatorProperty.prototype.searchProperties = function() {
            var t, e, r = this._textData.a.length, i = PropertyFactory.getProp;
            for (t = 0; t < r; t += 1)
              e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = { f: i(this._elem, this._textData.p.f, 0, 0, this), l: i(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
          }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
            if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
              this._isFirstFrame = false;
              var r, i, s, a, n, o, h, l, p, m, f, c, d, u, y, g, v, b, P, E = this._moreOptions.alignment.v, x = this._animatorsData, S = this._textData, A = this.mHelper, C = this._renderType, T = this.renderedLetters.length, _ = t.l;
              if (this._hasMaskedPath) {
                if (P = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                  var k, D = P.v;
                  for (this._pathData.r && (D = D.reverse()), n = { tLength: 0, segments: [] }, a = D._length - 1, s = g = 0; s < a; s += 1)
                    k = bez.buildBezierData(D.v[s], D.v[s + 1], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[s + 1][0] - D.v[s + 1][0], D.i[s + 1][1] - D.v[s + 1][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength;
                  s = a, P.v.c && (k = bez.buildBezierData(D.v[s], D.v[0], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength), this._pathData.pi = n;
                }
                if (n = this._pathData.pi, o = this._pathData.f.v, m = 1, p = !(l = f = 0), u = n.segments, o < 0 && P.v.c)
                  for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), m = (d = u[f = u.length - 1].points).length - 1; o < 0; )
                    o += d[m].partialLength, (m -= 1) < 0 && (m = (d = u[f -= 1].points).length - 1);
                c = (d = u[f].points)[m - 1], y = (h = d[m]).partialLength;
              }
              a = _.length, i = r = 0;
              var M, F2, w, I, V, B = 1.2 * t.finalSize * 0.714, R = true;
              w = x.length;
              var L, G, z, N, O, H, j, q, W, Y, X, J, K = -1, $ = o, Z = f, U = m, Q = -1, tt = "", et = this.defaultPropsArray;
              if (2 === t.j || 1 === t.j) {
                var rt = 0, it = 0, st = 2 === t.j ? -0.5 : -1, at = 0, nt = true;
                for (s = 0; s < a; s += 1)
                  if (_[s].n) {
                    for (rt && (rt += it); at < s; )
                      _[at].animatorJustifyOffset = rt, at += 1;
                    nt = !(rt = 0);
                  } else {
                    for (F2 = 0; F2 < w; F2 += 1)
                      (M = x[F2].a).t.propType && (nt && 2 === t.j && (it += M.t.v * st), (V = x[F2].s.getMult(_[s].anIndexes[F2], S.a[F2].s.totalChars)).length ? rt += M.t.v * V[0] * st : rt += M.t.v * V * st);
                    nt = false;
                  }
                for (rt && (rt += it); at < s; )
                  _[at].animatorJustifyOffset = rt, at += 1;
              }
              for (s = 0; s < a; s += 1) {
                if (A.reset(), N = 1, _[s].n)
                  r = 0, i += t.yOffset, i += R ? 1 : 0, o = $, R = false, this._hasMaskedPath && (m = U, c = (d = u[f = Z].points)[m - 1], y = (h = d[m]).partialLength, l = 0), J = W = X = tt = "", et = this.defaultPropsArray;
                else {
                  if (this._hasMaskedPath) {
                    if (Q !== _[s].line) {
                      switch (t.j) {
                        case 1:
                          o += g - t.lineWidths[_[s].line];
                          break;
                        case 2:
                          o += (g - t.lineWidths[_[s].line]) / 2;
                      }
                      Q = _[s].line;
                    }
                    K !== _[s].ind && (_[K] && (o += _[K].extra), o += _[s].an / 2, K = _[s].ind), o += E[0] * _[s].an * 5e-3;
                    var ot = 0;
                    for (F2 = 0; F2 < w; F2 += 1)
                      (M = x[F2].a).p.propType && ((V = x[F2].s.getMult(_[s].anIndexes[F2], S.a[F2].s.totalChars)).length ? ot += M.p.v[0] * V[0] : ot += M.p.v[0] * V), M.a.propType && ((V = x[F2].s.getMult(_[s].anIndexes[F2], S.a[F2].s.totalChars)).length ? ot += M.a.v[0] * V[0] : ot += M.a.v[0] * V);
                    for (p = true; p; )
                      o + ot <= l + y || !d ? (v = (o + ot - l) / h.partialLength, G = c.point[0] + (h.point[0] - c.point[0]) * v, z = c.point[1] + (h.point[1] - c.point[1]) * v, A.translate(-E[0] * _[s].an * 5e-3, -E[1] * B * 0.01), p = false) : d && (l += h.partialLength, (m += 1) >= d.length && (m = 0, d = u[f += 1] ? u[f].points : P.v.c ? u[f = m = 0].points : (l -= h.partialLength, null)), d && (c = h, y = (h = d[m]).partialLength));
                    L = _[s].an / 2 - _[s].add, A.translate(-L, 0, 0);
                  } else
                    L = _[s].an / 2 - _[s].add, A.translate(-L, 0, 0), A.translate(-E[0] * _[s].an * 5e-3, -E[1] * B * 0.01, 0);
                  for (F2 = 0; F2 < w; F2 += 1)
                    (M = x[F2].a).t.propType && (V = x[F2].s.getMult(_[s].anIndexes[F2], S.a[F2].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? V.length ? o += M.t.v * V[0] : o += M.t.v * V : V.length ? r += M.t.v * V[0] : r += M.t.v * V));
                  for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), F2 = 0; F2 < w; F2 += 1)
                    (M = x[F2].a).a.propType && ((V = x[F2].s.getMult(_[s].anIndexes[F2], S.a[F2].s.totalChars)).length ? A.translate(-M.a.v[0] * V[0], -M.a.v[1] * V[1], M.a.v[2] * V[2]) : A.translate(-M.a.v[0] * V, -M.a.v[1] * V, M.a.v[2] * V));
                  for (F2 = 0; F2 < w; F2 += 1)
                    (M = x[F2].a).s.propType && ((V = x[F2].s.getMult(_[s].anIndexes[F2], S.a[F2].s.totalChars)).length ? A.scale(1 + (M.s.v[0] - 1) * V[0], 1 + (M.s.v[1] - 1) * V[1], 1) : A.scale(1 + (M.s.v[0] - 1) * V, 1 + (M.s.v[1] - 1) * V, 1));
                  for (F2 = 0; F2 < w; F2 += 1) {
                    if (M = x[F2].a, V = x[F2].s.getMult(_[s].anIndexes[F2], S.a[F2].s.totalChars), M.sk.propType && (V.length ? A.skewFromAxis(-M.sk.v * V[0], M.sa.v * V[1]) : A.skewFromAxis(-M.sk.v * V, M.sa.v * V)), M.r.propType && (V.length ? A.rotateZ(-M.r.v * V[2]) : A.rotateZ(-M.r.v * V)), M.ry.propType && (V.length ? A.rotateY(M.ry.v * V[1]) : A.rotateY(M.ry.v * V)), M.rx.propType && (V.length ? A.rotateX(M.rx.v * V[0]) : A.rotateX(M.rx.v * V)), M.o.propType && (V.length ? N += (M.o.v * V[0] - N) * V[0] : N += (M.o.v * V - N) * V), t.strokeWidthAnim && M.sw.propType && (V.length ? H += M.sw.v * V[0] : H += M.sw.v * V), t.strokeColorAnim && M.sc.propType)
                      for (q = 0; q < 3; q += 1)
                        V.length ? O[q] += (M.sc.v[q] - O[q]) * V[0] : O[q] += (M.sc.v[q] - O[q]) * V;
                    if (t.fillColorAnim && t.fc) {
                      if (M.fc.propType)
                        for (q = 0; q < 3; q += 1)
                          V.length ? j[q] += (M.fc.v[q] - j[q]) * V[0] : j[q] += (M.fc.v[q] - j[q]) * V;
                      M.fh.propType && (j = V.length ? addHueToRGB(j, M.fh.v * V[0]) : addHueToRGB(j, M.fh.v * V)), M.fs.propType && (j = V.length ? addSaturationToRGB(j, M.fs.v * V[0]) : addSaturationToRGB(j, M.fs.v * V)), M.fb.propType && (j = V.length ? addBrightnessToRGB(j, M.fb.v * V[0]) : addBrightnessToRGB(j, M.fb.v * V));
                    }
                  }
                  for (F2 = 0; F2 < w; F2 += 1)
                    (M = x[F2].a).p.propType && (V = x[F2].s.getMult(_[s].anIndexes[F2], S.a[F2].s.totalChars), this._hasMaskedPath ? V.length ? A.translate(0, M.p.v[1] * V[0], -M.p.v[2] * V[1]) : A.translate(0, M.p.v[1] * V, -M.p.v[2] * V) : V.length ? A.translate(M.p.v[0] * V[0], M.p.v[1] * V[1], -M.p.v[2] * V[2]) : A.translate(M.p.v[0] * V, M.p.v[1] * V, -M.p.v[2] * V));
                  if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                    if (A.translate(0, -t.ls), A.translate(0, E[1] * B * 0.01 + i, 0), S.p.p) {
                      b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                      var ht = 180 * Math.atan(b) / Math.PI;
                      h.point[0] < c.point[0] && (ht += 180), A.rotate(-ht * Math.PI / 180);
                    }
                    A.translate(G, z, 0), o -= E[0] * _[s].an * 5e-3, _[s + 1] && K !== _[s + 1].ind && (o += _[s].an / 2, o += 1e-3 * t.tr * t.finalSize);
                  } else {
                    switch (A.translate(r, i, 0), t.ps && A.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                      case 1:
                        A.translate(_[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[_[s].line]), 0, 0);
                        break;
                      case 2:
                        A.translate(_[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[_[s].line]) / 2, 0, 0);
                    }
                    A.translate(0, -t.ls), A.translate(L, 0, 0), A.translate(E[0] * _[s].an * 5e-3, E[1] * B * 0.01, 0), r += _[s].l + 1e-3 * t.tr * t.finalSize;
                  }
                  "html" === C ? tt = A.toCSS() : "svg" === C ? tt = A.to2dCSS() : et = [A.props[0], A.props[1], A.props[2], A.props[3], A.props[4], A.props[5], A.props[6], A.props[7], A.props[8], A.props[9], A.props[10], A.props[11], A.props[12], A.props[13], A.props[14], A.props[15]], J = N;
                }
                this.lettersChangedFlag = T <= s ? (I = new LetterProps(J, W, Y, X, tt, et), this.renderedLetters.push(I), T += 1, true) : (I = this.renderedLetters[s]).update(J, W, Y, X, tt, et) || this.lettersChangedFlag;
              }
            }
          }, TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
          }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, i, s, a) {
            this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false;
            var n = this._mdf.p = false;
            return this.o !== t && (this.o = t, n = this._mdf.o = true), this.sw !== e && (this.sw = e, n = this._mdf.sw = true), this.sc !== r && (this.sc = r, n = this._mdf.sc = true), this.fc !== i && (this.fc = i, n = this._mdf.fc = true), this.m !== s && (this.m = s, n = this._mdf.m = true), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, n = this._mdf.p = true), n;
          }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }, TextProperty.prototype.setCurrentData = function(t) {
            t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
          }, TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes();
          }, TextProperty.prototype.searchKeyframes = function() {
            return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
          }, TextProperty.prototype.addEffect = function(t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
          }, TextProperty.prototype.getValue = function(t) {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
              this.currentData.t = this.data.d.k[this.keysIndex].s.t;
              var e = this.currentData, r = this.keysIndex;
              if (this.lock)
                this.setCurrentData(this.currentData);
              else {
                var i;
                this.lock = true, this._mdf = false;
                var s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < s; i += 1)
                  a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
              }
            }
          }, TextProperty.prototype.getKeyframeValue = function() {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); )
              r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
          }, TextProperty.prototype.buildFinalText = function(t) {
            for (var e, r, i = [], s = 0, a = t.length, n = false; s < a; )
              e = t.charCodeAt(s), FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(s) : 55296 <= e && e <= 56319 ? 56320 <= (r = t.charCodeAt(s + 1)) && r <= 57343 ? (n || FontManager.isModifier(e, r) ? (i[i.length - 1] += t.substr(s, 2), n = false) : i.push(t.substr(s, 2)), s += 1) : i.push(t.charAt(s)) : 56319 < e ? (r = t.charCodeAt(s + 1), FontManager.isZeroWidthJoiner(e, r) ? (n = true, i[i.length - 1] += t.substr(s, 2), s += 1) : i.push(t.charAt(s))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(s), n = true) : i.push(t.charAt(s)), s += 1;
            return i;
          }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = true;
            var e, r, i, s, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], m = 0, f = l.m.g, c = 0, d = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), P = 0, E = getFontProperties(b);
            t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
            var x, S = t.tr / 1e3 * t.finalSize;
            if (t.sz)
              for (var A, C, T = true, _ = t.sz[0], k = t.sz[1]; T; ) {
                g = A = 0, r = (C = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
                var D = -1;
                for (e = 0; e < r; e += 1)
                  x = C[e].charCodeAt(0), i = false, " " === C[e] ? D = e : 13 !== x && 3 !== x || (i = !(g = 0), A += t.finalLineHeight || 1.2 * t.finalSize), _ < g + (P = h.chars ? (o = h.getCharData(C[e], b.fStyle, b.fFamily), i ? 0 : o.w * t.finalSize / 100) : h.measureText(C[e], t.f, t.finalSize)) && " " !== C[e] ? (-1 === D ? r += 1 : e = D, A += t.finalLineHeight || 1.2 * t.finalSize, C.splice(e, D === e ? 1 : 0, "\r"), D = -1, g = 0) : (g += P, g += S);
                A += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < A ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C, r = t.finalText.length, T = false);
              }
            g = -S;
            var M, F2 = P = 0;
            for (e = 0; e < r; e += 1)
              if (i = false, 13 === (x = (M = t.finalText[e]).charCodeAt(0)) || 3 === x ? (F2 = 0, y.push(g), v = v < g ? g : v, g = -2 * S, i = !(s = ""), u += 1) : s = M, P = h.chars ? (o = h.getCharData(M, b.fStyle, h.getFontByName(t.f).fFamily), i ? 0 : o.w * t.finalSize / 100) : h.measureText(s, t.f, t.finalSize), " " === M ? F2 += P + S : (g += P + S + F2, F2 = 0), p.push({ l: P, an: P, add: c, n: i, anIndexes: [], val: s, line: u, animatorJustifyOffset: 0 }), 2 == f) {
                if (c += P, "" === s || " " === s || e === r - 1) {
                  for ("" !== s && " " !== s || (c -= P); d <= e; )
                    p[d].an = c, p[d].ind = m, p[d].extra = P, d += 1;
                  m += 1, c = 0;
                }
              } else if (3 == f) {
                if (c += P, "" === s || e === r - 1) {
                  for ("" === s && (c -= P); d <= e; )
                    p[d].an = c, p[d].ind = m, p[d].extra = P, d += 1;
                  c = 0, m += 1;
                }
              } else
                p[m].ind = m, p[m].extra = 0, m += 1;
            if (t.l = p, v = v < g ? g : v, y.push(g), t.sz)
              t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else
              switch (t.boxWidth = v, t.j) {
                case 1:
                  t.justifyOffset = -t.boxWidth;
                  break;
                case 2:
                  t.justifyOffset = -t.boxWidth / 2;
                  break;
                default:
                  t.justifyOffset = 0;
              }
            t.lineWidths = y;
            var w, I, V, B, R = l.a;
            n = R.length;
            var L = [];
            for (a = 0; a < n; a += 1) {
              for ((w = R[a]).a.sc && (t.strokeColorAnim = true), w.a.sw && (t.strokeWidthAnim = true), (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (t.fillColorAnim = true), B = 0, V = w.s.b, e = 0; e < r; e += 1)
                (I = p[e]).anIndexes[a] = B, (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == r - 1) || 4 == V && (I.n || e == r - 1)) && (1 === w.s.rn && L.push(B), B += 1);
              l.a[a].s.totalChars = B;
              var G, z = -1;
              if (1 === w.s.rn)
                for (e = 0; e < r; e += 1)
                  z != (I = p[e]).anIndexes[a] && (z = I.anIndexes[a], G = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[a] = G;
            }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
          }, TextProperty.prototype.updateDocumentData = function(t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this);
          }, TextProperty.prototype.recalculate = function(t) {
            var e = this.data.d.k[t].s;
            e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
          }, TextProperty.prototype.canResizeFont = function(t) {
            this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
          }, TextProperty.prototype.setMinimumFontSize = function(t) {
            this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
          };
          var TextSelectorProp = function() {
            var c = Math.max, d = Math.min, u = Math.floor;
            function i(t, e) {
              this._currentTextLength = -1, this.k = false, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
            }
            return i.prototype = { getMult: function(t) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var e = 0, r = 0, i2 = 1, s = 1;
              0 < this.ne.v ? e = this.ne.v / 100 : r = -this.ne.v / 100, 0 < this.xe.v ? i2 = 1 - this.xe.v / 100 : s = 1 + this.xe.v / 100;
              var a = BezierFactory.getBezierEasing(e, r, i2, s).get, n = 0, o = this.finalS, h = this.finalE, l = this.data.sh;
              if (2 === l)
                n = a(n = h === o ? h <= t ? 1 : 0 : c(0, d(0.5 / (h - o) + (t - o) / (h - o), 1)));
              else if (3 === l)
                n = a(n = h === o ? h <= t ? 0 : 1 : 1 - c(0, d(0.5 / (h - o) + (t - o) / (h - o), 1)));
              else if (4 === l)
                h === o ? n = 0 : (n = c(0, d(0.5 / (h - o) + (t - o) / (h - o), 1))) < 0.5 ? n *= 2 : n = 1 - 2 * (n - 0.5), n = a(n);
              else if (5 === l) {
                if (h === o)
                  n = 0;
                else {
                  var p = h - o, m = -p / 2 + (t = d(c(0, t + 0.5 - o), h - o)), f = p / 2;
                  n = Math.sqrt(1 - m * m / (f * f));
                }
                n = a(n);
              } else
                n = 6 === l ? a(n = h === o ? 0 : (t = d(c(0, t + 0.5 - o), h - o), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (h - o))) / 2)) : (t >= u(o) && (n = c(0, d(t - o < 0 ? d(h, 1) - (o - t) : h - t, 1))), a(n));
              return n * this.a.v;
            }, getValue: function(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r = this.o.v / e, i2 = this.s.v / e + r, s = this.e.v / e + r;
              if (s < i2) {
                var a = i2;
                i2 = s, s = a;
              }
              this.finalS = i2, this.finalE = s;
            } }, extendPrototype([DynamicPropertyContainer], i), { getTextSelectorProp: function(t, e, r) {
              return new i(t, e, r);
            } };
          }(), poolFactory = function(t, e, r) {
            var i = 0, s = t, a = createSizedArray(s);
            return { newElement: function() {
              return i ? a[i -= 1] : e();
            }, release: function(t2) {
              i === s && (a = pooling.double(a), s *= 2), r && r(t2), a[i] = t2, i += 1;
            } };
          }, pooling = { double: function(t) {
            return t.concat(createSizedArray(t.length));
          } }, pointPool = poolFactory(8, function() {
            return createTypedArray("float32", 2);
          }), shapePool = (IB = poolFactory(4, function() {
            return new ShapePath();
          }, function(t) {
            var e, r = t._length;
            for (e = 0; e < r; e += 1)
              pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = false;
          }), IB.clone = function(t) {
            var e, r = IB.newElement(), i = void 0 === t._length ? t.v.length : t._length;
            for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)
              r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return r;
          }, IB), IB, shapeCollectionPool = (QB = { newShapeCollection: function() {
            var t;
            t = RB ? TB[RB -= 1] : new ShapeCollection();
            return t;
          }, release: function(t) {
            var e, r = t._length;
            for (e = 0; e < r; e += 1)
              shapePool.release(t.shapes[e]);
            t._length = 0, RB === SB && (TB = pooling.double(TB), SB *= 2);
            TB[RB] = t, RB += 1;
          } }, RB = 0, SB = 4, TB = createSizedArray(SB), QB), QB, RB, SB, TB, segmentsLengthPool = poolFactory(8, function() {
            return { lengths: [], totalLength: 0 };
          }, function(t) {
            var e, r = t.lengths.length;
            for (e = 0; e < r; e += 1)
              bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0;
          }), bezierLengthPool = poolFactory(8, function() {
            return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) };
          }), markerParser = function() {
            function a(t) {
              for (var e, r = t.split("\r\n"), i = {}, s = 0, a2 = 0; a2 < r.length; a2 += 1)
                2 === (e = r[a2].split(":")).length && (i[e[0]] = e[1].trim(), s += 1);
              if (0 === s)
                throw new Error();
              return i;
            }
            return function(e) {
              for (var t = [], r = 0; r < e.length; r += 1) {
                var i = e[r], s = { time: i.tm, duration: i.dr };
                try {
                  s.payload = JSON.parse(e[r].cm);
                } catch (t2) {
                  try {
                    s.payload = a(e[r].cm);
                  } catch (t3) {
                    s.payload = { name: e[r] };
                  }
                }
                t.push(s);
              }
              return t;
            };
          }();
          function BaseRenderer() {
          }
          function SVGRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
            var r = "";
            if (e && e.title) {
              var i = createNS("title"), s = createElementID();
              i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s;
            }
            if (e && e.description) {
              var a = createNS("desc"), n = createElementID();
              a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n;
            }
            r && this.svgElement.setAttribute("aria-labelledby", r);
            var o = createNS("defs");
            this.svgElement.appendChild(o);
            var h = createNS("g");
            this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && false === e.hideOnTransparent), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" } }, this.globalData = { _mdf: false, frameNum: -1, defs: o, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
          }
          function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || false, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", className: e && e.className || "", id: e && e.id || "" }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: false, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = false, this.rendererType = "canvas";
          }
          function HybridRenderer(t, e) {
            this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && false === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
          }
          function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i, s, a = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(n), this.solidPath = "";
            var o, h, l, p, m, f, c = this.masksProperties, d = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path";
            for (i = 0; i < n; i += 1)
              if (("a" !== c[i].mode && "n" !== c[i].mode || c[i].inv || 100 !== c[i].o.k || c[i].o.x) && (v = g = "mask"), "s" !== c[i].mode && "i" !== c[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), s = createNS("path"), "n" === c[i].mode)
                this.viewData[i] = { op: PropertyFactory.getProp(this.element, c[i].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3), elem: s, lastPath: "" }, a.appendChild(s);
              else {
                var b;
                if (d += 1, s.setAttribute("fill", "s" === c[i].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== c[i].x.k ? (v = g = "mask", f = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (m = createNS("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), p.appendChild(m), a.appendChild(p), s.setAttribute("stroke", "s" === c[i].mode ? "#000000" : "#ffffff")) : f = m = null, this.storedData[i] = { elem: s, x: f, expan: m, lastPath: "", lastOperator: "", filterId: b, lastRadius: 0 }, "i" === c[i].mode) {
                  h = u.length;
                  var P = createNS("g");
                  for (o = 0; o < h; o += 1)
                    P.appendChild(u[o]);
                  var E = createNS("mask");
                  E.setAttribute("mask-type", "alpha"), E.setAttribute("id", y + "_" + d), E.appendChild(s), a.appendChild(E), P.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), u.length = 0, u.push(P);
                } else
                  u.push(s);
                c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = { elem: s, lastPath: "", op: PropertyFactory.getProp(this.element, c[i].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3), invRect: l }, this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i]);
              }
            for (this.maskElement = createNS(g), n = u.length, i = 0; i < n; i += 1)
              this.maskElement.appendChild(u[i]);
            0 < d && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
          }
          function HierarchyElement() {
          }
          function FrameElement() {
          }
          function TransformElement() {
          }
          function RenderableElement() {
          }
          function RenderableDOMElement() {
          }
          function ProcessedElement(t, e) {
            this.elem = t, this.pos = e;
          }
          function SVGStyleData(t, e) {
            this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = true === t.hd, this.pElem = createNS("path"), this.msElem = null;
          }
          function SVGShapeData(t, e, r) {
            this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
            for (var i = 0, s = t.length; i < s; ) {
              if (t[i].mProps.dynamicProperties.length) {
                this._isAnimated = true;
                break;
              }
              i += 1;
            }
          }
          function SVGTransformData(t, e, r) {
            this.transform = { mProps: t, op: e, container: r }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
          }
          function SVGStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
          }
          function SVGFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
          }
          function SVGGradientFillStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
          }
          function SVGGradientStrokeStyleData(t, e, r) {
            this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
          }
          function ShapeGroupData() {
            this.it = [], this.prevViewData = [], this.gr = createNS("g");
          }
          BaseRenderer.prototype.checkLayers = function(t) {
            var e, r, i = this.layers.length;
            for (this.completeLayers = true, e = i - 1; 0 <= e; e -= 1)
              this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements();
          }, BaseRenderer.prototype.createItem = function(t) {
            switch (t.ty) {
              case 2:
                return this.createImage(t);
              case 0:
                return this.createComp(t);
              case 1:
                return this.createSolid(t);
              case 3:
                return this.createNull(t);
              case 4:
                return this.createShape(t);
              case 5:
                return this.createText(t);
              case 6:
                return this.createAudio(t);
              case 13:
                return this.createCamera(t);
              case 15:
                return this.createFootage(t);
              default:
                return this.createNull(t);
            }
          }, BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.");
          }, BaseRenderer.prototype.createAudio = function(t) {
            return new AudioElement(t, this.globalData, this);
          }, BaseRenderer.prototype.createFootage = function(t) {
            return new FootageElement(t, this.globalData, this);
          }, BaseRenderer.prototype.buildAllItems = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
              this.buildItem(t);
            this.checkPendingElements();
          }, BaseRenderer.prototype.includeLayers = function(t) {
            var e;
            this.completeLayers = false;
            var r, i = t.length, s = this.layers.length;
            for (e = 0; e < i; e += 1)
              for (r = 0; r < s; ) {
                if (this.layers[r].id === t[e].id) {
                  this.layers[r] = t[e];
                  break;
                }
                r += 1;
              }
          }, BaseRenderer.prototype.setProjectInterface = function(t) {
            this.globalData.projectInterface = t;
          }, BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems();
          }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
            for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n; )
              s[a].ind == e && (i[a] && true !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1;
          }, BaseRenderer.prototype.addPendingElement = function(t) {
            this.pendingElements.push(t);
          }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
              }
          }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
            this.globalData.fontManager = new FontManager(), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
          }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
            return new NullElement(t, this.globalData, this);
          }, SVGRenderer.prototype.createShape = function(t) {
            return new SVGShapeElement(t, this.globalData, this);
          }, SVGRenderer.prototype.createText = function(t) {
            return new SVGTextLottieElement(t, this.globalData, this);
          }, SVGRenderer.prototype.createImage = function(t) {
            return new IImageElement(t, this.globalData, this);
          }, SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this);
          }, SVGRenderer.prototype.createSolid = function(t) {
            return new ISolidElement(t, this.globalData, this);
          }, SVGRenderer.prototype.configAnimation = function(t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
            var r = createNS("clipPath"), i = createNS("rect");
            i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
            var s = createElementID();
            r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
          }, SVGRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = true, this.animationItem = null;
          }, SVGRenderer.prototype.updateContainerSize = function() {
          }, SVGRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              e[t] = true;
              var r = this.createItem(this.layers[t]);
              e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && true !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)));
            }
          }, SVGRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
              var t = this.pendingElements.pop();
              if (t.checkParenting(), t.data.tt)
                for (var e = 0, r = this.elements.length; e < r; ) {
                  if (this.elements[e] === t) {
                    t.setMatte(this.elements[e - 1].layerId);
                    break;
                  }
                  e += 1;
                }
            }
          }, SVGRenderer.prototype.renderFrame = function(t) {
            if (this.renderedFrame !== t && !this.destroyed) {
              var e;
              null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
              var r = this.layers.length;
              for (this.completeLayers || this.checkLayers(t), e = r - 1; 0 <= e; e -= 1)
                (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
              if (this.globalData._mdf)
                for (e = 0; e < r; e += 1)
                  (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
          }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
              for (var i, s = 0; s < e; )
                this.elements[s] && true !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), s += 1;
              i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r);
            }
          }, SVGRenderer.prototype.hide = function() {
            this.layerElement.style.display = "none";
          }, SVGRenderer.prototype.show = function() {
            this.layerElement.style.display = "block";
          }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
            return new CVShapeElement(t, this.globalData, this);
          }, CanvasRenderer.prototype.createText = function(t) {
            return new CVTextElement(t, this.globalData, this);
          }, CanvasRenderer.prototype.createImage = function(t) {
            return new CVImageElement(t, this.globalData, this);
          }, CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this);
          }, CanvasRenderer.prototype.createSolid = function(t) {
            return new CVSolidElement(t, this.globalData, this);
          }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
              if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.cTr.props;
                this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var r = this.contextData.cTr.props;
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
              } else
                this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
          }, CanvasRenderer.prototype.ctxOpacity = function(t) {
            if (!this.renderConfig.clearCanvas)
              return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO);
          }, CanvasRenderer.prototype.reset = function() {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
          }, CanvasRenderer.prototype.save = function(t) {
            if (this.renderConfig.clearCanvas) {
              t && this.canvasContext.save();
              var e, r = this.contextData.cTr.props;
              this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
              var i = this.contextData.saved[this.contextData.cArrPos];
              for (e = 0; e < 16; e += 1)
                i[e] = r[e];
              this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
            } else
              this.canvasContext.save();
          }, CanvasRenderer.prototype.restore = function(t) {
            if (this.renderConfig.clearCanvas) {
              t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
              var e, r = this.contextData.saved[this.contextData.cArrPos], i = this.contextData.cTr.props;
              for (e = 0; e < 16; e += 1)
                i[e] = r[e];
              this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r);
            } else
              this.canvasContext.restore();
          }, CanvasRenderer.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
              this.animationItem.container = createTag("canvas");
              var e = this.animationItem.container.style;
              e.width = "100%", e.height = "100%";
              var r = "0px 0px 0px";
              e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
            } else
              this.canvasContext = this.renderConfig.context;
            this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = false, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
          }, CanvasRenderer.prototype.updateContainerSize = function() {
            var t, e, r, i;
            if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
              var s = this.renderConfig.preserveAspectRatio.split(" "), a = s[1] || "meet", n = s[0] || "xMidYMid", o = n.substr(0, 4), h = n.substr(4);
              r = t / e, i = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = r < i && "meet" === a || i < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
            } else
              "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, true);
          }, CanvasRenderer.prototype.destroy = function() {
            var t;
            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1)
              this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = true;
          }, CanvasRenderer.prototype.renderFrame = function(t, e) {
            if ((this.renderedFrame !== t || true !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
              var r;
              this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
              var i = this.layers.length;
              for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1)
                (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
              if (this.globalData._mdf) {
                for (true === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; 0 <= r; r -= 1)
                  (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                true !== this.renderConfig.clearCanvas && this.restore();
              }
            }
          }, CanvasRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              var r = this.createItem(this.layers[t], this, this.globalData);
              (e[t] = r).initExpressions();
            }
          }, CanvasRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
              this.pendingElements.pop().checkParenting();
            }
          }, CanvasRenderer.prototype.hide = function() {
            this.animationItem.container.style.display = "none";
          }, CanvasRenderer.prototype.show = function() {
            this.animationItem.container.style.display = "block";
          }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
              this.pendingElements.pop().checkParenting();
            }
          }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
            var r = t.getBaseElement();
            if (r) {
              var i = this.layers[e];
              if (i.ddd && this.supports3d)
                this.addTo3dContainer(r, e);
              else if (this.threeDElements)
                this.addTo3dContainer(r, e);
              else {
                for (var s, a, n = 0; n < e; )
                  this.elements[n] && true !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
                s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r);
              }
            }
          }, HybridRenderer.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
          }, HybridRenderer.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
          }, HybridRenderer.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
          }, HybridRenderer.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
          }, HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
          }, HybridRenderer.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
          }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
            for (var e = 0, r = this.threeDElements.length; e < r; ) {
              if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                return this.threeDElements[e].perspectiveElem;
              e += 1;
            }
            return null;
          }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
            var r, i, s = createTag("div");
            styleDiv(s);
            var a = createTag("div");
            if (styleDiv(a), "3d" === e) {
              (r = s.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
              var n = "50% 50%";
              r.webkitTransformOrigin = n, r.mozTransformOrigin = n, r.transformOrigin = n;
              var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              (i = a.style).transform = o, i.webkitTransform = o;
            }
            s.appendChild(a);
            var h = { container: a, perspectiveElem: s, startPos: t, endPos: t, type: e };
            return this.threeDElements.push(h), h;
          }, HybridRenderer.prototype.build3dContainers = function() {
            var t, e, r = this.layers.length, i = "";
            for (t = 0; t < r; t += 1)
              this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t);
            for (t = (r = this.threeDElements.length) - 1; 0 <= t; t -= 1)
              this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
          }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
            for (var r = 0, i = this.threeDElements.length; r < i; ) {
              if (e <= this.threeDElements[r].endPos) {
                for (var s, a = this.threeDElements[r].startPos; a < e; )
                  this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
                s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t);
                break;
              }
              r += 1;
            }
          }, HybridRenderer.prototype.configAnimation = function(t) {
            var e = createTag("div"), r = this.animationItem.wrapper, i = e.style;
            i.width = t.w + "px", i.height = t.h + "px", styleDiv(this.resizerElem = e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
            var s = createNS("svg");
            s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
            var a = createNS("defs");
            s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
          }, HybridRenderer.prototype.destroy = function() {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
              this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = true, this.animationItem = null;
          }, HybridRenderer.prototype.updateContainerSize = function() {
            var t, e, r, i, s = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight;
            i = s / a < this.globalData.compSize.w / this.globalData.compSize.h ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, r = 0, (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, 0);
            var n = this.resizerElem.style;
            n.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", n.transform = n.webkitTransform;
          }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
            this.resizerElem.style.display = "none";
          }, HybridRenderer.prototype.show = function() {
            this.resizerElem.style.display = "block";
          }, HybridRenderer.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera)
              this.camera.setup();
            else {
              var t, e = this.globalData.compSize.w, r = this.globalData.compSize.h, i = this.threeDElements.length;
              for (t = 0; t < i; t += 1) {
                var s = this.threeDElements[t].perspectiveElem.style;
                s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", s.perspective = s.webkitPerspective;
              }
            }
          }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
            var e, r = t.length, i = createTag("div");
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var s = this.createComp(t[e], i, this.globalData.comp, null);
                s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
              }
          }, MaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t].prop;
          }, MaskElement.prototype.renderFrame = function(t) {
            var e, r = this.element.finalTransform.mat, i = this.masksProperties.length;
            for (e = 0; e < i; e += 1)
              if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                var s = this.storedData[e].expan;
                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
              }
          }, MaskElement.prototype.getMaskelement = function() {
            return this.maskElement;
          }, MaskElement.prototype.createLayerSolidPath = function() {
            var t = "M0,0 ";
            return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
          }, MaskElement.prototype.drawPath = function(t, e, r) {
            var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
            for (s = e._length, i = 1; i < s; i += 1)
              a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
            if (e.c && 1 < s && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
              var n = "";
              r.elem && (e.c && (n = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", n)), r.lastPath = a;
            }
          }, MaskElement.prototype.destroy = function() {
            this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
          }, HierarchyElement.prototype = { initHierarchy: function() {
            this.hierarchy = [], this._isParent = false, this.checkParenting();
          }, setHierarchy: function(t) {
            this.hierarchy = t;
          }, setAsParent: function() {
            this._isParent = true;
          }, checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
          } }, FrameElement.prototype = { initFrame: function() {
            this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
          }, prepareProperties: function(t, e) {
            var r, i = this.dynamicProperties.length;
            for (r = 0; r < i; r += 1)
              (e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = true, this._mdf = true));
          }, addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
          } }, TransformElement.prototype = { initTransform: function() {
            this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _opMdf: false, mat: new Matrix() }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
          }, renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var t, e = this.finalTransform.mat, r = 0, i = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < i; ) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = true;
                    break;
                  }
                  r += 1;
                }
              if (this.finalTransform._matMdf)
                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1)
                  t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
            }
          }, globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var r, i = true, s = this.comp; i; )
              s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : i = false;
            var a, n = e.length;
            for (r = 0; r < n; r += 1)
              a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
            return t;
          }, mHelper: new Matrix() }, RenderableElement.prototype = { initRenderable: function() {
            this.isInRange = false, this.hidden = false, this.isTransparent = false, this.renderableComponents = [];
          }, addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
          }, removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
          }, prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t);
          }, checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
          }, checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? true !== this.isInRange && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : false !== this.isInRange && (this.globalData._mdf = true, this.isInRange = false, this.hide());
          }, renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1)
              this.renderableComponents[t].renderFrame(this._isFirstFrame);
          }, sourceRectAtTime: function() {
            return { top: 0, left: 0, width: 100, height: 100 };
          }, getLayerSize: function() {
            return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
          } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
          }, hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = true);
          }, show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = false, this._isFirstFrame = true);
          }, renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
          }, renderInnerContent: function() {
          }, prepareFrame: function(t) {
            this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
          }, destroy: function() {
            this.innerElem = null, this.destroyBaseElement();
          } })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
            this.d = "", this._mdf = false;
          }, SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = true;
          }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
            this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
          }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
            var r = createElementID(), i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
            var s, a, n, o = [];
            for (n = 4 * e.g.p, a = 0; a < n; a += 4)
              s = createNS("stop"), i.appendChild(s), o.push(s);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o;
          }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
              var r, i, s, a = createNS("mask"), n = createNS("path");
              a.appendChild(n);
              var o = createElementID(), h = createElementID();
              a.setAttribute("id", h);
              var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
              l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
              var p = this.stops;
              for (i = 4 * t.g.p; i < s; i += 2)
                (r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
              n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n;
            }
          }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
          var SVGElementsRenderer = function() {
            var y = new Matrix(), g = new Matrix();
            function e(t, e2, r2) {
              (r2 || e2.transform.op._mdf) && e2.transform.container.setAttribute("opacity", e2.transform.op.v), (r2 || e2.transform.mProps._mdf) && e2.transform.container.setAttribute("transform", e2.transform.mProps.v.to2dCSS());
            }
            function r(t, e2, r2) {
              var i2, s2, a2, n2, o, h, l, p, m, f, c, d = e2.styles.length, u = e2.lvl;
              for (h = 0; h < d; h += 1) {
                if (n2 = e2.sh._mdf || r2, e2.styles[h].lvl < u) {
                  for (p = g.reset(), f = u - e2.styles[h].lvl, c = e2.transformers.length - 1; !n2 && 0 < f; )
                    n2 = e2.transformers[c].mProps._mdf || n2, f -= 1, c -= 1;
                  if (n2)
                    for (f = u - e2.styles[h].lvl, c = e2.transformers.length - 1; 0 < f; )
                      m = e2.transformers[c].mProps.v.props, p.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), f -= 1, c -= 1;
                } else
                  p = y;
                if (s2 = (l = e2.sh.paths)._length, n2) {
                  for (a2 = "", i2 = 0; i2 < s2; i2 += 1)
                    (o = l.shapes[i2]) && o._length && (a2 += buildShapeString(o, o._length, o.c, p));
                  e2.caches[h] = a2;
                } else
                  a2 = e2.caches[h];
                e2.styles[h].d += true === t.hd ? "" : a2, e2.styles[h]._mdf = n2 || e2.styles[h]._mdf;
              }
            }
            function i(t, e2, r2) {
              var i2 = e2.style;
              (e2.c._mdf || r2) && i2.pElem.setAttribute("fill", "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"), (e2.o._mdf || r2) && i2.pElem.setAttribute("fill-opacity", e2.o.v);
            }
            function s(t, e2, r2) {
              a(t, e2, r2), n(t, e2, r2);
            }
            function a(t, e2, r2) {
              var i2, s2, a2, n2, o, h = e2.gf, l = e2.g._hasOpacity, p = e2.s.v, m = e2.e.v;
              if (e2.o._mdf || r2) {
                var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e2.style.pElem.setAttribute(f, e2.o.v);
              }
              if (e2.s._mdf || r2) {
                var c = 1 === t.t ? "x1" : "cx", d = "x1" === c ? "y1" : "cy";
                h.setAttribute(c, p[0]), h.setAttribute(d, p[1]), l && !e2.g._collapsable && (e2.of.setAttribute(c, p[0]), e2.of.setAttribute(d, p[1]));
              }
              if (e2.g._cmdf || r2) {
                i2 = e2.cst;
                var u = e2.g.c;
                for (a2 = i2.length, s2 = 0; s2 < a2; s2 += 1)
                  (n2 = i2[s2]).setAttribute("offset", u[4 * s2] + "%"), n2.setAttribute("stop-color", "rgb(" + u[4 * s2 + 1] + "," + u[4 * s2 + 2] + "," + u[4 * s2 + 3] + ")");
              }
              if (l && (e2.g._omdf || r2)) {
                var y2 = e2.g.o;
                for (a2 = (i2 = e2.g._collapsable ? e2.cst : e2.ost).length, s2 = 0; s2 < a2; s2 += 1)
                  n2 = i2[s2], e2.g._collapsable || n2.setAttribute("offset", y2[2 * s2] + "%"), n2.setAttribute("stop-opacity", y2[2 * s2 + 1]);
              }
              if (1 === t.t)
                (e2.e._mdf || r2) && (h.setAttribute("x2", m[0]), h.setAttribute("y2", m[1]), l && !e2.g._collapsable && (e2.of.setAttribute("x2", m[0]), e2.of.setAttribute("y2", m[1])));
              else if ((e2.s._mdf || e2.e._mdf || r2) && (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)), h.setAttribute("r", o), l && !e2.g._collapsable && e2.of.setAttribute("r", o)), e2.e._mdf || e2.h._mdf || e2.a._mdf || r2) {
                o || (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)));
                var g2 = Math.atan2(m[1] - p[1], m[0] - p[0]), v = e2.h.v;
                1 <= v ? v = 0.99 : v <= -1 && (v = -0.99);
                var b = o * v, P = Math.cos(g2 + e2.a.v) * b + p[0], E = Math.sin(g2 + e2.a.v) * b + p[1];
                h.setAttribute("fx", P), h.setAttribute("fy", E), l && !e2.g._collapsable && (e2.of.setAttribute("fx", P), e2.of.setAttribute("fy", E));
              }
            }
            function n(t, e2, r2) {
              var i2 = e2.style, s2 = e2.d;
              s2 && (s2._mdf || r2) && s2.dashStr && (i2.pElem.setAttribute("stroke-dasharray", s2.dashStr), i2.pElem.setAttribute("stroke-dashoffset", s2.dashoffset[0])), e2.c && (e2.c._mdf || r2) && i2.pElem.setAttribute("stroke", "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"), (e2.o._mdf || r2) && i2.pElem.setAttribute("stroke-opacity", e2.o.v), (e2.w._mdf || r2) && (i2.pElem.setAttribute("stroke-width", e2.w.v), i2.msElem && i2.msElem.setAttribute("stroke-width", e2.w.v));
            }
            return { createRenderFunction: function(t) {
              switch (t.ty) {
                case "fl":
                  return i;
                case "gf":
                  return a;
                case "gs":
                  return s;
                case "st":
                  return n;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return r;
                case "tr":
                  return e;
                default:
                  return null;
              }
            } };
          }();
          function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
          }
          function CVShapeData(t, e, r, i) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var s, a = 4;
            "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
            var n, o = r.length;
            for (s = 0; s < o; s += 1)
              r[s].closed || (n = { transforms: i.addTransformSequence(r[s].transforms), trNodes: [] }, this.styledShapes.push(n), r[s].elements.push(n));
          }
          function BaseElement() {
          }
          function NullElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
          }
          function SVGBaseElement() {
          }
          function IShapeElement() {
          }
          function ITextElement() {
          }
          function ICompElement() {
          }
          function IImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
          }
          function ISolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function AudioElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = false, this._canPlay = false;
            var i = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
          }
          function FootageElement(t, e, r) {
            this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
          }
          function SVGCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
          }
          function SVGTextLottieElement(t, e, r) {
            this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
          }
          function SVGShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
          }
          function SVGTintFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
              var i, s = createNS("feMerge");
              t.appendChild(s), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(i);
            }
          }
          function SVGFillFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r;
          }
          function SVGGaussianBlurEffect(t, e) {
            t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
            var r = createNS("feGaussianBlur");
            t.appendChild(r), this.feGaussianBlur = r;
          }
          function SVGStrokeEffect(t, e) {
            this.initialized = false, this.filterManager = e, this.elem = t, this.paths = [];
          }
          function SVGTritoneFilter(t, e) {
            this.filterManager = e;
            var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
            var i = createNS("feComponentTransfer");
            i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
            var s = createNS("feFuncR");
            s.setAttribute("type", "table"), i.appendChild(s), this.feFuncR = s;
            var a = createNS("feFuncG");
            a.setAttribute("type", "table"), i.appendChild(a), this.feFuncG = a;
            var n = createNS("feFuncB");
            n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n;
          }
          function SVGProLevelsFilter(t, e) {
            this.filterManager = e;
            var r = this.filterManager.effectElements, i = createNS("feComponentTransfer");
            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i));
          }
          function SVGDropShadowEffect(t, e) {
            var r = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", r.x), t.setAttribute("y", r.y), t.setAttribute("width", r.width), t.setAttribute("height", r.height), this.filterManager = e;
            var i = createNS("feGaussianBlur");
            i.setAttribute("in", "SourceAlpha"), i.setAttribute("result", "drop_shadow_1"), i.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i, t.appendChild(i);
            var s = createNS("feOffset");
            s.setAttribute("dx", "25"), s.setAttribute("dy", "0"), s.setAttribute("in", "drop_shadow_1"), s.setAttribute("result", "drop_shadow_2"), this.feOffset = s, t.appendChild(s);
            var a = createNS("feFlood");
            a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
            var n = createNS("feComposite");
            n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
            var o, h = createNS("feMerge");
            t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = false, h.appendChild(o);
          }
          ShapeTransformManager.prototype = { addTransformSequence: function(t) {
            var e, r = t.length, i = "_";
            for (e = 0; e < r; e += 1)
              i += t[e].transform.key + "_";
            var s = this.sequences[i];
            return s || (s = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: false }, this.sequences[i] = s, this.sequenceList.push(s)), s;
          }, processSequence: function(t, e) {
            for (var r, i = 0, s = t.transforms.length, a = e; i < s && !e; ) {
              if (t.transforms[i].transform.mProps._mdf) {
                a = true;
                break;
              }
              i += 1;
            }
            if (a)
              for (t.finalTransform.reset(), i = s - 1; 0 <= i; i -= 1)
                r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
            t._mdf = a;
          }, processSequences: function(t) {
            var e, r = this.sequenceList.length;
            for (e = 0; e < r; e += 1)
              this.processSequence(this.sequenceList[e], t);
          }, getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count;
          } }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = { checkMasks: function() {
            if (!this.data.hasMask)
              return false;
            for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
              if ("n" !== this.data.masksProperties[t].mode && false !== this.data.masksProperties[t].cl)
                return true;
              t += 1;
            }
            return false;
          }, initExpressions: function() {
            this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface);
          }, setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
          }, initBaseData: function(t, e, r) {
            this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
          }, getType: function() {
            return this.type;
          }, sourceRectAtTime: function() {
          } }, NullElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, true);
          }, NullElement.prototype.renderFrame = function() {
          }, NullElement.prototype.getBaseElement = function() {
            return null;
          }, NullElement.prototype.destroy = function() {
          }, NullElement.prototype.sourceRectAtTime = function() {
          }, NullElement.prototype.hide = function() {
          }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = { initRendererElement: function() {
            this.layerElement = createNS("g");
          }, createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
            var t, e, r, i = null;
            if (this.data.td) {
              if (3 == this.data.td || 1 == this.data.td) {
                var s = createNS("mask");
                s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), i = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, s.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"));
              } else if (2 == this.data.td) {
                var a = createNS("mask");
                a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                var n = createNS("g");
                a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
                var o = createNS("feComponentTransfer");
                o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                var h = createNS("feFuncA");
                h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                var l = createNS("rect");
                l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), i = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), n.appendChild(l), r.appendChild(this.layerElement), i = r, n.appendChild(r)), this.globalData.defs.appendChild(a);
              }
            } else
              this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var p = createNS("clipPath"), m = createNS("path");
              m.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var f = createElementID();
              if (p.setAttribute("id", f), p.appendChild(m), this.globalData.defs.appendChild(p), this.checkMasks()) {
                var c = createNS("g");
                c.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), c.appendChild(this.layerElement), this.transformedElement = c, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
              } else
                this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")");
            }
            0 !== this.data.bm && this.setBlendMode();
          }, renderElement: function() {
            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
          }, destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
          }, getBaseElement: function() {
            return this.data.hd ? null : this.baseElement;
          }, createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
          }, setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")");
          } }, IShapeElement.prototype = { addShapeToModifiers: function(t) {
            var e, r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1)
              this.shapeModifiers[e].addShape(t);
          }, isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e; )
              if (this.shapeModifiers[0].isAnimatedWithShape(t))
                return true;
            return false;
          }, renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var t, e = this.shapes.length;
              for (t = 0; t < e; t += 1)
                this.shapes[t].sh.reset();
              for (t = (e = this.shapeModifiers.length) - 1; 0 <= t && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1)
                ;
            }
          }, searchProcessedElement: function(t) {
            for (var e = this.processedElements, r = 0, i = e.length; r < i; ) {
              if (e[r].elem === t)
                return e[r].pos;
              r += 1;
            }
            return 0;
          }, addProcessedElement: function(t, e) {
            for (var r = this.processedElements, i = r.length; i; )
              if (r[i -= 1].elem === t)
                return void (r[i].pos = e);
            r.push(new ProcessedElement(t, e));
          }, prepareFrame: function(t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
          } }, ITextElement.prototype.initElement = function(t, e, r) {
            this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
          }, ITextElement.prototype.prepareFrame = function(t) {
            this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
          }, ITextElement.prototype.createPathShape = function(t, e) {
            var r, i, s = e.length, a = "";
            for (r = 0; r < s; r += 1)
              i = e[r].ks.k, a += buildShapeString(i, i.i.length, true, t);
            return a;
          }, ITextElement.prototype.updateDocumentData = function(t, e) {
            this.textProperty.updateDocumentData(t, e);
          }, ITextElement.prototype.canResizeFont = function(t) {
            this.textProperty.canResizeFont(t);
          }, ITextElement.prototype.setMinimumFontSize = function(t) {
            this.textProperty.setMinimumFontSize(t);
          }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
            switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
              case 1:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                break;
              case 2:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
            }
            e.translate(i, s, 0);
          }, ITextElement.prototype.buildColor = function(t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
          }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
          }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
          }, ICompElement.prototype.prepareFrame = function(t) {
            if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
              if (this.tm._placeholder)
                this.renderedFrame = t / this.data.sr;
              else {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
              }
              var r, i = this.elements.length;
              for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; 0 <= r; r -= 1)
                (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = true));
            }
          }, ICompElement.prototype.renderInnerContent = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
              (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
          }, ICompElement.prototype.setElements = function(t) {
            this.elements = t;
          }, ICompElement.prototype.getElements = function() {
            return this.elements;
          }, ICompElement.prototype.destroyElements = function() {
            var t, e = this.layers.length;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
          }, ICompElement.prototype.destroy = function() {
            this.destroyElements(), this.destroyBaseElement();
          }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
          }, IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect;
          }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
          }, AudioElement.prototype.prepareFrame = function(t) {
            if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder)
              this._currentTime = t / this.data.sr;
            else {
              var e = this.tm.v;
              this._currentTime = e;
            }
          }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || 0.1 < Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek())) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
          }, AudioElement.prototype.show = function() {
          }, AudioElement.prototype.hide = function() {
            this.audio.pause(), this._isPlaying = false;
          }, AudioElement.prototype.pause = function() {
            this.audio.pause(), this._isPlaying = false, this._canPlay = false;
          }, AudioElement.prototype.resume = function() {
            this._canPlay = true;
          }, AudioElement.prototype.setRate = function(t) {
            this.audio.rate(t);
          }, AudioElement.prototype.volume = function(t) {
            this.audio.volume(t);
          }, AudioElement.prototype.getBaseElement = function() {
            return null;
          }, AudioElement.prototype.destroy = function() {
          }, AudioElement.prototype.sourceRectAtTime = function() {
          }, AudioElement.prototype.initExpressions = function() {
          }, FootageElement.prototype.prepareFrame = function() {
          }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
            return null;
          }, FootageElement.prototype.renderFrame = function() {
          }, FootageElement.prototype.destroy = function() {
          }, FootageElement.prototype.initExpressions = function() {
            this.layerInterface = FootageInterface(this);
          }, FootageElement.prototype.getFootageData = function() {
            return this.footageData;
          }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
          }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
            for (var e = 0, r = t.length, i = [], s = ""; e < r; )
              t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
            return i.push(s), i;
          }, SVGTextLottieElement.prototype.buildNewText = function() {
            var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass)
              this.layerElement.setAttribute("class", i.fClass);
            else {
              this.layerElement.setAttribute("font-family", i.fFamily);
              var s = r.fWeight, a = r.fStyle;
              this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var n, o = r.l || [], h = !!this.globalData.fontManager.chars;
            e = o.length;
            var l, p = this.mHelper, m = "", f = this.data.singleShape, c = 0, d = 0, u = true, y = 1e-3 * r.tr * r.finalSize;
            if (!f || h || r.sz) {
              var g, v, b = this.textSpans.length;
              for (t = 0; t < e; t += 1)
                h && f && 0 !== t || (n = t < b ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), f && (o[t].n && (c = -y, d += r.yOffset, d += u ? 1 : 0, u = false), this.applyTextPropertiesToMatrix(r, p, o[t].line, c, d), c += o[t].l || 0, c += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], f ? m += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
              f && n && n.setAttribute("d", m);
            } else {
              var P = this.textContainer, E = "start";
              switch (r.j) {
                case 1:
                  E = "end";
                  break;
                case 2:
                  E = "middle";
                  break;
                default:
                  E = "start";
              }
              P.setAttribute("text-anchor", E), P.setAttribute("letter-spacing", y);
              var x = this.buildTextContents(r.finalText);
              for (e = x.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)
                (n = this.textSpans[t] || createNS("tspan")).textContent = x[t], n.setAttribute("x", 0), n.setAttribute("y", d), n.style.display = "inherit", P.appendChild(n), this.textSpans[t] = n, d += r.finalLineHeight;
              this.layerElement.appendChild(P);
            }
            for (; t < this.textSpans.length; )
              this.textSpans[t].style.display = "none", t += 1;
            this._sizeChanged = true;
          }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
              this._sizeChanged = false;
              var t = this.layerElement.getBBox();
              this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
            }
            return this.bbox;
          }, SVGTextLottieElement.prototype.renderInnerContent = function() {
            if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
              var t, e;
              this._sizeChanged = true;
              var r, i, s = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
              for (e = a.length, t = 0; t < e; t += 1)
                a[t].n || (r = s[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc));
            }
          }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
          }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
          }, SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
          }, SVGShapeElement.prototype.filterUniqueShapes = function() {
            var t, e, r, i, s = this.shapes.length, a = this.stylesList.length, n = [], o = false;
            for (r = 0; r < a; r += 1) {
              for (i = this.stylesList[r], o = false, t = n.length = 0; t < s; t += 1)
                -1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
              1 < n.length && o && this.setShapesAsAnimated(n);
            }
          }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
              t[e].setAsAnimated();
          }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
            var r, i = new SVGStyleData(t, e), s = i.pElem;
            if ("st" === t.ty)
              r = new SVGStrokeStyleData(this, t, i);
            else if ("fl" === t.ty)
              r = new SVGFillStyleData(this, t, i);
            else if ("gf" === t.ty || "gs" === t.ty) {
              r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"));
            }
            return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
          }, SVGShapeElement.prototype.createGroupElement = function(t) {
            var e = new ShapeGroupData();
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
          }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, i), i;
          }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
            var i = 4;
            "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
            var s = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
            return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
          }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i; ) {
              if (this.animatedContents[r].element === e)
                return;
              r += 1;
            }
            this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t });
          }, SVGShapeElement.prototype.setElementStyles = function(t) {
            var e, r = t.styles, i = this.stylesList.length;
            for (e = 0; e < i; e += 1)
              this.stylesList[e].closed || r.push(this.stylesList[e]);
          }, SVGShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = true;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1)
              this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
              this.dynamicProperties[t].getValue();
            this.renderModifiers();
          }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
            var o, h, l, p, m, f, c = [].concat(a), d = t.length - 1, u = [], y = [];
            for (o = d; 0 <= o; o -= 1) {
              if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty)
                f ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], s), t[o]._render && i.appendChild(e[o].style.pElem), u.push(e[o].style);
              else if ("gr" === t[o].ty) {
                if (f)
                  for (l = e[o].it.length, h = 0; h < l; h += 1)
                    e[o].prevViewData[h] = e[o].it[h];
                else
                  e[o] = this.createGroupElement(t[o]);
                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && i.appendChild(e[o].gr);
              } else
                "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, c.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (f ? (m = e[o]).closed = false : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), y.push(m)) : "rp" === t[o].ty && (f ? (m = e[o]).closed = true : (m = ShapeModifiers.getModifier(t[o].ty), (e[o] = m).init(this, t, o, e), this.shapeModifiers.push(m), n = false), y.push(m));
              this.addProcessedElement(t[o], o + 1);
            }
            for (d = u.length, o = 0; o < d; o += 1)
              u[o].closed = true;
            for (d = y.length, o = 0; o < d; o += 1)
              y[o].closed = true;
          }, SVGShapeElement.prototype.renderInnerContent = function() {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
              this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)
              (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
          }, SVGShapeElement.prototype.renderShape = function() {
            var t, e, r = this.animatedContents.length;
            for (t = 0; t < r; t += 1)
              e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && true !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
          }, SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
          }, SVGTintFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
              this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
            }
          }, SVGFillFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
              this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
            }
          }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
              var e = 0.3 * this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = 3 == r ? 0 : e, s = 2 == r ? 0 : e;
              this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
              var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
              this.feGaussianBlur.setAttribute("edgeMode", a);
            }
          }, SVGStrokeEffect.prototype.initialize = function() {
            var t, e, r, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1)
              t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: r });
            if (3 === this.filterManager.effectElements[10].p.v) {
              var a = createNS("mask"), n = createElementID();
              a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
              var o = createNS("g");
              for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0]; )
                o.appendChild(s[0]);
              this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff");
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
              if (2 === this.filterManager.effectElements[10].p.v)
                for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length; )
                  this.elem.layerElement.removeChild(s[0]);
              this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
            }
            this.initialized = true, this.pathMasker = e;
          }, SVGStrokeEffect.prototype.renderFrame = function(t) {
            var e;
            this.initialized || this.initialize();
            var r, i, s = this.paths.length;
            for (e = 0; e < s; e += 1)
              if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                var a;
                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                  var n = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), o = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), h = i.getTotalLength();
                  a = "0 0 0 " + h * n + " ";
                  var l, p = h * (o - n), m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01, f = Math.floor(p / m);
                  for (l = 0; l < f; l += 1)
                    a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
                  a += "0 " + 10 * h + " 0 0";
                } else
                  a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
                i.setAttribute("stroke-dasharray", a);
              }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
              var c = this.filterManager.effectElements[3].p.v;
              this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * c[0]) + "," + bmFloor(255 * c[1]) + "," + bmFloor(255 * c[2]) + ")");
            }
          }, SVGTritoneFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + e[0], a = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
              this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
            }
          }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
            var r = createNS(t);
            return r.setAttribute("type", "table"), e.appendChild(r), r;
          }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
            for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, { length: 256 }), m = 0, f = s - i, c = e - t; o <= 256; )
              n = (a = o / 256) <= h ? c < 0 ? s : i : l <= a ? c < 0 ? i : s : i + f * Math.pow((a - t) / c, 1 / r), p[m] = n, m += 1, o += 256 / 255;
            return p.join(" ");
          }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
              var e, r = this.filterManager.effectElements;
              this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
            }
          }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
              if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
              }
              if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i), a = r * Math.sin(i);
                this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
              }
            }
          };
          var _svgMatteSymbols = [];
          function SVGMatte3Effect(t, e, r) {
            this.initialized = false, this.filterManager = e, this.filterElem = t, (this.elem = r).matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
          }
          function SVGEffects(t) {
            var e, r, i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s, true), n = 0;
            for (this.filters = [], e = 0; e < i; e += 1)
              r = null, 20 === t.data.ef[e].ty ? (n += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), r && this.filters.push(r);
            n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
          }
          function CVContextData() {
            var t;
            this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1;
            for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1)
              this.saved[t] = createTypedArray("float32", 16);
            this._length = 15;
          }
          function CVBaseElement() {
          }
          function CVImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r);
          }
          function CVCompElement(t, e, r) {
            this.completeLayers = false, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
          }
          function CVMaskElement(t, e) {
            var r;
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var i = this.masksProperties.length, s = false;
            for (r = 0; r < i; r += 1)
              "n" !== this.masksProperties[r].mode && (s = true), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            (this.hasMasks = s) && this.element.addRenderableComponent(this);
          }
          function CVShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, r);
          }
          function CVSolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function CVTextElement(t, e, r) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = false, this.strokeColorAnim = false, this.strokeWidthAnim = false, this.stroke = false, this.fill = false, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, r);
          }
          function CVEffects() {
          }
          function HBaseElement() {
          }
          function HSolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          function HCompElement(t, e, r) {
            this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
          }
          function HShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
          }
          function HTextElement(t, e, r) {
            this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = false, this.initElement(t, e, r);
          }
          function HImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r);
          }
          function HCameraElement(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
            var i = PropertyFactory.getProp;
            if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
              var s, a = t.ks.or.k.length;
              for (s = 0; s < a; s += 1)
                t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
            }
            this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = true, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = true, this.finalTransform = { mProp: this };
          }
          function HEffects() {
          }
          SVGMatte3Effect.prototype.findSymbol = function(t) {
            for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
              if (_svgMatteSymbols[e] === t)
                return _svgMatteSymbols[e];
              e += 1;
            }
            return null;
          }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
              for (var i, s = r.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement; )
                a += 1;
              a <= n - 2 && (i = s[a + 1]);
              var o = createNS("use");
              o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o);
            }
          }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
            if (!this.findSymbol(e)) {
              var r = createElementID(), i = createNS("mask");
              i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
              var s = t.globalData.defs;
              s.appendChild(i);
              var a = createNS("symbol");
              a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
              var n = createNS("use");
              n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = false, e.show();
            }
            t.setMatte(e.layerId);
          }, SVGMatte3Effect.prototype.initialize = function() {
            for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; )
              e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = true;
          }, SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize();
          }, SVGEffects.prototype.renderFrame = function(t) {
            var e, r = this.filters.length;
            for (e = 0; e < r; e += 1)
              this.filters[e].renderFrame(t);
          }, CVContextData.prototype.duplicate = function() {
            var t = 2 * this._length, e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
            var r = 0;
            for (r = this._length; r < t; r += 1)
              this.saved[r] = createTypedArray("float32", 16);
            this._length = t;
          }, CVContextData.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
          }, CVBaseElement.prototype = { createElements: function() {
          }, initRendererElement: function() {
          }, createContainerElements: function() {
            this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);
          }, createContent: function() {
          }, setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm;
              var e = getBlendMode(this.data.bm);
              t.canvasContext.globalCompositeOperation = e;
            }
          }, createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this);
          }, hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = true);
          }, showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = false, this._isFirstFrame = true, this.maskManager._isFirstFrame = true);
          }, renderFrame: function() {
            if (!this.hidden && !this.data.hd) {
              this.renderTransform(), this.renderRenderable(), this.setBlendMode();
              var t = 0 === this.data.ty;
              this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(true), this._isFirstFrame && (this._isFirstFrame = false);
            }
          }, destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
          }, mHelper: new Matrix() }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
              var t = createTag("canvas");
              t.width = this.assetData.w, t.height = this.assetData.h;
              var e, r, i = t.getContext("2d"), s = this.img.width, a = this.img.height, n = s / a, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
              o < n && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = a) * o : r = (e = s) / o, i.drawImage(this.img, (s - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
            }
          }, CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0);
          }, CVImageElement.prototype.destroy = function() {
            this.img = null;
          }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
            var t, e = this.canvasContext;
            for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; 0 <= t; t -= 1)
              (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
          }, CVCompElement.prototype.destroy = function() {
            var t;
            for (t = this.layers.length - 1; 0 <= t; t -= 1)
              this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null;
          }, CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
              var t, e, r, i, s = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
              for (a.beginPath(), t = 0; t < n; t += 1)
                if ("n" !== this.masksProperties[t].mode) {
                  var o;
                  this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
                  var h = i._length;
                  for (o = 1; o < h; o += 1)
                    r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                  r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                }
              this.element.globalData.renderer.save(true), a.clip();
            }
          }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
            this.element = null;
          }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
          }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var r = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: true === t.hd }, i = {};
            if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), "st" === t.ty || "gs" === t.ty) {
              if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                var s = new DashProperty(this, t.d, "canvas", this);
                i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
              }
            } else
              r.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(r), i.style = r, i;
          }, CVShapeElement.prototype.createGroupElement = function() {
            return { it: [], prevViewData: [] };
          }, CVShapeElement.prototype.createTransformElement = function(t) {
            return { transform: { opacity: 1, _opMdf: false, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, 0.01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } };
          }, CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e;
          }, CVShapeElement.prototype.reloadShapes = function() {
            var t;
            this._isFirstFrame = true;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1)
              this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
              this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
          }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, r = this.stylesList.length;
            for (e = 0; e < r; e += 1)
              this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
          }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
              this.stylesList[t].closed || this.stylesList[t].transforms.pop();
          }, CVShapeElement.prototype.closeStyles = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1)
              t[e].closed = true;
          }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
            var a, n, o, h, l, p, m = t.length - 1, f = [], c = [], d = [].concat(s);
            for (a = m; 0 <= a; a -= 1) {
              if ((h = this.searchProcessedElement(t[a])) ? e[a] = r[h - 1] : t[a]._shouldRender = i, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty)
                h ? e[a].style.closed = false : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style);
              else if ("gr" === t[a].ty) {
                if (h)
                  for (o = e[a].it.length, n = 0; n < o; n += 1)
                    e[a].prevViewData[n] = e[a].it[n];
                else
                  e[a] = this.createGroupElement(t[a]);
                this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, d);
              } else
                "tr" === t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (h ? (l = e[a]).closed = false : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), c.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = true : (l = ShapeModifiers.getModifier(t[a].ty), (e[a] = l).init(this, t, a, e), this.shapeModifiers.push(l), i = false), c.push(l));
              this.addProcessedElement(t[a], a + 1);
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(f), m = c.length, a = 0; a < m; a += 1)
              c[a].closed = true;
          }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = false, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
          }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = true);
          }, CVShapeElement.prototype.drawLayer = function() {
            var t, e, r, i, s, a, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, m = this.globalData.canvasContext;
            for (t = 0; t < l; t += 1)
              if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                for (p.save(), a = h.elements, "st" === o || "gs" === o ? (m.strokeStyle = "st" === o ? h.co : h.grd, m.lineWidth = h.wi, m.lineCap = h.lc, m.lineJoin = h.lj, m.miterLimit = h.ml || 0) : m.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && m.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                  for ("st" !== o && "gs" !== o || (m.beginPath(), h.da && (m.setLineDash(h.da), m.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, i = 0; i < s; i += 1)
                    "m" === n[i].t ? m.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? m.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : m.closePath();
                  "st" !== o && "gs" !== o || (m.stroke(), h.da && m.setLineDash(this.dashResetter));
                }
                "st" !== o && "gs" !== o && m.fill(h.r), p.restore();
              }
          }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
            var s, a;
            for (a = t, s = e.length - 1; 0 <= s; s -= 1)
              "tr" === e[s].ty ? (a = r[s].transform, this.renderShapeTransform(t, a)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], r[s]) : "fl" === e[s].ty ? this.renderFill(e[s], r[s], a) : "st" === e[s].ty ? this.renderStroke(e[s], r[s], a) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], r[s], a) : "gr" === e[s].ty ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
            i && this.drawLayer();
          }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
              var r, i, s, a = t.trNodes, n = e.paths, o = n._length;
              a.length = 0;
              var h = t.transforms.finalTransform;
              for (s = 0; s < o; s += 1) {
                var l = n.shapes[s];
                if (l && l.v) {
                  for (i = l._length, r = 1; r < i; r += 1)
                    1 === r && a.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), a.push({ t: "c", pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r]) });
                  1 === i && a.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), l.c && i && (a.push({ t: "c", pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0]) }), a.push({ t: "z" }));
                }
              }
              t.trNodes = a;
            }
          }, CVShapeElement.prototype.renderPath = function(t, e) {
            if (true !== t.hd && t._shouldRender) {
              var r, i = e.styledShapes.length;
              for (r = 0; r < i; r += 1)
                this.renderStyledShape(e.styledShapes[r], e.sh);
            }
          }, CVShapeElement.prototype.renderFill = function(t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
          }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
            var i, s = e.style;
            if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
              var a, n = this.globalData.canvasContext, o = e.s.v, h = e.e.v;
              if (1 === t.t)
                i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
              else {
                var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)), p = Math.atan2(h[1] - o[1], h[0] - o[0]), m = e.h.v;
                1 <= m ? m = 0.99 : m <= -1 && (m = -0.99);
                var f = l * m, c = Math.cos(p + e.a.v) * f + o[0], d = Math.sin(p + e.a.v) * f + o[1];
                i = n.createRadialGradient(c, d, 0, o[0], o[1], l);
              }
              var u = t.g.p, y = e.g.c, g = 1;
              for (a = 0; a < u; a += 1)
                e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), i.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")");
              s.grd = i;
            }
            s.coOp = e.o.v * r.opacity;
          }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
            var i = e.style, s = e.d;
            s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
          }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
          }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh);
          }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = false;
            t.fc ? (e = true, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var r = false;
            t.sc && (r = true, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var i, s, a, n, o, h, l, p, m, f, c, d, u = this.globalData.fontManager.getFontByName(t.f), y = t.l, g = this.mHelper;
            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
            var v = this.data.singleShape, b = 1e-3 * t.tr * t.finalSize, P = 0, E = 0, x = true, S = 0;
            for (i = 0; i < s; i += 1) {
              for (n = (a = this.globalData.fontManager.getCharData(t.finalText[i], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), v && y[i].n && (P = -b, E += t.yOffset, E += x ? 1 : 0, x = false), m = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[i].line, P, E), c = createSizedArray(m), p = 0; p < m; p += 1) {
                for (h = l[p].ks.k.i.length, f = l[p].ks.k, d = [], o = 1; o < h; o += 1)
                  1 === o && d.push(g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), d.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[o][0], f.i[o][1], 0), g.applyToY(f.i[o][0], f.i[o][1], 0), g.applyToX(f.v[o][0], f.v[o][1], 0), g.applyToY(f.v[o][0], f.v[o][1], 0));
                d.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[0][0], f.i[0][1], 0), g.applyToY(f.i[0][0], f.i[0][1], 0), g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), c[p] = d;
              }
              v && (P += y[i].l, P += b), this.textSpans[S] ? this.textSpans[S].elem = c : this.textSpans[S] = { elem: c }, S += 1;
            }
          }, CVTextElement.prototype.renderInnerContent = function() {
            var t, e, r, i, s, a, n = this.canvasContext;
            n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
            e = l.length;
            var p, m, f = null, c = null, d = null;
            for (t = 0; t < e; t += 1)
              if (!l[t].n) {
                if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                  for (o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                    for (a = (m = p[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6)
                      this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                  this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
                }
                if (this.stroke) {
                  for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? c !== o.sc && (c = o.sc, n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                    for (a = (m = p[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6)
                      this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                  this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
                }
                o && this.globalData.renderer.restore();
              }
          }, CVEffects.prototype.renderFrame = function() {
          }, HBaseElement.prototype = { checkBlendMode: function() {
          }, initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
          }, createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
          }, renderElement: function() {
            var t = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              t.transform = e, t.webkitTransform = e;
            }
            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
          }, renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
          }, destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
          }, createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData);
          }, addEffects: function() {
          }, setMatte: function() {
          } }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
            var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
          }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
          }, HCompElement.prototype.addTo3dContainer = function(t, e) {
            for (var r, i = 0; i < e; )
              this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
          }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
            var t;
            if (this.baseElement.style.fontSize = 0, this.data.hasMask)
              this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else {
              t = createNS("svg");
              var e = this.comp.data ? this.comp.data : this.globalData.compSize;
              t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true), this.filterUniqueShapes(), this.shapeCont = t;
          }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
              e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e;
          }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
            var r, i, s, a, n, o = t.sh.v, h = t.transformers, l = o._length;
            if (!(l <= 1)) {
              for (r = 0; r < l - 1; r += 1)
                i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, s, a, n, e);
              o.c && (i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, s, a, n, e));
            }
          }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
            this.getBoundsOfCurve(t, e, r, i);
            var a = this.shapeBoundingBox;
            s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax);
          }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
            for (var s, a, n, o, h, l, p, m = [[t[0], i[0]], [t[1], i[1]]], f = 0; f < 2; ++f)
              a = 6 * t[f] - 12 * e[f] + 6 * r[f], s = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 === (s |= 0) && 0 === a || (0 === s ? 0 < (o = -n / a) && o < 1 && m[f].push(this.calculateF(o, t, e, r, i, f)) : 0 <= (h = a * a - 4 * n * s) && (0 < (l = (-a + bmSqrt(h)) / (2 * s)) && l < 1 && m[f].push(this.calculateF(l, t, e, r, i, f)), 0 < (p = (-a - bmSqrt(h)) / (2 * s)) && p < 1 && m[f].push(this.calculateF(p, t, e, r, i, f))));
            this.shapeBoundingBox.left = bmMin.apply(null, m[0]), this.shapeBoundingBox.top = bmMin.apply(null, m[1]), this.shapeBoundingBox.right = bmMax.apply(null, m[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, m[1]);
          }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
            return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a];
          }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1)
              t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e);
          }, HShapeElement.prototype.currentBoxContains = function(t) {
            return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
          }, HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
              var t = this.tempBoundingBox, e = 999999;
              if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t))
                return;
              var r = false;
              if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = true), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = true), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                var i = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                i.transform = s, i.webkitTransform = s;
              }
            }
          }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(), this.isMasked) {
              this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
              var t = createNS("g");
              this.maskedElement.appendChild(t), this.innerElem = t;
            } else
              this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting();
          }, HTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style, r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
            var i, s, a = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
              if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass)
                this.innerElem.className = a.fClass;
              else {
                e.fontFamily = a.fFamily;
                var n = t.fWeight, o = t.fStyle;
                e.fontStyle = o, e.fontWeight = n;
              }
            var h, l, p, m = t.l;
            s = m.length;
            var f, c = this.mHelper, d = "", u = 0;
            for (i = 0; i < s; i += 1) {
              if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u], h = this.textPaths[u]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                var y, g = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                if (y = g ? g.data : null, c.reset(), y && y.shapes && (f = y.shapes[0].it, c.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(c, f), h.setAttribute("d", d)), this.isMasked)
                  this.innerElem.appendChild(h);
                else {
                  if (this.innerElem.appendChild(l), y && y.shapes) {
                    document.body.appendChild(p);
                    var v = p.getBBox();
                    p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                    var b = p.style, P = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                    b.transform = P, b.webkitTransform = P, m[i].yOffset = v.y - 1;
                  } else
                    p.setAttribute("width", 1), p.setAttribute("height", 1);
                  l.appendChild(p);
                }
              } else if (h.textContent = m[i].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
                this.innerElem.appendChild(h);
              else {
                this.innerElem.appendChild(l);
                var E = h.style, x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                E.transform = x, E.webkitTransform = x;
              }
              this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l, this.textSpans[u].style.display = "block", this.textPaths[u] = h, u += 1;
            }
            for (; u < this.textSpans.length; )
              this.textSpans[u].style.display = "none", u += 1;
          }, HTextElement.prototype.renderInnerContent = function() {
            var t;
            if (this.data.singleShape) {
              if (!this._isFirstFrame && !this.lettersChangedFlag)
                return;
              if (this.isMasked && this.finalTransform._matMdf) {
                this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                t.transform = e, t.webkitTransform = e;
              }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
              var r, i, s, a, n, o = 0, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
              for (i = l.length, r = 0; r < i; r += 1)
                l[r].n ? o += 1 : (a = this.textSpans[r], n = this.textPaths[r], s = h[o], o += 1, s._mdf.m && (this.isMasked ? a.setAttribute("transform", s.m) : (a.style.webkitTransform = s.m, a.style.transform = s.m)), a.style.opacity = s.o, s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (n.setAttribute("fill", s.fc), n.style.color = s.fc));
              if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                var p = this.innerElem.getBBox();
                this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height));
                if (this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                  this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                  var m = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                  t.transform = m, t.webkitTransform = m;
                }
              }
            }
          }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
            var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
          }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
            var t, e, r, i, s = this.comp.threeDElements.length;
            for (t = 0; t < s; t += 1)
              if ("3d" === (e = this.comp.threeDElements[t]).type) {
                r = e.perspectiveElem.style, i = e.container.style;
                var a = this.pe.v + "px", n = "0px 0px 0px", o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                r.perspective = a, r.webkitPerspective = a, i.transformOrigin = n, i.mozTransformOrigin = n, i.webkitTransformOrigin = n, r.transform = o, r.webkitTransform = o;
              }
          }, HCameraElement.prototype.createElements = function() {
          }, HCameraElement.prototype.hide = function() {
          }, HCameraElement.prototype.renderFrame = function() {
            var t, e, r = this._isFirstFrame;
            if (this.hierarchy)
              for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                r = this.hierarchy[t].finalTransform.mProp._mdf || r;
            if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
              if (this.mat.reset(), this.hierarchy)
                for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) {
                  var i = this.hierarchy[t].finalTransform.mProp;
                  this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                }
              if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                var s;
                s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), n = [s[0] / a, s[1] / a, s[2] / a], o = Math.sqrt(n[2] * n[2] + n[0] * n[0]), h = Math.atan2(n[1], o), l = Math.atan2(n[0], -n[2]);
                this.mat.rotateY(l).rotateX(-h);
              }
              this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
              var p = !this._prevMat.equals(this.mat);
              if ((p || this.pe._mdf) && this.comp.threeDElements) {
                var m, f, c;
                for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                  if ("3d" === (m = this.comp.threeDElements[t]).type) {
                    if (p) {
                      var d = this.mat.toCSS();
                      (c = m.container.style).transform = d, c.webkitTransform = d;
                    }
                    this.pe._mdf && ((f = m.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px");
                  }
                this.mat.clone(this._prevMat);
              }
            }
            this._isFirstFrame = false;
          }, HCameraElement.prototype.prepareFrame = function(t) {
            this.prepareProperties(t, true);
          }, HCameraElement.prototype.destroy = function() {
          }, HCameraElement.prototype.getBaseElement = function() {
            return null;
          }, HEffects.prototype.renderFrame = function() {
          };
          var animationManager = function() {
            var t = {}, s = [], i = 0, a = 0, n = 0, o = true, h = false;
            function r(t2) {
              for (var e2 = 0, r2 = t2.target; e2 < a; )
                s[e2].animation === r2 && (s.splice(e2, 1), e2 -= 1, a -= 1, r2.isPaused || m()), e2 += 1;
            }
            function l(t2, e2) {
              if (!t2)
                return null;
              for (var r2 = 0; r2 < a; ) {
                if (s[r2].elem === t2 && null !== s[r2].elem)
                  return s[r2].animation;
                r2 += 1;
              }
              var i2 = new AnimationItem();
              return f(i2, t2), i2.setData(t2, e2), i2;
            }
            function p() {
              n += 1, d();
            }
            function m() {
              n -= 1;
            }
            function f(t2, e2) {
              t2.addEventListener("destroy", r), t2.addEventListener("_active", p), t2.addEventListener("_idle", m), s.push({ elem: e2, animation: t2 }), a += 1;
            }
            function c(t2) {
              var e2, r2 = t2 - i;
              for (e2 = 0; e2 < a; e2 += 1)
                s[e2].animation.advanceTime(r2);
              i = t2, n && !h ? window.requestAnimationFrame(c) : o = true;
            }
            function e(t2) {
              i = t2, window.requestAnimationFrame(c);
            }
            function d() {
              !h && n && o && (window.requestAnimationFrame(e), o = false);
            }
            return t.registerAnimation = l, t.loadAnimation = function(t2) {
              var e2 = new AnimationItem();
              return f(e2, null), e2.setParams(t2), e2;
            }, t.setSpeed = function(t2, e2) {
              var r2;
              for (r2 = 0; r2 < a; r2 += 1)
                s[r2].animation.setSpeed(t2, e2);
            }, t.setDirection = function(t2, e2) {
              var r2;
              for (r2 = 0; r2 < a; r2 += 1)
                s[r2].animation.setDirection(t2, e2);
            }, t.play = function(t2) {
              var e2;
              for (e2 = 0; e2 < a; e2 += 1)
                s[e2].animation.play(t2);
            }, t.pause = function(t2) {
              var e2;
              for (e2 = 0; e2 < a; e2 += 1)
                s[e2].animation.pause(t2);
            }, t.stop = function(t2) {
              var e2;
              for (e2 = 0; e2 < a; e2 += 1)
                s[e2].animation.stop(t2);
            }, t.togglePause = function(t2) {
              var e2;
              for (e2 = 0; e2 < a; e2 += 1)
                s[e2].animation.togglePause(t2);
            }, t.searchAnimations = function(t2, e2, r2) {
              var i2, s2 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a2 = s2.length;
              for (i2 = 0; i2 < a2; i2 += 1)
                r2 && s2[i2].setAttribute("data-bm-type", r2), l(s2[i2], t2);
              if (e2 && 0 === a2) {
                r2 || (r2 = "svg");
                var n2 = document.getElementsByTagName("body")[0];
                n2.innerText = "";
                var o2 = createTag("div");
                o2.style.width = "100%", o2.style.height = "100%", o2.setAttribute("data-bm-type", r2), n2.appendChild(o2), l(o2, t2);
              }
            }, t.resize = function() {
              var t2;
              for (t2 = 0; t2 < a; t2 += 1)
                s[t2].animation.resize();
            }, t.goToAndStop = function(t2, e2, r2) {
              var i2;
              for (i2 = 0; i2 < a; i2 += 1)
                s[i2].animation.goToAndStop(t2, e2, r2);
            }, t.destroy = function(t2) {
              var e2;
              for (e2 = a - 1; 0 <= e2; e2 -= 1)
                s[e2].animation.destroy(t2);
            }, t.freeze = function() {
              h = true;
            }, t.unfreeze = function() {
              h = false, d();
            }, t.setVolume = function(t2, e2) {
              var r2;
              for (r2 = 0; r2 < a; r2 += 1)
                s[r2].animation.setVolume(t2, e2);
            }, t.mute = function(t2) {
              var e2;
              for (e2 = 0; e2 < a; e2 += 1)
                s[e2].animation.mute(t2);
            }, t.unmute = function(t2) {
              var e2;
              for (e2 = 0; e2 < a; e2 += 1)
                s[e2].animation.unmute(t2);
            }, t.getRegisteredAnimations = function() {
              var t2, e2 = s.length, r2 = [];
              for (t2 = 0; t2 < e2; t2 += 1)
                r2.push(s[t2].animation);
              return r2;
            }, t;
          }(), AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [];
          };
          extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
              case "canvas":
                this.renderer = new CanvasRenderer(this, t.rendererSettings);
                break;
              case "svg":
                this.renderer = new SVGRenderer(this, t.rendererSettings);
                break;
              default:
                this.renderer = new HybridRenderer(this, t.rendererSettings);
            }
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || true === t.loop ? this.loop = true : false === t.loop ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
              this.trigger("data_failed");
            }.bind(this)));
          }, AnimationItem.prototype.setData = function(t, e) {
            e && "object" != typeof e && (e = JSON.parse(e));
            var r = { wrapper: t, animationData: e }, i = t.attributes;
            r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
            var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            "false" === s ? r.loop = false : "true" === s ? r.loop = true : "" !== s && (r.loop = parseInt(s, 10));
            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
            r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = false), this.setParams(r);
          }, AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
            var e, r, i = this.animationData.layers, s = i.length, a = t.layers, n = a.length;
            for (r = 0; r < n; r += 1)
              for (e = 0; e < s; ) {
                if (i[e].id === a[r].id) {
                  i[e] = a[r];
                  break;
                }
                e += 1;
              }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
              for (s = t.assets.length, e = 0; e < s; e += 1)
                this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = false, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment();
          }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments)
              return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function() {
              this.trigger("data_failed");
            }.bind(this));
          }, AnimationItem.prototype.loadSegments = function() {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
          }, AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"), this.checkLoaded();
          }, AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
          }, AnimationItem.prototype.configAnimation = function(t) {
            if (this.renderer)
              try {
                this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
              } catch (t2) {
                this.triggerConfigError(t2);
              }
          }, AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
          }, AnimationItem.prototype.checkLoaded = function() {
            !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = true, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded");
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play());
          }, AnimationItem.prototype.resize = function() {
            this.renderer.updateContainerSize();
          }, AnimationItem.prototype.setSubframe = function(t) {
            this.isSubframeEnabled = !!t;
          }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame();
          }, AnimationItem.prototype.renderFrame = function() {
            if (false !== this.isLoaded && this.renderer)
              try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
              } catch (t) {
                this.triggerRenderFrameError(t);
              }
          }, AnimationItem.prototype.play = function(t) {
            t && this.name !== t || true === this.isPaused && (this.isPaused = false, this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
          }, AnimationItem.prototype.pause = function(t) {
            t && this.name !== t || false === this.isPaused && (this.isPaused = true, this._idle = true, this.trigger("_idle"), this.audioController.pause());
          }, AnimationItem.prototype.togglePause = function(t) {
            t && this.name !== t || (true === this.isPaused ? this.play() : this.pause());
          }, AnimationItem.prototype.stop = function(t) {
            t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
          }, AnimationItem.prototype.getMarkerData = function(t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
              if ((e = this.markers[r]).payload && e.payload.name === t)
                return e;
            return null;
          }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
            if (!r || this.name === r) {
              var i = Number(t);
              if (isNaN(i)) {
                var s = this.getMarkerData(t);
                s && this.goToAndStop(s.time, true);
              } else
                e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
              this.pause();
            }
          }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
            if (!r || this.name === r) {
              var i = Number(t);
              if (isNaN(i)) {
                var s = this.getMarkerData(t);
                s && (s.duration ? this.playSegments([s.time, s.time + s.duration], true) : this.goToAndStop(s.time, true));
              } else
                this.goToAndStop(i, e, r);
              this.play();
            }
          }, AnimationItem.prototype.advanceTime = function(t) {
            if (true !== this.isPaused && false !== this.isLoaded) {
              var e = this.currentRawFrame + t * this.frameModifier, r = false;
              e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = true, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && true !== this.loop ? (r = true, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
            }
          }, AnimationItem.prototype.adjustSegment = function(t, e) {
            this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
          }, AnimationItem.prototype.setSegment = function(t, e) {
            var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, true);
          }, AnimationItem.prototype.playSegments = function(t, e) {
            if (e && (this.segments.length = 0), "object" == typeof t[0]) {
              var r, i = t.length;
              for (r = 0; r < i; r += 1)
                this.segments.push(t[r]);
            } else
              this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
          }, AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
          }, AnimationItem.prototype.checkSegments = function(t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), true);
          }, AnimationItem.prototype.destroy = function(t) {
            t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null);
          }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            this.currentRawFrame = t, this.gotoFrame();
          }, AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier();
          }, AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
          }, AnimationItem.prototype.setVolume = function(t, e) {
            e && this.name !== e || this.audioController.setVolume(t);
          }, AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume();
          }, AnimationItem.prototype.mute = function(t) {
            t && this.name !== t || this.audioController.mute();
          }, AnimationItem.prototype.unmute = function(t) {
            t && this.name !== t || this.audioController.unmute();
          }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
          }, AnimationItem.prototype.getPath = function() {
            return this.path;
          }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (t.e)
              e = t.p;
            else if (this.assetsPath) {
              var r = t.p;
              -1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r;
            } else
              e = this.path, e += t.u ? t.u : "", e += t.p;
            return e;
          }, AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, r = this.assets.length; e < r; ) {
              if (t === this.assets[e].id)
                return this.assets[e];
              e += 1;
            }
            return null;
          }, AnimationItem.prototype.hide = function() {
            this.renderer.hide();
          }, AnimationItem.prototype.show = function() {
            this.renderer.show();
          }, AnimationItem.prototype.getDuration = function(t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
          }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t])
              switch (t) {
                case "enterFrame":
                  this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                  break;
                case "loopComplete":
                  this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                  break;
                case "complete":
                  this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                  break;
                case "segmentStart":
                  this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                  break;
                case "destroy":
                  this.triggerEvent(t, new BMDestroyEvent(t, this));
                  break;
                default:
                  this.triggerEvent(t);
              }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
          }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
          }, AnimationItem.prototype.triggerConfigError = function(t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
          };
          var Expressions = (EY = {}, EY.initExpressions = function(t) {
            var e = 0, r = [];
            function i() {
              var t2, e2 = r.length;
              for (t2 = 0; t2 < e2; t2 += 1)
                r[t2].release();
              r.length = 0;
            }
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
              e += 1;
            }, t.renderer.globalData.popExpression = function() {
              0 == (e -= 1) && i();
            }, t.renderer.globalData.registerExpressionProperty = function(t2) {
              -1 === r.indexOf(t2) && r.push(t2);
            };
          }, EY), EY;
          expressionsPlugin = Expressions;
          var ExpressionManager = function() {
            var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null;
            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array;
            }
            function isNumerable(t, e) {
              return "number" === t || "boolean" === t || "string" === t || e instanceof Number;
            }
            function $bm_neg(t) {
              var e = typeof t;
              if ("number" === e || "boolean" === e || t instanceof Number)
                return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r, i = t.length, s = [];
                for (r = 0; r < i; r += 1)
                  s[r] = -t[r];
                return s;
              }
              return t.propType ? t.v : -t;
            }
            var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
            function sum(t, e) {
              var r = typeof t, i = typeof e;
              if ("string" === r || "string" === i)
                return t + e;
              if (isNumerable(r, t) && isNumerable(i, e))
                return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return (t = t.slice(0))[0] += e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return (e = e.slice(0))[0] = t + e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; )
                  ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                return o;
              }
              return 0;
            }
            var add = sum;
            function sub(t, e) {
              var r = typeof t, i = typeof e;
              if (isNumerable(r, t) && isNumerable(i, e))
                return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return (t = t.slice(0))[0] -= e, t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return (e = e.slice(0))[0] = t - e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; )
                  ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                return o;
              }
              return 0;
            }
            function mul(t, e) {
              var r, i, s, a = typeof t, n = typeof e;
              if (isNumerable(a, t) && isNumerable(n, e))
                return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)
                  r[i] = t[i] * e;
                return r;
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)
                  r[i] = t * e[i];
                return r;
              }
              return 0;
            }
            function div(t, e) {
              var r, i, s, a = typeof t, n = typeof e;
              if (isNumerable(a, t) && isNumerable(n, e))
                return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)
                  r[i] = t[i] / e;
                return r;
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)
                  r[i] = t / e[i];
                return r;
              }
              return 0;
            }
            function mod(t, e) {
              return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e;
            }
            var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
            function clamp(t, e, r) {
              if (r < e) {
                var i = r;
                r = e, e = i;
              }
              return Math.min(Math.max(t, e), r);
            }
            function radiansToDegrees(t) {
              return t / degToRads;
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t) {
              return t * degToRads;
            }
            var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
            function length(t, e) {
              if ("number" == typeof t || t instanceof Number)
                return e = e || 0, Math.abs(t - e);
              var r;
              e || (e = helperLengthArray);
              var i = Math.min(t.length, e.length), s = 0;
              for (r = 0; r < i; r += 1)
                s += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(s);
            }
            function normalize(t) {
              return div(t, length(t));
            }
            function rgbToHsl(t) {
              var e, r, i = t[0], s = t[1], a = t[2], n = Math.max(i, s, a), o = Math.min(i, s, a), h = (n + o) / 2;
              if (n === o)
                r = e = 0;
              else {
                var l = n - o;
                switch (r = 0.5 < h ? l / (2 - n - o) : l / (n + o), n) {
                  case i:
                    e = (s - a) / l + (s < a ? 6 : 0);
                    break;
                  case s:
                    e = (a - i) / l + 2;
                    break;
                  case a:
                    e = (i - s) / l + 4;
                }
                e /= 6;
              }
              return [e, r, h, t[3]];
            }
            function hue2rgb(t, e, r) {
              return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
            }
            function hslToRgb(t) {
              var e, r, i, s = t[0], a = t[1], n = t[2];
              if (0 === a)
                r = i = e = n;
              else {
                var o = n < 0.5 ? n * (1 + a) : n + a - n * a, h = 2 * n - o;
                e = hue2rgb(h, o, s + 1 / 3), r = hue2rgb(h, o, s), i = hue2rgb(h, o, s - 1 / 3);
              }
              return [e, r, i, t[3]];
            }
            function linear(t, e, r, i, s) {
              if (void 0 !== i && void 0 !== s || (i = e, s = r, e = 0, r = 1), r < e) {
                var a = r;
                r = e, e = a;
              }
              if (t <= e)
                return i;
              if (r <= t)
                return s;
              var n, o = r === e ? 0 : (t - e) / (r - e);
              if (!i.length)
                return i + (s - i) * o;
              var h = i.length, l = createTypedArray("float32", h);
              for (n = 0; n < h; n += 1)
                l[n] = i[n] + (s[n] - i[n]) * o;
              return l;
            }
            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var r, i = e.length;
                t || (t = createTypedArray("float32", i));
                var s = createTypedArray("float32", i), a = BMMath.random();
                for (r = 0; r < i; r += 1)
                  s[r] = t[r] + a * (e[r] - t[r]);
                return s;
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
            }
            function createPath(t, e, r, i) {
              var s, a = t.length, n = shapePool.newElement();
              n.setPathData(!!i, a);
              var o, h, l = [0, 0];
              for (s = 0; s < a; s += 1)
                o = e && e[s] ? e[s] : l, h = r && r[s] ? r[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, true);
              return n;
            }
            function initiateExpression(elem, data, property) {
              var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
              thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
                return thisProperty.v;
              } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || true !== this.data.hd, wiggle = function(t, e) {
                var r, i, s = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", s);
                var n = Math.floor(5 * time);
                for (i = r = 0; r < n; ) {
                  for (i = 0; i < s; i += 1)
                    a[i] += -e + 2 * e * BMMath.random();
                  r += 1;
                }
                var o = 5 * time, h = o - Math.floor(o), l = createTypedArray("float32", s);
                if (1 < s) {
                  for (i = 0; i < s; i += 1)
                    l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                  return l;
                }
                return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
              }.bind(this);
              function loopInDuration(t, e) {
                return loopIn(t, e, true);
              }
              function loopOutDuration(t, e) {
                return loopOut(t, e, true);
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
              }
              function easeOut(t, e, r, i, s) {
                return applyEase(easeOutBez, t, e, r, i, s);
              }
              function easeIn(t, e, r, i, s) {
                return applyEase(easeInBez, t, e, r, i, s);
              }
              function ease(t, e, r, i, s) {
                return applyEase(easeInOutBez, t, e, r, i, s);
              }
              function applyEase(t, e, r, i, s, a) {
                void 0 === s ? (s = r, a = i) : e = (e - r) / (i - r), 1 < e ? e = 1 : e < 0 && (e = 0);
                var n = t(e);
                if ($bm_isInstanceOfArray(s)) {
                  var o, h = s.length, l = createTypedArray("float32", h);
                  for (o = 0; o < h; o += 1)
                    l[o] = (a[o] - s[o]) * n + s[o];
                  return l;
                }
                return (a - s) * n + s;
              }
              function nearestKey(t) {
                var e, r, i, s = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                    r = 1, i = data.k[0].t;
                  else {
                    for (e = 0; e < s - 1; e += 1) {
                      if (t === data.k[e].t) {
                        r = e + 1, i = data.k[e].t;
                        break;
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        i = t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, data.k[e + 1].t) : (r = e + 1, data.k[e].t);
                        break;
                      }
                    }
                    -1 === r && (r = e + 1, i = data.k[e].t);
                  }
                else
                  i = r = 0;
                var a = {};
                return a.index = r, a.time = i / elem.comp.globalData.frameRate, a;
              }
              function key(t) {
                var e, r, i;
                if (!data.k.length || "number" == typeof data.k[0])
                  throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] };
                var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (i = s.length, r = 0; r < i; r += 1)
                  e[r] = s[r], e.value[r] = s[r];
                return e;
              }
              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e;
              }
              function timeToFrames(t, e) {
                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
              }
              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t);
              }
              function sourceRectAtTime() {
                return elem.sourceRectAtTime();
              }
              function substring(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "";
              }
              function substr(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "";
              }
              function posterizeTime(t) {
                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
              }
              var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
              function executeExpression(t) {
                return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt);
              }
              return executeExpression;
            }
            return ob.initiateExpression = initiateExpression, ob;
          }(), expressionHelpers = { searchExpressions: function(t, e, r) {
            e.x && (r.k = true, r.x = true, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
          }, getSpeedAtTime: function(t) {
            var e = this.getValueAtTime(t), r = this.getValueAtTime(t + -0.01), i = 0;
            if (e.length) {
              var s;
              for (s = 0; s < e.length; s += 1)
                i += Math.pow(r[s] - e[s], 2);
              i = 100 * Math.sqrt(i);
            } else
              i = 0;
            return i;
          }, getVelocityAtTime: function(t) {
            if (void 0 !== this.vel)
              return this.vel;
            var e, r, i = this.getValueAtTime(t), s = this.getValueAtTime(t + -1e-3);
            if (i.length)
              for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1)
                e[r] = (s[r] - i[r]) / -1e-3;
            else
              e = (s - i) / -1e-3;
            return e;
          }, getValueAtTime: function(t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
          }, getStaticValueAtTime: function() {
            return this.pv;
          }, setGroupProperty: function(t) {
            this.propertyGroup = t;
          } };
          !function() {
            function o(t2, e2, r2) {
              if (!this.k || !this.keyframes)
                return this.pv;
              t2 = t2 ? t2.toLowerCase() : "";
              var i, s2, a, n2, o2, h2 = this.comp.renderedFrame, l2 = this.keyframes, p2 = l2[l2.length - 1].t;
              if (h2 <= p2)
                return this.pv;
              if (r2 ? s2 = p2 - (i = e2 ? Math.abs(p2 - this.elem.comp.globalData.frameRate * e2) : Math.max(0, p2 - this.elem.data.ip)) : ((!e2 || e2 > l2.length - 1) && (e2 = l2.length - 1), i = p2 - (s2 = l2[l2.length - 1 - e2].t)), "pingpong" === t2) {
                if (Math.floor((h2 - s2) / i) % 2 != 0)
                  return this.getValueAtTime((i - (h2 - s2) % i + s2) / this.comp.globalData.frameRate, 0);
              } else {
                if ("offset" === t2) {
                  var m = this.getValueAtTime(s2 / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), c = this.getValueAtTime(((h2 - s2) % i + s2) / this.comp.globalData.frameRate, 0), d = Math.floor((h2 - s2) / i);
                  if (this.pv.length) {
                    for (n2 = (o2 = new Array(m.length)).length, a = 0; a < n2; a += 1)
                      o2[a] = (f[a] - m[a]) * d + c[a];
                    return o2;
                  }
                  return (f - m) * d + c;
                }
                if ("continue" === t2) {
                  var u = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p2 - 1e-3) / this.comp.globalData.frameRate, 0);
                  if (this.pv.length) {
                    for (n2 = (o2 = new Array(u.length)).length, a = 0; a < n2; a += 1)
                      o2[a] = u[a] + (u[a] - y[a]) * ((h2 - p2) / this.comp.globalData.frameRate) / 5e-4;
                    return o2;
                  }
                  return u + (h2 - p2) / 1e-3 * (u - y);
                }
              }
              return this.getValueAtTime(((h2 - s2) % i + s2) / this.comp.globalData.frameRate, 0);
            }
            function h(t2, e2, r2) {
              if (!this.k)
                return this.pv;
              t2 = t2 ? t2.toLowerCase() : "";
              var i, s2, a, n2, o2, h2 = this.comp.renderedFrame, l2 = this.keyframes, p2 = l2[0].t;
              if (p2 <= h2)
                return this.pv;
              if (r2 ? s2 = p2 + (i = e2 ? Math.abs(this.elem.comp.globalData.frameRate * e2) : Math.max(0, this.elem.data.op - p2)) : ((!e2 || e2 > l2.length - 1) && (e2 = l2.length - 1), i = (s2 = l2[e2].t) - p2), "pingpong" === t2) {
                if (Math.floor((p2 - h2) / i) % 2 == 0)
                  return this.getValueAtTime(((p2 - h2) % i + p2) / this.comp.globalData.frameRate, 0);
              } else {
                if ("offset" === t2) {
                  var m = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(s2 / this.comp.globalData.frameRate, 0), c = this.getValueAtTime((i - (p2 - h2) % i + p2) / this.comp.globalData.frameRate, 0), d = Math.floor((p2 - h2) / i) + 1;
                  if (this.pv.length) {
                    for (n2 = (o2 = new Array(m.length)).length, a = 0; a < n2; a += 1)
                      o2[a] = c[a] - (f[a] - m[a]) * d;
                    return o2;
                  }
                  return c - (f - m) * d;
                }
                if ("continue" === t2) {
                  var u = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p2 + 1e-3) / this.comp.globalData.frameRate, 0);
                  if (this.pv.length) {
                    for (n2 = (o2 = new Array(u.length)).length, a = 0; a < n2; a += 1)
                      o2[a] = u[a] + (u[a] - y[a]) * (p2 - h2) / 1e-3;
                    return o2;
                  }
                  return u + (u - y) * (p2 - h2) / 1e-3;
                }
              }
              return this.getValueAtTime((i - ((p2 - h2) % i + p2)) / this.comp.globalData.frameRate, 0);
            }
            function l(t2, e2) {
              if (!this.k)
                return this.pv;
              if (t2 = 0.5 * (t2 || 0.4), (e2 = Math.floor(e2 || 5)) <= 1)
                return this.pv;
              var r2, i, s2 = this.comp.renderedFrame / this.comp.globalData.frameRate, a = s2 - t2, n2 = 1 < e2 ? (s2 + t2 - a) / (e2 - 1) : 1, o2 = 0, h2 = 0;
              for (r2 = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o2 < e2; ) {
                if (i = this.getValueAtTime(a + o2 * n2), this.pv.length)
                  for (h2 = 0; h2 < this.pv.length; h2 += 1)
                    r2[h2] += i[h2];
                else
                  r2 += i;
                o2 += 1;
              }
              if (this.pv.length)
                for (h2 = 0; h2 < this.pv.length; h2 += 1)
                  r2[h2] /= e2;
              else
                r2 /= e2;
              return r2;
            }
            var s = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t2, e2, r2) {
              var i = s(t2, e2, r2);
              return i.dynamicProperties.length ? i.getValueAtTime = function(t3) {
                this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
                var e3 = this._transformCachingAtTime.v;
                if (e3.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                  var r3 = this.a.getValueAtTime(t3);
                  e3.translate(-r3[0] * this.a.mult, -r3[1] * this.a.mult, r3[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                  var i2 = this.s.getValueAtTime(t3);
                  e3.scale(i2[0] * this.s.mult, i2[1] * this.s.mult, i2[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                  var s2 = this.sk.getValueAtTime(t3), a = this.sa.getValueAtTime(t3);
                  e3.skewFromAxis(-s2 * this.sk.mult, a * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                  var n2 = this.r.getValueAtTime(t3);
                  e3.rotate(-n2 * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                  var o2 = this.rz.getValueAtTime(t3), h2 = this.ry.getValueAtTime(t3), l2 = this.rx.getValueAtTime(t3), p2 = this.or.getValueAtTime(t3);
                  e3.rotateZ(-o2 * this.rz.mult).rotateY(h2 * this.ry.mult).rotateX(l2 * this.rx.mult).rotateZ(-p2[2] * this.or.mult).rotateY(p2[1] * this.or.mult).rotateX(p2[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                  var m = this.px.getValueAtTime(t3), f = this.py.getValueAtTime(t3);
                  if (this.data.p.z) {
                    var c = this.pz.getValueAtTime(t3);
                    e3.translate(m * this.px.mult, f * this.py.mult, -c * this.pz.mult);
                  } else
                    e3.translate(m * this.px.mult, f * this.py.mult, 0);
                } else {
                  var d = this.p.getValueAtTime(t3);
                  e3.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult);
                }
                return e3;
              }.bind(i) : i.getValueAtTime = function() {
                return this.v.clone(new Matrix());
              }.bind(i), i.setGroupProperty = expressionHelpers.setGroupProperty, i;
            };
            var p = PropertyFactory.getProp;
            PropertyFactory.getProp = function(t2, e2, r2, i, s2) {
              var a = p(t2, e2, r2, i, s2);
              a.kf ? a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a) : a.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a.loopOut = o, a.loopIn = h, a.smooth = l, a.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(a), a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a), a.numKeys = 1 === e2.a ? e2.k.length : 0, a.propertyIndex = e2.ix;
              var n2 = 0;
              return 0 !== r2 && (n2 = createTypedArray("float32", 1 === e2.a ? e2.k[0].s.length : e2.k.length)), a._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: n2 }, expressionHelpers.searchExpressions(t2, e2, a), a.k && s2.addDynamicProperty(a), a;
            };
            var t = ShapePropertyFactory.getConstructorFunction(), e = ShapePropertyFactory.getKeyframedConstructorFunction();
            function r() {
            }
            r.prototype = { vertices: function(t2, e2) {
              this.k && this.getValue();
              var r2, i = this.v;
              void 0 !== e2 && (i = this.getValueAtTime(e2, 0));
              var s2 = i._length, a = i[t2], n2 = i.v, o2 = createSizedArray(s2);
              for (r2 = 0; r2 < s2; r2 += 1)
                o2[r2] = "i" === t2 || "o" === t2 ? [a[r2][0] - n2[r2][0], a[r2][1] - n2[r2][1]] : [a[r2][0], a[r2][1]];
              return o2;
            }, points: function(t2) {
              return this.vertices("v", t2);
            }, inTangents: function(t2) {
              return this.vertices("i", t2);
            }, outTangents: function(t2) {
              return this.vertices("o", t2);
            }, isClosed: function() {
              return this.v.c;
            }, pointOnPath: function(t2, e2) {
              var r2 = this.v;
              void 0 !== e2 && (r2 = this.getValueAtTime(e2, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r2));
              for (var i, s2 = this._segmentsLength, a = s2.lengths, n2 = s2.totalLength * t2, o2 = 0, h2 = a.length, l2 = 0; o2 < h2; ) {
                if (l2 + a[o2].addedLength > n2) {
                  var p2 = o2, m = r2.c && o2 === h2 - 1 ? 0 : o2 + 1, f = (n2 - l2) / a[o2].addedLength;
                  i = bez.getPointInSegment(r2.v[p2], r2.v[m], r2.o[p2], r2.i[m], f, a[o2]);
                  break;
                }
                l2 += a[o2].addedLength, o2 += 1;
              }
              return i || (i = r2.c ? [r2.v[0][0], r2.v[0][1]] : [r2.v[r2._length - 1][0], r2.v[r2._length - 1][1]]), i;
            }, vectorOnPath: function(t2, e2, r2) {
              1 == t2 ? t2 = this.v.c : 0 == t2 && (t2 = 0.999);
              var i = this.pointOnPath(t2, e2), s2 = this.pointOnPath(t2 + 1e-3, e2), a = s2[0] - i[0], n2 = s2[1] - i[1], o2 = Math.sqrt(Math.pow(a, 2) + Math.pow(n2, 2));
              return 0 === o2 ? [0, 0] : "tangent" === r2 ? [a / o2, n2 / o2] : [-n2 / o2, a / o2];
            }, tangentOnPath: function(t2, e2) {
              return this.vectorOnPath(t2, e2, "tangent");
            }, normalOnPath: function(t2, e2) {
              return this.vectorOnPath(t2, e2, "normal");
            }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([r], t), extendPrototype([r], e), e.prototype.getValueAtTime = function(t2) {
              return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), t2 *= this.elem.globalData.frameRate, (t2 -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t2 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t2, this.interpolateShape(t2, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
            }, e.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var n = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t2, e2, r2, i, s2) {
              var a = n(t2, e2, r2, i, s2);
              return a.propertyIndex = e2.ix, a.lock = false, 3 === r2 ? expressionHelpers.searchExpressions(t2, e2.pt, a) : 4 === r2 && expressionHelpers.searchExpressions(t2, e2.ks, a), a.k && t2.addDynamicProperty(a), a;
            };
          }(), TextProperty.prototype.getExpressionValue = function(t, e) {
            var r = this.calculateExpression(e);
            if (t.t === r)
              return t;
            var i = {};
            return this.copyData(i, t), i.t = r.toString(), i.__complete = false, i;
          }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(), e = this.searchExpressions();
            return this.kf = t || e, this.kf;
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), true) : null;
          };
          var ShapePathInterface = function(t, e, r) {
            var i = e.sh;
            function s(t2) {
              return "Shape" === t2 || "shape" === t2 || "Path" === t2 || "path" === t2 || "ADBE Vector Shape" === t2 || 2 === t2 ? s.path : null;
            }
            var a = propertyGroupFactory(s, r);
            return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, { path: { get: function() {
              return i.k && i.getValue(), i;
            } }, shape: { get: function() {
              return i.k && i.getValue(), i;
            } }, _name: { value: t.nm }, ix: { value: t.ix }, propertyIndex: { value: t.ix }, mn: { value: t.mn }, propertyGroup: { value: r } }), s;
          }, propertyGroupFactory = function(e, r) {
            return function(t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? e : r(t - 1);
            };
          }, PropertyInterface = function(t, e) {
            var r = { _name: t };
            return function(t2) {
              return (t2 = void 0 === t2 ? 1 : t2) <= 0 ? r : e(t2 - 1);
            };
          }, ShapeExpressionInterface = function() {
            function n(t, e, r) {
              var i, s = [], a = t ? t.length : 0;
              for (i = 0; i < a; i += 1)
                "gr" === t[i].ty ? s.push(o(t[i], e[i], r)) : "fl" === t[i].ty ? s.push(h(t[i], e[i], r)) : "st" === t[i].ty ? s.push(m(t[i], e[i], r)) : "tm" === t[i].ty ? s.push(f(t[i], e[i], r)) : "tr" === t[i].ty || ("el" === t[i].ty ? s.push(d(t[i], e[i], r)) : "sr" === t[i].ty ? s.push(u(t[i], e[i], r)) : "sh" === t[i].ty ? s.push(ShapePathInterface(t[i], e[i], r)) : "rc" === t[i].ty ? s.push(y(t[i], e[i], r)) : "rd" === t[i].ty ? s.push(g(t[i], e[i], r)) : "rp" === t[i].ty ? s.push(v(t[i], e[i], r)) : "gf" === t[i].ty ? s.push(l(t[i], e[i], r)) : s.push(p(t[i], e[i])));
              return s;
            }
            function o(t, e, r) {
              var i = function(t2) {
                switch (t2) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return i.content;
                  default:
                    return i.transform;
                }
              };
              i.propertyGroup = propertyGroupFactory(i, r);
              var s = function(t2, e2, r2) {
                var i2, s2 = function(t3) {
                  for (var e3 = 0, r3 = i2.length; e3 < r3; ) {
                    if (i2[e3]._name === t3 || i2[e3].mn === t3 || i2[e3].propertyIndex === t3 || i2[e3].ix === t3 || i2[e3].ind === t3)
                      return i2[e3];
                    e3 += 1;
                  }
                  return "number" == typeof t3 ? i2[t3 - 1] : null;
                };
                s2.propertyGroup = propertyGroupFactory(s2, r2), i2 = n(t2.it, e2.it, s2.propertyGroup), s2.numProperties = i2.length;
                var a2 = c(t2.it[t2.it.length - 1], e2.it[e2.it.length - 1], s2.propertyGroup);
                return s2.transform = a2, s2.propertyIndex = t2.cix, s2._name = t2.nm, s2;
              }(t, e, i.propertyGroup), a = c(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup);
              return i.content = s, i.transform = a, Object.defineProperty(i, "_name", { get: function() {
                return t.nm;
              } }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i;
            }
            function h(t, e, r) {
              function i(t2) {
                return "Color" === t2 || "color" === t2 ? i.color : "Opacity" === t2 || "opacity" === t2 ? i.opacity : null;
              }
              return Object.defineProperties(i, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i;
            }
            function l(t, e, r) {
              function i(t2) {
                return "Start Point" === t2 || "start point" === t2 ? i.startPoint : "End Point" === t2 || "end point" === t2 ? i.endPoint : "Opacity" === t2 || "opacity" === t2 ? i.opacity : null;
              }
              return Object.defineProperties(i, { startPoint: { get: ExpressionPropertyInterface(e.s) }, endPoint: { get: ExpressionPropertyInterface(e.e) }, opacity: { get: ExpressionPropertyInterface(e.o) }, type: { get: function() {
                return "a";
              } }, _name: { value: t.nm }, mn: { value: t.mn } }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i;
            }
            function p() {
              return function() {
                return null;
              };
            }
            function m(t, e, r) {
              var i, s = propertyGroupFactory(l2, r), a = propertyGroupFactory(h2, s);
              var n2, o2 = t.d ? t.d.length : 0, h2 = {};
              for (i = 0; i < o2; i += 1)
                n2 = i, Object.defineProperty(h2, t.d[n2].nm, { get: ExpressionPropertyInterface(e.d.dataProps[n2].p) }), e.d.dataProps[i].p.setGroupProperty(a);
              function l2(t2) {
                return "Color" === t2 || "color" === t2 ? l2.color : "Opacity" === t2 || "opacity" === t2 ? l2.opacity : "Stroke Width" === t2 || "stroke width" === t2 ? l2.strokeWidth : null;
              }
              return Object.defineProperties(l2, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, strokeWidth: { get: ExpressionPropertyInterface(e.w) }, dash: { get: function() {
                return h2;
              } }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(PropertyInterface("Color", s)), e.o.setGroupProperty(PropertyInterface("Opacity", s)), e.w.setGroupProperty(PropertyInterface("Stroke Width", s)), l2;
            }
            function f(e, t, r) {
              function i(t2) {
                return t2 === e.e.ix || "End" === t2 || "end" === t2 ? i.end : t2 === e.s.ix ? i.start : t2 === e.o.ix ? i.offset : null;
              }
              var s = propertyGroupFactory(i, r);
              return i.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", s)), t.e.setGroupProperty(PropertyInterface("End", s)), t.o.setGroupProperty(PropertyInterface("Offset", s)), i.propertyIndex = e.ix, i.propertyGroup = r, Object.defineProperties(i, { start: { get: ExpressionPropertyInterface(t.s) }, end: { get: ExpressionPropertyInterface(t.e) }, offset: { get: ExpressionPropertyInterface(t.o) }, _name: { value: e.nm } }), i.mn = e.mn, i;
            }
            function c(e, t, r) {
              function i(t2) {
                return e.a.ix === t2 || "Anchor Point" === t2 ? i.anchorPoint : e.o.ix === t2 || "Opacity" === t2 ? i.opacity : e.p.ix === t2 || "Position" === t2 ? i.position : e.r.ix === t2 || "Rotation" === t2 || "ADBE Vector Rotation" === t2 ? i.rotation : e.s.ix === t2 || "Scale" === t2 ? i.scale : e.sk && e.sk.ix === t2 || "Skew" === t2 ? i.skew : e.sa && e.sa.ix === t2 || "Skew Axis" === t2 ? i.skewAxis : null;
              }
              var s = propertyGroupFactory(i, r);
              return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(i, { opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(t.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) }, _name: { value: e.nm } }), i.ty = "tr", i.mn = e.mn, i.propertyGroup = r, i;
            }
            function d(e, t, r) {
              function i(t2) {
                return e.p.ix === t2 ? i.position : e.s.ix === t2 ? i.size : null;
              }
              var s = propertyGroupFactory(i, r);
              i.propertyIndex = e.ix;
              var a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return a.s.setGroupProperty(PropertyInterface("Size", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(i, { size: { get: ExpressionPropertyInterface(a.s) }, position: { get: ExpressionPropertyInterface(a.p) }, _name: { value: e.nm } }), i.mn = e.mn, i;
            }
            function u(e, t, r) {
              function i(t2) {
                return e.p.ix === t2 ? i.position : e.r.ix === t2 ? i.rotation : e.pt.ix === t2 ? i.points : e.or.ix === t2 || "ADBE Vector Star Outer Radius" === t2 ? i.outerRadius : e.os.ix === t2 ? i.outerRoundness : !e.ir || e.ir.ix !== t2 && "ADBE Vector Star Inner Radius" !== t2 ? e.is && e.is.ix === t2 ? i.innerRoundness : null : i.innerRadius;
              }
              var s = propertyGroupFactory(i, r), a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return i.propertyIndex = e.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", s)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), a.pt.setGroupProperty(PropertyInterface("Points", s)), a.p.setGroupProperty(PropertyInterface("Position", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), e.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(i, { position: { get: ExpressionPropertyInterface(a.p) }, rotation: { get: ExpressionPropertyInterface(a.r) }, points: { get: ExpressionPropertyInterface(a.pt) }, outerRadius: { get: ExpressionPropertyInterface(a.or) }, outerRoundness: { get: ExpressionPropertyInterface(a.os) }, innerRadius: { get: ExpressionPropertyInterface(a.ir) }, innerRoundness: { get: ExpressionPropertyInterface(a.is) }, _name: { value: e.nm } }), i.mn = e.mn, i;
            }
            function y(e, t, r) {
              function i(t2) {
                return e.p.ix === t2 ? i.position : e.r.ix === t2 ? i.roundness : e.s.ix === t2 || "Size" === t2 || "ADBE Vector Rect Size" === t2 ? i.size : null;
              }
              var s = propertyGroupFactory(i, r), a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return i.propertyIndex = e.ix, a.p.setGroupProperty(PropertyInterface("Position", s)), a.s.setGroupProperty(PropertyInterface("Size", s)), a.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(i, { position: { get: ExpressionPropertyInterface(a.p) }, roundness: { get: ExpressionPropertyInterface(a.r) }, size: { get: ExpressionPropertyInterface(a.s) }, _name: { value: e.nm } }), i.mn = e.mn, i;
            }
            function g(e, t, r) {
              function i(t2) {
                return e.r.ix === t2 || "Round Corners 1" === t2 ? i.radius : null;
              }
              var s = propertyGroupFactory(i, r), a = t;
              return i.propertyIndex = e.ix, a.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(i, { radius: { get: ExpressionPropertyInterface(a.rd) }, _name: { value: e.nm } }), i.mn = e.mn, i;
            }
            function v(e, t, r) {
              function i(t2) {
                return e.c.ix === t2 || "Copies" === t2 ? i.copies : e.o.ix === t2 || "Offset" === t2 ? i.offset : null;
              }
              var s = propertyGroupFactory(i, r), a = t;
              return i.propertyIndex = e.ix, a.c.setGroupProperty(PropertyInterface("Copies", s)), a.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(i, { copies: { get: ExpressionPropertyInterface(a.c) }, offset: { get: ExpressionPropertyInterface(a.o) }, _name: { value: e.nm } }), i.mn = e.mn, i;
            }
            return function(t, e, i) {
              var s;
              function r(t2) {
                if ("number" == typeof t2)
                  return 0 === (t2 = void 0 === t2 ? 1 : t2) ? i : s[t2 - 1];
                for (var e2 = 0, r2 = s.length; e2 < r2; ) {
                  if (s[e2]._name === t2)
                    return s[e2];
                  e2 += 1;
                }
                return null;
              }
              return r.propertyGroup = propertyGroupFactory(r, function() {
                return i;
              }), s = n(t, e, r.propertyGroup), r.numProperties = s.length, r._name = "Contents", r;
            };
          }(), TextExpressionInterface = function(e) {
            var r;
            function i(t) {
              switch (t) {
                case "ADBE Text Document":
                  return i.sourceText;
                default:
                  return null;
              }
            }
            return Object.defineProperty(i, "sourceText", { get: function() {
              e.textProperty.getValue();
              var t = e.textProperty.currentData.t;
              return void 0 !== t && (e.textProperty.currentData.t = void 0, (r = new String(t)).value = t || new String(t)), r;
            } }), i;
          }, LayerExpressionInterface = function() {
            function s(t) {
              var e = new Matrix();
              void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
              return e;
            }
            function a(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t);
            }
            function n(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t);
            }
            function o(t, e) {
              var r = this.getMatrix(e);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t);
            }
            function h(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t);
            }
            function l(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0);
            }
            function p(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.inversePoint(e);
            }
            function m(t) {
              var e = new Matrix();
              if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t);
              }
              return e.inversePoint(t);
            }
            function f() {
              return [1, 1, 1, 1];
            }
            return function(e) {
              var r;
              function i(t2) {
                switch (t2) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return i.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return r;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return i.effect;
                  case "ADBE Text Properties":
                    return i.textInterface;
                  default:
                    return null;
                }
              }
              i.getMatrix = s, i.invertPoint = p, i.applyPoint = l, i.toWorld = n, i.toWorldVec = a, i.fromWorld = h, i.fromWorldVec = o, i.toComp = n, i.fromComp = m, i.sampleImage = f, i.sourceRectAtTime = e.sourceRectAtTime.bind(e);
              var t = getDescriptor(r = TransformExpressionInterface((i._elem = e).finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(i, { hasParent: { get: function() {
                return e.hierarchy.length;
              } }, parent: { get: function() {
                return e.hierarchy[0].layerInterface;
              } }, rotation: getDescriptor(r, "rotation"), scale: getDescriptor(r, "scale"), position: getDescriptor(r, "position"), opacity: getDescriptor(r, "opacity"), anchorPoint: t, anchor_point: t, transform: { get: function() {
                return r;
              } }, active: { get: function() {
                return e.isInRange;
              } } }), i.startTime = e.data.st, i.index = e.data.ind, i.source = e.data.refId, i.height = 0 === e.data.ty ? e.data.h : 100, i.width = 0 === e.data.ty ? e.data.w : 100, i.inPoint = e.data.ip / e.comp.globalData.frameRate, i.outPoint = e.data.op / e.comp.globalData.frameRate, i._name = e.data.nm, i.registerMaskInterface = function(t2) {
                i.mask = new MaskManagerInterface(t2, e);
              }, i.registerEffectsInterface = function(t2) {
                i.effect = t2;
              }, i;
            };
          }(), FootageInterface = (q6 = function(t) {
            function e(t2) {
              return "Outline" === t2 ? e.outlineInterface() : null;
            }
            return e._name = "Outline", e.outlineInterface = function(t2) {
              var i = "", s = t2.getFootageData();
              function a(t3) {
                if (s[t3])
                  return "object" == typeof (s = s[i = t3]) ? a : s;
                var e2 = t3.indexOf(i);
                if (-1 === e2)
                  return "";
                var r = parseInt(t3.substr(e2 + i.length), 10);
                return "object" == typeof (s = s[r]) ? a : s;
              }
              return function() {
                return i = "", s = t2.getFootageData(), a;
              };
            }(t), e;
          }, function(t) {
            function e(t2) {
              return "Data" === t2 ? e.dataInterface : null;
            }
            return e._name = "Data", e.dataInterface = q6(t), e;
          }), q6, CompExpressionInterface = function(i) {
            function t(t2) {
              for (var e = 0, r = i.layers.length; e < r; ) {
                if (i.layers[e].nm === t2 || i.layers[e].ind === t2)
                  return i.elements[e].layerInterface;
                e += 1;
              }
              return null;
            }
            return Object.defineProperty(t, "_name", { value: i.data.nm }), (t.layer = t).pixelAspect = 1, t.height = i.data.h || i.globalData.compSize.h, t.width = i.data.w || i.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / i.globalData.frameRate, t.displayStartTime = 0, t.numLayers = i.layers.length, t;
          }, TransformExpressionInterface = function(t) {
            function e(t2) {
              switch (t2) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null;
              }
            }
            var r, i, s, a;
            return Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() {
              return t.p ? a() : [r(), i(), s ? s() : 0];
            } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e;
          }, ProjectInterface = function() {
            function e(t) {
              this.compositions.push(t);
            }
            return function() {
              function t(t2) {
                for (var e2 = 0, r = this.compositions.length; e2 < r; ) {
                  if (this.compositions[e2].data && this.compositions[e2].data.nm === t2)
                    return this.compositions[e2].prepareFrame && this.compositions[e2].data.xt && this.compositions[e2].prepareFrame(this.currentFrame), this.compositions[e2].compInterface;
                  e2 += 1;
                }
                return null;
              }
              return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t;
            };
          }(), EffectsExpressionInterface = function() {
            function l(s, t, e, r) {
              function i(t2) {
                for (var e2 = s.ef, r2 = 0, i2 = e2.length; r2 < i2; ) {
                  if (t2 === e2[r2].nm || t2 === e2[r2].mn || t2 === e2[r2].ix)
                    return 5 === e2[r2].ty ? o[r2] : o[r2]();
                  r2 += 1;
                }
                throw new Error();
              }
              var a, n = propertyGroupFactory(i, e), o = [], h = s.ef.length;
              for (a = 0; a < h; a += 1)
                5 === s.ef[a].ty ? o.push(l(s.ef[a], t.effectElements[a], t.effectElements[a].propertyGroup, r)) : o.push(p(t.effectElements[a], s.ef[a].ty, r, n));
              return "ADBE Color Control" === s.mn && Object.defineProperty(i, "color", { get: function() {
                return o[0]();
              } }), Object.defineProperties(i, { numProperties: { get: function() {
                return s.np;
              } }, _name: { value: s.nm }, propertyGroup: { value: n } }), i.enabled = 0 !== s.en, i.active = i.enabled, i;
            }
            function p(t, e, r, i) {
              var s = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)), function() {
                return 10 === e ? r.comp.compInterface(t.p.v) : s();
              };
            }
            return { createEffectsInterface: function(t, e) {
              if (t.effectsManager) {
                var r, i = [], s = t.data.ef, a = t.effectsManager.effectElements.length;
                for (r = 0; r < a; r += 1)
                  i.push(l(s[r], t.effectsManager.effectElements[r], e, t));
                var n = t.data.ef || [], o = function(t2) {
                  for (r = 0, a = n.length; r < a; ) {
                    if (t2 === n[r].nm || t2 === n[r].mn || t2 === n[r].ix)
                      return i[r];
                    r += 1;
                  }
                  return null;
                };
                return Object.defineProperty(o, "numProperties", { get: function() {
                  return n.length;
                } }), o;
              }
              return null;
            } };
          }(), MaskManagerInterface = function() {
            function t(t2, e) {
              this._mask = t2, this._data = e;
            }
            Object.defineProperty(t.prototype, "maskPath", { get: function() {
              return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
            } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() {
              return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
            } });
            return function(e) {
              var r, i = createSizedArray(e.viewData.length), s = e.viewData.length;
              for (r = 0; r < s; r += 1)
                i[r] = new t(e.viewData[r], e.masksProperties[r]);
              return function(t2) {
                for (r = 0; r < s; ) {
                  if (e.masksProperties[r].nm === t2)
                    return i[r];
                  r += 1;
                }
                return null;
              };
            };
          }(), ExpressionPropertyInterface = function() {
            var s = { pv: 0, v: 0, mult: 1 }, n = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
            function o(i, s2, a) {
              Object.defineProperty(i, "velocity", { get: function() {
                return s2.getVelocityAtTime(s2.comp.currentFrame);
              } }), i.numKeys = s2.keyframes ? s2.keyframes.length : 0, i.key = function(t) {
                if (!i.numKeys)
                  return 0;
                var e2 = "";
                e2 = "s" in s2.keyframes[t - 1] ? s2.keyframes[t - 1].s : "e" in s2.keyframes[t - 2] ? s2.keyframes[t - 2].e : s2.keyframes[t - 2].s;
                var r = "unidimensional" === a ? new Number(e2) : Object.assign({}, e2);
                return r.time = s2.keyframes[t - 1].t / s2.elem.comp.globalData.frameRate, r.value = "unidimensional" === a ? e2[0] : e2, r;
              }, i.valueAtTime = s2.getValueAtTime, i.speedAtTime = s2.getSpeedAtTime, i.velocityAtTime = s2.getVelocityAtTime, i.propertyGroup = s2.propertyGroup;
            }
            function e() {
              return s;
            }
            return function(t) {
              return t ? "unidimensional" === t.propType ? function(t2) {
                t2 && "pv" in t2 || (t2 = s);
                var e2 = 1 / t2.mult, r = t2.pv * e2, i = new Number(r);
                return i.value = r, o(i, t2, "unidimensional"), function() {
                  return t2.k && t2.getValue(), r = t2.v * e2, i.value !== r && ((i = new Number(r)).value = r, o(i, t2, "unidimensional")), i;
                };
              }(t) : function(e2) {
                e2 && "pv" in e2 || (e2 = n);
                var r = 1 / e2.mult, i = e2.data && e2.data.l || e2.pv.length, s2 = createTypedArray("float32", i), a = createTypedArray("float32", i);
                return s2.value = a, o(s2, e2, "multidimensional"), function() {
                  e2.k && e2.getValue();
                  for (var t2 = 0; t2 < i; t2 += 1)
                    a[t2] = e2.v[t2] * r, s2[t2] = a[t2];
                  return s2;
                };
              }(t) : e;
            };
          }(), TextExpressionSelectorPropFactory = function() {
            function r(t, e) {
              return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v;
            }
            return function(t, e) {
              this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = 0.01, this.propType = "textSelector", this.textTotal = e.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = true, this.x = true, this.getValue = ExpressionManager.initiateExpression.bind(this)(t, e, this), this.getMult = r, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty;
            };
          }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
          function SliderEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function AngleEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function ColorEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
          }
          function PointEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
          }
          function LayerIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function MaskIndexEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function CheckboxEffect(t, e, r) {
            this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
          }
          function NoValueEffect() {
            this.p = {};
          }
          function EffectsManager(t, e) {
            var r, i = t.ef || [];
            this.effectElements = [];
            var s, a = i.length;
            for (r = 0; r < a; r += 1)
              s = new GroupEffect(i[r], e), this.effectElements.push(s);
          }
          function GroupEffect(t, e) {
            this.init(t, e);
          }
          TextSelectorProp.getTextSelectorProp = function(t, e, r) {
            return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, r) : propertyGetTextProp(t, e, r);
          }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
            var r;
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
            var i, s = this.data.ef.length, a = this.data.ef;
            for (r = 0; r < s; r += 1) {
              switch (i = null, a[r].ty) {
                case 0:
                  i = new SliderEffect(a[r], e, this);
                  break;
                case 1:
                  i = new AngleEffect(a[r], e, this);
                  break;
                case 2:
                  i = new ColorEffect(a[r], e, this);
                  break;
                case 3:
                  i = new PointEffect(a[r], e, this);
                  break;
                case 4:
                case 7:
                  i = new CheckboxEffect(a[r], e, this);
                  break;
                case 10:
                  i = new LayerIndexEffect(a[r], e, this);
                  break;
                case 11:
                  i = new MaskIndexEffect(a[r], e, this);
                  break;
                case 5:
                  i = new EffectsManager(a[r], e, this);
                  break;
                default:
                  i = new NoValueEffect(a[r], e, this);
              }
              i && this.effectElements.push(i);
            }
          };
          var lottie = {};
          function setLocationHref(t) {
            locationHref = t;
          }
          function searchAnimations() {
            true === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
          }
          function setSubframeRendering(t) {
            subframeEnabled = t;
          }
          function setIDPrefix(t) {
            idPrefix = t;
          }
          function loadAnimation(t) {
            return true === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
          }
          function setQuality(t) {
            if ("string" == typeof t)
              switch (t) {
                case "high":
                  defaultCurveSegments = 200;
                  break;
                default:
                case "medium":
                  defaultCurveSegments = 50;
                  break;
                case "low":
                  defaultCurveSegments = 10;
              }
            else
              !isNaN(t) && 1 < t && (defaultCurveSegments = t);
            roundValues(!(50 <= defaultCurveSegments));
          }
          function inBrowser() {
            return "undefined" != typeof navigator;
          }
          function installPlugin(t, e) {
            "expressions" === t && (expressionsPlugin = e);
          }
          function getFactory(t) {
            switch (t) {
              case "propertyFactory":
                return PropertyFactory;
              case "shapePropertyFactory":
                return ShapePropertyFactory;
              case "matrix":
                return Matrix;
              default:
                return null;
            }
          }
          function checkReady() {
            "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
          }
          function getQueryVariable(t) {
            for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
              var i = e[r].split("=");
              if (decodeURIComponent(i[0]) == t)
                return decodeURIComponent(i[1]);
            }
            return null;
          }
          lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.13";
          var standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "", queryString;
          if (standalone) {
            var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
            queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer");
          }
          var readyStateCheckInterval = setInterval(checkReady, 100);
          return lottie;
        });
      }
    });
  
    // shared/render/plugins/Animation/webflow-lottie.js
    var require_webflow_lottie = __commonJS({
      "shared/render/plugins/Animation/webflow-lottie.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        var lottieSiteModule = require_LottieSiteModule();
        var lottie2 = require_lottie_min();
        Webflow.define("lottie", module2.exports = function() {
          return {
            lottie: lottie2,
            createInstance: lottieSiteModule.createInstance,
            cleanupElement: lottieSiteModule.cleanupElement,
            init: lottieSiteModule.init,
            destroy: lottieSiteModule.destroy,
            ready: lottieSiteModule.ready
          };
        });
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-brand.js
    var require_webflow_brand = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-brand.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        Webflow.define("brand", module2.exports = function($) {
          var api = {};
          var doc = document;
          var $html = $("html");
          var $body = $("body");
          var namespace = ".w-webflow-badge";
          var location = window.location;
          var isPhantom = /PhantomJS/i.test(navigator.userAgent);
          var fullScreenEvents = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          var brandElement;
          api.ready = function() {
            var shouldBrand = $html.attr("data-wf-status");
            var publishedDomain = $html.attr("data-wf-domain") || "";
            if (/\.webflow\.io$/i.test(publishedDomain) && location.hostname !== publishedDomain) {
              shouldBrand = true;
            }
            if (shouldBrand && !isPhantom) {
              brandElement = brandElement || createBadge();
              ensureBrand();
              setTimeout(ensureBrand, 500);
              $(doc).off(fullScreenEvents, onFullScreenChange).on(fullScreenEvents, onFullScreenChange);
            }
          };
          function onFullScreenChange() {
            var fullScreen = doc.fullScreen || doc.mozFullScreen || doc.webkitIsFullScreen || doc.msFullscreenElement || Boolean(doc.webkitFullscreenElement);
            $(brandElement).attr("style", fullScreen ? "display: none !important;" : "");
          }
          function createBadge() {
            return;
          }
          function ensureBrand() {
            var found = $body.children(namespace);
            var match = found.length && found.get(0) === brandElement;
            var inEditor = Webflow.env("editor");
            if (match) {
              if (inEditor) {
                found.remove();
              }
              return;
            }
            if (found.length) {
              found.remove();
            }
            if (!inEditor) {
              $body.append(brandElement);
            }
          }
          return api;
        });
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-edit.js
    var require_webflow_edit = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-edit.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        Webflow.define("edit", module2.exports = function($, _, options) {
          options = options || {};
          if (Webflow.env("test") || Webflow.env("frame")) {
            if (!options.fixture && !inCypress()) {
              return {
                exit: 1
              };
            }
          }
          var api = {};
          var $win = $(window);
          var $html = $(document.documentElement);
          var location = document.location;
          var hashchange = "hashchange";
          var loaded;
          var loadEditor = options.load || load;
          var hasLocalStorage = false;
          try {
            hasLocalStorage = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
          } catch (e) {
          }
          if (hasLocalStorage) {
            loadEditor();
          } else if (location.search) {
            if (/[?&](edit)(?:[=&?]|$)/.test(location.search) || /\?edit$/.test(location.href)) {
              loadEditor();
            }
          } else {
            $win.on(hashchange, checkHash).triggerHandler(hashchange);
          }
          function checkHash() {
            if (loaded) {
              return;
            }
            if (/\?edit/.test(location.hash)) {
              loadEditor();
            }
          }
          function load() {
            loaded = true;
            window.WebflowEditor = true;
            $win.off(hashchange, checkHash);
            checkThirdPartyCookieSupport(function(thirdPartyCookiesSupported) {
              $.ajax({
                url: cleanSlashes("https://editor-api.webflow.com/api/editor/view"),
                data: {
                  siteId: $html.attr("data-wf-site")
                },
                xhrFields: {
                  withCredentials: true
                },
                dataType: "json",
                crossDomain: true,
                success: success(thirdPartyCookiesSupported)
              });
            });
          }
          function success(thirdPartyCookiesSupported) {
            return function(data2) {
              if (!data2) {
                console.error("Could not load editor data");
                return;
              }
              data2.thirdPartyCookiesSupported = thirdPartyCookiesSupported;
              getScript(prefix(data2.bugReporterScriptPath), function() {
                getScript(prefix(data2.scriptPath), function() {
                  window.WebflowEditor(data2);
                });
              });
            };
          }
          function getScript(url, done) {
            $.ajax({
              type: "GET",
              url,
              dataType: "script",
              cache: true
            }).then(done, error);
          }
          function error(jqXHR, textStatus, errorThrown) {
            console.error("Could not load editor script: " + textStatus);
            throw errorThrown;
          }
          function prefix(url) {
            return url.indexOf("//") >= 0 ? url : cleanSlashes("https://editor-api.webflow.com" + url);
          }
          function cleanSlashes(url) {
            return url.replace(/([^:])\/\//g, "$1/");
          }
          function checkThirdPartyCookieSupport(callback) {
            var iframe = window.document.createElement("iframe");
            iframe.src = "https://webflow.com/site/third-party-cookie-check.html";
            iframe.style.display = "none";
            iframe.sandbox = "allow-scripts allow-same-origin";
            var handleMessage = function(event) {
              if (event.data === "WF_third_party_cookies_unsupported") {
                cleanUpCookieCheckerIframe(iframe, handleMessage);
                callback(false);
              } else if (event.data === "WF_third_party_cookies_supported") {
                cleanUpCookieCheckerIframe(iframe, handleMessage);
                callback(true);
              }
            };
            iframe.onerror = function() {
              cleanUpCookieCheckerIframe(iframe, handleMessage);
              callback(false);
            };
            window.addEventListener("message", handleMessage, false);
            window.document.body.appendChild(iframe);
          }
          function cleanUpCookieCheckerIframe(iframe, listener) {
            window.removeEventListener("message", listener, false);
            iframe.remove();
          }
          return api;
        });
        function inCypress() {
          try {
            return window.top.__Cypress__;
          } catch (e) {
            return false;
          }
        }
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-focus-visible.js
    var require_webflow_focus_visible = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-focus-visible.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        Webflow.define("focus-visible", module2.exports = function() {
          function applyFocusVisiblePolyfill(scope) {
            var hadKeyboardEvent = true;
            var hadFocusVisibleRecently = false;
            var hadFocusVisibleRecentlyTimeout = null;
            var inputTypesAllowlist = {
              text: true,
              search: true,
              url: true,
              tel: true,
              email: true,
              password: true,
              number: true,
              date: true,
              month: true,
              week: true,
              time: true,
              datetime: true,
              "datetime-local": true
            };
            function isValidFocusTarget(el) {
              if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) {
                return true;
              }
              return false;
            }
            function focusTriggersKeyboardModality(el) {
              var type = el.type;
              var tagName = el.tagName;
              if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) {
                return true;
              }
              if (tagName === "TEXTAREA" && !el.readOnly) {
                return true;
              }
              if (el.isContentEditable) {
                return true;
              }
              return false;
            }
            function addFocusVisibleAttribute(el) {
              if (el.getAttribute("data-wf-focus-visible")) {
                return;
              }
              el.setAttribute("data-wf-focus-visible", "true");
            }
            function removeFocusVisibleAttribute(el) {
              if (!el.getAttribute("data-wf-focus-visible")) {
                return;
              }
              el.removeAttribute("data-wf-focus-visible");
            }
            function onKeyDown(e) {
              if (e.metaKey || e.altKey || e.ctrlKey) {
                return;
              }
              if (isValidFocusTarget(scope.activeElement)) {
                addFocusVisibleAttribute(scope.activeElement);
              }
              hadKeyboardEvent = true;
            }
            function onPointerDown() {
              hadKeyboardEvent = false;
            }
            function onFocus(e) {
              if (!isValidFocusTarget(e.target)) {
                return;
              }
              if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
                addFocusVisibleAttribute(e.target);
              }
            }
            function onBlur(e) {
              if (!isValidFocusTarget(e.target)) {
                return;
              }
              if (e.target.hasAttribute("data-wf-focus-visible")) {
                hadFocusVisibleRecently = true;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                  hadFocusVisibleRecently = false;
                }, 100);
                removeFocusVisibleAttribute(e.target);
              }
            }
            function onVisibilityChange() {
              if (document.visibilityState === "hidden") {
                if (hadFocusVisibleRecently) {
                  hadKeyboardEvent = true;
                }
                addInitialPointerMoveListeners();
              }
            }
            function addInitialPointerMoveListeners() {
              document.addEventListener("mousemove", onInitialPointerMove);
              document.addEventListener("mousedown", onInitialPointerMove);
              document.addEventListener("mouseup", onInitialPointerMove);
              document.addEventListener("pointermove", onInitialPointerMove);
              document.addEventListener("pointerdown", onInitialPointerMove);
              document.addEventListener("pointerup", onInitialPointerMove);
              document.addEventListener("touchmove", onInitialPointerMove);
              document.addEventListener("touchstart", onInitialPointerMove);
              document.addEventListener("touchend", onInitialPointerMove);
            }
            function removeInitialPointerMoveListeners() {
              document.removeEventListener("mousemove", onInitialPointerMove);
              document.removeEventListener("mousedown", onInitialPointerMove);
              document.removeEventListener("mouseup", onInitialPointerMove);
              document.removeEventListener("pointermove", onInitialPointerMove);
              document.removeEventListener("pointerdown", onInitialPointerMove);
              document.removeEventListener("pointerup", onInitialPointerMove);
              document.removeEventListener("touchmove", onInitialPointerMove);
              document.removeEventListener("touchstart", onInitialPointerMove);
              document.removeEventListener("touchend", onInitialPointerMove);
            }
            function onInitialPointerMove(e) {
              if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") {
                return;
              }
              hadKeyboardEvent = false;
              removeInitialPointerMoveListeners();
            }
            document.addEventListener("keydown", onKeyDown, true);
            document.addEventListener("mousedown", onPointerDown, true);
            document.addEventListener("pointerdown", onPointerDown, true);
            document.addEventListener("touchstart", onPointerDown, true);
            document.addEventListener("visibilitychange", onVisibilityChange, true);
            addInitialPointerMoveListeners();
            scope.addEventListener("focus", onFocus, true);
            scope.addEventListener("blur", onBlur, true);
          }
          function ready() {
            if (typeof document !== "undefined") {
              try {
                document.querySelector(":focus-visible");
              } catch (e) {
                applyFocusVisiblePolyfill(document);
              }
            }
          }
          return {
            ready
          };
        });
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-focus.js
    var require_webflow_focus = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-focus.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        Webflow.define("focus", module2.exports = function() {
          var capturedEvents = [];
          var capturing = false;
          function captureEvent(e) {
            if (capturing) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              capturedEvents.unshift(e);
            }
          }
          function isPolyfilledFocusEvent(e) {
            var el = e.target;
            var tag = el.tagName;
            return /^a$/i.test(tag) && el.href != null || // (A)
            /^(button|textarea)$/i.test(tag) && el.disabled !== true || // (B) (C)
            /^input$/i.test(tag) && /^(button|reset|submit|radio|checkbox)$/i.test(el.type) && !el.disabled || // (D)
            !/^(button|input|textarea|select|a)$/i.test(tag) && !Number.isNaN(Number.parseFloat(el.tabIndex)) || // (E)
            /^audio$/i.test(tag) || // (F)
            /^video$/i.test(tag) && el.controls === true;
          }
          function handler(e) {
            if (isPolyfilledFocusEvent(e)) {
              capturing = true;
              setTimeout(() => {
                capturing = false;
                e.target.focus();
                while (capturedEvents.length > 0) {
                  var event = capturedEvents.pop();
                  event.target.dispatchEvent(new MouseEvent(event.type, event));
                }
              }, 0);
            }
          }
          function ready() {
            if (typeof document !== "undefined" && document.body.hasAttribute("data-wf-focus-within") && Webflow.env.safari) {
              document.addEventListener("mousedown", handler, true);
              document.addEventListener("mouseup", captureEvent, true);
              document.addEventListener("click", captureEvent, true);
            }
          }
          return {
            ready
          };
        });
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-links.js
    var require_webflow_links = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-links.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        Webflow.define("links", module2.exports = function($, _) {
          var api = {};
          var $win = $(window);
          var designer;
          var inApp = Webflow.env();
          var location = window.location;
          var tempLink = document.createElement("a");
          var linkCurrent = "w--current";
          var indexPage = /index\.(html|php)$/;
          var dirList = /\/$/;
          var anchors;
          var slug;
          api.ready = api.design = api.preview = init;
          function init() {
            designer = inApp && Webflow.env("design");
            slug = Webflow.env("slug") || location.pathname || "";
            Webflow.scroll.off(scroll);
            anchors = [];
            var links = document.links;
            for (var i = 0; i < links.length; ++i) {
              select(links[i]);
            }
            if (anchors.length) {
              Webflow.scroll.on(scroll);
              scroll();
            }
          }
          function select(link) {
            var href = designer && link.getAttribute("href-disabled") || link.getAttribute("href");
            tempLink.href = href;
            if (href.indexOf(":") >= 0) {
              return;
            }
            var $link = $(link);
            if (tempLink.hash.length > 1 && tempLink.host + tempLink.pathname === location.host + location.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(tempLink.hash)) {
                return;
              }
              var $section = $(tempLink.hash);
              $section.length && anchors.push({
                link: $link,
                sec: $section,
                active: false
              });
              return;
            }
            if (href === "#" || href === "") {
              return;
            }
            var match = tempLink.href === location.href || href === slug || indexPage.test(href) && dirList.test(slug);
            setClass($link, linkCurrent, match);
          }
          function scroll() {
            var viewTop = $win.scrollTop();
            var viewHeight = $win.height();
            _.each(anchors, function(anchor) {
              var $link = anchor.link;
              var $section = anchor.sec;
              var top = $section.offset().top;
              var height2 = $section.outerHeight();
              var offset = viewHeight * 0.5;
              var active2 = $section.is(":visible") && top + height2 - offset >= viewTop && top + offset <= viewTop + viewHeight;
              if (anchor.active === active2) {
                return;
              }
              anchor.active = active2;
              setClass($link, linkCurrent, active2);
            });
          }
          function setClass($elem, className, add2) {
            var exists = $elem.hasClass(className);
            if (add2 && exists) {
              return;
            }
            if (!add2 && !exists) {
              return;
            }
            add2 ? $elem.addClass(className) : $elem.removeClass(className);
          }
          return api;
        });
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-scroll.js
    var require_webflow_scroll = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-scroll.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        Webflow.define("scroll", module2.exports = function($) {
          var NS_EVENTS = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll"
          };
          var loc = window.location;
          var history = inIframe() ? null : window.history;
          var $win = $(window);
          var $doc = $(document);
          var $body = $(document.body);
          var animate = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
            window.setTimeout(fn, 15);
          };
          var rootTag = Webflow.env("editor") ? ".w-editor-body" : "body";
          var headerSelector = "header, " + rootTag + " > .header, " + rootTag + " > .w-nav:not([data-no-scroll])";
          var emptyHrefSelector = 'a[href="#"]';
          var localHrefSelector = 'a[href*="#"]:not(.w-tab-link):not(' + emptyHrefSelector + ")";
          var scrollTargetOutlineCSS = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}';
          var focusStylesEl = document.createElement("style");
          focusStylesEl.appendChild(document.createTextNode(scrollTargetOutlineCSS));
          function inIframe() {
            try {
              return Boolean(window.frameElement);
            } catch (e) {
              return true;
            }
          }
          var validHash = /^#[a-zA-Z0-9][\w:.-]*$/;
          function linksToCurrentPage(link) {
            return validHash.test(link.hash) && link.host + link.pathname === loc.host + loc.pathname;
          }
          const reducedMotionMediaQuery = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
          function reducedMotionEnabled() {
            return document.body.getAttribute("data-wf-scroll-motion") === "none" || reducedMotionMediaQuery.matches;
          }
          function setFocusable($el, action) {
            var initialTabindex;
            switch (action) {
              case "add":
                initialTabindex = $el.attr("tabindex");
                if (initialTabindex) {
                  $el.attr("data-wf-tabindex-swap", initialTabindex);
                } else {
                  $el.attr("tabindex", "-1");
                }
                break;
              case "remove":
                initialTabindex = $el.attr("data-wf-tabindex-swap");
                if (initialTabindex) {
                  $el.attr("tabindex", initialTabindex);
                  $el.removeAttr("data-wf-tabindex-swap");
                } else {
                  $el.removeAttr("tabindex");
                }
                break;
            }
            $el.toggleClass("wf-force-outline-none", action === "add");
          }
          function validateScroll(evt) {
            var target = evt.currentTarget;
            if (
              // Bail if in Designer
              Webflow.env("design") || // Ignore links being used by jQuery mobile
              window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(target.className)
            ) {
              return;
            }
            var hash = linksToCurrentPage(target) ? target.hash : "";
            if (hash === "")
              return;
            var $el = $(hash);
            if (!$el.length) {
              return;
            }
            if (evt) {
              evt.preventDefault();
              evt.stopPropagation();
            }
            updateHistory(hash, evt);
            window.setTimeout(function() {
              scroll($el, function setFocus() {
                setFocusable($el, "add");
                $el.get(0).focus({
                  preventScroll: true
                });
                setFocusable($el, "remove");
              });
            }, evt ? 0 : 300);
          }
          function updateHistory(hash) {
            if (loc.hash !== hash && history && history.pushState && // Navigation breaks Chrome when the protocol is `file:`.
            !(Webflow.env.chrome && loc.protocol === "file:")) {
              var oldHash = history.state && history.state.hash;
              if (oldHash !== hash) {
                history.pushState({
                  hash
                }, "", hash);
              }
            }
          }
          function scroll($targetEl, cb) {
            var start = $win.scrollTop();
            var end = calculateScrollEndPosition($targetEl);
            if (start === end)
              return;
            var duration = calculateScrollDuration($targetEl, start, end);
            var clock = Date.now();
            var step = function() {
              var elapsed = Date.now() - clock;
              window.scroll(0, getY(start, end, elapsed, duration));
              if (elapsed <= duration) {
                animate(step);
              } else if (typeof cb === "function") {
                cb();
              }
            };
            animate(step);
          }
          function calculateScrollEndPosition($targetEl) {
            var $header = $(headerSelector);
            var offsetY = $header.css("position") === "fixed" ? $header.outerHeight() : 0;
            var end = $targetEl.offset().top - offsetY;
            if ($targetEl.data("scroll") === "mid") {
              var available = $win.height() - offsetY;
              var elHeight = $targetEl.outerHeight();
              if (elHeight < available) {
                end -= Math.round((available - elHeight) / 2);
              }
            }
            return end;
          }
          function calculateScrollDuration($targetEl, start, end) {
            if (reducedMotionEnabled())
              return 0;
            var mult = 1;
            $body.add($targetEl).each(function(_, el) {
              var time2 = parseFloat(el.getAttribute("data-scroll-time"));
              if (!isNaN(time2) && time2 >= 0) {
                mult = time2;
              }
            });
            return (472.143 * Math.log(Math.abs(start - end) + 125) - 2e3) * mult;
          }
          function getY(start, end, elapsed, duration) {
            if (elapsed > duration) {
              return end;
            }
            return start + (end - start) * ease2(elapsed / duration);
          }
          function ease2(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          }
          function ready() {
            var {
              WF_CLICK_EMPTY,
              WF_CLICK_SCROLL
            } = NS_EVENTS;
            $doc.on(WF_CLICK_SCROLL, localHrefSelector, validateScroll);
            $doc.on(WF_CLICK_EMPTY, emptyHrefSelector, function(e) {
              e.preventDefault();
            });
            document.head.insertBefore(focusStylesEl, document.head.firstChild);
          }
          return {
            ready
          };
        });
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-touch.js
    var require_webflow_touch = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-touch.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        Webflow.define("touch", module2.exports = function($) {
          var api = {};
          var getSelection = window.getSelection;
          $.event.special.tap = {
            bindType: "click",
            delegateType: "click"
          };
          api.init = function(el) {
            el = typeof el === "string" ? $(el).get(0) : el;
            return el ? new Touch(el) : null;
          };
          function Touch(el) {
            var active2 = false;
            var useTouch = false;
            var thresholdX = Math.min(Math.round(window.innerWidth * 0.04), 40);
            var startX;
            var lastX;
            el.addEventListener("touchstart", start, false);
            el.addEventListener("touchmove", move, false);
            el.addEventListener("touchend", end, false);
            el.addEventListener("touchcancel", cancel, false);
            el.addEventListener("mousedown", start, false);
            el.addEventListener("mousemove", move, false);
            el.addEventListener("mouseup", end, false);
            el.addEventListener("mouseout", cancel, false);
            function start(evt) {
              var touches = evt.touches;
              if (touches && touches.length > 1) {
                return;
              }
              active2 = true;
              if (touches) {
                useTouch = true;
                startX = touches[0].clientX;
              } else {
                startX = evt.clientX;
              }
              lastX = startX;
            }
            function move(evt) {
              if (!active2) {
                return;
              }
              if (useTouch && evt.type === "mousemove") {
                evt.preventDefault();
                evt.stopPropagation();
                return;
              }
              var touches = evt.touches;
              var x = touches ? touches[0].clientX : evt.clientX;
              var velocityX = x - lastX;
              lastX = x;
              if (Math.abs(velocityX) > thresholdX && getSelection && String(getSelection()) === "") {
                triggerEvent("swipe", evt, {
                  direction: velocityX > 0 ? "right" : "left"
                });
                cancel();
              }
            }
            function end(evt) {
              if (!active2) {
                return;
              }
              active2 = false;
              if (useTouch && evt.type === "mouseup") {
                evt.preventDefault();
                evt.stopPropagation();
                useTouch = false;
                return;
              }
            }
            function cancel() {
              active2 = false;
            }
            function destroy() {
              el.removeEventListener("touchstart", start, false);
              el.removeEventListener("touchmove", move, false);
              el.removeEventListener("touchend", end, false);
              el.removeEventListener("touchcancel", cancel, false);
              el.removeEventListener("mousedown", start, false);
              el.removeEventListener("mousemove", move, false);
              el.removeEventListener("mouseup", end, false);
              el.removeEventListener("mouseout", cancel, false);
              el = null;
            }
            this.destroy = destroy;
          }
          function triggerEvent(type, evt, data2) {
            var newEvent = $.Event(type, {
              originalEvent: evt
            });
            $(evt.target).trigger(newEvent, data2);
          }
          api.instance = api.init(document);
          return api;
        });
      }
    });
  
    // shared/render/plugins/Form/webflow-forms-hosted.js
    var require_webflow_forms_hosted = __commonJS({
      "shared/render/plugins/Form/webflow-forms-hosted.js"(exports2) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        exports2.default = hostedSubmitWebflow;
        function hostedSubmitWebflow(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl) {
          return function(data2) {
            reset(data2);
            var form = data2.form;
            var payload = {
              name: form.attr("data-name") || form.attr("name") || "Untitled Form",
              pageId: form.attr("data-wf-page-id") || "",
              elementId: form.attr("data-wf-element-id") || "",
              source: loc.href,
              test: Webflow.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(form.html()),
              trackingCookies: collectEnterpriseTrackingCookies()
            };
            const wfFlow = form.attr("data-wf-flow");
            if (wfFlow) {
              payload.wfFlow = wfFlow;
            }
            preventDefault(data2);
            var status = findFields(form, payload.fields);
            if (status) {
              return alert(status);
            }
            payload.fileUploads = findFileUploads(form);
            disableBtn(data2);
            if (!siteId) {
              afterSubmit(data2);
              return;
            }
            $.ajax({
              url: formUrl,
              type: "POST",
              data: payload,
              dataType: "json",
              crossDomain: true
            }).done(function(response) {
              if (response && response.code === 200) {
                data2.success = true;
              }
              afterSubmit(data2);
            }).fail(function() {
              afterSubmit(data2);
            });
          };
        }
      }
    });
  
    // shared/render/plugins/Form/webflow-forms.js
    var require_webflow_forms = __commonJS({
      "shared/render/plugins/Form/webflow-forms.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        Webflow.define("forms", module2.exports = function($, _) {
          var api = {};
          var $doc = $(document);
          var $forms;
          var loc = window.location;
          var retro = window.XDomainRequest && !window.atob;
          var namespace = ".w-form";
          var siteId;
          var emailField = /e(-)?mail/i;
          var emailValue = /^\S+@\S+$/;
          var alert = window.alert;
          var inApp = Webflow.env();
          var listening;
          var formUrl;
          var signFileUrl;
          var chimpRegex = /list-manage[1-9]?.com/i;
          var disconnected = _.debounce(function() {
            alert("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
          }, 100);
          api.ready = api.design = api.preview = function() {
            init();
            if (!inApp && !listening) {
              addListeners();
            }
          };
          function init() {
            siteId = $("html").attr("data-wf-site");
            formUrl = "https://webflow.com/api/v1/form/" + siteId;
            if (retro && formUrl.indexOf("https://webflow.com") >= 0) {
              formUrl = formUrl.replace("https://webflow.com", "https://formdata.webflow.com");
            }
            signFileUrl = `${formUrl}/signFile`;
            $forms = $(namespace + " form");
            if (!$forms.length) {
              return;
            }
            $forms.each(build);
          }
          function build(i, el) {
            var $el = $(el);
            var data2 = $.data(el, namespace);
            if (!data2) {
              data2 = $.data(el, namespace, {
                form: $el
              });
            }
            reset(data2);
            var wrap = $el.closest("div.w-form");
            data2.done = wrap.find("> .w-form-done");
            data2.fail = wrap.find("> .w-form-fail");
            data2.fileUploads = wrap.find(".w-file-upload");
            data2.fileUploads.each(function(j) {
              initFileUpload(j, data2);
            });
            var formName = data2.form.attr("aria-label") || data2.form.attr("data-name") || "Form";
            if (!data2.done.attr("aria-label")) {
              data2.form.attr("aria-label", formName);
            }
            data2.done.attr("tabindex", "-1");
            data2.done.attr("role", "region");
            if (!data2.done.attr("aria-label")) {
              data2.done.attr("aria-label", formName + " success");
            }
            data2.fail.attr("tabindex", "-1");
            data2.fail.attr("role", "region");
            if (!data2.fail.attr("aria-label")) {
              data2.fail.attr("aria-label", formName + " failure");
            }
            var action = data2.action = $el.attr("action");
            data2.handler = null;
            data2.redirect = $el.attr("data-redirect");
            if (chimpRegex.test(action)) {
              data2.handler = submitMailChimp;
              return;
            }
            if (action) {
              return;
            }
            if (siteId) {
              data2.handler = false ? exportedSubmitWebflow : (() => {
                const hostedSubmitHandler = require_webflow_forms_hosted().default;
                return hostedSubmitHandler(reset, loc, Webflow, collectEnterpriseTrackingCookies, preventDefault, findFields, alert, findFileUploads, disableBtn, siteId, afterSubmit, $, formUrl);
              })();
              return;
            }
            disconnected();
          }
          function addListeners() {
            listening = true;
            $doc.on("submit", namespace + " form", function(evt) {
              var data2 = $.data(this, namespace);
              if (data2.handler) {
                data2.evt = evt;
                data2.handler(data2);
              }
            });
            const CHECKBOX_CLASS_NAME = ".w-checkbox-input";
            const RADIO_INPUT_CLASS_NAME = ".w-radio-input";
            const CHECKED_CLASS = "w--redirected-checked";
            const FOCUSED_CLASS = "w--redirected-focus";
            const FOCUSED_VISIBLE_CLASS = "w--redirected-focus-visible";
            const focusVisibleSelectors = ":focus-visible, [data-wf-focus-visible]";
            const CUSTOM_CONTROLS = [["checkbox", CHECKBOX_CLASS_NAME], ["radio", RADIO_INPUT_CLASS_NAME]];
            $doc.on("change", namespace + ` form input[type="checkbox"]:not(` + CHECKBOX_CLASS_NAME + ")", (evt) => {
              $(evt.target).siblings(CHECKBOX_CLASS_NAME).toggleClass(CHECKED_CLASS);
            });
            $doc.on("change", namespace + ` form input[type="radio"]`, (evt) => {
              $(`input[name="${evt.target.name}"]:not(${CHECKBOX_CLASS_NAME})`).map((i, el) => $(el).siblings(RADIO_INPUT_CLASS_NAME).removeClass(CHECKED_CLASS));
              const $target = $(evt.target);
              if (!$target.hasClass("w-radio-input")) {
                $target.siblings(RADIO_INPUT_CLASS_NAME).addClass(CHECKED_CLASS);
              }
            });
            CUSTOM_CONTROLS.forEach(([controlType, customControlClassName]) => {
              $doc.on("focus", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
                $(evt.target).siblings(customControlClassName).addClass(FOCUSED_CLASS);
                $(evt.target).filter(focusVisibleSelectors).siblings(customControlClassName).addClass(FOCUSED_VISIBLE_CLASS);
              });
              $doc.on("blur", namespace + ` form input[type="${controlType}"]:not(` + customControlClassName + ")", (evt) => {
                $(evt.target).siblings(customControlClassName).removeClass(`${FOCUSED_CLASS} ${FOCUSED_VISIBLE_CLASS}`);
              });
            });
          }
          function reset(data2) {
            var btn = data2.btn = data2.form.find(':input[type="submit"]');
            data2.wait = data2.btn.attr("data-wait") || null;
            data2.success = false;
            btn.prop("disabled", false);
            data2.label && btn.val(data2.label);
          }
          function disableBtn(data2) {
            var btn = data2.btn;
            var wait = data2.wait;
            btn.prop("disabled", true);
            if (wait) {
              data2.label = btn.val();
              btn.val(wait);
            }
          }
          function findFields(form, result) {
            var status = null;
            result = result || {};
            form.find(':input:not([type="submit"]):not([type="file"])').each(function(i, el) {
              var field = $(el);
              var type = field.attr("type");
              var name2 = field.attr("data-name") || field.attr("name") || "Field " + (i + 1);
              var value2 = field.val();
              if (type === "checkbox") {
                value2 = field.is(":checked");
              } else if (type === "radio") {
                if (result[name2] === null || typeof result[name2] === "string") {
                  return;
                }
                value2 = form.find('input[name="' + field.attr("name") + '"]:checked').val() || null;
              }
              if (typeof value2 === "string") {
                value2 = $.trim(value2);
              }
              result[name2] = value2;
              status = status || getStatus(field, type, name2, value2);
            });
            return status;
          }
          function findFileUploads(form) {
            var result = {};
            form.find(':input[type="file"]').each(function(i, el) {
              var field = $(el);
              var name2 = field.attr("data-name") || field.attr("name") || "File " + (i + 1);
              var value2 = field.attr("data-value");
              if (typeof value2 === "string") {
                value2 = $.trim(value2);
              }
              result[name2] = value2;
            });
            return result;
          }
          const trackingCookieNameMap = {
            _mkto_trk: "marketo"
            // __hstc: 'hubspot',
          };
          function collectEnterpriseTrackingCookies() {
            const cookies = document.cookie.split("; ").reduce(function(acc, cookie) {
              const splitCookie = cookie.split("=");
              const name2 = splitCookie[0];
              if (name2 in trackingCookieNameMap) {
                const mappedName = trackingCookieNameMap[name2];
                const value2 = splitCookie.slice(1).join("=");
                acc[mappedName] = value2;
              }
              return acc;
            }, {});
            return cookies;
          }
          function getStatus(field, type, name2, value2) {
            var status = null;
            if (type === "password") {
              status = "Passwords cannot be submitted.";
            } else if (field.attr("required")) {
              if (!value2) {
                status = "Please fill out the required field: " + name2;
              } else if (emailField.test(field.attr("type"))) {
                if (!emailValue.test(value2)) {
                  status = "Please enter a valid email address for: " + name2;
                }
              }
            } else if (name2 === "g-recaptcha-response" && !value2) {
              status = "Please confirm you\u2019re not a robot.";
            }
            return status;
          }
          function exportedSubmitWebflow(data2) {
            preventDefault(data2);
            afterSubmit(data2);
          }
          function submitMailChimp(data2) {
            reset(data2);
            var form = data2.form;
            var payload = {};
            if (/^https/.test(loc.href) && !/^https/.test(data2.action)) {
              form.attr("method", "post");
              return;
            }
            preventDefault(data2);
            var status = findFields(form, payload);
            if (status) {
              return alert(status);
            }
            disableBtn(data2);
            var fullName;
            _.each(payload, function(value2, key2) {
              if (emailField.test(key2)) {
                payload.EMAIL = value2;
              }
              if (/^((full[ _-]?)?name)$/i.test(key2)) {
                fullName = value2;
              }
              if (/^(first[ _-]?name)$/i.test(key2)) {
                payload.FNAME = value2;
              }
              if (/^(last[ _-]?name)$/i.test(key2)) {
                payload.LNAME = value2;
              }
            });
            if (fullName && !payload.FNAME) {
              fullName = fullName.split(" ");
              payload.FNAME = fullName[0];
              payload.LNAME = payload.LNAME || fullName[1];
            }
            var url = data2.action.replace("/post?", "/post-json?") + "&c=?";
            var userId = url.indexOf("u=") + 2;
            userId = url.substring(userId, url.indexOf("&", userId));
            var listId = url.indexOf("id=") + 3;
            listId = url.substring(listId, url.indexOf("&", listId));
            payload["b_" + userId + "_" + listId] = "";
            $.ajax({
              url,
              data: payload,
              dataType: "jsonp"
            }).done(function(resp) {
              data2.success = resp.result === "success" || /already/.test(resp.msg);
              if (!data2.success) {
                console.info("MailChimp error: " + resp.msg);
              }
              afterSubmit(data2);
            }).fail(function() {
              afterSubmit(data2);
            });
          }
          function afterSubmit(data2) {
            var form = data2.form;
            var redirect = data2.redirect;
            var success = data2.success;
            if (success && redirect) {
              Webflow.location(redirect);
              return;
            }
            data2.done.toggle(success);
            data2.fail.toggle(!success);
            if (success) {
              data2.done.focus();
            } else {
              data2.fail.focus();
            }
            form.toggle(!success);
            reset(data2);
          }
          function preventDefault(data2) {
            data2.evt && data2.evt.preventDefault();
            data2.evt = null;
          }
          function initFileUpload(i, form) {
            if (!form.fileUploads || !form.fileUploads[i]) {
              return;
            }
            var file;
            var $el = $(form.fileUploads[i]);
            var $defaultWrap = $el.find("> .w-file-upload-default");
            var $uploadingWrap = $el.find("> .w-file-upload-uploading");
            var $successWrap = $el.find("> .w-file-upload-success");
            var $errorWrap = $el.find("> .w-file-upload-error");
            var $input = $defaultWrap.find(".w-file-upload-input");
            var $label = $defaultWrap.find(".w-file-upload-label");
            var $labelChildren = $label.children();
            var $errorMsgEl = $errorWrap.find(".w-file-upload-error-msg");
            var $fileEl = $successWrap.find(".w-file-upload-file");
            var $removeEl = $successWrap.find(".w-file-remove-link");
            var $fileNameEl = $fileEl.find(".w-file-upload-file-name");
            var sizeErrMsg = $errorMsgEl.attr("data-w-size-error");
            var typeErrMsg = $errorMsgEl.attr("data-w-type-error");
            var genericErrMsg = $errorMsgEl.attr("data-w-generic-error");
            if (!inApp) {
              $label.on("click keydown", function(e) {
                if (e.type === "keydown" && e.which !== 13 && e.which !== 32) {
                  return;
                }
                e.preventDefault();
                $input.click();
              });
            }
            $label.find(".w-icon-file-upload-icon").attr("aria-hidden", "true");
            $removeEl.find(".w-icon-file-upload-remove").attr("aria-hidden", "true");
            if (!inApp) {
              $removeEl.on("click keydown", function(e) {
                if (e.type === "keydown") {
                  if (e.which !== 13 && e.which !== 32) {
                    return;
                  }
                  e.preventDefault();
                }
                $input.removeAttr("data-value");
                $input.val("");
                $fileNameEl.html("");
                $defaultWrap.toggle(true);
                $successWrap.toggle(false);
                $label.focus();
              });
              $input.on("change", function(e) {
                file = e.target && e.target.files && e.target.files[0];
                if (!file) {
                  return;
                }
                $defaultWrap.toggle(false);
                $errorWrap.toggle(false);
                $uploadingWrap.toggle(true);
                $uploadingWrap.focus();
                $fileNameEl.text(file.name);
                if (!isUploading()) {
                  disableBtn(form);
                }
                form.fileUploads[i].uploading = true;
                signFile(file, afterSign);
              });
              var height2 = $label.outerHeight();
              $input.height(height2);
              $input.width(1);
            } else {
              $input.on("click", function(e) {
                e.preventDefault();
              });
              $label.on("click", function(e) {
                e.preventDefault();
              });
              $labelChildren.on("click", function(e) {
                e.preventDefault();
              });
            }
            function parseError(err) {
              var errorMsg = err.responseJSON && err.responseJSON.msg;
              var userError = genericErrMsg;
              if (typeof errorMsg === "string" && errorMsg.indexOf("InvalidFileTypeError") === 0) {
                userError = typeErrMsg;
              } else if (typeof errorMsg === "string" && errorMsg.indexOf("MaxFileSizeError") === 0) {
                userError = sizeErrMsg;
              }
              $errorMsgEl.text(userError);
              $input.removeAttr("data-value");
              $input.val("");
              $uploadingWrap.toggle(false);
              $defaultWrap.toggle(true);
              $errorWrap.toggle(true);
              $errorWrap.focus();
              form.fileUploads[i].uploading = false;
              if (!isUploading()) {
                reset(form);
              }
            }
            function afterSign(err, data2) {
              if (err) {
                return parseError(err);
              }
              var fileName = data2.fileName;
              var postData = data2.postData;
              var fileId = data2.fileId;
              var s3Url = data2.s3Url;
              $input.attr("data-value", fileId);
              uploadS3(s3Url, postData, file, fileName, afterUpload);
            }
            function afterUpload(err) {
              if (err) {
                return parseError(err);
              }
              $uploadingWrap.toggle(false);
              $successWrap.css("display", "inline-block");
              $successWrap.focus();
              form.fileUploads[i].uploading = false;
              if (!isUploading()) {
                reset(form);
              }
            }
            function isUploading() {
              var uploads = form.fileUploads && form.fileUploads.toArray() || [];
              return uploads.some(function(value2) {
                return value2.uploading;
              });
            }
          }
          function signFile(file, cb) {
            var payload = new URLSearchParams({
              name: file.name,
              size: file.size
            });
            $.ajax({
              type: "GET",
              url: `${signFileUrl}?${payload}`,
              crossDomain: true
            }).done(function(data2) {
              cb(null, data2);
            }).fail(function(err) {
              cb(err);
            });
          }
          function uploadS3(url, data2, file, fileName, cb) {
            var formData = new FormData();
            for (var k in data2) {
              formData.append(k, data2[k]);
            }
            formData.append("file", file, fileName);
            $.ajax({
              type: "POST",
              url,
              data: formData,
              processData: false,
              contentType: false
            }).done(function() {
              cb(null);
            }).fail(function(err) {
              cb(err);
            });
          }
          return api;
        });
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-ix-events.js
    var require_webflow_ix_events = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-ix-events.js"(exports2, module2) {
        "use strict";
        var $ = window.jQuery;
        var api = {};
        var eventQueue = [];
        var namespace = ".w-ix";
        var eventTriggers = {
          reset: function(i, el) {
            el.__wf_intro = null;
          },
          intro: function(i, el) {
            if (el.__wf_intro) {
              return;
            }
            el.__wf_intro = true;
            $(el).triggerHandler(api.types.INTRO);
          },
          outro: function(i, el) {
            if (!el.__wf_intro) {
              return;
            }
            el.__wf_intro = null;
            $(el).triggerHandler(api.types.OUTRO);
          }
        };
        api.triggers = {};
        api.types = {
          INTRO: "w-ix-intro" + namespace,
          OUTRO: "w-ix-outro" + namespace
        };
        api.init = function() {
          var count = eventQueue.length;
          for (var i = 0; i < count; i++) {
            var memo = eventQueue[i];
            memo[0](0, memo[1]);
          }
          eventQueue = [];
          $.extend(api.triggers, eventTriggers);
        };
        api.async = function() {
          for (var key2 in eventTriggers) {
            var func = eventTriggers[key2];
            if (!eventTriggers.hasOwnProperty(key2)) {
              continue;
            }
            api.triggers[key2] = function(i, el) {
              eventQueue.push([func, el]);
            };
          }
        };
        api.async();
        module2.exports = api;
      }
    });
  
    // shared/render/plugins/BaseSiteModules/webflow-ix2-events.js
    var require_webflow_ix2_events = __commonJS({
      "shared/render/plugins/BaseSiteModules/webflow-ix2-events.js"(exports2, module2) {
        "use strict";
        var IXEvents = require_webflow_ix_events();
        function dispatchCustomEvent(element, eventName) {
          var event = document.createEvent("CustomEvent");
          event.initCustomEvent(eventName, true, true, null);
          element.dispatchEvent(event);
        }
        var $ = window.jQuery;
        var api = {};
        var namespace = ".w-ix";
        var eventTriggers = {
          reset: function(i, el) {
            IXEvents.triggers.reset(i, el);
          },
          intro: function(i, el) {
            IXEvents.triggers.intro(i, el);
            dispatchCustomEvent(el, "COMPONENT_ACTIVE");
          },
          outro: function(i, el) {
            IXEvents.triggers.outro(i, el);
            dispatchCustomEvent(el, "COMPONENT_INACTIVE");
          }
        };
        api.triggers = {};
        api.types = {
          INTRO: "w-ix-intro" + namespace,
          OUTRO: "w-ix-outro" + namespace
        };
        $.extend(api.triggers, eventTriggers);
        module2.exports = api;
      }
    });
  
    // shared/render/plugins/Navbar/webflow-navbar.js
    var require_webflow_navbar = __commonJS({
      "shared/render/plugins/Navbar/webflow-navbar.js"(exports2, module2) {
        var Webflow = require_webflow_lib();
        var IXEvents = require_webflow_ix2_events();
        var KEY_CODES = {
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          ESCAPE: 27,
          SPACE: 32,
          ENTER: 13,
          HOME: 36,
          END: 35
        };
        Webflow.define("navbar", module2.exports = function($, _) {
          var api = {};
          var tram = $.tram;
          var $win = $(window);
          var $doc = $(document);
          var debounce = _.debounce;
          var $body;
          var $navbars;
          var designer;
          var inEditor;
          var inApp = Webflow.env();
          var overlay = '<div class="w-nav-overlay" data-wf-ignore />';
          var namespace = ".w-nav";
          var navbarOpenedButton = "w--open";
          var navbarOpenedDropdown = "w--nav-dropdown-open";
          var navbarOpenedDropdownToggle = "w--nav-dropdown-toggle-open";
          var navbarOpenedDropdownList = "w--nav-dropdown-list-open";
          var navbarOpenedLink = "w--nav-link-open";
          var ix = IXEvents.triggers;
          var menuSibling = $();
          api.ready = api.design = api.preview = init;
          api.destroy = function() {
            menuSibling = $();
            removeListeners();
            if ($navbars && $navbars.length) {
              $navbars.each(teardown);
            }
          };
          function init() {
            designer = inApp && Webflow.env("design");
            inEditor = Webflow.env("editor");
            $body = $(document.body);
            $navbars = $doc.find(namespace);
            if (!$navbars.length) {
              return;
            }
            $navbars.each(build);
            removeListeners();
            addListeners();
          }
          function removeListeners() {
            Webflow.resize.off(resizeAll);
          }
          function addListeners() {
            Webflow.resize.on(resizeAll);
          }
          function resizeAll() {
            $navbars.each(resize);
          }
          function build(i, el) {
            var $el = $(el);
            var data2 = $.data(el, namespace);
            if (!data2) {
              data2 = $.data(el, namespace, {
                open: false,
                el: $el,
                config: {},
                selectedIdx: -1
              });
            }
            data2.menu = $el.find(".w-nav-menu");
            data2.links = data2.menu.find(".w-nav-link");
            data2.dropdowns = data2.menu.find(".w-dropdown");
            data2.dropdownToggle = data2.menu.find(".w-dropdown-toggle");
            data2.dropdownList = data2.menu.find(".w-dropdown-list");
            data2.button = $el.find(".w-nav-button");
            data2.container = $el.find(".w-container");
            data2.overlayContainerId = "w-nav-overlay-" + i;
            data2.outside = outside(data2);
            var navBrandLink = $el.find(".w-nav-brand");
            if (navBrandLink && navBrandLink.attr("href") === "/" && navBrandLink.attr("aria-label") == null) {
              navBrandLink.attr("aria-label", "home");
            }
            data2.button.attr("style", "-webkit-user-select: text;");
            if (data2.button.attr("aria-label") == null) {
              data2.button.attr("aria-label", "menu");
            }
            data2.button.attr("role", "button");
            data2.button.attr("tabindex", "0");
            data2.button.attr("aria-controls", data2.overlayContainerId);
            data2.button.attr("aria-haspopup", "menu");
            data2.button.attr("aria-expanded", "false");
            data2.el.off(namespace);
            data2.button.off(namespace);
            data2.menu.off(namespace);
            configure(data2);
            if (designer) {
              removeOverlay(data2);
              data2.el.on("setting" + namespace, handler(data2));
            } else {
              addOverlay(data2);
              data2.button.on("click" + namespace, toggle(data2));
              data2.menu.on("click" + namespace, "a", navigate(data2));
              data2.button.on("keydown" + namespace, makeToggleButtonKeyboardHandler(data2));
              data2.el.on("keydown" + namespace, makeLinksKeyboardHandler(data2));
            }
            resize(i, el);
          }
          function teardown(i, el) {
            var data2 = $.data(el, namespace);
            if (data2) {
              removeOverlay(data2);
              $.removeData(el, namespace);
            }
          }
          function removeOverlay(data2) {
            if (!data2.overlay) {
              return;
            }
            close(data2, true);
            data2.overlay.remove();
            data2.overlay = null;
          }
          function addOverlay(data2) {
            if (data2.overlay) {
              return;
            }
            data2.overlay = $(overlay).appendTo(data2.el);
            data2.overlay.attr("id", data2.overlayContainerId);
            data2.parent = data2.menu.parent();
            close(data2, true);
          }
          function configure(data2) {
            var config = {};
            var old = data2.config || {};
            var animation = config.animation = data2.el.attr("data-animation") || "default";
            config.animOver = /^over/.test(animation);
            config.animDirect = /left$/.test(animation) ? -1 : 1;
            if (old.animation !== animation) {
              data2.open && _.defer(reopen, data2);
            }
            config.easing = data2.el.attr("data-easing") || "ease";
            config.easing2 = data2.el.attr("data-easing2") || "ease";
            var duration = data2.el.attr("data-duration");
            config.duration = duration != null ? Number(duration) : 400;
            config.docHeight = data2.el.attr("data-doc-height");
            data2.config = config;
          }
          function handler(data2) {
            return function(evt, options) {
              options = options || {};
              var winWidth = $win.width();
              configure(data2);
              options.open === true && open(data2, true);
              options.open === false && close(data2, true);
              data2.open && _.defer(function() {
                if (winWidth !== $win.width()) {
                  reopen(data2);
                }
              });
            };
          }
          function makeToggleButtonKeyboardHandler(data2) {
            return function(evt) {
              switch (evt.keyCode) {
                case KEY_CODES.SPACE:
                case KEY_CODES.ENTER: {
                  toggle(data2)();
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ESCAPE: {
                  close(data2);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN:
                case KEY_CODES.HOME:
                case KEY_CODES.END: {
                  if (!data2.open) {
                    evt.preventDefault();
                    return evt.stopPropagation();
                  }
                  if (evt.keyCode === KEY_CODES.END) {
                    data2.selectedIdx = data2.links.length - 1;
                  } else {
                    data2.selectedIdx = 0;
                  }
                  focusSelectedLink(data2);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
              }
            };
          }
          function makeLinksKeyboardHandler(data2) {
            return function(evt) {
              if (!data2.open) {
                return;
              }
              data2.selectedIdx = data2.links.index(document.activeElement);
              switch (evt.keyCode) {
                case KEY_CODES.HOME:
                case KEY_CODES.END: {
                  if (evt.keyCode === KEY_CODES.END) {
                    data2.selectedIdx = data2.links.length - 1;
                  } else {
                    data2.selectedIdx = 0;
                  }
                  focusSelectedLink(data2);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ESCAPE: {
                  close(data2);
                  data2.button.focus();
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_LEFT:
                case KEY_CODES.ARROW_UP: {
                  data2.selectedIdx = Math.max(-1, data2.selectedIdx - 1);
                  focusSelectedLink(data2);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
                case KEY_CODES.ARROW_RIGHT:
                case KEY_CODES.ARROW_DOWN: {
                  data2.selectedIdx = Math.min(data2.links.length - 1, data2.selectedIdx + 1);
                  focusSelectedLink(data2);
                  evt.preventDefault();
                  return evt.stopPropagation();
                }
              }
            };
          }
          function focusSelectedLink(data2) {
            if (data2.links[data2.selectedIdx]) {
              var selectedElement = data2.links[data2.selectedIdx];
              selectedElement.focus();
              navigate(selectedElement);
            }
          }
          function reopen(data2) {
            if (!data2.open) {
              return;
            }
            close(data2, true);
            open(data2, true);
          }
          function toggle(data2) {
            return debounce(function() {
              data2.open ? close(data2) : open(data2);
            });
          }
          function navigate(data2) {
            return function(evt) {
              var link = $(this);
              var href = link.attr("href");
              if (!Webflow.validClick(evt.currentTarget)) {
                evt.preventDefault();
                return;
              }
              if (href && href.indexOf("#") === 0 && data2.open) {
                close(data2);
              }
            };
          }
          function outside(data2) {
            if (data2.outside) {
              $doc.off("click" + namespace, data2.outside);
            }
            return function(evt) {
              var $target = $(evt.target);
              if (inEditor && $target.closest(".w-editor-bem-EditorOverlay").length) {
                return;
              }
              outsideDebounced(data2, $target);
            };
          }
          var outsideDebounced = debounce(function(data2, $target) {
            if (!data2.open) {
              return;
            }
            var menu = $target.closest(".w-nav-menu");
            if (!data2.menu.is(menu)) {
              close(data2);
            }
          });
          function resize(i, el) {
            var data2 = $.data(el, namespace);
            var collapsed = data2.collapsed = data2.button.css("display") !== "none";
            if (data2.open && !collapsed && !designer) {
              close(data2, true);
            }
            if (data2.container.length) {
              var updateEachMax = updateMax(data2);
              data2.links.each(updateEachMax);
              data2.dropdowns.each(updateEachMax);
            }
            if (data2.open) {
              setOverlayHeight(data2);
            }
          }
          var maxWidth = "max-width";
          function updateMax(data2) {
            var containMax = data2.container.css(maxWidth);
            if (containMax === "none") {
              containMax = "";
            }
            return function(i, link) {
              link = $(link);
              link.css(maxWidth, "");
              if (link.css(maxWidth) === "none") {
                link.css(maxWidth, containMax);
              }
            };
          }
          function addMenuOpen(i, el) {
            el.setAttribute("data-nav-menu-open", "");
          }
          function removeMenuOpen(i, el) {
            el.removeAttribute("data-nav-menu-open");
          }
          function open(data2, immediate) {
            if (data2.open) {
              return;
            }
            data2.open = true;
            data2.menu.each(addMenuOpen);
            data2.links.addClass(navbarOpenedLink);
            data2.dropdowns.addClass(navbarOpenedDropdown);
            data2.dropdownToggle.addClass(navbarOpenedDropdownToggle);
            data2.dropdownList.addClass(navbarOpenedDropdownList);
            data2.button.addClass(navbarOpenedButton);
            var config = data2.config;
            var animation = config.animation;
            if (animation === "none" || !tram.support.transform || config.duration <= 0) {
              immediate = true;
            }
            var bodyHeight = setOverlayHeight(data2);
            var menuHeight = data2.menu.outerHeight(true);
            var menuWidth = data2.menu.outerWidth(true);
            var navHeight = data2.el.height();
            var navbarEl = data2.el[0];
            resize(0, navbarEl);
            ix.intro(0, navbarEl);
            Webflow.redraw.up();
            if (!designer) {
              $doc.on("click" + namespace, data2.outside);
            }
            if (immediate) {
              complete();
              return;
            }
            var transConfig = "transform " + config.duration + "ms " + config.easing;
            if (data2.overlay) {
              menuSibling = data2.menu.prev();
              data2.overlay.show().append(data2.menu);
            }
            if (config.animOver) {
              tram(data2.menu).add(transConfig).set({
                x: config.animDirect * menuWidth,
                height: bodyHeight
              }).start({
                x: 0
              }).then(complete);
              data2.overlay && data2.overlay.width(menuWidth);
              return;
            }
            var offsetY = navHeight + menuHeight;
            tram(data2.menu).add(transConfig).set({
              y: -offsetY
            }).start({
              y: 0
            }).then(complete);
            function complete() {
              data2.button.attr("aria-expanded", "true");
            }
          }
          function setOverlayHeight(data2) {
            var config = data2.config;
            var bodyHeight = config.docHeight ? $doc.height() : $body.height();
            if (config.animOver) {
              data2.menu.height(bodyHeight);
            } else if (data2.el.css("position") !== "fixed") {
              bodyHeight -= data2.el.outerHeight(true);
            }
            data2.overlay && data2.overlay.height(bodyHeight);
            return bodyHeight;
          }
          function close(data2, immediate) {
            if (!data2.open) {
              return;
            }
            data2.open = false;
            data2.button.removeClass(navbarOpenedButton);
            var config = data2.config;
            if (config.animation === "none" || !tram.support.transform || config.duration <= 0) {
              immediate = true;
            }
            ix.outro(0, data2.el[0]);
            $doc.off("click" + namespace, data2.outside);
            if (immediate) {
              tram(data2.menu).stop();
              complete();
              return;
            }
            var transConfig = "transform " + config.duration + "ms " + config.easing2;
            var menuHeight = data2.menu.outerHeight(true);
            var menuWidth = data2.menu.outerWidth(true);
            var navHeight = data2.el.height();
            if (config.animOver) {
              tram(data2.menu).add(transConfig).start({
                x: menuWidth * config.animDirect
              }).then(complete);
              return;
            }
            var offsetY = navHeight + menuHeight;
            tram(data2.menu).add(transConfig).start({
              y: -offsetY
            }).then(complete);
            function complete() {
              data2.menu.height("");
              tram(data2.menu).set({
                x: 0,
                y: 0
              });
              data2.menu.each(removeMenuOpen);
              data2.links.removeClass(navbarOpenedLink);
              data2.dropdowns.removeClass(navbarOpenedDropdown);
              data2.dropdownToggle.removeClass(navbarOpenedDropdownToggle);
              data2.dropdownList.removeClass(navbarOpenedDropdownList);
              if (data2.overlay && data2.overlay.children().length) {
                menuSibling.length ? data2.menu.insertAfter(menuSibling) : data2.menu.prependTo(data2.parent);
                data2.overlay.attr("style", "").hide();
              }
              data2.el.triggerHandler("w-close");
              data2.button.attr("aria-expanded", "false");
            }
          }
          return api;
        });
      }
    });
  
    // <stdin>
    require_webflow_lottie();
    require_webflow_brand();
    require_webflow_edit();
    require_webflow_focus_visible();
    require_webflow_focus();
    require_webflow_links();
    require_webflow_scroll();
    require_webflow_touch();
    require_webflow_forms();
    require_webflow_navbar();
  })();
  

// Check if the screen width is below a certain threshold (e.g., for mobile devices)
if (window.innerWidth <= 768) {
  // Redirect to the mobile version of the website
  window.location.href = 'error.html';
}