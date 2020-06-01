class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    let selectedIndex = Math.floor(Math.random() * 3);
    return acceptedValues[selectedIndex];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if(userSelection == cpuSelection)
    return "tie";

    else if(userSelection == "rock"  && cpuSelection == "scissors")
    return "win";
    else if(userSelection == "paper" && cpuSelection == "rock")
    return "win";
    else if(userSelection == "scissors" && cpuSelection == "paper")
    return "win";

    else 
    return "lose";
   
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  

  play(userSelection){

    var e = document.getElementById("user-selection");
    var result = e.options[e.selectedIndex].value;

    //const NEW_SCORE = 2;
    const cpuResponse = this.generateCPUResponse();
    //console.log("This is cpuResponse " + cpuResponse);
    //console.log("This is userSelection " + userSelection);
    const results = this.determineWinner(userSelection, cpuResponse);
    //console.log("These are results: " + results);

    console.log(this.username)

    if(results == "win")
    {
      this.score.user++;
      this.gameHistoryLog.push(this.username + " selected " + userSelection + ", CPU selected " + cpuResponse + ": " + this.username + " wins<br>");
    }
    else if(results == "lose")
    {
      this.score.cpu++;
      this.gameHistoryLog.push(this.username + " selected " + userSelection + ", CPU selected " + cpuResponse + ": " + this.username + " loses<br>");
    }
    else if(results == "tie")
    {
      this.gameHistoryLog.push(this.username + " selected " + userSelection + ", CPU selected " + cpuResponse + ": " + this.username + " tied<br>");
    }

    //this.score = {
      //user: NEW_SCORE,
      //cpu: NEW_SCORE
    //}
    //this.gameHistoryLog.push(`Parneet selected Scissors, CPU selected Paper: Parneet wins wins`);

  }

}