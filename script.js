document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       HEADER SHADOW
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.08)";

        } else {

            header.style.boxShadow = "none";
        }

    });

    /* =========================
       HERO IMAGE CHANGE
    ========================== */

    window.changeImage = function(imageSrc){

        const mainImage =
        document.querySelector(".main-image img");

        if(mainImage){

            mainImage.src = imageSrc;
        }
    };

    /* =========================
       FAQ ACCORDION
    ========================== */

    const faqItems =
    document.querySelectorAll(".faq-item");

    faqItems.forEach((item)=>{

        const question =
        item.querySelector(".faq-question");

        question.addEventListener("click",()=>{

            faqItems.forEach((faq)=>{

                if(faq !== item){

                    faq.classList.remove("active");

                    faq.querySelector("span").textContent = "+";
                }

            });

            item.classList.toggle("active");

            const icon = item.querySelector("span");

            if(item.classList.contains("active")){

                icon.textContent = "−";

            }else{

                icon.textContent = "+";
            }

        });

    });

    /* =========================
       INDUSTRY SLIDER
    ========================== */

    const track =
    document.querySelector(".industry-track");

    const nextBtn =
    document.querySelector(".next-btn");

    const prevBtn =
    document.querySelector(".prev-btn");

    if(track && nextBtn && prevBtn){

        let currentSlide = 0;

        const cards =
        document.querySelectorAll(".industry-card");

        const totalSlides = cards.length;

        nextBtn.addEventListener("click",()=>{

            currentSlide++;

            if(currentSlide > totalSlides - 1){

                currentSlide = 0;
            }

            updateSlider();

        });

        prevBtn.addEventListener("click",()=>{

            currentSlide--;

            if(currentSlide < 0){

                currentSlide = totalSlides - 1;
            }

            updateSlider();

        });

        function updateSlider(){

            const cardWidth =
            cards[0].offsetWidth + 24;

            track.style.transform =
            `translateX(-${currentSlide * cardWidth}px)`;
        }

    }

    /* =========================
       SCROLL ANIMATION
    ========================== */

    const fadeElements =
    document.querySelectorAll(".fade-up");

    const observer =
    new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");
            }

        });

    },{
        threshold:0.15
    });

    fadeElements.forEach((element)=>{

        element.classList.add("hidden");

        observer.observe(element);

    });

    /* =========================
       MANUFACTURING TABS
    ========================== */

    const tabs =
    document.querySelectorAll(".process-tab");

    const title =
    document.querySelector(".manufacturing-left h3");

    const desc =
    document.querySelector(".manufacturing-left p");

    const list =
    document.querySelector(".manufacturing-list");

    const image =
    document.querySelector(".manufacturing-image img");

    const processData = [

        {
            title:"High-Grade Raw Material Selection",

            desc:"Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",

            points:[
                "PE100 grade material",
                "Optimal molecular weight distribution"
            ],

            image:"assets/images/process1.jpg"
        },

        {
            title:"Precision Extrusion",

            desc:"Advanced extrusion systems ensure dimensional accuracy and structural consistency.",

            points:[
                "Uniform material flow",
                "High-speed extrusion"
            ],

            image:"assets/images/process2.jpg"
        },

        {
            title:"Vacuum Cooling",

            desc:"Cooling systems maintain perfect pipe dimensions and prevent deformation.",

            points:[
                "Rapid cooling",
                "Shape stability"
            ],

            image:"assets/images/process3.jpg"
        },

        {
            title:"Accurate Sizing",

            desc:"Precision sizing guarantees consistent pipe diameter and thickness.",

            points:[
                "Perfect calibration",
                "Dimensional accuracy"
            ],

            image:"assets/images/process4.jpg"
        },

        {
            title:"Quality Control",

            desc:"Every pipe undergoes rigorous testing before packaging.",

            points:[
                "Pressure testing",
                "Leak inspection"
            ],

            image:"assets/images/process5.jpg"
        },

        {
            title:"Automated Marking",

            desc:"Laser marking systems ensure clear product identification.",

            points:[
                "Permanent markings",
                "Batch tracking"
            ],

            image:"assets/images/process6.jpg"
        },

        {
            title:"Precision Cutting",

            desc:"Automated cutting ensures accurate pipe lengths.",

            points:[
                "Clean cutting",
                "Exact dimensions"
            ],

            image:"assets/images/process7.jpg"
        },

        {
            title:"Secure Packaging",

            desc:"Final products are packed securely for transportation.",

            points:[
                "Protective packaging",
                "Damage prevention"
            ],

            image:"assets/images/process8.jpg"
        }

    ];

    tabs.forEach((tab,index)=>{

        tab.addEventListener("click",()=>{

            tabs.forEach((btn)=>{

                btn.classList.remove("active");
            });

            tab.classList.add("active");

            title.textContent =
            processData[index].title;

            desc.textContent =
            processData[index].desc;

            image.src =
            processData[index].image;

            list.innerHTML = "";

            processData[index].points.forEach((point)=>{

                const li =
                document.createElement("li");

                li.textContent = point;

                list.appendChild(li);

            });

        });

    });

    /* =========================
       FORM VALIDATION
    ========================== */

    const forms =
    document.querySelectorAll("form");

    forms.forEach((form)=>{

        form.addEventListener("submit",(e)=>{

            e.preventDefault();

            const inputs =
            form.querySelectorAll("input, textarea");

            let valid = true;

            inputs.forEach((input)=>{

                if(input.value.trim() === ""){

                    valid = false;

                    input.style.borderColor = "red";

                }else{

                    input.style.borderColor = "#dcdcdc";
                }

            });

            if(valid){

                alert("Form submitted successfully!");

                form.reset();
            }

        });

    });

    // =========================
    // DOWNLOAD MODAL
    // =========================

    const downloadBtns = document.querySelectorAll(
    '.open-download-modal'
    );

    const downloadModal = document.getElementById(
    'downloadModal'
    );

    // =========================
    // QUOTE MODAL
    // =========================

    const quoteBtns = document.querySelectorAll(
    '.open-quote-modal'
    );

    const quoteModal = document.getElementById(
    'quoteModal'
    );

    // =========================
    // OPEN DOWNLOAD MODAL
    // =========================

    downloadBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            downloadModal.classList.add('active');
        });
    });

    // =========================
    // OPEN QUOTE MODAL
    // =========================

    quoteBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            quoteModal.classList.add('active');
        });
    });

    // =========================
    // CLOSE MODALS
    // =========================

    const closeButtons = document.querySelectorAll(
    '.close-modal'
    );

    closeButtons.forEach(btn => {

        btn.addEventListener('click', () => {

            downloadModal.classList.remove('active');

            quoteModal.classList.remove('active');
        });
    });

    // =========================
    // CLICK OUTSIDE TO CLOSE
    // =========================

    window.addEventListener('click', (e) => {

        if(e.target === downloadModal){

            downloadModal.classList.remove('active');
        }

        if(e.target === quoteModal){

            quoteModal.classList.remove('active');
        }
    });

});