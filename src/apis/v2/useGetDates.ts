import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

function useGetDates(typeId: number) {
    return useSuspenseQuery<DatesType[]>({
        queryKey: ["dates", typeId],
        queryFn: async () => {
            const fetchResponse = await fetch(`http://localhost:5173/dates?type=${typeId}`);
            const jsonData = await fetchResponse.json();
            return jsonData;
        }
    })
}

export { useGetDates };