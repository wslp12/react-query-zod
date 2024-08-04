import { createLazyFileRoute } from "@tanstack/react-router";
import SelectBox from "../components/v4/SelectBox";
import DateBox from "../components/v4/DateBox";
import { useGetType } from "../apis/v2/useGetType";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackRender } from "../components/ErrorBoundary";

export const Route = createLazyFileRoute("/terms-v4")({
  component: Terms2,
});

function Terms2() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="flex">
          <div className="border border-red-300  p-2">
            <span>타입 선택</span>
            <Suspense
              fallback={
                <div className="w-full h-4 border border-stone-300 bg-stone-200 rounded-lg"></div>
              }
            >
              <ErrorBoundary fallbackRender={fallbackRender}>
                <SelectBox onClick={(id) => {}} />
              </ErrorBoundary>
            </Suspense>
          </div>
          &nbsp;&nbsp;
          <div className="border border-blue-300  p-2">
            <span>날짜 선택</span>
            {/* <DateBox typeId={typeId ?? data[0].id} onClick={setTermsSTr} /> */}
          </div>
        </div>
        <div className="flex flex-col">
          <span>이용약관 전문</span>
          {/* <div>{termsStr}</div> */}
        </div>
      </div>
    </main>
  );
}
