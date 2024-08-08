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
            description: 'Desenvolvi um site de e-commerce totalmente funcional com recursos como busca de produtos, autenticação de usuário e integração com gateway de pagamento usando React e Node.js.',
            imageUrl: pizzaImage
        },
        {
            title: 'Aplicativo de Chat',
            description: 'Criei um aplicativo de chat em tempo real usando WebSocket e Node.js, permitindo que os usuários enviem mensagens e criem salas de chat.',
            imageUrl: 'url-to-your-image2.jpg'
        },
        {
            title: 'Plataforma de Rede Social',
            description: 'Construí uma plataforma de rede social onde os usuários podem compartilhar atualizações, seguir uns aos outros e interagir através de comentários e curtidas usando o stack MERN.',
            imageUrl: 'url-to-your-image3.jpg'
        },
        {
            title: 'Ferramenta de Gestão de Tarefas',
            description: 'Desenhei e desenvolvi uma ferramenta de gestão de tarefas para ajudar equipes a organizar seu trabalho, definir prazos e acompanhar o progresso, com recursos de colaboração.',
            imageUrl: 'url-to-your-image4.jpg'
        },
        {
            title: 'App de Fitness',
            description: 'Criei um aplicativo de rastreamento de fitness que permite aos usuários registrar treinos, acompanhar o progresso e definir metas de fitness usando React Native.',
            imageUrl: 'url-to-your-image5.jpg'
        },
    ];

    return (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
                Meus Projetos
            </Typography>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <Box key={index} sx={{ p: 2 }}>
                        <Card sx={{
                            width: 360, // Largura fixa para o card
                            height: 460, // Altura fixa para o card
                            transform: 'scale(0.8)',
                            transition: 'transform 0.6s ease, box-shadow 0.3s ease, opacity 0.5s ease-in-out',
                            position: 'relative',
                            backgroundColor: 'background.paper',
                            color: 'text.primary',
                            opacity: 0.7, // Opacidade inicial para os cards fora do centro
                            '&:hover': {
                                transform: 'scale(0.85)', // Escala o card no hover
                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
                            },
                            '&.slick-center': {
                                transform: 'scale(1.3) translateZ(0)', // Destaque do card, trazendo-o para frente
                                boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.6)',
                                border: '2px solid',
                                borderColor: theme => theme.palette.primary.main,
                                opacity: 1, // Opacidade máxima quando o card está no centro
                                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease',
                            },
                            borderRadius: '24px',
                            overflow: 'hidden',
                            '@media (max-width: 768px)': {
                                width: '100%', // Largura ajustável para telas menores
                                height: 'auto', // Altura automática para telas menores
                            }
                        }}>
                            <CardMedia
                                component="img"
                                height="100%" // Ajusta a altura para ocupar o card inteiro
                                image={project.imageUrl}
                                alt={project.title}
                                sx={{
                                    objectFit: 'cover', // Faz com que a imagem cubra todo o CardMedia sem distorcer
                                    position: 'absolute', // Faz a imagem cobrir o conteúdo
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                            <CardContent sx={{
                                position: 'absolute', // Fixa o conteúdo no rodapé do card
                                bottom: 0, // Posiciona no fundo
                                left: 0,
                                right: 0,
                                background: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',
                                padding: 2,
                                borderRadius: '0 0 24px 24px', // Bordas arredondadas somente na parte inferior
                                backdropFilter: 'blur(1px)', // Efeito de glassmorphism
                                zIndex: 1, // Garante que o conteúdo fique acima da imagem
                            }}>
                                <Typography variant="h6" component="div"> {/* Ajusta o tamanho do título */}
                                    {project.title}
                                </Typography>
                                <Typography variant="body2"> {/* Ajusta o tamanho do texto de descrição */}
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
