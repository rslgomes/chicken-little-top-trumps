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

  const handleSubmitForm = (event) => {
    event.preventDefault();

    function setCardToRender(id, formData) {
      return {
        id,
        cardName: formData['Card Name'],
        imageUrl: formData['Image Url'],
        anger: formData['Anger'],
        peckStrength: formData['Peck Strength'],
        cuteness: formData['Cuteness'],
        crestSize: formData['Crest Size'],
      };
    }

    const updateCard = (updatedCard) => {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.id === updatedCard.id) {
            return { ...card, ...updatedCard };
          }
          return card;
        });
      });
    };

    const addNewCard = (newCard) => {
      setCards((prevCards) => [...prevCards, newCard]);
    };

    if (isEdit.state) {
      updateCard(setCardToRender(isEdit.id, formData));
    } else {
      addNewCard(setCardToRender(Date.now(), formData));
    }

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
        onSubmit={ handleSubmitForm }
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
