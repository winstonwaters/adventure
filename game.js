var bachelorette = prompt("JoJo is this season’s bachelorette. She is down to her final three contestants, but only has one rose to give. She wants your help in giving out her final rose. What is most important in picking the man of her dreams? A guy that has brains, looks, or money?");
debugger
switch (bachelorette) {
  case 'brains':
  alert("I hear ya smarty pants! You helped JoJo pick Dr. Derek! One mcsteamy marriage is headed her way.");
  break;

  case 'looks':
    var twoMen = prompt("Two of the final contestants are good lookin'. What is more important, someone who is honest or funny?");
    if (twoMen === "honest") {
      alert("Congrats, you picked Jordan Rodgers! What up Aaron as JoJo's brother in law")
    } else {
      alert("Funny man on deck, JoJo ends up with Luke!");
    }
  break;

  case 'money':
  alert("Show me da money. All hail future dutchess JoJo and Prince Harry!");
  break;
  default:
    alert("JoJo is single forever");
}
