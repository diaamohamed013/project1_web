/* for loading page*/
$(document).ready(function () {
    $(".sk-cube-grid").fadeOut(1000, function () {
        $(".loading").fadeOut(function () {
            $("body").css("overflow", "auto")
        })
    })
})

/* for pageicon that sliding to top*/
$(window).scroll(function () {

    let scrollTop = $(window).scrollTop()
    if (scrollTop > 400) {
        $(".pageIcon").fadeIn()
    }
    else {
        $(".pageIcon").fadeOut()
    }
})
$(".pageIcon").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500)
    return false;
})

/* for language div */
function formatState(state) {
    if (!state.id) { return state.text; }
    var $state = $(
        '<span><img src="' + $(state.element).attr('data-src') + '" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};
$('select').select2({
    minimumResultsForSearch: Infinity,
    templateResult: formatState,
    templateSelection: formatState
});

/* for ul's in navlists */
$('.nav-item ul').hide();
$(".nav-item a").click(function () {
    $(this).parent(".nav-item").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-left , fa-caret-down");
});

/* for owl-carousel of logos*/
$('.logos .owl-carousel').owlCarousel({
    items: 5,
    rtl: true,
    loop: true,
    nav: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 5,
            loop: false,
            autoplay: false
        }
    }
})

/* for owl-carousel in section women */
$('#demo-men , #demo-women').owlCarousel({
    loop: true,
    margin: 10,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 2,
            nav: true
        },
        1050: {
            items: 3,
            nav: true
        }
    }
});

/* for owl-carousel in section home */
$(".owl-carousel").on("initialized.owl.carousel", function () {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    $(".owl-item.active .sale-card").addClass("norotate");
});
let $this = $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$this.on("changed.owl.carousel", e => {
    $(".owl-slide-animated").removeClass("is-transitioned");
    let $currentOwlItem = $(".owl-item.active");
    $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");
    $(".sale-card").removeClass("norotate");
    let $current = $(".owl-item.active");
    $current.find(".sale-card").addClass("norotate");
});

/* for count down time */
let d = document.getElementById("days");
let h = document.getElementById("hour");
let m = document.getElementById("min");
let s = document.getElementById("sec");
let count = new Date("25 feb ,2021 18:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let D = count - now;
    let days = Math.round(D / (1000 * 60 * 60 * 24));
    let hour = Math.round((D % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.round((D % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.round((D % (1000 * 60)) / 1000);
    d.innerHTML = days;
    h.innerHTML = hour;
    m.innerHTML = min;
    s.innerHTML = sec;
    if (days < 10) {
        d.innerHTML = "0" + days;
    }
    if (hour < 10) {
        h.innerHTML = "0" + hour;
    }
    if (min < 10) {
        m.innerHTML = "0" + min;
    }
    if (sec < 10) {
        s.innerHTML = "0" + sec;
    }
    if (D < 0) {
        clearInterval();
        d.innerHTML = "00";
        h.innerHTML = "00";
        m.innerHTML = "00";
        s.innerHTML = "00";
    }
}, 1000);

/* for images in section of insta  */
let item = $(".insta .item");
item.eq(0).css("background-image", "url('img/insta-1.jpg')");
item.eq(1).css("background-image", "url('img/insta-2.jpg')");
item.eq(2).css("background-image", "url('img/insta-3.jpg')");
item.eq(3).css("background-image", "url('img/insta-4.jpg')");
item.eq(4).css("background-image", "url('img/insta-5.jpg')");
item.eq(5).css("background-image", "url('img/insta-6.jpg')");

/* for ul default sorting in shop page 
$('.sorting').click(function () {
    $('.sorting ul').slideToggle(500);
    $(".show ul").hide()
})
$('.show').click(function () {
    $('.show ul').slideToggle(500);
    $(".sorting ul").hide()
})*/

/* for chaning background and color of labels in
col-lg-3 div size shop page*/
$(".size-item label").click(function () {
    $(this).siblings().css({ "background": "#fff", "color": "#252525" });
    $(this).css({ "background": "#252525", "color": "#fff" });
})

/* for questions in faqs pages*/
$(document).ready(function () {
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        $(".fa-minus").css("background-color", "#e7ab3c");
        $(".fa-minus").css("color", "#fff");
    });
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        $(".fa-minus").css("background-color", "#e7ab3c");
        $(".fa-minus").css("color", "#fff");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        $(".fa-plus").css("background-color", "rgb(199, 197, 197)");
        $(".fa-plus").css("color", "#252525");
    });
});

/* for price range slider in shop page */
const slider = document.getElementById('sliderPrice');
const rangeMin = parseInt(slider.dataset.min);
const rangeMax = parseInt(slider.dataset.max);
const step = parseInt(slider.dataset.step);
const filterInputs = document.querySelectorAll('input.filter__input');
noUiSlider.create(slider, {
    start: [rangeMin, rangeMax],
    connect: true,
    step: step,
    range: {
        'min': rangeMin,
        'max': rangeMax
    },
    // make numbers whole
    format: {
        to: value => value,
        from: value => value
    }
});
// bind inputs with noUiSlider 
slider.noUiSlider.on('update', (values, handle) => {
    filterInputs[handle].value = "$" + values[handle];
    filterInputs[handle].value = "$" + values[handle];
});
filterInputs.forEach((input, indexInput) => {
    input.addEventListener('change', () => {
        slider.noUiSlider.setHandle(indexInput, input.value);
    })
});

/* for box of increesing and decressing numbers 
in shoppingcart page*/
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}