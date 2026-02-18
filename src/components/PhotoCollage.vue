<template>
  <div class="collage">
    <div class="photo-card photo-card--short">
      <img :src="Orchestra" :alt="String(t('photoCollage.orchestra'))" class="photo" />
    </div>

    <div class="photo-card photo-card--desktop-tall">
      <img :src="GoRn" :alt="String(t('photoCollage.gorn'))" class="photo photo--top-mobile" />
    </div>

    <div class="photo-card">
      <img :src="Lab" :alt="String(t('photoCollage.lab'))" class="photo" />
    </div>

    <div class="photo-card photo-card--tall">
      <img :src="Maps" :alt="String(t('photoCollage.maps'))" class="photo" />
    </div>

    <div class="photo-card photo-card--tall">
      <img :src="Subaru" :alt="String(t('photoCollage.subaru'))" class="photo" />
    </div>

    <div class="photo-card photo-card--short">
      <img :src="Selfie" :alt="String(t('photoCollage.selfie'))" class="photo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Orchestra from '@/assets/images/photos/shalom.webp';
import GoRn from '@/assets/images/photos/gorn-2023.webp';
import Lab from '@/assets/images/photos/laboratory.webp';
import Maps from '@/assets/images/photos/maps.webp';
import Selfie from '@/assets/images/photos/classic.webp';
import Subaru from '@/assets/images/photos/spotting.webp';
import { useI18n } from '@/i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.collage {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 10rem));
  gap: 1rem;
  margin: 2rem 0;
}

.photo-card {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-soft);
  }
}

.photo-card--short {
  height: 10rem;
}

.photo-card--tall {
  grid-row: span 2;
}

.photo-card--desktop-tall {
  grid-row: span 1;
}

.photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.photo--top-mobile {
  object-position: top;
}

@media (min-width: 640px) {
  .collage {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 10rem));
  }

  .photo-card--desktop-tall {
    grid-row: span 2;
  }

  .photo--top-mobile {
    object-position: center;
  }
}
</style>
