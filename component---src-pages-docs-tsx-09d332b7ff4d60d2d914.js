"use strict";
(self.webpackChunkfan_control = self.webpackChunkfan_control || []).push([
  [962],
  {
    5835: function (e, r, n) {
      n.r(r),
        n.d(r, {
          Head: function () {
            return c;
          },
        });
      var t = n(7294),
        a = n(4842),
        l = [
          {
            key: "Linear",
            render: function () {
              return t.createElement(
                t.Fragment,
                null,
                "This is a linear curve description."
              );
            },
          },
          {
            key: "Graph",
            render: function () {
              return t.createElement(
                t.Fragment,
                null,
                "This is a graph curve description."
              );
            },
          },
        ];
      r.default = function () {
        var e = (0, t.useState)(l[0]),
          r = e[0],
          n = e[1];
        return t.createElement(
          a.Z,
          { pageTitle: "Docs" },
          t.createElement(
            "div",
            { className: "flex max-w-5xl m-auto p-5" },
            t.createElement(
              "div",
              { className: "flex  border-r-2 border-slate-200" },
              t.createElement(
                "ul",
                { className: " mr-5" },
                l.map(function (e) {
                  return (function (e, r) {
                    return t.createElement(
                      "li",
                      {
                        key: e.key,
                        className:
                          "cursor-pointer rounded hover:bg-slate-200 p-1",
                        onClick: function () {
                          return r(e);
                        },
                      },
                      e.key
                    );
                  })(e, n);
                })
              )
            ),
            t.createElement(
              "div",
              { className: "ml-5" },
              t.createElement(
                "h3",
                { className: "text-2xl font-semibold mb-2" },
                r.key
              ),
              r.render()
            )
          )
        );
      };
      var c = function () {
        return t.createElement("title", null, "Docs");
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-docs-tsx-09d332b7ff4d60d2d914.js.map
