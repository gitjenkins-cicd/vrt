import React from "react";
import { SnackbarProvider } from "notistack";
import { Box } from "@material-ui/core";
import Header from "./components/Header";
import {
  UserProvider,
  ProjectProvider,
  BuildProvider,
  TestRunProvider,
  SocketProvider,
  HelpProvider,
} from "./contexts";
import Router from "./Router";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <UserProvider>
        <ProjectProvider>
          <BuildProvider>
            <TestRunProvider>
              <SocketProvider>
                <HelpProvider>
                  <Box height="10%">
                    <Header />
                  </Box>
                  <Box height="90%">
                    <Router />
                  </Box>
                </HelpProvider>
              </SocketProvider>
            </TestRunProvider>
          </BuildProvider>
        </ProjectProvider>
      </UserProvider>
    </SnackbarProvider>
  );
}

export default App;
