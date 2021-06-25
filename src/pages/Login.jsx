import { Link } from 'react-router-dom';
import asserrt_pc from '../../src/assert/images/asserst_pc.png'
function App() {
  
  console.log(asserrt_pc);
  return (
          
    <section className="min-h-screen flex items-stretch text-white ">


<div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{backgroundColor: '#FFFFFF'}}>
      <div className="absolute lg:hidden z-10 inset-0  bg-no-repeat bg-cover items-center" style={{backgroundImage: 'url(' +asserrt_pc+ ')', height:'100vh' }}>
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
      </div>
      <div className="w-full z-20">
        <h1 className="tracking-widest   "  style={{color: '#B7B7B7', font: 'normal normal normal 32px/44px Trajan Pro'}}  >   Welcome To   </h1>
        <div className="space-x-2">
          <span className="w-10 items-center justify-center inline-flex font-bold text-lg Tekton Pro " 
        
        style={{color: ' #16B798',
        font: 'normal normal bold 78px/110px Tekton Pro '
        }}> schoolbeen   </span>
        </div>
        <p className="text-gray-100" 
           style={{
font: 'normal normal normal 19px/25px Roboto',
color: '#DBD7D7',
opacity:'1' ,
          }}>
         Login to get in the moment updates on the things <br/>that intrest you
        </p>
        <form action className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto my-8	 ">
          <div className="pb-2 pt-4">
            <input type="email" name="email" id="email" placeholder="UserName" className="block w-full p-4 text-lg rounded-full bg-white border-2" />
          </div>
          <div className="pb-2 pt-4">
            <input className="block w-full p-4 text-lg rounded-full bg-white border-2"  type="password" name="password" id="password" placeholder="Password" />
          </div>


               <div class="my-4 flex items-left" style= {{
                 float:'left'
               }}>
                <input class="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
                 <label for="userRemember" className="text-gray-400 hover:underline hover:text-gray-10"> Remember me</label>
                 </div>
               <div className="text-right text-gray-400 hover:underline hover:text-gray-100 my-4 ">
                 <a href="#">Forgot your password?</a>
                </div>

              

       
          <Link to="/login">

          <div className="px-4 pb-4 pt-4">
            <button className="uppercase block w-full p-4 text-lg rounded-full bg-green-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
          </div>
          </Link>
          <h1 className="font-serif text-green-200 text-lg  pt-8">  Didn't have account ? <b> Create</b>   </h1>

        </form>
      </div>
      </div>
    <div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center" style={{backgroundImage: 'url(' +asserrt_pc +')',
  // background:'transparent linear-gradient(180deg, #16B798 0%, #0B5C4C 100%) 0% 0% '
  opacity: '0.65'
  }}>
      <div className="absolute bg-black opacity-60 inset-0 z-0" />
      <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-center tracking-wide" 
        style={{
          font: 'normal normal bold 78px/110px Tekton Pro'
        }}>Schoolbeen</h1>
        <p className="my-4"  style={{
            font: 'normal normal 300 24px/29px Calibri'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      
       </div>
      
  </section>
  );
}

export default App;