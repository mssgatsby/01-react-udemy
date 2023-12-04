import "./App.css";
import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const variables = ["Fundamentals", "Core", "Crucial"];

function genRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  const description = variables[genRandom(2)];
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building blocks."
              image={componentsImg}
            />
            <CoreConcepts title="Props" />
            <CoreConcepts />
            <CoreConcepts />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
