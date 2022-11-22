"use strict";
(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [514],
  {
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
          f = e.selectedFanCurvesDefault,
          s = (0, r.useState)(
            null != f
              ? f
              : o.map(function (e) {
                  return e.name;
                })
          ),
          d = s[0],
          v = s[1],
          E = o.filter(function (e) {
            return d.includes(e.name);
          }),
          x = (0, r.useState)(u.xj[0]),
          b = x[0],
          p = x[1],
          g = (0, u.y9)(m, b, E),
          h =
            d.length > 0
              ? null !==
                  (t =
                    null ===
                      (n = E.find(function (e) {
                        return e.getValue() == g.getValue();
                      })) || void 0 === n
                      ? void 0
                      : n.name) && void 0 !== t
                ? t
                : "Average"
              : b.name;
        return r.createElement(
          i.Z,
          {
            iconPath: l.Z.svgPaths.mix,
            fanCurve: g,
            controlValueSuffix: " (" + h + ")",
          },
          r.createElement(
            c.Z,
            {
              onChange: function (e) {
                return p(u.xj[e.target.selectedIndex]);
              },
              value: g.selectedMixFunction.name,
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
          E.map(function (e, t) {
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
          return u;
        },
      });
      var a = n(3366),
        r = n(7294),
        l = n(9940),
        c = ["className", "label"];
      function u(e) {
        var t = e.className,
          n = (e.label, (0, a.Z)(e, c));
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
                className: (0, l.m)(
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
    1517: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Head: function () {
            return C;
          },
          default: function () {
            return w;
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
            f = o[0],
            s = (o[1], (0, r.useState)("")),
            d = s[0],
            v = s[1];
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
                      disabled: !f,
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
                  f &&
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
        f = r.createElement(
          "svg",
          { className: "w-12 h-12", viewBox: "0 0 24 24" },
          r.createElement("path", {
            fill: "currentColor",
            d: "M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z",
          })
        ),
        s = function (e) {
          return r.createElement(
            c.Z,
            { className: "bg-slate-400" },
            r.createElement(
              "div",
              { className: "flex flex-col text-white w-52" },
              r.createElement(
                "div",
                { className: "flex flex-row justify-center items-center" },
                f,
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
        E = n(5720),
        x = n(2475),
        b = n(4419),
        p = n(8436),
        g = "Demo",
        h = function () {
          return [(0, d.f)("CPU", 30, 60), (0, d.f)("GPU", 35, 85)];
        },
        w = function () {
          var e = (0, r.useState)(h()),
            t = e[0],
            n = e[1];
          (0, b.Y)(1e3, function () {
            var e = h();
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
            { pageTitle: g },
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
                  return r.createElement("div", { key: t }, s(e));
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
                      return r.createElement(E.Z, {
                        iconPath: x.Z.svgPaths.linear,
                        fanCurve: e,
                      });
                    })(e)
                  );
                }),
                r.createElement(p.Z, { name: "Mix", fanCurves: c })
              )
            )
          );
        },
        C = function () {
          return r.createElement("title", null, g);
        };
    },
  },
]);
//# sourceMappingURL=component---src-pages-demo-tsx-faa93885bbf8f0109cf5.js.map
