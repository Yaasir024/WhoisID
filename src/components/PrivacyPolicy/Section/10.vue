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
  <section id="section-10" ref="sectionRef">
        <h1 class="">
            10. Retention of Personal Data
        </h1>
        <p class="">
            Here you can find our data retention principles that is the length of the period for which we keep Personal Data.
        </p>
        <ol class="">
            <li class="">
                10.1 To determine the appropriate retention period, we consider the amount, nature and sensitivity of the Personal Data and the purposes for which we process it. We must also consider periods for which we may need to retain Personal Data in order to meet our legal obligations or to deal with complaints or queries and to protect our legal rights in the event of claims being made.
            </li>
            <li class="">
                10.2 We shall store your Personal Data for as long as necessary to carry out the purposes for which we originally collected it and for other business purposes explained in this Privacy Notice or as long as required by law or in accordance with the law, or for the purposes stated in this Privacy Notice. For example, there is often a statutory retention period for accounting documentation.
            </li>
            <li class="">
                10.3 We store the data of End-Users during the period set forth in the Agreement (we may have different data retention periods agreed upon with the Client) or as long as it is necessary for possible establishment, exercise or defense of legal claims of End-Users, Clients or ourselves. For more information about the data retention period, you should read the privacy notice provided to you by the Client.
            </li>
            <li class="">
                10.4 We may store your Personal Data, for a longer period than the Agreement duration if we have a lawful basis do to so, e.g. you have given us consent to use your Personal Data for the development of our Services or we have assessed that we have legitimate aim to do so, e.g. in pseudonymized form or for the purpose of the Service history log.
            </li>
            <li class="">
                10.5 After the expiration of the Personal Data storage period, we shall anonymize or permanently erase your Personal Data. Please note that  WhoisID processes, maintains, and uses aggregated or de-identified information only in a de-identified fashion and will not attempt to re-identify such information, except as permitted by law.
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
