import { useQuery } from "@tanstack/react-query";

function useGetType() {
    return useQuery<TermsType[]>({
        queryKey: ["type"],
        queryFn: async () => {
            const fetchResponse = await fetch("http://localhost:5173/types");
            const jsonData = await fetchResponse.json();
            return jsonData;
        }
    })
}

export { useGetType };