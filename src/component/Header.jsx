import bgImage from "../assets/bg.png";
import Nav from "./Nav.jsx";
import Pawly from "./Pawly.jsx";

function Header() {
    return (
        <div
            className="h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center "
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <Nav/>

               <div className="w-full flex h-full">
                   <div className="w-2/4 flex gap-4  flex-col items-center text-center justify-center text-2xl">
                       <h1 className="text-6xl font-bold text-gray-800">
                           پاولی 🐾
                       </h1>

                       <h2 className="text-3xl font-semibold text-gray-700">
                           همه چیز برای دوست پشمالوی تو
                       </h2>

                       <p className="text-lg text-gray-500 max-w-md">
                           بهترین محصولات برای حیوان خانگی شما،
                           از غذا تا اسباب‌بازی و لوازم مراقبتی.
                       </p>

                       <div className="flex gap-4">

                           <button
                               className="
                            bg-orange-500
                            hover:bg-orange-600
                            text-white
                            px-8
                            py-3
                            rounded-full
                            text-lg
                            shadow-lg
                            transition
                            "
                           >
                               خرید محصولات
                           </button>

                           <button
                               className="
                            bg-white
                            border
                            border-orange-400
                            text-orange-500
                            px-8
                            py-3
                            rounded-full
                            text-lg
                            hover:bg-orange-50
                            transition
                            "
                           >
                               دسته بندی
                           </button>


                       </div>
                   </div>

                     <Pawly/>

               </div>

        </div>
    );
}

export default Header;