"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

jQuery(document).ready(function ($) {
  var main_menu = {
    fun: function fun() {
      $('ul.main-nav li').each(function (index, el) {
        if ($(this).find('ul').length > 0) {
          $(this).addClass('has-ul');
          $(this).find(' > a').append('<i class="drob-ul"></i>');
        }
      });
      $('ul.main-nav .drob-ul').click(function (event) {
        event.preventDefault();
        $(this).parents('li').addClass('mobile-active');
      });
      $('.fasten').click(function (event) {
        $('.navigation').toggleClass('fixed-block');
        $('.navigation').hasClass('fixed-block') == true ? localStorage.setItem("navigation-fix", true) : localStorage.setItem("navigation-fix", false);
      }); // get lodaSrorage

      localStorage.getItem("navigation-fix") == 'true' ? $('.navigation').addClass('fixed-block') : $('.navigation').removeClass('fixed-block');
      $('.open-catalog').click(function (event) {
        event.preventDefault();
        $('.navigation:not(.fixed-block)').slideToggle(100);
      });
      $('ul.main-nav ul[data-back]').each(function (index, el) {
        $(this).append("<div class=\"back-nav-mobile\">".concat($(this).attr('data-back'), "</div>"));
      });
      $('.back-nav-mobile').click(function (event) {
        $(this).parent('ul').parent('li').removeClass('mobile-active');
      });
      $('.mobile-menu').click(function (event) {
        $('.navigation').addClass('active-mobile');
      });
      $('.navigation .colse').click(function (event) {
        $('.navigation').removeClass('active-mobile');
      });
      jQuery(document).click(function (event) {
        if (jQuery(event.target).closest(".open-catalog, .navigation").length) return;
        $('.navigation:not(.fixed-block)').slideUp(0);
        event.stopPropagation();
      });
    }
  };
  main_menu.fun();
  var location = {
    fun: function fun() {
      $('.location .top').click(function (event) {
        $(this).toggleClass('active');
        $('.location .bottom').slideToggle(200);
      });
      jQuery(document).click(function (event) {
        if (jQuery(event.target).closest(".location").length) return;
        $('.location .top').removeClass('active');
        $('.location .bottom').slideUp(200);
        event.stopPropagation();
      });
    }
  };
  location.fun();
  var mobile_form = {
    fun: function fun() {
      $('.mobile-search').click(function (event) {
        $('.form-autocomplete').addClass('active-mobile');
        $('.form-autocomplete input[type="text"]').focus();
      });
      jQuery(document).click(function (event) {
        if (jQuery(event.target).closest(".mobile-search, .form-autocomplete, .ui-menu").length) return;
        $('.form-autocomplete').removeClass('active-mobile');
        event.stopPropagation();
      });
    }
  };
  mobile_form.fun();
  var checked = {
    fun: function fun() {
      var checked = function checked(item) {
        item.each(function (index, el) {
          if ($(this).find('input').prop('checked') == true) $(this).addClass('active');else $(this).removeClass('active');
        });
      };

      checked($('label.checkbox'));
      $('label.checkbox').click(function (event) {
        checked($('label.checkbox'));
      });
    }
  };
  checked.fun();
  var acardion = {
    fun: function fun() {
      $('.acardion > .item.active').each(function (index, el) {
        $(this).find('.bottom').slideDown(0);
        $(this).find('.top').addClass('active');
      });
      $('.acardion .top').click(function (event) {
        $(this).toggleClass('active');
        $(this).parent('.item').find('.bottom').slideToggle(200);
      });
    }
  };
  acardion.fun();
  var open_filter = {
    fun: function fun() {
      $('.open-fillter').click(function (event) {
        event.preventDefault();
        $('.goods-items > .item:first()').toggleClass('active');
      });
      jQuery(document).click(function (event) {
        if (jQuery(event.target).closest(".open-fillter, .filter-items").length) return;
        $('.goods-items > .item:first()').removeClass('active');
        event.stopPropagation();
      });
    }
  };
  open_filter.fun();
  var count_input = {
    fun: function fun() {
      jQuery('.conunt-input').each(function (index, el) {
        jQuery(this).prepend("\n\t\t\t\t\t<div class=\"minus\">\n\t\t\t\t\t\t<button>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<mark>\u043C\u0438\u043D</mark>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>");
        jQuery(this).append("\n\t\t\t\t\t<div class=\"plus\">\n\t\t\t\t\t\t<button>\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<mark>\u043C\u0430\u043A\u0441</mark>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t");
        /*add data-add*/

        var data_add = jQuery(this).find('input').attr('data-add');

        if (_typeof(data_add) !== (typeof undefined === "undefined" ? "undefined" : _typeof(undefined)) && data_add !== false) {
          var th_val = jQuery(this).find('input').attr('value');
          jQuery(this).find('input').val(th_val + data_add);
        }
      });
      jQuery('.conunt-input div button').click(function (event) {
        // getting value from input
        var val_input = jQuery(this).parents('.conunt-input').find('input').val();
        var val_input = parseInt(val_input); // check the number

        val_input = +val_input;
        var audit_input = jQuery.isNumeric(val_input); // if input value not number

        if (audit_input == false) {
          var val_input = 0;
        } // if click on plus


        var has_plus = jQuery(this).parent('div').hasClass('plus');

        if (has_plus == true) {
          val_input = +val_input + 1;
        } // if click on minus


        var has_minus = jQuery(this).parent('div').hasClass('minus');

        if (has_minus == true) {
          var value_p = jQuery(this).parents('.conunt-input').find('input').val();
          value_p = parseInt(value_p);
          value_p = +value_p;

          if (value_p >= 2) {
            val_input = +val_input - 1;
          }
        } // output in input

        /* add content for data-add*/


        jQuery(this).parents('.conunt-input').find('input').val(val_input);
        jQuery(this).parents('.conunt-input').find('input').attr('value', val_input);
        /* add content for data-add*/

        var th_val = jQuery(this).parents('.conunt-input').find('input').val();
        th_val = parseInt(th_val);
        var data_add = jQuery(this).parents('.conunt-input').find('input').attr('data-add');

        if (_typeof(data_add) !== (typeof undefined === "undefined" ? "undefined" : _typeof(undefined)) && data_add !== false) {
          var th_val = jQuery(this).parents('.conunt-input').find('input').val(th_val + data_add);
        }
        /*data-min and data-max*/


        var has_min = jQuery(this).parents('.conunt-input').find('input').attr('data-min');

        if (has_min != undefined) {
          has_min = +has_min;
          if (val_input < has_min) jQuery(this).parents('.conunt-input').find('input').val(has_min);
        }

        var has_max = jQuery(this).parents('.conunt-input').find('input').attr('data-max');

        if (has_max != undefined) {
          has_max = +has_max;
          if (val_input > has_max) jQuery(this).parents('.conunt-input').find('input').val(has_max);
        }
      });
      jQuery('.conunt-input input').focus(function (event) {
        jQuery(this).select();
      });
      jQuery('.conunt-input input').focusout(function (event) {
        var val_input = jQuery(this).val();
        val_input = parseInt(val_input);
        val_input = +val_input;
        var val_string = jQuery.isNumeric(val_input);

        if (val_string == false) {
          jQuery(this).val(1);
          jQuery(this).attr('value', '1');
        }

        if (val_input < 1) {
          jQuery(this).val(1);
          jQuery(this).attr('value', '1');
        }
        /* add content for data-add*/


        var th_val = jQuery(this).val();
        th_val = parseInt(th_val);
        var data_add = jQuery(this).attr('data-add');

        if (_typeof(data_add) !== (typeof undefined === "undefined" ? "undefined" : _typeof(undefined)) && data_add !== false) {
          jQuery(this).val(th_val + data_add);
        }
        /*data-min and data-max*/


        if ($(this).attr('data-min') != undefined) {
          if (parseInt(val_input) < parseInt($(this).attr('data-min'))) {
            jQuery(this).val($(this).attr('data-min'));
          }
        }

        if ($(this).attr('data-max') != undefined) {
          if (parseInt(val_input) > parseInt($(this).attr('data-max'))) {
            jQuery(this).val($(this).attr('data-max'));
          }
        }
      }); // add nav keydown

      $(".conunt-input input").not('input[type=number]').on("keydown", function (event) {
        if (event.which == 38) $(this).parents('.conunt-input').find('.plus button').trigger('click');
        if (event.which == 40) $(this).parents('.conunt-input').find('.minus button').trigger('click');
      });
    }
  };
  count_input.fun();
  var moda_window = {
    fun: function fun() {
      $('body').on('click', 'a[data-modal]', function (event) {
        event.preventDefault();
        $('.modal-window').fadeOut(400).removeClass('active');
        var data_modal = $(this).attr('data-modal');
        $('.modal-window[data-modal="' + data_modal + '"]').fadeIn(400).addClass('active');
      });
      $('body').on('click', '.close-modal', function (event) {
        event.preventDefault();
        $('.modal-window').fadeOut(400);
        $('.modal-window').removeClass('active');
      });
      jQuery(".modal-window").click(function (event) {
        if (jQuery(event.target).closest(".window").length) return;
        $('.modal-window').fadeOut(400).removeClass('active');
        event.stopPropagation();
      });
    }
  };
  moda_window.fun();
});