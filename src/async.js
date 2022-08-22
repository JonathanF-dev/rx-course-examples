import { add } from './helpers';
import { Observable } from 'rxjs';

add.li('Line 4')

async function runPromis() {
    add.li('Line 7')
    const p = new Promise(
        (resolve, reject) =>{
            setTimeout(
                () =>{
                    resolve('We are complete');
                }, 1000
            )
        }
        
    );
    const message = await p;
    add.li('Line 19')
}

runPromis()

add.li('Line 21')