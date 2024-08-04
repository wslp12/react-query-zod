function SelectBoxV2({
  items,
  onClick,
}: {
  onClick: (item: TermsType["id"]) => void;
  items: TermsType[];
}) {
  return (
    <div className="flex flex-col border border-black p-3">
      {items.map((item) => {
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
