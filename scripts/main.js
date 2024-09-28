document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        { trigger: 'fa-user', dropdown: 'userdropdown', display: 'block' },
        { trigger: 'fa-cart-shopping', dropdown: 'cartdropdown', display: 'block' },
        { trigger: 'fa-headset', dropdown: 'servicedropdown', display: 'inline-flex' }
    ];

    elements.forEach(({ trigger, dropdown, display }) => {
        const triggerEl = document.getElementsByClassName(trigger)[0];
        const dropdownEl = document.getElementsByClassName(dropdown)[0];
        
        
    });
});
