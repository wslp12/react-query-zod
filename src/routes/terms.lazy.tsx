import { createLazyFileRoute } from "@tanstack/react-router";
import SelectBox from "../components/SelectBox";
import DateBox from "../components/DateBox";

export const Route = createLazyFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="flex">
          <div className="border border-red-300  p-2">
            <span>타입 선택</span>
            <SelectBox />
          </div>
          &nbsp;&nbsp;
          <div className="border border-blue-300  p-2">
            <span>날짜 선택</span>
            <DateBox />
          </div>
        </div>
        <div className="flex flex-col">
          <span>이용약관 전문</span>
          <div>some 이용약관</div>
        </div>
      </div>
    </main>
  );
}
