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
  <section id="section-8" ref="sectionRef">
        <h1 class="">8. Disclosure and transfer of Personal Data</h1>
        <p class="">
            In this section you will find information about possible disclosure and transfer of your Personal Data.
        </p>
        <ol class="">
            <li class="">
                8.1 Disclosure of Personal Data to authorities. Please note that due to legal requirements, we may be obliged to disclose or grant access to your Personal Data to the authorities and the supervisory authority (e.g. a court or a government agency).
            </li>
            <li class="">
                8.2 Disclosure to Data Controllers and Data Processors. Unless stated otherwise in this Privacy Notice or noted otherwise to you separately, we may disclose your Personal Data to Data Controllers for whom we are Data Processors (e.g. Clients) and to our authorized Data Processors (sub-processors), as well as to persons who are legally entitled to receive your Personal Data. For example, a End-User’s Personal Data, including biometric data, can be processed by authorized sub-processors that provide identity verification core services to  WhoisID; Client Representative’s Personal Data can be shared with our advertising and marketing partners, companies carrying out satisfaction surveys, debt collection agencies, credit registers, authorities and organizations intermediating or providing (electronic) mail, compliance or payment services and the like, Office Visitors Personal Data can be shared with IT and security partners, provided that:

                <ol class="mt-[16px]">
                    <li class="">
                        (1) the respective purpose and the processing are lawful;
                    </li>
                    <li class="">
                        (2) we have diligently assessed that the authorized Data Processors or sub-processor will comply with the data protection requirements;
                    </li>
                    <li class="">
                        (3) the Personal Data processing is carried out in accordance with our guidelines and on the basis of a valid agreement.
                    </li>
                    <li class="">
                        (4) If you have questions about our authorized Data Processors or sub-processors, please contact us at legal@whoisID.com.
                    </li>
                </ol>
            </li>
            <li class="">
                8.3 Please note that End-User’s Personal Data can only be shared with WhoisID’s sub-processors as well as to persons who are legally entitled to receive your Personal Data, if there is a valid legal basis.
            </li>
            <li class="">
                8.4 Transfer of Personal Data. We process your Personal Data within the EEA. In the event that we need to transmit your Personal Data outside the EEA (e.g. for utilizing the sub-processors’ services and technical infrastructure), the transmission shall be in accordance with the requirements, principles and safeguards as stated in the applicable data protection laws, such as relying on adequacy decisions issued by or standard contractual clauses approved by the European Commission (or other relevant authority). In cases where  WhoisID acts as the Data Controller, we make available further information on the safeguards applied (if relevant) upon your request.
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
