import { useTermsText } from "../../store/termsStore";

export default function TermsText() {
  const termsText = useTermsText();
  return <div>{termsText}</div>;
}
