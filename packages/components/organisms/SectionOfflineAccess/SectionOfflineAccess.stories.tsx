import type { Meta, StoryObj } from '@storybook/react';
import SectionOfflineAccess from './index';

const meta: Meta<typeof SectionOfflineAccess> = {
  title: 'Organisms/SectionOfflineAccess',
  component: SectionOfflineAccess,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NotDownloaded: Story = { args: { downloaded: false } };
export const Downloading: Story = {
  args: { downloaded: false, downloading: true, downloadProgress: 42 },
};
export const Downloaded: Story = { args: { downloaded: true } };
export const UpdateAvailable: Story = {
  args: {
    downloaded: true,
    updateAvailable: true,
    updateLabel: 'Update to v2.1',
    updateMessage: 'Version 2.1 is now available',
    changelog: ['New quiz questions', 'Improved audio quality'],
  },
};
