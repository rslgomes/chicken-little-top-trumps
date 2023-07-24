'use client';

import { useState } from 'react';
import CardForm from '../../components/CardForm';
import CardListDisplay from '../../components/CardListDisplay';
import styles from '../styles/mycards.module.css';
import CardSamples from '../../lib/CardSamples.json';
import CardList from '../../lib/CardList.json';

export default function MyCards() {
  const [cards, setCards] = useState(CardList.cards);
  const [formData, setFormData] = useState({});
  const [isEdit, setIsEdit] = useState({ state: false, id: 0 });
  const keysArray = CardSamples.keyNames;

  return (
    <div className={ `${styles.myCards} mainContainer` }>
      <CardForm
        keysArray={ keysArray }
        formData={ formData }
        setFormData={ setFormData }
        propQualquer={ console.log('render') }
        setCards={ setCards }
        isEdit={ isEdit }
        setIsEdit={ setIsEdit }
      />
      <CardListDisplay
        cards={ cards }
        formData={ formData }
        setFormData={ setFormData }
        isEdit={ isEdit }
        setIsEdit={ setIsEdit }
      />
    </div>
  );
}
