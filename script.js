
function getBtnAndShow( ) {
  function displayDateAndTime() {
    document.getElementById('time').innerHTML = Date();
  }
  document
  .getElementById('timeCheckBtn')
  .addEventListener('click', displayDateAndTime);
}

module.exports.getBtnAndShow = getBtnAndShow;
module.exports.clearDateAndTime = clearDateAndTime;