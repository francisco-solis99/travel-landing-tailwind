const tabOptions = document.querySelectorAll('.tab-option');
tabOptions.forEach(option => {
  option.addEventListener('click', () => {
    const optKey = Number(option.dataset.opt);
    desactiveOptions();
    activeOption(optKey);
  })
})

function activeOption(optKey) {
  tabOptions[optKey].querySelector('svg').classList.add('fill-primary', 'stroke-primary');
}

function desactiveOptions() {
  tabOptions.forEach(opt => opt.querySelector('svg').classList.remove('fill-primary', 'stroke-primary'))
}
