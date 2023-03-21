<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["sectionId"]);
const emit = defineEmits(["section-in-viewport"]);
const sectionRef = ref(null);
onMounted(() => {
  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.2, // Trigger the callback when 50% of the element is in the viewport
  });
  // Observe the section element
  observer.observe(sectionRef.value);
});
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Emit an event with the section ID to the parent component
      emit("section-in-viewport", props.sectionId);
    }
  });
};
</script>

<template>
  <section id="section-9" ref="sectionRef">
        <h1 class="">
            9. Security of Personal Data
        </h1>
        <p class="">
            Security is of utmost importance to us. We do our best to protect Personal Data in our hands.
        </p>
        <ol class="">
            <li class="">
                9.1 We apply various commercially reasonable measures (physical, technical, organizational) to protect your Personal Data from unauthorized or arbitrary modifications, disclosure, acquisition, destruction, loss, theft, misuse, alteration or unauthorized access.
            </li>
            <li class="">
                9.2 However, please note that electronic transmission or storage of information is not always 100% secure. Therefore, despite the security measures that we have put in place to protect Personal Data about you, we cannot guarantee that loss, misuse, or alteration of data will never occur. If you have any information about an actual or suspected data breach, please inform us immediately at legal@whoisid.com. We will deal with the issue immediately and inform the Data Protection Inspectorate (if applicable).
            </li>
        </ol>
    </section>
</template>
<style scoped>
section {
  margin-bottom: 32px;
  max-width: 890px;
}
section h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 8px;
}
section h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 8px;
}
section p {
  font-size: 16px;
  line-height: 29px;
  text-align: justify;
  color: #000000;
  margin-bottom: 16px;
}
section li {
  font-weight: 500;
  font-size: 16px;
  line-height: 29px;
  text-align: justify;
  color: #000000;
  margin-bottom: 16px;
}
section li span {
  font-weight: 600;
}
.link {
  text-decoration: underline;
}
</style>
