import { createLazyFileRoute } from "@tanstack/react-router";
import SelectBox from "../components/v3/SelectBox";
import DateBox from "../components/v3/DateBox";
import { useGetType } from "../apis/useGetType";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const Route = createLazyFileRoute("/terms-v3")({
  component: Terms2,
});

function Terms2() {
  const { data, isLoading, isError } = useGetType();

  //#region stateEvent
  const [typeId, setTypeId] = useState<number>();
  const [termsStr, setTermsSTr] = useState("");
  //#endregion

  const isWrong = isError || isLoading || !data;

  return (
    <main>
      <div className="flex flex-col">
        <div className="flex">
          <div className="border border-red-300  p-2">
            <span>타입 선택</span>
            {isWrong ? (
              "isLoading.."
            ) : (
              <SelectBox
                items={data}
                onClick={(id) => {
                  setTypeId(id);
                }}
              />
            )}
          </div>
          &nbsp;&nbsp;
          <div className="border border-blue-300  p-2">
            <span>날짜 선택</span>
            {isWrong ? (
              "isLoading.."
            ) : (
              <DateBox typeId={typeId ?? data[0].id} onClick={setTermsSTr} />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <span>이용약관 전문</span>
          <div>{termsStr}</div>
        </div>
      </div>
    </main>
  );
}
