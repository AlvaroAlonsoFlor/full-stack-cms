package com.codeclan.projects.cms.components;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import com.codeclan.projects.cms.models.enums.UserType;
import com.codeclan.projects.cms.repositories.ArticleRepository.ArticleRepository;
import com.codeclan.projects.cms.repositories.UserRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Calendar;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ArticleRepository articleRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        User user1 = new User("John", "Donuts", UserType.EDITOR);
        User user2 = new User("Kate", "Unicorn", UserType.EDITOR);

        userRepository.save(user1);
        userRepository.save(user2);

        Calendar date1 = Calendar.getInstance();
        date1.set(2018,12,10);

        Calendar date2 = Calendar.getInstance();
        date2.set(2018,11,9);

        Calendar date3 = Calendar.getInstance();
        date3.set(2024,4,9);



        Article article1 = new Article ("Refuel", "Life Skills: Relaxing, Re-setting, Refuelling", "Cupcake ipsum dolor sit amet. Carrot cake muffin wafer caramels sweet roll lemon drops. Muffin tiramisu apple pie sesame snaps. Cotton candy jelly beans cotton candy chupa chups carrot cake liquorice powder donut tiramisu. Muffin powder cake chocolate chocolate cake tiramisu. Powder sweet roll apple pie biscuit oat cake cookie cake lemon drops lemon drops. Cotton candy sweet roll jujubes chocolate cake pie croissant cake icing topping. Dragée jelly-o topping cotton candy sesame snaps macaroon caramels. Candy canes cookie jelly. \n Macaroon bonbon pudding cotton candy croissant gummi bears danish sugar plum jelly-o. Lollipop bear claw chocolate cake. Chupa chups chocolate cake tart. Gummi bears sweet roll chocolate liquorice chocolate soufflé sesame snaps dessert. Jujubes dragée fruitcake lollipop. Sesame snaps cake topping. Apple pie sweet sweet chupa chups wafer ice cream halvah jelly chocolate bar. Bonbon soufflé ice cream pudding apple pie marzipan. \nTootsie roll ice cream tootsie roll icing tart chupa chups sweet pastry cookie. Powder cheesecake pastry. Cookie sesame snaps apple pie dragée pudding jelly beans. Chocolate bar biscuit cheesecake. Donut cheesecake cotton candy gummi bears toffee sweet cotton candy dessert lemon drops. Jelly-o lemon drops topping bonbon. Toffee jujubes tiramisu cotton candy. Sweet cake biscuit cheesecake oat cake. Muffin carrot cake lollipop lollipop macaroon pie muffin. Sweet roll chocolate bar powder pie jujubes candy canes bear claw.\nTopping carrot cake soufflé dragée. Toffee sesame snaps macaroon cupcake carrot cake jelly-o jelly beans chupa chups chupa chups. Chocolate cake apple pie pudding sugar plum. Fruitcake cake cotton candy. Oat cake caramels chocolate cake. Tootsie roll gingerbread dessert bonbon candy canes jelly beans jelly-o lollipop tart. Soufflé sweet pie candy canes candy. Ice cream cake jelly-o.\nCroissant pudding apple pie dessert candy canes cupcake candy tootsie roll dragée. Caramels topping liquorice cookie gummi bears croissant wafer pie cake. Sugar plum sweet soufflé candy sesame snaps. Jelly beans tart sweet gummies soufflé toffee chocolate. Croissant powder apple pie cupcake brownie. Jelly-o caramels topping cake. Soufflé bear claw toffee pudding brownie icing sugar plum tart tart" , "self-care", date1, user1);

        Article article2 = new Article ("Grain of Truth", "Can Vegans Handle The Unpalatable Truth About Quinoa?", "Lorem ipsum dolor amet la croix blue bottle yuccie slow-carb waistcoat offal, synth woke gastropub wolf cliche activated charcoal bespoke subway tile. Unicorn actually locavore woke, williamsburg taiyaki deep v bushwick. Offal gluten-free street art salvia etsy typewriter. Subway tile portland man braid neutra, irony gluten-free master cleanse pickled sartorial umami.\n Whatever neutra scenester kinfolk franzen. Forage marfa tattooed, vinyl distillery knausgaard XOXO ethical swag cred irony shoreditch. 3 wolf moon shaman adaptogen, stumptown brooklyn pabst ethical slow-carb palo santo ennui. Trust fund hoodie flexitarian hella shabby chic sartorial hexagon pinterest poke. Chicharrones farm-to-table forage before they sold out 3 wolf moon semiotics freegan fam gluten-free DIY listicle. Venmo viral disrupt normcore marfa hella drinking vinegar authentic pop-up ethical.\n Jianbing artisan cold-pressed cred you probably haven't heard of them hexagon jean shorts wayfarers unicorn palo santo edison bulb pinterest. Keffiyeh hammock cray, four dollar toast vape paleo freegan hella. Gastropub photo booth actually squid, ramps skateboard kale chips subway tile scenester try-hard activated charcoal raw denim. Taiyaki godard gochujang cronut next level vaporware. Cardigan narwhal adaptogen vaporware, iceland XOXO fashion axe typewriter tilde church-key. \n Distillery pok pok meh 90's lo-fi adaptogen cold-pressed kinfolk jianbing food truck taxidermy. Listicle irony mixtape tousled gentrify. VHS asymmetrical williamsburg, coloring book chartreuse succulents kinfolk bespoke wolf hell of. Banh mi actually meggings, hell of swag chillwave helvetica crucifix. Hoodie austin tacos, occupy affogato shaman blue bottle pok pok viral. \n Bitters gentrify ethical, chartreuse master cleanse unicorn blog gastropub quinoa +1 deep v tacos. Austin fam trust fund schlitz flannel iceland waistcoat, pabst raclette cray succulents lumbersexual. Live-edge subway tile raw denim messenger bag iceland kinfolk kombucha prism hoodie migas marfa ethical kogi poutine twee. Lo-fi beard XOXO gluten-free microdosing. Adaptogen microdosing bicycle rights venmo pitchfork seitan. \n Oh. You need a little dummy text for your mockup? How quaint. \n I bet you’re still using Bootstrap too…", "hipster", date2, user2);

        Article article3 = new Article ("Polar Opposites", "Is It Ok For Scientists to Weep Over Climate Change?", "Cat ipsum dolor sit amet, chase laser. Purr slap kitten brother with paw dont wait for the storm to pass, dance in the rain. Run in circles see owner, run in terror yet knock over christmas tree and jump five feet high and sideways when a shadow moves but show belly. Gate keepers of hell hiiiiiiiiii feed me now so attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently for ptracy stare at imaginary bug. Eat an easter feather as if it were a bird then burp victoriously, but tender the dog smells bad warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats. Slap kitten brother with paw mark territory scoot butt on the rug slap owner's face at 5am until human fills food dish. Hiss at vacuum cleaner spend all night ensuring people don't sleep sleep all day. \n The dog smells bad stuff and things hack up furballs yet all of a sudden cat goes crazy a nice warm laptop for me to sit on the fat cat sat on the mat bat away with paws. Hide when guests come over hiding behind the couch until lured out by a feathery toy so leave fur on owners clothes, so mark territory, and meowing non stop for food open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow!, and lick the plastic bag. Meowing non stop for food eat the fat cats food and hide at bottom of staircase to trip human eat from dog's food. I love cuddles ignore the human until she needs to get up, then climb on her lap and sprawl. Yowling nonstop the whole night small kitty warm kitty little balls of fur kitty poochy, bite the neighbor's bratty kid put butt in owner's face jump off balcony, onto stranger's head. Friends are not food floof tum, tickle bum, jellybean footies curly toes so russian blue meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat munch on tasty moths so eat plants, meow, and throw up because i ate plants catasstrophe. Slap owner's face at 5am until human fills food dish walk on car leaving trail of paw prints on hood and windshield for hiss at vacuum cleaner. Missing until dinner time chase laser plan steps for world domination. Cough furball paw at your fat belly meoooow scratch leg; meow for can opener to feed me ooh, are those your $250 dollar sandals? lemme use that as my litter box lie in the sink all day. The dog smells bad. Stretch chase mice. Cuddle no cuddle cuddle love scratch scratch toilet paper attack claws fluff everywhere meow miao french ciao litterbox give me some of your food give me some of your food give me some of your food meh, i don't want it ignore the squirrels, you'll never catch them anyway, yet scamper. Meowing chowing and wowing have secret plans. Man running from cops stops to pet cats, goes to jail purr. Crash against wall but walk away like nothing happened paw at your fat belly. Catasstrophe. Toilet paper attack claws fluff everywhere meow miao french ciao litterbox spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce inspect anything brought into the house, or cough furball. Headbutt owner's knee. Slap kitten brother with paw. \n Making sure that fluff gets into the owner's eyes spend all night ensuring people don't sleep sleep all day have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat bite nose of your human chew on cable floof tum, tickle bum, jellybean footies curly toes so shake treat bag. Poop in litter box, scratch the walls. Stares at human while pushing stuff off a table mrow. Hide at bottom of staircase to trip human leave fur on owners clothes hide from vacuum cleaner howl uncontrollably for no reason cat slap dog in face yet chase ball of string so lick butt and make a weird face. Give attitude refuse to drink water except out of someone's glass or eat the rubberband hunt anything that moves, so scratch me there, elevator butt yet cuddle no cuddle cuddle love scratch scratch. Ask to go outside and ask to come inside and ask to go outside and ask to come inside crash against wall but walk away like nothing happened i shredded your linens for you and spend six hours per day washing, but still have a crusty butthole but cereal boxes make for five star accommodation or meow sleep on keyboard. Always hungry. Gate keepers of hell chase mice mewl for food at 4am play riveting piece on synthesizer keyboard this human feeds me, i should be a god, yet groom forever, stretch tongue and leave it slightly out, blep swat at dog. Plays league of legends all of a sudden cat goes crazy annoy owner until he gives you food say meow repeatedly until belly rubs, feels good eat an easter feather as if it were a bird then burp victoriously, but tender. Dont wait for the storm to pass, dance in the rain dream about hunting birds if it smells like fish eat as much as you wish pretend not to be evil and love, hide at bottom of staircase to trip human the dog smells bad.", "Climate", date1, user2);

        Article article4 = new Article("Dummy article", "With a dummy lead", "And a clumsy body", "dummy", date3, user1);

        articleRepository.save(article1);
        articleRepository.save(article2);
        articleRepository.save(article3);
        articleRepository.save(article4);




    }
}
