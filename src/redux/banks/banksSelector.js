import { createSelector } from 'reselect';

export const getAllBanks = store => store.banks.entities;

export const getAmountBicycles = store => getAllBanks(store).length;

// export const getAmountAvailableBike = store =>
//   getAllBanks(store).reduce(
//     (total, bike) => (bike.status === 'available' ? total + 1 : total),
//     0,
//   );

// export const getAmountBookedBike = createSelector([getAllBanks], banks => {
//   return banks.reduce(
//     (total, bike) => (bike.status === 'busy' ? total + 1 : total),
//     0,
//   );
// });

// export const getAverageBikeCost = createSelector(
//   [getAllBanks, getAmountBicycles],
//   (banks, amountBicycles) => {
//     return (
//       banks.reduce((total, bike) => total + Number(bike.price), 0) /
//       amountBicycles
//     );
//   },
// );
