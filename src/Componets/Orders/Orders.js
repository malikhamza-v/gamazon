// import React, { useEffect, useState } from "react";
// import { useStateValue } from "../../Context/StateContext";
// import { db } from "../../firebase";
// import "./orders.css";

// function Orders() {
//   const [{ cart, user }, dispatch] = useStateValue();
//   const [Order, setOrder] = useState([]);

//   useEffect(() => {
//     if (user) {
//       db.collection("users")
//         .doc(user?.uid)
//         .collection("orders")
//         .orderBy("created", "disc")
//         .onSnapshot((snapshot) => {
//           setOrder(
//             snapshot.docs.map((doc) => ({
//               id: doc.id,
//               data: doc.data(),
//             }))
//           );
//         });
//     } else {
//       setOrder([]);
//     }
//   }, []);
//   return (
//     <div className="orders">
//       <h1>Your Orders</h1>
//       <div className="orders__order">
//         {Order?.map((order) => (
//           <Order order={order} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Orders;
