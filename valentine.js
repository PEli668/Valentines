$(document).ready(function () {
    let noTexts = ["Are you sure?", "Really?", "Think again!", "Last chance!", "🥺"];
    let index = 0;
    let noSize = 1;
    let yesSize = 1;

    $(".no-btn").click(function () {
        if (index < noTexts.length) {
            $(this).text(noTexts[index]);
            index++;
        } else {
            $(this).text("💔");
        }

        // Shrink "No" button
        noSize *= 0.8;
        $(this).css("transform", `scale(${noSize})`);

        // Grow "Yes" button
        yesSize *= 1.2;
        $(".yes-btn").css("transform", `scale(${yesSize})`);
    });

    $(".yes-btn").click(function () {
        // Transition to asking for date ideas with image above prompt
        $("body").html(`
            <div class="date-container">
                <div class="image-container">
                    <img src="dateNight.avif" alt="Stay or Go Image" class="date-image">
                </div>
                <h2>Would you like to stay in or go out?</h2>
                <div class="date-buttons">
                    <button class="btn stay-btn">Stay In</button>
                    <button class="btn go-out-btn">Go Out</button>
                </div>
            </div>
        `);
    });

    // Handle Stay In or Go Out with respective images
    $(document).on("click", ".stay-btn", function () {
        $("body").html(`
            <div class="stay-in-container">
                <div class="image-container">
                    <img src="movieDateNight.jpeg" alt="Stay In Image" class="stay-image">
                </div>
                <h2>Stay In: What do you want to do?</h2>
                <div class="stay-options">
                    <button class="btn">Candle Light Dinner</button>
                    <button class="btn">Indoor Movie Night</button>
                    <button class="btn">Puzzle Night</button>
                    <button class="btn">Drive Out</button>
                </div>
            </div>
        `);
    });

    $(document).on("click", ".go-out-btn", function () {
        $("body").html(`
            <div class="go-out-container">
                <div class="image-container">
                    <img src="bowlingDate.jpg" alt="Go Out Image" class="go-out-image">
                </div>
                <h2>Go Out: What do you want to do?</h2>
                <div class="go-options">
                    <button class="btn">Movies</button>
                    <button class="btn">Pottery</button>
                    <button class="btn">Eating Out</button>
                    <button class="btn">Bowling</button>
                </div>
            </div>
        `);
    });

    // Final Choice after Date is Selected
    $(document).on("click", ".stay-in-container button, .go-out-container button", function () {
        $("body").html(`
            <div class="final-message-container">
                <div class="image-container">
                    <img src="cute-bears-love.gif" alt="Great Choice Image" class="great-choice-image">
                </div>
                <h2>Great choice!</h2>
                <p>My life would be un<b>BEAR</b>able without you! You are the light of my days 365 days of the year (plus the funny one every 4 years). Thanks to you, my heart grows expoentially for everyone of those days just so I can love you harder. Happy Valentines Day my love! I can't wait to see what you selected. ❤️</p>
            </div>
        `);
    });
});
