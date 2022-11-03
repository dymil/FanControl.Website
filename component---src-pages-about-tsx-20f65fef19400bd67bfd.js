(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [49],
  {
    757: function (e, t, r) {
      "use strict";
      var n = r(4836);
      t.M = void 0;
      var a = n(r(434)),
        l = n(r(7071)),
        o = n(r(7294)),
        s = n(r(5697)),
        i = ["children"],
        c = o.default.forwardRef(function (e, t) {
          var r = e.children,
            n = (0, l.default)(e, i);
          return o.default.createElement(
            "a",
            (0, a.default)({ ref: t }, n, {
              onClick: function (e) {
                "function" == typeof n.onClick && n.onClick(e);
                var t = !0;
                return (
                  (0 !== e.button ||
                    e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    e.defaultPrevented) &&
                    (t = !1),
                  n.target && "_self" !== n.target.toLowerCase() && (t = !1),
                  window.gtag
                    ? window.gtag("event", "click", {
                        event_category: "outbound",
                        event_label: n.href,
                        transport_type: t ? "beacon" : "",
                        event_callback: function () {
                          t && (document.location = n.href);
                        },
                      })
                    : t && (document.location = n.href),
                  !1
                );
              },
            }),
            r
          );
        });
      (t.M = c),
        (c.propTypes = {
          href: s.default.string,
          target: s.default.string,
          onClick: s.default.func,
        });
    },
    6464: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return l;
        },
        n: function () {
          return o;
        },
      });
      var n = r(757),
        a = r(7294),
        l = function (e) {
          var t = e.href,
            r = e.children;
          return a.createElement(
            "a",
            { className: "text-blue-600 underline", href: t },
            r
          );
        },
        o = function (e) {
          var t = e.href,
            r = e.children;
          return a.createElement(
            n.M,
            { className: "text-blue-600 underline", href: t },
            r
          );
        };
    },
    9122: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return a;
        },
      });
      var n = r(7294),
        a = function (e) {
          return n.createElement(
            "svg",
            { className: "w-8 h-8", viewBox: "0 0 24 24" },
            n.createElement("path", { fill: "currentColor", d: e })
          );
        };
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
    2766: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Head: function () {
            return d;
          },
        });
      var n = r(7294),
        a = r(4842),
        l = r(2939),
        o = r(9122),
        s = r(2475),
        i = r(880),
        c = r(6464),
        u = r(757),
        m = "About",
        f = "bg-white gap-y-2 max-w-sm sm:max-w-2xl";
      t.default = function () {
        return n.createElement(
          a.Z,
          { pageTitle: m },
          n.createElement(
            "div",
            { className: "flex gap-4 flex-wrap p-5" },
            n.createElement(
              l.Z,
              { className: f },
              n.createElement(
                "div",
                { className: "text-xl font-medium" },
                "Created and designed by:"
              ),
              n.createElement(
                "div",
                { className: "flex align-middle items-center" },
                (0, o.J)(s.Z.svgPaths.user),
                n.createElement("span", { className: "ml-2" }, "Rémi Mercier")
              ),
              n.createElement(
                "div",
                { className: "flex align-middle items-center" },
                (0, o.J)(s.Z.svgPaths.mail),
                n.createElement(
                  "span",
                  { className: "ml-2" },
                  "remi.mercier.software@gmail.com"
                )
              ),
              n.createElement(
                "div",
                null,
                n.createElement(
                  u.M,
                  { href: i.Z.urls.donationUrl },
                  n.createElement("img", {
                    src: "https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat&logo=paypal",
                  })
                )
              )
            ),
            n.createElement(
              l.Z,
              { className: f },
              n.createElement(
                "div",
                { className: "text-xl font-medium" },
                "Powered by:"
              ),
              n.createElement(
                "ul",
                { className: "list-disc ml-5" },
                [
                  i.Z.urls.lhmGithubPageUrl,
                  "https://github.com/falahati/NvAPIWrapper",
                  "https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit",
                ].map(function (e, t) {
                  return n.createElement(
                    "li",
                    { key: t, className: "break-words" },
                    n.createElement(c.d, { href: e }, e)
                  );
                })
              )
            )
          )
        );
      };
      var d = function () {
        return n.createElement("title", null, m);
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
                    var r = arguments[t];
                    for (var n in r)
                      Object.prototype.hasOwnProperty.call(r, n) &&
                        (e[n] = r[n]);
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
        var r,
          n,
          a = {},
          l = Object.keys(e);
        for (n = 0; n < l.length; n++)
          (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
//# sourceMappingURL=component---src-pages-about-tsx-20f65fef19400bd67bfd.js.map
