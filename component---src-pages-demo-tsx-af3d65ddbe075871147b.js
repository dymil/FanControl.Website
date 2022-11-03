"use strict";
(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [514],
  {
    2939: function (e, t, n) {
      var a = n(3366),
        r = n(7294),
        l = ["children", "className"];
      t.Z = function (e) {
        var t = e.children,
          n = e.className,
          c = (0, a.Z)(e, l);
        return r.createElement(
          "div",
          Object.assign({}, c, {
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
          return l;
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
                l = n.find(function (e) {
                  return e.name == t;
                });
              return l
                ? ((e = 3 * (l.value - 30)),
                  (a = 0),
                  (r = 100),
                  Math.min(Math.max(e, a), r))
                : -1;
            },
          };
        },
        l = function (e, t, n) {
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
          return l;
        },
      });
      var a = n(7294),
        r = n(2939);
      function l(e) {
        var t,
          n,
          l = e.iconPath,
          c = e.fanCurve,
          u = e.controlValueSuffix,
          i = e.children,
          m = c.getValue();
        return a.createElement(
          r.Z,
          { className: "bg-blue-500" },
          a.createElement(
            "div",
            { className: "flex flex-col text-white w-52" },
            a.createElement(
              "div",
              { className: "flex flex-row justify-center items-center" },
              ((n = l),
              a.createElement(
                "svg",
                { className: "w-12 h-12", viewBox: "0 0 24 24" },
                a.createElement("path", { fill: "currentColor", d: n })
              )),
              a.createElement(
                "div",
                { className: "border-b-2 ml-4 border-white w-full " },
                c.name
              )
            ),
            a.createElement("div", null, i),
            a.createElement(
              "div",
              { className: "mt-1 flex flex-row justify-between" },
              a.createElement(
                "div",
                null,
                a.createElement(
                  "span",
                  null,
                  (t = m) >= 0 && t <= 100 ? m.toFixed(1) : "-",
                  " %"
                ),
                " ",
                a.createElement("span", null, u)
              )
            )
          )
        );
      }
    },
    8436: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = n(5785),
        r = n(7294),
        l = n(2475),
        c = n(6337),
        u = n(8117),
        i = n(5720);
      function m(e) {
        var t,
          n,
          m = e.name,
          o = e.fanCurves,
          s = e.selectedFanCurvesDefault,
          f = (0, r.useState)(
            null != s
              ? s
              : o.map(function (e) {
                  return e.name;
                })
          ),
          d = f[0],
          v = f[1],
          V = o.filter(function (e) {
            return d.includes(e.name);
          }),
          C = (0, r.useState)(u.xj[0]),
          E = C[0],
          H = C[1],
          x = (0, u.y9)(m, E, V),
          L =
            d.length > 0
              ? null !==
                  (t =
                    null ===
                      (n = V.find(function (e) {
                        return e.getValue() == x.getValue();
                      })) || void 0 === n
                      ? void 0
                      : n.name) && void 0 !== t
                ? t
                : "Average"
              : E.name;
        return r.createElement(
          i.Z,
          {
            iconPath: l.Z.svgPaths.mix,
            fanCurve: x,
            controlValueSuffix: " (" + L + ")",
          },
          r.createElement(
            c.Z,
            {
              onChange: function (e) {
                return H(u.xj[e.target.selectedIndex]);
              },
              value: x.selectedMixFunction.name,
              label: "Function",
            },
            u.xj.map(function (e) {
              return r.createElement(
                "option",
                { key: e.name, value: e.name },
                e.name
              );
            })
          ),
          r.createElement(
            c.Z,
            {
              value: "default",
              onChange: function (e) {
                return (
                  (t = e.target.selectedIndex),
                  (n = o[t - 1]),
                  void (
                    d.includes(n.name) ||
                    v(function (e) {
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
            o.map(function (e, t) {
              return r.createElement("option", { key: t }, e.name);
            })
          ),
          V.map(function (e, t) {
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
                    return v(
                      d.filter(function (t) {
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
    4842: function (e, t, n) {
      var a = n(7294),
        r = n(1597),
        l = n(2475),
        c = n(8167),
        u = [
          { url: "/", title: "Home" },
          { url: "/about", title: "About" },
        ];
      t.Z = function (e) {
        var t,
          n = e.pageTitle,
          i = e.children,
          m = (0, c.l)(!1, 3e3),
          o = m[0],
          s = m[1];
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
                    return s(!0);
                  },
                  className:
                    (o ? "animate-spin" : "") + " hover:animate-spin h-10 w-10",
                  viewBox: "0 0 24 24",
                },
                a.createElement("path", {
                  fill: "currentColor",
                  d: l.Z.svgPaths.fan,
                })
              ),
              a.createElement(
                "div",
                { className: "ml-2" },
                a.createElement(r.Link, { to: u[0].url }, "Fan Control"),
                " ",
                (t = n) ? "> " + t : ""
              )
            ),
            a.createElement(
              "ul",
              { className: "flex ml-auto justify-center items-center" },
              u.map(function (e) {
                return a.createElement(
                  "li",
                  { key: e.title, className: "p-3" },
                  a.createElement(r.Link, { to: e.url }, e.title)
                );
              })
            )
          ),
          a.createElement("main", { className: "p-5 bg-transparent" }, i),
          a.createElement("footer", {
            className: "bg-slate-200 flex justify-center items-center",
          })
        );
      };
    },
    6337: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(3366),
        r = n(7294),
        l = ["className", "label"];
      function c(e) {
        e.className, e.label;
        var t = (0, a.Z)(e, l);
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
          backend:
            "M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z",
        },
      };
    },
    8167: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return r;
        },
        l: function () {
          return l;
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
        l = function (e, t) {
          var n = (0, a.useState)(e),
            r = n[0],
            l = n[1],
            c = (0, a.useRef)(void 0);
          return (
            (0, a.useEffect)(
              function () {
                return (
                  r &&
                    (c.current = setTimeout(function () {
                      l(!1);
                    }, t)),
                  function () {
                    clearTimeout(c.current);
                  }
                );
              },
              [r, t]
            ),
            [r, l]
          );
        };
    },
    1517: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Head: function () {
            return p;
          },
          default: function () {
            return b;
          },
        });
      var a = n(5785),
        r = n(7294),
        l = n(4842),
        c = n(2939);
      function u(e) {
        var t = e.checkedState,
          n = e.text,
          a = t[0],
          l = t[1],
          c = function () {
            l(!a);
          };
        return r.createElement(
          "label",
          {
            className:
              "mr-1 inline-flex py-1 relative cursor-pointer self-center",
          },
          r.createElement("input", {
            type: "checkbox",
            className: "sr-only peer",
            checked: a,
            readOnly: !0,
          }),
          r.createElement("div", {
            onClick: c,
            className:
              "w-9 h-4 bg-gray-200 rounded-full peer peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-500",
          }),
          r.createElement(
            "span",
            { onClick: c, className: "ml-2 text-sm font-medium select-none" },
            n
          )
        );
      }
      var i = n(6337),
        m = r.createElement(
          "svg",
          { className: "w-12 h-12", viewBox: "0 0 24 24" },
          r.createElement("path", {
            fill: "currentColor",
            d: "M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z",
          })
        ),
        o = function (e) {
          var t,
            n,
            a = e.name,
            l = e.availableFanCurves,
            o = (0, r.useState)(!1),
            s = o[0],
            f = (o[1], (0, r.useState)("")),
            d = f[0],
            v = f[1];
          return r.createElement(
            c.Z,
            { className: "bg-slate-400" },
            r.createElement(
              "div",
              { className: "flex flex-col text-white w-52" },
              r.createElement(
                "div",
                { className: "flex flex-row justify-center items-center" },
                m,
                r.createElement(
                  "div",
                  { className: "border-b-2 ml-4 border-white w-full " },
                  a
                )
              ),
              r.createElement(
                "div",
                { className: "mt-1 flex flex-row justify-between" },
                r.createElement(u, { checkedState: o, text: "" }),
                r.createElement(
                  "div",
                  { className: "w-full" },
                  r.createElement(
                    i.Z,
                    {
                      label: "Select a fan curve",
                      value: d,
                      onChange: function (e) {
                        return v(l[e.target.options.selectedIndex - 1].name);
                      },
                      disabled: !s,
                    },
                    r.createElement("option", { key: "", disabled: !0 }, ""),
                    l.map(function (e, t) {
                      return r.createElement("option", { key: t }, e.name);
                    })
                  )
                )
              ),
              r.createElement(
                "div",
                { className: "mt-1 flex flex-row justify-between" },
                r.createElement(
                  "div",
                  null,
                  s &&
                    null !==
                      (t =
                        null ===
                          (n = l.find(function (e) {
                            return e.name == d;
                          })) || void 0 === n
                          ? void 0
                          : n.getValue()) &&
                    void 0 !== t
                    ? t
                    : "-",
                  " ",
                  "%"
                )
              )
            )
          );
        },
        s = r.createElement(
          "svg",
          { className: "w-12 h-12", viewBox: "0 0 24 24" },
          r.createElement("path", {
            fill: "currentColor",
            d: "M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",
          })
        ),
        f = function (e) {
          return r.createElement(
            c.Z,
            { className: "bg-slate-400" },
            r.createElement(
              "div",
              { className: "flex flex-col text-white w-52" },
              r.createElement(
                "div",
                { className: "flex flex-row justify-center items-center" },
                s,
                r.createElement(
                  "div",
                  { className: "border-b-2 ml-4 border-white w-full " },
                  e.name
                )
              ),
              r.createElement(
                "div",
                { className: "mt-1 flex flex-row justify-between" },
                r.createElement("div", null, e.value, " deg C")
              )
            )
          );
        },
        d = n(5900),
        v = n(8117),
        V = n(5720),
        C = n(2475),
        E = n(8167),
        H = n(8436),
        x = "Demo",
        L = function () {
          return [(0, d.Z)("CPU", 30, 60), (0, d.Z)("GPU", 35, 85)];
        },
        b = function () {
          var e = (0, r.useState)(L()),
            t = e[0],
            n = e[1];
          (0, E.Y)(1e3, function () {
            var e = L();
            n(e);
          });
          var c = (function (e) {
              return [
                (0, v.zE)("Linear CPU", "CPU", e),
                (0, v.zE)("Linear GPU", "GPU", e),
              ];
            })(t),
            u = (0, v.y9)("Mix", v.xj[0], c),
            i = [].concat((0, a.Z)(c), [u]);
          return r.createElement(
            l.Z,
            { pageTitle: x },
            r.createElement(
              "div",
              { className: "flex gap-3 w-full flex-wrap flex-col " },
              "Controls",
              r.createElement(
                "div",
                { className: "flex gap-3 flex-wrap" },
                r.createElement(o, {
                  name: "Front Fan",
                  availableFanCurves: i,
                }),
                r.createElement(o, { name: "Top Fan", availableFanCurves: i })
              ),
              "Temperatures",
              r.createElement(
                "div",
                { className: "flex gap-3 flex-wrap" },
                t.map(function (e, t) {
                  return r.createElement("div", { key: t }, f(e));
                })
              ),
              "Fan Curves",
              r.createElement(
                "div",
                { className: "flex gap-3 flex-wrap" },
                c.map(function (e, t) {
                  return r.createElement(
                    "div",
                    { key: t },
                    (function (e) {
                      return r.createElement(V.Z, {
                        iconPath: C.Z.svgPaths.linear,
                        fanCurve: e,
                      });
                    })(e)
                  );
                }),
                r.createElement(H.Z, { name: "Mix", fanCurves: c })
              )
            )
          );
        },
        p = function () {
          return r.createElement("title", null, x);
        };
    },
    3366: function (e, t, n) {
      function a(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = {},
          l = Object.keys(e);
        for (a = 0; a < l.length; a++)
          (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
    },
  },
]);
//# sourceMappingURL=component---src-pages-demo-tsx-af3d65ddbe075871147b.js.map
