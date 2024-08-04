import { useTermsTypes } from "../../store/termsStore";

function SelectBox() {
  const { data, setType } = useTermsTypes();

  return (
    <div className="flex flex-col border border-black p-3">
      {data.map((item) => {
        return (
          <button type="button" key={item.id} onClick={() => setType(item.id)}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
export default SelectBox;
