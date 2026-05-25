<template>
  <section id="where" class="story-section">
    <div class="grid min-h-[calc(100vh-10rem)] grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.6fr_0.85fr] lg:items-center">
      <aside class="space-y-5">
        <p class="section-number">03</p>
        <h2 class="section-title">Where?</h2>

        <div class="copy-zone max-w-[23rem]" data-copy-marker="COPY AREA: WHERE INTRO">
          <div class="copy-zone-inner space-y-4">
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

      <div class="relative min-h-[35rem] rounded-[2rem] bg-white/20 p-3 md:min-h-[43rem] md:p-5">
        <svg class="absolute inset-0 h-full w-full" viewBox="0 0 760 560" role="img" aria-label="Interactive East and Southeast Asia country map">
          <defs>
            <filter id="map-watercolor" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
            </filter>
          </defs>

          <g opacity="0.36" fill="none" stroke="#838383" stroke-dasharray="4 8" stroke-width="1.5">
            <path d="M310 120 C340 170 340 225 318 282" />
            <path d="M448 158 C430 198 438 238 484 282" />
            <path d="M508 314 C540 356 590 374 668 352" />
            <path d="M294 364 C368 404 478 430 614 406" />
          </g>

          <g filter="url(#map-watercolor)">
            <g
              v-for="country in destinations"
              :key="country.name"
              class="map-country cursor-pointer outline-none transition duration-200"
              :class="activeCountry === country.name ? 'is-active' : 'is-muted'"
              tabindex="0"
              :aria-label="country.name"
              @mouseenter="setActiveCountry(country.name)"
              @focus="setActiveCountry(country.name)"
            >
              <path v-for="path in country.paths" :key="path" :d="path" :fill="country.color" />
            </g>
          </g>

          <circle cx="365" cy="254" r="4" fill="#c83a18" />
          <circle cx="424" cy="185" r="4" fill="#c83a18" />
          <circle cx="463" cy="145" r="4" fill="#c83a18" />
          <circle cx="540" cy="224" r="4" fill="#c83a18" />
          <circle cx="376" cy="332" r="4" fill="#c83a18" />
          <circle cx="318" cy="440" r="4" fill="#c83a18" />
          <circle cx="518" cy="362" r="4" fill="#c83a18" />
          <circle cx="604" cy="108" r="4" fill="#c83a18" />
        </svg>

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

            <div class="copy-zone mt-6" data-copy-marker="COPY AREA: COUNTRY INFO">
              <div class="copy-zone-inner">
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
            </div>
          </article>
        </Transition>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const destinations = [
  {
    name: "Thailand",
    title: "Thailand",
    description:
      "One of the world's most popular digital nomad hubs, combining affordability, community, tropical lifestyle, and excellent infrastructure.",
    factors: ["Low cost of living", "Strong nomad community", "Fast internet", "Great food culture", "Beach lifestyle", "Coworking spaces", "Nomad visa options"],
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    caption: "Chiang Mai and island work rhythms",
    color: "#f6b15e",
    paths: [
      "M342 206 C358 198 378 207 381 228 C382 245 368 255 374 276 C382 298 367 316 350 302 C336 290 336 270 323 254 C306 234 318 214 342 206 Z",
      "M364 300 C386 316 394 340 386 368 C372 350 359 330 364 300 Z",
    ],
  },
  {
    name: "Vietnam",
    title: "Vietnam",
    description:
      "Rapidly growing destination offering affordability, energetic cities, coffee culture, and strong entrepreneurial communities.",
    factors: ["Extremely affordable", "Excellent cafes", "Fast urban internet", "Startup culture", "Vibrant cities", "Rich local culture", "Remote work friendly"],
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
    caption: "Hanoi and Ho Chi Minh City cafe scenes",
    color: "#9fd77f",
    paths: [
      "M404 190 C423 200 434 222 432 250 C430 282 454 299 446 331 C440 357 416 352 414 322 C413 295 393 279 397 248 C400 222 386 203 404 190 Z",
    ],
  },
  {
    name: "Malaysia",
    title: "Malaysia",
    description:
      "Modern infrastructure and multicultural lifestyle make Malaysia attractive for long-term remote workers.",
    factors: ["English widely spoken", "Reliable internet", "Affordable lifestyle", "Excellent transportation", "Multicultural society", "Modern amenities", "Long stay possibilities"],
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
    caption: "Kuala Lumpur skyline and connected living",
    color: "#c8a8e9",
    paths: [
      "M320 336 C355 334 386 348 412 371 C378 382 344 374 314 350 Z",
      "M430 374 C452 362 484 358 512 366 C500 386 462 392 430 374 Z",
    ],
  },
  {
    name: "Indonesia",
    title: "Indonesia",
    description: "Bali has become one of the most iconic digital nomad destinations worldwide.",
    factors: ["Large nomad community", "Beautiful nature", "Wellness lifestyle", "Coworking culture", "Affordable accommodation", "Creative environment", "Tropical climate"],
    image: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=1200&q=80",
    caption: "Bali coworking and tropical routines",
    color: "#87b6ef",
    paths: [
      "M216 420 C276 408 340 418 394 444 C336 464 270 458 216 420 Z",
      "M410 438 C476 426 552 438 610 472 C542 490 468 474 410 438 Z",
      "M618 458 C664 452 702 466 728 494 C680 502 642 492 618 458 Z",
    ],
  },
  {
    name: "Philippines",
    title: "Philippines",
    description:
      "Island lifestyle combined with English proficiency attracts location-independent workers.",
    factors: ["English-speaking population", "Affordable living", "Beautiful islands", "Friendly locals", "Growing startup scene", "Beach lifestyle", "Flexible travel opportunities"],
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    caption: "Palawan and Cebu coastal remote life",
    color: "#f5c194",
    paths: [
      "M520 248 C536 238 554 248 554 268 C552 288 534 292 522 280 C512 270 510 256 520 248 Z",
      "M552 306 C572 292 596 304 594 330 C592 350 570 356 554 340 C542 328 540 316 552 306 Z",
      "M518 358 C532 350 548 360 546 378 C542 394 522 394 512 382 C504 372 506 364 518 358 Z",
    ],
  },
  {
    name: "Taiwan",
    title: "Taiwan",
    description:
      "Safe cities, efficient transportation, and strong technology infrastructure attract remote professionals.",
    factors: ["Excellent public transport", "High-speed internet", "Safe environment", "Tech ecosystem", "Convenient urban life", "Quality healthcare", "Vibrant food culture"],
    image: "https://images.unsplash.com/photo-1549893074-7a44eb1f3f0f?auto=format&fit=crop&w=1200&q=80",
    caption: "Taipei city life and tech-forward comfort",
    color: "#76d8d1",
    paths: ["M478 180 C494 190 498 216 486 236 C468 224 466 196 478 180 Z"],
  },
  {
    name: "Japan",
    title: "Japan",
    description:
      "A premium destination offering exceptional infrastructure, culture, safety, and modern conveniences.",
    factors: ["World-class infrastructure", "Reliable transportation", "Safety", "Innovation culture", "Unique experiences", "Modern cities", "High quality of life"],
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    caption: "Tokyo urban workspaces and precision systems",
    color: "#fb907c",
    paths: [
      "M612 70 C640 92 646 128 626 154 C602 138 590 98 612 70 Z",
      "M650 156 C676 178 674 212 650 232 C628 208 628 174 650 156 Z",
      "M604 204 C622 214 624 242 606 258 C588 242 586 218 604 204 Z",
    ],
  },
  {
    name: "South Korea",
    title: "South Korea",
    description:
      "Fast connectivity and dynamic urban environments make South Korea increasingly attractive for remote workers.",
    factors: ["Ultra-fast internet", "Tech-forward society", "Modern cities", "Efficient transport", "Strong cafe culture", "Safety", "Creative industries"],
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
    caption: "Seoul coworking and connected city pace",
    color: "#7ea2f0",
    paths: ["M520 104 C546 116 552 150 532 172 C506 158 500 124 520 104 Z"],
  },
];

const labels = [
  { name: "South Korea", left: "58%", top: "18%" },
  { name: "Japan", left: "80%", top: "24%" },
  { name: "Thailand", left: "46%", top: "48%" },
  { name: "Taiwan", left: "64%", top: "34%" },
  { name: "Vietnam", left: "30%", top: "43%" },
  { name: "Malaysia", left: "42%", top: "66%" },
  { name: "Philippines", left: "78%", top: "62%" },
  { name: "Indonesia", left: "48%", top: "83%" },
];

const activeCountry = ref("Thailand");
const activeDestination = computed(() => destinations.find((item) => item.name === activeCountry.value) || destinations[0]);

function setActiveCountry(country) {
  activeCountry.value = country;
}
</script>

<style scoped>
.map-country path {
  stroke: rgba(24, 20, 17, 0.24);
  stroke-width: 1.2;
  transition: opacity 180ms ease, filter 180ms ease, transform 180ms ease;
  transform-origin: center;
}

.map-country.is-muted path {
  opacity: 0.7;
}

.map-country.is-active path,
.map-country:hover path,
.map-country:focus path {
  opacity: 1;
  filter: drop-shadow(0 8px 12px rgba(199, 63, 25, 0.24));
  transform: scale(1.015);
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
