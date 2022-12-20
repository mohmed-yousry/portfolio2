const selectCode = document.querySelector("#code") ; 
const contryCode = document.querySelector("#contry-code")
window.addEventListener("load" , () => {
  if(selectCode != null) {
    getcounttry() ;
  }
})
// swiper all page 
if(document.querySelector(".swiper-ustomer") != null) {
    const swiperCustomer = new Swiper(".swiper-ustomer", {
        effect: "cards",
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
          },
        
      });

}
if(document.querySelector(".swiper-select-section") != null) {
    const swiperCustomer = new Swiper(".swiper-select-section", {
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          },
      });
}

if(document.querySelector(".mySwiperTeam") != null) {
    let mySwiperTeam = new Swiper(".mySwiperTeam", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      
        breakpoints: {
            400: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      
      });

    }

    if(document.querySelector(".service-swiper")) {
      let serviceSwiper = new Swiper(".service-swiper", {
          loop : true ,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            350: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          },
        });
    
    }
// swiper all page 

// genril
function getcounttry () {
  fetch(`./code.json`).then((data) => data.json()).then((allData)=> {
      allData.forEach(element => {
          let option = document.createElement("option") ; 
          option.setAttribute("contry" , element.name) ;
          if(option.getAttribute("contry") == contryCode.value) {
            option.setAttribute("selected" , "")
          }
          option.value = element.dialCode ; 
          option.innerHTML = `
          <p class="text-gray-900 leading-none text-xs">${element.isoCode} (${element.dialCode}) </p>
          `
          selectCode.appendChild(option)
          
      });
  })
}
// handle nav 
    const openMenuMobile = document.querySelector(".open-menu-mobile") ;
    const closeMenuMobile = document.querySelector(".close-menu-mobile") ;
    const links = document.querySelector("nav .links ul") ; 
    const overlayMobile = document.querySelector("nav .links ul .overlay-mobile")
    openMenuMobile.addEventListener("click" , () => {
      if(document.querySelector("html").dir == "rtl") {
        links.style.right = "0px" ;
        overlayMobile.classList.remove("hidden")
      } else {
        links.style.left = "0px" ;
        overlayMobile.classList.remove("hidden")
      }
    })
    
    function closeMenuMobileFun () {
      if(document.querySelector("html").dir == "rtl") {
        links.style.right = "-200%" ;
        overlayMobile.classList.add("hidden")
         
      } else {
        links.style.left = "-200%" ;
        overlayMobile.classList.add("hidden")
        
      }
    }
    closeMenuMobile.addEventListener("click" , closeMenuMobileFun )
    overlayMobile.addEventListener("click" , closeMenuMobileFun )
// handle nav 
// genril
// index page 
  // Statistics section 
  let StatisticsSection = document.querySelector("section.Statistics");
  let nums = document.querySelectorAll(".Statistics .cards .num");
let started = false; // Function Started ? No
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
if(StatisticsSection != null) {
  window.onscroll = function () {
    if (window.scrollY >= StatisticsSection.offsetTop - 600) {
      if (!started) {
          setTimeout(() => {
            nums.forEach((num) => startCount(num));
            
          }, 1200);
      }
      started = true;
    }
  };
}
// Statistics section 

// Recent Project section
  const allBtnFilter = Array.from(document.querySelectorAll(".Recent-Project .swiper-select-section .swiper-slide")) ; 
  const allCardsFilter = Array.from(document.querySelectorAll(".Recent-Project  .allCards a"))
  // if(allBtnFilter.length > 0) {
  //   allBtnFilter.forEach(btn => {
  //     btn.addEventListener("click" , () => {
  //       document.querySelector(".Recent-Project .swiper-select-section .swiper-slide.active-filter").classList.remove("active-filter")
  //       btn.classList.add("active-filter")
  //       const targetBtn = btn.getAttribute("target") ; 
  //       allCardsFilter.forEach(e=> {
  //         e.style.transform = "scale(0)" ; 
  //         e.classList.remove("hidden")
  //         setTimeout(() => {
  //           e.style.transform = "scale(1)" ; 
            
  //         }, 0);
  //         if(e.getAttribute("cat") != targetBtn ) {
  //           e.classList.add("hidden")
  //         } 
  //         if (targetBtn == "all") {
  //           e.classList.remove("hidden")
  //         }
  //       })
  //     })
  //   })
  // }


  function filterCatgory (btnArr , cardsArr ) {
    if(btnArr.length > 0) {
      btnArr.forEach(btn => {
        btn.addEventListener("click" , () => {
          document.querySelector(".active-filter").classList.remove("active-filter")
          btn.classList.add("active-filter")
          const targetBtn = btn.getAttribute("target") ; 
          cardsArr.forEach(e=> {
            e.style.transform = "scale(0)" ; 
            e.classList.remove("hidden")
            setTimeout(() => {
              e.style.transform = "scale(1)" ; 
              
            }, 0);
            if(e.getAttribute("cat") != targetBtn ) {
              console.log(e);
              e.classList.add("hidden")
            } 
            if (targetBtn == "all") {
              e.classList.remove("hidden")
            }
          })
        })
      })
    }
  
  }

  filterCatgory(allBtnFilter , allCardsFilter )
// Recent Project section
// index page 


// prodects
const gridAndFlexBtn = Array.from(document.querySelectorAll(".show-options i")) ; 
const CardProdects = document.querySelector(".cards-prodects") ; 

if(gridAndFlexBtn.length > 0) {
  const allCardProdects = Array.from(document.querySelectorAll(".cards-prodects .card")) ; 
  gridAndFlexBtn.forEach(btn => {
    btn.addEventListener("click" , () => { 
      let active = "grid" ;
      // togle class active for btns
      const activeNow =  document.querySelector(".show-options i.flex-grid") ; 
      activeNow.classList.remove("flex-grid") ; 
      if(btn.classList.contains("grid-show")) {
        active = "grid"
      } else {
        active = "list"
      }
      btn.classList.add("flex-grid")
      // togle class active for btns
      // change style grid or flex 
      if(active != "grid") {
        CardProdects.classList.replace("cards-grid" , "cards-flex")
        allCardProdects.forEach(e=> {
          e.querySelector(".text").style.width = "54%" ; 
          e.classList.add("card-flex") ; 
        })

      } else {
        CardProdects.classList.replace("cards-flex" , "cards-grid")
        allCardProdects.forEach(e=> {
          e.querySelector(".text").style.width = "100%" ; 
          e.classList.remove("card-flex") ; 
        })
      }
      // change style grid or flex 
    })
  })
}

const allBtnFilterProdects = Array.from(document.querySelectorAll(".prodects  .filter-prodects div div")) ; 
const allCardsFilterProdects = Array.from(document.querySelectorAll(".prodects  .cards-prodects a")) ;
const selectFilterProdects = document.querySelector(".filter-prodects select") ; 
// filter mobile
if(selectFilterProdects != null) {
  selectFilterProdects.addEventListener("change" , (sel) => {
    const active = sel.target.value ; 
    allCardsFilterProdects.forEach(e=> {
      e.style.transform = "scale(0)" ; 
      e.classList.remove("hidden")
      setTimeout(() => {
        e.style.transform = "scale(1)" ; 
        
      }, 0);
      if(e.getAttribute("cat") != active ) {
        e.classList.add("hidden")
      } 
      if (active == "all") {
        e.classList.remove("hidden")
      }
    })
  })
}
// filter pc 
filterCatgory(allBtnFilterProdects , allCardsFilterProdects ) ; 

// prodects
