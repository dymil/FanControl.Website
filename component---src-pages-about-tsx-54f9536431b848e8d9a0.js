"use strict";
(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [49],
  {
    2939: function (e, t, a) {
      var l = a(3366),
        n = a(7294),
        r = a(9940),
        s = ["children", "className"];
      t.Z = function (e) {
        var t = e.children,
          a = e.className,
          c = (0, l.Z)(e, s);
        return n.createElement(
          "div",
          Object.assign({}, c, {
            className: (0, r.m)(
              "h-fit w-fit p-3 rounded-lg shadow-md shadow-slate-400",
              a
            ),
          }),
          t
        );
      };
    },
    2766: function (e, t, a) {
      a.r(t),
        a.d(t, {
          Head: function () {
            return m;
          },
        });
      var l = a(7294),
        n = a(4842),
        r = a(2939),
        s = a(880),
        c = a(6464),
        i = "About";
      t.default = function () {
        return l.createElement(
          n.Z,
          { pageTitle: i },
          l.createElement(
            "div",
            { className: "flex gap-4 flex-wrap p-5" },
            l.createElement(
              r.Z,
              { className: "bg-white gap-y-2 max-w-sm sm:max-w-2xl" },
              l.createElement(
                "div",
                { className: "text-xl font-medium" },
                "Powered by:"
              ),
              l.createElement(
                "ul",
                { className: "list-disc ml-5" },
                [
                  s.Z.urls.lhmGithubPageUrl,
                  "https://github.com/falahati/NvAPIWrapper",
                  "https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit",
                ].map(function (e, t) {
                  return l.createElement(
                    "li",
                    { key: t, className: "break-words" },
                    l.createElement(c.d, { href: e }, e)
                  );
                })
              )
            )
          )
        );
      };
      var m = function () {
        return l.createElement("title", null, i);
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-about-tsx-54f9536431b848e8d9a0.js.map
