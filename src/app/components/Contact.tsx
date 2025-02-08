import { useState, useTransition } from "react";

type Props = {};

const Contact = (props: Props) => {
    const [isPending, startTransition] = useTransition();
    // const { toast } = useToast();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        message: "",
    });

    // Handle input change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        startTransition(async () => {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                // toast({
                //     description: "Your message has been sent.",
                // });

                // Clear form data
                setFormData({
                    fullName: "",
                    email: "",
                    company: "",
                    message: "",
                });
            } else {
                // toast({
                //     variant: "destructive",
                //     title: "Uh oh! Something went wrong.",
                //     description: "There was a problem with your request.",
                //     action: (
                //         <ToastAction altText="Try again">Try again</ToastAction>
                //     ),
                // });
            }
        });
    };
    return (
        <div
            id="contact"
            className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[lenght:90%_auto]'
        >
            <h4 className="text-center mb-2 text-lg font-Ovo">
                Connect with me
            </h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I'd love to hear from you! If you have any questions, comments
                or feedback, please use the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="fullName" className="font-medium">
                        Full name
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="company" className="font-medium">
                        Company
                    </label>
                    <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent bg-white px-3 py-2 text-black shadow-sm outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <button className="w-full rounded-lg bg-blue-700 px-4 py-2 !text-lg !font-semibold text-white duration-150 hover:bg-blue-500 active:bg-blue-500">
                    {isPending ? <>Sending ...</> : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default Contact;
