import { BlogPosts } from "@/components/blog-posts";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });
const poppins2 = Montserrat({ weight: "400", subsets: ["cyrillic"] });

export default function Page () {
  return (
    <div className = 'flex flex-col items-start justify-start bg-slate-50 dark:bg-slate-900 text-slate-950 dark:text-slate-50 flex-grow px-40 py-4 space-y-2'>
      <h1 className={cn('text-4xl font-bold text-yellow-600', poppins.className)}>Hey! I'm Debasish Barai.</h1>
      <h2 className={cn('text-2xl', poppins2.className)}>
      I'm a full stack software engineer passionate about web development, Neovim, custom built mechanical keyboards, and sharing what I know.</h2>
      <h2 className={cn('text-xl text-slate-400', poppins2.className)}>You can find me on my github and I also like to blog here!</h2>
      <BlogPosts />
    </div>
  )
}