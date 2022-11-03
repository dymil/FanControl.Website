"use strict";
(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [49],
  {
    6464: function (e, t, a) {
      var l = a(7294);
      t.Z = function (e) {
        var t = e.href,
          a = e.children;
        return l.createElement(
          "a",
          { className: "text-blue-600 underline", href: t },
          a
        );
      };
    },
    9122: function (e, t, a) {
      a.d(t, {
        J: function () {
          return r;
        },
      });
      var l = a(7294),
        r = function (e) {
          return l.createElement(
            "svg",
            { className: "w-8 h-8", viewBox: "0 0 24 24" },
            l.createElement("path", { fill: "currentColor", d: e })
          );
        };
    },
    880: function (e, t) {
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
    2766: function (e, t, a) {
      a.r(t),
        a.d(t, {
          Head: function () {
            return d;
          },
        });
      var l = a(7294),
        r = a(4842),
        n = a(2939),
        s = a(9122),
        i = a(2475),
        m = a(880),
        c = a(6464),
        o = "About",
        u = "bg-white gap-y-2 max-w-sm sm:max-w-2xl";
      t.default = function () {
        return l.createElement(
          r.Z,
          { pageTitle: o },
          l.createElement(
            "div",
            { className: "flex gap-4 flex-wrap p-5" },
            l.createElement(
              n.Z,
              { className: u },
              l.createElement(
                "div",
                { className: "text-xl font-medium" },
                "Created and designed by:"
              ),
              l.createElement(
                "div",
                { className: "flex align-middle items-center" },
                (0, s.J)(i.Z.svgPaths.user),
                l.createElement("span", { className: "ml-2" }, "Rémi Mercier")
              ),
              l.createElement(
                "div",
                { className: "flex align-middle items-center" },
                (0, s.J)(i.Z.svgPaths.mail),
                l.createElement(
                  "span",
                  { className: "ml-2" },
                  "remi.mercier.software@gmail.com"
                )
              ),
              l.createElement(
                "div",
                null,
                l.createElement(
                  "a",
                  { href: m.Z.urls.donationUrl },
                  l.createElement("img", {
                    src: "https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat&logo=paypal",
                  })
                )
              )
            ),
            l.createElement(
              n.Z,
              { className: u },
              l.createElement(
                "div",
                { className: "text-xl font-medium" },
                "Powered by:"
              ),
              l.createElement(
                "ul",
                { className: "list-disc ml-5" },
                [
                  m.Z.urls.lhmGithubPageUrl,
                  "https://github.com/falahati/NvAPIWrapper",
                  "https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit",
                ].map(function (e, t) {
                  return l.createElement(
                    "li",
                    { key: t, className: "break-words" },
                    l.createElement(c.Z, { href: e }, e)
                  );
                })
              )
            )
          )
        );
      };
      var d = function () {
        return l.createElement("title", null, o);
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-about-tsx-8d5ddc8ede672a3c9871.js.map
