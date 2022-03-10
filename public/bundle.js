// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var S, f = globalThis.trustedTypes, U = f ? f.createPolicy("lit-html", {
    createHTML: (h)=>h
}) : void 0, _ = `lit$${(Math.random() + "").slice(9)}$`, I = "?" + _, J = `<${I}>`, y = document, C = (h = "")=>y.createComment(h)
, b = (h)=>h === null || typeof h != "object" && typeof h != "function"
, Z = Array.isArray, j = (h)=>{
    var t;
    return Z(h) || typeof ((t = h) === null || t === void 0 ? void 0 : t[Symbol.iterator]) == "function";
}, N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, k = /-->/g, W = />/g, v = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, D = /'/g, O = /"/g, F = /^(?:script|style|textarea|title)$/i, q = (h)=>(t, ...e)=>({
            _$litType$: h,
            strings: t,
            values: e
        })
, Q = q(1), X = q(2), T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), z = new WeakMap, Y = (h, t, e)=>{
    var i, s;
    let o = (i = e?.renderBefore) !== null && i !== void 0 ? i : t, n = o._$litPart$;
    if (n === void 0) {
        let d = (s = e?.renderBefore) !== null && s !== void 0 ? s : null;
        o._$litPart$ = n = new g(t.insertBefore(C(), d), d, void 0, e ?? {});
    }
    return n._$AI(h), n;
}, m = y.createTreeWalker(y, 129, null, !1), G = (h, t)=>{
    let e = h.length - 1, i = [], s, o = t === 2 ? "<svg>" : "", n = N;
    for(let l = 0; l < e; l++){
        let r = h[l], c, a, $ = -1, u = 0;
        for(; u < r.length && (n.lastIndex = u, a = n.exec(r), a !== null);)u = n.lastIndex, n === N ? a[1] === "!--" ? n = k : a[1] !== void 0 ? n = W : a[2] !== void 0 ? (F.test(a[2]) && (s = RegExp("</" + a[2], "g")), n = v) : a[3] !== void 0 && (n = v) : n === v ? a[0] === ">" ? (n = s ?? N, $ = -1) : a[1] === void 0 ? $ = -2 : ($ = n.lastIndex - a[2].length, c = a[1], n = a[3] === void 0 ? v : a[3] === '"' ? O : D) : n === O || n === D ? n = v : n === k || n === W ? n = N : (n = v, s = void 0);
        let w = n === v && h[l + 1].startsWith("/>") ? " " : "";
        o += n === N ? r + J : $ >= 0 ? (i.push(c), r.slice(0, $) + "$lit$" + r.slice($) + _ + w) : r + _ + ($ === -2 ? (i.push(void 0), l) : w);
    }
    let d = o + (h[e] || "<?>") + (t === 2 ? "</svg>" : "");
    if (!Array.isArray(h) || !h.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        U !== void 0 ? U.createHTML(d) : d,
        i
    ];
}, H = class {
    constructor({ strings: t , _$litType$: e  }, i){
        let s;
        this.parts = [];
        let o = 0, n = 0, d = t.length - 1, l = this.parts, [r, c] = G(t, e);
        if (this.el = H.createElement(r, i), m.currentNode = this.el.content, e === 2) {
            let a = this.el.content, $ = a.firstChild;
            $.remove(), a.append(...$.childNodes);
        }
        for(; (s = m.nextNode()) !== null && l.length < d;){
            if (s.nodeType === 1) {
                if (s.hasAttributes()) {
                    let a = [];
                    for (let $ of s.getAttributeNames())if ($.endsWith("$lit$") || $.startsWith(_)) {
                        let u = c[n++];
                        if (a.push($), u !== void 0) {
                            let w = s.getAttribute(u.toLowerCase() + "$lit$").split(_), M = /([.?@])?(.*)/.exec(u);
                            l.push({
                                type: 1,
                                index: o,
                                name: M[2],
                                strings: w,
                                ctor: M[1] === "." ? E : M[1] === "?" ? P : M[1] === "@" ? L : x
                            });
                        } else l.push({
                            type: 6,
                            index: o
                        });
                    }
                    for (let $1 of a)s.removeAttribute($1);
                }
                if (F.test(s.tagName)) {
                    let a = s.textContent.split(_), $ = a.length - 1;
                    if ($ > 0) {
                        s.textContent = f ? f.emptyScript : "";
                        for(let u = 0; u < $; u++)s.append(a[u], C()), m.nextNode(), l.push({
                            type: 2,
                            index: ++o
                        });
                        s.append(a[$], C());
                    }
                }
            } else if (s.nodeType === 8) if (s.data === I) l.push({
                type: 2,
                index: o
            });
            else {
                let a = -1;
                for(; (a = s.data.indexOf(_, a + 1)) !== -1;)l.push({
                    type: 7,
                    index: o
                }), a += _.length - 1;
            }
            o++;
        }
    }
    static createElement(t, e) {
        let i = y.createElement("template");
        return i.innerHTML = t, i;
    }
};
function p(h, t, e = h, i) {
    var s, o, n, d;
    if (t === T) return t;
    let l = i !== void 0 ? (s = e._$Cl) === null || s === void 0 ? void 0 : s[i] : e._$Cu, r = b(t) ? void 0 : t._$litDirective$;
    return l?.constructor !== r && ((o = l?._$AO) === null || o === void 0 || o.call(l, !1), r === void 0 ? l = void 0 : (l = new r(h), l._$AT(h, e, i)), i !== void 0 ? ((n = (d = e)._$Cl) !== null && n !== void 0 ? n : d._$Cl = [])[i] = l : e._$Cu = l), l !== void 0 && (t = p(h, l._$AS(h, t.values), l, i)), t;
}
var B = class {
    constructor(t, e){
        this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t) {
        var e;
        let { el: { content: i  } , parts: s  } = this._$AD, o = ((e = t?.creationScope) !== null && e !== void 0 ? e : y).importNode(i, !0);
        m.currentNode = o;
        let n = m.nextNode(), d = 0, l = 0, r = s[0];
        for(; r !== void 0;){
            if (d === r.index) {
                let c;
                r.type === 2 ? c = new g(n, n.nextSibling, this, t) : r.type === 1 ? c = new r.ctor(n, r.name, r.strings, this, t) : r.type === 6 && (c = new R(n, this, t)), this.v.push(c), r = s[++l];
            }
            d !== r?.index && (n = m.nextNode(), d++);
        }
        return o;
    }
    m(t) {
        let e = 0;
        for (let i of this.v)i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
    }
}, g = class {
    constructor(t, e, i, s){
        var o;
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cg = (o = s?.isConnected) === null || o === void 0 || o;
    }
    get _$AU() {
        var t, e;
        return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cg;
    }
    get parentNode() {
        let t = this._$AA.parentNode, e = this._$AM;
        return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, e = this) {
        t = p(this, t, e), b(t) ? t === A || t == null || t === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this.$(t) : t._$litType$ !== void 0 ? this.T(t) : t.nodeType !== void 0 ? this.k(t) : j(t) ? this.S(t) : this.$(t);
    }
    A(t, e = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, e);
    }
    k(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.A(t));
    }
    $(t) {
        this._$AH !== A && b(this._$AH) ? this._$AA.nextSibling.data = t : this.k(y.createTextNode(t)), this._$AH = t;
    }
    T(t) {
        var e;
        let { values: i , _$litType$: s  } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = H.createElement(s.h, this.options)), s);
        if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === o) this._$AH.m(i);
        else {
            let n = new B(o, this), d = n.p(this.options);
            n.m(i), this.k(d), this._$AH = n;
        }
    }
    _$AC(t) {
        let e = z.get(t.strings);
        return e === void 0 && z.set(t.strings, e = new H(t)), e;
    }
    S(t) {
        Z(this._$AH) || (this._$AH = [], this._$AR());
        let e = this._$AH, i, s = 0;
        for (let o of t)s === e.length ? e.push(i = new g(this.A(C()), this.A(C()), this, this.options)) : i = e[s], i._$AI(o), s++;
        s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
    }
    _$AR(t = this._$AA.nextSibling, e) {
        var i;
        for((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB;){
            let s = t.nextSibling;
            t.remove(), t = s;
        }
    }
    setConnected(t) {
        var e;
        this._$AM === void 0 && (this._$Cg = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
    }
}, x = class {
    constructor(t, e, i, s, o){
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = A;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, e = this, i, s) {
        let o = this.strings, n = !1;
        if (o === void 0) t = p(this, t, e, 0), n = !b(t) || t !== this._$AH && t !== T, n && (this._$AH = t);
        else {
            let d = t, l, r;
            for(t = o[0], l = 0; l < o.length - 1; l++)r = p(this, d[i + l], e, l), r === T && (r = this._$AH[l]), n || (n = !b(r) || r !== this._$AH[l]), r === A ? t = A : t !== A && (t += (r ?? "") + o[l + 1]), this._$AH[l] = r;
        }
        n && !s && this.C(t);
    }
    C(t) {
        t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}, E = class extends x {
    constructor(){
        super(...arguments), this.type = 3;
    }
    C(t) {
        this.element[this.name] = t === A ? void 0 : t;
    }
}, K = f ? f.emptyScript : "", P = class extends x {
    constructor(){
        super(...arguments), this.type = 4;
    }
    C(t) {
        t && t !== A ? this.element.setAttribute(this.name, K) : this.element.removeAttribute(this.name);
    }
}, L = class extends x {
    constructor(t, e, i, s, o){
        super(t, e, i, s, o), this.type = 5;
    }
    _$AI(t, e = this) {
        var i;
        if ((t = (i = p(this, t, e, 0)) !== null && i !== void 0 ? i : A) === T) return;
        let s = this._$AH, o = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== A && (s === A || o);
        o && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var e, i;
        typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
    }
}, R = class {
    constructor(t, e, i){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        p(this, t);
    }
}, V = window.litHtmlPolyfillSupport;
V?.(H, g), ((S = globalThis.litHtmlVersions) !== null && S !== void 0 ? S : globalThis.litHtmlVersions = []).push("2.2.0");
Object.prototype.hasOwnProperty;
function apply1(a, fn) {
    return fn(a);
}
function wait(ms) {
    return new Promise((res)=>setTimeout(res, ms)
    );
}
function pipe(a, ...fns) {
    return fns.reduce(apply1, a);
}
function createDo(M) {
    return {
        Do: ()=>M.of({})
        ,
        bindTo: (name)=>M.map((a)=>({
                    [name]: a
                })
            )
        ,
        bind: (name, fati)=>M.chain((a)=>pipe(a, fati, M.map((b1)=>({
                        ...a,
                        [name]: b1
                    })
                ))
            )
    };
}
function _loopTuple(len, init = []) {
    return len === 0 ? init : (t)=>_loopTuple(len - 1, [
            ...init,
            t
        ])
    ;
}
function _loopRecord(keys, i = 0, init = {}) {
    return i === keys.length ? init : (a)=>_loopRecord(keys, i + 1, {
            ...init,
            [keys[i]]: a
        })
    ;
}
function createSequenceTuple(A1) {
    const reducer = (acc, cur)=>pipe(cur, A1.ap(acc))
    ;
    return (...r)=>{
        const [head, ...tail] = r;
        return tail.reduce(reducer, pipe(head, A1.map(_loopTuple(r.length))));
    };
}
function createSequenceStruct(A2) {
    return (r)=>{
        const keys = Object.keys(r).sort();
        const [head, ...tail] = keys;
        return tail.reduce((f1, key)=>pipe(r[key], A2.ap(f1))
        , pipe(r[head], A2.map(_loopRecord(keys))));
    };
}
const isAsyncIterator = (o)=>Object.hasOwn(o, Symbol.asyncIterator)
;
function make(fa) {
    if (isAsyncIterator(fa)) {
        return fa;
    }
    return {
        [Symbol.asyncIterator]: fa
    };
}
function of(...a) {
    return make(async function*() {
        let index = -1;
        const length = a.length;
        while(++index < length){
            yield a[index];
        }
    });
}
function ap(tfai) {
    return (ta)=>make(async function*() {
            for await (const fai of tfai){
                for await (const a of ta){
                    yield fai(a);
                }
            }
        })
    ;
}
function map(fai) {
    return (ta)=>make(async function*() {
            for await (const a of ta){
                yield await fai(a);
            }
        })
    ;
}
function join(tta) {
    return make(async function*() {
        for await (const ta of tta){
            for await (const a of ta){
                yield a;
            }
        }
    });
}
function chain(fati) {
    return (ta)=>make(async function*() {
            for await (const a of ta){
                for await (const i of fati(a)){
                    yield i;
                }
            }
        })
    ;
}
function forEach(onValue, onDone = ()=>{}) {
    return async (ta)=>{
        for await (const a of ta){
            await onValue(a);
        }
        onDone();
    };
}
function take(n) {
    return (ta)=>make(async function*() {
            let count = Math.floor(n);
            for await (const a of ta){
                if (count-- <= 0) {
                    return;
                }
                yield a;
            }
        })
    ;
}
const Apply = {
    ap,
    map
};
const Monad = {
    of,
    ap,
    map,
    join,
    chain
};
const { Do , bind , bindTo  } = createDo(Monad);
createSequenceTuple(Apply);
createSequenceStruct(Apply);
const helloTemplate = (text)=>Q`<h1>${text}!</h1>`
;
Y(helloTemplate("Hello World"), document.body);
const counter = (ms)=>make(async function*() {
        let count = 0;
        while(true){
            await wait(ms);
            yield ++count;
        }
    })
;
await pipe(counter(1000), take(10), forEach((value)=>{
    Y(helloTemplate(`Count ${value}`), document.body);
}, ()=>{
    Y(helloTemplate(`Done!`), document.body);
}));

