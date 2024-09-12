// import Button from "@/components/Ui/button";
import Container from "../../Container";
import Link from "next/link";
import { Spotlight } from "../../Ui/spotlight";
import Image from "next/image";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "../../Ui/text-reveal-card";

const Kontak = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="h-[85%] w-[90%] flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden bg-gradient-to-br border-2 border-gray-500 rounded-2xl md:w-[70%] md:h-[80%]">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
                <Container size="md" className="h-full w-full p-5 md:h-fit">
                    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                        {/* <p className="text-xl font-thin text-center text-white mb-16">Terhubunglah denganku</p> */}

                        <TextRevealCard text="Terhubunglah denganku" revealText="Mari berteman" />

                        <div className="flex flex-col gap-10 text-white">

                            <div className="flex justify-center items-center gap-3">
                                <p className="text-lg font-bold text-neutral-400">Social Media: </p>
                                <div className="flex gap-2">
                                    <Link className="p-2 bg-neutral-400 rounded-full border-2 border-black border-dashed" href="https://github.com/dgadingi" target="_blank">
                                        <Image width={25} height={25} src="../../../assets/contact/github.svg" alt="github" />
                                    </Link>
                                    <Link className="p-2 bg-neutral-400 rounded-full border-2 border-black border-dashed" href="https://www.instagram.com/gadlng/" target="_blank">
                                        <Image width={25} height={25} src="../../../assets/contact/instagram.svg" alt="instagram" />
                                    </Link>

                                    <Link className="p-2 bg-neutral-400 rounded-full border-2 border-black border-dashed" href="https://www.linkedin.com/in/dgadingi/" target="_blank">
                                        <Image width={25} height={25} src="../../../assets/contact/linkedin.svg" alt="linkedin" />
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-2 text-neutral-400">
                                <p className="text-lg font-bold">Atau kamu bisa lewat</p>
                                <div className="w-fit p-2 flex justify-center items-center gap-2 border-4 border-neutral-400 border-double rounded-lg">
                                    <Link className="flex gap-2 items-center justify-center" href="mailto:gadingamstrong@gmail.com">
                                        <Image className="p-2 bg-neutral-400 rounded-full border-2 border-black border-dashed" width={45} height={45} src="../../../assets/contact/email.svg" alt="instagram" />
                                        <p className="text-sm md:text-base text-neutral-400 font-semibold">gadingamstrong@gmail.com</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Kontak