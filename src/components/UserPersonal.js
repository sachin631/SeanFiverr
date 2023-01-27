import React from "react";
import { NavLink } from "react-router-dom";

function UserPersonal() {
  return (
    <>
      <div className="ml-[5%] max-ml-[110px] mr-[3%]  max-mr-[97px] mt-[97px] mb-[97px] bg-white">
        <div className=" relative bg-[] font-[poppins] ">
          <div className="">
            <img src="/images/image 72.svg"alt="data" className="w-[100vw]  " />
            <img
              src="/images/edit-246 1.svg" alt="data"
              className="absolute  right-2 top-[16%] md:top-[50%]  lg:top-[50%] xl:top-[65%] w-[43px]"
            />
            <img
              src="/images/Avatar.svg"alt="data"
              className="w-[5]  h-[15%] md:mt-[-3%] mt-[-1%] scale-[200%] ml-[4%]  rounded-full absolute  border-solid border-[2px] border-[#374557] "
            />
          </div>
          <div className="w-[100%] h-[81px] bg-[#FFFFFF] flex pl-[12%] justify-start items-center gap-[5%]">
            <button className="leading-[32px] px-2 tracking-[-0.02em] text-[16px] font-[600] rounded-[5px] md:pl-[17px]  md:pr-[17px]  md:h-[36px] text-center  max-w-[103px] bg-[#374557] text-[#FFFFFF]">
              Personal
            </button>
            <NavLink to="/attendence">
              <button className="leading-[32px] text-[#374557] tracking-[-0.02em] text-[16px] font-[600] rounded-[5px] md:pl-[17px]  md:pr-[17px]  md:h-[36px]  ">
                Attendence & Notes
              </button>
            </NavLink>
            
          </div>
        
        </div>
        <div className="mt-[37px] bg-[#FFFFFF] w-[100%] h-[927px] font-[poppins] ">
          <div className="grid md:grid-cols-12 grid-cols-1">
            <div className="col-span-6 ml-[5%] pt-[31px] flex flex-col">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                Student First Name*
              </label>
              <input
                type="text"
                placeholder="Required "
                className="outline-none font-[600] text-[14px] leading-[21px] text-[#969696] w-[100%]  max-w-[577px] mt-[16px] p-[12px] border-[1px] border-solid rounded-[5px] border-[#374557]"
              />
            </div>
            <div className="col-span-6 pt-[31px] flex flex-col ml-[5%]">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                Student Last Name*
              </label>
              <input
                type="text"
                placeholder="Required "
                className="outline-none font-[600] text-[14px] leading-[21px] text-[#969696]  w-[100%]  max-w-[577px] mt-[16px] p-[12px] border-[1px] border-solid rounded-[5px] border-[#374557]"
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="grid md:grid-cols-12 grid-cols-1">
            <div className="col-span-6 ml-[5%] pt-[31px] flex flex-col">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                Student Email*
              </label>
              <input
                type="email"
                placeholder="Required "
                className="outline-none font-[600] text-[14px] leading-[21px] text-[#969696]  w-[100%]  max-w-[577px] mt-[16px] p-[12px] border-[1px] border-solid rounded-[5px] border-[#374557]"
              />
            </div>
            <div className="col-span-6 pt-[31px]  flex flex-col ml-[5%]">
              <div className="flex justify-start  md:space-x-[16rem] space-x-[100px] items-center">
                <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                  Student Phone*
                </label>
                <div className="flex gap-2">
                  <input type="checkbox" className="rounded-3xl ]" />
                  <label className="text-[#A098AE] ">
                    Send SMS Direct Message
                  </label>
                </div>
              </div>
              <input
                type="tel"
                placeholder="Required "
                className="outline-none font-[600] text-[14px] leading-[21px] text-[#969696]  w-[100%]  max-w-[577px] mt-[16px] p-[12px] border-[1px] border-solid rounded-[5px] border-[#374557]"
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex justify-start items-center ml-[2.5%] gap-2 mt-[40px] font-[poppins]">
            <img src="/images/Vector (1).svg" alt="data" />
            <p className="font-[600] text-[16px] leading-[24px] text-[#374557]">
              Click to display Birthday and Additional Details
            </p>
          </div>
          {/* 4th row */}
          <div className="grid md:grid-cols-12 grid-cols-1 font-[poppins]">
            <div className="col-span-6 ml-[5%] pt-[31px] flex flex-col">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                Default Lesson Category*
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="30 "
                  className="outline-none font-[600] text-[14px] leading-[21px] text-[#969696]  w-[100%]  max-w-[577px] mt-[16px] p-[12px] border-[1px] border-solid rounded-[5px] border-[#374557]"
                />
                <img
                  src="/images/arrow.svg" alt="data"
                  className="absolute mt-[-30px] ml-[80%] text-center  right-[9px] md:right-[200] lg:right-[14%] xl:right-[13%] 2xl:right-[45%]"
                />
              </div>
            </div>
            <div className="col-span-6 pt-[31px]  flex flex-col ml-[5%]">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                Default Lesson Length*
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="30 "
                  className="outline-none font-[600] text-[14px] leading-[21px] text-[#969696]  w-[100%]  max-w-[577px] mt-[16px] p-[12px] border-[1px] border-solid rounded-[5px] border-[#374557]"
                />
                <p className="absolute mt-[-36px] right-[9px] md:right-[200] lg:right-[14%] xl:right-[13%] 2xl:right-[45%] text-center font-[600] text-[18px] leading-[27px] text-[#9A9A9A]">
                  Minutes
                </p>
              </div>
            </div>
          </div>
          {/* 5th row */}
          <div className="grid md:grid-cols-12 grid-cols-1 font-[poppins]">
            <div className="col-span-6 ml-[5%] pt-[31px] flex flex-col space-y-[23px] justify-start items-start">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                Default Billing*
              </label>
              <div className="flex gap-2">
                <input type="checkbox" className="  " />
                <label className="font-[400] text-[18px] leading-[27px] text-[#374557]">
                  Student Pay Based On Number of lesson taken
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="  " />
                <label className="font-[400] text-[18px] leading-[27px] text-[#374557]">
                  Student Pay the same amount reagardness of number of lesson
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="  " />
                <label className="font-[400] text-[18px] leading-[27px] text-[#374557]">
                  Student Pay on hourely rates
                </label>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" className="  " />
                <label className="font-[400] text-[18px] leading-[27px] text-[#374557]">
                  Don`t create automatcaly charges from the schedule{" "}
                </label>
              </div>
            </div>
            <div className="col-span-6 pt-[31px]  flex flex-col ml-[5%]">
              <div className="flex justify-start  space-x-[18rem]  items-center">
                <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                  Attachments
                </label>
              </div>
              <button className="mt-[16px] flex md:flex-row flex-col gap-2 justify-start items-center p-[17px] w-[50%] max-w-[323px] bg-[#374557]">
                <img src="/images/Vector (2).svg" alt="data" />
                <h1 className=" font-[600] text-[18px] leading-[27px] text-[#FFFFFF]">
                  New Student Attachment
                </h1>
              </button>
            </div>
          </div>
          {/* 6th row */}
          <div className="grid md:grid-cols-12 grid-cols-1">
            <div className="col-span-6 pt-[31px]  flex flex-col ml-[5%] bg-white">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                Make-up creadiets*
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="30 "
                  className="  outline-none font-[600] text-[14px] leading-[21px] text-[#969696]  w-[100%]  max-w-[577px] mt-[16px] p-[12px] border-[1px] border-solid rounded-[5px] border-[#374557]"
                />
                <p className=" font-[600] text-[18px] leading-[27px] text-[#9A9A9A]  right-[9px] md:right-[200] lg:right-[24%] xl:right-[13%] 2xl:right-[45%]  absolute mt-[-36px] ml-[80%] text-center">
                  Minutes
                </p>
              </div>
              <p className="mt-[19px] font-[400] text-[18px] leading-[27px] text-[#374557]">
                Default Billing Student pays based on the number of lessons
                taken Student pays the same amount each month regardless of
                number of lessons Student pays an hourly rate (charges will
                automatically adjust to lesson length) Don't create any charges
                automatically from the schedule Makeup credits are automatically
                adjusted when makeup lessons are taught. Only change this value
                if you wish to override the number of credits assigned to this
                student.
              </p>
            </div>
            <div className="col-span-6 pt-[31px]  flex flex-col items-end justify-end m-4 px-4 bg-white">
              <button className="text-white p-3 bg-[#374557] w-[20%] ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPersonal;
