import React, { useState } from "react";
import Container from "../../Container";
import { Spotlight } from "../../Ui/spotlight";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from 'react-modal';
import { PinContainer } from "../../Ui/3d.pin";
import { TextGenerateEffect } from "../../Ui/text-generate-effect";
import Button from "../../Ui/button";
import Image from "next/image";

const Tentang = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const responsive = {
        superLargeDesktop: {
            // the naming can be confusing, but essentially you need to change the value of the size of the carousel.
            // Example: 4k monitors
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const projects = [
        {
            title: "Cashier App",
            description: "Cashier App ini adalah solusi manajemen kasir yang lengkap dan terintegrasi, dirancang untuk mempermudah operasional bisnis. Aplikasi ini tidak hanya memungkinkan kasir untuk melayani pelanggan, memproses pesanan, dan mencetak struk transaksi, tetapi juga menyediakan fitur laporan keuangan yang komprehensif. Pengguna dapat mengakses laporan harian, mingguan, dan bulanan, serta melakukan CRUD (Create, Read, Update, Delete) pada produk untuk mengelola inventaris dengan mudah.",
            thumbnail: "/assets/projek/cashier/2.png",
            images: [
                "/assets/projek/cashier/1.png",
                "/assets/projek/cashier/2.png",
                "/assets/projek/cashier/3.png",
                "/assets/projek/cashier/4.png",
                "/assets/projek/cashier/5.png",
                "/assets/projek/cashier/6.png",
                "/assets/projek/cashier/7.png",
                "/assets/projek/cashier/8.png",
                "/assets/projek/cashier/9.png",
                "/assets/projek/cashier/9.png",
                "/assets/projek/cashier/10.png",
                "/assets/projek/cashier/11.png"
            ],
            tech: [
                "/assets/skill/tailwindcss.svg",
                "/assets/skill/javascript.svg",
                "/assets/skill/nodedotjs.svg",
                "/assets/skill/express.svg",
                "/assets/skill/vuedotjs.svg",
                "/assets/skill/mysql.svg",
            ]
        },
        {
            title: "Simple Cashier & Admin",
            description: "Simple Cashier App adalah aplikasi kasir yang dirancang untuk memproses pesanan pelanggan dengan cepat dan efisien. Meskipun sederhana, aplikasi ini dilengkapi dengan halaman admin yang memungkinkan pengaturan produk. Halaman admin ini memudahkan pengguna untuk mengelola daftar produk yang tersedia, sementara bagian kasir tetap fokus pada pemrosesan transaksi pelanggan.",
            thumbnail: "/assets/projek/kuliner/kuliner 1.png",
            images: [
                "/assets/projek/kuliner/kuliner 1.png",
                "/assets/projek/kuliner/kuliner 2.png",
                "/assets/projek/kuliner/kuliner 3.png",
                "/assets/projek/kuliner/kuliner 4.png",
                "/assets/projek/kuliner/kuliner 5.png",
                "/assets/projek/kuliner/kuliner 6.png",
                "/assets/projek/kuliner/kuliner 7.png",
                "/assets/projek/kuliner/admin 1.png",
                "/assets/projek/kuliner/admin 2.png",
                "/assets/projek/kuliner/admin 3.png",
                "/assets/projek/kuliner/admin 4.png",
                "/assets/projek/kuliner/admin 5.png"
            ],
            tech: [
                "/assets/skill/bootstrap.svg",
                "/assets/skill/javascript.svg",
                "/assets/skill/vuedotjs.svg",
            ]
        },
        {
            title: "Sistem Absensi Karyawan",
            description: `Aplikasi absensi karyawan ini memiliki dua akses: Admin dan Karyawan. Admin dapat mengelola data karyawan, absensi, rekap absensi, serta pengaturan aplikasi. Rekap absensi juga bisa dicetak dalam format PDF. Karyawan melakukan absensi dengan foto wajah dan pencatatan lokasi (longitude, latitude) untuk memastikan keaslian absensi. Aplikasi ini dirancang untuk mencegah kecurangan dengan verifikasi wajah dan lokasi. Proyek ini menawarkan fitur lengkap dan aman untuk manajemen absensi karyawan.`,
            thumbnail: "/assets/projek/absensi/admin2.png",
            images: [
                "/assets/projek/absensi/admin1.png",
                "/assets/projek/absensi/admin2.png",
                "/assets/projek/absensi/admin3.png",
                "/assets/projek/absensi/admin4.png",
                "/assets/projek/absensi/admin5.png",
                "/assets/projek/absensi/admin6.png",
                "/assets/projek/absensi/admin7.png",
                "/assets/projek/absensi/admin8.png",
                "/assets/projek/absensi/admin9.png",
                "/assets/projek/absensi/employee1.png",
                "/assets/projek/absensi/employee2.png",
            ],
            tech: [
                "/assets/skill/tailwindcss.svg",
                "/assets/skill/javascript.svg",
                "/assets/skill/react.svg",
                "/assets/skill/nodedotjs.svg",
                "/assets/skill/express.svg",
                "/assets/skill/mysql.svg",
            ]
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="h-[85%] w-[90%] flex justify-center items-center md:items-center md:justify-center bg-black/[0.96] antialiased relative overflow-hidden bg-gradient-to-br border-2 border-gray-500 rounded-2xl p-5 md:p-5 md:w-[70%] md:h-[80%]">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                <Container size="lg" className="h-full w-full flex items-center justify-center md:h-full md:w-full">

                    <div className="w-full h-full flex flex-col items-center justify-start gap-5 md:gap-5">
                        <div className="w-full h-fit py-2 inline-flex animate-shimmer items-center justify-center rounded-xl border-b-2 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors shadow-md shadow-neutral-500">
                            <TextGenerateEffect words="Beberapa projek yang telah saya kerjakan" className="text-lg md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"/>
                        </div>

                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            keyBoardControl={true}
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            className="w-full h-full"
                        >
                            {projects.map((project, index) => (
                                <PinContainer
                                    key={index}
                                    title={project.title}
                                    href={project.thumbnail}
                                    onClick={() => openModal(project)}
                                    containerClassName="w-full h-full rounded-lg shadow-lg flex items-center justify-center gap-5 p-5"
                                >
                                    <Image width={300} height={300} src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />

                                    <div className="w-fit h-fit flex flex-col items-start justify-center">
                                        <h3 className="text-neutral-200 font-semibold">{project.title}</h3>
                                        <p className="text-neutral-200 text-xs line-clamp-2">{project.description}</p>
                                        <div key={index} className="mt-2 pt-2 w-full h-fit border-t rounded-md border-neutral-400 flex justify-around items-center flex-row gap-1 flex-wrap">
                                            {
                                                project.tech.map((tech, index) => (
                                                    <Image key={index} width={27} height={27} src={tech} alt={project.title} className="p-1 bg-neutral-200 rounded-xl border-2 border-black border-dashed" />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </PinContainer>
                            ))}
                        </Carousel>

                    </div>
                </Container>
            </div>

            <Modal
                isOpen={!!selectedProject}
                onRequestClose={closeModal}
                contentLabel="Detail Project"
                className="w-[90%] h-[90%] flex flex-col items-center justify-center bg-black p-4 rounded-lg shadow-lg"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                {
                    selectedProject && (
                        <div className="text-center w-full h-full overflow-y-auto text-neutral-200 relative rounded-xl border-4 border-double border-neutral-400">
                            <div className="flex flex-col justify-center items-center w-full p-3 gap-2">
                                <h2 className="text-2xl font-bold ">{selectedProject.title}</h2>
                                <p className="text-sm md:text-base">{selectedProject.description}</p>
                                <div className="flex flex-col justify-center items-center w-full p-3 gap-2">
                                    <p className="text-lg font-bold">Tech Stack</p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {selectedProject.tech.map((tech, index) => (
                                            <Image width={30} height={30} key={index} src={tech} alt={`Tech ${index}`} className="p-1 bg-neutral-200 rounded-xl border-2 border-black border-dashed" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 p-5">
                                {selectedProject.images.map((image, index) => (
                                    <Image width={300} height={300} key={index} src={image} alt={`Detail ${index}`} className="w-full h-full object-cover rounded-lg" />
                                ))}
                            </div>

                            <div onClick={closeModal} className="absolute top-0 right-0 p-3 cursor-pointer">
                                <Button children="X" className="py-4 px-4 md:py-4" />
                            </div>
                        </div>
                    )
                }
            </Modal>

        </div>
    )
}

export default Tentang
