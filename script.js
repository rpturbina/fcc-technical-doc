let lastScrollTop; // This Varibale will store the top position

const navbar = document.getElementsByClassName("nav__header")[0]; // Get The NavBar
const navList = document.getElementsByClassName("nav__list")[0];

// Hide/show bar when scrolling just if viewport width below 835px
window.addEventListener("scroll", function () {
    //check the document width
    let vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    if (vw < 834) {
        //on every scroll this funtion will be called

        let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        //This line will get the location on scroll
        console.log(scrollTop);

        if (scrollTop > lastScrollTop) {
            //if it will be greater than the previous
            navbar.style.top = "-65px";
            //set the value to the negetive of height of navbar
        } else {
            navbar.style.top = "0";
        }

        lastScrollTop = scrollTop; //New Position Stored
    }
});

let dropDown = null;

const enableDropdown = () => {
    navList.classList.add("active");
    dropDown = "enable";
};

const disableDropdown = () => {
    navList.classList.remove("active");
    dropDown = null;
};

const toTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\
};

navbar.addEventListener("click", () => {
    let vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    if (vw < 834) {
        if (dropDown === "enable") {
            disableDropdown();
        } else if (dropDown === null) {
            toTop();
            enableDropdown();
        }
    }
});
