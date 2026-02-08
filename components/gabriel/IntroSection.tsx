import { Fonts, GabrielDesign } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function IntroSection() {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>{'{ Intro }'}</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.bioHighlight}>
                    CS Engineer & Digital Architect I am a Computer Science Engineer from the Academy of Technology who treats code as a canvas for storytelling. Artistic since birth, I bridge the gap between complex JavaScript logic and intuitive, stress-free user experiences. My mission is to craft UI/UX for websites and apps that feel so "cool" and seamless, the user never feels the grind.
                </Text>

                <Text style={styles.bioParagraph}>
                    <Text style={styles.vibeCoding}>
                        During my Software Developer internship, I specialized in vibe coding—using AI-integrated workflows to build responsive, user-centric interfaces at high velocity. From crafting React.js dashboards too learning to managing data with SQL ,
                        I focus on the intersection of user behavior and technical performance, ensuring every project—like my real-time expense trackers—is both stable and visually stunning.
                    </Text>
                </Text>

                <Text style={styles.bioParagraph}>
                    Gained cross-functional exposure by managing core HR functions,
                    improving organizational communication and workplace dynamics.
                </Text>
            </View>

            <View style={styles.awardRow}>
                <Text style={styles.awardTitle}>Exchange of Experience</Text>
                <Text style={styles.awardValue}>Yuga Yatra Retail / Intern & Training</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: GabrielDesign.spacing.xxl,
        gap: 32,
    },
    headerRow: {
        marginBottom: 8,
    },
    headerText: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.4)',
        fontFamily: Fonts.mono,
    },
    content: {
        maxWidth: 800,
        gap: 24,
    },
    bioHighlight: {
        fontSize: 14,
        lineHeight: 24,
        color: '#FFF',
        fontWeight: '500',
    },
    bioParagraph: {
        fontSize: 12,
        lineHeight: 24,
        color: 'rgba(255, 255, 255, 0.6)',
    },
    vibeCoding: {
        color: '#FFF',
        fontWeight: '600',
    },
    awardRow: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        paddingTop: 24,
        gap: 8,
    },
    awardTitle: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.4)',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    awardValue: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '600',
    },
});
