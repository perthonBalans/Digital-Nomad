<template>
  <section id="impact" class="story-section">
    <div class="grid min-h-[calc(100vh-10rem)] grid-cols-1 gap-8 lg:grid-cols-[0.85fr_2fr] lg:items-end">
      <aside class="space-y-5">
        <p class="section-number">05</p>
        <h2 class="section-title">Impact</h2>
        <div class="copy-zone max-w-[21rem]" data-copy-marker="COPY AREA: IMPACT INTRO">
          <div class="copy-zone-inner space-y-4">
            <p class="type-kicker">Every choice shapes a ripple.</p>
            <p class="type-kicker normal-case leading-6 tracking-normal">
              Digital nomads bring opportunities--and challenges.
            </p>
          </div>
        </div>
        <p class="hand-note max-w-[15rem] rotate-[-5deg]">New world, new concerns, new possibilities.</p>
      </aside>

      <div class="grid gap-6 md:grid-cols-3">
        <article v-for="topic in topics" :key="topic.title" class="paper-card p-5">
          <h3
            class="absolute left-1/2 top-[-1rem] -translate-x-1/2 rounded-sm px-5 py-1 font-type text-[0.7rem] uppercase tracking-[0.08em] text-white shadow-card"
            :class="topic.badgeClass"
          >
            {{ topic.title }}
          </h3>

          <div class="copy-zone mt-3" :data-copy-marker="`COPY AREA: ${topic.title}`">
            <div class="copy-zone-inner grid gap-5">
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
    pros: ["Boosts local economies", "Increases tourism revenue", "Supports local businesses", "Creates jobs in services"],
    cons: ["Rising cost of living", "Increased rent & housing prices", "Economic dependency on mobile workers", "Unequal distribution of economic benefits"],
  },
  {
    title: "Cultural Impact",
    badgeClass: "bg-ocean",
    pros: ["Cultural exchange", "Diversity & global mindset", "Support for local arts and traditions", "New ideas & perspectives", "Stronger global connections"],
    cons: ["Cultural dilution", "Loss of local identity", "Tourist mindset over respect", "Superficial connections", "Language & tradition erosion"],
  },
  {
    title: "Social & Environmental Impact",
    badgeClass: "bg-clay",
    pros: ["Supports remote communities", "Encourages sustainable travel", "Promotes slow living", "Environmental awareness", "Revives rural areas"],
    cons: ["Over-tourism & overcrowding", "Environmental strain", "Waste increase", "Pressure on infrastructure", "Displacement of locals"],
  },
];
</script>
