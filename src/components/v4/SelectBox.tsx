import { useGetType } from "../../apis/v2/useGetType";

function SelectBox({ onClick }: { onClick: (item: TermsType["id"]) => void }) {
  const { data } = useGetType();
  return (
    <div className="flex flex-col border border-black p-3">
      {data.map((item) => {
        return (
          <button type="button" key={item.id} onClick={() => onClick(item.id)}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
export default SelectBox;
