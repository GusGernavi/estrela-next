import Estrela from './components/estrela'
import Main from './components/main'
import { Shows } from './components/shows'

export default function Home() {
  return (
    <div
      className="bg-cover bg-fixed"
      style={{
        backgroundImage: 'url(/Capa.jpg)',
      }}
    >
      <Main />
      <Estrela />
      <Shows />
    </div>
  )
}
