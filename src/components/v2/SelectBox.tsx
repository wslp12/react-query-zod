import { useEffect } from "react";
import { useGetType } from "../../apis/useGetType";

function SelectBoxV2({
  onClick,
}: {
  onClick: (item: TermsType["id"]) => void;
}) {
  const { data } = useGetType();

  useEffect(() => {
    if (data) {
      onClick(data[0].id);
    }
  }, [data]);

  return (
    <div className="flex flex-col border border-black p-3">
      {data?.map((item) => {
        return (
          <button type="button" key={item.id} onClick={() => onClick(item.id)}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
export default SelectBoxV2;
