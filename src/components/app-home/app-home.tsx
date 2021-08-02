import { Component, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})

export class AppHome {
  @Prop() stepsArray:number[];
  @State() clickedIndex : number;
  @State() completedSteps : number[];
  
  //save clicked index as a local state
  handleClick(index){
    if(index < this.stepsArray.length){
      this.clickedIndex = index;
    }
  }
  //render the color for clicked element
  componentDidRender(){
    if(this.clickedIndex >= 0){
      //make clicked element active(green)
      for(let i = 0 ; i <= this.clickedIndex ; i++){
        document.getElementById((i+1).toString()).className = "active"
      }
      //make unClicked element deactive(gray)
      for(let j = this.stepsArray.length ; j > this.clickedIndex+1 ; j--){
          document.getElementById((j).toString()).className = "deactive"
      }
    }
  }

  renderSteps(){
    //render the list of steps
    return this.stepsArray.map(item =>{
      return <li id={item.toString()} onClick={()=> this.handleClick(item -1)}>Steps{item}</li>
    })
  }

  render() {
    return [
      <div>
        <div class="container">
          <ul class="progressbar">
            {this.renderSteps()}
          </ul>
        </div>
        <div>Completed Steps : {this.clickedIndex >=0 ? this.stepsArray.slice(0,this.clickedIndex+1) : []}</div>
        <div>Pending Steps : {this.clickedIndex < 0 ?  []:this.stepsArray.slice(this.clickedIndex+1)}</div>
      </div>
    ];
  }
}
