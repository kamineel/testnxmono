import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BannerBarComponent } from './banner-bar.component';

export default {
  title: 'BannerBarComponent',
  component: BannerBarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BannerBarComponent>;

const Template: Story<BannerBarComponent> = (args: BannerBarComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
