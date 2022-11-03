"use strict";
(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [962],
  {
    4842: function (e, n, t) {
      var u = t(7294),
        r = t(1082),
        l = t(2475),
        c = t(8167),
        i = [
          { url: "/", title: "Home" },
          { url: "/about", title: "About" },
        ];
      n.Z = function (e) {
        var n,
          t = e.pageTitle,
          a = e.children,
          o = (0, c.l)(!1, 3e3),
          s = o[0],
          V = o[1];
        return u.createElement(
          "div",
          null,
          u.createElement(
            "nav",
            {
              className:
                "bg-blue-500 text-slate-50 flex shadow-slate-400 shadow-md",
            },
            u.createElement(
              "div",
              { className: "flex justify-center items-center m-1" },
              u.createElement(
                "svg",
                {
                  onMouseEnter: function () {
                    return V(!0);
                  },
                  className:
                    (s ? "animate-spin" : "") + " hover:animate-spin h-10 w-10",
                  viewBox: "0 0 24 24",
                },
                u.createElement("path", {
                  fill: "currentColor",
                  d: l.Z.svgPaths.fan,
                })
              ),
              u.createElement(
                "div",
                { className: "ml-2" },
                u.createElement(r.Link, { to: i[0].url }, "Fan Control"),
                " ",
                (n = t) ? "> " + n : ""
              )
            ),
            u.createElement(
              "ul",
              { className: "flex ml-auto justify-center items-center" },
              i.map(function (e) {
                return u.createElement(
                  "li",
                  { key: e.title, className: "p-3 hover:bg-blue-600" },
                  u.createElement(r.Link, { to: e.url }, e.title)
                );
              })
            )
          ),
          u.createElement("main", { className: "bg-transparent" }, a),
          u.createElement("footer", {
            className: "bg-slate-200 flex justify-center items-center",
          })
        );
      };
    },
    2475: function (e, n) {
      n.Z = {
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
    8167: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return r;
        },
        l: function () {
          return l;
        },
      });
      var u = t(7294),
        r = function (e, n) {
          var t = u.useRef(function () {});
          u.useEffect(
            function () {
              t.current = n;
            },
            [n]
          ),
            u.useEffect(
              function () {
                var n = setInterval(function () {
                  t.current();
                }, e);
                return function () {
                  return clearInterval(n);
                };
              },
              [e]
            );
        },
        l = function (e, n) {
          var t = (0, u.useState)(e),
            r = t[0],
            l = t[1],
            c = (0, u.useRef)(void 0);
          return (
            (0, u.useEffect)(
              function () {
                return (
                  r &&
                    (c.current = setTimeout(function () {
                      l(!1);
                    }, n)),
                  function () {
                    clearTimeout(c.current);
                  }
                );
              },
              [r, n]
            ),
            [r, l]
          );
        };
    },
    5835: function (e, n, t) {
      t.r(n),
        t.d(n, {
          Head: function () {
            return c;
          },
        });
      var u = t(7294),
        r = t(4842),
        l = [
          {
            key: "Linear",
            render: function () {
              return u.createElement(
                u.Fragment,
                null,
                "Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire. Allo juju ceci est une courbe linéaire.",
                " "
              );
            },
          },
          {
            key: "Graph",
            render: function () {
              return u.createElement(
                u.Fragment,
                null,
                "Ceci est une autre section"
              );
            },
          },
        ];
      n.default = function () {
        var e = (0, u.useState)(l[0]),
          n = e[0],
          t = e[1];
        return u.createElement(
          r.Z,
          { pageTitle: "Docs" },
          u.createElement(
            "div",
            { className: "flex max-w-5xl m-auto p-5" },
            u.createElement(
              "div",
              { className: "flex  border-r-2 border-slate-200" },
              u.createElement(
                "ul",
                { className: " mr-5" },
                l.map(function (e) {
                  return (function (e, n) {
                    return u.createElement(
                      "li",
                      {
                        key: e.key,
                        className:
                          "cursor-pointer rounded hover:bg-slate-200 p-1",
                        onClick: function () {
                          return n(e);
                        },
                      },
                      e.key
                    );
                  })(e, t);
                })
              )
            ),
            u.createElement(
              "div",
              { className: "ml-5" },
              u.createElement(
                "h3",
                { className: "text-2xl font-semibold mb-2" },
                n.key
              ),
              n.render()
            )
          )
        );
      };
      var c = function () {
        return u.createElement("title", null, "Docs");
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-docs-tsx-148389ffebb55d48df7f.js.map
