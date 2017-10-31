import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: saga-app', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<Layout />`);
    let text = this.containerElement.querySelector('h1').textContent;
    assert.equal(text, 'redux saga run 0');
    this.containerElement.querySelector('button').click();
    let done = assert.async();
    setTimeout(() => {
      text = this.containerElement.querySelector('h1').textContent;
      assert.equal(text, 'redux saga run 1');
      done();
    }, 1111);
  });
});
