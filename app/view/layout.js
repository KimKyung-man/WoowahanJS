import { CoreView } from '../core';
import Template from './layout.hbs';

export default CoreView.extend({
  className: 'container',

  initialize() {
    CoreView.prototype.initialize.apply(this, arguments);

    this.render();
  },

  render() {
    this.$el.html(Template());
  }
});