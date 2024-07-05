import { Header } from "../components/Header";
import { Teams } from "../components/Teams";
import banner from '../assets/f4dfb0d6-8b16-45d0-8d43-fdeaf57c3263.webp'

export const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Navigation */}


            {/* Main Content */}
            <div className="relative">
            <Header />
            <div className="relative text-center w-full">
                <img src={banner} alt="Iconizing Image" className="mx-auto h-[70vh] w-full object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold px-4">
                        Innovative solutions for judges and <br /> organizers to shape the future of hackathons.
                    </h1>
                </div>
            </div>
        </div>

            <div className="max-w-6xl mx-auto p-5">
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Problem Statement</h2>
                    <p>Arranging a hackathon can be a complex and challenging task, with various issues that can lead to unsatisfactory outcomes. For instance, hosts may face difficulties in attracting participants, with 60% of hackathons struggling to draw in attendees, and 40% experiencing a no-show rate of over 50%, resulting in significant financial losses, ranging from $5,000 to $20,000. Moreover, participants often express dissatisfaction with the judging process, with 75% feeling that judging is biased or unfair, and 60% unhappy with the feedback provided by judges. Additionally, manual judging can be a time-consuming and labor-intensive process, taking up to 3-5 days to complete, and potentially leading to errors and inconsistencies in scoring.</p>
                </div>

                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Solution</h2>
                    <p>To address these problems, we have developed JudgeGPT and HostGPT, AI-powered tools that revolutionize the hackathon experience by providing a bias-free, efficient, and transparent judging and organizing process. JudgeGPT enables judges to evaluate participants' projects by uploading the presentation and project idea of each participant. The idea is scored on a scale of 1-10, and all positive and negative points are mentioned along with the score, enabling judges to provide feedback efficiently. Meanwhile, HostGPT streamlines the hackathon hosting process, ensuring a seamless experience for hosts and participants alike. </p>
                </div>

                <div>
                    <Teams />
                </div>
            </div>
        </div>
    );
};

