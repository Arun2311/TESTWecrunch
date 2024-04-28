// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import BookMyShow from "./Component/BookMyShow"
// import TestOne from './Component/TestOne'
// import ABout from './Component/ABout'
// import ProductsComp from './Component/ProductsComp'
// import UpdateComp from './Component/UpdateComp'
// function App() {

//   return (
//     <div>
//       {/* <h1>Arun</h1> */}

//       {/* <BookMyShow  /> */}

//       {/* <ProductsComp/> */}

//       <UpdateComp/>

//     </div>
//   )
// }

// export default App

import React, { Component } from "react";
import UpdateComp from "./Component/UpdateComp";
import DetailsComp from "./Component/FuncTion/DetailsComp";
import CounterComp from "./Component/FuncTion/CounterComp";
import NameHide from "./Component/FuncTion/NameHide";
import BirthdayComp from "./Component/BirthdayComp";
import Deatailform from "./Component/FuncTion/Deatailform";
import LifeCycleFun from "./Component/FuncTion/LifeCycleFun";
import 'bootstrap/dist/css/bootstrap.min.css';
import HookForms from "./Component/HookForms";
import GroceryList from "./Component/FuncTion/GroceryList/GroceryList";

class App extends Component {
  render() {
    return (
      <div>
        {/* <DetailsComp />
        <CounterComp/> */}
{/* <BirthdayComp/> */}
        {/* <NameHide/> */}
        {/* <LifeCycleFun/> */}

        {/* <Deatailform/> */}
        {/* <HookForms/> */}

        <GroceryList/>
      </div>
    );
  }
}

export default App;
