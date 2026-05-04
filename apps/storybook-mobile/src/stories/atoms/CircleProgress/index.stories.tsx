import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CircleProgress } from '@mariner/components';

const meta: Meta<typeof CircleProgress> = {
  title: 'Atoms/CircleProgress',
  component: CircleProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0-100)',
    },
    size: {
      control: { type: 'range', min: 16, max: 128, step: 4 },
      description: 'Diameter of the circle in pixels',
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 16, step: 1 },
      description: 'Width of the progress stroke',
    },
    progressColor: {
      control: 'color',
      description: 'Color of the progress stroke',
    },
    railColor: {
      control: 'color',
      description: 'Color of the background rail',
    },
    children: {
      control: false,
      description: 'Content to display in the center of the circle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic progress circles
export const Default: Story = {
  args: {
    progress: 75,
    size: 48,
    strokeWidth: 4,
  },
};

export const Small: Story = {
  args: {
    progress: 60,
    size: 24,
    strokeWidth: 2,
  },
};

export const Large: Story = {
  args: {
    progress: 85,
    size: 96,
    strokeWidth: 8,
  },
};

// Progress states
export const Empty: Story = {
  args: {
    progress: 0,
    size: 48,
    strokeWidth: 4,
  },
};

export const Half: Story = {
  args: {
    progress: 50,
    size: 48,
    strokeWidth: 4,
  },
};

export const Full: Story = {
  args: {
    progress: 100,
    size: 48,
    strokeWidth: 4,
  },
};

// With custom colors
export const CustomColors: Story = {
  args: {
    progress: 70,
    size: 48,
    strokeWidth: 4,
    progressColor: '#10b981',
    railColor: '#e5e7eb',
  },
};

export const AccentColors: Story = {
  args: {
    progress: 65,
    size: 48,
    strokeWidth: 4,
    progressColor: '#a68756',
    railColor: '#e4dbcc',
  },
};

// With center content
export const WithPercentage: Story = {
  args: {
    progress: 80,
    size: 64,
    strokeWidth: 6,
    children: (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: '600',
        color: '#1f2937'
      }}>
        80%
      </div>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    progress: 90,
    size: 64,
    strokeWidth: 6,
    children: (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '24px'
      }}>
        ✓
      </div>
    ),
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = useState(30);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <CircleProgress 
          progress={progress} 
          size={80} 
          strokeWidth={8}
          progressColor="#262ebc"
          railColor="#e5e7eb"
        >
          
            {progress}%
          
        </CircleProgress>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setProgress(Math.max(0, progress - 10))}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              backgroundColor: '#f9fafb',
              cursor: 'pointer'
            }}
          >
            -10%
          </button>
          <button 
            onClick={() => setProgress(Math.min(100, progress + 10))}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              backgroundColor: '#f9fafb',
              cursor: 'pointer'
            }}
          >
            +10%
          </button>
          <button 
            onClick={() => setProgress(0)}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              backgroundColor: '#f9fafb',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  },
};

// Showcase different sizes
export const SizeShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <CircleProgress progress={75} size={20} strokeWidth={2} />
      <CircleProgress progress={75} size={32} strokeWidth={3} />
      <CircleProgress progress={75} size={48} strokeWidth={4} />
      <CircleProgress progress={75} size={64} strokeWidth={6} />
      <CircleProgress progress={75} size={80} strokeWidth={8} />
    </div>
  ),
};

// Showcase different progress values
export const ProgressShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <CircleProgress progress={0} size={48} strokeWidth={4} />
      <CircleProgress progress={25} size={48} strokeWidth={4} />
      <CircleProgress progress={50} size={48} strokeWidth={4} />
      <CircleProgress progress={75} size={48} strokeWidth={4} />
      <CircleProgress progress={100} size={48} strokeWidth={4} />
    </div>
  ),
};
