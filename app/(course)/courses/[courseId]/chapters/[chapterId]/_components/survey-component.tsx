'use client';

import { Survey, Model } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { LayeredDarkPanelless } from "survey-core/themes";

const surveyJson = {
    title: "American History",
    pages: [{
      elements: [{
        type: "radiogroup",
        name: "civilwar",
        title: "When was the American Civil War?",
        choices: [
          "1796-1803", "1810-1814", "1861-1865", "1939-1945"
        ],
        correctAnswer: "1861-1865"
      }]
    }, {
      elements: [{
        type: "radiogroup",
        name: "libertyordeath",
        title: "Whose quote is this: \"Give me liberty, or give me death\"?",
        choicesOrder: "random",
        choices: [
          "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
        ],
        correctAnswer: "Patrick Henry"
      }]
    }, {
      elements: [{
        type: "radiogroup",
        name: "magnacarta",
        title: "What is Magna Carta?",
        choicesOrder: "random",
        choices: [
          "The foundation of the British parliamentary system",
          "The Great Seal of the monarchs of England",
          "The French Declaration of the Rights of Man",
          "The charter signed by the Pilgrims on the Mayflower"
        ],
        correctAnswer: "The foundation of the British parliamentary system"
      }]
    }]
  };
  

const SurveyComponent = () => {
  const survey = new Model(surveyJson);
  survey.applyTheme(LayeredDarkPanelless);
  survey.onComplete.add((sender) => {
    console.log("Survey results: ", sender.data);
  });

  return (
    <div>
      <h1>Сұрақтар</h1>
      <Survey model={survey} />
    </div>
  );
};

export default SurveyComponent;
