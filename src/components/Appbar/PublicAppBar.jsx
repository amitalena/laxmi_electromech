import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    AppBar, Box, Stack, Toolbar, Typography, Drawer, useTheme, MenuItem, IconButton,
    OutlinedInput,
    Button,
    Divider
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Close as CloseIcon, MenuRounded as MenuIcon, LogoutOutlined, AccountCircle, Search } from '@mui/icons-material';
import Rolif_img from '../../assets/logo/laxmi-electomech.jpg';
import TopBar from './TopBar';
import { menuData } from './menuData';
import DropdownMenu from './DropDown';
import AccordionMenu from './AccordionMenu';

const Logo = () => (
    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ height: 55, width: 150 }} data-aos="fade-right" data-aos-duration="1000">
                <img src={Rolif_img} alt="Rolif Logo" style={{ height: '100%', width: '100%' }} />
            </Box>
        </Link>
    </Typography>
);

const MobileMenu = ({ menuOpen, handleDrawerToggle }) => (
    <Drawer anchor="left" open={menuOpen} onClose={handleDrawerToggle}>
        <Box sx={{ py: 1, height: '100%', width: 250, overflowY: 'auto' }} data-aos="fade-left" data-aos-duration="700">
            <AccordionMenu menuData={menuData} onClose={handleDrawerToggle} />
        </Box>
        <MenuItem>
            <LogoutOutlined sx={{ fontSize: 18, color: '#717DA4', mr: 1 }} /> Admin
        </MenuItem>
    </Drawer>
);

const PublicAppBar = ({ isVisible }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        AOS.init({ once: true });
        const handleScroll = () => setScrolling(window.pageYOffset > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                width: '100%',
                backdropFilter: scrolling ? 'blur(10px)' : 'blur(0px)',
                color: scrolling ? theme.palette.info.deep : '#000',
                background: scrolling ? '#fff' : 'transparent',
                transition: 'background 0.3s ease',
            }}
        >
            <TopBar isVisible={isVisible} />
            <Toolbar disableGutters data-aos="fade-down" data-aos-duration="800">
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {/* Logo */}
                    <Stack direction="row" alignItems="center">
                        <Logo />
                    </Stack>
                    {/* search bar */}

                    <Box sx={{ display: 'flex', border: '1px solid #111', width: '30%', borderRadius: '2px', alignItems: 'center', overflow: 'hidden' }}>
                        <OutlinedInput
                            fullWidth
                            type="search"
                            size="small"
                            placeholder="Search here.."
                            sx={{ border: 'none', flex: 1 }}
                        />
                        <Button
                            sx={{
                                width: '50px',
                                height: '40px',
                                minWidth: '40px',
                                minHeight: '40px',
                                background: theme.palette.primary.main,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                '&:hover': { background: theme.palette.primary.dark }, // Hover effect
                            }}
                        >
                            <Search fontSize="small" sx={{ color: '#fff' }} />
                        </Button>
                    </Box>


                    {/* Icons */}
                    <Stack direction="row" alignItems={'center'} gap={1}>
                        <IconButton
                            sx={{
                                display: { xs: "none", md: "flex" },
                                cursor: "pointer",
                                color: "inherit",
                            }}
                            onClick={handleLogin}
                            data-aos="zoom-in"
                            data-aos-duration="800"
                        >
                            <AccountCircle sx={{ fontSize: '30px' }} />
                        </IconButton>

                        {/* Mobile Menu Button */}
                        <IconButton
                            sx={{
                                display: { md: "none", xs: "flex" },
                                cursor: "pointer",
                            }}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            data-aos="zoom-in"
                            data-aos-duration="800"
                        >
                            {menuOpen ? <CloseIcon sx={{ color: "#FFF" }} /> : <MenuIcon sx={{ color: "#FFF" }} />}
                        </IconButton>
                    </Stack>

                </Box>
                {/* Desktop Navigation */}

            </Toolbar>
            <Toolbar elevation={1} sx={{ background: '#fff' }}>
                <Stack
                    direction="row"
                    sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}
                >
                    {menuData.map((menuItem, index) => (
                        <Box key={index} sx={{ position: "relative" }}>
                            <DropdownMenu items={[menuItem]} />
                        </Box>
                    ))}
                </Stack>
            </Toolbar>
            {/* Mobile Menu Drawer */}
            <MobileMenu menuOpen={menuOpen} handleDrawerToggle={() => setMenuOpen(false)} />
        </AppBar>
    );
};

export default PublicAppBar;
