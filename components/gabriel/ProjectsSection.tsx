import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GabrielDesign } from '../../constants/theme';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

const HandsOnTechnicalProjects = [
    {
        year: '2024',
        title: 'Calculator',
        organization: 'Personal Project',
        services: ['UI/UX Design', 'Frontend Development', 'DOM Manipulation'],
        link: 'https://github.com/SUBHAM-RAJ-X/Calculator',
        details: {
            description: 'A fully functional calculator built with HTML, CSS, and Vanilla JavaScript. Focuses on clean UI and precise mathematical operations.',
            lessons: [
                'Mastered DOM manipulation and event listeners.',
                'Handled edge cases in mathematical operations (division by zero, decimal placement).',
                'Focused on responsive CSS grid for button layouts.'
            ],
            screenshots: [
                require('../../assets/images/Screenshot 2026-02-07 181205.png'),
                require('../../assets/images/Screenshot 2026-02-07 181229.png'),
            ]
        }
    },
    {
        year: '2024',
        title: 'Expense Tracker',
        organization: 'Personal Project',
        services: ['Frontend Development', 'Data Persistence', 'State Management'],
        link: 'https://github.com/SUBHAM-RAJ-X/expence-tracker',
        details: {
            description: 'A real-time expense tracker that helps users manage their daily spending. Uses local storage for data persistence and a clean, stress-free UI.',
            lessons: [
                'Implemented efficient state management for real-time updates.',
                'Learned data persistence using LocalStorage/AsyncStorage.',
                'Optimized UI for mobile-first experience.'
            ],
            screenshots: [
                require('../../assets/images/Screenshot 2026-02-07 182638.png'),
                require('../../assets/images/Screenshot 2026-02-07 182717.png'),
            ]
        }
    },
    {
        year: 'Oct-2025 - Present',
        title: 'Freshin10_delivery_app',
        organization: 'Personal Project',
        services: ['Frontend Development', 'UI/UX Design'],
        link: 'Coming Soon',
        details: {
            description: 'A modern food delivery application focused on speed and intuitive user experience. Currently in development.',
            lessons: [
                'Designing complex multi-step user flows.',
                'Integrating real-time tracking mocks.',
                'Implementing "Vibe Coding" principles for a premium feel.'
            ],
            screenshots: []
        }
    },
];

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>PROJECTS I WORKED ON</Text>
            {HandsOnTechnicalProjects.map((project, index) => (
                <ProjectCard
                    key={index}
                    {...project}
                    onPress={() => setSelectedProject(project)}
                />
            ))}

            <ProjectDetailModal
                project={selectedProject}
                visible={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: GabrielDesign.spacing.xxl,
    },
    sectionTitle: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.3)',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: GabrielDesign.spacing.lg,
    },
});
