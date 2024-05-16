// import React, { memo } from 'react';
// import type { Application } from '../type';
// import ApplicationUno from './ApplicationUno';

// type Props = {
//   applications: Application[];
// };

// function Applications({ applications }: Props): JSX.Element {
//   const applicationsOpen = applications.filter((el) => el.status === 'Просчет');
//   // const applicationsClose = applications.filter((el) => el.status === 'close');

//   return applicationsOpen.length > 0 ? (
//     <table>
//       <thead>
//         <tr>
//           <th>№</th>
//           <th>Имя пользователя</th>
//           <th>Телефон</th>
//           <th>Почта</th>
//           <th>Фото</th>
//           <th>Описание</th>
//           <th>Закрыть заказ</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* {applicationsOpen.map((el, i) => (
//           <ApplicationUno application={el} i={i} key={el.id} />
//         ))} */}
//       </tbody>
//     </table>
//   ) : (
//     <div>Нет новых заказов</div>
//   );
// }

// export default memo(Applications);
