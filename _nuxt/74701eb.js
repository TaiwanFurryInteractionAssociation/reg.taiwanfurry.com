(window.webpackJsonp=window.webpackJsonp||[]).push([[55,15,18,19],{377:function(e,n,t){"use strict";t.r(n);var o={},r=t(30),component=Object(r.a)(o,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"round drop-shadow p:16|48 bg:white cursor:pointer",on:{click:function(n){return e.$emit("click")}}},[e._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},384:function(e,n,t){"use strict";t.r(n);t(67);var o={data:function(){return{response:null}},methods:{receiveResponse:function(data){var e=this;data&&(this.$set(this,"response",data),"redirect_to_newebpay"==data.payment_type?setTimeout((function(n){e.$refs.newebpay_form.submit()}),2e3):"refresh"==data.payment_type&&setTimeout((function(e){window.location.reload()}),1e3))}}},r=t(30),component=Object(r.a)(o,(function(){var e=this,n=e._self._c;return n("div",[e.response&&"redirect_to_newebpay"==e.response.payment_type?n("form",{ref:"newebpay_form",staticClass:"display:none",attrs:{method:"POST",action:e.response.payment_info.submit_url}},[n("input",{attrs:{name:"MerchantID"},domProps:{value:e.response.payment_info.merchant_id}}),e._v(" "),n("input",{attrs:{name:"Version"},domProps:{value:e.response.payment_info.version}}),e._v(" "),n("input",{attrs:{name:"TradeInfo"},domProps:{value:e.response.payment_info.trade_info}}),e._v(" "),n("input",{attrs:{name:"TradeSha"},domProps:{value:e.response.payment_info.hash}})]):e._e()])}),[],!1,null,null,null);n.default=component.exports},388:function(e,n){e.exports=[{code:"TW",name:"Taiwan"},{code:"JP",name:"Japan"},{code:"AF",name:"Afghanistan"},{code:"AX",name:"Åland Islands"},{code:"AL",name:"Albania"},{code:"DZ",name:"Algeria"},{code:"AS",name:"American Samoa"},{code:"AD",name:"Andorra"},{code:"AO",name:"Angola"},{code:"AI",name:"Anguilla"},{code:"AQ",name:"Antarctica"},{code:"AG",name:"Antigua and Barbuda"},{code:"AR",name:"Argentina"},{code:"AM",name:"Armenia"},{code:"AW",name:"Aruba"},{code:"AU",name:"Australia"},{code:"AT",name:"Austria"},{code:"AZ",name:"Azerbaijan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahrain"},{code:"BD",name:"Bangladesh"},{code:"BB",name:"Barbados"},{code:"BY",name:"Belarus"},{code:"BE",name:"Belgium"},{code:"BZ",name:"Belize"},{code:"BJ",name:"Benin"},{code:"BM",name:"Bermuda"},{code:"BT",name:"Bhutan"},{code:"BO",name:"Bolivia"},{code:"BA",name:"Bosnia and Herzegovina"},{code:"BW",name:"Botswana"},{code:"BV",name:"Bouvet Island"},{code:"BR",name:"Brazil"},{code:"IO",name:"British Indian Ocean Territory"},{code:"VG",name:"British Virgin Islands"},{code:"BN",name:"Brunei"},{code:"BG",name:"Bulgaria"},{code:"BF",name:"Burkina Faso"},{code:"BI",name:"Burundi"},{code:"KH",name:"Cambodia"},{code:"CM",name:"Cameroon"},{code:"CA",name:"Canada"},{code:"CV",name:"Cape Verde"},{code:"BQ",name:"Caribbean Netherlands"},{code:"KY",name:"Cayman Islands"},{code:"CF",name:"Central African Republic"},{code:"TD",name:"Chad"},{code:"CL",name:"Chile"},{code:"CN",name:"China"},{code:"CX",name:"Christmas Island"},{code:"CC",name:"Cocos (Keeling) Islands"},{code:"CO",name:"Colombia"},{code:"KM",name:"Comoros"},{code:"CK",name:"Cook Islands"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatia"},{code:"CU",name:"Cuba"},{code:"CW",name:"Curaçao"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czechia"},{code:"DK",name:"Denmark"},{code:"DJ",name:"Djibouti"},{code:"DM",name:"Dominica"},{code:"DO",name:"Dominican Republic"},{code:"CD",name:"DR Congo"},{code:"EC",name:"Ecuador"},{code:"EG",name:"Egypt"},{code:"SV",name:"El Salvador"},{code:"GQ",name:"Equatorial Guinea"},{code:"ER",name:"Eritrea"},{code:"EE",name:"Estonia"},{code:"SZ",name:"Eswatini"},{code:"ET",name:"Ethiopia"},{code:"FK",name:"Falkland Islands"},{code:"FO",name:"Faroe Islands"},{code:"FJ",name:"Fiji"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"GF",name:"French Guiana"},{code:"PF",name:"French Polynesia"},{code:"TF",name:"French Southern and Antarctic Lands"},{code:"GA",name:"Gabon"},{code:"GM",name:"Gambia"},{code:"GE",name:"Georgia"},{code:"DE",name:"Germany"},{code:"GH",name:"Ghana"},{code:"GI",name:"Gibraltar"},{code:"GR",name:"Greece"},{code:"GL",name:"Greenland"},{code:"GD",name:"Grenada"},{code:"GP",name:"Guadeloupe"},{code:"GU",name:"Guam"},{code:"GT",name:"Guatemala"},{code:"GG",name:"Guernsey"},{code:"GN",name:"Guinea"},{code:"GW",name:"Guinea-Bissau"},{code:"GY",name:"Guyana"},{code:"HT",name:"Haiti"},{code:"HM",name:"Heard Island and McDonald Islands"},{code:"HN",name:"Honduras"},{code:"HK",name:"Hong Kong"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},{code:"IN",name:"India"},{code:"ID",name:"Indonesia"},{code:"IR",name:"Iran"},{code:"IQ",name:"Iraq"},{code:"IE",name:"Ireland"},{code:"IM",name:"Isle of Man"},{code:"IL",name:"Israel"},{code:"IT",name:"Italy"},{code:"CI",name:"Ivory Coast"},{code:"JM",name:"Jamaica"},{code:"JE",name:"Jersey"},{code:"JO",name:"Jordan"},{code:"KZ",name:"Kazakhstan"},{code:"KE",name:"Kenya"},{code:"KI",name:"Kiribati"},{code:"XK",name:"Kosovo"},{code:"KW",name:"Kuwait"},{code:"KG",name:"Kyrgyzstan"},{code:"LA",name:"Laos"},{code:"LV",name:"Latvia"},{code:"LB",name:"Lebanon"},{code:"LS",name:"Lesotho"},{code:"LR",name:"Liberia"},{code:"LY",name:"Libya"},{code:"LI",name:"Liechtenstein"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MO",name:"Macau"},{code:"MG",name:"Madagascar"},{code:"MW",name:"Malawi"},{code:"MY",name:"Malaysia"},{code:"MV",name:"Maldives"},{code:"ML",name:"Mali"},{code:"MT",name:"Malta"},{code:"MH",name:"Marshall Islands"},{code:"MQ",name:"Martinique"},{code:"MR",name:"Mauritania"},{code:"MU",name:"Mauritius"},{code:"YT",name:"Mayotte"},{code:"MX",name:"Mexico"},{code:"FM",name:"Micronesia"},{code:"MD",name:"Moldova"},{code:"MC",name:"Monaco"},{code:"MN",name:"Mongolia"},{code:"ME",name:"Montenegro"},{code:"MS",name:"Montserrat"},{code:"MA",name:"Morocco"},{code:"MZ",name:"Mozambique"},{code:"MM",name:"Myanmar"},{code:"NA",name:"Namibia"},{code:"NR",name:"Nauru"},{code:"NP",name:"Nepal"},{code:"NL",name:"Netherlands"},{code:"NC",name:"New Caledonia"},{code:"NZ",name:"New Zealand"},{code:"NI",name:"Nicaragua"},{code:"NE",name:"Niger"},{code:"NG",name:"Nigeria"},{code:"NU",name:"Niue"},{code:"NF",name:"Norfolk Island"},{code:"KP",name:"North Korea"},{code:"MK",name:"North Macedonia"},{code:"MP",name:"Northern Mariana Islands"},{code:"NO",name:"Norway"},{code:"OM",name:"Oman"},{code:"PK",name:"Pakistan"},{code:"PW",name:"Palau"},{code:"PS",name:"Palestine"},{code:"PA",name:"Panama"},{code:"PG",name:"Papua New Guinea"},{code:"PY",name:"Paraguay"},{code:"PE",name:"Peru"},{code:"PH",name:"Philippines"},{code:"PN",name:"Pitcairn Islands"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"PR",name:"Puerto Rico"},{code:"QA",name:"Qatar"},{code:"CG",name:"Republic of the Congo"},{code:"RE",name:"Réunion"},{code:"RO",name:"Romania"},{code:"RU",name:"Russia"},{code:"RW",name:"Rwanda"},{code:"BL",name:"Saint Barthélemy"},{code:"SH",name:"Saint Helena, Ascension and Tristan da Cunha"},{code:"KN",name:"Saint Kitts and Nevis"},{code:"LC",name:"Saint Lucia"},{code:"MF",name:"Saint Martin"},{code:"PM",name:"Saint Pierre and Miquelon"},{code:"VC",name:"Saint Vincent and the Grenadines"},{code:"WS",name:"Samoa"},{code:"SM",name:"San Marino"},{code:"ST",name:"São Tomé and Príncipe"},{code:"SA",name:"Saudi Arabia"},{code:"SN",name:"Senegal"},{code:"RS",name:"Serbia"},{code:"SC",name:"Seychelles"},{code:"SL",name:"Sierra Leone"},{code:"SG",name:"Singapore"},{code:"SX",name:"Sint Maarten"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"SB",name:"Solomon Islands"},{code:"SO",name:"Somalia"},{code:"ZA",name:"South Africa"},{code:"GS",name:"South Georgia"},{code:"KR",name:"South Korea"},{code:"SS",name:"South Sudan"},{code:"ES",name:"Spain"},{code:"LK",name:"Sri Lanka"},{code:"SD",name:"Sudan"},{code:"SR",name:"Suriname"},{code:"SJ",name:"Svalbard and Jan Mayen"},{code:"SE",name:"Sweden"},{code:"CH",name:"Switzerland"},{code:"SY",name:"Syria"},{code:"TJ",name:"Tajikistan"},{code:"TZ",name:"Tanzania"},{code:"TH",name:"Thailand"},{code:"TL",name:"Timor-Leste"},{code:"TG",name:"Togo"},{code:"TK",name:"Tokelau"},{code:"TO",name:"Tonga"},{code:"TT",name:"Trinidad and Tobago"},{code:"TN",name:"Tunisia"},{code:"TR",name:"Turkey"},{code:"TM",name:"Turkmenistan"},{code:"TC",name:"Turks and Caicos Islands"},{code:"TV",name:"Tuvalu"},{code:"UG",name:"Uganda"},{code:"UA",name:"Ukraine"},{code:"AE",name:"United Arab Emirates"},{code:"GB",name:"United Kingdom"},{code:"US",name:"United States"},{code:"UM",name:"United States Minor Outlying Islands"},{code:"VI",name:"United States Virgin Islands"},{code:"UY",name:"Uruguay"},{code:"UZ",name:"Uzbekistan"},{code:"VU",name:"Vanuatu"},{code:"VA",name:"Vatican City"},{code:"VE",name:"Venezuela"},{code:"VN",name:"Vietnam"},{code:"WF",name:"Wallis and Futuna"},{code:"EH",name:"Western Sahara"},{code:"YE",name:"Yemen"},{code:"ZM",name:"Zambia"},{code:"ZW",name:"Zimbabwe"}]},390:function(e,n,t){"use strict";t.r(n);var o={props:["field"]},r=t(30),component=Object(r.a)(o,(function(){var e=this,n=e._self._c;return n("div",[n("div",{staticClass:"font-size:0.8rem mb:8 color:gray"},[e._v("\n    "+e._s(e.field)+"\n  ")]),e._v(" "),n("div",[e._t("default")],2)])}),[],!1,null,null,null);n.default=component.exports},454:function(e,n,t){"use strict";t.r(n);t(68),t(11),t(19);var o=t(3),r=(t(21),t(71)),d=t(72),c=t.n(d),m=t(135),l=t.n(m),_=t(388),f=t.n(_),v={data:function(){return{COLORS:l.a,COUNTRIES:f.a,config:c.a.getConfig(),isMaintenancing:c.a.isMaintenancing(),isOpened:c.a.isRegistrationOpened(),openDatetimeRange:c.a.getRegistrationOpenDatetimeRange(),loading:!0,registrationStatus:null,payment_info:null}},mounted:function(){this.getRegistrationStatus(),this.$store.commit("app/setTitle",this.$t("registration.title"))},methods:{getRegistrationStatus:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,e.$axios.get("/api/registration").then((function(n){e.registrationStatus=n.data,e.loading=!1})).catch((function(e){r.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return n.stop()}}),n)})))()},pay:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,e.$axios.get("/api/registration/payment").then((function(n){e.payment_info=n.data.payment_info,r.a.showSnackbar({message:e.$t(n.data.code),colorType:"positive"}),e.$refs.paymentGateway.receiveResponse(n.data)})).catch((function(n){r.a.showRequestError(n),e.loading=!1}));case 3:case"end":return n.stop()}}),n)})))()}}},S=t(30),component=Object(S.a)(v,(function(){var e=this,n=e._self._c;return n("div",[n("Loading",{attrs:{value:e.loading}}),e._v(" "),e.registrationStatus?n("div",[null==e.registrationStatus.registration?n("div",[n("div",{staticClass:"p:96|32 bg:white flex flex-center font-size:1.4rem round drop-shadow border"},[e._v("\n        "+e._s(e.$t("registration.messages.not_registered"))+"\n      ")]),e._v(" "),n("div",{staticClass:"mt:32 flex flex-center"},[e.isOpened&&!e.isMaintenancing?n("nuxt-link",{attrs:{to:e.localePath("/registration/tos")}},[n("RoundButton",[e._v(e._s(e.$t("registration.buttons.register")))])],1):e.isMaintenancing?n("RoundButton",[e._v("\n          "+e._s(e.$t("common.errors.maintenancing"))+"\n        ")]):e.config.onsite_token?n("nuxt-link",{attrs:{to:e.localePath("/registration/tos?onsite")}},[n("RoundButton",[e._v(e._s(e.$t("registration.buttons.onsiteRegister")))])],1):n("RoundButton",[e._v("\n          "+e._s(e.$t("common.errors.ended"))+"\n        ")])],1)]):n("div",[1==e.registrationStatus.registration.attendee_status?n("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[n("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:e.COLORS.negative.background}},[e._v("\n          "+e._s(e.$t("payment_status.unpaid"))+"\n        ")]),e._v(" "),e.isMaintenancing?n("RoundButton",{staticClass:"mt:16 border"},[e._v("\n          "+e._s(e.$t("common.errors.maintenancing"))+"\n        ")]):n("RoundButton",{staticClass:"mt:16 border",on:{click:e.pay}},[e._v("\n          "+e._s(e.$t("registration.buttons.payNow"))+"\n        ")]),e._v(" "),n("PaymentGateway",{ref:"paymentGateway"})],1):e._e(),e._v(" "),3==e.registrationStatus.registration.attendee_status?n("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[n("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:e.COLORS.primary.background}},[e._v("\n          "+e._s(e.$t("payment_status.need_manual_intervention"))+"\n        ")])]):e._e(),e._v(" "),5==e.registrationStatus.registration.attendee_status?n("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column mb:32"},[n("div",{staticClass:"font-size:2rem font-weight:bold",style:{color:e.COLORS.negative.background}},[e._v("\n          "+e._s(e.$t("payment_status.payment_info_received"))+"\n        ")]),e._v(" "),n("div",{staticClass:"mt:16 color:gray font-size:1.2rem"},[e._v("\n          "+e._s(e.$t("registration.infoFields.payment_info"))+"\n        ")]),e._v(" "),n("div",{staticClass:"mt:16 color:gray font-size:1.2rem font-weight:bold"},[e._v("\n          "+e._s(e.registrationStatus.order.order_payment_info)+"\n        ")]),e._v(" "),n("div",{staticClass:"mt:16 color:gray font-size:1.2rem font-weight:bold"},[e._v("\n          "+e._s(e.$t("registration.infoFields.attendee_total_amount"))+" :\n          "+e._s(e.registrationStatus.registration.attendee_total_amount)+" /\n          "+e._s(e.$t("registration.infoFields.order_expire_datetime"))+" :\n          "+e._s(new Date(e.registrationStatus.order.order_expire_datetime).toLocaleString())+"\n        ")]),e._v(" "),n("div",{staticClass:"mt:16 color:gray font-size:1.2rem font-weight:bold"})]):e._e(),e._v(" "),7==e.registrationStatus.registration.attendee_status||10==e.registrationStatus.registration.attendee_status?n("div",{staticClass:"round border drop-shadow bg:white p:16|16 flex flex-center flex-direction:column mb:32"},[n("i",{staticClass:"mdi mdi-check font-size:6rem",style:{color:e.COLORS.positive.background}}),e._v(" "),n("div",{staticClass:"font-size:1.6rem mb:16"},[e._v("\n          "+e._s(e.$t("payment_status.paid"))+"\n        ")])]):e._e(),e._v(" "),n("div",{staticClass:"round border drop-shadow bg:white p:32|16 flex flex-center flex-direction:column"},[n("div",{staticClass:"font-weight:bold mb:32"},[e._v("\n          "+e._s(e.$t("registration.fields.personal_info"))+"\n        ")]),e._v(" "),n("div",{staticClass:"display:grid grid-template-columns:repeat(6,1fr)@>sm grid-template-columns:1fr@<sm gap:16"},[n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_no")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_no?e.registrationStatus.registration.attendee_no:e.$t("registration.infoFields.attendee_no_undefined"))+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_type")}},[e._v("\n            "+e._s(e.$t("levels."+e.registrationStatus.registration.attendee_type))+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_realname")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_realname)+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_country")}},[e._v("\n            "+e._s(e.COUNTRIES.find((function(n){return n.code==e.registrationStatus.registration.attendee_country}))?e.COUNTRIES.find((function(n){return n.code==e.registrationStatus.registration.attendee_country})).name:"")+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_nickname")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_nickname)+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_telephone")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_telephone)+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_identification_number")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_identification_number)+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_receive_method")}},[e._v("\n            "+e._s(e.$t("receive_methods."+e.registrationStatus.registration.attendee_receive_method))+"\n          ")]),e._v(" "),e.registrationStatus.registration.attendee_payment_method?n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_payment_method")}},[e._v("\n            "+e._s(e.$t("payment_methods."+e.registrationStatus.registration.attendee_payment_method))+"\n          ")]):e._e(),e._v(" "),e.config.levels.find((function(n){return n.level==e.registrationStatus.registration.attendee_type})).has_shirt?n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_shirt_size")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_shirt_size)+"\n          ")]):e._e(),e._v(" "),e.config.levels.find((function(n){return n.level==e.registrationStatus.registration.attendee_type})).can_donate?n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_donate_amount")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_donate_amount)+"\n          ")]):e._e(),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_ftp_team")}},[e._v("\n            "+e._s(e.$t("ftp_teams."+e.registrationStatus.registration.attendee_ftp_team))+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_ftp_is_buy_bottle")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_ftp_is_buy_bottle?e.$t("common.yes"):e.$t("common.no"))+"\n          ")]),e._v(" "),n("InfoField",{attrs:{field:e.$t("registration.infoFields.attendee_ftp_join_dinner")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_ftp_join_dinner?e.$t("common.yes"):e.$t("common.no"))+"\n          ")]),e._v(" "),n("InfoField",{staticClass:"grid-column-start:1 grid-column-end:3@>sm",attrs:{field:e.$t("registration.infoFields.attendee_has_fursuit")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_has_fursuit?e.$t("common.yes"):e.$t("common.no"))+"\n            "+e._s(e.registrationStatus.registration.attendee_has_fursuit?" - "+e.registrationStatus.registration.attendee_fursuit_name:"")+"\n          ")]),e._v(" "),0==e.registrationStatus.registration.attendee_receive_method?n("InfoField",{staticClass:"grid-column-start:1 grid-column-end:6@>sm",attrs:{field:e.$t("registration.infoFields.attendee_address")}},[e._v("\n            "+e._s(e.registrationStatus.registration.attendee_address)+"\n          ")]):e._e()],1),e._v(" "),n("div",{staticClass:"w:100% p:32|16 flex flex-direction:column flex-center"},[n("div",{staticClass:"w:18rem h:10rem bg:#F5F5F5 p:16 flex flex-direction:column align-items:center justify-content:space-between border-radius:8"},[n("div",{staticClass:"mt:1rem"},[e._v("\n              "+e._s(e.$t("registration.infoFields.card_hint"))+"\n            ")]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.registrationStatus.registration.attendee_card_name_1,expression:"registrationStatus.registration.attendee_card_name_1"}],staticClass:"p:0 h:2rem mb:4 text-align:center",attrs:{readonly:"",required:""},domProps:{value:e.registrationStatus.registration.attendee_card_name_1},on:{input:function(n){n.target.composing||e.$set(e.registrationStatus.registration,"attendee_card_name_1",n.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.registrationStatus.registration.attendee_card_name_2,expression:"registrationStatus.registration.attendee_card_name_2"}],staticClass:"p:0 h:1.6rem font-size:0.8rem text-align:center",attrs:{readonly:""},domProps:{value:e.registrationStatus.registration.attendee_card_name_2},on:{input:function(n){n.target.composing||e.$set(e.registrationStatus.registration,"attendee_card_name_2",n.target.value)}}})])])]),e._v(" "),n("div",[e._v("\n          "+e._s(e.$t("common.messages.ifNeedToChangeData"))+"\n        ")])])])]):e._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Loading:t(168).default,RoundButton:t(377).default,PaymentGateway:t(384).default,InfoField:t(390).default})}}]);