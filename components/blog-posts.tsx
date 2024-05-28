import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google";
import { Separator } from "./ui/separator";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

export const BlogPosts = () => {
    return (
        <div className={cn('pt-8 w-fit')}>
            <h1 className={cn('text-4xl font-semibold text-yellow-600', poppins.className)}>Blog Posts</h1>
          <Separator className={cn("mt-2 bg-slate-700 dark:bg-slate-500")}/>
            
        </div>
    )
}