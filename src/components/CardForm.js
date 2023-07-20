import CardInputs from './CardInputs';
import FormButtons from './FormButtons';

export default function CardForm({
  keysArray,
  formData,
  setFormData,
  setCards,
  isEdit,
  setIsEdit,
}) {
  const resetFormAndList = () => {
    setIsEdit({ state: false, id: 0 });
    setFormData({});
  };

  const handleDeleteCard = () => {
    const deleteCardById = (id) => {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };
    deleteCardById(isEdit.id);
    resetFormAndList();
  };

  const handleUpdateCard = (event) => {
    event.preventDefault();

    const updateCardById = (id, updatedCard) => {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.id === id) {
            return { ...card, ...updatedCard };
          }
          return card;
        });
      });
    };

    const {
      'Card Name': cardName,
      'Image Url': imageUrl,
      Anger: anger,
      'Peck Strength': peckStrength,
      Cuteness: cuteness,
      'Crest Size': crestSize,
    } = formData;

    const updatedCard = {
      id: isEdit.id,
      cardName,
      imageUrl,
      anger,
      cuteness,
      peckStrength,
      crestSize,
    };

    updateCardById(isEdit.id, updatedCard);
    resetFormAndList();
  };

  const handleCreateCard = (event) => {
    event.preventDefault();

    const {
      'Card Name': cardName,
      'Image Url': imageUrl,
      Anger: anger,
      'Peck Strength': peckStrength,
      Cuteness: cuteness,
      'Crest Size': crestSize,
    } = formData;

    const newCard = {
      id: Date.now(),
      cardName,
      imageUrl,
      anger,
      cuteness,
      peckStrength,
      crestSize,
    };

    setCards((prevCards) => [...prevCards, newCard]);

    resetFormAndList();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={ isEdit.state ? handleUpdateCard : handleCreateCard }
        onReset={ resetFormAndList }
      >
        <CardInputs
          keysArray={ keysArray }
          formData={ formData }
          handleInputChange={ handleInputChange }
        />
        <FormButtons
          isEdit={ isEdit }
          handleDeleteCard={ handleDeleteCard }
        />
      </form>
    </div>
  );
}
