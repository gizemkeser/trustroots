import React from 'react';
import { selectPhoto } from '@/modules/core/client/services/photos.service';

export default function Volunteering() {
  const photo = selectPhoto('happyhippies');
  return <>
    <section className="board volunteer-header board-happyhippies" style={{ backgroundImage: `url("${photo.imageUrl}")` }}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <br/><br/>
            <i className="icon-3x icon-heart-o"></i>
            <br/><br/>
            <h2>Volunteering</h2>
          </div>
        </div>
      </div>
      <div></div>
    </section>
    <section className="container container-spacer">
      <div className="row">
        <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-2 col-md-8">
          <p className="lead">Trustroots is a community of travellers for sharing, hosting and getting people
            together.</p>
          <p>Help us build Trustroots! Nobody can do everything, but everyone can do something.</p>
          <p><a href="https://github.com/Trustroots/trustroots/wiki/Volunteering">Current positions and more info</a></p>
        </div>
      </div>
    </section>
  </>;
}

Volunteering.propTypes = {};
