import { BehaviorSubject, Observable } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators"

export abstract class BaseStateService<T> {
private state$: BehaviorSubject<T>;

constructor(initialState: T) {
  this.state$ = new BehaviorSubject<T>(initialState);
 }

 protected get state(): T {
  return this.state$.getValue();
}

protected setState(newState: Partial<T>) {
  this.state$.next({
    ...this.state,
    ...newState
  });
}

 public select<K>(mapFn: (state: T) => K): Observable<K> {
  return this.state$.asObservable().pipe(
    map((state: T) => mapFn(state)),
    distinctUntilChanged()
  );
 }

}
