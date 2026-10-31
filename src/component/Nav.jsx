

function Nav() {
    return (
        <div className="w-11/12 h-fit flex items-center justify-end gap-4 bg-white/95 p-4 rounded-xl mt-3 shadow">
            <ul className="
                flex
                gap-8
                text-lg
                text-gray-700
                font-medium
            ">

                <li className="hover:text-orange-500 cursor-pointer transition">
                    خانه
                </li>

                <li className="hover:text-orange-500 cursor-pointer transition">
                    محصولات
                </li>

                <li className="hover:text-orange-500 cursor-pointer transition">
                    دسته‌بندی‌ها
                </li>

                <li className="hover:text-orange-500 cursor-pointer transition">
                    خدمات
                </li>

                <li className="hover:text-orange-500 cursor-pointer transition">
                    درباره ما
                </li>

                <li className="hover:text-orange-500 cursor-pointer transition">
                    تماس
                </li>

            </ul>
        </div>
    );
}

export default Nav;