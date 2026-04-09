import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";
import ScreenHome from "../screens/ScreenHome";

export default function Home() {
  return (
    <AppShell
      header={{ height: 80 }}
      padding={0}
      styles={{
        navbar: { border: "none" },
        main: {
          border: "none",
          border: "none",
          width: "100%",
          height: "100%",
        },
      }}
    >
      <AppShell.Header>
        <HeaderHome />
      </AppShell.Header>

      {/*<AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>*/}

      <AppShell.Main>
        <ScreenHome></ScreenHome>
      </AppShell.Main>
    </AppShell>
  );
}
