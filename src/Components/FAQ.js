/* 
 * Copyright (c) 2024, Keystone Capital
 * All rights reserved.
 *
 * This source code is licensed under the GPL-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Faq from 'react-faq-component'

const data = {
  title: "FAQs",
  rows: [
    {
      title: "WHAT IS DEAL FLOW AND FUNDRAISING, AND HOW CAN OUR FIRM HELP?",
      content: `Deal flow refers to the rate at which investment offers or business proposals are received. Fundraising is the process of gathering voluntary contributions of money or other resources. Our firm specializes in identifying, evaluating, and securing investment opportunities and capital for businesses across various sectors. We leverage our network of investors and strategic partners to facilitate the growth of your business by securing necessary funding.`,
    },
    {
      title: "WHAT TYPES OF COMPANIES DO WE WORK WITH?",
      content: `We partner with companies across multiple sectors, including technology, healthcare, real estate,and consumer products, among others. Our ideal partners are businesses looking for growth capital, seed funding, or series funding rounds. We are sector-agnostic and focus on the potential for growth and the quality of the management team.`,
    },
    {
      title: "WHAT MAKES YOUR FIRM DIFFERENT FROM OTHER DEAL FLOW AND FUNDRAISING FIRMS?",
      content: `Our firm stands out due to our personalized approach, extensive network of investors, and a proven track record of successful deals. We offer tailored strategies that align with your company's growth objectives and work closely with you throughout the entire process. Our team's expertise across various industries enables us to provide valuable insights and guidance.`,
    },
    {
      title: "HOW DOES THE FUNDRAISING PROCESS WORK WITH YOUR FIRM?",
      content: `The process begins with an initial consultation to understand your business, funding needs, and objectives. We then perform a detailed analysis to determine the best fundraising strategy and prepare necessary advancements. Following this, we leverage our network to match you with suitable investors and manage the negotiation process, aiming to secure the best terms for your company.`,
    },
    {
      title: "WHAT FEES DO YOU CHARGE FOR YOUR SERVICES?",
      content: `Our fee structure is primarily success-based, meaning we earn a commission based on the funds raised or deals closed. This aligns our interests with yours, ensuring we are motivated to secure the best possible outcome for your company. An upfront fee is taken at the start to build out the system, and pay for the analysts' time.`,
    },
    {
      title: "HOW CAN I START WORKING WITH YOUR FIRM?",
      content: `To begin the process, please fill out the contact form on our website with some basic information about your company and funding needs or email robert@Keystone Capital.com. One of our team members will reach out to you within 48 hours to schedule an initial consultation. During this meeting, we'll discuss your business in more depth and how we can assist in achieving your fundraising goals.`,
    },
    {
      title: "WHY ARE WE CALLED 'KEYSTONE CAPITAL'?",
      content: `The name 'Keystone Capital' reflects our core mission and the unique value proposition we bring to the table, initially starting in the construction and consumer service sectors. Our journey began with the ambition to bridge the gap between high-quality service providers in these industries and the businesses or consumers seeking top-notch services. We recognized early on that while there's a plethora of opportunities in the construction and consumer service industries, finding the right deals and partnerships can be challenging due to the sheer volume of options and varying quality standards.`
    },
  ],
};

const styles = {
  rowContentPaddingBottom: "20px",
  rowContentPaddingLeft: "25px",
  rowContentPaddingRight: "25px",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true,
  // openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-"
};

function FAQ() {
  return (
    <section className='section faq' aria-label='faq' id='faq'>
      <div className='container faq-row-wrapper'>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </section>
  )
}

export default FAQ;
