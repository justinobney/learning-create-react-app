import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Segment } from 'semantic-ui-react'

const mapStateToProps = (state) => ({
  clicks: state.counter.clicks
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({type: 'CLICK'})
});

export class Home extends Component {
  render() {
    return (
      <Container className="main">
        <Segment>
          <Container text>
            <Header as='h1'
              content={`Foo ${this.props.clicks}`}
              subheader='Aenean massa strong.'
              onClick={this.props.onClick} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim. Donec pede justo,
              fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
              rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
              felis eu pede link mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
              tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
              ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
              tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
              rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi.
            </p>
          </Container>
        </Segment>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
