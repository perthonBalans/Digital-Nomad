<template>
  <section id="where" class="story-section">
    <div class="grid min-h-[calc(100vh-10rem)] grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.6fr_0.85fr] lg:items-center">
      <aside class="space-y-5">
        <p class="section-number">03</p>
        <h2 class="section-title">Where?</h2>

        <div class="max-w-[23rem]">
          <div class="space-y-4">
            <p class="type-kicker">POPULAR PLACES DIGITAL NOMADS CALL HOME (FOR NOW)</p>
            <p class="type-kicker normal-case leading-6 tracking-normal">
              From bustling cities to quiet islands, these destinations offer the perfect mix of
              lifestyle, affordability, connectivity, and community.
            </p>
            <p class="paper-label normal-case tracking-normal">Hover over a country to explore why it attracts digital nomads.</p>
          </div>
        </div>

        <p class="hand-note max-w-[16rem] rotate-[-4deg] pt-4">Whenever a country opens up, it attracts digital nomads.</p>
      </aside>

      <div class="world-map-panel relative min-h-[35rem] rounded-[2rem] p-3 md:min-h-[43rem] md:p-5">
        <div
          class="world-map-svg"
          @mouseover="handleMapTarget"
          @focusin="handleMapTarget"
          v-html="worldMapMarkup"
        ></div>

        <div
          v-for="label in labels"
          :key="label.name"
          class="paper-label pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
          :style="{ left: label.left, top: label.top }"
        >
          {{ label.name }}
        </div>
      </div>

      <aside class="self-center">
        <Transition name="info-card" mode="out-in">
          <article :key="activeDestination.name" class="paper-card p-5">
            <figure class="polaroid rotate-[2deg]">
              <img class="h-44" :src="activeDestination.image" :alt="`${activeDestination.name} destination`" />
              <figcaption class="mt-2 font-type text-[0.66rem] uppercase tracking-[0.04em]">
                {{ activeDestination.caption }}
              </figcaption>
            </figure>

            <div class="mt-6">
              <p class="font-type text-[0.78rem] uppercase tracking-[0.08em] text-ember">{{ activeDestination.name }}</p>
              <h3 class="mt-2 font-display text-4xl font-semibold uppercase leading-none">{{ activeDestination.title }}</h3>
              <p class="mt-3 type-kicker normal-case leading-6 tracking-normal">{{ activeDestination.description }}</p>

              <h4 class="mt-5 font-type text-[0.72rem] uppercase tracking-[0.08em]">Key factors</h4>
              <ul class="mt-2 grid gap-1 font-type text-[0.68rem] leading-4">
                <li v-for="factor in activeDestination.factors" :key="factor" class="flex gap-2">
                  <span class="text-ember">o</span>
                  <span>{{ factor }}</span>
                </li>
              </ul>
            </div>
          </article>
        </Transition>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import worldSvg from "../world.svg?raw";

const countryById = {
  MY: "Malaysia",
  VN: "Vietnam",
  ID: "Indonesia",
  PH: "Philippines",
  TH: "Thailand",
};

const countryColors = {
  MY: "#d6b8fb",
  VN: "#ff9aa2",
  ID: "#e2f0cb",
  PH: "#b5ead7",
  TH: "#ffdac1",
};

const destinations = [
  {
    name: "Thailand",
    title: "Thailand",
    description:
      "One of the world's most popular digital nomad hubs, combining affordability, community, tropical lifestyle, and excellent infrastructure.",
    factors: ["Low cost of living", "Strong nomad community", "Fast internet", "Great food culture", "Beach lifestyle", "Coworking spaces", "Nomad visa options"],
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    caption: "Chiang Mai and island work rhythms",
  },
  {
    name: "Vietnam",
    title: "Vietnam",
    description:
      "Rapidly growing destination offering affordability, energetic cities, coffee culture, and strong entrepreneurial communities.",
    factors: ["Extremely affordable", "Excellent cafes", "Fast urban internet", "Startup culture", "Vibrant cities", "Rich local culture", "Remote work friendly"],
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
    caption: "Hanoi and Ho Chi Minh City cafe scenes",
  },
  {
    name: "Malaysia",
    title: "Malaysia",
    description:
      "Modern infrastructure and multicultural lifestyle make Malaysia attractive for long-term remote workers.",
    factors: ["English widely spoken", "Reliable internet", "Affordable lifestyle", "Excellent transportation", "Multicultural society", "Modern amenities", "Long stay possibilities"],
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    caption: "Kuala Lumpur skyline and connected living",
  },
  {
    name: "Indonesia",
    title: "Indonesia",
    description: "Bali has become one of the most iconic digital nomad destinations worldwide.",
    factors: ["Large nomad community", "Beautiful nature", "Wellness lifestyle", "Coworking culture", "Affordable accommodation", "Creative environment", "Tropical climate"],
    image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=1200&q=80",
    caption: "Bali coworking and tropical routines",
  },
  {
    name: "Philippines",
    title: "Philippines",
    description:
      "Island lifestyle combined with English proficiency attracts location-independent workers.",
    factors: ["English-speaking population", "Affordable living", "Beautiful islands", "Friendly locals", "Growing startup scene", "Beach lifestyle", "Flexible travel opportunities"],
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    caption: "Palawan and Cebu coastal remote life",
  },
];

const labels = [
  { name: "Thailand", left: "12%", top: "31%" },
  { name: "Vietnam", left: "46%", top: "29%" },
  { name: "Malaysia", left: "45%", top: "53%" },
  { name: "Philippines", left: "76%", top: "38%" },
  { name: "Indonesia", left: "56%", top: "68%" },
];

const activeCountry = ref("Thailand");
const activeDestination = computed(() => destinations.find((item) => item.name === activeCountry.value) || destinations[0]);
const activeCountryId = computed(() => Object.keys(countryById).find((id) => countryById[id] === activeCountry.value));

const worldMapMarkup = computed(() => {
  let markup = worldSvg
    .replace(/<\?xml[^>]*>/, "")
    .replace(/<svg\b([^>]*)>/, '<svg$1 viewBox="735 392 112 105" role="img" aria-label="Interactive Southeast Asia country map" preserveAspectRatio="xMidYMid meet">');

  Object.entries(countryById).forEach(([id, name]) => {
    const activeClass = activeCountryId.value === id ? " is-active" : "";
    markup = markup.replace(
      new RegExp(`id="${id}"`, "g"),
      `id="${id}" class="world-country${activeClass}" data-country="${name}" tabindex="0" role="button" aria-label="${name}" style="fill:${countryColors[id]}"`,
    );
  });

  return markup;
});

function setActiveCountry(country) {
  activeCountry.value = country;
}

function handleMapTarget(event) {
  const target = event.target.closest?.(".world-country");
  if (!target?.dataset.country) return;

  setActiveCountry(target.dataset.country);
}
</script>

<style scoped>
.world-map-svg {
  position: absolute;
  inset: 0;
}

.world-map-svg :deep(svg) {
  width: 100%;
  height: 100%;
}

.world-map-svg :deep(path) {
  display: none;
}

.world-map-svg :deep(.world-country) {
  display: block;
  cursor: pointer;
  opacity: 0.88;
  stroke: rgba(255, 255, 255, 0);
  stroke-width: 0.8;
  transition: opacity 180ms ease, filter 180ms ease, stroke 180ms ease, stroke-width 180ms ease;
  vector-effect: non-scaling-stroke;
}

.world-map-svg :deep(.world-country:hover),
.world-map-svg :deep(.world-country:focus),
.world-map-svg :deep(.world-country.is-active) {
  opacity: 1;
  stroke: #fff;
  stroke-width: 1.4;
  filter: drop-shadow(0 7px 10px rgba(25, 20, 16, 0.22));
  outline: none;
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
</style>
