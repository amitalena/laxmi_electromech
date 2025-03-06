import { useState } from "react";
import { Remove, Add } from "@mui/icons-material";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../../assets/logo/laxmi-electomech.jpg";
import { menuData } from "./menuData";


const AccordionMenu = ({ onClose }) => {
    const [openMenus, setOpenMenus] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const handleNavigation = (route) => {
        if (route) {
            navigate(route);
            onClose?.();
        }
    };

    const renderMenu = (menu, index) => (
        <Box key={index}>
            {/* Top-Level Menu Item */}
            <Box
                sx={{ py: 1, px: 2 }}
                onClick={() => {
                    if (!menu.subMenu) handleNavigation(menu.route); // Navigate if no subMenu
                }}
            >
                <Stack
                    direction="row"
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onClick={() => menu && toggleMenu(index)}
                >
                    {/* Icon and Menu Name */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {menu.icon && (
                            <span style={{ marginRight: "8px" }}>{menu.icon}</span>
                        )}
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {menu.name}
                        </Typography>
                    </Box>

                    {/* Expand/Collapse Icon */}
                    {menu.subMenu && (
                        openMenus[index] ? (
                            <Remove style={{ fontSize: "16px", color: "#555" }} />
                        ) : (
                            <Add style={{ fontSize: "16px", color: "#555" }} />
                        )
                    )}
                </Stack>

                {/* Submenu Items */}
                {menu.subMenu && openMenus[index] && (
                    <Box sx={{ width: "100%", pl: 2 }} onClick={() => {
                        handleNavigation(menu.subMenu.route); // Navigate if no subMenu
                    }}>
                        {menu.subMenu.map((subMenu, subIndex) =>
                            renderMenu(subMenu, `${index}-${subIndex}`)
                        )}
                    </Box>
                )}
            </Box>
            <Divider sx={{ backgroundColor: "#ddd" }} />
        </Box>
    );

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            {/* Header Section with Logo  */}
            <Box
                sx={{

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    py: 1,
                    borderBottom: "1px solid #ddd",
                }}
            >
                {/* Logo */}
                <Box>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ height: "50px", width: "auto" }}
                    />
                </Box>
            </Box>

            {/* Menu Items */}
            <Box sx={{ flexGrow: 1, overflowY: "auto", pt: 1 }}>
                {menuData.map((menu, index) => renderMenu(menu, index))}
            </Box>
        </Box>
    );
};

export default AccordionMenu;