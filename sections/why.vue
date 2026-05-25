<template>
  <section id="why" class="story-section">
    <div class="grid min-h-[calc(100vh-10rem)] grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.1fr_1fr] lg:items-center">
      <aside class="space-y-5">
        <p class="section-number">02</p>
        <h2 class="section-title">Why</h2>

        <div class="max-w-[22rem]">
          <div class="space-y-4">
            <p class="type-kicker why2-subtitle">The evolution of freedom, flexibility, and a new way of living.</p>
            <p class="why2-instruction">
              Click a period dot to expand that period's sub-year details. Only the active period shows
              details.
            </p>
          </div>
        </div>

        <!-- <p class="hand-note max-w-[16rem] rotate-[-4deg] pt-4">Every era builds the path. We build in our today.</p> -->
      </aside>

      <div class="why2-timeline-wrap">
        <ol class="why2-timeline-list">
          <li v-for="(period, index) in periods" :key="period.period" class="why2-timeline-item">
            <button
              class="why2-period-trigger"
              type="button"
              :aria-expanded="activeIndex === index"
              @click="setActive(index)"
            >
              <span
                class="why2-dot"
                :class="activeIndex === index ? 'is-active' : ''"
                aria-hidden="true"
              ></span>
              <span
                class="why2-period-label"
                :class="activeIndex === index ? 'text-ember' : 'text-ink'"
              >
                {{ period.period }}
              </span>
              <span class="why2-toggle">{{ activeIndex === index ? '-' : '+' }}</span>
            </button>

            <div v-if="activeIndex === index" class="why2-period-details">
              <h3 class="why2-period-details-title">{{ period.title }}</h3>
              <ul class="why2-sub-list">
                <li v-for="detail in period.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>

      <aside class="min-h-[34rem]">
        <Transition name="pop-card" mode="out-in">
          <article :key="activePeriod.period" class="paper-card why2-story-card p-6">
            <figure class="why2-card-photo">
              <img :src="activePeriod.image" :alt="`${activePeriod.period} timeline image`" />
              <figcaption>{{ activePeriod.caption }}</figcaption>
            </figure>

            <p class="font-hand text-3xl text-ember">{{ activePeriod.period }}</p>
            <h3 class="mt-2 font-display text-3xl font-semibold leading-tight">{{ activePeriod.title }}</h3>
            <div class="my-4 h-[2px] w-16 bg-ember"></div>
            <p class="body-copy text-[1rem] leading-6">{{ activePeriod.cardText }}</p>
            <p class="mt-4 hand-note text-[1.1rem]">{{ activePeriod.note }}</p>

            <h4 class="mt-6 font-type text-[0.75rem] uppercase tracking-[0.08em]">Key drivers</h4>
            <ul class="mt-3 grid gap-2 font-type text-[0.72rem] leading-4">
              <li v-for="driver in activePeriod.drivers" :key="driver" class="flex items-center gap-2">
                <span class="grid h-4 w-4 place-items-center border border-ember text-[0.55rem] text-ember">&#10003;</span>
                <span>{{ driver }}</span>
              </li>
            </ul>
          </article>
        </Transition>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const periods = [
  {
    period: "1990s",
    title: "The Technological Foundation",
    details: [
      "1991: The World Wide Web becomes publicly available.",
      "Late 1990s: Laptops such as IBM ThinkPad and Apple PowerBook, early mobile phones, and dial-up internet introduce the idea of working away from a desktop computer. Early telecommuting appears mostly for home use.",
    ],
    cardText:
      "Technology planted the first seeds of location-independent work. Mobility was still limited, but the idea of working away from a fixed desk began to form.",
    drivers: ["World Wide Web", "Personal computers", "Early laptops", "Mobile phones", "Telecommuting"],
    note: "The first shift was technical, not cultural.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    caption: "Early personal computing and the web",
  },
  {
    period: "2000-2005",
    title: "Early Glimpses",
    details: [
      "2000: Wi-Fi adoption grows through the 802.11b standard. Airports, cafes, and hotels begin offering wireless internet.",
      "2003: Skype and LinkedIn launch.",
      "2004: Gmail launches with persistent access to email from any computer.",
      "Result: Early freelancers, writers, and web developers begin laptop lifestyle experiments, but slow speeds and high costs keep it niche.",
    ],
    cardText:
      "Remote work becomes more possible as wireless internet, online communication, and web-based email become widely accessible.",
    drivers: ["Wi-Fi", "Skype", "LinkedIn", "Gmail", "Freelance work"],
    note: "Connection starts moving from desks to places.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    caption: "Wireless internet and early online work",
  },
  {
    period: "2006-2009",
    title: "The Idea Takes Form",
    details: [
      "2006: AWS launches, allowing startups and apps to run without physical servers.",
      "2007: Tim Ferriss publishes The 4-Hour Workweek, popularizing lifestyle design, location independence, and remote work arbitrage.",
      "2007: First iPhone released, making mobile internet more usable.",
      "2008: Dropbox and Airbnb launch, supporting cloud files and global accommodation.",
      "2009: WhatsApp and WeWork launch. The term digital nomad begins appearing in blogs and forums.",
    ],
    cardText:
      "The lifestyle becomes a recognizable idea. Cloud tools, smartphones, accommodation platforms, and lifestyle design culture connect travel with online work.",
    drivers: ["AWS", "The 4-Hour Workweek", "iPhone", "Dropbox", "Airbnb", "WhatsApp", "WeWork"],
    note: "Tools and narrative finally met.",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
    caption: "Cloud tools and mobility mindset",
  },
  {
    period: "2010-2014",
    title: "Infrastructure & Community",
    details: [
      "2010: Instagram and Slack launch. High-speed 3G and 4G networks expand globally.",
      "2011: Google Drive and Trello launch, making remote collaboration easier.",
      "2012: Digital nomad blogs and communities grow. The term gains recognition in tech and travel media.",
      "2013: Uber expands globally. TransferWise, now Wise, launches and helps solve cross-border banking.",
      "Result: A visible subculture emerges, with people openly identifying as digital nomads and sharing guides online.",
    ],
    cardText:
      "Digital nomadism becomes a visible subculture. Community platforms, collaboration tools, transport apps, and banking solutions make the lifestyle easier to sustain.",
    drivers: ["3G and 4G", "Instagram", "Slack", "Google Drive", "Trello", "Nomad communities", "Wise"],
    note: "Community transformed isolated remote workers into a movement.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    caption: "Coworking growth and connected communities",
  },
  {
    period: "2015-2019",
    title: "Mainstream Visibility & Formalization",
    details: [
      "2015: Remote Year launches as a structured 12-month nomad program. Major media outlets begin covering digital nomads.",
      "2016: Estonia introduces one of the first digital nomad visa concepts, later formalized in 2020.",
      "2017: Zoom launches and makes video conferencing more reliable.",
      "2018: Coworking hubs and nomad meetups grow in Chiang Mai, Bali, Lisbon, and Medellin.",
      "2019: Search interest for digital nomad peaks before the pandemic.",
    ],
    cardText:
      "Digital nomadism moves from niche subculture to mainstream visibility. Programs, media coverage, coworking spaces, and visa conversations formalize the lifestyle.",
    drivers: ["Remote Year", "Media coverage", "Digital nomad visa concepts", "Zoom", "Coworking hubs", "Nomad meetups"],
    note: "The world started recognizing the pattern.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    caption: "Nomad hubs and global visibility",
  },
  {
    period: "2020-2021",
    title: "Pandemic Acceleration",
    details: [
      "2020: COVID-19 lockdowns force mass remote work. Millions of office workers go remote overnight.",
      "2020-2021: Many countries launch formal digital nomad visas.",
      "2021: Major companies including Twitter, Spotify, and Airbnb announce work-from-anywhere policies. The term enters everyday vocabulary.",
    ],
    cardText:
      "The pandemic rapidly normalizes remote work. What was once a niche lifestyle becomes a mainstream possibility for millions of workers.",
    drivers: ["COVID-19 remote work", "Work-from-anywhere policies", "Digital nomad visas", "Remote-first companies", "Mainstream awareness"],
    note: "A global shock made mobility thinkable at scale.",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
    caption: "Remote work became everyday reality",
  },
  {
    period: "2022-Present",
    title: "Maturation",
    details: [
      "2022-2023: Destination employment grows as cities compete to attract remote workers. Nomad-specific insurance, tax, and legal services mature.",
      "2024+: Digital nomadism becomes a recognized career path with specialized tours, networking events, and business education. Hybrid models, combining a home base with travel, become more common than endless full-time travel.",
    ],
    cardText:
      "Digital nomadism matures into a recognized lifestyle and career path. The focus shifts from endless travel to sustainability, structure, and hybrid mobility.",
    drivers: ["Destination employment", "Nomad insurance", "Tax services", "Legal support", "Networking events", "Hybrid travel models"],
    note: "From movement to system design.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    caption: "Hybrid mobility and long-term structure",
  },
];

const activeIndex = ref(0);
const activePeriod = computed(() => periods[activeIndex.value]);

function setActive(index) {
  activeIndex.value = index;
}
</script>

<style scoped>
.pop-card-enter-active,
.pop-card-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.pop-card-enter-from,
.pop-card-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}
</style>
