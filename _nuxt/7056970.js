(window.webpackJsonp=window.webpackJsonp||[]).push([[40,18,19],{377:function(e,t,n){"use strict";n.r(t);var r={},o=n(30),component=Object(o.a)(r,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"round drop-shadow p:16|48 bg:white cursor:pointer",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},384:function(e,t,n){"use strict";n.r(t);n(67);var r={data:function(){return{response:null}},methods:{receiveResponse:function(data){var e=this;data&&(this.$set(this,"response",data),"redirect_to_newebpay"==data.payment_type?setTimeout((function(t){e.$refs.newebpay_form.submit()}),2e3):"refresh"==data.payment_type&&setTimeout((function(e){window.location.reload()}),1e3))}}},o=n(30),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[e.response&&"redirect_to_newebpay"==e.response.payment_type?t("form",{ref:"newebpay_form",staticClass:"display:none",attrs:{method:"POST",action:e.response.payment_info.submit_url}},[t("input",{attrs:{name:"MerchantID"},domProps:{value:e.response.payment_info.merchant_id}}),e._v(" "),t("input",{attrs:{name:"Version"},domProps:{value:e.response.payment_info.version}}),e._v(" "),t("input",{attrs:{name:"TradeInfo"},domProps:{value:e.response.payment_info.trade_info}}),e._v(" "),t("input",{attrs:{name:"TradeSha"},domProps:{value:e.response.payment_info.hash}})]):e._e()])}),[],!1,null,null,null);t.default=component.exports},389:function(e,t){e.exports=[{key:"ONSITE",name:"Onsite Payment",icon:"desk",onsite:!0,excludeCountries:[]},{key:"NEWEBPAY_ATM",name:"ATM",icon:"atm",onsite:!1,excludeCountries:[]},{key:"NEWEBPAY_CVS",name:"超商代碼",icon:"store",onsite:!1,excludeCountries:[]},{key:"PAYPAL",name:"PayPal",icon:"credit-card",onsite:!1,excludeCountries:["TW"]}]},455:function(e,t,n){"use strict";n.r(t);n(15),n(48);var r=n(3),o=(n(38),n(11),n(21),n(72)),c=n(135),l=n.n(c),d=n(389),m=n.n(d),f=n(71),_={data:function(){return{config:Object(o.getConfig)(),isMaintenancing:Object(o.isMaintenancing)(),isOpened:Object(o.isAfterPartyRegistrationOpened)(),openDatetimeRange:Object(o.getAfterPartyRegistrationOpenDatetimeRange)(),COLORS:l.a,PAYMENT_METHODS:m.a,loading:!1,form:{after_party_registration_payment_method:null}}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.commit("app/setTitle",e.$t("afterPartyRegistration.title"));case 1:case"end":return t.stop()}}),t)})))()},computed:{paymentMethods:function(){var e=this,t=m.a;return t=(t=t.filter((function(e){return!e.onsite}))).filter((function(t){return-1==t.excludeCountries.indexOf(e.$store.state.auth.country)}))}},methods:{submit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.post("/api/afterPartyRegistration",e.form).then((function(t){"afterPartyRegistration.messages.registered"==t.data.code?(f.a.showSnackbar({message:e.$t(t.data.code),colorType:"positive"}),e.$refs.paymentGateway.receiveResponse(t.data)):(f.a.showSnackbar({message:e.$t(t.data.code).replace("{START_AT}",e.openDatetimeRange.start_at.toLocaleString()).replace("{END_AT}",e.openDatetimeRange.end_at.toLocaleString()),colorType:"positive"}),e.$router.push(e.localePath("/afterPartyRegistration")),e.loading=!1)})).catch((function(t){f.a.showRequestError(t,!0),e.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},y=n(30),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return t("form",{ref:"form",staticClass:"flex flex-direction:column flex-center"},[t("Loading",{model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}}),e._v(" "),e.isOpened?e.isMaintenancing?t("div",{staticClass:"p:96|32 round drop-shadow border flex flex-center w:100% bg:white"},[e._v("\n    "+e._s(e.$t("common.maintenancing"))+"\n  ")]):t("div",{staticClass:"w:100%"},[t("div",[t("div",{staticClass:"p:48|64 bg:white flex flex-center flex-direction:column round drop-shadow border"},[t("div",{staticClass:"font-weight:bold"},[e._v("\n          "+e._s(e.$t("afterPartyRegistration.tos.title"))+"\n        ")]),e._v(" "),t("div",{staticClass:"white-space:pre-wrap my:48",domProps:{textContent:e._s(e.$t("afterPartyRegistration.tos.content"))}}),e._v(" "),t("div",{staticClass:"color:#D03232"},[e._v("\n          "+e._s(e.$t("afterPartyRegistration.tos.mustAgree"))+"\n        ")])])]),e._v(" "),t("div",{staticClass:"font-weight:bold my:32"},[e._v("\n      "+e._s(e.$t("afterPartyRegistration.fields.after_party_registration_payment_method"))+"\n    ")]),e._v(" "),t("div",{staticClass:"display:grid grid-template-columns:1fr@<=sm gap:16 w:100%",style:{gridTemplateColumns:"repeat(".concat(e.paymentMethods.length,", 1fr)")}},e._l(e.paymentMethods,(function(n){return t("div",{key:n.key,staticClass:"bg:white round border drop-shadow flex flex-direction:column flex-center p:16 cursor:pointer",style:{background:e.form.after_party_registration_payment_method==n.key?e.COLORS.primary.background:"white",color:e.form.after_party_registration_payment_method==n.key?e.COLORS.primary.color:"black"},on:{click:function(t){e.form.after_party_registration_payment_method=n.key}}},[t("i",{class:"font-size:4rem my:16 mdi mdi-"+n.icon}),e._v(" "),t("div",{staticClass:"font-size:1.2rem mb:8"},[e._v("\n          "+e._s(e.$t("payment_methods."+n.key))+"\n        ")])])})),0),e._v(" "),t("div",{staticClass:"mt:32 flex flex-center"},[t("RoundButton",{on:{click:function(t){e.$refs.form.reportValidity()&&e.submit()}}},[e._v(e._s(e.$t("common.submit")))])],1),e._v(" "),t("PaymentGateway",{ref:"paymentGateway"})],1):t("div",{staticClass:"p:96|32 round drop-shadow border flex flex-center w:100% bg:white"},[e._v("\n    "+e._s(e.$t("afterPartyRegistration.errors.registration_not_open").replace("{START_AT}",e.openDatetimeRange.start_at.toLocaleString()).replace("{END_AT}",e.openDatetimeRange.end_at.toLocaleString()))+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:n(168).default,RoundButton:n(377).default,PaymentGateway:n(384).default})}}]);