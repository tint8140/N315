var homeContent = ` <div class="home">
<div class="home__content">
    <h1>Nature Lovers</h1>
    <p class="lp">Always Live in the moment!</p>
</div>
<p class="home__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore error hic, id ab atque reiciendis sit quidem, nesciunt repellendus dolorem deleniti. Fuga saepe harum ipsam neque? Repellendus quod illum soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore error hic, id ab atque reiciendis sit quidem, nesciunt repellendus dolorem deleniti. Fuga saepe harum ipsam neque? Repellendus quod illum soluta!</p>
</div>`;

var aboutContent = ` <div class="about">
<div class="about__content"></div>
<h2 class="about__header">About</h2>
<p class="about__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore error hic, id ab atque reiciendis sit quidem, nesciunt repellendus dolorem deleniti. Fuga saepe harum ipsam neque? Repellendus quod illum soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore error hic, id ab atque reiciendis sit quidem, nesciunt repellendus dolorem deleniti. Fuga saepe harum ipsam neque? Repellendus quod illum soluta!</p>
</div>`;

var galleryContent = ` 
<div class="gallery">
<div class="gallary__images">
    <div class="gallery__partOne">
        <a class="sunset" href="#"></a>
        <a class="flowers" href="#"></a>
    </div>
    <div class="gallery__partTwo">
        <a class="chipmunk" href="#"></a>
        <a class="butterfly" href="#"></a>
    </div>
</div>
<h2 class="gallery__header">About</h2>
<p class="gallery__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore error hic, id ab atque reiciendis sit quidem, nesciunt repellendus dolorem deleniti. Fuga saepe harum ipsam neque? Repellendus quod illum soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore error hic, id ab atque reiciendis sit quidem, nesciunt repellendus dolorem deleniti. Fuga saepe harum ipsam neque? Repellendus quod illum soluta!</p>
</div>`;

var contactContent = ` 
<div class="contact">
<div class="contact__content">
<h2>CONTACT US</h2>
    <form>
        <div>
            <input class="input" type="name" placeholder="Full Name">
        </div>
        <div>
            <input class="input" type="email" placeholder="Email Adress">
        </div>
        <div id="message">
            <input  class="contact-input" type="message" placeholder="Message">
        </div>
        <input class="submit" type="submit" value="MESSAGE">
    </form>
</div>
</div>`;


export function getPageContent(pageId, callback) {
    $("#content").html(eval(pageId));
    if (callback){
        callback();
    }
};