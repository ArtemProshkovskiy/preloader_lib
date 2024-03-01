import React from 'react';
import CirclesPreLoader from './CirclesPreLoader';
import { options } from './constants';

export default {
  title: 'LIBRARY Loaders/Default Loaders/CirclesPreLoader',
  component: CirclesPreLoader,
  args: {
    color: options.colors[0],
    speed: options.defaultSpeed,
    width: options.defaultWidth,
    height: options.defaultHeight,
    border: options.defaultBorder,
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'The color of the preloader.',
                defaultValue: options.colors[0],

    },
    width: {
      control: 'number',
      description: 'The width of the preloader.',
                defaultValue: options.defaultWidth,

    },
    height: {
      control: 'number',
      description: 'The height of the preloader.',
      defaultValue: options.defaultHeight,
    },
    speed: {
      control: 'number',
      description: 'The speed of the preloader animation.',
      defaultValue: options.defaultSpeed,
    },
    border: {
      control: 'number',
      description: 'The border style of the preloader.',
      defaultValue: options.defaultBorder
    },
     visible: {
      control: 'boolean',
      description: 'Whether the component is visible or not.',
      defaultValue: options.defaultBorder
    },
  },
};

const Template = (args) => <CirclesPreLoader {...args} />;

export const RoundPreloaderSettings = Template.bind({});
RoundPreloaderSettings.args = {
  color: options.colors[0],
  speed: options.defaultSpeed,
  width: options.defaultWidth,
  height: options.defaultHeight,
  border: options.defaultBorder,
  visible: options.defaultVisible,
};
