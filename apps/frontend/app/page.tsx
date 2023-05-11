import config from "../src/config"

export default function Home() {
  return <main className="h-[100vh] flex items-center justify-center font-medium text-xl">{JSON.stringify(config, undefined, 2)}</main>
}
