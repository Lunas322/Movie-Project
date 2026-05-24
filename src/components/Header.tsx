import { useNavigate } from "react-router-dom";
import logo from "../assets/Netflix_Logo_RGB.png";

function Header() {
  const nav = useNavigate();

  return (
    <div className="w-full h-16 bg-black text-white flex items-center justify-between px-10 sticky top-0 z-50">
      <div className="flex items-center">
        <img
          src={logo}
          className="w-36 h-20 object-contain cursor-pointer"
          onClick={() => nav("/")}
        />
      </div>
      <div className="w-10/12">
        <ul className="flex gap-8 text-[18px] font-medium items-center">
          <li
            className="cursor-pointer hover:text-red-500 transition duration-200"
            onClick={() => nav("/")}
          >
            홈
          </li>

          <li
            className="cursor-pointer hover:text-red-500 transition duration-200"
            onClick={() => nav("/popular")}
          >
            인기 영화
          </li>

          <li
            className="cursor-pointer hover:text-red-500 transition duration-200"
            onClick={() => nav("/wishlist")}
          >
            찜 목록
          </li>

          <li
            className="cursor-pointer hover:text-red-500 transition duration-200"
            onClick={() => nav("/search")}
          >
            검색
          </li>

          <li
            className="cursor-pointer hover:text-red-500 transition duration-200"
            onClick={() => nav("/recent")}
          >
            최근 본 영화
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
