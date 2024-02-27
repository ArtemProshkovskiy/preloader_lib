import React from 'react';
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
};

const Template = (args) => <RoundPreloader {...args} />;

export const Default = () => <Template/>;

export const Settings = (args) => <Template {...args} />;
Settings.args = {
  color: options.colors[0],
  speed: options.defaultSpeed,
  width: options.defaultWidth,
  height: options.defaultHeight,
  border: options.defaultBorder,
};
