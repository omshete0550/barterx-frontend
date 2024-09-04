import React from "react";
import "./Landing.css";
import { Button, Image } from "@nextui-org/react";
import hero from "../../assets/hero.jpg";
import AccordianComponent from "../../components/Accordian/Accordian";
import Category from "../../components/Category/Category";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <section className="px-2 py-24 md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Innovating Exchange, </span>
                  <span className="block text-secondary-500 xl:inline">
                    Igniting Trade.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Welcome to BarterX, the ultimate destination for modern
                  bartering enthusiasts.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="/home"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-secondary-600 rounded-md sm:mb-0 hover:bg-secondary-700 sm:w-auto"
                  >
                    Swap Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                  <a
                    href="#_"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="landing-hero-container section_padding">
        <div className="hero-headline">
          <h1>Innovating Exchange, Igniting Trade</h1>
          <p>
            Welcome to BarterX, the ultimate destination for modern bartering
            enthusiasts.
          </p>
          <Button color="secondary" variant="shadow" size="lg">
            Get Started
          </Button>
        </div>

        <div className="hero-img">
          <Image
            isBlurred
            width="100%"
            height="100%"
            alt="NextUI hero Image"
            src={hero}
          />
        </div>
      </div> */}

      <div className="category-container section_padding">
        <h1 className="heading">Category</h1>
        <Category />
      </div>

      <div className="values-container section_padding">
        <h1 className="heading">Here are the features we’re proud of</h1>

        <div className="flex flex-1 gap-3 flex-wrap justify-center items-center">
          <div className="values-card">
            <span className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
              </svg>
            </span>
            <h4>Products</h4>
            <p>
              Standard chunk of Lorem Ipsum used since the 1500s is showed below
              for those interested.
            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>

              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
          <div className="values-card">
            <span className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
                <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
                <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
              </svg>
            </span>
            <h4>Categories</h4>
            <p>
              Standard chunk of Lorem Ipsum used since the 1500s is showed below
              for those interested.
            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>

              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
          <div className="values-card">
            <span className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
              </svg>
            </span>
            <h4>Products</h4>
            <p>
              Standard chunk of Lorem Ipsum used since the 1500s is showed below
              for those interested.
            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>

              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
          <div className="values-card">
            <span className="icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
                <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
                <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
              </svg>
            </span>
            <h4>Categories</h4>
            <p>
              Standard chunk of Lorem Ipsum used since the 1500s is showed below
              for those interested.
            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>

              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="partner-container section_padding">
        <h1 className="heading">Our Partners</h1>
        <div className="slider">
          <div className="slider-items">
            <img
              src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
              alt=""
            />
            <img
              src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
              alt=""
            />
            <img
              src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303123/bmw-logo.svg"
              alt=""
            />
            <img
              src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
              alt=""
            />
            <img
              src="https://www.zarla.com/images/nike-logo-2400x2400-20220504.png?crop=1:1,smart&width=150&dpr=2"
              alt=""
            />
            <img
              src="https://www.zarla.com/images/apple-logo-2400x2400-20220512-1.png?crop=1:1,smart&width=150&dpr=2"
              alt=""
            />
            <img
              src="https://www.zarla.com/images/disney-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Loon_%28company%29_logo.svg/800px-Loon_%28company%29_logo.svg.png"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303123/bmw-logo.svg"
              alt=""
            />
            <img
              src="https://brandlogos.net/wp-content/uploads/2014/12/starbucks_coffee_company-logo_brandlogos.net_9jqys.png"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <div className="accordian-container section_padding">
        <h1 className="heading">Frequently asked questions (FAQs)</h1>
        <AccordianComponent />
      </div>
    </>
  );
};

export default Landing;
