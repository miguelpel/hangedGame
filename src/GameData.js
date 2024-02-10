// act can't be skipped.
// scene cant' be skipped. Contains animations.
// steps can be skipped.

let GameData;
export default GameData = {
    acts: [{
            number: 1,
            scenes: [{
                    number: 1,
                    animation: 'new BgAnim(app, window.innerWidth, window.innerHeight)',
                    steps: [{
                            number: 0,
                            buttons: [{
                                text: "BUY A ROPE",
                                onclick: {
                                    goTo: "next",
                                    addRope: 1
                                }
                            }],
                            color: 'black'
                        }, {
                            number: 1,
                            comments: [{
                                text: "Buy a moveable step:",
                                wait: 1
                            }],
                            buttons: [{
                                text: "THE GREEN ONE",
                                onclick: {
                                    addGreenMoveableStep: 1,
                                    goTo: 2
                                }
                            }, {
                                text: "JUST WATEVER MOVEABLE STEP!",
                                onclick: {
                                    addMoveableStep: 1,
                                    goTo: 2
                                }
                            }],
                            color: 'black'
                        }, {
                            number: 2,
                            comments: [{
                                text: "Find gallows:",
                                wait: 1
                            }],
                            buttons: [{
                                text: "WITH VIEW",
                                onclick: {
                                    addGallowsWithView: 1,
                                    goTo: 3
                                }
                            }, {
                                text: "WHAT THE HELL!?",
                                onclick: {
                                    addGallows: 1,
                                    goTo: 3
                                }
                            }],
                            color: 'black'
                        }, {
                            number: 3,
                            buttons: [{
                                text: "HANG YOURSELF",
                                onclick: {
                                    goTo: 4
                                }
                            }],
                            color: 'black'
                        }, {
                            number: 4,
                            animation: {
                                action: 'hang',
                                wait: 5
                            },
                            comments: [{
                                text: "You don't have an erection.",
                                wait: 3
                            }, {
                                text: "You don't die either.",
                                wait: 3
                            }, {
                                text: "What now?",
                                wait: 3
                            }],
                            color: 'white',
                            goTo: 5
                        }, {
                            number: 5,
                            buttons: [{
                                text: "GET DONE WITH IT AND LEAVE.",
                                wait: 3,
                                onclick: {
                                    goTo: 6
                                }
                            }],
                            color: 'white',
                        }, {
                            number: 6,
                            comments: [{
                                text: "You can't. You're hanged",
                                wait: 3
                            }, {
                                text: "Now what?",
                                wait: 3
                            }],
                            goTo: 7,
                            color: 'white'
                        }, {
                            number: 7,
                            buttons: [{
                                text: "SWING.",
                                onclick: {
                                    goTo: 8,
                                }
                            }],
                            color: 'white',
                        }, {
                            number: 8,
                            animation: {
                                action: 'swing',
                                wait: 3
                            },
                            comments: [{
                                text: "You swing.",
                                wait: 3
                            }, {
                                text: "Have fun?",
                                wait: 3
                            }, {
                                text: "Now what?",
                                wait: 3
                            }],
                            goTo: 9,
                            color: 'white',
                        }, {
                            number: 9,
                            buttons: [{
                                text: "SWING.",
                                onclick: {
                                    goTo: 10
                                }
                            }],
                            color: 'white',
                        }, {
                            number: 10,
                            animation: {
                                action: 'swing',
                                wait: 5
                            },
                            comments: [{
                                text: "A girl comes around.",
                                wait: 3
                            }, {
                                text: "She has a rope around her neck.",
                                wait: 3
                            }],
                            goTo: 11,
                            color: 'white'
                        }] // steps
                }] // scenes
        }] // acts
}