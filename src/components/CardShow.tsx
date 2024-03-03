import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Show } from "../pages/@type";
import { formataLinkGoogleAgenda, formatarDataEHora } from "../utils";

type Props = {
  show: Show;
};

export const CardShow: React.FC<Props> = ({ show }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={show.image.src}
        title={show.image.title}
      />
      <CardContent>
        <Typography variant="h4" textAlign="center" fontSize={20} mb={3}>
          {show.titulo}
        </Typography>
        <Grid container justifyContent="center">
          <Grid item md={8} mb={2}>
            <Button
              fullWidth
              type="button"
              size="small"
              // variant="outlined"
              color="secondary"
              LinkComponent={Link}
              target="_blank"
              href={formataLinkGoogleAgenda(
                show.titulo,
                show.dataInicio,
                show.dataFim,
                show.local
              )}
            >
              Marcar na Agenda
            </Button>
          </Grid>
        </Grid>
        <Typography variant="body1" fontWeight="bold">
          Início:
        </Typography>
        <Typography variant="body1">
          {formatarDataEHora(show.dataInicio)}
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          Fim:
        </Typography>
        <Typography variant="body1" mb={2}>
          {formatarDataEHora(show.dataFim)}
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          Local:
        </Typography>
        <Link
          href={show.linkLocal}
          target="_blank"
          color="#bb07f2"
          underline="hover"
        >
          <Typography variant="body1">{show.local}</Typography>
        </Link>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item md={8} mb={2}>
            <Button
              fullWidth
              type="button"
              size="small"
              variant="outlined"
              color="secondary"
              LinkComponent={Link}
              target="_blank"
              href={show.linkCompra}
            >
              Comprar Ingresso
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
