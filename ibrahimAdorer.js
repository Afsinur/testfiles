(function () {
    var aa = "&action=",
      ba = ".wikipedia.org",
      ca = "CSSStyleDeclaration",
      da = "Clobbering detected",
      ea = "Edge",
      fa = "Element",
      ha = "GET",
      ia = "Node",
      ja = "SPAN",
      ka = "STYLE",
      la = "SW_READER_LIST_",
      ma = "SW_READER_LIST_CLOSED_",
      na = "Share this post",
      oa = "Symbol.iterator",
      pa = "_blank",
      qa = "about:invalid#zClosurez",
      ra = "about:invalid#zSoyz",
      sa = "attributes",
      ta = "block",
      ua = "click",
      va = "collapsed",
      wa = "collapsible",
      xa = "comment-editor",
      ya = "commentId",
      za = "complete",
      Aa = "contact-form-email",
      Ba = "contact-form-email-message",
      Ca = "contact-form-error-message",
      Da = "contact-form-error-message-with-border",
      Ea = "contact-form-name",
      CtS = "contact-form-subject",
      Fa = "contact-form-submit",
      Ga = "contact-form-success-message",
      Ha = "contact-form-success-message-with-border",
      Ia = "data-height",
      Ja = "data-sanitizer-",
      Ka = "data-viewurl",
      La = "displayModeFull",
      Ma = "displayModeLayout",
      Na = "displayModeNone",
      l = "div",
      Oa = "dropdown-toggle",
      Pa = "error",
      Qa = "expanded",
      Ra = "followers-grid",
      m = "function",
      Sa = "getAttribute",
      Ta = "getElementsByTagName",
      Ua = "getPropertyValue",
      Va = "hasAttribute",
      Wa = "hidden",
      Xa = "https:",
      Ya = "layout-widget-description",
      Za = "layout-widget-title",
      $a = "max-height: 0;",
      ab = "msMatchesSelector",
      bb = "namespaceURI",
      p = "none",
      cb = "number",
      q = "object",
      db = "prerender",
      eb = "ready",
      fb = "removeAttribute",
      gb = "rotate(-45deg)",
      hb = "setAttribute",
      ib = "status-message",
      jb = "status-message-inner",
      r = "string",
      kb = "style",
      lb = "success",
      mb = "text/javascript",
      nb = "thread-collapsed",
      ob = "thread-expanded",
      pb = "title",
      qb = "toggle",
      rb = "visible",
      sb = "wikipedia-search-input",
      tb = "wikipedia-search-more",
      ub = "wikipedia-search-results",
      vb = "wikipedia-search-results-header",
      t;

    function wb(a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    }

    var xb =
      typeof Object.defineProperties == m
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          };

    function yb(a) {
      a = [
        q == typeof globalThis && globalThis,
        a,
        q == typeof window && window,
        q == typeof self && self,
        q == typeof global && global,
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    }

    var zb = yb(this);

    function Ab(a, b) {
      if (b)
        a: {
          var c = zb;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d &&
            null != b &&
            xb(c, a, { configurable: !0, writable: !0, value: b });
        }
    }

    Ab("Symbol", function (a) {
      function b(f) {
        if (this instanceof b)
          throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++, f);
      }
      function c(f, g) {
        this.C = f;
        xb(this, "description", { configurable: !0, writable: !0, value: g });
      }
      if (a) return a;
      c.prototype.toString = function () {
        return this.C;
      };
      var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
        e = 0;
      return b;
    });

    Ab(oa, function (a) {
      if (a) return a;
      a = Symbol(oa);
      for (
        var b =
            "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
              " "
            ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = zb[b[c]];
        typeof d === m &&
          typeof d.prototype[a] != m &&
          xb(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
              return Bb(wb(this));
            },
          });
      }
      return a;
    });

    function Bb(a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    }

    function Cb(a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: wb(a) };
    }

    var Db =
        typeof Object.create == m
          ? Object.create
          : function (a) {
              function b() {}
              b.prototype = a;
              return new b();
            },
      Eb;

    if (typeof Object.setPrototypeOf == m) Eb = Object.setPrototypeOf;
    else {
      var Fb;
      a: {
        var Gb = { a: !0 },
          Hb = {};
        try {
          Hb.__proto__ = Gb;
          Fb = Hb.a;
          break a;
        } catch (a) {}
        Fb = !1;
      }
      Eb = Fb
        ? function (a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
              throw new TypeError(a + " is not extensible");
            return a;
          }
        : null;
    }

    var Ib = Eb;

    function v(a, b) {
      a.prototype = Db(b.prototype);
      a.prototype.constructor = a;
      if (Ib) Ib(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.O = b.prototype;
    }

    function Jb(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    var Kb =
      typeof Object.assign == m
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) Jb(d, e) && (a[e] = d[e]);
            }
            return a;
          };

    Ab("Object.assign", function (a) {
      return a || Kb;
    });

    Ab("WeakMap", function (a) {
      function b(k) {
        this.ga = (h += Math.random() + 1).toString();
        if (k) {
          k = Cb(k);
          for (var n; !(n = k.next()).done; )
            (n = n.value), this.set(n[0], n[1]);
        }
      }
      function c() {}
      function d(k) {
        var n = typeof k;
        return (n === q && null !== k) || n === m;
      }
      function e(k) {
        if (!Jb(k, g)) {
          var n = new c();
          xb(k, g, { value: n });
        }
      }
      function f(k) {
        var n = Object[k];
        n &&
          (Object[k] = function (u) {
            if (u instanceof c) return u;
            Object.isExtensible(u) && e(u);
            return n(u);
          });
      }
      if (
        (function () {
          if (!a || !Object.seal) return !1;
          try {
            var k = Object.seal({}),
              n = Object.seal({}),
              u = new a([
                [k, 2],
                [n, 3],
              ]);
            if (2 != u.get(k) || 3 != u.get(n)) return !1;
            u.delete(k);
            u.set(n, 4);
            return !u.has(k) && 4 == u.get(n);
          } catch (w) {
            return !1;
          }
        })()
      )
        return a;
      var g = "$jscomp_hidden_" + Math.random();
      f("freeze");
      f("preventExtensions");
      f("seal");
      var h = 0;
      b.prototype.set = function (k, n) {
        if (!d(k)) throw Error("Invalid WeakMap key");
        e(k);
        if (!Jb(k, g)) throw Error("WeakMap key fail: " + k);
        k[g][this.ga] = n;
        return this;
      };
      b.prototype.get = function (k) {
        return d(k) && Jb(k, g) ? k[g][this.ga] : void 0;
      };
      b.prototype.has = function (k) {
        return d(k) && Jb(k, g) && Jb(k[g], this.ga);
      };
      b.prototype.delete = function (k) {
        return d(k) && Jb(k, g) && Jb(k[g], this.ga)
          ? delete k[g][this.ga]
          : !1;
      };
      return b;
    });

    Ab("Map", function (a) {
      function b() {
        var h = {};
        return (h.qa = h.next = h.head = h);
      }
      function c(h, k) {
        var n = h.C;
        return Bb(function () {
          if (n) {
            for (; n.head != h.C; ) n = n.qa;
            for (; n.next != n.head; )
              return (n = n.next), { done: !1, value: k(n) };
            n = null;
          }
          return { done: !0, value: void 0 };
        });
      }
      function d(h, k) {
        var n = k && typeof k;
        n == q || n == m
          ? f.has(k)
            ? (n = f.get(k))
            : ((n = "" + ++g), f.set(k, n))
          : (n = "p_" + k);
        var u = h.D[n];
        if (u && Jb(h.D, n))
          for (h = 0; h < u.length; h++) {
            var w = u[h];
            if ((k !== k && w.key !== w.key) || k === w.key)
              return { id: n, list: u, index: h, aa: w };
          }
        return { id: n, list: u, index: -1, aa: void 0 };
      }
      function e(h) {
        this.D = {};
        this.C = b();
        this.size = 0;
        if (h) {
          h = Cb(h);
          for (var k; !(k = h.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      }
      if (
        (function () {
          if (
            !a ||
            typeof a != m ||
            !a.prototype.entries ||
            typeof Object.seal != m
          )
            return !1;
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(Cb([[h, "s"]]));
            if (
              "s" != k.get(h) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              2 != k.size
            )
              return !1;
            var n = k.entries(),
              u = n.next();
            if (u.done || u.value[0] != h || "s" != u.value[1]) return !1;
            u = n.next();
            return u.done ||
              4 != u.value[0].x ||
              "t" != u.value[1] ||
              !n.next().done
              ? !1
              : !0;
          } catch (w) {
            return !1;
          }
        })()
      )
        return a;
      var f = new WeakMap();
      e.prototype.set = function (h, k) {
        h = 0 === h ? 0 : h;
        var n = d(this, h);
        n.list || (n.list = this.D[n.id] = []);
        n.aa
          ? (n.aa.value = k)
          : ((n.aa = {
              next: this.C,
              qa: this.C.qa,
              head: this.C,
              key: h,
              value: k,
            }),
            n.list.push(n.aa),
            (this.C.qa.next = n.aa),
            (this.C.qa = n.aa),
            this.size++);
        return this;
      };
      e.prototype.delete = function (h) {
        h = d(this, h);
        return h.aa && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.D[h.id],
            (h.aa.qa.next = h.aa.next),
            (h.aa.next.qa = h.aa.qa),
            (h.aa.head = null),
            this.size--,
            !0)
          : !1;
      };
      e.prototype.clear = function () {
        this.D = {};
        this.C = this.C.qa = b();
        this.size = 0;
      };
      e.prototype.has = function (h) {
        return !!d(this, h).aa;
      };
      e.prototype.get = function (h) {
        return (h = d(this, h).aa) && h.value;
      };
      e.prototype.entries = function () {
        return c(this, function (h) {
          return [h.key, h.value];
        });
      };
      e.prototype.keys = function () {
        return c(this, function (h) {
          return h.key;
        });
      };
      e.prototype.values = function () {
        return c(this, function (h) {
          return h.value;
        });
      };
      e.prototype.forEach = function (h, k) {
        for (var n = this.entries(), u; !(u = n.next()).done; )
          (u = u.value), h.call(k, u[1], u[0], this);
      };
      e.prototype[Symbol.iterator] = e.prototype.entries;
      var g = 0;
      return e;
    });

    function Lb(a, b, c) {
      if (null == a)
        throw new TypeError(
          "The 'this' value for String.prototype." +
            c +
            " must not be null or undefined"
        );
      if (b instanceof RegExp)
        throw new TypeError(
          "First argument to String.prototype." +
            c +
            " must not be a regular expression"
        );
      return a + "";
    }

    Ab("String.prototype.endsWith", function (a) {
      return a
        ? a
        : function (b, c) {
            var d = Lb(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c; )
              if (d[--c] != b[--e]) return !1;
            return 0 >= e;
          };
    });

    Ab("Array.prototype.find", function (a) {
      return a
        ? a
        : function (b, c) {
            a: {
              var d = this;
              d instanceof String && (d = String(d));
              for (var e = d.length, f = 0; f < e; f++) {
                var g = d[f];
                if (b.call(c, g, f, d)) {
                  b = g;
                  break a;
                }
              }
              b = void 0;
            }
            return b;
          };
    });

    Ab("Set", function (a) {
      function b(c) {
        this.C = new Map();
        if (c) {
          c = Cb(c);
          for (var d; !(d = c.next()).done; ) this.add(d.value);
        }
        this.size = this.C.size;
      }
      if (
        (function () {
          if (
            !a ||
            typeof a != m ||
            !a.prototype.entries ||
            typeof Object.seal != m
          )
            return !1;
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(Cb([c]));
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1;
            var e = d.entries(),
              f = e.next();
            if (f.done || f.value[0] != c || f.value[1] != c) return !1;
            f = e.next();
            return f.done ||
              f.value[0] == c ||
              4 != f.value[0].x ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done;
          } catch (g) {
            return !1;
          }
        })()
      )
        return a;
      b.prototype.add = function (c) {
        c = 0 === c ? 0 : c;
        this.C.set(c, c);
        this.size = this.C.size;
        return this;
      };
      b.prototype.delete = function (c) {
        c = this.C.delete(c);
        this.size = this.C.size;
        return c;
      };
      b.prototype.clear = function () {
        this.C.clear();
        this.size = 0;
      };
      b.prototype.has = function (c) {
        return this.C.has(c);
      };
      b.prototype.entries = function () {
        return this.C.entries();
      };
      b.prototype.values = function () {
        return this.C.values();
      };
      b.prototype.keys = b.prototype.values;
      b.prototype[Symbol.iterator] = b.prototype.values;
      b.prototype.forEach = function (c, d) {
        var e = this;
        this.C.forEach(function (f) {
          return c.call(d, f, f, e);
        });
      };
      return b;
    });

    function Mb(a, b) {
      a instanceof String && (a += "");
      var c = 0,
        d = !1,
        e = {
          next: function () {
            if (!d && c < a.length) {
              var f = c++;
              return { value: b(f, a[f]), done: !1 };
            }
            d = !0;
            return { done: !0, value: void 0 };
          },
        };
      e[Symbol.iterator] = function () {
        return e;
      };
      return e;
    }

    Ab("String.prototype.startsWith", function (a) {
      return a
        ? a
        : function (b, c) {
            var d = Lb(this, b, "startsWith");
            b += "";
            var e = d.length,
              f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
            return g >= f;
          };
    });

    Ab("Array.prototype.values", function (a) {
      return a
        ? a
        : function () {
            return Mb(this, function (b, c) {
              return c;
            });
          };
    });

    Ab("Array.prototype.keys", function (a) {
      return a
        ? a
        : function () {
            return Mb(this, function (b) {
              return b;
            });
          };
    });

    Ab("Array.from", function (a) {
      return a
        ? a
        : function (b, c, d) {
            c =
              null != c
                ? c
                : function (h) {
                    return h;
                  };
            var e = [],
              f =
                "undefined" != typeof Symbol &&
                Symbol.iterator &&
                b[Symbol.iterator];
            if (typeof f == m) {
              b = f.call(b);
              for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++));
            } else
              for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e;
          };
    });

    window.jstiming && window.jstiming.load.tick("widgetJsStart");

    function Nb() {
      window.jstiming.load.tick("ol");
    }

    function Ob(a, b) {
      a.addEventListener
        ? a.addEventListener("load", b, !1)
        : a.attachEvent("onload", b);
    }

    function Pb(a, b) {
      return a.className && -1 != a.className.indexOf(b)
        ? a
        : a.parentNode
        ? Pb(a.parentNode, b)
        : null;
    }

    function Qb() {
      window.jstiming.load.tick("prt");
      window.tickAboveFold && window.tickAboveFold(this);
    }

    window.BLOG_attachCsiOnload = function (a, b) {
      if (window.jstiming) {
        window.jstiming.load.tick("widgetJsEnd");
        window.jstiming.load.tick("prt");
        window.jstiming.load.name = a + "blogspot";
        a = document.getElementsByTagName("img");
        for (var c = 0; c < a.length; c++)
          a[c].complete
            ? null != Pb(a[c], "post") && Qb.apply(a[c])
            : null != Pb(a[c], "post") && Ob(a[c], Qb);
        Ob(window, Nb);
        a = function () {
          for (
            var d = {},
              e = window.blogger_blog_id,
              f = [
                "google_blogger_adsense_experiment_id",
                "blogger_csi_e",
                "blogger_templates_experiment_id",
                "blogger_active_experiments",
              ],
              g = [],
              h = f.length,
              k = 0;
            k < h;
            k++
          ) {
            var n = f[k];
            n in window && g.push(window[n]);
          }
          e && (d.blogId = e);
          0 < g.length && (d.e = g.join(","));
          e =
            (document.location.protocol == Xa ? Xa : "http:") +
            "//csi.gstatic.com/csi";
          window.jstiming.report(window.jstiming.load, d, b || e);
        };
        window.addEventListener
          ? window.addEventListener("beforeunload", a, !1)
          : window.attachEvent("onbeforeunload", a);
      }
    }; /*
      
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
      */

    var Rb = Rb || {},
      x = this || self;

    function Sb(a) {
      a.za = void 0;
      a.Ya = function () {
        return a.za ? a.za : (a.za = new a());
      };
    }

    function Tb(a) {
      var b = typeof a;
      return b != q ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    }

    function Ub(a) {
      var b = Tb(a);
      return "array" == b || (b == q && typeof a.length == cb);
    }

    function Vb(a) {
      var b = typeof a;
      return (b == q && null != a) || b == m;
    }

    var Wb = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
      Xb = 0;

    function Yb(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }

    function Zb(a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    }

    function y(a, b, c) {
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? (y = Yb)
        : (y = Zb);
      return y.apply(null, arguments);
    }

    function $b(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    }

    function z(a, b) {
      a = a.split(".");
      var c = x;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    }

    function A(a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.O = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Ld = function (d, e, f) {
        for (
          var g = Array(arguments.length - 2), h = 2;
          h < arguments.length;
          h++
        )
          g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    }

    function ac(a) {
      return a;
    } /*
      
       SPDX-License-Identifier: Apache-2.0
      */
    var bc = {};

    function cc(a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, cc);
      else {
        var c = Error().stack;
        c && (this.stack = c);
      }
      a && (this.message = String(a));
      void 0 !== b && (this.cause = b);
    }

    A(cc, Error);

    cc.prototype.name = "CustomError";

    var dc;

    function ec(a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
      cc.call(this, c + a[d]);
    }

    A(ec, cc);

    ec.prototype.name = "AssertionError";

    var fc = Array.prototype.indexOf
        ? function (a, b) {
            return Array.prototype.indexOf.call(a, b, void 0);
          }
        : function (a, b) {
            if (typeof a === r)
              return typeof b !== r || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
              if (c in a && a[c] === b) return c;
            return -1;
          },
      gc = Array.prototype.forEach
        ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c);
          }
        : function (a, b, c) {
            for (
              var d = a.length, e = typeof a === r ? a.split("") : a, f = 0;
              f < d;
              f++
            )
              f in e && b.call(c, e[f], f, a);
          },
      hc = Array.prototype.map
        ? function (a, b) {
            return Array.prototype.map.call(a, b, void 0);
          }
        : function (a, b) {
            for (
              var c = a.length,
                d = Array(c),
                e = typeof a === r ? a.split("") : a,
                f = 0;
              f < c;
              f++
            )
              f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d;
          },
      ic = Array.prototype.some
        ? function (a, b) {
            return Array.prototype.some.call(a, b, void 0);
          }
        : function (a, b) {
            for (
              var c = a.length, d = typeof a === r ? a.split("") : a, e = 0;
              e < c;
              e++
            )
              if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1;
          },
      jc = Array.prototype.every
        ? function (a, b) {
            return Array.prototype.every.call(a, b, void 0);
          }
        : function (a, b) {
            for (
              var c = a.length, d = typeof a === r ? a.split("") : a, e = 0;
              e < c;
              e++
            )
              if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0;
          };

    function kc(a, b) {
      return 0 <= fc(a, b);
    }

    function lc(a) {
      if (!Array.isArray(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
      a.length = 0;
    }

    function mc(a, b) {
      b = fc(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c;
    }

    function nc(a) {
      return Array.prototype.concat.apply([], arguments);
    }

    function oc(a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    }

    function pc(a) {
      if (!arguments.length) return [];
      for (
        var b = [], c = arguments[0].length, d = 1;
        d < arguments.length;
        d++
      )
        arguments[d].length < c && (c = arguments[d].length);
      for (d = 0; d < c; d++) {
        for (var e = [], f = 0; f < arguments.length; f++)
          e.push(arguments[f][d]);
        b.push(e);
      }
      return b;
    }

    function qc(a, b) {
      return nc.apply([], hc(a, b));
    }

    function rc(a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    }

    function sc(a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    }

    function tc(a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    }

    function uc(a, b) {
      for (var c in a) if (a[c] == b) return !0;
      return !1;
    }

    function vc(a) {
      for (var b in a) return !1;
      return !0;
    }

    function wc(a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    }

    var xc =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
      );

    function yc(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < xc.length; f++)
          (c = xc[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    }

    var zc = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    };

    var Ac;

    function Bc() {
      if (void 0 === Ac) {
        var a = null,
          b = x.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ac,
              createScript: ac,
              createScriptURL: ac,
            });
          } catch (c) {
            x.console && x.console.error(c.message);
          }
          Ac = a;
        } else Ac = a;
      }
      return Ac;
    }
    function Cc(a, b) {
      this.C = (a === Dc && b) || "";
      this.D = Ec;
    }

    Cc.prototype.ma = !0;

    Cc.prototype.ja = function () {
      return this.C;
    };

    function Fc(a) {
      return a instanceof Cc && a.constructor === Cc && a.D === Ec
        ? a.C
        : "type_error:Const";
    }

    var Ec = {},
      Dc = {};

    var Gc = {};

    function Hc(a, b) {
      this.C = b === Gc ? a : "";
      this.ma = !0;
    }

    Hc.prototype.toString = function () {
      return this.C.toString();
    };

    Hc.prototype.ja = function () {
      return this.C.toString();
    };

    function Ic(a, b) {
      this.C = b === Jc ? a : "";
    }

    Ic.prototype.toString = function () {
      return this.C + "";
    };

    Ic.prototype.ma = !0;

    Ic.prototype.ja = function () {
      return this.C.toString();
    };

    function Kc(a) {
      return a instanceof Ic && a.constructor === Ic
        ? a.C
        : "type_error:TrustedResourceUrl";
    }

    var Lc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
      Jc = {};

    function Mc(a) {
      var b = Bc();
      a = b ? b.createScriptURL(a) : a;
      return new Ic(a, Jc);
    }

    function Nc(a, b, c) {
      if (null == c) return b;
      if (typeof c === r) return c ? a + encodeURIComponent(c) : "";
      for (var d in c)
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          var e = c[d];
          e = Array.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g &&
              (b || (b = a),
              (b +=
                (b.length > a.length ? "&" : "") +
                encodeURIComponent(d) +
                "=" +
                encodeURIComponent(String(g))));
          }
        }
      return b;
    }

    function Oc(a, b) {
      return 0 == a.lastIndexOf(b, 0);
    }

    var B = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        };

    function Pc(a) {
      if (!Qc.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(Rc, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(Sc, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(Tc, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(Uc, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(Vc, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(Wc, "&#0;"));
      return a;
    }

    var Rc = /&/g,
      Sc = /</g,
      Tc = />/g,
      Uc = /"/g,
      Vc = /'/g,
      Wc = /\x00/g,
      Qc = /[\x00&<>"']/;

    function Xc(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }

    function C(a, b) {
      this.C = b === Yc ? a : "";
    }

    C.prototype.toString = function () {
      return this.C.toString();
    };

    C.prototype.ma = !0;

    C.prototype.ja = function () {
      return this.C.toString();
    };

    function Zc(a) {
      return a instanceof C && a.constructor === C ? a.C : "type_error:SafeUrl";
    }

    var $c = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
      ad = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function bd(a) {
      a instanceof C ||
        ((a = typeof a == q && a.ma ? a.ja() : String(a)),
        ad.test(a)
          ? (a = new C(a, Yc))
          : ((a = String(a).replace(/(%0A|%0D)/g, "")),
            (a = a.match($c) ? new C(a, Yc) : null)));
      return a || cd;
    }

    var Yc = {},
      cd = new C(qa, Yc);

    var dd = {};

    function ed(a, b) {
      this.C = b === dd ? a : "";
      this.ma = !0;
    }

    ed.prototype.ja = function () {
      return this.C;
    };

    ed.prototype.toString = function () {
      return this.C.toString();
    };

    function fd(a) {
      return a instanceof ed && a.constructor === ed
        ? a.C
        : "type_error:SafeStyle";
    }

    function gd(a) {
      var b = "",
        c;
      for (c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
          if (!/^[-_a-zA-Z0-9]+$/.test(c))
            throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
          var d = a[c];
          null != d &&
            ((d = Array.isArray(d) ? d.map(hd).join(" ") : hd(d)),
            (b += c + ":" + d + ";"));
        }
      return b ? new ed(b, dd) : id;
    }

    var id = new ed("", dd);

    function hd(a) {
      if (a instanceof C)
        return (
          'url("' + Zc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")'
        );
      if (a instanceof Cc) a = Fc(a);
      else {
        a = String(a);
        var b = a.replace(jd, "$1").replace(jd, "$1").replace(kd, "url");
        if (ld.test(b)) {
          if ((b = !md.test(a))) {
            for (var c = (b = !0), d = 0; d < a.length; d++) {
              var e = a.charAt(d);
              "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
            }
            b = b && c && nd(a);
          }
          a = b ? od(a) : "zClosurez";
        } else a = "zClosurez";
      }
      if (/[{;}]/.test(a))
        throw new ec("Value does not allow [{;}], got: %s.", [a]);
      return a;
    }

    function nd(a) {
      for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
          if (b) return !1;
          b = !0;
        } else if ("[" == e) {
          if (!b) return !1;
          b = !1;
        } else if (!b && !c.test(e)) return !1;
      }
      return b;
    }

    var ld = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
      kd = RegExp(
        "\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))",
        "g"
      ),
      jd = RegExp(
        "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
        "g"
      ),
      md = /\/\*/;

    function od(a) {
      return a.replace(kd, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (g, h, k) {
          f = h;
          return k;
        });
        b = bd(d).ja();
        return c + f + b + f + e;
      });
    }

    var pd = {};

    function qd(a, b) {
      this.C = b === pd ? a : "";
      this.ma = !0;
    }

    qd.prototype.toString = function () {
      return this.C.toString();
    };

    function rd(a) {
      function b(d) {
        Array.isArray(d) ? d.forEach(b) : (c += sd(d));
      }
      var c = "";
      Array.prototype.forEach.call(arguments, b);
      return new qd(c, pd);
    }

    qd.prototype.ja = function () {
      return this.C;
    };

    function sd(a) {
      return a instanceof qd && a.constructor === qd
        ? a.C
        : "type_error:SafeStyleSheet";
    }

    var td = new qd("", pd);

    function ud() {
      var a = x.navigator;
      return a && (a = a.userAgent) ? a : "";
    }

    function E(a) {
      return -1 != ud().indexOf(a);
    }

    function vd() {
      return E("Trident") || E("MSIE");
    }

    function wd() {
      return (
        E("Safari") &&
        !(
          xd() ||
          E("Coast") ||
          E("Opera") ||
          E(ea) ||
          E("Edg/") ||
          E("OPR") ||
          E("Firefox") ||
          E("FxiOS") ||
          E("Silk") ||
          E("Android")
        )
      );
    }

    function xd() {
      return ((E("Chrome") || E("CriOS")) && !E(ea)) || E("Silk");
    }

    function yd() {
      return (
        E("Android") &&
        !(xd() || E("Firefox") || E("FxiOS") || E("Opera") || E("Silk"))
      );
    }

    function zd() {
      var a = ud();
      if (vd()) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) a = b[1];
        else {
          b = "";
          var c = /MSIE +([\d\.]+)/.exec(a);
          if (c && c[1])
            if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
              if (a && a[1])
                switch (a[1]) {
                  case "4.0":
                    b = "8.0";
                    break;
                  case "5.0":
                    b = "9.0";
                    break;
                  case "6.0":
                    b = "10.0";
                    break;
                  case "7.0":
                    b = "11.0";
                }
              else b = "7.0";
            else b = c[1];
          a = b;
        }
      } else a = "";
      if ("" === a) return NaN;
      a = a.split(".");
      return 0 === a.length ? NaN : Number(a[0]);
    }

    var Ad = {};

    function Bd(a, b) {
      this.C = b === Ad ? a : "";
      this.ma = !0;
    }

    Bd.prototype.ja = function () {
      return this.C.toString();
    };

    Bd.prototype.toString = function () {
      return this.C.toString();
    };

    function Cd(a) {
      return a instanceof Bd && a.constructor === Bd
        ? a.C
        : "type_error:SafeHtml";
    }

    function Dd(a) {
      return a instanceof Bd
        ? a
        : F(Pc(typeof a == q && a.ma ? a.ja() : String(a)));
    }

    function Ed(a) {
      if (!Fd.test("body")) throw Error("");
      if ("BODY" in Gd) throw Error("");
      var b = {},
        c = "";
      if (b)
        for (f in b)
          if (Object.prototype.hasOwnProperty.call(b, f)) {
            if (!Fd.test(f)) throw Error("");
            var d = b[f];
            if (null != d) {
              var e = f;
              if (d instanceof Cc) d = Fc(d);
              else if (e.toLowerCase() == kb) {
                if (!Vb(d)) throw Error("");
                d instanceof ed || (d = gd(d));
                d = fd(d);
              } else {
                if (/^on/i.test(e)) throw Error("");
                if (e.toLowerCase() in Hd)
                  if (d instanceof Ic) d = Kc(d).toString();
                  else if (d instanceof C) d = Zc(d);
                  else if (typeof d === r) d = bd(d).ja();
                  else throw Error("");
              }
              d.ma && (d = d.ja());
              e = e + '="' + Pc(String(d)) + '"';
              c += " " + e;
            }
          }
      var f = "<body" + c;
      null == a ? (a = []) : Array.isArray(a) || (a = [a]);
      !0 === zc.body
        ? (f += ">")
        : ((a = Id(a)), (f += ">" + Cd(a).toString() + "</body>"));
      return F(f);
    }

    function Jd(a) {
      function b(e) {
        Array.isArray(e)
          ? e.forEach(b)
          : ((e = Dd(e)), d.push(Cd(e).toString()));
      }
      var c = Dd(Kd),
        d = [];
      a.forEach(b);
      return F(d.join(Cd(c).toString()));
    }

    function Id(a) {
      return Jd(Array.prototype.slice.call(arguments));
    }

    function F(a) {
      var b = Bc();
      a = b ? b.createHTML(a) : a;
      return new Bd(a, Ad);
    }

    var Fd = /^[a-zA-Z0-9-]+$/,
      Hd = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0,
      },
      Gd = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0,
      },
      Ld = F("<!DOCTYPE html>"),
      Kd = new Bd((x.trustedTypes && x.trustedTypes.emptyHTML) || "", Ad),
      Md = F("<br>");

    function Nd(a) {
      var b = { nonce: Od() };
      b = void 0 === b ? {} : b;
      a = (
        a instanceof Hc && a.constructor === Hc ? a.C : "type_error:SafeScript"
      ).toString();
      var c = "<script";
      b.id && (c += ' id="' + Pd(b.id) + '"');
      b.nonce && (c += ' nonce="' + Pd(b.nonce) + '"');
      b.type && (c += ' type="' + Pd(b.type) + '"');
      return F(c + (">" + a + "\x3c/script>"));
    }

    function Pd(a) {
      return a
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    }

    function Qd(a, b) {
      if (void 0 !== a.tagName) {
        if ("script" === a.tagName.toLowerCase())
          throw Error("Use setTextContent with a SafeScript.");
        if (a.tagName.toLowerCase() === kb)
          throw Error("Use setTextContent with a SafeStyleSheet.");
      }
      a.innerHTML = Cd(b);
    }

    function Rd(a) {
      var b = document.createElement("template");
      if (!("content" in b)) {
        b = F("<html><body>" + a);
        b = new DOMParser().parseFromString(Cd(b), "text/html");
        for (a = b.createDocumentFragment(); 0 < b.body.childNodes.length; )
          a.appendChild(b.body.firstChild);
        return a;
      }
      a = F(a);
      Qd(b, a);
      return b.content;
    }

    function Sd(a) {
      a = a.nodeName;
      return typeof a === r ? a : "FORM";
    }

    function Td(a) {
      a = a.nodeType;
      return a === Node.ELEMENT_NODE || typeof a !== cb;
    }

    function Ud(a, b, c, d) {
      this.D = a;
      this.C = b;
      this.F = c;
      this.G = d;
    }

    var Vd = new Ud(
      new Set([
        "ARTICLE",
        "SECTION",
        "NAV",
        "ASIDE",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "HEADER",
        "FOOTER",
        "ADDRESS",
        "P",
        "HR",
        "PRE",
        "BLOCKQUOTE",
        "OL",
        "UL",
        "LH",
        "LI",
        "DL",
        "DT",
        "DD",
        "FIGURE",
        "FIGCAPTION",
        "MAIN",
        "DIV",
        "EM",
        "STRONG",
        "SMALL",
        "S",
        "CITE",
        "Q",
        "DFN",
        "ABBR",
        "RUBY",
        "RB",
        "RT",
        "RTC",
        "RP",
        "DATA",
        "TIME",
        "CODE",
        "VAR",
        "SAMP",
        "KBD",
        "SUB",
        "SUP",
        "I",
        "B",
        "U",
        "MARK",
        "BDI",
        "BDO",
        ja,
        "BR",
        "WBR",
        "INS",
        "DEL",
        "PICTURE",
        "PARAM",
        "TRACK",
        "MAP",
        "TABLE",
        "CAPTION",
        "COLGROUP",
        "COL",
        "TBODY",
        "THEAD",
        "TFOOT",
        "TR",
        "TD",
        "TH",
        "SELECT",
        "DATALIST",
        "OPTGROUP",
        "OPTION",
        "OUTPUT",
        "PROGRESS",
        "METER",
        "FIELDSET",
        "LEGEND",
        "DETAILS",
        "SUMMARY",
        "MENU",
        "DIALOG",
        "SLOT",
        "CANVAS",
        "FONT",
        "CENTER",
      ]),
      new Map([
        ["A", new Map([["href", { W: 2 }]])],
        ["AREA", new Map([["href", { W: 2 }]])],
        [
          "LINK",
          new Map([
            [
              "href",
              {
                W: 2,
                conditions: new Map([
                  [
                    "rel",
                    new Set([
                      "alternate",
                      "author",
                      "bookmark",
                      "canonical",
                      "cite",
                      "help",
                      "icon",
                      "license",
                      "next",
                      "prefetch",
                      "dns-prefetch",
                      db,
                      "preconnect",
                      "preload",
                      "prev",
                      "search",
                      "subresource",
                    ]),
                  ],
                ]),
              },
            ],
          ]),
        ],
        ["SOURCE", new Map([["src", { W: 2 }]])],
        ["IMG", new Map([["src", { W: 2 }]])],
        ["VIDEO", new Map([["src", { W: 2 }]])],
        ["AUDIO", new Map([["src", { W: 2 }]])],
      ]),
      new Set([
        pb,
        "aria-atomic",
        "aria-autocomplete",
        "aria-busy",
        "aria-checked",
        "aria-current",
        "aria-disabled",
        "aria-dropeffect",
        "aria-expanded",
        "aria-haspopup",
        "aria-hidden",
        "aria-invalid",
        "aria-label",
        "aria-level",
        "aria-live",
        "aria-multiline",
        "aria-multiselectable",
        "aria-orientation",
        "aria-posinset",
        "aria-pressed",
        "aria-readonly",
        "aria-relevant",
        "aria-required",
        "aria-selected",
        "aria-setsize",
        "aria-sort",
        "aria-valuemax",
        "aria-valuemin",
        "aria-valuenow",
        "aria-valuetext",
        "alt",
        "align",
        "autocapitalize",
        "autocomplete",
        "autocorrect",
        "autofocus",
        "autoplay",
        "bgcolor",
        "border",
        "cellpadding",
        "cellspacing",
        "checked",
        "color",
        "cols",
        "colspan",
        "controls",
        "datetime",
        "disabled",
        "download",
        "draggable",
        "enctype",
        "face",
        "formenctype",
        "frameborder",
        "height",
        "hreflang",
        Wa,
        "ismap",
        "label",
        "lang",
        "loop",
        "max",
        "maxlength",
        "media",
        "minlength",
        "min",
        "multiple",
        "muted",
        "nonce",
        "open",
        "placeholder",
        "preload",
        "rel",
        "required",
        "reversed",
        "role",
        "rows",
        "rowspan",
        "selected",
        "shape",
        "size",
        "sizes",
        "slot",
        "span",
        "spellcheck",
        "start",
        "step",
        "summary",
        "translate",
        "type",
        "valign",
        "value",
        "width",
        "wrap",
        "itemscope",
        "itemtype",
        "itemid",
        "itemprop",
        "itemref",
      ]),
      new Map([
        [
          "dir",
          {
            W: 3,
            conditions: new Map([["dir", new Set(["auto", "ltr", "rtl"])]]),
          },
        ],
        [
          "async",
          { W: 3, conditions: new Map([["async", new Set(["async"])]]) },
        ],
        ["cite", { W: 2 }],
        [
          "loading",
          {
            W: 3,
            conditions: new Map([["loading", new Set(["eager", "lazy"])]]),
          },
        ],
        ["poster", { W: 2 }],
        [
          "target",
          { W: 3, conditions: new Map([["target", new Set(["_self", pa])]]) },
        ],
      ])
    );

    var Wd;

    try {
      new URL("s://g"), (Wd = !0);
    } catch (a) {
      Wd = !1;
    }

    var Xd = Wd,
      Yd = ["data:", "http:", Xa, "mailto:", "ftp:"];

    function Zd(a) {
      this.D = a;
      this.changes = [];
      if (bc !== bc) throw Error("Bad secret");
    }

    function $d(a, b) {
      a.changes = [];
      b = a.C(b);
      if (0 !== a.changes.length) throw Error("");
      return b;
    }

    Zd.prototype.C = function (a) {
      var b = document.createElement("span");
      b.appendChild(ae(this, a));
      a = new XMLSerializer().serializeToString(b);
      a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
      return F(a);
    };

    function ae(a, b) {
      b = Rd(b);
      b = document.createTreeWalker(
        b,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
        function (g) {
          return be(a, g);
        },
        !1
      );
      for (
        var c = b.nextNode(), d = document.createDocumentFragment(), e = d;
        null !== c;

      ) {
        var f = void 0;
        if (c.nodeType === Node.TEXT_NODE) f = document.createTextNode(c.data);
        else if (Td(c)) f = ce(a, c);
        else throw Error("Node is not of type text or element");
        e.appendChild(f);
        if ((c = b.firstChild())) e = f;
        else
          for (; !(c = b.nextSibling()) && (c = b.parentNode()); )
            e = e.parentNode;
      }
      return d;
    }

    function ce(a, b) {
      var c = Sd(b),
        d = document.createElement(c);
      b = b.attributes;
      for (var e = Cb(b), f = e.next(); !f.done; f = e.next()) {
        var g = f.value;
        f = g.name;
        g = g.value;
        var h = a.D,
          k = h.C.get(c);
        h = (null == k ? 0 : k.has(f))
          ? k.get(f)
          : h.F.has(f)
          ? { W: 1 }
          : h.G.get(f) || { W: 0 };
        a: {
          if ((k = h.conditions)) {
            k = Cb(k);
            for (var n = k.next(); !n.done; n = k.next()) {
              var u = Cb(n.value);
              n = u.next().value;
              u = u.next().value;
              var w = void 0;
              if (
                (n = null == (w = b.getNamedItem(n)) ? void 0 : w.value) &&
                !u.has(n)
              ) {
                k = !1;
                break a;
              }
            }
          }
          k = !0;
        }
        if (k)
          switch (h.W) {
            case 1:
              d.setAttribute(f, g);
              break;
            case 2:
              a: if (((h = void 0), Xd)) {
                try {
                  h = new URL(g);
                } catch (G) {
                  h = Xa;
                  break a;
                }
                h = h.protocol;
              } else
                b: {
                  h = document.createElement("a");
                  try {
                    h.href = g;
                  } catch (G) {
                    h = void 0;
                    break b;
                  }
                  h = -1 !== [":", ""].indexOf(h.protocol) ? Xa : h.protocol;
                }
              h = void 0 !== h && -1 !== Yd.indexOf(h.toLowerCase()) ? g : qa;
              h !== g && de(a);
              d.setAttribute(f, h);
              break;
            case 3:
              d.setAttribute(f, g.toLowerCase());
              break;
            case 4:
              d.setAttribute(f, g);
              break;
            case 0:
              de(a);
              break;
            default:
              throw Error("Unhandled AttributePolicyAction case");
          }
        else de(a);
      }
      return d;
    }

    function be(a, b) {
      if (b.nodeType === Node.TEXT_NODE) return NodeFilter.FILTER_ACCEPT;
      if (!Td(b)) return NodeFilter.FILTER_REJECT;
      b = Sd(b);
      if (null === b) return de(a), NodeFilter.FILTER_REJECT;
      var c = a.D;
      if ("form" !== b.toLowerCase() && (c.D.has(b) || c.C.has(b)))
        return NodeFilter.FILTER_ACCEPT;
      de(a);
      return NodeFilter.FILTER_REJECT;
    }

    function de(a) {
      0 === a.changes.length && a.changes.push("");
    }

    var ee = new Zd(Vd);

    function fe(a, b) {
      var c;
      if ((c = b)) {
        var d, e;
        c =
          Math.random() <
          (null != (e = null != (d = b.Qd) ? d : ge[b.ra[0]]) ? e : 0);
      }
      if (c)
        try {
          var f, g;
          Math.random() <
            (null != (g = null != (f = b.Md) ? f : he[b.ra[0]]) ? g : 0) &&
            ie(b, "HEARTBEAT");
          b: {
            try {
              $d(je, a);
            } catch (u) {
              ie(b, "H_RSANITIZE");
              var h = !0;
              break b;
            }
            try {
              $d(ee, a);
            } catch (u) {
              ie(b, "H_SANITIZE");
              h = !0;
              break b;
            }
            h = !1;
          }
          if (!h) {
            var k = void 0 === k ? {} : k;
            var n = Pd(a);
            k.Od && (n = n.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
            k.Nd && (n = n.replace(/(\r\n|\n|\r)/g, "<br>"));
            k.Pd &&
              (n = n.replace(
                /(\t+)/g,
                '<span style="white-space:pre">$1</span>'
              ));
            F(n).toString() !== a && ie(b, "H_ESCAPE");
          }
        } catch (u) {
          try {
            ie(b, "CRASHED");
          } catch (w) {}
        }
      return F(a);
    }

    var ge = { 0: 1, 1: 0.01 },
      he = { 0: 0.01, 1: 0.01 },
      H = new (function () {
        this.D = !1;
        this.C = Vd;
      })(),
      ke = new Map(H.C.G);

    ke.set(kb, { W: 4 });

    H.C = new Ud(H.C.D, H.C.C, H.C.F, ke);

    var le = new Map(H.C.G);

    le.set("class", { W: 1 });

    H.C = new Ud(H.C.D, H.C.C, H.C.F, le);

    var me = new Map(H.C.G);

    me.set("id", { W: 1 });

    H.C = new Ud(H.C.D, H.C.C, H.C.F, me);

    if (H.D) throw Error("this sanitizer has already called build");

    H.D = !0;

    var je = new Zd(H.C);

    function ie(a, b) {
      (ne.Rd || navigator.sendBeacon.bind(navigator) || oe)(
        "https://csp.withgoogle.com/csp/lcreport/" + a.ra,
        JSON.stringify({ host: window.location.hostname, type: b })
      );
    }

    function oe(a, b) {
      var c = new XMLHttpRequest();
      c.open("POST", a);
      c.setRequestHeader("Content-Type", "application/json");
      c.send(b);
    }

    var ne = {};

    function pe(a) {
      a = a.className;
      return (typeof a === r && a.match(/\S+/g)) || [];
    }

    function qe(a, b) {
      var c = pe(a);
      re(c, Array.prototype.slice.call(arguments, 1));
      a.className = c.join(" ");
    }

    function se(a, b) {
      var c = pe(a);
      c = te(c, Array.prototype.slice.call(arguments, 1));
      a.className = c.join(" ");
    }

    function re(a, b) {
      for (var c = 0; c < b.length; c++) kc(a, b[c]) || a.push(b[c]);
    }

    function te(a, b) {
      return a.filter(function (c) {
        return !kc(b, c);
      });
    }

    function ue(a, b, c) {
      for (var d = pe(a), e = !1, f = 0; f < d.length; f++)
        d[f] == b && (d.splice(f--, 1), (e = !0));
      e && (d.push(c), (a.className = d.join(" ")));
    }

    function ve(a, b) {
      return kc(pe(a), b);
    }

    function we(a) {
      we[" "](a);
      return a;
    }

    we[" "] = function () {};

    function xe(a, b) {
      var c = ye;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
    }

    var ze = E("Opera"),
      I = vd(),
      Ae = E(ea),
      Be =
        E("Gecko") &&
        !(-1 != ud().toLowerCase().indexOf("webkit") && !E(ea)) &&
        !(E("Trident") || E("MSIE")) &&
        !E(ea),
      Ce = -1 != ud().toLowerCase().indexOf("webkit") && !E(ea);

    function De() {
      var a = x.document;
      return a ? a.documentMode : void 0;
    }

    var Ee;

    a: {
      var Fe = "",
        Ge = (function () {
          var a = ud();
          if (Be) return /rv:([^\);]+)(\)|;)/.exec(a);
          if (Ae) return /Edge\/([\d\.]+)/.exec(a);
          if (I) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
          if (Ce) return /WebKit\/(\S+)/.exec(a);
          if (ze) return /(?:Version)[ \/]?(\S+)/.exec(a);
        })();
      Ge && (Fe = Ge ? Ge[1] : "");
      if (I) {
        var He = De();
        if (null != He && He > parseFloat(Fe)) {
          Ee = String(He);
          break a;
        }
      }
      Ee = Fe;
    }

    var Ie = Ee,
      ye = {};

    function Je(a) {
      return xe(a, function () {
        for (
          var b = 0,
            c = B(String(Ie)).split("."),
            d = B(String(a)).split("."),
            e = Math.max(c.length, d.length),
            f = 0;
          0 == b && f < e;
          f++
        ) {
          var g = c[f] || "",
            h = d[f] || "";
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            if (0 == g[0].length && 0 == h[0].length) break;
            b =
              Xc(
                0 == g[1].length ? 0 : parseInt(g[1], 10),
                0 == h[1].length ? 0 : parseInt(h[1], 10)
              ) ||
              Xc(0 == g[2].length, 0 == h[2].length) ||
              Xc(g[2], h[2]);
            g = g[3];
            h = h[3];
          } while (0 == b);
        }
        return 0 <= b;
      });
    }

    var Ke;

    if (x.document && I) {
      var Le = De();
      Ke = Le ? Le : parseInt(Ie, 10) || void 0;
    } else Ke = void 0;

    var Me = Ke;

    try {
      new self.OffscreenCanvas(0, 0).getContext("2d");
    } catch (a) {}

    var Ne = I || Ce;

    function Oe(a) {
      return function () {
        return a;
      };
    }

    function Pe() {
      return null;
    }

    function Qe() {}

    function Re(a) {
      return a;
    }

    var Se = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement(l),
        b = document.createElement(l);
      b.appendChild(document.createElement(l));
      a.appendChild(b);
      b = a.firstChild.firstChild;
      a.innerHTML = Cd(Kd);
      return !b.parentElement;
    });

    function Te(a, b) {
      if (Se()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = Cd(b);
    }

    function Ue(a, b) {
      var c = Od(a.ownerDocument && a.ownerDocument.defaultView);
      c && a.setAttribute("nonce", c);
      a.src = Kc(b);
    }

    var Ve = /^[\w+/_-]+[=]{0,2}$/;

    function Od(a) {
      a = (a || x).document;
      return a.querySelector
        ? (a = a.querySelector("script[nonce]")) &&
          (a = a.nonce || a.getAttribute("nonce")) &&
          Ve.test(a)
          ? a
          : ""
        : "";
    }
    function We(a, b) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0;
    }
    We.prototype.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    };
    We.prototype.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    };
    We.prototype.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    };
    function Xe(a, b) {
      this.width = a;
      this.height = b;
    }
    t = Xe.prototype;
    t.aspectRatio = function () {
      return this.width / this.height;
    };
    t.la = function () {
      return !(this.width * this.height);
    };
    t.ceil = function () {
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this;
    };
    t.floor = function () {
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this;
    };
    t.round = function () {
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this;
    };
    var Ye = String.prototype.repeat
      ? function (a, b) {
          return a.repeat(b);
        }
      : function (a, b) {
          return Array(b + 1).join(a);
        };
    function Ze(a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    }
    function $e(a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    }
    function J(a) {
      return af(document, a);
    }
    function af(a, b) {
      return typeof b === r ? a.getElementById(b) : b;
    }
    function bf(a, b) {
      var c = b || document;
      return c.querySelectorAll && c.querySelector
        ? c.querySelectorAll("." + a)
        : cf(document, "*", a, b);
    }
    function K(a, b) {
      var c = b || document;
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
      else {
        c = document;
        var d = b || c;
        a =
          d.querySelectorAll && d.querySelector && a
            ? d.querySelector(a ? "." + a : "")
            : cf(c, "*", a, b)[0] || null;
      }
      return a || null;
    }
    function cf(a, b, c, d) {
      a = d || a;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? "." + c : ""));
      if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
          d = {};
          for (var e = 0, f = 0, g; (g = a[f]); f++)
            b == g.nodeName && (d[e++] = g);
          d.length = e;
          return d;
        }
        return a;
      }
      a = a.getElementsByTagName(b || "*");
      if (c) {
        d = {};
        for (f = e = 0; (g = a[f]); f++)
          (b = g.className),
            typeof b.split == m && kc(b.split(/\s+/), c) && (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    }
    function df(a, b) {
      rc(b, function (c, d) {
        c && typeof c == q && c.ma && (c = c.ja());
        d == kb
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : ef.hasOwnProperty(d)
          ? a.setAttribute(ef[d], c)
          : Oc(d, "aria-") || Oc(d, "data-")
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    }
    var ef = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    };
    function ff(a, b, c) {
      return gf(document, arguments);
    }
    function gf(a, b) {
      var c = b[1],
        d = hf(a, String(b[0]));
      c &&
        (typeof c === r
          ? (d.className = c)
          : Array.isArray(c)
          ? (d.className = c.join(" "))
          : df(d, c));
      2 < b.length && jf(a, d, b);
      return d;
    }
    function jf(a, b, c) {
      function d(h) {
        h && b.appendChild(typeof h === r ? a.createTextNode(h) : h);
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        if (!Ub(f) || (Vb(f) && 0 < f.nodeType)) d(f);
        else {
          a: {
            if (f && typeof f.length == cb) {
              if (Vb(f)) {
                var g = typeof f.item == m || typeof f.item == r;
                break a;
              }
              if (typeof f === m) {
                g = typeof f.item == m;
                break a;
              }
            }
            g = !1;
          }
          gc(g ? oc(f) : f, d);
        }
      }
    }
    function hf(a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    }
    function kf(a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    }
    function lf(a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    }
    function mf(a) {
      var b;
      if (
        Ne &&
        !(
          I &&
          Je("9") &&
          !Je("10") &&
          x.SVGElement &&
          a instanceof x.SVGElement
        ) &&
        (b = a.parentElement)
      )
        return b;
      b = a.parentNode;
      return Vb(b) && 1 == b.nodeType ? b : null;
    }
    function nf(a, b) {
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = String(b);
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = String(b);
      } else
        kf(a),
          a.appendChild(
            (9 == a.nodeType
              ? a
              : a.ownerDocument || a.document
            ).createTextNode(String(b))
          );
    }
    var of = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
      pf = { IMG: " ", BR: "\n" };
    function qf(a, b, c) {
      if (!(a.nodeName in of))
        if (3 == a.nodeType)
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
            : b.push(a.nodeValue);
        else if (a.nodeName in pf) b.push(pf[a.nodeName]);
        else for (a = a.firstChild; a; ) qf(a, b, c), (a = a.nextSibling);
    }
    function rf(a, b, c) {
      if (!b && !c) return null;
      var d = b ? String(b).toUpperCase() : null;
      return sf(a, function (e) {
        return (
          (!d || e.nodeName == d) &&
          (!c || (typeof e.className === r && kc(e.className.split(/\s+/), c)))
        );
      });
    }
    function sf(a, b) {
      for (var c = 0; a; ) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    }
    function tf(a) {
      this.D = a || x.document || document;
    }
    tf.prototype.Xa = function () {
      return af(this.D);
    };
    tf.prototype.C = function (a, b, c) {
      return gf(this.D, arguments);
    };
    function uf(a, b) {
      return hf(a.D, b);
    }
    tf.prototype.appendChild = function (a, b) {
      a.appendChild(b);
    };
    function vf() {
      this.M = this.M;
      this.ha = this.ha;
    }
    vf.prototype.M = !1;
    vf.prototype.isDisposed = function () {
      return this.M;
    };
    vf.prototype.xa = function () {
      this.M || ((this.M = !0), this.X());
    };
    vf.prototype.X = function () {
      if (this.ha) for (; this.ha.length; ) this.ha.shift()();
    };
    function wf(a, b) {
      this.type = a;
      this.currentTarget = this.target = b;
      this.defaultPrevented = this.La = !1;
    }
    wf.prototype.stopPropagation = function () {
      this.La = !0;
    };
    wf.prototype.preventDefault = function () {
      this.defaultPrevented = !0;
    };
    var xf = (function () {
      if (!x.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
      try {
        x.addEventListener("test", function () {}, b),
          x.removeEventListener("test", function () {}, b);
      } catch (c) {}
      return a;
    })();
    function yf(a, b) {
      wf.call(this, a ? a.type : "");
      this.relatedTarget = this.currentTarget = this.target = null;
      this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
        this.offsetY =
        this.offsetX =
          0;
      this.key = "";
      this.charCode = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.pointerId = 0;
      this.pointerType = "";
      this.C = null;
      a && this.init(a, b);
    }
    A(yf, wf);
    var zf = { 2: "touch", 3: "pen", 4: "mouse" };
    yf.prototype.init = function (a, b) {
      var c = (this.type = a.type),
        d =
          a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : null;
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      if ((b = a.relatedTarget)) {
        if (Be) {
          a: {
            try {
              we(b.nodeName);
              var e = !0;
              break a;
            } catch (f) {}
            e = !1;
          }
          e || (b = null);
        }
      } else
        "mouseover" == c
          ? (b = a.fromElement)
          : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d
        ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0))
        : ((this.offsetX = Ce || void 0 !== a.offsetX ? a.offsetX : a.layerX),
          (this.offsetY = Ce || void 0 !== a.offsetY ? a.offsetY : a.layerY),
          (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0));
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType =
        typeof a.pointerType === r ? a.pointerType : zf[a.pointerType] || "";
      this.state = a.state;
      this.C = a;
      a.defaultPrevented && yf.O.preventDefault.call(this);
    };
    yf.prototype.stopPropagation = function () {
      yf.O.stopPropagation.call(this);
      this.C.stopPropagation
        ? this.C.stopPropagation()
        : (this.C.cancelBubble = !0);
    };
    yf.prototype.preventDefault = function () {
      yf.O.preventDefault.call(this);
      var a = this.C;
      a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
    };
    var Af = "closure_listenable_" + ((1e6 * Math.random()) | 0);
    function Bf(a) {
      return !(!a || !a[Af]);
    }
    var Cf = 0;
    function Df(a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.bb = e;
      this.key = ++Cf;
      this.Ma = this.Va = !1;
    }
    function Ef(a) {
      a.Ma = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.bb = null;
    }
    function Ff(a) {
      this.src = a;
      this.C = {};
      this.D = 0;
    }
    Ff.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();
      a = this.C[f];
      a || ((a = this.C[f] = []), this.D++);
      var g = Gf(a, b, d, e);
      -1 < g
        ? ((b = a[g]), c || (b.Va = !1))
        : ((b = new Df(b, this.src, f, !!d, e)), (b.Va = c), a.push(b));
      return b;
    };
    function Hf(a, b) {
      var c = b.type;
      if (!(c in a.C)) return !1;
      var d = mc(a.C[c], b);
      d && (Ef(b), 0 == a.C[c].length && (delete a.C[c], a.D--));
      return d;
    }
    function If(a) {
      var b = 0,
        c;
      for (c in a.C) {
        for (var d = a.C[c], e = 0; e < d.length; e++) ++b, Ef(d[e]);
        delete a.C[c];
        a.D--;
      }
    }
    function Jf(a, b, c, d, e) {
      a = a.C[b.toString()];
      b = -1;
      a && (b = Gf(a, c, d, e));
      return -1 < b ? a[b] : null;
    }
    function Gf(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Ma && f.listener == b && f.capture == !!c && f.bb == d) return e;
      }
      return -1;
    }
    var Kf = "closure_lm_" + ((1e6 * Math.random()) | 0),
      Lf = {},
      Mf = 0;
    function L(a, b, c, d, e) {
      if (d && d.once) return Nf(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) L(a, b[f], c, d, e);
        return null;
      }
      c = Of(c);
      return Bf(a)
        ? a.fa.add(String(b), c, !1, Vb(d) ? !!d.capture : !!d, e)
        : Pf(a, b, c, !1, d, e);
    }
    function Pf(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = Vb(e) ? !!e.capture : !!e,
        h = Qf(a);
      h || (a[Kf] = h = new Ff(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = Sf();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        xf || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Tf(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Mf++;
      return c;
    }
    function Sf() {
      function a(c) {
        return b.call(a.src, a.listener, c);
      }
      var b = Uf;
      return a;
    }
    function Nf(a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Nf(a, b[f], c, d, e);
        return null;
      }
      c = Of(c);
      return Bf(a)
        ? a.fa.add(String(b), c, !0, Vb(d) ? !!d.capture : !!d, e)
        : Pf(a, b, c, !0, d, e);
    }
    function Vf(a, b, c, d, e) {
      if (Array.isArray(b))
        for (var f = 0; f < b.length; f++) Vf(a, b[f], c, d, e);
      else
        (d = Vb(d) ? !!d.capture : !!d),
          (c = Of(c)),
          Bf(a)
            ? ((a = a.fa),
              (b = String(b).toString()),
              b in a.C &&
                ((f = a.C[b]),
                (c = Gf(f, c, d, e)),
                -1 < c &&
                  (Ef(f[c]),
                  Array.prototype.splice.call(f, c, 1),
                  0 == f.length && (delete a.C[b], a.D--))))
            : a && (a = Qf(a)) && (c = Jf(a, b, c, d, e)) && Wf(c);
    }
    function Wf(a) {
      if (typeof a === cb || !a || a.Ma) return !1;
      var b = a.src;
      if (Bf(b)) return Hf(b.fa, a);
      var c = a.type,
        d = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.capture)
        : b.detachEvent
        ? b.detachEvent(Tf(c), d)
        : b.addListener && b.removeListener && b.removeListener(d);
      Mf--;
      (c = Qf(b))
        ? (Hf(c, a), 0 == c.D && ((c.src = null), (b[Kf] = null)))
        : Ef(a);
      return !0;
    }
    function Xf(a) {
      if (a)
        if (Bf(a)) a.fa && If(a.fa);
        else if ((a = Qf(a))) {
          var b = 0,
            c;
          for (c in a.C)
            for (var d = a.C[c].concat(), e = 0; e < d.length; ++e)
              Wf(d[e]) && ++b;
        }
    }
    function Tf(a) {
      return a in Lf ? Lf[a] : (Lf[a] = "on" + a);
    }
    function Uf(a, b) {
      if (a.Ma) a = !0;
      else {
        b = new yf(b, this);
        var c = a.listener,
          d = a.bb || a.src;
        a.Va && Wf(a);
        a = c.call(d, b);
      }
      return a;
    }
    function Qf(a) {
      a = a[Kf];
      return a instanceof Ff ? a : null;
    }
    var Yf = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
    function Of(a) {
      if (typeof a === m) return a;
      a[Yf] ||
        (a[Yf] = function (b) {
          return a.handleEvent(b);
        });
      return a[Yf];
    }
    function Zf(a) {
      vf.call(this);
      this.D = a;
      this.C = {};
    }
    A(Zf, vf);
    var $f = [];
    function ag(a, b, c, d) {
      Array.isArray(c) || (c && ($f[0] = c.toString()), (c = $f));
      for (var e = 0; e < c.length; e++) {
        var f = L(b, c[e], d || a.handleEvent, !1, a.D || a);
        if (!f) break;
        a.C[f.key] = f;
      }
    }
    function bg(a, b, c, d, e, f) {
      if (Array.isArray(c))
        for (var g = 0; g < c.length; g++) bg(a, b, c[g], d, e, f);
      else
        (d = d || a.handleEvent),
          (e = Vb(e) ? !!e.capture : !!e),
          (f = f || a.D || a),
          (d = Of(d)),
          (e = !!e),
          (c = Bf(b)
            ? Jf(b.fa, String(c), d, e, f)
            : b
            ? (b = Qf(b))
              ? Jf(b, c, d, e, f)
              : null
            : null),
          c && (Wf(c), delete a.C[c.key]);
    }
    function cg(a) {
      rc(
        a.C,
        function (b, c) {
          this.C.hasOwnProperty(c) && Wf(b);
        },
        a
      );
      a.C = {};
    }
    Zf.prototype.X = function () {
      Zf.O.X.call(this);
      cg(this);
    };
    Zf.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    };
    function dg() {
      vf.call(this);
      this.fa = new Ff(this);
      this.fd = this;
      this.Ga = null;
    }
    A(dg, vf);
    dg.prototype[Af] = !0;
    dg.prototype.addEventListener = function (a, b, c, d) {
      L(this, a, b, c, d);
    };
    dg.prototype.removeEventListener = function (a, b, c, d) {
      Vf(this, a, b, c, d);
    };
    function M(a, b) {
      var c = a.Ga;
      if (c) {
        var d = [];
        for (var e = 1; c; c = c.Ga) d.push(c), ++e;
      }
      a = a.fd;
      c = b.type || b;
      typeof b === r
        ? (b = new wf(b, a))
        : b instanceof wf
        ? (b.target = b.target || a)
        : ((e = b), (b = new wf(c, a)), yc(b, e));
      e = !0;
      if (d)
        for (var f = d.length - 1; !b.La && 0 <= f; f--) {
          var g = (b.currentTarget = d[f]);
          e = eg(g, c, !0, b) && e;
        }
      b.La ||
        ((g = b.currentTarget = a),
        (e = eg(g, c, !0, b) && e),
        b.La || (e = eg(g, c, !1, b) && e));
      if (d)
        for (f = 0; !b.La && f < d.length; f++)
          (g = b.currentTarget = d[f]), (e = eg(g, c, !1, b) && e);
    }
    dg.prototype.X = function () {
      dg.O.X.call(this);
      this.fa && If(this.fa);
      this.Ga = null;
    };
    function eg(a, b, c, d) {
      b = a.fa.C[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.Ma && g.capture == c) {
          var h = g.listener,
            k = g.bb || g.src;
          g.Va && Hf(a.fa, g);
          e = !1 !== h.call(k, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    }
    function fg(a, b) {
      this.F = a;
      this.G = b;
      this.D = 0;
      this.C = null;
    }
    fg.prototype.get = function () {
      if (0 < this.D) {
        this.D--;
        var a = this.C;
        this.C = a.next;
        a.next = null;
      } else a = this.F();
      return a;
    };
    function gg(a, b) {
      a.G(b);
      100 > a.D && (a.D++, (b.next = a.C), (a.C = b));
    }
    var hg;
    function ig() {
      var a = x.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !E("Presto") &&
        (a = function () {
          var e = hf(document, "IFRAME");
          e.style.display = p;
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var g = "callImmediate" + Math.random(),
            h =
              "file:" == f.location.protocol
                ? "*"
                : f.location.protocol + "//" + f.location.host;
          e = y(function (k) {
            if (("*" == h || k.origin == h) && k.data == g)
              this.port1.onmessage();
          }, this);
          f.addEventListener("message", e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, h);
            },
          };
        });
      if ("undefined" !== typeof a && !vd()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.Ub;
            c.Ub = null;
            e();
          }
        };
        return function (e) {
          d.next = { Ub: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        x.setTimeout(e, 0);
      };
    }
    function jg(a) {
      x.setTimeout(function () {
        throw a;
      }, 0);
    }
    function kg() {
      this.D = this.C = null;
    }
    kg.prototype.add = function (a, b) {
      var c = lg.get();
      c.set(a, b);
      this.D ? (this.D.next = c) : (this.C = c);
      this.D = c;
    };
    function mg() {
      var a = ng,
        b = null;
      a.C &&
        ((b = a.C), (a.C = a.C.next), a.C || (a.D = null), (b.next = null));
      return b;
    }
    var lg = new fg(
      function () {
        return new og();
      },
      function (a) {
        return a.reset();
      }
    );
    function og() {
      this.next = this.scope = this.C = null;
    }
    og.prototype.set = function (a, b) {
      this.C = a;
      this.scope = b;
      this.next = null;
    };
    og.prototype.reset = function () {
      this.next = this.scope = this.C = null;
    };
    var pg,
      qg = !1,
      ng = new kg();
    function rg(a, b) {
      pg || sg();
      qg || (pg(), (qg = !0));
      ng.add(a, b);
    }
    function sg() {
      if (x.Promise && x.Promise.resolve) {
        var a = x.Promise.resolve(void 0);
        pg = function () {
          a.then(tg);
        };
      } else
        pg = function () {
          var b = tg;
          typeof x.setImmediate !== m ||
          (x.Window &&
            x.Window.prototype &&
            !E(ea) &&
            x.Window.prototype.setImmediate == x.setImmediate)
            ? (hg || (hg = ig()), hg(b))
            : x.setImmediate(b);
        };
    }
    function tg() {
      for (var a; (a = mg()); ) {
        try {
          a.C.call(a.scope);
        } catch (b) {
          jg(b);
        }
        gg(lg, a);
      }
      qg = !1;
    }
    function ug(a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    }
    function vg(a) {
      this.C = 0;
      this.M = void 0;
      this.G = this.D = this.F = null;
      this.J = this.K = !1;
      if (a != Qe)
        try {
          var b = this;
          a.call(
            void 0,
            function (c) {
              wg(b, 2, c);
            },
            function (c) {
              wg(b, 3, c);
            }
          );
        } catch (c) {
          wg(this, 3, c);
        }
    }
    function xg() {
      this.next = this.F = this.D = this.G = this.C = null;
      this.J = !1;
    }
    xg.prototype.reset = function () {
      this.F = this.D = this.G = this.C = null;
      this.J = !1;
    };
    var yg = new fg(
      function () {
        return new xg();
      },
      function (a) {
        a.reset();
      }
    );
    function zg(a, b, c) {
      var d = yg.get();
      d.G = a;
      d.D = b;
      d.F = c;
      return d;
    }
    function Ag() {
      var a,
        b,
        c = new vg(function (d, e) {
          a = d;
          b = e;
        });
      return new Bg(c, a, b);
    }
    vg.prototype.then = function (a, b, c) {
      return Cg(this, typeof a === m ? a : null, typeof b === m ? b : null, c);
    };
    vg.prototype.$goog_Thenable = !0;
    vg.prototype.cancel = function (a) {
      if (0 == this.C) {
        var b = new Dg(a);
        rg(function () {
          Eg(this, b);
        }, this);
      }
    };
    function Eg(a, b) {
      if (0 == a.C)
        if (a.F) {
          var c = a.F;
          if (c.D) {
            for (
              var d = 0, e = null, f = null, g = c.D;
              g && (g.J || (d++, g.C == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.C && 1 == d
                ? Eg(c, b)
                : (f
                    ? ((d = f),
                      d.next == c.G && (c.G = d),
                      (d.next = d.next.next))
                    : Fg(c),
                  Gg(c, e, 3, b)));
          }
          a.F = null;
        } else wg(a, 3, b);
    }
    function Hg(a, b) {
      a.D || (2 != a.C && 3 != a.C) || Ig(a);
      a.G ? (a.G.next = b) : (a.D = b);
      a.G = b;
    }
    function Cg(a, b, c, d) {
      var e = zg(null, null, null);
      e.C = new vg(function (f, g) {
        e.G = b
          ? function (h) {
              try {
                var k = b.call(d, h);
                f(k);
              } catch (n) {
                g(n);
              }
            }
          : f;
        e.D = c
          ? function (h) {
              try {
                var k = c.call(d, h);
                void 0 === k && h instanceof Dg ? g(h) : f(k);
              } catch (n) {
                g(n);
              }
            }
          : g;
      });
      e.C.F = a;
      Hg(a, e);
      return e.C;
    }
    vg.prototype.R = function (a) {
      this.C = 0;
      wg(this, 2, a);
    };
    vg.prototype.T = function (a) {
      this.C = 0;
      wg(this, 3, a);
    };
    function wg(a, b, c) {
      if (0 == a.C) {
        a === c &&
          ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
        a.C = 1;
        a: {
          var d = c,
            e = a.R,
            f = a.T;
          if (d instanceof vg) {
            Hg(d, zg(e || Qe, f || null, a));
            var g = !0;
          } else if (ug(d)) d.then(e, f, a), (g = !0);
          else {
            if (Vb(d))
              try {
                var h = d.then;
                if (typeof h === m) {
                  Jg(d, h, e, f, a);
                  g = !0;
                  break a;
                }
              } catch (k) {
                f.call(a, k);
                g = !0;
                break a;
              }
            g = !1;
          }
        }
        g ||
          ((a.M = c),
          (a.C = b),
          (a.F = null),
          Ig(a),
          3 != b || c instanceof Dg || Kg(a, c));
      }
    }
    function Jg(a, b, c, d, e) {
      function f(k) {
        h || ((h = !0), d.call(e, k));
      }
      function g(k) {
        h || ((h = !0), c.call(e, k));
      }
      var h = !1;
      try {
        b.call(a, g, f);
      } catch (k) {
        f(k);
      }
    }
    function Ig(a) {
      a.K || ((a.K = !0), rg(a.L, a));
    }
    function Fg(a) {
      var b = null;
      a.D && ((b = a.D), (a.D = b.next), (b.next = null));
      a.D || (a.G = null);
      return b;
    }
    vg.prototype.L = function () {
      for (var a; (a = Fg(this)); ) Gg(this, a, this.C, this.M);
      this.K = !1;
    };
    function Gg(a, b, c, d) {
      if (3 == c && b.D && !b.J) for (; a && a.J; a = a.F) a.J = !1;
      if (b.C) (b.C.F = null), Lg(b, c, d);
      else
        try {
          b.J ? b.G.call(b.F) : Lg(b, c, d);
        } catch (e) {
          Mg.call(null, e);
        }
      gg(yg, b);
    }
    function Lg(a, b, c) {
      2 == b ? a.G.call(a.F, c) : a.D && a.D.call(a.F, c);
    }
    function Kg(a, b) {
      a.J = !0;
      rg(function () {
        a.J && Mg.call(null, b);
      });
    }
    var Mg = jg;
    function Dg(a) {
      cc.call(this, a);
    }
    A(Dg, cc);
    Dg.prototype.name = "cancel";
    function Bg(a, b, c) {
      this.promise = a;
      this.resolve = b;
      this.reject = c;
    }
    function Ng(a, b) {
      dg.call(this);
      this.D = a || 1;
      this.C = b || x;
      this.F = y(this.Jd, this);
      this.G = Date.now();
    }
    A(Ng, dg);
    t = Ng.prototype;
    t.Qa = !1;
    t.na = null;
    t.Jd = function () {
      if (this.Qa) {
        var a = Date.now() - this.G;
        0 < a && a < 0.8 * this.D
          ? (this.na = this.C.setTimeout(this.F, this.D - a))
          : (this.na && (this.C.clearTimeout(this.na), (this.na = null)),
            M(this, "tick"),
            this.Qa && (Og(this), this.start()));
      }
    };
    t.start = function () {
      this.Qa = !0;
      this.na ||
        ((this.na = this.C.setTimeout(this.F, this.D)), (this.G = Date.now()));
    };
    function Og(a) {
      a.Qa = !1;
      a.na && (a.C.clearTimeout(a.na), (a.na = null));
    }
    t.X = function () {
      Ng.O.X.call(this);
      Og(this);
      delete this.C;
    };
    function Pg(a, b, c) {
      if (typeof a === m) c && (a = y(a, c));
      else if (a && typeof a.handleEvent == m) a = y(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0);
    }
    function Qg() {
      this.J = {};
      this.C = {};
      this.F = {};
      this.G = null;
      this.D = [];
    }
    Sb(Qg);
    function Rg(a) {
      var b = Qg.Ya(),
        c = b.J,
        d = b.C;
      d.lightbox
        ? a(d.lightbox[1])
        : c.lightbox
        ? c.lightbox.push([1, a])
        : ((c.lightbox = [[1, a]]),
          typeof b.G === r ? Sg(b, "lightbox") : b.D.push("lightbox"));
    }
    function Tg() {
      return function () {
        var a = arguments;
        Rg(function (b) {
          b.apply(null, a);
        });
      };
    }
    Qg.prototype.K = function (a, b) {
      return a + "_" + b + ".js";
    };
    function Ug(a) {
      eval(a);
    }
    Qg.prototype.init = function (a, b) {
      z("__gjsload__", Ug);
      this.G = a.replace(/\.js$/, "");
      b && (this.K = b);
      this.D.forEach(function (c) {
        Sg(this, c);
      }, this);
      lc(this.D);
    };
    function Sg(a, b) {
      Pg(
        function () {
          if (!this.C[b]) {
            var c = this.K(this.G, b),
              d = uc(this.F, c);
            this.F[b] = c;
            d ||
              ((d = ff("SCRIPT", { type: mb })),
              Ue(d, Mc(c)),
              document.body.appendChild(d));
          }
        },
        0,
        a
      );
    }
    function Vg(a) {
      try {
        return x.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (
        /^\s*$/.test(a)
          ? 0
          : /^[\],:{}\s\u2028\u2029]*$/.test(
              a
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(
                  /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
            )
      )
        try {
          return eval("(" + a + ")");
        } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    }
    function Wg() {}
    Wg.prototype.C = null;
    function Xg(a) {
      var b;
      (b = a.C) ||
        ((b = {}), Yg(a) && ((b[0] = !0), (b[1] = !0)), (b = a.C = b));
      return b;
    }
    var Zg;
    function $g() {}
    A($g, Wg);
    function ah(a) {
      return (a = Yg(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    }
    function Yg(a) {
      if (
        !a.D &&
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        for (
          var b = [
              "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0",
              "MSXML2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.D = d);
          } catch (e) {}
        }
        throw Error(
          "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
        );
      }
      return a.D;
    }
    Zg = new $g();
    var bh = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    );
    function ch(a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    }
    function dh(a) {
      dg.call(this);
      this.headers = new Map();
      this.da = a || null;
      this.F = !1;
      this.Z = this.C = null;
      this.Fa = "";
      this.J = 0;
      this.G = this.Ea = this.T = this.ta = !1;
      this.R = 0;
      this.Y = null;
      this.L = "";
      this.xb = this.K = !1;
    }
    A(dh, dg);
    var eh = /^https?$/i,
      fh = ["POST", "PUT"],
      gh = [];
    function hh(a, b, c, d) {
      var e = new dh();
      gh.push(e);
      b && e.fa.add(za, b, !1, void 0, void 0);
      e.fa.add(eb, e.jd, !0, void 0, void 0);
      ih(e, a, c, d);
    }
    t = dh.prototype;
    t.jd = function () {
      this.xa();
      mc(gh, this);
    };
    t.ec = function () {
      return this.L;
    };
    t.fc = function () {
      return this.K;
    };
    function ih(a, b, c, d, e) {
      if (a.C)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            a.Fa +
            "; newUri=" +
            b
        );
      c = c ? c.toUpperCase() : ha;
      a.Fa = b;
      a.J = 0;
      a.ta = !1;
      a.F = !0;
      a.C = a.da ? ah(a.da) : ah(Zg);
      a.Z = a.da ? Xg(a.da) : Xg(Zg);
      a.C.onreadystatechange = y(a.jc, a);
      try {
        (a.Ea = !0), a.C.open(c, String(b), !0), (a.Ea = !1);
      } catch (h) {
        jh(a);
        return;
      }
      b = d || "";
      d = new Map(a.headers);
      if (e)
        if (Object.getPrototypeOf(e) === Object.prototype)
          for (var f in e) d.set(f, e[f]);
        else if (typeof e.keys === m && typeof e.get === m) {
          f = Cb(e.keys());
          for (var g = f.next(); !g.done; g = f.next())
            (g = g.value), d.set(g, e.get(g));
        } else throw Error("Unknown input type for opt_headers: " + String(e));
      e = Array.from(d.keys()).find(function (h) {
        return "content-type" == h.toLowerCase();
      });
      f = x.FormData && b instanceof x.FormData;
      !kc(fh, c) ||
        e ||
        f ||
        d.set(
          "Content-Type",
          "application/x-www-form-urlencoded;charset=utf-8"
        );
      c = Cb(d);
      for (e = c.next(); !e.done; e = c.next())
        (d = Cb(e.value)),
          (e = d.next().value),
          (d = d.next().value),
          a.C.setRequestHeader(e, d);
      a.L && (a.C.responseType = a.L);
      "withCredentials" in a.C &&
        a.C.withCredentials !== a.K &&
        (a.C.withCredentials = a.K);
      try {
        kh(a),
          0 < a.R &&
            ((a.xb = lh(a.C)),
            a.xb
              ? ((a.C.timeout = a.R), (a.C.ontimeout = y(a.wa, a)))
              : (a.Y = Pg(a.wa, a.R, a))),
          (a.T = !0),
          a.C.send(b),
          (a.T = !1);
      } catch (h) {
        jh(a);
      }
    }
    function lh(a) {
      return I && Je(9) && typeof a.timeout === cb && void 0 !== a.ontimeout;
    }
    t.wa = function () {
      "undefined" != typeof Rb &&
        this.C &&
        ((this.J = 8), M(this, "timeout"), this.abort(8));
    };
    function jh(a) {
      a.F = !1;
      a.C && ((a.G = !0), a.C.abort(), (a.G = !1));
      a.J = 5;
      mh(a);
      nh(a);
    }
    function mh(a) {
      a.ta || ((a.ta = !0), M(a, za), M(a, Pa));
    }
    t.abort = function (a) {
      this.C &&
        this.F &&
        ((this.F = !1),
        (this.G = !0),
        this.C.abort(),
        (this.G = !1),
        (this.J = a || 7),
        M(this, za),
        M(this, "abort"),
        nh(this));
    };
    t.X = function () {
      this.C &&
        (this.F &&
          ((this.F = !1), (this.G = !0), this.C.abort(), (this.G = !1)),
        nh(this, !0));
      dh.O.X.call(this);
    };
    t.jc = function () {
      this.isDisposed() || (this.Ea || this.T || this.G ? oh(this) : this.zd());
    };
    t.zd = function () {
      oh(this);
    };
    function oh(a) {
      if (
        a.F &&
        "undefined" != typeof Rb &&
        (!a.Z[1] || 4 != (a.C ? a.C.readyState : 0) || 2 != ph(a))
      )
        if (a.T && 4 == (a.C ? a.C.readyState : 0)) Pg(a.jc, 0, a);
        else if ((M(a, "readystatechange"), 4 == (a.C ? a.C.readyState : 0))) {
          a.F = !1;
          try {
            qh(a) ? (M(a, za), M(a, lb)) : ((a.J = 6), mh(a));
          } finally {
            nh(a);
          }
        }
    }
    function nh(a, b) {
      if (a.C) {
        kh(a);
        var c = a.C,
          d = a.Z[0] ? function () {} : null;
        a.C = null;
        a.Z = null;
        b || M(a, eb);
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    }
    function kh(a) {
      a.C && a.xb && (a.C.ontimeout = null);
      a.Y && (x.clearTimeout(a.Y), (a.Y = null));
    }
    t.isActive = function () {
      return !!this.C;
    };
    function qh(a) {
      var b = ph(a);
      a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          var c = !0;
          break a;
        default:
          c = !1;
      }
      if (!c) {
        if ((b = 0 === b))
          (a = String(a.Fa).match(bh)[1] || null),
            !a &&
              x.self &&
              x.self.location &&
              (a = x.self.location.protocol.slice(0, -1)),
            (b = !eh.test(a ? a.toLowerCase() : ""));
        c = b;
      }
      return c;
    }
    function ph(a) {
      try {
        return 2 < (a.C ? a.C.readyState : 0) ? a.C.status : -1;
      } catch (b) {
        return -1;
      }
    }
    function rh(a) {
      try {
        return a.C ? a.C.responseText : "";
      } catch (b) {
        return "";
      }
    }
    function sh(a, b) {
      this.C = a[x.Symbol.iterator]();
      this.D = b;
    }
    sh.prototype[Symbol.iterator] = function () {
      return this;
    };
    sh.prototype.next = function () {
      var a = this.C.next();
      return {
        value: a.done ? void 0 : this.D.call(void 0, a.value),
        done: a.done,
      };
    };
    function th(a, b) {
      return new sh(a, b);
    }
    function uh() {}
    uh.prototype.next = function () {
      return vh;
    };
    var vh = { done: !0, value: void 0 };
    uh.prototype.ua = function () {
      return this;
    };
    function wh(a) {
      if (a instanceof xh || a instanceof yh || a instanceof zh) return a;
      if (typeof a.next == m)
        return new xh(function () {
          return a;
        });
      if (typeof a[Symbol.iterator] == m)
        return new xh(function () {
          return a[Symbol.iterator]();
        });
      if (typeof a.ua == m)
        return new xh(function () {
          return a.ua();
        });
      throw Error("Not an iterator or iterable.");
    }
    function xh(a) {
      this.C = a;
    }
    xh.prototype.ua = function () {
      return new yh(this.C());
    };
    xh.prototype[Symbol.iterator] = function () {
      return new zh(this.C());
    };
    xh.prototype.D = function () {
      return new zh(this.C());
    };
    function yh(a) {
      this.C = a;
    }
    v(yh, uh);
    yh.prototype.next = function () {
      return this.C.next();
    };
    yh.prototype[Symbol.iterator] = function () {
      return new zh(this.C);
    };
    yh.prototype.D = function () {
      return new zh(this.C);
    };
    function zh(a) {
      xh.call(this, function () {
        return a;
      });
      this.F = a;
    }
    v(zh, xh);
    zh.prototype.next = function () {
      return this.F.next();
    };
    function Ah() {
      this.D = [];
      this.C = [];
    }
    function Bh(a) {
      0 === a.D.length && ((a.D = a.C), a.D.reverse(), (a.C = []));
      return a.D.pop();
    }
    Ah.prototype.V = function () {
      return this.D.length + this.C.length;
    };
    Ah.prototype.la = function () {
      return 0 === this.D.length && 0 === this.C.length;
    };
    Ah.prototype.ca = function () {
      for (var a = [], b = this.D.length - 1; 0 <= b; --b) a.push(this.D[b]);
      var c = this.C.length;
      for (b = 0; b < c; ++b) a.push(this.C[b]);
      return a;
    };
    function Ch(a, b) {
      this.D = {};
      this.C = [];
      this.F = this.size = 0;
      var c = arguments.length;
      if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
      } else if (a)
        if (a instanceof Ch)
          for (c = a.oa(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
        else for (d in a) this.set(d, a[d]);
    }
    t = Ch.prototype;
    t.V = function () {
      return this.size;
    };
    t.ca = function () {
      Dh(this);
      for (var a = [], b = 0; b < this.C.length; b++) a.push(this.D[this.C[b]]);
      return a;
    };
    t.oa = function () {
      Dh(this);
      return this.C.concat();
    };
    t.has = function (a) {
      return Eh(this.D, a);
    };
    t.la = function () {
      return 0 == this.size;
    };
    function Fh(a, b) {
      return Eh(a.D, b)
        ? (delete a.D[b], --a.size, a.F++, a.C.length > 2 * a.size && Dh(a), !0)
        : !1;
    }
    function Dh(a) {
      if (a.size != a.C.length) {
        for (var b = 0, c = 0; b < a.C.length; ) {
          var d = a.C[b];
          Eh(a.D, d) && (a.C[c++] = d);
          b++;
        }
        a.C.length = c;
      }
      if (a.size != a.C.length) {
        var e = {};
        for (c = b = 0; b < a.C.length; )
          (d = a.C[b]), Eh(e, d) || ((a.C[c++] = d), (e[d] = 1)), b++;
        a.C.length = c;
      }
    }
    t.get = function (a, b) {
      return Eh(this.D, a) ? this.D[a] : b;
    };
    t.set = function (a, b) {
      Eh(this.D, a) || ((this.size += 1), this.C.push(a), this.F++);
      this.D[a] = b;
    };
    t.forEach = function (a, b) {
      for (var c = this.oa(), d = 0; d < c.length; d++) {
        var e = c[d],
          f = this.get(e);
        a.call(b, f, e, this);
      }
    };
    t.keys = function () {
      return wh(this.ua(!0)).D();
    };
    t.values = function () {
      return wh(this.ua(!1)).D();
    };
    t.entries = function () {
      var a = this;
      return th(this.keys(), function (b) {
        return [b, a.get(b)];
      });
    };
    t.ua = function (a) {
      Dh(this);
      var b = 0,
        c = this.F,
        d = this,
        e = new uh();
      e.next = function () {
        if (c != d.F)
          throw Error("The map has changed since the iterator was created");
        if (b >= d.C.length) return vh;
        var f = d.C[b++];
        return { value: a ? f : d.D[f], done: !1 };
      };
      return e;
    };
    function Eh(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }
    function Gh(a) {
      if (a.ca && typeof a.ca == m) return a.ca();
      if (
        ("undefined" !== typeof Map && a instanceof Map) ||
        ("undefined" !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if (typeof a === r) return a.split("");
      if (Ub(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return sc(a);
    }
    function Hh(a) {
      if (a.oa && typeof a.oa == m) return a.oa();
      if (!a.ca || typeof a.ca != m) {
        if ("undefined" !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (Ub(a) || typeof a === r) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return tc(a);
        }
      }
    }
    function Ih(a, b, c) {
      if (a.forEach && typeof a.forEach == m) a.forEach(b, c);
      else if (Ub(a) || typeof a === r) Array.prototype.forEach.call(a, b, c);
      else
        for (var d = Hh(a), e = Gh(a), f = e.length, g = 0; g < f; g++)
          b.call(c, e[g], d && d[g], a);
    }
    function Jh() {
      this.C = new Ch();
      this.size = 0;
    }
    function Kh(a) {
      var b = typeof a;
      return (b == q && a) || b == m
        ? "o" +
            ((Object.prototype.hasOwnProperty.call(a, Wb) && a[Wb]) ||
              (a[Wb] = ++Xb))
        : b.slice(0, 1) + a;
    }
    t = Jh.prototype;
    t.V = function () {
      return this.C.size;
    };
    t.add = function (a) {
      this.C.set(Kh(a), a);
      this.size = this.C.size;
    };
    function Lh(a, b) {
      b = Kh(b);
      b = Fh(a.C, b);
      a.size = a.C.size;
      return b;
    }
    t.la = function () {
      return 0 === this.C.size;
    };
    t.has = function (a) {
      a = Kh(a);
      return this.C.has(a);
    };
    t.ca = function () {
      return this.C.ca();
    };
    t.values = function () {
      return this.C.values();
    };
    t.ua = function () {
      return this.C.ua(!1);
    };
    Jh.prototype[Symbol.iterator] = function () {
      return this.values();
    };
    function Mh(a, b) {
      vf.call(this);
      this.L = a || 0;
      this.F = b || 10;
      if (this.L > this.F)
        throw Error("[goog.structs.Pool] Min can not be greater than max");
      this.C = new Ah();
      this.D = new Jh();
      this.delay = 0;
      this.J = null;
      this.Ta();
    }
    A(Mh, vf);
    t = Mh.prototype;
    t.Za = function () {
      var a = Date.now();
      if (!(null != this.J && a - this.J < this.delay)) {
        for (var b; 0 < this.C.V() && ((b = Bh(this.C)), !this.Db(b)); )
          this.Ta();
        !b && this.V() < this.F && (b = this.Ab());
        b && ((this.J = a), this.D.add(b));
        return b;
      }
    };
    t.Ia = function (a) {
      Lh(this.D, a);
      this.Db(a) && this.V() < this.F ? this.C.C.push(a) : Nh(a);
    };
    t.Ta = function () {
      for (var a = this.C; this.V() < this.L; ) {
        var b = this.Ab();
        a.C.push(b);
      }
      for (; this.V() > this.F && 0 < this.C.V(); ) Nh(Bh(a));
    };
    t.Ab = function () {
      return {};
    };
    function Nh(a) {
      if (typeof a.xa == m) a.xa();
      else for (var b in a) a[b] = null;
    }
    t.Db = function (a) {
      return typeof a.hd == m ? a.hd() : !0;
    };
    t.V = function () {
      return this.C.V() + this.D.V();
    };
    t.la = function () {
      return this.C.la() && this.D.la();
    };
    t.X = function () {
      Mh.O.X.call(this);
      if (0 < this.D.V())
        throw Error("[goog.structs.Pool] Objects not released");
      delete this.D;
      for (var a = this.C; !a.la(); ) Nh(Bh(a));
      delete this.C;
    };
    function Oh(a, b) {
      this.C = a;
      this.D = b;
    }
    function Ph(a) {
      this.C = [];
      if (a)
        a: {
          if (a instanceof Ph) {
            var b = a.oa();
            a = a.ca();
            if (0 >= this.V()) {
              for (var c = this.C, d = 0; d < b.length; d++)
                c.push(new Oh(b[d], a[d]));
              break a;
            }
          } else (b = tc(a)), (a = sc(a));
          for (c = 0; c < b.length; c++) this.insert(b[c], a[c]);
        }
    }
    t = Ph.prototype;
    t.insert = function (a, b) {
      var c = this.C;
      c.push(new Oh(a, b));
      a = c.length - 1;
      b = this.C;
      for (c = b[a]; 0 < a; ) {
        var d = (a - 1) >> 1;
        if (b[d].C > c.C) (b[a] = b[d]), (a = d);
        else break;
      }
      b[a] = c;
    };
    t.ca = function () {
      for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d].D);
      return b;
    };
    t.oa = function () {
      for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d].C);
      return b;
    };
    t.V = function () {
      return this.C.length;
    };
    t.la = function () {
      return 0 === this.C.length;
    };
    function Qh() {
      Ph.apply(this, arguments);
    }
    v(Qh, Ph);
    function Rh(a, b) {
      this.K = void 0;
      this.G = new Qh();
      Mh.call(this, a, b);
    }
    A(Rh, Mh);
    t = Rh.prototype;
    t.Za = function (a, b) {
      if (!a)
        return (
          (a = Rh.O.Za.call(this)) &&
            this.delay &&
            (this.K = x.setTimeout(y(this.ab, this), this.delay)),
          a
        );
      this.G.insert(void 0 !== b ? b : 100, a);
      this.ab();
    };
    t.ab = function () {
      for (var a = this.G; 0 < a.V(); ) {
        var b = this.Za();
        if (b) {
          var c = a,
            d = c.C,
            e = d.length;
          var f = d[0];
          if (0 >= e) f = void 0;
          else {
            if (1 == e) d.length = 0;
            else {
              d[0] = d.pop();
              d = 0;
              c = c.C;
              e = c.length;
              for (var g = c[d]; d < e >> 1; ) {
                var h = 2 * d + 1,
                  k = 2 * d + 2;
                h = k < e && c[k].C < c[h].C ? k : h;
                if (c[h].C > g.C) break;
                c[d] = c[h];
                d = h;
              }
              c[d] = g;
            }
            f = f.D;
          }
          f.apply(this, [b]);
        } else break;
      }
    };
    t.Ia = function (a) {
      Rh.O.Ia.call(this, a);
      this.ab();
    };
    t.Ta = function () {
      Rh.O.Ta.call(this);
      this.ab();
    };
    t.X = function () {
      Rh.O.X.call(this);
      x.clearTimeout(this.K);
      this.G.C.length = 0;
      this.G = null;
    };
    function Sh(a, b, c, d) {
      this.R = a;
      this.T = !!d;
      Rh.call(this, b, c);
    }
    A(Sh, Rh);
    Sh.prototype.Ab = function () {
      var a = new dh(),
        b = this.R;
      b &&
        b.forEach(function (c, d) {
          a.headers.set(d, c);
        });
      this.T && (a.K = !0);
      return a;
    };
    Sh.prototype.Db = function (a) {
      return !a.isDisposed() && !a.isActive();
    };
    function Th(a, b, c, d, e, f) {
      dg.call(this);
      this.G = void 0 !== a ? a : 1;
      this.J = void 0 !== e ? Math.max(0, e) : 0;
      this.K = !!f;
      this.D = new Sh(b, c, d, f);
      this.C = new Ch();
      this.F = new Zf(this);
    }
    A(Th, dg);
    var Uh = [eb, za, lb, Pa, "abort", "timeout"];
    function Vh(a, b, c, d, e, f) {
      if (a.C.get(b)) throw Error("[goog.net.XhrManager] ID in use");
      c = new Wh(c, y(a.R, a, b), d, e, f, a.G, a.K);
      a.C.set(b, c);
      b = y(a.L, a, b);
      a.D.Za(b, null);
    }
    Th.prototype.abort = function (a, b) {
      var c = this.C.get(a);
      if (c) {
        var d = c.gb;
        c.Qb = !0;
        b &&
          (d &&
            (bg(this.F, d, Uh, c.Hb),
            Nf(
              d,
              eb,
              function () {
                var e = this.D;
                Lh(e.D, d) && e.Ia(d);
              },
              !1,
              this
            )),
          Fh(this.C, a));
        d && d.abort();
      }
    };
    Th.prototype.L = function (a, b) {
      var c = this.C.get(a);
      c && !c.gb
        ? (ag(this.F, b, Uh, c.Hb),
          (b.R = Math.max(0, this.J)),
          (b.L = c.ec()),
          (b.K = c.fc()),
          (c.gb = b),
          M(this, new Xh(eb, this, a, b)),
          Yh(this, a, b),
          c.Qb && b.abort())
        : ((a = this.D), Lh(a.D, b) && a.Ia(b));
    };
    Th.prototype.R = function (a, b) {
      var c = b.target;
      switch (b.type) {
        case eb:
          Yh(this, a, c);
          break;
        case za:
          a: {
            var d = this.C.get(a);
            if (7 == c.J || qh(c) || d.Ua > d.lb)
              if ((M(this, new Xh(za, this, a, c)), d && ((d.Wb = !0), d.Vb))) {
                a = d.Vb.call(c, b);
                break a;
              }
            a = null;
          }
          return a;
        case lb:
          M(this, new Xh(lb, this, a, c));
          break;
        case "timeout":
        case Pa:
          b = this.C.get(a);
          b.Ua > b.lb && M(this, new Xh(Pa, this, a, c));
          break;
        case "abort":
          M(this, new Xh("abort", this, a, c));
      }
      return null;
    };
    function Yh(a, b, c) {
      var d = a.C.get(b);
      !d || d.Wb || d.Ua > d.lb
        ? (d && (bg(a.F, c, Uh, d.Hb), Fh(a.C, b)),
          (a = a.D),
          Lh(a.D, c) && a.Ia(c))
        : (d.Ua++, ih(c, d.getUrl(), d.xd, d.Cb(), d.Cc));
    }
    Th.prototype.X = function () {
      Th.O.X.call(this);
      this.D.xa();
      this.D = null;
      this.F.xa();
      this.F = null;
      var a = this.C;
      a.D = {};
      a.C.length = 0;
      a.size = 0;
      a.F = 0;
      this.C = null;
    };
    function Xh(a, b, c, d) {
      wf.call(this, a, b);
      this.id = c;
      this.gb = d;
    }
    A(Xh, wf);
    function Wh(a, b, c, d, e, f, g) {
      this.C = a;
      this.xd = c || ha;
      this.F = d;
      this.Cc = null;
      this.lb = void 0 !== f ? f : 1;
      this.Ua = 0;
      this.Qb = this.Wb = !1;
      this.Hb = b;
      this.Vb = e;
      this.D = !!g;
      this.gb = null;
    }
    Wh.prototype.getUrl = function () {
      return this.C;
    };
    Wh.prototype.Cb = function () {
      return this.F;
    };
    Wh.prototype.fc = function () {
      return this.D;
    };
    Wh.prototype.ec = function () {
      return "";
    };
    function Zh(a, b, c, d, e) {
      this.D = a;
      this.G = b;
      this.C = c || null;
      this.data = d || null;
      if (e) {
        if (
          ((this.F = e),
          "displayModeSnippet" != e && e != La && e != Ma && e != Na)
        )
          throw "bad display mode: " + e;
      } else this.F = Na;
      this.K = !1;
    }
    Zh.prototype.J = function () {
      return this.D;
    };
    function $h(a) {
      this.G = !0;
      this.N = a;
      this.C = null;
    }
    function N(a, b) {
      return document.getElementById(a.N.D + "_" + b);
    }
    function ai(a, b) {
      a = N(a, b);
      if (!a) throw "did not find element for id " + b;
      return a;
    }
    $h.prototype.F = function () {
      return this.N.data;
    };
    $h.prototype.D = function () {
      var a = {};
      a.type = this.C.Pa();
      a.instanceId = this.N.D;
      a.sectionId = this.N.G;
      a.actionUrl = O.Tb;
      a.quickEditUrl =
        O.Zb +
        "&widgetType=" +
        this.C.Pa() +
        "&widgetId=" +
        this.N.D +
        "&sectionId=" +
        this.N.G +
        aa +
        O.vc;
      return a;
    };
    $h.prototype.Da = function (a, b, c, d) {
      b = b || {};
      window.__wavt && (b.xssi_token = window.__wavt);
      O.Da(a, b, this.N.D, this.C.Pa(), c, d);
    };
    function bi(a) {
      var b = -1;
      try {
        b = a.status;
      } catch (c) {}
      return b;
    }
    function O() {}
    O.Bc = function (a, b) {
      O.Aa = {};
      O.Zb = a;
      O.Tb = b;
      O.Ja = {};
      O.hb = new Th();
      O.hc = 0;
      O.Eb = 0;
      L(O.hb, eb, function () {
        O.Eb++;
      });
      L(O.hb, za, function () {
        O.Eb--;
      });
    };
    O.Sc = function (a, b) {
      O.lc = a;
      O.kc = b;
    };
    O.ad = function () {
      var a = O.uc();
      document.body.appendChild(a);
    };
    O.Uc = function (a) {
      O.ad();
      if (window.parent == window) {
        var b = "Preview";
        a && (b = a);
        a = O.tc(b);
        document.body.appendChild(a[0]);
        document.body.appendChild(a[1]);
      }
    };
    O.vc = "editWidget";
    O.Tc = function (a) {
      O.Kd = a;
    };
    O.Kb = function () {
      return O.Kd;
    };
    O.Rc = function (a) {
      O.Ja = a;
    };
    O.xc = function () {
      var a = {},
        b;
      for (b in O.Ja) {
        var c = O.Ja[b];
        a[c.name] = c.data;
      }
      c = {};
      for (b in O.Aa) c[b] = O.Aa[b].H.N.data;
      a.widgets = c;
      return a;
    };
    O.Pb = function (a, b) {
      var c = new $h(b);
      a = new window[a](c);
      c.C = a;
      O.Aa[b.D] = a;
      O.Jb(a);
      return a;
    };
    O.Mc = function (a, b) {
      a = O.Pb(a, b);
      a.H.N.K = !0;
      return a;
    };
    O.Jb = function (a) {
      var b = a.H;
      b.N.F != Na && (b.N.F == La && a.ia(), (a.H.G = !1));
    };
    O.kb = function (a) {
      return O.Aa ? O.Aa[a] : null;
    };
    O.Kc = function (a, b, c, d, e) {
      var f = "";
      d && (f = "&widgetId=" + d);
      a = O.Zb + aa + a + "&sectionId=" + b + "&widgetType=" + c + f;
      if (window.name == e)
        return window.location.replace(a), window.focus(), window;
      e = window.open(
        a,
        e,
        "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes"
      );
      e.focus();
      return e;
    };
    O.Jc = function (a) {
      var b = a.getAttribute("id"),
        c = a.parentNode.getAttribute("id");
      a = a.getAttribute("widgetType");
      O.kc && O.kc(c, a, b);
      return !1;
    };
    O.Lc = function (a) {
      a = a.parentNode.getAttribute("id");
      O.lc && O.lc(a);
      return !1;
    };
    O.Da = function (a, b, c, d, e, f) {
      O.Pc(a, b, c, d, e, f);
    };
    O.Pc = function (a, b, c, d, e, f) {
      function g() {
        n(this.C) && window.eval(rh(this));
      }
      var h = O.Tb;
      a = [
        "action=" + encodeURIComponent(a),
        "widgetId=" + encodeURIComponent(c),
        "widgetType=" + encodeURIComponent(d),
        "responseType=js",
      ];
      for (var k in b)
        if (typeof b[k] == q)
          for (c = b[k], d = 0; d < c.length; ++d)
            a.push(encodeURIComponent(k) + "=" + encodeURIComponent(c[d]));
        else a.push(encodeURIComponent(k) + "=" + encodeURIComponent(b[k]));
      var n = e || ci();
      f == ha
        ? ((h = 0 <= h.indexOf("?") ? h + "&" : h + "?"),
          Vh(O.hb, "" + O.hc++, h + a.join("&"), ha, void 0, g))
        : Vh(O.hb, "" + O.hc++, h, "POST", a.join("&"), g);
    };
    O.ib = function (a, b) {
      0 == O.Eb
        ? a.setTimeout(function () {
            a.close();
          }, b)
        : a.setTimeout(function () {
            O.ib(a, b);
          }, 200);
    };
    O.Ec = function (a, b) {
      a && (O.ib(a, 100), O.bd(a, b));
    };
    O.bd = function (a, b) {
      if (a) {
        var c = a.document.getElementById(jb);
        c && (c = c.innerHTML);
        c &&
          a &&
          a.opener.parent &&
          a.opener.parent.editor &&
          a.opener.parent.editor.SetSaveMessage(c, b);
      }
    };
    O.ka = function (a, b, c) {
      a = O.Aa[a];
      if (null != c.errors) {
        var d = window;
        O.wb(d, c.errors);
        a && a.Ba ? a.Ba(b, c, d) : O.Ba(c, d);
      } else a.ka(b, c);
    };
    O.Ba = function (a, b) {
      a = a["error-details"];
      for (var c in a) {
        var d = a[c],
          e;
        (e = b.document) || (e = document);
        if ((e = e.getElementById("errormessage_" + c)))
          Qd(e, fe(d, { ra: "0567fa1b-4186-4a3e-a4ef-72037eeeac65" })),
            (e.className = "errorbox-bad errormsg");
      }
    };
    function di(a, b) {
      O.wb(a.J, b[ib]);
      O.wc(a.N.D, function (c) {
        window.opener._WidgetManager._OnWidgetConfigured(c, b);
      });
    }
    O.Hc = function (a, b) {
      window.parent && window.parent.editor && b
        ? O.Ob(a, b)
        : window.location.replace(window.location.href);
    };
    O.Ob = function (a, b) {
      var c = O.kb(a);
      c.H.N.data = b.data;
      a = document.getElementById(a);
      kf(a);
      ei(a, c);
    };
    O.Ac = function (a, b, c) {
      null != c.errors && (O.wb(window, c.errors), O.Ba(c, window));
    };
    O.Ic = function (a) {
      var b = O.kb(a);
      b &&
        (b.H.N.F == Ma
          ? top.editor.HandleDeleteWidget(b.H.N.C)
          : ((b = b.H.N.C), b.parentNode.removeChild(b)),
        delete O.Aa[a]);
    };
    O.wc = function (a, b) {
      if (O.Lb(window)) {
        var c = window.opener;
        b || (b = c._WidgetManager._OnWidgetConfigured);
        b(a);
        c._WidgetManager
          ? c._WidgetManager._KillPopupDelay(window, a)
          : O.ib(window, 100);
      } else
        (a = O.Kb() + "?widgetId=" + a),
          (a += "&func=" + encodeURIComponent("_OnWidgetConfigured")),
          window.location.replace(a);
    };
    O.Lb = function (a) {
      var b = !1;
      try {
        if (a.opener) {
          var c = "X" + a.opener.document.domain;
          c && "X" != c && (b = !0);
        }
      } catch (d) {}
      return b;
    };
    O.Qc = "status-msg-yellow-on-white";
    O.wb = function (a, b) {
      a || (a = self);
      var c = a.document.getElementById(jb);
      c && Qd(c, fe(b, { ra: "0a2af7cc-a2b1-48fc-be8d-dfda23c41db1" }));
      (a = a.document.getElementById(ib)) && qe(a, O.Qc);
    };
    O.Oa = function (a, b) {
      if (ve(a, b)) return a;
      if (a)
        for (var c = a.childNodes.length, d = 0; d < c; d++) {
          var e = O.Oa(a.childNodes.item(d), b);
          if (e) return e;
        }
      return null;
    };
    O.uc = function () {
      var a = window.document.createElement(l);
      a.className = "blogger-clickTrap singleton-element";
      a.style.position = "fixed";
      a.style.top = "0";
      a.style.left = "0";
      a.style.width = "100%";
      a.style.height = "100%";
      6 >= zd() &&
        (a.style.height = "expression(this.parentNode.clientHeight)");
      a.style.zIndex = "1000";
      a.style.cursor = "default";
      a.onclick = O.ub;
      a.onmousedown = O.ub;
      a.onmouseup = O.ub;
      a.style.background = "white";
      a.style.filter = "alpha(opacity=1)";
      a.style.opacity = ".01";
      a.textContent = "\u00a0";
      return a;
    };
    O.tc = function (a) {
      var b = window.document,
        c = O.Ib(b, a);
      a = O.Ib(b, a);
      c.style.backgroundColor = "#000";
      c.style.border = "1px solid #aaa";
      I &&
        (c.style.filter =
          ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678) alpha(opacity=50)');
      c.style.opacity = ".5";
      a.style.border = "1px solid transparent";
      c.style.zIndex = 1200;
      a.style.zIndex = 1200;
      return [c, a];
    };
    O.Ib = function (a, b) {
      a = a.createElement(l);
      a.style.position = "absolute";
      a.style.top = "75px";
      a.style.left = "-225px";
      a.style.width = "600px";
      a.style.height = "28px";
      a.style.margin = "0";
      a.style.padding = "10px";
      a.style.fontSize = "24px";
      a.style.textAlign = "center";
      a.style.color = "#fff";
      a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
      I &&
        ((a.style.top = "-140px"),
        (a.style.left = "-140px"),
        (a.style.filter =
          ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)'));
      a.style.MozTransform = gb;
      a.style.MozTransformOrigin = "50% 0";
      a.style.WebkitTransform = gb;
      a.style.WebkitTransformOrigin = "50% 0";
      Qd(a, fe(b, { ra: "0ae124b0-e2cc-4d0a-ae0c-59ce515b4101" }));
      a.className = "singleton-element";
      return a;
    };
    O.ub = function (a) {
      a || (a = window.event);
      a && ((a.cancelBubble = !0), a.stopPropagation && a.stopPropagation());
      return !1;
    };
    function fi() {
      this.C = [];
      for (var a = 0; a < O.Ja.length; ++a) this.C[this.C.length] = O.Ja[a];
    }
    function gi(a, b) {
      null == b && (b = "");
      for (var c = a.C.length - 1; 0 <= c; --c)
        if (a.C[c].name == b) return a.C[c].data;
      return null;
    }
    function hi(a, b) {
      var c = gi(a, b);
      if (null !== c) return c;
      var d = b.split(".");
      if (1 == d.length) return (c = gi(a, "")), c[b];
      c = gi(a, d[0]);
      b = 0;
      c ? (b = 1) : (c = gi(a, ""));
      for (a = b; a < d.length; a++) {
        if (null == c) return null;
        c = c[d[a]];
      }
      return c;
    }
    function Q(a, b) {
      this.L = a;
      this.H = b;
    }
    t = Q.prototype;
    t.Pa = function () {
      return this.L;
    };
    t.yc = function () {
      return this.H;
    };
    t.ka = function (a, b) {
      "configure" == a && di(this.H, b);
    };
    t.Ba = function (a, b, c) {
      O.Ba(b, c);
    };
    t.ia = function () {};
    z("_WidgetManager", O);
    O._SetOpenWidgetDialogs = O.Sc;
    O._Init = O.Bc;
    O._SetWidgetRefreshUrl = O.Tc;
    O._GetWidgetRefreshUrl = O.Kb;
    O._DisplayWidget = O.Jb;
    O._GetWidget = O.kb;
    O._HandleControllerResult = O.ka;
    O._HandlePageActionResult = O.Ac;
    O._IsOpenerReachable = O.Lb;
    O._SetDataContext = O.Rc;
    O._SetupPreview = O.Uc;
    O._RegisterWidget = O.Pb;
    O._RegisterNewWidget = O.Mc;
    O._PopupPaneFromParams = O.Kc;
    O._PopupConfig = O.Jc;
    O._PopupToolbox = O.Lc;
    O._KillPopupDelay = O.Ec;
    O._OnWidgetConfigured = O.Hc;
    O._OnWidgetConfiguredWithData = O.Ob;
    O._OnWidgetDeleted = O.Ic;
    z("_WidgetInfo", Zh);
    Zh.prototype._getInstanceId = Zh.prototype.J;
    Q.prototype._GetHelper = Q.prototype.yc;
    $h.prototype._GetData = $h.prototype.F;
    $h.prototype._GenerateWidgetMetadata = $h.prototype.D;
    O._GetAllData = O.xc;
    z("widget_module_provide", function (a, b, c) {
      var d = Qg.Ya(),
        e = d.C,
        f = d.J;
      e[a] || (e[a] = {});
      if (c) e[a][b] = c;
      else if (f[a]) {
        for (b = 0; b < f[a].length; ++b) (0, f[a][b][1])(e[a][f[a][b][0]]);
        delete f[a];
        delete d.F[a];
      }
    });
    function ii(a) {
      Q.call(this, "AdSense", a);
      this.H = a;
    }
    v(ii, Q);
    z("_AdSenseView", ii);
    function ji(a) {
      Q.call(this, "BlogArchive", a);
      this.C = a.N;
    }
    A(ji, Q);
    var ki = "&#9658;&nbsp;";
    t = ji.prototype;
    t.ka = function (a, b) {
      if ("configure" == a) di(this.H, b);
      else if ("getTitles" == a) {
        a: {
          a = b.path;
          var c = this.C.C.getElementsByTagName("A");
          for (e in c) {
            var d = c[e];
            if (d.href == a) {
              var e = rf(d, "li", "archivedate");
              break a;
            }
          }
          e = void 0;
        }
        a = K("posts", e);
        (c = rf(e, l, wa)) && df(c, { style: "", "data-height": "" });
        kf(a);
        for (c = 0; c < b.posts.length; c++) {
          d = b.posts[c];
          var f = document.createElement("li");
          Qd(
            f,
            fe("<a href=" + d.url + ">" + d.title + "</a>", {
              ra: "057788eb-9301-40b2-bfcf-360831db5d31",
            })
          );
          a.appendChild(f);
        }
        li(this, e);
        mi(this, e);
      } else ji.O.ka.call(this, a, b);
    };
    t.ia = function () {
      if (N(this.H, "ArchiveList")) {
        var a = cf(document, "a", qb, this.C.C);
        1 > a.length && (a = cf(document, "li", qb, this.C.C));
        if (0 < a.length && a[0].currentStyle)
          var b = a[0].parentNode.currentStyle.color;
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          0 < cf(document, l, wa, d).length
            ? ((d.onclick = this.Vc.bind(this)), li(this, d))
            : (d.onclick = this.Wc.bind(this));
          b && (d.style.color = b);
        }
        if ((a = N(this.H, "ArchiveMenu"))) {
          for (b = 1; b < a.options.length; b++)
            if (
              ((c = a.options[b].value),
              c == window.location.href ||
                null != window.location.href.match(c))
            ) {
              a.selectedIndex = b;
              break;
            }
          a.onchange = this.zc.bind(this);
        } else
          for (a = cf(document, l, Oa, this.C.C), b = 0; b < a.length; b++)
            (c = a[b]),
              c.addEventListener(ua, this.Zc.bind(this), !1),
              c.addEventListener(ua, this.Oc.bind(this), !1);
        "rtl" == this.H.N.data.languageDirection && (ki = "&#9668;&nbsp;");
      }
    };
    t.zc = function () {
      var a = N(this.H, "ArchiveMenu");
      a && "" != a.value && (window.location.href = a.value);
    };
    t.Wc = function (a) {
      a = a || window.event;
      var b = a.currentTarget || a.srcElement;
      b && !ve(b, qb) && (b = b.parentNode);
      a = O.Oa(b, "zippy");
      b = b.parentNode;
      if (ve(b, Qa))
        return ue(b, Qa, va), Qd(a, $d(ee, ki)), se(a, "toggle-open"), !1;
      ue(b, va, Qa);
      Qd(a, $d(ee, "&#9660;&nbsp;"));
      qe(a, "toggle-open");
      ni(this, b);
      return !1;
    };
    t.Zc = function (a) {
      a = a || window.event;
      a = a.currentTarget || a.srcElement;
      (a = ve(a, Oa) ? a : rf(a, l, Oa)) &&
        (a = K("menu", a)) &&
        (ve(a, "open") ? se(a, "open") : qe(a, "open"));
    };
    t.Oc = function (a) {
      a = a || window.event;
      var b = a.currentTarget || a.srcElement;
      if ((b = ve(b, "ripple") ? b : rf(b, l, "ripple"))) {
        var c = K("splash", b);
        if (!c) {
          c = document.createElement("span");
          qe(c, "splash");
          var d = document.createElement(l);
          qe(d, "splash-wrapper");
          d.appendChild(c);
          b.insertBefore(d, b.firstChild);
        }
        se(c, "animate");
        d = b.offsetWidth;
        var e = getComputedStyle(b);
        d += parseInt(e.marginLeft) + parseInt(e.marginRight);
        d = Math.max(d, oi(b));
        df(c, {
          style:
            "height: " +
            d +
            "px; width: " +
            d +
            "px; left: " +
            (a.pageX - b.offsetLeft - d / 2) +
            "px; top: " +
            (a.pageY - b.offsetTop - d / 2) +
            "px;",
        });
        qe(c, "animate");
      }
    };
    t.Vc = function (a) {
      a = a || window.event;
      if (
        !a.currentTarget ||
        a.currentTarget == a.srcElement ||
        "A" != a.srcElement.tagName
      ) {
        var b = a.currentTarget || a.srcElement;
        b && !ve(b, qb) && (b = b.parentNode);
        a.stopPropagation();
        a = ve(b, "archivedate") ? b : b.parentNode;
        ve(a, Qa)
          ? (pi(this, a), ue(a, Qa, va))
          : (ni(this, a), mi(this, a), ue(a, va, Qa));
      }
    };
    function ni(a, b) {
      var c = b.getElementsByTagName("UL");
      0 < c.length && !ve(c[0], "posts")
        ? (c = !1)
        : ((c = O.Oa(b, "post-count")),
          (c = parseInt(c.innerHTML.match(/\d+/), 10)),
          (c = b.getElementsByTagName("LI").length < c));
      if (c) {
        var d = K(wa, b);
        c = K("posts", b);
        c ||
          ((c = document.createElement("UL")),
          d ? d.appendChild(c) : b.appendChild(c),
          qe(c, "posts"));
        d && df(d, { style: "", "data-height": "" });
        (d = rf(b, l, wa)) && df(d, { style: "", "data-height": "" });
        d = document.createElement("LI");
        Qd(d, ee.C(a.H.N.data.loadingMessage || "Loading..."));
        c.appendChild(d);
        a.H.Da(
          "getTitles",
          { path: O.Oa(b, "post-count-link").href },
          null,
          ha
        );
      }
    }
    function mi(a, b) {
      var c = K(wa, b);
      c.getAttribute(Ia) || li(a, b);
      var d = (a = c.getAttribute(Ia) || oi(c)) ? a + "px" : p;
      window.setTimeout(function () {
        df(c, { style: "max-height: " + d + ";" });
      }, 10);
    }
    function pi(a, b) {
      var c = K(wa, b);
      c.getAttribute(Ia) || li(a, b);
      window.setTimeout(function () {
        df(c, { style: $a });
      }, 10);
    }
    function li(a, b) {
      var c = K(wa, b);
      df(c, { style: "max-height: none;" });
      for (var d = 0, e = cf(document, l, wa, c), f = 0; f < e.length; f++) {
        var g = e[f],
          h = rf(g, "li", qb);
        if (ve(h, va)) {
          var k = g.getAttribute(Ia);
          k || (li(a, h), (k = g.getAttribute(Ia)));
          d += parseInt(k);
        }
      }
      a = d + oi(c);
      c.setAttribute(Ia, a);
      c.setAttribute(kb, "max-height: " + a + "px;");
      ve(b, va) && c.setAttribute(kb, $a);
    }
    function oi(a) {
      var b = a.offsetHeight;
      a = getComputedStyle(a);
      return (b += parseInt(a.marginTop) + parseInt(a.marginBottom));
    }
    z("_BlogArchiveView", ji);
    function ci() {
      return function (a) {
        return 500 <= bi(a)
          ? (a.responseText.length
              ? (document.body.innerHTML = a.responseText)
              : window.alert(LayoutsMessages.SERVER_ERROR),
            !1)
          : !0;
      };
    }
    function ei(a, b) {
      var c = O,
        d = a.ownerDocument;
      b = b._GetHelper();
      var e = b._GetData(),
        f = c._GetAllData();
      a = qi(d, a, l, "widget-wrap1");
      a = qi(d, a, l, "widget-wrap2");
      a = qi(d, a, l, "widget-wrap3");
      var g = qi(d, a, l, "widget-content");
      if ((a = e.version && 1 < e.version))
        (g.className += " visibility"),
          qi(
            d,
            g,
            l,
            "layout-widget-state " + (e.isVisible ? rb : "not-visible")
          ).setAttribute(pb, e.visibilityTooltipMessage);
      var h = qi(d, g, l, "layout-title");
      if (e[Za]) {
        var k = qi(d, g, l, Ya);
        k.appendChild(d.createTextNode(e[Za]));
        k.setAttribute(pb, e[Ya]);
      }
      h.appendChild(d.createTextNode(e["layout-title"]));
      e = qi(d, g, "a", "editlink");
      var n = b._GenerateWidgetMetadata();
      e.target = "chooseWidget";
      e.onclick = function () {
        return c._PopupConfig(d.getElementById(n.instanceId));
      };
      a && (e.className += " icon");
      e.appendChild(d.createTextNode(f.messages.edit || "Edit"));
    }
    function qi(a, b, c, d) {
      a = a.createElement(c);
      a.className = d;
      b.appendChild(a);
      return a;
    }
    function ri(a) {
      Q.call(this, ri.ea, a);
    }
    A(ri, Q);
    ri.ea = "Attribution";
    z("_AttributionView", ri);
    yd();
    xd();
    wd();
    var si = {},
      ti = null;
    var ui = "undefined" !== typeof Uint8Array;
    var vi =
      typeof Symbol === m && "symbol" === typeof Symbol()
        ? Symbol(void 0)
        : void 0;
    function wi(a, b) {
      Object.isFrozen(a) ||
        (vi
          ? (a[vi] |= b)
          : void 0 !== a.cb
          ? (a.cb |= b)
          : Object.defineProperties(a, {
              cb: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            }));
    }
    function xi(a) {
      var b;
      vi ? (b = a[vi]) : (b = a.cb);
      return null == b ? 0 : b;
    }
    function yi(a) {
      wi(a, 1);
      return a;
    }
    function zi(a) {
      return (
        null !== a &&
        typeof a === q &&
        !Array.isArray(a) &&
        a.constructor === Object
      );
    }
    var Ai = Object.freeze(yi([])),
      Bi =
        "undefined" != typeof Symbol &&
        "undefined" != typeof Symbol.hasInstance;
    function Ci(a) {
      return { value: a, configurable: !1, writable: !1, enumerable: !1 };
    }
    function Di(a, b, c) {
      if (null != a) {
        if (Array.isArray(a)) a = Ei(a, b, c);
        else if (zi(a)) {
          var d = {},
            e;
          for (e in a) d[e] = Di(a[e], b, c);
          a = d;
        } else a = b(a);
        return a;
      }
    }
    function Ei(a, b, c) {
      var d = Array.prototype.slice.call(a);
      c(a, d);
      for (a = 0; a < d.length; a++) d[a] = Di(d[a], b, c);
      return d;
    }
    function Fi(a) {
      if (a && typeof a == q && a.toJSON) return a.toJSON();
      a: switch (typeof a) {
        case cb:
          a = isFinite(a) ? a : String(a);
          break a;
        case q:
          if (
            a &&
            !Array.isArray(a) &&
            ui &&
            null != a &&
            a instanceof Uint8Array
          ) {
            var b;
            void 0 === b && (b = 0);
            if (!ti) {
              ti = {};
              for (
                var c =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                      ""
                    ),
                  d = ["+/=", "+/", "-_=", "-_.", "-_"],
                  e = 0;
                5 > e;
                e++
              ) {
                var f = c.concat(d[e].split(""));
                si[e] = f;
                for (var g = 0; g < f.length; g++) {
                  var h = f[g];
                  void 0 === ti[h] && (ti[h] = g);
                }
              }
            }
            b = si[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
              var k = a[f],
                n = a[f + 1];
              h = a[f + 2];
              g = b[k >> 2];
              k = b[((k & 3) << 4) | (n >> 4)];
              n = b[((n & 15) << 2) | (h >> 6)];
              h = b[h & 63];
              c[e++] = "" + g + k + n + h;
            }
            g = 0;
            h = d;
            switch (a.length - f) {
              case 2:
                (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
              case 1:
                (a = a[f]),
                  (c[e] =
                    "" + b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
            }
            a = c.join("");
          }
      }
      return Array.isArray(a) ? Ei(a, Fi, Gi) : a;
    }
    function Gi() {}
    function R(a, b) {
      return -1 === b
        ? null
        : b >= a.F
        ? a.D
          ? a.D[b]
          : void 0
        : a.C[b + a.G];
    }
    function S(a, b, c) {
      var d = void 0 === d ? !1 : d;
      var e = a.C;
      if (e && xi(e) & 2) throw Error("Cannot mutate an immutable Message");
      a.J && (a.J = void 0);
      if (b >= a.F || d)
        return ((a.D || (a.D = a.C[a.F + a.G] = {}))[b] = c), a;
      void 0 !== a.D && a.F >= a.C.length
        ? ((d = a.C.length - 1),
          (e = b + a.G),
          e >= d
            ? ((a.C[d] = void 0), (a.C[e] = c), a.C.push(a.D))
            : (a.C[e] = c))
        : (a.C[b + a.G] = c);
      void 0 !== a.D && b in a.D && delete a.D[b];
      return a;
    }
    function Hi(a, b) {
      a = R(a, b);
      return null == a ? a : +a;
    }
    function T(a, b) {
      a = R(a, b);
      return null == a ? a : !!a;
    }
    function U(a, b) {
      a = T(a, b);
      return null == a ? !1 : a;
    }
    function Ii(a, b, c) {
      a || (a = Ji);
      Ji = null;
      var d = this.constructor.C || 0,
        e = 0 < d,
        f = this.constructor.D;
      a ? xi(a) & 16 && wi(a, 32) : ((a = f ? [f] : []), wi(a, 48));
      e &&
        0 < a.length &&
        zi(a[a.length - 1]) &&
        "g" in a[a.length - 1] &&
        (d = 0);
      this.G = (f ? 0 : -1) - d;
      this.C = a;
      a: {
        f = this.C.length;
        d = f - 1;
        if (f && ((f = this.C[d]), zi(f))) {
          this.D = f;
          b = Object.keys(f);
          0 < b.length && jc(b, isNaN)
            ? (this.F = Number.MAX_VALUE)
            : (this.F = d - this.G);
          break a;
        }
        void 0 !== b && -1 < b
          ? ((this.F = Math.max(b, d + 1 - this.G)), (this.D = void 0))
          : (this.F = Number.MAX_VALUE);
      }
      if (!e && this.D && "g" in this.D)
        throw Error(
          'Unexpected "g" flag in sparse object of message that is not a group type.'
        );
      if (c)
        for (e = 0; e < c.length; e++)
          (b = c[e]),
            b < this.F
              ? ((b += this.G),
                (d = this.C[b]) ? Array.isArray(d) && yi(d) : (this.C[b] = Ai))
              : ((d = this.D || (this.D = this.C[this.F + this.G] = {})),
                (f = d[b]) ? Array.isArray(f) && yi(f) : (d[b] = Ai));
    }
    Ii.prototype.toJSON = function () {
      return Ei(this.C, Fi, Gi);
    };
    Ii.prototype.toString = function () {
      return this.C.toString();
    };
    var Ji;
    function Ki() {
      Ii.apply(this, arguments);
    }
    v(Ki, Ii);
    if (Bi) {
      var Li = {};
      Object.defineProperties(
        Ki,
        ((Li[Symbol.hasInstance] = Ci(function () {
          throw Error(void 0);
        })),
        Li)
      );
    }
    function Mi() {
      Ki.apply(this, arguments);
    }
    v(Mi, Ki);
    if (Bi) {
      var Ni = {};
      Object.defineProperties(
        Mi,
        ((Ni[Symbol.hasInstance] = Ci(Object[Symbol.hasInstance])), Ni)
      );
    }
    function Oi(a, b) {
      this.F = this.L = this.G = "";
      this.M = null;
      this.K = this.D = "";
      this.J = !1;
      var c;
      a instanceof Oi
        ? ((this.J = void 0 !== b ? b : a.J),
          Pi(this, a.G),
          (this.L = a.L),
          (this.F = a.F),
          Qi(this, a.M),
          Ri(this, a.D),
          Si(this, Ti(a.C)),
          (this.K = a.K))
        : a && (c = String(a).match(bh))
        ? ((this.J = !!b),
          Pi(this, c[1] || "", !0),
          (this.L = Ui(c[2] || "")),
          (this.F = Ui(c[3] || "", !0)),
          Qi(this, c[4]),
          Ri(this, c[5] || "", !0),
          Si(this, c[6] || "", !0),
          (this.K = Ui(c[7] || "")))
        : ((this.J = !!b), (this.C = new Vi(null, this.J)));
    }
    Oi.prototype.toString = function () {
      var a = [],
        b = this.G;
      b && a.push(Wi(b, Xi, !0), ":");
      var c = this.F;
      if (c || "file" == b)
        a.push("//"),
          (b = this.L) && a.push(Wi(b, Xi, !0), "@"),
          a.push(
            encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
          ),
          (c = this.M),
          null != c && a.push(":", String(c));
      if ((c = this.D))
        this.F && "/" != c.charAt(0) && a.push("/"),
          a.push(Wi(c, "/" == c.charAt(0) ? Yi : Zi, !0));
      (c = this.C.toString()) && a.push("?", c);
      (c = this.K) && a.push("#", Wi(c, $i));
      return a.join("");
    };
    Oi.prototype.resolve = function (a) {
      var b = new Oi(this),
        c = !!a.G;
      c ? Pi(b, a.G) : (c = !!a.L);
      c ? (b.L = a.L) : (c = !!a.F);
      c ? (b.F = a.F) : (c = null != a.M);
      var d = a.D;
      if (c) Qi(b, a.M);
      else if ((c = !!a.D)) {
        if ("/" != d.charAt(0))
          if (this.F && !this.D) d = "/" + d;
          else {
            var e = b.D.lastIndexOf("/");
            -1 != e && (d = b.D.slice(0, e + 1) + d);
          }
        e = d;
        if (".." == e || "." == e) d = "";
        else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
          d = Oc(e, "/");
          e = e.split("/");
          for (var f = [], g = 0; g < e.length; ) {
            var h = e[g++];
            "." == h
              ? d && g == e.length && f.push("")
              : ".." == h
              ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
                d && g == e.length && f.push(""))
              : (f.push(h), (d = !0));
          }
          d = f.join("/");
        } else d = e;
      }
      c ? Ri(b, d) : (c = "" !== a.C.toString());
      c ? Si(b, Ti(a.C)) : (c = !!a.K);
      c && (b.K = a.K);
      return b;
    };
    function Pi(a, b, c) {
      a.G = c ? Ui(b, !0) : b;
      a.G && (a.G = a.G.replace(/:$/, ""));
    }
    function Qi(a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.M = b;
      } else a.M = null;
    }
    function Ri(a, b, c) {
      a.D = c ? Ui(b, !0) : b;
      return a;
    }
    function Si(a, b, c) {
      b instanceof Vi
        ? ((a.C = b), aj(a.C, a.J))
        : (c || (b = Wi(b, bj)), (a.C = new Vi(b, a.J)));
    }
    function cj(a, b, c) {
      a.C.set(b, c);
      return a;
    }
    function dj(a, b) {
      return a instanceof Oi ? new Oi(a) : new Oi(a, b);
    }
    function Ui(a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, "%2525"))
          : decodeURIComponent(a)
        : "";
    }
    function Wi(a, b, c) {
      return typeof a === r
        ? ((a = encodeURI(a).replace(b, ej)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          a)
        : null;
    }
    function ej(a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    }
    var Xi = /[#\/\?@]/g,
      Zi = /[#\?:]/g,
      Yi = /[#\?]/g,
      bj = /[#\?@]/g,
      $i = /#/g;
    function Vi(a, b) {
      this.D = this.C = null;
      this.F = a || null;
      this.G = !!b;
    }
    function fj(a) {
      a.C ||
        ((a.C = new Map()),
        (a.D = 0),
        a.F &&
          ch(a.F, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    }
    function gj(a) {
      var b = Hh(a);
      if ("undefined" == typeof b) throw Error("Keys are undefined");
      var c = new Vi(null);
      a = Gh(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        Array.isArray(f) ? hj(c, e, f) : c.add(e, f);
      }
      return c;
    }
    t = Vi.prototype;
    t.V = function () {
      fj(this);
      return this.D;
    };
    t.add = function (a, b) {
      fj(this);
      this.F = null;
      a = ij(this, a);
      var c = this.C.get(a);
      c || this.C.set(a, (c = []));
      c.push(b);
      this.D = this.D + 1;
      return this;
    };
    function jj(a, b) {
      fj(a);
      b = ij(a, b);
      a.C.has(b) &&
        ((a.F = null), (a.D = a.D - a.C.get(b).length), a.C.delete(b));
    }
    t.la = function () {
      fj(this);
      return 0 == this.D;
    };
    function kj(a, b) {
      fj(a);
      b = ij(a, b);
      return a.C.has(b);
    }
    t.forEach = function (a, b) {
      fj(this);
      this.C.forEach(function (c, d) {
        c.forEach(function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };
    t.oa = function () {
      fj(this);
      for (
        var a = Array.from(this.C.values()),
          b = Array.from(this.C.keys()),
          c = [],
          d = 0;
        d < b.length;
        d++
      )
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
      return c;
    };
    t.ca = function (a) {
      fj(this);
      var b = [];
      if (typeof a === r)
        kj(this, a) && (b = b.concat(this.C.get(ij(this, a))));
      else {
        a = Array.from(this.C.values());
        for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
      }
      return b;
    };
    t.set = function (a, b) {
      fj(this);
      this.F = null;
      a = ij(this, a);
      kj(this, a) && (this.D = this.D - this.C.get(a).length);
      this.C.set(a, [b]);
      this.D = this.D + 1;
      return this;
    };
    t.get = function (a, b) {
      if (!a) return b;
      a = this.ca(a);
      return 0 < a.length ? String(a[0]) : b;
    };
    function hj(a, b, c) {
      jj(a, b);
      0 < c.length &&
        ((a.F = null), a.C.set(ij(a, b), oc(c)), (a.D = a.D + c.length));
    }
    t.toString = function () {
      if (this.F) return this.F;
      if (!this.C) return "";
      for (
        var a = [], b = Array.from(this.C.keys()), c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c],
          e = encodeURIComponent(String(d));
        d = this.ca(d);
        for (var f = 0; f < d.length; f++) {
          var g = e;
          "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
          a.push(g);
        }
      }
      return (this.F = a.join("&"));
    };
    function Ti(a) {
      var b = new Vi();
      b.F = a.F;
      a.C && ((b.C = new Map(a.C)), (b.D = a.D));
      return b;
    }
    function ij(a, b) {
      b = String(b);
      a.G && (b = b.toLowerCase());
      return b;
    }
    function aj(a, b) {
      b &&
        !a.G &&
        (fj(a),
        (a.F = null),
        a.C.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e && (jj(this, d), hj(this, e, c));
        }, a));
      a.G = b;
    }
    t.Dc = function (a) {
      for (var b = 0; b < arguments.length; b++)
        Ih(
          arguments[b],
          function (c, d) {
            this.add(d, c);
          },
          this
        );
    };
    var lj = {},
      mj = {},
      nj = {};
    function oj() {
      throw Error("Do not instantiate directly");
    }
    oj.prototype.Xb = null;
    oj.prototype.Cb = function () {
      return this.content;
    };
    oj.prototype.toString = function () {
      return this.content;
    };
    function pj() {
      oj.call(this);
    }
    A(pj, oj);
    pj.prototype.Yb = lj;
    function qj(a, b) {
      return null != a && a.Yb === b;
    }
    function rj(a) {
      if (null != a)
        switch (a.Xb) {
          case 1:
            return 1;
          case -1:
            return -1;
          case 0:
            return 0;
        }
      return null;
    }
    function sj(a) {
      return qj(a, lj)
        ? a
        : a instanceof Bd
        ? tj(Cd(a).toString())
        : a instanceof Bd
        ? tj(Cd(a).toString())
        : tj(String(String(a)).replace(uj, vj), rj(a));
    }
    var tj = (function (a) {
      function b(c) {
        this.content = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.Xb = d);
        return c;
      };
    })(pj);
    function wj(a) {
      if (qj(a, lj)) {
        var b = String;
        a = String(a.Cb()).replace(xj, "").replace(yj, "&lt;");
        b = b(a).replace(zj, vj);
      } else b = String(a).replace(uj, vj);
      return b;
    }
    function Aj(a) {
      qj(a, mj) || qj(a, nj)
        ? (a = Bj(a))
        : a instanceof C
        ? (a = Bj(Zc(a)))
        : a instanceof C
        ? (a = Bj(Zc(a)))
        : a instanceof Ic
        ? (a = Bj(Kc(a).toString()))
        : a instanceof Ic
        ? (a = Bj(Kc(a).toString()))
        : ((a = String(a)), (a = Cj.test(a) ? a.replace(Dj, Ej) : ra));
      return a;
    }
    var Fj = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    };
    function vj(a) {
      return Fj[a];
    }
    var Gj = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    };
    function Ej(a) {
      return Gj[a];
    }
    var uj = /[\x00\x22\x26\x27\x3c\x3e]/g,
      zj = /[\x00\x22\x27\x3c\x3e]/g,
      Dj =
        /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
      Cj = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i,
      Hj =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    function Bj(a) {
      return String(a).replace(Dj, Ej);
    }
    var xj = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
      yj = /</g; /*
       SPDX-License-Identifier: Apache-2.0 */
    var Ij = Object.prototype.hasOwnProperty;
    function Jj() {}
    Jj.prototype = Object.create(null);
    function Kj(a, b, c) {
      a = a.style;
      if (typeof c === r) a.cssText = c;
      else {
        a.cssText = "";
        for (var d in c)
          Ij.call(c, d) &&
            ((b = c[d]),
            0 <= d.indexOf("-") ? a.setProperty(d, b) : (a[d] = b));
      }
    }
    function Lj(a, b, c) {
      var d = typeof c;
      d === q || d === m
        ? (a[b] = c)
        : null == c
        ? a.removeAttribute(b)
        : (d =
            0 === b.lastIndexOf("xml:", 0)
              ? "http://www.w3.org/XML/1998/namespace"
              : 0 === b.lastIndexOf("xlink:", 0)
              ? "http://www.w3.org/1999/xlink"
              : null)
        ? a.setAttributeNS(d, b, c)
        : a.setAttribute(b, c);
    }
    function Mj() {
      var a = new Jj();
      a.__default = Lj;
      a.style = Kj;
      return a;
    }
    Mj();
    var Nj = Mj(); /*
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
      */
    var Oj = {};
    Nj.checked = function (a, b, c) {
      null == c
        ? (a.removeAttribute("checked"), (a.checked = !1))
        : (a.setAttribute("checked", String(c)),
          (a.checked = !(!1 === c || "false" === c)));
    };
    Nj.value = function (a, b, c) {
      null == c
        ? (a.removeAttribute("value"), (a.value = ""))
        : (a.setAttribute("value", String(c)), (a.value = String(c)));
    };
    function Pj(a, b) {
      return Qj(b, a.config, a.wd, a.ld, a.depth);
    }
    function Qj(a, b, c, d, e) {
      var f = d.extraIconClass,
        g =
          '<li class="comment" id="c' +
          wj(d.id) +
          '"><div class="avatar-image-container"><img src="',
        h = d.authorAvatarSrc;
      qj(h, mj) || qj(h, nj)
        ? (h = Bj(h))
        : h instanceof C
        ? (h = Bj(Zc(h)))
        : h instanceof C
        ? (h = Bj(Zc(h)))
        : h instanceof Ic
        ? (h = Bj(Kc(h).toString()))
        : h instanceof Ic
        ? (h = Bj(Kc(h).toString()))
        : ((h = String(h)), (h = Hj.test(h) ? h.replace(Dj, Ej) : ra));
      f =
        g +
        wj(h) +
        '" alt=""/></div><div class="comment-block"><div class="comment-header"><cite class="user">' +
        (d.authorUrl
          ? '<a href="' +
            wj(Aj(d.authorUrl)) +
            '" rel="nofollow">' +
            sj(d.author) +
            "</a>"
          : sj(d.author)) +
        '</cite><span class="icon user ' +
        wj(null != f ? f : "") +
        '"></span><span class="datetime secondary-text"><a rel="nofollow" href="' +
        wj(Aj(d.url)) +
        '">' +
        sj(d.timestamp) +
        '</a></span></div><p class="comment-content">' +
        sj(d.body) +
        '</p><span class="comment-actions secondary-text">' +
        (e < b.maxDepth
          ? '<a class="comment-reply" target="_self" data-comment-id="' +
            wj(d.id) +
            '">' +
            sj(c.reply) +
            "</a>"
          : "") +
        '<span class="item-control blog-admin ' +
        wj(d.adminClass) +
        '"><a target="_self" href="' +
        wj(Aj(d.deleteUrl)) +
        '">' +
        sj(c["delete"]) +
        '</a></span></span></div><div class="comment-replies">';
      g = d.replies;
      g = null != g ? g : [];
      f +=
        '<div id="c' +
        wj(d.id) +
        '-rt" class="comment-thread inline-thread' +
        (0 == g.length ? " hidden" : "") +
        '"><span class="thread-toggle thread-expanded"><span class="thread-arrow"></span><span class="thread-count"><a target="_self">' +
        sj(c.replies) +
        '</a></span></span><ol id="c' +
        wj(d.id) +
        '-ra" class="thread-chrome thread-expanded"><div>';
      h = g.length;
      for (var k = 0; k < h; k++) f += Qj(a, b, c, g[k], e ? e + 1 : 1);
      f +=
        '</div><div id="c' +
        wj(d.id) +
        '-continue" class="continue"><a class="comment-reply" target="_self" data-comment-id="' +
        wj(d.id) +
        '">' +
        sj(c.reply) +
        '</a></div></ol></div></div><div class="comment-replybox-single" id="c' +
        wj(d.id) +
        '-ce"></div></li>';
      return tj(f);
    }
    function Rj(a, b, c) {
      if (typeof b === r) (b = Sj(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d],
            f = Sj(c, d);
          f && (c.style[f] = e);
        }
    }
    var Tj = {};
    function Sj(a, b) {
      var c = Tj[b];
      if (!c) {
        var d = Ze(b);
        c = d;
        void 0 === a.style[d] &&
          ((d = (Ce ? "Webkit" : Be ? "Moz" : I ? "ms" : null) + $e(d)),
          void 0 !== a.style[d] && (c = d));
        Tj[b] = c;
      }
      return c;
    }
    function Uj() {}
    Sb(Uj);
    function Vj(a) {
      dg.call(this);
      this.Y = a || dc || (dc = new tf());
      this.ga = null;
      this.va = !1;
      this.C = null;
      this.D = void 0;
      this.T = this.L = null;
    }
    A(Vj, dg);
    Uj.Ya();
    t = Vj.prototype;
    t.Xa = function () {
      return this.C;
    };
    function Wj(a) {
      a.D || (a.D = new Zf(a));
      return a.D;
    }
    t.Mb = function () {
      this.C = uf(this.Y, "DIV");
    };
    t.render = function (a) {
      if (this.va) throw Error("Component already rendered");
      this.C || this.Mb();
      a ? a.insertBefore(this.C, null) : this.Y.D.body.appendChild(this.C);
      (this.L && !this.L.va) || this.Wa();
    };
    t.Wa = function () {
      this.va = !0;
      Xj(this, function (a) {
        !a.va && a.Xa() && a.Wa();
      });
    };
    function Yj(a) {
      Xj(a, function (b) {
        b.va && Yj(b);
      });
      a.D && cg(a.D);
      a.va = !1;
    }
    t.X = function () {
      this.va && Yj(this);
      this.D && (this.D.xa(), delete this.D);
      Xj(this, function (a) {
        a.xa();
      });
      this.C && lf(this.C);
      this.L = this.C = this.T = null;
      Vj.O.X.call(this);
    };
    function Xj(a, b) {
      a.T && a.T.forEach(b, void 0);
    }
    function Zj(a, b, c, d) {
      Vj.call(this, d);
      this.J = c || window;
      this.Z = a;
      this.da = b;
      this.R = {};
      this.K = this.F = null;
      this.G = {};
      this.G.EMAIL = { eb: "Email", yb: this.cd };
      this.G.FACEBOOK = { eb: "Facebook", yb: this.dd };
      this.G.TWITTER = { eb: "Twitter", yb: this.ed };
    }
    v(Zj, Vj);
    t = Zj.prototype;
    t.Mb = function () {
      var a = this.Y,
        b = a.C("DIV", {
          style:
            "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;",
          class: "mobile-share-panel-outer",
        });
      this.F = a.C("DIV", {
        style: "position:absolute;;width:230px;height:200px;",
        class: "mobile-share-panel-inner",
      });
      b.appendChild(this.F);
      var c = a.C("DIV", { class: "mobile-share-panel-title" });
      c.innerText = na;
      c.textContent = na;
      this.F.appendChild(c);
      this.K = a.C("A", {
        href: "javascript:void(0)",
        class: "mobile-share-panel-button-close",
      });
      this.K.textContent = "\u00d7";
      c.appendChild(this.K);
      for (var d in this.G) {
        c = a.C("A", {
          target: pa,
          display: ta,
          class:
            "mobile-share-panel-button mobile-share-panel-button-" +
            d.toLowerCase(),
        });
        var e = a.C(ja),
          f = this.G[d];
        e.innerText = f.eb;
        e.textContent = f.eb;
        c.href = f.yb.call(this);
        c.appendChild(e);
        this.F.appendChild(c);
        this.R[d] = c;
      }
      this.C = b;
    };
    t.Wa = function () {
      Vj.prototype.Wa.call(this);
      for (var a in this.R) {
        var b = this.R[a];
        b && ag(Wj(this), b, ua, this.zb);
      }
      ag(Wj(this), this.K, ua, this.zb);
      a = this.Xa();
      ag(Wj(this), a, ua, this.zb);
      this.Rb();
      ag(Wj(this), this.J, "scroll", this.Rb);
    };
    t.show = function (a) {
      var b = this.Xa();
      b && (b.style.display = a ? "" : p);
    };
    t.Rb = function () {
      var a = this.J.innerHeight,
        b = this.J.innerWidth,
        c = this.J.pageYOffset,
        d = this.J.pageXOffset,
        e = 0;
      200 < a && (e = (a - 200) / 2);
      Rj(this.F, "top", e + c + "px");
      a = 0;
      230 < b && (a = (b - 230) / 2);
      Rj(this.F, "left", a + d + "px");
    };
    t.ed = function () {
      return (
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(this.Z + ": " + this.da)
      );
    };
    t.dd = function () {
      return (
        "https://m.facebook.com/sharer.php?u=" +
        encodeURIComponent(this.da) +
        "&t=" +
        encodeURIComponent(this.Z)
      );
    };
    t.cd = function () {
      return (
        "mailto:?subject=" +
        encodeURIComponent(this.Z) +
        "&body=" +
        encodeURIComponent(this.da)
      );
    };
    t.zb = function () {
      this.show(!1);
    };
    var ak = RegExp(
        "^((http(s)?):)?\\/\\/((((lh[3-6](-tt|-d[a-g,z]|-testonly)?\\.((ggpht)|(googleusercontent)|(google)|(sandbox\\.google)))|(([1-4]\\.bp\\.blogspot)|(bp[0-3]\\.blogger))|(ccp-lh\\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\\.(ggpht|googleusercontent))|(gm[1-4]\\.ggpht)|(play-(ti-)?lh\\.googleusercontent)|(gz0\\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\\.(ggpht|googleusercontent)))\\.com)|(dp[3-6]\\.googleusercontent\\.cn)|(lh[3-6]\\.(googleadsserving\\.cn|xn--9kr7l\\.com))|(photos\\-image\\-(dev|qa)(-auth)?\\.corp\\.google\\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\\.sandbox\\.google\\.com\\/image)|(image\\-(dev|qa)\\-lighthouse(-auth)?\\.sandbox\\.google\\.com(\\/image)?))\\/",
        "i"
      ),
      bk = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i,
      ck =
        /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i,
      dk =
        /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;
    function ek(a) {
      return ak.test(a) || bk.test(a) || ck.test(a) || dk.test(a);
    }
    function fk(a) {
      Mi.call(this, a);
    }
    v(fk, Mi);
    fk.prototype.getToken = function () {
      return R(this, 24);
    };
    fk.prototype.setToken = function (a) {
      return S(this, 24, a);
    };
    function gk() {
      this.D = void 0;
      this.C = {};
    }
    t = gk.prototype;
    t.set = function (a, b) {
      hk(this, a, b, !1);
    };
    t.add = function (a, b) {
      hk(this, a, b, !0);
    };
    function hk(a, b, c, d) {
      for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.C[f] || (a.C[f] = new gk());
        a = a.C[f];
      }
      if (d && void 0 !== a.D)
        throw Error('The collection already contains the key "' + b + '"');
      a.D = c;
    }
    function ik(a, b) {
      for (var c = 0; c < b.length; c++)
        if (((a = a.C[b.charAt(c)]), !a)) return;
      return a;
    }
    t.get = function (a) {
      return (a = ik(this, a)) ? a.D : void 0;
    };
    t.ca = function () {
      var a = [];
      jk(this, a);
      return a;
    };
    function jk(a, b) {
      void 0 !== a.D && b.push(a.D);
      for (var c in a.C) jk(a.C[c], b);
    }
    t.oa = function (a) {
      var b = [];
      if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
          var e = a.charAt(d);
          if (!c.C[e]) return [];
          c = c.C[e];
        }
        kk(c, a, b);
      } else kk(this, "", b);
      return b;
    };
    function kk(a, b, c) {
      void 0 !== a.D && c.push(b);
      for (var d in a.C) kk(a.C[d], b + d, c);
    }
    t.V = function () {
      var a = this.ca();
      if (a.V && typeof a.V == m) a = a.V();
      else if (Ub(a) || typeof a === r) a = a.length;
      else {
        var b = 0,
          c;
        for (c in a) b++;
        a = b;
      }
      return a;
    };
    t.la = function () {
      return void 0 === this.D && vc(this.C);
    };
    function lk() {
      if (!mk) {
        var a = (mk = new gk()),
          b;
        for (b in nk) a.add(b, nk[b]);
      }
    }
    var mk;
    function V(a, b) {
      this.types = a;
      this.C = b;
    }
    var nk = {
      a: new V(
        [3, 0],
        [
          function (a, b) {
            S(a, 21, b);
          },
          function (a, b) {
            S(a, 56, b);
          },
        ]
      ),
      al: new V(
        [3],
        [
          function (a, b) {
            S(a, 74, b);
          },
        ]
      ),
      b: new V(
        [3, 0],
        [
          function (a, b) {
            S(a, 23, b);
          },
          function (a, b) {
            S(a, 38, b);
          },
        ]
      ),
      ba: new V(
        [0],
        [
          function (a, b) {
            S(a, 85, b);
          },
        ]
      ),
      bc: new V(
        [0],
        [
          function (a, b) {
            S(a, 87, b);
          },
        ]
      ),
      br: new V(
        [0],
        [
          function (a, b) {
            S(a, 86, b);
          },
        ]
      ),
      c: new V(
        [3, 0],
        [
          function (a, b) {
            S(a, 2, b);
          },
          function (a, b) {
            S(a, 39, b);
          },
        ]
      ),
      cc: new V(
        [3],
        [
          function (a, b) {
            S(a, 51, b);
          },
        ]
      ),
      ci: new V(
        [3],
        [
          function (a, b) {
            S(a, 32, b);
          },
        ]
      ),
      cp: new V(
        [0],
        [
          function (a, b) {
            S(a, 92, b);
          },
        ]
      ),
      cv: new V(
        [0],
        [
          function (a, b) {
            S(a, 94, b);
          },
        ]
      ),
      d: new V(
        [3],
        [
          function (a, b) {
            S(a, 3, b);
          },
        ]
      ),
      dc: new V(
        [5],
        [
          function (a, b) {
            S(a, 99, b);
          },
        ]
      ),
      df: new V(
        [3],
        [
          function (a, b) {
            S(a, 80, b);
          },
        ]
      ),
      dv: new V(
        [3],
        [
          function (a, b) {
            S(a, 90, b);
          },
        ]
      ),
      e: new V(
        [0],
        [
          function (a, b) {
            S(a, 15, b);
          },
        ]
      ),
      f: new V(
        [4],
        [
          function (a, b) {
            S(a, 16, b);
          },
        ]
      ),
      fg: new V(
        [3],
        [
          function (a, b) {
            S(a, 34, b);
          },
        ]
      ),
      fh: new V(
        [3],
        [
          function (a, b) {
            S(a, 30, b);
          },
        ]
      ),
      fm: new V(
        [3],
        [
          function (a, b) {
            S(a, 84, b);
          },
        ]
      ),
      fo: new V(
        [2],
        [
          function (a, b) {
            S(a, 79, b);
          },
        ]
      ),
      ft: new V(
        [3],
        [
          function (a, b) {
            S(a, 50, b);
          },
        ]
      ),
      fv: new V(
        [3],
        [
          function (a, b) {
            S(a, 31, b);
          },
        ]
      ),
      g: new V(
        [3],
        [
          function (a, b) {
            S(a, 14, b);
          },
        ]
      ),
      gd: new V(
        [3],
        [
          function (a, b) {
            S(a, 83, b);
          },
        ]
      ),
      h: new V(
        [3, 0],
        [
          function (a, b) {
            S(a, 4, b);
          },
          function (a, b) {
            S(a, 13, b);
          },
        ]
      ),
      i: new V(
        [3],
        [
          function (a, b) {
            S(a, 22, b);
          },
        ]
      ),
      ic: new V(
        [0],
        [
          function (a, b) {
            S(a, 71, b);
          },
        ]
      ),
      id: new V(
        [3],
        [
          function (a, b) {
            S(a, 70, b);
          },
        ]
      ),
      il: new V(
        [3],
        [
          function (a, b) {
            S(a, 96, b);
          },
        ]
      ),
      ip: new V(
        [3],
        [
          function (a, b) {
            S(a, 54, b);
          },
        ]
      ),
      iv: new V(
        [0],
        [
          function (a, b) {
            S(a, 75, b);
          },
        ]
      ),
      j: new V(
        [1],
        [
          function (a, b) {
            S(a, 29, b);
          },
        ]
      ),
      k: new V(
        [3, 0],
        [
          function (a, b) {
            S(a, 17, b);
          },
          function (a, b) {
            S(a, 42, b);
          },
        ]
      ),
      l: new V(
        [0],
        [
          function (a, b) {
            S(a, 44, b);
          },
        ]
      ),
      lf: new V(
        [3],
        [
          function (a, b) {
            S(a, 65, b);
          },
        ]
      ),
      lo: new V(
        [3],
        [
          function (a, b) {
            S(a, 97, b);
          },
        ]
      ),
      m: new V(
        [0],
        [
          function (a, b) {
            S(a, 63, b);
          },
        ]
      ),
      md: new V(
        [3],
        [
          function (a, b) {
            S(a, 91, b);
          },
        ]
      ),
      mm: new V(
        [4],
        [
          function (a, b) {
            S(a, 81, b);
          },
        ]
      ),
      mo: new V(
        [3],
        [
          function (a, b) {
            S(a, 73, b);
          },
        ]
      ),
      mv: new V(
        [3],
        [
          function (a, b) {
            S(a, 66, b);
          },
        ]
      ),
      n: new V(
        [3],
        [
          function (a, b) {
            S(a, 20, b);
          },
        ]
      ),
      nc: new V(
        [3],
        [
          function (a, b) {
            S(a, 55, b);
          },
        ]
      ),
      nd: new V(
        [3],
        [
          function (a, b) {
            S(a, 53, b);
          },
        ]
      ),
      ng: new V(
        [3],
        [
          function (a, b) {
            S(a, 95, b);
          },
        ]
      ),
      no: new V(
        [3],
        [
          function (a, b) {
            S(a, 37, b);
          },
        ]
      ),
      ns: new V(
        [3],
        [
          function (a, b) {
            S(a, 40, b);
          },
        ]
      ),
      nt0: new V(
        [4],
        [
          function (a, b) {
            S(a, 36, b);
          },
        ]
      ),
      nu: new V(
        [3],
        [
          function (a, b) {
            S(a, 46, b);
          },
        ]
      ),
      nw: new V(
        [3],
        [
          function (a, b) {
            S(a, 48, b);
          },
        ]
      ),
      o: new V(
        [1, 3],
        [
          function (a, b) {
            S(a, 7, b);
          },
          function (a, b) {
            S(a, 27, b);
          },
        ]
      ),
      p: new V(
        [3, 0],
        [
          function (a, b) {
            S(a, 19, b);
          },
          function (a, b) {
            S(a, 43, b);
          },
        ]
      ),
      pa: new V(
        [3],
        [
          function (a, b) {
            S(a, 61, b);
          },
        ]
      ),
      pc: new V(
        [0],
        [
          function (a, b) {
            S(a, 88, b);
          },
        ]
      ),
      pd: new V(
        [3],
        [
          function (a, b) {
            S(a, 60, b);
          },
        ]
      ),
      pf: new V(
        [3],
        [
          function (a, b) {
            S(a, 67, b);
          },
        ]
      ),
      pg: new V(
        [3],
        [
          function (a, b) {
            S(a, 72, b);
          },
        ]
      ),
      pi: new V(
        [2],
        [
          function (a, b) {
            S(a, 76, b);
          },
        ]
      ),
      pp: new V(
        [3],
        [
          function (a, b) {
            S(a, 52, b);
          },
        ]
      ),
      q: new V(
        [4],
        [
          function (a, b) {
            S(a, 28, b);
          },
        ]
      ),
      r: new V(
        [3, 0],
        [
          function (a, b) {
            S(a, 6, b);
          },
          function (a, b) {
            S(a, 26, b);
          },
        ]
      ),
      rf: new V(
        [3],
        [
          function (a, b) {
            S(a, 100, b);
          },
        ]
      ),
      rg: new V(
        [3],
        [
          function (a, b) {
            S(a, 59, b);
          },
        ]
      ),
      rh: new V(
        [3],
        [
          function (a, b) {
            S(a, 49, b);
          },
        ]
      ),
      rj: new V(
        [3],
        [
          function (a, b) {
            S(a, 57, b);
          },
        ]
      ),
      ro: new V(
        [2],
        [
          function (a, b) {
            S(a, 78, b);
          },
        ]
      ),
      rp: new V(
        [3],
        [
          function (a, b) {
            S(a, 58, b);
          },
        ]
      ),
      rw: new V(
        [3],
        [
          function (a, b) {
            S(a, 35, b);
          },
        ]
      ),
      rwa: new V(
        [3],
        [
          function (a, b) {
            S(a, 64, b);
          },
        ]
      ),
      rwu: new V(
        [3],
        [
          function (a, b) {
            S(a, 41, b);
          },
        ]
      ),
      s: new V(
        [3, 0],
        [
          function (a, b) {
            S(a, 33, b);
          },
          function (a, b) {
            S(a, 1, b);
          },
        ]
      ),
      sc: new V(
        [0],
        [
          function (a, b) {
            S(a, 89, b);
          },
        ]
      ),
      sg: new V(
        [3],
        [
          function (a, b) {
            S(a, 82, b);
          },
        ]
      ),
      sm: new V(
        [3],
        [
          function (a, b) {
            S(a, 93, b);
          },
        ]
      ),
      t: new V(
        [4],
        [
          function (a, b) {
            a.setToken(b);
          },
        ]
      ),
      u: new V(
        [3],
        [
          function (a, b) {
            S(a, 18, b);
          },
        ]
      ),
      ut: new V(
        [3],
        [
          function (a, b) {
            S(a, 45, b);
          },
        ]
      ),
      v: new V(
        [0],
        [
          function (a, b) {
            S(a, 62, b);
          },
        ]
      ),
      vb: new V(
        [0],
        [
          function (a, b) {
            S(a, 68, b);
          },
        ]
      ),
      vf: new V(
        [4],
        [
          function (a, b) {
            S(a, 102, b);
          },
        ]
      ),
      vl: new V(
        [0],
        [
          function (a, b) {
            S(a, 69, b);
          },
        ]
      ),
      vm: new V(
        [3],
        [
          function (a, b) {
            S(a, 98, b);
          },
        ]
      ),
      w: new V(
        [0],
        [
          function (a, b) {
            S(a, 12, b);
          },
        ]
      ),
      x: new V(
        [0],
        [
          function (a, b) {
            S(a, 9, b);
          },
        ]
      ),
      y: new V(
        [0],
        [
          function (a, b) {
            S(a, 10, b);
          },
        ]
      ),
      ya: new V(
        [2],
        [
          function (a, b) {
            S(a, 77, b);
          },
        ]
      ),
      z: new V(
        [0],
        [
          function (a, b) {
            S(a, 11, b);
          },
        ]
      ),
    };
    t = lk.prototype;
    t.parse = function (a) {
      var b = new fk(),
        c = new fk();
      if ("" == a) a = !0;
      else {
        a = a.split("-");
        for (var d = !0, e = 0; e < a.length; e++) {
          var f = a[e];
          if (0 == f.length) d = !1;
          else {
            var g = f,
              h = !1;
            var k = g;
            var n = g.substring(0, 1);
            n != n.toLowerCase() &&
              ((h = !0),
              (k = g.substring(0, 1).toLowerCase() + g.substring(1)));
            var u = mk;
            for (n = 1; n <= k.length; ++n) {
              var w = u,
                G = k.substring(0, n);
              if (0 == G.length ? w.la() : !ik(w, G)) break;
            }
            k =
              1 == n
                ? null
                : (k = u.get(k.substring(0, n - 1)))
                ? {
                    Ad: g.substring(0, n - 1),
                    value: g.substring(n - 1),
                    Id: h,
                    attributes: k,
                  }
                : null;
            if (k) {
              g = [];
              h = [];
              n = !1;
              for (u = 0; u < k.attributes.types.length; u++) {
                w = k.attributes.types[u];
                var D = k.value;
                G = e;
                if (k.Id && 1 == w)
                  for (var P = D.length; 12 > P && G < a.length - 1; )
                    (D += "-" + a[G + 1]), (P = D.length), ++G;
                else if (2 == w)
                  for (; G < a.length - 1 && a[G + 1].match(/^[\d\.]/); )
                    (D += "-" + a[G + 1]), ++G;
                P = k.attributes.C[u];
                D = ok(this, w)(k.Ad, D, b, c, P);
                if (null === D) {
                  n = !0;
                  e = G;
                  break;
                } else g.push(w), h.push(D);
              }
              if (!n)
                for (k = 0; k < h.length; k++)
                  (u = g[k]), (D = h[k]), pk(this, u)(f, D);
              d = d && n;
            } else d = !1;
          }
        }
        a = d;
      }
      return new qk(b, c, a);
    };
    function rk(a, b, c, d, e) {
      e(c, b);
      a = a.substring(0, 1);
      e(d, a == a.toUpperCase());
    }
    t.Dd = function (a, b, c, d, e) {
      if ("" == b) return 0;
      isFinite(b) && (b = String(b));
      b =
        typeof b === r
          ? /^\s*-?0x/i.test(b)
            ? parseInt(b, 16)
            : parseInt(b, 10)
          : NaN;
      if (isNaN(b)) return 1;
      rk(a, b, c, d, e);
      return null;
    };
    t.ud = function () {};
    t.Cd = function (a, b, c, d, e) {
      if ("" == b) return 0;
      var f = Number(b);
      b = 0 == f && /^[\s\xa0]*$/.test(b) ? NaN : f;
      if (isNaN(b)) return 1;
      rk(a, b, c, d, e);
      return null;
    };
    t.td = function () {};
    t.Bd = function (a, b, c, d, e) {
      if ("" != b) return 2;
      rk(a, !0, c, d, e);
      return null;
    };
    t.sd = function () {};
    t.Ed = function (a, b, c, d, e) {
      if ("" == b) return 0;
      rk(a, b, c, d, e);
      return null;
    };
    t.vd = function () {};
    function ok(a, b) {
      switch (b) {
        case 0:
          return y(a.Dd, a);
        case 2:
          return y(a.Cd, a);
        case 3:
          return y(a.Bd, a);
        case 4:
        case 1:
          return y(a.Ed, a);
        default:
          return function () {};
      }
    }
    function pk(a, b) {
      switch (b) {
        case 0:
          return y(a.ud, a);
        case 2:
          return y(a.td, a);
        case 3:
          return y(a.sd, a);
        case 4:
        case 1:
          return y(a.vd, a);
        default:
          return function () {};
      }
    }
    function qk(a, b, c) {
      this.C = a;
      this.D = b;
      this.F = c;
    }
    qk.prototype.K = function () {
      return this.F;
    };
    function sk(a, b) {
      null != a && this.D.apply(this, arguments);
    }
    sk.prototype.C = "";
    sk.prototype.set = function (a) {
      this.C = "" + a;
    };
    sk.prototype.D = function (a, b, c) {
      this.C += String(a);
      if (null != b)
        for (var d = 1; d < arguments.length; d++) this.C += arguments[d];
      return this;
    };
    sk.prototype.toString = function () {
      return this.C;
    };
    function tk(a) {
      this.G = null;
      this.F = [];
      this.D = null;
      uk(this, a);
    }
    function vk(a) {
      null == a.G && (a.G = new lk());
      return a.G;
    }
    function uk(a, b) {
      a.D = b ? (typeof b === r ? vk(a).parse(b) : b) : vk(a).parse("");
    }
    t = tk.prototype;
    t.ob = function (a) {
      a = a || void 0;
      var b = this.D.C;
      a != U(b, 2) && S(b, 2, a);
      return this;
    };
    t.nb = function (a) {
      a = a || void 0;
      var b = this.D.C;
      a != T(b, 51) && S(b, 51, a);
      return this;
    };
    t.pb = function (a) {
      a = a || void 0;
      var b = this.D.C;
      a != T(b, 32) && S(b, 32, a);
      return this;
    };
    t.Ra = function (a) {
      var b = this.D.C;
      a != R(b, 13) && S(b, 13, a);
      return this;
    };
    t.mb = function (a) {
      a = a || void 0;
      var b = this.D.C;
      a != U(b, 20) && S(b, 20, a);
      return this;
    };
    t.rb = function (a) {
      a = a || void 0;
      var b = this.D.C;
      a != U(b, 19) && S(b, 19, a);
      return this;
    };
    t.qb = function (a) {
      a = a || void 0;
      var b = this.D.C;
      a != T(b, 60) && S(b, 60, a);
      return this;
    };
    t.tb = function (a) {
      a = a || void 0;
      var b = this.D.C;
      a != U(b, 67) && S(b, 67, a);
      return this;
    };
    t.sb = function (a) {
      a = a || void 0;
      var b = this.D.C;
      a != U(b, 52) && S(b, 52, a);
      return this;
    };
    t.Ca = function (a) {
      var b = this.D.C;
      a != R(b, 1) && S(b, 1, a);
      return this;
    };
    t.setToken = function (a) {
      a = a || void 0;
      var b = this.D,
        c = b.C,
        d = c.getToken();
      b.D.getToken();
      a != d && c.setToken(a);
      return this;
    };
    t.Sa = function (a) {
      var b = this.D.C;
      a != R(b, 12) && S(b, 12, a);
      return this;
    };
    function wk(a) {
      uk(a, "");
      return a;
    }
    t.sa = function () {
      this.F.length = 0;
      var a = this.D,
        b = a.C;
      a = a.D;
      W(this, "s", R(b, 1), R(a, 1));
      W(this, "w", R(b, 12), R(a, 12));
      X(this, "c", U(b, 2), U(a, 2));
      X(this, "d", U(b, 3), U(a, 3));
      W(this, "h", R(b, 13), R(a, 13));
      X(this, "s", T(b, 33), T(a, 33));
      X(this, "h", U(b, 4), U(a, 4));
      X(this, "p", U(b, 19), U(a, 19));
      X(this, "pp", U(b, 52), U(a, 52));
      X(this, "pf", U(b, 67), U(a, 67));
      X(this, "n", U(b, 20), U(a, 20));
      W(this, "r", R(b, 26), R(a, 26));
      X(this, "r", U(b, 6), U(a, 6));
      X(this, "o", T(b, 27), T(a, 27));
      xk(this, "o", R(b, 7), R(a, 7));
      xk(this, "j", R(b, 29), R(a, 29));
      W(this, "x", R(b, 9), R(a, 9));
      W(this, "y", R(b, 10), R(a, 10));
      W(this, "z", R(b, 11), R(a, 11));
      X(this, "g", U(b, 14), U(a, 14));
      W(this, "e", R(b, 15), R(a, 15));
      xk(this, "f", R(b, 16), R(a, 16));
      X(this, "k", T(b, 17), T(a, 17));
      X(this, "u", T(b, 18), !0);
      X(this, "ut", T(b, 45), !0);
      X(this, "i", T(b, 22), !0);
      X(this, "a", T(b, 21), T(a, 21));
      X(this, "b", U(b, 23), U(a, 23));
      W(this, "b", R(b, 38), R(a, 38));
      W(this, "c", R(b, 39), R(a, 39), 16, 8);
      xk(this, "q", R(b, 28), R(a, 28));
      X(this, "fh", T(b, 30), T(a, 30));
      X(this, "fv", T(b, 31), T(a, 31));
      X(this, "fg", U(b, 34), U(a, 34));
      X(this, "ci", T(b, 32), T(a, 32));
      xk(this, "t", b.getToken(), a.getToken());
      xk(this, "nt0", R(b, 36), R(a, 36));
      X(this, "rw", U(b, 35), U(a, 35));
      X(this, "rwu", U(b, 41), U(a, 41));
      X(this, "rwa", U(b, 64), U(a, 64));
      X(this, "nw", U(b, 48), U(a, 48));
      X(this, "rh", U(b, 49), U(a, 49));
      X(this, "no", U(b, 37), U(a, 37));
      X(this, "ns", T(b, 40), T(a, 40));
      W(this, "k", R(b, 42), R(a, 42));
      W(this, "p", R(b, 43), R(a, 43));
      W(this, "l", R(b, 44), R(a, 44));
      W(this, "v", R(b, 62), R(a, 62));
      X(this, "nu", T(b, 46), T(a, 46));
      X(this, "ft", T(b, 50), T(a, 50));
      X(this, "cc", T(b, 51), T(a, 51));
      X(this, "nd", T(b, 53), T(a, 53));
      X(this, "ip", T(b, 54), T(a, 54));
      X(this, "nc", T(b, 55), T(a, 55));
      W(this, "a", R(b, 56), R(a, 56));
      X(this, "rj", T(b, 57), T(a, 57));
      X(this, "rp", T(b, 58), T(a, 58));
      X(this, "rg", T(b, 59), T(a, 59));
      X(this, "pd", T(b, 60), T(a, 60));
      X(this, "pa", T(b, 61), T(a, 61));
      W(this, "m", R(b, 63), R(a, 63));
      W(this, "vb", R(b, 68), R(a, 68));
      W(this, "vl", R(b, 69), R(a, 69));
      X(this, "lf", T(b, 65), T(a, 65));
      X(this, "mv", T(b, 66), T(a, 66));
      X(this, "id", T(b, 70), T(a, 70));
      W(this, "ic", R(b, 71), !0);
      X(this, "pg", U(b, 72), U(a, 72));
      X(this, "mo", T(b, 73), T(a, 73));
      X(this, "al", T(b, 74), T(a, 74));
      W(this, "iv", R(b, 75), R(a, 75));
      W(this, "pi", Hi(b, 76), Hi(a, 76));
      W(this, "ya", Hi(b, 77), Hi(a, 77));
      W(this, "ro", Hi(b, 78), Hi(a, 78));
      W(this, "fo", Hi(b, 79), Hi(a, 79));
      X(this, "df", T(b, 80), T(a, 80));
      xk(this, "mm", R(b, 81), R(a, 81));
      X(this, "sg", T(b, 82), T(a, 82));
      X(this, "gd", T(b, 83), T(a, 83));
      X(this, "fm", T(b, 84), T(a, 84));
      W(this, "ba", R(b, 85), R(a, 85));
      W(this, "br", R(b, 86), R(a, 86));
      W(this, "bc", R(b, 87), R(a, 87), 16, 8);
      W(this, "pc", R(b, 88), R(a, 88), 16, 8);
      W(this, "sc", R(b, 89), R(a, 89), 16, 8);
      X(this, "dv", T(b, 90), T(a, 90));
      X(this, "md", T(b, 91), T(a, 91));
      W(this, "cp", R(b, 92), R(a, 92));
      X(this, "sm", T(b, 93), T(a, 93));
      W(this, "cv", R(b, 94), R(a, 94));
      X(this, "ng", T(b, 95), T(a, 95));
      X(this, "il", T(b, 96), T(a, 96));
      X(this, "lo", T(b, 97), T(a, 97));
      X(this, "vm", T(b, 98), T(a, 98));
      xk(this, "dc", R(b, 99), R(a, 99));
      X(this, "rf", T(b, 100), T(a, 100));
      xk(this, "vf", R(b, 102), R(a, 102));
      return this.F.join("-");
    };
    function W(a, b, c, d, e, f) {
      if (null != c) {
        var g = void 0 == e || (10 != e && 16 != e) ? 10 : e;
        c = c.toString(g);
        e = new sk();
        e.D(16 == g ? "0x" : "");
        g = e.D;
        void 0 == f
          ? (f = "")
          : ((f -= c.length), (f = 0 >= f ? "" : Ye("0", f)));
        g.call(e, f);
        e.D(c);
        yk(a, b, e.toString(), !!d);
      }
    }
    function X(a, b, c, d) {
      c && yk(a, b, "", !!d);
    }
    function xk(a, b, c, d) {
      c && yk(a, b, c, !!d);
    }
    function yk(a, b, c, d) {
      d && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
      a.F.push(b + c);
    }
    function Y(a) {
      tk.call(this, a);
    }
    A(Y, tk);
    t = Y.prototype;
    t.ob = function (a) {
      a && zk(this);
      return Y.O.ob.call(this, a);
    };
    t.Ra = function (a) {
      a = null == a || 0 > a ? void 0 : a;
      null != a && this.Ca();
      return Y.O.Ra.call(this, a);
    };
    t.pb = function (a) {
      a && zk(this);
      return Y.O.pb.call(this, a);
    };
    t.nb = function (a) {
      a && zk(this);
      return Y.O.nb.call(this, a);
    };
    t.Ca = function (a) {
      Vb(a) && (a = Math.max(a.width, a.height));
      a = null == a || 0 > a ? void 0 : a;
      null != a && (this.Sa(), this.Ra());
      return Y.O.Ca.call(this, a);
    };
    t.rb = function (a) {
      a && zk(this);
      return Y.O.rb.call(this, a);
    };
    t.sb = function (a) {
      a && zk(this);
      return Y.O.sb.call(this, a);
    };
    t.tb = function (a) {
      a && zk(this);
      return Y.O.tb.call(this, a);
    };
    t.mb = function (a) {
      a && zk(this);
      return Y.O.mb.call(this, a);
    };
    t.qb = function (a) {
      a && zk(this);
      return Y.O.qb.call(this, a);
    };
    t.Sa = function (a) {
      a = null == a || 0 > a ? void 0 : a;
      null != a && this.Ca();
      return Y.O.Sa.call(this, a);
    };
    function zk(a) {
      a.mb();
      a.nb();
      a.ob();
      a.pb();
      a.qb();
      a.rb();
      a.sb();
      a.tb();
    }
    t.sa = function () {
      var a = this.D.C;
      T(a, 18) || T(a, 45)
        ? R(a, 1) || this.Ca(0)
        : ((a = this.D.C),
          R(a, 1) ||
            R(a, 12) ||
            R(a, 13) ||
            (this.Ca(), this.Ra(), this.Sa(), zk(this)));
      return Y.O.sa.call(this);
    };
    var Ak = /^[^\/]*\/\//;
    function Bk(a, b) {
      b = void 0 === b ? !1 : b;
      this.G = a;
      this.M = "";
      (a = this.G.match(Ak)) && a[0]
        ? ((this.M = a[0]),
          (a = this.M.match(/\w+/)
            ? this.G
            : "http://" + this.G.substring(this.M.length)))
        : (a = "http://" + this.G);
      this.D = dj(a, !0);
      this.Y = b;
      this.J = !0;
      this.ta = !1;
    }
    function Ck(a, b) {
      a.F = a.F ? a.F + ("/" + b) : b;
    }
    function Dk(a) {
      if (void 0 == a.C) {
        var b = a.D.D.substring(1);
        a.F = null;
        if (a.Y) {
          a.C = [];
          if (1 < (b.match(/=/g) || []).length) return (a.J = !1), a.C;
          var c = b.indexOf("=");
          -1 != c
            ? (a.C.push(b.substr(0, c)), a.C.push(b.substr(c + 1)))
            : a.C.push(b);
          return a.C;
        }
        a.C = b.split("/");
        b = a.C.length;
        2 < b &&
          "u" == a.C[0] &&
          (Ck(a, a.C[0] + "/" + a.C[1]), a.C.shift(), a.C.shift(), (b -= 2));
        if (0 == b || 4 == b || 7 < b) return (a.J = !1), a.C;
        if (2 == b) Ck(a, a.C[0]);
        else if ("image" == a.C[0]) Ck(a, a.C[0]);
        else if (7 == b || 3 == b) return (a.J = !1), a.C;
        if (3 >= b) {
          a.ta = !0;
          3 == b && (Ck(a, a.C[1]), a.C.shift(), --b);
          --b;
          c = a.C[b];
          var d = c.indexOf("=");
          -1 != d && ((a.C[b] = c.substr(0, d)), a.C.push(c.substr(d + 1)));
        }
      }
      return a.C;
    }
    Bk.prototype.K = function () {
      Dk(this);
      return this.J;
    };
    function Ek(a) {
      Dk(a);
      return a.ta;
    }
    function Fk(a) {
      Dk(a);
      return a.Y;
    }
    function Gk(a) {
      Dk(a);
      void 0 == a.F && (a.F = null);
      return a.F;
    }
    function Hk(a) {
      switch (Dk(a).length) {
        case 7:
          return !0;
        case 6:
          return null == Gk(a);
        case 5:
          return !1;
        case 3:
          return !0;
        case 2:
          return null == Gk(a);
        case 1:
          return !1;
        default:
          return !1;
      }
    }
    function Ik(a, b) {
      if (Fk(a))
        a: {
          switch (b) {
            case 7:
              b = 0;
              break;
            case 4:
              if (!Hk(a)) {
                a = null;
                break a;
              }
              b = 1;
              break;
            default:
              a = null;
              break a;
          }
          a = Dk(a)[b];
        }
      else if (Ek(a))
        a: {
          var c = null != Gk(a) ? 1 : 0;
          switch (b) {
            case 6:
              b = 0 + c;
              break;
            case 4:
              if (!Hk(a)) {
                a = null;
                break a;
              }
              b = 1 + c;
              break;
            default:
              a = null;
              break a;
          }
          a = Dk(a)[b];
        }
      else
        a: {
          c = null != Gk(a) ? 1 : 0;
          switch (b) {
            case 0:
              b = 0 + c;
              break;
            case 1:
              b = 1 + c;
              break;
            case 2:
              b = 2 + c;
              break;
            case 3:
              b = 3 + c;
              break;
            case 4:
              if (!Hk(a)) {
                a = null;
                break a;
              }
              b = 4 + c;
              break;
            case 5:
              b = Hk(a) ? 1 : 0;
              b = 4 + c + b;
              break;
            default:
              a = null;
              break a;
          }
          a = Dk(a)[b];
        }
      return a;
    }
    function Jk(a) {
      void 0 == a.Ea && (a.Ea = Ik(a, 4));
      return a.Ea;
    }
    function Kk() {}
    Kk.prototype.parse = function (a, b) {
      return new Lk(a, void 0 === b ? !1 : b);
    };
    function Lk(a, b) {
      Bk.call(this, a, void 0 === b ? !1 : b);
    }
    v(Lk, Bk);
    function Mk(a, b) {
      b = void 0 === b ? !1 : b;
      this.C = null;
      a instanceof Lk ||
        (void 0 == Nk && (Nk = new Kk()), (a = Nk.parse(a.toString(), b)));
      a = this.C = a;
      void 0 == a.L && ((b = Jk(a)) || (b = ""), (a.L = new lk().parse(b)));
      tk.call(this, a.L);
      this.L = this.C.M;
      a = this.C;
      b = a.D.M;
      this.M = a.D.F + (b ? ":" + b : "");
      this.J = this.C.D.C.toString();
    }
    var Nk;
    A(Mk, Y);
    function Ok(a) {
      a.J = "";
      return a;
    }
    Mk.prototype.K = function () {
      return this.C.K();
    };
    Mk.prototype.sa = function () {
      if (!this.C.K()) return this.C.G;
      var a = Mk.O.sa.call(this),
        b = [];
      null != Gk(this.C) && b.push(Gk(this.C));
      var c = Fk(this.C);
      if (Ek(this.C)) {
        var d = this.C;
        void 0 == d.Z && (d.Z = Ik(d, 6));
        b.push(d.Z + (a ? "=" + a : ""));
      } else if (c) {
        d = b.push;
        var e = this.C;
        void 0 === e.T && (e.T = Ik(e, 7));
        d.call(b, e.T);
        a && b.push(a);
      } else
        (d = b.push),
          (e = this.C),
          void 0 == e.da && (e.da = Ik(e, 0)),
          d.call(b, e.da),
          (d = b.push),
          (e = this.C),
          void 0 == e.Fa && (e.Fa = Ik(e, 1)),
          d.call(b, e.Fa),
          (d = b.push),
          (e = this.C),
          void 0 == e.ha && (e.ha = Ik(e, 2)),
          d.call(b, e.ha),
          (d = b.push),
          (e = this.C),
          void 0 == e.Ga && (e.Ga = Ik(e, 3)),
          d.call(b, e.Ga),
          a && b.push(a),
          (a = b.push),
          (d = this.C),
          void 0 == d.R && (d.R = Ik(d, 5)),
          a.call(b, d.R);
      b = dj(
        this.L +
          this.M +
          "/" +
          (c ? b.join("=") : b.join("/")) +
          (this.J ? "?" + this.J : "")
      ).toString();
      b.startsWith("%3a//") && (b = b.replace("%3a//", "://"));
      return b;
    };
    var Pk = new Kk();
    var Qk = RegExp(
        "^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(a))/([^/=?]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/]*)?$"
      ),
      Rk = RegExp(
        "^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com))/img/(proxy))/([^/=?]+)(?:=([-a-zA-Z0-9_=]+))?(?:\\?[^/]*)?$"
      ),
      Sk = RegExp(
        "^((?:https?:)?//((?:blogger\\.googleusercontent\\.com|blogger-image(?:-(?:dev|staging|autopush|prod))?\\.corp\\.google\\.com)))/img/(b)/[^/?]*/([^/=?]+)/(?:([-a-zA-Z0-9_=]+)?/(?:[^/?]*)?)?(?:\\?[^/]*)?$"
      ),
      Tk = { qc: 3, proxy: 3, rc: 3 },
      Uk = { qc: 4, proxy: 4, rc: 4 };
    function Vk(a) {
      return Qk.test(a) || Rk.test(a) || Sk.test(a);
    }
    function Wk(a) {
      return "/blogger/image/" + Xk(a, Tk) + "/" + Xk(a, Uk);
    }
    function Xk(a, b) {
      if (Qk.test(a)) {
        var c;
        return null != (c = Qk.exec(a)[b.qc]) ? c : "";
      }
      if (Rk.test(a)) {
        var d;
        return null != (d = Rk.exec(a)[b.proxy]) ? d : "";
      }
      if (Sk.test(a)) {
        var e;
        return null != (e = Sk.exec(a)[b.rc]) ? e : "";
      }
      throw Error("Not a blogger image url: " + a);
    }
    function Yk() {
      var a = Zk,
        b = "za";
      if (a.za && a.hasOwnProperty(b)) return a.za;
      var c = new a();
      a.za = c;
      a.hasOwnProperty(b);
      return c;
    }
    function Zk() {
      this.F = null;
      this.C = {};
      this.D = !1;
    }
    Zk.prototype.init = function (a, b) {
      var c = Oe(a);
      Qg.Ya().init(a, c);
      this.G = b;
    };
    Zk.prototype.J = function (a, b, c) {
      c.ctrlKey ||
        c.altKey ||
        c.shiftKey ||
        c.metaKey ||
        ((a = this.C[a]) &&
          0 < a.length &&
          ($k(this), Tg()(a, b), c.preventDefault()));
    };
    Zk.prototype.K = function () {
      $k(this);
      Rg(function () {});
    };
    function $k(a) {
      a.D ||
        (document.body.appendChild(
          ff("LINK", { type: "text/css", rel: "stylesheet", href: a.G })
        ),
        (a.D = !0));
    }
    function al() {
      this.D = {};
      this.C = 0;
      this.J = [];
      this.F = [];
      var a = this;
      this.K = function () {
        bl(a);
      };
    }
    al.prototype.init = function () {
      for (
        var a = this.D, b = cf(document, "img", "delayLoad"), c = 0;
        c < b.length;
        c++
      )
        if ((b[c].style.display == p && (b[c].style.display = ""), 5 > c)) {
          var d = b[c];
          "" != d.longDesc && (d.src = d.longDesc);
        } else
          (d = b[c].id),
            "" == d && (d = "av-delay-tempId-" + c),
            (a[d] = { ac: b[c], key: d }),
            this.C++;
      0 != this.C &&
        ((this.L = L(window, "scroll", this.K)),
        (this.M = L(window, "resize", this.K)),
        cl(this));
    };
    function bl(a) {
      a.G && window.clearTimeout(a.G);
      a.G = window.setTimeout(function () {
        a.G = null;
        cl(a);
      }, 100);
    }
    function cl(a) {
      if (!(0 > a.C))
        if (0 == a.C) Wf(a.L), Wf(a.M), (a.C = -1);
        else {
          var b = !1,
            c;
          for (c in a.D) {
            a: {
              var d = a;
              var e = a.D[c],
                f = window.document;
              f = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
              f = new Xe(f.clientWidth, f.clientHeight).height;
              var g = e.ac;
              if (1 == g.nodeType) {
                try {
                  var h = g.getBoundingClientRect();
                } catch (k) {
                  h = { left: 0, top: 0, right: 0, bottom: 0 };
                }
                g = new We(h.left, h.top);
              } else
                (g = g.changedTouches ? g.changedTouches[0] : g),
                  (g = new We(g.clientX, g.clientY));
              g = g.y;
              if (0 <= g && g <= f) d.J.push(e);
              else if (0 < g && g < Math.round(2.25 * f)) d.F.push(e);
              else if (0 > g && g > Math.round(-1.25 * f)) d.F.push(e);
              else {
                d = !1;
                break a;
              }
              d = !0;
            }
            d && (b = !0);
          }
          if (b) {
            b = a.J.concat(a.F);
            for (c = 0; c < b.length; c++)
              (h = b[c].ac),
                "" != h.longDesc && (h.src = h.longDesc),
                a.C--,
                delete a.D[b[c].key];
            a.J = [];
            a.F = [];
          }
        }
    }
    var dl = !I && !wd();
    function el(a) {
      if (/-[a-z]/.test(ya)) return null;
      if (dl && a.dataset) {
        if (yd() && !(ya in a.dataset)) return null;
        a = a.dataset.commentId;
        return void 0 === a ? null : a;
      }
      return a.getAttribute(
        "data-" + ya.replace(/([A-Z])/g, "-$1").toLowerCase()
      );
    }
    var fl = {};
    function gl(a) {
      if (I && !Je(9)) return [0, 0, 0, 0];
      var b = fl.hasOwnProperty(a) ? fl[a] : null;
      if (b) return b;
      65536 < Object.keys(fl).length && (fl = {});
      var c = [0, 0, 0, 0],
        d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
      b = hl(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
      b = hl(b, d);
      b = hl(b, /\\./g);
      b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
      b = b.replace(RegExp("{[^]*", "gm"), "");
      b = il(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
      b = il(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
      b = il(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"), 2);
      b = il(
        b,
        c,
        /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
        3
      );
      b = il(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
      b = il(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
      b = b.replace(/[\*\s\+>~]/g, " ");
      b = b.replace(/[#\.]/g, " ");
      il(b, c, /([^\s\+>~\.\[:]+)/g, 3);
      b = c;
      return (fl[a] = b);
    }
    function il(a, b, c, d) {
      return a.replace(c, function (e) {
        b[d] += 1;
        return Array(e.length + 1).join(" ");
      });
    }
    function hl(a, b) {
      return a.replace(b, function (c) {
        return Array(c.length + 1).join("A");
      });
    }
    var jl = {
        "* ARIA-CHECKED": !0,
        "* ARIA-COLCOUNT": !0,
        "* ARIA-COLINDEX": !0,
        "* ARIA-CONTROLS": !0,
        "* ARIA-DESCRIBEDBY": !0,
        "* ARIA-DISABLED": !0,
        "* ARIA-EXPANDED": !0,
        "* ARIA-GOOG-EDITABLE": !0,
        "* ARIA-HASPOPUP": !0,
        "* ARIA-HIDDEN": !0,
        "* ARIA-LABEL": !0,
        "* ARIA-LABELLEDBY": !0,
        "* ARIA-MULTILINE": !0,
        "* ARIA-MULTISELECTABLE": !0,
        "* ARIA-ORIENTATION": !0,
        "* ARIA-PLACEHOLDER": !0,
        "* ARIA-READONLY": !0,
        "* ARIA-REQUIRED": !0,
        "* ARIA-ROLEDESCRIPTION": !0,
        "* ARIA-ROWCOUNT": !0,
        "* ARIA-ROWINDEX": !0,
        "* ARIA-SELECTED": !0,
        "* ABBR": !0,
        "* ACCEPT": !0,
        "* ACCESSKEY": !0,
        "* ALIGN": !0,
        "* ALT": !0,
        "* AUTOCOMPLETE": !0,
        "* AXIS": !0,
        "* BGCOLOR": !0,
        "* BORDER": !0,
        "* CELLPADDING": !0,
        "* CELLSPACING": !0,
        "* CHAROFF": !0,
        "* CHAR": !0,
        "* CHECKED": !0,
        "* CLEAR": !0,
        "* COLOR": !0,
        "* COLSPAN": !0,
        "* COLS": !0,
        "* COMPACT": !0,
        "* COORDS": !0,
        "* DATETIME": !0,
        "* DIR": !0,
        "* DISABLED": !0,
        "* ENCTYPE": !0,
        "* FACE": !0,
        "* FRAME": !0,
        "* HEIGHT": !0,
        "* HREFLANG": !0,
        "* HSPACE": !0,
        "* ISMAP": !0,
        "* LABEL": !0,
        "* LANG": !0,
        "* MAX": !0,
        "* MAXLENGTH": !0,
        "* METHOD": !0,
        "* MULTIPLE": !0,
        "* NOHREF": !0,
        "* NOSHADE": !0,
        "* NOWRAP": !0,
        "* OPEN": !0,
        "* READONLY": !0,
        "* REQUIRED": !0,
        "* REL": !0,
        "* REV": !0,
        "* ROLE": !0,
        "* ROWSPAN": !0,
        "* ROWS": !0,
        "* RULES": !0,
        "* SCOPE": !0,
        "* SELECTED": !0,
        "* SHAPE": !0,
        "* SIZE": !0,
        "* SPAN": !0,
        "* START": !0,
        "* SUMMARY": !0,
        "* TABINDEX": !0,
        "* TITLE": !0,
        "* TYPE": !0,
        "* VALIGN": !0,
        "* VALUE": !0,
        "* VSPACE": !0,
        "* WIDTH": !0,
      },
      kl = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0,
      };
    var ll = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0,
      },
      ml = /[\n\f\r"'()*<>]/g,
      nl = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e",
      };
    function ol(a) {
      return nl[a];
    }
    function pl(a, b, c) {
      b = B(b);
      if ("" == b) return null;
      var d = String(b.slice(0, 4)).toLowerCase();
      if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
        if (
          !b.endsWith(")") ||
          1 < (b ? b.split("(").length - 1 : 0) ||
          1 < (b ? b.split(")").length - 1 : 0) ||
          !c
        )
          a = null;
        else {
          a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
            var e = "\"'".charAt(d);
            if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
              b = b.substring(1, b.length - 1);
              break a;
            }
          }
          a = c
            ? (a = c(b, a)) && Zc(a) != qa
              ? 'url("' + Zc(a).replace(ml, ol) + '")'
              : null
            : null;
        }
        return a;
      }
      if (0 < b.indexOf("(")) {
        if (/"|'/.test(b)) return null;
        for (a = /([\-\w]+)\(/g; (c = a.exec(b)); )
          if (!(c[1].toLowerCase() in ll)) return null;
      }
      return b;
    }
    function ql(a, b) {
      a = x[a];
      return a && a.prototype
        ? ((b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get) ||
            null
        : null;
    }
    function rl(a, b) {
      return ((a = x[a]) && a.prototype && a.prototype[b]) || null;
    }
    var sl = ql(fa, sa) || ql(ia, sa),
      tl = rl(fa, Va),
      ul = rl(fa, Sa),
      vl = rl(fa, hb),
      wl = rl(fa, fb);
    ql(fa, "innerHTML") || ql("HTMLElement", "innerHTML");
    var xl = rl(fa, Ta),
      yl = rl(fa, "matches") || rl(fa, ab),
      zl = ql(ia, "nodeName"),
      Al = ql(ia, "nodeType"),
      Bl = ql(ia, "parentNode");
    ql(ia, "childNodes");
    var Cl = ql("HTMLElement", kb) || ql(fa, kb),
      Dl = ql("HTMLStyleElement", "sheet"),
      El = rl(ca, Ua),
      Fl = rl(ca, "setProperty"),
      Gl = ql(fa, bb) || ql(ia, bb);
    function Hl(a, b, c, d) {
      if (a) return a.apply(b);
      a = b[c];
      if (!d(a)) throw Error(da);
      return a;
    }
    function Il(a, b, c, d) {
      if (a) return a.apply(b, d);
      if (I && 10 > document.documentMode) {
        if (!b[c].call) throw Error("IE Clobbering detected");
      } else if (typeof b[c] != m) throw Error(da);
      return b[c].apply(b, d);
    }
    function Jl(a) {
      return Hl(sl, a, sa, function (b) {
        return b instanceof NamedNodeMap;
      });
    }
    function Kl(a, b, c) {
      try {
        Il(vl, a, hb, [b, c]);
      } catch (d) {
        if (-1 == d.message.indexOf("A security problem occurred")) throw d;
      }
    }
    function Ll(a) {
      return Hl(Cl, a, kb, function (b) {
        return b instanceof CSSStyleDeclaration;
      });
    }
    function Ml(a) {
      return Hl(Dl, a, "sheet", function (b) {
        return b instanceof CSSStyleSheet;
      });
    }
    function Nl(a) {
      return Hl(zl, a, "nodeName", function (b) {
        return typeof b == r;
      });
    }
    function Ol(a) {
      return Hl(Al, a, "nodeType", function (b) {
        return typeof b == cb;
      });
    }
    function Pl(a) {
      return Hl(Bl, a, "parentNode", function (b) {
        return !(
          b &&
          typeof b.name == r &&
          b.name &&
          "parentnode" == b.name.toLowerCase()
        );
      });
    }
    function Ql(a, b) {
      return Il(El, a, a.getPropertyValue ? Ua : Sa, [b]) || "";
    }
    function Rl(a, b, c) {
      Il(Fl, a, a.setProperty ? "setProperty" : hb, [b, c]);
    }
    function Sl(a) {
      return Hl(Gl, a, bb, function (b) {
        return typeof b == r;
      });
    }
    var Tl =
        I && 10 > document.documentMode
          ? null
          : RegExp(
              "\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)",
              "g"
            ),
      Ul = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0,
      };
    function Vl(a, b, c) {
      var d = [];
      Wl(oc(a.cssRules)).forEach(function (e) {
        if (b && !/[a-zA-Z][\w-:\.]*/.test(b))
          throw Error("Invalid container id");
        if (
          !(
            b &&
            I &&
            10 == document.documentMode &&
            /\\['"]/.test(e.selectorText)
          )
        ) {
          var f = b
              ? e.selectorText.replace(Tl, "#" + b + " $1")
              : e.selectorText,
            g = d.push;
          e = Xl(e.style, c);
          if (-1 != f.indexOf("<"))
            throw Error("Selector does not allow '<', got: " + f);
          var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
          if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(h))
            throw Error(
              "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
                f
            );
          a: {
            for (
              var k = { "(": ")", "[": "]" }, n = [], u = 0;
              u < h.length;
              u++
            ) {
              var w = h[u];
              if (k[w]) n.push(k[w]);
              else if (uc(k, w) && n.pop() != w) {
                h = !1;
                break a;
              }
            }
            h = 0 == n.length;
          }
          if (!h)
            throw Error("() and [] in selector must be balanced, got: " + f);
          e instanceof ed || (e = gd(e));
          f = f + "{" + fd(e).replace(/</g, "\\3C ") + "}";
          g.call(d, new qd(f, pd));
        }
      });
      return rd(d);
    }
    function Wl(a) {
      return a.filter(function (b) {
        return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE;
      });
    }
    function Yl(a, b, c) {
      a = Zl("<style>" + a + "</style>");
      return null == a || null == a.sheet
        ? td
        : Vl(a.sheet, void 0 != b ? b : null, c);
    }
    function Zl(a) {
      if ((I && !Je(10)) || typeof x.DOMParser != m) return null;
      a = F("<html><head></head><body>" + a + "</body></html>");
      return new DOMParser().parseFromString(Cd(a), "text/html").body
        .children[0];
    }
    function Xl(a, b) {
      if (!a) return id;
      var c = document.createElement(l).style;
      $l(a).forEach(function (d) {
        var e =
          Ce && d in Ul
            ? d
            : d.replace(
                /^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,
                ""
              );
        Oc(e, "--") ||
          Oc(e, "var") ||
          ((d = Ql(a, d)), (d = pl(e, d, b)), null != d && Rl(c, e, d));
      });
      return new ed(c.cssText || "", dd);
    }
    function am(a) {
      var b = Array.from(Il(xl, a, Ta, [ka])),
        c = qc(b, function (g) {
          return oc(Ml(g).cssRules);
        });
      c = Wl(c);
      for (var d = [], e = 0; e < c.length; e++) d[e] = { index: e, Fb: c[e] };
      d.sort(function (g, h) {
        var k = gl(g.Fb.selectorText),
          n = gl(h.Fb.selectorText);
        a: {
          for (var u = Math.min(k.length, n.length), w = 0; w < u; w++) {
            var G = k[w],
              D = n[w];
            G = G > D ? 1 : G < D ? -1 : 0;
            if (0 != G) {
              n = G;
              break a;
            }
          }
          k = k.length;
          n = n.length;
          n = k > n ? 1 : k < n ? -1 : 0;
        }
        return n || g.index - h.index;
      });
      for (e = 0; e < d.length; e++) c[e] = d[e].Fb;
      c.reverse();
      a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
      for (var f; (f = a.nextNode()); )
        c.forEach(function (g) {
          Il(yl, f, f.matches ? "matches" : ab, [g.selectorText]) &&
            g.style &&
            bm(f, g.style);
        });
      b.forEach(lf);
    }
    function bm(a, b) {
      var c = $l(a.style);
      $l(b).forEach(function (d) {
        if (!(0 <= c.indexOf(d))) {
          var e = Ql(b, d);
          Rl(a.style, d, e);
        }
      });
    }
    function $l(a) {
      Ub(a) ? (a = oc(a)) : ((a = tc(a)), mc(a, "cssText"));
      return a;
    }
    var cm =
        "undefined" != typeof WeakMap &&
        -1 != WeakMap.toString().indexOf("[native code]"),
      dm = 0;
    function em() {
      this.F = [];
      this.D = [];
      this.C = "data-elementweakmap-index-" + dm++;
    }
    em.prototype.set = function (a, b) {
      if (Il(tl, a, Va, [this.C])) {
        var c = parseInt(Il(ul, a, Sa, [this.C]) || null, 10);
        this.D[c] = b;
      } else
        (c = this.D.push(b) - 1), Kl(a, this.C, c.toString()), this.F.push(a);
      return this;
    };
    em.prototype.get = function (a) {
      if (Il(tl, a, Va, [this.C]))
        return (a = parseInt(Il(ul, a, Sa, [this.C]) || null, 10)), this.D[a];
    };
    em.prototype.clear = function () {
      this.F.forEach(function (a) {
        Il(wl, a, fb, [this.C]);
      }, this);
      this.F = [];
      this.D = [];
    };
    var fm;
    (fm = !I) || (fm = 10 <= Number(Me));
    var gm = fm,
      hm = !I || null == document.documentMode;
    function im() {}
    var jm = {
      APPLET: !0,
      AUDIO: !0,
      BASE: !0,
      BGSOUND: !0,
      EMBED: !0,
      FORM: !0,
      IFRAME: !0,
      ISINDEX: !0,
      KEYGEN: !0,
      LAYER: !0,
      LINK: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      SVG: !0,
      STYLE: !0,
      TEMPLATE: !0,
      VIDEO: !0,
    };
    var km = {
      A: !0,
      ABBR: !0,
      ACRONYM: !0,
      ADDRESS: !0,
      AREA: !0,
      ARTICLE: !0,
      ASIDE: !0,
      B: !0,
      BDI: !0,
      BDO: !0,
      BIG: !0,
      BLOCKQUOTE: !0,
      BR: !0,
      BUTTON: !0,
      CAPTION: !0,
      CENTER: !0,
      CITE: !0,
      CODE: !0,
      COL: !0,
      COLGROUP: !0,
      DATA: !0,
      DATALIST: !0,
      DD: !0,
      DEL: !0,
      DETAILS: !0,
      DFN: !0,
      DIALOG: !0,
      DIR: !0,
      DIV: !0,
      DL: !0,
      DT: !0,
      EM: !0,
      FIELDSET: !0,
      FIGCAPTION: !0,
      FIGURE: !0,
      FONT: !0,
      FOOTER: !0,
      FORM: !0,
      H1: !0,
      H2: !0,
      H3: !0,
      H4: !0,
      H5: !0,
      H6: !0,
      HEADER: !0,
      HGROUP: !0,
      HR: !0,
      I: !0,
      IMG: !0,
      INPUT: !0,
      INS: !0,
      KBD: !0,
      LABEL: !0,
      LEGEND: !0,
      LI: !0,
      MAIN: !0,
      MAP: !0,
      MARK: !0,
      MENU: !0,
      METER: !0,
      NAV: !0,
      NOSCRIPT: !0,
      OL: !0,
      OPTGROUP: !0,
      OPTION: !0,
      OUTPUT: !0,
      P: !0,
      PRE: !0,
      PROGRESS: !0,
      Q: !0,
      S: !0,
      SAMP: !0,
      SECTION: !0,
      SELECT: !0,
      SMALL: !0,
      SOURCE: !0,
      SPAN: !0,
      STRIKE: !0,
      STRONG: !0,
      STYLE: !0,
      SUB: !0,
      SUMMARY: !0,
      SUP: !0,
      TABLE: !0,
      TBODY: !0,
      TD: !0,
      TEXTAREA: !0,
      TFOOT: !0,
      TH: !0,
      THEAD: !0,
      TIME: !0,
      TR: !0,
      TT: !0,
      U: !0,
      UL: !0,
      VAR: !0,
      WBR: !0,
    };
    var lm = {
      "ANNOTATION-XML": !0,
      "COLOR-PROFILE": !0,
      "FONT-FACE": !0,
      "FONT-FACE-SRC": !0,
      "FONT-FACE-URI": !0,
      "FONT-FACE-FORMAT": !0,
      "FONT-FACE-NAME": !0,
      "MISSING-GLYPH": !0,
    };
    function mm(a) {
      a = a || new nm();
      om(a);
      this.D = wc(a.C);
      this.K = wc(a.Z);
      this.F = wc(a.G);
      this.R = a.ha;
      a.ta.forEach(function (b) {
        if (!Oc(b, "data-"))
          throw new ec('Only "data-" attributes allowed, got: %s.', [b]);
        if (Oc(b, Ja))
          throw new ec(
            'Attributes with "%s" prefix are not allowed, got: %s.',
            [Ja, b]
          );
        this.D["* " + b.toUpperCase()] = pm;
      }, this);
      a.da.forEach(function (b) {
        b = b.toUpperCase();
        if (-1 == b.indexOf("-") || lm[b])
          throw new ec(
            "Only valid custom element tag names allowed, got: %s.",
            [b]
          );
        this.F[b] = !0;
      }, this);
      this.L = a.F;
      this.J = a.Y;
      this.G = null;
      this.M = a.T;
    }
    A(mm, im);
    function qm(a) {
      return function (b, c) {
        return (b = a(B(b), c)) && Zc(b) != qa ? Zc(b) : null;
      };
    }
    function nm() {
      this.C = {};
      gc(
        [jl, kl],
        function (a) {
          tc(a).forEach(function (b) {
            this.C[b] = pm;
          }, this);
        },
        this
      );
      this.D = {};
      this.ta = [];
      this.da = [];
      this.Z = wc(jm);
      this.G = wc(km);
      this.ha = !1;
      this.R = bd;
      this.L = this.J = this.K = this.F = Pe;
      this.Y = null;
      this.M = this.T = !1;
    }
    function rm() {
      var a = new nm();
      a.G = { SPAN: !0 };
      "a b br em i strong".split(" ").forEach(function (b) {
        b = b.toUpperCase();
        if (km[b]) this.G[b] = !0;
        else
          throw Error(
            "Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist."
          );
      }, a);
      return a;
    }
    function sm(a, b) {
      return function (c, d, e, f) {
        c = a(c, d, e, f);
        return null == c ? null : b(c, d, e, f);
      };
    }
    function tm(a, b, c, d) {
      a[c] && !b[c] && (a[c] = sm(a[c], d));
    }
    function om(a) {
      if (a.M)
        throw Error("HtmlSanitizer.Builder.build() can only be used once.");
      tm(a.C, a.D, "* USEMAP", um);
      var b = qm(a.R);
      ["* ACTION", "* CITE", "* HREF"].forEach(function (d) {
        tm(this.C, this.D, d, b);
      }, a);
      var c = qm(a.F);
      ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function (d) {
        tm(this.C, this.D, d, c);
      }, a);
      ["* FOR", "* HEADERS", "* NAME"].forEach(function (d) {
        tm(this.C, this.D, d, $b(vm, this.K));
      }, a);
      tm(a.C, a.D, "A TARGET", $b(wm, [pa, "_self"]));
      tm(a.C, a.D, "* CLASS", $b(xm, a.J));
      tm(a.C, a.D, "* ID", $b(ym, a.J));
      tm(a.C, a.D, "* STYLE", $b(a.L, c));
      a.M = !0;
    }
    function zm(a, b) {
      a || (a = "*");
      return (a + " " + b).toUpperCase();
    }
    function Am(a, b, c, d) {
      if (!d.Bb) return null;
      b = fd(
        Xl(d.Bb, function (e, f) {
          c.od = f;
          e = a(e, c);
          var g;
          null == e ? (g = null) : (g = new C(e, Yc));
          return g;
        })
      );
      return "" == b ? null : b;
    }
    function pm(a) {
      return B(a);
    }
    function wm(a, b) {
      b = B(b);
      return kc(a, b.toLowerCase()) ? b : null;
    }
    function um(a) {
      return (a = B(a)) && "#" == a.charAt(0) ? a : null;
    }
    function vm(a, b, c) {
      return a(B(b), c);
    }
    function xm(a, b, c) {
      b = b.split(/(?:\s+)/);
      for (var d = [], e = 0; e < b.length; e++) {
        var f = a(b[e], c);
        f && d.push(f);
      }
      return 0 == d.length ? null : d.join(" ");
    }
    function ym(a, b, c) {
      return a(B(b), c);
    }
    mm.prototype.C = function (a) {
      var b = !(ka in this.K) && ka in this.F;
      this.G =
        "*" == this.J && b
          ? "sanitizer-" +
            (Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(
                Math.floor(2147483648 * Math.random()) ^ Date.now()
              ).toString(36))
          : this.J;
      if (gm) {
        b = a;
        if (gm) {
          a = hf(document, ja);
          this.G && "*" == this.J && (a.id = this.G);
          this.M &&
            ((b = Zl("<div>" + b + "</div>")), am(b), (b = b.innerHTML));
          b = F(b);
          var c = document.createElement("template");
          if (hm && "content" in c) Te(c, b), (c = c.content);
          else {
            var d = document.implementation.createHTMLDocument("x");
            c = d.body;
            Te(d.body, b);
          }
          b = document.createTreeWalker(
            c,
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            null,
            !1
          );
          for (c = cm ? new WeakMap() : new em(); (d = b.nextNode()); ) {
            c: {
              var e = d;
              switch (Ol(e)) {
                case 3:
                  e = Bm(this, e);
                  break c;
                case 1:
                  if ("TEMPLATE" == Nl(e).toUpperCase()) e = null;
                  else {
                    var f = Nl(e).toUpperCase();
                    if (f in this.K || "http://www.w3.org/1999/xhtml" != Sl(e))
                      var g = null;
                    else
                      this.F[f]
                        ? (g = document.createElement(f))
                        : ((g = hf(document, ja)),
                          this.R &&
                            Kl(
                              g,
                              "data-sanitizer-original-tag",
                              f.toLowerCase()
                            ));
                    if (g) {
                      var h = g,
                        k = Jl(e);
                      if (null != k)
                        for (var n = 0; (f = k[n]); n++)
                          if (f.specified) {
                            var u = e;
                            var w = f;
                            var G = w.name;
                            if (Oc(G, Ja)) w = null;
                            else {
                              var D = Nl(u);
                              w = w.value;
                              var P = {
                                  tagName: B(D).toLowerCase(),
                                  attributeName: B(G).toLowerCase(),
                                },
                                Rf = { Bb: void 0 };
                              P.attributeName == kb && (Rf.Bb = Ll(u));
                              u = zm(D, G);
                              u in this.D
                                ? ((G = this.D[u]), (w = G(w, P, Rf)))
                                : ((G = zm(null, G)),
                                  G in this.D
                                    ? ((G = this.D[G]), (w = G(w, P, Rf)))
                                    : (w = null));
                            }
                            null !== w && Kl(h, f.name, w);
                          }
                      e = g;
                    } else e = null;
                  }
                  break c;
                default:
                  e = null;
              }
            }
            if (e) {
              if ((1 == Ol(e) && c.set(d, e), (d = Pl(d)), (f = !1), d))
                (g = Ol(d)),
                  (h = Nl(d).toLowerCase()),
                  (k = Pl(d)),
                  11 != g || k
                    ? "body" == h && k && (g = Pl(k)) && !Pl(g) && (f = !0)
                    : (f = !0),
                  (g = null),
                  f || !d ? (g = a) : 1 == Ol(d) && (g = c.get(d)),
                  g.content && (g = g.content),
                  g.appendChild(e);
            } else kf(d);
          }
          c.clear && c.clear();
        } else a = hf(document, ja);
        0 < Jl(a).length && ((b = hf(document, ja)), b.appendChild(a), (a = b));
        a = new XMLSerializer().serializeToString(a);
        a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
      } else a = "";
      return F(a);
    };
    function Bm(a, b) {
      var c = b.data;
      (b = Pl(b)) &&
        Nl(b).toLowerCase() == kb &&
        !(ka in a.K) &&
        ka in a.F &&
        (c = sd(
          Yl(
            c,
            a.G,
            y(function (d, e) {
              return this.L(d, { od: e });
            }, a)
          )
        ));
      return document.createTextNode(c);
    }
    function Cm(a) {
      Q.call(this, "Blog", a);
      this.C = a.N;
      this.J = new mm(rm());
      if (this.C.data) {
        a = new fi();
        this.K = hi(a, "blog.canonicalUrl");
        if (this.C.data.lightboxEnabled) {
          var b = this.C.data.lightboxModuleUrl,
            c = this.C.data.lightboxCssUrl;
          Yk().init(b, c);
          b = cf(document, "DIV", "post-body", this.C.C);
          for (c = 0; c < b.length; c++) {
            for (
              var d = "fakeId" + Dm++,
                e = Yk(),
                f = cf(document, "IMG", void 0, b[c]),
                g = f.length,
                h = [],
                k = 0;
              k < g;
              k++
            ) {
              var n = f[k].src,
                u = null,
                w = rf(f[k], "A");
              if (w) {
                w = w.href;
                var G = w;
                var D = n;
                if (ek(G) && ek(D)) {
                  var P = new Kk();
                  G = P.parse(G ? wk(Ok(new Mk(G, !1))).sa() : "");
                  D = P.parse(D ? wk(Ok(new Mk(D, !1))).sa() : "");
                  D = G.D.D == D.D.D;
                } else D = !1;
                D ||
                  ((D = w),
                  (P = n),
                  (D = Vk(D) && Vk(P) ? Wk(D) === Wk(P) : !1));
                if (D) {
                  if (
                    (w != n && (u = n),
                    (n = w),
                    !Vk(n) && (w = Jk(Pk.parse(n, !1))))
                  )
                    (w = new lk().parse(w)),
                      (w = new Y(w)),
                      (D = ((D = void 0), void 0)),
                      (P = w.D.C),
                      D != U(P, 4) && S(P, 4, D),
                      (D = ((D = void 0), void 0)),
                      (P = w.D.C),
                      D != U(P, 6) && S(P, 6, D),
                      (w = w.sa()),
                      (n = new Mk(n, !1)),
                      uk(n, w),
                      (n = n.sa());
                } else if (w != n) continue;
                h.push({ imageUrl: n, thumbnailUrl: u });
                L(f[k], ua, y(e.J, e, d, h.length - 1));
              }
            }
            0 < h.length &&
              ((e.C[d] = h), e.F || (e.F = L(window, "load", e.K, !1, e)));
          }
        }
        this.C.data.mobile &&
          (this.F = new Zj(hi(a, "blog.pageTitle"), this.K));
        this.G = this.D = null;
      }
    }
    v(Cm, Q);
    t = Cm.prototype;
    t.ka = function (a, b) {
      if ("getComments" == a) {
        if (b.comments && b.messages) {
          a = b.comments;
          for (var c = b.config, d = 0; d < a.length; d++)
            a: {
              var e = b,
                f = a[d];
              if (!document.getElementById("c" + f.id)) {
                f.author = this.J.C(f.author);
                f.body = this.J.C(f.body);
                var g = 1;
                if (f.inReplyTo) {
                  var h = document.getElementById("c" + f.inReplyTo);
                  if (h) {
                    var k;
                    g = h;
                    for (k = []; g; )
                      ve(g, "comment") && k.push(g), (g = mf(g));
                    g = k.length + 1;
                    k.length + 1 > e.config.maxDepth &&
                      ((h = rf(h.parentNode, null, "comment"))
                        ? (g--, (f.inReplyTo = h.id.slice(1)))
                        : (g = 1));
                  }
                }
                h = document.getElementById("c" + f.inReplyTo + "-ra");
                if (!h && ((h = document.getElementById("top-ra")), !h))
                  break a;
                g = { config: e.config, wd: e.messages, ld: f, depth: g };
                k = Pj;
                e = dc || (dc = new tf());
                g = k(g || Oj, void 0);
                if (Vb(g))
                  if (g instanceof oj) {
                    if (g.Yb !== lj)
                      throw Error("Sanitized content was not of kind HTML.");
                    g = F(g.toString());
                  } else g = Dd("zSoyz");
                else g = Dd(String(g));
                e = e.D;
                k = g;
                g = hf(e, "DIV");
                I
                  ? ((k = Id(Md, k)), Te(g, k), g.removeChild(g.firstChild))
                  : Te(g, k);
                if (1 == g.childNodes.length) e = g.removeChild(g.firstChild);
                else
                  for (e = e.createDocumentFragment(); g.firstChild; )
                    e.appendChild(g.firstChild);
                Em(this, e);
                h.appendChild(e);
                f.inReplyTo &&
                  (f = document.getElementById("c" + f.inReplyTo + "-rt")) &&
                  se(f, Wa);
              }
            }
          a.length < c.commentsPerPage
            ? ((this.D = null), qe(K("loadmore", this.C.C), Wa))
            : (this.D = a[a.length - 1].timestampAbs + 1);
        }
      } else Q.prototype.ka.call(this, a, b);
    };
    t.Yc = function (a) {
      var b = null,
        c = null;
      a = rf(a.currentTarget, null, "thread-toggle");
      ve(a, ob) ? ((b = nb), (c = ob)) : ((b = ob), (c = nb));
      gc(bf(c, mf(a)), function (d) {
        ue(d, c, b);
      });
    };
    t.Nc = function (a) {
      a = el(a.currentTarget);
      Fm(this, a || void 0);
    };
    function Fm(a, b) {
      var c = document.getElementById(xa);
      if (c) {
        var d = dj(c.src),
          e = b ? "c" + b : "top",
          f = document.getElementById(e + "-ce");
        f &&
          f !== mf(c) &&
          ((c.height = "250px"),
          (c.style.display = ta),
          (c.src = ""),
          f.appendChild(c),
          b ? d.C.set("parentID", b) : jj(d.C, "parentID"),
          (c.src = d.toString()));
        gc(bf("continue", a.C.C), function (g) {
          se(g, Wa);
        });
        (a = document.getElementById(e + "-continue")) && qe(a, Wa);
      }
    }
    t.Gc = function () {
      this.G &&
        this.D &&
        this.H.Da(
          "getComments",
          { postId: this.G, publishedMin: this.D },
          function (a) {
            return 500 > bi(a);
          },
          ha
        );
    };
    t.ia = function () {
      if (this.C.data.mobile) {
        var a = J(xa),
          b = window.location.href.split("#");
        b[b.length - 1] && "comment-form" == b[b.length - 1]
          ? a && (a.style.display = ta)
          : a && (a.style.display = p);
        a = N(this.H, "comment-editor-toggle-link");
        null != a && (a.onclick = this.Xc);
        (a = J("mobile-share-button")) &&
          this.F &&
          (a.onclick = y(this.yd, this));
      }
      this.M = new al();
      this.M.init();
      Em(this, this.C.C);
      if ((a = K("loadmore", this.C.C))) {
        a.onclick = this.Gc.bind(this);
        if (dl && a.dataset) b = a.dataset;
        else {
          b = {};
          for (var c = a.attributes, d = 0; d < c.length; ++d) {
            var e = c[d];
            if (Oc(e.name, "data-")) {
              var f = Ze(e.name.slice(5));
              b[f] = e.value;
            }
          }
        }
        b.publishedMin &&
          b.postId &&
          ((this.D = parseInt(b.publishedMin, 10) + 1),
          (this.G = b.postId),
          se(a, Wa));
      }
      Fm(this);
    };
    function Em(a, b) {
      gc(
        bf("thread-toggle", b),
        function (c) {
          c.onclick = this.Yc.bind(this);
          gc((c || document).getElementsByTagName("A"), function (d) {
            d.href = "javascript:;";
          });
        },
        a
      );
      gc(
        bf("comment-reply", b),
        function (c) {
          c.onclick = this.Nc.bind(this);
          c.href = "javascript:;";
        },
        a
      );
    }
    t.yd = function () {
      this.F.va ? this.F.show(!0) : this.F.render();
    };
    t.Xc = function () {
      var a = J(xa);
      a && (a.style.display = a.style.display == p ? ta : p);
      return !1;
    };
    var Dm = 0;
    z("_BlogView", Cm);
    function Gm(a) {
      Q.call(this, "BlogList", a);
    }
    v(Gm, Q);
    t = Gm.prototype;
    t.ia = function () {
      var a = this.H.N.data;
      this.Gb = a.totalItems;
      this.fb = a.numItemsToShow;
      0 != this.fb &&
        this.Gb > this.fb &&
        ((ai(this.H, "show-all").onclick = this.oc.bind(this)),
        (ai(this.H, "show-n").onclick = this.oc.bind(this)));
      L(window, "load", this.Fc);
    };
    t.oc = function () {
      var a = N(this.H, "blogs");
      if (null != a) {
        a = a.getElementsByTagName("li");
        for (var b = this.fb; b < this.Gb; b++) {
          var c = a[b];
          c.style.display = c.style.display == p ? ta : p;
        }
        a = ai(this.H, "show-all");
        a.style.display = a.style.display == p ? "inline" : p;
        a = ai(this.H, "show-n");
        a.style.display = a.style.display == p ? "inline" : p;
      }
    };
    t.Fc = function () {
      for (var a = document.images.length, b = 0; b < a; b++) {
        var c = document.images[b],
          d = null;
        if ((d = c.getAttribute("data-lateloadsrc")))
          L(c, Pa, function () {
            this.style.visibility = Wa;
          }),
            (c.src = d);
      }
    };
    t.Gb = null;
    t.fb = null;
    z("_BlogListView", Gm);
    function Hm(a) {
      Q.call(this, "BlogSearch", a);
    }
    v(Hm, Q);
    z("_BlogSearchView", Hm);
    var Im = RegExp(
      "^[+a-zA-Z0-9_.!#$%&'*\\/=?^`{|}~-]+@([a-zA-Z0-9-]+\\.)+[a-zA-Z0-9]{2,63}$"
    );
    function Jm(a) {
      Q.call(this, "ContactForm", a);
      this.C = a.N;
      this.D = this.C.data;
    }
    A(Jm, Q);
    z("_ContactFormView", Jm);
    Jm.prototype.ia = function () {
      var a = J(N(this.H, Fa));
      if (a) {
        var b = this;
        a.onclick = function () {
          Km(b) && Lm(b);
        };
      }
    };
    function Km(a) {
      J(N(a.H, Ca)).className = Ca;
      J(N(a.H, Ca)).textContent = "";
      J(N(a.H, Ga)).className = Ga;
      J(N(a.H, Ga)).textContent = "";
      var b = hf(document, "IMG");
      b.src =
        "https://resources.blogblog.com/img/widgets/icon_contactform_cross.gif";
      b.className = "contact-form-cross";
      b.onclick = function () {
        J(N(a.H, Ca)).className = Ca;
        J(N(a.H, Ca)).textContent = "";
      };
      var c = B(J(N(a.H, Aa)).value);
      if (!Im.test(c))
        return (
          (J(N(a.H, Ca)).className = Da),
          (J(N(a.H, Ca)).innerHTML = a.D.contactFormInvalidEmailMsg),
          J(N(a.H, Ca)).appendChild(b),
          !1
        );
      c = J(N(a.H, Ba)).value;
      return null == c || "" == B(c)
        ? ((J(N(a.H, Ca)).className = Da),
          (J(N(a.H, Ca)).innerHTML = a.D.contactFormEmptyMessageMsg),
          J(N(a.H, Ca)).appendChild(b),
          !1)
        : !0;
    }
    function Lm(a) {
      J(N(a.H, Fa)).className =
        "contact-form-button contact-form-button-submit disabled";
      J(N(a.H, Fa)).disabled = !0;
      J(N(a.H, Ga)).className = Ha;
      J(N(a.H, Ga)).innerHTML = a.D.contactFormMessageSendingMsg;
      var b = encodeURIComponent(B(J(N(a.H, Ea)).value)),
        c = encodeURIComponent(B(J(N(a.H, Aa)).value)),
        d = encodeURIComponent(B(J(N(a.H, Ba)).value)),
        unic_s = encodeURIComponent(B(J(N(a.H, CtS)).value)),
        e = encodeURIComponent(a.D.blogId),
        f = encodeURIComponent(a.D.contactFormToken);
      b = [
        "name=" + b,
        "email=" + c,
        "message=" + d + " | subject: " + unic_s,
        "blogID=" + e,
        "token=" + f,
      ];
      c = a.D.submitUrl;
      if (window.XDomainRequest && 9 >= zd()) {
        var g = new XDomainRequest();
        g.onload = function () {
          var h = eval("(" + g.responseText + ")");
          h = eval(h.details.emailSentStatus);
          Mm(a, h);
        };
        g.open("post", c, !0);
        g.send(b.join("&"));

        console.log(b);
      } else hh(c, a.qd.bind(a), "POST", b.join("&"));
    }
    Jm.prototype.qd = function (a) {
      a = a.target;
      var b = eval("(" + rh(a) + ")");
      b = eval(b.details.emailSentStatus);
      Mm(this, qh(a) && b);
    };
    function Mm(a, b) {
      J(N(a.H, Ga)).className = Ha;
      b
        ? ((J(N(a.H, Ea)).value = ""),
          (J(N(a.H, Aa)).value = ""),
          (J(N(a.H, Ba)).value = ""),
          (J(N(a.H, Ga)).innerHTML = a.D.contactFormMessageSentMsg))
        : (J(N(a.H, Ga)).innerHTML = a.D.contactFormMessageNotSentMsg);
      setTimeout(function () {
        J(N(a.H, Ga)).className = Ga;
        J(N(a.H, Ga)).textContent = "";
        J(N(a.H, Fa)).className =
          "contact-form-button contact-form-button-submit";
        J(N(a.H, Fa)).removeAttribute("disabled");
      }, 3e3);
    }
    function Nm(a) {
      Q.call(this, "Example", a);
    }
    v(Nm, Q);
    z("_ExampleView", Nm);
    function Om(a) {
      Q.call(this, "FeaturedPost", a);
    }
    v(Om, Q);
    z("_FeaturedPostView", Om);
    function Pm() {} /*
      
       Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: MIT
      */
    function Qm(a, b) {
      this.J = [];
      this.Y = a;
      this.ha = b || null;
      this.G = this.F = !1;
      this.D = void 0;
      this.R = this.Z = this.M = !1;
      this.K = 0;
      this.C = null;
      this.L = 0;
    }
    A(Qm, Pm);
    Qm.prototype.cancel = function (a) {
      if (this.F) this.D instanceof Qm && this.D.cancel();
      else {
        if (this.C) {
          var b = this.C;
          delete this.C;
          a ? b.cancel(a) : (b.L--, 0 >= b.L && b.cancel());
        }
        this.Y ? this.Y.call(this.ha, this) : (this.R = !0);
        this.F || ((a = new Rm(this)), Sm(this), Tm(this, !1, a));
      }
    };
    Qm.prototype.T = function (a, b) {
      this.M = !1;
      Tm(this, a, b);
    };
    function Tm(a, b, c) {
      a.F = !0;
      a.D = c;
      a.G = !b;
      Um(a);
    }
    function Sm(a) {
      if (a.F) {
        if (!a.R) throw new Vm(a);
        a.R = !1;
      }
    }
    Qm.prototype.callback = function (a) {
      Sm(this);
      Tm(this, !0, a);
    };
    function Wm(a, b, c, d) {
      a.J.push([b, c, d]);
      a.F && Um(a);
    }
    Qm.prototype.then = function (a, b, c) {
      var d,
        e,
        f = new vg(function (g, h) {
          e = g;
          d = h;
        });
      Wm(
        this,
        e,
        function (g) {
          g instanceof Rm ? f.cancel() : d(g);
          return Xm;
        },
        this
      );
      return f.then(a, b, c);
    };
    Qm.prototype.$goog_Thenable = !0;
    function Ym(a) {
      return ic(a.J, function (b) {
        return typeof b[1] === m;
      });
    }
    var Xm = {};
    function Um(a) {
      if (a.K && a.F && Ym(a)) {
        var b = a.K,
          c = Zm[b];
        c && (x.clearTimeout(c.ga), delete Zm[b]);
        a.K = 0;
      }
      a.C && (a.C.L--, delete a.C);
      b = a.D;
      for (var d = (c = !1); a.J.length && !a.M; ) {
        var e = a.J.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if ((f = a.G ? g : f))
          try {
            var h = f.call(e || a.ha, b);
            h === Xm && (h = void 0);
            void 0 !== h &&
              ((a.G = a.G && (h == b || h instanceof Error)), (a.D = b = h));
            if (ug(b) || (typeof x.Promise === m && b instanceof x.Promise))
              (d = !0), (a.M = !0);
          } catch (k) {
            (b = k), (a.G = !0), Ym(a) || (c = !0);
          }
      }
      a.D = b;
      d &&
        ((h = y(a.T, a, !0)),
        (d = y(a.T, a, !1)),
        b instanceof Qm ? (Wm(b, h, d), (b.Z = !0)) : b.then(h, d));
      c && ((b = new $m(b)), (Zm[b.ga] = b), (a.K = b.ga));
    }
    function Vm() {
      cc.call(this);
    }
    A(Vm, cc);
    Vm.prototype.message = "Deferred has already fired";
    Vm.prototype.name = "AlreadyCalledError";
    function Rm() {
      cc.call(this);
    }
    A(Rm, cc);
    Rm.prototype.message = "Deferred was canceled";
    Rm.prototype.name = "CanceledError";
    function $m(a) {
      this.ga = x.setTimeout(y(this.D, this), 0);
      this.C = a;
    }
    $m.prototype.D = function () {
      delete Zm[this.ga];
      throw this.C;
    };
    var Zm = {};
    function an(a, b) {
      var c = b || {};
      b = c.document || document;
      var d = Kc(a).toString(),
        e = uf(new tf(b), "SCRIPT"),
        f = { mc: e, wa: void 0 },
        g = new Qm(bn, f),
        h = null,
        k = null != c.timeout ? c.timeout : 5e3;
      0 < k &&
        ((h = window.setTimeout(function () {
          cn(e, !0);
          var n = new dn(1, "Timeout reached for loading script " + d);
          Sm(g);
          Tm(g, !1, n);
        }, k)),
        (f.wa = h));
      e.onload = e.onreadystatechange = function () {
        (e.readyState && "loaded" != e.readyState && e.readyState != za) ||
          (cn(e, c.kd || !1, h), g.callback(null));
      };
      e.onerror = function () {
        cn(e, !0, h);
        var n = new dn(0, "Error while loading script " + d);
        Sm(g);
        Tm(g, !1, n);
      };
      f = c.attributes || {};
      yc(f, { type: mb, charset: "UTF-8" });
      df(e, f);
      Ue(e, a);
      en(b).appendChild(e);
      return g;
    }
    function en(a) {
      var b = (a || document).getElementsByTagName("HEAD");
      return b && 0 !== b.length ? b[0] : a.documentElement;
    }
    function bn() {
      if (this && this.mc) {
        var a = this.mc;
        a && "SCRIPT" == a.tagName && cn(a, !0, this.wa);
      }
    }
    function cn(a, b, c) {
      null != c && x.clearTimeout(c);
      a.onload = function () {};
      a.onerror = function () {};
      a.onreadystatechange = function () {};
      b &&
        window.setTimeout(function () {
          lf(a);
        }, 0);
    }
    function dn(a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      cc.call(this, c);
      this.code = a;
    }
    A(dn, cc);
    function fn() {
      this.C = gn;
      this.wa = 5e3;
    }
    var hn = 0;
    fn.prototype.cancel = function (a) {
      a && (a.rd && a.rd.cancel(), a.ga && jn(a.ga, !1));
    };
    function kn(a) {
      return function () {
        jn(a, !1);
      };
    }
    function ln(a, b) {
      return function (c) {
        jn(a, !0);
        b.apply(void 0, arguments);
      };
    }
    function jn(a, b) {
      a = "_callbacks___" + a;
      if (x[a])
        if (b)
          try {
            delete x[a];
          } catch (c) {
            x[a] = void 0;
          }
        else x[a] = Qe;
    }
    function mn(a) {
      Q.call(this, "Feed", a);
    }
    v(mn, Q);
    mn.prototype.ka = function (a, b) {
      "getFeed" == a
        ? ((this.C.F = b), nn(this.C))
        : Q.prototype.ka.call(this, a, b);
    };
    mn.prototype.ia = function () {
      if ((this.D = N(this.H, "feedItemListDisplay"))) {
        var a = this.H.N.data;
        this.C = new on(a.feedUrl, this.D, {
          numItemsShow: a.numItemsShow,
          showItemAuthor: a.showItemAuthor,
          showItemDate: a.showItemDate,
          linkTarget: a.openLinksInNewWindow ? pa : "_self",
          useFeedWidgetServ: "true" === a.useFeedWidgetServ,
        });
        "true" === a.useFeedWidgetServ
          ? this.H.Da("getFeed", null, null, ha)
          : nn(this.C);
      }
    };
    function on(a, b, c) {
      this.M = a;
      this.D = b;
      this.C = c;
    }
    function nn(a) {
      if (a.C.useFeedWidgetServ) "ok" == a.F.status ? pn(a, a.F.feed) : qn(a);
      else {
        var b = new fn();
        b.wa = -1;
        var c = { q: a.M, num: a.C.numItemsShow, output: "json", v: "1.0" },
          d = y(a.G, a);
        a = c ? wc(c) : {};
        c = "_" + (hn++).toString(36) + Date.now().toString(36);
        var e = "_callbacks___" + c;
        d && ((x[e] = ln(c, d)), (a.callback = e));
        d = { timeout: b.wa, kd: !0 };
        b = Lc.exec(Kc(b.C).toString());
        e = b[3] || "";
        b = Mc(b[1] + Nc("?", b[2] || "", a) + Nc("#", e));
        b = an(b, d);
        Wm(b, null, kn(c));
      }
    }
    on.prototype.G = function (a) {
      200 == a.responseStatus ? pn(this, a.responseData.feed) : qn(this);
    };
    function pn(a, b) {
      kf(a.D);
      var c = hf(document, "ul");
      a.D.appendChild(c);
      for (
        var d = Math.min(b.entries.length, a.C.numItemsShow), e = 0;
        e < d;
        e++
      ) {
        var f = b.entries[e],
          g = hf(document, "li");
        c.appendChild(g);
        var h;
        (h = a.C.previewMode) ||
          ((h = new Oi(f.link).G),
          (h = !("" == h || "http" == h || "https" == h)));
        h = h
          ? ff("A", { href: "javascript:void(0);" }, f.title)
          : ff("A", { href: f.link }, f.title);
        h.target = a.C.linkTarget;
        g.appendChild(ff(ja, { class: "item-title" }, h));
        a.C.showItemDate &&
          ((h = ff(
            ja,
            { class: "item-date" },
            "\u00a0-\u00a0" + new Date(f.publishedDate).toLocaleDateString()
          )),
          g.appendChild(h));
        a.C.showItemAuthor &&
          ((f = ff(ja, { class: "item-author" }, "\u00a0-\u00a0" + f.author)),
          g.appendChild(f));
      }
      a.J && a.J(b);
    }
    function qn(a) {
      kf(a.D);
      a.D.appendChild(ff(ja, null, "Error loading feed."));
      a.K && a.K();
    }
    var gn = Mc(
      Fc(new Cc(Dc, "//ajax.googleapis.com/ajax/services/feed/load"))
    );
    z("_FeedView", mn);
    function rn(a) {
      Q.call(this, "Followers", a);
      this.C = a.N;
    }
    v(rn, Q);
    rn.prototype.ka = function (a, b) {
      "getFacepile" == a
        ? (sn(this, b), tn(this), un(this, b))
        : Q.prototype.ka.call(this, a, b);
    };
    rn.prototype.ia = function () {
      vc(this.C.data) || (tn(this), un(this, this.C.data));
    };
    function sn(a, b) {
      a = pc(b.followers, cf(document, "a", "follower-link", K(Ra, a.C.C)));
      for (b = 0; b < a.length; b++) {
        var c = a[b][0],
          d = a[b][1];
        d.setAttribute(Ka, c.viewUrl);
        d.onclick = function () {
          return !1;
        };
        d = K("follower-thumbnail", d);
        d.setAttribute("src", c.thumbnailUrl);
        d.setAttribute(pb, c.displayName);
      }
    }
    function tn(a) {
      var b = K(Ra, a.C.C);
      if (b) {
        b = cf(document, "a", "follower-link", b);
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          d.getAttribute(Ka) && (d.onclick = y(vn, a, d.getAttribute(Ka)));
        }
      }
    }
    function un(a, b) {
      var c = K("followers-next-link", a.C.C);
      c &&
        (b.nextTimestamp
          ? ((c.style.display = "inline"),
            (c = K("next-page-link", c)),
            (c.href = "#"),
            (c.onclick = function () {
              return !1;
            }),
            Xf(c),
            L(c, ua, y(rn.prototype.D, a, b.nextTimestamp)))
          : (c.style.display = p));
    }
    rn.prototype.D = function (a) {
      this.H.Da("getFacepile", { fcMT: a }, null, ha);
    };
    function vn(a) {
      window.open(
        a,
        pa,
        "height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no"
      );
    }
    z("_FollowersView", rn);
    function wn(a) {
      Q.call(this, wn.ea, a);
    }
    A(wn, Q);
    wn.ea = "Header";
    z("_HeaderView", wn);
    function xn(a, b) {
      Q.call(this, b, a);
    }
    v(xn, Q);
    function yn(a) {
      Q.call(this, "Text", a);
    }
    v(yn, xn);
    function zn(a) {
      Q.call(this, "HTML", a);
    }
    v(zn, xn);
    z("_TextView", yn);
    z("_HTMLView", zn);
    function An(a) {
      Q.call(this, "Image", a);
      this.C = a.N;
    }
    v(An, Q);
    An.prototype.ia = function () {
      if (1 == this.C.data.resize) {
        var a = N(this.H, "img"),
          b = this.C.C;
        if (a && b) {
          if (document.defaultView)
            b = parseInt(
              document.defaultView.getComputedStyle(b, null).width,
              10
            );
          else if (b.currentStyle)
            (a.style.display = p), (b = b.offsetWidth), (a.style.display = "");
          else return;
          a.width > b &&
            ((a.height = Math.round((b / a.width) * a.height)), (a.width = b));
          a.style.visibility = rb;
        }
      }
    };
    z("_ImageView", An);
    function Bn(a) {
      Q.call(this, "Label", a);
    }
    v(Bn, Q);
    z("_LabelView", Bn);
    function Cn(a) {
      Q.call(this, Cn.ea, a);
    }
    A(Cn, Q);
    Cn.ea = "TextList";
    z("_TextListView", Cn);
    function Dn(a) {
      Q.call(this, Dn.ea, a);
    }
    A(Dn, Q);
    Dn.ea = "LinkList";
    z("_LinkListView", Dn);
    function En(a) {
      Q.call(this, "BloggerButton", a);
    }
    v(En, Q);
    z("_BloggerButtonView", En);
    function Fn(a) {
      Q.call(this, "Navbar", a);
    }
    v(Fn, Q);
    z("_NavbarView", Fn);
    function Gn(a) {
      Q.call(this, "PageList", a);
    }
    v(Gn, Q);
    Gn.prototype.Pa = function () {
      return "PageList";
    };
    Gn.prototype.ia = function () {
      if (0 != this.H.N.data.mobile) {
        var a = N(this.H, "select");
        a &&
          (a.onchange = function (b) {
            b = b || window.event;
            b = b.target || b.srcElement;
            if ((b = b.options[b.selectedIndex].value)) window.location = b;
          });
      }
    };
    var _PageListView = Gn;
    z("_PageListView", Gn);
    function Hn(a) {
      Q.call(this, "Poll", a);
      this.F = this.D = this.C = null;
      if ((a = this.H.N.data))
        (this.C = "poll-widget" + a.pollid),
          (this.D = a.iframeurl),
          (this.F = L(window, "message", this.G, !1, this)),
          (a = document.getElementsByName(this.C)[0]),
          void 0 != a && (a.src.src = Kc(this.D).toString());
    }
    v(Hn, Q);
    Hn.prototype.G = function (a) {
      var b = document.getElementsByName(this.C)[0];
      void 0 != b &&
        ((a = a.C),
        a.source === b.contentWindow &&
          Oc(this.D, a.origin) &&
          ((a = a.data),
          typeof a !== cb || 0 > a || ((b.height = a + "px"), Wf(this.F))));
    };
    z("_PollView", Hn);
    function In(a) {
      Q.call(this, "PopularPosts", a);
    }
    v(In, Q);
    z("_PopularPostsView", In);
    function Jn(a) {
      Q.call(this, "Profile", a);
      this.C = a.N;
    }
    v(Jn, Q);
    Jn.prototype.ia = function () {
      this.C &&
        this.C.C &&
        0 == this.H.N.data.isDisplayable &&
        (this.C.C.style.display = p);
    };
    z("_ProfileView", Jn);
    function Kn(a) {
      Q.call(this, "RecentPosts", a);
    }
    v(Kn, Q);
    z("_RecentPostsView", Kn);
    function Ln(a) {
      Q.call(this, "ReportAbuse", a);
    }
    v(Ln, Q);
    z("_ReportAbuseView", Ln);
    function Mn(a) {
      Q.call(this, Mn.ea, a);
    }
    A(Mn, Q);
    Mn.ea = "Sharing";
    z("_SharingView", Mn);
    function Nn(a) {
      Q.call(this, "Stats", a);
    }
    v(Nn, Q);
    Nn.prototype.ia = function () {
      null != N(this.H, "totalCount") &&
        hh(this.H.N.data.statsUrl, y(this.G, this));
    };
    Nn.prototype.G = function (a) {
      a = a.target;
      if (qh(a)) {
        if (a.C)
          b: {
            a = a.C.responseText;
            if (x.JSON)
              try {
                var b = x.JSON.parse(a);
                break b;
              } catch (h) {}
            b = Vg(a);
          }
        else b = void 0;
        a = this.H.N.data;
        var c = N(this.H, "totalCount");
        if (null != c) {
          if (a.showGraphicalCounter) {
            this.F = b.total;
            for (var d = "" + b.total, e = 0; e < d.length; e++)
              c.appendChild(
                ff(
                  ja,
                  { class: "digit stage-0" },
                  ff(
                    "STRONG",
                    null,
                    document.createTextNode(String(d.charAt(e)))
                  ),
                  ff(ja, { class: "blind-plate" })
                )
              );
            a.showAnimatedCounter &&
              ((this.D = new Ng(b.nextTickMs)),
              L(this.D, "tick", y(this.J, this, c)),
              this.D.start());
          } else {
            d = b.total;
            if (isNaN(d) || 0 > d) d = "NaN";
            else {
              d = d.toString();
              e = [];
              for (var f = d.length, g = 0; g < f; g++)
                0 < g && 0 == g % 3 && e.push(","), e.push(d.charAt(f - 1 - g));
              d = e.reverse().join("");
            }
            nf(c, d);
          }
          a.showSparkline &&
            ((a = ai(this.H, "sparklinespan")),
            (c = b.sparklineData),
            (b = b.sparklineOptions),
            a && c && b ? On(a, c, b) : a && a.parentNode.removeChild(a));
          ai(this.H, "content").style.display = "";
        }
      }
    };
    function On(a, b, c) {
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(function () {
        new google.visualization.AreaChart(a).draw(
          google.visualization.arrayToDataTable(b, !0),
          Object.assign(
            {
              enableInteractivity: !1,
              chartArea: { top: 0, left: 0, width: 75, height: 30 },
              hAxis: { textPosition: p, gridlines: { color: "transparent" } },
              vAxis: { textPosition: p, gridlines: { color: "transparent" } },
              legend: { position: p },
            },
            c
          )
        );
      });
    }
    Nn.prototype.J = function (a) {
      if (Pn(this.F + 1) > Pn(this.F)) Xf(this.D), Og(this.D);
      else {
        this.F++;
        for (var b = "" + this.F, c = 0; c < b.length; c++) {
          var d = a.childNodes[c],
            e = b.charAt(c);
          var f = [];
          qf(d.firstChild, f, !0);
          f = f.join("");
          f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
          f = f.replace(/\u200B/g, "");
          f = f.replace(/ +/g, " ");
          " " != f && (f = f.replace(/^\s*/, ""));
          f != e &&
            (nf(d.firstChild, e),
            Pg(y(this.C, this, d, 1), 50),
            Pg(y(this.C, this, d, 2), 100),
            Pg(y(this.C, this, d, 3), 150),
            Pg(y(this.C, this, d, 0), 200));
        }
      }
    };
    function Pn(a) {
      return 0 == a ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1;
    }
    Nn.prototype.C = function (a, b) {
      var c = "stage-" + (0 != b ? b - 1 : 3);
      b = "stage-" + b;
      var d = pe(a);
      typeof c === r ? mc(d, c) : Array.isArray(c) && (d = te(d, c));
      typeof b !== r || kc(d, b) ? Array.isArray(b) && re(d, b) : d.push(b);
      a.className = d.join(" ");
    };
    z("_StatsView", Nn);
    function Qn(a) {
      Q.call(this, "Subscribe", a);
    }
    v(Qn, Q);
    function Rn(a, b) {
      a.style.zIndex = 1 == b ? "20" : "";
    }
    function Sn(a, b) {
      return a
        ? a.className && -1 != a.className.search(b)
          ? a
          : Sn(a.parentNode, b)
        : null;
    }
    function Tn(a, b) {
      Rn(a.parentNode, b);
      if (I) {
        var c = Sn(a, "section");
        c &&
          (c.parentNode.className &&
            -1 != c.parentNode.className.search("columns-cell") &&
            Rn(c.parentNode.parentNode.parentNode.parentNode, b),
          Rn(c, b));
        (a = Sn(a, "widget Subscribe")) && Rn(a.parentNode.parentNode, b);
      }
    }
    var Un = null,
      Vn = null;
    z("_SubscribeView", Qn);
    z("_SW_toggleReaderList", function (a, b) {
      var c = document.getElementById(la + b),
        d = document.getElementById(ma + b);
      a || (a = window.event);
      a.cancelBubble = !0;
      a.stopPropagation && a.stopPropagation();
      var e = document.onclick;
      null != Un &&
        Un != c &&
        (Tn(Un, !1), (Un.style.display = p), (Vn.style.visibility = rb));
      c.style.display == p
        ? (Tn(c, !0),
          (c.style.display = ""),
          (Un = c),
          (Vn = d),
          (d.style.visibility = Wa),
          (document.onclick = function () {
            c.style.display = p;
            Tn(c, !1);
            d.style.visibility = rb;
            e && (document.onclick = e);
          }))
        : ((c.style.display = p),
          Tn(c, !1),
          (d.style.visibility = rb),
          e && (document.onclick = e));
      return !1;
    });
    z("_SW_hideReaderList", function (a) {
      var b = document.getElementById(la + a);
      a = document.getElementById(ma + a);
      b.style.display = p;
      Tn(b, !1);
      a.style.visibility = rb;
    });
    function Wn(a) {
      Q.call(this, Wn.ea, a);
    }
    A(Wn, Q);
    Wn.ea = "Translate";
    z("_TranslateView", Wn);
    function Xn(a) {
      Mi.call(this, a);
    }
    v(Xn, Mi);
    function Yn() {
      var a = JSON.parse(
        '[null,null,null,null,null,"(function(){/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nvar f\\u003dthis||self,h\\u003dfunction(a){var b\\u003dtypeof a;return\\"object\\"!\\u003db?b:a?Array.isArray(a)?\\"array\\":b:\\"null\\"},k\\u003dfunction(a,b){function c(){}c.prototype\\u003db.prototype;a.i\\u003db.prototype;a.prototype\\u003dnew c;a.prototype.constructor\\u003da;a.h\\u003dfunction(e,d,p){for(var q\\u003dArray(arguments.length-2),g\\u003d2;g\\u003carguments.length;g++)q[g-2]\\u003darguments[g];return b.prototype[d].apply(e,q)}},l\\u003dfunction(a){return a};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nfunction m(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,m);else{var c\\u003dError().stack;c\\u0026\\u0026(this.stack\\u003dc)}a\\u0026\\u0026(this.message\\u003dString(a));void 0!\\u003d\\u003db\\u0026\\u0026(this.cause\\u003db)}k(m,Error);m.prototype.name\\u003d\\"CustomError\\";function n(a,b){a\\u003da.split(\\"%s\\");for(var c\\u003d\\"\\",e\\u003da.length-1,d\\u003d0;d\\u003ce;d++)c+\\u003da[d]+(d\\u003cb.length?b[d]:\\"%s\\");m.call(this,c+a[e])}k(n,m);n.prototype.name\\u003d\\"AssertionError\\";var r\\u003dfunction(a,b){throw new n(\\"Failure\\"+(a?\\": \\"+a:\\"\\"),Array.prototype.slice.call(arguments,1));};var t;var v\\u003dfunction(a,b){this.g\\u003db\\u003d\\u003d\\u003du?a:\\"\\"};v.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var u\\u003d{},w\\u003dfunction(a){if(void 0\\u003d\\u003d\\u003dt){var b\\u003dnull;var c\\u003df.trustedTypes;if(c\\u0026\\u0026c.createPolicy)try{b\\u003dc.createPolicy(\\"goog#html\\",{createHTML:l,createScript:l,createScriptURL:l})}catch(e){f.console\\u0026\\u0026f.console.error(e.message)}t\\u003db}a\\u003d(b\\u003dt)?b.createScriptURL(a):a;return new v(a,u)};if(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var b\\u003da.ports[0];a\\u003da.data;var c\\u003da.callbackName.split(\\".\\"),e\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003dc[0]\\u0026\\u0026c.unshift();for(var d\\u003d0;d\\u003cc.length-1;d++)e[c[d]]\\u003d{},e\\u003de[c[d]];e[c[c.length-1]]\\u003dfunction(p){b.postMessage(JSON.stringify(p))};c\\u003ddocument.createElement(\\"script\\");a\\u003dw(a.url);a instanceof v\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dv?a\\u003da.g:(r(\\"expected object of type TrustedResourceUrl, got \'\\"+a+\\"\' of type \\"+h(a)),a\\u003d\\"type_error:TrustedResourceUrl\\");c.src\\u003da;document.body.appendChild(c)},!0);}).call(this);\\n"]'
      );
      if (!Array.isArray(a))
        throw Error(
          "Expected to deserialize an Array but got " + Tb(a) + ": " + a
        );
      Ji = a;
      wi(a, 16);
      a = new Xn(a);
      Ji = null;
      if (!a) return null;
      a = R(a, 6);
      if (null === a || void 0 === a) a = null;
      else {
        var b = Bc();
        a = b ? b.createScript(a) : a;
        a = new Hc(a, Gc);
      }
      return a;
    }
    function Zn(a) {
      this.url = a;
      this.timeout = 5e3;
      this.G = "callback";
      this.C = this.D = null;
    }
    function $n(a) {
      var b = { callback: "?" };
      b = void 0 === b ? {} : b;
      a.C = Ag();
      var c = new Oi(a.url),
        d = new Map();
      d.set("callback", a.G);
      c.C.Dc(gj(b), d);
      ao(a)
        .then(function () {
          bo(a, c.toString());
        })
        .then(function () {
          return a.C.promise;
        })
        .then(
          function () {
            co(a);
          },
          function () {
            co(a);
          }
        );
      0 < a.timeout &&
        (a.F = setTimeout(function () {
          a.C.reject("Timeout!");
        }, a.timeout));
      return a.C.promise;
    }
    function bo(a, b) {
      var c = new MessageChannel();
      a.D.contentWindow.postMessage({ url: b, callbackName: a.G }, "*", [
        c.port2,
      ]);
      c.port1.onmessage = function (d) {
        var e = {};
        void 0 !== a.F && (clearTimeout(a.F), (a.F = void 0));
        void 0 === d.data &&
          a.C.reject("Callback called, but no data received");
        typeof d.data !== r &&
          a.C.reject("Exploitation attempt! Data is not a string!");
        try {
          e = JSON.parse(d.data);
        } catch (f) {
          a.C.reject("Invalid Data received: " + f.message);
        }
        a.C.resolve(e);
      };
    }
    function ao(a) {
      var b = Ag(),
        c = hf(document, "IFRAME");
      if (!c.sandbox) throw Error("iframe sandboxes not supported");
      c.sandbox.value = "allow-scripts";
      c.style.display = p;
      a.D = c;
      a = Yn();
      a = Id(Ld, Ed(F(Cd(Nd(a)).toString())));
      c.srcdoc = Cd(a);
      a = Mc("data:text/html;charset=UTF-8;base64," + btoa(Cd(a).toString()));
      c.src = Kc(a).toString();
      c.addEventListener(
        "load",
        function () {
          return b.resolve(c);
        },
        !1
      );
      c.addEventListener(
        Pa,
        function (d) {
          b.reject(d);
        },
        !1
      );
      document.documentElement.appendChild(c);
      return b.promise;
    }
    function co(a) {
      null !== a.D && (document.documentElement.removeChild(a.D), (a.D = null));
    }
    function Z(a) {
      Q.call(this, Z.ea, a);
    }
    A(Z, Q);
    Z.ea = "Wikipedia";
    z("_WikipediaView", Z);
    Z.Nb = 5;
    Z.Ka = "";
    Z.jb = "en";
    t = Z.prototype;
    t.Na = !1;
    t.Ha = !1;
    t.ia = function () {
      var a = N(this.H, "wikipedia-search-form");
      if (a) {
        Z.Ka = this.H.N.data.language || "en";
        var b = this;
        L(a, "submit", function (c) {
          Z.prototype.Ha || ((Z.prototype.Ha = !0), eo(b));
          c.preventDefault();
        });
      }
    };
    function eo(a) {
      kf(J(N(a.H, ub)));
      kf(J(N(a.H, tb)));
      var b = B(J(N(a.H, sb)).value);
      b
        ? ((b = cj(
            cj(
              cj(
                Ri(
                  new Oi("https://" + ((a.Na && Z.jb) || Z.Ka) + ba),
                  "/w/api.php"
                ),
                "action",
                "opensearch"
              ),
              "search",
              b
            ),
            "format",
            "json"
          )),
          (b = new Zn(b)),
          N(a.H, vb),
          N(a.H, ub),
          $n(b).then(y(a.Gd, a), y(a.Fd, a)))
        : ((J(N(a.H, vb)).style.display = p),
          Qd(
            ai(a.H, ub),
            fe(a.H.N.data.enterTextMsg, {
              ra: "08a2223f-715b-40c2-ac70-14f3c9cfec46",
            })
          ),
          (Z.prototype.Ha = !1));
    }
    t.Gd = function (a) {
      var b = N(this.H, vb),
        c = N(this.H, ub),
        d = B(J(N(this.H, sb)).value),
        e = [],
        f = a[1];
      a = f.length;
      if (0 == a)
        (J(b).style.display = ta),
          Qd(
            c,
            fe(this.H.N.data.noResultsFoundMsg, {
              ra: "0d97e0f4-c366-459f-8731-70b177eeffb9",
            })
          ),
          (Z.prototype.Ha = !1);
      else {
        for (var g = 0; g < a; g++)
          e.push(
            '<div id="wikipedia-search-result-link"><a target="_blank" href=https://' +
              (((this.Na && Z.jb) || Z.Ka) +
                ".wikipedia.org/wiki/" +
                f[g].replace(/ /g, "_")) +
              ">" +
              f[g] +
              "</a></div>"
          );
        if (a > Z.Nb) {
          for (a = 0; a < Z.Nb; a++) J(c).innerHTML += e[a];
          J(N(this.H, tb)).style.display = ta;
          e =
            '<a target="_blank" href=' +
            cj(
              cj(
                cj(
                  cj(
                    Ri(
                      new Oi("https://" + ((this.Na && Z.jb) || Z.Ka) + ba),
                      "/w/index.php"
                    ),
                    pb,
                    "Special:Search"
                  ),
                  "profile",
                  "default"
                ),
                "search",
                d
              ),
              "fulltext",
              "Search"
            ) +
            ">" +
            this.H.N.data.moreMsg +
            "</a>";
          c = J(N(this.H, tb));
          d = new nm();
          d.L = Am;
          d.K = Re;
          d.J = Re;
          d.F = bd;
          d.R = bd;
          e = new mm(d).C(e);
          Qd(c, e);
        } else for (d = 0; d < a; d++) J(c).innerHTML += e[d];
        J(b).style.display = ta;
        this.Na = Z.prototype.Ha = !1;
      }
    };
    t.Fd = function () {
      "en" != Z.Ka
        ? ((this.Na = !0), eo(this))
        : ((J(N(this.H, vb)).style.display = p),
          Qd(
            ai(this.H, ub),
            fe(this.H.N.data.fetchingErrorMsg, {
              ra: "04c93402-2dfe-49dd-a885-5fc05d08b8d5",
            })
          ),
          (Z.prototype.Ha = !1));
    };
    if (window.jstiming) {
      window.jstiming.Sb = {};
      window.jstiming.Hd = 1;
      var fo = function (a, b, c) {
          var d = a.t[b],
            e = a.t.start;
          if (d && (e || c))
            return (
              (d = a.t[b][0]),
              void 0 != c ? (e = c) : (e = e[0]),
              Math.round(d - e)
            );
        },
        go = function (a, b, c) {
          var d = "";
          window.jstiming.srt &&
            ((d += "&srt=" + window.jstiming.srt), delete window.jstiming.srt);
          window.jstiming.pt &&
            ((d += "&tbsrt=" + window.jstiming.pt), delete window.jstiming.pt);
          try {
            window.external && window.external.tran
              ? (d += "&tran=" + window.external.tran)
              : window.gtbExternal && window.gtbExternal.tran
              ? (d += "&tran=" + window.gtbExternal.tran())
              : window.chrome &&
                window.chrome.csi &&
                (d += "&tran=" + window.chrome.csi().tran);
          } catch (w) {}
          var e = window.chrome;
          if (e && (e = e.loadTimes)) {
            e().wasFetchedViaSpdy && (d += "&p=s");
            if (e().wasNpnNegotiated) {
              d += "&npn=1";
              var f = e().npnNegotiatedProtocol;
              f && (d += "&npnv=" + (encodeURIComponent || escape)(f));
            }
            e().wasAlternateProtocolAvailable && (d += "&apa=1");
          }
          var g = a.t,
            h = g.start;
          e = [];
          f = [];
          for (var k in g)
            if ("start" != k && 0 != k.indexOf("_")) {
              var n = g[k][1];
              n
                ? g[n] && f.push(k + "." + fo(a, k, g[n][0]))
                : h && e.push(k + "." + fo(a, k));
            }
          delete g.start;
          if (b) for (var u in b) d += "&" + u + "=" + b[u];
          (b = c) ||
            (b =
              Xa == document.location.protocol
                ? "https://csi.gstatic.com/csi"
                : "http://csi.gstatic.com/csi");
          return [
            b,
            "?v=3",
            "&s=" + (window.jstiming.sn || "blogger") + aa,
            a.name,
            f.length ? "&it=" + f.join(",") : "",
            d,
            "&rt=",
            e.join(","),
          ].join("");
        },
        ho = function (a, b, c) {
          a = go(a, b, c);
          if (!a) return "";
          b = new Image();
          var d = window.jstiming.Hd++;
          window.jstiming.Sb[d] = b;
          b.onload = b.onerror = function () {
            window.jstiming && delete window.jstiming.Sb[d];
          };
          b.src = a;
          b = null;
          return a;
        };
      window.jstiming.report = function (a, b, c) {
        var d = document.visibilityState,
          e = "visibilitychange";
        d ||
          ((d = document.webkitVisibilityState),
          (e = "webkitvisibilitychange"));
        if (d == db) {
          var f = !1,
            g = function () {
              if (!f) {
                b ? (b.prerender = "1") : (b = { prerender: "1" });
                if (
                  (document.visibilityState ||
                    document.webkitVisibilityState) == db
                )
                  var h = !1;
                else ho(a, b, c), (h = !0);
                h && ((f = !0), document.removeEventListener(e, g, !1));
              }
            };
          document.addEventListener(e, g, !1);
          return "";
        }
        return ho(a, b, c);
      };
    }
  }.call(this));
