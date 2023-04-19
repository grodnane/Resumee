const styles = {
    boxWidth: "xl:max-w-[1280px] w-full  ",

    logo:"logo font-bold xl:text-[48px] text-blue-700 w-fit flex  ",
    heading1: "font-h1 bold xs:text-[50px] text-[40px]  w-full",
    typewriter: "bold unrderline text-4xl ",

    heading2: " text-gray-900 font-semibold xs:text-[40px] text-[30px] text-gray-900 xs:leading-[76.8px] leading-[66.8px]",
    heading4:"text-4xl font-semibold text-gray-500 justify-center text-center items-center",
    heading5:"text-xl font-semibold text-gray-500 justify-center text-center items-center sm:text-l",
    paragraph: " font-normal text-dimWhite text-[18px] leading-[30.8px]",

    contactForm:"outline-none bg-slate-400/10 rounded-sm border-b w-full px-6 py-4 text-gray-300 placeholder-gray-500 focus:text-[#895785] hover:border-[#653565]",

    ul:"flex flex-col justify-evenly items-center mt-6 px-4 text-xl list-disc",
    li:" flex justify-center items-center text-[20px] w-fit  p-1",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    hero:"flex flex-col justify-center items-center ",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
    
    page:"bg-gray-800 dark:bg-gray-800 dark:text-gray-200 text-gray-200 h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-600 scrollbar-thumb-[#653565]",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    navButtons: `flex flex-row space-between justify-center items-center whitespace-nowrap`,
    heroButton: `px-8 mt-6 py-2 border border-[#242424] rounded-full uppercase text-[10px] 
    tracking-widest text-gray-400 transition-all hover:border-[#F7AB0A]/40`,

    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    
    herotext:`w-10/12 p-8` ,
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;