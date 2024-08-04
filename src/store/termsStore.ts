import { create } from "zustand";
import { useGetType } from "../apis/v2/useGetType";
import { useGetDates } from "../apis/v2/useGetDates";

type UseTermsStore = {
    type: number;
    termsText: string;
    actions: {
        setType: (type: number) => void
        setTermsText: (termsText: string) => void
    }

}
const useTermsStore = create<UseTermsStore>((set) => ({
    type: NaN,
    termsText: "",
    actions: {
        setType: (type) => set(() => ({ type })),
        setTermsText: (termsText) => set(() => ({ termsText }))
    }
}))

export const useTermsText = () => useTermsStore((state) => state.termsText);
const useTermsType = () => useTermsStore((state) => state.type);
const useTermsActions = () => useTermsStore((state) => state.actions);

export const useTermsTypes = () => {
    const { setType } = useTermsActions();
    const { data } = useGetType();
    const [initData] = data;
    setType(initData.id);

    return { data, setType };
}

export const useTermsDates = () => {
    const type = useTermsType();
    const { setTermsText } = useTermsActions();
    const { data } = useGetDates(type);
    const [initData] = data;
    setTermsText(initData.terms);

    return { data, setTermsText };
}