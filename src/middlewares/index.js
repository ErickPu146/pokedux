export const logger = (store) => (next) => (action) => {
  console.log("🚀 ~ file: index.js:2 ~ logger ~ action:", action);
  next(action);
};

// export const featuring = (store) => (next) => (actionInfo) => {
//   const featured = [{ name: "erick" }, ...actionInfo.action.payload];
//   const updateActionInfo = {
//     ...actionInfo,
//     action: { ...actionInfo.action, payload: featured },
//   };
//   next(updateActionInfo);
// };

