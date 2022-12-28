// import Link from 'next/link'
import FormUsername from "./components/cardformusername";
import { GlobalProvider } from "./actions/GlobalContext";

export default function Home() {
  return (
      <GlobalProvider>
        <FormUsername />
      </GlobalProvider>
  )
}

