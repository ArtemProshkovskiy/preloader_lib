import React from 'react';
<<<<<<< HEAD
import RoundPreloader from './round-preloader';
import { options } from './constants';

export default {
  title: 'LIBRARY Loaders/Default Loaders/Round Preloader',
  component: RoundPreloader,
  args: {
    color: options.colors[0],
    speed: options.defaultSpeed,
    width: options.defaultWidth,
    height: options.defaultHeight,
    border: options.defaultBorder,
    visible: options.defaultVisible,
    text: 'Loading...',
    textColor: '#000000', // New: Add default text color
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
      defaultValue: options.defaultBorder,
    },
    visible: {
      control: 'boolean',
      description: 'Whether the component is visible or not.',
      defaultValue: options.defaultVisible,
    },
    text: {
      control: 'text',
      description: 'The text to display below the preloader.',
      defaultValue: 'Loading...',
    },
    textColor: {
      control: 'color', // New: Use color control for textColor
      description: 'The color of the text below the preloader.',
      defaultValue: '#000000', // New: Add default text color value
    },
  },
=======
import RoundPreloader from "./round-preloader";
import {options} from "./constants";
import { ArgTypes } from '@storybook/blocks';

export default {
    title: 'lIBLARY Loaders/ Default Loaders/round-preloader',
    component: RoundPreloader,
    parameters: {
    docs: {
      description: {
        color: 'Another description, overriding the comments'
      }
    }
  }
>>>>>>> c1f2c0047a80e197a3c13bdf4c4d18d4f80e8d47
};

const Template = (args) => <RoundPreloader {...args} />;

<<<<<<< HEAD
export const RoundPreloaderSettings = Template.bind({});
RoundPreloaderSettings.args = {
=======
export const Default = () => <Template/>;

export const Settings = (args) => <Template {...args} />;
Settings.args = {
>>>>>>> c1f2c0047a80e197a3c13bdf4c4d18d4f80e8d47
  color: options.colors[0],
  speed: options.defaultSpeed,
  width: options.defaultWidth,
  height: options.defaultHeight,
  border: options.defaultBorder,
<<<<<<< HEAD
  visible: options.defaultVisible,
  text: 'Loading...',
  textColor: '#000000',
=======
>>>>>>> c1f2c0047a80e197a3c13bdf4c4d18d4f80e8d47
};
