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
  <section id="section-1" ref="sectionRef">
    <h1 class="">1. Our Privacy Notice in a nutshell</h1>
    <p class="">Here is information on this notice in a nutshell:</p>
    <ol class="points-list">
      <li class="">
        1.1 In this Privacy Notice we explain how and on what basis we collect,
        store and process Personal Data of Data Subjects. We also explain what
        Data Subjects’ rights are and our obligations and liabilities.
      </li>
      <li class="">
        1.2 Except as otherwise described in this Privacy Notice, WhoisID
        processes End-Users’ information as directed by our Clients for the
        provision of our Services. Our Clients who are the Data Controllers of
        End-User Personal Data determine the purpose of processing End-User
        Personal Data and, accordingly, WhoisID is a Data Processor of End-User
        Personal Data with respect to those Services. WhoisID is always a Data
        Controller for Personal Data of other Data Subjects, such as Visitors
        and Office Visitors. For End-Users to fully understand how Personal Data
        is processed in connection with the Service, End-Users should review
        both privacy notices, i.e., the notice shared with the End-Users by
        WhoisID and the privacy notices of those Clients’, whose services the
        End-Users are getting verified for.
      </li>
      <li class="">
        1.3 There are jurisdiction specific notices available such as the Notice
        of Collection and Additional Information for Residents of Nigeria.
      </li>
      <li class="">
        1.4 Please review this Privacy Notice carefully and contact us if you
        have any comments, questions or concerns. You can reach our data
        protection officer (DPO) via email at legal@whoisidafrica.com.
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
