import { CORE_CONCEPTS } from "../data.js";
import CoreConcepts from "./CoreConcepts.jsx";
import Section from "./Section.jsx";

export default function CoreConcept() {
  return (
    <Section title="Core concepts" id="core-concepts">
      <ul>
        {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcepts key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
