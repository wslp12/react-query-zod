import { ErrorBoundary } from "react-error-boundary";
import { ZodError } from "zod";

function fallbackRender({ error, resetErrorBoundary }: any) {
  console.log(error);
  if (error instanceof ZodError) {
    // 진짜 심각한 에러입니다. 센트리에 에러보고 하세요
    console.error("error.issues", error.issues);
  }

  return (
    <div role="alert">
      <pre style={{ color: "red" }}>서버가 아파요 잠시만요.</pre>
    </div>
  );
}

export { fallbackRender };
