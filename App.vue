<template>
  <div class="min-h-screen bg-cream text-ink">
    <div class="paper-grain" aria-hidden="true"></div>

    <!-- <header class="site-header">
      <a class="brand" href="#who-what" aria-label="Digital Nomad home">
        <span class="paper-plane" aria-hidden="true">&#9992;</span>
        <span>Digital Nomad</span>
      </a>

      
    </header> -->

    <main class="relative z-10">
      <div class="chapter-indicator" aria-label="Current chapter" aria-live="polite">
        <span class="label">{{ currentChapter.label }}</span>
        <span id="chapter-number">{{ currentChapter.number }}</span>
        <span id="chapter-title">{{ currentChapter.title }}</span>
      </div>
      <WhoWhatSection />
      <WhySection />
      <WhereSection />
      <HowSection />
      <ImpactSection />
      <CountriesRespondSection />
      <ConclusionSection />
      <ReferencesSection />
    </main>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import WhoWhatSection from "./sections/who-what.vue";
import WhySection from "./sections/why.vue";
import WhereSection from "./sections/where.vue";
import HowSection from "./sections/how.vue";
import ImpactSection from "./sections/impact.vue";
import CountriesRespondSection from "./sections/countries-respond.vue";
import ConclusionSection from "./sections/conclusion.vue";
import ReferencesSection from "./sections/references.vue";

const chapterList = [
  { id: "who-what", label: "chapter", number: "01", title: "Who / What" },
  { id: "why", label: "chapter", number: "02", title: "Why" },
  { id: "where", label: "chapter", number: "03", title: "Where" },
  { id: "how", label: "chapter", number: "04", title: "How" },
  { id: "impact", label: "chapter", number: "05", title: "Impact" },
  { id: "countries-respond", label: "chapter", number: "07", title: "How Countries Respond" },
  { id: "conclusion", label: "chapter", number: "08", title: "Conclusion" },
  { id: "references", label: "chapter", number: "09", title: "References" },
];

const currentChapter = ref(chapterList[0]);
let chapterObserver = null;

function setupChapterObserver() {
  const chapterById = new Map(chapterList.map((chapter) => [chapter.id, chapter]));
  const chapters = chapterList.map((chapter) => document.getElementById(chapter.id)).filter(Boolean);

  if (chapters.length === 0) return;

  chapterObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      const nextChapter = chapterById.get(visibleEntry.target.id);
      if (nextChapter) {
        currentChapter.value = nextChapter;
      }
    },
    {
      threshold: [0.35, 0.55, 0.75],
    },
  );

  chapters.forEach((chapter) => chapterObserver.observe(chapter));
}

onMounted(setupChapterObserver);

onBeforeUnmount(() => {
  chapterObserver?.disconnect();
});
</script>

<style scoped>
.chapter-indicator {
  position: fixed;
  top: 1.2rem;
  right: 1rem;
  z-index: 60;
  display: flex;
  width: 168px;
  min-height: 84px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  border: 1px solid rgba(60, 50, 41, 0.38);
  border-radius: 12px;
  background: rgba(250, 245, 236, 0.82);
  padding: 0.55rem 0.6rem;
  text-align: center;
  backdrop-filter: blur(3px);
}

.chapter-indicator .label,
#chapter-number,
#chapter-title {
  font-family: "Special Elite", monospace;
}

.chapter-indicator .label {
  display: block;
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

#chapter-number {
  font-size: 1.05rem;
}

#chapter-title {
  max-width: 100%;
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
}

@media (max-width: 980px) {
  .chapter-indicator {
    top: 0.8rem;
    right: 0.7rem;
    width: 138px;
    min-height: 78px;
  }

  #chapter-title {
    font-size: 0.58rem;
  }
}
</style>
