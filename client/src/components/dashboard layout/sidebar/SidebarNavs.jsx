import { Link, useLocation } from "react-router-dom";
import { TbSquareToggle } from "react-icons/tb";



const navsList = [
  { name: "Home", path: "/",  },
  { name: "Judges Gpt", path: "/judges-gpt",  },
  { name: "Organizers Gpt", path: "/org-gpt",  },


];

export const SidebarNavs = ({ chats, onSelectChat }) => {
  const path = useLocation().pathname;
  return (
    <>
      <div className="flex justify-end text-2xl mt-2 text-text-color  cursor-pointer">
        <TbSquareToggle />

      </div>
      <ul className=' font-sm text-text-color mt-20 '>
        {navsList.map((currElm, index) => {
          return (
            <li key={index}>
              <Link
                to={currElm.path}
                class={`${path === currElm.path && "bg-green"
                  } ${currElm.class} font-medium flex mb-1 text-sm  items-center px-2 py-[7px]  rounded-lg transition ease-out duration-700   hover:bg-hover-bg hover:text-blue-color  group`}
              >
                {currElm.img && <img className='flex-shrink-0 w-7 h-7 bg-white p-1 rounded-full border  transition duration-75 text-sm  group-hover:text-blue-color dark:group-hover:text-white' src={currElm.img} alt="logo" />}
                <span className='flex-1 ms-2 whitespace-nowrap'>{currElm.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
      <ul className="text-sm mt-8">
        {chats?.map((currElm, index) => {
          return (
            <li key={index}>
              <Link
                to={currElm.path}
                class={`${path === currElm.path && "active"
                  } ${currElm.class} flex mb-1 text-sm  items-center px-2 py-1  rounded-lg transition ease-out duration-700   hover:bg-hover-bg hover:text-blue-color  group`}
              >
                <span onClick={() => onSelectChat(currElm.id)} className='flex-1 ms-2 whitespace-nowrap'>{currElm.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
};


