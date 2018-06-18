import React from 'react';
import ReactDOM from 'react-dom';

export default class Dom extends React.Component {
  myRef = React.createRef();
  scroll = () => {
    console.dir(this.myRef.current)
    this.myRef.current.scrollTop = this.myRef.current.scrollHeight
  }
  render() {
    return (
      <div>
        <div ref={this.myRef} style={{height: 200, width: 200, overflow: 'scroll'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar auctor lobortis. Curabitur nibh turpis, maximus et felis vel, interdum interdum velit. Proin rutrum lacus quis tincidunt laoreet. Phasellus pretium eros nisl, non molestie leo dictum rutrum. Nullam mollis quam sed euismod facilisis. Suspendisse quis interdum metus, ut dignissim risus. In quis maximus diam, eget tincidunt eros. Aenean sem erat, lacinia in urna in, hendrerit dignissim odio. Vestibulum congue fringilla massa et ornare. Cras a feugiat ipsum.

  Nullam fringilla ut nisi ultrices ultricies. Cras at congue purus, convallis sagittis odio. Donec varius nibh in arcu mollis fringilla. Nam hendrerit placerat metus in venenatis. Suspendisse gravida a nunc ac lobortis. Curabitur efficitur eu augue eget porta. Suspendisse potenti. Sed fermentum sagittis massa, egestas dapibus ante placerat in. Suspendisse nec suscipit purus. Donec eu lacinia ligula, eget malesuada ipsum. Aliquam quis enim lectus.
        </div>
        <button onClick={this.scroll} type="button">scroll</button>
      </div>
    )
  }
}
