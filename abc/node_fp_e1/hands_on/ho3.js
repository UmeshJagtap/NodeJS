//
// Working with Timer
//

const tryMe = () => {
  console.log('tryMe');

  async function run() {
    await setInterval(2000, console.log('setInterval'));
  }

  try {
    setTimeout(5000, console.log('setTimeout'));
  } catch {
    console.error;
  }
};

tryMe();
