document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('filterBtn');
    const filterPopup = document.getElementById('filterPopup');
    
    if (filterBtn && filterPopup) {
        filterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            filterPopup.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!filterPopup.contains(e.target) && e.target !== filterBtn) {
                filterPopup.classList.remove('active');
            }
        });
    }

    const rangeMin = document.getElementById('rangeMin');
    const rangeMax = document.getElementById('rangeMax');
    const minVal = document.getElementById('minVal');
    const maxVal = document.getElementById('maxVal');
    const track = document.querySelector('.slider-track');

    if (rangeMin && rangeMax && minVal && maxVal && track) {
        function updateSlider() {
            let min = parseInt(rangeMin.value);
            let max = parseInt(rangeMax.value);

            if (min > max) {
                let temp = min;
                min = max;
                max = temp;
            }

            minVal.textContent = min.toLocaleString('ru-RU');
            maxVal.textContent = max.toLocaleString('ru-RU');

            const percent1 = (min / rangeMin.max) * 100;
            const percent2 = (max / rangeMax.max) * 100;
            
            track.style.background = `linear-gradient(to right, #e0e0e0 ${percent1}%, #000000 ${percent1}%, #000000 ${percent2}%, #e0e0e0 ${percent2}%)`;
        }

        rangeMin.addEventListener('input', updateSlider);
        rangeMax.addEventListener('input', updateSlider);
        
        updateSlider();
    }
});
