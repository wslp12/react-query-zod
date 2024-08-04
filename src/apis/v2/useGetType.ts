import { useSuspenseQuery } from "@tanstack/react-query";
import { z } from "zod";

function useGetType() {
    const { data } = useSuspenseQuery<TermsType[]>({
        queryKey: ["type"],
        queryFn: async () => {
            const fetchResponse = await fetch("http://localhost:5173/types");
            const jsonData = await fetchResponse.json();
            return jsonData;
        },
    })

    const schema = z.array(z.object({
        id: z.number({
            message: "types 의 예고없는 id 값이 변경됨"
        }),
        name: z.string({
            message: `types 의 예고없는 name 값이 변경됨 ${JSON.stringify(data)}`
        })
    }, {
        required_error: "type 의 api 문제 발생"
    })).min(1, {
        message: "type api에서 약관이 사라짐"
    }) satisfies z.ZodType<TermsType[]>

    const parseData = schema.parse(data);

    return { data: parseData };
}

export { useGetType };