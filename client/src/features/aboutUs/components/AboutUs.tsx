import React from 'react';
import '../style/aboutUs.css'

function AboutUs (): JSX.Element {

  return (
    <div className="component">
      <img id="background-image" src="" alt="Background" />
      <div className="text-container">
        <p className="text">
          DOUGLAS CRAFT
          <br />
          — минимализм
          <br />
          с характером.
        </p>
        <p className="description">
        <br />
        <br />
          Бренд Douglas Craft был создан в 2015 году.Интересный 
          <br />
          факт: наш бренд появился не из идеи, а из желания творить.
          <br />
          Свое начало мы саркастически определяем фразой—
          <br />
           «Необходимость — мать изобретения».
          Это история о том, как можно создать что-то ценное, ничего не имея.
          Это синтез легкомыслия и порой странной отваги с рьяной реализацией.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;