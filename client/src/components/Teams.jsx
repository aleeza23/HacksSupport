
import imgSaima from '../assets/img-saima.webp'
import imgAleeza from '../assets/GridArt_20240123_162905647.jpg'
import imgMohamd from '../assets/mohamad-img.webp'
import imgMoli from '../assets/moli.webp'
import imgKhadija from '../assets/khadijia-img.webp'
import imgKs from '../assets/ks-img.webp'



export const Teams = () => {
    return <>
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Our team</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400"> Together we combine expertise with a
                        passion for excellence to achieve our goals and exceed
                        expectations.</p>
                </div>
                <div className="grid gap-8 lg:gap-7 md:max-w-3xl lg:mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {/* team member 1 */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={imgMoli} alt="" />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Moli G.ott.</a>
                        </h3>
                        <p>Team Lead/CEO</p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://www.linkedin.com/in/moligott/" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.697 19.345H6.162V9.343h2.535v10.002zM7.431 8.16c-.813 0-1.472-.66-1.472-1.473 0-.812.66-1.472 1.472-1.472.812 0 1.473.66 1.473 1.472 0 .812-.661 1.473-1.473 1.473zM19.332 19.345h-2.534v-5.451c0-1.298-.026-2.97-1.809-2.97-1.809 0-2.084 1.414-2.084 2.871v5.549h-2.535V9.343h2.438v1.37h.035c.341-.647 1.176-1.334 2.419-1.334 2.593 0 3.074 1.708 3.074 3.927v6.039z" />
                                    </svg>

                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* team member 1 */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={imgKs} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Tobias Sami</a>
                        </h3>
                        <p>Business Advisor</p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.697 19.345H6.162V9.343h2.535v10.002zM7.431 8.16c-.813 0-1.472-.66-1.472-1.473 0-.812.66-1.472 1.472-1.472.812 0 1.473.66 1.473 1.472 0 .812-.661 1.473-1.473 1.473zM19.332 19.345h-2.534v-5.451c0-1.298-.026-2.97-1.809-2.97-1.809 0-2.084 1.414-2.084 2.871v5.549h-2.535V9.343h2.438v1.37h.035c.341-.647 1.176-1.334 2.419-1.334 2.593 0 3.074 1.708 3.074 3.927v6.039z" />
                                    </svg>

                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* team member 1 */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={imgMohamd} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Mohammad</a>
                        </h3>
                        <p>Backend & AI Developer</p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.697 19.345H6.162V9.343h2.535v10.002zM7.431 8.16c-.813 0-1.472-.66-1.472-1.473 0-.812.66-1.472 1.472-1.472.812 0 1.473.66 1.473 1.472 0 .812-.661 1.473-1.473 1.473zM19.332 19.345h-2.534v-5.451c0-1.298-.026-2.97-1.809-2.97-1.809 0-2.084 1.414-2.084 2.871v5.549h-2.535V9.343h2.438v1.37h.035c.341-.647 1.176-1.334 2.419-1.334 2.593 0 3.074 1.708 3.074 3.927v6.039z" />
                                    </svg>

                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/abutair" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* team member 1 */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={imgAleeza} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Aleeza Rubab</a>
                        </h3>
                        <p>Frontend React Developer</p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://www.linkedin.com/in/aleezarubab/" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.697 19.345H6.162V9.343h2.535v10.002zM7.431 8.16c-.813 0-1.472-.66-1.472-1.473 0-.812.66-1.472 1.472-1.472.812 0 1.473.66 1.473 1.472 0 .812-.661 1.473-1.473 1.473zM19.332 19.345h-2.534v-5.451c0-1.298-.026-2.97-1.809-2.97-1.809 0-2.084 1.414-2.084 2.871v5.549h-2.535V9.343h2.438v1.37h.035c.341-.647 1.176-1.334 2.419-1.334 2.593 0 3.074 1.708 3.074 3.927v6.039z" />
                                    </svg>

                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/aleeza23" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* team member 1 */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={imgKhadija} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Khadijah Shabir</a>
                        </h3>
                        <p>Content Writer</p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.697 19.345H6.162V9.343h2.535v10.002zM7.431 8.16c-.813 0-1.472-.66-1.472-1.473 0-.812.66-1.472 1.472-1.472.812 0 1.473.66 1.473 1.472 0 .812-.661 1.473-1.473 1.473zM19.332 19.345h-2.534v-5.451c0-1.298-.026-2.97-1.809-2.97-1.809 0-2.084 1.414-2.084 2.871v5.549h-2.535V9.343h2.438v1.37h.035c.341-.647 1.176-1.334 2.419-1.334 2.593 0 3.074 1.708 3.074 3.927v6.039z" />
                                    </svg>

                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* team member 1 */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={imgSaima} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">Saima Zainab</a>
                        </h3>
                        <p>Content creator</p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.697 19.345H6.162V9.343h2.535v10.002zM7.431 8.16c-.813 0-1.472-.66-1.472-1.473 0-.812.66-1.472 1.472-1.472.812 0 1.473.66 1.473 1.472 0 .812-.661 1.473-1.473 1.473zM19.332 19.345h-2.534v-5.451c0-1.298-.026-2.97-1.809-2.97-1.809 0-2.084 1.414-2.084 2.871v5.549h-2.535V9.343h2.438v1.37h.035c.341-.647 1.176-1.334 2.419-1.334 2.593 0 3.074 1.708 3.074 3.927v6.039z" />
                                    </svg>

                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </section>
    </>
};
