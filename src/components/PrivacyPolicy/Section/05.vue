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
    threshold: 0, // Trigger the callback when 50% of the element is in the viewport
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
  <section id="section-5" ref="sectionRef">
        <h1 class="">
            5. Legal grounds and Purposes of processing
        </h1>
        <p class="">Here you may read why and on what grounds we process your Personal Data.</p>
        <ol class="">
            <li class="">
                5.1 We process Personal Data for the provision of our Services. Regarding Personal Data about End-Users, WhoisID's main purpose for processing is to provide our Services to our Clients.
                <ol class="mt-[16px]">
                    <li class="">
                        (1) Generally, the main purpose of the Service is to verify your identity, and for this purpose we capture photos and video (if applicable) of the verification session as well as data extracted from the same, such as face scans and other measurements (such extracted data may be biometric data and/or sensitive Personal Data in certain jurisdictions), and the document(s) provided for verification. In addition, for verification, we conduct fraud prevention and detection checks that are an integral part of our Service. Identification process results with information about the completed checks are categorized as “Approved”, “Resubmission needed” or “Declined”.
                    </li>
                    <li class="">
                        (2) In some cases, we may also further check whether we have previously verified an End-User on behalf of the same or a different Client by comparing the session with the previous session. This helps our Clients not only verify identities but further protects them and their End-Users by helping them understand when an End-User may be generating multiple identities, tampering documents or manipulating device or network information. To do all of this, we closely examine the information provided by the End-User, including machine-readable data, metadata and device and network information.
                    </li>
                    <li class="">
                        (3) We mainly process End-User Personal Data as a Data Processor for the benefit of the Client in order to fulfill the Agreement entered into with the Client for (i) performance of the Agreement (including for the provision of the Service, and performance of any obligations or realization of any rights arising from the Agreement; (ii) the purpose of realization of rights and fulfilment of obligations deriving from legal acts; and (iii) processing your inquiries and requests.
                    </li>
                    <li class="">
                        (4) The legal basis for the processing depends on the Client as the use cases and related legal requirements vary from Client to Client. The legal basis is selected and ensured by the Client. In some cases we or our Client may ask you to grant us consent for processing. WhoisID may, as determined and as appropriate, choose to collect the consent itself, however, the relationship between the End-User and the Client remains unaffected for such collection of consent by WhoisID. Please note that we cannot provide the Service in respect of an anonymous End-User, and therefore the use of our Service is subject to the disclosure of Personal Data to us and allowing the processing of Personal Data by the Client and us. However, giving consent is voluntary, but failure to do so may mean that we may not be able to provide the Service. For example, we will not be able to verify your identity. If you have granted the Client and/or us a consent to process Personal Data, the details of such processes and purposes thereof will be outlined in the consent itself
                    </li>
                    <li class="">
                        (5) To the extent permitted by law and the Agreement, WhoisID may also use Personal Data for other reasonably necessary operational purposes as part of provision of the Service, or rely on its legitimate interest for such processing as described in the next section.
                    </li>
                </ol>
            </li>
            <li class="">
                5.2 We also may process Personal Data of Data Subjects, including End-Users, as a Controller if processing is necessary in our legitimate interests, meaning our interest in the management and direction of our business in order to be able to offer the best possible services on the market. Pursuant to our “Fundamental Six” principles for data processing, we only process Personal Data on this legal basis (legitimate interest) after careful assessment in order to ascertain that the legitimate interest is in compliance with the interests and rights of a Data Subject (after carrying out the so-called three-step test) and to the extent it is permitted by law and the Agreement, as applicable. For our legitimate interest, we may process data for the following purposes:
                <ol class="mt-[16px]">
                    <li class="">
                        (1) for analyzing the use of our Service, and using research and analysis results, among other methods, for carrying out satisfaction surveys, feedback questionnaires and developing our products and services, including development of autonomous and automated decision-making processes;
                    </li>
                    <li class="">
                        (2) for sending out newsletters, for marketing and developing and promoting our Services, for organization of campaigns, including personalized and targeted campaigns, and measuring the effectiveness of the performed marketing activities. Please note that for sending out newsletters, we only process your contact details;
                    </li>
                    <li class="">
                        (3) for ensuring a trust-based relationship with Clients and End-Users, for example, Personal Data processing that is strictly necessary to determine the ultimate beneficiaries, being PEP and/or to prevent fraud, e.g. and checks in public sanction lists or our own Service history;
                    </li>
                    <li class="">
                        (4) for administration and analysis of the Client base to improve the availability, selection and quality of Services and products, and to make our Services more personalized and the best possible;
                    </li>
                    <li class="">
                        (5) for building and managing of our Client relationships;
                    </li>
                    <li class="">
                        (6) for analysis of identifiers and Personal Data collected upon the use of websites, mobile applications and other Services. We may use the collected data for web analysis or for the analysis of mobile and information society services, for ensuring and improving functioning, for statistical purposes and for analyzing Visitor and Client Representative behavior, and for improving the experience of Visitors and Client Representatives and for providing better and more personalized Services;
                    </li>
                    <li class="">
                        (7) for monitoring the Services. We may record the messages and instructions given on our premises or by means of communication (e-mail, telephone, etc.), as well as information and other operations carried out by us, and shall use those recordings as needed to evidence instructions or other operations;
                    </li>
                    <li class="">
                        (8) for network, information and cyber security considerations, for example, for fighting against piracy and for ensuring the security of the Websites and Service, as well as for the measures taken for making and storing backup copies;
                    </li>
                    <li class="">
                        (9) for the establishment, exercise or defense of legal claims; and ensuring compliance with applicable regulations, including retaining proof of evidence of such for compliance with its legal obligations;
                    </li>
                    <li class="">
                        (10) for conducting product and market research for purposes of quality assurance, product improvements, developments and assessing its market fit, this includes contacting and communication, interviews, making conclusions, recording of such communications for a limited period of time, etc. with End-Users, Client Representatives and other relevant data subjects. This includes creating anonymised data or anonymized or aggregated overviews and summaries of the aforementioned. Please note that WhoisID processes, maintains, and uses aggregated or de-identified information only in a de-identified fashion and will not attempt to re-identify such information, except as permitted by law;
                    </li>
                    <li class="">
                        (11) for satisfying our legal obligations with respect to the processing and retention of Personal Data, including for obtaining the relevant legal basis for processing certain Personal Data concerning certain End-Users. Obtaining and maintaining records that such legal basis has been obtained by us is important for us to be able to prove that we comply and adhere to our legal obligations outside of and in the European Union;
                    </li>
                    <li class="">
                        (12) for fraud prevention and detection purposes, to identify signs of fraud based on our internal fraud framework and advanced fraud prevention and detection techniques;
                    </li>
                    <li class="">
                        (13) for developing, testing, improving and altering the functionality of the Service, including for machine learning (as specified in section 6 below), data annotation, testing and training, and producing anonymised or anonymised and aggregated statistical reports and research;
                    </li>
                    <li class="">
                        (14) for reasons of substantial public interest on the basis of law, including but not limited to activities relating to fraud prevention and non-discrimination (e.g., bias mitigation).
                    </li>
                </ol>
            </li>
            <li class="">
                5.3 We may ask you to give us your consent for processing. WhoisID can process your personal data if you have given consent to the processing of your Personal Data for one or more specific purposes. Please note that giving consent is voluntary and you have the right to withdraw your consent at any time. For example, you can ask us to stop using your personal data for direct marketing purposes by using the unsubscribe function at the end of the marketing email. However, we remind you that the withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal. These are some of the cases where WhoisID processes your data based on your consent.
                <ol class="mt-[16px]">
                    <li class="">
                        (1) Your consent is the legal basis for processing Personal Data when you share your findings related to responsible disclosure. Publishing your name and/or picture on our website is only done under your written consent. More about responsible disclosure can be read here.
                    </li>
                    <li class="">
                        (2) Based on your consent, we may use your Personal Data to send you marketing information about our Service which you have requested from us. Including, if you have submitted a request and/or filled out a relevant form on the Website.
                    </li>
                    <li class="">
                        (3) WhoisID asks Client Representative's consent before recording audio and video of the Client Representative call. The recording is used solely for WhoisID's analytical purposes and improvement of WhoisID's services and processes. However, please note that the processing may not be based on your consent and the withdrawal of your consent may not be applicable in case of recording different communications (including video) for product and market research (see as described in p 5.2(11)).
                    </li>
                    <li class="">
                        (4) WhoisID asks for your consent before you use WhoisID’s demo app or test WhoisID's session flow on our website. This is for the purpose of testing WhoisID’s verification flow. More information about WhoisID’s Demo app can be found in section 13.
                    </li>
                    <li class="">
                        (5) We may use your consent as the basis for the processing of personal data also in other cases. The purpose is then specified at the time of the collection of the consent.
                    </li>
                </ol>
            </li>
            <li class="">
                5.4 Processing related to Office Visitors. When you visit the office premises and workplaces, we process your Personal Data if processing is necessary in our legitimate interests. For example, our legitimate interest in detecting and preventing harmful or unlawful actions, ensuring safety of WhoisID’s property, confidential information and employees and establishing, exercising or defending of legal claims we may process Personal Data for the following purposes:
                <ol class="mt-[16px]">
                    <li class="">
                        (1) registering your visit to the office;
                    </li>
                    <li class="">
                        (2) conducting regular video surveillance in the marked areas;
                    </li>
                    <li class="">
                        (3) monitoring the use of WhoisID's office WiFi network and logging the traffic in the network. Such data is processed if you connect any of your devices to WhoisID's office WiFi network during your visit;
                    </li>
                    <li class="">
                        (4) ensuring the health and safety during emergency situations such as in case of widespread infectious diseases. During the spread of infectious diseases (e.g., COVID-19), for the purpose of ensuring adequate protection of the health and safety of WhoisID’s employees in the workplace, you may be required to provide proof of vaccination, valid negative test result, recovery certificate or other relevant data. In case you have no proof to provide, or you present medical contraindication to vaccination as proof, you will be offered on-site rapid testing, if available. Health related data contained in the presented information may be sensitive Personal Data . Before presenting any such Personal Data you are asked to provide us with explicit consent to visually assess your admissibility to the office premises and workplaces. In any case, no information presented to WhoisID is retained, meaning that no Personal Data will be accessible to WhoisID after the moment you present the information. Please note that giving consent is voluntary and you have the opportunity to withdraw your consent at any time, however if you refuse to provide the proof, conduct the rapid testing or if the rapid test result is positive, you must leave the office immediately.
                    </li>
                </ol>
            </li>
            <li class="">
                5.5 Processing for a new purpose. When Personal Data processing is carried out for a new purpose different from those for which the Personal Data was originally collected or is not based on the consent given by the Data Subject, we shall carefully assess the permissibility of such new processing. In order to determine whether the processing for the new purpose follows the purpose for which the Personal Data was originally collected, WhoisID shall take into consideration, inter alia, the following:
                <ol class="mt-[16px]">
                    <li class="">
                        (1) any link between the old and new purposes for which the Personal Data was collected and the intended further purposes of processing;
                    </li>
                    <li class="">
                        (2) the context of collecting the Personal Data, in particular regarding the relationship between the Data Subject and us;
                    </li>
                    <li>
                        (3) the nature of the Personal Data, in particular whether sensitive Personal Data are processed;
                    </li>
                    <li>
                        (4) possible consequences of the intended further processing for the Data Subjects;
                    </li>
                    <li class="">
                        (5) existence of appropriate protection measures which may consist in, for example, encryption and pseudonymization.
                    </li>
                </ol>
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
