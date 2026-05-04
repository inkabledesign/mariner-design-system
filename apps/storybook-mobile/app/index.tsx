import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function StorybookIndex() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Mariner Design System</Text>
          <Text style={styles.subtitle}>Mobile Storybook</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📦 Available Packages</Text>
          <Text style={styles.item}>• @mariner/theme - Design tokens, utilities & Tailwind configs</Text>
          <Text style={styles.item}>• @mariner/components - React components (Atomic Design)</Text>
          <Text style={styles.item}>• @mariner/assets - Fonts, icons & images</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎨 Component Stories</Text>
          <Text style={styles.description}>
            Add your component stories in the src/stories directory.
          </Text>
          <Text style={styles.description}>
            Configure Storybook React Native to display your components here.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 24,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  item: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
});
