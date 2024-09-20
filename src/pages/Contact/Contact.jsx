import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { MailIcon } from "./MailIcon";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import Accordian from "../../components/Accordian/Accordian";

const Contact = () => {
  return (
    <>
      <div className="contact-container section_padding">
        <div className="left-contact-container">
          <h1>Contact Us</h1>
          <h6>
            Email, call or complete the form to learn how <br /> BarterX can
            swap your product.
          </h6>
          <p>info@barterx.com</p>
          <p>321-221-213</p>
          <p>
            <Link to="/" style={{ paddingTop: "1em" }}>
              Customer Support
            </Link>
          </p>

          <div className="contact-info">
            <div>
              <h3>Cutomer Support</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                cumque beatae laboriosam iusto praesentium voluptatibus.
              </p>
            </div>
            <div>
              <h3>Feedback & Suggestion</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                cumque beatae laboriosam iusto praesentium voluptatibus.
              </p>
            </div>
            <div>
              <h3>Media Inquiries</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                cumque beatae laboriosam iusto praesentium voluptatibus.
              </p>
            </div>
          </div>
        </div>
        <div className="right-contact-container">
          <div className="contact-form">
            <h1>Get in Touch</h1>
            <p>You can reach us anytime</p>

            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-6">
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
            </div>

            <Input
              type="email"
              placeholder="Your Email"
              className="pt-6"
              startContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input type="number" placeholder="Phone Number" className="pt-6" />
            <Textarea placeholder="Enter your description" className="pt-6" />
            <Button color="primary" className="submit-contact-btn" radius="full">
              Submit
            </Button>

            <p className="text-center pt-3">
              By contacting us you agree to our <b>Terms of service</b> and{" "}
              <b>policy</b>.
            </p>
          </div>
        </div>
      </div>

      <div className="section_padding">
        <h1 className="heading">FAQ</h1>
        <Accordian />
      </div>
    </>
  );
};

export default Contact;
