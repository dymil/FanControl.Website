(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [691],
  {
    757: function (e, t, n) {
      "use strict";
      var r = n(4836);
      t.M = void 0;
      var a = r(n(434)),
        o = r(n(7071)),
        i = r(n(7294)),
        l = r(n(5697)),
        s = ["children"],
        c = i.default.forwardRef(function (e, t) {
          var n = e.children,
            r = (0, o.default)(e, s);
          return i.default.createElement(
            "a",
            (0, a.default)({ ref: t }, r, {
              onClick: function (e) {
                "function" == typeof r.onClick && r.onClick(e);
                var t = !0;
                return (
                  (0 !== e.button ||
                    e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    e.defaultPrevented) &&
                    (t = !1),
                  r.target && "_self" !== r.target.toLowerCase() && (t = !1),
                  window.gtag
                    ? window.gtag("event", "click", {
                        event_category: "outbound",
                        event_label: r.href,
                        transport_type: t ? "beacon" : "",
                        event_callback: function () {
                          t && (document.location = r.href);
                        },
                      })
                    : t && (document.location = r.href),
                  !1
                );
              },
            }),
            n
          );
        });
      (t.M = c),
        (c.propTypes = {
          href: l.default.string,
          target: l.default.string,
          onClick: l.default.func,
        });
    },
    3723: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return p;
        },
        M: function () {
          return E;
        },
        P: function () {
          return w;
        },
        S: function () {
          return R;
        },
        _: function () {
          return l;
        },
        a: function () {
          return i;
        },
        b: function () {
          return c;
        },
        g: function () {
          return u;
        },
        h: function () {
          return s;
        },
      });
      var r = n(7294),
        a = (n(2369), n(5697)),
        o = n.n(a);
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          t.indexOf((n = o[r])) >= 0 || (a[n] = e[n]);
        return a;
      }
      var s = function () {
        return (
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype
        );
      };
      function c(e, t, n, r, a) {
        return (
          void 0 === a && (a = {}),
          i({}, n, {
            loading: r,
            shouldLoad: e,
            "data-main-image": "",
            style: i({}, a, { opacity: t ? 1 : 0 }),
          })
        );
      }
      function u(e, t, n, r, a, o, l, s) {
        var c = {};
        o &&
          ((c.backgroundColor = o),
          "fixed" === n
            ? ((c.width = r),
              (c.height = a),
              (c.backgroundColor = o),
              (c.position = "relative"))
            : ("constrained" === n || "fullWidth" === n) &&
              ((c.position = "absolute"),
              (c.top = 0),
              (c.left = 0),
              (c.bottom = 0),
              (c.right = 0))),
          l && (c.objectFit = l),
          s && (c.objectPosition = s);
        var u = i({}, e, {
          "aria-hidden": !0,
          "data-placeholder-image": "",
          style: i(
            { opacity: t ? 0 : 1, transition: "opacity 500ms linear" },
            c
          ),
        });
        return u;
      }
      var m,
        d = ["children"],
        f = function (e) {
          var t = e.layout,
            n = e.width,
            a = e.height;
          return "fullWidth" === t
            ? r.createElement("div", {
                "aria-hidden": !0,
                style: { paddingTop: (a / n) * 100 + "%" },
              })
            : "constrained" === t
            ? r.createElement(
                "div",
                { style: { maxWidth: n, display: "block" } },
                r.createElement("img", {
                  alt: "",
                  role: "presentation",
                  "aria-hidden": "true",
                  src:
                    "data:image/svg+xml;charset=utf-8,%3Csvg height='" +
                    a +
                    "' width='" +
                    n +
                    "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
                  style: {
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  },
                })
              )
            : null;
        },
        p = function (e) {
          var t = e.children,
            n = l(e, d);
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(f, i({}, n)),
            t,
            null
          );
        },
        g = ["src", "srcSet", "loading", "alt", "shouldLoad"],
        h = ["fallback", "sources", "shouldLoad"],
        v = function (e) {
          var t = e.src,
            n = e.srcSet,
            a = e.loading,
            o = e.alt,
            s = void 0 === o ? "" : o,
            c = e.shouldLoad,
            u = l(e, g);
          return r.createElement(
            "img",
            i({}, u, {
              decoding: "async",
              loading: a,
              src: c ? t : void 0,
              "data-src": c ? void 0 : t,
              srcSet: c ? n : void 0,
              "data-srcset": c ? void 0 : n,
              alt: s,
            })
          );
        },
        b = function (e) {
          var t = e.fallback,
            n = e.sources,
            a = void 0 === n ? [] : n,
            o = e.shouldLoad,
            s = void 0 === o || o,
            c = l(e, h),
            u = c.sizes || (null == t ? void 0 : t.sizes),
            m = r.createElement(v, i({}, c, t, { sizes: u, shouldLoad: s }));
          return a.length
            ? r.createElement(
                "picture",
                null,
                a.map(function (e) {
                  var t = e.media,
                    n = e.srcSet,
                    a = e.type;
                  return r.createElement("source", {
                    key: t + "-" + a + "-" + n,
                    type: a,
                    media: t,
                    srcSet: s ? n : void 0,
                    "data-srcset": s ? void 0 : n,
                    sizes: u,
                  });
                }),
                m
              )
            : m;
        };
      (v.propTypes = {
        src: a.string.isRequired,
        alt: a.string.isRequired,
        sizes: a.string,
        srcSet: a.string,
        shouldLoad: a.bool,
      }),
        (b.displayName = "Picture"),
        (b.propTypes = {
          alt: a.string.isRequired,
          shouldLoad: a.bool,
          fallback: a.exact({
            src: a.string.isRequired,
            srcSet: a.string,
            sizes: a.string,
          }),
          sources: a.arrayOf(
            a.oneOfType([
              a.exact({
                media: a.string.isRequired,
                type: a.string,
                sizes: a.string,
                srcSet: a.string.isRequired,
              }),
              a.exact({
                media: a.string,
                type: a.string.isRequired,
                sizes: a.string,
                srcSet: a.string.isRequired,
              }),
            ])
          ),
        });
      var y = ["fallback"],
        w = function (e) {
          var t = e.fallback,
            n = l(e, y);
          return t
            ? r.createElement(
                b,
                i({}, n, { fallback: { src: t }, "aria-hidden": !0, alt: "" })
              )
            : r.createElement("div", i({}, n));
        };
      (w.displayName = "Placeholder"),
        (w.propTypes = {
          fallback: a.string,
          sources: null == (m = b.propTypes) ? void 0 : m.sources,
          alt: function (e, t, n) {
            return e[t]
              ? new Error(
                  "Invalid prop `" +
                    t +
                    "` supplied to `" +
                    n +
                    "`. Validation failed."
                )
              : null;
          },
        });
      var E = function (e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(b, i({}, e)),
          r.createElement(
            "noscript",
            null,
            r.createElement(b, i({}, e, { shouldLoad: !0 }))
          )
        );
      };
      (E.displayName = "MainImage"), (E.propTypes = b.propTypes);
      var x,
        C,
        k = function (e, t, n) {
          for (
            var r = arguments.length, a = new Array(r > 3 ? r - 3 : 0), i = 3;
            i < r;
            i++
          )
            a[i - 3] = arguments[i];
          return e.alt || "" === e.alt
            ? o().string.apply(o(), [e, t, n].concat(a))
            : new Error(
                'The "alt" prop is required in ' +
                  n +
                  '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html'
              );
        },
        N = { image: o().object.isRequired, alt: k },
        O = [
          "as",
          "image",
          "style",
          "backgroundColor",
          "className",
          "class",
          "onStartLoad",
          "onLoad",
          "onError",
        ],
        P = ["style", "className"],
        j = new Set(),
        L = function (e) {
          var t = e.as,
            a = void 0 === t ? "div" : t,
            o = e.image,
            c = e.style,
            u = e.backgroundColor,
            m = e.className,
            d = e.class,
            f = e.onStartLoad,
            p = e.onLoad,
            g = e.onError,
            h = l(e, O),
            v = o.width,
            b = o.height,
            y = o.layout,
            w = (function (e, t, n) {
              var r = {},
                a = "gatsby-image-wrapper";
              return (
                "fixed" === n
                  ? ((r.width = e), (r.height = t))
                  : "constrained" === n &&
                    (a =
                      "gatsby-image-wrapper gatsby-image-wrapper-constrained"),
                { className: a, "data-gatsby-image-wrapper": "", style: r }
              );
            })(v, b, y),
            E = w.style,
            k = w.className,
            N = l(w, P),
            L = (0, r.useRef)(),
            S = (0, r.useMemo)(
              function () {
                return JSON.stringify(o.images);
              },
              [o.images]
            );
          d && (m = d);
          var Z = (function (e, t, n) {
            var r = "";
            return (
              "fullWidth" === e &&
                (r =
                  '<div aria-hidden="true" style="padding-top: ' +
                  (n / t) * 100 +
                  '%;"></div>'),
              "constrained" === e &&
                (r =
                  '<div style="max-width: ' +
                  t +
                  'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'' +
                  n +
                  "' width='" +
                  t +
                  "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),
              r
            );
          })(y, v, b);
          return (
            (0, r.useEffect)(
              function () {
                x ||
                  (x = Promise.all([n.e(774), n.e(217)])
                    .then(n.bind(n, 9217))
                    .then(function (e) {
                      var t = e.renderImageToString,
                        n = e.swapPlaceholderImage;
                      return (
                        (C = t),
                        { renderImageToString: t, swapPlaceholderImage: n }
                      );
                    }));
                var e,
                  t,
                  r = L.current.querySelector("[data-gatsby-image-ssr]");
                return r && s()
                  ? (r.complete
                      ? (null == f || f({ wasCached: !0 }),
                        null == p || p({ wasCached: !0 }),
                        setTimeout(function () {
                          r.removeAttribute("data-gatsby-image-ssr");
                        }, 0))
                      : (null == f || f({ wasCached: !0 }),
                        r.addEventListener("load", function e() {
                          r.removeEventListener("load", e),
                            null == p || p({ wasCached: !0 }),
                            setTimeout(function () {
                              r.removeAttribute("data-gatsby-image-ssr");
                            }, 0);
                        })),
                    void j.add(S))
                  : C && j.has(S)
                  ? void 0
                  : (x.then(function (n) {
                      var r = n.renderImageToString,
                        a = n.swapPlaceholderImage;
                      L.current &&
                        ((L.current.innerHTML = r(
                          i({ isLoading: !0, isLoaded: j.has(S), image: o }, h)
                        )),
                        j.has(S) ||
                          (e = requestAnimationFrame(function () {
                            L.current && (t = a(L.current, S, j, c, f, p, g));
                          })));
                    }),
                    function () {
                      e && cancelAnimationFrame(e), t && t();
                    });
              },
              [o]
            ),
            (0, r.useLayoutEffect)(
              function () {
                j.has(S) &&
                  C &&
                  ((L.current.innerHTML = C(
                    i({ isLoading: j.has(S), isLoaded: j.has(S), image: o }, h)
                  )),
                  null == f || f({ wasCached: !0 }),
                  null == p || p({ wasCached: !0 }));
              },
              [o]
            ),
            (0, r.createElement)(
              a,
              i({}, N, {
                style: i({}, E, c, { backgroundColor: u }),
                className: k + (m ? " " + m : ""),
                ref: L,
                dangerouslySetInnerHTML: { __html: Z },
                suppressHydrationWarning: !0,
              })
            )
          );
        },
        S = (0, r.memo)(function (e) {
          return e.image ? (0, r.createElement)(L, e) : null;
        });
      (S.propTypes = N), (S.displayName = "GatsbyImage");
      var Z,
        M = [
          "src",
          "__imageData",
          "__error",
          "width",
          "height",
          "aspectRatio",
          "tracedSVGOptions",
          "placeholder",
          "formats",
          "quality",
          "transformOptions",
          "jpgOptions",
          "pngOptions",
          "webpOptions",
          "avifOptions",
          "blurredOptions",
          "breakpoints",
          "outputPixelDensities",
        ],
        T = function (e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
            a < n;
            a++
          )
            r[a - 2] = arguments[a];
          return "fullWidth" !== e.layout ||
            ("width" !== t && "height" !== t) ||
            !e[t]
            ? o().number.apply(o(), [e, t].concat(r))
            : new Error(
                '"' +
                  t +
                  '" ' +
                  e[t] +
                  " may not be passed when layout is fullWidth."
              );
        },
        _ = new Set(["fixed", "fullWidth", "constrained"]),
        F = {
          src: o().string.isRequired,
          alt: k,
          width: T,
          height: T,
          sizes: o().string,
          layout: function (e) {
            if (void 0 !== e.layout && !_.has(e.layout))
              return new Error(
                "Invalid value " +
                  e.layout +
                  '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".'
              );
          },
        },
        R =
          ((Z = S),
          function (e) {
            var t = e.src,
              n = e.__imageData,
              a = e.__error,
              o = l(e, M);
            return (
              a && console.warn(a),
              n
                ? r.createElement(Z, i({ image: n }, o))
                : (console.warn("Image not loaded", t), null)
            );
          });
      (R.displayName = "StaticImage"), (R.propTypes = F);
    },
    2369: function (e) {
      "use strict";
      var t = function (e, t) {
        if ("string" != typeof e && !Array.isArray(e))
          throw new TypeError("Expected the input to be `string | string[]`");
        t = Object.assign({ pascalCase: !1 }, t);
        var n;
        return (
          (e = Array.isArray(e)
            ? e
                .map(function (e) {
                  return e.trim();
                })
                .filter(function (e) {
                  return e.length;
                })
                .join("-")
            : e.trim()),
          0 === e.length
            ? ""
            : 1 === e.length
            ? t.pascalCase
              ? e.toUpperCase()
              : e.toLowerCase()
            : (e !== e.toLowerCase() &&
                (e = (function (e) {
                  for (var t = !1, n = !1, r = !1, a = 0; a < e.length; a++) {
                    var o = e[a];
                    t && /[a-zA-Z]/.test(o) && o.toUpperCase() === o
                      ? ((e = e.slice(0, a) + "-" + e.slice(a)),
                        (t = !1),
                        (r = n),
                        (n = !0),
                        a++)
                      : n && r && /[a-zA-Z]/.test(o) && o.toLowerCase() === o
                      ? ((e = e.slice(0, a - 1) + "-" + e.slice(a - 1)),
                        (r = n),
                        (n = !1),
                        (t = !0))
                      : ((t = o.toLowerCase() === o && o.toUpperCase() !== o),
                        (r = n),
                        (n = o.toUpperCase() === o && o.toLowerCase() !== o));
                  }
                  return e;
                })(e)),
              (e = e
                .replace(/^[_.\- ]+/, "")
                .toLowerCase()
                .replace(/[_.\- ]+(\w|$)/g, function (e, t) {
                  return t.toUpperCase();
                })
                .replace(/\d+(\w|$)/g, function (e) {
                  return e.toUpperCase();
                })),
              (n = e),
              t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
        );
      };
      (e.exports = t), (e.exports.default = t);
    },
    8117: function (e, t, n) {
      "use strict";
      n.d(t, {
        xj: function () {
          return r;
        },
        y9: function () {
          return o;
        },
        zE: function () {
          return a;
        },
      });
      var r = [
          {
            name: "Max",
            invoke: function (e) {
              return e
                .map(function (e) {
                  return e.getValue();
                })
                .reduce(function (e, t) {
                  return e > t ? e : t;
                }, -1);
            },
          },
          {
            name: "Min",
            invoke: function (e) {
              return e
                .map(function (e) {
                  return e.getValue();
                })
                .reduce(function (e, t) {
                  return e < t ? e : t;
                }, 101);
            },
          },
          {
            name: "Average",
            invoke: function (e) {
              return (
                e
                  .map(function (e) {
                    return e.getValue();
                  })
                  .reduce(function (e, t) {
                    return e + t;
                  }, 0) / e.length
              );
            },
          },
        ],
        a = function (e, t, n) {
          return {
            name: e,
            selectedTemperature: t,
            getValue: function () {
              var e,
                r,
                a,
                o = n.find(function (e) {
                  return e.name == t;
                });
              return o
                ? ((e = 3 * (o.value - 30)),
                  (r = 0),
                  (a = 100),
                  Math.min(Math.max(e, r), a))
                : -1;
            },
          };
        },
        o = function (e, t, n) {
          return {
            name: e,
            selectedMixFunction: t,
            getValue: function () {
              return t.invoke(n);
            },
          };
        };
    },
    5720: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(7294),
        a = n(2939);
      function o(e) {
        var t,
          n,
          o = e.iconPath,
          i = e.fanCurve,
          l = e.controlValueSuffix,
          s = e.children,
          c = i.getValue();
        return r.createElement(
          a.Z,
          { className: "bg-blue-500" },
          r.createElement(
            "div",
            { className: "flex flex-col text-white w-52" },
            r.createElement(
              "div",
              { className: "flex flex-row justify-center items-center" },
              ((n = o),
              r.createElement(
                "svg",
                { className: "w-12 h-12", viewBox: "0 0 24 24" },
                r.createElement("path", { fill: "currentColor", d: n })
              )),
              r.createElement(
                "div",
                { className: "border-b-2 ml-4 border-white w-full " },
                i.name
              )
            ),
            r.createElement("div", null, s),
            r.createElement(
              "div",
              { className: "mt-1 flex flex-row justify-between" },
              r.createElement(
                "div",
                null,
                r.createElement(
                  "span",
                  null,
                  (t = c) >= 0 && t <= 100 ? c.toFixed(1) : "-",
                  " %"
                ),
                " ",
                r.createElement("span", null, l)
              )
            )
          )
        );
      }
    },
    8436: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(5785),
        a = n(7294),
        o = n(2475),
        i = n(6337),
        l = n(8117),
        s = n(5720);
      function c(e) {
        var t,
          n,
          c = e.name,
          u = e.fanCurves,
          m = e.selectedFanCurvesDefault,
          d = (0, a.useState)(
            null != m
              ? m
              : u.map(function (e) {
                  return e.name;
                })
          ),
          f = d[0],
          p = d[1],
          g = u.filter(function (e) {
            return f.includes(e.name);
          }),
          h = (0, a.useState)(l.xj[0]),
          v = h[0],
          b = h[1],
          y = (0, l.y9)(c, v, g),
          w =
            f.length > 0
              ? null !==
                  (t =
                    null ===
                      (n = g.find(function (e) {
                        return e.getValue() == y.getValue();
                      })) || void 0 === n
                      ? void 0
                      : n.name) && void 0 !== t
                ? t
                : "Average"
              : v.name;
        return a.createElement(
          s.Z,
          {
            iconPath: o.Z.svgPaths.mix,
            fanCurve: y,
            controlValueSuffix: " (" + w + ")",
          },
          a.createElement(
            i.Z,
            {
              onChange: function (e) {
                return b(l.xj[e.target.selectedIndex]);
              },
              value: y.selectedMixFunction.name,
              label: "Function",
            },
            l.xj.map(function (e) {
              return a.createElement(
                "option",
                { key: e.name, value: e.name },
                e.name
              );
            })
          ),
          a.createElement(
            i.Z,
            {
              value: "default",
              onChange: function (e) {
                return (
                  (t = e.target.selectedIndex),
                  (n = u[t - 1]),
                  void (
                    f.includes(n.name) ||
                    p(function (e) {
                      return [].concat((0, r.Z)(e), [n.name]);
                    })
                  )
                );
                var t, n;
              },
              label: "",
              className: "mt-1",
            },
            a.createElement(
              "option",
              { key: "-1", disabled: !0, value: "default" },
              "Add a fan curve..."
            ),
            u.map(function (e, t) {
              return a.createElement("option", { key: t }, e.name);
            })
          ),
          g.map(function (e, t) {
            return a.createElement(
              "div",
              { key: t, className: "text-sm my-2 ml-2" },
              a.createElement("span", { className: "mr-1" }, "○"),
              " ",
              a.createElement("span", null, e.name),
              a.createElement("span", null, " (", e.getValue(), " %)"),
              a.createElement(
                "button",
                {
                  onClick: function () {
                    return p(
                      f.filter(function (t) {
                        return t != e.name;
                      })
                    );
                  },
                  className: "float-right border border-white px-1 rounded",
                },
                "X"
              )
            );
          })
        );
      }
    },
    5900: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return { name: e, value: Math.round(Math.random() * (n - t) + t) };
      }
      function a(e, t) {
        return { name: e, value: t };
      }
      n.d(t, {
        T: function () {
          return a;
        },
        f: function () {
          return r;
        },
      });
    },
    6464: function (e, t, n) {
      "use strict";
      var r = n(7294);
      t.Z = function (e) {
        var t = e.href,
          n = e.children;
        return r.createElement(
          "a",
          { className: "text-blue-600 underline", href: t },
          n
        );
      };
    },
    9122: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return a;
        },
      });
      var r = n(7294),
        a = function (e) {
          return r.createElement(
            "svg",
            { className: "w-8 h-8", viewBox: "0 0 24 24" },
            r.createElement("path", { fill: "currentColor", d: e })
          );
        };
    },
    6337: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(3366),
        a = n(7294),
        o = n(9940),
        i = ["className", "label"];
      function l(e) {
        var t = e.className,
          n = (e.label, (0, r.Z)(e, i));
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            "label",
            { className: "mb-2 text-sm font-medium" },
            e.label
          ),
          a.createElement(
            "select",
            Object.assign(
              {
                className: (0, o.m)(
                  "text-base font-normal text-white w-full bg-transparent border-white border-spacing-1 border-b focus:text-gray-700 focus:bg-white",
                  t
                ),
              },
              n
            )
          )
        );
      }
    },
    880: function (e, t) {
      "use strict";
      t.Z = {
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
        },
      };
    },
    8576: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Head: function () {
            return j;
          },
          default: function () {
            return P;
          },
        });
      var r = n(7294),
        a = n(4842),
        o = n(2939);
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = r.createContext({});
      function u(e) {
        var t = r.useContext(c);
        return r.useMemo(
          function () {
            return "function" == typeof e ? e(t) : s(s({}, t), e);
          },
          [t, e]
        );
      }
      function m(e) {
        var t = Object.assign({ p: "p" }, u(), e.components);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(t.p, null, "No installation required."),
          "\n",
          r.createElement("br"),
          "\n",
          r.createElement(t.p, null, "Low on ressources, high on power.")
        );
      }
      var d = function (e) {
          void 0 === e && (e = {});
          var t = Object.assign({}, u(), e.components).wrapper;
          return t ? r.createElement(t, e, r.createElement(m, e)) : m(e);
        },
        f = n(3723),
        p = n(2475),
        g = n(9122),
        h = n(880),
        v = n(4419),
        b = n(8436),
        y = n(5900),
        w = n(6464),
        E = n(757),
        x = function (e) {
          var t = e.icon,
            n = e.text;
          return r.createElement(
            "h1",
            { className: "flex m-1 text-left" },
            r.createElement(
              "svg",
              { className: "h-12 w-12", viewBox: "0 0 24 24" },
              r.createElement("path", { fill: "currentColor", d: t })
            ),
            r.createElement(
              "span",
              { className: "ml-5 text-2xl font-semibold" },
              n
            )
          );
        },
        C = function (e) {
          var t = e.background,
            n = e.textColor,
            a = e.text,
            i = e.icon,
            l = e.onClick;
          return r.createElement(
            "button",
            {
              onClick: function () {
                return l ? l() : null;
              },
            },
            r.createElement(
              o.Z,
              { className: t },
              r.createElement(
                "div",
                { className: "flex gap-2 w-40 " + n },
                (0, g.J)(i),
                r.createElement("span", { className: "m-auto" }, a)
              )
            )
          );
        },
        k = function () {
          var e = (0, r.useState)(0),
            t = e[0],
            n = e[1];
          (0, r.useEffect)(function () {
            fetch(h.Z.urls.versionJsonUrl)
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return n(e.Number);
              });
          }, []);
          var a = "Download";
          return (
            t > 0 && (a += " V" + t),
            r.createElement(
              E.M,
              { href: h.Z.urls.directDownloadUrl },
              r.createElement(C, {
                background: "bg-blue-500 hover:bg-blue-600",
                icon: p.Z.svgPaths.download,
                textColor: "text-white",
                text: a,
              })
            )
          );
        },
        N = function () {
          return r.createElement(
            E.M,
            { href: h.Z.urls.githubPageUrl },
            r.createElement(C, {
              background: "bg-gray-300 hover:bg-gray-400",
              icon: p.Z.svgPaths.github,
              textColor: "text-black",
              text: "GitHub Page",
            })
          );
        },
        O = function () {
          var e = (0, r.useState)([
              (0, y.T)("a", 50),
              (0, y.T)("b", 50),
              (0, y.T)("c", 50),
            ]),
            t = e[0],
            n = e[1];
          (0, v.Y)(1e3, function () {
            n([
              (0, y.f)("a", 40, 60),
              (0, y.f)("b", 30, 70),
              (0, y.f)("c", 26, 65),
            ]);
          });
          var a = [
            {
              name: "CPU -> Case fans",
              getValue: function () {
                return t[0].value;
              },
            },
            {
              name: "GPU -> Case fans",
              getValue: function () {
                return t[1].value;
              },
            },
            {
              name: "SSD -> Case fans",
              getValue: function () {
                return t[2].value;
              },
            },
          ];
          return r.createElement(b.Z, {
            name: "Demo Case Fans",
            fanCurves: a,
            selectedFanCurvesDefault: a.slice(0, 2).map(function (e) {
              return e.name;
            }),
          });
        },
        P = function () {
          var e = (0, v.l)(!0, 3e3),
            t = e[0],
            i = e[1];
          return r.createElement(
            a.Z,
            null,
            r.createElement(
              "div",
              {
                className:
                  "flex flex-col place-items-center text-center gap-12 p-5",
              },
              r.createElement(
                "svg",
                {
                  onMouseEnter: function () {
                    return i(!0);
                  },
                  className:
                    (t ? "animate-spin" : "") + " hover:animate-spin h-36 w-36",
                  viewBox: "0 0 24 24",
                },
                r.createElement("path", {
                  fill: "currentColor",
                  d: p.Z.svgPaths.fan,
                })
              ),
              r.createElement(
                "h1",
                { className: "text-4xl max-w-lg font-bold" },
                "Fan Control is a highly focused fan controlling software for Windows."
              ),
              r.createElement(
                "div",
                { className: "text-2xl" },
                r.createElement(d, null)
              ),
              r.createElement(
                "div",
                { className: "flex gap-6" },
                r.createElement(N, null),
                r.createElement(k, null)
              ),
              r.createElement(
                o.Z,
                { className: "p-0" },
                r.createElement(f.S, {
                  className: "rounded",
                  width: 800,
                  src: "./../images/main.png",
                  alt: "Main interface",
                  __imageData: n(9792),
                })
              ),
              r.createElement(
                "div",
                null,
                r.createElement(
                  "div",
                  { className: "text-2xl font-semibold mb-4" },
                  "Features rapid fire"
                ),
                r.createElement(
                  "div",
                  {
                    className: "grid sm:grid-cols-1 md:grid-cols-2 gap-5 wrap",
                  },
                  [
                    [
                      p.Z.svgPaths.wrench,
                      "Assisted setup will guide you through your initial config.",
                    ],
                    [
                      p.Z.svgPaths.bulb,
                      "As simple, or as complex of a config you can create. Start simple, then go crazy.",
                    ],
                    [
                      p.Z.svgPaths.graph,
                      "Multiple type of fan curves and custom sensors to choose from.",
                    ],
                    [
                      p.Z.svgPaths.save,
                      "Save, edit and load multiple configurations.",
                    ],
                    [
                      p.Z.svgPaths.brush,
                      "Customize the look of the software to fit your theme.",
                    ],
                    [
                      p.Z.svgPaths.temperature,
                      "Use the tray icon as a temperature display.",
                    ],
                  ].map(function (e, t) {
                    var n = e[0],
                      a = e[1];
                    return r.createElement(
                      "div",
                      { key: t, className: "max-w-xs" },
                      r.createElement(
                        o.Z,
                        { className: "bg-white" },
                        r.createElement(
                          "div",
                          {
                            className:
                              "flex text-left items-center align-middle",
                          },
                          r.createElement(
                            "div",
                            { className: "mr-3" },
                            (0, g.J)(n)
                          ),
                          r.createElement("div", null, a)
                        )
                      )
                    );
                  })
                )
              ),
              r.createElement(
                "div",
                {
                  className:
                    "grid sm:grid-cols-1 md:grid-cols-2 gap-10 wrap text-justify justify-center",
                },
                r.createElement(
                  "div",
                  { className: "max-w-sm" },
                  r.createElement(x, {
                    text: "It's all about the mix",
                    icon: p.Z.svgPaths.mix,
                  }),
                  r.createElement(
                    "p",
                    null,
                    "THE missing function that originates this whole project. Mix fan curves take the possibilities to a whole new level. Combine any type of fan curves together and apply a function like maximum or average to create a whole new control logic. Different curves bound to different temperature sensors, mixed together, your case fans never asked for better. ",
                    r.createElement("br", null),
                    r.createElement("br", null),
                    " ",
                    r.createElement("b", null, "Try it out on the demo card!")
                  )
                ),
                r.createElement(
                  "div",
                  { className: "m-auto" },
                  r.createElement(O, null)
                ),
                r.createElement(
                  "div",
                  { className: "max-w-sm" },
                  r.createElement(x, {
                    text: "Tinkerers rejoice",
                    icon: p.Z.svgPaths.parameters,
                  }),
                  r.createElement(
                    "p",
                    null,
                    "Fan Control has ALL the parameters. Response time, hysteresis, hysteresis direction, step up, step down... Fine tune to your hearth's desire. Control your fan's start and stopping logic, for smooth 0 RPM operation ",
                    r.createElement("i", null, "(when supported)"),
                    "."
                  )
                ),
                r.createElement(
                  "div",
                  { className: "max-w-sm" },
                  r.createElement(x, {
                    text: "Expansion through plugins",
                    icon: p.Z.svgPaths.plugin,
                  }),
                  r.createElement(
                    "p",
                    null,
                    "Want to add more sensors and controls from a third party? No problem! Fan Control has a simple",
                    " ",
                    r.createElement(
                      w.Z,
                      { href: h.Z.urls.pluginUrl },
                      "plugin"
                    ),
                    " ",
                    "system with .NET that allow any third party developper to add temperature, speed or control sensors. Installing is as easy as dropping a dll in the plugin folder, that's it."
                  )
                ),
                r.createElement(
                  "div",
                  { className: "max-w-sm" },
                  r.createElement(x, {
                    text: "Open source backend",
                    icon: p.Z.svgPaths.backend,
                  }),
                  r.createElement(
                    "p",
                    null,
                    "Fan Control backend is mainly based on",
                    " ",
                    r.createElement(
                      w.Z,
                      { href: h.Z.urls.lhmGithubPageUrl },
                      "LibreHardwareMonitor"
                    ),
                    ", an open source fork of the original OpenHardwareMonitor. This means that hardware compatiblity is entierely open for anyone to contribute, and doesn't rely on a single developper which may stop caring at some point. Combined with the plugin system, Fan Control is unlocked for many generations of hardware to come."
                  )
                )
              )
            )
          );
        },
        j = function () {
          return r.createElement("title", null, "Fan Control");
        };
    },
    434: function (e) {
      function t() {
        return (
          (e.exports = t =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t.apply(this, arguments)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7071: function (e) {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    9792: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/466fa929e3c8624c0001863c50ab03e7/7c471/main.png","srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/4715e/main.png 200w,\\n/static/466fa929e3c8624c0001863c50ab03e7/3b96c/main.png 400w,\\n/static/466fa929e3c8624c0001863c50ab03e7/7c471/main.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/f42d9/main.webp 200w,\\n/static/466fa929e3c8624c0001863c50ab03e7/1e622/main.webp 400w,\\n/static/466fa929e3c8624c0001863c50ab03e7/53c1e/main.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":480}'
      );
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-00924e339d72955f19ef.js.map
