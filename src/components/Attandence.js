import React from "react";
import { NavLink } from "react-router-dom";
import Circularbar from "./Circularbar";

function Attandence() {
  return (
    <div className="font-[poppins] ml-[5%] max-ml-[110px] mr-[3%]  max-mr-[97px] mt-[97px] mb-[97px]">
      <div className="animate-bounce text-red-500">only for desktop</div>
      <div className=" relative bg-[] font-[poppins]">
        <div className="">
          <img src="/images/image 72.svg" alt="data" className="w-[100vw]" />
          <img
            src="/images/edit-246 1.svg" alt="data"
            className="absolute  right-2 top-[16%] md:top-[50%]  lg:top-[50%] xl:top-[65%] w-[43px]"
          />
          <img
            src="/images/Avatar.svg" alt="data"
            className="w-[5]  h-[15%] md:mt-[-3%] mt-[-1%] scale-[200%] ml-[4%]  rounded-full absolute  border-solid border-[2px] border-[#374557] "
          />
        </div>
        <div className="w-[100%] h-[81px] bg-[#FFFFFF] flex pl-[12%] justify-start items-center gap-[5%]">
          <NavLink to="/">
            <button className="leading-[32px] tracking-[-0.02em] text-[16px] font-[600] rounded-[5px] md:pl-[17px]  md:pr-[17px]  md:h-[36px] text-center  max-w-[103px] text-[#374557] [#FFFFFF]">
              Personal
            </button>
          </NavLink>
          <button className="leading-[32px] px-2 text-white bg-[#374557] tracking-[-0.02em] text-[16px] font-[600] rounded-[5px] md:pl-[17px]  md:pr-[17px]  md:h-[36px]  ">
            Attendence & Notes
          </button>
          {/* <button className="leading-[32px] text-[#374557] tracking-[-0.02em] text-[16px] font-[600] rounded-[5px] md:pl-[17px]  md:pr-[17px]  md:h-[36px]  ">
            Study Logs
          </button>
          <button className="leading-[32px] text-[#374557] tracking-[-0.02em] text-[16px] font-[600] rounded-[5px] md:pl-[17px]  md:pr-[17px]  md:h-[36px]  ">
            Option
          </button> */}
        </div>
      </div>
      {/* first table */}
      <div className="grid md:grid-cols-12 grid-cols-1 mt-[55px] space-x-[28px]">
        <div className="col-span-8 pl-[8]">
          <table className="bg-[#FFFFFF] w-[100%] rounded-[20px]">
            <tr className="font-[600] text-[18px] leading-[27px] text-[#374557]">
              <th className=" p-[43px] ">Event</th>
              <th className=" p-[43px] ">Date/Time</th>
              <th className=" p-[43px] ">Attandance</th>
              <th className=" p-[43px] ">Notes</th>
            </tr>
            <tr className="text-center pt-[46px] border-l-[#374557] border-[#DBDBDB] border-r-[0px] border-[1px] border-l-[5px] font-[400] text-[14px] leading-[21px] text-[#374557]">
              <td className=" p-[43px] flex gap-[50px]">
                <img src="/images/Group 7227.svg" alt="data" />
                Lesson
              </td>
              <td className=" p-[43px] ">22/03/2022 19:45</td>
              <td className=" p-[43px] ">Present</td>
              <td className=" p-[43px] ">Present</td>
            </tr>
            <tr className="text-center pt-[46px] font-[400] text-[14px] leading-[21px] text-[#374557]">
              <td className=" p-[43px] flex gap-[50px]">
                <img src="/images/Group 7227.svg" alt="data"/>
                Lesson
              </td>
              <td className=" p-[43px] ">22/03/2022 19:45</td>
              <td className=" p-[43px] ">Present</td>
              <td className=" p-[43px] ">Present</td>
            </tr>
            <tr className="text-center pt-[46px] border-l-[#374557] border-[#DBDBDB] border-r-[0px] border-[1px] border-l-[5px] font-[400] text-[14px] leading-[21px] text-[#374557] ">
              <td className=" p-[43px] flex gap-[50px]">
                <img src="/images/Group 7227.svg" alt="data"/>
                Lesson
              </td>
              <td className=" p-[43px]">22/03/2022 19:45</td>
              <td className=" p-[43px]">Present</td>
              <td className=" p-[43px]">Present</td>
            </tr>
            <tr className="text-center pt-[46px] font-[400] text-[14px] leading-[21px] text-[#374557]">
              <td className=" p-[43px] flex gap-[50px]">
                <img src="/images/Group 7227.svg" alt="data"/>
                Lesson
              </td>
              <td className=" p-[43px]">22/03/2022 19:45</td>
              <td className=" p-[43px]">Present</td>
              <td className=" p-[43px]">Present</td>
            </tr>
          </table>
        </div>
        {/* second grid col */}
        <div className="col-span-4 w-[93%] h- bg-[#FFFFFF] font-[poppins]">
          <div className="ml-[17px] mt-[16px] mr-[18px] mb-[26px]">
            <h1 className="font-[600] text-[22px] leading-[33px] text-[#374557]">Attandance Report</h1>
            {/* second */}
            <div className="flex justify-start items-center gap-5">
              {/* <img src="/images/Ellipse.svg" className="w-[100px] h-[170px]" /> */}
              <div className="lg:w-[100%] xl:w-[20%] min-w-[100px] h-[170px] pt-[25px] justify-center items-center" >
                <Circularbar className=""/>
              </div>
              <div>
                <h1 className="font-[600] text-[18px] leading-[27px] text-[#374557]">
                  Attendance Report 80% attendance over the last 90 days.
                </h1>
                <p className="font-[400] text-[14px] leading-[21px] text-[#A098AE] mt-[10px]">
                  Muhammad attended 1 of 1 scheduled events (0 absences)
                </p>{" "}
              </div>
            </div>
            {/* third */}
            <div className="flex flex-col gap-[4px] mt-[19px]">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">Start</label>
              <input type="date" className="border-[1px] border-solid pr-2 pl-[11px] pt-[15px] pb-[11px] border-[#374557] rounded-[5px]"/>
            </div>
            {/* 4th */}
            <div className="flex flex-col gap-[4px] mt-[19px]">
              <label className="font-[600] text-[18px] leading-[27px] text-[#374557]">End</label>
              <input type="date" className="border-[1px] border-solid pr-2 pl-[11px] pt-[15px] pb-[11px] border-[#374557] rounded-[5px]"/>
            </div>
            <div className="flex justify-between mt-[18px] w-[100%]">
              <div className="flex gap-[4px]">
                <input type="checkbox"/>
                <label className="font-[400] text-[13px] leading-[20px] text-[#606060]">Student Notes</label>
              </div>
              <div className="flex gap-[4px]">
                <input type="checkbox" className="text-[#969696] font-[400] text-[14px]"/>
                <label className="font-[400] text-[13px] leading-[20px] text-[#606060]">Parent Notes</label>
              </div>
              <div className="flex gap-[4px]">
                <input type="checkbox"/>
                <label className="font-[400] text-[13px] leading-[20px] text-[#606060]">Private Notes</label>
              </div>
            </div>
            <button className="w-[100%] bg-[#374557] flex justify-center items-center gap-[10px] mt-[22px] pt-[6px] pb-[6px] rounded-md">
              <img src="/images/vector (4).svg" alt="data"/> <span className="font-[600] text-[18px] leading-[27px] text-[#FFFFFF]">Print</span>
            </button>
          </div>
        </div>
        {/* second grid col end*/}
      </div>
      {/* second table start */}
      <div className="w-[100%] mt-[23px] bg-white">
        <table className="w-[100%] text-center">
          <tr className="font-[600] text-[18px] leading-[27px] text-[#374557] border-[#DBDBDB] border-b-[1px]">
            <th className="p-[40px]">Event</th>
            <th className="p-[40px] ">Date/Time</th>
            <th className="p-[40px]">Attendance</th>
            <th className="p-[40px]">Attendance</th>
            <th className="p-[40px]">Notes</th>
          </tr>
          <tr className="font-[400] text-[14px] leading-[21px] text-[#374557] border-[#DBDBDB] border-b-[1px]">
            <td className="p-[30px] ">
              <div className="flex justify-center items-center gap-[37px]">
                <img src="/images/Vector (3).svg" alt="data" className="" />
                Lesson
              </div>
            </td>
            <td className="p-[40px] flex justify-center items-center gap-[39px] ">
              <input type="checkbox" />
              Date/Time
            </td>
            <td className="p-[40px]">Present</td>
            <td className="p-[40px]">Present</td>
            <td className="p-[40px]">Present</td>
          </tr>
          <tr className="font-[400] text-[14px] leading-[21px] text-[#374557] border-[#DBDBDB] border-b-[1px]">
            <td className="p-[30px] ">
              <div className="flex justify-center items-center gap-[37px]">
                <img src="/images/Vector (3).svg"  alt="data" className=""/>
                Lesson
              </div>
            </td>
            <td className="p-[40px] flex justify-center items-center gap-[39px] ">
              <input type="checkbox" />
              Date/Time
            </td>
            <td className="p-[40px]">Present</td>
            <td className="p-[40px]">Present</td>
            <td className="p-[40px]">Present</td>
          </tr>
          <tr className="font-[400] text-[14px] leading-[21px] text-[#374557] border-[#DBDBDB] border-b-[1px]">
            <td className="p-[30px] ">
              <div className="flex justify-center items-center gap-[37px]">
                <img src="/images/Vector (3).svg" className="" alt="data" />
                Lesson
              </div>
            </td>
            <td className="p-[40px] flex justify-center items-center gap-[39px] ">
              <input type="checkbox" />
              Date/Time
            </td>
            <td className="p-[40px]">Present</td>
            <td className="p-[40px]">Present</td>
            <td className="p-[40px]">Present</td>
          </tr>
        </table>
      </div>
      {/* second table end */}
    </div> //main div
  );
}

export default Attandence;
