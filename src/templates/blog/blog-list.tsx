import { Search } from "@/components/search";
import { useRouter } from "next/router";

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string

  const pageTItle = query ? `Resultados de busca para "${query}"` : "Transformando seu negócio em uma loja virtual"

  return <div className="flex flex-col py-24 flex-grow h-full">
    <header>
      <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">

        <div className="flex flex-col gap-4 md:px-0">
          {/**TAG */}
          <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">BLOG</span>

          {/**Titulo */}
          <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">{pageTItle}</h1>
        </div>
        {/**Search */}
        <Search />
      </div>
    </header>


    {/**Listagem de post */}
  </div>;
}