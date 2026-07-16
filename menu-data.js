/* Yuubi menu data — synced from the Notion spec (精選菜單, real Wix prices).
   Edit the Notion page first; this file mirrors it. */
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
        { name: "O-Toro", jp: "十八日熟成 大トロ", note: "18-day aged bluefin belly", price: "2pc $15 · 3pc $22.50" },
        { name: "Chu-Toro", jp: "中トロ", note: "aged bluefin, medium fatty belly", price: "2pc $10 · 3pc $15" },
        { name: "Japanese Uni", jp: "雲丹", note: "Hokkaido sea urchin", price: "2pc $22 · sashimi $33" },
        { name: "A5 Wagyu Nigiri", jp: "和牛握り", note: "hand-pressed", price: "$23" }
      ]
    },
    {
      jp: "丼もの",
      en: "Chef's Selection · Donburi",
      items: [
        { name: "Toro Don", note: "salmon belly, tuna belly & yellowtail belly sashimi over rice", price: "$35" },
        { name: "Omakase Don", note: "chef's selection of seasonal sashimi", price: "$48" },
        { name: "Hokkaido Don", note: "scallop, sweet shrimp, uni & ikura", price: "$42" },
        { name: "Chirashi", note: "assorted sashimi over sushi rice", price: "$25" }
      ]
    },
    {
      jp: "巻き寿司",
      en: "Signature Rolls",
      items: [
        { name: "Lion King", note: "california roll, seared salmon, scallion, tobiko, spicy mayo", price: "$17" },
        { name: "501", note: "tuna & avocado, topped with yellowtail, onion, fried shallot", price: "$17" },
        { name: "Toro Heaven", note: "minced toro, seared chu-toro, wasabi", price: "$17" },
        { name: "Dragon", note: "shrimp tempura, unagi, avocado, tobiko", price: "$17" }
      ]
    },
    {
      jp: "前菜",
      en: "Appetizers & Sushi Bar",
      items: [
        { name: "Wagyu Beef Tataki", note: "garlic ponzu", price: "$16" },
        { name: "Hamachi Kama", note: "grilled yellowtail collar, spicy daikon ponzu", price: "$16" },
        { name: "Chicken Karaage", note: "japanese fried chicken", price: "$8" },
        { name: "Gyoza", note: "six pieces · pork & vegetable, pan-fried", price: "$8" }
      ]
    },
    {
      jp: "麺・定食",
      en: "Noodles & Entrée",
      items: [
        { name: "Chashu Ramen", note: "house-braised chashu, rich tonkotsu broth", price: "$16" },
        { name: "Salmon Teriyaki", note: "with soup, salad & rice", price: "$19" },
        { name: "Steak Teriyaki", note: "with soup, salad & rice", price: "$21" },
        { name: "Unagi Fried Rice", note: "unagi & salmon-skin fried rice", price: "$21" }
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
    note: "Prices and availability may change — ask your server for today's cuts."
  },
  colophon: {
    kanji: "ごちそうさまでした",
    line: "優美日本料理 · サンフランシスコ"
  }
};
