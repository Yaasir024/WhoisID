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
  <section id="section-14" ref="sectionRef">
        <h1 class="">
            14. Availability of and changes to the Privacy Notice
        </h1>
        <p class="">
            Here you can find information about changes made to the Privacy Notice and how we inform you about the changes.
        </p>
        <ol class="">
            <li class="">
                14.1 This Privacy Notice is available on our Website.
            </li>
            <li class="">
                14.2 Kindly note that we may modify the Privacy Notice from time to time. If we make changes, we will notify you of such as by revising the date of this Privacy Notice. If we make material changes, we may provide you with additional notice (such as by adding a statement to the Services or sending you a notification).
            </li>
            <li class="">
                14.3 You are advised to review this Privacy Notice periodically for any changes. Changes to this Privacy Notice are effective when they are posted on this page.
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
