import React, { useEffect, useState } from 'react';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import NavigationBar from '../components/navigationBar';
import PageBanner from '../components/pageBanner';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5002/api/projects');
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <div>
            <NavigationBar />
            <PageBanner text="Project List" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <TableContainer component={Paper} style={{ margin: '20px', maxWidth: '90vw', overflowX: 'auto' }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Target Amount</TableCell>
                                <TableCell>Current Amount</TableCell>
                                <TableCell>Start Date</TableCell>
                                <TableCell>End Date</TableCell>
                                <TableCell>Region</TableCell>
                                <TableCell>Country</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projects.map((project) => (
                                <TableRow key={project._id}>
                                    <TableCell>{project.title}</TableCell>
                                    <TableCell>{project.description}</TableCell>
                                    <TableCell>{project.target_amount}</TableCell>
                                    <TableCell>{project.current_amount}</TableCell>
                                    <TableCell>{new Date(project.start_date).toLocaleDateString()}</TableCell>
                                    <TableCell>{new Date(project.end_date).toLocaleDateString()}</TableCell>
                                    <TableCell>{project.region}</TableCell>
                                    <TableCell>{project.country}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ProjectList;