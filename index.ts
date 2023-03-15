import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer = new Observable<number>((observer) => {
  let counter: number = 0;

  console.log('Observer running');

  const eventIncrement = () => {
    counter++;
    console.log('eventIncrement emitting');
    observer.next(counter);

    if (counter === 5) {
      observer.error('Counter is reached the limit!');
    }
  };

  const interval = setInterval(eventIncrement, 500);

  return () => {
    clearInterval(interval);
    console.log('Observer completed');
  };
}).pipe(
  map((e) => e + 2),
  filter((e) => e % 2 === 0)
);

const subject = new Subject();
observer.subscribe(subject);

const subscription = subject.subscribe(
  (res) => {
    console.log('Observable emits: ', res);
  },
  (err) => console.log('Observable error: ', err)
);

const subscription2 = subject.subscribe(
  (res) => {
    console.log('Observable emits: ', res);
  },
  (err) => console.log('Observable error: ', err)
);
