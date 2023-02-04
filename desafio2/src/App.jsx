import { Image } from "./components/Image"

export function App() {
  return (
    <div
      className={
        "flex h-screen flex-col items-center justify-center gap-3 md:flex-row md:p-4"
      }
    >
      <Image />
      <div className={"flex flex-col gap-3"}>
        <small className={"text-#271a45 font-sans text-xs font-light"}>
          CÓDIGO: 42404
        </small>
        <h1 className={"text-#271a45 font-serif text-4xl font-semibold"}>
          Sofá Margot II - Rosé
        </h1>
        <p className={"text-#271a45 font-sans"}>R$ 4.000 </p>
        <button
          className={
            " text-#271a45 mt-5 w-140 rounded-full border border-purple-500 p-2 font-sans text-xs duration-300 hover:bg-violet-400 hover:text-white"
          }
        >
          ADICIONAR À CESTA
        </button>
      </div>
    </div>
  )
}
