import { Header } from '../components/Header';
import businessBanner from '../assets/3d-earth-graphic-symbolizing-global-trade-illustration_456031-125.webp';
import { FaRegLightbulb, FaHandsHelping, FaMoneyBillWave } from 'react-icons/fa';

const BusinessPage = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Navigation */}
            <Header />

            {/* Main Content */}
            <div className="relative">
                <div className="relative text-center w-full">
                    <img src={businessBanner} alt="Business Model Image" className="mx-auto h-[70vh] w-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold px-4">
                            Empowering businesses with AI-driven insights <br /> for a smarter, more efficient future.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-8">
                {/* Potential Stakeholders */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Potential Stakeholders</h2>

                    {/* Stakeholder 1: Hackathon Hosting Organizations */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Hackathon Hosting Organizations</h3>
                        <p className="text-gray-700 mb-4">Types:</p>
                        <ul className="list-disc list-inside ml-4 text-gray-700">
                            <li>Incubators</li>
                            <li>Governmental Innovation Entities</li>
                            <li>Dedicated Hackathon Organizations</li>
                            <li>Universities</li>
                        </ul>
                    </div>

                    {/* Stakeholder 2: Hackathon Online Platforms */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Hackathon Online Platforms</h3>
                        <p className="text-gray-700 mb-4">Examples:</p>
                        <ul className="list-disc list-inside ml-4 text-gray-700">
                            <li>Devpost</li>
                            <li>HackerEarth</li>
                            <li>MLH (Major League Hacking)</li>
                        </ul>
                    </div>

                    {/* Stakeholder 3: Hackathon Service Providers */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Hackathon Service Providers</h3>
                        <p className="text-gray-700 mb-4">Types:</p>
                        <ul className="list-disc list-inside ml-4 text-gray-700">
                            <li>Consulting Firms Specializing in Innovation and Hackathons</li>
                            <li>Tech Service Providers Offering Hackathon Tools</li>
                            <li>Event Management Companies</li>
                        </ul>
                    </div>
                </div>

                {/* Analysis of Each Category */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Analysis of Each Category</h2>

                    {/* Category 1: Hackathon Hosting Organizations */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Hackathon Hosting Organizations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Challenges Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaRegLightbulb className="mr-2" />Challenges</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Resource Allocation</li>
                                    <li>Evaluation Process</li>
                                    <li>Coordination</li>
                                    <li>Feedback Provision</li>
                                </ul>
                            </div>

                            {/* Benefits of CustomGPT Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaHandsHelping className="mr-2" />Benefits of CustomGPT</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>JudgeGPT: Automated evaluation</li>
                                    <li>OrganizerGPT: Streamlined task assignment</li>
                                    <li>ParticipantGPT: Enhanced support</li>
                                </ul>
                            </div>

                            {/* Business and Partner Models Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaMoneyBillWave className="mr-2" />Business and Partner Models</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Subscription Model</li>
                                    <li>Pay-per-Use Model</li>
                                    <li>Licensing Model</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Category 2: Hackathon Online Platforms */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Hackathon Online Platforms</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Challenges Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaRegLightbulb className="mr-2" />Challenges</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>User Engagement</li>
                                    <li>Scalability</li>
                                    <li>Feedback and Evaluation</li>
                                </ul>
                            </div>

                            {/* Benefits of CustomGPT Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaHandsHelping className="mr-2" />Benefits of CustomGPT</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>JudgeGPT: Automated evaluation</li>
                                    <li>OrganizerGPT: Enhanced functionalities</li>
                                    <li>ParticipantGPT: Increased engagement</li>
                                </ul>
                            </div>

                            {/* Business and Partner Models Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaMoneyBillWave className="mr-2" />Business and Partner Models</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Revenue Sharing Model</li>
                                    <li>White-Label Solution</li>
                                    <li>API Integration Model</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Category 3: Hackathon Service Providers */}
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. Hackathon Service Providers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Challenges Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaRegLightbulb className="mr-2" />Challenges</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Tool Integration</li>
                                    <li>Client Coordination</li>
                                    <li>Innovation</li>
                                </ul>
                            </div>

                            {/* Benefits of CustomGPT Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaHandsHelping className="mr-2" />Benefits of CustomGPT</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>JudgeGPT: Automated evaluation</li>
                                    <li>OrganizerGPT: Streamlined management</li>
                                    <li>ParticipantGPT: Advanced tools</li>
                                </ul>
                            </div>

                            {/* Business and Partner Models Card */}
                            <div className="bg-[#27182F] p-6 rounded-lg shadow-md text-white">
                                <h4 className="text-xl font-semibold mb-2 flex items-center"><FaMoneyBillWave className="mr-2" />Business and Partner Models</h4>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Consulting Fees</li>
                                    <li>Tool Licensing</li>
                                    <li>Partnership Model</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conclusion */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Conclusion</h2>
                    <p className="text-gray-700 mb-4">
                        CustomGPT offers a unique value proposition to various stakeholders in the hackathon ecosystem by addressing their specific challenges and providing tailored solutions that enhance efficiency, engagement, and innovation.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Whether you are an organization looking to streamline your hackathon processes, an online platform seeking to scale effectively, or a service provider aiming to integrate advanced AI tools, CustomGPT is designed to meet your needs and drive success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BusinessPage;
