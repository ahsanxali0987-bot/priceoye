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
    title: "XZone X-W34 25W PD Fast Charging Wireless 10000Mah",
    price: "3,499",
    oldPrice: "4,999",
    image:
      "https://images.priceoye.pk/xzone-x-w34-25w-pd-fast-charging-wireless-10000mah-powerbank-pakistan-priceoye-4f9t6-270x270.webp",
    discount: "15",
  },
  {
    id: 9,
    title: "Amaya WF54 20W 10000mAh Power Bank",
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
    title: "itel BudsAir Pro Wireless Earbuds",
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
    title: "Sovo Rocco 10000mAh Power Bank SPB-611",
    price: "1,799",
    oldPrice: "2,999",
    image:
      "https://images.priceoye.pk/sovo-rocco-10000mah-power-bank-spb-611-pakistan-priceoye-7saqi-270x270.webp",
    discount: "8",
  },
  {
    id: 14,
    title: "Dizo GoPods with Active Noise Cancellation by Realme TechLife",
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
    title: "Mcdodo MC-423 20000mAh Power Bank",
    price: "1,899",
    oldPrice: "2,999",
    image:
      "https://images.priceoye.pk/mcdodo-mc-423-20000mah-power-bank-pakistan-priceoye-r5tbc-270x270.webp",
    discount: "2",
  },
  {
    id: 18,
    title: "Dizo Watch Pro by Realme TechLife",
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
    title: "Airox PB12 10000mAh Strong Powerbank",
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
    title: "Baseus Bowie 35 ANC True Wireless Earbuds",
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
    title: "Login L-710 22.5W 30000mAh 2 Built-in Cables Power Bank",
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
    title: "Xtreme Rock 715 Earbuds",
    price: "1,799",
    oldPrice: "2,999",
    image:
      "https://images.priceoye.pk/xtreme-rock-715-earbuds-pakistan-priceoye-6wkm2-270x270.webp",
    discount: "28",
  },
  {
    id: 27,
    title: "Haino Teko Richard M10 Smart Watch",
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
    title: "JBL Wave 200TWS Wireless Earbuds",
    price: "17,999",
    oldPrice: "22,999",
    image:
      "https://images.priceoye.pk/jbl-wave-200tws-wireless-earbuds-pakistan-priceoye-1lky2-270x270.webp",
    discount: "33",
  },
  {
    id: 30,
    title: "Baseus Compact Series 5000mAh 20W Fast Charging Power Bank",
    price: "2,599",
    oldPrice: "3,999",
    image:
      "https://images.priceoye.pk/baseus-compact-series-5000mah-20w-fast-charging-power-bank-pakistan-priceoye-0homq-270x270.webp",
    discount: "26",
  },
];

const App = () => {
  return (
    <div className="bg-[#f1f3f6]">
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
    </div>
  );
};

export default App;
