$('.time .clock').html('Initializing');

$(document).ready(function() {
  var secctr = 0;
  var hourctr = 0;
  var minctr = 0;
  var format = 'hh:mm A';
  var lunchStart = moment('11:00 AM', format);
  var lunchEnd = moment('12:00 PM', format);
  var offlineStart = moment('5:30 PM', format);
  var offlineEnd = moment('11:59 PM', format);
  var offlineStart2 = moment('12:00 AM', format);
  var offlineEnd2 = moment('09:00 AM', format);

  setTimeout(function() {
    $('.pointer').css('opacity', '1');
  }, 1000);

  function clockRun() {
    var intervalId = setInterval(function() {
      var seconds = new Date().getSeconds();
      var mins = new Date().getMinutes();
      var hours = new Date().getHours();
      var sdegree = seconds * 6 + secctr * 360;
      var hdegree = hours * 30 + mins / 2 + hourctr * 360;
      var mdegree = mins * 6 + minctr * 360;
      var hrotate = 'rotate(' + hdegree + 'deg)';
      var mrotate = 'rotate(' + mdegree + 'deg)';
      var srotate = 'rotate(' + sdegree + 'deg)';
      var time = moment().format('hh:mm A');

      if (seconds === 0) {
        secctr++;
        srotate = 'rotate(' + (seconds * 6 + secctr * 360) + 'deg)';
      }

      $('.time .clock').html(time);

      $('.seconds').css({ transform: srotate });

      if (mins === 0 && seconds === 0) {
        minctr++;
        mrotate = 'rotate(' + (mins * 6 + minctr * 360) + 'deg)';
      }

      $('.mins').css({ transform: mrotate });

      if (String(hours) !== moment().format('H')) {
        hourctr++;
        hrotate = 'rotate(' + (hours * 30 + mins / 2 + hourctr * 360) + 'deg)';
      }

      $('.hours').css({ transform: hrotate });
    }, 1000);

    return intervalId;
  }

  var intervalId = clockRun();

  $(window).focus(function() {
    var seconds = new Date().getSeconds();
    var mins = new Date().getMinutes();
    var hours = new Date().getHours();
    var sdegree = seconds * 6;
    var hdegree = hours * 30 + mins / 2;
    var mdegree = mins * 6;
    $('.seconds').css({ transition: 'none' });
    $('.mins').css({ transition: 'none' });
    $('.hours').css({ transition: 'none' });
    $('.seconds').css({ transform: 'rotate(' + seconds * 6 + 'deg)' });
    $('.mins').css({ transform: 'rotate(' + mins * 6 + 'deg)' });
    $('.hours').css({
      transform: 'rotate(' + (hours * 30 + mins / 2) + 'deg)'
    });
    clearInterval(intervalId);
    secctr = 0;
    hourctr = 0;
    minctr = 0;
    intervalId = clockRun();
    setTimeout(function() {
      $('.seconds').css({ transition: '1.1s' });
      $('.mins').css({ transition: '1.1s' });
      $('.hours').css({ transition: '1.1s' });
    }, 100);
  });
});
