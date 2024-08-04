import { createLazyFileRoute } from "@tanstack/react-router";
import SelectBox from "../components/v5/SelectBox";
import DateBox from "../components/v5/DateBox";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackRender } from "../components/ErrorBoundary";
import TermsText from "../components/v5/TermsText";

export const Route = createLazyFileRoute("/terms-v5")({
  component: Terms5,
});

function Terms5() {
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
                <SelectBox />
              </ErrorBoundary>
            </Suspense>
          </div>
          &nbsp;&nbsp;
          <div className="border border-blue-300  p-2">
            <span>날짜 선택</span>
            <Suspense
              fallback={
                <div className="w-full h-4 border border-stone-300 bg-stone-200 rounded-lg"></div>
              }
            >
              <ErrorBoundary fallbackRender={fallbackRender}>
                <DateBox />
              </ErrorBoundary>
            </Suspense>
          </div>
        </div>
        <div className="flex flex-col">
          <span>이용약관 전문</span>
          <TermsText />
        </div>
      </div>
    </main>
  );
}
