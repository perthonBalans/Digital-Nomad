<template>
  <section id="countries-respond" class="story-section">
    <div class="grid min-h-[calc(100vh-10rem)] grid-cols-1 gap-8 ">
      <div class="space-y-7">
        <div>
          <p class="section-number">06</p>
          <h2 class="section-title max-w-[60rem]">How Countries Respond</h2>
          <p class="mt-5 font-type text-[1.05rem] uppercase tracking-[0.08em] text-ember">
            Policies &nbsp; &bull; &nbsp; Visas &nbsp; &bull; &nbsp; Infrastructure &nbsp; &bull; &nbsp; Opportunities
          </p>
        </div>

        <div class="max-w-[50rem]">
          <p class="body-copy text-[1.25rem] leading-9 text-ink">
            As remote work becomes global, countries are adapting to attract digital nomads through
            special visas, improved infrastructure, and supportive policies. These initiatives aim to
            bring economic benefits while creating attractive environments for location-independent
            professionals.
          </p>
        </div>

        <div class="relative min-h-[35rem]">
          <article class="country-response first-card">
            <div class="flag-card" aria-label="Indonesia flag">
              <div class="h-1/2 bg-red-600"></div>
              <div class="h-1/2 bg-white"></div>
            </div>
            <div class="copy-zone-inner">
              <h3 class="font-display text-4xl font-semibold uppercase leading-none">Indonesia</h3>
              <p class="mt-2 font-hand text-2xl text-ember">Welcoming Remote Talent</p>
              <div class="my-4 h-[2px] w-16 bg-ember"></div>
              <p class="type-kicker normal-case leading-6 tracking-normal">
                In Indonesia, the government actively courts nomads by launching specific visas, such as the E33G, to legalize their status and capture fiscal benefits.
                However, the massive influx into Bali has sparked grassroots resistance, with locals protesting against noise pollution and severe gentrification that displaces residents and inflates living costs.
              </p>
            </div>
          </article>

          <article class="country-response second-card">
            <div class="copy-zone-inner text-left lg:text-right">
              <h3 class="font-display text-4xl font-semibold uppercase leading-none">Thailand</h3>
              <p class="mt-2 font-hand text-2xl text-ember">A Nomad Favorite</p>
              <div class="my-4 h-[2px] w-16 bg-ember lg:ml-auto"></div>
              <p class="type-kicker normal-case leading-6 tracking-normal">
                Thailand introduced the Long-Term Resident (LTR) Visa to attract long-term remote workers.
                While hubs like Chiang Mai benefit from a thriving co-working and start-up ecosystem, this rapid adaptation has caused property prices to spiral, leading to the indirect displacement of locals as urban planning increasingly favors expatriates.
              </p>
            </div>
            <div class="flag-card" aria-label="Thailand flag">
              <div class="h-[18%] bg-red-600"></div>
              <div class="h-[18%] bg-white"></div>
              <div class="h-[28%] bg-[#24115f]"></div>
              <div class="h-[18%] bg-white"></div>
              <div class="h-[18%] bg-red-600"></div>
            </div>
          </article>

          <!-- <article class="country-response bottom-card">
            <div class="flag-card grid place-items-center bg-red-600" aria-label="Vietnam flag">
              <div class="vietnam-star">&#9733;</div>
            </div>
            <div class="copy-zone" data-copy-marker="COPY AREA: VIETNAM">
              <div class="copy-zone-inner">
                <h3 class="font-display text-5xl font-semibold uppercase leading-none">Vietnam</h3>
                <p class="mt-2 font-hand text-2xl text-ember">Emerging Digital Nomad Hub</p>
                <div class="my-4 h-[2px] w-16 bg-ember"></div>
                <p class="type-kicker normal-case leading-6 tracking-normal">
                  Vietnam is increasingly attracting remote workers through affordable living costs,
                  rapidly improving infrastructure, and vibrant urban centers.
                </p>
              </div>
            </div>
          </article> -->
        </div>
      </div>

      <!-- <aside class="relative hidden lg:block">
        <p class="hand-note absolute right-10 top-0 max-w-[22rem] rotate-[-2deg] text-3xl text-ink">
          countries are opening their doors to remote workers worldwide.
        </p>
        <div class="absolute right-32 top-40 font-hand text-6xl text-ember">&#9825;</div>
        <div class="absolute bottom-12 right-8 h-28 w-28 stamp-circle bg-white/35">Explore<br />More</div>
      </aside> -->
    </div>
  </section>
</template>

<style scoped>
.country-response {
  position: absolute;
  display: grid;
  grid-template-columns: 230px minmax(260px, 460px);
  gap: 3rem;
  align-items: center;
}

.first-card {
  left: 4%;
  top: 0;
}

.second-card {
  right: 0;
  top: 36%;
  grid-template-columns: minmax(260px, 460px) 230px;
}

.bottom-card {
  left: 18%;
  bottom: 0;
}

.flag-card {
  width: 230px;
  height: 150px;
  border: 1px solid rgba(20, 16, 12, 0.2);
  box-shadow: 0 14px 24px rgba(28, 22, 18, 0.15);
  overflow: hidden;
  background: white;
}

.vietnam-star {
  color: #ffdc1b;
  font-size: 5.5rem;
  line-height: 1;
}

@media (max-width: 1024px) {
  .country-response,
  .second-card,
  .bottom-card,
  .first-card {
    position: static;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
}
</style>
