import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked isBetaOpen = false;

  @action
  toggleBetaPanel() {
    this.isBetaOpen = !this.isBetaOpen;
  }
}
