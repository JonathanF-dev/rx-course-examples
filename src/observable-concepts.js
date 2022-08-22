import { add } from './helpers'
import { Observable } from 'rxjs';


const o = new Observable(
    (observer) => {
        setInterval(
            () => {
                observer.next('Observable every second');
            }, 500
        )

    }
);

const p = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                resolve('Promise');
            }, 500
        )
    }
);


//Promise
p.then(
    (message) => {
        add.li(message)
    }
)

//Observable subscribe(next, error, complete)
const subscribtion = o.subscribe(
{
    next : (message) =>{
        add.li(message)
    },
    error : (error) => console.error(error),
    complete: () => add.li('This Observable is complete')
}
)

setTimeout(
    () =>{
        subscribtion.unsubscribe()
    }, 3000
)
