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
  <section id="section-3" ref="sectionRef">
      <h1 class="">3. Our main privacy principles</h1>
      <p class="">
        Here you can find the privacy principles we follow when processing
        Personal Data.
      </p>
      <p class="">
        We follow what we call the “Fundamental Six”, that is, six principles
        regarding WhoisID’s data processing activities:
      </p>
      <ol class="points-list">
        <li class="">
          3.1 First, we strive to process Personal Data in a reliable and
          confidential way. Each person’s right to the protection of their
          Personal Data is important to us and we shall do our best to ensure
          that Personal Data collected by us is well protected. We regularly
          evaluate the risks associated with the processing of Personal Data and
          shall apply appropriate mitigation strategies to hedge risks.
        </li>
        <li class="">
          3.1 First, we strive to process Personal Data in a reliable and
          confidential way. Each person’s right to the protection of their
          Personal Data is important to us and we shall do our best to ensure
          that Personal Data collected by us is well protected. We regularly
          evaluate the risks associated with the processing of Personal Data and
          shall apply appropriate mitigation strategies to hedge risks.
        </li>
        <li class="">
          3.3 Third, we process Personal Data lawfully and purposefully. We set
          clear goals for the processing of Personal Data and process Personal
          Data for these purposes only. We refrain from collecting or processing
          the data that we do not need. WhoisID has the right to delete/blur or
          make other ways unreadable data/documents presented in the session
          that are not necessary for WhoisID’s service provision. This also
          means all transfers of Personal Data must have a valid legal basis.
        </li>
        <li class="">
          3.4 Fourth, we process Personal Data in a transparent and fair way. We
          strive for an appropriate secure, honest and lawful manner of
          processing the Personal Data to prevent the unauthorised disclosure or
          inappropriate use of Personal Data. We also work to eliminate the
          possibility of discrimination or bias in our Service.
        </li>
        <li class="">
          3.5 Fifth, we store Personal Data only for as long as the retention of
          data is required by law, a contract or is necessary for the provision
          of our Services or required for protecting us against legal claims. At
          the end of the retention period, we shall permanently erase the
          Personal Data or anonymize it.
        </li>
        <li class="">
          3.6 Sixth, we do our best to make sure that the Personal Data we
          process is accurate and limited to what is necessary.
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
