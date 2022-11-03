(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [406],
  {
    9940: function (e, r, t) {
      "use strict";
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var r = 1; r < arguments.length; r++) {
                  var t = arguments[r];
                  for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      function n(e) {
        if (e < 1) return { get: function () {}, set: function () {} };
        var r = 0,
          t = new Map(),
          o = new Map();
        function n(n, a) {
          t.set(n, a), ++r > e && ((r = 0), (o = t), (t = new Map()));
        }
        return {
          get: function (e) {
            var r = t.get(e);
            return void 0 !== r
              ? r
              : void 0 !== (r = o.get(e))
              ? (n(e, r), r)
              : void 0;
          },
          set: function (e, r) {
            t.has(e) ? t.set(e, r) : n(e, r);
          },
        };
      }
      t.d(r, {
        m: function () {
          return O;
        },
      });
      t(8559);
      function a(e) {
        var r = (function (e) {
          var r = e.theme,
            t = e.prefix,
            o = { nextPart: new Map(), validators: [] };
          return (
            u(Object.entries(e.classGroups), t).forEach(function (e) {
              var t = e[0];
              s(e[1], o, t, r);
            }),
            o
          );
        })(e);
        return {
          getClassGroupId: function (e) {
            var t = e.split("-");
            return (
              "" === t[0] && 1 !== t.length && t.shift(),
              l(t, r) ||
                (function (e) {
                  if (i.test(e)) {
                    var r = i.exec(e)[1],
                      t = null == r ? void 0 : r.substring(0, r.indexOf(":"));
                    if (t) return "arbitrary.." + t;
                  }
                })(e)
            );
          },
          getConflictingClassGroupIds: function (r) {
            return e.conflictingClassGroups[r] || [];
          },
        };
      }
      function l(e, r) {
        var t;
        if (0 === e.length) return r.classGroupId;
        var o = e[0],
          n = r.nextPart.get(o),
          a = n ? l(e.slice(1), n) : void 0;
        if (a) return a;
        if (0 !== r.validators.length) {
          var i = e.join("-");
          return null ==
            (t = r.validators.find(function (e) {
              return (0, e.validator)(i);
            }))
            ? void 0
            : t.classGroupId;
        }
      }
      var i = /^\[(.+)\]$/;
      function s(e, r, t, o) {
        e.forEach(function (e) {
          if ("string" != typeof e) {
            if ("function" == typeof e)
              return e.isThemeGetter
                ? void s(e(o), r, t, o)
                : void r.validators.push({ validator: e, classGroupId: t });
            Object.entries(e).forEach(function (e) {
              var n = e[0];
              s(e[1], c(r, n), t, o);
            });
          } else {
            ("" === e ? r : c(r, e)).classGroupId = t;
          }
        });
      }
      function c(e, r) {
        var t = e;
        return (
          r.split("-").forEach(function (e) {
            t.nextPart.has(e) ||
              t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (t = t.nextPart.get(e));
          }),
          t
        );
      }
      function u(e, r) {
        return r
          ? e.map(function (e) {
              return [
                e[0],
                e[1].map(function (e) {
                  return "string" == typeof e
                    ? r + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(function (e) {
                          var t = e[0],
                            o = e[1];
                          return [r + t, o];
                        })
                      )
                    : e;
                }),
              ];
            })
          : e;
      }
      function d(e) {
        return o({ cache: n(e.cacheSize) }, a(e));
      }
      var f = /\s+/;
      function p(e, r) {
        var t = r.getClassGroupId,
          o = r.getConflictingClassGroupIds,
          n = new Set();
        return e
          .trim()
          .split(f)
          .map(function (e) {
            var r = (function (e) {
                var r,
                  t = [],
                  o = 0,
                  n = 0;
                for (; (r = b.exec(e)); )
                  if (":" === r[0]) {
                    if (0 === o) {
                      var a = r.index + 1;
                      t.push(e.substring(n, a)), (n = a);
                    }
                  } else "[" === r[0] ? o++ : "]" === r[0] && o--;
                var l = 0 === t.length ? e : e.substring(n),
                  i = l.startsWith("!"),
                  s = i ? l.substring(1) : l;
                return {
                  modifiers: t,
                  hasImportantModifier: i,
                  baseClassName: s,
                };
              })(e),
              o = r.modifiers,
              n = r.hasImportantModifier,
              a = r.baseClassName,
              l = t(a);
            if (!l) return { isTailwindClass: !1, originalClassName: e };
            var i = (function (e) {
              if (e.length <= 1) return e;
              var r = [],
                t = [];
              return (
                e.forEach(function (e) {
                  "[" === e[0]
                    ? (r.push.apply(r, t.sort().concat([e])), (t = []))
                    : t.push(e);
                }),
                r.push.apply(r, t.sort()),
                r
              );
            })(o).join("");
            return {
              isTailwindClass: !0,
              modifierId: n ? i + "!" : i,
              classGroupId: l,
              originalClassName: e,
            };
          })
          .reverse()
          .filter(function (e) {
            if (!e.isTailwindClass) return !0;
            var r = e.modifierId,
              t = e.classGroupId,
              a = r + t;
            return (
              !n.has(a) &&
              (n.add(a),
              o(t).forEach(function (e) {
                return n.add(r + e);
              }),
              !0)
            );
          })
          .reverse()
          .map(function (e) {
            return e.originalClassName;
          })
          .join(" ");
      }
      var b = /[:[\]]/g;
      function m() {
        for (var e, r, t = 0, o = ""; t < arguments.length; )
          (e = arguments[t++]) && (r = g(e)) && (o && (o += " "), (o += r));
        return o;
      }
      function g(e) {
        if ("string" == typeof e) return e;
        for (var r, t = "", o = 0; o < e.length; o++)
          e[o] && (r = g(e[o])) && (t && (t += " "), (t += r));
        return t;
      }
      function v() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        var o,
          n,
          a,
          l = i;
        function i(e) {
          var t = r[0],
            i = r.slice(1).reduce(function (e, r) {
              return r(e);
            }, t());
          return (
            (o = d(i)), (n = o.cache.get), (a = o.cache.set), (l = s), s(e)
          );
        }
        function s(e) {
          var r = n(e);
          if (r) return r;
          var t = p(e, o);
          return a(e, t), t;
        }
        return function () {
          return l(m.apply(null, arguments));
        };
      }
      function h(e) {
        var r = function (r) {
          return r[e] || [];
        };
        return (r.isThemeGetter = !0), r;
      }
      var x = /^\[(.+)\]$/,
        w = /^\d+\/\d+$/,
        y = new Set(["px", "full", "screen"]),
        C = /^(\d+)?(xs|sm|md|lg|xl)$/,
        H =
          /\d+(%|px|em|rem|vh|vw|pt|pc|in|cm|mm|cap|ch|ex|lh|rlh|vi|vb|vmin|vmax)/,
        V = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function L(e) {
        return !Number.isNaN(Number(e)) || y.has(e) || w.test(e) || M(e);
      }
      function M(e) {
        var r,
          t = null == (r = x.exec(e)) ? void 0 : r[1];
        return !!t && (t.startsWith("length:") || H.test(t));
      }
      function k(e) {
        var r,
          t = null == (r = x.exec(e)) ? void 0 : r[1];
        return !!t && t.startsWith("size:");
      }
      function E(e) {
        var r,
          t = null == (r = x.exec(e)) ? void 0 : r[1];
        return !!t && t.startsWith("position:");
      }
      function A(e) {
        var r,
          t = null == (r = x.exec(e)) ? void 0 : r[1];
        return !!t && (t.startsWith("url(") || t.startsWith("url:"));
      }
      function N(e) {
        var r,
          t = null == (r = x.exec(e)) ? void 0 : r[1];
        return !!t && (!Number.isNaN(Number(t)) || t.startsWith("number:"));
      }
      function z(e) {
        var r,
          t = null == (r = x.exec(e)) ? void 0 : r[1];
        return t ? Number.isInteger(Number(t)) : Number.isInteger(Number(e));
      }
      function j(e) {
        return x.test(e);
      }
      function Z() {
        return !0;
      }
      function R(e) {
        return C.test(e);
      }
      function I(e) {
        var r,
          t = null == (r = x.exec(e)) ? void 0 : r[1];
        return !!t && V.test(t);
      }
      function P() {
        var e = h("colors"),
          r = h("spacing"),
          t = h("blur"),
          o = h("brightness"),
          n = h("borderColor"),
          a = h("borderRadius"),
          l = h("borderSpacing"),
          i = h("borderWidth"),
          s = h("contrast"),
          c = h("grayscale"),
          u = h("hueRotate"),
          d = h("invert"),
          f = h("gap"),
          p = h("gradientColorStops"),
          b = h("inset"),
          m = h("margin"),
          g = h("opacity"),
          v = h("padding"),
          x = h("saturate"),
          w = h("scale"),
          y = h("sepia"),
          C = h("skew"),
          H = h("space"),
          V = h("translate"),
          P = function () {
            return ["auto", r];
          },
          O = function () {
            return ["", L];
          },
          S = function () {
            return ["auto", z];
          },
          _ = function () {
            return ["", "0", j];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [Z],
            spacing: [L],
            blur: ["none", "", R, M],
            brightness: [z],
            borderColor: [e],
            borderRadius: ["none", "", "full", R, M],
            borderSpacing: [r],
            borderWidth: O(),
            contrast: [z],
            grayscale: _(),
            hueRotate: [z],
            invert: _(),
            gap: [r],
            gradientColorStops: [e],
            inset: P(),
            margin: P(),
            opacity: [z],
            padding: [r],
            saturate: [z],
            scale: [z],
            sepia: _(),
            skew: [z, j],
            space: [r],
            translate: [r],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", j] }],
            container: ["container"],
            columns: [{ columns: [R] }],
            "break-after": [
              {
                "break-after": [
                  "auto",
                  "avoid",
                  "all",
                  "avoid-page",
                  "page",
                  "left",
                  "right",
                  "column",
                ],
              },
            ],
            "break-before": [
              {
                "break-before": [
                  "auto",
                  "avoid",
                  "all",
                  "avoid-page",
                  "page",
                  "left",
                  "right",
                  "column",
                ],
              },
            ],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none"] }],
            clear: [{ clear: ["left", "right", "both", "none"] }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [
              {
                object: [].concat(
                  [
                    "bottom",
                    "center",
                    "left",
                    "left-bottom",
                    "left-top",
                    "right",
                    "right-bottom",
                    "right-top",
                    "top",
                  ],
                  [j]
                ),
              },
            ],
            overflow: [
              { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            "overflow-x": [
              { "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            "overflow-y": [
              { "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            overscroll: [{ overscroll: ["auto", "contain", "none"] }],
            "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
            "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [b] }],
            "inset-x": [{ "inset-x": [b] }],
            "inset-y": [{ "inset-y": [b] }],
            top: [{ top: [b] }],
            right: [{ right: [b] }],
            bottom: [{ bottom: [b] }],
            left: [{ left: [b] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [z] }],
            basis: [{ basis: [r] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", j] }],
            grow: [{ grow: _() }],
            shrink: [{ shrink: _() }],
            order: [{ order: ["first", "last", "none", z] }],
            "grid-cols": [{ "grid-cols": [Z] }],
            "col-start-end": [{ col: ["auto", { span: [z] }] }],
            "col-start": [{ "col-start": S() }],
            "col-end": [{ "col-end": S() }],
            "grid-rows": [{ "grid-rows": [Z] }],
            "row-start-end": [{ row: ["auto", { span: [z] }] }],
            "row-start": [{ "row-start": S() }],
            "row-end": [{ "row-end": S() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", j] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", j] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [
              {
                justify: [
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                ],
              },
            ],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [
              {
                content: [].concat(
                  ["start", "end", "center", "between", "around", "evenly"],
                  ["baseline"]
                ),
              },
            ],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [
              {
                "place-content": [].concat(
                  ["start", "end", "center", "between", "around", "evenly"],
                  ["baseline", "stretch"]
                ),
              },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [v] }],
            px: [{ px: [v] }],
            py: [{ py: [v] }],
            pt: [{ pt: [v] }],
            pr: [{ pr: [v] }],
            pb: [{ pb: [v] }],
            pl: [{ pl: [v] }],
            m: [{ m: [m] }],
            mx: [{ mx: [m] }],
            my: [{ my: [m] }],
            mt: [{ mt: [m] }],
            mr: [{ mr: [m] }],
            mb: [{ mb: [m] }],
            ml: [{ ml: [m] }],
            "space-x": [{ "space-x": [H] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [H] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{ w: ["auto", "min", "max", "fit", r] }],
            "min-w": [{ "min-w": ["min", "max", "fit", L] }],
            "max-w": [
              {
                "max-w": [
                  "0",
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [R] },
                  R,
                  M,
                ],
              },
            ],
            h: [{ h: [r, "auto", "min", "max", "fit"] }],
            "min-h": [{ "min-h": ["min", "max", "fit", L] }],
            "max-h": [{ "max-h": [r, "min", "max", "fit"] }],
            "font-size": [{ text: ["base", R, M] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  N,
                ],
              },
            ],
            "font-family": [{ font: [Z] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  M,
                ],
              },
            ],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  L,
                ],
              },
            ],
            "list-style-type": [{ list: ["none", "disc", "decimal", j] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [g] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [g] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [
              {
                decoration: [].concat(
                  ["solid", "dashed", "dotted", "double", "none"],
                  ["wavy"]
                ),
              },
            ],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", L] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", L] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{ indent: [r] }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  M,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            content: [{ content: ["none", j] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [g] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [
              {
                bg: [].concat(
                  [
                    "bottom",
                    "center",
                    "left",
                    "left-bottom",
                    "left-top",
                    "right",
                    "right-bottom",
                    "right-top",
                    "top",
                  ],
                  [E]
                ),
              },
            ],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", k] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  A,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [a] }],
            "rounded-t": [{ "rounded-t": [a] }],
            "rounded-r": [{ "rounded-r": [a] }],
            "rounded-b": [{ "rounded-b": [a] }],
            "rounded-l": [{ "rounded-l": [a] }],
            "rounded-tl": [{ "rounded-tl": [a] }],
            "rounded-tr": [{ "rounded-tr": [a] }],
            "rounded-br": [{ "rounded-br": [a] }],
            "rounded-bl": [{ "rounded-bl": [a] }],
            "border-w": [{ border: [i] }],
            "border-w-x": [{ "border-x": [i] }],
            "border-w-y": [{ "border-y": [i] }],
            "border-w-t": [{ "border-t": [i] }],
            "border-w-r": [{ "border-r": [i] }],
            "border-w-b": [{ "border-b": [i] }],
            "border-w-l": [{ "border-l": [i] }],
            "border-opacity": [{ "border-opacity": [g] }],
            "border-style": [
              {
                border: [].concat(
                  ["solid", "dashed", "dotted", "double", "none"],
                  ["hidden"]
                ),
              },
            ],
            "divide-x": [{ "divide-x": [i] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [i] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [g] }],
            "divide-style": [
              { divide: ["solid", "dashed", "dotted", "double", "none"] },
            ],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [
              {
                outline: [""].concat([
                  "solid",
                  "dashed",
                  "dotted",
                  "double",
                  "none",
                ]),
              },
            ],
            "outline-offset": [{ "outline-offset": [L] }],
            "outline-w": [{ outline: [L] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: O() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [g] }],
            "ring-offset-w": [{ "ring-offset": [L] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", R, I] }],
            "shadow-color": [{ shadow: [Z] }],
            opacity: [{ opacity: [g] }],
            "mix-blend": [
              {
                "mix-blend": [
                  "normal",
                  "multiply",
                  "screen",
                  "overlay",
                  "darken",
                  "lighten",
                  "color-dodge",
                  "color-burn",
                  "hard-light",
                  "soft-light",
                  "difference",
                  "exclusion",
                  "hue",
                  "saturation",
                  "color",
                  "luminosity",
                  "plus-lighter",
                ],
              },
            ],
            "bg-blend": [
              {
                "bg-blend": [
                  "normal",
                  "multiply",
                  "screen",
                  "overlay",
                  "darken",
                  "lighten",
                  "color-dodge",
                  "color-burn",
                  "hard-light",
                  "soft-light",
                  "difference",
                  "exclusion",
                  "hue",
                  "saturation",
                  "color",
                  "luminosity",
                  "plus-lighter",
                ],
              },
            ],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [t] }],
            brightness: [{ brightness: [o] }],
            contrast: [{ contrast: [s] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", R, j] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [x] }],
            sepia: [{ sepia: [y] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [t] }],
            "backdrop-brightness": [{ "backdrop-brightness": [o] }],
            "backdrop-contrast": [{ "backdrop-contrast": [s] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [g] }],
            "backdrop-saturate": [{ "backdrop-saturate": [x] }],
            "backdrop-sepia": [{ "backdrop-sepia": [y] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [l] }],
            "border-spacing-x": [{ "border-spacing-x": [l] }],
            "border-spacing-y": [{ "border-spacing-y": [l] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  j,
                ],
              },
            ],
            duration: [{ duration: [z] }],
            ease: [{ ease: ["linear", "in", "out", "in-out", j] }],
            delay: [{ delay: [z] }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", j] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [w] }],
            "scale-x": [{ "scale-x": [w] }],
            "scale-y": [{ "scale-y": [w] }],
            rotate: [{ rotate: [z, j] }],
            "translate-x": [{ "translate-x": [V] }],
            "translate-y": [{ "translate-y": [V] }],
            "skew-x": [{ "skew-x": [C] }],
            "skew-y": [{ "skew-y": [C] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  j,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: ["appearance-none"],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  j,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": [r] }],
            "scroll-mx": [{ "scroll-mx": [r] }],
            "scroll-my": [{ "scroll-my": [r] }],
            "scroll-mt": [{ "scroll-mt": [r] }],
            "scroll-mr": [{ "scroll-mr": [r] }],
            "scroll-mb": [{ "scroll-mb": [r] }],
            "scroll-ml": [{ "scroll-ml": [r] }],
            "scroll-p": [{ "scroll-p": [r] }],
            "scroll-px": [{ "scroll-px": [r] }],
            "scroll-py": [{ "scroll-py": [r] }],
            "scroll-pt": [{ "scroll-pt": [r] }],
            "scroll-pr": [{ "scroll-pr": [r] }],
            "scroll-pb": [{ "scroll-pb": [r] }],
            "scroll-pl": [{ "scroll-pl": [r] }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [
              {
                touch: [
                  "auto",
                  "none",
                  "pinch-zoom",
                  "manipulation",
                  { pan: ["x", "left", "right", "y", "up", "down"] },
                ],
              },
            ],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", j] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [L, N] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            "col-start-end": ["col-start", "col-end"],
            "row-start-end": ["row-start", "row-end"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: [
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
          },
        };
      }
      var O = v(P);
    },
    6135: function (e, r, t) {
      "use strict";
      var o = t(4948),
        n = t(3070),
        a = t(9114);
      e.exports = function (e, r, t) {
        var l = o(r);
        l in e ? n.f(e, l, a(0, t)) : (e[l] = t);
      };
    },
    1246: function (e, r, t) {
      var o = t(648),
        n = t(8173),
        a = t(8554),
        l = t(7497),
        i = t(5112)("iterator");
      e.exports = function (e) {
        if (!a(e)) return n(e, i) || n(e, "@@iterator") || l[o(e)];
      };
    },
    4121: function (e, r, t) {
      var o = t(6916),
        n = t(9662),
        a = t(9670),
        l = t(6330),
        i = t(1246),
        s = TypeError;
      e.exports = function (e, r) {
        var t = arguments.length < 2 ? i(e) : r;
        if (n(t)) return a(o(t, e));
        throw s(l(e) + " is not iterable");
      };
    },
    7659: function (e, r, t) {
      var o = t(5112),
        n = t(7497),
        a = o("iterator"),
        l = Array.prototype;
      e.exports = function (e) {
        return void 0 !== e && (n.Array === e || l[a] === e);
      };
    },
    408: function (e, r, t) {
      var o = t(9974),
        n = t(6916),
        a = t(9670),
        l = t(6330),
        i = t(7659),
        s = t(6244),
        c = t(7976),
        u = t(4121),
        d = t(1246),
        f = t(9212),
        p = TypeError,
        b = function (e, r) {
          (this.stopped = e), (this.result = r);
        },
        m = b.prototype;
      e.exports = function (e, r, t) {
        var g,
          v,
          h,
          x,
          w,
          y,
          C,
          H = t && t.that,
          V = !(!t || !t.AS_ENTRIES),
          L = !(!t || !t.IS_RECORD),
          M = !(!t || !t.IS_ITERATOR),
          k = !(!t || !t.INTERRUPTED),
          E = o(r, H),
          A = function (e) {
            return g && f(g, "normal", e), new b(!0, e);
          },
          N = function (e) {
            return V
              ? (a(e), k ? E(e[0], e[1], A) : E(e[0], e[1]))
              : k
              ? E(e, A)
              : E(e);
          };
        if (L) g = e.iterator;
        else if (M) g = e;
        else {
          if (!(v = d(e))) throw p(l(e) + " is not iterable");
          if (i(v)) {
            for (h = 0, x = s(e); x > h; h++)
              if ((w = N(e[h])) && c(m, w)) return w;
            return new b(!1);
          }
          g = u(e, v);
        }
        for (y = L ? e.next : g.next; !(C = n(y, g)).done; ) {
          try {
            w = N(C.value);
          } catch (z) {
            f(g, "throw", z);
          }
          if ("object" == typeof w && w && c(m, w)) return w;
        }
        return new b(!1);
      };
    },
    9212: function (e, r, t) {
      var o = t(6916),
        n = t(9670),
        a = t(8173);
      e.exports = function (e, r, t) {
        var l, i;
        n(e);
        try {
          if (!(l = a(e, "return"))) {
            if ("throw" === r) throw t;
            return t;
          }
          l = o(l, e);
        } catch (s) {
          (i = !0), (l = s);
        }
        if ("throw" === r) throw t;
        if (i) throw l;
        return n(l), t;
      };
    },
    7497: function (e) {
      e.exports = {};
    },
    8559: function (e, r, t) {
      var o = t(2109),
        n = t(408),
        a = t(6135);
      o(
        { target: "Object", stat: !0 },
        {
          fromEntries: function (e) {
            var r = {};
            return (
              n(
                e,
                function (e, t) {
                  a(r, e, t);
                },
                { AS_ENTRIES: !0 }
              ),
              r
            );
          },
        }
      );
    },
    757: function (e, r, t) {
      "use strict";
      var o = t(4836);
      r.M = void 0;
      var n = o(t(434)),
        a = o(t(7071)),
        l = o(t(7294)),
        i = o(t(5697)),
        s = ["children"],
        c = l.default.forwardRef(function (e, r) {
          var t = e.children,
            o = (0, a.default)(e, s);
          return l.default.createElement(
            "a",
            (0, n.default)({ ref: r }, o, {
              onClick: function (e) {
                "function" == typeof o.onClick && o.onClick(e);
                var r = !0;
                return (
                  (0 !== e.button ||
                    e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    e.defaultPrevented) &&
                    (r = !1),
                  o.target && "_self" !== o.target.toLowerCase() && (r = !1),
                  window.gtag
                    ? window.gtag("event", "click", {
                        event_category: "outbound",
                        event_label: o.href,
                        transport_type: r ? "beacon" : "",
                        event_callback: function () {
                          r && (document.location = o.href);
                        },
                      })
                    : r && (document.location = o.href),
                  !1
                );
              },
            }),
            t
          );
        });
      (r.M = c),
        (c.propTypes = {
          href: i.default.string,
          target: i.default.string,
          onClick: i.default.func,
        });
    },
    6464: function (e, r, t) {
      "use strict";
      t.d(r, {
        d: function () {
          return c;
        },
        n: function () {
          return u;
        },
      });
      var o = t(3366),
        n = t(757),
        a = t(7294),
        l = t(9940),
        i = ["children", "className", "href"],
        s = ["children", "className", "href"],
        c = function (e) {
          var r = e.children,
            t = e.className,
            n = e.href,
            s = (0, o.Z)(e, i);
          return a.createElement(
            "a",
            Object.assign(
              { className: (0, l.m)("text-blue-600 underline", t), href: n },
              s
            ),
            r
          );
        },
        u = function (e) {
          var r = e.children,
            t = e.className,
            i = e.href,
            c = (0, o.Z)(e, s);
          return a.createElement(
            n.M,
            Object.assign(
              { className: (0, l.m)("text-blue-600 underline", t), href: i },
              c
            ),
            r
          );
        };
    },
    4842: function (e, r, t) {
      "use strict";
      var o = t(7294),
        n = t(1082),
        a = t(2475),
        l = t(4419),
        i = t(880),
        s = t(6464),
        c = t(757),
        u = [
          { url: "/", title: "Home" },
          { url: "/about", title: "About" },
        ],
        d = function (e) {
          var r = e.href,
            t = e.text,
            n = e.iconSvgPath,
            a = e.viewBox;
          return o.createElement(
            c.M,
            { href: r },
            o.createElement(
              "button",
              {
                className:
                  "hover:border-blue-500 hover:text-blue-500 border border-slate-600 rounded-2xl py-1 px-2 pr-3 flex text-sm",
              },
              o.createElement(
                "svg",
                { className: "h-4 w-4", viewBox: null != a ? a : "0 0 24 24" },
                o.createElement("path", { fill: "currentColor", d: n })
              ),
              o.createElement("span", { className: "self-center ml-1" }, t)
            )
          );
        };
      r.Z = function (e) {
        var r,
          t = e.pageTitle,
          c = e.children,
          f = (0, l.l)(!1, 3e3),
          p = f[0],
          b = f[1];
        return o.createElement(
          "div",
          { className: "flex flex-col min-h-screen" },
          o.createElement(
            "nav",
            {
              className:
                "bg-blue-500 text-slate-50 flex shadow-slate-400 shadow-md",
            },
            o.createElement(
              "div",
              { className: "flex justify-center items-center m-1" },
              o.createElement(
                "svg",
                {
                  onMouseEnter: function () {
                    return b(!0);
                  },
                  className:
                    (p ? "animate-spin" : "") + " hover:animate-spin h-10 w-10",
                  viewBox: "0 0 24 24",
                },
                o.createElement("path", {
                  fill: "currentColor",
                  d: a.Z.svgPaths.fan,
                })
              ),
              o.createElement(
                "div",
                { className: "ml-2" },
                o.createElement(n.Link, { to: u[0].url }, "Fan Control"),
                " ",
                (r = t) ? "> " + r : ""
              )
            ),
            o.createElement(
              "ul",
              { className: "flex ml-auto justify-center items-center" },
              u.map(function (e) {
                return o.createElement(
                  "li",
                  { key: e.title, className: "p-3 hover:bg-blue-600" },
                  o.createElement(n.Link, { to: e.url }, e.title)
                );
              })
            )
          ),
          o.createElement("main", { className: "bg-transparent grow" }, c),
          o.createElement(
            "footer",
            {
              className:
                "border border-t bg-slate-100 border-slate-300 flex min-h-sm text-slate-500 pt-2 mt-10",
            },
            o.createElement(
              "div",
              { className: "flex flex-col space-y-0 min-w-sm m-auto" },
              o.createElement(
                "div",
                { className: "flex" },
                o.createElement(
                  "svg",
                  { className: "h-8 w-8", viewBox: "0 0 24 24" },
                  o.createElement("path", {
                    fill: "currentColor",
                    d: a.Z.svgPaths.fan,
                  })
                ),
                o.createElement(
                  "span",
                  { className: "text-xl self-center ml-1" },
                  "Fan Control"
                )
              ),
              o.createElement("div", null, "Rémi Mercier"),
              o.createElement(
                s.d,
                {
                  className: "text-slate-500 hover:text-blue-500",
                  href: i.Z.urls.email,
                },
                i.Z.urls.email
              ),
              o.createElement(
                "div",
                { className: "flex space-x-3 py-3" },
                o.createElement(d, {
                  iconSvgPath: a.Z.svgPaths.heart,
                  href: i.Z.urls.sponsor,
                  text: "Sponsor",
                }),
                o.createElement(d, {
                  iconSvgPath: a.Z.svgPaths.paypal,
                  href: i.Z.urls.donationUrl,
                  viewBox: "0 0 16 16",
                  text: "PayPal",
                })
              )
            )
          )
        );
      };
    },
    880: function (e, r) {
      "use strict";
      r.Z = {
        urls: {
          githubPageUrl: "https://github.com/Rem0o/FanControl.Releases",
          directDownloadUrl:
            "https://github.com/Rem0o/FanControl.Releases/blob/master/FanControl.zip?raw=true",
          versionJsonUrl:
            "https://raw.githubusercontent.com/Rem0o/FanControl.Releases/master/version.json",
          lhmGithubPageUrl:
            "https://github.com/LibreHardwareMonitor/LibreHardwareMonitor",
          pluginUrl:
            "https://github.com/Rem0o/FanControl.Releases/wiki/Plugins",
          donationUrl:
            "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=N4JPSTUQHRJM8&currency_code=USD&source=url&item_name=Fan+Control",
          email: "remi.mercier.software@gmail.com",
          sponsor: "https://github.com/sponsors/Rem0o",
        },
      };
    },
    2475: function (e, r) {
      "use strict";
      r.Z = {
        svgPaths: {
          mix: "M22,6.92L20.59,5.5L17.74,8.72C15.68,6.4 12.83,5 9.61,5C6.72,5 4.07,6.16 2,8L3.42,9.42C5.12,7.93 7.27,7 9.61,7C12.35,7 14.7,8.26 16.38,10.24L13.5,13.5L9.5,9.5L2,17L3.5,18.5L9.5,12.5L13.5,16.5L17.55,11.93C18.3,13.28 18.8,14.83 19,16.5H21C20.78,14.18 20.05,12.09 18.96,10.34L22,6.92Z",
          linear:
            "M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z",
          fan: "M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z",
          parameters:
            "M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z",
          github:
            "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
          download: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z",
          plugin:
            "M21.4 7.5C22.2 8.3 22.2 9.6 21.4 10.3L18.6 13.1L10.8 5.3L13.6 2.5C14.4 1.7 15.7 1.7 16.4 2.5L18.2 4.3L21.2 1.3L22.6 2.7L19.6 5.7L21.4 7.5M15.6 13.3L14.2 11.9L11.4 14.7L9.3 12.6L12.1 9.8L10.7 8.4L7.9 11.2L6.4 9.8L3.6 12.6C2.8 13.4 2.8 14.7 3.6 15.4L5.4 17.2L1.4 21.2L2.8 22.6L6.8 18.6L8.6 20.4C9.4 21.2 10.7 21.2 11.4 20.4L14.2 17.6L12.8 16.2L15.6 13.3Z",
          mail: "M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z",
          user: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",
          brush:
            "M8 3C5.79 3 4 4.79 4 7V14C4 15.1 4.9 16 6 16H9V20C9 21.1 9.9 22 11 22H13C14.1 22 15 21.1 15 20V16H18C19.1 16 20 15.1 20 14V3H8M8 5H12V7H14V5H15V9H17V5H18V10H6V7C6 5.9 6.9 5 8 5M6 14V12H18V14H6Z",
          wrench:
            "M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z",
          graph:
            "M4 19V20H22V22H2V2H4V17C7 17 10 15 12.1 11.4C15.1 6.4 18.4 4 22 4V6C19.2 6 16.5 8.1 13.9 12.5C11.3 16.6 7.7 19 4 19Z",
          bulb: "M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z",
          save: "M17,7V3H7V7H17M14,17A3,3 0 0,0 17,14A3,3 0 0,0 14,11A3,3 0 0,0 11,14A3,3 0 0,0 14,17M19,1L23,5V17A2,2 0 0,1 21,19H7C5.89,19 5,18.1 5,17V3A2,2 0 0,1 7,1H19M1,7H3V21H17V23H3A2,2 0 0,1 1,21V7Z",
          temperature:
            "M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",
          backend:
            "M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z",
          paypal:
            "M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z",
          heart:
            "M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z",
        },
      };
    },
    4419: function (e, r, t) {
      "use strict";
      t.d(r, {
        Y: function () {
          return n;
        },
        l: function () {
          return a;
        },
      });
      var o = t(7294),
        n = function (e, r) {
          var t = o.useRef(function () {});
          o.useEffect(
            function () {
              t.current = r;
            },
            [r]
          ),
            o.useEffect(
              function () {
                var r = setInterval(function () {
                  t.current();
                }, e);
                return function () {
                  return clearInterval(r);
                };
              },
              [e]
            );
        },
        a = function (e, r) {
          var t = (0, o.useState)(e),
            n = t[0],
            a = t[1],
            l = (0, o.useRef)(void 0);
          return (
            (0, o.useEffect)(
              function () {
                return (
                  n &&
                    (l.current = setTimeout(function () {
                      a(!1);
                    }, r)),
                  function () {
                    clearTimeout(l.current);
                  }
                );
              },
              [n, r]
            ),
            [n, a]
          );
        };
    },
    434: function (e) {
      function r() {
        return (
          (e.exports = r =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var o in t)
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          r.apply(this, arguments)
        );
      }
      (e.exports = r),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7071: function (e) {
      (e.exports = function (e, r) {
        if (null == e) return {};
        var t,
          o,
          n = {},
          a = Object.keys(e);
        for (o = 0; o < a.length; o++)
          (t = a[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
        return n;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    3366: function (e, r, t) {
      "use strict";
      function o(e, r) {
        if (null == e) return {};
        var t,
          o,
          n = {},
          a = Object.keys(e);
        for (o = 0; o < a.length; o++)
          (t = a[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
        return n;
      }
      t.d(r, {
        Z: function () {
          return o;
        },
      });
    },
  },
]);
//# sourceMappingURL=0b5ad58107c2a363dd57b3503c89da61e0a7a842-c29242da9e8de3e9ebb3.js.map
