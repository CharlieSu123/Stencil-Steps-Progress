import { State,Component, h} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})

export class AppRoot {
  @State() steps:number[]

  componentDidLoad(){
    this.steps = [1,2,3,4,5]
  }
  render() {
    return (
      <div>
        <h2>Steps Progress Bar</h2>
        <app-home stepsArray={this.steps}/>
      </div>
    );
  }
}
