import CardInputs from './CardInputs';

export default function CardForm() {
  return (
    <div>
      <form className="form">
        <CardInputs />
        <div>
          <button>
            Cancel
          </button>
          <button>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
