// toastUtils.ts

import { useToast } from "@/components/ui/toast/use-toast";

type ToastVariant = "default" | "destructive";

export function showToast(
  title: string,
  description: string,
  variant: ToastVariant,
  duration: number = 4000,
): void {
  const { toast } = useToast();
  toast({ title, description, variant, duration });
}
