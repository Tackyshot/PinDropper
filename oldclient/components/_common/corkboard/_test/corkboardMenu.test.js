'use strict';

import React          from 'react';
import {shallow}      from 'enzyme'
import Code           from 'code';   // assertion library
//component to test
import CorkboardMenu  from '../../client/components/_common/corkboard/corkboardMenu.jsx';

describe('<CorkboardMenu />', () => {

  it('should render a cbMenuBar div', ()=>{
    const wrapper = shallow(
      <CorkboardMenu />
    );

    Code.expect(wrapper.contains(<div className="cbMenuBar"></div>)).to.equal(true);
  });

});