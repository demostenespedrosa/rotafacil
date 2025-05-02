const btn_submit = document.getElementById("submit")

function animationUP(){

    gsap.to(".black",{
        height: "100dvh",
        duration: 1.4,
        ease: "elastic.out(1,9)",
    })

    gsap.to(".white",{
        height: "100dvh",
        duration: 1.4,
        ease: "elastic.out(1,9)",
        delay: 0.3
    })

    gsap.to(".white",{
        borderRadius: "0px",
        duration: 1,
        delay: 0.5
    })
}

btn_submit.addEventListener("click", () => animationUP())