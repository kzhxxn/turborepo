import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '기본 버튼',
    onClick: () => alert('clicked'),
  },
};

export const Hover: Story = {
  args: {
    children: '마우스 오버',
    className: 'hover:bg-neutral-800 ',
  },
};

export const Pressed: Story = {
  args: {
    children: '눌렸을 때',
    className: 'active:bg-neutral-800',
  },
};
