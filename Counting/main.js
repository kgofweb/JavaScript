const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
        const updateCount = () => {
                const target = +counter.getAttribute('data-target');

                const count = +counter.innerText;

                const incrementation = target / speed;

                if (count < target) {
                        counter.innerText = Math.ceil(count + incrementation);
                        setTimeout(updateCount, 1);
                }else {
                        count.innerText = target;
                }
        }

        updateCount();
});








/* getAttribute renvoie la valeur de notre attribue */

/* innerText Recuperer la valeur de l'ement a l'interieur de la div en question */

/* 1. Renvoyer la valeur de notre attribue et le convertir en number */

/* 2. Recuperer la valeur de l'ement a l'interieur de la div en question et le convertir */

/* 3. Incrementation en divisans le target par la vittesse */

/* 
        4. Verification : 
        Si le count < target => afficher count + incrementation
        Si non :  count.innerText = target;
*/

