import { Box, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import capa from "../assets/imgs/Capa.jpg";
import { CardShow } from "../components/CardShow";
import { Show } from "./@type";

export const HomePage: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([
    {
      titulo: "Audição 5 pontas",
      dataInicio: new Date(2023, 7, 22, 21, 0),
      dataFim: new Date(2023, 7, 23, 4, 0),
      image: {
        src:
          "https://scontent.fcgh16-1.fna.fbcdn.net/v/t39.30808-6/356930333_1662882857567701_1930681474542122852_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeFJ6hqB4Ym2nHD-qFJWEpuoO6YuW2_8fyM7pi5bb_x_I-GF6cbh4qmAaoqjgkYemQsj01Y6shgH1Yl9J82DtUIc&_nc_ohc=DlW5AreATt4AX-LM6Y9&_nc_ht=scontent.fcgh16-1.fna&oh=00_AfBM_mmuQuLofAhE1Du6atDt6VOe7f-2Kgg6fJWMRtZ-1A&oe=65E9D849",
        title: "Audição Estrela",
      },
      local:
        "Avenida Jerimanduba, 175, Jaraguá, São Paulo - SP, 05181-000, Brasil",
      linkCompra:
        "https://www.sympla.com.br/evento/audicao-ep-5pontas/2012778?fbclid=IwAR0xtrrrTfR-pxz0Dl_toUto_pXkpPvrSRXqcctWUcS2YD4tbJd1CTUAkcs&referrer=l.facebook.com",
      linkLocal:
        "https://www.google.com/maps/place/Av.+Jerimanduba,+175+-+Jaraguá,+São+Paulo+-+SP,+05181-000/@-23.4548418,-46.7425255,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefbf3854156cd:0x528826bd7f4803be!8m2!3d-23.4548418!4d-46.7425255!16s%2Fg%2F11c1bvsg66?entry=ttu",
    },
    {
      titulo: "Audição 5 pontas",
      dataInicio: new Date(2023, 7, 22, 21, 0),
      dataFim: new Date(2023, 7, 23, 4, 0),
      image: {
        src:
          "https://scontent.fcgh16-1.fna.fbcdn.net/v/t39.30808-6/356930333_1662882857567701_1930681474542122852_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeFJ6hqB4Ym2nHD-qFJWEpuoO6YuW2_8fyM7pi5bb_x_I-GF6cbh4qmAaoqjgkYemQsj01Y6shgH1Yl9J82DtUIc&_nc_ohc=DlW5AreATt4AX-LM6Y9&_nc_ht=scontent.fcgh16-1.fna&oh=00_AfBM_mmuQuLofAhE1Du6atDt6VOe7f-2Kgg6fJWMRtZ-1A&oe=65E9D849",
        title: "Audição Estrela",
      },
      local:
        "Avenida Jerimanduba, 175, Jaraguá, São Paulo - SP, 05181-000, Brasil",
      linkCompra:
        "https://www.sympla.com.br/evento/audicao-ep-5pontas/2012778?fbclid=IwAR0xtrrrTfR-pxz0Dl_toUto_pXkpPvrSRXqcctWUcS2YD4tbJd1CTUAkcs&referrer=l.facebook.com",
      linkLocal:
        "https://www.google.com/maps/place/Av.+Jerimanduba,+175+-+Jaraguá,+São+Paulo+-+SP,+05181-000/@-23.4548418,-46.7425255,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefbf3854156cd:0x528826bd7f4803be!8m2!3d-23.4548418!4d-46.7425255!16s%2Fg%2F11c1bvsg66?entry=ttu",
    },
    {
      titulo: "Audição 5 pontas",
      dataInicio: new Date(2023, 7, 22, 21, 0),
      dataFim: new Date(2023, 7, 23, 4, 0),
      image: {
        src:
          "https://scontent.fcgh16-1.fna.fbcdn.net/v/t39.30808-6/356930333_1662882857567701_1930681474542122852_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeFJ6hqB4Ym2nHD-qFJWEpuoO6YuW2_8fyM7pi5bb_x_I-GF6cbh4qmAaoqjgkYemQsj01Y6shgH1Yl9J82DtUIc&_nc_ohc=DlW5AreATt4AX-LM6Y9&_nc_ht=scontent.fcgh16-1.fna&oh=00_AfBM_mmuQuLofAhE1Du6atDt6VOe7f-2Kgg6fJWMRtZ-1A&oe=65E9D849",
        title: "Audição Estrela",
      },
      local:
        "Avenida Jerimanduba, 175, Jaraguá, São Paulo - SP, 05181-000, Brasil",
      linkCompra:
        "https://www.sympla.com.br/evento/audicao-ep-5pontas/2012778?fbclid=IwAR0xtrrrTfR-pxz0Dl_toUto_pXkpPvrSRXqcctWUcS2YD4tbJd1CTUAkcs&referrer=l.facebook.com",
      linkLocal:
        "https://www.google.com/maps/place/Av.+Jerimanduba,+175+-+Jaraguá,+São+Paulo+-+SP,+05181-000/@-23.4548418,-46.7425255,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefbf3854156cd:0x528826bd7f4803be!8m2!3d-23.4548418!4d-46.7425255!16s%2Fg%2F11c1bvsg66?entry=ttu",
    },
    {
      titulo: "Audição 5 pontas",
      dataInicio: new Date(2023, 7, 22, 21, 0),
      dataFim: new Date(2023, 7, 23, 4, 0),
      image: {
        src:
          "https://scontent.fcgh16-1.fna.fbcdn.net/v/t39.30808-6/356930333_1662882857567701_1930681474542122852_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=d8d9c5&_nc_eui2=AeFJ6hqB4Ym2nHD-qFJWEpuoO6YuW2_8fyM7pi5bb_x_I-GF6cbh4qmAaoqjgkYemQsj01Y6shgH1Yl9J82DtUIc&_nc_ohc=DlW5AreATt4AX-LM6Y9&_nc_ht=scontent.fcgh16-1.fna&oh=00_AfBM_mmuQuLofAhE1Du6atDt6VOe7f-2Kgg6fJWMRtZ-1A&oe=65E9D849",
        title: "Audição Estrela",
      },
      local:
        "Avenida Jerimanduba, 175, Jaraguá, São Paulo - SP, 05181-000, Brasil",
      linkCompra:
        "https://www.sympla.com.br/evento/audicao-ep-5pontas/2012778?fbclid=IwAR0xtrrrTfR-pxz0Dl_toUto_pXkpPvrSRXqcctWUcS2YD4tbJd1CTUAkcs&referrer=l.facebook.com",
      linkLocal:
        "https://www.google.com/maps/place/Av.+Jerimanduba,+175+-+Jaraguá,+São+Paulo+-+SP,+05181-000/@-23.4548418,-46.7425255,17z/data=!3m1!4b1!4m6!3m5!1s0x94cefbf3854156cd:0x528826bd7f4803be!8m2!3d-23.4548418!4d-46.7425255!16s%2Fg%2F11c1bvsg66?entry=ttu",
    },
  ]);

  return (
    <>
      <Grid
        item
        md={12}
        height="950px"
        sx={{
          backgroundImage: `url(${capa})`,
          backgroundSize: "cover",
        }}
      >
        <Grid container justifyContent="right">
          <Grid item md={3} mt={15} mr={10}>
            <iframe
              // style="border-radius:12px"
              src="https://open.spotify.com/embed/album/4MGZMX2BTjImtPDCay6Tag?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              // allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} py={4}>
        <Typography
          align="center"
          variant="h2"
          fontFamily="Madimi One, sans-serif"
          fontSize={32}
        >
          QUEM É ESTRELA, SEMPRE BRILHA!
        </Typography>
        <Divider
          sx={{
            margin: "0 auto",
            mb: 2,
            width: "50%",
          }}
        />
        <Typography
          align="center"
          mt={1}
          px={30}
          mb={2}
          variant="h2"
          fontFamily="Ojuju, sans-serif"
          fontSize={24}
        >
          Nascida e criada em São Paulo, Stephany Santos é uma jovem periférica
          que sempre esteve em busca de se expressar e foi através da música que
          encontrou uma maneira de demonstrar seus sentimentos e a maneira que
          enxerga a vida.
          <Box mt={2} />
          Aos quatorze anos seu interesse em escrever poemas e contos foram
          surgindo, romances clichês e a vida real na periferia preenchiam as
          ideias que iam para o papel.
          <Box mt={2} />
          Apesar de rappers como Nicki Minaj, Lil Kim e Missy Elliott
          influenciarem a sua infância, foi apenas aos dezoito que suas
          primeiras letras de rap foram sendo escritas.
          <Box mt={2} />
          A frequência que eventos como A Batalha do Escritório e a Batalha do
          Largo aconteciam, sua paixão pelo rap foi crescendo.
          <Box mt={2} />
          Em 2020 gravou sua primeira música em estúdio e no mesmo ano
          participou de um bate papo em formato de live pela FENDA PARALELA,
          nessa conversa contou um pouco sobre sua relação com a música e seu
          trabalho com a moda.
          <Box mt={2} />
          Em 2021, a artista participou do seu primeiro evento em formato de
          show live, a festa AFRIKA QUEENS, onde apresentou algumas das suas
          canções.
          <Box mt={2} />
          Nesse mesmo ano, outros eventos como esse aconteceram e seu primeiro
          single estreou em todas as plataformas com direito a vídeo clipe.
          <Box mt={2} />
          No primeiro semestre de 2023, a rapper lançou seu primeiro EP
          intitulado como 5PONTAS, trabalho esse com 3 faixas que transitam
          entre vertentes do rap.
          <Box mt={2} />
          Logo no começo de sua carreira, seu nome artístico era $tar, mas com
          problemas de registo, hoje se consolida como ESTRELA.
          <Box mt={2} />
          São em suas rimas e melodias, onde ela expressa sua luta como mulher
          preta e periférica na sociedade de classes.
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            backgroundColor: "#6c007a",
            boxShadow: "1 1 1 1",
          }}
          py={3}
        >
          <Grid item md={12}>
            <Typography
              variant="h3"
              color="white"
              mb={1}
              fontFamily="Madimi One, sans-serif"
              textAlign="center"
            >
              Shows
            </Typography>
          </Grid>
          {shows?.map((show) => (
            <Grid item md={2}>
              <CardShow show={show} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
