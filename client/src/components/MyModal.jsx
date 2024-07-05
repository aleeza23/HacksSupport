import { TbMessageChatbot } from "react-icons/tb";
export const MyModal = ({ setmodalopen, children }) => {

    return <>

        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md">
                <div className="relative bg-secandory-color rounded-lg shadow">
                    <button
                        type="button"
                        className="absolute top-3 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                        onClick={() => setmodalopen(false)}
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 ">
                        <div className="flex items-start gap-3 mt-3">
                            <button className="text-white bg-green rounded-full p-2">
                                <TbMessageChatbot
                                    className=""
                                    size={25} // Adjust size as needed
                                />
                            </button>

                          {children}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </>
};
