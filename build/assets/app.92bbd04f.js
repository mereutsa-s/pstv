var Yl = Object.defineProperty;
var Wl = (n, e, t) =>
  e in n
    ? Yl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var me = (n, e, t) => (Wl(n, typeof e != "symbol" ? e + "" : e, t), t);
import { c as ws, g as Xl, S as Ul } from "./gift-service.72b5ac9d.js";
class Kl {
  constructor() {
    me(this, "header");
    me(this, "links");
    me(this, "rootEl");
    me(this, "DEBOUNCE_TIME", 50);
    me(this, "timeoutId", null);
    (this.header = document.querySelector(".js-header")),
      (this.links = Array.from(
        this.header.querySelectorAll(".js-header-link")
      )),
      (this.rootEl = document.querySelector(".js-root")),
      this.init();
  }
  init() {
    this.initEvents();
    const e = location.hash;
    if (e) {
      const t = document.getElementById(`${e.replace("#", "")}-link`);
      this.setActiveLink(t);
    }
  }
  setActiveLink(e) {
    e &&
      (this.links.forEach((t) => t.classList.remove("active")),
      e.classList.add("active"));
  }
  scrollHandler() {
    this.timeoutId && clearTimeout(this.timeoutId),
      (this.timeoutId = setTimeout(() => {
        window.scrollY
          ? (this.header.classList.add("fixed"),
            this.rootEl.classList.add("fixed-header"))
          : (this.header.classList.remove("fixed"),
            this.rootEl.classList.remove("fixed-header"));
      }, this.DEBOUNCE_TIME));
  }
  initEvents() {
    this.links.forEach((e) => {
      e.addEventListener("click", () => this.setActiveLink(e));
    }),
      document.addEventListener("scroll", this.scrollHandler.bind(this));
  }
}
const Ql = new Kl();
class Zl {
  constructor() {
    me(this, "promoCode");
    me(this, "promoIsValid");
    (this.games = { top: [], new: [] }),
      (this.selectedGame = null),
      this.init();
  }
  init() {}
  buildGamesList() {
    var q;
    const e = document.querySelector(".js-games-list"),
      t = e.querySelector(".js-top-games"),
      i = e.querySelector(".js-new-games"),
      r = e.querySelector(".js-selected-game"),
      s = r.querySelector(".js-title"),
      o = r.querySelector(".js-description"),
      a = r.querySelector(".js-time"),
      l = r.querySelector(".js-age"),
      u = r.querySelector(".js-players"),
      c = r.querySelector(".js-selected-game-bg"),
      h = r.querySelector(".js-trailer-btn"),
      f = r.querySelector(".js-play-btn"),
      d = t.getElementsByTagName("li"),
      m = i.getElementsByTagName("li"),
      p = document.querySelector(".js-game-selected-popup"),
      g = p.querySelector(".js-close-btn"),
      _ = p.querySelector(".js-play-btn"),
      v = p.querySelector(".js-game-name"),
      b = p.querySelector(".js-game-title"),
      T = p.querySelector(".js-game-img"),
      C = T.querySelector("img"),
      E = p.querySelector(".js-time"),
      x = p.querySelector(".js-age"),
      P = p.querySelector(".js-players"),
      M = p.querySelector(".js-description"),
      S = p.querySelector(".js-trailer-btn");
    this.selectedGame = this.games.top.length
      ? this.games.top[0]
      : (q = this.games.new[0]) != null
      ? q
      : null;
    const L = () => {
        (p.style.display = "none"), document.body.classList.remove("fixed");
        const R = document.getElementById("games").getBoundingClientRect().top;
        window.scrollTo({ top: R, behavior: "smooth" });
      },
      k = (O) => {
        if (!O) return;
        O.darkText
          ? document.documentElement.style.setProperty(
              "--game-description-color",
              "#000"
            )
          : document.documentElement.style.setProperty(
              "--game-description-color",
              "#fff"
            ),
          O.trailerVideo
            ? ((h.style.display = "flex"),
              (S.style.display = "flex"),
              (h.dataset.video = O.trailerVideo.url),
              (S.dataset.video = O.trailerVideo.url))
            : ((h.style.display = "none"),
              (S.style.display = "none"),
              (h.dataset.video = ""),
              (S.dataset.video = ""));
        const R = c.querySelector(".js-video-banner");
        O.galleryBannerVideo && window.innerWidth >= 768
          ? ((R.src = O.galleryBannerVideo.url),
            (R.style.display = "block"),
            R.play())
          : (R.pause(), (R.style.display = "none")),
          O.galleryBannerImage
            ? (c.style.backgroundImage = `url(${O.galleryBannerImage.url})`)
            : (c.style.backgroundImage = ""),
          O.previewImage
            ? ((T.style.display = "block"), (C.src = O.previewImage.url))
            : ((T.style.display = "none"), (C.src = ""));
        const $ = s.querySelector(".js-image"),
          y = s.querySelector(".js-text");
        (v.innerHTML = O.name),
          (b.innerHTML = O.name),
          O.logoImage
            ? (($.src = O.logoImage.url),
              (y.style.display = "none"),
              ($.style.display = "block"))
            : ((y.innerHTML = O.name),
              (y.style.display = "block"),
              ($.style.display = "none")),
          O.description
            ? ((o.innerHTML = O.description),
              (M.innerHTML = O.description),
              (o.style.display = "block"),
              (M.style.display = "block"))
            : ((o.innerHTML = ""),
              (M.innerHTML = ""),
              (o.style.display = "none"),
              (M.style.display = "none"));
        const te = a.querySelector(".js-text"),
          he = E.querySelector(".js-text");
        O.averageGameTime
          ? ((te.innerHTML = O.averageGameTime),
            (he.innerHTML = O.averageGameTime),
            (a.style.display = "flex"),
            (he.style.display = "flex"))
          : ((te.innerHTML = ""),
            (he.innerHTML = ""),
            (a.style.display = "none"),
            (he.style.display = "none"));
        const st = l.querySelector(".js-text"),
          ie = x.querySelector(".js-text");
        O.age
          ? ((st.innerHTML = O.age),
            (ie.innerHTML = O.age),
            (l.style.display = "flex"),
            (ie.style.display = "flex"))
          : ((st.innerHTML = ""),
            (ie.innerHTML = ""),
            (l.style.display = "none"),
            (ie.style.display = "none"));
        const be = u.querySelector(".js-text"),
          xe = P.querySelector(".js-text");
        O.numberOfPlayers
          ? ((be.innerHTML = O.numberOfPlayers),
            (xe.innerHTML = O.numberOfPlayers),
            (u.style.display = "flex"),
            (xe.style.display = "flex"))
          : ((be.innerHTML = ""),
            (xe.innerHTML = ""),
            (u.style.display = "none"),
            (xe.style.display = "none"));
        const ae = f.querySelector(".js-btn-text");
        O.inSubscriptions
          ? (ae.innerHTML = "\u0418\u0433\u0440\u0430\u0442\u044C")
          : (ae.innerHTML =
              "\u0418\u0433\u0440\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E");
      },
      V = (O, R) => {
        k(R),
          Array.from(d).forEach(($) => $.classList.remove("active")),
          Array.from(m).forEach(($) => $.classList.remove("active")),
          O.classList.add("active"),
          window.innerWidth < 768 &&
            ((p.style.display = "block"), document.body.classList.add("fixed"));
      },
      N = () => {
        this.games.top.forEach((O, R) => {
          const $ = d[R];
          ($.querySelector("img").src = O.previewImage.url),
            ($.style.display = "block"),
            $.addEventListener("click", () => V($, O));
        });
      },
      F = () => {
        this.games.new.forEach((O, R) => {
          const $ = m[R];
          ($.querySelector("img").src = O.previewImage.url),
            ($.style.display = "block"),
            $.addEventListener("click", () => V($, O));
        });
      };
    k(this.selectedGame),
      N(),
      F(),
      g.addEventListener("click", () => {
        L();
      }),
      _.addEventListener("click", () => {
        L();
      }),
      S.addEventListener("click", () => {
        L();
      });
  }
  getGamesList(e) {
    var i, r;
    const t = `${
      (r = (i = ws.getConfig()) == null ? void 0 : i.ADMIN_BASE_URL) != null
        ? r
        : ""
    }api/app/landing/category?category=${e}`;
    return new Promise((s, o) => {
      try {
        fetch(t, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((a) => a.json())
          .then((a) => {
            (this.games[e] = a.response), s(a.response);
          });
      } catch (a) {
        console.error("Error:", a), o(a);
      }
    });
  }
}
const is = new Zl();
class Jl {
  constructor() {
    (this.videoClickHolder = document.querySelectorAll(".js-video-holder")),
      (this.videoPopup = document.querySelector(".js-popup")),
      (this.video = document.querySelector(".js-video")),
      (this.videoLoader = document.querySelector(".js-video-loader")),
      (this.videoUrl = "");
  }
  bindEvents() {
    const e = () => {
      this.video.play(), (this.videoLoader.style.display = "none");
    };
    Array.from(this.videoClickHolder).forEach((t) => {
      t.addEventListener("click", () => {
        (this.videoUrl = t.dataset.video),
          (this.video.src = this.videoUrl),
          this.video.load(),
          this.video.addEventListener("canplaythrough", e),
          (this.videoPopup.style.display = "flex");
      });
    }),
      this.video.addEventListener("click", (t) => {
        t.stopPropagation();
      }),
      this.videoPopup.addEventListener("click", () => {
        this.video.removeEventListener("canplaythrough", e),
          this.video.load(),
          this.video.pause(),
          (this.video.currentTime = 0),
          (this.videoPopup.style.display = "none");
      });
  }
  init() {
    this.bindEvents();
  }
}
const eu = new Jl();
function So(n) {
  return (
    n !== null &&
    typeof n == "object" &&
    "constructor" in n &&
    n.constructor === Object
  );
}
function Ks(n = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof n[t] > "u"
      ? (n[t] = e[t])
      : So(e[t]) && So(n[t]) && Object.keys(e[t]).length > 0 && Ks(n[t], e[t]);
  });
}
const ca = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Ve() {
  const n = typeof document < "u" ? document : {};
  return Ks(n, ca), n;
}
const tu = {
  document: ca,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(n) {
    return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
  },
  cancelAnimationFrame(n) {
    typeof setTimeout > "u" || clearTimeout(n);
  },
};
function Re() {
  const n = typeof window < "u" ? window : {};
  return Ks(n, tu), n;
}
function iu(n) {
  const e = n.__proto__;
  Object.defineProperty(n, "__proto__", {
    get() {
      return e;
    },
    set(t) {
      e.__proto__ = t;
    },
  });
}
class vi extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...(e || [])), iu(this));
  }
}
function un(n = []) {
  const e = [];
  return (
    n.forEach((t) => {
      Array.isArray(t) ? e.push(...un(t)) : e.push(t);
    }),
    e
  );
}
function fa(n, e) {
  return Array.prototype.filter.call(n, e);
}
function ru(n) {
  const e = [];
  for (let t = 0; t < n.length; t += 1) e.indexOf(n[t]) === -1 && e.push(n[t]);
  return e;
}
function nu(n, e) {
  if (typeof n != "string") return [n];
  const t = [],
    i = e.querySelectorAll(n);
  for (let r = 0; r < i.length; r += 1) t.push(i[r]);
  return t;
}
function D(n, e) {
  const t = Re(),
    i = Ve();
  let r = [];
  if (!e && n instanceof vi) return n;
  if (!n) return new vi(r);
  if (typeof n == "string") {
    const s = n.trim();
    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
      let o = "div";
      s.indexOf("<li") === 0 && (o = "ul"),
        s.indexOf("<tr") === 0 && (o = "tbody"),
        (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (o = "tr"),
        s.indexOf("<tbody") === 0 && (o = "table"),
        s.indexOf("<option") === 0 && (o = "select");
      const a = i.createElement(o);
      a.innerHTML = s;
      for (let l = 0; l < a.childNodes.length; l += 1) r.push(a.childNodes[l]);
    } else r = nu(n.trim(), e || i);
  } else if (n.nodeType || n === t || n === i) r.push(n);
  else if (Array.isArray(n)) {
    if (n instanceof vi) return n;
    r = n;
  }
  return new vi(ru(r));
}
D.fn = vi.prototype;
function su(...n) {
  const e = un(n.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.add(...e);
    }),
    this
  );
}
function ou(...n) {
  const e = un(n.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.remove(...e);
    }),
    this
  );
}
function au(...n) {
  const e = un(n.map((t) => t.split(" ")));
  this.forEach((t) => {
    e.forEach((i) => {
      t.classList.toggle(i);
    });
  });
}
function lu(...n) {
  const e = un(n.map((t) => t.split(" ")));
  return (
    fa(this, (t) => e.filter((i) => t.classList.contains(i)).length > 0)
      .length > 0
  );
}
function uu(n, e) {
  if (arguments.length === 1 && typeof n == "string")
    return this[0] ? this[0].getAttribute(n) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2) this[t].setAttribute(n, e);
    else for (const i in n) (this[t][i] = n[i]), this[t].setAttribute(i, n[i]);
  return this;
}
function cu(n) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(n);
  return this;
}
function fu(n) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = n;
  return this;
}
function du(n) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof n != "string" ? `${n}ms` : n;
  return this;
}
function hu(...n) {
  let [e, t, i, r] = n;
  typeof n[1] == "function" && (([e, i, r] = n), (t = void 0)), r || (r = !1);
  function s(u) {
    const c = u.target;
    if (!c) return;
    const h = u.target.dom7EventData || [];
    if ((h.indexOf(u) < 0 && h.unshift(u), D(c).is(t))) i.apply(c, h);
    else {
      const f = D(c).parents();
      for (let d = 0; d < f.length; d += 1) D(f[d]).is(t) && i.apply(f[d], h);
    }
  }
  function o(u) {
    const c = u && u.target ? u.target.dom7EventData || [] : [];
    c.indexOf(u) < 0 && c.unshift(u), i.apply(this, c);
  }
  const a = e.split(" ");
  let l;
  for (let u = 0; u < this.length; u += 1) {
    const c = this[u];
    if (t)
      for (l = 0; l < a.length; l += 1) {
        const h = a[l];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}),
          c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []),
          c.dom7LiveListeners[h].push({ listener: i, proxyListener: s }),
          c.addEventListener(h, s, r);
      }
    else
      for (l = 0; l < a.length; l += 1) {
        const h = a[l];
        c.dom7Listeners || (c.dom7Listeners = {}),
          c.dom7Listeners[h] || (c.dom7Listeners[h] = []),
          c.dom7Listeners[h].push({ listener: i, proxyListener: o }),
          c.addEventListener(h, o, r);
      }
  }
  return this;
}
function pu(...n) {
  let [e, t, i, r] = n;
  typeof n[1] == "function" && (([e, i, r] = n), (t = void 0)), r || (r = !1);
  const s = e.split(" ");
  for (let o = 0; o < s.length; o += 1) {
    const a = s[o];
    for (let l = 0; l < this.length; l += 1) {
      const u = this[l];
      let c;
      if (
        (!t && u.dom7Listeners
          ? (c = u.dom7Listeners[a])
          : t && u.dom7LiveListeners && (c = u.dom7LiveListeners[a]),
        c && c.length)
      )
        for (let h = c.length - 1; h >= 0; h -= 1) {
          const f = c[h];
          (i && f.listener === i) ||
          (i &&
            f.listener &&
            f.listener.dom7proxy &&
            f.listener.dom7proxy === i)
            ? (u.removeEventListener(a, f.proxyListener, r), c.splice(h, 1))
            : i ||
              (u.removeEventListener(a, f.proxyListener, r), c.splice(h, 1));
        }
    }
  }
  return this;
}
function mu(...n) {
  const e = Re(),
    t = n[0].split(" "),
    i = n[1];
  for (let r = 0; r < t.length; r += 1) {
    const s = t[r];
    for (let o = 0; o < this.length; o += 1) {
      const a = this[o];
      if (e.CustomEvent) {
        const l = new e.CustomEvent(s, {
          detail: i,
          bubbles: !0,
          cancelable: !0,
        });
        (a.dom7EventData = n.filter((u, c) => c > 0)),
          a.dispatchEvent(l),
          (a.dom7EventData = []),
          delete a.dom7EventData;
      }
    }
  }
  return this;
}
function gu(n) {
  const e = this;
  function t(i) {
    i.target === this && (n.call(this, i), e.off("transitionend", t));
  }
  return n && e.on("transitionend", t), this;
}
function _u(n) {
  if (this.length > 0) {
    if (n) {
      const e = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(e.getPropertyValue("margin-right")) +
        parseFloat(e.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function vu(n) {
  if (this.length > 0) {
    if (n) {
      const e = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(e.getPropertyValue("margin-top")) +
        parseFloat(e.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function yu() {
  if (this.length > 0) {
    const n = Re(),
      e = Ve(),
      t = this[0],
      i = t.getBoundingClientRect(),
      r = e.body,
      s = t.clientTop || r.clientTop || 0,
      o = t.clientLeft || r.clientLeft || 0,
      a = t === n ? n.scrollY : t.scrollTop,
      l = t === n ? n.scrollX : t.scrollLeft;
    return { top: i.top + a - s, left: i.left + l - o };
  }
  return null;
}
function Tu() {
  const n = Re();
  return this[0] ? n.getComputedStyle(this[0], null) : {};
}
function bu(n, e) {
  const t = Re();
  let i;
  if (arguments.length === 1)
    if (typeof n == "string") {
      if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(n);
    } else {
      for (i = 0; i < this.length; i += 1)
        for (const r in n) this[i].style[r] = n[r];
      return this;
    }
  if (arguments.length === 2 && typeof n == "string") {
    for (i = 0; i < this.length; i += 1) this[i].style[n] = e;
    return this;
  }
  return this;
}
function xu(n) {
  return n
    ? (this.forEach((e, t) => {
        n.apply(e, [e, t]);
      }),
      this)
    : this;
}
function Su(n) {
  const e = fa(this, n);
  return D(e);
}
function wu(n) {
  if (typeof n > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = n;
  return this;
}
function Cu(n) {
  if (typeof n > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = n;
  return this;
}
function Eu(n) {
  const e = Re(),
    t = Ve(),
    i = this[0];
  let r, s;
  if (!i || typeof n > "u") return !1;
  if (typeof n == "string") {
    if (i.matches) return i.matches(n);
    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(n);
    if (i.msMatchesSelector) return i.msMatchesSelector(n);
    for (r = D(n), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
    return !1;
  }
  if (n === t) return i === t;
  if (n === e) return i === e;
  if (n.nodeType || n instanceof vi) {
    for (r = n.nodeType ? [n] : n, s = 0; s < r.length; s += 1)
      if (r[s] === i) return !0;
    return !1;
  }
  return !1;
}
function Pu() {
  let n = this[0],
    e;
  if (n) {
    for (e = 0; (n = n.previousSibling) !== null; )
      n.nodeType === 1 && (e += 1);
    return e;
  }
}
function Mu(n) {
  if (typeof n > "u") return this;
  const e = this.length;
  if (n > e - 1) return D([]);
  if (n < 0) {
    const t = e + n;
    return t < 0 ? D([]) : D([this[t]]);
  }
  return D([this[n]]);
}
function ku(...n) {
  let e;
  const t = Ve();
  for (let i = 0; i < n.length; i += 1) {
    e = n[i];
    for (let r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        const s = t.createElement("div");
        for (s.innerHTML = e; s.firstChild; ) this[r].appendChild(s.firstChild);
      } else if (e instanceof vi)
        for (let s = 0; s < e.length; s += 1) this[r].appendChild(e[s]);
      else this[r].appendChild(e);
  }
  return this;
}
function Ou(n) {
  const e = Ve();
  let t, i;
  for (t = 0; t < this.length; t += 1)
    if (typeof n == "string") {
      const r = e.createElement("div");
      for (r.innerHTML = n, i = r.childNodes.length - 1; i >= 0; i -= 1)
        this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
    } else if (n instanceof vi)
      for (i = 0; i < n.length; i += 1)
        this[t].insertBefore(n[i], this[t].childNodes[0]);
    else this[t].insertBefore(n, this[t].childNodes[0]);
  return this;
}
function Lu(n) {
  return this.length > 0
    ? n
      ? this[0].nextElementSibling && D(this[0].nextElementSibling).is(n)
        ? D([this[0].nextElementSibling])
        : D([])
      : this[0].nextElementSibling
      ? D([this[0].nextElementSibling])
      : D([])
    : D([]);
}
function Du(n) {
  const e = [];
  let t = this[0];
  if (!t) return D([]);
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    n ? D(i).is(n) && e.push(i) : e.push(i), (t = i);
  }
  return D(e);
}
function Au(n) {
  if (this.length > 0) {
    const e = this[0];
    return n
      ? e.previousElementSibling && D(e.previousElementSibling).is(n)
        ? D([e.previousElementSibling])
        : D([])
      : e.previousElementSibling
      ? D([e.previousElementSibling])
      : D([]);
  }
  return D([]);
}
function Iu(n) {
  const e = [];
  let t = this[0];
  if (!t) return D([]);
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    n ? D(i).is(n) && e.push(i) : e.push(i), (t = i);
  }
  return D(e);
}
function Ru(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null &&
      (n
        ? D(this[t].parentNode).is(n) && e.push(this[t].parentNode)
        : e.push(this[t].parentNode));
  return D(e);
}
function zu(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    let i = this[t].parentNode;
    for (; i; ) n ? D(i).is(n) && e.push(i) : e.push(i), (i = i.parentNode);
  }
  return D(e);
}
function $u(n) {
  let e = this;
  return typeof n > "u" ? D([]) : (e.is(n) || (e = e.parents(n).eq(0)), e);
}
function Bu(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].querySelectorAll(n);
    for (let r = 0; r < i.length; r += 1) e.push(i[r]);
  }
  return D(e);
}
function Nu(n) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const i = this[t].children;
    for (let r = 0; r < i.length; r += 1) (!n || D(i[r]).is(n)) && e.push(i[r]);
  }
  return D(e);
}
function Fu() {
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode && this[n].parentNode.removeChild(this[n]);
  return this;
}
const wo = {
  addClass: su,
  removeClass: ou,
  hasClass: lu,
  toggleClass: au,
  attr: uu,
  removeAttr: cu,
  transform: fu,
  transition: du,
  on: hu,
  off: pu,
  trigger: mu,
  transitionEnd: gu,
  outerWidth: _u,
  outerHeight: vu,
  styles: Tu,
  offset: yu,
  css: bu,
  each: xu,
  html: wu,
  text: Cu,
  is: Eu,
  index: Pu,
  eq: Mu,
  append: ku,
  prepend: Ou,
  next: Lu,
  nextAll: Du,
  prev: Au,
  prevAll: Iu,
  parent: Ru,
  parents: zu,
  closest: $u,
  find: Bu,
  children: Nu,
  filter: Su,
  remove: Fu,
};
Object.keys(wo).forEach((n) => {
  Object.defineProperty(D.fn, n, { value: wo[n], writable: !0 });
});
function Gu(n) {
  const e = n;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
function $n(n, e = 0) {
  return setTimeout(n, e);
}
function wi() {
  return Date.now();
}
function Vu(n) {
  const e = Re();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(n, null)),
    !t && n.currentStyle && (t = n.currentStyle),
    t || (t = n.style),
    t
  );
}
function qu(n, e = "x") {
  const t = Re();
  let i, r, s;
  const o = Vu(n);
  return (
    t.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (s = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = s.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (r = s.m41)
        : i.length === 16
        ? (r = parseFloat(i[12]))
        : (r = parseFloat(i[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (r = s.m42)
        : i.length === 16
        ? (r = parseFloat(i[13]))
        : (r = parseFloat(i[5]))),
    r || 0
  );
}
function $r(n) {
  return (
    typeof n == "object" &&
    n !== null &&
    n.constructor &&
    Object.prototype.toString.call(n).slice(8, -1) === "Object"
  );
}
function Hu(n) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? n instanceof HTMLElement
    : n && (n.nodeType === 1 || n.nodeType === 11);
}
function xt(...n) {
  const e = Object(n[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < n.length; i += 1) {
    const r = n[i];
    if (r != null && !Hu(r)) {
      const s = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
      for (let o = 0, a = s.length; o < a; o += 1) {
        const l = s[o],
          u = Object.getOwnPropertyDescriptor(r, l);
        u !== void 0 &&
          u.enumerable &&
          ($r(e[l]) && $r(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : xt(e[l], r[l])
            : !$r(e[l]) && $r(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : xt(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function hn(n, e, t) {
  n.style.setProperty(e, t);
}
function da({ swiper: n, targetPosition: e, side: t }) {
  const i = Re(),
    r = -n.translate;
  let s = null,
    o;
  const a = n.params.speed;
  (n.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(n.cssModeFrameID);
  const l = e > r ? "next" : "prev",
    u = (h, f) => (l === "next" && h >= f) || (l === "prev" && h <= f),
    c = () => {
      (o = new Date().getTime()), s === null && (s = o);
      const h = Math.max(Math.min((o - s) / a, 1), 0),
        f = 0.5 - Math.cos(h * Math.PI) / 2;
      let d = r + f * (e - r);
      if ((u(d, e) && (d = e), n.wrapperEl.scrollTo({ [t]: d }), u(d, e))) {
        (n.wrapperEl.style.overflow = "hidden"),
          (n.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (n.wrapperEl.style.overflow = ""), n.wrapperEl.scrollTo({ [t]: d });
          }),
          i.cancelAnimationFrame(n.cssModeFrameID);
        return;
      }
      n.cssModeFrameID = i.requestAnimationFrame(c);
    };
  c();
}
let rs;
function ju() {
  const n = Re(),
    e = Ve();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in n ||
      (n.DocumentTouch && e instanceof n.DocumentTouch)
    ),
    passiveListener: (function () {
      let i = !1;
      try {
        const r = Object.defineProperty({}, "passive", {
          get() {
            i = !0;
          },
        });
        n.addEventListener("testPassiveListener", null, r);
      } catch {}
      return i;
    })(),
    gestures: (function () {
      return "ongesturestart" in n;
    })(),
  };
}
function ha() {
  return rs || (rs = ju()), rs;
}
let ns;
function Yu({ userAgent: n } = {}) {
  const e = ha(),
    t = Re(),
    i = t.navigator.platform,
    r = n || t.navigator.userAgent,
    s = { ios: !1, android: !1 },
    o = t.screen.width,
    a = t.screen.height,
    l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = r.match(/(iPad).*OS\s([\d_]+)/);
  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = i === "Win32";
  let d = i === "MacIntel";
  const m = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      d &&
      e.touch &&
      m.indexOf(`${o}x${a}`) >= 0 &&
      ((u = r.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (d = !1)),
    l && !f && ((s.os = "android"), (s.android = !0)),
    (u || h || c) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function Wu(n = {}) {
  return ns || (ns = Yu(n)), ns;
}
let ss;
function Xu() {
  const n = Re();
  function e() {
    const t = n.navigator.userAgent.toLowerCase();
    return (
      t.indexOf("safari") >= 0 &&
      t.indexOf("chrome") < 0 &&
      t.indexOf("android") < 0
    );
  }
  return {
    isSafari: e(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      n.navigator.userAgent
    ),
  };
}
function Uu() {
  return ss || (ss = Xu()), ss;
}
function Ku({ swiper: n, on: e, emit: t }) {
  const i = Re();
  let r = null,
    s = null;
  const o = () => {
      !n || n.destroyed || !n.initialized || (t("beforeResize"), t("resize"));
    },
    a = () => {
      !n ||
        n.destroyed ||
        !n.initialized ||
        ((r = new ResizeObserver((c) => {
          s = i.requestAnimationFrame(() => {
            const { width: h, height: f } = n;
            let d = h,
              m = f;
            c.forEach(({ contentBoxSize: p, contentRect: g, target: _ }) => {
              (_ && _ !== n.el) ||
                ((d = g ? g.width : (p[0] || p).inlineSize),
                (m = g ? g.height : (p[0] || p).blockSize));
            }),
              (d !== h || m !== f) && o();
          });
        })),
        r.observe(n.el));
    },
    l = () => {
      s && i.cancelAnimationFrame(s),
        r && r.unobserve && n.el && (r.unobserve(n.el), (r = null));
    },
    u = () => {
      !n || n.destroyed || !n.initialized || t("orientationchange");
    };
  e("init", () => {
    if (n.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", u);
  }),
    e("destroy", () => {
      l(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", u);
    });
}
function Qu({ swiper: n, extendParams: e, on: t, emit: i }) {
  const r = [],
    s = Re(),
    o = (u, c = {}) => {
      const h = s.MutationObserver || s.WebkitMutationObserver,
        f = new h((d) => {
          if (d.length === 1) {
            i("observerUpdate", d[0]);
            return;
          }
          const m = function () {
            i("observerUpdate", d[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(m)
            : s.setTimeout(m, 0);
        });
      f.observe(u, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        r.push(f);
    },
    a = () => {
      if (!!n.params.observer) {
        if (n.params.observeParents) {
          const u = n.$el.parents();
          for (let c = 0; c < u.length; c += 1) o(u[c]);
        }
        o(n.$el[0], { childList: n.params.observeSlideChildren }),
          o(n.$wrapperEl[0], { attributes: !1 });
      }
    },
    l = () => {
      r.forEach((u) => {
        u.disconnect();
      }),
        r.splice(0, r.length);
    };
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t("init", a),
    t("destroy", l);
}
const Zu = {
  on(n, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = t ? "unshift" : "push";
    return (
      n.split(" ").forEach((s) => {
        i.eventsListeners[s] || (i.eventsListeners[s] = []),
          i.eventsListeners[s][r](e);
      }),
      i
    );
  },
  once(n, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r(...s) {
      i.off(n, r), r.__emitterProxy && delete r.__emitterProxy, e.apply(i, s);
    }
    return (r.__emitterProxy = e), i.on(n, r, t);
  },
  onAny(n, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof n != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t;
  },
  offAny(n) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(n);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(n, e) {
    const t = this;
    return (
      !t.eventsListeners ||
        t.destroyed ||
        !t.eventsListeners ||
        n.split(" ").forEach((i) => {
          typeof e > "u"
            ? (t.eventsListeners[i] = [])
            : t.eventsListeners[i] &&
              t.eventsListeners[i].forEach((r, s) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  t.eventsListeners[i].splice(s, 1);
              });
        }),
      t
    );
  },
  emit(...n) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, i, r;
    return (
      typeof n[0] == "string" || Array.isArray(n[0])
        ? ((t = n[0]), (i = n.slice(1, n.length)), (r = e))
        : ((t = n[0].events), (i = n[0].data), (r = n[0].context || e)),
      i.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((a) => {
            a.apply(r, [o, ...i]);
          }),
          e.eventsListeners &&
            e.eventsListeners[o] &&
            e.eventsListeners[o].forEach((a) => {
              a.apply(r, i);
            });
      }),
      e
    );
  },
};
function Ju() {
  const n = this;
  let e, t;
  const i = n.$el;
  typeof n.params.width < "u" && n.params.width !== null
    ? (e = n.params.width)
    : (e = i[0].clientWidth),
    typeof n.params.height < "u" && n.params.height !== null
      ? (t = n.params.height)
      : (t = i[0].clientHeight),
    !((e === 0 && n.isHorizontal()) || (t === 0 && n.isVertical())) &&
      ((e =
        e -
        parseInt(i.css("padding-left") || 0, 10) -
        parseInt(i.css("padding-right") || 0, 10)),
      (t =
        t -
        parseInt(i.css("padding-top") || 0, 10) -
        parseInt(i.css("padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(n, {
        width: e,
        height: t,
        size: n.isHorizontal() ? e : t,
      }));
}
function ec() {
  const n = this;
  function e(S) {
    return n.isHorizontal()
      ? S
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[S];
  }
  function t(S, L) {
    return parseFloat(S.getPropertyValue(e(L)) || 0);
  }
  const i = n.params,
    { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = n,
    l = n.virtual && i.virtual.enabled,
    u = l ? n.virtual.slides.length : n.slides.length,
    c = r.children(`.${n.params.slideClass}`),
    h = l ? n.virtual.slides.length : c.length;
  let f = [];
  const d = [],
    m = [];
  let p = i.slidesOffsetBefore;
  typeof p == "function" && (p = i.slidesOffsetBefore.call(n));
  let g = i.slidesOffsetAfter;
  typeof g == "function" && (g = i.slidesOffsetAfter.call(n));
  const _ = n.snapGrid.length,
    v = n.slidesGrid.length;
  let b = i.spaceBetween,
    T = -p,
    C = 0,
    E = 0;
  if (typeof s > "u") return;
  typeof b == "string" &&
    b.indexOf("%") >= 0 &&
    (b = (parseFloat(b.replace("%", "")) / 100) * s),
    (n.virtualSize = -b),
    o
      ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    i.centeredSlides &&
      i.cssMode &&
      (hn(n.wrapperEl, "--swiper-centered-offset-before", ""),
      hn(n.wrapperEl, "--swiper-centered-offset-after", ""));
  const x = i.grid && i.grid.rows > 1 && n.grid;
  x && n.grid.initSlides(h);
  let P;
  const M =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (S) => typeof i.breakpoints[S].slidesPerView < "u"
    ).length > 0;
  for (let S = 0; S < h; S += 1) {
    P = 0;
    const L = c.eq(S);
    if ((x && n.grid.updateSlide(S, L, h, e), L.css("display") !== "none")) {
      if (i.slidesPerView === "auto") {
        M && (c[S].style[e("width")] = "");
        const k = getComputedStyle(L[0]),
          V = L[0].style.transform,
          N = L[0].style.webkitTransform;
        if (
          (V && (L[0].style.transform = "none"),
          N && (L[0].style.webkitTransform = "none"),
          i.roundLengths)
        )
          P = n.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
        else {
          const F = t(k, "width"),
            q = t(k, "padding-left"),
            O = t(k, "padding-right"),
            R = t(k, "margin-left"),
            $ = t(k, "margin-right"),
            y = k.getPropertyValue("box-sizing");
          if (y && y === "border-box") P = F + R + $;
          else {
            const { clientWidth: te, offsetWidth: he } = L[0];
            P = F + q + O + R + $ + (he - te);
          }
        }
        V && (L[0].style.transform = V),
          N && (L[0].style.webkitTransform = N),
          i.roundLengths && (P = Math.floor(P));
      } else
        (P = (s - (i.slidesPerView - 1) * b) / i.slidesPerView),
          i.roundLengths && (P = Math.floor(P)),
          c[S] && (c[S].style[e("width")] = `${P}px`);
      c[S] && (c[S].swiperSlideSize = P),
        m.push(P),
        i.centeredSlides
          ? ((T = T + P / 2 + C / 2 + b),
            C === 0 && S !== 0 && (T = T - s / 2 - b),
            S === 0 && (T = T - s / 2 - b),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            i.roundLengths && (T = Math.floor(T)),
            E % i.slidesPerGroup === 0 && f.push(T),
            d.push(T))
          : (i.roundLengths && (T = Math.floor(T)),
            (E - Math.min(n.params.slidesPerGroupSkip, E)) %
              n.params.slidesPerGroup ===
              0 && f.push(T),
            d.push(T),
            (T = T + P + b)),
        (n.virtualSize += P + b),
        (C = P),
        (E += 1);
    }
  }
  if (
    ((n.virtualSize = Math.max(n.virtualSize, s) + g),
    o &&
      a &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      r.css({ width: `${n.virtualSize + i.spaceBetween}px` }),
    i.setWrapperSize &&
      r.css({ [e("width")]: `${n.virtualSize + i.spaceBetween}px` }),
    x && n.grid.updateWrapperSize(P, f, e),
    !i.centeredSlides)
  ) {
    const S = [];
    for (let L = 0; L < f.length; L += 1) {
      let k = f[L];
      i.roundLengths && (k = Math.floor(k)),
        f[L] <= n.virtualSize - s && S.push(k);
    }
    (f = S),
      Math.floor(n.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(n.virtualSize - s);
  }
  if ((f.length === 0 && (f = [0]), i.spaceBetween !== 0)) {
    const S = n.isHorizontal() && o ? "marginLeft" : e("marginRight");
    c.filter((L, k) => (i.cssMode ? k !== c.length - 1 : !0)).css({
      [S]: `${b}px`,
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let S = 0;
    m.forEach((k) => {
      S += k + (i.spaceBetween ? i.spaceBetween : 0);
    }),
      (S -= i.spaceBetween);
    const L = S - s;
    f = f.map((k) => (k < 0 ? -p : k > L ? L + g : k));
  }
  if (i.centerInsufficientSlides) {
    let S = 0;
    if (
      (m.forEach((L) => {
        S += L + (i.spaceBetween ? i.spaceBetween : 0);
      }),
      (S -= i.spaceBetween),
      S < s)
    ) {
      const L = (s - S) / 2;
      f.forEach((k, V) => {
        f[V] = k - L;
      }),
        d.forEach((k, V) => {
          d[V] = k + L;
        });
    }
  }
  if (
    (Object.assign(n, {
      slides: c,
      snapGrid: f,
      slidesGrid: d,
      slidesSizesGrid: m,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    hn(n.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
      hn(
        n.wrapperEl,
        "--swiper-centered-offset-after",
        `${n.size / 2 - m[m.length - 1] / 2}px`
      );
    const S = -n.snapGrid[0],
      L = -n.slidesGrid[0];
    (n.snapGrid = n.snapGrid.map((k) => k + S)),
      (n.slidesGrid = n.slidesGrid.map((k) => k + L));
  }
  if (
    (h !== u && n.emit("slidesLengthChange"),
    f.length !== _ &&
      (n.params.watchOverflow && n.checkOverflow(),
      n.emit("snapGridLengthChange")),
    d.length !== v && n.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && n.updateSlidesOffset(),
    !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const S = `${i.containerModifierClass}backface-hidden`,
      L = n.$el.hasClass(S);
    h <= i.maxBackfaceHiddenSlides
      ? L || n.$el.addClass(S)
      : L && n.$el.removeClass(S);
  }
}
function tc(n) {
  const e = this,
    t = [],
    i = e.virtual && e.params.virtual.enabled;
  let r = 0,
    s;
  typeof n == "number"
    ? e.setTransition(n)
    : n === !0 && e.setTransition(e.params.speed);
  const o = (a) =>
    i
      ? e.slides.filter(
          (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === a
        )[0]
      : e.slides.eq(a)[0];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || D([])).each((a) => {
        t.push(a);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s;
        if (a > e.slides.length && !i) break;
        t.push(o(a));
      }
  else t.push(o(e.activeIndex));
  for (s = 0; s < t.length; s += 1)
    if (typeof t[s] < "u") {
      const a = t[s].offsetHeight;
      r = a > r ? a : r;
    }
  (r || r === 0) && e.$wrapperEl.css("height", `${r}px`);
}
function ic() {
  const n = this,
    e = n.slides;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = n.isHorizontal()
      ? e[t].offsetLeft
      : e[t].offsetTop;
}
function rc(n = (this && this.translate) || 0) {
  const e = this,
    t = e.params,
    { slides: i, rtlTranslate: r, snapGrid: s } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -n;
  r && (o = n),
    i.removeClass(t.slideVisibleClass),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  for (let a = 0; a < i.length; a += 1) {
    const l = i[a];
    let u = l.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (u -= i[0].swiperSlideOffset);
    const c =
        (o + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      h =
        (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      f = -(o - u),
      d = f + e.slidesSizesGrid[a];
    ((f >= 0 && f < e.size - 1) ||
      (d > 1 && d <= e.size) ||
      (f <= 0 && d >= e.size)) &&
      (e.visibleSlides.push(l),
      e.visibleSlidesIndexes.push(a),
      i.eq(a).addClass(t.slideVisibleClass)),
      (l.progress = r ? -c : c),
      (l.originalProgress = r ? -h : h);
  }
  e.visibleSlides = D(e.visibleSlides);
}
function nc(n) {
  const e = this;
  if (typeof n > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    n = (e && e.translate && e.translate * u) || 0;
  }
  const t = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: s, isEnd: o } = e;
  const a = s,
    l = o;
  i === 0
    ? ((r = 0), (s = !0), (o = !0))
    : ((r = (n - e.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
    Object.assign(e, { progress: r, isBeginning: s, isEnd: o }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(n),
    s && !a && e.emit("reachBeginning toEdge"),
    o && !l && e.emit("reachEnd toEdge"),
    ((a && !s) || (l && !o)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
function sc() {
  const n = this,
    { slides: e, params: t, $wrapperEl: i, activeIndex: r, realIndex: s } = n,
    o = n.virtual && t.virtual.enabled;
  e.removeClass(
    `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
  );
  let a;
  o
    ? (a = n.$wrapperEl.find(
        `.${t.slideClass}[data-swiper-slide-index="${r}"]`
      ))
    : (a = e.eq(r)),
    a.addClass(t.slideActiveClass),
    t.loop &&
      (a.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
            )
            .addClass(t.slideDuplicateActiveClass)
        : i
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
            )
            .addClass(t.slideDuplicateActiveClass));
  let l = a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
  t.loop && l.length === 0 && ((l = e.eq(0)), l.addClass(t.slideNextClass));
  let u = a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
  t.loop && u.length === 0 && ((u = e.eq(-1)), u.addClass(t.slidePrevClass)),
    t.loop &&
      (l.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${l.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicateNextClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicateNextClass),
      u.hasClass(t.slideDuplicateClass)
        ? i
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${u.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicatePrevClass)
        : i
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicatePrevClass)),
    n.emitSlidesClasses();
}
function oc(n) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    {
      slidesGrid: i,
      snapGrid: r,
      params: s,
      activeIndex: o,
      realIndex: a,
      snapIndex: l,
    } = e;
  let u = n,
    c;
  if (typeof u > "u") {
    for (let f = 0; f < i.length; f += 1)
      typeof i[f + 1] < "u"
        ? t >= i[f] && t < i[f + 1] - (i[f + 1] - i[f]) / 2
          ? (u = f)
          : t >= i[f] && t < i[f + 1] && (u = f + 1)
        : t >= i[f] && (u = f);
    s.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (r.indexOf(t) >= 0) c = r.indexOf(t);
  else {
    const f = Math.min(s.slidesPerGroupSkip, u);
    c = f + Math.floor((u - f) / s.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), u === o)) {
    c !== l && ((e.snapIndex = c), e.emit("snapIndexChange"));
    return;
  }
  const h = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(e, {
    snapIndex: c,
    realIndex: h,
    previousIndex: o,
    activeIndex: u,
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    a !== h && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function ac(n) {
  const e = this,
    t = e.params,
    i = D(n).closest(`.${t.slideClass}`)[0];
  let r = !1,
    s;
  if (i) {
    for (let o = 0; o < e.slides.length; o += 1)
      if (e.slides[o] === i) {
        (r = !0), (s = o);
        break;
      }
  }
  if (i && r)
    (e.clickedSlide = i),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(D(i).attr("data-swiper-slide-index"), 10))
        : (e.clickedIndex = s);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  t.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
const lc = {
  updateSize: Ju,
  updateSlides: ec,
  updateAutoHeight: tc,
  updateSlidesOffset: ic,
  updateSlidesProgress: rc,
  updateProgress: nc,
  updateSlidesClasses: sc,
  updateActiveIndex: oc,
  updateClickedSlide: ac,
};
function uc(n = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: t, rtlTranslate: i, translate: r, $wrapperEl: s } = e;
  if (t.virtualTranslate) return i ? -r : r;
  if (t.cssMode) return r;
  let o = qu(s[0], n);
  return i && (o = -o), o || 0;
}
function cc(n, e) {
  const t = this,
    {
      rtlTranslate: i,
      params: r,
      $wrapperEl: s,
      wrapperEl: o,
      progress: a,
    } = t;
  let l = 0,
    u = 0;
  const c = 0;
  t.isHorizontal() ? (l = i ? -n : n) : (u = n),
    r.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
    r.cssMode
      ? (o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -l
          : -u)
      : r.virtualTranslate ||
        s.transform(`translate3d(${l}px, ${u}px, ${c}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? l : u);
  let h;
  const f = t.maxTranslate() - t.minTranslate();
  f === 0 ? (h = 0) : (h = (n - t.minTranslate()) / f),
    h !== a && t.updateProgress(n),
    t.emit("setTranslate", t.translate, e);
}
function fc() {
  return -this.snapGrid[0];
}
function dc() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function hc(n = 0, e = this.params.speed, t = !0, i = !0, r) {
  const s = this,
    { params: o, wrapperEl: a } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const l = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (i && n > l ? (c = l) : i && n < u ? (c = u) : (c = n),
    s.updateProgress(c),
    o.cssMode)
  ) {
    const h = s.isHorizontal();
    if (e === 0) a[h ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          da({ swiper: s, targetPosition: -c, side: h ? "left" : "top" }), !0
        );
      a.scrollTo({ [h ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
      : (s.setTransition(e),
        s.setTranslate(c),
        t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (f) {
              !s ||
                s.destroyed ||
                (f.target === this &&
                  (s.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  t && s.emit("transitionEnd")));
            }),
          s.$wrapperEl[0].addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ),
          s.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const pc = {
  getTranslate: uc,
  setTranslate: cc,
  minTranslate: fc,
  maxTranslate: dc,
  translateTo: hc,
};
function mc(n, e) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(n), t.emit("setTransition", n, e);
}
function pa({ swiper: n, runCallbacks: e, direction: t, step: i }) {
  const { activeIndex: r, previousIndex: s } = n;
  let o = t;
  if (
    (o || (r > s ? (o = "next") : r < s ? (o = "prev") : (o = "reset")),
    n.emit(`transition${i}`),
    e && r !== s)
  ) {
    if (o === "reset") {
      n.emit(`slideResetTransition${i}`);
      return;
    }
    n.emit(`slideChangeTransition${i}`),
      o === "next"
        ? n.emit(`slideNextTransition${i}`)
        : n.emit(`slidePrevTransition${i}`);
  }
}
function gc(n = !0, e) {
  const t = this,
    { params: i } = t;
  i.cssMode ||
    (i.autoHeight && t.updateAutoHeight(),
    pa({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
}
function _c(n = !0, e) {
  const t = this,
    { params: i } = t;
  (t.animating = !1),
    !i.cssMode &&
      (t.setTransition(0),
      pa({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
}
const vc = { setTransition: mc, transitionStart: gc, transitionEnd: _c };
function yc(n = 0, e = this.params.speed, t = !0, i, r) {
  if (typeof n != "number" && typeof n != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof n}] given.`
    );
  if (typeof n == "string") {
    const b = parseInt(n, 10);
    if (!isFinite(b))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${n}] given.`
      );
    n = b;
  }
  const s = this;
  let o = n;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: h,
    rtlTranslate: f,
    wrapperEl: d,
    enabled: m,
  } = s;
  if ((s.animating && a.preventInteractionOnTransition) || (!m && !i && !r))
    return !1;
  const p = Math.min(s.params.slidesPerGroupSkip, o);
  let g = p + Math.floor((o - p) / s.params.slidesPerGroup);
  g >= l.length && (g = l.length - 1);
  const _ = -l[g];
  if (a.normalizeSlideIndex)
    for (let b = 0; b < u.length; b += 1) {
      const T = -Math.floor(_ * 100),
        C = Math.floor(u[b] * 100),
        E = Math.floor(u[b + 1] * 100);
      typeof u[b + 1] < "u"
        ? T >= C && T < E - (E - C) / 2
          ? (o = b)
          : T >= C && T < E && (o = b + 1)
        : T >= C && (o = b);
    }
  if (
    s.initialized &&
    o !== h &&
    ((!s.allowSlideNext && _ < s.translate && _ < s.minTranslate()) ||
      (!s.allowSlidePrev &&
        _ > s.translate &&
        _ > s.maxTranslate() &&
        (h || 0) !== o))
  )
    return !1;
  o !== (c || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(_);
  let v;
  if (
    (o > h ? (v = "next") : o < h ? (v = "prev") : (v = "reset"),
    (f && -_ === s.translate) || (!f && _ === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== "slide" && s.setTranslate(_),
      v !== "reset" && (s.transitionStart(t, v), s.transitionEnd(t, v)),
      !1
    );
  if (a.cssMode) {
    const b = s.isHorizontal(),
      T = f ? _ : -_;
    if (e === 0) {
      const C = s.virtual && s.params.virtual.enabled;
      C &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        (d[b ? "scrollLeft" : "scrollTop"] = T),
        C &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""),
              (s._swiperImmediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          da({ swiper: s, targetPosition: T, side: b ? "left" : "top" }), !0
        );
      d.scrollTo({ [b ? "left" : "top"]: T, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(e),
    s.setTranslate(_),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", e, i),
    s.transitionStart(t, v),
    e === 0
      ? s.transitionEnd(t, v)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (T) {
            !s ||
              s.destroyed ||
              (T.target === this &&
                (s.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(t, v)));
          }),
        s.$wrapperEl[0].addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        ),
        s.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Tc(n = 0, e = this.params.speed, t = !0, i) {
  if (typeof n == "string") {
    const o = parseInt(n, 10);
    if (!isFinite(o))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${n}] given.`
      );
    n = o;
  }
  const r = this;
  let s = n;
  return r.params.loop && (s += r.loopedSlides), r.slideTo(s, e, t, i);
}
function bc(n = this.params.speed, e = !0, t) {
  const i = this,
    { animating: r, enabled: s, params: o } = i;
  if (!s) return i;
  let a = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
  if (o.loop) {
    if (r && o.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  return o.rewind && i.isEnd
    ? i.slideTo(0, n, e, t)
    : i.slideTo(i.activeIndex + l, n, e, t);
}
function xc(n = this.params.speed, e = !0, t) {
  const i = this,
    {
      params: r,
      animating: s,
      snapGrid: o,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: u,
    } = i;
  if (!u) return i;
  if (r.loop) {
    if (s && r.loopPreventsSlide) return !1;
    i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
  }
  const c = l ? i.translate : -i.translate;
  function h(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const f = h(c),
    d = o.map((g) => h(g));
  let m = o[d.indexOf(f) - 1];
  if (typeof m > "u" && r.cssMode) {
    let g;
    o.forEach((_, v) => {
      f >= _ && (g = v);
    }),
      typeof g < "u" && (m = o[g > 0 ? g - 1 : g]);
  }
  let p = 0;
  if (
    (typeof m < "u" &&
      ((p = a.indexOf(m)),
      p < 0 && (p = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((p = p - i.slidesPerViewDynamic("previous", !0) + 1),
        (p = Math.max(p, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const g =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(g, n, e, t);
  }
  return i.slideTo(p, n, e, t);
}
function Sc(n = this.params.speed, e = !0, t) {
  const i = this;
  return i.slideTo(i.activeIndex, n, e, t);
}
function wc(n = this.params.speed, e = !0, t, i = 0.5) {
  const r = this;
  let s = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, s),
    a = o + Math.floor((s - o) / r.params.slidesPerGroup),
    l = r.rtlTranslate ? r.translate : -r.translate;
  if (l >= r.snapGrid[a]) {
    const u = r.snapGrid[a],
      c = r.snapGrid[a + 1];
    l - u > (c - u) * i && (s += r.params.slidesPerGroup);
  } else {
    const u = r.snapGrid[a - 1],
      c = r.snapGrid[a];
    l - u <= (c - u) * i && (s -= r.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, r.slidesGrid.length - 1)),
    r.slideTo(s, n, e, t)
  );
}
function Cc() {
  const n = this,
    { params: e, $wrapperEl: t } = n,
    i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
  let r = n.clickedIndex,
    s;
  if (e.loop) {
    if (n.animating) return;
    (s = parseInt(D(n.clickedSlide).attr("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? r < n.loopedSlides - i / 2 ||
          r > n.slides.length - n.loopedSlides + i / 2
          ? (n.loopFix(),
            (r = t
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            $n(() => {
              n.slideTo(r);
            }))
          : n.slideTo(r)
        : r > n.slides.length - i
        ? (n.loopFix(),
          (r = t
            .children(
              `.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          $n(() => {
            n.slideTo(r);
          }))
        : n.slideTo(r);
  } else n.slideTo(r);
}
const Ec = {
  slideTo: yc,
  slideToLoop: Tc,
  slideNext: bc,
  slidePrev: xc,
  slideReset: Sc,
  slideToClosest: wc,
  slideToClickedSlide: Cc,
};
function Pc() {
  const n = this,
    e = Ve(),
    { params: t, $wrapperEl: i } = n,
    r = i.children().length > 0 ? D(i.children()[0].parentNode) : i;
  r.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let s = r.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const l = t.slidesPerGroup - (s.length % t.slidesPerGroup);
    if (l !== t.slidesPerGroup) {
      for (let u = 0; u < l; u += 1) {
        const c = D(e.createElement("div")).addClass(
          `${t.slideClass} ${t.slideBlankClass}`
        );
        r.append(c);
      }
      s = r.children(`.${t.slideClass}`);
    }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = s.length),
    (n.loopedSlides = Math.ceil(
      parseFloat(t.loopedSlides || t.slidesPerView, 10)
    )),
    (n.loopedSlides += t.loopAdditionalSlides),
    n.loopedSlides > s.length &&
      n.params.loopedSlidesLimit &&
      (n.loopedSlides = s.length);
  const o = [],
    a = [];
  s.each((l, u) => {
    D(l).attr("data-swiper-slide-index", u);
  });
  for (let l = 0; l < n.loopedSlides; l += 1) {
    const u = l - Math.floor(l / s.length) * s.length;
    a.push(s.eq(u)[0]), o.unshift(s.eq(s.length - u - 1)[0]);
  }
  for (let l = 0; l < a.length; l += 1)
    r.append(D(a[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let l = o.length - 1; l >= 0; l -= 1)
    r.prepend(D(o[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
function Mc() {
  const n = this;
  n.emit("beforeLoopFix");
  const {
    activeIndex: e,
    slides: t,
    loopedSlides: i,
    allowSlidePrev: r,
    allowSlideNext: s,
    snapGrid: o,
    rtlTranslate: a,
  } = n;
  let l;
  (n.allowSlidePrev = !0), (n.allowSlideNext = !0);
  const c = -o[e] - n.getTranslate();
  e < i
    ? ((l = t.length - i * 3 + e),
      (l += i),
      n.slideTo(l, 0, !1, !0) &&
        c !== 0 &&
        n.setTranslate((a ? -n.translate : n.translate) - c))
    : e >= t.length - i &&
      ((l = -t.length + e + i),
      (l += i),
      n.slideTo(l, 0, !1, !0) &&
        c !== 0 &&
        n.setTranslate((a ? -n.translate : n.translate) - c)),
    (n.allowSlidePrev = r),
    (n.allowSlideNext = s),
    n.emit("loopFix");
}
function kc() {
  const n = this,
    { $wrapperEl: e, params: t, slides: i } = n;
  e
    .children(
      `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
    )
    .remove(),
    i.removeAttr("data-swiper-slide-index");
}
const Oc = { loopCreate: Pc, loopFix: Mc, loopDestroy: kc };
function Lc(n) {
  const e = this;
  if (
    e.support.touch ||
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  (t.style.cursor = "move"), (t.style.cursor = n ? "grabbing" : "grab");
}
function Dc() {
  const n = this;
  n.support.touch ||
    (n.params.watchOverflow && n.isLocked) ||
    n.params.cssMode ||
    (n[
      n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const Ac = { setGrabCursor: Lc, unsetGrabCursor: Dc };
function Ic(n, e = this) {
  function t(i) {
    if (!i || i === Ve() || i === Re()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(n);
    return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
  }
  return t(e);
}
function Rc(n) {
  const e = this,
    t = Ve(),
    i = Re(),
    r = e.touchEventsData,
    { params: s, touches: o, enabled: a } = e;
  if (!a || (e.animating && s.preventInteractionOnTransition)) return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = n;
  l.originalEvent && (l = l.originalEvent);
  let u = D(l.target);
  if (
    (s.touchEventsTarget === "wrapper" && !u.closest(e.wrapperEl).length) ||
    ((r.isTouchEvent = l.type === "touchstart"),
    !r.isTouchEvent && "which" in l && l.which === 3) ||
    (!r.isTouchEvent && "button" in l && l.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "",
    h = n.composedPath ? n.composedPath() : n.path;
  c && l.target && l.target.shadowRoot && h && (u = D(h[0]));
  const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    d = !!(l.target && l.target.shadowRoot);
  if (s.noSwiping && (d ? Ic(f, u[0]) : u.closest(f)[0])) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
  (o.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
    (o.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
  const m = o.currentX,
    p = o.currentY,
    g = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    _ = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (g && (m <= _ || m >= i.innerWidth - _))
    if (g === "prevent") n.preventDefault();
    else return;
  if (
    (Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (o.startX = m),
    (o.startY = p),
    (r.touchStartTime = wi()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (r.allowThresholdMove = !1),
    l.type !== "touchstart")
  ) {
    let v = !0;
    u.is(r.focusableElements) &&
      ((v = !1), u[0].nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        D(t.activeElement).is(r.focusableElements) &&
        t.activeElement !== u[0] &&
        t.activeElement.blur();
    const b = v && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || b) &&
      !u[0].isContentEditable &&
      l.preventDefault();
  }
  e.params.freeMode &&
    e.params.freeMode.enabled &&
    e.freeMode &&
    e.animating &&
    !s.cssMode &&
    e.freeMode.onTouchStart(),
    e.emit("touchStart", l);
}
function zc(n) {
  const e = Ve(),
    t = this,
    i = t.touchEventsData,
    { params: r, touches: s, rtlTranslate: o, enabled: a } = t;
  if (!a) return;
  let l = n;
  if ((l.originalEvent && (l = l.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  if (i.isTouchEvent && l.type !== "touchmove") return;
  const u =
      l.type === "touchmove" &&
      l.targetTouches &&
      (l.targetTouches[0] || l.changedTouches[0]),
    c = l.type === "touchmove" ? u.pageX : l.pageX,
    h = l.type === "touchmove" ? u.pageY : l.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = c), (s.startY = h);
    return;
  }
  if (!t.allowTouchMove) {
    D(l.target).is(i.focusableElements) || (t.allowClick = !1),
      i.isTouched &&
        (Object.assign(s, { startX: c, startY: h, currentX: c, currentY: h }),
        (i.touchStartTime = wi()));
    return;
  }
  if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
    if (t.isVertical()) {
      if (
        (h < s.startY && t.translate <= t.maxTranslate()) ||
        (h > s.startY && t.translate >= t.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (c < s.startX && t.translate <= t.maxTranslate()) ||
      (c > s.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    i.isTouchEvent &&
    e.activeElement &&
    l.target === e.activeElement &&
    D(l.target).is(i.focusableElements)
  ) {
    (i.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && t.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (s.currentX = c), (s.currentY = h);
  const f = s.currentX - s.startX,
    d = s.currentY - s.startY;
  if (t.params.threshold && Math.sqrt(f ** 2 + d ** 2) < t.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let _;
    (t.isHorizontal() && s.currentY === s.startY) ||
    (t.isVertical() && s.currentX === s.startX)
      ? (i.isScrolling = !1)
      : f * f + d * d >= 25 &&
        ((_ = (Math.atan2(Math.abs(d), Math.abs(f)) * 180) / Math.PI),
        (i.isScrolling = t.isHorizontal()
          ? _ > r.touchAngle
          : 90 - _ > r.touchAngle));
  }
  if (
    (i.isScrolling && t.emit("touchMoveOpposite", l),
    typeof i.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (i.startMoving = !0),
    i.isScrolling)
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (t.allowClick = !1),
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
    i.isMoved ||
      (r.loop && !r.cssMode && t.loopFix(),
      (i.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", l)),
    t.emit("sliderMove", l),
    (i.isMoved = !0);
  let m = t.isHorizontal() ? f : d;
  (s.diff = m),
    (m *= r.touchRatio),
    o && (m = -m),
    (t.swipeDirection = m > 0 ? "prev" : "next"),
    (i.currentTranslate = m + i.startTranslate);
  let p = !0,
    g = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (g = 0),
    m > 0 && i.currentTranslate > t.minTranslate()
      ? ((p = !1),
        r.resistance &&
          (i.currentTranslate =
            t.minTranslate() -
            1 +
            (-t.minTranslate() + i.startTranslate + m) ** g))
      : m < 0 &&
        i.currentTranslate < t.maxTranslate() &&
        ((p = !1),
        r.resistance &&
          (i.currentTranslate =
            t.maxTranslate() +
            1 -
            (t.maxTranslate() - i.startTranslate - m) ** g)),
    p && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(m) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (i.currentTranslate = i.startTranslate),
          (s.diff = t.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
      r.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    t.params.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.freeMode.onTouchMove(),
    t.updateProgress(i.currentTranslate),
    t.setTranslate(i.currentTranslate));
}
function $c(n) {
  const e = this,
    t = e.touchEventsData,
    { params: i, touches: r, rtlTranslate: s, slidesGrid: o, enabled: a } = e;
  if (!a) return;
  let l = n;
  if (
    (l.originalEvent && (l = l.originalEvent),
    t.allowTouchCallbacks && e.emit("touchEnd", l),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && i.grabCursor && e.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  i.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const u = wi(),
    c = u - t.touchStartTime;
  if (e.allowClick) {
    const v = l.path || (l.composedPath && l.composedPath());
    e.updateClickedSlide((v && v[0]) || l.target),
      e.emit("tap click", l),
      c < 300 &&
        u - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", l);
  }
  if (
    ((t.lastClickTime = wi()),
    $n(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !e.swipeDirection ||
      r.diff === 0 ||
      t.currentTranslate === t.startTranslate)
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let h;
  if (
    (i.followFinger
      ? (h = s ? e.translate : -e.translate)
      : (h = -t.currentTranslate),
    i.cssMode)
  )
    return;
  if (e.params.freeMode && i.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: h });
    return;
  }
  let f = 0,
    d = e.slidesSizesGrid[0];
  for (
    let v = 0;
    v < o.length;
    v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
  ) {
    const b = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    typeof o[v + b] < "u"
      ? h >= o[v] && h < o[v + b] && ((f = v), (d = o[v + b] - o[v]))
      : h >= o[v] && ((f = v), (d = o[o.length - 1] - o[o.length - 2]));
  }
  let m = null,
    p = null;
  i.rewind &&
    (e.isBeginning
      ? (p =
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (m = 0));
  const g = (h - o[f]) / d,
    _ = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
  if (c > i.longSwipesMs) {
    if (!i.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (g >= i.longSwipesRatio
        ? e.slideTo(i.rewind && e.isEnd ? m : f + _)
        : e.slideTo(f)),
      e.swipeDirection === "prev" &&
        (g > 1 - i.longSwipesRatio
          ? e.slideTo(f + _)
          : p !== null && g < 0 && Math.abs(g) > i.longSwipesRatio
          ? e.slideTo(p)
          : e.slideTo(f));
  } else {
    if (!i.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
      ? l.target === e.navigation.nextEl
        ? e.slideTo(f + _)
        : e.slideTo(f)
      : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : f + _),
        e.swipeDirection === "prev" && e.slideTo(p !== null ? p : f));
  }
}
function Co() {
  const n = this,
    { params: e, el: t } = n;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && n.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = n;
  (n.allowSlideNext = !0),
    (n.allowSlidePrev = !0),
    n.updateSize(),
    n.updateSlides(),
    n.updateSlidesClasses(),
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    n.isEnd &&
    !n.isBeginning &&
    !n.params.centeredSlides
      ? n.slideTo(n.slides.length - 1, 0, !1, !0)
      : n.slideTo(n.activeIndex, 0, !1, !0),
    n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.run(),
    (n.allowSlidePrev = r),
    (n.allowSlideNext = i),
    n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow();
}
function Bc(n) {
  const e = this;
  !e.enabled ||
    e.allowClick ||
    (e.params.preventClicks && n.preventDefault(),
    e.params.preventClicksPropagation &&
      e.animating &&
      (n.stopPropagation(), n.stopImmediatePropagation()));
}
function Nc() {
  const n = this,
    { wrapperEl: e, rtlTranslate: t, enabled: i } = n;
  if (!i) return;
  (n.previousTranslate = n.translate),
    n.isHorizontal()
      ? (n.translate = -e.scrollLeft)
      : (n.translate = -e.scrollTop),
    n.translate === 0 && (n.translate = 0),
    n.updateActiveIndex(),
    n.updateSlidesClasses();
  let r;
  const s = n.maxTranslate() - n.minTranslate();
  s === 0 ? (r = 0) : (r = (n.translate - n.minTranslate()) / s),
    r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
    n.emit("setTranslate", n.translate, !1);
}
let Eo = !1;
function Fc() {}
const ma = (n, e) => {
  const t = Ve(),
    {
      params: i,
      touchEvents: r,
      el: s,
      wrapperEl: o,
      device: a,
      support: l,
    } = n,
    u = !!i.nested,
    c = e === "on" ? "addEventListener" : "removeEventListener",
    h = e;
  if (!l.touch)
    s[c](r.start, n.onTouchStart, !1),
      t[c](r.move, n.onTouchMove, u),
      t[c](r.end, n.onTouchEnd, !1);
  else {
    const f =
      r.start === "touchstart" && l.passiveListener && i.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    s[c](r.start, n.onTouchStart, f),
      s[c](
        r.move,
        n.onTouchMove,
        l.passiveListener ? { passive: !1, capture: u } : u
      ),
      s[c](r.end, n.onTouchEnd, f),
      r.cancel && s[c](r.cancel, n.onTouchEnd, f);
  }
  (i.preventClicks || i.preventClicksPropagation) &&
    s[c]("click", n.onClick, !0),
    i.cssMode && o[c]("scroll", n.onScroll),
    i.updateOnWindowResize
      ? n[h](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Co,
          !0
        )
      : n[h]("observerUpdate", Co, !0);
};
function Gc() {
  const n = this,
    e = Ve(),
    { params: t, support: i } = n;
  (n.onTouchStart = Rc.bind(n)),
    (n.onTouchMove = zc.bind(n)),
    (n.onTouchEnd = $c.bind(n)),
    t.cssMode && (n.onScroll = Nc.bind(n)),
    (n.onClick = Bc.bind(n)),
    i.touch && !Eo && (e.addEventListener("touchstart", Fc), (Eo = !0)),
    ma(n, "on");
}
function Vc() {
  ma(this, "off");
}
const qc = { attachEvents: Gc, detachEvents: Vc },
  Po = (n, e) => n.grid && e.grid && e.grid.rows > 1;
function Hc() {
  const n = this,
    {
      activeIndex: e,
      initialized: t,
      loopedSlides: i = 0,
      params: r,
      $el: s,
    } = n,
    o = r.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const a = n.getBreakpoint(o, n.params.breakpointsBase, n.el);
  if (!a || n.currentBreakpoint === a) return;
  const u = (a in o ? o[a] : void 0) || n.originalParams,
    c = Po(n, r),
    h = Po(n, u),
    f = r.enabled;
  c && !h
    ? (s.removeClass(
        `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
      ),
      n.emitContainerClasses())
    : !c &&
      h &&
      (s.addClass(`${r.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && r.grid.fill === "column")) &&
        s.addClass(`${r.containerModifierClass}grid-column`),
      n.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((g) => {
      const _ = r[g] && r[g].enabled,
        v = u[g] && u[g].enabled;
      _ && !v && n[g].disable(), !_ && v && n[g].enable();
    });
  const d = u.direction && u.direction !== r.direction,
    m = r.loop && (u.slidesPerView !== r.slidesPerView || d);
  d && t && n.changeDirection(), xt(n.params, u);
  const p = n.params.enabled;
  Object.assign(n, {
    allowTouchMove: n.params.allowTouchMove,
    allowSlideNext: n.params.allowSlideNext,
    allowSlidePrev: n.params.allowSlidePrev,
  }),
    f && !p ? n.disable() : !f && p && n.enable(),
    (n.currentBreakpoint = a),
    n.emit("_beforeBreakpoint", u),
    m &&
      t &&
      (n.loopDestroy(),
      n.loopCreate(),
      n.updateSlides(),
      n.slideTo(e - i + n.loopedSlides, 0, !1)),
    n.emit("breakpoint", u);
}
function jc(n, e = "window", t) {
  if (!n || (e === "container" && !t)) return;
  let i = !1;
  const r = Re(),
    s = e === "window" ? r.innerHeight : t.clientHeight,
    o = Object.keys(n).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: s * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: u } = o[a];
    e === "window"
      ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
      : u <= t.clientWidth && (i = l);
  }
  return i || "max";
}
const Yc = { setBreakpoint: Hc, getBreakpoint: jc };
function Wc(n, e) {
  const t = [];
  return (
    n.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((r) => {
            i[r] && t.push(e + r);
          })
        : typeof i == "string" && t.push(e + i);
    }),
    t
  );
}
function Xc() {
  const n = this,
    { classNames: e, params: t, rtl: i, $el: r, device: s, support: o } = n,
    a = Wc(
      [
        "initialized",
        t.direction,
        { "pointer-events": !o.touch },
        { "free-mode": n.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: i },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
        { "watch-progress": t.watchSlidesProgress },
      ],
      t.containerModifierClass
    );
  e.push(...a), r.addClass([...e].join(" ")), n.emitContainerClasses();
}
function Uc() {
  const n = this,
    { $el: e, classNames: t } = n;
  e.removeClass(t.join(" ")), n.emitContainerClasses();
}
const Kc = { addClasses: Xc, removeClasses: Uc };
function Qc(n, e, t, i, r, s) {
  const o = Re();
  let a;
  function l() {
    s && s();
  }
  !D(n).parent("picture")[0] && (!n.complete || !r) && e
    ? ((a = new o.Image()),
      (a.onload = l),
      (a.onerror = l),
      i && (a.sizes = i),
      t && (a.srcset = t),
      e && (a.src = e))
    : l();
}
function Zc() {
  const n = this;
  n.imagesToLoad = n.$el.find("img");
  function e() {
    typeof n > "u" ||
      n === null ||
      !n ||
      n.destroyed ||
      (n.imagesLoaded !== void 0 && (n.imagesLoaded += 1),
      n.imagesLoaded === n.imagesToLoad.length &&
        (n.params.updateOnImagesReady && n.update(), n.emit("imagesReady")));
  }
  for (let t = 0; t < n.imagesToLoad.length; t += 1) {
    const i = n.imagesToLoad[t];
    n.loadImage(
      i,
      i.currentSrc || i.getAttribute("src"),
      i.srcset || i.getAttribute("srcset"),
      i.sizes || i.getAttribute("sizes"),
      !0,
      e
    );
  }
}
const Jc = { loadImage: Qc, preloadImages: Zc };
function ef() {
  const n = this,
    { isLocked: e, params: t } = n,
    { slidesOffsetBefore: i } = t;
  if (i) {
    const r = n.slides.length - 1,
      s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
    n.isLocked = n.size > s;
  } else n.isLocked = n.snapGrid.length === 1;
  t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
    t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
    e && e !== n.isLocked && (n.isEnd = !1),
    e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
}
const tf = { checkOverflow: ef },
  Mo = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function rf(n, e) {
  return function (i = {}) {
    const r = Object.keys(i)[0],
      s = i[r];
    if (typeof s != "object" || s === null) {
      xt(e, i);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
        n[r] === !0 &&
        (n[r] = { auto: !0 }),
      !(r in n && "enabled" in s))
    ) {
      xt(e, i);
      return;
    }
    n[r] === !0 && (n[r] = { enabled: !0 }),
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
      n[r] || (n[r] = { enabled: !1 }),
      xt(e, i);
  };
}
const os = {
    eventsEmitter: Zu,
    update: lc,
    translate: pc,
    transition: vc,
    slide: Ec,
    loop: Oc,
    grabCursor: Ac,
    events: qc,
    breakpoints: Yc,
    checkOverflow: tf,
    classes: Kc,
    images: Jc,
  },
  as = {};
class ke {
  constructor(...e) {
    let t, i;
    if (
      (e.length === 1 &&
      e[0].constructor &&
      Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
        ? (i = e[0])
        : ([t, i] = e),
      i || (i = {}),
      (i = xt({}, i)),
      t && !i.el && (i.el = t),
      i.el && D(i.el).length > 1)
    ) {
      const a = [];
      return (
        D(i.el).each((l) => {
          const u = xt({}, i, { el: l });
          a.push(new ke(u));
        }),
        a
      );
    }
    const r = this;
    (r.__swiper__ = !0),
      (r.support = ha()),
      (r.device = Wu({ userAgent: i.userAgent })),
      (r.browser = Uu()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
    const s = {};
    r.modules.forEach((a) => {
      a({
        swiper: r,
        extendParams: rf(i, s),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      });
    });
    const o = xt({}, Mo, s);
    return (
      (r.params = xt({}, o, as, i)),
      (r.originalParams = xt({}, r.params)),
      (r.passedParams = xt({}, i)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((a) => {
          r.on(a, r.params.on[a]);
        }),
      r.params && r.params.onAny && r.onAny(r.params.onAny),
      (r.$ = D),
      Object.assign(r, {
        enabled: r.params.enabled,
        el: t,
        classNames: [],
        slides: D(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return r.params.direction === "horizontal";
        },
        isVertical() {
          return r.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEvents: (function () {
          const l = ["touchstart", "touchmove", "touchend", "touchcancel"],
            u = ["pointerdown", "pointermove", "pointerup"];
          return (
            (r.touchEventsTouch = {
              start: l[0],
              move: l[1],
              end: l[2],
              cancel: l[3],
            }),
            (r.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
            r.support.touch || !r.params.simulateTouch
              ? r.touchEventsTouch
              : r.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: wi(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      r.emit("_swiper"),
      r.params.init && r.init(),
      r
    );
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    !e.enabled ||
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, t) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = i.minTranslate(),
      o = (i.maxTranslate() - r) * e + r;
    i.translateTo(o, typeof t > "u" ? 0 : t),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className
      .split(" ")
      .filter(
        (i) =>
          i.indexOf("swiper") === 0 ||
          i.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (i) =>
              i.indexOf("swiper-slide") === 0 ||
              i.indexOf(t.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.each((i) => {
      const r = e.getSlideClasses(i);
      t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
    }),
      e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e = "current", t = !1) {
    const i = this,
      {
        params: r,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = i;
    let c = 1;
    if (r.centeredSlides) {
      let h = s[u].swiperSlideSize,
        f;
      for (let d = u + 1; d < s.length; d += 1)
        s[d] &&
          !f &&
          ((h += s[d].swiperSlideSize), (c += 1), h > l && (f = !0));
      for (let d = u - 1; d >= 0; d -= 1)
        s[d] &&
          !f &&
          ((h += s[d].swiperSlideSize), (c += 1), h > l && (f = !0));
    } else if (e === "current")
      for (let h = u + 1; h < s.length; h += 1)
        (t ? o[h] + a[h] - o[u] < l : o[h] - o[u] < l) && (c += 1);
    else for (let h = u - 1; h >= 0; h -= 1) o[u] - o[h] < l && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: i } = e;
    i.breakpoints && e.setBreakpoint(),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function r() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    e.params.freeMode && e.params.freeMode.enabled
      ? (r(), e.params.autoHeight && e.updateAutoHeight())
      : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
        e.isEnd &&
        !e.params.centeredSlides
          ? (s = e.slideTo(e.slides.length - 1, 0, !1, !0))
          : (s = e.slideTo(e.activeIndex, 0, !1, !0)),
        s || r()),
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
      e.emit("update");
  }
  changeDirection(e, t = !0) {
    const i = this,
      r = i.params.direction;
    return (
      e || (e = r === "horizontal" ? "vertical" : "horizontal"),
      e === r ||
        (e !== "horizontal" && e !== "vertical") ||
        (i.$el
          .removeClass(`${i.params.containerModifierClass}${r}`)
          .addClass(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        (i.params.direction = e),
        i.slides.each((s) => {
          e === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        i.emit("changeDirection"),
        t && i.update()),
      i
    );
  }
  changeLanguageDirection(e) {
    const t = this;
    (t.rtl && e === "rtl") ||
      (!t.rtl && e === "ltr") ||
      ((t.rtl = e === "rtl"),
      (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
      t.rtl
        ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "rtl"))
        : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
          (t.el.dir = "ltr")),
      t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    const i = D(e || t.params.el);
    if (((e = i[0]), !e)) return !1;
    e.swiper = t;
    const r = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => {
      if (e && e.shadowRoot && e.shadowRoot.querySelector) {
        const a = D(e.shadowRoot.querySelector(r()));
        return (a.children = (l) => i.children(l)), a;
      }
      return i.children ? i.children(r()) : D(i).children(r());
    })();
    if (o.length === 0 && t.params.createElements) {
      const l = Ve().createElement("div");
      (o = D(l)),
        (l.className = t.params.wrapperClass),
        i.append(l),
        i.children(`.${t.params.slideClass}`).each((u) => {
          o.append(u);
        });
    }
    return (
      Object.assign(t, {
        $el: i,
        el: e,
        $wrapperEl: o,
        wrapperEl: o[0],
        mounted: !0,
        rtl: e.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl",
        rtlTranslate:
          t.params.direction === "horizontal" &&
          (e.dir.toLowerCase() === "rtl" || i.css("direction") === "rtl"),
        wrongRTL: o.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const t = this;
    return (
      t.initialized ||
        t.mount(e) === !1 ||
        (t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.params.loop && t.loopCreate(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.preloadImages && t.preloadImages(),
        t.params.loop
          ? t.slideTo(
              t.params.initialSlide + t.loopedSlides,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.attachEvents(),
        (t.initialized = !0),
        t.emit("init"),
        t.emit("afterInit")),
      t
    );
  }
  destroy(e = !0, t = !0) {
    const i = this,
      { params: r, $el: s, $wrapperEl: o, slides: a } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        r.loop && i.loopDestroy(),
        t &&
          (i.removeClasses(),
          s.removeAttr("style"),
          o.removeAttr("style"),
          a &&
            a.length &&
            a
              .removeClass(
                [
                  r.slideVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass,
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((l) => {
          i.off(l);
        }),
        e !== !1 && ((i.$el[0].swiper = null), Gu(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    xt(as, e);
  }
  static get extendedDefaults() {
    return as;
  }
  static get defaults() {
    return Mo;
  }
  static installModule(e) {
    ke.prototype.__modules__ || (ke.prototype.__modules__ = []);
    const t = ke.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((t) => ke.installModule(t)), ke)
      : (ke.installModule(e), ke);
  }
}
Object.keys(os).forEach((n) => {
  Object.keys(os[n]).forEach((e) => {
    ke.prototype[e] = os[n][e];
  });
});
ke.use([Ku, Qu]);
function nf(n, e, t, i) {
  const r = Ve();
  return (
    n.params.createElements &&
      Object.keys(i).forEach((s) => {
        if (!t[s] && t.auto === !0) {
          let o = n.$el.children(`.${i[s]}`)[0];
          o ||
            ((o = r.createElement("div")),
            (o.className = i[s]),
            n.$el.append(o)),
            (t[s] = o),
            (e[s] = o);
        }
      }),
    t
  );
}
function ga({ swiper: n, extendParams: e, on: t, emit: i }) {
  e({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (n.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null,
    });
  function r(d) {
    let m;
    return (
      d &&
        ((m = D(d)),
        n.params.uniqueNavElements &&
          typeof d == "string" &&
          m.length > 1 &&
          n.$el.find(d).length === 1 &&
          (m = n.$el.find(d))),
      m
    );
  }
  function s(d, m) {
    const p = n.params.navigation;
    d &&
      d.length > 0 &&
      (d[m ? "addClass" : "removeClass"](p.disabledClass),
      d[0] && d[0].tagName === "BUTTON" && (d[0].disabled = m),
      n.params.watchOverflow &&
        n.enabled &&
        d[n.isLocked ? "addClass" : "removeClass"](p.lockClass));
  }
  function o() {
    if (n.params.loop) return;
    const { $nextEl: d, $prevEl: m } = n.navigation;
    s(m, n.isBeginning && !n.params.rewind), s(d, n.isEnd && !n.params.rewind);
  }
  function a(d) {
    d.preventDefault(),
      !(n.isBeginning && !n.params.loop && !n.params.rewind) &&
        (n.slidePrev(), i("navigationPrev"));
  }
  function l(d) {
    d.preventDefault(),
      !(n.isEnd && !n.params.loop && !n.params.rewind) &&
        (n.slideNext(), i("navigationNext"));
  }
  function u() {
    const d = n.params.navigation;
    if (
      ((n.params.navigation = nf(
        n,
        n.originalParams.navigation,
        n.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(d.nextEl || d.prevEl))
    )
      return;
    const m = r(d.nextEl),
      p = r(d.prevEl);
    m && m.length > 0 && m.on("click", l),
      p && p.length > 0 && p.on("click", a),
      Object.assign(n.navigation, {
        $nextEl: m,
        nextEl: m && m[0],
        $prevEl: p,
        prevEl: p && p[0],
      }),
      n.enabled || (m && m.addClass(d.lockClass), p && p.addClass(d.lockClass));
  }
  function c() {
    const { $nextEl: d, $prevEl: m } = n.navigation;
    d &&
      d.length &&
      (d.off("click", l), d.removeClass(n.params.navigation.disabledClass)),
      m &&
        m.length &&
        (m.off("click", a), m.removeClass(n.params.navigation.disabledClass));
  }
  t("init", () => {
    n.params.navigation.enabled === !1 ? f() : (u(), o());
  }),
    t("toEdge fromEdge lock unlock", () => {
      o();
    }),
    t("destroy", () => {
      c();
    }),
    t("enable disable", () => {
      const { $nextEl: d, $prevEl: m } = n.navigation;
      d &&
        d[n.enabled ? "removeClass" : "addClass"](
          n.params.navigation.lockClass
        ),
        m &&
          m[n.enabled ? "removeClass" : "addClass"](
            n.params.navigation.lockClass
          );
    }),
    t("click", (d, m) => {
      const { $nextEl: p, $prevEl: g } = n.navigation,
        _ = m.target;
      if (n.params.navigation.hideOnClick && !D(_).is(g) && !D(_).is(p)) {
        if (
          n.pagination &&
          n.params.pagination &&
          n.params.pagination.clickable &&
          (n.pagination.el === _ || n.pagination.el.contains(_))
        )
          return;
        let v;
        p
          ? (v = p.hasClass(n.params.navigation.hiddenClass))
          : g && (v = g.hasClass(n.params.navigation.hiddenClass)),
          i(v === !0 ? "navigationShow" : "navigationHide"),
          p && p.toggleClass(n.params.navigation.hiddenClass),
          g && g.toggleClass(n.params.navigation.hiddenClass);
      }
    });
  const h = () => {
      n.$el.removeClass(n.params.navigation.navigationDisabledClass), u(), o();
    },
    f = () => {
      n.$el.addClass(n.params.navigation.navigationDisabledClass), c();
    };
  Object.assign(n.navigation, {
    enable: h,
    disable: f,
    update: o,
    init: u,
    destroy: c,
  });
}
function _a({ swiper: n, extendParams: e, on: t, emit: i }) {
  let r;
  (n.autoplay = { running: !1, paused: !1 }),
    e({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  function s() {
    if (!n.size) {
      (n.autoplay.running = !1), (n.autoplay.paused = !1);
      return;
    }
    const p = n.slides.eq(n.activeIndex);
    let g = n.params.autoplay.delay;
    p.attr("data-swiper-autoplay") &&
      (g = p.attr("data-swiper-autoplay") || n.params.autoplay.delay),
      clearTimeout(r),
      (r = $n(() => {
        let _;
        n.params.autoplay.reverseDirection
          ? n.params.loop
            ? (n.loopFix(),
              (_ = n.slidePrev(n.params.speed, !0, !0)),
              i("autoplay"))
            : n.isBeginning
            ? n.params.autoplay.stopOnLastSlide
              ? a()
              : ((_ = n.slideTo(n.slides.length - 1, n.params.speed, !0, !0)),
                i("autoplay"))
            : ((_ = n.slidePrev(n.params.speed, !0, !0)), i("autoplay"))
          : n.params.loop
          ? (n.loopFix(),
            (_ = n.slideNext(n.params.speed, !0, !0)),
            i("autoplay"))
          : n.isEnd
          ? n.params.autoplay.stopOnLastSlide
            ? a()
            : ((_ = n.slideTo(0, n.params.speed, !0, !0)), i("autoplay"))
          : ((_ = n.slideNext(n.params.speed, !0, !0)), i("autoplay")),
          ((n.params.cssMode && n.autoplay.running) || _ === !1) && s();
      }, g));
  }
  function o() {
    return typeof r < "u" || n.autoplay.running
      ? !1
      : ((n.autoplay.running = !0), i("autoplayStart"), s(), !0);
  }
  function a() {
    return !n.autoplay.running || typeof r > "u"
      ? !1
      : (r && (clearTimeout(r), (r = void 0)),
        (n.autoplay.running = !1),
        i("autoplayStop"),
        !0);
  }
  function l(p) {
    !n.autoplay.running ||
      n.autoplay.paused ||
      (r && clearTimeout(r),
      (n.autoplay.paused = !0),
      p === 0 || !n.params.autoplay.waitForTransition
        ? ((n.autoplay.paused = !1), s())
        : ["transitionend", "webkitTransitionEnd"].forEach((g) => {
            n.$wrapperEl[0].addEventListener(g, c);
          }));
  }
  function u() {
    const p = Ve();
    p.visibilityState === "hidden" && n.autoplay.running && l(),
      p.visibilityState === "visible" &&
        n.autoplay.paused &&
        (s(), (n.autoplay.paused = !1));
  }
  function c(p) {
    !n ||
      n.destroyed ||
      !n.$wrapperEl ||
      (p.target === n.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((g) => {
          n.$wrapperEl[0].removeEventListener(g, c);
        }),
        (n.autoplay.paused = !1),
        n.autoplay.running ? s() : a()));
  }
  function h() {
    n.params.autoplay.disableOnInteraction ? a() : (i("autoplayPause"), l()),
      ["transitionend", "webkitTransitionEnd"].forEach((p) => {
        n.$wrapperEl[0].removeEventListener(p, c);
      });
  }
  function f() {
    n.params.autoplay.disableOnInteraction ||
      ((n.autoplay.paused = !1), i("autoplayResume"), s());
  }
  function d() {
    n.params.autoplay.pauseOnMouseEnter &&
      (n.$el.on("mouseenter", h), n.$el.on("mouseleave", f));
  }
  function m() {
    n.$el.off("mouseenter", h), n.$el.off("mouseleave", f);
  }
  t("init", () => {
    n.params.autoplay.enabled &&
      (o(), Ve().addEventListener("visibilitychange", u), d());
  }),
    t("beforeTransitionStart", (p, g, _) => {
      n.autoplay.running &&
        (_ || !n.params.autoplay.disableOnInteraction
          ? n.autoplay.pause(g)
          : a());
    }),
    t("sliderFirstMove", () => {
      n.autoplay.running &&
        (n.params.autoplay.disableOnInteraction ? a() : l());
    }),
    t("touchEnd", () => {
      n.params.cssMode &&
        n.autoplay.paused &&
        !n.params.autoplay.disableOnInteraction &&
        s();
    }),
    t("destroy", () => {
      m(),
        n.autoplay.running && a(),
        Ve().removeEventListener("visibilitychange", u);
    }),
    Object.assign(n.autoplay, { pause: l, run: s, start: o, stop: a });
}
function va({ swiper: n, extendParams: e, on: t }) {
  e({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let i = !1,
    r = !1;
  n.thumbs = { swiper: null };
  function s() {
    const l = n.thumbs.swiper;
    if (!l || l.destroyed) return;
    const u = l.clickedIndex,
      c = l.clickedSlide;
    if (
      (c && D(c).hasClass(n.params.thumbs.slideThumbActiveClass)) ||
      typeof u > "u" ||
      u === null
    )
      return;
    let h;
    if (
      (l.params.loop
        ? (h = parseInt(D(l.clickedSlide).attr("data-swiper-slide-index"), 10))
        : (h = u),
      n.params.loop)
    ) {
      let f = n.activeIndex;
      n.slides.eq(f).hasClass(n.params.slideDuplicateClass) &&
        (n.loopFix(),
        (n._clientLeft = n.$wrapperEl[0].clientLeft),
        (f = n.activeIndex));
      const d = n.slides
          .eq(f)
          .prevAll(`[data-swiper-slide-index="${h}"]`)
          .eq(0)
          .index(),
        m = n.slides
          .eq(f)
          .nextAll(`[data-swiper-slide-index="${h}"]`)
          .eq(0)
          .index();
      typeof d > "u"
        ? (h = m)
        : typeof m > "u"
        ? (h = d)
        : m - f < f - d
        ? (h = m)
        : (h = d);
    }
    n.slideTo(h);
  }
  function o() {
    const { thumbs: l } = n.params;
    if (i) return !1;
    i = !0;
    const u = n.constructor;
    if (l.swiper instanceof u)
      (n.thumbs.swiper = l.swiper),
        Object.assign(n.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(n.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        });
    else if ($r(l.swiper)) {
      const c = Object.assign({}, l.swiper);
      Object.assign(c, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (n.thumbs.swiper = new u(c)),
        (r = !0);
    }
    return (
      n.thumbs.swiper.$el.addClass(n.params.thumbs.thumbsContainerClass),
      n.thumbs.swiper.on("tap", s),
      !0
    );
  }
  function a(l) {
    const u = n.thumbs.swiper;
    if (!u || u.destroyed) return;
    const c =
      u.params.slidesPerView === "auto"
        ? u.slidesPerViewDynamic()
        : u.params.slidesPerView;
    let h = 1;
    const f = n.params.thumbs.slideThumbActiveClass;
    if (
      (n.params.slidesPerView > 1 &&
        !n.params.centeredSlides &&
        (h = n.params.slidesPerView),
      n.params.thumbs.multipleActiveThumbs || (h = 1),
      (h = Math.floor(h)),
      u.slides.removeClass(f),
      u.params.loop || (u.params.virtual && u.params.virtual.enabled))
    )
      for (let p = 0; p < h; p += 1)
        u.$wrapperEl
          .children(`[data-swiper-slide-index="${n.realIndex + p}"]`)
          .addClass(f);
    else
      for (let p = 0; p < h; p += 1) u.slides.eq(n.realIndex + p).addClass(f);
    const d = n.params.thumbs.autoScrollOffset,
      m = d && !u.params.loop;
    if (n.realIndex !== u.realIndex || m) {
      let p = u.activeIndex,
        g,
        _;
      if (u.params.loop) {
        u.slides.eq(p).hasClass(u.params.slideDuplicateClass) &&
          (u.loopFix(),
          (u._clientLeft = u.$wrapperEl[0].clientLeft),
          (p = u.activeIndex));
        const v = u.slides
            .eq(p)
            .prevAll(`[data-swiper-slide-index="${n.realIndex}"]`)
            .eq(0)
            .index(),
          b = u.slides
            .eq(p)
            .nextAll(`[data-swiper-slide-index="${n.realIndex}"]`)
            .eq(0)
            .index();
        typeof v > "u"
          ? (g = b)
          : typeof b > "u"
          ? (g = v)
          : b - p === p - v
          ? (g = u.params.slidesPerGroup > 1 ? b : p)
          : b - p < p - v
          ? (g = b)
          : (g = v),
          (_ = n.activeIndex > n.previousIndex ? "next" : "prev");
      } else (g = n.realIndex), (_ = g > n.previousIndex ? "next" : "prev");
      m && (g += _ === "next" ? d : -1 * d),
        u.visibleSlidesIndexes &&
          u.visibleSlidesIndexes.indexOf(g) < 0 &&
          (u.params.centeredSlides
            ? g > p
              ? (g = g - Math.floor(c / 2) + 1)
              : (g = g + Math.floor(c / 2) - 1)
            : g > p && u.params.slidesPerGroup,
          u.slideTo(g, l ? 0 : void 0));
    }
  }
  t("beforeInit", () => {
    const { thumbs: l } = n.params;
    !l || !l.swiper || (o(), a(!0));
  }),
    t("slideChange update resize observerUpdate", () => {
      a();
    }),
    t("setTransition", (l, u) => {
      const c = n.thumbs.swiper;
      !c || c.destroyed || c.setTransition(u);
    }),
    t("beforeDestroy", () => {
      const l = n.thumbs.swiper;
      !l || l.destroyed || (r && l.destroy());
    }),
    Object.assign(n.thumbs, { init: o, update: a });
}
function ya({ swiper: n, extendParams: e, emit: t, once: i }) {
  e({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function r() {
    const a = n.getTranslate();
    n.setTranslate(a),
      n.setTransition(0),
      (n.touchEventsData.velocities.length = 0),
      n.freeMode.onTouchEnd({ currentPos: n.rtl ? n.translate : -n.translate });
  }
  function s() {
    const { touchEventsData: a, touches: l } = n;
    a.velocities.length === 0 &&
      a.velocities.push({
        position: l[n.isHorizontal() ? "startX" : "startY"],
        time: a.touchStartTime,
      }),
      a.velocities.push({
        position: l[n.isHorizontal() ? "currentX" : "currentY"],
        time: wi(),
      });
  }
  function o({ currentPos: a }) {
    const {
        params: l,
        $wrapperEl: u,
        rtlTranslate: c,
        snapGrid: h,
        touchEventsData: f,
      } = n,
      m = wi() - f.touchStartTime;
    if (a < -n.minTranslate()) {
      n.slideTo(n.activeIndex);
      return;
    }
    if (a > -n.maxTranslate()) {
      n.slides.length < h.length
        ? n.slideTo(h.length - 1)
        : n.slideTo(n.slides.length - 1);
      return;
    }
    if (l.freeMode.momentum) {
      if (f.velocities.length > 1) {
        const E = f.velocities.pop(),
          x = f.velocities.pop(),
          P = E.position - x.position,
          M = E.time - x.time;
        (n.velocity = P / M),
          (n.velocity /= 2),
          Math.abs(n.velocity) < l.freeMode.minimumVelocity && (n.velocity = 0),
          (M > 150 || wi() - E.time > 300) && (n.velocity = 0);
      } else n.velocity = 0;
      (n.velocity *= l.freeMode.momentumVelocityRatio),
        (f.velocities.length = 0);
      let p = 1e3 * l.freeMode.momentumRatio;
      const g = n.velocity * p;
      let _ = n.translate + g;
      c && (_ = -_);
      let v = !1,
        b;
      const T = Math.abs(n.velocity) * 20 * l.freeMode.momentumBounceRatio;
      let C;
      if (_ < n.maxTranslate())
        l.freeMode.momentumBounce
          ? (_ + n.maxTranslate() < -T && (_ = n.maxTranslate() - T),
            (b = n.maxTranslate()),
            (v = !0),
            (f.allowMomentumBounce = !0))
          : (_ = n.maxTranslate()),
          l.loop && l.centeredSlides && (C = !0);
      else if (_ > n.minTranslate())
        l.freeMode.momentumBounce
          ? (_ - n.minTranslate() > T && (_ = n.minTranslate() + T),
            (b = n.minTranslate()),
            (v = !0),
            (f.allowMomentumBounce = !0))
          : (_ = n.minTranslate()),
          l.loop && l.centeredSlides && (C = !0);
      else if (l.freeMode.sticky) {
        let E;
        for (let x = 0; x < h.length; x += 1)
          if (h[x] > -_) {
            E = x;
            break;
          }
        Math.abs(h[E] - _) < Math.abs(h[E - 1] - _) ||
        n.swipeDirection === "next"
          ? (_ = h[E])
          : (_ = h[E - 1]),
          (_ = -_);
      }
      if (
        (C &&
          i("transitionEnd", () => {
            n.loopFix();
          }),
        n.velocity !== 0)
      ) {
        if (
          (c
            ? (p = Math.abs((-_ - n.translate) / n.velocity))
            : (p = Math.abs((_ - n.translate) / n.velocity)),
          l.freeMode.sticky)
        ) {
          const E = Math.abs((c ? -_ : _) - n.translate),
            x = n.slidesSizesGrid[n.activeIndex];
          E < x
            ? (p = l.speed)
            : E < 2 * x
            ? (p = l.speed * 1.5)
            : (p = l.speed * 2.5);
        }
      } else if (l.freeMode.sticky) {
        n.slideToClosest();
        return;
      }
      l.freeMode.momentumBounce && v
        ? (n.updateProgress(b),
          n.setTransition(p),
          n.setTranslate(_),
          n.transitionStart(!0, n.swipeDirection),
          (n.animating = !0),
          u.transitionEnd(() => {
            !n ||
              n.destroyed ||
              !f.allowMomentumBounce ||
              (t("momentumBounce"),
              n.setTransition(l.speed),
              setTimeout(() => {
                n.setTranslate(b),
                  u.transitionEnd(() => {
                    !n || n.destroyed || n.transitionEnd();
                  });
              }, 0));
          }))
        : n.velocity
        ? (t("_freeModeNoMomentumRelease"),
          n.updateProgress(_),
          n.setTransition(p),
          n.setTranslate(_),
          n.transitionStart(!0, n.swipeDirection),
          n.animating ||
            ((n.animating = !0),
            u.transitionEnd(() => {
              !n || n.destroyed || n.transitionEnd();
            })))
        : n.updateProgress(_),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    } else if (l.freeMode.sticky) {
      n.slideToClosest();
      return;
    } else l.freeMode && t("_freeModeNoMomentumRelease");
    (!l.freeMode.momentum || m >= l.longSwipesMs) &&
      (n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses());
  }
  Object.assign(n, {
    freeMode: { onTouchStart: r, onTouchMove: s, onTouchEnd: o },
  });
}
function sf(n) {
  const {
    effect: e,
    swiper: t,
    on: i,
    setTranslate: r,
    setTransition: s,
    overwriteParams: o,
    perspective: a,
    recreateShadows: l,
    getEffectParams: u,
  } = n;
  i("beforeInit", () => {
    if (t.params.effect !== e) return;
    t.classNames.push(`${t.params.containerModifierClass}${e}`),
      a && a() && t.classNames.push(`${t.params.containerModifierClass}3d`);
    const h = o ? o() : {};
    Object.assign(t.params, h), Object.assign(t.originalParams, h);
  }),
    i("setTranslate", () => {
      t.params.effect === e && r();
    }),
    i("setTransition", (h, f) => {
      t.params.effect === e && s(f);
    }),
    i("transitionEnd", () => {
      if (t.params.effect === e && l) {
        if (!u || !u().slideShadows) return;
        t.slides.each((h) => {
          t.$(h)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .remove();
        }),
          l();
      }
    });
  let c;
  i("virtualUpdate", () => {
    t.params.effect === e &&
      (t.slides.length || (c = !0),
      requestAnimationFrame(() => {
        c && t.slides && t.slides.length && (r(), (c = !1));
      }));
  });
}
function of(n, e) {
  return n.transformEl
    ? e
        .find(n.transformEl)
        .css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
        })
    : e;
}
function af({ swiper: n, duration: e, transformEl: t, allSlides: i }) {
  const { slides: r, activeIndex: s, $wrapperEl: o } = n;
  if (n.params.virtualTranslate && e !== 0) {
    let a = !1,
      l;
    i ? (l = t ? r.find(t) : r) : (l = t ? r.eq(s).find(t) : r.eq(s)),
      l.transitionEnd(() => {
        if (a || !n || n.destroyed) return;
        (a = !0), (n.animating = !1);
        const u = ["webkitTransitionEnd", "transitionend"];
        for (let c = 0; c < u.length; c += 1) o.trigger(u[c]);
      });
  }
}
function Ta({ swiper: n, extendParams: e, on: t }) {
  e({ fadeEffect: { crossFade: !1, transformEl: null } }),
    sf({
      effect: "fade",
      swiper: n,
      on: t,
      setTranslate: () => {
        const { slides: s } = n,
          o = n.params.fadeEffect;
        for (let a = 0; a < s.length; a += 1) {
          const l = n.slides.eq(a);
          let c = -l[0].swiperSlideOffset;
          n.params.virtualTranslate || (c -= n.translate);
          let h = 0;
          n.isHorizontal() || ((h = c), (c = 0));
          const f = n.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(l[0].progress), 0)
            : 1 + Math.min(Math.max(l[0].progress, -1), 0);
          of(o, l)
            .css({ opacity: f })
            .transform(`translate3d(${c}px, ${h}px, 0px)`);
        }
      },
      setTransition: (s) => {
        const { transformEl: o } = n.params.fadeEffect;
        (o ? n.slides.find(o) : n.slides).transition(s),
          af({ swiper: n, duration: s, transformEl: o, allSlides: !0 });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !n.params.cssMode,
      }),
    });
}
ke.use([ga, Ta, va, _a, ya]);
class lf {
  constructor() {
    me(this, "feedbackSlider");
    me(this, "mainSlider");
    me(this, "mainThumbs");
    me(this, "helpMobileSlider");
    me(this, "topGamesMobileSlider");
    me(this, "newGamesMobileSlider");
  }
  initFeedbackSlider() {
    const e = 5.208333333333334 * (window.innerWidth / 100);
    this.feedbackSlider = new ke(".js-feedback-slider", {
      slidesPerView: "auto",
      rewind: !0,
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 2,
          grabCursor: !0,
          spaceBetween: e,
          navigation: {
            nextEl: ".js-feedback-next",
            prevEl: ".js-feedback-prev",
          },
        },
      },
    });
  }
  initMainSlider() {
    (this.mainThumbs = new ke(".js-thumbs-slider", { slidesPerView: "auto" })),
      (this.mainSlider = new ke(".js-main-slider", {
        effect: "fade",
        rewind: !0,
        speed: 500,
        fadeEffect: { crossFade: !0 },
        thumbs: { swiper: this.mainThumbs },
        autoplay: { delay: 5e3, disableOnInteraction: !1 },
      }));
  }
  initHelpSliderOnMobile() {
    this.helpMobileSlider = new ke(".js-help-slider", {
      slidesPerView: "auto",
      spaceBetween: 12,
      allowTouchMove: !0,
      touchMoveStopPropagation: !0,
      touchEventsTarget: "container",
      freeMode: !0,
      autoplay: !0,
    });
  }
  initGameMobileSliders() {
    const e = { slidesPerView: "auto", spaceBetween: 12 };
    (this.topGamesMobileSlider = new ke(".js-top-games-slider", e)),
      (this.newGamesMobileSlider = new ke(".js-new-games-slider", e));
  }
  init() {
    this.initFeedbackSlider(),
      this.initMainSlider(),
      window.innerWidth < 768 && this.initHelpSliderOnMobile();
  }
}
const ko = new lf();
ke.use([ga, Ta, va, _a, ya]);
class uf {
  constructor() {
    me(this, "modal");
    me(this, "backBtn");
    me(this, "showPcBtn");
    me(this, "showAndroidBtn");
    me(this, "pcSteps");
    me(this, "defaultSteps");
    me(this, "androidSteps");
    me(this, "stepIsVisible");
    (this.modal = document.querySelector(".js-instruction-modal")),
      (this.backBtn = this.modal.querySelector(".js-back-btn")),
      (this.showPcBtn = this.modal.querySelector(".js-show-pc")),
      (this.showAndroidBtn = this.modal.querySelector(".js-show-android")),
      (this.defaultSteps = this.modal.querySelector(".js-default-content")),
      (this.pcSteps = this.modal.querySelector(".js-pc-content")),
      (this.androidSteps = this.modal.querySelector(".js-android-content")),
      (this.stepIsVisible = !1),
      this.init();
  }
  show() {
    this.modal.style.display = "block";
  }
  hide() {
    this.modal.style.display = "none";
  }
  bindEvents() {
    this.backBtn.addEventListener("click", () => {
      this.stepIsVisible
        ? ((this.stepIsVisible = !1),
          (this.pcSteps.style.display = "none"),
          (this.androidSteps.style.display = "none"),
          (this.defaultSteps.style.display = "block"))
        : this.hide();
    }),
      this.showPcBtn.addEventListener("click", () => {
        (this.stepIsVisible = !0),
          (this.pcSteps.style.display = "block"),
          (this.defaultSteps.style.display = "none");
      }),
      this.showAndroidBtn.addEventListener("click", () => {
        (this.stepIsVisible = !0),
          (this.androidSteps.style.display = "block"),
          (this.defaultSteps.style.display = "none");
      });
  }
  init() {
    this.bindEvents();
  }
}
const cf = new uf();
function oi(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
function ba(n, e) {
  (n.prototype = Object.create(e.prototype)),
    (n.prototype.constructor = n),
    (n.__proto__ = e);
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Et = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  wr = { duration: 0.5, overwrite: !1, delay: 0 },
  Qs,
  Xe,
  ge,
  Dt = 1e8,
  se = 1 / Dt,
  Cs = Math.PI * 2,
  ff = Cs / 4,
  df = 0,
  xa = Math.sqrt,
  hf = Math.cos,
  pf = Math.sin,
  Ie = function (e) {
    return typeof e == "string";
  },
  _e = function (e) {
    return typeof e == "function";
  },
  di = function (e) {
    return typeof e == "number";
  },
  Zs = function (e) {
    return typeof e > "u";
  },
  ii = function (e) {
    return typeof e == "object";
  },
  ft = function (e) {
    return e !== !1;
  },
  Js = function () {
    return typeof window < "u";
  },
  pn = function (e) {
    return _e(e) || Ie(e);
  },
  Sa =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Ue = Array.isArray,
  Es = /(?:-?\.?\d|\.)+/gi,
  wa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  pr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ls = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ca = /[+-]=-?[.\d]+/,
  Ea = /[^,'"\[\]\s]+/gi,
  mf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  fe,
  kt,
  Ps,
  eo,
  Pt = {},
  Bn = {},
  Pa,
  Ma = function (e) {
    return (Bn = tr(e, Pt)) && pt;
  },
  to = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Nn = function (e, t) {
    return !t && console.warn(e);
  },
  ka = function (e, t) {
    return (e && (Pt[e] = t) && Bn && (Bn[e] = t)) || Pt;
  },
  en = function () {
    return 0;
  },
  gf = { suppressEvents: !0, isStart: !0, kill: !1 },
  Pn = { suppressEvents: !0, kill: !1 },
  _f = { suppressEvents: !0 },
  io = {},
  Ci = [],
  Ms = {},
  Oa,
  St = {},
  us = {},
  Oo = 30,
  Mn = [],
  ro = "",
  no = function (e) {
    var t = e[0],
      i,
      r;
    if ((ii(t) || _e(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
      for (r = Mn.length; r-- && !Mn[r].targetTest(t); );
      i = Mn[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new el(e[r], i)))) ||
        e.splice(r, 1);
    return e;
  },
  Xi = function (e) {
    return e._gsap || no(At(e))[0]._gsap;
  },
  La = function (e, t, i) {
    return (i = e[t]) && _e(i)
      ? e[t]()
      : (Zs(i) && e.getAttribute && e.getAttribute(t)) || i;
  },
  dt = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Te = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Fe = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  vr = function (e, t) {
    var i = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    );
  },
  vf = function (e, t) {
    for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
    return r < i;
  },
  Fn = function () {
    var e = Ci.length,
      t = Ci.slice(0),
      i,
      r;
    for (Ms = {}, Ci.length = 0, i = 0; i < e; i++)
      (r = t[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Da = function (e, t, i, r) {
    Ci.length && !Xe && Fn(),
      e.render(t, i, r || (Xe && t < 0 && (e._initted || e._startAt))),
      Ci.length && !Xe && Fn();
  },
  Aa = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Ea).length < 2
      ? t
      : Ie(e)
      ? e.trim()
      : e;
  },
  Ia = function (e) {
    return e;
  },
  zt = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  yf = function (e) {
    return function (t, i) {
      for (var r in i)
        r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
    };
  },
  tr = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  Lo = function n(e, t) {
    for (var i in t)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (e[i] = ii(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
    return e;
  },
  Gn = function (e, t) {
    var i = {},
      r;
    for (r in e) r in t || (i[r] = e[r]);
    return i;
  },
  qr = function (e) {
    var t = e.parent || fe,
      i = e.keyframes ? yf(Ue(e.keyframes)) : zt;
    if (ft(e.inherit))
      for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Tf = function (e, t) {
    for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
    return i < 0;
  },
  Ra = function (e, t, i, r, s) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var o = e[r],
      a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[i]), (e[i] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  },
  Kn = function (e, t, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[i] === t && (e[i] = o),
      o ? (o._prev = s) : e[r] === t && (e[r] = s),
      (t._next = t._prev = t.parent = null);
  },
  Mi = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  Ui = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
    return e;
  },
  bf = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  ks = function (e, t, i, r) {
    return (
      e._startAt &&
      (Xe
        ? e._startAt.revert(Pn)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  xf = function n(e) {
    return !e || (e._ts && n(e.parent));
  },
  Do = function (e) {
    return e._repeat ? Cr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Cr = function (e, t) {
    var i = Math.floor((e /= t));
    return e && i === e ? i - 1 : i;
  },
  Vn = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Qn = function (e) {
    return (e._end = Fe(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || se) || 0)
    ));
  },
  Zn = function (e, t) {
    var i = e._dp;
    return (
      i &&
        i.smoothChildTiming &&
        e._ts &&
        ((e._start = Fe(
          i._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Qn(e),
        i._dirty || Ui(i, e)),
      e
    );
  },
  za = function (e, t) {
    var i;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((i = Vn(e.rawTime(), t)),
        (!t._dur || cn(0, t.totalDuration(), i) - t._tTime > se) &&
          t.render(i, !0)),
      Ui(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (i = e; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      e._zTime = -se;
    }
  },
  Zt = function (e, t, i, r) {
    return (
      t.parent && Mi(t),
      (t._start = Fe(
        (di(i) ? i : i || e !== fe ? Mt(e, i, t) : e._time) + t._delay
      )),
      (t._end = Fe(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      Ra(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Os(t) || (e._recent = t),
      r || za(e, t),
      e._ts < 0 && Zn(e, e._tTime),
      e
    );
  },
  $a = function (e, t) {
    return (
      (Pt.ScrollTrigger || to("scrollTrigger", t)) &&
      Pt.ScrollTrigger.create(t, e)
    );
  },
  Ba = function (e, t, i, r, s) {
    if ((oo(e, t, s), !e._initted)) return 1;
    if (
      !i &&
      e._pt &&
      !Xe &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Oa !== wt.frame
    )
      return Ci.push(e), (e._lazy = [s, r]), 1;
  },
  Sf = function n(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
  },
  Os = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  wf = function (e, t, i, r) {
    var s = e.ratio,
      o =
        t < 0 ||
        (!t &&
          ((!e._start && Sf(e) && !(!e._initted && Os(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Os(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      u,
      c,
      h;
    if (
      (a &&
        e._repeat &&
        ((l = cn(0, e._tDur, t)),
        (c = Cr(l, a)),
        e._yoyo && c & 1 && (o = 1 - o),
        c !== Cr(e._tTime, a) &&
          ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Xe || r || e._zTime === se || (!t && e._zTime))
    ) {
      if (!e._initted && Ba(e, t, r, i, l)) return;
      for (
        h = e._zTime,
          e._zTime = t || (i ? se : 0),
          i || (i = t && !h),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(o, u.d), (u = u._next);
      t < 0 && ks(e, t, i, !0),
        e._onUpdate && !i && It(e, "onUpdate"),
        l && e._repeat && !i && e.parent && It(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Mi(e, 1),
          !i &&
            !Xe &&
            (It(e, o ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  Cf = function (e, t, i) {
    var r;
    if (i > t)
      for (r = e._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < t) return r;
        r = r._prev;
      }
  },
  Er = function (e, t, i, r) {
    var s = e._repeat,
      o = Fe(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : Fe(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !r && Zn(e, (e._tTime = e._tDur * a)),
      e.parent && Qn(e),
      i || Ui(e.parent, e),
      e
    );
  },
  Ao = function (e) {
    return e instanceof ct ? Ui(e) : Er(e, e._dur);
  },
  Ef = { _start: 0, endTime: en, totalDuration: en },
  Mt = function n(e, t, i) {
    var r = e.labels,
      s = e._recent || Ef,
      o = e.duration() >= Dt ? s.endTime(!1) : e._dur,
      a,
      l,
      u;
    return Ie(t) && (isNaN(t) || t in r)
      ? ((l = t.charAt(0)),
        (u = t.substr(-1) === "%"),
        (a = t.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (u ? (a < 0 ? s : i).totalDuration() / 100 : 1))
          : a < 0
          ? (t in r || (r[t] = o), r[t])
          : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
            u && i && (l = (l / 100) * (Ue(i) ? i[0] : i).totalDuration()),
            a > 1 ? n(e, t.substr(0, a - 1), i) + l : o + l))
      : t == null
      ? o
      : +t;
  },
  Hr = function (e, t, i) {
    var r = di(t[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l;
    if ((r && (o.duration = t[1]), (o.parent = i), e)) {
      for (a = o, l = i; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = ft(l.vars.inherit) && l.parent);
      (o.immediateRender = ft(a.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new Ee(t[0], o, t[s + 1]);
  },
  Li = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  cn = function (e, t, i) {
    return i < e ? e : i > t ? t : i;
  },
  We = function (e, t) {
    return !Ie(e) || !(t = mf.exec(e)) ? "" : t[1];
  },
  Pf = function (e, t, i) {
    return Li(i, function (r) {
      return cn(e, t, r);
    });
  },
  Ls = [].slice,
  Na = function (e, t) {
    return (
      e &&
      ii(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && ii(e[0]))) &&
      !e.nodeType &&
      e !== kt
    );
  },
  Mf = function (e, t, i) {
    return (
      i === void 0 && (i = []),
      e.forEach(function (r) {
        var s;
        return (Ie(r) && !t) || Na(r, 1)
          ? (s = i).push.apply(s, At(r))
          : i.push(r);
      }) || i
    );
  },
  At = function (e, t, i) {
    return ge && !t && ge.selector
      ? ge.selector(e)
      : Ie(e) && !i && (Ps || !Pr())
      ? Ls.call((t || eo).querySelectorAll(e), 0)
      : Ue(e)
      ? Mf(e, i)
      : Na(e)
      ? Ls.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Ds = function (e) {
    return (
      (e = At(e)[0] || Nn("Invalid scope") || {}),
      function (t) {
        var i = e.current || e.nativeElement || e;
        return At(
          t,
          i.querySelectorAll
            ? i
            : i === e
            ? Nn("Invalid scope") || eo.createElement("div")
            : e
        );
      }
    );
  },
  Fa = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ga = function (e) {
    if (_e(e)) return e;
    var t = ii(e) ? e : { each: e },
      i = Ki(t.ease),
      r = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = r > 0 && r < 1,
      l = isNaN(r) || a,
      u = t.axis,
      c = r,
      h = r;
    return (
      Ie(r)
        ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && l && ((c = r[0]), (h = r[1])),
      function (f, d, m) {
        var p = (m || t).length,
          g = o[p],
          _,
          v,
          b,
          T,
          C,
          E,
          x,
          P,
          M;
        if (!g) {
          if (((M = t.grid === "auto" ? 0 : (t.grid || [1, Dt])[1]), !M)) {
            for (
              x = -Dt;
              x < (x = m[M++].getBoundingClientRect().left) && M < p;

            );
            M--;
          }
          for (
            g = o[p] = [],
              _ = l ? Math.min(M, p) * c - 0.5 : r % M,
              v = M === Dt ? 0 : l ? (p * h) / M - 0.5 : (r / M) | 0,
              x = 0,
              P = Dt,
              E = 0;
            E < p;
            E++
          )
            (b = (E % M) - _),
              (T = v - ((E / M) | 0)),
              (g[E] = C = u ? Math.abs(u === "y" ? T : b) : xa(b * b + T * T)),
              C > x && (x = C),
              C < P && (P = C);
          r === "random" && Fa(g),
            (g.max = x - P),
            (g.min = P),
            (g.v = p =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (M > p
                    ? p - 1
                    : u
                    ? u === "y"
                      ? p / M
                      : M
                    : Math.max(M, p / M)) ||
                0) * (r === "edges" ? -1 : 1)),
            (g.b = p < 0 ? s - p : s),
            (g.u = We(t.amount || t.each) || 0),
            (i = i && p < 0 ? Qa(i) : i);
        }
        return (
          (p = (g[f] - g.min) / g.max || 0),
          Fe(g.b + (i ? i(p) : p) * g.v) + g.u
        );
      }
    );
  },
  As = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (i) {
      var r = Fe(Math.round(parseFloat(i) / e) * e * t);
      return (r - (r % 1)) / t + (di(i) ? 0 : We(i));
    };
  },
  Va = function (e, t) {
    var i = Ue(e),
      r,
      s;
    return (
      !i &&
        ii(e) &&
        ((r = i = e.radius || Dt),
        e.values
          ? ((e = At(e.values)), (s = !di(e[0])) && (r *= r))
          : (e = As(e.increment))),
      Li(
        t,
        i
          ? _e(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= r ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o),
                    l = parseFloat(s ? o.y : 0),
                    u = Dt,
                    c = 0,
                    h = e.length,
                    f,
                    d;
                  h--;

                )
                  s
                    ? ((f = e[h].x - a), (d = e[h].y - l), (f = f * f + d * d))
                    : (f = Math.abs(e[h] - a)),
                    f < u && ((u = f), (c = h));
                return (
                  (c = !r || u <= r ? e[c] : o),
                  s || c === o || di(o) ? c : c + We(o)
                );
              }
          : As(e)
      )
    );
  },
  qa = function (e, t, i, r) {
    return Li(Ue(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
      return Ue(e)
        ? e[~~(Math.random() * e.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - i / 2 + Math.random() * (t - e + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  kf = function () {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return function (r) {
      return t.reduce(function (s, o) {
        return o(s);
      }, r);
    };
  },
  Of = function (e, t) {
    return function (i) {
      return e(parseFloat(i)) + (t || We(i));
    };
  },
  Lf = function (e, t, i) {
    return ja(e, t, 0, 1, i);
  },
  Ha = function (e, t, i) {
    return Li(i, function (r) {
      return e[~~t(r)];
    });
  },
  Df = function n(e, t, i) {
    var r = t - e;
    return Ue(e)
      ? Ha(e, n(0, e.length), t)
      : Li(i, function (s) {
          return ((r + ((s - e) % r)) % r) + e;
        });
  },
  Af = function n(e, t, i) {
    var r = t - e,
      s = r * 2;
    return Ue(e)
      ? Ha(e, n(0, e.length - 1), t)
      : Li(i, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
        });
  },
  tn = function (e) {
    for (var t = 0, i = "", r, s, o, a; ~(r = e.indexOf("random(", t)); )
      (o = e.indexOf(")", r)),
        (a = e.charAt(r + 7) === "["),
        (s = e.substr(r + 7, o - r - 7).match(a ? Ea : Es)),
        (i +=
          e.substr(t, r - t) + qa(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return i + e.substr(t, e.length - t);
  },
  ja = function (e, t, i, r, s) {
    var o = t - e,
      a = r - i;
    return Li(s, function (l) {
      return i + (((l - e) / o) * a || 0);
    });
  },
  If = function n(e, t, i, r) {
    var s = isNaN(e + t)
      ? 0
      : function (d) {
          return (1 - d) * e + d * t;
        };
    if (!s) {
      var o = Ie(e),
        a = {},
        l,
        u,
        c,
        h,
        f;
      if ((i === !0 && (r = 1) && (i = null), o))
        (e = { p: e }), (t = { p: t });
      else if (Ue(e) && !Ue(t)) {
        for (c = [], h = e.length, f = h - 2, u = 1; u < h; u++)
          c.push(n(e[u - 1], e[u]));
        h--,
          (s = function (m) {
            m *= h;
            var p = Math.min(f, ~~m);
            return c[p](m - p);
          }),
          (i = t);
      } else r || (e = tr(Ue(e) ? [] : {}, e));
      if (!c) {
        for (l in t) so.call(a, e, l, "get", t[l]);
        s = function (m) {
          return uo(m, a) || (o ? e.p : e);
        };
      }
    }
    return Li(i, s);
  },
  Io = function (e, t, i) {
    var r = e.labels,
      s = Dt,
      o,
      a,
      l;
    for (o in r)
      (a = r[o] - t),
        a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  It = function (e, t, i) {
    var r = e.vars,
      s = r[t],
      o = ge,
      a = e._ctx,
      l,
      u,
      c;
    if (!!s)
      return (
        (l = r[t + "Params"]),
        (u = r.callbackScope || e),
        i && Ci.length && Fn(),
        a && (ge = a),
        (c = l ? s.apply(u, l) : s.call(u)),
        (ge = o),
        c
      );
  },
  Br = function (e) {
    return (
      Mi(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Xe),
      e.progress() < 1 && It(e, "onInterrupt"),
      e
    );
  },
  mr,
  Ya = [],
  Wa = function (e) {
    if (Js() && e) {
      e = (!e.name && e.default) || e;
      var t = e.name,
        i = _e(e),
        r =
          t && !i && e.init
            ? function () {
                this._props = [];
              }
            : e,
        s = {
          init: en,
          render: uo,
          add: so,
          kill: Kf,
          modifier: Uf,
          rawVars: 0,
        },
        o = { targetTest: 0, get: 0, getSetter: lo, aliases: {}, register: 0 };
      if ((Pr(), e !== r)) {
        if (St[t]) return;
        zt(r, zt(Gn(e, s), o)),
          tr(r.prototype, tr(s, Gn(e, o))),
          (St[(r.prop = t)] = r),
          e.targetTest && (Mn.push(r), (io[t] = 1)),
          (t =
            (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
            "Plugin");
      }
      ka(t, r), e.register && e.register(pt, r, ht);
    } else e && Ya.push(e);
  },
  ne = 255,
  Nr = {
    aqua: [0, ne, ne],
    lime: [0, ne, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ne],
    navy: [0, 0, 128],
    white: [ne, ne, ne],
    olive: [128, 128, 0],
    yellow: [ne, ne, 0],
    orange: [ne, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ne, 0, 0],
    pink: [ne, 192, 203],
    cyan: [0, ne, ne],
    transparent: [ne, ne, ne, 0],
  },
  cs = function (e, t, i) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (i - t) * e * 6
        : e < 0.5
        ? i
        : e * 3 < 2
        ? t + (i - t) * (2 / 3 - e) * 6
        : t) *
        ne +
        0.5) |
        0
    );
  },
  Xa = function (e, t, i) {
    var r = e ? (di(e) ? [e >> 16, (e >> 8) & ne, e & ne] : 0) : Nr.black,
      s,
      o,
      a,
      l,
      u,
      c,
      h,
      f,
      d,
      m;
    if (!r) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Nr[e]))
        r = Nr[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e =
              "#" +
              s +
              s +
              o +
              o +
              a +
              a +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & ne, r & ne, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & ne, e & ne]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((r = m = e.match(Es)), !t))
          (l = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (c = +r[2] / 100),
            (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (s = c * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = cs(l + 1 / 3, s, o)),
            (r[1] = cs(l, s, o)),
            (r[2] = cs(l - 1 / 3, s, o));
        else if (~e.indexOf("="))
          return (r = e.match(wa)), i && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(Es) || Nr.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !m &&
        ((s = r[0] / ne),
        (o = r[1] / ne),
        (a = r[2] / ne),
        (h = Math.max(s, o, a)),
        (f = Math.min(s, o, a)),
        (c = (h + f) / 2),
        h === f
          ? (l = u = 0)
          : ((d = h - f),
            (u = c > 0.5 ? d / (2 - h - f) : d / (h + f)),
            (l =
              h === s
                ? (o - a) / d + (o < a ? 6 : 0)
                : h === o
                ? (a - s) / d + 2
                : (s - o) / d + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(c * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Ua = function (e) {
    var t = [],
      i = [],
      r = -1;
    return (
      e.split(Ei).forEach(function (s) {
        var o = s.match(pr) || [];
        t.push.apply(t, o), i.push((r += o.length + 1));
      }),
      (t.c = i),
      t
    );
  },
  Ro = function (e, t, i) {
    var r = "",
      s = (e + r).match(Ei),
      o = t ? "hsla(" : "rgba(",
      a = 0,
      l,
      u,
      c,
      h;
    if (!s) return e;
    if (
      ((s = s.map(function (f) {
        return (
          (f = Xa(f, t, 1)) &&
          o +
            (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
            ")"
        );
      })),
      i && ((c = Ua(e)), (l = i.c), l.join(r) !== c.c.join(r)))
    )
      for (u = e.replace(Ei, "1").split(pr), h = u.length - 1; a < h; a++)
        r +=
          u[a] +
          (~l.indexOf(a)
            ? s.shift() || o + "0,0,0,0)"
            : (c.length ? c : s.length ? s : i).shift());
    if (!u)
      for (u = e.split(Ei), h = u.length - 1; a < h; a++) r += u[a] + s[a];
    return r + u[h];
  },
  Ei = (function () {
    var n =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Nr) n += "|" + e + "\\b";
    return new RegExp(n + ")", "gi");
  })(),
  Rf = /hsl[a]?\(/,
  Ka = function (e) {
    var t = e.join(" "),
      i;
    if (((Ei.lastIndex = 0), Ei.test(t)))
      return (
        (i = Rf.test(t)),
        (e[1] = Ro(e[1], i)),
        (e[0] = Ro(e[0], i, Ua(e[1]))),
        !0
      );
  },
  rn,
  wt = (function () {
    var n = Date.now,
      e = 500,
      t = 33,
      i = n(),
      r = i,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      u,
      c,
      h,
      f,
      d,
      m = function p(g) {
        var _ = n() - r,
          v = g === !0,
          b,
          T,
          C,
          E;
        if (
          (_ > e && (i += _ - t),
          (r += _),
          (C = r - i),
          (b = C - o),
          (b > 0 || v) &&
            ((E = ++h.frame),
            (f = C - h.time * 1e3),
            (h.time = C = C / 1e3),
            (o += b + (b >= s ? 4 : s - b)),
            (T = 1)),
          v || (l = u(p)),
          T)
        )
          for (d = 0; d < a.length; d++) a[d](C, f, E, g);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (g) {
          return f / (1e3 / (g || 60));
        },
        wake: function () {
          Pa &&
            (!Ps &&
              Js() &&
              ((kt = Ps = window),
              (eo = kt.document || {}),
              (Pt.gsap = pt),
              (kt.gsapVersions || (kt.gsapVersions = [])).push(pt.version),
              Ma(Bn || kt.GreenSockGlobals || (!kt.gsap && kt) || {}),
              (c = kt.requestAnimationFrame),
              Ya.forEach(Wa)),
            l && h.sleep(),
            (u =
              c ||
              function (g) {
                return setTimeout(g, (o - h.time * 1e3 + 1) | 0);
              }),
            (rn = 1),
            m(2));
        },
        sleep: function () {
          (c ? kt.cancelAnimationFrame : clearTimeout)(l), (rn = 0), (u = en);
        },
        lagSmoothing: function (g, _) {
          (e = g || 1 / 0), (t = Math.min(_ || 33, e));
        },
        fps: function (g) {
          (s = 1e3 / (g || 240)), (o = h.time * 1e3 + s);
        },
        add: function (g, _, v) {
          var b = _
            ? function (T, C, E, x) {
                g(T, C, E, x), h.remove(b);
              }
            : g;
          return h.remove(g), a[v ? "unshift" : "push"](b), Pr(), b;
        },
        remove: function (g, _) {
          ~(_ = a.indexOf(g)) && a.splice(_, 1) && d >= _ && d--;
        },
        _listeners: a,
      }),
      h
    );
  })(),
  Pr = function () {
    return !rn && wt.wake();
  },
  U = {},
  zf = /^[\d.\-M][\d.\-,\s]/,
  $f = /["']/g,
  Bf = function (e) {
    for (
      var t = {},
        i = e.substr(1, e.length - 3).split(":"),
        r = i[0],
        s = 1,
        o = i.length,
        a,
        l,
        u;
      s < o;
      s++
    )
      (l = i[s]),
        (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, a)),
        (t[r] = isNaN(u) ? u.replace($f, "").trim() : +u),
        (r = l.substr(a + 1).trim());
    return t;
  },
  Nf = function (e) {
    var t = e.indexOf("(") + 1,
      i = e.indexOf(")"),
      r = e.indexOf("(", t);
    return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
  },
  Ff = function (e) {
    var t = (e + "").split("("),
      i = U[t[0]];
    return i && t.length > 1 && i.config
      ? i.config.apply(
          null,
          ~e.indexOf("{") ? [Bf(t[1])] : Nf(e).split(",").map(Aa)
        )
      : U._CE && zf.test(e)
      ? U._CE("", e)
      : i;
  },
  Qa = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Za = function n(e, t) {
    for (var i = e._first, r; i; )
      i instanceof ct
        ? n(i, t)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== t &&
          (i.timeline
            ? n(i.timeline, t)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = t))),
        (i = i._next);
  },
  Ki = function (e, t) {
    return (e && (_e(e) ? e : U[e] || Ff(e))) || t;
  },
  sr = function (e, t, i, r) {
    i === void 0 &&
      (i = function (l) {
        return 1 - t(1 - l);
      }),
      r === void 0 &&
        (r = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var s = { easeIn: t, easeOut: i, easeInOut: r },
      o;
    return (
      dt(e, function (a) {
        (U[a] = Pt[a] = s), (U[(o = a.toLowerCase())] = i);
        for (var l in s)
          U[
            o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = U[a + "." + l] = s[l];
      }),
      s
    );
  },
  Ja = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  fs = function n(e, t, i) {
    var r = t >= 1 ? t : 1,
      s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / Cs) * (Math.asin(1 / r) || 0),
      a = function (c) {
        return c === 1 ? 1 : r * Math.pow(2, -10 * c) * pf((c - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : Ja(a);
    return (
      (s = Cs / s),
      (l.config = function (u, c) {
        return n(e, u, c);
      }),
      l
    );
  },
  ds = function n(e, t) {
    t === void 0 && (t = 1.70158);
    var i = function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      },
      r =
        e === "out"
          ? i
          : e === "in"
          ? function (s) {
              return 1 - i(1 - s);
            }
          : Ja(i);
    return (
      (r.config = function (s) {
        return n(e, s);
      }),
      r
    );
  };
dt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
  var t = e < 5 ? e + 1 : e;
  sr(
    n + ",Power" + (t - 1),
    e
      ? function (i) {
          return Math.pow(i, t);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, t);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, t) / 2
        : 1 - Math.pow((1 - i) * 2, t) / 2;
    }
  );
});
U.Linear.easeNone = U.none = U.Linear.easeIn;
sr("Elastic", fs("in"), fs("out"), fs());
(function (n, e) {
  var t = 1 / e,
    i = 2 * t,
    r = 2.5 * t,
    s = function (a) {
      return a < t
        ? n * a * a
        : a < i
        ? n * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < r
        ? n * (a -= 2.25 / e) * a + 0.9375
        : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  sr(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
sr("Expo", function (n) {
  return n ? Math.pow(2, 10 * (n - 1)) : 0;
});
sr("Circ", function (n) {
  return -(xa(1 - n * n) - 1);
});
sr("Sine", function (n) {
  return n === 1 ? 1 : -hf(n * ff) + 1;
});
sr("Back", ds("in"), ds("out"), ds());
U.SteppedEase =
  U.steps =
  Pt.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var i = 1 / e,
          r = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - se;
        return function (a) {
          return (((r * cn(0, o, a)) | 0) + s) * i;
        };
      },
    };
wr.ease = U["quad.out"];
dt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (n) {
    return (ro += n + "," + n + "Params,");
  }
);
var el = function (e, t) {
    (this.id = df++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : La),
      (this.set = t ? t.getSetter : lo);
  },
  nn = (function () {
    function n(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Er(this, +t.duration, 1, 1),
        (this.data = t.data),
        ge && ((this._ctx = ge), ge.data.push(this)),
        rn || wt.wake();
    }
    var e = n.prototype;
    return (
      (e.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (e.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Er(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (i, r) {
        if ((Pr(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Zn(this, i), !s._dp || s.parent || za(s, this); s && s.parent; )
            s.parent._time !==
              s._start +
                (s._ts >= 0
                  ? s._tTime / s._ts
                  : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            Zt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === se) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), Da(this, i, r)),
          this
        );
      }),
      (e.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + Do(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (e.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                Do(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (i, r) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * s, r)
          : this._repeat
          ? Cr(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (i) {
        if (!arguments.length) return this._rts === -se ? 0 : this._rts;
        if (this._rts === i) return this;
        var r =
          this.parent && this._ts ? Vn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -se ? 0 : this._rts),
          this.totalTime(cn(-Math.abs(this._delay), this._tDur, r), !0),
          Qn(this),
          bf(this)
        );
      }),
      (e.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== se &&
                      (this._tTime -= se)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && Zt(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (i) {
        return (
          this._start +
          (ft(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Vn(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (i) {
        i === void 0 && (i = _f);
        var r = Xe;
        return (
          (Xe = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (Xe = r),
          this
        );
      }),
      (e.globalTime = function (i) {
        for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
          (s = r._start + s / (r._ts || 1)), (r = r._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1 / 0
            : this._sat.globalTime(i)
          : s;
      }),
      (e.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), Ao(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), Ao(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (e.seek = function (i, r) {
        return this.totalTime(Mt(this, i), ft(r));
      }),
      (e.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, ft(r));
      }),
      (e.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -se : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -se), this;
      }),
      (e.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          s;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (s = i.rawTime(!0)) >= r &&
            s < this.endTime(!0) - se)
        );
      }),
      (e.eventCallback = function (i, r, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                s && (o[i + "Params"] = s),
                i === "onUpdate" && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i];
      }),
      (e.then = function (i) {
        var r = this;
        return new Promise(function (s) {
          var o = _e(i) ? i : Ia,
            a = function () {
              var u = r.then;
              (r.then = null),
                _e(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
                s(o),
                (r.then = u);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? a()
            : (r._prom = a);
        });
      }),
      (e.kill = function () {
        Br(this);
      }),
      n
    );
  })();
zt(nn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -se,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var ct = (function (n) {
  ba(e, n);
  function e(i, r) {
    var s;
    return (
      i === void 0 && (i = {}),
      (s = n.call(this, i) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!i.smoothChildTiming),
      (s.autoRemoveChildren = !!i.autoRemoveChildren),
      (s._sort = ft(i.sortChildren)),
      fe && Zt(i.parent || fe, oi(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      i.scrollTrigger && $a(oi(s), i.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (r, s, o) {
      return Hr(0, arguments, this), this;
    }),
    (t.from = function (r, s, o) {
      return Hr(1, arguments, this), this;
    }),
    (t.fromTo = function (r, s, o, a) {
      return Hr(2, arguments, this), this;
    }),
    (t.set = function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        qr(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Ee(r, s, Mt(this, o), 1),
        this
      );
    }),
    (t.call = function (r, s, o) {
      return Zt(this, Ee.delayedCall(0, r, s), o);
    }),
    (t.staggerTo = function (r, s, o, a, l, u, c) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = u),
        (o.onCompleteParams = c),
        (o.parent = this),
        new Ee(r, o, Mt(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (r, s, o, a, l, u, c) {
      return (
        (o.runBackwards = 1),
        (qr(o).immediateRender = ft(o.immediateRender)),
        this.staggerTo(r, s, o, a, l, u, c)
      );
    }),
    (t.staggerFromTo = function (r, s, o, a, l, u, c, h) {
      return (
        (a.startAt = o),
        (qr(a).immediateRender = ft(a.immediateRender)),
        this.staggerTo(r, s, a, l, u, c, h)
      );
    }),
    (t.render = function (r, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = r <= 0 ? 0 : Fe(r),
        h = this._zTime < 0 != r < 0 && (this._initted || !u),
        f,
        d,
        m,
        p,
        g,
        _,
        v,
        b,
        T,
        C,
        E,
        x;
      if (
        (this !== fe && c > l && r >= 0 && (c = l), c !== this._tTime || o || h)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((c += this._time - a), (r += this._time - a)),
          (f = c),
          (T = this._start),
          (b = this._ts),
          (_ = !b),
          h && (u || (a = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (g = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(g * 100 + r, s, o);
          if (
            ((f = Fe(c % g)),
            c === l
              ? ((p = this._repeat), (f = u))
              : ((p = ~~(c / g)),
                p && p === c / g && ((f = u), p--),
                f > u && (f = u)),
            (C = Cr(this._tTime, g)),
            !a &&
              this._tTime &&
              C !== p &&
              this._tTime - C * g - this._dur <= 0 &&
              (C = p),
            E && p & 1 && ((f = u - f), (x = 1)),
            p !== C && !this._lock)
          ) {
            var P = E && C & 1,
              M = P === (E && p & 1);
            if (
              (p < C && (P = !P),
              (a = P ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(a || (x ? 0 : Fe(p * g)), s, !u)._lock = 0),
              (this._tTime = c),
              !s && this.parent && It(this, "onRepeat"),
              this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                _ !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              M &&
                ((this._lock = 2),
                (a = P ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !x && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            Za(this, x);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((v = Cf(this, Fe(a), Fe(f))), v && (c -= f - (f = v._start))),
          (this._tTime = c),
          (this._time = f),
          (this._act = !b),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && f && !s && !p && (It(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (f >= a && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((m = d._next), (d._act || f >= d._start) && d._ts && v !== d)
            ) {
              if (d.parent !== this) return this.render(r, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (f - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (f - d._start) * d._ts,
                  s,
                  o
                ),
                f !== this._time || (!this._ts && !_))
              ) {
                (v = 0), m && (c += this._zTime = -se);
                break;
              }
            }
            d = m;
          }
        else {
          d = this._last;
          for (var S = r < 0 ? r : f; d; ) {
            if (((m = d._prev), (d._act || S <= d._end) && d._ts && v !== d)) {
              if (d.parent !== this) return this.render(r, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (S - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (S - d._start) * d._ts,
                  s,
                  o || (Xe && (d._initted || d._startAt))
                ),
                f !== this._time || (!this._ts && !_))
              ) {
                (v = 0), m && (c += this._zTime = S ? -se : se);
                break;
              }
            }
            d = m;
          }
        }
        if (
          v &&
          !s &&
          (this.pause(),
          (v.render(f >= a ? 0 : -se)._zTime = f >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = T), Qn(this), this.render(r, s, o);
        this._onUpdate && !s && It(this, "onUpdate", !0),
          ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
            (T === this._start || Math.abs(b) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                Mi(this, 1),
              !s &&
                !(r < 0 && !a) &&
                (c || a || !l) &&
                (It(
                  this,
                  c === l && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (r, s) {
      var o = this;
      if ((di(s) || (s = Mt(this, s, r)), !(r instanceof nn))) {
        if (Ue(r))
          return (
            r.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (Ie(r)) return this.addLabel(r, s);
        if (_e(r)) r = Ee.delayedCall(0, r);
        else return this;
      }
      return this !== r ? Zt(this, r, s) : this;
    }),
    (t.getChildren = function (r, s, o, a) {
      r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = !0),
        a === void 0 && (a = -Dt);
      for (var l = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof Ee
            ? s && l.push(u)
            : (o && l.push(u), r && l.push.apply(l, u.getChildren(!0, s, o)))),
          (u = u._next);
      return l;
    }),
    (t.getById = function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
        if (s[o].vars.id === r) return s[o];
    }),
    (t.remove = function (r) {
      return Ie(r)
        ? this.removeLabel(r)
        : _e(r)
        ? this.killTweensOf(r)
        : (Kn(this, r),
          r === this._recent && (this._recent = this._last),
          Ui(this));
    }),
    (t.totalTime = function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Fe(
              wt.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          n.prototype.totalTime.call(this, r, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (r, s) {
      return (this.labels[r] = Mt(this, s)), this;
    }),
    (t.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (t.addPause = function (r, s, o) {
      var a = Ee.delayedCall(0, s || en, o);
      return (
        (a.data = "isPause"), (this._hasPause = 1), Zt(this, a, Mt(this, r))
      );
    }),
    (t.removePause = function (r) {
      var s = this._first;
      for (r = Mt(this, r); s; )
        s._start === r && s.data === "isPause" && Mi(s), (s = s._next);
    }),
    (t.killTweensOf = function (r, s, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--; )
        yi !== a[l] && a[l].kill(r, s);
      return this;
    }),
    (t.getTweensOf = function (r, s) {
      for (var o = [], a = At(r), l = this._first, u = di(s), c; l; )
        l instanceof Ee
          ? vf(l._targets, a) &&
            (u
              ? (!yi || (l._initted && l._ts)) &&
                l.globalTime(0) <= s &&
                l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
          (l = l._next);
      return o;
    }),
    (t.tweenTo = function (r, s) {
      s = s || {};
      var o = this,
        a = Mt(o, r),
        l = s,
        u = l.startAt,
        c = l.onStart,
        h = l.onStartParams,
        f = l.immediateRender,
        d,
        m = Ee.to(
          o,
          zt(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                s.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                ) ||
                se,
              onStart: function () {
                if ((o.pause(), !d)) {
                  var g =
                    s.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : o._time)) /
                        o.timeScale()
                    );
                  m._dur !== g && Er(m, g, 0, 1).render(m._time, !0, !0),
                    (d = 1);
                }
                c && c.apply(m, h || []);
              },
            },
            s
          )
        );
      return f ? m.render(0) : m;
    }),
    (t.tweenFromTo = function (r, s, o) {
      return this.tweenTo(s, zt({ startAt: { time: Mt(this, r) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Io(this, Mt(this, r));
    }),
    (t.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Io(this, Mt(this, r), 1);
    }),
    (t.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + se);
    }),
    (t.shiftChildren = function (r, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, u; a; )
        a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
      if (s) for (u in l) l[u] >= o && (l[u] += r);
      return Ui(this);
    }),
    (t.invalidate = function (r) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
      return n.prototype.invalidate.call(this, r);
    }),
    (t.clear = function (r) {
      r === void 0 && (r = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Ui(this)
      );
    }),
    (t.totalDuration = function (r) {
      var s = 0,
        o = this,
        a = o._last,
        l = Dt,
        u,
        c,
        h;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (h = o.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (c = a._start),
            c > l && o._sort && a._ts && !o._lock
              ? ((o._lock = 1), (Zt(o, a, c - a._delay, 1)._lock = 0))
              : (l = c),
            c < 0 &&
              a._ts &&
              ((s -= c),
              ((!h && !o._dp) || (h && h.smoothChildTiming)) &&
                ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
              o.shiftChildren(-c, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = u);
        Er(o, o === fe && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((fe._ts && (Da(fe, Vn(r, fe)), (Oa = wt.frame)), wt.frame >= Oo)) {
        Oo += Et.autoSleep || 120;
        var s = fe._first;
        if ((!s || !s._ts) && Et.autoSleep && wt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || wt.sleep();
        }
      }
    }),
    e
  );
})(nn);
zt(ct.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Gf = function (e, t, i, r, s, o, a) {
    var l = new ht(this._pt, e, t, 0, 1, ol, null, s),
      u = 0,
      c = 0,
      h,
      f,
      d,
      m,
      p,
      g,
      _,
      v;
    for (
      l.b = i,
        l.e = r,
        i += "",
        r += "",
        (_ = ~r.indexOf("random(")) && (r = tn(r)),
        o && ((v = [i, r]), o(v, e, t), (i = v[0]), (r = v[1])),
        f = i.match(ls) || [];
      (h = ls.exec(r));

    )
      (m = h[0]),
        (p = r.substring(u, h.index)),
        d ? (d = (d + 1) % 5) : p.substr(-5) === "rgba(" && (d = 1),
        m !== f[c++] &&
          ((g = parseFloat(f[c - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: p || c === 1 ? p : ",",
            s: g,
            c: m.charAt(1) === "=" ? vr(g, m) - g : parseFloat(m) - g,
            m: d && d < 4 ? Math.round : 0,
          }),
          (u = ls.lastIndex));
    return (
      (l.c = u < r.length ? r.substring(u, r.length) : ""),
      (l.fp = a),
      (Ca.test(r) || _) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  so = function (e, t, i, r, s, o, a, l, u, c) {
    _e(r) && (r = r(s || 0, e, o));
    var h = e[t],
      f =
        i !== "get"
          ? i
          : _e(h)
          ? u
            ? e[
                t.indexOf("set") || !_e(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](u)
            : e[t]()
          : h,
      d = _e(h) ? (u ? Yf : nl) : ao,
      m;
    if (
      (Ie(r) &&
        (~r.indexOf("random(") && (r = tn(r)),
        r.charAt(1) === "=" &&
          ((m = vr(f, r) + (We(f) || 0)), (m || m === 0) && (r = m))),
      !c || f !== r || Is)
    )
      return !isNaN(f * r) && r !== ""
        ? ((m = new ht(
            this._pt,
            e,
            t,
            +f || 0,
            r - (f || 0),
            typeof h == "boolean" ? Xf : sl,
            0,
            d
          )),
          u && (m.fp = u),
          a && m.modifier(a, this, e),
          (this._pt = m))
        : (!h && !(t in e) && to(t, r),
          Gf.call(this, e, t, f, r, d, l || Et.stringFilter, u));
  },
  Vf = function (e, t, i, r, s) {
    if (
      (_e(e) && (e = jr(e, s, t, i, r)),
      !ii(e) || (e.style && e.nodeType) || Ue(e) || Sa(e))
    )
      return Ie(e) ? jr(e, s, t, i, r) : e;
    var o = {},
      a;
    for (a in e) o[a] = jr(e[a], s, t, i, r);
    return o;
  },
  tl = function (e, t, i, r, s, o) {
    var a, l, u, c;
    if (
      St[e] &&
      (a = new St[e]()).init(
        s,
        a.rawVars ? t[e] : Vf(t[e], r, s, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = l = new ht(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
      i !== mr)
    )
      for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
        u[a._props[c]] = l;
    return a;
  },
  yi,
  Is,
  oo = function n(e, t, i) {
    var r = e.vars,
      s = r.ease,
      o = r.startAt,
      a = r.immediateRender,
      l = r.lazy,
      u = r.onUpdate,
      c = r.onUpdateParams,
      h = r.callbackScope,
      f = r.runBackwards,
      d = r.yoyoEase,
      m = r.keyframes,
      p = r.autoRevert,
      g = e._dur,
      _ = e._startAt,
      v = e._targets,
      b = e.parent,
      T = b && b.data === "nested" ? b.vars.targets : v,
      C = e._overwrite === "auto" && !Qs,
      E = e.timeline,
      x,
      P,
      M,
      S,
      L,
      k,
      V,
      N,
      F,
      q,
      O,
      R,
      $;
    if (
      (E && (!m || !s) && (s = "none"),
      (e._ease = Ki(s, wr.ease)),
      (e._yEase = d ? Qa(Ki(d === !0 ? s : d, wr.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !E && !!r.runBackwards),
      !E || (m && !r.stagger))
    ) {
      if (
        ((N = v[0] ? Xi(v[0]).harness : 0),
        (R = N && r[N.prop]),
        (x = Gn(r, io)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          t < 0 && f && a && !p ? _.render(-1, !0) : _.revert(f && g ? Pn : gf),
          (_._lazy = 0)),
        o)
      ) {
        if (
          (Mi(
            (e._startAt = Ee.set(
              v,
              zt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: b,
                  immediateRender: !0,
                  lazy: !_ && ft(l),
                  startAt: null,
                  delay: 0,
                  onUpdate: u,
                  onUpdateParams: c,
                  callbackScope: h,
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Xe || (!a && !p)) && e._startAt.revert(Pn),
          a && g && t <= 0 && i <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (f && g && !_) {
        if (
          (t && (a = !1),
          (M = zt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !_ && ft(l),
              immediateRender: a,
              stagger: 0,
              parent: b,
            },
            x
          )),
          R && (M[N.prop] = R),
          Mi((e._startAt = Ee.set(v, M))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Xe ? e._startAt.revert(Pn) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          n(e._startAt, se, se);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (g && ft(l)) || (l && !g), P = 0;
        P < v.length;
        P++
      ) {
        if (
          ((L = v[P]),
          (V = L._gsap || no(v)[P]._gsap),
          (e._ptLookup[P] = q = {}),
          Ms[V.id] && Ci.length && Fn(),
          (O = T === v ? P : T.indexOf(L)),
          N &&
            (F = new N()).init(L, R || x, e, O, T) !== !1 &&
            ((e._pt = S =
              new ht(e._pt, L, F.name, 0, 1, F.render, F, 0, F.priority)),
            F._props.forEach(function (y) {
              q[y] = S;
            }),
            F.priority && (k = 1)),
          !N || R)
        )
          for (M in x)
            St[M] && (F = tl(M, x, e, O, L, T))
              ? F.priority && (k = 1)
              : (q[M] = S =
                  so.call(e, L, M, "get", x[M], O, T, 0, r.stringFilter));
        e._op && e._op[P] && e.kill(L, e._op[P]),
          C &&
            e._pt &&
            ((yi = e),
            fe.killTweensOf(L, q, e.globalTime(t)),
            ($ = !e.parent),
            (yi = 0)),
          e._pt && l && (Ms[V.id] = 1);
      }
      k && al(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !$),
      m && t <= 0 && E.render(Dt, !0, !0);
  },
  qf = function (e, t, i, r, s, o, a) {
    var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      u,
      c,
      h,
      f;
    if (!l)
      for (
        l = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((u = h[f][t]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
        if (!u) return (Is = 1), (e.vars[t] = "+=0"), oo(e, a), (Is = 0), 1;
        l.push(u);
      }
    for (f = l.length; f--; )
      (c = l[f]),
        (u = c._pt || c),
        (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + o * u.c),
        (u.c = i - u.s),
        c.e && (c.e = Te(i) + We(c.e)),
        c.b && (c.b = u.s + We(c.b));
  },
  Hf = function (e, t) {
    var i = e[0] ? Xi(e[0]).harness : 0,
      r = i && i.aliases,
      s,
      o,
      a,
      l;
    if (!r) return t;
    s = tr({}, t);
    for (o in r)
      if (o in s) for (l = r[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  jf = function (e, t, i, r) {
    var s = t.ease || r || "power1.inOut",
      o,
      a;
    if (Ue(t))
      (a = i[e] || (i[e] = [])),
        t.forEach(function (l, u) {
          return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
        });
    else
      for (o in t)
        (a = i[o] || (i[o] = [])),
          o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
  },
  jr = function (e, t, i, r, s) {
    return _e(e)
      ? e.call(t, i, r, s)
      : Ie(e) && ~e.indexOf("random(")
      ? tn(e)
      : e;
  },
  il = ro + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  rl = {};
dt(il + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
  return (rl[n] = 1);
});
var Ee = (function (n) {
  ba(e, n);
  function e(i, r, s, o) {
    var a;
    typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
      (a = n.call(this, o ? r : qr(r)) || this);
    var l = a.vars,
      u = l.duration,
      c = l.delay,
      h = l.immediateRender,
      f = l.stagger,
      d = l.overwrite,
      m = l.keyframes,
      p = l.defaults,
      g = l.scrollTrigger,
      _ = l.yoyoEase,
      v = r.parent || fe,
      b = (Ue(i) || Sa(i) ? di(i[0]) : "length" in r) ? [i] : At(i),
      T,
      C,
      E,
      x,
      P,
      M,
      S,
      L;
    if (
      ((a._targets = b.length
        ? no(b)
        : Nn(
            "GSAP target " + i + " not found. https://greensock.com",
            !Et.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      m || f || pn(u) || pn(c))
    ) {
      if (
        ((r = a.vars),
        (T = a.timeline =
          new ct({
            data: "nested",
            defaults: p || {},
            targets: v && v.data === "nested" ? v.vars.targets : b,
          })),
        T.kill(),
        (T.parent = T._dp = oi(a)),
        (T._start = 0),
        f || pn(u) || pn(c))
      ) {
        if (((x = b.length), (S = f && Ga(f)), ii(f)))
          for (P in f) ~il.indexOf(P) && (L || (L = {}), (L[P] = f[P]));
        for (C = 0; C < x; C++)
          (E = Gn(r, rl)),
            (E.stagger = 0),
            _ && (E.yoyoEase = _),
            L && tr(E, L),
            (M = b[C]),
            (E.duration = +jr(u, oi(a), C, M, b)),
            (E.delay = (+jr(c, oi(a), C, M, b) || 0) - a._delay),
            !f &&
              x === 1 &&
              E.delay &&
              ((a._delay = c = E.delay), (a._start += c), (E.delay = 0)),
            T.to(M, E, S ? S(C, M, b) : 0),
            (T._ease = U.none);
        T.duration() ? (u = c = 0) : (a.timeline = 0);
      } else if (m) {
        qr(zt(T.vars.defaults, { ease: "none" })),
          (T._ease = Ki(m.ease || r.ease || "none"));
        var k = 0,
          V,
          N,
          F;
        if (Ue(m))
          m.forEach(function (q) {
            return T.to(b, q, ">");
          }),
            T.duration();
        else {
          E = {};
          for (P in m)
            P === "ease" || P === "easeEach" || jf(P, m[P], E, m.easeEach);
          for (P in E)
            for (
              V = E[P].sort(function (q, O) {
                return q.t - O.t;
              }),
                k = 0,
                C = 0;
              C < V.length;
              C++
            )
              (N = V[C]),
                (F = {
                  ease: N.e,
                  duration: ((N.t - (C ? V[C - 1].t : 0)) / 100) * u,
                }),
                (F[P] = N.v),
                T.to(b, F, k),
                (k += F.duration);
          T.duration() < u && T.to({}, { duration: u - T.duration() });
        }
      }
      u || a.duration((u = T.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !Qs && ((yi = oi(a)), fe.killTweensOf(b), (yi = 0)),
      Zt(v, oi(a), s),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (h ||
        (!u &&
          !m &&
          a._start === Fe(v._time) &&
          ft(h) &&
          xf(oi(a)) &&
          v.data !== "nested")) &&
        ((a._tTime = -se), a.render(Math.max(0, -c) || 0)),
      g && $a(oi(a), g),
      a
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (r, s, o) {
      var a = this._time,
        l = this._tDur,
        u = this._dur,
        c = r < 0,
        h = r > l - se && !c ? l : r < se ? 0 : r,
        f,
        d,
        m,
        p,
        g,
        _,
        v,
        b,
        T;
      if (!u) wf(this, r, s, o);
      else if (
        h !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c)
      ) {
        if (((f = h), (b = this.timeline), this._repeat)) {
          if (((p = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(p * 100 + r, s, o);
          if (
            ((f = Fe(h % p)),
            h === l
              ? ((m = this._repeat), (f = u))
              : ((m = ~~(h / p)),
                m && m === h / p && ((f = u), m--),
                f > u && (f = u)),
            (_ = this._yoyo && m & 1),
            _ && ((T = this._yEase), (f = u - f)),
            (g = Cr(this._tTime, p)),
            f === a && !o && this._initted)
          )
            return (this._tTime = h), this;
          m !== g &&
            (b && this._yEase && Za(b, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              ((this._lock = o = 1),
              (this.render(Fe(p * m), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Ba(this, c ? r : f, o, s, h)) return (this._tTime = 0), this;
          if (a !== this._time) return this;
          if (u !== this._dur) return this.render(r, s, o);
        }
        if (
          ((this._tTime = h),
          (this._time = f),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = v = (T || this._ease)(f / u)),
          this._from && (this.ratio = v = 1 - v),
          f && !a && !s && !m && (It(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (d = this._pt; d; ) d.r(v, d.d), (d = d._next);
        (b &&
          b.render(
            r < 0 ? r : !f && _ ? -se : b._dur * b._ease(f / this._dur),
            s,
            o
          )) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !s &&
            (c && ks(this, r, s, o), It(this, "onUpdate")),
          this._repeat &&
            m !== g &&
            this.vars.onRepeat &&
            !s &&
            this.parent &&
            It(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (c && !this._onUpdate && ks(this, r, !0, !0),
            (r || !u) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              Mi(this, 1),
            !s &&
              !(c && !a) &&
              (h || a || _) &&
              (It(this, h === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        n.prototype.invalidate.call(this, r)
      );
    }),
    (t.resetTo = function (r, s, o, a) {
      rn || wt.wake(), this._ts || this.play();
      var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || oo(this, l),
        (u = this._ease(l / this._dur)),
        qf(this, r, s, o, a, u, l)
          ? this.resetTo(r, s, o, a)
          : (Zn(this, 0),
            this.parent ||
              Ra(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (r, s) {
      if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Br(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, yi && yi.vars.overwrite !== !0)
            ._first || Br(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Er(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = r ? At(r) : a,
        u = this._ptLookup,
        c = this._pt,
        h,
        f,
        d,
        m,
        p,
        g,
        _;
      if ((!s || s === "all") && Tf(a, l))
        return s === "all" && (this._pt = 0), Br(this);
      for (
        h = this._op = this._op || [],
          s !== "all" &&
            (Ie(s) &&
              ((p = {}),
              dt(s, function (v) {
                return (p[v] = 1);
              }),
              (s = p)),
            (s = Hf(a, s))),
          _ = a.length;
        _--;

      )
        if (~l.indexOf(a[_])) {
          (f = u[_]),
            s === "all"
              ? ((h[_] = s), (m = f), (d = {}))
              : ((d = h[_] = h[_] || {}), (m = s));
          for (p in m)
            (g = f && f[p]),
              g &&
                ((!("kill" in g.d) || g.d.kill(p) === !0) && Kn(this, g, "_pt"),
                delete f[p]),
              d !== "all" && (d[p] = 1);
        }
      return this._initted && !this._pt && c && Br(this), this;
    }),
    (e.to = function (r, s) {
      return new e(r, s, arguments[2]);
    }),
    (e.from = function (r, s) {
      return Hr(1, arguments);
    }),
    (e.delayedCall = function (r, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (r, s, o) {
      return Hr(2, arguments);
    }),
    (e.set = function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
    }),
    (e.killTweensOf = function (r, s, o) {
      return fe.killTweensOf(r, s, o);
    }),
    e
  );
})(nn);
zt(Ee.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
dt("staggerTo,staggerFrom,staggerFromTo", function (n) {
  Ee[n] = function () {
    var e = new ct(),
      t = Ls.call(arguments, 0);
    return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
  };
});
var ao = function (e, t, i) {
    return (e[t] = i);
  },
  nl = function (e, t, i) {
    return e[t](i);
  },
  Yf = function (e, t, i, r) {
    return e[t](r.fp, i);
  },
  Wf = function (e, t, i) {
    return e.setAttribute(t, i);
  },
  lo = function (e, t) {
    return _e(e[t]) ? nl : Zs(e[t]) && e.setAttribute ? Wf : ao;
  },
  sl = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  Xf = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  ol = function (e, t) {
    var i = t._pt,
      r = "";
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  uo = function (e, t) {
    for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
  },
  Uf = function (e, t, i, r) {
    for (var s = this._pt, o; s; )
      (o = s._next), s.p === r && s.modifier(e, t, i), (s = o);
  },
  Kf = function (e) {
    for (var t = this._pt, i, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? Kn(this, t, "_pt")
          : t.dep || (i = 1),
        (t = r);
    return !i;
  },
  Qf = function (e, t, i, r) {
    r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
  },
  al = function (e) {
    for (var t = e._pt, i, r, s, o; t; ) {
      for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
        (t._next = r) ? (r._prev = t) : (o = t),
        (t = i);
    }
    e._pt = s;
  },
  ht = (function () {
    function n(t, i, r, s, o, a, l, u, c) {
      (this.t = i),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = a || sl),
        (this.d = l || this),
        (this.set = u || ao),
        (this.pr = c || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = n.prototype;
    return (
      (e.modifier = function (i, r, s) {
        (this.mSet = this.mSet || this.set),
          (this.set = Qf),
          (this.m = i),
          (this.mt = s),
          (this.tween = r);
      }),
      n
    );
  })();
dt(
  ro +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (n) {
    return (io[n] = 1);
  }
);
Pt.TweenMax = Pt.TweenLite = Ee;
Pt.TimelineLite = Pt.TimelineMax = ct;
fe = new ct({
  sortChildren: !1,
  defaults: wr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Et.stringFilter = Ka;
var Qi = [],
  kn = {},
  Zf = [],
  zo = 0,
  Jf = 0,
  hs = function (e) {
    return (kn[e] || Zf).map(function (t) {
      return t();
    });
  },
  Rs = function () {
    var e = Date.now(),
      t = [];
    e - zo > 2 &&
      (hs("matchMediaInit"),
      Qi.forEach(function (i) {
        var r = i.queries,
          s = i.conditions,
          o,
          a,
          l,
          u;
        for (a in r)
          (o = kt.matchMedia(r[a]).matches),
            o && (l = 1),
            o !== s[a] && ((s[a] = o), (u = 1));
        u && (i.revert(), l && t.push(i));
      }),
      hs("matchMediaRevert"),
      t.forEach(function (i) {
        return i.onMatch(i);
      }),
      (zo = e),
      hs("matchMedia"));
  },
  ll = (function () {
    function n(t, i) {
      (this.selector = i && Ds(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Jf++),
        t && this.add(t);
    }
    var e = n.prototype;
    return (
      (e.add = function (i, r, s) {
        _e(i) && ((s = r), (r = i), (i = _e));
        var o = this,
          a = function () {
            var u = ge,
              c = o.selector,
              h;
            return (
              u && u !== o && u.data.push(o),
              s && (o.selector = Ds(s)),
              (ge = o),
              (h = r.apply(o, arguments)),
              _e(h) && o._r.push(h),
              (ge = u),
              (o.selector = c),
              (o.isReverted = !1),
              h
            );
          };
        return (o.last = a), i === _e ? a(o) : i ? (o[i] = a) : a;
      }),
      (e.ignore = function (i) {
        var r = ge;
        (ge = null), i(this), (ge = r);
      }),
      (e.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof n
              ? i.push.apply(i, r.getTweens())
              : r instanceof Ee &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (i, r) {
        var s = this;
        if (i) {
          var o = this.getTweens();
          this.data.forEach(function (l) {
            l.data === "isFlip" &&
              (l.revert(),
              l.getChildren(!0, !0, !1).forEach(function (u) {
                return o.splice(o.indexOf(u), 1);
              }));
          }),
            o
              .map(function (l) {
                return { g: l.globalTime(0), t: l };
              })
              .sort(function (l, u) {
                return u.g - l.g || -1 / 0;
              })
              .forEach(function (l) {
                return l.t.revert(i);
              }),
            this.data.forEach(function (l) {
              return !(l instanceof Ee) && l.revert && l.revert(i);
            }),
            this._r.forEach(function (l) {
              return l(i, s);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (l) {
            return l.kill && l.kill();
          });
        if ((this.clear(), r))
          for (var a = Qi.length; a--; )
            Qi[a].id === this.id && Qi.splice(a, 1);
      }),
      (e.revert = function (i) {
        this.kill(i || {});
      }),
      n
    );
  })(),
  ed = (function () {
    function n(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = n.prototype;
    return (
      (e.add = function (i, r, s) {
        ii(i) || (i = { matches: i });
        var o = new ll(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          u,
          c;
        ge && !o.selector && (o.selector = ge.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = i);
        for (u in i)
          u === "all"
            ? (c = 1)
            : ((l = kt.matchMedia(i[u])),
              l &&
                (Qi.indexOf(o) < 0 && Qi.push(o),
                (a[u] = l.matches) && (c = 1),
                l.addListener
                  ? l.addListener(Rs)
                  : l.addEventListener("change", Rs)));
        return c && r(o), this;
      }),
      (e.revert = function (i) {
        this.kill(i || {});
      }),
      (e.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      n
    );
  })(),
  qn = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      t.forEach(function (r) {
        return Wa(r);
      });
    },
    timeline: function (e) {
      return new ct(e);
    },
    getTweensOf: function (e, t) {
      return fe.getTweensOf(e, t);
    },
    getProperty: function (e, t, i, r) {
      Ie(e) && (e = At(e)[0]);
      var s = Xi(e || {}).get,
        o = i ? Ia : Aa;
      return (
        i === "native" && (i = ""),
        e &&
          (t
            ? o(((St[t] && St[t].get) || s)(e, t, i, r))
            : function (a, l, u) {
                return o(((St[a] && St[a].get) || s)(e, a, l, u));
              })
      );
    },
    quickSetter: function (e, t, i) {
      if (((e = At(e)), e.length > 1)) {
        var r = e.map(function (c) {
            return pt.quickSetter(c, t, i);
          }),
          s = r.length;
        return function (c) {
          for (var h = s; h--; ) r[h](c);
        };
      }
      e = e[0] || {};
      var o = St[t],
        a = Xi(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        u = o
          ? function (c) {
              var h = new o();
              (mr._pt = 0),
                h.init(e, i ? c + i : c, mr, 0, [e]),
                h.render(1, h),
                mr._pt && uo(1, mr);
            }
          : a.set(e, l);
      return o
        ? u
        : function (c) {
            return u(e, l, i ? c + i : c, a, 1);
          };
    },
    quickTo: function (e, t, i) {
      var r,
        s = pt.to(
          e,
          tr(((r = {}), (r[t] = "+=0.1"), (r.paused = !0), r), i || {})
        ),
        o = function (l, u, c) {
          return s.resetTo(t, l, u, c);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return fe.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Ki(e.ease, wr.ease)), Lo(wr, e || {});
    },
    config: function (e) {
      return Lo(Et, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        i = e.effect,
        r = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (r || "").split(",").forEach(function (a) {
        return (
          a && !St[a] && !Pt[a] && Nn(t + " effect requires " + a + " plugin.")
        );
      }),
        (us[t] = function (a, l, u) {
          return i(At(a), zt(l || {}, s), u);
        }),
        o &&
          (ct.prototype[t] = function (a, l, u) {
            return this.add(us[t](a, ii(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, t) {
      U[e] = Ki(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Ki(e, t) : U;
    },
    getById: function (e) {
      return fe.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var i = new ct(e),
        r,
        s;
      for (
        i.smoothChildTiming = ft(e.smoothChildTiming),
          fe.remove(i),
          i._dp = 0,
          i._time = i._tTime = fe._time,
          r = fe._first;
        r;

      )
        (s = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof Ee &&
              r.vars.onComplete === r._targets[0]
            )) &&
            Zt(i, r, r._start - r._delay),
          (r = s);
      return Zt(fe, i, 0), i;
    },
    context: function (e, t) {
      return e ? new ll(e, t) : ge;
    },
    matchMedia: function (e) {
      return new ed(e);
    },
    matchMediaRefresh: function () {
      return (
        Qi.forEach(function (e) {
          var t = e.conditions,
            i,
            r;
          for (r in t) t[r] && ((t[r] = !1), (i = 1));
          i && e.revert();
        }) || Rs()
      );
    },
    addEventListener: function (e, t) {
      var i = kn[e] || (kn[e] = []);
      ~i.indexOf(t) || i.push(t);
    },
    removeEventListener: function (e, t) {
      var i = kn[e],
        r = i && i.indexOf(t);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: Df,
      wrapYoyo: Af,
      distribute: Ga,
      random: qa,
      snap: Va,
      normalize: Lf,
      getUnit: We,
      clamp: Pf,
      splitColor: Xa,
      toArray: At,
      selector: Ds,
      mapRange: ja,
      pipe: kf,
      unitize: Of,
      interpolate: If,
      shuffle: Fa,
    },
    install: Ma,
    effects: us,
    ticker: wt,
    updateRoot: ct.updateRoot,
    plugins: St,
    globalTimeline: fe,
    core: {
      PropTween: ht,
      globals: ka,
      Tween: Ee,
      Timeline: ct,
      Animation: nn,
      getCache: Xi,
      _removeLinkedListItem: Kn,
      reverting: function () {
        return Xe;
      },
      context: function (e) {
        return e && ge && (ge.data.push(e), (e._ctx = ge)), ge;
      },
      suppressOverwrites: function (e) {
        return (Qs = e);
      },
    },
  };
dt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
  return (qn[n] = Ee[n]);
});
wt.add(ct.updateRoot);
mr = qn.to({}, { duration: 0 });
var td = function (e, t) {
    for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
      i = i._next;
    return i;
  },
  id = function (e, t) {
    var i = e._targets,
      r,
      s,
      o;
    for (r in t)
      for (s = i.length; s--; )
        (o = e._ptLookup[s][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = td(o, r)),
            o && o.modifier && o.modifier(t[r], e, i[s], r));
  },
  ps = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (r, s, o) {
        o._onInit = function (a) {
          var l, u;
          if (
            (Ie(s) &&
              ((l = {}),
              dt(s, function (c) {
                return (l[c] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (u in s) l[u] = t(s[u]);
            s = l;
          }
          id(a, s);
        };
      },
    };
  },
  pt =
    qn.registerPlugin(
      {
        name: "attr",
        init: function (e, t, i, r, s) {
          var o, a, l;
          this.tween = i;
          for (o in t)
            (l = e.getAttribute(o) || ""),
              (a = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[o],
                r,
                s,
                0,
                0,
                o
              )),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, t) {
          for (var i = t._pt; i; )
            Xe ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var i = t.length; i--; )
            this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
        },
      },
      ps("roundProps", As),
      ps("modifiers"),
      ps("snap", Va)
    ) || qn;
Ee.version = ct.version = pt.version = "3.12.2";
Pa = 1;
Js() && Pr();
U.Power0;
U.Power1;
U.Power2;
U.Power3;
U.Power4;
U.Linear;
U.Quad;
U.Cubic;
U.Quart;
U.Quint;
U.Strong;
U.Elastic;
U.Back;
U.SteppedEase;
U.Bounce;
U.Sine;
U.Expo;
U.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var $o,
  Ti,
  yr,
  co,
  Yi,
  Bo,
  fo,
  rd = function () {
    return typeof window < "u";
  },
  hi = {},
  qi = 180 / Math.PI,
  Tr = Math.PI / 180,
  ur = Math.atan2,
  No = 1e8,
  ho = /([A-Z])/g,
  nd = /(left|right|width|margin|padding|x)/i,
  sd = /[\s,\(]\S/,
  Jt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  zs = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  od = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  ad = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  ld = function (e, t) {
    var i = t.s + t.c * e;
    t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  ul = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  cl = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  ud = function (e, t, i) {
    return (e.style[t] = i);
  },
  cd = function (e, t, i) {
    return e.style.setProperty(t, i);
  },
  fd = function (e, t, i) {
    return (e._gsap[t] = i);
  },
  dd = function (e, t, i) {
    return (e._gsap.scaleX = e._gsap.scaleY = i);
  },
  hd = function (e, t, i, r, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
  },
  pd = function (e, t, i, r, s) {
    var o = e._gsap;
    (o[t] = i), o.renderTransform(s, o);
  },
  de = "transform",
  jt = de + "Origin",
  md = function n(e, t) {
    var i = this,
      r = this.target,
      s = r.style;
    if (e in hi && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = Jt[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (i.tfm[o] = ai(r, o));
              })
            : (this.tfm[e] = r._gsap.x ? r._gsap[e] : ai(r, e));
      else
        return Jt.transform.split(",").forEach(function (o) {
          return n.call(i, o, t);
        });
      if (this.props.indexOf(de) >= 0) return;
      r._gsap.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(jt, t, "")),
        (e = de);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  fl = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  gd = function () {
    var e = this.props,
      t = this.target,
      i = t.style,
      r = t._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (i[e[s]] = e[s + 2])
        : i.removeProperty(
            e[s].substr(0, 2) === "--"
              ? e[s]
              : e[s].replace(ho, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = fo()),
        (!s || !s.isStart) && !i[de] && (fl(i), (r.uncache = 1));
    }
  },
  dl = function (e, t) {
    var i = { target: e, props: [], revert: gd, save: md };
    return (
      e._gsap || pt.core.getCache(e),
      t &&
        t.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  hl,
  $s = function (e, t) {
    var i = Ti.createElementNS
      ? Ti.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Ti.createElement(e);
    return i.style ? i : Ti.createElement(e);
  },
  ei = function n(e, t, i) {
    var r = getComputedStyle(e);
    return (
      r[t] ||
      r.getPropertyValue(t.replace(ho, "-$1").toLowerCase()) ||
      r.getPropertyValue(t) ||
      (!i && n(e, Mr(t) || t, 1)) ||
      ""
    );
  },
  Fo = "O,Moz,ms,Ms,Webkit".split(","),
  Mr = function (e, t, i) {
    var r = t || Yi,
      s = r.style,
      o = 5;
    if (e in s && !i) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      o-- && !(Fo[o] + e in s);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Fo[o] : "") + e;
  },
  Bs = function () {
    rd() &&
      window.document &&
      (($o = window),
      (Ti = $o.document),
      (yr = Ti.documentElement),
      (Yi = $s("div") || { style: {} }),
      $s("div"),
      (de = Mr(de)),
      (jt = de + "Origin"),
      (Yi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (hl = !!Mr("perspective")),
      (fo = pt.core.reverting),
      (co = 1));
  },
  ms = function n(e) {
    var t = $s(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      r = this.nextSibling,
      s = this.style.cssText,
      o;
    if (
      (yr.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (o = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = n);
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox());
    return (
      i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
      yr.removeChild(t),
      (this.style.cssText = s),
      o
    );
  },
  Go = function (e, t) {
    for (var i = t.length; i--; )
      if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
  },
  pl = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = ms.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === ms || (t = ms.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Go(e, ["x", "cx", "x1"]) || 0,
            y: +Go(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  ml = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && pl(e));
  },
  sn = function (e, t) {
    if (t) {
      var i = e.style;
      t in hi && t !== jt && (t = de),
        i.removeProperty
          ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
              (t = "-" + t),
            i.removeProperty(t.replace(ho, "-$1").toLowerCase()))
          : i.removeAttribute(t);
    }
  },
  bi = function (e, t, i, r, s, o) {
    var a = new ht(e._pt, t, i, 0, 1, o ? cl : ul);
    return (e._pt = a), (a.b = r), (a.e = s), e._props.push(i), a;
  },
  Vo = { deg: 1, rad: 1, turn: 1 },
  _d = { grid: 1, flex: 1 },
  ki = function n(e, t, i, r) {
    var s = parseFloat(i) || 0,
      o = (i + "").trim().substr((s + "").length) || "px",
      a = Yi.style,
      l = nd.test(t),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      h = 100,
      f = r === "px",
      d = r === "%",
      m,
      p,
      g,
      _;
    return r === o || !s || Vo[r] || Vo[o]
      ? s
      : (o !== "px" && !f && (s = n(e, t, i, "px")),
        (_ = e.getCTM && ml(e)),
        (d || o === "%") && (hi[t] || ~t.indexOf("adius"))
          ? ((m = _ ? e.getBBox()[l ? "width" : "height"] : e[c]),
            Te(d ? (s / m) * h : (s / 100) * m))
          : ((a[l ? "width" : "height"] = h + (f ? o : r)),
            (p =
              ~t.indexOf("adius") || (r === "em" && e.appendChild && !u)
                ? e
                : e.parentNode),
            _ && (p = (e.ownerSVGElement || {}).parentNode),
            (!p || p === Ti || !p.appendChild) && (p = Ti.body),
            (g = p._gsap),
            g && d && g.width && l && g.time === wt.time && !g.uncache
              ? Te((s / g.width) * h)
              : ((d || o === "%") &&
                  !_d[ei(p, "display")] &&
                  (a.position = ei(e, "position")),
                p === e && (a.position = "static"),
                p.appendChild(Yi),
                (m = Yi[c]),
                p.removeChild(Yi),
                (a.position = "absolute"),
                l && d && ((g = Xi(p)), (g.time = wt.time), (g.width = p[c])),
                Te(f ? (m * s) / h : m && s ? (h / m) * s : 0))));
  },
  ai = function (e, t, i, r) {
    var s;
    return (
      co || Bs(),
      t in Jt &&
        t !== "transform" &&
        ((t = Jt[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      hi[t] && t !== "transform"
        ? ((s = an(e, r)),
          (s =
            t !== "transformOrigin"
              ? s[t]
              : s.svg
              ? s.origin
              : jn(ei(e, jt)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
            (s =
              (Hn[t] && Hn[t](e, t, i)) ||
              ei(e, t) ||
              La(e, t) ||
              (t === "opacity" ? 1 : 0))),
      i && !~(s + "").trim().indexOf(" ") ? ki(e, t, s, i) + i : s
    );
  },
  vd = function (e, t, i, r) {
    if (!i || i === "none") {
      var s = Mr(t, e, 1),
        o = s && ei(e, s, 1);
      o && o !== i
        ? ((t = s), (i = o))
        : t === "borderColor" && (i = ei(e, "borderTopColor"));
    }
    var a = new ht(this._pt, e.style, t, 0, 1, ol),
      l = 0,
      u = 0,
      c,
      h,
      f,
      d,
      m,
      p,
      g,
      _,
      v,
      b,
      T,
      C;
    if (
      ((a.b = i),
      (a.e = r),
      (i += ""),
      (r += ""),
      r === "auto" && ((e.style[t] = r), (r = ei(e, t) || r), (e.style[t] = i)),
      (c = [i, r]),
      Ka(c),
      (i = c[0]),
      (r = c[1]),
      (f = i.match(pr) || []),
      (C = r.match(pr) || []),
      C.length)
    ) {
      for (; (h = pr.exec(r)); )
        (g = h[0]),
          (v = r.substring(l, h.index)),
          m
            ? (m = (m + 1) % 5)
            : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (m = 1),
          g !== (p = f[u++] || "") &&
            ((d = parseFloat(p) || 0),
            (T = p.substr((d + "").length)),
            g.charAt(1) === "=" && (g = vr(d, g) + T),
            (_ = parseFloat(g)),
            (b = g.substr((_ + "").length)),
            (l = pr.lastIndex - b.length),
            b ||
              ((b = b || Et.units[t] || T),
              l === r.length && ((r += b), (a.e += b))),
            T !== b && (d = ki(e, t, p, b) || 0),
            (a._pt = {
              _next: a._pt,
              p: v || u === 1 ? v : ",",
              s: d,
              c: _ - d,
              m: (m && m < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = l < r.length ? r.substring(l, r.length) : "";
    } else a.r = t === "display" && r === "none" ? cl : ul;
    return Ca.test(r) && (a.e = 0), (this._pt = a), a;
  },
  qo = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  yd = function (e) {
    var t = e.split(" "),
      i = t[0],
      r = t[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((e = i), (i = r), (r = e)),
      (t[0] = qo[i] || i),
      (t[1] = qo[r] || r),
      t.join(" ")
    );
  },
  Td = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var i = t.t,
        r = i.style,
        s = t.u,
        o = i._gsap,
        a,
        l,
        u;
      if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
      else
        for (s = s.split(","), u = s.length; --u > -1; )
          (a = s[u]),
            hi[a] && ((l = 1), (a = a === "transformOrigin" ? jt : de)),
            sn(i, a);
      l &&
        (sn(i, de),
        o &&
          (o.svg && i.removeAttribute("transform"),
          an(i, 1),
          (o.uncache = 1),
          fl(r)));
    }
  },
  Hn = {
    clearProps: function (e, t, i, r, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new ht(e._pt, t, i, 0, 0, Td));
        return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
      }
    },
  },
  on = [1, 0, 0, 1, 0, 0],
  gl = {},
  _l = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Ho = function (e) {
    var t = ei(e, de);
    return _l(t) ? on : t.substr(7).match(wa).map(Te);
  },
  po = function (e, t) {
    var i = e._gsap || Xi(e),
      r = e.style,
      s = Ho(e),
      o,
      a,
      l,
      u;
    return i.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? on : s)
      : (s === on &&
          !e.offsetParent &&
          e !== yr &&
          !i.svg &&
          ((l = r.display),
          (r.display = "block"),
          (o = e.parentNode),
          (!o || !e.offsetParent) &&
            ((u = 1), (a = e.nextElementSibling), yr.appendChild(e)),
          (s = Ho(e)),
          l ? (r.display = l) : sn(e, "display"),
          u &&
            (a
              ? o.insertBefore(e, a)
              : o
              ? o.appendChild(e)
              : yr.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  Ns = function (e, t, i, r, s, o) {
    var a = e._gsap,
      l = s || po(e, !0),
      u = a.xOrigin || 0,
      c = a.yOrigin || 0,
      h = a.xOffset || 0,
      f = a.yOffset || 0,
      d = l[0],
      m = l[1],
      p = l[2],
      g = l[3],
      _ = l[4],
      v = l[5],
      b = t.split(" "),
      T = parseFloat(b[0]) || 0,
      C = parseFloat(b[1]) || 0,
      E,
      x,
      P,
      M;
    i
      ? l !== on &&
        (x = d * g - m * p) &&
        ((P = T * (g / x) + C * (-p / x) + (p * v - g * _) / x),
        (M = T * (-m / x) + C * (d / x) - (d * v - m * _) / x),
        (T = P),
        (C = M))
      : ((E = pl(e)),
        (T = E.x + (~b[0].indexOf("%") ? (T / 100) * E.width : T)),
        (C = E.y + (~(b[1] || b[0]).indexOf("%") ? (C / 100) * E.height : C))),
      r || (r !== !1 && a.smooth)
        ? ((_ = T - u),
          (v = C - c),
          (a.xOffset = h + (_ * d + v * p) - _),
          (a.yOffset = f + (_ * m + v * g) - v))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = T),
      (a.yOrigin = C),
      (a.smooth = !!r),
      (a.origin = t),
      (a.originIsAbsolute = !!i),
      (e.style[jt] = "0px 0px"),
      o &&
        (bi(o, a, "xOrigin", u, T),
        bi(o, a, "yOrigin", c, C),
        bi(o, a, "xOffset", h, a.xOffset),
        bi(o, a, "yOffset", f, a.yOffset)),
      e.setAttribute("data-svg-origin", T + " " + C);
  },
  an = function (e, t) {
    var i = e._gsap || new el(e);
    if ("x" in i && !t && !i.uncache) return i;
    var r = e.style,
      s = i.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      u = ei(e, jt) || "0",
      c,
      h,
      f,
      d,
      m,
      p,
      g,
      _,
      v,
      b,
      T,
      C,
      E,
      x,
      P,
      M,
      S,
      L,
      k,
      V,
      N,
      F,
      q,
      O,
      R,
      $,
      y,
      te,
      he,
      st,
      ie,
      be;
    return (
      (c = h = f = p = g = _ = v = b = T = 0),
      (d = m = 1),
      (i.svg = !!(e.getCTM && ml(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (r[de] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[de] !== "none" ? l[de] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (x = po(e, i.svg)),
      i.svg &&
        (i.uncache
          ? ((R = e.getBBox()),
            (u = i.xOrigin - R.x + "px " + (i.yOrigin - R.y) + "px"),
            (O = ""))
          : (O = !t && e.getAttribute("data-svg-origin")),
        Ns(e, O || u, !!O || i.originIsAbsolute, i.smooth !== !1, x)),
      (C = i.xOrigin || 0),
      (E = i.yOrigin || 0),
      x !== on &&
        ((L = x[0]),
        (k = x[1]),
        (V = x[2]),
        (N = x[3]),
        (c = F = x[4]),
        (h = q = x[5]),
        x.length === 6
          ? ((d = Math.sqrt(L * L + k * k)),
            (m = Math.sqrt(N * N + V * V)),
            (p = L || k ? ur(k, L) * qi : 0),
            (v = V || N ? ur(V, N) * qi + p : 0),
            v && (m *= Math.abs(Math.cos(v * Tr))),
            i.svg && ((c -= C - (C * L + E * V)), (h -= E - (C * k + E * N))))
          : ((be = x[6]),
            (st = x[7]),
            (y = x[8]),
            (te = x[9]),
            (he = x[10]),
            (ie = x[11]),
            (c = x[12]),
            (h = x[13]),
            (f = x[14]),
            (P = ur(be, he)),
            (g = P * qi),
            P &&
              ((M = Math.cos(-P)),
              (S = Math.sin(-P)),
              (O = F * M + y * S),
              (R = q * M + te * S),
              ($ = be * M + he * S),
              (y = F * -S + y * M),
              (te = q * -S + te * M),
              (he = be * -S + he * M),
              (ie = st * -S + ie * M),
              (F = O),
              (q = R),
              (be = $)),
            (P = ur(-V, he)),
            (_ = P * qi),
            P &&
              ((M = Math.cos(-P)),
              (S = Math.sin(-P)),
              (O = L * M - y * S),
              (R = k * M - te * S),
              ($ = V * M - he * S),
              (ie = N * S + ie * M),
              (L = O),
              (k = R),
              (V = $)),
            (P = ur(k, L)),
            (p = P * qi),
            P &&
              ((M = Math.cos(P)),
              (S = Math.sin(P)),
              (O = L * M + k * S),
              (R = F * M + q * S),
              (k = k * M - L * S),
              (q = q * M - F * S),
              (L = O),
              (F = R)),
            g &&
              Math.abs(g) + Math.abs(p) > 359.9 &&
              ((g = p = 0), (_ = 180 - _)),
            (d = Te(Math.sqrt(L * L + k * k + V * V))),
            (m = Te(Math.sqrt(q * q + be * be))),
            (P = ur(F, q)),
            (v = Math.abs(P) > 2e-4 ? P * qi : 0),
            (T = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
        i.svg &&
          ((O = e.getAttribute("transform")),
          (i.forceCSS = e.setAttribute("transform", "") || !_l(ei(e, de))),
          O && e.setAttribute("transform", O))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (s
          ? ((d *= -1), (v += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((m *= -1), (v += v <= 0 ? 180 : -180))),
      (t = t || i.uncache),
      (i.x =
        c -
        ((i.xPercent =
          c &&
          ((!t && i.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        h -
        ((i.yPercent =
          h &&
          ((!t && i.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = f + o),
      (i.scaleX = Te(d)),
      (i.scaleY = Te(m)),
      (i.rotation = Te(p) + a),
      (i.rotationX = Te(g) + a),
      (i.rotationY = Te(_) + a),
      (i.skewX = v + a),
      (i.skewY = b + a),
      (i.transformPerspective = T + o),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[jt] = jn(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = Et.force3D),
      (i.renderTransform = i.svg ? xd : hl ? vl : bd),
      (i.uncache = 0),
      i
    );
  },
  jn = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  gs = function (e, t, i) {
    var r = We(t);
    return Te(parseFloat(t) + parseFloat(ki(e, "x", i + "px", r))) + r;
  },
  bd = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      vl(e, t);
  },
  Gi = "0deg",
  Ir = "0px",
  Vi = ") ",
  vl = function (e, t) {
    var i = t || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.z,
      u = i.rotation,
      c = i.rotationY,
      h = i.rotationX,
      f = i.skewX,
      d = i.skewY,
      m = i.scaleX,
      p = i.scaleY,
      g = i.transformPerspective,
      _ = i.force3D,
      v = i.target,
      b = i.zOrigin,
      T = "",
      C = (_ === "auto" && e && e !== 1) || _ === !0;
    if (b && (h !== Gi || c !== Gi)) {
      var E = parseFloat(c) * Tr,
        x = Math.sin(E),
        P = Math.cos(E),
        M;
      (E = parseFloat(h) * Tr),
        (M = Math.cos(E)),
        (o = gs(v, o, x * M * -b)),
        (a = gs(v, a, -Math.sin(E) * -b)),
        (l = gs(v, l, P * M * -b + b));
    }
    g !== Ir && (T += "perspective(" + g + Vi),
      (r || s) && (T += "translate(" + r + "%, " + s + "%) "),
      (C || o !== Ir || a !== Ir || l !== Ir) &&
        (T +=
          l !== Ir || C
            ? "translate3d(" + o + ", " + a + ", " + l + ") "
            : "translate(" + o + ", " + a + Vi),
      u !== Gi && (T += "rotate(" + u + Vi),
      c !== Gi && (T += "rotateY(" + c + Vi),
      h !== Gi && (T += "rotateX(" + h + Vi),
      (f !== Gi || d !== Gi) && (T += "skew(" + f + ", " + d + Vi),
      (m !== 1 || p !== 1) && (T += "scale(" + m + ", " + p + Vi),
      (v.style[de] = T || "translate(0, 0)");
  },
  xd = function (e, t) {
    var i = t || this,
      r = i.xPercent,
      s = i.yPercent,
      o = i.x,
      a = i.y,
      l = i.rotation,
      u = i.skewX,
      c = i.skewY,
      h = i.scaleX,
      f = i.scaleY,
      d = i.target,
      m = i.xOrigin,
      p = i.yOrigin,
      g = i.xOffset,
      _ = i.yOffset,
      v = i.forceCSS,
      b = parseFloat(o),
      T = parseFloat(a),
      C,
      E,
      x,
      P,
      M;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (l += c)),
      l || u
        ? ((l *= Tr),
          (u *= Tr),
          (C = Math.cos(l) * h),
          (E = Math.sin(l) * h),
          (x = Math.sin(l - u) * -f),
          (P = Math.cos(l - u) * f),
          u &&
            ((c *= Tr),
            (M = Math.tan(u - c)),
            (M = Math.sqrt(1 + M * M)),
            (x *= M),
            (P *= M),
            c &&
              ((M = Math.tan(c)),
              (M = Math.sqrt(1 + M * M)),
              (C *= M),
              (E *= M))),
          (C = Te(C)),
          (E = Te(E)),
          (x = Te(x)),
          (P = Te(P)))
        : ((C = h), (P = f), (E = x = 0)),
      ((b && !~(o + "").indexOf("px")) || (T && !~(a + "").indexOf("px"))) &&
        ((b = ki(d, "x", o, "px")), (T = ki(d, "y", a, "px"))),
      (m || p || g || _) &&
        ((b = Te(b + m - (m * C + p * x) + g)),
        (T = Te(T + p - (m * E + p * P) + _))),
      (r || s) &&
        ((M = d.getBBox()),
        (b = Te(b + (r / 100) * M.width)),
        (T = Te(T + (s / 100) * M.height))),
      (M =
        "matrix(" + C + "," + E + "," + x + "," + P + "," + b + "," + T + ")"),
      d.setAttribute("transform", M),
      v && (d.style[de] = M);
  },
  Sd = function (e, t, i, r, s) {
    var o = 360,
      a = Ie(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? qi : 1),
      u = l - r,
      c = r + u + "deg",
      h,
      f;
    return (
      a &&
        ((h = s.split("_")[1]),
        h === "short" && ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
        h === "cw" && u < 0
          ? (u = ((u + o * No) % o) - ~~(u / o) * o)
          : h === "ccw" && u > 0 && (u = ((u - o * No) % o) - ~~(u / o) * o)),
      (e._pt = f = new ht(e._pt, t, i, r, u, od)),
      (f.e = c),
      (f.u = "deg"),
      e._props.push(i),
      f
    );
  },
  jo = function (e, t) {
    for (var i in t) e[i] = t[i];
    return e;
  },
  wd = function (e, t, i) {
    var r = jo({}, i._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      a,
      l,
      u,
      c,
      h,
      f,
      d,
      m;
    r.svg
      ? ((u = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[de] = t),
        (a = an(i, 1)),
        sn(i, de),
        i.setAttribute("transform", u))
      : ((u = getComputedStyle(i)[de]),
        (o[de] = t),
        (a = an(i, 1)),
        (o[de] = u));
    for (l in hi)
      (u = r[l]),
        (c = a[l]),
        u !== c &&
          s.indexOf(l) < 0 &&
          ((d = We(u)),
          (m = We(c)),
          (h = d !== m ? ki(i, l, u, m) : parseFloat(u)),
          (f = parseFloat(c)),
          (e._pt = new ht(e._pt, a, l, h, f - h, zs)),
          (e._pt.u = m || 0),
          e._props.push(l));
    jo(a, r);
  };
dt("padding,margin,Width,Radius", function (n, e) {
  var t = "Top",
    i = "Right",
    r = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (a) {
      return e < 2 ? n + a : "border" + a + n;
    });
  Hn[e > 1 ? "border" + n : n] = function (a, l, u, c, h) {
    var f, d;
    if (arguments.length < 4)
      return (
        (f = o.map(function (m) {
          return ai(a, m, u);
        })),
        (d = f.join(" ")),
        d.split(f[0]).length === 5 ? f[0] : d
      );
    (f = (c + "").split(" ")),
      (d = {}),
      o.forEach(function (m, p) {
        return (d[m] = f[p] = f[p] || f[((p - 1) / 2) | 0]);
      }),
      a.init(l, d, h);
  };
});
var yl = {
  name: "css",
  register: Bs,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, i, r, s) {
    var o = this._props,
      a = e.style,
      l = i.vars.startAt,
      u,
      c,
      h,
      f,
      d,
      m,
      p,
      g,
      _,
      v,
      b,
      T,
      C,
      E,
      x,
      P;
    co || Bs(),
      (this.styles = this.styles || dl(e)),
      (P = this.styles.props),
      (this.tween = i);
    for (p in t)
      if (p !== "autoRound" && ((c = t[p]), !(St[p] && tl(p, t, i, r, e, s)))) {
        if (
          ((d = typeof c),
          (m = Hn[p]),
          d === "function" && ((c = c.call(i, r, e, s)), (d = typeof c)),
          d === "string" && ~c.indexOf("random(") && (c = tn(c)),
          m)
        )
          m(this, e, p, c, i) && (x = 1);
        else if (p.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
            (c += ""),
            (Ei.lastIndex = 0),
            Ei.test(u) || ((g = We(u)), (_ = We(c))),
            _ ? g !== _ && (u = ki(e, p, u, _) + _) : g && (c += g),
            this.add(a, "setProperty", u, c, r, s, 0, 0, p),
            o.push(p),
            P.push(p, 0, a[p]);
        else if (d !== "undefined") {
          if (
            (l && p in l
              ? ((u = typeof l[p] == "function" ? l[p].call(i, r, e, s) : l[p]),
                Ie(u) && ~u.indexOf("random(") && (u = tn(u)),
                We(u + "") || (u += Et.units[p] || We(ai(e, p)) || ""),
                (u + "").charAt(1) === "=" && (u = ai(e, p)))
              : (u = ai(e, p)),
            (f = parseFloat(u)),
            (v = d === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            v && (c = c.substr(2)),
            (h = parseFloat(c)),
            p in Jt &&
              (p === "autoAlpha" &&
                (f === 1 && ai(e, "visibility") === "hidden" && h && (f = 0),
                P.push("visibility", 0, a.visibility),
                bi(
                  this,
                  a,
                  "visibility",
                  f ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h
                )),
              p !== "scale" &&
                p !== "transform" &&
                ((p = Jt[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
            (b = p in hi),
            b)
          ) {
            if (
              (this.styles.save(p),
              T ||
                ((C = e._gsap),
                (C.renderTransform && !t.parseTransform) ||
                  an(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && C.smooth),
                (T = this._pt =
                  new ht(this._pt, a, de, 0, 1, C.renderTransform, C, 0, -1)),
                (T.dep = 1)),
              p === "scale")
            )
              (this._pt = new ht(
                this._pt,
                C,
                "scaleY",
                C.scaleY,
                (v ? vr(C.scaleY, v + h) : h) - C.scaleY || 0,
                zs
              )),
                (this._pt.u = 0),
                o.push("scaleY", p),
                (p += "X");
            else if (p === "transformOrigin") {
              P.push(jt, 0, a[jt]),
                (c = yd(c)),
                C.svg
                  ? Ns(e, c, 0, E, 0, this)
                  : ((_ = parseFloat(c.split(" ")[2]) || 0),
                    _ !== C.zOrigin && bi(this, C, "zOrigin", C.zOrigin, _),
                    bi(this, a, p, jn(u), jn(c)));
              continue;
            } else if (p === "svgOrigin") {
              Ns(e, c, 1, E, 0, this);
              continue;
            } else if (p in gl) {
              Sd(this, C, p, f, v ? vr(f, v + c) : c);
              continue;
            } else if (p === "smoothOrigin") {
              bi(this, C, "smooth", C.smooth, c);
              continue;
            } else if (p === "force3D") {
              C[p] = c;
              continue;
            } else if (p === "transform") {
              wd(this, c, e);
              continue;
            }
          } else p in a || (p = Mr(p) || p);
          if (b || ((h || h === 0) && (f || f === 0) && !sd.test(c) && p in a))
            (g = (u + "").substr((f + "").length)),
              h || (h = 0),
              (_ = We(c) || (p in Et.units ? Et.units[p] : g)),
              g !== _ && (f = ki(e, p, u, _)),
              (this._pt = new ht(
                this._pt,
                b ? C : a,
                p,
                f,
                (v ? vr(f, v + h) : h) - f,
                !b && (_ === "px" || p === "zIndex") && t.autoRound !== !1
                  ? ld
                  : zs
              )),
              (this._pt.u = _ || 0),
              g !== _ && _ !== "%" && ((this._pt.b = u), (this._pt.r = ad));
          else if (p in a) vd.call(this, e, p, u, v ? v + c : c);
          else if (p in e) this.add(e, p, u || e[p], v ? v + c : c, r, s);
          else if (p !== "parseTransform") {
            to(p, c);
            continue;
          }
          b || (p in a ? P.push(p, 0, a[p]) : P.push(p, 1, u || e[p])),
            o.push(p);
        }
      }
    x && al(this);
  },
  render: function (e, t) {
    if (t.tween._time || !fo())
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    else t.styles.revert();
  },
  get: ai,
  aliases: Jt,
  getSetter: function (e, t, i) {
    var r = Jt[t];
    return (
      r && r.indexOf(",") < 0 && (t = r),
      t in hi && t !== jt && (e._gsap.x || ai(e, "x"))
        ? i && Bo === i
          ? t === "scale"
            ? dd
            : fd
          : (Bo = i || {}) && (t === "scale" ? hd : pd)
        : e.style && !Zs(e.style[t])
        ? ud
        : ~t.indexOf("-")
        ? cd
        : lo(e, t)
    );
  },
  core: { _removeProperty: sn, _getMatrix: po },
};
pt.utils.checkPrefix = Mr;
pt.core.getStyleSaver = dl;
(function (n, e, t, i) {
  var r = dt(n + "," + e + "," + t, function (s) {
    hi[s] = 1;
  });
  dt(e, function (s) {
    (Et.units[s] = "deg"), (gl[s] = 1);
  }),
    (Jt[r[13]] = n + "," + e),
    dt(i, function (s) {
      var o = s.split(":");
      Jt[o[1]] = r[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
dt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (n) {
    Et.units[n] = "px";
  }
);
pt.registerPlugin(yl);
var Jn = pt.registerPlugin(yl) || pt;
Jn.core.Tween;
class Cd {
  constructor(e) {
    (this.DOM = { marque: e.element }), this.init();
  }
  init() {
    this.DOM.marque.forEach((e) => {
      var t = e.childNodes[1],
        i = t.cloneNode(!0);
      e.append(i),
        this.playMarque({ marque: e, content: t }),
        window.addEventListener("resize", (r) => {
          this.playMarque({ marque: e, content: t });
        });
    });
  }
  playMarque(e) {
    let t = parseInt(
        getComputedStyle(e.marque).getPropertyValue("column-gap"),
        10
      ),
      r =
        -1 *
        (parseInt(getComputedStyle(e.content).getPropertyValue("width"), 10) +
          t);
    Jn.fromTo(
      e.marque.children,
      { x: 0 },
      { x: r, duration: 15, ease: "linear", repeat: -1 }
    );
  }
}
function Yo(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, i.key, i);
  }
}
function Ed(n, e, t) {
  return e && Yo(n.prototype, e), t && Yo(n, t), n;
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Ge,
  Fs,
  Ct,
  xi,
  Si,
  br,
  Tl,
  Hi,
  Yr,
  bl,
  ui,
  qt,
  xl,
  Sl = function () {
    return (
      Ge ||
      (typeof window < "u" && (Ge = window.gsap) && Ge.registerPlugin && Ge)
    );
  },
  wl = 1,
  gr = [],
  Y = [],
  ti = [],
  Wr = Date.now,
  Gs = function (e, t) {
    return t;
  },
  Pd = function () {
    var e = Yr.core,
      t = e.bridge || {},
      i = e._scrollers,
      r = e._proxies;
    i.push.apply(i, Y),
      r.push.apply(r, ti),
      (Y = i),
      (ti = r),
      (Gs = function (o, a) {
        return t[o](a);
      });
  },
  Pi = function (e, t) {
    return ~ti.indexOf(e) && ti[ti.indexOf(e) + 1][t];
  },
  Xr = function (e) {
    return !!~bl.indexOf(e);
  },
  Je = function (e, t, i, r, s) {
    return e.addEventListener(t, i, { passive: !r, capture: !!s });
  },
  Ze = function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  },
  mn = "scrollLeft",
  gn = "scrollTop",
  Vs = function () {
    return (ui && ui.isPressed) || Y.cache++;
  },
  Yn = function (e, t) {
    var i = function r(s) {
      if (s || s === 0) {
        wl && (Ct.history.scrollRestoration = "manual");
        var o = ui && ui.isPressed;
        (s = r.v = Math.round(s) || (ui && ui.iOS ? 1 : 0)),
          e(s),
          (r.cacheID = Y.cache),
          o && Gs("ss", s);
      } else
        (t || Y.cache !== r.cacheID || Gs("ref")) &&
          ((r.cacheID = Y.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return (i.offset = 0), e && i;
  },
  rt = {
    s: mn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Yn(function (n) {
      return arguments.length
        ? Ct.scrollTo(n, Oe.sc())
        : Ct.pageXOffset || xi[mn] || Si[mn] || br[mn] || 0;
    }),
  },
  Oe = {
    s: gn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: rt,
    sc: Yn(function (n) {
      return arguments.length
        ? Ct.scrollTo(rt.sc(), n)
        : Ct.pageYOffset || xi[gn] || Si[gn] || br[gn] || 0;
    }),
  },
  ut = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Ge.utils.toArray)(e)[0] ||
      (typeof e == "string" && Ge.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Oi = function (e, t) {
    var i = t.s,
      r = t.sc;
    Xr(e) && (e = xi.scrollingElement || Si);
    var s = Y.indexOf(e),
      o = r === Oe.sc ? 1 : 2;
    !~s && (s = Y.push(e) - 1), Y[s + o] || Je(e, "scroll", Vs);
    var a = Y[s + o],
      l =
        a ||
        (Y[s + o] =
          Yn(Pi(e, i), !0) ||
          (Xr(e)
            ? r
            : Yn(function (u) {
                return arguments.length ? (e[i] = u) : e[i];
              })));
    return (
      (l.target = e),
      a || (l.smooth = Ge.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  qs = function (e, t, i) {
    var r = e,
      s = e,
      o = Wr(),
      a = o,
      l = t || 50,
      u = Math.max(500, l * 3),
      c = function (m, p) {
        var g = Wr();
        p || g - o > l
          ? ((s = r), (r = m), (a = o), (o = g))
          : i
          ? (r += m)
          : (r = s + ((m - s) / (g - a)) * (o - a));
      },
      h = function () {
        (s = r = i ? 0 : r), (a = o = 0);
      },
      f = function (m) {
        var p = a,
          g = s,
          _ = Wr();
        return (
          (m || m === 0) && m !== r && c(m),
          o === a || _ - a > u
            ? 0
            : ((r + (i ? g : -g)) / ((i ? _ : o) - p)) * 1e3
        );
      };
    return { update: c, reset: h, getVelocity: f };
  },
  Rr = function (e, t) {
    return (
      t && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Wo = function (e) {
    var t = Math.max.apply(Math, e),
      i = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(i) ? t : i;
  },
  Cl = function () {
    (Yr = Ge.core.globals().ScrollTrigger), Yr && Yr.core && Pd();
  },
  El = function (e) {
    return (
      (Ge = e || Sl()),
      Ge &&
        typeof document < "u" &&
        document.body &&
        ((Ct = window),
        (xi = document),
        (Si = xi.documentElement),
        (br = xi.body),
        (bl = [Ct, xi, Si, br]),
        Ge.utils.clamp,
        (xl = Ge.core.context || function () {}),
        (Hi = "onpointerenter" in br ? "pointer" : "mouse"),
        (Tl = Pe.isTouch =
          Ct.matchMedia &&
          Ct.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ct ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (qt = Pe.eventTypes =
          (
            "ontouchstart" in Si
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Si
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (wl = 0);
        }, 500),
        Cl(),
        (Fs = 1)),
      Fs
    );
  };
rt.op = Oe;
Y.cache = 0;
var Pe = (function () {
  function n(t) {
    this.init(t);
  }
  var e = n.prototype;
  return (
    (e.init = function (i) {
      Fs || El(Ge) || console.warn("Please gsap.registerPlugin(Observer)"),
        Yr || Cl();
      var r = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        a = i.target,
        l = i.lineHeight,
        u = i.debounce,
        c = i.preventDefault,
        h = i.onStop,
        f = i.onStopDelay,
        d = i.ignore,
        m = i.wheelSpeed,
        p = i.event,
        g = i.onDragStart,
        _ = i.onDragEnd,
        v = i.onDrag,
        b = i.onPress,
        T = i.onRelease,
        C = i.onRight,
        E = i.onLeft,
        x = i.onUp,
        P = i.onDown,
        M = i.onChangeX,
        S = i.onChangeY,
        L = i.onChange,
        k = i.onToggleX,
        V = i.onToggleY,
        N = i.onHover,
        F = i.onHoverEnd,
        q = i.onMove,
        O = i.ignoreCheck,
        R = i.isNormalizer,
        $ = i.onGestureStart,
        y = i.onGestureEnd,
        te = i.onWheel,
        he = i.onEnable,
        st = i.onDisable,
        ie = i.onClick,
        be = i.scrollSpeed,
        xe = i.capture,
        ae = i.allowClicks,
        Ke = i.lockAxis,
        qe = i.onLockAxis;
      (this.target = a = ut(a) || Si),
        (this.vars = i),
        d && (d = Ge.utils.toArray(d)),
        (r = r || 1e-9),
        (s = s || 0),
        (m = m || 1),
        (be = be || 1),
        (o = o || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Ct.getComputedStyle(br).lineHeight) || 22);
      var pi,
        ot,
        Yt,
        J,
        Se,
        at,
        mt,
        w = this,
        gt = 0,
        ri = 0,
        Di = Oi(a, rt),
        we = Oi(a, Oe),
        Ai = Di(),
        Ii = we(),
        Or =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          qt[0] === "pointerdown",
        ze = Xr(a),
        ve = a.ownerDocument || xi,
        $t = [0, 0, 0],
        Bt = [0, 0, 0],
        Ri = 0,
        ni = function () {
          return (Ri = Wr());
        },
        Wt = function (z, ee) {
          return (
            ((w.event = z) && d && ~d.indexOf(z.target)) ||
            (ee && Or && z.pointerType !== "touch") ||
            (O && O(z, ee))
          );
        },
        lt = function () {
          w._vx.reset(), w._vy.reset(), ot.pause(), h && h(w);
        },
        zi = function () {
          var z = (w.deltaX = Wo($t)),
            ee = (w.deltaY = Wo(Bt)),
            pe = Math.abs(z) >= r,
            A = Math.abs(ee) >= r;
          L && (pe || A) && L(w, z, ee, $t, Bt),
            pe &&
              (C && w.deltaX > 0 && C(w),
              E && w.deltaX < 0 && E(w),
              M && M(w),
              k && w.deltaX < 0 != gt < 0 && k(w),
              (gt = w.deltaX),
              ($t[0] = $t[1] = $t[2] = 0)),
            A &&
              (P && w.deltaY > 0 && P(w),
              x && w.deltaY < 0 && x(w),
              S && S(w),
              V && w.deltaY < 0 != ri < 0 && V(w),
              (ri = w.deltaY),
              (Bt[0] = Bt[1] = Bt[2] = 0)),
            (J || Yt) && (q && q(w), Yt && (v(w), (Yt = !1)), (J = !1)),
            at && !(at = !1) && qe && qe(w),
            Se && (te(w), (Se = !1)),
            (pi = 0);
        },
        or = function (z, ee, pe) {
          ($t[pe] += z),
            (Bt[pe] += ee),
            w._vx.update(z),
            w._vy.update(ee),
            u ? pi || (pi = requestAnimationFrame(zi)) : zi();
        },
        ar = function (z, ee) {
          Ke &&
            !mt &&
            ((w.axis = mt = Math.abs(z) > Math.abs(ee) ? "x" : "y"), (at = !0)),
            mt !== "y" && (($t[2] += z), w._vx.update(z, !0)),
            mt !== "x" && ((Bt[2] += ee), w._vy.update(ee, !0)),
            u ? pi || (pi = requestAnimationFrame(zi)) : zi();
        },
        $i = function (z) {
          if (!Wt(z, 1)) {
            z = Rr(z, c);
            var ee = z.clientX,
              pe = z.clientY,
              A = ee - w.x,
              K = pe - w.y,
              B = w.isDragging;
            (w.x = ee),
              (w.y = pe),
              (B ||
                Math.abs(w.startX - ee) >= s ||
                Math.abs(w.startY - pe) >= s) &&
                (v && (Yt = !0),
                B || (w.isDragging = !0),
                ar(A, K),
                B || (g && g(w)));
          }
        },
        mi = (w.onPress = function (G) {
          Wt(G, 1) ||
            (G && G.button) ||
            ((w.axis = mt = null),
            ot.pause(),
            (w.isPressed = !0),
            (G = Rr(G)),
            (gt = ri = 0),
            (w.startX = w.x = G.clientX),
            (w.startY = w.y = G.clientY),
            w._vx.reset(),
            w._vy.reset(),
            Je(R ? a : ve, qt[1], $i, c, !0),
            (w.deltaX = w.deltaY = 0),
            b && b(w));
        }),
        gi = (w.onRelease = function (G) {
          if (!Wt(G, 1)) {
            Ze(R ? a : ve, qt[1], $i, !0);
            var z = !isNaN(w.y - w.startY),
              ee =
                w.isDragging &&
                (Math.abs(w.x - w.startX) > 3 || Math.abs(w.y - w.startY) > 3),
              pe = Rr(G);
            !ee &&
              z &&
              (w._vx.reset(),
              w._vy.reset(),
              c &&
                ae &&
                Ge.delayedCall(0.08, function () {
                  if (Wr() - Ri > 300 && !G.defaultPrevented) {
                    if (G.target.click) G.target.click();
                    else if (ve.createEvent) {
                      var A = ve.createEvent("MouseEvents");
                      A.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Ct,
                        1,
                        pe.screenX,
                        pe.screenY,
                        pe.clientX,
                        pe.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        G.target.dispatchEvent(A);
                    }
                  }
                })),
              (w.isDragging = w.isGesturing = w.isPressed = !1),
              h && !R && ot.restart(!0),
              _ && ee && _(w),
              T && T(w, ee);
          }
        }),
        Q = function (z) {
          return (
            z.touches &&
            z.touches.length > 1 &&
            (w.isGesturing = !0) &&
            $(z, w.isDragging)
          );
        },
        Bi = function () {
          return (w.isGesturing = !1) || y(w);
        },
        Nt = function (z) {
          if (!Wt(z)) {
            var ee = Di(),
              pe = we();
            or((ee - Ai) * be, (pe - Ii) * be, 1),
              (Ai = ee),
              (Ii = pe),
              h && ot.restart(!0);
          }
        },
        Ft = function (z) {
          if (!Wt(z)) {
            (z = Rr(z, c)), te && (Se = !0);
            var ee =
              (z.deltaMode === 1 ? l : z.deltaMode === 2 ? Ct.innerHeight : 1) *
              m;
            or(z.deltaX * ee, z.deltaY * ee, 0), h && !R && ot.restart(!0);
          }
        },
        Gt = function (z) {
          if (!Wt(z)) {
            var ee = z.clientX,
              pe = z.clientY,
              A = ee - w.x,
              K = pe - w.y;
            (w.x = ee), (w.y = pe), (J = !0), (A || K) && ar(A, K);
          }
        },
        Ni = function (z) {
          (w.event = z), N(w);
        },
        lr = function (z) {
          (w.event = z), F(w);
        },
        si = function (z) {
          return Wt(z) || (Rr(z, c) && ie(w));
        };
      (ot = w._dc = Ge.delayedCall(f || 0.25, lt).pause()),
        (w.deltaX = w.deltaY = 0),
        (w._vx = qs(0, 50, !0)),
        (w._vy = qs(0, 50, !0)),
        (w.scrollX = Di),
        (w.scrollY = we),
        (w.isDragging = w.isGesturing = w.isPressed = !1),
        xl(this),
        (w.enable = function (G) {
          return (
            w.isEnabled ||
              (Je(ze ? ve : a, "scroll", Vs),
              o.indexOf("scroll") >= 0 && Je(ze ? ve : a, "scroll", Nt, c, xe),
              o.indexOf("wheel") >= 0 && Je(a, "wheel", Ft, c, xe),
              ((o.indexOf("touch") >= 0 && Tl) || o.indexOf("pointer") >= 0) &&
                (Je(a, qt[0], mi, c, xe),
                Je(ve, qt[2], gi),
                Je(ve, qt[3], gi),
                ae && Je(a, "click", ni, !1, !0),
                ie && Je(a, "click", si),
                $ && Je(ve, "gesturestart", Q),
                y && Je(ve, "gestureend", Bi),
                N && Je(a, Hi + "enter", Ni),
                F && Je(a, Hi + "leave", lr),
                q && Je(a, Hi + "move", Gt)),
              (w.isEnabled = !0),
              G && G.type && mi(G),
              he && he(w)),
            w
          );
        }),
        (w.disable = function () {
          w.isEnabled &&
            (gr.filter(function (G) {
              return G !== w && Xr(G.target);
            }).length || Ze(ze ? ve : a, "scroll", Vs),
            w.isPressed &&
              (w._vx.reset(), w._vy.reset(), Ze(R ? a : ve, qt[1], $i, !0)),
            Ze(ze ? ve : a, "scroll", Nt, xe),
            Ze(a, "wheel", Ft, xe),
            Ze(a, qt[0], mi, xe),
            Ze(ve, qt[2], gi),
            Ze(ve, qt[3], gi),
            Ze(a, "click", ni, !0),
            Ze(a, "click", si),
            Ze(ve, "gesturestart", Q),
            Ze(ve, "gestureend", Bi),
            Ze(a, Hi + "enter", Ni),
            Ze(a, Hi + "leave", lr),
            Ze(a, Hi + "move", Gt),
            (w.isEnabled = w.isPressed = w.isDragging = !1),
            st && st(w));
        }),
        (w.kill = w.revert =
          function () {
            w.disable();
            var G = gr.indexOf(w);
            G >= 0 && gr.splice(G, 1), ui === w && (ui = 0);
          }),
        gr.push(w),
        R && Xr(a) && (ui = w),
        w.enable(p);
    }),
    Ed(n, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    n
  );
})();
Pe.version = "3.12.2";
Pe.create = function (n) {
  return new Pe(n);
};
Pe.register = El;
Pe.getAll = function () {
  return gr.slice();
};
Pe.getById = function (n) {
  return gr.filter(function (e) {
    return e.vars.id === n;
  })[0];
};
Sl() && Ge.registerPlugin(Pe);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var I,
  dr,
  X,
  ce,
  Ht,
  oe,
  Pl,
  Wn,
  Xn,
  _r,
  On,
  _n,
  Ye,
  es,
  Hs,
  et,
  Xo,
  Uo,
  hr,
  Ml,
  _s,
  kl,
  yt,
  Ol,
  Ll,
  Dl,
  _i,
  js,
  mo,
  xr,
  go,
  vs,
  vn = 1,
  it = Date.now,
  ys = it(),
  Rt = 0,
  Fr = 0,
  Ko = function (e, t, i) {
    var r = bt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
  },
  Qo = function (e, t) {
    return t && (!bt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Md = function n() {
    return Fr && requestAnimationFrame(n);
  },
  Zo = function () {
    return (es = 1);
  },
  Jo = function () {
    return (es = 0);
  },
  Qt = function (e) {
    return e;
  },
  Gr = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Al = function () {
    return typeof window < "u";
  },
  Il = function () {
    return I || (Al() && (I = window.gsap) && I.registerPlugin && I);
  },
  ir = function (e) {
    return !!~Pl.indexOf(e);
  },
  Rl = function (e) {
    return (
      (e === "Height" ? go : X["inner" + e]) ||
      Ht["client" + e] ||
      oe["client" + e]
    );
  },
  zl = function (e) {
    return (
      Pi(e, "getBoundingClientRect") ||
      (ir(e)
        ? function () {
            return (zn.width = X.innerWidth), (zn.height = go), zn;
          }
        : function () {
            return li(e);
          })
    );
  },
  kd = function (e, t, i) {
    var r = i.d,
      s = i.d2,
      o = i.a;
    return (o = Pi(e, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (t ? Rl(s) : e["client" + s]) || 0;
        };
  },
  Od = function (e, t) {
    return !t || ~ti.indexOf(e)
      ? zl(e)
      : function () {
          return zn;
        };
  },
  ci = function (e, t) {
    var i = t.s,
      r = t.d2,
      s = t.d,
      o = t.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (o = Pi(e, i))
        ? o() - zl(e)()[s]
        : ir(e)
        ? (Ht[i] || oe[i]) - Rl(r)
        : e[i] - e["offset" + r]
    );
  },
  yn = function (e, t) {
    for (var i = 0; i < hr.length; i += 3)
      (!t || ~t.indexOf(hr[i + 1])) && e(hr[i], hr[i + 1], hr[i + 2]);
  },
  bt = function (e) {
    return typeof e == "string";
  },
  nt = function (e) {
    return typeof e == "function";
  },
  Ln = function (e) {
    return typeof e == "number";
  },
  ji = function (e) {
    return typeof e == "object";
  },
  zr = function (e, t, i) {
    return e && e.progress(t ? 0 : 1) && i && e.pause();
  },
  Ts = function (e, t) {
    if (e.enabled) {
      var i = t(e);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  },
  cr = Math.abs,
  $l = "left",
  Bl = "top",
  _o = "right",
  vo = "bottom",
  Zi = "width",
  Ji = "height",
  Ur = "Right",
  Kr = "Left",
  Qr = "Top",
  Zr = "Bottom",
  Ce = "padding",
  Ot = "margin",
  kr = "Width",
  yo = "Height",
  Ne = "px",
  Lt = function (e) {
    return X.getComputedStyle(e);
  },
  Ld = function (e) {
    var t = Lt(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
  },
  ea = function (e, t) {
    for (var i in t) i in e || (e[i] = t[i]);
    return e;
  },
  li = function (e, t) {
    var i =
        t &&
        Lt(e)[Hs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        I.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = e.getBoundingClientRect();
    return i && i.progress(0).kill(), r;
  },
  Ys = function (e, t) {
    var i = t.d2;
    return e["offset" + i] || e["client" + i] || 0;
  },
  Nl = function (e) {
    var t = [],
      i = e.labels,
      r = e.duration(),
      s;
    for (s in i) t.push(i[s] / r);
    return t;
  },
  Dd = function (e) {
    return function (t) {
      return I.utils.snap(Nl(e), t);
    };
  },
  To = function (e) {
    var t = I.utils.snap(e),
      i =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, s) {
          return r - s;
        });
    return i
      ? function (r, s, o) {
          o === void 0 && (o = 0.001);
          var a;
          if (!s) return t(r);
          if (s > 0) {
            for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
            return i[a - 1];
          } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
          return i[0];
        }
      : function (r, s, o) {
          o === void 0 && (o = 0.001);
          var a = t(r);
          return !s || Math.abs(a - r) < o || a - r < 0 == s < 0
            ? a
            : t(s < 0 ? r - e : r + e);
        };
  },
  Ad = function (e) {
    return function (t, i) {
      return To(Nl(e))(t, i.direction);
    };
  },
  Tn = function (e, t, i, r) {
    return i.split(",").forEach(function (s) {
      return e(t, s, r);
    });
  },
  Ae = function (e, t, i, r, s) {
    return e.addEventListener(t, i, { passive: !r, capture: !!s });
  },
  De = function (e, t, i, r) {
    return e.removeEventListener(t, i, !!r);
  },
  bn = function (e, t, i) {
    (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
  },
  ta = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  xn = { toggleActions: "play", anticipatePin: 0 },
  Un = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Dn = function (e, t) {
    if (bt(e)) {
      var i = e.indexOf("="),
        r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
      ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
        (e =
          r +
          (e in Un
            ? Un[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  Sn = function (e, t, i, r, s, o, a, l) {
    var u = s.startColor,
      c = s.endColor,
      h = s.fontSize,
      f = s.indent,
      d = s.fontWeight,
      m = ce.createElement("div"),
      p = ir(i) || Pi(i, "pinType") === "fixed",
      g = e.indexOf("scroller") !== -1,
      _ = p ? oe : i,
      v = e.indexOf("start") !== -1,
      b = v ? u : c,
      T =
        "border-color:" +
        b +
        ";font-size:" +
        h +
        ";color:" +
        b +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (T += "position:" + ((g || l) && p ? "fixed;" : "absolute;")),
      (g || l || !p) &&
        (T += (r === Oe ? _o : vo) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (T +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (m._isStart = v),
      m.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (m.style.cssText = T),
      (m.innerText = t || t === 0 ? e + "-" + t : e),
      _.children[0] ? _.insertBefore(m, _.children[0]) : _.appendChild(m),
      (m._offset = m["offset" + r.op.d2]),
      An(m, 0, r, v),
      m
    );
  },
  An = function (e, t, i, r) {
    var s = { display: "block" },
      o = i[r ? "os2" : "p2"],
      a = i[r ? "p2" : "os2"];
    (e._isFlipped = r),
      (s[i.a + "Percent"] = r ? -100 : 0),
      (s[i.a] = r ? "1px" : 0),
      (s["border" + o + kr] = 1),
      (s["border" + a + kr] = 0),
      (s[i.p] = t + "px"),
      I.set(e, s);
  },
  H = [],
  Ws = {},
  ln,
  ia = function () {
    return it() - Rt > 34 && (ln || (ln = requestAnimationFrame(fi)));
  },
  fr = function () {
    (!yt || !yt.isPressed || yt.startX > oe.clientWidth) &&
      (Y.cache++,
      yt ? ln || (ln = requestAnimationFrame(fi)) : fi(),
      Rt || nr("scrollStart"),
      (Rt = it()));
  },
  bs = function () {
    (Dl = X.innerWidth), (Ll = X.innerHeight);
  },
  Vr = function () {
    Y.cache++,
      !Ye &&
        !kl &&
        !ce.fullscreenElement &&
        !ce.webkitFullscreenElement &&
        (!Ol ||
          Dl !== X.innerWidth ||
          Math.abs(X.innerHeight - Ll) > X.innerHeight * 0.25) &&
        Wn.restart(!0);
  },
  rr = {},
  Id = [],
  Fl = function n() {
    return De(W, "scrollEnd", n) || Wi(!0);
  },
  nr = function (e) {
    return (
      (rr[e] &&
        rr[e].map(function (t) {
          return t();
        })) ||
      Id
    );
  },
  Tt = [],
  Gl = function (e) {
    for (var t = 0; t < Tt.length; t += 5)
      (!e || (Tt[t + 4] && Tt[t + 4].query === e)) &&
        ((Tt[t].style.cssText = Tt[t + 1]),
        Tt[t].getBBox && Tt[t].setAttribute("transform", Tt[t + 2] || ""),
        (Tt[t + 3].uncache = 1));
  },
  bo = function (e, t) {
    var i;
    for (et = 0; et < H.length; et++)
      (i = H[et]),
        i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
    t && Gl(t), t || nr("revert");
  },
  Vl = function (e, t) {
    Y.cache++,
      (t || !tt) &&
        Y.forEach(function (i) {
          return nt(i) && i.cacheID++ && (i.rec = 0);
        }),
      bt(e) && (X.history.scrollRestoration = mo = e);
  },
  tt,
  er = 0,
  ra,
  Rd = function () {
    if (ra !== er) {
      var e = (ra = er);
      requestAnimationFrame(function () {
        return e === er && Wi(!0);
      });
    }
  },
  ql = function () {
    oe.appendChild(xr),
      (go = xr.offsetHeight || X.innerHeight),
      oe.removeChild(xr);
  },
  Wi = function (e, t) {
    if (Rt && !e) {
      Ae(W, "scrollEnd", Fl);
      return;
    }
    ql(),
      (tt = W.isRefreshing = !0),
      Y.forEach(function (r) {
        return nt(r) && ++r.cacheID && (r.rec = r());
      });
    var i = nr("refreshInit");
    Ml && W.sort(),
      t || bo(),
      Y.forEach(function (r) {
        nt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      H.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      H.forEach(function (r, s) {
        if (r._subPinOffset && r.pin) {
          var o = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = r.pin[o];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[o] - a), r.refresh();
        }
      }),
      H.forEach(function (r) {
        var s = ci(r.scroller, r._dir);
        (r.vars.end === "max" || (r._endClamp && r.end > s)) &&
          r.setPositions(r.start, Math.max(r.start + 1, s), !0);
      }),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      Y.forEach(function (r) {
        nt(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      Vl(mo, 1),
      Wn.pause(),
      er++,
      (tt = 2),
      fi(2),
      H.forEach(function (r) {
        return nt(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (tt = W.isRefreshing = !1),
      nr("refresh");
  },
  Xs = 0,
  In = 1,
  Jr,
  fi = function (e) {
    if (!tt || e === 2) {
      (W.isUpdating = !0), Jr && Jr.update(0);
      var t = H.length,
        i = it(),
        r = i - ys >= 50,
        s = t && H[0].scroll();
      if (
        ((In = Xs > s ? -1 : 1),
        tt || (Xs = s),
        r &&
          (Rt && !es && i - Rt > 200 && ((Rt = 0), nr("scrollEnd")),
          (On = ys),
          (ys = i)),
        In < 0)
      ) {
        for (et = t; et-- > 0; ) H[et] && H[et].update(0, r);
        In = 1;
      } else for (et = 0; et < t; et++) H[et] && H[et].update(0, r);
      W.isUpdating = !1;
    }
    ln = 0;
  },
  Us = [
    $l,
    Bl,
    vo,
    _o,
    Ot + Zr,
    Ot + Ur,
    Ot + Qr,
    Ot + Kr,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Rn = Us.concat([
    Zi,
    Ji,
    "boxSizing",
    "max" + kr,
    "max" + yo,
    "position",
    Ot,
    Ce,
    Ce + Qr,
    Ce + Ur,
    Ce + Zr,
    Ce + Kr,
  ]),
  zd = function (e, t, i) {
    Sr(i);
    var r = e._gsap;
    if (r.spacerIsNative) Sr(r.spacerState);
    else if (e._gsap.swappedIn) {
      var s = t.parentNode;
      s && (s.insertBefore(e, t), s.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  xs = function (e, t, i, r) {
    if (!e._gsap.swappedIn) {
      for (var s = Us.length, o = t.style, a = e.style, l; s--; )
        (l = Us[s]), (o[l] = i[l]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (a[vo] = a[_o] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Zi] = Ys(e, rt) + Ne),
        (o[Ji] = Ys(e, Oe) + Ne),
        (o[Ce] = a[Ot] = a[Bl] = a[$l] = "0"),
        Sr(r),
        (a[Zi] = a["max" + kr] = i[Zi]),
        (a[Ji] = a["max" + yo] = i[Ji]),
        (a[Ce] = i[Ce]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  $d = /([A-Z])/g,
  Sr = function (e) {
    if (e) {
      var t = e.t.style,
        i = e.length,
        r = 0,
        s,
        o;
      for ((e.t._gsap || I.core.getCache(e.t)).uncache = 1; r < i; r += 2)
        (o = e[r + 1]),
          (s = e[r]),
          o
            ? (t[s] = o)
            : t[s] && t.removeProperty(s.replace($d, "-$1").toLowerCase());
    }
  },
  wn = function (e) {
    for (var t = Rn.length, i = e.style, r = [], s = 0; s < t; s++)
      r.push(Rn[s], i[Rn[s]]);
    return (r.t = e), r;
  },
  Bd = function (e, t, i) {
    for (var r = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
      (a = e[o]), r.push(a, a in t ? t[a] : e[o + 1]);
    return (r.t = e.t), r;
  },
  zn = { left: 0, top: 0 },
  na = function (e, t, i, r, s, o, a, l, u, c, h, f, d, m) {
    nt(e) && (e = e(l)),
      bt(e) &&
        e.substr(0, 3) === "max" &&
        (e = f + (e.charAt(4) === "=" ? Dn("0" + e.substr(3), i) : 0));
    var p = d ? d.time() : 0,
      g,
      _,
      v;
    if ((d && d.seek(0), isNaN(e) || (e = +e), Ln(e)))
      d &&
        (e = I.utils.mapRange(
          d.scrollTrigger.start,
          d.scrollTrigger.end,
          0,
          f,
          e
        )),
        a && An(a, i, r, !0);
    else {
      nt(t) && (t = t(l));
      var b = (e || "0").split(" "),
        T,
        C,
        E,
        x;
      (v = ut(t, l) || oe),
        (T = li(v) || {}),
        (!T || (!T.left && !T.top)) &&
          Lt(v).display === "none" &&
          ((x = v.style.display),
          (v.style.display = "block"),
          (T = li(v)),
          x ? (v.style.display = x) : v.style.removeProperty("display")),
        (C = Dn(b[0], T[r.d])),
        (E = Dn(b[1] || "0", i)),
        (e = T[r.p] - u[r.p] - c + C + s - E),
        a && An(a, E, r, i - E < 20 || (a._isStart && E > 20)),
        (i -= i - E);
    }
    if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), o)) {
      var P = e + i,
        M = o._isStart;
      (g = "scroll" + r.d2),
        An(
          o,
          P,
          r,
          (M && P > 20) ||
            (!M && (h ? Math.max(oe[g], Ht[g]) : o.parentNode[g]) <= P + 1)
        ),
        h &&
          ((u = li(a)),
          h && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ne));
    }
    return (
      d &&
        v &&
        ((g = li(v)),
        d.seek(f),
        (_ = li(v)),
        (d._caScrollDist = g[r.p] - _[r.p]),
        (e = (e / d._caScrollDist) * f)),
      d && d.seek(p),
      d ? e : Math.round(e)
    );
  },
  Nd = /(webkit|moz|length|cssText|inset)/i,
  sa = function (e, t, i, r) {
    if (e.parentNode !== t) {
      var s = e.style,
        o,
        a;
      if (t === oe) {
        (e._stOrig = s.cssText), (a = Lt(e));
        for (o in a)
          !+o &&
            !Nd.test(o) &&
            a[o] &&
            typeof s[o] == "string" &&
            o !== "0" &&
            (s[o] = a[o]);
        (s.top = i), (s.left = r);
      } else s.cssText = e._stOrig;
      (I.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  Hl = function (e, t, i) {
    var r = t,
      s = r;
    return function (o) {
      var a = Math.round(e());
      return (
        a !== r &&
          a !== s &&
          Math.abs(a - r) > 3 &&
          Math.abs(a - s) > 3 &&
          ((o = a), i && i()),
        (s = r),
        (r = o),
        o
      );
    };
  },
  Cn = function (e, t, i) {
    var r = {};
    (r[t.p] = "+=" + i), I.set(e, r);
  },
  oa = function (e, t) {
    var i = Oi(e, t),
      r = "_scroll" + t.p2,
      s = function o(a, l, u, c, h) {
        var f = o.tween,
          d = l.onComplete,
          m = {};
        u = u || i();
        var p = Hl(i, u, function () {
          f.kill(), (o.tween = 0);
        });
        return (
          (h = (c && h) || 0),
          (c = c || a - u),
          f && f.kill(),
          (l[r] = a),
          (l.modifiers = m),
          (m[r] = function () {
            return p(u + c * f.ratio + h * f.ratio * f.ratio);
          }),
          (l.onUpdate = function () {
            Y.cache++, fi();
          }),
          (l.onComplete = function () {
            (o.tween = 0), d && d.call(f);
          }),
          (f = o.tween = I.to(e, l)),
          f
        );
      };
    return (
      (e[r] = i),
      (i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Ae(e, "wheel", i.wheelHandler),
      W.isTouch && Ae(e, "touchmove", i.wheelHandler),
      s
    );
  },
  W = (function () {
    function n(t, i) {
      dr ||
        n.register(I) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        js(this),
        this.init(t, i);
    }
    var e = n.prototype;
    return (
      (e.init = function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Fr)
        ) {
          this.update = this.refresh = this.kill = Qt;
          return;
        }
        i = ea(bt(i) || Ln(i) || i.nodeType ? { trigger: i } : i, xn);
        var s = i,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          u = s.onToggle,
          c = s.onRefresh,
          h = s.scrub,
          f = s.trigger,
          d = s.pin,
          m = s.pinSpacing,
          p = s.invalidateOnRefresh,
          g = s.anticipatePin,
          _ = s.onScrubComplete,
          v = s.onSnapComplete,
          b = s.once,
          T = s.snap,
          C = s.pinReparent,
          E = s.pinSpacer,
          x = s.containerAnimation,
          P = s.fastScrollEnd,
          M = s.preventOverlaps,
          S =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? rt
              : Oe,
          L = !h && h !== 0,
          k = ut(i.scroller || X),
          V = I.core.getCache(k),
          N = ir(k),
          F =
            ("pinType" in i
              ? i.pinType
              : Pi(k, "pinType") || (N && "fixed")) === "fixed",
          q = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          O = L && i.toggleActions.split(" "),
          R = "markers" in i ? i.markers : xn.markers,
          $ = N ? 0 : parseFloat(Lt(k)["border" + S.p2 + kr]) || 0,
          y = this,
          te =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(y);
            },
          he = kd(k, N, S),
          st = Od(k, N),
          ie = 0,
          be = 0,
          xe = 0,
          ae = Oi(k, S),
          Ke,
          qe,
          pi,
          ot,
          Yt,
          J,
          Se,
          at,
          mt,
          w,
          gt,
          ri,
          Di,
          we,
          Ai,
          Ii,
          Or,
          ze,
          ve,
          $t,
          Bt,
          Ri,
          ni,
          Wt,
          lt,
          zi,
          or,
          ar,
          $i,
          mi,
          gi,
          Q,
          Bi,
          Nt,
          Ft,
          Gt,
          Ni,
          lr,
          si;
        if (
          ((y._startClamp = y._endClamp = !1),
          (y._dir = S),
          (g *= 45),
          (y.scroller = k),
          (y.scroll = x ? x.time.bind(x) : ae),
          (ot = ae()),
          (y.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            ((Ml = 1), i.refreshPriority === -9999 && (Jr = y)),
          (V.tweenScroll = V.tweenScroll || {
            top: oa(k, Oe),
            left: oa(k, rt),
          }),
          (y.tweenTo = Ke = V.tweenScroll[S.p]),
          (y.scrubDuration = function (A) {
            (Bi = Ln(A) && A),
              Bi
                ? Q
                  ? Q.duration(A)
                  : (Q = I.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      duration: Bi,
                      paused: !0,
                      onComplete: function () {
                        return _ && _(y);
                      },
                    }))
                : (Q && Q.progress(1).kill(), (Q = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !y.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (y.animation = r.pause()),
            (r.scrollTrigger = y),
            y.scrubDuration(h),
            (mi = 0),
            l || (l = r.vars.id)),
          T &&
            ((!ji(T) || T.push) && (T = { snapTo: T }),
            "scrollBehavior" in oe.style &&
              I.set(N ? [oe, Ht] : k, { scrollBehavior: "auto" }),
            Y.forEach(function (A) {
              return (
                nt(A) &&
                A.target === (N ? ce.scrollingElement || Ht : k) &&
                (A.smooth = !1)
              );
            }),
            (pi = nt(T.snapTo)
              ? T.snapTo
              : T.snapTo === "labels"
              ? Dd(r)
              : T.snapTo === "labelsDirectional"
              ? Ad(r)
              : T.directional !== !1
              ? function (A, K) {
                  return To(T.snapTo)(A, it() - be < 500 ? 0 : K.direction);
                }
              : I.utils.snap(T.snapTo)),
            (Nt = T.duration || { min: 0.1, max: 2 }),
            (Nt = ji(Nt) ? _r(Nt.min, Nt.max) : _r(Nt, Nt)),
            (Ft = I.delayedCall(T.delay || Bi / 2 || 0.1, function () {
              var A = ae(),
                K = it() - be < 500,
                B = Ke.tween;
              if (
                (K || Math.abs(y.getVelocity()) < 10) &&
                !B &&
                !es &&
                ie !== A
              ) {
                var j = (A - J) / we,
                  Le = r && !L ? r.totalProgress() : j,
                  Z = K ? 0 : ((Le - gi) / (it() - On)) * 1e3 || 0,
                  ye = I.utils.clamp(-j, 1 - j, (cr(Z / 2) * Z) / 0.185),
                  Qe = j + (T.inertia === !1 ? 0 : ye),
                  $e = _r(0, 1, pi(Qe, y)),
                  le = Math.round(J + $e * we),
                  re = T,
                  Vt = re.onStart,
                  ue = re.onInterrupt,
                  _t = re.onComplete;
                if (A <= Se && A >= J && le !== A) {
                  if (B && !B._initted && B.data <= cr(le - A)) return;
                  T.inertia === !1 && (ye = $e - j),
                    Ke(
                      le,
                      {
                        duration: Nt(
                          cr(
                            (Math.max(cr(Qe - Le), cr($e - Le)) * 0.185) /
                              Z /
                              0.05 || 0
                          )
                        ),
                        ease: T.ease || "power3",
                        data: cr(le - A),
                        onInterrupt: function () {
                          return Ft.restart(!0) && ue && ue(y);
                        },
                        onComplete: function () {
                          y.update(),
                            (ie = ae()),
                            (mi = gi =
                              r && !L ? r.totalProgress() : y.progress),
                            v && v(y),
                            _t && _t(y);
                        },
                      },
                      A,
                      ye * we,
                      le - A - ye * we
                    ),
                    Vt && Vt(y, Ke.tween);
                }
              } else y.isActive && ie !== A && Ft.restart(!0);
            }).pause())),
          l && (Ws[l] = y),
          (f = y.trigger = ut(f || (d !== !0 && d))),
          (si = f && f._gsap && f._gsap.stRevert),
          si && (si = si(y)),
          (d = d === !0 ? f : ut(d)),
          bt(a) && (a = { targets: f, className: a }),
          d &&
            (m === !1 ||
              m === Ot ||
              (m =
                !m &&
                d.parentNode &&
                d.parentNode.style &&
                Lt(d.parentNode).display === "flex"
                  ? !1
                  : Ce),
            (y.pin = d),
            (qe = I.core.getCache(d)),
            qe.spacer
              ? (Ai = qe.pinState)
              : (E &&
                  ((E = ut(E)),
                  E && !E.nodeType && (E = E.current || E.nativeElement),
                  (qe.spacerIsNative = !!E),
                  E && (qe.spacerState = wn(E))),
                (qe.spacer = ze = E || ce.createElement("div")),
                ze.classList.add("pin-spacer"),
                l && ze.classList.add("pin-spacer-" + l),
                (qe.pinState = Ai = wn(d))),
            i.force3D !== !1 && I.set(d, { force3D: !0 }),
            (y.spacer = ze = qe.spacer),
            ($i = Lt(d)),
            (Wt = $i[m + S.os2]),
            ($t = I.getProperty(d)),
            (Bt = I.quickSetter(d, S.a, Ne)),
            xs(d, ze, $i),
            (Or = wn(d))),
          R)
        ) {
          (ri = ji(R) ? ea(R, ta) : ta),
            (w = Sn("scroller-start", l, k, S, ri, 0)),
            (gt = Sn("scroller-end", l, k, S, ri, 0, w)),
            (ve = w["offset" + S.op.d2]);
          var G = ut(Pi(k, "content") || k);
          (at = this.markerStart = Sn("start", l, G, S, ri, ve, 0, x)),
            (mt = this.markerEnd = Sn("end", l, G, S, ri, ve, 0, x)),
            x && (lr = I.quickSetter([at, mt], S.a, Ne)),
            !F &&
              !(ti.length && Pi(k, "fixedMarkers") === !0) &&
              (Ld(N ? oe : k),
              I.set([w, gt], { force3D: !0 }),
              (zi = I.quickSetter(w, S.a, Ne)),
              (ar = I.quickSetter(gt, S.a, Ne)));
        }
        if (x) {
          var z = x.vars.onUpdate,
            ee = x.vars.onUpdateParams;
          x.eventCallback("onUpdate", function () {
            y.update(0, 0, 1), z && z.apply(x, ee || []);
          });
        }
        if (
          ((y.previous = function () {
            return H[H.indexOf(y) - 1];
          }),
          (y.next = function () {
            return H[H.indexOf(y) + 1];
          }),
          (y.revert = function (A, K) {
            if (!K) return y.kill(!0);
            var B = A !== !1 || !y.enabled,
              j = Ye;
            B !== y.isReverted &&
              (B &&
                ((Gt = Math.max(ae(), y.scroll.rec || 0)),
                (xe = y.progress),
                (Ni = r && r.progress())),
              at &&
                [at, mt, w, gt].forEach(function (Le) {
                  return (Le.style.display = B ? "none" : "block");
                }),
              B && ((Ye = y), y.update(B)),
              d &&
                (!C || !y.isActive) &&
                (B ? zd(d, ze, Ai) : xs(d, ze, Lt(d), lt)),
              B || y.update(B),
              (Ye = j),
              (y.isReverted = B));
          }),
          (y.refresh = function (A, K, B, j) {
            if (!((Ye || !y.enabled) && !K)) {
              if (d && A && Rt) {
                Ae(n, "scrollEnd", Fl);
                return;
              }
              !tt && te && te(y),
                (Ye = y),
                Ke.tween && !B && (Ke.tween.kill(), (Ke.tween = 0)),
                Q && Q.pause(),
                p && r && r.revert({ kill: !1 }).invalidate(),
                y.isReverted || y.revert(!0, !0),
                (y._subPinOffset = !1);
              var Le = he(),
                Z = st(),
                ye = x ? x.duration() : ci(k, S),
                Qe = we <= 0.01,
                $e = 0,
                le = j || 0,
                re = ji(B) ? B.end : i.end,
                Vt = i.endTrigger || f,
                ue = ji(B)
                  ? B.start
                  : i.start || (i.start === 0 || !f ? 0 : d ? "0 0" : "0 100%"),
                _t = (y.pinnedContainer =
                  i.pinnedContainer && ut(i.pinnedContainer, y)),
                Xt = (f && Math.max(0, H.indexOf(y))) || 0,
                vt = Xt,
                Be,
                He,
                Fi,
                fn,
                je,
                Me,
                Ut,
                ts,
                xo,
                Lr,
                Kt,
                Dr,
                dn;
              for (
                R &&
                ji(B) &&
                ((Dr = I.getProperty(w, S.p)), (dn = I.getProperty(gt, S.p)));
                vt--;

              )
                (Me = H[vt]),
                  Me.end || Me.refresh(0, 1) || (Ye = y),
                  (Ut = Me.pin),
                  Ut &&
                    (Ut === f || Ut === d || Ut === _t) &&
                    !Me.isReverted &&
                    (Lr || (Lr = []), Lr.unshift(Me), Me.revert(!0, !0)),
                  Me !== H[vt] && (Xt--, vt--);
              for (
                nt(ue) && (ue = ue(y)),
                  ue = Ko(ue, "start", y),
                  J =
                    na(
                      ue,
                      f,
                      Le,
                      S,
                      ae(),
                      at,
                      w,
                      y,
                      Z,
                      $,
                      F,
                      ye,
                      x,
                      y._startClamp && "_startClamp"
                    ) || (d ? -0.001 : 0),
                  nt(re) && (re = re(y)),
                  bt(re) &&
                    !re.indexOf("+=") &&
                    (~re.indexOf(" ")
                      ? (re = (bt(ue) ? ue.split(" ")[0] : "") + re)
                      : (($e = Dn(re.substr(2), Le)),
                        (re = bt(ue)
                          ? ue
                          : (x
                              ? I.utils.mapRange(
                                  0,
                                  x.duration(),
                                  x.scrollTrigger.start,
                                  x.scrollTrigger.end,
                                  J
                                )
                              : J) + $e),
                        (Vt = f))),
                  re = Ko(re, "end", y),
                  Se =
                    Math.max(
                      J,
                      na(
                        re || (Vt ? "100% 0" : ye),
                        Vt,
                        Le,
                        S,
                        ae() + $e,
                        mt,
                        gt,
                        y,
                        Z,
                        $,
                        F,
                        ye,
                        x,
                        y._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  $e = 0,
                  vt = Xt;
                vt--;

              )
                (Me = H[vt]),
                  (Ut = Me.pin),
                  Ut &&
                    Me.start - Me._pinPush <= J &&
                    !x &&
                    Me.end > 0 &&
                    ((Be =
                      Me.end -
                      (y._startClamp ? Math.max(0, Me.start) : Me.start)),
                    ((Ut === f && Me.start - Me._pinPush < J) || Ut === _t) &&
                      isNaN(ue) &&
                      ($e += Be * (1 - Me.progress)),
                    Ut === d && (le += Be));
              if (
                ((J += $e),
                (Se += $e),
                y._startClamp && (y._startClamp += $e),
                y._endClamp &&
                  !tt &&
                  ((y._endClamp = Se || -0.001), (Se = Math.min(Se, ci(k, S)))),
                (we = Se - J || ((J -= 0.01) && 0.001)),
                Qe && (xe = I.utils.clamp(0, 1, I.utils.normalize(J, Se, Gt))),
                (y._pinPush = le),
                at &&
                  $e &&
                  ((Be = {}),
                  (Be[S.a] = "+=" + $e),
                  _t && (Be[S.p] = "-=" + ae()),
                  I.set([at, mt], Be)),
                d)
              )
                (Be = Lt(d)),
                  (fn = S === Oe),
                  (Fi = ae()),
                  (Ri = parseFloat($t(S.a)) + le),
                  !ye &&
                    Se > 1 &&
                    ((Kt = (N ? ce.scrollingElement || Ht : k).style),
                    (Kt = {
                      style: Kt,
                      value: Kt["overflow" + S.a.toUpperCase()],
                    }),
                    N &&
                      Lt(oe)["overflow" + S.a.toUpperCase()] !== "scroll" &&
                      (Kt.style["overflow" + S.a.toUpperCase()] = "scroll")),
                  xs(d, ze, Be),
                  (Or = wn(d)),
                  (He = li(d, !0)),
                  (ts = F && Oi(k, fn ? rt : Oe)()),
                  m &&
                    ((lt = [m + S.os2, we + le + Ne]),
                    (lt.t = ze),
                    (vt = m === Ce ? Ys(d, S) + we + le : 0),
                    vt && lt.push(S.d, vt + Ne),
                    Sr(lt),
                    _t &&
                      H.forEach(function (Ar) {
                        Ar.pin === _t &&
                          Ar.vars.pinSpacing !== !1 &&
                          (Ar._subPinOffset = !0);
                      }),
                    F && ae(Gt)),
                  F &&
                    ((je = {
                      top: He.top + (fn ? Fi - J : ts) + Ne,
                      left: He.left + (fn ? ts : Fi - J) + Ne,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (je[Zi] = je["max" + kr] = Math.ceil(He.width) + Ne),
                    (je[Ji] = je["max" + yo] = Math.ceil(He.height) + Ne),
                    (je[Ot] =
                      je[Ot + Qr] =
                      je[Ot + Ur] =
                      je[Ot + Zr] =
                      je[Ot + Kr] =
                        "0"),
                    (je[Ce] = Be[Ce]),
                    (je[Ce + Qr] = Be[Ce + Qr]),
                    (je[Ce + Ur] = Be[Ce + Ur]),
                    (je[Ce + Zr] = Be[Ce + Zr]),
                    (je[Ce + Kr] = Be[Ce + Kr]),
                    (Ii = Bd(Ai, je, C)),
                    tt && ae(0)),
                  r
                    ? ((xo = r._initted),
                      _s(1),
                      r.render(r.duration(), !0, !0),
                      (ni = $t(S.a) - Ri + we + le),
                      (or = Math.abs(we - ni) > 1),
                      F && or && Ii.splice(Ii.length - 2, 2),
                      r.render(0, !0, !0),
                      xo || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      _s(0))
                    : (ni = we),
                  Kt &&
                    (Kt.value
                      ? (Kt.style["overflow" + S.a.toUpperCase()] = Kt.value)
                      : Kt.style.removeProperty("overflow-" + S.a));
              else if (f && ae() && !x)
                for (He = f.parentNode; He && He !== oe; )
                  He._pinOffset &&
                    ((J -= He._pinOffset), (Se -= He._pinOffset)),
                    (He = He.parentNode);
              Lr &&
                Lr.forEach(function (Ar) {
                  return Ar.revert(!1, !0);
                }),
                (y.start = J),
                (y.end = Se),
                (ot = Yt = tt ? Gt : ae()),
                !x && !tt && (ot < Gt && ae(Gt), (y.scroll.rec = 0)),
                y.revert(!1, !0),
                (be = it()),
                Ft && ((ie = -1), Ft.restart(!0)),
                (Ye = 0),
                r &&
                  L &&
                  (r._initted || Ni) &&
                  r.progress() !== Ni &&
                  r.progress(Ni || 0, !0).render(r.time(), !0, !0),
                (Qe || xe !== y.progress || x) &&
                  (r &&
                    !L &&
                    r.totalProgress(
                      x && J < -0.001 && !xe ? I.utils.normalize(J, Se, 0) : xe,
                      !0
                    ),
                  (y.progress = Qe || (ot - J) / we === xe ? 0 : xe)),
                d && m && (ze._pinOffset = Math.round(y.progress * ni)),
                Q && Q.invalidate(),
                isNaN(Dr) ||
                  ((Dr -= I.getProperty(w, S.p)),
                  (dn -= I.getProperty(gt, S.p)),
                  Cn(w, S, Dr),
                  Cn(at, S, Dr - (j || 0)),
                  Cn(gt, S, dn),
                  Cn(mt, S, dn - (j || 0))),
                Qe && !tt && y.update(),
                c && !tt && !Di && ((Di = !0), c(y), (Di = !1));
            }
          }),
          (y.getVelocity = function () {
            return ((ae() - Yt) / (it() - On)) * 1e3 || 0;
          }),
          (y.endAnimation = function () {
            zr(y.callbackAnimation),
              r &&
                (Q
                  ? Q.progress(1)
                  : r.paused()
                  ? L || zr(r, y.direction < 0, 1)
                  : zr(r, r.reversed()));
          }),
          (y.labelToScroll = function (A) {
            return (
              (r &&
                r.labels &&
                (J || y.refresh() || J) + (r.labels[A] / r.duration()) * we) ||
              0
            );
          }),
          (y.getTrailing = function (A) {
            var K = H.indexOf(y),
              B = y.direction > 0 ? H.slice(0, K).reverse() : H.slice(K + 1);
            return (
              bt(A)
                ? B.filter(function (j) {
                    return j.vars.preventOverlaps === A;
                  })
                : B
            ).filter(function (j) {
              return y.direction > 0 ? j.end <= J : j.start >= Se;
            });
          }),
          (y.update = function (A, K, B) {
            if (!(x && !B && !A)) {
              var j = tt === !0 ? Gt : y.scroll(),
                Le = A ? 0 : (j - J) / we,
                Z = Le < 0 ? 0 : Le > 1 ? 1 : Le || 0,
                ye = y.progress,
                Qe,
                $e,
                le,
                re,
                Vt,
                ue,
                _t,
                Xt;
              if (
                (K &&
                  ((Yt = ot),
                  (ot = x ? ae() : j),
                  T && ((gi = mi), (mi = r && !L ? r.totalProgress() : Z))),
                g &&
                  !Z &&
                  d &&
                  !Ye &&
                  !vn &&
                  Rt &&
                  J < j + ((j - Yt) / (it() - On)) * g &&
                  (Z = 1e-4),
                Z !== ye && y.enabled)
              ) {
                if (
                  ((Qe = y.isActive = !!Z && Z < 1),
                  ($e = !!ye && ye < 1),
                  (ue = Qe !== $e),
                  (Vt = ue || !!Z != !!ye),
                  (y.direction = Z > ye ? 1 : -1),
                  (y.progress = Z),
                  Vt &&
                    !Ye &&
                    ((le = Z && !ye ? 0 : Z === 1 ? 1 : ye === 1 ? 2 : 3),
                    L &&
                      ((re =
                        (!ue && O[le + 1] !== "none" && O[le + 1]) || O[le]),
                      (Xt =
                        r &&
                        (re === "complete" || re === "reset" || re in r)))),
                  M &&
                    (ue || Xt) &&
                    (Xt || h || !r) &&
                    (nt(M)
                      ? M(y)
                      : y.getTrailing(M).forEach(function (Fi) {
                          return Fi.endAnimation();
                        })),
                  L ||
                    (Q && !Ye && !vn
                      ? (Q._dp._time - Q._start !== Q._time &&
                          Q.render(Q._dp._time - Q._start),
                        Q.resetTo
                          ? Q.resetTo("totalProgress", Z, r._tTime / r._tDur)
                          : ((Q.vars.totalProgress = Z),
                            Q.invalidate().restart()))
                      : r && r.totalProgress(Z, !!(Ye && (be || A)))),
                  d)
                ) {
                  if ((A && m && (ze.style[m + S.os2] = Wt), !F))
                    Bt(Gr(Ri + ni * Z));
                  else if (Vt) {
                    if (
                      ((_t = !A && Z > ye && Se + 1 > j && j + 1 >= ci(k, S)),
                      C)
                    )
                      if (!A && (Qe || _t)) {
                        var vt = li(d, !0),
                          Be = j - J;
                        sa(
                          d,
                          oe,
                          vt.top + (S === Oe ? Be : 0) + Ne,
                          vt.left + (S === Oe ? 0 : Be) + Ne
                        );
                      } else sa(d, ze);
                    Sr(Qe || _t ? Ii : Or),
                      (or && Z < 1 && Qe) || Bt(Ri + (Z === 1 && !_t ? ni : 0));
                  }
                }
                T && !Ke.tween && !Ye && !vn && Ft.restart(!0),
                  a &&
                    (ue || (b && Z && (Z < 1 || !vs))) &&
                    Xn(a.targets).forEach(function (Fi) {
                      return Fi.classList[Qe || b ? "add" : "remove"](
                        a.className
                      );
                    }),
                  o && !L && !A && o(y),
                  Vt && !Ye
                    ? (L &&
                        (Xt &&
                          (re === "complete"
                            ? r.pause().totalProgress(1)
                            : re === "reset"
                            ? r.restart(!0).pause()
                            : re === "restart"
                            ? r.restart(!0)
                            : r[re]()),
                        o && o(y)),
                      (ue || !vs) &&
                        (u && ue && Ts(y, u),
                        q[le] && Ts(y, q[le]),
                        b && (Z === 1 ? y.kill(!1, 1) : (q[le] = 0)),
                        ue || ((le = Z === 1 ? 1 : 3), q[le] && Ts(y, q[le]))),
                      P &&
                        !Qe &&
                        Math.abs(y.getVelocity()) > (Ln(P) ? P : 2500) &&
                        (zr(y.callbackAnimation),
                        Q
                          ? Q.progress(1)
                          : zr(r, re === "reverse" ? 1 : !Z, 1)))
                    : L && o && !Ye && o(y);
              }
              if (ar) {
                var He = x ? (j / x.duration()) * (x._caScrollDist || 0) : j;
                zi(He + (w._isFlipped ? 1 : 0)), ar(He);
              }
              lr && lr((-j / x.duration()) * (x._caScrollDist || 0));
            }
          }),
          (y.enable = function (A, K) {
            y.enabled ||
              ((y.enabled = !0),
              Ae(k, "resize", Vr),
              N || Ae(k, "scroll", fr),
              te && Ae(n, "refreshInit", te),
              A !== !1 && ((y.progress = xe = 0), (ot = Yt = ie = ae())),
              K !== !1 && y.refresh());
          }),
          (y.getTween = function (A) {
            return A && Ke ? Ke.tween : Q;
          }),
          (y.setPositions = function (A, K, B, j) {
            if (x) {
              var Le = x.scrollTrigger,
                Z = x.duration(),
                ye = Le.end - Le.start;
              (A = Le.start + (ye * A) / Z), (K = Le.start + (ye * K) / Z);
            }
            y.refresh(
              !1,
              !1,
              {
                start: Qo(A, B && !!y._startClamp),
                end: Qo(K, B && !!y._endClamp),
              },
              j
            ),
              y.update();
          }),
          (y.adjustPinSpacing = function (A) {
            if (lt && A) {
              var K = lt.indexOf(S.d) + 1;
              (lt[K] = parseFloat(lt[K]) + A + Ne),
                (lt[1] = parseFloat(lt[1]) + A + Ne),
                Sr(lt);
            }
          }),
          (y.disable = function (A, K) {
            if (
              y.enabled &&
              (A !== !1 && y.revert(!0, !0),
              (y.enabled = y.isActive = !1),
              K || (Q && Q.pause()),
              (Gt = 0),
              qe && (qe.uncache = 1),
              te && De(n, "refreshInit", te),
              Ft && (Ft.pause(), Ke.tween && Ke.tween.kill() && (Ke.tween = 0)),
              !N)
            ) {
              for (var B = H.length; B--; )
                if (H[B].scroller === k && H[B] !== y) return;
              De(k, "resize", Vr), N || De(k, "scroll", fr);
            }
          }),
          (y.kill = function (A, K) {
            y.disable(A, K), Q && !K && Q.kill(), l && delete Ws[l];
            var B = H.indexOf(y);
            B >= 0 && H.splice(B, 1),
              B === et && In > 0 && et--,
              (B = 0),
              H.forEach(function (j) {
                return j.scroller === y.scroller && (B = 1);
              }),
              B || tt || (y.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                A && r.revert({ kill: !1 }),
                K || r.kill()),
              at &&
                [at, mt, w, gt].forEach(function (j) {
                  return j.parentNode && j.parentNode.removeChild(j);
                }),
              Jr === y && (Jr = 0),
              d &&
                (qe && (qe.uncache = 1),
                (B = 0),
                H.forEach(function (j) {
                  return j.pin === d && B++;
                }),
                B || (qe.spacer = 0)),
              i.onKill && i.onKill(y);
          }),
          H.push(y),
          y.enable(!1, !1),
          si && si(y),
          r && r.add && !we)
        ) {
          var pe = y.update;
          (y.update = function () {
            (y.update = pe), J || Se || y.refresh();
          }),
            I.delayedCall(0.01, y.update),
            (we = 0.01),
            (J = Se = 0);
        } else y.refresh();
        d && Rd();
      }),
      (n.register = function (i) {
        return (
          dr ||
            ((I = i || Il()), Al() && window.document && n.enable(), (dr = Fr)),
          dr
        );
      }),
      (n.defaults = function (i) {
        if (i) for (var r in i) xn[r] = i[r];
        return xn;
      }),
      (n.disable = function (i, r) {
        (Fr = 0),
          H.forEach(function (o) {
            return o[r ? "kill" : "disable"](i);
          }),
          De(X, "wheel", fr),
          De(ce, "scroll", fr),
          clearInterval(_n),
          De(ce, "touchcancel", Qt),
          De(oe, "touchstart", Qt),
          Tn(De, ce, "pointerdown,touchstart,mousedown", Zo),
          Tn(De, ce, "pointerup,touchend,mouseup", Jo),
          Wn.kill(),
          yn(De);
        for (var s = 0; s < Y.length; s += 3)
          bn(De, Y[s], Y[s + 1]), bn(De, Y[s], Y[s + 2]);
      }),
      (n.enable = function () {
        if (
          ((X = window),
          (ce = document),
          (Ht = ce.documentElement),
          (oe = ce.body),
          I &&
            ((Xn = I.utils.toArray),
            (_r = I.utils.clamp),
            (js = I.core.context || Qt),
            (_s = I.core.suppressOverwrites || Qt),
            (mo = X.history.scrollRestoration || "auto"),
            (Xs = X.pageYOffset),
            I.core.globals("ScrollTrigger", n),
            oe))
        ) {
          (Fr = 1),
            (xr = document.createElement("div")),
            (xr.style.height = "100vh"),
            (xr.style.position = "absolute"),
            ql(),
            Md(),
            Pe.register(I),
            (n.isTouch = Pe.isTouch),
            (_i =
              Pe.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            Ae(X, "wheel", fr),
            (Pl = [X, ce, Ht, oe]),
            I.matchMedia
              ? ((n.matchMedia = function (l) {
                  var u = I.matchMedia(),
                    c;
                  for (c in l) u.add(c, l[c]);
                  return u;
                }),
                I.addEventListener("matchMediaInit", function () {
                  return bo();
                }),
                I.addEventListener("matchMediaRevert", function () {
                  return Gl();
                }),
                I.addEventListener("matchMedia", function () {
                  Wi(0, 1), nr("matchMedia");
                }),
                I.matchMedia("(orientation: portrait)", function () {
                  return bs(), bs;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            bs(),
            Ae(ce, "scroll", fr);
          var i = oe.style,
            r = i.borderTopStyle,
            s = I.core.Animation.prototype,
            o,
            a;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              i.borderTopStyle = "solid",
              o = li(oe),
              Oe.m = Math.round(o.top + Oe.sc()) || 0,
              rt.m = Math.round(o.left + rt.sc()) || 0,
              r ? (i.borderTopStyle = r) : i.removeProperty("border-top-style"),
              _n = setInterval(ia, 250),
              I.delayedCall(0.5, function () {
                return (vn = 0);
              }),
              Ae(ce, "touchcancel", Qt),
              Ae(oe, "touchstart", Qt),
              Tn(Ae, ce, "pointerdown,touchstart,mousedown", Zo),
              Tn(Ae, ce, "pointerup,touchend,mouseup", Jo),
              Hs = I.utils.checkPrefix("transform"),
              Rn.push(Hs),
              dr = it(),
              Wn = I.delayedCall(0.2, Wi).pause(),
              hr = [
                ce,
                "visibilitychange",
                function () {
                  var l = X.innerWidth,
                    u = X.innerHeight;
                  ce.hidden
                    ? ((Xo = l), (Uo = u))
                    : (Xo !== l || Uo !== u) && Vr();
                },
                ce,
                "DOMContentLoaded",
                Wi,
                X,
                "load",
                Wi,
                X,
                "resize",
                Vr,
              ],
              yn(Ae),
              H.forEach(function (l) {
                return l.enable(0, 1);
              }),
              a = 0;
            a < Y.length;
            a += 3
          )
            bn(De, Y[a], Y[a + 1]), bn(De, Y[a], Y[a + 2]);
        }
      }),
      (n.config = function (i) {
        "limitCallbacks" in i && (vs = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(_n)) || ((_n = r) && setInterval(ia, r)),
          "ignoreMobileResize" in i &&
            (Ol = n.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (yn(De) || yn(Ae, i.autoRefreshEvents || "none"),
            (kl = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (n.scrollerProxy = function (i, r) {
        var s = ut(i),
          o = Y.indexOf(s),
          a = ir(s);
        ~o && Y.splice(o, a ? 6 : 2),
          r && (a ? ti.unshift(X, r, oe, r, Ht, r) : ti.unshift(s, r));
      }),
      (n.clearMatchMedia = function (i) {
        H.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }),
      (n.isInViewport = function (i, r, s) {
        var o = (bt(i) ? ut(i) : i).getBoundingClientRect(),
          a = o[s ? Zi : Ji] * r || 0;
        return s
          ? o.right - a > 0 && o.left + a < X.innerWidth
          : o.bottom - a > 0 && o.top + a < X.innerHeight;
      }),
      (n.positionInViewport = function (i, r, s) {
        bt(i) && (i = ut(i));
        var o = i.getBoundingClientRect(),
          a = o[s ? Zi : Ji],
          l =
            r == null
              ? a / 2
              : r in Un
              ? Un[r] * a
              : ~r.indexOf("%")
              ? (parseFloat(r) * a) / 100
              : parseFloat(r) || 0;
        return s ? (o.left + l) / X.innerWidth : (o.top + l) / X.innerHeight;
      }),
      (n.killAll = function (i) {
        if (
          (H.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill();
          }),
          i !== !0)
        ) {
          var r = rr.killAll || [];
          (rr = {}),
            r.forEach(function (s) {
              return s();
            });
        }
      }),
      n
    );
  })();
W.version = "3.12.2";
W.saveStyles = function (n) {
  return n
    ? Xn(n).forEach(function (e) {
        if (e && e.style) {
          var t = Tt.indexOf(e);
          t >= 0 && Tt.splice(t, 5),
            Tt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              I.core.getCache(e),
              js()
            );
        }
      })
    : Tt;
};
W.revert = function (n, e) {
  return bo(!n, e);
};
W.create = function (n, e) {
  return new W(n, e);
};
W.refresh = function (n) {
  return n ? Vr() : (dr || W.register()) && Wi(!0);
};
W.update = function (n) {
  return ++Y.cache && fi(n === !0 ? 2 : 0);
};
W.clearScrollMemory = Vl;
W.maxScroll = function (n, e) {
  return ci(n, e ? rt : Oe);
};
W.getScrollFunc = function (n, e) {
  return Oi(ut(n), e ? rt : Oe);
};
W.getById = function (n) {
  return Ws[n];
};
W.getAll = function () {
  return H.filter(function (n) {
    return n.vars.id !== "ScrollSmoother";
  });
};
W.isScrolling = function () {
  return !!Rt;
};
W.snapDirectional = To;
W.addEventListener = function (n, e) {
  var t = rr[n] || (rr[n] = []);
  ~t.indexOf(e) || t.push(e);
};
W.removeEventListener = function (n, e) {
  var t = rr[n],
    i = t && t.indexOf(e);
  i >= 0 && t.splice(i, 1);
};
W.batch = function (n, e) {
  var t = [],
    i = {},
    r = e.interval || 0.016,
    s = e.batchMax || 1e9,
    o = function (u, c) {
      var h = [],
        f = [],
        d = I.delayedCall(r, function () {
          c(h, f), (h = []), (f = []);
        }).pause();
      return function (m) {
        h.length || d.restart(!0),
          h.push(m.trigger),
          f.push(m),
          s <= h.length && d.progress(1);
      };
    },
    a;
  for (a in e)
    i[a] =
      a.substr(0, 2) === "on" && nt(e[a]) && a !== "onRefreshInit"
        ? o(a, e[a])
        : e[a];
  return (
    nt(s) &&
      ((s = s()),
      Ae(W, "refresh", function () {
        return (s = e.batchMax());
      })),
    Xn(n).forEach(function (l) {
      var u = {};
      for (a in i) u[a] = i[a];
      (u.trigger = l), t.push(W.create(u));
    }),
    t
  );
};
var aa = function (e, t, i, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
    );
  },
  Ss = function n(e, t) {
    t === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          t === !0
            ? "auto"
            : t
            ? "pan-" + t + (Pe.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Ht && n(oe, t);
  },
  En = { auto: 1, scroll: 1 },
  Fd = function (e) {
    var t = e.event,
      i = e.target,
      r = e.axis,
      s = (t.changedTouches ? t.changedTouches[0] : t).target,
      o = s._gsap || I.core.getCache(s),
      a = it(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== oe &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(En[(l = Lt(s)).overflowY] || En[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll =
        s &&
        s !== i &&
        !ir(s) &&
        (En[(l = Lt(s)).overflowY] || En[l.overflowX])),
        (o._isScrollT = a);
    }
    (o._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  jl = function (e, t, i, r) {
    return Pe.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r = r && Fd),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return i && Ae(ce, Pe.eventTypes[0], ua, !1, !0);
      },
      onDisable: function () {
        return De(ce, Pe.eventTypes[0], ua, !0);
      },
    });
  },
  Gd = /(input|label|select|textarea)/i,
  la,
  ua = function (e) {
    var t = Gd.test(e.target.tagName);
    (t || la) && ((e._gsapAllow = !0), (la = t));
  },
  Vd = function (e) {
    ji(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var t = e,
      i = t.normalizeScrollX,
      r = t.momentum,
      s = t.allowNestedScroll,
      o = t.onRelease,
      a,
      l,
      u = ut(e.target) || Ht,
      c = I.core.globals().ScrollSmoother,
      h = c && c.get(),
      f =
        _i &&
        ((e.content && ut(e.content)) ||
          (h && e.content !== !1 && !h.smooth() && h.content())),
      d = Oi(u, Oe),
      m = Oi(u, rt),
      p = 1,
      g =
        (Pe.isTouch && X.visualViewport
          ? X.visualViewport.scale * X.visualViewport.width
          : X.outerWidth) / X.innerWidth,
      _ = 0,
      v = nt(r)
        ? function () {
            return r(a);
          }
        : function () {
            return r || 2.8;
          },
      b,
      T,
      C = jl(u, e.type, !0, s),
      E = function () {
        return (T = !1);
      },
      x = Qt,
      P = Qt,
      M = function () {
        (l = ci(u, Oe)),
          (P = _r(_i ? 1 : 0, l)),
          i && (x = _r(0, ci(u, rt))),
          (b = er);
      },
      S = function () {
        (f._gsap.y = Gr(parseFloat(f._gsap.y) + d.offset) + "px"),
          (f.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(f._gsap.y) +
            ", 0, 1)"),
          (d.offset = d.cacheID = 0);
      },
      L = function () {
        if (T) {
          requestAnimationFrame(E);
          var R = Gr(a.deltaY / 2),
            $ = P(d.v - R);
          if (f && $ !== d.v + d.offset) {
            d.offset = $ - d.v;
            var y = Gr((parseFloat(f && f._gsap.y) || 0) - d.offset);
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              y +
              ", 0, 1)"),
              (f._gsap.y = y + "px"),
              (d.cacheID = Y.cache),
              fi();
          }
          return !0;
        }
        d.offset && S(), (T = !0);
      },
      k,
      V,
      N,
      F,
      q = function () {
        M(),
          k.isActive() &&
            k.vars.scrollY > l &&
            (d() > l ? k.progress(1) && d(l) : k.resetTo("scrollY", l));
      };
    return (
      f && I.set(f, { y: "+=0" }),
      (e.ignoreCheck = function (O) {
        return (
          (_i && O.type === "touchmove" && L()) ||
          (p > 1.05 && O.type !== "touchstart") ||
          a.isGesturing ||
          (O.touches && O.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        T = !1;
        var O = p;
        (p = Gr(((X.visualViewport && X.visualViewport.scale) || 1) / g)),
          k.pause(),
          O !== p && Ss(u, p > 1.01 ? !0 : i ? !1 : "x"),
          (V = m()),
          (N = d()),
          M(),
          (b = er);
      }),
      (e.onRelease = e.onGestureStart =
        function (O, R) {
          if ((d.offset && S(), !R)) F.restart(!0);
          else {
            Y.cache++;
            var $ = v(),
              y,
              te;
            i &&
              ((y = m()),
              (te = y + ($ * 0.05 * -O.velocityX) / 0.227),
              ($ *= aa(m, y, te, ci(u, rt))),
              (k.vars.scrollX = x(te))),
              (y = d()),
              (te = y + ($ * 0.05 * -O.velocityY) / 0.227),
              ($ *= aa(d, y, te, ci(u, Oe))),
              (k.vars.scrollY = P(te)),
              k.invalidate().duration($).play(0.01),
              ((_i && k.vars.scrollY >= l) || y >= l - 1) &&
                I.to({}, { onUpdate: q, duration: $ });
          }
          o && o(O);
        }),
      (e.onWheel = function () {
        k._ts && k.pause(), it() - _ > 1e3 && ((b = 0), (_ = it()));
      }),
      (e.onChange = function (O, R, $, y, te) {
        if (
          (er !== b && M(),
          R && i && m(x(y[2] === R ? V + (O.startX - O.x) : m() + R - y[1])),
          $)
        ) {
          d.offset && S();
          var he = te[2] === $,
            st = he ? N + O.startY - O.y : d() + $ - te[1],
            ie = P(st);
          he && st !== ie && (N += ie - st), d(ie);
        }
        ($ || R) && fi();
      }),
      (e.onEnable = function () {
        Ss(u, i ? !1 : "x"),
          W.addEventListener("refresh", q),
          Ae(X, "resize", q),
          d.smooth &&
            ((d.target.style.scrollBehavior = "auto"),
            (d.smooth = m.smooth = !1)),
          C.enable();
      }),
      (e.onDisable = function () {
        Ss(u, !0),
          De(X, "resize", q),
          W.removeEventListener("refresh", q),
          C.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Pe(e)),
      (a.iOS = _i),
      _i && !d() && d(1),
      _i && I.ticker.add(Qt),
      (F = a._dc),
      (k = I.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Hl(d, d(), function () {
            return k.pause();
          }),
        },
        onUpdate: fi,
        onComplete: F.vars.onComplete,
      })),
      a
    );
  };
W.sort = function (n) {
  return H.sort(
    n ||
      function (e, t) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (t.start + (t.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
W.observe = function (n) {
  return new Pe(n);
};
W.normalizeScroll = function (n) {
  if (typeof n > "u") return yt;
  if (n === !0 && yt) return yt.enable();
  if (n === !1) return yt && yt.kill();
  var e = n instanceof Pe ? n : Vd(n);
  return yt && yt.target === e.target && yt.kill(), ir(e.target) && (yt = e), e;
};
W.core = {
  _getVelocityProp: qs,
  _inputObserver: jl,
  _scrollers: Y,
  _proxies: ti,
  bridge: {
    ss: function () {
      Rt || nr("scrollStart"), (Rt = it());
    },
    ref: function () {
      return Ye;
    },
  },
};
Il() && I.registerPlugin(W);
Jn.registerPlugin(W);
document.addEventListener("DOMContentLoaded", async function (n) {
  const e = document.querySelector(".js-header-mobile-button"),
    t = document.querySelector(".js-header-mobile-menu");
  let i;
  const r = document.querySelector(".js-root"),
    s = () => {
      t.classList.toggle("active"), r.classList.toggle("active");
    };
  t &&
    ((i = t.querySelectorAll(".js-header-link")),
    i.forEach((a) => {
      a.addEventListener("click", function () {
        s();
      });
    })),
    e &&
      e.addEventListener("click", function () {
        s();
      }),
    window.innerWidth > 1023 &&
      Jn.timeline({
        scrollTrigger: {
          trigger: ".js-start-scroll-animation",
          start: "top top",
          end: "+=500",
          scrub: 1,
          pin: !0,
        },
      }).to(".js-lokomotiv", { yPercent: -350, duration: 1 }),
    new Cd({ element: document.querySelectorAll(".js-marquee") });
  const o = () => {
    var _;
    const a = document.querySelectorAll(".js-play-btn"),
      l = document.querySelectorAll(".js-copy-wrapper"),
      u = document.querySelector(".js-chrome-alert"),
      c = u.querySelector(".js-close-alert");
    eu.init(), ko.init(), Xl.init(), Ql.init();
    const h = is.getGamesList("top"),
      f = is.getGamesList("new");
    Promise.all([h, f]).then(() => {
      is.buildGamesList(),
        window.innerWidth < 768 && ko.initGameMobileSliders();
    }),
      l.forEach((v) => {
        m(v);
      }),
      (() => {
        const v = navigator.userAgent;
        let b = "";
        return (
          v.indexOf("OPR/") !== -1 || v.indexOf("Opera") !== -1
            ? (b = "Opera")
            : v.indexOf("MSIE") !== -1
            ? (b = "Microsoft Internet Explorer")
            : v.indexOf("Chrome") !== -1
            ? (b = "Chrome")
            : v.indexOf("Safari") !== -1
            ? (b = "Safari")
            : v.indexOf("Firefox") !== -1 && (b = "Firefox"),
          b
        );
      })() !== "Chrome" &&
        window.innerWidth > 767 &&
        (u.style.display = "block"),
      c.addEventListener("click", () => {
        u.style.display = "none";
      });
    function m(v) {
      const b = v.querySelector(".js-copy-text");
      v.addEventListener("click", function () {
        const T = b.textContent,
          C = document.createElement("textarea");
        (C.style.position = "fixed"),
          (C.style.opacity = "0"),
          (C.value = T),
          document.body.appendChild(C),
          C.select(),
          document.execCommand("copy"),
          document.body.removeChild(C),
          this.classList.add("copied"),
          setTimeout(() => {
            this.classList.remove("copied");
          }, 2e3);
      });
    }
    const p = `${(_ = ws.getConfig()) == null ? void 0 : _.TV_BASE_URL}${
      window.location.search
    }`;
    a.forEach((v) => {
      v.setAttribute("href", p != null ? p : ""),
        v.addEventListener("click", (b) => {
          window.innerWidth < 768 && (b.preventDefault(), cf.show());
        });
    });
    const g = document.querySelectorAll(".js-subscribe-form-wrapper");
    Array.from(g).forEach((v) => new Ul(v));
  };
  await ws.loadRuntimeConfig(), await o();
});
