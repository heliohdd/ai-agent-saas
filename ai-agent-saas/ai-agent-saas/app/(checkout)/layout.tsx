import Link from "next/link";
import CheckoutReturnPage from "./payment-confirmation/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center py-40">
      <CheckoutReturnPage></CheckoutReturnPage>
    </section>
  );
}
