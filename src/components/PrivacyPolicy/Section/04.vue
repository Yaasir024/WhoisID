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
  <section id="section-4" ref="sectionRef">
    <h1 class="">4. The content of Personal Data we process</h1>
    <p class="">
      Here you can find what Personal Data we process about End-Users, Client
      Representatives, Visitors and Office Visitors.
    </p>
    <h3 class="">Personal Data we process about End-Users.</h3>
    <ol class="points-list">
      <li class="">
        4.1  We provide personal identity verification services to Clients. This
        means we verify End-Users, i.e. you. For that you have acknowledged data
        processing according to the Client’s privacy notice and data processing
        by us in accordance with this Privacy Notice. We may collect and
        process, among other data, the following Personal Data collected either
        directly from you or from the Client:
        <ol class="pt-[16px]">
          <li class="">
            (1) Personal information concerning the End-User, which mainly
            consists of information on the End-User’s document and/or extracted
            from the document, for example name, sex, personal identification
            code, BSN number, date of birth, estimated age, legal capacity,
            nationality, citizenship, organ donor status, eye color, weight and
            height, as well as the historic data of that End-User that may have
            been stored with us during previous interactions within the
            retention periods;
          </li>
          <li class="">
            (2) Document details, such as the name of the document, issuing
            country, number, expiration date, information embedded to document
            barcodes (may vary depending on the document) and security features;
          </li>
          <li class="">
            (3) Identity verification data, such as photographs taken from you
            and your document, and video and sound recording of the verification
            process (of the whole session, if such recording is enabled by the
            Client);
          </li>
          <li class="">
            (4) contact details, such as address, e-mail address, telephone
            numbers, IP address and, if relevant, presented document type (e.g.
            utility bill);
          </li>
          <li class="">
            (5) technical data (Device Signature), including but not limited to
            information about the date, time and your activity in the Services,
            your IP address and domain name, your software and hardware
            attributes as well as your general geographic location (e.g. city,
            state, country);
          </li>
          <li class="">
            (6) machine-readable data, metadata and device and network
            information;
          </li>
          <li class="">
            (7) photos and videos as well as data, such as face scans and other
            measurements, extracted from the same which are used to authenticate
            the End-User or compare the End-User’s face to identity document
            photos - some of this extracted data may be considered biometric
            data and/or sensitive Personal Data (also special category of
            personal data, hereinafter referred to as “sensitive Personal Data”)
            in certain jurisdictions;
          </li>
          <li class="">
            (8) publicly available relevant data and data from external
            registries, e.g. information about being a politically exposed
            person (PEP), checks in public sanction lists and other information
            from such registries, as determined by the Client;
          </li>
          <li class="">
            (9) personal information provided by the End-User, e.g. data from
            communications with us, feedback data;
          </li>
          <li class="">
            (10) personal information provided by natural persons who have
            participated in our product and market research initiatives;
          </li>
          <li class="">
            (11) personal information that we have received from the Client,
            e.g. contact details;
          </li>
          <li class="">
            (12) evidence and records of legal basis (including consents), for
            example in cases where we are required or have elected to obtain a
            consent or a written release or another legal basis prior to
            processing certain Personal Data.
          </li>
        </ol>
      </li>
      <li class="">
        4.2 We also offer ongoing authentication services to our Clients. This
        means that we may use the above mentioned data, but in particular the
        End-User’s photos and videos as well as data extracted from the same,
        such as face scans and other measurements, and other documents to verify
        End-User’s identity on an ongoing basis, for example, to grant the
        End-User access to our Client’s services, among other authentication
        use-cases as determined by our Client. Such extracted data may be
        biometric data and/or sensitive Personal Data in certain jurisdictions.
        We only use such extracted data for the provision of the Service and
        related business purposes, such as maintaining, improving, upgrading or
        enhancing the Service. We do not use such extracted data for the purpose
        of inferring characteristics about you for any other reasons.
      </li>
      <li class="">
        4.2 We also offer ongoing authentication services to our Clients. This
        means that we may use the above mentioned data, but in particular the
        End-User’s photos and videos as well as data extracted from the same,
        such as face scans and other measurements, and other documents to verify
        End-User’s identity on an ongoing basis, for example, to grant the
        End-User access to our Client’s services, among other authentication
        use-cases as determined by our Client. Such extracted data may be
        biometric data and/or sensitive Personal Data in certain jurisdictions.
        We only use such extracted data for the provision of the Service and
        related business purposes, such as maintaining, improving, upgrading or
        enhancing the Service. We do not use such extracted data for the purpose
        of inferring characteristics about you for any other reasons.
      </li>
      <li class="">
        4.4 Clients may have access to your Personal Data. We may share your
        Personal Data including identity verification data with the Client
        through which you used our identity verification service.
      </li>
      <li class="">
        4.5 Please note that providing your Personal Data is voluntary. However,
        the decision not to do so may mean that you are not able to verify your
        identity via our Service.
        <p class="">
          Personal Data we process about the Client Representatives
        </p>
      </li>
      <li class="">
        4.6 We need to process Client Representative data to engage new Clients,
        enter into the Agreement, to provide our Service, to communicate with
        the representative of our Client and for other lawful reasons. This
        means we may process, among other information, the following Personal
        Data of the Client Representative:

        <ol class="mt-[16px]">
          <li class="">
            (1) personal information of the representative, such as name, job
            title, position, and contact information;
          </li>
          <li class="">
            (2) personal information in connection with provision of the
            Service, such as data from communication with us;
          </li>
          <li class="">
            (3) data from Client Representative calls, such as video, image and
            sound recordings;
          </li>
          <li class="">
            (4) technical data (Device Signature), including but not limited to
            information about the date, time and your activity in the Services,
            your IP address and domain name, and your software and hardware
            attributes as well as your general geographic location (e.g. city,
            country);
          </li>
          <li class="">(5) publicly available relevant data.</li>
        </ol>
      </li>
      <li class="">
        4.7 How we obtain Client Representative’s Personal Data. We collect this
        data either from you directly when you communicate with us directly,
        e.g. by sending us an email, providing us with your Personal Data on the
        phone or through our customer support tools. We may also collect some of
        your Personal Data in the course of provision of Service to your
        employer. We collect information about the Client (including about
        relevant representatives of the Client) from publicly available sources.
        We only gather relevant and necessary data in order to validate the
        right of representation e.g. this may include verification of your
        identity, processing of your Personal Data for introducing the Service
        (demo) etc.
      </li>
      <li class="">
        4.8 Please note, the provision of Personal Data is voluntary. However,
        if you do not provide your Personal Data, the Client may not be able to
        make use of the full range of our Services.  Other Personal Data we
        process about Visitors, Client Representatives with an account on our
        Website and/or End-Users of our Service
      </li>
      <li class="">
        4.9 We may collect data when you visit our Websites and/ or Service by
        using Cookies (see Cookie Policy) or other similar technologies (e.g. IP
        address, equipment information, location information, beacons) and
        process the data gathered by them. This data, among other information,
        may be as follows:
        <ol class="mt-[16px]">
          <li class="">
            (1) personal information, such as IP address, time, and location;
          </li>
          <li class="">
            (2) information on usage of the Website and/or Service and other web
            log data, such as the pages you visit on the Website, the date and
            time of your visit, the files that you download and the URLs from
            the websites you visit before and after navigating to the Website;
          </li>
          <li class="">
            (3) technical data (Device Signature), including but not limited to
            information about your IP address and domain name, your software and
            hardware attributes (including device IDs) and your general
            geographic location (e.g. city, country);
          </li>
          <li class="">
            (4) e-mail addresses, when you subscribe to WhoisID’s newsletters or
            download WhoisID’s content.
          </li>
        </ol>
      </li>
      <li class="">
        4.10 Purpose of processing with the help of Cookies and similar
        technologies. We use the collected data from Visitors and Client
        Representatives to enable the provision of the Website and Service in
        accordance with your habits, to ensure the best Website and Service
        quality, to inform you about the contents and give recommendations, and
        to update advertisements and make marketing efforts more efficient. The
        collected data shall also be used for counting the visits and use of our
        Website. Read more from the Cookie Policy.
      </li>
      <p class="">
        Personal Data we process related to responsible disclosure.
      </p>
      <li class="">
        4.11 If you decide to contact WhoisID related to reporting an issue
        mentioned in our responsible disclosure policy, we only process the
        following Personal Data about you:;
        <ol class="mt-[16px]">
          <li class="">(1) name;</li>
          <li class="">(2) e-mail address;</li>
          <li class="">
            (3) picture, if you consent to disclosing it in our Hall of Fame.
          </li>
        </ol>
      </li>
      <p class="">
        Personal Data we process related to the Demo app and testing WhoisID’s
        session flow.
      </p>
      <li class="">
        4.12 If you decide to download and use WhoisID’s Demo app or test
        WhoisID’s session flow in our Website, we may record identity
        verification data (see section 4.1(3)) and technical data (see section
        4.1(5)).
      </li>
      <p class="">Personal Data we process related to our Office Visitors.</p>

      <li class="">
        4.13 If you visit the office premises and workplaces of WhoisID, this means we may process, among other information, the following Personal Data about you:
        <ol class="mt-[16px]">
            <li class="">
                (1) Name;
            </li>
            <li class="">
                (2) E-mail address;
            </li>
            <li class="">
                (3) Photo;
            </li>
            <li class="">
                (4) Visuals captured via video surveillance equipment;
            </li>
            <li class="">
                (5) If you use WhoisID’s office WiFi network, then the source ip addresses and ports, destination addresses and ports, source MAC addresses;
            </li>
            <li class="">
                (6) During the widespread of infectious diseases (e.g., COVID-19), proof of vaccination, valid negative test result, recovery certificate or other relevant data to ensure a safe visit.
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
