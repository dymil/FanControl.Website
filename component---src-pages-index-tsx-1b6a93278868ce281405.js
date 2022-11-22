"use strict";
(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [691],
  {
    3723: function (e, t, n) {
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
          return A;
        },
        _: function () {
          return l;
        },
        a: function () {
          return o;
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
        r = (n(2369), n(5697)),
        i = n.n(r);
      function o() {
        return (
          (o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          o.apply(this, arguments)
        );
      }
      function l(e, t) {
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
          o({}, n, {
            loading: a,
            shouldLoad: e,
            "data-main-image": "",
            style: o({}, r, { opacity: t ? 1 : 0 }),
          })
        );
      }
      function u(e, t, n, a, r, i, l, s) {
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
          l && (c.objectFit = l),
          s && (c.objectPosition = s);
        var u = o({}, e, {
          "aria-hidden": !0,
          "data-placeholder-image": "",
          style: o(
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
            n = l(e, d);
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(f, o({}, n)),
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
            u = l(e, g);
          return a.createElement(
            "img",
            o({}, u, {
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
            c = l(e, h),
            u = c.sizes || (null == t ? void 0 : t.sizes),
            m = a.createElement(v, o({}, c, t, { sizes: u, shouldLoad: s }));
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
      var y = ["fallback"],
        w = function (e) {
          var t = e.fallback,
            n = l(e, y);
          return t
            ? a.createElement(
                b,
                o({}, n, { fallback: { src: t }, "aria-hidden": !0, alt: "" })
              )
            : a.createElement("div", o({}, n));
        };
      (w.displayName = "Placeholder"),
        (w.propTypes = {
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
          a.createElement(b, o({}, e)),
          a.createElement(
            "noscript",
            null,
            a.createElement(b, o({}, e, { shouldLoad: !0 }))
          )
        );
      };
      (E.displayName = "MainImage"), (E.propTypes = b.propTypes);
      var x,
        C,
        N = function (e, t, n) {
          for (
            var a = arguments.length, r = new Array(a > 3 ? a - 3 : 0), o = 3;
            o < a;
            o++
          )
            r[o - 3] = arguments[o];
          return e.alt || "" === e.alt
            ? i().string.apply(i(), [e, t, n].concat(r))
            : new Error(
                'The "alt" prop is required in ' +
                  n +
                  '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html'
              );
        },
        k = { image: i().object.isRequired, alt: N },
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
        S = new Set(),
        j = function (e) {
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
            h = l(e, O),
            v = i.width,
            b = i.height,
            y = i.layout,
            w = (function (e, t, n) {
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
            })(v, b, y),
            E = w.style,
            N = w.className,
            k = l(w, P),
            j = (0, a.useRef)(),
            L = (0, a.useMemo)(
              function () {
                return JSON.stringify(i.images);
              },
              [i.images]
            );
          d && (m = d);
          var Z = (function (e, t, n) {
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
          })(y, v, b);
          return (
            (0, a.useEffect)(
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
                  a = j.current.querySelector("[data-gatsby-image-ssr]");
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
                    void S.add(L))
                  : C && S.has(L)
                  ? void 0
                  : (x.then(function (n) {
                      var a = n.renderImageToString,
                        r = n.swapPlaceholderImage;
                      j.current &&
                        ((j.current.innerHTML = a(
                          o({ isLoading: !0, isLoaded: S.has(L), image: i }, h)
                        )),
                        S.has(L) ||
                          (e = requestAnimationFrame(function () {
                            j.current && (t = r(j.current, L, S, c, f, p, g));
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
                S.has(L) &&
                  C &&
                  ((j.current.innerHTML = C(
                    o({ isLoading: S.has(L), isLoaded: S.has(L), image: i }, h)
                  )),
                  null == f || f({ wasCached: !0 }),
                  null == p || p({ wasCached: !0 }));
              },
              [i]
            ),
            (0, a.createElement)(
              r,
              o({}, k, {
                style: o({}, E, c, { backgroundColor: u }),
                className: N + (m ? " " + m : ""),
                ref: j,
                dangerouslySetInnerHTML: { __html: Z },
                suppressHydrationWarning: !0,
              })
            )
          );
        },
        L = (0, a.memo)(function (e) {
          return e.image ? (0, a.createElement)(j, e) : null;
        });
      (L.propTypes = k), (L.displayName = "GatsbyImage");
      var Z,
        T = [
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
        M = function (e, t) {
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
        F = new Set(["fixed", "fullWidth", "constrained"]),
        I = {
          src: i().string.isRequired,
          alt: N,
          width: M,
          height: M,
          sizes: i().string,
          layout: function (e) {
            if (void 0 !== e.layout && !F.has(e.layout))
              return new Error(
                "Invalid value " +
                  e.layout +
                  '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".'
              );
          },
        },
        A =
          ((Z = L),
          function (e) {
            var t = e.src,
              n = e.__imageData,
              r = e.__error,
              i = l(e, T);
            return (
              r && console.warn(r),
              n
                ? a.createElement(Z, o({ image: n }, i))
                : (console.warn("Image not loaded", t), null)
            );
          });
      (A.displayName = "StaticImage"), (A.propTypes = I);
    },
    2369: function (e) {
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
    2939: function (e, t, n) {
      var a = n(3366),
        r = n(7294),
        i = n(9940),
        o = ["children", "className"];
      t.Z = function (e) {
        var t = e.children,
          n = e.className,
          l = (0, a.Z)(e, o);
        return r.createElement(
          "div",
          Object.assign({}, l, {
            className: (0, i.m)(
              "h-fit w-fit p-3 rounded-lg shadow-md shadow-slate-400",
              n
            ),
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
          o = e.fanCurve,
          l = e.controlValueSuffix,
          s = e.children,
          c = o.getValue();
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
                o.name
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
                a.createElement("span", null, l)
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
        o = n(6337),
        l = n(8117),
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
          h = (0, r.useState)(l.xj[0]),
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
        return r.createElement(
          s.Z,
          {
            iconPath: i.Z.svgPaths.mix,
            fanCurve: y,
            controlValueSuffix: " (" + w + ")",
          },
          r.createElement(
            o.Z,
            {
              onChange: function (e) {
                return b(l.xj[e.target.selectedIndex]);
              },
              value: y.selectedMixFunction.name,
              label: "Function",
            },
            l.xj.map(function (e) {
              return r.createElement(
                "option",
                { key: e.name, value: e.name },
                e.name
              );
            })
          ),
          r.createElement(
            o.Z,
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
    5900: function (e, t, n) {
      function a(e, t, n) {
        return { name: e, value: Math.round(Math.random() * (n - t) + t) };
      }
      function r(e, t) {
        return { name: e, value: t };
      }
      n.d(t, {
        T: function () {
          return r;
        },
        f: function () {
          return a;
        },
      });
    },
    6337: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(3366),
        r = n(7294),
        i = n(9940),
        o = ["className", "label"];
      function l(e) {
        var t = e.className,
          n = (e.label, (0, a.Z)(e, o));
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
                className: (0, i.m)(
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
    5815: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Head: function () {
            return S;
          },
          default: function () {
            return P;
          },
        });
      var a = n(7294),
        r = n(4842),
        i = n(2939);
      function o(e, t, n) {
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
            ? l(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
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
        g = function (e) {
          return a.createElement(
            "svg",
            { className: "w-8 h-8", viewBox: "0 0 24 24" },
            a.createElement("path", { fill: "currentColor", d: e })
          );
        },
        h = n(880),
        v = n(4419),
        b = n(8436),
        y = n(5900),
        w = n(6464),
        E = n(757),
        x = function (e) {
          var t = e.icon,
            n = e.text;
          return a.createElement(
            "h1",
            { className: "flex m-1 text-left" },
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
            o = e.icon,
            l = e.onClick;
          return a.createElement(
            "button",
            {
              onClick: function () {
                return l ? l() : null;
              },
            },
            a.createElement(
              i.Z,
              { className: t },
              a.createElement(
                "div",
                { className: "flex gap-2 w-40 " + n },
                g(o),
                a.createElement("span", { className: "m-auto" }, r)
              )
            )
          );
        },
        N = function () {
          var e = (0, a.useState)(0),
            t = e[0],
            n = e[1];
          (0, a.useEffect)(function () {
            fetch(h.Z.urls.versionJsonUrl)
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                return n(e.Number);
              });
          }, []);
          var r = "Download";
          return (
            t > 0 && (r += " V" + t),
            a.createElement(
              E.M,
              { href: h.Z.urls.directDownloadUrl },
              a.createElement(C, {
                background: "bg-blue-500 hover:bg-blue-600",
                icon: p.Z.svgPaths.download,
                textColor: "text-white",
                text: r,
              })
            )
          );
        },
        k = function () {
          return a.createElement(
            E.M,
            { href: h.Z.urls.githubPageUrl },
            a.createElement(C, {
              background: "bg-gray-300 hover:bg-gray-400",
              icon: p.Z.svgPaths.github,
              textColor: "text-black",
              text: "GitHub Page",
            })
          );
        },
        O = function () {
          var e = (0, a.useState)([
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
          var r = [
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
          return a.createElement(b.Z, {
            name: "Demo Case Fans",
            fanCurves: r,
            selectedFanCurvesDefault: r.slice(0, 1).map(function (e) {
              return e.name;
            }),
          });
        },
        P = function () {
          var e = (0, v.l)(!0, 3e3),
            t = e[0],
            o = e[1];
          return a.createElement(
            r.Z,
            null,
            a.createElement(
              "div",
              {
                className:
                  "flex flex-col place-items-center text-center gap-12 p-5",
              },
              a.createElement(
                "svg",
                {
                  onMouseEnter: function () {
                    return o(!0);
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
                a.createElement(k, null),
                a.createElement(N, null)
              ),
              a.createElement(
                i.Z,
                { className: "p-0" },
                a.createElement(f.S, {
                  className: "rounded",
                  width: 800,
                  src: "./../images/main.png",
                  alt: "Main interface",
                  __imageData: n(9792),
                })
              ),
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
                          a.createElement("div", { className: "mr-3" }, g(n)),
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
                    "grid sm:grid-cols-1 md:grid-cols-2 gap-10 wrap text-justify justify-center",
                },
                a.createElement(
                  "div",
                  { className: "max-w-sm" },
                  a.createElement(x, {
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
                  a.createElement(O, null)
                ),
                a.createElement(
                  "div",
                  { className: "max-w-sm" },
                  a.createElement(x, {
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
                  a.createElement(x, {
                    text: "Expansion through plugins",
                    icon: p.Z.svgPaths.plugin,
                  }),
                  a.createElement(
                    "p",
                    null,
                    "Want to add more sensors and controls from a third party? No problem! Fan Control has a simple",
                    " ",
                    a.createElement(
                      w.n,
                      { href: h.Z.urls.pluginUrl },
                      "plugin"
                    ),
                    " ",
                    "system with .NET that allow any third party developper to add temperature, speed or control sensors. Installing is as easy as dropping a dll in the plugin folder, that's it."
                  )
                ),
                a.createElement(
                  "div",
                  { className: "max-w-sm" },
                  a.createElement(x, {
                    text: "Open source backend",
                    icon: p.Z.svgPaths.backend,
                  }),
                  a.createElement(
                    "p",
                    null,
                    "Fan Control backend is mainly based on",
                    " ",
                    a.createElement(
                      w.d,
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
        S = function () {
          return a.createElement("title", null, "Fan Control");
        };
    },
    9792: function (e) {
      e.exports = JSON.parse(
        '{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/466fa929e3c8624c0001863c50ab03e7/7c471/main.png","srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/4715e/main.png 200w,\\n/static/466fa929e3c8624c0001863c50ab03e7/3b96c/main.png 400w,\\n/static/466fa929e3c8624c0001863c50ab03e7/7c471/main.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/466fa929e3c8624c0001863c50ab03e7/f42d9/main.webp 200w,\\n/static/466fa929e3c8624c0001863c50ab03e7/1e622/main.webp 400w,\\n/static/466fa929e3c8624c0001863c50ab03e7/53c1e/main.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":480}'
      );
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-1b6a93278868ce281405.js.map
