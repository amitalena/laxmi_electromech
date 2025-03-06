/* eslint-disable no-unused-vars */
import { Box, Button, Divider, Grid, IconButton, OutlinedInput, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material';
import FooterImg from '../assets/images/footer2.jpg';

const aboutLink = [
    { name: "About Us", route: '/aboutus' },
    { name: "Blogs", route: '/blogs' },
    { name: "Our Service", route: '/services' },
    { name: "Contact Us", route: '/contactus' },
];
const socialLinks = [
    { icon: Facebook, link: '#', name: 'Facebook' },
    { icon: Instagram, link: '#', name: 'Instagram' },
    { icon: Twitter, link: '#', name: 'Twitter' },
    { icon: LinkedIn, link: '#', name: 'LinkedIn' }
];
const Footer = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const hoverStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        color: theme.palette.info.light,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.deep,
            transform: 'scale(1.05)',
        },
    };

    return (
        <Box sx={{
            color: theme.palette.info.main,
            overflow: "hidden",
            background: `url(${FooterImg}) no-repeat center/cover`,

        }}>
            <Box sx={{
                background: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', py: 4,
                px: { xs: 2, sm: 2, md: 2, lg: 12, xl: 12 },
            }}>
                <Grid container spacing={4} justifyContent="center">
                    {/* About Section */}
                    <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                        <Typography variant='h4' color="#000" fontWeight="bold" textTransform="uppercase" mb={1}>
                            About Us
                            <Divider />
                        </Typography>
                        <Stack spacing={2}>
                            <Typography variant='body2'>
                                The Company ROLIF INDIA PVT.LTD. started business services in 2013 as Lighting Solutions.
                                Later the company became an EP Electrical contracting company. This division plays a vital role
                                in project execution of other service divisions.
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* About Links */}
                    <Grid item xs={12} sm={6} md={3} lg={2} xl={3}>
                        <Typography variant='h4' color="#000" fontWeight="bold" textTransform="uppercase" mb={1}>
                            Quick Link
                            <Divider />
                        </Typography>
                        <Stack spacing={1}>
                            {aboutLink.map((list, index) => (
                                <Stack key={index} direction={'row'} alignItems={'center'}>
                                    <ChevronRight />
                                    <Button onClick={() => navigate(list.route)} sx={hoverStyle}>{list.name}</Button>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} sm={6} md={6} lg={2.4} xl={3}>
                        <Typography variant='h4' color="#000" fontWeight="bold" textTransform="uppercase" mb={1}>
                            Contact Info
                            <Divider />
                        </Typography>
                        <Typography><strong>Address:</strong> Shop no 36, B1A, First Floor, Sector 51 Noida 201301, Landmark: Near IDBI Bank</Typography>
                        <Typography><strong>Email:</strong> info@laxmielectromech.in</Typography>
                        <Typography><strong>Phone:</strong> +91-9870287980</Typography>
                    </Grid>

                    {/* Newsletter Subscription */}
                    <Grid item xs={12} sm={6} md={6} lg={2.4} xl={3}>
                        <Typography variant='h4' color="#000" fontWeight="bold" textTransform="uppercase" mb={1}>
                            Stay Updated
                        </Typography>
                        <Typography variant='body2'>
                            Subscribe to our newsletter to receive updates on our latest collections.
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                            <OutlinedInput
                                fullWidth
                                type="email"
                                size="small"
                                placeholder="Enter your email"
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                }}
                                endAdornment={
                                    <IconButton color="#000">
                                        <Send fontSize="small" />
                                    </IconButton>
                                }
                            />
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ background: '#fff', my: 3 }} />

                {/* Footer Bottom Section */}
                <Box sx={{ display: { md: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} <strong>Laxmi Electromech</strong>. All Rights Reserved.
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                        {socialLinks.map(({ icon: Icon, name }, index) => (
                            <IconButton key={index} sx={{ color: '#ffffff', '&:hover': { color: theme.palette.info.dark } }} aria-label={name}>
                                <Icon sx={{ fontSize: '30px' }} />
                            </IconButton>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
