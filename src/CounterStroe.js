import { action, computed, makeAutoObservable, observable } from "mobx";

export default class CounterStore {
  count = 1;

  constructor() {
    makeAutoObservable(this, {
      count: observable,
      isNegative: computed,
      increase: action,
      decrease: action,
    });
  }

  get isNegative() {
    return this.count < 0 ? "Yes" : "No";
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}
