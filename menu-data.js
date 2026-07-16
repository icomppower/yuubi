/* Yuubi menu data — synced from the Notion spec (精選菜單, real Wix prices).
   Edit the Notion page first; this file mirrors it.
   jp / noteJp / priceJp fields feed the 日本語 language mode. */
const YUUBI_MENU = {
  cover: {
    kicker: "Inner Richmond · San Francisco",
    kanji: "優美",
    name: "Yuubi",
    subtitle: "メニュー",
    tagline: "美味しい瞬間を、あなたに。"
  },
  pages: [
    {
      jp: "握り・刺身",
      en: "Signature Cuts · Nigiri & Sashimi",
      items: [
        { name: "O-Toro", jp: "十八日熟成 大トロ", note: "18-day aged bluefin belly", noteJp: "十八日熟成・本鮪の大トロ", price: "2pc $15 · 3pc $22.50", priceJp: "握り2貫 $15 · 刺身3切 $22.50" },
        { name: "Chu-Toro", jp: "中トロ", note: "aged bluefin, medium fatty belly", noteJp: "熟成本鮪・中トロ", price: "2pc $10 · 3pc $15", priceJp: "握り2貫 $10 · 刺身3切 $15" },
        { name: "Japanese Uni", jp: "雲丹", note: "Hokkaido sea urchin", noteJp: "北海道産うに", price: "2pc $22 · sashimi $33", priceJp: "握り2貫 $22 · 刺身 $33" },
        { name: "A5 Wagyu Nigiri", jp: "A5和牛握り", note: "hand-pressed", noteJp: "手握り", price: "$23" }
      ]
    },
    {
      jp: "丼もの",
      en: "Chef's Selection · Donburi",
      items: [
        { name: "Toro Don", jp: "とろ丼", note: "salmon belly, tuna belly & yellowtail belly sashimi over rice", noteJp: "サーモン・鮪・はまちの腹身刺身丼", price: "$35" },
        { name: "Omakase Don", jp: "おまかせ丼", note: "chef's selection of seasonal sashimi", noteJp: "板長おまかせ・季節の刺身丼", price: "$48" },
        { name: "Hokkaido Don", jp: "北海道丼", note: "scallop, sweet shrimp, uni & ikura", noteJp: "帆立・甘海老・うに・いくら", price: "$42" },
        { name: "Chirashi", jp: "ちらし寿司", note: "assorted sashimi over sushi rice", noteJp: "刺身盛り合わせ丼", price: "$25" }
      ]
    },
    {
      jp: "巻き寿司",
      en: "Signature Rolls",
      items: [
        { name: "Lion King", jp: "ライオンキング", note: "california roll, seared salmon, scallion, tobiko, spicy mayo", noteJp: "カリフォルニアロール・炙りサーモン・葱・とびこ・スパイシーマヨ", price: "$17" },
        { name: "501", jp: "五〇一", note: "tuna & avocado, topped with yellowtail, onion, fried shallot", noteJp: "鮪とアボカド・はまち・玉葱・フライドシャロット", price: "$17" },
        { name: "Toro Heaven", jp: "とろヘブン", note: "minced toro, seared chu-toro, wasabi", noteJp: "ねぎとろ・炙り中とろ・山葵", price: "$17" },
        { name: "Dragon", jp: "ドラゴン", note: "shrimp tempura, unagi, avocado, tobiko", noteJp: "海老天・鰻・アボカド・とびこ", price: "$17" }
      ]
    },
    {
      jp: "前菜",
      en: "Appetizers & Sushi Bar",
      items: [
        { name: "Wagyu Beef Tataki", jp: "和牛たたき", note: "garlic ponzu", noteJp: "にんにくポン酢", price: "$16" },
        { name: "Hamachi Kama", jp: "はまちカマ焼き", note: "grilled yellowtail collar, spicy daikon ponzu", noteJp: "辛味大根おろしポン酢", price: "$16" },
        { name: "Chicken Karaage", jp: "鶏の唐揚げ", note: "japanese fried chicken", noteJp: "自家製・日本式フライドチキン", price: "$8" },
        { name: "Gyoza", jp: "餃子（6個）", note: "six pieces · pork & vegetable, pan-fried", noteJp: "豚肉と野菜の焼き餃子・6個", price: "$8" }
      ]
    },
    {
      jp: "麺・定食",
      en: "Noodles & Entrée",
      items: [
        { name: "Chashu Ramen", jp: "チャーシューラーメン", note: "house-braised chashu, rich tonkotsu broth", noteJp: "自家製チャーシュー・濃厚豚骨スープ", price: "$16" },
        { name: "Salmon Teriyaki", jp: "サーモン照り焼き定食", note: "with soup, salad & rice", noteJp: "お椀・サラダ・ご飯付き", price: "$19" },
        { name: "Steak Teriyaki", jp: "ステーキ照り焼き定食", note: "with soup, salad & rice", noteJp: "お椀・サラダ・ご飯付き", price: "$21" },
        { name: "Unagi Fried Rice", jp: "鰻チャーハン", note: "unagi & salmon-skin fried rice", noteJp: "鰻と鮭皮のチャーハン", price: "$21" }
      ]
    }
  ],
  back: {
    jp: "場所・連絡",
    en: "Visit",
    lines: [
      "501 Balboa Street, San Francisco, CA 94118",
      "Mon–Fri 4:30–9:00pm · Sat–Sun 12:00–9:00pm",
      "(415) 386-2011 · @yuubisf"
    ],
    linesJp: [
      "501 Balboa Street, San Francisco, CA 94118",
      "月〜金 4:30–9:00pm · 土日 12:00–9:00pm",
      "(415) 386-2011 · @yuubisf"
    ],
    note: "Prices and availability may change — ask your server for today's cuts.",
    noteJp: "価格・内容は変更になる場合がございます。本日のおすすめはスタッフまで。"
  },
  colophon: {
    kanji: "ごちそうさまでした",
    line: "優美日本料理 · サンフランシスコ"
  }
};
