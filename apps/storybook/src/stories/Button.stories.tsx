import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    onClick: () => alert('clicked'),
  },
};

export const Hover: Story = {
  args: {
    children: 'Hover Me',
    onClick: () => alert('hover'),
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Pressed: Story = {
  args: {
    children: 'Pressed',
    onClick: () => alert('pressed'),
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};
