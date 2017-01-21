'use strict';

import React      from 'react';
import {shallow}  from 'enzyme'
import Code       from 'code';   // assertion library
//component to test
import Corkboard  from '../../client/components/_common/corkboard/corkboard.jsx';

describe('<Corkboard />', () => {

  it('should render a canvas div', ()=>{
    const wrapper = shallow(
      <Corkboard />
    );

    Code.expect(wrapper.contains(<div className="canvas"></div>)).to.equal(true);
  });

  it('should render a canvasTools div', ()=>{
    const wrapper = shallow(
      <Corkboard />
    );

    Code.expect(wrapper.contains(<div className="canvasTools"></div>)).to.equal(true);
  });

  it('should render a corkboardMenus div', ()=>{
    const wrapper = shallow(
      <Corkboard />
    );

    Code.expect(wrapper.contains(<div className="corkboardMenus"></div>)).to.equal(true);
  });

});