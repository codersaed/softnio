/*============== Main Js Start ==============*/
(function ($) {
  "use strict";

  /*============== Header Hide Click On Body Js Start ==============*/
  $('.navbar-toggler.header-button').on('click', function () {
    if ($('.body-overlay').hasClass('show')) {
      $('.body-overlay').removeClass('show');
    } else {
      $('.body-overlay').addClass('show');
    }
  });

  $('.body-overlay').on('click', function () {
    $('.header-button').trigger('click');
  });
  /* ==========================================
  *     Start Document Ready function
  ==========================================*/
  $(document).ready(function () {
    "use strict";
    /*================== Password Show Hide Js Start ==================*/
    $(".toggle-password").on('click', function () {
      $(this).toggleClass(" fa-eye-slash");
      var input = $($(this).attr("id"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });

    /*============** Mgnific Popup **============*/
    $(".image-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    // lightcase
    $(window).on("load", function () {
      $("a[data-rel^=lightcase]").lightcase();
    });

    /* ========================= Latest Slider Js Start =========================*/
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      speed: 2000,
      dots: false,
      arrows: false,
      // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
      // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 586,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    $('a[data-slide]').on('click', function (e) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    /*======================= Mouse hover Js Start =======================*/
    $('.mousehover-item').on('mouseover', function () {
      $('.mousehover-item').removeClass('active')
      $(this).addClass('active')
    });

    /*================== Sidebar Menu Js Start ==================*/
    // Sidebar Dropdown Menu Start
    $(".has-dropdown > a").on('click', function () {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".has-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".has-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    /*==================== Sidebar Icon & Overlay js ====================*/
    $(".dashboard-body__bar-icon").on("click", function () {
      $(".sidebar-menu").addClass('show-sidebar');
      $(".sidebar-overlay").addClass('show');
    });

    $(".sidebar-menu__close, .sidebar-overlay").on("click", function () {
      $(".sidebar-menu").removeClass('show-sidebar');
      $(".sidebar-overlay").removeClass('show');
    });

    /* ========================= Odometer Counter Js Start ========================= */
    $(".counterup-item").each(function () {

      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
            var el = document.querySelectorAll('.odometer')[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    /* =================== User Profile Upload Photo Js Start =================== */
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
          $('#imagePreview').hide();
          $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }

    $("#imageUpload").on('change', function () {
      readURL(this);
    });

  });
  /*==========================================
  *      End Document Ready function
  // ==========================================*/

  /*========================= Preloader Js Start =========================*/
  $(window).on("load", function () {
    $('.preloader').fadeOut();
  })

  /*========================= Header Sticky Js Start =========================*/
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 300) {
      $('.header').addClass('fixed-header');
    }
    else {
      $('.header').removeClass('fixed-header');
    }
    if ($(window).scrollTop() >= 300) {
      $('.header-two').addClass('fixed-header');
    }
    else {
      $('.header-two').removeClass('fixed-header');
    }
  });

  /*============================ Scroll To Top Icon Js Start ============================*/
  var btn = $('.scroll-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  //Create Background Image
  (function background() {

    let img = $(".bg-img");
    img.css("background-image", function () {
      var bg = "url(" + $(this).data("background") + ")";
      return bg;
    });

  })();

  document.addEventListener('DOMContentLoaded', function () {
    let video = document.querySelector('.bg-video');
    video.oncanplay = function () {
      console.log('Background video loaded and ready to play.');
    };
  });

  //ad Image Hide
  $('.add-icon-wrap').on('click', function () {
    $(this).parent('.ad-area').hide();
  });


  // sidebar
  $(".sidebar-menu-item > a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("active")) {
      element.removeClass("active");
      element.children("ul").slideUp(500);
    } else {
      element.siblings("li").removeClass("active");
      element.addClass("active");
      element.siblings("li").find("ul").slideUp(500);
      element.children("ul").slideDown(500);
    }
  });

  //sidebar Menu
  $(document).on("click", ".navbar__expand", function () {
    "use strict";

    $(".sidebar").toggleClass("active");
    $(".navbar-wrapper").toggleClass("active");
    $(".body-wrapper").toggleClass("active");
  });

  // Mobile Menu
  $(".sidebar-mobile-menu").on("click", function () {
    $(".sidebar__menu").slideToggle();
  });

  /*================== Password Show Hide Js ==========*/
  $(".toggle-password-change").on("click", function () {
    var input = $(this).siblings("input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).removeClass("fa-eye-slash");
      $(this).addClass("fa-eye");
    } else {
      input.attr("type", "password");
      $(this).removeClass("fa-eye");
      $(this).addClass("fa-eye-slash");
    }
  });

  // photo upload
  $(document).ready(function () {
    "use strict";
    var images = [];
    function selectFiles() {
      $("#fileInput").click();
    }

    function onFileSelect(event) {
      const files = event.target.files;
      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] !== 'image') continue;
        if (!images.some((e) => e.name == files[i].name)) {
          images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          });
        }
      }
      updateImages();
    }

    function deleteImage(index) {
      images.splice(index, 1);
      updateImages();
    }

    function updateImages() {
      $("#containerArea").empty();
      images.forEach(function (image, index) {
        var deleteButton = $('<span class="delete"><i class="las la-times"></i></span>');
        deleteButton.on('click', function () {
          deleteImage(index);
        });
        var imageDiv = $('<div class="image"></div>').append(deleteButton).append($('<img src="' + image.url + '" alt="..."/>'));
        $("#containerArea").append(imageDiv);
      });
    }

    function onDragOver(event) {
      event.preventDefault();
      $("#dragArea").addClass("isDragging");
      event.originalEvent.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(event) {
      event.preventDefault();
      $("#dragArea").removeClass("isDragging");
    }

    function onDrop(event) {
      event.preventDefault();
      $("#dragArea").removeClass("isDragging");
      const files = event.originalEvent.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] !== 'image') continue;
        if (!images.some((e) => e.name == files[i].name)) {
          images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i])
          });
        }
      }
      updateImages();
    }


    $("#selectFiles").on("click", selectFiles);
    $("#fileInput").on("change", onFileSelect);
    $("#dragArea").on("dragover", onDragOver).on("dragleave", onDragLeave).on("drop", onDrop);
  });


  // image preview
  function proPicURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var preview = $(input).parents('.thumb').find('.profilePicPreview');
        $(preview).css('background-image', 'url(' + e.target.result + ')');
        $(preview).addClass('has-image');
        $(preview).hide();
        $(preview).fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  $(".profilePicUpload").on('change', function () {
    proPicURL(this);
  });

  $(".remove-image").on('click', function () {
    $(this).parents(".profilePicPreview").css('background-image', 'none');
    $(this).parents(".profilePicPreview").removeClass('has-image');
    $(this).parents(".thumb").find('input[type=file]').val('');
  });


  $(document).ready(function () {
    const $quantityInput = $(".quantity-input");
    const $btnMinus = $(".btn-minus");
    const $btnPlus = $(".btn-plus");
    const $supportBtn = $(".support-btn");
    const basePrice = 1;

    function changeQuantity(amount) {
      let newVal = parseInt($quantityInput.val()) + amount;
      if (newVal < 1) newVal = 1;
      $quantityInput.val(newVal);
      $btnMinus.prop("disabled", newVal <= 1);
      updateSupportButton(newVal);
    }

    function updateSupportButton(quantity) {
      $supportBtn.text(`Support $${quantity * basePrice}`);
    }

    $btnMinus.on("click", function (event) {
      event.preventDefault();
      changeQuantity(-1);
    });

    $btnPlus.on("click", function (event) {
      event.preventDefault();
      changeQuantity(1);
    });

    $quantityInput.on("input", function () {
      let newVal = parseInt($quantityInput.val());
      if (isNaN(newVal) || newVal < 1) {
        newVal = 1;  // Set to 1 if invalid input
      }
      $quantityInput.val(newVal);
      updateSupportButton(newVal);
    });

    changeQuantity(0);
  });


  $(document).ready(function () {
    const $minusBtn = $('.btn-minus');
    const $plusBtn = $('.btn-plus');
    const $quantityInput = $('.quantity-input');

    function updateButtons() {
      $minusBtn.prop('disabled', $quantityInput.val() <= 1);
    }

    $minusBtn.on('click', function () {
      let value = parseInt($quantityInput.val());
      if (value > 1) {
        $quantityInput.val(value - 1);
        updateButtons();
      }
    });

    $plusBtn.on('click', function () {
      let value = parseInt($quantityInput.val());
      $quantityInput.val(value + 1);
      updateButtons();
    });
    updateButtons();
  });

  $(function () {
    $('.category-list:first').slideDown();
    $('.toggle-category:first i').addClass('fa-chevron-up');

    $('.toggle-category').click(function () {
      $('.category-list').not($(this).next()).slideUp();
      $('.toggle-category i').not($(this).find('i')).removeClass('fa-chevron-up').addClass('fa-chevron-down');
      $(this).next().slideToggle();
      $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });
  });

})(jQuery);

const cart = [];
const mainThumbnail = document.getElementById('main-thumbnail');
const colorButtons = document.querySelectorAll('.color-button');
const addToCartButton = document.getElementById('add-to-cart');
const floatingCheckout = document.getElementById('floating-checkout');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const continueShoppingButton = document.getElementById('continue-shopping');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        colorButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const imgFile = button.dataset.img;
        mainThumbnail.src = `assets/images/element/${imgFile}`;
    });
});

addToCartButton.addEventListener('click', () => {
    const selectedColor = document.querySelector('.color-button.active')?.dataset.color || 'purple';
    const selectedSize = document.getElementById('size-selector').value;
    const price = 79.00;

    const item = { color: selectedColor, size: selectedSize, price };
    cart.push(item);
    updateCartUI();
});

floatingCheckout.addEventListener('click', () => {
    cartModal.style.display = 'block';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    cartModal.style.display = 'none';
    overlay.style.display = 'none';
});

continueShoppingButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
    overlay.style.display = 'none';
});

function updateCartUI() {
    cartCount.textContent = cart.length;
    floatingCheckout.style.display = 'flex';

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>Smartwatch</td>
            <td>${item.color}</td>
            <td>${item.size}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        cartItems.appendChild(row);
    });
}