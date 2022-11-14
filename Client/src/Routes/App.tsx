import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "@Pages/Dashboard";
import Planning from "@Pages/Planning";
import PlanningDetails from "@Pages/PlanningDetails";
import NotFound from "@Pages/NotFound";

// Layout
import Layout from "../Layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// ========================================================================================================

const App = () => (
	<Router>
		<Layout>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/planning" element={<Planning />} />
				<Route path="/planning/:id" element={<PlanningDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	</Router>
);

export default App;
