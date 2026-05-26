<template>
  <section id="who-what" class="story-section pt-28 md:pt-32">
    <div class="grid min-h-[calc(100vh-8rem)] grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.55fr_0.8fr] lg:items-center">
      <aside class="space-y-5">
        <div>
          <p class="section-number">01</p>
          <h1 class="section-title">Who / What</h1>
        </div>

        <div class="max-w-[19rem]">
          <div class="space-y-5">
            <p class="type-kicker">WHO IS A DIGITAL NOMAD? WHAT IS THIS LIFESTYLE ALL ABOUT?</p>
            <p class="type-kicker normal-case leading-6 tracking-normal">
              A digital nomad is someone who uses technology to work remotely while traveling or living
              in different locations.
            </p>
            <p class="type-kicker normal-case leading-6 tracking-normal">
              It's about freedom, flexibility, and designing a life that blends work, adventure, and
              purpose.
            </p>
          </div>
        </div>

        <div class="flex items-end gap-3 pt-3">
          <div class="h-16 w-10 border-l-2 border-ink/70">
            <div class="ml-[-0.55rem] mt-4 h-5 w-5 rounded-full border border-ink/70"></div>
          </div>
          <p class="hand-note max-w-[11rem]">my office, anywhere</p>
        </div>
      </aside>

      <div class="relative min-h-[42rem] lg:min-h-[48rem]" aria-label="Scrapbook collage">
        <div class="absolute left-[22%] top-0 z-20 h-24 w-24 rotate-[-12deg] stamp-circle bg-white/50">
          Explore<br />More
        </div>

        <figure class="polaroid absolute left-[20%] top-[4%] z-10 w-[58%] rotate-[-6deg]">
          <img
            class="h-60 md:h-72"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
            alt="Remote worker looking at mountains with laptop"
          />
        </figure>

        <figure class="polaroid absolute left-[3%] top-[32%] z-20 w-[34%] rotate-[-8deg]">
          <img
            class="h-40 md:h-48"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Remote worker using laptop at a cafe"
          />
          <figcaption class="mt-2 font-type text-[0.7rem] uppercase tracking-[0.04em]">Relies on technology</figcaption>
        </figure>

        <figure class="polaroid absolute right-[1%] top-[30%] z-20 w-[34%] rotate-[6deg]">
          <img
            class="h-48 md:h-56"
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=900&q=80"
            alt="Traveler holding laptop and backpack"
          />
          <figcaption class="mt-2 font-type text-[0.7rem] uppercase tracking-[0.04em]">Earns location-independently</figcaption>
        </figure>

        <div class="absolute left-[41%] top-[39%] z-30 w-[30%] rotate-[2deg] border border-black/15 bg-paper p-5 shadow-paper">
          <div class="min-h-30">
            <div class="hand-note text-[0.8rem]">
              <p>embraces uncertainty.</p>
              <p>lives minimally.</p>
              <p>prionitizes freedom and experieness over traditional stability</p>
            </div>
          </div>
          <p class="mt-3 font-type text-[0.72rem] uppercase tracking-[0.04em]">Travels different places</p>
        </div>

        <div class="paper-label absolute right-[10%] top-[6%] z-30 rotate-[3deg]">Work. nomadly</div>
        <div class="absolute right-[15%] top-[15%] z-20 w-40 rotate-[4deg] border border-black/10 bg-white/70 p-5 shadow-card">
          <p class="font-hand text-xl leading-tight">Work<br />Travel<br />Experience<br />Repeat</p>
        </div>

        <div class="paper-label absolute left-[16%] top-[72%] z-30 rotate-[-4deg]">Travels different places</div>
        <div class="paper-label absolute left-[7%] top-[17%] z-30 rotate-[-3deg]">Works remotely</div>
        <div class="paper-label absolute right-[4%] top-[70%] z-30 rotate-[4deg]">Earns location-independently</div>

        <div class="absolute bottom-[8%] left-[56%] z-40 flex gap-2" aria-hidden="true">
          <div class="h-10 w-7 rounded-sm bg-sage shadow-card"></div>
          <div class="h-12 w-8 rounded-sm bg-clay shadow-card"></div>
        </div>
      </div>

      <aside class="space-y-8 lg:self-start lg:pt-20">
        <div class="paper-card rotate-[3deg] p-5">
          <div>
            <p class="type-kicker">DID YOU KNOW?</p>
            <p class="font-type text-4xl text-ember">35M+</p>
            <p class="type-kicker normal-case leading-5 tracking-normal">
              Digital nomads worldwide in 2024<br />Growing by 17% yearly
            </p>
          </div>
        </div>

        <p class="hand-note rotate-[-4deg]">different views,<br />same goals</p>
        <p class="hand-note rotate-[3deg] pl-12 text-ink">freedom is<br />the new<br />luxury</p>
        <div class="text-right font-hand text-5xl text-ember">&#9825;</div>
      </aside>
    </div>
  </section>
</template>
