document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#FFFFFF',
      lineColor: '#FF4500',
      density: 12000,
      particleRadius: 7,
      minSpeedX: 0.1,
      directionX: 'center',
      lineWidth: 1
    });
}, false);