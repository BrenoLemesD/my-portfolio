import React from 'react';
import Slider from 'react-slick';
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pizzaImage from '@assets/images/pizza.jpeg'; // Usando o alias

const ProjectCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const projects = [
        {
            title: 'Pizza',
            description: 'Developed a fully functional e-commerce website with features like product search, user authentication, and payment gateway integration using React and Node.js.',
            imageUrl: pizzaImage
        },
        {
            title: 'Chat Application',
            description: 'Created a real-time chat application using WebSocket and Node.js, allowing users to send messages and create chat rooms.',
            imageUrl: 'url-to-your-image2.jpg'
        },
        {
            title: 'Social Media Platform',
            description: 'Built a social media platform where users can share updates, follow each other, and interact through comments and likes using MERN stack.',
            imageUrl: 'url-to-your-image3.jpg'
        },
        {
            title: 'Task Management Tool',
            description: 'Designed and developed a task management tool to help teams organize their work, set deadlines, and track progress with features for collaboration.',
            imageUrl: 'url-to-your-image4.jpg'
        },
        {
            title: 'Fitness App',
            description: 'Created a fitness tracking app that allows users to log workouts, track progress, and set fitness goals using React Native.',
            imageUrl: 'url-to-your-image5.jpg'
        },
    ];

    return (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
                My Projects
            </Typography>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <Box key={index} sx={{ p: 2 }}>
                        <Card sx={{
                            height: { xs: '40vh', sm: '50vh', md: '60vh' },
                            transform: 'scale(0.8)',
                            transition: 'transform 0.6s ease, box-shadow 0.3s ease',
                            position: 'relative',
                            backgroundColor: 'background.paper',
                            color: 'text.primary',
                            '&:hover': {
                                transform: 'scale(0.85)',
                            },
                            '&.slick-center': {
                                transform: 'scale(1.2)',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
                                border: '2px solid',
                                borderColor: theme => theme.palette.primary.main,
                            },
                            borderRadius: '16px',
                            overflow: 'hidden', // Garante que a imagem não vazará do card
                        }}>
                            <CardMedia
                                component="img"
                                height="60%"
                                image={project.imageUrl}
                                alt={project.title}
                                sx={{
                                    borderRadius: '16px 16px 0 0',
                                    objectFit: 'cover', // Faz com que a imagem cubra todo o CardMedia sem distorcer
                                }}
                            />
                            <CardContent sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                                color: 'white',
                                padding: 2,
                                borderRadius: '0 0 16px 16px',
                            }}>
                                <Typography variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default ProjectCarousel;
