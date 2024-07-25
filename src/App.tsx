import React from 'react';
import { Container, Typography, Box } from "@mui/material";
import Hero from './pages/Home/sections/Hero/Hero';
import NavBar from './components/NavBar/NavBar'; // Altere o caminho conforme necessário

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <Container maxWidth="lg">
                <Box id="about" py={10}>
                    <Typography variant="h3" gutterBottom>About</Typography>
                    <Typography paragraph>
                        I am a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. 
                        Well-versed in technology and writing code to create systems that are reliable and user-friendly. 
                        Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.
                    </Typography>
                </Box>
                <Box id="skills" py={10}>
                    <Typography variant="h3" gutterBottom>Skills</Typography>
                    <Typography paragraph>
                        - Proficient in JavaScript, React, Node.js, and Python<br />
                        - Strong understanding of data structures and algorithms<br />
                        - Experience with cloud services such as AWS and Azure<br />
                        - Excellent problem-solving skills and attention to detail
                    </Typography>
                </Box>
                <Box id="projects" py={10}>
                    <Typography variant="h3" gutterBottom>Projects</Typography>
                    <Typography paragraph>
                        <strong>Project 1:</strong> E-commerce Website<br />
                        Developed a fully functional e-commerce website with features like product search, user authentication, and payment gateway integration using React and Node.js.<br /><br />
                        <strong>Project 2:</strong> Chat Application<br />
                        Created a real-time chat application using WebSocket and Node.js, allowing users to send messages and create chat rooms.
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default App;
