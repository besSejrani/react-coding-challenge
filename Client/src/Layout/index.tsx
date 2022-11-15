import React from "react";

// Layout
import Header from "./Header";
import SidebarAdmin from "./SidebarAdmin";

// Theme
import { withTheme as WithTheme } from "./Theme";

// ========================================================================================================

interface ILayout {
	children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<ILayout> = ({ children }) => {
	return (
		<>
			<Header />
			<div style={{ padding: "50px 20px 0px 260px" }}>{children}</div>
			<SidebarAdmin />
		</>
	);
};

export default WithTheme(Layout);
