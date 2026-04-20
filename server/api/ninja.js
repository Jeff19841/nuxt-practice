// export default defineEventHandler(async (event) => {
//   //   // 抓送出api的Url
//   //   const query = getQuery(event);
//   //   const { name } = query;

//   //   // 抓送出送出的資料中的age
//   //   const { age } = await readBody(event);

//   //   return {
//   //     message: `Hello ${name},age is ${age}`,
//   //   };

//   // 若是要從api得到私鑰並取得Data
//   const { data } = await $fetch(
//     "https://api.currencyapi.com/v3/latest?apikey=cur_live_nNi8n2BOVQZoRVuoalhqKM2FAyKTh2oNKDqPcWZI",
//   );

//   return data;
// });
