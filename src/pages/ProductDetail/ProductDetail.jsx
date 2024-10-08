import React, { useState } from "react";
import "./ProductDetail.css";
import { Button, Image } from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const [selected, setSelected] = useState("photos");

  return (
    <>
      <div className="product-page section_padding">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Electronics</BreadcrumbItem>
          <BreadcrumbItem>Samsung TV 75 inch</BreadcrumbItem>
        </Breadcrumbs>

        <div className="product-detail-container ">
          <div className="product-image-container">
            <Image
              src="https://www.livemint.com/lm-img/img/2024/05/02/1600x900/75_inch_smart_tv_1714649551876_1714649561405.jpg"
              className="w-full"
            />
            <div className="product-more-images flex mt-3 gap-3">
              <Image
                src="https://media.assettype.com/analyticsinsight%2F2024-07%2F77e04d69-9ba8-450e-a926-918ef09f3051%2FSave-Big-on-4K-and-OLED-Smart-TVs---Best-Deals-of-the-Week.jpg?w=480&auto=format%2Ccompress&fit=max"
                className="w-[33em]"
              />
              <Image
                src="https://www.livemint.com/lm-img/img/2024/05/02/1600x900/75_inch_smart_tv_1714649551876_1714649561405.jpg"
                className="w-[33em]"
              />
              <Image
                src="https://www.livemint.com/lm-img/img/2024/05/02/1600x900/75_inch_smart_tv_1714649551876_1714649561405.jpg"
                className="w-[33em]"
              />
            </div>
          </div>

          <div className="product-info-container">
            <div className="product-header">
              <h3>Samsung TV 75 inch</h3>
              <div className="rating-badge-container">
                <div className="rating-star">
                  <span>4.5</span>
                  <i>
                    {" "}
                    <FaStar />
                  </i>
                </div>
                <span>73 Ratings</span>
              </div>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              sunt quae aut doloremque nesciunt, obcaecati dolores voluptate
              illo natus nulla maiores nostrum, quibusdam neque quis consectetur
              dignissimos ipsam temporibus commodi!
            </p>
            <h4>
              <b>Desired Product:</b> LG OLED
            </h4>
            <h4>
              <b>Date of Purchase:</b> 12 Aug 2021
            </h4>
            <h4>
              <b>Category:</b> Electronics
            </h4>
            <h4>
              <b>Condition:</b> Mint
            </h4>
            <div className="product-btns">
              <Button  className="product-btn">
                Swap Now
              </Button>
              <Button  className="product-btn">
                Wishlist
              </Button>
            </div>
          </div>
        </div>

        <div className="product-tabs-container">
          <div className="flex w-full flex-col">
            <Tabs
              aria-label="Options"
              variant="underlined"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="reviews" title="Reviews">
                <Card>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="desc" title="Description">
                <Card>
                  <CardBody>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
