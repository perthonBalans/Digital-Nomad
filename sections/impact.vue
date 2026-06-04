<template>
  <section id="impact" class="story-section">
    <div class="grid min-h-[calc(100vh-10rem)] grid-cols-1 gap-8 lg:grid-cols-[0.85fr_2fr] lg:items-end">
      <aside class="space-y-5">
        <p class="section-number">05</p>
        <h2 class="section-title">Impact</h2>
        <div class="space-y-4">
          <p class="type-kicker">Every choice shapes a ripple.</p>
          <p class="type-kicker normal-case leading-6 tracking-normal">
            Digital nomads bring opportunities--and challenges.
          </p>
        </div>
        <p class="hand-note max-w-[15rem] rotate-[-5deg]">New world, new concerns, new possibilities.</p>
      </aside>

      <div class="grid gap-6 md:grid-cols-3">
        <article v-for="topic in topics" :key="topic.title" class="paper-card p-5">
          <h3
            class="absolute place-items-center left-1/2 bottom-[17.5rem] -translate-x-1/2 rounded-sm px-5 py-1 font-type text-[0.7rem] uppercase tracking-[0.08em] text-white shadow-card"
            :class="topic.badgeClass"
          >
            {{ topic.title }}
          </h3>

          <div class="grid gap-5">
            <div>
              <h4 class="font-type text-[0.8rem] uppercase tracking-[0.08em] text-sage">Pros</h4>
              <ul class="mt-2 list-disc pl-5 font-type text-[0.72rem] leading-5">
                <li v-for="item in topic.pros" :key="item">{{ item }}</li>
              </ul>
            </div>

            <div>
              <h4 class="font-type text-[0.8rem] uppercase tracking-[0.08em] text-ember">Cons</h4>
              <ul class="mt-2 list-disc pl-5 font-type text-[0.72rem] leading-5">
                <li v-for="item in topic.cons" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="big-mac-index mt-16 min-h-[calc(100vh-10rem)]">
      <div class="grid gap-10 xl:grid-cols-[1.05fr_1.35fr_1fr] xl:items-center">
        <aside class="space-y-14">
          <div>
            <h3 class="font-type text-3xl uppercase tracking-[0.04em]">Big Mac Index</h3>
            <div class="mt-5 h-[2px] w-16 bg-ember"></div>
            <p class="mt-7 max-w-[40rem] font-type text-[1.05rem] leading-8">
              The Big Mac Index is used as an informal way to compare purchasing power parity between
              currencies.
            </p>
          </div>

          <p class="max-w-[28rem] font-type text-[1.35rem] leading-[2.15]">
            Cost of living is one of the biggest reasons digital nomads choose where to go and stay.
          </p>

          <p class="max-w-[28rem] font-type text-[1.35rem] leading-[2.15]">
            Their mobility is not only about freedom - it is also shaped by passport privilege, strong
            currency, and unequal purchasing power.
          </p>
        </aside>

        <div class="relative min-h-[34rem]">
          <div class="burger-scene absolute left-1/2 top-[30%] h-[22rem] w-[34rem] max-w-full -translate-x-1/2 -translate-y-1/2">
            <img
              v-for="burger in bigMacImages"
              :key="burger.key"
              class="big-mac-photo"
              :src="bigMacImage"
              :alt="burger.alt"
              :style="getBigMacStyle(burger)"
            />
          </div>

          <div class="comparison-layout grid gap-8 text-center md:grid-cols-2" :style="getComparisonLayoutStyle()">
            <article v-for="item in burgerComparison" :key="item.country" class="min-w-[13rem] font-type">
              <div class="flex items-center justify-center gap-4">
                <img class="flag" :src="item.flag" :alt="`${item.country} flag`" />
                <h4 class="text-2xl uppercase tracking-[0.04em]">{{ item.country }}</h4>
              </div>
              <p class="mt-4 text-[0.85rem]">Big Mac</p>
              <p class="mt-2 text-5xl text-ember">{{ item.price }}</p>
              <p class="mt-5 text-[0.78rem]">Avg. Monthly Net Salary</p>
              <p class="mt-2 text-3xl">{{ item.salary }}</p>
            </article>
          </div>
        </div>

        <aside class="space-y-16">
          <div class="grid gap-8 md:grid-cols-3 xl:grid-cols-3">
            <article v-for="factor in mobilityFactors" :key="factor.title" class="text-center font-type" :style="getMobilityFactorStyle(factor)">
              <img class="mobility-logo mx-auto" :src="factor.logo" :alt="`${factor.title} icon`" :style="getMobilityLogoStyle(factor)" />
              <h4 class="mt-5 text-xl leading-tight">{{ factor.title }}</h4>
              <p class="mt-6 text-[0.7rem] leading-5">{{ factor.text }}</p>
            </article>
          </div>

          <div class="ml-auto max-w-[32rem]">
            <div class="flex gap-6">
              <span class="font-hand text-5xl text-ember">*</span>
              <p class="font-hand text-2xl leading-[1.9] text-ink">
                Digital nomads can earn in stronger currencies and choose to live where their money goes
                further.
              </p>
            </div>
            <div class="ml-16 mt-5 h-[2px] w-28 rotate-[-3deg] bg-ember"></div>
          </div>
        </aside>
      </div>
    </div>

    <div class="gentrification-section mt-20 min-h-[calc(100vh-10rem)]">
      <div class="relative min-h-[48rem]">
        <h3 class="font-type text-3xl uppercase tracking-[0.04em]">
          Gentrification
        </h3>

        <article
          v-for="note in gentrificationNotes"
          :key="note.title"
          class="gentrification-note"
          :style="getGentrificationNoteStyle(note)"
        >
          <p class="font-type text-[0.72rem] uppercase tracking-[0.08em] text-ember">{{ note.case }}</p>
          <h4 class="mt-3 font-type text-[1rem] uppercase leading-tight tracking-[0.05em]">{{ note.title }}</h4>
          <p class="mt-5 font-hand text-[1.2rem] leading-[1.45] text-ink">"{{ note.quote }}"</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import bigMacImage from "../Big-Mac.png";
import dollarStick from "../dollar-stick.png";
import idFlag from "../id.svg";
import mapPinStick from "../map-pin-stick.png";
import passportStick from "../passport-stick.png";
import usFlag from "../us.svg";

const topics = [
  {
    title: "Economic Impact",
    badgeClass: "bg-sage",
    pros: ["Increases tourism revenue", "Supports local businesses", "Creates jobs", "Mitigates seasonality"],
    cons: ["Rising cost of living", "Increased rent & housing prices",],
  },
  {
    title: "Cultural & Social Impact",
    badgeClass: "bg-ocean",
    pros: ["Cultural exchange", "Diversity & global mindset", "Knowledge communication"],
    cons: ["Gentrification", "Noise pollution", "Pressure on infrastructure (e.g. traffic jams)", "Lifestyle conflicts", "Superficial connections", ],
  },
  {
    title: "Technological Impact",
    badgeClass: "bg-clay",
    pros: ["Attracts digital multinational companies' infrastructure investment", "Increases exchange of knowledge","Accelerates the adoption of digital skills"],
    cons: ["Waste increase"],
  },
];

const mobilityFactors = [
  {
    logo: passportStick,
    logoW: "4.5rem",
    logoH: "4.5rem",
    zoneOffsetY: "0rem",
    title: "Superior Passport",
    text: "Visa-free access and mobility open more doors.",
  },
  {
    logo: mapPinStick,
    logoW: "4.5rem",
    logoH: "4.5rem",
    zoneOffsetY: "3rem",
    title: "Lower Cost Destination",
    text: "Lower living costs mean a higher quality of life.",
  },
  {
    logo: dollarStick,
    logoW: "4.5rem",
    logoH: "4.5rem",
    zoneOffsetY: "0rem",
    title: "Strong Currency",
    text: "Earning in USD, EUR, GBP, etc. gives more spending power.",
  },
];

const burgerComparison = [
  {
    country: "United States",
    price: "$5.79",
    salary: "$5,627",
    flag: usFlag,
  },
  {
    country: "Indonesia",
    price: "$2.54",
    salary: "$620",
    flag: idFlag,
  },
];

// Adjust the whole comparison block here.
// x/y are percentages relative to the center column container.
const comparisonLayout = {
  x: 12,
  y: 100,
};

// Adjust Big Mac image geometry here.
// x/y are percentages inside .burger-scene. w/h are CSS lengths.
const bigMacImages = [
  {
    key: "united-states-burger",
    alt: "Large Big Mac representing United States price",
    x: 35,
    y: 38,
    w: "24rem",
    h: "20rem",
  },
  {
    key: "indonesia-burger",
    alt: "Smaller Big Mac representing Indonesia price",
    x: 83,
    y: 54,
    w: "12rem",
    h: "10rem",
  },
];

// Adjust gentrification note placement here.
// x/y are percentages inside the gentrification canvas; degree controls rotation.
const gentrificationNotes = [
  {
    case: "Case 1",
    title: "The Airbnb Illusion",
    x: 17,
    y: 26,
    degree: -4,
    quote:
      "A lobby sign stated: 'NOT A HOTEL. Day/week rentals NOT ALLOWED.' Yet laptops and western visitors filled the space. When confronted, the owner simply said, 'What can you do? Money talks.'",
  },
  {
    case: "Case 2",
    title: "Strangers in Hometown",
    x: 51,
    y: 18,
    degree: 3,
    quote:
      "When you are Thai, you walk into a restaurant and all of them are foreigners, and you do not know any of them. Sometimes Thai people rather avoid that.",
  },
  {
    case: "Case 3",
    title: "First-World Exploits",
    x: 85,
    y: 30,
    degree: -3,
    quote:
      "People from first-world countries come here and don't learn a word of language. They use these exploits and take advantage of a life most Thai people cannot afford.",
  },
  {
    case: "Case 4",
    title: "Privilege Inertia",
    x: 17,
    y: 83,
    degree: 2,
    quote:
      "They didn't wear masks or follow regulations. They were so used to exercising privilege that when checkpoints picked them out, they thought racism was involved. They didn't care.",
  },
  {
    case: "Case 5",
    title: "Popping-up Spaces",
    x: 50,
    y: 92,
    degree: -5,
    quote:
      "Because there are a lot of digital nomads in town, there have been many coworking spaces that just suddenly popped up everywhere in Chiang Mai.",
  },
  {
    case: "Case 6",
    title: "The Hub Transformation",
    x: 84,
    y: 94,
    degree: 4,
    quote:
      "Before Nimman became a digital nomad area, it was a chic, hipster area for young locals. Now cafes opened up, and it became a digital nomad hub.",
  },
];

function getBigMacStyle(item) {
  return {
    left: `${item.x}%`,
    top: `${item.y}%`,
    width: item.w,
    height: item.h,
  };
}

function getComparisonLayoutStyle() {
  return {
    left: `${comparisonLayout.x}%`,
    top: `${comparisonLayout.y}%`,
  };
}

function getMobilityLogoStyle(item) {
  return {
    width: item.logoW,
    height: item.logoH,
  };
}

function getMobilityFactorStyle(item) {
  return {
    transform: `translateY(${item.zoneOffsetY})`,
  };
}

function getGentrificationNoteStyle(item) {
  return {
    left: `${item.x}%`,
    top: `${item.y}%`,
    transform: `translate(-50%, -50%) rotate(${item.degree}deg)`,
  };
}
</script>

<style scoped>
.big-mac-index {
  border-top: 1px solid rgba(17, 16, 14, 0.08);
  padding-top: 6rem;
}

.gentrification-section {
  border-top: 1px solid rgba(17, 16, 14, 0.08);
  padding-top: 5rem;
}

.gentrification-note {
  position: absolute;
  width: min(24rem, 32vw);
  min-height: 13rem;
  padding: 1.35rem 1.45rem;
  border: 1px solid rgba(31, 25, 20, 0.12);
  background: #f7eddd;
  box-shadow: 0 16px 26px rgba(25, 20, 16, 0.14);
}

.gentrification-note::before {
  content: "";
  position: absolute;
  top: -11px;
  left: 38%;
  width: 5.5rem;
  height: 1.25rem;
  background: rgba(231, 202, 164, 0.78);
  transform: rotate(-4deg);
}

.big-mac-photo {
  position: absolute;
  transform: translate(-50%, -50%);
  object-fit: contain;
  filter: drop-shadow(0 16px 18px rgba(29, 23, 17, 0.16));
}

.mobility-logo {
  display: block;
  object-fit: contain;
}

.comparison-layout {
  position: absolute;
  transform: translateY(-100%);
}

.flag {
  display: block;
  width: 3rem;
  height: 2rem;
  border: 1px solid rgba(17, 16, 14, 0.14);
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(17, 16, 14, 0.08);
}

@media (max-width: 768px) {
  .burger-scene {
    position: relative;
    left: auto;
    top: auto;
    height: 24rem;
    transform: none;
  }

  .big-mac-photo {
    max-width: none;
  }

  .gentrification-note {
    position: relative;
    left: auto !important;
    top: auto !important;
    width: 100%;
    margin-top: 1.2rem;
    transform: none !important;
  }
}
</style>
