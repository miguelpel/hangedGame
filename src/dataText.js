let data = {
    //////////////////
    // scene: 1
    // game state: "scenario"
    // button: "buy a rope." => ropes+=1 => load next button;
    // button: "buy a moveable step." => load 2 buttons: "The Green One", "Just whatever moveable step"
    // => movableSteps {"green"+=1} or {"normal"+=1} => load next button
    // button: "find Gallows" => load 2 buttons: "With View", "What the hell!"
    // => gallows {"withView"+=1} or {"normal"+=1} => load next button
    // button: "Hang yourself." => animation. GoTo => game state 2
    //////////////////
    // scene: 2
    // game state: "scenario"
    // JULES IS HANGING
    // => comment: "You didn't have an erection."
    // => comment: "You didn't die either."
    // => button: "Get done with it and leave."
    // => comment: "You can't. You're hanged."
    // => comment: "What now?"
    // RAND {
    // => button: "Swing." => sound.
    // => comment: "You swing."
    // => comment: "Have fun?"
    // => comment: "you're screwed."
    // => comment: "What now?"
    // => button: "Swing." => sound.
    // => comment: "A girl come around."
    //}
    // => comment: "She has a rope around the neck."
    // => goTo game state 2
    //////////////////
    // scene: 3
    // game state: "scenario"
    // NANA IS AROUND
    // button: "Ask het to get you down."
    // => dialogue: "You really want to go back there?" 
    // => buttons: "No.", "Yes"
    // if "yes":
    // => comment: "She gets you down." => comment: "you go back there." => end game. 
    // if "no":
    // => dialogue: "Fine. May I borrow your step?"
    // => button: "No."
    // => dialogue: "You don't use it anymore, do you?"
    // => buttons: "It's my movable step.", "Are you, like, brit or something?"
    // if "Are you..." => dialogue: "And are you, like, hanging or something?"
    // Else => dialogue: "Have you any damn idea of your current situation?"
    // => button: "Propose to sale her the movable step."
    // => dialogue: "What for?"
    // => button : "A rope.", "I don't know. Anything. (No use to click on this one.)"
    // => if 'I don't know" => sound: plastic duck and :comment: "told you."
    // Either/or:
    // => dialogue: "I got some spare rope."; 
    // HERE depends of the moveable step. If green => ropes += 3
    // => button: "Take it!" => ropes+=1;
    // => dialogue: "Got a spare spot?"
    // => buttons: "Sure!", "It's my gallows!"
    // if "it's my gallows!" => dialogue: "Fine! How much?"
    // => buttons: "1", "5", "124" $ANSWER
    // => dialogue: "$ANSWER of what?"
    // => buttons: "Rope.", "I don't know. (No use to click)"
    // => if 'I don't know" => sound: plastic duck and :comment: "Think we have a running gag."
    // Either/or:
    // if $ANSWER 1 or 5 => dialogue: "Ok."
    // if $ANSWER 124 => dialogue: "you got long-term discount?" (fidelity card)
    // => button: "What you got?"
    // => dialogue: "$1or5 more spare rope(s)"
    // => button: "take it!" => ropes+= $1or5
    // => comment: "We're all set?"
    // => comment: "She hangs herself."
    // => Animation(the gallows tremble and screaks) => change layout. => goTo gameState 3
    /////////////////
    // scene: 4
    // game state: "scenario"
    // NANA IS HANGING
    // if $Gallows with view => dialogue: "nice view!"
}