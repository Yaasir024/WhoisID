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
  <section id="section-11" ref="sectionRef">
    <h1 class="">11. Children’s Personal Data</h1>
    <p class="">
      Here you can find information on how we deal with children’s Personal
      Data.
    </p>
    <p class="">
      We may process the Personal Data of children (i.e. persons under 16* years
      of age; *depending on jurisdiction), the Data Controller shall take steps
      to ensure that there is a consent for such processing from a guardian of
      that child. If we learn that we have collected the Personal Data of a
      child without the guardian’s consent, we will take steps to delete the
      information as soon as possible.
    </p>
    <h3 class="">Additional Disclosures</h3>

    <ol class="">
      <li class="">
        (1) In the preceding 12 months, we have collected the following
        categories of Personal Information identifiers, biometric information,
        demographic information, commercial information, internet or other
        electronic activity information, geolocation data, audio, electronic, or
        similar information, professional or employment-related information,
        inferences, and sensitive personal information.
      </li>
      <li class="">
        (2) We collect personal information for business and commercial
        purposes. In the preceding 12 months, we have disclosed personal
        information for the business and commercial purposes and we have made
        disclosures for business purposes to the following categories of
        recipients:
        <ul class="list mt-[16px]">
          <li class="">
            The following categories of Personal Information: End-User related
            identifiers, demographic information, commercial information,,
            geolocation data, electronic, or similar information, inferences,
            and sensitive Personal Data; each have been disclosed to the
            following categories of Recipients: Data Controllers for whom we are
            Data Processors (e.g. Clients), our authorized Data Processors
            (sub-processors), and, as relevant on a case by case basis, to
            supervisory authorities, courts and government agencies.
          </li>
          <li class="">
            The following categories of Personal Information: Client
            Representative related identifiers, commercial information, internet
            or other electronic activity information, audio, electronic, or
            similar information; each have been disclosed to the following
            categories of Recipients: our authorized Data Processors
            (sub-processors), authorities and organizations intermediating or
            providing (electronic) mail, compliance or payment services, and, as
            relevant on a case by case basis, to supervisory authorities, courts
            and government agencies, debt collection agencies and credit
            registers.
          </li>
        </ul>
      </li>
      <li class="">
        (3) As described in section 4 above, we process personal information to
        understand and improve your experience with our Services and to serve
        you advertisements on non- WhoisID properties. Some of these activities
        may be considered “sales” or “sharing” of your personal information or
        “targeted advertising” under the law that applies to you. By using
        Cookies, we may “share” or “sell” your personal information for
        analytics and advertising benefits.
      </li>
      <li class="">
        (4) WhoisID does not knowingly sell or share personal information about
        consumers under the age of 16.
      </li>
      <li class="">
        (5) We do not use sensitive personal information for any purpose other
        than to perform the Services or to improve, upgrade, or enhance the
        Services.
      </li>
      <li class="">
        (6) Your Privacy Rights
        <ul class="list mt-[16px]">
          <li class="">
            You have the right to opt out of sharing and sales at any time by
            contacting support..
          </li>
          <li class="">
            To request access, correction, or deletion of your personal
            information, our data protection officer (DPO) via email at
            legal@whoisid.com.
          </li>
          <li class="">
            Authorized Agents. You have a right to submit a rights request via
            an authorized agent.
          </li>
        </ul>
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
