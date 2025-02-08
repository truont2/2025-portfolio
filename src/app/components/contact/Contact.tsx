import { Container } from "@/components/container";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Container className="py-10 md:py-20">
      <div className="flex flex-col rounded-xl bg-[#161616] md:flex-row" id="contact">
        <div className="p-5 md:w-[50%] md:p-10">
          <h3 className="mb-4 text-2xl text-blue-500">Contact</h3>
          <p className="mb-2 text-2xl font-semibold md:text-3xl">Let us know how we can help</p>
          <p>
            We&apos;re here to assist you and answer any questions you may have. We look forward to connecting with you! Please fill out the
            form or use the contact information provided.
          </p>
          <div className="mb-10 mt-10">
            <Link href={"mailto:info@flash-step.com"} className="inline-flex items-center gap-2 hover:text-blue-100">
              <FaEnvelope className="text-2xl" />
              info@flash-step.com
            </Link>
          </div>
          <div className="border-t border-white/20 pt-10">
            <div className="flex gap-4">
              <Link
                aria-label="Follow Flash Step on LinkedIn"
                href={"https://www.linkedin.com/company/flashstep/"}
                className="inline-flex items-center gap-2"
              >
                <BsLinkedin className="text-3xl hover:text-blue-100" />
              </Link>
              <Link
                aria-label="Follow Flash Step on Faceook"
                href={"https://www.facebook.com/profile.php?id=61567033768950"}
                className="inline-flex items-center gap-2"
              >
                <FaFacebookSquare className="text-[34px] hover:text-blue-100" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
