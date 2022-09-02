// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
console.log('------------------');

export class Test {
  public test() {
    this.test2()
      .then((x) => {
        console.log('then 1');
      })
      .then((x) => {
        console.log('then 2');
      })
      .catch((x) => {
        console.log('catch 1');
      })
      .catch((x) => {
        console.log('catch 2');
      });
  }
  public async test2(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      //resolve('OK');
      reject('NOK');
    });
  }
}

const t = new Test();
t.test();
