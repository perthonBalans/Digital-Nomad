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
  </section>
</template>

<script setup>
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
</script>
