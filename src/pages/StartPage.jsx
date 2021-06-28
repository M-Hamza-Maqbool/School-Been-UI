import React from 'react'
import DropDown from '../components/DropDown'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'

function StartPage() {
    // let propdata = {
    //     data:"Select Branches",
    //     color:"bg-red-300"
    //     }
    //     let propsdata1 = {
    //         data:"Total Branches",
    //         color:"bg-blue-200"
    //         }
    const employstyle = {
        bordertopleftradius: "40px",
        borderbottomrightradius: "40px"
      };
    return (
        <div className="">
        <div className="flex justify-between m-5 mt-16">
        <div>
          <h1 className="text-3xl"> WELCOME ADMIN ! </h1>
           <p className="text-xl"> Dashbord</p>  
        </div>
        <div>
          <div className="flex ">
            <div className="">
            <DropDown data={"Select Branches" } />
            </div>
            <div className=" ml-5">
              <button>
              <DropDown data={"Total Branches"} />
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-between m-5 mt-16">
        <div className="w-60 h-32 content-center  employ-style shadow-xl bg-yellow-200" >

        <div className="flex justify-center align-item-center items-center pt-8  ">
            <div className="bg-yellow-500 mr-2 rounded-md">
            <img className="img-fluid"  src={`${process.env.PUBLIC_URL}/assets/employee.png`}  alt="logo"/>
            </div>
            <div>
            <b> <h1 className="text-2xl  ">6778</h1></b>
             <b><p>Employee Count</p></b>
            </div>
        </div>
        </div>



        <div className="w-60 h-32  employ-style shadow-xl bg-blue-200" >

        <div className="flex justify-center align-item-center items-center pt-8  ">
            <div className="bg-blue-500 mr-2 rounded-md">
            <img className="img-fluid"  src={`${process.env.PUBLIC_URL}/assets/studentcount.png`}  alt="logo"/>
            </div>
            <div>
            <b> <h1 className="text-2xl  ">78+</h1></b>
             <b><p>Student Count</p></b>
            </div>
        </div>
        </div>



        <div className="w-60 h-32  employ-style shadow-xl bg-red-200" >

        <div className="flex justify-center align-item-center items-center pt-8  ">
            <div className="bg-red-500 mr-2 rounded-md">
            <img className="img-fluid"  src={`${process.env.PUBLIC_URL}/assets/calender.png`}  alt="logo"/>
            </div>
            <div>
            <b> <h1 className="text-2xl  ">08</h1></b>
             <b><p>Today</p></b>
            </div>
        </div>
        </div>



        <div className="w-60 h-32  employ-style shadow-xl bg-purple-200 bg-opacity-100" >

        <div className="flex justify-center align-item-center items-center pt-8  ">
            <div className="bg-purple-500 bg-opacity-100 mr-2 rounded-md">
            <img className="img-fluid"  src={`${process.env.PUBLIC_URL}/assets/employee.png`}  alt="logo"/>
            </div>
            <div>
            <b> <h1 className="text-2xl  ">58+</h1></b>
             <b><p>Present Teacher</p></b>
            </div>
        </div>
        </div>
      </div>
      
      <div className="flex justify-center m-5 mt-16 shadow-2xl p-6 mb-6">
        <div className="w-1/2 h-80 bg-white border-2 shadow-xl m-4">
          <div className="flex">
          <div> Present Student</div>
          <div>            <DropDown data={"Select Branches" } />          </div>
          </div>

        <LineChart />
        </div>
        <div className="w-1/2 h-80 bg-white border-2 shadow-xl m-4">
        <BarChart />

        </div>
      </div>
        </div>
    )
}

export default StartPage

