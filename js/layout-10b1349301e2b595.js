(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        46: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 2661)), Promise.resolve().then(n.t.bind(n, 7960, 23)), Promise.resolve().then(n.bind(n, 4888)), Promise.resolve().then(n.bind(n, 8087)), Promise.resolve().then(n.bind(n, 7239)), Promise.resolve().then(n.t.bind(n, 2972, 23)), Promise.resolve().then(n.t.bind(n, 8003, 23)), Promise.resolve().then(n.t.bind(n, 6499, 23))
        },
        2661: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n(7437),
                a = function() {
                    for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)(e = arguments[n]) && (t = function e(t) {
                        var n, r, a = "";
                        if ("string" == typeof t || "number" == typeof t) a += t;
                        else if ("object" == typeof t) {
                            if (Array.isArray(t)) {
                                var o = t.length;
                                for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (a && (a += " "), a += r)
                            } else
                                for (r in t) t[r] && (a && (a += " "), a += r)
                        }
                        return a
                    }(e)) && (r && (r += " "), r += t);
                    return r
                },
                o = n(2265),
                i = n(2972),
                l = n.n(i),
                s = e => {
                    var t;
                    return (0, r.jsx)("li", {
                        className: "my-0",
                        children: (0, r.jsx)(l(), {
                            href: e.to,
                            className: "block my-1 text-center text-base font-medium transition-all ".concat(e.className ? e.className : ""),
                            "aria-current": "page",
                            onClick: e.onClick,
                            "aria-label": (null === (t = e.children) || void 0 === t ? void 0 : t.toString()) || "Menu item",
                            children: e.children
                        })
                    })
                },
                c = e => {
                    let {
                        onItemClick: t
                    } = e;
                    return (0, r.jsxs)("ul", {
                        className: "w-full font-medium flex flex-col items-center justify-between gap-2 px-4 py-2 bg-transparent mt-3 md:p-0 md:flex-row md:mt-0 md:gap-10 md:justify-end list-none ml-0",
                        children: [(0, r.jsx)(s, {
                            to: "/faq",
                            onClick: t,
                            children: "FAQ"
                        }), (0, r.jsx)(s, {
                            to: "/documentation",
                            onClick: t,
                            children: "Documentation"
                        }), (0, r.jsx)("a", {
                            href: "https://app.gumroad.com/library?creators=5594702239976&sort=purchase_date",
                            target: "_blank",
                            onClick: t,
                            children: "Dashboard"
                        }), (0, r.jsx)("a", {
                            href: "/#cta",
                            onClick: t,
                            className: "cta !px-4 !py-2 mx-2 gap-2 mb-1 items-center",
                            children: "Grab FREE Bonuses"
                        })]
                    })
                };

            function d() {
                let [e, t] = o.useState(!1), n = () => t(!1);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("button", {
                        "data-collapse-toggle": "navbar-default",
                        type: "button",
                        className: "inline-flex items-center md:hidden",
                        onClick: () => t(e => !e),
                        children: [(0, r.jsx)("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }), (0, r.jsxs)("svg", {
                            width: "26",
                            height: "19",
                            viewBox: "0 0 26 19",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, r.jsx)("path", {
                                d: "M1 1.80664H25",
                                stroke: "black",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }), (0, r.jsx)("path", {
                                d: "M1 9.80664H25",
                                stroke: "black",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }), (0, r.jsx)("path", {
                                d: "M1 17.8066H25",
                                stroke: "black",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: a("md:hidden navbar-inner absolute top-16 left-0 right-0 w-full shadow-md overflow-hidden bg-background transition-all z-20", {
                            "h-[225px]": e,
                            "h-0": !e
                        }),
                        id: "navbar-default",
                        children: (0, r.jsx)(c, {
                            onItemClick: n
                        })
                    }), (0, r.jsx)("div", {
                        className: "hidden md:block navbar-inner absolute top-16 left-0 right-0 md:relative md:top-0 w-full shadow-md md:shadow-none overflow-hidden",
                        id: "navbar-default",
                        children: (0, r.jsx)(c, {
                            onItemClick: n
                        })
                    })]
                })
            }
        },
        7239: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let r = n(7437),
                a = n(2265);
            t.default = function(e) {
                let {
                    html: t,
                    height: n = null,
                    width: o = null,
                    children: i,
                    dataNtpc: l = ""
                } = e;
                return (0, a.useEffect)(() => {
                    l && performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-".concat(l)
                        }
                    })
                }, [l]), (0, r.jsxs)(r.Fragment, {
                    children: [i, t ? (0, r.jsx)("div", {
                        style: {
                            height: null != n ? "".concat(n, "px") : "auto",
                            width: null != o ? "".concat(o, "px") : "auto"
                        },
                        "data-ntpc": l,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }) : null]
                })
            }
        },
        4888: function(e, t, n) {
            "use strict";
            var r;
            let a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGAEvent = t.GoogleAnalytics = void 0;
            let o = n(7437),
                i = n(2265),
                l = (r = n(8667)) && r.__esModule ? r : {
                    default: r
                };
            t.GoogleAnalytics = function(e) {
                let {
                    gaId: t,
                    dataLayerName: n = "dataLayer"
                } = e;
                return void 0 === a && (a = n), (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-ga"
                        }
                    })
                }, []), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(l.default, {
                        id: "_next-ga-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n          window['".concat(n, "'] = window['").concat(n, "'] || [];\n          function gtag(){window['").concat(n, "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t, "');")
                        }
                    }), (0, o.jsx)(l.default, {
                        id: "_next-ga",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                    })]
                })
            }, t.sendGAEvent = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (void 0 === a) {
                    console.warn("@next/third-parties: GA has not been initialized");
                    return
                }
                window[a] ? window[a].push(arguments) : console.warn("@next/third-parties: GA dataLayer ".concat(a, " does not exist"))
            }
        },
        8087: function(e, t, n) {
            "use strict";
            var r;
            let a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGTMEvent = t.GoogleTagManager = void 0;
            let o = n(7437),
                i = n(2265),
                l = (r = n(8667)) && r.__esModule ? r : {
                    default: r
                };
            t.GoogleTagManager = function(e) {
                let {
                    gtmId: t,
                    dataLayerName: n = "dataLayer",
                    auth: r,
                    preview: s,
                    dataLayer: c
                } = e;
                void 0 === a && (a = n);
                let d = "dataLayer" !== n ? "&l=".concat(n) : "";
                return (0, i.useEffect)(() => {
                    performance.mark("mark_feature_usage", {
                        detail: {
                            feature: "next-third-parties-gtm"
                        }
                    })
                }, []), (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(l.default, {
                        id: "_next-gtm-init",
                        dangerouslySetInnerHTML: {
                            __html: "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c ? "w[l].push(".concat(JSON.stringify(c), ")") : "", "\n      })(window,'").concat(n, "');")
                        }
                    }), (0, o.jsx)(l.default, {
                        id: "_next-gtm",
                        "data-ntpc": "GTM",
                        src: "https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(d).concat(r ? "&gtm_auth=".concat(r) : "").concat(s ? "&gtm_preview=".concat(s, "&gtm_cookies_win=x") : "")
                    })]
                })
            }, t.sendGTMEvent = e => {
                if (void 0 === a) {
                    console.warn("@next/third-parties: GTM has not been initialized");
                    return
                }
                window[a] ? window[a].push(e) : console.warn("@next/third-parties: GTM dataLayer ".concat(a, " does not exist"))
            }
        },
        8667: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a.a
                }
            });
            var r = n(8003),
                a = n.n(r),
                o = {};
            for (var i in r) "default" !== i && (o[i] = (function(e) {
                return r[e]
            }).bind(0, i));
            n.d(t, o)
        },
        8221: function(e, t) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return r
                    },
                    default: function() {
                        return i
                    },
                    isEqualNode: function() {
                        return o
                    }
                });
            let r = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function a(e) {
                let {
                    type: t,
                    props: n
                } = e, a = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let o = r[e] || e.toLowerCase();
                    "script" === t && ("async" === o || "defer" === o || "noModule" === o) ? a[o] = !!n[e] : a.setAttribute(o, n[e])
                }
                let {
                    children: o,
                    dangerouslySetInnerHTML: i
                } = n;
                return i ? a.innerHTML = i.__html || "" : o && (a.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), a
            }

            function o(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let r = t.cloneNode(!0);
                        return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r)
                    }
                }
                return e.isEqualNode(t)
            }

            function i() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let r = t.title ? t.title[0] : null,
                            a = "";
                        if (r) {
                            let {
                                children: e
                            } = r.props;
                            a = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        a !== document.title && (document.title = a), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    r = n.querySelector("meta[name=next-head-count]"),
                    i = Number(r.content),
                    l = [];
                for (let t = 0, n = r.previousElementSibling; t < i; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var s;
                    (null == n ? void 0 : null == (s = n.tagName) ? void 0 : s.toLowerCase()) === e && l.push(n)
                }
                let c = t.map(a).filter(e => {
                    for (let t = 0, n = l.length; t < n; t++)
                        if (o(l[t], e)) return l.splice(t, 1), !1;
                    return !0
                });
                l.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), c.forEach(e => n.insertBefore(e, r)), r.content = (i - l.length + c.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8003: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return v
                    },
                    handleClientScriptLoad: function() {
                        return g
                    },
                    initScriptLoader: function() {
                        return y
                    }
                });
            let r = n(7043),
                a = n(3099),
                o = n(7437),
                i = r._(n(4887)),
                l = a._(n(2265)),
                s = n(8701),
                c = n(8221),
                d = n(3515),
                u = new Map,
                f = new Set,
                p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                h = e => {
                    if (i.default.preinit) {
                        e.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                m = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: a = null,
                        dangerouslySetInnerHTML: o,
                        children: i = "",
                        strategy: l = "afterInteractive",
                        onError: s,
                        stylesheets: d
                    } = e, m = n || t;
                    if (m && f.has(m)) return;
                    if (u.has(t)) {
                        f.add(m), u.get(t).then(r, s);
                        return
                    }
                    let g = () => {
                            a && a(), f.add(m)
                        },
                        y = document.createElement("script"),
                        _ = new Promise((e, t) => {
                            y.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), g()
                            }), y.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            s && s(e)
                        });
                    for (let [n, r] of(o ? (y.innerHTML = o.__html || "", g()) : i ? (y.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", g()) : t && (y.src = t, u.set(t, _)), Object.entries(e))) {
                        if (void 0 === r || p.includes(n)) continue;
                        let e = c.DOMAttributeNames[n] || n.toLowerCase();
                        y.setAttribute(e, r)
                    }
                    "worker" === l && y.setAttribute("type", "text/partytown"), y.setAttribute("data-nscript", l), d && h(d), document.body.appendChild(y)
                };

            function g(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, d.requestIdleCallback)(() => m(e))
                }) : m(e)
            }

            function y(e) {
                e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    f.add(t)
                })
            }

            function _(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: a = null,
                    strategy: c = "afterInteractive",
                    onError: u,
                    stylesheets: p,
                    ...h
                } = e, {
                    updateScripts: g,
                    scripts: y,
                    getIsSsr: _,
                    appDir: v,
                    nonce: b
                } = (0, l.useContext)(s.HeadManagerContext), w = (0, l.useRef)(!1);
                (0, l.useEffect)(() => {
                    let e = t || n;
                    w.current || (a && e && f.has(e) && a(), w.current = !0)
                }, [a, t, n]);
                let x = (0, l.useRef)(!1);
                if ((0, l.useEffect)(() => {
                        !x.current && ("afterInteractive" === c ? m(e) : "lazyOnload" === c && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                            (0, d.requestIdleCallback)(() => m(e))
                        })), x.current = !0)
                    }, [e, c]), ("beforeInteractive" === c || "worker" === c) && (g ? (y[c] = (y[c] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: a,
                        onError: u,
                        ...h
                    }]), g(y)) : _ && _() ? f.add(t || n) : _ && !_() && m(e)), v) {
                    if (p && p.forEach(e => {
                            i.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === c) return n ? (i.default.preload(n, h.integrity ? {
                        as: "script",
                        integrity: h.integrity,
                        nonce: b,
                        crossOrigin: h.crossOrigin
                    } : {
                        as: "script",
                        nonce: b,
                        crossOrigin: h.crossOrigin
                    }), (0, o.jsx)("script", {
                        nonce: b,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, {
                                ...h,
                                id: t
                            }]) + ")"
                        }
                    })) : (h.dangerouslySetInnerHTML && (h.children = h.dangerouslySetInnerHTML.__html, delete h.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                        nonce: b,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                ...h,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === c && n && i.default.preload(n, h.integrity ? {
                        as: "script",
                        integrity: h.integrity,
                        nonce: b,
                        crossOrigin: h.crossOrigin
                    } : {
                        as: "script",
                        nonce: b,
                        crossOrigin: h.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(_, "__nextScript", {
                value: !0
            });
            let v = _;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        7960: function() {},
        6499: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Montserrat_4bc053', '__Montserrat_Fallback_4bc053'",
                    fontStyle: "normal"
                },
                className: "__className_4bc053"
            }
        }
    },
    function(e) {
        e.O(0, [869, 972, 971, 117, 744], function() {
            return e(e.s = 46)
        }), _N_E = e.O()
    }
]);