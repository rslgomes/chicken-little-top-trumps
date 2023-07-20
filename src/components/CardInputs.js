export default function CardInputs({
  keysArray,
  formData,
  handleInputChange,
}) {
  return keysArray.map((key) => {
    return (
      <label key={ key }>
        { key }
        <input
          type="text"
          id={ key }
          name={ key }
          value={ formData[key] || '' }
          onChange={ handleInputChange }
        />
      </label>
    );
  });
}
