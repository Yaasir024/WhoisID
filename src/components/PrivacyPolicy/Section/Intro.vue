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
  <section id="intro" ref="sectionRef">
    <h1 class="head">Introduction</h1>
    <p class="section-text">
      Thank you for taking the time to familiarize yourself with WhoisID ’s
      (“WhoisID” “we” or “us”) privacy notice (the “Privacy Notice”) which
      describes how we collect, use, and disclose information about you. This
      Privacy Notice applies to information we collect from Data Subjects when
      you access or use our Services or otherwise interact with us, such as by
      using our demo app, or visiting our Website or offices.
    </p>
    <p class="">
      WhoisID is specialized in providing online identification services. We
      consider ourselves the new standard in identity verification, and we allow
      our contractual parties to verify your identity document. We mainly
      process End-User Personal Data as a Data Processor for the benefit of the
      Client in order to provide our Services to our Clients. Therefore, you
      should always read both this Privacy Notice and the information about data
      processing according to the Client’s privacy notice (i.e., the privacy
      notice of the company for whom you identify yourself for).
    </p>
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
