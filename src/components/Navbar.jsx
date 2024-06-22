import React, { useEffect, useState } from "react";
import "./App.css"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   const handleClick = () => {
     setMenuOpen(!menuOpen);
   };

   useEffect(() => {
     const dropdowns = document.querySelectorAll(".dropdown");
     dropdowns.forEach((dropdown) => {
       dropdown.addEventListener("hide.bs.dropdown", handleDropdownHide);
     });

     const hoverDropdowns = document.querySelectorAll(
       ".dropdown-hover, .dropdown-hover-all .dropdown"
     );
     hoverDropdowns.forEach((dropdown) => {
       dropdown.addEventListener("mouseenter", handleMouseEnter);
       dropdown.addEventListener("mouseleave", handleMouseLeave);
     });

     return () => {
       dropdowns.forEach((dropdown) => {
         dropdown.removeEventListener("hide.bs.dropdown", handleDropdownHide);
       });

       hoverDropdowns.forEach((dropdown) => {
         dropdown.removeEventListener("mouseenter", handleMouseEnter);
         dropdown.removeEventListener("mouseleave", handleMouseLeave);
       });
     };
   }, []);

   const handleDropdownHide = (event) => {
     const target = event.target;
     if (target.classList.contains("has-child-dropdown-show")) {
       target.classList.remove("has-child-dropdown-show");
       event.preventDefault();
     }
     event.stopPropagation();
   };

   const handleMouseEnter = (event) => {
     const dropdown = event.target.querySelector(
       ':scope>[data-bs-toggle="dropdown"]'
     );
     if (dropdown && !dropdown.classList.contains("show")) {
       new window.bootstrap.Dropdown(dropdown).toggle();
       event.target.classList.add("has-child-dropdown-show");
       window.bootstrap.Dropdown.clearMenus();
     }
   };

   const handleMouseLeave = (event) => {
     const dropdown = event.target.querySelector(
       ':scope>[data-bs-toggle="dropdown"]'
     );
     if (dropdown && dropdown.classList.contains("show")) {
       new window.bootstrap.Dropdown(dropdown).toggle();
     }
   };
  return (
    <>
      {/* <Preloader /> */}
      <header className="site_header site_header_2">
        <div className="header_bottom stricky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-5">
                <div className="site_logo">
                  <Link to={"/"}>
                    {/* <svg
                      width="137"
                      height="51"
                      viewBox="0 0 137 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.648 31.996L46.824 35.104C45.564 35.944 44.08 36.364 42.316 36.364C38.816 36.364 36.996 34.292 36.996 30.344V24.044H34.504V20.74H37.024V15.336H40.944V20.74H45.984V24.044H40.944V30.092C40.944 31.884 41.672 32.78 43.1 32.78C43.856 32.78 44.724 32.528 45.648 31.996ZM63.8515 28.02C63.8515 28.552 63.7955 29.14 63.7115 29.756H52.2595C52.8195 31.912 54.3035 33.004 56.7115 33.004C58.3635 33.004 60.3235 32.36 61.6395 31.464L63.2075 34.236C61.2755 35.636 59.0635 36.336 56.5435 36.336C53.8555 36.336 51.8115 35.552 50.3835 34.012C48.9555 32.472 48.2555 30.568 48.2555 28.356C48.2555 26.032 48.9835 24.128 50.4675 22.616C51.9515 21.104 53.8555 20.348 56.2075 20.348C58.4195 20.348 60.2675 21.048 61.6955 22.42C63.1235 23.792 63.8515 25.64 63.8515 28.02ZM56.2075 23.624C54.2195 23.624 52.7355 24.828 52.2595 26.816H60.0155C59.6515 24.828 58.2235 23.624 56.2075 23.624ZM74.4068 36.336C72.0268 36.336 70.0948 35.58 68.5828 34.096C67.0708 32.612 66.3148 30.68 66.3148 28.356C66.3148 26.032 67.0708 24.1 68.6108 22.616C70.1508 21.104 72.1108 20.348 74.5188 20.348C77.6268 20.348 80.3708 21.888 81.6308 24.604L78.4668 26.34C77.5428 24.8 76.2268 24.016 74.5748 24.016C73.3148 24.016 72.2788 24.436 71.4668 25.276C70.6548 26.088 70.2348 27.124 70.2348 28.356C70.2348 29.616 70.6268 30.652 71.4388 31.492C72.2508 32.304 73.2868 32.724 74.4908 32.724C76.0868 32.724 77.7108 31.772 78.3828 30.428L81.5748 32.304C80.2588 34.768 77.5428 36.336 74.4068 36.336ZM88.5059 36H84.5579V14.72H88.3939V22.728C89.2059 21.356 91.0539 20.32 93.2099 20.32C94.8619 20.32 96.2619 20.88 97.4099 21.972C98.5579 23.064 99.1459 24.632 99.1459 26.676V36H95.1979V27.74C95.1979 25.304 93.9379 23.96 92.0059 23.96C89.9059 23.96 88.5059 25.556 88.5059 27.824V36Z"
                        fill="white"
                      />
                      <path
                        d="M110.363 36.336C108.039 36.336 106.163 35.608 104.679 34.152C103.195 32.668 102.467 30.792 102.467 28.524C102.467 26.228 103.223 24.352 104.707 22.868C106.219 21.384 108.151 20.656 110.503 20.656C113.443 20.656 116.131 22.196 117.279 24.548L115.207 25.752C114.171 24.044 112.435 22.952 110.503 22.952C108.907 22.952 107.591 23.484 106.555 24.548C105.519 25.612 104.987 26.928 104.987 28.524C104.987 30.092 105.491 31.408 106.499 32.472C107.535 33.508 108.823 34.04 110.363 34.04C111.315 34.04 112.239 33.788 113.135 33.256C114.031 32.724 114.703 32.08 115.123 31.296L117.195 32.5C115.963 34.768 113.275 36.336 110.363 36.336ZM119.761 28.496C119.761 26.312 120.489 24.464 121.973 22.952C123.457 21.412 125.333 20.656 127.601 20.656C129.869 20.656 131.717 21.412 133.201 22.952C134.685 24.464 135.441 26.312 135.441 28.496C135.441 30.708 134.713 32.584 133.229 34.096C131.745 35.608 129.869 36.364 127.601 36.364C125.333 36.364 123.457 35.608 121.973 34.096C120.489 32.584 119.761 30.708 119.761 28.496ZM132.921 28.496C132.921 26.984 132.417 25.696 131.381 24.604C130.345 23.512 129.085 22.952 127.601 22.952C126.117 22.952 124.857 23.512 123.821 24.604C122.785 25.696 122.281 26.984 122.281 28.496C122.281 30.036 122.785 31.352 123.821 32.444C124.857 33.536 126.117 34.068 127.601 34.068C129.085 34.068 130.345 33.536 131.381 32.444C132.417 31.352 132.921 30.036 132.921 28.496Z"
                        fill="#0E50F2"
                      />
                      <path
                        d="M22.2125 9.19335C22.171 9.19854 22.1347 9.2089 22.0932 9.21409L22.2125 9.19335ZM21.5021 9.33334C21.5487 9.32297 21.5954 9.3126 21.6421 9.30223C21.5954 9.3126 21.5487 9.32297 21.5021 9.33334ZM29.1882 14.1396C23.2322 12.0087 16.6199 14.9899 14.2937 20.9212C14.0912 21.4345 13.9301 21.9582 13.8054 22.4766L9.1651 22.4144C9.35237 21.3619 9.64333 20.3094 10.0484 19.2725C10.5832 17.9141 11.2735 16.6646 12.1037 15.5447C12.9599 14.3833 13.9559 13.3567 15.0556 12.4753L10.6169 4.67745C12.3442 3.29831 13.1273 2.99759 15.1394 2.11619C17.1516 1.23478 19.2777 0.617799 21.4607 0.285975C23.6126 -0.0406629 25.8265 -0.0925102 28.0402 0.156357C30.1814 0.394855 32.3275 0.918513 34.4269 1.74289C36.5262 2.56726 38.4543 3.6405 40.1904 4.91594C41.9836 6.23805 43.5744 7.77792 44.9318 9.47851C45.108 9.70146 45.2841 9.92958 45.4602 10.1681H39.5341C38.9123 9.57702 38.2489 9.01707 37.5441 8.4986C36.1138 7.4461 34.5277 6.56469 32.7964 5.88549C31.0703 5.21147 29.3078 4.78114 27.5451 4.58412C25.7202 4.37673 23.9003 4.42339 22.127 4.693C20.3277 4.96779 18.3779 5.56404 16.7235 6.2899L18.9922 10.1577C19.7856 9.81033 20.5013 9.57184 21.2584 9.39037C24.4422 8.58674 27.9004 8.73191 31.1868 10.0177C31.3112 10.0644 31.4356 10.1162 31.5548 10.1681L29.1882 14.1396ZM45.6138 40.0425C45.5827 40.084 45.5515 40.1307 45.5204 40.1721C44.2388 41.9038 42.7135 43.5007 40.9499 44.911C39.1862 46.3212 37.2932 47.4515 35.3173 48.3174C33.274 49.2143 31.1479 49.8209 28.9908 50.1424C26.8079 50.4742 24.2259 50.469 22.0432 50.2253C20.996 50.0905 19.9592 49.8935 18.9379 49.6343L21.3097 45.6006C21.8696 45.7094 22.4295 45.7924 22.9946 45.8494C24.7884 46.0516 26.5253 46.0102 28.3246 45.7354C30.0979 45.4658 31.8506 44.968 33.5309 44.2318C35.1542 43.5215 36.7153 42.5882 38.1677 41.4268C38.7228 40.9861 39.2467 40.5195 39.7395 40.0373H45.6138L45.6138 40.0425ZM9.32728 28.7865C9.23935 28.4287 9.16698 28.0554 9.105 27.6614C9.06884 27.4332 9.03786 27.1999 9.01726 26.9666L13.6265 27.0288C14.2567 31.0107 16.9195 34.5623 20.942 36.1384C23.9018 37.2946 27.0438 37.1702 29.7561 36.0347L31.9987 40.0425C31.9157 40.0788 31.8327 40.1203 31.7446 40.1566C30.4688 40.7165 29.0998 41.1158 27.6531 41.3335C26.2117 41.5513 24.7807 41.5772 23.3964 41.4217C21.9655 41.2609 20.5762 40.9136 19.2648 40.4003L14.7288 48.1515C12.6709 47.3426 12.018 46.819 10.2559 45.5176C8.48867 44.2162 6.89267 42.6867 5.51455 40.9602C4.15196 39.2596 3.00724 37.3724 2.11667 35.3244C1.25716 33.349 0.63623 31.2337 0.300533 28.999C-0.0351674 26.7696 -0.0701658 24.5609 0.169587 22.4196C0.414568 20.2057 0.955039 18.0592 1.75468 16.032C2.5647 13.9737 3.85701 11.7442 5.15941 9.97625C5.79763 9.13632 6.48767 8.33787 7.22434 7.5809L9.52916 11.6509C9.15561 12.0812 8.80279 12.5271 8.46551 12.9886C7.39141 14.4455 6.56096 15.9646 5.89632 17.66C5.24207 19.3295 4.79515 21.0975 4.59187 22.9225C4.39382 24.6853 4.42386 26.5052 4.69757 28.3406C4.97647 30.176 5.48355 31.9232 6.19291 33.5461C6.92816 35.2259 7.87087 36.7813 8.99513 38.1864C10.1298 39.607 11.6221 40.9965 13.0784 42.0646L15.2998 38.1657C14.1596 37.3257 13.372 36.5221 12.4809 35.4074L15.9615 32.6284L12.4913 35.3815C10.9422 33.4372 9.85473 31.1611 9.31175 28.7398L9.32728 28.7865ZM9.40487 29.0872C9.39452 29.0509 9.38418 29.0146 9.37383 28.9731C9.38418 29.0094 9.39452 29.0509 9.40487 29.0872ZM9.65327 29.896C9.64292 29.8597 9.62738 29.8234 9.61703 29.7923C9.62738 29.8286 9.63773 29.8597 9.65327 29.896Z"
                        fill="#0E50F2"
                      />
                    </svg> */}
                    <img
                      src="./images/Mapol/mapol-logo-lg.png"
                      alt="Mapol Logo"
                      style={{
                        width: "250px",
                        height: "100px",
                        marginLeft: "30px",
                      }}
                    />
                    {/* <img src="../../public/images/Mapol/mapol-logo-lg.png" alt="" /> */}

                    {/* <svg
                      width="137"
                      height="51"
                      viewBox="0 0 137 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45.648 31.996L46.824 35.104C45.564 35.944 44.08 36.364 42.316 36.364C38.816 36.364 36.996 34.292 36.996 30.344V24.044H34.504V20.74H37.024V15.336H40.944V20.74H45.984V24.044H40.944V30.092C40.944 31.884 41.672 32.78 43.1 32.78C43.856 32.78 44.724 32.528 45.648 31.996ZM63.8515 28.02C63.8515 28.552 63.7955 29.14 63.7115 29.756H52.2595C52.8195 31.912 54.3035 33.004 56.7115 33.004C58.3635 33.004 60.3235 32.36 61.6395 31.464L63.2075 34.236C61.2755 35.636 59.0635 36.336 56.5435 36.336C53.8555 36.336 51.8115 35.552 50.3835 34.012C48.9555 32.472 48.2555 30.568 48.2555 28.356C48.2555 26.032 48.9835 24.128 50.4675 22.616C51.9515 21.104 53.8555 20.348 56.2075 20.348C58.4195 20.348 60.2675 21.048 61.6955 22.42C63.1235 23.792 63.8515 25.64 63.8515 28.02ZM56.2075 23.624C54.2195 23.624 52.7355 24.828 52.2595 26.816H60.0155C59.6515 24.828 58.2235 23.624 56.2075 23.624ZM74.4068 36.336C72.0268 36.336 70.0948 35.58 68.5828 34.096C67.0708 32.612 66.3148 30.68 66.3148 28.356C66.3148 26.032 67.0708 24.1 68.6108 22.616C70.1508 21.104 72.1108 20.348 74.5188 20.348C77.6268 20.348 80.3708 21.888 81.6308 24.604L78.4668 26.34C77.5428 24.8 76.2268 24.016 74.5748 24.016C73.3148 24.016 72.2788 24.436 71.4668 25.276C70.6548 26.088 70.2348 27.124 70.2348 28.356C70.2348 29.616 70.6268 30.652 71.4388 31.492C72.2508 32.304 73.2868 32.724 74.4908 32.724C76.0868 32.724 77.7108 31.772 78.3828 30.428L81.5748 32.304C80.2588 34.768 77.5428 36.336 74.4068 36.336ZM88.5059 36H84.5579V14.72H88.3939V22.728C89.2059 21.356 91.0539 20.32 93.2099 20.32C94.8619 20.32 96.2619 20.88 97.4099 21.972C98.5579 23.064 99.1459 24.632 99.1459 26.676V36H95.1979V27.74C95.1979 25.304 93.9379 23.96 92.0059 23.96C89.9059 23.96 88.5059 25.556 88.5059 27.824V36Z"
                        fill="#020842"
                      />
                      <path
                        d="M110.363 36.336C108.039 36.336 106.163 35.608 104.679 34.152C103.195 32.668 102.467 30.792 102.467 28.524C102.467 26.228 103.223 24.352 104.707 22.868C106.219 21.384 108.151 20.656 110.503 20.656C113.443 20.656 116.131 22.196 117.279 24.548L115.207 25.752C114.171 24.044 112.435 22.952 110.503 22.952C108.907 22.952 107.591 23.484 106.555 24.548C105.519 25.612 104.987 26.928 104.987 28.524C104.987 30.092 105.491 31.408 106.499 32.472C107.535 33.508 108.823 34.04 110.363 34.04C111.315 34.04 112.239 33.788 113.135 33.256C114.031 32.724 114.703 32.08 115.123 31.296L117.195 32.5C115.963 34.768 113.275 36.336 110.363 36.336ZM119.761 28.496C119.761 26.312 120.489 24.464 121.973 22.952C123.457 21.412 125.333 20.656 127.601 20.656C129.869 20.656 131.717 21.412 133.201 22.952C134.685 24.464 135.441 26.312 135.441 28.496C135.441 30.708 134.713 32.584 133.229 34.096C131.745 35.608 129.869 36.364 127.601 36.364C125.333 36.364 123.457 35.608 121.973 34.096C120.489 32.584 119.761 30.708 119.761 28.496ZM132.921 28.496C132.921 26.984 132.417 25.696 131.381 24.604C130.345 23.512 129.085 22.952 127.601 22.952C126.117 22.952 124.857 23.512 123.821 24.604C122.785 25.696 122.281 26.984 122.281 28.496C122.281 30.036 122.785 31.352 123.821 32.444C124.857 33.536 126.117 34.068 127.601 34.068C129.085 34.068 130.345 33.536 131.381 32.444C132.417 31.352 132.921 30.036 132.921 28.496Z"
                        fill="#0E50F2"
                      />
                      <path
                        d="M22.2125 9.19335C22.171 9.19854 22.1347 9.2089 22.0932 9.21409L22.2125 9.19335ZM21.5021 9.33334C21.5487 9.32297 21.5954 9.3126 21.6421 9.30223C21.5954 9.3126 21.5487 9.32297 21.5021 9.33334ZM29.1882 14.1396C23.2322 12.0087 16.6199 14.9899 14.2937 20.9212C14.0912 21.4345 13.9301 21.9582 13.8054 22.4766L9.1651 22.4144C9.35237 21.3619 9.64333 20.3094 10.0484 19.2725C10.5832 17.9141 11.2735 16.6646 12.1037 15.5447C12.9599 14.3833 13.9559 13.3567 15.0556 12.4753L10.6169 4.67745C12.3442 3.29831 13.1273 2.99759 15.1394 2.11619C17.1516 1.23478 19.2777 0.617799 21.4607 0.285975C23.6126 -0.0406629 25.8265 -0.0925102 28.0402 0.156357C30.1814 0.394855 32.3275 0.918513 34.4269 1.74289C36.5262 2.56726 38.4543 3.6405 40.1904 4.91594C41.9836 6.23805 43.5744 7.77792 44.9318 9.47851C45.108 9.70146 45.2841 9.92958 45.4602 10.1681H39.5341C38.9123 9.57702 38.2489 9.01707 37.5441 8.4986C36.1138 7.4461 34.5277 6.56469 32.7964 5.88549C31.0703 5.21147 29.3078 4.78114 27.5451 4.58412C25.7202 4.37673 23.9003 4.42339 22.127 4.693C20.3277 4.96779 18.3779 5.56404 16.7235 6.2899L18.9922 10.1577C19.7856 9.81033 20.5013 9.57184 21.2584 9.39037C24.4422 8.58674 27.9004 8.73191 31.1868 10.0177C31.3112 10.0644 31.4356 10.1162 31.5548 10.1681L29.1882 14.1396ZM45.6138 40.0425C45.5827 40.084 45.5515 40.1307 45.5204 40.1721C44.2388 41.9038 42.7135 43.5007 40.9499 44.911C39.1862 46.3212 37.2932 47.4515 35.3173 48.3174C33.274 49.2143 31.1479 49.8209 28.9908 50.1424C26.8079 50.4742 24.2259 50.469 22.0432 50.2253C20.996 50.0905 19.9592 49.8935 18.9379 49.6343L21.3097 45.6006C21.8696 45.7094 22.4295 45.7924 22.9946 45.8494C24.7884 46.0516 26.5253 46.0102 28.3246 45.7354C30.0979 45.4658 31.8506 44.968 33.5309 44.2318C35.1542 43.5215 36.7153 42.5882 38.1677 41.4268C38.7228 40.9861 39.2467 40.5195 39.7395 40.0373H45.6138L45.6138 40.0425ZM9.32728 28.7865C9.23935 28.4287 9.16698 28.0554 9.105 27.6614C9.06884 27.4332 9.03786 27.1999 9.01726 26.9666L13.6265 27.0288C14.2567 31.0107 16.9195 34.5623 20.942 36.1384C23.9018 37.2946 27.0438 37.1702 29.7561 36.0347L31.9987 40.0425C31.9157 40.0788 31.8327 40.1203 31.7446 40.1566C30.4688 40.7165 29.0998 41.1158 27.6531 41.3335C26.2117 41.5513 24.7807 41.5772 23.3964 41.4217C21.9655 41.2609 20.5762 40.9136 19.2648 40.4003L14.7288 48.1515C12.6709 47.3426 12.018 46.819 10.2559 45.5176C8.48867 44.2162 6.89267 42.6867 5.51455 40.9602C4.15196 39.2596 3.00724 37.3724 2.11667 35.3244C1.25716 33.349 0.63623 31.2337 0.300533 28.999C-0.0351674 26.7696 -0.0701658 24.5609 0.169587 22.4196C0.414568 20.2057 0.955039 18.0592 1.75468 16.032C2.5647 13.9737 3.85701 11.7442 5.15941 9.97625C5.79763 9.13632 6.48767 8.33787 7.22434 7.5809L9.52916 11.6509C9.15561 12.0812 8.80279 12.5271 8.46551 12.9886C7.39141 14.4455 6.56096 15.9646 5.89632 17.66C5.24207 19.3295 4.79515 21.0975 4.59187 22.9225C4.39382 24.6853 4.42386 26.5052 4.69757 28.3406C4.97647 30.176 5.48355 31.9232 6.19291 33.5461C6.92816 35.2259 7.87087 36.7813 8.99513 38.1864C10.1298 39.607 11.6221 40.9965 13.0784 42.0646L15.2998 38.1657C14.1596 37.3257 13.372 36.5221 12.4809 35.4074L15.9615 32.6284L12.4913 35.3815C10.9422 33.4372 9.85473 31.1611 9.31175 28.7398L9.32728 28.7865ZM9.40487 29.0872C9.39452 29.0509 9.38418 29.0146 9.37383 28.9731C9.38418 29.0094 9.39452 29.0509 9.40487 29.0872ZM9.65327 29.896C9.64292 29.8597 9.62738 29.8234 9.61703 29.7923C9.62738 29.8286 9.63773 29.8597 9.65327 29.896Z"
                        fill="#0E50F2"
                      />
                    </svg> */}
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                    id="main_menu_dropdown"
                  >
                    <ul className="main_menu_list unordered_list justify-content-center">
                      <li className="dropdown active">
                        <a
                          className="nav-link"
                          href="#"
                          id="home_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Solutions
                        </a>
                        {/* <ul
                          className="dropdown-menu"
                          aria-labelledby="home_submenu"
                        >
                          <li>
                            <a href="index.html">IT Solution</a>
                          </li>
                          <li className="active">
                            <a href="index_software_company.html">
                              Software Company
                            </a>
                          </li>
                          <li>
                            <a href="index_business_consulting.html">
                              Business Consulting
                            </a>
                          </li>
                        </ul> */}
                        <div
                          className="dropdown-menu mega_menu_wrapper p-0"
                          aria-labelledby="services_submenu"
                        >
                          <div className="container">
                            <div className="row justify-content-lg-between">
                              <div className="col-lg-8">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className="megamenu_widget">
                                      <h3 className="megamenu_info_title">
                                        For Industries
                                      </h3>
                                      <ul className="icon_list unordered_list_block">
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Automobiles
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="service_details.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Manufacturing
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="service_details.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Logistics & Supply chain
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="service_details.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Other Industries
                                            </Link>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="megamenu_widget">
                                      <h3 className="megamenu_info_title">
                                        For Initiatives
                                      </h3>
                                      <ul className="icon_list unordered_list_block">
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Safety & Sustainablity
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="fields.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Industry 4.0
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="fields.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              e -Invoice
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="fields.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="fields.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="megamenu_widget">
                                      <h3 className="megamenu_info_title">
                                        For Businesses
                                      </h3>
                                      <ul className="icon_list unordered_list_block">
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Cloud Services
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="pricing.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              IT Consulting Services
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="about.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                        <li>
                                          <span className="icon_list_text">
                                            <Link to={"/Services"}>
                                              Business Suites
                                            </Link>
                                          </span>
                                        </li>
                                        <li>
                                          <a href="service.html">
                                            <span className="icon_list_text"></span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="social_area">
                                  <ul
                                    className="social_icons_block unordered_list"
                                    data-text="Follow Us:"
                                  >
                                    <li>
                                      <a href="https://www.facebook.com/mapolbs/?ref=hl">
                                        <i className="fa-brands fa-facebook-f"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://twitter.com/balakannan_r">
                                        <i className="fa-brands fa-twitter"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://www.linkedin.com/company/mapol-business-solutions-private-limited/">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://plus.google.com/u/0/108740517297471267788/posts">
                                        <i className="fa-brands fa-google-plus"></i>
                                      </a>
                                    </li>
                                  </ul>
                                  <p className="career_link m-0">
                                    Looking for new career?{" "}
                                    <Link to={"/Careers"}>We’re Hiring</Link>
                                  </p>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="megamenu_case bg-primary">
                                  <h3>Computer Software</h3>
                                  <h4>Astarte Medical</h4>
                                  <img
                                    src="./images/case/case_image_4.webp"
                                    alt="Case Image"
                                  />
                                  <a className="btn" href="portfolio.html">
                                    <span
                                      className="btn_label"
                                      data-text="Read Case"
                                    >
                                      Read Case
                                    </span>
                                    <span className="btn_icon">
                                      <i className="fa-solid fa-arrow-up-right"></i>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="company_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Products
                        </a>
                        <div
                          className="dropdown-menu mega_menu_wrapper"
                          aria-labelledby="company_submenu"
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-9">
                                <div className="megamenu_pages_wrapper mb-5">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M14.6435 5.27739L9.44599 1.12239C8.64349 0.477387 7.34599 0.477387 6.55099 1.11489L1.35349 5.27739C0.76849 5.74239 0.39349 6.72489 0.52099 7.45989L1.51849 13.4299C1.69849 14.4949 2.71849 15.3574 3.79849 15.3574H12.1985C13.271 15.3574 14.2985 14.4874 14.4785 13.4299L15.476 7.45989C15.596 6.72489 15.221 5.74239 14.6435 5.27739ZM8.53099 11.8999C8.38099 12.0499 8.19349 12.1249 7.99849 12.1249C7.80349 12.1249 7.61599 12.0499 7.46599 11.9074C7.17349 11.6149 7.17349 11.1424 7.46599 10.8499C7.75849 10.5574 8.23849 10.5574 8.53099 10.8499C8.82349 11.1349 8.82349 11.6074 8.53099 11.8999ZM9.99349 10.1749C9.88099 10.2874 9.73849 10.3474 9.58849 10.3474C9.44599 10.3474 9.31099 10.2949 9.19849 10.1899C8.47099 9.49239 7.52599 9.49239 6.79099 10.1899C6.56599 10.4074 6.21349 10.3999 5.99599 10.1749C5.77849 9.94989 5.78599 9.59739 6.01099 9.37989C7.17349 8.26239 8.80099 8.26239 9.97099 9.37989C10.2035 9.58989 10.211 9.94989 9.99349 10.1749ZM11.5835 8.58489C11.471 8.69739 11.3285 8.75739 11.1785 8.75739C11.036 8.75739 10.8935 8.70489 10.7885 8.59989C10.436 8.25489 10.0385 7.97739 9.61849 7.77489C8.56849 7.27239 7.42099 7.27239 6.37849 7.77489C5.95849 7.97739 5.56849 8.25489 5.20849 8.59989C4.99099 8.81739 4.63099 8.81739 4.41349 8.59239C4.19599 8.36739 4.20349 8.01489 4.42099 7.79739C4.86349 7.36239 5.35849 7.01739 5.89099 6.76239C7.24849 6.10989 8.74849 6.10989 10.0985 6.76239C10.631 7.01739 11.126 7.36239 11.5685 7.79739C11.7935 8.00739 11.801 8.36739 11.5835 8.58489Z"
                                                fill="#0044EB"
                                              />
                                            </svg>
                                          </small>

                                          <small className="iconbox_title">
                                            ERP for Manufacturing
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          Learn more about Techco
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_dollar_2.svg"
                                              alt="Dollar SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            ERP for Logistics
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          Streamlined Pricing
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_chart.svg"
                                              alt="Chart SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            ESG Automation
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          Explore our all overview
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_tag_2.svg"
                                              alt="Event Tag SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            Asset Tracking
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          Explore our work overview
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_user_2.svg"
                                              alt="User Check SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            Paper Production Tracking
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          We are friendly Join our team
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_users.svg"
                                              alt="Users SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            FMEA Insight
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          We are friendly Join our team
                                        </span>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_pen.svg"
                                              alt="Pen SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            Last Mile Delivery
                                          </small>
                                        </span>
                                        <small className="description mb-0">
                                          Happy to help you!
                                        </small>
                                      </Link>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                      <Link
                                        className="iconbox_block_2"
                                        to={"/Services"}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <img
                                              src="./images/icons/icon_pen.svg"
                                              alt="Pen SVG Icon"
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            Vendor Suite
                                          </small>
                                        </span>
                                        <small className="description mb-0">
                                          Happy to help you!
                                        </small>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <ul className="btns_group p-0 unordered_list justify-content-start">
                                  <li>
                                    <Link
                                      className="btn btn-primary"
                                      to={"/contact"}
                                    >
                                      <span
                                        className="btn_label"
                                        data-text="Free Consultation"
                                      >
                                        Free Consultation
                                      </span>
                                      <span className="btn_icon">
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                      </span>
                                    </Link>
                                  </li>
                                  <li>
                                    <div className="review_short_info_2">
                                      <div className="review_admin_logo">
                                        <img
                                          src="./images/clients/client_logo_9.webp"
                                          alt="Client Logo"
                                        />
                                      </div>
                                      <div className="review_info_content">
                                        <ul className="rating_block unordered_list">
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                        </ul>
                                        <div className="review_counter">
                                          From <b>200+</b> reviews
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="review_short_info_2">
                                      <div className="review_admin_logo">
                                        <img
                                          src="./images/clients/client_logo_10.webp"
                                          alt="Client Logo"
                                        />
                                      </div>
                                      <div className="review_info_content">
                                        <ul className="rating_block unordered_list">
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                          <li>
                                            <i className="fa-solid fa-star fa-fw"></i>
                                          </li>
                                        </ul>
                                        <div className="review_counter">
                                          From <b>200+</b> reviews
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <div className="site_author bg-primary">
                                  <div className="author_box">
                                    <div className="author_image bg-light">
                                      <img
                                        src="./images/avatar/avatar_7.webp"
                                        alt="Site Author Image"
                                      />
                                    </div>
                                    <div className="author_box_content">
                                      <h3 className="author_name text-white">
                                        Maverick Phoenix
                                      </h3>
                                      <span className="author_designation text-white">
                                        CEO At Techco
                                      </span>
                                    </div>
                                    <div className="quote_icon">
                                      <img
                                        src="./images/icons/icon_quote.svg"
                                        alt="Quote Icon"
                                      />
                                    </div>
                                  </div>
                                  <p className="mb-0 text-white">
                                    As a CEO at Techco I have been voice crying
                                    in the wilderness, trying to make
                                    requirements clear, use every minute to
                                    deliver the result, and not reinvent the
                                    wheel. Here at Techco, I made that possible
                                    for the clients.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="portfolio_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Resources
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="portfolio_submenu"
                        >
                          <li>
                            <Link to={"/Industry4"}>Industry 4.0</Link>
                          </li>
                          <li>
                            <Link to={"/Sustainability"}>Sustainability</Link>
                          </li>
                          <li>
                            <Link to={"/Casestudies"}>Case Studies</Link>
                          </li>
                          <li>
                            <Link to={"/Blogs"}>Blogs </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="services_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Clients
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="portfolio_submenu"
                        >
                          <li>
                            <Link to={"/SuccessStories"}>
                              {" "}
                              Success Stories{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to={"/Clientsbyindustry"}>
                              Clients by Industries
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="pages_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Company
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="pages_submenu"
                        >
                          <li>
                            <Link to={"/Aboutus"}> Why Mapol..?</Link>
                          </li>
                          {/* <li className="dropdown">
                            <a
                              className="nav-link"
                              href="#"
                              id="blog_submenu"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Blogs
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="blog_submenu"
                            >
                              <li>
                                <a href="blog.html">Our Blogs</a>
                              </li>
                              <li>
                                <a href="blog_details.html">Blod details</a>
                              </li>
                            </ul>
                          </li> */}
                          <li>
                            <Link to={"/Team"}> Leadership Team </Link>
                          </li>
                          <li>
                            <Link to={"/Business_approach"}>
                              Business Approach{" "}
                            </Link>
                          </li>
                          <li>
                            <a href="contact.html">Our Partners</a>
                          </li>

                          <li>
                            <Link to={"/Careers"}>
                              Careers
                              <small className="badge bg-danger-subtle text-danger">
                                We’re Hiring
                              </small>
                            </Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                      {/* <li>
                        <a href="contact.html">Contact</a>
                      </li> */}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-lg-3 col-5">
                <ul className="header_btns_group unordered_list justify-content-end">
                  <li>
                    <button
                      className="mobile_menu_btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#main_menu_dropdown"
                      aria-expanded={menuOpen}
                      aria-label="Toggle navigation"
                      onClick={handleClick}
                    >
                      <i
                        className={
                          menuOpen ? "fa-solid fa-xmark" : "far fa-bars"
                        }
                      ></i>
                    </button>
                  </li>
                  <li>
                    <Link className="btn btn-primary" to="/contact">
                      <span className="btn_label" data-text="Get Started">
                        Get Started
                      </span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
