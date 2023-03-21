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
  <section id="section-6" ref="sectionRef">
        <h1 class="">
            6. Technological aspects of our Service provision and development
        </h1>
        <p class="">
            To verify your identity in a secure and less error-prone way, we use automatic algorithms and machine learning for our Service. Read about it in this section.
        </p>
        <ol class="">
            <li class="">
                6.1 Machine learning means the use and development of computer systems that are able to learn and adapt without following explicit instructions, by using algorithms and statistical models to analyze and draw inferences from patterns in data. Using machine learning helps us to recognize specific patterns in information and make predictions about new sets of information based on those patterns. The main aim of teaching our models is to have more precise (i.e. accurate, less error-prone) and safe models that also avoid bias. All models are constantly reviewed by the model itself and by humans, and adjustments for more precise and error-free results are made, as necessary. As a result of such machine learning processes WhoisID's service improves.
            </li>
            <li class="">
                6.2 It is important that algorithms are built, trained and tested on training sets, which comprise of real data. All machine learning models are highly dependent on the quality of input data. Such processing is only done for internal use to improve and develop our services and done only based on the contractual mandate received from our Clients under the precondition that a valid legal basis has been obtained.
            </li>
            <li class="">
                6.3 WhoisID stands for the concept that machine learning is conducted in an ethical and trustworthy way that respects human rights and freedoms. Machine learning as a tool will enable End-Users to receive better, more secure and faster services provided by WhoisID's Clients and help to prevent and detect fraud. Datasets used to develop, test and train are kept in separate, monitored and highly secure data research environment.
            </li>
            <li class="">
                6.4 WhoisID uses a verification engine trained with machine learning to provide Services to our Clients. The verification process is either automated, semi-automated or done by a human:
                <ol class="mt-[16px]">
                    <li class="">
                        (1) Semi-automated verification process. This means that a human will be involved if the automated verification algorithm (the Verification Engine) is not able to reach a decision on its own. Simply put the verification engine checks the input data against the predetermined decision profile and based on that reaches a decision. The Verification Engine is constantly learning to correctly classify and match information, detect identity fraud or theft, and to verify identity, however the assistance of a human could be needed if the picture is blurry, confidence of the quality of extracted information is low or the Verification Engine runs into some other difficulty in analyzing the verification session.
                    </li>
                    <li class="">
                        (2) Fully automated verification process. This means that the Verification Engine verifies your identity without human involvement. When performing a fully automated verification process, our Client informs you of the automated processing and may ask your explicit consent to do this. However, in some cases, where the Client has other legal grounds for such processing e.g. obligations under applicable law – consent may not be needed. You have the right to ask for information and an explanation regarding the logic behind the decision the Verification Engine has made; at any time, you will have the right to request human intervention or object to the decision made on grounds relating to your particular situation.
                    </li>
                    <li class="">
                        (3) We may have different solutions for processing with different Clients, e.g. in some cases the verification session will only be analyzed by a human.
                    </li>
                </ol>
            </li>
            <li class="">
                6.5 We would like to point out that the decision on whether the Client provides its service to the End-User is made by the Client. Meaning, even if the verification flow has been fully automated, the verification result will be taken into account by the Client for the decision on whether to provide its service or not. The verification results itself - “Approved”, “Resubmission needed” or “Declined” - are not determinative for whether the Client’s service is provided to the End-User.
            </li>
            <li class="">
                6.6 Machine learning is also the driving engine for WhoisID’s innovation when improving our Services, testing new features and ensuring quality Services. For further improvement of our Services, Service performance and features testing (A/B tests) is used to analyze the End-User experience and response regarding changes to the structure, text or any other feature of WhoisID’s Service.
            </li>
            <li class="">
                6.7 Detection of activities matching a certain pattern may lead to profile generation, in particular for fraud prevention and detection purposes. WhoisID analyzes and compares the data points available in relation to the End-User. For example, WhoisID may compare if session media matches each other and if technical data indicates associations with previously occurred suspicious sessions. Such processing activity may be deemed as generating a profile of the End-User. Results of such analysis are displayed to the Client.
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
