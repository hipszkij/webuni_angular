import { filter, map, Observable, Subject, tap } from 'rxjs';

console.clear();

const o1 = new Observable<number>((observer) => {
  let counter = 0;

  const eventClickListener = () => {
    counter++;
    console.log('Event emitting');
    observer.next(counter);
  };

  document
    .querySelector('#event-square')
    .addEventListener('click', eventClickListener);

  const errorClickListener = () => {
    console.log('Error emitting');
    observer.error('Hiba történt');
  };

  document
    .querySelector('#error')
    .addEventListener('click', errorClickListener);

  const completeClickListener = () => {
    console.log('Completed emitting');
    observer.complete();
  };

  document
    .querySelector('#complete')
    .addEventListener('click', completeClickListener);

  return () => {
    document
      .querySelector('#event-square')
      .removeEventListener('click', eventClickListener);

    document
      .querySelector('#error')
      .removeEventListener('click', errorClickListener);

    document
      .querySelector('#complete')
      .removeEventListener('click', errorClickListener);
  };
}).pipe(
  tap((e) => console.log('Tap into observable:', e)),
  map((e) => e + 1)
);

const s = new Subject();
o1.subscribe(s);

const subscription = s.pipe(filter((e: number) => e % 2 === 0)).subscribe(
  (res) => {
    console.log('Observable emits', res);

    if (res === 5) {
      subscription.unsubscribe();
    }
  },
  (err) => console.log('Observable error', err),
  () => console.log('completed')
);

const subscription2 = s.subscribe(
  (res) => {
    console.log('Observable emits', res);

    if (res === 5) {
      subscription.unsubscribe();
    }
  },
  (err) => console.log('Observable error', err),
  () => console.log('completed')
);
