import { Flare, Home, Star, Telegram } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

type Props = {
  value: number | undefined;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export const Menu: React.FC<Props> = ({ setValue, value }) => {
  return (
    <Paper
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(255, 0, 0, 0)",
        zIndex: value === 0 ? 2 : "inherit",
      }}
      elevation={0}
    >
      <BottomNavigation
        showLabels
        sx={{
          backgroundColor: value === 0 ? "rgba(255, 0, 0, 0)" : "inherit",
        }}
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{
            ".Mui-selected": {
              color: "#bb07f2 ",
            },
          }}
          label="Home"
          icon={<Home sx={{ color: value === 0 ? "#bb07f2" : "inherit" }} />}
        />
        <BottomNavigationAction
          sx={{
            ".Mui-selected": {
              color: "#bb07f2",
            },
          }}
          label="Raios de Luz"
          icon={<Star sx={{ color: value === 1 ? "#bb07f2" : "inherit" }} />}
        />
        <BottomNavigationAction
          sx={{
            ".Mui-selected": {
              color: "#bb07f2",
            },
          }}
          label="Depoimentos"
          icon={<Flare sx={{ color: value === 2 ? "#bb07f2" : "inherit" }} />}
        />
        <BottomNavigationAction
          sx={{
            ".Mui-selected": {
              color: "#bb07f2",
            },
          }}
          label="Contato"
          icon={
            <Telegram sx={{ color: value === 3 ? "#bb07f2" : "inherit" }} />
          }
        />
      </BottomNavigation>
    </Paper>
  );
};
