import { Carter_One as Carter } from 'next/font/google'

const carterOne = Carter({ subsets: ['latin'], weight: '400' })
export default function Estrela() {
  return (
    <div className="bg-white text-center">
      <h2 className={`py-4 text-3xl font-semibold ${carterOne.className}`}>
        QUEM É ESTRELA, SEMPRE BRILHA!
      </h2>
      <div className="flex justify-center py-3">
        <p className="text-md leading-lg break-after-all space-y-3 whitespace-break-spaces text-balance px-20 text-lg">
          Nascida e criada em São Paulo, Stephany Santos é uma jovem periférica
          que sempre esteve em busca de se expressar e foi através da música que
          encontrou uma maneira de demonstrar seus sentimentos e a maneira que
          enxerga a vida. Aos quatorze anos seu interesse em escrever poemas e
          contos foram surgindo, romances clichês e a vida real na periferia
          preenchiam as ideias que iam para o papel.
          <br />
          Apesar de rappers como Nicki Minaj, Lil Kim e Missy Elliott
          influenciarem a sua infância, foi apenas aos dezoito que suas
          primeiras letras de rap foram sendo escritas. A frequência que eventos
          como A Batalha do Escritório e a Batalha do Largo aconteciam, sua
          paixão pelo rap foi crescendo.
          <br />
          Em 2020 gravou sua primeira música em estúdio e no mesmo ano
          participou de um bate papo em formato de live pela FENDA PARALELA,
          nessa conversa contou um pouco sobre sua relação com a música e seu
          trabalho com a moda. Em 2021, a artista participou do seu primeiro
          evento em formato de show live, a festa AFRIKA QUEENS, onde apresentou
          algumas das suas canções.
          <br />
          Nesse mesmo ano, outros eventos como esse aconteceram e seu primeiro
          single estreou em todas as plataformas com direito a vídeo clipe.
          <br />
          No primeiro semestre de 2023, a rapper lançou seu primeiro EP
          intitulado como 5PONTAS, trabalho esse com 3 faixas que transitam
          entre vertentes do rap.
          <br />
          Logo no começo de sua carreira, seu nome artístico era $tar, mas com
          problemas de registo, hoje se consolida como ESTRELA. São em suas
          rimas e melodias, onde ela expressa sua luta como mulher preta e
          periférica na sociedade de classes.
        </p>
      </div>
    </div>
  )
}
