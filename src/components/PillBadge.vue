<template>
    <a :href="linkUrl" :aria-label="linkAlt">
        <span :class="['pill-badge', pillStyle]">
            <img :src="imgUrl" :alt="imgAlt" class="pill-badge-icon" />
            {{ pillText }}
        </span>
    </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "PillBadge",
    props: {
        linkUrl: { type: String, default: null },
        linkAlt: { type: String, default: null },
        pillStyle: { type: String, default: "" },
        imgUrl: { type: String, required: true },
        imgAlt: { type: String, default: "" },
        pillText: { type: String, default: "" },
    },
});
</script>

<style lang="scss" scoped>
@use '@/style.scss' as *;

.pill-badge {
    display: inline-flex;
    align-items: center;
    border-radius: 1rem;
    padding: 0.125rem 0.8rem;
    font-size: 0.875rem;
}

.pill-badge--blue {
    background-color: #dbeafe;
    color: #3b82f6;
}

.pill-badge--purple {
    background-color: #e4e3ff;
    color: #4741FE;

    img {
        filter: brightness(0) saturate(100%) invert(24%) sepia(90%) saturate(4764%) hue-rotate(241deg) brightness(100%) contrast(100%);
    }
}

.pill-badge-icon {
    width: 0.875rem;
    height: 0.875rem;
    margin-left: -0.25rem;
    margin-right: 0.375rem;
}

@media (prefers-color-scheme: dark) {
    .pill-badge--blue {
        background-color: #3b82f6;
        color: #eff6ff;
    }

    .pill-badge--purple {
        background-color: #4741FE;
        color: #f0efff;

        img {
            filter: brightness(0) saturate(100%) invert(91%) sepia(46%) saturate(3265%) hue-rotate(180deg) brightness(109%) contrast(101%);
        }
    }
}
</style>
