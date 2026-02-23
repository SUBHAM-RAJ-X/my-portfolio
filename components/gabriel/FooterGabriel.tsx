import { Fonts } from '@/constants/theme';
import React from 'react';
import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function FooterGabriel() {
    const handleEmail = () => {
        const url = 'mailto:subhamrajx@gmail.com';
        if (Platform.OS === 'web') {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_self';
            link.click();
        } else {
            Linking.openURL(url);
        }
    };

    const handlePhone = () => {
        const url = 'tel:8797285830';
        if (Platform.OS === 'web') {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_self';
            link.click();
        } else {
            Linking.openURL(url);
        }
    };
    const handleLinkedIn = () => Linking.openURL('https://www.linkedin.com/in/subham-raj-4aa551254');
    const handleGitHub = () => Linking.openURL('https://github.com/SUBHAM-RAJ-X');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let’s make something happy together</Text>

            <View style={styles.contactRow}>
                <View style={styles.primaryContact}>
                    <TouchableOpacity onPress={handleEmail}>
                        <Text style={styles.contactLink}>subhamrajx@gmail.com</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePhone}>
                        <Text style={styles.phoneLink}>+91 8797285830</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.socialRow}>
                    <Text style={styles.separator}>/</Text>
                    <TouchableOpacity onPress={handleLinkedIn}>
                        <Text style={styles.contactLink}>LinkedIn</Text>
                    </TouchableOpacity>
                    <Text style={styles.separator}>/</Text>
                    <TouchableOpacity onPress={handleGitHub}>
                        <Text style={styles.contactLink}>GitHub</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomRow}>
                <Text style={styles.copyright}>© 2026 Subham Raj. All rights reserved.</Text>
                <Text style={styles.location}>Danapur, Patna, Bihar, India</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        paddingBottom: 40,
        gap: 40,
    },
    title: {
        fontSize: 48,
        fontWeight: '800',
        color: '#FFF',
        textTransform: 'uppercase',
        letterSpacing: -1,
        lineHeight: 52,
    },
    contactRow: {
        flexDirection: Platform.OS === 'web' ? 'row' : 'column',
        alignItems: Platform.OS === 'web' ? 'center' : 'flex-start',
        gap: 32,
    },
    primaryContact: {
        gap: 8,
    },
    socialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    phoneLink: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.6)',
        fontFamily: Fonts.mono,
    },
    contactLink: {
        fontSize: 18,
        color: '#FFF',
        textDecorationLine: 'underline',
    },
    separator: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.3)',
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        paddingTop: 24,
    },
    copyright: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.4)',
    },
    location: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.4)',
    },
});
