var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B;
            (function (PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B) {
                ;
                ;
                /**
                 *
                 */
                function converter(options) {
                    console.log("enter converter");
                    var dataViews = options.dataViews;
                    var categorical = dataViews[0].categorical;
                    var fy = categorical.categories[0];
                    var startDate = categorical.categories[4];
                    var endDate = categorical.categories[5];
                    console.log("categorical", categorical.categories);
                    console.log("fy", fy);
                    console.log("start_dates", startDate);
                    console.log("endDate", endDate);
                    //	sortedDate.map(function(d: PrimitiveValue):Date{ return new Date(d)});
                    var timelineView = {
                        maxStartDate: new Date(),
                        maxEndDate: new Date()
                    };
                    console.log(timelineView);
                    return timelineView;
                }
                var Visual = (function () {
                    function Visual(options) {
                        console.log("helloe");
                        this.target = options.element;
                        var svg = this.svg = d3.select(options.element).append('svg').classed('mainSvg', true);
                    }
                    Visual.prototype.update = function (options) {
                        var width = options.viewport.width, height = options.viewport.height, padding = 100;
                        var timelineView = converter(options);
                        // let maxStartDate= timelineView.maxStartDate.getUTCFullYear();
                        // let maxEndDate = timelineView.maxEndDate.getUTCFullYear();
                        //	this.target.innerHTML = `<p>Update count: <em>${(maxStartDate)}</em></p> <p>Update count: <em>${(maxEndDate)}</em></p`;
                        console.log("Start Date", timelineView.maxStartDate, "...End Date", timelineView.maxEndDate);
                        var xScale = d3.time.scale()
                            .domain([timelineView.maxStartDate, timelineView.maxEndDate])
                            .range([padding, width - padding]);
                        var xAxis = d3.svg.axis()
                            .orient("bottom")
                            .scale(xScale)
                            .ticks(d3.time.months, 1)
                            .tickFormat(d3.time.format("%b %y"))
                            .tickSize(16, 2);
                        this.svg.selectAll("*").remove();
                        this.svg.append("g")
                            .attr("class", "xaxis")
                            .attr("transform", "translate(0," + (height - padding) + ")")
                            .call(xAxis);
                        this.svg.selectAll(".xaxis text")
                            .attr("transform", function (d) {
                            return "translate(" + this.getBBox().height * -2 + "," + this.getBBox().height + ")rotate(-45)";
                        });
                    };
                    Visual.prototype.destroy = function () {
                        //TODO: Perform any cleanup tasks here
                    };
                    return Visual;
                }());
                PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B.Visual = Visual;
            })(PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B = visual.PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B || (visual.PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
!function () {
    function n(n) { return n && (n.ownerDocument || n.document || n).documentElement; }
    function t(n) { return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView); }
    function e(n, t) { return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0; }
    function r(n) { return null === n ? 0 / 0 : +n; }
    function u(n) { return !isNaN(n); }
    function i(n) { return { left: function (t, e, r, u) { for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
            var i = r + u >>> 1;
            n(t[i], e) < 0 ? r = i + 1 : u = i;
        } return r; }, right: function (t, e, r, u) { for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
            var i = r + u >>> 1;
            n(t[i], e) > 0 ? u = i : r = i + 1;
        } return r; } }; }
    function o(n) { return n.length; }
    function a(n) { for (var t = 1; n * t % 1;)
        t *= 10; return t; }
    function c(n, t) { for (var e in t)
        Object.defineProperty(n.prototype, e, { value: t[e], enumerable: !1 }); }
    function l() { this._ = Object.create(null); }
    function s(n) { return (n += "") === pa || n[0] === va ? va + n : n; }
    function f(n) { return (n += "")[0] === va ? n.slice(1) : n; }
    function h(n) { return s(n) in this._; }
    function g(n) { return (n = s(n)) in this._ && delete this._[n]; }
    function p() { var n = []; for (var t in this._)
        n.push(f(t)); return n; }
    function v() { var n = 0; for (var t in this._)
        ++n; return n; }
    function d() { for (var n in this._)
        return !1; return !0; }
    function m() { this._ = Object.create(null); }
    function y(n) { return n; }
    function M(n, t, e) { return function () { var r = e.apply(t, arguments); return r === t ? n : r; }; }
    function x(n, t) { if (t in n)
        return t; t = t.charAt(0).toUpperCase() + t.slice(1); for (var e = 0, r = da.length; r > e; ++e) {
        var u = da[e] + t;
        if (u in n)
            return u;
    } }
    function b() { }
    function _() { }
    function w(n) { function t() { for (var t, r = e, u = -1, i = r.length; ++u < i;)
        (t = r[u].on) && t.apply(this, arguments); return n; } var e = [], r = new l; return t.on = function (t, u) { var i, o = r.get(t); return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, { on: u })), n); }, t; }
    function S() { ta.event.preventDefault(); }
    function k() { for (var n, t = ta.event; n = t.sourceEvent;)
        t = n; return t; }
    function E(n) { for (var t = new _, e = 0, r = arguments.length; ++e < r;)
        t[arguments[e]] = w(t); return t.of = function (e, r) { return function (u) { try {
        var i = u.sourceEvent = ta.event;
        u.target = n, ta.event = u, t[u.type].apply(e, r);
    }
    finally {
        ta.event = i;
    } }; }, t; }
    function A(n) { return ya(n, _a), n; }
    function N(n) { return "function" == typeof n ? n : function () { return Ma(n, this); }; }
    function C(n) { return "function" == typeof n ? n : function () { return xa(n, this); }; }
    function z(n, t) { function e() { this.removeAttribute(n); } function r() { this.removeAttributeNS(n.space, n.local); } function u() { this.setAttribute(n, t); } function i() { this.setAttributeNS(n.space, n.local, t); } function o() { var e = t.apply(this, arguments); null == e ? this.removeAttribute(n) : this.setAttribute(n, e); } function a() { var e = t.apply(this, arguments); null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e); } return n = ta.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u; }
    function q(n) { return n.trim().replace(/\s+/g, " "); }
    function L(n) { return new RegExp("(?:^|\\s+)" + ta.requote(n) + "(?:\\s+|$)", "g"); }
    function T(n) { return (n + "").trim().split(/^|\s+/); }
    function R(n, t) { function e() { for (var e = -1; ++e < u;)
        n[e](this, t); } function r() { for (var e = -1, r = t.apply(this, arguments); ++e < u;)
        n[e](this, r); } n = T(n).map(D); var u = n.length; return "function" == typeof t ? r : e; }
    function D(n) { var t = L(n); return function (e, r) { if (u = e.classList)
        return r ? u.add(n) : u.remove(n); var u = e.getAttribute("class") || ""; r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", q(u + " " + n))) : e.setAttribute("class", q(u.replace(t, " "))); }; }
    function P(n, t, e) { function r() { this.style.removeProperty(n); } function u() { this.style.setProperty(n, t, e); } function i() { var r = t.apply(this, arguments); null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e); } return null == t ? r : "function" == typeof t ? i : u; }
    function U(n, t) { function e() { delete this[n]; } function r() { this[n] = t; } function u() { var e = t.apply(this, arguments); null == e ? delete this[n] : this[n] = e; } return null == t ? e : "function" == typeof t ? u : r; }
    function j(n) { function t() { var t = this.ownerDocument, e = this.namespaceURI; return e ? t.createElementNS(e, n) : t.createElement(n); } function e() { return this.ownerDocument.createElementNS(n.space, n.local); } return "function" == typeof n ? n : (n = ta.ns.qualify(n)).local ? e : t; }
    function F() { var n = this.parentNode; n && n.removeChild(this); }
    function H(n) { return { __data__: n }; }
    function O(n) { return function () { return ba(this, n); }; }
    function I(n) { return arguments.length || (n = e), function (t, e) { return t && e ? n(t.__data__, e.__data__) : !t - !e; }; }
    function Y(n, t) { for (var e = 0, r = n.length; r > e; e++)
        for (var u, i = n[e], o = 0, a = i.length; a > o; o++)
            (u = i[o]) && t(u, o, e); return n; }
    function Z(n) { return ya(n, Sa), n; }
    function V(n) { var t, e; return function (r, u, i) { var o, a = n[i].update, c = a.length; for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;)
        ; return o; }; }
    function X(n, t, e) { function r() { var t = this[o]; t && (this.removeEventListener(n, t, t.$), delete this[o]); } function u() { var u = c(t, ra(arguments)); r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t; } function i() { var t, e = new RegExp("^__on([^.]+)" + ta.requote(n) + "$"); for (var r in this)
        if (t = r.match(e)) {
            var u = this[r];
            this.removeEventListener(t[1], u, u.$), delete this[r];
        } } var o = "__on" + n, a = n.indexOf("."), c = $; a > 0 && (n = n.slice(0, a)); var l = ka.get(n); return l && (n = l, c = B), a ? t ? u : r : t ? b : i; }
    function $(n, t) { return function (e) { var r = ta.event; ta.event = e, t[0] = this.__data__; try {
        n.apply(this, t);
    }
    finally {
        ta.event = r;
    } }; }
    function B(n, t) { var e = $(n, t); return function (n) { var t = this, r = n.relatedTarget; r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n); }; }
    function W(e) { var r = ".dragsuppress-" + ++Aa, u = "click" + r, i = ta.select(t(e)).on("touchmove" + r, S).on("dragstart" + r, S).on("selectstart" + r, S); if (null == Ea && (Ea = "onselectstart" in e ? !1 : x(e.style, "userSelect")), Ea) {
        var o = n(e).style, a = o[Ea];
        o[Ea] = "none";
    } return function (n) { if (i.on(r, null), Ea && (o[Ea] = a), n) {
        var t = function () { i.on(u, null); };
        i.on(u, function () { S(), t(); }, !0), setTimeout(t, 0);
    } }; }
    function J(n, e) { e.changedTouches && (e = e.changedTouches[0]); var r = n.ownerSVGElement || n; if (r.createSVGPoint) {
        var u = r.createSVGPoint();
        if (0 > Na) {
            var i = t(n);
            if (i.scrollX || i.scrollY) {
                r = ta.select("body").append("svg").style({ position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none" }, "important");
                var o = r[0][0].getScreenCTM();
                Na = !(o.f || o.e), r.remove();
            }
        }
        return Na ? (u.x = e.pageX, u.y = e.pageY) : (u.x = e.clientX, u.y = e.clientY), u = u.matrixTransform(n.getScreenCTM().inverse()), [u.x, u.y];
    } var a = n.getBoundingClientRect(); return [e.clientX - a.left - n.clientLeft, e.clientY - a.top - n.clientTop]; }
    function G() { return ta.event.changedTouches[0].identifier; }
    function K(n) { return n > 0 ? 1 : 0 > n ? -1 : 0; }
    function Q(n, t, e) { return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]); }
    function nt(n) { return n > 1 ? 0 : -1 > n ? qa : Math.acos(n); }
    function tt(n) { return n > 1 ? Ra : -1 > n ? -Ra : Math.asin(n); }
    function et(n) { return ((n = Math.exp(n)) - 1 / n) / 2; }
    function rt(n) { return ((n = Math.exp(n)) + 1 / n) / 2; }
    function ut(n) { return ((n = Math.exp(2 * n)) - 1) / (n + 1); }
    function it(n) { return (n = Math.sin(n / 2)) * n; }
    function ot() { }
    function at(n, t, e) { return this instanceof at ? (this.h = +n, this.s = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof at ? new at(n.h, n.s, n.l) : bt("" + n, _t, at) : new at(n, t, e); }
    function ct(n, t, e) { function r(n) { return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i; } function u(n) { return Math.round(255 * r(n)); } var i, o; return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, new mt(u(n + 120), u(n), u(n - 120)); }
    function lt(n, t, e) { return this instanceof lt ? (this.h = +n, this.c = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof lt ? new lt(n.h, n.c, n.l) : n instanceof ft ? gt(n.l, n.a, n.b) : gt((n = wt((n = ta.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new lt(n, t, e); }
    function st(n, t, e) { return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new ft(e, Math.cos(n *= Da) * t, Math.sin(n) * t); }
    function ft(n, t, e) { return this instanceof ft ? (this.l = +n, this.a = +t, void (this.b = +e)) : arguments.length < 2 ? n instanceof ft ? new ft(n.l, n.a, n.b) : n instanceof lt ? st(n.h, n.c, n.l) : wt((n = mt(n)).r, n.g, n.b) : new ft(n, t, e); }
    function ht(n, t, e) { var r = (n + 16) / 116, u = r + t / 500, i = r - e / 200; return u = pt(u) * Xa, r = pt(r) * $a, i = pt(i) * Ba, new mt(dt(3.2404542 * u - 1.5371385 * r - .4985314 * i), dt(-.969266 * u + 1.8760108 * r + .041556 * i), dt(.0556434 * u - .2040259 * r + 1.0572252 * i)); }
    function gt(n, t, e) { return n > 0 ? new lt(Math.atan2(e, t) * Pa, Math.sqrt(t * t + e * e), n) : new lt(0 / 0, 0 / 0, n); }
    function pt(n) { return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037; }
    function vt(n) { return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29; }
    function dt(n) { return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055)); }
    function mt(n, t, e) { return this instanceof mt ? (this.r = ~~n, this.g = ~~t, void (this.b = ~~e)) : arguments.length < 2 ? n instanceof mt ? new mt(n.r, n.g, n.b) : bt("" + n, mt, ct) : new mt(n, t, e); }
    function yt(n) { return new mt(n >> 16, n >> 8 & 255, 255 & n); }
    function Mt(n) { return yt(n) + ""; }
    function xt(n) { return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16); }
    function bt(n, t, e) { var r, u, i, o = 0, a = 0, c = 0; if (r = /([a-z]+)\((.*)\)/i.exec(n))
        switch (u = r[2].split(","), r[1]) {
            case "hsl": return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case "rgb": return t(kt(u[0]), kt(u[1]), kt(u[2]));
        } return (i = Ga.get(n.toLowerCase())) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c)); }
    function _t(n, t, e) { var r, u, i = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - i, c = (o + i) / 2; return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), new at(r, u, c); }
    function wt(n, t, e) { n = St(n), t = St(t), e = St(e); var r = vt((.4124564 * n + .3575761 * t + .1804375 * e) / Xa), u = vt((.2126729 * n + .7151522 * t + .072175 * e) / $a), i = vt((.0193339 * n + .119192 * t + .9503041 * e) / Ba); return ft(116 * u - 16, 500 * (r - u), 200 * (u - i)); }
    function St(n) { return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4); }
    function kt(n) { var t = parseFloat(n); return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t; }
    function Et(n) { return "function" == typeof n ? n : function () { return n; }; }
    function At(n) { return function (t, e, r) { return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Nt(t, e, n, r); }; }
    function Nt(n, t, e, r) { function u() { var n, t = c.status; if (!t && zt(c) || t >= 200 && 300 > t || 304 === t) {
        try {
            n = e.call(i, c);
        }
        catch (r) {
            return void o.error.call(i, r);
        }
        o.load.call(i, n);
    }
    else
        o.error.call(i, c); } var i = {}, o = ta.dispatch("beforesend", "progress", "load", "error"), a = {}, c = new XMLHttpRequest, l = null; return !this.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function () { c.readyState > 3 && u(); }, c.onprogress = function (n) { var t = ta.event; ta.event = n; try {
        o.progress.call(i, c);
    }
    finally {
        ta.event = t;
    } }, i.header = function (n, t) { return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i); }, i.mimeType = function (n) { return arguments.length ? (t = null == n ? null : n + "", i) : t; }, i.responseType = function (n) { return arguments.length ? (l = n, i) : l; }, i.response = function (n) { return e = n, i; }, ["get", "post"].forEach(function (n) { i[n] = function () { return i.send.apply(i, [n].concat(ra(arguments))); }; }), i.send = function (e, r, u) { if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
        for (var s in a)
            c.setRequestHeader(s, a[s]); return null != t && c.overrideMimeType && c.overrideMimeType(t), null != l && (c.responseType = l), null != u && i.on("error", u).on("load", function (n) { u(null, n); }), o.beforesend.call(i, c), c.send(null == r ? null : r), i; }, i.abort = function () { return c.abort(), i; }, ta.rebind(i, o, "on"), null == r ? i : i.get(Ct(r)); }
    function Ct(n) { return 1 === n.length ? function (t, e) { n(null == t ? e : null); } : n; }
    function zt(n) { var t = n.responseType; return t && "text" !== t ? n.response : n.responseText; }
    function qt() { var n = Lt(), t = Tt() - n; t > 24 ? (isFinite(t) && (clearTimeout(tc), tc = setTimeout(qt, t)), nc = 0) : (nc = 1, rc(qt)); }
    function Lt() { var n = Date.now(); for (ec = Ka; ec;)
        n >= ec.t && (ec.f = ec.c(n - ec.t)), ec = ec.n; return n; }
    function Tt() { for (var n, t = Ka, e = 1 / 0; t;)
        t.f ? t = n ? n.n = t.n : Ka = t.n : (t.t < e && (e = t.t), t = (n = t).n); return Qa = n, e; }
    function Rt(n, t) { return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1); }
    function Dt(n, t) { var e = Math.pow(10, 3 * ga(8 - t)); return { scale: t > 8 ? function (n) { return n / e; } : function (n) { return n * e; }, symbol: n }; }
    function Pt(n) { var t = n.decimal, e = n.thousands, r = n.grouping, u = n.currency, i = r && e ? function (n, t) { for (var u = n.length, i = [], o = 0, a = r[0], c = 0; u > 0 && a > 0 && (c + a + 1 > t && (a = Math.max(1, t - c)), i.push(n.substring(u -= a, u + a)), !((c += a + 1) > t));)
        a = r[o = (o + 1) % r.length]; return i.reverse().join(e); } : y; return function (n) { var e = ic.exec(n), r = e[1] || " ", o = e[2] || ">", a = e[3] || "-", c = e[4] || "", l = e[5], s = +e[6], f = e[7], h = e[8], g = e[9], p = 1, v = "", d = "", m = !1, y = !0; switch (h && (h = +h.substring(1)), (l || "0" === r && "=" === o) && (l = r = "0", o = "="), g) {
        case "n":
            f = !0, g = "g";
            break;
        case "%":
            p = 100, d = "%", g = "f";
            break;
        case "p":
            p = 100, d = "%", g = "r";
            break;
        case "b":
        case "o":
        case "x":
        case "X": "#" === c && (v = "0" + g.toLowerCase());
        case "c": y = !1;
        case "d":
            m = !0, h = 0;
            break;
        case "s": p = -1, g = "r";
    } "$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = oc.get(g) || Ut; var M = l && f; return function (n) { var e = d; if (m && n % 1)
        return ""; var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : "-" === a ? "" : a; if (0 > p) {
        var c = ta.formatPrefix(n, h);
        n = c.scale(n), e = c.symbol + d;
    }
    else
        n *= p; n = g(n, h); var x, b, _ = n.lastIndexOf("."); if (0 > _) {
        var w = y ? n.lastIndexOf("e") : -1;
        0 > w ? (x = n, b = "") : (x = n.substring(0, w), b = n.substring(w));
    }
    else
        x = n.substring(0, _), b = t + n.substring(_ + 1); !l && f && (x = i(x, 1 / 0)); var S = v.length + x.length + b.length + (M ? 0 : u.length), k = s > S ? new Array(S = s - S + 1).join(r) : ""; return M && (x = i(k + x, k.length ? s - b.length : 1 / 0)), u += v, n = x + b, ("<" === o ? u + n + k : ">" === o ? k + u + n : "^" === o ? k.substring(0, S >>= 1) + u + n + k.substring(S) : u + (M ? n : k + n)) + e; }; }; }
    function Ut(n) { return n + ""; }
    function jt() { this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]); }
    function Ft(n, t, e) { function r(t) { var e = n(t), r = i(e, 1); return r - t > t - e ? e : r; } function u(e) { return t(e = n(new cc(e - 1)), 1), e; } function i(n, e) { return t(n = new cc(+n), e), n; } function o(n, r, i) { var o = u(n), a = []; if (i > 1)
        for (; r > o;)
            e(o) % i || a.push(new Date(+o)), t(o, 1);
    else
        for (; r > o;)
            a.push(new Date(+o)), t(o, 1); return a; } function a(n, t, e) { try {
        cc = jt;
        var r = new jt;
        return r._ = n, o(r, t, e);
    }
    finally {
        cc = Date;
    } } n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o; var c = n.utc = Ht(n); return c.floor = c, c.round = Ht(r), c.ceil = Ht(u), c.offset = Ht(i), c.range = a, n; }
    function Ht(n) { return function (t, e) { try {
        cc = jt;
        var r = new jt;
        return r._ = t, n(r, e)._;
    }
    finally {
        cc = Date;
    } }; }
    function Ot(n) { function t(n) { function t(t) { for (var e, u, i, o = [], a = -1, c = 0; ++a < r;)
        37 === n.charCodeAt(a) && (o.push(n.slice(c, a)), null != (u = sc[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = N[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), o.push(e), c = a + 1); return o.push(n.slice(c, a)), o.join(""); } var r = n.length; return t.parse = function (t) { var r = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null }, u = e(r, n, t, 0); if (u != t.length)
        return null; "p" in r && (r.H = r.H % 12 + 12 * r.p); var i = null != r.Z && cc !== jt, o = new (i ? jt : cc); return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), i ? o._ : o; }, t.toString = function () { return n; }, t; } function e(n, t, e, r) { for (var u, i, o, a = 0, c = t.length, l = e.length; c > a;) {
        if (r >= l)
            return -1;
        if (u = t.charCodeAt(a++), 37 === u) {
            if (o = t.charAt(a++), i = C[o in sc ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0)
                return -1;
        }
        else if (u != e.charCodeAt(r++))
            return -1;
    } return r; } function r(n, t, e) { _.lastIndex = 0; var r = _.exec(t.slice(e)); return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1; } function u(n, t, e) { x.lastIndex = 0; var r = x.exec(t.slice(e)); return r ? (n.w = b.get(r[0].toLowerCase()), e + r[0].length) : -1; } function i(n, t, e) { E.lastIndex = 0; var r = E.exec(t.slice(e)); return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1; } function o(n, t, e) { S.lastIndex = 0; var r = S.exec(t.slice(e)); return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1; } function a(n, t, r) { return e(n, N.c.toString(), t, r); } function c(n, t, r) { return e(n, N.x.toString(), t, r); } function l(n, t, r) { return e(n, N.X.toString(), t, r); } function s(n, t, e) { var r = M.get(t.slice(e, e += 2).toLowerCase()); return null == r ? -1 : (n.p = r, e); } var f = n.dateTime, h = n.date, g = n.time, p = n.periods, v = n.days, d = n.shortDays, m = n.months, y = n.shortMonths; t.utc = function (n) { function e(n) { try {
        cc = jt;
        var t = new cc;
        return t._ = n, r(t);
    }
    finally {
        cc = Date;
    } } var r = t(n); return e.parse = function (n) { try {
        cc = jt;
        var t = r.parse(n);
        return t && t._;
    }
    finally {
        cc = Date;
    } }, e.toString = r.toString, e; }, t.multi = t.utc.multi = ae; var M = ta.map(), x = Yt(v), b = Zt(v), _ = Yt(d), w = Zt(d), S = Yt(m), k = Zt(m), E = Yt(y), A = Zt(y); p.forEach(function (n, t) { M.set(n.toLowerCase(), t); }); var N = { a: function (n) { return d[n.getDay()]; }, A: function (n) { return v[n.getDay()]; }, b: function (n) { return y[n.getMonth()]; }, B: function (n) { return m[n.getMonth()]; }, c: t(f), d: function (n, t) { return It(n.getDate(), t, 2); }, e: function (n, t) { return It(n.getDate(), t, 2); }, H: function (n, t) { return It(n.getHours(), t, 2); }, I: function (n, t) { return It(n.getHours() % 12 || 12, t, 2); }, j: function (n, t) { return It(1 + ac.dayOfYear(n), t, 3); }, L: function (n, t) { return It(n.getMilliseconds(), t, 3); }, m: function (n, t) { return It(n.getMonth() + 1, t, 2); }, M: function (n, t) { return It(n.getMinutes(), t, 2); }, p: function (n) { return p[+(n.getHours() >= 12)]; }, S: function (n, t) { return It(n.getSeconds(), t, 2); }, U: function (n, t) { return It(ac.sundayOfYear(n), t, 2); }, w: function (n) { return n.getDay(); }, W: function (n, t) { return It(ac.mondayOfYear(n), t, 2); }, x: t(h), X: t(g), y: function (n, t) { return It(n.getFullYear() % 100, t, 2); }, Y: function (n, t) { return It(n.getFullYear() % 1e4, t, 4); }, Z: ie, "%": function () { return "%"; } }, C = { a: r, A: u, b: i, B: o, c: a, d: Qt, e: Qt, H: te, I: te, j: ne, L: ue, m: Kt, M: ee, p: s, S: re, U: Xt, w: Vt, W: $t, x: c, X: l, y: Wt, Y: Bt, Z: Jt, "%": oe }; return t; }
    function It(n, t, e) { var r = 0 > n ? "-" : "", u = (r ? -n : n) + "", i = u.length; return r + (e > i ? new Array(e - i + 1).join(t) + u : u); }
    function Yt(n) { return new RegExp("^(?:" + n.map(ta.requote).join("|") + ")", "i"); }
    function Zt(n) { for (var t = new l, e = -1, r = n.length; ++e < r;)
        t.set(n[e].toLowerCase(), e); return t; }
    function Vt(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 1)); return r ? (n.w = +r[0], e + r[0].length) : -1; }
    function Xt(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e)); return r ? (n.U = +r[0], e + r[0].length) : -1; }
    function $t(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e)); return r ? (n.W = +r[0], e + r[0].length) : -1; }
    function Bt(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 4)); return r ? (n.y = +r[0], e + r[0].length) : -1; }
    function Wt(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 2)); return r ? (n.y = Gt(+r[0]), e + r[0].length) : -1; }
    function Jt(n, t, e) { return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1; }
    function Gt(n) { return n + (n > 68 ? 1900 : 2e3); }
    function Kt(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 2)); return r ? (n.m = r[0] - 1, e + r[0].length) : -1; }
    function Qt(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 2)); return r ? (n.d = +r[0], e + r[0].length) : -1; }
    function ne(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 3)); return r ? (n.j = +r[0], e + r[0].length) : -1; }
    function te(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 2)); return r ? (n.H = +r[0], e + r[0].length) : -1; }
    function ee(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 2)); return r ? (n.M = +r[0], e + r[0].length) : -1; }
    function re(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 2)); return r ? (n.S = +r[0], e + r[0].length) : -1; }
    function ue(n, t, e) { fc.lastIndex = 0; var r = fc.exec(t.slice(e, e + 3)); return r ? (n.L = +r[0], e + r[0].length) : -1; }
    function ie(n) { var t = n.getTimezoneOffset(), e = t > 0 ? "-" : "+", r = ga(t) / 60 | 0, u = ga(t) % 60; return e + It(r, "0", 2) + It(u, "0", 2); }
    function oe(n, t, e) { hc.lastIndex = 0; var r = hc.exec(t.slice(e, e + 1)); return r ? e + r[0].length : -1; }
    function ae(n) { for (var t = n.length, e = -1; ++e < t;)
        n[e][0] = this(n[e][0]); return function (t) { for (var e = 0, r = n[e]; !r[1](t);)
        r = n[++e]; return r[0](t); }; }
    function ce() { }
    function le(n, t, e) { var r = e.s = n + t, u = r - n, i = r - u; e.t = n - i + (t - u); }
    function se(n, t) { n && dc.hasOwnProperty(n.type) && dc[n.type](n, t); }
    function fe(n, t, e) { var r, u = -1, i = n.length - e; for (t.lineStart(); ++u < i;)
        r = n[u], t.point(r[0], r[1], r[2]); t.lineEnd(); }
    function he(n, t) { var e = -1, r = n.length; for (t.polygonStart(); ++e < r;)
        fe(n[e], t, 1); t.polygonEnd(); }
    function ge() { function n(n, t) { n *= Da, t = t * Da / 2 + qa / 4; var e = n - r, o = e >= 0 ? 1 : -1, a = o * e, c = Math.cos(t), l = Math.sin(t), s = i * l, f = u * c + s * Math.cos(a), h = s * o * Math.sin(a); yc.add(Math.atan2(h, f)), r = n, u = c, i = l; } var t, e, r, u, i; Mc.point = function (o, a) { Mc.point = n, r = (t = o) * Da, u = Math.cos(a = (e = a) * Da / 2 + qa / 4), i = Math.sin(a); }, Mc.lineEnd = function () { n(t, e); }; }
    function pe(n) { var t = n[0], e = n[1], r = Math.cos(e); return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]; }
    function ve(n, t) { return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]; }
    function de(n, t) { return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]; }
    function me(n, t) { n[0] += t[0], n[1] += t[1], n[2] += t[2]; }
    function ye(n, t) { return [n[0] * t, n[1] * t, n[2] * t]; }
    function Me(n) { var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]); n[0] /= t, n[1] /= t, n[2] /= t; }
    function xe(n) { return [Math.atan2(n[1], n[0]), tt(n[2])]; }
    function be(n, t) { return ga(n[0] - t[0]) < Ca && ga(n[1] - t[1]) < Ca; }
    function _e(n, t) { n *= Da; var e = Math.cos(t *= Da); we(e * Math.cos(n), e * Math.sin(n), Math.sin(t)); }
    function we(n, t, e) { ++xc, _c += (n - _c) / xc, wc += (t - wc) / xc, Sc += (e - Sc) / xc; }
    function Se() { function n(n, u) { n *= Da; var i = Math.cos(u *= Da), o = i * Math.cos(n), a = i * Math.sin(n), c = Math.sin(u), l = Math.atan2(Math.sqrt((l = e * c - r * a) * l + (l = r * o - t * c) * l + (l = t * a - e * o) * l), t * o + e * a + r * c); bc += l, kc += l * (t + (t = o)), Ec += l * (e + (e = a)), Ac += l * (r + (r = c)), we(t, e, r); } var t, e, r; qc.point = function (u, i) { u *= Da; var o = Math.cos(i *= Da); t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), qc.point = n, we(t, e, r); }; }
    function ke() { qc.point = _e; }
    function Ee() { function n(n, t) { n *= Da; var e = Math.cos(t *= Da), o = e * Math.cos(n), a = e * Math.sin(n), c = Math.sin(t), l = u * c - i * a, s = i * o - r * c, f = r * a - u * o, h = Math.sqrt(l * l + s * s + f * f), g = r * o + u * a + i * c, p = h && -nt(g) / h, v = Math.atan2(h, g); Nc += p * l, Cc += p * s, zc += p * f, bc += v, kc += v * (r + (r = o)), Ec += v * (u + (u = a)), Ac += v * (i + (i = c)), we(r, u, i); } var t, e, r, u, i; qc.point = function (o, a) { t = o, e = a, qc.point = n, o *= Da; var c = Math.cos(a *= Da); r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), we(r, u, i); }, qc.lineEnd = function () { n(t, e), qc.lineEnd = ke, qc.point = _e; }; }
    function Ae(n, t) { function e(e, r) { return e = n(e, r), t(e[0], e[1]); } return n.invert && t.invert && (e.invert = function (e, r) { return e = t.invert(e, r), e && n.invert(e[0], e[1]); }), e; }
    function Ne() { return !0; }
    function Ce(n, t, e, r, u) { var i = [], o = []; if (n.forEach(function (n) { if (!((t = n.length - 1) <= 0)) {
        var t, e = n[0], r = n[t];
        if (be(e, r)) {
            u.lineStart();
            for (var a = 0; t > a; ++a)
                u.point((e = n[a])[0], e[1]);
            return void u.lineEnd();
        }
        var c = new qe(e, n, null, !0), l = new qe(e, null, c, !1);
        c.o = l, i.push(c), o.push(l), c = new qe(r, n, null, !1), l = new qe(r, null, c, !0), c.o = l, i.push(c), o.push(l);
    } }), o.sort(t), ze(i), ze(o), i.length) {
        for (var a = 0, c = e, l = o.length; l > a; ++a)
            o[a].e = c = !c;
        for (var s, f, h = i[0];;) {
            for (var g = h, p = !0; g.v;)
                if ((g = g.n) === h)
                    return;
            s = g.z, u.lineStart();
            do {
                if (g.v = g.o.v = !0, g.e) {
                    if (p)
                        for (var a = 0, l = s.length; l > a; ++a)
                            u.point((f = s[a])[0], f[1]);
                    else
                        r(g.x, g.n.x, 1, u);
                    g = g.n;
                }
                else {
                    if (p) {
                        s = g.p.z;
                        for (var a = s.length - 1; a >= 0; --a)
                            u.point((f = s[a])[0], f[1]);
                    }
                    else
                        r(g.x, g.p.x, -1, u);
                    g = g.p;
                }
                g = g.o, s = g.z, p = !p;
            } while (!g.v);
            u.lineEnd();
        }
    } }
    function ze(n) { if (t = n.length) {
        for (var t, e, r = 0, u = n[0]; ++r < t;)
            u.n = e = n[r], e.p = u, u = e;
        u.n = e = n[0], e.p = u;
    } }
    function qe(n, t, e, r) { this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null; }
    function Le(n, t, e, r) { return function (u, i) { function o(t, e) { var r = u(t, e); n(t = r[0], e = r[1]) && i.point(t, e); } function a(n, t) { var e = u(n, t); d.point(e[0], e[1]); } function c() { y.point = a, d.lineStart(); } function l() { y.point = o, d.lineEnd(); } function s(n, t) { v.push([n, t]); var e = u(n, t); x.point(e[0], e[1]); } function f() { x.lineStart(), v = []; } function h() { s(v[0][0], v[0][1]), x.lineEnd(); var n, t = x.clean(), e = M.buffer(), r = e.length; if (v.pop(), p.push(v), v = null, r)
        if (1 & t) {
            n = e[0];
            var u, r = n.length - 1, o = -1;
            if (r > 0) {
                for (b || (i.polygonStart(), b = !0), i.lineStart(); ++o < r;)
                    i.point((u = n[o])[0], u[1]);
                i.lineEnd();
            }
        }
        else
            r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Te)); } var g, p, v, d = t(i), m = u.invert(r[0], r[1]), y = { point: o, lineStart: c, lineEnd: l, polygonStart: function () { y.point = s, y.lineStart = f, y.lineEnd = h, g = [], p = []; }, polygonEnd: function () { y.point = o, y.lineStart = c, y.lineEnd = l, g = ta.merge(g); var n = Fe(m, p); g.length ? (b || (i.polygonStart(), b = !0), Ce(g, De, n, e, i)) : n && (b || (i.polygonStart(), b = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), b && (i.polygonEnd(), b = !1), g = p = null; }, sphere: function () { i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd(); } }, M = Re(), x = t(M), b = !1; return y; }; }
    function Te(n) { return n.length > 1; }
    function Re() { var n, t = []; return { lineStart: function () { t.push(n = []); }, point: function (t, e) { n.push([t, e]); }, lineEnd: b, buffer: function () { var e = t; return t = [], n = null, e; }, rejoin: function () { t.length > 1 && t.push(t.pop().concat(t.shift())); } }; }
    function De(n, t) { return ((n = n.x)[0] < 0 ? n[1] - Ra - Ca : Ra - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Ra - Ca : Ra - t[1]); }
    function Pe(n) { var t, e = 0 / 0, r = 0 / 0, u = 0 / 0; return { lineStart: function () { n.lineStart(), t = 1; }, point: function (i, o) { var a = i > 0 ? qa : -qa, c = ga(i - e); ga(c - qa) < Ca ? (n.point(e, r = (r + o) / 2 > 0 ? Ra : -Ra), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= qa && (ga(e - u) < Ca && (e -= u * Ca), ga(i - a) < Ca && (i -= a * Ca), r = Ue(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a; }, lineEnd: function () { n.lineEnd(), e = r = 0 / 0; }, clean: function () { return 2 - t; } }; }
    function Ue(n, t, e, r) { var u, i, o = Math.sin(n - e); return ga(o) > Ca ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2; }
    function je(n, t, e, r) { var u; if (null == n)
        u = e * Ra, r.point(-qa, u), r.point(0, u), r.point(qa, u), r.point(qa, 0), r.point(qa, -u), r.point(0, -u), r.point(-qa, -u), r.point(-qa, 0), r.point(-qa, u);
    else if (ga(n[0] - t[0]) > Ca) {
        var i = n[0] < t[0] ? qa : -qa;
        u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u);
    }
    else
        r.point(t[0], t[1]); }
    function Fe(n, t) { var e = n[0], r = n[1], u = [Math.sin(e), -Math.cos(e), 0], i = 0, o = 0; yc.reset(); for (var a = 0, c = t.length; c > a; ++a) {
        var l = t[a], s = l.length;
        if (s)
            for (var f = l[0], h = f[0], g = f[1] / 2 + qa / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
                d === s && (d = 0), n = l[d];
                var m = n[0], y = n[1] / 2 + qa / 4, M = Math.sin(y), x = Math.cos(y), b = m - h, _ = b >= 0 ? 1 : -1, w = _ * b, S = w > qa, k = p * M;
                if (yc.add(Math.atan2(k * _ * Math.sin(w), v * x + k * Math.cos(w))), i += S ? b + _ * La : b, S ^ h >= e ^ m >= e) {
                    var E = de(pe(f), pe(n));
                    Me(E);
                    var A = de(u, E);
                    Me(A);
                    var N = (S ^ b >= 0 ? -1 : 1) * tt(A[2]);
                    (r > N || r === N && (E[0] || E[1])) && (o += S ^ b >= 0 ? 1 : -1);
                }
                if (!d++)
                    break;
                h = m, p = M, v = x, f = n;
            }
    } return (-Ca > i || Ca > i && 0 > yc) ^ 1 & o; }
    function He(n) { function t(n, t) { return Math.cos(n) * Math.cos(t) > i; } function e(n) { var e, i, c, l, s; return { lineStart: function () { l = c = !1, s = 1; }, point: function (f, h) { var g, p = [f, h], v = t(f, h), d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? qa : -qa), h) : 0; if (!e && (l = c = v) && n.lineStart(), v !== c && (g = r(e, p), (be(e, g) || be(p, g)) && (p[0] += Ca, p[1] += Ca, v = t(p[0], p[1]))), v !== c)
            s = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
        else if (a && e && o ^ v) {
            var m;
            d & i || !(m = r(p, e, !0)) || (s = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])));
        } !v || e && be(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d; }, lineEnd: function () { c && n.lineEnd(), e = null; }, clean: function () { return s | (l && c) << 1; } }; } function r(n, t, e) { var r = pe(n), u = pe(t), o = [1, 0, 0], a = de(r, u), c = ve(a, a), l = a[0], s = c - l * l; if (!s)
        return !e && n; var f = i * c / s, h = -i * l / s, g = de(o, a), p = ye(o, f), v = ye(a, h); me(p, v); var d = g, m = ve(p, d), y = ve(d, d), M = m * m - y * (ve(p, p) - 1); if (!(0 > M)) {
        var x = Math.sqrt(M), b = ye(d, (-m - x) / y);
        if (me(b, p), b = xe(b), !e)
            return b;
        var _, w = n[0], S = t[0], k = n[1], E = t[1];
        w > S && (_ = w, w = S, S = _);
        var A = S - w, N = ga(A - qa) < Ca, C = N || Ca > A;
        if (!N && k > E && (_ = k, k = E, E = _), C ? N ? k + E > 0 ^ b[1] < (ga(b[0] - w) < Ca ? k : E) : k <= b[1] && b[1] <= E : A > qa ^ (w <= b[0] && b[0] <= S)) {
            var z = ye(d, (-m + x) / y);
            return me(z, p), [b, xe(z)];
        }
    } } function u(t, e) { var r = o ? n : qa - n, u = 0; return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u; } var i = Math.cos(n), o = i > 0, a = ga(i) > Ca, c = gr(n, 6 * Da); return Le(t, e, c, o ? [0, -n] : [-qa, n - qa]); }
    function Oe(n, t, e, r) { return function (u) { var i, o = u.a, a = u.b, c = o.x, l = o.y, s = a.x, f = a.y, h = 0, g = 1, p = s - c, v = f - l; if (i = n - c, p || !(i > 0)) {
        if (i /= p, 0 > p) {
            if (h > i)
                return;
            g > i && (g = i);
        }
        else if (p > 0) {
            if (i > g)
                return;
            i > h && (h = i);
        }
        if (i = e - c, p || !(0 > i)) {
            if (i /= p, 0 > p) {
                if (i > g)
                    return;
                i > h && (h = i);
            }
            else if (p > 0) {
                if (h > i)
                    return;
                g > i && (g = i);
            }
            if (i = t - l, v || !(i > 0)) {
                if (i /= v, 0 > v) {
                    if (h > i)
                        return;
                    g > i && (g = i);
                }
                else if (v > 0) {
                    if (i > g)
                        return;
                    i > h && (h = i);
                }
                if (i = r - l, v || !(0 > i)) {
                    if (i /= v, 0 > v) {
                        if (i > g)
                            return;
                        i > h && (h = i);
                    }
                    else if (v > 0) {
                        if (h > i)
                            return;
                        g > i && (g = i);
                    }
                    return h > 0 && (u.a = { x: c + h * p, y: l + h * v }), 1 > g && (u.b = { x: c + g * p, y: l + g * v }), u;
                }
            }
        }
    } }; }
    function Ie(n, t, e, r) { function u(r, u) { return ga(r[0] - n) < Ca ? u > 0 ? 0 : 3 : ga(r[0] - e) < Ca ? u > 0 ? 2 : 1 : ga(r[1] - t) < Ca ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2; } function i(n, t) { return o(n.x, t.x); } function o(n, t) { var e = u(n, 1), r = u(t, 1); return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]; } return function (a) { function c(n) { for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)
        for (var i, o = 1, a = d[u], c = a.length, l = a[0]; c > o; ++o)
            i = a[o], l[1] <= r ? i[1] > r && Q(l, i, n) > 0 && ++t : i[1] <= r && Q(l, i, n) < 0 && --t, l = i; return 0 !== t; } function l(i, a, c, l) { var s = 0, f = 0; if (null == i || (s = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
        do
            l.point(0 === s || 3 === s ? n : e, s > 1 ? r : t);
        while ((s = (s + c + 4) % 4) !== f);
    }
    else
        l.point(a[0], a[1]); } function s(u, i) { return u >= n && e >= u && i >= t && r >= i; } function f(n, t) { s(n, t) && a.point(n, t); } function h() { C.point = p, d && d.push(m = []), S = !0, w = !1, b = _ = 0 / 0; } function g() { v && (p(y, M), x && w && A.rejoin(), v.push(A.buffer())), C.point = f, w && a.lineEnd(); } function p(n, t) { n = Math.max(-Tc, Math.min(Tc, n)), t = Math.max(-Tc, Math.min(Tc, t)); var e = s(n, t); if (d && m.push([n, t]), S)
        y = n, M = t, x = e, S = !1, e && (a.lineStart(), a.point(n, t));
    else if (e && w)
        a.point(n, t);
    else {
        var r = { a: { x: b, y: _ }, b: { x: n, y: t } };
        N(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1);
    } b = n, _ = t, w = e; } var v, d, m, y, M, x, b, _, w, S, k, E = a, A = Re(), N = Oe(n, t, e, r), C = { point: f, lineStart: h, lineEnd: g, polygonStart: function () { a = A, v = [], d = [], k = !0; }, polygonEnd: function () { a = E, v = ta.merge(v); var t = c([n, r]), e = k && t, u = v.length; (e || u) && (a.polygonStart(), e && (a.lineStart(), l(null, null, 1, a), a.lineEnd()), u && Ce(v, i, t, l, a), a.polygonEnd()), v = d = m = null; } }; return C; }; }
    function Ye(n) { var t = 0, e = qa / 3, r = ir(n), u = r(t, e); return u.parallels = function (n) { return arguments.length ? r(t = n[0] * qa / 180, e = n[1] * qa / 180) : [t / qa * 180, e / qa * 180]; }, u; }
    function Ze(n, t) { function e(n, t) { var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u; return [e * Math.sin(n *= u), o - e * Math.cos(n)]; } var r = Math.sin(n), u = (r + Math.sin(t)) / 2, i = 1 + r * (2 * u - r), o = Math.sqrt(i) / u; return e.invert = function (n, t) { var e = o - t; return [Math.atan2(n, e) / u, tt((i - (n * n + e * e) * u * u) / (2 * u))]; }, e; }
    function Ve() { function n(n, t) { Dc += u * n - r * t, r = n, u = t; } var t, e, r, u; Hc.point = function (i, o) { Hc.point = n, t = r = i, e = u = o; }, Hc.lineEnd = function () { n(t, e); }; }
    function Xe(n, t) { Pc > n && (Pc = n), n > jc && (jc = n), Uc > t && (Uc = t), t > Fc && (Fc = t); }
    function $e() { function n(n, t) { o.push("M", n, ",", t, i); } function t(n, t) { o.push("M", n, ",", t), a.point = e; } function e(n, t) { o.push("L", n, ",", t); } function r() { a.point = n; } function u() { o.push("Z"); } var i = Be(4.5), o = [], a = { point: n, lineStart: function () { a.point = t; }, lineEnd: r, polygonStart: function () { a.lineEnd = u; }, polygonEnd: function () { a.lineEnd = r, a.point = n; }, pointRadius: function (n) { return i = Be(n), a; }, result: function () { if (o.length) {
            var n = o.join("");
            return o = [], n;
        } } }; return a; }
    function Be(n) { return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"; }
    function We(n, t) { _c += n, wc += t, ++Sc; }
    function Je() { function n(n, r) { var u = n - t, i = r - e, o = Math.sqrt(u * u + i * i); kc += o * (t + n) / 2, Ec += o * (e + r) / 2, Ac += o, We(t = n, e = r); } var t, e; Ic.point = function (r, u) { Ic.point = n, We(t = r, e = u); }; }
    function Ge() { Ic.point = We; }
    function Ke() { function n(n, t) { var e = n - r, i = t - u, o = Math.sqrt(e * e + i * i); kc += o * (r + n) / 2, Ec += o * (u + t) / 2, Ac += o, o = u * n - r * t, Nc += o * (r + n), Cc += o * (u + t), zc += 3 * o, We(r = n, u = t); } var t, e, r, u; Ic.point = function (i, o) { Ic.point = n, We(t = r = i, e = u = o); }, Ic.lineEnd = function () { n(t, e); }; }
    function Qe(n) { function t(t, e) { n.moveTo(t + o, e), n.arc(t, e, o, 0, La); } function e(t, e) { n.moveTo(t, e), a.point = r; } function r(t, e) { n.lineTo(t, e); } function u() { a.point = t; } function i() { n.closePath(); } var o = 4.5, a = { point: t, lineStart: function () { a.point = e; }, lineEnd: u, polygonStart: function () { a.lineEnd = i; }, polygonEnd: function () { a.lineEnd = u, a.point = t; }, pointRadius: function (n) { return o = n, a; }, result: b }; return a; }
    function nr(n) {
        function t(n) { return (a ? r : e)(n); }
        function e(t) { return rr(t, function (e, r) { e = n(e, r), t.point(e[0], e[1]); }); }
        function r(t) {
            function e(e, r) { e = n(e, r), t.point(e[0], e[1]); }
            function r() { M = 0 / 0, S.point = i, t.lineStart(); }
            function i(e, r) { var i = pe([e, r]), o = n(e, r); u(M, x, y, b, _, w, M = o[0], x = o[1], y = e, b = i[0], _ = i[1], w = i[2], a, t), t.point(M, x); }
            function o() { S.point = e, t.lineEnd(); }
            function c() { r(), S.point = l, S.lineEnd = s; }
            function l(n, t) { i(f = n, h = t), g = M, p = x, v = b, d = _, m = w, S.point = i; }
            function s() { u(M, x, y, b, _, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o(); }
            var f, h, g, p, v, d, m, y, M, x, b, _, w, S = { point: e, lineStart: r, lineEnd: o, polygonStart: function () {
                    t.polygonStart(), S.lineStart = c;
                }, polygonEnd: function () { t.polygonEnd(), S.lineStart = r; } };
            return S;
        }
        function u(t, e, r, a, c, l, s, f, h, g, p, v, d, m) { var y = s - t, M = f - e, x = y * y + M * M; if (x > 4 * i && d--) {
            var b = a + g, _ = c + p, w = l + v, S = Math.sqrt(b * b + _ * _ + w * w), k = Math.asin(w /= S), E = ga(ga(w) - 1) < Ca || ga(r - h) < Ca ? (r + h) / 2 : Math.atan2(_, b), A = n(E, k), N = A[0], C = A[1], z = N - t, q = C - e, L = M * z - y * q;
            (L * L / x > i || ga((y * z + M * q) / x - .5) > .3 || o > a * g + c * p + l * v) && (u(t, e, r, a, c, l, N, C, E, b /= S, _ /= S, w, d, m), m.point(N, C), u(N, C, E, b, _, w, s, f, h, g, p, v, d, m));
        } }
        var i = .5, o = Math.cos(30 * Da), a = 16;
        return t.precision = function (n) { return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i); }, t;
    }
    function tr(n) { var t = nr(function (t, e) { return n([t * Pa, e * Pa]); }); return function (n) { return or(t(n)); }; }
    function er(n) { this.stream = n; }
    function rr(n, t) { return { point: t, sphere: function () { n.sphere(); }, lineStart: function () { n.lineStart(); }, lineEnd: function () { n.lineEnd(); }, polygonStart: function () { n.polygonStart(); }, polygonEnd: function () { n.polygonEnd(); } }; }
    function ur(n) { return ir(function () { return n; })(); }
    function ir(n) { function t(n) { return n = a(n[0] * Da, n[1] * Da), [n[0] * h + c, l - n[1] * h]; } function e(n) { return n = a.invert((n[0] - c) / h, (l - n[1]) / h), n && [n[0] * Pa, n[1] * Pa]; } function r() { a = Ae(o = lr(m, M, x), i); var n = i(v, d); return c = g - n[0] * h, l = p + n[1] * h, u(); } function u() { return s && (s.valid = !1, s = null), t; } var i, o, a, c, l, s, f = nr(function (n, t) { return n = i(n, t), [n[0] * h + c, l - n[1] * h]; }), h = 150, g = 480, p = 250, v = 0, d = 0, m = 0, M = 0, x = 0, b = Lc, _ = y, w = null, S = null; return t.stream = function (n) { return s && (s.valid = !1), s = or(b(o, f(_(n)))), s.valid = !0, s; }, t.clipAngle = function (n) { return arguments.length ? (b = null == n ? (w = n, Lc) : He((w = +n) * Da), u()) : w; }, t.clipExtent = function (n) { return arguments.length ? (S = n, _ = n ? Ie(n[0][0], n[0][1], n[1][0], n[1][1]) : y, u()) : S; }, t.scale = function (n) { return arguments.length ? (h = +n, r()) : h; }, t.translate = function (n) { return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]; }, t.center = function (n) { return arguments.length ? (v = n[0] % 360 * Da, d = n[1] % 360 * Da, r()) : [v * Pa, d * Pa]; }, t.rotate = function (n) { return arguments.length ? (m = n[0] % 360 * Da, M = n[1] % 360 * Da, x = n.length > 2 ? n[2] % 360 * Da : 0, r()) : [m * Pa, M * Pa, x * Pa]; }, ta.rebind(t, f, "precision"), function () { return i = n.apply(this, arguments), t.invert = i.invert && e, r(); }; }
    function or(n) { return rr(n, function (t, e) { n.point(t * Da, e * Da); }); }
    function ar(n, t) { return [n, t]; }
    function cr(n, t) { return [n > qa ? n - La : -qa > n ? n + La : n, t]; }
    function lr(n, t, e) { return n ? t || e ? Ae(fr(n), hr(t, e)) : fr(n) : t || e ? hr(t, e) : cr; }
    function sr(n) { return function (t, e) { return t += n, [t > qa ? t - La : -qa > t ? t + La : t, e]; }; }
    function fr(n) { var t = sr(n); return t.invert = sr(-n), t; }
    function hr(n, t) { function e(n, t) { var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, l = Math.sin(t), s = l * r + a * u; return [Math.atan2(c * i - s * o, a * r - l * u), tt(s * i + c * o)]; } var r = Math.cos(n), u = Math.sin(n), i = Math.cos(t), o = Math.sin(t); return e.invert = function (n, t) { var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, l = Math.sin(t), s = l * i - c * o; return [Math.atan2(c * i + l * o, a * r + s * u), tt(s * r - a * u)]; }, e; }
    function gr(n, t) { var e = Math.cos(n), r = Math.sin(n); return function (u, i, o, a) { var c = o * t; null != u ? (u = pr(e, u), i = pr(e, i), (o > 0 ? i > u : u > i) && (u += o * La)) : (u = n + o * La, i = n - .5 * c); for (var l, s = u; o > 0 ? s > i : i > s; s -= c)
        a.point((l = xe([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1]); }; }
    function pr(n, t) { var e = pe(t); e[0] -= n, Me(e); var r = nt(-e[1]); return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Ca) % (2 * Math.PI); }
    function vr(n, t, e) { var r = ta.range(n, t - Ca, e).concat(t); return function (n) { return r.map(function (t) { return [n, t]; }); }; }
    function dr(n, t, e) { var r = ta.range(n, t - Ca, e).concat(t); return function (n) { return r.map(function (t) { return [t, n]; }); }; }
    function mr(n) { return n.source; }
    function yr(n) { return n.target; }
    function Mr(n, t, e, r) { var u = Math.cos(t), i = Math.sin(t), o = Math.cos(r), a = Math.sin(r), c = u * Math.cos(n), l = u * Math.sin(n), s = o * Math.cos(e), f = o * Math.sin(e), h = 2 * Math.asin(Math.sqrt(it(r - t) + u * o * it(e - n))), g = 1 / Math.sin(h), p = h ? function (n) { var t = Math.sin(n *= h) * g, e = Math.sin(h - n) * g, r = e * c + t * s, u = e * l + t * f, o = e * i + t * a; return [Math.atan2(u, r) * Pa, Math.atan2(o, Math.sqrt(r * r + u * u)) * Pa]; } : function () { return [n * Pa, t * Pa]; }; return p.distance = h, p; }
    function xr() { function n(n, u) { var i = Math.sin(u *= Da), o = Math.cos(u), a = ga((n *= Da) - t), c = Math.cos(a); Yc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o; } var t, e, r; Zc.point = function (u, i) { t = u * Da, e = Math.sin(i *= Da), r = Math.cos(i), Zc.point = n; }, Zc.lineEnd = function () { Zc.point = Zc.lineEnd = b; }; }
    function br(n, t) { function e(t, e) { var r = Math.cos(t), u = Math.cos(e), i = n(r * u); return [i * u * Math.sin(t), i * Math.sin(e)]; } return e.invert = function (n, e) { var r = Math.sqrt(n * n + e * e), u = t(r), i = Math.sin(u), o = Math.cos(u); return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]; }, e; }
    function _r(n, t) { function e(n, t) { o > 0 ? -Ra + Ca > t && (t = -Ra + Ca) : t > Ra - Ca && (t = Ra - Ca); var e = o / Math.pow(u(t), i); return [e * Math.sin(i * n), o - e * Math.cos(i * n)]; } var r = Math.cos(n), u = function (n) { return Math.tan(qa / 4 + n / 2); }, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)), o = r * Math.pow(u(n), i) / i; return i ? (e.invert = function (n, t) { var e = o - t, r = K(i) * Math.sqrt(n * n + e * e); return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Ra]; }, e) : Sr; }
    function wr(n, t) { function e(n, t) { var e = i - t; return [e * Math.sin(u * n), i - e * Math.cos(u * n)]; } var r = Math.cos(n), u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n), i = r / u + n; return ga(u) < Ca ? ar : (e.invert = function (n, t) { var e = i - t; return [Math.atan2(n, e) / u, i - K(u) * Math.sqrt(n * n + e * e)]; }, e); }
    function Sr(n, t) { return [n, Math.log(Math.tan(qa / 4 + t / 2))]; }
    function kr(n) { var t, e = ur(n), r = e.scale, u = e.translate, i = e.clipExtent; return e.scale = function () { var n = r.apply(e, arguments); return n === e ? t ? e.clipExtent(null) : e : n; }, e.translate = function () { var n = u.apply(e, arguments); return n === e ? t ? e.clipExtent(null) : e : n; }, e.clipExtent = function (n) { var o = i.apply(e, arguments); if (o === e) {
        if (t = null == n) {
            var a = qa * r(), c = u();
            i([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]]);
        }
    }
    else
        t && (o = null); return o; }, e.clipExtent(null); }
    function Er(n, t) { return [Math.log(Math.tan(qa / 4 + t / 2)), -n]; }
    function Ar(n) { return n[0]; }
    function Nr(n) { return n[1]; }
    function Cr(n) { for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
        for (; r > 1 && Q(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;)
            --r;
        e[r++] = u;
    } return e.slice(0, r); }
    function zr(n, t) { return n[0] - t[0] || n[1] - t[1]; }
    function qr(n, t, e) { return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]); }
    function Lr(n, t, e, r) { var u = n[0], i = e[0], o = t[0] - u, a = r[0] - i, c = n[1], l = e[1], s = t[1] - c, f = r[1] - l, h = (a * (c - l) - f * (u - i)) / (f * o - a * s); return [u + h * o, c + h * s]; }
    function Tr(n) { var t = n[0], e = n[n.length - 1]; return !(t[0] - e[0] || t[1] - e[1]); }
    function Rr() { tu(this), this.edge = this.site = this.circle = null; }
    function Dr(n) { var t = el.pop() || new Rr; return t.site = n, t; }
    function Pr(n) { Xr(n), Qc.remove(n), el.push(n), tu(n); }
    function Ur(n) { var t = n.circle, e = t.x, r = t.cy, u = { x: e, y: r }, i = n.P, o = n.N, a = [n]; Pr(n); for (var c = i; c.circle && ga(e - c.circle.x) < Ca && ga(r - c.circle.cy) < Ca;)
        i = c.P, a.unshift(c), Pr(c), c = i; a.unshift(c), Xr(c); for (var l = o; l.circle && ga(e - l.circle.x) < Ca && ga(r - l.circle.cy) < Ca;)
        o = l.N, a.push(l), Pr(l), l = o; a.push(l), Xr(l); var s, f = a.length; for (s = 1; f > s; ++s)
        l = a[s], c = a[s - 1], Kr(l.edge, c.site, l.site, u); c = a[0], l = a[f - 1], l.edge = Jr(c.site, l.site, null, u), Vr(c), Vr(l); }
    function jr(n) { for (var t, e, r, u, i = n.x, o = n.y, a = Qc._; a;)
        if (r = Fr(a, o) - i, r > Ca)
            a = a.L;
        else {
            if (u = i - Hr(a, o), !(u > Ca)) {
                r > -Ca ? (t = a.P, e = a) : u > -Ca ? (t = a, e = a.N) : t = e = a;
                break;
            }
            if (!a.R) {
                t = a;
                break;
            }
            a = a.R;
        } var c = Dr(n); if (Qc.insert(t, c), t || e) {
        if (t === e)
            return Xr(t), e = Dr(t.site), Qc.insert(c, e), c.edge = e.edge = Jr(t.site, c.site), Vr(t), void Vr(e);
        if (!e)
            return void (c.edge = Jr(t.site, c.site));
        Xr(t), Xr(e);
        var l = t.site, s = l.x, f = l.y, h = n.x - s, g = n.y - f, p = e.site, v = p.x - s, d = p.y - f, m = 2 * (h * d - g * v), y = h * h + g * g, M = v * v + d * d, x = { x: (d * y - g * M) / m + s, y: (h * M - v * y) / m + f };
        Kr(e.edge, l, p, x), c.edge = Jr(l, n, null, x), e.edge = Jr(n, p, null, x), Vr(t), Vr(e);
    } }
    function Fr(n, t) { var e = n.site, r = e.x, u = e.y, i = u - t; if (!i)
        return r; var o = n.P; if (!o)
        return -1 / 0; e = o.site; var a = e.x, c = e.y, l = c - t; if (!l)
        return a; var s = a - r, f = 1 / i - 1 / l, h = s / l; return f ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + u - i / 2))) / f + r : (r + a) / 2; }
    function Hr(n, t) { var e = n.N; if (e)
        return Fr(e, t); var r = n.site; return r.y === t ? r.x : 1 / 0; }
    function Or(n) { this.site = n, this.edges = []; }
    function Ir(n) { for (var t, e, r, u, i, o, a, c, l, s, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Kc, d = v.length; d--;)
        if (i = v[d], i && i.prepare())
            for (a = i.edges, c = a.length, o = 0; c > o;)
                s = a[o].end(), r = s.x, u = s.y, l = a[++o % c].start(), t = l.x, e = l.y, (ga(r - t) > Ca || ga(u - e) > Ca) && (a.splice(o, 0, new Qr(Gr(i.site, s, ga(r - f) < Ca && p - u > Ca ? { x: f, y: ga(t - f) < Ca ? e : p } : ga(u - p) < Ca && h - r > Ca ? { x: ga(e - p) < Ca ? t : h, y: p } : ga(r - h) < Ca && u - g > Ca ? { x: h, y: ga(t - h) < Ca ? e : g } : ga(u - g) < Ca && r - f > Ca ? { x: ga(e - g) < Ca ? t : f, y: g } : null), i.site, null)), ++c); }
    function Yr(n, t) { return t.angle - n.angle; }
    function Zr() { tu(this), this.x = this.y = this.arc = this.site = this.cy = null; }
    function Vr(n) { var t = n.P, e = n.N; if (t && e) {
        var r = t.site, u = n.site, i = e.site;
        if (r !== i) {
            var o = u.x, a = u.y, c = r.x - o, l = r.y - a, s = i.x - o, f = i.y - a, h = 2 * (c * f - l * s);
            if (!(h >= -za)) {
                var g = c * c + l * l, p = s * s + f * f, v = (f * g - l * p) / h, d = (c * p - s * g) / h, f = d + a, m = rl.pop() || new Zr;
                m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
                for (var y = null, M = tl._; M;)
                    if (m.y < M.y || m.y === M.y && m.x <= M.x) {
                        if (!M.L) {
                            y = M.P;
                            break;
                        }
                        M = M.L;
                    }
                    else {
                        if (!M.R) {
                            y = M;
                            break;
                        }
                        M = M.R;
                    }
                tl.insert(y, m), y || (nl = m);
            }
        }
    } }
    function Xr(n) { var t = n.circle; t && (t.P || (nl = t.N), tl.remove(t), rl.push(t), tu(t), n.circle = null); }
    function $r(n) { for (var t, e = Gc, r = Oe(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;)
        t = e[u], (!Br(t, n) || !r(t) || ga(t.a.x - t.b.x) < Ca && ga(t.a.y - t.b.y) < Ca) && (t.a = t.b = null, e.splice(u, 1)); }
    function Br(n, t) { var e = n.b; if (e)
        return !0; var r, u, i = n.a, o = t[0][0], a = t[1][0], c = t[0][1], l = t[1][1], s = n.l, f = n.r, h = s.x, g = s.y, p = f.x, v = f.y, d = (h + p) / 2, m = (g + v) / 2; if (v === g) {
        if (o > d || d >= a)
            return;
        if (h > p) {
            if (i) {
                if (i.y >= l)
                    return;
            }
            else
                i = { x: d, y: c };
            e = { x: d, y: l };
        }
        else {
            if (i) {
                if (i.y < c)
                    return;
            }
            else
                i = { x: d, y: l };
            e = { x: d, y: c };
        }
    }
    else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)
        if (h > p) {
            if (i) {
                if (i.y >= l)
                    return;
            }
            else
                i = { x: (c - u) / r, y: c };
            e = { x: (l - u) / r, y: l };
        }
        else {
            if (i) {
                if (i.y < c)
                    return;
            }
            else
                i = { x: (l - u) / r, y: l };
            e = { x: (c - u) / r, y: c };
        }
    else if (v > g) {
        if (i) {
            if (i.x >= a)
                return;
        }
        else
            i = { x: o, y: r * o + u };
        e = { x: a, y: r * a + u };
    }
    else {
        if (i) {
            if (i.x < o)
                return;
        }
        else
            i = { x: a, y: r * a + u };
        e = { x: o, y: r * o + u };
    } return n.a = i, n.b = e, !0; }
    function Wr(n, t) { this.l = n, this.r = t, this.a = this.b = null; }
    function Jr(n, t, e, r) { var u = new Wr(n, t); return Gc.push(u), e && Kr(u, n, t, e), r && Kr(u, t, n, r), Kc[n.i].edges.push(new Qr(u, n, t)), Kc[t.i].edges.push(new Qr(u, t, n)), u; }
    function Gr(n, t, e) { var r = new Wr(n, null); return r.a = t, r.b = e, Gc.push(r), r; }
    function Kr(n, t, e, r) { n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e); }
    function Qr(n, t, e) { var r = n.a, u = n.b; this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y); }
    function nu() { this._ = null; }
    function tu(n) { n.U = n.C = n.L = n.R = n.P = n.N = null; }
    function eu(n, t) { var e = t, r = t.R, u = e.U; u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e; }
    function ru(n, t) { var e = t, r = t.L, u = e.U; u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e; }
    function uu(n) { for (; n.L;)
        n = n.L; return n; }
    function iu(n, t) { var e, r, u, i = n.sort(ou).pop(); for (Gc = [], Kc = new Array(n.length), Qc = new nu, tl = new nu;;)
        if (u = nl, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))
            (i.x !== e || i.y !== r) && (Kc[i.i] = new Or(i), jr(i), e = i.x, r = i.y), i = n.pop();
        else {
            if (!u)
                break;
            Ur(u.arc);
        } t && ($r(t), Ir(t)); var o = { cells: Kc, edges: Gc }; return Qc = tl = Gc = Kc = null, o; }
    function ou(n, t) { return t.y - n.y || t.x - n.x; }
    function au(n, t, e) { return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y); }
    function cu(n) { return n.x; }
    function lu(n) { return n.y; }
    function su() { return { leaf: !0, nodes: [], point: null, x: null, y: null }; }
    function fu(n, t, e, r, u, i) { if (!n(t, e, r, u, i)) {
        var o = .5 * (e + u), a = .5 * (r + i), c = t.nodes;
        c[0] && fu(n, c[0], e, r, o, a), c[1] && fu(n, c[1], o, r, u, a), c[2] && fu(n, c[2], e, a, o, i), c[3] && fu(n, c[3], o, a, u, i);
    } }
    function hu(n, t, e, r, u, i, o) { var a, c = 1 / 0; return function l(n, s, f, h, g) { if (!(s > i || f > o || r > h || u > g)) {
        if (p = n.point) {
            var p, v = t - n.x, d = e - n.y, m = v * v + d * d;
            if (c > m) {
                var y = Math.sqrt(c = m);
                r = t - y, u = e - y, i = t + y, o = e + y, a = p;
            }
        }
        for (var M = n.nodes, x = .5 * (s + h), b = .5 * (f + g), _ = t >= x, w = e >= b, S = w << 1 | _, k = S + 4; k > S; ++S)
            if (n = M[3 & S])
                switch (3 & S) {
                    case 0:
                        l(n, s, f, x, b);
                        break;
                    case 1:
                        l(n, x, f, h, b);
                        break;
                    case 2:
                        l(n, s, b, x, g);
                        break;
                    case 3: l(n, x, b, h, g);
                }
    } }(n, r, u, i, o), a; }
    function gu(n, t) { n = ta.rgb(n), t = ta.rgb(t); var e = n.r, r = n.g, u = n.b, i = t.r - e, o = t.g - r, a = t.b - u; return function (n) { return "#" + xt(Math.round(e + i * n)) + xt(Math.round(r + o * n)) + xt(Math.round(u + a * n)); }; }
    function pu(n, t) { var e, r = {}, u = {}; for (e in n)
        e in t ? r[e] = mu(n[e], t[e]) : u[e] = n[e]; for (e in t)
        e in n || (u[e] = t[e]); return function (n) { for (e in r)
        u[e] = r[e](n); return u; }; }
    function vu(n, t) { return n = +n, t = +t, function (e) { return n * (1 - e) + t * e; }; }
    function du(n, t) { var e, r, u, i = il.lastIndex = ol.lastIndex = 0, o = -1, a = [], c = []; for (n += "", t += ""; (e = il.exec(n)) && (r = ol.exec(t));)
        (u = r.index) > i && (u = t.slice(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({ i: o, x: vu(e, r) })), i = ol.lastIndex; return i < t.length && (u = t.slice(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function (n) { return t(n) + ""; }) : function () { return t; } : (t = c.length, function (n) { for (var e, r = 0; t > r; ++r)
        a[(e = c[r]).i] = e.x(n); return a.join(""); }); }
    function mu(n, t) { for (var e, r = ta.interpolators.length; --r >= 0 && !(e = ta.interpolators[r](n, t));)
        ; return e; }
    function yu(n, t) { var e, r = [], u = [], i = n.length, o = t.length, a = Math.min(n.length, t.length); for (e = 0; a > e; ++e)
        r.push(mu(n[e], t[e])); for (; i > e; ++e)
        u[e] = n[e]; for (; o > e; ++e)
        u[e] = t[e]; return function (n) { for (e = 0; a > e; ++e)
        u[e] = r[e](n); return u; }; }
    function Mu(n) { return function (t) { return 0 >= t ? 0 : t >= 1 ? 1 : n(t); }; }
    function xu(n) { return function (t) { return 1 - n(1 - t); }; }
    function bu(n) { return function (t) { return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t)); }; }
    function _u(n) { return n * n; }
    function wu(n) { return n * n * n; }
    function Su(n) { if (0 >= n)
        return 0; if (n >= 1)
        return 1; var t = n * n, e = t * n; return 4 * (.5 > n ? e : 3 * (n - t) + e - .75); }
    function ku(n) { return function (t) { return Math.pow(t, n); }; }
    function Eu(n) { return 1 - Math.cos(n * Ra); }
    function Au(n) { return Math.pow(2, 10 * (n - 1)); }
    function Nu(n) { return 1 - Math.sqrt(1 - n * n); }
    function Cu(n, t) { var e; return arguments.length < 2 && (t = .45), arguments.length ? e = t / La * Math.asin(1 / n) : (n = 1, e = t / 4), function (r) { return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * La / t); }; }
    function zu(n) { return n || (n = 1.70158), function (t) { return t * t * ((n + 1) * t - n); }; }
    function qu(n) { return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375; }
    function Lu(n, t) { n = ta.hcl(n), t = ta.hcl(t); var e = n.h, r = n.c, u = n.l, i = t.h - e, o = t.c - r, a = t.l - u; return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function (n) { return st(e + i * n, r + o * n, u + a * n) + ""; }; }
    function Tu(n, t) { n = ta.hsl(n), t = ta.hsl(t); var e = n.h, r = n.s, u = n.l, i = t.h - e, o = t.s - r, a = t.l - u; return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), function (n) { return ct(e + i * n, r + o * n, u + a * n) + ""; }; }
    function Ru(n, t) { n = ta.lab(n), t = ta.lab(t); var e = n.l, r = n.a, u = n.b, i = t.l - e, o = t.a - r, a = t.b - u; return function (n) { return ht(e + i * n, r + o * n, u + a * n) + ""; }; }
    function Du(n, t) { return t -= n, function (e) { return Math.round(n + t * e); }; }
    function Pu(n) { var t = [n.a, n.b], e = [n.c, n.d], r = ju(t), u = Uu(t, e), i = ju(Fu(e, t, -u)) || 0; t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Pa, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Pa : 0; }
    function Uu(n, t) { return n[0] * t[0] + n[1] * t[1]; }
    function ju(n) { var t = Math.sqrt(Uu(n, n)); return t && (n[0] /= t, n[1] /= t), t; }
    function Fu(n, t, e) { return n[0] += e * t[0], n[1] += e * t[1], n; }
    function Hu(n, t) { var e, r = [], u = [], i = ta.transform(n), o = ta.transform(t), a = i.translate, c = o.translate, l = i.rotate, s = o.rotate, f = i.skew, h = o.skew, g = i.scale, p = o.scale; return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({ i: 1, x: vu(a[0], c[0]) }, { i: 3, x: vu(a[1], c[1]) })) : r.push(c[0] || c[1] ? "translate(" + c + ")" : ""), l != s ? (l - s > 180 ? s += 360 : s - l > 180 && (l += 360), u.push({ i: r.push(r.pop() + "rotate(", null, ")") - 2, x: vu(l, s) })) : s && r.push(r.pop() + "rotate(" + s + ")"), f != h ? u.push({ i: r.push(r.pop() + "skewX(", null, ")") - 2, x: vu(f, h) }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({ i: e - 4, x: vu(g[0], p[0]) }, { i: e - 2, x: vu(g[1], p[1]) })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length, function (n) { for (var t, i = -1; ++i < e;)
        r[(t = u[i]).i] = t.x(n); return r.join(""); }; }
    function Ou(n, t) { return t = (t -= n = +n) || 1 / t, function (e) { return (e - n) / t; }; }
    function Iu(n, t) { return t = (t -= n = +n) || 1 / t, function (e) { return Math.max(0, Math.min(1, (e - n) / t)); }; }
    function Yu(n) { for (var t = n.source, e = n.target, r = Vu(t, e), u = [t]; t !== r;)
        t = t.parent, u.push(t); for (var i = u.length; e !== r;)
        u.splice(i, 0, e), e = e.parent; return u; }
    function Zu(n) { for (var t = [], e = n.parent; null != e;)
        t.push(n), n = e, e = e.parent; return t.push(n), t; }
    function Vu(n, t) { if (n === t)
        return n; for (var e = Zu(n), r = Zu(t), u = e.pop(), i = r.pop(), o = null; u === i;)
        o = u, u = e.pop(), i = r.pop(); return o; }
    function Xu(n) { n.fixed |= 2; }
    function $u(n) { n.fixed &= -7; }
    function Bu(n) { n.fixed |= 4, n.px = n.x, n.py = n.y; }
    function Wu(n) { n.fixed &= -5; }
    function Ju(n, t, e) { var r = 0, u = 0; if (n.charge = 0, !n.leaf)
        for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;)
            i = o[c], null != i && (Ju(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy); if (n.point) {
        n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
        var l = t * e[n.point.index];
        n.charge += n.pointCharge = l, r += l * n.point.x, u += l * n.point.y;
    } n.cx = r / n.charge, n.cy = u / n.charge; }
    function Gu(n, t) { return ta.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = ri, n; }
    function Ku(n, t) { for (var e = [n]; null != (n = e.pop());)
        if (t(n), (u = n.children) && (r = u.length))
            for (var r, u; --r >= 0;)
                e.push(u[r]); }
    function Qu(n, t) { for (var e = [n], r = []; null != (n = e.pop());)
        if (r.push(n), (i = n.children) && (u = i.length))
            for (var u, i, o = -1; ++o < u;)
                e.push(i[o]); for (; null != (n = r.pop());)
        t(n); }
    function ni(n) { return n.children; }
    function ti(n) { return n.value; }
    function ei(n, t) { return t.value - n.value; }
    function ri(n) { return ta.merge(n.map(function (n) { return (n.children || []).map(function (t) { return { source: n, target: t }; }); })); }
    function ui(n) { return n.x; }
    function ii(n) { return n.y; }
    function oi(n, t, e) { n.y0 = t, n.y = e; }
    function ai(n) { return ta.range(n.length); }
    function ci(n) { for (var t = -1, e = n[0].length, r = []; ++t < e;)
        r[t] = 0; return r; }
    function li(n) { for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)
        (t = n[e][1]) > u && (r = e, u = t); return r; }
    function si(n) { return n.reduce(fi, 0); }
    function fi(n, t) { return n + t[1]; }
    function hi(n, t) { return gi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1)); }
    function gi(n, t) { for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;)
        i[e] = u * e + r; return i; }
    function pi(n) { return [ta.min(n), ta.max(n)]; }
    function vi(n, t) { return n.value - t.value; }
    function di(n, t) { var e = n._pack_next; n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t; }
    function mi(n, t) { n._pack_next = t, t._pack_prev = n; }
    function yi(n, t) { var e = t.x - n.x, r = t.y - n.y, u = n.r + t.r; return .999 * u * u > e * e + r * r; }
    function Mi(n) { function t(n) { s = Math.min(n.x - n.r, s), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g); } if ((e = n.children) && (l = e.length)) {
        var e, r, u, i, o, a, c, l, s = 1 / 0, f = -1 / 0, h = 1 / 0, g = -1 / 0;
        if (e.forEach(xi), r = e[0], r.x = -r.r, r.y = 0, t(r), l > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), l > 2))
            for (i = e[2], wi(r, u, i), t(i), di(r, i), r._pack_prev = i, di(i, u), u = r._pack_next, o = 3; l > o; o++) {
                wi(r, u, i = e[o]);
                var p = 0, v = 1, d = 1;
                for (a = u._pack_next; a !== u; a = a._pack_next, v++)
                    if (yi(a, i)) {
                        p = 1;
                        break;
                    }
                if (1 == p)
                    for (c = r._pack_prev; c !== a._pack_prev && !yi(c, i); c = c._pack_prev, d++)
                        ;
                p ? (d > v || v == d && u.r < r.r ? mi(r, u = a) : mi(r = c, u), o--) : (di(r, i), u = i, t(i));
            }
        var m = (s + f) / 2, y = (h + g) / 2, M = 0;
        for (o = 0; l > o; o++)
            i = e[o], i.x -= m, i.y -= y, M = Math.max(M, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
        n.r = M, e.forEach(bi);
    } }
    function xi(n) { n._pack_next = n._pack_prev = n; }
    function bi(n) { delete n._pack_next, delete n._pack_prev; }
    function _i(n, t, e, r) { var u = n.children; if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
        for (var i = -1, o = u.length; ++i < o;)
            _i(u[i], t, e, r); }
    function wi(n, t, e) { var r = n.r + e.r, u = t.x - n.x, i = t.y - n.y; if (r && (u || i)) {
        var o = t.r + e.r, a = u * u + i * i;
        o *= o, r *= r;
        var c = .5 + (r - o) / (2 * a), l = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
        e.x = n.x + c * u + l * i, e.y = n.y + c * i - l * u;
    }
    else
        e.x = n.x + r, e.y = n.y; }
    function Si(n, t) { return n.parent == t.parent ? 1 : 2; }
    function ki(n) { var t = n.children; return t.length ? t[0] : n.t; }
    function Ei(n) { var t, e = n.children; return (t = e.length) ? e[t - 1] : n.t; }
    function Ai(n, t, e) { var r = e / (t.i - n.i); t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e; }
    function Ni(n) { for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;)
        t = u[i], t.z += e, t.m += e, e += t.s + (r += t.c); }
    function Ci(n, t, e) { return n.a.parent === t.parent ? n.a : e; }
    function zi(n) { return 1 + ta.max(n, function (n) { return n.y; }); }
    function qi(n) { return n.reduce(function (n, t) { return n + t.x; }, 0) / n.length; }
    function Li(n) { var t = n.children; return t && t.length ? Li(t[0]) : n; }
    function Ti(n) { var t, e = n.children; return e && (t = e.length) ? Ti(e[t - 1]) : n; }
    function Ri(n) { return { x: n.x, y: n.y, dx: n.dx, dy: n.dy }; }
    function Di(n, t) { var e = n.x + t[3], r = n.y + t[0], u = n.dx - t[1] - t[3], i = n.dy - t[0] - t[2]; return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), { x: e, y: r, dx: u, dy: i }; }
    function Pi(n) { var t = n[0], e = n[n.length - 1]; return e > t ? [t, e] : [e, t]; }
    function Ui(n) { return n.rangeExtent ? n.rangeExtent() : Pi(n.range()); }
    function ji(n, t, e, r) { var u = e(n[0], n[1]), i = r(t[0], t[1]); return function (n) { return i(u(n)); }; }
    function Fi(n, t) { var e, r = 0, u = n.length - 1, i = n[r], o = n[u]; return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n; }
    function Hi(n) { return n ? { floor: function (t) { return Math.floor(t / n) * n; }, ceil: function (t) { return Math.ceil(t / n) * n; } } : ml; }
    function Oi(n, t, e, r) { var u = [], i = [], o = 0, a = Math.min(n.length, t.length) - 1; for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;)
        u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o])); return function (t) { var e = ta.bisect(n, t, 1, a) - 1; return i[e](u[e](t)); }; }
    function Ii(n, t, e, r) { function u() { var u = Math.min(n.length, t.length) > 2 ? Oi : ji, c = r ? Iu : Ou; return o = u(n, t, c, e), a = u(t, n, c, mu), i; } function i(n) { return o(n); } var o, a; return i.invert = function (n) { return a(n); }, i.domain = function (t) { return arguments.length ? (n = t.map(Number), u()) : n; }, i.range = function (n) { return arguments.length ? (t = n, u()) : t; }, i.rangeRound = function (n) { return i.range(n).interpolate(Du); }, i.clamp = function (n) { return arguments.length ? (r = n, u()) : r; }, i.interpolate = function (n) { return arguments.length ? (e = n, u()) : e; }, i.ticks = function (t) { return Xi(n, t); }, i.tickFormat = function (t, e) { return $i(n, t, e); }, i.nice = function (t) { return Zi(n, t), u(); }, i.copy = function () { return Ii(n, t, e, r); }, u(); }
    function Yi(n, t) { return ta.rebind(n, t, "range", "rangeRound", "interpolate", "clamp"); }
    function Zi(n, t) { return Fi(n, Hi(Vi(n, t)[2])); }
    function Vi(n, t) { null == t && (t = 10); var e = Pi(n), r = e[1] - e[0], u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)), i = t / r * u; return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e; }
    function Xi(n, t) { return ta.range.apply(ta, Vi(n, t)); }
    function $i(n, t, e) { var r = Vi(n, t); if (e) {
        var u = ic.exec(e);
        if (u.shift(), "s" === u[8]) {
            var i = ta.formatPrefix(Math.max(ga(r[0]), ga(r[1])));
            return u[7] || (u[7] = "." + Bi(i.scale(r[2]))), u[8] = "f", e = ta.format(u.join("")), function (n) { return e(i.scale(n)) + i.symbol; };
        }
        u[7] || (u[7] = "." + Wi(u[8], r)), e = u.join("");
    }
    else
        e = ",." + Bi(r[2]) + "f"; return ta.format(e); }
    function Bi(n) { return -Math.floor(Math.log(n) / Math.LN10 + .01); }
    function Wi(n, t) { var e = Bi(t[2]); return n in yl ? Math.abs(e - Bi(Math.max(ga(t[0]), ga(t[1])))) + +("e" !== n) : e - 2 * ("%" === n); }
    function Ji(n, t, e, r) { function u(n) { return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t); } function i(n) { return e ? Math.pow(t, n) : -Math.pow(t, -n); } function o(t) { return n(u(t)); } return o.invert = function (t) { return i(n.invert(t)); }, o.domain = function (t) { return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r; }, o.base = function (e) { return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t; }, o.nice = function () { var t = Fi(r.map(u), e ? Math : xl); return n.domain(t), r = t.map(i), o; }, o.ticks = function () { var n = Pi(r), o = [], a = n[0], c = n[1], l = Math.floor(u(a)), s = Math.ceil(u(c)), f = t % 1 ? 2 : t; if (isFinite(s - l)) {
        if (e) {
            for (; s > l; l++)
                for (var h = 1; f > h; h++)
                    o.push(i(l) * h);
            o.push(i(l));
        }
        else
            for (o.push(i(l)); l++ < s;)
                for (var h = f - 1; h > 0; h--)
                    o.push(i(l) * h);
        for (l = 0; o[l] < a; l++)
            ;
        for (s = o.length; o[s - 1] > c; s--)
            ;
        o = o.slice(l, s);
    } return o; }, o.tickFormat = function (n, t) { if (!arguments.length)
        return Ml; arguments.length < 2 ? t = Ml : "function" != typeof t && (t = ta.format(t)); var r, a = Math.max(.1, n / o.ticks().length), c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor); return function (n) { return n / i(c(u(n) + r)) <= a ? t(n) : ""; }; }, o.copy = function () { return Ji(n.copy(), t, e, r); }, Yi(o, n); }
    function Gi(n, t, e) { function r(t) { return n(u(t)); } var u = Ki(t), i = Ki(1 / t); return r.invert = function (t) { return i(n.invert(t)); }, r.domain = function (t) { return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e; }, r.ticks = function (n) { return Xi(e, n); }, r.tickFormat = function (n, t) { return $i(e, n, t); }, r.nice = function (n) { return r.domain(Zi(e, n)); }, r.exponent = function (o) { return arguments.length ? (u = Ki(t = o), i = Ki(1 / t), n.domain(e.map(u)), r) : t; }, r.copy = function () { return Gi(n.copy(), t, e); }, Yi(r, n); }
    function Ki(n) { return function (t) { return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n); }; }
    function Qi(n, t) { function e(e) { return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length]; } function r(t, e) { return ta.range(n.length).map(function (n) { return t + e * n; }); } var u, i, o; return e.domain = function (r) { if (!arguments.length)
        return n; n = [], u = new l; for (var i, o = -1, a = r.length; ++o < a;)
        u.has(i = r[o]) || u.set(i, n.push(i)); return e[t.t].apply(e, t.a); }, e.range = function (n) { return arguments.length ? (i = n, o = 0, t = { t: "range", a: arguments }, e) : i; }, e.rangePoints = function (u, a) { arguments.length < 2 && (a = 0); var c = u[0], l = u[1], s = n.length < 2 ? (c = (c + l) / 2, 0) : (l - c) / (n.length - 1 + a); return i = r(c + s * a / 2, s), o = 0, t = { t: "rangePoints", a: arguments }, e; }, e.rangeRoundPoints = function (u, a) { arguments.length < 2 && (a = 0); var c = u[0], l = u[1], s = n.length < 2 ? (c = l = Math.round((c + l) / 2), 0) : (l - c) / (n.length - 1 + a) | 0; return i = r(c + Math.round(s * a / 2 + (l - c - (n.length - 1 + a) * s) / 2), s), o = 0, t = { t: "rangeRoundPoints", a: arguments }, e; }, e.rangeBands = function (u, a, c) { arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a); var l = u[1] < u[0], s = u[l - 0], f = u[1 - l], h = (f - s) / (n.length - a + 2 * c); return i = r(s + h * c, h), l && i.reverse(), o = h * (1 - a), t = { t: "rangeBands", a: arguments }, e; }, e.rangeRoundBands = function (u, a, c) { arguments.length < 2 && (a = 0), arguments.length < 3 && (c = a); var l = u[1] < u[0], s = u[l - 0], f = u[1 - l], h = Math.floor((f - s) / (n.length - a + 2 * c)); return i = r(s + Math.round((f - s - (n.length - a) * h) / 2), h), l && i.reverse(), o = Math.round(h * (1 - a)), t = { t: "rangeRoundBands", a: arguments }, e; }, e.rangeBand = function () { return o; }, e.rangeExtent = function () { return Pi(t.a[0]); }, e.copy = function () { return Qi(n, t); }, e.domain(n); }
    function no(n, t) { function i() { var e = 0, r = t.length; for (a = []; ++e < r;)
        a[e - 1] = ta.quantile(n, e / r); return o; } function o(n) { return isNaN(n = +n) ? void 0 : t[ta.bisect(a, n)]; } var a; return o.domain = function (t) { return arguments.length ? (n = t.map(r).filter(u).sort(e), i()) : n; }, o.range = function (n) { return arguments.length ? (t = n, i()) : t; }, o.quantiles = function () { return a; }, o.invertExtent = function (e) { return e = t.indexOf(e), 0 > e ? [0 / 0, 0 / 0] : [e > 0 ? a[e - 1] : n[0], e < a.length ? a[e] : n[n.length - 1]]; }, o.copy = function () { return no(n, t); }, i(); }
    function to(n, t, e) { function r(t) { return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]; } function u() { return i = e.length / (t - n), o = e.length - 1, r; } var i, o; return r.domain = function (e) { return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]; }, r.range = function (n) { return arguments.length ? (e = n, u()) : e; }, r.invertExtent = function (t) { return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]; }, r.copy = function () { return to(n, t, e); }, u(); }
    function eo(n, t) { function e(e) { return e >= e ? t[ta.bisect(n, e)] : void 0; } return e.domain = function (t) { return arguments.length ? (n = t, e) : n; }, e.range = function (n) { return arguments.length ? (t = n, e) : t; }, e.invertExtent = function (e) { return e = t.indexOf(e), [n[e - 1], n[e]]; }, e.copy = function () { return eo(n, t); }, e; }
    function ro(n) { function t(n) { return +n; } return t.invert = t, t.domain = t.range = function (e) { return arguments.length ? (n = e.map(t), t) : n; }, t.ticks = function (t) { return Xi(n, t); }, t.tickFormat = function (t, e) { return $i(n, t, e); }, t.copy = function () { return ro(n); }, t; }
    function uo() { return 0; }
    function io(n) { return n.innerRadius; }
    function oo(n) { return n.outerRadius; }
    function ao(n) { return n.startAngle; }
    function co(n) { return n.endAngle; }
    function lo(n) { return n && n.padAngle; }
    function so(n, t, e, r) { return (n - e) * t - (t - r) * n > 0 ? 0 : 1; }
    function fo(n, t, e, r, u) { var i = n[0] - t[0], o = n[1] - t[1], a = (u ? r : -r) / Math.sqrt(i * i + o * o), c = a * o, l = -a * i, s = n[0] + c, f = n[1] + l, h = t[0] + c, g = t[1] + l, p = (s + h) / 2, v = (f + g) / 2, d = h - s, m = g - f, y = d * d + m * m, M = e - r, x = s * g - h * f, b = (0 > m ? -1 : 1) * Math.sqrt(M * M * y - x * x), _ = (x * m - d * b) / y, w = (-x * d - m * b) / y, S = (x * m + d * b) / y, k = (-x * d + m * b) / y, E = _ - p, A = w - v, N = S - p, C = k - v; return E * E + A * A > N * N + C * C && (_ = S, w = k), [[_ - c, w - l], [_ * e / M, w * e / M]]; }
    function ho(n) { function t(t) { function o() { l.push("M", i(n(s), a)); } for (var c, l = [], s = [], f = -1, h = t.length, g = Et(e), p = Et(r); ++f < h;)
        u.call(this, c = t[f], f) ? s.push([+g.call(this, c, f), +p.call(this, c, f)]) : s.length && (o(), s = []); return s.length && o(), l.length ? l.join("") : null; } var e = Ar, r = Nr, u = Ne, i = go, o = i.key, a = .7; return t.x = function (n) { return arguments.length ? (e = n, t) : e; }, t.y = function (n) { return arguments.length ? (r = n, t) : r; }, t.defined = function (n) { return arguments.length ? (u = n, t) : u; }, t.interpolate = function (n) { return arguments.length ? (o = "function" == typeof n ? i = n : (i = El.get(n) || go).key, t) : o; }, t.tension = function (n) { return arguments.length ? (a = n, t) : a; }, t; }
    function go(n) { return n.join("L"); }
    function po(n) { return go(n) + "Z"; }
    function vo(n) { for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)
        u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]); return e > 1 && u.push("H", r[0]), u.join(""); }
    function mo(n) { for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)
        u.push("V", (r = n[t])[1], "H", r[0]); return u.join(""); }
    function yo(n) { for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;)
        u.push("H", (r = n[t])[0], "V", r[1]); return u.join(""); }
    function Mo(n, t) { return n.length < 4 ? go(n) : n[1] + _o(n.slice(1, -1), wo(n, t)); }
    function xo(n, t) { return n.length < 3 ? go(n) : n[0] + _o((n.push(n[0]), n), wo([n[n.length - 2]].concat(n, [n[1]]), t)); }
    function bo(n, t) { return n.length < 3 ? go(n) : n[0] + _o(n, wo(n, t)); }
    function _o(n, t) { if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
        return go(n); var e = n.length != t.length, r = "", u = n[0], i = n[1], o = t[0], a = o, c = 1; if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
        a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
        for (var l = 2; l < t.length; l++, c++)
            i = n[c], a = t[l], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
    } if (e) {
        var s = n[c];
        r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + s[0] + "," + s[1];
    } return r; }
    function wo(n, t) { for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;)
        e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]); return r; }
    function So(n) { if (n.length < 3)
        return go(n); var t = 1, e = n.length, r = n[0], u = r[0], i = r[1], o = [u, u, u, (r = n[1])[0]], a = [i, i, i, r[1]], c = [u, ",", i, "L", No(Cl, o), ",", No(Cl, a)]; for (n.push(n[e - 1]); ++t <= e;)
        r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Co(c, o, a); return n.pop(), c.push("L", r), c.join(""); }
    function ko(n) { if (n.length < 4)
        return go(n); for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;)
        t = n[r], i.push(t[0]), o.push(t[1]); for (e.push(No(Cl, i) + "," + No(Cl, o)), --r; ++r < u;)
        t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), Co(e, i, o); return e.join(""); }
    function Eo(n) { for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;)
        e = n[r % u], o.push(e[0]), a.push(e[1]); for (t = [No(Cl, o), ",", No(Cl, a)], --r; ++r < i;)
        e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Co(t, o, a); return t.join(""); }
    function Ao(n, t) { var e = n.length - 1; if (e)
        for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, l = -1; ++l <= e;)
            r = n[l], u = l / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c); return So(n); }
    function No(n, t) { return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]; }
    function Co(n, t, e) { n.push("C", No(Al, t), ",", No(Al, e), ",", No(Nl, t), ",", No(Nl, e), ",", No(Cl, t), ",", No(Cl, e)); }
    function zo(n, t) { return (t[1] - n[1]) / (t[0] - n[0]); }
    function qo(n) { for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = zo(u, i); ++t < e;)
        r[t] = (o + (o = zo(u = i, i = n[t + 1]))) / 2; return r[t] = o, r; }
    function Lo(n) { for (var t, e, r, u, i = [], o = qo(n), a = -1, c = n.length - 1; ++a < c;)
        t = zo(n[a], n[a + 1]), ga(t) < Ca ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r)); for (a = -1; ++a <= c;)
        u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]); return i; }
    function To(n) { return n.length < 3 ? go(n) : n[0] + _o(n, Lo(n)); }
    function Ro(n) { for (var t, e, r, u = -1, i = n.length; ++u < i;)
        t = n[u], e = t[0], r = t[1] - Ra, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r); return n; }
    function Do(n) {
        function t(t) { function c() { v.push("M", a(n(m), f), s, l(n(d.reverse()), f), "Z"); } for (var h, g, p, v = [], d = [], m = [], y = -1, M = t.length, x = Et(e), b = Et(u), _ = e === r ? function () { return g; } : Et(r), w = u === i ? function () { return p; } : Et(i); ++y < M;)
            o.call(this, h = t[y], y) ? (d.push([g = +x.call(this, h, y), p = +b.call(this, h, y)]), m.push([+_.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []); return d.length && c(), v.length ? v.join("") : null; }
        var e = Ar, r = Ar, u = 0, i = Nr, o = Ne, a = go, c = a.key, l = a, s = "L", f = .7;
        return t.x = function (n) { return arguments.length ? (e = r = n, t) : r; }, t.x0 = function (n) { return arguments.length ? (e = n, t) : e; }, t.x1 = function (n) {
            return arguments.length ? (r = n, t) : r;
        }, t.y = function (n) { return arguments.length ? (u = i = n, t) : i; }, t.y0 = function (n) { return arguments.length ? (u = n, t) : u; }, t.y1 = function (n) { return arguments.length ? (i = n, t) : i; }, t.defined = function (n) { return arguments.length ? (o = n, t) : o; }, t.interpolate = function (n) { return arguments.length ? (c = "function" == typeof n ? a = n : (a = El.get(n) || go).key, l = a.reverse || a, s = a.closed ? "M" : "L", t) : c; }, t.tension = function (n) { return arguments.length ? (f = n, t) : f; }, t;
    }
    function Po(n) { return n.radius; }
    function Uo(n) { return [n.x, n.y]; }
    function jo(n) { return function () { var t = n.apply(this, arguments), e = t[0], r = t[1] - Ra; return [e * Math.cos(r), e * Math.sin(r)]; }; }
    function Fo() { return 64; }
    function Ho() { return "circle"; }
    function Oo(n) { var t = Math.sqrt(n / qa); return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"; }
    function Io(n) { return function () { var t, e; (t = this[n]) && (e = t[t.active]) && (--t.count ? delete t[t.active] : delete this[n], t.active += .5, e.event && e.event.interrupt.call(this, this.__data__, e.index)); }; }
    function Yo(n, t, e) { return ya(n, Pl), n.namespace = t, n.id = e, n; }
    function Zo(n, t, e, r) { var u = n.id, i = n.namespace; return Y(n, "function" == typeof e ? function (n, o, a) { n[i][u].tween.set(t, r(e.call(n, n.__data__, o, a))); } : (e = r(e), function (n) { n[i][u].tween.set(t, e); })); }
    function Vo(n) { return null == n && (n = ""), function () { this.textContent = n; }; }
    function Xo(n) { return null == n ? "__transition__" : "__transition_" + n + "__"; }
    function $o(n, t, e, r, u) { var i = n[e] || (n[e] = { active: 0, count: 0 }), o = i[r]; if (!o) {
        var a = u.time;
        o = i[r] = { tween: new l, time: a, delay: u.delay, duration: u.duration, ease: u.ease, index: t }, u = null, ++i.count, ta.timer(function (u) { function c(e) { if (i.active > r)
            return s(); var u = i[i.active]; u && (--i.count, delete i[i.active], u.event && u.event.interrupt.call(n, n.__data__, u.index)), i.active = r, o.event && o.event.start.call(n, n.__data__, t), o.tween.forEach(function (e, r) { (r = r.call(n, n.__data__, t)) && v.push(r); }), h = o.ease, f = o.duration, ta.timer(function () { return p.c = l(e || 1) ? Ne : l, 1; }, 0, a); } function l(e) { if (i.active !== r)
            return 1; for (var u = e / f, a = h(u), c = v.length; c > 0;)
            v[--c].call(n, a); return u >= 1 ? (o.event && o.event.end.call(n, n.__data__, t), s()) : void 0; } function s() { return --i.count ? delete i[r] : delete n[e], 1; } var f, h, g = o.delay, p = ec, v = []; return p.t = g + a, u >= g ? c(u - g) : void (p.c = c); }, 0, a);
    } }
    function Bo(n, t, e) { n.attr("transform", function (n) { var r = t(n); return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"; }); }
    function Wo(n, t, e) { n.attr("transform", function (n) { var r = t(n); return "translate(0," + (isFinite(r) ? r : e(n)) + ")"; }); }
    function Jo(n) { return n.toISOString(); }
    function Go(n, t, e) { function r(t) { return n(t); } function u(n, e) { var r = n[1] - n[0], u = r / e, i = ta.bisect(Vl, u); return i == Vl.length ? [t.year, Vi(n.map(function (n) { return n / 31536e6; }), e)[2]] : i ? t[u / Vl[i - 1] < Vl[i] / u ? i - 1 : i] : [Bl, Vi(n, e)[2]]; } return r.invert = function (t) { return Ko(n.invert(t)); }, r.domain = function (t) { return arguments.length ? (n.domain(t), r) : n.domain().map(Ko); }, r.nice = function (n, t) { function e(e) { return !isNaN(e) && !n.range(e, Ko(+e + 1), t).length; } var i = r.domain(), o = Pi(i), a = null == n ? u(o, 10) : "number" == typeof n && u(o, n); return a && (n = a[0], t = a[1]), r.domain(Fi(i, t > 1 ? { floor: function (t) { for (; e(t = n.floor(t));)
            t = Ko(t - 1); return t; }, ceil: function (t) { for (; e(t = n.ceil(t));)
            t = Ko(+t + 1); return t; } } : n)); }, r.ticks = function (n, t) { var e = Pi(r.domain()), i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{ range: n }, t]; return i && (n = i[0], t = i[1]), n.range(e[0], Ko(+e[1] + 1), 1 > t ? 1 : t); }, r.tickFormat = function () { return e; }, r.copy = function () { return Go(n.copy(), t, e); }, Yi(r, n); }
    function Ko(n) { return new Date(n); }
    function Qo(n) { return JSON.parse(n.responseText); }
    function na(n) { var t = ua.createRange(); return t.selectNode(ua.body), t.createContextualFragment(n.responseText); }
    var ta = { version: "3.5.5" }, ea = [].slice, ra = function (n) { return ea.call(n); }, ua = this.document;
    if (ua)
        try {
            ra(ua.documentElement.childNodes)[0].nodeType;
        }
        catch (ia) {
            ra = function (n) { for (var t = n.length, e = new Array(t); t--;)
                e[t] = n[t]; return e; };
        }
    if (Date.now || (Date.now = function () { return +new Date; }), ua)
        try {
            ua.createElement("DIV").style.setProperty("opacity", 0, "");
        }
        catch (oa) {
            var aa = this.Element.prototype, ca = aa.setAttribute, la = aa.setAttributeNS, sa = this.CSSStyleDeclaration.prototype, fa = sa.setProperty;
            aa.setAttribute = function (n, t) { ca.call(this, n, t + ""); }, aa.setAttributeNS = function (n, t, e) { la.call(this, n, t, e + ""); }, sa.setProperty = function (n, t, e) { fa.call(this, n, t + "", e); };
        }
    ta.ascending = e, ta.descending = function (n, t) { return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0; }, ta.min = function (n, t) { var e, r, u = -1, i = n.length; if (1 === arguments.length) {
        for (; ++u < i;)
            if (null != (r = n[u]) && r >= r) {
                e = r;
                break;
            }
        for (; ++u < i;)
            null != (r = n[u]) && e > r && (e = r);
    }
    else {
        for (; ++u < i;)
            if (null != (r = t.call(n, n[u], u)) && r >= r) {
                e = r;
                break;
            }
        for (; ++u < i;)
            null != (r = t.call(n, n[u], u)) && e > r && (e = r);
    } return e; }, ta.max = function (n, t) { var e, r, u = -1, i = n.length; if (1 === arguments.length) {
        for (; ++u < i;)
            if (null != (r = n[u]) && r >= r) {
                e = r;
                break;
            }
        for (; ++u < i;)
            null != (r = n[u]) && r > e && (e = r);
    }
    else {
        for (; ++u < i;)
            if (null != (r = t.call(n, n[u], u)) && r >= r) {
                e = r;
                break;
            }
        for (; ++u < i;)
            null != (r = t.call(n, n[u], u)) && r > e && (e = r);
    } return e; }, ta.extent = function (n, t) { var e, r, u, i = -1, o = n.length; if (1 === arguments.length) {
        for (; ++i < o;)
            if (null != (r = n[i]) && r >= r) {
                e = u = r;
                break;
            }
        for (; ++i < o;)
            null != (r = n[i]) && (e > r && (e = r), r > u && (u = r));
    }
    else {
        for (; ++i < o;)
            if (null != (r = t.call(n, n[i], i)) && r >= r) {
                e = u = r;
                break;
            }
        for (; ++i < o;)
            null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r));
    } return [e, u]; }, ta.sum = function (n, t) { var e, r = 0, i = n.length, o = -1; if (1 === arguments.length)
        for (; ++o < i;)
            u(e = +n[o]) && (r += e);
    else
        for (; ++o < i;)
            u(e = +t.call(n, n[o], o)) && (r += e); return r; }, ta.mean = function (n, t) { var e, i = 0, o = n.length, a = -1, c = o; if (1 === arguments.length)
        for (; ++a < o;)
            u(e = r(n[a])) ? i += e : --c;
    else
        for (; ++a < o;)
            u(e = r(t.call(n, n[a], a))) ? i += e : --c; return c ? i / c : void 0; }, ta.quantile = function (n, t) { var e = (n.length - 1) * t + 1, r = Math.floor(e), u = +n[r - 1], i = e - r; return i ? u + i * (n[r] - u) : u; }, ta.median = function (n, t) { var i, o = [], a = n.length, c = -1; if (1 === arguments.length)
        for (; ++c < a;)
            u(i = r(n[c])) && o.push(i);
    else
        for (; ++c < a;)
            u(i = r(t.call(n, n[c], c))) && o.push(i); return o.length ? ta.quantile(o.sort(e), .5) : void 0; }, ta.variance = function (n, t) { var e, i, o = n.length, a = 0, c = 0, l = -1, s = 0; if (1 === arguments.length)
        for (; ++l < o;)
            u(e = r(n[l])) && (i = e - a, a += i / ++s, c += i * (e - a));
    else
        for (; ++l < o;)
            u(e = r(t.call(n, n[l], l))) && (i = e - a, a += i / ++s, c += i * (e - a)); return s > 1 ? c / (s - 1) : void 0; }, ta.deviation = function () { var n = ta.variance.apply(this, arguments); return n ? Math.sqrt(n) : n; };
    var ha = i(e);
    ta.bisectLeft = ha.left, ta.bisect = ta.bisectRight = ha.right, ta.bisector = function (n) { return i(1 === n.length ? function (t, r) { return e(n(t), r); } : n); }, ta.shuffle = function (n, t, e) { (i = arguments.length) < 3 && (e = n.length, 2 > i && (t = 0)); for (var r, u, i = e - t; i;)
        u = Math.random() * i-- | 0, r = n[i + t], n[i + t] = n[u + t], n[u + t] = r; return n; }, ta.permute = function (n, t) { for (var e = t.length, r = new Array(e); e--;)
        r[e] = n[t[e]]; return r; }, ta.pairs = function (n) { for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;)
        i[e] = [t = u, u = n[++e]]; return i; }, ta.zip = function () { if (!(r = arguments.length))
        return []; for (var n = -1, t = ta.min(arguments, o), e = new Array(t); ++n < t;)
        for (var r, u = -1, i = e[n] = new Array(r); ++u < r;)
            i[u] = arguments[u][n]; return e; }, ta.transpose = function (n) { return ta.zip.apply(ta, n); }, ta.keys = function (n) { var t = []; for (var e in n)
        t.push(e); return t; }, ta.values = function (n) { var t = []; for (var e in n)
        t.push(n[e]); return t; }, ta.entries = function (n) { var t = []; for (var e in n)
        t.push({ key: e, value: n[e] }); return t; }, ta.merge = function (n) { for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;)
        o += n[i].length; for (e = new Array(o); --u >= 0;)
        for (r = n[u], t = r.length; --t >= 0;)
            e[--o] = r[t]; return e; };
    var ga = Math.abs;
    ta.range = function (n, t, e) { if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e === 1 / 0)
        throw new Error("infinite range"); var r, u = [], i = a(ga(e)), o = -1; if (n *= i, t *= i, e *= i, 0 > e)
        for (; (r = n + e * ++o) > t;)
            u.push(r / i);
    else
        for (; (r = n + e * ++o) < t;)
            u.push(r / i); return u; }, ta.map = function (n, t) { var e = new l; if (n instanceof l)
        n.forEach(function (n, t) { e.set(n, t); });
    else if (Array.isArray(n)) {
        var r, u = -1, i = n.length;
        if (1 === arguments.length)
            for (; ++u < i;)
                e.set(u, n[u]);
        else
            for (; ++u < i;)
                e.set(t.call(n, r = n[u], u), r);
    }
    else
        for (var o in n)
            e.set(o, n[o]); return e; };
    var pa = "__proto__", va = "\x00";
    c(l, { has: h, get: function (n) { return this._[s(n)]; }, set: function (n, t) { return this._[s(n)] = t; }, remove: g, keys: p, values: function () { var n = []; for (var t in this._)
            n.push(this._[t]); return n; }, entries: function () { var n = []; for (var t in this._)
            n.push({ key: f(t), value: this._[t] }); return n; }, size: v, empty: d, forEach: function (n) { for (var t in this._)
            n.call(this, f(t), this._[t]); } }), ta.nest = function () { function n(t, o, a) { if (a >= i.length)
        return r ? r.call(u, o) : e ? o.sort(e) : o; for (var c, s, f, h, g = -1, p = o.length, v = i[a++], d = new l; ++g < p;)
        (h = d.get(c = v(s = o[g]))) ? h.push(s) : d.set(c, [s]); return t ? (s = t(), f = function (e, r) { s.set(e, n(t, r, a)); }) : (s = {}, f = function (e, r) { s[e] = n(t, r, a); }), d.forEach(f), s; } function t(n, e) { if (e >= i.length)
        return n; var r = [], u = o[e++]; return n.forEach(function (n, u) { r.push({ key: n, values: t(u, e) }); }), u ? r.sort(function (n, t) { return u(n.key, t.key); }) : r; } var e, r, u = {}, i = [], o = []; return u.map = function (t, e) { return n(e, t, 0); }, u.entries = function (e) { return t(n(ta.map, e, 0), 0); }, u.key = function (n) { return i.push(n), u; }, u.sortKeys = function (n) { return o[i.length - 1] = n, u; }, u.sortValues = function (n) { return e = n, u; }, u.rollup = function (n) { return r = n, u; }, u; }, ta.set = function (n) { var t = new m; if (n)
        for (var e = 0, r = n.length; r > e; ++e)
            t.add(n[e]); return t; }, c(m, { has: h, add: function (n) { return this._[s(n += "")] = !0, n; }, remove: g, values: p, size: v, empty: d, forEach: function (n) { for (var t in this._)
            n.call(this, f(t)); } }), ta.behavior = {}, ta.rebind = function (n, t) { for (var e, r = 1, u = arguments.length; ++r < u;)
        n[e = arguments[r]] = M(n, t, t[e]); return n; };
    var da = ["webkit", "ms", "moz", "Moz", "o", "O"];
    ta.dispatch = function () { for (var n = new _, t = -1, e = arguments.length; ++t < e;)
        n[arguments[t]] = w(n); return n; }, _.prototype.on = function (n, t) { var e = n.indexOf("."), r = ""; if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n)
        return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t); if (2 === arguments.length) {
        if (null == t)
            for (n in this)
                this.hasOwnProperty(n) && this[n].on(r, null);
        return this;
    } }, ta.event = null, ta.requote = function (n) { return n.replace(ma, "\\$&"); };
    var ma = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, ya = {}.__proto__ ? function (n, t) { n.__proto__ = t; } : function (n, t) { for (var e in t)
        n[e] = t[e]; }, Ma = function (n, t) { return t.querySelector(n); }, xa = function (n, t) { return t.querySelectorAll(n); }, ba = function (n, t) { var e = n.matches || n[x(n, "matchesSelector")]; return (ba = function (n, t) { return e.call(n, t); })(n, t); };
    "function" == typeof Sizzle && (Ma = function (n, t) { return Sizzle(n, t)[0] || null; }, xa = Sizzle, ba = Sizzle.matchesSelector), ta.selection = function () { return ta.select(ua.documentElement); };
    var _a = ta.selection.prototype = [];
    _a.select = function (n) { var t, e, r, u, i = []; n = N(n); for (var o = -1, a = this.length; ++o < a;) {
        i.push(t = []), t.parentNode = (r = this[o]).parentNode;
        for (var c = -1, l = r.length; ++c < l;)
            (u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null);
    } return A(i); }, _a.selectAll = function (n) { var t, e, r = []; n = C(n); for (var u = -1, i = this.length; ++u < i;)
        for (var o = this[u], a = -1, c = o.length; ++a < c;)
            (e = o[a]) && (r.push(t = ra(n.call(e, e.__data__, a, u))), t.parentNode = e); return A(r); };
    var wa = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
    ta.ns = { prefix: wa, qualify: function (n) { var t = n.indexOf(":"), e = n; return t >= 0 && (e = n.slice(0, t), n = n.slice(t + 1)), wa.hasOwnProperty(e) ? { space: wa[e], local: n } : n; } }, _a.attr = function (n, t) { if (arguments.length < 2) {
        if ("string" == typeof n) {
            var e = this.node();
            return n = ta.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n);
        }
        for (t in n)
            this.each(z(t, n[t]));
        return this;
    } return this.each(z(n, t)); }, _a.classed = function (n, t) { if (arguments.length < 2) {
        if ("string" == typeof n) {
            var e = this.node(), r = (n = T(n)).length, u = -1;
            if (t = e.classList) {
                for (; ++u < r;)
                    if (!t.contains(n[u]))
                        return !1;
            }
            else
                for (t = e.getAttribute("class"); ++u < r;)
                    if (!L(n[u]).test(t))
                        return !1;
            return !0;
        }
        for (t in n)
            this.each(R(t, n[t]));
        return this;
    } return this.each(R(n, t)); }, _a.style = function (n, e, r) { var u = arguments.length; if (3 > u) {
        if ("string" != typeof n) {
            2 > u && (e = "");
            for (r in n)
                this.each(P(r, n[r], e));
            return this;
        }
        if (2 > u) {
            var i = this.node();
            return t(i).getComputedStyle(i, null).getPropertyValue(n);
        }
        r = "";
    } return this.each(P(n, e, r)); }, _a.property = function (n, t) { if (arguments.length < 2) {
        if ("string" == typeof n)
            return this.node()[n];
        for (t in n)
            this.each(U(t, n[t]));
        return this;
    } return this.each(U(n, t)); }, _a.text = function (n) { return arguments.length ? this.each("function" == typeof n ? function () { var t = n.apply(this, arguments); this.textContent = null == t ? "" : t; } : null == n ? function () { this.textContent = ""; } : function () { this.textContent = n; }) : this.node().textContent; }, _a.html = function (n) { return arguments.length ? this.each("function" == typeof n ? function () { var t = n.apply(this, arguments); this.innerHTML = null == t ? "" : t; } : null == n ? function () { this.innerHTML = ""; } : function () { this.innerHTML = n; }) : this.node().innerHTML; }, _a.append = function (n) { return n = j(n), this.select(function () { return this.appendChild(n.apply(this, arguments)); }); }, _a.insert = function (n, t) { return n = j(n), t = N(t), this.select(function () { return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null); }); }, _a.remove = function () { return this.each(F); }, _a.data = function (n, t) { function e(n, e) { var r, u, i, o = n.length, f = e.length, h = Math.min(o, f), g = new Array(f), p = new Array(f), v = new Array(o); if (t) {
        var d, m = new l, y = new Array(o);
        for (r = -1; ++r < o;)
            m.has(d = t.call(u = n[r], u.__data__, r)) ? v[r] = u : m.set(d, u), y[r] = d;
        for (r = -1; ++r < f;)
            (u = m.get(d = t.call(e, i = e[r], r))) ? u !== !0 && (g[r] = u, u.__data__ = i) : p[r] = H(i), m.set(d, !0);
        for (r = -1; ++r < o;)
            m.get(y[r]) !== !0 && (v[r] = n[r]);
    }
    else {
        for (r = -1; ++r < h;)
            u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = H(i);
        for (; f > r; ++r)
            p[r] = H(e[r]);
        for (; o > r; ++r)
            v[r] = n[r];
    } p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, a.push(p), c.push(g), s.push(v); } var r, u, i = -1, o = this.length; if (!arguments.length) {
        for (n = new Array(o = (r = this[0]).length); ++i < o;)
            (u = r[i]) && (n[i] = u.__data__);
        return n;
    } var a = Z([]), c = A([]), s = A([]); if ("function" == typeof n)
        for (; ++i < o;)
            e(r = this[i], n.call(r, r.parentNode.__data__, i));
    else
        for (; ++i < o;)
            e(r = this[i], n); return c.enter = function () { return a; }, c.exit = function () { return s; }, c; }, _a.datum = function (n) { return arguments.length ? this.property("__data__", n) : this.property("__data__"); }, _a.filter = function (n) { var t, e, r, u = []; "function" != typeof n && (n = O(n)); for (var i = 0, o = this.length; o > i; i++) {
        u.push(t = []), t.parentNode = (e = this[i]).parentNode;
        for (var a = 0, c = e.length; c > a; a++)
            (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
    } return A(u); }, _a.order = function () { for (var n = -1, t = this.length; ++n < t;)
        for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)
            (e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e); return this; }, _a.sort = function (n) { n = I.apply(this, arguments); for (var t = -1, e = this.length; ++t < e;)
        this[t].sort(n); return this.order(); }, _a.each = function (n) { return Y(this, function (t, e, r) { n.call(t, t.__data__, e, r); }); }, _a.call = function (n) { var t = ra(arguments); return n.apply(t[0] = this, t), this; }, _a.empty = function () { return !this.node(); }, _a.node = function () { for (var n = 0, t = this.length; t > n; n++)
        for (var e = this[n], r = 0, u = e.length; u > r; r++) {
            var i = e[r];
            if (i)
                return i;
        } return null; }, _a.size = function () { var n = 0; return Y(this, function () { ++n; }), n; };
    var Sa = [];
    ta.selection.enter = Z, ta.selection.enter.prototype = Sa, Sa.append = _a.append, Sa.empty = _a.empty, Sa.node = _a.node, Sa.call = _a.call, Sa.size = _a.size, Sa.select = function (n) { for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
        r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
        for (var l = -1, s = u.length; ++l < s;)
            (i = u[l]) ? (t.push(r[l] = e = n.call(u.parentNode, i.__data__, l, a)), e.__data__ = i.__data__) : t.push(null);
    } return A(o); }, Sa.insert = function (n, t) { return arguments.length < 2 && (t = V(this)), _a.insert.call(this, n, t); }, ta.select = function (t) { var e; return "string" == typeof t ? (e = [Ma(t, ua)], e.parentNode = ua.documentElement) : (e = [t], e.parentNode = n(t)), A([e]); }, ta.selectAll = function (n) { var t; return "string" == typeof n ? (t = ra(xa(n, ua)), t.parentNode = ua.documentElement) : (t = n, t.parentNode = null), A([t]); }, _a.on = function (n, t, e) { var r = arguments.length; if (3 > r) {
        if ("string" != typeof n) {
            2 > r && (t = !1);
            for (e in n)
                this.each(X(e, n[e], t));
            return this;
        }
        if (2 > r)
            return (r = this.node()["__on" + n]) && r._;
        e = !1;
    } return this.each(X(n, t, e)); };
    var ka = ta.map({ mouseenter: "mouseover", mouseleave: "mouseout" });
    ua && ka.forEach(function (n) { "on" + n in ua && ka.remove(n); });
    var Ea, Aa = 0;
    ta.mouse = function (n) { return J(n, k()); };
    var Na = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    ta.touch = function (n, t, e) { if (arguments.length < 3 && (e = t, t = k().changedTouches), t)
        for (var r, u = 0, i = t.length; i > u; ++u)
            if ((r = t[u]).identifier === e)
                return J(n, r); }, ta.behavior.drag = function () { function n() { this.on("mousedown.drag", i).on("touchstart.drag", o); } function e(n, t, e, i, o) { return function () { function a() { var n, e, r = t(h, v); r && (n = r[0] - M[0], e = r[1] - M[1], p |= n | e, M = r, g({ type: "drag", x: r[0] + l[0], y: r[1] + l[1], dx: n, dy: e })); } function c() { t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && ta.event.target === f), g({ type: "dragend" })); } var l, s = this, f = ta.event.target, h = s.parentNode, g = r.of(s, arguments), p = 0, v = n(), d = ".drag" + (null == v ? "" : "-" + v), m = ta.select(e(f)).on(i + d, a).on(o + d, c), y = W(f), M = t(h, v); u ? (l = u.apply(s, arguments), l = [l.x - M[0], l.y - M[1]]) : l = [0, 0], g({ type: "dragstart" }); }; } var r = E(n, "drag", "dragstart", "dragend"), u = null, i = e(b, ta.mouse, t, "mousemove", "mouseup"), o = e(G, ta.touch, y, "touchmove", "touchend"); return n.origin = function (t) { return arguments.length ? (u = t, n) : u; }, ta.rebind(n, r, "on"); }, ta.touches = function (n, t) { return arguments.length < 2 && (t = k().touches), t ? ra(t).map(function (t) { var e = J(n, t); return e.identifier = t.identifier, e; }) : []; };
    var Ca = 1e-6, za = Ca * Ca, qa = Math.PI, La = 2 * qa, Ta = La - Ca, Ra = qa / 2, Da = qa / 180, Pa = 180 / qa, Ua = Math.SQRT2, ja = 2, Fa = 4;
    ta.interpolateZoom = function (n, t) { function e(n) { var t = n * y; if (m) {
        var e = rt(v), o = i / (ja * h) * (e * ut(Ua * t + v) - et(v));
        return [r + o * l, u + o * s, i * e / rt(Ua * t + v)];
    } return [r + n * l, u + n * s, i * Math.exp(Ua * t)]; } var r = n[0], u = n[1], i = n[2], o = t[0], a = t[1], c = t[2], l = o - r, s = a - u, f = l * l + s * s, h = Math.sqrt(f), g = (c * c - i * i + Fa * f) / (2 * i * ja * h), p = (c * c - i * i - Fa * f) / (2 * c * ja * h), v = Math.log(Math.sqrt(g * g + 1) - g), d = Math.log(Math.sqrt(p * p + 1) - p), m = d - v, y = (m || Math.log(c / i)) / Ua; return e.duration = 1e3 * y, e; }, ta.behavior.zoom = function () { function n(n) { n.on(q, f).on(Oa + ".zoom", g).on("dblclick.zoom", p).on(R, h); } function e(n) { return [(n[0] - k.x) / k.k, (n[1] - k.y) / k.k]; } function r(n) { return [n[0] * k.k + k.x, n[1] * k.k + k.y]; } function u(n) { k.k = Math.max(N[0], Math.min(N[1], n)); } function i(n, t) { t = r(t), k.x += n[0] - t[0], k.y += n[1] - t[1]; } function o(t, e, r, o) { t.__chart__ = { x: k.x, y: k.y, k: k.k }, u(Math.pow(2, o)), i(d = e, r), t = ta.select(t), C > 0 && (t = t.transition().duration(C)), t.call(n.event); } function a() { b && b.domain(x.range().map(function (n) { return (n - k.x) / k.k; }).map(x.invert)), w && w.domain(_.range().map(function (n) { return (n - k.y) / k.k; }).map(_.invert)); } function c(n) { z++ || n({ type: "zoomstart" }); } function l(n) { a(), n({ type: "zoom", scale: k.k, translate: [k.x, k.y] }); } function s(n) { --z || n({ type: "zoomend" }), d = null; } function f() { function n() { f = 1, i(ta.mouse(u), g), l(a); } function r() { h.on(L, null).on(T, null), p(f && ta.event.target === o), s(a); } var u = this, o = ta.event.target, a = D.of(u, arguments), f = 0, h = ta.select(t(u)).on(L, n).on(T, r), g = e(ta.mouse(u)), p = W(u); Dl.call(u), c(a); } function h() { function n() { var n = ta.touches(p); return g = k.k, n.forEach(function (n) { n.identifier in d && (d[n.identifier] = e(n)); }), n; } function t() { var t = ta.event.target; ta.select(t).on(x, r).on(b, a), _.push(t); for (var e = ta.event.changedTouches, u = 0, i = e.length; i > u; ++u)
        d[e[u].identifier] = null; var c = n(), l = Date.now(); if (1 === c.length) {
        if (500 > l - M) {
            var s = c[0];
            o(p, s, d[s.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), S();
        }
        M = l;
    }
    else if (c.length > 1) {
        var s = c[0], f = c[1], h = s[0] - f[0], g = s[1] - f[1];
        m = h * h + g * g;
    } } function r() { var n, t, e, r, o = ta.touches(p); Dl.call(p); for (var a = 0, c = o.length; c > a; ++a, r = null)
        if (e = o[a], r = d[e.identifier]) {
            if (t)
                break;
            n = e, t = r;
        } if (r) {
        var s = (s = e[0] - n[0]) * s + (s = e[1] - n[1]) * s, f = m && Math.sqrt(s / m);
        n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2], u(f * g);
    } M = null, i(n, t), l(v); } function a() { if (ta.event.touches.length) {
        for (var t = ta.event.changedTouches, e = 0, r = t.length; r > e; ++e)
            delete d[t[e].identifier];
        for (var u in d)
            return void n();
    } ta.selectAll(_).on(y, null), w.on(q, f).on(R, h), E(), s(v); } var g, p = this, v = D.of(p, arguments), d = {}, m = 0, y = ".zoom-" + ta.event.changedTouches[0].identifier, x = "touchmove" + y, b = "touchend" + y, _ = [], w = ta.select(p), E = W(p); t(), c(v), w.on(q, null).on(R, t); } function g() { var n = D.of(this, arguments); y ? clearTimeout(y) : (v = e(d = m || ta.mouse(this)), Dl.call(this), c(n)), y = setTimeout(function () { y = null, s(n); }, 50), S(), u(Math.pow(2, .002 * Ha()) * k.k), i(d, v), l(n); } function p() { var n = ta.mouse(this), t = Math.log(k.k) / Math.LN2; o(this, n, e(n), ta.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1); } var v, d, m, y, M, x, b, _, w, k = { x: 0, y: 0, k: 1 }, A = [960, 500], N = Ia, C = 250, z = 0, q = "mousedown.zoom", L = "mousemove.zoom", T = "mouseup.zoom", R = "touchstart.zoom", D = E(n, "zoomstart", "zoom", "zoomend"); return Oa || (Oa = "onwheel" in ua ? (Ha = function () { return -ta.event.deltaY * (ta.event.deltaMode ? 120 : 1); }, "wheel") : "onmousewheel" in ua ? (Ha = function () { return ta.event.wheelDelta; }, "mousewheel") : (Ha = function () { return -ta.event.detail; }, "MozMousePixelScroll")), n.event = function (n) { n.each(function () { var n = D.of(this, arguments), t = k; Tl ? ta.select(this).transition().each("start.zoom", function () { k = this.__chart__ || { x: 0, y: 0, k: 1 }, c(n); }).tween("zoom:zoom", function () { var e = A[0], r = A[1], u = d ? d[0] : e / 2, i = d ? d[1] : r / 2, o = ta.interpolateZoom([(u - k.x) / k.k, (i - k.y) / k.k, e / k.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]); return function (t) { var r = o(t), a = e / r[2]; this.__chart__ = k = { x: u - r[0] * a, y: i - r[1] * a, k: a }, l(n); }; }).each("interrupt.zoom", function () { s(n); }).each("end.zoom", function () { s(n); }) : (this.__chart__ = k, c(n), l(n), s(n)); }); }, n.translate = function (t) { return arguments.length ? (k = { x: +t[0], y: +t[1], k: k.k }, a(), n) : [k.x, k.y]; }, n.scale = function (t) { return arguments.length ? (k = { x: k.x, y: k.y, k: +t }, a(), n) : k.k; }, n.scaleExtent = function (t) { return arguments.length ? (N = null == t ? Ia : [+t[0], +t[1]], n) : N; }, n.center = function (t) { return arguments.length ? (m = t && [+t[0], +t[1]], n) : m; }, n.size = function (t) { return arguments.length ? (A = t && [+t[0], +t[1]], n) : A; }, n.duration = function (t) { return arguments.length ? (C = +t, n) : C; }, n.x = function (t) { return arguments.length ? (b = t, x = t.copy(), k = { x: 0, y: 0, k: 1 }, n) : b; }, n.y = function (t) { return arguments.length ? (w = t, _ = t.copy(), k = { x: 0, y: 0, k: 1 }, n) : w; }, ta.rebind(n, D, "on"); };
    var Ha, Oa, Ia = [0, 1 / 0];
    ta.color = ot, ot.prototype.toString = function () { return this.rgb() + ""; }, ta.hsl = at;
    var Ya = at.prototype = new ot;
    Ya.brighter = function (n) { return n = Math.pow(.7, arguments.length ? n : 1), new at(this.h, this.s, this.l / n); }, Ya.darker = function (n) { return n = Math.pow(.7, arguments.length ? n : 1), new at(this.h, this.s, n * this.l); }, Ya.rgb = function () { return ct(this.h, this.s, this.l); }, ta.hcl = lt;
    var Za = lt.prototype = new ot;
    Za.brighter = function (n) { return new lt(this.h, this.c, Math.min(100, this.l + Va * (arguments.length ? n : 1))); }, Za.darker = function (n) { return new lt(this.h, this.c, Math.max(0, this.l - Va * (arguments.length ? n : 1))); }, Za.rgb = function () { return st(this.h, this.c, this.l).rgb(); }, ta.lab = ft;
    var Va = 18, Xa = .95047, $a = 1, Ba = 1.08883, Wa = ft.prototype = new ot;
    Wa.brighter = function (n) { return new ft(Math.min(100, this.l + Va * (arguments.length ? n : 1)), this.a, this.b); }, Wa.darker = function (n) { return new ft(Math.max(0, this.l - Va * (arguments.length ? n : 1)), this.a, this.b); }, Wa.rgb = function () { return ht(this.l, this.a, this.b); }, ta.rgb = mt;
    var Ja = mt.prototype = new ot;
    Ja.brighter = function (n) { n = Math.pow(.7, arguments.length ? n : 1); var t = this.r, e = this.g, r = this.b, u = 30; return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), new mt(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new mt(u, u, u); }, Ja.darker = function (n) { return n = Math.pow(.7, arguments.length ? n : 1), new mt(n * this.r, n * this.g, n * this.b); }, Ja.hsl = function () { return _t(this.r, this.g, this.b); }, Ja.toString = function () { return "#" + xt(this.r) + xt(this.g) + xt(this.b); };
    var Ga = ta.map({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 });
    Ga.forEach(function (n, t) { Ga.set(n, yt(t)); }), ta.functor = Et, ta.xhr = At(y), ta.dsv = function (n, t) { function e(n, e, i) { arguments.length < 3 && (i = e, e = null); var o = Nt(n, t, null == e ? r : u(e), i); return o.row = function (n) { return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e; }, o; } function r(n) { return e.parse(n.responseText); } function u(n) { return function (t) { return e.parse(t.responseText, n); }; } function i(t) { return t.map(o).join(n); } function o(n) { return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n; } var a = new RegExp('["' + n + "\n]"), c = n.charCodeAt(0); return e.parse = function (n, t) { var r; return e.parseRows(n, function (n, e) { if (r)
        return r(n, e - 1); var u = new Function("d", "return {" + n.map(function (n, t) { return JSON.stringify(n) + ": d[" + t + "]"; }).join(",") + "}"); r = t ? function (n, e) { return t(u(n), e); } : u; }); }, e.parseRows = function (n, t) { function e() { if (s >= l)
        return o; if (u)
        return u = !1, i; var t = s; if (34 === n.charCodeAt(t)) {
        for (var e = t; e++ < l;)
            if (34 === n.charCodeAt(e)) {
                if (34 !== n.charCodeAt(e + 1))
                    break;
                ++e;
            }
        s = e + 2;
        var r = n.charCodeAt(e + 1);
        return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++s) : 10 === r && (u = !0), n.slice(t + 1, e).replace(/""/g, '"');
    } for (; l > s;) {
        var r = n.charCodeAt(s++), a = 1;
        if (10 === r)
            u = !0;
        else if (13 === r)
            u = !0, 10 === n.charCodeAt(s) && (++s, ++a);
        else if (r !== c)
            continue;
        return n.slice(t, s - a);
    } return n.slice(t); } for (var r, u, i = {}, o = {}, a = [], l = n.length, s = 0, f = 0; (r = e()) !== o;) {
        for (var h = []; r !== i && r !== o;)
            h.push(r), r = e();
        t && null == (h = t(h, f++)) || a.push(h);
    } return a; }, e.format = function (t) { if (Array.isArray(t[0]))
        return e.formatRows(t); var r = new m, u = []; return t.forEach(function (n) { for (var t in n)
        r.has(t) || u.push(r.add(t)); }), [u.map(o).join(n)].concat(t.map(function (t) { return u.map(function (n) { return o(t[n]); }).join(n); })).join("\n"); }, e.formatRows = function (n) { return n.map(i).join("\n"); }, e; }, ta.csv = ta.dsv(",", "text/csv"), ta.tsv = ta.dsv("	", "text/tab-separated-values");
    var Ka, Qa, nc, tc, ec, rc = this[x(this, "requestAnimationFrame")] || function (n) { setTimeout(n, 17); };
    ta.timer = function (n, t, e) { var r = arguments.length; 2 > r && (t = 0), 3 > r && (e = Date.now()); var u = e + t, i = { c: n, t: u, f: !1, n: null }; Qa ? Qa.n = i : Ka = i, Qa = i, nc || (tc = clearTimeout(tc), nc = 1, rc(qt)); }, ta.timer.flush = function () { Lt(), Tt(); }, ta.round = function (n, t) { return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n); };
    var uc = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
    ta.formatPrefix = function (n, t) { var e = 0; return n && (0 > n && (n *= -1), t && (n = ta.round(n, Rt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), uc[8 + e / 3]; };
    var ic = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, oc = ta.map({ b: function (n) { return n.toString(2); }, c: function (n) { return String.fromCharCode(n); }, o: function (n) { return n.toString(8); }, x: function (n) { return n.toString(16); }, X: function (n) { return n.toString(16).toUpperCase(); }, g: function (n, t) { return n.toPrecision(t); }, e: function (n, t) { return n.toExponential(t); }, f: function (n, t) { return n.toFixed(t); }, r: function (n, t) { return (n = ta.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t)))); } }), ac = ta.time = {}, cc = Date;
    jt.prototype = { getDate: function () { return this._.getUTCDate(); }, getDay: function () { return this._.getUTCDay(); }, getFullYear: function () { return this._.getUTCFullYear(); }, getHours: function () { return this._.getUTCHours(); }, getMilliseconds: function () { return this._.getUTCMilliseconds(); }, getMinutes: function () { return this._.getUTCMinutes(); }, getMonth: function () { return this._.getUTCMonth(); }, getSeconds: function () { return this._.getUTCSeconds(); }, getTime: function () { return this._.getTime(); }, getTimezoneOffset: function () { return 0; }, valueOf: function () { return this._.valueOf(); }, setDate: function () { lc.setUTCDate.apply(this._, arguments); }, setDay: function () { lc.setUTCDay.apply(this._, arguments); }, setFullYear: function () { lc.setUTCFullYear.apply(this._, arguments); }, setHours: function () { lc.setUTCHours.apply(this._, arguments); }, setMilliseconds: function () { lc.setUTCMilliseconds.apply(this._, arguments); }, setMinutes: function () { lc.setUTCMinutes.apply(this._, arguments); }, setMonth: function () { lc.setUTCMonth.apply(this._, arguments); }, setSeconds: function () { lc.setUTCSeconds.apply(this._, arguments); }, setTime: function () { lc.setTime.apply(this._, arguments); } };
    var lc = Date.prototype;
    ac.year = Ft(function (n) { return n = ac.day(n), n.setMonth(0, 1), n; }, function (n, t) { n.setFullYear(n.getFullYear() + t); }, function (n) { return n.getFullYear(); }), ac.years = ac.year.range, ac.years.utc = ac.year.utc.range, ac.day = Ft(function (n) { var t = new cc(2e3, 0); return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t; }, function (n, t) { n.setDate(n.getDate() + t); }, function (n) { return n.getDate() - 1; }), ac.days = ac.day.range, ac.days.utc = ac.day.utc.range, ac.dayOfYear = function (n) { var t = ac.year(n); return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5); }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (n, t) { t = 7 - t; var e = ac[n] = Ft(function (n) { return (n = ac.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n; }, function (n, t) { n.setDate(n.getDate() + 7 * Math.floor(t)); }, function (n) { var e = ac.year(n).getDay(); return Math.floor((ac.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t); }); ac[n + "s"] = e.range, ac[n + "s"].utc = e.utc.range, ac[n + "OfYear"] = function (n) { var e = ac.year(n).getDay(); return Math.floor((ac.dayOfYear(n) + (e + t) % 7) / 7); }; }), ac.week = ac.sunday, ac.weeks = ac.sunday.range, ac.weeks.utc = ac.sunday.utc.range, ac.weekOfYear = ac.sundayOfYear;
    var sc = { "-": "", _: " ", 0: "0" }, fc = /^\s*\d+/, hc = /^%/;
    ta.locale = function (n) { return { numberFormat: Pt(n), timeFormat: Ot(n) }; };
    var gc = ta.locale({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], dateTime: "%a %b %e %X %Y", date: "%m/%d/%Y", time: "%H:%M:%S", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
    ta.format = gc.numberFormat, ta.geo = {}, ce.prototype = { s: 0, t: 0, add: function (n) {
            le(n, this.t, pc), le(pc.s, this.s, this), this.s ? this.t += pc.t : this.s = pc.t;
        }, reset: function () { this.s = this.t = 0; }, valueOf: function () { return this.s; } };
    var pc = new ce;
    ta.geo.stream = function (n, t) { n && vc.hasOwnProperty(n.type) ? vc[n.type](n, t) : se(n, t); };
    var vc = { Feature: function (n, t) { se(n.geometry, t); }, FeatureCollection: function (n, t) { for (var e = n.features, r = -1, u = e.length; ++r < u;)
            se(e[r].geometry, t); } }, dc = { Sphere: function (n, t) { t.sphere(); }, Point: function (n, t) { n = n.coordinates, t.point(n[0], n[1], n[2]); }, MultiPoint: function (n, t) { for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)
            n = e[r], t.point(n[0], n[1], n[2]); }, LineString: function (n, t) { fe(n.coordinates, t, 0); }, MultiLineString: function (n, t) { for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)
            fe(e[r], t, 0); }, Polygon: function (n, t) { he(n.coordinates, t); }, MultiPolygon: function (n, t) { for (var e = n.coordinates, r = -1, u = e.length; ++r < u;)
            he(e[r], t); }, GeometryCollection: function (n, t) { for (var e = n.geometries, r = -1, u = e.length; ++r < u;)
            se(e[r], t); } };
    ta.geo.area = function (n) { return mc = 0, ta.geo.stream(n, Mc), mc; };
    var mc, yc = new ce, Mc = { sphere: function () { mc += 4 * qa; }, point: b, lineStart: b, lineEnd: b, polygonStart: function () { yc.reset(), Mc.lineStart = ge; }, polygonEnd: function () { var n = 2 * yc; mc += 0 > n ? 4 * qa + n : n, Mc.lineStart = Mc.lineEnd = Mc.point = b; } };
    ta.geo.bounds = function () { function n(n, t) { M.push(x = [s = n, h = n]), f > t && (f = t), t > g && (g = t); } function t(t, e) { var r = pe([t * Da, e * Da]); if (m) {
        var u = de(m, r), i = [u[1], -u[0], 0], o = de(i, u);
        Me(o), o = xe(o);
        var c = t - p, l = c > 0 ? 1 : -1, v = o[0] * Pa * l, d = ga(c) > 180;
        if (d ^ (v > l * p && l * t > v)) {
            var y = o[1] * Pa;
            y > g && (g = y);
        }
        else if (v = (v + 360) % 360 - 180, d ^ (v > l * p && l * t > v)) {
            var y = -o[1] * Pa;
            f > y && (f = y);
        }
        else
            f > e && (f = e), e > g && (g = e);
        d ? p > t ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t) : h >= s ? (s > t && (s = t), t > h && (h = t)) : t > p ? a(s, t) > a(s, h) && (h = t) : a(t, h) > a(s, h) && (s = t);
    }
    else
        n(t, e); m = r, p = t; } function e() { b.point = t; } function r() { x[0] = s, x[1] = h, b.point = n, m = null; } function u(n, e) { if (m) {
        var r = n - p;
        y += ga(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
    }
    else
        v = n, d = e; Mc.point(n, e), t(n, e); } function i() { Mc.lineStart(); } function o() { u(v, d), Mc.lineEnd(), ga(y) > Ca && (s = -(h = 180)), x[0] = s, x[1] = h, m = null; } function a(n, t) { return (t -= n) < 0 ? t + 360 : t; } function c(n, t) { return n[0] - t[0]; } function l(n, t) { return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n; } var s, f, h, g, p, v, d, m, y, M, x, b = { point: n, lineStart: e, lineEnd: r, polygonStart: function () { b.point = u, b.lineStart = i, b.lineEnd = o, y = 0, Mc.polygonStart(); }, polygonEnd: function () { Mc.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > yc ? (s = -(h = 180), f = -(g = 90)) : y > Ca ? g = 90 : -Ca > y && (f = -90), x[0] = s, x[1] = h; } }; return function (n) { g = h = -(s = f = 1 / 0), M = [], ta.geo.stream(n, b); var t = M.length; if (t) {
        M.sort(c);
        for (var e, r = 1, u = M[0], i = [u]; t > r; ++r)
            e = M[r], l(e[0], u) || l(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
        for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r)
            e = i[r], (o = a(u[1], e[0])) > p && (p = o, s = e[0], h = u[1]);
    } return M = x = null, 1 / 0 === s || 1 / 0 === f ? [[0 / 0, 0 / 0], [0 / 0, 0 / 0]] : [[s, f], [h, g]]; }; }(), ta.geo.centroid = function (n) { xc = bc = _c = wc = Sc = kc = Ec = Ac = Nc = Cc = zc = 0, ta.geo.stream(n, qc); var t = Nc, e = Cc, r = zc, u = t * t + e * e + r * r; return za > u && (t = kc, e = Ec, r = Ac, Ca > bc && (t = _c, e = wc, r = Sc), u = t * t + e * e + r * r, za > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Pa, tt(r / Math.sqrt(u)) * Pa]; };
    var xc, bc, _c, wc, Sc, kc, Ec, Ac, Nc, Cc, zc, qc = { sphere: b, point: _e, lineStart: Se, lineEnd: ke, polygonStart: function () { qc.lineStart = Ee; }, polygonEnd: function () { qc.lineStart = Se; } }, Lc = Le(Ne, Pe, je, [-qa, -qa / 2]), Tc = 1e9;
    ta.geo.clipExtent = function () { var n, t, e, r, u, i, o = { stream: function (n) { return u && (u.valid = !1), u = i(n), u.valid = !0, u; }, extent: function (a) { return arguments.length ? (i = Ie(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [[n, t], [e, r]]; } }; return o.extent([[0, 0], [960, 500]]); }, (ta.geo.conicEqualArea = function () { return Ye(Ze); }).raw = Ze, ta.geo.albers = function () { return ta.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070); }, ta.geo.albersUsa = function () { function n(n) { var i = n[0], o = n[1]; return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t; } var t, e, r, u, i = ta.geo.albers(), o = ta.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a = ta.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), c = { point: function (n, e) { t = [n, e]; } }; return n.invert = function (n) { var t = i.scale(), e = i.translate(), r = (n[0] - e[0]) / t, u = (n[1] - e[1]) / t; return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n); }, n.stream = function (n) { var t = i.stream(n), e = o.stream(n), r = a.stream(n); return { point: function (n, u) { t.point(n, u), e.point(n, u), r.point(n, u); }, sphere: function () { t.sphere(), e.sphere(), r.sphere(); }, lineStart: function () { t.lineStart(), e.lineStart(), r.lineStart(); }, lineEnd: function () { t.lineEnd(), e.lineEnd(), r.lineEnd(); }, polygonStart: function () { t.polygonStart(), e.polygonStart(), r.polygonStart(); }, polygonEnd: function () { t.polygonEnd(), e.polygonEnd(), r.polygonEnd(); } }; }, n.precision = function (t) { return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision(); }, n.scale = function (t) { return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale(); }, n.translate = function (t) { if (!arguments.length)
        return i.translate(); var l = i.scale(), s = +t[0], f = +t[1]; return e = i.translate(t).clipExtent([[s - .455 * l, f - .238 * l], [s + .455 * l, f + .238 * l]]).stream(c).point, r = o.translate([s - .307 * l, f + .201 * l]).clipExtent([[s - .425 * l + Ca, f + .12 * l + Ca], [s - .214 * l - Ca, f + .234 * l - Ca]]).stream(c).point, u = a.translate([s - .205 * l, f + .212 * l]).clipExtent([[s - .214 * l + Ca, f + .166 * l + Ca], [s - .115 * l - Ca, f + .234 * l - Ca]]).stream(c).point, n; }, n.scale(1070); };
    var Rc, Dc, Pc, Uc, jc, Fc, Hc = { point: b, lineStart: b, lineEnd: b, polygonStart: function () { Dc = 0, Hc.lineStart = Ve; }, polygonEnd: function () { Hc.lineStart = Hc.lineEnd = Hc.point = b, Rc += ga(Dc / 2); } }, Oc = { point: Xe, lineStart: b, lineEnd: b, polygonStart: b, polygonEnd: b }, Ic = { point: We, lineStart: Je, lineEnd: Ge, polygonStart: function () { Ic.lineStart = Ke; }, polygonEnd: function () { Ic.point = We, Ic.lineStart = Je, Ic.lineEnd = Ge; } };
    ta.geo.path = function () { function n(n) { return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), ta.geo.stream(n, o)), i.result(); } function t() { return o = null, n; } var e, r, u, i, o, a = 4.5; return n.area = function (n) { return Rc = 0, ta.geo.stream(n, u(Hc)), Rc; }, n.centroid = function (n) { return _c = wc = Sc = kc = Ec = Ac = Nc = Cc = zc = 0, ta.geo.stream(n, u(Ic)), zc ? [Nc / zc, Cc / zc] : Ac ? [kc / Ac, Ec / Ac] : Sc ? [_c / Sc, wc / Sc] : [0 / 0, 0 / 0]; }, n.bounds = function (n) { return jc = Fc = -(Pc = Uc = 1 / 0), ta.geo.stream(n, u(Oc)), [[Pc, Uc], [jc, Fc]]; }, n.projection = function (n) { return arguments.length ? (u = (e = n) ? n.stream || tr(n) : y, t()) : e; }, n.context = function (n) { return arguments.length ? (i = null == (r = n) ? new $e : new Qe(n), "function" != typeof a && i.pointRadius(a), t()) : r; }, n.pointRadius = function (t) { return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a; }, n.projection(ta.geo.albersUsa()).context(null); }, ta.geo.transform = function (n) { return { stream: function (t) { var e = new er(t); for (var r in n)
            e[r] = n[r]; return e; } }; }, er.prototype = { point: function (n, t) { this.stream.point(n, t); }, sphere: function () { this.stream.sphere(); }, lineStart: function () { this.stream.lineStart(); }, lineEnd: function () { this.stream.lineEnd(); }, polygonStart: function () { this.stream.polygonStart(); }, polygonEnd: function () { this.stream.polygonEnd(); } }, ta.geo.projection = ur, ta.geo.projectionMutator = ir, (ta.geo.equirectangular = function () { return ur(ar); }).raw = ar.invert = ar, ta.geo.rotation = function (n) { function t(t) { return t = n(t[0] * Da, t[1] * Da), t[0] *= Pa, t[1] *= Pa, t; } return n = lr(n[0] % 360 * Da, n[1] * Da, n.length > 2 ? n[2] * Da : 0), t.invert = function (t) { return t = n.invert(t[0] * Da, t[1] * Da), t[0] *= Pa, t[1] *= Pa, t; }, t; }, cr.invert = ar, ta.geo.circle = function () { function n() { var n = "function" == typeof r ? r.apply(this, arguments) : r, t = lr(-n[0] * Da, -n[1] * Da, 0).invert, u = []; return e(null, null, 1, { point: function (n, e) { u.push(n = t(n, e)), n[0] *= Pa, n[1] *= Pa; } }), { type: "Polygon", coordinates: [u] }; } var t, e, r = [0, 0], u = 6; return n.origin = function (t) { return arguments.length ? (r = t, n) : r; }, n.angle = function (r) { return arguments.length ? (e = gr((t = +r) * Da, u * Da), n) : t; }, n.precision = function (r) { return arguments.length ? (e = gr(t * Da, (u = +r) * Da), n) : u; }, n.angle(90); }, ta.geo.distance = function (n, t) { var e, r = (t[0] - n[0]) * Da, u = n[1] * Da, i = t[1] * Da, o = Math.sin(r), a = Math.cos(r), c = Math.sin(u), l = Math.cos(u), s = Math.sin(i), f = Math.cos(i); return Math.atan2(Math.sqrt((e = f * o) * e + (e = l * s - c * f * a) * e), c * s + l * f * a); }, ta.geo.graticule = function () { function n() { return { type: "MultiLineString", coordinates: t() }; } function t() { return ta.range(Math.ceil(i / d) * d, u, d).map(h).concat(ta.range(Math.ceil(l / m) * m, c, m).map(g)).concat(ta.range(Math.ceil(r / p) * p, e, p).filter(function (n) { return ga(n % d) > Ca; }).map(s)).concat(ta.range(Math.ceil(a / v) * v, o, v).filter(function (n) { return ga(n % m) > Ca; }).map(f)); } var e, r, u, i, o, a, c, l, s, f, h, g, p = 10, v = p, d = 90, m = 360, y = 2.5; return n.lines = function () { return t().map(function (n) { return { type: "LineString", coordinates: n }; }); }, n.outline = function () { return { type: "Polygon", coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(l).reverse().slice(1))] }; }, n.extent = function (t) { return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent(); }, n.majorExtent = function (t) { return arguments.length ? (i = +t[0][0], u = +t[1][0], l = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), l > c && (t = l, l = c, c = t), n.precision(y)) : [[i, l], [u, c]]; }, n.minorExtent = function (t) { return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [[r, a], [e, o]]; }, n.step = function (t) { return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep(); }, n.majorStep = function (t) { return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]; }, n.minorStep = function (t) { return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]; }, n.precision = function (t) { return arguments.length ? (y = +t, s = vr(a, o, 90), f = dr(r, e, y), h = vr(l, c, 90), g = dr(i, u, y), n) : y; }, n.majorExtent([[-180, -90 + Ca], [180, 90 - Ca]]).minorExtent([[-180, -80 - Ca], [180, 80 + Ca]]); }, ta.geo.greatArc = function () { function n() { return { type: "LineString", coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)] }; } var t, e, r = mr, u = yr; return n.distance = function () { return ta.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments)); }, n.source = function (e) { return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r; }, n.target = function (t) { return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u; }, n.precision = function () { return arguments.length ? n : 0; }, n; }, ta.geo.interpolate = function (n, t) { return Mr(n[0] * Da, n[1] * Da, t[0] * Da, t[1] * Da); }, ta.geo.length = function (n) { return Yc = 0, ta.geo.stream(n, Zc), Yc; };
    var Yc, Zc = { sphere: b, point: b, lineStart: xr, lineEnd: b, polygonStart: b, polygonEnd: b }, Vc = br(function (n) { return Math.sqrt(2 / (1 + n)); }, function (n) { return 2 * Math.asin(n / 2); });
    (ta.geo.azimuthalEqualArea = function () { return ur(Vc); }).raw = Vc;
    var Xc = br(function (n) { var t = Math.acos(n); return t && t / Math.sin(t); }, y);
    (ta.geo.azimuthalEquidistant = function () { return ur(Xc); }).raw = Xc, (ta.geo.conicConformal = function () { return Ye(_r); }).raw = _r, (ta.geo.conicEquidistant = function () { return Ye(wr); }).raw = wr;
    var $c = br(function (n) { return 1 / n; }, Math.atan);
    (ta.geo.gnomonic = function () { return ur($c); }).raw = $c, Sr.invert = function (n, t) { return [n, 2 * Math.atan(Math.exp(t)) - Ra]; }, (ta.geo.mercator = function () { return kr(Sr); }).raw = Sr;
    var Bc = br(function () { return 1; }, Math.asin);
    (ta.geo.orthographic = function () { return ur(Bc); }).raw = Bc;
    var Wc = br(function (n) { return 1 / (1 + n); }, function (n) { return 2 * Math.atan(n); });
    (ta.geo.stereographic = function () { return ur(Wc); }).raw = Wc, Er.invert = function (n, t) { return [-t, 2 * Math.atan(Math.exp(n)) - Ra]; }, (ta.geo.transverseMercator = function () { var n = kr(Er), t = n.center, e = n.rotate; return n.center = function (n) { return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]]); }, n.rotate = function (n) { return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90]); }, e([0, 0, 90]); }).raw = Er, ta.geom = {}, ta.geom.hull = function (n) { function t(n) { if (n.length < 3)
        return []; var t, u = Et(e), i = Et(r), o = n.length, a = [], c = []; for (t = 0; o > t; t++)
        a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]); for (a.sort(zr), t = 0; o > t; t++)
        c.push([a[t][0], -a[t][1]]); var l = Cr(a), s = Cr(c), f = s[0] === l[0], h = s[s.length - 1] === l[l.length - 1], g = []; for (t = l.length - 1; t >= 0; --t)
        g.push(n[a[l[t]][2]]); for (t = +f; t < s.length - h; ++t)
        g.push(n[a[s[t]][2]]); return g; } var e = Ar, r = Nr; return arguments.length ? t(n) : (t.x = function (n) { return arguments.length ? (e = n, t) : e; }, t.y = function (n) { return arguments.length ? (r = n, t) : r; }, t); }, ta.geom.polygon = function (n) { return ya(n, Jc), n; };
    var Jc = ta.geom.polygon.prototype = [];
    Jc.area = function () { for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;)
        n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1]; return .5 * u; }, Jc.centroid = function (n) { var t, e, r = -1, u = this.length, i = 0, o = 0, a = this[u - 1]; for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;)
        t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e; return [i * n, o * n]; }, Jc.clip = function (n) { for (var t, e, r, u, i, o, a = Tr(n), c = -1, l = this.length - Tr(this), s = this[l - 1]; ++c < l;) {
        for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;)
            o = t[e], qr(o, s, u) ? (qr(i, s, u) || n.push(Lr(i, o, s, u)), n.push(o)) : qr(i, s, u) && n.push(Lr(i, o, s, u)), i = o;
        a && n.push(n[0]), s = u;
    } return n; };
    var Gc, Kc, Qc, nl, tl, el = [], rl = [];
    Or.prototype.prepare = function () { for (var n, t = this.edges, e = t.length; e--;)
        n = t[e].edge, n.b && n.a || t.splice(e, 1); return t.sort(Yr), t.length; }, Qr.prototype = { start: function () { return this.edge.l === this.site ? this.edge.a : this.edge.b; }, end: function () { return this.edge.l === this.site ? this.edge.b : this.edge.a; } }, nu.prototype = { insert: function (n, t) { var e, r, u; if (n) {
            if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                for (n = n.R; n.L;)
                    n = n.L;
                n.L = t;
            }
            else
                n.R = t;
            e = n;
        }
        else
            this._ ? (n = uu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null); for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;)
            r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (eu(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ru(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (ru(this, e), n = e, e = n.U), e.C = !1, r.C = !0, eu(this, r))), e = n.U; this._.C = !1; }, remove: function (n) { n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null; var t, e, r, u = n.U, i = n.L, o = n.R; if (e = i ? o ? uu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
            if (n && n.C)
                return void (n.C = !1);
            do {
                if (n === this._)
                    break;
                if (n === u.L) {
                    if (t = u.R, t.C && (t.C = !1, u.C = !0, eu(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
                        t.R && t.R.C || (t.L.C = !1, t.C = !0, ru(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, eu(this, u), n = this._;
                        break;
                    }
                }
                else if (t = u.L, t.C && (t.C = !1, u.C = !0, ru(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
                    t.L && t.L.C || (t.R.C = !1, t.C = !0, eu(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, ru(this, u), n = this._;
                    break;
                }
                t.C = !0, n = u, u = u.U;
            } while (!n.C);
            n && (n.C = !1);
        } } }, ta.geom.voronoi = function (n) { function t(n) { var t = new Array(n.length), r = a[0][0], u = a[0][1], i = a[1][0], o = a[1][1]; return iu(e(n), a).cells.forEach(function (e, a) { var c = e.edges, l = e.site, s = t[a] = c.length ? c.map(function (n) { var t = n.start(); return [t.x, t.y]; }) : l.x >= r && l.x <= i && l.y >= u && l.y <= o ? [[r, o], [i, o], [i, u], [r, u]] : []; s.point = n[a]; }), t; } function e(n) { return n.map(function (n, t) { return { x: Math.round(i(n, t) / Ca) * Ca, y: Math.round(o(n, t) / Ca) * Ca, i: t }; }); } var r = Ar, u = Nr, i = r, o = u, a = ul; return n ? t(n) : (t.links = function (n) { return iu(e(n)).edges.filter(function (n) { return n.l && n.r; }).map(function (t) { return { source: n[t.l.i], target: n[t.r.i] }; }); }, t.triangles = function (n) { var t = []; return iu(e(n)).cells.forEach(function (e, r) { for (var u, i, o = e.site, a = e.edges.sort(Yr), c = -1, l = a.length, s = a[l - 1].edge, f = s.l === o ? s.r : s.l; ++c < l;)
        u = s, i = f, s = a[c].edge, f = s.l === o ? s.r : s.l, r < i.i && r < f.i && au(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]]); }), t; }, t.x = function (n) { return arguments.length ? (i = Et(r = n), t) : r; }, t.y = function (n) { return arguments.length ? (o = Et(u = n), t) : u; }, t.clipExtent = function (n) { return arguments.length ? (a = null == n ? ul : n, t) : a === ul ? null : a; }, t.size = function (n) { return arguments.length ? t.clipExtent(n && [[0, 0], n]) : a === ul ? null : a && a[1]; }, t); };
    var ul = [[-1e6, -1e6], [1e6, 1e6]];
    ta.geom.delaunay = function (n) { return ta.geom.voronoi().triangles(n); }, ta.geom.quadtree = function (n, t, e, r, u) { function i(n) { function i(n, t, e, r, u, i, o, a) { if (!isNaN(e) && !isNaN(r))
        if (n.leaf) {
            var c = n.x, s = n.y;
            if (null != c)
                if (ga(c - e) + ga(s - r) < .01)
                    l(n, t, e, r, u, i, o, a);
                else {
                    var f = n.point;
                    n.x = n.y = n.point = null, l(n, f, c, s, u, i, o, a), l(n, t, e, r, u, i, o, a);
                }
            else
                n.x = e, n.y = r, n.point = t;
        }
        else
            l(n, t, e, r, u, i, o, a); } function l(n, t, e, r, u, o, a, c) { var l = .5 * (u + a), s = .5 * (o + c), f = e >= l, h = r >= s, g = h << 1 | f; n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = su()), f ? u = l : a = l, h ? o = s : c = s, i(n, t, e, r, u, o, a, c); } var s, f, h, g, p, v, d, m, y, M = Et(a), x = Et(c); if (null != t)
        v = t, d = e, m = r, y = u;
    else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)
        for (g = 0; p > g; ++g)
            s = n[g], s.x < v && (v = s.x), s.y < d && (d = s.y), s.x > m && (m = s.x), s.y > y && (y = s.y), f.push(s.x), h.push(s.y);
    else
        for (g = 0; p > g; ++g) {
            var b = +M(s = n[g], g), _ = +x(s, g);
            v > b && (v = b), d > _ && (d = _), b > m && (m = b), _ > y && (y = _), f.push(b), h.push(_);
        } var w = m - v, S = y - d; w > S ? y = d + w : m = v + S; var k = su(); if (k.add = function (n) { i(k, n, +M(n, ++g), +x(n, g), v, d, m, y); }, k.visit = function (n) { fu(n, k, v, d, m, y); }, k.find = function (n) { return hu(k, n[0], n[1], v, d, m, y); }, g = -1, null == t) {
        for (; ++g < p;)
            i(k, n[g], f[g], h[g], v, d, m, y);
        --g;
    }
    else
        n.forEach(k.add); return f = h = n = s = null, k; } var o, a = Ar, c = Nr; return (o = arguments.length) ? (a = cu, c = lu, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function (n) { return arguments.length ? (a = n, i) : a; }, i.y = function (n) { return arguments.length ? (c = n, i) : c; }, i.extent = function (n) { return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [[t, e], [r, u]]; }, i.size = function (n) { return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]; }, i); }, ta.interpolateRgb = gu, ta.interpolateObject = pu, ta.interpolateNumber = vu, ta.interpolateString = du;
    var il = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ol = new RegExp(il.source, "g");
    ta.interpolate = mu, ta.interpolators = [function (n, t) { var e = typeof t; return ("string" === e ? Ga.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? gu : du : t instanceof ot ? gu : Array.isArray(t) ? yu : "object" === e && isNaN(t) ? pu : vu)(n, t); }], ta.interpolateArray = yu;
    var al = function () { return y; }, cl = ta.map({ linear: al, poly: ku, quad: function () { return _u; }, cubic: function () { return wu; }, sin: function () { return Eu; }, exp: function () { return Au; }, circle: function () { return Nu; }, elastic: Cu, back: zu, bounce: function () { return qu; } }), ll = ta.map({ "in": y, out: xu, "in-out": bu, "out-in": function (n) { return bu(xu(n)); } });
    ta.ease = function (n) { var t = n.indexOf("-"), e = t >= 0 ? n.slice(0, t) : n, r = t >= 0 ? n.slice(t + 1) : "in"; return e = cl.get(e) || al, r = ll.get(r) || y, Mu(r(e.apply(null, ea.call(arguments, 1)))); }, ta.interpolateHcl = Lu, ta.interpolateHsl = Tu, ta.interpolateLab = Ru, ta.interpolateRound = Du, ta.transform = function (n) { var t = ua.createElementNS(ta.ns.prefix.svg, "g"); return (ta.transform = function (n) { if (null != n) {
        t.setAttribute("transform", n);
        var e = t.transform.baseVal.consolidate();
    } return new Pu(e ? e.matrix : sl); })(n); }, Pu.prototype.toString = function () { return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"; };
    var sl = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    ta.interpolateTransform = Hu, ta.layout = {}, ta.layout.bundle = function () { return function (n) { for (var t = [], e = -1, r = n.length; ++e < r;)
        t.push(Yu(n[e])); return t; }; }, ta.layout.chord = function () { function n() { var n, l, f, h, g, p = {}, v = [], d = ta.range(i), m = []; for (e = [], r = [], n = 0, h = -1; ++h < i;) {
        for (l = 0, g = -1; ++g < i;)
            l += u[h][g];
        v.push(l), m.push(ta.range(i)), n += l;
    } for (o && d.sort(function (n, t) { return o(v[n], v[t]); }), a && m.forEach(function (n, t) { n.sort(function (n, e) { return a(u[t][n], u[t][e]); }); }), n = (La - s * i) / n, l = 0, h = -1; ++h < i;) {
        for (f = l, g = -1; ++g < i;) {
            var y = d[h], M = m[y][g], x = u[y][M], b = l, _ = l += x * n;
            p[y + "-" + M] = { index: y, subindex: M, startAngle: b, endAngle: _, value: x };
        }
        r[y] = { index: y, startAngle: f, endAngle: l, value: (l - f) / n }, l += s;
    } for (h = -1; ++h < i;)
        for (g = h - 1; ++g < i;) {
            var w = p[h + "-" + g], S = p[g + "-" + h];
            (w.value || S.value) && e.push(w.value < S.value ? { source: S, target: w } : { source: w, target: S });
        } c && t(); } function t() { e.sort(function (n, t) { return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2); }); } var e, r, u, i, o, a, c, l = {}, s = 0; return l.matrix = function (n) { return arguments.length ? (i = (u = n) && u.length, e = r = null, l) : u; }, l.padding = function (n) { return arguments.length ? (s = n, e = r = null, l) : s; }, l.sortGroups = function (n) { return arguments.length ? (o = n, e = r = null, l) : o; }, l.sortSubgroups = function (n) { return arguments.length ? (a = n, e = null, l) : a; }, l.sortChords = function (n) { return arguments.length ? (c = n, e && t(), l) : c; }, l.chords = function () { return e || n(), e; }, l.groups = function () { return r || n(), r; }, l; }, ta.layout.force = function () { function n(n) { return function (t, e, r, u) { if (t.point !== n) {
        var i = t.cx - n.x, o = t.cy - n.y, a = u - e, c = i * i + o * o;
        if (c > a * a / d) {
            if (p > c) {
                var l = t.charge / c;
                n.px -= i * l, n.py -= o * l;
            }
            return !0;
        }
        if (t.point && c && p > c) {
            var l = t.pointCharge / c;
            n.px -= i * l, n.py -= o * l;
        }
    } return !t.charge; }; } function t(n) { n.px = ta.event.x, n.py = ta.event.y, a.resume(); } var e, r, u, i, o, a = {}, c = ta.dispatch("start", "tick", "end"), l = [1, 1], s = .9, f = fl, h = hl, g = -30, p = gl, v = .1, d = .64, m = [], M = []; return a.tick = function () { if ((r *= .99) < .005)
        return c.end({ type: "end", alpha: r = 0 }), !0; var t, e, a, f, h, p, d, y, x, b = m.length, _ = M.length; for (e = 0; _ > e; ++e)
        a = M[e], f = a.source, h = a.target, y = h.x - f.x, x = h.y - f.y, (p = y * y + x * x) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, y *= p, x *= p, h.x -= y * (d = f.weight / (h.weight + f.weight)), h.y -= x * d, f.x += y * (d = 1 - d), f.y += x * d); if ((d = r * v) && (y = l[0] / 2, x = l[1] / 2, e = -1, d))
        for (; ++e < b;)
            a = m[e], a.x += (y - a.x) * d, a.y += (x - a.y) * d; if (g)
        for (Ju(t = ta.geom.quadtree(m), r, o), e = -1; ++e < b;)
            (a = m[e]).fixed || t.visit(n(a)); for (e = -1; ++e < b;)
        a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * s, a.y -= (a.py - (a.py = a.y)) * s); c.tick({ type: "tick", alpha: r }); }, a.nodes = function (n) { return arguments.length ? (m = n, a) : m; }, a.links = function (n) { return arguments.length ? (M = n, a) : M; }, a.size = function (n) { return arguments.length ? (l = n, a) : l; }, a.linkDistance = function (n) { return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f; }, a.distance = a.linkDistance, a.linkStrength = function (n) { return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h; }, a.friction = function (n) { return arguments.length ? (s = +n, a) : s; }, a.charge = function (n) { return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g; }, a.chargeDistance = function (n) { return arguments.length ? (p = n * n, a) : Math.sqrt(p); }, a.gravity = function (n) { return arguments.length ? (v = +n, a) : v; }, a.theta = function (n) { return arguments.length ? (d = n * n, a) : Math.sqrt(d); }, a.alpha = function (n) { return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({ type: "start", alpha: r = n }), ta.timer(a.tick)), a) : r; }, a.start = function () { function n(n, r) { if (!e) {
        for (e = new Array(c), a = 0; c > a; ++a)
            e[a] = [];
        for (a = 0; s > a; ++a) {
            var u = M[a];
            e[u.source.index].push(u.target), e[u.target.index].push(u.source);
        }
    } for (var i, o = e[t], a = -1, l = o.length; ++a < l;)
        if (!isNaN(i = o[a][n]))
            return i; return Math.random() * r; } var t, e, r, c = m.length, s = M.length, p = l[0], v = l[1]; for (t = 0; c > t; ++t)
        (r = m[t]).index = t, r.weight = 0; for (t = 0; s > t; ++t)
        r = M[t], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight; for (t = 0; c > t; ++t)
        r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y); if (u = [], "function" == typeof f)
        for (t = 0; s > t; ++t)
            u[t] = +f.call(this, M[t], t);
    else
        for (t = 0; s > t; ++t)
            u[t] = f; if (i = [], "function" == typeof h)
        for (t = 0; s > t; ++t)
            i[t] = +h.call(this, M[t], t);
    else
        for (t = 0; s > t; ++t)
            i[t] = h; if (o = [], "function" == typeof g)
        for (t = 0; c > t; ++t)
            o[t] = +g.call(this, m[t], t);
    else
        for (t = 0; c > t; ++t)
            o[t] = g; return a.resume(); }, a.resume = function () { return a.alpha(.1); }, a.stop = function () { return a.alpha(0); }, a.drag = function () { return e || (e = ta.behavior.drag().origin(y).on("dragstart.force", Xu).on("drag.force", t).on("dragend.force", $u)), arguments.length ? void this.on("mouseover.force", Bu).on("mouseout.force", Wu).call(e) : e; }, ta.rebind(a, c, "on"); };
    var fl = 20, hl = 1, gl = 1 / 0;
    ta.layout.hierarchy = function () { function n(u) { var i, o = [u], a = []; for (u.depth = 0; null != (i = o.pop());)
        if (a.push(i), (l = e.call(n, i, i.depth)) && (c = l.length)) {
            for (var c, l, s; --c >= 0;)
                o.push(s = l[c]), s.parent = i, s.depth = i.depth + 1;
            r && (i.value = 0), i.children = l;
        }
        else
            r && (i.value = +r.call(n, i, i.depth) || 0), delete i.children; return Qu(u, function (n) { var e, u; t && (e = n.children) && e.sort(t), r && (u = n.parent) && (u.value += n.value); }), a; } var t = ei, e = ni, r = ti; return n.sort = function (e) { return arguments.length ? (t = e, n) : t; }, n.children = function (t) { return arguments.length ? (e = t, n) : e; }, n.value = function (t) { return arguments.length ? (r = t, n) : r; }, n.revalue = function (t) { return r && (Ku(t, function (n) { n.children && (n.value = 0); }), Qu(t, function (t) { var e; t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value); })), t; }, n; }, ta.layout.partition = function () { function n(t, e, r, u) { var i = t.children; if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
        var o, a, c, l = -1;
        for (r = t.value ? r / t.value : 0; ++l < o;)
            n(a = i[l], e, c = a.value * r, u), e += c;
    } } function t(n) { var e = n.children, r = 0; if (e && (u = e.length))
        for (var u, i = -1; ++i < u;)
            r = Math.max(r, t(e[i])); return 1 + r; } function e(e, i) { var o = r.call(this, e, i); return n(o[0], 0, u[0], u[1] / t(o[0])), o; } var r = ta.layout.hierarchy(), u = [1, 1]; return e.size = function (n) { return arguments.length ? (u = n, e) : u; }, Gu(e, r); }, ta.layout.pie = function () { function n(o) { var a, c = o.length, l = o.map(function (e, r) { return +t.call(n, e, r); }), s = +("function" == typeof r ? r.apply(this, arguments) : r), f = ("function" == typeof u ? u.apply(this, arguments) : u) - s, h = Math.min(Math.abs(f) / c, +("function" == typeof i ? i.apply(this, arguments) : i)), g = h * (0 > f ? -1 : 1), p = (f - c * g) / ta.sum(l), v = ta.range(c), d = []; return null != e && v.sort(e === pl ? function (n, t) { return l[t] - l[n]; } : function (n, t) { return e(o[n], o[t]); }), v.forEach(function (n) { d[n] = { data: o[n], value: a = l[n], startAngle: s, endAngle: s += a * p + g, padAngle: h }; }), d; } var t = Number, e = pl, r = 0, u = La, i = 0; return n.value = function (e) { return arguments.length ? (t = e, n) : t; }, n.sort = function (t) { return arguments.length ? (e = t, n) : e; }, n.startAngle = function (t) { return arguments.length ? (r = t, n) : r; }, n.endAngle = function (t) { return arguments.length ? (u = t, n) : u; }, n.padAngle = function (t) { return arguments.length ? (i = t, n) : i; }, n; };
    var pl = {};
    ta.layout.stack = function () { function n(a, c) { if (!(h = a.length))
        return a; var l = a.map(function (e, r) { return t.call(n, e, r); }), s = l.map(function (t) { return t.map(function (t, e) { return [i.call(n, t, e), o.call(n, t, e)]; }); }), f = e.call(n, s, c); l = ta.permute(l, f), s = ta.permute(s, f); var h, g, p, v, d = r.call(n, s, c), m = l[0].length; for (p = 0; m > p; ++p)
        for (u.call(n, l[0][p], v = d[p], s[0][p][1]), g = 1; h > g; ++g)
            u.call(n, l[g][p], v += s[g - 1][p][1], s[g][p][1]); return a; } var t = y, e = ai, r = ci, u = oi, i = ui, o = ii; return n.values = function (e) { return arguments.length ? (t = e, n) : t; }, n.order = function (t) { return arguments.length ? (e = "function" == typeof t ? t : vl.get(t) || ai, n) : e; }, n.offset = function (t) { return arguments.length ? (r = "function" == typeof t ? t : dl.get(t) || ci, n) : r; }, n.x = function (t) { return arguments.length ? (i = t, n) : i; }, n.y = function (t) { return arguments.length ? (o = t, n) : o; }, n.out = function (t) { return arguments.length ? (u = t, n) : u; }, n; };
    var vl = ta.map({ "inside-out": function (n) { var t, e, r = n.length, u = n.map(li), i = n.map(si), o = ta.range(r).sort(function (n, t) { return u[n] - u[t]; }), a = 0, c = 0, l = [], s = []; for (t = 0; r > t; ++t)
            e = o[t], c > a ? (a += i[e], l.push(e)) : (c += i[e], s.push(e)); return s.reverse().concat(l); }, reverse: function (n) { return ta.range(n.length).reverse(); }, "default": ai }), dl = ta.map({ silhouette: function (n) { var t, e, r, u = n.length, i = n[0].length, o = [], a = 0, c = []; for (e = 0; i > e; ++e) {
            for (t = 0, r = 0; u > t; t++)
                r += n[t][e][1];
            r > a && (a = r), o.push(r);
        } for (e = 0; i > e; ++e)
            c[e] = (a - o[e]) / 2; return c; }, wiggle: function (n) { var t, e, r, u, i, o, a, c, l, s = n.length, f = n[0], h = f.length, g = []; for (g[0] = c = l = 0, e = 1; h > e; ++e) {
            for (t = 0, u = 0; s > t; ++t)
                u += n[t][e][1];
            for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; s > t; ++t) {
                for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r)
                    o += (n[r][e][1] - n[r][e - 1][1]) / a;
                i += o * n[t][e][1];
            }
            g[e] = c -= u ? i / u * a : 0, l > c && (l = c);
        } for (e = 0; h > e; ++e)
            g[e] -= l; return g; }, expand: function (n) { var t, e, r, u = n.length, i = n[0].length, o = 1 / u, a = []; for (e = 0; i > e; ++e) {
            for (t = 0, r = 0; u > t; t++)
                r += n[t][e][1];
            if (r)
                for (t = 0; u > t; t++)
                    n[t][e][1] /= r;
            else
                for (t = 0; u > t; t++)
                    n[t][e][1] = o;
        } for (e = 0; i > e; ++e)
            a[e] = 0; return a; }, zero: ci });
    ta.layout.histogram = function () { function n(n, i) { for (var o, a, c = [], l = n.map(e, this), s = r.call(this, l, i), f = u.call(this, s, l, i), i = -1, h = l.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;)
        o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0; if (g > 0)
        for (i = -1; ++i < h;)
            a = l[i], a >= s[0] && a <= s[1] && (o = c[ta.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i])); return c; } var t = !0, e = Number, r = pi, u = hi; return n.value = function (t) { return arguments.length ? (e = t, n) : e; }, n.range = function (t) { return arguments.length ? (r = Et(t), n) : r; }, n.bins = function (t) { return arguments.length ? (u = "number" == typeof t ? function (n) { return gi(n, t); } : Et(t), n) : u; }, n.frequency = function (e) { return arguments.length ? (t = !!e, n) : t; }, n; }, ta.layout.pack = function () { function n(n, i) { var o = e.call(this, n, i), a = o[0], c = u[0], l = u[1], s = null == t ? Math.sqrt : "function" == typeof t ? t : function () { return t; }; if (a.x = a.y = 0, Qu(a, function (n) { n.r = +s(n.value); }), Qu(a, Mi), r) {
        var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
        Qu(a, function (n) { n.r += f; }), Qu(a, Mi), Qu(a, function (n) { n.r -= f; });
    } return _i(a, c / 2, l / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), o; } var t, e = ta.layout.hierarchy().sort(vi), r = 0, u = [1, 1]; return n.size = function (t) { return arguments.length ? (u = t, n) : u; }, n.radius = function (e) { return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t; }, n.padding = function (t) { return arguments.length ? (r = +t, n) : r; }, Gu(n, e); }, ta.layout.tree = function () { function n(n, u) { var s = o.call(this, n, u), f = s[0], h = t(f); if (Qu(h, e), h.parent.m = -h.z, Ku(h, r), l)
        Ku(f, i);
    else {
        var g = f, p = f, v = f;
        Ku(f, function (n) { n.x < g.x && (g = n), n.x > p.x && (p = n), n.depth > v.depth && (v = n); });
        var d = a(g, p) / 2 - g.x, m = c[0] / (p.x + a(p, g) / 2 + d), y = c[1] / (v.depth || 1);
        Ku(f, function (n) { n.x = (n.x + d) * m, n.y = n.depth * y; });
    } return s; } function t(n) { for (var t, e = { A: null, children: [n] }, r = [e]; null != (t = r.pop());)
        for (var u, i = t.children, o = 0, a = i.length; a > o; ++o)
            r.push((i[o] = u = { _: i[o], parent: t, children: (u = i[o].children) && u.slice() || [], A: null, a: null, z: 0, m: 0, c: 0, s: 0, t: null, i: o }).a = u); return e.children[0]; } function e(n) { var t = n.children, e = n.parent.children, r = n.i ? e[n.i - 1] : null; if (t.length) {
        Ni(n);
        var i = (t[0].z + t[t.length - 1].z) / 2;
        r ? (n.z = r.z + a(n._, r._), n.m = n.z - i) : n.z = i;
    }
    else
        r && (n.z = r.z + a(n._, r._)); n.parent.A = u(n, r, n.parent.A || e[0]); } function r(n) { n._.x = n.z + n.parent.m, n.m += n.parent.m; } function u(n, t, e) { if (t) {
        for (var r, u = n, i = n, o = t, c = u.parent.children[0], l = u.m, s = i.m, f = o.m, h = c.m; o = Ei(o), u = ki(u), o && u;)
            c = ki(c), i = Ei(i), i.a = n, r = o.z + f - u.z - l + a(o._, u._), r > 0 && (Ai(Ci(o, n, e), n, r), l += r, s += r), f += o.m, l += u.m, h += c.m, s += i.m;
        o && !Ei(i) && (i.t = o, i.m += f - s), u && !ki(c) && (c.t = u, c.m += l - h, e = n);
    } return e; } function i(n) { n.x *= c[0], n.y = n.depth * c[1]; } var o = ta.layout.hierarchy().sort(null).value(null), a = Si, c = [1, 1], l = null; return n.separation = function (t) { return arguments.length ? (a = t, n) : a; }, n.size = function (t) { return arguments.length ? (l = null == (c = t) ? i : null, n) : l ? null : c; }, n.nodeSize = function (t) { return arguments.length ? (l = null == (c = t) ? null : i, n) : l ? c : null; }, Gu(n, o); }, ta.layout.cluster = function () { function n(n, i) { var o, a = t.call(this, n, i), c = a[0], l = 0; Qu(c, function (n) { var t = n.children; t && t.length ? (n.x = qi(t), n.y = zi(t)) : (n.x = o ? l += e(n, o) : 0, n.y = 0, o = n); }); var s = Li(c), f = Ti(c), h = s.x - e(s, f) / 2, g = f.x + e(f, s) / 2; return Qu(c, u ? function (n) { n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]; } : function (n) { n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]; }), a; } var t = ta.layout.hierarchy().sort(null).value(null), e = Si, r = [1, 1], u = !1; return n.separation = function (t) { return arguments.length ? (e = t, n) : e; }, n.size = function (t) { return arguments.length ? (u = null == (r = t), n) : u ? null : r; }, n.nodeSize = function (t) { return arguments.length ? (u = null != (r = t), n) : u ? r : null; }, Gu(n, t); }, ta.layout.treemap = function () {
        function n(n, t) { for (var e, r, u = -1, i = n.length; ++u < i;)
            r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r; }
        function t(e) { var i = e.children; if (i && i.length) {
            var o, a, c, l = f(e), s = [], h = i.slice(), p = 1 / 0, v = "slice" === g ? l.dx : "dice" === g ? l.dy : "slice-dice" === g ? 1 & e.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
            for (n(h, l.dx * l.dy / e.value), s.area = 0; (c = h.length) > 0;)
                s.push(o = h[c - 1]), s.area += o.area, "squarify" !== g || (a = r(s, v)) <= p ? (h.pop(), p = a) : (s.area -= s.pop().area, u(s, v, l, !1), v = Math.min(l.dx, l.dy), s.length = s.area = 0, p = 1 / 0);
            s.length && (u(s, v, l, !0), s.length = s.area = 0), i.forEach(t);
        } }
        function e(t) { var r = t.children; if (r && r.length) {
            var i, o = f(t), a = r.slice(), c = [];
            for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();)
                c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
            r.forEach(e);
        } }
        function r(n, t) { for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)
            (e = n[o].area) && (i > e && (i = e), e > u && (u = e)); return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0; }
        function u(n, t, e, r) { var u, i = -1, o = n.length, a = e.x, l = e.y, s = t ? c(n.area / t) : 0; if (t == e.dx) {
            for ((r || s > e.dy) && (s = e.dy); ++i < o;)
                u = n[i], u.x = a, u.y = l, u.dy = s, a += u.dx = Math.min(e.x + e.dx - a, s ? c(u.area / s) : 0);
            u.z = !0, u.dx += e.x + e.dx - a, e.y += s, e.dy -= s;
        }
        else {
            for ((r || s > e.dx) && (s = e.dx); ++i < o;)
                u = n[i], u.x = a, u.y = l, u.dx = s, l += u.dy = Math.min(e.y + e.dy - l, s ? c(u.area / s) : 0);
            u.z = !1, u.dy += e.y + e.dy - l, e.x += s, e.dx -= s;
        } }
        function i(r) { var u = o || a(r), i = u[0]; return i.x = 0, i.y = 0, i.dx = l[0], i.dy = l[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u; }
        var o, a = ta.layout.hierarchy(), c = Math.round, l = [1, 1], s = null, f = Ri, h = !1, g = "squarify", p = .5 * (1 + Math.sqrt(5));
        return i.size = function (n) { return arguments.length ? (l = n, i) : l; }, i.padding = function (n) { function t(t) { var e = n.call(i, t, t.depth); return null == e ? Ri(t) : Di(t, "number" == typeof e ? [e, e, e, e] : e); } function e(t) { return Di(t, n); } if (!arguments.length)
            return s; var r; return f = null == (s = n) ? Ri : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i; }, i.round = function (n) { return arguments.length ? (c = n ? Math.round : Number, i) : c != Number; }, i.sticky = function (n) { return arguments.length ? (h = n, o = null, i) : h; }, i.ratio = function (n) { return arguments.length ? (p = n, i) : p; }, i.mode = function (n) { return arguments.length ? (g = n + "", i) : g; }, Gu(i, a);
    }, ta.random = { normal: function (n, t) { var e = arguments.length; return 2 > e && (t = 1), 1 > e && (n = 0), function () { var e, r, u; do
            e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r;
        while (!u || u > 1); return n + t * e * Math.sqrt(-2 * Math.log(u) / u); }; }, logNormal: function () { var n = ta.random.normal.apply(ta, arguments); return function () { return Math.exp(n()); }; }, bates: function (n) { var t = ta.random.irwinHall(n); return function () { return t() / n; }; }, irwinHall: function (n) { return function () { for (var t = 0, e = 0; n > e; e++)
            t += Math.random(); return t; }; } }, ta.scale = {};
    var ml = { floor: y, ceil: y };
    ta.scale.linear = function () { return Ii([0, 1], [0, 1], mu, !1); };
    var yl = { s: 1, g: 1, p: 1, r: 1, e: 1 };
    ta.scale.log = function () { return Ji(ta.scale.linear().domain([0, 1]), 10, !0, [1, 10]); };
    var Ml = ta.format(".0e"), xl = { floor: function (n) { return -Math.ceil(-n); }, ceil: function (n) { return -Math.floor(-n); } };
    ta.scale.pow = function () { return Gi(ta.scale.linear(), 1, [0, 1]); }, ta.scale.sqrt = function () { return ta.scale.pow().exponent(.5); }, ta.scale.ordinal = function () { return Qi([], { t: "range", a: [[]] }); }, ta.scale.category10 = function () { return ta.scale.ordinal().range(bl); }, ta.scale.category20 = function () { return ta.scale.ordinal().range(_l); }, ta.scale.category20b = function () { return ta.scale.ordinal().range(wl); }, ta.scale.category20c = function () { return ta.scale.ordinal().range(Sl); };
    var bl = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(Mt), _l = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(Mt), wl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(Mt), Sl = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(Mt);
    ta.scale.quantile = function () { return no([], []); }, ta.scale.quantize = function () { return to(0, 1, [0, 1]); }, ta.scale.threshold = function () { return eo([.5], [0, 1]); }, ta.scale.identity = function () { return ro([0, 1]); }, ta.svg = {}, ta.svg.arc = function () { function n() { var n = Math.max(0, +e.apply(this, arguments)), l = Math.max(0, +r.apply(this, arguments)), s = o.apply(this, arguments) - Ra, f = a.apply(this, arguments) - Ra, h = Math.abs(f - s), g = s > f ? 0 : 1; if (n > l && (p = l, l = n, n = p), h >= Ta)
        return t(l, g) + (n ? t(n, 1 - g) : "") + "Z"; var p, v, d, m, y, M, x, b, _, w, S, k, E = 0, A = 0, N = []; if ((m = (+c.apply(this, arguments) || 0) / 2) && (d = i === kl ? Math.sqrt(n * n + l * l) : +i.apply(this, arguments), g || (A *= -1), l && (A = tt(d / l * Math.sin(m))), n && (E = tt(d / n * Math.sin(m)))), l) {
        y = l * Math.cos(s + A), M = l * Math.sin(s + A), x = l * Math.cos(f - A), b = l * Math.sin(f - A);
        var C = Math.abs(f - s - 2 * A) <= qa ? 0 : 1;
        if (A && so(y, M, x, b) === g ^ C) {
            var z = (s + f) / 2;
            y = l * Math.cos(z), M = l * Math.sin(z), x = b = null;
        }
    }
    else
        y = M = 0; if (n) {
        _ = n * Math.cos(f - E), w = n * Math.sin(f - E), S = n * Math.cos(s + E), k = n * Math.sin(s + E);
        var q = Math.abs(s - f + 2 * E) <= qa ? 0 : 1;
        if (E && so(_, w, S, k) === 1 - g ^ q) {
            var L = (s + f) / 2;
            _ = n * Math.cos(L), w = n * Math.sin(L), S = k = null;
        }
    }
    else
        _ = w = 0; if ((p = Math.min(Math.abs(l - n) / 2, +u.apply(this, arguments))) > .001) {
        v = l > n ^ g ? 0 : 1;
        var T = null == S ? [_, w] : null == x ? [y, M] : Lr([y, M], [S, k], [x, b], [_, w]), R = y - T[0], D = M - T[1], P = x - T[0], U = b - T[1], j = 1 / Math.sin(Math.acos((R * P + D * U) / (Math.sqrt(R * R + D * D) * Math.sqrt(P * P + U * U))) / 2), F = Math.sqrt(T[0] * T[0] + T[1] * T[1]);
        if (null != x) {
            var H = Math.min(p, (l - F) / (j + 1)), O = fo(null == S ? [_, w] : [S, k], [y, M], l, H, g), I = fo([x, b], [_, w], l, H, g);
            p === H ? N.push("M", O[0], "A", H, ",", H, " 0 0,", v, " ", O[1], "A", l, ",", l, " 0 ", 1 - g ^ so(O[1][0], O[1][1], I[1][0], I[1][1]), ",", g, " ", I[1], "A", H, ",", H, " 0 0,", v, " ", I[0]) : N.push("M", O[0], "A", H, ",", H, " 0 1,", v, " ", I[0]);
        }
        else
            N.push("M", y, ",", M);
        if (null != S) {
            var Y = Math.min(p, (n - F) / (j - 1)), Z = fo([y, M], [S, k], n, -Y, g), V = fo([_, w], null == x ? [y, M] : [x, b], n, -Y, g);
            p === Y ? N.push("L", V[0], "A", Y, ",", Y, " 0 0,", v, " ", V[1], "A", n, ",", n, " 0 ", g ^ so(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - g, " ", Z[1], "A", Y, ",", Y, " 0 0,", v, " ", Z[0]) : N.push("L", V[0], "A", Y, ",", Y, " 0 0,", v, " ", Z[0]);
        }
        else
            N.push("L", _, ",", w);
    }
    else
        N.push("M", y, ",", M), null != x && N.push("A", l, ",", l, " 0 ", C, ",", g, " ", x, ",", b), N.push("L", _, ",", w), null != S && N.push("A", n, ",", n, " 0 ", q, ",", 1 - g, " ", S, ",", k); return N.push("Z"), N.join(""); } function t(n, t) { return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n; } var e = io, r = oo, u = uo, i = kl, o = ao, a = co, c = lo; return n.innerRadius = function (t) { return arguments.length ? (e = Et(t), n) : e; }, n.outerRadius = function (t) { return arguments.length ? (r = Et(t), n) : r; }, n.cornerRadius = function (t) { return arguments.length ? (u = Et(t), n) : u; }, n.padRadius = function (t) { return arguments.length ? (i = t == kl ? kl : Et(t), n) : i; }, n.startAngle = function (t) { return arguments.length ? (o = Et(t), n) : o; }, n.endAngle = function (t) { return arguments.length ? (a = Et(t), n) : a; }, n.padAngle = function (t) { return arguments.length ? (c = Et(t), n) : c; }, n.centroid = function () { var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2, t = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Ra; return [Math.cos(t) * n, Math.sin(t) * n]; }, n; };
    var kl = "auto";
    ta.svg.line = function () { return ho(y); };
    var El = ta.map({ linear: go, "linear-closed": po, step: vo, "step-before": mo, "step-after": yo, basis: So, "basis-open": ko, "basis-closed": Eo, bundle: Ao, cardinal: bo, "cardinal-open": Mo, "cardinal-closed": xo, monotone: To });
    El.forEach(function (n, t) { t.key = n, t.closed = /-closed$/.test(n); });
    var Al = [0, 2 / 3, 1 / 3, 0], Nl = [0, 1 / 3, 2 / 3, 0], Cl = [0, 1 / 6, 2 / 3, 1 / 6];
    ta.svg.line.radial = function () { var n = ho(Ro); return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n; }, mo.reverse = yo, yo.reverse = mo, ta.svg.area = function () { return Do(y); }, ta.svg.area.radial = function () { var n = Do(Ro); return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n; }, ta.svg.chord = function () { function n(n, a) { var c = t(this, i, n, a), l = t(this, o, n, a); return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, l) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + u(l.r, l.p1, c.r, c.p0)) + "Z"; } function t(n, t, e, r) { var u = t.call(n, e, r), i = a.call(n, u, r), o = c.call(n, u, r) - Ra, s = l.call(n, u, r) - Ra; return { r: i, a0: o, a1: s, p0: [i * Math.cos(o), i * Math.sin(o)], p1: [i * Math.cos(s), i * Math.sin(s)] }; } function e(n, t) { return n.a0 == t.a0 && n.a1 == t.a1; } function r(n, t, e) { return "A" + n + "," + n + " 0 " + +(e > qa) + ",1 " + t; } function u(n, t, e, r) { return "Q 0,0 " + r; } var i = mr, o = yr, a = Po, c = ao, l = co; return n.radius = function (t) { return arguments.length ? (a = Et(t), n) : a; }, n.source = function (t) { return arguments.length ? (i = Et(t), n) : i; }, n.target = function (t) { return arguments.length ? (o = Et(t), n) : o; }, n.startAngle = function (t) { return arguments.length ? (c = Et(t), n) : c; }, n.endAngle = function (t) { return arguments.length ? (l = Et(t), n) : l; }, n; }, ta.svg.diagonal = function () { function n(n, u) { var i = t.call(this, n, u), o = e.call(this, n, u), a = (i.y + o.y) / 2, c = [i, { x: i.x, y: a }, { x: o.x, y: a }, o]; return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]; } var t = mr, e = yr, r = Uo; return n.source = function (e) { return arguments.length ? (t = Et(e), n) : t; }, n.target = function (t) { return arguments.length ? (e = Et(t), n) : e; }, n.projection = function (t) { return arguments.length ? (r = t, n) : r; }, n; }, ta.svg.diagonal.radial = function () { var n = ta.svg.diagonal(), t = Uo, e = n.projection; return n.projection = function (n) { return arguments.length ? e(jo(t = n)) : t; }, n; }, ta.svg.symbol = function () { function n(n, r) { return (zl.get(t.call(this, n, r)) || Oo)(e.call(this, n, r)); } var t = Ho, e = Fo; return n.type = function (e) { return arguments.length ? (t = Et(e), n) : t; }, n.size = function (t) { return arguments.length ? (e = Et(t), n) : e; }, n; };
    var zl = ta.map({ circle: Oo, cross: function (n) { var t = Math.sqrt(n / 5) / 2; return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"; }, diamond: function (n) { var t = Math.sqrt(n / (2 * Ll)), e = t * Ll; return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z"; }, square: function (n) { var t = Math.sqrt(n) / 2; return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"; }, "triangle-down": function (n) { var t = Math.sqrt(n / ql), e = t * ql / 2; return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"; }, "triangle-up": function (n) { var t = Math.sqrt(n / ql), e = t * ql / 2; return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"; } });
    ta.svg.symbolTypes = zl.keys();
    var ql = Math.sqrt(3), Ll = Math.tan(30 * Da);
    _a.transition = function (n) { for (var t, e, r = Tl || ++Ul, u = Xo(n), i = [], o = Rl || { time: Date.now(), ease: Su, delay: 0, duration: 250 }, a = -1, c = this.length; ++a < c;) {
        i.push(t = []);
        for (var l = this[a], s = -1, f = l.length; ++s < f;)
            (e = l[s]) && $o(e, s, u, r, o), t.push(e);
    } return Yo(i, u, r); }, _a.interrupt = function (n) { return this.each(null == n ? Dl : Io(Xo(n))); };
    var Tl, Rl, Dl = Io(Xo()), Pl = [], Ul = 0;
    Pl.call = _a.call, Pl.empty = _a.empty, Pl.node = _a.node, Pl.size = _a.size, ta.transition = function (n, t) { return n && n.transition ? Tl ? n.transition(t) : n : ta.selection().transition(n); }, ta.transition.prototype = Pl, Pl.select = function (n) { var t, e, r, u = this.id, i = this.namespace, o = []; n = N(n); for (var a = -1, c = this.length; ++a < c;) {
        o.push(t = []);
        for (var l = this[a], s = -1, f = l.length; ++s < f;)
            (r = l[s]) && (e = n.call(r, r.__data__, s, a)) ? ("__data__" in r && (e.__data__ = r.__data__), $o(e, s, i, u, r[i][u]), t.push(e)) : t.push(null);
    } return Yo(o, i, u); }, Pl.selectAll = function (n) { var t, e, r, u, i, o = this.id, a = this.namespace, c = []; n = C(n); for (var l = -1, s = this.length; ++l < s;)
        for (var f = this[l], h = -1, g = f.length; ++h < g;)
            if (r = f[h]) {
                i = r[a][o], e = n.call(r, r.__data__, h, l), c.push(t = []);
                for (var p = -1, v = e.length; ++p < v;)
                    (u = e[p]) && $o(u, p, a, o, i), t.push(u);
            } return Yo(c, a, o); }, Pl.filter = function (n) { var t, e, r, u = []; "function" != typeof n && (n = O(n)); for (var i = 0, o = this.length; o > i; i++) {
        u.push(t = []);
        for (var e = this[i], a = 0, c = e.length; c > a; a++)
            (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
    } return Yo(u, this.namespace, this.id); }, Pl.tween = function (n, t) { var e = this.id, r = this.namespace; return arguments.length < 2 ? this.node()[r][e].tween.get(n) : Y(this, null == t ? function (t) { t[r][e].tween.remove(n); } : function (u) { u[r][e].tween.set(n, t); }); }, Pl.attr = function (n, t) { function e() { this.removeAttribute(a); } function r() { this.removeAttributeNS(a.space, a.local); } function u(n) { return null == n ? e : (n += "", function () { var t, e = this.getAttribute(a); return e !== n && (t = o(e, n), function (n) { this.setAttribute(a, t(n)); }); }); } function i(n) { return null == n ? r : (n += "", function () { var t, e = this.getAttributeNS(a.space, a.local); return e !== n && (t = o(e, n), function (n) { this.setAttributeNS(a.space, a.local, t(n)); }); }); } if (arguments.length < 2) {
        for (t in n)
            this.attr(t, n[t]);
        return this;
    } var o = "transform" == n ? Hu : mu, a = ta.ns.qualify(n); return Zo(this, "attr." + n, t, a.local ? i : u); }, Pl.attrTween = function (n, t) { function e(n, e) { var r = t.call(this, n, e, this.getAttribute(u)); return r && function (n) { this.setAttribute(u, r(n)); }; } function r(n, e) { var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local)); return r && function (n) { this.setAttributeNS(u.space, u.local, r(n)); }; } var u = ta.ns.qualify(n); return this.tween("attr." + n, u.local ? r : e); }, Pl.style = function (n, e, r) { function u() { this.style.removeProperty(n); } function i(e) { return null == e ? u : (e += "", function () { var u, i = t(this).getComputedStyle(this, null).getPropertyValue(n); return i !== e && (u = mu(i, e), function (t) { this.style.setProperty(n, u(t), r); }); }); } var o = arguments.length; if (3 > o) {
        if ("string" != typeof n) {
            2 > o && (e = "");
            for (r in n)
                this.style(r, n[r], e);
            return this;
        }
        r = "";
    } return Zo(this, "style." + n, e, i); }, Pl.styleTween = function (n, e, r) { function u(u, i) { var o = e.call(this, u, i, t(this).getComputedStyle(this, null).getPropertyValue(n)); return o && function (t) { this.style.setProperty(n, o(t), r); }; } return arguments.length < 3 && (r = ""), this.tween("style." + n, u); }, Pl.text = function (n) { return Zo(this, "text", n, Vo); }, Pl.remove = function () { var n = this.namespace; return this.each("end.transition", function () { var t; this[n].count < 2 && (t = this.parentNode) && t.removeChild(this); }); }, Pl.ease = function (n) { var t = this.id, e = this.namespace; return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = ta.ease.apply(ta, arguments)), Y(this, function (r) { r[e][t].ease = n; })); }, Pl.delay = function (n) { var t = this.id, e = this.namespace; return arguments.length < 1 ? this.node()[e][t].delay : Y(this, "function" == typeof n ? function (r, u, i) { r[e][t].delay = +n.call(r, r.__data__, u, i); } : (n = +n, function (r) { r[e][t].delay = n; })); }, Pl.duration = function (n) { var t = this.id, e = this.namespace; return arguments.length < 1 ? this.node()[e][t].duration : Y(this, "function" == typeof n ? function (r, u, i) { r[e][t].duration = Math.max(1, n.call(r, r.__data__, u, i)); } : (n = Math.max(1, n), function (r) { r[e][t].duration = n; })); }, Pl.each = function (n, t) { var e = this.id, r = this.namespace; if (arguments.length < 2) {
        var u = Rl, i = Tl;
        try {
            Tl = e, Y(this, function (t, u, i) { Rl = t[r][e], n.call(t, t.__data__, u, i); });
        }
        finally {
            Rl = u, Tl = i;
        }
    }
    else
        Y(this, function (u) { var i = u[r][e]; (i.event || (i.event = ta.dispatch("start", "end", "interrupt"))).on(n, t); }); return this; }, Pl.transition = function () { for (var n, t, e, r, u = this.id, i = ++Ul, o = this.namespace, a = [], c = 0, l = this.length; l > c; c++) {
        a.push(n = []);
        for (var t = this[c], s = 0, f = t.length; f > s; s++)
            (e = t[s]) && (r = e[o][u], $o(e, s, o, i, { time: r.time, ease: r.ease, delay: r.delay + r.duration, duration: r.duration })), n.push(e);
    } return Yo(a, o, i); }, ta.svg.axis = function () { function n(n) { n.each(function () { var n, l = ta.select(this), s = this.__chart__ || e, f = this.__chart__ = e.copy(), h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c, g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : y : t, p = l.selectAll(".tick").data(h, f), v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Ca), d = ta.transition(p.exit()).style("opacity", Ca).remove(), m = ta.transition(p.order()).style("opacity", 1), M = Math.max(u, 0) + o, x = Ui(f), b = l.selectAll(".domain").data([0]), _ = (b.enter().append("path").attr("class", "domain"), ta.transition(b)); v.append("line"), v.append("text"); var w, S, k, E, A = v.select("line"), N = m.select("line"), C = p.select("text").text(g), z = v.select("text"), q = m.select("text"), L = "top" === r || "left" === r ? -1 : 1; if ("bottom" === r || "top" === r ? (n = Bo, w = "x", k = "y", S = "x2", E = "y2", C.attr("dy", 0 > L ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + L * i + "V0H" + x[1] + "V" + L * i)) : (n = Wo, w = "y", k = "x", S = "y2", E = "x2", C.attr("dy", ".32em").style("text-anchor", 0 > L ? "end" : "start"), _.attr("d", "M" + L * i + "," + x[0] + "H0V" + x[1] + "H" + L * i)), A.attr(E, L * u), z.attr(k, L * M), N.attr(S, 0).attr(E, L * u), q.attr(w, 0).attr(k, L * M), f.rangeBand) {
        var T = f, R = T.rangeBand() / 2;
        s = f = function (n) { return T(n) + R; };
    }
    else
        s.rangeBand ? s = f : d.call(n, f, s); v.call(n, s, f), m.call(n, f, f); }); } var t, e = ta.scale.linear(), r = jl, u = 6, i = 6, o = 3, a = [10], c = null; return n.scale = function (t) { return arguments.length ? (e = t, n) : e; }, n.orient = function (t) { return arguments.length ? (r = t in Fl ? t + "" : jl, n) : r; }, n.ticks = function () { return arguments.length ? (a = arguments, n) : a; }, n.tickValues = function (t) { return arguments.length ? (c = t, n) : c; }, n.tickFormat = function (e) { return arguments.length ? (t = e, n) : t; }, n.tickSize = function (t) { var e = arguments.length; return e ? (u = +t, i = +arguments[e - 1], n) : u; }, n.innerTickSize = function (t) { return arguments.length ? (u = +t, n) : u; }, n.outerTickSize = function (t) { return arguments.length ? (i = +t, n) : i; }, n.tickPadding = function (t) { return arguments.length ? (o = +t, n) : o; }, n.tickSubdivide = function () { return arguments.length && n; }, n; };
    var jl = "bottom", Fl = { top: 1, right: 1, bottom: 1, left: 1 };
    ta.svg.brush = function () { function n(t) { t.each(function () { var t = ta.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", i).on("touchstart.brush", i), o = t.selectAll(".background").data([0]); o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move"); var a = t.selectAll(".resize").data(v, y); a.exit().remove(), a.enter().append("g").attr("class", function (n) { return "resize " + n; }).style("cursor", function (n) { return Hl[n]; }).append("rect").attr("x", function (n) { return /[ew]$/.test(n) ? -3 : null; }).attr("y", function (n) { return /^[ns]/.test(n) ? -3 : null; }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null); var c, f = ta.transition(t), h = ta.transition(o); l && (c = Ui(l), h.attr("x", c[0]).attr("width", c[1] - c[0]), r(f)), s && (c = Ui(s), h.attr("y", c[0]).attr("height", c[1] - c[0]), u(f)), e(f); }); } function e(n) { n.selectAll(".resize").attr("transform", function (n) { return "translate(" + f[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")"; }); } function r(n) { n.select(".extent").attr("x", f[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0]); } function u(n) { n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0]); } function i() { function i() { 32 == ta.event.keyCode && (C || (M = null, q[0] -= f[1], q[1] -= h[1], C = 2), S()); } function v() { 32 == ta.event.keyCode && 2 == C && (q[0] += f[1], q[1] += h[1], C = 0, S()); } function d() { var n = ta.mouse(b), t = !1; x && (n[0] += x[0], n[1] += x[1]), C || (ta.event.altKey ? (M || (M = [(f[0] + f[1]) / 2, (h[0] + h[1]) / 2]), q[0] = f[+(n[0] < M[0])], q[1] = h[+(n[1] < M[1])]) : M = null), A && m(n, l, 0) && (r(k), t = !0), N && m(n, s, 1) && (u(k), t = !0), t && (e(k), w({ type: "brush", mode: C ? "move" : "resize" })); } function m(n, t, e) { var r, u, i = Ui(t), c = i[0], l = i[1], s = q[e], v = e ? h : f, d = v[1] - v[0]; return C && (c -= s, l -= d + s), r = (e ? p : g) ? Math.max(c, Math.min(l, n[e])) : n[e], C ? u = (r += s) + d : (M && (s = Math.max(c, Math.min(l, 2 * M[e] - r))), r > s ? (u = r, r = s) : u = s), v[0] != r || v[1] != u ? (e ? a = null : o = null, v[0] = r, v[1] = u, !0) : void 0; } function y() { d(), k.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), ta.select("body").style("cursor", null), L.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), z(), w({ type: "brushend" }); } var M, x, b = this, _ = ta.select(ta.event.target), w = c.of(b, arguments), k = ta.select(b), E = _.datum(), A = !/^(n|s)$/.test(E) && l, N = !/^(e|w)$/.test(E) && s, C = _.classed("extent"), z = W(b), q = ta.mouse(b), L = ta.select(t(b)).on("keydown.brush", i).on("keyup.brush", v); if (ta.event.changedTouches ? L.on("touchmove.brush", d).on("touchend.brush", y) : L.on("mousemove.brush", d).on("mouseup.brush", y), k.interrupt().selectAll("*").interrupt(), C)
        q[0] = f[0] - q[0], q[1] = h[0] - q[1];
    else if (E) {
        var T = +/w$/.test(E), R = +/^n/.test(E);
        x = [f[1 - T] - q[0], h[1 - R] - q[1]], q[0] = f[T], q[1] = h[R];
    }
    else
        ta.event.altKey && (M = q.slice()); k.style("pointer-events", "none").selectAll(".resize").style("display", null), ta.select("body").style("cursor", _.style("cursor")), w({ type: "brushstart" }), d(); } var o, a, c = E(n, "brushstart", "brush", "brushend"), l = null, s = null, f = [0, 0], h = [0, 0], g = !0, p = !0, v = Ol[0]; return n.event = function (n) { n.each(function () { var n = c.of(this, arguments), t = { x: f, y: h, i: o, j: a }, e = this.__chart__ || t; this.__chart__ = t, Tl ? ta.select(this).transition().each("start.brush", function () { o = e.i, a = e.j, f = e.x, h = e.y, n({ type: "brushstart" }); }).tween("brush:brush", function () { var e = yu(f, t.x), r = yu(h, t.y); return o = a = null, function (u) { f = t.x = e(u), h = t.y = r(u), n({ type: "brush", mode: "resize" }); }; }).each("end.brush", function () { o = t.i, a = t.j, n({ type: "brush", mode: "resize" }), n({ type: "brushend" }); }) : (n({ type: "brushstart" }), n({ type: "brush", mode: "resize" }), n({ type: "brushend" })); }); }, n.x = function (t) { return arguments.length ? (l = t, v = Ol[!l << 1 | !s], n) : l; }, n.y = function (t) { return arguments.length ? (s = t, v = Ol[!l << 1 | !s], n) : s; }, n.clamp = function (t) { return arguments.length ? (l && s ? (g = !!t[0], p = !!t[1]) : l ? g = !!t : s && (p = !!t), n) : l && s ? [g, p] : l ? g : s ? p : null; }, n.extent = function (t) { var e, r, u, i, c; return arguments.length ? (l && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), o = [e, r], l.invert && (e = l(e), r = l(r)), e > r && (c = e, e = r, r = c), (e != f[0] || r != f[1]) && (f = [e, r])), s && (u = t[0], i = t[1], l && (u = u[1], i = i[1]), a = [u, i], s.invert && (u = s(u), i = s(i)), u > i && (c = u, u = i, i = c), (u != h[0] || i != h[1]) && (h = [u, i])), n) : (l && (o ? (e = o[0], r = o[1]) : (e = f[0], r = f[1], l.invert && (e = l.invert(e), r = l.invert(r)), e > r && (c = e, e = r, r = c))), s && (a ? (u = a[0], i = a[1]) : (u = h[0], i = h[1], s.invert && (u = s.invert(u), i = s.invert(i)), u > i && (c = u, u = i, i = c))), l && s ? [[e, u], [r, i]] : l ? [e, r] : s && [u, i]); }, n.clear = function () { return n.empty() || (f = [0, 0], h = [0, 0], o = a = null), n; }, n.empty = function () { return !!l && f[0] == f[1] || !!s && h[0] == h[1]; }, ta.rebind(n, c, "on"); };
    var Hl = { n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" }, Ol = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], Il = ac.format = gc.timeFormat, Yl = Il.utc, Zl = Yl("%Y-%m-%dT%H:%M:%S.%LZ");
    Il.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Jo : Zl, Jo.parse = function (n) { var t = new Date(n); return isNaN(t) ? null : t; }, Jo.toString = Zl.toString, ac.second = Ft(function (n) { return new cc(1e3 * Math.floor(n / 1e3)); }, function (n, t) { n.setTime(n.getTime() + 1e3 * Math.floor(t)); }, function (n) { return n.getSeconds(); }), ac.seconds = ac.second.range, ac.seconds.utc = ac.second.utc.range, ac.minute = Ft(function (n) { return new cc(6e4 * Math.floor(n / 6e4)); }, function (n, t) { n.setTime(n.getTime() + 6e4 * Math.floor(t)); }, function (n) { return n.getMinutes(); }), ac.minutes = ac.minute.range, ac.minutes.utc = ac.minute.utc.range, ac.hour = Ft(function (n) { var t = n.getTimezoneOffset() / 60; return new cc(36e5 * (Math.floor(n / 36e5 - t) + t)); }, function (n, t) { n.setTime(n.getTime() + 36e5 * Math.floor(t)); }, function (n) { return n.getHours(); }), ac.hours = ac.hour.range, ac.hours.utc = ac.hour.utc.range, ac.month = Ft(function (n) { return n = ac.day(n), n.setDate(1), n; }, function (n, t) { n.setMonth(n.getMonth() + t); }, function (n) { return n.getMonth(); }), ac.months = ac.month.range, ac.months.utc = ac.month.utc.range;
    var Vl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], Xl = [[ac.second, 1], [ac.second, 5], [ac.second, 15], [ac.second, 30], [ac.minute, 1], [ac.minute, 5], [ac.minute, 15], [ac.minute, 30], [ac.hour, 1], [ac.hour, 3], [ac.hour, 6], [ac.hour, 12], [ac.day, 1], [ac.day, 2], [ac.week, 1], [ac.month, 1], [ac.month, 3], [ac.year, 1]], $l = Il.multi([[".%L", function (n) { return n.getMilliseconds(); }], [":%S", function (n) { return n.getSeconds(); }], ["%I:%M", function (n) { return n.getMinutes(); }], ["%I %p", function (n) { return n.getHours(); }], ["%a %d", function (n) { return n.getDay() && 1 != n.getDate(); }], ["%b %d", function (n) { return 1 != n.getDate(); }], ["%B", function (n) { return n.getMonth(); }], ["%Y", Ne]]), Bl = { range: function (n, t, e) { return ta.range(Math.ceil(n / e) * e, +t, e).map(Ko); }, floor: y, ceil: y };
    Xl.year = ac.year, ac.scale = function () { return Go(ta.scale.linear(), Xl, $l); };
    var Wl = Xl.map(function (n) { return [n[0].utc, n[1]]; }), Jl = Yl.multi([[".%L", function (n) { return n.getUTCMilliseconds(); }], [":%S", function (n) { return n.getUTCSeconds(); }], ["%I:%M", function (n) { return n.getUTCMinutes(); }], ["%I %p", function (n) { return n.getUTCHours(); }], ["%a %d", function (n) { return n.getUTCDay() && 1 != n.getUTCDate(); }], ["%b %d", function (n) { return 1 != n.getUTCDate(); }], ["%B", function (n) { return n.getUTCMonth(); }], ["%Y", Ne]]);
    Wl.year = ac.year.utc, ac.scale.utc = function () { return Go(ta.scale.linear(), Wl, Jl); }, ta.text = At(function (n) { return n.responseText; }), ta.json = function (n, t) { return Nt(n, "application/json", Qo, t); }, ta.html = function (n, t) { return Nt(n, "text/html", na, t); }, ta.xml = At(function (n) { return n.responseXML; }), "function" == typeof define && define.amd ? define(ta) : "object" == typeof module && module.exports && (module.exports = ta), this.d3 = ta;
}();
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;
(function () {
    /** Used as a safe reference for `undefined` in pre-ES5 environments. */
    var undefined;
    /** Used as the semantic version number. */
    var VERSION = '4.17.2';
    /** Used as the size to enable large array optimizations. */
    var LARGE_ARRAY_SIZE = 200;
    /** Error message constants. */
    var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.', FUNC_ERROR_TEXT = 'Expected a function';
    /** Used to stand-in for `undefined` hash values. */
    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** Used as the maximum memoize cache size. */
    var MAX_MEMOIZE_SIZE = 500;
    /** Used as the internal argument placeholder. */
    var PLACEHOLDER = '__lodash_placeholder__';
    /** Used to compose bitmasks for cloning. */
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    /** Used to compose bitmasks for value comparisons. */
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    /** Used to compose bitmasks for function metadata. */
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    /** Used as default options for `_.truncate`. */
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = '...';
    /** Used to detect hot functions by number of calls within a span of milliseconds. */
    var HOT_COUNT = 800, HOT_SPAN = 16;
    /** Used to indicate the type of lazy iteratees. */
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    /** Used as references for various `Number` constants. */
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
    /** Used as references for the maximum length and index of an array. */
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    /** Used to associate wrap methods with their bit flags. */
    var wrapFlags = [
        ['ary', WRAP_ARY_FLAG],
        ['bind', WRAP_BIND_FLAG],
        ['bindKey', WRAP_BIND_KEY_FLAG],
        ['curry', WRAP_CURRY_FLAG],
        ['curryRight', WRAP_CURRY_RIGHT_FLAG],
        ['flip', WRAP_FLIP_FLAG],
        ['partial', WRAP_PARTIAL_FLAG],
        ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
        ['rearg', WRAP_REARG_FLAG]
    ];
    /** `Object#toString` result references. */
    var argsTag = '[object Arguments]', arrayTag = '[object Array]', asyncTag = '[object AsyncFunction]', boolTag = '[object Boolean]', dateTag = '[object Date]', domExcTag = '[object DOMException]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', nullTag = '[object Null]', objectTag = '[object Object]', promiseTag = '[object Promise]', proxyTag = '[object Proxy]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', undefinedTag = '[object Undefined]', weakMapTag = '[object WeakMap]', weakSetTag = '[object WeakSet]';
    var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
    /** Used to match empty string literals in compiled template source. */
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    /** Used to match HTML entities and HTML characters. */
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    /** Used to match template delimiters. */
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    /** Used to match property names within property paths. */
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g, reTrimStart = /^\s+/, reTrimEnd = /\s+$/;
    /** Used to match wrap detail comments. */
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    /** Used to match words composed of alphanumeric characters. */
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    /** Used to match backslashes in property paths. */
    var reEscapeChar = /\\(\\)?/g;
    /**
     * Used to match
     * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
     */
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    /** Used to match `RegExp` flags from their coerced string values. */
    var reFlags = /\w*$/;
    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i;
    /** Used to detect host constructors (Safari). */
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i;
    /** Used to detect unsigned integer values. */
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    /** Used to match Latin Unicode letters (excluding mathematical operators). */
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    /** Used to ensure capturing order of template delimiters. */
    var reNoMatch = /($^)/;
    /** Used to match unescaped characters in compiled string literals. */
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    /** Used to compose unicode character classes. */
    var rsAstralRange = '\\ud800-\\udfff', rsComboMarksRange = '\\u0300-\\u036f', reComboHalfMarksRange = '\\ufe20-\\ufe2f', rsComboSymbolsRange = '\\u20d0-\\u20ff', rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = '\\u2700-\\u27bf', rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff', rsMathOpRange = '\\xac\\xb1\\xd7\\xf7', rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf', rsPunctuationRange = '\\u2000-\\u206f', rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000', rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde', rsVarRange = '\\ufe0e\\ufe0f', rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    /** Used to compose unicode capture groups. */
    var rsApos = "['\u2019]", rsAstral = '[' + rsAstralRange + ']', rsBreak = '[' + rsBreakRange + ']', rsCombo = '[' + rsComboRange + ']', rsDigits = '\\d+', rsDingbat = '[' + rsDingbatRange + ']', rsLower = '[' + rsLowerRange + ']', rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']', rsFitz = '\\ud83c[\\udffb-\\udfff]', rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')', rsNonAstral = '[^' + rsAstralRange + ']', rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}', rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]', rsUpper = '[' + rsUpperRange + ']', rsZWJ = '\\u200d';
    /** Used to compose unicode regexes. */
    var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')', rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')', rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?', rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?', reOptMod = rsModifier + '?', rsOptVar = '[' + rsVarRange + ']?', rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*', rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)', rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)', rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq, rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
    /** Used to match apostrophes. */
    var reApos = RegExp(rsApos, 'g');
    /**
     * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
     * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
     */
    var reComboMark = RegExp(rsCombo, 'g');
    /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
    var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
    /** Used to match complex or compound words. */
    var reUnicodeWord = RegExp([
        rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
        rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
        rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
        rsUpper + '+' + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
    ].join('|'), 'g');
    /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
    var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
    /** Used to detect strings that need a more robust regexp to match words. */
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    /** Used to assign default `context` object properties. */
    var contextProps = [
        'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
        'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
        'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
        'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
        '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
    ];
    /** Used to make template sourceURLs easier to identify. */
    var templateCounter = -1;
    /** Used to identify `toStringTag` values of typed arrays. */
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
        typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
            typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
                typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
                    typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
        typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
            typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
                typedArrayTags[errorTag] = typedArrayTags[funcTag] =
                    typedArrayTags[mapTag] = typedArrayTags[numberTag] =
                        typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
                            typedArrayTags[setTag] = typedArrayTags[stringTag] =
                                typedArrayTags[weakMapTag] = false;
    /** Used to identify `toStringTag` values supported by `_.clone`. */
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] =
        cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
            cloneableTags[boolTag] = cloneableTags[dateTag] =
                cloneableTags[float32Tag] = cloneableTags[float64Tag] =
                    cloneableTags[int8Tag] = cloneableTags[int16Tag] =
                        cloneableTags[int32Tag] = cloneableTags[mapTag] =
                            cloneableTags[numberTag] = cloneableTags[objectTag] =
                                cloneableTags[regexpTag] = cloneableTags[setTag] =
                                    cloneableTags[stringTag] = cloneableTags[symbolTag] =
                                        cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
                                            cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] =
        cloneableTags[weakMapTag] = false;
    /** Used to map Latin Unicode letters to basic Latin letters. */
    var deburredLetters = {
        // Latin-1 Supplement block.
        '\xc0': 'A', '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
        '\xe0': 'a', '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
        '\xc7': 'C', '\xe7': 'c',
        '\xd0': 'D', '\xf0': 'd',
        '\xc8': 'E', '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
        '\xe8': 'e', '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
        '\xcc': 'I', '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
        '\xec': 'i', '\xed': 'i', '\xee': 'i', '\xef': 'i',
        '\xd1': 'N', '\xf1': 'n',
        '\xd2': 'O', '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
        '\xf2': 'o', '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
        '\xd9': 'U', '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
        '\xf9': 'u', '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
        '\xdd': 'Y', '\xfd': 'y', '\xff': 'y',
        '\xc6': 'Ae', '\xe6': 'ae',
        '\xde': 'Th', '\xfe': 'th',
        '\xdf': 'ss',
        // Latin Extended-A block.
        '\u0100': 'A', '\u0102': 'A', '\u0104': 'A',
        '\u0101': 'a', '\u0103': 'a', '\u0105': 'a',
        '\u0106': 'C', '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
        '\u0107': 'c', '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
        '\u010e': 'D', '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
        '\u0112': 'E', '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
        '\u0113': 'e', '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
        '\u011c': 'G', '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
        '\u011d': 'g', '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
        '\u0124': 'H', '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
        '\u0128': 'I', '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
        '\u0129': 'i', '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
        '\u0134': 'J', '\u0135': 'j',
        '\u0136': 'K', '\u0137': 'k', '\u0138': 'k',
        '\u0139': 'L', '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
        '\u013a': 'l', '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
        '\u0143': 'N', '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
        '\u0144': 'n', '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
        '\u014c': 'O', '\u014e': 'O', '\u0150': 'O',
        '\u014d': 'o', '\u014f': 'o', '\u0151': 'o',
        '\u0154': 'R', '\u0156': 'R', '\u0158': 'R',
        '\u0155': 'r', '\u0157': 'r', '\u0159': 'r',
        '\u015a': 'S', '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
        '\u015b': 's', '\u015d': 's', '\u015f': 's', '\u0161': 's',
        '\u0162': 'T', '\u0164': 'T', '\u0166': 'T',
        '\u0163': 't', '\u0165': 't', '\u0167': 't',
        '\u0168': 'U', '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
        '\u0169': 'u', '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
        '\u0174': 'W', '\u0175': 'w',
        '\u0176': 'Y', '\u0177': 'y', '\u0178': 'Y',
        '\u0179': 'Z', '\u017b': 'Z', '\u017d': 'Z',
        '\u017a': 'z', '\u017c': 'z', '\u017e': 'z',
        '\u0132': 'IJ', '\u0133': 'ij',
        '\u0152': 'Oe', '\u0153': 'oe',
        '\u0149': "'n", '\u017f': 's'
    };
    /** Used to map characters to HTML entities. */
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    };
    /** Used to map HTML entities to characters. */
    var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'"
    };
    /** Used to escape characters for inclusion in compiled string literals. */
    var stringEscapes = {
        '\\': '\\',
        "'": "'",
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };
    /** Built-in method references without a dependency on `root`. */
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */
    var root = freeGlobal || freeSelf || Function('return this')();
    /** Detect free variable `exports`. */
    var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */
    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */
    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Detect free variable `process` from Node.js. */
    var freeProcess = moduleExports && freeGlobal.process;
    /** Used to access faster Node.js helpers. */
    var nodeUtil = (function () {
        try {
            return freeProcess && freeProcess.binding && freeProcess.binding('util');
        }
        catch (e) { }
    }());
    /* Node.js helper references. */
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    /*--------------------------------------------------------------------------*/
    /**
     * Adds the key-value `pair` to `map`.
     *
     * @private
     * @param {Object} map The map to modify.
     * @param {Array} pair The key-value pair to add.
     * @returns {Object} Returns `map`.
     */
    function addMapEntry(map, pair) {
        // Don't return `map.set` because it's not chainable in IE 11.
        map.set(pair[0], pair[1]);
        return map;
    }
    /**
     * Adds `value` to `set`.
     *
     * @private
     * @param {Object} set The set to modify.
     * @param {*} value The value to add.
     * @returns {Object} Returns `set`.
     */
    function addSetEntry(set, value) {
        // Don't return `set.add` because it's not chainable in IE 11.
        set.add(value);
        return set;
    }
    /**
     * A faster alternative to `Function#apply`, this function invokes `func`
     * with the `this` binding of `thisArg` and the arguments of `args`.
     *
     * @private
     * @param {Function} func The function to invoke.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} args The arguments to invoke `func` with.
     * @returns {*} Returns the result of `func`.
     */
    function apply(func, thisArg, args) {
        switch (args.length) {
            case 0: return func.call(thisArg);
            case 1: return func.call(thisArg, args[0]);
            case 2: return func.call(thisArg, args[0], args[1]);
            case 3: return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
    }
    /**
     * A specialized version of `baseAggregator` for arrays.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
    }
    /**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }
        return array;
    }
    /**
     * A specialized version of `_.forEachRight` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
            if (iteratee(array[length], length, array) === false) {
                break;
            }
        }
        return array;
    }
    /**
     * A specialized version of `_.every` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     */
    function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (!predicate(array[index], index, array)) {
                return false;
            }
        }
        return true;
    }
    /**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
                result[resIndex++] = value;
            }
        }
        return result;
    }
    /**
     * A specialized version of `_.includes` for arrays without support for
     * specifying an index to search from.
     *
     * @private
     * @param {Array} [array] The array to inspect.
     * @param {*} target The value to search for.
     * @returns {boolean} Returns `true` if `target` is found, else `false`.
     */
    function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
    }
    /**
     * This function is like `arrayIncludes` except that it accepts a comparator.
     *
     * @private
     * @param {Array} [array] The array to inspect.
     * @param {*} target The value to search for.
     * @param {Function} comparator The comparator invoked per element.
     * @returns {boolean} Returns `true` if `target` is found, else `false`.
     */
    function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (comparator(value, array[index])) {
                return true;
            }
        }
        return false;
    }
    /**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
            result[index] = iteratee(array[index], index, array);
        }
        return result;
    }
    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
            array[offset + index] = values[index];
        }
        return array;
    }
    /**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
            accumulator = array[++index];
        }
        while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
    }
    /**
     * A specialized version of `_.reduceRight` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the last element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
            accumulator = array[--length];
        }
        while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
    }
    /**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
            if (predicate(array[index], index, array)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Gets the size of an ASCII `string`.
     *
     * @private
     * @param {string} string The string inspect.
     * @returns {number} Returns the string size.
     */
    var asciiSize = baseProperty('length');
    /**
     * Converts an ASCII `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function asciiToArray(string) {
        return string.split('');
    }
    /**
     * Splits an ASCII `string` into an array of its words.
     *
     * @private
     * @param {string} The string to inspect.
     * @returns {Array} Returns the words of `string`.
     */
    function asciiWords(string) {
        return string.match(reAsciiWord) || [];
    }
    /**
     * The base implementation of methods like `_.findKey` and `_.findLastKey`,
     * without support for iteratee shorthands, which iterates over `collection`
     * using `eachFunc`.
     *
     * @private
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} predicate The function invoked per iteration.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the found element or its key, else `undefined`.
     */
    function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function (value, key, collection) {
            if (predicate(value, key, collection)) {
                result = key;
                return false;
            }
        });
        return result;
    }
    /**
     * The base implementation of `_.findIndex` and `_.findLastIndex` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} predicate The function invoked per iteration.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while ((fromRight ? index-- : ++index < length)) {
            if (predicate(array[index], index, array)) {
                return index;
            }
        }
        return -1;
    }
    /**
     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseIndexOf(array, value, fromIndex) {
        return value === value
            ? strictIndexOf(array, value, fromIndex)
            : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    /**
     * This function is like `baseIndexOf` except that it accepts a comparator.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @param {Function} comparator The comparator invoked per element.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
            if (comparator(array[index], value)) {
                return index;
            }
        }
        return -1;
    }
    /**
     * The base implementation of `_.isNaN` without support for number objects.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     */
    function baseIsNaN(value) {
        return value !== value;
    }
    /**
     * The base implementation of `_.mean` and `_.meanBy` without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the mean.
     */
    function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? (baseSum(array, iteratee) / length) : NAN;
    }
    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function baseProperty(key) {
        return function (object) {
            return object == null ? undefined : object[key];
        };
    }
    /**
     * The base implementation of `_.propertyOf` without support for deep paths.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyOf(object) {
        return function (key) {
            return object == null ? undefined : object[key];
        };
    }
    /**
     * The base implementation of `_.reduce` and `_.reduceRight`, without support
     * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} accumulator The initial value.
     * @param {boolean} initAccum Specify using the first or last element of
     *  `collection` as the initial value.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the accumulated value.
     */
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function (value, index, collection) {
            accumulator = initAccum
                ? (initAccum = false, value)
                : iteratee(accumulator, value, index, collection);
        });
        return accumulator;
    }
    /**
     * The base implementation of `_.sortBy` which uses `comparer` to define the
     * sort order of `array` and replaces criteria objects with their corresponding
     * values.
     *
     * @private
     * @param {Array} array The array to sort.
     * @param {Function} comparer The function to define sort order.
     * @returns {Array} Returns `array`.
     */
    function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
            array[length] = array[length].value;
        }
        return array;
    }
    /**
     * The base implementation of `_.sum` and `_.sumBy` without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the sum.
     */
    function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined) {
                result = result === undefined ? current : (result + current);
            }
        }
        return result;
    }
    /**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */
    function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
            result[index] = iteratee(index);
        }
        return result;
    }
    /**
     * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
     * of key-value pairs for `object` corresponding to the property names of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the key-value pairs.
     */
    function baseToPairs(object, props) {
        return arrayMap(props, function (key) {
            return [key, object[key]];
        });
    }
    /**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */
    function baseUnary(func) {
        return function (value) {
            return func(value);
        };
    }
    /**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */
    function baseValues(object, props) {
        return arrayMap(props, function (key) {
            return object[key];
        });
    }
    /**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function cacheHas(cache, key) {
        return cache.has(key);
    }
    /**
     * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
     * that is not found in the character symbols.
     *
     * @private
     * @param {Array} strSymbols The string symbols to inspect.
     * @param {Array} chrSymbols The character symbols to find.
     * @returns {number} Returns the index of the first unmatched string symbol.
     */
    function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) { }
        return index;
    }
    /**
     * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
     * that is not found in the character symbols.
     *
     * @private
     * @param {Array} strSymbols The string symbols to inspect.
     * @param {Array} chrSymbols The character symbols to find.
     * @returns {number} Returns the index of the last unmatched string symbol.
     */
    function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) { }
        return index;
    }
    /**
     * Gets the number of `placeholder` occurrences in `array`.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} placeholder The placeholder to search for.
     * @returns {number} Returns the placeholder count.
     */
    function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
            if (array[length] === placeholder) {
                ++result;
            }
        }
        return result;
    }
    /**
     * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
     * letters to basic Latin letters.
     *
     * @private
     * @param {string} letter The matched letter to deburr.
     * @returns {string} Returns the deburred letter.
     */
    var deburrLetter = basePropertyOf(deburredLetters);
    /**
     * Used by `_.escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    /**
     * Used by `_.template` to escape characters for inclusion in compiled string literals.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
    }
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function getValue(object, key) {
        return object == null ? undefined : object[key];
    }
    /**
     * Checks if `string` contains Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a symbol is found, else `false`.
     */
    function hasUnicode(string) {
        return reHasUnicode.test(string);
    }
    /**
     * Checks if `string` contains a word composed of Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a word is found, else `false`.
     */
    function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
    }
    /**
     * Converts `iterator` to an array.
     *
     * @private
     * @param {Object} iterator The iterator to convert.
     * @returns {Array} Returns the converted array.
     */
    function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
            result.push(data.value);
        }
        return result;
    }
    /**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */
    function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function (value, key) {
            result[++index] = [key, value];
        });
        return result;
    }
    /**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */
    function overArg(func, transform) {
        return function (arg) {
            return func(transform(arg));
        };
    }
    /**
     * Replaces all `placeholder` elements in `array` with an internal placeholder
     * and returns an array of their indexes.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {*} placeholder The placeholder to replace.
     * @returns {Array} Returns the new array of placeholder indexes.
     */
    function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
                array[index] = PLACEHOLDER;
                result[resIndex++] = index;
            }
        }
        return result;
    }
    /**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */
    function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function (value) {
            result[++index] = value;
        });
        return result;
    }
    /**
     * Converts `set` to its value-value pairs.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the value-value pairs.
     */
    function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function (value) {
            result[++index] = [value, value];
        });
        return result;
    }
    /**
     * A specialized version of `_.indexOf` which performs strict equality
     * comparisons of values, i.e. `===`.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }
    /**
     * A specialized version of `_.lastIndexOf` which performs strict equality
     * comparisons of values, i.e. `===`.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
            if (array[index] === value) {
                return index;
            }
        }
        return index;
    }
    /**
     * Gets the number of symbols in `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the string size.
     */
    function stringSize(string) {
        return hasUnicode(string)
            ? unicodeSize(string)
            : asciiSize(string);
    }
    /**
     * Converts `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function stringToArray(string) {
        return hasUnicode(string)
            ? unicodeToArray(string)
            : asciiToArray(string);
    }
    /**
     * Used by `_.unescape` to convert HTML entities to characters.
     *
     * @private
     * @param {string} chr The matched character to unescape.
     * @returns {string} Returns the unescaped character.
     */
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    /**
     * Gets the size of a Unicode `string`.
     *
     * @private
     * @param {string} string The string inspect.
     * @returns {number} Returns the string size.
     */
    function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
            ++result;
        }
        return result;
    }
    /**
     * Converts a Unicode `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */
    function unicodeToArray(string) {
        return string.match(reUnicode) || [];
    }
    /**
     * Splits a Unicode `string` into an array of its words.
     *
     * @private
     * @param {string} The string to inspect.
     * @returns {Array} Returns the words of `string`.
     */
    function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
    }
    /*--------------------------------------------------------------------------*/
    /**
     * Create a new pristine `lodash` function using the `context` object.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Util
     * @param {Object} [context=root] The context object.
     * @returns {Function} Returns a new `lodash` function.
     * @example
     *
     * _.mixin({ 'foo': _.constant('foo') });
     *
     * var lodash = _.runInContext();
     * lodash.mixin({ 'bar': lodash.constant('bar') });
     *
     * _.isFunction(_.foo);
     * // => true
     * _.isFunction(_.bar);
     * // => false
     *
     * lodash.isFunction(lodash.foo);
     * // => false
     * lodash.isFunction(lodash.bar);
     * // => true
     *
     * // Create a suped-up `defer` in Node.js.
     * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
     */
    var runInContext = (function runInContext(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        /** Built-in constructor references. */
        var Array = context.Array, Date = context.Date, Error = context.Error, Function = context.Function, Math = context.Math, Object = context.Object, RegExp = context.RegExp, String = context.String, TypeError = context.TypeError;
        /** Used for built-in method references. */
        var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
        /** Used to detect overreaching core-js shims. */
        var coreJsData = context['__core-js_shared__'];
        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;
        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;
        /** Used to generate unique IDs. */
        var idCounter = 0;
        /** Used to detect methods masquerading as native. */
        var maskSrcKey = (function () {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
            return uid ? ('Symbol(src)_1.' + uid) : '';
        }());
        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;
        /** Used to infer the `Object` constructor. */
        var objectCtorString = funcToString.call(Object);
        /** Used to restore the original `_` reference in `_.noConflict`. */
        var oldDash = root._;
        /** Used to detect if a method is native. */
        var reIsNative = RegExp('^' +
            funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        /** Built-in value references. */
        var Buffer = moduleExports ? context.Buffer : undefined, Symbol = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined, symIterator = Symbol ? Symbol.iterator : undefined, symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        var defineProperty = (function () {
            try {
                var func = getNative(Object, 'defineProperty');
                func({}, '', {});
                return func;
            }
            catch (e) { }
        }());
        /** Mocked built-ins. */
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeCeil = Math.ceil, nativeFloor = Math.floor, nativeGetSymbols = Object.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max, nativeMin = Math.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math.random, nativeReverse = arrayProto.reverse;
        /* Built-in method references that are verified to be native. */
        var DataView = getNative(context, 'DataView'), Map = getNative(context, 'Map'), Promise = getNative(context, 'Promise'), Set = getNative(context, 'Set'), WeakMap = getNative(context, 'WeakMap'), nativeCreate = getNative(Object, 'create');
        /** Used to store function metadata. */
        var metaMap = WeakMap && new WeakMap;
        /** Used to lookup unminified function names. */
        var realNames = {};
        /** Used to detect maps, sets, and weakmaps. */
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        /** Used to convert symbols to primitives and strings. */
        var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
        /*------------------------------------------------------------------------*/
        /**
         * Creates a `lodash` object which wraps `value` to enable implicit method
         * chain sequences. Methods that operate on and return arrays, collections,
         * and functions can be chained together. Methods that retrieve a single value
         * or may return a primitive value will automatically end the chain sequence
         * and return the unwrapped value. Otherwise, the value must be unwrapped
         * with `_#value`.
         *
         * Explicit chain sequences, which must be unwrapped with `_#value`, may be
         * enabled using `_.chain`.
         *
         * The execution of chained methods is lazy, that is, it's deferred until
         * `_#value` is implicitly or explicitly called.
         *
         * Lazy evaluation allows several methods to support shortcut fusion.
         * Shortcut fusion is an optimization to merge iteratee calls; this avoids
         * the creation of intermediate arrays and can greatly reduce the number of
         * iteratee executions. Sections of a chain sequence qualify for shortcut
         * fusion if the section is applied to an array of at least `200` elements
         * and any iteratees accept only one argument. The heuristic for whether a
         * section qualifies for shortcut fusion is subject to change.
         *
         * Chaining is supported in custom builds as long as the `_#value` method is
         * directly or indirectly included in the build.
         *
         * In addition to lodash methods, wrappers have `Array` and `String` methods.
         *
         * The wrapper `Array` methods are:
         * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
         *
         * The wrapper `String` methods are:
         * `replace` and `split`
         *
         * The wrapper methods that support shortcut fusion are:
         * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
         * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
         * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
         *
         * The chainable wrapper methods are:
         * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
         * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
         * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
         * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
         * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
         * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
         * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
         * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
         * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
         * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
         * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
         * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
         * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
         * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
         * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
         * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
         * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
         * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
         * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
         * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
         * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
         * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
         * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
         * `zipObject`, `zipObjectDeep`, and `zipWith`
         *
         * The wrapper methods that are **not** chainable by default are:
         * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
         * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
         * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
         * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
         * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
         * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
         * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
         * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
         * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
         * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
         * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
         * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
         * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
         * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
         * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
         * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
         * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
         * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
         * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
         * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
         * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
         * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
         * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
         * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
         * `upperFirst`, `value`, and `words`
         *
         * @name _
         * @constructor
         * @category Seq
         * @param {*} value The value to wrap in a `lodash` instance.
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * function square(n) {
         *   return n * n;
         * }
         *
         * var wrapped = _([1, 2, 3]);
         *
         * // Returns an unwrapped value.
         * wrapped.reduce(_.add);
         * // => 6
         *
         * // Returns a wrapped value.
         * var squares = wrapped.map(square);
         *
         * _.isArray(squares);
         * // => false
         *
         * _.isArray(squares.value());
         * // => true
         */
        function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                if (value instanceof LodashWrapper) {
                    return value;
                }
                if (hasOwnProperty.call(value, '__wrapped__')) {
                    return wrapperClone(value);
                }
            }
            return new LodashWrapper(value);
        }
        /**
         * The base implementation of `_.create` without support for assigning
         * properties to the created object.
         *
         * @private
         * @param {Object} proto The object to inherit from.
         * @returns {Object} Returns the new object.
         */
        var baseCreate = (function () {
            function object() { }
            return function (proto) {
                if (!isObject(proto)) {
                    return {};
                }
                if (objectCreate) {
                    return objectCreate(proto);
                }
                object.prototype = proto;
                var result = new object;
                object.prototype = undefined;
                return result;
            };
        }());
        /**
         * The function whose prototype chain sequence wrappers inherit from.
         *
         * @private
         */
        function baseLodash() {
            // No operation performed.
        }
        /**
         * The base constructor for creating `lodash` wrapper objects.
         *
         * @private
         * @param {*} value The value to wrap.
         * @param {boolean} [chainAll] Enable explicit method chain sequences.
         */
        function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined;
        }
        /**
         * By default, the template delimiters used by lodash are like those in
         * embedded Ruby (ERB). Change the following template settings to use
         * alternative delimiters.
         *
         * @static
         * @memberOf _
         * @type {Object}
         */
        lodash.templateSettings = {
            /**
             * Used to detect `data` property values to be HTML-escaped.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            'escape': reEscape,
            /**
             * Used to detect code to be evaluated.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            'evaluate': reEvaluate,
            /**
             * Used to detect `data` property values to inject.
             *
             * @memberOf _.templateSettings
             * @type {RegExp}
             */
            'interpolate': reInterpolate,
            /**
             * Used to reference the data object in the template text.
             *
             * @memberOf _.templateSettings
             * @type {string}
             */
            'variable': '',
            /**
             * Used to import variables into the compiled template.
             *
             * @memberOf _.templateSettings
             * @type {Object}
             */
            'imports': {
                /**
                 * A reference to the `lodash` function.
                 *
                 * @memberOf _.templateSettings.imports
                 * @type {Function}
                 */
                '_': lodash
            }
        };
        // Ensure wrappers are instances of `baseLodash`.
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        /*------------------------------------------------------------------------*/
        /**
         * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
         *
         * @private
         * @constructor
         * @param {*} value The value to wrap.
         */
        function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
        }
        /**
         * Creates a clone of the lazy wrapper object.
         *
         * @private
         * @name clone
         * @memberOf LazyWrapper
         * @returns {Object} Returns the cloned `LazyWrapper` object.
         */
        function lazyClone() {
            var result = new LazyWrapper(this.__wrapped__);
            result.__actions__ = copyArray(this.__actions__);
            result.__dir__ = this.__dir__;
            result.__filtered__ = this.__filtered__;
            result.__iteratees__ = copyArray(this.__iteratees__);
            result.__takeCount__ = this.__takeCount__;
            result.__views__ = copyArray(this.__views__);
            return result;
        }
        /**
         * Reverses the direction of lazy iteration.
         *
         * @private
         * @name reverse
         * @memberOf LazyWrapper
         * @returns {Object} Returns the new reversed `LazyWrapper` object.
         */
        function lazyReverse() {
            if (this.__filtered__) {
                var result = new LazyWrapper(this);
                result.__dir__ = -1;
                result.__filtered__ = true;
            }
            else {
                result = this.clone();
                result.__dir__ *= -1;
            }
            return result;
        }
        /**
         * Extracts the unwrapped value from its lazy wrapper.
         *
         * @private
         * @name value
         * @memberOf LazyWrapper
         * @returns {*} Returns the unwrapped value.
         */
        function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : (start - 1), iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || arrLength < LARGE_ARRAY_SIZE ||
                (arrLength == length && takeCount == length)) {
                return baseWrapperValue(array, this.__actions__);
            }
            var result = [];
            outer: while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                    var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type, computed = iteratee(value);
                    if (type == LAZY_MAP_FLAG) {
                        value = computed;
                    }
                    else if (!computed) {
                        if (type == LAZY_FILTER_FLAG) {
                            continue outer;
                        }
                        else {
                            break outer;
                        }
                    }
                }
                result[resIndex++] = value;
            }
            return result;
        }
        // Ensure `LazyWrapper` is an instance of `baseLodash`.
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        /*------------------------------------------------------------------------*/
        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */
        function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
        }
        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @name delete
         * @memberOf Hash
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result;
        }
        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }
        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Hash
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
        }
        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Hash
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the hash instance.
         */
        function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
            return this;
        }
        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        /*------------------------------------------------------------------------*/
        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */
        function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
        }
        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
                return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
                data.pop();
            }
            else {
                splice.call(data, index, 1);
            }
            --this.size;
            return true;
        }
        /**
         * Gets the list cache value for `key`.
         *
         * @private
         * @name get
         * @memberOf ListCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1];
        }
        /**
         * Checks if a list cache value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf ListCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
        }
        /**
         * Sets the list cache `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf ListCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the list cache instance.
         */
        function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
                ++this.size;
                data.push([key, value]);
            }
            else {
                data[index][1] = value;
            }
            return this;
        }
        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        /*------------------------------------------------------------------------*/
        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1]);
            }
        }
        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */
        function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
                'hash': new Hash,
                'map': new (Map || ListCache),
                'string': new Hash
            };
        }
        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function mapCacheDelete(key) {
            var result = getMapData(this, key)['delete'](key);
            this.size -= result ? 1 : 0;
            return result;
        }
        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function mapCacheGet(key) {
            return getMapData(this, key).get(key);
        }
        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapCacheHas(key) {
            return getMapData(this, key).has(key);
        }
        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */
        function mapCacheSet(key, value) {
            var data = getMapData(this, key), size = data.size;
            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this;
        }
        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        /*------------------------------------------------------------------------*/
        /**
         *
         * Creates an array cache object to store unique values.
         *
         * @private
         * @constructor
         * @param {Array} [values] The values to cache.
         */
        function SetCache(values) {
            var index = -1, length = values == null ? 0 : values.length;
            this.__data__ = new MapCache;
            while (++index < length) {
                this.add(values[index]);
            }
        }
        /**
         * Adds `value` to the array cache.
         *
         * @private
         * @name add
         * @memberOf SetCache
         * @alias push
         * @param {*} value The value to cache.
         * @returns {Object} Returns the cache instance.
         */
        function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
        }
        /**
         * Checks if `value` is in the array cache.
         *
         * @private
         * @name has
         * @memberOf SetCache
         * @param {*} value The value to search for.
         * @returns {number} Returns `true` if `value` is found, else `false`.
         */
        function setCacheHas(value) {
            return this.__data__.has(value);
        }
        // Add methods to `SetCache`.
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        /*------------------------------------------------------------------------*/
        /**
         * Creates a stack cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
        }
        /**
         * Removes all key-value entries from the stack.
         *
         * @private
         * @name clear
         * @memberOf Stack
         */
        function stackClear() {
            this.__data__ = new ListCache;
            this.size = 0;
        }
        /**
         * Removes `key` and its value from the stack.
         *
         * @private
         * @name delete
         * @memberOf Stack
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function stackDelete(key) {
            var data = this.__data__, result = data['delete'](key);
            this.size = data.size;
            return result;
        }
        /**
         * Gets the stack value for `key`.
         *
         * @private
         * @name get
         * @memberOf Stack
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function stackGet(key) {
            return this.__data__.get(key);
        }
        /**
         * Checks if a stack value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Stack
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function stackHas(key) {
            return this.__data__.has(key);
        }
        /**
         * Sets the stack `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Stack
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the stack cache instance.
         */
        function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
                var pairs = data.__data__;
                if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
                    pairs.push([key, value]);
                    this.size = ++data.size;
                    return this;
                }
                data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
        }
        // Add methods to `Stack`.
        Stack.prototype.clear = stackClear;
        Stack.prototype['delete'] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        /*------------------------------------------------------------------------*/
        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */
        function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
            for (var key in value) {
                if ((inherited || hasOwnProperty.call(value, key)) &&
                    !(skipIndexes && (
                    // Safari 9 has enumerable `arguments.length` in strict mode.
                    key == 'length' ||
                        // Node.js 0.10 has enumerable non-index properties on buffers.
                        (isBuff && (key == 'offset' || key == 'parent')) ||
                        // PhantomJS 2 has enumerable non-index properties on typed arrays.
                        (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                        // Skip index properties.
                        isIndex(key, length)))) {
                    result.push(key);
                }
            }
            return result;
        }
        /**
         * A specialized version of `_.sample` for arrays.
         *
         * @private
         * @param {Array} array The array to sample.
         * @returns {*} Returns the random element.
         */
        function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined;
        }
        /**
         * A specialized version of `_.sampleSize` for arrays.
         *
         * @private
         * @param {Array} array The array to sample.
         * @param {number} n The number of elements to sample.
         * @returns {Array} Returns the random elements.
         */
        function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        /**
         * A specialized version of `_.shuffle` for arrays.
         *
         * @private
         * @param {Array} array The array to shuffle.
         * @returns {Array} Returns the new shuffled array.
         */
        function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
        }
        /**
         * Used by `_.defaults` to customize its `_.assignIn` use.
         *
         * @private
         * @param {*} objValue The destination value.
         * @param {*} srcValue The source value.
         * @param {string} key The key of the property to assign.
         * @param {Object} object The parent object of `objValue`.
         * @returns {*} Returns the value to assign.
         */
        function assignInDefaults(objValue, srcValue, key, object) {
            if (objValue === undefined ||
                (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
                return srcValue;
            }
            return objValue;
        }
        /**
         * This function is like `assignValue` except that it doesn't assign
         * `undefined` values.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function assignMergeValue(object, key, value) {
            if ((value !== undefined && !eq(object[key], value)) ||
                (value === undefined && !(key in object))) {
                baseAssignValue(object, key, value);
            }
        }
        /**
         * Assigns `value` to `key` of `object` if the existing value is not equivalent
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
                (value === undefined && !(key in object))) {
                baseAssignValue(object, key, value);
            }
        }
        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
                if (eq(array[length][0], key)) {
                    return length;
                }
            }
            return -1;
        }
        /**
         * Aggregates elements of `collection` on `accumulator` with keys transformed
         * by `iteratee` and values set by `setter`.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} setter The function to set `accumulator` values.
         * @param {Function} iteratee The iteratee to transform keys.
         * @param {Object} accumulator The initial aggregated object.
         * @returns {Function} Returns `accumulator`.
         */
        function baseAggregator(collection, setter, iteratee, accumulator) {
            baseEach(collection, function (value, key, collection) {
                setter(accumulator, value, iteratee(value), collection);
            });
            return accumulator;
        }
        /**
         * The base implementation of `_.assign` without support for multiple sources
         * or `customizer` functions.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @returns {Object} Returns `object`.
         */
        function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
        }
        /**
         * The base implementation of `_.assignIn` without support for multiple sources
         * or `customizer` functions.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @returns {Object} Returns `object`.
         */
        function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
        }
        /**
         * The base implementation of `assignValue` and `assignMergeValue` without
         * value checks.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function baseAssignValue(object, key, value) {
            if (key == '__proto__' && defineProperty) {
                defineProperty(object, key, {
                    'configurable': true,
                    'enumerable': true,
                    'value': value,
                    'writable': true
                });
            }
            else {
                object[key] = value;
            }
        }
        /**
         * The base implementation of `_.at` without support for individual paths.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {string[]} paths The property paths to pick.
         * @returns {Array} Returns the picked elements.
         */
        function baseAt(object, paths) {
            var index = -1, length = paths.length, result = Array(length), skip = object == null;
            while (++index < length) {
                result[index] = skip ? undefined : get(object, paths[index]);
            }
            return result;
        }
        /**
         * The base implementation of `_.clamp` which doesn't coerce arguments.
         *
         * @private
         * @param {number} number The number to clamp.
         * @param {number} [lower] The lower bound.
         * @param {number} upper The upper bound.
         * @returns {number} Returns the clamped number.
         */
        function baseClamp(number, lower, upper) {
            if (number === number) {
                if (upper !== undefined) {
                    number = number <= upper ? number : upper;
                }
                if (lower !== undefined) {
                    number = number >= lower ? number : lower;
                }
            }
            return number;
        }
        /**
         * The base implementation of `_.clone` and `_.cloneDeep` which tracks
         * traversed objects.
         *
         * @private
         * @param {*} value The value to clone.
         * @param {boolean} bitmask The bitmask flags.
         *  1 - Deep clone
         *  2 - Flatten inherited properties
         *  4 - Clone symbols
         * @param {Function} [customizer] The function to customize cloning.
         * @param {string} [key] The key of `value`.
         * @param {Object} [object] The parent object of `value`.
         * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
         * @returns {*} Returns the cloned value.
         */
        function baseClone(value, bitmask, customizer, key, object, stack) {
            var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
                result = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result !== undefined) {
                return result;
            }
            if (!isObject(value)) {
                return value;
            }
            var isArr = isArray(value);
            if (isArr) {
                result = initCloneArray(value);
                if (!isDeep) {
                    return copyArray(value, result);
                }
            }
            else {
                var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
                if (isBuffer(value)) {
                    return cloneBuffer(value, isDeep);
                }
                if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
                    result = (isFlat || isFunc) ? {} : initCloneObject(value);
                    if (!isDeep) {
                        return isFlat
                            ? copySymbolsIn(value, baseAssignIn(result, value))
                            : copySymbols(value, baseAssign(result, value));
                    }
                }
                else {
                    if (!cloneableTags[tag]) {
                        return object ? value : {};
                    }
                    result = initCloneByTag(value, tag, baseClone, isDeep);
                }
            }
            // Check for circular references and return its corresponding clone.
            stack || (stack = new Stack);
            var stacked = stack.get(value);
            if (stacked) {
                return stacked;
            }
            stack.set(value, result);
            var keysFunc = isFull
                ? (isFlat ? getAllKeysIn : getAllKeys)
                : (isFlat ? keysIn : keys);
            var props = isArr ? undefined : keysFunc(value);
            arrayEach(props || value, function (subValue, key) {
                if (props) {
                    key = subValue;
                    subValue = value[key];
                }
                // Recursively populate clone (susceptible to call stack limits).
                assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
            });
            return result;
        }
        /**
         * The base implementation of `_.conforms` which doesn't clone `source`.
         *
         * @private
         * @param {Object} source The object of property predicates to conform to.
         * @returns {Function} Returns the new spec function.
         */
        function baseConforms(source) {
            var props = keys(source);
            return function (object) {
                return baseConformsTo(object, source, props);
            };
        }
        /**
         * The base implementation of `_.conformsTo` which accepts `props` to check.
         *
         * @private
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property predicates to conform to.
         * @returns {boolean} Returns `true` if `object` conforms, else `false`.
         */
        function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
                return !length;
            }
            object = Object(object);
            while (length--) {
                var key = props[length], predicate = source[key], value = object[key];
                if ((value === undefined && !(key in object)) || !predicate(value)) {
                    return false;
                }
            }
            return true;
        }
        /**
         * The base implementation of `_.delay` and `_.defer` which accepts `args`
         * to provide to `func`.
         *
         * @private
         * @param {Function} func The function to delay.
         * @param {number} wait The number of milliseconds to delay invocation.
         * @param {Array} args The arguments to provide to `func`.
         * @returns {number|Object} Returns the timer id or timeout object.
         */
        function baseDelay(func, wait, args) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function () { func.apply(undefined, args); }, wait);
        }
        /**
         * The base implementation of methods like `_.difference` without support
         * for excluding multiple arrays or iteratee shorthands.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {Array} values The values to exclude.
         * @param {Function} [iteratee] The iteratee invoked per element.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of filtered values.
         */
        function baseDifference(array, values, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, isCommon = true, length = array.length, result = [], valuesLength = values.length;
            if (!length) {
                return result;
            }
            if (iteratee) {
                values = arrayMap(values, baseUnary(iteratee));
            }
            if (comparator) {
                includes = arrayIncludesWith;
                isCommon = false;
            }
            else if (values.length >= LARGE_ARRAY_SIZE) {
                includes = cacheHas;
                isCommon = false;
                values = new SetCache(values);
            }
            outer: while (++index < length) {
                var value = array[index], computed = iteratee == null ? value : iteratee(value);
                value = (comparator || value !== 0) ? value : 0;
                if (isCommon && computed === computed) {
                    var valuesIndex = valuesLength;
                    while (valuesIndex--) {
                        if (values[valuesIndex] === computed) {
                            continue outer;
                        }
                    }
                    result.push(value);
                }
                else if (!includes(values, computed, comparator)) {
                    result.push(value);
                }
            }
            return result;
        }
        /**
         * The base implementation of `_.forEach` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array|Object} Returns `collection`.
         */
        var baseEach = createBaseEach(baseForOwn);
        /**
         * The base implementation of `_.forEachRight` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array|Object} Returns `collection`.
         */
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        /**
         * The base implementation of `_.every` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if all elements pass the predicate check,
         *  else `false`
         */
        function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function (value, index, collection) {
                result = !!predicate(value, index, collection);
                return result;
            });
            return result;
        }
        /**
         * The base implementation of methods like `_.max` and `_.min` which accepts a
         * `comparator` to determine the extremum value.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The iteratee invoked per iteration.
         * @param {Function} comparator The comparator used to compare values.
         * @returns {*} Returns the extremum value.
         */
        function baseExtremum(array, iteratee, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
                var value = array[index], current = iteratee(value);
                if (current != null && (computed === undefined
                    ? (current === current && !isSymbol(current))
                    : comparator(current, computed))) {
                    var computed = current, result = value;
                }
            }
            return result;
        }
        /**
         * The base implementation of `_.fill` without an iteratee call guard.
         *
         * @private
         * @param {Array} array The array to fill.
         * @param {*} value The value to fill `array` with.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns `array`.
         */
        function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
                start = -start > length ? 0 : (length + start);
            }
            end = (end === undefined || end > length) ? length : toInteger(end);
            if (end < 0) {
                end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
                array[start++] = value;
            }
            return array;
        }
        /**
         * The base implementation of `_.filter` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {Array} Returns the new filtered array.
         */
        function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection, function (value, index, collection) {
                if (predicate(value, index, collection)) {
                    result.push(value);
                }
            });
            return result;
        }
        /**
         * The base implementation of `_.flatten` with support for restricting flattening.
         *
         * @private
         * @param {Array} array The array to flatten.
         * @param {number} depth The maximum recursion depth.
         * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
         * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
         * @param {Array} [result=[]] The initial result value.
         * @returns {Array} Returns the new flattened array.
         */
        function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result || (result = []);
            while (++index < length) {
                var value = array[index];
                if (depth > 0 && predicate(value)) {
                    if (depth > 1) {
                        // Recursively flatten arrays (susceptible to call stack limits).
                        baseFlatten(value, depth - 1, predicate, isStrict, result);
                    }
                    else {
                        arrayPush(result, value);
                    }
                }
                else if (!isStrict) {
                    result[result.length] = value;
                }
            }
            return result;
        }
        /**
         * The base implementation of `baseForOwn` which iterates over `object`
         * properties returned by `keysFunc` and invokes `iteratee` for each property.
         * Iteratee functions may exit iteration early by explicitly returning `false`.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @returns {Object} Returns `object`.
         */
        var baseFor = createBaseFor();
        /**
         * This function is like `baseFor` except that it iterates over properties
         * in the opposite order.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @returns {Object} Returns `object`.
         */
        var baseForRight = createBaseFor(true);
        /**
         * The base implementation of `_.forOwn` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Object} Returns `object`.
         */
        function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
        }
        /**
         * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Object} Returns `object`.
         */
        function baseForOwnRight(object, iteratee) {
            return object && baseForRight(object, iteratee, keys);
        }
        /**
         * The base implementation of `_.functions` which creates an array of
         * `object` function property names filtered from `props`.
         *
         * @private
         * @param {Object} object The object to inspect.
         * @param {Array} props The property names to filter.
         * @returns {Array} Returns the function names.
         */
        function baseFunctions(object, props) {
            return arrayFilter(props, function (key) {
                return isFunction(object[key]);
            });
        }
        /**
         * The base implementation of `_.get` without support for default values.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @returns {*} Returns the resolved value.
         */
        function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
                object = object[toKey(path[index++])];
            }
            return (index && index == length) ? object : undefined;
        }
        /**
         * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
         * `keysFunc` and `symbolsFunc` to get the enumerable property names and
         * symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @param {Function} symbolsFunc The function to get the symbols of `object`.
         * @returns {Array} Returns the array of property names and symbols.
         */
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
        }
        /**
         * The base implementation of `getTag` without fallbacks for buggy environments.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function baseGetTag(value) {
            if (value == null) {
                return value === undefined ? undefinedTag : nullTag;
            }
            value = Object(value);
            return (symToStringTag && symToStringTag in value)
                ? getRawTag(value)
                : objectToString(value);
        }
        /**
         * The base implementation of `_.gt` which doesn't coerce arguments.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is greater than `other`,
         *  else `false`.
         */
        function baseGt(value, other) {
            return value > other;
        }
        /**
         * The base implementation of `_.has` without support for deep paths.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {Array|string} key The key to check.
         * @returns {boolean} Returns `true` if `key` exists, else `false`.
         */
        function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
        }
        /**
         * The base implementation of `_.hasIn` without support for deep paths.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {Array|string} key The key to check.
         * @returns {boolean} Returns `true` if `key` exists, else `false`.
         */
        function baseHasIn(object, key) {
            return object != null && key in Object(object);
        }
        /**
         * The base implementation of `_.inRange` which doesn't coerce arguments.
         *
         * @private
         * @param {number} number The number to check.
         * @param {number} start The start of the range.
         * @param {number} end The end of the range.
         * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
         */
        function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        /**
         * The base implementation of methods like `_.intersection`, without support
         * for iteratee shorthands, that accepts an array of arrays to inspect.
         *
         * @private
         * @param {Array} arrays The arrays to inspect.
         * @param {Function} [iteratee] The iteratee invoked per element.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of shared values.
         */
        function baseIntersection(arrays, iteratee, comparator) {
            var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result = [];
            while (othIndex--) {
                var array = arrays[othIndex];
                if (othIndex && iteratee) {
                    array = arrayMap(array, baseUnary(iteratee));
                }
                maxLength = nativeMin(array.length, maxLength);
                caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
                    ? new SetCache(othIndex && array)
                    : undefined;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer: while (++index < length && result.length < maxLength) {
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                value = (comparator || value !== 0) ? value : 0;
                if (!(seen
                    ? cacheHas(seen, computed)
                    : includes(result, computed, comparator))) {
                    othIndex = othLength;
                    while (--othIndex) {
                        var cache = caches[othIndex];
                        if (!(cache
                            ? cacheHas(cache, computed)
                            : includes(arrays[othIndex], computed, comparator))) {
                            continue outer;
                        }
                    }
                    if (seen) {
                        seen.push(computed);
                    }
                    result.push(value);
                }
            }
            return result;
        }
        /**
         * The base implementation of `_.invert` and `_.invertBy` which inverts
         * `object` with values transformed by `iteratee` and set by `setter`.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} setter The function to set `accumulator` values.
         * @param {Function} iteratee The iteratee to transform values.
         * @param {Object} accumulator The initial inverted object.
         * @returns {Function} Returns `accumulator`.
         */
        function baseInverter(object, setter, iteratee, accumulator) {
            baseForOwn(object, function (value, key, object) {
                setter(accumulator, iteratee(value), key, object);
            });
            return accumulator;
        }
        /**
         * The base implementation of `_.invoke` without support for individual
         * method arguments.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the method to invoke.
         * @param {Array} args The arguments to invoke the method with.
         * @returns {*} Returns the result of the invoked method.
         */
        function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined : apply(func, object, args);
        }
        /**
         * The base implementation of `_.isArguments`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         */
        function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        /**
         * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
         */
        function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        /**
         * The base implementation of `_.isDate` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
         */
        function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        /**
         * The base implementation of `_.isEqual` which supports partial comparisons
         * and tracks traversed objects.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {boolean} bitmask The bitmask flags.
         *  1 - Unordered comparison
         *  2 - Partial comparison
         * @param {Function} [customizer] The function to customize comparisons.
         * @param {Object} [stack] Tracks traversed `value` and `other` objects.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         */
        function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
                return true;
            }
            if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
                return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        /**
         * A specialized version of `baseIsEqual` for arrays and objects which performs
         * deep comparisons and tracks traversed objects enabling objects with circular
         * references to be compared.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} [stack] Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
            if (!objIsArr) {
                objTag = getTag(object);
                objTag = objTag == argsTag ? objectTag : objTag;
            }
            if (!othIsArr) {
                othTag = getTag(other);
                othTag = othTag == argsTag ? objectTag : othTag;
            }
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
                if (!isBuffer(other)) {
                    return false;
                }
                objIsArr = true;
                objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
                stack || (stack = new Stack);
                return (objIsArr || isTypedArray(object))
                    ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
                    : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
                if (objIsWrapped || othIsWrapped) {
                    var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                    stack || (stack = new Stack);
                    return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
                }
            }
            if (!isSameTag) {
                return false;
            }
            stack || (stack = new Stack);
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        /**
         * The base implementation of `_.isMap` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a map, else `false`.
         */
        function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
        }
        /**
         * The base implementation of `_.isMatch` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @param {Array} matchData The property names, values, and compare flags to match.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         */
        function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
                return !length;
            }
            object = Object(object);
            while (index--) {
                var data = matchData[index];
                if ((noCustomizer && data[2])
                    ? data[1] !== object[data[0]]
                    : !(data[0] in object)) {
                    return false;
                }
            }
            while (++index < length) {
                data = matchData[index];
                var key = data[0], objValue = object[key], srcValue = data[1];
                if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) {
                        return false;
                    }
                }
                else {
                    var stack = new Stack;
                    if (customizer) {
                        var result = customizer(objValue, srcValue, key, object, source, stack);
                    }
                    if (!(result === undefined
                        ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                        : result)) {
                        return false;
                    }
                }
            }
            return true;
        }
        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
                return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
        }
        /**
         * The base implementation of `_.isRegExp` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
         */
        function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        /**
         * The base implementation of `_.isSet` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a set, else `false`.
         */
        function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
        }
        /**
         * The base implementation of `_.isTypedArray` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         */
        function baseIsTypedArray(value) {
            return isObjectLike(value) &&
                isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        /**
         * The base implementation of `_.iteratee`.
         *
         * @private
         * @param {*} [value=_.identity] The value to convert to an iteratee.
         * @returns {Function} Returns the iteratee.
         */
        function baseIteratee(value) {
            // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
            // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
            if (typeof value == 'function') {
                return value;
            }
            if (value == null) {
                return identity;
            }
            if (typeof value == 'object') {
                return isArray(value)
                    ? baseMatchesProperty(value[0], value[1])
                    : baseMatches(value);
            }
            return property(value);
        }
        /**
         * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeys(object) {
            if (!isPrototype(object)) {
                return nativeKeys(object);
            }
            var result = [];
            for (var key in Object(object)) {
                if (hasOwnProperty.call(object, key) && key != 'constructor') {
                    result.push(key);
                }
            }
            return result;
        }
        /**
         * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeysIn(object) {
            if (!isObject(object)) {
                return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result = [];
            for (var key in object) {
                if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                    result.push(key);
                }
            }
            return result;
        }
        /**
         * The base implementation of `_.lt` which doesn't coerce arguments.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is less than `other`,
         *  else `false`.
         */
        function baseLt(value, other) {
            return value < other;
        }
        /**
         * The base implementation of `_.map` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */
        function baseMap(collection, iteratee) {
            var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function (value, key, collection) {
                result[++index] = iteratee(value, key, collection);
            });
            return result;
        }
        /**
         * The base implementation of `_.matches` which doesn't clone `source`.
         *
         * @private
         * @param {Object} source The object of property values to match.
         * @returns {Function} Returns the new spec function.
         */
        function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
                return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function (object) {
                return object === source || baseIsMatch(object, source, matchData);
            };
        }
        /**
         * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
         *
         * @private
         * @param {string} path The path of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new spec function.
         */
        function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
                return matchesStrictComparable(toKey(path), srcValue);
            }
            return function (object) {
                var objValue = get(object, path);
                return (objValue === undefined && objValue === srcValue)
                    ? hasIn(object, path)
                    : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
        }
        /**
         * The base implementation of `_.merge` without support for multiple sources.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {number} srcIndex The index of `source`.
         * @param {Function} [customizer] The function to customize merged values.
         * @param {Object} [stack] Tracks traversed source values and their merged
         *  counterparts.
         */
        function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
                return;
            }
            baseFor(source, function (srcValue, key) {
                if (isObject(srcValue)) {
                    stack || (stack = new Stack);
                    baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                }
                else {
                    var newValue = customizer
                        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
                        : undefined;
                    if (newValue === undefined) {
                        newValue = srcValue;
                    }
                    assignMergeValue(object, key, newValue);
                }
            }, keysIn);
        }
        /**
         * A specialized version of `baseMerge` for arrays and objects which performs
         * deep merges and tracks traversed objects enabling objects with circular
         * references to be merged.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {string} key The key of the value to merge.
         * @param {number} srcIndex The index of `source`.
         * @param {Function} mergeFunc The function to merge values.
         * @param {Function} [customizer] The function to customize assigned values.
         * @param {Object} [stack] Tracks traversed source values and their merged
         *  counterparts.
         */
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = object[key], srcValue = source[key], stacked = stack.get(srcValue);
            if (stacked) {
                assignMergeValue(object, key, stacked);
                return;
            }
            var newValue = customizer
                ? customizer(objValue, srcValue, (key + ''), object, source, stack)
                : undefined;
            var isCommon = newValue === undefined;
            if (isCommon) {
                var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                newValue = srcValue;
                if (isArr || isBuff || isTyped) {
                    if (isArray(objValue)) {
                        newValue = objValue;
                    }
                    else if (isArrayLikeObject(objValue)) {
                        newValue = copyArray(objValue);
                    }
                    else if (isBuff) {
                        isCommon = false;
                        newValue = cloneBuffer(srcValue, true);
                    }
                    else if (isTyped) {
                        isCommon = false;
                        newValue = cloneTypedArray(srcValue, true);
                    }
                    else {
                        newValue = [];
                    }
                }
                else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    newValue = objValue;
                    if (isArguments(objValue)) {
                        newValue = toPlainObject(objValue);
                    }
                    else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
                        newValue = initCloneObject(srcValue);
                    }
                }
                else {
                    isCommon = false;
                }
            }
            if (isCommon) {
                // Recursively merge objects and arrays (susceptible to call stack limits).
                stack.set(srcValue, newValue);
                mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
                stack['delete'](srcValue);
            }
            assignMergeValue(object, key, newValue);
        }
        /**
         * The base implementation of `_.nth` which doesn't coerce arguments.
         *
         * @private
         * @param {Array} array The array to query.
         * @param {number} n The index of the element to return.
         * @returns {*} Returns the nth element of `array`.
         */
        function baseNth(array, n) {
            var length = array.length;
            if (!length) {
                return;
            }
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined;
        }
        /**
         * The base implementation of `_.orderBy` without param guards.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
         * @param {string[]} orders The sort orders of `iteratees`.
         * @returns {Array} Returns the new sorted array.
         */
        function baseOrderBy(collection, iteratees, orders) {
            var index = -1;
            iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
            var result = baseMap(collection, function (value, key, collection) {
                var criteria = arrayMap(iteratees, function (iteratee) {
                    return iteratee(value);
                });
                return { 'criteria': criteria, 'index': ++index, 'value': value };
            });
            return baseSortBy(result, function (object, other) {
                return compareMultiple(object, other, orders);
            });
        }
        /**
         * The base implementation of `_.pick` without support for individual
         * property identifiers.
         *
         * @private
         * @param {Object} object The source object.
         * @param {string[]} paths The property paths to pick.
         * @returns {Object} Returns the new object.
         */
        function basePick(object, paths) {
            object = Object(object);
            return basePickBy(object, paths, function (value, path) {
                return hasIn(object, path);
            });
        }
        /**
         * The base implementation of  `_.pickBy` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The source object.
         * @param {string[]} paths The property paths to pick.
         * @param {Function} predicate The function invoked per property.
         * @returns {Object} Returns the new object.
         */
        function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result = {};
            while (++index < length) {
                var path = paths[index], value = baseGet(object, path);
                if (predicate(value, path)) {
                    baseSet(result, castPath(path, object), value);
                }
            }
            return result;
        }
        /**
         * A specialized version of `baseProperty` which supports deep paths.
         *
         * @private
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new accessor function.
         */
        function basePropertyDeep(path) {
            return function (object) {
                return baseGet(object, path);
            };
        }
        /**
         * The base implementation of `_.pullAllBy` without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {Array} values The values to remove.
         * @param {Function} [iteratee] The iteratee invoked per element.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns `array`.
         */
        function basePullAll(array, values, iteratee, comparator) {
            var indexOf = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values.length, seen = array;
            if (array === values) {
                values = copyArray(values);
            }
            if (iteratee) {
                seen = arrayMap(array, baseUnary(iteratee));
            }
            while (++index < length) {
                var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value;
                while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
                    if (seen !== array) {
                        splice.call(seen, fromIndex, 1);
                    }
                    splice.call(array, fromIndex, 1);
                }
            }
            return array;
        }
        /**
         * The base implementation of `_.pullAt` without support for individual
         * indexes or capturing the removed elements.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {number[]} indexes The indexes of elements to remove.
         * @returns {Array} Returns `array`.
         */
        function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
                var index = indexes[length];
                if (length == lastIndex || index !== previous) {
                    var previous = index;
                    if (isIndex(index)) {
                        splice.call(array, index, 1);
                    }
                    else {
                        baseUnset(array, index);
                    }
                }
            }
            return array;
        }
        /**
         * The base implementation of `_.random` without support for returning
         * floating-point numbers.
         *
         * @private
         * @param {number} lower The lower bound.
         * @param {number} upper The upper bound.
         * @returns {number} Returns the random number.
         */
        function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        /**
         * The base implementation of `_.range` and `_.rangeRight` which doesn't
         * coerce arguments.
         *
         * @private
         * @param {number} start The start of the range.
         * @param {number} end The end of the range.
         * @param {number} step The value to increment or decrement by.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Array} Returns the range of numbers.
         */
        function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
            while (length--) {
                result[fromRight ? length : ++index] = start;
                start += step;
            }
            return result;
        }
        /**
         * The base implementation of `_.repeat` which doesn't coerce arguments.
         *
         * @private
         * @param {string} string The string to repeat.
         * @param {number} n The number of times to repeat the string.
         * @returns {string} Returns the repeated string.
         */
        function baseRepeat(string, n) {
            var result = '';
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
                return result;
            }
            // Leverage the exponentiation by squaring algorithm for a faster repeat.
            // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
            do {
                if (n % 2) {
                    result += string;
                }
                n = nativeFloor(n / 2);
                if (n) {
                    string += string;
                }
            } while (n);
            return result;
        }
        /**
         * The base implementation of `_.rest` which doesn't validate or coerce arguments.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         */
        function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + '');
        }
        /**
         * The base implementation of `_.sample`.
         *
         * @private
         * @param {Array|Object} collection The collection to sample.
         * @returns {*} Returns the random element.
         */
        function baseSample(collection) {
            return arraySample(values(collection));
        }
        /**
         * The base implementation of `_.sampleSize` without param guards.
         *
         * @private
         * @param {Array|Object} collection The collection to sample.
         * @param {number} n The number of elements to sample.
         * @returns {Array} Returns the random elements.
         */
        function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        /**
         * The base implementation of `_.set`.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {Array|string} path The path of the property to set.
         * @param {*} value The value to set.
         * @param {Function} [customizer] The function to customize path creation.
         * @returns {Object} Returns `object`.
         */
        function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
                return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
                var key = toKey(path[index]), newValue = value;
                if (index != lastIndex) {
                    var objValue = nested[key];
                    newValue = customizer ? customizer(objValue, key, nested) : undefined;
                    if (newValue === undefined) {
                        newValue = isObject(objValue)
                            ? objValue
                            : (isIndex(path[index + 1]) ? [] : {});
                    }
                }
                assignValue(nested, key, newValue);
                nested = nested[key];
            }
            return object;
        }
        /**
         * The base implementation of `setData` without support for hot loop shorting.
         *
         * @private
         * @param {Function} func The function to associate metadata with.
         * @param {*} data The metadata.
         * @returns {Function} Returns `func`.
         */
        var baseSetData = !metaMap ? identity : function (func, data) {
            metaMap.set(func, data);
            return func;
        };
        /**
         * The base implementation of `setToString` without support for hot loop shorting.
         *
         * @private
         * @param {Function} func The function to modify.
         * @param {Function} string The `toString` result.
         * @returns {Function} Returns `func`.
         */
        var baseSetToString = !defineProperty ? identity : function (func, string) {
            return defineProperty(func, 'toString', {
                'configurable': true,
                'enumerable': false,
                'value': constant(string),
                'writable': true
            });
        };
        /**
         * The base implementation of `_.shuffle`.
         *
         * @private
         * @param {Array|Object} collection The collection to shuffle.
         * @returns {Array} Returns the new shuffled array.
         */
        function baseShuffle(collection) {
            return shuffleSelf(values(collection));
        }
        /**
         * The base implementation of `_.slice` without an iteratee call guard.
         *
         * @private
         * @param {Array} array The array to slice.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns the slice of `array`.
         */
        function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
                start = -start > length ? 0 : (length + start);
            }
            end = end > length ? length : end;
            if (end < 0) {
                end += length;
            }
            length = start > end ? 0 : ((end - start) >>> 0);
            start >>>= 0;
            var result = Array(length);
            while (++index < length) {
                result[index] = array[index + start];
            }
            return result;
        }
        /**
         * The base implementation of `_.some` without support for iteratee shorthands.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if any element passes the predicate check,
         *  else `false`.
         */
        function baseSome(collection, predicate) {
            var result;
            baseEach(collection, function (value, index, collection) {
                result = predicate(value, index, collection);
                return !result;
            });
            return !!result;
        }
        /**
         * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
         * performs a binary search of `array` to determine the index at which `value`
         * should be inserted into `array` in order to maintain its sort order.
         *
         * @private
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {boolean} [retHighest] Specify returning the highest qualified index.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         */
        function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                while (low < high) {
                    var mid = (low + high) >>> 1, computed = array[mid];
                    if (computed !== null && !isSymbol(computed) &&
                        (retHighest ? (computed <= value) : (computed < value))) {
                        low = mid + 1;
                    }
                    else {
                        high = mid;
                    }
                }
                return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
        }
        /**
         * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
         * which invokes `iteratee` for `value` and each element of `array` to compute
         * their sort ranking. The iteratee is invoked with one argument; (value).
         *
         * @private
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function} iteratee The iteratee invoked per element.
         * @param {boolean} [retHighest] Specify returning the highest qualified index.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         */
        function baseSortedIndexBy(array, value, iteratee, retHighest) {
            value = iteratee(value);
            var low = 0, high = array == null ? 0 : array.length, valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined;
            while (low < high) {
                var mid = nativeFloor((low + high) / 2), computed = iteratee(array[mid]), othIsDefined = computed !== undefined, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
                if (valIsNaN) {
                    var setLow = retHighest || othIsReflexive;
                }
                else if (valIsUndefined) {
                    setLow = othIsReflexive && (retHighest || othIsDefined);
                }
                else if (valIsNull) {
                    setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
                }
                else if (valIsSymbol) {
                    setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
                }
                else if (othIsNull || othIsSymbol) {
                    setLow = false;
                }
                else {
                    setLow = retHighest ? (computed <= value) : (computed < value);
                }
                if (setLow) {
                    low = mid + 1;
                }
                else {
                    high = mid;
                }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
        }
        /**
         * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
         * support for iteratee shorthands.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {Function} [iteratee] The iteratee invoked per element.
         * @returns {Array} Returns the new duplicate free array.
         */
        function baseSortedUniq(array, iteratee) {
            var index = -1, length = array.length, resIndex = 0, result = [];
            while (++index < length) {
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                if (!index || !eq(computed, seen)) {
                    var seen = computed;
                    result[resIndex++] = value === 0 ? 0 : value;
                }
            }
            return result;
        }
        /**
         * The base implementation of `_.toNumber` which doesn't ensure correct
         * conversions of binary, hexadecimal, or octal string values.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {number} Returns the number.
         */
        function baseToNumber(value) {
            if (typeof value == 'number') {
                return value;
            }
            if (isSymbol(value)) {
                return NAN;
            }
            return +value;
        }
        /**
         * The base implementation of `_.toString` which doesn't convert nullish
         * values to empty strings.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         */
        function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
                return value;
            }
            if (isArray(value)) {
                // Recursively convert values (susceptible to call stack limits).
                return arrayMap(value, baseToString) + '';
            }
            if (isSymbol(value)) {
                return symbolToString ? symbolToString.call(value) : '';
            }
            var result = (value + '');
            return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
        }
        /**
         * The base implementation of `_.uniqBy` without support for iteratee shorthands.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {Function} [iteratee] The iteratee invoked per element.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new duplicate free array.
         */
        function baseUniq(array, iteratee, comparator) {
            var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
            if (comparator) {
                isCommon = false;
                includes = arrayIncludesWith;
            }
            else if (length >= LARGE_ARRAY_SIZE) {
                var set = iteratee ? null : createSet(array);
                if (set) {
                    return setToArray(set);
                }
                isCommon = false;
                includes = cacheHas;
                seen = new SetCache;
            }
            else {
                seen = iteratee ? [] : result;
            }
            outer: while (++index < length) {
                var value = array[index], computed = iteratee ? iteratee(value) : value;
                value = (comparator || value !== 0) ? value : 0;
                if (isCommon && computed === computed) {
                    var seenIndex = seen.length;
                    while (seenIndex--) {
                        if (seen[seenIndex] === computed) {
                            continue outer;
                        }
                    }
                    if (iteratee) {
                        seen.push(computed);
                    }
                    result.push(value);
                }
                else if (!includes(seen, computed, comparator)) {
                    if (seen !== result) {
                        seen.push(computed);
                    }
                    result.push(value);
                }
            }
            return result;
        }
        /**
         * The base implementation of `_.unset`.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {Array|string} path The property path to unset.
         * @returns {boolean} Returns `true` if the property is deleted, else `false`.
         */
        function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
        }
        /**
         * The base implementation of `_.update`.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {Array|string} path The path of the property to update.
         * @param {Function} updater The function to produce the updated value.
         * @param {Function} [customizer] The function to customize path creation.
         * @returns {Object} Returns `object`.
         */
        function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        /**
         * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
         * without support for iteratee shorthands.
         *
         * @private
         * @param {Array} array The array to query.
         * @param {Function} predicate The function invoked per iteration.
         * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Array} Returns the slice of `array`.
         */
        function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) &&
                predicate(array[index], index, array)) { }
            return isDrop
                ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
                : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
        }
        /**
         * The base implementation of `wrapperValue` which returns the result of
         * performing a sequence of actions on the unwrapped `value`, where each
         * successive action is supplied the return value of the previous.
         *
         * @private
         * @param {*} value The unwrapped value.
         * @param {Array} actions Actions to perform to resolve the unwrapped value.
         * @returns {*} Returns the resolved value.
         */
        function baseWrapperValue(value, actions) {
            var result = value;
            if (result instanceof LazyWrapper) {
                result = result.value();
            }
            return arrayReduce(actions, function (result, action) {
                return action.func.apply(action.thisArg, arrayPush([result], action.args));
            }, result);
        }
        /**
         * The base implementation of methods like `_.xor`, without support for
         * iteratee shorthands, that accepts an array of arrays to inspect.
         *
         * @private
         * @param {Array} arrays The arrays to inspect.
         * @param {Function} [iteratee] The iteratee invoked per element.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of values.
         */
        function baseXor(arrays, iteratee, comparator) {
            var length = arrays.length;
            if (length < 2) {
                return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result = Array(length);
            while (++index < length) {
                var array = arrays[index], othIndex = -1;
                while (++othIndex < length) {
                    if (othIndex != index) {
                        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
                    }
                }
            }
            return baseUniq(baseFlatten(result, 1), iteratee, comparator);
        }
        /**
         * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
         *
         * @private
         * @param {Array} props The property identifiers.
         * @param {Array} values The property values.
         * @param {Function} assignFunc The function to assign values.
         * @returns {Object} Returns the new object.
         */
        function baseZipObject(props, values, assignFunc) {
            var index = -1, length = props.length, valsLength = values.length, result = {};
            while (++index < length) {
                var value = index < valsLength ? values[index] : undefined;
                assignFunc(result, props[index], value);
            }
            return result;
        }
        /**
         * Casts `value` to an empty array if it's not an array like object.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {Array|Object} Returns the cast array-like object.
         */
        function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
        }
        /**
         * Casts `value` to `identity` if it's not a function.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {Function} Returns cast function.
         */
        function castFunction(value) {
            return typeof value == 'function' ? value : identity;
        }
        /**
         * Casts `value` to a path array if it's not one.
         *
         * @private
         * @param {*} value The value to inspect.
         * @param {Object} [object] The object to query keys on.
         * @returns {Array} Returns the cast property path array.
         */
        function castPath(value, object) {
            if (isArray(value)) {
                return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        /**
         * A `baseRest` alias which can be replaced with `identity` by module
         * replacement plugins.
         *
         * @private
         * @type {Function}
         * @param {Function} func The function to apply a rest parameter to.
         * @returns {Function} Returns the new function.
         */
        var castRest = baseRest;
        /**
         * Casts `array` to a slice if it's needed.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {number} start The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns the cast slice.
         */
        function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined ? length : end;
            return (!start && end >= length) ? array : baseSlice(array, start, end);
        }
        /**
         * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
         *
         * @private
         * @param {number|Object} id The timer id or timeout object of the timer to clear.
         */
        var clearTimeout = ctxClearTimeout || function (id) {
            return root.clearTimeout(id);
        };
        /**
         * Creates a clone of  `buffer`.
         *
         * @private
         * @param {Buffer} buffer The buffer to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Buffer} Returns the cloned buffer.
         */
        function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
                return buffer.slice();
            }
            var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result);
            return result;
        }
        /**
         * Creates a clone of `arrayBuffer`.
         *
         * @private
         * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
         * @returns {ArrayBuffer} Returns the cloned array buffer.
         */
        function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array(result).set(new Uint8Array(arrayBuffer));
            return result;
        }
        /**
         * Creates a clone of `dataView`.
         *
         * @private
         * @param {Object} dataView The data view to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned data view.
         */
        function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        /**
         * Creates a clone of `map`.
         *
         * @private
         * @param {Object} map The map to clone.
         * @param {Function} cloneFunc The function to clone values.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned map.
         */
        function cloneMap(map, isDeep, cloneFunc) {
            var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
            return arrayReduce(array, addMapEntry, new map.constructor);
        }
        /**
         * Creates a clone of `regexp`.
         *
         * @private
         * @param {Object} regexp The regexp to clone.
         * @returns {Object} Returns the cloned regexp.
         */
        function cloneRegExp(regexp) {
            var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result.lastIndex = regexp.lastIndex;
            return result;
        }
        /**
         * Creates a clone of `set`.
         *
         * @private
         * @param {Object} set The set to clone.
         * @param {Function} cloneFunc The function to clone values.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned set.
         */
        function cloneSet(set, isDeep, cloneFunc) {
            var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
            return arrayReduce(array, addSetEntry, new set.constructor);
        }
        /**
         * Creates a clone of the `symbol` object.
         *
         * @private
         * @param {Object} symbol The symbol object to clone.
         * @returns {Object} Returns the cloned symbol object.
         */
        function cloneSymbol(symbol) {
            return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
        }
        /**
         * Creates a clone of `typedArray`.
         *
         * @private
         * @param {Object} typedArray The typed array to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned typed array.
         */
        function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        /**
         * Compares values to sort them in ascending order.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {number} Returns the sort order indicator for `value`.
         */
        function compareAscending(value, other) {
            if (value !== other) {
                var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
                var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
                if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
                    (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
                    (valIsNull && othIsDefined && othIsReflexive) ||
                    (!valIsDefined && othIsReflexive) ||
                    !valIsReflexive) {
                    return 1;
                }
                if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
                    (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
                    (othIsNull && valIsDefined && valIsReflexive) ||
                    (!othIsDefined && valIsReflexive) ||
                    !othIsReflexive) {
                    return -1;
                }
            }
            return 0;
        }
        /**
         * Used by `_.orderBy` to compare multiple properties of a value to another
         * and stable sort them.
         *
         * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
         * specify an order of "desc" for descending or "asc" for ascending sort order
         * of corresponding values.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {boolean[]|string[]} orders The order to sort by for each property.
         * @returns {number} Returns the sort order indicator for `object`.
         */
        function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
                var result = compareAscending(objCriteria[index], othCriteria[index]);
                if (result) {
                    if (index >= ordersLength) {
                        return result;
                    }
                    var order = orders[index];
                    return result * (order == 'desc' ? -1 : 1);
                }
            }
            // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
            // that causes it, under certain circumstances, to provide the same value for
            // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
            // for more details.
            //
            // This also ensures a stable sort in V8 and other engines.
            // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
            return object.index - other.index;
        }
        /**
         * Creates an array that is the composition of partially applied arguments,
         * placeholders, and provided arguments into a single array of arguments.
         *
         * @private
         * @param {Array} args The provided arguments.
         * @param {Array} partials The arguments to prepend to those provided.
         * @param {Array} holders The `partials` placeholder indexes.
         * @params {boolean} [isCurried] Specify composing for a curried function.
         * @returns {Array} Returns the new array of composed arguments.
         */
        function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
                result[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
                if (isUncurried || argsIndex < argsLength) {
                    result[holders[argsIndex]] = args[argsIndex];
                }
            }
            while (rangeLength--) {
                result[leftIndex++] = args[argsIndex++];
            }
            return result;
        }
        /**
         * This function is like `composeArgs` except that the arguments composition
         * is tailored for `_.partialRight`.
         *
         * @private
         * @param {Array} args The provided arguments.
         * @param {Array} partials The arguments to append to those provided.
         * @param {Array} holders The `partials` placeholder indexes.
         * @params {boolean} [isCurried] Specify composing for a curried function.
         * @returns {Array} Returns the new array of composed arguments.
         */
        function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
                result[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
                result[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
                if (isUncurried || argsIndex < argsLength) {
                    result[offset + holders[holdersIndex]] = args[argsIndex++];
                }
            }
            return result;
        }
        /**
         * Copies the values of `source` to `array`.
         *
         * @private
         * @param {Array} source The array to copy values from.
         * @param {Array} [array=[]] The array to copy values to.
         * @returns {Array} Returns `array`.
         */
        function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array(length));
            while (++index < length) {
                array[index] = source[index];
            }
            return array;
        }
        /**
         * Copies properties of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy properties from.
         * @param {Array} props The property identifiers to copy.
         * @param {Object} [object={}] The object to copy properties to.
         * @param {Function} [customizer] The function to customize copied values.
         * @returns {Object} Returns `object`.
         */
        function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
                var key = props[index];
                var newValue = customizer
                    ? customizer(object[key], source[key], key, object, source)
                    : undefined;
                if (newValue === undefined) {
                    newValue = source[key];
                }
                if (isNew) {
                    baseAssignValue(object, key, newValue);
                }
                else {
                    assignValue(object, key, newValue);
                }
            }
            return object;
        }
        /**
         * Copies own symbols of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy symbols from.
         * @param {Object} [object={}] The object to copy symbols to.
         * @returns {Object} Returns `object`.
         */
        function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
        }
        /**
         * Copies own and inherited symbols of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy symbols from.
         * @param {Object} [object={}] The object to copy symbols to.
         * @returns {Object} Returns `object`.
         */
        function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
        }
        /**
         * Creates a function like `_.groupBy`.
         *
         * @private
         * @param {Function} setter The function to set accumulator values.
         * @param {Function} [initializer] The accumulator object initializer.
         * @returns {Function} Returns the new aggregator function.
         */
        function createAggregator(setter, initializer) {
            return function (collection, iteratee) {
                var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
                return func(collection, setter, getIteratee(iteratee, 2), accumulator);
            };
        }
        /**
         * Creates a function like `_.assign`.
         *
         * @private
         * @param {Function} assigner The function to assign values.
         * @returns {Function} Returns the new assigner function.
         */
        function createAssigner(assigner) {
            return baseRest(function (object, sources) {
                var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined, guard = length > 2 ? sources[2] : undefined;
                customizer = (assigner.length > 3 && typeof customizer == 'function')
                    ? (length--, customizer)
                    : undefined;
                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1;
                }
                object = Object(object);
                while (++index < length) {
                    var source = sources[index];
                    if (source) {
                        assigner(object, source, index, customizer);
                    }
                }
                return object;
            });
        }
        /**
         * Creates a `baseEach` or `baseEachRight` function.
         *
         * @private
         * @param {Function} eachFunc The function to iterate over a collection.
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */
        function createBaseEach(eachFunc, fromRight) {
            return function (collection, iteratee) {
                if (collection == null) {
                    return collection;
                }
                if (!isArrayLike(collection)) {
                    return eachFunc(collection, iteratee);
                }
                var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
                while ((fromRight ? index-- : ++index < length)) {
                    if (iteratee(iterable[index], index, iterable) === false) {
                        break;
                    }
                }
                return collection;
            };
        }
        /**
         * Creates a base function for methods like `_.forIn` and `_.forOwn`.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */
        function createBaseFor(fromRight) {
            return function (object, iteratee, keysFunc) {
                var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
                while (length--) {
                    var key = props[fromRight ? length : ++index];
                    if (iteratee(iterable[key], key, iterable) === false) {
                        break;
                    }
                }
                return object;
            };
        }
        /**
         * Creates a function that wraps `func` to invoke it with the optional `this`
         * binding of `thisArg`.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @returns {Function} Returns the new wrapped function.
         */
        function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
                var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
                return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
        }
        /**
         * Creates a function like `_.lowerFirst`.
         *
         * @private
         * @param {string} methodName The name of the `String` case method to use.
         * @returns {Function} Returns the new case function.
         */
        function createCaseFirst(methodName) {
            return function (string) {
                string = toString(string);
                var strSymbols = hasUnicode(string)
                    ? stringToArray(string)
                    : undefined;
                var chr = strSymbols
                    ? strSymbols[0]
                    : string.charAt(0);
                var trailing = strSymbols
                    ? castSlice(strSymbols, 1).join('')
                    : string.slice(1);
                return chr[methodName]() + trailing;
            };
        }
        /**
         * Creates a function like `_.camelCase`.
         *
         * @private
         * @param {Function} callback The function to combine each word.
         * @returns {Function} Returns the new compounder function.
         */
        function createCompounder(callback) {
            return function (string) {
                return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
            };
        }
        /**
         * Creates a function that produces an instance of `Ctor` regardless of
         * whether it was invoked as part of a `new` expression or by `call` or `apply`.
         *
         * @private
         * @param {Function} Ctor The constructor to wrap.
         * @returns {Function} Returns the new wrapped function.
         */
        function createCtor(Ctor) {
            return function () {
                // Use a `switch` statement to work with class constructors. See
                // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
                // for more details.
                var args = arguments;
                switch (args.length) {
                    case 0: return new Ctor;
                    case 1: return new Ctor(args[0]);
                    case 2: return new Ctor(args[0], args[1]);
                    case 3: return new Ctor(args[0], args[1], args[2]);
                    case 4: return new Ctor(args[0], args[1], args[2], args[3]);
                    case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                    case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                    case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
                }
                var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
                // Mimic the constructor's `return` behavior.
                // See https://es5.github.io/#x13.2.2 for more details.
                return isObject(result) ? result : thisBinding;
            };
        }
        /**
         * Creates a function that wraps `func` to enable currying.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
         * @param {number} arity The arity of `func`.
         * @returns {Function} Returns the new wrapped function.
         */
        function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
                var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
                while (index--) {
                    args[index] = arguments[index];
                }
                var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
                    ? []
                    : replaceHolders(args, placeholder);
                length -= holders.length;
                if (length < arity) {
                    return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
                }
                var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
                return apply(fn, this, args);
            }
            return wrapper;
        }
        /**
         * Creates a `_.find` or `_.findLast` function.
         *
         * @private
         * @param {Function} findIndexFunc The function to find the collection index.
         * @returns {Function} Returns the new find function.
         */
        function createFind(findIndexFunc) {
            return function (collection, predicate, fromIndex) {
                var iterable = Object(collection);
                if (!isArrayLike(collection)) {
                    var iteratee = getIteratee(predicate, 3);
                    collection = keys(collection);
                    predicate = function (key) { return iteratee(iterable[key], key, iterable); };
                }
                var index = findIndexFunc(collection, predicate, fromIndex);
                return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
            };
        }
        /**
         * Creates a `_.flow` or `_.flowRight` function.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new flow function.
         */
        function createFlow(fromRight) {
            return flatRest(function (funcs) {
                var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
                if (fromRight) {
                    funcs.reverse();
                }
                while (index--) {
                    var func = funcs[index];
                    if (typeof func != 'function') {
                        throw new TypeError(FUNC_ERROR_TEXT);
                    }
                    if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
                        var wrapper = new LodashWrapper([], true);
                    }
                }
                index = wrapper ? index : length;
                while (++index < length) {
                    func = funcs[index];
                    var funcName = getFuncName(func), data = funcName == 'wrapper' ? getData(func) : undefined;
                    if (data && isLaziable(data[0]) &&
                        data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                        !data[4].length && data[9] == 1) {
                        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                    }
                    else {
                        wrapper = (func.length == 1 && isLaziable(func))
                            ? wrapper[funcName]()
                            : wrapper.thru(func);
                    }
                }
                return function () {
                    var args = arguments, value = args[0];
                    if (wrapper && args.length == 1 &&
                        isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
                        return wrapper.plant(value).value();
                    }
                    var index = 0, result = length ? funcs[index].apply(this, args) : value;
                    while (++index < length) {
                        result = funcs[index].call(this, result);
                    }
                    return result;
                };
            });
        }
        /**
         * Creates a function that wraps `func` to invoke it with optional `this`
         * binding of `thisArg`, partial application, and currying.
         *
         * @private
         * @param {Function|string} func The function or method name to wrap.
         * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param {Array} [partials] The arguments to prepend to those provided to
         *  the new function.
         * @param {Array} [holders] The `partials` placeholder indexes.
         * @param {Array} [partialsRight] The arguments to append to those provided
         *  to the new function.
         * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
         * @param {Array} [argPos] The argument positions of the new function.
         * @param {number} [ary] The arity cap of `func`.
         * @param {number} [arity] The arity of `func`.
         * @returns {Function} Returns the new wrapped function.
         */
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
            function wrapper() {
                var length = arguments.length, args = Array(length), index = length;
                while (index--) {
                    args[index] = arguments[index];
                }
                if (isCurried) {
                    var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
                }
                if (partials) {
                    args = composeArgs(args, partials, holders, isCurried);
                }
                if (partialsRight) {
                    args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
                }
                length -= holdersCount;
                if (isCurried && length < arity) {
                    var newHolders = replaceHolders(args, placeholder);
                    return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
                }
                var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
                length = args.length;
                if (argPos) {
                    args = reorder(args, argPos);
                }
                else if (isFlip && length > 1) {
                    args.reverse();
                }
                if (isAry && ary < length) {
                    args.length = ary;
                }
                if (this && this !== root && this instanceof wrapper) {
                    fn = Ctor || createCtor(fn);
                }
                return fn.apply(thisBinding, args);
            }
            return wrapper;
        }
        /**
         * Creates a function like `_.invertBy`.
         *
         * @private
         * @param {Function} setter The function to set accumulator values.
         * @param {Function} toIteratee The function to resolve iteratees.
         * @returns {Function} Returns the new inverter function.
         */
        function createInverter(setter, toIteratee) {
            return function (object, iteratee) {
                return baseInverter(object, setter, toIteratee(iteratee), {});
            };
        }
        /**
         * Creates a function that performs a mathematical operation on two values.
         *
         * @private
         * @param {Function} operator The function to perform the operation.
         * @param {number} [defaultValue] The value used for `undefined` arguments.
         * @returns {Function} Returns the new mathematical operation function.
         */
        function createMathOperation(operator, defaultValue) {
            return function (value, other) {
                var result;
                if (value === undefined && other === undefined) {
                    return defaultValue;
                }
                if (value !== undefined) {
                    result = value;
                }
                if (other !== undefined) {
                    if (result === undefined) {
                        return other;
                    }
                    if (typeof value == 'string' || typeof other == 'string') {
                        value = baseToString(value);
                        other = baseToString(other);
                    }
                    else {
                        value = baseToNumber(value);
                        other = baseToNumber(other);
                    }
                    result = operator(value, other);
                }
                return result;
            };
        }
        /**
         * Creates a function like `_.over`.
         *
         * @private
         * @param {Function} arrayFunc The function to iterate over iteratees.
         * @returns {Function} Returns the new over function.
         */
        function createOver(arrayFunc) {
            return flatRest(function (iteratees) {
                iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
                return baseRest(function (args) {
                    var thisArg = this;
                    return arrayFunc(iteratees, function (iteratee) {
                        return apply(iteratee, thisArg, args);
                    });
                });
            });
        }
        /**
         * Creates the padding for `string` based on `length`. The `chars` string
         * is truncated if the number of characters exceeds `length`.
         *
         * @private
         * @param {number} length The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the padding for `string`.
         */
        function createPadding(length, chars) {
            chars = chars === undefined ? ' ' : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
                return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars)
                ? castSlice(stringToArray(result), 0, length).join('')
                : result.slice(0, length);
        }
        /**
         * Creates a function that wraps `func` to invoke it with the `this` binding
         * of `thisArg` and `partials` prepended to the arguments it receives.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} partials The arguments to prepend to those provided to
         *  the new function.
         * @returns {Function} Returns the new wrapped function.
         */
        function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
                var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
                while (++leftIndex < leftLength) {
                    args[leftIndex] = partials[leftIndex];
                }
                while (argsLength--) {
                    args[leftIndex++] = arguments[++argsIndex];
                }
                return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
        }
        /**
         * Creates a `_.range` or `_.rangeRight` function.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new range function.
         */
        function createRange(fromRight) {
            return function (start, end, step) {
                if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
                    end = step = undefined;
                }
                // Ensure the sign of `-0` is preserved.
                start = toFinite(start);
                if (end === undefined) {
                    end = start;
                    start = 0;
                }
                else {
                    end = toFinite(end);
                }
                step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
                return baseRange(start, end, step, fromRight);
            };
        }
        /**
         * Creates a function that performs a relational operation on two values.
         *
         * @private
         * @param {Function} operator The function to perform the operation.
         * @returns {Function} Returns the new relational operation function.
         */
        function createRelationalOperation(operator) {
            return function (value, other) {
                if (!(typeof value == 'string' && typeof other == 'string')) {
                    value = toNumber(value);
                    other = toNumber(other);
                }
                return operator(value, other);
            };
        }
        /**
         * Creates a function that wraps `func` to continue currying.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
         * @param {Function} wrapFunc The function to create the `func` wrapper.
         * @param {*} placeholder The placeholder value.
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param {Array} [partials] The arguments to prepend to those provided to
         *  the new function.
         * @param {Array} [holders] The `partials` placeholder indexes.
         * @param {Array} [argPos] The argument positions of the new function.
         * @param {number} [ary] The arity cap of `func`.
         * @param {number} [arity] The arity of `func`.
         * @returns {Function} Returns the new wrapped function.
         */
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
            bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
                bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
                func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
                newHoldersRight, argPos, ary, arity
            ];
            var result = wrapFunc.apply(undefined, newData);
            if (isLaziable(func)) {
                setData(result, newData);
            }
            result.placeholder = placeholder;
            return setWrapToString(result, func, bitmask);
        }
        /**
         * Creates a function like `_.round`.
         *
         * @private
         * @param {string} methodName The name of the `Math` method to use when rounding.
         * @returns {Function} Returns the new round function.
         */
        function createRound(methodName) {
            var func = Math[methodName];
            return function (number, precision) {
                number = toNumber(number);
                precision = nativeMin(toInteger(precision), 292);
                if (precision) {
                    // Shift with exponential notation to avoid floating-point issues.
                    // See [MDN](https://mdn.io/round#Examples) for more details.
                    var pair = (toString(number) + 'e').split('e'), value = func(pair[0] + 'e' + (+pair[1] + precision));
                    pair = (toString(value) + 'e').split('e');
                    return +(pair[0] + 'e' + (+pair[1] - precision));
                }
                return func(number);
            };
        }
        /**
         * Creates a set object of `values`.
         *
         * @private
         * @param {Array} values The values to add to the set.
         * @returns {Object} Returns the new set.
         */
        var createSet = !(Set && (1 / setToArray(new Set([, -0]))[1]) == INFINITY) ? noop : function (values) {
            return new Set(values);
        };
        /**
         * Creates a `_.toPairs` or `_.toPairsIn` function.
         *
         * @private
         * @param {Function} keysFunc The function to get the keys of a given object.
         * @returns {Function} Returns the new pairs function.
         */
        function createToPairs(keysFunc) {
            return function (object) {
                var tag = getTag(object);
                if (tag == mapTag) {
                    return mapToArray(object);
                }
                if (tag == setTag) {
                    return setToPairs(object);
                }
                return baseToPairs(object, keysFunc(object));
            };
        }
        /**
         * Creates a function that either curries or invokes `func` with optional
         * `this` binding and partially applied arguments.
         *
         * @private
         * @param {Function|string} func The function or method name to wrap.
         * @param {number} bitmask The bitmask flags.
         *    1 - `_.bind`
         *    2 - `_.bindKey`
         *    4 - `_.curry` or `_.curryRight` of a bound function
         *    8 - `_.curry`
         *   16 - `_.curryRight`
         *   32 - `_.partial`
         *   64 - `_.partialRight`
         *  128 - `_.rearg`
         *  256 - `_.ary`
         *  512 - `_.flip`
         * @param {*} [thisArg] The `this` binding of `func`.
         * @param {Array} [partials] The arguments to be partially applied.
         * @param {Array} [holders] The `partials` placeholder indexes.
         * @param {Array} [argPos] The argument positions of the new function.
         * @param {number} [ary] The arity cap of `func`.
         * @param {number} [arity] The arity of `func`.
         * @returns {Function} Returns the new wrapped function.
         */
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
                bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
                partials = holders = undefined;
            }
            ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
            arity = arity === undefined ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                var partialsRight = partials, holdersRight = holders;
                partials = holders = undefined;
            }
            var data = isBindKey ? undefined : getData(func);
            var newData = [
                func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
                argPos, ary, arity
            ];
            if (data) {
                mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] == null
                ? (isBindKey ? 0 : func.length)
                : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
                bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
                var result = createBind(func, bitmask, thisArg);
            }
            else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
                result = createCurry(func, bitmask, arity);
            }
            else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
                result = createPartial(func, bitmask, thisArg, partials);
            }
            else {
                result = createHybrid.apply(undefined, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result, newData), func, bitmask);
        }
        /**
         * A specialized version of `baseIsEqualDeep` for arrays with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Array} array The array to compare.
         * @param {Array} other The other array to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} stack Tracks traversed `array` and `other` objects.
         * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
         */
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
                return false;
            }
            // Assume cyclic values are equal.
            var stacked = stack.get(array);
            if (stacked && stack.get(other)) {
                return stacked == other;
            }
            var index = -1, result = true, seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
            stack.set(array, other);
            stack.set(other, array);
            // Ignore non-index properties.
            while (++index < arrLength) {
                var arrValue = array[index], othValue = other[index];
                if (customizer) {
                    var compared = isPartial
                        ? customizer(othValue, arrValue, index, other, array, stack)
                        : customizer(arrValue, othValue, index, array, other, stack);
                }
                if (compared !== undefined) {
                    if (compared) {
                        continue;
                    }
                    result = false;
                    break;
                }
                // Recursively compare arrays (susceptible to call stack limits).
                if (seen) {
                    if (!arraySome(other, function (othValue, othIndex) {
                        if (!cacheHas(seen, othIndex) &&
                            (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                            return seen.push(othIndex);
                        }
                    })) {
                        result = false;
                        break;
                    }
                }
                else if (!(arrValue === othValue ||
                    equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    result = false;
                    break;
                }
            }
            stack['delete'](array);
            stack['delete'](other);
            return result;
        }
        /**
         * A specialized version of `baseIsEqualDeep` for comparing objects of
         * the same `toStringTag`.
         *
         * **Note:** This function only supports comparing values with tags of
         * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {string} tag The `toStringTag` of the objects to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
                case dataViewTag:
                    if ((object.byteLength != other.byteLength) ||
                        (object.byteOffset != other.byteOffset)) {
                        return false;
                    }
                    object = object.buffer;
                    other = other.buffer;
                case arrayBufferTag:
                    if ((object.byteLength != other.byteLength) ||
                        !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                        return false;
                    }
                    return true;
                case boolTag:
                case dateTag:
                case numberTag:
                    // Coerce booleans to `1` or `0` and dates to milliseconds.
                    // Invalid dates are coerced to `NaN`.
                    return eq(+object, +other);
                case errorTag:
                    return object.name == other.name && object.message == other.message;
                case regexpTag:
                case stringTag:
                    // Coerce regexes to strings and treat strings, primitives and objects,
                    // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                    // for more details.
                    return object == (other + '');
                case mapTag:
                    var convert = mapToArray;
                case setTag:
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                    convert || (convert = setToArray);
                    if (object.size != other.size && !isPartial) {
                        return false;
                    }
                    // Assume cyclic values are equal.
                    var stacked = stack.get(object);
                    if (stacked) {
                        return stacked == other;
                    }
                    bitmask |= COMPARE_UNORDERED_FLAG;
                    // Recursively compare objects (susceptible to call stack limits).
                    stack.set(object, other);
                    var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                    stack['delete'](object);
                    return result;
                case symbolTag:
                    if (symbolValueOf) {
                        return symbolValueOf.call(object) == symbolValueOf.call(other);
                    }
            }
            return false;
        }
        /**
         * A specialized version of `baseIsEqualDeep` for objects with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = keys(object), objLength = objProps.length, othProps = keys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
                return false;
            }
            var index = objLength;
            while (index--) {
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                    return false;
                }
            }
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked && stack.get(other)) {
                return stacked == other;
            }
            var result = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key], othValue = other[key];
                if (customizer) {
                    var compared = isPartial
                        ? customizer(othValue, objValue, key, other, object, stack)
                        : customizer(objValue, othValue, key, object, other, stack);
                }
                // Recursively compare objects (susceptible to call stack limits).
                if (!(compared === undefined
                    ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
                    : compared)) {
                    result = false;
                    break;
                }
                skipCtor || (skipCtor = key == 'constructor');
            }
            if (result && !skipCtor) {
                var objCtor = object.constructor, othCtor = other.constructor;
                // Non `Object` object instances with different constructors are not equal.
                if (objCtor != othCtor &&
                    ('constructor' in object && 'constructor' in other) &&
                    !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
                        typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                    result = false;
                }
            }
            stack['delete'](object);
            stack['delete'](other);
            return result;
        }
        /**
         * A specialized version of `baseRest` which flattens the rest array.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @returns {Function} Returns the new function.
         */
        function flatRest(func) {
            return setToString(overRest(func, undefined, flatten), func + '');
        }
        /**
         * Creates an array of own enumerable property names and symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names and symbols.
         */
        function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
        }
        /**
         * Creates an array of own and inherited enumerable property names and
         * symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names and symbols.
         */
        function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        /**
         * Gets metadata for `func`.
         *
         * @private
         * @param {Function} func The function to query.
         * @returns {*} Returns the metadata for `func`.
         */
        var getData = !metaMap ? noop : function (func) {
            return metaMap.get(func);
        };
        /**
         * Gets the name of `func`.
         *
         * @private
         * @param {Function} func The function to query.
         * @returns {string} Returns the function name.
         */
        function getFuncName(func) {
            var result = (func.name + ''), array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
            while (length--) {
                var data = array[length], otherFunc = data.func;
                if (otherFunc == null || otherFunc == func) {
                    return data.name;
                }
            }
            return result;
        }
        /**
         * Gets the argument placeholder value for `func`.
         *
         * @private
         * @param {Function} func The function to inspect.
         * @returns {*} Returns the placeholder value.
         */
        function getHolder(func) {
            var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
            return object.placeholder;
        }
        /**
         * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
         * this function returns the custom method, otherwise it returns `baseIteratee`.
         * If arguments are provided, the chosen function is invoked with them and
         * its result is returned.
         *
         * @private
         * @param {*} [value] The value to convert to an iteratee.
         * @param {number} [arity] The arity of the created iteratee.
         * @returns {Function} Returns the chosen function or its result.
         */
        function getIteratee() {
            var result = lodash.iteratee || iteratee;
            result = result === iteratee ? baseIteratee : result;
            return arguments.length ? result(arguments[0], arguments[1]) : result;
        }
        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */
        function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key)
                ? data[typeof key == 'string' ? 'string' : 'hash']
                : data.map;
        }
        /**
         * Gets the property names, values, and compare flags of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the match data of `object`.
         */
        function getMatchData(object) {
            var result = keys(object), length = result.length;
            while (length--) {
                var key = result[length], value = object[key];
                result[length] = [key, value, isStrictComparable(value)];
            }
            return result;
        }
        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
        }
        /**
         * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the raw `toStringTag`.
         */
        function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
                value[symToStringTag] = undefined;
                var unmasked = true;
            }
            catch (e) { }
            var result = nativeObjectToString.call(value);
            if (unmasked) {
                if (isOwn) {
                    value[symToStringTag] = tag;
                }
                else {
                    delete value[symToStringTag];
                }
            }
            return result;
        }
        /**
         * Creates an array of the own enumerable symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of symbols.
         */
        var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
        /**
         * Creates an array of the own and inherited enumerable symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of symbols.
         */
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
            var result = [];
            while (object) {
                arrayPush(result, getSymbols(object));
                object = getPrototype(object);
            }
            return result;
        };
        /**
         * Gets the `toStringTag` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        var getTag = baseGetTag;
        // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
        if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
            (Map && getTag(new Map) != mapTag) ||
            (Promise && getTag(Promise.resolve()) != promiseTag) ||
            (Set && getTag(new Set) != setTag) ||
            (WeakMap && getTag(new WeakMap) != weakMapTag)) {
            getTag = function (value) {
                var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
                if (ctorString) {
                    switch (ctorString) {
                        case dataViewCtorString: return dataViewTag;
                        case mapCtorString: return mapTag;
                        case promiseCtorString: return promiseTag;
                        case setCtorString: return setTag;
                        case weakMapCtorString: return weakMapTag;
                    }
                }
                return result;
            };
        }
        /**
         * Gets the view, applying any `transforms` to the `start` and `end` positions.
         *
         * @private
         * @param {number} start The start of the view.
         * @param {number} end The end of the view.
         * @param {Array} transforms The transformations to apply to the view.
         * @returns {Object} Returns an object containing the `start` and `end`
         *  positions of the view.
         */
        function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
                var data = transforms[index], size = data.size;
                switch (data.type) {
                    case 'drop':
                        start += size;
                        break;
                    case 'dropRight':
                        end -= size;
                        break;
                    case 'take':
                        end = nativeMin(end, start + size);
                        break;
                    case 'takeRight':
                        start = nativeMax(start, end - size);
                        break;
                }
            }
            return { 'start': start, 'end': end };
        }
        /**
         * Extracts wrapper details from the `source` body comment.
         *
         * @private
         * @param {string} source The source to inspect.
         * @returns {Array} Returns the wrapper details.
         */
        function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
        }
        /**
         * Checks if `path` exists on `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @param {Function} hasFunc The function to check properties.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         */
        function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result = false;
            while (++index < length) {
                var key = toKey(path[index]);
                if (!(result = object != null && hasFunc(object, key))) {
                    break;
                }
                object = object[key];
            }
            if (result || ++index != length) {
                return result;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) &&
                (isArray(object) || isArguments(object));
        }
        /**
         * Initializes an array clone.
         *
         * @private
         * @param {Array} array The array to clone.
         * @returns {Array} Returns the initialized clone.
         */
        function initCloneArray(array) {
            var length = array.length, result = array.constructor(length);
            // Add properties assigned by `RegExp#exec`.
            if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
                result.index = array.index;
                result.input = array.input;
            }
            return result;
        }
        /**
         * Initializes an object clone.
         *
         * @private
         * @param {Object} object The object to clone.
         * @returns {Object} Returns the initialized clone.
         */
        function initCloneObject(object) {
            return (typeof object.constructor == 'function' && !isPrototype(object))
                ? baseCreate(getPrototype(object))
                : {};
        }
        /**
         * Initializes an object clone based on its `toStringTag`.
         *
         * **Note:** This function only supports cloning values with tags of
         * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
         *
         * @private
         * @param {Object} object The object to clone.
         * @param {string} tag The `toStringTag` of the object to clone.
         * @param {Function} cloneFunc The function to clone values.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the initialized clone.
         */
        function initCloneByTag(object, tag, cloneFunc, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
                case arrayBufferTag:
                    return cloneArrayBuffer(object);
                case boolTag:
                case dateTag:
                    return new Ctor(+object);
                case dataViewTag:
                    return cloneDataView(object, isDeep);
                case float32Tag:
                case float64Tag:
                case int8Tag:
                case int16Tag:
                case int32Tag:
                case uint8Tag:
                case uint8ClampedTag:
                case uint16Tag:
                case uint32Tag:
                    return cloneTypedArray(object, isDeep);
                case mapTag:
                    return cloneMap(object, isDeep, cloneFunc);
                case numberTag:
                case stringTag:
                    return new Ctor(object);
                case regexpTag:
                    return cloneRegExp(object);
                case setTag:
                    return cloneSet(object, isDeep, cloneFunc);
                case symbolTag:
                    return cloneSymbol(object);
            }
        }
        /**
         * Inserts wrapper `details` in a comment at the top of the `source` body.
         *
         * @private
         * @param {string} source The source to modify.
         * @returns {Array} details The details to insert.
         * @returns {string} Returns the modified source.
         */
        function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
                return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
            details = details.join(length > 2 ? ', ' : ' ');
            return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
        }
        /**
         * Checks if `value` is a flattenable `arguments` object or array.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
         */
        function isFlattenable(value) {
            return isArray(value) || isArguments(value) ||
                !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length &&
                (typeof value == 'number' || reIsUint.test(value)) &&
                (value > -1 && value % 1 == 0 && value < length);
        }
        /**
         * Checks if the given arguments are from an iteratee call.
         *
         * @private
         * @param {*} value The potential iteratee value argument.
         * @param {*} index The potential iteratee index or key argument.
         * @param {*} object The potential iteratee object argument.
         * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
         *  else `false`.
         */
        function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
                return false;
            }
            var type = typeof index;
            if (type == 'number'
                ? (isArrayLike(object) && isIndex(index, object.length))
                : (type == 'string' && index in object)) {
                return eq(object[index], value);
            }
            return false;
        }
        /**
         * Checks if `value` is a property name and not a property path.
         *
         * @private
         * @param {*} value The value to check.
         * @param {Object} [object] The object to query keys on.
         * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
         */
        function isKey(value, object) {
            if (isArray(value)) {
                return false;
            }
            var type = typeof value;
            if (type == 'number' || type == 'symbol' || type == 'boolean' ||
                value == null || isSymbol(value)) {
                return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
                (object != null && value in Object(object));
        }
        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        function isKeyable(value) {
            var type = typeof value;
            return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
                ? (value !== '__proto__')
                : (value === null);
        }
        /**
         * Checks if `func` has a lazy counterpart.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
         *  else `false`.
         */
        function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
                return false;
            }
            if (func === other) {
                return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
        }
        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
            return !!maskSrcKey && (maskSrcKey in func);
        }
        /**
         * Checks if `func` is capable of being masked.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
         */
        var isMaskable = coreJsData ? isFunction : stubFalse;
        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */
        function isPrototype(value) {
            var Ctor = value && value.constructor, proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
            return value === proto;
        }
        /**
         * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` if suitable for strict
         *  equality comparisons, else `false`.
         */
        function isStrictComparable(value) {
            return value === value && !isObject(value);
        }
        /**
         * A specialized version of `matchesProperty` for source values suitable
         * for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new spec function.
         */
        function matchesStrictComparable(key, srcValue) {
            return function (object) {
                if (object == null) {
                    return false;
                }
                return object[key] === srcValue &&
                    (srcValue !== undefined || (key in Object(object)));
            };
        }
        /**
         * A specialized version of `_.memoize` which clears the memoized function's
         * cache when it exceeds `MAX_MEMOIZE_SIZE`.
         *
         * @private
         * @param {Function} func The function to have its output memoized.
         * @returns {Function} Returns the new memoized function.
         */
        function memoizeCapped(func) {
            var result = memoize(func, function (key) {
                if (cache.size === MAX_MEMOIZE_SIZE) {
                    cache.clear();
                }
                return key;
            });
            var cache = result.cache;
            return result;
        }
        /**
         * Merges the function metadata of `source` into `data`.
         *
         * Merging metadata reduces the number of wrappers used to invoke a function.
         * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
         * may be applied regardless of execution order. Methods like `_.ary` and
         * `_.rearg` modify function arguments, making the order in which they are
         * executed important, preventing the merging of metadata. However, we make
         * an exception for a safe combined case where curried functions have `_.ary`
         * and or `_.rearg` applied.
         *
         * @private
         * @param {Array} data The destination metadata.
         * @param {Array} source The source metadata.
         * @returns {Array} Returns `data`.
         */
        function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
                ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
                ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));
            // Exit early if metadata can't be merged.
            if (!(isCommon || isCombo)) {
                return data;
            }
            // Use source `thisArg` if available.
            if (srcBitmask & WRAP_BIND_FLAG) {
                data[2] = source[2];
                // Set when currying a bound function.
                newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            // Compose partial arguments.
            var value = source[3];
            if (value) {
                var partials = data[3];
                data[3] = partials ? composeArgs(partials, value, source[4]) : value;
                data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            // Compose partial right arguments.
            value = source[5];
            if (value) {
                partials = data[5];
                data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
                data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            // Use source `argPos` if available.
            value = source[7];
            if (value) {
                data[7] = value;
            }
            // Use source `ary` if it's smaller.
            if (srcBitmask & WRAP_ARY_FLAG) {
                data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            // Use source `arity` if one is not provided.
            if (data[9] == null) {
                data[9] = source[9];
            }
            // Use source `func` and merge bitmasks.
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
        }
        /**
         * Used by `_.defaultsDeep` to customize its `_.merge` use.
         *
         * @private
         * @param {*} objValue The destination value.
         * @param {*} srcValue The source value.
         * @param {string} key The key of the property to merge.
         * @param {Object} object The parent object of `objValue`.
         * @param {Object} source The parent object of `srcValue`.
         * @param {Object} [stack] Tracks traversed source values and their merged
         *  counterparts.
         * @returns {*} Returns the value to assign.
         */
        function mergeDefaults(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
                // Recursively merge objects and arrays (susceptible to call stack limits).
                stack.set(srcValue, objValue);
                baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
                stack['delete'](srcValue);
            }
            return objValue;
        }
        /**
         * This function is like
         * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * except that it includes inherited enumerable properties.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function nativeKeysIn(object) {
            var result = [];
            if (object != null) {
                for (var key in Object(object)) {
                    result.push(key);
                }
            }
            return result;
        }
        /**
         * Converts `value` to a string using `Object.prototype.toString`.
         *
         * @private
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         */
        function objectToString(value) {
            return nativeObjectToString.call(value);
        }
        /**
         * A specialized version of `baseRest` which transforms the rest array.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @param {Function} transform The rest array transform.
         * @returns {Function} Returns the new function.
         */
        function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
            return function () {
                var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
                while (++index < length) {
                    array[index] = args[start + index];
                }
                index = -1;
                var otherArgs = Array(start + 1);
                while (++index < start) {
                    otherArgs[index] = args[index];
                }
                otherArgs[start] = transform(array);
                return apply(func, this, otherArgs);
            };
        }
        /**
         * Gets the parent value at `path` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array} path The path to get the parent value of.
         * @returns {*} Returns the parent value.
         */
        function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        /**
         * Reorder `array` according to the specified indexes where the element at
         * the first index is assigned as the first element, the element at
         * the second index is assigned as the second element, and so on.
         *
         * @private
         * @param {Array} array The array to reorder.
         * @param {Array} indexes The arranged array indexes.
         * @returns {Array} Returns `array`.
         */
        function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
                var index = indexes[length];
                array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
            }
            return array;
        }
        /**
         * Sets metadata for `func`.
         *
         * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
         * period of time, it will trip its breaker and transition to an identity
         * function to avoid garbage collection pauses in V8. See
         * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
         * for more details.
         *
         * @private
         * @param {Function} func The function to associate metadata with.
         * @param {*} data The metadata.
         * @returns {Function} Returns `func`.
         */
        var setData = shortOut(baseSetData);
        /**
         * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
         *
         * @private
         * @param {Function} func The function to delay.
         * @param {number} wait The number of milliseconds to delay invocation.
         * @returns {number|Object} Returns the timer id or timeout object.
         */
        var setTimeout = ctxSetTimeout || function (func, wait) {
            return root.setTimeout(func, wait);
        };
        /**
         * Sets the `toString` method of `func` to return `string`.
         *
         * @private
         * @param {Function} func The function to modify.
         * @param {Function} string The `toString` result.
         * @returns {Function} Returns `func`.
         */
        var setToString = shortOut(baseSetToString);
        /**
         * Sets the `toString` method of `wrapper` to mimic the source of `reference`
         * with wrapper details in a comment at the top of the source body.
         *
         * @private
         * @param {Function} wrapper The function to modify.
         * @param {Function} reference The reference function.
         * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
         * @returns {Function} Returns `wrapper`.
         */
        function setWrapToString(wrapper, reference, bitmask) {
            var source = (reference + '');
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        /**
         * Creates a function that'll short out and invoke `identity` instead
         * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
         * milliseconds.
         *
         * @private
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new shortable function.
         */
        function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function () {
                var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) {
                        return arguments[0];
                    }
                }
                else {
                    count = 0;
                }
                return func.apply(undefined, arguments);
            };
        }
        /**
         * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
         *
         * @private
         * @param {Array} array The array to shuffle.
         * @param {number} [size=array.length] The size of `array`.
         * @returns {Array} Returns `array`.
         */
        function shuffleSelf(array, size) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size = size === undefined ? length : size;
            while (++index < size) {
                var rand = baseRandom(index, lastIndex), value = array[rand];
                array[rand] = array[index];
                array[index] = value;
            }
            array.length = size;
            return array;
        }
        /**
         * Converts `string` to a property path array.
         *
         * @private
         * @param {string} string The string to convert.
         * @returns {Array} Returns the property path array.
         */
        var stringToPath = memoizeCapped(function (string) {
            var result = [];
            if (reLeadingDot.test(string)) {
                result.push('');
            }
            string.replace(rePropName, function (match, number, quote, string) {
                result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
            });
            return result;
        });
        /**
         * Converts `value` to a string key if it's not a string or symbol.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {string|symbol} Returns the key.
         */
        function toKey(value) {
            if (typeof value == 'string' || isSymbol(value)) {
                return value;
            }
            var result = (value + '');
            return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
        }
        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to convert.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func);
                }
                catch (e) { }
                try {
                    return (func + '');
                }
                catch (e) { }
            }
            return '';
        }
        /**
         * Updates wrapper `details` based on `bitmask` flags.
         *
         * @private
         * @returns {Array} details The details to modify.
         * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
         * @returns {Array} Returns `details`.
         */
        function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function (pair) {
                var value = '_.' + pair[0];
                if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
                    details.push(value);
                }
            });
            return details.sort();
        }
        /**
         * Creates a clone of `wrapper`.
         *
         * @private
         * @param {Object} wrapper The wrapper to clone.
         * @returns {Object} Returns the cloned wrapper.
         */
        function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
                return wrapper.clone();
            }
            var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result.__actions__ = copyArray(wrapper.__actions__);
            result.__index__ = wrapper.__index__;
            result.__values__ = wrapper.__values__;
            return result;
        }
        /*------------------------------------------------------------------------*/
        /**
         * Creates an array of elements split into groups the length of `size`.
         * If `array` can't be split evenly, the final chunk will be the remaining
         * elements.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to process.
         * @param {number} [size=1] The length of each chunk
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Array} Returns the new array of chunks.
         * @example
         *
         * _.chunk(['a', 'b', 'c', 'd'], 2);
         * // => [['a', 'b'], ['c', 'd']]
         *
         * _.chunk(['a', 'b', 'c', 'd'], 3);
         * // => [['a', 'b', 'c'], ['d']]
         */
        function chunk(array, size, guard) {
            if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
                size = 1;
            }
            else {
                size = nativeMax(toInteger(size), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size < 1) {
                return [];
            }
            var index = 0, resIndex = 0, result = Array(nativeCeil(length / size));
            while (index < length) {
                result[resIndex++] = baseSlice(array, index, (index += size));
            }
            return result;
        }
        /**
         * Creates an array with all falsey values removed. The values `false`, `null`,
         * `0`, `""`, `undefined`, and `NaN` are falsey.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to compact.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * _.compact([0, 1, false, 2, '', 3]);
         * // => [1, 2, 3]
         */
        function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
            while (++index < length) {
                var value = array[index];
                if (value) {
                    result[resIndex++] = value;
                }
            }
            return result;
        }
        /**
         * Creates a new array concatenating `array` with any additional arrays
         * and/or values.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to concatenate.
         * @param {...*} [values] The values to concatenate.
         * @returns {Array} Returns the new concatenated array.
         * @example
         *
         * var array = [1];
         * var other = _.concat(array, 2, [3], [[4]]);
         *
         * console.log(other);
         * // => [1, 2, 3, [4]]
         *
         * console.log(array);
         * // => [1]
         */
        function concat() {
            var length = arguments.length;
            if (!length) {
                return [];
            }
            var args = Array(length - 1), array = arguments[0], index = length;
            while (index--) {
                args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        /**
         * Creates an array of `array` values not included in the other given arrays
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons. The order and references of result values are
         * determined by the first array.
         *
         * **Note:** Unlike `_.pullAll`, this method returns a new array.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {...Array} [values] The values to exclude.
         * @returns {Array} Returns the new array of filtered values.
         * @see _.without, _.xor
         * @example
         *
         * _.difference([2, 1], [2, 3]);
         * // => [1]
         */
        var difference = baseRest(function (array, values) {
            return isArrayLikeObject(array)
                ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
                : [];
        });
        /**
         * This method is like `_.difference` except that it accepts `iteratee` which
         * is invoked for each element of `array` and `values` to generate the criterion
         * by which they're compared. The order and references of result values are
         * determined by the first array. The iteratee is invoked with one argument:
         * (value).
         *
         * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {...Array} [values] The values to exclude.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
         * // => [1.2]
         *
         * // The `_.property` iteratee shorthand.
         * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        var differenceBy = baseRest(function (array, values) {
            var iteratee = last(values);
            if (isArrayLikeObject(iteratee)) {
                iteratee = undefined;
            }
            return isArrayLikeObject(array)
                ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
                : [];
        });
        /**
         * This method is like `_.difference` except that it accepts `comparator`
         * which is invoked to compare elements of `array` to `values`. The order and
         * references of result values are determined by the first array. The comparator
         * is invoked with two arguments: (arrVal, othVal).
         *
         * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {...Array} [values] The values to exclude.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         *
         * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }]
         */
        var differenceWith = baseRest(function (array, values) {
            var comparator = last(values);
            if (isArrayLikeObject(comparator)) {
                comparator = undefined;
            }
            return isArrayLikeObject(array)
                ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
                : [];
        });
        /**
         * Creates a slice of `array` with `n` elements dropped from the beginning.
         *
         * @static
         * @memberOf _
         * @since 0.5.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=1] The number of elements to drop.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.drop([1, 2, 3]);
         * // => [2, 3]
         *
         * _.drop([1, 2, 3], 2);
         * // => [3]
         *
         * _.drop([1, 2, 3], 5);
         * // => []
         *
         * _.drop([1, 2, 3], 0);
         * // => [1, 2, 3]
         */
        function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            n = (guard || n === undefined) ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
        }
        /**
         * Creates a slice of `array` with `n` elements dropped from the end.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=1] The number of elements to drop.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.dropRight([1, 2, 3]);
         * // => [1, 2]
         *
         * _.dropRight([1, 2, 3], 2);
         * // => [1]
         *
         * _.dropRight([1, 2, 3], 5);
         * // => []
         *
         * _.dropRight([1, 2, 3], 0);
         * // => [1, 2, 3]
         */
        function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            n = (guard || n === undefined) ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        /**
         * Creates a slice of `array` excluding elements dropped from the end.
         * Elements are dropped until `predicate` returns falsey. The predicate is
         * invoked with three arguments: (value, index, array).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'active': true },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': false }
         * ];
         *
         * _.dropRightWhile(users, function(o) { return !o.active; });
         * // => objects for ['barney']
         *
         * // The `_.matches` iteratee shorthand.
         * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
         * // => objects for ['barney', 'fred']
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.dropRightWhile(users, ['active', false]);
         * // => objects for ['barney']
         *
         * // The `_.property` iteratee shorthand.
         * _.dropRightWhile(users, 'active');
         * // => objects for ['barney', 'fred', 'pebbles']
         */
        function dropRightWhile(array, predicate) {
            return (array && array.length)
                ? baseWhile(array, getIteratee(predicate, 3), true, true)
                : [];
        }
        /**
         * Creates a slice of `array` excluding elements dropped from the beginning.
         * Elements are dropped until `predicate` returns falsey. The predicate is
         * invoked with three arguments: (value, index, array).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'active': false },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': true }
         * ];
         *
         * _.dropWhile(users, function(o) { return !o.active; });
         * // => objects for ['pebbles']
         *
         * // The `_.matches` iteratee shorthand.
         * _.dropWhile(users, { 'user': 'barney', 'active': false });
         * // => objects for ['fred', 'pebbles']
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.dropWhile(users, ['active', false]);
         * // => objects for ['pebbles']
         *
         * // The `_.property` iteratee shorthand.
         * _.dropWhile(users, 'active');
         * // => objects for ['barney', 'fred', 'pebbles']
         */
        function dropWhile(array, predicate) {
            return (array && array.length)
                ? baseWhile(array, getIteratee(predicate, 3), true)
                : [];
        }
        /**
         * Fills elements of `array` with `value` from `start` up to, but not
         * including, `end`.
         *
         * **Note:** This method mutates `array`.
         *
         * @static
         * @memberOf _
         * @since 3.2.0
         * @category Array
         * @param {Array} array The array to fill.
         * @param {*} value The value to fill `array` with.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _.fill(array, 'a');
         * console.log(array);
         * // => ['a', 'a', 'a']
         *
         * _.fill(Array(3), 2);
         * // => [2, 2, 2]
         *
         * _.fill([4, 6, 8, 10], '*', 1, 3);
         * // => [4, '*', '*', 10]
         */
        function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
                start = 0;
                end = length;
            }
            return baseFill(array, value, start, end);
        }
        /**
         * This method is like `_.find` except that it returns the index of the first
         * element `predicate` returns truthy for instead of the element itself.
         *
         * @static
         * @memberOf _
         * @since 1.1.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @param {number} [fromIndex=0] The index to search from.
         * @returns {number} Returns the index of the found element, else `-1`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'active': false },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': true }
         * ];
         *
         * _.findIndex(users, function(o) { return o.user == 'barney'; });
         * // => 0
         *
         * // The `_.matches` iteratee shorthand.
         * _.findIndex(users, { 'user': 'fred', 'active': false });
         * // => 1
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.findIndex(users, ['active', false]);
         * // => 0
         *
         * // The `_.property` iteratee shorthand.
         * _.findIndex(users, 'active');
         * // => 2
         */
        function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
                index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        /**
         * This method is like `_.findIndex` except that it iterates over elements
         * of `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @param {number} [fromIndex=array.length-1] The index to search from.
         * @returns {number} Returns the index of the found element, else `-1`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'active': true },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': false }
         * ];
         *
         * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
         * // => 2
         *
         * // The `_.matches` iteratee shorthand.
         * _.findLastIndex(users, { 'user': 'barney', 'active': true });
         * // => 0
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.findLastIndex(users, ['active', false]);
         * // => 2
         *
         * // The `_.property` iteratee shorthand.
         * _.findLastIndex(users, 'active');
         * // => 0
         */
        function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = fromIndex < 0
                    ? nativeMax(length + index, 0)
                    : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        /**
         * Flattens `array` a single level deep.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to flatten.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * _.flatten([1, [2, [3, [4]], 5]]);
         * // => [1, 2, [3, [4]], 5]
         */
        function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
        }
        /**
         * Recursively flattens `array`.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to flatten.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * _.flattenDeep([1, [2, [3, [4]], 5]]);
         * // => [1, 2, 3, 4, 5]
         */
        function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
        }
        /**
         * Recursively flatten `array` up to `depth` times.
         *
         * @static
         * @memberOf _
         * @since 4.4.0
         * @category Array
         * @param {Array} array The array to flatten.
         * @param {number} [depth=1] The maximum recursion depth.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * var array = [1, [2, [3, [4]], 5]];
         *
         * _.flattenDepth(array, 1);
         * // => [1, 2, [3, [4]], 5]
         *
         * _.flattenDepth(array, 2);
         * // => [1, 2, 3, [4], 5]
         */
        function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
        }
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} pairs The key-value pairs.
         * @returns {Object} Returns the new object.
         * @example
         *
         * _.fromPairs([['a', 1], ['b', 2]]);
         * // => { 'a': 1, 'b': 2 }
         */
        function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
            while (++index < length) {
                var pair = pairs[index];
                result[pair[0]] = pair[1];
            }
            return result;
        }
        /**
         * Gets the first element of `array`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @alias first
         * @category Array
         * @param {Array} array The array to query.
         * @returns {*} Returns the first element of `array`.
         * @example
         *
         * _.head([1, 2, 3]);
         * // => 1
         *
         * _.head([]);
         * // => undefined
         */
        function head(array) {
            return (array && array.length) ? array[0] : undefined;
        }
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the
         * offset from the end of `array`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {*} value The value to search for.
         * @param {number} [fromIndex=0] The index to search from.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // Search from the `fromIndex`.
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
                index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
        }
        /**
         * Gets all but the last element of `array`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to query.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.initial([1, 2, 3]);
         * // => [1, 2]
         */
        function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
        }
        /**
         * Creates an array of unique values that are included in all given arrays
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons. The order and references of result values are
         * determined by the first array.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @returns {Array} Returns the new array of intersecting values.
         * @example
         *
         * _.intersection([2, 1], [2, 3]);
         * // => [2]
         */
        var intersection = baseRest(function (arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return (mapped.length && mapped[0] === arrays[0])
                ? baseIntersection(mapped)
                : [];
        });
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which they're compared. The order and references of result values are
         * determined by the first array. The iteratee is invoked with one argument:
         * (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new array of intersecting values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
         * // => [2.1]
         *
         * // The `_.property` iteratee shorthand.
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        var intersectionBy = baseRest(function (arrays) {
            var iteratee = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee === last(mapped)) {
                iteratee = undefined;
            }
            else {
                mapped.pop();
            }
            return (mapped.length && mapped[0] === arrays[0])
                ? baseIntersection(mapped, getIteratee(iteratee, 2))
                : [];
        });
        /**
         * This method is like `_.intersection` except that it accepts `comparator`
         * which is invoked to compare elements of `arrays`. The order and references
         * of result values are determined by the first array. The comparator is
         * invoked with two arguments: (arrVal, othVal).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of intersecting values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.intersectionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }]
         */
        var intersectionWith = baseRest(function (arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            if (comparator) {
                mapped.pop();
            }
            return (mapped.length && mapped[0] === arrays[0])
                ? baseIntersection(mapped, undefined, comparator)
                : [];
        });
        /**
         * Converts all elements in `array` into a string separated by `separator`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to convert.
         * @param {string} [separator=','] The element separator.
         * @returns {string} Returns the joined string.
         * @example
         *
         * _.join(['a', 'b', 'c'], '~');
         * // => 'a~b~c'
         */
        function join(array, separator) {
            return array == null ? '' : nativeJoin.call(array, separator);
        }
        /**
         * Gets the last element of `array`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to query.
         * @returns {*} Returns the last element of `array`.
         * @example
         *
         * _.last([1, 2, 3]);
         * // => 3
         */
        function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined;
        }
        /**
         * This method is like `_.indexOf` except that it iterates over elements of
         * `array` from right to left.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {*} value The value to search for.
         * @param {number} [fromIndex=array.length-1] The index to search from.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.lastIndexOf([1, 2, 1, 2], 2);
         * // => 3
         *
         * // Search from the `fromIndex`.
         * _.lastIndexOf([1, 2, 1, 2], 2, 2);
         * // => 1
         */
        function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return -1;
            }
            var index = length;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value
                ? strictLastIndexOf(array, value, index)
                : baseFindIndex(array, baseIsNaN, index, true);
        }
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth
         * element from the end is returned.
         *
         * @static
         * @memberOf _
         * @since 4.11.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=0] The index of the element to return.
         * @returns {*} Returns the nth element of `array`.
         * @example
         *
         * var array = ['a', 'b', 'c', 'd'];
         *
         * _.nth(array, 1);
         * // => 'b'
         *
         * _.nth(array, -2);
         * // => 'c';
         */
        function nth(array, n) {
            return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
        }
        /**
         * Removes all given values from `array` using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
         * to remove elements from an array by predicate.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Array
         * @param {Array} array The array to modify.
         * @param {...*} [values] The values to remove.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
         *
         * _.pull(array, 'a', 'c');
         * console.log(array);
         * // => ['b', 'b']
         */
        var pull = baseRest(pullAll);
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to modify.
         * @param {Array} values The values to remove.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
         *
         * _.pullAll(array, ['a', 'c']);
         * console.log(array);
         * // => ['b', 'b']
         */
        function pullAll(array, values) {
            return (array && array.length && values && values.length)
                ? basePullAll(array, values)
                : array;
        }
        /**
         * This method is like `_.pullAll` except that it accepts `iteratee` which is
         * invoked for each element of `array` and `values` to generate the criterion
         * by which they're compared. The iteratee is invoked with one argument: (value).
         *
         * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to modify.
         * @param {Array} values The values to remove.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
         *
         * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
         * console.log(array);
         * // => [{ 'x': 2 }]
         */
        function pullAllBy(array, values, iteratee) {
            return (array && array.length && values && values.length)
                ? basePullAll(array, values, getIteratee(iteratee, 2))
                : array;
        }
        /**
         * This method is like `_.pullAll` except that it accepts `comparator` which
         * is invoked to compare elements of `array` to `values`. The comparator is
         * invoked with two arguments: (arrVal, othVal).
         *
         * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @since 4.6.0
         * @category Array
         * @param {Array} array The array to modify.
         * @param {Array} values The values to remove.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
         *
         * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
         * console.log(array);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
         */
        function pullAllWith(array, values, comparator) {
            return (array && array.length && values && values.length)
                ? basePullAll(array, values, undefined, comparator)
                : array;
        }
        /**
         * Removes elements from `array` corresponding to `indexes` and returns an
         * array of removed elements.
         *
         * **Note:** Unlike `_.at`, this method mutates `array`.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to modify.
         * @param {...(number|number[])} [indexes] The indexes of elements to remove.
         * @returns {Array} Returns the new array of removed elements.
         * @example
         *
         * var array = ['a', 'b', 'c', 'd'];
         * var pulled = _.pullAt(array, [1, 3]);
         *
         * console.log(array);
         * // => ['a', 'c']
         *
         * console.log(pulled);
         * // => ['b', 'd']
         */
        var pullAt = flatRest(function (array, indexes) {
            var length = array == null ? 0 : array.length, result = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function (index) {
                return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result;
        });
        /**
         * Removes all elements from `array` that `predicate` returns truthy for
         * and returns an array of the removed elements. The predicate is invoked
         * with three arguments: (value, index, array).
         *
         * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
         * to pull elements from an array by value.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Array
         * @param {Array} array The array to modify.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new array of removed elements.
         * @example
         *
         * var array = [1, 2, 3, 4];
         * var evens = _.remove(array, function(n) {
         *   return n % 2 == 0;
         * });
         *
         * console.log(array);
         * // => [1, 3]
         *
         * console.log(evens);
         * // => [2, 4]
         */
        function remove(array, predicate) {
            var result = [];
            if (!(array && array.length)) {
                return result;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                    result.push(value);
                    indexes.push(index);
                }
            }
            basePullAt(array, indexes);
            return result;
        }
        /**
         * Reverses `array` so that the first element becomes the last, the second
         * element becomes the second to last, and so on.
         *
         * **Note:** This method mutates `array` and is based on
         * [`Array#reverse`](https://mdn.io/Array/reverse).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to modify.
         * @returns {Array} Returns `array`.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _.reverse(array);
         * // => [3, 2, 1]
         *
         * console.log(array);
         * // => [3, 2, 1]
         */
        function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
        }
        /**
         * Creates a slice of `array` from `start` up to, but not including, `end`.
         *
         * **Note:** This method is used instead of
         * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
         * returned.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to slice.
         * @param {number} [start=0] The start position.
         * @param {number} [end=array.length] The end position.
         * @returns {Array} Returns the slice of `array`.
         */
        function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
                start = 0;
                end = length;
            }
            else {
                start = start == null ? 0 : toInteger(start);
                end = end === undefined ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
        }
        /**
         * Uses a binary search to determine the lowest index at which `value`
         * should be inserted into `array` in order to maintain its sort order.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         * @example
         *
         * _.sortedIndex([30, 50], 40);
         * // => 1
         */
        function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
        }
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         * @example
         *
         * var objects = [{ 'x': 4 }, { 'x': 5 }];
         *
         * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
         * // => 0
         *
         * // The `_.property` iteratee shorthand.
         * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
         * // => 0
         */
        function sortedIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
        }
        /**
         * This method is like `_.indexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {*} value The value to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
         * // => 1
         */
        function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value);
                if (index < length && eq(array[index], value)) {
                    return index;
                }
            }
            return -1;
        }
        /**
         * This method is like `_.sortedIndex` except that it returns the highest
         * index at which `value` should be inserted into `array` in order to
         * maintain its sort order.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         * @example
         *
         * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
         * // => 4
         */
        function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
        }
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The sorted array to inspect.
         * @param {*} value The value to evaluate.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {number} Returns the index at which `value` should be inserted
         *  into `array`.
         * @example
         *
         * var objects = [{ 'x': 4 }, { 'x': 5 }];
         *
         * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
         * // => 1
         *
         * // The `_.property` iteratee shorthand.
         * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
         * // => 1
         */
        function sortedLastIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
        }
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {*} value The value to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
         * // => 3
         */
        function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value, true) - 1;
                if (eq(array[index], value)) {
                    return index;
                }
            }
            return -1;
        }
        /**
         * This method is like `_.uniq` except that it's designed and optimized
         * for sorted arrays.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniq([1, 1, 2]);
         * // => [1, 2]
         */
        function sortedUniq(array) {
            return (array && array.length)
                ? baseSortedUniq(array)
                : [];
        }
        /**
         * This method is like `_.uniqBy` except that it's designed and optimized
         * for sorted arrays.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {Function} [iteratee] The iteratee invoked per element.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
         * // => [1.1, 2.3]
         */
        function sortedUniqBy(array, iteratee) {
            return (array && array.length)
                ? baseSortedUniq(array, getIteratee(iteratee, 2))
                : [];
        }
        /**
         * Gets all but the first element of `array`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to query.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.tail([1, 2, 3]);
         * // => [2, 3]
         */
        function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
        }
        /**
         * Creates a slice of `array` with `n` elements taken from the beginning.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=1] The number of elements to take.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.take([1, 2, 3]);
         * // => [1]
         *
         * _.take([1, 2, 3], 2);
         * // => [1, 2]
         *
         * _.take([1, 2, 3], 5);
         * // => [1, 2, 3]
         *
         * _.take([1, 2, 3], 0);
         * // => []
         */
        function take(array, n, guard) {
            if (!(array && array.length)) {
                return [];
            }
            n = (guard || n === undefined) ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        /**
         * Creates a slice of `array` with `n` elements taken from the end.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {number} [n=1] The number of elements to take.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * _.takeRight([1, 2, 3]);
         * // => [3]
         *
         * _.takeRight([1, 2, 3], 2);
         * // => [2, 3]
         *
         * _.takeRight([1, 2, 3], 5);
         * // => [1, 2, 3]
         *
         * _.takeRight([1, 2, 3], 0);
         * // => []
         */
        function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
                return [];
            }
            n = (guard || n === undefined) ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
        }
        /**
         * Creates a slice of `array` with elements taken from the end. Elements are
         * taken until `predicate` returns falsey. The predicate is invoked with
         * three arguments: (value, index, array).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'active': true },
         *   { 'user': 'fred',    'active': false },
         *   { 'user': 'pebbles', 'active': false }
         * ];
         *
         * _.takeRightWhile(users, function(o) { return !o.active; });
         * // => objects for ['fred', 'pebbles']
         *
         * // The `_.matches` iteratee shorthand.
         * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
         * // => objects for ['pebbles']
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.takeRightWhile(users, ['active', false]);
         * // => objects for ['fred', 'pebbles']
         *
         * // The `_.property` iteratee shorthand.
         * _.takeRightWhile(users, 'active');
         * // => []
         */
        function takeRightWhile(array, predicate) {
            return (array && array.length)
                ? baseWhile(array, getIteratee(predicate, 3), false, true)
                : [];
        }
        /**
         * Creates a slice of `array` with elements taken from the beginning. Elements
         * are taken until `predicate` returns falsey. The predicate is invoked with
         * three arguments: (value, index, array).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Array
         * @param {Array} array The array to query.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the slice of `array`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'active': false },
         *   { 'user': 'fred',    'active': false},
         *   { 'user': 'pebbles', 'active': true }
         * ];
         *
         * _.takeWhile(users, function(o) { return !o.active; });
         * // => objects for ['barney', 'fred']
         *
         * // The `_.matches` iteratee shorthand.
         * _.takeWhile(users, { 'user': 'barney', 'active': false });
         * // => objects for ['barney']
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.takeWhile(users, ['active', false]);
         * // => objects for ['barney', 'fred']
         *
         * // The `_.property` iteratee shorthand.
         * _.takeWhile(users, 'active');
         * // => []
         */
        function takeWhile(array, predicate) {
            return (array && array.length)
                ? baseWhile(array, getIteratee(predicate, 3))
                : [];
        }
        /**
         * Creates an array of unique values, in order, from all given arrays using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @returns {Array} Returns the new array of combined values.
         * @example
         *
         * _.union([2], [1, 2]);
         * // => [2, 1]
         */
        var union = baseRest(function (arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by
         * which uniqueness is computed. Result values are chosen from the first
         * array in which the value occurs. The iteratee is invoked with one argument:
         * (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new array of combined values.
         * @example
         *
         * _.unionBy([2.1], [1.2, 2.3], Math.floor);
         * // => [2.1, 1.2]
         *
         * // The `_.property` iteratee shorthand.
         * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        var unionBy = baseRest(function (arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) {
                iteratee = undefined;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
        });
        /**
         * This method is like `_.union` except that it accepts `comparator` which
         * is invoked to compare elements of `arrays`. Result values are chosen from
         * the first array in which the value occurs. The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of combined values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.unionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        var unionWith = baseRest(function (arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
        });
        /**
         * Creates a duplicate-free version of an array, using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons, in which only the first occurrence of each element
         * is kept. The order of result values is determined by the order they occur
         * in the array.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * _.uniq([2, 1, 2]);
         * // => [2, 1]
         */
        function uniq(array) {
            return (array && array.length) ? baseUniq(array) : [];
        }
        /**
         * This method is like `_.uniq` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * uniqueness is computed. The order of result values is determined by the
         * order they occur in the array. The iteratee is invoked with one argument:
         * (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
         * // => [2.1, 1.2]
         *
         * // The `_.property` iteratee shorthand.
         * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        function uniqBy(array, iteratee) {
            return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
        }
        /**
         * This method is like `_.uniq` except that it accepts `comparator` which
         * is invoked to compare elements of `array`. The order of result values is
         * determined by the order they occur in the array.The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new duplicate free array.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.uniqWith(objects, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
         */
        function uniqWith(array, comparator) {
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
        }
        /**
         * This method is like `_.zip` except that it accepts an array of grouped
         * elements and creates an array regrouping the elements to their pre-zip
         * configuration.
         *
         * @static
         * @memberOf _
         * @since 1.2.0
         * @category Array
         * @param {Array} array The array of grouped elements to process.
         * @returns {Array} Returns the new array of regrouped elements.
         * @example
         *
         * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
         * // => [['a', 1, true], ['b', 2, false]]
         *
         * _.unzip(zipped);
         * // => [['a', 'b'], [1, 2], [true, false]]
         */
        function unzip(array) {
            if (!(array && array.length)) {
                return [];
            }
            var length = 0;
            array = arrayFilter(array, function (group) {
                if (isArrayLikeObject(group)) {
                    length = nativeMax(group.length, length);
                    return true;
                }
            });
            return baseTimes(length, function (index) {
                return arrayMap(array, baseProperty(index));
            });
        }
        /**
         * This method is like `_.unzip` except that it accepts `iteratee` to specify
         * how regrouped values should be combined. The iteratee is invoked with the
         * elements of each group: (...group).
         *
         * @static
         * @memberOf _
         * @since 3.8.0
         * @category Array
         * @param {Array} array The array of grouped elements to process.
         * @param {Function} [iteratee=_.identity] The function to combine
         *  regrouped values.
         * @returns {Array} Returns the new array of regrouped elements.
         * @example
         *
         * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
         * // => [[1, 10, 100], [2, 20, 200]]
         *
         * _.unzipWith(zipped, _.add);
         * // => [3, 30, 300]
         */
        function unzipWith(array, iteratee) {
            if (!(array && array.length)) {
                return [];
            }
            var result = unzip(array);
            if (iteratee == null) {
                return result;
            }
            return arrayMap(result, function (group) {
                return apply(iteratee, undefined, group);
            });
        }
        /**
         * Creates an array excluding all given values using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * **Note:** Unlike `_.pull`, this method returns a new array.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {Array} array The array to inspect.
         * @param {...*} [values] The values to exclude.
         * @returns {Array} Returns the new array of filtered values.
         * @see _.difference, _.xor
         * @example
         *
         * _.without([2, 1, 2, 3], 1, 2);
         * // => [3]
         */
        var without = baseRest(function (array, values) {
            return isArrayLikeObject(array)
                ? baseDifference(array, values)
                : [];
        });
        /**
         * Creates an array of unique values that is the
         * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
         * of the given arrays. The order of result values is determined by the order
         * they occur in the arrays.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @returns {Array} Returns the new array of filtered values.
         * @see _.difference, _.without
         * @example
         *
         * _.xor([2, 1], [2, 3]);
         * // => [1, 3]
         */
        var xor = baseRest(function (arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by
         * which by which they're compared. The order of result values is determined
         * by the order they occur in the arrays. The iteratee is invoked with one
         * argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
         * // => [1.2, 3.4]
         *
         * // The `_.property` iteratee shorthand.
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        var xorBy = baseRest(function (arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) {
                iteratee = undefined;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
        });
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The order of result values is
         * determined by the order they occur in the arrays. The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Array
         * @param {...Array} [arrays] The arrays to inspect.
         * @param {Function} [comparator] The comparator invoked per element.
         * @returns {Array} Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        var xorWith = baseRest(function (arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == 'function' ? comparator : undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
        });
        /**
         * Creates an array of grouped elements, the first of which contains the
         * first elements of the given arrays, the second of which contains the
         * second elements of the given arrays, and so on.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Array
         * @param {...Array} [arrays] The arrays to process.
         * @returns {Array} Returns the new array of grouped elements.
         * @example
         *
         * _.zip(['a', 'b'], [1, 2], [true, false]);
         * // => [['a', 1, true], ['b', 2, false]]
         */
        var zip = baseRest(unzip);
        /**
         * This method is like `_.fromPairs` except that it accepts two arrays,
         * one of property identifiers and one of corresponding values.
         *
         * @static
         * @memberOf _
         * @since 0.4.0
         * @category Array
         * @param {Array} [props=[]] The property identifiers.
         * @param {Array} [values=[]] The property values.
         * @returns {Object} Returns the new object.
         * @example
         *
         * _.zipObject(['a', 'b'], [1, 2]);
         * // => { 'a': 1, 'b': 2 }
         */
        function zipObject(props, values) {
            return baseZipObject(props || [], values || [], assignValue);
        }
        /**
         * This method is like `_.zipObject` except that it supports property paths.
         *
         * @static
         * @memberOf _
         * @since 4.1.0
         * @category Array
         * @param {Array} [props=[]] The property identifiers.
         * @param {Array} [values=[]] The property values.
         * @returns {Object} Returns the new object.
         * @example
         *
         * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
         * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
         */
        function zipObjectDeep(props, values) {
            return baseZipObject(props || [], values || [], baseSet);
        }
        /**
         * This method is like `_.zip` except that it accepts `iteratee` to specify
         * how grouped values should be combined. The iteratee is invoked with the
         * elements of each group: (...group).
         *
         * @static
         * @memberOf _
         * @since 3.8.0
         * @category Array
         * @param {...Array} [arrays] The arrays to process.
         * @param {Function} [iteratee=_.identity] The function to combine
         *  grouped values.
         * @returns {Array} Returns the new array of grouped elements.
         * @example
         *
         * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
         *   return a + b + c;
         * });
         * // => [111, 222]
         */
        var zipWith = baseRest(function (arrays) {
            var length = arrays.length, iteratee = length > 1 ? arrays[length - 1] : undefined;
            iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
            return unzipWith(arrays, iteratee);
        });
        /*------------------------------------------------------------------------*/
        /**
         * Creates a `lodash` wrapper instance that wraps `value` with explicit method
         * chain sequences enabled. The result of such sequences must be unwrapped
         * with `_#value`.
         *
         * @static
         * @memberOf _
         * @since 1.3.0
         * @category Seq
         * @param {*} value The value to wrap.
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'age': 36 },
         *   { 'user': 'fred',    'age': 40 },
         *   { 'user': 'pebbles', 'age': 1 }
         * ];
         *
         * var youngest = _
         *   .chain(users)
         *   .sortBy('age')
         *   .map(function(o) {
         *     return o.user + ' is ' + o.age;
         *   })
         *   .head()
         *   .value();
         * // => 'pebbles is 1'
         */
        function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result;
        }
        /**
         * This method invokes `interceptor` and returns `value`. The interceptor
         * is invoked with one argument; (value). The purpose of this method is to
         * "tap into" a method chain sequence in order to modify intermediate results.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Seq
         * @param {*} value The value to provide to `interceptor`.
         * @param {Function} interceptor The function to invoke.
         * @returns {*} Returns `value`.
         * @example
         *
         * _([1, 2, 3])
         *  .tap(function(array) {
         *    // Mutate input array.
         *    array.pop();
         *  })
         *  .reverse()
         *  .value();
         * // => [2, 1]
         */
        function tap(value, interceptor) {
            interceptor(value);
            return value;
        }
        /**
         * This method is like `_.tap` except that it returns the result of `interceptor`.
         * The purpose of this method is to "pass thru" values replacing intermediate
         * results in a method chain sequence.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Seq
         * @param {*} value The value to provide to `interceptor`.
         * @param {Function} interceptor The function to invoke.
         * @returns {*} Returns the result of `interceptor`.
         * @example
         *
         * _('  abc  ')
         *  .chain()
         *  .trim()
         *  .thru(function(value) {
         *    return [value];
         *  })
         *  .value();
         * // => ['abc']
         */
        function thru(value, interceptor) {
            return interceptor(value);
        }
        /**
         * This method is the wrapper version of `_.at`.
         *
         * @name at
         * @memberOf _
         * @since 1.0.0
         * @category Seq
         * @param {...(string|string[])} [paths] The property paths to pick.
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
         *
         * _(object).at(['a[0].b.c', 'a[1]']).value();
         * // => [3, 4]
         */
        var wrapperAt = flatRest(function (paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function (object) { return baseAt(object, paths); };
            if (length > 1 || this.__actions__.length ||
                !(value instanceof LazyWrapper) || !isIndex(start)) {
                return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
                'func': thru,
                'args': [interceptor],
                'thisArg': undefined
            });
            return new LodashWrapper(value, this.__chain__).thru(function (array) {
                if (length && !array.length) {
                    array.push(undefined);
                }
                return array;
            });
        });
        /**
         * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
         *
         * @name chain
         * @memberOf _
         * @since 0.1.0
         * @category Seq
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 }
         * ];
         *
         * // A sequence without explicit chaining.
         * _(users).head();
         * // => { 'user': 'barney', 'age': 36 }
         *
         * // A sequence with explicit chaining.
         * _(users)
         *   .chain()
         *   .head()
         *   .pick('user')
         *   .value();
         * // => { 'user': 'barney' }
         */
        function wrapperChain() {
            return chain(this);
        }
        /**
         * Executes the chain sequence and returns the wrapped result.
         *
         * @name commit
         * @memberOf _
         * @since 3.2.0
         * @category Seq
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var array = [1, 2];
         * var wrapped = _(array).push(3);
         *
         * console.log(array);
         * // => [1, 2]
         *
         * wrapped = wrapped.commit();
         * console.log(array);
         * // => [1, 2, 3]
         *
         * wrapped.last();
         * // => 3
         *
         * console.log(array);
         * // => [1, 2, 3]
         */
        function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
        }
        /**
         * Gets the next value on a wrapped object following the
         * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
         *
         * @name next
         * @memberOf _
         * @since 4.0.0
         * @category Seq
         * @returns {Object} Returns the next iterator value.
         * @example
         *
         * var wrapped = _([1, 2]);
         *
         * wrapped.next();
         * // => { 'done': false, 'value': 1 }
         *
         * wrapped.next();
         * // => { 'done': false, 'value': 2 }
         *
         * wrapped.next();
         * // => { 'done': true, 'value': undefined }
         */
        function wrapperNext() {
            if (this.__values__ === undefined) {
                this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined : this.__values__[this.__index__++];
            return { 'done': done, 'value': value };
        }
        /**
         * Enables the wrapper to be iterable.
         *
         * @name Symbol.iterator
         * @memberOf _
         * @since 4.0.0
         * @category Seq
         * @returns {Object} Returns the wrapper object.
         * @example
         *
         * var wrapped = _([1, 2]);
         *
         * wrapped[Symbol.iterator]() === wrapped;
         * // => true
         *
         * Array.from(wrapped);
         * // => [1, 2]
         */
        function wrapperToIterator() {
            return this;
        }
        /**
         * Creates a clone of the chain sequence planting `value` as the wrapped value.
         *
         * @name plant
         * @memberOf _
         * @since 3.2.0
         * @category Seq
         * @param {*} value The value to plant.
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * function square(n) {
         *   return n * n;
         * }
         *
         * var wrapped = _([1, 2]).map(square);
         * var other = wrapped.plant([3, 4]);
         *
         * other.value();
         * // => [9, 16]
         *
         * wrapped.value();
         * // => [1, 4]
         */
        function wrapperPlant(value) {
            var result, parent = this;
            while (parent instanceof baseLodash) {
                var clone = wrapperClone(parent);
                clone.__index__ = 0;
                clone.__values__ = undefined;
                if (result) {
                    previous.__wrapped__ = clone;
                }
                else {
                    result = clone;
                }
                var previous = clone;
                parent = parent.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result;
        }
        /**
         * This method is the wrapper version of `_.reverse`.
         *
         * **Note:** This method mutates the wrapped array.
         *
         * @name reverse
         * @memberOf _
         * @since 0.1.0
         * @category Seq
         * @returns {Object} Returns the new `lodash` wrapper instance.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _(array).reverse().value()
         * // => [3, 2, 1]
         *
         * console.log(array);
         * // => [3, 2, 1]
         */
        function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
                var wrapped = value;
                if (this.__actions__.length) {
                    wrapped = new LazyWrapper(this);
                }
                wrapped = wrapped.reverse();
                wrapped.__actions__.push({
                    'func': thru,
                    'args': [reverse],
                    'thisArg': undefined
                });
                return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
        }
        /**
         * Executes the chain sequence to resolve the unwrapped value.
         *
         * @name value
         * @memberOf _
         * @since 0.1.0
         * @alias toJSON, valueOf
         * @category Seq
         * @returns {*} Returns the resolved unwrapped value.
         * @example
         *
         * _([1, 2, 3]).value();
         * // => [1, 2, 3]
         */
        function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        /*------------------------------------------------------------------------*/
        /**
         * Creates an object composed of keys generated from the results of running
         * each element of `collection` thru `iteratee`. The corresponding value of
         * each key is the number of times the key was returned by `iteratee`. The
         * iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 0.5.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.countBy([6.1, 4.2, 6.3], Math.floor);
         * // => { '4': 1, '6': 2 }
         *
         * // The `_.property` iteratee shorthand.
         * _.countBy(['one', 'two', 'three'], 'length');
         * // => { '3': 2, '5': 1 }
         */
        var countBy = createAggregator(function (result, value, key) {
            if (hasOwnProperty.call(result, key)) {
                ++result[key];
            }
            else {
                baseAssignValue(result, key, 1);
            }
        });
        /**
         * Checks if `predicate` returns truthy for **all** elements of `collection`.
         * Iteration is stopped once `predicate` returns falsey. The predicate is
         * invoked with three arguments: (value, index|key, collection).
         *
         * **Note:** This method returns `true` for
         * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
         * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
         * elements of empty collections.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {boolean} Returns `true` if all elements pass the predicate check,
         *  else `false`.
         * @example
         *
         * _.every([true, 1, null, 'yes'], Boolean);
         * // => false
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': false },
         *   { 'user': 'fred',   'age': 40, 'active': false }
         * ];
         *
         * // The `_.matches` iteratee shorthand.
         * _.every(users, { 'user': 'barney', 'active': false });
         * // => false
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.every(users, ['active', false]);
         * // => true
         *
         * // The `_.property` iteratee shorthand.
         * _.every(users, 'active');
         * // => false
         */
        function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
                predicate = undefined;
            }
            return func(collection, getIteratee(predicate, 3));
        }
        /**
         * Iterates over elements of `collection`, returning an array of all elements
         * `predicate` returns truthy for. The predicate is invoked with three
         * arguments: (value, index|key, collection).
         *
         * **Note:** Unlike `_.remove`, this method returns a new array.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new filtered array.
         * @see _.reject
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': true },
         *   { 'user': 'fred',   'age': 40, 'active': false }
         * ];
         *
         * _.filter(users, function(o) { return !o.active; });
         * // => objects for ['fred']
         *
         * // The `_.matches` iteratee shorthand.
         * _.filter(users, { 'age': 36, 'active': true });
         * // => objects for ['barney']
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.filter(users, ['active', false]);
         * // => objects for ['fred']
         *
         * // The `_.property` iteratee shorthand.
         * _.filter(users, 'active');
         * // => objects for ['barney']
         */
        function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
        }
        /**
         * Iterates over elements of `collection`, returning the first element
         * `predicate` returns truthy for. The predicate is invoked with three
         * arguments: (value, index|key, collection).
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to inspect.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @param {number} [fromIndex=0] The index to search from.
         * @returns {*} Returns the matched element, else `undefined`.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'age': 36, 'active': true },
         *   { 'user': 'fred',    'age': 40, 'active': false },
         *   { 'user': 'pebbles', 'age': 1,  'active': true }
         * ];
         *
         * _.find(users, function(o) { return o.age < 40; });
         * // => object for 'barney'
         *
         * // The `_.matches` iteratee shorthand.
         * _.find(users, { 'age': 1, 'active': true });
         * // => object for 'pebbles'
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.find(users, ['active', false]);
         * // => object for 'fred'
         *
         * // The `_.property` iteratee shorthand.
         * _.find(users, 'active');
         * // => object for 'barney'
         */
        var find = createFind(findIndex);
        /**
         * This method is like `_.find` except that it iterates over elements of
         * `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to inspect.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @param {number} [fromIndex=collection.length-1] The index to search from.
         * @returns {*} Returns the matched element, else `undefined`.
         * @example
         *
         * _.findLast([1, 2, 3, 4], function(n) {
         *   return n % 2 == 1;
         * });
         * // => 3
         */
        var findLast = createFind(findLastIndex);
        /**
         * Creates a flattened array of values by running each element in `collection`
         * thru `iteratee` and flattening the mapped results. The iteratee is invoked
         * with three arguments: (value, index|key, collection).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [n, n];
         * }
         *
         * _.flatMap([1, 2], duplicate);
         * // => [1, 1, 2, 2]
         */
        function flatMap(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), 1);
        }
        /**
         * This method is like `_.flatMap` except that it recursively flattens the
         * mapped results.
         *
         * @static
         * @memberOf _
         * @since 4.7.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [[[n, n]]];
         * }
         *
         * _.flatMapDeep([1, 2], duplicate);
         * // => [1, 1, 2, 2]
         */
        function flatMapDeep(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), INFINITY);
        }
        /**
         * This method is like `_.flatMap` except that it recursively flattens the
         * mapped results up to `depth` times.
         *
         * @static
         * @memberOf _
         * @since 4.7.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {number} [depth=1] The maximum recursion depth.
         * @returns {Array} Returns the new flattened array.
         * @example
         *
         * function duplicate(n) {
         *   return [[[n, n]]];
         * }
         *
         * _.flatMapDepth([1, 2], duplicate, 2);
         * // => [[1, 1], [2, 2]]
         */
        function flatMapDepth(collection, iteratee, depth) {
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee), depth);
        }
        /**
         * Iterates over elements of `collection` and invokes `iteratee` for each element.
         * The iteratee is invoked with three arguments: (value, index|key, collection).
         * Iteratee functions may exit iteration early by explicitly returning `false`.
         *
         * **Note:** As with other "Collections" methods, objects with a "length"
         * property are iterated like arrays. To avoid this behavior use `_.forIn`
         * or `_.forOwn` for object iteration.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @alias each
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array|Object} Returns `collection`.
         * @see _.forEachRight
         * @example
         *
         * _.forEach([1, 2], function(value) {
         *   console.log(value);
         * });
         * // => Logs `1` then `2`.
         *
         * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
         *   console.log(key);
         * });
         * // => Logs 'a' then 'b' (iteration order is not guaranteed).
         */
        function forEach(collection, iteratee) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
         * This method is like `_.forEach` except that it iterates over elements of
         * `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @alias eachRight
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array|Object} Returns `collection`.
         * @see _.forEach
         * @example
         *
         * _.forEachRight([1, 2], function(value) {
         *   console.log(value);
         * });
         * // => Logs `2` then `1`.
         */
        function forEachRight(collection, iteratee) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
         * Creates an object composed of keys generated from the results of running
         * each element of `collection` thru `iteratee`. The order of grouped values
         * is determined by the order they occur in `collection`. The corresponding
         * value of each key is an array of elements responsible for generating the
         * key. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.groupBy([6.1, 4.2, 6.3], Math.floor);
         * // => { '4': [4.2], '6': [6.1, 6.3] }
         *
         * // The `_.property` iteratee shorthand.
         * _.groupBy(['one', 'two', 'three'], 'length');
         * // => { '3': ['one', 'two'], '5': ['three'] }
         */
        var groupBy = createAggregator(function (result, value, key) {
            if (hasOwnProperty.call(result, key)) {
                result[key].push(value);
            }
            else {
                baseAssignValue(result, key, [value]);
            }
        });
        /**
         * Checks if `value` is in `collection`. If `collection` is a string, it's
         * checked for a substring of `value`, otherwise
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * is used for equality comparisons. If `fromIndex` is negative, it's used as
         * the offset from the end of `collection`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object|string} collection The collection to inspect.
         * @param {*} value The value to search for.
         * @param {number} [fromIndex=0] The index to search from.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
         * @returns {boolean} Returns `true` if `value` is found, else `false`.
         * @example
         *
         * _.includes([1, 2, 3], 1);
         * // => true
         *
         * _.includes([1, 2, 3], 1, 2);
         * // => false
         *
         * _.includes({ 'a': 1, 'b': 2 }, 1);
         * // => true
         *
         * _.includes('abcd', 'bc');
         * // => true
         */
        function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
                fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection)
                ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
                : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
        }
        /**
         * Invokes the method at `path` of each element in `collection`, returning
         * an array of the results of each invoked method. Any additional arguments
         * are provided to each invoked method. If `path` is a function, it's invoked
         * for, and `this` bound to, each element in `collection`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Array|Function|string} path The path of the method to invoke or
         *  the function invoked per iteration.
         * @param {...*} [args] The arguments to invoke each method with.
         * @returns {Array} Returns the array of results.
         * @example
         *
         * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
         * // => [[1, 5, 7], [1, 2, 3]]
         *
         * _.invokeMap([123, 456], String.prototype.split, '');
         * // => [['1', '2', '3'], ['4', '5', '6']]
         */
        var invokeMap = baseRest(function (collection, path, args) {
            var index = -1, isFunc = typeof path == 'function', result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function (value) {
                result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result;
        });
        /**
         * Creates an object composed of keys generated from the results of running
         * each element of `collection` thru `iteratee`. The corresponding value of
         * each key is the last element responsible for generating the key. The
         * iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * var array = [
         *   { 'dir': 'left', 'code': 97 },
         *   { 'dir': 'right', 'code': 100 }
         * ];
         *
         * _.keyBy(array, function(o) {
         *   return String.fromCharCode(o.code);
         * });
         * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
         *
         * _.keyBy(array, 'dir');
         * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
         */
        var keyBy = createAggregator(function (result, value, key) {
            baseAssignValue(result, key, value);
        });
        /**
         * Creates an array of values by running each element in `collection` thru
         * `iteratee`. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * Many lodash methods are guarded to work as iteratees for methods like
         * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
         *
         * The guarded methods are:
         * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
         * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
         * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
         * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         * @example
         *
         * function square(n) {
         *   return n * n;
         * }
         *
         * _.map([4, 8], square);
         * // => [16, 64]
         *
         * _.map({ 'a': 4, 'b': 8 }, square);
         * // => [16, 64] (iteration order is not guaranteed)
         *
         * var users = [
         *   { 'user': 'barney' },
         *   { 'user': 'fred' }
         * ];
         *
         * // The `_.property` iteratee shorthand.
         * _.map(users, 'user');
         * // => ['barney', 'fred']
         */
        function map(collection, iteratee) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee, 3));
        }
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
         *  The iteratees to sort by.
         * @param {string[]} [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
         * @returns {Array} Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 40 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // Sort by `user` in ascending order and by `age` in descending order.
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
         */
        function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
                return [];
            }
            if (!isArray(iteratees)) {
                iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined : orders;
            if (!isArray(orders)) {
                orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
        }
        /**
         * Creates an array of elements split into two groups, the first of which
         * contains elements `predicate` returns truthy for, the second of which
         * contains elements `predicate` returns falsey for. The predicate is
         * invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the array of grouped elements.
         * @example
         *
         * var users = [
         *   { 'user': 'barney',  'age': 36, 'active': false },
         *   { 'user': 'fred',    'age': 40, 'active': true },
         *   { 'user': 'pebbles', 'age': 1,  'active': false }
         * ];
         *
         * _.partition(users, function(o) { return o.active; });
         * // => objects for [['fred'], ['barney', 'pebbles']]
         *
         * // The `_.matches` iteratee shorthand.
         * _.partition(users, { 'age': 1, 'active': false });
         * // => objects for [['pebbles'], ['barney', 'fred']]
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.partition(users, ['active', false]);
         * // => objects for [['barney', 'pebbles'], ['fred']]
         *
         * // The `_.property` iteratee shorthand.
         * _.partition(users, 'active');
         * // => objects for [['fred'], ['barney', 'pebbles']]
         */
        var partition = createAggregator(function (result, value, key) {
            result[key ? 0 : 1].push(value);
        }, function () { return [[], []]; });
        /**
         * Reduces `collection` to a value which is the accumulated result of running
         * each element in `collection` thru `iteratee`, where each successive
         * invocation is supplied the return value of the previous. If `accumulator`
         * is not given, the first element of `collection` is used as the initial
         * value. The iteratee is invoked with four arguments:
         * (accumulator, value, index|key, collection).
         *
         * Many lodash methods are guarded to work as iteratees for methods like
         * `_.reduce`, `_.reduceRight`, and `_.transform`.
         *
         * The guarded methods are:
         * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
         * and `sortBy`
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [accumulator] The initial value.
         * @returns {*} Returns the accumulated value.
         * @see _.reduceRight
         * @example
         *
         * _.reduce([1, 2], function(sum, n) {
         *   return sum + n;
         * }, 0);
         * // => 3
         *
         * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
         *   (result[value] || (result[value] = [])).push(key);
         *   return result;
         * }, {});
         * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
         */
        function reduce(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
        }
        /**
         * This method is like `_.reduce` except that it iterates over elements of
         * `collection` from right to left.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [accumulator] The initial value.
         * @returns {*} Returns the accumulated value.
         * @see _.reduce
         * @example
         *
         * var array = [[0, 1], [2, 3], [4, 5]];
         *
         * _.reduceRight(array, function(flattened, other) {
         *   return flattened.concat(other);
         * }, []);
         * // => [4, 5, 2, 3, 0, 1]
         */
        function reduceRight(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
        }
        /**
         * The opposite of `_.filter`; this method returns the elements of `collection`
         * that `predicate` does **not** return truthy for.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the new filtered array.
         * @see _.filter
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': false },
         *   { 'user': 'fred',   'age': 40, 'active': true }
         * ];
         *
         * _.reject(users, function(o) { return !o.active; });
         * // => objects for ['fred']
         *
         * // The `_.matches` iteratee shorthand.
         * _.reject(users, { 'age': 40, 'active': true });
         * // => objects for ['barney']
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.reject(users, ['active', false]);
         * // => objects for ['fred']
         *
         * // The `_.property` iteratee shorthand.
         * _.reject(users, 'active');
         * // => objects for ['barney']
         */
        function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
        }
        /**
         * Gets a random element from `collection`.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to sample.
         * @returns {*} Returns the random element.
         * @example
         *
         * _.sample([1, 2, 3, 4]);
         * // => 2
         */
        function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
        }
        /**
         * Gets `n` random elements at unique keys from `collection` up to the
         * size of `collection`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Collection
         * @param {Array|Object} collection The collection to sample.
         * @param {number} [n=1] The number of elements to sample.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Array} Returns the random elements.
         * @example
         *
         * _.sampleSize([1, 2, 3], 2);
         * // => [3, 1]
         *
         * _.sampleSize([1, 2, 3], 4);
         * // => [2, 3, 1]
         */
        function sampleSize(collection, n, guard) {
            if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
                n = 1;
            }
            else {
                n = toInteger(n);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
        }
        /**
         * Creates an array of shuffled values, using a version of the
         * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to shuffle.
         * @returns {Array} Returns the new shuffled array.
         * @example
         *
         * _.shuffle([1, 2, 3, 4]);
         * // => [4, 1, 3, 2]
         */
        function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
        }
        /**
         * Gets the size of `collection` by returning its length for array-like
         * values or the number of own enumerable string keyed properties for objects.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object|string} collection The collection to inspect.
         * @returns {number} Returns the collection size.
         * @example
         *
         * _.size([1, 2, 3]);
         * // => 3
         *
         * _.size({ 'a': 1, 'b': 2 });
         * // => 2
         *
         * _.size('pebbles');
         * // => 7
         */
        function size(collection) {
            if (collection == null) {
                return 0;
            }
            if (isArrayLike(collection)) {
                return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
                return collection.size;
            }
            return baseKeys(collection).length;
        }
        /**
         * Checks if `predicate` returns truthy for **any** element of `collection`.
         * Iteration is stopped once `predicate` returns truthy. The predicate is
         * invoked with three arguments: (value, index|key, collection).
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {boolean} Returns `true` if any element passes the predicate check,
         *  else `false`.
         * @example
         *
         * _.some([null, 0, 'yes', false], Boolean);
         * // => true
         *
         * var users = [
         *   { 'user': 'barney', 'active': true },
         *   { 'user': 'fred',   'active': false }
         * ];
         *
         * // The `_.matches` iteratee shorthand.
         * _.some(users, { 'user': 'barney', 'active': false });
         * // => false
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.some(users, ['active', false]);
         * // => true
         *
         * // The `_.property` iteratee shorthand.
         * _.some(users, 'active');
         * // => true
         */
        function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
                predicate = undefined;
            }
            return func(collection, getIteratee(predicate, 3));
        }
        /**
         * Creates an array of elements, sorted in ascending order by the results of
         * running each element in a collection thru each iteratee. This method
         * performs a stable sort, that is, it preserves the original sort order of
         * equal elements. The iteratees are invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {...(Function|Function[])} [iteratees=[_.identity]]
         *  The iteratees to sort by.
         * @returns {Array} Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 36 },
         *   { 'user': 'fred',   'age': 40 },
         *   { 'user': 'barney', 'age': 34 }
         * ];
         *
         * _.sortBy(users, [function(o) { return o.user; }]);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
         *
         * _.sortBy(users, ['user', 'age']);
         * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
         */
        var sortBy = baseRest(function (collection, iteratees) {
            if (collection == null) {
                return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
                iteratees = [];
            }
            else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
                iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        /*------------------------------------------------------------------------*/
        /**
         * Gets the timestamp of the number of milliseconds that have elapsed since
         * the Unix epoch (1 January 1970 00:00:00 UTC).
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Date
         * @returns {number} Returns the timestamp.
         * @example
         *
         * _.defer(function(stamp) {
         *   console.log(_.now() - stamp);
         * }, _.now());
         * // => Logs the number of milliseconds it took for the deferred invocation.
         */
        var now = ctxNow || function () {
            return root.Date.now();
        };
        /*------------------------------------------------------------------------*/
        /**
         * The opposite of `_.before`; this method creates a function that invokes
         * `func` once it's called `n` or more times.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {number} n The number of calls before `func` is invoked.
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * var saves = ['profile', 'settings'];
         *
         * var done = _.after(saves.length, function() {
         *   console.log('done saving!');
         * });
         *
         * _.forEach(saves, function(type) {
         *   asyncSave({ 'type': type, 'complete': done });
         * });
         * // => Logs 'done saving!' after the two async saves have completed.
         */
        function after(n, func) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function () {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        }
        /**
         * Creates a function that invokes `func`, with up to `n` arguments,
         * ignoring any additional arguments.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Function
         * @param {Function} func The function to cap arguments for.
         * @param {number} [n=func.length] The arity cap.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Function} Returns the new capped function.
         * @example
         *
         * _.map(['6', '8', '10'], _.ary(parseInt, 1));
         * // => [6, 8, 10]
         */
        function ary(func, n, guard) {
            n = guard ? undefined : n;
            n = (func && n == null) ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
        }
        /**
         * Creates a function that invokes `func`, with the `this` binding and arguments
         * of the created function, while it's called less than `n` times. Subsequent
         * calls to the created function return the result of the last `func` invocation.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Function
         * @param {number} n The number of calls at which `func` is no longer invoked.
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * jQuery(element).on('click', _.before(5, addContactToList));
         * // => Allows adding up to 4 contacts to the list.
         */
        function before(n, func) {
            var result;
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function () {
                if (--n > 0) {
                    result = func.apply(this, arguments);
                }
                if (n <= 1) {
                    func = undefined;
                }
                return result;
            };
        }
        /**
         * Creates a function that invokes `func` with the `this` binding of `thisArg`
         * and `partials` prepended to the arguments it receives.
         *
         * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
         * may be used as a placeholder for partially applied arguments.
         *
         * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
         * property of bound functions.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to bind.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {...*} [partials] The arguments to be partially applied.
         * @returns {Function} Returns the new bound function.
         * @example
         *
         * function greet(greeting, punctuation) {
         *   return greeting + ' ' + this.user + punctuation;
         * }
         *
         * var object = { 'user': 'fred' };
         *
         * var bound = _.bind(greet, object, 'hi');
         * bound('!');
         * // => 'hi fred!'
         *
         * // Bound with placeholders.
         * var bound = _.bind(greet, object, _, '!');
         * bound('hi');
         * // => 'hi fred!'
         */
        var bind = baseRest(function (func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bind));
                bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
        });
        /**
         * Creates a function that invokes the method at `object[key]` with `partials`
         * prepended to the arguments it receives.
         *
         * This method differs from `_.bind` by allowing bound functions to reference
         * methods that may be redefined or don't yet exist. See
         * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
         * for more details.
         *
         * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
         * builds, may be used as a placeholder for partially applied arguments.
         *
         * @static
         * @memberOf _
         * @since 0.10.0
         * @category Function
         * @param {Object} object The object to invoke the method on.
         * @param {string} key The key of the method.
         * @param {...*} [partials] The arguments to be partially applied.
         * @returns {Function} Returns the new bound function.
         * @example
         *
         * var object = {
         *   'user': 'fred',
         *   'greet': function(greeting, punctuation) {
         *     return greeting + ' ' + this.user + punctuation;
         *   }
         * };
         *
         * var bound = _.bindKey(object, 'greet', 'hi');
         * bound('!');
         * // => 'hi fred!'
         *
         * object.greet = function(greeting, punctuation) {
         *   return greeting + 'ya ' + this.user + punctuation;
         * };
         *
         * bound('!');
         * // => 'hiya fred!'
         *
         * // Bound with placeholders.
         * var bound = _.bindKey(object, 'greet', _, '!');
         * bound('hi');
         * // => 'hiya fred!'
         */
        var bindKey = baseRest(function (object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bindKey));
                bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
        });
        /**
         * Creates a function that accepts arguments of `func` and either invokes
         * `func` returning its result, if at least `arity` number of arguments have
         * been provided, or returns a function that accepts the remaining `func`
         * arguments, and so on. The arity of `func` may be specified if `func.length`
         * is not sufficient.
         *
         * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
         * may be used as a placeholder for provided arguments.
         *
         * **Note:** This method doesn't set the "length" property of curried functions.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Function
         * @param {Function} func The function to curry.
         * @param {number} [arity=func.length] The arity of `func`.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Function} Returns the new curried function.
         * @example
         *
         * var abc = function(a, b, c) {
         *   return [a, b, c];
         * };
         *
         * var curried = _.curry(abc);
         *
         * curried(1)(2)(3);
         * // => [1, 2, 3]
         *
         * curried(1, 2)(3);
         * // => [1, 2, 3]
         *
         * curried(1, 2, 3);
         * // => [1, 2, 3]
         *
         * // Curried with placeholders.
         * curried(1)(_, 3)(2);
         * // => [1, 2, 3]
         */
        function curry(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curry.placeholder;
            return result;
        }
        /**
         * This method is like `_.curry` except that arguments are applied to `func`
         * in the manner of `_.partialRight` instead of `_.partial`.
         *
         * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
         * builds, may be used as a placeholder for provided arguments.
         *
         * **Note:** This method doesn't set the "length" property of curried functions.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Function
         * @param {Function} func The function to curry.
         * @param {number} [arity=func.length] The arity of `func`.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Function} Returns the new curried function.
         * @example
         *
         * var abc = function(a, b, c) {
         *   return [a, b, c];
         * };
         *
         * var curried = _.curryRight(abc);
         *
         * curried(3)(2)(1);
         * // => [1, 2, 3]
         *
         * curried(2, 3)(1);
         * // => [1, 2, 3]
         *
         * curried(1, 2, 3);
         * // => [1, 2, 3]
         *
         * // Curried with placeholders.
         * curried(3)(1, _)(2);
         * // => [1, 2, 3]
         */
        function curryRight(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curryRight.placeholder;
            return result;
        }
        /**
         * Creates a debounced function that delays invoking `func` until after `wait`
         * milliseconds have elapsed since the last time the debounced function was
         * invoked. The debounced function comes with a `cancel` method to cancel
         * delayed `func` invocations and a `flush` method to immediately invoke them.
         * Provide `options` to indicate whether `func` should be invoked on the
         * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
         * with the last arguments provided to the debounced function. Subsequent
         * calls to the debounced function return the result of the last `func`
         * invocation.
         *
         * **Note:** If `leading` and `trailing` options are `true`, `func` is
         * invoked on the trailing edge of the timeout only if the debounced function
         * is invoked more than once during the `wait` timeout.
         *
         * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
         * until to the next tick, similar to `setTimeout` with a timeout of `0`.
         *
         * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
         * for details over the differences between `_.debounce` and `_.throttle`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to debounce.
         * @param {number} [wait=0] The number of milliseconds to delay.
         * @param {Object} [options={}] The options object.
         * @param {boolean} [options.leading=false]
         *  Specify invoking on the leading edge of the timeout.
         * @param {number} [options.maxWait]
         *  The maximum time `func` is allowed to be delayed before it's invoked.
         * @param {boolean} [options.trailing=true]
         *  Specify invoking on the trailing edge of the timeout.
         * @returns {Function} Returns the new debounced function.
         * @example
         *
         * // Avoid costly calculations while the window size is in flux.
         * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
         *
         * // Invoke `sendMail` when clicked, debouncing subsequent calls.
         * jQuery(element).on('click', _.debounce(sendMail, 300, {
         *   'leading': true,
         *   'trailing': false
         * }));
         *
         * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
         * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
         * var source = new EventSource('/stream');
         * jQuery(source).on('message', debounced);
         *
         * // Cancel the trailing debounced invocation.
         * jQuery(window).on('popstate', debounced.cancel);
         */
        function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
                leading = !!options.leading;
                maxing = 'maxWait' in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
                var args = lastArgs, thisArg = lastThis;
                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result;
            }
            function leadingEdge(time) {
                // Reset any `maxWait` timer.
                lastInvokeTime = time;
                // Start the timer for the trailing edge.
                timerId = setTimeout(timerExpired, wait);
                // Invoke the leading edge.
                return leading ? invokeFunc(time) : result;
            }
            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
            }
            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                // Either this is the first call, activity has stopped and we're at the
                // trailing edge, the system time has gone backwards and we're treating
                // it as the trailing edge, or we've hit the `maxWait` limit.
                return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
                    (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
            }
            function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) {
                    return trailingEdge(time);
                }
                // Restart the timer.
                timerId = setTimeout(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
                timerId = undefined;
                // Only invoke if we have `lastArgs` which means `func` has been
                // debounced at least once.
                if (trailing && lastArgs) {
                    return invokeFunc(time);
                }
                lastArgs = lastThis = undefined;
                return result;
            }
            function cancel() {
                if (timerId !== undefined) {
                    clearTimeout(timerId);
                }
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined;
            }
            function flush() {
                return timerId === undefined ? result : trailingEdge(now());
            }
            function debounced() {
                var time = now(), isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                    if (timerId === undefined) {
                        return leadingEdge(lastCallTime);
                    }
                    if (maxing) {
                        // Handle invocations in a tight loop.
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime);
                    }
                }
                if (timerId === undefined) {
                    timerId = setTimeout(timerExpired, wait);
                }
                return result;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
        }
        /**
         * Defers invoking the `func` until the current call stack has cleared. Any
         * additional arguments are provided to `func` when it's invoked.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to defer.
         * @param {...*} [args] The arguments to invoke `func` with.
         * @returns {number} Returns the timer id.
         * @example
         *
         * _.defer(function(text) {
         *   console.log(text);
         * }, 'deferred');
         * // => Logs 'deferred' after one millisecond.
         */
        var defer = baseRest(function (func, args) {
            return baseDelay(func, 1, args);
        });
        /**
         * Invokes `func` after `wait` milliseconds. Any additional arguments are
         * provided to `func` when it's invoked.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to delay.
         * @param {number} wait The number of milliseconds to delay invocation.
         * @param {...*} [args] The arguments to invoke `func` with.
         * @returns {number} Returns the timer id.
         * @example
         *
         * _.delay(function(text) {
         *   console.log(text);
         * }, 1000, 'later');
         * // => Logs 'later' after one second.
         */
        var delay = baseRest(function (func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
        });
        /**
         * Creates a function that invokes `func` with arguments reversed.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Function
         * @param {Function} func The function to flip arguments for.
         * @returns {Function} Returns the new flipped function.
         * @example
         *
         * var flipped = _.flip(function() {
         *   return _.toArray(arguments);
         * });
         *
         * flipped('a', 'b', 'c', 'd');
         * // => ['d', 'c', 'b', 'a']
         */
        function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
        }
        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided, it determines the cache key for storing the result based on the
         * arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is used as the map cache key. The `func`
         * is invoked with the `this` binding of the memoized function.
         *
         * **Note:** The cache is exposed as the `cache` property on the memoized
         * function. Its creation may be customized by replacing the `_.memoize.Cache`
         * constructor with one whose instances implement the
         * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
         * method interface of `clear`, `delete`, `get`, `has`, and `set`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] The function to resolve the cache key.
         * @returns {Function} Returns the new memoized function.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         * var other = { 'c': 3, 'd': 4 };
         *
         * var values = _.memoize(_.values);
         * values(object);
         * // => [1, 2]
         *
         * values(other);
         * // => [3, 4]
         *
         * object.a = 2;
         * values(object);
         * // => [1, 2]
         *
         * // Modify the result cache.
         * values.cache.set(object, ['a', 'b']);
         * values(object);
         * // => ['a', 'b']
         *
         * // Replace `_.memoize.Cache`.
         * _.memoize.Cache = WeakMap;
         */
        function memoize(func, resolver) {
            if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function () {
                var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                if (cache.has(key)) {
                    return cache.get(key);
                }
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result) || cache;
                return result;
            };
            memoized.cache = new (memoize.Cache || MapCache);
            return memoized;
        }
        // Expose `MapCache`.
        memoize.Cache = MapCache;
        /**
         * Creates a function that negates the result of the predicate `func`. The
         * `func` predicate is invoked with the `this` binding and arguments of the
         * created function.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Function
         * @param {Function} predicate The predicate to negate.
         * @returns {Function} Returns the new negated function.
         * @example
         *
         * function isEven(n) {
         *   return n % 2 == 0;
         * }
         *
         * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
         * // => [1, 3, 5]
         */
        function negate(predicate) {
            if (typeof predicate != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return function () {
                var args = arguments;
                switch (args.length) {
                    case 0: return !predicate.call(this);
                    case 1: return !predicate.call(this, args[0]);
                    case 2: return !predicate.call(this, args[0], args[1]);
                    case 3: return !predicate.call(this, args[0], args[1], args[2]);
                }
                return !predicate.apply(this, args);
            };
        }
        /**
         * Creates a function that is restricted to invoking `func` once. Repeat calls
         * to the function return the value of the first invocation. The `func` is
         * invoked with the `this` binding and arguments of the created function.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new restricted function.
         * @example
         *
         * var initialize = _.once(createApplication);
         * initialize();
         * initialize();
         * // => `createApplication` is invoked once
         */
        function once(func) {
            return before(2, func);
        }
        /**
         * Creates a function that invokes `func` with its arguments transformed.
         *
         * @static
         * @since 4.0.0
         * @memberOf _
         * @category Function
         * @param {Function} func The function to wrap.
         * @param {...(Function|Function[])} [transforms=[_.identity]]
         *  The argument transforms.
         * @returns {Function} Returns the new function.
         * @example
         *
         * function doubled(n) {
         *   return n * 2;
         * }
         *
         * function square(n) {
         *   return n * n;
         * }
         *
         * var func = _.overArgs(function(x, y) {
         *   return [x, y];
         * }, [square, doubled]);
         *
         * func(9, 3);
         * // => [81, 6]
         *
         * func(10, 5);
         * // => [100, 10]
         */
        var overArgs = castRest(function (func, transforms) {
            transforms = (transforms.length == 1 && isArray(transforms[0]))
                ? arrayMap(transforms[0], baseUnary(getIteratee()))
                : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function (args) {
                var index = -1, length = nativeMin(args.length, funcsLength);
                while (++index < length) {
                    args[index] = transforms[index].call(this, args[index]);
                }
                return apply(func, this, args);
            });
        });
        /**
         * Creates a function that invokes `func` with `partials` prepended to the
         * arguments it receives. This method is like `_.bind` except it does **not**
         * alter the `this` binding.
         *
         * The `_.partial.placeholder` value, which defaults to `_` in monolithic
         * builds, may be used as a placeholder for partially applied arguments.
         *
         * **Note:** This method doesn't set the "length" property of partially
         * applied functions.
         *
         * @static
         * @memberOf _
         * @since 0.2.0
         * @category Function
         * @param {Function} func The function to partially apply arguments to.
         * @param {...*} [partials] The arguments to be partially applied.
         * @returns {Function} Returns the new partially applied function.
         * @example
         *
         * function greet(greeting, name) {
         *   return greeting + ' ' + name;
         * }
         *
         * var sayHelloTo = _.partial(greet, 'hello');
         * sayHelloTo('fred');
         * // => 'hello fred'
         *
         * // Partially applied with placeholders.
         * var greetFred = _.partial(greet, _, 'fred');
         * greetFred('hi');
         * // => 'hi fred'
         */
        var partial = baseRest(function (func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
        });
        /**
         * This method is like `_.partial` except that partially applied arguments
         * are appended to the arguments it receives.
         *
         * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
         * builds, may be used as a placeholder for partially applied arguments.
         *
         * **Note:** This method doesn't set the "length" property of partially
         * applied functions.
         *
         * @static
         * @memberOf _
         * @since 1.0.0
         * @category Function
         * @param {Function} func The function to partially apply arguments to.
         * @param {...*} [partials] The arguments to be partially applied.
         * @returns {Function} Returns the new partially applied function.
         * @example
         *
         * function greet(greeting, name) {
         *   return greeting + ' ' + name;
         * }
         *
         * var greetFred = _.partialRight(greet, 'fred');
         * greetFred('hi');
         * // => 'hi fred'
         *
         * // Partially applied with placeholders.
         * var sayHelloTo = _.partialRight(greet, 'hello', _);
         * sayHelloTo('fred');
         * // => 'hello fred'
         */
        var partialRight = baseRest(function (func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
        });
        /**
         * Creates a function that invokes `func` with arguments arranged according
         * to the specified `indexes` where the argument value at the first index is
         * provided as the first argument, the argument value at the second index is
         * provided as the second argument, and so on.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Function
         * @param {Function} func The function to rearrange arguments for.
         * @param {...(number|number[])} indexes The arranged argument indexes.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var rearged = _.rearg(function(a, b, c) {
         *   return [a, b, c];
         * }, [2, 0, 1]);
         *
         * rearged('b', 'c', 'a')
         * // => ['a', 'b', 'c']
         */
        var rearg = flatRest(function (func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
        });
        /**
         * Creates a function that invokes `func` with the `this` binding of the
         * created function and arguments from `start` and beyond provided as
         * an array.
         *
         * **Note:** This method is based on the
         * [rest parameter](https://mdn.io/rest_parameters).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Function
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var say = _.rest(function(what, names) {
         *   return what + ' ' + _.initial(names).join(', ') +
         *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
         * });
         *
         * say('hello', 'fred', 'barney', 'pebbles');
         * // => 'hello fred, barney, & pebbles'
         */
        function rest(func, start) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = start === undefined ? start : toInteger(start);
            return baseRest(func, start);
        }
        /**
         * Creates a function that invokes `func` with the `this` binding of the
         * create function and an array of arguments much like
         * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
         *
         * **Note:** This method is based on the
         * [spread operator](https://mdn.io/spread_operator).
         *
         * @static
         * @memberOf _
         * @since 3.2.0
         * @category Function
         * @param {Function} func The function to spread arguments over.
         * @param {number} [start=0] The start position of the spread.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var say = _.spread(function(who, what) {
         *   return who + ' says ' + what;
         * });
         *
         * say(['fred', 'hello']);
         * // => 'fred says hello'
         *
         * var numbers = Promise.all([
         *   Promise.resolve(40),
         *   Promise.resolve(36)
         * ]);
         *
         * numbers.then(_.spread(function(x, y) {
         *   return x + y;
         * }));
         * // => a Promise of 76
         */
        function spread(func, start) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function (args) {
                var array = args[start], otherArgs = castSlice(args, 0, start);
                if (array) {
                    arrayPush(otherArgs, array);
                }
                return apply(func, this, otherArgs);
            });
        }
        /**
         * Creates a throttled function that only invokes `func` at most once per
         * every `wait` milliseconds. The throttled function comes with a `cancel`
         * method to cancel delayed `func` invocations and a `flush` method to
         * immediately invoke them. Provide `options` to indicate whether `func`
         * should be invoked on the leading and/or trailing edge of the `wait`
         * timeout. The `func` is invoked with the last arguments provided to the
         * throttled function. Subsequent calls to the throttled function return the
         * result of the last `func` invocation.
         *
         * **Note:** If `leading` and `trailing` options are `true`, `func` is
         * invoked on the trailing edge of the timeout only if the throttled function
         * is invoked more than once during the `wait` timeout.
         *
         * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
         * until to the next tick, similar to `setTimeout` with a timeout of `0`.
         *
         * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
         * for details over the differences between `_.throttle` and `_.debounce`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to throttle.
         * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
         * @param {Object} [options={}] The options object.
         * @param {boolean} [options.leading=true]
         *  Specify invoking on the leading edge of the timeout.
         * @param {boolean} [options.trailing=true]
         *  Specify invoking on the trailing edge of the timeout.
         * @returns {Function} Returns the new throttled function.
         * @example
         *
         * // Avoid excessively updating the position while scrolling.
         * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
         *
         * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
         * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
         * jQuery(element).on('click', throttled);
         *
         * // Cancel the trailing throttled invocation.
         * jQuery(window).on('popstate', throttled.cancel);
         */
        function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
                leading = 'leading' in options ? !!options.leading : leading;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
                'leading': leading,
                'maxWait': wait,
                'trailing': trailing
            });
        }
        /**
         * Creates a function that accepts up to one argument, ignoring any
         * additional arguments.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Function
         * @param {Function} func The function to cap arguments for.
         * @returns {Function} Returns the new capped function.
         * @example
         *
         * _.map(['6', '8', '10'], _.unary(parseInt));
         * // => [6, 8, 10]
         */
        function unary(func) {
            return ary(func, 1);
        }
        /**
         * Creates a function that provides `value` to `wrapper` as its first
         * argument. Any additional arguments provided to the function are appended
         * to those provided to the `wrapper`. The wrapper is invoked with the `this`
         * binding of the created function.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {*} value The value to wrap.
         * @param {Function} [wrapper=identity] The wrapper function.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var p = _.wrap(_.escape, function(func, text) {
         *   return '<p>' + func(text) + '</p>';
         * });
         *
         * p('fred, barney, & pebbles');
         * // => '<p>fred, barney, &amp; pebbles</p>'
         */
        function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
        }
        /*------------------------------------------------------------------------*/
        /**
         * Casts `value` as an array if it's not one.
         *
         * @static
         * @memberOf _
         * @since 4.4.0
         * @category Lang
         * @param {*} value The value to inspect.
         * @returns {Array} Returns the cast array.
         * @example
         *
         * _.castArray(1);
         * // => [1]
         *
         * _.castArray({ 'a': 1 });
         * // => [{ 'a': 1 }]
         *
         * _.castArray('abc');
         * // => ['abc']
         *
         * _.castArray(null);
         * // => [null]
         *
         * _.castArray(undefined);
         * // => [undefined]
         *
         * _.castArray();
         * // => []
         *
         * var array = [1, 2, 3];
         * console.log(_.castArray(array) === array);
         * // => true
         */
        function castArray() {
            if (!arguments.length) {
                return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
        }
        /**
         * Creates a shallow clone of `value`.
         *
         * **Note:** This method is loosely based on the
         * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
         * and supports cloning arrays, array buffers, booleans, date objects, maps,
         * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
         * arrays. The own enumerable properties of `arguments` objects are cloned
         * as plain objects. An empty object is returned for uncloneable values such
         * as error objects, functions, DOM nodes, and WeakMaps.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to clone.
         * @returns {*} Returns the cloned value.
         * @see _.cloneDeep
         * @example
         *
         * var objects = [{ 'a': 1 }, { 'b': 2 }];
         *
         * var shallow = _.clone(objects);
         * console.log(shallow[0] === objects[0]);
         * // => true
         */
        function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        /**
         * This method is like `_.clone` except that it accepts `customizer` which
         * is invoked to produce the cloned value. If `customizer` returns `undefined`,
         * cloning is handled by the method instead. The `customizer` is invoked with
         * up to four arguments; (value [, index|key, object, stack]).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to clone.
         * @param {Function} [customizer] The function to customize cloning.
         * @returns {*} Returns the cloned value.
         * @see _.cloneDeepWith
         * @example
         *
         * function customizer(value) {
         *   if (_.isElement(value)) {
         *     return value.cloneNode(false);
         *   }
         * }
         *
         * var el = _.cloneWith(document.body, customizer);
         *
         * console.log(el === document.body);
         * // => false
         * console.log(el.nodeName);
         * // => 'BODY'
         * console.log(el.childNodes.length);
         * // => 0
         */
        function cloneWith(value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        /**
         * This method is like `_.clone` except that it recursively clones `value`.
         *
         * @static
         * @memberOf _
         * @since 1.0.0
         * @category Lang
         * @param {*} value The value to recursively clone.
         * @returns {*} Returns the deep cloned value.
         * @see _.clone
         * @example
         *
         * var objects = [{ 'a': 1 }, { 'b': 2 }];
         *
         * var deep = _.cloneDeep(objects);
         * console.log(deep[0] === objects[0]);
         * // => false
         */
        function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        /**
         * This method is like `_.cloneWith` except that it recursively clones `value`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to recursively clone.
         * @param {Function} [customizer] The function to customize cloning.
         * @returns {*} Returns the deep cloned value.
         * @see _.cloneWith
         * @example
         *
         * function customizer(value) {
         *   if (_.isElement(value)) {
         *     return value.cloneNode(true);
         *   }
         * }
         *
         * var el = _.cloneDeepWith(document.body, customizer);
         *
         * console.log(el === document.body);
         * // => false
         * console.log(el.nodeName);
         * // => 'BODY'
         * console.log(el.childNodes.length);
         * // => 20
         */
        function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        /**
         * Checks if `object` conforms to `source` by invoking the predicate
         * properties of `source` with the corresponding property values of `object`.
         *
         * **Note:** This method is equivalent to `_.conforms` when `source` is
         * partially applied.
         *
         * @static
         * @memberOf _
         * @since 4.14.0
         * @category Lang
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property predicates to conform to.
         * @returns {boolean} Returns `true` if `object` conforms, else `false`.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         *
         * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
         * // => true
         *
         * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
         * // => false
         */
        function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
        }
        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
            return value === other || (value !== value && other !== other);
        }
        /**
         * Checks if `value` is greater than `other`.
         *
         * @static
         * @memberOf _
         * @since 3.9.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is greater than `other`,
         *  else `false`.
         * @see _.lt
         * @example
         *
         * _.gt(3, 1);
         * // => true
         *
         * _.gt(3, 3);
         * // => false
         *
         * _.gt(1, 3);
         * // => false
         */
        var gt = createRelationalOperation(baseGt);
        /**
         * Checks if `value` is greater than or equal to `other`.
         *
         * @static
         * @memberOf _
         * @since 3.9.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is greater than or equal to
         *  `other`, else `false`.
         * @see _.lte
         * @example
         *
         * _.gte(3, 1);
         * // => true
         *
         * _.gte(3, 3);
         * // => true
         *
         * _.gte(1, 3);
         * // => false
         */
        var gte = createRelationalOperation(function (value, other) {
            return value >= other;
        });
        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        var isArguments = baseIsArguments(function () { return arguments; }()) ? baseIsArguments : function (value) {
            return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
                !propertyIsEnumerable.call(value, 'callee');
        };
        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var isArray = Array.isArray;
        /**
         * Checks if `value` is classified as an `ArrayBuffer` object.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
         * @example
         *
         * _.isArrayBuffer(new ArrayBuffer(2));
         * // => true
         *
         * _.isArrayBuffer(new Array(2));
         * // => false
         */
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
        }
        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
        }
        /**
         * Checks if `value` is classified as a boolean primitive or object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
         * @example
         *
         * _.isBoolean(false);
         * // => true
         *
         * _.isBoolean(null);
         * // => false
         */
        function isBoolean(value) {
            return value === true || value === false ||
                (isObjectLike(value) && baseGetTag(value) == boolTag);
        }
        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */
        var isBuffer = nativeIsBuffer || stubFalse;
        /**
         * Checks if `value` is classified as a `Date` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
         * @example
         *
         * _.isDate(new Date);
         * // => true
         *
         * _.isDate('Mon April 23 2012');
         * // => false
         */
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        /**
         * Checks if `value` is likely a DOM element.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
         * @example
         *
         * _.isElement(document.body);
         * // => true
         *
         * _.isElement('<body>');
         * // => false
         */
        function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        /**
         * Checks if `value` is an empty object, collection, map, or set.
         *
         * Objects are considered empty if they have no own enumerable string keyed
         * properties.
         *
         * Array-like values such as `arguments` objects, arrays, buffers, strings, or
         * jQuery-like collections are considered empty if they have a `length` of `0`.
         * Similarly, maps and sets are considered empty if they have a `size` of `0`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is empty, else `false`.
         * @example
         *
         * _.isEmpty(null);
         * // => true
         *
         * _.isEmpty(true);
         * // => true
         *
         * _.isEmpty(1);
         * // => true
         *
         * _.isEmpty([1, 2, 3]);
         * // => false
         *
         * _.isEmpty({ 'a': 1 });
         * // => false
         */
        function isEmpty(value) {
            if (value == null) {
                return true;
            }
            if (isArrayLike(value) &&
                (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
                    isBuffer(value) || isTypedArray(value) || isArguments(value))) {
                return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
                return !value.size;
            }
            if (isPrototype(value)) {
                return !baseKeys(value).length;
            }
            for (var key in value) {
                if (hasOwnProperty.call(value, key)) {
                    return false;
                }
            }
            return true;
        }
        /**
         * Performs a deep comparison between two values to determine if they are
         * equivalent.
         *
         * **Note:** This method supports comparing arrays, array buffers, booleans,
         * date objects, error objects, maps, numbers, `Object` objects, regexes,
         * sets, strings, symbols, and typed arrays. `Object` objects are compared
         * by their own, not inherited, enumerable properties. Functions and DOM
         * nodes are **not** supported.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.isEqual(object, other);
         * // => true
         *
         * object === other;
         * // => false
         */
        function isEqual(value, other) {
            return baseIsEqual(value, other);
        }
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined`, comparisons
         * are handled by the method instead. The `customizer` is invoked with up to
         * six arguments: (objValue, othValue [, index|key, object, other, stack]).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         *     return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            var result = customizer ? customizer(value, other) : undefined;
            return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
        }
        /**
         * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
         * `SyntaxError`, `TypeError`, or `URIError` object.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
         * @example
         *
         * _.isError(new Error);
         * // => true
         *
         * _.isError(Error);
         * // => false
         */
        function isError(value) {
            if (!isObjectLike(value)) {
                return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag ||
                (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
        }
        /**
         * Checks if `value` is a finite primitive number.
         *
         * **Note:** This method is based on
         * [`Number.isFinite`](https://mdn.io/Number/isFinite).
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
         * @example
         *
         * _.isFinite(3);
         * // => true
         *
         * _.isFinite(Number.MIN_VALUE);
         * // => true
         *
         * _.isFinite(Infinity);
         * // => false
         *
         * _.isFinite('3');
         * // => false
         */
        function isFinite(value) {
            return typeof value == 'number' && nativeIsFinite(value);
        }
        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
            if (!isObject(value)) {
                return false;
            }
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 9 which returns 'object' for typed arrays and other constructors.
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        /**
         * Checks if `value` is an integer.
         *
         * **Note:** This method is based on
         * [`Number.isInteger`](https://mdn.io/Number/isInteger).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
         * @example
         *
         * _.isInteger(3);
         * // => true
         *
         * _.isInteger(Number.MIN_VALUE);
         * // => false
         *
         * _.isInteger(Infinity);
         * // => false
         *
         * _.isInteger('3');
         * // => false
         */
        function isInteger(value) {
            return typeof value == 'number' && value == toInteger(value);
        }
        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
            return typeof value == 'number' &&
                value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
            var type = typeof value;
            return value != null && (type == 'object' || type == 'function');
        }
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
            return value != null && typeof value == 'object';
        }
        /**
         * Checks if `value` is classified as a `Map` object.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a map, else `false`.
         * @example
         *
         * _.isMap(new Map);
         * // => true
         *
         * _.isMap(new WeakMap);
         * // => false
         */
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        /**
         * Performs a partial deep comparison between `object` and `source` to
         * determine if `object` contains equivalent property values.
         *
         * **Note:** This method is equivalent to `_.matches` when `source` is
         * partially applied.
         *
         * Partial comparisons will match empty array and empty object `source`
         * values against any array or object value, respectively. See `_.isEqual`
         * for a list of supported value comparisons.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         *
         * _.isMatch(object, { 'b': 2 });
         * // => true
         *
         * _.isMatch(object, { 'b': 1 });
         * // => false
         */
        function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined`, comparisons
         * are handled by the method instead. The `customizer` is invoked with five
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         *     return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        /**
         * Checks if `value` is `NaN`.
         *
         * **Note:** This method is based on
         * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
         * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
         * `undefined` and other non-number values.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
         * @example
         *
         * _.isNaN(NaN);
         * // => true
         *
         * _.isNaN(new Number(NaN));
         * // => true
         *
         * isNaN(undefined);
         * // => true
         *
         * _.isNaN(undefined);
         * // => false
         */
        function isNaN(value) {
            // An `NaN` primitive is the only value that is not equal to itself.
            // Perform the `toStringTag` check first to avoid errors with some
            // ActiveX objects in IE.
            return isNumber(value) && value != +value;
        }
        /**
         * Checks if `value` is a pristine native function.
         *
         * **Note:** This method can't reliably detect native functions in the presence
         * of the core-js package because core-js circumvents this kind of detection.
         * Despite multiple requests, the core-js maintainer has made it clear: any
         * attempt to fix the detection will be obstructed. As a result, we're left
         * with little choice but to throw an error. Unfortunately, this also affects
         * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
         * which rely on core-js.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         * @example
         *
         * _.isNative(Array.prototype.push);
         * // => true
         *
         * _.isNative(_);
         * // => false
         */
        function isNative(value) {
            if (isMaskable(value)) {
                throw new Error(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
        }
        /**
         * Checks if `value` is `null`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
         * @example
         *
         * _.isNull(null);
         * // => true
         *
         * _.isNull(void 0);
         * // => false
         */
        function isNull(value) {
            return value === null;
        }
        /**
         * Checks if `value` is `null` or `undefined`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
         * @example
         *
         * _.isNil(null);
         * // => true
         *
         * _.isNil(void 0);
         * // => true
         *
         * _.isNil(NaN);
         * // => false
         */
        function isNil(value) {
            return value == null;
        }
        /**
         * Checks if `value` is classified as a `Number` primitive or object.
         *
         * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
         * classified as numbers, use the `_.isFinite` method.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a number, else `false`.
         * @example
         *
         * _.isNumber(3);
         * // => true
         *
         * _.isNumber(Number.MIN_VALUE);
         * // => true
         *
         * _.isNumber(Infinity);
         * // => true
         *
         * _.isNumber('3');
         * // => false
         */
        function isNumber(value) {
            return typeof value == 'number' ||
                (isObjectLike(value) && baseGetTag(value) == numberTag);
        }
        /**
         * Checks if `value` is a plain object, that is, an object created by the
         * `Object` constructor or one with a `[[Prototype]]` of `null`.
         *
         * @static
         * @memberOf _
         * @since 0.8.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         * }
         *
         * _.isPlainObject(new Foo);
         * // => false
         *
         * _.isPlainObject([1, 2, 3]);
         * // => false
         *
         * _.isPlainObject({ 'x': 0, 'y': 0 });
         * // => true
         *
         * _.isPlainObject(Object.create(null));
         * // => true
         */
        function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
                return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
                return true;
            }
            var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
            return typeof Ctor == 'function' && Ctor instanceof Ctor &&
                funcToString.call(Ctor) == objectCtorString;
        }
        /**
         * Checks if `value` is classified as a `RegExp` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
         * @example
         *
         * _.isRegExp(/abc/);
         * // => true
         *
         * _.isRegExp('/abc/');
         * // => false
         */
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        /**
         * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
         * double precision number which isn't the result of a rounded unsafe integer.
         *
         * **Note:** This method is based on
         * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
         * @example
         *
         * _.isSafeInteger(3);
         * // => true
         *
         * _.isSafeInteger(Number.MIN_VALUE);
         * // => false
         *
         * _.isSafeInteger(Infinity);
         * // => false
         *
         * _.isSafeInteger('3');
         * // => false
         */
        function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        /**
         * Checks if `value` is classified as a `Set` object.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a set, else `false`.
         * @example
         *
         * _.isSet(new Set);
         * // => true
         *
         * _.isSet(new WeakSet);
         * // => false
         */
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        /**
         * Checks if `value` is classified as a `String` primitive or object.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a string, else `false`.
         * @example
         *
         * _.isString('abc');
         * // => true
         *
         * _.isString(1);
         * // => false
         */
        function isString(value) {
            return typeof value == 'string' ||
                (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
        }
        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        function isSymbol(value) {
            return typeof value == 'symbol' ||
                (isObjectLike(value) && baseGetTag(value) == symbolTag);
        }
        /**
         * Checks if `value` is classified as a typed array.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         * @example
         *
         * _.isTypedArray(new Uint8Array);
         * // => true
         *
         * _.isTypedArray([]);
         * // => false
         */
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        /**
         * Checks if `value` is `undefined`.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
         * @example
         *
         * _.isUndefined(void 0);
         * // => true
         *
         * _.isUndefined(null);
         * // => false
         */
        function isUndefined(value) {
            return value === undefined;
        }
        /**
         * Checks if `value` is classified as a `WeakMap` object.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
         * @example
         *
         * _.isWeakMap(new WeakMap);
         * // => true
         *
         * _.isWeakMap(new Map);
         * // => false
         */
        function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        /**
         * Checks if `value` is classified as a `WeakSet` object.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
         * @example
         *
         * _.isWeakSet(new WeakSet);
         * // => true
         *
         * _.isWeakSet(new Set);
         * // => false
         */
        function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        /**
         * Checks if `value` is less than `other`.
         *
         * @static
         * @memberOf _
         * @since 3.9.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is less than `other`,
         *  else `false`.
         * @see _.gt
         * @example
         *
         * _.lt(1, 3);
         * // => true
         *
         * _.lt(3, 3);
         * // => false
         *
         * _.lt(3, 1);
         * // => false
         */
        var lt = createRelationalOperation(baseLt);
        /**
         * Checks if `value` is less than or equal to `other`.
         *
         * @static
         * @memberOf _
         * @since 3.9.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is less than or equal to
         *  `other`, else `false`.
         * @see _.gte
         * @example
         *
         * _.lte(1, 3);
         * // => true
         *
         * _.lte(3, 3);
         * // => true
         *
         * _.lte(3, 1);
         * // => false
         */
        var lte = createRelationalOperation(function (value, other) {
            return value <= other;
        });
        /**
         * Converts `value` to an array.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {Array} Returns the converted array.
         * @example
         *
         * _.toArray({ 'a': 1, 'b': 2 });
         * // => [1, 2]
         *
         * _.toArray('abc');
         * // => ['a', 'b', 'c']
         *
         * _.toArray(1);
         * // => []
         *
         * _.toArray(null);
         * // => []
         */
        function toArray(value) {
            if (!value) {
                return [];
            }
            if (isArrayLike(value)) {
                return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
                return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);
            return func(value);
        }
        /**
         * Converts `value` to a finite number.
         *
         * @static
         * @memberOf _
         * @since 4.12.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted number.
         * @example
         *
         * _.toFinite(3.2);
         * // => 3.2
         *
         * _.toFinite(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toFinite(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toFinite('3.2');
         * // => 3.2
         */
        function toFinite(value) {
            if (!value) {
                return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
                var sign = (value < 0 ? -1 : 1);
                return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
        }
        /**
         * Converts `value` to an integer.
         *
         * **Note:** This method is loosely based on
         * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.toInteger(3.2);
         * // => 3
         *
         * _.toInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toInteger(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toInteger('3.2');
         * // => 3
         */
        function toInteger(value) {
            var result = toFinite(value), remainder = result % 1;
            return result === result ? (remainder ? result - remainder : result) : 0;
        }
        /**
         * Converts `value` to an integer suitable for use as the length of an
         * array-like object.
         *
         * **Note:** This method is based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.toLength(3.2);
         * // => 3
         *
         * _.toLength(Number.MIN_VALUE);
         * // => 0
         *
         * _.toLength(Infinity);
         * // => 4294967295
         *
         * _.toLength('3.2');
         * // => 3
         */
        function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        /**
         * Converts `value` to a number.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {number} Returns the number.
         * @example
         *
         * _.toNumber(3.2);
         * // => 3.2
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3.2');
         * // => 3.2
         */
        function toNumber(value) {
            if (typeof value == 'number') {
                return value;
            }
            if (isSymbol(value)) {
                return NAN;
            }
            if (isObject(value)) {
                var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
                value = isObject(other) ? (other + '') : other;
            }
            if (typeof value != 'string') {
                return value === 0 ? value : +value;
            }
            value = value.replace(reTrim, '');
            var isBinary = reIsBinary.test(value);
            return (isBinary || reIsOctal.test(value))
                ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
                : (reIsBadHex.test(value) ? NAN : +value);
        }
        /**
         * Converts `value` to a plain object flattening inherited enumerable string
         * keyed properties of `value` to own properties of the plain object.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {Object} Returns the converted plain object.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.assign({ 'a': 1 }, new Foo);
         * // => { 'a': 1, 'b': 2 }
         *
         * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
         * // => { 'a': 1, 'b': 2, 'c': 3 }
         */
        function toPlainObject(value) {
            return copyObject(value, keysIn(value));
        }
        /**
         * Converts `value` to a safe integer. A safe integer can be compared and
         * represented correctly.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.toSafeInteger(3.2);
         * // => 3
         *
         * _.toSafeInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toSafeInteger(Infinity);
         * // => 9007199254740991
         *
         * _.toSafeInteger('3.2');
         * // => 3
         */
        function toSafeInteger(value) {
            return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
        }
        /**
         * Converts `value` to a string. An empty string is returned for `null`
         * and `undefined` values. The sign of `-0` is preserved.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         * @example
         *
         * _.toString(null);
         * // => ''
         *
         * _.toString(-0);
         * // => '-0'
         *
         * _.toString([1, 2, 3]);
         * // => '1,2,3'
         */
        function toString(value) {
            return value == null ? '' : baseToString(value);
        }
        /*------------------------------------------------------------------------*/
        /**
         * Assigns own enumerable string keyed properties of source objects to the
         * destination object. Source objects are applied from left to right.
         * Subsequent sources overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object` and is loosely based on
         * [`Object.assign`](https://mdn.io/Object/assign).
         *
         * @static
         * @memberOf _
         * @since 0.10.0
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @see _.assignIn
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         * }
         *
         * function Bar() {
         *   this.c = 3;
         * }
         *
         * Foo.prototype.b = 2;
         * Bar.prototype.d = 4;
         *
         * _.assign({ 'a': 0 }, new Foo, new Bar);
         * // => { 'a': 1, 'c': 3 }
         */
        var assign = createAssigner(function (object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
                copyObject(source, keys(source), object);
                return;
            }
            for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                    assignValue(object, key, source[key]);
                }
            }
        });
        /**
         * This method is like `_.assign` except that it iterates over own and
         * inherited source properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @alias extend
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @see _.assign
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         * }
         *
         * function Bar() {
         *   this.c = 3;
         * }
         *
         * Foo.prototype.b = 2;
         * Bar.prototype.d = 4;
         *
         * _.assignIn({ 'a': 0 }, new Foo, new Bar);
         * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
         */
        var assignIn = createAssigner(function (object, source) {
            copyObject(source, keysIn(source), object);
        });
        /**
         * This method is like `_.assignIn` except that it accepts `customizer`
         * which is invoked to produce the assigned values. If `customizer` returns
         * `undefined`, assignment is handled by the method instead. The `customizer`
         * is invoked with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @alias extendWith
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} sources The source objects.
         * @param {Function} [customizer] The function to customize assigned values.
         * @returns {Object} Returns `object`.
         * @see _.assignWith
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignInWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
        });
        /**
         * This method is like `_.assign` except that it accepts `customizer`
         * which is invoked to produce the assigned values. If `customizer` returns
         * `undefined`, assignment is handled by the method instead. The `customizer`
         * is invoked with five arguments: (objValue, srcValue, key, object, source).
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} sources The source objects.
         * @param {Function} [customizer] The function to customize assigned values.
         * @returns {Object} Returns `object`.
         * @see _.assignInWith
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   return _.isUndefined(objValue) ? srcValue : objValue;
         * }
         *
         * var defaults = _.partialRight(_.assignWith, customizer);
         *
         * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        var assignWith = createAssigner(function (object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
        });
        /**
         * Creates an array of values corresponding to `paths` of `object`.
         *
         * @static
         * @memberOf _
         * @since 1.0.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {...(string|string[])} [paths] The property paths to pick.
         * @returns {Array} Returns the picked values.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
         *
         * _.at(object, ['a[0].b.c', 'a[1]']);
         * // => [3, 4]
         */
        var at = flatRest(baseAt);
        /**
         * Creates an object that inherits from the `prototype` object. If a
         * `properties` object is given, its own enumerable string keyed properties
         * are assigned to the created object.
         *
         * @static
         * @memberOf _
         * @since 2.3.0
         * @category Object
         * @param {Object} prototype The object to inherit from.
         * @param {Object} [properties] The properties to assign to the object.
         * @returns {Object} Returns the new object.
         * @example
         *
         * function Shape() {
         *   this.x = 0;
         *   this.y = 0;
         * }
         *
         * function Circle() {
         *   Shape.call(this);
         * }
         *
         * Circle.prototype = _.create(Shape.prototype, {
         *   'constructor': Circle
         * });
         *
         * var circle = new Circle;
         * circle instanceof Circle;
         * // => true
         *
         * circle instanceof Shape;
         * // => true
         */
        function create(prototype, properties) {
            var result = baseCreate(prototype);
            return properties == null ? result : baseAssign(result, properties);
        }
        /**
         * Assigns own and inherited enumerable string keyed properties of source
         * objects to the destination object for all destination properties that
         * resolve to `undefined`. Source objects are applied from left to right.
         * Once a property is set, additional values of the same property are ignored.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @see _.defaultsDeep
         * @example
         *
         * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
         * // => { 'a': 1, 'b': 2 }
         */
        var defaults = baseRest(function (args) {
            args.push(undefined, assignInDefaults);
            return apply(assignInWith, undefined, args);
        });
        /**
         * This method is like `_.defaults` except that it recursively assigns
         * default properties.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 3.10.0
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @see _.defaults
         * @example
         *
         * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
         * // => { 'a': { 'b': 2, 'c': 3 } }
         */
        var defaultsDeep = baseRest(function (args) {
            args.push(undefined, mergeDefaults);
            return apply(mergeWith, undefined, args);
        });
        /**
         * This method is like `_.find` except that it returns the key of the first
         * element `predicate` returns truthy for instead of the element itself.
         *
         * @static
         * @memberOf _
         * @since 1.1.0
         * @category Object
         * @param {Object} object The object to inspect.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {string|undefined} Returns the key of the matched element,
         *  else `undefined`.
         * @example
         *
         * var users = {
         *   'barney':  { 'age': 36, 'active': true },
         *   'fred':    { 'age': 40, 'active': false },
         *   'pebbles': { 'age': 1,  'active': true }
         * };
         *
         * _.findKey(users, function(o) { return o.age < 40; });
         * // => 'barney' (iteration order is not guaranteed)
         *
         * // The `_.matches` iteratee shorthand.
         * _.findKey(users, { 'age': 1, 'active': true });
         * // => 'pebbles'
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.findKey(users, ['active', false]);
         * // => 'fred'
         *
         * // The `_.property` iteratee shorthand.
         * _.findKey(users, 'active');
         * // => 'barney'
         */
        function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        /**
         * This method is like `_.findKey` except that it iterates over elements of
         * a collection in the opposite order.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Object
         * @param {Object} object The object to inspect.
         * @param {Function} [predicate=_.identity] The function invoked per iteration.
         * @returns {string|undefined} Returns the key of the matched element,
         *  else `undefined`.
         * @example
         *
         * var users = {
         *   'barney':  { 'age': 36, 'active': true },
         *   'fred':    { 'age': 40, 'active': false },
         *   'pebbles': { 'age': 1,  'active': true }
         * };
         *
         * _.findLastKey(users, function(o) { return o.age < 40; });
         * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
         *
         * // The `_.matches` iteratee shorthand.
         * _.findLastKey(users, { 'age': 36, 'active': true });
         * // => 'barney'
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.findLastKey(users, ['active', false]);
         * // => 'fred'
         *
         * // The `_.property` iteratee shorthand.
         * _.findLastKey(users, 'active');
         * // => 'pebbles'
         */
        function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        /**
         * Iterates over own and inherited enumerable string keyed properties of an
         * object and invokes `iteratee` for each property. The iteratee is invoked
         * with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @since 0.3.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Object} Returns `object`.
         * @see _.forInRight
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.forIn(new Foo, function(value, key) {
         *   console.log(key);
         * });
         * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
         */
        function forIn(object, iteratee) {
            return object == null
                ? object
                : baseFor(object, getIteratee(iteratee, 3), keysIn);
        }
        /**
         * This method is like `_.forIn` except that it iterates over properties of
         * `object` in the opposite order.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Object} Returns `object`.
         * @see _.forIn
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.forInRight(new Foo, function(value, key) {
         *   console.log(key);
         * });
         * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
         */
        function forInRight(object, iteratee) {
            return object == null
                ? object
                : baseForRight(object, getIteratee(iteratee, 3), keysIn);
        }
        /**
         * Iterates over own enumerable string keyed properties of an object and
         * invokes `iteratee` for each property. The iteratee is invoked with three
         * arguments: (value, key, object). Iteratee functions may exit iteration
         * early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @since 0.3.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Object} Returns `object`.
         * @see _.forOwnRight
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.forOwn(new Foo, function(value, key) {
         *   console.log(key);
         * });
         * // => Logs 'a' then 'b' (iteration order is not guaranteed).
         */
        function forOwn(object, iteratee) {
            return object && baseForOwn(object, getIteratee(iteratee, 3));
        }
        /**
         * This method is like `_.forOwn` except that it iterates over properties of
         * `object` in the opposite order.
         *
         * @static
         * @memberOf _
         * @since 2.0.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Object} Returns `object`.
         * @see _.forOwn
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.forOwnRight(new Foo, function(value, key) {
         *   console.log(key);
         * });
         * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
         */
        function forOwnRight(object, iteratee) {
            return object && baseForOwnRight(object, getIteratee(iteratee, 3));
        }
        /**
         * Creates an array of function property names from own enumerable properties
         * of `object`.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns the function names.
         * @see _.functionsIn
         * @example
         *
         * function Foo() {
         *   this.a = _.constant('a');
         *   this.b = _.constant('b');
         * }
         *
         * Foo.prototype.c = _.constant('c');
         *
         * _.functions(new Foo);
         * // => ['a', 'b']
         */
        function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
        }
        /**
         * Creates an array of function property names from own and inherited
         * enumerable properties of `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to inspect.
         * @returns {Array} Returns the function names.
         * @see _.functions
         * @example
         *
         * function Foo() {
         *   this.a = _.constant('a');
         *   this.b = _.constant('b');
         * }
         *
         * Foo.prototype.c = _.constant('c');
         *
         * _.functionsIn(new Foo);
         * // => ['a', 'b', 'c']
         */
        function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        /**
         * Gets the value at `path` of `object`. If the resolved value is
         * `undefined`, the `defaultValue` is returned in its place.
         *
         * @static
         * @memberOf _
         * @since 3.7.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @param {*} [defaultValue] The value returned for `undefined` resolved values.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.get(object, 'a[0].b.c');
         * // => 3
         *
         * _.get(object, ['a', '0', 'b', 'c']);
         * // => 3
         *
         * _.get(object, 'a.b.c', 'default');
         * // => 'default'
         */
        function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
        }
        /**
         * Checks if `path` is a direct property of `object`.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = { 'a': { 'b': 2 } };
         * var other = _.create({ 'a': _.create({ 'b': 2 }) });
         *
         * _.has(object, 'a');
         * // => true
         *
         * _.has(object, 'a.b');
         * // => true
         *
         * _.has(object, ['a', 'b']);
         * // => true
         *
         * _.has(other, 'a');
         * // => false
         */
        function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
        }
        /**
         * Checks if `path` is a direct or inherited property of `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = _.create({ 'a': _.create({ 'b': 2 }) });
         *
         * _.hasIn(object, 'a');
         * // => true
         *
         * _.hasIn(object, 'a.b');
         * // => true
         *
         * _.hasIn(object, ['a', 'b']);
         * // => true
         *
         * _.hasIn(object, 'b');
         * // => false
         */
        function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
        }
        /**
         * Creates an object composed of the inverted keys and values of `object`.
         * If `object` contains duplicate values, subsequent values overwrite
         * property assignments of previous values.
         *
         * @static
         * @memberOf _
         * @since 0.7.0
         * @category Object
         * @param {Object} object The object to invert.
         * @returns {Object} Returns the new inverted object.
         * @example
         *
         * var object = { 'a': 1, 'b': 2, 'c': 1 };
         *
         * _.invert(object);
         * // => { '1': 'c', '2': 'b' }
         */
        var invert = createInverter(function (result, value, key) {
            result[value] = key;
        }, constant(identity));
        /**
         * This method is like `_.invert` except that the inverted object is generated
         * from the results of running each element of `object` thru `iteratee`. The
         * corresponding inverted value of each inverted key is an array of keys
         * responsible for generating the inverted value. The iteratee is invoked
         * with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.1.0
         * @category Object
         * @param {Object} object The object to invert.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {Object} Returns the new inverted object.
         * @example
         *
         * var object = { 'a': 1, 'b': 2, 'c': 1 };
         *
         * _.invertBy(object);
         * // => { '1': ['a', 'c'], '2': ['b'] }
         *
         * _.invertBy(object, function(value) {
         *   return 'group' + value;
         * });
         * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
         */
        var invertBy = createInverter(function (result, value, key) {
            if (hasOwnProperty.call(result, value)) {
                result[value].push(key);
            }
            else {
                result[value] = [key];
            }
        }, getIteratee);
        /**
         * Invokes the method at `path` of `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the method to invoke.
         * @param {...*} [args] The arguments to invoke the method with.
         * @returns {*} Returns the result of the invoked method.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
         *
         * _.invoke(object, 'a[0].b.c.slice', 1, 3);
         * // => [2, 3]
         */
        var invoke = baseRest(baseInvoke);
        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */
        function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        /**
         * Creates an array of the own and inherited enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keysIn(new Foo);
         * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
         */
        function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        /**
         * The opposite of `_.mapValues`; this method creates an object with the
         * same values as `object` and keys generated by running each own enumerable
         * string keyed property of `object` thru `iteratee`. The iteratee is invoked
         * with three arguments: (value, key, object).
         *
         * @static
         * @memberOf _
         * @since 3.8.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Object} Returns the new mapped object.
         * @see _.mapValues
         * @example
         *
         * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
         *   return key + value;
         * });
         * // => { 'a1': 1, 'b2': 2 }
         */
        function mapKeys(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function (value, key, object) {
                baseAssignValue(result, iteratee(value, key, object), value);
            });
            return result;
        }
        /**
         * Creates an object with the same keys as `object` and values generated
         * by running each own enumerable string keyed property of `object` thru
         * `iteratee`. The iteratee is invoked with three arguments:
         * (value, key, object).
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Object} Returns the new mapped object.
         * @see _.mapKeys
         * @example
         *
         * var users = {
         *   'fred':    { 'user': 'fred',    'age': 40 },
         *   'pebbles': { 'user': 'pebbles', 'age': 1 }
         * };
         *
         * _.mapValues(users, function(o) { return o.age; });
         * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
         *
         * // The `_.property` iteratee shorthand.
         * _.mapValues(users, 'age');
         * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
         */
        function mapValues(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function (value, key, object) {
                baseAssignValue(result, key, iteratee(value, key, object));
            });
            return result;
        }
        /**
         * This method is like `_.assign` except that it recursively merges own and
         * inherited enumerable string keyed properties of source objects into the
         * destination object. Source properties that resolve to `undefined` are
         * skipped if a destination value exists. Array and plain object properties
         * are merged recursively. Other objects and value types are overridden by
         * assignment. Source objects are applied from left to right. Subsequent
         * sources overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 0.5.0
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var object = {
         *   'a': [{ 'b': 2 }, { 'd': 4 }]
         * };
         *
         * var other = {
         *   'a': [{ 'c': 3 }, { 'e': 5 }]
         * };
         *
         * _.merge(object, other);
         * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
         */
        var merge = createAssigner(function (object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
        });
        /**
         * This method is like `_.merge` except that it accepts `customizer` which
         * is invoked to produce the merged values of the destination and source
         * properties. If `customizer` returns `undefined`, merging is handled by the
         * method instead. The `customizer` is invoked with six arguments:
         * (objValue, srcValue, key, object, source, stack).
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} sources The source objects.
         * @param {Function} customizer The function to customize assigned values.
         * @returns {Object} Returns `object`.
         * @example
         *
         * function customizer(objValue, srcValue) {
         *   if (_.isArray(objValue)) {
         *     return objValue.concat(srcValue);
         *   }
         * }
         *
         * var object = { 'a': [1], 'b': [2] };
         * var other = { 'a': [3], 'b': [4] };
         *
         * _.mergeWith(object, other, customizer);
         * // => { 'a': [1, 3], 'b': [2, 4] }
         */
        var mergeWith = createAssigner(function (object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
        });
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable property paths of `object` that are not omitted.
         *
         * **Note:** This method is considerably slower than `_.pick`.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The source object.
         * @param {...(string|string[])} [paths] The property paths to omit.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        var omit = flatRest(function (object, paths) {
            var result = {};
            if (object == null) {
                return result;
            }
            var isDeep = false;
            paths = arrayMap(paths, function (path) {
                path = castPath(path, object);
                isDeep || (isDeep = path.length > 1);
                return path;
            });
            copyObject(object, getAllKeysIn(object), result);
            if (isDeep) {
                result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG);
            }
            var length = paths.length;
            while (length--) {
                baseUnset(result, paths[length]);
            }
            return result;
        });
        /**
         * The opposite of `_.pickBy`; this method creates an object composed of
         * the own and inherited enumerable string keyed properties of `object` that
         * `predicate` doesn't return truthy for. The predicate is invoked with two
         * arguments: (value, key).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The source object.
         * @param {Function} [predicate=_.identity] The function invoked per property.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omitBy(object, _.isNumber);
         * // => { 'b': '2' }
         */
        function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
        }
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The source object.
         * @param {...(string|string[])} [paths] The property paths to pick.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        var pick = flatRest(function (object, paths) {
            return object == null ? {} : basePick(object, paths);
        });
        /**
         * Creates an object composed of the `object` properties `predicate` returns
         * truthy for. The predicate is invoked with two arguments: (value, key).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The source object.
         * @param {Function} [predicate=_.identity] The function invoked per property.
         * @returns {Object} Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pickBy(object, _.isNumber);
         * // => { 'a': 1, 'c': 3 }
         */
        function pickBy(object, predicate) {
            if (object == null) {
                return {};
            }
            var props = arrayMap(getAllKeysIn(object), function (prop) {
                return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function (value, path) {
                return predicate(value, path[0]);
            });
        }
        /**
         * This method is like `_.get` except that if the resolved value is a
         * function it's invoked with the `this` binding of its parent object and
         * its result is returned.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to resolve.
         * @param {*} [defaultValue] The value returned for `undefined` resolved values.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
         *
         * _.result(object, 'a[0].b.c1');
         * // => 3
         *
         * _.result(object, 'a[0].b.c2');
         * // => 4
         *
         * _.result(object, 'a[0].b.c3', 'default');
         * // => 'default'
         *
         * _.result(object, 'a[0].b.c3', _.constant('default'));
         * // => 'default'
         */
        function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            // Ensure the loop is entered when path is empty.
            if (!length) {
                length = 1;
                object = undefined;
            }
            while (++index < length) {
                var value = object == null ? undefined : object[toKey(path[index])];
                if (value === undefined) {
                    index = length;
                    value = defaultValue;
                }
                object = isFunction(value) ? value.call(object) : value;
            }
            return object;
        }
        /**
         * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
         * it's created. Arrays are created for missing index properties while objects
         * are created for all other missing properties. Use `_.setWith` to customize
         * `path` creation.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 3.7.0
         * @category Object
         * @param {Object} object The object to modify.
         * @param {Array|string} path The path of the property to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.set(object, 'a[0].b.c', 4);
         * console.log(object.a[0].b.c);
         * // => 4
         *
         * _.set(object, ['x', '0', 'y', 'z'], 5);
         * console.log(object.x[0].y.z);
         * // => 5
         */
        function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
        }
        /**
         * This method is like `_.set` except that it accepts `customizer` which is
         * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
         * path creation is handled by the method instead. The `customizer` is invoked
         * with three arguments: (nsValue, key, nsObject).
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to modify.
         * @param {Array|string} path The path of the property to set.
         * @param {*} value The value to set.
         * @param {Function} [customizer] The function to customize assigned values.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var object = {};
         *
         * _.setWith(object, '[0][1]', 'a', Object);
         * // => { '0': { '1': 'a' } }
         */
        function setWith(object, path, value, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return object == null ? object : baseSet(object, path, value, customizer);
        }
        /**
         * Creates an array of own enumerable string keyed-value pairs for `object`
         * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
         * entries are returned.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @alias entries
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the key-value pairs.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.toPairs(new Foo);
         * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
         */
        var toPairs = createToPairs(keys);
        /**
         * Creates an array of own and inherited enumerable string keyed-value pairs
         * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
         * or set, its entries are returned.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @alias entriesIn
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the key-value pairs.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.toPairsIn(new Foo);
         * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
         */
        var toPairsIn = createToPairs(keysIn);
        /**
         * An alternative to `_.reduce`; this method transforms `object` to a new
         * `accumulator` object which is the result of running each of its own
         * enumerable string keyed properties thru `iteratee`, with each invocation
         * potentially mutating the `accumulator` object. If `accumulator` is not
         * provided, a new object with the same `[[Prototype]]` will be used. The
         * iteratee is invoked with four arguments: (accumulator, value, key, object).
         * Iteratee functions may exit iteration early by explicitly returning `false`.
         *
         * @static
         * @memberOf _
         * @since 1.3.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @param {*} [accumulator] The custom accumulator value.
         * @returns {*} Returns the accumulated value.
         * @example
         *
         * _.transform([2, 3, 4], function(result, n) {
         *   result.push(n *= n);
         *   return n % 2 == 0;
         * }, []);
         * // => [4, 9]
         *
         * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
         *   (result[value] || (result[value] = [])).push(key);
         * }, {});
         * // => { '1': ['a', 'c'], '2': ['b'] }
         */
        function transform(object, iteratee, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee = getIteratee(iteratee, 4);
            if (accumulator == null) {
                var Ctor = object && object.constructor;
                if (isArrLike) {
                    accumulator = isArr ? new Ctor : [];
                }
                else if (isObject(object)) {
                    accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                }
                else {
                    accumulator = {};
                }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
                return iteratee(accumulator, value, index, object);
            });
            return accumulator;
        }
        /**
         * Removes the property at `path` of `object`.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to modify.
         * @param {Array|string} path The path of the property to unset.
         * @returns {boolean} Returns `true` if the property is deleted, else `false`.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 7 } }] };
         * _.unset(object, 'a[0].b.c');
         * // => true
         *
         * console.log(object);
         * // => { 'a': [{ 'b': {} }] };
         *
         * _.unset(object, ['a', '0', 'b', 'c']);
         * // => true
         *
         * console.log(object);
         * // => { 'a': [{ 'b': {} }] };
         */
        function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
        }
        /**
         * This method is like `_.set` except that accepts `updater` to produce the
         * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
         * is invoked with one argument: (value).
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 4.6.0
         * @category Object
         * @param {Object} object The object to modify.
         * @param {Array|string} path The path of the property to set.
         * @param {Function} updater The function to produce the updated value.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.update(object, 'a[0].b.c', function(n) { return n * n; });
         * console.log(object.a[0].b.c);
         * // => 9
         *
         * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
         * console.log(object.x[0].y.z);
         * // => 0
         */
        function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        /**
         * This method is like `_.update` except that it accepts `customizer` which is
         * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
         * path creation is handled by the method instead. The `customizer` is invoked
         * with three arguments: (nsValue, key, nsObject).
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 4.6.0
         * @category Object
         * @param {Object} object The object to modify.
         * @param {Array|string} path The path of the property to set.
         * @param {Function} updater The function to produce the updated value.
         * @param {Function} [customizer] The function to customize assigned values.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var object = {};
         *
         * _.updateWith(object, '[0][1]', _.constant('a'), Object);
         * // => { '0': { '1': 'a' } }
         */
        function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == 'function' ? customizer : undefined;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        /**
         * Creates an array of the own enumerable string keyed property values of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property values.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.values(new Foo);
         * // => [1, 2] (iteration order is not guaranteed)
         *
         * _.values('hi');
         * // => ['h', 'i']
         */
        function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
        }
        /**
         * Creates an array of the own and inherited enumerable string keyed property
         * values of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property values.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.valuesIn(new Foo);
         * // => [1, 2, 3] (iteration order is not guaranteed)
         */
        function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
        }
        /*------------------------------------------------------------------------*/
        /**
         * Clamps `number` within the inclusive `lower` and `upper` bounds.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Number
         * @param {number} number The number to clamp.
         * @param {number} [lower] The lower bound.
         * @param {number} upper The upper bound.
         * @returns {number} Returns the clamped number.
         * @example
         *
         * _.clamp(-10, -5, 5);
         * // => -5
         *
         * _.clamp(10, -5, 5);
         * // => 5
         */
        function clamp(number, lower, upper) {
            if (upper === undefined) {
                upper = lower;
                lower = undefined;
            }
            if (upper !== undefined) {
                upper = toNumber(upper);
                upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined) {
                lower = toNumber(lower);
                lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
        }
        /**
         * Checks if `n` is between `start` and up to, but not including, `end`. If
         * `end` is not specified, it's set to `start` with `start` then set to `0`.
         * If `start` is greater than `end` the params are swapped to support
         * negative ranges.
         *
         * @static
         * @memberOf _
         * @since 3.3.0
         * @category Number
         * @param {number} number The number to check.
         * @param {number} [start=0] The start of the range.
         * @param {number} end The end of the range.
         * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
         * @see _.range, _.rangeRight
         * @example
         *
         * _.inRange(3, 2, 4);
         * // => true
         *
         * _.inRange(4, 8);
         * // => true
         *
         * _.inRange(4, 2);
         * // => false
         *
         * _.inRange(2, 2);
         * // => false
         *
         * _.inRange(1.2, 2);
         * // => true
         *
         * _.inRange(5.2, 4);
         * // => false
         *
         * _.inRange(-3, -2, -6);
         * // => true
         */
        function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined) {
                end = start;
                start = 0;
            }
            else {
                end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
        }
        /**
         * Produces a random number between the inclusive `lower` and `upper` bounds.
         * If only one argument is provided a number between `0` and the given number
         * is returned. If `floating` is `true`, or either `lower` or `upper` are
         * floats, a floating-point number is returned instead of an integer.
         *
         * **Note:** JavaScript follows the IEEE-754 standard for resolving
         * floating-point values which can produce unexpected results.
         *
         * @static
         * @memberOf _
         * @since 0.7.0
         * @category Number
         * @param {number} [lower=0] The lower bound.
         * @param {number} [upper=1] The upper bound.
         * @param {boolean} [floating] Specify returning a floating-point number.
         * @returns {number} Returns the random number.
         * @example
         *
         * _.random(0, 5);
         * // => an integer between 0 and 5
         *
         * _.random(5);
         * // => also an integer between 0 and 5
         *
         * _.random(5, true);
         * // => a floating-point number between 0 and 5
         *
         * _.random(1.2, 5.2);
         * // => a floating-point number between 1.2 and 5.2
         */
        function random(lower, upper, floating) {
            if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
                upper = floating = undefined;
            }
            if (floating === undefined) {
                if (typeof upper == 'boolean') {
                    floating = upper;
                    upper = undefined;
                }
                else if (typeof lower == 'boolean') {
                    floating = lower;
                    lower = undefined;
                }
            }
            if (lower === undefined && upper === undefined) {
                lower = 0;
                upper = 1;
            }
            else {
                lower = toFinite(lower);
                if (upper === undefined) {
                    upper = lower;
                    lower = 0;
                }
                else {
                    upper = toFinite(upper);
                }
            }
            if (lower > upper) {
                var temp = lower;
                lower = upper;
                upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
                var rand = nativeRandom();
                return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
            }
            return baseRandom(lower, upper);
        }
        /*------------------------------------------------------------------------*/
        /**
         * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the camel cased string.
         * @example
         *
         * _.camelCase('Foo Bar');
         * // => 'fooBar'
         *
         * _.camelCase('--foo-bar--');
         * // => 'fooBar'
         *
         * _.camelCase('__FOO_BAR__');
         * // => 'fooBar'
         */
        var camelCase = createCompounder(function (result, word, index) {
            word = word.toLowerCase();
            return result + (index ? capitalize(word) : word);
        });
        /**
         * Converts the first character of `string` to upper case and the remaining
         * to lower case.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to capitalize.
         * @returns {string} Returns the capitalized string.
         * @example
         *
         * _.capitalize('FRED');
         * // => 'Fred'
         */
        function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
        }
        /**
         * Deburrs `string` by converting
         * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
         * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
         * letters to basic Latin letters and removing
         * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to deburr.
         * @returns {string} Returns the deburred string.
         * @example
         *
         * _.deburr('déjà vu');
         * // => 'deja vu'
         */
        function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
        }
        /**
         * Checks if `string` ends with the given target string.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to inspect.
         * @param {string} [target] The string to search for.
         * @param {number} [position=string.length] The position to search up to.
         * @returns {boolean} Returns `true` if `string` ends with `target`,
         *  else `false`.
         * @example
         *
         * _.endsWith('abc', 'c');
         * // => true
         *
         * _.endsWith('abc', 'b');
         * // => false
         *
         * _.endsWith('abc', 'b', 2);
         * // => true
         */
        function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined
                ? length
                : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
        }
        /**
         * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
         * corresponding HTML entities.
         *
         * **Note:** No other characters are escaped. To escape additional
         * characters use a third-party library like [_he_](https://mths.be/he).
         *
         * Though the ">" character is escaped for symmetry, characters like
         * ">" and "/" don't need escaping in HTML and have no special meaning
         * unless they're part of a tag or unquoted attribute value. See
         * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
         * (under "semi-related fun fact") for more details.
         *
         * When working with HTML you should always
         * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
         * XSS vectors.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category String
         * @param {string} [string=''] The string to escape.
         * @returns {string} Returns the escaped string.
         * @example
         *
         * _.escape('fred, barney, & pebbles');
         * // => 'fred, barney, &amp; pebbles'
         */
        function escape(string) {
            string = toString(string);
            return (string && reHasUnescapedHtml.test(string))
                ? string.replace(reUnescapedHtml, escapeHtmlChar)
                : string;
        }
        /**
         * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
         * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to escape.
         * @returns {string} Returns the escaped string.
         * @example
         *
         * _.escapeRegExp('[lodash](https://lodash.com/)');
         * // => '\[lodash\]\(https://lodash\.com/\)'
         */
        function escapeRegExp(string) {
            string = toString(string);
            return (string && reHasRegExpChar.test(string))
                ? string.replace(reRegExpChar, '\\$&')
                : string;
        }
        /**
         * Converts `string` to
         * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the kebab cased string.
         * @example
         *
         * _.kebabCase('Foo Bar');
         * // => 'foo-bar'
         *
         * _.kebabCase('fooBar');
         * // => 'foo-bar'
         *
         * _.kebabCase('__FOO_BAR__');
         * // => 'foo-bar'
         */
        var kebabCase = createCompounder(function (result, word, index) {
            return result + (index ? '-' : '') + word.toLowerCase();
        });
        /**
         * Converts `string`, as space separated words, to lower case.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the lower cased string.
         * @example
         *
         * _.lowerCase('--Foo-Bar--');
         * // => 'foo bar'
         *
         * _.lowerCase('fooBar');
         * // => 'foo bar'
         *
         * _.lowerCase('__FOO_BAR__');
         * // => 'foo bar'
         */
        var lowerCase = createCompounder(function (result, word, index) {
            return result + (index ? ' ' : '') + word.toLowerCase();
        });
        /**
         * Converts the first character of `string` to lower case.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the converted string.
         * @example
         *
         * _.lowerFirst('Fred');
         * // => 'fred'
         *
         * _.lowerFirst('FRED');
         * // => 'fRED'
         */
        var lowerFirst = createCaseFirst('toLowerCase');
        /**
         * Pads `string` on the left and right sides if it's shorter than `length`.
         * Padding characters are truncated if they can't be evenly divided by `length`.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to pad.
         * @param {number} [length=0] The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the padded string.
         * @example
         *
         * _.pad('abc', 8);
         * // => '  abc   '
         *
         * _.pad('abc', 8, '_-');
         * // => '_-abc_-_'
         *
         * _.pad('abc', 3);
         * // => 'abc'
         */
        function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
                return string;
            }
            var mid = (length - strLength) / 2;
            return (createPadding(nativeFloor(mid), chars) +
                string +
                createPadding(nativeCeil(mid), chars));
        }
        /**
         * Pads `string` on the right side if it's shorter than `length`. Padding
         * characters are truncated if they exceed `length`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to pad.
         * @param {number} [length=0] The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the padded string.
         * @example
         *
         * _.padEnd('abc', 6);
         * // => 'abc   '
         *
         * _.padEnd('abc', 6, '_-');
         * // => 'abc_-_'
         *
         * _.padEnd('abc', 3);
         * // => 'abc'
         */
        function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return (length && strLength < length)
                ? (string + createPadding(length - strLength, chars))
                : string;
        }
        /**
         * Pads `string` on the left side if it's shorter than `length`. Padding
         * characters are truncated if they exceed `length`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to pad.
         * @param {number} [length=0] The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the padded string.
         * @example
         *
         * _.padStart('abc', 6);
         * // => '   abc'
         *
         * _.padStart('abc', 6, '_-');
         * // => '_-_abc'
         *
         * _.padStart('abc', 3);
         * // => 'abc'
         */
        function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return (length && strLength < length)
                ? (createPadding(length - strLength, chars) + string)
                : string;
        }
        /**
         * Converts `string` to an integer of the specified radix. If `radix` is
         * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
         * hexadecimal, in which case a `radix` of `16` is used.
         *
         * **Note:** This method aligns with the
         * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
         *
         * @static
         * @memberOf _
         * @since 1.1.0
         * @category String
         * @param {string} string The string to convert.
         * @param {number} [radix=10] The radix to interpret `value` by.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {number} Returns the converted integer.
         * @example
         *
         * _.parseInt('08');
         * // => 8
         *
         * _.map(['6', '08', '10'], _.parseInt);
         * // => [6, 8, 10]
         */
        function parseInt(string, radix, guard) {
            if (guard || radix == null) {
                radix = 0;
            }
            else if (radix) {
                radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
        }
        /**
         * Repeats the given string `n` times.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to repeat.
         * @param {number} [n=1] The number of times to repeat the string.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {string} Returns the repeated string.
         * @example
         *
         * _.repeat('*', 3);
         * // => '***'
         *
         * _.repeat('abc', 2);
         * // => 'abcabc'
         *
         * _.repeat('abc', 0);
         * // => ''
         */
        function repeat(string, n, guard) {
            if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
                n = 1;
            }
            else {
                n = toInteger(n);
            }
            return baseRepeat(toString(string), n);
        }
        /**
         * Replaces matches for `pattern` in `string` with `replacement`.
         *
         * **Note:** This method is based on
         * [`String#replace`](https://mdn.io/String/replace).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to modify.
         * @param {RegExp|string} pattern The pattern to replace.
         * @param {Function|string} replacement The match replacement.
         * @returns {string} Returns the modified string.
         * @example
         *
         * _.replace('Hi Fred', 'Fred', 'Barney');
         * // => 'Hi Barney'
         */
        function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        /**
         * Converts `string` to
         * [snake case](https://en.wikipedia.org/wiki/Snake_case).
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the snake cased string.
         * @example
         *
         * _.snakeCase('Foo Bar');
         * // => 'foo_bar'
         *
         * _.snakeCase('fooBar');
         * // => 'foo_bar'
         *
         * _.snakeCase('--FOO-BAR--');
         * // => 'foo_bar'
         */
        var snakeCase = createCompounder(function (result, word, index) {
            return result + (index ? '_' : '') + word.toLowerCase();
        });
        /**
         * Splits `string` by `separator`.
         *
         * **Note:** This method is based on
         * [`String#split`](https://mdn.io/String/split).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to split.
         * @param {RegExp|string} separator The separator pattern to split by.
         * @param {number} [limit] The length to truncate results to.
         * @returns {Array} Returns the string segments.
         * @example
         *
         * _.split('a-b-c', '-', 2);
         * // => ['a', 'b']
         */
        function split(string, separator, limit) {
            if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
                separator = limit = undefined;
            }
            limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
                return [];
            }
            string = toString(string);
            if (string && (typeof separator == 'string' ||
                (separator != null && !isRegExp(separator)))) {
                separator = baseToString(separator);
                if (!separator && hasUnicode(string)) {
                    return castSlice(stringToArray(string), 0, limit);
                }
            }
            return string.split(separator, limit);
        }
        /**
         * Converts `string` to
         * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
         *
         * @static
         * @memberOf _
         * @since 3.1.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the start cased string.
         * @example
         *
         * _.startCase('--foo-bar--');
         * // => 'Foo Bar'
         *
         * _.startCase('fooBar');
         * // => 'Foo Bar'
         *
         * _.startCase('__FOO_BAR__');
         * // => 'FOO BAR'
         */
        var startCase = createCompounder(function (result, word, index) {
            return result + (index ? ' ' : '') + upperFirst(word);
        });
        /**
         * Checks if `string` starts with the given target string.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to inspect.
         * @param {string} [target] The string to search for.
         * @param {number} [position=0] The position to search from.
         * @returns {boolean} Returns `true` if `string` starts with `target`,
         *  else `false`.
         * @example
         *
         * _.startsWith('abc', 'a');
         * // => true
         *
         * _.startsWith('abc', 'b');
         * // => false
         *
         * _.startsWith('abc', 'b', 1);
         * // => true
         */
        function startsWith(string, target, position) {
            string = toString(string);
            position = baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
        }
        /**
         * Creates a compiled template function that can interpolate data properties
         * in "interpolate" delimiters, HTML-escape interpolated data properties in
         * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
         * properties may be accessed as free variables in the template. If a setting
         * object is given, it takes precedence over `_.templateSettings` values.
         *
         * **Note:** In the development build `_.template` utilizes
         * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
         * for easier debugging.
         *
         * For more information on precompiling templates see
         * [lodash's custom builds documentation](https://lodash.com/custom-builds).
         *
         * For more information on Chrome extension sandboxes see
         * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category String
         * @param {string} [string=''] The template string.
         * @param {Object} [options={}] The options object.
         * @param {RegExp} [options.escape=_.templateSettings.escape]
         *  The HTML "escape" delimiter.
         * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
         *  The "evaluate" delimiter.
         * @param {Object} [options.imports=_.templateSettings.imports]
         *  An object to import into the template as free variables.
         * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
         *  The "interpolate" delimiter.
         * @param {string} [options.sourceURL='lodash.templateSources[n]']
         *  The sourceURL of the compiled template.
         * @param {string} [options.variable='obj']
         *  The data object variable name.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Function} Returns the compiled template function.
         * @example
         *
         * // Use the "interpolate" delimiter to create a compiled template.
         * var compiled = _.template('hello <%= user %>!');
         * compiled({ 'user': 'fred' });
         * // => 'hello fred!'
         *
         * // Use the HTML "escape" delimiter to escape data property values.
         * var compiled = _.template('<b><%- value %></b>');
         * compiled({ 'value': '<script>' });
         * // => '<b>&lt;script&gt;</b>'
         *
         * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
         * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
         * compiled({ 'users': ['fred', 'barney'] });
         * // => '<li>fred</li><li>barney</li>'
         *
         * // Use the internal `print` function in "evaluate" delimiters.
         * var compiled = _.template('<% print("hello " + user); %>!');
         * compiled({ 'user': 'barney' });
         * // => 'hello barney!'
         *
         * // Use the ES template literal delimiter as an "interpolate" delimiter.
         * // Disable support by replacing the "interpolate" delimiter.
         * var compiled = _.template('hello ${ user }!');
         * compiled({ 'user': 'pebbles' });
         * // => 'hello pebbles!'
         *
         * // Use backslashes to treat delimiters as plain text.
         * var compiled = _.template('<%= "\\<%- value %\\>" %>');
         * compiled({ 'value': 'ignored' });
         * // => '<%- value %>'
         *
         * // Use the `imports` option to import `jQuery` as `jq`.
         * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
         * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
         * compiled({ 'users': ['fred', 'barney'] });
         * // => '<li>fred</li><li>barney</li>'
         *
         * // Use the `sourceURL` option to specify a custom sourceURL for the template.
         * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
         * compiled(data);
         * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
         *
         * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
         * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
         * compiled.source;
         * // => function(data) {
         * //   var __t, __p = '';
         * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
         * //   return __p;
         * // }
         *
         * // Use custom template delimiters.
         * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
         * var compiled = _.template('hello {{ user }}!');
         * compiled({ 'user': 'mustache' });
         * // => 'hello mustache!'
         *
         * // Use the `source` property to inline compiled templates for meaningful
         * // line numbers in error messages and stack traces.
         * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
         *   var JST = {\
         *     "main": ' + _.template(mainText).source + '\
         *   };\
         * ');
         */
        function template(string, options, guard) {
            // Based on John Resig's `tmpl` implementation
            // (http://ejohn.org/blog/javascript-micro-templating/)
            // and Laura Doktorova's doT.js (https://github.com/olado/doT).
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
                options = undefined;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, assignInDefaults);
            var imports = assignInWith({}, options.imports, settings.imports, assignInDefaults), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            // Compile the regexp to match each delimiter.
            var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' +
                interpolate.source + '|' +
                (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
                (options.evaluate || reNoMatch).source + '|$', 'g');
            // Use a sourceURL for easier debugging.
            var sourceURL = '//# sourceURL=' +
                ('sourceURL' in options
                    ? options.sourceURL
                    : ('lodash.templateSources[' + (++templateCounter) + ']')) + '\n';
            string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);
                // Escape characters that can't be included in string literals.
                source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
                // Replace delimiters with snippets.
                if (escapeValue) {
                    isEscaping = true;
                    source += "' +\n__e(" + escapeValue + ") +\n'";
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += "';\n" + evaluateValue + ";\n__p += '";
                }
                if (interpolateValue) {
                    source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
                }
                index = offset + match.length;
                // The JS engine embedded in Adobe products needs `match` returned in
                // order to produce the correct `offset` value.
                return match;
            });
            source += "';\n";
            // If `variable` is not specified wrap a with-statement around the generated
            // code to add the data object to the top of the scope chain.
            var variable = options.variable;
            if (!variable) {
                source = 'with (obj) {\n' + source + '\n}\n';
            }
            // Cleanup code by stripping empty strings.
            source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
                .replace(reEmptyStringMiddle, '$1')
                .replace(reEmptyStringTrailing, '$1;');
            // Frame code as the function body.
            source = 'function(' + (variable || 'obj') + ') {\n' +
                (variable
                    ? ''
                    : 'obj || (obj = {});\n') +
                "var __t, __p = ''" +
                (isEscaping
                    ? ', __e = _.escape'
                    : '') +
                (isEvaluating
                    ? ', __j = Array.prototype.join;\n' +
                        "function print() { __p += __j.call(arguments, '') }\n"
                    : ';\n') +
                source +
                'return __p\n}';
            var result = attempt(function () {
                return Function(importsKeys, sourceURL + 'return ' + source)
                    .apply(undefined, importsValues);
            });
            // Provide the compiled function's source by its `toString` method or
            // the `source` property as a convenience for inlining compiled templates.
            result.source = source;
            if (isError(result)) {
                throw result;
            }
            return result;
        }
        /**
         * Converts `string`, as a whole, to lower case just like
         * [String#toLowerCase](https://mdn.io/toLowerCase).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the lower cased string.
         * @example
         *
         * _.toLower('--Foo-Bar--');
         * // => '--foo-bar--'
         *
         * _.toLower('fooBar');
         * // => 'foobar'
         *
         * _.toLower('__FOO_BAR__');
         * // => '__foo_bar__'
         */
        function toLower(value) {
            return toString(value).toLowerCase();
        }
        /**
         * Converts `string`, as a whole, to upper case just like
         * [String#toUpperCase](https://mdn.io/toUpperCase).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the upper cased string.
         * @example
         *
         * _.toUpper('--foo-bar--');
         * // => '--FOO-BAR--'
         *
         * _.toUpper('fooBar');
         * // => 'FOOBAR'
         *
         * _.toUpper('__foo_bar__');
         * // => '__FOO_BAR__'
         */
        function toUpper(value) {
            return toString(value).toUpperCase();
        }
        /**
         * Removes leading and trailing whitespace or specified characters from `string`.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to trim.
         * @param {string} [chars=whitespace] The characters to trim.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {string} Returns the trimmed string.
         * @example
         *
         * _.trim('  abc  ');
         * // => 'abc'
         *
         * _.trim('-_-abc-_-', '_-');
         * // => 'abc'
         *
         * _.map(['  foo  ', '  bar  '], _.trim);
         * // => ['foo', 'bar']
         */
        function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) {
                return string.replace(reTrim, '');
            }
            if (!string || !(chars = baseToString(chars))) {
                return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join('');
        }
        /**
         * Removes trailing whitespace or specified characters from `string`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to trim.
         * @param {string} [chars=whitespace] The characters to trim.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {string} Returns the trimmed string.
         * @example
         *
         * _.trimEnd('  abc  ');
         * // => '  abc'
         *
         * _.trimEnd('-_-abc-_-', '_-');
         * // => '-_-abc'
         */
        function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) {
                return string.replace(reTrimEnd, '');
            }
            if (!string || !(chars = baseToString(chars))) {
                return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join('');
        }
        /**
         * Removes leading whitespace or specified characters from `string`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to trim.
         * @param {string} [chars=whitespace] The characters to trim.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {string} Returns the trimmed string.
         * @example
         *
         * _.trimStart('  abc  ');
         * // => 'abc  '
         *
         * _.trimStart('-_-abc-_-', '_-');
         * // => 'abc-_-'
         */
        function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) {
                return string.replace(reTrimStart, '');
            }
            if (!string || !(chars = baseToString(chars))) {
                return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join('');
        }
        /**
         * Truncates `string` if it's longer than the given maximum string length.
         * The last characters of the truncated string are replaced with the omission
         * string which defaults to "...".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to truncate.
         * @param {Object} [options={}] The options object.
         * @param {number} [options.length=30] The maximum string length.
         * @param {string} [options.omission='...'] The string to indicate text is omitted.
         * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
         * @returns {string} Returns the truncated string.
         * @example
         *
         * _.truncate('hi-diddly-ho there, neighborino');
         * // => 'hi-diddly-ho there, neighbo...'
         *
         * _.truncate('hi-diddly-ho there, neighborino', {
         *   'length': 24,
         *   'separator': ' '
         * });
         * // => 'hi-diddly-ho there,...'
         *
         * _.truncate('hi-diddly-ho there, neighborino', {
         *   'length': 24,
         *   'separator': /,? +/
         * });
         * // => 'hi-diddly-ho there...'
         *
         * _.truncate('hi-diddly-ho there, neighborino', {
         *   'omission': ' [...]'
         * });
         * // => 'hi-diddly-ho there, neig [...]'
         */
        function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
                var separator = 'separator' in options ? options.separator : separator;
                length = 'length' in options ? toInteger(options.length) : length;
                omission = 'omission' in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
                var strSymbols = stringToArray(string);
                strLength = strSymbols.length;
            }
            if (length >= strLength) {
                return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
                return omission;
            }
            var result = strSymbols
                ? castSlice(strSymbols, 0, end).join('')
                : string.slice(0, end);
            if (separator === undefined) {
                return result + omission;
            }
            if (strSymbols) {
                end += (result.length - end);
            }
            if (isRegExp(separator)) {
                if (string.slice(end).search(separator)) {
                    var match, substring = result;
                    if (!separator.global) {
                        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
                    }
                    separator.lastIndex = 0;
                    while ((match = separator.exec(substring))) {
                        var newEnd = match.index;
                    }
                    result = result.slice(0, newEnd === undefined ? end : newEnd);
                }
            }
            else if (string.indexOf(baseToString(separator), end) != end) {
                var index = result.lastIndexOf(separator);
                if (index > -1) {
                    result = result.slice(0, index);
                }
            }
            return result + omission;
        }
        /**
         * The inverse of `_.escape`; this method converts the HTML entities
         * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
         * their corresponding characters.
         *
         * **Note:** No other HTML entities are unescaped. To unescape additional
         * HTML entities use a third-party library like [_he_](https://mths.be/he).
         *
         * @static
         * @memberOf _
         * @since 0.6.0
         * @category String
         * @param {string} [string=''] The string to unescape.
         * @returns {string} Returns the unescaped string.
         * @example
         *
         * _.unescape('fred, barney, &amp; pebbles');
         * // => 'fred, barney, & pebbles'
         */
        function unescape(string) {
            string = toString(string);
            return (string && reHasEscapedHtml.test(string))
                ? string.replace(reEscapedHtml, unescapeHtmlChar)
                : string;
        }
        /**
         * Converts `string`, as space separated words, to upper case.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the upper cased string.
         * @example
         *
         * _.upperCase('--foo-bar');
         * // => 'FOO BAR'
         *
         * _.upperCase('fooBar');
         * // => 'FOO BAR'
         *
         * _.upperCase('__foo_bar__');
         * // => 'FOO BAR'
         */
        var upperCase = createCompounder(function (result, word, index) {
            return result + (index ? ' ' : '') + word.toUpperCase();
        });
        /**
         * Converts the first character of `string` to upper case.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category String
         * @param {string} [string=''] The string to convert.
         * @returns {string} Returns the converted string.
         * @example
         *
         * _.upperFirst('fred');
         * // => 'Fred'
         *
         * _.upperFirst('FRED');
         * // => 'FRED'
         */
        var upperFirst = createCaseFirst('toUpperCase');
        /**
         * Splits `string` into an array of its words.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category String
         * @param {string} [string=''] The string to inspect.
         * @param {RegExp|string} [pattern] The pattern to match words.
         * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
         * @returns {Array} Returns the words of `string`.
         * @example
         *
         * _.words('fred, barney, & pebbles');
         * // => ['fred', 'barney', 'pebbles']
         *
         * _.words('fred, barney, & pebbles', /[^, ]+/g);
         * // => ['fred', 'barney', '&', 'pebbles']
         */
        function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined : pattern;
            if (pattern === undefined) {
                return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
        }
        /*------------------------------------------------------------------------*/
        /**
         * Attempts to invoke `func`, returning either the result or the caught error
         * object. Any additional arguments are provided to `func` when it's invoked.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Util
         * @param {Function} func The function to attempt.
         * @param {...*} [args] The arguments to invoke `func` with.
         * @returns {*} Returns the `func` result or error object.
         * @example
         *
         * // Avoid throwing errors for invalid selectors.
         * var elements = _.attempt(function(selector) {
         *   return document.querySelectorAll(selector);
         * }, '>_>');
         *
         * if (_.isError(elements)) {
         *   elements = [];
         * }
         */
        var attempt = baseRest(function (func, args) {
            try {
                return apply(func, undefined, args);
            }
            catch (e) {
                return isError(e) ? e : new Error(e);
            }
        });
        /**
         * Binds methods of an object to the object itself, overwriting the existing
         * method.
         *
         * **Note:** This method doesn't set the "length" property of bound functions.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {Object} object The object to bind and assign the bound methods to.
         * @param {...(string|string[])} methodNames The object method names to bind.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var view = {
         *   'label': 'docs',
         *   'click': function() {
         *     console.log('clicked ' + this.label);
         *   }
         * };
         *
         * _.bindAll(view, ['click']);
         * jQuery(element).on('click', view.click);
         * // => Logs 'clicked docs' when clicked.
         */
        var bindAll = flatRest(function (object, methodNames) {
            arrayEach(methodNames, function (key) {
                key = toKey(key);
                baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
        });
        /**
         * Creates a function that iterates over `pairs` and invokes the corresponding
         * function of the first predicate to return truthy. The predicate-function
         * pairs are invoked with the `this` binding and arguments of the created
         * function.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {Array} pairs The predicate-function pairs.
         * @returns {Function} Returns the new composite function.
         * @example
         *
         * var func = _.cond([
         *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
         *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
         *   [_.stubTrue,                      _.constant('no match')]
         * ]);
         *
         * func({ 'a': 1, 'b': 2 });
         * // => 'matches A'
         *
         * func({ 'a': 0, 'b': 1 });
         * // => 'matches B'
         *
         * func({ 'a': '1', 'b': '2' });
         * // => 'no match'
         */
        function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function (pair) {
                if (typeof pair[1] != 'function') {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
                return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function (args) {
                var index = -1;
                while (++index < length) {
                    var pair = pairs[index];
                    if (apply(pair[0], this, args)) {
                        return apply(pair[1], this, args);
                    }
                }
            });
        }
        /**
         * Creates a function that invokes the predicate properties of `source` with
         * the corresponding property values of a given object, returning `true` if
         * all predicates return truthy, else `false`.
         *
         * **Note:** The created function is equivalent to `_.conformsTo` with
         * `source` partially applied.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {Object} source The object of property predicates to conform to.
         * @returns {Function} Returns the new spec function.
         * @example
         *
         * var objects = [
         *   { 'a': 2, 'b': 1 },
         *   { 'a': 1, 'b': 2 }
         * ];
         *
         * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
         * // => [{ 'a': 1, 'b': 2 }]
         */
        function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        /**
         * Creates a function that returns `value`.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Util
         * @param {*} value The value to return from the new function.
         * @returns {Function} Returns the new constant function.
         * @example
         *
         * var objects = _.times(2, _.constant({ 'a': 1 }));
         *
         * console.log(objects);
         * // => [{ 'a': 1 }, { 'a': 1 }]
         *
         * console.log(objects[0] === objects[1]);
         * // => true
         */
        function constant(value) {
            return function () {
                return value;
            };
        }
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @static
         * @memberOf _
         * @since 4.14.0
         * @category Util
         * @param {*} value The value to check.
         * @param {*} defaultValue The default value.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * _.defaultTo(1, 10);
         * // => 1
         *
         * _.defaultTo(undefined, 10);
         * // => 10
         */
        function defaultTo(value, defaultValue) {
            return (value == null || value !== value) ? defaultValue : value;
        }
        /**
         * Creates a function that returns the result of invoking the given functions
         * with the `this` binding of the created function, where each successive
         * invocation is supplied the return value of the previous.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Util
         * @param {...(Function|Function[])} [funcs] The functions to invoke.
         * @returns {Function} Returns the new composite function.
         * @see _.flowRight
         * @example
         *
         * function square(n) {
         *   return n * n;
         * }
         *
         * var addSquare = _.flow([_.add, square]);
         * addSquare(1, 2);
         * // => 9
         */
        var flow = createFlow();
        /**
         * This method is like `_.flow` except that it creates a function that
         * invokes the given functions from right to left.
         *
         * @static
         * @since 3.0.0
         * @memberOf _
         * @category Util
         * @param {...(Function|Function[])} [funcs] The functions to invoke.
         * @returns {Function} Returns the new composite function.
         * @see _.flow
         * @example
         *
         * function square(n) {
         *   return n * n;
         * }
         *
         * var addSquare = _.flowRight([square, _.add]);
         * addSquare(1, 2);
         * // => 9
         */
        var flowRight = createFlow(true);
        /**
         * This method returns the first argument it receives.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'a': 1 };
         *
         * console.log(_.identity(object) === object);
         * // => true
         */
        function identity(value) {
            return value;
        }
        /**
         * Creates a function that invokes `func` with the arguments of the created
         * function. If `func` is a property name, the created function returns the
         * property value for a given element. If `func` is an array or object, the
         * created function returns `true` for elements that contain the equivalent
         * source properties, otherwise it returns `false`.
         *
         * @static
         * @since 4.0.0
         * @memberOf _
         * @category Util
         * @param {*} [func=_.identity] The value to convert to a callback.
         * @returns {Function} Returns the callback.
         * @example
         *
         * var users = [
         *   { 'user': 'barney', 'age': 36, 'active': true },
         *   { 'user': 'fred',   'age': 40, 'active': false }
         * ];
         *
         * // The `_.matches` iteratee shorthand.
         * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
         * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
         *
         * // The `_.matchesProperty` iteratee shorthand.
         * _.filter(users, _.iteratee(['user', 'fred']));
         * // => [{ 'user': 'fred', 'age': 40 }]
         *
         * // The `_.property` iteratee shorthand.
         * _.map(users, _.iteratee('user'));
         * // => ['barney', 'fred']
         *
         * // Create custom iteratee shorthands.
         * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
         *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
         *     return func.test(string);
         *   };
         * });
         *
         * _.filter(['abc', 'def'], /ef/);
         * // => ['def']
         */
        function iteratee(func) {
            return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        /**
         * Creates a function that performs a partial deep comparison between a given
         * object and `source`, returning `true` if the given object has equivalent
         * property values, else `false`.
         *
         * **Note:** The created function is equivalent to `_.isMatch` with `source`
         * partially applied.
         *
         * Partial comparisons will match empty array and empty object `source`
         * values against any array or object value, respectively. See `_.isEqual`
         * for a list of supported value comparisons.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Util
         * @param {Object} source The object of property values to match.
         * @returns {Function} Returns the new spec function.
         * @example
         *
         * var objects = [
         *   { 'a': 1, 'b': 2, 'c': 3 },
         *   { 'a': 4, 'b': 5, 'c': 6 }
         * ];
         *
         * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
         * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
         */
        function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        /**
         * Creates a function that performs a partial deep comparison between the
         * value at `path` of a given object to `srcValue`, returning `true` if the
         * object value is equivalent, else `false`.
         *
         * **Note:** Partial comparisons will match empty array and empty object
         * `srcValue` values against any array or object value, respectively. See
         * `_.isEqual` for a list of supported value comparisons.
         *
         * @static
         * @memberOf _
         * @since 3.2.0
         * @category Util
         * @param {Array|string} path The path of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new spec function.
         * @example
         *
         * var objects = [
         *   { 'a': 1, 'b': 2, 'c': 3 },
         *   { 'a': 4, 'b': 5, 'c': 6 }
         * ];
         *
         * _.find(objects, _.matchesProperty('a', 4));
         * // => { 'a': 4, 'b': 5, 'c': 6 }
         */
        function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        /**
         * Creates a function that invokes the method at `path` of a given object.
         * Any additional arguments are provided to the invoked method.
         *
         * @static
         * @memberOf _
         * @since 3.7.0
         * @category Util
         * @param {Array|string} path The path of the method to invoke.
         * @param {...*} [args] The arguments to invoke the method with.
         * @returns {Function} Returns the new invoker function.
         * @example
         *
         * var objects = [
         *   { 'a': { 'b': _.constant(2) } },
         *   { 'a': { 'b': _.constant(1) } }
         * ];
         *
         * _.map(objects, _.method('a.b'));
         * // => [2, 1]
         *
         * _.map(objects, _.method(['a', 'b']));
         * // => [2, 1]
         */
        var method = baseRest(function (path, args) {
            return function (object) {
                return baseInvoke(object, path, args);
            };
        });
        /**
         * The opposite of `_.method`; this method creates a function that invokes
         * the method at a given path of `object`. Any additional arguments are
         * provided to the invoked method.
         *
         * @static
         * @memberOf _
         * @since 3.7.0
         * @category Util
         * @param {Object} object The object to query.
         * @param {...*} [args] The arguments to invoke the method with.
         * @returns {Function} Returns the new invoker function.
         * @example
         *
         * var array = _.times(3, _.constant),
         *     object = { 'a': array, 'b': array, 'c': array };
         *
         * _.map(['a[2]', 'c[0]'], _.methodOf(object));
         * // => [2, 0]
         *
         * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
         * // => [2, 0]
         */
        var methodOf = baseRest(function (object, args) {
            return function (path) {
                return baseInvoke(object, path, args);
            };
        });
        /**
         * Adds all own enumerable string keyed function properties of a source
         * object to the destination object. If `object` is a function, then methods
         * are added to its prototype as well.
         *
         * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
         * avoid conflicts caused by modifying the original.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {Function|Object} [object=lodash] The destination object.
         * @param {Object} source The object of functions to add.
         * @param {Object} [options={}] The options object.
         * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
         * @returns {Function|Object} Returns `object`.
         * @example
         *
         * function vowels(string) {
         *   return _.filter(string, function(v) {
         *     return /[aeiou]/i.test(v);
         *   });
         * }
         *
         * _.mixin({ 'vowels': vowels });
         * _.vowels('fred');
         * // => ['e']
         *
         * _('fred').vowels().value();
         * // => ['e']
         *
         * _.mixin({ 'vowels': vowels }, { 'chain': false });
         * _('fred').vowels();
         * // => ['e']
         */
        function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null &&
                !(isObject(source) && (methodNames.length || !props.length))) {
                options = source;
                source = object;
                object = this;
                methodNames = baseFunctions(source, keys(source));
            }
            var chain = !(isObject(options) && 'chain' in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function (methodName) {
                var func = source[methodName];
                object[methodName] = func;
                if (isFunc) {
                    object.prototype[methodName] = function () {
                        var chainAll = this.__chain__;
                        if (chain || chainAll) {
                            var result = object(this.__wrapped__), actions = result.__actions__ = copyArray(this.__actions__);
                            actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
                            result.__chain__ = chainAll;
                            return result;
                        }
                        return func.apply(object, arrayPush([this.value()], arguments));
                    };
                }
            });
            return object;
        }
        /**
         * Reverts the `_` variable to its previous value and returns a reference to
         * the `lodash` function.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @returns {Function} Returns the `lodash` function.
         * @example
         *
         * var lodash = _.noConflict();
         */
        function noConflict() {
            if (root._ === this) {
                root._ = oldDash;
            }
            return this;
        }
        /**
         * This method returns `undefined`.
         *
         * @static
         * @memberOf _
         * @since 2.3.0
         * @category Util
         * @example
         *
         * _.times(2, _.noop);
         * // => [undefined, undefined]
         */
        function noop() {
            // No operation performed.
        }
        /**
         * Creates a function that gets the argument at index `n`. If `n` is negative,
         * the nth argument from the end is returned.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {number} [n=0] The index of the argument to return.
         * @returns {Function} Returns the new pass-thru function.
         * @example
         *
         * var func = _.nthArg(1);
         * func('a', 'b', 'c', 'd');
         * // => 'b'
         *
         * var func = _.nthArg(-2);
         * func('a', 'b', 'c', 'd');
         * // => 'c'
         */
        function nthArg(n) {
            n = toInteger(n);
            return baseRest(function (args) {
                return baseNth(args, n);
            });
        }
        /**
         * Creates a function that invokes `iteratees` with the arguments it receives
         * and returns their results.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {...(Function|Function[])} [iteratees=[_.identity]]
         *  The iteratees to invoke.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var func = _.over([Math.max, Math.min]);
         *
         * func(1, 2, 3, 4);
         * // => [4, 1]
         */
        var over = createOver(arrayMap);
        /**
         * Creates a function that checks if **all** of the `predicates` return
         * truthy when invoked with the arguments it receives.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {...(Function|Function[])} [predicates=[_.identity]]
         *  The predicates to check.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var func = _.overEvery([Boolean, isFinite]);
         *
         * func('1');
         * // => true
         *
         * func(null);
         * // => false
         *
         * func(NaN);
         * // => false
         */
        var overEvery = createOver(arrayEvery);
        /**
         * Creates a function that checks if **any** of the `predicates` return
         * truthy when invoked with the arguments it receives.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {...(Function|Function[])} [predicates=[_.identity]]
         *  The predicates to check.
         * @returns {Function} Returns the new function.
         * @example
         *
         * var func = _.overSome([Boolean, isFinite]);
         *
         * func('1');
         * // => true
         *
         * func(null);
         * // => true
         *
         * func(NaN);
         * // => false
         */
        var overSome = createOver(arraySome);
        /**
         * Creates a function that returns the value at `path` of a given object.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Util
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new accessor function.
         * @example
         *
         * var objects = [
         *   { 'a': { 'b': 2 } },
         *   { 'a': { 'b': 1 } }
         * ];
         *
         * _.map(objects, _.property('a.b'));
         * // => [2, 1]
         *
         * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
         * // => [1, 2]
         */
        function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        /**
         * The opposite of `_.property`; this method creates a function that returns
         * the value at a given path of `object`.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Util
         * @param {Object} object The object to query.
         * @returns {Function} Returns the new accessor function.
         * @example
         *
         * var array = [0, 1, 2],
         *     object = { 'a': array, 'b': array, 'c': array };
         *
         * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
         * // => [2, 0]
         *
         * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
         * // => [2, 0]
         */
        function propertyOf(object) {
            return function (path) {
                return object == null ? undefined : baseGet(object, path);
            };
        }
        /**
         * Creates an array of numbers (positive and/or negative) progressing from
         * `start` up to, but not including, `end`. A step of `-1` is used if a negative
         * `start` is specified without an `end` or `step`. If `end` is not specified,
         * it's set to `start` with `start` then set to `0`.
         *
         * **Note:** JavaScript follows the IEEE-754 standard for resolving
         * floating-point values which can produce unexpected results.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {number} [start=0] The start of the range.
         * @param {number} end The end of the range.
         * @param {number} [step=1] The value to increment or decrement by.
         * @returns {Array} Returns the range of numbers.
         * @see _.inRange, _.rangeRight
         * @example
         *
         * _.range(4);
         * // => [0, 1, 2, 3]
         *
         * _.range(-4);
         * // => [0, -1, -2, -3]
         *
         * _.range(1, 5);
         * // => [1, 2, 3, 4]
         *
         * _.range(0, 20, 5);
         * // => [0, 5, 10, 15]
         *
         * _.range(0, -4, -1);
         * // => [0, -1, -2, -3]
         *
         * _.range(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.range(0);
         * // => []
         */
        var range = createRange();
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {number} [start=0] The start of the range.
         * @param {number} end The end of the range.
         * @param {number} [step=1] The value to increment or decrement by.
         * @returns {Array} Returns the range of numbers.
         * @see _.inRange, _.range
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        var rangeRight = createRange(true);
        /**
         * This method returns a new empty array.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {Array} Returns the new empty array.
         * @example
         *
         * var arrays = _.times(2, _.stubArray);
         *
         * console.log(arrays);
         * // => [[], []]
         *
         * console.log(arrays[0] === arrays[1]);
         * // => false
         */
        function stubArray() {
            return [];
        }
        /**
         * This method returns `false`.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {boolean} Returns `false`.
         * @example
         *
         * _.times(2, _.stubFalse);
         * // => [false, false]
         */
        function stubFalse() {
            return false;
        }
        /**
         * This method returns a new empty object.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {Object} Returns the new empty object.
         * @example
         *
         * var objects = _.times(2, _.stubObject);
         *
         * console.log(objects);
         * // => [{}, {}]
         *
         * console.log(objects[0] === objects[1]);
         * // => false
         */
        function stubObject() {
            return {};
        }
        /**
         * This method returns an empty string.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {string} Returns the empty string.
         * @example
         *
         * _.times(2, _.stubString);
         * // => ['', '']
         */
        function stubString() {
            return '';
        }
        /**
         * This method returns `true`.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {boolean} Returns `true`.
         * @example
         *
         * _.times(2, _.stubTrue);
         * // => [true, true]
         */
        function stubTrue() {
            return true;
        }
        /**
         * Invokes the iteratee `n` times, returning an array of the results of
         * each invocation. The iteratee is invoked with one argument; (index).
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         * @example
         *
         * _.times(3, String);
         * // => ['0', '1', '2']
         *
         *  _.times(4, _.constant(0));
         * // => [0, 0, 0, 0]
         */
        function times(n, iteratee) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) {
                return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee = getIteratee(iteratee);
            n -= MAX_ARRAY_LENGTH;
            var result = baseTimes(length, iteratee);
            while (++index < n) {
                iteratee(index);
            }
            return result;
        }
        /**
         * Converts `value` to a property path array.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {*} value The value to convert.
         * @returns {Array} Returns the new property path array.
         * @example
         *
         * _.toPath('a.b.c');
         * // => ['a', 'b', 'c']
         *
         * _.toPath('a[0].b.c');
         * // => ['a', '0', 'b', 'c']
         */
        function toPath(value) {
            if (isArray(value)) {
                return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        /**
         * Generates a unique ID. If `prefix` is given, the ID is appended to it.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {string} [prefix=''] The value to prefix the ID with.
         * @returns {string} Returns the unique ID.
         * @example
         *
         * _.uniqueId('contact_');
         * // => 'contact_104'
         *
         * _.uniqueId();
         * // => '105'
         */
        function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
        }
        /*------------------------------------------------------------------------*/
        /**
         * Adds two numbers.
         *
         * @static
         * @memberOf _
         * @since 3.4.0
         * @category Math
         * @param {number} augend The first number in an addition.
         * @param {number} addend The second number in an addition.
         * @returns {number} Returns the total.
         * @example
         *
         * _.add(6, 4);
         * // => 10
         */
        var add = createMathOperation(function (augend, addend) {
            return augend + addend;
        }, 0);
        /**
         * Computes `number` rounded up to `precision`.
         *
         * @static
         * @memberOf _
         * @since 3.10.0
         * @category Math
         * @param {number} number The number to round up.
         * @param {number} [precision=0] The precision to round up to.
         * @returns {number} Returns the rounded up number.
         * @example
         *
         * _.ceil(4.006);
         * // => 5
         *
         * _.ceil(6.004, 2);
         * // => 6.01
         *
         * _.ceil(6040, -2);
         * // => 6100
         */
        var ceil = createRound('ceil');
        /**
         * Divide two numbers.
         *
         * @static
         * @memberOf _
         * @since 4.7.0
         * @category Math
         * @param {number} dividend The first number in a division.
         * @param {number} divisor The second number in a division.
         * @returns {number} Returns the quotient.
         * @example
         *
         * _.divide(6, 4);
         * // => 1.5
         */
        var divide = createMathOperation(function (dividend, divisor) {
            return dividend / divisor;
        }, 1);
        /**
         * Computes `number` rounded down to `precision`.
         *
         * @static
         * @memberOf _
         * @since 3.10.0
         * @category Math
         * @param {number} number The number to round down.
         * @param {number} [precision=0] The precision to round down to.
         * @returns {number} Returns the rounded down number.
         * @example
         *
         * _.floor(4.006);
         * // => 4
         *
         * _.floor(0.046, 2);
         * // => 0.04
         *
         * _.floor(4060, -2);
         * // => 4000
         */
        var floor = createRound('floor');
        /**
         * Computes the maximum value of `array`. If `array` is empty or falsey,
         * `undefined` is returned.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Math
         * @param {Array} array The array to iterate over.
         * @returns {*} Returns the maximum value.
         * @example
         *
         * _.max([4, 2, 8, 6]);
         * // => 8
         *
         * _.max([]);
         * // => undefined
         */
        function max(array) {
            return (array && array.length)
                ? baseExtremum(array, identity, baseGt)
                : undefined;
        }
        /**
         * This method is like `_.max` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Math
         * @param {Array} array The array to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {*} Returns the maximum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.maxBy(objects, function(o) { return o.n; });
         * // => { 'n': 2 }
         *
         * // The `_.property` iteratee shorthand.
         * _.maxBy(objects, 'n');
         * // => { 'n': 2 }
         */
        function maxBy(array, iteratee) {
            return (array && array.length)
                ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
                : undefined;
        }
        /**
         * Computes the mean of the values in `array`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Math
         * @param {Array} array The array to iterate over.
         * @returns {number} Returns the mean.
         * @example
         *
         * _.mean([4, 2, 8, 6]);
         * // => 5
         */
        function mean(array) {
            return baseMean(array, identity);
        }
        /**
         * This method is like `_.mean` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the value to be averaged.
         * The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.7.0
         * @category Math
         * @param {Array} array The array to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {number} Returns the mean.
         * @example
         *
         * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
         *
         * _.meanBy(objects, function(o) { return o.n; });
         * // => 5
         *
         * // The `_.property` iteratee shorthand.
         * _.meanBy(objects, 'n');
         * // => 5
         */
        function meanBy(array, iteratee) {
            return baseMean(array, getIteratee(iteratee, 2));
        }
        /**
         * Computes the minimum value of `array`. If `array` is empty or falsey,
         * `undefined` is returned.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Math
         * @param {Array} array The array to iterate over.
         * @returns {*} Returns the minimum value.
         * @example
         *
         * _.min([4, 2, 8, 6]);
         * // => 2
         *
         * _.min([]);
         * // => undefined
         */
        function min(array) {
            return (array && array.length)
                ? baseExtremum(array, identity, baseLt)
                : undefined;
        }
        /**
         * This method is like `_.min` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Math
         * @param {Array} array The array to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {*} Returns the minimum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.minBy(objects, function(o) { return o.n; });
         * // => { 'n': 1 }
         *
         * // The `_.property` iteratee shorthand.
         * _.minBy(objects, 'n');
         * // => { 'n': 1 }
         */
        function minBy(array, iteratee) {
            return (array && array.length)
                ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
                : undefined;
        }
        /**
         * Multiply two numbers.
         *
         * @static
         * @memberOf _
         * @since 4.7.0
         * @category Math
         * @param {number} multiplier The first number in a multiplication.
         * @param {number} multiplicand The second number in a multiplication.
         * @returns {number} Returns the product.
         * @example
         *
         * _.multiply(6, 4);
         * // => 24
         */
        var multiply = createMathOperation(function (multiplier, multiplicand) {
            return multiplier * multiplicand;
        }, 1);
        /**
         * Computes `number` rounded to `precision`.
         *
         * @static
         * @memberOf _
         * @since 3.10.0
         * @category Math
         * @param {number} number The number to round.
         * @param {number} [precision=0] The precision to round to.
         * @returns {number} Returns the rounded number.
         * @example
         *
         * _.round(4.006);
         * // => 4
         *
         * _.round(4.006, 2);
         * // => 4.01
         *
         * _.round(4060, -2);
         * // => 4100
         */
        var round = createRound('round');
        /**
         * Subtract two numbers.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Math
         * @param {number} minuend The first number in a subtraction.
         * @param {number} subtrahend The second number in a subtraction.
         * @returns {number} Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        var subtract = createMathOperation(function (minuend, subtrahend) {
            return minuend - subtrahend;
        }, 0);
        /**
         * Computes the sum of the values in `array`.
         *
         * @static
         * @memberOf _
         * @since 3.4.0
         * @category Math
         * @param {Array} array The array to iterate over.
         * @returns {number} Returns the sum.
         * @example
         *
         * _.sum([4, 2, 8, 6]);
         * // => 20
         */
        function sum(array) {
            return (array && array.length)
                ? baseSum(array, identity)
                : 0;
        }
        /**
         * This method is like `_.sum` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the value to be summed.
         * The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Math
         * @param {Array} array The array to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {number} Returns the sum.
         * @example
         *
         * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
         *
         * _.sumBy(objects, function(o) { return o.n; });
         * // => 20
         *
         * // The `_.property` iteratee shorthand.
         * _.sumBy(objects, 'n');
         * // => 20
         */
        function sumBy(array, iteratee) {
            return (array && array.length)
                ? baseSum(array, getIteratee(iteratee, 2))
                : 0;
        }
        /*------------------------------------------------------------------------*/
        // Add methods that return wrapped values in chain sequences.
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        // Add aliases.
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        // Add methods to `lodash.prototype`.
        mixin(lodash, lodash);
        /*------------------------------------------------------------------------*/
        // Add methods that return unwrapped values in chain sequences.
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        // Add aliases.
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, (function () {
            var source = {};
            baseForOwn(lodash, function (func, methodName) {
                if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                    source[methodName] = func;
                }
            });
            return source;
        }()), { 'chain': false });
        /*------------------------------------------------------------------------*/
        /**
         * The semantic version number.
         *
         * @static
         * @memberOf _
         * @type {string}
         */
        lodash.VERSION = VERSION;
        // Assign default placeholders.
        arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (methodName) {
            lodash[methodName].placeholder = lodash;
        });
        // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
        arrayEach(['drop', 'take'], function (methodName, index) {
            LazyWrapper.prototype[methodName] = function (n) {
                var filtered = this.__filtered__;
                if (filtered && !index) {
                    return new LazyWrapper(this);
                }
                n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                var result = this.clone();
                if (filtered) {
                    result.__takeCount__ = nativeMin(n, result.__takeCount__);
                }
                else {
                    result.__views__.push({
                        'size': nativeMin(n, MAX_ARRAY_LENGTH),
                        'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
                    });
                }
                return result;
            };
            LazyWrapper.prototype[methodName + 'Right'] = function (n) {
                return this.reverse()[methodName](n).reverse();
            };
        });
        // Add `LazyWrapper` methods that accept an `iteratee` value.
        arrayEach(['filter', 'map', 'takeWhile'], function (methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function (iteratee) {
                var result = this.clone();
                result.__iteratees__.push({
                    'iteratee': getIteratee(iteratee, 3),
                    'type': type
                });
                result.__filtered__ = result.__filtered__ || isFilter;
                return result;
            };
        });
        // Add `LazyWrapper` methods for `_.head` and `_.last`.
        arrayEach(['head', 'last'], function (methodName, index) {
            var takeName = 'take' + (index ? 'Right' : '');
            LazyWrapper.prototype[methodName] = function () {
                return this[takeName](1).value()[0];
            };
        });
        // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
        arrayEach(['initial', 'tail'], function (methodName, index) {
            var dropName = 'drop' + (index ? '' : 'Right');
            LazyWrapper.prototype[methodName] = function () {
                return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
        });
        LazyWrapper.prototype.compact = function () {
            return this.filter(identity);
        };
        LazyWrapper.prototype.find = function (predicate) {
            return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function (predicate) {
            return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function (path, args) {
            if (typeof path == 'function') {
                return new LazyWrapper(this);
            }
            return this.map(function (value) {
                return baseInvoke(value, path, args);
            });
        });
        LazyWrapper.prototype.reject = function (predicate) {
            return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function (start, end) {
            start = toInteger(start);
            var result = this;
            if (result.__filtered__ && (start > 0 || end < 0)) {
                return new LazyWrapper(result);
            }
            if (start < 0) {
                result = result.takeRight(-start);
            }
            else if (start) {
                result = result.drop(start);
            }
            if (end !== undefined) {
                end = toInteger(end);
                result = end < 0 ? result.dropRight(-end) : result.take(end - start);
            }
            return result;
        };
        LazyWrapper.prototype.takeRightWhile = function (predicate) {
            return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function () {
            return this.take(MAX_ARRAY_LENGTH);
        };
        // Add `LazyWrapper` methods to `lodash.prototype`.
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
                return;
            }
            lodash.prototype[methodName] = function () {
                var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value);
                var interceptor = function (value) {
                    var result = lodashFunc.apply(lodash, arrayPush([value], args));
                    return (isTaker && chainAll) ? result[0] : result;
                };
                if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
                    // Avoid lazy use if the iteratee has a "length" value other than `1`.
                    isLazy = useLazy = false;
                }
                var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
                if (!retUnwrapped && useLazy) {
                    value = onlyLazy ? value : new LazyWrapper(this);
                    var result = func.apply(value, args);
                    result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
                    return new LodashWrapper(result, chainAll);
                }
                if (isUnwrapped && onlyLazy) {
                    return func.apply(this, args);
                }
                result = this.thru(interceptor);
                return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
            };
        });
        // Add `Array` methods to `lodash.prototype`.
        arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru', retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function () {
                var args = arguments;
                if (retUnwrapped && !this.__chain__) {
                    var value = this.value();
                    return func.apply(isArray(value) ? value : [], args);
                }
                return this[chainName](function (value) {
                    return func.apply(isArray(value) ? value : [], args);
                });
            };
        });
        // Map minified method names to their real names.
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
                var key = (lodashFunc.name + ''), names = realNames[key] || (realNames[key] = []);
                names.push({ 'name': methodName, 'func': lodashFunc });
            }
        });
        realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
                'name': 'wrapper',
                'func': undefined
            }];
        // Add methods to `LazyWrapper`.
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        // Add chain sequence methods to the `lodash` wrapper.
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        // Add lazy aliases.
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
    });
    /*--------------------------------------------------------------------------*/
    // Export lodash.
    var _ = runInContext();
    // Some AMD build optimizers, like r.js, check for condition patterns like:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        // Expose Lodash on the global object to prevent errors when Lodash is
        // loaded by a script tag in the presence of an AMD loader.
        // See http://requirejs.org/docs/errors.html#mismatch for more details.
        // Use `_.noConflict` to remove Lodash from the global object.
        root._ = _;
        // Define as an anonymous module so, through path mapping, it can be
        // referenced as the "underscore" module.
        define(function () {
            return _;
        });
    }
    else if (freeModule) {
        // Export for Node.js.
        (freeModule.exports = _)._ = _;
        // Export for CommonJS support.
        freeExports._ = _;
    }
    else {
        // Export to the global object.
        root._ = _;
    }
}.call(this));
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B_DEBUG = {
                name: 'PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B_DEBUG',
                displayName: 'PowerBIVisuals',
                class: 'Visual',
                version: '1.0.0',
                apiVersion: '1.2.0',
                create: function (options) { return new powerbi.extensibility.visual.PBI_CV_DB82D0E6_E5C1_4E34_884B_CAD22AFB245B.Visual(options); },
                custom: true
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
//# sourceMappingURL=visual.js.map