<template>
  <div class="min-h-screen bg-cream text-ink">
    <div class="paper-grain" aria-hidden="true"></div>

    <header class="site-header">
      <a class="brand" href="#who-what" aria-label="Digital Nomad home">
        <span class="paper-plane" aria-hidden="true">&#9992;</span>
        <span>Digital Nomad</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#who-what">Who / What</a>
        <a href="#why">Why</a>
        <a href="#where">Where</a>
        <a href="#how">How</a>
        <a href="#impact">Impact</a>
        <a href="#countries-respond">Respond</a>
        <a href="#conclusion">Conclusion</a>
        <a href="#references">References</a>
      </nav>
    </header>

    <main class="relative z-10">
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
import WhoWhatSection from "./sections/who-what.vue";
import WhySection from "./sections/why.vue";
import WhereSection from "./sections/where.vue";
import HowSection from "./sections/how.vue";
import ImpactSection from "./sections/impact.vue";
import CountriesRespondSection from "./sections/countries-respond.vue";
import ConclusionSection from "./sections/conclusion.vue";
import ReferencesSection from "./sections/references.vue";
</script>
