document.addEventListener('DOMContentLoaded', function() {
  var dropdownElem = document.querySelectorAll('.dropdown-trigger');
  var dropdownOptions = {
        'coverTrigger': false,
        'alignment': 'right'
    }
  var dropdownInstance = M.Dropdown.init(dropdownElem, dropdownOptions);
});

document.addEventListener('DOMContentLoaded', function() {
    var sidenavElem = document.querySelectorAll('.sidenav');
    var sidenavInstance = M.Sidenav.init(sidenavElem);
  });

document.addEventListener('DOMContentLoaded', function() {
    var modalElem = document.querySelectorAll('.modal');
    var modalInstance = M.Modal.init(modalElem);
  });
