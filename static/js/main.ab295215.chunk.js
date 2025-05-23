(this["webpackJsonppublic-console2"] =
    this["webpackJsonppublic-console2"] || []).push([
    [0],
    {
      112: function (e, a, t) {
        e.exports = t(184);
      },
      117: function (e, a, t) {},
      119: function (e, a, t) {},
      176: function (e, a) {},
      183: function (e, a, t) {},
      184: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = t(0),
          r = t.n(n),
          c = t(11),
          l = t.n(c),
          o = (t(117), t(59)),
          s = t(13),
          i = t.n(s),
          m = t(101),
          u = t(23),
          d = t(7),
          p = (t(119), t(100)),
          E = t(232),
          f = t(255),
          b = t(234),
          v = t(57),
          g = t(58),
          h = t(235),
          N = t(238),
          x = t(237),
          w = t(103),
          y = t(185),
          S = t(239),
          O = t(253),
          j = t(251),
          k = t(256),
          C = t(257),
          R = t(259),
          B = t(252),
          L = t(254),
          T = t(258),
          P = t(245),
          z = t(242),
          A = t(243),
          G = t(244),
          U = t(247),
          I = t(248),
          J = t(250),
          W = t(246),
          _ = t(249),
          D = t(98),
          H = t.n(D),
          F = (t(127), t(128), t(99)),
          $ = t.n(F),
          K = Object(p.a)({
            palette: {
              primary: { main: "#ffffff" },
              secondary: { main: "#38B48B" },
              contrastThreshold: 3,
              tonalOffset: 0.2,
            },
            typography: { button: { textTransform: "none" } },
          }),
          V = Object(E.a)(function (e) {
            return Object(f.a)({
              root: { flexGrow: 1 },
              menuButton: { marginRight: e.spacing(2) },
              title: { flexGrow: 1 },
              paper: {
                padding: e.spacing(2),
                textAlign: "center",
                color: e.palette.text.secondary,
                background: "#fdfdfd",
              },
              radioButtons: {
                maxHeight: 300,
                minHeight: 300,
                maxWidth: "100%",
                textAlign: "center",
                overflow: "auto",
              },
              info: {
                padding: e.spacing(2),
                textAlign: "center",
                color: e.palette.text.secondary,
                background: "#f6f6f6",
              },
              header: { color: e.palette.text.primary, background: "#fcfcfc" },
              footer: { textAlign: "left" },
              footerLink: { color: "#38B48B", marginRight: "1rem" },
              radioGroup: { textAlign: "left" },
              textField: { width: "60%" },
              buttonProgress: {
                color: v.a[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: -12,
                marginLeft: -12,
              },
              formControl: {
                marginBottom: e.spacing(3),
                margin: e.spacing(1),
                minWidth: 120,
              },
            });
          }),
          Y = function (e) {
            return new Promise(function (a) {
              return setTimeout(a, e);
            });
          },
          q = {
            name: "",
            type: "",
            location: "",
            owner: "",
            version: "",
            url: "",
          },
          M = function () {
            const [wifiLabelInput, setWifiLabelInput] = r.a.useState(""); // 入力欄
            const [confirmedLabel, setConfirmedLabel] = r.a.useState(""); // 決定後に送る用
            const [activeLabel, setActiveLabel] = r.a.useState(""); // 現在ループで使っているラベル
            const wifiIntervalRef = r.a.useRef(null); // ← useRefで永続保持
            var e = r.a.useState("https://rowma.moriokalab.com"),
              a = Object(d.a)(e, 2),
              t = a[0],
              n = a[1],
              c = r.a.useState(null),
              l = Object(d.a)(c, 2),
              s = l[0],
              p = l[1],
              E = r.a.useState(void 0),
              f = Object(d.a)(E, 2),
              v = f[0],
              D = f[1],
              F = r.a.useState(null),
              M = Object(d.a)(F, 2),
              Q = M[0],
              X = M[1],
              Z = r.a.useState([]),
              ee = Object(d.a)(Z, 2),
              ae = ee[0],
              te = ee[1],
              ne = r.a.useState(""),
              re = Object(d.a)(ne, 2),
              ce = re[0],
              le = re[1],
              oe = r.a.useState([]),
              se = Object(d.a)(oe, 2),
              ie = se[0],
              me = se[1],
              ue = r.a.useState([]),
              de = Object(d.a)(ue, 2),
              pe = de[0],
              Ee = de[1],
              fe = r.a.useState([]),
              be = Object(d.a)(fe, 2),
              ve = be[0],
              ge = be[1],
              he = r.a.useState(""),
              Ne = Object(d.a)(he, 2),
              xe = Ne[0],
              we = Ne[1],
              ye = r.a.useState(""),
              Se = Object(d.a)(ye, 2),
              Oe = Se[0],
              je = Se[1],
              ke = r.a.useState(""),
              Ce = Object(d.a)(ke, 2),
              Re = Ce[0],
              Be = Ce[1],
              Le = r.a.useState(""),
              Te = Object(d.a)(Le, 2),
              Pe = Te[0],
              ze = Te[1],
              Ae = r.a.useState(""),
              Ge = Object(d.a)(Ae, 2),
              Ue = Ge[0],
              Ie = Ge[1],
              Je = r.a.useState(""),
              We = Object(d.a)(Je, 2),
              _e = We[0],
              De = We[1],
              He = r.a.useState(""),
              Fe = Object(d.a)(He, 2),
              $e = Fe[0],
              Ke = Fe[1],
              Ve = r.a.useState(""),
              Ye = Object(d.a)(Ve, 2),
              qe = Ye[0],
              Me = Ye[1],
              Qe = r.a.useState({}),
              Xe = Object(d.a)(Qe, 2),
              Ze = (Xe[0], Xe[1]),
              ea = r.a.useState(!1),
              aa = Object(d.a)(ea, 2),
              ta = aa[0],
              na = aa[1],
              ra = r.a.useState(!1),
              ca = Object(d.a)(ra, 2),
              la = ca[0],
              oa = ca[1],
              sa = r.a.useState(!1),
              ia = Object(d.a)(sa, 2),
              ma = ia[0],
              ua = ia[1],
              da = r.a.useState(!1),
              pa = Object(d.a)(da, 2),
              Ea = pa[0],
              fa = pa[1],
              ba = r.a.useState(!1),
              va = Object(d.a)(ba, 2),
              ga = va[0],
              ha = va[1],
              Na = r.a.useState(!1),
              xa = Object(d.a)(Na, 2),
              wa = xa[0],
              ya = xa[1],
              Sa = r.a.useState(!1),
              Oa = Object(d.a)(Sa, 2),
              ja = Oa[0],
              ka = Oa[1],
              Ca = r.a.useState(!1),
              Ra = Object(d.a)(Ca, 2),
              Ba = Ra[0],
              La = Ra[1],
              Ta = r.a.useState(!1),
              Pa = Object(d.a)(Ta, 2),
              za = Pa[0],
              Aa = Pa[1],
              Ga = r.a.useState(q),
              Ua = Object(d.a)(Ga, 2),
              Ia = Ua[0],
              Ja = Ua[1],
              Wa = r.a.useState([]),
              _a = Object(d.a)(Wa, 2),
              Da = _a[0],
              Ha = _a[1],
              Fa = r.a.useState([]),
              $a = Object(d.a)(Fa, 2),
              Ka = ($a[0], $a[1], r.a.useState([])),
              Va = Object(d.a)(Ka, 2),
              Ya = Va[0],
              qa = Va[1],
              Ma = r.a.useState([]),
              Qa = Object(d.a)(Ma, 2),
              Xa = Qa[0],
              Za = Qa[1],
              et = r.a.useState(""),
              at = Object(d.a)(et, 2),
              tt = at[0],
              nt = at[1],
              rt = r.a.useState(""),
              ct = Object(d.a)(rt, 2),
              lt = ct[0],
              ot = ct[1],
              st = V(),
              it = (function () {
                var e = Object(u.a)(
                  i.a.mark(function e() {
                    var a, n, r;
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              na(!0),
                              (a = new $.a({ baseURL: t })),
                              p(a),
                              (e.next = 5),
                              a.getNetworkInformation()
                            );
                          case 5:
                            return (
                              (n = e.sent),
                              Ja(Object(m.a)({ url: t }, n.data)),
                              (e.next = 9),
                              a.currentConnectionList()
                            );
                          case 9:
                            (r = e.sent),
                              D(
                                r.data.map(function (e) {
                                  return e.uuid;
                                })
                              ),
                              Ze({}),
                              te([]),
                              me([]),
                              ge([]),
                              na(!1);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              mt = function (e) {
                Ha(function (a) {
                  return [].concat(Object(o.a)(a), [JSON.stringify(e.msg)]);
                });
              },
              ut = function (e) {
                console.log(e),
                  qa(function (a) {
                    return [].concat(Object(o.a)(a), [JSON.stringify(e)]);
                  });
              },
              dt = function (e) {
                console.log(e),
                  Za(function (a) {
                    return [].concat(Object(o.a)(a), [JSON.stringify(e)]);
                  });
              },
              pt = (function () {
                var e = Object(u.a)(
                  i.a.mark(function e() {
                    var a;
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              ua(!0),
                              ha(!0),
                              "",
                              (e.next = 5),
                              s.runRosrun(Q, ce, "")
                            );
                          case 5:
                            return ua(!1), (e.next = 8), Y(2500);
                          case 8:
                            return (e.next = 10), s.getRobotStatus("", Q);
                          case 10:
                            (a = e.sent), Ee(a.data.rosnodes), ha(!1);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              Et = (function () {
                var e = Object(u.a)(
                  i.a.mark(function e() {
                    var a;
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              fa(!0), ha(!0), (e.next = 4), s.runLaunch(Q, Oe)
                            );
                          case 4:
                            return (
                              e.sent,
                              fa(!1),
                              s.socket.on("roslaunch_log", ut),
                              (e.next = 9),
                              Y(2500)
                            );
                          case 9:
                            return (e.next = 11), s.getRobotStatus("", Q);
                          case 11:
                            (a = e.sent), Ee(a.data.rosnodes), ha(!1);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              ft = (function () {
                var e = Object(u.a)(
                  i.a.mark(function e() {
                    var a;
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              ha(!0),
                              s.socket.on("rosrun_log", dt),
                              (e.next = 4),
                              s.killNodes(Q, [Re])
                            );
                          case 4:
                            "success" === e.sent.status &&
                              ((a = pe.indexOf(Re)), pe.splice(a, 1)),
                              ha(!1);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              bt = (function () {
                var e = Object(u.a)(
                  i.a.mark(function e() {
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return ya(!0), (e.next = 3), s.subscribe(Pe, mt);
                          case 3:
                            return (
                              (e.next = 5),
                              s.setTopicRoute(Q, "application", s.uuid, Pe)
                            );
                          case 5:
                            ya(!1);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              vt = function (e) {
                var a = e.index,
                  t = e.style;
                return r.a.createElement(
                  "div",
                  { style: t },
                  r.a.createElement("span", { className: "p-4" }, Da[a])
                );
              },
              gt = function (e) {
                var a = e.index,
                  t = e.style;
                return r.a.createElement(
                  "div",
                  { style: t },
                  r.a.createElement(
                    "span",
                    { className: "p-4 text-gray-200" },
                    JSON.parse(Ya[a]).log
                  )
                );
              },
              ht = function (e) {
                var a = e.index,
                  t = e.style;
                return r.a.createElement(
                  "div",
                  { style: t },
                  r.a.createElement(
                    "span",
                    { className: "p-4 text-gray-200" },
                    JSON.parse(Xa[a]).log
                  )
                );
              },
              Nt = function (e) {
                return Da[e] && Da[e].length > 60 ? 70 : 30;
              },
              xt = function (e) {
                return Ya[e] && Ya[e].length > 60 ? 50 : 20;
              },
              wt = function (e) {
                return Xa[e] && Xa[e].length > 60 ? 50 : 20;
              },
              yt = (function () {
                console.log("ytに入りました");
                // if (wifiIntervalRef.current !== null) {
                //     console.log("2回目はここに入るべき");
                //     clearInterval(wifiIntervalRef.current); // 前回の送信ループを止める
                //     wifiIntervalRef.current = null;
                //   }
                // 前回のラベルと異なるならループを停止して再スタート
                if (wifiLabelInput !== confirmedLabel) {
                    console.log("ラベルが変更されました");

                    // 前回のループ停止
                    if (wifiIntervalRef.current !== null) {
                    clearInterval(wifiIntervalRef.current);
                    wifiIntervalRef.current = null;
                    console.log("前のループを停止しました");
                    }

                    // 新しいラベルをconfirmedにセット
                    setConfirmedLabel(wifiLabelInput);
                } 
                var e = Object(u.a)(
                  i.a.mark(function e() {
                    var selectedUUID;
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            // ✅ UUID（ユーザーが選択したロボット）
                            selectedUUID = Q;
                            if (!selectedUUID) {
                              alert("UUIDを選択してください");
                              return e.abrupt("return");
                            }
                            // ✅ 10秒おきにWi-Fi情報を取得して送るループ
                            wifiIntervalRef.current = setInterval(() => {
                                console.log("次の行でリクエストです");
                                fetch("http://192.168.10.79:3000/api/wifi")
                                .then((res) => res.json())
                                .then((data) => {
                                  console.log("受け取ったWi-Fi情報:", data);
                                  if (data && Q && wifiLabelInput) {
                                    console.log("Wi-FiデータをRowmaに送信:", data);
                                    // ここでRowmaにpublishするコードを追加できる
                                    const BSSIDandName = wifiLabelInput+","+data.BSSID;
                                    const jsonBssidData = JSON.stringify({ data: BSSIDandName });
                                    console.log(jsonBssidData);
                                    s.publish(Q, "/strongest_wifi", JSON.parse(jsonBssidData))
                                        .then(() => console.log("Rowmaへの送信成功"))
                                        .catch((err) => console.error("Rowmaへの送信失敗", err));
                                  }
                                })
                                .catch((err) => console.error("Wi-Fi取得エラー", err));
                            }, 10000); // ← 毎回10秒固定間隔
              
                            // （参考）以前コメントアウトしていたコード
                            // ✅ BSSID を取得
                            // bssidData = getWifiInfo(); 
                            // if (!bssidData) {
                            //     console.warn("Wi-Fi情報を取得できませんでした");
                            //     alert("Wi-Fi情報を取得できませんでした");
                            //     return e.abrupt("return");
                            // }
                            // var jsonBssidData = JSON.stringify({ data: bssidData });
                            // // ✅ BSSID を JSON 形式の文字列として送信
                            // ka(!0);
                            // e.next = 6;
                            // console.log(jsonBssidData);
                            // alert("BSSIDを送信しました")
                            // return s.publish(Q, "/rowma/bssid", JSON.parse(jsonBssidData));
                            // case 5:111                                                                                                                                                                                   
                            // ka(!1);
              
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();

            //   St = (function () {
            //     var e = Object(u.a)(
            //       i.a.mark(function e() {
            //         return i.a.wrap(function (e) {
            //           for (;;)
            //             switch ((e.prev = e.next)) {
            //               case 0:
            //                 return Aa(!0), (e.next = 3), s.addScript(Q, tt, lt);
            //               case 3:
            //                 Aa(!1);
            //               case 4:
            //               case "end":
            //                 return e.stop();
            //             }
            //         }, e);
            //       })
            //     );
            //     return function () {
            //       return e.apply(this, arguments);
            //     };
            //   })();
            return r.a.createElement(
              "div",
              { className: "".concat(st.root, " App") },
              r.a.createElement(
                b.a,
                { theme: K },
                r.a.createElement(
                  h.a,
                  { position: "static", className: st.header },
                  r.a.createElement(
                    x.a,
                    null,
                    r.a.createElement(
                      N.a,
                      { className: "text-left" },
                      r.a.createElement("img", {
                        src: "/public-console/logo.png",
                        width: "28",
                        height: "28",
                        className: "inline mx-4",
                      }),
                      r.a.createElement(
                        w.a,
                        { variant: "h5", className: "inline align-middle" },
                        "Rowma Network Console"
                      )
                    )
                  )
                ),
                r.a.createElement(
                  N.a,
                  null,
                  r.a.createElement(
                    S.a,
                    { container: !0, spacing: 3, className: "py-8" },
                    r.a.createElement(
                      S.a,
                      { item: !0, xs: 12, sm: 12, md: 12 },
                      r.a.createElement(
                        y.a,
                        { className: st.paper },
                        r.a.createElement(
                          "div",
                          { className: "flex items-center justify-center" },
                          r.a.createElement(k.a, {
                            color: "secondary",
                            margin: "dense",
                            label: "Network URL",
                            variant: "outlined",
                            className: st.textField,
                            onChange: function (e) {
                              n(e.target.value);
                            },
                            value: t,
                          }),
                          r.a.createElement(
                            "div",
                            { className: "relative mx-4" },
                            r.a.createElement(
                              A.a,
                              {
                                variant: "contained",
                                color: "primary",
                                disabled: ta,
                                onClick: it,
                              },
                              "接続"
                            ),
                            ta &&
                              r.a.createElement(G.a, {
                                size: 24,
                                className: st.buttonProgress,
                              })
                          )
                        )
                      )
                    ),
                    r.a.createElement(
                        S.a,
                        { item: !0, xs: 12, sm: 12, md: 4 },
                        r.a.createElement(
                          y.a,
                          { className: st.paper, style: { height: '100%' } },
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement(
                              z.a,
                              { component: "fieldset", className: st.radioButtons },
                              r.a.createElement(
                                "div",
                                { className: "my-4" },
                                r.a.createElement(
                                  w.a,
                                  { variant: "h5" },
                                  "ユーザー名入力欄"
                                )
                              ),
                              r.a.createElement(
                                k.a,
                                {
                                  label: "名字をローマ字で入力",
                                  variant: "outlined",
                                  size: "medium",
                                  className: st.textField,
                                  value: wifiLabelInput,
                                  onChange: function (e) {
                                    setWifiLabelInput(e.target.value);
                                  },
                                  style: { width: "100%" } // 👈 横幅を最大に
                                }
                            ),
                            r.a.createElement(
                            "div",
                            { className: "mt-4" },
                            r.a.createElement(
                              A.a,
                              {
                                variant: "contained",
                                color: "primary",
                                onClick: function () {
                                    const alphanumRegex = /^[a-zA-Z0-9]*$/;
                                    if (!alphanumRegex.test(wifiLabelInput)) {
                                      alert("半角英数字のみ使用できます");
                                      return;
                                    }
                                    setConfirmedLabel(wifiLabelInput);
                                    console.log("ラベルを「" + wifiLabelInput + "」に設定しました");
                                },
                              },
                              "決定"
                            )
                          )
                        )
                      )
                  )
                ),
                    r.a.createElement(
                      S.a,
                      { item: !0, xs: 12, sm: 12, md: 4 },
                      r.a.createElement(
                        y.a,
                        { className: st.paper },
                        r.a.createElement(
                          "div",
                          null,
                          r.a.createElement(
                            z.a,
                            { component: "fieldset", className: st.radioButtons },
                            r.a.createElement(
                              "div",
                              { className: "my-4" },
                              r.a.createElement(
                                w.a,
                                { variant: "h5" },
                                "UUID一覧"
                              )
                            ),
                            (!v || (v && 0 === v.length)) &&
                              r.a.createElement("p", null, "接続先がありません…"),
                            r.a.createElement(
                              T.a,
                              {
                                "aria-label": "robots",
                                name: "robots",
                                value: Q,
                                onChange: function (e) {
                                  X(e.target.value);
                                },
                                className: st.radioGroup,
                              },
                              v &&
                                v.map(function (e) {
                                  return r.a.createElement(P.a, {
                                    value: e,
                                    control: r.a.createElement(L.a, null),
                                    label: e,
                                  });
                                })
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "relative" },
                          r.a.createElement(
                            A.a,
                            {
                              variant: "contained",
                              color: "primary",
                              disabled: la || !Q,
                              onClick: function () {
                                oa(!0),
                                  s.connect().catch(function (e) {
                                    console.error(e);
                                  }),
                                  s.setRobotUuid(Q),
                                  s.getRobotStatus(Q).then(function (e) {
                                    Ze(e.data),
                                      Ee(e.data.rosnodes),
                                      te(e.data.rosrunCommands),
                                      me(e.data.launchCommands),
                                      ge(e.data.rostopics),
                                      oa(!1);
                                  });
                                  yt(); // ✅ BSSIDをRowmaに送信
                              },
                            },
                            "接続"
                          ),
                          la &&
                            r.a.createElement(G.a, {
                              size: 24,
                              className: st.buttonProgress,
                            })
                        )
                      )
                    )

                )
              ),
            )
        )
          };
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
        t(183);
        l.a.render(r.a.createElement(M, null), document.getElementById("root")),
          "serviceWorker" in navigator &&
            navigator.serviceWorker.ready
              .then(function (e) {
                e.unregister();
              })
              .catch(function (e) {
                console.error(e.message);
              });
      },
    },
    [[112, 1, 2]],
  ]);
  //# sourceMappingURL=main.ab295215.chunk.js.map
  