$(document).ready(function() {
    const dice1 = $("#dice1");
    const dice2 = $("#dice2");
    const rollBtn = $(".roll-btn");
    const result = $('.result .total');

    const rollDice = (dice) => {
        const random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        dice.css("animation", "rolling 4s ease");
        rollBtn.prop("disabled", true);
        
        setTimeout(() => {
            switch (random) {
                case 1:
                    dice.css("transform", "rotateX(20deg) rotateY(0deg)");
                    break;
                case 2:
                    dice.css("transform", "rotateX(-70deg) rotateY(0deg)");
                    break;
                case 3:
                    dice.css("transform", "rotateX(20deg) rotateY(90deg)");
                    break;
                case 4:
                    dice.css("transform", "rotateX(20deg) rotateY(-90deg)");
                    break;
                case 5:
                    dice.css("transform", "rotateX(110deg) rotateY(0deg)");
                    break;
                case 6:
                    dice.css("transform", "rotateX(200deg) rotateY(0deg)");
                    break;
                default:
                    break;
            } 
            dice.css("animation", "");
            rollBtn.prop("disabled", false);
        }, 4050);

        return random;
    }

    rollBtn.click(() => {
        console.log("rollBtn clicked");
        const dice1Result = rollDice(dice1);
        const dice2Result = rollDice(dice2);

        setTimeout(() => {
            const mess = (((dice1Result == 1 || dice1Result == 6) 
                        && 
                        (dice2Result == 1 || dice2Result == 6)) || dice1Result == dice2Result)
                        ? 
                        'Bonus' : 
                        dice1Result + dice2Result;

            result.text(`${mess}`);
        }, 4150);
    })
})

