import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./views/global/TopBar";
import SideBar from "./views/global/SideBar";
import Dashboard from "./views/dashboard/index";
import Team from "./views/team";
import Invoices from "./views/invoices";
import Contacts from "./views/contacts";
// import Bar from "./views/Bar";
import Form from "./views/form";
// import Line from "./views/line";
// import Pie from "./views/pie";
import FAQ from "./views/faq";
// import Geography from "./views/geography";
import Calendar from "./views/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar ] = useState(true)
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element= {<Team />} />
              <Route path="/invoices" element= {<Invoices />} />
              <Route path="/contacts" element= {<Contacts />} />
              {/* <Route path="/bar" element= {<Bar />} /> */}
              <Route path="/form" element= {<Form />} />
              {/* <Route path="/line" element= {<Line />} /> */}
              {/* <Route path="/pie" element= {<Pie />} /> */}
              <Route path="/faq" element= {<FAQ />} />
              {/* <Route path="/geography" element= {<Geography />} /> */}
              <Route path="/calendar" element= {<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
