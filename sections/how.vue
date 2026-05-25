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
        <svg class="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 760 620" aria-hidden="true">
          <g fill="none" stroke="#181512" stroke-dasharray="5 8" stroke-width="1.3" opacity="0.55">
            <path v-for="line in connectorLines" :key="line" :d="line" />
          </g>
        </svg>

        <button
          v-for="(item, index) in toolkitItems"
          :key="item.name"
          class="toolkit-item group"
          type="button"
          :style="item.style"
          @mouseenter="setActiveTool(item)"
          @focus="setActiveTool(item)"
        >
          <span class="paper-label absolute -top-8 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap py-1 text-[0.62rem]">
            {{ index + 1 }}. {{ item.name }}
          </span>
          <span class="toolkit-image" :style="{ backgroundImage: `url(${item.image})` }"></span>
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

    <div class="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.85fr_0.9fr]">
      <div>
        <h3 class="font-display text-4xl font-semibold uppercase">Platform Charts</h3>
        <p class="type-kicker mt-3 normal-case leading-6 tracking-normal">
          Hover over a chart group to show its information area.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <button
          v-for="group in chartGroups"
          :key="group.name"
          class="paper-card min-h-[14rem] p-3 text-left transition duration-200 hover:-translate-y-1 hover:shadow-card focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
          type="button"
          @mouseenter="setActiveChart(group)"
          @focus="setActiveChart(group)"
        >
          <div class="grid gap-2" :class="group.images.length > 1 ? 'grid-cols-3' : 'grid-cols-1'">
            <img
              v-for="image in group.images"
              :key="image.src"
              class="h-32 w-full rounded-sm border border-black/10 object-contain bg-white"
              :src="image.src"
              :alt="image.alt"
            />
          </div>
          <p class="mt-4 font-type text-[0.72rem] uppercase tracking-[0.08em]">{{ group.name }}</p>
        </button>
      </div>

      <Transition name="info-card" mode="out-in">
        <article :key="activeChart.name" class="paper-card p-5">
          <div class="copy-zone" data-copy-marker="COPY AREA: EMPTY CHART NOTES">
            <div class="copy-zone-inner">
              <p class="font-type text-[0.78rem] uppercase tracking-[0.08em]">{{ activeChart.name }}</p>
              <div class="empty-copy-slot mt-4"></div>
            </div>
          </div>
        </article>
      </Transition>
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

const toolkitItems = [
  {
    name: "Laptop",
    note: "Remote work core",
    description:
      "Main workspace for remote jobs, freelance work, online businesses, coding, design, writing, and communication.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
    style: { left: "33%", top: "12%", width: "230px", height: "150px", transform: "rotate(3deg)" },
  },
  {
    name: "Smartphone",
    note: "Always connected",
    description: "Navigation, messaging, banking, translation, tickets, and everyday connection while moving.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    style: { left: "66%", top: "19%", width: "78px", height: "145px", transform: "rotate(12deg)" },
  },
  {
    name: "Passport",
    note: "Border access",
    description: "Represents mobility, visas, borders, identity, and the legal side of living across countries.",
    image: "https://images.unsplash.com/photo-1577985043696-8bd54d8f093f?auto=format&fit=crop&w=700&q=80",
    style: { left: "80%", top: "26%", width: "112px", height: "148px", transform: "rotate(10deg)" },
  },
  {
    name: "Headphones",
    note: "Focus mode",
    description: "Supports focus in cafes, airports, coworking spaces, and shared rooms.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    style: { left: "17%", top: "25%", width: "135px", height: "115px", transform: "rotate(-8deg)" },
  },
  {
    name: "Power Bank",
    note: "Battery backup",
    description: "Keeps devices alive during long travel days, airport waits, and outdoor work sessions.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    style: { left: "28%", top: "50%", width: "78px", height: "150px", transform: "rotate(-12deg)" },
  },
  {
    name: "Notebook",
    note: "Planning on paper",
    description: "Used for planning routes, writing ideas, budgeting, and keeping personal reflections.",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=80",
    style: { left: "53%", top: "47%", width: "145px", height: "125px", transform: "rotate(-7deg)" },
  },
  {
    name: "Coffee Cup",
    note: "Cafe office",
    description: "Symbolizes cafe work culture, temporary offices, and everyday routines in new cities.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80",
    style: { left: "72%", top: "48%", width: "110px", height: "112px", transform: "rotate(8deg)" },
  },
  {
    name: "Backpack",
    note: "Portable home",
    description: "The portable home: everything important must fit inside one carryable system.",
    image: "https://i.pinimg.com/1200x/e7/52/38/e75238579326c7cf84dc3a13ac807679.jpg",
    style: { left: "14%", top: "58%", width: "160px", height: "190px", transform: "rotate(5deg)" },
  },
  {
    name: "Bank Card",
    note: "Money flow",
    description: "Supports global payments, online income, currency exchange, and financial independence.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=700&q=80",
    style: { left: "39%", top: "74%", width: "125px", height: "82px", transform: "rotate(2deg)" },
  },
  {
    name: "Camera",
    note: "Story capture",
    description: "Captures places, creates content, documents lifestyle, and supports creative work.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
    style: { left: "78%", top: "69%", width: "130px", height: "105px", transform: "rotate(-6deg)" },
  },
  {
    name: "Universal Adapter",
    note: "Fits anywhere",
    description: "Connects the nomad's tools to different countries and infrastructures.",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=700&q=80",
    style: { left: "58%", top: "78%", width: "95px", height: "108px", transform: "rotate(7deg)" },
  },
  {
    name: "Wi-Fi Hotspot",
    note: "Network safety",
    description: "Provides internet access when cafes, hotels, or public networks are unreliable.",
    image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=700&q=80",
    style: { left: "89%", top: "84%", width: "118px", height: "76px", transform: "rotate(4deg)" },
  },
];

const connectorLines = [
  "M250 165 C210 210 190 245 170 285",
  "M408 170 C470 188 510 214 555 250",
  "M340 315 C322 350 286 374 225 388",
  "M492 332 C530 358 570 380 610 410",
  "M462 448 C488 474 518 500 552 520",
];

const chartGroups = [
  {
    name: "Freelancer / Taskrabbit / Upwork",
    images: [
      { src: freelancerImage, alt: "Freelancer chart" },
      { src: taskrabbitImage, alt: "Taskrabbit chart" },
      { src: upworkImage, alt: "Upwork chart" },
    ],
  },
  { name: "Airbnb", images: [{ src: airbnbImage, alt: "Airbnb chart" }] },
  { name: "Core Wi-Fi", images: [{ src: wifiImage, alt: "Core Wi-Fi chart" }] },
  { name: "SNS", images: [{ src: snsImage, alt: "SNS chart" }] },
  { name: "Transportation Uber", images: [{ src: uberImage, alt: "Uber chart" }] },
  { name: "Coworking Spaces", images: [{ src: coworkingImage, alt: "Coworking spaces chart" }] },
];

const activeTool = ref(toolkitItems[0]);
const activeChart = ref(chartGroups[0]);

function setActiveTool(item) {
  activeTool.value = item;
}

function setActiveChart(group) {
  activeChart.value = group;
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

.toolkit-image {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(25, 20, 16, 0.16);
  background-position: center;
  background-size: cover;
  clip-path: polygon(5% 6%, 94% 2%, 98% 88%, 11% 98%, 1% 48%);
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
