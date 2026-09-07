import type { Meta, StoryObj } from '@storybook/react';
import SectionContent from './index';

const meta: Meta<typeof SectionContent> = {
  title: 'Organisms/SectionContent',
  component: SectionContent,
  parameters: { layout: 'padded' },
  args: {
    blocks: [
      { type: 'title', text: 'Introduction' },
      { type: 'text', text: 'The collision regulations apply to all vessels at sea.' },
      { type: 'image', source: { uri: 'https://picsum.photos/seed/section/640/480' }, caption: 'Rule of the road' },
      { type: 'highlight', title: 'Remember', body: 'Keep a proper lookout at all times.' },
      {
        type: 'table',
        columns: [
          { key: 'signal', label: 'Signal' },
          { key: 'meaning', label: 'Meaning', align: 'right' },
        ],
        data: [
          { id: '1', signal: '1 short blast', meaning: 'Altering to starboard' },
          { id: '2', signal: '2 short blasts', meaning: 'Altering to port' },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TextOnly: Story = {
  args: {
    blocks: [
      { type: 'title', text: 'Overview' },
      { type: 'text', text: 'Plain text body block.' },
    ],
  },
};
