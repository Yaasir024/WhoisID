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
  <section id="section-7" ref="sectionRef">
    <h1 class="">7. Data Subject’s rights in relation to Personal Data</h1>
    <p class="">Read about your data protection rights.</p>
    <ol class="">
      <li class="">
        7.1 Depending on where you reside, you may have the right to (1) request
        to know more about and access your personal information, (2) request
        deletion of your personal information, (3) request correction of
        inaccurate personal information; (4) object to certain processing, (5)
        withdraw your consent where we process your information on that basis,
        and (6) request we restrict certain processing. More detailed
        information about each right is provided below.
      </li>
      <li class="">
        7.2 If you wish to exercise any of your rights regarding Personal Data
        or ask questions about the Privacy Notice, please submit a corresponding
        request to us at legal@whoisid.com . We will respond to your request by
        email as a rule no later than within one month or sooner if required by
        applicable law.
      </li>
      <li class="">
        7.3 Please note that before we can provide you with the requested
        information regarding your Personal Data, we may need to verify your
        identity. Please also note that if your request concerns data we have
        processed as a Data Processor (i.e. in the course of Service provision)
        you must submit your request to the Client who is the Data Controller of
        processing of your Personal Data may fulfill the request. We will inform
        you if this is the case.
      </li>
      <li class="">
        7.4 Depending on where you reside, you as a Data Subject may have the
        following rights in relation to your Personal Data:
        <ol class="mt-[16px]">
          <li class="">
            (1) The Right to Know: The right to get confirmation whether we are
            processing Personal Data about you and to obtain certain
            personalized details about the Personal Data we have collected about
            you, including:
            <ul class="list">
              <li class="">the categories of Personal Data collected;</li>
              <li class="">the categories of sources of the Personal Data;</li>
              <li class="">
                the purposes for which the Personal Data were collected;
              </li>
              <li class="">
                the categories of Personal Data disclosed to third parties (if
                any), and the categories of recipients to whom the Personal Data
                were disclosed;
              </li>
              <li class="">
                information about automated decision-making (if any);
              </li>
              <li class="">
                the categories of Personal Data shared for cross-context
                behavioral advertising purposes (if any), and the categories of
                recipients to whom the Personal Data were disclosed for those
                purposes; and
              </li>
              <li class="">
                the categories of Personal Data sold (if any), and the
                categories of third parties to whom the Personal Data were sold.
                Please note that as stated in section 7.4(10) below, we
                generally do not sell your data that we collect in the course of
                providing identity verification services nor share it for
                cross-context behavioral advertising purposes.
              </li>
            </ul>
          </li>
          <li class="">
            (2) The Right to Access & Portability: The right to obtain access to the Personal Data we have collected about you and the right to obtain a copy of the Personal Data in a portable and, to the extent technically feasible, readily usable format that allows you to transmit the data to another entity without hindrance.
          </li>
          <li class="">
            (3) The Right to Correction: The right to correct inaccuracies in your personal data, taking into account the nature of the personal data and the purposes of the processing of the personal data.
          </li>
          <li class="">
            (4) The Right to Deletion: The right to have us delete the personal data we maintain about you.
          </li>
          <li class="">
            (5) The Right to Non-Discrimination: The right to not receive retaliatory or discriminatory treatment in connection with a request to exercise the above rights. However, please note that if you exercise these rights it limits our ability to process Personal Data, we may no longer be able to engage with you in the same manner.
          </li>
          <li class="">
            (6) The Right to withdraw the consent: The right to take back the consent you have given to us for the processing of Personal Data. Please note that withdrawal of your consent shall not affect the legality of the processing that was made on the basis of consent before the withdrawal.
          </li>
          <li class="">
            (7) The Right to object: The Right to file an objection if your Personal Data processing takes place on the basis of our legitimate interest or public interest.
          </li>
          <li class="">
            (8) The Right to restriction of processing: The right which in certain cases allows you to direct us to limit the processing of your Personal Data for a certain period of time (e.g., if you have filed an objection to Personal Data processing).
          </li>
          <li class="">
            (9) The Right to submit a complaint and make appeals: If you find that your rights have been breached, we would be glad if you contact us at legal@whoisid.com (including for any appeals of our decisions). However, you also have the right to complain to a Data Protection Authority about our collection and use of your Personal Data.
          </li>
          <li class="">
            (10) Opting Out of Targeted Advertising, Sharing, and Sales. Our “sale,” “sharing” and “targeted advertising” activities do not apply to personal information that we collect in the course of providing identity verification services to our Clients. Rather, we may “sell” or “share” information relating to (1) individual visitors browsing our website and (2) the business contact information of our Client Representatives for purposes such as serving advertisements to those audiences on non-WhoisID properties. We may process Personal Data to understand and improve your experience with our Services and to serve you advertisements on non-WhoisID properties via Cookies. For more information about the processing and your rights, please see the Cookie Policy. Some of these activities may be considered “sales” or “sharing” of your personal information or “targeted advertising” under the law that applies to you. In addition, we may disclose your information to other entities for marketing purposes as described above, which may constitute “sales” of your personal information under certain laws. Depending on where you reside, you may have the right to opt out of targeted advertising, sharing, and sales of your personal information. You can do so by following the prompts here.
          </li>
          <li class="">
            (11) Authorized Agents. You may have a right to submit a rights request via an authorized agent. If you are submitting a rights request as an authorized agent, you are required to submit proof of your authorization to make the request, such as a valid power of attorney or proof that you have signed permission from the individual who is the subject of the request. Please do not provide any sensitive personal information in connection with this request, such as a driver's license or other government-issued ID. In some cases, we may be required to contact the individual who is the subject of the request to verify his or her own identity or confirm you have permission to submit this request. If you are an authorized agent seeking to make a request, please contact us at legal@whoisid.com. Any questions or requests regarding WhoisID’s processing of End-User Personal Data for the provision of Services to  WhoisID’s Client should be directed to that Client who is acting as the Data Controller for Personal Data about End-Users.
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
.list {
    padding-left: 20px;
}
.list li {
  list-style-type: disc;

}
</style>
