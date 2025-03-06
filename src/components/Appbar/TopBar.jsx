import { Call, CallOutlined, MailOutline, PhoneAndroidOutlined } from "@mui/icons-material";
import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TopBar = () => {
    const theme = useTheme();
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = useCallback(() => {
        setIsVisible(window.scrollY < 50);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        AOS.init({ duration: 300, once: true });
    }, []);

    return (
        <Box
            sx={{
                px: { md: 2, lg: 10, xl: 10, xs: 1 },
                py: 1,
                display: { lg: 'block', md: 'none', sm: 'none', xs: 'none' },
                background: '#000',
                color: theme.palette.info.light,
            }}
            data-aos="fade-down"
            style={{ display: isVisible ? "block" : "none" }}
        >
            <Stack
                sx={{
                    flexDirection: { md: 'row', xs: 'column' },
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: { md: 'space-between', xs: 'center' },
                }}
            >
                <Box
                    sx={{
                        display: { md: 'flex', xs: 'flex' },
                        alignItems: 'center',
                        justifyContent: { md: 'center', xs: 'center' },
                        gap: 2,
                        flexDirection: { md: 'row', xs: 'column' },
                    }}
                >
                    <Stack direction="row" spacing={1} alignItems={'center'}>
                        <MailOutline sx={{ fontSize: '20px', color: '#FDFDFD' }} />
                        <Typography variant="body2">laxmielectromech.com</Typography>
                        <Divider
                            sx={{
                                background: '#e9e9e9',
                                height: '15px',
                                width: '0px',
                                display: { md: 'block', xs: 'none' },
                            }}
                            orientation='vertical'
                        />
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems={'center'}>
                        <CallOutlined sx={{ fontSize: '20px', color: '#FDFDFD' }} />
                        <Typography variant="h6" fontWeight={'bold'}>+91-0123456789</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default TopBar;
