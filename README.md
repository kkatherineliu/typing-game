## It's Raining Words!

This is a super simple typing game where you just have to finish typing the words before they read the dotted red line. 
I coded this mainly to learn how to use basic HTML/CSS and JavaScript syntax from scratch so I definitely spent a lot of time reading through W3Schools to figure out what was possible.

Here are some of the things I learned:
- using HTML DOM to access various components of the HTML or CSS files within my JS code
- for each loops in JS
- anonymous functions in JS
- setting time delays using setInterval and setTimeout in JS
- using flexbox (even though I only had 2 side by side portions)
- resizing to suit different screen sizes
- using Google Fonts
- basic stying of boxes and text

Overall a fun beginner project and as a typing nerd I still find it quite fun to play. Here's a demo with some raw typing (and background) audio.
Play it yourself right **[here](https://kkatherineliu.github.io/typing-game/)** :)) 

https://github.com/kkatherineliu/typing-game/assets/80860203/238b24b0-2c8d-4333-8681-42c02fcc6c8f

___
### outstanding issues
- resizing does not affect word generation live (since boardWidth and boardHeight are just initialized once at the beginning)
    - note: is it possible to detect screen resizing to then re-calculate the height and width at that moment?
- mobile mode gameboard display should be full width but it is stuck at 75vw

### possible features for the future
- prettier UI (maybe fit the theme of raining)
- include images or sound
- let the game board be resizeable by dragging the corners
- better game over display
    - leaderboard of top 5
- user input of "difficulty" and changing the speed/timeDelay accordingly
- using Random Word API to continuously generate "random words" so its not just using the same 50 words over and over again
- options for how long to play the game for (and then just diving into basic typing game territory)
