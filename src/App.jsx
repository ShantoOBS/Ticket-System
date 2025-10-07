import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer';
import Customer from './Components/Customer';
import { ToastContainer, toast } from 'react-toastify';

import { use, useState } from 'react'
import React, { Suspense } from "react";

const Feact = async () => {

  const res = await fetch('/Data.json');
  const json = await res.json();
  return json;
}

const GetPromise = Feact();

function App() {

  const [DataBase, DataBaseSetup] = useState(use(GetPromise));
  const [StatusDataBase, StatusDataBaseSetup] = useState([]);
  const [ComDataBase, ComDataBaseSetup] = useState([]);

  const ClickOnCards = (id) => {

    toast("In Progress!");
    const temp = DataBase.find(ele => ele.id == id);
    const newarray = DataBase.filter(ele => ele.id != id);
    DataBaseSetup([...newarray]);
    StatusDataBaseSetup([...StatusDataBase, temp]);
  }

  const ClickOnTask = (id) => {


    toast("Completed!");
    const temp = StatusDataBase.find(ele => ele.id == id);
    const newarray = StatusDataBase.filter(ele => ele.id != id);
    StatusDataBaseSetup([...newarray]);
    ComDataBaseSetup([...ComDataBase, temp]);

  }


  return (
    <div className='bg-[#F5F5F5]'>

      <Navbar></Navbar>
      <Banner StatusDataBase={StatusDataBase} ComDataBase={ComDataBase} ></Banner>

      <Suspense fallback={<p>Loading tickets...</p>}>
        <Customer DataBase={DataBase} ClickOnCards={ClickOnCards} StatusDataBase={StatusDataBase}
          ComDataBase={ComDataBase} ClickOnTask={ClickOnTask}></Customer>

      </Suspense>

      <Footer></Footer>

      <ToastContainer />

    </div>


  )
}

export default App
