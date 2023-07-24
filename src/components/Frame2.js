'use client';

import { useState } from 'react';
import styles from '../app/styles/home.module.css';
import AccordionStep from './AccordionStep';

export default function Frame2() {
  const [openStepId, setOpenStepId] = useState('1');
  const steps = [
    {
      id: '1',
      stepTitle: 'Your Cards List',
      explanation: 'Create your own list of cards by checking out our My Cards section!',
      image: 'https://s12.gifyu.com/images/Scz7Z.gif',
    },
    {
      id: '2',
      stepTitle: 'Create A Card',
      explanation: 'Just by filling up the form, you already made your first card!',
      image: 'https://s12.gifyu.com/images/Scz7a.gif',
    },
    {
      id: '3',
      stepTitle: 'Change Whatever',
      explanation: 'Click on one of the cards on your list to tinker with or delete it',
      image: 'https://s11.gifyu.com/images/Scz7f.gif',
    },
    {
      id: '4',
      stepTitle: 'Hidden Cards',
      explanation: 'There are hidden cards to be discovered. How exciting!!!',
      image: '',
    },
    {
      id: '5',
      stepTitle: 'Are You Hiring',
      explanation: 'This UI is a showcase of basic next/react. Check me out on About Me!',
      image: '',
    },
  ];

  const getStepById = (id) => {
    return steps.find((step) => step.id === id);
  };

  const openStep = getStepById(openStepId);

  return (
    <div className={ styles.frameTwo }>
      <div className={ styles.stepExplanation }>
        <h1>{ openStep.stepTitle }</h1>
        <p>{ openStep.explanation }</p>
      </div>
      <div className={ styles.stepsContainer }>
        {steps.map((step) => {
          const { id, stepTitle, image } = step;
          const isOpen = (id === openStepId);

          return (
            <AccordionStep
              key={ id }
              id={ id }
              isOpen={ isOpen }
              stepTitle={ stepTitle }
              setOpenStepId={ setOpenStepId }
              image={ image }
            />
          );
        })}
      </div>
    </div>
  );
}
