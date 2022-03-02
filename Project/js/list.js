function change() {
    let results = Array.from(document.querySelectorAll('.goods > div')),
        groupsChecked = document.querySelectorAll('.filter .groups input:checked'),
        categoriesChecked = document.querySelectorAll('.filter .categories input:checked');


    // Hide all results
    results.forEach(function(result) {
        result.style.display = 'none';
    });


    // Filter results to only those that meet ALL requirements:        
    filterGroupsOrCategories(groupsChecked);

    if (categoriesChecked.length != 0) {
        filterGroupsOrCategories(categoriesChecked);
    }

    function filterGroupsOrCategories(GroupsOrCategoriesChecked) {
        results = Array.from(GroupsOrCategoriesChecked).reduce(function(sum, input) {
            const attrib = input.getAttribute('rel');
            return sum.concat(results.filter(function(result) {
                return result.classList.contains(attrib);
            }));
        }, []);
    }
    // Show those filtered results:
    results.forEach(function(result) {
        result.style.display = 'block';
    });
}
change();