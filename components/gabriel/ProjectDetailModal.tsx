import { BlurView } from 'expo-blur';
import React, { useState } from 'react';
import { Dimensions, Image, Linking, Modal, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { SlideInUp } from 'react-native-reanimated';
import { Fonts } from '../../constants/theme';

interface ProjectDetailModalProps {
    project: any;
    visible: boolean;
    onClose: () => void;
}

export function ProjectDetailModal({ project, visible, onClose }: ProjectDetailModalProps) {
    const [expandedImage, setExpandedImage] = useState<any>(null);

    if (!project) return null;

    const handleLink = () => {
        if (project.link && project.link !== 'Coming Soon') {
            Linking.openURL(project.link);
        }
    };

    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                <BlurView intensity={20} tint="dark" style={StyleSheet.absoluteFill}>
                    <View style={styles.centeredView}>
                        <Animated.View
                            entering={SlideInUp.springify().damping(20)}
                            style={styles.modalView}
                        >
                            <View style={styles.header}>
                                <Text style={styles.year}>{project.year}</Text>
                                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                    <Text style={styles.closeText}>CLOSE</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                                <Text style={styles.title}>{project.title}</Text>
                                <Text style={styles.org}>{project.organization}</Text>

                                <View style={styles.divider} />

                                <Text style={styles.sectionHeading}>THE VISION</Text>
                                <Text style={styles.description}>{project.details?.description}</Text>

                                {project.details?.screenshots && project.details.screenshots.length > 0 && (
                                    <View style={styles.section}>
                                        <Text style={styles.sectionHeading}>GALLERY</Text>
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            contentContainerStyle={styles.galleryContainer}
                                        >
                                            {project.details.screenshots.map((img: any, index: number) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={() => setExpandedImage(img)}
                                                    activeOpacity={0.8}
                                                >
                                                    <Image
                                                        source={img}
                                                        style={styles.screenshot}
                                                        resizeMode="cover"
                                                    />
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </View>
                                )}

                                <View style={styles.section}>
                                    <Text style={styles.sectionHeading}>LESSONS LEARNED</Text>
                                    {project.details?.lessons.map((lesson: string, index: number) => (
                                        <View key={index} style={styles.lessonItem}>
                                            <Text style={styles.bullet}>•</Text>
                                            <Text style={styles.lessonText}>{lesson}</Text>
                                        </View>
                                    ))}
                                </View>

                                <View style={styles.section}>
                                    <Text style={styles.sectionHeading}>TECH & SERVICES</Text>
                                    <View style={styles.servicesRow}>
                                        {project.services.map((service: string, index: number) => (
                                            <Text key={index} style={styles.serviceTag}>
                                                {service}{index < project.services.length - 1 ? ' + ' : ''}
                                            </Text>
                                        ))}
                                    </View>
                                </View>

                                {project.link !== 'Coming Soon' && (
                                    <TouchableOpacity onPress={handleLink} style={styles.linkButton}>
                                        <Text style={styles.linkButtonText}>VIEW ON GITHUB</Text>
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </Animated.View>
                    </View>
                </BlurView>
            </Modal>

            {/* Expanded Image Modal */}
            <Modal
                visible={!!expandedImage}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setExpandedImage(null)}
            >
                <BlurView intensity={30} tint="dark" style={StyleSheet.absoluteFill}>
                    <TouchableOpacity
                        style={styles.expandedImageContainer}
                        onPress={() => setExpandedImage(null)}
                        activeOpacity={1}
                    >
                        <Image
                            source={expandedImage}
                            style={styles.fullImage}
                            resizeMode="contain"
                        />
                        <TouchableOpacity
                            style={styles.closeFullButton}
                            onPress={() => setExpandedImage(null)}
                        >
                            <Text style={styles.closeFullText}>TAP TO CLOSE</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </BlurView>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: Platform.OS === 'web' ? '60%' : '90%',
        maxWidth: 800,
        backgroundColor: '#0A0A0A',
        borderRadius: 20,
        padding: 30,
        height: '80%',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    year: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.4)',
        fontFamily: Fonts.mono,
    },
    closeButton: {
        padding: 5,
    },
    closeText: {
        fontSize: 12,
        color: '#FFF',
        fontFamily: Fonts.mono,
        letterSpacing: 2,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#FFF',
        textTransform: 'uppercase',
        letterSpacing: -1,
    },
    org: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.4)',
        marginTop: 4,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginVertical: 24,
    },
    section: {
        marginTop: 24,
    },
    sectionHeading: {
        fontSize: 10,
        color: 'rgba(255, 255, 255, 0.3)',
        letterSpacing: 2,
        marginBottom: 12,
        fontFamily: Fonts.mono,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    galleryContainer: {
        gap: 16,
        paddingRight: 20,
    },
    screenshot: {
        width: 250,
        height: 150,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        backgroundColor: '#111',
    },
    lessonItem: {
        flexDirection: 'row',
        marginBottom: 8,
        gap: 10,
    },
    bullet: {
        color: 'rgba(255, 255, 255, 0.4)',
    },
    lessonText: {
        fontSize: 14,
        lineHeight: 20,
        color: 'rgba(255, 255, 255, 0.7)',
        flex: 1,
    },
    expandedImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    fullImage: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.8,
    },
    closeFullButton: {
        position: 'absolute',
        bottom: 40,
        padding: 10,
    },
    closeFullText: {
        color: '#FFF',
        fontSize: 12,
        fontFamily: Fonts.mono,
        letterSpacing: 2,
        opacity: 0.6,
    },
    servicesRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    serviceTag: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: Fonts.mono,
    },
    linkButton: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 4,
    },
    linkButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 2,
    },
});
