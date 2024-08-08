import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa'; // Ícones do react-icons

const skills = [
    { name: 'HTML', description: 'Linguagem de marcação para criar páginas da web.', color: '#E44D26', icon: <FaHtml5 /> },
    { name: 'CSS', description: 'Estilização de páginas da web, incluindo layout e design.', color: '#1572B6', icon: <FaCss3Alt /> },
    { name: 'JavaScript', description: 'Linguagem de programação para scripts do lado do cliente e muito mais.', color: '#F7DF1E', icon: <FaJs /> },
    { name: 'C++', description: 'Linguagem de programação de propósito geral com alta performance.', color: '#00599C', icon: <FaCplusplus /> },
    
];

const Skills: React.FC = () => {
    return (
        <Box sx={{ p: 4, backgroundColor: '#0D1117', color: '#E0E0E0' }}>
            <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
                Minhas Habilidades
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper sx={{
                            p: 3,
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: '#161B22',
                            borderRadius: '12px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.5)',
                            }
                        }}>
                            <Box sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '50%',
                                backgroundColor: skill.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2
                            }}>
                                <Box sx={{ color: '#FFFFFF', fontSize: '2rem' }}>
                                    {skill.icon}
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                    {skill.name}
                                </Typography>
                                <Typography variant="body2">
                                    {skill.description}
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
