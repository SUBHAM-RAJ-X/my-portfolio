import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fonts, GabrielDesign } from '../../constants/theme';

interface ProjectCardProps {
    year: string;
    title: string;
    organization: string;
    services: string[];
    link?: string;
    onPress: () => void;
}

export function ProjectCard({ year, title, organization, services, onPress }: ProjectCardProps) {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.header}>
                <Text style={styles.year}>{year}</Text>
                <Text style={styles.org}>{organization}</Text>
            </View>

            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.servicesWrapper}>
                {services.map((service, index) => (
                    <Text key={index} style={styles.service}>
                        {service}{index < services.length - 1 ? ' / ' : ''}
                    </Text>
                ))}
            </View>

            <View style={styles.divider} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: GabrielDesign.spacing.lg,
        backgroundColor: 'transparent',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: GabrielDesign.spacing.sm,
    },
    year: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.4)',
        fontFamily: Fonts.mono,
    },
    org: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.4)',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    titleWrapper: {
        marginBottom: GabrielDesign.spacing.md,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#FFFFFF',
        textTransform: 'uppercase',
    },
    servicesWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    service: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: GabrielDesign.spacing.lg,
    },
});
