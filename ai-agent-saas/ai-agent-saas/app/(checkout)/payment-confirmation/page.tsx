import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/LivroSaaS/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default async function CheckoutReturnPage() {
  return (
    <Card className="max-w-lg mt-10 text-center">
      Checkout Return Page
      <CardContent>
        <CardHeader>
          <ShoppingBag className=" text-blue-400 bg-clip-text mx-auto mb-4 w-12 h-12" />
          <CardTitle>Assinatura Confirmada</CardTitle>
          <CardDescription>
            Obrigado por se juntar a nossa comunidade AgentTube
          </CardDescription>
        </CardHeader>
        <div className="text-gray-700 text-sm">
          <p>
            Sua assinatura foi processada com sucesso e sua conta está ativa.
          </p>
          <p>Agora é só aproveitar o nosso conteúdo</p>
          <Link href="/dashboard" className={cn(buttonVariants(), "mt-12")}>
            Ir para Dashboard
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
