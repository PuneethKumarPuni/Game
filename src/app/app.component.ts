import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rock-paper-scisers';

  public computerResult: string="";
  public result: string="";
  public results = { computer: 0, player: 0 };

  private userResult: string="";
 Displaycon: string="";

  public play(action: string): void {
    console.log('USER: ', action);
    this.userResult = action;
    this.computer();
    this.calculateWinner();
  }

  private computer(): void {
    const randomNumber = Math.floor(Math.random() * 3);
    const options: string[] = [ 'rock', 'paper', 'scissors' ];

    console.log('COMPUTER: ', options[randomNumber]);
    this.computerResult = options[randomNumber];
  }

  private calculateWinner(): void {

    if (this.userResult === 'rock' && this.computerResult === 'rock') {
      this.results.computer++;
      this.result = 'There was a tie / draw';
      this.Displaycon='assets/rock/rockrock.gif';
    }
    if (this.userResult === 'scissors' && this.computerResult === 'scissors') {
      this.results.computer++;
      this.result = 'There was a tie / draw';
      this.Displaycon='assets/rock/sissis.gif';
    }
    if (this.userResult === 'paper' && this.computerResult === 'paper') {
      this.results.computer++;
      this.result = 'There was a tie / draw';
      this.Displaycon='assets/paper/paperpaer.gif';
    }

    if (this.userResult === 'rock' && this.computerResult === 'paper') {
      this.results.computer++;
      this.result = 'Computer wins';
      this.Displaycon='assets/rock/rockpaper.gif';
    }
    if (this.userResult === 'rock' && this.computerResult === 'scissors') {
      this.results.player++;
      this.result = 'You win';
      this.Displaycon='assets/rock/rocksis.gif';
    }
    if (this.userResult === 'paper' && this.computerResult === 'rock') {
      this.results.player++;
      this.result = 'You win';
      this.Displaycon='assets/paper/paperrock.gif';
    }
    if (this.userResult === 'paper' && this.computerResult === 'scissors') {
      this.results.computer++;
      this.result = ' Computer wins';
      this.Displaycon='assets/paper/papersis.gif';
    }
    if (this.userResult === 'scissors' && this.computerResult === 'rock') {
      this.results.computer++;
      this.result = ' Computer wins';
      this.Displaycon='assets/scissor/sisrock.gif';
    }
    if (this.userResult === 'scissors' && this.computerResult === 'paper') {
      this.results.player++;
      this.result = ' You win';
      this.Displaycon='assets/scissor/sispaper.gif';
    }
  }
  paper=["assets/paper/paperpaer.gif","assets/paper/paperrock.gif","assets/paper/papersis.gif"]
  rock=["assets/rock/rockpaper.gif","assets/rock/rockrock.gif","assets/rock/rocksis.gif"]
  scissoer=["assets/scissor/sissis.gif","assets/scissor/sisrock.gif","assets/scissor/sispaper.gif"]
}
