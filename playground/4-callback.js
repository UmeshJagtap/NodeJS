setTimeout(() => {
  console.log('Two seconds are up');
}, 2000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});
console.log(shortNames);

// const geocode = (address, callback) => {
//   const data = {
//     latitude: 0,
//     longitude: 0,
//   };
//   return data;
// };
// const data = geocode('Philadelphia');
// console.log(data);

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    return data;
  }, 2000);
};
const data = geocode('Philadelphia');
console.log(data);
