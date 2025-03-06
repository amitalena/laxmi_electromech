import { Box, Grid, Card, CardMedia, CardContent, Typography, Stack, IconButton, Button, Toolbar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useMediaQuery, useTheme } from "@mui/material";
import { bannerData } from "./bannerData";

const Banner = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is xs (small)

    return (
        <Box sx={{ position: "relative", width: '98.9vw', overflow: "hidden" }}>
            <Toolbar />
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={!isXs} // Enable navigation only for large screens
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="swiper-container"
            >
                {bannerData.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Box elevation={0} >
                            {/* Card Media (Image) */}
                            <Box
                                sx={{
                                    background: `url(${item.imagePath}) no-repeat center/cover`,
                                    objectFit: "cover",
                                    width: "100vw",
                                    height: "100vh",
                                }}
                            />

                            {/* Overlay Card Content */}
                            <Stack
                                sx={{
                                    position: "absolute",
                                    top: { xs: "10%", sm: "20%", md: "30%" },
                                    left: { xs: "5%", sm: "10%" },
                                    backgroundColor: "rgba(0,0,0,0.5)",
                                    color: "white",
                                    padding: "20px",
                                    width: { xs: "90%", sm: "60%", md: "40%" },
                                    borderRadius: "8px",
                                }}
                            >
                                <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { md: "50px", xs: "30px" } }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {item.description}
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}>View Details</Button>
                            </Stack>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Banner;
