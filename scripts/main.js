document.addEventListener("DOMContentLoaded", () => {
    
    
    
    const dropdownElements = [
        { triggerClass: 'user', dropdownClass: 'userdropdown', displayStyle: 'block' },
        { triggerClass: 'cart', dropdownClass: 'cartdropdown', displayStyle: 'block' },
        { triggerClass: 'headset', dropdownClass: 'servicedropdown', displayStyle: 'inline-flex' }
    ];

    dropdownElements.forEach(({ triggerClass, dropdownClass, displayStyle }) => {
        const triggerElement = document.getElementsByClassName(triggerClass)[0];
        const dropdownElement = document.getElementsByClassName(dropdownClass)[0];

        const showDropdown = () => { dropdownElement.style.display = displayStyle; };
        const hideDropdown = () => { dropdownElement.style.display = "none"; };

        triggerElement.addEventListener("mouseover", showDropdown);
        triggerElement.addEventListener("mouseout", hideDropdown);
        dropdownElement.addEventListener("mouseover", showDropdown);
        dropdownElement.addEventListener("mouseout", hideDropdown);
    });

    const customSelectElements = document.getElementsByClassName("custom-select");
    const numberOfCustomSelects = customSelectElements.length;

    for (let i = 0; i < numberOfCustomSelects; i++) {
        const selectElement = customSelectElements[i].getElementsByTagName("select")[0];
        const numberOfOptions = selectElement.length;

        const selectedDiv = document.createElement("DIV");
        selectedDiv.setAttribute("class", "select-selected");
        selectedDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
        customSelectElements[i].appendChild(selectedDiv);

        const optionsDiv = document.createElement("DIV");
        optionsDiv.setAttribute("class", "select-items select-hide");

        for (let j = 1; j < numberOfOptions; j++) {
            const optionDiv = document.createElement("DIV");
            optionDiv.innerHTML = selectElement.options[j].innerHTML;

            optionDiv.addEventListener("click", function(e) {
                let selectBox = this.parentNode.parentNode.getElementsByTagName("select")[0];
                selectBox.selectedIndex = j;

                const optionHeader = this.parentNode.previousSibling;
                optionHeader.innerHTML = this.innerHTML;

                const selectedOptions = this.parentNode.getElementsByClassName("same-as-selected");
                for (let k = 0; k < selectedOptions.length; k++) {
                    selectedOptions[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");

                const changeEvent = new Event('change', { bubbles: true });
                selectBox.dispatchEvent(changeEvent);

                optionHeader.click();
            });

            optionsDiv.appendChild(optionDiv);
        }

        customSelectElements[i].appendChild(optionsDiv);

        selectedDiv.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(currentElement) {
        const allOptions = document.getElementsByClassName("select-items");
        const allSelected = document.getElementsByClassName("select-selected");

        for (let i = 0; i < allSelected.length; i++) {
            if (currentElement !== allSelected[i]) {
                allSelected[i].classList.remove("select-arrow-active");
            }
        }

        for (let i = 0; i < allOptions.length; i++) {
            if (Array.from(allSelected).indexOf(currentElement) === -1) {
                allOptions[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);

    const products = document.querySelectorAll('.product');
    const description = document.querySelectorAll('.item-description');

    products.forEach((product, index) => {
        product.addEventListener('mouseover', () => {
            product.parentElement.style.height = '525px';
            product.parentElement.style.backgroundColor = "#fff";
            product.parentElement.style.cursor = 'pointer';
            product.parentElement.parentElement.style.scale = '1.1';
            description[index].style.borderTop = '2px solid #000';
        });

        product.addEventListener('mouseout', () => {
            product.parentElement.style.height = '450px';
            product.parentElement.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            product.parentElement.parentElement.style.scale = '1';
            description[index].style.borderTop = '';
        });
    });
});
