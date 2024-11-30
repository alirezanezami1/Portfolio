<template>
  <div ref="container" class="keen-slider">
    <div
      v-for="(chunk, index) in chunkedComments"
      :key="index"
      class="keen-slider__slide"
    >
      <div class="comments-container">
        <div
          v-for="(comment, idx) in chunk"
          :key="idx"
          class="comment"
        >
          {{ comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useKeenSlider } from 'keen-slider/vue';

export default {
  setup() {
    const comments = ref([
      "کامنت اول",
      "کامنت دوم",
      "کامنت سوم",
      "کامنت چهارم",
      "کامنت پنجم",
      "کامنت ششم",
      // ... سایر کامنت‌ها
    ]);

    // تقسیم کامنت‌ها به گروه‌های دو تایی
    const chunkedComments = computed(() => {
      const chunkSize = 2;
      const chunks = [];
      for (let i = 0; i < comments.value.length; i += chunkSize) {
        chunks.push(comments.value.slice(i, i + chunkSize));
      }
      return chunks;
    });

    const [container, slider] = useKeenSlider({
      loop: true,
      slides: {
        perView: 1,
        spacing: 10,
      },
    });

    return { container, chunkedComments };
  },
};
</script>

<style scoped>
.keen-slider {
  display: flex;
}

.keen-slider__slide {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligns items to the start */
  height: 200px; /* Adjust height as necessary */
  overflow: hidden; /* Prevents overflow */
}

.comments-container {
  max-height: 200px; /* Adjust height as necessary for scrolling */
  overflow-y: auto; /* Enables vertical scrolling */
}

.comment {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px; /* Space between comments */
}
</style>