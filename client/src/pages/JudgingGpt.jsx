import { useState } from "react";
import { DashboardLayout } from '../components/dashboard layout/DashboardLayout'
import { Sidebar } from '../components/dashboard layout/sidebar/Sidebar'
import { MobileNavs } from '../components/dashboard layout/sidebar/MobileNavs'
import { Content } from "../components/dashboard layout/content/Content";
import { IoMdCloudUpload } from "react-icons/io";
import { MainContainer } from "../components/MainContainer";
import { MyModal } from "../components/MyModal";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


export const JudgingGpt = () => {
    const [open, setopen] = useState(false);
    const [response, setresponse] = useState("");
    const [file, setfile] = useState(null);
    const [query, setquery] = useState("");

    const [loading, setloading] = useState(false);
    const [modalopen, setmodalopen] = useState(false);


    const handleFileChange = (e) => {
        setfile(e.target.files[0]);
    };

    const handleResponse = async () => {
        setloading(true);
        setmodalopen(true)

        if (query === "") {
            setloading(false);
            setmodalopen(false)
            return;
        }


        try {
            const response = await axios.post("http://127.0.0.1:5000/judge", { idea: query }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setresponse(response.data.result);
            setquery("")
        } catch (err) {
            console.error(err);
        } finally {
            setloading(false);
        }
    };



    return <>
        <DashboardLayout open={open} setopen={setopen}>
            {/* sidebar */}
            {open && <MobileNavs open={open} />}

            <Sidebar open={open} />

            {/* content box */}
            <Content>
                {/* query section */}
                <MainContainer>
                    <div className=" mt-20 rounded  mx-auto ">
                        <h1 className="font-bold text-2xl mb-3">📝 Submit Your Hackathon Project</h1>
                        <p><b><i>Welcome to JudgeGPT!</i></b> Please submit your project for evaluation by providing a brief description and uploading relevant code files. Use the textbox below to describe your project, including key features, the problem it solves, and any other important details.Additionally, upload the necessary code files to support your submission for a comprehensive review.</p>

                        <div className=" max-w-md mx-auto p-6 bg-primary-color rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label htmlFor="idea" className="block font-semibold text-white mb-2">Hackathon Idea</label>
                                <textarea
                                    onChange={(e) => setquery(e.target.value)}
                                    value={query}
                                    name="idea"
                                    id="idea"
                                    placeholder="Write about your hackathon idea for judgment..."
                                    className="p-3 w-full  bg-secandory-color outline outline-green-300 outline-1 text-white rounded-md shadow-sm "
                                ></textarea>
                            </div>

                            <div className=" items-center mt-6">
                                <input type="file" accept=".txt,.zip,.py" id="upload" hidden onChange={handleFileChange} />
                                <label htmlFor="upload" className="flex flex-col items-center p-4 border-2 border-dashed border-green-300 bg-secandory-color rounded-md cursor-pointer hover:bg-hover-bg transition-colors">
                                    <IoMdCloudUpload className="text-4xl mb-2 text-white" />
                                    <h4 className="text-md font-semibold text-white">Click to upload code file</h4>
                                </label>
                                <small className="text-gray-400 mt-2">* Acceptable formats: .txt, .zip, .py</small>
                            </div>

                            <div className="flex justify-end mt-2">
                                <button onClick={handleResponse} className="bg-secondary-color outline outline-1 text-green-300 px-4 py-2 rounded-md hover:bg-hover-bg transition-colors">
                                    Submit
                                </button>
                            </div>
                        </div>



                    </div>
                </MainContainer>

            </Content>
        </DashboardLayout>
        {modalopen && <MyModal modalopen={modalopen} setmodalopen={setmodalopen} >

            {loading ? <ThreeDots
                visible={true}
                height="30"
                width="30"
                color="white"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /> : <p className="text-white font-normal">{response}</p>}

        </MyModal>}

    </>
};


