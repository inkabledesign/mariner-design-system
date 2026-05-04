import type { Meta, StoryObj } from '@storybook/react';

const Welcome = () => (
  <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      Welcome to Mariner Design System
    </h1>
    <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem' }}>
      This is the web Storybook for the Mariner cross-platform design system.
    </p>
    
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📦 Available Packages</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li><strong>@mariner/theme</strong> - Design tokens, utilities &amp; Tailwind configs</li>
        <li><strong>@mariner/components</strong> - Cross-platform React components (Atomic Design)</li>
        <li><strong>@mariner/assets</strong> - Fonts, icons &amp; images</li>
      </ul>
    </div>

    <div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎨 Getting Started</h2>
      <p style={{ marginBottom: '0.5rem' }}>
        Add your component stories in the <code style={{ background: '#f5f5f5', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>stories/</code> directory.
      </p>
      <p>
        Component stories from <code style={{ background: '#f5f5f5', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>packages/components/</code> will also appear here automatically.
      </p>
    </div>
  </div>
);

const meta: Meta<typeof Welcome> = {
  title: 'Introduction/Welcome',
  component: Welcome,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Welcome>;

export const Default: Story = {};
