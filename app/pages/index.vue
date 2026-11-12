<script setup lang="ts">
import { site, whatsappLink, fullAddress } from '#shared/site'
import { services } from '#shared/services'
import { reviews, faq, symptoms, steps, instagramPosts } from '#shared/content'

const { base } = useSeo({
  title: 'Podóloga em Itapema | Paula Lemes Clínica de Podologia',
  description:
    'Podóloga em Itapema (SC): unha encravada, onicofose, calos, verruga plantar, unhas alteradas e atendimento domiciliar. Nota 5,0 no Google. Agende pelo WhatsApp.',
  path: '/',
})

useJsonLd([
  websiteSchema(base),
  businessSchema(base),
  personSchema(base),
  {
    '@type': 'FAQPage',
    '@id': `${base}/#faq`,
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
  {
    '@type': 'ItemList',
    name: 'Tratamentos de podologia',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${base}/tratamentos/${s.slug}`,
      name: s.name,
    })),
  },
])

const mythWords = 'Unha encravada não se resolve cortando cada vez mais.'.split(' ')
const marquee = services.map((s) => s.name)
</script>

<template>
  <div>
    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="hero__bg" aria-hidden="true">
        <span class="hero__blob hero__blob--a" />
        <span class="hero__blob hero__blob--b" />
      </div>

      <div class="container hero__grid">
        <div class="hero__copy">
          <p v-reveal class="eyebrow">Podóloga em Itapema · Meia Praia</p>
          <h1 v-reveal="{ variant: 'blur', delay: 80 }" class="hero__title">
            Podologia em Itapema para você voltar a pisar <em class="serif-italic text-brand">sem dor.</em>
          </h1>
          <p v-reveal="{ delay: 160 }" class="lead hero__lead">
            Unha encravada, onicofose, calos, verruga plantar e unhas alteradas tratados pela podóloga Paula Lemes, com
            avaliação individual e material esterilizado. Na clínica da Meia Praia ou na sua casa.
          </p>
          <div v-reveal="{ delay: 240 }" class="hero__ctas">
            <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn btn--primary btn--xl">
              <AppIcon name="whatsapp" /> Agendar minha avaliação
            </a>
            <NuxtLink to="#tratamentos" class="btn btn--ghost btn--xl">
              Ver tratamentos <AppIcon name="arrow" class="btn-arrow" />
            </NuxtLink>
          </div>

          <p v-reveal="{ delay: 280 }" class="byline">
            <img :src="site.images.avatar" alt="" width="40" height="40" class="byline__img" />
            <span>Quem te atende é a própria <strong>Paula Lemes</strong>, podóloga.</span>
          </p>

          <ul v-reveal="{ delay: 320 }" class="hero__trust">
            <li>
              <span class="stars" aria-hidden="true"><AppIcon v-for="n in 5" :key="n" name="star" /></span>
              <span><strong>5,0 no Google</strong><small>{{ site.rating.count }} avaliações</small></span>
            </li>
            <li>
              <AppIcon name="instagram" class="trust-ico" />
              <span><strong>{{ site.followers }}</strong><small>seguidores no Instagram</small></span>
            </li>
            <li>
              <AppIcon name="home" class="trust-ico" />
              <span><strong>Home care</strong><small>atendimento em casa</small></span>
            </li>
          </ul>
        </div>

        <div class="hero__visual" aria-hidden="false">
          <div v-reveal="'scale'" class="sign">
            <svg class="sign__ring" viewBox="0 0 400 400" aria-hidden="true">
              <defs>
                <path id="ring" d="M200,200 m-182,0 a182,182 0 1,1 364,0 a182,182 0 1,1 -364,0" />
              </defs>
              <text>
                <textPath href="#ring" startOffset="0">
                  PAULA LEMES · CLÍNICA DE PODOLOGIA · ITAPEMA SC · PAULA LEMES · CLÍNICA DE PODOLOGIA · ITAPEMA SC ·
                </textPath>
              </text>
            </svg>
            <div class="sign__glow" />
            <div class="sign__photo">
              <picture>
                <source :srcset="site.images.sign" type="image/webp" />
                <img
                  :src="site.images.signJpg"
                  alt="Placa redonda iluminada da Paula Lemes Clínica de Podologia, em Itapema"
                  width="1100"
                  height="1079"
                  fetchpriority="high"
                />
              </picture>
            </div>

            <div class="float float--rating">
              <span class="float__badge"><AppIcon name="star" /></span>
              <span><strong>5,0</strong> no Google</span>
            </div>
            <div class="float float--safe">
              <span class="float__badge float__badge--sage"><AppIcon name="shield" /></span>
              <span>Material<br /><strong>esterilizado</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ MARQUEE ============ -->
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <template v-for="k in 2" :key="k">
          <span v-for="m in marquee" :key="`${k}-${m}`" class="marquee__item">
            <LogoMark class="marquee__mark" /> {{ m }}
          </span>
        </template>
      </div>
    </div>

    <!-- ============ SINTOMAS ============ -->
    <section class="section">
      <div class="container split">
        <div class="section-head split__head">
          <p v-reveal class="eyebrow">Sinais de alerta</p>
          <h2 v-reveal="{ delay: 80 }" class="h2">Seus pés estão tentando <em class="serif-italic text-brand">te avisar?</em></h2>
          <p v-reveal="{ delay: 160 }" class="lead">
            Dor ao caminhar, unha que volta a encravar, calo que não some, pele ressecada. O pé costuma dar sinais bem
            antes de virar um problema grande. Toque no que você está sentindo e fale direto com a Paula.
          </p>
        </div>
        <ul class="symptoms">
          <li v-for="(s, i) in symptoms" :key="s" v-reveal="{ variant: 'scale', delay: i * 50 }">
            <a
              :href="whatsappLink(`Oi, Paula! Vim pelo site. Estou com: ${s.toLowerCase()}. Pode me ajudar?`)"
              target="_blank"
              rel="noopener"
              class="chip symptom"
            >
              <AppIcon name="chat" class="symptom__ico" />
              {{ s }}
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ MITO ============ -->
    <section class="section section--dark myth">
      <div class="myth__glow" aria-hidden="true" />
      <LogoMark class="myth__mark" aria-hidden="true" />
      <div class="container myth__inner">
        <p v-reveal class="eyebrow">O erro mais comum</p>
        <p class="myth__quote">
          <template v-for="(w, i) in mythWords" :key="i"><span class="myth__word">{{ w }}</span>{{ ' ' }}</template>
        </p>
        <div v-reveal class="myth__body">
          <p class="lead">
            Cortar o cantinho da unha toda vez que ela encrava parece a solução mais rápida. Só que esse hábito deixa uma
            ponta que cresce de novo para dentro da pele, e o ciclo recomeça. O caminho é tratar a causa e corrigir o
            crescimento.
          </p>
          <NuxtLink to="/tratamentos/unha-encravada" class="btn btn--light btn--xl">
            Como funciona o tratamento <AppIcon name="arrow" class="btn-arrow" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============ TRATAMENTOS ============ -->
    <section id="tratamentos" class="section">
      <div class="container">
        <div class="section-head">
          <p v-reveal class="eyebrow">Tratamentos</p>
          <h2 v-reveal="{ delay: 80 }" class="h2">Cuidado para cada tipo de <em class="serif-italic text-brand">incômodo.</em></h2>
          <p v-reveal="{ delay: 160 }" class="lead">
            Cada caso começa com avaliação. Só depois a Paula define o tratamento, explica o que vai fazer e quanto tempo
            costuma levar.
          </p>
        </div>
        <ul class="services">
          <li v-for="(s, i) in services" :key="s.slug" v-reveal="{ delay: (i % 4) * 80 }">
            <ServiceCard :service="s" :index="i" />
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ COMO FUNCIONA ============ -->
    <section class="section section--tint">
      <div class="container">
        <div class="section-head section-head--center">
          <p v-reveal class="eyebrow">Como funciona</p>
          <h2 v-reveal="{ delay: 80 }" class="h2">Do primeiro “oi” ao pé <em class="serif-italic text-brand">sem dor.</em></h2>
        </div>
        <ol class="steps">
          <li v-for="(s, i) in steps" :key="s.title" v-reveal="{ delay: i * 120 }" class="step">
            <span class="step__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="step__title">{{ s.title }}</h3>
            <p class="step__text">{{ s.text }}</p>
          </li>
        </ol>
        <div v-reveal class="steps__cta">
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn btn--primary btn--xl">
            <AppIcon name="whatsapp" /> Começar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- ============ SOBRE ============ -->
    <section id="sobre" class="section">
      <div class="container about">
        <div v-reveal="'left'" class="about__visual">
          <picture v-if="site.images.paula" class="about__frame">
            <source :srcset="site.images.paula" type="image/webp" />
            <img
              :src="site.images.paulaJpg"
              alt="Podóloga Paula Lemes sorrindo, de jaleco branco"
              class="about__photo"
              loading="lazy"
              width="511"
              height="639"
            />
          </picture>
          <div v-else class="about__panel">
            <LogoMark class="about__mark" />
            <p class="about__panel-name">Paula Lemes</p>
            <p class="about__panel-sub">Clínica de Podologia</p>
          </div>
          <figure class="about__quote">
            <blockquote>
              “Essa clínica representa coragem, persistência e a realização de um sonho que um dia parecia grande demais
              para mim.”
            </blockquote>
            <figcaption>Paula Lemes, no aniversário de 1 ano da clínica</figcaption>
          </figure>
        </div>

        <div class="about__copy">
          <div class="section-head about__head">
            <p v-reveal class="eyebrow">Quem cuida de você</p>
            <h2 v-reveal="{ delay: 80 }" class="h2">Prazer, eu sou a <em class="serif-italic text-brand">Paula.</em></h2>
          </div>
          <div v-reveal="{ delay: 120 }" class="about__text">
            <p>
              Sou podóloga aqui em Itapema. Para mim, ser podóloga é proporcionar bem-estar e ter compromisso com a saúde
              de cada cliente que confia nas minhas mãos. Gosto de pensar assim: cuidar da raiz, que são os pés, para
              que a árvore, que é o corpo, floresça.
            </p>
            <p>
              Cheguei com a clínica cheia de sonhos e, confesso, cheia de medo também. Foram muitos dias fazendo contas,
              tomando decisões difíceis e me perguntando se eu ia dar conta. Um ano depois, a Paula Lemes Clínica de
              Podologia está de portas abertas na Meia Praia, e eu sigo aprendendo todos os dias.
            </p>
            <p>
              No atendimento, eu gosto de explicar o que estou vendo e o que vou fazer. Cada pé tem uma história, e cada
              caso merece uma avaliação individual.
            </p>
          </div>
          <ul class="values">
            <li v-reveal="{ delay: 0 }"><AppIcon name="shield" /><span><strong>Biossegurança</strong>Material esterilizado em todo atendimento.</span></li>
            <li v-reveal="{ delay: 80 }"><AppIcon name="chat" /><span><strong>Explicação</strong>Você entende cada etapa do tratamento.</span></li>
            <li v-reveal="{ delay: 160 }"><AppIcon name="heart" /><span><strong>Calma</strong>Atendimento no seu tempo, sem pressa.</span></li>
            <li v-reveal="{ delay: 240 }"><AppIcon name="sparkle" /><span><strong>Acompanhamento</strong>Plano de retorno quando faz sentido.</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ============ HOME CARE ============ -->
    <section class="section section--tint homecare">
      <div class="container homecare__inner">
        <div class="homecare__copy">
          <p v-reveal class="eyebrow">Atendimento domiciliar</p>
          <h2 v-reveal="{ delay: 80 }" class="h2">Não dá para vir até a clínica? <em class="serif-italic text-brand">A Paula vai até você.</em></h2>
          <p v-reveal="{ delay: 160 }" class="lead">
            Podologia home care para idosos, pessoas acamadas, em recuperação de cirurgia ou com dificuldade de
            locomoção. Mesmo cuidado, mesma biossegurança, no conforto de casa.
          </p>
          <div v-reveal="{ delay: 240 }" class="homecare__ctas">
            <a
              :href="whatsappLink('Oi, Paula! Vim pelo site e quero saber sobre o atendimento domiciliar.')"
              target="_blank"
              rel="noopener"
              class="btn btn--primary btn--xl"
            >
              <AppIcon name="whatsapp" /> Agendar atendimento em casa
            </a>
            <NuxtLink to="/tratamentos/atendimento-domiciliar" class="link">Como funciona</NuxtLink>
          </div>
        </div>
        <ul class="homecare__list">
          <li v-for="(t, i) in ['Podologia geriátrica', 'Corte de unhas espessas', 'Calos e calosidades', 'Unha encravada', 'Orientação para a família']" :key="t" v-reveal="{ variant: 'right', delay: i * 80 }">
            <span class="check"><AppIcon name="check" /></span>{{ t }}
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ AVALIAÇÕES ============ -->
    <section id="avaliacoes" class="section">
      <div class="container">
        <div class="reviews__head">
          <div class="section-head">
            <p v-reveal class="eyebrow">Avaliações</p>
            <h2 v-reveal="{ delay: 80 }" class="h2">Quem passou por aqui <em class="serif-italic text-brand">conta.</em></h2>
          </div>
          <div v-reveal="'scale'" class="score">
            <span class="score__num">5,0</span>
            <span class="score__meta">
              <span class="stars" aria-hidden="true"><AppIcon v-for="n in 5" :key="n" name="star" /></span>
              <span>{{ site.rating.count }} avaliações no Google</span>
            </span>
          </div>
        </div>
        <ul class="reviews">
          <li v-for="(r, i) in reviews" :key="i" v-reveal="{ delay: i * 100 }" class="review">
            <span class="stars stars--sm" aria-label="5 estrelas"><AppIcon v-for="n in 5" :key="n" name="star" /></span>
            <p class="review__text">“{{ r.text }}”</p>
            <p class="review__author"><strong>{{ r.author }}</strong> · {{ r.meta }}</p>
          </li>
        </ul>
        <div v-reveal class="reviews__more">
          <a :href="site.mapsUrl" target="_blank" rel="noopener" class="btn btn--ghost">
            Ver todas no Google <AppIcon name="arrow-up-right" class="btn-arrow" />
          </a>
        </div>
      </div>
    </section>

    <!-- ============ INSTAGRAM ============ -->
    <section class="section insta">
      <div class="container">
        <div class="insta__head">
          <div class="section-head">
            <p v-reveal class="eyebrow">No Instagram</p>
            <h2 v-reveal="{ delay: 80 }" class="h2">{{ site.followers }} pessoas já acompanham <em class="serif-italic text-brand">a Paula.</em></h2>
          </div>
          <a v-reveal :href="site.instagram" target="_blank" rel="noopener" class="btn btn--ghost">
            <AppIcon name="instagram" /> Seguir {{ site.instagramHandle }}
          </a>
        </div>
        <ul class="insta__grid">
          <li v-for="(post, i) in instagramPosts" :key="post.code" v-reveal="{ variant: 'scale', delay: i * 70 }">
            <a :href="`https://www.instagram.com/p/${post.code}/`" target="_blank" rel="noopener" class="insta__item">
              <img :src="`/images/instagram/${post.code}.webp`" :alt="post.alt" width="640" height="640" loading="lazy" />
              <span class="insta__overlay">
                <AppIcon name="instagram" />
                <span>{{ post.caption }}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section id="duvidas" class="section section--tint">
      <div class="container faq-wrap">
        <div class="section-head faq-wrap__head">
          <p v-reveal class="eyebrow">Dúvidas frequentes</p>
          <h2 v-reveal="{ delay: 80 }" class="h2">Antes de agendar, <em class="serif-italic text-brand">talvez você queira saber.</em></h2>
          <p v-reveal="{ delay: 160 }" class="lead">Não achou sua dúvida aqui? Manda no WhatsApp que a Paula responde.</p>
          <a v-reveal="{ delay: 200 }" :href="whatsappLink('Oi, Paula! Vim pelo site e tenho uma dúvida.')" target="_blank" rel="noopener" class="btn btn--ghost faq-wrap__btn">
            <AppIcon name="whatsapp" /> Perguntar à Paula
          </a>
        </div>
        <FaqList :items="faq" />
      </div>
    </section>

    <!-- ============ CONTATO ============ -->
    <section id="contato" class="section section--dark contact">
      <div class="contact__glow" aria-hidden="true" />
      <div class="container contact__inner">
        <div class="contact__copy">
          <p v-reveal class="eyebrow">Agende sua avaliação</p>
          <h2 v-reveal="{ variant: 'blur', delay: 80 }" class="contact__title">
            Seu pé não precisa doer para merecer <em class="serif-italic">cuidado.</em>
          </h2>
          <p v-reveal="{ delay: 160 }" class="lead">
            Chame no WhatsApp, conte o que está sentindo e escolha o melhor horário. A resposta vem da própria Paula.
          </p>
          <a v-reveal="{ delay: 240 }" :href="whatsappLink()" target="_blank" rel="noopener" class="btn btn--light btn--xl">
            <AppIcon name="whatsapp" /> Agendar pelo WhatsApp
          </a>

          <dl class="info">
            <div v-reveal="{ delay: 0 }" class="info__item">
              <dt><AppIcon name="pin" /> Endereço</dt>
              <dd><a :href="site.mapsUrl" target="_blank" rel="noopener">{{ fullAddress() }}</a></dd>
            </div>
            <div v-reveal="{ delay: 80 }" class="info__item">
              <dt><AppIcon name="clock" /> Horário</dt>
              <dd><span v-for="h in site.hours" :key="h.days" class="info__line">{{ h.days }}: {{ h.time }}</span></dd>
            </div>
            <div v-reveal="{ delay: 160 }" class="info__item">
              <dt><AppIcon name="phone" /> Telefone e WhatsApp</dt>
              <dd><a :href="`tel:${site.phoneE164}`">{{ site.phoneDisplay }}</a></dd>
            </div>
          </dl>
        </div>

        <div v-reveal="'scale'" class="map">
          <div class="map__fallback" aria-hidden="true">
            <LogoMark class="map__mark" />
            <span>Rua 256, 203 · Meia Praia</span>
          </div>
          <iframe
            :src="site.mapsEmbed"
            title="Mapa: Paula Lemes Clínica de Podologia, Rua 256, Meia Praia, Itapema"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
          <a :href="site.mapsUrl" target="_blank" rel="noopener" class="map__cta">
            <AppIcon name="pin" /> Abrir rota no Google Maps
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- HERO ---------- */
.hero {
  position: relative;
  padding-block: var(--space-5) var(--space-9);
  overflow: clip;
}
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}
.hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(64px);
  opacity: 0.55;
}
.hero__blob--a {
  width: 480px;
  height: 480px;
  right: -120px;
  top: 40px;
  background: var(--glow-300);
  animation: drift 14s var(--ease-in-out) infinite alternate;
}
.hero__blob--b {
  width: 400px;
  height: 400px;
  left: -160px;
  bottom: -80px;
  background: var(--sage-200);
  animation: drift 18s var(--ease-in-out) infinite alternate-reverse;
}
@keyframes drift {
  to {
    transform: translate3d(-40px, 32px, 0) scale(1.08);
  }
}
.hero__grid {
  display: grid;
  gap: var(--space-8);
  align-items: center;
}
.hero__copy {
  display: grid;
  gap: var(--space-4);
}
.hero__title {
  font-size: var(--text-display);
  line-height: 1.04;
  letter-spacing: -0.02em;
}
.hero__lead {
  max-width: 56ch;
}
.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
}
.byline {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-14);
  color: var(--ink-soft);
}
.byline__img {
  width: var(--control-md);
  height: var(--control-md);
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 0 2px var(--cream-50), 0 0 0 3px var(--sage-400);
}
.hero__trust {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-5);
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--line);
}
@media (min-width: 1280px) {
  .hero__trust {
    flex-wrap: nowrap;
    gap: var(--space-5);
  }
}
.hero__trust li {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  line-height: 1.3;
}
.hero__trust strong,
.hero__trust small {
  white-space: nowrap;
}
.hero__trust strong {
  display: block;
  font-size: var(--text-14);
}
.hero__trust small {
  font-size: var(--text-12);
  color: var(--muted);
}
.trust-ico {
  width: 24px;
  height: 24px;
  color: var(--sage-600);
}
.stars {
  display: inline-flex;
  gap: 2px;
  color: var(--glow-500);
}
.stars svg {
  width: 16px;
  height: 16px;
}
.stars--sm svg {
  width: 14px;
  height: 14px;
}

/* Placa iluminada */
.hero__visual {
  display: grid;
  place-items: center;
}
.sign {
  position: relative;
  width: min(100%, 520px);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
}
.sign__ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.32em;
  fill: var(--sage-600);
  animation: spin 48s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.sign__glow {
  position: absolute;
  width: 78%;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: var(--shadow-glow);
  animation: breathe 5s var(--ease-in-out) infinite alternate;
}
@keyframes breathe {
  from {
    opacity: 0.55;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1.02);
  }
}
.sign__photo {
  position: relative;
  width: 82%;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 8px var(--cream-50), var(--shadow-lg);
}
.sign__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 54% 50%;
  transform: scale(1.12);
  transition: transform 1.2s var(--ease-out);
}
.sign:hover .sign__photo img {
  transform: scale(1.18);
}
.float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3) var(--space-2) var(--space-2);
  border-radius: var(--radius-pill);
  background: rgba(252, 250, 245, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-md);
  font-size: var(--text-12);
  line-height: 1.25;
  color: var(--ink-soft);
  transition: transform var(--dur-med) var(--ease-out);
}
.float:hover {
  transform: translateY(-4px) !important;
}
.float strong {
  color: var(--ink);
}
.float--rating {
  left: 0;
  bottom: 16%;
  animation: bob 6s var(--ease-in-out) infinite;
}
.float--safe {
  right: 0;
  top: 14%;
  animation: bob 7s var(--ease-in-out) infinite reverse;
}
@keyframes bob {
  50% {
    transform: translateY(-8px);
  }
}
.float__badge {
  display: grid;
  place-items: center;
  width: var(--control-md);
  height: var(--control-md);
  border-radius: 50%;
  background: var(--glow-300);
  color: var(--sage-900);
}
.float__badge--sage {
  background: var(--sage-100);
  color: var(--sage-700);
}
.float__badge svg {
  width: 20px;
  height: 20px;
}

/* Parallax suave via scroll-driven animations (progressive enhancement) */
@supports (animation-timeline: view()) {
  .sign__photo {
    animation: parallax linear both;
    animation-timeline: view();
    animation-range: exit -20% exit 100%;
  }
  @keyframes parallax {
    to {
      transform: translateY(48px) rotate(-4deg);
    }
  }
}

/* ---------- MARQUEE ---------- */
.marquee {
  overflow: hidden;
  background: var(--sage-500);
  color: var(--cream-50);
  padding-block: var(--space-3);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.marquee__track {
  display: flex;
  width: max-content;
  gap: var(--space-7);
  animation: marquee 40s linear infinite;
}
.marquee:hover .marquee__track {
  animation-play-state: paused;
}
.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-display);
  font-size: var(--text-24);
  white-space: nowrap;
}
.marquee__mark {
  width: 20px;
  height: 22px;
  opacity: 0.7;
}
@keyframes marquee {
  to {
    transform: translateX(calc(-50% - var(--space-7) / 2));
  }
}

/* ---------- SINTOMAS ---------- */
.split {
  display: grid;
  gap: var(--space-5);
  align-items: center;
}
.split__head {
  margin-bottom: 0;
}
.symptoms {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}
.symptom {
  height: var(--control-lg);
  padding-inline: var(--space-3) var(--space-4);
}
.symptom__ico {
  width: 16px;
  height: 16px;
  color: var(--sage-500);
  transition: transform var(--dur-med) var(--ease-out);
}
.symptom:hover .symptom__ico {
  transform: scale(1.2) rotate(-8deg);
}

/* ---------- MITO ---------- */
.myth {
  overflow: hidden;
}
.myth__glow {
  position: absolute;
  width: 640px;
  height: 640px;
  right: -200px;
  top: -200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(241, 198, 127, 0.28), transparent 65%);
  pointer-events: none;
}
.myth__mark {
  position: absolute;
  right: -40px;
  top: 50%;
  width: 360px;
  height: 404px;
  translate: 0 -50%;
  color: var(--sage-600);
  opacity: 0.35;
  pointer-events: none;
  display: none;
}
@media (min-width: 1024px) {
  .myth__mark {
    display: block;
    right: 8%;
  }
}
.myth__mark :deep(.logo-stroke) {
  stroke-width: 2;
}
@supports (animation-timeline: view()) {
  .myth__mark :deep(.logo-stroke) {
    stroke-dasharray: 1;
    animation: draw linear both;
    animation-timeline: view();
    animation-range: entry 20% cover 55%;
  }
  @keyframes draw {
    from {
      stroke-dashoffset: 1;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
}
.myth__inner {
  position: relative;
  display: grid;
  gap: var(--space-5);
}
.myth__quote {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 1.4rem + 4vw, 4.5rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  max-width: 16ch;
  color: var(--cream-50);
}
.myth__word {
  display: inline;
}
@supports (animation-timeline: view()) {
  .myth__word {
    opacity: 0.18;
    animation: word-in linear both;
    animation-timeline: view();
    animation-range: cover 10% cover 45%;
  }
  .myth__word:nth-of-type(2) { animation-range: cover 12% cover 47%; }
  .myth__word:nth-of-type(3) { animation-range: cover 14% cover 49%; }
  .myth__word:nth-of-type(4) { animation-range: cover 16% cover 51%; }
  .myth__word:nth-of-type(5) { animation-range: cover 18% cover 53%; }
  .myth__word:nth-of-type(6) { animation-range: cover 20% cover 55%; }
  .myth__word:nth-of-type(7) { animation-range: cover 22% cover 57%; }
  .myth__word:nth-of-type(8) { animation-range: cover 24% cover 59%; }
  .myth__word:nth-of-type(9) { animation-range: cover 26% cover 61%; }
  @keyframes word-in {
    to {
      opacity: 1;
    }
  }
}
.myth__body {
  display: grid;
  gap: var(--space-5);
  max-width: 60ch;
  justify-items: start;
}

/* ---------- TRATAMENTOS ---------- */
.services {
  display: grid;
  gap: var(--gap-grid);
  grid-template-columns: 1fr;
}

/* ---------- STEPS ---------- */
.steps {
  counter-reset: step;
  display: grid;
  gap: var(--gap-grid);
}
.step {
  position: relative;
  display: grid;
  gap: var(--space-2);
  padding: var(--spacing-card);
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--line);
  transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out);
}
.step:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.step__num {
  font-family: var(--font-display);
  font-size: var(--text-48);
  line-height: 1;
  color: var(--sage-300);
  margin-bottom: var(--space-2);
  transition: color var(--dur-med);
}
.step:hover .step__num {
  color: var(--glow-500);
}
.step__title {
  font-size: var(--text-24);
}
.step__text {
  font-size: var(--text-14);
  color: var(--muted);
}
.steps__cta {
  display: flex;
  justify-content: center;
  margin-top: var(--space-7);
}

/* ---------- SOBRE ---------- */
.about {
  display: grid;
  gap: var(--space-8);
  align-items: center;
}
.about__visual {
  position: relative;
}
.about__frame {
  display: block;
  position: relative;
  border-radius: 240px 240px var(--radius-xl) var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 0 0 8px var(--cream-50), var(--shadow-lg);
}
.about__frame::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(63, 72, 48, 0.25));
  pointer-events: none;
}
.about__photo {
  object-position: 50% 30%;
  transition: transform 1.2s var(--ease-out);
}
.about__visual:hover .about__photo {
  transform: scale(1.04);
}
.about__photo,
.about__panel {
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 240px 240px var(--radius-xl) var(--radius-xl);
  object-fit: cover;
}
.about__panel {
  display: grid;
  place-content: center;
  justify-items: center;
  gap: var(--space-2);
  background:
    radial-gradient(60% 50% at 50% 30%, rgba(241, 198, 127, 0.35), transparent 70%),
    var(--sage-500);
  color: var(--cream-50);
  text-align: center;
  overflow: hidden;
}
.about__mark {
  width: 120px;
  height: 134px;
  margin-bottom: var(--space-3);
}
.about__mark :deep(.logo-stroke) {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 2.4s var(--ease-out) 0.3s;
}
.about__visual.is-visible .about__mark :deep(.logo-stroke) {
  stroke-dashoffset: 0;
}
.about__panel-name {
  font-family: var(--font-display);
  font-size: var(--text-48);
  line-height: 1;
}
.about__panel-sub {
  font-size: var(--text-12);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--sage-100);
}
.about__quote {
  position: relative;
  margin: calc(var(--space-8) * -1) var(--space-3) 0;
  padding: var(--space-4);
  border-radius: var(--radius-xl);
  background: var(--surface);
  box-shadow: var(--shadow-lg);
  display: grid;
  gap: var(--space-2);
}
.about__quote blockquote {
  margin: 0;
  font-family: var(--font-display);
  font-size: var(--text-20);
  line-height: 1.35;
}
.about__quote figcaption {
  font-size: var(--text-12);
  color: var(--muted);
}
.about__copy {
  display: grid;
  gap: var(--space-5);
}
.about__head {
  margin-bottom: 0;
}
.about__text {
  display: grid;
  gap: var(--space-3);
  color: var(--ink-soft);
  font-size: var(--text-16);
}
.values {
  display: grid;
  gap: var(--space-3);
}
.values li {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-3);
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: var(--surface);
  font-size: var(--text-14);
  color: var(--muted);
  transition: border-color var(--dur-med), transform var(--dur-med) var(--ease-out);
}
.values li:hover {
  border-color: var(--sage-300);
  transform: translateX(4px);
}
.values svg {
  flex: none;
  width: 24px;
  height: 24px;
  color: var(--sage-600);
}
.values strong {
  display: block;
  color: var(--ink);
  font-size: var(--text-14);
}

/* ---------- HOME CARE ---------- */
.homecare__inner {
  display: grid;
  gap: var(--space-7);
  align-items: center;
}
.homecare__copy {
  display: grid;
  gap: var(--space-3);
}
.homecare__ctas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-3);
}
.homecare__list {
  display: grid;
  gap: var(--space-2);
}
.homecare__list li {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-height: var(--control-xl);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: var(--surface);
  border: 1px solid var(--line);
  font-weight: 500;
  transition: transform var(--dur-med) var(--ease-out), border-color var(--dur-med);
}
.homecare__list li:hover {
  transform: translateX(-4px);
  border-color: var(--sage-300);
}
.check {
  display: grid;
  place-items: center;
  width: var(--control-sm);
  height: var(--control-sm);
  border-radius: 50%;
  background: var(--sage-500);
  color: var(--cream-50);
  flex: none;
}
.check svg {
  width: 16px;
  height: 16px;
}

/* ---------- AVALIAÇÕES ---------- */
.reviews__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-7);
}
.reviews__head .section-head {
  margin-bottom: 0;
}
.score {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-xl);
  background: var(--sage-800);
  color: var(--cream-50);
}
.score__num {
  font-family: var(--font-display);
  font-size: var(--text-48);
  line-height: 1;
}
.score__meta {
  display: grid;
  gap: var(--space-1);
  font-size: var(--text-12);
  color: var(--sage-200);
}
.reviews {
  display: grid;
  gap: var(--gap-grid);
}
.review {
  display: grid;
  gap: var(--space-3);
  align-content: start;
  padding: var(--spacing-card);
  border-radius: var(--radius-xl);
  background: var(--surface);
  border: 1px solid var(--line);
  transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out);
}
.review:hover {
  transform: translateY(-4px) rotate(-0.5deg);
  box-shadow: var(--shadow-lg);
}
.review__text {
  font-family: var(--font-display);
  font-size: var(--text-20);
  line-height: 1.45;
}
.review__author {
  font-size: var(--text-12);
  color: var(--muted);
}
.review__author strong {
  color: var(--ink);
}
.reviews__more {
  display: flex;
  justify-content: center;
  margin-top: var(--space-5);
}

/* ---------- INSTAGRAM ---------- */
.insta {
  padding-top: 0;
}
.insta__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-7);
}
.insta__head .section-head {
  margin-bottom: 0;
}
.insta__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-2);
}
.insta__item {
  position: relative;
  display: block;
  aspect-ratio: 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--sage-100);
}
.insta__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-slow) var(--ease-out), filter var(--dur-slow) var(--ease-out);
}
.insta__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--space-2);
  padding: var(--space-3);
  background: linear-gradient(180deg, rgba(43, 49, 33, 0) 30%, rgba(43, 49, 33, 0.85));
  color: var(--cream-50);
  font-size: var(--text-14);
  font-weight: 500;
  line-height: 1.4;
  opacity: 0;
  transition: opacity var(--dur-med) var(--ease-out);
}
.insta__overlay svg {
  width: 24px;
  height: 24px;
  transform: translateY(8px);
  transition: transform var(--dur-med) var(--ease-out);
}
.insta__item:hover img {
  transform: scale(1.06);
}
.insta__item:hover .insta__overlay,
.insta__item:focus-visible .insta__overlay {
  opacity: 1;
}
.insta__item:hover .insta__overlay svg {
  transform: none;
}
@media (min-width: 640px) {
  .insta__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-3);
  }
}
@media (min-width: 1024px) {
  .insta__grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

/* ---------- FAQ ---------- */
.faq-wrap {
  display: grid;
  gap: var(--space-5);
}
.faq-wrap__head {
  margin-bottom: 0;
  align-content: start;
}
.faq-wrap__btn {
  justify-self: start;
}

/* ---------- CONTATO ---------- */
.contact {
  overflow: hidden;
}
.contact__glow {
  position: absolute;
  width: 720px;
  height: 720px;
  left: -240px;
  bottom: -360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(241, 198, 127, 0.3), transparent 65%);
  pointer-events: none;
}
.contact__inner {
  position: relative;
  display: grid;
  gap: var(--space-7);
}
.contact__copy {
  display: grid;
  gap: var(--space-4);
  justify-items: start;
}
.contact__title {
  font-size: var(--text-h2);
  color: var(--cream-50);
  max-width: 18ch;
}
.contact__title em {
  color: var(--glow-400);
}
.info {
  display: grid;
  gap: var(--space-4);
  margin: var(--space-4) 0 0;
  padding-top: var(--space-5);
  border-top: 1px solid rgba(230, 234, 219, 0.14);
  width: 100%;
}
.info__item {
  display: grid;
  gap: var(--space-1);
}
.info dt {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-12);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--glow-300);
}
.info dt svg {
  width: 16px;
  height: 16px;
}
.info dd {
  margin: 0;
  color: var(--sage-100);
}
.info dd a {
  background-image: linear-gradient(var(--glow-400), var(--glow-400));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size var(--dur-med) var(--ease-out);
}
.info dd a:hover {
  background-size: 100% 1px;
}
.info__line {
  display: block;
}
.map {
  position: relative;
  min-height: 360px;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  background: var(--sage-700);
  box-shadow: 0 0 0 1px rgba(230, 234, 219, 0.14), var(--shadow-lg);
}
.map__fallback {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: var(--space-3);
  color: var(--sage-200);
  font-size: var(--text-14);
  background: radial-gradient(60% 60% at 50% 45%, rgba(241, 198, 127, 0.18), transparent 70%);
}
.map__mark {
  width: 64px;
  height: 72px;
}
.map iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  filter: saturate(0.7) sepia(0.12);
  transition: filter var(--dur-slow);
}
.map:hover iframe {
  filter: none;
}
.map__cta {
  position: absolute;
  left: var(--space-3);
  bottom: var(--space-3);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  height: var(--control-md);
  padding-inline: var(--space-3);
  border-radius: var(--radius-pill);
  background: var(--cream-50);
  color: var(--sage-900);
  font-size: var(--text-14);
  font-weight: 600;
  box-shadow: var(--shadow-md);
  transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med);
}
.map__cta svg {
  width: 16px;
  height: 16px;
}
.map__cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

/* ---------- RESPONSIVO ---------- */
@media (min-width: 640px) {
  .services {
    grid-template-columns: repeat(2, 1fr);
  }
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
  .reviews {
    grid-template-columns: repeat(2, 1fr);
  }
  .values {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero {
    padding-block: var(--space-7) var(--space-10);
    min-height: calc(100svh - var(--header-h));
    display: grid;
    align-items: center;
  }
  .hero__grid {
    grid-template-columns: 1.1fr 1fr;
    gap: var(--space-9);
  }
  .split {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-9);
  }
  .services {
    grid-template-columns: repeat(4, 1fr);
  }
  .steps {
    grid-template-columns: repeat(4, 1fr);
  }
  .about {
    grid-template-columns: 5fr 6fr;
    gap: var(--space-10);
  }
  .about__visual {
    padding-bottom: var(--space-8);
  }
  .about__quote {
    position: absolute;
    margin: 0;
    bottom: 0;
    right: calc(var(--space-7) * -1);
    width: 80%;
  }
  .homecare__inner {
    grid-template-columns: 1.3fr 1fr;
    gap: var(--space-9);
  }
  .reviews {
    grid-template-columns: repeat(4, 1fr);
  }
  .faq-wrap {
    grid-template-columns: 1fr 1.4fr;
    gap: var(--space-9);
    align-items: start;
  }
  .faq-wrap__head {
    position: sticky;
    top: calc(var(--header-h) + var(--space-5));
  }
  .contact__inner {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-9);
    align-items: stretch;
  }
  .map {
    min-height: 100%;
  }
}
</style>
