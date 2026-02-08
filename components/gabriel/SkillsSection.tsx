import { Fonts, GabrielDesign } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SKILL_CATEGORIES = [
    {
        title: "Programming",
        skills: ["JavaScript", "SQL", "C++", "Java"]
    },
    {
        title: "Web Technologies",
        skills: ["React.js", "Expo", "HTML5 & CSS3"]
    },
    {
        title: "Tools & Methods",
        skills: ["Git & GitHub", "AI Integrated Workflows", "Vibe Coding", "UI/UX Modeling"]
    },
    {
        title: "Exposure",
        skills: ["HR Management"]
    }
];

export function SkillsSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Technical Expertise</Text>
            <View style={styles.grid}>
                {SKILL_CATEGORIES.map((category, index) => (
                    <View key={index} style={styles.category}>
                        <Text style={styles.categoryTitle}>{category.title}</Text>
                        <View style={styles.badgeContainer}>
                            {category.skills.map((skill, sIndex) => (
                                <View key={sIndex} style={styles.badge}>
                                    <Text style={styles.badgeText}>{skill}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: GabrielDesign.spacing.xxl,
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.3)',
        textTransform: 'uppercase',
        letterSpacing: 2,
        marginBottom: GabrielDesign.spacing.lg,
    },
    grid: {
        gap: 32,
    },
    category: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        paddingTop: 24,
        gap: 16,
    },
    categoryTitle: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.4)',
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontFamily: Fonts.mono,
    },
    badgeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    badge: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    badgeText: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: '500',
    },
});
