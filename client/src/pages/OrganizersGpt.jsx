import { useState } from "react";
import { Content } from "../components/dashboard layout/content/Content";
import { DashboardLayout } from "../components/dashboard layout/DashboardLayout";
import { MobileNavs } from "../components/dashboard layout/sidebar/MobileNavs";
import { Sidebar } from "../components/dashboard layout/sidebar/Sidebar";
import { MainContainer } from "../components/MainContainer";
import axios from "axios";
import { IoMdCloudUpload } from "react-icons/io";


export const OrganizersGpt = () => {
    const [open, setopen] = useState(false);
    const [response, setresponse] = useState("");
    const [file, setfile] = useState(null);
    const [loading, setloading] = useState(false);
    const [modalopen, setmodalopen] = useState(false);


    const handleFileChange = (e) => {
        setfile(e.target.files[0]);
    };

    const handleResponse = async () => {
        setloading(true);
        setmodalopen(true)

        if (file === null) {
            setloading(false);
            setmodalopen(false)
            return;
        }

        const formdata = new FormData()
        formdata.append('file', file)


        try {
            const response = await axios.post("http://127.0.0.1:5000/upload_schedule", formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response)
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
                          

                            <div className=" items-center mt-6">
                            <label htmlFor="idea" className="block font-semibold text-white mb-2">Upload Schedule</label>

                                <input type="file" accept=".xlsx , .csv" id="upload" hidden onChange={handleFileChange} />
                                <label htmlFor="upload" className="flex flex-col items-center p-4 border-2 border-dashed border-green-300 bg-secandory-color rounded-md cursor-pointer hover:bg-hover-bg transition-colors">
                                    <IoMdCloudUpload className="text-4xl mb-2 text-white" />
                                    <h4 className="text-md font-semibold text-white">Click to upload file</h4>
                                </label>
                                <small className="text-gray-400 mt-2">*Acceptable formats: .xlsx, .csv</small>
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
    </>
};
