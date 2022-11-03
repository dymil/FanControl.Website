"use strict";
(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [691],
  {
    72: function (e) {
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
                  for (var t = !1, n = !1, a = !1, r = 0; r < e.length; r++) {
                    var i = e[r];
                    t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i
                      ? ((e = e.slice(0, r) + "-" + e.slice(r)),
                        (t = !1),
                        (a = n),
                        (n = !0),
                        r++)
                      : n && a && /[a-zA-Z]/.test(i) && i.toLowerCase() === i
                      ? ((e = e.slice(0, r - 1) + "-" + e.slice(r - 1)),
                        (a = n),
                        (n = !1),
                        (t = !0))
                      : ((t = i.toLowerCase() === i && i.toUpperCase() !== i),
                        (a = n),
                        (n = i.toUpperCase() === i && i.toLowerCase() !== i));
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
    3723: function (e, t, n) {
      n.d(t, {
        L: function () {
          return p;
        },
        M: function () {
          return E;
        },
        P: function () {
          return y;
        },
        S: function () {
          return T;
        },
        _: function () {
          return o;
        },
        a: function () {
          return l;
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
      var a = n(7294),
        r = (n(72), n(5697)),
        i = n.n(r);
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      function o(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++)
          t.indexOf((n = i[a])) >= 0 || (r[n] = e[n]);
        return r;
      }
      var s = function () {
        return (
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype
        );
      };
      function c(e, t, n, a, r) {
        return (
          void 0 === r && (r = {}),
          l({}, n, {
            loading: a,
            shouldLoad: e,
            "data-main-image": "",
            style: l({}, r, { opacity: t ? 1 : 0 }),
          })
        );
      }
      function u(e, t, n, a, r, i, o, s) {
        var c = {};
        i &&
          ((c.backgroundColor = i),
          "fixed" === n
            ? ((c.width = a),
              (c.height = r),
              (c.backgroundColor = i),
              (c.position = "relative"))
            : ("constrained" === n || "fullWidth" === n) &&
              ((c.position = "absolute"),
              (c.top = 0),
              (c.left = 0),
              (c.bottom = 0),
              (c.right = 0))),
          o && (c.objectFit = o),
          s && (c.objectPosition = s);
        var u = l({}, e, {
          "aria-hidden": !0,
          "data-placeholder-image": "",
          style: l(
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
            r = e.height;
          return "fullWidth" === t
            ? a.createElement("div", {
                "aria-hidden": !0,
                style: { paddingTop: (r / n) * 100 + "%" },
              })
            : "constrained" === t
            ? a.createElement(
                "div",
                { style: { maxWidth: n, display: "block" } },
                a.createElement("img", {
                  alt: "",
                  role: "presentation",
                  "aria-hidden": "true",
                  src:
                    "data:image/svg+xml;charset=utf-8,%3Csvg height='" +
                    r +
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
            n = o(e, d);
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(f, l({}, n)),
            t,
            null
          );
        },
        g = ["src", "srcSet", "loading", "alt", "shouldLoad"],
        h = ["fallback", "sources", "shouldLoad"],
        v = function (e) {
          var t = e.src,
            n = e.srcSet,
            r = e.loading,
            i = e.alt,
            s = void 0 === i ? "" : i,
            c = e.shouldLoad,
            u = o(e, g);
          return a.createElement(
            "img",
            l({}, u, {
              decoding: "async",
              loading: r,
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
            r = void 0 === n ? [] : n,
            i = e.shouldLoad,
            s = void 0 === i || i,
            c = o(e, h),
            u = c.sizes || (null == t ? void 0 : t.sizes),
            m = a.createElement(v, l({}, c, t, { sizes: u, shouldLoad: s }));
          return r.length
            ? a.createElement(
                "picture",
                null,
                r.map(function (e) {
                  var t = e.media,
                    n = e.srcSet,
                    r = e.type;
                  return a.createElement("source", {
                    key: t + "-" + r + "-" + n,
                    type: r,
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
        src: r.string.isRequired,
        alt: r.string.isRequired,
        sizes: r.string,
        srcSet: r.string,
        shouldLoad: r.bool,
      }),
        (b.displayName = "Picture"),
        (b.propTypes = {
          alt: r.string.isRequired,
          shouldLoad: r.bool,
          fallback: r.exact({
            src: r.string.isRequired,
            srcSet: r.string,
            sizes: r.string,
          }),
          sources: r.arrayOf(
            r.oneOfType([
              r.exact({
                media: r.string.isRequired,
                type: r.string,
                sizes: r.string,
                srcSet: r.string.isRequired,
              }),
              r.exact({
                media: r.string,
                type: r.string.isRequired,
                sizes: r.string,
                srcSet: r.string.isRequired,
              }),
            ])
          ),
        });
      var w = ["fallback"],
        y = function (e) {
          var t = e.fallback,
            n = o(e, w);
          return t
            ? a.createElement(
                b,
                l({}, n, { fallback: { src: t }, "aria-hidden": !0, alt: "" })
              )
            : a.createElement("div", l({}, n));
        };
      (y.displayName = "Placeholder"),
        (y.propTypes = {
          fallback: r.string,
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
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(b, l({}, e)),
          a.createElement(
            "noscript",
            null,
            a.createElement(b, l({}, e, { shouldLoad: !0 }))
          )
        );
      };
      (E.displayName = "MainImage"), (E.propTypes = b.propTypes);
      var C,
        x,
        L = function (e, t, n) {
          for (
            var a = arguments.length, r = new Array(a > 3 ? a - 3 : 0), l = 3;
            l < a;
            l++
          )
            r[l - 3] = arguments[l];
          return e.alt || "" === e.alt
            ? i().string.apply(i(), [e, t, n].concat(r))
            : new Error(
                'The "alt" prop is required in ' +
                  n +
                  '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html'
              );
        },
        V = { image: i().object.isRequired, alt: L },
        H = [
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
        N = ["style", "className"],
        M = new Set(),
        k = function (e) {
          var t = e.as,
            r = void 0 === t ? "div" : t,
            i = e.image,
            c = e.style,
            u = e.backgroundColor,
            m = e.className,
            d = e.class,
            f = e.onStartLoad,
            p = e.onLoad,
            g = e.onError,
            h = o(e, H),
            v = i.width,
            b = i.height,
            w = i.layout,
            y = (function (e, t, n) {
              var a = {},
                r = "gatsby-image-wrapper";
              return (
                "fixed" === n
                  ? ((a.width = e), (a.height = t))
                  : "constrained" === n &&
                    (r =
                      "gatsby-image-wrapper gatsby-image-wrapper-constrained"),
                { className: r, "data-gatsby-image-wrapper": "", style: a }
              );
            })(v, b, w),
            E = y.style,
            L = y.className,
            V = o(y, N),
            k = (0, a.useRef)(),
            Z = (0, a.useMemo)(
              function () {
                return JSON.stringify(i.images);
              },
              [i.images]
            );
          d && (m = d);
          var A = (function (e, t, n) {
            var a = "";
            return (
              "fullWidth" === e &&
                (a =
                  '<div aria-hidden="true" style="padding-top: ' +
                  (n / t) * 100 +
                  '%;"></div>'),
              "constrained" === e &&
                (a =
                  '<div style="max-width: ' +
                  t +
                  'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'' +
                  n +
                  "' width='" +
                  t +
                  "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),
              a
            );
          })(w, v, b);
          return (
            (0, a.useEffect)(
              function () {
                C ||
                  (C = Promise.all([n.e(774), n.e(217)])
                    .then(n.bind(n, 9217))
                    .then(function (e) {
                      var t = e.renderImageToString,
                        n = e.swapPlaceholderImage;
                      return (
                        (x = t),
                        { renderImageToString: t, swapPlaceholderImage: n }
                      );
                    }));
                var e,
                  t,
                  a = k.current.querySelector("[data-gatsby-image-ssr]");
                return a && s()
                  ? (a.complete
                      ? (null == f || f({ wasCached: !0 }),
                        null == p || p({ wasCached: !0 }),
                        setTimeout(function () {
                          a.removeAttribute("data-gatsby-image-ssr");
                        }, 0))
                      : (null == f || f({ wasCached: !0 }),
                        a.addEventListener("load", function e() {
                          a.removeEventListener("load", e),
                            null == p || p({ wasCached: !0 }),
                            setTimeout(function () {
                              a.removeAttribute("data-gatsby-image-ssr");
                            }, 0);
                        })),
                    void M.add(Z))
                  : x && M.has(Z)
                  ? void 0
                  : (C.then(function (n) {
                      var a = n.renderImageToString,
                        r = n.swapPlaceholderImage;
                      k.current &&
                        ((k.current.innerHTML = a(
                          l({ isLoading: !0, isLoaded: M.has(Z), image: i }, h)
                        )),
                        M.has(Z) ||
                          (e = requestAnimationFrame(function () {
                            k.current && (t = r(k.current, Z, M, c, f, p, g));
                          })));
                    }),
                    function () {
                      e && cancelAnimationFrame(e), t && t();
                    });
              },
              [i]
            ),
            (0, a.useLayoutEffect)(
              function () {
                M.has(Z) &&
                  x &&
                  ((k.current.innerHTML = x(
                    l({ isLoading: M.has(Z), isLoaded: M.has(Z), image: i }, h)
                  )),
                  null == f || f({ wasCached: !0 }),
                  null == p || p({ wasCached: !0 }));
              },
              [i]
            ),
            (0, a.createElement)(
              r,
              l({}, V, {
                style: l({}, E, c, { backgroundColor: u }),
                className: L + (m ? " " + m : ""),
                ref: k,
                dangerouslySetInnerHTML: { __html: A },
                suppressHydrationWarning: !0,
              })
            )
          );
        },
        Z = (0, a.memo)(function (e) {
          return e.image ? (0, a.createElement)(k, e) : null;
        });
      (Z.propTypes = V), (Z.displayName = "GatsbyImage");
      var A,
        O = [
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
        P = function (e, t) {
          for (
            var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2;
            r < n;
            r++
          )
            a[r - 2] = arguments[r];
          return "fullWidth" !== e.layout ||
            ("width" !== t && "height" !== t) ||
            !e[t]
            ? i().number.apply(i(), [e, t].concat(a))
            : new Error(
                '"' +
                  t +
                  '" ' +
                  e[t] +
                  " may not be passed when layout is fullWidth."
              );
        },
        j = new Set(["fixed", "fullWidth", "constrained"]),
        S = {
          src: i().string.isRequired,
          alt: L,
          width: P,
          height: P,
          sizes: i().string,
          layout: function (e) {
            if (void 0 !== e.layout && !j.has(e.layout))
              return new Error(
                "Invalid value " +
                  e.layout +
                  '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".'
              );
          },
        },
        T =
          ((A = Z),
          function (e) {
            var t = e.src,
              n = e.__imageData,
              r = e.__error,
              i = o(e, O);
            return (
              r && console.warn(r),
              n
                ? a.createElement(A, l({ image: n }, i))
                : (console.warn("Image not loaded", t), null)
            );
          });
      (T.displayName = "StaticImage"), (T.propTypes = S);
    },
    2939: function (e, t, n) {
      var a = n(3366),
        r = n(7294),
        i = ["children", "className"];
      t.Z = function (e) {
        var t = e.children,
          n = e.className,
          l = (0, a.Z)(e, i);
        return r.createElement(
          "div",
          Object.assign({}, l, {
            className:
              "h-fit w-fit p-3 rounded-lg shadow-md shadow-slate-400 " +
              (null != n ? n : ""),
          }),
          t
        );
      };
    },
    8117: function (e, t, n) {
      n.d(t, {
        xj: function () {
          return a;
        },
        y9: function () {
          return i;
        },
        zE: function () {
          return r;
        },
      });
      var a = [
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
        r = function (e, t, n) {
          return {
            name: e,
            selectedTemperature: t,
            getValue: function () {
              var e,
                a,
                r,
                i = n.find(function (e) {
                  return e.name == t;
                });
              return i
                ? ((e = 3 * (i.value - 30)),
                  (a = 0),
                  (r = 100),
                  Math.min(Math.max(e, a), r))
                : -1;
            },
          };
        },
        i = function (e, t, n) {
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
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(7294),
        r = n(2939);
      function i(e) {
        var t,
          n,
          i = e.iconPath,
          l = e.fanCurve,
          o = e.controlValueSuffix,
          s = e.children,
          c = l.getValue();
        return a.createElement(
          r.Z,
          { className: "bg-blue-500" },
          a.createElement(
            "div",
            { className: "flex flex-col text-white w-52" },
            a.createElement(
              "div",
              { className: "flex flex-row justify-center items-center" },
              ((n = i),
              a.createElement(
                "svg",
                { className: "w-12 h-12", viewBox: "0 0 24 24" },
                a.createElement("path", { fill: "currentColor", d: n })
              )),
              a.createElement(
                "div",
                { className: "border-b-2 ml-4 border-white w-full " },
                l.name
              )
            ),
            a.createElement("div", null, s),
            a.createElement(
              "div",
              { className: "mt-1 flex flex-row justify-between" },
              a.createElement(
                "div",
                null,
                a.createElement(
                  "span",
                  null,
                  (t = c) >= 0 && t <= 100 ? c.toFixed(1) : "-",
                  " %"
                ),
                " ",
                a.createElement("span", null, o)
              )
            )
          )
        );
      }
    },
    8436: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(5785),
        r = n(7294),
        i = n(2475),
        l = n(6337),
        o = n(8117),
        s = n(5720);
      function c(e) {
        var t,
          n,
          c = e.name,
          u = e.fanCurves,
          m = e.selectedFanCurvesDefault,
          d = (0, r.useState)(
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
          h = (0, r.useState)(o.xj[0]),
          v = h[0],
          b = h[1],
          w = (0, o.y9)(c, v, g),
          y =
            f.length > 0
              ? null !==
                  (t =
                    null ===
                      (n = g.find(function (e) {
                        return e.getValue() == w.getValue();
                      })) || void 0 === n
                      ? void 0
                      : n.name) && void 0 !== t
                ? t
                : "Average"
              : v.name;
        return r.createElement(
          s.Z,
          {
            iconPath: i.Z.svgPaths.mix,
            fanCurve: w,
            controlValueSuffix: " (" + y + ")",
          },
          r.createElement(
            l.Z,
            {
              onChange: function (e) {
                return b(o.xj[e.target.selectedIndex]);
              },
              value: w.selectedMixFunction.name,
              label: "Function",
            },
            o.xj.map(function (e) {
              return r.createElement(
                "option",
                { key: e.name, value: e.name },
                e.name
              );
            })
          ),
          r.createElement(
            l.Z,
            {
              value: "default",
              onChange: function (e) {
                return (
                  (t = e.target.selectedIndex),
                  (n = u[t - 1]),
                  void (
                    f.includes(n.name) ||
                    p(function (e) {
                      return [].concat((0, a.Z)(e), [n.name]);
                    })
                  )
                );
                var t, n;
              },
              label: "",
              className: "mt-1",
            },
            r.createElement(
              "option",
              { key: "-1", disabled: !0, value: "default" },
              "Add a fan curve..."
            ),
            u.map(function (e, t) {
              return r.createElement("option", { key: t }, e.name);
            })
          ),
          g.map(function (e, t) {
            return r.createElement(
              "div",
              { key: t, className: "text-sm my-2 ml-2" },
              r.createElement("span", { className: "mr-1" }, "○"),
              " ",
              r.createElement("span", null, e.name),
              r.createElement("span", null, " (", e.getValue(), " %)"),
              r.createElement(
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
    5900: function (e, t) {
      t.Z = function (e, t, n) {
        return { name: e, value: Math.round(Math.random() * (n - t) + t) };
      };
    },
    9122: function (e, t, n) {
      n.d(t, {
        J: function () {
          return r;
        },
      });
      var a = n(7294),
        r = function (e) {
          return a.createElement(
            "svg",
            { className: "w-8 h-8", viewBox: "0 0 24 24" },
            a.createElement("path", { fill: "currentColor", d: e })
          );
        };
    },
    4842: function (e, t, n) {
      var a = n(7294),
        r = n(1597),
        i = n(2475),
        l = n(8167),
        o = [
          { url: "/", title: "Home" },
          { url: "/about", title: "About" },
        ];
      t.Z = function (e) {
        var t = e.pageTitle,
          n = e.children,
          s = (0, l.l)(!1, 3e3),
          c = s[0],
          u = s[1];
        return a.createElement(
          "div",
          null,
          a.createElement(
            "nav",
            {
              className:
                "bg-blue-500 text-slate-50 flex shadow-slate-400 shadow-md",
            },
            a.createElement(
              "div",
              { className: "flex justify-center items-center m-1" },
              a.createElement(
                "svg",
                {
                  onMouseEnter: function () {
                    return u(!0);
                  },
                  className:
                    (c ? "animate-spin" : "") + " hover:animate-spin h-10 w-10",
                  viewBox: "0 0 24 24",
                },
                a.createElement("path", {
                  fill: "currentColor",
                  d: i.Z.svgPaths.fan,
                })
              ),
              a.createElement(
                "div",
                { className: "ml-2" },
                a.createElement(r.Link, { to: o[0].url }, "Fan Control"),
                " ",
                ">",
                " ",
                t
              )
            ),
            a.createElement(
              "ul",
              { className: "flex ml-auto justify-center items-center" },
              o.map(function (e) {
                return a.createElement(
                  "li",
                  { key: e.title, className: "p-3" },
                  a.createElement(r.Link, { to: e.url }, e.title)
                );
              })
            )
          ),
          a.createElement("main", { className: "p-5 bg-transparent" }, n),
          a.createElement("footer", {
            className: "bg-slate-200 flex justify-center items-center",
          })
        );
      };
    },
    6337: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(3366),
        r = n(7294),
        i = ["className", "label"];
      function l(e) {
        e.className, e.label;
        var t = (0, a.Z)(e, i);
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "label",
            { className: "mb-2 text-sm font-medium" },
            e.label
          ),
          r.createElement(
            "select",
            Object.assign(
              {
                className:
                  (e.className ? e.className : "") +
                  "\n        text-base\n        font-normal\n      text-white w-full bg-transparent \n      border-white border-spacing-1 border-b \n      focus:text-gray-700 focus:bg-white",
              },
              t
            )
          )
        );
      }
    },
    2475: function (e, t) {
      t.Z = {
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
        },
      };
    },
    8167: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return r;
        },
        l: function () {
          return i;
        },
      });
      var a = n(7294),
        r = function (e, t) {
          var n = a.useRef(function () {});
          a.useEffect(
            function () {
              n.current = t;
            },
            [t]
          ),
            a.useEffect(
              function () {
                var t = setInterval(function () {
                  n.current();
                }, e);
                return function () {
                  return clearInterval(t);
                };
              },
              [e]
            );
        },
        i = function (e, t) {
          var n = (0, a.useState)(e),
            r = n[0],
            i = n[1],
            l = (0, a.useRef)(void 0);
          return (
            (0, a.useEffect)(
              function () {
                return (
                  r &&
                    (l.current = setTimeout(function () {
                      i(!1);
                    }, t)),
                  function () {
                    clearTimeout(l.current);
                  }
                );
              },
              [r, t]
            ),
            [r, i]
          );
        };
    },
    8672: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Head: function () {
            return L;
          },
          default: function () {
            return x;
          },
        });
      var a = n(7294),
        r = n(4842),
        i = n(2939);
      function l(e, t, n) {
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
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var c = a.createContext({});
      function u(e) {
        var t = a.useContext(c);
        return a.useMemo(
          function () {
            return "function" == typeof e ? e(t) : s(s({}, t), e);
          },
          [t, e]
        );
      }
      function m(e) {
        var t = Object.assign({ p: "p" }, u(), e.components);
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(t.p, null, "No installation required."),
          "\n",
          a.createElement("br"),
          "\n",
          a.createElement(t.p, null, "Low on ressources, high on power.")
        );
      }
      var d = function (e) {
          void 0 === e && (e = {});
          var t = Object.assign({}, u(), e.components).wrapper;
          return t ? a.createElement(t, e, a.createElement(m, e)) : m(e);
        },
        f = n(3723),
        p = n(2475),
        g = n(9122),
        h = {
          githubPageUrl: "https://github.com/Rem0o/FanControl.Releases",
          directDownloadUrl:
            "https://github.com/Rem0o/FanControl.Releases/blob/master/FanControl.zip?raw=true",
        },
        v = n(8167),
        b = n(8436),
        w = n(5900),
        y = "Fan Control",
        E = function (e) {
          var t = e.icon,
            n = e.text;
          return a.createElement(
            "h1",
            { className: "flex m-1" },
            a.createElement(
              "svg",
              { className: "h-12 w-12", viewBox: "0 0 24 24" },
              a.createElement("path", { fill: "currentColor", d: t })
            ),
            a.createElement(
              "span",
              { className: "ml-5 text-2xl font-semibold" },
              n
            )
          );
        },
        C = function (e) {
          var t = e.background,
            n = e.textColor,
            r = e.text,
            l = e.icon,
            o = e.onClick;
          return a.createElement(
            "button",
            {
              onClick: function () {
                return o ? o() : null;
              },
            },
            a.createElement(
              i.Z,
              { className: t },
              a.createElement(
                "div",
                { className: "flex gap-2 w-36 " + n },
                (0, g.J)(l),
                a.createElement("span", { className: "m-auto" }, r)
              )
            )
          );
        },
        x = function () {
          var e = (0, v.l)(!0, 3e3),
            t = e[0],
            l = e[1],
            o = function () {
              return [
                (0, w.Z)("a", 40, 60),
                (0, w.Z)("b", 30, 70),
                (0, w.Z)("c", 26, 65),
              ];
            },
            s = (0, a.useState)(o()),
            c = s[0],
            u = s[1];
          (0, v.Y)(1e3, function () {
            u(o());
          });
          var m = [
            {
              name: "CPU -> Case fans",
              getValue: function () {
                return c[0].value;
              },
            },
            {
              name: "GPU -> Case fans",
              getValue: function () {
                return c[1].value;
              },
            },
            {
              name: "SSD -> Case fans",
              getValue: function () {
                return c[2].value;
              },
            },
          ];
          return a.createElement(
            r.Z,
            { pageTitle: y },
            a.createElement(
              "div",
              {
                className:
                  "flex flex-col place-items-center text-center gap-12",
              },
              a.createElement(
                "svg",
                {
                  onMouseEnter: function () {
                    return l(!0);
                  },
                  className:
                    (t ? "animate-spin" : "") + " hover:animate-spin h-36 w-36",
                  viewBox: "0 0 24 24",
                },
                a.createElement("path", {
                  fill: "currentColor",
                  d: p.Z.svgPaths.fan,
                })
              ),
              a.createElement(
                "h1",
                { className: "text-4xl max-w-lg font-bold" },
                "Fan Control is a highly focused fan controlling software for Windows."
              ),
              a.createElement(
                "div",
                { className: "text-2xl" },
                a.createElement(d, null)
              ),
              a.createElement(
                "div",
                { className: "flex gap-6" },
                a.createElement(C, {
                  onClick: function () {
                    return window.open(h.githubPageUrl);
                  },
                  background: "bg-gray-300 hover:bg-gray-400",
                  icon: p.Z.svgPaths.github,
                  textColor: "text-black",
                  text: "GitHub Page",
                }),
                a.createElement(C, {
                  onClick: function () {
                    return window.open(h.directDownloadUrl);
                  },
                  background: "bg-blue-500 hover:bg-blue-600",
                  icon: p.Z.svgPaths.download,
                  textColor: "text-white",
                  text: "Download",
                })
              ),
              a.createElement(f.S, {
                className: "rounded",
                width: 800,
                src: "./../images/main.png",
                alt: "Main interface",
                __imageData: n(9792),
              }),
              a.createElement(
                "div",
                null,
                a.createElement(
                  "div",
                  { className: "text-2xl font-semibold mb-4" },
                  "Features rapid fire"
                ),
                a.createElement(
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
                      r = e[1];
                    return a.createElement(
                      "div",
                      { key: t, className: "max-w-xs" },
                      a.createElement(
                        i.Z,
                        { className: "bg-white" },
                        a.createElement(
                          "div",
                          {
                            className:
                              "flex text-left items-center align-middle",
                          },
                          a.createElement(
                            "div",
                            { className: "mr-3" },
                            (0, g.J)(n)
                          ),
                          a.createElement("div", null, r)
                        )
                      )
                    );
                  })
                )
              ),
              a.createElement(
                "div",
                {
                  className:
                    "grid sm:grid-cols-1 md:grid-cols-2 gap-10 wrap text-left justify-center",
                },
                a.createElement(
                  "div",
                  { className: "max-w-sm" },
                  a.createElement(E, {
                    text: "It's all about the mix",
                    icon: p.Z.svgPaths.mix,
                  }),
                  a.createElement(
                    "p",
                    null,
                    "THE missing function that originates this whole project. Mix fan curves take the possibilities to a whole new level. Combine any type of fan curves together and apply a function like maximum or average to create a whole new control logic. Different curves bound to different temperature sensors, mixed together, your case fans never asked for better. ",
                    a.createElement("br", null),
                    a.createElement("br", null),
                    " ",
                    a.createElement("b", null, "Try it out on the demo card!")
                  )
                ),
                a.createElement(
                  "div",
                  { className: "m-auto" },
                  a.createElement(b.Z, {
                    name: "Demo Case Fans",
                    fanCurves: m,
                    selectedFanCurvesDefault: m.slice(0, 2).map(function (e) {
                      return e.name;
                    }),
                  })
                ),
                a.createElement(
                  "div",
                  { className: "max-w-sm" },
                  a.createElement(E, {
                    text: "Tinkerers rejoice",
                    icon: p.Z.svgPaths.parameters,
                  }),
                  a.createElement(
                    "p",
                    null,
                    "Fan Control has ALL the parameters. Response time, hysteresis, hysteresis direction, step up, step down... Fine tune to your hearth's desire. Control your fan's start and stopping logic, for smooth 0 RPM operation ",
                    a.createElement("i", null, "(when supported)"),
                    "."
                  )
                ),
                a.createElement(
                  "div",
                  { className: "max-w-sm" },
                  a.createElement(E, {
                    text: "Open through plugins",
                    icon: p.Z.svgPaths.plugin,
                  }),
                  a.createElement(
                    "p",
                    null,
                    "Want to add more sensors and controls from a third party? No problem! Fan Control has a simple plugin system with .NET that allow any third party developper to add temperature, speed or control sensors. Installing is as easy as dropping a dll in the plugin folder, that's it."
                  )
                )
              )
            )
          );
        },
        L = function () {
          return a.createElement("title", null, y);
        };
    },
    3366: function (e, t, n) {
      function a(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++)
          (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
    },
    9792: function (e) {
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/97987d69b274633bb6a4744cd8a78c65/d312b/main.png","srcSet":"/static/97987d69b274633bb6a4744cd8a78c65/1dc94/main.png 200w,\\n/static/97987d69b274633bb6a4744cd8a78c65/512db/main.png 400w,\\n/static/97987d69b274633bb6a4744cd8a78c65/d312b/main.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/97987d69b274633bb6a4744cd8a78c65/6d700/main.webp 200w,\\n/static/97987d69b274633bb6a4744cd8a78c65/f661d/main.webp 400w,\\n/static/97987d69b274633bb6a4744cd8a78c65/20ae3/main.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":565}'
      );
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-0eae6f5475cf38ab58c8.js.map
