document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // 1. NAVBAR ANIMATION
    // ==========================================
    gsap.from("nav", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("nav .flex > *", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
        clearProps: "all"
    });

    // ==========================================
    // 2. HERO SECTION ANIMATION
    // ==========================================
    const heroTl = gsap.timeline();

    heroTl.from(".hero-bg-shape", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    })
    .from(".hero-subtitle", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=1")
    .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.6")
    .from(".hero-desc", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.6")
    .from(".hero-btn", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        clearProps: "all"
    }, "-=0.6")
    .from(".hero-main-img", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=1.2")
    .from(".float-img-1", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    }, "-=0.8")
    .from(".float-img-2", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    }, "-=0.6")
    .from(".float-img-3", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    }, "-=0.6");

    // Continuous floating animations
    gsap.to(".float-img-1", {
        y: -15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
    gsap.to(".float-img-2", {
        y: -20,
        x: 10,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.5
    });
    gsap.to(".float-img-3", {
        y: -10,
        x: -15,
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1
    });

    // ==========================================
    // 3. ABOUT US SECTION ANIMATION
    // ==========================================
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    aboutTl.from(".about-bg-shape", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    })
    .from(".about-main-img", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5")
    .from(".about-float-img", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    }, "-=0.5")
    .from(".about-title", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.8")
    .from(".about-desc", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.6")
    .from(".about-btn", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.5)",
        clearProps: "all"
    }, "-=0.6");

    gsap.to(".about-float-img", {
        y: -15,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    // ==========================================
    // 4. POPULAR FOOD SECTION ANIMATION
    // ==========================================
    gsap.from(".popular-title", {
        scrollTrigger: {
            trigger: ".popular-section",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".pop-card", {
        scrollTrigger: {
            trigger: ".popular-section", // Changed trigger from .popular-cards to .popular-section for more reliable firing
            start: "top 75%", // Triggers slightly after the title
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15, // Reduced stagger for a snappier reveal
        ease: "power3.out",
        clearProps: "all" // Important: clears GSAP styles after animation so hover transforms work correctly
    });

    // ==========================================
    // 5. FEATURES SECTION ANIMATION
    // ==========================================
    gsap.from(".features-title", {
        scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from(".feat-card", {
        scrollTrigger: {
            trigger: ".features-cards",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.2)"
    });

    // ==========================================
    // 6. HOW IT WORKS SECTION ANIMATION
    // ==========================================
    const hiwTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".how-it-works-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    hiwTl.from(".hiw-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    })
    .from(".hiw-title", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4")
    .from(".hiw-desc", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4")
    .from(".step-card", {
        x: (index) => index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
    }, "-=0.2")
    .from(".hiw-btn", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.5)",
        clearProps: "all"
    }, "-=0.4")
    .from(".map-path-anim", {
        strokeDashoffset: 1000,
        strokeDasharray: 1000,
        duration: 2,
        ease: "power2.inOut"
    }, "-=1");

    // ==========================================
    // 7. DOWNLOAD APP SECTION ANIMATION
    // ==========================================
    const downloadTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".download-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    downloadTl.from(".download-shape", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    })
    .from(".download-content h2, .download-content p", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=1")
    .from(".download-buttons button", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.5)",
        clearProps: "all"
    }, "-=0.6")
    .from(".download-mockup", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=1");

    // ==========================================
    // 8. TESTIMONIALS SECTION ANIMATION
    // ==========================================
    const testiTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    testiTl.from(".testimonials-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    })
    .from(".testimonials-card", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.4")
    .from(".testi-main-img", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8")
    .from(".testi-float-img", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    }, "-=0.6");

    gsap.to(".testi-float-img", {
        y: -15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });

    // Footer animation
    gsap.from("footer .grid > div", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all"
    });

});
