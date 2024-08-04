import { createLazyFileRoute } from "@tanstack/react-router";
import SelectBox from "../components/v2/SelectBox";
import DateBox from "../components/v2/DateBox";
import { useGetType } from "../apis/useGetType";

export const Route = createLazyFileRoute("/terms-v2")({
  component: Terms2,
});

// https://tkdodo.eu/blog/status-checks-in-react-query

function Terms2() {
  const { data, isLoading, isError } = useGetType();

  if (isLoading) {
    return (
      <main>
        <div className="flex flex-col">
          <div className="flex">
            <div className="border border-red-300  p-2">
              <span>타입 선택</span>
              some loading
            </div>
            &nbsp;&nbsp;
            <div className="border border-blue-300  p-2">
              <span>날짜 선택</span>
              some loading
            </div>
          </div>
          <div className="flex flex-col">
            <span>이용약관 전문</span>
            <div>some loading</div>
          </div>
        </div>
      </main>
    );
  }

  if (!data || isError) {
    return (
      <main>
        <div className="flex flex-col">
          <div className="flex">
            <div className="border border-red-300  p-2">
              <span>타입 선택</span>
              some wrong
            </div>
            &nbsp;&nbsp;
            <div className="border border-blue-300  p-2">
              <span>날짜 선택</span>
              some wrong
            </div>
          </div>
          <div className="flex flex-col">
            <span>이용약관 전문</span>
            <div>some wrong</div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="flex flex-col">
        <div className="flex">
          <div className="border border-red-300  p-2">
            <span>타입 선택</span>
            <SelectBox onClick={(id) => {}} />
          </div>
          &nbsp;&nbsp;
          <div className="border border-blue-300  p-2">
            <span>날짜 선택</span>

            <DateBox typeId={data[0].id} onClick={() => {}} />
          </div>
        </div>
        <div className="flex flex-col">
          <span>이용약관 전문</span>
          <div>some content</div>
        </div>
      </div>
    </main>
  );
}
