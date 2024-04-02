// toastUtils.ts

// You might need to adjust imports based on your project setup
import { useToast } from "@/components/ui/toast/use-toast";

export function showToast(
  title: string,
  description: string,
  variant: "default" | "destructive",
  duration: number = 4000,
) {
  const { toast } = useToast();
  toast({
    title,
    description,
    duration,
    variant,
  });
}
