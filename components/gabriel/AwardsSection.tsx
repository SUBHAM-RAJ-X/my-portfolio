import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AWARDS = [
    {
        title: "Academic Background",
        value: "Academy of Technology / B.Tech CSE",
    },
    {
        title: "Skills Development",
        value: "Internship Completion Certificate",
        link: "https://drive.google.com/file/d/1qTMXapqsqBniijHbhMxsnKv43TxbWb12/view",
    },
    {
        title: "Recognitions",
        value: "PPO Offer Letter",
        link: "https://drive.google.com/file/d/1-poK_oskbgbBKyvD5TInD4YyM963DgAs/view?usp=sharing",
    },
    {
        title: "Interests",
        value: "Travelling , Coding , Music",
    },
];

export function AwardsSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Practical Experience</Text>
            <View style={styles.grid}>
                {AWARDS.map((a, i) => {
                    const Content = (
                        <View style={styles.item}>
                            <Text style={styles.itemTitle}>{a.title}</Text>
                            <Text style={[styles.itemValue, a.link && styles.linkText]}>
                                {a.value} {a.link && '→'}
                            </Text>
                        </View>
                    );

                    if (a.link) {
                        return (
                            <TouchableOpacity
                                key={i}
                                onPress={() => Linking.openURL(a.link)}
                                activeOpacity={0.7}
                            >
                                {Content}
                            </TouchableOpacity>
                        );
                    }

                    return <View key={i}>{Content}</View>;
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 40,
        gap: 24,
    },
    sectionTitle: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.3)',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    grid: {
        gap: 32,
    },
    item: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        paddingTop: 24,
        gap: 8,
    },
    itemTitle: {
        fontSize: 10,
        color: 'rgba(255, 255, 255, 0.4)',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    itemValue: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '600',
    },
    linkText: {
        textDecorationLine: 'underline',
    },
});
