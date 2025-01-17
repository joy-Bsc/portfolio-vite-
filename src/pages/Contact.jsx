import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import Layout from "./Layout";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        value: '+8801792-233327'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        value: 'dharjoy75@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        value: 'Dhaka, Bangladesh'
    }
];

const Contact = () => {
    return (
       <Layout>
         <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: easeIn } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let`&apos;`s work together</h3>
                            <p className="text-white/60">If you are looking for a dedicated developer to bring your idea`&apos;`s to life, you are in the right place. Reach out to discuss your project, and let`&apos;`s create something amazing together.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" placeholder="First Name" />
                                <Input type="text" placeholder="Last Name" />
                                <Input type="email" placeholder="Email" />
                                <Input type="tel" placeholder="Phone" />
                            </div>
                            <Select>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder='Select A Option'>Choose a Service</SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup label="Services">
                                        <SelectLabel>Select service</SelectLabel>
                                        <SelectItem value="Web Development">Web Development</SelectItem>
                                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                                        <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                                        <SelectItem value="Branding">Branding</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text area */}
                            <textarea className="flex min-h-[120px] w-full rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder-white/60 outline-none" placeholder="Type your Message here"></textarea>
                            <Button size='lg' className='max-w-40'>Send Message</Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div>
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-white">{item.value}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
       </Layout>
    );
};

export default Contact;