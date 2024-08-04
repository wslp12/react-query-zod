import { useEffect } from "react";
import { useGetDates } from "../../apis/useGetDates";

function DateBoxV2({
  typeId,
  onClick,
}: {
  typeId: number;
  onClick: (str: string) => void;
}) {
  const { data, isError } = useGetDates(typeId ?? NaN);

  useEffect(() => {
    if (data?.[0]) {
      onClick(data[0].terms);
    }
  }, [typeId, data]);

  return (
    <div className="flex flex-col border border-black p-3">
      {data?.map((item) => {
        return (
          <button
            type="button"
            key={item.id}
            onClick={() => onClick(item.terms)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
export default DateBoxV2;
