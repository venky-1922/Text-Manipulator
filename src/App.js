import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import TextForm from "./components/textform";

// let user = {
//   name: "venky",
//   image:
//     "https://media.licdn.com/dms/image/D5603AQH-2TgV68lhIw/profile-displayphoto-shrink_800_800/0/1644667098402?e=2147483647&v=beta&t=fevDVy4V9R0Gi8RzNtquXPHHOvJR0-yHT4taREMt0HU",
//   imageSize: 100,
//   radius: 50,
// };
// const ShopList = () => {
//   const products = [
//     { title: "apple", fruit: true, id: 1 },
//     { title: "mango", fruit: true, id: 2 },
//     { title: "chocolate", fruit: false, id: 1 },
//   ];
//   const listItems = products.map((product) => (
//     <li
//       key={products.id}
//       style={{
//         color: product.fruit ? 'red' : 'green',
//       }}
//     >
//       {product.title}
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// };

function App() {
  return (
    <div classNameName="blank">
      <Navbar  title = "VENKY" home="HOME"></Navbar>
      <TextForm />
      {/* <img
        src={user.image}
        alt={"photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.radius,
        }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum labore
        optio ad suscipit molestias consequatur soluta tenetur veniam,
        necessitatibus ipsum animi, deserunt deleniti non quo maiores laborum
        minus architecto sed.
      </p>
      <ShopList /> */}
    </div>
  );
}

export default App;
