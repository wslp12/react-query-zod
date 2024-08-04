import { useTermsDates } from "../../store/termsStore";

function DateBox() {
  const { data, setTermsText } = useTermsDates();

  return (
    <div className="flex flex-col border border-black p-3">
      {data.map((item) => {
        return (
          <button
            type="button"
            key={item.id}
            onClick={() => setTermsText(item.terms)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
export default DateBox;
