<template>
  <section id="how" class="story-section pb-12">
    <div class="grid min-h-[calc(100vh-10rem)] grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.7fr_0.82fr] lg:items-center">
      <aside class="space-y-5">
        <p class="section-number">04</p>
        <h2 class="section-title">How</h2>

        <div class="copy-zone max-w-[22rem]" data-copy-marker="COPY AREA: HOW INTRO">
          <div class="copy-zone-inner space-y-4">
            <p class="type-kicker">The portable tools that make work, travel, and daily life possible.</p>
            <p class="type-kicker normal-case leading-6 tracking-normal">
              Digital nomads carry a lifestyle inside a backpack. Their toolkit is not only about
              technology, but also mobility, independence, and flexibility.
            </p>
          </div>
        </div>

        <div class="paper-card max-w-[13rem] rotate-[-2deg] p-4">
          <p class="hand-note text-[1.15rem]">Work from anywhere.<br />Live fully. &#9825;</p>
        </div>
      </aside>

      <div class="relative min-h-[42rem] rounded-[2rem] bg-white/20 p-4 md:min-h-[48rem]">
        <button
          v-for="(item, index) in toolkitItems"
          :key="item.name"
          class="toolkit-item group"
          type="button"
          :style="getItemStyle(item)"
          @mouseenter="setActiveTool(item)"
          @focus="setActiveTool(item)"
        >
          <span class="paper-label absolute -top-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap py-1 text-[0.62rem]">
            {{ index + 1 }}. {{ item.name }}
          </span>
          <span class="toolkit-image-grid" :class="item.images.length > 1 ? 'has-multiple' : ''">
            <img v-for="image in item.images" :key="image.src" :src="image.src" :alt="image.alt" />
          </span>
        </button>
      </div>

      <aside class="space-y-5 self-center">
        <Transition name="info-card" mode="out-in">
          <article :key="activeTool.name" class="paper-card p-5">
            <div class="copy-zone" data-copy-marker="COPY AREA: TOOLKIT NOTES">
              <div class="copy-zone-inner">
                <h3 class="font-type text-[0.78rem] uppercase tracking-[0.08em]">Toolkit Notes</h3>
                <h4 class="mt-4 font-hand text-3xl text-ember">{{ activeTool.name }}</h4>
                <p class="mt-3 type-kicker normal-case leading-6 tracking-normal">{{ activeTool.description }}</p>
                <p class="mt-4 hand-note text-[1.05rem]">{{ activeTool.note }}</p>
              </div>
            </div>
          </article>
        </Transition>
      </aside>
    </div>

  </section>
</template>

<script setup>
import { ref } from "vue";

import airbnbImage from "../How/Accommodatioin-Airbnb.png";
import wifiImage from "../How/Core-WiFi.png";
import snsImage from "../How/SNS.jpg";
import uberImage from "../How/Transpotation-Uber.png";
import coworkingImage from "../How/Work-Coworking-spaces.jpg";
import freelancerImage from "../How/Work-Freelancer-dark.png";
import taskrabbitImage from "../How/Work-Taskrabbit-big.jpg";
import upworkImage from "../How/Work-Upwork.png";
import passPort from "../How/Passport-and-visa.jpg"
import bankcard from "../How/bankcard.jpg"

const toolkitItems = [
  {
    name: "Laptop",
    x: 42,
    y: 35,
    w: 230,
    h: 150,
    rotate: 3,
    note: "Remote work core",
    description:
      "Main workspace for remote jobs, freelance work, online businesses, coding, design, writing, and communication.",
    images: [{ src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80", alt: "Laptop" }],
  },
  {
    name: "Smartphone",
    x: 72,
    y: 22,
    w: 90,
    h: 145,
    rotate: 12,
    note: "Always connected",
    description: "Navigation, messaging, banking, translation, tickets, and everyday connection while moving.",
    images: [{ src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80", alt: "Smartphone" }],
  },
  {
    name: "Passport",
    x: 82,
    y: 32,
    w: 112,
    h: 148,
    rotate: 10,
    note: "Border access",
    description: "Represents mobility, visas, borders, identity, and the legal side of living across countries.",
    images: [{ src: passPort, alt: "Passport" }],
  },
  {
    name: "Headphones",
    x: 18,
    y: 30,
    w: 140,
    h: 115,
    rotate: -8,
    note: "Focus mode",
    description: "Supports focus in cafes, airports, coworking spaces, and shared rooms.",
    images: [{ src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80", alt: "Headphones" }],
  },
  {
    name: "Power Bank",
    x: 34,
    y: 56,
    w: 160,
    h: 120,
    rotate: 12,
    note: "Battery backup",
    description: "Keeps devices alive during long travel days, airport waits, and outdoor work sessions.",
    images: [{ src: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80", alt: "Power bank" }],
  },
  {
    name: "Notebook",
    x: 52,
    y: 52,
    w: 145,
    h: 125,
    rotate: 7,
    note: "Planning on paper",
    description: "Used for planning routes, writing ideas, budgeting, and keeping personal reflections.",
    images: [{ src: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80", alt: "Notebook" }],
  },
  {
    name: "Coffee Cup",
    x: 20,
    y: 45,
    w: 110,
    h: 112,
    rotate: 8,
    note: "Cafe office",
    description: "Symbolizes cafe work culture, temporary offices, and everyday routines in new cities.",
    images: [{ src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80", alt: "Coffee cup" }],
  },
  {
    name: "Backpack",
    x: 18,
    y: 66,
    w: 160,
    h: 190,
    rotate: 5,
    note: "Portable home",
    description: "The portable home: everything important must fit inside one carryable system.",
    images: [{ src: "https://i.pinimg.com/1200x/e7/52/38/e75238579326c7cf84dc3a13ac807679.jpg", alt: "Backpack" }],
  },
  {
    name: "Bank Card",
    x: 40,
    y: 70,
    w: 125,
    h: 82,
    rotate: -4,
    note: "Money flow",
    description: "Supports global payments, online income, currency exchange, and financial independence.",
    images: [{ src: bankcard, alt: "Bank card" }],
  },
  {
    name: "Camera",
    x: 68,
    y: 55,
    w: 130,
    h: 105,
    rotate: -30,
    note: "Story capture",
    description: "Captures places, creates content, documents lifestyle, and supports creative work.",
    images: [{ src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80", alt: "Camera" }],
  },
  {
    name: "Universal Adapter",
    x: 58,
    y: 70,
    w: 95,
    h: 80,
    rotate: 7,
    note: "Fits anywhere",
    description: "Connects the nomad's tools to different countries and infrastructures.",
    images: [{ src: "https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=700&q=80", alt: "Universal adapter" }],
  },
  {
    name: "Freelancer / Taskrabbit / Upwork",
    x: 35,
    y: 20,
    w: 170,
    h: 116,
    rotate: -4,
    note: "",
    description: "",
    images: [
      { src: freelancerImage, alt: "Freelancer chart" },
      { src: taskrabbitImage, alt: "Taskrabbit chart" },
      { src: upworkImage, alt: "Upwork chart" },
    ],
  },
  {
    name: "Airbnb",
    x: 65,
    y: 40,
    w: 120,
    h: 128,
    rotate: 6,
    note: "",
    description: "",
    images: [{ src: airbnbImage, alt: "Airbnb chart" }],
  },
  {
    name: "Wi-Fi",
    x: 58,
    y: 20,
    w: 100,
    h: 100,
    rotate: 7,
    note: "Connectivity safety",
    description: "Provides internet access when cafes, hotels, or public networks are unreliable.",
    images: [{ src: wifiImage, alt: "Wi-Fi chart" }],
  },
  {
    name: "SNS",
    x: 85,
    y: 54,
    w: 122,
    h: 84,
    rotate: -9,
    note: "",
    description: "",
    images: [{ src: snsImage, alt: "SNS chart" }],
  },
  {
    name: "Transportation Uber",
    x: 78,
    y: 70,
    w: 124,
    h: 86,
    rotate: 5,
    note: "",
    description: "",
    images: [{ src: uberImage, alt: "Uber chart" }],
  },
  {
    name: "Coworking Spaces",
    x: 48,
    y: 85,
    w: 370,
    h: 150,
    rotate: -3,
    note: "",
    description: "",
    images: [{ src: coworkingImage, alt: "Coworking spaces chart" }],
  },
];

const connectorLines = [
  "M250 165 C210 210 190 245 170 285",
  "M408 170 C470 188 510 214 555 250",
  "M340 315 C322 350 286 374 225 388",
  "M492 332 C530 358 570 380 610 410",
  "M462 448 C488 474 518 500 552 520",
];

const activeTool = ref(toolkitItems[0]);

function getItemStyle(item) {
  return {
    left: `${item.x}%`,
    top: `${item.y}%`,
    width: `${item.w}px`,
    height: `${item.h}px`,
    transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
  };
}

function setActiveTool(item) {
  activeTool.value = item;
}

</script>

<style scoped>
.toolkit-item {
  position: absolute;
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
  filter: drop-shadow(0 14px 18px rgba(35, 29, 24, 0.24));
  transition: filter 180ms ease, scale 180ms ease;
}

.toolkit-item:hover,
.toolkit-item:focus-visible {
  filter: drop-shadow(0 20px 24px rgba(35, 29, 24, 0.32));
  outline: none;
  scale: 1.05;
  z-index: 20;
}

.toolkit-image-grid {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(25, 20, 16, 0.16);
  clip-path: polygon(5% 6%, 94% 2%, 98% 88%, 11% 98%, 1% 48%);
  overflow: hidden;
  background: #fffaf1;
}

.toolkit-image-grid img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.toolkit-image-grid.has-multiple {
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 2px;
  padding: 3px;
}

.toolkit-image-grid.has-multiple img {
  object-fit: contain;
  background: white;
}

.info-card-enter-active,
.info-card-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.info-card-enter-from,
.info-card-leave-to {
  opacity: 0;
  transform: translateY(14px);
}

@media (max-width: 768px) {
  .toolkit-item {
    scale: 0.74;
  }
}
</style>
