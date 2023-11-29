import Layout from "./component/layout/layout";


import { AppearFromTopChildrenElementsAnimation } from "./scripts/functions";
import { useRef } from "react";

function App() {
  const containerInfoRef = useRef();
  
  return (
    <Layout>
      <div className="presentation-container">
        <div className="presentation-container__info" ref={containerInfoRef}>
            <p>Hello,</p>
            <p>Je suis <span>Kévin</span></p>
            <p>Développeur web et web mobile débutant</p>
            <a href="#">
                <button className="presentation-container__contact-button">Contact</button>
            </a>
        </div>
        <div className="presentation-container__image"></div>
      </div>
    </Layout>
    
  );
}


export default App;
