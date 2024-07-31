import { useEffect, useRef, useState } from "react";
import dataSlider from "./Slider.data.mocks"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

interface Slider {
  id?: string;
  arrow?: boolean;
  type?: "default" | "dots" | "dotsWithImage";
}

//@ts-ignore
let slideInterval;

const Slider: React.FC<Slider> = ({ 
  id = "sliders",
  arrow = true,
  type = "default",
}) => { 
  const setCurrentIndex = (value: string) => {
    document.getElementById(id)?.setAttribute("data-index", value);
  }
  const getCurrentIndex = (): string => {
    return document.getElementById(id)?.getAttribute("data-index") ?? '0';
  };
  
  const [sliderData, setSliderData] = useState(dataSlider.imgs[0]);

  //Slider geçiş efekti için kullanıldı
  const slideRef = useRef<HTMLDivElement>(null);
  const removeAnimation = () => {
    slideRef.current!.classList.remove("fade-anim");
  }; 

  useEffect(()=> {
    slideRef.current!.addEventListener("animationend", removeAnimation);
    slideRef.current!.addEventListener("mouseenter", pauseSlider);
    slideRef.current!.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  },[])

  //oto slider için kullanıldı
  const startSlider = () => {
    slideInterval = setInterval(() => {
      sliderArrow(true);
    }, 5000);
  }

  const pauseSlider = () => {
    //@ts-ignore
    clearInterval(slideInterval);
  };

  //@ts-ignore
  const handleClick = (index) => {
    const slider = dataSlider.imgs[index];
    setSliderData(slider);
    setCurrentIndex(index);
    slideRef.current!.classList.add("fade-anim");
  };

  //Slider geçiş okları için kullanıldı
  const sliderArrow = (type: boolean) => {
    const currentIndex: number = parseInt(getCurrentIndex());
    let index = 0;
    type ? (index = currentIndex + 1) : (index = currentIndex - 1);
    setCurrentIndex(index.toString());
    slideRef.current!.classList.add("fade-anim");
    if (dataSlider.imgs[index]) {
      setSliderData(dataSlider.imgs[index]);
     slideRef.current!.classList.add("fade-anim");
    } 
  };
  

  return (
    <div id={id} className="my-4 relative" data-index="0">
      <div ref={slideRef} className="relative overflow-hidden rounded-t-md ">
        <a href={sliderData.link}>
          <img
            src={sliderData.value}
            height={300}
            width="100%"
            alt={sliderData.value}
            className="hover:scale-105 duration-1000 rounded-t-md"
          />
        </a>
        {/* slider yazı alanı */}
        {sliderData.title && (
          <div className="static mx-4 md:mx-0 md:absolute items-start justify-center flex-col md:top-[50%] md:translate-y-[-50%] md:left-20 md:z-10 md:text-[#444444] bg-transparent rounded-md md:bg-white max-w-[450px] p-2 lg:p-5 md:border ">
            {sliderData.title && (
              <div className="text-[#444444] text-lg font-light mt-5 md:mt-0 pb-1 md:pb-5">
                {sliderData.title}
              </div>
            )}
            {sliderData.description && (
              <div className="text-[#444444] text-[26px] font-semibold mt-5 md:mt-0 pb-2 md:pb-5">
                {sliderData.description}
              </div>
            )}
            {sliderData.detail && (
              <div className="text-[#444444] text-xs font-light mt-5 md:mt-0 pb-4 md:pb-10">
                {sliderData.detail}
              </div>
            )}
            {sliderData.button && (
              <button className="flex items-center justify-between bg-[#444444] text-white font-semibold px-10 py-2 rounded-md mt-5 hover:bg-orange-500 duration-150">
                {sliderData.button}
                <FaLongArrowAltRight />
              </button>
            )}
          </div>
        )}
      </div>
      {/* Slider dotslar */}
      {type == "dots" &&
        dataSlider.imgs.map((data, i) => (
          <button
            key={data.id}
            className={
              sliderData.id == i
                ? "border-2 bg-white rounded-full border-orange-500 mx-1 mt-2 w-4 h-4"
                : "w-3 h-3 rounded-full bg-orange-500 mx-1 mt-2"
            }
            //@ts-ignore
            onClick={() => handleClick(i)}
          >
            <span className="hidden">{sliderData.title}</span>
          </button>
        ))}
      <div className="flex items-center justify-center gap-x-2 bg-white rounded-b-md">
        {/* Slider küçük resimler  */}
        {type == "dotsWithImage" &&
          dataSlider.imgs.map((data, i) => (
            <div
              key={data.id}
              className="hidden md:block my-2 border-[4px] border-[#FF6700] rounded-full object-cover md:hover:scale-105 duration-1000"
            >
              <img
                src={data.smallvalue}
                alt={data.value}
                width={70}
                height={70}
                onClick={() => handleClick(i)}
                className={sliderData.id == i ? "sliderClicks" : ""}
              />
            </div>
          ))}
        {/* Slider ileri geri okları*/}
        {arrow && (
          <>
            <div className="absolute left-0 top-[-50%] md:top-[77%] flex items-center justify-between bottom-0 group">
              <button
                className="md:w-20 md:h-28 rounded-bl-xl rounded-tr-xl flex items-center justify-center text-white md:text-orange-500 md:bg-transparent md:group-hover:text-white md:group-hover:bg-white md:hover:shadow-lg md:group-hover:border duration-700 transition outline-none"
                onClick={() => sliderArrow(false)}
              >
                <div className="md:group-hover:bg-orange-500 w-[50px] rounded-full duration-150 mb-[-25px]">
                  <FaLongArrowAltLeft size={30} />
                </div>
              </button>
            </div>
            <div className="absolute right-0 top-[-50%] md:top-[77%] flex items-center justify-between bottom-0 group">
              <button
                className="md:w-20 md:h-28 rounded-br-xl rounded-tl-xl flex items-center justify-center text-white md:text-orange-500 md:bg-transparent md:group-hover:text-white md:group-hover:bg-white md:hover:shadow-lg md:group-hover:border duration-700 transition outline-none"
                onClick={() => sliderArrow(true)}
              >
                <div className="md:group-hover:bg-orange-500 w-[50px] rounded-full flex items-center justify-end duration-150 mb-[-25px]">
                  <FaLongArrowAltRight size={30} />
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slider;
