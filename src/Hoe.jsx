import React from "react";
import Navbar from "./Navbar.jsx";
import Slide from "./Slide.jsx";
import AutoPlay from "./AutoPlay.jsx";
import Cards4 from "./Cards4.jsx";
import Cards6 from "./Cards6.jsx";
import Cards7 from "./Cards7.jsx";
import Cards8 from "./Cards8.jsx";
import Cards9 from "./Cards9.jsx";
import Bar from "./Bar.jsx";
import Cards10 from "./Cards10.jsx";
import Cards11 from "./Cards11.jsx";
import Footer from "./Footer.jsx";
import Popup from "./Popup.jsx";
import Cards3 from "./Cards3.jsx";
import Imege from "./Imege.jsx";
import Image1 from "./Image1.jsx";
import Card from "./Card.jsx";
import Cards5 from "./Cards5.jsx";
import Footer2 from "./Footer2.jsx";
import Login from "./Login.jsx";

const list = [
  {
    id: 1,
    title: "Samsung Watch Ultra SM-L705F",
    price: "11,499",
    oldPrice: "14,999",
    image:
      "https://images.priceoye.pk/samsung-watch-ultra-l705fz-pakistan-priceoye-wqp3f-270x270.webp",
    discount: "12",
  },
  {
    id: 2,
    title: "Blaktron Zenith Z2 Smart Watch",
    price: "9,299",
    oldPrice: "12,999",
    image:
      "https://images.priceoye.pk/blaktron-zenith-z2-smart-watch-pakistan-priceoye-jlctf-270x270.webp",
    discount: "13",
  },
  {
    id: 3,
    title: "QCY GS Smart Watch",
    price: "2,799",
    oldPrice: "3,999",
    image:
      "https://images.priceoye.pk/qcy-gs-smart-watches-pakistan-priceoye-5shjm-270x270.webp",
    discount: "42",
  },
  {
    id: 4,
    title: "Itel Neo R60+ 4G",
    price: "5,299",
    oldPrice: "7,999",
    image:
      "https://images.priceoye.pk/itel-neo-r60-plus-pakistan-priceoye-rc4eb-270x270.webp",
    discount: "42",
  },
  {
    id: 5,
    title: "Faster Wireless Gaming Earbuds (TG300)",
    price: "3,199",
    oldPrice: "4,999",
    image:
      "https://images.priceoye.pk/faster-wireless-gaming-e-sports-neckband-tg300-pakistan-priceoye-b900g-270x270.webp",
    discount: "24",
  },
  {
    id: 6,
    title: "Nothing CMF Pro Smart Watch",
    price: "1,499",
    oldPrice: "2,499",
    image:
      "https://images.priceoye.pk/cmf-watch-pro-pakistan-priceoye-cm2q8-270x270.webp",
    discount: "12",
  },
  {
    id: 7,
    title: "GFive G3310",
    price: "4,999",
    oldPrice: "6,999",
    image:
      "https://images.priceoye.pk/gfive-g3310-pakistan-priceoye-y3dz4-270x270.webp",
    discount: "13",
  },
  {
    id: 8,
    title: "XZone X-W34 Power Bank",
    price: "3,499",
    oldPrice: "4,999",
    image:
      "https://images.priceoye.pk/xzone-x-w34-25w-pd-fast-charging-wireless-10000mah-powerbank-pakistan-priceoye-4f9t6-270x270.webp",
    discount: "15",
  },
  {
    id: 9,
    title: "Amaya WF54 Power Bank",
    price: "2,199",
    oldPrice: "3,499",
    image:
      "https://images.priceoye.pk/amaya-wf54-20w-10000mah-power-bank-pakistan-priceoye-ojgtu-270x270.webp",
    discount: "54",
  },
  {
    id: 10,
    title: "GFive Magic",
    price: "499",
    oldPrice: "899",
    image:
      "https://images.priceoye.pk/gfive-magic-pakistan-priceoye-i3dd7-270x270.webp",
    discount: "76",
  },
  {
    id: 11,
    title: "itel BudsAir Pro",
    price: "1,299",
    oldPrice: "2,199",
    image:
      "https://images.priceoye.pk/itel-budsair-pro-wireless-earbuds-pakistan-priceoye-q31vy-270x270.webp",
    discount: "56",
  },
  {
    id: 12,
    title: "Dcode Bold 2",
    price: "4,299",
    oldPrice: "6,999",
    image:
      "https://images.priceoye.pk/dcode-bold-2-pakistan-priceoye-4xtgk-270x270.webp",
    discount: "21",
  },
  {
    id: 13,
    title: "Sovo Rocco 10000mAh",
    price: "1,799",
    oldPrice: "2,999",
    image:
      "https://images.priceoye.pk/sovo-rocco-10000mah-power-bank-spb-611-pakistan-priceoye-7saqi-270x270.webp",
    discount: "8",
  },
  {
    id: 14,
    title: "Dizo GoPods Active Noise",
    price: "1,599",
    oldPrice: "2,499",
    image:
      "https://images.priceoye.pk/dizo-gopods-with-active-noise-cancellation-by-realme-techlife-pakistan-priceoye-hrbae-270x270.webp",
    discount: "9",
  },
  {
    id: 15,
    title: "G-Tide R2 Pro Smartwatch",
    price: "2,999",
    oldPrice: "4,999",
    image:
      "https://images.priceoye.pk/g-tide-r2-pro-smartwatch-pakistan-priceoye-8yr06-270x270.webp",
    discount: "1",
  },
  {
    id: 16,
    title: "Memobile ismart",
    price: "1,099",
    oldPrice: "1,999",
    image:
      "https://images.priceoye.pk/memobile-ismart-pakistan-priceoye-5q1at-270x270.webp",
    discount: "4",
  },
  {
    id: 17,
    title: "Mcdodo MC-423 Power Bank",
    price: "1,899",
    oldPrice: "2,999",
    image:
      "https://images.priceoye.pk/mcdodo-mc-423-20000mah-power-bank-pakistan-priceoye-r5tbc-270x270.webp",
    discount: "2",
  },
  {
    id: 18,
    title: "Dizo Watch Pro",
    price: "799",
    oldPrice: "1,499",
    image:
      "https://images.priceoye.pk/dizo-watch-pro-by-realme-techlife-pakistan-priceoye-3c5oq-270x270.webp",
    discount: "3",
  },
  {
    id: 19,
    title: "Zero Robo Earbuds",
    price: "7,999",
    oldPrice: "11,999",
    image:
      "https://images.priceoye.pk/zero-robo-earbuds-pakistan-priceoye-k8jnt-270x270.webp",
    discount: "54",
  },
  {
    id: 20,
    title: "Airox PB12 Powerbank",
    price: "1,299",
    oldPrice: "2,199",
    image:
      "https://images.priceoye.pk/airox-pb12-10000mah-strong-powerbank-pakistan-priceoye-2gl35-270x270.webp",
    discount: "12",
  },
  {
    id: 21,
    title: "Zero Crown Smartwatch",
    price: "2,499",
    oldPrice: "3,999",
    image:
      "https://images.priceoye.pk/zero-crown-smartwatch-pakistan-priceoye-h7bjx-270x270.webp",
    discount: "11",
  },
  {
    id: 22,
    title: "Baseus Bowie 35 ANC",
    price: "3,299",
    oldPrice: "5,499",
    image:
      "https://images.priceoye.pk/baseus-bowie-35-anc-true-wireless-earbuds-pakistan-priceoye-h6ln1-270x270.webp",
    discount: "33",
  },
  {
    id: 23,
    title: "Login L-200 Earbuds",
    price: "14,999",
    oldPrice: "19,999",
    image:
      "https://images.priceoye.pk/login-l-200-earbuds-pakistan-priceoye-w0yzw-270x270.webp",
    discount: "22",
  },
  {
    id: 24,
    title: "Login L-710 Power Bank",
    price: "2,899",
    oldPrice: "4,499",
    image:
      "https://images.priceoye.pk/login-l-710-22-5w-30000mah-2-built-in-cables-power-bank-pakistan-priceoye-v2rg8-270x270.webp",
    discount: "50",
  },
  {
    id: 25,
    title: "Sparx Neo 8",
    price: "2,199",
    oldPrice: "3,499",
    image:
      "https://images.priceoye.pk/sparx-neo-8-pakistan-priceoye-kkkb0-270x270.webp",
    discount: "24",
  },
  {
    id: 26,
    title: "Xtreme Rock 715",
    price: "1,799",
    oldPrice: "2,999",
    image:
      "https://images.priceoye.pk/xtreme-rock-715-earbuds-pakistan-priceoye-6wkm2-270x270.webp",
    discount: "28",
  },
  {
    id: 27,
    title: "Haino Teko Richard M10",
    price: "5,499",
    oldPrice: "8,999",
    image:
      "https://images.priceoye.pk/haino-teko-richard-m10-smart-watch-pakistan-priceoye-kphgu-270x270.webp",
    discount: "11",
  },
  {
    id: 28,
    title: "Hello Tech E500",
    price: "3,999",
    oldPrice: "6,499",
    image:
      "https://images.priceoye.pk/hello-tech-e500-pakistan-priceoye-9u1sl-270x270.webp",
    discount: "21",
  },
  {
    id: 29,
    title: "JBL Wave 200TWS",
    price: "17,999",
    oldPrice: "22,999",
    image:
      "https://images.priceoye.pk/jbl-wave-200tws-wireless-earbuds-pakistan-priceoye-1lky2-270x270.webp",
    discount: "33",
  },
  {
    id: 30,
    title: "Baseus Compact Power Bank",
    price: "2,599",
    oldPrice: "3,999",
    image:
      "https://images.priceoye.pk/baseus-compact-series-5000mah-20w-fast-charging-power-bank-pakistan-priceoye-0homq-270x270.webp",
    discount: "26",
  },
  {
    id: 31,
    title: "Xiaomi Redmi A5",
    price: "21,999",
    oldPrice: "25,500",
    image:
      "https://images.priceoye.pk/xiaomi-redmi-a5-pakistan-priceoye-4jqr9-270x270.webp",
    discount: "14",
  },
  {
    id: 32,
    title: "Techno Spark go",
    price: "22,999",
    oldPrice: "25,550",
    image:
      "https://images.priceoye.pk/tecno-spark-go-2-pakistan-priceoye-554fi-270x270.webp",
    discount: "10",
  },
  {
    id: 33,
    title: "nothing Cmf phone 1",
    price: "66,099",
    oldPrice: "75,112",
    image:
      "https://images.priceoye.pk/nothing-cmf-phone-1-pakistan-priceoye-6mo6r-270x270.webp",
    discount: "12",
  },
  {
    id: 34,
    title: "honor x6c",
    price: "29,749",
    oldPrice: "31,988",
    image:
      "https://images.priceoye.pk/honor-x6c-pakistan-priceoye-vixo7-270x270.webp",
    discount: "7",
  },
  {
    id: 35,
    title: "Samsung Galaxy Fit 3",
    price: "10,999",
    oldPrice: "16,665",
    image:
      "https://images.priceoye.pk/samsung-galaxy-fit-3-with-one-year-brand-warranty-pakistan-priceoye-1q534-270x270.webp",
    discount: "34",
  },
  {
    id: 36,
    title: "apple ipad 11 (A16)",
    price: "112,999",
    oldPrice: "125,554",
    image:
      "https://images.priceoye.pk/apple-ipad-11-a16-256gb-pakistan-priceoye-sq4n9-270x270.webp",
    discount: "10",
  },
  {
    id: 37,
    title: "VGR V-733 Hair Remover",
    price: "5,699",
    oldPrice: "9,998",
    image:
      "https://images.priceoye.pk/vgr-v-733-hair-remover-electric-epilator-pakistan-priceoye-goid7-270x270.webp",
    discount: "43",
  },
  {
    id: 38,
    title: "KM-6330 Grooming Kit",
    price: "1,649",
    oldPrice: "2,998",
    image:
      "https://images.priceoye.pk/kemei-km-6330-hair-beard-trimmer-3-in-1-pakistan-priceoye-kge42-270x270.webp",
    discount: "45",
  },
  {
    id: 39,
    title: "Tecno SPARK 30 Pro",
    price: "42,999",
    oldPrice: "48,862",
    image:
      "https://images.priceoye.pk/tecno-spark-30-pro-pakistan-priceoye-ptq0a-270x270.webp",
    discount: "12",
  },
  {
    id: 40,
    title: "Tecno SPARK Go 2",
    price: "22,999",
    oldPrice: "26,435",
    image:
      "https://images.priceoye.pk/tecno-spark-go-2-pakistan-priceoye-554fi-270x270.webp",
    discount: "13",
  },
  {
    id: 41,
    title: "Itel A100",
    price: "22,299",
    oldPrice: "38,446",
    image:
      "https://images.priceoye.pk/itel-a100-pakistan-priceoye-1daml-500x500.webp",
    discount: "42",
  },
  {
    id: 42,
    title: "Realme C85 Pro",
    price: "52,599",
    oldPrice: "90,687",
    image:
      "https://images.priceoye.pk/realme-c85-pro-pakistan-priceoye-cxlwg-500x500.webp",
    discount: "42",
  },
  {
    id: 43,
    title: "Samsung Galaxy A17",
    price: "51,199",
    oldPrice: "67,367",
    image:
      "https://images.priceoye.pk/samsung-galaxy-a17-pakistan-priceoye-idgtd-270x270.webp",
    discount: "24",
  },
  {
    id: 44,
    title: "Infinix Hot 60 Pro Plus",
    price: "61,999",
    oldPrice: "70,453",
    image:
      "https://images.priceoye.pk/infinix-hot-60-pro-plus-pakistan-priceoye-s0vme-270x270.webp",
    discount: "12",
  },
  {
    id: 45,
    title: "Honor X6c",
    price: "29,749",
    oldPrice: "34,194",
    image:
      "https://images.priceoye.pk/honor-x6c-pakistan-priceoye-hrksg-500x500.webp",
    discount: "13",
  },
  {
    id: 46,
    title: "Xiaomi Redmi Note 14",
    price: "47,500",
    oldPrice: "55,882",
    image:
      "https://images.priceoye.pk/xiaomi-redmi-note-14-pakistan-priceoye-eli5s-500x500.webp",
    discount: "15",
  },
  {
    id: 47,
    title: "Xiaomi Redmi Pad 2 Wifi",
    price: "55,900",
    oldPrice: "79,999",
    image:
      "https://images.priceoye.pk/xiaomi-redmi-pad-2-8-256-wifi-1-year-warranty-pakistan-priceoye-82efz-270x270.webp",
    discount: "30",
  },
  {
    id: 48,
    title: "Xiaomi Smart Air Purifier 4 Lite",
    price: "10,799",
    oldPrice: "21,174",
    image:
      "https://images.priceoye.pk/xiaomi-smart-air-purifier-4-lite-filter-pro-pakistan-priceoye-yvkpo-270x270.webp",
    discount: "49",
  },
  {
    id: 49,
    title: "Xiaomi 15T",
    price: "157,999",
    oldPrice: "169,891",
    image: "https://static.priceoye.pk/images/product-placeholder.gif",
    discount: "7",
  },
  {
    id: 50,
    title: "Xiaomi Redmi Pad 2 8/256",
    price: "55,499",
    oldPrice: "65,292",
    image:
      "https://images.priceoye.pk/xiaomi-redmi-pad-2-8-256-wifi-pakistan-priceoye-uh13s-270x270.webp",
    discount: "15",
  },
  {
    id: 51,
    title: "Xiaomi 20000mAh Power Bank",
    price: "6,499",
    oldPrice: "12,035",
    image:
      "https://images.priceoye.pk/xiaomi-pb2020mi-20000mah-22-5w-fast-charging-built-in-cable-power-bank-pakistan-priceoye-2p2ic-270x270.webp",
    discount: "46",
  },
  {
    id: 52,
    title: "Xiaomi Redmi 15",
    price: "40,449",
    oldPrice: "45,964",
    image:
      "https://images.priceoye.pk/xiaomi-redmi-15-pakistan-priceoye-se2kc-270x270.webp",
    discount: "12",
  },
  {
    id: 53,
    title: "Xiaomi Smart Air Purifier Elite Filter",
    price: "14,799",
    oldPrice: "29,017",
    image:
      "https://images.priceoye.pk/xiaomi-smart-air-purifier-4-lite-filter-pakistan-priceoye-p3q2a-500x500.webp",
    discount: "49",
  },
];

const App = () => {
  return (
    <div className="bg-[#f1f3f6]  pb-[140px] md:pb-0">
      <Navbar list={list} />
      <Popup />
      <Slide />
      <AutoPlay />
      <Card />
      <Imege />
      <Cards3 />
      <Cards4 />
      <Cards5 />
      <Cards6 />
      <Image1 />
      <Cards7 />
      <Cards8 />
      <Cards9 />
      <Bar />
      <Cards11 list={list} />
      <Cards10 />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default App;
