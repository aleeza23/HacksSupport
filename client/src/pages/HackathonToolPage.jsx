import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../components/Header';
import { FaUpload } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import { TbMessageChatbot } from 'react-icons/tb';
import banner from '../assets/f301d61f-937f-4031-8c4a-529b1c13b93c.webp'
import Markdown from 'markdown-to-jsx';
import { RiWechat2Line } from "react-icons/ri";


const HackathonToolPage = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [file, setFile] = useState(null);
    // const [schedualFile, setschedualFile] = useState(null);
    // const [schedualLoading, setschedualLoading] = useState(false);
    // const [schedualRes, setschedualRes] = useState([]);
    // const [chatbotAns, setchatbotAns] = useState("");
    const [chatbotQuery, setchatbotQuery] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [chatbotLoading, setchatbotLoading] = useState(false);






    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleQuerySubmit = async () => {
        setLoading(true);

        if (query === "") {
            setLoading(false);
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('idea', query)

        try {
            const response = await axios.post("http://127.0.0.1:5000/judge", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setResponse(response.data.result);
            // console.log(response);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    // console.log(file);

    // SCHEDUAL FILE UPLOAD API
    // const handleFileSubmit = async () => {
    //     setschedualLoading(true);

    //     if (schedualFile === null) {
    //         setschedualLoading(false);
    //         console.error('No file selected');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('file', schedualFile);

    //     try {
    //         const response = await axios.post("http://127.0.0.1:5000/upload_schedule", formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });

    //         // Check if the data needs parsing
    //         let scheduleData = response.data.schedule;

    //         // Parse the data if it's a JSON string
    //         if (typeof scheduleData === 'string') {
    //             try {
    //                 scheduleData = JSON.parse(scheduleData);
    //             } catch (parseError) {
    //                 console.error('Error parsing JSON:', parseError);
    //                 scheduleData = [];
    //             }
    //         }

    //         // Ensure scheduleData is an array
    //         if (Array.isArray(scheduleData)) {
    //             setschedualRes(scheduleData);
    //         } else {
    //             console.error('Parsed data is not an array:', scheduleData);
    //             setschedualRes([]);
    //         }

    //         console.log(scheduleData);
    //     } catch (err) {
    //         console.error('Error uploading file:', err.response ? err.response.data : err.message);
    //     } finally {
    //         setschedualLoading(false);
    //     }
    // };

    // console.log(schedualFile);

    // CHATBOT API CALL
    const handleChatbot = async () => {
        if (chatbotQuery.trim() !== '') {
            // console.log("prompt -> ", prompt);
            setChatHistory([...chatHistory, chatbotQuery]);
            // console.log("corpus id : ", corpusID);
            const formData = new FormData();
            formData.append('query', chatbotQuery)
            setchatbotQuery('');

            setchatbotLoading(true);
            // API Calling and getting response code
            try {
                // Make a POST request using axios                             
                const response = await axios.post('http://127.0.0.1:5000/chatbot', formData);
                console.log("query response -> ", response.data.response);

                setChatHistory(prevPromptsArr => [...prevPromptsArr, response.data.response]);
                setchatbotLoading(false);
            } catch (error) {
                // Handle errors
                console.error("Error fetching data: ", error);
                setchatbotLoading(false);
            }
        }
    };
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Navigation */}

            {/* Main Content */}
            <div className="relative">
                <Header />
                <div className="relative text-center w-full">
                    <img src={banner} alt="Hackathon Tools Image" className="mx-auto h-[70vh] w-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold px-4">
                            Advanced tools to enhance your hackathon <br /> experience and drive innovation.
                        </h1>
                    </div>
                </div>
            </div>


            <div className="max-w-3xl mx-auto p-5">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Hackathon Tool</h2>
                    <p>Introducing the dynamic duo of hackathon automation: <b>JudgeGPT</b> and <b>OrganizerGPT</b>!

                        JudgeGPT and OrganizerGPT are AI-powered tools that automate hackathon processes, freeing up judges and organizers to focus on what matters most - innovation and success. </p>
                </div>

                <div className="mb-10">


                    <h2 className="text-2xl font-bold text-gray-800 mt-3 mb-2">JudgeGPT</h2>
                    <p className='mb-5'>To evaluate a project, simply upload the presentation and idea, and JudgeGPT will analyze it, providing a score (on a scale of 1-10) along with constructive feedback, highlighting both strengths and weaknesses. </p>
                    <label htmlFor="idea" className="block font-semibold text-black mb-2">Hackathon Idea</label>
                    <div className=' py-6 '>
                        <div className=" mx-auto bg-[#27182F] p-4 rounded-lg shadow-lg">
                            <textarea
                                className="w-full p-3 border border-gray-700 rounded mb-2  text-black placeholder-gray-500 focus:outline-none focus:border-green-500"
                                placeholder="Enter your idea"
                                value={query}
                                onChange={handleQueryChange}
                            />
                            <div className=" mx-auto  bg-[#27182F] py-1 rounded-lg shadow-lg">
                                <div className="flex items-center  p-2 bg-[#fff] rounded-lg">
                                    <label className="cursor-pointer flex w-full items-center bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
                                        <FaUpload className="mr-2" />
                                        <span>Upload File (Accepted formats: .py, .zip, .txt )</span>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            accept=".py, .zip, .txt"
                                        />
                                    </label>

                                </div>
                            </div>
                            <button
                                className="w-full bg-green-500 mt-4 text-white outline outline-1 px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                                onClick={handleQuerySubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    {loading ? <div className="flex items-start gap-3 mt-3">
                        <button className="text-white bg-[#27182F] rounded-full p-2">
                            <TbMessageChatbot
                                className=""
                                size={25} // Adjust size as needed
                            />
                        </button>
                        <ThreeDots
                            visible={true}
                            height="30"
                            width="30"
                            color="black"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> </div> : !loading && response && <div className="flex items-start gap-3 mt-3">
                            <button className="text-white bg-[#73cdf0] rounded-full p-2">
                                <TbMessageChatbot
                                    className=""
                                    size={25} // Adjust size as needed
                                />
                            </button>
                            <Markdown>{response}</Markdown> </div>}

                </div>
                {/* <hr /> */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mt-5 mb-2">HostGPT</h2>
                    <p>With HostGPT, you'll have access to expert advice on every aspect of hackathon planning, from "How do I find the right mentors?" to "What's the best way to allocate resources?" - just ask us anything! Our AI-powered chatbot will provide you with actionable tips, resources, and insights to ensure your event is a success. Ask us about venue selection, participant engagement, sponsorship strategies, and more!</p>
                </div>

                {/* <div className="mb-10">
                    <label htmlFor="idea" className="block font-semibold text-black mb-2">Upload Schedule</label>

                    <div className=" py-6 ">
                        <div className=" mx-auto  bg-[#27182F] px-4 py-6 rounded-lg shadow-lg">
                            <div className="flex items-center  p-2 bg-[#fff] rounded-lg">
                                <label className="cursor-pointer flex w-full items-center bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200">
                                    <FaUpload className="mr-2" />
                                    <span>Upload File (Accepted formats: .csv, .xlsx)</span>
                                    <input
                                        type="file"
                                        onChange={(e) => setschedualFile(e.target.files[0])}
                                        className="hidden"
                                        accept='.csv , .xlsx'

                                    />
                                </label>
                                <button
                                    className="ml-4  text-black px-4 py-2 rounded-lg  transition duration-200 border-2 border-[#27182F]"
                                    onClick={handleFileSubmit}
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                    {schedualLoading ? <div className="flex items-start gap-3 mt-3">
                        <button className="text-white bg-[#27182F] rounded-full p-2">
                            <TbMessageChatbot
                                className=""
                                size={25} // Adjust size as needed
                            />
                        </button>
                        <ThreeDots
                            visible={true}
                            height="30"
                            width="30"
                            color="black"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> </div> : !schedualLoading && schedualRes.length > 0 && <div className="flex items-start gap-3 mt-3">
                            <button className="text-white bg-[#73cdf0] rounded-full p-2">
                                <TbMessageChatbot
                                    className=""
                                    size={25} // Adjust size as needed
                                />
                            </button>
                            <div className=" overflow-x-auto w-full">
                                {schedualRes.length > 0 && (
                                    <table className="w-full divide-y divide-gray-200">
                                        <thead className="bg-[#27182F] text-white">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Text</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {schedualRes.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.text}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>}
                </div> */}

                {/* chatbot */}
                <label htmlFor="idea" className="block font-semibold text-black mb-2">Query Chatbot</label>

                <div className=' py-6 '>
                    <div className=" mx-auto bg-[#27182F] p-4 rounded-lg shadow-lg">
                        <textarea
                            className="w-full p-3 border border-gray-700 rounded mb-2  text-black placeholder-gray-500 focus:outline-none focus:border-green-500"
                            placeholder="Enter your idea"
                            value={chatbotQuery}
                            onChange={(e) => setchatbotQuery(e.target.value)}
                        />

                        <button
                            className="w-full bg-green-500 mt-2 text-white outline outline-1 px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                            onClick={handleChatbot}
                        >
                            Submit
                        </button>
                    </div>
                </div>

                {chatHistory.map((prom, index) => (
                    <div key={index}>
                        {index % 2 === 0 ?
                            <div className="flex  items-start gap-3 mt-3">
                                <button className="text-white bg-[#27182F] rounded-full p-2">
                                    <RiWechat2Line
                                        className=""
                                        size={25} // Adjust size as needed
                                    />
                                </button>
                                <p className='mt-[2px]'>{prom}</p> </div>
                            :
                            <div className="flex items-start gap-3   mt-3">
                                <button className="text-white bg-[#73cdf0] rounded-full p-2">
                                    <TbMessageChatbot
                                        className=""
                                        size={25} // Adjust size as needed
                                    />
                                </button>
                                <Markdown>{prom}</Markdown> </div>
                        }
                    </div>
                ))}
                {chatbotLoading && (
                    <div className="flex items-start gap-3 mb-5 mt-3">
                        <button className="text-white bg-[#73cdf0] rounded-full p-2">
                            <TbMessageChatbot size={25} />
                        </button>
                        <ThreeDots
                            visible={true}
                            height="30"
                            width="30"
                            color="black"
                            radius="9"
                            ariaLabel="three-dots-loading"
                        />
                    </div>
                )}
                <hr className='mt-5' />
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mt-5">More Tools</h2>
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">ParticipantGpt </h2>
                        <p>We're building ParticipantGPT, a tool that will help hackathon participants generate ideas, validate projects, and connect with team members. It'll also offer guidance on project development and pitch preparation. Our goal is to make ParticipantGPT a valuable resource for anyone looking to make the most of their hackathon experience. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HackathonToolPage;

