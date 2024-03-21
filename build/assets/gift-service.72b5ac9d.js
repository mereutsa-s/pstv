var a = Object.defineProperty;
var c = (r, e, t) =>
  e in r
    ? a(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (r[e] = t);
var i = (r, e, t) => (c(r, typeof e != "symbol" ? e + "" : e, t), t);
class h {
  constructor() {
    i(this, "runtimeConfig", null);
  }
  async loadRuntimeConfig() {
    try {
      let e = await fetch("runtime-config.json", {
        baseURL: "/",
        params: { t: new Date().getTime() },
      });
      if (((e = await e.json()), typeof e != "object" || !e))
        return (this.runtimeConfig = null), Promise.resolve(!0);
      this.runtimeConfig = e;
    } catch (e) {
      console.log(e);
    }
    return Promise.resolve(!0);
  }
  getConfig() {
    return this.runtimeConfig ? this.getRuntimeConfig() : this.getConfigByEnv();
  }
  getRuntimeConfig() {
    return this.runtimeConfig;
  }
  getConfigByEnv() {
    return {
      ADMIN_BASE_URL: "https://admin.partystation.tv/",
      MOBILE_BASE_URL: "https://mobile.partystation.tv/",
      TV_BASE_URL: "https://pstv.ru/tv/",
      GAME_SERVER_URL: "wss://game-server.partystation.tv/",
    };
  }
}
const n = new h();
class l {
  constructor() {
    i(this, "idReachGoalQuiz", 3375177);
    i(this, "idYaMetric", 90519700);
    i(this, "textClickButton", "reachGoal");
  }
  beforeSendingMailInQuiz() {
    const e = "emailleft";
    try {
      window.ym(this.idYaMetric, this.textClickButton, e);
    } catch (t) {
      console.log(t);
    }
    this.goal(this.idReachGoalQuiz, e);
  }
  goal(e, t) {
    const s = { type: this.textClickButton, id: e, goal: t };
    try {
      window._tmr.push(s);
    } catch (o) {
      console.log(o);
    }
  }
}
const f = class {
  constructor(e) {
    i(this, "HAS_ERROR", "has-error");
    i(this, "SUBSCRIBE_SUCCESS", "has-success");
    i(
      this,
      "SUCCESS_BTN_TEXT",
      "\u0412\u044B \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044C!"
    );
    i(
      this,
      "DEFAULT_BTN_TEXT",
      "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"
    );
    var t, s;
    (this.subscribeFormWrapper = e),
      (this.subscribeForm =
        this.subscribeFormWrapper.querySelector(".js-subscribe-form")),
      (this.subscribeBtn = this.subscribeFormWrapper.querySelector(
        ".js-subscription-btn"
      )),
      (this.emailField = this.subscribeFormWrapper.querySelector(".js-email")),
      (this.errorText =
        this.subscribeFormWrapper.querySelector(".js-error-text")),
      (this.subscribeUrl = `${
        (s = (t = n.getConfig()) == null ? void 0 : t.ADMIN_BASE_URL) != null
          ? s
          : ""
      }api/subscriber/create`),
      (this.handleSubscribeSuccessTimeoutId = null),
      this.init();
  }
  showError(e) {
    typeof e.message.email[0] < "u" &&
      (this.errorText.innerHTML = e.message.email[0]),
      this.subscribeFormWrapper.classList.add(this.HAS_ERROR);
  }
  clearError() {
    this.subscribeFormWrapper.classList.remove(this.HAS_ERROR);
  }
  handleSubscribeSuccess() {
    this.subscribeFormWrapper.classList.add(this.SUBSCRIBE_SUCCESS),
      (this.subscribeBtn.innerHTML = this.SUCCESS_BTN_TEXT);
    const e = document.querySelector(".js-quiz-result-page");
    if (
      (e && (e.classList.add("success"), new l().beforeSendingMailInQuiz()),
      this.subscribeForm.dataset.giftId)
    ) {
      const t = new Event("gift-success");
      document.dispatchEvent(t);
    }
    this.handleSubscribeSuccessTimeoutId &&
      clearTimeout(this.handleSubscribeSuccessTimeoutId),
      (this.handleSubscribeSuccessTimeoutId = setTimeout(() => {
        this.subscribeFormWrapper.classList.remove(this.SUBSCRIBE_SUCCESS);
      }, 5e3));
  }
  bindEvents() {
    this.emailField.addEventListener("focus", () => {
      this.clearError();
    }),
      this.subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault(),
          this.clearError(),
          this.subscribeFormWrapper.classList.remove(this.SUBSCRIBE_SUCCESS);
        try {
          const t = { email: this.emailField.value, language: "ru" };
          this.subscribeForm.dataset.giftId &&
            (t.giftOfferId = this.subscribeForm.dataset.giftId),
            this.subscribeForm.dataset.source &&
              (t.source = this.subscribeForm.dataset.source),
            fetch(this.subscribeUrl, {
              method: "POST",
              body: JSON.stringify(t),
              headers: { "Content-Type": "application/json" },
            })
              .then((s) => s.json())
              .then((s) => {
                s.error
                  ? this.showError(s.error)
                  : this.handleSubscribeSuccess();
              });
        } catch (t) {
          console.error("Error:", t), this.showError(t);
        }
      });
  }
  init() {
    this.bindEvents();
  }
};
class u {
  constructor() {
    i(this, "holder");
    i(this, "closeBtn");
    i(this, "expandBtn");
    i(this, "EXPAND_CLASS", "opened");
    i(this, "SUCCESS_CLASS", "has-success");
    i(
      this,
      "SUCCESS_TITLE",
      "\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044C!"
    );
    i(this, "giftIsAvailable");
    i(this, "giftData");
    i(this, "advantages");
    i(this, "formHolder");
    i(this, "title");
    (this.holder = document.querySelector(".js-gift-offer")),
      (this.closeBtn = this.holder.querySelector(".js-close-btn")),
      (this.expandBtn = this.holder.querySelector(".js-expand-btn")),
      (this.advantages = this.holder.querySelector(".js-advantages")),
      (this.giftIsAvailable = !1),
      (this.giftData = null),
      (this.formHolder = this.holder.querySelector(".js-subscribe-form")),
      (this.title = this.holder.querySelector(".js-title"));
  }
  setCookie(e, t, s) {
    try {
      document.cookie = `${e}=${t}; expires="${s.toUTCString()}"; path=/`;
    } catch {}
  }
  getCookie(e) {
    let s = ("; " + document.cookie).split("; " + e + "=");
    if (s.length === 2) return s.pop().split(";").shift();
  }
  hideHolder() {
    const e = new Date(new Date().getTime() + 864e5);
    this.setCookie("gift-offer-id", this.giftData.id, e),
      (this.holder.style.display = "none");
  }
  expandHolder() {
    this.holder.classList.add(this.EXPAND_CLASS);
  }
  fillGift() {
    this.holder.style.display = "block";
    const e = this.advantages.getElementsByTagName("li");
    Array.from(e).forEach((t, s) => {
      const o = t.querySelector(".js-text");
      o.innerHTML = s ? this.giftData.offer2 : this.giftData.offer1;
    }),
      (this.formHolder.dataset.giftId = this.giftData.id);
  }
  bindEvents() {
    this.closeBtn.addEventListener("click", this.hideHolder.bind(this)),
      this.expandBtn.addEventListener("click", this.expandHolder.bind(this)),
      document.addEventListener("gift-success", () => {
        this.holder.classList.add(this.SUCCESS_CLASS),
          (this.title.innerHTML = this.SUCCESS_TITLE),
          setTimeout(() => this.hideHolder(), 5e3);
      });
  }
  fetchGift() {
    var e, t;
    try {
      fetch(
        `${
          (t = (e = n.getConfig()) == null ? void 0 : e.ADMIN_BASE_URL) != null
            ? t
            : ""
        }api/app/gift-offer/active`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      )
        .then((s) => s.json())
        .then((s) => {
          (this.giftData = s.response), this.giftData && this.fillGift();
        });
    } catch (s) {
      console.error("Error:", s);
    }
  }
  init() {
    this.getCookie("gift-offer-id") || (this.bindEvents(), this.fetchGift());
  }
}
const b = new u();
export { f as S, n as c, b as g };
