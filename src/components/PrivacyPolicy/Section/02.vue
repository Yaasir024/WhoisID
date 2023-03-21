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
  <section id="section-2" ref="sectionRef">
    <h1 class="">2. Definitions</h1>
    <p class="">
      Here you can find the meanings of the most important terms in this Privacy
      Notice to help you understand how and for what we are processing your
      Personal Data.
    </p>
    <ol class="points-list">
      <li class="">
        2.1 <span>Agreement</span> – the service agreement entered into between
        WhoisID and Clients, including service agreements for trials and
        partnership agreements.
      </li>
      <li class="">
        2.2 <span>Client</span> – the legal entity to whom we intend to provide
        or already provide our Services under the Agreement, including WhoisID’s
        partners under a partnership agreement.
      </li>
      <li class="">
        2.3 <span>Client Representative</span> – natural person representing the
        Client, including any natural person with whom we communicate with (i)
        as to the representative of a potential Client prior to conclusion of
        the Agreement, (ii) during the Agreement term as to the representative
        of our Client, and (iii) after the Agreement term as a representative of
        former Client, as relevant.
      </li>
      <li class="">
        2.4 <span>Data Controller</span> – a legal person, public authority,
        agency or other body which, alone or jointly with others, determines the
        purposes and means of the processing of Personal Data. Except as
        otherwise provided in this Privacy Notice, Clients are Data Controllers
        for End-User Personal Data and give instructions regarding processing to
        WhoisID
      </li>
      <li class="">
        2.5 <span>Data Processor</span> – a legal person, public authority,
        agency, or other body which processes personal data on behalf of a Data
        Controller. Except as otherwise provided in this Privacy Notice, WhoisID
        processes End-User Personal Data as a Data Processor on behalf of
        Clients who are the Data Controllers. For all other Data Subjects,
        WhoisID is acting as the Data Controller.
      </li>
      <li class="">
        2.6 <span>Data Providers</span> – these are entities, such as public
        authorities or our Data Processors, from whom we may collect Personal
        Data for verification purposes. For example, we may check the
        End-User-provided information against the official public registry or
        other fraud prevention services.
      </li>
      <li class="">
        2.7 <span>Data Subject / You</span> – a natural person about whom we
        have Personal Data, including Client Representatives, End-Users,
        Visitors, Office Visitors, natural persons who provide us feedback
        (including other research and inquiry-related data) and other natural
        persons whose Personal Data we may process.
      </li>
      <li class="">
        2.8 <span>Data Providers</span> – these are entities, such as public
        authorities or our Data Processors, from whom we may collect Personal
        Data for verification purposes. For example, we may check the
        End-User-provided information against the official public registry or
        other fraud prevention services.
      </li>
    </ol>
    <p class="">
      End-User – the natural person regarding whom we provide the Service at the
      request of the Client or any other natural person accessing or using the
      Service.
    </p>
    <p class="">
      Office Visitor – is any person visiting the office premises of WhoisID.
    </p>
    <p class="">
      Personal Data or Personal Information – any information relating to an
      identified or identifiable natural person (the Data Subject); an
      identifiable natural person is one who can be identified, directly or
      indirectly, in particular by reference to an identifier such as a name, an
      identification number, location data, an online identifier or to one or
      more factors specific to the physical, physiological, genetic, mental,
      economic, cultural or social identity of that natural person. Anonymized
      data is de-identified and not Personal Data.
    </p>
    <p class="">
      Politically exposed person (PEP) – politically exposed person including
      their family members and close associates in accordance with the
      applicable legal acts regards to prevention of money laundering or
      terrorist financing (such as a natural person who is or who has been
      entrusted with prominent public functions, e.g. member of parliament or of
      a similar legislative body, a member of a governing body of a political
      party, a member of a supreme court).
    </p>
    <p class="">
      Privacy Notice – this privacy notice available at
      <a href="https://www.whoisid.com/privacy-notice" class="link"
        >https://www.whoisid.com/privacy-notice</a
      >.
    </p>
    <p class="">
      Service(s) – personal identity verification service and connected services
      (such as any ongoing authentication services, assisting services, fraud
      prevention and other similar services) provided by us to Clients.
    </p>
    <p class="">Visitor – is any person using the WhoisID Website.</p>
    <p class="">
      Website –
      <a href="https://www.whoisid.com/" class="link"
        >https://www.whoisid.com/</a
      >, including its subpages and subdomains
    </p>
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
