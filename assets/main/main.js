const cards = document.querySelectorAll('.card');
const btns = document.querySelectorAll('.report-for__time-btn');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(!btn.classList.contains('report-for__time-btn--active')) {
            btns.forEach(btn => btn.classList.remove('report-for__time-btn--active'));

            btn.classList.add('report-for__time-btn--active');

            fetch('./assets/data/data.json')
                .then(res => res.json())
                .then(data => {
                    let i = 0;
                    cards.forEach((card) => {
                        const currentHoursEl = card.querySelector('.card__current-hours');
                        const previousHoursEl = card.querySelector('.card__previous-hours');

                        const dataCurrentHours = data[i].timeframes[btn.value].current;
                        const dataPreviousHours = data[i].timeframes[btn.value].previous;

                        currentHoursEl.innerText = dataCurrentHours;
                        previousHoursEl.innerText = dataPreviousHours;
                        i++;
                    });
                })
                .catch(err => console.error(`There was an error: ${err}`));
        }
    });
});

