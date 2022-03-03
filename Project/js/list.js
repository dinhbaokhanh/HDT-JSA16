// filter

function change() {
    var groupsCbs = document.querySelectorAll(".groups input[type='checkbox']");
    var categoriesCbs = document.querySelectorAll(".categories input[type='checkbox']");
    var filters = {
        groups: getClassOfCheckedCheckboxes(groupsCbs),
        categories: getClassOfCheckedCheckboxes(categoriesCbs)
    };
  
    filterResults(filters);
}
  
function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];
  
    if (checkboxes && checkboxes.length > 0) {
      for (var i = 0; i < checkboxes.length; i++) {
        var cb = checkboxes[i];
  
        if (cb.checked) {
          classes.push(cb.getAttribute("rel"));
        }
      }
    }
  
    return classes;
}
  
function filterResults(filters) {
    var rElems = document.querySelectorAll(".goods .items");
    var hiddenElems = [];
  
    if (!rElems || rElems.length <= 0) {
        return;
    }
  
    for (var i = 0; i < rElems.length; i++) {
      var el = rElems[i];
  
        if (filters.groups.length > 0) {
            var isHidden = true;
  
            for (var j = 0; j < filters.groups.length; j++) {
                var filter = filters.groups[j];
  
                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }
  
            if (isHidden) {
                hiddenElems.push(el);
            }
        }
  
        if (filters.categories.length > 0) {
            var isHidden = true;
  
                for (var j = 0; j < filters.categories.length; j++) {
                    var filter = filters.categories[j];
  
                    if (el.classList.contains(filter)) {
                        isHidden = false;
                        break;
                    }
                }
  
            if (isHidden) {
                hiddenElems.push(el);
            }
        }
    }
  
    for (var i = 0; i < rElems.length; i++) {
        rElems[i].style.display = "block";
    }
  
    if (hiddenElems.length <= 0) {
        return;
    }
  
    for (var i = 0; i < hiddenElems.length; i++) {
        hiddenElems[i].style.display = "none";
    }
}

// search

// Bản rút gọn
// function SearchEngine() {
//     var input = document.getElementById("search-input");
//     var filter = input.value.toLowerCase();
//     var items = document.getElementsByClassName('items');
//     var items_name = document.getElementsByClassName('items-name')
  
//     for (i = 0; i < items_name.length; i++) {
//       if (items_name[i].innerText.toLowerCase().includes(filter)) {
//         items_name[i].style.display = "block";
//       } else {
//         items_name[i].style.display = "none";
//       }
//     }
// }



function SearchEngine() {
    // Lấy giá trị
    var input, filter, goods, items, items_name, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toLowerCase();
    goods = document.getElementsByClassName('goods');
    items = document.getElementsByClassName('items');
  
    // Ẩn div ko có trong search
    for (i = 0; i < items.length; i++) {
        items_name = items[i].getElementsByClassName('items-name')[0];
        txtValue = items_name.textContent || items_name.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
